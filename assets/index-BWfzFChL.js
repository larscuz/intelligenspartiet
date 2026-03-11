(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ep={exports:{}},Fl={};var ev;function lM(){if(ev)return Fl;ev=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Fl.Fragment=t,Fl.jsx=i,Fl.jsxs=i,Fl}var nv;function cM(){return nv||(nv=1,ep.exports=lM()),ep.exports}var Wn=cM(),np={exports:{}},ge={};var iv;function uM(){if(iv)return ge;iv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,M={};function S(I,W,ht){this.props=I,this.context=W,this.refs=M,this.updater=ht||T}S.prototype.isReactComponent={},S.prototype.setState=function(I,W){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,W,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=S.prototype;function L(I,W,ht){this.props=I,this.context=W,this.refs=M,this.updater=ht||T}var D=L.prototype=new C;D.constructor=L,U(D,S.prototype),D.isPureReactComponent=!0;var B=Array.isArray;function z(){}var H={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function w(I,W,ht){var Et=ht.ref;return{$$typeof:r,type:I,key:W,ref:Et!==void 0?Et:null,props:ht}}function J(I,W){return w(I.type,W,I.props)}function P(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function q(I){var W={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ht){return W[ht]})}var nt=/\/+/g;function it(I,W){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):W.toString(36)}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(z,z):(I.status="pending",I.then(function(W){I.status==="pending"&&(I.status="fulfilled",I.value=W)},function(W){I.status==="pending"&&(I.status="rejected",I.reason=W)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function N(I,W,ht,Et,Ot){var et=typeof I;(et==="undefined"||et==="boolean")&&(I=null);var dt=!1;if(I===null)dt=!0;else switch(et){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(I.$$typeof){case r:case t:dt=!0;break;case _:return dt=I._init,N(dt(I._payload),W,ht,Et,Ot)}}if(dt)return Ot=Ot(I),dt=Et===""?"."+it(I,0):Et,B(Ot)?(ht="",dt!=null&&(ht=dt.replace(nt,"$&/")+"/"),N(Ot,W,ht,"",function(Zt){return Zt})):Ot!=null&&(P(Ot)&&(Ot=J(Ot,ht+(Ot.key==null||I&&I.key===Ot.key?"":(""+Ot.key).replace(nt,"$&/")+"/")+dt)),W.push(Ot)),1;dt=0;var bt=Et===""?".":Et+":";if(B(I))for(var Vt=0;Vt<I.length;Vt++)Et=I[Vt],et=bt+it(Et,Vt),dt+=N(Et,W,ht,et,Ot);else if(Vt=y(I),typeof Vt=="function")for(I=Vt.call(I),Vt=0;!(Et=I.next()).done;)Et=Et.value,et=bt+it(Et,Vt++),dt+=N(Et,W,ht,et,Ot);else if(et==="object"){if(typeof I.then=="function")return N(Z(I),W,ht,Et,Ot);throw W=String(I),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return dt}function F(I,W,ht){if(I==null)return I;var Et=[],Ot=0;return N(I,Et,"","",function(et){return W.call(ht,et,Ot++)}),Et}function tt(I){if(I._status===-1){var W=I._result;W=W(),W.then(function(ht){(I._status===0||I._status===-1)&&(I._status=1,I._result=ht)},function(ht){(I._status===0||I._status===-1)&&(I._status=2,I._result=ht)}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var ft=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},_t={map:F,forEach:function(I,W,ht){F(I,function(){W.apply(this,arguments)},ht)},count:function(I){var W=0;return F(I,function(){W++}),W},toArray:function(I){return F(I,function(W){return W})||[]},only:function(I){if(!P(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ge.Activity=x,ge.Children=_t,ge.Component=S,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=L,ge.StrictMode=s,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ge.__COMPILER_RUNTIME={__proto__:null,c:function(I){return H.H.useMemoCache(I)}},ge.cache=function(I){return function(){return I.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(I,W,ht){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Et=U({},I.props),Ot=I.key;if(W!=null)for(et in W.key!==void 0&&(Ot=""+W.key),W)!b.call(W,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&W.ref===void 0||(Et[et]=W[et]);var et=arguments.length-2;if(et===1)Et.children=ht;else if(1<et){for(var dt=Array(et),bt=0;bt<et;bt++)dt[bt]=arguments[bt+2];Et.children=dt}return w(I.type,Ot,Et)},ge.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ge.createElement=function(I,W,ht){var Et,Ot={},et=null;if(W!=null)for(Et in W.key!==void 0&&(et=""+W.key),W)b.call(W,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ot[Et]=W[Et]);var dt=arguments.length-2;if(dt===1)Ot.children=ht;else if(1<dt){for(var bt=Array(dt),Vt=0;Vt<dt;Vt++)bt[Vt]=arguments[Vt+2];Ot.children=bt}if(I&&I.defaultProps)for(Et in dt=I.defaultProps,dt)Ot[Et]===void 0&&(Ot[Et]=dt[Et]);return w(I,et,Ot)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(I){return{$$typeof:d,render:I}},ge.isValidElement=P,ge.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:tt}},ge.memo=function(I,W){return{$$typeof:p,type:I,compare:W===void 0?null:W}},ge.startTransition=function(I){var W=H.T,ht={};H.T=ht;try{var Et=I(),Ot=H.S;Ot!==null&&Ot(ht,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(z,ft)}catch(et){ft(et)}finally{W!==null&&ht.types!==null&&(W.types=ht.types),H.T=W}},ge.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ge.use=function(I){return H.H.use(I)},ge.useActionState=function(I,W,ht){return H.H.useActionState(I,W,ht)},ge.useCallback=function(I,W){return H.H.useCallback(I,W)},ge.useContext=function(I){return H.H.useContext(I)},ge.useDebugValue=function(){},ge.useDeferredValue=function(I,W){return H.H.useDeferredValue(I,W)},ge.useEffect=function(I,W){return H.H.useEffect(I,W)},ge.useEffectEvent=function(I){return H.H.useEffectEvent(I)},ge.useId=function(){return H.H.useId()},ge.useImperativeHandle=function(I,W,ht){return H.H.useImperativeHandle(I,W,ht)},ge.useInsertionEffect=function(I,W){return H.H.useInsertionEffect(I,W)},ge.useLayoutEffect=function(I,W){return H.H.useLayoutEffect(I,W)},ge.useMemo=function(I,W){return H.H.useMemo(I,W)},ge.useOptimistic=function(I,W){return H.H.useOptimistic(I,W)},ge.useReducer=function(I,W,ht){return H.H.useReducer(I,W,ht)},ge.useRef=function(I){return H.H.useRef(I)},ge.useState=function(I){return H.H.useState(I)},ge.useSyncExternalStore=function(I,W,ht){return H.H.useSyncExternalStore(I,W,ht)},ge.useTransition=function(){return H.H.useTransition()},ge.version="19.2.4",ge}var av;function nm(){return av||(av=1,np.exports=uM()),np.exports}var ci=nm(),ip={exports:{}},Bl={},ap={exports:{}},sp={};var sv;function fM(){return sv||(sv=1,(function(r){function t(N,F){var tt=N.length;N.push(F);t:for(;0<tt;){var ft=tt-1>>>1,_t=N[ft];if(0<l(_t,F))N[ft]=F,N[tt]=_t,tt=ft;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var F=N[0],tt=N.pop();if(tt!==F){N[0]=tt;t:for(var ft=0,_t=N.length,I=_t>>>1;ft<I;){var W=2*(ft+1)-1,ht=N[W],Et=W+1,Ot=N[Et];if(0>l(ht,tt))Et<_t&&0>l(Ot,ht)?(N[ft]=Ot,N[Et]=tt,ft=Et):(N[ft]=ht,N[W]=tt,ft=W);else if(Et<_t&&0>l(Ot,tt))N[ft]=Ot,N[Et]=tt,ft=Et;else break t}}return F}function l(N,F){var tt=N.sortIndex-F.sortIndex;return tt!==0?tt:N.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,g=3,y=!1,T=!1,U=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=N)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function B(N){if(U=!1,D(N),!T)if(i(m)!==null)T=!0,z||(z=!0,q());else{var F=i(p);F!==null&&Z(B,F.startTime-N)}}var z=!1,H=-1,b=5,w=-1;function J(){return M?!0:!(r.unstable_now()-w<b)}function P(){if(M=!1,z){var N=r.unstable_now();w=N;var F=!0;try{t:{T=!1,U&&(U=!1,C(H),H=-1),y=!0;var tt=g;try{e:{for(D(N),x=i(m);x!==null&&!(x.expirationTime>N&&J());){var ft=x.callback;if(typeof ft=="function"){x.callback=null,g=x.priorityLevel;var _t=ft(x.expirationTime<=N);if(N=r.unstable_now(),typeof _t=="function"){x.callback=_t,D(N),F=!0;break e}x===i(m)&&s(m),D(N)}else s(m);x=i(m)}if(x!==null)F=!0;else{var I=i(p);I!==null&&Z(B,I.startTime-N),F=!1}}break t}finally{x=null,g=tt,y=!1}F=void 0}}finally{F?q():z=!1}}}var q;if(typeof L=="function")q=function(){L(P)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,it=nt.port2;nt.port1.onmessage=P,q=function(){it.postMessage(null)}}else q=function(){S(P,0)};function Z(N,F){H=S(function(){N(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(N){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var tt=g;g=F;try{return N()}finally{g=tt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var tt=g;g=N;try{return F()}finally{g=tt}},r.unstable_scheduleCallback=function(N,F,tt){var ft=r.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?ft+tt:ft):tt=ft,N){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=tt+_t,N={id:_++,callback:F,priorityLevel:N,startTime:tt,expirationTime:_t,sortIndex:-1},tt>ft?(N.sortIndex=tt,t(p,N),i(m)===null&&N===i(p)&&(U?(C(H),H=-1):U=!0,Z(B,tt-ft))):(N.sortIndex=_t,t(m,N),T||y||(T=!0,z||(z=!0,q()))),N},r.unstable_shouldYield=J,r.unstable_wrapCallback=function(N){var F=g;return function(){var tt=g;g=F;try{return N.apply(this,arguments)}finally{g=tt}}}})(sp)),sp}var rv;function hM(){return rv||(rv=1,ap.exports=fM()),ap.exports}var rp={exports:{}},pi={};var ov;function dM(){if(ov)return pi;ov=1;var r=nm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return pi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,pi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},pi.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},pi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},pi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},pi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},pi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},pi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},pi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},pi.requestFormReset=function(m){s.d.r(m)},pi.unstable_batchedUpdates=function(m,p){return m(p)},pi.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},pi.useFormStatus=function(){return h.H.useHostTransitionStatus()},pi.version="19.2.4",pi}var lv;function pM(){if(lv)return rp.exports;lv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rp.exports=dM(),rp.exports}var cv;function mM(){if(cv)return Bl;cv=1;var r=hM(),t=nm(),i=pM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,o=f;break}if(A===o){v=!0,o=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,o=u;break}if(A===o){v=!0,o=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case z:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:it(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return it(e(n))}catch{}}return null}var Z=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},ft=[],_t=-1;function I(e){return{current:e}}function W(e){0>_t||(e.current=ft[_t],ft[_t]=null,_t--)}function ht(e,n){_t++,ft[_t]=e.current,e.current=n}var Et=I(null),Ot=I(null),et=I(null),dt=I(null);function bt(e,n){switch(ht(et,n),ht(Ot,e),ht(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?T_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=T_(n),e=b_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(Et),ht(Et,e)}function Vt(){W(Et),W(Ot),W(et)}function Zt(e){e.memoizedState!==null&&ht(dt,e);var n=Et.current,a=b_(n,e.type);n!==a&&(ht(Ot,e),ht(Et,a))}function ne(e){Ot.current===e&&(W(Et),W(Ot)),dt.current===e&&(W(dt),Nl._currentValue=tt)}var ln,be;function ye(e){if(ln===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ln=n&&n[1]||"",be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ln+e+be}var ze=!1;function he(e,n){if(!e||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ct){var ot=ct}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ct){ot=ct}e.call(xt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var G=v.split(`
`),rt=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===rt.length)for(o=G.length-1,u=rt.length-1;1<=o&&0<=u&&G[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==rt[u]){var mt=`
`+G[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ye(a):""}function fn(e,n){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye("Lazy");case 13:return e.child!==n&&n!==null?ye("Suspense Fallback"):ye("Suspense");case 19:return ye("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return ye("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=fn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var en=Object.prototype.hasOwnProperty,Me=r.unstable_scheduleCallback,Ne=r.unstable_cancelCallback,Qt=r.unstable_shouldYield,O=r.unstable_requestPaint,E=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,Wt=r.unstable_LowPriority,wt=r.unstable_IdlePriority,ee=r.log,ae=r.unstable_setDisableYieldValue,Tt=null,St=null;function It(e){if(typeof ee=="function"&&ae(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Tt,e)}catch{}}var Nt=Math.clz32?Math.clz32:k,Ft=Math.log,pe=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Ft(e)/pe|0)|0}var At=256,Rt=262144,Ht=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Mt(o):(v&=A,v!==0?u=Mt(v):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=o&~f,A!==0?u=Mt(A):v!==0?u=Mt(v):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function We(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ii(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ai(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,rt=e.hiddenUpdates;for(a=v&~a;0<a;){var mt=31-Nt(a),xt=1<<mt;A[mt]=0,G[mt]=-1;var ot=rt[mt];if(ot!==null)for(rt[mt]=null,mt=0;mt<ot.length;mt++){var ct=ot[mt];ct!==null&&(ct.lane&=-536870913)}a&=~xt}o!==0&&La(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function La(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Nt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ya(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Nt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function zr(e,n){var a=n&-n;return a=(a&42)!==0?1:Ss(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ss(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ys(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zi(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:j_(e.type))}function Ms(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var Fi=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Fi,hn="__reactProps$"+Fi,Ki="__reactContainer$"+Fi,ga="__reactEvents$"+Fi,En="__reactListeners$"+Fi,fi="__reactHandles$"+Fi,_a="__reactResources$"+Fi,Qi="__reactMarker$"+Fi;function vn(e){delete e[Mn],delete e[hn],delete e[ga],delete e[En],delete e[fi]}function Ji(e){var n=e[Mn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ki]||a[Mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=L_(e);e!==null;){if(a=e[Mn])return a;e=L_(e)}return n}e=a,a=e.parentNode}return null}function Na(e){if(e=e[Mn]||e[Ki]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function va(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[_a];return n||(n=e[_a]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Qi]=!0}var lt=new Set,at={};function $(e,n){Lt(e,n),Lt(e+"Capture",n)}function Lt(e,n){for(at[e]=n,e=0;e<n.length;e++)lt.add(n[e])}var kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},Yt={};function Jt(e){return en.call(Yt,e)?!0:en.call(Ut,e)?!1:kt.test(e)?Yt[e]=!0:(Ut[e]=!0,!1)}function oe(e,n,a){if(Jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ue(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Gt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=nn(e)?"checked":"value";e._valueTracker=Ke(e,n,""+e[n])}}function An(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=nn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zn=/[\n"\\]/g;function se(e){return e.replace(Zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Rn(e,n,a,o,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+me(n)):e.value!==""+me(n)&&(e.value=""+me(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Ri(e,v,me(n)):a!=null?Ri(e,v,me(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+me(A):e.removeAttribute("name")}function hi(e,n,a,o,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Oe(e)}function Ri(e,n,a){n==="number"&&Xt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function di(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Xe(e,n,a){if(n!=null&&(n=""+me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+me(a):""}function mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Z(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=me(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function Kn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ci(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Bi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ci(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ci(e,f,n[f])}function qa(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ko=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ar(e){return uc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var Hr=null;function Dt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qt=null,Kt=null;function $t(e){var n=Na(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Rn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[hn]||null;if(!u)throw Error(s(90));Rn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&An(o)}break t;case"textarea":Xe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&di(e,!!a.multiple,n,!1)}}}var zt=!1;function de(e,n,a){if(zt)return e(n,a);zt=!0;try{var o=e(n);return o}finally{if(zt=!1,(qt!==null||Kt!==null)&&(Yc(),qt&&(n=qt,e=Kt,Kt=qt=null,$t(n),e)))for(n=0;n<e.length;n++)$t(e[n])}}function Fe(e,n){var a=e.stateNode;if(a===null)return null;var o=a[hn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var De=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),je=!1;if(De)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){je=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{je=!1}var Cn=null,xn=null,He=null;function Qe(){if(He)return He;var e,n=xn,a=n.length,o,u="value"in Cn?Cn.value:Cn.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return He=u.slice(e,1<o?1-o:void 0)}function dn(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function wi(){return!1}function wn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Sn:wi,this.isPropagationStopped=wi,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),n}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=wn(In),Ct=x({},In,{view:0,detail:0}),Di=wn(Ct),ta,Ce,Ae,pn=x({},Ct,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ae&&(Ae&&e.type==="mousemove"?(ta=e.screenX-Ae.screenX,Ce=e.screenY-Ae.screenY):Ce=ta=0,Ae=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:Ce}}),Dn=wn(pn),xi=x({},pn,{dataTransfer:0}),Te=wn(xi),Pn=x({},Ct,{relatedTarget:0}),Qn=wn(Pn),ai=x({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),Si=wn(ai),xa=x({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sr=wn(xa),Qo=x({},In,{data:0}),Oa=wn(Qo),Jo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$o={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=sh[e])?!!n[e]:!1}function rh(){return vS}var xS=x({},Ct,{key:function(e){if(e.key){var n=Jo[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$o[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rh,charCode:function(e){return e.type==="keypress"?dn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),SS=wn(xS),yS=x({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=wn(yS),MS=x({},Ct,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rh}),ES=wn(MS),TS=x({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=wn(TS),AS=x({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=wn(AS),CS=x({},In,{newState:0,oldState:0}),wS=wn(CS),DS=[9,13,27,32],oh=De&&"CompositionEvent"in window,tl=null;De&&"documentMode"in document&&(tl=document.documentMode);var US=De&&"TextEvent"in window&&!tl,Dm=De&&(!oh||tl&&8<tl&&11>=tl),Um=" ",Lm=!1;function Nm(e,n){switch(e){case"keyup":return DS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function LS(e,n){switch(e){case"compositionend":return Om(n);case"keypress":return n.which!==32?null:(Lm=!0,Um);case"textInput":return e=n.data,e===Um&&Lm?null:e;default:return null}}function NS(e,n){if(Gr)return e==="compositionend"||!oh&&Nm(e,n)?(e=Qe(),He=xn=Cn=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dm&&n.locale!=="ko"?null:n.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!OS[e.type]:n==="textarea"}function Pm(e,n,a,o){qt?Kt?Kt.push(o):Kt=[o]:qt=o,n=$c(n,"onChange"),0<n.length&&(a=new vi("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var el=null,nl=null;function IS(e){v_(e,0)}function fc(e){var n=va(e);if(An(n))return e}function Fm(e,n){if(e==="change")return n}var Bm=!1;if(De){var lh;if(De){var ch="oninput"in document;if(!ch){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),ch=typeof zm.oninput=="function"}lh=ch}else lh=!1;Bm=lh&&(!document.documentMode||9<document.documentMode)}function Hm(){el&&(el.detachEvent("onpropertychange",Gm),nl=el=null)}function Gm(e){if(e.propertyName==="value"&&fc(nl)){var n=[];Pm(n,nl,e,Dt(e)),de(IS,n)}}function PS(e,n,a){e==="focusin"?(Hm(),el=n,nl=a,el.attachEvent("onpropertychange",Gm)):e==="focusout"&&Hm()}function FS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fc(nl)}function BS(e,n){if(e==="click")return fc(n)}function zS(e,n){if(e==="input"||e==="change")return fc(n)}function HS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zi=typeof Object.is=="function"?Object.is:HS;function il(e,n){if(zi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!en.call(n,u)||!zi(e[u],n[u]))return!1}return!0}function Vm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function km(e,n){var a=Vm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vm(a)}}function Xm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xt(e.document)}return n}function uh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var GS=De&&"documentMode"in document&&11>=document.documentMode,Vr=null,fh=null,al=null,hh=!1;function Ym(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hh||Vr==null||Vr!==Xt(o)||(o=Vr,"selectionStart"in o&&uh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),al&&il(al,o)||(al=o,o=$c(fh,"onSelect"),0<o.length&&(n=new vi("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Vr)))}function rr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var kr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},dh={},qm={};De&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function or(e){if(dh[e])return dh[e];if(!kr[e])return e;var n=kr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qm)return dh[e]=n[a];return e}var jm=or("animationend"),Zm=or("animationiteration"),Km=or("animationstart"),VS=or("transitionrun"),kS=or("transitionstart"),XS=or("transitioncancel"),Qm=or("transitionend"),Jm=new Map,ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ph.push("scrollEnd");function Sa(e,n){Jm.set(e,n),$(n,[e])}var hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ea=[],Xr=0,mh=0;function dc(){for(var e=Xr,n=mh=Xr=0;n<e;){var a=ea[n];ea[n++]=null;var o=ea[n];ea[n++]=null;var u=ea[n];ea[n++]=null;var f=ea[n];if(ea[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&$m(a,u,f)}}function pc(e,n,a,o){ea[Xr++]=e,ea[Xr++]=n,ea[Xr++]=a,ea[Xr++]=o,mh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function gh(e,n,a,o){return pc(e,n,a,o),mc(e)}function lr(e,n){return pc(e,null,null,n),mc(e)}function $m(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Nt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function mc(e){if(50<Al)throw Al=0,bd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Wr={};function WS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(e,n,a,o){return new WS(e,n,a,o)}function _h(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ja(e,n){var a=e.alternate;return a===null?(a=Hi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function t0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gc(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")_h(e)&&(v=1);else if(typeof e=="string")v=Ky(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Hi(31,a,n,u),e.elementType=w,e.lanes=f,e;case U:return cr(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=Hi(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case B:return e=Hi(13,a,n,u),e.elementType=B,e.lanes=f,e;case z:return e=Hi(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case C:v=9;break t;case D:v=11;break t;case H:v=14;break t;case b:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Hi(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function cr(e,n,a,o){return e=Hi(7,e,o,n),e.lanes=a,e}function vh(e,n,a){return e=Hi(6,e,null,n),e.lanes=a,e}function e0(e){var n=Hi(18,null,null,0);return n.stateNode=e,n}function xh(e,n,a){return n=Hi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var n0=new WeakMap;function na(e,n){if(typeof e=="object"&&e!==null){var a=n0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},n0.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Yr=[],qr=0,_c=null,sl=0,ia=[],aa=0,Es=null,Ia=1,Pa="";function Za(e,n){Yr[qr++]=sl,Yr[qr++]=_c,_c=e,sl=n}function i0(e,n,a){ia[aa++]=Ia,ia[aa++]=Pa,ia[aa++]=Es,Es=e;var o=Ia;e=Pa;var u=32-Nt(o)-1;o&=~(1<<u),a+=1;var f=32-Nt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Ia=1<<32-Nt(n)+u|a<<u|o,Pa=f+e}else Ia=1<<f|a<<u|o,Pa=e}function Sh(e){e.return!==null&&(Za(e,1),i0(e,1,0))}function yh(e){for(;e===_c;)_c=Yr[--qr],Yr[qr]=null,sl=Yr[--qr],Yr[qr]=null;for(;e===Es;)Es=ia[--aa],ia[aa]=null,Pa=ia[--aa],ia[aa]=null,Ia=ia[--aa],ia[aa]=null}function a0(e,n){ia[aa++]=Ia,ia[aa++]=Pa,ia[aa++]=Es,Ia=n.id,Pa=n.overflow,Es=e}var si=null,gn=null,Be=!1,Ts=null,sa=!1,Mh=Error(s(519));function bs(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rl(na(n,e)),Mh}function s0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Mn]=e,n[hn]=o,a){case"dialog":Le("cancel",n),Le("close",n);break;case"iframe":case"object":case"embed":Le("load",n);break;case"video":case"audio":for(a=0;a<Cl.length;a++)Le(Cl[a],n);break;case"source":Le("error",n);break;case"img":case"image":case"link":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"input":Le("invalid",n),hi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Le("invalid",n);break;case"textarea":Le("invalid",n),mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||M_(n.textContent,a)?(o.popover!=null&&(Le("beforetoggle",n),Le("toggle",n)),o.onScroll!=null&&Le("scroll",n),o.onScrollEnd!=null&&Le("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||bs(e,!0)}function r0(e){for(si=e.return;si;)switch(si.tag){case 5:case 31:case 13:sa=!1;return;case 27:case 3:sa=!0;return;default:si=si.return}}function jr(e){if(e!==si)return!1;if(!Be)return r0(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hd(e.type,e.memoizedProps)),a=!a),a&&gn&&bs(e),r0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=U_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=U_(e)}else n===27?(n=gn,zs(e.type)?(e=Wd,Wd=null,gn=e):gn=n):gn=si?oa(e.stateNode.nextSibling):null;return!0}function ur(){gn=si=null,Be=!1}function Eh(){var e=Ts;return e!==null&&(Oi===null?Oi=e:Oi.push.apply(Oi,e),Ts=null),e}function rl(e){Ts===null?Ts=[e]:Ts.push(e)}var Th=I(null),fr=null,Ka=null;function As(e,n,a){ht(Th,n._currentValue),n._currentValue=a}function Qa(e){e._currentValue=Th.current,W(Th)}function bh(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ah(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),bh(f.return,a,e),o||(v=null);break t}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),bh(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Zr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;zi(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===dt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Nl):e=[Nl])}u=u.return}e!==null&&Ah(n,e,a,o),n.flags|=262144}function vc(e){for(e=e.firstContext;e!==null;){if(!zi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,Ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ri(e){return o0(fr,e)}function xc(e,n){return fr===null&&hr(e),o0(e,n)}function o0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ka===null){if(e===null)throw Error(s(308));Ka=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ka=Ka.next=n;return a}var YS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},qS=r.unstable_scheduleCallback,jS=r.unstable_NormalPriority,Fn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rh(){return{controller:new YS,data:new Map,refCount:0}}function ol(e){e.refCount--,e.refCount===0&&qS(jS,function(){e.controller.abort()})}var ll=null,Ch=0,Kr=0,Qr=null;function ZS(e,n){if(ll===null){var a=ll=[];Ch=0,Kr=Ud(),Qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ch++,n.then(l0,l0),n}function l0(){if(--Ch===0&&ll!==null){Qr!==null&&(Qr.status="fulfilled");var e=ll;ll=null,Kr=0,Qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function KS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var c0=N.S;N.S=function(e,n){Yg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ZS(e,n),c0!==null&&c0(e,n)};var dr=I(null);function wh(){var e=dr.current;return e!==null?e:cn.pooledCache}function Sc(e,n){n===null?ht(dr,dr.current):ht(dr,n.pool)}function u0(){var e=wh();return e===null?null:{parent:Fn._currentValue,pool:e}}var Jr=Error(s(460)),Dh=Error(s(474)),yc=Error(s(542)),Mc={then:function(){}};function f0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function h0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,p0(e),e;default:if(typeof n.status=="string")n.then($i,$i);else{if(e=cn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,p0(e),e}throw mr=n,Jr}}function pr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Jr):a}}var mr=null;function d0(){if(mr===null)throw Error(s(459));var e=mr;return mr=null,e}function p0(e){if(e===Jr||e===yc)throw Error(s(483))}var $r=null,cl=0;function Ec(e){var n=cl;return cl+=1,$r===null&&($r=[]),h0($r,e,n)}function ul(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function m0(e){function n(K,X){if(e){var st=K.deletions;st===null?(K.deletions=[X],K.flags|=16):st.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=ja(K,X),K.index=0,K.sibling=null,K}function f(K,X,st){return K.index=st,e?(st=K.alternate,st!==null?(st=st.index,st<X?(K.flags|=67108866,X):st):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function v(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,X,st,vt){return X===null||X.tag!==6?(X=vh(st,K.mode,vt),X.return=K,X):(X=u(X,st),X.return=K,X)}function G(K,X,st,vt){var ie=st.type;return ie===U?mt(K,X,st.props.children,vt,st.key):X!==null&&(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===b&&pr(ie)===X.type)?(X=u(X,st.props),ul(X,st),X.return=K,X):(X=gc(st.type,st.key,st.props,null,K.mode,vt),ul(X,st),X.return=K,X)}function rt(K,X,st,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==st.containerInfo||X.stateNode.implementation!==st.implementation?(X=xh(st,K.mode,vt),X.return=K,X):(X=u(X,st.children||[]),X.return=K,X)}function mt(K,X,st,vt,ie){return X===null||X.tag!==7?(X=cr(st,K.mode,vt,ie),X.return=K,X):(X=u(X,st),X.return=K,X)}function xt(K,X,st){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=vh(""+X,K.mode,st),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return st=gc(X.type,X.key,X.props,null,K.mode,st),ul(st,X),st.return=K,st;case T:return X=xh(X,K.mode,st),X.return=K,X;case b:return X=pr(X),xt(K,X,st)}if(Z(X)||q(X))return X=cr(X,K.mode,st,null),X.return=K,X;if(typeof X.then=="function")return xt(K,Ec(X),st);if(X.$$typeof===L)return xt(K,xc(K,X),st);Tc(K,X)}return null}function ot(K,X,st,vt){var ie=X!==null?X.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return ie!==null?null:A(K,X,""+st,vt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case y:return st.key===ie?G(K,X,st,vt):null;case T:return st.key===ie?rt(K,X,st,vt):null;case b:return st=pr(st),ot(K,X,st,vt)}if(Z(st)||q(st))return ie!==null?null:mt(K,X,st,vt,null);if(typeof st.then=="function")return ot(K,X,Ec(st),vt);if(st.$$typeof===L)return ot(K,X,xc(K,st),vt);Tc(K,st)}return null}function ct(K,X,st,vt,ie){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return K=K.get(st)||null,A(X,K,""+vt,ie);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return K=K.get(vt.key===null?st:vt.key)||null,G(X,K,vt,ie);case T:return K=K.get(vt.key===null?st:vt.key)||null,rt(X,K,vt,ie);case b:return vt=pr(vt),ct(K,X,st,vt,ie)}if(Z(vt)||q(vt))return K=K.get(st)||null,mt(X,K,vt,ie,null);if(typeof vt.then=="function")return ct(K,X,st,Ec(vt),ie);if(vt.$$typeof===L)return ct(K,X,st,xc(X,vt),ie);Tc(X,vt)}return null}function jt(K,X,st,vt){for(var ie=null,Ye=null,te=X,xe=X=0,Pe=null;te!==null&&xe<st.length;xe++){te.index>xe?(Pe=te,te=null):Pe=te.sibling;var qe=ot(K,te,st[xe],vt);if(qe===null){te===null&&(te=Pe);break}e&&te&&qe.alternate===null&&n(K,te),X=f(qe,X,xe),Ye===null?ie=qe:Ye.sibling=qe,Ye=qe,te=Pe}if(xe===st.length)return a(K,te),Be&&Za(K,xe),ie;if(te===null){for(;xe<st.length;xe++)te=xt(K,st[xe],vt),te!==null&&(X=f(te,X,xe),Ye===null?ie=te:Ye.sibling=te,Ye=te);return Be&&Za(K,xe),ie}for(te=o(te);xe<st.length;xe++)Pe=ct(te,K,xe,st[xe],vt),Pe!==null&&(e&&Pe.alternate!==null&&te.delete(Pe.key===null?xe:Pe.key),X=f(Pe,X,xe),Ye===null?ie=Pe:Ye.sibling=Pe,Ye=Pe);return e&&te.forEach(function(Xs){return n(K,Xs)}),Be&&Za(K,xe),ie}function le(K,X,st,vt){if(st==null)throw Error(s(151));for(var ie=null,Ye=null,te=X,xe=X=0,Pe=null,qe=st.next();te!==null&&!qe.done;xe++,qe=st.next()){te.index>xe?(Pe=te,te=null):Pe=te.sibling;var Xs=ot(K,te,qe.value,vt);if(Xs===null){te===null&&(te=Pe);break}e&&te&&Xs.alternate===null&&n(K,te),X=f(Xs,X,xe),Ye===null?ie=Xs:Ye.sibling=Xs,Ye=Xs,te=Pe}if(qe.done)return a(K,te),Be&&Za(K,xe),ie;if(te===null){for(;!qe.done;xe++,qe=st.next())qe=xt(K,qe.value,vt),qe!==null&&(X=f(qe,X,xe),Ye===null?ie=qe:Ye.sibling=qe,Ye=qe);return Be&&Za(K,xe),ie}for(te=o(te);!qe.done;xe++,qe=st.next())qe=ct(te,K,xe,qe.value,vt),qe!==null&&(e&&qe.alternate!==null&&te.delete(qe.key===null?xe:qe.key),X=f(qe,X,xe),Ye===null?ie=qe:Ye.sibling=qe,Ye=qe);return e&&te.forEach(function(oM){return n(K,oM)}),Be&&Za(K,xe),ie}function rn(K,X,st,vt){if(typeof st=="object"&&st!==null&&st.type===U&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case y:t:{for(var ie=st.key;X!==null;){if(X.key===ie){if(ie=st.type,ie===U){if(X.tag===7){a(K,X.sibling),vt=u(X,st.props.children),vt.return=K,K=vt;break t}}else if(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===b&&pr(ie)===X.type){a(K,X.sibling),vt=u(X,st.props),ul(vt,st),vt.return=K,K=vt;break t}a(K,X);break}else n(K,X);X=X.sibling}st.type===U?(vt=cr(st.props.children,K.mode,vt,st.key),vt.return=K,K=vt):(vt=gc(st.type,st.key,st.props,null,K.mode,vt),ul(vt,st),vt.return=K,K=vt)}return v(K);case T:t:{for(ie=st.key;X!==null;){if(X.key===ie)if(X.tag===4&&X.stateNode.containerInfo===st.containerInfo&&X.stateNode.implementation===st.implementation){a(K,X.sibling),vt=u(X,st.children||[]),vt.return=K,K=vt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}vt=xh(st,K.mode,vt),vt.return=K,K=vt}return v(K);case b:return st=pr(st),rn(K,X,st,vt)}if(Z(st))return jt(K,X,st,vt);if(q(st)){if(ie=q(st),typeof ie!="function")throw Error(s(150));return st=ie.call(st),le(K,X,st,vt)}if(typeof st.then=="function")return rn(K,X,Ec(st),vt);if(st.$$typeof===L)return rn(K,X,xc(K,st),vt);Tc(K,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,X!==null&&X.tag===6?(a(K,X.sibling),vt=u(X,st),vt.return=K,K=vt):(a(K,X),vt=vh(st,K.mode,vt),vt.return=K,K=vt),v(K)):a(K,X)}return function(K,X,st,vt){try{cl=0;var ie=rn(K,X,st,vt);return $r=null,ie}catch(te){if(te===Jr||te===yc)throw te;var Ye=Hi(29,te,null,K.mode);return Ye.lanes=vt,Ye.return=K,Ye}}}var gr=m0(!0),g0=m0(!1),Rs=!1;function Uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ws(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ze&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=mc(e),$m(e,null,a),n}return pc(e,o,n,a),mc(e)}function fl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ya(e,a)}}function Nh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Oh=!1;function hl(){if(Oh){var e=Qr;if(e!==null)throw e}}function dl(e,n,a,o){Oh=!1;var u=e.updateQueue;Rs=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,rt=G.next;G.next=null,v===null?f=rt:v.next=rt,v=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==v&&(A===null?mt.firstBaseUpdate=rt:A.next=rt,mt.lastBaseUpdate=G))}if(f!==null){var xt=u.baseState;v=0,mt=rt=G=null,A=f;do{var ot=A.lane&-536870913,ct=ot!==A.lane;if(ct?(Ie&ot)===ot:(o&ot)===ot){ot!==0&&ot===Kr&&(Oh=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var jt=e,le=A;ot=n;var rn=a;switch(le.tag){case 1:if(jt=le.payload,typeof jt=="function"){xt=jt.call(rn,xt,ot);break t}xt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=le.payload,ot=typeof jt=="function"?jt.call(rn,xt,ot):jt,ot==null)break t;xt=x({},xt,ot);break t;case 2:Rs=!0}}ot=A.callback,ot!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(rt=mt=ct,G=xt):mt=mt.next=ct,v|=ot;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);mt===null&&(G=xt),u.baseState=G,u.firstBaseUpdate=rt,u.lastBaseUpdate=mt,f===null&&(u.shared.lanes=0),Os|=v,e.lanes=v,e.memoizedState=xt}}function _0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function v0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_0(a[e],n)}var to=I(null),bc=I(0);function x0(e,n){e=rs,ht(bc,e),ht(to,n),rs=e|n.baseLanes}function Ih(){ht(bc,rs),ht(to,to.current)}function Ph(){rs=bc.current,W(to),W(bc)}var Gi=I(null),ra=null;function Ds(e){var n=e.alternate;ht(Nn,Nn.current&1),ht(Gi,e),ra===null&&(n===null||to.current!==null||n.memoizedState!==null)&&(ra=e)}function Fh(e){ht(Nn,Nn.current),ht(Gi,e),ra===null&&(ra=e)}function S0(e){e.tag===22?(ht(Nn,Nn.current),ht(Gi,e),ra===null&&(ra=e)):Us()}function Us(){ht(Nn,Nn.current),ht(Gi,Gi.current)}function Vi(e){W(Gi),ra===e&&(ra=null),W(Nn)}var Nn=I(0);function Ac(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kd(a)||Xd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ja=0,_e=null,an=null,Bn=null,Rc=!1,eo=!1,_r=!1,Cc=0,pl=0,no=null,QS=0;function Un(){throw Error(s(321))}function Bh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!zi(e[a],n[a]))return!1;return!0}function zh(e,n,a,o,u,f){return Ja=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?ig:td,_r=!1,f=a(o,u),_r=!1,eo&&(f=M0(n,a,o,u)),y0(e),f}function y0(e){N.H=_l;var n=an!==null&&an.next!==null;if(Ja=0,Bn=an=_e=null,Rc=!1,pl=0,no=null,n)throw Error(s(300));e===null||zn||(e=e.dependencies,e!==null&&vc(e)&&(zn=!0))}function M0(e,n,a,o){_e=e;var u=0;do{if(eo&&(no=null),pl=0,eo=!1,25<=u)throw Error(s(301));if(u+=1,Bn=an=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=ag,f=n(a,o)}while(eo);return f}function JS(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?ml(n):n,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(_e.flags|=1024),n}function Hh(){var e=Cc!==0;return Cc=0,e}function Gh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Vh(e){if(Rc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rc=!1}Ja=0,Bn=an=_e=null,eo=!1,pl=Cc=0,no=null}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?_e.memoizedState=Bn=e:Bn=Bn.next=e,Bn}function On(){if(an===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var n=Bn===null?_e.memoizedState:Bn.next;if(n!==null)Bn=n,an=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},Bn===null?_e.memoizedState=Bn=e:Bn=Bn.next=e}return Bn}function wc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(e){var n=pl;return pl+=1,no===null&&(no=[]),e=h0(no,e,n),n=_e,(Bn===null?n.memoizedState:Bn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?ig:td),e}function Dc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ml(e);if(e.$$typeof===L)return ri(e)}throw Error(s(438,String(e)))}function kh(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wc(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=J;return n.index++,a}function $a(e,n){return typeof n=="function"?n(e):n}function Uc(e){var n=On();return Xh(n,an,e)}function Xh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,G=null,rt=n,mt=!1;do{var xt=rt.lane&-536870913;if(xt!==rt.lane?(Ie&xt)===xt:(Ja&xt)===xt){var ot=rt.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),xt===Kr&&(mt=!0);else if((Ja&ot)===ot){rt=rt.next,ot===Kr&&(mt=!0);continue}else xt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(A=G=xt,v=f):G=G.next=xt,_e.lanes|=ot,Os|=ot;xt=rt.action,_r&&a(f,xt),f=rt.hasEagerState?rt.eagerState:a(f,xt)}else ot={lane:xt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(A=G=ot,v=f):G=G.next=ot,_e.lanes|=xt,Os|=xt;rt=rt.next}while(rt!==null&&rt!==n);if(G===null?v=f:G.next=A,!zi(f,e.memoizedState)&&(zn=!0,mt&&(a=Qr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Wh(e){var n=On(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);zi(f,n.memoizedState)||(zn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function E0(e,n,a){var o=_e,u=On(),f=Be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!zi((an||u).memoizedState,a);if(v&&(u.memoizedState=a,zn=!0),u=u.queue,jh(A0.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||Bn!==null&&Bn.memoizedState.tag&1){if(o.flags|=2048,io(9,{destroy:void 0},b0.bind(null,o,u,a,n),null),cn===null)throw Error(s(349));f||(Ja&127)!==0||T0(o,n,a)}return a}function T0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=wc(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function b0(e,n,a,o){n.value=a,n.getSnapshot=o,R0(n)&&C0(e)}function A0(e,n,a){return a(function(){R0(n)&&C0(e)})}function R0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!zi(e,a)}catch{return!0}}function C0(e){var n=lr(e,2);n!==null&&Ii(n,e,2)}function Yh(e){var n=yi();if(typeof e=="function"){var a=e;if(e=a(),_r){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},n}function w0(e,n,a,o){return e.baseState=a,Xh(e,an,typeof o=="function"?o:$a)}function $S(e,n,a,o,u){if(Oc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,D0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function D0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=N.T,v={};N.T=v;try{var A=a(u,o),G=N.S;G!==null&&G(v,A),U0(e,n,A)}catch(rt){qh(e,n,rt)}finally{f!==null&&v.types!==null&&(f.types=v.types),N.T=f}}else try{f=a(u,o),U0(e,n,f)}catch(rt){qh(e,n,rt)}}function U0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){L0(e,n,o)},function(o){return qh(e,n,o)}):L0(e,n,a)}function L0(e,n,a){n.status="fulfilled",n.value=a,N0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,D0(e,a)))}function qh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,N0(n),n=n.next;while(n!==o)}e.action=null}function N0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function O0(e,n){return n}function I0(e,n){if(Be){var a=cn.formState;if(a!==null){t:{var o=_e;if(Be){if(gn){e:{for(var u=gn,f=sa;u.nodeType!==8;){if(!f){u=null;break e}if(u=oa(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){gn=oa(u.nextSibling),o=u.data==="F!";break t}}bs(o)}o=!1}o&&(n=a[0])}}return a=yi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:O0,lastRenderedState:n},a.queue=o,a=tg.bind(null,_e,o),o.dispatch=a,o=Yh(!1),f=$h.bind(null,_e,!1,o.queue),o=yi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=$S.bind(null,_e,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function P0(e){var n=On();return F0(n,an,e)}function F0(e,n,a){if(n=Xh(e,n,O0)[0],e=Uc($a)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ml(n)}catch(v){throw v===Jr?yc:v}else o=n;n=On();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,io(9,{destroy:void 0},ty.bind(null,u,a),null)),[o,f,e]}function ty(e,n){e.action=n}function B0(e){var n=On(),a=an;if(a!==null)return F0(n,a,e);On(),n=n.memoizedState,a=On();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function io(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=wc(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function z0(){return On().memoizedState}function Lc(e,n,a,o){var u=yi();_e.flags|=e,u.memoizedState=io(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nc(e,n,a,o){var u=On();o=o===void 0?null:o;var f=u.memoizedState.inst;an!==null&&o!==null&&Bh(o,an.memoizedState.deps)?u.memoizedState=io(n,f,a,o):(_e.flags|=e,u.memoizedState=io(1|n,f,a,o))}function H0(e,n){Lc(8390656,8,e,n)}function jh(e,n){Nc(2048,8,e,n)}function ey(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=wc(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function G0(e){var n=On().memoizedState;return ey({ref:n,nextImpl:e}),function(){if((Ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function V0(e,n){return Nc(4,2,e,n)}function k0(e,n){return Nc(4,4,e,n)}function X0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function W0(e,n,a){a=a!=null?a.concat([e]):null,Nc(4,4,X0.bind(null,n,e),a)}function Zh(){}function Y0(e,n){var a=On();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Bh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function q0(e,n){var a=On();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Bh(n,o[1]))return o[0];if(o=e(),_r){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[o,n],o}function Kh(e,n,a){return a===void 0||(Ja&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=jg(),_e.lanes|=e,Os|=e,a)}function j0(e,n,a,o){return zi(a,n)?a:to.current!==null?(e=Kh(e,a,o),zi(e,n)||(zn=!0),e):(Ja&42)===0||(Ja&1073741824)!==0&&(Ie&261930)===0?(zn=!0,e.memoizedState=a):(e=jg(),_e.lanes|=e,Os|=e,n)}function Z0(e,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var v=N.T,A={};N.T=A,$h(e,!1,n,a);try{var G=u(),rt=N.S;if(rt!==null&&rt(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=KS(G,o);gl(e,n,mt,Wi(e))}else gl(e,n,o,Wi(e))}catch(xt){gl(e,n,{then:function(){},status:"rejected",reason:xt},Wi())}finally{F.p=f,v!==null&&A.types!==null&&(v.types=A.types),N.T=v}}function ny(){}function Qh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=K0(e).queue;Z0(e,u,n,tt,a===null?ny:function(){return Q0(e),a(o)})}function K0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Q0(e){var n=K0(e);n.next===null&&(n=e.alternate.memoizedState),gl(e,n.next.queue,{},Wi())}function Jh(){return ri(Nl)}function J0(){return On().memoizedState}function $0(){return On().memoizedState}function iy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wi();e=Cs(a);var o=ws(n,e,a);o!==null&&(Ii(o,n,a),fl(o,n,a)),n={cache:Rh()},e.payload=n;return}n=n.return}}function ay(e,n,a){var o=Wi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Oc(e)?eg(n,a):(a=gh(e,n,a,o),a!==null&&(Ii(a,e,o),ng(a,n,o)))}function tg(e,n,a){var o=Wi();gl(e,n,a,o)}function gl(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Oc(e))eg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,zi(A,v))return pc(e,n,u,0),cn===null&&dc(),!1}catch{}if(a=gh(e,n,u,o),a!==null)return Ii(a,e,o),ng(a,n,o),!0}return!1}function $h(e,n,a,o){if(o={lane:2,revertLane:Ud(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Oc(e)){if(n)throw Error(s(479))}else n=gh(e,a,o,2),n!==null&&Ii(n,e,2)}function Oc(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function eg(e,n){eo=Rc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ng(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ya(e,a)}}var _l={readContext:ri,use:Dc,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useLayoutEffect:Un,useInsertionEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useSyncExternalStore:Un,useId:Un,useHostTransitionStatus:Un,useFormState:Un,useActionState:Un,useOptimistic:Un,useMemoCache:Un,useCacheRefresh:Un};_l.useEffectEvent=Un;var ig={readContext:ri,use:Dc,useCallback:function(e,n){return yi().memoizedState=[e,n===void 0?null:n],e},useContext:ri,useEffect:H0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Lc(4194308,4,X0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Lc(4194308,4,e,n)},useInsertionEffect:function(e,n){Lc(4,2,e,n)},useMemo:function(e,n){var a=yi();n=n===void 0?null:n;var o=e();if(_r){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=yi();if(a!==void 0){var u=a(n);if(_r){It(!0);try{a(n)}finally{It(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ay.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=yi();return e={current:e},n.memoizedState=e},useState:function(e){e=Yh(e);var n=e.queue,a=tg.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Zh,useDeferredValue:function(e,n){var a=yi();return Kh(a,e,n)},useTransition:function(){var e=Yh(!1);return e=Z0.bind(null,_e,e.queue,!0,!1),yi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=yi();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),cn===null)throw Error(s(349));(Ie&127)!==0||T0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,H0(A0.bind(null,o,f,e),[e]),o.flags|=2048,io(9,{destroy:void 0},b0.bind(null,o,f,a,n),null),a},useId:function(){var e=yi(),n=cn.identifierPrefix;if(Be){var a=Pa,o=Ia;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=QS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Jh,useFormState:I0,useActionState:I0,useOptimistic:function(e){var n=yi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$h.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:kh,useCacheRefresh:function(){return yi().memoizedState=iy.bind(null,_e)},useEffectEvent:function(e){var n=yi(),a={impl:e};return n.memoizedState=a,function(){if((Ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},td={readContext:ri,use:Dc,useCallback:Y0,useContext:ri,useEffect:jh,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:k0,useMemo:q0,useReducer:Uc,useRef:z0,useState:function(){return Uc($a)},useDebugValue:Zh,useDeferredValue:function(e,n){var a=On();return j0(a,an.memoizedState,e,n)},useTransition:function(){var e=Uc($a)[0],n=On().memoizedState;return[typeof e=="boolean"?e:ml(e),n]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:Jh,useFormState:P0,useActionState:P0,useOptimistic:function(e,n){var a=On();return w0(a,an,e,n)},useMemoCache:kh,useCacheRefresh:$0};td.useEffectEvent=G0;var ag={readContext:ri,use:Dc,useCallback:Y0,useContext:ri,useEffect:jh,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:k0,useMemo:q0,useReducer:Wh,useRef:z0,useState:function(){return Wh($a)},useDebugValue:Zh,useDeferredValue:function(e,n){var a=On();return an===null?Kh(a,e,n):j0(a,an.memoizedState,e,n)},useTransition:function(){var e=Wh($a)[0],n=On().memoizedState;return[typeof e=="boolean"?e:ml(e),n]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:Jh,useFormState:B0,useActionState:B0,useOptimistic:function(e,n){var a=On();return an!==null?w0(a,an,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:kh,useCacheRefresh:$0};ag.useEffectEvent=G0;function ed(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nd={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Wi(),u=Cs(o);u.payload=n,a!=null&&(u.callback=a),n=ws(e,u,o),n!==null&&(Ii(n,e,o),fl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Wi(),u=Cs(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ws(e,u,o),n!==null&&(Ii(n,e,o),fl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Wi(),o=Cs(a);o.tag=2,n!=null&&(o.callback=n),n=ws(e,o,a),n!==null&&(Ii(n,e,a),fl(n,e,a))}};function sg(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!il(a,o)||!il(u,f):!0}function rg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&nd.enqueueReplaceState(n,n.state,null)}function vr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function og(e){hc(e)}function lg(e){console.error(e)}function cg(e){hc(e)}function Ic(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ug(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function id(e,n,a){return a=Cs(a),a.tag=3,a.payload={element:null},a.callback=function(){Ic(e,n)},a}function fg(e){return e=Cs(e),e.tag=3,e}function hg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){ug(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ug(n,a,o),typeof u!="function"&&(Is===null?Is=new Set([this]):Is.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function sy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=Gi.current,a!==null){switch(a.tag){case 31:case 13:return ra===null?qc():a.alternate===null&&Ln===0&&(Ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Mc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Cd(e,o,u)),!1;case 22:return a.flags|=65536,o===Mc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Cd(e,o,u)),!1}throw Error(s(435,a.tag))}return Cd(e,o,u),qc(),!1}if(Be)return n=Gi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Mh&&(e=Error(s(422),{cause:o}),rl(na(e,a)))):(o!==Mh&&(n=Error(s(423),{cause:o}),rl(na(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=na(o,a),u=id(e.stateNode,o,u),Nh(e,u),Ln!==4&&(Ln=2)),!1;var f=Error(s(520),{cause:o});if(f=na(f,a),bl===null?bl=[f]:bl.push(f),Ln!==4&&(Ln=2),n===null)return!0;o=na(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=id(a.stateNode,o,e),Nh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Is===null||!Is.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=fg(u),hg(u,e,a,o),Nh(a,u),!1}a=a.return}while(a!==null);return!1}var ad=Error(s(461)),zn=!1;function oi(e,n,a,o){n.child=e===null?g0(n,null,a,o):gr(n,e.child,a,o)}function dg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var A in o)A!=="ref"&&(v[A]=o[A])}else v=o;return hr(n),o=zh(e,n,a,v,f,u),A=Hh(),e!==null&&!zn?(Gh(e,n,u),ts(e,n,u)):(Be&&A&&Sh(n),n.flags|=1,oi(e,n,o,u),n.child)}function pg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!_h(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,mg(e,n,f,o,u)):(e=gc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!hd(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:il,a(v,o)&&e.ref===n.ref)return ts(e,n,u)}return n.flags|=1,e=ja(f,o),e.ref=n.ref,e.return=n,n.child=e}function mg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(il(f,o)&&e.ref===n.ref)if(zn=!1,n.pendingProps=o=f,hd(e,u))(e.flags&131072)!==0&&(zn=!0);else return n.lanes=e.lanes,ts(e,n,u)}return sd(e,n,a,o,u)}function gg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return _g(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sc(n,f!==null?f.cachePool:null),f!==null?x0(n,f):Ih(),S0(n);else return o=n.lanes=536870912,_g(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Sc(n,f.cachePool),x0(n,f),Us(),n.memoizedState=null):(e!==null&&Sc(n,null),Ih(),Us());return oi(e,n,u,a),n.child}function vl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _g(e,n,a,o,u){var f=wh();return f=f===null?null:{parent:Fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Sc(n,null),Ih(),S0(n),e!==null&&Zr(e,n,o,!0),n.childLanes=u,null}function Pc(e,n){return n=Bc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function vg(e,n,a){return gr(n,e.child,null,a),e=Pc(n,n.pendingProps),e.flags|=2,Vi(n),n.memoizedState=null,e}function ry(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Be){if(o.mode==="hidden")return e=Pc(n,o),n.lanes=536870912,vl(null,e);if(Fh(n),(e=gn)?(e=D_(e,sa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Es!==null?{id:Ia,overflow:Pa}:null,retryLane:536870912,hydrationErrors:null},a=e0(e),a.return=n,n.child=a,si=n,gn=null)):e=null,e===null)throw bs(n);return n.lanes=536870912,null}return Pc(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Fh(n),u)if(n.flags&256)n.flags&=-257,n=vg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(zn||Zr(e,n,a,!1),u=(a&e.childLanes)!==0,zn||u){if(o=cn,o!==null&&(v=zr(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,lr(e,v),Ii(o,e,v),ad;qc(),n=vg(e,n,a)}else e=f.treeContext,gn=oa(v.nextSibling),si=n,Be=!0,Ts=null,sa=!1,e!==null&&a0(n,e),n=Pc(n,o),n.flags|=4096;return n}return e=ja(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sd(e,n,a,o,u){return hr(n),a=zh(e,n,a,o,void 0,u),o=Hh(),e!==null&&!zn?(Gh(e,n,u),ts(e,n,u)):(Be&&o&&Sh(n),n.flags|=1,oi(e,n,a,u),n.child)}function xg(e,n,a,o,u,f){return hr(n),n.updateQueue=null,a=M0(n,o,a,u),y0(e),o=Hh(),e!==null&&!zn?(Gh(e,n,f),ts(e,n,f)):(Be&&o&&Sh(n),n.flags|=1,oi(e,n,a,f),n.child)}function Sg(e,n,a,o,u){if(hr(n),n.stateNode===null){var f=Wr,v=a.contextType;typeof v=="object"&&v!==null&&(f=ri(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Uh(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?ri(v):Wr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ed(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&nd.enqueueReplaceState(f,f.state,null),dl(n,o,f,u),hl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=vr(a,A);f.props=G;var rt=f.context,mt=a.contextType;v=Wr,typeof mt=="object"&&mt!==null&&(v=ri(mt));var xt=a.getDerivedStateFromProps;mt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||rt!==v)&&rg(n,f,o,v),Rs=!1;var ot=n.memoizedState;f.state=ot,dl(n,o,f,u),hl(),rt=n.memoizedState,A||ot!==rt||Rs?(typeof xt=="function"&&(ed(n,a,xt,o),rt=n.memoizedState),(G=Rs||sg(n,a,G,o,ot,rt,v))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=v,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Lh(e,n),v=n.memoizedProps,mt=vr(a,v),f.props=mt,xt=n.pendingProps,ot=f.context,rt=a.contextType,G=Wr,typeof rt=="object"&&rt!==null&&(G=ri(rt)),A=a.getDerivedStateFromProps,(rt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xt||ot!==G)&&rg(n,f,o,G),Rs=!1,ot=n.memoizedState,f.state=ot,dl(n,o,f,u),hl();var ct=n.memoizedState;v!==xt||ot!==ct||Rs||e!==null&&e.dependencies!==null&&vc(e.dependencies)?(typeof A=="function"&&(ed(n,a,A,o),ct=n.memoizedState),(mt=Rs||sg(n,a,mt,o,ot,ct,G)||e!==null&&e.dependencies!==null&&vc(e.dependencies))?(rt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ct,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ct,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),f.props=o,f.state=ct,f.context=G,o=mt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Fc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=gr(n,e.child,null,u),n.child=gr(n,null,a,u)):oi(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ts(e,n,u),e}function yg(e,n,a,o){return ur(),n.flags|=256,oi(e,n,a,o),n.child}var rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function od(e){return{baseLanes:e,cachePool:u0()}}function ld(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Xi),e}function Mg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?Ds(n):Us(),(e=gn)?(e=D_(e,sa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Es!==null?{id:Ia,overflow:Pa}:null,retryLane:536870912,hydrationErrors:null},a=e0(e),a.return=n,n.child=a,si=n,gn=null)):e=null,e===null)throw bs(n);return Xd(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Us(),u=n.mode,A=Bc({mode:"hidden",children:A},u),o=cr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=od(a),o.childLanes=ld(e,v,a),n.memoizedState=rd,vl(null,o)):(Ds(n),cd(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Ds(n),n.flags&=-257,n=ud(e,n,a)):n.memoizedState!==null?(Us(),n.child=e.child,n.flags|=128,n=null):(Us(),A=o.fallback,u=n.mode,o=Bc({mode:"visible",children:o.children},u),A=cr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,gr(n,e.child,null,a),o=n.child,o.memoizedState=od(a),o.childLanes=ld(e,v,a),n.memoizedState=rd,n=vl(null,o));else if(Ds(n),Xd(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var rt=v.dgst;v=rt,o=Error(s(419)),o.stack="",o.digest=v,rl({value:o,source:null,stack:null}),n=ud(e,n,a)}else if(zn||Zr(e,n,a,!1),v=(a&e.childLanes)!==0,zn||v){if(v=cn,v!==null&&(o=zr(v,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,lr(e,o),Ii(v,e,o),ad;kd(A)||qc(),n=ud(e,n,a)}else kd(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,gn=oa(A.nextSibling),si=n,Be=!0,Ts=null,sa=!1,e!==null&&a0(n,e),n=cd(n,o.children),n.flags|=4096);return n}return u?(Us(),A=o.fallback,u=n.mode,G=e.child,rt=G.sibling,o=ja(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,rt!==null?A=ja(rt,A):(A=cr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,vl(null,o),o=n.child,A=e.child.memoizedState,A===null?A=od(a):(u=A.cachePool,u!==null?(G=Fn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=u0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=ld(e,v,a),n.memoizedState=rd,vl(e.child,o)):(Ds(n),a=e.child,e=a.sibling,a=ja(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function cd(e,n){return n=Bc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bc(e,n){return e=Hi(22,e,null,n),e.lanes=0,e}function ud(e,n,a){return gr(n,e.child,null,a),e=cd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Eg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),bh(e.return,n,a)}function fd(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Tg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=Nn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,ht(Nn,v),oi(e,n,o,a),o=Be?sl:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eg(e,a,n);else if(e.tag===19)Eg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ac(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),fd(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ac(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}fd(n,!0,a,null,f,o);break;case"together":fd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ts(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Os|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ja(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ja(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vc(e)))}function oy(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),As(n,Fn,e.memoizedState.cache),ur();break;case 27:case 5:Zt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:As(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Fh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ds(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Mg(e,n,a):(Ds(n),e=ts(e,n,a),e!==null?e.sibling:null);Ds(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Tg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(Nn,Nn.current),o)break;return null;case 22:return n.lanes=0,gg(e,n,a,n.pendingProps);case 24:As(n,Fn,e.memoizedState.cache)}return ts(e,n,a)}function bg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)zn=!0;else{if(!hd(e,a)&&(n.flags&128)===0)return zn=!1,oy(e,n,a);zn=(e.flags&131072)!==0}else zn=!1,Be&&(n.flags&1048576)!==0&&i0(n,sl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=pr(n.elementType),n.type=e,typeof e=="function")_h(e)?(o=vr(e,o),n.tag=1,n=Sg(null,n,e,o,a)):(n.tag=0,n=sd(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=dg(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=pg(null,n,e,o,a);break t}}throw n=it(e)||e,Error(s(306,n,""))}}return n;case 0:return sd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=vr(o,n.pendingProps),Sg(e,n,o,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Lh(e,n),dl(n,o,null,a);var v=n.memoizedState;if(o=v.cache,As(n,Fn,o),o!==f.cache&&Ah(n,[Fn],a,!0),hl(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=yg(e,n,o,a);break t}else if(o!==u){u=na(Error(s(424)),n),rl(u),n=yg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,gn=oa(e.firstChild),si=n,Be=!0,Ts=null,sa=!0,a=g0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ur(),o===u){n=ts(e,n,a);break t}oi(e,n,o,a)}n=n.child}return n;case 26:return Fc(e,n),e===null?(a=P_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=tu(et.current).createElement(a),o[Mn]=n,o[hn]=e,li(o,a,e),Y(o),n.stateNode=o):n.memoizedState=P_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Be&&(o=n.stateNode=N_(n.type,n.pendingProps,et.current),si=n,sa=!0,u=gn,zs(n.type)?(Wd=u,gn=oa(o.firstChild)):gn=u),oi(e,n,n.pendingProps.children,a),Fc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=gn)&&(o=Fy(o,n.type,n.pendingProps,sa),o!==null?(n.stateNode=o,si=n,gn=oa(o.firstChild),sa=!1,u=!0):u=!1),u||bs(n)),Zt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Hd(u,f)?o=null:v!==null&&Hd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=zh(e,n,JS,null,null,a),Nl._currentValue=u),Fc(e,n),oi(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=gn)&&(a=By(a,n.pendingProps,sa),a!==null?(n.stateNode=a,si=n,gn=null,e=!0):e=!1),e||bs(n)),null;case 13:return Mg(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=gr(n,null,o,a):oi(e,n,o,a),n.child;case 11:return dg(e,n,n.type,n.pendingProps,a);case 7:return oi(e,n,n.pendingProps,a),n.child;case 8:return oi(e,n,n.pendingProps.children,a),n.child;case 12:return oi(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,As(n,n.type,o.value),oi(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=ri(u),o=o(u),n.flags|=1,oi(e,n,o,a),n.child;case 14:return pg(e,n,n.type,n.pendingProps,a);case 15:return mg(e,n,n.type,n.pendingProps,a);case 19:return Tg(e,n,a);case 31:return ry(e,n,a);case 22:return gg(e,n,a,n.pendingProps);case 24:return hr(n),o=ri(Fn),e===null?(u=wh(),u===null&&(u=cn,f=Rh(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Uh(n),As(n,Fn,u)):((e.lanes&a)!==0&&(Lh(e,n),dl(n,null,null,a),hl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),As(n,Fn,o)):(o=f.cache,As(n,Fn,o),o!==u.cache&&Ah(n,[Fn],a,!0))),oi(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function es(e){e.flags|=4}function dd(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Jg())e.flags|=8192;else throw mr=Mc,Dh}else e.flags&=-16777217}function Ag(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!G_(n))if(Jg())e.flags|=8192;else throw mr=Mc,Dh}function zc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?We():536870912,e.lanes|=n,oo|=n)}function xl(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function _n(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ly(e,n,a){var o=n.pendingProps;switch(yh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(n),null;case 1:return _n(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qa(Fn),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(jr(n)?es(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eh())),_n(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(es(n),f!==null?(_n(n),Ag(n,f)):(_n(n),dd(n,u,null,o,a))):f?f!==e.memoizedState?(es(n),_n(n),Ag(n,f)):(_n(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&es(n),_n(n),dd(n,u,e,o,a)),null;case 27:if(ne(n),a=et.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&es(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}e=Et.current,jr(n)?s0(n):(e=N_(u,o,a),n.stateNode=e,es(n))}return _n(n),null;case 5:if(ne(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&es(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}if(f=Et.current,jr(n))s0(n);else{var v=tu(et.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[Mn]=n,f[hn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(li(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&es(n)}}return _n(n),dd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&es(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,jr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=si,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Mn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||M_(e.nodeValue,a)),e||bs(n,!0)}else e=tu(e).createTextNode(o),e[Mn]=n,n.stateNode=e}return _n(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=jr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Mn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),e=!1}else a=Eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Vi(n),n):(Vi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return _n(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=jr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Mn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),u=!1}else u=Eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Vi(n),n):(Vi(n),null)}return Vi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zc(n,n.updateQueue),_n(n),null);case 4:return Vt(),e===null&&Id(n.stateNode.containerInfo),_n(n),null;case 10:return Qa(n.type),_n(n),null;case 19:if(W(Nn),o=n.memoizedState,o===null)return _n(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xl(o,!1);else{if(Ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ac(e),f!==null){for(n.flags|=128,xl(o,!1),e=f.updateQueue,n.updateQueue=e,zc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)t0(a,e),a=a.sibling;return ht(Nn,Nn.current&1|2),Be&&Za(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Xc&&(n.flags|=128,u=!0,xl(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ac(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,zc(n,e),xl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Be)return _n(n),null}else 2*E()-o.renderingStartTime>Xc&&a!==536870912&&(n.flags|=128,u=!0,xl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=Nn.current,ht(Nn,u?a&1|2:a&1),Be&&Za(n,o.treeForkCount),e):(_n(n),null);case 22:case 23:return Vi(n),Ph(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(_n(n),n.subtreeFlags&6&&(n.flags|=8192)):_n(n),a=n.updateQueue,a!==null&&zc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&W(dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qa(Fn),_n(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cy(e,n){switch(yh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qa(Fn),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ne(n),null;case 31:if(n.memoizedState!==null){if(Vi(n),n.alternate===null)throw Error(s(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(Nn),null;case 4:return Vt(),null;case 10:return Qa(n.type),null;case 22:case 23:return Vi(n),Ph(),e!==null&&W(dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Qa(Fn),null;case 25:return null;default:return null}}function Rg(e,n){switch(yh(n),n.tag){case 3:Qa(Fn),Vt();break;case 26:case 27:case 5:ne(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Vi(n);break;case 13:Vi(n);break;case 19:W(Nn);break;case 10:Qa(n.type);break;case 22:case 23:Vi(n),Ph(),e!==null&&W(dr);break;case 24:Qa(Fn)}}function Sl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(A){tn(n,n.return,A)}}function Ls(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var G=a,rt=A;try{rt()}catch(mt){tn(u,G,mt)}}}o=o.next}while(o!==f)}}catch(mt){tn(n,n.return,mt)}}function Cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{v0(n,a)}catch(o){tn(e,e.return,o)}}}function wg(e,n,a){a.props=vr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){tn(e,n,o)}}function yl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){tn(e,n,u)}}function Fa(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){tn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){tn(e,n,u)}else a.current=null}function Dg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){tn(e,e.return,u)}}function pd(e,n,a){try{var o=e.stateNode;Uy(o,e.type,a,n),o[hn]=n}catch(u){tn(e,e.return,u)}}function Ug(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zs(e.type)||e.tag===4}function md(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ug(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gd(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&zs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gd(e,n,a),e=e.sibling;e!==null;)gd(e,n,a),e=e.sibling}function Hc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&zs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hc(e,n,a),e=e.sibling;e!==null;)Hc(e,n,a),e=e.sibling}function Lg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);li(n,o,a),n[Mn]=e,n[hn]=a}catch(f){tn(e,e.return,f)}}var ns=!1,Hn=!1,_d=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,Jn=null;function uy(e,n){if(e=e.containerInfo,Bd=ou,e=Wm(e),uh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,A=-1,G=-1,rt=0,mt=0,xt=e,ot=null;e:for(;;){for(var ct;xt!==a||u!==0&&xt.nodeType!==3||(A=v+u),xt!==f||o!==0&&xt.nodeType!==3||(G=v+o),xt.nodeType===3&&(v+=xt.nodeValue.length),(ct=xt.firstChild)!==null;)ot=xt,xt=ct;for(;;){if(xt===e)break e;if(ot===a&&++rt===u&&(A=v),ot===f&&++mt===o&&(G=v),(ct=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ct}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(zd={focusedElem:e,selectionRange:a},ou=!1,Jn=n;Jn!==null;)if(n=Jn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Jn=e;else for(;Jn!==null;){switch(n=Jn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var jt=vr(a.type,u);e=o.getSnapshotBeforeUpdate(jt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(le){tn(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Jn=e;break}Jn=n.return}}function Og(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:as(e,a),o&4&&Sl(5,a);break;case 1:if(as(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){tn(a,a.return,v)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){tn(a,a.return,v)}}o&64&&Cg(a),o&512&&yl(a,a.return);break;case 3:if(as(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{v0(e,n)}catch(v){tn(a,a.return,v)}}break;case 27:n===null&&o&4&&Lg(a);case 26:case 5:as(e,a),n===null&&o&4&&Dg(a),o&512&&yl(a,a.return);break;case 12:as(e,a);break;case 31:as(e,a),o&4&&Fg(e,a);break;case 13:as(e,a),o&4&&Bg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xy.bind(null,a),zy(e,a))));break;case 22:if(o=a.memoizedState!==null||ns,!o){n=n!==null&&n.memoizedState!==null||Hn,u=ns;var f=Hn;ns=o,(Hn=n)&&!f?ss(e,a,(a.subtreeFlags&8772)!==0):as(e,a),ns=u,Hn=f}break;case 30:break;default:as(e,a)}}function Ig(e){var n=e.alternate;n!==null&&(e.alternate=null,Ig(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&vn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yn=null,Ui=!1;function is(e,n,a){for(a=a.child;a!==null;)Pg(e,n,a),a=a.sibling}function Pg(e,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:Hn||Fa(a,n),is(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hn||Fa(a,n);var o=yn,u=Ui;zs(a.type)&&(yn=a.stateNode,Ui=!1),is(e,n,a),Dl(a.stateNode),yn=o,Ui=u;break;case 5:Hn||Fa(a,n);case 6:if(o=yn,u=Ui,yn=null,is(e,n,a),yn=o,Ui=u,yn!==null)if(Ui)try{(yn.nodeType===9?yn.body:yn.nodeName==="HTML"?yn.ownerDocument.body:yn).removeChild(a.stateNode)}catch(f){tn(a,n,f)}else try{yn.removeChild(a.stateNode)}catch(f){tn(a,n,f)}break;case 18:yn!==null&&(Ui?(e=yn,C_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),go(e)):C_(yn,a.stateNode));break;case 4:o=yn,u=Ui,yn=a.stateNode.containerInfo,Ui=!0,is(e,n,a),yn=o,Ui=u;break;case 0:case 11:case 14:case 15:Ls(2,a,n),Hn||Ls(4,a,n),is(e,n,a);break;case 1:Hn||(Fa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&wg(a,n,o)),is(e,n,a);break;case 21:is(e,n,a);break;case 22:Hn=(o=Hn)||a.memoizedState!==null,is(e,n,a),Hn=o;break;default:is(e,n,a)}}function Fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{go(e)}catch(a){tn(n,n.return,a)}}}function Bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{go(e)}catch(a){tn(n,n.return,a)}}function fy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ng),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ng),n;default:throw Error(s(435,e.tag))}}function Gc(e,n){var a=fy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Sy.bind(null,e,o);o.then(u,u)}})}function Li(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,A=v;t:for(;A!==null;){switch(A.tag){case 27:if(zs(A.type)){yn=A.stateNode,Ui=!1;break t}break;case 5:yn=A.stateNode,Ui=!1;break t;case 3:case 4:yn=A.stateNode.containerInfo,Ui=!0;break t}A=A.return}if(yn===null)throw Error(s(160));Pg(f,v,u),yn=null,Ui=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)zg(n,e),n=n.sibling}var ya=null;function zg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Li(n,e),Ni(e),o&4&&(Ls(3,e,e.return),Sl(3,e),Ls(5,e,e.return));break;case 1:Li(n,e),Ni(e),o&512&&(Hn||a===null||Fa(a,a.return)),o&64&&ns&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ya;if(Li(n,e),Ni(e),o&512&&(Hn||a===null||Fa(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Qi]||f[Mn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),li(f,o,a),f[Mn]=e,Y(f),o=f;break t;case"link":var v=z_("link","href",u).get(o+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break e}}f=u.createElement(o),li(f,o,a),u.head.appendChild(f);break;case"meta":if(v=z_("meta","content",u).get(o+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break e}}f=u.createElement(o),li(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Mn]=e,Y(f),o=f}e.stateNode=o}else H_(u,e.type,e.stateNode);else e.stateNode=B_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?H_(u,e.type,e.stateNode):B_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pd(e,e.memoizedProps,a.memoizedProps)}break;case 27:Li(n,e),Ni(e),o&512&&(Hn||a===null||Fa(a,a.return)),a!==null&&o&4&&pd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Li(n,e),Ni(e),o&512&&(Hn||a===null||Fa(a,a.return)),e.flags&32){u=e.stateNode;try{Kn(u,"")}catch(jt){tn(e,e.return,jt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,pd(e,u,a!==null?a.memoizedProps:u)),o&1024&&(_d=!0);break;case 6:if(Li(n,e),Ni(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(jt){tn(e,e.return,jt)}}break;case 3:if(iu=null,u=ya,ya=eu(n.containerInfo),Li(n,e),ya=u,Ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{go(n.containerInfo)}catch(jt){tn(e,e.return,jt)}_d&&(_d=!1,Hg(e));break;case 4:o=ya,ya=eu(e.stateNode.containerInfo),Li(n,e),Ni(e),ya=o;break;case 12:Li(n,e),Ni(e);break;case 31:Li(n,e),Ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gc(e,o)));break;case 13:Li(n,e),Ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,rt=ns,mt=Hn;if(ns=rt||u,Hn=mt||G,Li(n,e),Hn=mt,ns=rt,Ni(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ns||Hn||xr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=G.stateNode;var xt=G.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(jt){tn(G,G.return,jt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(jt){tn(G,G.return,jt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?w_(ct,!0):w_(G.stateNode,!1)}catch(jt){tn(G,G.return,jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gc(e,a))));break;case 19:Li(n,e),Ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gc(e,o)));break;case 30:break;case 21:break;default:Li(n,e),Ni(e)}}function Ni(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ug(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=md(e);Hc(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Kn(v,""),a.flags&=-33);var A=md(e);Hc(e,A,v);break;case 3:case 4:var G=a.stateNode.containerInfo,rt=md(e);gd(e,rt,G);break;default:throw Error(s(161))}}catch(mt){tn(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function as(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(e,n.alternate,n),n=n.sibling}function xr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ls(4,n,n.return),xr(n);break;case 1:Fa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&wg(n,n.return,a),xr(n);break;case 27:Dl(n.stateNode);case 26:case 5:Fa(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}e=e.sibling}}function ss(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ss(u,f,a),Sl(4,f);break;case 1:if(ss(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){tn(o,o.return,rt)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)_0(G[u],A)}catch(rt){tn(o,o.return,rt)}}a&&v&64&&Cg(f),yl(f,f.return);break;case 27:Lg(f);case 26:case 5:ss(u,f,a),a&&o===null&&v&4&&Dg(f),yl(f,f.return);break;case 12:ss(u,f,a);break;case 31:ss(u,f,a),a&&v&4&&Fg(u,f);break;case 13:ss(u,f,a),a&&v&4&&Bg(u,f);break;case 22:f.memoizedState===null&&ss(u,f,a),yl(f,f.return);break;case 30:break;default:ss(u,f,a)}n=n.sibling}}function vd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ol(a))}function xd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ol(e))}function Ma(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gg(e,n,a,o),n=n.sibling}function Gg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(e,n,a,o),u&2048&&Sl(9,n);break;case 1:Ma(e,n,a,o);break;case 3:Ma(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ol(e)));break;case 12:if(u&2048){Ma(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){tn(n,n.return,G)}}else Ma(e,n,a,o);break;case 31:Ma(e,n,a,o);break;case 13:Ma(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ma(e,n,a,o):Ml(e,n):f._visibility&2?Ma(e,n,a,o):(f._visibility|=2,ao(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&vd(v,n);break;case 24:Ma(e,n,a,o),u&2048&&xd(n.alternate,n);break;default:Ma(e,n,a,o)}}function ao(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,G=o,rt=v.flags;switch(v.tag){case 0:case 11:case 15:ao(f,v,A,G,u),Sl(8,v);break;case 23:break;case 22:var mt=v.stateNode;v.memoizedState!==null?mt._visibility&2?ao(f,v,A,G,u):Ml(f,v):(mt._visibility|=2,ao(f,v,A,G,u)),u&&rt&2048&&vd(v.alternate,v);break;case 24:ao(f,v,A,G,u),u&&rt&2048&&xd(v.alternate,v);break;default:ao(f,v,A,G,u)}n=n.sibling}}function Ml(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ml(a,o),u&2048&&vd(o.alternate,o);break;case 24:Ml(a,o),u&2048&&xd(o.alternate,o);break;default:Ml(a,o)}n=n.sibling}}var El=8192;function so(e,n,a){if(e.subtreeFlags&El)for(e=e.child;e!==null;)Vg(e,n,a),e=e.sibling}function Vg(e,n,a){switch(e.tag){case 26:so(e,n,a),e.flags&El&&e.memoizedState!==null&&Qy(a,ya,e.memoizedState,e.memoizedProps);break;case 5:so(e,n,a);break;case 3:case 4:var o=ya;ya=eu(e.stateNode.containerInfo),so(e,n,a),ya=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=El,El=16777216,so(e,n,a),El=o):so(e,n,a));break;default:so(e,n,a)}}function kg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,Wg(o,e)}kg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xg(e),e=e.sibling}function Xg(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&Ls(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vc(e)):Tl(e);break;default:Tl(e)}}function Vc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,Wg(o,e)}kg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ls(8,n,n.return),Vc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vc(n));break;default:Vc(n)}e=e.sibling}}function Wg(e,n){for(;Jn!==null;){var a=Jn;switch(a.tag){case 0:case 11:case 15:Ls(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ol(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Jn=o;else t:for(a=e;Jn!==null;){o=Jn;var u=o.sibling,f=o.return;if(Ig(o),o===a){Jn=null;break t}if(u!==null){u.return=f,Jn=u;break t}Jn=f}}}var hy={getCacheForType:function(e){var n=ri(Fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ri(Fn).controller.signal}},dy=typeof WeakMap=="function"?WeakMap:Map,Ze=0,cn=null,Ue=null,Ie=0,$e=0,ki=null,Ns=!1,ro=!1,Sd=!1,rs=0,Ln=0,Os=0,Sr=0,yd=0,Xi=0,oo=0,bl=null,Oi=null,Md=!1,kc=0,Yg=0,Xc=1/0,Wc=null,Is=null,Xn=0,Ps=null,lo=null,os=0,Ed=0,Td=null,qg=null,Al=0,bd=null;function Wi(){return(Ze&2)!==0&&Ie!==0?Ie&-Ie:N.T!==null?Ud():Zi()}function jg(){if(Xi===0)if((Ie&536870912)===0||Be){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),Xi=e}else Xi=536870912;return e=Gi.current,e!==null&&(e.flags|=32),Xi}function Ii(e,n,a){(e===cn&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(co(e,0),Fs(e,Ie,Xi,!1)),ii(e,a),((Ze&2)===0||e!==cn)&&(e===cn&&((Ze&2)===0&&(Sr|=a),Ln===4&&Fs(e,Ie,Xi,!1)),Ba(e))}function Zg(e,n,a){if((Ze&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=o?gy(e,n):Rd(e,n,!0),f=o;do{if(u===0){ro&&!o&&Fs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!py(a)){u=Rd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=e;u=bl;var G=A.current.memoizedState.isDehydrated;if(G&&(co(A,v).flags|=256),v=Rd(A,v,!1),v!==2){if(Sd&&!G){A.errorRecoveryDisabledLanes|=f,Sr|=f,u=4;break t}f=Oi,Oi=u,f!==null&&(Oi===null?Oi=f:Oi.push.apply(Oi,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){co(e,0),Fs(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Fs(o,n,Xi,!Ns);break t;case 2:Oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=kc+300-E(),10<u)){if(Fs(o,n,Xi,!Ns),ut(o,0,!0)!==0)break t;os=n,o.timeoutHandle=A_(Kg.bind(null,o,a,Oi,Wc,Md,n,Xi,Sr,oo,Ns,f,"Throttled",-0,0),u);break t}Kg(o,a,Oi,Wc,Md,n,Xi,Sr,oo,Ns,f,null,-0,0)}}break}while(!0);Ba(e)}function Kg(e,n,a,o,u,f,v,A,G,rt,mt,xt,ot,ct){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},Vg(n,f,xt);var jt=(f&62914560)===f?kc-E():(f&4194048)===f?Yg-E():0;if(jt=Jy(xt,jt),jt!==null){os=f,e.cancelPendingCommit=jt(a_.bind(null,e,n,f,a,o,u,v,A,G,mt,xt,null,ot,ct)),Fs(e,f,v,!rt);return}}a_(e,n,f,a,o,u,v,A,G)}function py(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!zi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fs(e,n,a,o){n&=~yd,n&=~Sr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Nt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&La(e,a,n)}function Yc(){return(Ze&6)===0?(Rl(0),!1):!0}function Ad(){if(Ue!==null){if($e===0)var e=Ue.return;else e=Ue,Ka=fr=null,Vh(e),$r=null,cl=0,e=Ue;for(;e!==null;)Rg(e.alternate,e),e=e.return;Ue=null}}function co(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Oy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),os=0,Ad(),cn=e,Ue=a=ja(e.current,null),Ie=n,$e=0,ki=null,Ns=!1,ro=Bt(e,n),Sd=!1,oo=Xi=yd=Sr=Os=Ln=0,Oi=bl=null,Md=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Nt(o),f=1<<u;n|=e[u],o&=~f}return rs=n,dc(),a}function Qg(e,n){_e=null,N.H=_l,n===Jr||n===yc?(n=d0(),$e=3):n===Dh?(n=d0(),$e=4):$e=n===ad?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ki=n,Ue===null&&(Ln=1,Ic(e,na(n,e.current)))}function Jg(){var e=Gi.current;return e===null?!0:(Ie&4194048)===Ie?ra===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===ra:!1}function $g(){var e=N.H;return N.H=_l,e===null?_l:e}function t_(){var e=N.A;return N.A=hy,e}function qc(){Ln=4,Ns||(Ie&4194048)!==Ie&&Gi.current!==null||(ro=!0),(Os&134217727)===0&&(Sr&134217727)===0||cn===null||Fs(cn,Ie,Xi,!1)}function Rd(e,n,a){var o=Ze;Ze|=2;var u=$g(),f=t_();(cn!==e||Ie!==n)&&(Wc=null,co(e,n)),n=!1;var v=Ln;t:do try{if($e!==0&&Ue!==null){var A=Ue,G=ki;switch($e){case 8:Ad(),v=6;break t;case 3:case 2:case 9:case 6:Gi.current===null&&(n=!0);var rt=$e;if($e=0,ki=null,uo(e,A,G,rt),a&&ro){v=0;break t}break;default:rt=$e,$e=0,ki=null,uo(e,A,G,rt)}}my(),v=Ln;break}catch(mt){Qg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Ka=fr=null,Ze=o,N.H=u,N.A=f,Ue===null&&(cn=null,Ie=0,dc()),v}function my(){for(;Ue!==null;)e_(Ue)}function gy(e,n){var a=Ze;Ze|=2;var o=$g(),u=t_();cn!==e||Ie!==n?(Wc=null,Xc=E()+500,co(e,n)):ro=Bt(e,n);t:do try{if($e!==0&&Ue!==null){n=Ue;var f=ki;e:switch($e){case 1:$e=0,ki=null,uo(e,n,f,1);break;case 2:case 9:if(f0(f)){$e=0,ki=null,n_(n);break}n=function(){$e!==2&&$e!==9||cn!==e||($e=7),Ba(e)},f.then(n,n);break t;case 3:$e=7;break t;case 4:$e=5;break t;case 7:f0(f)?($e=0,ki=null,n_(n)):($e=0,ki=null,uo(e,n,f,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var A=Ue;if(v?G_(v):A.stateNode.complete){$e=0,ki=null;var G=A.sibling;if(G!==null)Ue=G;else{var rt=A.return;rt!==null?(Ue=rt,jc(rt)):Ue=null}break e}}$e=0,ki=null,uo(e,n,f,5);break;case 6:$e=0,ki=null,uo(e,n,f,6);break;case 8:Ad(),Ln=6;break t;default:throw Error(s(462))}}_y();break}catch(mt){Qg(e,mt)}while(!0);return Ka=fr=null,N.H=o,N.A=u,Ze=a,Ue!==null?0:(cn=null,Ie=0,dc(),Ln)}function _y(){for(;Ue!==null&&!Qt();)e_(Ue)}function e_(e){var n=bg(e.alternate,e,rs);e.memoizedProps=e.pendingProps,n===null?jc(e):Ue=n}function n_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=xg(a,n,n.pendingProps,n.type,void 0,Ie);break;case 11:n=xg(a,n,n.pendingProps,n.type.render,n.ref,Ie);break;case 5:Vh(n);default:Rg(a,n),n=Ue=t0(n,rs),n=bg(a,n,rs)}e.memoizedProps=e.pendingProps,n===null?jc(e):Ue=n}function uo(e,n,a,o){Ka=fr=null,Vh(n),$r=null,cl=0;var u=n.return;try{if(sy(e,u,n,a,Ie)){Ln=1,Ic(e,na(a,e.current)),Ue=null;return}}catch(f){if(u!==null)throw Ue=u,f;Ln=1,Ic(e,na(a,e.current)),Ue=null;return}n.flags&32768?(Be||o===1?e=!0:ro||(Ie&536870912)!==0?e=!1:(Ns=e=!0,(o===2||o===9||o===3||o===6)&&(o=Gi.current,o!==null&&o.tag===13&&(o.flags|=16384))),i_(n,e)):jc(n)}function jc(e){var n=e;do{if((n.flags&32768)!==0){i_(n,Ns);return}e=n.return;var a=ly(n.alternate,n,rs);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);Ln===0&&(Ln=5)}function i_(e,n){do{var a=cy(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);Ln=6,Ue=null}function a_(e,n,a,o,u,f,v,A,G){e.cancelPendingCommit=null;do Zc();while(Xn!==0);if((Ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=mh,Ai(e,a,f,v,A,G),e===cn&&(Ue=cn=null,Ie=0),lo=n,Ps=e,os=a,Ed=f,Td=u,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yy(pt,function(){return c_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=F.p,F.p=2,v=Ze,Ze|=4;try{uy(e,n,a)}finally{Ze=v,F.p=u,N.T=o}}Xn=1,s_(),r_(),o_()}}function s_(){if(Xn===1){Xn=0;var e=Ps,n=lo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=F.p;F.p=2;var u=Ze;Ze|=4;try{zg(n,e);var f=zd,v=Wm(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Xm(A.ownerDocument.documentElement,A)){if(G!==null&&uh(A)){var rt=G.start,mt=G.end;if(mt===void 0&&(mt=rt),"selectionStart"in A)A.selectionStart=rt,A.selectionEnd=Math.min(mt,A.value.length);else{var xt=A.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),jt=A.textContent.length,le=Math.min(G.start,jt),rn=G.end===void 0?le:Math.min(G.end,jt);!ct.extend&&le>rn&&(v=rn,rn=le,le=v);var K=km(A,le),X=km(A,rn);if(K&&X&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var st=xt.createRange();st.setStart(K.node,K.offset),ct.removeAllRanges(),le>rn?(ct.addRange(st),ct.extend(X.node,X.offset)):(st.setEnd(X.node,X.offset),ct.addRange(st))}}}}for(xt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&xt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var vt=xt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}ou=!!Bd,zd=Bd=null}finally{Ze=u,F.p=o,N.T=a}}e.current=n,Xn=2}}function r_(){if(Xn===2){Xn=0;var e=Ps,n=lo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=F.p;F.p=2;var u=Ze;Ze|=4;try{Og(e,n.alternate,n)}finally{Ze=u,F.p=o,N.T=a}}Xn=3}}function o_(){if(Xn===4||Xn===3){Xn=0,O();var e=Ps,n=lo,a=os,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xn=5:(Xn=0,lo=Ps=null,l_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Is=null),ys(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=F.p,F.p=2,N.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var A=o[v];f(A.value,{componentStack:A.stack})}}finally{N.T=n,F.p=u}}(os&3)!==0&&Zc(),Ba(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===bd?Al++:(Al=0,bd=e):Al=0,Rl(0)}}function l_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ol(n)))}function Zc(){return s_(),r_(),o_(),c_()}function c_(){if(Xn!==5)return!1;var e=Ps,n=Ed;Ed=0;var a=ys(os),o=N.T,u=F.p;try{F.p=32>a?32:a,N.T=null,a=Td,Td=null;var f=Ps,v=os;if(Xn=0,lo=Ps=null,os=0,(Ze&6)!==0)throw Error(s(331));var A=Ze;if(Ze|=4,Xg(f.current),Gg(f,f.current,v,a),Ze=A,Rl(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Tt,f)}catch{}return!0}finally{F.p=u,N.T=o,l_(e,n)}}function u_(e,n,a){n=na(a,n),n=id(e.stateNode,n,2),e=ws(e,n,2),e!==null&&(ii(e,2),Ba(e))}function tn(e,n,a){if(e.tag===3)u_(e,e,a);else for(;n!==null;){if(n.tag===3){u_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Is===null||!Is.has(o))){e=na(a,e),a=fg(2),o=ws(n,a,2),o!==null&&(hg(a,o,n,e),ii(o,2),Ba(o));break}}n=n.return}}function Cd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new dy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Sd=!0,u.add(a),e=vy.bind(null,e,n,a),n.then(e,e))}function vy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,cn===e&&(Ie&a)===a&&(Ln===4||Ln===3&&(Ie&62914560)===Ie&&300>E()-kc?(Ze&2)===0&&co(e,0):yd|=a,oo===Ie&&(oo=0)),Ba(e)}function f_(e,n){n===0&&(n=We()),e=lr(e,n),e!==null&&(ii(e,n),Ba(e))}function xy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),f_(e,a)}function Sy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),f_(e,a)}function yy(e,n){return Me(e,n)}var Kc=null,fo=null,wd=!1,Qc=!1,Dd=!1,Bs=0;function Ba(e){e!==fo&&e.next===null&&(fo===null?Kc=fo=e:fo=fo.next=e),Qc=!0,wd||(wd=!0,Ey())}function Rl(e,n){if(!Dd&&Qc){Dd=!0;do for(var a=!1,o=Kc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Nt(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,m_(o,f))}else f=Ie,f=ut(o,o===cn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bt(o,f)||(a=!0,m_(o,f));o=o.next}while(a);Dd=!1}}function My(){h_()}function h_(){Qc=wd=!1;var e=0;Bs!==0&&Ny()&&(e=Bs);for(var n=E(),a=null,o=Kc;o!==null;){var u=o.next,f=d_(o,n);f===0?(o.next=null,a===null?Kc=u:a.next=u,u===null&&(fo=a)):(a=o,(e!==0||(f&3)!==0)&&(Qc=!0)),o=u}Xn!==0&&Xn!==5||Rl(e),Bs!==0&&(Bs=0)}function d_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Nt(f),A=1<<v,G=u[v];G===-1?((A&a)===0||(A&o)!==0)&&(u[v]=ce(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=cn,a=Ie,a=ut(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&($e===2||$e===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ne(o),ys(a)){case 2:case 8:a=yt;break;case 32:a=pt;break;case 268435456:a=wt;break;default:a=pt}return o=p_.bind(null,e),a=Me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ne(o),e.callbackPriority=2,e.callbackNode=null,2}function p_(e,n){if(Xn!==0&&Xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zc()&&e.callbackNode!==a)return null;var o=Ie;return o=ut(e,e===cn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Zg(e,o,n),d_(e,E()),e.callbackNode!=null&&e.callbackNode===a?p_.bind(null,e):null)}function m_(e,n){if(Zc())return null;Zg(e,n,!0)}function Ey(){Iy(function(){(Ze&6)!==0?Me(gt,My):h_()})}function Ud(){if(Bs===0){var e=Kr;e===0&&(e=At,At<<=1,(At&261888)===0&&(At=256)),Bs=e}return Bs}function g_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ar(""+e)}function __(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ty(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=g_((u[hn]||null).action),v=o.submitter;v&&(n=(n=v[hn]||null)?g_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new vi("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Bs!==0){var G=v?__(u,v):new FormData(u);Qh(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=v?__(u,v):new FormData(u),Qh(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Ld=0;Ld<ph.length;Ld++){var Nd=ph[Ld],by=Nd.toLowerCase(),Ay=Nd[0].toUpperCase()+Nd.slice(1);Sa(by,"on"+Ay)}Sa(jm,"onAnimationEnd"),Sa(Zm,"onAnimationIteration"),Sa(Km,"onAnimationStart"),Sa("dblclick","onDoubleClick"),Sa("focusin","onFocus"),Sa("focusout","onBlur"),Sa(VS,"onTransitionRun"),Sa(kS,"onTransitionStart"),Sa(XS,"onTransitionCancel"),Sa(Qm,"onTransitionEnd"),Lt("onMouseEnter",["mouseout","mouseover"]),Lt("onMouseLeave",["mouseout","mouseover"]),Lt("onPointerEnter",["pointerout","pointerover"]),Lt("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function v_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var A=o[v],G=A.instance,rt=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=rt;try{f(u)}catch(mt){hc(mt)}u.currentTarget=null,f=G}else for(v=0;v<o.length;v++){if(A=o[v],G=A.instance,rt=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=rt;try{f(u)}catch(mt){hc(mt)}u.currentTarget=null,f=G}}}}function Le(e,n){var a=n[ga];a===void 0&&(a=n[ga]=new Set);var o=e+"__bubble";a.has(o)||(x_(n,e,2,!1),a.add(o))}function Od(e,n,a){var o=0;n&&(o|=4),x_(a,e,o,n)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function Id(e){if(!e[Jc]){e[Jc]=!0,lt.forEach(function(a){a!=="selectionchange"&&(Ry.has(a)||Od(a,!1,e),Od(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jc]||(n[Jc]=!0,Od("selectionchange",!1,n))}}function x_(e,n,a,o){switch(j_(n)){case 2:var u=eM;break;case 8:u=nM;break;default:u=Kd}a=u.bind(null,n,a,e),u=void 0,!je||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Pd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var A=o.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=o.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=Ji(A),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){o=f=v;continue t}A=A.parentNode}}o=o.return}de(function(){var rt=f,mt=Dt(a),xt=[];t:{var ot=Jm.get(e);if(ot!==void 0){var ct=vi,jt=e;switch(e){case"keypress":if(dn(a)===0)break t;case"keydown":case"keyup":ct=SS;break;case"focusin":jt="focus",ct=Qn;break;case"focusout":jt="blur",ct=Qn;break;case"beforeblur":case"afterblur":ct=Qn;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Dn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Te;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ES;break;case jm:case Zm:case Km:ct=Si;break;case Qm:ct=bS;break;case"scroll":case"scrollend":ct=Di;break;case"wheel":ct=RS;break;case"copy":case"cut":case"paste":ct=sr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=wm;break;case"toggle":case"beforetoggle":ct=wS}var le=(n&4)!==0,rn=!le&&(e==="scroll"||e==="scrollend"),K=le?ot!==null?ot+"Capture":null:ot;le=[];for(var X=rt,st;X!==null;){var vt=X;if(st=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||st===null||K===null||(vt=Fe(X,K),vt!=null&&le.push(wl(X,vt,st))),rn)break;X=X.return}0<le.length&&(ot=new ct(ot,jt,null,a,mt),xt.push({event:ot,listeners:le}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",ot&&a!==Hr&&(jt=a.relatedTarget||a.fromElement)&&(Ji(jt)||jt[Ki]))break t;if((ct||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(jt=a.relatedTarget||a.toElement,ct=rt,jt=jt?Ji(jt):null,jt!==null&&(rn=c(jt),le=jt.tag,jt!==rn||le!==5&&le!==27&&le!==6)&&(jt=null)):(ct=null,jt=rt),ct!==jt)){if(le=Dn,vt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(le=wm,vt="onPointerLeave",K="onPointerEnter",X="pointer"),rn=ct==null?ot:va(ct),st=jt==null?ot:va(jt),ot=new le(vt,X+"leave",ct,a,mt),ot.target=rn,ot.relatedTarget=st,vt=null,Ji(mt)===rt&&(le=new le(K,X+"enter",jt,a,mt),le.target=st,le.relatedTarget=rn,vt=le),rn=vt,ct&&jt)e:{for(le=Cy,K=ct,X=jt,st=0,vt=K;vt;vt=le(vt))st++;vt=0;for(var ie=X;ie;ie=le(ie))vt++;for(;0<st-vt;)K=le(K),st--;for(;0<vt-st;)X=le(X),vt--;for(;st--;){if(K===X||X!==null&&K===X.alternate){le=K;break e}K=le(K),X=le(X)}le=null}else le=null;ct!==null&&S_(xt,ot,ct,le,!1),jt!==null&&rn!==null&&S_(xt,rn,jt,le,!0)}}t:{if(ot=rt?va(rt):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var Ye=Fm;else if(Im(ot))if(Bm)Ye=zS;else{Ye=FS;var te=PS}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?rt&&qa(rt.elementType)&&(Ye=Fm):Ye=BS;if(Ye&&(Ye=Ye(e,rt))){Pm(xt,Ye,a,mt);break t}te&&te(e,ot,rt),e==="focusout"&&rt&&ot.type==="number"&&rt.memoizedProps.value!=null&&Ri(ot,"number",ot.value)}switch(te=rt?va(rt):window,e){case"focusin":(Im(te)||te.contentEditable==="true")&&(Vr=te,fh=rt,al=null);break;case"focusout":al=fh=Vr=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,Ym(xt,a,mt);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":Ym(xt,a,mt)}var xe;if(oh)t:{switch(e){case"compositionstart":var Pe="onCompositionStart";break t;case"compositionend":Pe="onCompositionEnd";break t;case"compositionupdate":Pe="onCompositionUpdate";break t}Pe=void 0}else Gr?Nm(e,a)&&(Pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(Dm&&a.locale!=="ko"&&(Gr||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&Gr&&(xe=Qe()):(Cn=mt,xn="value"in Cn?Cn.value:Cn.textContent,Gr=!0)),te=$c(rt,Pe),0<te.length&&(Pe=new Oa(Pe,e,null,a,mt),xt.push({event:Pe,listeners:te}),xe?Pe.data=xe:(xe=Om(a),xe!==null&&(Pe.data=xe)))),(xe=US?LS(e,a):NS(e,a))&&(Pe=$c(rt,"onBeforeInput"),0<Pe.length&&(te=new Oa("onBeforeInput","beforeinput",null,a,mt),xt.push({event:te,listeners:Pe}),te.data=xe)),Ty(xt,e,rt,a,mt)}v_(xt,n)})}function wl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $c(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Fe(e,a),u!=null&&o.unshift(wl(e,u,f)),u=Fe(e,n),u!=null&&o.push(wl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Cy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var A=a,G=A.alternate,rt=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||rt===null||(G=rt,u?(rt=Fe(a,f),rt!=null&&v.unshift(wl(a,rt,G))):u||(rt=Fe(a,f),rt!=null&&v.push(wl(a,rt,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var wy=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function y_(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(Dy,"")}function M_(e,n){return n=y_(n),y_(e)===n}function sn(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Kn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Kn(e,""+o);break;case"className":ue(e,"class",o);break;case"tabIndex":ue(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ue(e,a,o);break;case"style":Bi(e,o,f);break;case"data":if(n!=="object"){ue(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ar(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&sn(e,n,"name",u.name,u,null),sn(e,n,"formEncType",u.formEncType,u,null),sn(e,n,"formMethod",u.formMethod,u,null),sn(e,n,"formTarget",u.formTarget,u,null)):(sn(e,n,"encType",u.encType,u,null),sn(e,n,"method",u.method,u,null),sn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ar(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$i);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ar(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Le("beforetoggle",e),Le("toggle",e),oe(e,"popover",o);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ko.get(a)||a,oe(e,a,o))}}function Fd(e,n,a,o,u,f){switch(a){case"style":Bi(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Kn(e,o):(typeof o=="number"||typeof o=="bigint")&&Kn(e,""+o);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):oe(e,a,o)}}}function li(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(e,n,f,v,a,null)}}u&&sn(e,n,"srcSet",a.srcSet,a,null),o&&sn(e,n,"src",a.src,a,null);return;case"input":Le("invalid",e);var A=f=v=u=null,G=null,rt=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":v=mt;break;case"checked":G=mt;break;case"defaultChecked":rt=mt;break;case"value":f=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:sn(e,n,o,mt,a,null)}}hi(e,f,A,G,rt,v,u,!1);return;case"select":Le("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":o=A;default:sn(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!o,n!=null?di(e,!!o,n,!1):a!=null&&di(e,!!o,a,!0);return;case"textarea":Le("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:sn(e,n,v,A,a,null)}mn(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":sn(e,n,G,o,a,null));return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(o=0;o<Cl.length;o++)Le(Cl[o],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(o=a[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(e,n,rt,o,a,null)}return;default:if(qa(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Fd(e,n,mt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&sn(e,n,A,o,a,null))}function Uy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,G=null,rt=null,mt=null;for(ct in a){var xt=a[ct];if(a.hasOwnProperty(ct)&&xt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=xt;default:o.hasOwnProperty(ct)||sn(e,n,ct,null,o,xt)}}for(var ot in o){var ct=o[ot];if(xt=a[ot],o.hasOwnProperty(ot)&&(ct!=null||xt!=null))switch(ot){case"type":f=ct;break;case"name":u=ct;break;case"checked":rt=ct;break;case"defaultChecked":mt=ct;break;case"value":v=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==xt&&sn(e,n,ot,ct,o,xt)}}Rn(e,v,A,G,rt,mt,f,u);return;case"select":ct=v=A=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ct=G;default:o.hasOwnProperty(f)||sn(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==G&&sn(e,n,u,f,o,G)}n=A,a=v,o=ct,ot!=null?di(e,!!a,ot,!1):!!o!=!!a&&(n!=null?di(e,!!a,n,!0):di(e,!!a,a?[]:"",!1));return;case"textarea":ct=ot=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:sn(e,n,A,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ot=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&sn(e,n,v,u,o,f)}Xe(e,ot,ct);return;case"option":for(var jt in a)ot=a[jt],a.hasOwnProperty(jt)&&ot!=null&&!o.hasOwnProperty(jt)&&(jt==="selected"?e.selected=!1:sn(e,n,jt,null,o,ot));for(G in o)ot=o[G],ct=a[G],o.hasOwnProperty(G)&&ot!==ct&&(ot!=null||ct!=null)&&(G==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":sn(e,n,G,ot,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)ot=a[le],a.hasOwnProperty(le)&&ot!=null&&!o.hasOwnProperty(le)&&sn(e,n,le,null,o,ot);for(rt in o)if(ot=o[rt],ct=a[rt],o.hasOwnProperty(rt)&&ot!==ct&&(ot!=null||ct!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:sn(e,n,rt,ot,o,ct)}return;default:if(qa(n)){for(var rn in a)ot=a[rn],a.hasOwnProperty(rn)&&ot!==void 0&&!o.hasOwnProperty(rn)&&Fd(e,n,rn,void 0,o,ot);for(mt in o)ot=o[mt],ct=a[mt],!o.hasOwnProperty(mt)||ot===ct||ot===void 0&&ct===void 0||Fd(e,n,mt,ot,o,ct);return}}for(var K in a)ot=a[K],a.hasOwnProperty(K)&&ot!=null&&!o.hasOwnProperty(K)&&sn(e,n,K,null,o,ot);for(xt in o)ot=o[xt],ct=a[xt],!o.hasOwnProperty(xt)||ot===ct||ot==null&&ct==null||sn(e,n,xt,ot,o,ct)}function E_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ly(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&E_(v)){for(v=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],rt=G.startTime;if(rt>A)break;var mt=G.transferSize,xt=G.initiatorType;mt&&E_(xt)&&(G=G.responseEnd,v+=mt*(G<A?1:(A-rt)/(G-rt)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bd=null,zd=null;function tu(e){return e.nodeType===9?e:e.ownerDocument}function T_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Ny(){var e=window.event;return e&&e.type==="popstate"?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var A_=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,R_=typeof Promise=="function"?Promise:void 0,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof R_<"u"?function(e){return R_.resolve(null).then(e).catch(Py)}:A_;function Py(e){setTimeout(function(){throw e})}function zs(e){return e==="head"}function C_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),go(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Dl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Dl(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[Qi]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Dl(e.ownerDocument.body);a=u}while(a);go(n)}function w_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Vd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vd(a),vn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Fy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Qi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=oa(e.nextSibling),e===null)break}return null}function By(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=oa(e.nextSibling),e===null))return null;return e}function D_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oa(e.nextSibling),e===null))return null;return e}function kd(e){return e.data==="$?"||e.data==="$~"}function Xd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function oa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Wd=null;function U_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return oa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function L_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function N_(e,n,a){switch(n=tu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Dl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);vn(e)}var la=new Map,O_=new Set;function eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ls=F.d;F.d={f:Hy,r:Gy,D:Vy,C:ky,L:Xy,m:Wy,X:qy,S:Yy,M:jy};function Hy(){var e=ls.f(),n=Yc();return e||n}function Gy(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?Q0(n):ls.r(e)}var ho=typeof document>"u"?null:document;function I_(e,n,a){var o=ho;if(o&&typeof n=="string"&&n){var u=se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),O_.has(u)||(O_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),li(n,"link",e),Y(n),o.head.appendChild(n)))}}function Vy(e){ls.D(e),I_("dns-prefetch",e,null)}function ky(e,n){ls.C(e,n),I_("preconnect",e,n)}function Xy(e,n,a){ls.L(e,n,a);var o=ho;if(o&&e&&n){var u='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+se(a.imageSizes)+'"]')):u+='[href="'+se(e)+'"]';var f=u;switch(n){case"style":f=po(e);break;case"script":f=mo(e)}la.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),la.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ul(f))||n==="script"&&o.querySelector(Ll(f))||(n=o.createElement("link"),li(n,"link",e),Y(n),o.head.appendChild(n)))}}function Wy(e,n){ls.m(e,n);var a=ho;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+se(o)+'"][href="'+se(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mo(e)}if(!la.has(f)&&(e=x({rel:"modulepreload",href:e},n),la.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ll(f)))return}o=a.createElement("link"),li(o,"link",e),Y(o),a.head.appendChild(o)}}}function Yy(e,n,a){ls.S(e,n,a);var o=ho;if(o&&e){var u=R(o).hoistableStyles,f=po(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=o.querySelector(Ul(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=la.get(f))&&Yd(e,a);var G=v=o.createElement("link");Y(G),li(G,"link",e),G._p=new Promise(function(rt,mt){G.onload=rt,G.onerror=mt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,nu(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function qy(e,n){ls.X(e,n);var a=ho;if(a&&e){var o=R(a).hoistableScripts,u=mo(e),f=o.get(u);f||(f=a.querySelector(Ll(u)),f||(e=x({src:e,async:!0},n),(n=la.get(u))&&qd(e,n),f=a.createElement("script"),Y(f),li(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function jy(e,n){ls.M(e,n);var a=ho;if(a&&e){var o=R(a).hoistableScripts,u=mo(e),f=o.get(u);f||(f=a.querySelector(Ll(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=la.get(u))&&qd(e,n),f=a.createElement("script"),Y(f),li(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function P_(e,n,a,o){var u=(u=et.current)?eu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=po(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=po(a.href);var f=R(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Ul(e)))&&!f._p&&(v.instance=f,v.state.loading=5),la.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},la.set(e,a),f||Zy(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mo(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function po(e){return'href="'+se(e)+'"'}function Ul(e){return'link[rel="stylesheet"]['+e+"]"}function F_(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Zy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),li(n,"link",a),Y(n),e.head.appendChild(n))}function mo(e){return'[src="'+se(e)+'"]'}function Ll(e){return"script[async]"+e}function B_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),li(o,"style",u),nu(o,a.precedence,e),n.instance=o;case"stylesheet":u=po(a.href);var f=e.querySelector(Ul(u));if(f)return n.state.loading|=4,n.instance=f,Y(f),f;o=F_(a),(u=la.get(u))&&Yd(o,u),f=(e.ownerDocument||e).createElement("link"),Y(f);var v=f;return v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),li(f,"link",o),n.state.loading|=4,nu(f,a.precedence,e),n.instance=f;case"script":return f=mo(a.src),(u=e.querySelector(Ll(f)))?(n.instance=u,Y(u),u):(o=a,(u=la.get(f))&&(o=x({},a),qd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),li(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nu(o,a.precedence,e));return n.instance}function nu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var A=o[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Yd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var iu=null;function z_(e,n,a){if(iu===null){var o=new Map,u=iu=new Map;u.set(a,o)}else u=iu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Qi]||f[Mn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=o.get(v);A?A.push(f):o.set(v,[f])}}return o}function H_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ky(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function G_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=po(o.href),f=n.querySelector(Ul(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=au.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Y(f);return}f=n.ownerDocument||n,o=F_(o),(u=la.get(u))&&Yd(o,u),f=f.createElement("link"),Y(f);var v=f;v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),li(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=au.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jd=0;function Jy(e,n){return e.stylesheets&&e.count===0&&ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jd===0&&(jd=62500*Ly());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var su=null;function ru(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,su=new Map,n.forEach($y,e),su=null,au.call(e))}function $y(e,n){if(!(n.state.loading&4)){var a=su.get(e);if(a)var o=a.get(null);else{a=new Map,su.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=au.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Nl={$$typeof:L,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function tM(e,n,a,o,u,f,v,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function V_(e,n,a,o,u,f,v,A,G,rt,mt,xt){return e=new tM(e,n,a,v,G,rt,mt,xt,A),n=1,f===!0&&(n|=24),f=Hi(3,null,null,n),e.current=f,f.stateNode=e,n=Rh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Uh(f),e}function k_(e){return e?(e=Wr,e):Wr}function X_(e,n,a,o,u,f){u=k_(u),o.context===null?o.context=u:o.pendingContext=u,o=Cs(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ws(e,o,n),a!==null&&(Ii(a,e,n),fl(a,e,n))}function W_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zd(e,n){W_(e,n),(e=e.alternate)&&W_(e,n)}function Y_(e){if(e.tag===13||e.tag===31){var n=lr(e,67108864);n!==null&&Ii(n,e,67108864),Zd(e,67108864)}}function q_(e){if(e.tag===13||e.tag===31){var n=Wi();n=Ss(n);var a=lr(e,n);a!==null&&Ii(a,e,n),Zd(e,n)}}var ou=!0;function eM(e,n,a,o){var u=N.T;N.T=null;var f=F.p;try{F.p=2,Kd(e,n,a,o)}finally{F.p=f,N.T=u}}function nM(e,n,a,o){var u=N.T;N.T=null;var f=F.p;try{F.p=8,Kd(e,n,a,o)}finally{F.p=f,N.T=u}}function Kd(e,n,a,o){if(ou){var u=Qd(o);if(u===null)Pd(e,n,o,lu,a),Z_(e,o);else if(aM(u,e,n,a,o))o.stopPropagation();else if(Z_(e,o),n&4&&-1<iM.indexOf(e)){for(;u!==null;){var f=Na(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Mt(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var G=1<<31-Nt(v);A.entanglements[1]|=G,v&=~G}Ba(f),(Ze&6)===0&&(Xc=E()+500,Rl(0))}}break;case 31:case 13:A=lr(f,2),A!==null&&Ii(A,f,2),Yc(),Zd(f,2)}if(f=Qd(o),f===null&&Pd(e,n,o,lu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Pd(e,n,o,null,a)}}function Qd(e){return e=Dt(e),Jd(e)}var lu=null;function Jd(e){if(lu=null,e=Ji(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lu=e,null}function j_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case gt:return 2;case yt:return 8;case pt:case Wt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var $d=!1,Hs=null,Gs=null,Vs=null,Ol=new Map,Il=new Map,ks=[],iM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z_(e,n){switch(e){case"focusin":case"focusout":Hs=null;break;case"dragenter":case"dragleave":Gs=null;break;case"mouseover":case"mouseout":Vs=null;break;case"pointerover":case"pointerout":Ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(n.pointerId)}}function Pl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&Y_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function aM(e,n,a,o,u){switch(n){case"focusin":return Hs=Pl(Hs,e,n,a,o,u),!0;case"dragenter":return Gs=Pl(Gs,e,n,a,o,u),!0;case"mouseover":return Vs=Pl(Vs,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ol.set(f,Pl(Ol.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Il.set(f,Pl(Il.get(f)||null,e,n,a,o,u)),!0}return!1}function K_(e){var n=Ji(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ms(e.priority,function(){q_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ms(e.priority,function(){q_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Hr=o,a.target.dispatchEvent(o),Hr=null}else return n=Na(a),n!==null&&Y_(n),e.blockedOn=a,!1;n.shift()}return!0}function Q_(e,n,a){cu(e)&&a.delete(n)}function sM(){$d=!1,Hs!==null&&cu(Hs)&&(Hs=null),Gs!==null&&cu(Gs)&&(Gs=null),Vs!==null&&cu(Vs)&&(Vs=null),Ol.forEach(Q_),Il.forEach(Q_)}function uu(e,n){e.blockedOn===n&&(e.blockedOn=null,$d||($d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sM)))}var fu=null;function J_(e){fu!==e&&(fu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fu===e&&(fu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Jd(o||a)===null)continue;break}var f=Na(a);f!==null&&(e.splice(n,3),n-=3,Qh(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function go(e){function n(G){return uu(G,e)}Hs!==null&&uu(Hs,e),Gs!==null&&uu(Gs,e),Vs!==null&&uu(Vs,e),Ol.forEach(n),Il.forEach(n);for(var a=0;a<ks.length;a++){var o=ks[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ks.length&&(a=ks[0],a.blockedOn===null);)K_(a),a.blockedOn===null&&ks.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[hn]||null;if(typeof f=="function")v||J_(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[hn]||null)A=v.formAction;else if(Jd(u)!==null)continue}else A=v.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),J_(a)}}}function $_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function tp(e){this._internalRoot=e}hu.prototype.render=tp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Wi();X_(a,o,e,n,null,null)},hu.prototype.unmount=tp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;X_(e.current,2,null,e,null,null),Yc(),n[Ki]=null}};function hu(e){this._internalRoot=e}hu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ks.length&&n!==0&&n<ks[a].priority;a++);ks.splice(a,0,e),a===0&&K_(e)}};var tv=t.version;if(tv!=="19.2.4")throw Error(s(527,tv,"19.2.4"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var rM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{Tt=du.inject(rM),St=du}catch{}}return Bl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=og,f=lg,v=cg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=V_(e,1,!1,null,null,a,o,null,u,f,v,$_),e[Ki]=n.current,Id(e),new tp(n)},Bl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=og,v=lg,A=cg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=V_(e,1,!0,n,a??null,o,u,G,f,v,A,$_),n.context=k_(null),a=n.current,o=Wi(),o=Ss(o),u=Cs(o),u.callback=null,ws(a,u,o),a=o,n.current.lanes=a,ii(n,a),Ba(n),e[Ki]=n.current,Id(e),new hu(n)},Bl.version="19.2.4",Bl}var uv;function gM(){if(uv)return ip.exports;uv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ip.exports=mM(),ip.exports}var _M=gM();const Bf="183",cx=0,Vp=1,ux=2,Fo=1,fx=2,Oo=3,xs=0,_i=1,Vn=2,ka=0,Ur=1,kp=2,Xp=3,Wp=4,hx=5,Js=100,dx=101,px=102,mx=103,gx=104,_x=200,vx=201,xx=202,Sx=203,qu=204,ju=205,yx=206,Mx=207,Ex=208,Tx=209,bx=210,Ax=211,Rx=212,Cx=213,wx=214,Zu=0,Ku=1,Qu=2,Lr=3,Ju=4,$u=5,tf=6,ef=7,zf=0,Dx=1,Ux=2,Ca=0,im=1,am=2,sm=3,Hf=4,rm=5,om=6,lm=7,cm=300,er=301,Nr=302,Gu=303,Vu=304,cc=306,zo=1e3,Va=1001,nf=1002,ti=1003,Lx=1004,Kl=1005,ei=1006,ku=1007,_s=1008,Pi=1009,um=1010,fm=1011,Ho=1012,Gf=1013,Da=1014,ha=1015,Xa=1016,Vf=1017,kf=1018,Go=1020,hm=35902,dm=35899,pm=1021,mm=1022,da=1023,Wa=1026,$s=1027,Xf=1028,Wf=1029,Or=1030,Yf=1031,qf=1033,Jl=33776,$l=33777,tc=33778,ec=33779,af=35840,sf=35841,rf=35842,of=35843,lf=36196,cf=37492,uf=37496,ff=37488,hf=37489,df=37490,pf=37491,mf=37808,gf=37809,_f=37810,vf=37811,xf=37812,Sf=37813,yf=37814,Mf=37815,Ef=37816,Tf=37817,bf=37818,Af=37819,Rf=37820,Cf=37821,wf=36492,Df=36494,Uf=36495,Lf=36283,Nf=36284,Of=36285,If=36286,Nx=3200,jf=0,Ox=1,ms="",Yn="srgb",Ir="srgb-linear",sc="linear",Je="srgb",Cr=7680,Yp=519,Ix=512,Px=513,Fx=514,Zf=515,Bx=516,zx=517,Kf=518,Hx=519,qp=35044,jp="300 es",Ra=2e3,Vo=2001;function vM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Pf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gx(){const r=Pf("canvas");return r.style.display="block",r}const fv={};function Zp(...r){const t="THREE."+r.shift();console.log(t,...r)}function Vx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function fe(...r){r=Vx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ve(...r){r=Vx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function rc(...r){const t=r.join(" ");t in fv||(fv[t]=!0,fe(...r))}function xM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const SM={[Zu]:Ku,[Qu]:tf,[Ju]:ef,[Lr]:$u,[Ku]:Zu,[tf]:Qu,[ef]:Ju,[$u]:Lr};class Pr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hv=1234567;const nc=Math.PI/180,ko=180/Math.PI;function Yo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(mi[r&255]+mi[r>>8&255]+mi[r>>16&255]+mi[r>>24&255]+"-"+mi[t&255]+mi[t>>8&255]+"-"+mi[t>>16&15|64]+mi[t>>24&255]+"-"+mi[i&63|128]+mi[i>>8&255]+"-"+mi[i>>16&255]+mi[i>>24&255]+mi[s&255]+mi[s>>8&255]+mi[s>>16&255]+mi[s>>24&255]).toLowerCase()}function Re(r,t,i){return Math.max(t,Math.min(i,r))}function gm(r,t){return(r%t+t)%t}function yM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function MM(r,t,i){return r!==t?(i-r)/(t-r):0}function ic(r,t,i){return(1-i)*r+i*t}function EM(r,t,i,s){return ic(r,t,1-Math.exp(-i*s))}function TM(r,t=1){return t-Math.abs(gm(r,t*2)-t)}function bM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function AM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function RM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function CM(r,t){return r+Math.random()*(t-r)}function wM(r){return r*(.5-Math.random())}function DM(r){r!==void 0&&(hv=r);let t=hv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function UM(r){return r*nc}function LM(r){return r*ko}function NM(r){return(r&r-1)===0&&r!==0}function OM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function IM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function PM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),_=h((t+s)/2),x=c((t-s)/2),g=h((t-s)/2),y=c((s-t)/2),T=h((s-t)/2);switch(l){case"XYX":r.set(d*_,m*x,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*x,d*p);break;case"ZXZ":r.set(m*x,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*T,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*T,d*p);break;case"ZYZ":r.set(m*T,m*y,d*_,d*p);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function No(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ei={DEG2RAD:nc,RAD2DEG:ko,generateUUID:Yo,clamp:Re,euclideanModulo:gm,mapLinear:yM,inverseLerp:MM,lerp:ic,damp:EM,pingpong:TM,smoothstep:bM,smootherstep:AM,randInt:RM,randFloat:CM,randFloatSpread:wM,seededRandom:DM,degToRad:UM,radToDeg:LM,isPowerOfTwo:NM,ceilPowerOfTwo:OM,floorPowerOfTwo:IM,setQuaternionFromProperEuler:PM,normalize:Mi,denormalize:No};class we{constructor(t=0,i=0){we.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],y=c[h+1],T=c[h+2],U=c[h+3];if(x!==U||m!==g||p!==y||_!==T){let M=m*g+p*y+_*T+x*U;M<0&&(g=-g,y=-y,T=-T,U=-U,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);S=Math.sin(S*C)/L,d=Math.sin(d*C)/L,m=m*S+g*d,p=p*S+y*d,_=_*S+T*d,x=x*S+U*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+T*d,x=x*S+U*d;const C=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=C,p*=C,_*=C,x*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[h],g=c[h+1],y=c[h+2],T=c[h+3];return t[i]=d*T+_*x+m*y-p*g,t[i+1]=m*T+_*g+p*x-d*y,t[i+2]=p*T+_*y+d*g-m*x,t[i+3]=_*T-d*x-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*_*x+p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x-g*y*T;break;case"YXZ":this._x=g*_*x+p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x+g*y*T;break;case"ZXY":this._x=g*_*x-p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x-g*y*T;break;case"ZYX":this._x=g*_*x-p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x+g*y*T;break;case"YZX":this._x=g*_*x+p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x-g*y*T;break;case"XZY":this._x=g*_*x-p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x+g*y*T;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],g=s+d+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>x){const y=2*Math.sqrt(1+s-d-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-s-x);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(dv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(dv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return op.copy(this).projectOnVector(t),this.sub(op)}reflect(t){return this.sub(op.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const op=new Q,dv=new Fr;class ve{constructor(t,i,s,l,c,h,d,m,p){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],y=s[5],T=s[8],U=l[0],M=l[3],S=l[6],C=l[1],L=l[4],D=l[7],B=l[2],z=l[5],H=l[8];return c[0]=h*U+d*C+m*B,c[3]=h*M+d*L+m*z,c[6]=h*S+d*D+m*H,c[1]=p*U+_*C+x*B,c[4]=p*M+_*L+x*z,c[7]=p*S+_*D+x*H,c[2]=g*U+y*C+T*B,c[5]=g*M+y*L+T*z,c[8]=g*S+y*D+T*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,g=d*m-_*c,y=p*c-h*m,T=i*x+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/T;return t[0]=x*U,t[1]=(l*p-_*s)*U,t[2]=(d*s-l*h)*U,t[3]=g*U,t[4]=(_*i-l*m)*U,t[5]=(l*c-d*i)*U,t[6]=y*U,t[7]=(s*m-p*i)*U,t[8]=(h*i-s*c)*U,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(lp.makeScale(t,i)),this}rotate(t){return this.premultiply(lp.makeRotation(-t)),this}translate(t,i){return this.premultiply(lp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lp=new ve,pv=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FM(){const r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Je&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Je&&(l.r=Bo(l.r),l.g=Bo(l.g),l.b=Bo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?sc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ir]:{primaries:t,whitePoint:s,transfer:sc,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:s,transfer:Je,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),r}const ke=FM();function vs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _o;class kx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{_o===void 0&&(_o=Pf("canvas")),_o.width=t.width,_o.height=t.height;const l=_o.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=_o}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=vs(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(vs(i[s]/255)*255):i[s]=vs(i[s]);return{data:i,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BM=0;class Qf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(cp(l[h].image)):c.push(cp(l[h]))}else c=cp(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function cp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let zM=0;const up=new Q;class ui extends Pr{constructor(t=ui.DEFAULT_IMAGE,i=ui.DEFAULT_MAPPING,s=Va,l=Va,c=ei,h=_s,d=da,m=Pi,p=ui.DEFAULT_ANISOTROPY,_=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Yo(),this.name="",this.source=new Qf(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(up).x}get height(){return this.source.getSize(up).y}get depth(){return this.source.getSize(up).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zo:t.x=t.x-Math.floor(t.x);break;case Va:t.x=t.x<0?0:1;break;case nf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zo:t.y=t.y-Math.floor(t.y);break;case Va:t.y=t.y<0?0:1;break;case nf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=cm;ui.DEFAULT_ANISOTROPY=1;class bn{constructor(t=0,i=0,s=0,l=1){bn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],g=m[1],y=m[5],T=m[9],U=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-U)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+U)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(y+1)/2,B=(S+1)/2,z=(_+g)/4,H=(x+U)/4,b=(T+M)/4;return L>D&&L>B?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=z/s,c=H/s):D>B?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=z/l,c=b/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=H/c,l=b/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-T)*(M-T)+(x-U)*(x-U)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(x-U)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this.w=Re(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this.w=Re(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xx extends Pr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new bn(0,0,t,i),this.scissorTest=!1,this.viewport=new bn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ui(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Qf(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wa extends Xx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class _m extends ui{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wx extends ui{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(t,i,s,l,c,h,d,m,p,_,x,g,y,T,U,M){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,x,g,y,T,U,M)}set(t,i,s,l,c,h,d,m,p,_,x,g,y,T,U,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=x,S[14]=g,S[3]=y,S[7]=T,S[11]=U,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/vo.setFromMatrixColumn(t,0).length(),c=1/vo.setFromMatrixColumn(t,1).length(),h=1/vo.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*x,T=d*_,U=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+T*p,i[5]=g-U*p,i[9]=-d*m,i[2]=U-g*p,i[6]=T+y*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*x,T=p*_,U=p*x;i[0]=g+U*d,i[4]=T*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=y*d-T,i[6]=U+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*x,T=p*_,U=p*x;i[0]=g-U*d,i[4]=-h*x,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*_,i[9]=U-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*x,T=d*_,U=d*x;i[0]=m*_,i[4]=T*p-y,i[8]=g*p+U,i[1]=m*x,i[5]=U*p+g,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*p,T=d*m,U=d*p;i[0]=m*_,i[4]=U-g*x,i[8]=T*x+y,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*x+T,i[10]=g-U*x}else if(t.order==="XZY"){const g=h*m,y=h*p,T=d*m,U=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=g*x+U,i[5]=h*_,i[9]=y*x-T,i[2]=T*x-y,i[6]=d*_,i[10]=U*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(HM,t,GM)}lookAt(t,i,s){const l=this.elements;return Yi.subVectors(t,i),Yi.lengthSq()===0&&(Yi.z=1),Yi.normalize(),Ws.crossVectors(s,Yi),Ws.lengthSq()===0&&(Math.abs(s.z)===1?Yi.x+=1e-4:Yi.z+=1e-4,Yi.normalize(),Ws.crossVectors(s,Yi)),Ws.normalize(),pu.crossVectors(Yi,Ws),l[0]=Ws.x,l[4]=pu.x,l[8]=Yi.x,l[1]=Ws.y,l[5]=pu.y,l[9]=Yi.y,l[2]=Ws.z,l[6]=pu.z,l[10]=Yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],y=s[13],T=s[2],U=s[6],M=s[10],S=s[14],C=s[3],L=s[7],D=s[11],B=s[15],z=l[0],H=l[4],b=l[8],w=l[12],J=l[1],P=l[5],q=l[9],nt=l[13],it=l[2],Z=l[6],N=l[10],F=l[14],tt=l[3],ft=l[7],_t=l[11],I=l[15];return c[0]=h*z+d*J+m*it+p*tt,c[4]=h*H+d*P+m*Z+p*ft,c[8]=h*b+d*q+m*N+p*_t,c[12]=h*w+d*nt+m*F+p*I,c[1]=_*z+x*J+g*it+y*tt,c[5]=_*H+x*P+g*Z+y*ft,c[9]=_*b+x*q+g*N+y*_t,c[13]=_*w+x*nt+g*F+y*I,c[2]=T*z+U*J+M*it+S*tt,c[6]=T*H+U*P+M*Z+S*ft,c[10]=T*b+U*q+M*N+S*_t,c[14]=T*w+U*nt+M*F+S*I,c[3]=C*z+L*J+D*it+B*tt,c[7]=C*H+L*P+D*Z+B*ft,c[11]=C*b+L*q+D*N+B*_t,c[15]=C*w+L*nt+D*F+B*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],g=t[10],y=t[14],T=t[3],U=t[7],M=t[11],S=t[15],C=m*y-p*g,L=d*y-p*x,D=d*g-m*x,B=h*y-p*_,z=h*g-m*_,H=h*x-d*_;return i*(U*C-M*L+S*D)-s*(T*C-M*B+S*z)+l*(T*L-U*B+S*H)-c*(T*D-U*z+M*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],g=t[10],y=t[11],T=t[12],U=t[13],M=t[14],S=t[15],C=i*d-s*h,L=i*m-l*h,D=i*p-c*h,B=s*m-l*d,z=s*p-c*d,H=l*p-c*m,b=_*U-x*T,w=_*M-g*T,J=_*S-y*T,P=x*M-g*U,q=x*S-y*U,nt=g*S-y*M,it=C*nt-L*q+D*P+B*J-z*w+H*b;if(it===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/it;return t[0]=(d*nt-m*q+p*P)*Z,t[1]=(l*q-s*nt-c*P)*Z,t[2]=(U*H-M*z+S*B)*Z,t[3]=(g*z-x*H-y*B)*Z,t[4]=(m*J-h*nt-p*w)*Z,t[5]=(i*nt-l*J+c*w)*Z,t[6]=(M*D-T*H-S*L)*Z,t[7]=(_*H-g*D+y*L)*Z,t[8]=(h*q-d*J+p*b)*Z,t[9]=(s*J-i*q-c*b)*Z,t[10]=(T*z-U*D+S*C)*Z,t[11]=(x*D-_*z-y*C)*Z,t[12]=(d*w-h*P-m*b)*Z,t[13]=(i*P-s*w+l*b)*Z,t[14]=(U*L-T*B-M*C)*Z,t[15]=(_*B-x*L+g*C)*Z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,g=c*p,y=c*_,T=c*x,U=h*_,M=h*x,S=d*x,C=m*p,L=m*_,D=m*x,B=s.x,z=s.y,H=s.z;return l[0]=(1-(U+S))*B,l[1]=(y+D)*B,l[2]=(T-L)*B,l[3]=0,l[4]=(y-D)*z,l[5]=(1-(g+S))*z,l[6]=(M+C)*z,l[7]=0,l[8]=(T+L)*H,l[9]=(M-C)*H,l[10]=(1-(g+U))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=vo.set(l[0],l[1],l[2]).length();const d=vo.set(l[4],l[5],l[6]).length(),m=vo.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ea.copy(this);const p=1/h,_=1/d,x=1/m;return Ea.elements[0]*=p,Ea.elements[1]*=p,Ea.elements[2]*=p,Ea.elements[4]*=_,Ea.elements[5]*=_,Ea.elements[6]*=_,Ea.elements[8]*=x,Ea.elements[9]*=x,Ea.elements[10]*=x,i.setFromRotationMatrix(Ea),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=Ra,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let T,U;if(m)T=c/(h-c),U=h*c/(h-c);else if(d===Ra)T=-(h+c)/(h-c),U=-2*h*c/(h-c);else if(d===Vo)T=-h/(h-c),U=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=U,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ra,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,U;if(m)T=1/(h-c),U=h/(h-c);else if(d===Ra)T=-2/(h-c),U=-(h+c)/(h-c);else if(d===Vo)T=-1/(h-c),U=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=U,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const vo=new Q,Ea=new on,HM=new Q(0,0,0),GM=new Q(1,1,1),Ws=new Q,pu=new Q,Yi=new Q,gv=new on,_v=new Fr;class ma{constructor(t=0,i=0,s=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return gv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return _v.setFromEuler(this),this.setFromQuaternion(_v,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class Jf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let VM=0;const vv=new Q,xo=new Fr,cs=new on,mu=new Q,zl=new Q,kM=new Q,XM=new Fr,xv=new Q(1,0,0),Sv=new Q(0,1,0),yv=new Q(0,0,1),Mv={type:"added"},WM={type:"removed"},So={type:"childadded",child:null},fp={type:"childremoved",child:null};class un extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const t=new Q,i=new ma,s=new Fr,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ve}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xo.setFromAxisAngle(t,i),this.quaternion.multiply(xo),this}rotateOnWorldAxis(t,i){return xo.setFromAxisAngle(t,i),this.quaternion.premultiply(xo),this}rotateX(t){return this.rotateOnAxis(xv,t)}rotateY(t){return this.rotateOnAxis(Sv,t)}rotateZ(t){return this.rotateOnAxis(yv,t)}translateOnAxis(t,i){return vv.copy(t).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(xv,t)}translateY(t){return this.translateOnAxis(Sv,t)}translateZ(t){return this.translateOnAxis(yv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cs.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?mu.copy(t):mu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cs.lookAt(zl,mu,this.up):cs.lookAt(mu,zl,this.up),this.quaternion.setFromRotationMatrix(cs),l&&(cs.extractRotation(l.matrixWorld),xo.setFromRotationMatrix(cs),this.quaternion.premultiply(xo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mv),So.child=t,this.dispatchEvent(So),So.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WM),fp.child=t,this.dispatchEvent(fp),fp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cs.multiply(t.parent.matrixWorld)),t.applyMatrix4(cs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mv),So.child=t,this.dispatchEvent(So),So.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,t,kM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,XM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}un.DEFAULT_UP=new Q(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Io extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const U of t.hand.values()){const M=i.getJointPose(U,s),S=this._getHandJoint(p,U);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,T=.005;p.inputState.pinching&&g>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Io;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},gu={h:0,s:0,l:0};function hp(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ke.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=ke.workingColorSpace){return this.r=t,this.g=i,this.b=s,ke.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=ke.workingColorSpace){if(t=gm(t,1),i=Re(i,0,1),s=Re(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=hp(h,c,t+1/3),this.g=hp(h,c,t),this.b=hp(h,c,t-1/3)}return ke.colorSpaceToWorking(this,l),this}setStyle(t,i=Yn){function s(c){c!==void 0&&parseFloat(c)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:fe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yn){const s=Yx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return ke.workingToColorSpace(gi.copy(this),t),Math.round(Re(gi.r*255,0,255))*65536+Math.round(Re(gi.g*255,0,255))*256+Math.round(Re(gi.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ke.workingColorSpace){ke.workingToColorSpace(gi.copy(this),i);const s=gi.r,l=gi.g,c=gi.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=ke.workingColorSpace){return ke.workingToColorSpace(gi.copy(this),i),t.r=gi.r,t.g=gi.g,t.b=gi.b,t}getStyle(t=Yn){ke.workingToColorSpace(gi.copy(this),t);const i=gi.r,s=gi.g,l=gi.b;return t!==Yn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ys),this.setHSL(Ys.h+t,Ys.s+i,Ys.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ys),t.getHSL(gu);const s=ic(Ys.h,gu.h,i),l=ic(Ys.s,gu.s,i),c=ic(Ys.l,gu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gi=new re;re.NAMES=Yx;class oc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=i,this.far=s}clone(){return new oc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vm extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ta=new Q,us=new Q,dp=new Q,fs=new Q,yo=new Q,Mo=new Q,Ev=new Q,pp=new Q,mp=new Q,gp=new Q,_p=new bn,vp=new bn,xp=new bn;class fa{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ta.subVectors(t,i),l.cross(Ta);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ta.subVectors(l,i),us.subVectors(s,i),dp.subVectors(t,i);const h=Ta.dot(Ta),d=Ta.dot(us),m=Ta.dot(dp),p=us.dot(us),_=us.dot(dp),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(p*m-d*_)*g,T=(h*_-d*m)*g;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,fs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,fs.x),m.addScaledVector(h,fs.y),m.addScaledVector(d,fs.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return _p.setScalar(0),vp.setScalar(0),xp.setScalar(0),_p.fromBufferAttribute(t,i),vp.fromBufferAttribute(t,s),xp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(_p,c.x),h.addScaledVector(vp,c.y),h.addScaledVector(xp,c.z),h}static isFrontFacing(t,i,s,l){return Ta.subVectors(s,i),us.subVectors(t,i),Ta.cross(us).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ta.subVectors(this.c,this.b),us.subVectors(this.a,this.b),Ta.cross(us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return fa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return fa.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return fa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;yo.subVectors(l,s),Mo.subVectors(c,s),pp.subVectors(t,s);const m=yo.dot(pp),p=Mo.dot(pp);if(m<=0&&p<=0)return i.copy(s);mp.subVectors(t,l);const _=yo.dot(mp),x=Mo.dot(mp);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(yo,h);gp.subVectors(t,c);const y=yo.dot(gp),T=Mo.dot(gp);if(T>=0&&y<=T)return i.copy(c);const U=y*p-m*T;if(U<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(Mo,d);const M=_*T-y*x;if(M<=0&&x-_>=0&&y-T>=0)return Ev.subVectors(c,l),d=(x-_)/(x-_+(y-T)),i.copy(l).addScaledVector(Ev,d);const S=1/(M+U+g);return h=U*S,d=g*S,i.copy(s).addScaledVector(yo,h).addScaledVector(Mo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class nr{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ba.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ba.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ba.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,ba):ba.fromBufferAttribute(c,h),ba.applyMatrix4(t.matrixWorld),this.expandByPoint(ba);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_u.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_u.copy(s.boundingBox)),_u.applyMatrix4(t.matrixWorld),this.union(_u)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ba),ba.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hl),vu.subVectors(this.max,Hl),Eo.subVectors(t.a,Hl),To.subVectors(t.b,Hl),bo.subVectors(t.c,Hl),qs.subVectors(To,Eo),js.subVectors(bo,To),yr.subVectors(Eo,bo);let i=[0,-qs.z,qs.y,0,-js.z,js.y,0,-yr.z,yr.y,qs.z,0,-qs.x,js.z,0,-js.x,yr.z,0,-yr.x,-qs.y,qs.x,0,-js.y,js.x,0,-yr.y,yr.x,0];return!Sp(i,Eo,To,bo,vu)||(i=[1,0,0,0,1,0,0,0,1],!Sp(i,Eo,To,bo,vu))?!1:(xu.crossVectors(qs,js),i=[xu.x,xu.y,xu.z],Sp(i,Eo,To,bo,vu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ba).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ba).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const hs=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ba=new Q,_u=new nr,Eo=new Q,To=new Q,bo=new Q,qs=new Q,js=new Q,yr=new Q,Hl=new Q,vu=new Q,xu=new Q,Mr=new Q;function Sp(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Mr.fromArray(r,c);const d=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=t.dot(Mr),p=i.dot(Mr),_=s.dot(Mr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Gn=new Q,Su=new we;let qM=0;class pa{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=qp,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Su.fromBufferAttribute(this,i),Su.applyMatrix3(t),this.setXY(i,Su.x,Su.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix3(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Mi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(t,i){return this.normalized&&(i=Mi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(t,i){return this.normalized&&(i=Mi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Mi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(t,i){return this.normalized&&(i=Mi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Mi(i,this.array),s=Mi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Mi(i,this.array),s=Mi(s,this.array),l=Mi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Mi(i,this.array),s=Mi(s,this.array),l=Mi(l,this.array),c=Mi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qp&&(t.usage=this.usage),t}}class xm extends pa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Sm extends pa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ni extends pa{constructor(t,i,s){super(new Float32Array(t),i,s)}}const jM=new nr,Gl=new Q,yp=new Q;class qo{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):jM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gl.subVectors(t,this.center);const i=Gl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Gl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gl.copy(t.center).add(yp)),this.expandByPoint(Gl.copy(t.center).sub(yp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ZM=0;const ca=new on,Mp=new un,Ao=new Q,qi=new nr,Vl=new nr,$n=new Q;class ji extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vM(t)?Sm:xm)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ve().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ca.makeRotationFromQuaternion(t),this.applyMatrix4(ca),this}rotateX(t){return ca.makeRotationX(t),this.applyMatrix4(ca),this}rotateY(t){return ca.makeRotationY(t),this.applyMatrix4(ca),this}rotateZ(t){return ca.makeRotationZ(t),this.applyMatrix4(ca),this}translate(t,i,s){return ca.makeTranslation(t,i,s),this.applyMatrix4(ca),this}scale(t,i,s){return ca.makeScale(t,i,s),this.applyMatrix4(ca),this}lookAt(t){return Mp.lookAt(t),Mp.updateMatrix(),this.applyMatrix4(Mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ni(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];qi.setFromBufferAttribute(c),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,qi.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,qi.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(qi.min),this.boundingBox.expandByPoint(qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(qi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Vl.setFromBufferAttribute(d),this.morphTargetsRelative?($n.addVectors(qi.min,Vl.min),qi.expandByPoint($n),$n.addVectors(qi.max,Vl.max),qi.expandByPoint($n)):(qi.expandByPoint(Vl.min),qi.expandByPoint(Vl.max))}qi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)$n.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared($n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)$n.fromBufferAttribute(d,p),m&&(Ao.fromBufferAttribute(t,p),$n.add(Ao)),l=Math.max(l,s.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pa(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let b=0;b<s.count;b++)d[b]=new Q,m[b]=new Q;const p=new Q,_=new Q,x=new Q,g=new we,y=new we,T=new we,U=new Q,M=new Q;function S(b,w,J){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,w),x.fromBufferAttribute(s,J),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,w),T.fromBufferAttribute(c,J),_.sub(p),x.sub(p),y.sub(g),T.sub(g);const P=1/(y.x*T.y-T.x*y.y);isFinite(P)&&(U.copy(_).multiplyScalar(T.y).addScaledVector(x,-y.y).multiplyScalar(P),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(P),d[b].add(U),d[w].add(U),d[J].add(U),m[b].add(M),m[w].add(M),m[J].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let b=0,w=C.length;b<w;++b){const J=C[b],P=J.start,q=J.count;for(let nt=P,it=P+q;nt<it;nt+=3)S(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const L=new Q,D=new Q,B=new Q,z=new Q;function H(b){B.fromBufferAttribute(l,b),z.copy(B);const w=d[b];L.copy(w),L.sub(B.multiplyScalar(B.dot(w))).normalize(),D.crossVectors(z,w);const P=D.dot(m[b])<0?-1:1;h.setXYZW(b,L.x,L.y,L.z,P)}for(let b=0,w=C.length;b<w;++b){const J=C[b],P=J.start,q=J.count;for(let nt=P,it=P+q;nt<it;nt+=3)H(t.getX(nt+0)),H(t.getX(nt+1)),H(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new Q,c=new Q,h=new Q,d=new Q,m=new Q,p=new Q,_=new Q,x=new Q;if(t)for(let g=0,y=t.count;g<y;g+=3){const T=t.getX(g+0),U=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)$n.fromBufferAttribute(t,i),$n.normalize(),t.setXYZ(i,$n.x,$n.y,$n.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,g=new p.constructor(m.length*_);let y=0,T=0;for(let U=0,M=m.length;U<M;U++){d.isInterleavedBufferAttribute?y=m[U]*d.data.stride+d.offset:y=m[U]*_;for(let S=0;S<_;S++)g[T++]=p[y++]}return new pa(g,_,x)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ji,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const y=p[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KM=0;class Br extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Ur,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=ju,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){fe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(s.blending=this.blending),this.side!==xs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==qu&&(s.blendSrc=this.blendSrc),this.blendDst!==ju&&(s.blendDst=this.blendDst),this.blendEquation!==Js&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ds=new Q,Ep=new Q,yu=new Q,Zs=new Q,Tp=new Q,Mu=new Q,bp=new Q;class ym{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ds)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ds.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ds.copy(this.origin).addScaledVector(this.direction,i),ds.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ep.copy(t).add(i).multiplyScalar(.5),yu.copy(i).sub(t).normalize(),Zs.copy(this.origin).sub(Ep);const c=t.distanceTo(i)*.5,h=-this.direction.dot(yu),d=Zs.dot(this.direction),m=-Zs.dot(yu),p=Zs.lengthSq(),_=Math.abs(1-h*h);let x,g,y,T;if(_>0)if(x=h*m-d,g=h*d-m,T=c*_,x>=0)if(g>=-T)if(g<=T){const U=1/_;x*=U,g*=U,y=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g<=-T?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ep).addScaledVector(yu,g),y}intersectSphere(t,i){ds.subVectors(t.center,this.origin);const s=ds.dot(this.direction),l=ds.dot(ds)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ds)!==null}intersectTriangle(t,i,s,l,c){Tp.subVectors(i,t),Mu.subVectors(s,t),bp.crossVectors(Tp,Mu);let h=this.direction.dot(bp),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Zs.subVectors(this.origin,t);const m=d*this.direction.dot(Mu.crossVectors(Zs,Mu));if(m<0)return null;const p=d*this.direction.dot(Tp.cross(Zs));if(p<0||m+p>h)return null;const _=-d*Zs.dot(bp);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lc extends Br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tv=new on,Er=new ym,Eu=new qo,bv=new Q,Tu=new Q,bu=new Q,Au=new Q,Ap=new Q,Ru=new Q,Av=new Q,Cu=new Q;class Ge extends un{constructor(t=new ji,i=new lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ru.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Ap.fromBufferAttribute(x,t),h?Ru.addScaledVector(Ap,_):Ru.addScaledVector(Ap.sub(i),_))}i.add(Ru)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Eu.copy(s.boundingSphere),Eu.applyMatrix4(c),Er.copy(t.ray).recast(t.near),!(Eu.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Eu,bv)===null||Er.origin.distanceToSquared(bv)>(t.far-t.near)**2))&&(Tv.copy(c).invert(),Er.copy(t.ray).applyMatrix4(Tv),!(s.boundingBox!==null&&Er.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Er)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,U=g.length;T<U;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,B=L;D<B;D+=3){const z=d.getX(D),H=d.getX(D+1),b=d.getX(D+2);l=wu(this,S,t,s,p,_,x,z,H,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),U=Math.min(d.count,y.start+y.count);for(let M=T,S=U;M<S;M+=3){const C=d.getX(M),L=d.getX(M+1),D=d.getX(M+2);l=wu(this,h,t,s,p,_,x,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,U=g.length;T<U;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,B=L;D<B;D+=3){const z=D,H=D+1,b=D+2;l=wu(this,S,t,s,p,_,x,z,H,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),U=Math.min(m.count,y.start+y.count);for(let M=T,S=U;M<S;M+=3){const C=M,L=M+1,D=M+2;l=wu(this,h,t,s,p,_,x,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function QM(r,t,i,s,l,c,h,d){let m;if(t.side===_i?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===xs,d),m===null)return null;Cu.copy(d),Cu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Cu);return p<i.near||p>i.far?null:{distance:p,point:Cu.clone(),object:r}}function wu(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Tu),r.getVertexPosition(m,bu),r.getVertexPosition(p,Au);const _=QM(r,t,i,s,Tu,bu,Au,Av);if(_){const x=new Q;fa.getBarycoord(Av,Tu,bu,Au,x),l&&(_.uv=fa.getInterpolatedAttribute(l,d,m,p,x,new we)),c&&(_.uv1=fa.getInterpolatedAttribute(c,d,m,p,x,new we)),h&&(_.normal=fa.getInterpolatedAttribute(h,d,m,p,x,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new Q,materialIndex:0};fa.getNormal(Tu,bu,Au,g.normal),_.face=g,_.barycoord=x}return _}class Mm extends ui{constructor(t=null,i=1,s=1,l,c,h,d,m,p=ti,_=ti,x,g){super(null,h,d,m,p,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kp extends pa{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ro=new on,Rv=new on,Du=[],Cv=new nr,JM=new on,kl=new Ge,Xl=new qo;class qx extends Ge{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Kp(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,JM)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new nr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ro),Cv.copy(t.boundingBox).applyMatrix4(Ro),this.boundingBox.union(Cv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new qo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ro),Xl.copy(t.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Xl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(kl.geometry=this.geometry,kl.material=this.material,kl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xl.copy(this.boundingSphere),Xl.applyMatrix4(s),t.ray.intersectsSphere(Xl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ro),Rv.multiplyMatrices(s,Ro),kl.matrixWorld=Rv,kl.raycast(t,Du);for(let h=0,d=Du.length;h<d;h++){const m=Du[h];m.instanceId=c,m.object=this,i.push(m)}Du.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Kp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Mm(new Float32Array(l*this.count),l,this.count,Xf,ha));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Rp=new Q,$M=new Q,tE=new ve;class Qs{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Rp.subVectors(s,i).cross($M.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Rp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||tE.getNormalMatrix(t),l=this.coplanarPoint(Rp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new qo,eE=new we(.5,.5),Uu=new Q;class $f{constructor(t=new Qs,i=new Qs,s=new Qs,l=new Qs,c=new Qs,h=new Qs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ra,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],y=c[7],T=c[8],U=c[9],M=c[10],S=c[11],C=c[12],L=c[13],D=c[14],B=c[15];if(l[0].setComponents(p-h,y-_,S-T,B-C).normalize(),l[1].setComponents(p+h,y+_,S+T,B+C).normalize(),l[2].setComponents(p+d,y+x,S+U,B+L).normalize(),l[3].setComponents(p-d,y-x,S-U,B-L).normalize(),s)l[4].setComponents(m,g,M,D).normalize(),l[5].setComponents(p-m,y-g,S-M,B-D).normalize();else if(l[4].setComponents(p-m,y-g,S-M,B-D).normalize(),i===Ra)l[5].setComponents(p+m,y+g,S+M,B+D).normalize();else if(i===Vo)l[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){Tr.center.set(0,0,0);const i=eE.distanceTo(t.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uu.x=l.normal.x>0?t.max.x:t.min.x,Uu.y=l.normal.y>0?t.max.y:t.min.y,Uu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Em extends ui{constructor(t=[],i=er,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Po extends ui{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xo extends ui{constructor(t,i,s=Da,l,c,h,d=ti,m=ti,p,_=Wa,x=1){if(_!==Wa&&_!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qf(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jx extends Xo{constructor(t,i=Da,s=er,l,c,h=ti,d=ti,m,p=Wa){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Tm extends ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ir extends ji{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ni(p,3)),this.setAttribute("normal",new ni(_,3)),this.setAttribute("uv",new ni(x,2));function T(U,M,S,C,L,D,B,z,H,b,w){const J=D/H,P=B/b,q=D/2,nt=B/2,it=z/2,Z=H+1,N=b+1;let F=0,tt=0;const ft=new Q;for(let _t=0;_t<N;_t++){const I=_t*P-nt;for(let W=0;W<Z;W++){const ht=W*J-q;ft[U]=ht*C,ft[M]=I*L,ft[S]=it,p.push(ft.x,ft.y,ft.z),ft[U]=0,ft[M]=0,ft[S]=z>0?1:-1,_.push(ft.x,ft.y,ft.z),x.push(W/H),x.push(1-_t/b),F+=1}}for(let _t=0;_t<b;_t++)for(let I=0;I<H;I++){const W=g+I+Z*_t,ht=g+I+Z*(_t+1),Et=g+(I+1)+Z*(_t+1),Ot=g+(I+1)+Z*_t;m.push(W,ht,Ot),m.push(ht,Et,Ot),tt+=6}d.addGroup(y,tt,w),y+=tt,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zx{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(h-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new we:new Q);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Q,l=[],c=[],h=[],d=new Q,m=new on;for(let y=0;y<=t;y++){const T=y/t;l[y]=this.getTangentAt(T,new Q)}c[0]=new Q,h[0]=new Q;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Re(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,T))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Re(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],y*T)),h[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function bm(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,_,x){let g=(h-c)/p-(d-c)/(p+_)+(d-h)/_,y=(d-h)/_-(m-h)/(_+x)+(m-d)/x;g*=_,y*=_,l(h,d,g,y)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const Lu=new Q,Cp=new bm,wp=new bm,Dp=new bm;class Kx extends Zx{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new Q){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(Lu.subVectors(l[0],l[1]).add(l[0]),p=Lu);const x=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(Lu.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Lu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(x),y),U=Math.pow(x.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);U<1e-4&&(U=1),T<1e-4&&(T=U),M<1e-4&&(M=U),Cp.initNonuniformCatmullRom(p.x,x.x,g.x,_.x,T,U,M),wp.initNonuniformCatmullRom(p.y,x.y,g.y,_.y,T,U,M),Dp.initNonuniformCatmullRom(p.z,x.z,g.z,_.z,T,U,M)}else this.curveType==="catmullrom"&&(Cp.initCatmullRom(p.x,x.x,g.x,_.x,this.tension),wp.initCatmullRom(p.y,x.y,g.y,_.y,this.tension),Dp.initCatmullRom(p.z,x.z,g.z,_.z,this.tension));return s.set(Cp.calc(m),wp.calc(m),Dp.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ga extends ji{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,g=i/m,y=[],T=[],U=[],M=[];for(let S=0;S<_;S++){const C=S*g-h;for(let L=0;L<p;L++){const D=L*x-c;T.push(D,-C,0),U.push(0,0,1),M.push(L/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<d;C++){const L=C+p*S,D=C+p*(S+1),B=C+1+p*(S+1),z=C+1+p*S;y.push(L,D,z),y.push(D,B,z)}this.setIndex(y),this.setAttribute("position",new ni(T,3)),this.setAttribute("normal",new ni(U,3)),this.setAttribute("uv",new ni(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}class th extends ji{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let x=t;const g=(i-t)/l,y=new Q,T=new we;for(let U=0;U<=l;U++){for(let M=0;M<=s;M++){const S=c+M/s*h;y.x=x*Math.cos(S),y.y=x*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),T.x=(y.x/i+1)/2,T.y=(y.y/i+1)/2,_.push(T.x,T.y)}x+=g}for(let U=0;U<l;U++){const M=U*(s+1);for(let S=0;S<s;S++){const C=S+M,L=C,D=C+s+1,B=C+s+2,z=C+1;d.push(L,D,z),d.push(D,B,z)}}this.setIndex(d),this.setAttribute("position",new ni(m,3)),this.setAttribute("normal",new ni(p,3)),this.setAttribute("uv",new ni(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new th(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class eh extends ji{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],x=new Q,g=new Q,y=[],T=[],U=[],M=[];for(let S=0;S<=s;S++){const C=[],L=S/s;let D=0;S===0&&h===0?D=.5/i:S===s&&m===Math.PI&&(D=-.5/i);for(let B=0;B<=i;B++){const z=B/i;x.x=-t*Math.cos(l+z*c)*Math.sin(h+L*d),x.y=t*Math.cos(h+L*d),x.z=t*Math.sin(l+z*c)*Math.sin(h+L*d),T.push(x.x,x.y,x.z),g.copy(x).normalize(),U.push(g.x,g.y,g.z),M.push(z+D,1-L),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const L=_[S][C+1],D=_[S][C],B=_[S+1][C],z=_[S+1][C+1];(S!==0||h>0)&&y.push(L,D,z),(S!==s-1||m<Math.PI)&&y.push(D,B,z)}this.setIndex(y),this.setAttribute("position",new ni(T,3)),this.setAttribute("normal",new ni(U,3)),this.setAttribute("uv",new ni(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Wo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ti(r){const t={};for(let i=0;i<r.length;i++){const s=Wo(r[i]);for(const l in s)t[l]=s[l]}return t}function nE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Qx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ke.workingColorSpace}const Jx={clone:Wo,merge:Ti};var iE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ua extends Br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iE,this.fragmentShader=aE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wo(t.uniforms),this.uniformsGroups=nE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class $x extends Ua{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gs extends Br{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jf,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wr extends gs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class tS extends Br{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jf,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=zf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eS extends Br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nS extends Br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jo extends un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class iS extends jo{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Up=new on,wv=new Q,Dv=new Q;class Am{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $f,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;wv.setFromMatrixPosition(t.matrixWorld),i.position.copy(wv),Dv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Dv),i.updateMatrixWorld(),Up.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Up,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Vo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Up)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nu=new Q,Ou=new Fr,za=new Q;class Rm extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Nu,Ou,za),za.x===1&&za.y===1&&za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nu,Ou,za.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Nu,Ou,za),za.x===1&&za.y===1&&za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nu,Ou,za.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ks=new Q,Uv=new we,Lv=new we;class bi extends Rm{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ko*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z)}getViewSize(t,i){return this.getViewBounds(t,Uv,Lv),i.subVectors(Lv,Uv)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class sE extends Am{constructor(){super(new bi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=ko*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Wu extends jo{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new sE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class rE extends Am{constructor(){super(new bi(90,1,.5,500)),this.isPointLightShadow=!0}}class ac extends jo{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new rE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class nh extends Rm{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oE extends Am{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qp extends jo{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new oE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class aS extends jo{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Co=-90,wo=1;class sS extends un{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(Co,wo,t,i);l.layers=this.layers,this.add(l);const c=new bi(Co,wo,t,i);c.layers=this.layers,this.add(c);const h=new bi(Co,wo,t,i);h.layers=this.layers,this.add(h);const d=new bi(Co,wo,t,i);d.layers=this.layers,this.add(d);const m=new bi(Co,wo,t,i);m.layers=this.layers,this.add(m);const p=new bi(Co,wo,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=U,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class rS extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Nv=new on;class oS{constructor(t,i,s=0,l=1/0){this.ray=new ym(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ve("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Nv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nv),this}intersectObject(t,i=!0,s=[]){return Jp(t,this,s,i),s.sort(Ov),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Jp(t[l],this,s,i);return s.sort(Ov),s}}function Ov(r,t){return r.distance-t.distance}function Jp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Jp(c[h],t,i,!0)}}class lS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Iv(r,t,i,s){const l=lE(s);switch(i){case pm:return r*t;case Xf:return r*t/l.components*l.byteLength;case Wf:return r*t/l.components*l.byteLength;case Or:return r*t*2/l.components*l.byteLength;case Yf:return r*t*2/l.components*l.byteLength;case mm:return r*t*3/l.components*l.byteLength;case da:return r*t*4/l.components*l.byteLength;case qf:return r*t*4/l.components*l.byteLength;case Jl:case $l:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tc:case ec:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sf:case of:return Math.max(r,16)*Math.max(t,8)/4;case af:case rf:return Math.max(r,8)*Math.max(t,8)/2;case lf:case cf:case ff:case hf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case uf:case df:case pf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case mf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gf:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _f:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xf:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Sf:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case yf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Mf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ef:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Tf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Af:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Rf:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Cf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case wf:case Df:case Uf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Lf:case Nf:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Of:case If:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lE(r){switch(r){case Pi:case um:return{byteLength:1,components:1};case Ho:case fm:case Xa:return{byteLength:2,components:1};case Vf:case kf:return{byteLength:2,components:4};case Da:case Gf:case ha:return{byteLength:4,components:1};case hm:case dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bf}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bf);function cS(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<x.length;y++){const T=x[g],U=x[y];U.start<=T.start+T.count+1?T.count=Math.max(T.count,U.start+U.count-T.start):(++g,x[g]=U)}x.length=g+1;for(let y=0,T=x.length;y<T;y++){const U=x[y];r.bufferSubData(p,U.start*_.BYTES_PER_ELEMENT,_,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var uE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fE=`#ifdef USE_ALPHAHASH
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
#endif`,hE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gE=`#ifdef USE_AOMAP
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
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vE=`#ifdef USE_BATCHING
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
#endif`,xE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ME=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EE=`#ifdef USE_IRIDESCENCE
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
#endif`,TE=`#ifdef USE_BUMPMAP
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
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,NE=`#define PI 3.141592653589793
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
} // validated`,OE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IE=`vec3 transformedNormal = objectNormal;
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
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",GE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QE=`#ifdef USE_GRADIENTMAP
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
}`,JE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eT=`uniform bool receiveShadow;
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
#endif`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
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
#endif`,lT=`uniform sampler2D dfgLUT;
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
}`,cT=`
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
#endif`,uT=`#if defined( RE_IndirectDiffuse )
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
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xT=`#if defined( USE_POINTS_UV )
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
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ET=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bT=`#ifdef USE_MORPHTARGETS
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
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LT=`#ifdef USE_NORMALMAP
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
#endif`,NT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jT=`float getShadowMask() {
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
}`,ZT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KT=`#ifdef USE_SKINNING
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
#endif`,QT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JT=`#ifdef USE_SKINNING
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
#endif`,$T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u1=`uniform sampler2D t2D;
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
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
}`,g1=`#if DEPTH_PACKING == 3200
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
}`,_1=`#define DISTANCE
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
}`,v1=`#define DISTANCE
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`uniform float scale;
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,T1=`uniform vec3 diffuse;
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
}`,b1=`#define LAMBERT
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
}`,A1=`#define LAMBERT
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
}`,R1=`#define MATCAP
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
}`,C1=`#define MATCAP
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
}`,w1=`#define NORMAL
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
}`,D1=`#define NORMAL
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
}`,U1=`#define PHONG
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
}`,L1=`#define PHONG
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
}`,N1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
}`,I1=`#define TOON
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
}`,P1=`#define TOON
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
}`,F1=`uniform float size;
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
}`,B1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,G1=`uniform float rotation;
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
}`,V1=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:uE,alphahash_pars_fragment:fE,alphamap_fragment:hE,alphamap_pars_fragment:dE,alphatest_fragment:pE,alphatest_pars_fragment:mE,aomap_fragment:gE,aomap_pars_fragment:_E,batching_pars_vertex:vE,batching_vertex:xE,begin_vertex:SE,beginnormal_vertex:yE,bsdfs:ME,iridescence_fragment:EE,bumpmap_pars_fragment:TE,clipping_planes_fragment:bE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:RE,clipping_planes_vertex:CE,color_fragment:wE,color_pars_fragment:DE,color_pars_vertex:UE,color_vertex:LE,common:NE,cube_uv_reflection_fragment:OE,defaultnormal_vertex:IE,displacementmap_pars_vertex:PE,displacementmap_vertex:FE,emissivemap_fragment:BE,emissivemap_pars_fragment:zE,colorspace_fragment:HE,colorspace_pars_fragment:GE,envmap_fragment:VE,envmap_common_pars_fragment:kE,envmap_pars_fragment:XE,envmap_pars_vertex:WE,envmap_physical_pars_fragment:nT,envmap_vertex:YE,fog_vertex:qE,fog_pars_vertex:jE,fog_fragment:ZE,fog_pars_fragment:KE,gradientmap_pars_fragment:QE,lightmap_pars_fragment:JE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:tT,lights_pars_begin:eT,lights_toon_fragment:iT,lights_toon_pars_fragment:aT,lights_phong_fragment:sT,lights_phong_pars_fragment:rT,lights_physical_fragment:oT,lights_physical_pars_fragment:lT,lights_fragment_begin:cT,lights_fragment_maps:uT,lights_fragment_end:fT,logdepthbuf_fragment:hT,logdepthbuf_pars_fragment:dT,logdepthbuf_pars_vertex:pT,logdepthbuf_vertex:mT,map_fragment:gT,map_pars_fragment:_T,map_particle_fragment:vT,map_particle_pars_fragment:xT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:yT,morphinstance_vertex:MT,morphcolor_vertex:ET,morphnormal_vertex:TT,morphtarget_pars_vertex:bT,morphtarget_vertex:AT,normal_fragment_begin:RT,normal_fragment_maps:CT,normal_pars_fragment:wT,normal_pars_vertex:DT,normal_vertex:UT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:NT,clearcoat_normal_fragment_maps:OT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:PT,opaque_fragment:FT,packing:BT,premultiplied_alpha_fragment:zT,project_vertex:HT,dithering_fragment:GT,dithering_pars_fragment:VT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:WT,shadowmap_pars_vertex:YT,shadowmap_vertex:qT,shadowmask_pars_fragment:jT,skinbase_vertex:ZT,skinning_pars_vertex:KT,skinning_vertex:QT,skinnormal_vertex:JT,specularmap_fragment:$T,specularmap_pars_fragment:t1,tonemapping_fragment:e1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:a1,uv_pars_fragment:s1,uv_pars_vertex:r1,uv_vertex:o1,worldpos_vertex:l1,background_vert:c1,background_frag:u1,backgroundCube_vert:f1,backgroundCube_frag:h1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distance_vert:_1,distance_frag:v1,equirect_vert:x1,equirect_frag:S1,linedashed_vert:y1,linedashed_frag:M1,meshbasic_vert:E1,meshbasic_frag:T1,meshlambert_vert:b1,meshlambert_frag:A1,meshmatcap_vert:R1,meshmatcap_frag:C1,meshnormal_vert:w1,meshnormal_frag:D1,meshphong_vert:U1,meshphong_frag:L1,meshphysical_vert:N1,meshphysical_frag:O1,meshtoon_vert:I1,meshtoon_frag:P1,points_vert:F1,points_frag:B1,shadow_vert:z1,shadow_frag:H1,sprite_vert:G1,sprite_frag:V1},Pt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Aa={basic:{uniforms:Ti([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Ti([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Ti([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Ti([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Ti([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Ti([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Ti([Pt.points,Pt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Ti([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Ti([Pt.common,Pt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Ti([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Ti([Pt.sprite,Pt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Ti([Pt.common,Pt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Ti([Pt.lights,Pt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Aa.physical={uniforms:Ti([Aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Iu={r:0,b:0,g:0},br=new ma,k1=new on;function X1(r,t,i,s,l,c){const h=new re(0);let d=l===!0?0:1,m,p,_=null,x=0,g=null;function y(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const D=C.backgroundBlurriness>0;L=t.get(L,D)}return L}function T(C){let L=!1;const D=y(C);D===null?M(h,d):D&&D.isColor&&(M(D,1),L=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(C,L){const D=y(L);D&&(D.isCubeTexture||D.mapping===cc)?(p===void 0&&(p=new Ge(new ir(1,1,1),new Ua({name:"BackgroundCubeMaterial",uniforms:Wo(Aa.backgroundCube.uniforms),vertexShader:Aa.backgroundCube.vertexShader,fragmentShader:Aa.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),br.copy(L.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(br)),p.material.toneMapped=ke.getTransfer(D.colorSpace)!==Je,(_!==D||x!==D.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=D,x=D.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ge(new Ga(2,2),new Ua({name:"BackgroundMaterial",uniforms:Wo(Aa.background.uniforms),vertexShader:Aa.background.vertexShader,fragmentShader:Aa.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=ke.getTransfer(D.colorSpace)!==Je,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||x!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,x=D.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(Iu,Qx(r)),i.buffers.color.setClear(Iu.r,Iu.g,Iu.b,L,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,L=1){h.set(C),d=L,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(h,d)},render:T,addToRenderList:U,dispose:S}}function W1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(P,q,nt,it,Z){let N=!1;const F=x(P,it,nt,q);c!==F&&(c=F,p(c.object)),N=y(P,it,nt,Z),N&&T(P,it,nt,Z),Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(N||h)&&(h=!1,D(P,q,nt,it),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return r.createVertexArray()}function p(P){return r.bindVertexArray(P)}function _(P){return r.deleteVertexArray(P)}function x(P,q,nt,it){const Z=it.wireframe===!0;let N=s[q.id];N===void 0&&(N={},s[q.id]=N);const F=P.isInstancedMesh===!0?P.id:0;let tt=N[F];tt===void 0&&(tt={},N[F]=tt);let ft=tt[nt.id];ft===void 0&&(ft={},tt[nt.id]=ft);let _t=ft[Z];return _t===void 0&&(_t=g(m()),ft[Z]=_t),_t}function g(P){const q=[],nt=[],it=[];for(let Z=0;Z<i;Z++)q[Z]=0,nt[Z]=0,it[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:nt,attributeDivisors:it,object:P,attributes:{},index:null}}function y(P,q,nt,it){const Z=c.attributes,N=q.attributes;let F=0;const tt=nt.getAttributes();for(const ft in tt)if(tt[ft].location>=0){const I=Z[ft];let W=N[ft];if(W===void 0&&(ft==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),ft==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),I===void 0||I.attribute!==W||W&&I.data!==W.data)return!0;F++}return c.attributesNum!==F||c.index!==it}function T(P,q,nt,it){const Z={},N=q.attributes;let F=0;const tt=nt.getAttributes();for(const ft in tt)if(tt[ft].location>=0){let I=N[ft];I===void 0&&(ft==="instanceMatrix"&&P.instanceMatrix&&(I=P.instanceMatrix),ft==="instanceColor"&&P.instanceColor&&(I=P.instanceColor));const W={};W.attribute=I,I&&I.data&&(W.data=I.data),Z[ft]=W,F++}c.attributes=Z,c.attributesNum=F,c.index=it}function U(){const P=c.newAttributes;for(let q=0,nt=P.length;q<nt;q++)P[q]=0}function M(P){S(P,0)}function S(P,q){const nt=c.newAttributes,it=c.enabledAttributes,Z=c.attributeDivisors;nt[P]=1,it[P]===0&&(r.enableVertexAttribArray(P),it[P]=1),Z[P]!==q&&(r.vertexAttribDivisor(P,q),Z[P]=q)}function C(){const P=c.newAttributes,q=c.enabledAttributes;for(let nt=0,it=q.length;nt<it;nt++)q[nt]!==P[nt]&&(r.disableVertexAttribArray(nt),q[nt]=0)}function L(P,q,nt,it,Z,N,F){F===!0?r.vertexAttribIPointer(P,q,nt,Z,N):r.vertexAttribPointer(P,q,nt,it,Z,N)}function D(P,q,nt,it){U();const Z=it.attributes,N=nt.getAttributes(),F=q.defaultAttributeValues;for(const tt in N){const ft=N[tt];if(ft.location>=0){let _t=Z[tt];if(_t===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(_t=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(_t=P.instanceColor)),_t!==void 0){const I=_t.normalized,W=_t.itemSize,ht=t.get(_t);if(ht===void 0)continue;const Et=ht.buffer,Ot=ht.type,et=ht.bytesPerElement,dt=Ot===r.INT||Ot===r.UNSIGNED_INT||_t.gpuType===Gf;if(_t.isInterleavedBufferAttribute){const bt=_t.data,Vt=bt.stride,Zt=_t.offset;if(bt.isInstancedInterleavedBuffer){for(let ne=0;ne<ft.locationSize;ne++)S(ft.location+ne,bt.meshPerAttribute);P.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ne=0;ne<ft.locationSize;ne++)M(ft.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let ne=0;ne<ft.locationSize;ne++)L(ft.location+ne,W/ft.locationSize,Ot,I,Vt*et,(Zt+W/ft.locationSize*ne)*et,dt)}else{if(_t.isInstancedBufferAttribute){for(let bt=0;bt<ft.locationSize;bt++)S(ft.location+bt,_t.meshPerAttribute);P.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let bt=0;bt<ft.locationSize;bt++)M(ft.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let bt=0;bt<ft.locationSize;bt++)L(ft.location+bt,W/ft.locationSize,Ot,I,W*et,W/ft.locationSize*bt*et,dt)}}else if(F!==void 0){const I=F[tt];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(ft.location,I);break;case 3:r.vertexAttrib3fv(ft.location,I);break;case 4:r.vertexAttrib4fv(ft.location,I);break;default:r.vertexAttrib1fv(ft.location,I)}}}}C()}function B(){w();for(const P in s){const q=s[P];for(const nt in q){const it=q[nt];for(const Z in it){const N=it[Z];for(const F in N)_(N[F].object),delete N[F];delete it[Z]}}delete s[P]}}function z(P){if(s[P.id]===void 0)return;const q=s[P.id];for(const nt in q){const it=q[nt];for(const Z in it){const N=it[Z];for(const F in N)_(N[F].object),delete N[F];delete it[Z]}}delete s[P.id]}function H(P){for(const q in s){const nt=s[q];for(const it in nt){const Z=nt[it];if(Z[P.id]===void 0)continue;const N=Z[P.id];for(const F in N)_(N[F].object),delete N[F];delete Z[P.id]}}}function b(P){for(const q in s){const nt=s[q],it=P.isInstancedMesh===!0?P.id:0,Z=nt[it];if(Z!==void 0){for(const N in Z){const F=Z[N];for(const tt in F)_(F[tt].object),delete F[tt];delete Z[N]}delete nt[it],Object.keys(nt).length===0&&delete s[q]}}}function w(){J(),h=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:w,resetDefaultState:J,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfObject:b,releaseStatesOfProgram:H,initAttributes:U,enableAttribute:M,disableUnusedAttributes:C}}function Y1(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let y=0;for(let T=0;T<x;T++)y+=_[T];i.update(y,s,1)}function m(p,_,x,g){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)h(p[T],_[T],g[T]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,x);let T=0;for(let U=0;U<x;U++)T+=_[U]*g[U];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function q1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==da&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const b=H===Xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Pi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ha&&!b)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(fe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:U,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:D,maxSamples:B,samples:z}}function j1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Qs,d=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const T=x.clippingPlanes,U=x.clipIntersection,M=x.clipShadows,S=r.get(x);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,L=C*4;let D=S.clippingState||null;m.value=D,D=_(T,g,L,y);for(let B=0;B!==L;++B)D[B]=i[B];S.clippingState=D,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,y,T){const U=x!==null?x.length:0;let M=null;if(U!==0){if(M=m.value,T!==!0||M===null){const S=y+U*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,D=y;L!==U;++L,D+=4)h.copy(x[L]).applyMatrix4(C,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=U,t.numIntersection=0,M}}const tr=4,Pv=[.125,.215,.35,.446,.526,.582],Dr=20,Z1=256,Wl=new nh,Fv=new re;let Lp=null,Np=0,Op=0,Ip=!1;const K1=new Q;class Ff{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=K1}=c;Lp=this._renderer.getRenderTarget(),Np=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lp,Np,Op),this._renderer.xr.enabled=Ip,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===er||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lp=this._renderer.getRenderTarget(),Np=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Xa,format:da,colorSpace:Ir,depthBuffer:!1},l=Bv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Q1(c)),this._blurMaterial=$1(c,t,i),this._ggxMaterial=J1(c,t,i)}return l}_compileMaterial(t){const i=new Ge(new ji,t);this._renderer.compile(i,Wl)}_sceneToCubeUV(t,i,s,l,c){const m=new bi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(Fv),x.toneMapping=Ca,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new ir,new lc({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,M=U.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(Fv),S=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const B=this._cubeSize;Do(l,D*B,L>2?B:0,B,B),x.setRenderTarget(l),S&&x.render(U,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===er||t.mapping===Nr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Do(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Wl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,y=x*g,{_lodMax:T}=this,U=this._sizeLods[s],M=3*U*(s>T-tr?s-T+tr:0),S=4*(this._cubeSize-U);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,Do(c,M,S,3*U,2*U),l.setRenderTarget(c),l.render(d,Wl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Do(t,M,S,3*U,2*U),l.setRenderTarget(t),l.render(d,Wl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Dr-1),U=c/T,M=isFinite(c)?1+Math.floor(_*U):Dr;M>Dr&&fe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Dr}`);const S=[];let C=0;for(let H=0;H<Dr;++H){const b=H/U,w=Math.exp(-b*b/2);S.push(w),H===0?C+=w:H<M&&(C+=2*w)}for(let H=0;H<S.length;H++)S[H]=S[H]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const D=this._sizeLods[l],B=3*D*(l>L-tr?l-L+tr:0),z=4*(this._cubeSize-D);Do(i,B,z,3*D,2*D),m.setRenderTarget(i),m.render(x,Wl)}}function Q1(r){const t=[],i=[],s=[];let l=r;const c=r-tr+1+Pv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-tr?m=Pv[h-r+tr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,T=6,U=3,M=2,S=1,C=new Float32Array(U*T*y),L=new Float32Array(M*T*y),D=new Float32Array(S*T*y);for(let z=0;z<y;z++){const H=z%3*2/3-1,b=z>2?0:-1,w=[H,b,0,H+2/3,b,0,H+2/3,b+1,0,H,b,0,H+2/3,b+1,0,H,b+1,0];C.set(w,U*T*z),L.set(g,M*T*z);const J=[z,z,z,z,z,z];D.set(J,S*T*z)}const B=new ji;B.setAttribute("position",new pa(C,U)),B.setAttribute("uv",new pa(L,M)),B.setAttribute("faceIndex",new pa(D,S)),s.push(new Ge(B,null)),l>tr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Bv(r,t,i){const s=new wa(r,t,i);return s.texture.mapping=cc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Do(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function J1(r,t,i){return new Ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ih(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function $1(r,t,i){const s=new Float32Array(Dr),l=new Q(0,1,0);return new Ua({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ih(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function zv(){return new Ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Hv(){return new Ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}class Cm extends wa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Em(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ir(5,5,5),c=new Ua({name:"CubemapFromEquirect",uniforms:Wo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:_i,blending:ka});c.uniforms.tEquirect.value=i;const h=new Ge(l,c),d=i.minFilter;return i.minFilter===_s&&(i.minFilter=ei),new sS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function tb(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Gu||y===Vu)if(t.has(g)){const T=t.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const U=new Cm(T.height);return U.fromEquirectangularTexture(r,g),t.set(g,U),g.addEventListener("dispose",p),d(U.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===Gu||y===Vu,U=y===er||y===Nr;if(T||U){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Ff(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return T&&C&&C.height>0||U&&C&&m(C)?(s===null&&(s=new Ff(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===Gu?g.mapping=er:y===Vu&&(g.mapping=Nr),g}function m(g){let y=0;const T=6;for(let U=0;U<T;U++)g[U]!==void 0&&y++;return y===T}function p(g){const y=g.target;y.removeEventListener("dispose",p);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function eb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&rc("WebGLRenderer: "+s+" extension not supported."),l}}}function nb(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(x){const g=[],y=x.index,T=x.attributes.position;let U=0;if(T===void 0)return;if(y!==null){const C=y.array;U=y.version;for(let L=0,D=C.length;L<D;L+=3){const B=C[L+0],z=C[L+1],H=C[L+2];g.push(B,z,z,H,H,B)}}else{const C=T.array;U=T.version;for(let L=0,D=C.length/3-1;L<D;L+=3){const B=L+0,z=L+1,H=L+2;g.push(B,z,z,H,H,B)}}const M=new(T.count>=65535?Sm:xm)(g,1);M.version=U;const S=c.get(x);S&&t.remove(S),c.set(x,M)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function ib(r,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*h),i.update(y,s,1)}function p(g,y,T){T!==0&&(r.drawElementsInstanced(s,y,c,g*h,T),i.update(y,s,T))}function _(g,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,T);let M=0;for(let S=0;S<T;S++)M+=y[S];i.update(M,s,1)}function x(g,y,T,U){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/h,y[S],U[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,U,0,T);let S=0;for(let C=0;C<T;C++)S+=y[C]*U[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function ab(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ve("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sb(r,t,i){const s=new WeakMap,l=new bn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let J=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",J)};var y=J;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,U=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),U===!0&&(D=2),M===!0&&(D=3);let B=d.attributes.position.count*D,z=1;B>t.maxTextureSize&&(z=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const H=new Float32Array(B*z*4*x),b=new _m(H,B,z,x);b.type=ha,b.needsUpdate=!0;const w=D*4;for(let P=0;P<x;P++){const q=S[P],nt=C[P],it=L[P],Z=B*z*4*P;for(let N=0;N<q.count;N++){const F=N*w;T===!0&&(l.fromBufferAttribute(q,N),H[Z+F+0]=l.x,H[Z+F+1]=l.y,H[Z+F+2]=l.z,H[Z+F+3]=0),U===!0&&(l.fromBufferAttribute(nt,N),H[Z+F+4]=l.x,H[Z+F+5]=l.y,H[Z+F+6]=l.z,H[Z+F+7]=0),M===!0&&(l.fromBufferAttribute(it,N),H[Z+F+8]=l.x,H[Z+F+9]=l.y,H[Z+F+10]=l.z,H[Z+F+11]=it.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new we(B,z)},s.set(d,g),d.addEventListener("dispose",J)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const U=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function rb(r,t,i,s,l){let c=new WeakMap;function h(p){const _=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const ob={[im]:"LINEAR_TONE_MAPPING",[am]:"REINHARD_TONE_MAPPING",[sm]:"CINEON_TONE_MAPPING",[Hf]:"ACES_FILMIC_TONE_MAPPING",[om]:"AGX_TONE_MAPPING",[lm]:"NEUTRAL_TONE_MAPPING",[rm]:"CUSTOM_TONE_MAPPING"};function lb(r,t,i,s,l){const c=new wa(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new wa(t,i,{type:Xa,depthBuffer:!1,stencilBuffer:!1}),d=new ji;d.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ni([0,2,0,0,2,0],2));const m=new $x({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ge(d,m),_=new nh(-1,1,1,-1,0,1);let x=null,g=null,y=!1,T,U=null,M=[],S=!1;this.setSize=function(C,L){c.setSize(C,L),h.setSize(C,L);for(let D=0;D<M.length;D++){const B=M[D];B.setSize&&B.setSize(C,L)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const L=c.width,D=c.height;for(let B=0;B<M.length;B++){const z=M[B];z.setSize&&z.setSize(L,D)}},this.begin=function(C,L){if(y||C.toneMapping===Ca&&M.length===0)return!1;if(U=L,L!==null){const D=L.width,B=L.height;(c.width!==D||c.height!==B)&&this.setSize(D,B)}return S===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=Ca,!0},this.hasRenderPass=function(){return S},this.end=function(C,L){C.toneMapping=T,y=!0;let D=c,B=h;for(let z=0;z<M.length;z++){const H=M[z];if(H.enabled!==!1&&(H.render(C,B,D,L),H.needsSwap!==!1)){const b=D;D=B,B=b}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},ke.getTransfer(x)===Je&&(m.defines.SRGB_TRANSFER="");const z=ob[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(U),C.render(p,_),U=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const uS=new ui,$p=new Xo(1,1),fS=new _m,hS=new Wx,dS=new Em,Gv=[],Vv=[],kv=new Float32Array(16),Xv=new Float32Array(9),Wv=new Float32Array(4);function Zo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Gv[l];if(c===void 0&&(c=new Float32Array(l),Gv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function qn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function jn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function ah(r,t){let i=Vv[t];i===void 0&&(i=new Int32Array(t),Vv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function cb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;r.uniform2fv(this.addr,t),jn(i,t)}}function fb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(qn(i,t))return;r.uniform3fv(this.addr,t),jn(i,t)}}function hb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;r.uniform4fv(this.addr,t),jn(i,t)}}function db(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),jn(i,t)}else{if(qn(i,s))return;Wv.set(s),r.uniformMatrix2fv(this.addr,!1,Wv),jn(i,s)}}function pb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),jn(i,t)}else{if(qn(i,s))return;Xv.set(s),r.uniformMatrix3fv(this.addr,!1,Xv),jn(i,s)}}function mb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),jn(i,t)}else{if(qn(i,s))return;kv.set(s),r.uniformMatrix4fv(this.addr,!1,kv),jn(i,s)}}function gb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function _b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;r.uniform2iv(this.addr,t),jn(i,t)}}function vb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(qn(i,t))return;r.uniform3iv(this.addr,t),jn(i,t)}}function xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;r.uniform4iv(this.addr,t),jn(i,t)}}function Sb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function yb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;r.uniform2uiv(this.addr,t),jn(i,t)}}function Mb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(qn(i,t))return;r.uniform3uiv(this.addr,t),jn(i,t)}}function Eb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;r.uniform4uiv(this.addr,t),jn(i,t)}}function Tb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?($p.compareFunction=i.isReversedDepthBuffer()?Kf:Zf,c=$p):c=uS,i.setTexture2D(t||c,l)}function bb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||hS,l)}function Ab(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||dS,l)}function Rb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||fS,l)}function Cb(r){switch(r){case 5126:return cb;case 35664:return ub;case 35665:return fb;case 35666:return hb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return xb;case 5125:return Sb;case 36294:return yb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Rb}}function wb(r,t){r.uniform1fv(this.addr,t)}function Db(r,t){const i=Zo(t,this.size,2);r.uniform2fv(this.addr,i)}function Ub(r,t){const i=Zo(t,this.size,3);r.uniform3fv(this.addr,i)}function Lb(r,t){const i=Zo(t,this.size,4);r.uniform4fv(this.addr,i)}function Nb(r,t){const i=Zo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Ob(r,t){const i=Zo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Ib(r,t){const i=Zo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Pb(r,t){r.uniform1iv(this.addr,t)}function Fb(r,t){r.uniform2iv(this.addr,t)}function Bb(r,t){r.uniform3iv(this.addr,t)}function zb(r,t){r.uniform4iv(this.addr,t)}function Hb(r,t){r.uniform1uiv(this.addr,t)}function Gb(r,t){r.uniform2uiv(this.addr,t)}function Vb(r,t){r.uniform3uiv(this.addr,t)}function kb(r,t){r.uniform4uiv(this.addr,t)}function Xb(r,t,i){const s=this.cache,l=t.length,c=ah(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=$p:h=uS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function Wb(r,t,i){const s=this.cache,l=t.length,c=ah(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||hS,c[h])}function Yb(r,t,i){const s=this.cache,l=t.length,c=ah(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||dS,c[h])}function qb(r,t,i){const s=this.cache,l=t.length,c=ah(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||fS,c[h])}function jb(r){switch(r){case 5126:return wb;case 35664:return Db;case 35665:return Ub;case 35666:return Lb;case 35674:return Nb;case 35675:return Ob;case 35676:return Ib;case 5124:case 35670:return Pb;case 35667:case 35671:return Fb;case 35668:case 35672:return Bb;case 35669:case 35673:return zb;case 5125:return Hb;case 36294:return Gb;case 36295:return Vb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return qb}}class Zb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Cb(i.type)}}class Kb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jb(i.type)}}class Qb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Pp=/(\w+)(\])?(\[|\.)?/g;function Yv(r,t){r.seq.push(t),r.map[t.id]=t}function Jb(r,t,i){const s=r.name,l=s.length;for(Pp.lastIndex=0;;){const c=Pp.exec(s),h=Pp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Yv(i,p===void 0?new Zb(d,r,t):new Kb(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new Qb(d),Yv(i,x)),i=x}}}class Yu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);Jb(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function qv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const $b=37297;let tA=0;function eA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const jv=new ve;function nA(r){ke._getMatrix(jv,ke.workingColorSpace,r);const t=`mat3( ${jv.elements.map(i=>i.toFixed(4))} )`;switch(ke.getTransfer(r)){case sc:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Zv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+eA(r.getShaderSource(t),d)}else return c}function iA(r,t){const i=nA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const aA={[im]:"Linear",[am]:"Reinhard",[sm]:"Cineon",[Hf]:"ACESFilmic",[om]:"AgX",[lm]:"Neutral",[rm]:"Custom"};function sA(r,t){const i=aA[t];return i===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pu=new Q;function rA(){ke.getLuminanceCoefficients(Pu);const r=Pu.x.toFixed(4),t=Pu.y.toFixed(4),i=Pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ql).join(`
`)}function lA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function cA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Ql(r){return r!==""}function Kv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function tm(r){return r.replace(uA,hA)}const fA=new Map;function hA(r,t){let i=Se[t];if(i===void 0){const s=fA.get(t);if(s!==void 0)i=Se[s],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return tm(i)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jv(r){return r.replace(dA,pA)}function pA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function $v(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const mA={[Fo]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function gA(r){return mA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _A={[er]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};function vA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_A[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xA={[Nr]:"ENVMAP_MODE_REFRACTION"};function SA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yA={[zf]:"ENVMAP_BLENDING_MULTIPLY",[Dx]:"ENVMAP_BLENDING_MIX",[Ux]:"ENVMAP_BLENDING_ADD"};function MA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yA[r.combine]||"ENVMAP_BLENDING_NONE"}function EA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function TA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=gA(i),p=vA(i),_=SA(i),x=MA(i),g=EA(i),y=oA(i),T=lA(c),U=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ql).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ql).join(`
`),S.length>0&&(S+=`
`)):(M=[$v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ql).join(`
`),S=[$v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ca?"#define TONE_MAPPING":"",i.toneMapping!==Ca?Se.tonemapping_pars_fragment:"",i.toneMapping!==Ca?sA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,iA("linearToOutputTexel",i.outputColorSpace),rA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ql).join(`
`)),h=tm(h),h=Kv(h,i),h=Qv(h,i),d=tm(d),d=Kv(d,i),d=Qv(d,i),h=Jv(h),d=Jv(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=C+M+h,D=C+S+d,B=qv(l,l.VERTEX_SHADER,L),z=qv(l,l.FRAGMENT_SHADER,D);l.attachShader(U,B),l.attachShader(U,z),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function H(P){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(U)||"",nt=l.getShaderInfoLog(B)||"",it=l.getShaderInfoLog(z)||"",Z=q.trim(),N=nt.trim(),F=it.trim();let tt=!0,ft=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,B,z);else{const _t=Zv(l,B,"vertex"),I=Zv(l,z,"fragment");Ve("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+_t+`
`+I)}else Z!==""?fe("WebGLProgram: Program Info Log:",Z):(N===""||F==="")&&(ft=!1);ft&&(P.diagnostics={runnable:tt,programLog:Z,vertexShader:{log:N,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(B),l.deleteShader(z),b=new Yu(l,U),w=cA(l,U)}let b;this.getUniforms=function(){return b===void 0&&H(this),b};let w;this.getAttributes=function(){return w===void 0&&H(this),w};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(U,$b)),J},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=t,this.usedTimes=1,this.program=U,this.vertexShader=B,this.fragmentShader=z,this}let bA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new RA(t),i.set(t,s)),s}}class RA{constructor(t){this.id=bA++,this.code=t,this.usedTimes=0}}function CA(r,t,i,s,l,c){const h=new Jf,d=new AA,m=new Set,p=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function U(b,w,J,P,q){const nt=P.fog,it=q.geometry,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,F=t.get(b.envMap||Z,N),tt=F&&F.mapping===cc?F.image.height:null,ft=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&fe("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const _t=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,I=_t!==void 0?_t.length:0;let W=0;it.morphAttributes.position!==void 0&&(W=1),it.morphAttributes.normal!==void 0&&(W=2),it.morphAttributes.color!==void 0&&(W=3);let ht,Et,Ot,et;if(ft){const Ee=Aa[ft];ht=Ee.vertexShader,Et=Ee.fragmentShader}else ht=b.vertexShader,Et=b.fragmentShader,d.update(b),Ot=d.getVertexShaderID(b),et=d.getFragmentShaderID(b);const dt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Vt=q.isInstancedMesh===!0,Zt=q.isBatchedMesh===!0,ne=!!b.map,ln=!!b.matcap,be=!!F,ye=!!b.aoMap,ze=!!b.lightMap,he=!!b.bumpMap,fn=!!b.normalMap,V=!!b.displacementMap,en=!!b.emissiveMap,Me=!!b.metalnessMap,Ne=!!b.roughnessMap,Qt=b.anisotropy>0,O=b.clearcoat>0,E=b.dispersion>0,j=b.iridescence>0,gt=b.sheen>0,yt=b.transmission>0,pt=Qt&&!!b.anisotropyMap,Wt=O&&!!b.clearcoatMap,wt=O&&!!b.clearcoatNormalMap,ee=O&&!!b.clearcoatRoughnessMap,ae=j&&!!b.iridescenceMap,Tt=j&&!!b.iridescenceThicknessMap,St=gt&&!!b.sheenColorMap,It=gt&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,Ft=!!b.specularColorMap,pe=!!b.specularIntensityMap,k=yt&&!!b.transmissionMap,At=yt&&!!b.thicknessMap,Rt=!!b.gradientMap,Ht=!!b.alphaMap,Mt=b.alphaTest>0,ut=!!b.alphaHash,Bt=!!b.extensions;let ce=Ca;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ce=r.toneMapping);const We={shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:ht,fragmentShader:Et,defines:b.defines,customVertexShaderID:Ot,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&q._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&q.instanceColor!==null,instancingMorph:Vt&&q.morphTexture!==null,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ir,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:ln,envMap:be,envMapMode:be&&F.mapping,envMapCubeUVHeight:tt,aoMap:ye,lightMap:ze,bumpMap:he,normalMap:fn,displacementMap:V,emissiveMap:en,normalMapObjectSpace:fn&&b.normalMapType===Ox,normalMapTangentSpace:fn&&b.normalMapType===jf,metalnessMap:Me,roughnessMap:Ne,anisotropy:Qt,anisotropyMap:pt,clearcoat:O,clearcoatMap:Wt,clearcoatNormalMap:wt,clearcoatRoughnessMap:ee,dispersion:E,iridescence:j,iridescenceMap:ae,iridescenceThicknessMap:Tt,sheen:gt,sheenColorMap:St,sheenRoughnessMap:It,specularMap:Nt,specularColorMap:Ft,specularIntensityMap:pe,transmission:yt,transmissionMap:k,thicknessMap:At,gradientMap:Rt,opaque:b.transparent===!1&&b.blending===Ur&&b.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Mt,alphaHash:ut,combine:b.combine,mapUv:ne&&T(b.map.channel),aoMapUv:ye&&T(b.aoMap.channel),lightMapUv:ze&&T(b.lightMap.channel),bumpMapUv:he&&T(b.bumpMap.channel),normalMapUv:fn&&T(b.normalMap.channel),displacementMapUv:V&&T(b.displacementMap.channel),emissiveMapUv:en&&T(b.emissiveMap.channel),metalnessMapUv:Me&&T(b.metalnessMap.channel),roughnessMapUv:Ne&&T(b.roughnessMap.channel),anisotropyMapUv:pt&&T(b.anisotropyMap.channel),clearcoatMapUv:Wt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(b.sheenRoughnessMap.channel),specularMapUv:Nt&&T(b.specularMap.channel),specularColorMapUv:Ft&&T(b.specularColorMap.channel),specularIntensityMapUv:pe&&T(b.specularIntensityMap.channel),transmissionMapUv:k&&T(b.transmissionMap.channel),thicknessMapUv:At&&T(b.thicknessMap.channel),alphaMapUv:Ht&&T(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(fn||Qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!it.attributes.uv&&(ne||Ht),fog:!!nt,useFog:b.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||it.attributes.normal===void 0&&fn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:bt,skinning:q.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&ke.getTransfer(b.map.colorSpace)===Je,decodeVideoTextureEmissive:en&&b.emissiveMap.isVideoTexture===!0&&ke.getTransfer(b.emissiveMap.colorSpace)===Je,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vn,flipSided:b.side===_i,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function M(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const J in b.defines)w.push(J),w.push(b.defines[J]);return b.isRawShaderMaterial===!1&&(S(w,b),C(w,b),w.push(r.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function S(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function C(b,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),b.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),b.push(h.mask)}function L(b){const w=y[b.type];let J;if(w){const P=Aa[w];J=Jx.clone(P.uniforms)}else J=b.uniforms;return J}function D(b,w){let J=_.get(w);return J!==void 0?++J.usedTimes:(J=new TA(r,w,b,l),p.push(J),_.set(w,J)),J}function B(b){if(--b.usedTimes===0){const w=p.indexOf(b);p[w]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function z(b){d.remove(b)}function H(){d.dispose()}return{getParameters:U,getProgramCacheKey:M,getUniforms:L,acquireProgram:D,releaseProgram:B,releaseShaderCache:z,programs:p,dispose:H}}function wA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function DA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function tx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ex(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,T,U,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:U,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=h(g),C.groupOrder=U,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,T,U,M,S){const C=d(g,y,T,U,M,S);T.transmission>0?s.push(C):T.transparent===!0?l.push(C):i.push(C)}function p(g,y,T,U,M,S){const C=d(g,y,T,U,M,S);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||DA),s.length>1&&s.sort(y||tx),l.length>1&&l.sort(y||tx)}function x(){for(let g=t,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:_}}function UA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new ex,r.set(s,[h])):l>=c.length?(h=new ex,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function LA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new re};break;case"SpotLight":i={position:new Q,direction:new Q,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new re,groundColor:new re};break;case"RectAreaLight":i={color:new re,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function NA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let OA=0;function IA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function PA(r){const t=new LA,i=NA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,c=new on,h=new on;function d(p){let _=0,x=0,g=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,T=0,U=0,M=0,S=0,C=0,L=0,D=0,B=0,z=0,H=0;p.sort(IA);for(let w=0,J=p.length;w<J;w++){const P=p[w],q=P.color,nt=P.intensity,it=P.distance;let Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Or?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)_+=q.r*nt,x+=q.g*nt,g+=q.b*nt;else if(P.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(P.sh.coefficients[N],nt);H++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,tt=i.get(P);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,s.directionalShadow[y]=tt,s.directionalShadowMap[y]=Z,s.directionalShadowMatrix[y]=P.shadow.matrix,C++}s.directional[y]=N,y++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(q).multiplyScalar(nt),N.distance=it,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,s.spot[U]=N;const F=P.shadow;if(P.map&&(s.spotLightMap[B]=P.map,B++,F.updateMatrices(P),P.castShadow&&z++),s.spotLightMatrix[U]=F.matrix,P.castShadow){const tt=i.get(P);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,s.spotShadow[U]=tt,s.spotShadowMap[U]=Z,D++}U++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(q).multiplyScalar(nt),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=N,M++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const F=P.shadow,tt=i.get(P);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,tt.shadowCameraNear=F.camera.near,tt.shadowCameraFar=F.camera.far,s.pointShadow[T]=tt,s.pointShadowMap[T]=Z,s.pointShadowMatrix[T]=P.shadow.matrix,L++}s.point[T]=N,T++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(nt),N.groundColor.copy(P.groundColor).multiplyScalar(nt),s.hemi[S]=N,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==U||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==C||b.numPointShadows!==L||b.numSpotShadows!==D||b.numSpotMaps!==B||b.numLightProbes!==H)&&(s.directional.length=y,s.spot.length=U,s.rectArea.length=M,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+B-z,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=H,b.directionalLength=y,b.pointLength=T,b.spotLength=U,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=C,b.numPointShadows=L,b.numSpotShadows=D,b.numSpotMaps=B,b.numLightProbes=H,s.version=OA++)}function m(p,_){let x=0,g=0,y=0,T=0,U=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const L=p[S];if(L.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(L.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const D=s.hemi[U];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),U++}}}return{setup:d,setupView:m,state:s}}function nx(r){const t=new PA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function FA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new nx(r),t.set(l,[d])):c>=h.length?(d=new nx(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const BA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
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
}`,HA=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],GA=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],ix=new on,Yl=new Q,Fp=new Q;function VA(r,t,i){let s=new $f;const l=new we,c=new we,h=new bn,d=new eS,m=new nS,p={},_=i.maxTextureSize,x={[xs]:_i,[_i]:xs,[Vn]:Vn},g=new Ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:BA,fragmentShader:zA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new ji;T.setAttribute("position",new pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Ge(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let S=this.type;this.render=function(z,H,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===fx&&(fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fo);const w=r.getRenderTarget(),J=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),q=r.state;q.setBlending(ka),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const nt=S!==this.type;nt&&H.traverse(function(it){it.material&&(Array.isArray(it.material)?it.material.forEach(Z=>Z.needsUpdate=!0):it.material.needsUpdate=!0)});for(let it=0,Z=z.length;it<Z;it++){const N=z[it],F=N.shadow;if(F===void 0){fe("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const tt=F.getFrameExtents();l.multiply(tt),c.copy(F.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/tt.x),l.x=c.x*tt.x,F.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/tt.y),l.y=c.y*tt.y,F.mapSize.y=c.y));const ft=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ft,F.map===null||nt===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Oo){if(N.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new wa(l.x,l.y,{format:Or,type:Xa,minFilter:ei,magFilter:ei,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new Xo(l.x,l.y,ha),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Wa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ti,F.map.depthTexture.magFilter=ti}else N.isPointLight?(F.map=new Cm(l.x),F.map.depthTexture=new jx(l.x,Da)):(F.map=new wa(l.x,l.y),F.map.depthTexture=new Xo(l.x,l.y,Da)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Wa,this.type===Fo?(F.map.depthTexture.compareFunction=ft?Kf:Zf,F.map.depthTexture.minFilter=ei,F.map.depthTexture.magFilter=ei):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ti,F.map.depthTexture.magFilter=ti);F.camera.updateProjectionMatrix()}const _t=F.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<_t;I++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,I),r.clear();else{I===0&&(r.setRenderTarget(F.map),r.clear());const W=F.getViewport(I);h.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),q.viewport(h)}if(N.isPointLight){const W=F.camera,ht=F.matrix,Et=N.distance||W.far;Et!==W.far&&(W.far=Et,W.updateProjectionMatrix()),Yl.setFromMatrixPosition(N.matrixWorld),W.position.copy(Yl),Fp.copy(W.position),Fp.add(HA[I]),W.up.copy(GA[I]),W.lookAt(Fp),W.updateMatrixWorld(),ht.makeTranslation(-Yl.x,-Yl.y,-Yl.z),ix.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ix,W.coordinateSystem,W.reversedDepth)}else F.updateMatrices(N);s=F.getFrustum(),D(H,b,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===Oo&&C(F,b),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(w,J,P)};function C(z,H){const b=t.update(U);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new wa(l.x,l.y,{format:Or,type:Xa})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(H,null,b,g,U,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(H,null,b,y,U,null)}function L(z,H,b,w){let J=null;const P=b.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(P!==void 0)J=P;else if(J=b.isPointLight===!0?m:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const q=J.uuid,nt=H.uuid;let it=p[q];it===void 0&&(it={},p[q]=it);let Z=it[nt];Z===void 0&&(Z=J.clone(),it[nt]=Z,H.addEventListener("dispose",B)),J=Z}if(J.visible=H.visible,J.wireframe=H.wireframe,w===Oo?J.side=H.shadowSide!==null?H.shadowSide:H.side:J.side=H.shadowSide!==null?H.shadowSide:x[H.side],J.alphaMap=H.alphaMap,J.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,J.map=H.map,J.clipShadows=H.clipShadows,J.clippingPlanes=H.clippingPlanes,J.clipIntersection=H.clipIntersection,J.displacementMap=H.displacementMap,J.displacementScale=H.displacementScale,J.displacementBias=H.displacementBias,J.wireframeLinewidth=H.wireframeLinewidth,J.linewidth=H.linewidth,b.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const q=r.properties.get(J);q.light=b}return J}function D(z,H,b,w,J){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&J===Oo)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,z.matrixWorld);const nt=t.update(z),it=z.material;if(Array.isArray(it)){const Z=nt.groups;for(let N=0,F=Z.length;N<F;N++){const tt=Z[N],ft=it[tt.materialIndex];if(ft&&ft.visible){const _t=L(z,ft,w,J);z.onBeforeShadow(r,z,H,b,nt,_t,tt),r.renderBufferDirect(b,null,nt,_t,z,tt),z.onAfterShadow(r,z,H,b,nt,_t,tt)}}}else if(it.visible){const Z=L(z,it,w,J);z.onBeforeShadow(r,z,H,b,nt,Z,null),r.renderBufferDirect(b,null,nt,Z,z,null),z.onAfterShadow(r,z,H,b,nt,Z,null)}}const q=z.children;for(let nt=0,it=q.length;nt<it;nt++)D(q[nt],H,b,w,J)}function B(z){z.target.removeEventListener("dispose",B);for(const b in p){const w=p[b],J=z.target.uuid;J in w&&(w[J].dispose(),delete w[J])}}}function kA(r,t){function i(){let k=!1;const At=new bn;let Rt=null;const Ht=new bn(0,0,0,0);return{setMask:function(Mt){Rt!==Mt&&!k&&(r.colorMask(Mt,Mt,Mt,Mt),Rt=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,ut,Bt,ce,We){We===!0&&(Mt*=ce,ut*=ce,Bt*=ce),At.set(Mt,ut,Bt,ce),Ht.equals(At)===!1&&(r.clearColor(Mt,ut,Bt,ce),Ht.copy(At))},reset:function(){k=!1,Rt=null,Ht.set(-1,0,0,0)}}}function s(){let k=!1,At=!1,Rt=null,Ht=null,Mt=null;return{setReversed:function(ut){if(At!==ut){const Bt=t.get("EXT_clip_control");ut?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),At=ut;const ce=Mt;Mt=null,this.setClear(ce)}},getReversed:function(){return At},setTest:function(ut){ut?dt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ut){Rt!==ut&&!k&&(r.depthMask(ut),Rt=ut)},setFunc:function(ut){if(At&&(ut=SM[ut]),Ht!==ut){switch(ut){case Zu:r.depthFunc(r.NEVER);break;case Ku:r.depthFunc(r.ALWAYS);break;case Qu:r.depthFunc(r.LESS);break;case Lr:r.depthFunc(r.LEQUAL);break;case Ju:r.depthFunc(r.EQUAL);break;case $u:r.depthFunc(r.GEQUAL);break;case tf:r.depthFunc(r.GREATER);break;case ef:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=ut}},setLocked:function(ut){k=ut},setClear:function(ut){Mt!==ut&&(Mt=ut,At&&(ut=1-ut),r.clearDepth(ut))},reset:function(){k=!1,Rt=null,Ht=null,Mt=null,At=!1}}}function l(){let k=!1,At=null,Rt=null,Ht=null,Mt=null,ut=null,Bt=null,ce=null,We=null;return{setTest:function(Ee){k||(Ee?dt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!k&&(r.stencilMask(Ee),At=Ee)},setFunc:function(Ee,ii,Ai){(Rt!==Ee||Ht!==ii||Mt!==Ai)&&(r.stencilFunc(Ee,ii,Ai),Rt=Ee,Ht=ii,Mt=Ai)},setOp:function(Ee,ii,Ai){(ut!==Ee||Bt!==ii||ce!==Ai)&&(r.stencilOp(Ee,ii,Ai),ut=Ee,Bt=ii,ce=Ai)},setLocked:function(Ee){k=Ee},setClear:function(Ee){We!==Ee&&(r.clearStencil(Ee),We=Ee)},reset:function(){k=!1,At=null,Rt=null,Ht=null,Mt=null,ut=null,Bt=null,ce=null,We=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},g=new WeakMap,y=[],T=null,U=!1,M=null,S=null,C=null,L=null,D=null,B=null,z=null,H=new re(0,0,0),b=0,w=!1,J=null,P=null,q=null,nt=null,it=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const tt=r.getParameter(r.VERSION);tt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(tt)[1]),N=F>=1):tt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),N=F>=2);let ft=null,_t={};const I=r.getParameter(r.SCISSOR_BOX),W=r.getParameter(r.VIEWPORT),ht=new bn().fromArray(I),Et=new bn().fromArray(W);function Ot(k,At,Rt,Ht){const Mt=new Uint8Array(4),ut=r.createTexture();r.bindTexture(k,ut),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<Rt;Bt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(At+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return ut}const et={};et[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(r.DEPTH_TEST),h.setFunc(Lr),he(!1),fn(Vp),dt(r.CULL_FACE),ye(ka);function dt(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function bt(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function Vt(k,At){return x[k]!==At?(r.bindFramebuffer(k,At),x[k]=At,k===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=At),k===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=At),!0):!1}function Zt(k,At){let Rt=y,Ht=!1;if(k){Rt=g.get(At),Rt===void 0&&(Rt=[],g.set(At,Rt));const Mt=k.textures;if(Rt.length!==Mt.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Bt=Mt.length;ut<Bt;ut++)Rt[ut]=r.COLOR_ATTACHMENT0+ut;Rt.length=Mt.length,Ht=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(Rt)}function ne(k){return T!==k?(r.useProgram(k),T=k,!0):!1}const ln={[Js]:r.FUNC_ADD,[dx]:r.FUNC_SUBTRACT,[px]:r.FUNC_REVERSE_SUBTRACT};ln[mx]=r.MIN,ln[gx]=r.MAX;const be={[_x]:r.ZERO,[vx]:r.ONE,[xx]:r.SRC_COLOR,[qu]:r.SRC_ALPHA,[bx]:r.SRC_ALPHA_SATURATE,[Ex]:r.DST_COLOR,[yx]:r.DST_ALPHA,[Sx]:r.ONE_MINUS_SRC_COLOR,[ju]:r.ONE_MINUS_SRC_ALPHA,[Tx]:r.ONE_MINUS_DST_COLOR,[Mx]:r.ONE_MINUS_DST_ALPHA,[Ax]:r.CONSTANT_COLOR,[Rx]:r.ONE_MINUS_CONSTANT_COLOR,[Cx]:r.CONSTANT_ALPHA,[wx]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(k,At,Rt,Ht,Mt,ut,Bt,ce,We,Ee){if(k===ka){U===!0&&(bt(r.BLEND),U=!1);return}if(U===!1&&(dt(r.BLEND),U=!0),k!==hx){if(k!==M||Ee!==w){if((S!==Js||D!==Js)&&(r.blendEquation(r.FUNC_ADD),S=Js,D=Js),Ee)switch(k){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kp:r.blendFunc(r.ONE,r.ONE);break;case Xp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",k);break}else switch(k){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Xp:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wp:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",k);break}C=null,L=null,B=null,z=null,H.set(0,0,0),b=0,M=k,w=Ee}return}Mt=Mt||At,ut=ut||Rt,Bt=Bt||Ht,(At!==S||Mt!==D)&&(r.blendEquationSeparate(ln[At],ln[Mt]),S=At,D=Mt),(Rt!==C||Ht!==L||ut!==B||Bt!==z)&&(r.blendFuncSeparate(be[Rt],be[Ht],be[ut],be[Bt]),C=Rt,L=Ht,B=ut,z=Bt),(ce.equals(H)===!1||We!==b)&&(r.blendColor(ce.r,ce.g,ce.b,We),H.copy(ce),b=We),M=k,w=!1}function ze(k,At){k.side===Vn?bt(r.CULL_FACE):dt(r.CULL_FACE);let Rt=k.side===_i;At&&(Rt=!Rt),he(Rt),k.blending===Ur&&k.transparent===!1?ye(ka):ye(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ht=k.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),en(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function he(k){J!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),J=k)}function fn(k){k!==cx?(dt(r.CULL_FACE),k!==P&&(k===Vp?r.cullFace(r.BACK):k===ux?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),P=k}function V(k){k!==q&&(N&&r.lineWidth(k),q=k)}function en(k,At,Rt){k?(dt(r.POLYGON_OFFSET_FILL),(nt!==At||it!==Rt)&&(nt=At,it=Rt,h.getReversed()&&(At=-At),r.polygonOffset(At,Rt))):bt(r.POLYGON_OFFSET_FILL)}function Me(k){k?dt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function Ne(k){k===void 0&&(k=r.TEXTURE0+Z-1),ft!==k&&(r.activeTexture(k),ft=k)}function Qt(k,At,Rt){Rt===void 0&&(ft===null?Rt=r.TEXTURE0+Z-1:Rt=ft);let Ht=_t[Rt];Ht===void 0&&(Ht={type:void 0,texture:void 0},_t[Rt]=Ht),(Ht.type!==k||Ht.texture!==At)&&(ft!==Rt&&(r.activeTexture(Rt),ft=Rt),r.bindTexture(k,At||et[k]),Ht.type=k,Ht.texture=At)}function O(){const k=_t[ft];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function gt(){try{r.texSubImage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function yt(){try{r.texSubImage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function Wt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function wt(){try{r.texStorage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function ee(){try{r.texStorage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function ae(){try{r.texImage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function Tt(){try{r.texImage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function St(k){ht.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ht.copy(k))}function It(k){Et.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Et.copy(k))}function Nt(k,At){let Rt=p.get(At);Rt===void 0&&(Rt=new WeakMap,p.set(At,Rt));let Ht=Rt.get(k);Ht===void 0&&(Ht=r.getUniformBlockIndex(At,k.name),Rt.set(k,Ht))}function Ft(k,At){const Ht=p.get(At).get(k);m.get(At)!==Ht&&(r.uniformBlockBinding(At,Ht,k.__bindingPointIndex),m.set(At,Ht))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ft=null,_t={},x={},g=new WeakMap,y=[],T=null,U=!1,M=null,S=null,C=null,L=null,D=null,B=null,z=null,H=new re(0,0,0),b=0,w=!1,J=null,P=null,q=null,nt=null,it=null,ht.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:dt,disable:bt,bindFramebuffer:Vt,drawBuffers:Zt,useProgram:ne,setBlending:ye,setMaterial:ze,setFlipSided:he,setCullFace:fn,setLineWidth:V,setPolygonOffset:en,setScissorTest:Me,activeTexture:Ne,bindTexture:Qt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:ae,texImage3D:Tt,updateUBOMapping:Nt,uniformBlockBinding:Ft,texStorage2D:wt,texStorage3D:ee,texSubImage2D:gt,texSubImage3D:yt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Wt,scissor:St,viewport:It,reset:pe}}function XA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,_=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,E){return y?new OffscreenCanvas(O,E):Pf("canvas")}function U(O,E,j){let gt=1;const yt=Qt(O);if((yt.width>j||yt.height>j)&&(gt=j/Math.max(yt.width,yt.height)),gt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pt=Math.floor(gt*yt.width),Wt=Math.floor(gt*yt.height);x===void 0&&(x=T(pt,Wt));const wt=E?T(pt,Wt):x;return wt.width=pt,wt.height=Wt,wt.getContext("2d").drawImage(O,0,0,pt,Wt),fe("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+pt+"x"+Wt+")."),wt}else return"data"in O&&fe("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),O;return O}function M(O){return O.generateMipmaps}function S(O){r.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,E,j,gt,yt=!1){if(O!==null){if(r[O]!==void 0)return r[O];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pt=E;if(E===r.RED&&(j===r.FLOAT&&(pt=r.R32F),j===r.HALF_FLOAT&&(pt=r.R16F),j===r.UNSIGNED_BYTE&&(pt=r.R8)),E===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(pt=r.R8UI),j===r.UNSIGNED_SHORT&&(pt=r.R16UI),j===r.UNSIGNED_INT&&(pt=r.R32UI),j===r.BYTE&&(pt=r.R8I),j===r.SHORT&&(pt=r.R16I),j===r.INT&&(pt=r.R32I)),E===r.RG&&(j===r.FLOAT&&(pt=r.RG32F),j===r.HALF_FLOAT&&(pt=r.RG16F),j===r.UNSIGNED_BYTE&&(pt=r.RG8)),E===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(pt=r.RG8UI),j===r.UNSIGNED_SHORT&&(pt=r.RG16UI),j===r.UNSIGNED_INT&&(pt=r.RG32UI),j===r.BYTE&&(pt=r.RG8I),j===r.SHORT&&(pt=r.RG16I),j===r.INT&&(pt=r.RG32I)),E===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),j===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),j===r.UNSIGNED_INT&&(pt=r.RGB32UI),j===r.BYTE&&(pt=r.RGB8I),j===r.SHORT&&(pt=r.RGB16I),j===r.INT&&(pt=r.RGB32I)),E===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),j===r.UNSIGNED_INT&&(pt=r.RGBA32UI),j===r.BYTE&&(pt=r.RGBA8I),j===r.SHORT&&(pt=r.RGBA16I),j===r.INT&&(pt=r.RGBA32I)),E===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),E===r.RGBA){const Wt=yt?sc:ke.getTransfer(gt);j===r.FLOAT&&(pt=r.RGBA32F),j===r.HALF_FLOAT&&(pt=r.RGBA16F),j===r.UNSIGNED_BYTE&&(pt=Wt===Je?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(O,E){let j;return O?E===null||E===Da||E===Go?j=r.DEPTH24_STENCIL8:E===ha?j=r.DEPTH32F_STENCIL8:E===Ho&&(j=r.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Da||E===Go?j=r.DEPTH_COMPONENT24:E===ha?j=r.DEPTH_COMPONENT32F:E===Ho&&(j=r.DEPTH_COMPONENT16),j}function B(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==ti&&O.minFilter!==ei?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function z(O){const E=O.target;E.removeEventListener("dispose",z),b(E),E.isVideoTexture&&_.delete(E)}function H(O){const E=O.target;E.removeEventListener("dispose",H),J(E)}function b(O){const E=s.get(O);if(E.__webglInit===void 0)return;const j=O.source,gt=g.get(j);if(gt){const yt=gt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(O),Object.keys(gt).length===0&&g.delete(j)}s.remove(O)}function w(O){const E=s.get(O);r.deleteTexture(E.__webglTexture);const j=O.source,gt=g.get(j);delete gt[E.__cacheKey],h.memory.textures--}function J(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(E.__webglFramebuffer[gt]))for(let yt=0;yt<E.__webglFramebuffer[gt].length;yt++)r.deleteFramebuffer(E.__webglFramebuffer[gt][yt]);else r.deleteFramebuffer(E.__webglFramebuffer[gt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[gt])}else{if(Array.isArray(E.__webglFramebuffer))for(let gt=0;gt<E.__webglFramebuffer.length;gt++)r.deleteFramebuffer(E.__webglFramebuffer[gt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let gt=0;gt<E.__webglColorRenderbuffer.length;gt++)E.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[gt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=O.textures;for(let gt=0,yt=j.length;gt<yt;gt++){const pt=s.get(j[gt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(j[gt])}s.remove(O)}let P=0;function q(){P=0}function nt(){const O=P;return O>=l.maxTextures&&fe("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),P+=1,O}function it(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Z(O,E){const j=s.get(O);if(O.isVideoTexture&&Me(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&j.__version!==O.version){const gt=O.image;if(gt===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,O,E);return}}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+E)}function N(O,E){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){et(j,O,E);return}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+E)}function F(O,E){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){et(j,O,E);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+E)}function tt(O,E){const j=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&j.__version!==O.version){dt(j,O,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+E)}const ft={[zo]:r.REPEAT,[Va]:r.CLAMP_TO_EDGE,[nf]:r.MIRRORED_REPEAT},_t={[ti]:r.NEAREST,[Lx]:r.NEAREST_MIPMAP_NEAREST,[Kl]:r.NEAREST_MIPMAP_LINEAR,[ei]:r.LINEAR,[ku]:r.LINEAR_MIPMAP_NEAREST,[_s]:r.LINEAR_MIPMAP_LINEAR},I={[Ix]:r.NEVER,[Hx]:r.ALWAYS,[Px]:r.LESS,[Zf]:r.LEQUAL,[Fx]:r.EQUAL,[Kf]:r.GEQUAL,[Bx]:r.GREATER,[zx]:r.NOTEQUAL};function W(O,E){if(E.type===ha&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ei||E.magFilter===ku||E.magFilter===Kl||E.magFilter===_s||E.minFilter===ei||E.minFilter===ku||E.minFilter===Kl||E.minFilter===_s)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,ft[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,ft[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,ft[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,_t[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ti||E.minFilter!==Kl&&E.minFilter!==_s||E.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ht(O,E){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",z));const gt=E.source;let yt=g.get(gt);yt===void 0&&(yt={},g.set(gt,yt));const pt=it(E);if(pt!==O.__cacheKey){yt[pt]===void 0&&(yt[pt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,j=!0),yt[pt].usedTimes++;const Wt=yt[O.__cacheKey];Wt!==void 0&&(yt[O.__cacheKey].usedTimes--,Wt.usedTimes===0&&w(E)),O.__cacheKey=pt,O.__webglTexture=yt[pt].texture}return j}function Et(O,E,j){return Math.floor(Math.floor(O/j)/E)}function Ot(O,E,j,gt){const pt=O.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,j,gt,E.data);else{pt.sort((Tt,St)=>Tt.start-St.start);let Wt=0;for(let Tt=1;Tt<pt.length;Tt++){const St=pt[Wt],It=pt[Tt],Nt=St.start+St.count,Ft=Et(It.start,E.width,4),pe=Et(St.start,E.width,4);It.start<=Nt+1&&Ft===pe&&Et(It.start+It.count-1,E.width,4)===Ft?St.count=Math.max(St.count,It.start+It.count-St.start):(++Wt,pt[Wt]=It)}pt.length=Wt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),ee=r.getParameter(r.UNPACK_SKIP_PIXELS),ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,St=pt.length;Tt<St;Tt++){const It=pt[Tt],Nt=Math.floor(It.start/4),Ft=Math.ceil(It.count/4),pe=Nt%E.width,k=Math.floor(Nt/E.width),At=Ft,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,pe,k,At,Rt,j,gt,E.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function et(O,E,j){let gt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=r.TEXTURE_3D);const yt=ht(O,E),pt=E.source;i.bindTexture(gt,O.__webglTexture,r.TEXTURE0+j);const Wt=s.get(pt);if(pt.version!==Wt.__version||yt===!0){i.activeTexture(r.TEXTURE0+j);const wt=ke.getPrimaries(ke.workingColorSpace),ee=E.colorSpace===ms?null:ke.getPrimaries(E.colorSpace),ae=E.colorSpace===ms||wt===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Tt=U(E.image,!1,l.maxTextureSize);Tt=Ne(E,Tt);const St=c.convert(E.format,E.colorSpace),It=c.convert(E.type);let Nt=L(E.internalFormat,St,It,E.colorSpace,E.isVideoTexture);W(gt,E);let Ft;const pe=E.mipmaps,k=E.isVideoTexture!==!0,At=Wt.__version===void 0||yt===!0,Rt=pt.dataReady,Ht=B(E,Tt);if(E.isDepthTexture)Nt=D(E.format===$s,E.type),At&&(k?i.texStorage2D(r.TEXTURE_2D,1,Nt,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,Nt,Tt.width,Tt.height,0,St,It,null));else if(E.isDataTexture)if(pe.length>0){k&&At&&i.texStorage2D(r.TEXTURE_2D,Ht,Nt,pe[0].width,pe[0].height);for(let Mt=0,ut=pe.length;Mt<ut;Mt++)Ft=pe[Mt],k?Rt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ft.width,Ft.height,St,It,Ft.data):i.texImage2D(r.TEXTURE_2D,Mt,Nt,Ft.width,Ft.height,0,St,It,Ft.data);E.generateMipmaps=!1}else k?(At&&i.texStorage2D(r.TEXTURE_2D,Ht,Nt,Tt.width,Tt.height),Rt&&Ot(E,Tt,St,It)):i.texImage2D(r.TEXTURE_2D,0,Nt,Tt.width,Tt.height,0,St,It,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Nt,pe[0].width,pe[0].height,Tt.depth);for(let Mt=0,ut=pe.length;Mt<ut;Mt++)if(Ft=pe[Mt],E.format!==da)if(St!==null)if(k){if(Rt)if(E.layerUpdates.size>0){const Bt=Iv(Ft.width,Ft.height,E.format,E.type);for(const ce of E.layerUpdates){const We=Ft.data.subarray(ce*Bt/Ft.data.BYTES_PER_ELEMENT,(ce+1)*Bt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ce,Ft.width,Ft.height,1,St,We)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ft.width,Ft.height,Tt.depth,St,Ft.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Nt,Ft.width,Ft.height,Tt.depth,0,Ft.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Rt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ft.width,Ft.height,Tt.depth,St,It,Ft.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Nt,Ft.width,Ft.height,Tt.depth,0,St,It,Ft.data)}else{k&&At&&i.texStorage2D(r.TEXTURE_2D,Ht,Nt,pe[0].width,pe[0].height);for(let Mt=0,ut=pe.length;Mt<ut;Mt++)Ft=pe[Mt],E.format!==da?St!==null?k?Rt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ft.width,Ft.height,St,Ft.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Nt,Ft.width,Ft.height,0,Ft.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Rt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ft.width,Ft.height,St,It,Ft.data):i.texImage2D(r.TEXTURE_2D,Mt,Nt,Ft.width,Ft.height,0,St,It,Ft.data)}else if(E.isDataArrayTexture)if(k){if(At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Nt,Tt.width,Tt.height,Tt.depth),Rt)if(E.layerUpdates.size>0){const Mt=Iv(Tt.width,Tt.height,E.format,E.type);for(const ut of E.layerUpdates){const Bt=Tt.data.subarray(ut*Mt/Tt.data.BYTES_PER_ELEMENT,(ut+1)*Mt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,Tt.width,Tt.height,1,St,It,Bt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,St,It,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,Tt.width,Tt.height,Tt.depth,0,St,It,Tt.data);else if(E.isData3DTexture)k?(At&&i.texStorage3D(r.TEXTURE_3D,Ht,Nt,Tt.width,Tt.height,Tt.depth),Rt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,St,It,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,Nt,Tt.width,Tt.height,Tt.depth,0,St,It,Tt.data);else if(E.isFramebufferTexture){if(At)if(k)i.texStorage2D(r.TEXTURE_2D,Ht,Nt,Tt.width,Tt.height);else{let Mt=Tt.width,ut=Tt.height;for(let Bt=0;Bt<Ht;Bt++)i.texImage2D(r.TEXTURE_2D,Bt,Nt,Mt,ut,0,St,It,null),Mt>>=1,ut>>=1}}else if(pe.length>0){if(k&&At){const Mt=Qt(pe[0]);i.texStorage2D(r.TEXTURE_2D,Ht,Nt,Mt.width,Mt.height)}for(let Mt=0,ut=pe.length;Mt<ut;Mt++)Ft=pe[Mt],k?Rt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,St,It,Ft):i.texImage2D(r.TEXTURE_2D,Mt,Nt,St,It,Ft);E.generateMipmaps=!1}else if(k){if(At){const Mt=Qt(Tt);i.texStorage2D(r.TEXTURE_2D,Ht,Nt,Mt.width,Mt.height)}Rt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,St,It,Tt)}else i.texImage2D(r.TEXTURE_2D,0,Nt,St,It,Tt);M(E)&&S(gt),Wt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function dt(O,E,j){if(E.image.length!==6)return;const gt=ht(O,E),yt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+j);const pt=s.get(yt);if(yt.version!==pt.__version||gt===!0){i.activeTexture(r.TEXTURE0+j);const Wt=ke.getPrimaries(ke.workingColorSpace),wt=E.colorSpace===ms?null:ke.getPrimaries(E.colorSpace),ee=E.colorSpace===ms||Wt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let ut=0;ut<6;ut++)!ae&&!Tt?St[ut]=U(E.image[ut],!0,l.maxCubemapSize):St[ut]=Tt?E.image[ut].image:E.image[ut],St[ut]=Ne(E,St[ut]);const It=St[0],Nt=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type),pe=L(E.internalFormat,Nt,Ft,E.colorSpace),k=E.isVideoTexture!==!0,At=pt.__version===void 0||gt===!0,Rt=yt.dataReady;let Ht=B(E,It);W(r.TEXTURE_CUBE_MAP,E);let Mt;if(ae){k&&At&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,pe,It.width,It.height);for(let ut=0;ut<6;ut++){Mt=St[ut].mipmaps;for(let Bt=0;Bt<Mt.length;Bt++){const ce=Mt[Bt];E.format!==da?Nt!==null?k?Rt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt,0,0,ce.width,ce.height,Nt,ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt,pe,ce.width,ce.height,0,ce.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt,0,0,ce.width,ce.height,Nt,Ft,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt,pe,ce.width,ce.height,0,Nt,Ft,ce.data)}}}else{if(Mt=E.mipmaps,k&&At){Mt.length>0&&Ht++;const ut=Qt(St[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,pe,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Tt){k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,St[ut].width,St[ut].height,Nt,Ft,St[ut].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pe,St[ut].width,St[ut].height,0,Nt,Ft,St[ut].data);for(let Bt=0;Bt<Mt.length;Bt++){const We=Mt[Bt].image[ut].image;k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt+1,0,0,We.width,We.height,Nt,Ft,We.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt+1,pe,We.width,We.height,0,Nt,Ft,We.data)}}else{k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Nt,Ft,St[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pe,Nt,Ft,St[ut]);for(let Bt=0;Bt<Mt.length;Bt++){const ce=Mt[Bt];k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt+1,0,0,Nt,Ft,ce.image[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt+1,pe,Nt,Ft,ce.image[ut])}}}M(E)&&S(r.TEXTURE_CUBE_MAP),pt.__version=yt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function bt(O,E,j,gt,yt,pt){const Wt=c.convert(j.format,j.colorSpace),wt=c.convert(j.type),ee=L(j.internalFormat,Wt,wt,j.colorSpace),ae=s.get(E),Tt=s.get(j);if(Tt.__renderTarget=E,!ae.__hasExternalTextures){const St=Math.max(1,E.width>>pt),It=Math.max(1,E.height>>pt);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,pt,ee,St,It,E.depth,0,Wt,wt,null):i.texImage2D(yt,pt,ee,St,It,0,Wt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),en(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,yt,Tt.__webglTexture,0,V(E)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,yt,Tt.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(O,E,j){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const gt=E.depthTexture,yt=gt&&gt.isDepthTexture?gt.type:null,pt=D(E.stencilBuffer,yt),Wt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;en(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),pt,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),pt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Wt,r.RENDERBUFFER,O)}else{const gt=E.textures;for(let yt=0;yt<gt.length;yt++){const pt=gt[yt],Wt=c.convert(pt.format,pt.colorSpace),wt=c.convert(pt.type),ee=L(pt.internalFormat,Wt,wt,pt.colorSpace);en(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),ee,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ee,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Zt(O,E,j){const gt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(E.depthTexture);if(yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),gt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),W(r.TEXTURE_CUBE_MAP,E.depthTexture);const ae=c.convert(E.depthTexture.format),Tt=c.convert(E.depthTexture.type);let St;E.depthTexture.format===Wa?St=r.DEPTH_COMPONENT24:E.depthTexture.format===$s&&(St=r.DEPTH24_STENCIL8);for(let It=0;It<6;It++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,St,E.width,E.height,0,ae,Tt,null)}}else Z(E.depthTexture,0);const pt=yt.__webglTexture,Wt=V(E),wt=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,ee=E.depthTexture.format===$s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Wa)en(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,wt,pt,0,Wt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,wt,pt,0);else if(E.depthTexture.format===$s)en(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,wt,pt,0,Wt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,wt,pt,0);else throw new Error("Unknown depthTexture format")}function ne(O){const E=s.get(O),j=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const gt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),gt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,gt.removeEventListener("dispose",yt)};gt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=gt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let gt=0;gt<6;gt++)Zt(E.__webglFramebuffer[gt],O,gt);else{const gt=O.texture.mipmaps;gt&&gt.length>0?Zt(E.__webglFramebuffer[0],O,0):Zt(E.__webglFramebuffer,O,0)}else if(j){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]===void 0)E.__webglDepthbuffer[gt]=r.createRenderbuffer(),Vt(E.__webglDepthbuffer[gt],O,!1);else{const yt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,pt)}}else{const gt=O.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Vt(E.__webglDepthbuffer,O,!1);else{const yt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ln(O,E,j){const gt=s.get(O);E!==void 0&&bt(gt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&ne(O)}function be(O){const E=O.texture,j=s.get(O),gt=s.get(E);O.addEventListener("dispose",H);const yt=O.textures,pt=O.isWebGLCubeRenderTarget===!0,Wt=yt.length>1;if(Wt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=E.version,h.memory.textures++),pt){j.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[wt]=[];for(let ee=0;ee<E.mipmaps.length;ee++)j.__webglFramebuffer[wt][ee]=r.createFramebuffer()}else j.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)j.__webglFramebuffer[wt]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Wt)for(let wt=0,ee=yt.length;wt<ee;wt++){const ae=s.get(yt[wt]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),h.memory.textures++)}if(O.samples>0&&en(O)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){const ee=yt[wt];j.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[wt]);const ae=c.convert(ee.format,ee.colorSpace),Tt=c.convert(ee.type),St=L(ee.internalFormat,ae,Tt,ee.colorSpace,O.isXRRenderTarget===!0),It=V(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,St,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,j.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(j.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),W(r.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)bt(j.__webglFramebuffer[wt][ee],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ee);else bt(j.__webglFramebuffer[wt],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let wt=0,ee=yt.length;wt<ee;wt++){const ae=yt[wt],Tt=s.get(ae);let St=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(St=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(St,Tt.__webglTexture),W(St,ae),bt(j.__webglFramebuffer,O,ae,r.COLOR_ATTACHMENT0+wt,St,0),M(ae)&&S(St)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,gt.__webglTexture),W(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)bt(j.__webglFramebuffer[ee],O,E,r.COLOR_ATTACHMENT0,wt,ee);else bt(j.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,wt,0);M(E)&&S(wt),i.unbindTexture()}O.depthBuffer&&ne(O)}function ye(O){const E=O.textures;for(let j=0,gt=E.length;j<gt;j++){const yt=E[j];if(M(yt)){const pt=C(O),Wt=s.get(yt).__webglTexture;i.bindTexture(pt,Wt),S(pt),i.unbindTexture()}}}const ze=[],he=[];function fn(O){if(O.samples>0){if(en(O)===!1){const E=O.textures,j=O.width,gt=O.height;let yt=r.COLOR_BUFFER_BIT;const pt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Wt=s.get(O),wt=E.length>1;if(wt)for(let ae=0;ae<E.length;ae++)i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const ee=O.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[ae]);const Tt=s.get(E[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,j,gt,0,0,j,gt,yt,r.NEAREST),m===!0&&(ze.length=0,he.length=0,ze.push(r.COLOR_ATTACHMENT0+ae),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ze.push(pt),he.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,he)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let ae=0;ae<E.length;ae++){i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[ae]);const Tt=s.get(E[ae]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,Tt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function en(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(O){const E=h.render.frame;_.get(O)!==E&&(_.set(O,E),O.update())}function Ne(O,E){const j=O.colorSpace,gt=O.format,yt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==Ir&&j!==ms&&(ke.getTransfer(j)===Je?(gt!==da||yt!==Pi)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",j)),E}function Qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=q,this.setTexture2D=Z,this.setTexture2DArray=N,this.setTexture3D=F,this.setTextureCube=tt,this.rebindTextures=ln,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function pS(r,t){function i(s,l=ms){let c;const h=ke.getTransfer(l);if(s===Pi)return r.UNSIGNED_BYTE;if(s===Vf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===kf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===hm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===dm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===um)return r.BYTE;if(s===fm)return r.SHORT;if(s===Ho)return r.UNSIGNED_SHORT;if(s===Gf)return r.INT;if(s===Da)return r.UNSIGNED_INT;if(s===ha)return r.FLOAT;if(s===Xa)return r.HALF_FLOAT;if(s===pm)return r.ALPHA;if(s===mm)return r.RGB;if(s===da)return r.RGBA;if(s===Wa)return r.DEPTH_COMPONENT;if(s===$s)return r.DEPTH_STENCIL;if(s===Xf)return r.RED;if(s===Wf)return r.RED_INTEGER;if(s===Or)return r.RG;if(s===Yf)return r.RG_INTEGER;if(s===qf)return r.RGBA_INTEGER;if(s===Jl||s===$l||s===tc||s===ec)if(h===Je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$l)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$l)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ec)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===af||s===sf||s===rf||s===of)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===af)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===of)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lf||s===cf||s===uf||s===ff||s===hf||s===df||s===pf)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===lf||s===cf)return h===Je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===uf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ff)return c.COMPRESSED_R11_EAC;if(s===hf)return c.COMPRESSED_SIGNED_R11_EAC;if(s===df)return c.COMPRESSED_RG11_EAC;if(s===pf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===mf||s===gf||s===_f||s===vf||s===xf||s===Sf||s===yf||s===Mf||s===Ef||s===Tf||s===bf||s===Af||s===Rf||s===Cf)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===mf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_f)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ef)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Tf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Af)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cf)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wf||s===Df||s===Uf)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===wf)return h===Je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Df)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Uf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lf||s===Nf||s===Of||s===If)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Lf)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Nf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Of)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===If)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Go?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
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

}`;class qA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Tm(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ua({vertexShader:WA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ge(new Ga(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends Pr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,g=null,y=null,T=null;const U=typeof XRWebGLBinding<"u",M=new qA,S={},C=i.getContextAttributes();let L=null,D=null;const B=[],z=[],H=new we;let b=null;const w=new bi;w.viewport=new bn;const J=new bi;J.viewport=new bn;const P=[w,J],q=new rS;let nt=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let dt=B[et];return dt===void 0&&(dt=new Xu,B[et]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(et){let dt=B[et];return dt===void 0&&(dt=new Xu,B[et]=dt),dt.getGripSpace()},this.getHand=function(et){let dt=B[et];return dt===void 0&&(dt=new Xu,B[et]=dt),dt.getHandSpace()};function Z(et){const dt=z.indexOf(et.inputSource);if(dt===-1)return;const bt=B[dt];bt!==void 0&&(bt.update(et.inputSource,et.frame,p||h),bt.dispatchEvent({type:et.type,data:et.inputSource}))}function N(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",F);for(let et=0;et<B.length;et++){const dt=z[et];dt!==null&&(z[et]=null,B[et].disconnect(dt))}nt=null,it=null,M.reset();for(const et in S)delete S[et];t.setRenderTarget(L),y=null,g=null,x=null,l=null,D=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&U&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",N),l.addEventListener("inputsourceschange",F),C.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(H),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Vt=null,Zt=null;C.depth&&(Zt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=C.stencil?$s:Wa,Vt=C.stencil?Go:Da);const ne={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(ne),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new wa(g.textureWidth,g.textureHeight,{format:da,type:Pi,depthTexture:new Xo(g.textureWidth,g.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new wa(y.framebufferWidth,y.framebufferHeight,{format:da,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(et){for(let dt=0;dt<et.removed.length;dt++){const bt=et.removed[dt],Vt=z.indexOf(bt);Vt>=0&&(z[Vt]=null,B[Vt].disconnect(bt))}for(let dt=0;dt<et.added.length;dt++){const bt=et.added[dt];let Vt=z.indexOf(bt);if(Vt===-1){for(let ne=0;ne<B.length;ne++)if(ne>=z.length){z.push(bt),Vt=ne;break}else if(z[ne]===null){z[ne]=bt,Vt=ne;break}if(Vt===-1)break}const Zt=B[Vt];Zt&&Zt.connect(bt)}}const tt=new Q,ft=new Q;function _t(et,dt,bt){tt.setFromMatrixPosition(dt.matrixWorld),ft.setFromMatrixPosition(bt.matrixWorld);const Vt=tt.distanceTo(ft),Zt=dt.projectionMatrix.elements,ne=bt.projectionMatrix.elements,ln=Zt[14]/(Zt[10]-1),be=Zt[14]/(Zt[10]+1),ye=(Zt[9]+1)/Zt[5],ze=(Zt[9]-1)/Zt[5],he=(Zt[8]-1)/Zt[0],fn=(ne[8]+1)/ne[0],V=ln*he,en=ln*fn,Me=Vt/(-he+fn),Ne=Me*-he;if(dt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ne),et.translateZ(Me),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Zt[10]===-1)et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Qt=ln+Me,O=be+Me,E=V-Ne,j=en+(Vt-Ne),gt=ye*be/O*Qt,yt=ze*be/O*Qt;et.projectionMatrix.makePerspective(E,j,gt,yt,Qt,O),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function I(et,dt){dt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(dt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let dt=et.near,bt=et.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),q.near=J.near=w.near=dt,q.far=J.far=w.far=bt,(nt!==q.near||it!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),nt=q.near,it=q.far),q.layers.mask=et.layers.mask|6,w.layers.mask=q.layers.mask&-5,J.layers.mask=q.layers.mask&-3;const Vt=et.parent,Zt=q.cameras;I(q,Vt);for(let ne=0;ne<Zt.length;ne++)I(Zt[ne],Vt);Zt.length===2?_t(q,w,J):q.projectionMatrix.copy(w.projectionMatrix),W(et,q,Vt)};function W(et,dt,bt){bt===null?et.matrix.copy(dt.matrixWorld):(et.matrix.copy(bt.matrixWorld),et.matrix.invert(),et.matrix.multiply(dt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ko*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(et){m=et,g!==null&&(g.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(et){return S[et]};let ht=null;function Et(et,dt){if(_=dt.getViewerPose(p||h),T=dt,_!==null){const bt=_.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let Vt=!1;bt.length!==q.cameras.length&&(q.cameras.length=0,Vt=!0);for(let be=0;be<bt.length;be++){const ye=bt[be];let ze=null;if(y!==null)ze=y.getViewport(ye);else{const fn=x.getViewSubImage(g,ye);ze=fn.viewport,be===0&&(t.setRenderTargetTextures(D,fn.colorTexture,fn.depthStencilTexture),t.setRenderTarget(D))}let he=P[be];he===void 0&&(he=new bi,he.layers.enable(be),he.viewport=new bn,P[be]=he),he.matrix.fromArray(ye.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ye.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ze.x,ze.y,ze.width,ze.height),be===0&&(q.matrix.copy(he.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Vt===!0&&q.cameras.push(he)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){x=s.getBinding();const be=x.getDepthInformation(bt[0]);be&&be.isValid&&be.texture&&M.init(be,l.renderState)}if(Zt&&Zt.includes("camera-access")&&U){t.state.unbindTexture(),x=s.getBinding();for(let be=0;be<bt.length;be++){const ye=bt[be].camera;if(ye){let ze=S[ye];ze||(ze=new Tm,S[ye]=ze);const he=x.getCameraImage(ye);ze.sourceTexture=he}}}}for(let bt=0;bt<B.length;bt++){const Vt=z[bt],Zt=B[bt];Vt!==null&&Zt!==void 0&&Zt.update(Vt,dt,p||h)}ht&&ht(et,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),T=null}const Ot=new cS;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(et){ht=et},this.dispose=function(){}}}const Ar=new ma,ZA=new on;function KA(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Qx(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,L,D){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,D)):S.isMeshMatcapMaterial?(c(M,S),T(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),U(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,C,L):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===_i&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===_i&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),L=C.envMap,D=C.envMapRotation;L&&(M.envMap.value=L,Ar.copy(D),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),M.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(Ar)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===_i&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function U(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function QA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const D=L.program;s.uniformBlockBinding(C,D)}function p(C,L){let D=l[C.id];D===void 0&&(T(C),D=_(C),l[C.id]=D,C.addEventListener("dispose",M));const B=L.program;s.updateUBOMapping(C,B);const z=t.render.frame;c[C.id]!==z&&(g(C),c[C.id]=z)}function _(C){const L=x();C.__bindingPointIndex=L;const D=r.createBuffer(),B=C.__size,z=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function x(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],D=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,H=D.length;z<H;z++){const b=Array.isArray(D[z])?D[z]:[D[z]];for(let w=0,J=b.length;w<J;w++){const P=b[w];if(y(P,z,w,B)===!0){const q=P.__offset,nt=Array.isArray(P.value)?P.value:[P.value];let it=0;for(let Z=0;Z<nt.length;Z++){const N=nt[Z],F=U(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,q+it,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,it),it+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,L,D,B){const z=C.value,H=L+"_"+D;if(B[H]===void 0)return typeof z=="number"||typeof z=="boolean"?B[H]=z:B[H]=z.clone(),!0;{const b=B[H];if(typeof z=="number"||typeof z=="boolean"){if(b!==z)return B[H]=z,!0}else if(b.equals(z)===!1)return b.copy(z),!0}return!1}function T(C){const L=C.uniforms;let D=0;const B=16;for(let H=0,b=L.length;H<b;H++){const w=Array.isArray(L[H])?L[H]:[L[H]];for(let J=0,P=w.length;J<P;J++){const q=w[J],nt=Array.isArray(q.value)?q.value:[q.value];for(let it=0,Z=nt.length;it<Z;it++){const N=nt[it],F=U(N),tt=D%B,ft=tt%F.boundary,_t=tt+ft;D+=ft,_t!==0&&B-_t<F.storage&&(D+=B-_t),q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=F.storage}}}const z=D%B;return z>0&&(D+=B-z),C.__size=D,C.__cache={},this}function U(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):fe("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const JA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ha=null;function $A(){return Ha===null&&(Ha=new Mm(JA,16,16,Or,Xa),Ha.name="DFG_LUT",Ha.minFilter=ei,Ha.magFilter=ei,Ha.wrapS=Va,Ha.wrapT=Va,Ha.generateMipmaps=!1,Ha.needsUpdate=!0),Ha}class mS{constructor(t={}){const{canvas:i=Gx(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Pi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const U=y,M=new Set([qf,Yf,Wf]),S=new Set([Pi,Da,Ho,Go,Vf,kf]),C=new Uint32Array(4),L=new Int32Array(4);let D=null,B=null;const z=[],H=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let J=!1;this._outputColorSpace=Yn;let P=0,q=0,nt=null,it=-1,Z=null;const N=new bn,F=new bn;let tt=null;const ft=new re(0);let _t=0,I=i.width,W=i.height,ht=1,Et=null,Ot=null;const et=new bn(0,0,I,W),dt=new bn(0,0,I,W);let bt=!1;const Vt=new $f;let Zt=!1,ne=!1;const ln=new on,be=new Q,ye=new bn,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function fn(){return nt===null?ht:1}let V=s;function en(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bf}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",We,!1),V===null){const Y="webgl2";if(V=en(Y,R),V===null)throw en(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ve("WebGLRenderer: "+R.message),R}let Me,Ne,Qt,O,E,j,gt,yt,pt,Wt,wt,ee,ae,Tt,St,It,Nt,Ft,pe,k,At,Rt,Ht;function Mt(){Me=new eb(V),Me.init(),At=new pS(V,Me),Ne=new q1(V,Me,t,At),Qt=new kA(V,Me),Ne.reversedDepthBuffer&&g&&Qt.buffers.depth.setReversed(!0),O=new ab(V),E=new wA,j=new XA(V,Me,Qt,E,Ne,At,O),gt=new tb(w),yt=new cE(V),Rt=new W1(V,yt),pt=new nb(V,yt,O,Rt),Wt=new rb(V,pt,yt,Rt,O),Ft=new sb(V,Ne,j),St=new j1(E),wt=new CA(w,gt,Me,Ne,Rt,St),ee=new KA(w,E),ae=new UA,Tt=new FA(Me),Nt=new X1(w,gt,Qt,Wt,T,m),It=new VA(w,Wt,Ne),Ht=new QA(V,O,Ne,Qt),pe=new Y1(V,Me,O),k=new ib(V,Me,O),O.programs=wt.programs,w.capabilities=Ne,w.extensions=Me,w.properties=E,w.renderLists=ae,w.shadowMap=It,w.state=Qt,w.info=O}Mt(),U!==Pi&&(b=new lb(U,i.width,i.height,l,c));const ut=new jA(w,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(R){R!==void 0&&(ht=R,this.setSize(I,W,!1))},this.getSize=function(R){return R.set(I,W)},this.setSize=function(R,Y,lt=!0){if(ut.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,W=Y,i.width=Math.floor(R*ht),i.height=Math.floor(Y*ht),lt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(I*ht,W*ht).floor()},this.setDrawingBufferSize=function(R,Y,lt){I=R,W=Y,ht=lt,i.width=Math.floor(R*lt),i.height=Math.floor(Y*lt),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(U===Pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,Y,lt,at){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,Y,lt,at),Qt.viewport(N.copy(et).multiplyScalar(ht).round())},this.getScissor=function(R){return R.copy(dt)},this.setScissor=function(R,Y,lt,at){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,Y,lt,at),Qt.scissor(F.copy(dt).multiplyScalar(ht).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){Qt.setScissorTest(bt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){Ot=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,lt=!0){let at=0;if(R){let $=!1;if(nt!==null){const Lt=nt.texture.format;$=M.has(Lt)}if($){const Lt=nt.texture.type,kt=S.has(Lt),Ut=Nt.getClearColor(),Yt=Nt.getClearAlpha(),Jt=Ut.r,oe=Ut.g,ue=Ut.b;kt?(C[0]=Jt,C[1]=oe,C[2]=ue,C[3]=Yt,V.clearBufferuiv(V.COLOR,0,C)):(L[0]=Jt,L[1]=oe,L[2]=ue,L[3]=Yt,V.clearBufferiv(V.COLOR,0,L))}else at|=V.COLOR_BUFFER_BIT}Y&&(at|=V.DEPTH_BUFFER_BIT),lt&&(at|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&V.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",We,!1),Nt.dispose(),ae.dispose(),Tt.dispose(),E.dispose(),gt.dispose(),Wt.dispose(),Rt.dispose(),Ht.dispose(),wt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ss),ut.removeEventListener("sessionend",ys),Zi.stop()};function Bt(R){R.preventDefault(),Zp("WebGLRenderer: Context Lost."),J=!0}function ce(){Zp("WebGLRenderer: Context Restored."),J=!1;const R=O.autoReset,Y=It.enabled,lt=It.autoUpdate,at=It.needsUpdate,$=It.type;Mt(),O.autoReset=R,It.enabled=Y,It.autoUpdate=lt,It.needsUpdate=at,It.type=$}function We(R){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const Y=R.target;Y.removeEventListener("dispose",Ee),ii(Y)}function ii(R){Ai(R),E.remove(R)}function Ai(R){const Y=E.get(R).programs;Y!==void 0&&(Y.forEach(function(lt){wt.releaseProgram(lt)}),R.isShaderMaterial&&wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,lt,at,$,Lt){Y===null&&(Y=ze);const kt=$.isMesh&&$.matrixWorld.determinant()<0,Ut=_a(R,Y,lt,at,$);Qt.setMaterial(at,kt);let Yt=lt.index,Jt=1;if(at.wireframe===!0){if(Yt=pt.getWireframeAttribute(lt),Yt===void 0)return;Jt=2}const oe=lt.drawRange,ue=lt.attributes.position;let Gt=oe.start*Jt,me=(oe.start+oe.count)*Jt;Lt!==null&&(Gt=Math.max(Gt,Lt.start*Jt),me=Math.min(me,(Lt.start+Lt.count)*Jt)),Yt!==null?(Gt=Math.max(Gt,0),me=Math.min(me,Yt.count)):ue!=null&&(Gt=Math.max(Gt,0),me=Math.min(me,ue.count));const nn=me-Gt;if(nn<0||nn===1/0)return;Rt.setup($,at,Ut,lt,Yt);let Ke,Oe=pe;if(Yt!==null&&(Ke=yt.get(Yt),Oe=k,Oe.setIndex(Ke)),$.isMesh)at.wireframe===!0?(Qt.setLineWidth(at.wireframeLinewidth*fn()),Oe.setMode(V.LINES)):Oe.setMode(V.TRIANGLES);else if($.isLine){let An=at.linewidth;An===void 0&&(An=1),Qt.setLineWidth(An*fn()),$.isLineSegments?Oe.setMode(V.LINES):$.isLineLoop?Oe.setMode(V.LINE_LOOP):Oe.setMode(V.LINE_STRIP)}else $.isPoints?Oe.setMode(V.POINTS):$.isSprite&&Oe.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)rc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Oe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const An=$._multiDrawStarts,Xt=$._multiDrawCounts,Zn=$._multiDrawCount,se=Yt?yt.get(Yt).bytesPerElement:1,Rn=E.get(at).currentProgram.getUniforms();for(let hi=0;hi<Zn;hi++)Rn.setValue(V,"_gl_DrawID",hi),Oe.render(An[hi]/se,Xt[hi])}else if($.isInstancedMesh)Oe.renderInstances(Gt,nn,$.count);else if(lt.isInstancedBufferGeometry){const An=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Xt=Math.min(lt.instanceCount,An);Oe.renderInstances(Gt,nn,Xt)}else Oe.render(Gt,nn)};function La(R,Y,lt){R.transparent===!0&&R.side===Vn&&R.forceSinglePass===!1?(R.side=_i,R.needsUpdate=!0,ga(R,Y,lt),R.side=xs,R.needsUpdate=!0,ga(R,Y,lt),R.side=Vn):ga(R,Y,lt)}this.compile=function(R,Y,lt=null){lt===null&&(lt=R),B=Tt.get(lt),B.init(Y),H.push(B),lt.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(B.pushLight($),$.castShadow&&B.pushShadow($))}),R!==lt&&R.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(B.pushLight($),$.castShadow&&B.pushShadow($))}),B.setupLights();const at=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Lt=$.material;if(Lt)if(Array.isArray(Lt))for(let kt=0;kt<Lt.length;kt++){const Ut=Lt[kt];La(Ut,lt,$),at.add(Ut)}else La(Lt,lt,$),at.add(Lt)}),B=H.pop(),at},this.compileAsync=function(R,Y,lt=null){const at=this.compile(R,Y,lt);return new Promise($=>{function Lt(){if(at.forEach(function(kt){E.get(kt).currentProgram.isReady()&&at.delete(kt)}),at.size===0){$(R);return}setTimeout(Lt,10)}Me.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ya=null;function zr(R){Ya&&Ya(R)}function Ss(){Zi.stop()}function ys(){Zi.start()}const Zi=new cS;Zi.setAnimationLoop(zr),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(R){Ya=R,ut.setAnimationLoop(R),R===null?Zi.stop():Zi.start()},ut.addEventListener("sessionstart",Ss),ut.addEventListener("sessionend",ys),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;const lt=ut.enabled===!0&&ut.isPresenting===!0,at=b!==null&&(nt===null||lt)&&b.begin(w,nt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Y),Y=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,nt),B=Tt.get(R,H.length),B.init(Y),H.push(B),ln.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Vt.setFromProjectionMatrix(ln,Ra,Y.reversedDepth),ne=this.localClippingEnabled,Zt=St.init(this.clippingPlanes,ne),D=ae.get(R,z.length),D.init(),z.push(D),ut.enabled===!0&&ut.isPresenting===!0){const kt=w.xr.getDepthSensingMesh();kt!==null&&Ms(kt,Y,-1/0,w.sortObjects)}Ms(R,Y,0,w.sortObjects),D.finish(),w.sortObjects===!0&&D.sort(Et,Ot),he=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,he&&Nt.addToRenderList(D,R),this.info.render.frame++,Zt===!0&&St.beginShadows();const $=B.state.shadowsArray;if(It.render($,R,Y),Zt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&b.hasRenderPass())===!1){const kt=D.opaque,Ut=D.transmissive;if(B.setupLights(),Y.isArrayCamera){const Yt=Y.cameras;if(Ut.length>0)for(let Jt=0,oe=Yt.length;Jt<oe;Jt++){const ue=Yt[Jt];Mn(kt,Ut,R,ue)}he&&Nt.render(R);for(let Jt=0,oe=Yt.length;Jt<oe;Jt++){const ue=Yt[Jt];Fi(D,R,ue,ue.viewport)}}else Ut.length>0&&Mn(kt,Ut,R,Y),he&&Nt.render(R),Fi(D,R,Y)}nt!==null&&q===0&&(j.updateMultisampleRenderTarget(nt),j.updateRenderTargetMipmap(nt)),at&&b.end(w),R.isScene===!0&&R.onAfterRender(w,R,Y),Rt.resetDefaultState(),it=-1,Z=null,H.pop(),H.length>0?(B=H[H.length-1],Zt===!0&&St.setGlobalState(w.clippingPlanes,B.state.camera)):B=null,z.pop(),z.length>0?D=z[z.length-1]:D=null};function Ms(R,Y,lt,at){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){at&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ln);const kt=Wt.update(R),Ut=R.material;Ut.visible&&D.push(R,kt,Ut,lt,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const kt=Wt.update(R),Ut=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ye.copy(kt.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(ln)),Array.isArray(Ut)){const Yt=kt.groups;for(let Jt=0,oe=Yt.length;Jt<oe;Jt++){const ue=Yt[Jt],Gt=Ut[ue.materialIndex];Gt&&Gt.visible&&D.push(R,kt,Gt,lt,ye.z,ue)}}else Ut.visible&&D.push(R,kt,Ut,lt,ye.z,null)}}const Lt=R.children;for(let kt=0,Ut=Lt.length;kt<Ut;kt++)Ms(Lt[kt],Y,lt,at)}function Fi(R,Y,lt,at){const{opaque:$,transmissive:Lt,transparent:kt}=R;B.setupLightsView(lt),Zt===!0&&St.setGlobalState(w.clippingPlanes,lt),at&&Qt.viewport(N.copy(at)),$.length>0&&hn($,Y,lt),Lt.length>0&&hn(Lt,Y,lt),kt.length>0&&hn(kt,Y,lt),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function Mn(R,Y,lt,at){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[at.id]===void 0){const Gt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[at.id]=new wa(1,1,{generateMipmaps:!0,type:Gt?Xa:Pi,minFilter:_s,samples:Math.max(4,Ne.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const Lt=B.state.transmissionRenderTarget[at.id],kt=at.viewport||N;Lt.setSize(kt.z*w.transmissionResolutionScale,kt.w*w.transmissionResolutionScale);const Ut=w.getRenderTarget(),Yt=w.getActiveCubeFace(),Jt=w.getActiveMipmapLevel();w.setRenderTarget(Lt),w.getClearColor(ft),_t=w.getClearAlpha(),_t<1&&w.setClearColor(16777215,.5),w.clear(),he&&Nt.render(lt);const oe=w.toneMapping;w.toneMapping=Ca;const ue=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),B.setupLightsView(at),Zt===!0&&St.setGlobalState(w.clippingPlanes,at),hn(R,lt,at),j.updateMultisampleRenderTarget(Lt),j.updateRenderTargetMipmap(Lt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let me=0,nn=Y.length;me<nn;me++){const Ke=Y[me],{object:Oe,geometry:An,material:Xt,group:Zn}=Ke;if(Xt.side===Vn&&Oe.layers.test(at.layers)){const se=Xt.side;Xt.side=_i,Xt.needsUpdate=!0,Ki(Oe,lt,at,An,Xt,Zn),Xt.side=se,Xt.needsUpdate=!0,Gt=!0}}Gt===!0&&(j.updateMultisampleRenderTarget(Lt),j.updateRenderTargetMipmap(Lt))}w.setRenderTarget(Ut,Yt,Jt),w.setClearColor(ft,_t),ue!==void 0&&(at.viewport=ue),w.toneMapping=oe}function hn(R,Y,lt){const at=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Lt=R.length;$<Lt;$++){const kt=R[$],{object:Ut,geometry:Yt,group:Jt}=kt;let oe=kt.material;oe.allowOverride===!0&&at!==null&&(oe=at),Ut.layers.test(lt.layers)&&Ki(Ut,Y,lt,Yt,oe,Jt)}}function Ki(R,Y,lt,at,$,Lt){R.onBeforeRender(w,Y,lt,at,$,Lt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(w,Y,lt,at,R,Lt),$.transparent===!0&&$.side===Vn&&$.forceSinglePass===!1?($.side=_i,$.needsUpdate=!0,w.renderBufferDirect(lt,Y,at,$,R,Lt),$.side=xs,$.needsUpdate=!0,w.renderBufferDirect(lt,Y,at,$,R,Lt),$.side=Vn):w.renderBufferDirect(lt,Y,at,$,R,Lt),R.onAfterRender(w,Y,lt,at,$,Lt)}function ga(R,Y,lt){Y.isScene!==!0&&(Y=ze);const at=E.get(R),$=B.state.lights,Lt=B.state.shadowsArray,kt=$.state.version,Ut=wt.getParameters(R,$.state,Lt,Y,lt),Yt=wt.getProgramCacheKey(Ut);let Jt=at.programs;at.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,at.fog=Y.fog;const oe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;at.envMap=gt.get(R.envMap||at.environment,oe),at.envMapRotation=at.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",Ee),Jt=new Map,at.programs=Jt);let ue=Jt.get(Yt);if(ue!==void 0){if(at.currentProgram===ue&&at.lightsStateVersion===kt)return fi(R,Ut),ue}else Ut.uniforms=wt.getUniforms(R),R.onBeforeCompile(Ut,w),ue=wt.acquireProgram(Ut,Yt),Jt.set(Yt,ue),at.uniforms=Ut.uniforms;const Gt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=St.uniform),fi(R,Ut),at.needsLights=vn(R),at.lightsStateVersion=kt,at.needsLights&&(Gt.ambientLightColor.value=$.state.ambient,Gt.lightProbe.value=$.state.probe,Gt.directionalLights.value=$.state.directional,Gt.directionalLightShadows.value=$.state.directionalShadow,Gt.spotLights.value=$.state.spot,Gt.spotLightShadows.value=$.state.spotShadow,Gt.rectAreaLights.value=$.state.rectArea,Gt.ltc_1.value=$.state.rectAreaLTC1,Gt.ltc_2.value=$.state.rectAreaLTC2,Gt.pointLights.value=$.state.point,Gt.pointLightShadows.value=$.state.pointShadow,Gt.hemisphereLights.value=$.state.hemi,Gt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Gt.spotLightMatrix.value=$.state.spotLightMatrix,Gt.spotLightMap.value=$.state.spotLightMap,Gt.pointShadowMatrix.value=$.state.pointShadowMatrix),at.currentProgram=ue,at.uniformsList=null,ue}function En(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Yu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function fi(R,Y){const lt=E.get(R);lt.outputColorSpace=Y.outputColorSpace,lt.batching=Y.batching,lt.batchingColor=Y.batchingColor,lt.instancing=Y.instancing,lt.instancingColor=Y.instancingColor,lt.instancingMorph=Y.instancingMorph,lt.skinning=Y.skinning,lt.morphTargets=Y.morphTargets,lt.morphNormals=Y.morphNormals,lt.morphColors=Y.morphColors,lt.morphTargetsCount=Y.morphTargetsCount,lt.numClippingPlanes=Y.numClippingPlanes,lt.numIntersection=Y.numClipIntersection,lt.vertexAlphas=Y.vertexAlphas,lt.vertexTangents=Y.vertexTangents,lt.toneMapping=Y.toneMapping}function _a(R,Y,lt,at,$){Y.isScene!==!0&&(Y=ze),j.resetTextureUnits();const Lt=Y.fog,kt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Y.environment:null,Ut=nt===null?w.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ir,Yt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Jt=gt.get(at.envMap||kt,Yt),oe=at.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ue=!!lt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Gt=!!lt.morphAttributes.position,me=!!lt.morphAttributes.normal,nn=!!lt.morphAttributes.color;let Ke=Ca;at.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ke=w.toneMapping);const Oe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,An=Oe!==void 0?Oe.length:0,Xt=E.get(at),Zn=B.state.lights;if(Zt===!0&&(ne===!0||R!==Z)){const Tn=R===Z&&at.id===it;St.setState(at,R,Tn)}let se=!1;at.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Zn.state.version||Xt.outputColorSpace!==Ut||$.isBatchedMesh&&Xt.batching===!1||!$.isBatchedMesh&&Xt.batching===!0||$.isBatchedMesh&&Xt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Xt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Xt.instancing===!1||!$.isInstancedMesh&&Xt.instancing===!0||$.isSkinnedMesh&&Xt.skinning===!1||!$.isSkinnedMesh&&Xt.skinning===!0||$.isInstancedMesh&&Xt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xt.instancingMorph===!1&&$.morphTexture!==null||Xt.envMap!==Jt||at.fog===!0&&Xt.fog!==Lt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==St.numPlanes||Xt.numIntersection!==St.numIntersection)||Xt.vertexAlphas!==oe||Xt.vertexTangents!==ue||Xt.morphTargets!==Gt||Xt.morphNormals!==me||Xt.morphColors!==nn||Xt.toneMapping!==Ke||Xt.morphTargetsCount!==An)&&(se=!0):(se=!0,Xt.__version=at.version);let Rn=Xt.currentProgram;se===!0&&(Rn=ga(at,Y,$));let hi=!1,Ri=!1,di=!1;const Xe=Rn.getUniforms(),mn=Xt.uniforms;if(Qt.useProgram(Rn.program)&&(hi=!0,Ri=!0,di=!0),at.id!==it&&(it=at.id,Ri=!0),hi||Z!==R){Qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Xe.setValue(V,"projectionMatrix",R.projectionMatrix),Xe.setValue(V,"viewMatrix",R.matrixWorldInverse);const Ci=Xe.map.cameraPosition;Ci!==void 0&&Ci.setValue(V,be.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&Xe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Xe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,Ri=!0,di=!0)}if(Xt.needsLights&&(Zn.state.directionalShadowMap.length>0&&Xe.setValue(V,"directionalShadowMap",Zn.state.directionalShadowMap,j),Zn.state.spotShadowMap.length>0&&Xe.setValue(V,"spotShadowMap",Zn.state.spotShadowMap,j),Zn.state.pointShadowMap.length>0&&Xe.setValue(V,"pointShadowMap",Zn.state.pointShadowMap,j)),$.isSkinnedMesh){Xe.setOptional(V,$,"bindMatrix"),Xe.setOptional(V,$,"bindMatrixInverse");const Tn=$.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Xe.setValue(V,"boneTexture",Tn.boneTexture,j))}$.isBatchedMesh&&(Xe.setOptional(V,$,"batchingTexture"),Xe.setValue(V,"batchingTexture",$._matricesTexture,j),Xe.setOptional(V,$,"batchingIdTexture"),Xe.setValue(V,"batchingIdTexture",$._indirectTexture,j),Xe.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Xe.setValue(V,"batchingColorTexture",$._colorsTexture,j));const Kn=lt.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&Ft.update($,lt,Rn),(Ri||Xt.receiveShadow!==$.receiveShadow)&&(Xt.receiveShadow=$.receiveShadow,Xe.setValue(V,"receiveShadow",$.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Y.environment!==null&&(mn.envMapIntensity.value=Y.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=$A()),Ri&&(Xe.setValue(V,"toneMappingExposure",w.toneMappingExposure),Xt.needsLights&&Qi(mn,di),Lt&&at.fog===!0&&ee.refreshFogUniforms(mn,Lt),ee.refreshMaterialUniforms(mn,at,ht,W,B.state.transmissionRenderTarget[R.id]),Yu.upload(V,En(Xt),mn,j)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Yu.upload(V,En(Xt),mn,j),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Xe.setValue(V,"center",$.center),Xe.setValue(V,"modelViewMatrix",$.modelViewMatrix),Xe.setValue(V,"normalMatrix",$.normalMatrix),Xe.setValue(V,"modelMatrix",$.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Tn=at.uniformsGroups;for(let Ci=0,Bi=Tn.length;Ci<Bi;Ci++){const qa=Tn[Ci];Ht.update(qa,Rn),Ht.bind(qa,Rn)}}return Rn}function Qi(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function vn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(R,Y,lt){const at=E.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Y,E.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:lt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const lt=E.get(R);lt.__webglFramebuffer=Y,lt.__useDefaultFramebuffer=Y===void 0};const Ji=V.createFramebuffer();this.setRenderTarget=function(R,Y=0,lt=0){nt=R,P=Y,q=lt;let at=null,$=!1,Lt=!1;if(R){const Ut=E.get(R);if(Ut.__useDefaultFramebuffer!==void 0){Qt.bindFramebuffer(V.FRAMEBUFFER,Ut.__webglFramebuffer),N.copy(R.viewport),F.copy(R.scissor),tt=R.scissorTest,Qt.viewport(N),Qt.scissor(F),Qt.setScissorTest(tt),it=-1;return}else if(Ut.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Ut.__hasExternalTextures)j.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const oe=R.depthTexture;if(Ut.__boundDepthTexture!==oe){if(oe!==null&&E.has(oe)&&(R.width!==oe.image.width||R.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Lt=!0);const Jt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[Y])?at=Jt[Y][lt]:at=Jt[Y],$=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?at=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?at=Jt[lt]:at=Jt,N.copy(R.viewport),F.copy(R.scissor),tt=R.scissorTest}else N.copy(et).multiplyScalar(ht).floor(),F.copy(dt).multiplyScalar(ht).floor(),tt=bt;if(lt!==0&&(at=Ji),Qt.bindFramebuffer(V.FRAMEBUFFER,at)&&Qt.drawBuffers(R,at),Qt.viewport(N),Qt.scissor(F),Qt.setScissorTest(tt),$){const Ut=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ut.__webglTexture,lt)}else if(Lt){const Ut=Y;for(let Yt=0;Yt<R.textures.length;Yt++){const Jt=E.get(R.textures[Yt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Yt,Jt.__webglTexture,lt,Ut)}}else if(R!==null&&lt!==0){const Ut=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ut.__webglTexture,lt)}it=-1},this.readRenderTargetPixels=function(R,Y,lt,at,$,Lt,kt,Ut=0){if(!(R&&R.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt){Qt.bindFramebuffer(V.FRAMEBUFFER,Yt);try{const Jt=R.textures[Ut],oe=Jt.format,ue=Jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut),!Ne.textureFormatReadable(oe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(ue)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-at&&lt>=0&&lt<=R.height-$&&V.readPixels(Y,lt,at,$,At.convert(oe),At.convert(ue),Lt)}finally{const Jt=nt!==null?E.get(nt).__webglFramebuffer:null;Qt.bindFramebuffer(V.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,lt,at,$,Lt,kt,Ut=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt)if(Y>=0&&Y<=R.width-at&&lt>=0&&lt<=R.height-$){Qt.bindFramebuffer(V.FRAMEBUFFER,Yt);const Jt=R.textures[Ut],oe=Jt.format,ue=Jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut),!Ne.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.bufferData(V.PIXEL_PACK_BUFFER,Lt.byteLength,V.STREAM_READ),V.readPixels(Y,lt,at,$,At.convert(oe),At.convert(ue),0);const me=nt!==null?E.get(nt).__webglFramebuffer:null;Qt.bindFramebuffer(V.FRAMEBUFFER,me);const nn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await xM(V,nn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Lt),V.deleteBuffer(Gt),V.deleteSync(nn),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,lt=0){const at=Math.pow(2,-lt),$=Math.floor(R.image.width*at),Lt=Math.floor(R.image.height*at),kt=Y!==null?Y.x:0,Ut=Y!==null?Y.y:0;j.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,kt,Ut,$,Lt),Qt.unbindTexture()};const Na=V.createFramebuffer(),va=V.createFramebuffer();this.copyTextureToTexture=function(R,Y,lt=null,at=null,$=0,Lt=0){let kt,Ut,Yt,Jt,oe,ue,Gt,me,nn;const Ke=R.isCompressedTexture?R.mipmaps[Lt]:R.image;if(lt!==null)kt=lt.max.x-lt.min.x,Ut=lt.max.y-lt.min.y,Yt=lt.isBox3?lt.max.z-lt.min.z:1,Jt=lt.min.x,oe=lt.min.y,ue=lt.isBox3?lt.min.z:0;else{const mn=Math.pow(2,-$);kt=Math.floor(Ke.width*mn),Ut=Math.floor(Ke.height*mn),R.isDataArrayTexture?Yt=Ke.depth:R.isData3DTexture?Yt=Math.floor(Ke.depth*mn):Yt=1,Jt=0,oe=0,ue=0}at!==null?(Gt=at.x,me=at.y,nn=at.z):(Gt=0,me=0,nn=0);const Oe=At.convert(Y.format),An=At.convert(Y.type);let Xt;Y.isData3DTexture?(j.setTexture3D(Y,0),Xt=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(j.setTexture2DArray(Y,0),Xt=V.TEXTURE_2D_ARRAY):(j.setTexture2D(Y,0),Xt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Zn=V.getParameter(V.UNPACK_ROW_LENGTH),se=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Rn=V.getParameter(V.UNPACK_SKIP_PIXELS),hi=V.getParameter(V.UNPACK_SKIP_ROWS),Ri=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ke.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ke.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,oe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ue);const di=R.isDataArrayTexture||R.isData3DTexture,Xe=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const mn=E.get(R),Kn=E.get(Y),Tn=E.get(mn.__renderTarget),Ci=E.get(Kn.__renderTarget);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Bi=0;Bi<Yt;Bi++)di&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,$,ue+Bi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Lt,nn+Bi)),V.blitFramebuffer(Jt,oe,kt,Ut,Gt,me,kt,Ut,V.DEPTH_BUFFER_BIT,V.NEAREST);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||E.has(R)){const mn=E.get(R),Kn=E.get(Y);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,Na),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,va);for(let Tn=0;Tn<Yt;Tn++)di?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,$,ue+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,$),Xe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Kn.__webglTexture,Lt,nn+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Kn.__webglTexture,Lt),$!==0?V.blitFramebuffer(Jt,oe,kt,Ut,Gt,me,kt,Ut,V.COLOR_BUFFER_BIT,V.NEAREST):Xe?V.copyTexSubImage3D(Xt,Lt,Gt,me,nn+Tn,Jt,oe,kt,Ut):V.copyTexSubImage2D(Xt,Lt,Gt,me,Jt,oe,kt,Ut);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Xe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Xt,Lt,Gt,me,nn,kt,Ut,Yt,Oe,An,Ke.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Xt,Lt,Gt,me,nn,kt,Ut,Yt,Oe,Ke.data):V.texSubImage3D(Xt,Lt,Gt,me,nn,kt,Ut,Yt,Oe,An,Ke):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Lt,Gt,me,kt,Ut,Oe,An,Ke.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Lt,Gt,me,Ke.width,Ke.height,Oe,Ke.data):V.texSubImage2D(V.TEXTURE_2D,Lt,Gt,me,kt,Ut,Oe,An,Ke);V.pixelStorei(V.UNPACK_ROW_LENGTH,Zn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,se),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Rn),V.pixelStorei(V.UNPACK_SKIP_ROWS,hi),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ri),Lt===0&&Y.generateMipmaps&&V.generateMipmap(Xt),Qt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),Qt.unbindTexture()},this.resetState=function(){P=0,q=0,nt=null,Qt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(t),i.unpackColorSpace=ke._getUnpackColorSpace()}}const t2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Hf,AddEquation:Js,AddOperation:Ux,AdditiveBlending:kp,AgXToneMapping:om,AlphaFormat:pm,AlwaysCompare:Hx,AlwaysDepth:Ku,AlwaysStencilFunc:Yp,AmbientLight:aS,ArrayCamera:rS,BackSide:_i,BasicDepthPacking:Nx,Box3:nr,BoxGeometry:ir,BufferAttribute:pa,BufferGeometry:ji,ByteType:um,Camera:Rm,CanvasTexture:Po,CatmullRomCurve3:Kx,CineonToneMapping:sm,ClampToEdgeWrapping:Va,Clock:lS,Color:re,ColorManagement:ke,ConstantAlphaFactor:Cx,ConstantColorFactor:Ax,CubeCamera:sS,CubeDepthTexture:jx,CubeReflectionMapping:er,CubeRefractionMapping:Nr,CubeTexture:Em,CubeUVReflectionMapping:cc,CullFaceBack:Vp,CullFaceFront:ux,CullFaceNone:cx,Curve:Zx,CustomBlending:hx,CustomToneMapping:rm,Data3DTexture:Wx,DataArrayTexture:_m,DataTexture:Mm,DepthFormat:Wa,DepthStencilFormat:$s,DepthTexture:Xo,DirectionalLight:Qp,DoubleSide:Vn,DstAlphaFactor:yx,DstColorFactor:Ex,EqualCompare:Fx,EqualDepth:Ju,EquirectangularReflectionMapping:Gu,EquirectangularRefractionMapping:Vu,Euler:ma,EventDispatcher:Pr,ExternalTexture:Tm,Float32BufferAttribute:ni,FloatType:ha,Fog:oc,FrontSide:xs,Frustum:$f,GLSL3:jp,GreaterCompare:Bx,GreaterDepth:tf,GreaterEqualCompare:Kf,GreaterEqualDepth:$u,Group:Io,HalfFloatType:Xa,HemisphereLight:iS,ImageUtils:kx,InstancedBufferAttribute:Kp,InstancedMesh:qx,IntType:Gf,KeepStencilOp:Cr,Layers:Jf,LessCompare:Px,LessDepth:Qu,LessEqualCompare:Zf,LessEqualDepth:Lr,Light:jo,LinearFilter:ei,LinearMipmapLinearFilter:_s,LinearMipmapNearestFilter:ku,LinearSRGBColorSpace:Ir,LinearToneMapping:im,LinearTransfer:sc,Material:Br,MathUtils:Ei,Matrix3:ve,Matrix4:on,MaxEquation:gx,Mesh:Ge,MeshBasicMaterial:lc,MeshDepthMaterial:eS,MeshDistanceMaterial:nS,MeshLambertMaterial:tS,MeshPhysicalMaterial:wr,MeshStandardMaterial:gs,MinEquation:mx,MirroredRepeatWrapping:nf,MixOperation:Dx,MultiplyBlending:Wp,MultiplyOperation:zf,NearestFilter:ti,NearestMipmapLinearFilter:Kl,NearestMipmapNearestFilter:Lx,NeutralToneMapping:lm,NeverCompare:Ix,NeverDepth:Zu,NoBlending:ka,NoColorSpace:ms,NoToneMapping:Ca,NormalBlending:Ur,NotEqualCompare:zx,NotEqualDepth:ef,Object3D:un,ObjectSpaceNormalMap:Ox,OneFactor:vx,OneMinusConstantAlphaFactor:wx,OneMinusConstantColorFactor:Rx,OneMinusDstAlphaFactor:Mx,OneMinusDstColorFactor:Tx,OneMinusSrcAlphaFactor:ju,OneMinusSrcColorFactor:Sx,OrthographicCamera:nh,PCFShadowMap:Fo,PCFSoftShadowMap:fx,PMREMGenerator:Ff,PerspectiveCamera:bi,Plane:Qs,PlaneGeometry:Ga,PointLight:ac,Quaternion:Fr,R11_EAC_Format:ff,RED_GREEN_RGTC2_Format:Of,RED_RGTC1_Format:Lf,REVISION:Bf,RG11_EAC_Format:df,RGBAFormat:da,RGBAIntegerFormat:qf,RGBA_ASTC_10x10_Format:Af,RGBA_ASTC_10x5_Format:Ef,RGBA_ASTC_10x6_Format:Tf,RGBA_ASTC_10x8_Format:bf,RGBA_ASTC_12x10_Format:Rf,RGBA_ASTC_12x12_Format:Cf,RGBA_ASTC_4x4_Format:mf,RGBA_ASTC_5x4_Format:gf,RGBA_ASTC_5x5_Format:_f,RGBA_ASTC_6x5_Format:vf,RGBA_ASTC_6x6_Format:xf,RGBA_ASTC_8x5_Format:Sf,RGBA_ASTC_8x6_Format:yf,RGBA_ASTC_8x8_Format:Mf,RGBA_BPTC_Format:wf,RGBA_ETC2_EAC_Format:uf,RGBA_PVRTC_2BPPV1_Format:of,RGBA_PVRTC_4BPPV1_Format:rf,RGBA_S3TC_DXT1_Format:$l,RGBA_S3TC_DXT3_Format:tc,RGBA_S3TC_DXT5_Format:ec,RGBFormat:mm,RGB_BPTC_SIGNED_Format:Df,RGB_BPTC_UNSIGNED_Format:Uf,RGB_ETC1_Format:lf,RGB_ETC2_Format:cf,RGB_PVRTC_2BPPV1_Format:sf,RGB_PVRTC_4BPPV1_Format:af,RGB_S3TC_DXT1_Format:Jl,RGFormat:Or,RGIntegerFormat:Yf,RawShaderMaterial:$x,Ray:ym,Raycaster:oS,RedFormat:Xf,RedIntegerFormat:Wf,ReinhardToneMapping:am,RenderTarget:Xx,RepeatWrapping:zo,ReverseSubtractEquation:px,RingGeometry:th,SIGNED_R11_EAC_Format:hf,SIGNED_RED_GREEN_RGTC2_Format:If,SIGNED_RED_RGTC1_Format:Nf,SIGNED_RG11_EAC_Format:pf,SRGBColorSpace:Yn,SRGBTransfer:Je,Scene:vm,ShaderChunk:Se,ShaderLib:Aa,ShaderMaterial:Ua,ShortType:fm,Source:Qf,Sphere:qo,SphereGeometry:eh,SpotLight:Wu,SrcAlphaFactor:qu,SrcAlphaSaturateFactor:bx,SrcColorFactor:xx,StaticDrawUsage:qp,SubtractEquation:dx,SubtractiveBlending:Xp,TangentSpaceNormalMap:jf,Texture:ui,Triangle:fa,UVMapping:cm,Uint16BufferAttribute:xm,Uint32BufferAttribute:Sm,UniformsLib:Pt,UniformsUtils:Jx,UnsignedByteType:Pi,UnsignedInt101111Type:dm,UnsignedInt248Type:Go,UnsignedInt5999Type:hm,UnsignedIntType:Da,UnsignedShort4444Type:Vf,UnsignedShort5551Type:kf,UnsignedShortType:Ho,VSMShadowMap:Oo,Vector2:we,Vector3:Q,Vector4:bn,WebGLCoordinateSystem:Ra,WebGLCubeRenderTarget:Cm,WebGLRenderTarget:wa,WebGLRenderer:mS,WebGLUtils:pS,WebGPUCoordinateSystem:Vo,WebXRController:Xu,ZeroFactor:_x,createCanvasElement:Gx,error:Ve,log:Zp,warn:fe,warnOnce:rc},Symbol.toStringTag,{value:"Module"}));class e2 extends vm{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new ir;t.deleteAttribute("uv");const i=new gs({side:_i}),s=new gs,l=new ac(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Ge(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new qx(t,s,6),d=new un;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const m=new Ge(t,Uo(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Ge(t,Uo(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Ge(t,Uo(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new Ge(t,Uo(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new Ge(t,Uo(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new Ge(t,Uo(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Uo(r){return new tS({color:0,emissive:16777215,emissiveIntensity:r})}const n2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],i2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],a2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],s2=["LOW","MEDIUM","HIGH","EXTREME"],r2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],o2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],l2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},c2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},u2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},f2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},h2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function gS(r){return(r-90)*Math.PI/180}function d2(r,t,i,s){const l=gS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function Lo(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function _S(r){Lo("subject",r.subject,n2),Lo("domain",r.domain,i2),Lo("verb",r.verb,a2),Lo("magnitude",r.magnitude,s2),Lo("time",r.time,r2),Lo("certainty",r.certainty,o2)}function p2(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const h=h2[l][c];if(!h)throw new Error(`Unknown ${l} token: ${c}`);return h}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return _S(s),s}function m2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,h=(-90+l*36)*(Math.PI/180),d=i.x+Math.cos(h)*c,m=i.y+Math.sin(h)*c;l===0&&r.beginPath(),l===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),h=i.x+Math.cos(c)*6,d=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(h,d):r.lineTo(h,d)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function ql(r,t,i,s,l){const c=i.x-t.x,h=i.y-t.y,d=Math.sqrt(c*c+h*h)||1,m=c/d,p=h/d,_=-p,x=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+x*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-x*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function jl(r,t,i,s,l,c){const h=f2[t.certainty];if(!(h<=0)){r.save(),r.fillStyle=l;for(let d=1;d<=h;d+=1){const m=d/(h+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const x=1-m;p=x*x*i.x+2*x*m*c.x+m*m*s.x,_=x*x*i.y+2*x*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function g2(r,t,i){_S(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),h=s*.5,d=l*.5,m=i?.backgroundColor,p=i?.lineColor,_=i?.gridColor;r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(h,d,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(h,d,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(h,d,c*.12,0,Math.PI*2),r.stroke();const x=l2[t.domain],g=c2[t.time]*c,y=u2[t.magnitude]*c,T=d2(h,d,g,x),U=gS(x),M=Math.cos(U),S=Math.sin(U),C=-S,L=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let D={x:T.x,y:T.y},B={x:T.x+M*y,y:T.y+S*y},z;if(t.verb==="EXISTS")D={x:T.x-C*(y*.48),y:T.y-L*(y*.48)},B={x:T.x+C*(y*.48),y:T.y+L*(y*.48)},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),jl(r,t,D,B,p);else if(t.verb==="DECLINES")B={x:T.x-M*y,y:T.y-S*y},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),ql(r,D,B,p,7),jl(r,t,D,B,p);else if(t.verb==="TRANSFORMS")z={x:T.x+C*(y*.34)+M*(y*.34),y:T.y+L*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(D.x,D.y),r.quadraticCurveTo(z.x,z.y,B.x,B.y),r.stroke(),ql(r,z,B,p,7),jl(r,t,D,B,p,z);else if(t.verb==="INFLUENCES"){const b={x:T.x+C*3.4,y:T.y+L*3.4},w={x:B.x+C*3.4,y:B.y+L*3.4},J={x:T.x-C*3.4,y:T.y-L*3.4},P={x:B.x-C*3.4,y:B.y-L*3.4};r.beginPath(),r.moveTo(b.x,b.y),r.lineTo(w.x,w.y),r.moveTo(J.x,J.y),r.lineTo(P.x,P.y),r.stroke(),ql(r,b,w,p,6.6),ql(r,J,P,p,6.6),jl(r,t,b,w,p)}else r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),ql(r,D,B,p,7),jl(r,t,D,B,p);r.fillStyle=p,r.beginPath(),r.arc(h,d,5,0,Math.PI*2),r.fill(),m2(r,t.subject,T,p)}function _2(r,t,i){const s=p2(t);g2(r,s,i)}const v2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},Bp=(r,t,i,s,l)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:v2}),Fu=[Bp("fallback-01","INTELLIGENSPARTIET","Politisk AI-kapasitet for et samfunn i rask omforming.","right",.1),Bp("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42),Bp("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74)],x2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim().toUpperCase(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim()}),ps=r=>{let t=r%1;return t<0&&(t+=1),t},S2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),ps(r+l*(1-Math.exp(-i*s)))},ax=12,zp=9,sx=.12,Hp=2.4,y2=.3,M2=1.2,E2=.3,rx=6741503,T2=5,b2=3.2,A2=.35,R2=.25,Bu=400,C2=2.5,ox=16755251,zu=3,w2=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),lx=(r,t,i,s,l,c)=>{const h=t.split(" ");let d="",m=s;for(let p=0;p<h.length;p+=1){const _=`${d}${h[p]} `;r.measureText(_).width>l&&d.length>0?(r.fillText(d.trim(),i,m),d=`${h[p]} `,m+=c):d=_}d.trim()&&r.fillText(d.trim(),i,m)},em=Math.PI*2,Rr=r=>Math.min(1,Math.max(0,r)),Zl=(r,t,i,s,l)=>{const c=em*(r*i+s),h=em*(t*i+l),d=Math.sin(c)*Math.cos(h),m=.5*Math.sin((c+h)*.65+s*6.37);return d+m},Hu=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Po(s)},ua=(r,t,i,s,l=!1)=>{r.wrapS=zo,r.wrapT=zo,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=_s,r.magFilter=ei,l&&(r.colorSpace=Yn),r.needsUpdate=!0},Gp=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:h,microFreq:d,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:x,seamDepth:g,seamWidth:y,roughnessBase:T,roughnessRange:U,normalStrength:M,aoStrength:S}=r,C=t*i,L=new re(l),D=new Float32Array(C);let B=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY;for(let it=0;it<i;it+=1)for(let Z=0;Z<t;Z+=1){const N=it*t+Z,F=Z/t,tt=it/i,ft=Zl(F,tt,c,s*.11,s*.23),_t=Zl(F,tt,h,s*.41+.18,s*.29+.07),I=Zl(F,tt,d,s*.71+.43,s*.53+.31),W=Math.sin(em*((F+tt*.33)*m+s*.17));let ht=0;if(_!=="none"&&x>0){const et=(_==="x"?F:tt)*x%1,dt=Math.min(et,1-et);ht=Math.exp(-Math.pow(dt/Math.max(1e-4,y),2))}const Et=ft*.6+_t*.28+I*.12+W*p-ht*g;D[N]=Et,Et<B&&(B=Et),Et>z&&(z=Et)}const H=new Float32Array(C),b=Math.max(1e-4,z-B),w=new Uint8ClampedArray(C*4),J=new Uint8ClampedArray(C*4),P=new Uint8ClampedArray(C*4);for(let it=0;it<i;it+=1)for(let Z=0;Z<t;Z+=1){const N=it*t+Z,F=N*4,tt=Z/t,ft=it/i,_t=Rr((D[N]-B)/b);H[N]=_t;const I=Zl(tt,ft,h*.6,s*.19+.62,s*.73+.14)*.5+.5,W=Rr(.78+(_t-.5)*.24+(I-.5)*.12),ht=Zl(tt,ft,c*.5,s*.37+.89,s*.13+.44),Et=1+ht*.017,Ot=1+ht*.007,et=1-ht*.013,dt=Rr(T+(1-_t)*U+(I-.5)*.14),bt=Rr(.94-(1-_t)*S);w[F]=Math.round(Rr(L.r*W*Et)*255),w[F+1]=Math.round(Rr(L.g*W*Ot)*255),w[F+2]=Math.round(Rr(L.b*W*et)*255),w[F+3]=255;const Vt=Math.round(dt*255);J[F]=Vt,J[F+1]=Vt,J[F+2]=Vt,J[F+3]=255;const Zt=Math.round(bt*255);P[F]=Zt,P[F+1]=Zt,P[F+2]=Zt,P[F+3]=255}const q=(it,Z)=>{const N=(it+t)%t,F=(Z+i)%i;return H[F*t+N]},nt=new Uint8ClampedArray(C*4);for(let it=0;it<i;it+=1)for(let Z=0;Z<t;Z+=1){const F=(it*t+Z)*4,tt=q(Z+1,it)-q(Z-1,it),ft=q(Z,it+1)-q(Z,it-1),_t=-tt*M,I=-ft*M,W=1,ht=1/Math.hypot(_t,I,W);nt[F]=Math.round((_t*ht*.5+.5)*255),nt[F+1]=Math.round((I*ht*.5+.5)*255),nt[F+2]=Math.round((W*ht*.5+.5)*255),nt[F+3]=255}return{albedo:Hu(w,t,i),normal:Hu(nt,t,i),roughness:Hu(J,t,i),ao:Hu(P,t,i)}},D2=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,h=0;const d=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],h+=s[p+2];l/=d*255,c/=d*255,h/=d*255;const m=l*.2126+c*.7152+h*.0722;return{color:new re(l,c,h),luminance:m}};function U2(){const r=ci.useRef(null),t=ci.useRef([]),i=ci.useRef(sx),s=ci.useRef(sx);ci.useEffect(()=>{const C=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=C,document.documentElement.style.overscrollBehavior=""}},[]);const[l,c]=ci.useState(Fu),[h,d]=ci.useState([]),[m,p]=ci.useState(Fu[0].id),[_,x]=ci.useState(!0),[g,y]=ci.useState(null),[T,U]=ci.useState(!1);ci.useEffect(()=>{let C=!1;return(async()=>{try{const D=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),B=D.headers.get("content-type")??"";if(!D.ok)throw new Error(`HTTP ${D.status} while loading glyph language map`);if(!B.toLowerCase().includes("application/json")){const b=await D.text();throw new Error(`Expected JSON but got '${B||"unknown"}' (${b.slice(0,120)})`)}const z=await D.json();if(!Array.isArray(z?.items))throw new Error("Glyph language payload missing 'items' array");const H=z.items.map((b,w)=>x2(b,w)).filter(b=>b.enabled!==!1);if(C)return;d(H)}catch(D){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",D),C)return;d([])}})(),()=>{C=!0}},[]);const M=ci.useMemo(()=>{const C=new Map;return h.forEach(L=>{!L.panel_id||!L.canonical||C.has(L.panel_id)||C.set(L.panel_id,L.canonical)}),C},[h]);ci.useEffect(()=>{let C=!1;return(async()=>{x(!0),y(null);try{const D=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),B=D.headers.get("content-type")??"";if(!D.ok)throw new Error(`HTTP ${D.status} while loading panel data`);if(!B.toLowerCase().includes("application/json")){const P=await D.text();throw new Error(`Expected JSON but got '${B||"unknown"}' (${P.slice(0,120)})`)}const z=await D.json();if(!Array.isArray(z?.panels))throw new Error("Panel payload missing 'panels' array");const H=typeof z.media_root=="string"?z.media_root.replace(/\/+$/,""):"",b=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",w=P=>/^https?:\/\//i.test(P)&&b?`/proxy?url=${encodeURIComponent(P)}`:P,J=z.panels.map(P=>{const q=typeof P?.source=="string"?P.source.replace(/^\/+/,""):"",nt=q?H?`${H}/${q}`:`/${q}`:void 0,it=nt?w(nt):void 0,Z=typeof P?.poster=="string"?P.poster.replace(/^\/+/,""):"",N=Z?H?`${H}/${Z}`:`/${Z}`:void 0,F=N?w(N):void 0,tt=P?.type==="image"||P?.type==="video"?P.type:"text";return{...P,kind:tt,type:tt,title:P?.content?.title??"Uten tittel",body:P?.content?.description??"",cta:P?.content?.cta,poster:F,image:tt==="image"?it:void 0,video:tt==="video"?it:void 0}});if(J.length===0)throw new Error("Panel payload contained 0 panels");if(C)return;c(J),p(J[0].id)}catch(D){if(console.error("Failed to load panels; using fallback data.",D),C)return;c(Fu),p(Fu[0].id),y("Kunne ikke laste media-paneler. Viser lokal fallback.")}finally{C||x(!1)}})(),()=>{C=!0}},[]);const S=ci.useMemo(()=>l.find(C=>C.id===m)??l[0]??{title:"",body:""},[m,l]);return ci.useEffect(()=>{if(l.length===0)return;const C=r.current;if(!C)return;U(!1);let L=!1,D=()=>{};return(()=>{if(L||!C)return;t.current=[];const z=window.matchMedia("(prefers-reduced-motion: reduce)"),H=window.matchMedia("(max-width: 767px)"),b=z.matches,w=H.matches,J=new vm;J.background=new re(987671),J.fog=new oc(987671,38,230);const P=new bi(w?72:64,C.clientWidth/C.clientHeight,.1,1200),q=new mS({antialias:!w,alpha:!1,powerPreference:"high-performance"});q.setPixelRatio(Math.min(window.devicePixelRatio,w?1:1.5)),q.setSize(C.clientWidth,C.clientHeight),q.outputColorSpace=Yn,q.toneMapping=Hf,q.toneMappingExposure=w?.76:.72,q.shadowMap.enabled=!w,q.shadowMap.type=Fo,C.appendChild(q.domElement);const nt=new Ff(q),it=nt.fromScene(new e2,.06);J.environment=it.texture;const Z=new aS(16185599,.05);J.add(Z);const N=new iS(14739442,1777446,.08);J.add(N);const F=w2(t2),tt=new Kx(F,!0,"catmullrom",.17),ft=w?180:300,_t=Math.min(8,q.capabilities.getMaxAnisotropy()),I=w?256:512,W=Gp({width:I,height:I,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});ua(W.albedo,4.8,24,_t,!0),ua(W.normal,4.8,24,_t),ua(W.roughness,4.8,24,_t),ua(W.ao,4.8,24,_t);const ht=Gp({width:I,height:I,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});ua(ht.albedo,2.2,24,_t,!0),ua(ht.normal,2.2,24,_t),ua(ht.roughness,2.2,24,_t),ua(ht.ao,2.2,24,_t);const Et=Gp({width:I,height:I,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});ua(Et.albedo,3.4,24,_t,!0),ua(Et.normal,3.4,24,_t),ua(Et.roughness,3.4,24,_t),ua(Et.ao,3.4,24,_t);const Ot=new wr({color:9607586,map:W.albedo,normalMap:W.normal,normalScale:new we(.32,.32),roughnessMap:W.roughness,roughness:.38,metalness:0,aoMap:W.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Vn}),et=new wr({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Vn}),dt=new wr({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new re(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Vn}),bt=()=>{const Dt=[],qt=new Q(0,1,0);let Kt=new Q(1,0,0);for(let Ct=0;Ct<=ft;Ct+=1){const Di=Ct/ft,ta=tt.getPointAt(Di),Ce=Di===1?ta.clone().sub(tt.getPointAt(Di-.001)).normalize():tt.getPointAt(Di+.001).sub(ta).normalize();let Ae=new Q().crossVectors(Ce,qt).normalize();Ae.lengthSq()<1e-4&&(Ae=Kt.clone()),Ae.dot(Kt)<0&&Ae.multiplyScalar(-1),Kt=Ae.clone();const pn=new Q().crossVectors(Ae,Ce).normalize();Dt.push({pt:ta,right:Ae,up:pn,t:Di})}const $t=(Ct,Di,ta=!1)=>{const Ce=[],Ae=[],pn=[];for(let Te=0;Te<=ft;Te+=1){const Pn=Dt[Te],Qn=Ct(Pn),ai=Di(Pn);Ce.push(Qn.x,Qn.y,Qn.z,ai.x,ai.y,ai.z),Ae.push(0,Pn.t,1,Pn.t)}for(let Te=0;Te<ft;Te+=1){const Pn=Te*2,Qn=Pn+1,ai=Pn+2,Si=Pn+3;ta?pn.push(Pn,ai,Qn,ai,Si,Qn):pn.push(Pn,Qn,ai,ai,Qn,Si)}const Dn=new ji;Dn.setAttribute("position",new ni(Ce,3));const xi=new ni(Ae,2);return Dn.setAttribute("uv",xi),Dn.setAttribute("uv2",xi.clone()),Dn.setIndex(pn),Dn.computeVertexNormals(),Dn},zt=ax*.5,de=zp*.5,Fe=$t(Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(-de)).add(Ct.right.clone().multiplyScalar(-zt)),Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(-de)).add(Ct.right.clone().multiplyScalar(zt))),De=$t(Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de)).add(Ct.right.clone().multiplyScalar(-zt)),Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de)).add(Ct.right.clone().multiplyScalar(zt)),!0),je=$t(Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(-de)).add(Ct.right.clone().multiplyScalar(-zt)),Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de)).add(Ct.right.clone().multiplyScalar(-zt)),!0),kn=$t(Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(-de)).add(Ct.right.clone().multiplyScalar(zt)),Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de)).add(Ct.right.clone().multiplyScalar(zt))),Cn=.08,xn=.015,He=$t(Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de-Cn)).add(Ct.right.clone().multiplyScalar(-zt+xn)),Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de)).add(Ct.right.clone().multiplyScalar(-zt+xn)),!0),Qe=$t(Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de-Cn)).add(Ct.right.clone().multiplyScalar(zt-xn)),Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de)).add(Ct.right.clone().multiplyScalar(zt-xn)),!1),dn=.22,Sn=.018,wi=$t(Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(-de)).add(Ct.right.clone().multiplyScalar(-zt+Sn)),Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(-de+dn)).add(Ct.right.clone().multiplyScalar(-zt+Sn)),!0),wn=$t(Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(-de)).add(Ct.right.clone().multiplyScalar(zt-Sn)),Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(-de+dn)).add(Ct.right.clone().multiplyScalar(zt-Sn)),!1),In=.14,vi=$t(Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de-.05)).add(Ct.right.clone().multiplyScalar(-In)),Ct=>Ct.pt.clone().add(Ct.up.clone().multiplyScalar(de-.05)).add(Ct.right.clone().multiplyScalar(In)),!0);return{floorGeo:Fe,ceilGeo:De,leftGeo:je,rightGeo:kn,leftSkirtGeo:wi,rightSkirtGeo:wn,trackRailGeo:vi,leftCrownGeo:He,rightCrownGeo:Qe}},{floorGeo:Vt,ceilGeo:Zt,leftGeo:ne,rightGeo:ln,leftSkirtGeo:be,rightSkirtGeo:ye,trackRailGeo:ze,leftCrownGeo:he,rightCrownGeo:fn}=bt(),V=new Ge(Vt,Ot),en=new Ge(Zt,dt),Me=new Ge(ne,et),Ne=new Ge(ln,et),Qt=new wr({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),O=new gs({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Vn}),E=new Ge(be,O),j=new Ge(ye,O);E.receiveShadow=!0,j.receiveShadow=!0;const gt=new Ge(he,O),yt=new Ge(fn,O);gt.receiveShadow=!1,yt.receiveShadow=!1;const pt=new wr({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Vn}),Wt=new Ge(ze,pt);Wt.receiveShadow=!1,V.receiveShadow=!0,V.castShadow=!0,en.receiveShadow=!0,en.castShadow=!0,Me&&(Me.receiveShadow=!0,Me.castShadow=!0),Ne&&(Ne.receiveShadow=!0,Ne.castShadow=!0),J.add(V),J.add(en),Me&&J.add(Me),Ne&&J.add(Ne),J.add(E),J.add(j),J.add(gt),J.add(yt),J.add(Wt);const wt=new Q(0,1,0),ee=new un,ae=new un,Tt=new un;J.add(ee),J.add(ae),J.add(Tt);const St=new Wu(16773598,w?16:24,34,Math.PI/8.4,.44,2);St.target=ee,St.castShadow=!w,St.castShadow&&(St.shadow.mapSize.width=2048,St.shadow.mapSize.height=2048,St.shadow.bias=-35e-5,St.shadow.normalBias=.012,St.shadow.camera.near=.4,St.shadow.camera.far=34),J.add(St);const It=new Wu(12571903,w?6:9,34,Math.PI/6.5,.68,2);It.target=ae,It.castShadow=!1,J.add(It);const Nt=new Wu(14083583,w?5:7,28,Math.PI/7.8,.6,2);Nt.target=Tt,Nt.castShadow=!1,J.add(Nt);const Ft=new un,pe=new un;J.add(Ft),J.add(pe);const k=new Qp(16774374,0);if(k.target=Ft,k.castShadow=!w,k.castShadow){k.shadow.mapSize.width=4096,k.shadow.mapSize.height=4096,k.shadow.bias=-2e-4,k.shadow.normalBias=.005;const Dt=320;k.shadow.camera.left=-Dt,k.shadow.camera.right=Dt,k.shadow.camera.top=Dt,k.shadow.camera.bottom=-Dt,k.shadow.camera.near=1,k.shadow.camera.far=1200}J.add(k);const At=new Qp(9090280,0);At.target=pe,J.add(At),Vt.computeBoundingBox(),Vt.computeBoundingSphere(),Zt.computeBoundingBox(),Zt.computeBoundingSphere(),ne.computeBoundingBox(),ne.computeBoundingSphere(),ln.computeBoundingBox(),ln.computeBoundingSphere();const Ht=l.some(Dt=>Dt.installation?.mount_type==="continuous_led_wall"||Dt.installation?.mount_type==="jutting_half_wall")?l:w?l.filter((Dt,qt)=>qt%2===0):l,Mt=[],ut=[],Bt=[],ce=[],We=[],Ee=[],ii=[],Ai=-1,La=Dt=>{if(!Dt.paused&&Dt.currentTime>0)return;const qt=Dt.play();qt&&typeof qt.catch=="function"&&qt.catch(()=>{})},Ya=setInterval(()=>{let Dt=!0;Ee.forEach(qt=>{(qt.paused||qt.readyState<2)&&(Dt=!1,La(qt))}),Dt&&Ee.length>0&&clearInterval(Ya)},500);We.push(()=>clearInterval(Ya));const zr=new ir(1,1,.2),Ss=new Ga(.82,.82),ys=new wr({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),Zi=(Dt,qt)=>{const $t=document.createElement("canvas");$t.width=512,$t.height=512;const zt=$t.getContext("2d");zt.clearRect(0,0,512,512);const de=M.get(qt);if(de)try{_2(zt,de,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const Qe=new Po($t);return Qe.colorSpace=Yn,Qe}catch(Qe){console.warn(`Invalid glyph canonical sentence for panel '${qt}': '${de}'. Falling back to procedural glyph.`,Qe)}const Fe=512/2,De=512/2,je=Dt*137.508;zt.fillStyle="rgba(6,14,24,0.7)",zt.beginPath(),zt.arc(Fe,De,512*.42,0,Math.PI*2),zt.fill(),zt.strokeStyle="rgba(102,221,255,0.95)",zt.lineWidth=2.5,zt.lineCap="round",zt.beginPath(),zt.arc(Fe,De,512*.38,0,Math.PI*2),zt.stroke();const kn=3+Dt%4;for(let Qe=0;Qe<kn;Qe++){const dn=Qe/kn*Math.PI*2+je,Sn=512*.08,wi=512*.32;zt.beginPath(),zt.moveTo(Fe+Math.cos(dn)*Sn,De+Math.sin(dn)*Sn),zt.lineTo(Fe+Math.cos(dn)*wi,De+Math.sin(dn)*wi),zt.stroke()}const Cn=2+Dt%3;for(let Qe=0;Qe<Cn;Qe++){const dn=512*(.15+Qe*.09),Sn=je+Qe*1.2;zt.beginPath(),zt.arc(Fe,De,dn,Sn,Sn+Math.PI*(.4+Dt%3*.2)),zt.stroke()}zt.fillStyle="rgba(102,221,255,0.85)";const xn=3+Dt%5;for(let Qe=0;Qe<xn;Qe++){const dn=je+Qe/xn*Math.PI*2,Sn=512*(.2+Qe%3*.06);zt.beginPath(),zt.arc(Fe+Math.cos(dn)*Sn,De+Math.sin(dn)*Sn,4,0,Math.PI*2),zt.fill()}zt.strokeStyle="rgba(102,221,255,0.5)",zt.lineWidth=1.5,zt.beginPath(),zt.arc(Fe,De,512*.12,0,Math.PI*2),zt.stroke(),zt.fillStyle="rgba(102,221,255,0.95)",zt.beginPath(),zt.arc(Fe,De,6,0,Math.PI*2),zt.fill();const He=new Po($t);return He.colorSpace=Yn,He},Ms=(Dt,qt)=>{const Kt=document.createElement("canvas");Kt.width=1024,Kt.height=640;const $t=Kt.getContext("2d");$t.fillStyle="rgba(8,12,18,0.88)",$t.beginPath(),$t.roundRect(16,16,992,608,24),$t.fill(),$t.strokeStyle="rgba(102,221,255,0.25)",$t.lineWidth=2,$t.beginPath(),$t.roundRect(16,16,992,608,24),$t.stroke(),$t.fillStyle="rgba(102,221,255,0.95)",$t.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",lx($t,Dt.toUpperCase(),60,100,900,58),$t.strokeStyle="rgba(102,221,255,0.3)",$t.lineWidth=2,$t.beginPath(),$t.moveTo(60,180),$t.lineTo(960,180),$t.stroke(),$t.fillStyle="rgba(220,230,240,0.9)",$t.font="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",lx($t,qt,60,230,900,42);const zt=new Po(Kt);return zt.colorSpace=Yn,zt},Fi=()=>{const qt=document.createElement("canvas");qt.width=512,qt.height=512;const Kt=qt.getContext("2d"),$t=512/2,zt=512/2;Kt.beginPath(),Kt.arc($t,zt,512*.42,0,Math.PI*2),Kt.fillStyle="rgba(6,14,24,0.7)",Kt.fill(),Kt.strokeStyle="rgba(255,170,51,0.9)",Kt.lineWidth=6,Kt.beginPath(),Kt.arc($t,zt,512*.38,0,Math.PI*2),Kt.stroke();const de=8;for(let De=0;De<de;De++){const je=De/de*Math.PI*2-Math.PI/2;Kt.strokeStyle=`rgba(255,${170+Math.round(Math.sin(De)*40)},51,0.8)`,Kt.lineWidth=4,Kt.beginPath(),Kt.moveTo($t+Math.cos(je)*512*.12,zt+Math.sin(je)*512*.12),Kt.lineTo($t+Math.cos(je)*512*.34,zt+Math.sin(je)*512*.34),Kt.stroke();const kn=$t+Math.cos(je)*512*.34,Cn=zt+Math.sin(je)*512*.34,xn=512*.06;Kt.beginPath(),Kt.moveTo(kn,Cn),Kt.lineTo(kn-xn*Math.cos(je-.4),Cn-xn*Math.sin(je-.4)),Kt.moveTo(kn,Cn),Kt.lineTo(kn-xn*Math.cos(je+.4),Cn-xn*Math.sin(je+.4)),Kt.stroke()}Kt.beginPath(),Kt.arc($t,zt,512*.06,0,Math.PI*2),Kt.fillStyle="rgba(255,200,80,0.95)",Kt.fill();const Fe=new Po(qt);return Fe.colorSpace=Yn,Fe},Mn=Dt=>{const qt=ps(Dt),Kt=tt.getPointAt(qt),zt=tt.getPointAt(ps(qt+.002)).clone().sub(Kt).normalize();let de=new Q().crossVectors(zt,wt).normalize();de.lengthSq()<1e-4&&(de=new Q(1,0,0));const Fe=new Q().crossVectors(de,zt).normalize();return{point:Kt,tangent:zt,right:de,up:Fe}};tt.getLength();const hn=[],Ki=new Ga(Hp*2,Hp*2),ga=new Ga(T2,b2);Ht.forEach((Dt,qt)=>{const Kt=Dt.installation,$t=ps(Kt?.placement_t??.05+qt/Ht.length),{point:zt,right:de,up:Fe}=Mn($t),De=Kt?.side==="left",Cn=(Kt?.side==="center"?0:De?-1:1)*ax*.12,xn=zt.clone().add(de.clone().multiplyScalar(Cn)).add(Fe.clone().multiplyScalar(.5)),He=Zi(qt,Dt.id);ut.push(He);const Qe=new gs({color:16777215,emissive:new re(rx),emissiveIntensity:1.2,map:He,emissiveMap:He,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});Bt.push(Qe);const dn=new Ge(Ki,Qe);dn.position.copy(xn),dn.userData={panel:Dt,isGlyph:!0},Mt.push(dn),J.add(dn);const Sn=Ms(Dt.title,Dt.body);ut.push(Sn);const wi=new gs({color:16777215,emissive:new re(1122867),emissiveIntensity:.3,map:Sn,transparent:!0,opacity:0,side:Vn,depthWrite:!0});Bt.push(wi);const wn=new Ge(ga,wi),In=new Io;In.add(wn),In.position.copy(xn),In.scale.setScalar(.01),In.visible=!1,J.add(In);const vi=new ac(rx,w?6:12,20,1.5);vi.position.copy(xn),J.add(vi),hn.push({mesh:dn,card:In,panel:Dt,progress:$t,baseY:xn.y,expanded:!1,expandT:0}),t.current.push({meta:Dt,progress:$t})});let En=!1,fi=0;const _a=new Q,Qi=new Q,vn=new Q,Ji=32;for(let Dt=0;Dt<Ji;Dt++)vn.add(tt.getPointAt(Dt/Ji));vn.divideScalar(Ji);const Na=new Ga(zu*2,zu*2),va=Fi();ut.push(va);const R=new gs({color:16777215,emissive:new re(ox),emissiveIntensity:1.4,map:va,emissiveMap:va,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});Bt.push(R);const{point:Y,up:lt}=Mn(R2),at=Y.clone().add(lt.clone().multiplyScalar(1)),$=new Ge(Na,R);$.position.copy(at),$.userData={isExitGlyph:!0},J.add($);const Lt=new Ga(zu*5,zu*5),kt=new lc({visible:!1,side:Vn}),Ut=new Ge(Lt,kt);Ut.position.copy(at),Ut.userData={isExitGlyph:!0},Mt.push(Ut),J.add(Ut);const Yt=new ac(ox,w?6:12,20,1.5);Yt.position.copy(at),J.add(Yt);const Jt=new eh(w?1.25:1.6,26,26);ce.push(Jt);const oe=new gs({color:16764788,emissive:new re(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});Bt.push(oe);const ue=Y.clone().add(lt.clone().multiplyScalar(zp*.52+.32)),Gt=new Ge(Jt,oe);Gt.position.copy(ue),Gt.userData={isReentryDot:!0},Mt.push(Gt),J.add(Gt);const me=new th(w?1.75:2.2,w?2.35:2.95,52);ce.push(me);const nn=new lc({color:16761948,transparent:!0,opacity:0,side:Vn,depthWrite:!1});Bt.push(nn);const Ke=new Ge(me,nn);Ke.position.copy(ue),J.add(Ke);const Oe=new ac(16761948,0,w?34:44,2);Oe.position.copy(ue),J.add(Oe);const An=new oS,Xt=new we,Zn=Dt=>{Ee.forEach(La);const qt=q.domElement.getBoundingClientRect();Xt.x=(Dt.clientX-qt.left)/qt.width*2-1,Xt.y=-((Dt.clientY-qt.top)/qt.height)*2+1,An.setFromCamera(Xt,P);const Kt=An.intersectObjects(Mt,!1);if(Kt.length>0){const $t=Kt[0].object;if($t.userData.isReentryDot&&En){En=!1,U(!1);return}if($t.userData.isExitGlyph){if(En=!En,U(En),En){const Fe=P.position.clone().clone().sub(vn).normalize();_a.copy(vn).add(Fe.multiplyScalar(Bu)),_a.y=vn.y+Bu*.35,Qi.copy(vn)}hn.forEach(de=>{de.expanded=!1});return}if(En){En=!1,U(!1);return}const zt=$t.userData.panel;if(zt){const de=hn.find(Fe=>Fe.panel.id===zt.id);de&&(de.expanded?de.expanded=!1:(hn.forEach(Fe=>{Fe.expanded=!1}),de.expanded=!0))}}else En?(En=!1,U(!1)):hn.forEach($t=>{$t.expanded=!1})};q.domElement.addEventListener("pointerdown",Zn);const se={x:0,y:0},Rn={x:0,y:0},hi=Dt=>{if(b||w)return;const qt=q.domElement.getBoundingClientRect(),Kt=(Dt.clientX-qt.left)/qt.width,$t=(Dt.clientY-qt.top)/qt.height;se.x=(Kt-.5)*2,se.y=($t-.5)*2},Ri=()=>{se.x=0,se.y=0};q.domElement.addEventListener("pointermove",hi,{passive:!0}),q.domElement.addEventListener("pointerleave",Ri,{passive:!0});const di=Dt=>{Dt.preventDefault(),!En&&(Ee.forEach(La),i.current=ps(i.current+Ai*Dt.deltaY*75e-6))};q.domElement.addEventListener("wheel",di,{passive:!1});const Xe=Dt=>{if((Dt.key==="o"||Dt.key==="O")&&(En=!En,U(En),En)){const Kt=P.position.clone().clone().sub(vn).normalize();_a.copy(vn).add(Kt.multiplyScalar(Bu)),_a.y=vn.y+Bu*.35,Qi.copy(vn)}};window.addEventListener("keydown",Xe);let mn=0;const Kn=Dt=>{Ee.forEach(La),mn=Dt.touches[0]?.clientY??0},Tn=Dt=>{if(Dt.preventDefault(),En)return;const qt=Dt.touches[0]?.clientY??mn,Kt=mn-qt;i.current=ps(i.current+Ai*Kt*11e-5),mn=qt};q.domElement.addEventListener("touchstart",Kn,{passive:!0}),q.domElement.addEventListener("touchmove",Tn,{passive:!1});const Ci=()=>{C&&(P.aspect=C.clientWidth/C.clientHeight,P.updateProjectionMatrix(),q.setSize(C.clientWidth,C.clientHeight))};window.addEventListener("resize",Ci);const Bi=new un,qa=new lS,Ko=new Q,uc=new Q,ar=new Q;let $i=l.length>0?l[0].id:"";const Hr=()=>{if(L)return;const Dt=qa.getDelta(),qt=qa.getElapsedTime();s.current=S2(s.current,i.current,b?2.8:4.8,Dt),Rn.x+=(se.x-Rn.x)*.07,Rn.y+=(se.y-Rn.y)*.07;const Kt=s.current,$t=ps(Kt+(w?.008:.01)),zt=tt.getPointAt(Kt),de=tt.getPointAt($t),Fe=tt.getPointAt(ps(Kt+.002)).sub(tt.getPointAt(ps(Kt-.002))).normalize();let De=new Q().crossVectors(Fe,wt).normalize();De.lengthSq()<1e-4&&(De=new Q(1,0,0));const je=new Q().crossVectors(De,Fe).normalize(),kn=De.clone().multiplyScalar(Rn.x*(w?0:.62)).add(je.clone().multiplyScalar(Rn.y*(w?0:.42))),Cn=b?new Q:je.clone().multiplyScalar(Math.sin(qt*.45)*.12),xn=1/C2;En&&fi<1?fi=Math.min(1,fi+xn*Dt):!En&&fi>0&&(fi=Math.max(0,fi-xn*Dt));const He=fi<.5?4*fi*fi*fi:1-Math.pow(-2*fi+2,3)/2;if(Ft.position.copy(vn),pe.position.copy(vn),k.position.set(vn.x+500,vn.y+600,vn.z-300),At.position.set(vn.x-400,vn.y+150,vn.z+350),He>.01){J.fog instanceof oc&&(J.fog.near=Ei.lerp(38,9999,He),J.fog.far=Ei.lerp(230,1e4,He));const Ce=new re(987671),Ae=new re(395794);J.background.copy(Ce).lerp(Ae,He),Z.intensity=Ei.lerp(.05,.08,He),N.intensity=Ei.lerp(.08,.12,He),k.intensity=Ei.lerp(0,w?2.2:3.5,He),At.intensity=Ei.lerp(0,w?.25:.4,He),q.toneMappingExposure=Ei.lerp(w?.76:.72,w?1:1.1,He),[Ot,et].forEach(pn=>{pn.emissive.set(3359829),pn.emissiveIntensity=.12*He}),dt.color.set(0).lerp(new re(16777215),He),dt.toneMapped=He>.5,dt.fog=He>.5,dt.emissive.set(16777215),dt.emissiveIntensity=Ei.lerp(1,.15,He),dt.envMapIntensity=Ei.lerp(0,.1,He)}else Z.intensity=.05,N.intensity=.08,k.intensity=0,At.intensity=0,q.toneMappingExposure=w?.76:.72,J.background.set(987671),[Ot,et].forEach(Ce=>{Ce.emissive.set(0),Ce.emissiveIntensity=0}),dt.color.set(0),dt.toneMapped=!1,dt.fog=!1,dt.emissive.set(16777215),dt.emissiveIntensity=1,dt.envMapIntensity=0;const Qe=je.clone().multiplyScalar(-zp*.2),dn=zt.clone().add(Qe).add(kn).add(Cn),Sn=de.clone().add(Qe).add(kn.multiplyScalar(.22));if(He>.99)P.position.copy(_a),P.lookAt(Qi);else if(He>.001){P.position.lerpVectors(dn,_a,He);const Ce=Sn.clone().lerp(Qi,He);P.lookAt(Ce)}else P.position.copy(dn),Bi.position.copy(P.position),Bi.lookAt(Sn),P.quaternion.slerp(Bi.quaternion,1-Math.exp(-8.1*Dt));const wi=.94+Math.sin(qt*.23)*.06,wn=de.clone().add(Qe);St.position.copy(P.position).add(je.clone().multiplyScalar(2.9)).add(De.clone().multiplyScalar(2.1)).add(Fe.clone().multiplyScalar(-2.2)),ee.position.copy(wn).add(De.clone().multiplyScalar(2.5)).add(je.clone().multiplyScalar(-.9)),St.intensity=(w?14:21)*wi,It.position.copy(P.position).add(je.clone().multiplyScalar(2)).add(De.clone().multiplyScalar(-2.4)).add(Fe.clone().multiplyScalar(-1.1)),ae.position.copy(wn).add(De.clone().multiplyScalar(-2)).add(je.clone().multiplyScalar(-1.4)),It.intensity=(w?5:8)*wi,Nt.position.copy(P.position).add(je.clone().multiplyScalar(1.4)).add(Fe.clone().multiplyScalar(2.8)).add(De.clone().multiplyScalar(.6)),Tt.position.copy(wn).add(je.clone().multiplyScalar(-.8)),Nt.intensity=(w?4:6.2)*wi,Mt.forEach(Ce=>{const Ae=Ce.userData;if(!Ae||!Ae.shading||!Ae.material)return;const pn=Ae.shading,Dn=Ae.material,xi=Ae.video,Te=Ae;let Pn=1;pn.lighting?.flicker_sync&&xi&&xi.readyState>=3&&(Pn=.88+Math.sin(qt*22)*.1*Math.sin(qt*6.7));let Qn=1;if(pn.movement_reaction?.type==="viewing_angle_fade"){Ko.set(0,0,0),Ce.getWorldPosition(Ko),uc.set(0,0,1).applyQuaternion(Ce.quaternion),ar.copy(P.position).sub(Ko).normalize();const Si=uc,xa=ar,sr=Math.max(0,Si.dot(xa)),Qo=pn.movement_reaction.cone_angle_degrees===60?3:1.5;Qn=Math.pow(sr,Qo)}const ai=Ae.baseEmissive*Pn*Qn;if(Dn.emissiveIntensity=ai,Te.bounceLights&&Te.bounceLights.length>0){const Si=Te.bounceSampleCtx,xa=Te.bounceSampleCanvas;if(xi&&Si&&xa&&(Te.bounceNextSampleAt??0)<=qt){const Oa=D2(xi,xa,Si);if(Oa){Te.bounceTargetColor||(Te.bounceTargetColor=Oa.color.clone());const Jo=Oa.color.clone().lerp(new re(1,.97,.93),.18);Te.bounceTargetColor.copy(Jo);const $o=Ei.clamp(.22+Oa.luminance*1.9,.22,2.25);Te.bounceTargetIntensity=(Te.bounceBaseIntensity??5)*$o*(.25+ai*1.25)}Te.bounceNextSampleAt=qt+1/(w?2:4)}else xi||(Te.bounceTargetIntensity=(Te.bounceBaseIntensity??5)*(.22+ai*1.1));const sr=Te.bounceTargetIntensity??0,Qo=Te.bounceCurrentIntensity??0;Te.bounceCurrentIntensity=Ei.lerp(Qo,sr,1-Math.exp(-6.2*Dt)),Te.bounceCurrentColor||(Te.bounceCurrentColor=(Te.bounceTargetColor??new re(1,1,1)).clone()),Te.bounceTargetColor&&Te.bounceCurrentColor.lerp(Te.bounceTargetColor,1-Math.exp(-5.4*Dt)),Te.bounceLights.forEach((Oa,Jo)=>{const $o=Math.max(1,Te.bounceLights.length-1),sh=1-Jo/$o*.34;Oa.color.copy(Te.bounceCurrentColor),Oa.intensity=(Te.bounceCurrentIntensity??0)*sh})}}),ii.forEach(({mesh:Ce,basePosition:Ae,strength:pn})=>{const Dn=Ce.parent;if(!Dn)return;const xi=Dn.worldToLocal(P.position.clone()),Te=Ei.clamp(xi.x*.008,-.18,.18)*pn,Pn=Ei.clamp(xi.y*.006,-.14,.14)*pn;Ce.position.x=Ae.x+Te,Ce.position.y=Ae.y+Pn}),hn.forEach((Ce,Ae)=>{const{mesh:pn,card:Dn}=Ce;pn.lookAt(P.position);const xi=Ae*.7,Te=Ce.baseY+Math.sin(qt*M2+xi)*y2;pn.position.y=Te,pn.rotateZ(E2*Dt);const Pn=pn.material;Pn.emissiveIntensity=1+Math.sin(qt*2+Ae)*.4;const Qn=Ce.expanded?1:0,ai=1/A2;Ce.expandT<Qn?Ce.expandT=Math.min(1,Ce.expandT+ai*Dt):Ce.expandT>Qn&&(Ce.expandT=Math.max(0,Ce.expandT-ai*Dt));const Si=Ce.expandT,xa=Si<.5?4*Si*Si*Si:1-Math.pow(-2*Si+2,3)/2;if(xa>.001){Dn.visible=!0,Dn.position.copy(pn.position),Dn.position.y-=Hp+.3,Dn.lookAt(P.position),Dn.scale.setScalar(xa);const sr=Dn.children[0].material;sr.opacity=xa}else Dn.visible=!1;Pn.opacity=1-xa*.4});const In=at.y+Math.sin(qt*.8)*.35;$.lookAt(P.position),$.position.y=In,$.rotateZ(.15*Dt),R.emissiveIntensity=1.2+Math.sin(qt*1.5)*.5,Ut.lookAt(P.position),Ut.position.y=In;const vi=.72+Math.sin(qt*2.35)*.28,Ct=Ei.smoothstep(He,.2,.95);Gt.visible=Ct>.001,Ke.visible=Ct>.001,Gt.scale.setScalar(.88+vi*.28),oe.emissiveIntensity=Ct*(.48+vi*.45),Oe.intensity=Ct*(w?4.6:7.4)*vi,Ke.lookAt(P.position),Ke.scale.setScalar(.95+vi*.18),nn.opacity=Ct*(.2+vi*.32);let Di=t.current[0]?.meta.id??(l.length>0?l[0].id:""),ta=Number.POSITIVE_INFINITY;t.current.forEach(Ce=>{let Ae=Math.abs(Kt-Ce.progress);Ae>.5&&(Ae=1-Ae),Ae<ta&&(ta=Ae,Di=Ce.meta.id)}),Di!==$i&&($i=Di,p(Di)),q.render(J,P),requestAnimationFrame(Hr)};Hr(),D=()=>{q.domElement.removeEventListener("pointerdown",Zn),q.domElement.removeEventListener("pointermove",hi),q.domElement.removeEventListener("pointerleave",Ri),q.domElement.removeEventListener("wheel",di),q.domElement.removeEventListener("touchstart",Kn),q.domElement.removeEventListener("touchmove",Tn),window.removeEventListener("resize",Ci),window.removeEventListener("keydown",Xe),C.contains(q.domElement)&&C.removeChild(q.domElement),Mt.forEach(Dt=>{const qt=Dt.userData?.video;qt&&(qt.pause(),qt.src="",qt.load())}),Ee.forEach(Dt=>{Dt.pause(),Dt.src="",Dt.load()}),We.forEach(Dt=>Dt()),ut.forEach(Dt=>Dt.dispose?.()),ce.forEach(Dt=>Dt.dispose()),Ki.dispose(),ga.dispose(),W.albedo.dispose(),W.normal.dispose(),W.roughness.dispose(),W.ao.dispose(),ht.albedo.dispose(),ht.normal.dispose(),ht.roughness.dispose(),ht.ao.dispose(),Et.albedo.dispose(),Et.normal.dispose(),Et.roughness.dispose(),Et.ao.dispose(),Bt.forEach(Dt=>Dt.dispose()),it.texture.dispose(),it.dispose(),nt.dispose(),Ot.dispose(),et.dispose(),Qt.dispose(),dt.dispose(),ys.dispose(),zr.dispose(),Ss.dispose(),Vt.dispose(),Zt.dispose(),ne.dispose(),ln.dispose(),be.dispose(),ye.dispose(),he.dispose(),fn.dispose(),ze.dispose(),O.dispose(),pt.dispose(),q.dispose()}})(),()=>{L=!0,D()}},[l,M]),Wn.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Wn.jsx("div",{ref:r,className:"absolute inset-0"}),_||g?Wn.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:_?"Laster mediepaneler ...":g}):null,T?null:Wn.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Wn.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:"INTELLIGENSPARTIET"}),Wn.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:["Aktiv installasjon: ",S.title]})]}),T?Wn.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Wn.jsx("style",{children:`
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
            `}),Wn.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:"INTELLIGENSPARTET"}),Wn.jsx("a",{href:"#videos",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Wn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:"Videoer"})}),Wn.jsx("a",{href:"#signatures",className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Wn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:"Signaturer"})}),Wn.jsx("a",{href:"#news",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Wn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:"AI-nyheter"})})]}):null]})}function L2(){return Wn.jsx("div",{className:"min-h-screen bg-[#080604]",children:Wn.jsx(U2,{})})}_M.createRoot(document.getElementById("root")).render(Wn.jsx(ci.StrictMode,{children:Wn.jsx(L2,{})}));
