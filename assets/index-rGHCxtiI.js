(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var np={exports:{}},Hl={};var iv;function cM(){if(iv)return Hl;iv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Hl.Fragment=t,Hl.jsx=i,Hl.jsxs=i,Hl}var av;function uM(){return av||(av=1,np.exports=cM()),np.exports}var Wn=uM(),ip={exports:{}},ge={};var sv;function fM(){if(sv)return ge;sv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(L,K,ut){this.props=L,this.context=K,this.refs=M,this.updater=ut||T}S.prototype.isReactComponent={},S.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function C(){}C.prototype=S.prototype;function P(L,K,ut){this.props=L,this.context=K,this.refs=M,this.updater=ut||T}var U=P.prototype=new C;U.constructor=P,w(U,S.prototype),U.isPureReactComponent=!0;var N=Array.isArray;function z(){}var B={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(L,K,ut){var Tt=ut.ref;return{$$typeof:r,type:L,key:K,ref:Tt!==void 0?Tt:null,props:ut}}function lt(L,K){return D(L.type,K,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function W(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ut){return K[ut]})}var Y=/\/+/g;function Z(L,K){return typeof L=="object"&&L!==null&&L.key!=null?W(""+L.key):K.toString(36)}function V(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(z,z):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,K,ut,Tt,Nt){var tt=typeof L;(tt==="undefined"||tt==="boolean")&&(L=null);var mt=!1;if(L===null)mt=!0;else switch(tt){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(L.$$typeof){case r:case t:mt=!0;break;case _:return mt=L._init,O(mt(L._payload),K,ut,Tt,Nt)}}if(mt)return Nt=Nt(L),mt=Tt===""?"."+Z(L,0):Tt,N(Nt)?(ut="",mt!=null&&(ut=mt.replace(Y,"$&/")+"/"),O(Nt,K,ut,"",function(Ht){return Ht})):Nt!=null&&(H(Nt)&&(Nt=lt(Nt,ut+(Nt.key==null||L&&L.key===Nt.key?"":(""+Nt.key).replace(Y,"$&/")+"/")+mt)),K.push(Nt)),1;mt=0;var Mt=Tt===""?".":Tt+":";if(N(L))for(var Vt=0;Vt<L.length;Vt++)Tt=L[Vt],tt=Mt+Z(Tt,Vt),mt+=O(Tt,K,ut,tt,Nt);else if(Vt=y(L),typeof Vt=="function")for(L=Vt.call(L),Vt=0;!(Tt=L.next()).done;)Tt=Tt.value,tt=Mt+Z(Tt,Vt++),mt+=O(Tt,K,ut,tt,Nt);else if(tt==="object"){if(typeof L.then=="function")return O(V(L),K,ut,Tt,Nt);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return mt}function F(L,K,ut){if(L==null)return L;var Tt=[],Nt=0;return O(L,Tt,"","",function(tt){return K.call(ut,tt,Nt++)}),Tt}function st(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(ut){(L._status===0||L._status===-1)&&(L._status=1,L._result=ut)},function(ut){(L._status===0||L._status===-1)&&(L._status=2,L._result=ut)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var ft=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},St={map:F,forEach:function(L,K,ut){F(L,function(){K.apply(this,arguments)},ut)},count:function(L){var K=0;return F(L,function(){K++}),K},toArray:function(L){return F(L,function(K){return K})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ge.Activity=x,ge.Children=St,ge.Component=S,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=P,ge.StrictMode=s,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ge.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},ge.cache=function(L){return function(){return L.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(L,K,ut){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Tt=w({},L.props),Nt=L.key;if(K!=null)for(tt in K.key!==void 0&&(Nt=""+K.key),K)!b.call(K,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&K.ref===void 0||(Tt[tt]=K[tt]);var tt=arguments.length-2;if(tt===1)Tt.children=ut;else if(1<tt){for(var mt=Array(tt),Mt=0;Mt<tt;Mt++)mt[Mt]=arguments[Mt+2];Tt.children=mt}return D(L.type,Nt,Tt)},ge.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ge.createElement=function(L,K,ut){var Tt,Nt={},tt=null;if(K!=null)for(Tt in K.key!==void 0&&(tt=""+K.key),K)b.call(K,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Nt[Tt]=K[Tt]);var mt=arguments.length-2;if(mt===1)Nt.children=ut;else if(1<mt){for(var Mt=Array(mt),Vt=0;Vt<mt;Vt++)Mt[Vt]=arguments[Vt+2];Nt.children=Mt}if(L&&L.defaultProps)for(Tt in mt=L.defaultProps,mt)Nt[Tt]===void 0&&(Nt[Tt]=mt[Tt]);return D(L,tt,Nt)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(L){return{$$typeof:d,render:L}},ge.isValidElement=H,ge.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:st}},ge.memo=function(L,K){return{$$typeof:p,type:L,compare:K===void 0?null:K}},ge.startTransition=function(L){var K=B.T,ut={};B.T=ut;try{var Tt=L(),Nt=B.S;Nt!==null&&Nt(ut,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(z,ft)}catch(tt){ft(tt)}finally{K!==null&&ut.types!==null&&(K.types=ut.types),B.T=K}},ge.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ge.use=function(L){return B.H.use(L)},ge.useActionState=function(L,K,ut){return B.H.useActionState(L,K,ut)},ge.useCallback=function(L,K){return B.H.useCallback(L,K)},ge.useContext=function(L){return B.H.useContext(L)},ge.useDebugValue=function(){},ge.useDeferredValue=function(L,K){return B.H.useDeferredValue(L,K)},ge.useEffect=function(L,K){return B.H.useEffect(L,K)},ge.useEffectEvent=function(L){return B.H.useEffectEvent(L)},ge.useId=function(){return B.H.useId()},ge.useImperativeHandle=function(L,K,ut){return B.H.useImperativeHandle(L,K,ut)},ge.useInsertionEffect=function(L,K){return B.H.useInsertionEffect(L,K)},ge.useLayoutEffect=function(L,K){return B.H.useLayoutEffect(L,K)},ge.useMemo=function(L,K){return B.H.useMemo(L,K)},ge.useOptimistic=function(L,K){return B.H.useOptimistic(L,K)},ge.useReducer=function(L,K,ut){return B.H.useReducer(L,K,ut)},ge.useRef=function(L){return B.H.useRef(L)},ge.useState=function(L){return B.H.useState(L)},ge.useSyncExternalStore=function(L,K,ut){return B.H.useSyncExternalStore(L,K,ut)},ge.useTransition=function(){return B.H.useTransition()},ge.version="19.2.4",ge}var rv;function am(){return rv||(rv=1,ip.exports=fM()),ip.exports}var Hn=am(),ap={exports:{}},Gl={},sp={exports:{}},rp={};var ov;function hM(){return ov||(ov=1,(function(r){function t(O,F){var st=O.length;O.push(F);t:for(;0<st;){var ft=st-1>>>1,St=O[ft];if(0<l(St,F))O[ft]=F,O[st]=St,st=ft;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var F=O[0],st=O.pop();if(st!==F){O[0]=st;t:for(var ft=0,St=O.length,L=St>>>1;ft<L;){var K=2*(ft+1)-1,ut=O[K],Tt=K+1,Nt=O[Tt];if(0>l(ut,st))Tt<St&&0>l(Nt,ut)?(O[ft]=Nt,O[Tt]=st,ft=Tt):(O[ft]=ut,O[K]=st,ft=K);else if(Tt<St&&0>l(Nt,st))O[ft]=Nt,O[Tt]=st,ft=Tt;else break t}}return F}function l(O,F){var st=O.sortIndex-F.sortIndex;return st!==0?st:O.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,g=3,y=!1,T=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=O)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function N(O){if(w=!1,U(O),!T)if(i(m)!==null)T=!0,z||(z=!0,W());else{var F=i(p);F!==null&&V(N,F.startTime-O)}}var z=!1,B=-1,b=5,D=-1;function lt(){return M?!0:!(r.unstable_now()-D<b)}function H(){if(M=!1,z){var O=r.unstable_now();D=O;var F=!0;try{t:{T=!1,w&&(w=!1,C(B),B=-1),y=!0;var st=g;try{e:{for(U(O),x=i(m);x!==null&&!(x.expirationTime>O&&lt());){var ft=x.callback;if(typeof ft=="function"){x.callback=null,g=x.priorityLevel;var St=ft(x.expirationTime<=O);if(O=r.unstable_now(),typeof St=="function"){x.callback=St,U(O),F=!0;break e}x===i(m)&&s(m),U(O)}else s(m);x=i(m)}if(x!==null)F=!0;else{var L=i(p);L!==null&&V(N,L.startTime-O),F=!1}}break t}finally{x=null,g=st,y=!1}F=void 0}}finally{F?W():z=!1}}}var W;if(typeof P=="function")W=function(){P(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,Z=Y.port2;Y.port1.onmessage=H,W=function(){Z.postMessage(null)}}else W=function(){S(H,0)};function V(O,F){B=S(function(){O(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var st=g;g=F;try{return O()}finally{g=st}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var st=g;g=O;try{return F()}finally{g=st}},r.unstable_scheduleCallback=function(O,F,st){var ft=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?ft+st:ft):st=ft,O){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=st+St,O={id:_++,callback:F,priorityLevel:O,startTime:st,expirationTime:St,sortIndex:-1},st>ft?(O.sortIndex=st,t(p,O),i(m)===null&&O===i(p)&&(w?(C(B),B=-1):w=!0,V(N,st-ft))):(O.sortIndex=St,t(m,O),T||y||(T=!0,z||(z=!0,W()))),O},r.unstable_shouldYield=lt,r.unstable_wrapCallback=function(O){var F=g;return function(){var st=g;g=F;try{return O.apply(this,arguments)}finally{g=st}}}})(rp)),rp}var lv;function dM(){return lv||(lv=1,sp.exports=hM()),sp.exports}var op={exports:{}},gi={};var cv;function pM(){if(cv)return gi;cv=1;var r=am();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return gi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,gi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},gi.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},gi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},gi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},gi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},gi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},gi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},gi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},gi.requestFormReset=function(m){s.d.r(m)},gi.unstable_batchedUpdates=function(m,p){return m(p)},gi.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},gi.useFormStatus=function(){return h.H.useHostTransitionStatus()},gi.version="19.2.4",gi}var uv;function mM(){if(uv)return op.exports;uv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),op.exports=pM(),op.exports}var fv;function gM(){if(fv)return Gl;fv=1;var r=dM(),t=am(),i=mM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,o=f;break}if(A===o){v=!0,o=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,o=u;break}if(A===o){v=!0,o=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),lt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case P:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}var V=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},ft=[],St=-1;function L(e){return{current:e}}function K(e){0>St||(e.current=ft[St],ft[St]=null,St--)}function ut(e,n){St++,ft[St]=e.current,e.current=n}var Tt=L(null),Nt=L(null),tt=L(null),mt=L(null);function Mt(e,n){switch(ut(tt,n),ut(Nt,e),ut(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?A_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=A_(n),e=R_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Tt),ut(Tt,e)}function Vt(){K(Tt),K(Nt),K(tt)}function Ht(e){e.memoizedState!==null&&ut(mt,e);var n=Tt.current,a=R_(n,e.type);n!==a&&(ut(Nt,e),ut(Tt,a))}function re(e){Nt.current===e&&(K(Tt),K(Nt)),mt.current===e&&(K(mt),Pl._currentValue=st)}var on,ye;function _e(e){if(on===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);on=n&&n[1]||"",ye=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+on+e+ye}var Ue=!1;function pe(e,n){if(!e||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var rt=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){rt=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var G=v.split(`
`),it=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===it.length)for(o=G.length-1,u=it.length-1;1<=o&&0<=u&&G[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==it[u]){var gt=`
`+G[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function dn(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return _e("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=dn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ln=Object.prototype.hasOwnProperty,Ce=r.unstable_scheduleCallback,ze=r.unstable_cancelCallback,jt=r.unstable_shouldYield,I=r.unstable_requestPaint,E=r.unstable_now,Q=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,ee=r.log,ae=r.unstable_setDisableYieldValue,bt=null,Et=null;function Gt(e){if(typeof ee=="function"&&ae(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(bt,e)}catch{}}var It=Math.clz32?Math.clz32:j,Ot=Math.log,he=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(Ot(e)/he|0)|0}var Ct=256,At=262144,Dt=4194304;function yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=yt(o):(v&=A,v!==0?u=yt(v):a||(a=A&~e,a!==0&&(u=yt(a))))):(A=o&~f,A!==0?u=yt(A):v!==0?u=yt(v):a||(a=o&~e,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Vn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ci(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(a=v&~a;0<a;){var gt=31-It(a),vt=1<<gt;A[gt]=0,G[gt]=-1;var rt=it[gt];if(rt!==null)for(it[gt]=null,gt=0;gt<rt.length;gt++){var ct=rt[gt];ct!==null&&(ct.lane&=-536870913)}a&=~vt}o!==0&&Zi(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Zi(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ss(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Xa(e,n){var a=n&-n;return a=(a&42)!==0?1:Wa(a),(a&(e.suspendedLanes|n))!==0?0:a}function Wa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ys(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ki(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:K_(e.type))}function Ms(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var Fi=Math.random().toString(36).slice(2),An="__reactFiber$"+Fi,wn="__reactProps$"+Fi,Qi="__reactContainer$"+Fi,Si="__reactEvents$"+Fi,rr="__reactListeners$"+Fi,or="__reactHandles$"+Fi,Sn="__reactResources$"+Fi,kn="__reactMarker$"+Fi;function Ji(e){delete e[An],delete e[wn],delete e[Si],delete e[rr],delete e[or]}function Bi(e){var n=e[An];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qi]||a[An]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=O_(e);e!==null;){if(a=e[An])return a;e=O_(e)}return n}e=a,a=e.parentNode}return null}function cn(e){if(e=e[An]||e[Qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function va(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[Sn];return n||(n=e[Sn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[kn]=!0}var ot=new Set,at={};function et(e,n){Lt(e,n),Lt(e+"Capture",n)}function Lt(e,n){for(at[e]=n,e=0;e<n.length;e++)ot.add(n[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pt={},Zt={};function qt(e){return ln.call(Zt,e)?!0:ln.call(Pt,e)?!1:zt.test(e)?Zt[e]=!0:(Pt[e]=!0,!1)}function ce(e,n,a){if(qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function de(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Le(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=un(e,n,""+e[n])}}function pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Wt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zn=/[\n"\\]/g;function ue(e){return e.replace(Zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Kn(e,n,a,o,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+me(n)):e.value!==""+me(n)&&(e.value=""+me(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Qn(e,v,me(n)):a!=null?Qn(e,v,me(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+me(A):e.removeAttribute("name")}function Nn(e,n,a,o,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Le(e);return}a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Le(e)}function Qn(e,n,a){n==="number"&&Wt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ye(e,n,a){if(n!=null&&(n=""+me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+me(a):""}function yn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(V(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=me(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Le(e)}function Jn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function $i(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wi(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&wi(e,f,n[f])}function Ya(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Es(e){return dc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Gr=null;function Vr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,Rt=null;function Jt(e){var n=cn(e);if(n&&(e=n.stateNode)){var a=e[wn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Kn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[wn]||null;if(!u)throw Error(s(90));Kn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&pn(o)}break t;case"textarea":Ye(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&pi(e,!!a.multiple,n,!1)}}}var $t=!1;function Qt(e,n,a){if($t)return e(n,a);$t=!0;try{var o=e(n);return o}finally{if($t=!1,(qa!==null||Rt!==null)&&(Zc(),qa&&(n=qa,e=Rt,Rt=qa=null,Jt(n),e)))for(n=0;n<e.length;n++)Jt(e[n])}}function Ft(e,n){var a=e.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ne=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ne=!1;if(ne)try{var qe={};Object.defineProperty(qe,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",qe,qe),window.removeEventListener("test",qe,qe)}catch{Ne=!1}var Oe=null,ri=null,$n=null;function Mn(){if($n)return $n;var e,n=ri,a=n.length,o,u="value"in Oe?Oe.value:Oe.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return $n=u.slice(e,1<o?1-o:void 0)}function Ge(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function je(){return!0}function vn(){return!1}function Ve(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?je:vn,this.isPropagationStopped=vn,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=je)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=je)},persist:function(){},isPersistent:je}),n}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Ve(ti),Di=x({},ti,{view:0,detail:0}),na=Ve(Di),wt,En,oi,be=x({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oi&&(oi&&e.type==="mousemove"?(wt=e.screenX-oi.screenX,En=e.screenY-oi.screenY):En=wt=0,oi=e),wt)},movementY:function(e){return"movementY"in e?e.movementY:En}}),Ie=Ve(be),Tn=x({},be,{dataTransfer:0}),Dn=Ve(Tn),yi=x({},Di,{relatedTarget:0}),ve=Ve(yi),On=x({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),mi=Ve(On),li=x({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mi=Ve(li),xa=x({},ti,{data:0}),Ts=Ve(xa),$o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ja={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function el(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tl[e])?!!n[e]:!1}function nl(){return el}var SS=x({},Di,{key:function(e){if(e.key){var n=$o[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ge(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ja[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Ge(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ge(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yS=Ve(SS),MS=x({},be,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=Ve(MS),ES=x({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),TS=Ve(ES),bS=x({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),AS=Ve(bS),RS=x({},be,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Ve(RS),wS=x({},ti,{newState:0,oldState:0}),DS=Ve(wS),US=[9,13,27,32],lh=ne&&"CompositionEvent"in window,il=null;ne&&"documentMode"in document&&(il=document.documentMode);var LS=ne&&"TextEvent"in window&&!il,Lm=ne&&(!lh||il&&8<il&&11>=il),Nm=" ",Om=!1;function Im(e,n){switch(e){case"keyup":return US.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function NS(e,n){switch(e){case"compositionend":return Pm(n);case"keypress":return n.which!==32?null:(Om=!0,Nm);case"textInput":return e=n.data,e===Nm&&Om?null:e;default:return null}}function OS(e,n){if(kr)return e==="compositionend"||!lh&&Im(e,n)?(e=Mn(),$n=ri=Oe=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lm&&n.locale!=="ko"?null:n.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!IS[e.type]:n==="textarea"}function Bm(e,n,a,o){qa?Rt?Rt.push(o):Rt=[o]:qa=o,n=nu(n,"onChange"),0<n.length&&(a=new ea("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var al=null,sl=null;function PS(e){S_(e,0)}function pc(e){var n=va(e);if(pn(n))return e}function zm(e,n){if(e==="change")return n}var Hm=!1;if(ne){var ch;if(ne){var uh="oninput"in document;if(!uh){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),uh=typeof Gm.oninput=="function"}ch=uh}else ch=!1;Hm=ch&&(!document.documentMode||9<document.documentMode)}function Vm(){al&&(al.detachEvent("onpropertychange",km),sl=al=null)}function km(e){if(e.propertyName==="value"&&pc(sl)){var n=[];Bm(n,sl,e,Vr(e)),Qt(PS,n)}}function FS(e,n,a){e==="focusin"?(Vm(),al=n,sl=a,al.attachEvent("onpropertychange",km)):e==="focusout"&&Vm()}function BS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pc(sl)}function zS(e,n){if(e==="click")return pc(n)}function HS(e,n){if(e==="input"||e==="change")return pc(n)}function GS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zi=typeof Object.is=="function"?Object.is:GS;function rl(e,n){if(zi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ln.call(n,u)||!zi(e[u],n[u]))return!1}return!0}function Xm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wm(e,n){var a=Xm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xm(a)}}function Ym(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ym(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Wt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Wt(e.document)}return n}function fh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var VS=ne&&"documentMode"in document&&11>=document.documentMode,Xr=null,hh=null,ol=null,dh=!1;function jm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dh||Xr==null||Xr!==Wt(o)||(o=Xr,"selectionStart"in o&&fh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ol&&rl(ol,o)||(ol=o,o=nu(hh,"onSelect"),0<o.length&&(n=new ea("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xr)))}function lr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Wr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ph={},Zm={};ne&&(Zm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function cr(e){if(ph[e])return ph[e];if(!Wr[e])return e;var n=Wr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zm)return ph[e]=n[a];return e}var Km=cr("animationend"),Qm=cr("animationiteration"),Jm=cr("animationstart"),kS=cr("transitionrun"),XS=cr("transitionstart"),WS=cr("transitioncancel"),$m=cr("transitionend"),t0=new Map,mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mh.push("scrollEnd");function Sa(e,n){t0.set(e,n),et(n,[e])}var mc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ia=[],Yr=0,gh=0;function gc(){for(var e=Yr,n=gh=Yr=0;n<e;){var a=ia[n];ia[n++]=null;var o=ia[n];ia[n++]=null;var u=ia[n];ia[n++]=null;var f=ia[n];if(ia[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&e0(a,u,f)}}function _c(e,n,a,o){ia[Yr++]=e,ia[Yr++]=n,ia[Yr++]=a,ia[Yr++]=o,gh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function _h(e,n,a,o){return _c(e,n,a,o),vc(e)}function ur(e,n){return _c(e,null,null,n),vc(e)}function e0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vc(e){if(50<wl)throw wl=0,Ad=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function YS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(e,n,a,o){return new YS(e,n,a,o)}function vh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Za(e,n){var a=e.alternate;return a===null?(a=Hi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function n0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xc(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")vh(e)&&(v=1);else if(typeof e=="string")v=Qy(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Hi(31,a,n,u),e.elementType=D,e.lanes=f,e;case w:return fr(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=Hi(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case N:return e=Hi(13,a,n,u),e.elementType=N,e.lanes=f,e;case z:return e=Hi(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:v=10;break t;case C:v=9;break t;case U:v=11;break t;case B:v=14;break t;case b:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Hi(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function fr(e,n,a,o){return e=Hi(7,e,o,n),e.lanes=a,e}function xh(e,n,a){return e=Hi(6,e,null,n),e.lanes=a,e}function i0(e){var n=Hi(18,null,null,0);return n.stateNode=e,n}function Sh(e,n,a){return n=Hi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var a0=new WeakMap;function aa(e,n){if(typeof e=="object"&&e!==null){var a=a0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},a0.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var jr=[],Zr=0,Sc=null,ll=0,sa=[],ra=0,bs=null,Na=1,Oa="";function Ka(e,n){jr[Zr++]=ll,jr[Zr++]=Sc,Sc=e,ll=n}function s0(e,n,a){sa[ra++]=Na,sa[ra++]=Oa,sa[ra++]=bs,bs=e;var o=Na;e=Oa;var u=32-It(o)-1;o&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Na=1<<32-It(n)+u|a<<u|o,Oa=f+e}else Na=1<<f|a<<u|o,Oa=e}function yh(e){e.return!==null&&(Ka(e,1),s0(e,1,0))}function Mh(e){for(;e===Sc;)Sc=jr[--Zr],jr[Zr]=null,ll=jr[--Zr],jr[Zr]=null;for(;e===bs;)bs=sa[--ra],sa[ra]=null,Oa=sa[--ra],sa[ra]=null,Na=sa[--ra],sa[ra]=null}function r0(e,n){sa[ra++]=Na,sa[ra++]=Oa,sa[ra++]=bs,Na=n.id,Oa=n.overflow,bs=e}var ci=null,gn=null,Be=!1,As=null,oa=!1,Eh=Error(s(519));function Rs(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cl(aa(n,e)),Eh}function o0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[An]=e,n[wn]=o,a){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(a=0;a<Ul.length;a++)De(Ul[a],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),yn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||T_(n.textContent,a)?(o.popover!=null&&(De("beforetoggle",n),De("toggle",n)),o.onScroll!=null&&De("scroll",n),o.onScrollEnd!=null&&De("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Rs(e,!0)}function l0(e){for(ci=e.return;ci;)switch(ci.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:ci=ci.return}}function Kr(e){if(e!==ci)return!1;if(!Be)return l0(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gd(e.type,e.memoizedProps)),a=!a),a&&gn&&Rs(e),l0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=N_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=N_(e)}else n===27?(n=gn,Gs(e.type)?(e=Yd,Yd=null,gn=e):gn=n):gn=ci?ca(e.stateNode.nextSibling):null;return!0}function hr(){gn=ci=null,Be=!1}function Th(){var e=As;return e!==null&&(Oi===null?Oi=e:Oi.push.apply(Oi,e),As=null),e}function cl(e){As===null?As=[e]:As.push(e)}var bh=L(null),dr=null,Qa=null;function Cs(e,n,a){ut(bh,n._currentValue),n._currentValue=a}function Ja(e){e._currentValue=bh.current,K(bh)}function Ah(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Rh(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ah(f.return,a,e),o||(v=null);break t}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ah(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Qr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;zi(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===mt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Pl):e=[Pl])}u=u.return}e!==null&&Rh(n,e,a,o),n.flags|=262144}function yc(e){for(e=e.firstContext;e!==null;){if(!zi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pr(e){dr=e,Qa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ui(e){return c0(dr,e)}function Mc(e,n){return dr===null&&pr(e),c0(e,n)}function c0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qa===null){if(e===null)throw Error(s(308));Qa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qa=Qa.next=n;return a}var qS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},jS=r.unstable_scheduleCallback,ZS=r.unstable_NormalPriority,In={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ch(){return{controller:new qS,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&jS(ZS,function(){e.controller.abort()})}var fl=null,wh=0,Jr=0,$r=null;function KS(e,n){if(fl===null){var a=fl=[];wh=0,Jr=Ld(),$r={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wh++,n.then(u0,u0),n}function u0(){if(--wh===0&&fl!==null){$r!==null&&($r.status="fulfilled");var e=fl;fl=null,Jr=0,$r=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function QS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var f0=O.S;O.S=function(e,n){jg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&KS(e,n),f0!==null&&f0(e,n)};var mr=L(null);function Dh(){var e=mr.current;return e!==null?e:fn.pooledCache}function Ec(e,n){n===null?ut(mr,mr.current):ut(mr,n.pool)}function h0(){var e=Dh();return e===null?null:{parent:In._currentValue,pool:e}}var to=Error(s(460)),Uh=Error(s(474)),Tc=Error(s(542)),bc={then:function(){}};function d0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function p0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,g0(e),e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=fn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,g0(e),e}throw _r=n,to}}function gr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_r=a,to):a}}var _r=null;function m0(){if(_r===null)throw Error(s(459));var e=_r;return _r=null,e}function g0(e){if(e===to||e===Tc)throw Error(s(483))}var eo=null,hl=0;function Ac(e){var n=hl;return hl+=1,eo===null&&(eo=[]),p0(eo,e,n)}function dl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _0(e){function n(J,X){if(e){var nt=J.deletions;nt===null?(J.deletions=[X],J.flags|=16):nt.push(X)}}function a(J,X){if(!e)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function o(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function u(J,X){return J=Za(J,X),J.index=0,J.sibling=null,J}function f(J,X,nt){return J.index=nt,e?(nt=J.alternate,nt!==null?(nt=nt.index,nt<X?(J.flags|=67108866,X):nt):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function v(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function A(J,X,nt,_t){return X===null||X.tag!==6?(X=xh(nt,J.mode,_t),X.return=J,X):(X=u(X,nt),X.return=J,X)}function G(J,X,nt,_t){var ie=nt.type;return ie===w?gt(J,X,nt.props.children,_t,nt.key):X!==null&&(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===b&&gr(ie)===X.type)?(X=u(X,nt.props),dl(X,nt),X.return=J,X):(X=xc(nt.type,nt.key,nt.props,null,J.mode,_t),dl(X,nt),X.return=J,X)}function it(J,X,nt,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=Sh(nt,J.mode,_t),X.return=J,X):(X=u(X,nt.children||[]),X.return=J,X)}function gt(J,X,nt,_t,ie){return X===null||X.tag!==7?(X=fr(nt,J.mode,_t,ie),X.return=J,X):(X=u(X,nt),X.return=J,X)}function vt(J,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=xh(""+X,J.mode,nt),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return nt=xc(X.type,X.key,X.props,null,J.mode,nt),dl(nt,X),nt.return=J,nt;case T:return X=Sh(X,J.mode,nt),X.return=J,X;case b:return X=gr(X),vt(J,X,nt)}if(V(X)||W(X))return X=fr(X,J.mode,nt,null),X.return=J,X;if(typeof X.then=="function")return vt(J,Ac(X),nt);if(X.$$typeof===P)return vt(J,Mc(J,X),nt);Rc(J,X)}return null}function rt(J,X,nt,_t){var ie=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ie!==null?null:A(J,X,""+nt,_t);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return nt.key===ie?G(J,X,nt,_t):null;case T:return nt.key===ie?it(J,X,nt,_t):null;case b:return nt=gr(nt),rt(J,X,nt,_t)}if(V(nt)||W(nt))return ie!==null?null:gt(J,X,nt,_t,null);if(typeof nt.then=="function")return rt(J,X,Ac(nt),_t);if(nt.$$typeof===P)return rt(J,X,Mc(J,nt),_t);Rc(J,nt)}return null}function ct(J,X,nt,_t,ie){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(nt)||null,A(X,J,""+_t,ie);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return J=J.get(_t.key===null?nt:_t.key)||null,G(X,J,_t,ie);case T:return J=J.get(_t.key===null?nt:_t.key)||null,it(X,J,_t,ie);case b:return _t=gr(_t),ct(J,X,nt,_t,ie)}if(V(_t)||W(_t))return J=J.get(nt)||null,gt(X,J,_t,ie,null);if(typeof _t.then=="function")return ct(J,X,nt,Ac(_t),ie);if(_t.$$typeof===P)return ct(J,X,nt,Mc(X,_t),ie);Rc(X,_t)}return null}function Kt(J,X,nt,_t){for(var ie=null,Ze=null,te=X,Me=X=0,Fe=null;te!==null&&Me<nt.length;Me++){te.index>Me?(Fe=te,te=null):Fe=te.sibling;var Ke=rt(J,te,nt[Me],_t);if(Ke===null){te===null&&(te=Fe);break}e&&te&&Ke.alternate===null&&n(J,te),X=f(Ke,X,Me),Ze===null?ie=Ke:Ze.sibling=Ke,Ze=Ke,te=Fe}if(Me===nt.length)return a(J,te),Be&&Ka(J,Me),ie;if(te===null){for(;Me<nt.length;Me++)te=vt(J,nt[Me],_t),te!==null&&(X=f(te,X,Me),Ze===null?ie=te:Ze.sibling=te,Ze=te);return Be&&Ka(J,Me),ie}for(te=o(te);Me<nt.length;Me++)Fe=ct(te,J,Me,nt[Me],_t),Fe!==null&&(e&&Fe.alternate!==null&&te.delete(Fe.key===null?Me:Fe.key),X=f(Fe,X,Me),Ze===null?ie=Fe:Ze.sibling=Fe,Ze=Fe);return e&&te.forEach(function(Ys){return n(J,Ys)}),Be&&Ka(J,Me),ie}function le(J,X,nt,_t){if(nt==null)throw Error(s(151));for(var ie=null,Ze=null,te=X,Me=X=0,Fe=null,Ke=nt.next();te!==null&&!Ke.done;Me++,Ke=nt.next()){te.index>Me?(Fe=te,te=null):Fe=te.sibling;var Ys=rt(J,te,Ke.value,_t);if(Ys===null){te===null&&(te=Fe);break}e&&te&&Ys.alternate===null&&n(J,te),X=f(Ys,X,Me),Ze===null?ie=Ys:Ze.sibling=Ys,Ze=Ys,te=Fe}if(Ke.done)return a(J,te),Be&&Ka(J,Me),ie;if(te===null){for(;!Ke.done;Me++,Ke=nt.next())Ke=vt(J,Ke.value,_t),Ke!==null&&(X=f(Ke,X,Me),Ze===null?ie=Ke:Ze.sibling=Ke,Ze=Ke);return Be&&Ka(J,Me),ie}for(te=o(te);!Ke.done;Me++,Ke=nt.next())Ke=ct(te,J,Me,Ke.value,_t),Ke!==null&&(e&&Ke.alternate!==null&&te.delete(Ke.key===null?Me:Ke.key),X=f(Ke,X,Me),Ze===null?ie=Ke:Ze.sibling=Ke,Ze=Ke);return e&&te.forEach(function(lM){return n(J,lM)}),Be&&Ka(J,Me),ie}function sn(J,X,nt,_t){if(typeof nt=="object"&&nt!==null&&nt.type===w&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:t:{for(var ie=nt.key;X!==null;){if(X.key===ie){if(ie=nt.type,ie===w){if(X.tag===7){a(J,X.sibling),_t=u(X,nt.props.children),_t.return=J,J=_t;break t}}else if(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===b&&gr(ie)===X.type){a(J,X.sibling),_t=u(X,nt.props),dl(_t,nt),_t.return=J,J=_t;break t}a(J,X);break}else n(J,X);X=X.sibling}nt.type===w?(_t=fr(nt.props.children,J.mode,_t,nt.key),_t.return=J,J=_t):(_t=xc(nt.type,nt.key,nt.props,null,J.mode,_t),dl(_t,nt),_t.return=J,J=_t)}return v(J);case T:t:{for(ie=nt.key;X!==null;){if(X.key===ie)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(J,X.sibling),_t=u(X,nt.children||[]),_t.return=J,J=_t;break t}else{a(J,X);break}else n(J,X);X=X.sibling}_t=Sh(nt,J.mode,_t),_t.return=J,J=_t}return v(J);case b:return nt=gr(nt),sn(J,X,nt,_t)}if(V(nt))return Kt(J,X,nt,_t);if(W(nt)){if(ie=W(nt),typeof ie!="function")throw Error(s(150));return nt=ie.call(nt),le(J,X,nt,_t)}if(typeof nt.then=="function")return sn(J,X,Ac(nt),_t);if(nt.$$typeof===P)return sn(J,X,Mc(J,nt),_t);Rc(J,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(J,X.sibling),_t=u(X,nt),_t.return=J,J=_t):(a(J,X),_t=xh(nt,J.mode,_t),_t.return=J,J=_t),v(J)):a(J,X)}return function(J,X,nt,_t){try{hl=0;var ie=sn(J,X,nt,_t);return eo=null,ie}catch(te){if(te===to||te===Tc)throw te;var Ze=Hi(29,te,null,J.mode);return Ze.lanes=_t,Ze.return=J,Ze}}}var vr=_0(!0),v0=_0(!1),ws=!1;function Lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ds(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Us(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vc(e),e0(e,null,a),n}return _c(e,o,n,a),vc(e)}function pl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ss(e,a)}}function Oh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ih=!1;function ml(){if(Ih){var e=$r;if(e!==null)throw e}}function gl(e,n,a,o){Ih=!1;var u=e.updateQueue;ws=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,it=G.next;G.next=null,v===null?f=it:v.next=it,v=G;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,A=gt.lastBaseUpdate,A!==v&&(A===null?gt.firstBaseUpdate=it:A.next=it,gt.lastBaseUpdate=G))}if(f!==null){var vt=u.baseState;v=0,gt=it=G=null,A=f;do{var rt=A.lane&-536870913,ct=rt!==A.lane;if(ct?(Pe&rt)===rt:(o&rt)===rt){rt!==0&&rt===Jr&&(Ih=!0),gt!==null&&(gt=gt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Kt=e,le=A;rt=n;var sn=a;switch(le.tag){case 1:if(Kt=le.payload,typeof Kt=="function"){vt=Kt.call(sn,vt,rt);break t}vt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=le.payload,rt=typeof Kt=="function"?Kt.call(sn,vt,rt):Kt,rt==null)break t;vt=x({},vt,rt);break t;case 2:ws=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},gt===null?(it=gt=ct,G=vt):gt=gt.next=ct,v|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);gt===null&&(G=vt),u.baseState=G,u.firstBaseUpdate=it,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),Ps|=v,e.lanes=v,e.memoizedState=vt}}function x0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function S0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)x0(a[e],n)}var no=L(null),Cc=L(0);function y0(e,n){e=os,ut(Cc,e),ut(no,n),os=e|n.baseLanes}function Ph(){ut(Cc,os),ut(no,no.current)}function Fh(){os=Cc.current,K(no),K(Cc)}var Gi=L(null),la=null;function Ls(e){var n=e.alternate;ut(Un,Un.current&1),ut(Gi,e),la===null&&(n===null||no.current!==null||n.memoizedState!==null)&&(la=e)}function Bh(e){ut(Un,Un.current),ut(Gi,e),la===null&&(la=e)}function M0(e){e.tag===22?(ut(Un,Un.current),ut(Gi,e),la===null&&(la=e)):Ns()}function Ns(){ut(Un,Un.current),ut(Gi,Gi.current)}function Vi(e){K(Gi),la===e&&(la=null),K(Un)}var Un=L(0);function wc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xd(a)||Wd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $a=0,xe=null,nn=null,Pn=null,Dc=!1,io=!1,xr=!1,Uc=0,_l=0,ao=null,JS=0;function Rn(){throw Error(s(321))}function zh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!zi(e[a],n[a]))return!1;return!0}function Hh(e,n,a,o,u,f){return $a=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?sg:ed,xr=!1,f=a(o,u),xr=!1,io&&(f=T0(n,a,o,u)),E0(e),f}function E0(e){O.H=Sl;var n=nn!==null&&nn.next!==null;if($a=0,Pn=nn=xe=null,Dc=!1,_l=0,ao=null,n)throw Error(s(300));e===null||Fn||(e=e.dependencies,e!==null&&yc(e)&&(Fn=!0))}function T0(e,n,a,o){xe=e;var u=0;do{if(io&&(ao=null),_l=0,io=!1,25<=u)throw Error(s(301));if(u+=1,Pn=nn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=rg,f=n(a,o)}while(io);return f}function $S(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?vl(n):n,e=e.useState()[0],(nn!==null?nn.memoizedState:null)!==e&&(xe.flags|=1024),n}function Gh(){var e=Uc!==0;return Uc=0,e}function Vh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function kh(e){if(Dc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dc=!1}$a=0,Pn=nn=xe=null,io=!1,_l=Uc=0,ao=null}function Ei(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pn===null?xe.memoizedState=Pn=e:Pn=Pn.next=e,Pn}function Ln(){if(nn===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=nn.next;var n=Pn===null?xe.memoizedState:Pn.next;if(n!==null)Pn=n,nn=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));nn=e,e={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},Pn===null?xe.memoizedState=Pn=e:Pn=Pn.next=e}return Pn}function Lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vl(e){var n=_l;return _l+=1,ao===null&&(ao=[]),e=p0(ao,e,n),n=xe,(Pn===null?n.memoizedState:Pn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?sg:ed),e}function Nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vl(e);if(e.$$typeof===P)return ui(e)}throw Error(s(438,String(e)))}function Xh(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Lc(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=lt;return n.index++,a}function ts(e,n){return typeof n=="function"?n(e):n}function Oc(e){var n=Ln();return Wh(n,nn,e)}function Wh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,G=null,it=n,gt=!1;do{var vt=it.lane&-536870913;if(vt!==it.lane?(Pe&vt)===vt:($a&vt)===vt){var rt=it.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),vt===Jr&&(gt=!0);else if(($a&rt)===rt){it=it.next,rt===Jr&&(gt=!0);continue}else vt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(A=G=vt,v=f):G=G.next=vt,xe.lanes|=rt,Ps|=rt;vt=it.action,xr&&a(f,vt),f=it.hasEagerState?it.eagerState:a(f,vt)}else rt={lane:vt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(A=G=rt,v=f):G=G.next=rt,xe.lanes|=vt,Ps|=vt;it=it.next}while(it!==null&&it!==n);if(G===null?v=f:G.next=A,!zi(f,e.memoizedState)&&(Fn=!0,gt&&(a=$r,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Yh(e){var n=Ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);zi(f,n.memoizedState)||(Fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function b0(e,n,a){var o=xe,u=Ln(),f=Be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!zi((nn||u).memoizedState,a);if(v&&(u.memoizedState=a,Fn=!0),u=u.queue,Zh(C0.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||Pn!==null&&Pn.memoizedState.tag&1){if(o.flags|=2048,so(9,{destroy:void 0},R0.bind(null,o,u,a,n),null),fn===null)throw Error(s(349));f||($a&127)!==0||A0(o,n,a)}return a}function A0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Lc(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function R0(e,n,a,o){n.value=a,n.getSnapshot=o,w0(n)&&D0(e)}function C0(e,n,a){return a(function(){w0(n)&&D0(e)})}function w0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!zi(e,a)}catch{return!0}}function D0(e){var n=ur(e,2);n!==null&&Ii(n,e,2)}function qh(e){var n=Ei();if(typeof e=="function"){var a=e;if(e=a(),xr){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:e},n}function U0(e,n,a,o){return e.baseState=a,Wh(e,nn,typeof o=="function"?o:ts)}function ty(e,n,a,o,u){if(Fc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,L0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function L0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var A=a(u,o),G=O.S;G!==null&&G(v,A),N0(e,n,A)}catch(it){jh(e,n,it)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,o),N0(e,n,f)}catch(it){jh(e,n,it)}}function N0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){O0(e,n,o)},function(o){return jh(e,n,o)}):O0(e,n,a)}function O0(e,n,a){n.status="fulfilled",n.value=a,I0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,L0(e,a)))}function jh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,I0(n),n=n.next;while(n!==o)}e.action=null}function I0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function P0(e,n){return n}function F0(e,n){if(Be){var a=fn.formState;if(a!==null){t:{var o=xe;if(Be){if(gn){e:{for(var u=gn,f=oa;u.nodeType!==8;){if(!f){u=null;break e}if(u=ca(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){gn=ca(u.nextSibling),o=u.data==="F!";break t}}Rs(o)}o=!1}o&&(n=a[0])}}return a=Ei(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:n},a.queue=o,a=ng.bind(null,xe,o),o.dispatch=a,o=qh(!1),f=td.bind(null,xe,!1,o.queue),o=Ei(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ty.bind(null,xe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function B0(e){var n=Ln();return z0(n,nn,e)}function z0(e,n,a){if(n=Wh(e,n,P0)[0],e=Oc(ts)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vl(n)}catch(v){throw v===to?Tc:v}else o=n;n=Ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,so(9,{destroy:void 0},ey.bind(null,u,a),null)),[o,f,e]}function ey(e,n){e.action=n}function H0(e){var n=Ln(),a=nn;if(a!==null)return z0(n,a,e);Ln(),n=n.memoizedState,a=Ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function so(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Lc(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function G0(){return Ln().memoizedState}function Ic(e,n,a,o){var u=Ei();xe.flags|=e,u.memoizedState=so(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pc(e,n,a,o){var u=Ln();o=o===void 0?null:o;var f=u.memoizedState.inst;nn!==null&&o!==null&&zh(o,nn.memoizedState.deps)?u.memoizedState=so(n,f,a,o):(xe.flags|=e,u.memoizedState=so(1|n,f,a,o))}function V0(e,n){Ic(8390656,8,e,n)}function Zh(e,n){Pc(2048,8,e,n)}function ny(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Lc(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function k0(e){var n=Ln().memoizedState;return ny({ref:n,nextImpl:e}),function(){if((Je&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function X0(e,n){return Pc(4,2,e,n)}function W0(e,n){return Pc(4,4,e,n)}function Y0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function q0(e,n,a){a=a!=null?a.concat([e]):null,Pc(4,4,Y0.bind(null,n,e),a)}function Kh(){}function j0(e,n){var a=Ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&zh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Z0(e,n){var a=Ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&zh(n,o[1]))return o[0];if(o=e(),xr){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o}function Qh(e,n,a){return a===void 0||($a&1073741824)!==0&&(Pe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Kg(),xe.lanes|=e,Ps|=e,a)}function K0(e,n,a,o){return zi(a,n)?a:no.current!==null?(e=Qh(e,a,o),zi(e,n)||(Fn=!0),e):($a&42)===0||($a&1073741824)!==0&&(Pe&261930)===0?(Fn=!0,e.memoizedState=a):(e=Kg(),xe.lanes|=e,Ps|=e,n)}function Q0(e,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var v=O.T,A={};O.T=A,td(e,!1,n,a);try{var G=u(),it=O.S;if(it!==null&&it(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=QS(G,o);xl(e,n,gt,Wi(e))}else xl(e,n,o,Wi(e))}catch(vt){xl(e,n,{then:function(){},status:"rejected",reason:vt},Wi())}finally{F.p=f,v!==null&&A.types!==null&&(v.types=A.types),O.T=v}}function iy(){}function Jh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=J0(e).queue;Q0(e,u,n,st,a===null?iy:function(){return $0(e),a(o)})}function J0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $0(e){var n=J0(e);n.next===null&&(n=e.alternate.memoizedState),xl(e,n.next.queue,{},Wi())}function $h(){return ui(Pl)}function tg(){return Ln().memoizedState}function eg(){return Ln().memoizedState}function ay(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wi();e=Ds(a);var o=Us(n,e,a);o!==null&&(Ii(o,n,a),pl(o,n,a)),n={cache:Ch()},e.payload=n;return}n=n.return}}function sy(e,n,a){var o=Wi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fc(e)?ig(n,a):(a=_h(e,n,a,o),a!==null&&(Ii(a,e,o),ag(a,n,o)))}function ng(e,n,a){var o=Wi();xl(e,n,a,o)}function xl(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))ig(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,zi(A,v))return _c(e,n,u,0),fn===null&&gc(),!1}catch{}if(a=_h(e,n,u,o),a!==null)return Ii(a,e,o),ag(a,n,o),!0}return!1}function td(e,n,a,o){if(o={lane:2,revertLane:Ld(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fc(e)){if(n)throw Error(s(479))}else n=_h(e,a,o,2),n!==null&&Ii(n,e,2)}function Fc(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function ig(e,n){io=Dc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ag(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ss(e,a)}}var Sl={readContext:ui,use:Nc,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useLayoutEffect:Rn,useInsertionEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useSyncExternalStore:Rn,useId:Rn,useHostTransitionStatus:Rn,useFormState:Rn,useActionState:Rn,useOptimistic:Rn,useMemoCache:Rn,useCacheRefresh:Rn};Sl.useEffectEvent=Rn;var sg={readContext:ui,use:Nc,useCallback:function(e,n){return Ei().memoizedState=[e,n===void 0?null:n],e},useContext:ui,useEffect:V0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ic(4194308,4,Y0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ic(4194308,4,e,n)},useInsertionEffect:function(e,n){Ic(4,2,e,n)},useMemo:function(e,n){var a=Ei();n=n===void 0?null:n;var o=e();if(xr){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ei();if(a!==void 0){var u=a(n);if(xr){Gt(!0);try{a(n)}finally{Gt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=sy.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=Ei();return e={current:e},n.memoizedState=e},useState:function(e){e=qh(e);var n=e.queue,a=ng.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Kh,useDeferredValue:function(e,n){var a=Ei();return Qh(a,e,n)},useTransition:function(){var e=qh(!1);return e=Q0.bind(null,xe,e.queue,!0,!1),Ei().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=xe,u=Ei();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),fn===null)throw Error(s(349));(Pe&127)!==0||A0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,V0(C0.bind(null,o,f,e),[e]),o.flags|=2048,so(9,{destroy:void 0},R0.bind(null,o,f,a,n),null),a},useId:function(){var e=Ei(),n=fn.identifierPrefix;if(Be){var a=Oa,o=Na;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Uc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=JS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$h,useFormState:F0,useActionState:F0,useOptimistic:function(e){var n=Ei();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=td.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Xh,useCacheRefresh:function(){return Ei().memoizedState=ay.bind(null,xe)},useEffectEvent:function(e){var n=Ei(),a={impl:e};return n.memoizedState=a,function(){if((Je&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ed={readContext:ui,use:Nc,useCallback:j0,useContext:ui,useEffect:Zh,useImperativeHandle:q0,useInsertionEffect:X0,useLayoutEffect:W0,useMemo:Z0,useReducer:Oc,useRef:G0,useState:function(){return Oc(ts)},useDebugValue:Kh,useDeferredValue:function(e,n){var a=Ln();return K0(a,nn.memoizedState,e,n)},useTransition:function(){var e=Oc(ts)[0],n=Ln().memoizedState;return[typeof e=="boolean"?e:vl(e),n]},useSyncExternalStore:b0,useId:tg,useHostTransitionStatus:$h,useFormState:B0,useActionState:B0,useOptimistic:function(e,n){var a=Ln();return U0(a,nn,e,n)},useMemoCache:Xh,useCacheRefresh:eg};ed.useEffectEvent=k0;var rg={readContext:ui,use:Nc,useCallback:j0,useContext:ui,useEffect:Zh,useImperativeHandle:q0,useInsertionEffect:X0,useLayoutEffect:W0,useMemo:Z0,useReducer:Yh,useRef:G0,useState:function(){return Yh(ts)},useDebugValue:Kh,useDeferredValue:function(e,n){var a=Ln();return nn===null?Qh(a,e,n):K0(a,nn.memoizedState,e,n)},useTransition:function(){var e=Yh(ts)[0],n=Ln().memoizedState;return[typeof e=="boolean"?e:vl(e),n]},useSyncExternalStore:b0,useId:tg,useHostTransitionStatus:$h,useFormState:H0,useActionState:H0,useOptimistic:function(e,n){var a=Ln();return nn!==null?U0(a,nn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xh,useCacheRefresh:eg};rg.useEffectEvent=k0;function nd(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var id={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Wi(),u=Ds(o);u.payload=n,a!=null&&(u.callback=a),n=Us(e,u,o),n!==null&&(Ii(n,e,o),pl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Wi(),u=Ds(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Us(e,u,o),n!==null&&(Ii(n,e,o),pl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Wi(),o=Ds(a);o.tag=2,n!=null&&(o.callback=n),n=Us(e,o,a),n!==null&&(Ii(n,e,a),pl(n,e,a))}};function og(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!rl(a,o)||!rl(u,f):!0}function lg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&id.enqueueReplaceState(n,n.state,null)}function Sr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function cg(e){mc(e)}function ug(e){console.error(e)}function fg(e){mc(e)}function Bc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ad(e,n,a){return a=Ds(a),a.tag=3,a.payload={element:null},a.callback=function(){Bc(e,n)},a}function dg(e){return e=Ds(e),e.tag=3,e}function pg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){hg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){hg(n,a,o),typeof u!="function"&&(Fs===null?Fs=new Set([this]):Fs.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ry(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qr(n,a,u,!0),a=Gi.current,a!==null){switch(a.tag){case 31:case 13:return la===null?Kc():a.alternate===null&&Cn===0&&(Cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wd(e,o,u)),!1;case 22:return a.flags|=65536,o===bc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wd(e,o,u)),!1}throw Error(s(435,a.tag))}return wd(e,o,u),Kc(),!1}if(Be)return n=Gi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Eh&&(e=Error(s(422),{cause:o}),cl(aa(e,a)))):(o!==Eh&&(n=Error(s(423),{cause:o}),cl(aa(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=aa(o,a),u=ad(e.stateNode,o,u),Oh(e,u),Cn!==4&&(Cn=2)),!1;var f=Error(s(520),{cause:o});if(f=aa(f,a),Cl===null?Cl=[f]:Cl.push(f),Cn!==4&&(Cn=2),n===null)return!0;o=aa(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ad(a.stateNode,o,e),Oh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fs===null||!Fs.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dg(u),pg(u,e,a,o),Oh(a,u),!1}a=a.return}while(a!==null);return!1}var sd=Error(s(461)),Fn=!1;function fi(e,n,a,o){n.child=e===null?v0(n,null,a,o):vr(n,e.child,a,o)}function mg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var A in o)A!=="ref"&&(v[A]=o[A])}else v=o;return pr(n),o=Hh(e,n,a,v,f,u),A=Gh(),e!==null&&!Fn?(Vh(e,n,u),es(e,n,u)):(Be&&A&&yh(n),n.flags|=1,fi(e,n,o,u),n.child)}function gg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!vh(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_g(e,n,f,o,u)):(e=xc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!dd(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:rl,a(v,o)&&e.ref===n.ref)return es(e,n,u)}return n.flags|=1,e=Za(f,o),e.ref=n.ref,e.return=n,n.child=e}function _g(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(rl(f,o)&&e.ref===n.ref)if(Fn=!1,n.pendingProps=o=f,dd(e,u))(e.flags&131072)!==0&&(Fn=!0);else return n.lanes=e.lanes,es(e,n,u)}return rd(e,n,a,o,u)}function vg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return xg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ec(n,f!==null?f.cachePool:null),f!==null?y0(n,f):Ph(),M0(n);else return o=n.lanes=536870912,xg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ec(n,f.cachePool),y0(n,f),Ns(),n.memoizedState=null):(e!==null&&Ec(n,null),Ph(),Ns());return fi(e,n,u,a),n.child}function yl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xg(e,n,a,o,u){var f=Dh();return f=f===null?null:{parent:In._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ec(n,null),Ph(),M0(n),e!==null&&Qr(e,n,o,!0),n.childLanes=u,null}function zc(e,n){return n=Gc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Sg(e,n,a){return vr(n,e.child,null,a),e=zc(n,n.pendingProps),e.flags|=2,Vi(n),n.memoizedState=null,e}function oy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Be){if(o.mode==="hidden")return e=zc(n,o),n.lanes=536870912,yl(null,e);if(Bh(n),(e=gn)?(e=L_(e,oa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:bs!==null?{id:Na,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},a=i0(e),a.return=n,n.child=a,ci=n,gn=null)):e=null,e===null)throw Rs(n);return n.lanes=536870912,null}return zc(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Bh(n),u)if(n.flags&256)n.flags&=-257,n=Sg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Fn||Qr(e,n,a,!1),u=(a&e.childLanes)!==0,Fn||u){if(o=fn,o!==null&&(v=Xa(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ur(e,v),Ii(o,e,v),sd;Kc(),n=Sg(e,n,a)}else e=f.treeContext,gn=ca(v.nextSibling),ci=n,Be=!0,As=null,oa=!1,e!==null&&r0(n,e),n=zc(n,o),n.flags|=4096;return n}return e=Za(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rd(e,n,a,o,u){return pr(n),a=Hh(e,n,a,o,void 0,u),o=Gh(),e!==null&&!Fn?(Vh(e,n,u),es(e,n,u)):(Be&&o&&yh(n),n.flags|=1,fi(e,n,a,u),n.child)}function yg(e,n,a,o,u,f){return pr(n),n.updateQueue=null,a=T0(n,o,a,u),E0(e),o=Gh(),e!==null&&!Fn?(Vh(e,n,f),es(e,n,f)):(Be&&o&&yh(n),n.flags|=1,fi(e,n,a,f),n.child)}function Mg(e,n,a,o,u){if(pr(n),n.stateNode===null){var f=qr,v=a.contextType;typeof v=="object"&&v!==null&&(f=ui(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=id,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Lh(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?ui(v):qr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(nd(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&id.enqueueReplaceState(f,f.state,null),gl(n,o,f,u),ml(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=Sr(a,A);f.props=G;var it=f.context,gt=a.contextType;v=qr,typeof gt=="object"&&gt!==null&&(v=ui(gt));var vt=a.getDerivedStateFromProps;gt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||it!==v)&&lg(n,f,o,v),ws=!1;var rt=n.memoizedState;f.state=rt,gl(n,o,f,u),ml(),it=n.memoizedState,A||rt!==it||ws?(typeof vt=="function"&&(nd(n,a,vt,o),it=n.memoizedState),(G=ws||og(n,a,G,o,rt,it,v))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=v,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Nh(e,n),v=n.memoizedProps,gt=Sr(a,v),f.props=gt,vt=n.pendingProps,rt=f.context,it=a.contextType,G=qr,typeof it=="object"&&it!==null&&(G=ui(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==vt||rt!==G)&&lg(n,f,o,G),ws=!1,rt=n.memoizedState,f.state=rt,gl(n,o,f,u),ml();var ct=n.memoizedState;v!==vt||rt!==ct||ws||e!==null&&e.dependencies!==null&&yc(e.dependencies)?(typeof A=="function"&&(nd(n,a,A,o),ct=n.memoizedState),(gt=ws||og(n,a,gt,o,rt,ct,G)||e!==null&&e.dependencies!==null&&yc(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ct,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ct,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),f.props=o,f.state=ct,f.context=G,o=gt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Hc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=vr(n,e.child,null,u),n.child=vr(n,null,a,u)):fi(e,n,a,u),n.memoizedState=f.state,e=n.child):e=es(e,n,u),e}function Eg(e,n,a,o){return hr(),n.flags|=256,fi(e,n,a,o),n.child}var od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ld(e){return{baseLanes:e,cachePool:h0()}}function cd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Xi),e}function Tg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Un.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?Ls(n):Ns(),(e=gn)?(e=L_(e,oa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:bs!==null?{id:Na,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},a=i0(e),a.return=n,n.child=a,ci=n,gn=null)):e=null,e===null)throw Rs(n);return Wd(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ns(),u=n.mode,A=Gc({mode:"hidden",children:A},u),o=fr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=ld(a),o.childLanes=cd(e,v,a),n.memoizedState=od,yl(null,o)):(Ls(n),ud(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Ls(n),n.flags&=-257,n=fd(e,n,a)):n.memoizedState!==null?(Ns(),n.child=e.child,n.flags|=128,n=null):(Ns(),A=o.fallback,u=n.mode,o=Gc({mode:"visible",children:o.children},u),A=fr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,vr(n,e.child,null,a),o=n.child,o.memoizedState=ld(a),o.childLanes=cd(e,v,a),n.memoizedState=od,n=yl(null,o));else if(Ls(n),Wd(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var it=v.dgst;v=it,o=Error(s(419)),o.stack="",o.digest=v,cl({value:o,source:null,stack:null}),n=fd(e,n,a)}else if(Fn||Qr(e,n,a,!1),v=(a&e.childLanes)!==0,Fn||v){if(v=fn,v!==null&&(o=Xa(v,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ur(e,o),Ii(v,e,o),sd;Xd(A)||Kc(),n=fd(e,n,a)}else Xd(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,gn=ca(A.nextSibling),ci=n,Be=!0,As=null,oa=!1,e!==null&&r0(n,e),n=ud(n,o.children),n.flags|=4096);return n}return u?(Ns(),A=o.fallback,u=n.mode,G=e.child,it=G.sibling,o=Za(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,it!==null?A=Za(it,A):(A=fr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,yl(null,o),o=n.child,A=e.child.memoizedState,A===null?A=ld(a):(u=A.cachePool,u!==null?(G=In._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=h0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=cd(e,v,a),n.memoizedState=od,yl(e.child,o)):(Ls(n),a=e.child,e=a.sibling,a=Za(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function ud(e,n){return n=Gc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gc(e,n){return e=Hi(22,e,null,n),e.lanes=0,e}function fd(e,n,a){return vr(n,e.child,null,a),e=ud(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ah(e.return,n,a)}function hd(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Ag(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=Un.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,ut(Un,v),fi(e,n,o,a),o=Be?ll:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bg(e,a,n);else if(e.tag===19)bg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hd(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}hd(n,!0,a,null,f,o);break;case"together":hd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function es(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ps|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Za(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Za(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function dd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yc(e)))}function ly(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),Cs(n,In,e.memoizedState.cache),hr();break;case 27:case 5:Ht(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:Cs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ls(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tg(e,n,a):(Ls(n),e=es(e,n,a),e!==null?e.sibling:null);Ls(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ag(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ut(Un,Un.current),o)break;return null;case 22:return n.lanes=0,vg(e,n,a,n.pendingProps);case 24:Cs(n,In,e.memoizedState.cache)}return es(e,n,a)}function Rg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Fn=!0;else{if(!dd(e,a)&&(n.flags&128)===0)return Fn=!1,ly(e,n,a);Fn=(e.flags&131072)!==0}else Fn=!1,Be&&(n.flags&1048576)!==0&&s0(n,ll,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=gr(n.elementType),n.type=e,typeof e=="function")vh(e)?(o=Sr(e,o),n.tag=1,n=Mg(null,n,e,o,a)):(n.tag=0,n=rd(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=mg(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=gg(null,n,e,o,a);break t}}throw n=Z(e)||e,Error(s(306,n,""))}}return n;case 0:return rd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Sr(o,n.pendingProps),Mg(e,n,o,u,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Nh(e,n),gl(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Cs(n,In,o),o!==f.cache&&Rh(n,[In],a,!0),ml(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Eg(e,n,o,a);break t}else if(o!==u){u=aa(Error(s(424)),n),cl(u),n=Eg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,gn=ca(e.firstChild),ci=n,Be=!0,As=null,oa=!0,a=v0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hr(),o===u){n=es(e,n,a);break t}fi(e,n,o,a)}n=n.child}return n;case 26:return Hc(e,n),e===null?(a=B_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=iu(tt.current).createElement(a),o[An]=n,o[wn]=e,hi(o,a,e),q(o),n.stateNode=o):n.memoizedState=B_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&Be&&(o=n.stateNode=I_(n.type,n.pendingProps,tt.current),ci=n,oa=!0,u=gn,Gs(n.type)?(Yd=u,gn=ca(o.firstChild)):gn=u),fi(e,n,n.pendingProps.children,a),Hc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=gn)&&(o=By(o,n.type,n.pendingProps,oa),o!==null?(n.stateNode=o,ci=n,gn=ca(o.firstChild),oa=!1,u=!0):u=!1),u||Rs(n)),Ht(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Gd(u,f)?o=null:v!==null&&Gd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Hh(e,n,$S,null,null,a),Pl._currentValue=u),Hc(e,n),fi(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=gn)&&(a=zy(a,n.pendingProps,oa),a!==null?(n.stateNode=a,ci=n,gn=null,e=!0):e=!1),e||Rs(n)),null;case 13:return Tg(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=vr(n,null,o,a):fi(e,n,o,a),n.child;case 11:return mg(e,n,n.type,n.pendingProps,a);case 7:return fi(e,n,n.pendingProps,a),n.child;case 8:return fi(e,n,n.pendingProps.children,a),n.child;case 12:return fi(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Cs(n,n.type,o.value),fi(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=ui(u),o=o(u),n.flags|=1,fi(e,n,o,a),n.child;case 14:return gg(e,n,n.type,n.pendingProps,a);case 15:return _g(e,n,n.type,n.pendingProps,a);case 19:return Ag(e,n,a);case 31:return oy(e,n,a);case 22:return vg(e,n,a,n.pendingProps);case 24:return pr(n),o=ui(In),e===null?(u=Dh(),u===null&&(u=fn,f=Ch(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Lh(n),Cs(n,In,u)):((e.lanes&a)!==0&&(Nh(e,n),gl(n,null,null,a),ml()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Cs(n,In,o)):(o=f.cache,Cs(n,In,o),o!==u.cache&&Rh(n,[In],a,!0))),fi(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ns(e){e.flags|=4}function pd(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(t_())e.flags|=8192;else throw _r=bc,Uh}else e.flags&=-16777217}function Cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k_(n))if(t_())e.flags|=8192;else throw _r=bc,Uh}function Vc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?He():536870912,e.lanes|=n,co|=n)}function Ml(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function _n(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function cy(e,n,a){var o=n.pendingProps;switch(Mh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(n),null;case 1:return _n(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ja(In),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Kr(n)?ns(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Th())),_n(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ns(n),f!==null?(_n(n),Cg(n,f)):(_n(n),pd(n,u,null,o,a))):f?f!==e.memoizedState?(ns(n),_n(n),Cg(n,f)):(_n(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ns(n),_n(n),pd(n,u,e,o,a)),null;case 27:if(re(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ns(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}e=Tt.current,Kr(n)?o0(n):(e=I_(u,o,a),n.stateNode=e,ns(n))}return _n(n),null;case 5:if(re(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ns(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}if(f=Tt.current,Kr(n))o0(n);else{var v=iu(tt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[An]=n,f[wn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(hi(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ns(n)}}return _n(n),pd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ns(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,Kr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ci,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[An]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||T_(e.nodeValue,a)),e||Rs(n,!0)}else e=iu(e).createTextNode(o),e[An]=n,n.stateNode=e}return _n(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Kr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[An]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),e=!1}else a=Th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Vi(n),n):(Vi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return _n(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Kr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[An]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),u=!1}else u=Th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Vi(n),n):(Vi(n),null)}return Vi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vc(n,n.updateQueue),_n(n),null);case 4:return Vt(),e===null&&Pd(n.stateNode.containerInfo),_n(n),null;case 10:return Ja(n.type),_n(n),null;case 19:if(K(Un),o=n.memoizedState,o===null)return _n(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ml(o,!1);else{if(Cn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wc(e),f!==null){for(n.flags|=128,Ml(o,!1),e=f.updateQueue,n.updateQueue=e,Vc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)n0(a,e),a=a.sibling;return ut(Un,Un.current&1|2),Be&&Ka(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>qc&&(n.flags|=128,u=!0,Ml(o,!1),n.lanes=4194304)}else{if(!u)if(e=wc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vc(n,e),Ml(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Be)return _n(n),null}else 2*E()-o.renderingStartTime>qc&&a!==536870912&&(n.flags|=128,u=!0,Ml(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=Un.current,ut(Un,u?a&1|2:a&1),Be&&Ka(n,o.treeForkCount),e):(_n(n),null);case 22:case 23:return Vi(n),Fh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(_n(n),n.subtreeFlags&6&&(n.flags|=8192)):_n(n),a=n.updateQueue,a!==null&&Vc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&K(mr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ja(In),_n(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function uy(e,n){switch(Mh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ja(In),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return re(n),null;case 31:if(n.memoizedState!==null){if(Vi(n),n.alternate===null)throw Error(s(340));hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(Un),null;case 4:return Vt(),null;case 10:return Ja(n.type),null;case 22:case 23:return Vi(n),Fh(),e!==null&&K(mr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ja(In),null;case 25:return null;default:return null}}function wg(e,n){switch(Mh(n),n.tag){case 3:Ja(In),Vt();break;case 26:case 27:case 5:re(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Vi(n);break;case 13:Vi(n);break;case 19:K(Un);break;case 10:Ja(n.type);break;case 22:case 23:Vi(n),Fh(),e!==null&&K(mr);break;case 24:Ja(In)}}function El(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(A){en(n,n.return,A)}}function Os(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var G=a,it=A;try{it()}catch(gt){en(u,G,gt)}}}o=o.next}while(o!==f)}}catch(gt){en(n,n.return,gt)}}function Dg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{S0(n,a)}catch(o){en(e,e.return,o)}}}function Ug(e,n,a){a.props=Sr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){en(e,n,o)}}function Tl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){en(e,n,u)}}function Ia(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){en(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){en(e,n,u)}else a.current=null}function Lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){en(e,e.return,u)}}function md(e,n,a){try{var o=e.stateNode;Ly(o,e.type,a,n),o[wn]=n}catch(u){en(e,e.return,u)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gs(e.type)||e.tag===4}function gd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _d(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&Gs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(_d(e,n,a),e=e.sibling;e!==null;)_d(e,n,a),e=e.sibling}function kc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Gs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kc(e,n,a),e=e.sibling;e!==null;)kc(e,n,a),e=e.sibling}function Og(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);hi(n,o,a),n[An]=e,n[wn]=a}catch(f){en(e,e.return,f)}}var is=!1,Bn=!1,vd=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,ei=null;function fy(e,n){if(e=e.containerInfo,zd=uu,e=qm(e),fh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,A=-1,G=-1,it=0,gt=0,vt=e,rt=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(A=v+u),vt!==f||o!==0&&vt.nodeType!==3||(G=v+o),vt.nodeType===3&&(v+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)rt=vt,vt=ct;for(;;){if(vt===e)break e;if(rt===a&&++it===u&&(A=v),rt===f&&++gt===o&&(G=v),(ct=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ct}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hd={focusedElem:e,selectionRange:a},uu=!1,ei=n;ei!==null;)if(n=ei,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ei=e;else for(;ei!==null;){switch(n=ei,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Kt=Sr(a.type,u);e=o.getSnapshotBeforeUpdate(Kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(le){en(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)kd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,ei=e;break}ei=n.return}}function Pg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ss(e,a),o&4&&El(5,a);break;case 1:if(ss(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){en(a,a.return,v)}else{var u=Sr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){en(a,a.return,v)}}o&64&&Dg(a),o&512&&Tl(a,a.return);break;case 3:if(ss(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{S0(e,n)}catch(v){en(a,a.return,v)}}break;case 27:n===null&&o&4&&Og(a);case 26:case 5:ss(e,a),n===null&&o&4&&Lg(a),o&512&&Tl(a,a.return);break;case 12:ss(e,a);break;case 31:ss(e,a),o&4&&zg(e,a);break;case 13:ss(e,a),o&4&&Hg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Sy.bind(null,a),Hy(e,a))));break;case 22:if(o=a.memoizedState!==null||is,!o){n=n!==null&&n.memoizedState!==null||Bn,u=is;var f=Bn;is=o,(Bn=n)&&!f?rs(e,a,(a.subtreeFlags&8772)!==0):ss(e,a),is=u,Bn=f}break;case 30:break;default:ss(e,a)}}function Fg(e){var n=e.alternate;n!==null&&(e.alternate=null,Fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ji(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xn=null,Ui=!1;function as(e,n,a){for(a=a.child;a!==null;)Bg(e,n,a),a=a.sibling}function Bg(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:Bn||Ia(a,n),as(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Bn||Ia(a,n);var o=xn,u=Ui;Gs(a.type)&&(xn=a.stateNode,Ui=!1),as(e,n,a),Nl(a.stateNode),xn=o,Ui=u;break;case 5:Bn||Ia(a,n);case 6:if(o=xn,u=Ui,xn=null,as(e,n,a),xn=o,Ui=u,xn!==null)if(Ui)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(a.stateNode)}catch(f){en(a,n,f)}else try{xn.removeChild(a.stateNode)}catch(f){en(a,n,f)}break;case 18:xn!==null&&(Ui?(e=xn,D_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vo(e)):D_(xn,a.stateNode));break;case 4:o=xn,u=Ui,xn=a.stateNode.containerInfo,Ui=!0,as(e,n,a),xn=o,Ui=u;break;case 0:case 11:case 14:case 15:Os(2,a,n),Bn||Os(4,a,n),as(e,n,a);break;case 1:Bn||(Ia(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ug(a,n,o)),as(e,n,a);break;case 21:as(e,n,a);break;case 22:Bn=(o=Bn)||a.memoizedState!==null,as(e,n,a),Bn=o;break;default:as(e,n,a)}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vo(e)}catch(a){en(n,n.return,a)}}}function Hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(a){en(n,n.return,a)}}function hy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ig),n;default:throw Error(s(435,e.tag))}}function Xc(e,n){var a=hy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=yy.bind(null,e,o);o.then(u,u)}})}function Li(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,A=v;t:for(;A!==null;){switch(A.tag){case 27:if(Gs(A.type)){xn=A.stateNode,Ui=!1;break t}break;case 5:xn=A.stateNode,Ui=!1;break t;case 3:case 4:xn=A.stateNode.containerInfo,Ui=!0;break t}A=A.return}if(xn===null)throw Error(s(160));Bg(f,v,u),xn=null,Ui=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gg(n,e),n=n.sibling}var ya=null;function Gg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Li(n,e),Ni(e),o&4&&(Os(3,e,e.return),El(3,e),Os(5,e,e.return));break;case 1:Li(n,e),Ni(e),o&512&&(Bn||a===null||Ia(a,a.return)),o&64&&is&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ya;if(Li(n,e),Ni(e),o&512&&(Bn||a===null||Ia(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[kn]||f[An]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),hi(f,o,a),f[An]=e,q(f),o=f;break t;case"link":var v=G_("link","href",u).get(o+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break e}}f=u.createElement(o),hi(f,o,a),u.head.appendChild(f);break;case"meta":if(v=G_("meta","content",u).get(o+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break e}}f=u.createElement(o),hi(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[An]=e,q(f),o=f}e.stateNode=o}else V_(u,e.type,e.stateNode);else e.stateNode=H_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?V_(u,e.type,e.stateNode):H_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&md(e,e.memoizedProps,a.memoizedProps)}break;case 27:Li(n,e),Ni(e),o&512&&(Bn||a===null||Ia(a,a.return)),a!==null&&o&4&&md(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Li(n,e),Ni(e),o&512&&(Bn||a===null||Ia(a,a.return)),e.flags&32){u=e.stateNode;try{Jn(u,"")}catch(Kt){en(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,md(e,u,a!==null?a.memoizedProps:u)),o&1024&&(vd=!0);break;case 6:if(Li(n,e),Ni(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){en(e,e.return,Kt)}}break;case 3:if(ru=null,u=ya,ya=au(n.containerInfo),Li(n,e),ya=u,Ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(n.containerInfo)}catch(Kt){en(e,e.return,Kt)}vd&&(vd=!1,Vg(e));break;case 4:o=ya,ya=au(e.stateNode.containerInfo),Li(n,e),Ni(e),ya=o;break;case 12:Li(n,e),Ni(e);break;case 31:Li(n,e),Ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xc(e,o)));break;case 13:Li(n,e),Ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,it=is,gt=Bn;if(is=it||u,Bn=gt||G,Li(n,e),Bn=gt,is=it,Ni(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||is||Bn||yr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=G.stateNode;var vt=G.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Kt){en(G,G.return,Kt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Kt){en(G,G.return,Kt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?U_(ct,!0):U_(G.stateNode,!1)}catch(Kt){en(G,G.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xc(e,a))));break;case 19:Li(n,e),Ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xc(e,o)));break;case 30:break;case 21:break;default:Li(n,e),Ni(e)}}function Ni(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ng(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=gd(e);kc(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Jn(v,""),a.flags&=-33);var A=gd(e);kc(e,A,v);break;case 3:case 4:var G=a.stateNode.containerInfo,it=gd(e);_d(e,it,G);break;default:throw Error(s(161))}}catch(gt){en(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ss(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pg(e,n.alternate,n),n=n.sibling}function yr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Os(4,n,n.return),yr(n);break;case 1:Ia(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ug(n,n.return,a),yr(n);break;case 27:Nl(n.stateNode);case 26:case 5:Ia(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}e=e.sibling}}function rs(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:rs(u,f,a),El(4,f);break;case 1:if(rs(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){en(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)x0(G[u],A)}catch(it){en(o,o.return,it)}}a&&v&64&&Dg(f),Tl(f,f.return);break;case 27:Og(f);case 26:case 5:rs(u,f,a),a&&o===null&&v&4&&Lg(f),Tl(f,f.return);break;case 12:rs(u,f,a);break;case 31:rs(u,f,a),a&&v&4&&zg(u,f);break;case 13:rs(u,f,a),a&&v&4&&Hg(u,f);break;case 22:f.memoizedState===null&&rs(u,f,a),Tl(f,f.return);break;case 30:break;default:rs(u,f,a)}n=n.sibling}}function xd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ul(a))}function Sd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ul(e))}function Ma(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kg(e,n,a,o),n=n.sibling}function kg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(e,n,a,o),u&2048&&El(9,n);break;case 1:Ma(e,n,a,o);break;case 3:Ma(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ul(e)));break;case 12:if(u&2048){Ma(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){en(n,n.return,G)}}else Ma(e,n,a,o);break;case 31:Ma(e,n,a,o);break;case 13:Ma(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ma(e,n,a,o):bl(e,n):f._visibility&2?Ma(e,n,a,o):(f._visibility|=2,ro(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xd(v,n);break;case 24:Ma(e,n,a,o),u&2048&&Sd(n.alternate,n);break;default:Ma(e,n,a,o)}}function ro(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,G=o,it=v.flags;switch(v.tag){case 0:case 11:case 15:ro(f,v,A,G,u),El(8,v);break;case 23:break;case 22:var gt=v.stateNode;v.memoizedState!==null?gt._visibility&2?ro(f,v,A,G,u):bl(f,v):(gt._visibility|=2,ro(f,v,A,G,u)),u&&it&2048&&xd(v.alternate,v);break;case 24:ro(f,v,A,G,u),u&&it&2048&&Sd(v.alternate,v);break;default:ro(f,v,A,G,u)}n=n.sibling}}function bl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:bl(a,o),u&2048&&xd(o.alternate,o);break;case 24:bl(a,o),u&2048&&Sd(o.alternate,o);break;default:bl(a,o)}n=n.sibling}}var Al=8192;function oo(e,n,a){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Xg(e,n,a),e=e.sibling}function Xg(e,n,a){switch(e.tag){case 26:oo(e,n,a),e.flags&Al&&e.memoizedState!==null&&Jy(a,ya,e.memoizedState,e.memoizedProps);break;case 5:oo(e,n,a);break;case 3:case 4:var o=ya;ya=au(e.stateNode.containerInfo),oo(e,n,a),ya=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Al,Al=16777216,oo(e,n,a),Al=o):oo(e,n,a));break;default:oo(e,n,a)}}function Wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ei=o,qg(o,e)}Wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&Os(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wc(e)):Rl(e);break;default:Rl(e)}}function Wc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ei=o,qg(o,e)}Wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Os(8,n,n.return),Wc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wc(n));break;default:Wc(n)}e=e.sibling}}function qg(e,n){for(;ei!==null;){var a=ei;switch(a.tag){case 0:case 11:case 15:Os(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ul(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ei=o;else t:for(a=e;ei!==null;){o=ei;var u=o.sibling,f=o.return;if(Fg(o),o===a){ei=null;break t}if(u!==null){u.return=f,ei=u;break t}ei=f}}}var dy={getCacheForType:function(e){var n=ui(In),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ui(In).controller.signal}},py=typeof WeakMap=="function"?WeakMap:Map,Je=0,fn=null,we=null,Pe=0,tn=0,ki=null,Is=!1,lo=!1,yd=!1,os=0,Cn=0,Ps=0,Mr=0,Md=0,Xi=0,co=0,Cl=null,Oi=null,Ed=!1,Yc=0,jg=0,qc=1/0,jc=null,Fs=null,Xn=0,Bs=null,uo=null,ls=0,Td=0,bd=null,Zg=null,wl=0,Ad=null;function Wi(){return(Je&2)!==0&&Pe!==0?Pe&-Pe:O.T!==null?Ld():Ki()}function Kg(){if(Xi===0)if((Pe&536870912)===0||Be){var e=At;At<<=1,(At&3932160)===0&&(At=262144),Xi=e}else Xi=536870912;return e=Gi.current,e!==null&&(e.flags|=32),Xi}function Ii(e,n,a){(e===fn&&(tn===2||tn===9)||e.cancelPendingCommit!==null)&&(fo(e,0),zs(e,Pe,Xi,!1)),Vn(e,a),((Je&2)===0||e!==fn)&&(e===fn&&((Je&2)===0&&(Mr|=a),Cn===4&&zs(e,Pe,Xi,!1)),Pa(e))}function Qg(e,n,a){if((Je&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||kt(e,n),u=o?_y(e,n):Cd(e,n,!0),f=o;do{if(u===0){lo&&!o&&zs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!my(a)){u=Cd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=e;u=Cl;var G=A.current.memoizedState.isDehydrated;if(G&&(fo(A,v).flags|=256),v=Cd(A,v,!1),v!==2){if(yd&&!G){A.errorRecoveryDisabledLanes|=f,Mr|=f,u=4;break t}f=Oi,Oi=u,f!==null&&(Oi===null?Oi=f:Oi.push.apply(Oi,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){fo(e,0),zs(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:zs(o,n,Xi,!Is);break t;case 2:Oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Yc+300-E(),10<u)){if(zs(o,n,Xi,!Is),dt(o,0,!0)!==0)break t;ls=n,o.timeoutHandle=C_(Jg.bind(null,o,a,Oi,jc,Ed,n,Xi,Mr,co,Is,f,"Throttled",-0,0),u);break t}Jg(o,a,Oi,jc,Ed,n,Xi,Mr,co,Is,f,null,-0,0)}}break}while(!0);Pa(e)}function Jg(e,n,a,o,u,f,v,A,G,it,gt,vt,rt,ct){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},Xg(n,f,vt);var Kt=(f&62914560)===f?Yc-E():(f&4194048)===f?jg-E():0;if(Kt=$y(vt,Kt),Kt!==null){ls=f,e.cancelPendingCommit=Kt(r_.bind(null,e,n,f,a,o,u,v,A,G,gt,vt,null,rt,ct)),zs(e,f,v,!it);return}}r_(e,n,f,a,o,u,v,A,G)}function my(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!zi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zs(e,n,a,o){n&=~Md,n&=~Mr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Zi(e,a,n)}function Zc(){return(Je&6)===0?(Dl(0),!1):!0}function Rd(){if(we!==null){if(tn===0)var e=we.return;else e=we,Qa=dr=null,kh(e),eo=null,hl=0,e=we;for(;e!==null;)wg(e.alternate,e),e=e.return;we=null}}function fo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Iy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ls=0,Rd(),fn=e,we=a=Za(e.current,null),Pe=n,tn=0,ki=null,Is=!1,lo=kt(e,n),yd=!1,co=Xi=Md=Mr=Ps=Cn=0,Oi=Cl=null,Ed=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),f=1<<u;n|=e[u],o&=~f}return os=n,gc(),a}function $g(e,n){xe=null,O.H=Sl,n===to||n===Tc?(n=m0(),tn=3):n===Uh?(n=m0(),tn=4):tn=n===sd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ki=n,we===null&&(Cn=1,Bc(e,aa(n,e.current)))}function t_(){var e=Gi.current;return e===null?!0:(Pe&4194048)===Pe?la===null:(Pe&62914560)===Pe||(Pe&536870912)!==0?e===la:!1}function e_(){var e=O.H;return O.H=Sl,e===null?Sl:e}function n_(){var e=O.A;return O.A=dy,e}function Kc(){Cn=4,Is||(Pe&4194048)!==Pe&&Gi.current!==null||(lo=!0),(Ps&134217727)===0&&(Mr&134217727)===0||fn===null||zs(fn,Pe,Xi,!1)}function Cd(e,n,a){var o=Je;Je|=2;var u=e_(),f=n_();(fn!==e||Pe!==n)&&(jc=null,fo(e,n)),n=!1;var v=Cn;t:do try{if(tn!==0&&we!==null){var A=we,G=ki;switch(tn){case 8:Rd(),v=6;break t;case 3:case 2:case 9:case 6:Gi.current===null&&(n=!0);var it=tn;if(tn=0,ki=null,ho(e,A,G,it),a&&lo){v=0;break t}break;default:it=tn,tn=0,ki=null,ho(e,A,G,it)}}gy(),v=Cn;break}catch(gt){$g(e,gt)}while(!0);return n&&e.shellSuspendCounter++,Qa=dr=null,Je=o,O.H=u,O.A=f,we===null&&(fn=null,Pe=0,gc()),v}function gy(){for(;we!==null;)i_(we)}function _y(e,n){var a=Je;Je|=2;var o=e_(),u=n_();fn!==e||Pe!==n?(jc=null,qc=E()+500,fo(e,n)):lo=kt(e,n);t:do try{if(tn!==0&&we!==null){n=we;var f=ki;e:switch(tn){case 1:tn=0,ki=null,ho(e,n,f,1);break;case 2:case 9:if(d0(f)){tn=0,ki=null,a_(n);break}n=function(){tn!==2&&tn!==9||fn!==e||(tn=7),Pa(e)},f.then(n,n);break t;case 3:tn=7;break t;case 4:tn=5;break t;case 7:d0(f)?(tn=0,ki=null,a_(n)):(tn=0,ki=null,ho(e,n,f,7));break;case 5:var v=null;switch(we.tag){case 26:v=we.memoizedState;case 5:case 27:var A=we;if(v?k_(v):A.stateNode.complete){tn=0,ki=null;var G=A.sibling;if(G!==null)we=G;else{var it=A.return;it!==null?(we=it,Qc(it)):we=null}break e}}tn=0,ki=null,ho(e,n,f,5);break;case 6:tn=0,ki=null,ho(e,n,f,6);break;case 8:Rd(),Cn=6;break t;default:throw Error(s(462))}}vy();break}catch(gt){$g(e,gt)}while(!0);return Qa=dr=null,O.H=o,O.A=u,Je=a,we!==null?0:(fn=null,Pe=0,gc(),Cn)}function vy(){for(;we!==null&&!jt();)i_(we)}function i_(e){var n=Rg(e.alternate,e,os);e.memoizedProps=e.pendingProps,n===null?Qc(e):we=n}function a_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=yg(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=yg(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:kh(n);default:wg(a,n),n=we=n0(n,os),n=Rg(a,n,os)}e.memoizedProps=e.pendingProps,n===null?Qc(e):we=n}function ho(e,n,a,o){Qa=dr=null,kh(n),eo=null,hl=0;var u=n.return;try{if(ry(e,u,n,a,Pe)){Cn=1,Bc(e,aa(a,e.current)),we=null;return}}catch(f){if(u!==null)throw we=u,f;Cn=1,Bc(e,aa(a,e.current)),we=null;return}n.flags&32768?(Be||o===1?e=!0:lo||(Pe&536870912)!==0?e=!1:(Is=e=!0,(o===2||o===9||o===3||o===6)&&(o=Gi.current,o!==null&&o.tag===13&&(o.flags|=16384))),s_(n,e)):Qc(n)}function Qc(e){var n=e;do{if((n.flags&32768)!==0){s_(n,Is);return}e=n.return;var a=cy(n.alternate,n,os);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Cn===0&&(Cn=5)}function s_(e,n){do{var a=uy(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);Cn=6,we=null}function r_(e,n,a,o,u,f,v,A,G){e.cancelPendingCommit=null;do Jc();while(Xn!==0);if((Je&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=gh,Ci(e,a,f,v,A,G),e===fn&&(we=fn=null,Pe=0),uo=n,Bs=e,ls=a,Td=f,bd=u,Zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,My(ht,function(){return f_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=F.p,F.p=2,v=Je,Je|=4;try{fy(e,n,a)}finally{Je=v,F.p=u,O.T=o}}Xn=1,o_(),l_(),c_()}}function o_(){if(Xn===1){Xn=0;var e=Bs,n=uo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Je;Je|=4;try{Gg(n,e);var f=Hd,v=qm(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Ym(A.ownerDocument.documentElement,A)){if(G!==null&&fh(A)){var it=G.start,gt=G.end;if(gt===void 0&&(gt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(gt,A.value.length);else{var vt=A.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Kt=A.textContent.length,le=Math.min(G.start,Kt),sn=G.end===void 0?le:Math.min(G.end,Kt);!ct.extend&&le>sn&&(v=sn,sn=le,le=v);var J=Wm(A,le),X=Wm(A,sn);if(J&&X&&(ct.rangeCount!==1||ct.anchorNode!==J.node||ct.anchorOffset!==J.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var nt=vt.createRange();nt.setStart(J.node,J.offset),ct.removeAllRanges(),le>sn?(ct.addRange(nt),ct.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),ct.addRange(nt))}}}}for(vt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var _t=vt[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}uu=!!zd,Hd=zd=null}finally{Je=u,F.p=o,O.T=a}}e.current=n,Xn=2}}function l_(){if(Xn===2){Xn=0;var e=Bs,n=uo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Je;Je|=4;try{Pg(e,n.alternate,n)}finally{Je=u,F.p=o,O.T=a}}Xn=3}}function c_(){if(Xn===4||Xn===3){Xn=0,I();var e=Bs,n=uo,a=ls,o=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xn=5:(Xn=0,uo=Bs=null,u_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Fs=null),ys(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=F.p,F.p=2,O.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var A=o[v];f(A.value,{componentStack:A.stack})}}finally{O.T=n,F.p=u}}(ls&3)!==0&&Jc(),Pa(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ad?wl++:(wl=0,Ad=e):wl=0,Dl(0)}}function u_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ul(n)))}function Jc(){return o_(),l_(),c_(),f_()}function f_(){if(Xn!==5)return!1;var e=Bs,n=Td;Td=0;var a=ys(ls),o=O.T,u=F.p;try{F.p=32>a?32:a,O.T=null,a=bd,bd=null;var f=Bs,v=ls;if(Xn=0,uo=Bs=null,ls=0,(Je&6)!==0)throw Error(s(331));var A=Je;if(Je|=4,Yg(f.current),kg(f,f.current,v,a),Je=A,Dl(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{F.p=u,O.T=o,u_(e,n)}}function h_(e,n,a){n=aa(a,n),n=ad(e.stateNode,n,2),e=Us(e,n,2),e!==null&&(Vn(e,2),Pa(e))}function en(e,n,a){if(e.tag===3)h_(e,e,a);else for(;n!==null;){if(n.tag===3){h_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fs===null||!Fs.has(o))){e=aa(a,e),a=dg(2),o=Us(n,a,2),o!==null&&(pg(a,o,n,e),Vn(o,2),Pa(o));break}}n=n.return}}function wd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new py;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(yd=!0,u.add(a),e=xy.bind(null,e,n,a),n.then(e,e))}function xy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,fn===e&&(Pe&a)===a&&(Cn===4||Cn===3&&(Pe&62914560)===Pe&&300>E()-Yc?(Je&2)===0&&fo(e,0):Md|=a,co===Pe&&(co=0)),Pa(e)}function d_(e,n){n===0&&(n=He()),e=ur(e,n),e!==null&&(Vn(e,n),Pa(e))}function Sy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),d_(e,a)}function yy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),d_(e,a)}function My(e,n){return Ce(e,n)}var $c=null,po=null,Dd=!1,tu=!1,Ud=!1,Hs=0;function Pa(e){e!==po&&e.next===null&&(po===null?$c=po=e:po=po.next=e),tu=!0,Dd||(Dd=!0,Ty())}function Dl(e,n){if(!Ud&&tu){Ud=!0;do for(var a=!1,o=$c;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,__(o,f))}else f=Pe,f=dt(o,o===fn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||kt(o,f)||(a=!0,__(o,f));o=o.next}while(a);Ud=!1}}function Ey(){p_()}function p_(){tu=Dd=!1;var e=0;Hs!==0&&Oy()&&(e=Hs);for(var n=E(),a=null,o=$c;o!==null;){var u=o.next,f=m_(o,n);f===0?(o.next=null,a===null?$c=u:a.next=u,u===null&&(po=a)):(a=o,(e!==0||(f&3)!==0)&&(tu=!0)),o=u}Xn!==0&&Xn!==5||Dl(e),Hs!==0&&(Hs=0)}function m_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-It(f),A=1<<v,G=u[v];G===-1?((A&a)===0||(A&o)!==0)&&(u[v]=se(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=fn,a=Pe,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(tn===2||tn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ze(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ze(o),ys(a)){case 2:case 8:a=xt;break;case 32:a=ht;break;case 268435456:a=Ut;break;default:a=ht}return o=g_.bind(null,e),a=Ce(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ze(o),e.callbackPriority=2,e.callbackNode=null,2}function g_(e,n){if(Xn!==0&&Xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jc()&&e.callbackNode!==a)return null;var o=Pe;return o=dt(e,e===fn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Qg(e,o,n),m_(e,E()),e.callbackNode!=null&&e.callbackNode===a?g_.bind(null,e):null)}function __(e,n){if(Jc())return null;Qg(e,n,!0)}function Ty(){Py(function(){(Je&6)!==0?Ce(pt,Ey):p_()})}function Ld(){if(Hs===0){var e=Jr;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Hs=e}return Hs}function v_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Es(""+e)}function x_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function by(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=v_((u[wn]||null).action),v=o.submitter;v&&(n=(n=v[wn]||null)?v_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new ea("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Hs!==0){var G=v?x_(u,v):new FormData(u);Jh(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=v?x_(u,v):new FormData(u),Jh(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Nd=0;Nd<mh.length;Nd++){var Od=mh[Nd],Ay=Od.toLowerCase(),Ry=Od[0].toUpperCase()+Od.slice(1);Sa(Ay,"on"+Ry)}Sa(Km,"onAnimationEnd"),Sa(Qm,"onAnimationIteration"),Sa(Jm,"onAnimationStart"),Sa("dblclick","onDoubleClick"),Sa("focusin","onFocus"),Sa("focusout","onBlur"),Sa(kS,"onTransitionRun"),Sa(XS,"onTransitionStart"),Sa(WS,"onTransitionCancel"),Sa($m,"onTransitionEnd"),Lt("onMouseEnter",["mouseout","mouseover"]),Lt("onMouseLeave",["mouseout","mouseover"]),Lt("onPointerEnter",["pointerout","pointerover"]),Lt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function S_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var A=o[v],G=A.instance,it=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=it;try{f(u)}catch(gt){mc(gt)}u.currentTarget=null,f=G}else for(v=0;v<o.length;v++){if(A=o[v],G=A.instance,it=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=it;try{f(u)}catch(gt){mc(gt)}u.currentTarget=null,f=G}}}}function De(e,n){var a=n[Si];a===void 0&&(a=n[Si]=new Set);var o=e+"__bubble";a.has(o)||(y_(n,e,2,!1),a.add(o))}function Id(e,n,a){var o=0;n&&(o|=4),y_(a,e,o,n)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Pd(e){if(!e[eu]){e[eu]=!0,ot.forEach(function(a){a!=="selectionchange"&&(Cy.has(a)||Id(a,!1,e),Id(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[eu]||(n[eu]=!0,Id("selectionchange",!1,n))}}function y_(e,n,a,o){switch(K_(n)){case 2:var u=nM;break;case 8:u=iM;break;default:u=Qd}a=u.bind(null,n,a,e),u=void 0,!Ne||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Fd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var A=o.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=o.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=Bi(A),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){o=f=v;continue t}A=A.parentNode}}o=o.return}Qt(function(){var it=f,gt=Vr(a),vt=[];t:{var rt=t0.get(e);if(rt!==void 0){var ct=ea,Kt=e;switch(e){case"keypress":if(Ge(a)===0)break t;case"keydown":case"keyup":ct=yS;break;case"focusin":Kt="focus",ct=ve;break;case"focusout":Kt="blur",ct=ve;break;case"beforeblur":case"afterblur":ct=ve;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Ie;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Dn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=TS;break;case Km:case Qm:case Jm:ct=mi;break;case $m:ct=AS;break;case"scroll":case"scrollend":ct=na;break;case"wheel":ct=CS;break;case"copy":case"cut":case"paste":ct=Mi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Um;break;case"toggle":case"beforetoggle":ct=DS}var le=(n&4)!==0,sn=!le&&(e==="scroll"||e==="scrollend"),J=le?rt!==null?rt+"Capture":null:rt;le=[];for(var X=it,nt;X!==null;){var _t=X;if(nt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||nt===null||J===null||(_t=Ft(X,J),_t!=null&&le.push(Ll(X,_t,nt))),sn)break;X=X.return}0<le.length&&(rt=new ct(rt,Kt,null,a,gt),vt.push({event:rt,listeners:le}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&a!==Gr&&(Kt=a.relatedTarget||a.fromElement)&&(Bi(Kt)||Kt[Qi]))break t;if((ct||rt)&&(rt=gt.window===gt?gt:(rt=gt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Kt=a.relatedTarget||a.toElement,ct=it,Kt=Kt?Bi(Kt):null,Kt!==null&&(sn=c(Kt),le=Kt.tag,Kt!==sn||le!==5&&le!==27&&le!==6)&&(Kt=null)):(ct=null,Kt=it),ct!==Kt)){if(le=Ie,_t="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(le=Um,_t="onPointerLeave",J="onPointerEnter",X="pointer"),sn=ct==null?rt:va(ct),nt=Kt==null?rt:va(Kt),rt=new le(_t,X+"leave",ct,a,gt),rt.target=sn,rt.relatedTarget=nt,_t=null,Bi(gt)===it&&(le=new le(J,X+"enter",Kt,a,gt),le.target=nt,le.relatedTarget=sn,_t=le),sn=_t,ct&&Kt)e:{for(le=wy,J=ct,X=Kt,nt=0,_t=J;_t;_t=le(_t))nt++;_t=0;for(var ie=X;ie;ie=le(ie))_t++;for(;0<nt-_t;)J=le(J),nt--;for(;0<_t-nt;)X=le(X),_t--;for(;nt--;){if(J===X||X!==null&&J===X.alternate){le=J;break e}J=le(J),X=le(X)}le=null}else le=null;ct!==null&&M_(vt,rt,ct,le,!1),Kt!==null&&sn!==null&&M_(vt,sn,Kt,le,!0)}}t:{if(rt=it?va(it):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var Ze=zm;else if(Fm(rt))if(Hm)Ze=HS;else{Ze=BS;var te=FS}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Ya(it.elementType)&&(Ze=zm):Ze=zS;if(Ze&&(Ze=Ze(e,it))){Bm(vt,Ze,a,gt);break t}te&&te(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&Qn(rt,"number",rt.value)}switch(te=it?va(it):window,e){case"focusin":(Fm(te)||te.contentEditable==="true")&&(Xr=te,hh=it,ol=null);break;case"focusout":ol=hh=Xr=null;break;case"mousedown":dh=!0;break;case"contextmenu":case"mouseup":case"dragend":dh=!1,jm(vt,a,gt);break;case"selectionchange":if(VS)break;case"keydown":case"keyup":jm(vt,a,gt)}var Me;if(lh)t:{switch(e){case"compositionstart":var Fe="onCompositionStart";break t;case"compositionend":Fe="onCompositionEnd";break t;case"compositionupdate":Fe="onCompositionUpdate";break t}Fe=void 0}else kr?Im(e,a)&&(Fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Fe="onCompositionStart");Fe&&(Lm&&a.locale!=="ko"&&(kr||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&kr&&(Me=Mn()):(Oe=gt,ri="value"in Oe?Oe.value:Oe.textContent,kr=!0)),te=nu(it,Fe),0<te.length&&(Fe=new Ts(Fe,e,null,a,gt),vt.push({event:Fe,listeners:te}),Me?Fe.data=Me:(Me=Pm(a),Me!==null&&(Fe.data=Me)))),(Me=LS?NS(e,a):OS(e,a))&&(Fe=nu(it,"onBeforeInput"),0<Fe.length&&(te=new Ts("onBeforeInput","beforeinput",null,a,gt),vt.push({event:te,listeners:Fe}),te.data=Me)),by(vt,e,it,a,gt)}S_(vt,n)})}function Ll(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ft(e,a),u!=null&&o.unshift(Ll(e,u,f)),u=Ft(e,n),u!=null&&o.push(Ll(e,u,f))),e.tag===3)return o;e=e.return}return[]}function wy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var A=a,G=A.alternate,it=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||it===null||(G=it,u?(it=Ft(a,f),it!=null&&v.unshift(Ll(a,it,G))):u||(it=Ft(a,f),it!=null&&v.push(Ll(a,it,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Dy=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function E_(e){return(typeof e=="string"?e:""+e).replace(Dy,`
`).replace(Uy,"")}function T_(e,n){return n=E_(n),E_(e)===n}function an(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Jn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Jn(e,""+o);break;case"className":de(e,"class",o);break;case"tabIndex":de(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":de(e,a,o);break;case"style":$i(e,o,f);break;case"data":if(n!=="object"){de(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Es(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&an(e,n,"name",u.name,u,null),an(e,n,"formEncType",u.formEncType,u,null),an(e,n,"formMethod",u.formMethod,u,null),an(e,n,"formTarget",u.formTarget,u,null)):(an(e,n,"encType",u.encType,u,null),an(e,n,"method",u.method,u,null),an(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Es(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ta);break;case"onScroll":o!=null&&De("scroll",e);break;case"onScrollEnd":o!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Es(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":De("beforetoggle",e),De("toggle",e),ce(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ce(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Jo.get(a)||a,ce(e,a,o))}}function Bd(e,n,a,o,u,f){switch(a){case"style":$i(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Jn(e,o):(typeof o=="number"||typeof o=="bigint")&&Jn(e,""+o);break;case"onScroll":o!=null&&De("scroll",e);break;case"onScrollEnd":o!=null&&De("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[wn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ce(e,a,o)}}}function hi(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,f,v,a,null)}}u&&an(e,n,"srcSet",a.srcSet,a,null),o&&an(e,n,"src",a.src,a,null);return;case"input":De("invalid",e);var A=f=v=u=null,G=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":v=gt;break;case"checked":G=gt;break;case"defaultChecked":it=gt;break;case"value":f=gt;break;case"defaultValue":A=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:an(e,n,o,gt,a,null)}}Nn(e,f,A,G,it,v,u,!1);return;case"select":De("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":o=A;default:an(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!o,n!=null?pi(e,!!o,n,!1):a!=null&&pi(e,!!o,a,!0);return;case"textarea":De("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:an(e,n,v,A,a,null)}yn(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":an(e,n,G,o,a,null));return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(o=0;o<Ul.length;o++)De(Ul[o],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,it,o,a,null)}return;default:if(Ya(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&Bd(e,n,gt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&an(e,n,A,o,a,null))}function Ly(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,G=null,it=null,gt=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=vt;default:o.hasOwnProperty(ct)||an(e,n,ct,null,o,vt)}}for(var rt in o){var ct=o[rt];if(vt=a[rt],o.hasOwnProperty(rt)&&(ct!=null||vt!=null))switch(rt){case"type":f=ct;break;case"name":u=ct;break;case"checked":it=ct;break;case"defaultChecked":gt=ct;break;case"value":v=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==vt&&an(e,n,rt,ct,o,vt)}}Kn(e,v,A,G,it,gt,f,u);return;case"select":ct=v=A=rt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ct=G;default:o.hasOwnProperty(f)||an(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":rt=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==G&&an(e,n,u,f,o,G)}n=A,a=v,o=ct,rt!=null?pi(e,!!a,rt,!1):!!o!=!!a&&(n!=null?pi(e,!!a,n,!0):pi(e,!!a,a?[]:"",!1));return;case"textarea":ct=rt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:an(e,n,A,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":rt=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&an(e,n,v,u,o,f)}Ye(e,rt,ct);return;case"option":for(var Kt in a)rt=a[Kt],a.hasOwnProperty(Kt)&&rt!=null&&!o.hasOwnProperty(Kt)&&(Kt==="selected"?e.selected=!1:an(e,n,Kt,null,o,rt));for(G in o)rt=o[G],ct=a[G],o.hasOwnProperty(G)&&rt!==ct&&(rt!=null||ct!=null)&&(G==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":an(e,n,G,rt,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)rt=a[le],a.hasOwnProperty(le)&&rt!=null&&!o.hasOwnProperty(le)&&an(e,n,le,null,o,rt);for(it in o)if(rt=o[it],ct=a[it],o.hasOwnProperty(it)&&rt!==ct&&(rt!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:an(e,n,it,rt,o,ct)}return;default:if(Ya(n)){for(var sn in a)rt=a[sn],a.hasOwnProperty(sn)&&rt!==void 0&&!o.hasOwnProperty(sn)&&Bd(e,n,sn,void 0,o,rt);for(gt in o)rt=o[gt],ct=a[gt],!o.hasOwnProperty(gt)||rt===ct||rt===void 0&&ct===void 0||Bd(e,n,gt,rt,o,ct);return}}for(var J in a)rt=a[J],a.hasOwnProperty(J)&&rt!=null&&!o.hasOwnProperty(J)&&an(e,n,J,null,o,rt);for(vt in o)rt=o[vt],ct=a[vt],!o.hasOwnProperty(vt)||rt===ct||rt==null&&ct==null||an(e,n,vt,rt,o,ct)}function b_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ny(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&b_(v)){for(v=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],it=G.startTime;if(it>A)break;var gt=G.transferSize,vt=G.initiatorType;gt&&b_(vt)&&(G=G.responseEnd,v+=gt*(G<A?1:(A-it)/(G-it)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zd=null,Hd=null;function iu(e){return e.nodeType===9?e:e.ownerDocument}function A_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vd=null;function Oy(){var e=window.event;return e&&e.type==="popstate"?e===Vd?!1:(Vd=e,!0):(Vd=null,!1)}var C_=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(e){return w_.resolve(null).then(e).catch(Fy)}:C_;function Fy(e){setTimeout(function(){throw e})}function Gs(e){return e==="head"}function D_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),vo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Nl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Nl(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[kn]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Nl(e.ownerDocument.body);a=u}while(a);vo(n)}function U_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function kd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kd(a),Ji(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function By(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[kn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ca(e.nextSibling),e===null)break}return null}function zy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ca(e.nextSibling),e===null))return null;return e}function L_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ca(e.nextSibling),e===null))return null;return e}function Xd(e){return e.data==="$?"||e.data==="$~"}function Wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ca(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Yd=null;function N_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ca(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function O_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function I_(e,n,a){switch(n=iu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Nl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ji(e)}var ua=new Map,P_=new Set;function au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cs=F.d;F.d={f:Gy,r:Vy,D:ky,C:Xy,L:Wy,m:Yy,X:jy,S:qy,M:Zy};function Gy(){var e=cs.f(),n=Zc();return e||n}function Vy(e){var n=cn(e);n!==null&&n.tag===5&&n.type==="form"?$0(n):cs.r(e)}var mo=typeof document>"u"?null:document;function F_(e,n,a){var o=mo;if(o&&typeof n=="string"&&n){var u=ue(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),P_.has(u)||(P_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),hi(n,"link",e),q(n),o.head.appendChild(n)))}}function ky(e){cs.D(e),F_("dns-prefetch",e,null)}function Xy(e,n){cs.C(e,n),F_("preconnect",e,n)}function Wy(e,n,a){cs.L(e,n,a);var o=mo;if(o&&e&&n){var u='link[rel="preload"][as="'+ue(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ue(a.imageSizes)+'"]')):u+='[href="'+ue(e)+'"]';var f=u;switch(n){case"style":f=go(e);break;case"script":f=_o(e)}ua.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ua.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ol(f))||n==="script"&&o.querySelector(Il(f))||(n=o.createElement("link"),hi(n,"link",e),q(n),o.head.appendChild(n)))}}function Yy(e,n){cs.m(e,n);var a=mo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ue(o)+'"][href="'+ue(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=_o(e)}if(!ua.has(f)&&(e=x({rel:"modulepreload",href:e},n),ua.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Il(f)))return}o=a.createElement("link"),hi(o,"link",e),q(o),a.head.appendChild(o)}}}function qy(e,n,a){cs.S(e,n,a);var o=mo;if(o&&e){var u=R(o).hoistableStyles,f=go(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=o.querySelector(Ol(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ua.get(f))&&qd(e,a);var G=v=o.createElement("link");q(G),hi(G,"link",e),G._p=new Promise(function(it,gt){G.onload=it,G.onerror=gt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,su(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function jy(e,n){cs.X(e,n);var a=mo;if(a&&e){var o=R(a).hoistableScripts,u=_o(e),f=o.get(u);f||(f=a.querySelector(Il(u)),f||(e=x({src:e,async:!0},n),(n=ua.get(u))&&jd(e,n),f=a.createElement("script"),q(f),hi(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Zy(e,n){cs.M(e,n);var a=mo;if(a&&e){var o=R(a).hoistableScripts,u=_o(e),f=o.get(u);f||(f=a.querySelector(Il(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=ua.get(u))&&jd(e,n),f=a.createElement("script"),q(f),hi(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function B_(e,n,a,o){var u=(u=tt.current)?au(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=go(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=go(a.href);var f=R(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Ol(e)))&&!f._p&&(v.instance=f,v.state.loading=5),ua.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ua.set(e,a),f||Ky(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_o(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function go(e){return'href="'+ue(e)+'"'}function Ol(e){return'link[rel="stylesheet"]['+e+"]"}function z_(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Ky(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),hi(n,"link",a),q(n),e.head.appendChild(n))}function _o(e){return'[src="'+ue(e)+'"]'}function Il(e){return"script[async]"+e}function H_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ue(a.href)+'"]');if(o)return n.instance=o,q(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),q(o),hi(o,"style",u),su(o,a.precedence,e),n.instance=o;case"stylesheet":u=go(a.href);var f=e.querySelector(Ol(u));if(f)return n.state.loading|=4,n.instance=f,q(f),f;o=z_(a),(u=ua.get(u))&&qd(o,u),f=(e.ownerDocument||e).createElement("link"),q(f);var v=f;return v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),hi(f,"link",o),n.state.loading|=4,su(f,a.precedence,e),n.instance=f;case"script":return f=_o(a.src),(u=e.querySelector(Il(f)))?(n.instance=u,q(u),u):(o=a,(u=ua.get(f))&&(o=x({},a),jd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),hi(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,su(o,a.precedence,e));return n.instance}function su(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var A=o[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ru=null;function G_(e,n,a){if(ru===null){var o=new Map,u=ru=new Map;u.set(a,o)}else u=ru,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[kn]||f[An]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=o.get(v);A?A.push(f):o.set(v,[f])}}return o}function V_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Qy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=go(o.href),f=n.querySelector(Ol(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ou.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,q(f);return}f=n.ownerDocument||n,o=z_(o),(u=ua.get(u))&&qd(o,u),f=f.createElement("link"),q(f);var v=f;v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),hi(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ou.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zd=0;function $y(e,n){return e.stylesheets&&e.count===0&&cu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Zd===0&&(Zd=62500*Ny());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Zd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ou(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lu=null;function cu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lu=new Map,n.forEach(tM,e),lu=null,ou.call(e))}function tM(e,n){if(!(n.state.loading&4)){var a=lu.get(e);if(a)var o=a.get(null);else{a=new Map,lu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=ou.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Pl={$$typeof:P,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function eM(e,n,a,o,u,f,v,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function X_(e,n,a,o,u,f,v,A,G,it,gt,vt){return e=new eM(e,n,a,v,G,it,gt,vt,A),n=1,f===!0&&(n|=24),f=Hi(3,null,null,n),e.current=f,f.stateNode=e,n=Ch(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Lh(f),e}function W_(e){return e?(e=qr,e):qr}function Y_(e,n,a,o,u,f){u=W_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ds(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Us(e,o,n),a!==null&&(Ii(a,e,n),pl(a,e,n))}function q_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Kd(e,n){q_(e,n),(e=e.alternate)&&q_(e,n)}function j_(e){if(e.tag===13||e.tag===31){var n=ur(e,67108864);n!==null&&Ii(n,e,67108864),Kd(e,67108864)}}function Z_(e){if(e.tag===13||e.tag===31){var n=Wi();n=Wa(n);var a=ur(e,n);a!==null&&Ii(a,e,n),Kd(e,n)}}var uu=!0;function nM(e,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=2,Qd(e,n,a,o)}finally{F.p=f,O.T=u}}function iM(e,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=8,Qd(e,n,a,o)}finally{F.p=f,O.T=u}}function Qd(e,n,a,o){if(uu){var u=Jd(o);if(u===null)Fd(e,n,o,fu,a),Q_(e,o);else if(sM(u,e,n,a,o))o.stopPropagation();else if(Q_(e,o),n&4&&-1<aM.indexOf(e)){for(;u!==null;){var f=cn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=yt(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var G=1<<31-It(v);A.entanglements[1]|=G,v&=~G}Pa(f),(Je&6)===0&&(qc=E()+500,Dl(0))}}break;case 31:case 13:A=ur(f,2),A!==null&&Ii(A,f,2),Zc(),Kd(f,2)}if(f=Jd(o),f===null&&Fd(e,n,o,fu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Fd(e,n,o,null,a)}}function Jd(e){return e=Vr(e),$d(e)}var fu=null;function $d(e){if(fu=null,e=Bi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fu=e,null}function K_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case pt:return 2;case xt:return 8;case ht:case Yt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var tp=!1,Vs=null,ks=null,Xs=null,Fl=new Map,Bl=new Map,Ws=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q_(e,n){switch(e){case"focusin":case"focusout":Vs=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Xs=null;break;case"pointerover":case"pointerout":Fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(n.pointerId)}}function zl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=cn(n),n!==null&&j_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function sM(e,n,a,o,u){switch(n){case"focusin":return Vs=zl(Vs,e,n,a,o,u),!0;case"dragenter":return ks=zl(ks,e,n,a,o,u),!0;case"mouseover":return Xs=zl(Xs,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Fl.set(f,zl(Fl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Bl.set(f,zl(Bl.get(f)||null,e,n,a,o,u)),!0}return!1}function J_(e){var n=Bi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ms(e.priority,function(){Z_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ms(e.priority,function(){Z_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Jd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Gr=o,a.target.dispatchEvent(o),Gr=null}else return n=cn(a),n!==null&&j_(n),e.blockedOn=a,!1;n.shift()}return!0}function $_(e,n,a){hu(e)&&a.delete(n)}function rM(){tp=!1,Vs!==null&&hu(Vs)&&(Vs=null),ks!==null&&hu(ks)&&(ks=null),Xs!==null&&hu(Xs)&&(Xs=null),Fl.forEach($_),Bl.forEach($_)}function du(e,n){e.blockedOn===n&&(e.blockedOn=null,tp||(tp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,rM)))}var pu=null;function tv(e){pu!==e&&(pu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pu===e&&(pu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if($d(o||a)===null)continue;break}var f=cn(a);f!==null&&(e.splice(n,3),n-=3,Jh(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function vo(e){function n(G){return du(G,e)}Vs!==null&&du(Vs,e),ks!==null&&du(ks,e),Xs!==null&&du(Xs,e),Fl.forEach(n),Bl.forEach(n);for(var a=0;a<Ws.length;a++){var o=Ws[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ws.length&&(a=Ws[0],a.blockedOn===null);)J_(a),a.blockedOn===null&&Ws.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[wn]||null;if(typeof f=="function")v||tv(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[wn]||null)A=v.formAction;else if($d(u)!==null)continue}else A=v.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),tv(a)}}}function ev(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ep(e){this._internalRoot=e}mu.prototype.render=ep.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Wi();Y_(a,o,e,n,null,null)},mu.prototype.unmount=ep.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Y_(e.current,2,null,e,null,null),Zc(),n[Qi]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ki();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ws.length&&n!==0&&n<Ws[a].priority;a++);Ws.splice(a,0,e),a===0&&J_(e)}};var nv=t.version;if(nv!=="19.2.4")throw Error(s(527,nv,"19.2.4"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var oM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{bt=gu.inject(oM),Et=gu}catch{}}return Gl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=cg,f=ug,v=fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=X_(e,1,!1,null,null,a,o,null,u,f,v,ev),e[Qi]=n.current,Pd(e),new ep(n)},Gl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=cg,v=ug,A=fg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=X_(e,1,!0,n,a??null,o,u,G,f,v,A,ev),n.context=W_(null),a=n.current,o=Wi(),o=Wa(o),u=Ds(o),u.callback=null,Us(a,u,o),a=o,n.current.lanes=a,Vn(n,a),Pa(n),e[Qi]=n.current,Pd(e),new mu(n)},Gl.version="19.2.4",Gl}var hv;function _M(){if(hv)return ap.exports;hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ap.exports=gM(),ap.exports}var vM=_M();const Gf="183",ux=0,Xp=1,fx=2,zo=1,hx=2,Po=3,xs=0,xi=1,Gn=2,Ga=0,Nr=1,Wp=2,Yp=3,qp=4,dx=5,tr=100,px=101,mx=102,gx=103,_x=104,vx=200,xx=201,Sx=202,yx=203,Ku=204,Qu=205,Mx=206,Ex=207,Tx=208,bx=209,Ax=210,Rx=211,Cx=212,wx=213,Dx=214,Ju=0,$u=1,tf=2,Or=3,ef=4,nf=5,af=6,sf=7,Vf=0,Ux=1,Lx=2,wa=0,sm=1,rm=2,om=3,kf=4,lm=5,cm=6,um=7,fm=300,ir=301,Ir=302,Xu=303,Wu=304,hc=306,Go=1e3,Ha=1001,rf=1002,ii=1003,Nx=1004,$l=1005,ai=1006,Yu=1007,_s=1008,Pi=1009,hm=1010,dm=1011,Vo=1012,Xf=1013,Ua=1014,pa=1015,Va=1016,Wf=1017,Yf=1018,ko=1020,pm=35902,mm=35899,gm=1021,_m=1022,ma=1023,ka=1026,er=1027,qf=1028,jf=1029,Pr=1030,Zf=1031,Kf=1033,ec=33776,nc=33777,ic=33778,ac=33779,of=35840,lf=35841,cf=35842,uf=35843,ff=36196,hf=37492,df=37496,pf=37488,mf=37489,gf=37490,_f=37491,vf=37808,xf=37809,Sf=37810,yf=37811,Mf=37812,Ef=37813,Tf=37814,bf=37815,Af=37816,Rf=37817,Cf=37818,wf=37819,Df=37820,Uf=37821,Lf=36492,Nf=36494,Of=36495,If=36283,Pf=36284,Ff=36285,Bf=36286,Ox=3200,Qf=0,Ix=1,ms="",Yn="srgb",Fr="srgb-linear",lc="linear",$e="srgb",Dr=7680,jp=519,Px=512,Fx=513,Bx=514,Jf=515,zx=516,Hx=517,$f=518,Gx=519,Zp=35044,Kp="300 es",Ca=2e3,Xo=2001;function xM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function zf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vx(){const r=zf("canvas");return r.style.display="block",r}const dv={};function Qp(...r){const t="THREE."+r.shift();console.log(t,...r)}function kx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function fe(...r){r=kx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Xe(...r){r=kx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function cc(...r){const t=r.join(" ");t in dv||(dv[t]=!0,fe(...r))}function SM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const yM={[Ju]:$u,[tf]:af,[ef]:sf,[Or]:nf,[$u]:Ju,[af]:tf,[sf]:ef,[nf]:Or};class Br{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pv=1234567;const sc=Math.PI/180,Wo=180/Math.PI;function jo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_i[r&255]+_i[r>>8&255]+_i[r>>16&255]+_i[r>>24&255]+"-"+_i[t&255]+_i[t>>8&255]+"-"+_i[t>>16&15|64]+_i[t>>24&255]+"-"+_i[i&63|128]+_i[i>>8&255]+"-"+_i[i>>16&255]+_i[i>>24&255]+_i[s&255]+_i[s>>8&255]+_i[s>>16&255]+_i[s>>24&255]).toLowerCase()}function Ae(r,t,i){return Math.max(t,Math.min(i,r))}function vm(r,t){return(r%t+t)%t}function MM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function EM(r,t,i){return r!==t?(i-r)/(t-r):0}function rc(r,t,i){return(1-i)*r+i*t}function TM(r,t,i,s){return rc(r,t,1-Math.exp(-i*s))}function bM(r,t=1){return t-Math.abs(vm(r,t*2)-t)}function AM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function RM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function CM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function wM(r,t){return r+Math.random()*(t-r)}function DM(r){return r*(.5-Math.random())}function UM(r){r!==void 0&&(pv=r);let t=pv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function LM(r){return r*sc}function NM(r){return r*Wo}function OM(r){return(r&r-1)===0&&r!==0}function IM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function PM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function FM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),_=h((t+s)/2),x=c((t-s)/2),g=h((t-s)/2),y=c((s-t)/2),T=h((s-t)/2);switch(l){case"XYX":r.set(d*_,m*x,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*x,d*p);break;case"ZXZ":r.set(m*x,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*T,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*T,d*p);break;case"ZYZ":r.set(m*T,m*y,d*_,d*p);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Io(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ti(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bi={DEG2RAD:sc,RAD2DEG:Wo,generateUUID:jo,clamp:Ae,euclideanModulo:vm,mapLinear:MM,inverseLerp:EM,lerp:rc,damp:TM,pingpong:bM,smoothstep:AM,smootherstep:RM,randInt:CM,randFloat:wM,randFloatSpread:DM,seededRandom:UM,degToRad:LM,radToDeg:NM,isPowerOfTwo:OM,ceilPowerOfTwo:IM,floorPowerOfTwo:PM,setQuaternionFromProperEuler:FM,normalize:Ti,denormalize:Io};class Re{constructor(t=0,i=0){Re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],y=c[h+1],T=c[h+2],w=c[h+3];if(x!==w||m!==g||p!==y||_!==T){let M=m*g+p*y+_*T+x*w;M<0&&(g=-g,y=-y,T=-T,w=-w,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),P=Math.sin(C);S=Math.sin(S*C)/P,d=Math.sin(d*C)/P,m=m*S+g*d,p=p*S+y*d,_=_*S+T*d,x=x*S+w*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+T*d,x=x*S+w*d;const C=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=C,p*=C,_*=C,x*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[h],g=c[h+1],y=c[h+2],T=c[h+3];return t[i]=d*T+_*x+m*y-p*g,t[i+1]=m*T+_*g+p*x-d*y,t[i+2]=p*T+_*y+d*g-m*x,t[i+3]=_*T-d*x-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*_*x+p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x-g*y*T;break;case"YXZ":this._x=g*_*x+p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x+g*y*T;break;case"ZXY":this._x=g*_*x-p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x-g*y*T;break;case"ZYX":this._x=g*_*x-p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x+g*y*T;break;case"YZX":this._x=g*_*x+p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x-g*y*T;break;case"XZY":this._x=g*_*x-p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x+g*y*T;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],g=s+d+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>x){const y=2*Math.sqrt(1+s-d-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-s-x);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(mv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(mv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return lp.copy(this).projectOnVector(t),this.sub(lp)}reflect(t){return this.sub(lp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lp=new $,mv=new zr;class Se{constructor(t,i,s,l,c,h,d,m,p){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],y=s[5],T=s[8],w=l[0],M=l[3],S=l[6],C=l[1],P=l[4],U=l[7],N=l[2],z=l[5],B=l[8];return c[0]=h*w+d*C+m*N,c[3]=h*M+d*P+m*z,c[6]=h*S+d*U+m*B,c[1]=p*w+_*C+x*N,c[4]=p*M+_*P+x*z,c[7]=p*S+_*U+x*B,c[2]=g*w+y*C+T*N,c[5]=g*M+y*P+T*z,c[8]=g*S+y*U+T*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,g=d*m-_*c,y=p*c-h*m,T=i*x+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=x*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*h)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=y*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(cp.makeScale(t,i)),this}rotate(t){return this.premultiply(cp.makeRotation(-t)),this}translate(t,i){return this.premultiply(cp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cp=new Se,gv=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_v=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BM(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===$e&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===$e&&(l.r=Ho(l.r),l.g=Ho(l.g),l.b=Ho(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?lc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return cc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return cc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Fr]:{primaries:t,whitePoint:s,transfer:lc,toXYZ:gv,fromXYZ:_v,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:s,transfer:$e,toXYZ:gv,fromXYZ:_v,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),r}const We=BM();function vs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xo;class Xx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xo===void 0&&(xo=zf("canvas")),xo.width=t.width,xo.height=t.height;const l=xo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=zf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=vs(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(vs(i[s]/255)*255):i[s]=vs(i[s]);return{data:i,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zM=0;class th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(up(l[h].image)):c.push(up(l[h]))}else c=up(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function up(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let HM=0;const fp=new $;class di extends Br{constructor(t=di.DEFAULT_IMAGE,i=di.DEFAULT_MAPPING,s=Ha,l=Ha,c=ai,h=_s,d=ma,m=Pi,p=di.DEFAULT_ANISOTROPY,_=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=jo(),this.name="",this.source=new th(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fp).x}get height(){return this.source.getSize(fp).y}get depth(){return this.source.getSize(fp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Go:t.x=t.x-Math.floor(t.x);break;case Ha:t.x=t.x<0?0:1;break;case rf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Go:t.y=t.y-Math.floor(t.y);break;case Ha:t.y=t.y<0?0:1;break;case rf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=fm;di.DEFAULT_ANISOTROPY=1;class bn{constructor(t=0,i=0,s=0,l=1){bn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],g=m[1],y=m[5],T=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+w)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(y+1)/2,N=(S+1)/2,z=(_+g)/4,B=(x+w)/4,b=(T+M)/4;return P>U&&P>N?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=z/s,c=B/s):U>N?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=z/l,c=b/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=B/c,l=b/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-T)*(M-T)+(x-w)*(x-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(x-w)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wx extends Br{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new bn(0,0,t,i),this.scissorTest=!1,this.viewport=new bn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new di(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new th(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Da extends Wx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class xm extends di{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yx extends di{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t,i,s,l,c,h,d,m,p,_,x,g,y,T,w,M){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,x,g,y,T,w,M)}set(t,i,s,l,c,h,d,m,p,_,x,g,y,T,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=x,S[14]=g,S[3]=y,S[7]=T,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/So.setFromMatrixColumn(t,0).length(),c=1/So.setFromMatrixColumn(t,1).length(),h=1/So.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*x,T=d*_,w=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+T*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=T+y*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*x,T=p*_,w=p*x;i[0]=g+w*d,i[4]=T*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=y*d-T,i[6]=w+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*x,T=p*_,w=p*x;i[0]=g-w*d,i[4]=-h*x,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*_,i[9]=w-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*x,T=d*_,w=d*x;i[0]=m*_,i[4]=T*p-y,i[8]=g*p+w,i[1]=m*x,i[5]=w*p+g,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=w-g*x,i[8]=T*x+y,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*x+T,i[10]=g-w*x}else if(t.order==="XZY"){const g=h*m,y=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=g*x+w,i[5]=h*_,i[9]=y*x-T,i[2]=T*x-y,i[6]=d*_,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GM,t,VM)}lookAt(t,i,s){const l=this.elements;return Yi.subVectors(t,i),Yi.lengthSq()===0&&(Yi.z=1),Yi.normalize(),qs.crossVectors(s,Yi),qs.lengthSq()===0&&(Math.abs(s.z)===1?Yi.x+=1e-4:Yi.z+=1e-4,Yi.normalize(),qs.crossVectors(s,Yi)),qs.normalize(),_u.crossVectors(Yi,qs),l[0]=qs.x,l[4]=_u.x,l[8]=Yi.x,l[1]=qs.y,l[5]=_u.y,l[9]=Yi.y,l[2]=qs.z,l[6]=_u.z,l[10]=Yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],y=s[13],T=s[2],w=s[6],M=s[10],S=s[14],C=s[3],P=s[7],U=s[11],N=s[15],z=l[0],B=l[4],b=l[8],D=l[12],lt=l[1],H=l[5],W=l[9],Y=l[13],Z=l[2],V=l[6],O=l[10],F=l[14],st=l[3],ft=l[7],St=l[11],L=l[15];return c[0]=h*z+d*lt+m*Z+p*st,c[4]=h*B+d*H+m*V+p*ft,c[8]=h*b+d*W+m*O+p*St,c[12]=h*D+d*Y+m*F+p*L,c[1]=_*z+x*lt+g*Z+y*st,c[5]=_*B+x*H+g*V+y*ft,c[9]=_*b+x*W+g*O+y*St,c[13]=_*D+x*Y+g*F+y*L,c[2]=T*z+w*lt+M*Z+S*st,c[6]=T*B+w*H+M*V+S*ft,c[10]=T*b+w*W+M*O+S*St,c[14]=T*D+w*Y+M*F+S*L,c[3]=C*z+P*lt+U*Z+N*st,c[7]=C*B+P*H+U*V+N*ft,c[11]=C*b+P*W+U*O+N*St,c[15]=C*D+P*Y+U*F+N*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],g=t[10],y=t[14],T=t[3],w=t[7],M=t[11],S=t[15],C=m*y-p*g,P=d*y-p*x,U=d*g-m*x,N=h*y-p*_,z=h*g-m*_,B=h*x-d*_;return i*(w*C-M*P+S*U)-s*(T*C-M*N+S*z)+l*(T*P-w*N+S*B)-c*(T*U-w*z+M*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],g=t[10],y=t[11],T=t[12],w=t[13],M=t[14],S=t[15],C=i*d-s*h,P=i*m-l*h,U=i*p-c*h,N=s*m-l*d,z=s*p-c*d,B=l*p-c*m,b=_*w-x*T,D=_*M-g*T,lt=_*S-y*T,H=x*M-g*w,W=x*S-y*w,Y=g*S-y*M,Z=C*Y-P*W+U*H+N*lt-z*D+B*b;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/Z;return t[0]=(d*Y-m*W+p*H)*V,t[1]=(l*W-s*Y-c*H)*V,t[2]=(w*B-M*z+S*N)*V,t[3]=(g*z-x*B-y*N)*V,t[4]=(m*lt-h*Y-p*D)*V,t[5]=(i*Y-l*lt+c*D)*V,t[6]=(M*U-T*B-S*P)*V,t[7]=(_*B-g*U+y*P)*V,t[8]=(h*W-d*lt+p*b)*V,t[9]=(s*lt-i*W-c*b)*V,t[10]=(T*z-w*U+S*C)*V,t[11]=(x*U-_*z-y*C)*V,t[12]=(d*D-h*H-m*b)*V,t[13]=(i*H-s*D+l*b)*V,t[14]=(w*P-T*N-M*C)*V,t[15]=(_*N-x*P+g*C)*V,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,g=c*p,y=c*_,T=c*x,w=h*_,M=h*x,S=d*x,C=m*p,P=m*_,U=m*x,N=s.x,z=s.y,B=s.z;return l[0]=(1-(w+S))*N,l[1]=(y+U)*N,l[2]=(T-P)*N,l[3]=0,l[4]=(y-U)*z,l[5]=(1-(g+S))*z,l[6]=(M+C)*z,l[7]=0,l[8]=(T+P)*B,l[9]=(M-C)*B,l[10]=(1-(g+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=So.set(l[0],l[1],l[2]).length();const d=So.set(l[4],l[5],l[6]).length(),m=So.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ea.copy(this);const p=1/h,_=1/d,x=1/m;return Ea.elements[0]*=p,Ea.elements[1]*=p,Ea.elements[2]*=p,Ea.elements[4]*=_,Ea.elements[5]*=_,Ea.elements[6]*=_,Ea.elements[8]*=x,Ea.elements[9]*=x,Ea.elements[10]*=x,i.setFromRotationMatrix(Ea),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=Ca,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let T,w;if(m)T=c/(h-c),w=h*c/(h-c);else if(d===Ca)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Xo)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ca,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,w;if(m)T=1/(h-c),w=h/(h-c);else if(d===Ca)T=-2/(h-c),w=-(h+c)/(h-c);else if(d===Xo)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const So=new $,Ea=new rn,GM=new $(0,0,0),VM=new $(1,1,1),qs=new $,_u=new $,Yi=new $,vv=new rn,xv=new zr;class _a{constructor(t=0,i=0,s=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ae(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return vv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return xv.setFromEuler(this),this.setFromQuaternion(xv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kM=0;const Sv=new $,yo=new zr,us=new rn,vu=new $,Vl=new $,XM=new $,WM=new zr,yv=new $(1,0,0),Mv=new $(0,1,0),Ev=new $(0,0,1),Tv={type:"added"},YM={type:"removed"},Mo={type:"childadded",child:null},hp={type:"childremoved",child:null};class hn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const t=new $,i=new _a,s=new zr,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new Se}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yo.setFromAxisAngle(t,i),this.quaternion.multiply(yo),this}rotateOnWorldAxis(t,i){return yo.setFromAxisAngle(t,i),this.quaternion.premultiply(yo),this}rotateX(t){return this.rotateOnAxis(yv,t)}rotateY(t){return this.rotateOnAxis(Mv,t)}rotateZ(t){return this.rotateOnAxis(Ev,t)}translateOnAxis(t,i){return Sv.copy(t).applyQuaternion(this.quaternion),this.position.add(Sv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(yv,t)}translateY(t){return this.translateOnAxis(Mv,t)}translateZ(t){return this.translateOnAxis(Ev,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?vu.copy(t):vu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(Vl,vu,this.up):us.lookAt(vu,Vl,this.up),this.quaternion.setFromRotationMatrix(us),l&&(us.extractRotation(l.matrixWorld),yo.setFromRotationMatrix(us),this.quaternion.premultiply(yo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tv),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(YM),hp.child=t,this.dispatchEvent(hp),hp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),us.multiply(t.parent.matrixWorld)),t.applyMatrix4(us),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tv),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,t,XM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,WM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}hn.DEFAULT_UP=new $(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fo extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qM={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,T=.005;p.inputState.pinching&&g>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},xu={h:0,s:0,l:0};function dp(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class oe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=We.workingColorSpace){return this.r=t,this.g=i,this.b=s,We.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=We.workingColorSpace){if(t=vm(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=dp(h,c,t+1/3),this.g=dp(h,c,t),this.b=dp(h,c,t-1/3)}return We.colorSpaceToWorking(this,l),this}setStyle(t,i=Yn){function s(c){c!==void 0&&parseFloat(c)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:fe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yn){const s=qx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return We.workingToColorSpace(vi.copy(this),t),Math.round(Ae(vi.r*255,0,255))*65536+Math.round(Ae(vi.g*255,0,255))*256+Math.round(Ae(vi.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=We.workingColorSpace){We.workingToColorSpace(vi.copy(this),i);const s=vi.r,l=vi.g,c=vi.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=We.workingColorSpace){return We.workingToColorSpace(vi.copy(this),i),t.r=vi.r,t.g=vi.g,t.b=vi.b,t}getStyle(t=Yn){We.workingToColorSpace(vi.copy(this),t);const i=vi.r,s=vi.g,l=vi.b;return t!==Yn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(js),this.setHSL(js.h+t,js.s+i,js.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(js),t.getHSL(xu);const s=rc(js.h,xu.h,i),l=rc(js.s,xu.s,i),c=rc(js.l,xu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new oe;oe.NAMES=qx;class uc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new oe(t),this.near=i,this.far=s}clone(){return new uc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sm extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ta=new $,fs=new $,pp=new $,hs=new $,Eo=new $,To=new $,bv=new $,mp=new $,gp=new $,_p=new $,vp=new bn,xp=new bn,Sp=new bn;class da{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ta.subVectors(t,i),l.cross(Ta);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ta.subVectors(l,i),fs.subVectors(s,i),pp.subVectors(t,i);const h=Ta.dot(Ta),d=Ta.dot(fs),m=Ta.dot(pp),p=fs.dot(fs),_=fs.dot(pp),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(p*m-d*_)*g,T=(h*_-d*m)*g;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,hs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,hs.x),m.addScaledVector(h,hs.y),m.addScaledVector(d,hs.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return vp.setScalar(0),xp.setScalar(0),Sp.setScalar(0),vp.fromBufferAttribute(t,i),xp.fromBufferAttribute(t,s),Sp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(vp,c.x),h.addScaledVector(xp,c.y),h.addScaledVector(Sp,c.z),h}static isFrontFacing(t,i,s,l){return Ta.subVectors(s,i),fs.subVectors(t,i),Ta.cross(fs).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ta.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),Ta.cross(fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return da.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return da.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return da.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return da.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return da.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Eo.subVectors(l,s),To.subVectors(c,s),mp.subVectors(t,s);const m=Eo.dot(mp),p=To.dot(mp);if(m<=0&&p<=0)return i.copy(s);gp.subVectors(t,l);const _=Eo.dot(gp),x=To.dot(gp);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Eo,h);_p.subVectors(t,c);const y=Eo.dot(_p),T=To.dot(_p);if(T>=0&&y<=T)return i.copy(c);const w=y*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(To,d);const M=_*T-y*x;if(M<=0&&x-_>=0&&y-T>=0)return bv.subVectors(c,l),d=(x-_)/(x-_+(y-T)),i.copy(l).addScaledVector(bv,d);const S=1/(M+w+g);return h=w*S,d=g*S,i.copy(s).addScaledVector(Eo,h).addScaledVector(To,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ar{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ba.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ba.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ba.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,ba):ba.fromBufferAttribute(c,h),ba.applyMatrix4(t.matrixWorld),this.expandByPoint(ba);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Su.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Su.copy(s.boundingBox)),Su.applyMatrix4(t.matrixWorld),this.union(Su)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ba),ba.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kl),yu.subVectors(this.max,kl),bo.subVectors(t.a,kl),Ao.subVectors(t.b,kl),Ro.subVectors(t.c,kl),Zs.subVectors(Ao,bo),Ks.subVectors(Ro,Ao),Er.subVectors(bo,Ro);let i=[0,-Zs.z,Zs.y,0,-Ks.z,Ks.y,0,-Er.z,Er.y,Zs.z,0,-Zs.x,Ks.z,0,-Ks.x,Er.z,0,-Er.x,-Zs.y,Zs.x,0,-Ks.y,Ks.x,0,-Er.y,Er.x,0];return!yp(i,bo,Ao,Ro,yu)||(i=[1,0,0,0,1,0,0,0,1],!yp(i,bo,Ao,Ro,yu))?!1:(Mu.crossVectors(Zs,Ks),i=[Mu.x,Mu.y,Mu.z],yp(i,bo,Ao,Ro,yu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ba).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ba).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ds=[new $,new $,new $,new $,new $,new $,new $,new $],ba=new $,Su=new ar,bo=new $,Ao=new $,Ro=new $,Zs=new $,Ks=new $,Er=new $,kl=new $,yu=new $,Mu=new $,Tr=new $;function yp(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Tr.fromArray(r,c);const d=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),m=t.dot(Tr),p=i.dot(Tr),_=s.dot(Tr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const zn=new $,Eu=new Re;let jM=0;class ga{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Zp,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Eu.fromBufferAttribute(this,i),Eu.applyMatrix3(t),this.setXY(i,Eu.x,Eu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)zn.fromBufferAttribute(this,i),zn.applyMatrix3(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)zn.fromBufferAttribute(this,i),zn.applyMatrix4(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)zn.fromBufferAttribute(this,i),zn.applyNormalMatrix(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)zn.fromBufferAttribute(this,i),zn.transformDirection(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Io(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ti(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ti(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ti(i,this.array),s=Ti(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ti(i,this.array),s=Ti(s,this.array),l=Ti(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ti(i,this.array),s=Ti(s,this.array),l=Ti(l,this.array),c=Ti(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zp&&(t.usage=this.usage),t}}class ym extends ga{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Mm extends ga{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class si extends ga{constructor(t,i,s){super(new Float32Array(t),i,s)}}const ZM=new ar,Xl=new $,Mp=new $;class Zo{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ZM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xl.subVectors(t,this.center);const i=Xl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xl.copy(t.center).add(Mp)),this.expandByPoint(Xl.copy(t.center).sub(Mp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let KM=0;const fa=new rn,Ep=new hn,Co=new $,qi=new ar,Wl=new ar,ni=new $;class ji extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xM(t)?Mm:ym)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fa.makeRotationFromQuaternion(t),this.applyMatrix4(fa),this}rotateX(t){return fa.makeRotationX(t),this.applyMatrix4(fa),this}rotateY(t){return fa.makeRotationY(t),this.applyMatrix4(fa),this}rotateZ(t){return fa.makeRotationZ(t),this.applyMatrix4(fa),this}translate(t,i,s){return fa.makeTranslation(t,i,s),this.applyMatrix4(fa),this}scale(t,i,s){return fa.makeScale(t,i,s),this.applyMatrix4(fa),this}lookAt(t){return Ep.lookAt(t),Ep.updateMatrix(),this.applyMatrix4(Ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new si(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];qi.setFromBufferAttribute(c),this.morphTargetsRelative?(ni.addVectors(this.boundingBox.min,qi.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,qi.max),this.boundingBox.expandByPoint(ni)):(this.boundingBox.expandByPoint(qi.min),this.boundingBox.expandByPoint(qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(qi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Wl.setFromBufferAttribute(d),this.morphTargetsRelative?(ni.addVectors(qi.min,Wl.min),qi.expandByPoint(ni),ni.addVectors(qi.max,Wl.max),qi.expandByPoint(ni)):(qi.expandByPoint(Wl.min),qi.expandByPoint(Wl.max))}qi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)ni.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(ni));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)ni.fromBufferAttribute(d,p),m&&(Co.fromBufferAttribute(t,p),ni.add(Co)),l=Math.max(l,s.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ga(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let b=0;b<s.count;b++)d[b]=new $,m[b]=new $;const p=new $,_=new $,x=new $,g=new Re,y=new Re,T=new Re,w=new $,M=new $;function S(b,D,lt){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,D),x.fromBufferAttribute(s,lt),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,D),T.fromBufferAttribute(c,lt),_.sub(p),x.sub(p),y.sub(g),T.sub(g);const H=1/(y.x*T.y-T.x*y.y);isFinite(H)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(x,-y.y).multiplyScalar(H),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(H),d[b].add(w),d[D].add(w),d[lt].add(w),m[b].add(M),m[D].add(M),m[lt].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let b=0,D=C.length;b<D;++b){const lt=C[b],H=lt.start,W=lt.count;for(let Y=H,Z=H+W;Y<Z;Y+=3)S(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const P=new $,U=new $,N=new $,z=new $;function B(b){N.fromBufferAttribute(l,b),z.copy(N);const D=d[b];P.copy(D),P.sub(N.multiplyScalar(N.dot(D))).normalize(),U.crossVectors(z,D);const H=U.dot(m[b])<0?-1:1;h.setXYZW(b,P.x,P.y,P.z,H)}for(let b=0,D=C.length;b<D;++b){const lt=C[b],H=lt.start,W=lt.count;for(let Y=H,Z=H+W;Y<Z;Y+=3)B(t.getX(Y+0)),B(t.getX(Y+1)),B(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ga(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,h=new $,d=new $,m=new $,p=new $,_=new $,x=new $;if(t)for(let g=0,y=t.count;g<y;g+=3){const T=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)ni.fromBufferAttribute(t,i),ni.normalize(),t.setXYZ(i,ni.x,ni.y,ni.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,g=new p.constructor(m.length*_);let y=0,T=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*_;for(let S=0;S<_;S++)g[T++]=p[y++]}return new ga(g,_,x)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ji,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const y=p[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let QM=0;class Hr extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Nr,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Qu,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){fe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(s.blending=this.blending),this.side!==xs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ku&&(s.blendSrc=this.blendSrc),this.blendDst!==Qu&&(s.blendDst=this.blendDst),this.blendEquation!==tr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ps=new $,Tp=new $,Tu=new $,Qs=new $,bp=new $,bu=new $,Ap=new $;class Em{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ps.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,i),ps.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Tp.copy(t).add(i).multiplyScalar(.5),Tu.copy(i).sub(t).normalize(),Qs.copy(this.origin).sub(Tp);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tu),d=Qs.dot(this.direction),m=-Qs.dot(Tu),p=Qs.lengthSq(),_=Math.abs(1-h*h);let x,g,y,T;if(_>0)if(x=h*m-d,g=h*d-m,T=c*_,x>=0)if(g>=-T)if(g<=T){const w=1/_;x*=w,g*=w,y=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g<=-T?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Tp).addScaledVector(Tu,g),y}intersectSphere(t,i){ps.subVectors(t.center,this.origin);const s=ps.dot(this.direction),l=ps.dot(ps)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,i,s,l,c){bp.subVectors(i,t),bu.subVectors(s,t),Ap.crossVectors(bp,bu);let h=this.direction.dot(Ap),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Qs.subVectors(this.origin,t);const m=d*this.direction.dot(bu.crossVectors(Qs,bu));if(m<0)return null;const p=d*this.direction.dot(bp.cross(Qs));if(p<0||m+p>h)return null;const _=-d*Qs.dot(Ap);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fc extends Hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Av=new rn,br=new Em,Au=new Zo,Rv=new $,Ru=new $,Cu=new $,wu=new $,Rp=new $,Du=new $,Cv=new $,Uu=new $;class ke extends hn{constructor(t=new ji,i=new fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Du.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Rp.fromBufferAttribute(x,t),h?Du.addScaledVector(Rp,_):Du.addScaledVector(Rp.sub(i),_))}i.add(Du)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Au.copy(s.boundingSphere),Au.applyMatrix4(c),br.copy(t.ray).recast(t.near),!(Au.containsPoint(br.origin)===!1&&(br.intersectSphere(Au,Rv)===null||br.origin.distanceToSquared(Rv)>(t.far-t.near)**2))&&(Av.copy(c).invert(),br.copy(t.ray).applyMatrix4(Av),!(s.boundingBox!==null&&br.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,br)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),P=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=C,N=P;U<N;U+=3){const z=d.getX(U),B=d.getX(U+1),b=d.getX(U+2);l=Lu(this,S,t,s,p,_,x,z,B,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const C=d.getX(M),P=d.getX(M+1),U=d.getX(M+2);l=Lu(this,h,t,s,p,_,x,C,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=C,N=P;U<N;U+=3){const z=U,B=U+1,b=U+2;l=Lu(this,S,t,s,p,_,x,z,B,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const C=M,P=M+1,U=M+2;l=Lu(this,h,t,s,p,_,x,C,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function JM(r,t,i,s,l,c,h,d){let m;if(t.side===xi?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===xs,d),m===null)return null;Uu.copy(d),Uu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Uu);return p<i.near||p>i.far?null:{distance:p,point:Uu.clone(),object:r}}function Lu(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Ru),r.getVertexPosition(m,Cu),r.getVertexPosition(p,wu);const _=JM(r,t,i,s,Ru,Cu,wu,Cv);if(_){const x=new $;da.getBarycoord(Cv,Ru,Cu,wu,x),l&&(_.uv=da.getInterpolatedAttribute(l,d,m,p,x,new Re)),c&&(_.uv1=da.getInterpolatedAttribute(c,d,m,p,x,new Re)),h&&(_.normal=da.getInterpolatedAttribute(h,d,m,p,x,new $),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new $,materialIndex:0};da.getNormal(Ru,Cu,wu,g.normal),_.face=g,_.barycoord=x}return _}class Tm extends di{constructor(t=null,i=1,s=1,l,c,h,d,m,p=ii,_=ii,x,g){super(null,h,d,m,p,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jp extends ga{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wo=new rn,wv=new rn,Nu=[],Dv=new ar,$M=new rn,Yl=new ke,ql=new Zo;class jx extends ke{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Jp(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,$M)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ar),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,wo),Dv.copy(t.boundingBox).applyMatrix4(wo),this.boundingBox.union(Dv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,wo),ql.copy(t.boundingSphere).applyMatrix4(wo),this.boundingSphere.union(ql)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Yl.geometry=this.geometry,Yl.material=this.material,Yl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ql.copy(this.boundingSphere),ql.applyMatrix4(s),t.ray.intersectsSphere(ql)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,wo),wv.multiplyMatrices(s,wo),Yl.matrixWorld=wv,Yl.raycast(t,Nu);for(let h=0,d=Nu.length;h<d;h++){const m=Nu[h];m.instanceId=c,m.object=this,i.push(m)}Nu.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Jp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Tm(new Float32Array(l*this.count),l,this.count,qf,pa));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cp=new $,tE=new $,eE=new Se;class $s{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Cp.subVectors(s,i).cross(tE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Cp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||eE.getNormalMatrix(t),l=this.coplanarPoint(Cp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Zo,nE=new Re(.5,.5),Ou=new $;class nh{constructor(t=new $s,i=new $s,s=new $s,l=new $s,c=new $s,h=new $s){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ca,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],y=c[7],T=c[8],w=c[9],M=c[10],S=c[11],C=c[12],P=c[13],U=c[14],N=c[15];if(l[0].setComponents(p-h,y-_,S-T,N-C).normalize(),l[1].setComponents(p+h,y+_,S+T,N+C).normalize(),l[2].setComponents(p+d,y+x,S+w,N+P).normalize(),l[3].setComponents(p-d,y-x,S-w,N-P).normalize(),s)l[4].setComponents(m,g,M,U).normalize(),l[5].setComponents(p-m,y-g,S-M,N-U).normalize();else if(l[4].setComponents(p-m,y-g,S-M,N-U).normalize(),i===Ca)l[5].setComponents(p+m,y+g,S+M,N+U).normalize();else if(i===Xo)l[5].setComponents(m,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){Ar.center.set(0,0,0);const i=nE.distanceTo(t.center);return Ar.radius=.7071067811865476+i,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ou.x=l.normal.x>0?t.max.x:t.min.x,Ou.y=l.normal.y>0?t.max.y:t.min.y,Ou.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bm extends di{constructor(t=[],i=ir,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bo extends di{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yo extends di{constructor(t,i,s=Ua,l,c,h,d=ii,m=ii,p,_=ka,x=1){if(_!==ka&&_!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new th(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Zx extends Yo{constructor(t,i=Ua,s=ir,l,c,h=ii,d=ii,m,p=ka){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Am extends di{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sr extends ji{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new si(p,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(x,2));function T(w,M,S,C,P,U,N,z,B,b,D){const lt=U/B,H=N/b,W=U/2,Y=N/2,Z=z/2,V=B+1,O=b+1;let F=0,st=0;const ft=new $;for(let St=0;St<O;St++){const L=St*H-Y;for(let K=0;K<V;K++){const ut=K*lt-W;ft[w]=ut*C,ft[M]=L*P,ft[S]=Z,p.push(ft.x,ft.y,ft.z),ft[w]=0,ft[M]=0,ft[S]=z>0?1:-1,_.push(ft.x,ft.y,ft.z),x.push(K/B),x.push(1-St/b),F+=1}}for(let St=0;St<b;St++)for(let L=0;L<B;L++){const K=g+L+V*St,ut=g+L+V*(St+1),Tt=g+(L+1)+V*(St+1),Nt=g+(L+1)+V*St;m.push(K,ut,Nt),m.push(ut,Tt,Nt),st+=6}d.addGroup(y,st,D),y+=st,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Kx{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(h-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new Re:new $);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new $,l=[],c=[],h=[],d=new $,m=new rn;for(let y=0;y<=t;y++){const T=y/t;l[y]=this.getTangentAt(T,new $)}c[0]=new $,h[0]=new $;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Ae(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,T))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Ae(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],y*T)),h[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Rm(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,_,x){let g=(h-c)/p-(d-c)/(p+_)+(d-h)/_,y=(d-h)/_-(m-h)/(_+x)+(m-d)/x;g*=_,y*=_,l(h,d,g,y)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const Iu=new $,wp=new Rm,Dp=new Rm,Up=new Rm;class Qx extends Kx{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new $){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(Iu.subVectors(l[0],l[1]).add(l[0]),p=Iu);const x=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(Iu.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Iu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(x),y),w=Math.pow(x.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);w<1e-4&&(w=1),T<1e-4&&(T=w),M<1e-4&&(M=w),wp.initNonuniformCatmullRom(p.x,x.x,g.x,_.x,T,w,M),Dp.initNonuniformCatmullRom(p.y,x.y,g.y,_.y,T,w,M),Up.initNonuniformCatmullRom(p.z,x.z,g.z,_.z,T,w,M)}else this.curveType==="catmullrom"&&(wp.initCatmullRom(p.x,x.x,g.x,_.x,this.tension),Dp.initCatmullRom(p.y,x.y,g.y,_.y,this.tension),Up.initCatmullRom(p.z,x.z,g.z,_.z,this.tension));return s.set(wp.calc(m),Dp.calc(m),Up.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new $().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class za extends ji{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,g=i/m,y=[],T=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-h;for(let P=0;P<p;P++){const U=P*x-c;T.push(U,-C,0),w.push(0,0,1),M.push(P/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<d;C++){const P=C+p*S,U=C+p*(S+1),N=C+1+p*(S+1),z=C+1+p*S;y.push(P,U,z),y.push(U,N,z)}this.setIndex(y),this.setAttribute("position",new si(T,3)),this.setAttribute("normal",new si(w,3)),this.setAttribute("uv",new si(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.width,t.height,t.widthSegments,t.heightSegments)}}class ih extends ji{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let x=t;const g=(i-t)/l,y=new $,T=new Re;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const S=c+M/s*h;y.x=x*Math.cos(S),y.y=x*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),T.x=(y.x/i+1)/2,T.y=(y.y/i+1)/2,_.push(T.x,T.y)}x+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let S=0;S<s;S++){const C=S+M,P=C,U=C+s+1,N=C+s+2,z=C+1;d.push(P,U,z),d.push(U,N,z)}}this.setIndex(d),this.setAttribute("position",new si(m,3)),this.setAttribute("normal",new si(p,3)),this.setAttribute("uv",new si(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ah extends ji{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],x=new $,g=new $,y=[],T=[],w=[],M=[];for(let S=0;S<=s;S++){const C=[],P=S/s;let U=0;S===0&&h===0?U=.5/i:S===s&&m===Math.PI&&(U=-.5/i);for(let N=0;N<=i;N++){const z=N/i;x.x=-t*Math.cos(l+z*c)*Math.sin(h+P*d),x.y=t*Math.cos(h+P*d),x.z=t*Math.sin(l+z*c)*Math.sin(h+P*d),T.push(x.x,x.y,x.z),g.copy(x).normalize(),w.push(g.x,g.y,g.z),M.push(z+U,1-P),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const P=_[S][C+1],U=_[S][C],N=_[S+1][C],z=_[S+1][C+1];(S!==0||h>0)&&y.push(P,U,z),(S!==s-1||m<Math.PI)&&y.push(U,N,z)}this.setIndex(y),this.setAttribute("position",new si(T,3)),this.setAttribute("normal",new si(w,3)),this.setAttribute("uv",new si(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ah(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function qo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ai(r){const t={};for(let i=0;i<r.length;i++){const s=qo(r[i]);for(const l in s)t[l]=s[l]}return t}function iE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Jx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}const $x={clone:qo,merge:Ai};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class La extends Hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qo(t.uniforms),this.uniformsGroups=iE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class tS extends La{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gs extends Hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ur extends gs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class eS extends Hr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Vf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nS extends Hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iS extends Hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ko extends hn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class aS extends Ko{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Lp=new rn,Uv=new $,Lv=new $;class Cm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Uv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Uv),Lv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Lv),i.updateMatrixWorld(),Lp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lp,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Xo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Lp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pu=new $,Fu=new zr,Fa=new $;class wm extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pu,Fu,Fa),Fa.x===1&&Fa.y===1&&Fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,Fu,Fa.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Pu,Fu,Fa),Fa.x===1&&Fa.y===1&&Fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,Fu,Fa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Js=new $,Nv=new Re,Ov=new Re;class Ri extends wm{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Js.x,Js.y).multiplyScalar(-t/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Js.x,Js.y).multiplyScalar(-t/Js.z)}getViewSize(t,i){return this.getViewBounds(t,Nv,Ov),i.subVectors(Ov,Nv)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class rE extends Cm{constructor(){super(new Ri(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Wo*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ju extends Ko{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new rE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class oE extends Cm{constructor(){super(new Ri(90,1,.5,500)),this.isPointLightShadow=!0}}class oc extends Ko{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new oE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class sh extends wm{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lE extends Cm{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $p extends Ko{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new lE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class sS extends Ko{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Do=-90,Uo=1;class rS extends hn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(Do,Uo,t,i);l.layers=this.layers,this.add(l);const c=new Ri(Do,Uo,t,i);c.layers=this.layers,this.add(c);const h=new Ri(Do,Uo,t,i);h.layers=this.layers,this.add(h);const d=new Ri(Do,Uo,t,i);d.layers=this.layers,this.add(d);const m=new Ri(Do,Uo,t,i);m.layers=this.layers,this.add(m);const p=new Ri(Do,Uo,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ca)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Xo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class oS extends Ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Iv=new rn;class lS{constructor(t,i,s=0,l=1/0){this.ray=new Em(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Xe("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Iv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iv),this}intersectObject(t,i=!0,s=[]){return tm(t,this,s,i),s.sort(Pv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)tm(t[l],this,s,i);return s.sort(Pv),s}}function Pv(r,t){return r.distance-t.distance}function tm(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)tm(c[h],t,i,!0)}}class cS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Fv(r,t,i,s){const l=cE(s);switch(i){case gm:return r*t;case qf:return r*t/l.components*l.byteLength;case jf:return r*t/l.components*l.byteLength;case Pr:return r*t*2/l.components*l.byteLength;case Zf:return r*t*2/l.components*l.byteLength;case _m:return r*t*3/l.components*l.byteLength;case ma:return r*t*4/l.components*l.byteLength;case Kf:return r*t*4/l.components*l.byteLength;case ec:case nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ic:case ac:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lf:case uf:return Math.max(r,16)*Math.max(t,8)/4;case of:case cf:return Math.max(r,8)*Math.max(t,8)/2;case ff:case hf:case pf:case mf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case df:case gf:case _f:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xf:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case yf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Mf:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ef:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Tf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case bf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Af:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Cf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case wf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Df:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Uf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Lf:case Nf:case Of:return Math.ceil(r/4)*Math.ceil(t/4)*16;case If:case Pf:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ff:case Bf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cE(r){switch(r){case Pi:case hm:return{byteLength:1,components:1};case Vo:case dm:case Va:return{byteLength:2,components:1};case Wf:case Yf:return{byteLength:2,components:4};case Ua:case Xf:case pa:return{byteLength:4,components:1};case pm:case mm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);function uS(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function uE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<x.length;y++){const T=x[g],w=x[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,x[g]=w)}x.length=g+1;for(let y=0,T=x.length;y<T;y++){const w=x[y];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var fE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hE=`#ifdef USE_ALPHAHASH
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
#endif`,dE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_E=`#ifdef USE_AOMAP
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
#endif`,vE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`#ifdef USE_BATCHING
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
#endif`,SE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TE=`#ifdef USE_IRIDESCENCE
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
#endif`,bE=`#ifdef USE_BUMPMAP
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,OE=`#define PI 3.141592653589793
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
} // validated`,IE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PE=`vec3 transformedNormal = objectNormal;
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
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
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
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
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
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
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
#endif`,iT=`#ifdef USE_ENVMAP
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
#endif`,aT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
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
#endif`,cT=`uniform sampler2D dfgLUT;
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
}`,uT=`
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
#endif`,fT=`#if defined( RE_IndirectDiffuse )
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ST=`#if defined( USE_POINTS_UV )
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
#endif`,yT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ET=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
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
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NT=`#ifdef USE_NORMALMAP
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
#endif`,OT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZT=`float getShadowMask() {
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
}`,KT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QT=`#ifdef USE_SKINNING
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
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
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
}`,_1=`#if DEPTH_PACKING == 3200
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
}`,v1=`#define DISTANCE
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
}`,x1=`#define DISTANCE
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
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
}`,E1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,b1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,R1=`#define LAMBERT
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
}`,C1=`#define MATCAP
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
}`,w1=`#define MATCAP
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
}`,D1=`#define NORMAL
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
}`,U1=`#define NORMAL
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
}`,L1=`#define PHONG
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
}`,N1=`#define PHONG
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
}`,O1=`#define STANDARD
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
}`,I1=`#define STANDARD
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
}`,P1=`#define TOON
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
}`,F1=`#define TOON
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
}`,B1=`uniform float size;
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
}`,z1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 color;
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
}`,V1=`uniform float rotation;
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
}`,k1=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:fE,alphahash_pars_fragment:hE,alphamap_fragment:dE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:_E,aomap_pars_fragment:vE,batching_pars_vertex:xE,batching_vertex:SE,begin_vertex:yE,beginnormal_vertex:ME,bsdfs:EE,iridescence_fragment:TE,bumpmap_pars_fragment:bE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:CE,clipping_planes_vertex:wE,color_fragment:DE,color_pars_fragment:UE,color_pars_vertex:LE,color_vertex:NE,common:OE,cube_uv_reflection_fragment:IE,defaultnormal_vertex:PE,displacementmap_pars_vertex:FE,displacementmap_vertex:BE,emissivemap_fragment:zE,emissivemap_pars_fragment:HE,colorspace_fragment:GE,colorspace_pars_fragment:VE,envmap_fragment:kE,envmap_common_pars_fragment:XE,envmap_pars_fragment:WE,envmap_pars_vertex:YE,envmap_physical_pars_fragment:iT,envmap_vertex:qE,fog_vertex:jE,fog_pars_vertex:ZE,fog_fragment:KE,fog_pars_fragment:QE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:$E,lights_lambert_fragment:tT,lights_lambert_pars_fragment:eT,lights_pars_begin:nT,lights_toon_fragment:aT,lights_toon_pars_fragment:sT,lights_phong_fragment:rT,lights_phong_pars_fragment:oT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:fT,lights_fragment_end:hT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:pT,logdepthbuf_pars_vertex:mT,logdepthbuf_vertex:gT,map_fragment:_T,map_pars_fragment:vT,map_particle_fragment:xT,map_particle_pars_fragment:ST,metalnessmap_fragment:yT,metalnessmap_pars_fragment:MT,morphinstance_vertex:ET,morphcolor_vertex:TT,morphnormal_vertex:bT,morphtarget_pars_vertex:AT,morphtarget_vertex:RT,normal_fragment_begin:CT,normal_fragment_maps:wT,normal_pars_fragment:DT,normal_pars_vertex:UT,normal_vertex:LT,normalmap_pars_fragment:NT,clearcoat_normal_fragment_begin:OT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:FT,opaque_fragment:BT,packing:zT,premultiplied_alpha_fragment:HT,project_vertex:GT,dithering_fragment:VT,dithering_pars_fragment:kT,roughnessmap_fragment:XT,roughnessmap_pars_fragment:WT,shadowmap_pars_fragment:YT,shadowmap_pars_vertex:qT,shadowmap_vertex:jT,shadowmask_pars_fragment:ZT,skinbase_vertex:KT,skinning_pars_vertex:QT,skinning_vertex:JT,skinnormal_vertex:$T,specularmap_fragment:t1,specularmap_pars_fragment:e1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:a1,transmission_pars_fragment:s1,uv_pars_fragment:r1,uv_pars_vertex:o1,uv_vertex:l1,worldpos_vertex:c1,background_vert:u1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:d1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:_1,distance_vert:v1,distance_frag:x1,equirect_vert:S1,equirect_frag:y1,linedashed_vert:M1,linedashed_frag:E1,meshbasic_vert:T1,meshbasic_frag:b1,meshlambert_vert:A1,meshlambert_frag:R1,meshmatcap_vert:C1,meshmatcap_frag:w1,meshnormal_vert:D1,meshnormal_frag:U1,meshphong_vert:L1,meshphong_frag:N1,meshphysical_vert:O1,meshphysical_frag:I1,meshtoon_vert:P1,meshtoon_frag:F1,points_vert:B1,points_frag:z1,shadow_vert:H1,shadow_frag:G1,sprite_vert:V1,sprite_frag:k1},Bt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Ra={basic:{uniforms:Ai([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Ai([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Ai([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Ai([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Ai([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Ai([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Ai([Bt.points,Bt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Ai([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Ai([Bt.common,Bt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Ai([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Ai([Bt.sprite,Bt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:Ai([Bt.common,Bt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:Ai([Bt.lights,Bt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Ra.physical={uniforms:Ai([Ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Bu={r:0,b:0,g:0},Rr=new _a,X1=new rn;function W1(r,t,i,s,l,c){const h=new oe(0);let d=l===!0?0:1,m,p,_=null,x=0,g=null;function y(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const U=C.backgroundBlurriness>0;P=t.get(P,U)}return P}function T(C){let P=!1;const U=y(C);U===null?M(h,d):U&&U.isColor&&(M(U,1),P=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,P){const U=y(P);U&&(U.isCubeTexture||U.mapping===hc)?(p===void 0&&(p=new ke(new sr(1,1,1),new La({name:"BackgroundCubeMaterial",uniforms:qo(Ra.backgroundCube.uniforms),vertexShader:Ra.backgroundCube.vertexShader,fragmentShader:Ra.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,z,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Rr.copy(P.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(X1.makeRotationFromEuler(Rr)),p.material.toneMapped=We.getTransfer(U.colorSpace)!==$e,(_!==U||x!==U.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new ke(new za(2,2),new La({name:"BackgroundMaterial",uniforms:qo(Ra.background.uniforms),vertexShader:Ra.background.vertexShader,fragmentShader:Ra.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=We.getTransfer(U.colorSpace)!==$e,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||x!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,P){C.getRGB(Bu,Jx(r)),i.buffers.color.setClear(Bu.r,Bu.g,Bu.b,P,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,P=1){h.set(C),d=P,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(h,d)},render:T,addToRenderList:w,dispose:S}}function Y1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(H,W,Y,Z,V){let O=!1;const F=x(H,Z,Y,W);c!==F&&(c=F,p(c.object)),O=y(H,Z,Y,V),O&&T(H,Z,Y,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,U(H,W,Y,Z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function _(H){return r.deleteVertexArray(H)}function x(H,W,Y,Z){const V=Z.wireframe===!0;let O=s[W.id];O===void 0&&(O={},s[W.id]=O);const F=H.isInstancedMesh===!0?H.id:0;let st=O[F];st===void 0&&(st={},O[F]=st);let ft=st[Y.id];ft===void 0&&(ft={},st[Y.id]=ft);let St=ft[V];return St===void 0&&(St=g(m()),ft[V]=St),St}function g(H){const W=[],Y=[],Z=[];for(let V=0;V<i;V++)W[V]=0,Y[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:Z,object:H,attributes:{},index:null}}function y(H,W,Y,Z){const V=c.attributes,O=W.attributes;let F=0;const st=Y.getAttributes();for(const ft in st)if(st[ft].location>=0){const L=V[ft];let K=O[ft];if(K===void 0&&(ft==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),ft==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),L===void 0||L.attribute!==K||K&&L.data!==K.data)return!0;F++}return c.attributesNum!==F||c.index!==Z}function T(H,W,Y,Z){const V={},O=W.attributes;let F=0;const st=Y.getAttributes();for(const ft in st)if(st[ft].location>=0){let L=O[ft];L===void 0&&(ft==="instanceMatrix"&&H.instanceMatrix&&(L=H.instanceMatrix),ft==="instanceColor"&&H.instanceColor&&(L=H.instanceColor));const K={};K.attribute=L,L&&L.data&&(K.data=L.data),V[ft]=K,F++}c.attributes=V,c.attributesNum=F,c.index=Z}function w(){const H=c.newAttributes;for(let W=0,Y=H.length;W<Y;W++)H[W]=0}function M(H){S(H,0)}function S(H,W){const Y=c.newAttributes,Z=c.enabledAttributes,V=c.attributeDivisors;Y[H]=1,Z[H]===0&&(r.enableVertexAttribArray(H),Z[H]=1),V[H]!==W&&(r.vertexAttribDivisor(H,W),V[H]=W)}function C(){const H=c.newAttributes,W=c.enabledAttributes;for(let Y=0,Z=W.length;Y<Z;Y++)W[Y]!==H[Y]&&(r.disableVertexAttribArray(Y),W[Y]=0)}function P(H,W,Y,Z,V,O,F){F===!0?r.vertexAttribIPointer(H,W,Y,V,O):r.vertexAttribPointer(H,W,Y,Z,V,O)}function U(H,W,Y,Z){w();const V=Z.attributes,O=Y.getAttributes(),F=W.defaultAttributeValues;for(const st in O){const ft=O[st];if(ft.location>=0){let St=V[st];if(St===void 0&&(st==="instanceMatrix"&&H.instanceMatrix&&(St=H.instanceMatrix),st==="instanceColor"&&H.instanceColor&&(St=H.instanceColor)),St!==void 0){const L=St.normalized,K=St.itemSize,ut=t.get(St);if(ut===void 0)continue;const Tt=ut.buffer,Nt=ut.type,tt=ut.bytesPerElement,mt=Nt===r.INT||Nt===r.UNSIGNED_INT||St.gpuType===Xf;if(St.isInterleavedBufferAttribute){const Mt=St.data,Vt=Mt.stride,Ht=St.offset;if(Mt.isInstancedInterleavedBuffer){for(let re=0;re<ft.locationSize;re++)S(ft.location+re,Mt.meshPerAttribute);H.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let re=0;re<ft.locationSize;re++)M(ft.location+re);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let re=0;re<ft.locationSize;re++)P(ft.location+re,K/ft.locationSize,Nt,L,Vt*tt,(Ht+K/ft.locationSize*re)*tt,mt)}else{if(St.isInstancedBufferAttribute){for(let Mt=0;Mt<ft.locationSize;Mt++)S(ft.location+Mt,St.meshPerAttribute);H.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Mt=0;Mt<ft.locationSize;Mt++)M(ft.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let Mt=0;Mt<ft.locationSize;Mt++)P(ft.location+Mt,K/ft.locationSize,Nt,L,K*tt,K/ft.locationSize*Mt*tt,mt)}}else if(F!==void 0){const L=F[st];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(ft.location,L);break;case 3:r.vertexAttrib3fv(ft.location,L);break;case 4:r.vertexAttrib4fv(ft.location,L);break;default:r.vertexAttrib1fv(ft.location,L)}}}}C()}function N(){D();for(const H in s){const W=s[H];for(const Y in W){const Z=W[Y];for(const V in Z){const O=Z[V];for(const F in O)_(O[F].object),delete O[F];delete Z[V]}}delete s[H]}}function z(H){if(s[H.id]===void 0)return;const W=s[H.id];for(const Y in W){const Z=W[Y];for(const V in Z){const O=Z[V];for(const F in O)_(O[F].object),delete O[F];delete Z[V]}}delete s[H.id]}function B(H){for(const W in s){const Y=s[W];for(const Z in Y){const V=Y[Z];if(V[H.id]===void 0)continue;const O=V[H.id];for(const F in O)_(O[F].object),delete O[F];delete V[H.id]}}}function b(H){for(const W in s){const Y=s[W],Z=H.isInstancedMesh===!0?H.id:0,V=Y[Z];if(V!==void 0){for(const O in V){const F=V[O];for(const st in F)_(F[st].object),delete F[st];delete V[O]}delete Y[Z],Object.keys(Y).length===0&&delete s[W]}}}function D(){lt(),h=!0,c!==l&&(c=l,p(c.object))}function lt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:lt,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function q1(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let y=0;for(let T=0;T<x;T++)y+=_[T];i.update(y,s,1)}function m(p,_,x,g){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)h(p[T],_[T],g[T]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,x);let T=0;for(let w=0;w<x;w++)T+=_[w]*g[w];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function j1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==ma&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const b=B===Va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Pi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==pa&&!b)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(fe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:U,maxSamples:N,samples:z}}function Z1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new $s,d=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const T=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,S=r.get(x);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,P=C*4;let U=S.clippingState||null;m.value=U,U=_(T,g,P,y);for(let N=0;N!==P;++N)U[N]=i[N];S.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,y,T){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,T!==!0||M===null){const S=y+w*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let P=0,U=y;P!==w;++P,U+=4)h.copy(x[P]).applyMatrix4(C,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const nr=4,Bv=[.125,.215,.35,.446,.526,.582],Lr=20,K1=256,jl=new sh,zv=new oe;let Np=null,Op=0,Ip=0,Pp=!1;const Q1=new $;class Hf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=Q1}=c;Np=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),Ip=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Np,Op,Ip),this._renderer.xr.enabled=Pp,t.scissorTest=!1,Lo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ir||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Np=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),Ip=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Va,format:ma,colorSpace:Fr,depthBuffer:!1},l=Hv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J1(c)),this._blurMaterial=tb(c,t,i),this._ggxMaterial=$1(c,t,i)}return l}_compileMaterial(t){const i=new ke(new ji,t);this._renderer.compile(i,jl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ri(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(zv),x.toneMapping=wa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new sr,new fc({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(zv),S=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[P],c.y,c.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[P]));const N=this._cubeSize;Lo(l,U*N,P>2?N:0,N,N),x.setRenderTarget(l),S&&x.render(w,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ir||t.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Lo(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,jl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,y=x*g,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-nr?s-T+nr:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,Lo(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,jl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Lo(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,jl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Lr-1),w=c/T,M=isFinite(c)?1+Math.floor(_*w):Lr;M>Lr&&fe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Lr}`);const S=[];let C=0;for(let B=0;B<Lr;++B){const b=B/w,D=Math.exp(-b*b/2);S.push(D),B===0?C+=D:B<M&&(C+=2*D)}for(let B=0;B<S.length;B++)S[B]=S[B]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:P}=this;g.dTheta.value=T,g.mipInt.value=P-s;const U=this._sizeLods[l],N=3*U*(l>P-nr?l-P+nr:0),z=4*(this._cubeSize-U);Lo(i,N,z,3*U,2*U),m.setRenderTarget(i),m.render(x,jl)}}function J1(r){const t=[],i=[],s=[];let l=r;const c=r-nr+1+Bv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-nr?m=Bv[h-r+nr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,T=6,w=3,M=2,S=1,C=new Float32Array(w*T*y),P=new Float32Array(M*T*y),U=new Float32Array(S*T*y);for(let z=0;z<y;z++){const B=z%3*2/3-1,b=z>2?0:-1,D=[B,b,0,B+2/3,b,0,B+2/3,b+1,0,B,b,0,B+2/3,b+1,0,B,b+1,0];C.set(D,w*T*z),P.set(g,M*T*z);const lt=[z,z,z,z,z,z];U.set(lt,S*T*z)}const N=new ji;N.setAttribute("position",new ga(C,w)),N.setAttribute("uv",new ga(P,M)),N.setAttribute("faceIndex",new ga(U,S)),s.push(new ke(N,null)),l>nr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Hv(r,t,i){const s=new Da(r,t,i);return s.texture.mapping=hc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lo(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function $1(r,t,i){return new La({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function tb(r,t,i){const s=new Float32Array(Lr),l=new $(0,1,0);return new La({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Gv(){return new La({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Vv(){return new La({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function rh(){return`

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
	`}class Dm extends Da{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new bm(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new sr(5,5,5),c=new La({name:"CubemapFromEquirect",uniforms:qo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:xi,blending:Ga});c.uniforms.tEquirect.value=i;const h=new ke(l,c),d=i.minFilter;return i.minFilter===_s&&(i.minFilter=ai),new rS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function eb(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Xu||y===Wu)if(t.has(g)){const T=t.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Dm(T.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===Xu||y===Wu,w=y===ir||y===Ir;if(T||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Hf(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return T&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new Hf(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===Xu?g.mapping=ir:y===Wu&&(g.mapping=Ir),g}function m(g){let y=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&y++;return y===T}function p(g){const y=g.target;y.removeEventListener("dispose",p);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function nb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&cc("WebGLRenderer: "+s+" extension not supported."),l}}}function ib(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(x){const g=[],y=x.index,T=x.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let P=0,U=C.length;P<U;P+=3){const N=C[P+0],z=C[P+1],B=C[P+2];g.push(N,z,z,B,B,N)}}else{const C=T.array;w=T.version;for(let P=0,U=C.length/3-1;P<U;P+=3){const N=P+0,z=P+1,B=P+2;g.push(N,z,z,B,B,N)}}const M=new(T.count>=65535?Mm:ym)(g,1);M.version=w;const S=c.get(x);S&&t.remove(S),c.set(x,M)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function ab(r,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*h),i.update(y,s,1)}function p(g,y,T){T!==0&&(r.drawElementsInstanced(s,y,c,g*h,T),i.update(y,s,T))}function _(g,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,T);let M=0;for(let S=0;S<T;S++)M+=y[S];i.update(M,s,1)}function x(g,y,T,w){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/h,y[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,w,0,T);let S=0;for(let C=0;C<T;C++)S+=y[C]*w[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function sb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Xe("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function rb(r,t,i){const s=new WeakMap,l=new bn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let lt=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",lt)};var y=lt;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),w===!0&&(U=2),M===!0&&(U=3);let N=d.attributes.position.count*U,z=1;N>t.maxTextureSize&&(z=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const B=new Float32Array(N*z*4*x),b=new xm(B,N,z,x);b.type=pa,b.needsUpdate=!0;const D=U*4;for(let H=0;H<x;H++){const W=S[H],Y=C[H],Z=P[H],V=N*z*4*H;for(let O=0;O<W.count;O++){const F=O*D;T===!0&&(l.fromBufferAttribute(W,O),B[V+F+0]=l.x,B[V+F+1]=l.y,B[V+F+2]=l.z,B[V+F+3]=0),w===!0&&(l.fromBufferAttribute(Y,O),B[V+F+4]=l.x,B[V+F+5]=l.y,B[V+F+6]=l.z,B[V+F+7]=0),M===!0&&(l.fromBufferAttribute(Z,O),B[V+F+8]=l.x,B[V+F+9]=l.y,B[V+F+10]=l.z,B[V+F+11]=Z.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new Re(N,z)},s.set(d,g),d.addEventListener("dispose",lt)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function ob(r,t,i,s,l){let c=new WeakMap;function h(p){const _=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const lb={[sm]:"LINEAR_TONE_MAPPING",[rm]:"REINHARD_TONE_MAPPING",[om]:"CINEON_TONE_MAPPING",[kf]:"ACES_FILMIC_TONE_MAPPING",[cm]:"AGX_TONE_MAPPING",[um]:"NEUTRAL_TONE_MAPPING",[lm]:"CUSTOM_TONE_MAPPING"};function cb(r,t,i,s,l){const c=new Da(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Da(t,i,{type:Va,depthBuffer:!1,stencilBuffer:!1}),d=new ji;d.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new si([0,2,0,0,2,0],2));const m=new tS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ke(d,m),_=new sh(-1,1,1,-1,0,1);let x=null,g=null,y=!1,T,w=null,M=[],S=!1;this.setSize=function(C,P){c.setSize(C,P),h.setSize(C,P);for(let U=0;U<M.length;U++){const N=M[U];N.setSize&&N.setSize(C,P)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const P=c.width,U=c.height;for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(P,U)}},this.begin=function(C,P){if(y||C.toneMapping===wa&&M.length===0)return!1;if(w=P,P!==null){const U=P.width,N=P.height;(c.width!==U||c.height!==N)&&this.setSize(U,N)}return S===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=wa,!0},this.hasRenderPass=function(){return S},this.end=function(C,P){C.toneMapping=T,y=!0;let U=c,N=h;for(let z=0;z<M.length;z++){const B=M[z];if(B.enabled!==!1&&(B.render(C,N,U,P),B.needsSwap!==!1)){const b=U;U=N,N=b}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},We.getTransfer(x)===$e&&(m.defines.SRGB_TRANSFER="");const z=lb[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(w),C.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const fS=new di,em=new Yo(1,1),hS=new xm,dS=new Yx,pS=new bm,kv=[],Xv=[],Wv=new Float32Array(16),Yv=new Float32Array(9),qv=new Float32Array(4);function Qo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=kv[l];if(c===void 0&&(c=new Float32Array(l),kv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function qn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function jn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function oh(r,t){let i=Xv[t];i===void 0&&(i=new Int32Array(t),Xv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function ub(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function fb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;r.uniform2fv(this.addr,t),jn(i,t)}}function hb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(qn(i,t))return;r.uniform3fv(this.addr,t),jn(i,t)}}function db(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;r.uniform4fv(this.addr,t),jn(i,t)}}function pb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),jn(i,t)}else{if(qn(i,s))return;qv.set(s),r.uniformMatrix2fv(this.addr,!1,qv),jn(i,s)}}function mb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),jn(i,t)}else{if(qn(i,s))return;Yv.set(s),r.uniformMatrix3fv(this.addr,!1,Yv),jn(i,s)}}function gb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),jn(i,t)}else{if(qn(i,s))return;Wv.set(s),r.uniformMatrix4fv(this.addr,!1,Wv),jn(i,s)}}function _b(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function vb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;r.uniform2iv(this.addr,t),jn(i,t)}}function xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(qn(i,t))return;r.uniform3iv(this.addr,t),jn(i,t)}}function Sb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;r.uniform4iv(this.addr,t),jn(i,t)}}function yb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Mb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;r.uniform2uiv(this.addr,t),jn(i,t)}}function Eb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(qn(i,t))return;r.uniform3uiv(this.addr,t),jn(i,t)}}function Tb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;r.uniform4uiv(this.addr,t),jn(i,t)}}function bb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(em.compareFunction=i.isReversedDepthBuffer()?$f:Jf,c=em):c=fS,i.setTexture2D(t||c,l)}function Ab(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||dS,l)}function Rb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||pS,l)}function Cb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||hS,l)}function wb(r){switch(r){case 5126:return ub;case 35664:return fb;case 35665:return hb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return vb;case 35668:case 35672:return xb;case 35669:case 35673:return Sb;case 5125:return yb;case 36294:return Mb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}function Db(r,t){r.uniform1fv(this.addr,t)}function Ub(r,t){const i=Qo(t,this.size,2);r.uniform2fv(this.addr,i)}function Lb(r,t){const i=Qo(t,this.size,3);r.uniform3fv(this.addr,i)}function Nb(r,t){const i=Qo(t,this.size,4);r.uniform4fv(this.addr,i)}function Ob(r,t){const i=Qo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Ib(r,t){const i=Qo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Pb(r,t){const i=Qo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Fb(r,t){r.uniform1iv(this.addr,t)}function Bb(r,t){r.uniform2iv(this.addr,t)}function zb(r,t){r.uniform3iv(this.addr,t)}function Hb(r,t){r.uniform4iv(this.addr,t)}function Gb(r,t){r.uniform1uiv(this.addr,t)}function Vb(r,t){r.uniform2uiv(this.addr,t)}function kb(r,t){r.uniform3uiv(this.addr,t)}function Xb(r,t){r.uniform4uiv(this.addr,t)}function Wb(r,t,i){const s=this.cache,l=t.length,c=oh(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=em:h=fS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function Yb(r,t,i){const s=this.cache,l=t.length,c=oh(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||dS,c[h])}function qb(r,t,i){const s=this.cache,l=t.length,c=oh(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||pS,c[h])}function jb(r,t,i){const s=this.cache,l=t.length,c=oh(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||hS,c[h])}function Zb(r){switch(r){case 5126:return Db;case 35664:return Ub;case 35665:return Lb;case 35666:return Nb;case 35674:return Ob;case 35675:return Ib;case 35676:return Pb;case 5124:case 35670:return Fb;case 35667:case 35671:return Bb;case 35668:case 35672:return zb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Vb;case 36295:return kb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return jb}}class Kb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=wb(i.type)}}class Qb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Zb(i.type)}}class Jb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Fp=/(\w+)(\])?(\[|\.)?/g;function jv(r,t){r.seq.push(t),r.map[t.id]=t}function $b(r,t,i){const s=r.name,l=s.length;for(Fp.lastIndex=0;;){const c=Fp.exec(s),h=Fp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){jv(i,p===void 0?new Kb(d,r,t):new Qb(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new Jb(d),jv(i,x)),i=x}}}class Zu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);$b(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Zv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const tA=37297;let eA=0;function nA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Kv=new Se;function iA(r){We._getMatrix(Kv,We.workingColorSpace,r);const t=`mat3( ${Kv.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(r)){case lc:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Qv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+nA(r.getShaderSource(t),d)}else return c}function aA(r,t){const i=iA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const sA={[sm]:"Linear",[rm]:"Reinhard",[om]:"Cineon",[kf]:"ACESFilmic",[cm]:"AgX",[um]:"Neutral",[lm]:"Custom"};function rA(r,t){const i=sA[t];return i===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zu=new $;function oA(){We.getLuminanceCoefficients(zu);const r=zu.x.toFixed(4),t=zu.y.toFixed(4),i=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tc).join(`
`)}function cA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function uA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function tc(r){return r!==""}function Jv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $v(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function nm(r){return r.replace(fA,dA)}const hA=new Map;function dA(r,t){let i=Ee[t];if(i===void 0){const s=hA.get(t);if(s!==void 0)i=Ee[s],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return nm(i)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(r){return r.replace(pA,mA)}function mA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ex(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const gA={[zo]:"SHADOWMAP_TYPE_PCF",[Po]:"SHADOWMAP_TYPE_VSM"};function _A(r){return gA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vA={[ir]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[hc]:"ENVMAP_TYPE_CUBE_UV"};function xA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const SA={[Ir]:"ENVMAP_MODE_REFRACTION"};function yA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":SA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MA={[Vf]:"ENVMAP_BLENDING_MULTIPLY",[Ux]:"ENVMAP_BLENDING_MIX",[Lx]:"ENVMAP_BLENDING_ADD"};function EA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":MA[r.combine]||"ENVMAP_BLENDING_NONE"}function TA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function bA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=_A(i),p=xA(i),_=yA(i),x=EA(i),g=TA(i),y=lA(i),T=cA(c),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(tc).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(tc).join(`
`),S.length>0&&(S+=`
`)):(M=[ex(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tc).join(`
`),S=[ex(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==wa?"#define TONE_MAPPING":"",i.toneMapping!==wa?Ee.tonemapping_pars_fragment:"",i.toneMapping!==wa?rA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,aA("linearToOutputTexel",i.outputColorSpace),oA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tc).join(`
`)),h=nm(h),h=Jv(h,i),h=$v(h,i),d=nm(d),d=Jv(d,i),d=$v(d,i),h=tx(h),d=tx(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=C+M+h,U=C+S+d,N=Zv(l,l.VERTEX_SHADER,P),z=Zv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,N),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(H){if(r.debug.checkShaderErrors){const W=l.getProgramInfoLog(w)||"",Y=l.getShaderInfoLog(N)||"",Z=l.getShaderInfoLog(z)||"",V=W.trim(),O=Y.trim(),F=Z.trim();let st=!0,ft=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(st=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,N,z);else{const St=Qv(l,N,"vertex"),L=Qv(l,z,"fragment");Xe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+V+`
`+St+`
`+L)}else V!==""?fe("WebGLProgram: Program Info Log:",V):(O===""||F==="")&&(ft=!1);ft&&(H.diagnostics={runnable:st,programLog:V,vertexShader:{log:O,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(N),l.deleteShader(z),b=new Zu(l,w),D=uA(l,w)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let lt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return lt===!1&&(lt=l.getProgramParameter(w,tA)),lt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=eA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=z,this}let AA=0;class RA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new CA(t),i.set(t,s)),s}}class CA{constructor(t){this.id=AA++,this.code=t,this.usedTimes=0}}function wA(r,t,i,s,l,c){const h=new eh,d=new RA,m=new Set,p=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,D,lt,H,W){const Y=H.fog,Z=W.geometry,V=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,F=t.get(b.envMap||V,O),st=F&&F.mapping===hc?F.image.height:null,ft=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&fe("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const St=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,L=St!==void 0?St.length:0;let K=0;Z.morphAttributes.position!==void 0&&(K=1),Z.morphAttributes.normal!==void 0&&(K=2),Z.morphAttributes.color!==void 0&&(K=3);let ut,Tt,Nt,tt;if(ft){const Te=Ra[ft];ut=Te.vertexShader,Tt=Te.fragmentShader}else ut=b.vertexShader,Tt=b.fragmentShader,d.update(b),Nt=d.getVertexShaderID(b),tt=d.getFragmentShaderID(b);const mt=r.getRenderTarget(),Mt=r.state.buffers.depth.getReversed(),Vt=W.isInstancedMesh===!0,Ht=W.isBatchedMesh===!0,re=!!b.map,on=!!b.matcap,ye=!!F,_e=!!b.aoMap,Ue=!!b.lightMap,pe=!!b.bumpMap,dn=!!b.normalMap,k=!!b.displacementMap,ln=!!b.emissiveMap,Ce=!!b.metalnessMap,ze=!!b.roughnessMap,jt=b.anisotropy>0,I=b.clearcoat>0,E=b.dispersion>0,Q=b.iridescence>0,pt=b.sheen>0,xt=b.transmission>0,ht=jt&&!!b.anisotropyMap,Yt=I&&!!b.clearcoatMap,Ut=I&&!!b.clearcoatNormalMap,ee=I&&!!b.clearcoatRoughnessMap,ae=Q&&!!b.iridescenceMap,bt=Q&&!!b.iridescenceThicknessMap,Et=pt&&!!b.sheenColorMap,Gt=pt&&!!b.sheenRoughnessMap,It=!!b.specularMap,Ot=!!b.specularColorMap,he=!!b.specularIntensityMap,j=xt&&!!b.transmissionMap,Ct=xt&&!!b.thicknessMap,At=!!b.gradientMap,Dt=!!b.alphaMap,yt=b.alphaTest>0,dt=!!b.alphaHash,kt=!!b.extensions;let se=wa;b.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(se=r.toneMapping);const He={shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:ut,fragmentShader:Tt,defines:b.defines,customVertexShaderID:Nt,customFragmentShaderID:tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&W._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&W.instanceColor!==null,instancingMorph:Vt&&W.morphTexture!==null,outputColorSpace:mt===null?r.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Fr,alphaToCoverage:!!b.alphaToCoverage,map:re,matcap:on,envMap:ye,envMapMode:ye&&F.mapping,envMapCubeUVHeight:st,aoMap:_e,lightMap:Ue,bumpMap:pe,normalMap:dn,displacementMap:k,emissiveMap:ln,normalMapObjectSpace:dn&&b.normalMapType===Ix,normalMapTangentSpace:dn&&b.normalMapType===Qf,metalnessMap:Ce,roughnessMap:ze,anisotropy:jt,anisotropyMap:ht,clearcoat:I,clearcoatMap:Yt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:ee,dispersion:E,iridescence:Q,iridescenceMap:ae,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Et,sheenRoughnessMap:Gt,specularMap:It,specularColorMap:Ot,specularIntensityMap:he,transmission:xt,transmissionMap:j,thicknessMap:Ct,gradientMap:At,opaque:b.transparent===!1&&b.blending===Nr&&b.alphaToCoverage===!1,alphaMap:Dt,alphaTest:yt,alphaHash:dt,combine:b.combine,mapUv:re&&T(b.map.channel),aoMapUv:_e&&T(b.aoMap.channel),lightMapUv:Ue&&T(b.lightMap.channel),bumpMapUv:pe&&T(b.bumpMap.channel),normalMapUv:dn&&T(b.normalMap.channel),displacementMapUv:k&&T(b.displacementMap.channel),emissiveMapUv:ln&&T(b.emissiveMap.channel),metalnessMapUv:Ce&&T(b.metalnessMap.channel),roughnessMapUv:ze&&T(b.roughnessMap.channel),anisotropyMapUv:ht&&T(b.anisotropyMap.channel),clearcoatMapUv:Yt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&T(b.sheenRoughnessMap.channel),specularMapUv:It&&T(b.specularMap.channel),specularColorMapUv:Ot&&T(b.specularColorMap.channel),specularIntensityMapUv:he&&T(b.specularIntensityMap.channel),transmissionMapUv:j&&T(b.transmissionMap.channel),thicknessMapUv:Ct&&T(b.thicknessMap.channel),alphaMapUv:Dt&&T(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(dn||jt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(re||Dt),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||Z.attributes.normal===void 0&&dn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Mt,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:K,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&lt.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:re&&b.map.isVideoTexture===!0&&We.getTransfer(b.map.colorSpace)===$e,decodeVideoTextureEmissive:ln&&b.emissiveMap.isVideoTexture===!0&&We.getTransfer(b.emissiveMap.colorSpace)===$e,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gn,flipSided:b.side===xi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return He.vertexUv1s=m.has(1),He.vertexUv2s=m.has(2),He.vertexUv3s=m.has(3),m.clear(),He}function M(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const lt in b.defines)D.push(lt),D.push(b.defines[lt]);return b.isRawShaderMaterial===!1&&(S(D,b),C(D,b),D.push(r.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function S(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function C(b,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),b.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),b.push(h.mask)}function P(b){const D=y[b.type];let lt;if(D){const H=Ra[D];lt=$x.clone(H.uniforms)}else lt=b.uniforms;return lt}function U(b,D){let lt=_.get(D);return lt!==void 0?++lt.usedTimes:(lt=new bA(r,D,b,l),p.push(lt),_.set(D,lt)),lt}function N(b){if(--b.usedTimes===0){const D=p.indexOf(b);p[D]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function z(b){d.remove(b)}function B(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:P,acquireProgram:U,releaseProgram:N,releaseShaderCache:z,programs:p,dispose:B}}function DA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function UA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function nx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ix(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,T,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,T,w,M,S){const C=d(g,y,T,w,M,S);T.transmission>0?s.push(C):T.transparent===!0?l.push(C):i.push(C)}function p(g,y,T,w,M,S){const C=d(g,y,T,w,M,S);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||UA),s.length>1&&s.sort(y||nx),l.length>1&&l.sort(y||nx)}function x(){for(let g=t,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:_}}function LA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new ix,r.set(s,[h])):l>=c.length?(h=new ix,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function NA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new oe};break;case"SpotLight":i={position:new $,direction:new $,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":i={color:new oe,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=i,i}}}function OA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let IA=0;function PA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function FA(r){const t=new NA,i=OA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,c=new rn,h=new rn;function d(p){let _=0,x=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,T=0,w=0,M=0,S=0,C=0,P=0,U=0,N=0,z=0,B=0;p.sort(PA);for(let D=0,lt=p.length;D<lt;D++){const H=p[D],W=H.color,Y=H.intensity,Z=H.distance;let V=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Pr?V=H.shadow.map.texture:V=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=W.r*Y,x+=W.g*Y,g+=W.b*Y;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],Y);B++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,st=i.get(H);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,s.directionalShadow[y]=st,s.directionalShadowMap[y]=V,s.directionalShadowMatrix[y]=H.shadow.matrix,C++}s.directional[y]=O,y++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(W).multiplyScalar(Y),O.distance=Z,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[w]=O;const F=H.shadow;if(H.map&&(s.spotLightMap[N]=H.map,N++,F.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[w]=F.matrix,H.castShadow){const st=i.get(H);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,s.spotShadow[w]=st,s.spotShadowMap[w]=V,U++}w++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(W).multiplyScalar(Y),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=O,M++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const F=H.shadow,st=i.get(H);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,st.shadowCameraNear=F.camera.near,st.shadowCameraFar=F.camera.far,s.pointShadow[T]=st,s.pointShadowMap[T]=V,s.pointShadowMatrix[T]=H.shadow.matrix,P++}s.point[T]=O,T++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(Y),O.groundColor.copy(H.groundColor).multiplyScalar(Y),s.hemi[S]=O,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==C||b.numPointShadows!==P||b.numSpotShadows!==U||b.numSpotMaps!==N||b.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+N-z,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,b.directionalLength=y,b.pointLength=T,b.spotLength=w,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=C,b.numPointShadows=P,b.numSpotShadows=U,b.numSpotMaps=N,b.numLightProbes=B,s.version=IA++)}function m(p,_){let x=0,g=0,y=0,T=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const P=p[S];if(P.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),x++}else if(P.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),T++}else if(P.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),g++}else if(P.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function ax(r){const t=new FA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function BA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new ax(r),t.set(l,[d])):c>=h.length?(d=new ax(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HA=`uniform sampler2D shadow_pass;
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
}`,GA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],VA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],sx=new rn,Zl=new $,Bp=new $;function kA(r,t,i){let s=new nh;const l=new Re,c=new Re,h=new bn,d=new nS,m=new iS,p={},_=i.maxTextureSize,x={[xs]:xi,[xi]:xs,[Gn]:Gn},g=new La({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:zA,fragmentShader:HA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new ji;T.setAttribute("position",new ga(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ke(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let S=this.type;this.render=function(z,B,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===hx&&(fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zo);const D=r.getRenderTarget(),lt=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Ga),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=S!==this.type;Y&&B.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(V=>V.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,V=z.length;Z<V;Z++){const O=z[Z],F=O.shadow;if(F===void 0){fe("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const st=F.getFrameExtents();l.multiply(st),c.copy(F.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/st.x),l.x=c.x*st.x,F.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/st.y),l.y=c.y*st.y,F.mapSize.y=c.y));const ft=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ft,F.map===null||Y===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Po){if(O.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Da(l.x,l.y,{format:Pr,type:Va,minFilter:ai,magFilter:ai,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new Yo(l.x,l.y,pa),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=ka,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ii,F.map.depthTexture.magFilter=ii}else O.isPointLight?(F.map=new Dm(l.x),F.map.depthTexture=new Zx(l.x,Ua)):(F.map=new Da(l.x,l.y),F.map.depthTexture=new Yo(l.x,l.y,Ua)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=ka,this.type===zo?(F.map.depthTexture.compareFunction=ft?$f:Jf,F.map.depthTexture.minFilter=ai,F.map.depthTexture.magFilter=ai):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ii,F.map.depthTexture.magFilter=ii);F.camera.updateProjectionMatrix()}const St=F.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<St;L++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,L),r.clear();else{L===0&&(r.setRenderTarget(F.map),r.clear());const K=F.getViewport(L);h.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),W.viewport(h)}if(O.isPointLight){const K=F.camera,ut=F.matrix,Tt=O.distance||K.far;Tt!==K.far&&(K.far=Tt,K.updateProjectionMatrix()),Zl.setFromMatrixPosition(O.matrixWorld),K.position.copy(Zl),Bp.copy(K.position),Bp.add(GA[L]),K.up.copy(VA[L]),K.lookAt(Bp),K.updateMatrixWorld(),ut.makeTranslation(-Zl.x,-Zl.y,-Zl.z),sx.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F._frustum.setFromProjectionMatrix(sx,K.coordinateSystem,K.reversedDepth)}else F.updateMatrices(O);s=F.getFrustum(),U(B,b,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Po&&C(F,b),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(D,lt,H)};function C(z,B){const b=t.update(w);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Da(l.x,l.y,{format:Pr,type:Va})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(B,null,b,g,w,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(B,null,b,y,w,null)}function P(z,B,b,D){let lt=null;const H=b.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)lt=H;else if(lt=b.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const W=lt.uuid,Y=B.uuid;let Z=p[W];Z===void 0&&(Z={},p[W]=Z);let V=Z[Y];V===void 0&&(V=lt.clone(),Z[Y]=V,B.addEventListener("dispose",N)),lt=V}if(lt.visible=B.visible,lt.wireframe=B.wireframe,D===Po?lt.side=B.shadowSide!==null?B.shadowSide:B.side:lt.side=B.shadowSide!==null?B.shadowSide:x[B.side],lt.alphaMap=B.alphaMap,lt.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,lt.map=B.map,lt.clipShadows=B.clipShadows,lt.clippingPlanes=B.clippingPlanes,lt.clipIntersection=B.clipIntersection,lt.displacementMap=B.displacementMap,lt.displacementScale=B.displacementScale,lt.displacementBias=B.displacementBias,lt.wireframeLinewidth=B.wireframeLinewidth,lt.linewidth=B.linewidth,b.isPointLight===!0&&lt.isMeshDistanceMaterial===!0){const W=r.properties.get(lt);W.light=b}return lt}function U(z,B,b,D,lt){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&lt===Po)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,z.matrixWorld);const Y=t.update(z),Z=z.material;if(Array.isArray(Z)){const V=Y.groups;for(let O=0,F=V.length;O<F;O++){const st=V[O],ft=Z[st.materialIndex];if(ft&&ft.visible){const St=P(z,ft,D,lt);z.onBeforeShadow(r,z,B,b,Y,St,st),r.renderBufferDirect(b,null,Y,St,z,st),z.onAfterShadow(r,z,B,b,Y,St,st)}}}else if(Z.visible){const V=P(z,Z,D,lt);z.onBeforeShadow(r,z,B,b,Y,V,null),r.renderBufferDirect(b,null,Y,V,z,null),z.onAfterShadow(r,z,B,b,Y,V,null)}}const W=z.children;for(let Y=0,Z=W.length;Y<Z;Y++)U(W[Y],B,b,D,lt)}function N(z){z.target.removeEventListener("dispose",N);for(const b in p){const D=p[b],lt=z.target.uuid;lt in D&&(D[lt].dispose(),delete D[lt])}}}function XA(r,t){function i(){let j=!1;const Ct=new bn;let At=null;const Dt=new bn(0,0,0,0);return{setMask:function(yt){At!==yt&&!j&&(r.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){j=yt},setClear:function(yt,dt,kt,se,He){He===!0&&(yt*=se,dt*=se,kt*=se),Ct.set(yt,dt,kt,se),Dt.equals(Ct)===!1&&(r.clearColor(yt,dt,kt,se),Dt.copy(Ct))},reset:function(){j=!1,At=null,Dt.set(-1,0,0,0)}}}function s(){let j=!1,Ct=!1,At=null,Dt=null,yt=null;return{setReversed:function(dt){if(Ct!==dt){const kt=t.get("EXT_clip_control");dt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Ct=dt;const se=yt;yt=null,this.setClear(se)}},getReversed:function(){return Ct},setTest:function(dt){dt?mt(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(dt){At!==dt&&!j&&(r.depthMask(dt),At=dt)},setFunc:function(dt){if(Ct&&(dt=yM[dt]),Dt!==dt){switch(dt){case Ju:r.depthFunc(r.NEVER);break;case $u:r.depthFunc(r.ALWAYS);break;case tf:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case ef:r.depthFunc(r.EQUAL);break;case nf:r.depthFunc(r.GEQUAL);break;case af:r.depthFunc(r.GREATER);break;case sf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Dt=dt}},setLocked:function(dt){j=dt},setClear:function(dt){yt!==dt&&(yt=dt,Ct&&(dt=1-dt),r.clearDepth(dt))},reset:function(){j=!1,At=null,Dt=null,yt=null,Ct=!1}}}function l(){let j=!1,Ct=null,At=null,Dt=null,yt=null,dt=null,kt=null,se=null,He=null;return{setTest:function(Te){j||(Te?mt(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(Te){Ct!==Te&&!j&&(r.stencilMask(Te),Ct=Te)},setFunc:function(Te,Vn,Ci){(At!==Te||Dt!==Vn||yt!==Ci)&&(r.stencilFunc(Te,Vn,Ci),At=Te,Dt=Vn,yt=Ci)},setOp:function(Te,Vn,Ci){(dt!==Te||kt!==Vn||se!==Ci)&&(r.stencilOp(Te,Vn,Ci),dt=Te,kt=Vn,se=Ci)},setLocked:function(Te){j=Te},setClear:function(Te){He!==Te&&(r.clearStencil(Te),He=Te)},reset:function(){j=!1,Ct=null,At=null,Dt=null,yt=null,dt=null,kt=null,se=null,He=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},g=new WeakMap,y=[],T=null,w=!1,M=null,S=null,C=null,P=null,U=null,N=null,z=null,B=new oe(0,0,0),b=0,D=!1,lt=null,H=null,W=null,Y=null,Z=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,F=0;const st=r.getParameter(r.VERSION);st.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(st)[1]),O=F>=1):st.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),O=F>=2);let ft=null,St={};const L=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),ut=new bn().fromArray(L),Tt=new bn().fromArray(K);function Nt(j,Ct,At,Dt){const yt=new Uint8Array(4),dt=r.createTexture();r.bindTexture(j,dt),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<At;kt++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Ct,0,r.RGBA,1,1,Dt,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(Ct+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return dt}const tt={};tt[r.TEXTURE_2D]=Nt(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),mt(r.DEPTH_TEST),h.setFunc(Or),pe(!1),dn(Xp),mt(r.CULL_FACE),_e(Ga);function mt(j){_[j]!==!0&&(r.enable(j),_[j]=!0)}function Mt(j){_[j]!==!1&&(r.disable(j),_[j]=!1)}function Vt(j,Ct){return x[j]!==Ct?(r.bindFramebuffer(j,Ct),x[j]=Ct,j===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ct),j===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Ht(j,Ct){let At=y,Dt=!1;if(j){At=g.get(Ct),At===void 0&&(At=[],g.set(Ct,At));const yt=j.textures;if(At.length!==yt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,kt=yt.length;dt<kt;dt++)At[dt]=r.COLOR_ATTACHMENT0+dt;At.length=yt.length,Dt=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Dt=!0);Dt&&r.drawBuffers(At)}function re(j){return T!==j?(r.useProgram(j),T=j,!0):!1}const on={[tr]:r.FUNC_ADD,[px]:r.FUNC_SUBTRACT,[mx]:r.FUNC_REVERSE_SUBTRACT};on[gx]=r.MIN,on[_x]=r.MAX;const ye={[vx]:r.ZERO,[xx]:r.ONE,[Sx]:r.SRC_COLOR,[Ku]:r.SRC_ALPHA,[Ax]:r.SRC_ALPHA_SATURATE,[Tx]:r.DST_COLOR,[Mx]:r.DST_ALPHA,[yx]:r.ONE_MINUS_SRC_COLOR,[Qu]:r.ONE_MINUS_SRC_ALPHA,[bx]:r.ONE_MINUS_DST_COLOR,[Ex]:r.ONE_MINUS_DST_ALPHA,[Rx]:r.CONSTANT_COLOR,[Cx]:r.ONE_MINUS_CONSTANT_COLOR,[wx]:r.CONSTANT_ALPHA,[Dx]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(j,Ct,At,Dt,yt,dt,kt,se,He,Te){if(j===Ga){w===!0&&(Mt(r.BLEND),w=!1);return}if(w===!1&&(mt(r.BLEND),w=!0),j!==dx){if(j!==M||Te!==D){if((S!==tr||U!==tr)&&(r.blendEquation(r.FUNC_ADD),S=tr,U=tr),Te)switch(j){case Nr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wp:r.blendFunc(r.ONE,r.ONE);break;case Yp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",j);break}else switch(j){case Nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Yp:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qp:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",j);break}C=null,P=null,N=null,z=null,B.set(0,0,0),b=0,M=j,D=Te}return}yt=yt||Ct,dt=dt||At,kt=kt||Dt,(Ct!==S||yt!==U)&&(r.blendEquationSeparate(on[Ct],on[yt]),S=Ct,U=yt),(At!==C||Dt!==P||dt!==N||kt!==z)&&(r.blendFuncSeparate(ye[At],ye[Dt],ye[dt],ye[kt]),C=At,P=Dt,N=dt,z=kt),(se.equals(B)===!1||He!==b)&&(r.blendColor(se.r,se.g,se.b,He),B.copy(se),b=He),M=j,D=!1}function Ue(j,Ct){j.side===Gn?Mt(r.CULL_FACE):mt(r.CULL_FACE);let At=j.side===xi;Ct&&(At=!At),pe(At),j.blending===Nr&&j.transparent===!1?_e(Ga):_e(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),h.setFunc(j.depthFunc),h.setTest(j.depthTest),h.setMask(j.depthWrite),c.setMask(j.colorWrite);const Dt=j.stencilWrite;d.setTest(Dt),Dt&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ln(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?mt(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function pe(j){lt!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),lt=j)}function dn(j){j!==ux?(mt(r.CULL_FACE),j!==H&&(j===Xp?r.cullFace(r.BACK):j===fx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),H=j}function k(j){j!==W&&(O&&r.lineWidth(j),W=j)}function ln(j,Ct,At){j?(mt(r.POLYGON_OFFSET_FILL),(Y!==Ct||Z!==At)&&(Y=Ct,Z=At,h.getReversed()&&(Ct=-Ct),r.polygonOffset(Ct,At))):Mt(r.POLYGON_OFFSET_FILL)}function Ce(j){j?mt(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function ze(j){j===void 0&&(j=r.TEXTURE0+V-1),ft!==j&&(r.activeTexture(j),ft=j)}function jt(j,Ct,At){At===void 0&&(ft===null?At=r.TEXTURE0+V-1:At=ft);let Dt=St[At];Dt===void 0&&(Dt={type:void 0,texture:void 0},St[At]=Dt),(Dt.type!==j||Dt.texture!==Ct)&&(ft!==At&&(r.activeTexture(At),ft=At),r.bindTexture(j,Ct||tt[j]),Dt.type=j,Dt.texture=Ct)}function I(){const j=St[ft];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(j){Xe("WebGLState:",j)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(j){Xe("WebGLState:",j)}}function pt(){try{r.texSubImage2D(...arguments)}catch(j){Xe("WebGLState:",j)}}function xt(){try{r.texSubImage3D(...arguments)}catch(j){Xe("WebGLState:",j)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Xe("WebGLState:",j)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Xe("WebGLState:",j)}}function Ut(){try{r.texStorage2D(...arguments)}catch(j){Xe("WebGLState:",j)}}function ee(){try{r.texStorage3D(...arguments)}catch(j){Xe("WebGLState:",j)}}function ae(){try{r.texImage2D(...arguments)}catch(j){Xe("WebGLState:",j)}}function bt(){try{r.texImage3D(...arguments)}catch(j){Xe("WebGLState:",j)}}function Et(j){ut.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),ut.copy(j))}function Gt(j){Tt.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Tt.copy(j))}function It(j,Ct){let At=p.get(Ct);At===void 0&&(At=new WeakMap,p.set(Ct,At));let Dt=At.get(j);Dt===void 0&&(Dt=r.getUniformBlockIndex(Ct,j.name),At.set(j,Dt))}function Ot(j,Ct){const Dt=p.get(Ct).get(j);m.get(Ct)!==Dt&&(r.uniformBlockBinding(Ct,Dt,j.__bindingPointIndex),m.set(Ct,Dt))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ft=null,St={},x={},g=new WeakMap,y=[],T=null,w=!1,M=null,S=null,C=null,P=null,U=null,N=null,z=null,B=new oe(0,0,0),b=0,D=!1,lt=null,H=null,W=null,Y=null,Z=null,ut.set(0,0,r.canvas.width,r.canvas.height),Tt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:mt,disable:Mt,bindFramebuffer:Vt,drawBuffers:Ht,useProgram:re,setBlending:_e,setMaterial:Ue,setFlipSided:pe,setCullFace:dn,setLineWidth:k,setPolygonOffset:ln,setScissorTest:Ce,activeTexture:ze,bindTexture:jt,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:ae,texImage3D:bt,updateUBOMapping:It,uniformBlockBinding:Ot,texStorage2D:Ut,texStorage3D:ee,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Yt,scissor:Et,viewport:Gt,reset:he}}function WA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,_=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,E){return y?new OffscreenCanvas(I,E):zf("canvas")}function w(I,E,Q){let pt=1;const xt=jt(I);if((xt.width>Q||xt.height>Q)&&(pt=Q/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ht=Math.floor(pt*xt.width),Yt=Math.floor(pt*xt.height);x===void 0&&(x=T(ht,Yt));const Ut=E?T(ht,Yt):x;return Ut.width=ht,Ut.height=Yt,Ut.getContext("2d").drawImage(I,0,0,ht,Yt),fe("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ht+"x"+Yt+")."),Ut}else return"data"in I&&fe("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),I;return I}function M(I){return I.generateMipmaps}function S(I){r.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(I,E,Q,pt,xt=!1){if(I!==null){if(r[I]!==void 0)return r[I];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ht=E;if(E===r.RED&&(Q===r.FLOAT&&(ht=r.R32F),Q===r.HALF_FLOAT&&(ht=r.R16F),Q===r.UNSIGNED_BYTE&&(ht=r.R8)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ht=r.R8UI),Q===r.UNSIGNED_SHORT&&(ht=r.R16UI),Q===r.UNSIGNED_INT&&(ht=r.R32UI),Q===r.BYTE&&(ht=r.R8I),Q===r.SHORT&&(ht=r.R16I),Q===r.INT&&(ht=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(ht=r.RG32F),Q===r.HALF_FLOAT&&(ht=r.RG16F),Q===r.UNSIGNED_BYTE&&(ht=r.RG8)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ht=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ht=r.RG16UI),Q===r.UNSIGNED_INT&&(ht=r.RG32UI),Q===r.BYTE&&(ht=r.RG8I),Q===r.SHORT&&(ht=r.RG16I),Q===r.INT&&(ht=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),Q===r.UNSIGNED_INT&&(ht=r.RGB32UI),Q===r.BYTE&&(ht=r.RGB8I),Q===r.SHORT&&(ht=r.RGB16I),Q===r.INT&&(ht=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ht=r.RGBA32UI),Q===r.BYTE&&(ht=r.RGBA8I),Q===r.SHORT&&(ht=r.RGBA16I),Q===r.INT&&(ht=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),E===r.RGBA){const Yt=xt?lc:We.getTransfer(pt);Q===r.FLOAT&&(ht=r.RGBA32F),Q===r.HALF_FLOAT&&(ht=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ht=Yt===$e?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function U(I,E){let Q;return I?E===null||E===Ua||E===ko?Q=r.DEPTH24_STENCIL8:E===pa?Q=r.DEPTH32F_STENCIL8:E===Vo&&(Q=r.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ua||E===ko?Q=r.DEPTH_COMPONENT24:E===pa?Q=r.DEPTH_COMPONENT32F:E===Vo&&(Q=r.DEPTH_COMPONENT16),Q}function N(I,E){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==ii&&I.minFilter!==ai?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function z(I){const E=I.target;E.removeEventListener("dispose",z),b(E),E.isVideoTexture&&_.delete(E)}function B(I){const E=I.target;E.removeEventListener("dispose",B),lt(E)}function b(I){const E=s.get(I);if(E.__webglInit===void 0)return;const Q=I.source,pt=g.get(Q);if(pt){const xt=pt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(I),Object.keys(pt).length===0&&g.delete(Q)}s.remove(I)}function D(I){const E=s.get(I);r.deleteTexture(E.__webglTexture);const Q=I.source,pt=g.get(Q);delete pt[E.__cacheKey],h.memory.textures--}function lt(I){const E=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let xt=0;xt<E.__webglFramebuffer[pt].length;xt++)r.deleteFramebuffer(E.__webglFramebuffer[pt][xt]);else r.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)r.deleteFramebuffer(E.__webglFramebuffer[pt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=I.textures;for(let pt=0,xt=Q.length;pt<xt;pt++){const ht=s.get(Q[pt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(Q[pt])}s.remove(I)}let H=0;function W(){H=0}function Y(){const I=H;return I>=l.maxTextures&&fe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),H+=1,I}function Z(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function V(I,E){const Q=s.get(I);if(I.isVideoTexture&&Ce(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const pt=I.image;if(pt===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Q,I,E);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function O(I,E){const Q=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){tt(Q,I,E);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function F(I,E){const Q=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){tt(Q,I,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function st(I,E){const Q=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Q.__version!==I.version){mt(Q,I,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const ft={[Go]:r.REPEAT,[Ha]:r.CLAMP_TO_EDGE,[rf]:r.MIRRORED_REPEAT},St={[ii]:r.NEAREST,[Nx]:r.NEAREST_MIPMAP_NEAREST,[$l]:r.NEAREST_MIPMAP_LINEAR,[ai]:r.LINEAR,[Yu]:r.LINEAR_MIPMAP_NEAREST,[_s]:r.LINEAR_MIPMAP_LINEAR},L={[Px]:r.NEVER,[Gx]:r.ALWAYS,[Fx]:r.LESS,[Jf]:r.LEQUAL,[Bx]:r.EQUAL,[$f]:r.GEQUAL,[zx]:r.GREATER,[Hx]:r.NOTEQUAL};function K(I,E){if(E.type===pa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ai||E.magFilter===Yu||E.magFilter===$l||E.magFilter===_s||E.minFilter===ai||E.minFilter===Yu||E.minFilter===$l||E.minFilter===_s)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,ft[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,ft[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,ft[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,St[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ii||E.minFilter!==$l&&E.minFilter!==_s||E.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ut(I,E){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",z));const pt=E.source;let xt=g.get(pt);xt===void 0&&(xt={},g.set(pt,xt));const ht=Z(E);if(ht!==I.__cacheKey){xt[ht]===void 0&&(xt[ht]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),xt[ht].usedTimes++;const Yt=xt[I.__cacheKey];Yt!==void 0&&(xt[I.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(E)),I.__cacheKey=ht,I.__webglTexture=xt[ht].texture}return Q}function Tt(I,E,Q){return Math.floor(Math.floor(I/Q)/E)}function Nt(I,E,Q,pt){const ht=I.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,pt,E.data);else{ht.sort((bt,Et)=>bt.start-Et.start);let Yt=0;for(let bt=1;bt<ht.length;bt++){const Et=ht[Yt],Gt=ht[bt],It=Et.start+Et.count,Ot=Tt(Gt.start,E.width,4),he=Tt(Et.start,E.width,4);Gt.start<=It+1&&Ot===he&&Tt(Gt.start+Gt.count-1,E.width,4)===Ot?Et.count=Math.max(Et.count,Gt.start+Gt.count-Et.start):(++Yt,ht[Yt]=Gt)}ht.length=Yt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),ee=r.getParameter(r.UNPACK_SKIP_PIXELS),ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Et=ht.length;bt<Et;bt++){const Gt=ht[bt],It=Math.floor(Gt.start/4),Ot=Math.ceil(Gt.count/4),he=It%E.width,j=Math.floor(It/E.width),Ct=Ot,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,he,j,Ct,At,Q,pt,E.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function tt(I,E,Q){let pt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=r.TEXTURE_3D);const xt=ut(I,E),ht=E.source;i.bindTexture(pt,I.__webglTexture,r.TEXTURE0+Q);const Yt=s.get(ht);if(ht.version!==Yt.__version||xt===!0){i.activeTexture(r.TEXTURE0+Q);const Ut=We.getPrimaries(We.workingColorSpace),ee=E.colorSpace===ms?null:We.getPrimaries(E.colorSpace),ae=E.colorSpace===ms||Ut===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let bt=w(E.image,!1,l.maxTextureSize);bt=ze(E,bt);const Et=c.convert(E.format,E.colorSpace),Gt=c.convert(E.type);let It=P(E.internalFormat,Et,Gt,E.colorSpace,E.isVideoTexture);K(pt,E);let Ot;const he=E.mipmaps,j=E.isVideoTexture!==!0,Ct=Yt.__version===void 0||xt===!0,At=ht.dataReady,Dt=N(E,bt);if(E.isDepthTexture)It=U(E.format===er,E.type),Ct&&(j?i.texStorage2D(r.TEXTURE_2D,1,It,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,It,bt.width,bt.height,0,Et,Gt,null));else if(E.isDataTexture)if(he.length>0){j&&Ct&&i.texStorage2D(r.TEXTURE_2D,Dt,It,he[0].width,he[0].height);for(let yt=0,dt=he.length;yt<dt;yt++)Ot=he[yt],j?At&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Et,Gt,Ot.data):i.texImage2D(r.TEXTURE_2D,yt,It,Ot.width,Ot.height,0,Et,Gt,Ot.data);E.generateMipmaps=!1}else j?(Ct&&i.texStorage2D(r.TEXTURE_2D,Dt,It,bt.width,bt.height),At&&Nt(E,bt,Et,Gt)):i.texImage2D(r.TEXTURE_2D,0,It,bt.width,bt.height,0,Et,Gt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Dt,It,he[0].width,he[0].height,bt.depth);for(let yt=0,dt=he.length;yt<dt;yt++)if(Ot=he[yt],E.format!==ma)if(Et!==null)if(j){if(At)if(E.layerUpdates.size>0){const kt=Fv(Ot.width,Ot.height,E.format,E.type);for(const se of E.layerUpdates){const He=Ot.data.subarray(se*kt/Ot.data.BYTES_PER_ELEMENT,(se+1)*kt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,se,Ot.width,Ot.height,1,Et,He)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,bt.depth,Et,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,yt,It,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,bt.depth,Et,Gt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,yt,It,Ot.width,Ot.height,bt.depth,0,Et,Gt,Ot.data)}else{j&&Ct&&i.texStorage2D(r.TEXTURE_2D,Dt,It,he[0].width,he[0].height);for(let yt=0,dt=he.length;yt<dt;yt++)Ot=he[yt],E.format!==ma?Et!==null?j?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Et,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,yt,It,Ot.width,Ot.height,0,Ot.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?At&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Et,Gt,Ot.data):i.texImage2D(r.TEXTURE_2D,yt,It,Ot.width,Ot.height,0,Et,Gt,Ot.data)}else if(E.isDataArrayTexture)if(j){if(Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Dt,It,bt.width,bt.height,bt.depth),At)if(E.layerUpdates.size>0){const yt=Fv(bt.width,bt.height,E.format,E.type);for(const dt of E.layerUpdates){const kt=bt.data.subarray(dt*yt/bt.data.BYTES_PER_ELEMENT,(dt+1)*yt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,dt,bt.width,bt.height,1,Et,Gt,kt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Et,Gt,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,bt.width,bt.height,bt.depth,0,Et,Gt,bt.data);else if(E.isData3DTexture)j?(Ct&&i.texStorage3D(r.TEXTURE_3D,Dt,It,bt.width,bt.height,bt.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Et,Gt,bt.data)):i.texImage3D(r.TEXTURE_3D,0,It,bt.width,bt.height,bt.depth,0,Et,Gt,bt.data);else if(E.isFramebufferTexture){if(Ct)if(j)i.texStorage2D(r.TEXTURE_2D,Dt,It,bt.width,bt.height);else{let yt=bt.width,dt=bt.height;for(let kt=0;kt<Dt;kt++)i.texImage2D(r.TEXTURE_2D,kt,It,yt,dt,0,Et,Gt,null),yt>>=1,dt>>=1}}else if(he.length>0){if(j&&Ct){const yt=jt(he[0]);i.texStorage2D(r.TEXTURE_2D,Dt,It,yt.width,yt.height)}for(let yt=0,dt=he.length;yt<dt;yt++)Ot=he[yt],j?At&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Et,Gt,Ot):i.texImage2D(r.TEXTURE_2D,yt,It,Et,Gt,Ot);E.generateMipmaps=!1}else if(j){if(Ct){const yt=jt(bt);i.texStorage2D(r.TEXTURE_2D,Dt,It,yt.width,yt.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,Gt,bt)}else i.texImage2D(r.TEXTURE_2D,0,It,Et,Gt,bt);M(E)&&S(pt),Yt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function mt(I,E,Q){if(E.image.length!==6)return;const pt=ut(I,E),xt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Q);const ht=s.get(xt);if(xt.version!==ht.__version||pt===!0){i.activeTexture(r.TEXTURE0+Q);const Yt=We.getPrimaries(We.workingColorSpace),Ut=E.colorSpace===ms?null:We.getPrimaries(E.colorSpace),ee=E.colorSpace===ms||Yt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let dt=0;dt<6;dt++)!ae&&!bt?Et[dt]=w(E.image[dt],!0,l.maxCubemapSize):Et[dt]=bt?E.image[dt].image:E.image[dt],Et[dt]=ze(E,Et[dt]);const Gt=Et[0],It=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type),he=P(E.internalFormat,It,Ot,E.colorSpace),j=E.isVideoTexture!==!0,Ct=ht.__version===void 0||pt===!0,At=xt.dataReady;let Dt=N(E,Gt);K(r.TEXTURE_CUBE_MAP,E);let yt;if(ae){j&&Ct&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Dt,he,Gt.width,Gt.height);for(let dt=0;dt<6;dt++){yt=Et[dt].mipmaps;for(let kt=0;kt<yt.length;kt++){const se=yt[kt];E.format!==ma?It!==null?j?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,0,0,se.width,se.height,It,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,he,se.width,se.height,0,se.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,0,0,se.width,se.height,It,Ot,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,he,se.width,se.height,0,It,Ot,se.data)}}}else{if(yt=E.mipmaps,j&&Ct){yt.length>0&&Dt++;const dt=jt(Et[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Dt,he,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(bt){j?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Et[dt].width,Et[dt].height,It,Ot,Et[dt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,Et[dt].width,Et[dt].height,0,It,Ot,Et[dt].data);for(let kt=0;kt<yt.length;kt++){const He=yt[kt].image[dt].image;j?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,0,0,He.width,He.height,It,Ot,He.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,he,He.width,He.height,0,It,Ot,He.data)}}else{j?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,It,Ot,Et[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,It,Ot,Et[dt]);for(let kt=0;kt<yt.length;kt++){const se=yt[kt];j?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,0,0,It,Ot,se.image[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,he,It,Ot,se.image[dt])}}}M(E)&&S(r.TEXTURE_CUBE_MAP),ht.__version=xt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Mt(I,E,Q,pt,xt,ht){const Yt=c.convert(Q.format,Q.colorSpace),Ut=c.convert(Q.type),ee=P(Q.internalFormat,Yt,Ut,Q.colorSpace),ae=s.get(E),bt=s.get(Q);if(bt.__renderTarget=E,!ae.__hasExternalTextures){const Et=Math.max(1,E.width>>ht),Gt=Math.max(1,E.height>>ht);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?i.texImage3D(xt,ht,ee,Et,Gt,E.depth,0,Yt,Ut,null):i.texImage2D(xt,ht,ee,Et,Gt,0,Yt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),ln(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,xt,bt.__webglTexture,0,k(E)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,xt,bt.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(I,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const pt=E.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ht=U(E.stencilBuffer,xt),Yt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ln(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),ht,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),ht,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ht,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,I)}else{const pt=E.textures;for(let xt=0;xt<pt.length;xt++){const ht=pt[xt],Yt=c.convert(ht.format,ht.colorSpace),Ut=c.convert(ht.type),ee=P(ht.internalFormat,Yt,Ut,ht.colorSpace);ln(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),ee,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ee,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(I,E,Q){const pt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),xt.__webglTexture===void 0){xt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),K(r.TEXTURE_CUBE_MAP,E.depthTexture);const ae=c.convert(E.depthTexture.format),bt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===ka?Et=r.DEPTH_COMPONENT24:E.depthTexture.format===er&&(Et=r.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Et,E.width,E.height,0,ae,bt,null)}}else V(E.depthTexture,0);const ht=xt.__webglTexture,Yt=k(E),Ut=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,ee=E.depthTexture.format===er?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ka)ln(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Ut,ht,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Ut,ht,0);else if(E.depthTexture.format===er)ln(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Ut,ht,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Ut,ht,0);else throw new Error("Unknown depthTexture format")}function re(I){const E=s.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=pt}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let pt=0;pt<6;pt++)Ht(E.__webglFramebuffer[pt],I,pt);else{const pt=I.texture.mipmaps;pt&&pt.length>0?Ht(E.__webglFramebuffer[0],I,0):Ht(E.__webglFramebuffer,I,0)}else if(Q){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=r.createRenderbuffer(),Vt(E.__webglDepthbuffer[pt],I,!1);else{const xt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ht)}}else{const pt=I.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Vt(E.__webglDepthbuffer,I,!1);else{const xt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function on(I,E,Q){const pt=s.get(I);E!==void 0&&Mt(pt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&re(I)}function ye(I){const E=I.texture,Q=s.get(I),pt=s.get(E);I.addEventListener("dispose",B);const xt=I.textures,ht=I.isWebGLCubeRenderTarget===!0,Yt=xt.length>1;if(Yt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=E.version,h.memory.textures++),ht){Q.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ut]=[];for(let ee=0;ee<E.mipmaps.length;ee++)Q.__webglFramebuffer[Ut][ee]=r.createFramebuffer()}else Q.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)Q.__webglFramebuffer[Ut]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let Ut=0,ee=xt.length;Ut<ee;Ut++){const ae=s.get(xt[Ut]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),h.memory.textures++)}if(I.samples>0&&ln(I)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ut=0;Ut<xt.length;Ut++){const ee=xt[Ut];Q.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut]);const ae=c.convert(ee.format,ee.colorSpace),bt=c.convert(ee.type),Et=P(ee.internalFormat,ae,bt,ee.colorSpace,I.isXRRenderTarget===!0),Gt=k(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,Et,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(Q.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),K(r.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Mt(Q.__webglFramebuffer[Ut][ee],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ee);else Mt(Q.__webglFramebuffer[Ut],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(E)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Ut=0,ee=xt.length;Ut<ee;Ut++){const ae=xt[Ut],bt=s.get(ae);let Et=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Et=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Et,bt.__webglTexture),K(Et,ae),Mt(Q.__webglFramebuffer,I,ae,r.COLOR_ATTACHMENT0+Ut,Et,0),M(ae)&&S(Et)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ut=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,pt.__webglTexture),K(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Mt(Q.__webglFramebuffer[ee],I,E,r.COLOR_ATTACHMENT0,Ut,ee);else Mt(Q.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,Ut,0);M(E)&&S(Ut),i.unbindTexture()}I.depthBuffer&&re(I)}function _e(I){const E=I.textures;for(let Q=0,pt=E.length;Q<pt;Q++){const xt=E[Q];if(M(xt)){const ht=C(I),Yt=s.get(xt).__webglTexture;i.bindTexture(ht,Yt),S(ht),i.unbindTexture()}}}const Ue=[],pe=[];function dn(I){if(I.samples>0){if(ln(I)===!1){const E=I.textures,Q=I.width,pt=I.height;let xt=r.COLOR_BUFFER_BIT;const ht=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=s.get(I),Ut=E.length>1;if(Ut)for(let ae=0;ae<E.length;ae++)i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const ee=I.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[ae]);const bt=s.get(E[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,Q,pt,0,0,Q,pt,xt,r.NEAREST),m===!0&&(Ue.length=0,pe.length=0,Ue.push(r.COLOR_ATTACHMENT0+ae),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ue.push(ht),pe.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let ae=0;ae<E.length;ae++){i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[ae]);const bt=s.get(E[ae]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function k(I){return Math.min(l.maxSamples,I.samples)}function ln(I){const E=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ce(I){const E=h.render.frame;_.get(I)!==E&&(_.set(I,E),I.update())}function ze(I,E){const Q=I.colorSpace,pt=I.format,xt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Fr&&Q!==ms&&(We.getTransfer(Q)===$e?(pt!==ma||xt!==Pi)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",Q)),E}function jt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=st,this.rebindTextures=on,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ln,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function mS(r,t){function i(s,l=ms){let c;const h=We.getTransfer(l);if(s===Pi)return r.UNSIGNED_BYTE;if(s===Wf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===pm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===mm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===hm)return r.BYTE;if(s===dm)return r.SHORT;if(s===Vo)return r.UNSIGNED_SHORT;if(s===Xf)return r.INT;if(s===Ua)return r.UNSIGNED_INT;if(s===pa)return r.FLOAT;if(s===Va)return r.HALF_FLOAT;if(s===gm)return r.ALPHA;if(s===_m)return r.RGB;if(s===ma)return r.RGBA;if(s===ka)return r.DEPTH_COMPONENT;if(s===er)return r.DEPTH_STENCIL;if(s===qf)return r.RED;if(s===jf)return r.RED_INTEGER;if(s===Pr)return r.RG;if(s===Zf)return r.RG_INTEGER;if(s===Kf)return r.RGBA_INTEGER;if(s===ec||s===nc||s===ic||s===ac)if(h===$e)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ec)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ec)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ac)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===of||s===lf||s===cf||s===uf)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===of)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ff||s===hf||s===df||s===pf||s===mf||s===gf||s===_f)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ff||s===hf)return h===$e?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===df)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===pf)return c.COMPRESSED_R11_EAC;if(s===mf)return c.COMPRESSED_SIGNED_R11_EAC;if(s===gf)return c.COMPRESSED_RG11_EAC;if(s===_f)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vf||s===xf||s===Sf||s===yf||s===Mf||s===Ef||s===Tf||s===bf||s===Af||s===Rf||s===Cf||s===wf||s===Df||s===Uf)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===vf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ef)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Af)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Df)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lf||s===Nf||s===Of)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Lf)return h===$e?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Of)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===If||s===Pf||s===Ff||s===Bf)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===If)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Pf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ff)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ko?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const YA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
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

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Am(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new La({vertexShader:YA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ke(new za(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZA extends Br{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,g=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",M=new jA,S={},C=i.getContextAttributes();let P=null,U=null;const N=[],z=[],B=new Re;let b=null;const D=new Ri;D.viewport=new bn;const lt=new Ri;lt.viewport=new bn;const H=[D,lt],W=new oS;let Y=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let mt=N[tt];return mt===void 0&&(mt=new qu,N[tt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let mt=N[tt];return mt===void 0&&(mt=new qu,N[tt]=mt),mt.getGripSpace()},this.getHand=function(tt){let mt=N[tt];return mt===void 0&&(mt=new qu,N[tt]=mt),mt.getHandSpace()};function V(tt){const mt=z.indexOf(tt.inputSource);if(mt===-1)return;const Mt=N[mt];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,p||h),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function O(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",F);for(let tt=0;tt<N.length;tt++){const mt=z[tt];mt!==null&&(z[tt]=null,N[tt].disconnect(mt))}Y=null,Z=null,M.reset();for(const tt in S)delete S[tt];t.setRenderTarget(P),y=null,g=null,x=null,l=null,U=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",O),l.addEventListener("inputsourceschange",F),C.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Vt=null,Ht=null;C.depth&&(Ht=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=C.stencil?er:ka,Vt=C.stencil?ko:Ua);const re={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(re),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new Da(g.textureWidth,g.textureHeight,{format:ma,type:Pi,depthTexture:new Yo(g.textureWidth,g.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Da(y.framebufferWidth,y.framebufferHeight,{format:ma,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(tt){for(let mt=0;mt<tt.removed.length;mt++){const Mt=tt.removed[mt],Vt=z.indexOf(Mt);Vt>=0&&(z[Vt]=null,N[Vt].disconnect(Mt))}for(let mt=0;mt<tt.added.length;mt++){const Mt=tt.added[mt];let Vt=z.indexOf(Mt);if(Vt===-1){for(let re=0;re<N.length;re++)if(re>=z.length){z.push(Mt),Vt=re;break}else if(z[re]===null){z[re]=Mt,Vt=re;break}if(Vt===-1)break}const Ht=N[Vt];Ht&&Ht.connect(Mt)}}const st=new $,ft=new $;function St(tt,mt,Mt){st.setFromMatrixPosition(mt.matrixWorld),ft.setFromMatrixPosition(Mt.matrixWorld);const Vt=st.distanceTo(ft),Ht=mt.projectionMatrix.elements,re=Mt.projectionMatrix.elements,on=Ht[14]/(Ht[10]-1),ye=Ht[14]/(Ht[10]+1),_e=(Ht[9]+1)/Ht[5],Ue=(Ht[9]-1)/Ht[5],pe=(Ht[8]-1)/Ht[0],dn=(re[8]+1)/re[0],k=on*pe,ln=on*dn,Ce=Vt/(-pe+dn),ze=Ce*-pe;if(mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ze),tt.translateZ(Ce),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ht[10]===-1)tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const jt=on+Ce,I=ye+Ce,E=k-ze,Q=ln+(Vt-ze),pt=_e*ye/I*jt,xt=Ue*ye/I*jt;tt.projectionMatrix.makePerspective(E,Q,pt,xt,jt,I),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function L(tt,mt){mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let mt=tt.near,Mt=tt.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),W.near=lt.near=D.near=mt,W.far=lt.far=D.far=Mt,(Y!==W.near||Z!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),Y=W.near,Z=W.far),W.layers.mask=tt.layers.mask|6,D.layers.mask=W.layers.mask&-5,lt.layers.mask=W.layers.mask&-3;const Vt=tt.parent,Ht=W.cameras;L(W,Vt);for(let re=0;re<Ht.length;re++)L(Ht[re],Vt);Ht.length===2?St(W,D,lt):W.projectionMatrix.copy(D.projectionMatrix),K(tt,W,Vt)};function K(tt,mt,Mt){Mt===null?tt.matrix.copy(mt.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Wo*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(tt){m=tt,g!==null&&(g.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(W)},this.getCameraTexture=function(tt){return S[tt]};let ut=null;function Tt(tt,mt){if(_=mt.getViewerPose(p||h),T=mt,_!==null){const Mt=_.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Vt=!1;Mt.length!==W.cameras.length&&(W.cameras.length=0,Vt=!0);for(let ye=0;ye<Mt.length;ye++){const _e=Mt[ye];let Ue=null;if(y!==null)Ue=y.getViewport(_e);else{const dn=x.getViewSubImage(g,_e);Ue=dn.viewport,ye===0&&(t.setRenderTargetTextures(U,dn.colorTexture,dn.depthStencilTexture),t.setRenderTarget(U))}let pe=H[ye];pe===void 0&&(pe=new Ri,pe.layers.enable(ye),pe.viewport=new bn,H[ye]=pe),pe.matrix.fromArray(_e.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(_e.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ye===0&&(W.matrix.copy(pe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Vt===!0&&W.cameras.push(pe)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const ye=x.getDepthInformation(Mt[0]);ye&&ye.isValid&&ye.texture&&M.init(ye,l.renderState)}if(Ht&&Ht.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let ye=0;ye<Mt.length;ye++){const _e=Mt[ye].camera;if(_e){let Ue=S[_e];Ue||(Ue=new Am,S[_e]=Ue);const pe=x.getCameraImage(_e);Ue.sourceTexture=pe}}}}for(let Mt=0;Mt<N.length;Mt++){const Vt=z[Mt],Ht=N[Mt];Vt!==null&&Ht!==void 0&&Ht.update(Vt,mt,p||h)}ut&&ut(tt,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),T=null}const Nt=new uS;Nt.setAnimationLoop(Tt),this.setAnimationLoop=function(tt){ut=tt},this.dispose=function(){}}}const Cr=new _a,KA=new rn;function QA(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Jx(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,P,U){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,U)):S.isMeshMatcapMaterial?(c(M,S),T(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,C,P):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===xi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===xi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),P=C.envMap,U=C.envMapRotation;P&&(M.envMap.value=P,Cr.copy(U),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),M.envMapRotation.value.setFromMatrix4(KA.makeRotationFromEuler(Cr)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,P){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=P*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===xi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function JA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const U=P.program;s.uniformBlockBinding(C,U)}function p(C,P){let U=l[C.id];U===void 0&&(T(C),U=_(C),l[C.id]=U,C.addEventListener("dispose",M));const N=P.program;s.updateUBOMapping(C,N);const z=t.render.frame;c[C.id]!==z&&(g(C),c[C.id]=z)}function _(C){const P=x();C.__bindingPointIndex=P;const U=r.createBuffer(),N=C.__size,z=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,N,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function x(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=l[C.id],U=C.uniforms,N=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let z=0,B=U.length;z<B;z++){const b=Array.isArray(U[z])?U[z]:[U[z]];for(let D=0,lt=b.length;D<lt;D++){const H=b[D];if(y(H,z,D,N)===!0){const W=H.__offset,Y=Array.isArray(H.value)?H.value:[H.value];let Z=0;for(let V=0;V<Y.length;V++){const O=Y[V],F=w(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,W+Z,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,Z),Z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,P,U,N){const z=C.value,B=P+"_"+U;if(N[B]===void 0)return typeof z=="number"||typeof z=="boolean"?N[B]=z:N[B]=z.clone(),!0;{const b=N[B];if(typeof z=="number"||typeof z=="boolean"){if(b!==z)return N[B]=z,!0}else if(b.equals(z)===!1)return b.copy(z),!0}return!1}function T(C){const P=C.uniforms;let U=0;const N=16;for(let B=0,b=P.length;B<b;B++){const D=Array.isArray(P[B])?P[B]:[P[B]];for(let lt=0,H=D.length;lt<H;lt++){const W=D[lt],Y=Array.isArray(W.value)?W.value:[W.value];for(let Z=0,V=Y.length;Z<V;Z++){const O=Y[Z],F=w(O),st=U%N,ft=st%F.boundary,St=st+ft;U+=ft,St!==0&&N-St<F.storage&&(U+=N-St),W.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=U,U+=F.storage}}}const z=U%N;return z>0&&(U+=N-z),C.__size=U,C.__cache={},this}function w(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):fe("WebGLRenderer: Unsupported uniform value type.",C),P}function M(C){const P=C.target;P.removeEventListener("dispose",M);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const $A=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ba=null;function t2(){return Ba===null&&(Ba=new Tm($A,16,16,Pr,Va),Ba.name="DFG_LUT",Ba.minFilter=ai,Ba.magFilter=ai,Ba.wrapS=Ha,Ba.wrapT=Ha,Ba.generateMipmaps=!1,Ba.needsUpdate=!0),Ba}class gS{constructor(t={}){const{canvas:i=Vx(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Pi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=y,M=new Set([Kf,Zf,jf]),S=new Set([Pi,Ua,Vo,ko,Wf,Yf]),C=new Uint32Array(4),P=new Int32Array(4);let U=null,N=null;const z=[],B=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let lt=!1;this._outputColorSpace=Yn;let H=0,W=0,Y=null,Z=-1,V=null;const O=new bn,F=new bn;let st=null;const ft=new oe(0);let St=0,L=i.width,K=i.height,ut=1,Tt=null,Nt=null;const tt=new bn(0,0,L,K),mt=new bn(0,0,L,K);let Mt=!1;const Vt=new nh;let Ht=!1,re=!1;const on=new rn,ye=new $,_e=new bn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function dn(){return Y===null?ut:1}let k=s;function ln(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gf}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",se,!1),i.addEventListener("webglcontextcreationerror",He,!1),k===null){const q="webgl2";if(k=ln(q,R),k===null)throw ln(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Xe("WebGLRenderer: "+R.message),R}let Ce,ze,jt,I,E,Q,pt,xt,ht,Yt,Ut,ee,ae,bt,Et,Gt,It,Ot,he,j,Ct,At,Dt;function yt(){Ce=new nb(k),Ce.init(),Ct=new mS(k,Ce),ze=new j1(k,Ce,t,Ct),jt=new XA(k,Ce),ze.reversedDepthBuffer&&g&&jt.buffers.depth.setReversed(!0),I=new sb(k),E=new DA,Q=new WA(k,Ce,jt,E,ze,Ct,I),pt=new eb(D),xt=new uE(k),At=new Y1(k,xt),ht=new ib(k,xt,I,At),Yt=new ob(k,ht,xt,At,I),Ot=new rb(k,ze,Q),Et=new Z1(E),Ut=new wA(D,pt,Ce,ze,At,Et),ee=new QA(D,E),ae=new LA,bt=new BA(Ce),It=new W1(D,pt,jt,Yt,T,m),Gt=new kA(D,Yt,ze),Dt=new JA(k,I,ze,jt),he=new q1(k,Ce,I),j=new ab(k,Ce,I),I.programs=Ut.programs,D.capabilities=ze,D.extensions=Ce,D.properties=E,D.renderLists=ae,D.shadowMap=Gt,D.state=jt,D.info=I}yt(),w!==Pi&&(b=new cb(w,i.width,i.height,l,c));const dt=new ZA(D,k);this.xr=dt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(R){R!==void 0&&(ut=R,this.setSize(L,K,!1))},this.getSize=function(R){return R.set(L,K)},this.setSize=function(R,q,ot=!0){if(dt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,K=q,i.width=Math.floor(R*ut),i.height=Math.floor(q*ut),ot===!0&&(i.style.width=R+"px",i.style.height=q+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(L*ut,K*ut).floor()},this.setDrawingBufferSize=function(R,q,ot){L=R,K=q,ut=ot,i.width=Math.floor(R*ot),i.height=Math.floor(q*ot),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(w===Pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,q,ot,at){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,q,ot,at),jt.viewport(O.copy(tt).multiplyScalar(ut).round())},this.getScissor=function(R){return R.copy(mt)},this.setScissor=function(R,q,ot,at){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,q,ot,at),jt.scissor(F.copy(mt).multiplyScalar(ut).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){jt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){Nt=R},this.getClearColor=function(R){return R.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ot=!0){let at=0;if(R){let et=!1;if(Y!==null){const Lt=Y.texture.format;et=M.has(Lt)}if(et){const Lt=Y.texture.type,zt=S.has(Lt),Pt=It.getClearColor(),Zt=It.getClearAlpha(),qt=Pt.r,ce=Pt.g,de=Pt.b;zt?(C[0]=qt,C[1]=ce,C[2]=de,C[3]=Zt,k.clearBufferuiv(k.COLOR,0,C)):(P[0]=qt,P[1]=ce,P[2]=de,P[3]=Zt,k.clearBufferiv(k.COLOR,0,P))}else at|=k.COLOR_BUFFER_BIT}q&&(at|=k.DEPTH_BUFFER_BIT),ot&&(at|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&k.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",se,!1),i.removeEventListener("webglcontextcreationerror",He,!1),It.dispose(),ae.dispose(),bt.dispose(),E.dispose(),pt.dispose(),Yt.dispose(),At.dispose(),Dt.dispose(),Ut.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Wa),dt.removeEventListener("sessionend",ys),Ki.stop()};function kt(R){R.preventDefault(),Qp("WebGLRenderer: Context Lost."),lt=!0}function se(){Qp("WebGLRenderer: Context Restored."),lt=!1;const R=I.autoReset,q=Gt.enabled,ot=Gt.autoUpdate,at=Gt.needsUpdate,et=Gt.type;yt(),I.autoReset=R,Gt.enabled=q,Gt.autoUpdate=ot,Gt.needsUpdate=at,Gt.type=et}function He(R){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const q=R.target;q.removeEventListener("dispose",Te),Vn(q)}function Vn(R){Ci(R),E.remove(R)}function Ci(R){const q=E.get(R).programs;q!==void 0&&(q.forEach(function(ot){Ut.releaseProgram(ot)}),R.isShaderMaterial&&Ut.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ot,at,et,Lt){q===null&&(q=Ue);const zt=et.isMesh&&et.matrixWorld.determinant()<0,Pt=Sn(R,q,ot,at,et);jt.setMaterial(at,zt);let Zt=ot.index,qt=1;if(at.wireframe===!0){if(Zt=ht.getWireframeAttribute(ot),Zt===void 0)return;qt=2}const ce=ot.drawRange,de=ot.attributes.position;let Xt=ce.start*qt,me=(ce.start+ce.count)*qt;Lt!==null&&(Xt=Math.max(Xt,Lt.start*qt),me=Math.min(me,(Lt.start+Lt.count)*qt)),Zt!==null?(Xt=Math.max(Xt,0),me=Math.min(me,Zt.count)):de!=null&&(Xt=Math.max(Xt,0),me=Math.min(me,de.count));const Qe=me-Xt;if(Qe<0||Qe===1/0)return;At.setup(et,at,Pt,ot,Zt);let un,Le=he;if(Zt!==null&&(un=xt.get(Zt),Le=j,Le.setIndex(un)),et.isMesh)at.wireframe===!0?(jt.setLineWidth(at.wireframeLinewidth*dn()),Le.setMode(k.LINES)):Le.setMode(k.TRIANGLES);else if(et.isLine){let pn=at.linewidth;pn===void 0&&(pn=1),jt.setLineWidth(pn*dn()),et.isLineSegments?Le.setMode(k.LINES):et.isLineLoop?Le.setMode(k.LINE_LOOP):Le.setMode(k.LINE_STRIP)}else et.isPoints?Le.setMode(k.POINTS):et.isSprite&&Le.setMode(k.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)cc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))Le.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const pn=et._multiDrawStarts,Wt=et._multiDrawCounts,Zn=et._multiDrawCount,ue=Zt?xt.get(Zt).bytesPerElement:1,Kn=E.get(at).currentProgram.getUniforms();for(let Nn=0;Nn<Zn;Nn++)Kn.setValue(k,"_gl_DrawID",Nn),Le.render(pn[Nn]/ue,Wt[Nn])}else if(et.isInstancedMesh)Le.renderInstances(Xt,Qe,et.count);else if(ot.isInstancedBufferGeometry){const pn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Wt=Math.min(ot.instanceCount,pn);Le.renderInstances(Xt,Qe,Wt)}else Le.render(Xt,Qe)};function Zi(R,q,ot){R.transparent===!0&&R.side===Gn&&R.forceSinglePass===!1?(R.side=xi,R.needsUpdate=!0,Si(R,q,ot),R.side=xs,R.needsUpdate=!0,Si(R,q,ot),R.side=Gn):Si(R,q,ot)}this.compile=function(R,q,ot=null){ot===null&&(ot=R),N=bt.get(ot),N.init(q),B.push(N),ot.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(N.pushLight(et),et.castShadow&&N.pushShadow(et))}),R!==ot&&R.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(N.pushLight(et),et.castShadow&&N.pushShadow(et))}),N.setupLights();const at=new Set;return R.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Lt=et.material;if(Lt)if(Array.isArray(Lt))for(let zt=0;zt<Lt.length;zt++){const Pt=Lt[zt];Zi(Pt,ot,et),at.add(Pt)}else Zi(Lt,ot,et),at.add(Lt)}),N=B.pop(),at},this.compileAsync=function(R,q,ot=null){const at=this.compile(R,q,ot);return new Promise(et=>{function Lt(){if(at.forEach(function(zt){E.get(zt).currentProgram.isReady()&&at.delete(zt)}),at.size===0){et(R);return}setTimeout(Lt,10)}Ce.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ss=null;function Xa(R){Ss&&Ss(R)}function Wa(){Ki.stop()}function ys(){Ki.start()}const Ki=new uS;Ki.setAnimationLoop(Xa),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(R){Ss=R,dt.setAnimationLoop(R),R===null?Ki.stop():Ki.start()},dt.addEventListener("sessionstart",Wa),dt.addEventListener("sessionend",ys),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(lt===!0)return;const ot=dt.enabled===!0&&dt.isPresenting===!0,at=b!==null&&(Y===null||ot)&&b.begin(D,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(q),q=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,Y),N=bt.get(R,B.length),N.init(q),B.push(N),on.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Vt.setFromProjectionMatrix(on,Ca,q.reversedDepth),re=this.localClippingEnabled,Ht=Et.init(this.clippingPlanes,re),U=ae.get(R,z.length),U.init(),z.push(U),dt.enabled===!0&&dt.isPresenting===!0){const zt=D.xr.getDepthSensingMesh();zt!==null&&Ms(zt,q,-1/0,D.sortObjects)}Ms(R,q,0,D.sortObjects),U.finish(),D.sortObjects===!0&&U.sort(Tt,Nt),pe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,pe&&It.addToRenderList(U,R),this.info.render.frame++,Ht===!0&&Et.beginShadows();const et=N.state.shadowsArray;if(Gt.render(et,R,q),Ht===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&b.hasRenderPass())===!1){const zt=U.opaque,Pt=U.transmissive;if(N.setupLights(),q.isArrayCamera){const Zt=q.cameras;if(Pt.length>0)for(let qt=0,ce=Zt.length;qt<ce;qt++){const de=Zt[qt];An(zt,Pt,R,de)}pe&&It.render(R);for(let qt=0,ce=Zt.length;qt<ce;qt++){const de=Zt[qt];Fi(U,R,de,de.viewport)}}else Pt.length>0&&An(zt,Pt,R,q),pe&&It.render(R),Fi(U,R,q)}Y!==null&&W===0&&(Q.updateMultisampleRenderTarget(Y),Q.updateRenderTargetMipmap(Y)),at&&b.end(D),R.isScene===!0&&R.onAfterRender(D,R,q),At.resetDefaultState(),Z=-1,V=null,B.pop(),B.length>0?(N=B[B.length-1],Ht===!0&&Et.setGlobalState(D.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function Ms(R,q,ot,at){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){at&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(on);const zt=Yt.update(R),Pt=R.material;Pt.visible&&U.push(R,zt,Pt,ot,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const zt=Yt.update(R),Pt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),_e.copy(zt.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(on)),Array.isArray(Pt)){const Zt=zt.groups;for(let qt=0,ce=Zt.length;qt<ce;qt++){const de=Zt[qt],Xt=Pt[de.materialIndex];Xt&&Xt.visible&&U.push(R,zt,Xt,ot,_e.z,de)}}else Pt.visible&&U.push(R,zt,Pt,ot,_e.z,null)}}const Lt=R.children;for(let zt=0,Pt=Lt.length;zt<Pt;zt++)Ms(Lt[zt],q,ot,at)}function Fi(R,q,ot,at){const{opaque:et,transmissive:Lt,transparent:zt}=R;N.setupLightsView(ot),Ht===!0&&Et.setGlobalState(D.clippingPlanes,ot),at&&jt.viewport(O.copy(at)),et.length>0&&wn(et,q,ot),Lt.length>0&&wn(Lt,q,ot),zt.length>0&&wn(zt,q,ot),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function An(R,q,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[at.id]===void 0){const Xt=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[at.id]=new Da(1,1,{generateMipmaps:!0,type:Xt?Va:Pi,minFilter:_s,samples:Math.max(4,ze.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const Lt=N.state.transmissionRenderTarget[at.id],zt=at.viewport||O;Lt.setSize(zt.z*D.transmissionResolutionScale,zt.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget(),Zt=D.getActiveCubeFace(),qt=D.getActiveMipmapLevel();D.setRenderTarget(Lt),D.getClearColor(ft),St=D.getClearAlpha(),St<1&&D.setClearColor(16777215,.5),D.clear(),pe&&It.render(ot);const ce=D.toneMapping;D.toneMapping=wa;const de=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),N.setupLightsView(at),Ht===!0&&Et.setGlobalState(D.clippingPlanes,at),wn(R,ot,at),Q.updateMultisampleRenderTarget(Lt),Q.updateRenderTargetMipmap(Lt),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let me=0,Qe=q.length;me<Qe;me++){const un=q[me],{object:Le,geometry:pn,material:Wt,group:Zn}=un;if(Wt.side===Gn&&Le.layers.test(at.layers)){const ue=Wt.side;Wt.side=xi,Wt.needsUpdate=!0,Qi(Le,ot,at,pn,Wt,Zn),Wt.side=ue,Wt.needsUpdate=!0,Xt=!0}}Xt===!0&&(Q.updateMultisampleRenderTarget(Lt),Q.updateRenderTargetMipmap(Lt))}D.setRenderTarget(Pt,Zt,qt),D.setClearColor(ft,St),de!==void 0&&(at.viewport=de),D.toneMapping=ce}function wn(R,q,ot){const at=q.isScene===!0?q.overrideMaterial:null;for(let et=0,Lt=R.length;et<Lt;et++){const zt=R[et],{object:Pt,geometry:Zt,group:qt}=zt;let ce=zt.material;ce.allowOverride===!0&&at!==null&&(ce=at),Pt.layers.test(ot.layers)&&Qi(Pt,q,ot,Zt,ce,qt)}}function Qi(R,q,ot,at,et,Lt){R.onBeforeRender(D,q,ot,at,et,Lt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),et.onBeforeRender(D,q,ot,at,R,Lt),et.transparent===!0&&et.side===Gn&&et.forceSinglePass===!1?(et.side=xi,et.needsUpdate=!0,D.renderBufferDirect(ot,q,at,et,R,Lt),et.side=xs,et.needsUpdate=!0,D.renderBufferDirect(ot,q,at,et,R,Lt),et.side=Gn):D.renderBufferDirect(ot,q,at,et,R,Lt),R.onAfterRender(D,q,ot,at,et,Lt)}function Si(R,q,ot){q.isScene!==!0&&(q=Ue);const at=E.get(R),et=N.state.lights,Lt=N.state.shadowsArray,zt=et.state.version,Pt=Ut.getParameters(R,et.state,Lt,q,ot),Zt=Ut.getProgramCacheKey(Pt);let qt=at.programs;at.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,at.fog=q.fog;const ce=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;at.envMap=pt.get(R.envMap||at.environment,ce),at.envMapRotation=at.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",Te),qt=new Map,at.programs=qt);let de=qt.get(Zt);if(de!==void 0){if(at.currentProgram===de&&at.lightsStateVersion===zt)return or(R,Pt),de}else Pt.uniforms=Ut.getUniforms(R),R.onBeforeCompile(Pt,D),de=Ut.acquireProgram(Pt,Zt),qt.set(Zt,de),at.uniforms=Pt.uniforms;const Xt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=Et.uniform),or(R,Pt),at.needsLights=Ji(R),at.lightsStateVersion=zt,at.needsLights&&(Xt.ambientLightColor.value=et.state.ambient,Xt.lightProbe.value=et.state.probe,Xt.directionalLights.value=et.state.directional,Xt.directionalLightShadows.value=et.state.directionalShadow,Xt.spotLights.value=et.state.spot,Xt.spotLightShadows.value=et.state.spotShadow,Xt.rectAreaLights.value=et.state.rectArea,Xt.ltc_1.value=et.state.rectAreaLTC1,Xt.ltc_2.value=et.state.rectAreaLTC2,Xt.pointLights.value=et.state.point,Xt.pointLightShadows.value=et.state.pointShadow,Xt.hemisphereLights.value=et.state.hemi,Xt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Xt.spotLightMatrix.value=et.state.spotLightMatrix,Xt.spotLightMap.value=et.state.spotLightMap,Xt.pointShadowMatrix.value=et.state.pointShadowMatrix),at.currentProgram=de,at.uniformsList=null,de}function rr(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Zu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function or(R,q){const ot=E.get(R);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function Sn(R,q,ot,at,et){q.isScene!==!0&&(q=Ue),Q.resetTextureUnits();const Lt=q.fog,zt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?q.environment:null,Pt=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Fr,Zt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,qt=pt.get(at.envMap||zt,Zt),ce=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,de=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Xt=!!ot.morphAttributes.position,me=!!ot.morphAttributes.normal,Qe=!!ot.morphAttributes.color;let un=wa;at.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(un=D.toneMapping);const Le=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,pn=Le!==void 0?Le.length:0,Wt=E.get(at),Zn=N.state.lights;if(Ht===!0&&(re===!0||R!==V)){const mn=R===V&&at.id===Z;Et.setState(at,R,mn)}let ue=!1;at.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Zn.state.version||Wt.outputColorSpace!==Pt||et.isBatchedMesh&&Wt.batching===!1||!et.isBatchedMesh&&Wt.batching===!0||et.isBatchedMesh&&Wt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Wt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Wt.instancing===!1||!et.isInstancedMesh&&Wt.instancing===!0||et.isSkinnedMesh&&Wt.skinning===!1||!et.isSkinnedMesh&&Wt.skinning===!0||et.isInstancedMesh&&Wt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Wt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Wt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Wt.instancingMorph===!1&&et.morphTexture!==null||Wt.envMap!==qt||at.fog===!0&&Wt.fog!==Lt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Et.numPlanes||Wt.numIntersection!==Et.numIntersection)||Wt.vertexAlphas!==ce||Wt.vertexTangents!==de||Wt.morphTargets!==Xt||Wt.morphNormals!==me||Wt.morphColors!==Qe||Wt.toneMapping!==un||Wt.morphTargetsCount!==pn)&&(ue=!0):(ue=!0,Wt.__version=at.version);let Kn=Wt.currentProgram;ue===!0&&(Kn=Si(at,q,et));let Nn=!1,Qn=!1,pi=!1;const Ye=Kn.getUniforms(),yn=Wt.uniforms;if(jt.useProgram(Kn.program)&&(Nn=!0,Qn=!0,pi=!0),at.id!==Z&&(Z=at.id,Qn=!0),Nn||V!==R){jt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ye.setValue(k,"projectionMatrix",R.projectionMatrix),Ye.setValue(k,"viewMatrix",R.matrixWorldInverse);const wi=Ye.map.cameraPosition;wi!==void 0&&wi.setValue(k,ye.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&Ye.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ye.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,Qn=!0,pi=!0)}if(Wt.needsLights&&(Zn.state.directionalShadowMap.length>0&&Ye.setValue(k,"directionalShadowMap",Zn.state.directionalShadowMap,Q),Zn.state.spotShadowMap.length>0&&Ye.setValue(k,"spotShadowMap",Zn.state.spotShadowMap,Q),Zn.state.pointShadowMap.length>0&&Ye.setValue(k,"pointShadowMap",Zn.state.pointShadowMap,Q)),et.isSkinnedMesh){Ye.setOptional(k,et,"bindMatrix"),Ye.setOptional(k,et,"bindMatrixInverse");const mn=et.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ye.setValue(k,"boneTexture",mn.boneTexture,Q))}et.isBatchedMesh&&(Ye.setOptional(k,et,"batchingTexture"),Ye.setValue(k,"batchingTexture",et._matricesTexture,Q),Ye.setOptional(k,et,"batchingIdTexture"),Ye.setValue(k,"batchingIdTexture",et._indirectTexture,Q),Ye.setOptional(k,et,"batchingColorTexture"),et._colorsTexture!==null&&Ye.setValue(k,"batchingColorTexture",et._colorsTexture,Q));const Jn=ot.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&Ot.update(et,ot,Kn),(Qn||Wt.receiveShadow!==et.receiveShadow)&&(Wt.receiveShadow=et.receiveShadow,Ye.setValue(k,"receiveShadow",et.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&q.environment!==null&&(yn.envMapIntensity.value=q.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=t2()),Qn&&(Ye.setValue(k,"toneMappingExposure",D.toneMappingExposure),Wt.needsLights&&kn(yn,pi),Lt&&at.fog===!0&&ee.refreshFogUniforms(yn,Lt),ee.refreshMaterialUniforms(yn,at,ut,K,N.state.transmissionRenderTarget[R.id]),Zu.upload(k,rr(Wt),yn,Q)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Zu.upload(k,rr(Wt),yn,Q),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ye.setValue(k,"center",et.center),Ye.setValue(k,"modelViewMatrix",et.modelViewMatrix),Ye.setValue(k,"normalMatrix",et.normalMatrix),Ye.setValue(k,"modelMatrix",et.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const mn=at.uniformsGroups;for(let wi=0,$i=mn.length;wi<$i;wi++){const Ya=mn[wi];Dt.update(Ya,Kn),Dt.bind(Ya,Kn)}}return Kn}function kn(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ji(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,q,ot){const at=E.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=q,E.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ot=E.get(R);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0};const Bi=k.createFramebuffer();this.setRenderTarget=function(R,q=0,ot=0){Y=R,H=q,W=ot;let at=null,et=!1,Lt=!1;if(R){const Pt=E.get(R);if(Pt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(k.FRAMEBUFFER,Pt.__webglFramebuffer),O.copy(R.viewport),F.copy(R.scissor),st=R.scissorTest,jt.viewport(O),jt.scissor(F),jt.setScissorTest(st),Z=-1;return}else if(Pt.__webglFramebuffer===void 0)Q.setupRenderTarget(R);else if(Pt.__hasExternalTextures)Q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ce=R.depthTexture;if(Pt.__boundDepthTexture!==ce){if(ce!==null&&E.has(ce)&&(R.width!==ce.image.width||R.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(R)}}const Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Lt=!0);const qt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[q])?at=qt[q][ot]:at=qt[q],et=!0):R.samples>0&&Q.useMultisampledRTT(R)===!1?at=E.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?at=qt[ot]:at=qt,O.copy(R.viewport),F.copy(R.scissor),st=R.scissorTest}else O.copy(tt).multiplyScalar(ut).floor(),F.copy(mt).multiplyScalar(ut).floor(),st=Mt;if(ot!==0&&(at=Bi),jt.bindFramebuffer(k.FRAMEBUFFER,at)&&jt.drawBuffers(R,at),jt.viewport(O),jt.scissor(F),jt.setScissorTest(st),et){const Pt=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,ot)}else if(Lt){const Pt=q;for(let Zt=0;Zt<R.textures.length;Zt++){const qt=E.get(R.textures[Zt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Zt,qt.__webglTexture,ot,Pt)}}else if(R!==null&&ot!==0){const Pt=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pt.__webglTexture,ot)}Z=-1},this.readRenderTargetPixels=function(R,q,ot,at,et,Lt,zt,Pt=0){if(!(R&&R.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Zt=Zt[zt]),Zt){jt.bindFramebuffer(k.FRAMEBUFFER,Zt);try{const qt=R.textures[Pt],ce=qt.format,de=qt.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt),!ze.textureFormatReadable(ce)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(de)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-at&&ot>=0&&ot<=R.height-et&&k.readPixels(q,ot,at,et,Ct.convert(ce),Ct.convert(de),Lt)}finally{const qt=Y!==null?E.get(Y).__webglFramebuffer:null;jt.bindFramebuffer(k.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,q,ot,at,et,Lt,zt,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Zt=Zt[zt]),Zt)if(q>=0&&q<=R.width-at&&ot>=0&&ot<=R.height-et){jt.bindFramebuffer(k.FRAMEBUFFER,Zt);const qt=R.textures[Pt],ce=qt.format,de=qt.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt),!ze.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Xt),k.bufferData(k.PIXEL_PACK_BUFFER,Lt.byteLength,k.STREAM_READ),k.readPixels(q,ot,at,et,Ct.convert(ce),Ct.convert(de),0);const me=Y!==null?E.get(Y).__webglFramebuffer:null;jt.bindFramebuffer(k.FRAMEBUFFER,me);const Qe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await SM(k,Qe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Xt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Lt),k.deleteBuffer(Xt),k.deleteSync(Qe),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ot=0){const at=Math.pow(2,-ot),et=Math.floor(R.image.width*at),Lt=Math.floor(R.image.height*at),zt=q!==null?q.x:0,Pt=q!==null?q.y:0;Q.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,zt,Pt,et,Lt),jt.unbindTexture()};const cn=k.createFramebuffer(),va=k.createFramebuffer();this.copyTextureToTexture=function(R,q,ot=null,at=null,et=0,Lt=0){let zt,Pt,Zt,qt,ce,de,Xt,me,Qe;const un=R.isCompressedTexture?R.mipmaps[Lt]:R.image;if(ot!==null)zt=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,Zt=ot.isBox3?ot.max.z-ot.min.z:1,qt=ot.min.x,ce=ot.min.y,de=ot.isBox3?ot.min.z:0;else{const yn=Math.pow(2,-et);zt=Math.floor(un.width*yn),Pt=Math.floor(un.height*yn),R.isDataArrayTexture?Zt=un.depth:R.isData3DTexture?Zt=Math.floor(un.depth*yn):Zt=1,qt=0,ce=0,de=0}at!==null?(Xt=at.x,me=at.y,Qe=at.z):(Xt=0,me=0,Qe=0);const Le=Ct.convert(q.format),pn=Ct.convert(q.type);let Wt;q.isData3DTexture?(Q.setTexture3D(q,0),Wt=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Q.setTexture2DArray(q,0),Wt=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(q,0),Wt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const Zn=k.getParameter(k.UNPACK_ROW_LENGTH),ue=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Kn=k.getParameter(k.UNPACK_SKIP_PIXELS),Nn=k.getParameter(k.UNPACK_SKIP_ROWS),Qn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,un.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,un.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ce),k.pixelStorei(k.UNPACK_SKIP_IMAGES,de);const pi=R.isDataArrayTexture||R.isData3DTexture,Ye=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const yn=E.get(R),Jn=E.get(q),mn=E.get(yn.__renderTarget),wi=E.get(Jn.__renderTarget);jt.bindFramebuffer(k.READ_FRAMEBUFFER,mn.__webglFramebuffer),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let $i=0;$i<Zt;$i++)pi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(R).__webglTexture,et,de+$i),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Lt,Qe+$i)),k.blitFramebuffer(qt,ce,zt,Pt,Xt,me,zt,Pt,k.DEPTH_BUFFER_BIT,k.NEAREST);jt.bindFramebuffer(k.READ_FRAMEBUFFER,null),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(et!==0||R.isRenderTargetTexture||E.has(R)){const yn=E.get(R),Jn=E.get(q);jt.bindFramebuffer(k.READ_FRAMEBUFFER,cn),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,va);for(let mn=0;mn<Zt;mn++)pi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yn.__webglTexture,et,de+mn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yn.__webglTexture,et),Ye?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jn.__webglTexture,Lt,Qe+mn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Jn.__webglTexture,Lt),et!==0?k.blitFramebuffer(qt,ce,zt,Pt,Xt,me,zt,Pt,k.COLOR_BUFFER_BIT,k.NEAREST):Ye?k.copyTexSubImage3D(Wt,Lt,Xt,me,Qe+mn,qt,ce,zt,Pt):k.copyTexSubImage2D(Wt,Lt,Xt,me,qt,ce,zt,Pt);jt.bindFramebuffer(k.READ_FRAMEBUFFER,null),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ye?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Wt,Lt,Xt,me,Qe,zt,Pt,Zt,Le,pn,un.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Wt,Lt,Xt,me,Qe,zt,Pt,Zt,Le,un.data):k.texSubImage3D(Wt,Lt,Xt,me,Qe,zt,Pt,Zt,Le,pn,un):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Lt,Xt,me,zt,Pt,Le,pn,un.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Lt,Xt,me,un.width,un.height,Le,un.data):k.texSubImage2D(k.TEXTURE_2D,Lt,Xt,me,zt,Pt,Le,pn,un);k.pixelStorei(k.UNPACK_ROW_LENGTH,Zn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ue),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Kn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qn),Lt===0&&q.generateMipmaps&&k.generateMipmap(Wt),jt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Q.setTextureCube(R,0):R.isData3DTexture?Q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Q.setTexture2DArray(R,0):Q.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){H=0,W=0,Y=null,jt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),i.unpackColorSpace=We._getUnpackColorSpace()}}const e2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:kf,AddEquation:tr,AddOperation:Lx,AdditiveBlending:Wp,AgXToneMapping:cm,AlphaFormat:gm,AlwaysCompare:Gx,AlwaysDepth:$u,AlwaysStencilFunc:jp,AmbientLight:sS,ArrayCamera:oS,BackSide:xi,BasicDepthPacking:Ox,Box3:ar,BoxGeometry:sr,BufferAttribute:ga,BufferGeometry:ji,ByteType:hm,Camera:wm,CanvasTexture:Bo,CatmullRomCurve3:Qx,CineonToneMapping:om,ClampToEdgeWrapping:Ha,Clock:cS,Color:oe,ColorManagement:We,ConstantAlphaFactor:wx,ConstantColorFactor:Rx,CubeCamera:rS,CubeDepthTexture:Zx,CubeReflectionMapping:ir,CubeRefractionMapping:Ir,CubeTexture:bm,CubeUVReflectionMapping:hc,CullFaceBack:Xp,CullFaceFront:fx,CullFaceNone:ux,Curve:Kx,CustomBlending:dx,CustomToneMapping:lm,Data3DTexture:Yx,DataArrayTexture:xm,DataTexture:Tm,DepthFormat:ka,DepthStencilFormat:er,DepthTexture:Yo,DirectionalLight:$p,DoubleSide:Gn,DstAlphaFactor:Mx,DstColorFactor:Tx,EqualCompare:Bx,EqualDepth:ef,EquirectangularReflectionMapping:Xu,EquirectangularRefractionMapping:Wu,Euler:_a,EventDispatcher:Br,ExternalTexture:Am,Float32BufferAttribute:si,FloatType:pa,Fog:uc,FrontSide:xs,Frustum:nh,GLSL3:Kp,GreaterCompare:zx,GreaterDepth:af,GreaterEqualCompare:$f,GreaterEqualDepth:nf,Group:Fo,HalfFloatType:Va,HemisphereLight:aS,ImageUtils:Xx,InstancedBufferAttribute:Jp,InstancedMesh:jx,IntType:Xf,KeepStencilOp:Dr,Layers:eh,LessCompare:Fx,LessDepth:tf,LessEqualCompare:Jf,LessEqualDepth:Or,Light:Ko,LinearFilter:ai,LinearMipmapLinearFilter:_s,LinearMipmapNearestFilter:Yu,LinearSRGBColorSpace:Fr,LinearToneMapping:sm,LinearTransfer:lc,Material:Hr,MathUtils:bi,Matrix3:Se,Matrix4:rn,MaxEquation:_x,Mesh:ke,MeshBasicMaterial:fc,MeshDepthMaterial:nS,MeshDistanceMaterial:iS,MeshLambertMaterial:eS,MeshPhysicalMaterial:Ur,MeshStandardMaterial:gs,MinEquation:gx,MirroredRepeatWrapping:rf,MixOperation:Ux,MultiplyBlending:qp,MultiplyOperation:Vf,NearestFilter:ii,NearestMipmapLinearFilter:$l,NearestMipmapNearestFilter:Nx,NeutralToneMapping:um,NeverCompare:Px,NeverDepth:Ju,NoBlending:Ga,NoColorSpace:ms,NoToneMapping:wa,NormalBlending:Nr,NotEqualCompare:Hx,NotEqualDepth:sf,Object3D:hn,ObjectSpaceNormalMap:Ix,OneFactor:xx,OneMinusConstantAlphaFactor:Dx,OneMinusConstantColorFactor:Cx,OneMinusDstAlphaFactor:Ex,OneMinusDstColorFactor:bx,OneMinusSrcAlphaFactor:Qu,OneMinusSrcColorFactor:yx,OrthographicCamera:sh,PCFShadowMap:zo,PCFSoftShadowMap:hx,PMREMGenerator:Hf,PerspectiveCamera:Ri,Plane:$s,PlaneGeometry:za,PointLight:oc,Quaternion:zr,R11_EAC_Format:pf,RED_GREEN_RGTC2_Format:Ff,RED_RGTC1_Format:If,REVISION:Gf,RG11_EAC_Format:gf,RGBAFormat:ma,RGBAIntegerFormat:Kf,RGBA_ASTC_10x10_Format:wf,RGBA_ASTC_10x5_Format:Af,RGBA_ASTC_10x6_Format:Rf,RGBA_ASTC_10x8_Format:Cf,RGBA_ASTC_12x10_Format:Df,RGBA_ASTC_12x12_Format:Uf,RGBA_ASTC_4x4_Format:vf,RGBA_ASTC_5x4_Format:xf,RGBA_ASTC_5x5_Format:Sf,RGBA_ASTC_6x5_Format:yf,RGBA_ASTC_6x6_Format:Mf,RGBA_ASTC_8x5_Format:Ef,RGBA_ASTC_8x6_Format:Tf,RGBA_ASTC_8x8_Format:bf,RGBA_BPTC_Format:Lf,RGBA_ETC2_EAC_Format:df,RGBA_PVRTC_2BPPV1_Format:uf,RGBA_PVRTC_4BPPV1_Format:cf,RGBA_S3TC_DXT1_Format:nc,RGBA_S3TC_DXT3_Format:ic,RGBA_S3TC_DXT5_Format:ac,RGBFormat:_m,RGB_BPTC_SIGNED_Format:Nf,RGB_BPTC_UNSIGNED_Format:Of,RGB_ETC1_Format:ff,RGB_ETC2_Format:hf,RGB_PVRTC_2BPPV1_Format:lf,RGB_PVRTC_4BPPV1_Format:of,RGB_S3TC_DXT1_Format:ec,RGFormat:Pr,RGIntegerFormat:Zf,RawShaderMaterial:tS,Ray:Em,Raycaster:lS,RedFormat:qf,RedIntegerFormat:jf,ReinhardToneMapping:rm,RenderTarget:Wx,RepeatWrapping:Go,ReverseSubtractEquation:mx,RingGeometry:ih,SIGNED_R11_EAC_Format:mf,SIGNED_RED_GREEN_RGTC2_Format:Bf,SIGNED_RED_RGTC1_Format:Pf,SIGNED_RG11_EAC_Format:_f,SRGBColorSpace:Yn,SRGBTransfer:$e,Scene:Sm,ShaderChunk:Ee,ShaderLib:Ra,ShaderMaterial:La,ShortType:dm,Source:th,Sphere:Zo,SphereGeometry:ah,SpotLight:ju,SrcAlphaFactor:Ku,SrcAlphaSaturateFactor:Ax,SrcColorFactor:Sx,StaticDrawUsage:Zp,SubtractEquation:px,SubtractiveBlending:Yp,TangentSpaceNormalMap:Qf,Texture:di,Triangle:da,UVMapping:fm,Uint16BufferAttribute:ym,Uint32BufferAttribute:Mm,UniformsLib:Bt,UniformsUtils:$x,UnsignedByteType:Pi,UnsignedInt101111Type:mm,UnsignedInt248Type:ko,UnsignedInt5999Type:pm,UnsignedIntType:Ua,UnsignedShort4444Type:Wf,UnsignedShort5551Type:Yf,UnsignedShortType:Vo,VSMShadowMap:Po,Vector2:Re,Vector3:$,Vector4:bn,WebGLCoordinateSystem:Ca,WebGLCubeRenderTarget:Dm,WebGLRenderTarget:Da,WebGLRenderer:gS,WebGLUtils:mS,WebGPUCoordinateSystem:Xo,WebXRController:qu,ZeroFactor:vx,createCanvasElement:Vx,error:Xe,log:Qp,warn:fe,warnOnce:cc},Symbol.toStringTag,{value:"Module"}));class n2 extends Sm{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new sr;t.deleteAttribute("uv");const i=new gs({side:xi}),s=new gs,l=new oc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new ke(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new jx(t,s,6),d=new hn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const m=new ke(t,No(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new ke(t,No(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new ke(t,No(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new ke(t,No(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new ke(t,No(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new ke(t,No(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function No(r){return new eS({color:0,emissive:16777215,emissiveIntensity:r})}const i2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],a2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],s2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],r2=["LOW","MEDIUM","HIGH","EXTREME"],o2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],l2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],c2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},u2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},f2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},h2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},d2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function _S(r){return(r-90)*Math.PI/180}function p2(r,t,i,s){const l=_S(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function Oo(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function vS(r){Oo("subject",r.subject,i2),Oo("domain",r.domain,a2),Oo("verb",r.verb,s2),Oo("magnitude",r.magnitude,r2),Oo("time",r.time,o2),Oo("certainty",r.certainty,l2)}function m2(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const h=d2[l][c];if(!h)throw new Error(`Unknown ${l} token: ${c}`);return h}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return vS(s),s}function g2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,h=(-90+l*36)*(Math.PI/180),d=i.x+Math.cos(h)*c,m=i.y+Math.sin(h)*c;l===0&&r.beginPath(),l===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),h=i.x+Math.cos(c)*6,d=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(h,d):r.lineTo(h,d)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Kl(r,t,i,s,l){const c=i.x-t.x,h=i.y-t.y,d=Math.sqrt(c*c+h*h)||1,m=c/d,p=h/d,_=-p,x=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+x*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-x*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function Ql(r,t,i,s,l,c){const h=h2[t.certainty];if(!(h<=0)){r.save(),r.fillStyle=l;for(let d=1;d<=h;d+=1){const m=d/(h+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const x=1-m;p=x*x*i.x+2*x*m*c.x+m*m*s.x,_=x*x*i.y+2*x*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function _2(r,t,i){vS(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),h=s*.5,d=l*.5,m=i?.backgroundColor,p=i?.lineColor,_=i?.gridColor;r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(h,d,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(h,d,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(h,d,c*.12,0,Math.PI*2),r.stroke();const x=c2[t.domain],g=u2[t.time]*c,y=f2[t.magnitude]*c,T=p2(h,d,g,x),w=_S(x),M=Math.cos(w),S=Math.sin(w),C=-S,P=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let U={x:T.x,y:T.y},N={x:T.x+M*y,y:T.y+S*y},z;if(t.verb==="EXISTS")U={x:T.x-C*(y*.48),y:T.y-P*(y*.48)},N={x:T.x+C*(y*.48),y:T.y+P*(y*.48)},r.beginPath(),r.moveTo(U.x,U.y),r.lineTo(N.x,N.y),r.stroke(),Ql(r,t,U,N,p);else if(t.verb==="DECLINES")N={x:T.x-M*y,y:T.y-S*y},r.beginPath(),r.moveTo(U.x,U.y),r.lineTo(N.x,N.y),r.stroke(),Kl(r,U,N,p,7),Ql(r,t,U,N,p);else if(t.verb==="TRANSFORMS")z={x:T.x+C*(y*.34)+M*(y*.34),y:T.y+P*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(U.x,U.y),r.quadraticCurveTo(z.x,z.y,N.x,N.y),r.stroke(),Kl(r,z,N,p,7),Ql(r,t,U,N,p,z);else if(t.verb==="INFLUENCES"){const b={x:T.x+C*3.4,y:T.y+P*3.4},D={x:N.x+C*3.4,y:N.y+P*3.4},lt={x:T.x-C*3.4,y:T.y-P*3.4},H={x:N.x-C*3.4,y:N.y-P*3.4};r.beginPath(),r.moveTo(b.x,b.y),r.lineTo(D.x,D.y),r.moveTo(lt.x,lt.y),r.lineTo(H.x,H.y),r.stroke(),Kl(r,b,D,p,6.6),Kl(r,lt,H,p,6.6),Ql(r,t,b,D,p)}else r.beginPath(),r.moveTo(U.x,U.y),r.lineTo(N.x,N.y),r.stroke(),Kl(r,U,N,p,7),Ql(r,t,U,N,p);r.fillStyle=p,r.beginPath(),r.arc(h,d,5,0,Math.PI*2),r.fill(),g2(r,t.subject,T,p)}function v2(r,t,i){const s=m2(t);_2(r,s,i)}const x2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},zp=(r,t,i,s,l)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:x2}),Hu=[zp("fallback-01","INTELLIGENSPARTIET","Politisk AI-kapasitet for et samfunn i rask omforming.","right",.1),zp("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42),zp("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74)],S2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim().toUpperCase(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim()}),Aa=r=>{let t=r%1;return t<0&&(t+=1),t},y2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),Aa(r+l*(1-Math.exp(-i*s)))},rx=12,Hp=9,Gp=.12,ox=-1,Vp=2.4,M2=.3,E2=1.2,T2=.3,lx=6741503,b2=5,A2=3.2,R2=.35,C2=.25,Gu=400,w2=2.5,cx=16755251,Vu=3,D2=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),U2=(r,t,i,s,l,c)=>{xS(r,t,l).forEach((d,m)=>{r.fillText(d,i,s+m*c)})},xS=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let h=0;h<s.length;h+=1){const d=s[h];if(!d)continue;const m=`${c}${d} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${d} `):c=m}return c.trim()&&l.push(c.trim()),l},L2=/\(\s*bold\s*\)/gi,N2=/\(\s*new\s*line\s*\)/gi,O2=/\(\s*new\s*paragraph\s*\)/gi,I2=r=>{const i=r.replace(/\r\n?/g,`
`).replace(O2,`

`).replace(N2,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const d=/\(\s*bold\s*\)/i.test(c),m=c.replace(L2,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:d,paragraphBreak:s}),s=!1}),l},P2=(r,t,i,s,l,c,h,d,m=.6)=>{const p=I2(t);let _=s;p.forEach((x,g)=>{g>0&&x.paragraphBreak&&(_+=c*m),r.font=x.bold?d:h,xS(r,x.text,l).forEach(T=>{r.fillText(T,i,_),_+=c})}),r.font=h},im=Math.PI*2,wr=r=>Math.min(1,Math.max(0,r)),Jl=(r,t,i,s,l)=>{const c=im*(r*i+s),h=im*(t*i+l),d=Math.sin(c)*Math.cos(h),m=.5*Math.sin((c+h)*.65+s*6.37);return d+m},ku=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Bo(s)},ha=(r,t,i,s,l=!1)=>{r.wrapS=Go,r.wrapT=Go,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=_s,r.magFilter=ai,l&&(r.colorSpace=Yn),r.needsUpdate=!0},kp=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:h,microFreq:d,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:x,seamDepth:g,seamWidth:y,roughnessBase:T,roughnessRange:w,normalStrength:M,aoStrength:S}=r,C=t*i,P=new oe(l),U=new Float32Array(C);let N=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY;for(let Z=0;Z<i;Z+=1)for(let V=0;V<t;V+=1){const O=Z*t+V,F=V/t,st=Z/i,ft=Jl(F,st,c,s*.11,s*.23),St=Jl(F,st,h,s*.41+.18,s*.29+.07),L=Jl(F,st,d,s*.71+.43,s*.53+.31),K=Math.sin(im*((F+st*.33)*m+s*.17));let ut=0;if(_!=="none"&&x>0){const tt=(_==="x"?F:st)*x%1,mt=Math.min(tt,1-tt);ut=Math.exp(-Math.pow(mt/Math.max(1e-4,y),2))}const Tt=ft*.6+St*.28+L*.12+K*p-ut*g;U[O]=Tt,Tt<N&&(N=Tt),Tt>z&&(z=Tt)}const B=new Float32Array(C),b=Math.max(1e-4,z-N),D=new Uint8ClampedArray(C*4),lt=new Uint8ClampedArray(C*4),H=new Uint8ClampedArray(C*4);for(let Z=0;Z<i;Z+=1)for(let V=0;V<t;V+=1){const O=Z*t+V,F=O*4,st=V/t,ft=Z/i,St=wr((U[O]-N)/b);B[O]=St;const L=Jl(st,ft,h*.6,s*.19+.62,s*.73+.14)*.5+.5,K=wr(.78+(St-.5)*.24+(L-.5)*.12),ut=Jl(st,ft,c*.5,s*.37+.89,s*.13+.44),Tt=1+ut*.017,Nt=1+ut*.007,tt=1-ut*.013,mt=wr(T+(1-St)*w+(L-.5)*.14),Mt=wr(.94-(1-St)*S);D[F]=Math.round(wr(P.r*K*Tt)*255),D[F+1]=Math.round(wr(P.g*K*Nt)*255),D[F+2]=Math.round(wr(P.b*K*tt)*255),D[F+3]=255;const Vt=Math.round(mt*255);lt[F]=Vt,lt[F+1]=Vt,lt[F+2]=Vt,lt[F+3]=255;const Ht=Math.round(Mt*255);H[F]=Ht,H[F+1]=Ht,H[F+2]=Ht,H[F+3]=255}const W=(Z,V)=>{const O=(Z+t)%t,F=(V+i)%i;return B[F*t+O]},Y=new Uint8ClampedArray(C*4);for(let Z=0;Z<i;Z+=1)for(let V=0;V<t;V+=1){const F=(Z*t+V)*4,st=W(V+1,Z)-W(V-1,Z),ft=W(V,Z+1)-W(V,Z-1),St=-st*M,L=-ft*M,K=1,ut=1/Math.hypot(St,L,K);Y[F]=Math.round((St*ut*.5+.5)*255),Y[F+1]=Math.round((L*ut*.5+.5)*255),Y[F+2]=Math.round((K*ut*.5+.5)*255),Y[F+3]=255}return{albedo:ku(D,t,i),normal:ku(Y,t,i),roughness:ku(lt,t,i),ao:ku(H,t,i)}},F2=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,h=0;const d=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],h+=s[p+2];l/=d*255,c/=d*255,h/=d*255;const m=l*.2126+c*.7152+h*.0722;return{color:new oe(l,c,h),luminance:m}};function B2(){const r=Hn.useRef(null),t=Hn.useRef([]),i=Hn.useRef(Gp),s=Hn.useRef(Gp);Hn.useEffect(()=>{const N=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=N,document.documentElement.style.overscrollBehavior=""}},[]);const[l,c]=Hn.useState(Hu),[h,d]=Hn.useState([]),[m,p]=Hn.useState(Hu[0].id),[_,x]=Hn.useState(!0),[g,y]=Hn.useState(null),[T,w]=Hn.useState(!1);Hn.useEffect(()=>{let N=!1;return(async()=>{try{const B=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),b=B.headers.get("content-type")??"";if(!B.ok)throw new Error(`HTTP ${B.status} while loading glyph language map`);if(!b.toLowerCase().includes("application/json")){const H=await B.text();throw new Error(`Expected JSON but got '${b||"unknown"}' (${H.slice(0,120)})`)}const D=await B.json();if(!Array.isArray(D?.items))throw new Error("Glyph language payload missing 'items' array");const lt=D.items.map((H,W)=>S2(H,W)).filter(H=>H.enabled!==!1);if(N)return;d(lt)}catch(B){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",B),N)return;d([])}})(),()=>{N=!0}},[]);const M=Hn.useMemo(()=>h.filter(N=>N.enabled!==!1&&typeof N.canonical=="string"&&N.canonical.trim().length>0),[h]),S=Hn.useMemo(()=>{const N=new Map;if(!l.length||!M.length)return N;const z=D=>{const lt=Aa(D);return Aa(Gp-lt)},B=[...l].sort((D,lt)=>{const H=typeof D.installation?.placement_t=="number"?D.installation.placement_t:0,W=typeof lt.installation?.placement_t=="number"?lt.installation.placement_t:0,Y=z(H),Z=z(W);return Y===Z?D.id.localeCompare(lt.id):Y-Z}),b=Math.min(B.length,M.length);for(let D=0;D<b;D+=1)N.set(B[D].id,M[D]);return N},[l,M]),C=Hn.useMemo(()=>{const N=new Map;return S.forEach((z,B)=>{z.canonical&&N.set(B,z.canonical)}),N},[S]),P=Hn.useMemo(()=>{const N=new Map;return S.forEach((z,B)=>{N.set(B,{label:z.label||"",note:z.note||""})}),N},[S]);Hn.useEffect(()=>{let N=!1;return(async()=>{x(!0),y(null);try{const B=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),b=B.headers.get("content-type")??"";if(!B.ok)throw new Error(`HTTP ${B.status} while loading panel data`);if(!b.toLowerCase().includes("application/json")){const Z=await B.text();throw new Error(`Expected JSON but got '${b||"unknown"}' (${Z.slice(0,120)})`)}const D=await B.json();if(!Array.isArray(D?.panels))throw new Error("Panel payload missing 'panels' array");const lt=typeof D.media_root=="string"?D.media_root.replace(/\/+$/,""):"",H=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",W=Z=>/^https?:\/\//i.test(Z)&&H?`/proxy?url=${encodeURIComponent(Z)}`:Z,Y=D.panels.map(Z=>{const V=typeof Z?.source=="string"?Z.source.replace(/^\/+/,""):"",O=V?lt?`${lt}/${V}`:`/${V}`:void 0,F=O?W(O):void 0,st=typeof Z?.poster=="string"?Z.poster.replace(/^\/+/,""):"",ft=st?lt?`${lt}/${st}`:`/${st}`:void 0,St=ft?W(ft):void 0,L=Z?.type==="image"||Z?.type==="video"?Z.type:"text";return{...Z,kind:L,type:L,title:Z?.content?.title??"Uten tittel",body:Z?.content?.description??"",cta:Z?.content?.cta,poster:St,image:L==="image"?F:void 0,video:L==="video"?F:void 0}});if(Y.length===0)throw new Error("Panel payload contained 0 panels");if(N)return;c(Y),p(Y[0].id)}catch(B){if(console.error("Failed to load panels; using fallback data.",B),N)return;c(Hu),p(Hu[0].id),y("Kunne ikke laste media-paneler. Viser lokal fallback.")}finally{N||x(!1)}})(),()=>{N=!0}},[]);const U=Hn.useMemo(()=>l.find(N=>N.id===m)??l[0]??{title:"",body:""},[m,l]);return Hn.useEffect(()=>{if(l.length===0)return;const N=r.current;if(!N)return;w(!1);let z=!1,B=()=>{};return(()=>{if(z||!N)return;t.current=[];const D=window.matchMedia("(prefers-reduced-motion: reduce)"),lt=window.matchMedia("(max-width: 767px)"),H=D.matches,W=lt.matches,Y=new Sm;Y.background=new oe(987671),Y.fog=new uc(987671,38,230);const Z=new Ri(W?72:64,N.clientWidth/N.clientHeight,.1,1200),V=new gS({antialias:!W,alpha:!1,powerPreference:"high-performance"});V.setPixelRatio(Math.min(window.devicePixelRatio,W?1:1.5)),V.setSize(N.clientWidth,N.clientHeight),V.outputColorSpace=Yn,V.toneMapping=kf,V.toneMappingExposure=W?.76:.72,V.shadowMap.enabled=!W,V.shadowMap.type=zo,N.appendChild(V.domElement);const O=new Hf(V),F=O.fromScene(new n2,.06);Y.environment=F.texture;const st=new sS(16185599,.05);Y.add(st);const ft=new aS(14739442,1777446,.08);Y.add(ft);const St=D2(e2),L=new Qx(St,!0,"catmullrom",.17),K=W?180:300,ut=Math.min(8,V.capabilities.getMaxAnisotropy()),Tt=W?256:512,Nt=kp({width:Tt,height:Tt,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});ha(Nt.albedo,4.8,24,ut,!0),ha(Nt.normal,4.8,24,ut),ha(Nt.roughness,4.8,24,ut),ha(Nt.ao,4.8,24,ut);const tt=kp({width:Tt,height:Tt,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});ha(tt.albedo,2.2,24,ut,!0),ha(tt.normal,2.2,24,ut),ha(tt.roughness,2.2,24,ut),ha(tt.ao,2.2,24,ut);const mt=kp({width:Tt,height:Tt,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});ha(mt.albedo,3.4,24,ut,!0),ha(mt.normal,3.4,24,ut),ha(mt.roughness,3.4,24,ut),ha(mt.ao,3.4,24,ut);const Mt=new Ur({color:9607586,map:Nt.albedo,normalMap:Nt.normal,normalScale:new Re(.32,.32),roughnessMap:Nt.roughness,roughness:.38,metalness:0,aoMap:Nt.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Gn}),Vt=new Ur({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Gn}),Ht=new Ur({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new oe(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Gn}),re=()=>{const Rt=[],Jt=new $(0,1,0);let $t=new $(1,0,0);for(let wt=0;wt<=K;wt+=1){const En=wt/K,oi=L.getPointAt(En),be=En===1?oi.clone().sub(L.getPointAt(En-.001)).normalize():L.getPointAt(En+.001).sub(oi).normalize();let Ie=new $().crossVectors(be,Jt).normalize();Ie.lengthSq()<1e-4&&(Ie=$t.clone()),Ie.dot($t)<0&&Ie.multiplyScalar(-1),$t=Ie.clone();const Tn=new $().crossVectors(Ie,be).normalize();Rt.push({pt:oi,right:Ie,up:Tn,t:En})}const Qt=(wt,En,oi=!1)=>{const be=[],Ie=[],Tn=[];for(let ve=0;ve<=K;ve+=1){const On=Rt[ve],mi=wt(On),li=En(On);be.push(mi.x,mi.y,mi.z,li.x,li.y,li.z),Ie.push(0,On.t,1,On.t)}for(let ve=0;ve<K;ve+=1){const On=ve*2,mi=On+1,li=On+2,Mi=On+3;oi?Tn.push(On,li,mi,li,Mi,mi):Tn.push(On,mi,li,li,mi,Mi)}const Dn=new ji;Dn.setAttribute("position",new si(be,3));const yi=new si(Ie,2);return Dn.setAttribute("uv",yi),Dn.setAttribute("uv2",yi.clone()),Dn.setIndex(Tn),Dn.computeVertexNormals(),Dn},Ft=rx*.5,ne=Hp*.5,Ne=Qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ne)).add(wt.right.clone().multiplyScalar(-Ft)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ne)).add(wt.right.clone().multiplyScalar(Ft))),qe=Qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne)).add(wt.right.clone().multiplyScalar(-Ft)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne)).add(wt.right.clone().multiplyScalar(Ft)),!0),Oe=Qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ne)).add(wt.right.clone().multiplyScalar(-Ft)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne)).add(wt.right.clone().multiplyScalar(-Ft)),!0),ri=Qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ne)).add(wt.right.clone().multiplyScalar(Ft)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne)).add(wt.right.clone().multiplyScalar(Ft))),$n=.08,Mn=.015,Ge=Qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne-$n)).add(wt.right.clone().multiplyScalar(-Ft+Mn)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne)).add(wt.right.clone().multiplyScalar(-Ft+Mn)),!0),je=Qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne-$n)).add(wt.right.clone().multiplyScalar(Ft-Mn)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne)).add(wt.right.clone().multiplyScalar(Ft-Mn)),!1),vn=.22,Ve=.018,ti=Qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ne)).add(wt.right.clone().multiplyScalar(-Ft+Ve)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ne+vn)).add(wt.right.clone().multiplyScalar(-Ft+Ve)),!0),ea=Qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ne)).add(wt.right.clone().multiplyScalar(Ft-Ve)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ne+vn)).add(wt.right.clone().multiplyScalar(Ft-Ve)),!1),Di=.14,na=Qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne-.05)).add(wt.right.clone().multiplyScalar(-Di)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ne-.05)).add(wt.right.clone().multiplyScalar(Di)),!0);return{floorGeo:Ne,ceilGeo:qe,leftGeo:Oe,rightGeo:ri,leftSkirtGeo:ti,rightSkirtGeo:ea,trackRailGeo:na,leftCrownGeo:Ge,rightCrownGeo:je}},{floorGeo:on,ceilGeo:ye,leftGeo:_e,rightGeo:Ue,leftSkirtGeo:pe,rightSkirtGeo:dn,trackRailGeo:k,leftCrownGeo:ln,rightCrownGeo:Ce}=re(),ze=new ke(on,Mt),jt=new ke(ye,Ht),I=new ke(_e,Vt),E=new ke(Ue,Vt),Q=new Ur({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),pt=new gs({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Gn}),xt=new ke(pe,pt),ht=new ke(dn,pt);xt.receiveShadow=!0,ht.receiveShadow=!0;const Yt=new ke(ln,pt),Ut=new ke(Ce,pt);Yt.receiveShadow=!1,Ut.receiveShadow=!1;const ee=new Ur({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Gn}),ae=new ke(k,ee);ae.receiveShadow=!1,ze.receiveShadow=!0,ze.castShadow=!0,jt.receiveShadow=!0,jt.castShadow=!0,I&&(I.receiveShadow=!0,I.castShadow=!0),E&&(E.receiveShadow=!0,E.castShadow=!0),Y.add(ze),Y.add(jt),I&&Y.add(I),E&&Y.add(E),Y.add(xt),Y.add(ht),Y.add(Yt),Y.add(Ut),Y.add(ae);const bt=new $(0,1,0),Et=new hn,Gt=new hn,It=new hn;Y.add(Et),Y.add(Gt),Y.add(It);const Ot=new ju(16773598,W?16:24,34,Math.PI/8.4,.44,2);Ot.target=Et,Ot.castShadow=!W,Ot.castShadow&&(Ot.shadow.mapSize.width=2048,Ot.shadow.mapSize.height=2048,Ot.shadow.bias=-35e-5,Ot.shadow.normalBias=.012,Ot.shadow.camera.near=.4,Ot.shadow.camera.far=34),Y.add(Ot);const he=new ju(12571903,W?6:9,34,Math.PI/6.5,.68,2);he.target=Gt,he.castShadow=!1,Y.add(he);const j=new ju(14083583,W?5:7,28,Math.PI/7.8,.6,2);j.target=It,j.castShadow=!1,Y.add(j);const Ct=new hn,At=new hn;Y.add(Ct),Y.add(At);const Dt=new $p(16774374,0);if(Dt.target=Ct,Dt.castShadow=!W,Dt.castShadow){Dt.shadow.mapSize.width=4096,Dt.shadow.mapSize.height=4096,Dt.shadow.bias=-2e-4,Dt.shadow.normalBias=.005;const Rt=320;Dt.shadow.camera.left=-Rt,Dt.shadow.camera.right=Rt,Dt.shadow.camera.top=Rt,Dt.shadow.camera.bottom=-Rt,Dt.shadow.camera.near=1,Dt.shadow.camera.far=1200}Y.add(Dt);const yt=new $p(9090280,0);yt.target=At,Y.add(yt),on.computeBoundingBox(),on.computeBoundingSphere(),ye.computeBoundingBox(),ye.computeBoundingSphere(),_e.computeBoundingBox(),_e.computeBoundingSphere(),Ue.computeBoundingBox(),Ue.computeBoundingSphere();const kt=l.some(Rt=>Rt.installation?.mount_type==="continuous_led_wall"||Rt.installation?.mount_type==="jutting_half_wall")?l:W?l.filter((Rt,Jt)=>Jt%2===0):l,se=[],He=[],Te=[],Vn=[],Ci=[],Zi=[],Ss=[],Xa=Rt=>{if(!Rt.paused&&Rt.currentTime>0)return;const Jt=Rt.play();Jt&&typeof Jt.catch=="function"&&Jt.catch(()=>{})},Wa=setInterval(()=>{let Rt=!0;Zi.forEach(Jt=>{(Jt.paused||Jt.readyState<2)&&(Rt=!1,Xa(Jt))}),Rt&&Zi.length>0&&clearInterval(Wa)},500);Ci.push(()=>clearInterval(Wa));const ys=new sr(1,1,.2),Ki=new za(.82,.82),Ms=new Ur({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),Fi=(Rt,Jt)=>{const Qt=document.createElement("canvas");Qt.width=512,Qt.height=512;const Ft=Qt.getContext("2d");Ft.clearRect(0,0,512,512);const ne=C.get(Jt);if(ne)try{v2(Ft,ne,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const je=new Bo(Qt);return je.colorSpace=Yn,je}catch(je){console.warn(`Invalid glyph canonical sentence for panel '${Jt}': '${ne}'. Falling back to procedural glyph.`,je)}const Ne=512/2,qe=512/2,Oe=Rt*137.508;Ft.fillStyle="rgba(6,14,24,0.7)",Ft.beginPath(),Ft.arc(Ne,qe,512*.42,0,Math.PI*2),Ft.fill(),Ft.strokeStyle="rgba(102,221,255,0.95)",Ft.lineWidth=2.5,Ft.lineCap="round",Ft.beginPath(),Ft.arc(Ne,qe,512*.38,0,Math.PI*2),Ft.stroke();const ri=3+Rt%4;for(let je=0;je<ri;je++){const vn=je/ri*Math.PI*2+Oe,Ve=512*.08,ti=512*.32;Ft.beginPath(),Ft.moveTo(Ne+Math.cos(vn)*Ve,qe+Math.sin(vn)*Ve),Ft.lineTo(Ne+Math.cos(vn)*ti,qe+Math.sin(vn)*ti),Ft.stroke()}const $n=2+Rt%3;for(let je=0;je<$n;je++){const vn=512*(.15+je*.09),Ve=Oe+je*1.2;Ft.beginPath(),Ft.arc(Ne,qe,vn,Ve,Ve+Math.PI*(.4+Rt%3*.2)),Ft.stroke()}Ft.fillStyle="rgba(102,221,255,0.85)";const Mn=3+Rt%5;for(let je=0;je<Mn;je++){const vn=Oe+je/Mn*Math.PI*2,Ve=512*(.2+je%3*.06);Ft.beginPath(),Ft.arc(Ne+Math.cos(vn)*Ve,qe+Math.sin(vn)*Ve,4,0,Math.PI*2),Ft.fill()}Ft.strokeStyle="rgba(102,221,255,0.5)",Ft.lineWidth=1.5,Ft.beginPath(),Ft.arc(Ne,qe,512*.12,0,Math.PI*2),Ft.stroke(),Ft.fillStyle="rgba(102,221,255,0.95)",Ft.beginPath(),Ft.arc(Ne,qe,6,0,Math.PI*2),Ft.fill();const Ge=new Bo(Qt);return Ge.colorSpace=Yn,Ge},An=(Rt,Jt)=>{const $t=document.createElement("canvas");$t.width=1024,$t.height=640;const Qt=$t.getContext("2d");Qt.fillStyle="rgba(8,12,18,0.88)",Qt.beginPath(),Qt.roundRect(16,16,992,608,24),Qt.fill(),Qt.strokeStyle="rgba(102,221,255,0.25)",Qt.lineWidth=2,Qt.beginPath(),Qt.roundRect(16,16,992,608,24),Qt.stroke(),Qt.fillStyle="rgba(102,221,255,0.95)",Qt.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",U2(Qt,Rt.toUpperCase(),60,100,900,58),Qt.strokeStyle="rgba(102,221,255,0.3)",Qt.lineWidth=2,Qt.beginPath(),Qt.moveTo(60,180),Qt.lineTo(960,180),Qt.stroke(),Qt.fillStyle="rgba(220,230,240,0.9)";const Ft="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",ne="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";Qt.font=Ft,P2(Qt,Jt,60,230,900,42,Ft,ne);const Ne=new Bo($t);return Ne.colorSpace=Yn,Ne},wn=()=>{const Jt=document.createElement("canvas");Jt.width=512,Jt.height=512;const $t=Jt.getContext("2d"),Qt=512/2,Ft=512/2;$t.beginPath(),$t.arc(Qt,Ft,512*.42,0,Math.PI*2),$t.fillStyle="rgba(6,14,24,0.7)",$t.fill(),$t.strokeStyle="rgba(255,170,51,0.9)",$t.lineWidth=6,$t.beginPath(),$t.arc(Qt,Ft,512*.38,0,Math.PI*2),$t.stroke();const ne=8;for(let qe=0;qe<ne;qe++){const Oe=qe/ne*Math.PI*2-Math.PI/2;$t.strokeStyle=`rgba(255,${170+Math.round(Math.sin(qe)*40)},51,0.8)`,$t.lineWidth=4,$t.beginPath(),$t.moveTo(Qt+Math.cos(Oe)*512*.12,Ft+Math.sin(Oe)*512*.12),$t.lineTo(Qt+Math.cos(Oe)*512*.34,Ft+Math.sin(Oe)*512*.34),$t.stroke();const ri=Qt+Math.cos(Oe)*512*.34,$n=Ft+Math.sin(Oe)*512*.34,Mn=512*.06;$t.beginPath(),$t.moveTo(ri,$n),$t.lineTo(ri-Mn*Math.cos(Oe-.4),$n-Mn*Math.sin(Oe-.4)),$t.moveTo(ri,$n),$t.lineTo(ri-Mn*Math.cos(Oe+.4),$n-Mn*Math.sin(Oe+.4)),$t.stroke()}$t.beginPath(),$t.arc(Qt,Ft,512*.06,0,Math.PI*2),$t.fillStyle="rgba(255,200,80,0.95)",$t.fill();const Ne=new Bo(Jt);return Ne.colorSpace=Yn,Ne},Qi=Rt=>{const Jt=Aa(Rt),$t=L.getPointAt(Jt),Ft=L.getPointAt(Aa(Jt+.002)).clone().sub($t).normalize();let ne=new $().crossVectors(Ft,bt).normalize();ne.lengthSq()<1e-4&&(ne=new $(1,0,0));const Ne=new $().crossVectors(ne,Ft).normalize();return{point:$t,tangent:Ft,right:ne,up:Ne}};L.getLength();const Si=[],rr=new za(Vp*2,Vp*2),or=new za(b2,A2);kt.forEach((Rt,Jt)=>{const $t=Rt.installation,Qt=Aa($t?.placement_t??.05+Jt/kt.length),{point:Ft,right:ne,up:Ne}=Qi(Qt),qe=$t?.side==="left",$n=($t?.side==="center"?0:qe?-1:1)*rx*.12,Mn=Ft.clone().add(ne.clone().multiplyScalar($n)).add(Ne.clone().multiplyScalar(.5)),Ge=Fi(Jt,Rt.id);He.push(Ge);const je=new gs({color:16777215,emissive:new oe(lx),emissiveIntensity:1.2,map:Ge,emissiveMap:Ge,transparent:!0,alphaTest:.05,side:Gn,depthWrite:!1});Te.push(je);const vn=new ke(rr,je);vn.position.copy(Mn),vn.userData={panel:Rt,isGlyph:!0},se.push(vn),Y.add(vn);const Ve=P.get(Rt.id),ti=Ve?.label||Rt.title,ea=Ve?.note||Rt.body,Di=An(ti,ea);He.push(Di);const na=new gs({color:16777215,emissive:new oe(1122867),emissiveIntensity:.3,map:Di,transparent:!0,opacity:0,side:Gn,depthWrite:!0});Te.push(na);const wt=new ke(or,na),En=new Fo;En.add(wt),En.position.copy(Mn),En.scale.setScalar(.01),En.visible=!1,Y.add(En);const oi=new oc(lx,W?6:12,20,1.5);oi.position.copy(Mn),Y.add(oi),Si.push({mesh:vn,card:En,panel:Rt,progress:Qt,baseY:Mn.y,expanded:!1,expandT:0}),t.current.push({meta:Rt,progress:Qt})});let Sn=!1,kn=0;const Ji=new $,Bi=new $,cn=new $,va=32;for(let Rt=0;Rt<va;Rt++)cn.add(L.getPointAt(Rt/va));cn.divideScalar(va);const R=new za(Vu*2,Vu*2),q=wn();He.push(q);const ot=new gs({color:16777215,emissive:new oe(cx),emissiveIntensity:1.4,map:q,emissiveMap:q,transparent:!0,alphaTest:.05,side:Gn,depthWrite:!1});Te.push(ot);const{point:at,up:et}=Qi(C2),Lt=at.clone().add(et.clone().multiplyScalar(1)),zt=new ke(R,ot);zt.position.copy(Lt),zt.userData={isExitGlyph:!0},Y.add(zt);const Pt=new za(Vu*5,Vu*5),Zt=new fc({visible:!1,side:Gn}),qt=new ke(Pt,Zt);qt.position.copy(Lt),qt.userData={isExitGlyph:!0},se.push(qt),Y.add(qt);const ce=new oc(cx,W?6:12,20,1.5);ce.position.copy(Lt),Y.add(ce);const de=new ah(W?1.25:1.6,26,26);Vn.push(de);const Xt=new gs({color:16764788,emissive:new oe(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});Te.push(Xt);const me=at.clone().add(et.clone().multiplyScalar(Hp*.52+.32)),Qe=new ke(de,Xt);Qe.position.copy(me),Qe.userData={isReentryDot:!0},se.push(Qe),Y.add(Qe);const un=new ih(W?1.75:2.2,W?2.35:2.95,52);Vn.push(un);const Le=new fc({color:16761948,transparent:!0,opacity:0,side:Gn,depthWrite:!1});Te.push(Le);const pn=new ke(un,Le);pn.position.copy(me),Y.add(pn);const Wt=new oc(16761948,0,W?34:44,2);Wt.position.copy(me),Y.add(Wt);const Zn=new lS,ue=new Re,Kn=Rt=>{Zi.forEach(Xa);const Jt=V.domElement.getBoundingClientRect();ue.x=(Rt.clientX-Jt.left)/Jt.width*2-1,ue.y=-((Rt.clientY-Jt.top)/Jt.height)*2+1,Zn.setFromCamera(ue,Z);const $t=Zn.intersectObjects(se,!1);if($t.length>0){const Qt=$t[0].object;if(Qt.userData.isReentryDot&&Sn){Sn=!1,w(!1);return}if(Qt.userData.isExitGlyph){if(Sn=!Sn,w(Sn),Sn){const Ne=Z.position.clone().clone().sub(cn).normalize();Ji.copy(cn).add(Ne.multiplyScalar(Gu)),Ji.y=cn.y+Gu*.35,Bi.copy(cn)}Si.forEach(ne=>{ne.expanded=!1});return}if(Sn){Sn=!1,w(!1);return}const Ft=Qt.userData.panel;if(Ft){const ne=Si.find(Ne=>Ne.panel.id===Ft.id);ne&&(ne.expanded?ne.expanded=!1:(Si.forEach(Ne=>{Ne.expanded=!1}),ne.expanded=!0))}}else Sn?(Sn=!1,w(!1)):Si.forEach(Qt=>{Qt.expanded=!1})};V.domElement.addEventListener("pointerdown",Kn);const Nn={x:0,y:0},Qn={x:0,y:0},pi=Rt=>{if(H||W)return;const Jt=V.domElement.getBoundingClientRect(),$t=(Rt.clientX-Jt.left)/Jt.width,Qt=(Rt.clientY-Jt.top)/Jt.height;Nn.x=($t-.5)*2,Nn.y=(Qt-.5)*2},Ye=()=>{Nn.x=0,Nn.y=0};V.domElement.addEventListener("pointermove",pi,{passive:!0}),V.domElement.addEventListener("pointerleave",Ye,{passive:!0});const yn=Rt=>{Rt.preventDefault(),!Sn&&(Zi.forEach(Xa),i.current=Aa(i.current+ox*Rt.deltaY*75e-6))};V.domElement.addEventListener("wheel",yn,{passive:!1});const Jn=Rt=>{if((Rt.key==="o"||Rt.key==="O")&&(Sn=!Sn,w(Sn),Sn)){const $t=Z.position.clone().clone().sub(cn).normalize();Ji.copy(cn).add($t.multiplyScalar(Gu)),Ji.y=cn.y+Gu*.35,Bi.copy(cn)}};window.addEventListener("keydown",Jn);let mn=0;const wi=Rt=>{Zi.forEach(Xa),mn=Rt.touches[0]?.clientY??0},$i=Rt=>{if(Rt.preventDefault(),Sn)return;const Jt=Rt.touches[0]?.clientY??mn,$t=mn-Jt;i.current=Aa(i.current+ox*$t*11e-5),mn=Jt};V.domElement.addEventListener("touchstart",wi,{passive:!0}),V.domElement.addEventListener("touchmove",$i,{passive:!1});const Ya=()=>{N&&(Z.aspect=N.clientWidth/N.clientHeight,Z.updateProjectionMatrix(),V.setSize(N.clientWidth,N.clientHeight))};window.addEventListener("resize",Ya);const Jo=new hn,dc=new cS,Es=new $,ta=new $,Gr=new $;let Vr=l.length>0?l[0].id:"";const qa=()=>{if(z)return;const Rt=dc.getDelta(),Jt=dc.getElapsedTime();s.current=y2(s.current,i.current,H?2.8:4.8,Rt),Qn.x+=(Nn.x-Qn.x)*.07,Qn.y+=(Nn.y-Qn.y)*.07;const $t=s.current,Qt=Aa($t+(W?.008:.01)),Ft=L.getPointAt($t),ne=L.getPointAt(Qt),Ne=L.getPointAt(Aa($t+.002)).sub(L.getPointAt(Aa($t-.002))).normalize();let qe=new $().crossVectors(Ne,bt).normalize();qe.lengthSq()<1e-4&&(qe=new $(1,0,0));const Oe=new $().crossVectors(qe,Ne).normalize(),ri=qe.clone().multiplyScalar(Qn.x*(W?0:.62)).add(Oe.clone().multiplyScalar(Qn.y*(W?0:.42))),$n=H?new $:Oe.clone().multiplyScalar(Math.sin(Jt*.45)*.12),Mn=1/w2;Sn&&kn<1?kn=Math.min(1,kn+Mn*Rt):!Sn&&kn>0&&(kn=Math.max(0,kn-Mn*Rt));const Ge=kn<.5?4*kn*kn*kn:1-Math.pow(-2*kn+2,3)/2;if(Ct.position.copy(cn),At.position.copy(cn),Dt.position.set(cn.x+500,cn.y+600,cn.z-300),yt.position.set(cn.x-400,cn.y+150,cn.z+350),Ge>.01){Y.fog instanceof uc&&(Y.fog.near=bi.lerp(38,9999,Ge),Y.fog.far=bi.lerp(230,1e4,Ge));const be=new oe(987671),Ie=new oe(395794);Y.background.copy(be).lerp(Ie,Ge),st.intensity=bi.lerp(.05,.08,Ge),ft.intensity=bi.lerp(.08,.12,Ge),Dt.intensity=bi.lerp(0,W?2.2:3.5,Ge),yt.intensity=bi.lerp(0,W?.25:.4,Ge),V.toneMappingExposure=bi.lerp(W?.76:.72,W?1:1.1,Ge),[Mt,Vt].forEach(Tn=>{Tn.emissive.set(3359829),Tn.emissiveIntensity=.12*Ge}),Ht.color.set(0).lerp(new oe(16777215),Ge),Ht.toneMapped=Ge>.5,Ht.fog=Ge>.5,Ht.emissive.set(16777215),Ht.emissiveIntensity=bi.lerp(1,.15,Ge),Ht.envMapIntensity=bi.lerp(0,.1,Ge)}else st.intensity=.05,ft.intensity=.08,Dt.intensity=0,yt.intensity=0,V.toneMappingExposure=W?.76:.72,Y.background.set(987671),[Mt,Vt].forEach(be=>{be.emissive.set(0),be.emissiveIntensity=0}),Ht.color.set(0),Ht.toneMapped=!1,Ht.fog=!1,Ht.emissive.set(16777215),Ht.emissiveIntensity=1,Ht.envMapIntensity=0;const je=Oe.clone().multiplyScalar(-Hp*.2),vn=Ft.clone().add(je).add(ri).add($n),Ve=ne.clone().add(je).add(ri.multiplyScalar(.22));if(Ge>.99)Z.position.copy(Ji),Z.lookAt(Bi);else if(Ge>.001){Z.position.lerpVectors(vn,Ji,Ge);const be=Ve.clone().lerp(Bi,Ge);Z.lookAt(be)}else Z.position.copy(vn),Jo.position.copy(Z.position),Jo.lookAt(Ve),Z.quaternion.slerp(Jo.quaternion,1-Math.exp(-8.1*Rt));const ti=.94+Math.sin(Jt*.23)*.06,ea=ne.clone().add(je);Ot.position.copy(Z.position).add(Oe.clone().multiplyScalar(2.9)).add(qe.clone().multiplyScalar(2.1)).add(Ne.clone().multiplyScalar(-2.2)),Et.position.copy(ea).add(qe.clone().multiplyScalar(2.5)).add(Oe.clone().multiplyScalar(-.9)),Ot.intensity=(W?14:21)*ti,he.position.copy(Z.position).add(Oe.clone().multiplyScalar(2)).add(qe.clone().multiplyScalar(-2.4)).add(Ne.clone().multiplyScalar(-1.1)),Gt.position.copy(ea).add(qe.clone().multiplyScalar(-2)).add(Oe.clone().multiplyScalar(-1.4)),he.intensity=(W?5:8)*ti,j.position.copy(Z.position).add(Oe.clone().multiplyScalar(1.4)).add(Ne.clone().multiplyScalar(2.8)).add(qe.clone().multiplyScalar(.6)),It.position.copy(ea).add(Oe.clone().multiplyScalar(-.8)),j.intensity=(W?4:6.2)*ti,se.forEach(be=>{const Ie=be.userData;if(!Ie||!Ie.shading||!Ie.material)return;const Tn=Ie.shading,Dn=Ie.material,yi=Ie.video,ve=Ie;let On=1;Tn.lighting?.flicker_sync&&yi&&yi.readyState>=3&&(On=.88+Math.sin(Jt*22)*.1*Math.sin(Jt*6.7));let mi=1;if(Tn.movement_reaction?.type==="viewing_angle_fade"){Es.set(0,0,0),be.getWorldPosition(Es),ta.set(0,0,1).applyQuaternion(be.quaternion),Gr.copy(Z.position).sub(Es).normalize();const Mi=ta,xa=Gr,Ts=Math.max(0,Mi.dot(xa)),$o=Tn.movement_reaction.cone_angle_degrees===60?3:1.5;mi=Math.pow(Ts,$o)}const li=Ie.baseEmissive*On*mi;if(Dn.emissiveIntensity=li,ve.bounceLights&&ve.bounceLights.length>0){const Mi=ve.bounceSampleCtx,xa=ve.bounceSampleCanvas;if(yi&&Mi&&xa&&(ve.bounceNextSampleAt??0)<=Jt){const ja=F2(yi,xa,Mi);if(ja){ve.bounceTargetColor||(ve.bounceTargetColor=ja.color.clone());const tl=ja.color.clone().lerp(new oe(1,.97,.93),.18);ve.bounceTargetColor.copy(tl);const el=bi.clamp(.22+ja.luminance*1.9,.22,2.25);ve.bounceTargetIntensity=(ve.bounceBaseIntensity??5)*el*(.25+li*1.25)}ve.bounceNextSampleAt=Jt+1/(W?2:4)}else yi||(ve.bounceTargetIntensity=(ve.bounceBaseIntensity??5)*(.22+li*1.1));const Ts=ve.bounceTargetIntensity??0,$o=ve.bounceCurrentIntensity??0;ve.bounceCurrentIntensity=bi.lerp($o,Ts,1-Math.exp(-6.2*Rt)),ve.bounceCurrentColor||(ve.bounceCurrentColor=(ve.bounceTargetColor??new oe(1,1,1)).clone()),ve.bounceTargetColor&&ve.bounceCurrentColor.lerp(ve.bounceTargetColor,1-Math.exp(-5.4*Rt)),ve.bounceLights.forEach((ja,tl)=>{const el=Math.max(1,ve.bounceLights.length-1),nl=1-tl/el*.34;ja.color.copy(ve.bounceCurrentColor),ja.intensity=(ve.bounceCurrentIntensity??0)*nl})}}),Ss.forEach(({mesh:be,basePosition:Ie,strength:Tn})=>{const Dn=be.parent;if(!Dn)return;const yi=Dn.worldToLocal(Z.position.clone()),ve=bi.clamp(yi.x*.008,-.18,.18)*Tn,On=bi.clamp(yi.y*.006,-.14,.14)*Tn;be.position.x=Ie.x+ve,be.position.y=Ie.y+On}),Si.forEach((be,Ie)=>{const{mesh:Tn,card:Dn}=be;Tn.lookAt(Z.position);const yi=Ie*.7,ve=be.baseY+Math.sin(Jt*E2+yi)*M2;Tn.position.y=ve,Tn.rotateZ(T2*Rt);const On=Tn.material;On.emissiveIntensity=1+Math.sin(Jt*2+Ie)*.4;const mi=be.expanded?1:0,li=1/R2;be.expandT<mi?be.expandT=Math.min(1,be.expandT+li*Rt):be.expandT>mi&&(be.expandT=Math.max(0,be.expandT-li*Rt));const Mi=be.expandT,xa=Mi<.5?4*Mi*Mi*Mi:1-Math.pow(-2*Mi+2,3)/2;if(xa>.001){Dn.visible=!0,Dn.position.copy(Tn.position),Dn.position.y-=Vp+.3,Dn.lookAt(Z.position),Dn.scale.setScalar(xa);const Ts=Dn.children[0].material;Ts.opacity=xa}else Dn.visible=!1;On.opacity=1-xa*.4});const Di=Lt.y+Math.sin(Jt*.8)*.35;zt.lookAt(Z.position),zt.position.y=Di,zt.rotateZ(.15*Rt),ot.emissiveIntensity=1.2+Math.sin(Jt*1.5)*.5,qt.lookAt(Z.position),qt.position.y=Di;const na=.72+Math.sin(Jt*2.35)*.28,wt=bi.smoothstep(Ge,.2,.95);Qe.visible=wt>.001,pn.visible=wt>.001,Qe.scale.setScalar(.88+na*.28),Xt.emissiveIntensity=wt*(.48+na*.45),Wt.intensity=wt*(W?4.6:7.4)*na,pn.lookAt(Z.position),pn.scale.setScalar(.95+na*.18),Le.opacity=wt*(.2+na*.32);let En=t.current[0]?.meta.id??(l.length>0?l[0].id:""),oi=Number.POSITIVE_INFINITY;t.current.forEach(be=>{let Ie=Math.abs($t-be.progress);Ie>.5&&(Ie=1-Ie),Ie<oi&&(oi=Ie,En=be.meta.id)}),En!==Vr&&(Vr=En,p(En)),V.render(Y,Z),requestAnimationFrame(qa)};qa(),B=()=>{V.domElement.removeEventListener("pointerdown",Kn),V.domElement.removeEventListener("pointermove",pi),V.domElement.removeEventListener("pointerleave",Ye),V.domElement.removeEventListener("wheel",yn),V.domElement.removeEventListener("touchstart",wi),V.domElement.removeEventListener("touchmove",$i),window.removeEventListener("resize",Ya),window.removeEventListener("keydown",Jn),N.contains(V.domElement)&&N.removeChild(V.domElement),se.forEach(Rt=>{const Jt=Rt.userData?.video;Jt&&(Jt.pause(),Jt.src="",Jt.load())}),Zi.forEach(Rt=>{Rt.pause(),Rt.src="",Rt.load()}),Ci.forEach(Rt=>Rt()),He.forEach(Rt=>Rt.dispose?.()),Vn.forEach(Rt=>Rt.dispose()),rr.dispose(),or.dispose(),Nt.albedo.dispose(),Nt.normal.dispose(),Nt.roughness.dispose(),Nt.ao.dispose(),tt.albedo.dispose(),tt.normal.dispose(),tt.roughness.dispose(),tt.ao.dispose(),mt.albedo.dispose(),mt.normal.dispose(),mt.roughness.dispose(),mt.ao.dispose(),Te.forEach(Rt=>Rt.dispose()),F.texture.dispose(),F.dispose(),O.dispose(),Mt.dispose(),Vt.dispose(),Q.dispose(),Ht.dispose(),Ms.dispose(),ys.dispose(),Ki.dispose(),on.dispose(),ye.dispose(),_e.dispose(),Ue.dispose(),pe.dispose(),dn.dispose(),ln.dispose(),Ce.dispose(),k.dispose(),pt.dispose(),ee.dispose(),V.dispose()}})(),()=>{z=!0,B()}},[l,C,P]),Wn.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Wn.jsx("div",{ref:r,className:"absolute inset-0"}),_||g?Wn.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:_?"Laster mediepaneler ...":g}):null,T?null:Wn.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Wn.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:"INTELLIGENSPARTIET"}),Wn.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:["Aktiv installasjon: ",P.get(U.id)?.label||U.title]})]}),T?Wn.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Wn.jsx("style",{children:`
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
            `}),Wn.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:"INTELLIGENSPARTET"}),Wn.jsx("a",{href:"#videos",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Wn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:"Videoer"})}),Wn.jsx("a",{href:"#signatures",className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Wn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:"Signaturer"})}),Wn.jsx("a",{href:"#news",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Wn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:"AI-nyheter"})})]}):null]})}function z2(){return Wn.jsx("div",{className:"min-h-screen bg-[#080604]",children:Wn.jsx(B2,{})})}vM.createRoot(document.getElementById("root")).render(Wn.jsx(Hn.StrictMode,{children:Wn.jsx(z2,{})}));
