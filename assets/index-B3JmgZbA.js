(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var np={exports:{}},Bl={};var nv;function lM(){if(nv)return Bl;nv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Bl.Fragment=t,Bl.jsx=i,Bl.jsxs=i,Bl}var iv;function cM(){return iv||(iv=1,np.exports=lM()),np.exports}var jn=cM(),ip={exports:{}},ge={};var av;function uM(){if(av)return ge;av=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function S(N,q,ft){this.props=N,this.context=q,this.refs=M,this.updater=ft||T}S.prototype.isReactComponent={},S.prototype.setState=function(N,q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,q,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function C(){}C.prototype=S.prototype;function U(N,q,ft){this.props=N,this.context=q,this.refs=M,this.updater=ft||T}var w=U.prototype=new C;w.constructor=U,D(w,S.prototype),w.isPureReactComponent=!0;var B=Array.isArray;function z(){}var H={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function L(N,q,ft){var Mt=ft.ref;return{$$typeof:r,type:N,key:q,ref:Mt!==void 0?Mt:null,props:ft}}function $(N,q){return L(N.type,q,N.props)}function P(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function k(N){var q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ft){return q[ft]})}var j=/\/+/g;function it(N,q){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):q.toString(36)}function K(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(z,z):(N.status="pending",N.then(function(q){N.status==="pending"&&(N.status="fulfilled",N.value=q)},function(q){N.status==="pending"&&(N.status="rejected",N.reason=q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,q,ft,Mt,Nt){var et=typeof N;(et==="undefined"||et==="boolean")&&(N=null);var gt=!1;if(N===null)gt=!0;else switch(et){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(N.$$typeof){case r:case t:gt=!0;break;case _:return gt=N._init,O(gt(N._payload),q,ft,Mt,Nt)}}if(gt)return Nt=Nt(N),gt=Mt===""?"."+it(N,0):Mt,B(Nt)?(ft="",gt!=null&&(ft=gt.replace(j,"$&/")+"/"),O(Nt,q,ft,"",function(Kt){return Kt})):Nt!=null&&(P(Nt)&&(Nt=$(Nt,ft+(Nt.key==null||N&&N.key===Nt.key?"":(""+Nt.key).replace(j,"$&/")+"/")+gt)),q.push(Nt)),1;gt=0;var xt=Mt===""?".":Mt+":";if(B(N))for(var Xt=0;Xt<N.length;Xt++)Mt=N[Xt],et=xt+it(Mt,Xt),gt+=O(Mt,q,ft,et,Nt);else if(Xt=y(N),typeof Xt=="function")for(N=Xt.call(N),Xt=0;!(Mt=N.next()).done;)Mt=Mt.value,et=xt+it(Mt,Xt++),gt+=O(Mt,q,ft,et,Nt);else if(et==="object"){if(typeof N.then=="function")return O(K(N),q,ft,Mt,Nt);throw q=String(N),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return gt}function F(N,q,ft){if(N==null)return N;var Mt=[],Nt=0;return O(N,Mt,"","",function(et){return q.call(ft,et,Nt++)}),Mt}function ot(N){if(N._status===-1){var q=N._result;q=q(),q.then(function(ft){(N._status===0||N._status===-1)&&(N._status=1,N._result=ft)},function(ft){(N._status===0||N._status===-1)&&(N._status=2,N._result=ft)}),N._status===-1&&(N._status=0,N._result=q)}if(N._status===1)return N._result.default;throw N._result}var lt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},St={map:F,forEach:function(N,q,ft){F(N,function(){q.apply(this,arguments)},ft)},count:function(N){var q=0;return F(N,function(){q++}),q},toArray:function(N){return F(N,function(q){return q})||[]},only:function(N){if(!P(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ge.Activity=x,ge.Children=St,ge.Component=S,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=U,ge.StrictMode=s,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ge.__COMPILER_RUNTIME={__proto__:null,c:function(N){return H.H.useMemoCache(N)}},ge.cache=function(N){return function(){return N.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(N,q,ft){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Mt=D({},N.props),Nt=N.key;if(q!=null)for(et in q.key!==void 0&&(Nt=""+q.key),q)!b.call(q,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&q.ref===void 0||(Mt[et]=q[et]);var et=arguments.length-2;if(et===1)Mt.children=ft;else if(1<et){for(var gt=Array(et),xt=0;xt<et;xt++)gt[xt]=arguments[xt+2];Mt.children=gt}return L(N.type,Nt,Mt)},ge.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ge.createElement=function(N,q,ft){var Mt,Nt={},et=null;if(q!=null)for(Mt in q.key!==void 0&&(et=""+q.key),q)b.call(q,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Nt[Mt]=q[Mt]);var gt=arguments.length-2;if(gt===1)Nt.children=ft;else if(1<gt){for(var xt=Array(gt),Xt=0;Xt<gt;Xt++)xt[Xt]=arguments[Xt+2];Nt.children=xt}if(N&&N.defaultProps)for(Mt in gt=N.defaultProps,gt)Nt[Mt]===void 0&&(Nt[Mt]=gt[Mt]);return L(N,et,Nt)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(N){return{$$typeof:d,render:N}},ge.isValidElement=P,ge.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:ot}},ge.memo=function(N,q){return{$$typeof:p,type:N,compare:q===void 0?null:q}},ge.startTransition=function(N){var q=H.T,ft={};H.T=ft;try{var Mt=N(),Nt=H.S;Nt!==null&&Nt(ft,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(z,lt)}catch(et){lt(et)}finally{q!==null&&ft.types!==null&&(q.types=ft.types),H.T=q}},ge.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ge.use=function(N){return H.H.use(N)},ge.useActionState=function(N,q,ft){return H.H.useActionState(N,q,ft)},ge.useCallback=function(N,q){return H.H.useCallback(N,q)},ge.useContext=function(N){return H.H.useContext(N)},ge.useDebugValue=function(){},ge.useDeferredValue=function(N,q){return H.H.useDeferredValue(N,q)},ge.useEffect=function(N,q){return H.H.useEffect(N,q)},ge.useEffectEvent=function(N){return H.H.useEffectEvent(N)},ge.useId=function(){return H.H.useId()},ge.useImperativeHandle=function(N,q,ft){return H.H.useImperativeHandle(N,q,ft)},ge.useInsertionEffect=function(N,q){return H.H.useInsertionEffect(N,q)},ge.useLayoutEffect=function(N,q){return H.H.useLayoutEffect(N,q)},ge.useMemo=function(N,q){return H.H.useMemo(N,q)},ge.useOptimistic=function(N,q){return H.H.useOptimistic(N,q)},ge.useReducer=function(N,q,ft){return H.H.useReducer(N,q,ft)},ge.useRef=function(N){return H.H.useRef(N)},ge.useState=function(N){return H.H.useState(N)},ge.useSyncExternalStore=function(N,q,ft){return H.H.useSyncExternalStore(N,q,ft)},ge.useTransition=function(){return H.H.useTransition()},ge.version="19.2.4",ge}var sv;function im(){return sv||(sv=1,ip.exports=uM()),ip.exports}var ti=im(),ap={exports:{}},zl={},sp={exports:{}},rp={};var rv;function fM(){return rv||(rv=1,(function(r){function t(O,F){var ot=O.length;O.push(F);t:for(;0<ot;){var lt=ot-1>>>1,St=O[lt];if(0<l(St,F))O[lt]=F,O[ot]=St,ot=lt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var F=O[0],ot=O.pop();if(ot!==F){O[0]=ot;t:for(var lt=0,St=O.length,N=St>>>1;lt<N;){var q=2*(lt+1)-1,ft=O[q],Mt=q+1,Nt=O[Mt];if(0>l(ft,ot))Mt<St&&0>l(Nt,ft)?(O[lt]=Nt,O[Mt]=ot,lt=Mt):(O[lt]=ft,O[q]=ot,lt=q);else if(Mt<St&&0>l(Nt,ot))O[lt]=Nt,O[Mt]=ot,lt=Mt;else break t}}return F}function l(O,F){var ot=O.sortIndex-F.sortIndex;return ot!==0?ot:O.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,g=3,y=!1,T=!1,D=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=O)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function B(O){if(D=!1,w(O),!T)if(i(m)!==null)T=!0,z||(z=!0,k());else{var F=i(p);F!==null&&K(B,F.startTime-O)}}var z=!1,H=-1,b=5,L=-1;function $(){return M?!0:!(r.unstable_now()-L<b)}function P(){if(M=!1,z){var O=r.unstable_now();L=O;var F=!0;try{t:{T=!1,D&&(D=!1,C(H),H=-1),y=!0;var ot=g;try{e:{for(w(O),x=i(m);x!==null&&!(x.expirationTime>O&&$());){var lt=x.callback;if(typeof lt=="function"){x.callback=null,g=x.priorityLevel;var St=lt(x.expirationTime<=O);if(O=r.unstable_now(),typeof St=="function"){x.callback=St,w(O),F=!0;break e}x===i(m)&&s(m),w(O)}else s(m);x=i(m)}if(x!==null)F=!0;else{var N=i(p);N!==null&&K(B,N.startTime-O),F=!1}}break t}finally{x=null,g=ot,y=!1}F=void 0}}finally{F?k():z=!1}}}var k;if(typeof U=="function")k=function(){U(P)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,it=j.port2;j.port1.onmessage=P,k=function(){it.postMessage(null)}}else k=function(){S(P,0)};function K(O,F){H=S(function(){O(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var ot=g;g=F;try{return O()}finally{g=ot}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ot=g;g=O;try{return F()}finally{g=ot}},r.unstable_scheduleCallback=function(O,F,ot){var lt=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?lt+ot:lt):ot=lt,O){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=ot+St,O={id:_++,callback:F,priorityLevel:O,startTime:ot,expirationTime:St,sortIndex:-1},ot>lt?(O.sortIndex=ot,t(p,O),i(m)===null&&O===i(p)&&(D?(C(H),H=-1):D=!0,K(B,ot-lt))):(O.sortIndex=St,t(m,O),T||y||(T=!0,z||(z=!0,k()))),O},r.unstable_shouldYield=$,r.unstable_wrapCallback=function(O){var F=g;return function(){var ot=g;g=F;try{return O.apply(this,arguments)}finally{g=ot}}}})(rp)),rp}var ov;function hM(){return ov||(ov=1,sp.exports=fM()),sp.exports}var op={exports:{}},gi={};var lv;function dM(){if(lv)return gi;lv=1;var r=im();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return gi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,gi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},gi.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},gi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},gi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},gi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},gi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},gi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},gi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},gi.requestFormReset=function(m){s.d.r(m)},gi.unstable_batchedUpdates=function(m,p){return m(p)},gi.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},gi.useFormStatus=function(){return h.H.useHostTransitionStatus()},gi.version="19.2.4",gi}var cv;function pM(){if(cv)return op.exports;cv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),op.exports=dM(),op.exports}var uv;function mM(){if(uv)return zl;uv=1;var r=hM(),t=im(),i=pM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,o=f;break}if(A===o){v=!0,o=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,o=u;break}if(A===o){v=!0,o=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),$=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case z:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:it(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return it(e(n))}catch{}}return null}var K=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},lt=[],St=-1;function N(e){return{current:e}}function q(e){0>St||(e.current=lt[St],lt[St]=null,St--)}function ft(e,n){St++,lt[St]=e.current,e.current=n}var Mt=N(null),Nt=N(null),et=N(null),gt=N(null);function xt(e,n){switch(ft(et,n),ft(Nt,e),ft(Mt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?b_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=b_(n),e=A_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Mt),ft(Mt,e)}function Xt(){q(Mt),q(Nt),q(et)}function Kt(e){e.memoizedState!==null&&ft(gt,e);var n=Mt.current,a=A_(n,e.type);n!==a&&(ft(Nt,e),ft(Mt,a))}function ne(e){Nt.current===e&&(q(Mt),q(Nt)),gt.current===e&&(q(gt),Ol._currentValue=ot)}var on,xe;function Me(e){if(on===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);on=n&&n[1]||"",xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+on+e+xe}var Be=!1;function pe(e,n){if(!e||Be)return"";Be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ut){var rt=ut}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ut){rt=ut}e.call(vt.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var G=v.split(`
`),at=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===at.length)for(o=G.length-1,u=at.length-1;1<=o&&0<=u&&G[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==at[u]){var pt=`
`+G[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Be=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Me(a):""}function hn(e,n){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return e.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return Me("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=hn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var tn=Object.prototype.hasOwnProperty,Re=r.unstable_scheduleCallback,Ne=r.unstable_cancelCallback,Wt=r.unstable_shouldYield,I=r.unstable_requestPaint,E=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,mt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,dt=r.unstable_NormalPriority,qt=r.unstable_LowPriority,wt=r.unstable_IdlePriority,ee=r.log,ae=r.unstable_setDisableYieldValue,bt=null,Tt=null;function Lt(e){if(typeof ee=="function"&&ae(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(bt,e)}catch{}}var Ot=Math.clz32?Math.clz32:Y,Pt=Math.log,me=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(Pt(e)/me|0)|0}var Et=256,Rt=262144,Ht=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=At(o):(v&=A,v!==0?u=At(v):a||(a=A&~e,a!==0&&(u=At(a))))):(A=o&~f,A!==0?u=At(A):v!==0?u=At(v):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ve(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Oe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function An(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bi(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(a=v&~a;0<a;){var pt=31-Ot(a),vt=1<<pt;A[pt]=0,G[pt]=-1;var rt=at[pt];if(rt!==null)for(at[pt]=null,pt=0;pt<rt.length;pt++){var ut=rt[pt];ut!==null&&(ut.lane&=-536870913)}a&=~vt}o!==0&&vs(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function vs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ga(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ir(e,n){var a=n&-n;return a=(a&42)!==0?1:xs(a),(a&(e.suspendedLanes|n))!==0?0:a}function xs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ss(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qi(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Z_(e.type))}function ys(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var zi=Math.random().toString(36).slice(2),Rn="__reactFiber$"+zi,Cn="__reactProps$"+zi,fi="__reactContainer$"+zi,_a="__reactEvents$"+zi,ar="__reactListeners$"+zi,Sn="__reactHandles$"+zi,hi="__reactResources$"+zi,wi="__reactMarker$"+zi;function Ua(e){delete e[Rn],delete e[Cn],delete e[_a],delete e[ar],delete e[Sn]}function ln(e){var n=e[Rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[fi]||a[Rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=N_(e);e!==null;){if(a=e[Rn])return a;e=N_(e)}return n}e=a,a=e.parentNode}return null}function Ji(e){if(e=e[Rn]||e[fi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Xa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[hi];return n||(n=e[hi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(e){e[wi]=!0}var ct=new Set,st={};function tt(e,n){Dt(e,n),Dt(e+"Capture",n)}function Dt(e,n){for(st[e]=n,e=0;e<n.length;e++)ct.add(n[e])}var Gt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Vt={};function Jt(e){return tn.call(Vt,e)?!0:tn.call(It,e)?!1:Gt.test(e)?Vt[e]=!0:(It[e]=!0,!1)}function le(e,n,a){if(Jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ue(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function en(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ce(e){if(!e._valueTracker){var n=cn(e)?"checked":"value";e._valueTracker=en(e,n,""+e[n])}}function yn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=cn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Yt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yn=/[\n"\\]/g;function he(e){return e.replace(Yn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wn(e,n,a,o,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Di(e,v,fe(n)):a!=null?Di(e,v,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+fe(A):e.removeAttribute("name")}function Bn(e,n,a,o,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ce(e);return}a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ce(e)}function Di(e,n,a){n==="number"&&Yt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function di(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ke(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ce(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ui(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function $i(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ui(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ui(e,f,n[f])}function La(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sr(e){return Jo.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Hr=null;function Gr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ct=null,jt=null;function te(e){var n=Ji(e);if(n&&(e=n.stateNode)){var a=e[Cn]||null;t:switch(e=n.stateNode,n.type){case"input":if(wn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Cn]||null;if(!u)throw Error(s(90));wn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&yn(o)}break t;case"textarea":ke(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&di(e,!!a.multiple,n,!1)}}}var Qt=!1;function Bt(e,n,a){if(Qt)return e(n,a);Qt=!0;try{var o=e(n);return o}finally{if(Qt=!1,(Ct!==null||jt!==null)&&(qc(),Ct&&(n=Ct,e=jt,jt=Ct=null,te(n),e)))for(n=0;n<e.length;n++)te(e[n])}}function ce(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Cn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ze=!1;if(be)try{var Xe={};Object.defineProperty(Xe,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",Xe,Xe),window.removeEventListener("test",Xe,Xe)}catch{Ze=!1}var Dn=null,ai=null,pn=null;function We(){if(pn)return pn;var e,n=ai,a=n.length,o,u="value"in Dn?Dn.value:Dn.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return pn=u.slice(e,1<o?1-o:void 0)}function Ye(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function dn(){return!0}function Un(){return!1}function mn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dn:Un,this.isPropagationStopped=Un,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dn)},persist:function(){},isPersistent:dn}),n}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=mn(Si),pi=x({},Si,{view:0,detail:0}),Ut=mn(pi),Tn,yi,Ee,we=x({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ee&&(Ee&&e.type==="mousemove"?(Tn=e.screenX-Ee.screenX,yi=e.screenY-Ee.screenY):yi=Tn=0,Ee=e),Tn)},movementY:function(e){return"movementY"in e?e.movementY:yi}}),vn=mn(we),In=x({},we,{dataTransfer:0}),Mi=mn(In),Te=x({},pi,{relatedTarget:0}),Ln=mn(Te),mi=x({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),si=mn(mi),Ei=x({},Si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),va=mn(Ei),rr=x({},Si,{data:0}),Vr=mn(rr),Wa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$o={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tl[e])?!!n[e]:!1}function oh(){return rh}var xS=x({},pi,{key:function(e){if(e.key){var n=Wa[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ye(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$o[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(e){return e.type==="keypress"?Ye(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ye(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),SS=mn(xS),yS=x({},we,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=mn(yS),MS=x({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),ES=mn(MS),TS=x({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=mn(TS),AS=x({},we,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=mn(AS),CS=x({},Si,{newState:0,oldState:0}),wS=mn(CS),DS=[9,13,27,32],lh=be&&"CompositionEvent"in window,el=null;be&&"documentMode"in document&&(el=document.documentMode);var US=be&&"TextEvent"in window&&!el,Um=be&&(!lh||el&&8<el&&11>=el),Lm=" ",Nm=!1;function Om(e,n){switch(e){case"keyup":return DS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function LS(e,n){switch(e){case"compositionend":return Im(n);case"keypress":return n.which!==32?null:(Nm=!0,Lm);case"textInput":return e=n.data,e===Lm&&Nm?null:e;default:return null}}function NS(e,n){if(kr)return e==="compositionend"||!lh&&Om(e,n)?(e=We(),pn=ai=Dn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Um&&n.locale!=="ko"?null:n.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!OS[e.type]:n==="textarea"}function Fm(e,n,a,o){Ct?jt?jt.push(o):jt=[o]:Ct=o,n=tu(n,"onChange"),0<n.length&&(a=new Hi("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var nl=null,il=null;function IS(e){x_(e,0)}function hc(e){var n=Xa(e);if(yn(n))return e}function Bm(e,n){if(e==="change")return n}var zm=!1;if(be){var ch;if(be){var uh="oninput"in document;if(!uh){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),uh=typeof Hm.oninput=="function"}ch=uh}else ch=!1;zm=ch&&(!document.documentMode||9<document.documentMode)}function Gm(){nl&&(nl.detachEvent("onpropertychange",Vm),il=nl=null)}function Vm(e){if(e.propertyName==="value"&&hc(il)){var n=[];Fm(n,il,e,Gr(e)),Bt(IS,n)}}function PS(e,n,a){e==="focusin"?(Gm(),nl=n,il=a,nl.attachEvent("onpropertychange",Vm)):e==="focusout"&&Gm()}function FS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hc(il)}function BS(e,n){if(e==="click")return hc(n)}function zS(e,n){if(e==="input"||e==="change")return hc(n)}function HS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Gi=typeof Object.is=="function"?Object.is:HS;function al(e,n){if(Gi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!tn.call(n,u)||!Gi(e[u],n[u]))return!1}return!0}function km(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xm(e,n){var a=km(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=km(a)}}function Wm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ym(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Yt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Yt(e.document)}return n}function fh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var GS=be&&"documentMode"in document&&11>=document.documentMode,Xr=null,hh=null,sl=null,dh=!1;function qm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dh||Xr==null||Xr!==Yt(o)||(o=Xr,"selectionStart"in o&&fh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),sl&&al(sl,o)||(sl=o,o=tu(hh,"onSelect"),0<o.length&&(n=new Hi("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xr)))}function or(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Wr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},ph={},jm={};be&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function lr(e){if(ph[e])return ph[e];if(!Wr[e])return e;var n=Wr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jm)return ph[e]=n[a];return e}var Zm=lr("animationend"),Km=lr("animationiteration"),Qm=lr("animationstart"),VS=lr("transitionrun"),kS=lr("transitionstart"),XS=lr("transitioncancel"),Jm=lr("transitionend"),$m=new Map,mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mh.push("scrollEnd");function xa(e,n){$m.set(e,n),tt(n,[e])}var dc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ea=[],Yr=0,gh=0;function pc(){for(var e=Yr,n=gh=Yr=0;n<e;){var a=ea[n];ea[n++]=null;var o=ea[n];ea[n++]=null;var u=ea[n];ea[n++]=null;var f=ea[n];if(ea[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&t0(a,u,f)}}function mc(e,n,a,o){ea[Yr++]=e,ea[Yr++]=n,ea[Yr++]=a,ea[Yr++]=o,gh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function _h(e,n,a,o){return mc(e,n,a,o),gc(e)}function cr(e,n){return mc(e,null,null,n),gc(e)}function t0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function gc(e){if(50<Rl)throw Rl=0,Ad=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function WS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vi(e,n,a,o){return new WS(e,n,a,o)}function vh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ya(e,n){var a=e.alternate;return a===null?(a=Vi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function e0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _c(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")vh(e)&&(v=1);else if(typeof e=="string")v=Ky(e,a,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=Vi(31,a,n,u),e.elementType=L,e.lanes=f,e;case D:return ur(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=Vi(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case B:return e=Vi(13,a,n,u),e.elementType=B,e.lanes=f,e;case z:return e=Vi(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:v=10;break t;case C:v=9;break t;case w:v=11;break t;case H:v=14;break t;case b:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Vi(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ur(e,n,a,o){return e=Vi(7,e,o,n),e.lanes=a,e}function xh(e,n,a){return e=Vi(6,e,null,n),e.lanes=a,e}function n0(e){var n=Vi(18,null,null,0);return n.stateNode=e,n}function Sh(e,n,a){return n=Vi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var i0=new WeakMap;function na(e,n){if(typeof e=="object"&&e!==null){var a=i0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},i0.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var jr=[],Zr=0,vc=null,rl=0,ia=[],aa=0,Ms=null,Na=1,Oa="";function qa(e,n){jr[Zr++]=rl,jr[Zr++]=vc,vc=e,rl=n}function a0(e,n,a){ia[aa++]=Na,ia[aa++]=Oa,ia[aa++]=Ms,Ms=e;var o=Na;e=Oa;var u=32-Ot(o)-1;o&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Na=1<<32-Ot(n)+u|a<<u|o,Oa=f+e}else Na=1<<f|a<<u|o,Oa=e}function yh(e){e.return!==null&&(qa(e,1),a0(e,1,0))}function Mh(e){for(;e===vc;)vc=jr[--Zr],jr[Zr]=null,rl=jr[--Zr],jr[Zr]=null;for(;e===Ms;)Ms=ia[--aa],ia[aa]=null,Oa=ia[--aa],ia[aa]=null,Na=ia[--aa],ia[aa]=null}function s0(e,n){ia[aa++]=Na,ia[aa++]=Oa,ia[aa++]=Ms,Na=n.id,Oa=n.overflow,Ms=e}var ri=null,gn=null,Fe=!1,Es=null,sa=!1,Eh=Error(s(519));function Ts(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ol(na(n,e)),Eh}function r0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Rn]=e,n[Cn]=o,a){case"dialog":Le("cancel",n),Le("close",n);break;case"iframe":case"object":case"embed":Le("load",n);break;case"video":case"audio":for(a=0;a<wl.length;a++)Le(wl[a],n);break;case"source":Le("error",n);break;case"img":case"image":case"link":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"input":Le("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Le("invalid",n);break;case"textarea":Le("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||E_(n.textContent,a)?(o.popover!=null&&(Le("beforetoggle",n),Le("toggle",n)),o.onScroll!=null&&Le("scroll",n),o.onScrollEnd!=null&&Le("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Ts(e,!0)}function o0(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 31:case 13:sa=!1;return;case 27:case 3:sa=!0;return;default:ri=ri.return}}function Kr(e){if(e!==ri)return!1;if(!Fe)return o0(e),Fe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gd(e.type,e.memoizedProps)),a=!a),a&&gn&&Ts(e),o0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=L_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=L_(e)}else n===27?(n=gn,Bs(e.type)?(e=Yd,Yd=null,gn=e):gn=n):gn=ri?oa(e.stateNode.nextSibling):null;return!0}function fr(){gn=ri=null,Fe=!1}function Th(){var e=Es;return e!==null&&(Ii===null?Ii=e:Ii.push.apply(Ii,e),Es=null),e}function ol(e){Es===null?Es=[e]:Es.push(e)}var bh=N(null),hr=null,ja=null;function bs(e,n,a){ft(bh,n._currentValue),n._currentValue=a}function Za(e){e._currentValue=bh.current,q(bh)}function Ah(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Rh(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ah(f.return,a,e),o||(v=null);break t}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ah(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Qr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;Gi(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===gt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ol):e=[Ol])}u=u.return}e!==null&&Rh(n,e,a,o),n.flags|=262144}function xc(e){for(e=e.firstContext;e!==null;){if(!Gi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dr(e){hr=e,ja=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oi(e){return l0(hr,e)}function Sc(e,n){return hr===null&&dr(e),l0(e,n)}function l0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ja===null){if(e===null)throw Error(s(308));ja=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ja=ja.next=n;return a}var YS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},qS=r.unstable_scheduleCallback,jS=r.unstable_NormalPriority,Hn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ch(){return{controller:new YS,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&qS(jS,function(){e.controller.abort()})}var cl=null,wh=0,Jr=0,$r=null;function ZS(e,n){if(cl===null){var a=cl=[];wh=0,Jr=Ld(),$r={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wh++,n.then(c0,c0),n}function c0(){if(--wh===0&&cl!==null){$r!==null&&($r.status="fulfilled");var e=cl;cl=null,Jr=0,$r=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function KS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var u0=O.S;O.S=function(e,n){qg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ZS(e,n),u0!==null&&u0(e,n)};var pr=N(null);function Dh(){var e=pr.current;return e!==null?e:un.pooledCache}function yc(e,n){n===null?ft(pr,pr.current):ft(pr,n.pool)}function f0(){var e=Dh();return e===null?null:{parent:Hn._currentValue,pool:e}}var to=Error(s(460)),Uh=Error(s(474)),Mc=Error(s(542)),Ec={then:function(){}};function h0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,m0(e),e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=un,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,m0(e),e}throw gr=n,to}}function mr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,to):a}}var gr=null;function p0(){if(gr===null)throw Error(s(459));var e=gr;return gr=null,e}function m0(e){if(e===to||e===Mc)throw Error(s(483))}var eo=null,ul=0;function Tc(e){var n=ul;return ul+=1,eo===null&&(eo=[]),d0(eo,e,n)}function fl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function g0(e){function n(Q,X){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[X],Q.flags|=16):nt.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=Ya(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<X?(Q.flags|=67108866,X):nt):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function v(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,X,nt,_t){return X===null||X.tag!==6?(X=xh(nt,Q.mode,_t),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function G(Q,X,nt,_t){var ie=nt.type;return ie===D?pt(Q,X,nt.props.children,_t,nt.key):X!==null&&(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===b&&mr(ie)===X.type)?(X=u(X,nt.props),fl(X,nt),X.return=Q,X):(X=_c(nt.type,nt.key,nt.props,null,Q.mode,_t),fl(X,nt),X.return=Q,X)}function at(Q,X,nt,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=Sh(nt,Q.mode,_t),X.return=Q,X):(X=u(X,nt.children||[]),X.return=Q,X)}function pt(Q,X,nt,_t,ie){return X===null||X.tag!==7?(X=ur(nt,Q.mode,_t,ie),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function vt(Q,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=xh(""+X,Q.mode,nt),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return nt=_c(X.type,X.key,X.props,null,Q.mode,nt),fl(nt,X),nt.return=Q,nt;case T:return X=Sh(X,Q.mode,nt),X.return=Q,X;case b:return X=mr(X),vt(Q,X,nt)}if(K(X)||k(X))return X=ur(X,Q.mode,nt,null),X.return=Q,X;if(typeof X.then=="function")return vt(Q,Tc(X),nt);if(X.$$typeof===U)return vt(Q,Sc(Q,X),nt);bc(Q,X)}return null}function rt(Q,X,nt,_t){var ie=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ie!==null?null:A(Q,X,""+nt,_t);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return nt.key===ie?G(Q,X,nt,_t):null;case T:return nt.key===ie?at(Q,X,nt,_t):null;case b:return nt=mr(nt),rt(Q,X,nt,_t)}if(K(nt)||k(nt))return ie!==null?null:pt(Q,X,nt,_t,null);if(typeof nt.then=="function")return rt(Q,X,Tc(nt),_t);if(nt.$$typeof===U)return rt(Q,X,Sc(Q,nt),_t);bc(Q,nt)}return null}function ut(Q,X,nt,_t,ie){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(nt)||null,A(X,Q,""+_t,ie);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Q=Q.get(_t.key===null?nt:_t.key)||null,G(X,Q,_t,ie);case T:return Q=Q.get(_t.key===null?nt:_t.key)||null,at(X,Q,_t,ie);case b:return _t=mr(_t),ut(Q,X,nt,_t,ie)}if(K(_t)||k(_t))return Q=Q.get(nt)||null,pt(X,Q,_t,ie,null);if(typeof _t.then=="function")return ut(Q,X,nt,Tc(_t),ie);if(_t.$$typeof===U)return ut(Q,X,nt,Sc(X,_t),ie);bc(X,_t)}return null}function Zt(Q,X,nt,_t){for(var ie=null,qe=null,$t=X,Se=X=0,Pe=null;$t!==null&&Se<nt.length;Se++){$t.index>Se?(Pe=$t,$t=null):Pe=$t.sibling;var je=rt(Q,$t,nt[Se],_t);if(je===null){$t===null&&($t=Pe);break}e&&$t&&je.alternate===null&&n(Q,$t),X=f(je,X,Se),qe===null?ie=je:qe.sibling=je,qe=je,$t=Pe}if(Se===nt.length)return a(Q,$t),Fe&&qa(Q,Se),ie;if($t===null){for(;Se<nt.length;Se++)$t=vt(Q,nt[Se],_t),$t!==null&&(X=f($t,X,Se),qe===null?ie=$t:qe.sibling=$t,qe=$t);return Fe&&qa(Q,Se),ie}for($t=o($t);Se<nt.length;Se++)Pe=ut($t,Q,Se,nt[Se],_t),Pe!==null&&(e&&Pe.alternate!==null&&$t.delete(Pe.key===null?Se:Pe.key),X=f(Pe,X,Se),qe===null?ie=Pe:qe.sibling=Pe,qe=Pe);return e&&$t.forEach(function(ks){return n(Q,ks)}),Fe&&qa(Q,Se),ie}function oe(Q,X,nt,_t){if(nt==null)throw Error(s(151));for(var ie=null,qe=null,$t=X,Se=X=0,Pe=null,je=nt.next();$t!==null&&!je.done;Se++,je=nt.next()){$t.index>Se?(Pe=$t,$t=null):Pe=$t.sibling;var ks=rt(Q,$t,je.value,_t);if(ks===null){$t===null&&($t=Pe);break}e&&$t&&ks.alternate===null&&n(Q,$t),X=f(ks,X,Se),qe===null?ie=ks:qe.sibling=ks,qe=ks,$t=Pe}if(je.done)return a(Q,$t),Fe&&qa(Q,Se),ie;if($t===null){for(;!je.done;Se++,je=nt.next())je=vt(Q,je.value,_t),je!==null&&(X=f(je,X,Se),qe===null?ie=je:qe.sibling=je,qe=je);return Fe&&qa(Q,Se),ie}for($t=o($t);!je.done;Se++,je=nt.next())je=ut($t,Q,Se,je.value,_t),je!==null&&(e&&je.alternate!==null&&$t.delete(je.key===null?Se:je.key),X=f(je,X,Se),qe===null?ie=je:qe.sibling=je,qe=je);return e&&$t.forEach(function(oM){return n(Q,oM)}),Fe&&qa(Q,Se),ie}function sn(Q,X,nt,_t){if(typeof nt=="object"&&nt!==null&&nt.type===D&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:t:{for(var ie=nt.key;X!==null;){if(X.key===ie){if(ie=nt.type,ie===D){if(X.tag===7){a(Q,X.sibling),_t=u(X,nt.props.children),_t.return=Q,Q=_t;break t}}else if(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===b&&mr(ie)===X.type){a(Q,X.sibling),_t=u(X,nt.props),fl(_t,nt),_t.return=Q,Q=_t;break t}a(Q,X);break}else n(Q,X);X=X.sibling}nt.type===D?(_t=ur(nt.props.children,Q.mode,_t,nt.key),_t.return=Q,Q=_t):(_t=_c(nt.type,nt.key,nt.props,null,Q.mode,_t),fl(_t,nt),_t.return=Q,Q=_t)}return v(Q);case T:t:{for(ie=nt.key;X!==null;){if(X.key===ie)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(Q,X.sibling),_t=u(X,nt.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}_t=Sh(nt,Q.mode,_t),_t.return=Q,Q=_t}return v(Q);case b:return nt=mr(nt),sn(Q,X,nt,_t)}if(K(nt))return Zt(Q,X,nt,_t);if(k(nt)){if(ie=k(nt),typeof ie!="function")throw Error(s(150));return nt=ie.call(nt),oe(Q,X,nt,_t)}if(typeof nt.then=="function")return sn(Q,X,Tc(nt),_t);if(nt.$$typeof===U)return sn(Q,X,Sc(Q,nt),_t);bc(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(Q,X.sibling),_t=u(X,nt),_t.return=Q,Q=_t):(a(Q,X),_t=xh(nt,Q.mode,_t),_t.return=Q,Q=_t),v(Q)):a(Q,X)}return function(Q,X,nt,_t){try{ul=0;var ie=sn(Q,X,nt,_t);return eo=null,ie}catch($t){if($t===to||$t===Mc)throw $t;var qe=Vi(29,$t,null,Q.mode);return qe.lanes=_t,qe.return=Q,qe}}}var _r=g0(!0),_0=g0(!1),As=!1;function Lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cs(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ke&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gc(e),t0(e,null,a),n}return mc(e,o,n,a),gc(e)}function hl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ga(e,a)}}function Oh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ih=!1;function dl(){if(Ih){var e=$r;if(e!==null)throw e}}function pl(e,n,a,o){Ih=!1;var u=e.updateQueue;As=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,at=G.next;G.next=null,v===null?f=at:v.next=at,v=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==v&&(A===null?pt.firstBaseUpdate=at:A.next=at,pt.lastBaseUpdate=G))}if(f!==null){var vt=u.baseState;v=0,pt=at=G=null,A=f;do{var rt=A.lane&-536870913,ut=rt!==A.lane;if(ut?(Ie&rt)===rt:(o&rt)===rt){rt!==0&&rt===Jr&&(Ih=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Zt=e,oe=A;rt=n;var sn=a;switch(oe.tag){case 1:if(Zt=oe.payload,typeof Zt=="function"){vt=Zt.call(sn,vt,rt);break t}vt=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=oe.payload,rt=typeof Zt=="function"?Zt.call(sn,vt,rt):Zt,rt==null)break t;vt=x({},vt,rt);break t;case 2:As=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(at=pt=ut,G=vt):pt=pt.next=ut,v|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);pt===null&&(G=vt),u.baseState=G,u.firstBaseUpdate=at,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Ns|=v,e.lanes=v,e.memoizedState=vt}}function v0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function x0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)v0(a[e],n)}var no=N(null),Ac=N(0);function S0(e,n){e=as,ft(Ac,e),ft(no,n),as=e|n.baseLanes}function Ph(){ft(Ac,as),ft(no,no.current)}function Fh(){as=Ac.current,q(no),q(Ac)}var ki=N(null),ra=null;function ws(e){var n=e.alternate;ft(Pn,Pn.current&1),ft(ki,e),ra===null&&(n===null||no.current!==null||n.memoizedState!==null)&&(ra=e)}function Bh(e){ft(Pn,Pn.current),ft(ki,e),ra===null&&(ra=e)}function y0(e){e.tag===22?(ft(Pn,Pn.current),ft(ki,e),ra===null&&(ra=e)):Ds()}function Ds(){ft(Pn,Pn.current),ft(ki,ki.current)}function Xi(e){q(ki),ra===e&&(ra=null),q(Pn)}var Pn=N(0);function Rc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xd(a)||Wd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ka=0,_e=null,nn=null,Gn=null,Cc=!1,io=!1,vr=!1,wc=0,ml=0,ao=null,QS=0;function Nn(){throw Error(s(321))}function zh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Gi(e[a],n[a]))return!1;return!0}function Hh(e,n,a,o,u,f){return Ka=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?ag:ed,vr=!1,f=a(o,u),vr=!1,io&&(f=E0(n,a,o,u)),M0(e),f}function M0(e){O.H=vl;var n=nn!==null&&nn.next!==null;if(Ka=0,Gn=nn=_e=null,Cc=!1,ml=0,ao=null,n)throw Error(s(300));e===null||Vn||(e=e.dependencies,e!==null&&xc(e)&&(Vn=!0))}function E0(e,n,a,o){_e=e;var u=0;do{if(io&&(ao=null),ml=0,io=!1,25<=u)throw Error(s(301));if(u+=1,Gn=nn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=sg,f=n(a,o)}while(io);return f}function JS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?gl(n):n,e=e.useState()[0],(nn!==null?nn.memoizedState:null)!==e&&(_e.flags|=1024),n}function Gh(){var e=wc!==0;return wc=0,e}function Vh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function kh(e){if(Cc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Cc=!1}Ka=0,Gn=nn=_e=null,io=!1,ml=wc=0,ao=null}function Ti(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gn===null?_e.memoizedState=Gn=e:Gn=Gn.next=e,Gn}function Fn(){if(nn===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=nn.next;var n=Gn===null?_e.memoizedState:Gn.next;if(n!==null)Gn=n,nn=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));nn=e,e={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},Gn===null?_e.memoizedState=Gn=e:Gn=Gn.next=e}return Gn}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(e){var n=ml;return ml+=1,ao===null&&(ao=[]),e=d0(ao,e,n),n=_e,(Gn===null?n.memoizedState:Gn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?ag:ed),e}function Uc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gl(e);if(e.$$typeof===U)return oi(e)}throw Error(s(438,String(e)))}function Xh(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dc(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=$;return n.index++,a}function Qa(e,n){return typeof n=="function"?n(e):n}function Lc(e){var n=Fn();return Wh(n,nn,e)}function Wh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,G=null,at=n,pt=!1;do{var vt=at.lane&-536870913;if(vt!==at.lane?(Ie&vt)===vt:(Ka&vt)===vt){var rt=at.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),vt===Jr&&(pt=!0);else if((Ka&rt)===rt){at=at.next,rt===Jr&&(pt=!0);continue}else vt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=vt,v=f):G=G.next=vt,_e.lanes|=rt,Ns|=rt;vt=at.action,vr&&a(f,vt),f=at.hasEagerState?at.eagerState:a(f,vt)}else rt={lane:vt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=rt,v=f):G=G.next=rt,_e.lanes|=vt,Ns|=vt;at=at.next}while(at!==null&&at!==n);if(G===null?v=f:G.next=A,!Gi(f,e.memoizedState)&&(Vn=!0,pt&&(a=$r,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Yh(e){var n=Fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Gi(f,n.memoizedState)||(Vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function T0(e,n,a){var o=_e,u=Fn(),f=Fe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Gi((nn||u).memoizedState,a);if(v&&(u.memoizedState=a,Vn=!0),u=u.queue,Zh(R0.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||Gn!==null&&Gn.memoizedState.tag&1){if(o.flags|=2048,so(9,{destroy:void 0},A0.bind(null,o,u,a,n),null),un===null)throw Error(s(349));f||(Ka&127)!==0||b0(o,n,a)}return a}function b0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Dc(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function A0(e,n,a,o){n.value=a,n.getSnapshot=o,C0(n)&&w0(e)}function R0(e,n,a){return a(function(){C0(n)&&w0(e)})}function C0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Gi(e,a)}catch{return!0}}function w0(e){var n=cr(e,2);n!==null&&Pi(n,e,2)}function qh(e){var n=Ti();if(typeof e=="function"){var a=e;if(e=a(),vr){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:e},n}function D0(e,n,a,o){return e.baseState=a,Wh(e,nn,typeof o=="function"?o:Qa)}function $S(e,n,a,o,u){if(Ic(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,U0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function U0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var A=a(u,o),G=O.S;G!==null&&G(v,A),L0(e,n,A)}catch(at){jh(e,n,at)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,o),L0(e,n,f)}catch(at){jh(e,n,at)}}function L0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){N0(e,n,o)},function(o){return jh(e,n,o)}):N0(e,n,a)}function N0(e,n,a){n.status="fulfilled",n.value=a,O0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,U0(e,a)))}function jh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,O0(n),n=n.next;while(n!==o)}e.action=null}function O0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function I0(e,n){return n}function P0(e,n){if(Fe){var a=un.formState;if(a!==null){t:{var o=_e;if(Fe){if(gn){e:{for(var u=gn,f=sa;u.nodeType!==8;){if(!f){u=null;break e}if(u=oa(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){gn=oa(u.nextSibling),o=u.data==="F!";break t}}Ts(o)}o=!1}o&&(n=a[0])}}return a=Ti(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I0,lastRenderedState:n},a.queue=o,a=eg.bind(null,_e,o),o.dispatch=a,o=qh(!1),f=td.bind(null,_e,!1,o.queue),o=Ti(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=$S.bind(null,_e,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function F0(e){var n=Fn();return B0(n,nn,e)}function B0(e,n,a){if(n=Wh(e,n,I0)[0],e=Lc(Qa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=gl(n)}catch(v){throw v===to?Mc:v}else o=n;n=Fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,so(9,{destroy:void 0},ty.bind(null,u,a),null)),[o,f,e]}function ty(e,n){e.action=n}function z0(e){var n=Fn(),a=nn;if(a!==null)return B0(n,a,e);Fn(),n=n.memoizedState,a=Fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function so(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Dc(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function H0(){return Fn().memoizedState}function Nc(e,n,a,o){var u=Ti();_e.flags|=e,u.memoizedState=so(1|n,{destroy:void 0},a,o===void 0?null:o)}function Oc(e,n,a,o){var u=Fn();o=o===void 0?null:o;var f=u.memoizedState.inst;nn!==null&&o!==null&&zh(o,nn.memoizedState.deps)?u.memoizedState=so(n,f,a,o):(_e.flags|=e,u.memoizedState=so(1|n,f,a,o))}function G0(e,n){Nc(8390656,8,e,n)}function Zh(e,n){Oc(2048,8,e,n)}function ey(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Dc(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function V0(e){var n=Fn().memoizedState;return ey({ref:n,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function k0(e,n){return Oc(4,2,e,n)}function X0(e,n){return Oc(4,4,e,n)}function W0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Y0(e,n,a){a=a!=null?a.concat([e]):null,Oc(4,4,W0.bind(null,n,e),a)}function Kh(){}function q0(e,n){var a=Fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&zh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function j0(e,n){var a=Fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&zh(n,o[1]))return o[0];if(o=e(),vr){Lt(!0);try{e()}finally{Lt(!1)}}return a.memoizedState=[o,n],o}function Qh(e,n,a){return a===void 0||(Ka&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Zg(),_e.lanes|=e,Ns|=e,a)}function Z0(e,n,a,o){return Gi(a,n)?a:no.current!==null?(e=Qh(e,a,o),Gi(e,n)||(Vn=!0),e):(Ka&42)===0||(Ka&1073741824)!==0&&(Ie&261930)===0?(Vn=!0,e.memoizedState=a):(e=Zg(),_e.lanes|=e,Ns|=e,n)}function K0(e,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var v=O.T,A={};O.T=A,td(e,!1,n,a);try{var G=u(),at=O.S;if(at!==null&&at(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=KS(G,o);_l(e,n,pt,qi(e))}else _l(e,n,o,qi(e))}catch(vt){_l(e,n,{then:function(){},status:"rejected",reason:vt},qi())}finally{F.p=f,v!==null&&A.types!==null&&(v.types=A.types),O.T=v}}function ny(){}function Jh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Q0(e).queue;K0(e,u,n,ot,a===null?ny:function(){return J0(e),a(o)})}function Q0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function J0(e){var n=Q0(e);n.next===null&&(n=e.alternate.memoizedState),_l(e,n.next.queue,{},qi())}function $h(){return oi(Ol)}function $0(){return Fn().memoizedState}function tg(){return Fn().memoizedState}function iy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qi();e=Rs(a);var o=Cs(n,e,a);o!==null&&(Pi(o,n,a),hl(o,n,a)),n={cache:Ch()},e.payload=n;return}n=n.return}}function ay(e,n,a){var o=qi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ic(e)?ng(n,a):(a=_h(e,n,a,o),a!==null&&(Pi(a,e,o),ig(a,n,o)))}function eg(e,n,a){var o=qi();_l(e,n,a,o)}function _l(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ic(e))ng(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,Gi(A,v))return mc(e,n,u,0),un===null&&pc(),!1}catch{}if(a=_h(e,n,u,o),a!==null)return Pi(a,e,o),ig(a,n,o),!0}return!1}function td(e,n,a,o){if(o={lane:2,revertLane:Ld(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ic(e)){if(n)throw Error(s(479))}else n=_h(e,a,o,2),n!==null&&Pi(n,e,2)}function Ic(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function ng(e,n){io=Cc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ig(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ga(e,a)}}var vl={readContext:oi,use:Uc,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useLayoutEffect:Nn,useInsertionEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useSyncExternalStore:Nn,useId:Nn,useHostTransitionStatus:Nn,useFormState:Nn,useActionState:Nn,useOptimistic:Nn,useMemoCache:Nn,useCacheRefresh:Nn};vl.useEffectEvent=Nn;var ag={readContext:oi,use:Uc,useCallback:function(e,n){return Ti().memoizedState=[e,n===void 0?null:n],e},useContext:oi,useEffect:G0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Nc(4194308,4,W0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Nc(4194308,4,e,n)},useInsertionEffect:function(e,n){Nc(4,2,e,n)},useMemo:function(e,n){var a=Ti();n=n===void 0?null:n;var o=e();if(vr){Lt(!0);try{e()}finally{Lt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ti();if(a!==void 0){var u=a(n);if(vr){Lt(!0);try{a(n)}finally{Lt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ay.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=Ti();return e={current:e},n.memoizedState=e},useState:function(e){e=qh(e);var n=e.queue,a=eg.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Kh,useDeferredValue:function(e,n){var a=Ti();return Qh(a,e,n)},useTransition:function(){var e=qh(!1);return e=K0.bind(null,_e,e.queue,!0,!1),Ti().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=Ti();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),un===null)throw Error(s(349));(Ie&127)!==0||b0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,G0(R0.bind(null,o,f,e),[e]),o.flags|=2048,so(9,{destroy:void 0},A0.bind(null,o,f,a,n),null),a},useId:function(){var e=Ti(),n=un.identifierPrefix;if(Fe){var a=Oa,o=Na;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=QS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$h,useFormState:P0,useActionState:P0,useOptimistic:function(e){var n=Ti();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=td.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:Xh,useCacheRefresh:function(){return Ti().memoizedState=iy.bind(null,_e)},useEffectEvent:function(e){var n=Ti(),a={impl:e};return n.memoizedState=a,function(){if((Ke&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ed={readContext:oi,use:Uc,useCallback:q0,useContext:oi,useEffect:Zh,useImperativeHandle:Y0,useInsertionEffect:k0,useLayoutEffect:X0,useMemo:j0,useReducer:Lc,useRef:H0,useState:function(){return Lc(Qa)},useDebugValue:Kh,useDeferredValue:function(e,n){var a=Fn();return Z0(a,nn.memoizedState,e,n)},useTransition:function(){var e=Lc(Qa)[0],n=Fn().memoizedState;return[typeof e=="boolean"?e:gl(e),n]},useSyncExternalStore:T0,useId:$0,useHostTransitionStatus:$h,useFormState:F0,useActionState:F0,useOptimistic:function(e,n){var a=Fn();return D0(a,nn,e,n)},useMemoCache:Xh,useCacheRefresh:tg};ed.useEffectEvent=V0;var sg={readContext:oi,use:Uc,useCallback:q0,useContext:oi,useEffect:Zh,useImperativeHandle:Y0,useInsertionEffect:k0,useLayoutEffect:X0,useMemo:j0,useReducer:Yh,useRef:H0,useState:function(){return Yh(Qa)},useDebugValue:Kh,useDeferredValue:function(e,n){var a=Fn();return nn===null?Qh(a,e,n):Z0(a,nn.memoizedState,e,n)},useTransition:function(){var e=Yh(Qa)[0],n=Fn().memoizedState;return[typeof e=="boolean"?e:gl(e),n]},useSyncExternalStore:T0,useId:$0,useHostTransitionStatus:$h,useFormState:z0,useActionState:z0,useOptimistic:function(e,n){var a=Fn();return nn!==null?D0(a,nn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xh,useCacheRefresh:tg};sg.useEffectEvent=V0;function nd(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var id={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=qi(),u=Rs(o);u.payload=n,a!=null&&(u.callback=a),n=Cs(e,u,o),n!==null&&(Pi(n,e,o),hl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=qi(),u=Rs(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Cs(e,u,o),n!==null&&(Pi(n,e,o),hl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qi(),o=Rs(a);o.tag=2,n!=null&&(o.callback=n),n=Cs(e,o,a),n!==null&&(Pi(n,e,a),hl(n,e,a))}};function rg(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!al(a,o)||!al(u,f):!0}function og(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&id.enqueueReplaceState(n,n.state,null)}function xr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function lg(e){dc(e)}function cg(e){console.error(e)}function ug(e){dc(e)}function Pc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function fg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ad(e,n,a){return a=Rs(a),a.tag=3,a.payload={element:null},a.callback=function(){Pc(e,n)},a}function hg(e){return e=Rs(e),e.tag=3,e}function dg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){fg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){fg(n,a,o),typeof u!="function"&&(Os===null?Os=new Set([this]):Os.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function sy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qr(n,a,u,!0),a=ki.current,a!==null){switch(a.tag){case 31:case 13:return ra===null?jc():a.alternate===null&&On===0&&(On=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wd(e,o,u)),!1;case 22:return a.flags|=65536,o===Ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wd(e,o,u)),!1}throw Error(s(435,a.tag))}return wd(e,o,u),jc(),!1}if(Fe)return n=ki.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Eh&&(e=Error(s(422),{cause:o}),ol(na(e,a)))):(o!==Eh&&(n=Error(s(423),{cause:o}),ol(na(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=na(o,a),u=ad(e.stateNode,o,u),Oh(e,u),On!==4&&(On=2)),!1;var f=Error(s(520),{cause:o});if(f=na(f,a),Al===null?Al=[f]:Al.push(f),On!==4&&(On=2),n===null)return!0;o=na(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ad(a.stateNode,o,e),Oh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Os===null||!Os.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=hg(u),dg(u,e,a,o),Oh(a,u),!1}a=a.return}while(a!==null);return!1}var sd=Error(s(461)),Vn=!1;function li(e,n,a,o){n.child=e===null?_0(n,null,a,o):_r(n,e.child,a,o)}function pg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var A in o)A!=="ref"&&(v[A]=o[A])}else v=o;return dr(n),o=Hh(e,n,a,v,f,u),A=Gh(),e!==null&&!Vn?(Vh(e,n,u),Ja(e,n,u)):(Fe&&A&&yh(n),n.flags|=1,li(e,n,o,u),n.child)}function mg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!vh(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,gg(e,n,f,o,u)):(e=_c(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!dd(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:al,a(v,o)&&e.ref===n.ref)return Ja(e,n,u)}return n.flags|=1,e=Ya(f,o),e.ref=n.ref,e.return=n,n.child=e}function gg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(al(f,o)&&e.ref===n.ref)if(Vn=!1,n.pendingProps=o=f,dd(e,u))(e.flags&131072)!==0&&(Vn=!0);else return n.lanes=e.lanes,Ja(e,n,u)}return rd(e,n,a,o,u)}function _g(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return vg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yc(n,f!==null?f.cachePool:null),f!==null?S0(n,f):Ph(),y0(n);else return o=n.lanes=536870912,vg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(yc(n,f.cachePool),S0(n,f),Ds(),n.memoizedState=null):(e!==null&&yc(n,null),Ph(),Ds());return li(e,n,u,a),n.child}function xl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vg(e,n,a,o,u){var f=Dh();return f=f===null?null:{parent:Hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&yc(n,null),Ph(),y0(n),e!==null&&Qr(e,n,o,!0),n.childLanes=u,null}function Fc(e,n){return n=zc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function xg(e,n,a){return _r(n,e.child,null,a),e=Fc(n,n.pendingProps),e.flags|=2,Xi(n),n.memoizedState=null,e}function ry(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Fe){if(o.mode==="hidden")return e=Fc(n,o),n.lanes=536870912,xl(null,e);if(Bh(n),(e=gn)?(e=U_(e,sa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ms!==null?{id:Na,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},a=n0(e),a.return=n,n.child=a,ri=n,gn=null)):e=null,e===null)throw Ts(n);return n.lanes=536870912,null}return Fc(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Bh(n),u)if(n.flags&256)n.flags&=-257,n=xg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Vn||Qr(e,n,a,!1),u=(a&e.childLanes)!==0,Vn||u){if(o=un,o!==null&&(v=ir(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,cr(e,v),Pi(o,e,v),sd;jc(),n=xg(e,n,a)}else e=f.treeContext,gn=oa(v.nextSibling),ri=n,Fe=!0,Es=null,sa=!1,e!==null&&s0(n,e),n=Fc(n,o),n.flags|=4096;return n}return e=Ya(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Bc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rd(e,n,a,o,u){return dr(n),a=Hh(e,n,a,o,void 0,u),o=Gh(),e!==null&&!Vn?(Vh(e,n,u),Ja(e,n,u)):(Fe&&o&&yh(n),n.flags|=1,li(e,n,a,u),n.child)}function Sg(e,n,a,o,u,f){return dr(n),n.updateQueue=null,a=E0(n,o,a,u),M0(e),o=Gh(),e!==null&&!Vn?(Vh(e,n,f),Ja(e,n,f)):(Fe&&o&&yh(n),n.flags|=1,li(e,n,a,f),n.child)}function yg(e,n,a,o,u){if(dr(n),n.stateNode===null){var f=qr,v=a.contextType;typeof v=="object"&&v!==null&&(f=oi(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=id,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Lh(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?oi(v):qr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(nd(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&id.enqueueReplaceState(f,f.state,null),pl(n,o,f,u),dl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=xr(a,A);f.props=G;var at=f.context,pt=a.contextType;v=qr,typeof pt=="object"&&pt!==null&&(v=oi(pt));var vt=a.getDerivedStateFromProps;pt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||at!==v)&&og(n,f,o,v),As=!1;var rt=n.memoizedState;f.state=rt,pl(n,o,f,u),dl(),at=n.memoizedState,A||rt!==at||As?(typeof vt=="function"&&(nd(n,a,vt,o),at=n.memoizedState),(G=As||rg(n,a,G,o,rt,at,v))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=v,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Nh(e,n),v=n.memoizedProps,pt=xr(a,v),f.props=pt,vt=n.pendingProps,rt=f.context,at=a.contextType,G=qr,typeof at=="object"&&at!==null&&(G=oi(at)),A=a.getDerivedStateFromProps,(at=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==vt||rt!==G)&&og(n,f,o,G),As=!1,rt=n.memoizedState,f.state=rt,pl(n,o,f,u),dl();var ut=n.memoizedState;v!==vt||rt!==ut||As||e!==null&&e.dependencies!==null&&xc(e.dependencies)?(typeof A=="function"&&(nd(n,a,A,o),ut=n.memoizedState),(pt=As||rg(n,a,pt,o,rt,ut,G)||e!==null&&e.dependencies!==null&&xc(e.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=G,o=pt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Bc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=_r(n,e.child,null,u),n.child=_r(n,null,a,u)):li(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ja(e,n,u),e}function Mg(e,n,a,o){return fr(),n.flags|=256,li(e,n,a,o),n.child}var od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ld(e){return{baseLanes:e,cachePool:f0()}}function cd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Yi),e}function Eg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Pn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Fe){if(u?ws(n):Ds(),(e=gn)?(e=U_(e,sa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ms!==null?{id:Na,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},a=n0(e),a.return=n,n.child=a,ri=n,gn=null)):e=null,e===null)throw Ts(n);return Wd(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ds(),u=n.mode,A=zc({mode:"hidden",children:A},u),o=ur(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=ld(a),o.childLanes=cd(e,v,a),n.memoizedState=od,xl(null,o)):(ws(n),ud(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(ws(n),n.flags&=-257,n=fd(e,n,a)):n.memoizedState!==null?(Ds(),n.child=e.child,n.flags|=128,n=null):(Ds(),A=o.fallback,u=n.mode,o=zc({mode:"visible",children:o.children},u),A=ur(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,_r(n,e.child,null,a),o=n.child,o.memoizedState=ld(a),o.childLanes=cd(e,v,a),n.memoizedState=od,n=xl(null,o));else if(ws(n),Wd(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var at=v.dgst;v=at,o=Error(s(419)),o.stack="",o.digest=v,ol({value:o,source:null,stack:null}),n=fd(e,n,a)}else if(Vn||Qr(e,n,a,!1),v=(a&e.childLanes)!==0,Vn||v){if(v=un,v!==null&&(o=ir(v,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,cr(e,o),Pi(v,e,o),sd;Xd(A)||jc(),n=fd(e,n,a)}else Xd(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,gn=oa(A.nextSibling),ri=n,Fe=!0,Es=null,sa=!1,e!==null&&s0(n,e),n=ud(n,o.children),n.flags|=4096);return n}return u?(Ds(),A=o.fallback,u=n.mode,G=e.child,at=G.sibling,o=Ya(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,at!==null?A=Ya(at,A):(A=ur(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,xl(null,o),o=n.child,A=e.child.memoizedState,A===null?A=ld(a):(u=A.cachePool,u!==null?(G=Hn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=f0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=cd(e,v,a),n.memoizedState=od,xl(e.child,o)):(ws(n),a=e.child,e=a.sibling,a=Ya(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function ud(e,n){return n=zc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function zc(e,n){return e=Vi(22,e,null,n),e.lanes=0,e}function fd(e,n,a){return _r(n,e.child,null,a),e=ud(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ah(e.return,n,a)}function hd(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function bg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=Pn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,ft(Pn,v),li(e,n,o,a),o=Fe?rl:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tg(e,a,n);else if(e.tag===19)Tg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Rc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hd(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Rc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}hd(n,!0,a,null,f,o);break;case"together":hd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ja(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ns|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ya(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ya(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function dd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xc(e)))}function oy(e,n,a){switch(n.tag){case 3:xt(n,n.stateNode.containerInfo),bs(n,Hn,e.memoizedState.cache),fr();break;case 27:case 5:Kt(n);break;case 4:xt(n,n.stateNode.containerInfo);break;case 10:bs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ws(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Eg(e,n,a):(ws(n),e=Ja(e,n,a),e!==null?e.sibling:null);ws(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return bg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ft(Pn,Pn.current),o)break;return null;case 22:return n.lanes=0,_g(e,n,a,n.pendingProps);case 24:bs(n,Hn,e.memoizedState.cache)}return Ja(e,n,a)}function Ag(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Vn=!0;else{if(!dd(e,a)&&(n.flags&128)===0)return Vn=!1,oy(e,n,a);Vn=(e.flags&131072)!==0}else Vn=!1,Fe&&(n.flags&1048576)!==0&&a0(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=mr(n.elementType),n.type=e,typeof e=="function")vh(e)?(o=xr(e,o),n.tag=1,n=yg(null,n,e,o,a)):(n.tag=0,n=rd(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=pg(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=mg(null,n,e,o,a);break t}}throw n=it(e)||e,Error(s(306,n,""))}}return n;case 0:return rd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=xr(o,n.pendingProps),yg(e,n,o,u,a);case 3:t:{if(xt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Nh(e,n),pl(n,o,null,a);var v=n.memoizedState;if(o=v.cache,bs(n,Hn,o),o!==f.cache&&Rh(n,[Hn],a,!0),dl(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Mg(e,n,o,a);break t}else if(o!==u){u=na(Error(s(424)),n),ol(u),n=Mg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,gn=oa(e.firstChild),ri=n,Fe=!0,Es=null,sa=!0,a=_0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fr(),o===u){n=Ja(e,n,a);break t}li(e,n,o,a)}n=n.child}return n;case 26:return Bc(e,n),e===null?(a=F_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Fe||(a=n.type,e=n.pendingProps,o=eu(et.current).createElement(a),o[Rn]=n,o[Cn]=e,ci(o,a,e),W(o),n.stateNode=o):n.memoizedState=F_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Fe&&(o=n.stateNode=O_(n.type,n.pendingProps,et.current),ri=n,sa=!0,u=gn,Bs(n.type)?(Yd=u,gn=oa(o.firstChild)):gn=u),li(e,n,n.pendingProps.children,a),Bc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Fe&&((u=o=gn)&&(o=Fy(o,n.type,n.pendingProps,sa),o!==null?(n.stateNode=o,ri=n,gn=oa(o.firstChild),sa=!1,u=!0):u=!1),u||Ts(n)),Kt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Gd(u,f)?o=null:v!==null&&Gd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Hh(e,n,JS,null,null,a),Ol._currentValue=u),Bc(e,n),li(e,n,o,a),n.child;case 6:return e===null&&Fe&&((e=a=gn)&&(a=By(a,n.pendingProps,sa),a!==null?(n.stateNode=a,ri=n,gn=null,e=!0):e=!1),e||Ts(n)),null;case 13:return Eg(e,n,a);case 4:return xt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=_r(n,null,o,a):li(e,n,o,a),n.child;case 11:return pg(e,n,n.type,n.pendingProps,a);case 7:return li(e,n,n.pendingProps,a),n.child;case 8:return li(e,n,n.pendingProps.children,a),n.child;case 12:return li(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,bs(n,n.type,o.value),li(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,dr(n),u=oi(u),o=o(u),n.flags|=1,li(e,n,o,a),n.child;case 14:return mg(e,n,n.type,n.pendingProps,a);case 15:return gg(e,n,n.type,n.pendingProps,a);case 19:return bg(e,n,a);case 31:return ry(e,n,a);case 22:return _g(e,n,a,n.pendingProps);case 24:return dr(n),o=oi(Hn),e===null?(u=Dh(),u===null&&(u=un,f=Ch(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Lh(n),bs(n,Hn,u)):((e.lanes&a)!==0&&(Nh(e,n),pl(n,null,null,a),dl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),bs(n,Hn,o)):(o=f.cache,bs(n,Hn,o),o!==u.cache&&Rh(n,[Hn],a,!0))),li(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function $a(e){e.flags|=4}function pd(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if($g())e.flags|=8192;else throw gr=Ec,Uh}else e.flags&=-16777217}function Rg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!V_(n))if($g())e.flags|=8192;else throw gr=Ec,Uh}function Hc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ve():536870912,e.lanes|=n,co|=n)}function Sl(e,n){if(!Fe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function _n(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ly(e,n,a){var o=n.pendingProps;switch(Mh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(n),null;case 1:return _n(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Za(Hn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Kr(n)?$a(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Th())),_n(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?($a(n),f!==null?(_n(n),Rg(n,f)):(_n(n),pd(n,u,null,o,a))):f?f!==e.memoizedState?($a(n),_n(n),Rg(n,f)):(_n(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&$a(n),_n(n),pd(n,u,e,o,a)),null;case 27:if(ne(n),a=et.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}e=Mt.current,Kr(n)?r0(n):(e=O_(u,o,a),n.stateNode=e,$a(n))}return _n(n),null;case 5:if(ne(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}if(f=Mt.current,Kr(n))r0(n);else{var v=eu(et.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[Rn]=n,f[Cn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(ci(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&$a(n)}}return _n(n),pd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$a(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,Kr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ri,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||E_(e.nodeValue,a)),e||Ts(n,!0)}else e=eu(e).createTextNode(o),e[Rn]=n,n.stateNode=e}return _n(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Kr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Rn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),e=!1}else a=Th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Xi(n),n):(Xi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return _n(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Kr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Rn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),u=!1}else u=Th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Xi(n),n):(Xi(n),null)}return Xi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Hc(n,n.updateQueue),_n(n),null);case 4:return Xt(),e===null&&Pd(n.stateNode.containerInfo),_n(n),null;case 10:return Za(n.type),_n(n),null;case 19:if(q(Pn),o=n.memoizedState,o===null)return _n(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Sl(o,!1);else{if(On!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rc(e),f!==null){for(n.flags|=128,Sl(o,!1),e=f.updateQueue,n.updateQueue=e,Hc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)e0(a,e),a=a.sibling;return ft(Pn,Pn.current&1|2),Fe&&qa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Wc&&(n.flags|=128,u=!0,Sl(o,!1),n.lanes=4194304)}else{if(!u)if(e=Rc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Hc(n,e),Sl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Fe)return _n(n),null}else 2*E()-o.renderingStartTime>Wc&&a!==536870912&&(n.flags|=128,u=!0,Sl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=Pn.current,ft(Pn,u?a&1|2:a&1),Fe&&qa(n,o.treeForkCount),e):(_n(n),null);case 22:case 23:return Xi(n),Fh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(_n(n),n.subtreeFlags&6&&(n.flags|=8192)):_n(n),a=n.updateQueue,a!==null&&Hc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Za(Hn),_n(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cy(e,n){switch(Mh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Za(Hn),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ne(n),null;case 31:if(n.memoizedState!==null){if(Xi(n),n.alternate===null)throw Error(s(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(Pn),null;case 4:return Xt(),null;case 10:return Za(n.type),null;case 22:case 23:return Xi(n),Fh(),e!==null&&q(pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Za(Hn),null;case 25:return null;default:return null}}function Cg(e,n){switch(Mh(n),n.tag){case 3:Za(Hn),Xt();break;case 26:case 27:case 5:ne(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&Xi(n);break;case 13:Xi(n);break;case 19:q(Pn);break;case 10:Za(n.type);break;case 22:case 23:Xi(n),Fh(),e!==null&&q(pr);break;case 24:Za(Hn)}}function yl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(A){$e(n,n.return,A)}}function Us(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var G=a,at=A;try{at()}catch(pt){$e(u,G,pt)}}}o=o.next}while(o!==f)}}catch(pt){$e(n,n.return,pt)}}function wg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{x0(n,a)}catch(o){$e(e,e.return,o)}}}function Dg(e,n,a){a.props=xr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){$e(e,n,o)}}function Ml(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){$e(e,n,u)}}function Ia(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){$e(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){$e(e,n,u)}else a.current=null}function Ug(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){$e(e,e.return,u)}}function md(e,n,a){try{var o=e.stateNode;Uy(o,e.type,a,n),o[Cn]=n}catch(u){$e(e,e.return,u)}}function Lg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bs(e.type)||e.tag===4}function gd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _d(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&Bs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(_d(e,n,a),e=e.sibling;e!==null;)_d(e,n,a),e=e.sibling}function Gc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Bs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gc(e,n,a),e=e.sibling;e!==null;)Gc(e,n,a),e=e.sibling}function Ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ci(n,o,a),n[Rn]=e,n[Cn]=a}catch(f){$e(e,e.return,f)}}var ts=!1,kn=!1,vd=!1,Og=typeof WeakSet=="function"?WeakSet:Set,Jn=null;function uy(e,n){if(e=e.containerInfo,zd=lu,e=Ym(e),fh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,A=-1,G=-1,at=0,pt=0,vt=e,rt=null;e:for(;;){for(var ut;vt!==a||u!==0&&vt.nodeType!==3||(A=v+u),vt!==f||o!==0&&vt.nodeType!==3||(G=v+o),vt.nodeType===3&&(v+=vt.nodeValue.length),(ut=vt.firstChild)!==null;)rt=vt,vt=ut;for(;;){if(vt===e)break e;if(rt===a&&++at===u&&(A=v),rt===f&&++pt===o&&(G=v),(ut=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ut}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hd={focusedElem:e,selectionRange:a},lu=!1,Jn=n;Jn!==null;)if(n=Jn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Jn=e;else for(;Jn!==null;){switch(n=Jn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Zt=xr(a.type,u);e=o.getSnapshotBeforeUpdate(Zt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(oe){$e(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)kd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Jn=e;break}Jn=n.return}}function Ig(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ns(e,a),o&4&&yl(5,a);break;case 1:if(ns(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){$e(a,a.return,v)}else{var u=xr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){$e(a,a.return,v)}}o&64&&wg(a),o&512&&Ml(a,a.return);break;case 3:if(ns(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{x0(e,n)}catch(v){$e(a,a.return,v)}}break;case 27:n===null&&o&4&&Ng(a);case 26:case 5:ns(e,a),n===null&&o&4&&Ug(a),o&512&&Ml(a,a.return);break;case 12:ns(e,a);break;case 31:ns(e,a),o&4&&Bg(e,a);break;case 13:ns(e,a),o&4&&zg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xy.bind(null,a),zy(e,a))));break;case 22:if(o=a.memoizedState!==null||ts,!o){n=n!==null&&n.memoizedState!==null||kn,u=ts;var f=kn;ts=o,(kn=n)&&!f?is(e,a,(a.subtreeFlags&8772)!==0):ns(e,a),ts=u,kn=f}break;case 30:break;default:ns(e,a)}}function Pg(e){var n=e.alternate;n!==null&&(e.alternate=null,Pg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ua(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xn=null,Li=!1;function es(e,n,a){for(a=a.child;a!==null;)Fg(e,n,a),a=a.sibling}function Fg(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:kn||Ia(a,n),es(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:kn||Ia(a,n);var o=xn,u=Li;Bs(a.type)&&(xn=a.stateNode,Li=!1),es(e,n,a),Ul(a.stateNode),xn=o,Li=u;break;case 5:kn||Ia(a,n);case 6:if(o=xn,u=Li,xn=null,es(e,n,a),xn=o,Li=u,xn!==null)if(Li)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(a.stateNode)}catch(f){$e(a,n,f)}else try{xn.removeChild(a.stateNode)}catch(f){$e(a,n,f)}break;case 18:xn!==null&&(Li?(e=xn,w_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vo(e)):w_(xn,a.stateNode));break;case 4:o=xn,u=Li,xn=a.stateNode.containerInfo,Li=!0,es(e,n,a),xn=o,Li=u;break;case 0:case 11:case 14:case 15:Us(2,a,n),kn||Us(4,a,n),es(e,n,a);break;case 1:kn||(Ia(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Dg(a,n,o)),es(e,n,a);break;case 21:es(e,n,a);break;case 22:kn=(o=kn)||a.memoizedState!==null,es(e,n,a),kn=o;break;default:es(e,n,a)}}function Bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vo(e)}catch(a){$e(n,n.return,a)}}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(a){$e(n,n.return,a)}}function fy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Og),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Og),n;default:throw Error(s(435,e.tag))}}function Vc(e,n){var a=fy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Sy.bind(null,e,o);o.then(u,u)}})}function Ni(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,A=v;t:for(;A!==null;){switch(A.tag){case 27:if(Bs(A.type)){xn=A.stateNode,Li=!1;break t}break;case 5:xn=A.stateNode,Li=!1;break t;case 3:case 4:xn=A.stateNode.containerInfo,Li=!0;break t}A=A.return}if(xn===null)throw Error(s(160));Fg(f,v,u),xn=null,Li=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hg(n,e),n=n.sibling}var Sa=null;function Hg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ni(n,e),Oi(e),o&4&&(Us(3,e,e.return),yl(3,e),Us(5,e,e.return));break;case 1:Ni(n,e),Oi(e),o&512&&(kn||a===null||Ia(a,a.return)),o&64&&ts&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Sa;if(Ni(n,e),Oi(e),o&512&&(kn||a===null||Ia(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wi]||f[Rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),ci(f,o,a),f[Rn]=e,W(f),o=f;break t;case"link":var v=H_("link","href",u).get(o+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break e}}f=u.createElement(o),ci(f,o,a),u.head.appendChild(f);break;case"meta":if(v=H_("meta","content",u).get(o+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break e}}f=u.createElement(o),ci(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Rn]=e,W(f),o=f}e.stateNode=o}else G_(u,e.type,e.stateNode);else e.stateNode=z_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?G_(u,e.type,e.stateNode):z_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&md(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ni(n,e),Oi(e),o&512&&(kn||a===null||Ia(a,a.return)),a!==null&&o&4&&md(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ni(n,e),Oi(e),o&512&&(kn||a===null||Ia(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(Zt){$e(e,e.return,Zt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,md(e,u,a!==null?a.memoizedProps:u)),o&1024&&(vd=!0);break;case 6:if(Ni(n,e),Oi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Zt){$e(e,e.return,Zt)}}break;case 3:if(au=null,u=Sa,Sa=nu(n.containerInfo),Ni(n,e),Sa=u,Oi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(n.containerInfo)}catch(Zt){$e(e,e.return,Zt)}vd&&(vd=!1,Gg(e));break;case 4:o=Sa,Sa=nu(e.stateNode.containerInfo),Ni(n,e),Oi(e),Sa=o;break;case 12:Ni(n,e),Oi(e);break;case 31:Ni(n,e),Oi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vc(e,o)));break;case 13:Ni(n,e),Oi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,at=ts,pt=kn;if(ts=at||u,kn=pt||G,Ni(n,e),kn=pt,ts=at,Oi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ts||kn||Sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=G.stateNode;var vt=G.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Zt){$e(G,G.return,Zt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Zt){$e(G,G.return,Zt)}}}else if(n.tag===18){if(a===null){G=n;try{var ut=G.stateNode;u?D_(ut,!0):D_(G.stateNode,!1)}catch(Zt){$e(G,G.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vc(e,a))));break;case 19:Ni(n,e),Oi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vc(e,o)));break;case 30:break;case 21:break;default:Ni(n,e),Oi(e)}}function Oi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Lg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=gd(e);Gc(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(zn(v,""),a.flags&=-33);var A=gd(e);Gc(e,A,v);break;case 3:case 4:var G=a.stateNode.containerInfo,at=gd(e);_d(e,at,G);break;default:throw Error(s(161))}}catch(pt){$e(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ns(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ig(e,n.alternate,n),n=n.sibling}function Sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Us(4,n,n.return),Sr(n);break;case 1:Ia(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Dg(n,n.return,a),Sr(n);break;case 27:Ul(n.stateNode);case 26:case 5:Ia(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}e=e.sibling}}function is(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:is(u,f,a),yl(4,f);break;case 1:if(is(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){$e(o,o.return,at)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)v0(G[u],A)}catch(at){$e(o,o.return,at)}}a&&v&64&&wg(f),Ml(f,f.return);break;case 27:Ng(f);case 26:case 5:is(u,f,a),a&&o===null&&v&4&&Ug(f),Ml(f,f.return);break;case 12:is(u,f,a);break;case 31:is(u,f,a),a&&v&4&&Bg(u,f);break;case 13:is(u,f,a),a&&v&4&&zg(u,f);break;case 22:f.memoizedState===null&&is(u,f,a),Ml(f,f.return);break;case 30:break;default:is(u,f,a)}n=n.sibling}}function xd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ll(a))}function Sd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ll(e))}function ya(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vg(e,n,a,o),n=n.sibling}function Vg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ya(e,n,a,o),u&2048&&yl(9,n);break;case 1:ya(e,n,a,o);break;case 3:ya(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ll(e)));break;case 12:if(u&2048){ya(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){$e(n,n.return,G)}}else ya(e,n,a,o);break;case 31:ya(e,n,a,o);break;case 13:ya(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?ya(e,n,a,o):El(e,n):f._visibility&2?ya(e,n,a,o):(f._visibility|=2,ro(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xd(v,n);break;case 24:ya(e,n,a,o),u&2048&&Sd(n.alternate,n);break;default:ya(e,n,a,o)}}function ro(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,G=o,at=v.flags;switch(v.tag){case 0:case 11:case 15:ro(f,v,A,G,u),yl(8,v);break;case 23:break;case 22:var pt=v.stateNode;v.memoizedState!==null?pt._visibility&2?ro(f,v,A,G,u):El(f,v):(pt._visibility|=2,ro(f,v,A,G,u)),u&&at&2048&&xd(v.alternate,v);break;case 24:ro(f,v,A,G,u),u&&at&2048&&Sd(v.alternate,v);break;default:ro(f,v,A,G,u)}n=n.sibling}}function El(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:El(a,o),u&2048&&xd(o.alternate,o);break;case 24:El(a,o),u&2048&&Sd(o.alternate,o);break;default:El(a,o)}n=n.sibling}}var Tl=8192;function oo(e,n,a){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)kg(e,n,a),e=e.sibling}function kg(e,n,a){switch(e.tag){case 26:oo(e,n,a),e.flags&Tl&&e.memoizedState!==null&&Qy(a,Sa,e.memoizedState,e.memoizedProps);break;case 5:oo(e,n,a);break;case 3:case 4:var o=Sa;Sa=nu(e.stateNode.containerInfo),oo(e,n,a),Sa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Tl,Tl=16777216,oo(e,n,a),Tl=o):oo(e,n,a));break;default:oo(e,n,a)}}function Xg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,Yg(o,e)}Xg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wg(e),e=e.sibling}function Wg(e){switch(e.tag){case 0:case 11:case 15:bl(e),e.flags&2048&&Us(9,e,e.return);break;case 3:bl(e);break;case 12:bl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kc(e)):bl(e);break;default:bl(e)}}function kc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,Yg(o,e)}Xg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Us(8,n,n.return),kc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kc(n));break;default:kc(n)}e=e.sibling}}function Yg(e,n){for(;Jn!==null;){var a=Jn;switch(a.tag){case 0:case 11:case 15:Us(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ll(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Jn=o;else t:for(a=e;Jn!==null;){o=Jn;var u=o.sibling,f=o.return;if(Pg(o),o===a){Jn=null;break t}if(u!==null){u.return=f,Jn=u;break t}Jn=f}}}var hy={getCacheForType:function(e){var n=oi(Hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return oi(Hn).controller.signal}},dy=typeof WeakMap=="function"?WeakMap:Map,Ke=0,un=null,Ue=null,Ie=0,Je=0,Wi=null,Ls=!1,lo=!1,yd=!1,as=0,On=0,Ns=0,yr=0,Md=0,Yi=0,co=0,Al=null,Ii=null,Ed=!1,Xc=0,qg=0,Wc=1/0,Yc=null,Os=null,qn=0,Is=null,uo=null,ss=0,Td=0,bd=null,jg=null,Rl=0,Ad=null;function qi(){return(Ke&2)!==0&&Ie!==0?Ie&-Ie:O.T!==null?Ld():Qi()}function Zg(){if(Yi===0)if((Ie&536870912)===0||Fe){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),Yi=e}else Yi=536870912;return e=ki.current,e!==null&&(e.flags|=32),Yi}function Pi(e,n,a){(e===un&&(Je===2||Je===9)||e.cancelPendingCommit!==null)&&(fo(e,0),Ps(e,Ie,Yi,!1)),An(e,a),((Ke&2)===0||e!==un)&&(e===un&&((Ke&2)===0&&(yr|=a),On===4&&Ps(e,Ie,Yi,!1)),Pa(e))}function Kg(e,n,a){if((Ke&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),u=o?gy(e,n):Cd(e,n,!0),f=o;do{if(u===0){lo&&!o&&Ps(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!py(a)){u=Cd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=e;u=Al;var G=A.current.memoizedState.isDehydrated;if(G&&(fo(A,v).flags|=256),v=Cd(A,v,!1),v!==2){if(yd&&!G){A.errorRecoveryDisabledLanes|=f,yr|=f,u=4;break t}f=Ii,Ii=u,f!==null&&(Ii===null?Ii=f:Ii.push.apply(Ii,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){fo(e,0),Ps(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ps(o,n,Yi,!Ls);break t;case 2:Ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Xc+300-E(),10<u)){if(Ps(o,n,Yi,!Ls),ht(o,0,!0)!==0)break t;ss=n,o.timeoutHandle=R_(Qg.bind(null,o,a,Ii,Yc,Ed,n,Yi,yr,co,Ls,f,"Throttled",-0,0),u);break t}Qg(o,a,Ii,Yc,Ed,n,Yi,yr,co,Ls,f,null,-0,0)}}break}while(!0);Pa(e)}function Qg(e,n,a,o,u,f,v,A,G,at,pt,vt,rt,ut){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},kg(n,f,vt);var Zt=(f&62914560)===f?Xc-E():(f&4194048)===f?qg-E():0;if(Zt=Jy(vt,Zt),Zt!==null){ss=f,e.cancelPendingCommit=Zt(s_.bind(null,e,n,f,a,o,u,v,A,G,pt,vt,null,rt,ut)),Ps(e,f,v,!at);return}}s_(e,n,f,a,o,u,v,A,G)}function py(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Gi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ps(e,n,a,o){n&=~Md,n&=~yr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&vs(e,a,n)}function qc(){return(Ke&6)===0?(Cl(0),!1):!0}function Rd(){if(Ue!==null){if(Je===0)var e=Ue.return;else e=Ue,ja=hr=null,kh(e),eo=null,ul=0,e=Ue;for(;e!==null;)Cg(e.alternate,e),e=e.return;Ue=null}}function fo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Oy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ss=0,Rd(),un=e,Ue=a=Ya(e.current,null),Ie=n,Je=0,Wi=null,Ls=!1,lo=zt(e,n),yd=!1,co=Yi=Md=yr=Ns=On=0,Ii=Al=null,Ed=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ot(o),f=1<<u;n|=e[u],o&=~f}return as=n,pc(),a}function Jg(e,n){_e=null,O.H=vl,n===to||n===Mc?(n=p0(),Je=3):n===Uh?(n=p0(),Je=4):Je=n===sd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wi=n,Ue===null&&(On=1,Pc(e,na(n,e.current)))}function $g(){var e=ki.current;return e===null?!0:(Ie&4194048)===Ie?ra===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===ra:!1}function t_(){var e=O.H;return O.H=vl,e===null?vl:e}function e_(){var e=O.A;return O.A=hy,e}function jc(){On=4,Ls||(Ie&4194048)!==Ie&&ki.current!==null||(lo=!0),(Ns&134217727)===0&&(yr&134217727)===0||un===null||Ps(un,Ie,Yi,!1)}function Cd(e,n,a){var o=Ke;Ke|=2;var u=t_(),f=e_();(un!==e||Ie!==n)&&(Yc=null,fo(e,n)),n=!1;var v=On;t:do try{if(Je!==0&&Ue!==null){var A=Ue,G=Wi;switch(Je){case 8:Rd(),v=6;break t;case 3:case 2:case 9:case 6:ki.current===null&&(n=!0);var at=Je;if(Je=0,Wi=null,ho(e,A,G,at),a&&lo){v=0;break t}break;default:at=Je,Je=0,Wi=null,ho(e,A,G,at)}}my(),v=On;break}catch(pt){Jg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ja=hr=null,Ke=o,O.H=u,O.A=f,Ue===null&&(un=null,Ie=0,pc()),v}function my(){for(;Ue!==null;)n_(Ue)}function gy(e,n){var a=Ke;Ke|=2;var o=t_(),u=e_();un!==e||Ie!==n?(Yc=null,Wc=E()+500,fo(e,n)):lo=zt(e,n);t:do try{if(Je!==0&&Ue!==null){n=Ue;var f=Wi;e:switch(Je){case 1:Je=0,Wi=null,ho(e,n,f,1);break;case 2:case 9:if(h0(f)){Je=0,Wi=null,i_(n);break}n=function(){Je!==2&&Je!==9||un!==e||(Je=7),Pa(e)},f.then(n,n);break t;case 3:Je=7;break t;case 4:Je=5;break t;case 7:h0(f)?(Je=0,Wi=null,i_(n)):(Je=0,Wi=null,ho(e,n,f,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var A=Ue;if(v?V_(v):A.stateNode.complete){Je=0,Wi=null;var G=A.sibling;if(G!==null)Ue=G;else{var at=A.return;at!==null?(Ue=at,Zc(at)):Ue=null}break e}}Je=0,Wi=null,ho(e,n,f,5);break;case 6:Je=0,Wi=null,ho(e,n,f,6);break;case 8:Rd(),On=6;break t;default:throw Error(s(462))}}_y();break}catch(pt){Jg(e,pt)}while(!0);return ja=hr=null,O.H=o,O.A=u,Ke=a,Ue!==null?0:(un=null,Ie=0,pc(),On)}function _y(){for(;Ue!==null&&!Wt();)n_(Ue)}function n_(e){var n=Ag(e.alternate,e,as);e.memoizedProps=e.pendingProps,n===null?Zc(e):Ue=n}function i_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Sg(a,n,n.pendingProps,n.type,void 0,Ie);break;case 11:n=Sg(a,n,n.pendingProps,n.type.render,n.ref,Ie);break;case 5:kh(n);default:Cg(a,n),n=Ue=e0(n,as),n=Ag(a,n,as)}e.memoizedProps=e.pendingProps,n===null?Zc(e):Ue=n}function ho(e,n,a,o){ja=hr=null,kh(n),eo=null,ul=0;var u=n.return;try{if(sy(e,u,n,a,Ie)){On=1,Pc(e,na(a,e.current)),Ue=null;return}}catch(f){if(u!==null)throw Ue=u,f;On=1,Pc(e,na(a,e.current)),Ue=null;return}n.flags&32768?(Fe||o===1?e=!0:lo||(Ie&536870912)!==0?e=!1:(Ls=e=!0,(o===2||o===9||o===3||o===6)&&(o=ki.current,o!==null&&o.tag===13&&(o.flags|=16384))),a_(n,e)):Zc(n)}function Zc(e){var n=e;do{if((n.flags&32768)!==0){a_(n,Ls);return}e=n.return;var a=ly(n.alternate,n,as);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);On===0&&(On=5)}function a_(e,n){do{var a=cy(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);On=6,Ue=null}function s_(e,n,a,o,u,f,v,A,G){e.cancelPendingCommit=null;do Kc();while(qn!==0);if((Ke&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=gh,Bi(e,a,f,v,A,G),e===un&&(Ue=un=null,Ie=0),uo=n,Is=e,ss=a,Td=f,bd=u,jg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yy(dt,function(){return u_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=F.p,F.p=2,v=Ke,Ke|=4;try{uy(e,n,a)}finally{Ke=v,F.p=u,O.T=o}}qn=1,r_(),o_(),l_()}}function r_(){if(qn===1){qn=0;var e=Is,n=uo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Ke;Ke|=4;try{Hg(n,e);var f=Hd,v=Ym(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Wm(A.ownerDocument.documentElement,A)){if(G!==null&&fh(A)){var at=G.start,pt=G.end;if(pt===void 0&&(pt=at),"selectionStart"in A)A.selectionStart=at,A.selectionEnd=Math.min(pt,A.value.length);else{var vt=A.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),Zt=A.textContent.length,oe=Math.min(G.start,Zt),sn=G.end===void 0?oe:Math.min(G.end,Zt);!ut.extend&&oe>sn&&(v=sn,sn=oe,oe=v);var Q=Xm(A,oe),X=Xm(A,sn);if(Q&&X&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var nt=vt.createRange();nt.setStart(Q.node,Q.offset),ut.removeAllRanges(),oe>sn?(ut.addRange(nt),ut.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),ut.addRange(nt))}}}}for(vt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&vt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var _t=vt[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}lu=!!zd,Hd=zd=null}finally{Ke=u,F.p=o,O.T=a}}e.current=n,qn=2}}function o_(){if(qn===2){qn=0;var e=Is,n=uo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Ke;Ke|=4;try{Ig(e,n.alternate,n)}finally{Ke=u,F.p=o,O.T=a}}qn=3}}function l_(){if(qn===4||qn===3){qn=0,I();var e=Is,n=uo,a=ss,o=jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?qn=5:(qn=0,uo=Is=null,c_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Os=null),Ss(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=F.p,F.p=2,O.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var A=o[v];f(A.value,{componentStack:A.stack})}}finally{O.T=n,F.p=u}}(ss&3)!==0&&Kc(),Pa(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ad?Rl++:(Rl=0,Ad=e):Rl=0,Cl(0)}}function c_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ll(n)))}function Kc(){return r_(),o_(),l_(),u_()}function u_(){if(qn!==5)return!1;var e=Is,n=Td;Td=0;var a=Ss(ss),o=O.T,u=F.p;try{F.p=32>a?32:a,O.T=null,a=bd,bd=null;var f=Is,v=ss;if(qn=0,uo=Is=null,ss=0,(Ke&6)!==0)throw Error(s(331));var A=Ke;if(Ke|=4,Wg(f.current),Vg(f,f.current,v,a),Ke=A,Cl(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{F.p=u,O.T=o,c_(e,n)}}function f_(e,n,a){n=na(a,n),n=ad(e.stateNode,n,2),e=Cs(e,n,2),e!==null&&(An(e,2),Pa(e))}function $e(e,n,a){if(e.tag===3)f_(e,e,a);else for(;n!==null;){if(n.tag===3){f_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Os===null||!Os.has(o))){e=na(a,e),a=hg(2),o=Cs(n,a,2),o!==null&&(dg(a,o,n,e),An(o,2),Pa(o));break}}n=n.return}}function wd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new dy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(yd=!0,u.add(a),e=vy.bind(null,e,n,a),n.then(e,e))}function vy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,un===e&&(Ie&a)===a&&(On===4||On===3&&(Ie&62914560)===Ie&&300>E()-Xc?(Ke&2)===0&&fo(e,0):Md|=a,co===Ie&&(co=0)),Pa(e)}function h_(e,n){n===0&&(n=Ve()),e=cr(e,n),e!==null&&(An(e,n),Pa(e))}function xy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),h_(e,a)}function Sy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),h_(e,a)}function yy(e,n){return Re(e,n)}var Qc=null,po=null,Dd=!1,Jc=!1,Ud=!1,Fs=0;function Pa(e){e!==po&&e.next===null&&(po===null?Qc=po=e:po=po.next=e),Jc=!0,Dd||(Dd=!0,Ey())}function Cl(e,n){if(!Ud&&Jc){Ud=!0;do for(var a=!1,o=Qc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,g_(o,f))}else f=Ie,f=ht(o,o===un?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||zt(o,f)||(a=!0,g_(o,f));o=o.next}while(a);Ud=!1}}function My(){d_()}function d_(){Jc=Dd=!1;var e=0;Fs!==0&&Ny()&&(e=Fs);for(var n=E(),a=null,o=Qc;o!==null;){var u=o.next,f=p_(o,n);f===0?(o.next=null,a===null?Qc=u:a.next=u,u===null&&(po=a)):(a=o,(e!==0||(f&3)!==0)&&(Jc=!0)),o=u}qn!==0&&qn!==5||Cl(e),Fs!==0&&(Fs=0)}function p_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ot(f),A=1<<v,G=u[v];G===-1?((A&a)===0||(A&o)!==0)&&(u[v]=se(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=un,a=Ie,a=ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Je===2||Je===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ne(o),Ss(a)){case 2:case 8:a=yt;break;case 32:a=dt;break;case 268435456:a=wt;break;default:a=dt}return o=m_.bind(null,e),a=Re(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ne(o),e.callbackPriority=2,e.callbackNode=null,2}function m_(e,n){if(qn!==0&&qn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kc()&&e.callbackNode!==a)return null;var o=Ie;return o=ht(e,e===un?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Kg(e,o,n),p_(e,E()),e.callbackNode!=null&&e.callbackNode===a?m_.bind(null,e):null)}function g_(e,n){if(Kc())return null;Kg(e,n,!0)}function Ey(){Iy(function(){(Ke&6)!==0?Re(mt,My):d_()})}function Ld(){if(Fs===0){var e=Jr;e===0&&(e=Et,Et<<=1,(Et&261888)===0&&(Et=256)),Fs=e}return Fs}function __(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sr(""+e)}function v_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ty(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=__((u[Cn]||null).action),v=o.submitter;v&&(n=(n=v[Cn]||null)?__(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new Hi("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fs!==0){var G=v?v_(u,v):new FormData(u);Jh(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=v?v_(u,v):new FormData(u),Jh(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Nd=0;Nd<mh.length;Nd++){var Od=mh[Nd],by=Od.toLowerCase(),Ay=Od[0].toUpperCase()+Od.slice(1);xa(by,"on"+Ay)}xa(Zm,"onAnimationEnd"),xa(Km,"onAnimationIteration"),xa(Qm,"onAnimationStart"),xa("dblclick","onDoubleClick"),xa("focusin","onFocus"),xa("focusout","onBlur"),xa(VS,"onTransitionRun"),xa(kS,"onTransitionStart"),xa(XS,"onTransitionCancel"),xa(Jm,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function x_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var A=o[v],G=A.instance,at=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(pt){dc(pt)}u.currentTarget=null,f=G}else for(v=0;v<o.length;v++){if(A=o[v],G=A.instance,at=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(pt){dc(pt)}u.currentTarget=null,f=G}}}}function Le(e,n){var a=n[_a];a===void 0&&(a=n[_a]=new Set);var o=e+"__bubble";a.has(o)||(S_(n,e,2,!1),a.add(o))}function Id(e,n,a){var o=0;n&&(o|=4),S_(a,e,o,n)}var $c="_reactListening"+Math.random().toString(36).slice(2);function Pd(e){if(!e[$c]){e[$c]=!0,ct.forEach(function(a){a!=="selectionchange"&&(Ry.has(a)||Id(a,!1,e),Id(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$c]||(n[$c]=!0,Id("selectionchange",!1,n))}}function S_(e,n,a,o){switch(Z_(n)){case 2:var u=eM;break;case 8:u=nM;break;default:u=Qd}a=u.bind(null,n,a,e),u=void 0,!Ze||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Fd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var A=o.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=o.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=ln(A),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){o=f=v;continue t}A=A.parentNode}}o=o.return}Bt(function(){var at=f,pt=Gr(a),vt=[];t:{var rt=$m.get(e);if(rt!==void 0){var ut=Hi,Zt=e;switch(e){case"keypress":if(Ye(a)===0)break t;case"keydown":case"keyup":ut=SS;break;case"focusin":Zt="focus",ut=Ln;break;case"focusout":Zt="blur",ut=Ln;break;case"beforeblur":case"afterblur":ut=Ln;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=vn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Mi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=ES;break;case Zm:case Km:case Qm:ut=si;break;case Jm:ut=bS;break;case"scroll":case"scrollend":ut=Ut;break;case"wheel":ut=RS;break;case"copy":case"cut":case"paste":ut=va;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Dm;break;case"toggle":case"beforetoggle":ut=wS}var oe=(n&4)!==0,sn=!oe&&(e==="scroll"||e==="scrollend"),Q=oe?rt!==null?rt+"Capture":null:rt;oe=[];for(var X=at,nt;X!==null;){var _t=X;if(nt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||nt===null||Q===null||(_t=ce(X,Q),_t!=null&&oe.push(Dl(X,_t,nt))),sn)break;X=X.return}0<oe.length&&(rt=new ut(rt,Zt,null,a,pt),vt.push({event:rt,listeners:oe}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&a!==Hr&&(Zt=a.relatedTarget||a.fromElement)&&(ln(Zt)||Zt[fi]))break t;if((ut||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(Zt=a.relatedTarget||a.toElement,ut=at,Zt=Zt?ln(Zt):null,Zt!==null&&(sn=c(Zt),oe=Zt.tag,Zt!==sn||oe!==5&&oe!==27&&oe!==6)&&(Zt=null)):(ut=null,Zt=at),ut!==Zt)){if(oe=vn,_t="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Dm,_t="onPointerLeave",Q="onPointerEnter",X="pointer"),sn=ut==null?rt:Xa(ut),nt=Zt==null?rt:Xa(Zt),rt=new oe(_t,X+"leave",ut,a,pt),rt.target=sn,rt.relatedTarget=nt,_t=null,ln(pt)===at&&(oe=new oe(Q,X+"enter",Zt,a,pt),oe.target=nt,oe.relatedTarget=sn,_t=oe),sn=_t,ut&&Zt)e:{for(oe=Cy,Q=ut,X=Zt,nt=0,_t=Q;_t;_t=oe(_t))nt++;_t=0;for(var ie=X;ie;ie=oe(ie))_t++;for(;0<nt-_t;)Q=oe(Q),nt--;for(;0<_t-nt;)X=oe(X),_t--;for(;nt--;){if(Q===X||X!==null&&Q===X.alternate){oe=Q;break e}Q=oe(Q),X=oe(X)}oe=null}else oe=null;ut!==null&&y_(vt,rt,ut,oe,!1),Zt!==null&&sn!==null&&y_(vt,sn,Zt,oe,!0)}}t:{if(rt=at?Xa(at):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var qe=Bm;else if(Pm(rt))if(zm)qe=zS;else{qe=FS;var $t=PS}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?at&&La(at.elementType)&&(qe=Bm):qe=BS;if(qe&&(qe=qe(e,at))){Fm(vt,qe,a,pt);break t}$t&&$t(e,rt,at),e==="focusout"&&at&&rt.type==="number"&&at.memoizedProps.value!=null&&Di(rt,"number",rt.value)}switch($t=at?Xa(at):window,e){case"focusin":(Pm($t)||$t.contentEditable==="true")&&(Xr=$t,hh=at,sl=null);break;case"focusout":sl=hh=Xr=null;break;case"mousedown":dh=!0;break;case"contextmenu":case"mouseup":case"dragend":dh=!1,qm(vt,a,pt);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":qm(vt,a,pt)}var Se;if(lh)t:{switch(e){case"compositionstart":var Pe="onCompositionStart";break t;case"compositionend":Pe="onCompositionEnd";break t;case"compositionupdate":Pe="onCompositionUpdate";break t}Pe=void 0}else kr?Om(e,a)&&(Pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(Um&&a.locale!=="ko"&&(kr||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&kr&&(Se=We()):(Dn=pt,ai="value"in Dn?Dn.value:Dn.textContent,kr=!0)),$t=tu(at,Pe),0<$t.length&&(Pe=new Vr(Pe,e,null,a,pt),vt.push({event:Pe,listeners:$t}),Se?Pe.data=Se:(Se=Im(a),Se!==null&&(Pe.data=Se)))),(Se=US?LS(e,a):NS(e,a))&&(Pe=tu(at,"onBeforeInput"),0<Pe.length&&($t=new Vr("onBeforeInput","beforeinput",null,a,pt),vt.push({event:$t,listeners:Pe}),$t.data=Se)),Ty(vt,e,at,a,pt)}x_(vt,n)})}function Dl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function tu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ce(e,a),u!=null&&o.unshift(Dl(e,u,f)),u=ce(e,n),u!=null&&o.push(Dl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Cy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var A=a,G=A.alternate,at=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||at===null||(G=at,u?(at=ce(a,f),at!=null&&v.unshift(Dl(a,at,G))):u||(at=ce(a,f),at!=null&&v.push(Dl(a,at,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var wy=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function M_(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(Dy,"")}function E_(e,n){return n=M_(n),M_(e)===n}function an(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":ue(e,"class",o);break;case"tabIndex":ue(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ue(e,a,o);break;case"style":$i(e,o,f);break;case"data":if(n!=="object"){ue(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&an(e,n,"name",u.name,u,null),an(e,n,"formEncType",u.formEncType,u,null),an(e,n,"formMethod",u.formMethod,u,null),an(e,n,"formTarget",u.formTarget,u,null)):(an(e,n,"encType",u.encType,u,null),an(e,n,"method",u.method,u,null),an(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ta);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Le("beforetoggle",e),Le("toggle",e),le(e,"popover",o);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":le(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fc.get(a)||a,le(e,a,o))}}function Bd(e,n,a,o,u,f){switch(a){case"style":$i(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Cn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):le(e,a,o)}}}function ci(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,f,v,a,null)}}u&&an(e,n,"srcSet",a.srcSet,a,null),o&&an(e,n,"src",a.src,a,null);return;case"input":Le("invalid",e);var A=f=v=u=null,G=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":v=pt;break;case"checked":G=pt;break;case"defaultChecked":at=pt;break;case"value":f=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:an(e,n,o,pt,a,null)}}Bn(e,f,A,G,at,v,u,!1);return;case"select":Le("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":o=A;default:an(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!o,n!=null?di(e,!!o,n,!1):a!=null&&di(e,!!o,a,!0);return;case"textarea":Le("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:an(e,n,v,A,a,null)}Mn(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":an(e,n,G,o,a,null));return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(o=0;o<wl.length;o++)Le(wl[o],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,at,o,a,null)}return;default:if(La(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Bd(e,n,pt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&an(e,n,A,o,a,null))}function Uy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,G=null,at=null,pt=null;for(ut in a){var vt=a[ut];if(a.hasOwnProperty(ut)&&vt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=vt;default:o.hasOwnProperty(ut)||an(e,n,ut,null,o,vt)}}for(var rt in o){var ut=o[rt];if(vt=a[rt],o.hasOwnProperty(rt)&&(ut!=null||vt!=null))switch(rt){case"type":f=ut;break;case"name":u=ut;break;case"checked":at=ut;break;case"defaultChecked":pt=ut;break;case"value":v=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==vt&&an(e,n,rt,ut,o,vt)}}wn(e,v,A,G,at,pt,f,u);return;case"select":ut=v=A=rt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ut=G;default:o.hasOwnProperty(f)||an(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":rt=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==G&&an(e,n,u,f,o,G)}n=A,a=v,o=ut,rt!=null?di(e,!!a,rt,!1):!!o!=!!a&&(n!=null?di(e,!!a,n,!0):di(e,!!a,a?[]:"",!1));return;case"textarea":ut=rt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:an(e,n,A,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":rt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&an(e,n,v,u,o,f)}ke(e,rt,ut);return;case"option":for(var Zt in a)rt=a[Zt],a.hasOwnProperty(Zt)&&rt!=null&&!o.hasOwnProperty(Zt)&&(Zt==="selected"?e.selected=!1:an(e,n,Zt,null,o,rt));for(G in o)rt=o[G],ut=a[G],o.hasOwnProperty(G)&&rt!==ut&&(rt!=null||ut!=null)&&(G==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":an(e,n,G,rt,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)rt=a[oe],a.hasOwnProperty(oe)&&rt!=null&&!o.hasOwnProperty(oe)&&an(e,n,oe,null,o,rt);for(at in o)if(rt=o[at],ut=a[at],o.hasOwnProperty(at)&&rt!==ut&&(rt!=null||ut!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:an(e,n,at,rt,o,ut)}return;default:if(La(n)){for(var sn in a)rt=a[sn],a.hasOwnProperty(sn)&&rt!==void 0&&!o.hasOwnProperty(sn)&&Bd(e,n,sn,void 0,o,rt);for(pt in o)rt=o[pt],ut=a[pt],!o.hasOwnProperty(pt)||rt===ut||rt===void 0&&ut===void 0||Bd(e,n,pt,rt,o,ut);return}}for(var Q in a)rt=a[Q],a.hasOwnProperty(Q)&&rt!=null&&!o.hasOwnProperty(Q)&&an(e,n,Q,null,o,rt);for(vt in o)rt=o[vt],ut=a[vt],!o.hasOwnProperty(vt)||rt===ut||rt==null&&ut==null||an(e,n,vt,rt,o,ut)}function T_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ly(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&T_(v)){for(v=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],at=G.startTime;if(at>A)break;var pt=G.transferSize,vt=G.initiatorType;pt&&T_(vt)&&(G=G.responseEnd,v+=pt*(G<A?1:(A-at)/(G-at)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zd=null,Hd=null;function eu(e){return e.nodeType===9?e:e.ownerDocument}function b_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vd=null;function Ny(){var e=window.event;return e&&e.type==="popstate"?e===Vd?!1:(Vd=e,!0):(Vd=null,!1)}var R_=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(e){return C_.resolve(null).then(e).catch(Py)}:R_;function Py(e){setTimeout(function(){throw e})}function Bs(e){return e==="head"}function w_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),vo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ul(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ul(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[wi]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ul(e.ownerDocument.body);a=u}while(a);vo(n)}function D_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function kd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kd(a),Ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Fy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=oa(e.nextSibling),e===null)break}return null}function By(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=oa(e.nextSibling),e===null))return null;return e}function U_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oa(e.nextSibling),e===null))return null;return e}function Xd(e){return e.data==="$?"||e.data==="$~"}function Wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function oa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Yd=null;function L_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return oa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function N_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function O_(e,n,a){switch(n=eu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ul(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ua(e)}var la=new Map,I_=new Set;function nu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rs=F.d;F.d={f:Hy,r:Gy,D:Vy,C:ky,L:Xy,m:Wy,X:qy,S:Yy,M:jy};function Hy(){var e=rs.f(),n=qc();return e||n}function Gy(e){var n=Ji(e);n!==null&&n.tag===5&&n.type==="form"?J0(n):rs.r(e)}var mo=typeof document>"u"?null:document;function P_(e,n,a){var o=mo;if(o&&typeof n=="string"&&n){var u=he(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),I_.has(u)||(I_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),ci(n,"link",e),W(n),o.head.appendChild(n)))}}function Vy(e){rs.D(e),P_("dns-prefetch",e,null)}function ky(e,n){rs.C(e,n),P_("preconnect",e,n)}function Xy(e,n,a){rs.L(e,n,a);var o=mo;if(o&&e&&n){var u='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+he(a.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var f=u;switch(n){case"style":f=go(e);break;case"script":f=_o(e)}la.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),la.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ll(f))||n==="script"&&o.querySelector(Nl(f))||(n=o.createElement("link"),ci(n,"link",e),W(n),o.head.appendChild(n)))}}function Wy(e,n){rs.m(e,n);var a=mo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+he(o)+'"][href="'+he(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=_o(e)}if(!la.has(f)&&(e=x({rel:"modulepreload",href:e},n),la.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nl(f)))return}o=a.createElement("link"),ci(o,"link",e),W(o),a.head.appendChild(o)}}}function Yy(e,n,a){rs.S(e,n,a);var o=mo;if(o&&e){var u=R(o).hoistableStyles,f=go(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=o.querySelector(Ll(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=la.get(f))&&qd(e,a);var G=v=o.createElement("link");W(G),ci(G,"link",e),G._p=new Promise(function(at,pt){G.onload=at,G.onerror=pt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,iu(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function qy(e,n){rs.X(e,n);var a=mo;if(a&&e){var o=R(a).hoistableScripts,u=_o(e),f=o.get(u);f||(f=a.querySelector(Nl(u)),f||(e=x({src:e,async:!0},n),(n=la.get(u))&&jd(e,n),f=a.createElement("script"),W(f),ci(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function jy(e,n){rs.M(e,n);var a=mo;if(a&&e){var o=R(a).hoistableScripts,u=_o(e),f=o.get(u);f||(f=a.querySelector(Nl(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=la.get(u))&&jd(e,n),f=a.createElement("script"),W(f),ci(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function F_(e,n,a,o){var u=(u=et.current)?nu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=go(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=go(a.href);var f=R(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Ll(e)))&&!f._p&&(v.instance=f,v.state.loading=5),la.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},la.set(e,a),f||Zy(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_o(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function go(e){return'href="'+he(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function B_(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Zy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ci(n,"link",a),W(n),e.head.appendChild(n))}function _o(e){return'[src="'+he(e)+'"]'}function Nl(e){return"script[async]"+e}function z_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+he(a.href)+'"]');if(o)return n.instance=o,W(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),W(o),ci(o,"style",u),iu(o,a.precedence,e),n.instance=o;case"stylesheet":u=go(a.href);var f=e.querySelector(Ll(u));if(f)return n.state.loading|=4,n.instance=f,W(f),f;o=B_(a),(u=la.get(u))&&qd(o,u),f=(e.ownerDocument||e).createElement("link"),W(f);var v=f;return v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),ci(f,"link",o),n.state.loading|=4,iu(f,a.precedence,e),n.instance=f;case"script":return f=_o(a.src),(u=e.querySelector(Nl(f)))?(n.instance=u,W(u),u):(o=a,(u=la.get(f))&&(o=x({},a),jd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),W(u),ci(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,iu(o,a.precedence,e));return n.instance}function iu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var A=o[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var au=null;function H_(e,n,a){if(au===null){var o=new Map,u=au=new Map;u.set(a,o)}else u=au,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[wi]||f[Rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=o.get(v);A?A.push(f):o.set(v,[f])}}return o}function G_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ky(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function V_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=go(o.href),f=n.querySelector(Ll(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=su.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,W(f);return}f=n.ownerDocument||n,o=B_(o),(u=la.get(u))&&qd(o,u),f=f.createElement("link"),W(f);var v=f;v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),ci(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=su.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zd=0;function Jy(e,n){return e.stylesheets&&e.count===0&&ou(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ou(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Zd===0&&(Zd=62500*Ly());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ou(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Zd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ru=null;function ou(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ru=new Map,n.forEach($y,e),ru=null,su.call(e))}function $y(e,n){if(!(n.state.loading&4)){var a=ru.get(e);if(a)var o=a.get(null);else{a=new Map,ru.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=su.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ol={$$typeof:U,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function tM(e,n,a,o,u,f,v,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.hiddenUpdates=Oe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function k_(e,n,a,o,u,f,v,A,G,at,pt,vt){return e=new tM(e,n,a,v,G,at,pt,vt,A),n=1,f===!0&&(n|=24),f=Vi(3,null,null,n),e.current=f,f.stateNode=e,n=Ch(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Lh(f),e}function X_(e){return e?(e=qr,e):qr}function W_(e,n,a,o,u,f){u=X_(u),o.context===null?o.context=u:o.pendingContext=u,o=Rs(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Cs(e,o,n),a!==null&&(Pi(a,e,n),hl(a,e,n))}function Y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Kd(e,n){Y_(e,n),(e=e.alternate)&&Y_(e,n)}function q_(e){if(e.tag===13||e.tag===31){var n=cr(e,67108864);n!==null&&Pi(n,e,67108864),Kd(e,67108864)}}function j_(e){if(e.tag===13||e.tag===31){var n=qi();n=xs(n);var a=cr(e,n);a!==null&&Pi(a,e,n),Kd(e,n)}}var lu=!0;function eM(e,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=2,Qd(e,n,a,o)}finally{F.p=f,O.T=u}}function nM(e,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=8,Qd(e,n,a,o)}finally{F.p=f,O.T=u}}function Qd(e,n,a,o){if(lu){var u=Jd(o);if(u===null)Fd(e,n,o,cu,a),K_(e,o);else if(aM(u,e,n,a,o))o.stopPropagation();else if(K_(e,o),n&4&&-1<iM.indexOf(e)){for(;u!==null;){var f=Ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=At(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var G=1<<31-Ot(v);A.entanglements[1]|=G,v&=~G}Pa(f),(Ke&6)===0&&(Wc=E()+500,Cl(0))}}break;case 31:case 13:A=cr(f,2),A!==null&&Pi(A,f,2),qc(),Kd(f,2)}if(f=Jd(o),f===null&&Fd(e,n,o,cu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Fd(e,n,o,null,a)}}function Jd(e){return e=Gr(e),$d(e)}var cu=null;function $d(e){if(cu=null,e=ln(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cu=e,null}function Z_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case mt:return 2;case yt:return 8;case dt:case qt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var tp=!1,zs=null,Hs=null,Gs=null,Il=new Map,Pl=new Map,Vs=[],iM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K_(e,n){switch(e){case"focusin":case"focusout":zs=null;break;case"dragenter":case"dragleave":Hs=null;break;case"mouseover":case"mouseout":Gs=null;break;case"pointerover":case"pointerout":Il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(n.pointerId)}}function Fl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ji(n),n!==null&&q_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function aM(e,n,a,o,u){switch(n){case"focusin":return zs=Fl(zs,e,n,a,o,u),!0;case"dragenter":return Hs=Fl(Hs,e,n,a,o,u),!0;case"mouseover":return Gs=Fl(Gs,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Il.set(f,Fl(Il.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Pl.set(f,Fl(Pl.get(f)||null,e,n,a,o,u)),!0}return!1}function Q_(e){var n=ln(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ys(e.priority,function(){j_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,ys(e.priority,function(){j_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Jd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Hr=o,a.target.dispatchEvent(o),Hr=null}else return n=Ji(a),n!==null&&q_(n),e.blockedOn=a,!1;n.shift()}return!0}function J_(e,n,a){uu(e)&&a.delete(n)}function sM(){tp=!1,zs!==null&&uu(zs)&&(zs=null),Hs!==null&&uu(Hs)&&(Hs=null),Gs!==null&&uu(Gs)&&(Gs=null),Il.forEach(J_),Pl.forEach(J_)}function fu(e,n){e.blockedOn===n&&(e.blockedOn=null,tp||(tp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sM)))}var hu=null;function $_(e){hu!==e&&(hu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hu===e&&(hu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if($d(o||a)===null)continue;break}var f=Ji(a);f!==null&&(e.splice(n,3),n-=3,Jh(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function vo(e){function n(G){return fu(G,e)}zs!==null&&fu(zs,e),Hs!==null&&fu(Hs,e),Gs!==null&&fu(Gs,e),Il.forEach(n),Pl.forEach(n);for(var a=0;a<Vs.length;a++){var o=Vs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Vs.length&&(a=Vs[0],a.blockedOn===null);)Q_(a),a.blockedOn===null&&Vs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[Cn]||null;if(typeof f=="function")v||$_(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Cn]||null)A=v.formAction;else if($d(u)!==null)continue}else A=v.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),$_(a)}}}function tv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ep(e){this._internalRoot=e}du.prototype.render=ep.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=qi();W_(a,o,e,n,null,null)},du.prototype.unmount=ep.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;W_(e.current,2,null,e,null,null),qc(),n[fi]=null}};function du(e){this._internalRoot=e}du.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Vs.length&&n!==0&&n<Vs[a].priority;a++);Vs.splice(a,0,e),a===0&&Q_(e)}};var ev=t.version;if(ev!=="19.2.4")throw Error(s(527,ev,"19.2.4"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var rM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{bt=pu.inject(rM),Tt=pu}catch{}}return zl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=lg,f=cg,v=ug;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=k_(e,1,!1,null,null,a,o,null,u,f,v,tv),e[fi]=n.current,Pd(e),new ep(n)},zl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=lg,v=cg,A=ug,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=k_(e,1,!0,n,a??null,o,u,G,f,v,A,tv),n.context=X_(null),a=n.current,o=qi(),o=xs(o),u=Rs(o),u.callback=null,Cs(a,u,o),a=o,n.current.lanes=a,An(n,a),Pa(n),e[fi]=n.current,Pd(e),new du(n)},zl.version="19.2.4",zl}var fv;function gM(){if(fv)return ap.exports;fv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ap.exports=mM(),ap.exports}var _M=gM();const zf="183",ux=0,kp=1,fx=2,zo=1,hx=2,Po=3,_s=0,xi=1,Wn=2,Ga=0,Lr=1,Xp=2,Wp=3,Yp=4,dx=5,Qs=100,px=101,mx=102,gx=103,_x=104,vx=200,xx=201,Sx=202,yx=203,ju=204,Zu=205,Mx=206,Ex=207,Tx=208,bx=209,Ax=210,Rx=211,Cx=212,wx=213,Dx=214,Ku=0,Qu=1,Ju=2,Nr=3,$u=4,tf=5,ef=6,nf=7,Hf=0,Ux=1,Lx=2,Ra=0,am=1,sm=2,rm=3,Gf=4,om=5,lm=6,cm=7,um=300,tr=301,Or=302,Vu=303,ku=304,uc=306,Go=1e3,Ha=1001,af=1002,ei=1003,Nx=1004,Ql=1005,ni=1006,Xu=1007,ms=1008,Fi=1009,fm=1010,hm=1011,Vo=1012,Vf=1013,wa=1014,ha=1015,Va=1016,kf=1017,Xf=1018,ko=1020,dm=35902,pm=35899,mm=1021,gm=1022,da=1023,ka=1026,Js=1027,Wf=1028,Yf=1029,Ir=1030,qf=1031,jf=1033,$l=33776,tc=33777,ec=33778,nc=33779,sf=35840,rf=35841,of=35842,lf=35843,cf=36196,uf=37492,ff=37496,hf=37488,df=37489,pf=37490,mf=37491,gf=37808,_f=37809,vf=37810,xf=37811,Sf=37812,yf=37813,Mf=37814,Ef=37815,Tf=37816,bf=37817,Af=37818,Rf=37819,Cf=37820,wf=37821,Df=36492,Uf=36494,Lf=36495,Nf=36283,Of=36284,If=36285,Pf=36286,Ox=3200,Zf=0,Ix=1,ds="",Zn="srgb",Pr="srgb-linear",rc="linear",Qe="srgb",wr=7680,qp=519,Px=512,Fx=513,Bx=514,Kf=515,zx=516,Hx=517,Qf=518,Gx=519,jp=35044,Zp="300 es",Aa=2e3,Xo=2001;function vM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ff(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vx(){const r=Ff("canvas");return r.style.display="block",r}const hv={};function Kp(...r){const t="THREE."+r.shift();console.log(t,...r)}function kx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function de(...r){r=kx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function He(...r){r=kx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function oc(...r){const t=r.join(" ");t in hv||(hv[t]=!0,de(...r))}function xM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const SM={[Ku]:Qu,[Ju]:ef,[$u]:nf,[Nr]:tf,[Qu]:Ku,[ef]:Ju,[nf]:$u,[tf]:Nr};class Fr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dv=1234567;const ic=Math.PI/180,Wo=180/Math.PI;function jo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_i[r&255]+_i[r>>8&255]+_i[r>>16&255]+_i[r>>24&255]+"-"+_i[t&255]+_i[t>>8&255]+"-"+_i[t>>16&15|64]+_i[t>>24&255]+"-"+_i[i&63|128]+_i[i>>8&255]+"-"+_i[i>>16&255]+_i[i>>24&255]+_i[s&255]+_i[s>>8&255]+_i[s>>16&255]+_i[s>>24&255]).toLowerCase()}function Ae(r,t,i){return Math.max(t,Math.min(i,r))}function _m(r,t){return(r%t+t)%t}function yM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function MM(r,t,i){return r!==t?(i-r)/(t-r):0}function ac(r,t,i){return(1-i)*r+i*t}function EM(r,t,i,s){return ac(r,t,1-Math.exp(-i*s))}function TM(r,t=1){return t-Math.abs(_m(r,t*2)-t)}function bM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function AM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function RM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function CM(r,t){return r+Math.random()*(t-r)}function wM(r){return r*(.5-Math.random())}function DM(r){r!==void 0&&(dv=r);let t=dv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function UM(r){return r*ic}function LM(r){return r*Wo}function NM(r){return(r&r-1)===0&&r!==0}function OM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function IM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function PM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),_=h((t+s)/2),x=c((t-s)/2),g=h((t-s)/2),y=c((s-t)/2),T=h((s-t)/2);switch(l){case"XYX":r.set(d*_,m*x,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*x,d*p);break;case"ZXZ":r.set(m*x,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*T,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*T,d*p);break;case"ZYZ":r.set(m*T,m*y,d*_,d*p);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Io(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ai={DEG2RAD:ic,RAD2DEG:Wo,generateUUID:jo,clamp:Ae,euclideanModulo:_m,mapLinear:yM,inverseLerp:MM,lerp:ac,damp:EM,pingpong:TM,smoothstep:bM,smootherstep:AM,randInt:RM,randFloat:CM,randFloatSpread:wM,seededRandom:DM,degToRad:UM,radToDeg:LM,isPowerOfTwo:NM,ceilPowerOfTwo:OM,floorPowerOfTwo:IM,setQuaternionFromProperEuler:PM,normalize:bi,denormalize:Io};class De{constructor(t=0,i=0){De.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Br{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],y=c[h+1],T=c[h+2],D=c[h+3];if(x!==D||m!==g||p!==y||_!==T){let M=m*g+p*y+_*T+x*D;M<0&&(g=-g,y=-y,T=-T,D=-D,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),U=Math.sin(C);S=Math.sin(S*C)/U,d=Math.sin(d*C)/U,m=m*S+g*d,p=p*S+y*d,_=_*S+T*d,x=x*S+D*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+T*d,x=x*S+D*d;const C=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=C,p*=C,_*=C,x*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[h],g=c[h+1],y=c[h+2],T=c[h+3];return t[i]=d*T+_*x+m*y-p*g,t[i+1]=m*T+_*g+p*x-d*y,t[i+2]=p*T+_*y+d*g-m*x,t[i+3]=_*T-d*x-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*_*x+p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x-g*y*T;break;case"YXZ":this._x=g*_*x+p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x+g*y*T;break;case"ZXY":this._x=g*_*x-p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x-g*y*T;break;case"ZYX":this._x=g*_*x-p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x+g*y*T;break;case"YZX":this._x=g*_*x+p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x-g*y*T;break;case"XZY":this._x=g*_*x-p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x+g*y*T;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],g=s+d+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>x){const y=2*Math.sqrt(1+s-d-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-s-x);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(pv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(pv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return lp.copy(this).projectOnVector(t),this.sub(lp)}reflect(t){return this.sub(lp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lp=new J,pv=new Br;class ve{constructor(t,i,s,l,c,h,d,m,p){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],y=s[5],T=s[8],D=l[0],M=l[3],S=l[6],C=l[1],U=l[4],w=l[7],B=l[2],z=l[5],H=l[8];return c[0]=h*D+d*C+m*B,c[3]=h*M+d*U+m*z,c[6]=h*S+d*w+m*H,c[1]=p*D+_*C+x*B,c[4]=p*M+_*U+x*z,c[7]=p*S+_*w+x*H,c[2]=g*D+y*C+T*B,c[5]=g*M+y*U+T*z,c[8]=g*S+y*w+T*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,g=d*m-_*c,y=p*c-h*m,T=i*x+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return t[0]=x*D,t[1]=(l*p-_*s)*D,t[2]=(d*s-l*h)*D,t[3]=g*D,t[4]=(_*i-l*m)*D,t[5]=(l*c-d*i)*D,t[6]=y*D,t[7]=(s*m-p*i)*D,t[8]=(h*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(cp.makeScale(t,i)),this}rotate(t){return this.premultiply(cp.makeRotation(-t)),this}translate(t,i){return this.premultiply(cp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cp=new ve,mv=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gv=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FM(){const r={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Qe&&(l.r=gs(l.r),l.g=gs(l.g),l.b=gs(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Qe&&(l.r=Ho(l.r),l.g=Ho(l.g),l.b=Ho(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?rc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return oc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return oc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Pr]:{primaries:t,whitePoint:s,transfer:rc,toXYZ:mv,fromXYZ:gv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:s,transfer:Qe,toXYZ:mv,fromXYZ:gv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),r}const Ge=FM();function gs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xo;class Xx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xo===void 0&&(xo=Ff("canvas")),xo.width=t.width,xo.height=t.height;const l=xo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ff("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=gs(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(gs(i[s]/255)*255):i[s]=gs(i[s]);return{data:i,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BM=0;class Jf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(up(l[h].image)):c.push(up(l[h]))}else c=up(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function up(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let zM=0;const fp=new J;class ui extends Fr{constructor(t=ui.DEFAULT_IMAGE,i=ui.DEFAULT_MAPPING,s=Ha,l=Ha,c=ni,h=ms,d=da,m=Fi,p=ui.DEFAULT_ANISOTROPY,_=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=jo(),this.name="",this.source=new Jf(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fp).x}get height(){return this.source.getSize(fp).y}get depth(){return this.source.getSize(fp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==um)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Go:t.x=t.x-Math.floor(t.x);break;case Ha:t.x=t.x<0?0:1;break;case af:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Go:t.y=t.y-Math.floor(t.y);break;case Ha:t.y=t.y<0?0:1;break;case af:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=um;ui.DEFAULT_ANISOTROPY=1;class bn{constructor(t=0,i=0,s=0,l=1){bn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],g=m[1],y=m[5],T=m[9],D=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-D)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+D)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(y+1)/2,B=(S+1)/2,z=(_+g)/4,H=(x+D)/4,b=(T+M)/4;return U>w&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=z/s,c=H/s):w>B?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=z/l,c=b/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=H/c,l=b/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-T)*(M-T)+(x-D)*(x-D)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(x-D)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wx extends Fr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new bn(0,0,t,i),this.scissorTest=!1,this.viewport=new bn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ui(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Jf(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ca extends Wx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class vm extends ui{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yx extends ui{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t,i,s,l,c,h,d,m,p,_,x,g,y,T,D,M){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,x,g,y,T,D,M)}set(t,i,s,l,c,h,d,m,p,_,x,g,y,T,D,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=x,S[14]=g,S[3]=y,S[7]=T,S[11]=D,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/So.setFromMatrixColumn(t,0).length(),c=1/So.setFromMatrixColumn(t,1).length(),h=1/So.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*x,T=d*_,D=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+T*p,i[5]=g-D*p,i[9]=-d*m,i[2]=D-g*p,i[6]=T+y*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*x,T=p*_,D=p*x;i[0]=g+D*d,i[4]=T*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=y*d-T,i[6]=D+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*x,T=p*_,D=p*x;i[0]=g-D*d,i[4]=-h*x,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*_,i[9]=D-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*x,T=d*_,D=d*x;i[0]=m*_,i[4]=T*p-y,i[8]=g*p+D,i[1]=m*x,i[5]=D*p+g,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*p,T=d*m,D=d*p;i[0]=m*_,i[4]=D-g*x,i[8]=T*x+y,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*x+T,i[10]=g-D*x}else if(t.order==="XZY"){const g=h*m,y=h*p,T=d*m,D=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=g*x+D,i[5]=h*_,i[9]=y*x-T,i[2]=T*x-y,i[6]=d*_,i[10]=D*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(HM,t,GM)}lookAt(t,i,s){const l=this.elements;return ji.subVectors(t,i),ji.lengthSq()===0&&(ji.z=1),ji.normalize(),Xs.crossVectors(s,ji),Xs.lengthSq()===0&&(Math.abs(s.z)===1?ji.x+=1e-4:ji.z+=1e-4,ji.normalize(),Xs.crossVectors(s,ji)),Xs.normalize(),mu.crossVectors(ji,Xs),l[0]=Xs.x,l[4]=mu.x,l[8]=ji.x,l[1]=Xs.y,l[5]=mu.y,l[9]=ji.y,l[2]=Xs.z,l[6]=mu.z,l[10]=ji.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],y=s[13],T=s[2],D=s[6],M=s[10],S=s[14],C=s[3],U=s[7],w=s[11],B=s[15],z=l[0],H=l[4],b=l[8],L=l[12],$=l[1],P=l[5],k=l[9],j=l[13],it=l[2],K=l[6],O=l[10],F=l[14],ot=l[3],lt=l[7],St=l[11],N=l[15];return c[0]=h*z+d*$+m*it+p*ot,c[4]=h*H+d*P+m*K+p*lt,c[8]=h*b+d*k+m*O+p*St,c[12]=h*L+d*j+m*F+p*N,c[1]=_*z+x*$+g*it+y*ot,c[5]=_*H+x*P+g*K+y*lt,c[9]=_*b+x*k+g*O+y*St,c[13]=_*L+x*j+g*F+y*N,c[2]=T*z+D*$+M*it+S*ot,c[6]=T*H+D*P+M*K+S*lt,c[10]=T*b+D*k+M*O+S*St,c[14]=T*L+D*j+M*F+S*N,c[3]=C*z+U*$+w*it+B*ot,c[7]=C*H+U*P+w*K+B*lt,c[11]=C*b+U*k+w*O+B*St,c[15]=C*L+U*j+w*F+B*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],g=t[10],y=t[14],T=t[3],D=t[7],M=t[11],S=t[15],C=m*y-p*g,U=d*y-p*x,w=d*g-m*x,B=h*y-p*_,z=h*g-m*_,H=h*x-d*_;return i*(D*C-M*U+S*w)-s*(T*C-M*B+S*z)+l*(T*U-D*B+S*H)-c*(T*w-D*z+M*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],g=t[10],y=t[11],T=t[12],D=t[13],M=t[14],S=t[15],C=i*d-s*h,U=i*m-l*h,w=i*p-c*h,B=s*m-l*d,z=s*p-c*d,H=l*p-c*m,b=_*D-x*T,L=_*M-g*T,$=_*S-y*T,P=x*M-g*D,k=x*S-y*D,j=g*S-y*M,it=C*j-U*k+w*P+B*$-z*L+H*b;if(it===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/it;return t[0]=(d*j-m*k+p*P)*K,t[1]=(l*k-s*j-c*P)*K,t[2]=(D*H-M*z+S*B)*K,t[3]=(g*z-x*H-y*B)*K,t[4]=(m*$-h*j-p*L)*K,t[5]=(i*j-l*$+c*L)*K,t[6]=(M*w-T*H-S*U)*K,t[7]=(_*H-g*w+y*U)*K,t[8]=(h*k-d*$+p*b)*K,t[9]=(s*$-i*k-c*b)*K,t[10]=(T*z-D*w+S*C)*K,t[11]=(x*w-_*z-y*C)*K,t[12]=(d*L-h*P-m*b)*K,t[13]=(i*P-s*L+l*b)*K,t[14]=(D*U-T*B-M*C)*K,t[15]=(_*B-x*U+g*C)*K,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,g=c*p,y=c*_,T=c*x,D=h*_,M=h*x,S=d*x,C=m*p,U=m*_,w=m*x,B=s.x,z=s.y,H=s.z;return l[0]=(1-(D+S))*B,l[1]=(y+w)*B,l[2]=(T-U)*B,l[3]=0,l[4]=(y-w)*z,l[5]=(1-(g+S))*z,l[6]=(M+C)*z,l[7]=0,l[8]=(T+U)*H,l[9]=(M-C)*H,l[10]=(1-(g+D))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=So.set(l[0],l[1],l[2]).length();const d=So.set(l[4],l[5],l[6]).length(),m=So.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ma.copy(this);const p=1/h,_=1/d,x=1/m;return Ma.elements[0]*=p,Ma.elements[1]*=p,Ma.elements[2]*=p,Ma.elements[4]*=_,Ma.elements[5]*=_,Ma.elements[6]*=_,Ma.elements[8]*=x,Ma.elements[9]*=x,Ma.elements[10]*=x,i.setFromRotationMatrix(Ma),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=Aa,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let T,D;if(m)T=c/(h-c),D=h*c/(h-c);else if(d===Aa)T=-(h+c)/(h-c),D=-2*h*c/(h-c);else if(d===Xo)T=-h/(h-c),D=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Aa,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,D;if(m)T=1/(h-c),D=h/(h-c);else if(d===Aa)T=-2/(h-c),D=-(h+c)/(h-c);else if(d===Xo)T=-1/(h-c),D=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const So=new J,Ma=new rn,HM=new J(0,0,0),GM=new J(1,1,1),Xs=new J,mu=new J,ji=new J,_v=new rn,vv=new Br;class ma{constructor(t=0,i=0,s=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ae(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return _v.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_v,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return vv.setFromEuler(this),this.setFromQuaternion(vv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class $f{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let VM=0;const xv=new J,yo=new Br,os=new rn,gu=new J,Hl=new J,kM=new J,XM=new Br,Sv=new J(1,0,0),yv=new J(0,1,0),Mv=new J(0,0,1),Ev={type:"added"},WM={type:"removed"},Mo={type:"childadded",child:null},hp={type:"childremoved",child:null};class fn extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new J,i=new ma,s=new Br,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ve}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yo.setFromAxisAngle(t,i),this.quaternion.multiply(yo),this}rotateOnWorldAxis(t,i){return yo.setFromAxisAngle(t,i),this.quaternion.premultiply(yo),this}rotateX(t){return this.rotateOnAxis(Sv,t)}rotateY(t){return this.rotateOnAxis(yv,t)}rotateZ(t){return this.rotateOnAxis(Mv,t)}translateOnAxis(t,i){return xv.copy(t).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Sv,t)}translateY(t){return this.translateOnAxis(yv,t)}translateZ(t){return this.translateOnAxis(Mv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gu.copy(t):gu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Hl,gu,this.up):os.lookAt(gu,Hl,this.up),this.quaternion.setFromRotationMatrix(os),l&&(os.extractRotation(l.matrixWorld),yo.setFromRotationMatrix(os),this.quaternion.premultiply(yo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(He("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ev),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WM),hp.child=t,this.dispatchEvent(hp),hp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),os.multiply(t.parent.matrixWorld)),t.applyMatrix4(os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ev),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,t,kM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,XM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}fn.DEFAULT_UP=new J(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,s),S=this._getHandJoint(p,D);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,T=.005;p.inputState.pinching&&g>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},_u={h:0,s:0,l:0};function dp(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ge.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ge.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ge.workingColorSpace){if(t=_m(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=dp(h,c,t+1/3),this.g=dp(h,c,t),this.b=dp(h,c,t-1/3)}return Ge.colorSpaceToWorking(this,l),this}setStyle(t,i=Zn){function s(c){c!==void 0&&parseFloat(c)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:de("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Zn){const s=qx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}copyLinearToSRGB(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return Ge.workingToColorSpace(vi.copy(this),t),Math.round(Ae(vi.r*255,0,255))*65536+Math.round(Ae(vi.g*255,0,255))*256+Math.round(Ae(vi.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ge.workingColorSpace){Ge.workingToColorSpace(vi.copy(this),i);const s=vi.r,l=vi.g,c=vi.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ge.workingColorSpace){return Ge.workingToColorSpace(vi.copy(this),i),t.r=vi.r,t.g=vi.g,t.b=vi.b,t}getStyle(t=Zn){Ge.workingToColorSpace(vi.copy(this),t);const i=vi.r,s=vi.g,l=vi.b;return t!==Zn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ws),this.setHSL(Ws.h+t,Ws.s+i,Ws.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ws),t.getHSL(_u);const s=ac(Ws.h,_u.h,i),l=ac(Ws.s,_u.s,i),c=ac(Ws.l,_u.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new re;re.NAMES=qx;class lc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=i,this.far=s}clone(){return new lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xm extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ea=new J,ls=new J,pp=new J,cs=new J,Eo=new J,To=new J,Tv=new J,mp=new J,gp=new J,_p=new J,vp=new bn,xp=new bn,Sp=new bn;class fa{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ea.subVectors(t,i),l.cross(Ea);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ea.subVectors(l,i),ls.subVectors(s,i),pp.subVectors(t,i);const h=Ea.dot(Ea),d=Ea.dot(ls),m=Ea.dot(pp),p=ls.dot(ls),_=ls.dot(pp),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(p*m-d*_)*g,T=(h*_-d*m)*g;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,cs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,cs.x),m.addScaledVector(h,cs.y),m.addScaledVector(d,cs.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return vp.setScalar(0),xp.setScalar(0),Sp.setScalar(0),vp.fromBufferAttribute(t,i),xp.fromBufferAttribute(t,s),Sp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(vp,c.x),h.addScaledVector(xp,c.y),h.addScaledVector(Sp,c.z),h}static isFrontFacing(t,i,s,l){return Ea.subVectors(s,i),ls.subVectors(t,i),Ea.cross(ls).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ea.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),Ea.cross(ls).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return fa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return fa.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return fa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Eo.subVectors(l,s),To.subVectors(c,s),mp.subVectors(t,s);const m=Eo.dot(mp),p=To.dot(mp);if(m<=0&&p<=0)return i.copy(s);gp.subVectors(t,l);const _=Eo.dot(gp),x=To.dot(gp);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Eo,h);_p.subVectors(t,c);const y=Eo.dot(_p),T=To.dot(_p);if(T>=0&&y<=T)return i.copy(c);const D=y*p-m*T;if(D<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(To,d);const M=_*T-y*x;if(M<=0&&x-_>=0&&y-T>=0)return Tv.subVectors(c,l),d=(x-_)/(x-_+(y-T)),i.copy(l).addScaledVector(Tv,d);const S=1/(M+D+g);return h=D*S,d=g*S,i.copy(s).addScaledVector(Eo,h).addScaledVector(To,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class er{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ta.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ta.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ta.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ta):Ta.fromBufferAttribute(c,h),Ta.applyMatrix4(t.matrixWorld),this.expandByPoint(Ta);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vu.copy(s.boundingBox)),vu.applyMatrix4(t.matrixWorld),this.union(vu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ta),Ta.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gl),xu.subVectors(this.max,Gl),bo.subVectors(t.a,Gl),Ao.subVectors(t.b,Gl),Ro.subVectors(t.c,Gl),Ys.subVectors(Ao,bo),qs.subVectors(Ro,Ao),Mr.subVectors(bo,Ro);let i=[0,-Ys.z,Ys.y,0,-qs.z,qs.y,0,-Mr.z,Mr.y,Ys.z,0,-Ys.x,qs.z,0,-qs.x,Mr.z,0,-Mr.x,-Ys.y,Ys.x,0,-qs.y,qs.x,0,-Mr.y,Mr.x,0];return!yp(i,bo,Ao,Ro,xu)||(i=[1,0,0,0,1,0,0,0,1],!yp(i,bo,Ao,Ro,xu))?!1:(Su.crossVectors(Ys,qs),i=[Su.x,Su.y,Su.z],yp(i,bo,Ao,Ro,xu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ta).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ta).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(us),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const us=[new J,new J,new J,new J,new J,new J,new J,new J],Ta=new J,vu=new er,bo=new J,Ao=new J,Ro=new J,Ys=new J,qs=new J,Mr=new J,Gl=new J,xu=new J,Su=new J,Er=new J;function yp(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Er.fromArray(r,c);const d=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=t.dot(Er),p=i.dot(Er),_=s.dot(Er);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Xn=new J,yu=new De;let qM=0;class pa{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=jp,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yu.fromBufferAttribute(this,i),yu.applyMatrix3(t),this.setXY(i,yu.x,yu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix3(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix4(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyNormalMatrix(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.transformDirection(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Io(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=bi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(t,i){return this.normalized&&(i=bi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(t,i){return this.normalized&&(i=bi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=bi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(t,i){return this.normalized&&(i=bi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=bi(i,this.array),s=bi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=bi(i,this.array),s=bi(s,this.array),l=bi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=bi(i,this.array),s=bi(s,this.array),l=bi(l,this.array),c=bi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jp&&(t.usage=this.usage),t}}class Sm extends pa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ym extends pa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ii extends pa{constructor(t,i,s){super(new Float32Array(t),i,s)}}const jM=new er,Vl=new J,Mp=new J;class Zo{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):jM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vl.subVectors(t,this.center);const i=Vl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vl.copy(t.center).add(Mp)),this.expandByPoint(Vl.copy(t.center).sub(Mp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ZM=0;const ca=new rn,Ep=new fn,Co=new J,Zi=new er,kl=new er,$n=new J;class Ki extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vM(t)?ym:Sm)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ve().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ca.makeRotationFromQuaternion(t),this.applyMatrix4(ca),this}rotateX(t){return ca.makeRotationX(t),this.applyMatrix4(ca),this}rotateY(t){return ca.makeRotationY(t),this.applyMatrix4(ca),this}rotateZ(t){return ca.makeRotationZ(t),this.applyMatrix4(ca),this}translate(t,i,s){return ca.makeTranslation(t,i,s),this.applyMatrix4(ca),this}scale(t,i,s){return ca.makeScale(t,i,s),this.applyMatrix4(ca),this}lookAt(t){return Ep.lookAt(t),Ep.updateMatrix(),this.applyMatrix4(Ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ii(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Zi.setFromBufferAttribute(c),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,Zi.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,Zi.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(Zi.min),this.boundingBox.expandByPoint(Zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(Zi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];kl.setFromBufferAttribute(d),this.morphTargetsRelative?($n.addVectors(Zi.min,kl.min),Zi.expandByPoint($n),$n.addVectors(Zi.max,kl.max),Zi.expandByPoint($n)):(Zi.expandByPoint(kl.min),Zi.expandByPoint(kl.max))}Zi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)$n.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared($n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)$n.fromBufferAttribute(d,p),m&&(Co.fromBufferAttribute(t,p),$n.add(Co)),l=Math.max(l,s.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pa(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let b=0;b<s.count;b++)d[b]=new J,m[b]=new J;const p=new J,_=new J,x=new J,g=new De,y=new De,T=new De,D=new J,M=new J;function S(b,L,$){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,L),x.fromBufferAttribute(s,$),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,L),T.fromBufferAttribute(c,$),_.sub(p),x.sub(p),y.sub(g),T.sub(g);const P=1/(y.x*T.y-T.x*y.y);isFinite(P)&&(D.copy(_).multiplyScalar(T.y).addScaledVector(x,-y.y).multiplyScalar(P),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(P),d[b].add(D),d[L].add(D),d[$].add(D),m[b].add(M),m[L].add(M),m[$].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let b=0,L=C.length;b<L;++b){const $=C[b],P=$.start,k=$.count;for(let j=P,it=P+k;j<it;j+=3)S(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const U=new J,w=new J,B=new J,z=new J;function H(b){B.fromBufferAttribute(l,b),z.copy(B);const L=d[b];U.copy(L),U.sub(B.multiplyScalar(B.dot(L))).normalize(),w.crossVectors(z,L);const P=w.dot(m[b])<0?-1:1;h.setXYZW(b,U.x,U.y,U.z,P)}for(let b=0,L=C.length;b<L;++b){const $=C[b],P=$.start,k=$.count;for(let j=P,it=P+k;j<it;j+=3)H(t.getX(j+0)),H(t.getX(j+1)),H(t.getX(j+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new J,c=new J,h=new J,d=new J,m=new J,p=new J,_=new J,x=new J;if(t)for(let g=0,y=t.count;g<y;g+=3){const T=t.getX(g+0),D=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)$n.fromBufferAttribute(t,i),$n.normalize(),t.setXYZ(i,$n.x,$n.y,$n.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,g=new p.constructor(m.length*_);let y=0,T=0;for(let D=0,M=m.length;D<M;D++){d.isInterleavedBufferAttribute?y=m[D]*d.data.stride+d.offset:y=m[D]*_;for(let S=0;S<_;S++)g[T++]=p[y++]}return new pa(g,_,x)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ki,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const y=p[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KM=0;class zr extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Lr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Zu,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){de(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==_s&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ju&&(s.blendSrc=this.blendSrc),this.blendDst!==Zu&&(s.blendDst=this.blendDst),this.blendEquation!==Qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const fs=new J,Tp=new J,Mu=new J,js=new J,bp=new J,Eu=new J,Ap=new J;class Mm{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fs)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fs.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fs.copy(this.origin).addScaledVector(this.direction,i),fs.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Tp.copy(t).add(i).multiplyScalar(.5),Mu.copy(i).sub(t).normalize(),js.copy(this.origin).sub(Tp);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Mu),d=js.dot(this.direction),m=-js.dot(Mu),p=js.lengthSq(),_=Math.abs(1-h*h);let x,g,y,T;if(_>0)if(x=h*m-d,g=h*d-m,T=c*_,x>=0)if(g>=-T)if(g<=T){const D=1/_;x*=D,g*=D,y=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g<=-T?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Tp).addScaledVector(Mu,g),y}intersectSphere(t,i){fs.subVectors(t.center,this.origin);const s=fs.dot(this.direction),l=fs.dot(fs)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,fs)!==null}intersectTriangle(t,i,s,l,c){bp.subVectors(i,t),Eu.subVectors(s,t),Ap.crossVectors(bp,Eu);let h=this.direction.dot(Ap),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;js.subVectors(this.origin,t);const m=d*this.direction.dot(Eu.crossVectors(js,Eu));if(m<0)return null;const p=d*this.direction.dot(bp.cross(js));if(p<0||m+p>h)return null;const _=-d*js.dot(Ap);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cc extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const bv=new rn,Tr=new Mm,Tu=new Zo,Av=new J,bu=new J,Au=new J,Ru=new J,Rp=new J,Cu=new J,Rv=new J,wu=new J;class ze extends fn{constructor(t=new Ki,i=new cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Cu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Rp.fromBufferAttribute(x,t),h?Cu.addScaledVector(Rp,_):Cu.addScaledVector(Rp.sub(i),_))}i.add(Cu)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tu.copy(s.boundingSphere),Tu.applyMatrix4(c),Tr.copy(t.ray).recast(t.near),!(Tu.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Tu,Av)===null||Tr.origin.distanceToSquared(Av)>(t.far-t.near)**2))&&(bv.copy(c).invert(),Tr.copy(t.ray).applyMatrix4(bv),!(s.boundingBox!==null&&Tr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Tr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,D=g.length;T<D;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),U=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let w=C,B=U;w<B;w+=3){const z=d.getX(w),H=d.getX(w+1),b=d.getX(w+2);l=Du(this,S,t,s,p,_,x,z,H,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),D=Math.min(d.count,y.start+y.count);for(let M=T,S=D;M<S;M+=3){const C=d.getX(M),U=d.getX(M+1),w=d.getX(M+2);l=Du(this,h,t,s,p,_,x,C,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,D=g.length;T<D;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let w=C,B=U;w<B;w+=3){const z=w,H=w+1,b=w+2;l=Du(this,S,t,s,p,_,x,z,H,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let M=T,S=D;M<S;M+=3){const C=M,U=M+1,w=M+2;l=Du(this,h,t,s,p,_,x,C,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function QM(r,t,i,s,l,c,h,d){let m;if(t.side===xi?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===_s,d),m===null)return null;wu.copy(d),wu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(wu);return p<i.near||p>i.far?null:{distance:p,point:wu.clone(),object:r}}function Du(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,bu),r.getVertexPosition(m,Au),r.getVertexPosition(p,Ru);const _=QM(r,t,i,s,bu,Au,Ru,Rv);if(_){const x=new J;fa.getBarycoord(Rv,bu,Au,Ru,x),l&&(_.uv=fa.getInterpolatedAttribute(l,d,m,p,x,new De)),c&&(_.uv1=fa.getInterpolatedAttribute(c,d,m,p,x,new De)),h&&(_.normal=fa.getInterpolatedAttribute(h,d,m,p,x,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new J,materialIndex:0};fa.getNormal(bu,Au,Ru,g.normal),_.face=g,_.barycoord=x}return _}class Em extends ui{constructor(t=null,i=1,s=1,l,c,h,d,m,p=ei,_=ei,x,g){super(null,h,d,m,p,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qp extends pa{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wo=new rn,Cv=new rn,Uu=[],wv=new er,JM=new rn,Xl=new ze,Wl=new Zo;class jx extends ze{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Qp(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,JM)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,wo),wv.copy(t.boundingBox).applyMatrix4(wo),this.boundingBox.union(wv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,wo),Wl.copy(t.boundingSphere).applyMatrix4(wo),this.boundingSphere.union(Wl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Xl.geometry=this.geometry,Xl.material=this.material,Xl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(s),t.ray.intersectsSphere(Wl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,wo),Cv.multiplyMatrices(s,wo),Xl.matrixWorld=Cv,Xl.raycast(t,Uu);for(let h=0,d=Uu.length;h<d;h++){const m=Uu[h];m.instanceId=c,m.object=this,i.push(m)}Uu.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Qp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Em(new Float32Array(l*this.count),l,this.count,Wf,ha));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cp=new J,$M=new J,tE=new ve;class Ks{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Cp.subVectors(s,i).cross($M.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Cp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||tE.getNormalMatrix(t),l=this.coplanarPoint(Cp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Zo,eE=new De(.5,.5),Lu=new J;class th{constructor(t=new Ks,i=new Ks,s=new Ks,l=new Ks,c=new Ks,h=new Ks){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Aa,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],y=c[7],T=c[8],D=c[9],M=c[10],S=c[11],C=c[12],U=c[13],w=c[14],B=c[15];if(l[0].setComponents(p-h,y-_,S-T,B-C).normalize(),l[1].setComponents(p+h,y+_,S+T,B+C).normalize(),l[2].setComponents(p+d,y+x,S+D,B+U).normalize(),l[3].setComponents(p-d,y-x,S-D,B-U).normalize(),s)l[4].setComponents(m,g,M,w).normalize(),l[5].setComponents(p-m,y-g,S-M,B-w).normalize();else if(l[4].setComponents(p-m,y-g,S-M,B-w).normalize(),i===Aa)l[5].setComponents(p+m,y+g,S+M,B+w).normalize();else if(i===Xo)l[5].setComponents(m,g,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);const i=eE.distanceTo(t.center);return br.radius=.7071067811865476+i,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lu.x=l.normal.x>0?t.max.x:t.min.x,Lu.y=l.normal.y>0?t.max.y:t.min.y,Lu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tm extends ui{constructor(t=[],i=tr,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bo extends ui{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yo extends ui{constructor(t,i,s=wa,l,c,h,d=ei,m=ei,p,_=ka,x=1){if(_!==ka&&_!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jf(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Zx extends Yo{constructor(t,i=wa,s=tr,l,c,h=ei,d=ei,m,p=ka){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bm extends ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nr extends Ki{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ii(p,3)),this.setAttribute("normal",new ii(_,3)),this.setAttribute("uv",new ii(x,2));function T(D,M,S,C,U,w,B,z,H,b,L){const $=w/H,P=B/b,k=w/2,j=B/2,it=z/2,K=H+1,O=b+1;let F=0,ot=0;const lt=new J;for(let St=0;St<O;St++){const N=St*P-j;for(let q=0;q<K;q++){const ft=q*$-k;lt[D]=ft*C,lt[M]=N*U,lt[S]=it,p.push(lt.x,lt.y,lt.z),lt[D]=0,lt[M]=0,lt[S]=z>0?1:-1,_.push(lt.x,lt.y,lt.z),x.push(q/H),x.push(1-St/b),F+=1}}for(let St=0;St<b;St++)for(let N=0;N<H;N++){const q=g+N+K*St,ft=g+N+K*(St+1),Mt=g+(N+1)+K*(St+1),Nt=g+(N+1)+K*St;m.push(q,ft,Nt),m.push(ft,Mt,Nt),ot+=6}d.addGroup(y,ot,L),y+=ot,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Kx{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(h-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new De:new J);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new J,l=[],c=[],h=[],d=new J,m=new rn;for(let y=0;y<=t;y++){const T=y/t;l[y]=this.getTangentAt(T,new J)}c[0]=new J,h[0]=new J;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Ae(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,T))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Ae(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],y*T)),h[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Am(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,_,x){let g=(h-c)/p-(d-c)/(p+_)+(d-h)/_,y=(d-h)/_-(m-h)/(_+x)+(m-d)/x;g*=_,y*=_,l(h,d,g,y)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const Nu=new J,wp=new Am,Dp=new Am,Up=new Am;class Qx extends Kx{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new J){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(Nu.subVectors(l[0],l[1]).add(l[0]),p=Nu);const x=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(Nu.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Nu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(x),y),D=Math.pow(x.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);D<1e-4&&(D=1),T<1e-4&&(T=D),M<1e-4&&(M=D),wp.initNonuniformCatmullRom(p.x,x.x,g.x,_.x,T,D,M),Dp.initNonuniformCatmullRom(p.y,x.y,g.y,_.y,T,D,M),Up.initNonuniformCatmullRom(p.z,x.z,g.z,_.z,T,D,M)}else this.curveType==="catmullrom"&&(wp.initCatmullRom(p.x,x.x,g.x,_.x,this.tension),Dp.initCatmullRom(p.y,x.y,g.y,_.y,this.tension),Up.initCatmullRom(p.z,x.z,g.z,_.z,this.tension));return s.set(wp.calc(m),Dp.calc(m),Up.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new J().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class za extends Ki{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,g=i/m,y=[],T=[],D=[],M=[];for(let S=0;S<_;S++){const C=S*g-h;for(let U=0;U<p;U++){const w=U*x-c;T.push(w,-C,0),D.push(0,0,1),M.push(U/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<d;C++){const U=C+p*S,w=C+p*(S+1),B=C+1+p*(S+1),z=C+1+p*S;y.push(U,w,z),y.push(w,B,z)}this.setIndex(y),this.setAttribute("position",new ii(T,3)),this.setAttribute("normal",new ii(D,3)),this.setAttribute("uv",new ii(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.width,t.height,t.widthSegments,t.heightSegments)}}class eh extends Ki{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let x=t;const g=(i-t)/l,y=new J,T=new De;for(let D=0;D<=l;D++){for(let M=0;M<=s;M++){const S=c+M/s*h;y.x=x*Math.cos(S),y.y=x*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),T.x=(y.x/i+1)/2,T.y=(y.y/i+1)/2,_.push(T.x,T.y)}x+=g}for(let D=0;D<l;D++){const M=D*(s+1);for(let S=0;S<s;S++){const C=S+M,U=C,w=C+s+1,B=C+s+2,z=C+1;d.push(U,w,z),d.push(w,B,z)}}this.setIndex(d),this.setAttribute("position",new ii(m,3)),this.setAttribute("normal",new ii(p,3)),this.setAttribute("uv",new ii(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nh extends Ki{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],x=new J,g=new J,y=[],T=[],D=[],M=[];for(let S=0;S<=s;S++){const C=[],U=S/s;let w=0;S===0&&h===0?w=.5/i:S===s&&m===Math.PI&&(w=-.5/i);for(let B=0;B<=i;B++){const z=B/i;x.x=-t*Math.cos(l+z*c)*Math.sin(h+U*d),x.y=t*Math.cos(h+U*d),x.z=t*Math.sin(l+z*c)*Math.sin(h+U*d),T.push(x.x,x.y,x.z),g.copy(x).normalize(),D.push(g.x,g.y,g.z),M.push(z+w,1-U),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const U=_[S][C+1],w=_[S][C],B=_[S+1][C],z=_[S+1][C+1];(S!==0||h>0)&&y.push(U,w,z),(S!==s-1||m<Math.PI)&&y.push(w,B,z)}this.setIndex(y),this.setAttribute("position",new ii(T,3)),this.setAttribute("normal",new ii(D,3)),this.setAttribute("uv",new ii(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function qo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ri(r){const t={};for(let i=0;i<r.length;i++){const s=qo(r[i]);for(const l in s)t[l]=s[l]}return t}function nE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Jx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ge.workingColorSpace}const $x={clone:qo,merge:Ri};var iE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Da extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iE,this.fragmentShader=aE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qo(t.uniforms),this.uniformsGroups=nE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class tS extends Da{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ps extends zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dr extends ps{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class eS extends zr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Hf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nS extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iS extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ko extends fn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class aS extends Ko{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Lp=new rn,Dv=new J,Uv=new J;class Rm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Dv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Dv),Uv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Uv),i.updateMatrixWorld(),Lp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lp,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Xo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Lp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ou=new J,Iu=new Br,Fa=new J;class Cm extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ou,Iu,Fa),Fa.x===1&&Fa.y===1&&Fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Iu,Fa.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Ou,Iu,Fa),Fa.x===1&&Fa.y===1&&Fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Iu,Fa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zs=new J,Lv=new De,Nv=new De;class Ci extends Cm{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ic*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z)}getViewSize(t,i){return this.getViewBounds(t,Lv,Nv),i.subVectors(Nv,Lv)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ic*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class sE extends Rm{constructor(){super(new Ci(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Wo*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Yu extends Ko{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new sE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class rE extends Rm{constructor(){super(new Ci(90,1,.5,500)),this.isPointLightShadow=!0}}class sc extends Ko{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new rE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ih extends Cm{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oE extends Rm{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jp extends Ko{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new oE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class sS extends Ko{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Do=-90,Uo=1;class rS extends fn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(Do,Uo,t,i);l.layers=this.layers,this.add(l);const c=new Ci(Do,Uo,t,i);c.layers=this.layers,this.add(c);const h=new Ci(Do,Uo,t,i);h.layers=this.layers,this.add(h);const d=new Ci(Do,Uo,t,i);d.layers=this.layers,this.add(d);const m=new Ci(Do,Uo,t,i);m.layers=this.layers,this.add(m);const p=new Ci(Do,Uo,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Xo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class oS extends Ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ov=new rn;class lS{constructor(t,i,s=0,l=1/0){this.ray=new Mm(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new $f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):He("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Ov.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ov),this}intersectObject(t,i=!0,s=[]){return $p(t,this,s,i),s.sort(Iv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)$p(t[l],this,s,i);return s.sort(Iv),s}}function Iv(r,t){return r.distance-t.distance}function $p(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)$p(c[h],t,i,!0)}}class cS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,de("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Pv(r,t,i,s){const l=lE(s);switch(i){case mm:return r*t;case Wf:return r*t/l.components*l.byteLength;case Yf:return r*t/l.components*l.byteLength;case Ir:return r*t*2/l.components*l.byteLength;case qf:return r*t*2/l.components*l.byteLength;case gm:return r*t*3/l.components*l.byteLength;case da:return r*t*4/l.components*l.byteLength;case jf:return r*t*4/l.components*l.byteLength;case $l:case tc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ec:case nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rf:case lf:return Math.max(r,16)*Math.max(t,8)/4;case sf:case of:return Math.max(r,8)*Math.max(t,8)/2;case cf:case uf:case hf:case df:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ff:case pf:case mf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _f:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case vf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case xf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Sf:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yf:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Mf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ef:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Tf:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case bf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Af:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Rf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Cf:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case wf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Df:case Uf:case Lf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Nf:case Of:return Math.ceil(r/4)*Math.ceil(t/4)*8;case If:case Pf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lE(r){switch(r){case Fi:case fm:return{byteLength:1,components:1};case Vo:case hm:case Va:return{byteLength:2,components:1};case kf:case Xf:return{byteLength:2,components:4};case wa:case Vf:case ha:return{byteLength:4,components:1};case dm:case pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);function uS(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<x.length;y++){const T=x[g],D=x[y];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++g,x[g]=D)}x.length=g+1;for(let y=0,T=x.length;y<T;y++){const D=x[y];r.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var uE=`#ifdef USE_ALPHAHASH
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
}`,ye={alphahash_fragment:uE,alphahash_pars_fragment:fE,alphamap_fragment:hE,alphamap_pars_fragment:dE,alphatest_fragment:pE,alphatest_pars_fragment:mE,aomap_fragment:gE,aomap_pars_fragment:_E,batching_pars_vertex:vE,batching_vertex:xE,begin_vertex:SE,beginnormal_vertex:yE,bsdfs:ME,iridescence_fragment:EE,bumpmap_pars_fragment:TE,clipping_planes_fragment:bE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:RE,clipping_planes_vertex:CE,color_fragment:wE,color_pars_fragment:DE,color_pars_vertex:UE,color_vertex:LE,common:NE,cube_uv_reflection_fragment:OE,defaultnormal_vertex:IE,displacementmap_pars_vertex:PE,displacementmap_vertex:FE,emissivemap_fragment:BE,emissivemap_pars_fragment:zE,colorspace_fragment:HE,colorspace_pars_fragment:GE,envmap_fragment:VE,envmap_common_pars_fragment:kE,envmap_pars_fragment:XE,envmap_pars_vertex:WE,envmap_physical_pars_fragment:nT,envmap_vertex:YE,fog_vertex:qE,fog_pars_vertex:jE,fog_fragment:ZE,fog_pars_fragment:KE,gradientmap_pars_fragment:QE,lightmap_pars_fragment:JE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:tT,lights_pars_begin:eT,lights_toon_fragment:iT,lights_toon_pars_fragment:aT,lights_phong_fragment:sT,lights_phong_pars_fragment:rT,lights_physical_fragment:oT,lights_physical_pars_fragment:lT,lights_fragment_begin:cT,lights_fragment_maps:uT,lights_fragment_end:fT,logdepthbuf_fragment:hT,logdepthbuf_pars_fragment:dT,logdepthbuf_pars_vertex:pT,logdepthbuf_vertex:mT,map_fragment:gT,map_pars_fragment:_T,map_particle_fragment:vT,map_particle_pars_fragment:xT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:yT,morphinstance_vertex:MT,morphcolor_vertex:ET,morphnormal_vertex:TT,morphtarget_pars_vertex:bT,morphtarget_vertex:AT,normal_fragment_begin:RT,normal_fragment_maps:CT,normal_pars_fragment:wT,normal_pars_vertex:DT,normal_vertex:UT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:NT,clearcoat_normal_fragment_maps:OT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:PT,opaque_fragment:FT,packing:BT,premultiplied_alpha_fragment:zT,project_vertex:HT,dithering_fragment:GT,dithering_pars_fragment:VT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:WT,shadowmap_pars_vertex:YT,shadowmap_vertex:qT,shadowmask_pars_fragment:jT,skinbase_vertex:ZT,skinning_pars_vertex:KT,skinning_vertex:QT,skinnormal_vertex:JT,specularmap_fragment:$T,specularmap_pars_fragment:t1,tonemapping_fragment:e1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:a1,uv_pars_fragment:s1,uv_pars_vertex:r1,uv_vertex:o1,worldpos_vertex:l1,background_vert:c1,background_frag:u1,backgroundCube_vert:f1,backgroundCube_frag:h1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distance_vert:_1,distance_frag:v1,equirect_vert:x1,equirect_frag:S1,linedashed_vert:y1,linedashed_frag:M1,meshbasic_vert:E1,meshbasic_frag:T1,meshlambert_vert:b1,meshlambert_frag:A1,meshmatcap_vert:R1,meshmatcap_frag:C1,meshnormal_vert:w1,meshnormal_frag:D1,meshphong_vert:U1,meshphong_frag:L1,meshphysical_vert:N1,meshphysical_frag:O1,meshtoon_vert:I1,meshtoon_frag:P1,points_vert:F1,points_frag:B1,shadow_vert:z1,shadow_frag:H1,sprite_vert:G1,sprite_frag:V1},Ft={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},ba={basic:{uniforms:Ri([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Ri([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Ri([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Ri([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Ri([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new re(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Ri([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Ri([Ft.points,Ft.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Ri([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Ri([Ft.common,Ft.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Ri([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Ri([Ft.sprite,Ft.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Ri([Ft.common,Ft.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Ri([Ft.lights,Ft.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};ba.physical={uniforms:Ri([ba.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Pu={r:0,b:0,g:0},Ar=new ma,k1=new rn;function X1(r,t,i,s,l,c){const h=new re(0);let d=l===!0?0:1,m,p,_=null,x=0,g=null;function y(C){let U=C.isScene===!0?C.background:null;if(U&&U.isTexture){const w=C.backgroundBlurriness>0;U=t.get(U,w)}return U}function T(C){let U=!1;const w=y(C);w===null?M(h,d):w&&w.isColor&&(M(w,1),U=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(C,U){const w=y(U);w&&(w.isCubeTexture||w.mapping===uc)?(p===void 0&&(p=new ze(new nr(1,1,1),new Da({name:"BackgroundCubeMaterial",uniforms:qo(ba.backgroundCube.uniforms),vertexShader:ba.backgroundCube.vertexShader,fragmentShader:ba.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ar.copy(U.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(Ar)),p.material.toneMapped=Ge.getTransfer(w.colorSpace)!==Qe,(_!==w||x!==w.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=w,x=w.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new ze(new za(2,2),new Da({name:"BackgroundMaterial",uniforms:qo(ba.background.uniforms),vertexShader:ba.background.vertexShader,fragmentShader:ba.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Ge.getTransfer(w.colorSpace)!==Qe,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||x!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=w,x=w.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,U){C.getRGB(Pu,Jx(r)),i.buffers.color.setClear(Pu.r,Pu.g,Pu.b,U,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,U=1){h.set(C),d=U,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(h,d)},render:T,addToRenderList:D,dispose:S}}function W1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(P,k,j,it,K){let O=!1;const F=x(P,it,j,k);c!==F&&(c=F,p(c.object)),O=y(P,it,j,K),O&&T(P,it,j,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,w(P,k,j,it),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function m(){return r.createVertexArray()}function p(P){return r.bindVertexArray(P)}function _(P){return r.deleteVertexArray(P)}function x(P,k,j,it){const K=it.wireframe===!0;let O=s[k.id];O===void 0&&(O={},s[k.id]=O);const F=P.isInstancedMesh===!0?P.id:0;let ot=O[F];ot===void 0&&(ot={},O[F]=ot);let lt=ot[j.id];lt===void 0&&(lt={},ot[j.id]=lt);let St=lt[K];return St===void 0&&(St=g(m()),lt[K]=St),St}function g(P){const k=[],j=[],it=[];for(let K=0;K<i;K++)k[K]=0,j[K]=0,it[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:it,object:P,attributes:{},index:null}}function y(P,k,j,it){const K=c.attributes,O=k.attributes;let F=0;const ot=j.getAttributes();for(const lt in ot)if(ot[lt].location>=0){const N=K[lt];let q=O[lt];if(q===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),N===void 0||N.attribute!==q||q&&N.data!==q.data)return!0;F++}return c.attributesNum!==F||c.index!==it}function T(P,k,j,it){const K={},O=k.attributes;let F=0;const ot=j.getAttributes();for(const lt in ot)if(ot[lt].location>=0){let N=O[lt];N===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(N=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(N=P.instanceColor));const q={};q.attribute=N,N&&N.data&&(q.data=N.data),K[lt]=q,F++}c.attributes=K,c.attributesNum=F,c.index=it}function D(){const P=c.newAttributes;for(let k=0,j=P.length;k<j;k++)P[k]=0}function M(P){S(P,0)}function S(P,k){const j=c.newAttributes,it=c.enabledAttributes,K=c.attributeDivisors;j[P]=1,it[P]===0&&(r.enableVertexAttribArray(P),it[P]=1),K[P]!==k&&(r.vertexAttribDivisor(P,k),K[P]=k)}function C(){const P=c.newAttributes,k=c.enabledAttributes;for(let j=0,it=k.length;j<it;j++)k[j]!==P[j]&&(r.disableVertexAttribArray(j),k[j]=0)}function U(P,k,j,it,K,O,F){F===!0?r.vertexAttribIPointer(P,k,j,K,O):r.vertexAttribPointer(P,k,j,it,K,O)}function w(P,k,j,it){D();const K=it.attributes,O=j.getAttributes(),F=k.defaultAttributeValues;for(const ot in O){const lt=O[ot];if(lt.location>=0){let St=K[ot];if(St===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(St=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(St=P.instanceColor)),St!==void 0){const N=St.normalized,q=St.itemSize,ft=t.get(St);if(ft===void 0)continue;const Mt=ft.buffer,Nt=ft.type,et=ft.bytesPerElement,gt=Nt===r.INT||Nt===r.UNSIGNED_INT||St.gpuType===Vf;if(St.isInterleavedBufferAttribute){const xt=St.data,Xt=xt.stride,Kt=St.offset;if(xt.isInstancedInterleavedBuffer){for(let ne=0;ne<lt.locationSize;ne++)S(lt.location+ne,xt.meshPerAttribute);P.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ne=0;ne<lt.locationSize;ne++)M(lt.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let ne=0;ne<lt.locationSize;ne++)U(lt.location+ne,q/lt.locationSize,Nt,N,Xt*et,(Kt+q/lt.locationSize*ne)*et,gt)}else{if(St.isInstancedBufferAttribute){for(let xt=0;xt<lt.locationSize;xt++)S(lt.location+xt,St.meshPerAttribute);P.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let xt=0;xt<lt.locationSize;xt++)M(lt.location+xt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let xt=0;xt<lt.locationSize;xt++)U(lt.location+xt,q/lt.locationSize,Nt,N,q*et,q/lt.locationSize*xt*et,gt)}}else if(F!==void 0){const N=F[ot];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(lt.location,N);break;case 3:r.vertexAttrib3fv(lt.location,N);break;case 4:r.vertexAttrib4fv(lt.location,N);break;default:r.vertexAttrib1fv(lt.location,N)}}}}C()}function B(){L();for(const P in s){const k=s[P];for(const j in k){const it=k[j];for(const K in it){const O=it[K];for(const F in O)_(O[F].object),delete O[F];delete it[K]}}delete s[P]}}function z(P){if(s[P.id]===void 0)return;const k=s[P.id];for(const j in k){const it=k[j];for(const K in it){const O=it[K];for(const F in O)_(O[F].object),delete O[F];delete it[K]}}delete s[P.id]}function H(P){for(const k in s){const j=s[k];for(const it in j){const K=j[it];if(K[P.id]===void 0)continue;const O=K[P.id];for(const F in O)_(O[F].object),delete O[F];delete K[P.id]}}}function b(P){for(const k in s){const j=s[k],it=P.isInstancedMesh===!0?P.id:0,K=j[it];if(K!==void 0){for(const O in K){const F=K[O];for(const ot in F)_(F[ot].object),delete F[ot];delete K[O]}delete j[it],Object.keys(j).length===0&&delete s[k]}}}function L(){$(),h=!0,c!==l&&(c=l,p(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:L,resetDefaultState:$,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfObject:b,releaseStatesOfProgram:H,initAttributes:D,enableAttribute:M,disableUnusedAttributes:C}}function Y1(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let y=0;for(let T=0;T<x;T++)y+=_[T];i.update(y,s,1)}function m(p,_,x,g){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)h(p[T],_[T],g[T]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,x);let T=0;for(let D=0;D<x;D++)T+=_[D]*g[D];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function q1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==da&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const b=H===Va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Fi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ha&&!b)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(de("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:U,maxFragmentUniforms:w,maxSamples:B,samples:z}}function j1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ks,d=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const T=x.clippingPlanes,D=x.clipIntersection,M=x.clipShadows,S=r.get(x);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,U=C*4;let w=S.clippingState||null;m.value=w,w=_(T,g,U,y);for(let B=0;B!==U;++B)w[B]=i[B];S.clippingState=w,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,y,T){const D=x!==null?x.length:0;let M=null;if(D!==0){if(M=m.value,T!==!0||M===null){const S=y+D*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let U=0,w=y;U!==D;++U,w+=4)h.copy(x[U]).applyMatrix4(C,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}const $s=4,Fv=[.125,.215,.35,.446,.526,.582],Ur=20,Z1=256,Yl=new ih,Bv=new re;let Np=null,Op=0,Ip=0,Pp=!1;const K1=new J;class Bf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=K1}=c;Np=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),Ip=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Np,Op,Ip),this._renderer.xr.enabled=Pp,t.scissorTest=!1,Lo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===tr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Np=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),Ip=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Va,format:da,colorSpace:Pr,depthBuffer:!1},l=zv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Q1(c)),this._blurMaterial=$1(c,t,i),this._ggxMaterial=J1(c,t,i)}return l}_compileMaterial(t){const i=new ze(new Ki,t);this._renderer.compile(i,Yl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ci(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(Bv),x.toneMapping=Ra,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new nr,new cc({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(Bv),S=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const B=this._cubeSize;Lo(l,w*B,U>2?B:0,B,B),x.setRenderTarget(l),S&&x.render(D,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===tr||t.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Lo(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Yl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,y=x*g,{_lodMax:T}=this,D=this._sizeLods[s],M=3*D*(s>T-$s?s-T+$s:0),S=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,Lo(c,M,S,3*D,2*D),l.setRenderTarget(c),l.render(d,Yl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Lo(t,M,S,3*D,2*D),l.setRenderTarget(t),l.render(d,Yl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ur-1),D=c/T,M=isFinite(c)?1+Math.floor(_*D):Ur;M>Ur&&de(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ur}`);const S=[];let C=0;for(let H=0;H<Ur;++H){const b=H/D,L=Math.exp(-b*b/2);S.push(L),H===0?C+=L:H<M&&(C+=2*L)}for(let H=0;H<S.length;H++)S[H]=S[H]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:U}=this;g.dTheta.value=T,g.mipInt.value=U-s;const w=this._sizeLods[l],B=3*w*(l>U-$s?l-U+$s:0),z=4*(this._cubeSize-w);Lo(i,B,z,3*w,2*w),m.setRenderTarget(i),m.render(x,Yl)}}function Q1(r){const t=[],i=[],s=[];let l=r;const c=r-$s+1+Fv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-$s?m=Fv[h-r+$s-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,T=6,D=3,M=2,S=1,C=new Float32Array(D*T*y),U=new Float32Array(M*T*y),w=new Float32Array(S*T*y);for(let z=0;z<y;z++){const H=z%3*2/3-1,b=z>2?0:-1,L=[H,b,0,H+2/3,b,0,H+2/3,b+1,0,H,b,0,H+2/3,b+1,0,H,b+1,0];C.set(L,D*T*z),U.set(g,M*T*z);const $=[z,z,z,z,z,z];w.set($,S*T*z)}const B=new Ki;B.setAttribute("position",new pa(C,D)),B.setAttribute("uv",new pa(U,M)),B.setAttribute("faceIndex",new pa(w,S)),s.push(new ze(B,null)),l>$s&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function zv(r,t,i){const s=new Ca(r,t,i);return s.texture.mapping=uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lo(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function J1(r,t,i){return new Da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function $1(r,t,i){const s=new Float32Array(Ur),l=new J(0,1,0);return new Da({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Hv(){return new Da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Gv(){return new Da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}class wm extends Ca{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Tm(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nr(5,5,5),c=new Da({name:"CubemapFromEquirect",uniforms:qo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:xi,blending:Ga});c.uniforms.tEquirect.value=i;const h=new ze(l,c),d=i.minFilter;return i.minFilter===ms&&(i.minFilter=ni),new rS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function tb(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Vu||y===ku)if(t.has(g)){const T=t.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const D=new wm(T.height);return D.fromEquirectangularTexture(r,g),t.set(g,D),g.addEventListener("dispose",p),d(D.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===Vu||y===ku,D=y===tr||y===Or;if(T||D){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Bf(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return T&&C&&C.height>0||D&&C&&m(C)?(s===null&&(s=new Bf(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===Vu?g.mapping=tr:y===ku&&(g.mapping=Or),g}function m(g){let y=0;const T=6;for(let D=0;D<T;D++)g[D]!==void 0&&y++;return y===T}function p(g){const y=g.target;y.removeEventListener("dispose",p);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function eb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&oc("WebGLRenderer: "+s+" extension not supported."),l}}}function nb(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(x){const g=[],y=x.index,T=x.attributes.position;let D=0;if(T===void 0)return;if(y!==null){const C=y.array;D=y.version;for(let U=0,w=C.length;U<w;U+=3){const B=C[U+0],z=C[U+1],H=C[U+2];g.push(B,z,z,H,H,B)}}else{const C=T.array;D=T.version;for(let U=0,w=C.length/3-1;U<w;U+=3){const B=U+0,z=U+1,H=U+2;g.push(B,z,z,H,H,B)}}const M=new(T.count>=65535?ym:Sm)(g,1);M.version=D;const S=c.get(x);S&&t.remove(S),c.set(x,M)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function ib(r,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*h),i.update(y,s,1)}function p(g,y,T){T!==0&&(r.drawElementsInstanced(s,y,c,g*h,T),i.update(y,s,T))}function _(g,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,T);let M=0;for(let S=0;S<T;S++)M+=y[S];i.update(M,s,1)}function x(g,y,T,D){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/h,y[S],D[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,D,0,T);let S=0;for(let C=0;C<T;C++)S+=y[C]*D[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function ab(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:He("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sb(r,t,i){const s=new WeakMap,l=new bn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let $=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",$)};var y=$;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;T===!0&&(w=1),D===!0&&(w=2),M===!0&&(w=3);let B=d.attributes.position.count*w,z=1;B>t.maxTextureSize&&(z=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const H=new Float32Array(B*z*4*x),b=new vm(H,B,z,x);b.type=ha,b.needsUpdate=!0;const L=w*4;for(let P=0;P<x;P++){const k=S[P],j=C[P],it=U[P],K=B*z*4*P;for(let O=0;O<k.count;O++){const F=O*L;T===!0&&(l.fromBufferAttribute(k,O),H[K+F+0]=l.x,H[K+F+1]=l.y,H[K+F+2]=l.z,H[K+F+3]=0),D===!0&&(l.fromBufferAttribute(j,O),H[K+F+4]=l.x,H[K+F+5]=l.y,H[K+F+6]=l.z,H[K+F+7]=0),M===!0&&(l.fromBufferAttribute(it,O),H[K+F+8]=l.x,H[K+F+9]=l.y,H[K+F+10]=l.z,H[K+F+11]=it.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new De(B,z)},s.set(d,g),d.addEventListener("dispose",$)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const D=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function rb(r,t,i,s,l){let c=new WeakMap;function h(p){const _=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const ob={[am]:"LINEAR_TONE_MAPPING",[sm]:"REINHARD_TONE_MAPPING",[rm]:"CINEON_TONE_MAPPING",[Gf]:"ACES_FILMIC_TONE_MAPPING",[lm]:"AGX_TONE_MAPPING",[cm]:"NEUTRAL_TONE_MAPPING",[om]:"CUSTOM_TONE_MAPPING"};function lb(r,t,i,s,l){const c=new Ca(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Ca(t,i,{type:Va,depthBuffer:!1,stencilBuffer:!1}),d=new Ki;d.setAttribute("position",new ii([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ii([0,2,0,0,2,0],2));const m=new tS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ze(d,m),_=new ih(-1,1,1,-1,0,1);let x=null,g=null,y=!1,T,D=null,M=[],S=!1;this.setSize=function(C,U){c.setSize(C,U),h.setSize(C,U);for(let w=0;w<M.length;w++){const B=M[w];B.setSize&&B.setSize(C,U)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const U=c.width,w=c.height;for(let B=0;B<M.length;B++){const z=M[B];z.setSize&&z.setSize(U,w)}},this.begin=function(C,U){if(y||C.toneMapping===Ra&&M.length===0)return!1;if(D=U,U!==null){const w=U.width,B=U.height;(c.width!==w||c.height!==B)&&this.setSize(w,B)}return S===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=Ra,!0},this.hasRenderPass=function(){return S},this.end=function(C,U){C.toneMapping=T,y=!0;let w=c,B=h;for(let z=0;z<M.length;z++){const H=M[z];if(H.enabled!==!1&&(H.render(C,B,w,U),H.needsSwap!==!1)){const b=w;w=B,B=b}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},Ge.getTransfer(x)===Qe&&(m.defines.SRGB_TRANSFER="");const z=ob[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,C.setRenderTarget(D),C.render(p,_),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const fS=new ui,tm=new Yo(1,1),hS=new vm,dS=new Yx,pS=new Tm,Vv=[],kv=[],Xv=new Float32Array(16),Wv=new Float32Array(9),Yv=new Float32Array(4);function Qo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Vv[l];if(c===void 0&&(c=new Float32Array(l),Vv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function Kn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Qn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function sh(r,t){let i=kv[t];i===void 0&&(i=new Int32Array(t),kv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function cb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Kn(i,t))return;r.uniform2fv(this.addr,t),Qn(i,t)}}function fb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Kn(i,t))return;r.uniform3fv(this.addr,t),Qn(i,t)}}function hb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Kn(i,t))return;r.uniform4fv(this.addr,t),Qn(i,t)}}function db(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Kn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Qn(i,t)}else{if(Kn(i,s))return;Yv.set(s),r.uniformMatrix2fv(this.addr,!1,Yv),Qn(i,s)}}function pb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Kn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Qn(i,t)}else{if(Kn(i,s))return;Wv.set(s),r.uniformMatrix3fv(this.addr,!1,Wv),Qn(i,s)}}function mb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Kn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Qn(i,t)}else{if(Kn(i,s))return;Xv.set(s),r.uniformMatrix4fv(this.addr,!1,Xv),Qn(i,s)}}function gb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function _b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Kn(i,t))return;r.uniform2iv(this.addr,t),Qn(i,t)}}function vb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Kn(i,t))return;r.uniform3iv(this.addr,t),Qn(i,t)}}function xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Kn(i,t))return;r.uniform4iv(this.addr,t),Qn(i,t)}}function Sb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function yb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Kn(i,t))return;r.uniform2uiv(this.addr,t),Qn(i,t)}}function Mb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Kn(i,t))return;r.uniform3uiv(this.addr,t),Qn(i,t)}}function Eb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Kn(i,t))return;r.uniform4uiv(this.addr,t),Qn(i,t)}}function Tb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(tm.compareFunction=i.isReversedDepthBuffer()?Qf:Kf,c=tm):c=fS,i.setTexture2D(t||c,l)}function bb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||dS,l)}function Ab(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||pS,l)}function Rb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||hS,l)}function Cb(r){switch(r){case 5126:return cb;case 35664:return ub;case 35665:return fb;case 35666:return hb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return xb;case 5125:return Sb;case 36294:return yb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Rb}}function wb(r,t){r.uniform1fv(this.addr,t)}function Db(r,t){const i=Qo(t,this.size,2);r.uniform2fv(this.addr,i)}function Ub(r,t){const i=Qo(t,this.size,3);r.uniform3fv(this.addr,i)}function Lb(r,t){const i=Qo(t,this.size,4);r.uniform4fv(this.addr,i)}function Nb(r,t){const i=Qo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Ob(r,t){const i=Qo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Ib(r,t){const i=Qo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Pb(r,t){r.uniform1iv(this.addr,t)}function Fb(r,t){r.uniform2iv(this.addr,t)}function Bb(r,t){r.uniform3iv(this.addr,t)}function zb(r,t){r.uniform4iv(this.addr,t)}function Hb(r,t){r.uniform1uiv(this.addr,t)}function Gb(r,t){r.uniform2uiv(this.addr,t)}function Vb(r,t){r.uniform3uiv(this.addr,t)}function kb(r,t){r.uniform4uiv(this.addr,t)}function Xb(r,t,i){const s=this.cache,l=t.length,c=sh(i,l);Kn(s,c)||(r.uniform1iv(this.addr,c),Qn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=tm:h=fS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function Wb(r,t,i){const s=this.cache,l=t.length,c=sh(i,l);Kn(s,c)||(r.uniform1iv(this.addr,c),Qn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||dS,c[h])}function Yb(r,t,i){const s=this.cache,l=t.length,c=sh(i,l);Kn(s,c)||(r.uniform1iv(this.addr,c),Qn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||pS,c[h])}function qb(r,t,i){const s=this.cache,l=t.length,c=sh(i,l);Kn(s,c)||(r.uniform1iv(this.addr,c),Qn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||hS,c[h])}function jb(r){switch(r){case 5126:return wb;case 35664:return Db;case 35665:return Ub;case 35666:return Lb;case 35674:return Nb;case 35675:return Ob;case 35676:return Ib;case 5124:case 35670:return Pb;case 35667:case 35671:return Fb;case 35668:case 35672:return Bb;case 35669:case 35673:return zb;case 5125:return Hb;case 36294:return Gb;case 36295:return Vb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return qb}}class Zb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Cb(i.type)}}class Kb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jb(i.type)}}class Qb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Fp=/(\w+)(\])?(\[|\.)?/g;function qv(r,t){r.seq.push(t),r.map[t.id]=t}function Jb(r,t,i){const s=r.name,l=s.length;for(Fp.lastIndex=0;;){const c=Fp.exec(s),h=Fp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){qv(i,p===void 0?new Zb(d,r,t):new Kb(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new Qb(d),qv(i,x)),i=x}}}class qu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);Jb(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function jv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const $b=37297;let tA=0;function eA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Zv=new ve;function nA(r){Ge._getMatrix(Zv,Ge.workingColorSpace,r);const t=`mat3( ${Zv.elements.map(i=>i.toFixed(4))} )`;switch(Ge.getTransfer(r)){case rc:return[t,"LinearTransferOETF"];case Qe:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Kv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+eA(r.getShaderSource(t),d)}else return c}function iA(r,t){const i=nA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const aA={[am]:"Linear",[sm]:"Reinhard",[rm]:"Cineon",[Gf]:"ACESFilmic",[lm]:"AgX",[cm]:"Neutral",[om]:"Custom"};function sA(r,t){const i=aA[t];return i===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fu=new J;function rA(){Ge.getLuminanceCoefficients(Fu);const r=Fu.x.toFixed(4),t=Fu.y.toFixed(4),i=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jl).join(`
`)}function lA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function cA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Jl(r){return r!==""}function Qv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function em(r){return r.replace(uA,hA)}const fA=new Map;function hA(r,t){let i=ye[t];if(i===void 0){const s=fA.get(t);if(s!==void 0)i=ye[s],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return em(i)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(r){return r.replace(dA,pA)}function pA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function tx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const mA={[zo]:"SHADOWMAP_TYPE_PCF",[Po]:"SHADOWMAP_TYPE_VSM"};function gA(r){return mA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _A={[tr]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[uc]:"ENVMAP_TYPE_CUBE_UV"};function vA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_A[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xA={[Or]:"ENVMAP_MODE_REFRACTION"};function SA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yA={[Hf]:"ENVMAP_BLENDING_MULTIPLY",[Ux]:"ENVMAP_BLENDING_MIX",[Lx]:"ENVMAP_BLENDING_ADD"};function MA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yA[r.combine]||"ENVMAP_BLENDING_NONE"}function EA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function TA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=gA(i),p=vA(i),_=SA(i),x=MA(i),g=EA(i),y=oA(i),T=lA(c),D=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jl).join(`
`),S.length>0&&(S+=`
`)):(M=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jl).join(`
`),S=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ra?"#define TONE_MAPPING":"",i.toneMapping!==Ra?ye.tonemapping_pars_fragment:"",i.toneMapping!==Ra?sA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,iA("linearToOutputTexel",i.outputColorSpace),rA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jl).join(`
`)),h=em(h),h=Qv(h,i),h=Jv(h,i),d=em(d),d=Qv(d,i),d=Jv(d,i),h=$v(h),d=$v(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=C+M+h,w=C+S+d,B=jv(l,l.VERTEX_SHADER,U),z=jv(l,l.FRAGMENT_SHADER,w);l.attachShader(D,B),l.attachShader(D,z),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function H(P){if(r.debug.checkShaderErrors){const k=l.getProgramInfoLog(D)||"",j=l.getShaderInfoLog(B)||"",it=l.getShaderInfoLog(z)||"",K=k.trim(),O=j.trim(),F=it.trim();let ot=!0,lt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,B,z);else{const St=Kv(l,B,"vertex"),N=Kv(l,z,"fragment");He("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+K+`
`+St+`
`+N)}else K!==""?de("WebGLProgram: Program Info Log:",K):(O===""||F==="")&&(lt=!1);lt&&(P.diagnostics={runnable:ot,programLog:K,vertexShader:{log:O,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(B),l.deleteShader(z),b=new qu(l,D),L=cA(l,D)}let b;this.getUniforms=function(){return b===void 0&&H(this),b};let L;this.getAttributes=function(){return L===void 0&&H(this),L};let $=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=l.getProgramParameter(D,$b)),$},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=B,this.fragmentShader=z,this}let bA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new RA(t),i.set(t,s)),s}}class RA{constructor(t){this.id=bA++,this.code=t,this.usedTimes=0}}function CA(r,t,i,s,l,c){const h=new $f,d=new AA,m=new Set,p=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function D(b,L,$,P,k){const j=P.fog,it=k.geometry,K=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,F=t.get(b.envMap||K,O),ot=F&&F.mapping===uc?F.image.height:null,lt=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&de("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const St=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,N=St!==void 0?St.length:0;let q=0;it.morphAttributes.position!==void 0&&(q=1),it.morphAttributes.normal!==void 0&&(q=2),it.morphAttributes.color!==void 0&&(q=3);let ft,Mt,Nt,et;if(lt){const Oe=ba[lt];ft=Oe.vertexShader,Mt=Oe.fragmentShader}else ft=b.vertexShader,Mt=b.fragmentShader,d.update(b),Nt=d.getVertexShaderID(b),et=d.getFragmentShaderID(b);const gt=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Xt=k.isInstancedMesh===!0,Kt=k.isBatchedMesh===!0,ne=!!b.map,on=!!b.matcap,xe=!!F,Me=!!b.aoMap,Be=!!b.lightMap,pe=!!b.bumpMap,hn=!!b.normalMap,V=!!b.displacementMap,tn=!!b.emissiveMap,Re=!!b.metalnessMap,Ne=!!b.roughnessMap,Wt=b.anisotropy>0,I=b.clearcoat>0,E=b.dispersion>0,Z=b.iridescence>0,mt=b.sheen>0,yt=b.transmission>0,dt=Wt&&!!b.anisotropyMap,qt=I&&!!b.clearcoatMap,wt=I&&!!b.clearcoatNormalMap,ee=I&&!!b.clearcoatRoughnessMap,ae=Z&&!!b.iridescenceMap,bt=Z&&!!b.iridescenceThicknessMap,Tt=mt&&!!b.sheenColorMap,Lt=mt&&!!b.sheenRoughnessMap,Ot=!!b.specularMap,Pt=!!b.specularColorMap,me=!!b.specularIntensityMap,Y=yt&&!!b.transmissionMap,Et=yt&&!!b.thicknessMap,Rt=!!b.gradientMap,Ht=!!b.alphaMap,At=b.alphaTest>0,ht=!!b.alphaHash,zt=!!b.extensions;let se=Ra;b.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(se=r.toneMapping);const Ve={shaderID:lt,shaderType:b.type,shaderName:b.name,vertexShader:ft,fragmentShader:Mt,defines:b.defines,customVertexShaderID:Nt,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Kt,batchingColor:Kt&&k._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&k.instanceColor!==null,instancingMorph:Xt&&k.morphTexture!==null,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Pr,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:on,envMap:xe,envMapMode:xe&&F.mapping,envMapCubeUVHeight:ot,aoMap:Me,lightMap:Be,bumpMap:pe,normalMap:hn,displacementMap:V,emissiveMap:tn,normalMapObjectSpace:hn&&b.normalMapType===Ix,normalMapTangentSpace:hn&&b.normalMapType===Zf,metalnessMap:Re,roughnessMap:Ne,anisotropy:Wt,anisotropyMap:dt,clearcoat:I,clearcoatMap:qt,clearcoatNormalMap:wt,clearcoatRoughnessMap:ee,dispersion:E,iridescence:Z,iridescenceMap:ae,iridescenceThicknessMap:bt,sheen:mt,sheenColorMap:Tt,sheenRoughnessMap:Lt,specularMap:Ot,specularColorMap:Pt,specularIntensityMap:me,transmission:yt,transmissionMap:Y,thicknessMap:Et,gradientMap:Rt,opaque:b.transparent===!1&&b.blending===Lr&&b.alphaToCoverage===!1,alphaMap:Ht,alphaTest:At,alphaHash:ht,combine:b.combine,mapUv:ne&&T(b.map.channel),aoMapUv:Me&&T(b.aoMap.channel),lightMapUv:Be&&T(b.lightMap.channel),bumpMapUv:pe&&T(b.bumpMap.channel),normalMapUv:hn&&T(b.normalMap.channel),displacementMapUv:V&&T(b.displacementMap.channel),emissiveMapUv:tn&&T(b.emissiveMap.channel),metalnessMapUv:Re&&T(b.metalnessMap.channel),roughnessMapUv:Ne&&T(b.roughnessMap.channel),anisotropyMapUv:dt&&T(b.anisotropyMap.channel),clearcoatMapUv:qt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&T(b.sheenRoughnessMap.channel),specularMapUv:Ot&&T(b.specularMap.channel),specularColorMapUv:Pt&&T(b.specularColorMap.channel),specularIntensityMapUv:me&&T(b.specularIntensityMap.channel),transmissionMapUv:Y&&T(b.transmissionMap.channel),thicknessMapUv:Et&&T(b.thicknessMap.channel),alphaMapUv:Ht&&T(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(hn||Wt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!it.attributes.uv&&(ne||Ht),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||it.attributes.normal===void 0&&hn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:xt,skinning:k.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:q,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&$.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&Ge.getTransfer(b.map.colorSpace)===Qe,decodeVideoTextureEmissive:tn&&b.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(b.emissiveMap.colorSpace)===Qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wn,flipSided:b.side===xi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ve.vertexUv1s=m.has(1),Ve.vertexUv2s=m.has(2),Ve.vertexUv3s=m.has(3),m.clear(),Ve}function M(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const $ in b.defines)L.push($),L.push(b.defines[$]);return b.isRawShaderMaterial===!1&&(S(L,b),C(L,b),L.push(r.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function S(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function C(b,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),b.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),b.push(h.mask)}function U(b){const L=y[b.type];let $;if(L){const P=ba[L];$=$x.clone(P.uniforms)}else $=b.uniforms;return $}function w(b,L){let $=_.get(L);return $!==void 0?++$.usedTimes:($=new TA(r,L,b,l),p.push($),_.set(L,$)),$}function B(b){if(--b.usedTimes===0){const L=p.indexOf(b);p[L]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function z(b){d.remove(b)}function H(){d.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:U,acquireProgram:w,releaseProgram:B,releaseShaderCache:z,programs:p,dispose:H}}function wA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function DA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function ex(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function nx(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,T,D,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:D,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=h(g),C.groupOrder=D,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,T,D,M,S){const C=d(g,y,T,D,M,S);T.transmission>0?s.push(C):T.transparent===!0?l.push(C):i.push(C)}function p(g,y,T,D,M,S){const C=d(g,y,T,D,M,S);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||DA),s.length>1&&s.sort(y||ex),l.length>1&&l.sort(y||ex)}function x(){for(let g=t,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:_}}function UA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new nx,r.set(s,[h])):l>=c.length?(h=new nx,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function LA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new re};break;case"SpotLight":i={position:new J,direction:new J,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new re,groundColor:new re};break;case"RectAreaLight":i={color:new re,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function NA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let OA=0;function IA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function PA(r){const t=new LA,i=NA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new rn,h=new rn;function d(p){let _=0,x=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,T=0,D=0,M=0,S=0,C=0,U=0,w=0,B=0,z=0,H=0;p.sort(IA);for(let L=0,$=p.length;L<$;L++){const P=p[L],k=P.color,j=P.intensity,it=P.distance;let K=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ir?K=P.shadow.map.texture:K=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)_+=k.r*j,x+=k.g*j,g+=k.b*j;else if(P.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(P.sh.coefficients[O],j);H++}else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,ot=i.get(P);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,s.directionalShadow[y]=ot,s.directionalShadowMap[y]=K,s.directionalShadowMatrix[y]=P.shadow.matrix,C++}s.directional[y]=O,y++}else if(P.isSpotLight){const O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(k).multiplyScalar(j),O.distance=it,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,s.spot[D]=O;const F=P.shadow;if(P.map&&(s.spotLightMap[B]=P.map,B++,F.updateMatrices(P),P.castShadow&&z++),s.spotLightMatrix[D]=F.matrix,P.castShadow){const ot=i.get(P);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,s.spotShadow[D]=ot,s.spotShadowMap[D]=K,w++}D++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(k).multiplyScalar(j),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=O,M++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const F=P.shadow,ot=i.get(P);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,ot.shadowCameraNear=F.camera.near,ot.shadowCameraFar=F.camera.far,s.pointShadow[T]=ot,s.pointShadowMap[T]=K,s.pointShadowMatrix[T]=P.shadow.matrix,U++}s.point[T]=O,T++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(j),O.groundColor.copy(P.groundColor).multiplyScalar(j),s.hemi[S]=O,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==D||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==C||b.numPointShadows!==U||b.numSpotShadows!==w||b.numSpotMaps!==B||b.numLightProbes!==H)&&(s.directional.length=y,s.spot.length=D,s.rectArea.length=M,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=w+B-z,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=H,b.directionalLength=y,b.pointLength=T,b.spotLength=D,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=C,b.numPointShadows=U,b.numSpotShadows=w,b.numSpotMaps=B,b.numLightProbes=H,s.version=OA++)}function m(p,_){let x=0,g=0,y=0,T=0,D=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const U=p[S];if(U.isDirectionalLight){const w=s.directional[x];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),x++}else if(U.isSpotLight){const w=s.spot[y];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const w=s.rectArea[T];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),g++}else if(U.isHemisphereLight){const w=s.hemi[D];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(M),D++}}}return{setup:d,setupView:m,state:s}}function ix(r){const t=new PA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function FA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new ix(r),t.set(l,[d])):c>=h.length?(d=new ix(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const BA=`void main() {
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
}`,HA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],GA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],ax=new rn,ql=new J,Bp=new J;function VA(r,t,i){let s=new th;const l=new De,c=new De,h=new bn,d=new nS,m=new iS,p={},_=i.maxTextureSize,x={[_s]:xi,[xi]:_s,[Wn]:Wn},g=new Da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:BA,fragmentShader:zA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new Ki;T.setAttribute("position",new pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new ze(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let S=this.type;this.render=function(z,H,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===hx&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zo);const L=r.getRenderTarget(),$=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Ga),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const j=S!==this.type;j&&H.traverse(function(it){it.material&&(Array.isArray(it.material)?it.material.forEach(K=>K.needsUpdate=!0):it.material.needsUpdate=!0)});for(let it=0,K=z.length;it<K;it++){const O=z[it],F=O.shadow;if(F===void 0){de("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const ot=F.getFrameExtents();l.multiply(ot),c.copy(F.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ot.x),l.x=c.x*ot.x,F.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ot.y),l.y=c.y*ot.y,F.mapSize.y=c.y));const lt=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=lt,F.map===null||j===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Po){if(O.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ca(l.x,l.y,{format:Ir,type:Va,minFilter:ni,magFilter:ni,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new Yo(l.x,l.y,ha),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=ka,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ei,F.map.depthTexture.magFilter=ei}else O.isPointLight?(F.map=new wm(l.x),F.map.depthTexture=new Zx(l.x,wa)):(F.map=new Ca(l.x,l.y),F.map.depthTexture=new Yo(l.x,l.y,wa)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=ka,this.type===zo?(F.map.depthTexture.compareFunction=lt?Qf:Kf,F.map.depthTexture.minFilter=ni,F.map.depthTexture.magFilter=ni):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ei,F.map.depthTexture.magFilter=ei);F.camera.updateProjectionMatrix()}const St=F.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<St;N++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,N),r.clear();else{N===0&&(r.setRenderTarget(F.map),r.clear());const q=F.getViewport(N);h.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),k.viewport(h)}if(O.isPointLight){const q=F.camera,ft=F.matrix,Mt=O.distance||q.far;Mt!==q.far&&(q.far=Mt,q.updateProjectionMatrix()),ql.setFromMatrixPosition(O.matrixWorld),q.position.copy(ql),Bp.copy(q.position),Bp.add(HA[N]),q.up.copy(GA[N]),q.lookAt(Bp),q.updateMatrixWorld(),ft.makeTranslation(-ql.x,-ql.y,-ql.z),ax.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ax,q.coordinateSystem,q.reversedDepth)}else F.updateMatrices(O);s=F.getFrustum(),w(H,b,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Po&&C(F,b),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(L,$,P)};function C(z,H){const b=t.update(D);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ca(l.x,l.y,{format:Ir,type:Va})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(H,null,b,g,D,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(H,null,b,y,D,null)}function U(z,H,b,L){let $=null;const P=b.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(P!==void 0)$=P;else if($=b.isPointLight===!0?m:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const k=$.uuid,j=H.uuid;let it=p[k];it===void 0&&(it={},p[k]=it);let K=it[j];K===void 0&&(K=$.clone(),it[j]=K,H.addEventListener("dispose",B)),$=K}if($.visible=H.visible,$.wireframe=H.wireframe,L===Po?$.side=H.shadowSide!==null?H.shadowSide:H.side:$.side=H.shadowSide!==null?H.shadowSide:x[H.side],$.alphaMap=H.alphaMap,$.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,$.map=H.map,$.clipShadows=H.clipShadows,$.clippingPlanes=H.clippingPlanes,$.clipIntersection=H.clipIntersection,$.displacementMap=H.displacementMap,$.displacementScale=H.displacementScale,$.displacementBias=H.displacementBias,$.wireframeLinewidth=H.wireframeLinewidth,$.linewidth=H.linewidth,b.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const k=r.properties.get($);k.light=b}return $}function w(z,H,b,L,$){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&$===Po)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,z.matrixWorld);const j=t.update(z),it=z.material;if(Array.isArray(it)){const K=j.groups;for(let O=0,F=K.length;O<F;O++){const ot=K[O],lt=it[ot.materialIndex];if(lt&&lt.visible){const St=U(z,lt,L,$);z.onBeforeShadow(r,z,H,b,j,St,ot),r.renderBufferDirect(b,null,j,St,z,ot),z.onAfterShadow(r,z,H,b,j,St,ot)}}}else if(it.visible){const K=U(z,it,L,$);z.onBeforeShadow(r,z,H,b,j,K,null),r.renderBufferDirect(b,null,j,K,z,null),z.onAfterShadow(r,z,H,b,j,K,null)}}const k=z.children;for(let j=0,it=k.length;j<it;j++)w(k[j],H,b,L,$)}function B(z){z.target.removeEventListener("dispose",B);for(const b in p){const L=p[b],$=z.target.uuid;$ in L&&(L[$].dispose(),delete L[$])}}}function kA(r,t){function i(){let Y=!1;const Et=new bn;let Rt=null;const Ht=new bn(0,0,0,0);return{setMask:function(At){Rt!==At&&!Y&&(r.colorMask(At,At,At,At),Rt=At)},setLocked:function(At){Y=At},setClear:function(At,ht,zt,se,Ve){Ve===!0&&(At*=se,ht*=se,zt*=se),Et.set(At,ht,zt,se),Ht.equals(Et)===!1&&(r.clearColor(At,ht,zt,se),Ht.copy(Et))},reset:function(){Y=!1,Rt=null,Ht.set(-1,0,0,0)}}}function s(){let Y=!1,Et=!1,Rt=null,Ht=null,At=null;return{setReversed:function(ht){if(Et!==ht){const zt=t.get("EXT_clip_control");ht?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Et=ht;const se=At;At=null,this.setClear(se)}},getReversed:function(){return Et},setTest:function(ht){ht?gt(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(ht){Rt!==ht&&!Y&&(r.depthMask(ht),Rt=ht)},setFunc:function(ht){if(Et&&(ht=SM[ht]),Ht!==ht){switch(ht){case Ku:r.depthFunc(r.NEVER);break;case Qu:r.depthFunc(r.ALWAYS);break;case Ju:r.depthFunc(r.LESS);break;case Nr:r.depthFunc(r.LEQUAL);break;case $u:r.depthFunc(r.EQUAL);break;case tf:r.depthFunc(r.GEQUAL);break;case ef:r.depthFunc(r.GREATER);break;case nf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=ht}},setLocked:function(ht){Y=ht},setClear:function(ht){At!==ht&&(At=ht,Et&&(ht=1-ht),r.clearDepth(ht))},reset:function(){Y=!1,Rt=null,Ht=null,At=null,Et=!1}}}function l(){let Y=!1,Et=null,Rt=null,Ht=null,At=null,ht=null,zt=null,se=null,Ve=null;return{setTest:function(Oe){Y||(Oe?gt(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(Oe){Et!==Oe&&!Y&&(r.stencilMask(Oe),Et=Oe)},setFunc:function(Oe,An,Bi){(Rt!==Oe||Ht!==An||At!==Bi)&&(r.stencilFunc(Oe,An,Bi),Rt=Oe,Ht=An,At=Bi)},setOp:function(Oe,An,Bi){(ht!==Oe||zt!==An||se!==Bi)&&(r.stencilOp(Oe,An,Bi),ht=Oe,zt=An,se=Bi)},setLocked:function(Oe){Y=Oe},setClear:function(Oe){Ve!==Oe&&(r.clearStencil(Oe),Ve=Oe)},reset:function(){Y=!1,Et=null,Rt=null,Ht=null,At=null,ht=null,zt=null,se=null,Ve=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},g=new WeakMap,y=[],T=null,D=!1,M=null,S=null,C=null,U=null,w=null,B=null,z=null,H=new re(0,0,0),b=0,L=!1,$=null,P=null,k=null,j=null,it=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,F=0;const ot=r.getParameter(r.VERSION);ot.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ot)[1]),O=F>=1):ot.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),O=F>=2);let lt=null,St={};const N=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),ft=new bn().fromArray(N),Mt=new bn().fromArray(q);function Nt(Y,Et,Rt,Ht){const At=new Uint8Array(4),ht=r.createTexture();r.bindTexture(Y,ht),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<Rt;zt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Et,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Et+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return ht}const et={};et[r.TEXTURE_2D]=Nt(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=Nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),gt(r.DEPTH_TEST),h.setFunc(Nr),pe(!1),hn(kp),gt(r.CULL_FACE),Me(Ga);function gt(Y){_[Y]!==!0&&(r.enable(Y),_[Y]=!0)}function xt(Y){_[Y]!==!1&&(r.disable(Y),_[Y]=!1)}function Xt(Y,Et){return x[Y]!==Et?(r.bindFramebuffer(Y,Et),x[Y]=Et,Y===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Et),Y===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Et),!0):!1}function Kt(Y,Et){let Rt=y,Ht=!1;if(Y){Rt=g.get(Et),Rt===void 0&&(Rt=[],g.set(Et,Rt));const At=Y.textures;if(Rt.length!==At.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,zt=At.length;ht<zt;ht++)Rt[ht]=r.COLOR_ATTACHMENT0+ht;Rt.length=At.length,Ht=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(Rt)}function ne(Y){return T!==Y?(r.useProgram(Y),T=Y,!0):!1}const on={[Qs]:r.FUNC_ADD,[px]:r.FUNC_SUBTRACT,[mx]:r.FUNC_REVERSE_SUBTRACT};on[gx]=r.MIN,on[_x]=r.MAX;const xe={[vx]:r.ZERO,[xx]:r.ONE,[Sx]:r.SRC_COLOR,[ju]:r.SRC_ALPHA,[Ax]:r.SRC_ALPHA_SATURATE,[Tx]:r.DST_COLOR,[Mx]:r.DST_ALPHA,[yx]:r.ONE_MINUS_SRC_COLOR,[Zu]:r.ONE_MINUS_SRC_ALPHA,[bx]:r.ONE_MINUS_DST_COLOR,[Ex]:r.ONE_MINUS_DST_ALPHA,[Rx]:r.CONSTANT_COLOR,[Cx]:r.ONE_MINUS_CONSTANT_COLOR,[wx]:r.CONSTANT_ALPHA,[Dx]:r.ONE_MINUS_CONSTANT_ALPHA};function Me(Y,Et,Rt,Ht,At,ht,zt,se,Ve,Oe){if(Y===Ga){D===!0&&(xt(r.BLEND),D=!1);return}if(D===!1&&(gt(r.BLEND),D=!0),Y!==dx){if(Y!==M||Oe!==L){if((S!==Qs||w!==Qs)&&(r.blendEquation(r.FUNC_ADD),S=Qs,w=Qs),Oe)switch(Y){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xp:r.blendFunc(r.ONE,r.ONE);break;case Wp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:He("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wp:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yp:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",Y);break}C=null,U=null,B=null,z=null,H.set(0,0,0),b=0,M=Y,L=Oe}return}At=At||Et,ht=ht||Rt,zt=zt||Ht,(Et!==S||At!==w)&&(r.blendEquationSeparate(on[Et],on[At]),S=Et,w=At),(Rt!==C||Ht!==U||ht!==B||zt!==z)&&(r.blendFuncSeparate(xe[Rt],xe[Ht],xe[ht],xe[zt]),C=Rt,U=Ht,B=ht,z=zt),(se.equals(H)===!1||Ve!==b)&&(r.blendColor(se.r,se.g,se.b,Ve),H.copy(se),b=Ve),M=Y,L=!1}function Be(Y,Et){Y.side===Wn?xt(r.CULL_FACE):gt(r.CULL_FACE);let Rt=Y.side===xi;Et&&(Rt=!Rt),pe(Rt),Y.blending===Lr&&Y.transparent===!1?Me(Ga):Me(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ht=Y.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),tn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function pe(Y){$!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),$=Y)}function hn(Y){Y!==ux?(gt(r.CULL_FACE),Y!==P&&(Y===kp?r.cullFace(r.BACK):Y===fx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),P=Y}function V(Y){Y!==k&&(O&&r.lineWidth(Y),k=Y)}function tn(Y,Et,Rt){Y?(gt(r.POLYGON_OFFSET_FILL),(j!==Et||it!==Rt)&&(j=Et,it=Rt,h.getReversed()&&(Et=-Et),r.polygonOffset(Et,Rt))):xt(r.POLYGON_OFFSET_FILL)}function Re(Y){Y?gt(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function Ne(Y){Y===void 0&&(Y=r.TEXTURE0+K-1),lt!==Y&&(r.activeTexture(Y),lt=Y)}function Wt(Y,Et,Rt){Rt===void 0&&(lt===null?Rt=r.TEXTURE0+K-1:Rt=lt);let Ht=St[Rt];Ht===void 0&&(Ht={type:void 0,texture:void 0},St[Rt]=Ht),(Ht.type!==Y||Ht.texture!==Et)&&(lt!==Rt&&(r.activeTexture(Rt),lt=Rt),r.bindTexture(Y,Et||et[Y]),Ht.type=Y,Ht.texture=Et)}function I(){const Y=St[lt];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function mt(){try{r.texSubImage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function yt(){try{r.texSubImage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function qt(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function wt(){try{r.texStorage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function ee(){try{r.texStorage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function ae(){try{r.texImage2D(...arguments)}catch(Y){He("WebGLState:",Y)}}function bt(){try{r.texImage3D(...arguments)}catch(Y){He("WebGLState:",Y)}}function Tt(Y){ft.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),ft.copy(Y))}function Lt(Y){Mt.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Mt.copy(Y))}function Ot(Y,Et){let Rt=p.get(Et);Rt===void 0&&(Rt=new WeakMap,p.set(Et,Rt));let Ht=Rt.get(Y);Ht===void 0&&(Ht=r.getUniformBlockIndex(Et,Y.name),Rt.set(Y,Ht))}function Pt(Y,Et){const Ht=p.get(Et).get(Y);m.get(Et)!==Ht&&(r.uniformBlockBinding(Et,Ht,Y.__bindingPointIndex),m.set(Et,Ht))}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},lt=null,St={},x={},g=new WeakMap,y=[],T=null,D=!1,M=null,S=null,C=null,U=null,w=null,B=null,z=null,H=new re(0,0,0),b=0,L=!1,$=null,P=null,k=null,j=null,it=null,ft.set(0,0,r.canvas.width,r.canvas.height),Mt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:gt,disable:xt,bindFramebuffer:Xt,drawBuffers:Kt,useProgram:ne,setBlending:Me,setMaterial:Be,setFlipSided:pe,setCullFace:hn,setLineWidth:V,setPolygonOffset:tn,setScissorTest:Re,activeTexture:Ne,bindTexture:Wt,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:ae,texImage3D:bt,updateUBOMapping:Ot,uniformBlockBinding:Pt,texStorage2D:wt,texStorage3D:ee,texSubImage2D:mt,texSubImage3D:yt,compressedTexSubImage2D:dt,compressedTexSubImage3D:qt,scissor:Tt,viewport:Lt,reset:me}}function XA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new De,_=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,E){return y?new OffscreenCanvas(I,E):Ff("canvas")}function D(I,E,Z){let mt=1;const yt=Wt(I);if((yt.width>Z||yt.height>Z)&&(mt=Z/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const dt=Math.floor(mt*yt.width),qt=Math.floor(mt*yt.height);x===void 0&&(x=T(dt,qt));const wt=E?T(dt,qt):x;return wt.width=dt,wt.height=qt,wt.getContext("2d").drawImage(I,0,0,dt,qt),de("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+dt+"x"+qt+")."),wt}else return"data"in I&&de("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),I;return I}function M(I){return I.generateMipmaps}function S(I){r.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(I,E,Z,mt,yt=!1){if(I!==null){if(r[I]!==void 0)return r[I];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let dt=E;if(E===r.RED&&(Z===r.FLOAT&&(dt=r.R32F),Z===r.HALF_FLOAT&&(dt=r.R16F),Z===r.UNSIGNED_BYTE&&(dt=r.R8)),E===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(dt=r.R8UI),Z===r.UNSIGNED_SHORT&&(dt=r.R16UI),Z===r.UNSIGNED_INT&&(dt=r.R32UI),Z===r.BYTE&&(dt=r.R8I),Z===r.SHORT&&(dt=r.R16I),Z===r.INT&&(dt=r.R32I)),E===r.RG&&(Z===r.FLOAT&&(dt=r.RG32F),Z===r.HALF_FLOAT&&(dt=r.RG16F),Z===r.UNSIGNED_BYTE&&(dt=r.RG8)),E===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(dt=r.RG8UI),Z===r.UNSIGNED_SHORT&&(dt=r.RG16UI),Z===r.UNSIGNED_INT&&(dt=r.RG32UI),Z===r.BYTE&&(dt=r.RG8I),Z===r.SHORT&&(dt=r.RG16I),Z===r.INT&&(dt=r.RG32I)),E===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),Z===r.UNSIGNED_INT&&(dt=r.RGB32UI),Z===r.BYTE&&(dt=r.RGB8I),Z===r.SHORT&&(dt=r.RGB16I),Z===r.INT&&(dt=r.RGB32I)),E===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),Z===r.UNSIGNED_INT&&(dt=r.RGBA32UI),Z===r.BYTE&&(dt=r.RGBA8I),Z===r.SHORT&&(dt=r.RGBA16I),Z===r.INT&&(dt=r.RGBA32I)),E===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),E===r.RGBA){const qt=yt?rc:Ge.getTransfer(mt);Z===r.FLOAT&&(dt=r.RGBA32F),Z===r.HALF_FLOAT&&(dt=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(dt=qt===Qe?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function w(I,E){let Z;return I?E===null||E===wa||E===ko?Z=r.DEPTH24_STENCIL8:E===ha?Z=r.DEPTH32F_STENCIL8:E===Vo&&(Z=r.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wa||E===ko?Z=r.DEPTH_COMPONENT24:E===ha?Z=r.DEPTH_COMPONENT32F:E===Vo&&(Z=r.DEPTH_COMPONENT16),Z}function B(I,E){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==ei&&I.minFilter!==ni?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function z(I){const E=I.target;E.removeEventListener("dispose",z),b(E),E.isVideoTexture&&_.delete(E)}function H(I){const E=I.target;E.removeEventListener("dispose",H),$(E)}function b(I){const E=s.get(I);if(E.__webglInit===void 0)return;const Z=I.source,mt=g.get(Z);if(mt){const yt=mt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&L(I),Object.keys(mt).length===0&&g.delete(Z)}s.remove(I)}function L(I){const E=s.get(I);r.deleteTexture(E.__webglTexture);const Z=I.source,mt=g.get(Z);delete mt[E.__cacheKey],h.memory.textures--}function $(I){const E=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(E.__webglFramebuffer[mt]))for(let yt=0;yt<E.__webglFramebuffer[mt].length;yt++)r.deleteFramebuffer(E.__webglFramebuffer[mt][yt]);else r.deleteFramebuffer(E.__webglFramebuffer[mt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let mt=0;mt<E.__webglFramebuffer.length;mt++)r.deleteFramebuffer(E.__webglFramebuffer[mt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let mt=0;mt<E.__webglColorRenderbuffer.length;mt++)E.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[mt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=I.textures;for(let mt=0,yt=Z.length;mt<yt;mt++){const dt=s.get(Z[mt]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(Z[mt])}s.remove(I)}let P=0;function k(){P=0}function j(){const I=P;return I>=l.maxTextures&&de("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),P+=1,I}function it(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function K(I,E){const Z=s.get(I);if(I.isVideoTexture&&Re(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const mt=I.image;if(mt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{et(Z,I,E);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+E)}function O(I,E){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){et(Z,I,E);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+E)}function F(I,E){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){et(Z,I,E);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+E)}function ot(I,E){const Z=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){gt(Z,I,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+E)}const lt={[Go]:r.REPEAT,[Ha]:r.CLAMP_TO_EDGE,[af]:r.MIRRORED_REPEAT},St={[ei]:r.NEAREST,[Nx]:r.NEAREST_MIPMAP_NEAREST,[Ql]:r.NEAREST_MIPMAP_LINEAR,[ni]:r.LINEAR,[Xu]:r.LINEAR_MIPMAP_NEAREST,[ms]:r.LINEAR_MIPMAP_LINEAR},N={[Px]:r.NEVER,[Gx]:r.ALWAYS,[Fx]:r.LESS,[Kf]:r.LEQUAL,[Bx]:r.EQUAL,[Qf]:r.GEQUAL,[zx]:r.GREATER,[Hx]:r.NOTEQUAL};function q(I,E){if(E.type===ha&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ni||E.magFilter===Xu||E.magFilter===Ql||E.magFilter===ms||E.minFilter===ni||E.minFilter===Xu||E.minFilter===Ql||E.minFilter===ms)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,lt[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,lt[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,lt[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,St[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ei||E.minFilter!==Ql&&E.minFilter!==ms||E.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ft(I,E){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",z));const mt=E.source;let yt=g.get(mt);yt===void 0&&(yt={},g.set(mt,yt));const dt=it(E);if(dt!==I.__cacheKey){yt[dt]===void 0&&(yt[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),yt[dt].usedTimes++;const qt=yt[I.__cacheKey];qt!==void 0&&(yt[I.__cacheKey].usedTimes--,qt.usedTimes===0&&L(E)),I.__cacheKey=dt,I.__webglTexture=yt[dt].texture}return Z}function Mt(I,E,Z){return Math.floor(Math.floor(I/Z)/E)}function Nt(I,E,Z,mt){const dt=I.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Z,mt,E.data);else{dt.sort((bt,Tt)=>bt.start-Tt.start);let qt=0;for(let bt=1;bt<dt.length;bt++){const Tt=dt[qt],Lt=dt[bt],Ot=Tt.start+Tt.count,Pt=Mt(Lt.start,E.width,4),me=Mt(Tt.start,E.width,4);Lt.start<=Ot+1&&Pt===me&&Mt(Lt.start+Lt.count-1,E.width,4)===Pt?Tt.count=Math.max(Tt.count,Lt.start+Lt.count-Tt.start):(++qt,dt[qt]=Lt)}dt.length=qt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),ee=r.getParameter(r.UNPACK_SKIP_PIXELS),ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Tt=dt.length;bt<Tt;bt++){const Lt=dt[bt],Ot=Math.floor(Lt.start/4),Pt=Math.ceil(Lt.count/4),me=Ot%E.width,Y=Math.floor(Ot/E.width),Et=Pt,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,me),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,me,Y,Et,Rt,Z,mt,E.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function et(I,E,Z){let mt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=r.TEXTURE_3D);const yt=ft(I,E),dt=E.source;i.bindTexture(mt,I.__webglTexture,r.TEXTURE0+Z);const qt=s.get(dt);if(dt.version!==qt.__version||yt===!0){i.activeTexture(r.TEXTURE0+Z);const wt=Ge.getPrimaries(Ge.workingColorSpace),ee=E.colorSpace===ds?null:Ge.getPrimaries(E.colorSpace),ae=E.colorSpace===ds||wt===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let bt=D(E.image,!1,l.maxTextureSize);bt=Ne(E,bt);const Tt=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type);let Ot=U(E.internalFormat,Tt,Lt,E.colorSpace,E.isVideoTexture);q(mt,E);let Pt;const me=E.mipmaps,Y=E.isVideoTexture!==!0,Et=qt.__version===void 0||yt===!0,Rt=dt.dataReady,Ht=B(E,bt);if(E.isDepthTexture)Ot=w(E.format===Js,E.type),Et&&(Y?i.texStorage2D(r.TEXTURE_2D,1,Ot,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,Ot,bt.width,bt.height,0,Tt,Lt,null));else if(E.isDataTexture)if(me.length>0){Y&&Et&&i.texStorage2D(r.TEXTURE_2D,Ht,Ot,me[0].width,me[0].height);for(let At=0,ht=me.length;At<ht;At++)Pt=me[At],Y?Rt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Pt.width,Pt.height,Tt,Lt,Pt.data):i.texImage2D(r.TEXTURE_2D,At,Ot,Pt.width,Pt.height,0,Tt,Lt,Pt.data);E.generateMipmaps=!1}else Y?(Et&&i.texStorage2D(r.TEXTURE_2D,Ht,Ot,bt.width,bt.height),Rt&&Nt(E,bt,Tt,Lt)):i.texImage2D(r.TEXTURE_2D,0,Ot,bt.width,bt.height,0,Tt,Lt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Y&&Et&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Ot,me[0].width,me[0].height,bt.depth);for(let At=0,ht=me.length;At<ht;At++)if(Pt=me[At],E.format!==da)if(Tt!==null)if(Y){if(Rt)if(E.layerUpdates.size>0){const zt=Pv(Pt.width,Pt.height,E.format,E.type);for(const se of E.layerUpdates){const Ve=Pt.data.subarray(se*zt/Pt.data.BYTES_PER_ELEMENT,(se+1)*zt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,se,Pt.width,Pt.height,1,Tt,Ve)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Pt.width,Pt.height,bt.depth,Tt,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Ot,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Rt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Pt.width,Pt.height,bt.depth,Tt,Lt,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,At,Ot,Pt.width,Pt.height,bt.depth,0,Tt,Lt,Pt.data)}else{Y&&Et&&i.texStorage2D(r.TEXTURE_2D,Ht,Ot,me[0].width,me[0].height);for(let At=0,ht=me.length;At<ht;At++)Pt=me[At],E.format!==da?Tt!==null?Y?Rt&&i.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Pt.width,Pt.height,Tt,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,At,Ot,Pt.width,Pt.height,0,Pt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Rt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Pt.width,Pt.height,Tt,Lt,Pt.data):i.texImage2D(r.TEXTURE_2D,At,Ot,Pt.width,Pt.height,0,Tt,Lt,Pt.data)}else if(E.isDataArrayTexture)if(Y){if(Et&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Ot,bt.width,bt.height,bt.depth),Rt)if(E.layerUpdates.size>0){const At=Pv(bt.width,bt.height,E.format,E.type);for(const ht of E.layerUpdates){const zt=bt.data.subarray(ht*At/bt.data.BYTES_PER_ELEMENT,(ht+1)*At/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,bt.width,bt.height,1,Tt,Lt,zt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Lt,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,bt.width,bt.height,bt.depth,0,Tt,Lt,bt.data);else if(E.isData3DTexture)Y?(Et&&i.texStorage3D(r.TEXTURE_3D,Ht,Ot,bt.width,bt.height,bt.depth),Rt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Lt,bt.data)):i.texImage3D(r.TEXTURE_3D,0,Ot,bt.width,bt.height,bt.depth,0,Tt,Lt,bt.data);else if(E.isFramebufferTexture){if(Et)if(Y)i.texStorage2D(r.TEXTURE_2D,Ht,Ot,bt.width,bt.height);else{let At=bt.width,ht=bt.height;for(let zt=0;zt<Ht;zt++)i.texImage2D(r.TEXTURE_2D,zt,Ot,At,ht,0,Tt,Lt,null),At>>=1,ht>>=1}}else if(me.length>0){if(Y&&Et){const At=Wt(me[0]);i.texStorage2D(r.TEXTURE_2D,Ht,Ot,At.width,At.height)}for(let At=0,ht=me.length;At<ht;At++)Pt=me[At],Y?Rt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Tt,Lt,Pt):i.texImage2D(r.TEXTURE_2D,At,Ot,Tt,Lt,Pt);E.generateMipmaps=!1}else if(Y){if(Et){const At=Wt(bt);i.texStorage2D(r.TEXTURE_2D,Ht,Ot,At.width,At.height)}Rt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,Lt,bt)}else i.texImage2D(r.TEXTURE_2D,0,Ot,Tt,Lt,bt);M(E)&&S(mt),qt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function gt(I,E,Z){if(E.image.length!==6)return;const mt=ft(I,E),yt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Z);const dt=s.get(yt);if(yt.version!==dt.__version||mt===!0){i.activeTexture(r.TEXTURE0+Z);const qt=Ge.getPrimaries(Ge.workingColorSpace),wt=E.colorSpace===ds?null:Ge.getPrimaries(E.colorSpace),ee=E.colorSpace===ds||qt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let ht=0;ht<6;ht++)!ae&&!bt?Tt[ht]=D(E.image[ht],!0,l.maxCubemapSize):Tt[ht]=bt?E.image[ht].image:E.image[ht],Tt[ht]=Ne(E,Tt[ht]);const Lt=Tt[0],Ot=c.convert(E.format,E.colorSpace),Pt=c.convert(E.type),me=U(E.internalFormat,Ot,Pt,E.colorSpace),Y=E.isVideoTexture!==!0,Et=dt.__version===void 0||mt===!0,Rt=yt.dataReady;let Ht=B(E,Lt);q(r.TEXTURE_CUBE_MAP,E);let At;if(ae){Y&&Et&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,me,Lt.width,Lt.height);for(let ht=0;ht<6;ht++){At=Tt[ht].mipmaps;for(let zt=0;zt<At.length;zt++){const se=At[zt];E.format!==da?Ot!==null?Y?Rt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,0,0,se.width,se.height,Ot,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,me,se.width,se.height,0,se.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,0,0,se.width,se.height,Ot,Pt,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,me,se.width,se.height,0,Ot,Pt,se.data)}}}else{if(At=E.mipmaps,Y&&Et){At.length>0&&Ht++;const ht=Wt(Tt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,me,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(bt){Y?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Tt[ht].width,Tt[ht].height,Ot,Pt,Tt[ht].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,me,Tt[ht].width,Tt[ht].height,0,Ot,Pt,Tt[ht].data);for(let zt=0;zt<At.length;zt++){const Ve=At[zt].image[ht].image;Y?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,0,0,Ve.width,Ve.height,Ot,Pt,Ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,me,Ve.width,Ve.height,0,Ot,Pt,Ve.data)}}else{Y?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot,Pt,Tt[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,me,Ot,Pt,Tt[ht]);for(let zt=0;zt<At.length;zt++){const se=At[zt];Y?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,0,0,Ot,Pt,se.image[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,me,Ot,Pt,se.image[ht])}}}M(E)&&S(r.TEXTURE_CUBE_MAP),dt.__version=yt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function xt(I,E,Z,mt,yt,dt){const qt=c.convert(Z.format,Z.colorSpace),wt=c.convert(Z.type),ee=U(Z.internalFormat,qt,wt,Z.colorSpace),ae=s.get(E),bt=s.get(Z);if(bt.__renderTarget=E,!ae.__hasExternalTextures){const Tt=Math.max(1,E.width>>dt),Lt=Math.max(1,E.height>>dt);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,dt,ee,Tt,Lt,E.depth,0,qt,wt,null):i.texImage2D(yt,dt,ee,Tt,Lt,0,qt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),tn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,yt,bt.__webglTexture,0,V(E)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,yt,bt.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(I,E,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const mt=E.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,dt=w(E.stencilBuffer,yt),qt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;tn(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),dt,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qt,r.RENDERBUFFER,I)}else{const mt=E.textures;for(let yt=0;yt<mt.length;yt++){const dt=mt[yt],qt=c.convert(dt.format,dt.colorSpace),wt=c.convert(dt.type),ee=U(dt.internalFormat,qt,wt,dt.colorSpace);tn(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),ee,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ee,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Kt(I,E,Z){const mt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(E.depthTexture);if(yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),q(r.TEXTURE_CUBE_MAP,E.depthTexture);const ae=c.convert(E.depthTexture.format),bt=c.convert(E.depthTexture.type);let Tt;E.depthTexture.format===ka?Tt=r.DEPTH_COMPONENT24:E.depthTexture.format===Js&&(Tt=r.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,Tt,E.width,E.height,0,ae,bt,null)}}else K(E.depthTexture,0);const dt=yt.__webglTexture,qt=V(E),wt=mt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,ee=E.depthTexture.format===Js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ka)tn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,wt,dt,0,qt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,wt,dt,0);else if(E.depthTexture.format===Js)tn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,wt,dt,0,qt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,wt,dt,0);else throw new Error("Unknown depthTexture format")}function ne(I){const E=s.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const mt=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),mt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=mt}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let mt=0;mt<6;mt++)Kt(E.__webglFramebuffer[mt],I,mt);else{const mt=I.texture.mipmaps;mt&&mt.length>0?Kt(E.__webglFramebuffer[0],I,0):Kt(E.__webglFramebuffer,I,0)}else if(Z){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]===void 0)E.__webglDepthbuffer[mt]=r.createRenderbuffer(),Xt(E.__webglDepthbuffer[mt],I,!1);else{const yt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,dt)}}else{const mt=I.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Xt(E.__webglDepthbuffer,I,!1);else{const yt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function on(I,E,Z){const mt=s.get(I);E!==void 0&&xt(mt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&ne(I)}function xe(I){const E=I.texture,Z=s.get(I),mt=s.get(E);I.addEventListener("dispose",H);const yt=I.textures,dt=I.isWebGLCubeRenderTarget===!0,qt=yt.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=E.version,h.memory.textures++),dt){Z.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[wt]=[];for(let ee=0;ee<E.mipmaps.length;ee++)Z.__webglFramebuffer[wt][ee]=r.createFramebuffer()}else Z.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)Z.__webglFramebuffer[wt]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(qt)for(let wt=0,ee=yt.length;wt<ee;wt++){const ae=s.get(yt[wt]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),h.memory.textures++)}if(I.samples>0&&tn(I)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){const ee=yt[wt];Z.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[wt]);const ae=c.convert(ee.format,ee.colorSpace),bt=c.convert(ee.type),Tt=U(ee.internalFormat,ae,bt,ee.colorSpace,I.isXRRenderTarget===!0),Lt=V(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,Tt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,Z.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(Z.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),q(r.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)xt(Z.__webglFramebuffer[wt][ee],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ee);else xt(Z.__webglFramebuffer[wt],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let wt=0,ee=yt.length;wt<ee;wt++){const ae=yt[wt],bt=s.get(ae);let Tt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,bt.__webglTexture),q(Tt,ae),xt(Z.__webglFramebuffer,I,ae,r.COLOR_ATTACHMENT0+wt,Tt,0),M(ae)&&S(Tt)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(wt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,mt.__webglTexture),q(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)xt(Z.__webglFramebuffer[ee],I,E,r.COLOR_ATTACHMENT0,wt,ee);else xt(Z.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,wt,0);M(E)&&S(wt),i.unbindTexture()}I.depthBuffer&&ne(I)}function Me(I){const E=I.textures;for(let Z=0,mt=E.length;Z<mt;Z++){const yt=E[Z];if(M(yt)){const dt=C(I),qt=s.get(yt).__webglTexture;i.bindTexture(dt,qt),S(dt),i.unbindTexture()}}}const Be=[],pe=[];function hn(I){if(I.samples>0){if(tn(I)===!1){const E=I.textures,Z=I.width,mt=I.height;let yt=r.COLOR_BUFFER_BIT;const dt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qt=s.get(I),wt=E.length>1;if(wt)for(let ae=0;ae<E.length;ae++)i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const ee=I.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qt.__webglColorRenderbuffer[ae]);const bt=s.get(E[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,Z,mt,0,0,Z,mt,yt,r.NEAREST),m===!0&&(Be.length=0,pe.length=0,Be.push(r.COLOR_ATTACHMENT0+ae),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Be.push(dt),pe.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Be))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let ae=0;ae<E.length;ae++){i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,qt.__webglColorRenderbuffer[ae]);const bt=s.get(E[ae]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(I){return Math.min(l.maxSamples,I.samples)}function tn(I){const E=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(I){const E=h.render.frame;_.get(I)!==E&&(_.set(I,E),I.update())}function Ne(I,E){const Z=I.colorSpace,mt=I.format,yt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Pr&&Z!==ds&&(Ge.getTransfer(Z)===Qe?(mt!==da||yt!==Fi)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",Z)),E}function Wt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=ot,this.rebindTextures=on,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function mS(r,t){function i(s,l=ds){let c;const h=Ge.getTransfer(l);if(s===Fi)return r.UNSIGNED_BYTE;if(s===kf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Xf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===dm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===pm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===fm)return r.BYTE;if(s===hm)return r.SHORT;if(s===Vo)return r.UNSIGNED_SHORT;if(s===Vf)return r.INT;if(s===wa)return r.UNSIGNED_INT;if(s===ha)return r.FLOAT;if(s===Va)return r.HALF_FLOAT;if(s===mm)return r.ALPHA;if(s===gm)return r.RGB;if(s===da)return r.RGBA;if(s===ka)return r.DEPTH_COMPONENT;if(s===Js)return r.DEPTH_STENCIL;if(s===Wf)return r.RED;if(s===Yf)return r.RED_INTEGER;if(s===Ir)return r.RG;if(s===qf)return r.RG_INTEGER;if(s===jf)return r.RGBA_INTEGER;if(s===$l||s===tc||s===ec||s===nc)if(h===Qe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$l)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$l)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ec)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sf||s===rf||s===of||s===lf)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===sf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===of)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cf||s===uf||s===ff||s===hf||s===df||s===pf||s===mf)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===cf||s===uf)return h===Qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ff)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===hf)return c.COMPRESSED_R11_EAC;if(s===df)return c.COMPRESSED_SIGNED_R11_EAC;if(s===pf)return c.COMPRESSED_RG11_EAC;if(s===mf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===gf||s===_f||s===vf||s===xf||s===Sf||s===yf||s===Mf||s===Ef||s===Tf||s===bf||s===Af||s===Rf||s===Cf||s===wf)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===gf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_f)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ef)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Af)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wf)return h===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Df||s===Uf||s===Lf)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Df)return h===Qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nf||s===Of||s===If||s===Pf)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Nf)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Of)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===If)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ko?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const WA=`
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

}`;class qA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new bm(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Da({vertexShader:WA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ze(new za(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends Fr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,g=null,y=null,T=null;const D=typeof XRWebGLBinding<"u",M=new qA,S={},C=i.getContextAttributes();let U=null,w=null;const B=[],z=[],H=new De;let b=null;const L=new Ci;L.viewport=new bn;const $=new Ci;$.viewport=new bn;const P=[L,$],k=new oS;let j=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let gt=B[et];return gt===void 0&&(gt=new Wu,B[et]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(et){let gt=B[et];return gt===void 0&&(gt=new Wu,B[et]=gt),gt.getGripSpace()},this.getHand=function(et){let gt=B[et];return gt===void 0&&(gt=new Wu,B[et]=gt),gt.getHandSpace()};function K(et){const gt=z.indexOf(et.inputSource);if(gt===-1)return;const xt=B[gt];xt!==void 0&&(xt.update(et.inputSource,et.frame,p||h),xt.dispatchEvent({type:et.type,data:et.inputSource}))}function O(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",F);for(let et=0;et<B.length;et++){const gt=z[et];gt!==null&&(z[et]=null,B[et].disconnect(gt))}j=null,it=null,M.reset();for(const et in S)delete S[et];t.setRenderTarget(U),y=null,g=null,x=null,l=null,w=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",O),l.addEventListener("inputsourceschange",F),C.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(H),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Xt=null,Kt=null;C.depth&&(Kt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=C.stencil?Js:ka,Xt=C.stencil?ko:wa);const ne={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(ne),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),w=new Ca(g.textureWidth,g.textureHeight,{format:da,type:Fi,depthTexture:new Yo(g.textureWidth,g.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),w=new Ca(y.framebufferWidth,y.framebufferHeight,{format:da,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(et){for(let gt=0;gt<et.removed.length;gt++){const xt=et.removed[gt],Xt=z.indexOf(xt);Xt>=0&&(z[Xt]=null,B[Xt].disconnect(xt))}for(let gt=0;gt<et.added.length;gt++){const xt=et.added[gt];let Xt=z.indexOf(xt);if(Xt===-1){for(let ne=0;ne<B.length;ne++)if(ne>=z.length){z.push(xt),Xt=ne;break}else if(z[ne]===null){z[ne]=xt,Xt=ne;break}if(Xt===-1)break}const Kt=B[Xt];Kt&&Kt.connect(xt)}}const ot=new J,lt=new J;function St(et,gt,xt){ot.setFromMatrixPosition(gt.matrixWorld),lt.setFromMatrixPosition(xt.matrixWorld);const Xt=ot.distanceTo(lt),Kt=gt.projectionMatrix.elements,ne=xt.projectionMatrix.elements,on=Kt[14]/(Kt[10]-1),xe=Kt[14]/(Kt[10]+1),Me=(Kt[9]+1)/Kt[5],Be=(Kt[9]-1)/Kt[5],pe=(Kt[8]-1)/Kt[0],hn=(ne[8]+1)/ne[0],V=on*pe,tn=on*hn,Re=Xt/(-pe+hn),Ne=Re*-pe;if(gt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ne),et.translateZ(Re),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Kt[10]===-1)et.projectionMatrix.copy(gt.projectionMatrix),et.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Wt=on+Re,I=xe+Re,E=V-Ne,Z=tn+(Xt-Ne),mt=Me*xe/I*Wt,yt=Be*xe/I*Wt;et.projectionMatrix.makePerspective(E,Z,mt,yt,Wt,I),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function N(et,gt){gt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(gt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let gt=et.near,xt=et.far;M.texture!==null&&(M.depthNear>0&&(gt=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),k.near=$.near=L.near=gt,k.far=$.far=L.far=xt,(j!==k.near||it!==k.far)&&(l.updateRenderState({depthNear:k.near,depthFar:k.far}),j=k.near,it=k.far),k.layers.mask=et.layers.mask|6,L.layers.mask=k.layers.mask&-5,$.layers.mask=k.layers.mask&-3;const Xt=et.parent,Kt=k.cameras;N(k,Xt);for(let ne=0;ne<Kt.length;ne++)N(Kt[ne],Xt);Kt.length===2?St(k,L,$):k.projectionMatrix.copy(L.projectionMatrix),q(et,k,Xt)};function q(et,gt,xt){xt===null?et.matrix.copy(gt.matrixWorld):(et.matrix.copy(xt.matrixWorld),et.matrix.invert(),et.matrix.multiply(gt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(gt.projectionMatrix),et.projectionMatrixInverse.copy(gt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Wo*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(et){m=et,g!==null&&(g.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(k)},this.getCameraTexture=function(et){return S[et]};let ft=null;function Mt(et,gt){if(_=gt.getViewerPose(p||h),T=gt,_!==null){const xt=_.views;y!==null&&(t.setRenderTargetFramebuffer(w,y.framebuffer),t.setRenderTarget(w));let Xt=!1;xt.length!==k.cameras.length&&(k.cameras.length=0,Xt=!0);for(let xe=0;xe<xt.length;xe++){const Me=xt[xe];let Be=null;if(y!==null)Be=y.getViewport(Me);else{const hn=x.getViewSubImage(g,Me);Be=hn.viewport,xe===0&&(t.setRenderTargetTextures(w,hn.colorTexture,hn.depthStencilTexture),t.setRenderTarget(w))}let pe=P[xe];pe===void 0&&(pe=new Ci,pe.layers.enable(xe),pe.viewport=new bn,P[xe]=pe),pe.matrix.fromArray(Me.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Me.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Be.x,Be.y,Be.width,Be.height),xe===0&&(k.matrix.copy(pe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Xt===!0&&k.cameras.push(pe)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=s.getBinding();const xe=x.getDepthInformation(xt[0]);xe&&xe.isValid&&xe.texture&&M.init(xe,l.renderState)}if(Kt&&Kt.includes("camera-access")&&D){t.state.unbindTexture(),x=s.getBinding();for(let xe=0;xe<xt.length;xe++){const Me=xt[xe].camera;if(Me){let Be=S[Me];Be||(Be=new bm,S[Me]=Be);const pe=x.getCameraImage(Me);Be.sourceTexture=pe}}}}for(let xt=0;xt<B.length;xt++){const Xt=z[xt],Kt=B[xt];Xt!==null&&Kt!==void 0&&Kt.update(Xt,gt,p||h)}ft&&ft(et,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),T=null}const Nt=new uS;Nt.setAnimationLoop(Mt),this.setAnimationLoop=function(et){ft=et},this.dispose=function(){}}}const Rr=new ma,ZA=new rn;function KA(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Jx(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,U,w){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,w)):S.isMeshMatcapMaterial?(c(M,S),T(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),D(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,C,U):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===xi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===xi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),U=C.envMap,w=C.envMapRotation;U&&(M.envMap.value=U,Rr.copy(w),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),M.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(Rr)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,U){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=U*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===xi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function D(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function QA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const w=U.program;s.uniformBlockBinding(C,w)}function p(C,U){let w=l[C.id];w===void 0&&(T(C),w=_(C),l[C.id]=w,C.addEventListener("dispose",M));const B=U.program;s.updateUBOMapping(C,B);const z=t.render.frame;c[C.id]!==z&&(g(C),c[C.id]=z)}function _(C){const U=x();C.__bindingPointIndex=U;const w=r.createBuffer(),B=C.__size,z=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,B,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,w),w}function x(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const U=l[C.id],w=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let z=0,H=w.length;z<H;z++){const b=Array.isArray(w[z])?w[z]:[w[z]];for(let L=0,$=b.length;L<$;L++){const P=b[L];if(y(P,z,L,B)===!0){const k=P.__offset,j=Array.isArray(P.value)?P.value:[P.value];let it=0;for(let K=0;K<j.length;K++){const O=j[K],F=D(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,k+it,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,it),it+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,U,w,B){const z=C.value,H=U+"_"+w;if(B[H]===void 0)return typeof z=="number"||typeof z=="boolean"?B[H]=z:B[H]=z.clone(),!0;{const b=B[H];if(typeof z=="number"||typeof z=="boolean"){if(b!==z)return B[H]=z,!0}else if(b.equals(z)===!1)return b.copy(z),!0}return!1}function T(C){const U=C.uniforms;let w=0;const B=16;for(let H=0,b=U.length;H<b;H++){const L=Array.isArray(U[H])?U[H]:[U[H]];for(let $=0,P=L.length;$<P;$++){const k=L[$],j=Array.isArray(k.value)?k.value:[k.value];for(let it=0,K=j.length;it<K;it++){const O=j[it],F=D(O),ot=w%B,lt=ot%F.boundary,St=ot+lt;w+=lt,St!==0&&B-St<F.storage&&(w+=B-St),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=F.storage}}}const z=w%B;return z>0&&(w+=B-z),C.__size=w,C.__cache={},this}function D(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",C),U}function M(C){const U=C.target;U.removeEventListener("dispose",M);const w=h.indexOf(U.__bindingPointIndex);h.splice(w,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const JA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ba=null;function $A(){return Ba===null&&(Ba=new Em(JA,16,16,Ir,Va),Ba.name="DFG_LUT",Ba.minFilter=ni,Ba.magFilter=ni,Ba.wrapS=Ha,Ba.wrapT=Ha,Ba.generateMipmaps=!1,Ba.needsUpdate=!0),Ba}class gS{constructor(t={}){const{canvas:i=Vx(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Fi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const D=y,M=new Set([jf,qf,Yf]),S=new Set([Fi,wa,Vo,ko,kf,Xf]),C=new Uint32Array(4),U=new Int32Array(4);let w=null,B=null;const z=[],H=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let $=!1;this._outputColorSpace=Zn;let P=0,k=0,j=null,it=-1,K=null;const O=new bn,F=new bn;let ot=null;const lt=new re(0);let St=0,N=i.width,q=i.height,ft=1,Mt=null,Nt=null;const et=new bn(0,0,N,q),gt=new bn(0,0,N,q);let xt=!1;const Xt=new th;let Kt=!1,ne=!1;const on=new rn,xe=new J,Me=new bn,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function hn(){return j===null?ft:1}let V=s;function tn(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zf}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",se,!1),i.addEventListener("webglcontextcreationerror",Ve,!1),V===null){const W="webgl2";if(V=tn(W,R),V===null)throw tn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw He("WebGLRenderer: "+R.message),R}let Re,Ne,Wt,I,E,Z,mt,yt,dt,qt,wt,ee,ae,bt,Tt,Lt,Ot,Pt,me,Y,Et,Rt,Ht;function At(){Re=new eb(V),Re.init(),Et=new mS(V,Re),Ne=new q1(V,Re,t,Et),Wt=new kA(V,Re),Ne.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),I=new ab(V),E=new wA,Z=new XA(V,Re,Wt,E,Ne,Et,I),mt=new tb(L),yt=new cE(V),Rt=new W1(V,yt),dt=new nb(V,yt,I,Rt),qt=new rb(V,dt,yt,Rt,I),Pt=new sb(V,Ne,Z),Tt=new j1(E),wt=new CA(L,mt,Re,Ne,Rt,Tt),ee=new KA(L,E),ae=new UA,bt=new FA(Re),Ot=new X1(L,mt,Wt,qt,T,m),Lt=new VA(L,qt,Ne),Ht=new QA(V,I,Ne,Wt),me=new Y1(V,Re,I),Y=new ib(V,Re,I),I.programs=wt.programs,L.capabilities=Ne,L.extensions=Re,L.properties=E,L.renderLists=ae,L.shadowMap=Lt,L.state=Wt,L.info=I}At(),D!==Fi&&(b=new lb(D,i.width,i.height,l,c));const ht=new jA(L,V);this.xr=ht,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(R){R!==void 0&&(ft=R,this.setSize(N,q,!1))},this.getSize=function(R){return R.set(N,q)},this.setSize=function(R,W,ct=!0){if(ht.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,q=W,i.width=Math.floor(R*ft),i.height=Math.floor(W*ft),ct===!0&&(i.style.width=R+"px",i.style.height=W+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(N*ft,q*ft).floor()},this.setDrawingBufferSize=function(R,W,ct){N=R,q=W,ft=ct,i.width=Math.floor(R*ct),i.height=Math.floor(W*ct),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(D===Fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,W,ct,st){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,W,ct,st),Wt.viewport(O.copy(et).multiplyScalar(ft).round())},this.getScissor=function(R){return R.copy(gt)},this.setScissor=function(R,W,ct,st){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,W,ct,st),Wt.scissor(F.copy(gt).multiplyScalar(ft).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Wt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){Nt=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ct=!0){let st=0;if(R){let tt=!1;if(j!==null){const Dt=j.texture.format;tt=M.has(Dt)}if(tt){const Dt=j.texture.type,Gt=S.has(Dt),It=Ot.getClearColor(),Vt=Ot.getClearAlpha(),Jt=It.r,le=It.g,ue=It.b;Gt?(C[0]=Jt,C[1]=le,C[2]=ue,C[3]=Vt,V.clearBufferuiv(V.COLOR,0,C)):(U[0]=Jt,U[1]=le,U[2]=ue,U[3]=Vt,V.clearBufferiv(V.COLOR,0,U))}else st|=V.COLOR_BUFFER_BIT}W&&(st|=V.DEPTH_BUFFER_BIT),ct&&(st|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&V.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",se,!1),i.removeEventListener("webglcontextcreationerror",Ve,!1),Ot.dispose(),ae.dispose(),bt.dispose(),E.dispose(),mt.dispose(),qt.dispose(),Rt.dispose(),Ht.dispose(),wt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",xs),ht.removeEventListener("sessionend",Ss),Qi.stop()};function zt(R){R.preventDefault(),Kp("WebGLRenderer: Context Lost."),$=!0}function se(){Kp("WebGLRenderer: Context Restored."),$=!1;const R=I.autoReset,W=Lt.enabled,ct=Lt.autoUpdate,st=Lt.needsUpdate,tt=Lt.type;At(),I.autoReset=R,Lt.enabled=W,Lt.autoUpdate=ct,Lt.needsUpdate=st,Lt.type=tt}function Ve(R){He("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Oe(R){const W=R.target;W.removeEventListener("dispose",Oe),An(W)}function An(R){Bi(R),E.remove(R)}function Bi(R){const W=E.get(R).programs;W!==void 0&&(W.forEach(function(ct){wt.releaseProgram(ct)}),R.isShaderMaterial&&wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ct,st,tt,Dt){W===null&&(W=Be);const Gt=tt.isMesh&&tt.matrixWorld.determinant()<0,It=hi(R,W,ct,st,tt);Wt.setMaterial(st,Gt);let Vt=ct.index,Jt=1;if(st.wireframe===!0){if(Vt=dt.getWireframeAttribute(ct),Vt===void 0)return;Jt=2}const le=ct.drawRange,ue=ct.attributes.position;let kt=le.start*Jt,fe=(le.start+le.count)*Jt;Dt!==null&&(kt=Math.max(kt,Dt.start*Jt),fe=Math.min(fe,(Dt.start+Dt.count)*Jt)),Vt!==null?(kt=Math.max(kt,0),fe=Math.min(fe,Vt.count)):ue!=null&&(kt=Math.max(kt,0),fe=Math.min(fe,ue.count));const cn=fe-kt;if(cn<0||cn===1/0)return;Rt.setup(tt,st,It,ct,Vt);let en,Ce=me;if(Vt!==null&&(en=yt.get(Vt),Ce=Y,Ce.setIndex(en)),tt.isMesh)st.wireframe===!0?(Wt.setLineWidth(st.wireframeLinewidth*hn()),Ce.setMode(V.LINES)):Ce.setMode(V.TRIANGLES);else if(tt.isLine){let yn=st.linewidth;yn===void 0&&(yn=1),Wt.setLineWidth(yn*hn()),tt.isLineSegments?Ce.setMode(V.LINES):tt.isLineLoop?Ce.setMode(V.LINE_LOOP):Ce.setMode(V.LINE_STRIP)}else tt.isPoints?Ce.setMode(V.POINTS):tt.isSprite&&Ce.setMode(V.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)oc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))Ce.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const yn=tt._multiDrawStarts,Yt=tt._multiDrawCounts,Yn=tt._multiDrawCount,he=Vt?yt.get(Vt).bytesPerElement:1,wn=E.get(st).currentProgram.getUniforms();for(let Bn=0;Bn<Yn;Bn++)wn.setValue(V,"_gl_DrawID",Bn),Ce.render(yn[Bn]/he,Yt[Bn])}else if(tt.isInstancedMesh)Ce.renderInstances(kt,cn,tt.count);else if(ct.isInstancedBufferGeometry){const yn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Yt=Math.min(ct.instanceCount,yn);Ce.renderInstances(kt,cn,Yt)}else Ce.render(kt,cn)};function vs(R,W,ct){R.transparent===!0&&R.side===Wn&&R.forceSinglePass===!1?(R.side=xi,R.needsUpdate=!0,_a(R,W,ct),R.side=_s,R.needsUpdate=!0,_a(R,W,ct),R.side=Wn):_a(R,W,ct)}this.compile=function(R,W,ct=null){ct===null&&(ct=R),B=bt.get(ct),B.init(W),H.push(B),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(B.pushLight(tt),tt.castShadow&&B.pushShadow(tt))}),R!==ct&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(B.pushLight(tt),tt.castShadow&&B.pushShadow(tt))}),B.setupLights();const st=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Dt=tt.material;if(Dt)if(Array.isArray(Dt))for(let Gt=0;Gt<Dt.length;Gt++){const It=Dt[Gt];vs(It,ct,tt),st.add(It)}else vs(Dt,ct,tt),st.add(Dt)}),B=H.pop(),st},this.compileAsync=function(R,W,ct=null){const st=this.compile(R,W,ct);return new Promise(tt=>{function Dt(){if(st.forEach(function(Gt){E.get(Gt).currentProgram.isReady()&&st.delete(Gt)}),st.size===0){tt(R);return}setTimeout(Dt,10)}Re.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let ga=null;function ir(R){ga&&ga(R)}function xs(){Qi.stop()}function Ss(){Qi.start()}const Qi=new uS;Qi.setAnimationLoop(ir),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(R){ga=R,ht.setAnimationLoop(R),R===null?Qi.stop():Qi.start()},ht.addEventListener("sessionstart",xs),ht.addEventListener("sessionend",Ss),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;const ct=ht.enabled===!0&&ht.isPresenting===!0,st=b!==null&&(j===null||ct)&&b.begin(L,j);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(W),W=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,W,j),B=bt.get(R,H.length),B.init(W),H.push(B),on.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Xt.setFromProjectionMatrix(on,Aa,W.reversedDepth),ne=this.localClippingEnabled,Kt=Tt.init(this.clippingPlanes,ne),w=ae.get(R,z.length),w.init(),z.push(w),ht.enabled===!0&&ht.isPresenting===!0){const Gt=L.xr.getDepthSensingMesh();Gt!==null&&ys(Gt,W,-1/0,L.sortObjects)}ys(R,W,0,L.sortObjects),w.finish(),L.sortObjects===!0&&w.sort(Mt,Nt),pe=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,pe&&Ot.addToRenderList(w,R),this.info.render.frame++,Kt===!0&&Tt.beginShadows();const tt=B.state.shadowsArray;if(Lt.render(tt,R,W),Kt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&b.hasRenderPass())===!1){const Gt=w.opaque,It=w.transmissive;if(B.setupLights(),W.isArrayCamera){const Vt=W.cameras;if(It.length>0)for(let Jt=0,le=Vt.length;Jt<le;Jt++){const ue=Vt[Jt];Rn(Gt,It,R,ue)}pe&&Ot.render(R);for(let Jt=0,le=Vt.length;Jt<le;Jt++){const ue=Vt[Jt];zi(w,R,ue,ue.viewport)}}else It.length>0&&Rn(Gt,It,R,W),pe&&Ot.render(R),zi(w,R,W)}j!==null&&k===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),st&&b.end(L),R.isScene===!0&&R.onAfterRender(L,R,W),Rt.resetDefaultState(),it=-1,K=null,H.pop(),H.length>0?(B=H[H.length-1],Kt===!0&&Tt.setGlobalState(L.clippingPlanes,B.state.camera)):B=null,z.pop(),z.length>0?w=z[z.length-1]:w=null};function ys(R,W,ct,st){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){st&&Me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(on);const Gt=qt.update(R),It=R.material;It.visible&&w.push(R,Gt,It,ct,Me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const Gt=qt.update(R),It=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Me.copy(R.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Me.copy(Gt.boundingSphere.center)),Me.applyMatrix4(R.matrixWorld).applyMatrix4(on)),Array.isArray(It)){const Vt=Gt.groups;for(let Jt=0,le=Vt.length;Jt<le;Jt++){const ue=Vt[Jt],kt=It[ue.materialIndex];kt&&kt.visible&&w.push(R,Gt,kt,ct,Me.z,ue)}}else It.visible&&w.push(R,Gt,It,ct,Me.z,null)}}const Dt=R.children;for(let Gt=0,It=Dt.length;Gt<It;Gt++)ys(Dt[Gt],W,ct,st)}function zi(R,W,ct,st){const{opaque:tt,transmissive:Dt,transparent:Gt}=R;B.setupLightsView(ct),Kt===!0&&Tt.setGlobalState(L.clippingPlanes,ct),st&&Wt.viewport(O.copy(st)),tt.length>0&&Cn(tt,W,ct),Dt.length>0&&Cn(Dt,W,ct),Gt.length>0&&Cn(Gt,W,ct),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Rn(R,W,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[st.id]===void 0){const kt=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[st.id]=new Ca(1,1,{generateMipmaps:!0,type:kt?Va:Fi,minFilter:ms,samples:Math.max(4,Ne.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const Dt=B.state.transmissionRenderTarget[st.id],Gt=st.viewport||O;Dt.setSize(Gt.z*L.transmissionResolutionScale,Gt.w*L.transmissionResolutionScale);const It=L.getRenderTarget(),Vt=L.getActiveCubeFace(),Jt=L.getActiveMipmapLevel();L.setRenderTarget(Dt),L.getClearColor(lt),St=L.getClearAlpha(),St<1&&L.setClearColor(16777215,.5),L.clear(),pe&&Ot.render(ct);const le=L.toneMapping;L.toneMapping=Ra;const ue=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),B.setupLightsView(st),Kt===!0&&Tt.setGlobalState(L.clippingPlanes,st),Cn(R,ct,st),Z.updateMultisampleRenderTarget(Dt),Z.updateRenderTargetMipmap(Dt),Re.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let fe=0,cn=W.length;fe<cn;fe++){const en=W[fe],{object:Ce,geometry:yn,material:Yt,group:Yn}=en;if(Yt.side===Wn&&Ce.layers.test(st.layers)){const he=Yt.side;Yt.side=xi,Yt.needsUpdate=!0,fi(Ce,ct,st,yn,Yt,Yn),Yt.side=he,Yt.needsUpdate=!0,kt=!0}}kt===!0&&(Z.updateMultisampleRenderTarget(Dt),Z.updateRenderTargetMipmap(Dt))}L.setRenderTarget(It,Vt,Jt),L.setClearColor(lt,St),ue!==void 0&&(st.viewport=ue),L.toneMapping=le}function Cn(R,W,ct){const st=W.isScene===!0?W.overrideMaterial:null;for(let tt=0,Dt=R.length;tt<Dt;tt++){const Gt=R[tt],{object:It,geometry:Vt,group:Jt}=Gt;let le=Gt.material;le.allowOverride===!0&&st!==null&&(le=st),It.layers.test(ct.layers)&&fi(It,W,ct,Vt,le,Jt)}}function fi(R,W,ct,st,tt,Dt){R.onBeforeRender(L,W,ct,st,tt,Dt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(L,W,ct,st,R,Dt),tt.transparent===!0&&tt.side===Wn&&tt.forceSinglePass===!1?(tt.side=xi,tt.needsUpdate=!0,L.renderBufferDirect(ct,W,st,tt,R,Dt),tt.side=_s,tt.needsUpdate=!0,L.renderBufferDirect(ct,W,st,tt,R,Dt),tt.side=Wn):L.renderBufferDirect(ct,W,st,tt,R,Dt),R.onAfterRender(L,W,ct,st,tt,Dt)}function _a(R,W,ct){W.isScene!==!0&&(W=Be);const st=E.get(R),tt=B.state.lights,Dt=B.state.shadowsArray,Gt=tt.state.version,It=wt.getParameters(R,tt.state,Dt,W,ct),Vt=wt.getProgramCacheKey(It);let Jt=st.programs;st.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,st.fog=W.fog;const le=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;st.envMap=mt.get(R.envMap||st.environment,le),st.envMapRotation=st.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",Oe),Jt=new Map,st.programs=Jt);let ue=Jt.get(Vt);if(ue!==void 0){if(st.currentProgram===ue&&st.lightsStateVersion===Gt)return Sn(R,It),ue}else It.uniforms=wt.getUniforms(R),R.onBeforeCompile(It,L),ue=wt.acquireProgram(It,Vt),Jt.set(Vt,ue),st.uniforms=It.uniforms;const kt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=Tt.uniform),Sn(R,It),st.needsLights=Ua(R),st.lightsStateVersion=Gt,st.needsLights&&(kt.ambientLightColor.value=tt.state.ambient,kt.lightProbe.value=tt.state.probe,kt.directionalLights.value=tt.state.directional,kt.directionalLightShadows.value=tt.state.directionalShadow,kt.spotLights.value=tt.state.spot,kt.spotLightShadows.value=tt.state.spotShadow,kt.rectAreaLights.value=tt.state.rectArea,kt.ltc_1.value=tt.state.rectAreaLTC1,kt.ltc_2.value=tt.state.rectAreaLTC2,kt.pointLights.value=tt.state.point,kt.pointLightShadows.value=tt.state.pointShadow,kt.hemisphereLights.value=tt.state.hemi,kt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,kt.spotLightMatrix.value=tt.state.spotLightMatrix,kt.spotLightMap.value=tt.state.spotLightMap,kt.pointShadowMatrix.value=tt.state.pointShadowMatrix),st.currentProgram=ue,st.uniformsList=null,ue}function ar(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=qu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Sn(R,W){const ct=E.get(R);ct.outputColorSpace=W.outputColorSpace,ct.batching=W.batching,ct.batchingColor=W.batchingColor,ct.instancing=W.instancing,ct.instancingColor=W.instancingColor,ct.instancingMorph=W.instancingMorph,ct.skinning=W.skinning,ct.morphTargets=W.morphTargets,ct.morphNormals=W.morphNormals,ct.morphColors=W.morphColors,ct.morphTargetsCount=W.morphTargetsCount,ct.numClippingPlanes=W.numClippingPlanes,ct.numIntersection=W.numClipIntersection,ct.vertexAlphas=W.vertexAlphas,ct.vertexTangents=W.vertexTangents,ct.toneMapping=W.toneMapping}function hi(R,W,ct,st,tt){W.isScene!==!0&&(W=Be),Z.resetTextureUnits();const Dt=W.fog,Gt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?W.environment:null,It=j===null?L.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Pr,Vt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Jt=mt.get(st.envMap||Gt,Vt),le=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ue=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!ct.morphAttributes.position,fe=!!ct.morphAttributes.normal,cn=!!ct.morphAttributes.color;let en=Ra;st.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(en=L.toneMapping);const Ce=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,yn=Ce!==void 0?Ce.length:0,Yt=E.get(st),Yn=B.state.lights;if(Kt===!0&&(ne===!0||R!==K)){const En=R===K&&st.id===it;Tt.setState(st,R,En)}let he=!1;st.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Yn.state.version||Yt.outputColorSpace!==It||tt.isBatchedMesh&&Yt.batching===!1||!tt.isBatchedMesh&&Yt.batching===!0||tt.isBatchedMesh&&Yt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Yt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Yt.instancing===!1||!tt.isInstancedMesh&&Yt.instancing===!0||tt.isSkinnedMesh&&Yt.skinning===!1||!tt.isSkinnedMesh&&Yt.skinning===!0||tt.isInstancedMesh&&Yt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Yt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Yt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Yt.instancingMorph===!1&&tt.morphTexture!==null||Yt.envMap!==Jt||st.fog===!0&&Yt.fog!==Dt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Tt.numPlanes||Yt.numIntersection!==Tt.numIntersection)||Yt.vertexAlphas!==le||Yt.vertexTangents!==ue||Yt.morphTargets!==kt||Yt.morphNormals!==fe||Yt.morphColors!==cn||Yt.toneMapping!==en||Yt.morphTargetsCount!==yn)&&(he=!0):(he=!0,Yt.__version=st.version);let wn=Yt.currentProgram;he===!0&&(wn=_a(st,W,tt));let Bn=!1,Di=!1,di=!1;const ke=wn.getUniforms(),Mn=Yt.uniforms;if(Wt.useProgram(wn.program)&&(Bn=!0,Di=!0,di=!0),st.id!==it&&(it=st.id,Di=!0),Bn||K!==R){Wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ke.setValue(V,"projectionMatrix",R.projectionMatrix),ke.setValue(V,"viewMatrix",R.matrixWorldInverse);const Ui=ke.map.cameraPosition;Ui!==void 0&&Ui.setValue(V,xe.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&ke.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ke.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,Di=!0,di=!0)}if(Yt.needsLights&&(Yn.state.directionalShadowMap.length>0&&ke.setValue(V,"directionalShadowMap",Yn.state.directionalShadowMap,Z),Yn.state.spotShadowMap.length>0&&ke.setValue(V,"spotShadowMap",Yn.state.spotShadowMap,Z),Yn.state.pointShadowMap.length>0&&ke.setValue(V,"pointShadowMap",Yn.state.pointShadowMap,Z)),tt.isSkinnedMesh){ke.setOptional(V,tt,"bindMatrix"),ke.setOptional(V,tt,"bindMatrixInverse");const En=tt.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),ke.setValue(V,"boneTexture",En.boneTexture,Z))}tt.isBatchedMesh&&(ke.setOptional(V,tt,"batchingTexture"),ke.setValue(V,"batchingTexture",tt._matricesTexture,Z),ke.setOptional(V,tt,"batchingIdTexture"),ke.setValue(V,"batchingIdTexture",tt._indirectTexture,Z),ke.setOptional(V,tt,"batchingColorTexture"),tt._colorsTexture!==null&&ke.setValue(V,"batchingColorTexture",tt._colorsTexture,Z));const zn=ct.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Pt.update(tt,ct,wn),(Di||Yt.receiveShadow!==tt.receiveShadow)&&(Yt.receiveShadow=tt.receiveShadow,ke.setValue(V,"receiveShadow",tt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&W.environment!==null&&(Mn.envMapIntensity.value=W.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=$A()),Di&&(ke.setValue(V,"toneMappingExposure",L.toneMappingExposure),Yt.needsLights&&wi(Mn,di),Dt&&st.fog===!0&&ee.refreshFogUniforms(Mn,Dt),ee.refreshMaterialUniforms(Mn,st,ft,q,B.state.transmissionRenderTarget[R.id]),qu.upload(V,ar(Yt),Mn,Z)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(qu.upload(V,ar(Yt),Mn,Z),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ke.setValue(V,"center",tt.center),ke.setValue(V,"modelViewMatrix",tt.modelViewMatrix),ke.setValue(V,"normalMatrix",tt.normalMatrix),ke.setValue(V,"modelMatrix",tt.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const En=st.uniformsGroups;for(let Ui=0,$i=En.length;Ui<$i;Ui++){const La=En[Ui];Ht.update(La,wn),Ht.bind(La,wn)}}return wn}function wi(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Ua(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,W,ct){const st=E.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=W,E.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const ct=E.get(R);ct.__webglFramebuffer=W,ct.__useDefaultFramebuffer=W===void 0};const ln=V.createFramebuffer();this.setRenderTarget=function(R,W=0,ct=0){j=R,P=W,k=ct;let st=null,tt=!1,Dt=!1;if(R){const It=E.get(R);if(It.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(V.FRAMEBUFFER,It.__webglFramebuffer),O.copy(R.viewport),F.copy(R.scissor),ot=R.scissorTest,Wt.viewport(O),Wt.scissor(F),Wt.setScissorTest(ot),it=-1;return}else if(It.__webglFramebuffer===void 0)Z.setupRenderTarget(R);else if(It.__hasExternalTextures)Z.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const le=R.depthTexture;if(It.__boundDepthTexture!==le){if(le!==null&&E.has(le)&&(R.width!==le.image.width||R.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(R)}}const Vt=R.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Dt=!0);const Jt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[W])?st=Jt[W][ct]:st=Jt[W],tt=!0):R.samples>0&&Z.useMultisampledRTT(R)===!1?st=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?st=Jt[ct]:st=Jt,O.copy(R.viewport),F.copy(R.scissor),ot=R.scissorTest}else O.copy(et).multiplyScalar(ft).floor(),F.copy(gt).multiplyScalar(ft).floor(),ot=xt;if(ct!==0&&(st=ln),Wt.bindFramebuffer(V.FRAMEBUFFER,st)&&Wt.drawBuffers(R,st),Wt.viewport(O),Wt.scissor(F),Wt.setScissorTest(ot),tt){const It=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,It.__webglTexture,ct)}else if(Dt){const It=W;for(let Vt=0;Vt<R.textures.length;Vt++){const Jt=E.get(R.textures[Vt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Vt,Jt.__webglTexture,ct,It)}}else if(R!==null&&ct!==0){const It=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,It.__webglTexture,ct)}it=-1},this.readRenderTargetPixels=function(R,W,ct,st,tt,Dt,Gt,It=0){if(!(R&&R.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt){Wt.bindFramebuffer(V.FRAMEBUFFER,Vt);try{const Jt=R.textures[It],le=Jt.format,ue=Jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),!Ne.textureFormatReadable(le)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(ue)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-st&&ct>=0&&ct<=R.height-tt&&V.readPixels(W,ct,st,tt,Et.convert(le),Et.convert(ue),Dt)}finally{const Jt=j!==null?E.get(j).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,W,ct,st,tt,Dt,Gt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt)if(W>=0&&W<=R.width-st&&ct>=0&&ct<=R.height-tt){Wt.bindFramebuffer(V.FRAMEBUFFER,Vt);const Jt=R.textures[It],le=Jt.format,ue=Jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),!Ne.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,kt),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),V.readPixels(W,ct,st,tt,Et.convert(le),Et.convert(ue),0);const fe=j!==null?E.get(j).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,fe);const cn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await xM(V,cn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,kt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(kt),V.deleteSync(cn),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ct=0){const st=Math.pow(2,-ct),tt=Math.floor(R.image.width*st),Dt=Math.floor(R.image.height*st),Gt=W!==null?W.x:0,It=W!==null?W.y:0;Z.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,Gt,It,tt,Dt),Wt.unbindTexture()};const Ji=V.createFramebuffer(),Xa=V.createFramebuffer();this.copyTextureToTexture=function(R,W,ct=null,st=null,tt=0,Dt=0){let Gt,It,Vt,Jt,le,ue,kt,fe,cn;const en=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(ct!==null)Gt=ct.max.x-ct.min.x,It=ct.max.y-ct.min.y,Vt=ct.isBox3?ct.max.z-ct.min.z:1,Jt=ct.min.x,le=ct.min.y,ue=ct.isBox3?ct.min.z:0;else{const Mn=Math.pow(2,-tt);Gt=Math.floor(en.width*Mn),It=Math.floor(en.height*Mn),R.isDataArrayTexture?Vt=en.depth:R.isData3DTexture?Vt=Math.floor(en.depth*Mn):Vt=1,Jt=0,le=0,ue=0}st!==null?(kt=st.x,fe=st.y,cn=st.z):(kt=0,fe=0,cn=0);const Ce=Et.convert(W.format),yn=Et.convert(W.type);let Yt;W.isData3DTexture?(Z.setTexture3D(W,0),Yt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Z.setTexture2DArray(W,0),Yt=V.TEXTURE_2D_ARRAY):(Z.setTexture2D(W,0),Yt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Yn=V.getParameter(V.UNPACK_ROW_LENGTH),he=V.getParameter(V.UNPACK_IMAGE_HEIGHT),wn=V.getParameter(V.UNPACK_SKIP_PIXELS),Bn=V.getParameter(V.UNPACK_SKIP_ROWS),Di=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,en.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,en.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,le),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ue);const di=R.isDataArrayTexture||R.isData3DTexture,ke=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Mn=E.get(R),zn=E.get(W),En=E.get(Mn.__renderTarget),Ui=E.get(zn.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let $i=0;$i<Vt;$i++)di&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,tt,ue+$i),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(W).__webglTexture,Dt,cn+$i)),V.blitFramebuffer(Jt,le,Gt,It,kt,fe,Gt,It,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||E.has(R)){const Mn=E.get(R),zn=E.get(W);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,Ji),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xa);for(let En=0;En<Vt;En++)di?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mn.__webglTexture,tt,ue+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mn.__webglTexture,tt),ke?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zn.__webglTexture,Dt,cn+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zn.__webglTexture,Dt),tt!==0?V.blitFramebuffer(Jt,le,Gt,It,kt,fe,Gt,It,V.COLOR_BUFFER_BIT,V.NEAREST):ke?V.copyTexSubImage3D(Yt,Dt,kt,fe,cn+En,Jt,le,Gt,It):V.copyTexSubImage2D(Yt,Dt,kt,fe,Jt,le,Gt,It);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ke?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Yt,Dt,kt,fe,cn,Gt,It,Vt,Ce,yn,en.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Yt,Dt,kt,fe,cn,Gt,It,Vt,Ce,en.data):V.texSubImage3D(Yt,Dt,kt,fe,cn,Gt,It,Vt,Ce,yn,en):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,kt,fe,Gt,It,Ce,yn,en.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,kt,fe,en.width,en.height,Ce,en.data):V.texSubImage2D(V.TEXTURE_2D,Dt,kt,fe,Gt,It,Ce,yn,en);V.pixelStorei(V.UNPACK_ROW_LENGTH,Yn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,he),V.pixelStorei(V.UNPACK_SKIP_PIXELS,wn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Di),Dt===0&&W.generateMipmaps&&V.generateMipmap(Yt),Wt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Z.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Z.setTextureCube(R,0):R.isData3DTexture?Z.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Z.setTexture2DArray(R,0):Z.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){P=0,k=0,j=null,Wt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ge._getUnpackColorSpace()}}const t2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Gf,AddEquation:Qs,AddOperation:Lx,AdditiveBlending:Xp,AgXToneMapping:lm,AlphaFormat:mm,AlwaysCompare:Gx,AlwaysDepth:Qu,AlwaysStencilFunc:qp,AmbientLight:sS,ArrayCamera:oS,BackSide:xi,BasicDepthPacking:Ox,Box3:er,BoxGeometry:nr,BufferAttribute:pa,BufferGeometry:Ki,ByteType:fm,Camera:Cm,CanvasTexture:Bo,CatmullRomCurve3:Qx,CineonToneMapping:rm,ClampToEdgeWrapping:Ha,Clock:cS,Color:re,ColorManagement:Ge,ConstantAlphaFactor:wx,ConstantColorFactor:Rx,CubeCamera:rS,CubeDepthTexture:Zx,CubeReflectionMapping:tr,CubeRefractionMapping:Or,CubeTexture:Tm,CubeUVReflectionMapping:uc,CullFaceBack:kp,CullFaceFront:fx,CullFaceNone:ux,Curve:Kx,CustomBlending:dx,CustomToneMapping:om,Data3DTexture:Yx,DataArrayTexture:vm,DataTexture:Em,DepthFormat:ka,DepthStencilFormat:Js,DepthTexture:Yo,DirectionalLight:Jp,DoubleSide:Wn,DstAlphaFactor:Mx,DstColorFactor:Tx,EqualCompare:Bx,EqualDepth:$u,EquirectangularReflectionMapping:Vu,EquirectangularRefractionMapping:ku,Euler:ma,EventDispatcher:Fr,ExternalTexture:bm,Float32BufferAttribute:ii,FloatType:ha,Fog:lc,FrontSide:_s,Frustum:th,GLSL3:Zp,GreaterCompare:zx,GreaterDepth:ef,GreaterEqualCompare:Qf,GreaterEqualDepth:tf,Group:Fo,HalfFloatType:Va,HemisphereLight:aS,ImageUtils:Xx,InstancedBufferAttribute:Qp,InstancedMesh:jx,IntType:Vf,KeepStencilOp:wr,Layers:$f,LessCompare:Fx,LessDepth:Ju,LessEqualCompare:Kf,LessEqualDepth:Nr,Light:Ko,LinearFilter:ni,LinearMipmapLinearFilter:ms,LinearMipmapNearestFilter:Xu,LinearSRGBColorSpace:Pr,LinearToneMapping:am,LinearTransfer:rc,Material:zr,MathUtils:Ai,Matrix3:ve,Matrix4:rn,MaxEquation:_x,Mesh:ze,MeshBasicMaterial:cc,MeshDepthMaterial:nS,MeshDistanceMaterial:iS,MeshLambertMaterial:eS,MeshPhysicalMaterial:Dr,MeshStandardMaterial:ps,MinEquation:gx,MirroredRepeatWrapping:af,MixOperation:Ux,MultiplyBlending:Yp,MultiplyOperation:Hf,NearestFilter:ei,NearestMipmapLinearFilter:Ql,NearestMipmapNearestFilter:Nx,NeutralToneMapping:cm,NeverCompare:Px,NeverDepth:Ku,NoBlending:Ga,NoColorSpace:ds,NoToneMapping:Ra,NormalBlending:Lr,NotEqualCompare:Hx,NotEqualDepth:nf,Object3D:fn,ObjectSpaceNormalMap:Ix,OneFactor:xx,OneMinusConstantAlphaFactor:Dx,OneMinusConstantColorFactor:Cx,OneMinusDstAlphaFactor:Ex,OneMinusDstColorFactor:bx,OneMinusSrcAlphaFactor:Zu,OneMinusSrcColorFactor:yx,OrthographicCamera:ih,PCFShadowMap:zo,PCFSoftShadowMap:hx,PMREMGenerator:Bf,PerspectiveCamera:Ci,Plane:Ks,PlaneGeometry:za,PointLight:sc,Quaternion:Br,R11_EAC_Format:hf,RED_GREEN_RGTC2_Format:If,RED_RGTC1_Format:Nf,REVISION:zf,RG11_EAC_Format:pf,RGBAFormat:da,RGBAIntegerFormat:jf,RGBA_ASTC_10x10_Format:Rf,RGBA_ASTC_10x5_Format:Tf,RGBA_ASTC_10x6_Format:bf,RGBA_ASTC_10x8_Format:Af,RGBA_ASTC_12x10_Format:Cf,RGBA_ASTC_12x12_Format:wf,RGBA_ASTC_4x4_Format:gf,RGBA_ASTC_5x4_Format:_f,RGBA_ASTC_5x5_Format:vf,RGBA_ASTC_6x5_Format:xf,RGBA_ASTC_6x6_Format:Sf,RGBA_ASTC_8x5_Format:yf,RGBA_ASTC_8x6_Format:Mf,RGBA_ASTC_8x8_Format:Ef,RGBA_BPTC_Format:Df,RGBA_ETC2_EAC_Format:ff,RGBA_PVRTC_2BPPV1_Format:lf,RGBA_PVRTC_4BPPV1_Format:of,RGBA_S3TC_DXT1_Format:tc,RGBA_S3TC_DXT3_Format:ec,RGBA_S3TC_DXT5_Format:nc,RGBFormat:gm,RGB_BPTC_SIGNED_Format:Uf,RGB_BPTC_UNSIGNED_Format:Lf,RGB_ETC1_Format:cf,RGB_ETC2_Format:uf,RGB_PVRTC_2BPPV1_Format:rf,RGB_PVRTC_4BPPV1_Format:sf,RGB_S3TC_DXT1_Format:$l,RGFormat:Ir,RGIntegerFormat:qf,RawShaderMaterial:tS,Ray:Mm,Raycaster:lS,RedFormat:Wf,RedIntegerFormat:Yf,ReinhardToneMapping:sm,RenderTarget:Wx,RepeatWrapping:Go,ReverseSubtractEquation:mx,RingGeometry:eh,SIGNED_R11_EAC_Format:df,SIGNED_RED_GREEN_RGTC2_Format:Pf,SIGNED_RED_RGTC1_Format:Of,SIGNED_RG11_EAC_Format:mf,SRGBColorSpace:Zn,SRGBTransfer:Qe,Scene:xm,ShaderChunk:ye,ShaderLib:ba,ShaderMaterial:Da,ShortType:hm,Source:Jf,Sphere:Zo,SphereGeometry:nh,SpotLight:Yu,SrcAlphaFactor:ju,SrcAlphaSaturateFactor:Ax,SrcColorFactor:Sx,StaticDrawUsage:jp,SubtractEquation:px,SubtractiveBlending:Wp,TangentSpaceNormalMap:Zf,Texture:ui,Triangle:fa,UVMapping:um,Uint16BufferAttribute:Sm,Uint32BufferAttribute:ym,UniformsLib:Ft,UniformsUtils:$x,UnsignedByteType:Fi,UnsignedInt101111Type:pm,UnsignedInt248Type:ko,UnsignedInt5999Type:dm,UnsignedIntType:wa,UnsignedShort4444Type:kf,UnsignedShort5551Type:Xf,UnsignedShortType:Vo,VSMShadowMap:Po,Vector2:De,Vector3:J,Vector4:bn,WebGLCoordinateSystem:Aa,WebGLCubeRenderTarget:wm,WebGLRenderTarget:Ca,WebGLRenderer:gS,WebGLUtils:mS,WebGPUCoordinateSystem:Xo,WebXRController:Wu,ZeroFactor:vx,createCanvasElement:Vx,error:He,log:Kp,warn:de,warnOnce:oc},Symbol.toStringTag,{value:"Module"}));class e2 extends xm{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new nr;t.deleteAttribute("uv");const i=new ps({side:xi}),s=new ps,l=new sc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new ze(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new jx(t,s,6),d=new fn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const m=new ze(t,No(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new ze(t,No(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new ze(t,No(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new ze(t,No(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new ze(t,No(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new ze(t,No(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function No(r){return new eS({color:0,emissive:16777215,emissiveIntensity:r})}const n2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],i2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],a2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],s2=["LOW","MEDIUM","HIGH","EXTREME"],r2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],o2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],l2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},c2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},u2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},f2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},h2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function _S(r){return(r-90)*Math.PI/180}function d2(r,t,i,s){const l=_S(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function Oo(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function vS(r){Oo("subject",r.subject,n2),Oo("domain",r.domain,i2),Oo("verb",r.verb,a2),Oo("magnitude",r.magnitude,s2),Oo("time",r.time,r2),Oo("certainty",r.certainty,o2)}function p2(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const h=h2[l][c];if(!h)throw new Error(`Unknown ${l} token: ${c}`);return h}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return vS(s),s}function m2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,h=(-90+l*36)*(Math.PI/180),d=i.x+Math.cos(h)*c,m=i.y+Math.sin(h)*c;l===0&&r.beginPath(),l===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),h=i.x+Math.cos(c)*6,d=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(h,d):r.lineTo(h,d)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function jl(r,t,i,s,l){const c=i.x-t.x,h=i.y-t.y,d=Math.sqrt(c*c+h*h)||1,m=c/d,p=h/d,_=-p,x=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+x*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-x*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function Zl(r,t,i,s,l,c){const h=f2[t.certainty];if(!(h<=0)){r.save(),r.fillStyle=l;for(let d=1;d<=h;d+=1){const m=d/(h+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const x=1-m;p=x*x*i.x+2*x*m*c.x+m*m*s.x,_=x*x*i.y+2*x*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function g2(r,t,i){vS(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),h=s*.5,d=l*.5,m=i?.backgroundColor,p=i?.lineColor,_=i?.gridColor;r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(h,d,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(h,d,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(h,d,c*.12,0,Math.PI*2),r.stroke();const x=l2[t.domain],g=c2[t.time]*c,y=u2[t.magnitude]*c,T=d2(h,d,g,x),D=_S(x),M=Math.cos(D),S=Math.sin(D),C=-S,U=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let w={x:T.x,y:T.y},B={x:T.x+M*y,y:T.y+S*y},z;if(t.verb==="EXISTS")w={x:T.x-C*(y*.48),y:T.y-U*(y*.48)},B={x:T.x+C*(y*.48),y:T.y+U*(y*.48)},r.beginPath(),r.moveTo(w.x,w.y),r.lineTo(B.x,B.y),r.stroke(),Zl(r,t,w,B,p);else if(t.verb==="DECLINES")B={x:T.x-M*y,y:T.y-S*y},r.beginPath(),r.moveTo(w.x,w.y),r.lineTo(B.x,B.y),r.stroke(),jl(r,w,B,p,7),Zl(r,t,w,B,p);else if(t.verb==="TRANSFORMS")z={x:T.x+C*(y*.34)+M*(y*.34),y:T.y+U*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(w.x,w.y),r.quadraticCurveTo(z.x,z.y,B.x,B.y),r.stroke(),jl(r,z,B,p,7),Zl(r,t,w,B,p,z);else if(t.verb==="INFLUENCES"){const b={x:T.x+C*3.4,y:T.y+U*3.4},L={x:B.x+C*3.4,y:B.y+U*3.4},$={x:T.x-C*3.4,y:T.y-U*3.4},P={x:B.x-C*3.4,y:B.y-U*3.4};r.beginPath(),r.moveTo(b.x,b.y),r.lineTo(L.x,L.y),r.moveTo($.x,$.y),r.lineTo(P.x,P.y),r.stroke(),jl(r,b,L,p,6.6),jl(r,$,P,p,6.6),Zl(r,t,b,L,p)}else r.beginPath(),r.moveTo(w.x,w.y),r.lineTo(B.x,B.y),r.stroke(),jl(r,w,B,p,7),Zl(r,t,w,B,p);r.fillStyle=p,r.beginPath(),r.arc(h,d,5,0,Math.PI*2),r.fill(),m2(r,t.subject,T,p)}function _2(r,t,i){const s=p2(t);g2(r,s,i)}const v2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},zp=(r,t,i,s,l)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:v2}),Bu=[zp("fallback-01","INTELLIGENSPARTIET","Politisk AI-kapasitet for et samfunn i rask omforming.","right",.1),zp("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42),zp("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74)],x2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim().toUpperCase(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim()}),hs=r=>{let t=r%1;return t<0&&(t+=1),t},S2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),hs(r+l*(1-Math.exp(-i*s)))},sx=12,Hp=9,rx=.12,Gp=2.4,y2=.3,M2=1.2,E2=.3,ox=6741503,T2=5,b2=3.2,A2=.35,R2=.25,zu=400,C2=2.5,lx=16755251,Hu=3,w2=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),cx=(r,t,i,s,l,c)=>{const h=t.split(" ");let d="",m=s;for(let p=0;p<h.length;p+=1){const _=`${d}${h[p]} `;r.measureText(_).width>l&&d.length>0?(r.fillText(d.trim(),i,m),d=`${h[p]} `,m+=c):d=_}d.trim()&&r.fillText(d.trim(),i,m)},nm=Math.PI*2,Cr=r=>Math.min(1,Math.max(0,r)),Kl=(r,t,i,s,l)=>{const c=nm*(r*i+s),h=nm*(t*i+l),d=Math.sin(c)*Math.cos(h),m=.5*Math.sin((c+h)*.65+s*6.37);return d+m},Gu=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Bo(s)},ua=(r,t,i,s,l=!1)=>{r.wrapS=Go,r.wrapT=Go,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=ms,r.magFilter=ni,l&&(r.colorSpace=Zn),r.needsUpdate=!0},Vp=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:h,microFreq:d,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:x,seamDepth:g,seamWidth:y,roughnessBase:T,roughnessRange:D,normalStrength:M,aoStrength:S}=r,C=t*i,U=new re(l),w=new Float32Array(C);let B=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY;for(let it=0;it<i;it+=1)for(let K=0;K<t;K+=1){const O=it*t+K,F=K/t,ot=it/i,lt=Kl(F,ot,c,s*.11,s*.23),St=Kl(F,ot,h,s*.41+.18,s*.29+.07),N=Kl(F,ot,d,s*.71+.43,s*.53+.31),q=Math.sin(nm*((F+ot*.33)*m+s*.17));let ft=0;if(_!=="none"&&x>0){const et=(_==="x"?F:ot)*x%1,gt=Math.min(et,1-et);ft=Math.exp(-Math.pow(gt/Math.max(1e-4,y),2))}const Mt=lt*.6+St*.28+N*.12+q*p-ft*g;w[O]=Mt,Mt<B&&(B=Mt),Mt>z&&(z=Mt)}const H=new Float32Array(C),b=Math.max(1e-4,z-B),L=new Uint8ClampedArray(C*4),$=new Uint8ClampedArray(C*4),P=new Uint8ClampedArray(C*4);for(let it=0;it<i;it+=1)for(let K=0;K<t;K+=1){const O=it*t+K,F=O*4,ot=K/t,lt=it/i,St=Cr((w[O]-B)/b);H[O]=St;const N=Kl(ot,lt,h*.6,s*.19+.62,s*.73+.14)*.5+.5,q=Cr(.78+(St-.5)*.24+(N-.5)*.12),ft=Kl(ot,lt,c*.5,s*.37+.89,s*.13+.44),Mt=1+ft*.017,Nt=1+ft*.007,et=1-ft*.013,gt=Cr(T+(1-St)*D+(N-.5)*.14),xt=Cr(.94-(1-St)*S);L[F]=Math.round(Cr(U.r*q*Mt)*255),L[F+1]=Math.round(Cr(U.g*q*Nt)*255),L[F+2]=Math.round(Cr(U.b*q*et)*255),L[F+3]=255;const Xt=Math.round(gt*255);$[F]=Xt,$[F+1]=Xt,$[F+2]=Xt,$[F+3]=255;const Kt=Math.round(xt*255);P[F]=Kt,P[F+1]=Kt,P[F+2]=Kt,P[F+3]=255}const k=(it,K)=>{const O=(it+t)%t,F=(K+i)%i;return H[F*t+O]},j=new Uint8ClampedArray(C*4);for(let it=0;it<i;it+=1)for(let K=0;K<t;K+=1){const F=(it*t+K)*4,ot=k(K+1,it)-k(K-1,it),lt=k(K,it+1)-k(K,it-1),St=-ot*M,N=-lt*M,q=1,ft=1/Math.hypot(St,N,q);j[F]=Math.round((St*ft*.5+.5)*255),j[F+1]=Math.round((N*ft*.5+.5)*255),j[F+2]=Math.round((q*ft*.5+.5)*255),j[F+3]=255}return{albedo:Gu(L,t,i),normal:Gu(j,t,i),roughness:Gu($,t,i),ao:Gu(P,t,i)}},D2=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,h=0;const d=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],h+=s[p+2];l/=d*255,c/=d*255,h/=d*255;const m=l*.2126+c*.7152+h*.0722;return{color:new re(l,c,h),luminance:m}};function U2(){const r=ti.useRef(null),t=ti.useRef([]),i=ti.useRef(rx),s=ti.useRef(rx);ti.useEffect(()=>{const U=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=U,document.documentElement.style.overscrollBehavior=""}},[]);const[l,c]=ti.useState(Bu),[h,d]=ti.useState([]),[m,p]=ti.useState(Bu[0].id),[_,x]=ti.useState(!0),[g,y]=ti.useState(null),[T,D]=ti.useState(!1);ti.useEffect(()=>{let U=!1;return(async()=>{try{const B=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),z=B.headers.get("content-type")??"";if(!B.ok)throw new Error(`HTTP ${B.status} while loading glyph language map`);if(!z.toLowerCase().includes("application/json")){const L=await B.text();throw new Error(`Expected JSON but got '${z||"unknown"}' (${L.slice(0,120)})`)}const H=await B.json();if(!Array.isArray(H?.items))throw new Error("Glyph language payload missing 'items' array");const b=H.items.map((L,$)=>x2(L,$)).filter(L=>L.enabled!==!1);if(U)return;d(b)}catch(B){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",B),U)return;d([])}})(),()=>{U=!0}},[]);const M=ti.useMemo(()=>{const U=new Map;return h.forEach(w=>{!w.panel_id||!w.canonical||U.has(w.panel_id)||U.set(w.panel_id,w.canonical)}),U},[h]),S=ti.useMemo(()=>{const U=new Map;return h.forEach(w=>{!w.panel_id||w.enabled===!1||U.has(w.panel_id)||U.set(w.panel_id,{label:w.label||"",note:w.note||""})}),U},[h]);ti.useEffect(()=>{let U=!1;return(async()=>{x(!0),y(null);try{const B=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),z=B.headers.get("content-type")??"";if(!B.ok)throw new Error(`HTTP ${B.status} while loading panel data`);if(!z.toLowerCase().includes("application/json")){const k=await B.text();throw new Error(`Expected JSON but got '${z||"unknown"}' (${k.slice(0,120)})`)}const H=await B.json();if(!Array.isArray(H?.panels))throw new Error("Panel payload missing 'panels' array");const b=typeof H.media_root=="string"?H.media_root.replace(/\/+$/,""):"",L=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",$=k=>/^https?:\/\//i.test(k)&&L?`/proxy?url=${encodeURIComponent(k)}`:k,P=H.panels.map(k=>{const j=typeof k?.source=="string"?k.source.replace(/^\/+/,""):"",it=j?b?`${b}/${j}`:`/${j}`:void 0,K=it?$(it):void 0,O=typeof k?.poster=="string"?k.poster.replace(/^\/+/,""):"",F=O?b?`${b}/${O}`:`/${O}`:void 0,ot=F?$(F):void 0,lt=k?.type==="image"||k?.type==="video"?k.type:"text";return{...k,kind:lt,type:lt,title:k?.content?.title??"Uten tittel",body:k?.content?.description??"",cta:k?.content?.cta,poster:ot,image:lt==="image"?K:void 0,video:lt==="video"?K:void 0}});if(P.length===0)throw new Error("Panel payload contained 0 panels");if(U)return;c(P),p(P[0].id)}catch(B){if(console.error("Failed to load panels; using fallback data.",B),U)return;c(Bu),p(Bu[0].id),y("Kunne ikke laste media-paneler. Viser lokal fallback.")}finally{U||x(!1)}})(),()=>{U=!0}},[]);const C=ti.useMemo(()=>l.find(U=>U.id===m)??l[0]??{title:"",body:""},[m,l]);return ti.useEffect(()=>{if(l.length===0)return;const U=r.current;if(!U)return;D(!1);let w=!1,B=()=>{};return(()=>{if(w||!U)return;t.current=[];const H=window.matchMedia("(prefers-reduced-motion: reduce)"),b=window.matchMedia("(max-width: 767px)"),L=H.matches,$=b.matches,P=new xm;P.background=new re(987671),P.fog=new lc(987671,38,230);const k=new Ci($?72:64,U.clientWidth/U.clientHeight,.1,1200),j=new gS({antialias:!$,alpha:!1,powerPreference:"high-performance"});j.setPixelRatio(Math.min(window.devicePixelRatio,$?1:1.5)),j.setSize(U.clientWidth,U.clientHeight),j.outputColorSpace=Zn,j.toneMapping=Gf,j.toneMappingExposure=$?.76:.72,j.shadowMap.enabled=!$,j.shadowMap.type=zo,U.appendChild(j.domElement);const it=new Bf(j),K=it.fromScene(new e2,.06);P.environment=K.texture;const O=new sS(16185599,.05);P.add(O);const F=new aS(14739442,1777446,.08);P.add(F);const ot=w2(t2),lt=new Qx(ot,!0,"catmullrom",.17),St=$?180:300,N=Math.min(8,j.capabilities.getMaxAnisotropy()),q=$?256:512,ft=Vp({width:q,height:q,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});ua(ft.albedo,4.8,24,N,!0),ua(ft.normal,4.8,24,N),ua(ft.roughness,4.8,24,N),ua(ft.ao,4.8,24,N);const Mt=Vp({width:q,height:q,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});ua(Mt.albedo,2.2,24,N,!0),ua(Mt.normal,2.2,24,N),ua(Mt.roughness,2.2,24,N),ua(Mt.ao,2.2,24,N);const Nt=Vp({width:q,height:q,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});ua(Nt.albedo,3.4,24,N,!0),ua(Nt.normal,3.4,24,N),ua(Nt.roughness,3.4,24,N),ua(Nt.ao,3.4,24,N);const et=new Dr({color:9607586,map:ft.albedo,normalMap:ft.normal,normalScale:new De(.32,.32),roughnessMap:ft.roughness,roughness:.38,metalness:0,aoMap:ft.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Wn}),gt=new Dr({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Wn}),xt=new Dr({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new re(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Wn}),Xt=()=>{const Ct=[],jt=new J(0,1,0);let te=new J(1,0,0);for(let Ut=0;Ut<=St;Ut+=1){const Tn=Ut/St,yi=lt.getPointAt(Tn),Ee=Tn===1?yi.clone().sub(lt.getPointAt(Tn-.001)).normalize():lt.getPointAt(Tn+.001).sub(yi).normalize();let we=new J().crossVectors(Ee,jt).normalize();we.lengthSq()<1e-4&&(we=te.clone()),we.dot(te)<0&&we.multiplyScalar(-1),te=we.clone();const vn=new J().crossVectors(we,Ee).normalize();Ct.push({pt:yi,right:we,up:vn,t:Tn})}const Qt=(Ut,Tn,yi=!1)=>{const Ee=[],we=[],vn=[];for(let Te=0;Te<=St;Te+=1){const Ln=Ct[Te],mi=Ut(Ln),si=Tn(Ln);Ee.push(mi.x,mi.y,mi.z,si.x,si.y,si.z),we.push(0,Ln.t,1,Ln.t)}for(let Te=0;Te<St;Te+=1){const Ln=Te*2,mi=Ln+1,si=Ln+2,Ei=Ln+3;yi?vn.push(Ln,si,mi,si,Ei,mi):vn.push(Ln,mi,si,si,mi,Ei)}const In=new Ki;In.setAttribute("position",new ii(Ee,3));const Mi=new ii(we,2);return In.setAttribute("uv",Mi),In.setAttribute("uv2",Mi.clone()),In.setIndex(vn),In.computeVertexNormals(),In},Bt=sx*.5,ce=Hp*.5,be=Qt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ce)).add(Ut.right.clone().multiplyScalar(-Bt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ce)).add(Ut.right.clone().multiplyScalar(Bt))),Ze=Qt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce)).add(Ut.right.clone().multiplyScalar(-Bt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce)).add(Ut.right.clone().multiplyScalar(Bt)),!0),Xe=Qt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ce)).add(Ut.right.clone().multiplyScalar(-Bt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce)).add(Ut.right.clone().multiplyScalar(-Bt)),!0),Dn=Qt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ce)).add(Ut.right.clone().multiplyScalar(Bt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce)).add(Ut.right.clone().multiplyScalar(Bt))),ai=.08,pn=.015,We=Qt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce-ai)).add(Ut.right.clone().multiplyScalar(-Bt+pn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce)).add(Ut.right.clone().multiplyScalar(-Bt+pn)),!0),Ye=Qt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce-ai)).add(Ut.right.clone().multiplyScalar(Bt-pn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce)).add(Ut.right.clone().multiplyScalar(Bt-pn)),!1),dn=.22,Un=.018,mn=Qt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ce)).add(Ut.right.clone().multiplyScalar(-Bt+Un)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ce+dn)).add(Ut.right.clone().multiplyScalar(-Bt+Un)),!0),Si=Qt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ce)).add(Ut.right.clone().multiplyScalar(Bt-Un)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-ce+dn)).add(Ut.right.clone().multiplyScalar(Bt-Un)),!1),Hi=.14,pi=Qt(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce-.05)).add(Ut.right.clone().multiplyScalar(-Hi)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(ce-.05)).add(Ut.right.clone().multiplyScalar(Hi)),!0);return{floorGeo:be,ceilGeo:Ze,leftGeo:Xe,rightGeo:Dn,leftSkirtGeo:mn,rightSkirtGeo:Si,trackRailGeo:pi,leftCrownGeo:We,rightCrownGeo:Ye}},{floorGeo:Kt,ceilGeo:ne,leftGeo:on,rightGeo:xe,leftSkirtGeo:Me,rightSkirtGeo:Be,trackRailGeo:pe,leftCrownGeo:hn,rightCrownGeo:V}=Xt(),tn=new ze(Kt,et),Re=new ze(ne,xt),Ne=new ze(on,gt),Wt=new ze(xe,gt),I=new Dr({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),E=new ps({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Wn}),Z=new ze(Me,E),mt=new ze(Be,E);Z.receiveShadow=!0,mt.receiveShadow=!0;const yt=new ze(hn,E),dt=new ze(V,E);yt.receiveShadow=!1,dt.receiveShadow=!1;const qt=new Dr({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Wn}),wt=new ze(pe,qt);wt.receiveShadow=!1,tn.receiveShadow=!0,tn.castShadow=!0,Re.receiveShadow=!0,Re.castShadow=!0,Ne&&(Ne.receiveShadow=!0,Ne.castShadow=!0),Wt&&(Wt.receiveShadow=!0,Wt.castShadow=!0),P.add(tn),P.add(Re),Ne&&P.add(Ne),Wt&&P.add(Wt),P.add(Z),P.add(mt),P.add(yt),P.add(dt),P.add(wt);const ee=new J(0,1,0),ae=new fn,bt=new fn,Tt=new fn;P.add(ae),P.add(bt),P.add(Tt);const Lt=new Yu(16773598,$?16:24,34,Math.PI/8.4,.44,2);Lt.target=ae,Lt.castShadow=!$,Lt.castShadow&&(Lt.shadow.mapSize.width=2048,Lt.shadow.mapSize.height=2048,Lt.shadow.bias=-35e-5,Lt.shadow.normalBias=.012,Lt.shadow.camera.near=.4,Lt.shadow.camera.far=34),P.add(Lt);const Ot=new Yu(12571903,$?6:9,34,Math.PI/6.5,.68,2);Ot.target=bt,Ot.castShadow=!1,P.add(Ot);const Pt=new Yu(14083583,$?5:7,28,Math.PI/7.8,.6,2);Pt.target=Tt,Pt.castShadow=!1,P.add(Pt);const me=new fn,Y=new fn;P.add(me),P.add(Y);const Et=new Jp(16774374,0);if(Et.target=me,Et.castShadow=!$,Et.castShadow){Et.shadow.mapSize.width=4096,Et.shadow.mapSize.height=4096,Et.shadow.bias=-2e-4,Et.shadow.normalBias=.005;const Ct=320;Et.shadow.camera.left=-Ct,Et.shadow.camera.right=Ct,Et.shadow.camera.top=Ct,Et.shadow.camera.bottom=-Ct,Et.shadow.camera.near=1,Et.shadow.camera.far=1200}P.add(Et);const Rt=new Jp(9090280,0);Rt.target=Y,P.add(Rt),Kt.computeBoundingBox(),Kt.computeBoundingSphere(),ne.computeBoundingBox(),ne.computeBoundingSphere(),on.computeBoundingBox(),on.computeBoundingSphere(),xe.computeBoundingBox(),xe.computeBoundingSphere();const At=l.some(Ct=>Ct.installation?.mount_type==="continuous_led_wall"||Ct.installation?.mount_type==="jutting_half_wall")?l:$?l.filter((Ct,jt)=>jt%2===0):l,ht=[],zt=[],se=[],Ve=[],Oe=[],An=[],Bi=[],vs=-1,ga=Ct=>{if(!Ct.paused&&Ct.currentTime>0)return;const jt=Ct.play();jt&&typeof jt.catch=="function"&&jt.catch(()=>{})},ir=setInterval(()=>{let Ct=!0;An.forEach(jt=>{(jt.paused||jt.readyState<2)&&(Ct=!1,ga(jt))}),Ct&&An.length>0&&clearInterval(ir)},500);Oe.push(()=>clearInterval(ir));const xs=new nr(1,1,.2),Ss=new za(.82,.82),Qi=new Dr({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),ys=(Ct,jt)=>{const Qt=document.createElement("canvas");Qt.width=512,Qt.height=512;const Bt=Qt.getContext("2d");Bt.clearRect(0,0,512,512);const ce=M.get(jt);if(ce)try{_2(Bt,ce,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const Ye=new Bo(Qt);return Ye.colorSpace=Zn,Ye}catch(Ye){console.warn(`Invalid glyph canonical sentence for panel '${jt}': '${ce}'. Falling back to procedural glyph.`,Ye)}const be=512/2,Ze=512/2,Xe=Ct*137.508;Bt.fillStyle="rgba(6,14,24,0.7)",Bt.beginPath(),Bt.arc(be,Ze,512*.42,0,Math.PI*2),Bt.fill(),Bt.strokeStyle="rgba(102,221,255,0.95)",Bt.lineWidth=2.5,Bt.lineCap="round",Bt.beginPath(),Bt.arc(be,Ze,512*.38,0,Math.PI*2),Bt.stroke();const Dn=3+Ct%4;for(let Ye=0;Ye<Dn;Ye++){const dn=Ye/Dn*Math.PI*2+Xe,Un=512*.08,mn=512*.32;Bt.beginPath(),Bt.moveTo(be+Math.cos(dn)*Un,Ze+Math.sin(dn)*Un),Bt.lineTo(be+Math.cos(dn)*mn,Ze+Math.sin(dn)*mn),Bt.stroke()}const ai=2+Ct%3;for(let Ye=0;Ye<ai;Ye++){const dn=512*(.15+Ye*.09),Un=Xe+Ye*1.2;Bt.beginPath(),Bt.arc(be,Ze,dn,Un,Un+Math.PI*(.4+Ct%3*.2)),Bt.stroke()}Bt.fillStyle="rgba(102,221,255,0.85)";const pn=3+Ct%5;for(let Ye=0;Ye<pn;Ye++){const dn=Xe+Ye/pn*Math.PI*2,Un=512*(.2+Ye%3*.06);Bt.beginPath(),Bt.arc(be+Math.cos(dn)*Un,Ze+Math.sin(dn)*Un,4,0,Math.PI*2),Bt.fill()}Bt.strokeStyle="rgba(102,221,255,0.5)",Bt.lineWidth=1.5,Bt.beginPath(),Bt.arc(be,Ze,512*.12,0,Math.PI*2),Bt.stroke(),Bt.fillStyle="rgba(102,221,255,0.95)",Bt.beginPath(),Bt.arc(be,Ze,6,0,Math.PI*2),Bt.fill();const We=new Bo(Qt);return We.colorSpace=Zn,We},zi=(Ct,jt)=>{const te=document.createElement("canvas");te.width=1024,te.height=640;const Qt=te.getContext("2d");Qt.fillStyle="rgba(8,12,18,0.88)",Qt.beginPath(),Qt.roundRect(16,16,992,608,24),Qt.fill(),Qt.strokeStyle="rgba(102,221,255,0.25)",Qt.lineWidth=2,Qt.beginPath(),Qt.roundRect(16,16,992,608,24),Qt.stroke(),Qt.fillStyle="rgba(102,221,255,0.95)",Qt.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",cx(Qt,Ct.toUpperCase(),60,100,900,58),Qt.strokeStyle="rgba(102,221,255,0.3)",Qt.lineWidth=2,Qt.beginPath(),Qt.moveTo(60,180),Qt.lineTo(960,180),Qt.stroke(),Qt.fillStyle="rgba(220,230,240,0.9)",Qt.font="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",cx(Qt,jt,60,230,900,42);const Bt=new Bo(te);return Bt.colorSpace=Zn,Bt},Rn=()=>{const jt=document.createElement("canvas");jt.width=512,jt.height=512;const te=jt.getContext("2d"),Qt=512/2,Bt=512/2;te.beginPath(),te.arc(Qt,Bt,512*.42,0,Math.PI*2),te.fillStyle="rgba(6,14,24,0.7)",te.fill(),te.strokeStyle="rgba(255,170,51,0.9)",te.lineWidth=6,te.beginPath(),te.arc(Qt,Bt,512*.38,0,Math.PI*2),te.stroke();const ce=8;for(let Ze=0;Ze<ce;Ze++){const Xe=Ze/ce*Math.PI*2-Math.PI/2;te.strokeStyle=`rgba(255,${170+Math.round(Math.sin(Ze)*40)},51,0.8)`,te.lineWidth=4,te.beginPath(),te.moveTo(Qt+Math.cos(Xe)*512*.12,Bt+Math.sin(Xe)*512*.12),te.lineTo(Qt+Math.cos(Xe)*512*.34,Bt+Math.sin(Xe)*512*.34),te.stroke();const Dn=Qt+Math.cos(Xe)*512*.34,ai=Bt+Math.sin(Xe)*512*.34,pn=512*.06;te.beginPath(),te.moveTo(Dn,ai),te.lineTo(Dn-pn*Math.cos(Xe-.4),ai-pn*Math.sin(Xe-.4)),te.moveTo(Dn,ai),te.lineTo(Dn-pn*Math.cos(Xe+.4),ai-pn*Math.sin(Xe+.4)),te.stroke()}te.beginPath(),te.arc(Qt,Bt,512*.06,0,Math.PI*2),te.fillStyle="rgba(255,200,80,0.95)",te.fill();const be=new Bo(jt);return be.colorSpace=Zn,be},Cn=Ct=>{const jt=hs(Ct),te=lt.getPointAt(jt),Bt=lt.getPointAt(hs(jt+.002)).clone().sub(te).normalize();let ce=new J().crossVectors(Bt,ee).normalize();ce.lengthSq()<1e-4&&(ce=new J(1,0,0));const be=new J().crossVectors(ce,Bt).normalize();return{point:te,tangent:Bt,right:ce,up:be}};lt.getLength();const fi=[],_a=new za(Gp*2,Gp*2),ar=new za(T2,b2);At.forEach((Ct,jt)=>{const te=Ct.installation,Qt=hs(te?.placement_t??.05+jt/At.length),{point:Bt,right:ce,up:be}=Cn(Qt),Ze=te?.side==="left",ai=(te?.side==="center"?0:Ze?-1:1)*sx*.12,pn=Bt.clone().add(ce.clone().multiplyScalar(ai)).add(be.clone().multiplyScalar(.5)),We=ys(jt,Ct.id);zt.push(We);const Ye=new ps({color:16777215,emissive:new re(ox),emissiveIntensity:1.2,map:We,emissiveMap:We,transparent:!0,alphaTest:.05,side:Wn,depthWrite:!1});se.push(Ye);const dn=new ze(_a,Ye);dn.position.copy(pn),dn.userData={panel:Ct,isGlyph:!0},ht.push(dn),P.add(dn);const Un=S.get(Ct.id),mn=Un?.label||Ct.title,Si=Un?.note||Ct.body,Hi=zi(mn,Si);zt.push(Hi);const pi=new ps({color:16777215,emissive:new re(1122867),emissiveIntensity:.3,map:Hi,transparent:!0,opacity:0,side:Wn,depthWrite:!0});se.push(pi);const Ut=new ze(ar,pi),Tn=new Fo;Tn.add(Ut),Tn.position.copy(pn),Tn.scale.setScalar(.01),Tn.visible=!1,P.add(Tn);const yi=new sc(ox,$?6:12,20,1.5);yi.position.copy(pn),P.add(yi),fi.push({mesh:dn,card:Tn,panel:Ct,progress:Qt,baseY:pn.y,expanded:!1,expandT:0}),t.current.push({meta:Ct,progress:Qt})});let Sn=!1,hi=0;const wi=new J,Ua=new J,ln=new J,Ji=32;for(let Ct=0;Ct<Ji;Ct++)ln.add(lt.getPointAt(Ct/Ji));ln.divideScalar(Ji);const Xa=new za(Hu*2,Hu*2),R=Rn();zt.push(R);const W=new ps({color:16777215,emissive:new re(lx),emissiveIntensity:1.4,map:R,emissiveMap:R,transparent:!0,alphaTest:.05,side:Wn,depthWrite:!1});se.push(W);const{point:ct,up:st}=Cn(R2),tt=ct.clone().add(st.clone().multiplyScalar(1)),Dt=new ze(Xa,W);Dt.position.copy(tt),Dt.userData={isExitGlyph:!0},P.add(Dt);const Gt=new za(Hu*5,Hu*5),It=new cc({visible:!1,side:Wn}),Vt=new ze(Gt,It);Vt.position.copy(tt),Vt.userData={isExitGlyph:!0},ht.push(Vt),P.add(Vt);const Jt=new sc(lx,$?6:12,20,1.5);Jt.position.copy(tt),P.add(Jt);const le=new nh($?1.25:1.6,26,26);Ve.push(le);const ue=new ps({color:16764788,emissive:new re(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});se.push(ue);const kt=ct.clone().add(st.clone().multiplyScalar(Hp*.52+.32)),fe=new ze(le,ue);fe.position.copy(kt),fe.userData={isReentryDot:!0},ht.push(fe),P.add(fe);const cn=new eh($?1.75:2.2,$?2.35:2.95,52);Ve.push(cn);const en=new cc({color:16761948,transparent:!0,opacity:0,side:Wn,depthWrite:!1});se.push(en);const Ce=new ze(cn,en);Ce.position.copy(kt),P.add(Ce);const yn=new sc(16761948,0,$?34:44,2);yn.position.copy(kt),P.add(yn);const Yt=new lS,Yn=new De,he=Ct=>{An.forEach(ga);const jt=j.domElement.getBoundingClientRect();Yn.x=(Ct.clientX-jt.left)/jt.width*2-1,Yn.y=-((Ct.clientY-jt.top)/jt.height)*2+1,Yt.setFromCamera(Yn,k);const te=Yt.intersectObjects(ht,!1);if(te.length>0){const Qt=te[0].object;if(Qt.userData.isReentryDot&&Sn){Sn=!1,D(!1);return}if(Qt.userData.isExitGlyph){if(Sn=!Sn,D(Sn),Sn){const be=k.position.clone().clone().sub(ln).normalize();wi.copy(ln).add(be.multiplyScalar(zu)),wi.y=ln.y+zu*.35,Ua.copy(ln)}fi.forEach(ce=>{ce.expanded=!1});return}if(Sn){Sn=!1,D(!1);return}const Bt=Qt.userData.panel;if(Bt){const ce=fi.find(be=>be.panel.id===Bt.id);ce&&(ce.expanded?ce.expanded=!1:(fi.forEach(be=>{be.expanded=!1}),ce.expanded=!0))}}else Sn?(Sn=!1,D(!1)):fi.forEach(Qt=>{Qt.expanded=!1})};j.domElement.addEventListener("pointerdown",he);const wn={x:0,y:0},Bn={x:0,y:0},Di=Ct=>{if(L||$)return;const jt=j.domElement.getBoundingClientRect(),te=(Ct.clientX-jt.left)/jt.width,Qt=(Ct.clientY-jt.top)/jt.height;wn.x=(te-.5)*2,wn.y=(Qt-.5)*2},di=()=>{wn.x=0,wn.y=0};j.domElement.addEventListener("pointermove",Di,{passive:!0}),j.domElement.addEventListener("pointerleave",di,{passive:!0});const ke=Ct=>{Ct.preventDefault(),!Sn&&(An.forEach(ga),i.current=hs(i.current+vs*Ct.deltaY*75e-6))};j.domElement.addEventListener("wheel",ke,{passive:!1});const Mn=Ct=>{if((Ct.key==="o"||Ct.key==="O")&&(Sn=!Sn,D(Sn),Sn)){const te=k.position.clone().clone().sub(ln).normalize();wi.copy(ln).add(te.multiplyScalar(zu)),wi.y=ln.y+zu*.35,Ua.copy(ln)}};window.addEventListener("keydown",Mn);let zn=0;const En=Ct=>{An.forEach(ga),zn=Ct.touches[0]?.clientY??0},Ui=Ct=>{if(Ct.preventDefault(),Sn)return;const jt=Ct.touches[0]?.clientY??zn,te=zn-jt;i.current=hs(i.current+vs*te*11e-5),zn=jt};j.domElement.addEventListener("touchstart",En,{passive:!0}),j.domElement.addEventListener("touchmove",Ui,{passive:!1});const $i=()=>{U&&(k.aspect=U.clientWidth/U.clientHeight,k.updateProjectionMatrix(),j.setSize(U.clientWidth,U.clientHeight))};window.addEventListener("resize",$i);const La=new fn,fc=new cS,Jo=new J,sr=new J,ta=new J;let Hr=l.length>0?l[0].id:"";const Gr=()=>{if(w)return;const Ct=fc.getDelta(),jt=fc.getElapsedTime();s.current=S2(s.current,i.current,L?2.8:4.8,Ct),Bn.x+=(wn.x-Bn.x)*.07,Bn.y+=(wn.y-Bn.y)*.07;const te=s.current,Qt=hs(te+($?.008:.01)),Bt=lt.getPointAt(te),ce=lt.getPointAt(Qt),be=lt.getPointAt(hs(te+.002)).sub(lt.getPointAt(hs(te-.002))).normalize();let Ze=new J().crossVectors(be,ee).normalize();Ze.lengthSq()<1e-4&&(Ze=new J(1,0,0));const Xe=new J().crossVectors(Ze,be).normalize(),Dn=Ze.clone().multiplyScalar(Bn.x*($?0:.62)).add(Xe.clone().multiplyScalar(Bn.y*($?0:.42))),ai=L?new J:Xe.clone().multiplyScalar(Math.sin(jt*.45)*.12),pn=1/C2;Sn&&hi<1?hi=Math.min(1,hi+pn*Ct):!Sn&&hi>0&&(hi=Math.max(0,hi-pn*Ct));const We=hi<.5?4*hi*hi*hi:1-Math.pow(-2*hi+2,3)/2;if(me.position.copy(ln),Y.position.copy(ln),Et.position.set(ln.x+500,ln.y+600,ln.z-300),Rt.position.set(ln.x-400,ln.y+150,ln.z+350),We>.01){P.fog instanceof lc&&(P.fog.near=Ai.lerp(38,9999,We),P.fog.far=Ai.lerp(230,1e4,We));const Ee=new re(987671),we=new re(395794);P.background.copy(Ee).lerp(we,We),O.intensity=Ai.lerp(.05,.08,We),F.intensity=Ai.lerp(.08,.12,We),Et.intensity=Ai.lerp(0,$?2.2:3.5,We),Rt.intensity=Ai.lerp(0,$?.25:.4,We),j.toneMappingExposure=Ai.lerp($?.76:.72,$?1:1.1,We),[et,gt].forEach(vn=>{vn.emissive.set(3359829),vn.emissiveIntensity=.12*We}),xt.color.set(0).lerp(new re(16777215),We),xt.toneMapped=We>.5,xt.fog=We>.5,xt.emissive.set(16777215),xt.emissiveIntensity=Ai.lerp(1,.15,We),xt.envMapIntensity=Ai.lerp(0,.1,We)}else O.intensity=.05,F.intensity=.08,Et.intensity=0,Rt.intensity=0,j.toneMappingExposure=$?.76:.72,P.background.set(987671),[et,gt].forEach(Ee=>{Ee.emissive.set(0),Ee.emissiveIntensity=0}),xt.color.set(0),xt.toneMapped=!1,xt.fog=!1,xt.emissive.set(16777215),xt.emissiveIntensity=1,xt.envMapIntensity=0;const Ye=Xe.clone().multiplyScalar(-Hp*.2),dn=Bt.clone().add(Ye).add(Dn).add(ai),Un=ce.clone().add(Ye).add(Dn.multiplyScalar(.22));if(We>.99)k.position.copy(wi),k.lookAt(Ua);else if(We>.001){k.position.lerpVectors(dn,wi,We);const Ee=Un.clone().lerp(Ua,We);k.lookAt(Ee)}else k.position.copy(dn),La.position.copy(k.position),La.lookAt(Un),k.quaternion.slerp(La.quaternion,1-Math.exp(-8.1*Ct));const mn=.94+Math.sin(jt*.23)*.06,Si=ce.clone().add(Ye);Lt.position.copy(k.position).add(Xe.clone().multiplyScalar(2.9)).add(Ze.clone().multiplyScalar(2.1)).add(be.clone().multiplyScalar(-2.2)),ae.position.copy(Si).add(Ze.clone().multiplyScalar(2.5)).add(Xe.clone().multiplyScalar(-.9)),Lt.intensity=($?14:21)*mn,Ot.position.copy(k.position).add(Xe.clone().multiplyScalar(2)).add(Ze.clone().multiplyScalar(-2.4)).add(be.clone().multiplyScalar(-1.1)),bt.position.copy(Si).add(Ze.clone().multiplyScalar(-2)).add(Xe.clone().multiplyScalar(-1.4)),Ot.intensity=($?5:8)*mn,Pt.position.copy(k.position).add(Xe.clone().multiplyScalar(1.4)).add(be.clone().multiplyScalar(2.8)).add(Ze.clone().multiplyScalar(.6)),Tt.position.copy(Si).add(Xe.clone().multiplyScalar(-.8)),Pt.intensity=($?4:6.2)*mn,ht.forEach(Ee=>{const we=Ee.userData;if(!we||!we.shading||!we.material)return;const vn=we.shading,In=we.material,Mi=we.video,Te=we;let Ln=1;vn.lighting?.flicker_sync&&Mi&&Mi.readyState>=3&&(Ln=.88+Math.sin(jt*22)*.1*Math.sin(jt*6.7));let mi=1;if(vn.movement_reaction?.type==="viewing_angle_fade"){Jo.set(0,0,0),Ee.getWorldPosition(Jo),sr.set(0,0,1).applyQuaternion(Ee.quaternion),ta.copy(k.position).sub(Jo).normalize();const Ei=sr,va=ta,rr=Math.max(0,Ei.dot(va)),Vr=vn.movement_reaction.cone_angle_degrees===60?3:1.5;mi=Math.pow(rr,Vr)}const si=we.baseEmissive*Ln*mi;if(In.emissiveIntensity=si,Te.bounceLights&&Te.bounceLights.length>0){const Ei=Te.bounceSampleCtx,va=Te.bounceSampleCanvas;if(Mi&&Ei&&va&&(Te.bounceNextSampleAt??0)<=jt){const Wa=D2(Mi,va,Ei);if(Wa){Te.bounceTargetColor||(Te.bounceTargetColor=Wa.color.clone());const $o=Wa.color.clone().lerp(new re(1,.97,.93),.18);Te.bounceTargetColor.copy($o);const tl=Ai.clamp(.22+Wa.luminance*1.9,.22,2.25);Te.bounceTargetIntensity=(Te.bounceBaseIntensity??5)*tl*(.25+si*1.25)}Te.bounceNextSampleAt=jt+1/($?2:4)}else Mi||(Te.bounceTargetIntensity=(Te.bounceBaseIntensity??5)*(.22+si*1.1));const rr=Te.bounceTargetIntensity??0,Vr=Te.bounceCurrentIntensity??0;Te.bounceCurrentIntensity=Ai.lerp(Vr,rr,1-Math.exp(-6.2*Ct)),Te.bounceCurrentColor||(Te.bounceCurrentColor=(Te.bounceTargetColor??new re(1,1,1)).clone()),Te.bounceTargetColor&&Te.bounceCurrentColor.lerp(Te.bounceTargetColor,1-Math.exp(-5.4*Ct)),Te.bounceLights.forEach((Wa,$o)=>{const tl=Math.max(1,Te.bounceLights.length-1),rh=1-$o/tl*.34;Wa.color.copy(Te.bounceCurrentColor),Wa.intensity=(Te.bounceCurrentIntensity??0)*rh})}}),Bi.forEach(({mesh:Ee,basePosition:we,strength:vn})=>{const In=Ee.parent;if(!In)return;const Mi=In.worldToLocal(k.position.clone()),Te=Ai.clamp(Mi.x*.008,-.18,.18)*vn,Ln=Ai.clamp(Mi.y*.006,-.14,.14)*vn;Ee.position.x=we.x+Te,Ee.position.y=we.y+Ln}),fi.forEach((Ee,we)=>{const{mesh:vn,card:In}=Ee;vn.lookAt(k.position);const Mi=we*.7,Te=Ee.baseY+Math.sin(jt*M2+Mi)*y2;vn.position.y=Te,vn.rotateZ(E2*Ct);const Ln=vn.material;Ln.emissiveIntensity=1+Math.sin(jt*2+we)*.4;const mi=Ee.expanded?1:0,si=1/A2;Ee.expandT<mi?Ee.expandT=Math.min(1,Ee.expandT+si*Ct):Ee.expandT>mi&&(Ee.expandT=Math.max(0,Ee.expandT-si*Ct));const Ei=Ee.expandT,va=Ei<.5?4*Ei*Ei*Ei:1-Math.pow(-2*Ei+2,3)/2;if(va>.001){In.visible=!0,In.position.copy(vn.position),In.position.y-=Gp+.3,In.lookAt(k.position),In.scale.setScalar(va);const rr=In.children[0].material;rr.opacity=va}else In.visible=!1;Ln.opacity=1-va*.4});const Hi=tt.y+Math.sin(jt*.8)*.35;Dt.lookAt(k.position),Dt.position.y=Hi,Dt.rotateZ(.15*Ct),W.emissiveIntensity=1.2+Math.sin(jt*1.5)*.5,Vt.lookAt(k.position),Vt.position.y=Hi;const pi=.72+Math.sin(jt*2.35)*.28,Ut=Ai.smoothstep(We,.2,.95);fe.visible=Ut>.001,Ce.visible=Ut>.001,fe.scale.setScalar(.88+pi*.28),ue.emissiveIntensity=Ut*(.48+pi*.45),yn.intensity=Ut*($?4.6:7.4)*pi,Ce.lookAt(k.position),Ce.scale.setScalar(.95+pi*.18),en.opacity=Ut*(.2+pi*.32);let Tn=t.current[0]?.meta.id??(l.length>0?l[0].id:""),yi=Number.POSITIVE_INFINITY;t.current.forEach(Ee=>{let we=Math.abs(te-Ee.progress);we>.5&&(we=1-we),we<yi&&(yi=we,Tn=Ee.meta.id)}),Tn!==Hr&&(Hr=Tn,p(Tn)),j.render(P,k),requestAnimationFrame(Gr)};Gr(),B=()=>{j.domElement.removeEventListener("pointerdown",he),j.domElement.removeEventListener("pointermove",Di),j.domElement.removeEventListener("pointerleave",di),j.domElement.removeEventListener("wheel",ke),j.domElement.removeEventListener("touchstart",En),j.domElement.removeEventListener("touchmove",Ui),window.removeEventListener("resize",$i),window.removeEventListener("keydown",Mn),U.contains(j.domElement)&&U.removeChild(j.domElement),ht.forEach(Ct=>{const jt=Ct.userData?.video;jt&&(jt.pause(),jt.src="",jt.load())}),An.forEach(Ct=>{Ct.pause(),Ct.src="",Ct.load()}),Oe.forEach(Ct=>Ct()),zt.forEach(Ct=>Ct.dispose?.()),Ve.forEach(Ct=>Ct.dispose()),_a.dispose(),ar.dispose(),ft.albedo.dispose(),ft.normal.dispose(),ft.roughness.dispose(),ft.ao.dispose(),Mt.albedo.dispose(),Mt.normal.dispose(),Mt.roughness.dispose(),Mt.ao.dispose(),Nt.albedo.dispose(),Nt.normal.dispose(),Nt.roughness.dispose(),Nt.ao.dispose(),se.forEach(Ct=>Ct.dispose()),K.texture.dispose(),K.dispose(),it.dispose(),et.dispose(),gt.dispose(),I.dispose(),xt.dispose(),Qi.dispose(),xs.dispose(),Ss.dispose(),Kt.dispose(),ne.dispose(),on.dispose(),xe.dispose(),Me.dispose(),Be.dispose(),hn.dispose(),V.dispose(),pe.dispose(),E.dispose(),qt.dispose(),j.dispose()}})(),()=>{w=!0,B()}},[l,M,S]),jn.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[jn.jsx("div",{ref:r,className:"absolute inset-0"}),_||g?jn.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:_?"Laster mediepaneler ...":g}):null,T?null:jn.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[jn.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:"INTELLIGENSPARTIET"}),jn.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:["Aktiv installasjon: ",S.get(C.id)?.label||C.title]})]}),T?jn.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[jn.jsx("style",{children:`
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
            `}),jn.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:"INTELLIGENSPARTET"}),jn.jsx("a",{href:"#videos",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:jn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:"Videoer"})}),jn.jsx("a",{href:"#signatures",className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:jn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:"Signaturer"})}),jn.jsx("a",{href:"#news",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:jn.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:"AI-nyheter"})})]}):null]})}function L2(){return jn.jsx("div",{className:"min-h-screen bg-[#080604]",children:jn.jsx(U2,{})})}_M.createRoot(document.getElementById("root")).render(jn.jsx(ti.StrictMode,{children:jn.jsx(L2,{})}));
