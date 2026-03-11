(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var op={exports:{}},Xl={};var ov;function fM(){if(ov)return Xl;ov=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Xl.Fragment=t,Xl.jsx=i,Xl.jsxs=i,Xl}var lv;function hM(){return lv||(lv=1,op.exports=fM()),op.exports}var An=hM(),lp={exports:{}},_e={};var cv;function dM(){if(cv)return _e;cv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(P,Y,pt){this.props=P,this.context=Y,this.refs=M,this.updater=pt||E}S.prototype.isReactComponent={},S.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=S.prototype;function O(P,Y,pt){this.props=P,this.context=Y,this.refs=M,this.updater=pt||E}var U=O.prototype=new C;U.constructor=O,w(U,S.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function z(){}var H={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function N(P,Y,pt){var Et=pt.ref;return{$$typeof:r,type:P,key:Y,ref:Et!==void 0?Et:null,props:pt}}function Q(P,Y){return N(P.type,Y,P.props)}function B(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function K(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(pt){return Y[pt]})}var st=/\/+/g;function nt(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):Y.toString(36)}function j(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(z,z):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,Y,pt,Et,Pt){var et=typeof P;(et==="undefined"||et==="boolean")&&(P=null);var _t=!1;if(P===null)_t=!0;else switch(et){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(P.$$typeof){case r:case t:_t=!0;break;case _:return _t=P._init,L(_t(P._payload),Y,pt,Et,Pt)}}if(_t)return Pt=Pt(P),_t=Et===""?"."+nt(P,0):Et,F(Pt)?(pt="",_t!=null&&(pt=_t.replace(st,"$&/")+"/"),L(Pt,Y,pt,"",function(Gt){return Gt})):Pt!=null&&(B(Pt)&&(Pt=Q(Pt,pt+(Pt.key==null||P&&P.key===Pt.key?"":(""+Pt.key).replace(st,"$&/")+"/")+_t)),Y.push(Pt)),1;_t=0;var yt=Et===""?".":Et+":";if(F(P))for(var Ft=0;Ft<P.length;Ft++)Et=P[Ft],et=yt+nt(Et,Ft),_t+=L(Et,Y,pt,et,Pt);else if(Ft=y(P),typeof Ft=="function")for(P=Ft.call(P),Ft=0;!(Et=P.next()).done;)Et=Et.value,et=yt+nt(Et,Ft++),_t+=L(Et,Y,pt,et,Pt);else if(et==="object"){if(typeof P.then=="function")return L(j(P),Y,pt,Et,Pt);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return _t}function D(P,Y,pt){if(P==null)return P;var Et=[],Pt=0;return L(P,Et,"","",function(et){return Y.call(pt,et,Pt++)}),Et}function q(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(pt){(P._status===0||P._status===-1)&&(P._status=1,P._result=pt)},function(pt){(P._status===0||P._status===-1)&&(P._status=2,P._result=pt)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var tt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ut={map:D,forEach:function(P,Y,pt){D(P,function(){Y.apply(this,arguments)},pt)},count:function(P){var Y=0;return D(P,function(){Y++}),Y},toArray:function(P){return D(P,function(Y){return Y})||[]},only:function(P){if(!B(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return _e.Activity=x,_e.Children=ut,_e.Component=S,_e.Fragment=i,_e.Profiler=l,_e.PureComponent=O,_e.StrictMode=s,_e.Suspense=m,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,_e.__COMPILER_RUNTIME={__proto__:null,c:function(P){return H.H.useMemoCache(P)}},_e.cache=function(P){return function(){return P.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(P,Y,pt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Et=w({},P.props),Pt=P.key;if(Y!=null)for(et in Y.key!==void 0&&(Pt=""+Y.key),Y)!b.call(Y,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Y.ref===void 0||(Et[et]=Y[et]);var et=arguments.length-2;if(et===1)Et.children=pt;else if(1<et){for(var _t=Array(et),yt=0;yt<et;yt++)_t[yt]=arguments[yt+2];Et.children=_t}return N(P.type,Pt,Et)},_e.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},_e.createElement=function(P,Y,pt){var Et,Pt={},et=null;if(Y!=null)for(Et in Y.key!==void 0&&(et=""+Y.key),Y)b.call(Y,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Pt[Et]=Y[Et]);var _t=arguments.length-2;if(_t===1)Pt.children=pt;else if(1<_t){for(var yt=Array(_t),Ft=0;Ft<_t;Ft++)yt[Ft]=arguments[Ft+2];Pt.children=yt}if(P&&P.defaultProps)for(Et in _t=P.defaultProps,_t)Pt[Et]===void 0&&(Pt[Et]=_t[Et]);return N(P,et,Pt)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(P){return{$$typeof:d,render:P}},_e.isValidElement=B,_e.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:q}},_e.memo=function(P,Y){return{$$typeof:p,type:P,compare:Y===void 0?null:Y}},_e.startTransition=function(P){var Y=H.T,pt={};H.T=pt;try{var Et=P(),Pt=H.S;Pt!==null&&Pt(pt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(z,tt)}catch(et){tt(et)}finally{Y!==null&&pt.types!==null&&(Y.types=pt.types),H.T=Y}},_e.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},_e.use=function(P){return H.H.use(P)},_e.useActionState=function(P,Y,pt){return H.H.useActionState(P,Y,pt)},_e.useCallback=function(P,Y){return H.H.useCallback(P,Y)},_e.useContext=function(P){return H.H.useContext(P)},_e.useDebugValue=function(){},_e.useDeferredValue=function(P,Y){return H.H.useDeferredValue(P,Y)},_e.useEffect=function(P,Y){return H.H.useEffect(P,Y)},_e.useEffectEvent=function(P){return H.H.useEffectEvent(P)},_e.useId=function(){return H.H.useId()},_e.useImperativeHandle=function(P,Y,pt){return H.H.useImperativeHandle(P,Y,pt)},_e.useInsertionEffect=function(P,Y){return H.H.useInsertionEffect(P,Y)},_e.useLayoutEffect=function(P,Y){return H.H.useLayoutEffect(P,Y)},_e.useMemo=function(P,Y){return H.H.useMemo(P,Y)},_e.useOptimistic=function(P,Y){return H.H.useOptimistic(P,Y)},_e.useReducer=function(P,Y,pt){return H.H.useReducer(P,Y,pt)},_e.useRef=function(P){return H.H.useRef(P)},_e.useState=function(P){return H.H.useState(P)},_e.useSyncExternalStore=function(P,Y,pt){return H.H.useSyncExternalStore(P,Y,pt)},_e.useTransition=function(){return H.H.useTransition()},_e.version="19.2.4",_e}var uv;function cm(){return uv||(uv=1,lp.exports=dM()),lp.exports}var xn=cm(),cp={exports:{}},Wl={},up={exports:{}},fp={};var fv;function pM(){return fv||(fv=1,(function(r){function t(L,D){var q=L.length;L.push(D);t:for(;0<q;){var tt=q-1>>>1,ut=L[tt];if(0<l(ut,D))L[tt]=D,L[q]=ut,q=tt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var D=L[0],q=L.pop();if(q!==D){L[0]=q;t:for(var tt=0,ut=L.length,P=ut>>>1;tt<P;){var Y=2*(tt+1)-1,pt=L[Y],Et=Y+1,Pt=L[Et];if(0>l(pt,q))Et<ut&&0>l(Pt,pt)?(L[tt]=Pt,L[Et]=q,tt=Et):(L[tt]=pt,L[Y]=q,tt=Y);else if(Et<ut&&0>l(Pt,q))L[tt]=Pt,L[Et]=q,tt=Et;else break t}}return D}function l(L,D){var q=L.sortIndex-D.sortIndex;return q!==0?q:L.id-D.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,g=3,y=!1,E=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var D=i(p);D!==null;){if(D.callback===null)s(p);else if(D.startTime<=L)s(p),D.sortIndex=D.expirationTime,t(m,D);else break;D=i(p)}}function F(L){if(w=!1,U(L),!E)if(i(m)!==null)E=!0,z||(z=!0,K());else{var D=i(p);D!==null&&j(F,D.startTime-L)}}var z=!1,H=-1,b=5,N=-1;function Q(){return M?!0:!(r.unstable_now()-N<b)}function B(){if(M=!1,z){var L=r.unstable_now();N=L;var D=!0;try{t:{E=!1,w&&(w=!1,C(H),H=-1),y=!0;var q=g;try{e:{for(U(L),x=i(m);x!==null&&!(x.expirationTime>L&&Q());){var tt=x.callback;if(typeof tt=="function"){x.callback=null,g=x.priorityLevel;var ut=tt(x.expirationTime<=L);if(L=r.unstable_now(),typeof ut=="function"){x.callback=ut,U(L),D=!0;break e}x===i(m)&&s(m),U(L)}else s(m);x=i(m)}if(x!==null)D=!0;else{var P=i(p);P!==null&&j(F,P.startTime-L),D=!1}}break t}finally{x=null,g=q,y=!1}D=void 0}}finally{D?K():z=!1}}}var K;if(typeof O=="function")K=function(){O(B)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,nt=st.port2;st.port1.onmessage=B,K=function(){nt.postMessage(null)}}else K=function(){S(B,0)};function j(L,D){H=S(function(){L(r.unstable_now())},D)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var q=g;g=D;try{return L()}finally{g=q}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,D){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=g;g=L;try{return D()}finally{g=q}},r.unstable_scheduleCallback=function(L,D,q){var tt=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?tt+q:tt):q=tt,L){case 1:var ut=-1;break;case 2:ut=250;break;case 5:ut=1073741823;break;case 4:ut=1e4;break;default:ut=5e3}return ut=q+ut,L={id:_++,callback:D,priorityLevel:L,startTime:q,expirationTime:ut,sortIndex:-1},q>tt?(L.sortIndex=q,t(p,L),i(m)===null&&L===i(p)&&(w?(C(H),H=-1):w=!0,j(F,q-tt))):(L.sortIndex=ut,t(m,L),E||y||(E=!0,z||(z=!0,K()))),L},r.unstable_shouldYield=Q,r.unstable_wrapCallback=function(L){var D=g;return function(){var q=g;g=D;try{return L.apply(this,arguments)}finally{g=q}}}})(fp)),fp}var hv;function mM(){return hv||(hv=1,up.exports=pM()),up.exports}var hp={exports:{}},di={};var dv;function gM(){if(dv)return di;dv=1;var r=cm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return di.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,di.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},di.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},di.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},di.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},di.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},di.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},di.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},di.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},di.requestFormReset=function(m){s.d.r(m)},di.unstable_batchedUpdates=function(m,p){return m(p)},di.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},di.useFormStatus=function(){return h.H.useHostTransitionStatus()},di.version="19.2.4",di}var pv;function _M(){if(pv)return hp.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),hp.exports=gM(),hp.exports}var mv;function vM(){if(mv)return Wl;mv=1;var r=mM(),t=cm(),i=_M();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case z:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case O:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:nt(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return nt(e(n))}catch{}}return null}var j=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},tt=[],ut=-1;function P(e){return{current:e}}function Y(e){0>ut||(e.current=tt[ut],tt[ut]=null,ut--)}function pt(e,n){ut++,tt[ut]=e.current,e.current=n}var Et=P(null),Pt=P(null),et=P(null),_t=P(null);function yt(e,n){switch(pt(et,n),pt(Pt,e),pt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?D_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=D_(n),e=U_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(Et),pt(Et,e)}function Ft(){Y(Et),Y(Pt),Y(et)}function Gt(e){e.memoizedState!==null&&pt(_t,e);var n=Et.current,a=U_(n,e.type);n!==a&&(pt(Pt,e),pt(Et,a))}function ne(e){Pt.current===e&&(Y(Et),Y(Pt)),_t.current===e&&(Y(_t),Hl._currentValue=q)}var Ke,Me;function ve(e){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",Me=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+Me}var pe=!1;function me(e,n){if(!e||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ft){var lt=ft}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ft){lt=ft}e.call(xt.prototype)}}else{try{throw Error()}catch(ft){lt=ft}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ft){if(ft&&lt&&typeof ft.stack=="string")return[ft.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var G=v.split(`
`),ot=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ot.length)for(o=G.length-1,u=ot.length-1;1<=o&&0<=u&&G[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ot[u]){var gt=`
`+G[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ve(a):""}function an(e,n){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return ve("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=an(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var tn=Object.prototype.hasOwnProperty,Ae=r.unstable_scheduleCallback,Xe=r.unstable_cancelCallback,Kt=r.unstable_shouldYield,I=r.unstable_requestPaint,T=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,mt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,dt=r.unstable_NormalPriority,Xt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,Jt=r.log,ae=r.unstable_setDisableYieldValue,bt=null,Tt=null;function zt(e){if(typeof Jt=="function"&&ae(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(bt,e)}catch{}}var Ot=Math.clz32?Math.clz32:W,Ht=Math.log,ge=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ht(e)/ge|0)|0}var Ct=256,At=262144,Ut=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Mt(o):(v&=R,v!==0?u=Mt(v):a||(a=R&~e,a!==0&&(u=Mt(a))))):(R=o&~f,R!==0?u=Mt(R):v!==0?u=Mt(v):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function de(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function li(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bi(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,ot=e.hiddenUpdates;for(a=v&~a;0<a;){var gt=31-Ot(a),xt=1<<gt;R[gt]=0,G[gt]=-1;var lt=ot[gt];if(lt!==null)for(ot[gt]=null,gt=0;gt<lt.length;gt++){var ft=lt[gt];ft!==null&&(ft.lane&=-536870913)}a&=~xt}o!==0&&ji(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function ji(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function da(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function pa(e,n){var a=n&-n;return a=(a&42)!==0?1:Na(a),(a&(e.suspendedLanes|n))!==0?0:a}function Na(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ei(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:tv(e.type))}function Es(e,n){var a=D.p;try{return D.p=e,n()}finally{D.p=a}}var ci=Math.random().toString(36).slice(2),Sn="__reactFiber$"+ci,Nn="__reactProps$"+ci,ma="__reactContainer$"+ci,La="__reactEvents$"+ci,Gr="__reactListeners$"+ci,Vr="__reactHandles$"+ci,kr="__reactResources$"+ci,Oa="__reactMarker$"+ci;function Zi(e){delete e[Sn],delete e[Nn],delete e[La],delete e[Gr],delete e[Vr]}function ga(e){var n=e[Sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ma]||a[Sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=B_(e);e!==null;){if(a=e[Sn])return a;e=B_(e)}return n}e=a,a=e.parentNode}return null}function _a(e){if(e=e[Sn]||e[ma]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function mn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function A(e){var n=e[kr];return n||(n=e[kr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(e){e[Oa]=!0}var ct=new Set,it={};function at(e,n){Nt(e,n),Nt(e+"Capture",n)}function Nt(e,n){for(it[e]=n,e=0;e<n.length;e++)ct.add(n[e])}var Vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lt={},jt={};function $t(e){return tn.call(jt,e)?!0:tn.call(Lt,e)?!1:Vt.test(e)?jt[e]=!0:(Lt[e]=!0,!1)}function se(e,n,a){if($t(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ie(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=fn(e,n,""+e[n])}}function yn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Yt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cn=/[\n"\\]/g;function fe(e){return e.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xn(e,n,a,o,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?_i(e,v,xe(n)):a!=null?_i(e,v,xe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+xe(R):e.removeAttribute("name")}function Wn(e,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ie(e);return}a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ie(e)}function _i(e,n,a){n==="number"&&Yt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ui(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(j(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ie(e)}function wn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ai(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||hn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ki(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ai(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ai(e,f,n[f])}function ja(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _c=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rr(e){return Xr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var Wr=null;function or(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ia=null;function il(e){var n=_a(e);if(n&&(e=n.stateNode)){var a=e[Nn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Xn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Nn]||null;if(!u)throw Error(s(90));Xn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&yn(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ui(e,!!a.multiple,n,!1)}}}var Yr=!1;function al(e,n,a){if(Yr)return e(n,a);Yr=!0;try{var o=e(n);return o}finally{if(Yr=!1,(Za!==null||Ia!==null)&&($c(),Za&&(n=Za,e=Ia,Ia=Za=null,il(n),e)))for(n=0;n<e.length;n++)il(e[n])}}function Ts(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Nn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=!1;if(Rt)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){te=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{te=!1}var qt=null,Bt=null,ue=null;function Pe(){if(ue)return ue;var e,n=Bt,a=n.length,o,u="value"in qt?qt.value:qt.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ue=u.slice(e,1<o?1-o:void 0)}function Ye(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qe(){return!0}function fi(){return!1}function sn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qe:fi,this.isPropagationStopped=fi,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qe)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qe)},persist:function(){},isPersistent:qe}),n}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},He=sn(rn),We=x({},rn,{view:0,detail:0}),En=sn(We),Tn,Ri,Oi,Ii=x({},We,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oi&&(Oi&&e.type==="mousemove"?(Tn=e.screenX-Oi.screenX,Ri=e.screenY-Oi.screenY):Ri=Tn=0,Oi=e),Tn)},movementY:function(e){return"movementY"in e?e.movementY:Ri}}),Pi=sn(Ii),wt=x({},Ii,{dataTransfer:0}),Ln=sn(wt),Fi=x({},We,{relatedTarget:0}),we=sn(Fi),Fe=x({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),bn=sn(Fe),On=x({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vi=sn(On),be=x({},rn,{data:0}),In=sn(be),hi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ni={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function va(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xi[e])?!!n[e]:!1}function Ka(){return va}var sl=x({},We,{key:function(e){if(e.key){var n=hi[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ye(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ni[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(e){return e.type==="keypress"?Ye(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ye(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qa=sn(sl),rl=x({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qr=sn(rl),hh=x({},We,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),AS=sn(hh),RS=x({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),CS=sn(RS),wS=x({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=sn(wS),US=x({},rn,{newState:0,oldState:0}),NS=sn(US),LS=[9,13,27,32],dh=Rt&&"CompositionEvent"in window,ol=null;Rt&&"documentMode"in document&&(ol=document.documentMode);var OS=Rt&&"TextEvent"in window&&!ol,Pm=Rt&&(!dh||ol&&8<ol&&11>=ol),Fm=" ",Bm=!1;function zm(e,n){switch(e){case"keyup":return LS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function IS(e,n){switch(e){case"compositionend":return Hm(n);case"keypress":return n.which!==32?null:(Bm=!0,Fm);case"textInput":return e=n.data,e===Fm&&Bm?null:e;default:return null}}function PS(e,n){if(jr)return e==="compositionend"||!dh&&zm(e,n)?(e=Pe(),ue=Bt=qt=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pm&&n.locale!=="ko"?null:n.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!FS[e.type]:n==="textarea"}function Vm(e,n,a,o){Za?Ia?Ia.push(o):Ia=[o]:Za=o,n=ru(n,"onChange"),0<n.length&&(a=new He("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ll=null,cl=null;function BS(e){T_(e,0)}function vc(e){var n=mn(e);if(yn(n))return e}function km(e,n){if(e==="change")return n}var Xm=!1;if(Rt){var ph;if(Rt){var mh="oninput"in document;if(!mh){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),mh=typeof Wm.oninput=="function"}ph=mh}else ph=!1;Xm=ph&&(!document.documentMode||9<document.documentMode)}function Ym(){ll&&(ll.detachEvent("onpropertychange",qm),cl=ll=null)}function qm(e){if(e.propertyName==="value"&&vc(cl)){var n=[];Vm(n,cl,e,or(e)),al(BS,n)}}function zS(e,n,a){e==="focusin"?(Ym(),ll=n,cl=a,ll.attachEvent("onpropertychange",qm)):e==="focusout"&&Ym()}function HS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc(cl)}function GS(e,n){if(e==="click")return vc(n)}function VS(e,n){if(e==="input"||e==="change")return vc(n)}function kS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Bi=typeof Object.is=="function"?Object.is:kS;function ul(e,n){if(Bi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!tn.call(n,u)||!Bi(e[u],n[u]))return!1}return!0}function jm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zm(e,n){var a=jm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jm(a)}}function Km(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Km(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Yt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Yt(e.document)}return n}function gh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var XS=Rt&&"documentMode"in document&&11>=document.documentMode,Zr=null,_h=null,fl=null,vh=!1;function Jm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vh||Zr==null||Zr!==Yt(o)||(o=Zr,"selectionStart"in o&&gh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fl&&ul(fl,o)||(fl=o,o=ru(_h,"onSelect"),0<o.length&&(n=new He("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Zr)))}function lr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Kr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},xh={},$m={};Rt&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function cr(e){if(xh[e])return xh[e];if(!Kr[e])return e;var n=Kr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in $m)return xh[e]=n[a];return e}var t0=cr("animationend"),e0=cr("animationiteration"),n0=cr("animationstart"),WS=cr("transitionrun"),YS=cr("transitionstart"),qS=cr("transitioncancel"),i0=cr("transitionend"),a0=new Map,Sh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sh.push("scrollEnd");function xa(e,n){a0.set(e,n),at(n,[e])}var xc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ji=[],Qr=0,yh=0;function Sc(){for(var e=Qr,n=yh=Qr=0;n<e;){var a=Ji[n];Ji[n++]=null;var o=Ji[n];Ji[n++]=null;var u=Ji[n];Ji[n++]=null;var f=Ji[n];if(Ji[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&s0(a,u,f)}}function yc(e,n,a,o){Ji[Qr++]=e,Ji[Qr++]=n,Ji[Qr++]=a,Ji[Qr++]=o,yh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Mh(e,n,a,o){return yc(e,n,a,o),Mc(e)}function ur(e,n){return yc(e,null,null,n),Mc(e)}function s0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Mc(e){if(50<Ll)throw Ll=0,Ud=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Jr={};function jS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(e,n,a,o){return new jS(e,n,a,o)}function Eh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ja(e,n){var a=e.alternate;return a===null?(a=zi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function r0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ec(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Eh(e)&&(v=1);else if(typeof e=="string")v=$y(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=zi(31,a,n,u),e.elementType=N,e.lanes=f,e;case w:return fr(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=zi(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case F:return e=zi(13,a,n,u),e.elementType=F,e.lanes=f,e;case z:return e=zi(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:v=10;break t;case C:v=9;break t;case U:v=11;break t;case H:v=14;break t;case b:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=zi(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function fr(e,n,a,o){return e=zi(7,e,o,n),e.lanes=a,e}function Th(e,n,a){return e=zi(6,e,null,n),e.lanes=a,e}function o0(e){var n=zi(18,null,null,0);return n.stateNode=e,n}function bh(e,n,a){return n=zi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var l0=new WeakMap;function $i(e,n){if(typeof e=="object"&&e!==null){var a=l0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},l0.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var $r=[],to=0,Tc=null,hl=0,ta=[],ea=0,bs=null,Pa=1,Fa="";function $a(e,n){$r[to++]=hl,$r[to++]=Tc,Tc=e,hl=n}function c0(e,n,a){ta[ea++]=Pa,ta[ea++]=Fa,ta[ea++]=bs,bs=e;var o=Pa;e=Fa;var u=32-Ot(o)-1;o&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Pa=1<<32-Ot(n)+u|a<<u|o,Fa=f+e}else Pa=1<<f|a<<u|o,Fa=e}function Ah(e){e.return!==null&&($a(e,1),c0(e,1,0))}function Rh(e){for(;e===Tc;)Tc=$r[--to],$r[to]=null,hl=$r[--to],$r[to]=null;for(;e===bs;)bs=ta[--ea],ta[ea]=null,Fa=ta[--ea],ta[ea]=null,Pa=ta[--ea],ta[ea]=null}function u0(e,n){ta[ea++]=Pa,ta[ea++]=Fa,ta[ea++]=bs,Pa=n.id,Fa=n.overflow,bs=e}var ii=null,gn=null,Be=!1,As=null,na=!1,Ch=Error(s(519));function Rs(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dl($i(n,e)),Ch}function f0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Sn]=e,n[Nn]=o,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<Il.length;a++)Ne(Il[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),Wn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||C_(n.textContent,a)?(o.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),o.onScroll!=null&&Ne("scroll",n),o.onScrollEnd!=null&&Ne("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Rs(e,!0)}function h0(e){for(ii=e.return;ii;)switch(ii.tag){case 5:case 31:case 13:na=!1;return;case 27:case 3:na=!0;return;default:ii=ii.return}}function eo(e){if(e!==ii)return!1;if(!Be)return h0(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yd(e.type,e.memoizedProps)),a=!a),a&&gn&&Rs(e),h0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=F_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=F_(e)}else n===27?(n=gn,Gs(e.type)?(e=Qd,Qd=null,gn=e):gn=n):gn=ii?aa(e.stateNode.nextSibling):null;return!0}function hr(){gn=ii=null,Be=!1}function wh(){var e=As;return e!==null&&(Ui===null?Ui=e:Ui.push.apply(Ui,e),As=null),e}function dl(e){As===null?As=[e]:As.push(e)}var Dh=P(null),dr=null,ts=null;function Cs(e,n,a){pt(Dh,n._currentValue),n._currentValue=a}function es(e){e._currentValue=Dh.current,Y(Dh)}function Uh(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Nh(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Uh(f.return,a,e),o||(v=null);break t}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Uh(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function no(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;Bi(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===_t.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}u=u.return}e!==null&&Nh(n,e,a,o),n.flags|=262144}function bc(e){for(e=e.firstContext;e!==null;){if(!Bi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pr(e){dr=e,ts=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ai(e){return d0(dr,e)}function Ac(e,n){return dr===null&&pr(e),d0(e,n)}function d0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ts===null){if(e===null)throw Error(s(308));ts=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ts=ts.next=n;return a}var ZS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},KS=r.unstable_scheduleCallback,QS=r.unstable_NormalPriority,Bn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lh(){return{controller:new ZS,data:new Map,refCount:0}}function pl(e){e.refCount--,e.refCount===0&&KS(QS,function(){e.controller.abort()})}var ml=null,Oh=0,io=0,ao=null;function JS(e,n){if(ml===null){var a=ml=[];Oh=0,io=Fd(),ao={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Oh++,n.then(p0,p0),n}function p0(){if(--Oh===0&&ml!==null){ao!==null&&(ao.status="fulfilled");var e=ml;ml=null,io=0,ao=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $S(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var m0=L.S;L.S=function(e,n){Jg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&JS(e,n),m0!==null&&m0(e,n)};var mr=P(null);function Ih(){var e=mr.current;return e!==null?e:dn.pooledCache}function Rc(e,n){n===null?pt(mr,mr.current):pt(mr,n.pool)}function g0(){var e=Ih();return e===null?null:{parent:Bn._currentValue,pool:e}}var so=Error(s(460)),Ph=Error(s(474)),Cc=Error(s(542)),wc={then:function(){}};function _0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function v0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,S0(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=dn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,S0(e),e}throw _r=n,so}}function gr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_r=a,so):a}}var _r=null;function x0(){if(_r===null)throw Error(s(459));var e=_r;return _r=null,e}function S0(e){if(e===so||e===Cc)throw Error(s(483))}var ro=null,gl=0;function Dc(e){var n=gl;return gl+=1,ro===null&&(ro=[]),v0(ro,e,n)}function _l(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Uc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function y0(e){function n(J,X){if(e){var rt=J.deletions;rt===null?(J.deletions=[X],J.flags|=16):rt.push(X)}}function a(J,X){if(!e)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function o(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function u(J,X){return J=Ja(J,X),J.index=0,J.sibling=null,J}function f(J,X,rt){return J.index=rt,e?(rt=J.alternate,rt!==null?(rt=rt.index,rt<X?(J.flags|=67108866,X):rt):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function v(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function R(J,X,rt,vt){return X===null||X.tag!==6?(X=Th(rt,J.mode,vt),X.return=J,X):(X=u(X,rt),X.return=J,X)}function G(J,X,rt,vt){var ie=rt.type;return ie===w?gt(J,X,rt.props.children,vt,rt.key):X!==null&&(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===b&&gr(ie)===X.type)?(X=u(X,rt.props),_l(X,rt),X.return=J,X):(X=Ec(rt.type,rt.key,rt.props,null,J.mode,vt),_l(X,rt),X.return=J,X)}function ot(J,X,rt,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==rt.containerInfo||X.stateNode.implementation!==rt.implementation?(X=bh(rt,J.mode,vt),X.return=J,X):(X=u(X,rt.children||[]),X.return=J,X)}function gt(J,X,rt,vt,ie){return X===null||X.tag!==7?(X=fr(rt,J.mode,vt,ie),X.return=J,X):(X=u(X,rt),X.return=J,X)}function xt(J,X,rt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Th(""+X,J.mode,rt),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return rt=Ec(X.type,X.key,X.props,null,J.mode,rt),_l(rt,X),rt.return=J,rt;case E:return X=bh(X,J.mode,rt),X.return=J,X;case b:return X=gr(X),xt(J,X,rt)}if(j(X)||K(X))return X=fr(X,J.mode,rt,null),X.return=J,X;if(typeof X.then=="function")return xt(J,Dc(X),rt);if(X.$$typeof===O)return xt(J,Ac(J,X),rt);Uc(J,X)}return null}function lt(J,X,rt,vt){var ie=X!==null?X.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return ie!==null?null:R(J,X,""+rt,vt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:return rt.key===ie?G(J,X,rt,vt):null;case E:return rt.key===ie?ot(J,X,rt,vt):null;case b:return rt=gr(rt),lt(J,X,rt,vt)}if(j(rt)||K(rt))return ie!==null?null:gt(J,X,rt,vt,null);if(typeof rt.then=="function")return lt(J,X,Dc(rt),vt);if(rt.$$typeof===O)return lt(J,X,Ac(J,rt),vt);Uc(J,rt)}return null}function ft(J,X,rt,vt,ie){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(rt)||null,R(X,J,""+vt,ie);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return J=J.get(vt.key===null?rt:vt.key)||null,G(X,J,vt,ie);case E:return J=J.get(vt.key===null?rt:vt.key)||null,ot(X,J,vt,ie);case b:return vt=gr(vt),ft(J,X,rt,vt,ie)}if(j(vt)||K(vt))return J=J.get(rt)||null,gt(X,J,vt,ie,null);if(typeof vt.then=="function")return ft(J,X,rt,Dc(vt),ie);if(vt.$$typeof===O)return ft(J,X,rt,Ac(X,vt),ie);Uc(X,vt)}return null}function Zt(J,X,rt,vt){for(var ie=null,je=null,ee=X,Ee=X=0,Oe=null;ee!==null&&Ee<rt.length;Ee++){ee.index>Ee?(Oe=ee,ee=null):Oe=ee.sibling;var Ze=lt(J,ee,rt[Ee],vt);if(Ze===null){ee===null&&(ee=Oe);break}e&&ee&&Ze.alternate===null&&n(J,ee),X=f(Ze,X,Ee),je===null?ie=Ze:je.sibling=Ze,je=Ze,ee=Oe}if(Ee===rt.length)return a(J,ee),Be&&$a(J,Ee),ie;if(ee===null){for(;Ee<rt.length;Ee++)ee=xt(J,rt[Ee],vt),ee!==null&&(X=f(ee,X,Ee),je===null?ie=ee:je.sibling=ee,je=ee);return Be&&$a(J,Ee),ie}for(ee=o(ee);Ee<rt.length;Ee++)Oe=ft(ee,J,Ee,rt[Ee],vt),Oe!==null&&(e&&Oe.alternate!==null&&ee.delete(Oe.key===null?Ee:Oe.key),X=f(Oe,X,Ee),je===null?ie=Oe:je.sibling=Oe,je=Oe);return e&&ee.forEach(function(Ys){return n(J,Ys)}),Be&&$a(J,Ee),ie}function le(J,X,rt,vt){if(rt==null)throw Error(s(151));for(var ie=null,je=null,ee=X,Ee=X=0,Oe=null,Ze=rt.next();ee!==null&&!Ze.done;Ee++,Ze=rt.next()){ee.index>Ee?(Oe=ee,ee=null):Oe=ee.sibling;var Ys=lt(J,ee,Ze.value,vt);if(Ys===null){ee===null&&(ee=Oe);break}e&&ee&&Ys.alternate===null&&n(J,ee),X=f(Ys,X,Ee),je===null?ie=Ys:je.sibling=Ys,je=Ys,ee=Oe}if(Ze.done)return a(J,ee),Be&&$a(J,Ee),ie;if(ee===null){for(;!Ze.done;Ee++,Ze=rt.next())Ze=xt(J,Ze.value,vt),Ze!==null&&(X=f(Ze,X,Ee),je===null?ie=Ze:je.sibling=Ze,je=Ze);return Be&&$a(J,Ee),ie}for(ee=o(ee);!Ze.done;Ee++,Ze=rt.next())Ze=ft(ee,J,Ee,Ze.value,vt),Ze!==null&&(e&&Ze.alternate!==null&&ee.delete(Ze.key===null?Ee:Ze.key),X=f(Ze,X,Ee),je===null?ie=Ze:je.sibling=Ze,je=Ze);return e&&ee.forEach(function(uM){return n(J,uM)}),Be&&$a(J,Ee),ie}function cn(J,X,rt,vt){if(typeof rt=="object"&&rt!==null&&rt.type===w&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:t:{for(var ie=rt.key;X!==null;){if(X.key===ie){if(ie=rt.type,ie===w){if(X.tag===7){a(J,X.sibling),vt=u(X,rt.props.children),vt.return=J,J=vt;break t}}else if(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===b&&gr(ie)===X.type){a(J,X.sibling),vt=u(X,rt.props),_l(vt,rt),vt.return=J,J=vt;break t}a(J,X);break}else n(J,X);X=X.sibling}rt.type===w?(vt=fr(rt.props.children,J.mode,vt,rt.key),vt.return=J,J=vt):(vt=Ec(rt.type,rt.key,rt.props,null,J.mode,vt),_l(vt,rt),vt.return=J,J=vt)}return v(J);case E:t:{for(ie=rt.key;X!==null;){if(X.key===ie)if(X.tag===4&&X.stateNode.containerInfo===rt.containerInfo&&X.stateNode.implementation===rt.implementation){a(J,X.sibling),vt=u(X,rt.children||[]),vt.return=J,J=vt;break t}else{a(J,X);break}else n(J,X);X=X.sibling}vt=bh(rt,J.mode,vt),vt.return=J,J=vt}return v(J);case b:return rt=gr(rt),cn(J,X,rt,vt)}if(j(rt))return Zt(J,X,rt,vt);if(K(rt)){if(ie=K(rt),typeof ie!="function")throw Error(s(150));return rt=ie.call(rt),le(J,X,rt,vt)}if(typeof rt.then=="function")return cn(J,X,Dc(rt),vt);if(rt.$$typeof===O)return cn(J,X,Ac(J,rt),vt);Uc(J,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,X!==null&&X.tag===6?(a(J,X.sibling),vt=u(X,rt),vt.return=J,J=vt):(a(J,X),vt=Th(rt,J.mode,vt),vt.return=J,J=vt),v(J)):a(J,X)}return function(J,X,rt,vt){try{gl=0;var ie=cn(J,X,rt,vt);return ro=null,ie}catch(ee){if(ee===so||ee===Cc)throw ee;var je=zi(29,ee,null,J.mode);return je.lanes=vt,je.return=J,je}}}var vr=y0(!0),M0=y0(!1),ws=!1;function Fh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ds(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Us(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Mc(e),s0(e,null,a),n}return yc(e,o,n,a),Mc(e)}function vl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,da(e,a)}}function zh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Hh=!1;function xl(){if(Hh){var e=ao;if(e!==null)throw e}}function Sl(e,n,a,o){Hh=!1;var u=e.updateQueue;ws=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,ot=G.next;G.next=null,v===null?f=ot:v.next=ot,v=G;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,R=gt.lastBaseUpdate,R!==v&&(R===null?gt.firstBaseUpdate=ot:R.next=ot,gt.lastBaseUpdate=G))}if(f!==null){var xt=u.baseState;v=0,gt=ot=G=null,R=f;do{var lt=R.lane&-536870913,ft=lt!==R.lane;if(ft?(Le&lt)===lt:(o&lt)===lt){lt!==0&&lt===io&&(Hh=!0),gt!==null&&(gt=gt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Zt=e,le=R;lt=n;var cn=a;switch(le.tag){case 1:if(Zt=le.payload,typeof Zt=="function"){xt=Zt.call(cn,xt,lt);break t}xt=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=le.payload,lt=typeof Zt=="function"?Zt.call(cn,xt,lt):Zt,lt==null)break t;xt=x({},xt,lt);break t;case 2:ws=!0}}lt=R.callback,lt!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[lt]:ft.push(lt))}else ft={lane:lt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},gt===null?(ot=gt=ft,G=xt):gt=gt.next=ft,v|=lt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);gt===null&&(G=xt),u.baseState=G,u.firstBaseUpdate=ot,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),Ps|=v,e.lanes=v,e.memoizedState=xt}}function E0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function T0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)E0(a[e],n)}var oo=P(null),Nc=P(0);function b0(e,n){e=us,pt(Nc,e),pt(oo,n),us=e|n.baseLanes}function Gh(){pt(Nc,us),pt(oo,oo.current)}function Vh(){us=Nc.current,Y(oo),Y(Nc)}var Hi=P(null),ia=null;function Ns(e){var n=e.alternate;pt(Pn,Pn.current&1),pt(Hi,e),ia===null&&(n===null||oo.current!==null||n.memoizedState!==null)&&(ia=e)}function kh(e){pt(Pn,Pn.current),pt(Hi,e),ia===null&&(ia=e)}function A0(e){e.tag===22?(pt(Pn,Pn.current),pt(Hi,e),ia===null&&(ia=e)):Ls()}function Ls(){pt(Pn,Pn.current),pt(Hi,Hi.current)}function Gi(e){Y(Hi),ia===e&&(ia=null),Y(Pn)}var Pn=P(0);function Lc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zd(a)||Kd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ns=0,Se=null,on=null,zn=null,Oc=!1,lo=!1,xr=!1,Ic=0,yl=0,co=null,ty=0;function Dn(){throw Error(s(321))}function Xh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Bi(e[a],n[a]))return!1;return!0}function Wh(e,n,a,o,u,f){return ns=f,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?cg:rd,xr=!1,f=a(o,u),xr=!1,lo&&(f=C0(n,a,o,u)),R0(e),f}function R0(e){L.H=Tl;var n=on!==null&&on.next!==null;if(ns=0,zn=on=Se=null,Oc=!1,yl=0,co=null,n)throw Error(s(300));e===null||Hn||(e=e.dependencies,e!==null&&bc(e)&&(Hn=!0))}function C0(e,n,a,o){Se=e;var u=0;do{if(lo&&(co=null),yl=0,lo=!1,25<=u)throw Error(s(301));if(u+=1,zn=on=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=ug,f=n(a,o)}while(lo);return f}function ey(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?Ml(n):n,e=e.useState()[0],(on!==null?on.memoizedState:null)!==e&&(Se.flags|=1024),n}function Yh(){var e=Ic!==0;return Ic=0,e}function qh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function jh(e){if(Oc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Oc=!1}ns=0,zn=on=Se=null,lo=!1,yl=Ic=0,co=null}function Si(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zn===null?Se.memoizedState=zn=e:zn=zn.next=e,zn}function Fn(){if(on===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=on.next;var n=zn===null?Se.memoizedState:zn.next;if(n!==null)zn=n,on=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));on=e,e={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},zn===null?Se.memoizedState=zn=e:zn=zn.next=e}return zn}function Pc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ml(e){var n=yl;return yl+=1,co===null&&(co=[]),e=v0(co,e,n),n=Se,(zn===null?n.memoizedState:zn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?cg:rd),e}function Fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ml(e);if(e.$$typeof===O)return ai(e)}throw Error(s(438,String(e)))}function Zh(e){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pc(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Q;return n.index++,a}function is(e,n){return typeof n=="function"?n(e):n}function Bc(e){var n=Fn();return Kh(n,on,e)}function Kh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,G=null,ot=n,gt=!1;do{var xt=ot.lane&-536870913;if(xt!==ot.lane?(Le&xt)===xt:(ns&xt)===xt){var lt=ot.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),xt===io&&(gt=!0);else if((ns&lt)===lt){ot=ot.next,lt===io&&(gt=!0);continue}else xt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},G===null?(R=G=xt,v=f):G=G.next=xt,Se.lanes|=lt,Ps|=lt;xt=ot.action,xr&&a(f,xt),f=ot.hasEagerState?ot.eagerState:a(f,xt)}else lt={lane:xt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},G===null?(R=G=lt,v=f):G=G.next=lt,Se.lanes|=xt,Ps|=xt;ot=ot.next}while(ot!==null&&ot!==n);if(G===null?v=f:G.next=R,!Bi(f,e.memoizedState)&&(Hn=!0,gt&&(a=ao,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Qh(e){var n=Fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Bi(f,n.memoizedState)||(Hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function w0(e,n,a){var o=Se,u=Fn(),f=Be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Bi((on||u).memoizedState,a);if(v&&(u.memoizedState=a,Hn=!0),u=u.queue,td(N0.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||zn!==null&&zn.memoizedState.tag&1){if(o.flags|=2048,uo(9,{destroy:void 0},U0.bind(null,o,u,a,n),null),dn===null)throw Error(s(349));f||(ns&127)!==0||D0(o,n,a)}return a}function D0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=Pc(),Se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function U0(e,n,a,o){n.value=a,n.getSnapshot=o,L0(n)&&O0(e)}function N0(e,n,a){return a(function(){L0(n)&&O0(e)})}function L0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Bi(e,a)}catch{return!0}}function O0(e){var n=ur(e,2);n!==null&&Ni(n,e,2)}function Jh(e){var n=Si();if(typeof e=="function"){var a=e;if(e=a(),xr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},n}function I0(e,n,a,o){return e.baseState=a,Kh(e,on,typeof o=="function"?o:is)}function ny(e,n,a,o,u){if(Gc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,P0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function P0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var R=a(u,o),G=L.S;G!==null&&G(v,R),F0(e,n,R)}catch(ot){$h(e,n,ot)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(u,o),F0(e,n,f)}catch(ot){$h(e,n,ot)}}function F0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){B0(e,n,o)},function(o){return $h(e,n,o)}):B0(e,n,a)}function B0(e,n,a){n.status="fulfilled",n.value=a,z0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,P0(e,a)))}function $h(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,z0(n),n=n.next;while(n!==o)}e.action=null}function z0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function H0(e,n){return n}function G0(e,n){if(Be){var a=dn.formState;if(a!==null){t:{var o=Se;if(Be){if(gn){e:{for(var u=gn,f=na;u.nodeType!==8;){if(!f){u=null;break e}if(u=aa(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){gn=aa(u.nextSibling),o=u.data==="F!";break t}}Rs(o)}o=!1}o&&(n=a[0])}}return a=Si(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:H0,lastRenderedState:n},a.queue=o,a=rg.bind(null,Se,o),o.dispatch=a,o=Jh(!1),f=sd.bind(null,Se,!1,o.queue),o=Si(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ny.bind(null,Se,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function V0(e){var n=Fn();return k0(n,on,e)}function k0(e,n,a){if(n=Kh(e,n,H0)[0],e=Bc(is)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ml(n)}catch(v){throw v===so?Cc:v}else o=n;n=Fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,uo(9,{destroy:void 0},iy.bind(null,u,a),null)),[o,f,e]}function iy(e,n){e.action=n}function X0(e){var n=Fn(),a=on;if(a!==null)return k0(n,a,e);Fn(),n=n.memoizedState,a=Fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function uo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Pc(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function W0(){return Fn().memoizedState}function zc(e,n,a,o){var u=Si();Se.flags|=e,u.memoizedState=uo(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hc(e,n,a,o){var u=Fn();o=o===void 0?null:o;var f=u.memoizedState.inst;on!==null&&o!==null&&Xh(o,on.memoizedState.deps)?u.memoizedState=uo(n,f,a,o):(Se.flags|=e,u.memoizedState=uo(1|n,f,a,o))}function Y0(e,n){zc(8390656,8,e,n)}function td(e,n){Hc(2048,8,e,n)}function ay(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Pc(),Se.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function q0(e){var n=Fn().memoizedState;return ay({ref:n,nextImpl:e}),function(){if((Je&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function j0(e,n){return Hc(4,2,e,n)}function Z0(e,n){return Hc(4,4,e,n)}function K0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Q0(e,n,a){a=a!=null?a.concat([e]):null,Hc(4,4,K0.bind(null,n,e),a)}function ed(){}function J0(e,n){var a=Fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function $0(e,n){var a=Fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xh(n,o[1]))return o[0];if(o=e(),xr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o}function nd(e,n,a){return a===void 0||(ns&1073741824)!==0&&(Le&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=t_(),Se.lanes|=e,Ps|=e,a)}function tg(e,n,a,o){return Bi(a,n)?a:oo.current!==null?(e=nd(e,a,o),Bi(e,n)||(Hn=!0),e):(ns&42)===0||(ns&1073741824)!==0&&(Le&261930)===0?(Hn=!0,e.memoizedState=a):(e=t_(),Se.lanes|=e,Ps|=e,n)}function eg(e,n,a,o,u){var f=D.p;D.p=f!==0&&8>f?f:8;var v=L.T,R={};L.T=R,sd(e,!1,n,a);try{var G=u(),ot=L.S;if(ot!==null&&ot(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=$S(G,o);El(e,n,gt,Xi(e))}else El(e,n,o,Xi(e))}catch(xt){El(e,n,{then:function(){},status:"rejected",reason:xt},Xi())}finally{D.p=f,v!==null&&R.types!==null&&(v.types=R.types),L.T=v}}function sy(){}function id(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=ng(e).queue;eg(e,u,n,q,a===null?sy:function(){return ig(e),a(o)})}function ng(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ig(e){var n=ng(e);n.next===null&&(n=e.alternate.memoizedState),El(e,n.next.queue,{},Xi())}function ad(){return ai(Hl)}function ag(){return Fn().memoizedState}function sg(){return Fn().memoizedState}function ry(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xi();e=Ds(a);var o=Us(n,e,a);o!==null&&(Ni(o,n,a),vl(o,n,a)),n={cache:Lh()},e.payload=n;return}n=n.return}}function oy(e,n,a){var o=Xi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gc(e)?og(n,a):(a=Mh(e,n,a,o),a!==null&&(Ni(a,e,o),lg(a,n,o)))}function rg(e,n,a){var o=Xi();El(e,n,a,o)}function El(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))og(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,Bi(R,v))return yc(e,n,u,0),dn===null&&Sc(),!1}catch{}if(a=Mh(e,n,u,o),a!==null)return Ni(a,e,o),lg(a,n,o),!0}return!1}function sd(e,n,a,o){if(o={lane:2,revertLane:Fd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gc(e)){if(n)throw Error(s(479))}else n=Mh(e,a,o,2),n!==null&&Ni(n,e,2)}function Gc(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function og(e,n){lo=Oc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function lg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,da(e,a)}}var Tl={readContext:ai,use:Fc,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useLayoutEffect:Dn,useInsertionEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useSyncExternalStore:Dn,useId:Dn,useHostTransitionStatus:Dn,useFormState:Dn,useActionState:Dn,useOptimistic:Dn,useMemoCache:Dn,useCacheRefresh:Dn};Tl.useEffectEvent=Dn;var cg={readContext:ai,use:Fc,useCallback:function(e,n){return Si().memoizedState=[e,n===void 0?null:n],e},useContext:ai,useEffect:Y0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zc(4194308,4,K0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zc(4194308,4,e,n)},useInsertionEffect:function(e,n){zc(4,2,e,n)},useMemo:function(e,n){var a=Si();n=n===void 0?null:n;var o=e();if(xr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Si();if(a!==void 0){var u=a(n);if(xr){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=oy.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var n=Si();return e={current:e},n.memoizedState=e},useState:function(e){e=Jh(e);var n=e.queue,a=rg.bind(null,Se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ed,useDeferredValue:function(e,n){var a=Si();return nd(a,e,n)},useTransition:function(){var e=Jh(!1);return e=eg.bind(null,Se,e.queue,!0,!1),Si().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Se,u=Si();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),dn===null)throw Error(s(349));(Le&127)!==0||D0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Y0(N0.bind(null,o,f,e),[e]),o.flags|=2048,uo(9,{destroy:void 0},U0.bind(null,o,f,a,n),null),a},useId:function(){var e=Si(),n=dn.identifierPrefix;if(Be){var a=Fa,o=Pa;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ic++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ty++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ad,useFormState:G0,useActionState:G0,useOptimistic:function(e){var n=Si();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sd.bind(null,Se,!0,a),a.dispatch=n,[e,n]},useMemoCache:Zh,useCacheRefresh:function(){return Si().memoizedState=ry.bind(null,Se)},useEffectEvent:function(e){var n=Si(),a={impl:e};return n.memoizedState=a,function(){if((Je&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},rd={readContext:ai,use:Fc,useCallback:J0,useContext:ai,useEffect:td,useImperativeHandle:Q0,useInsertionEffect:j0,useLayoutEffect:Z0,useMemo:$0,useReducer:Bc,useRef:W0,useState:function(){return Bc(is)},useDebugValue:ed,useDeferredValue:function(e,n){var a=Fn();return tg(a,on.memoizedState,e,n)},useTransition:function(){var e=Bc(is)[0],n=Fn().memoizedState;return[typeof e=="boolean"?e:Ml(e),n]},useSyncExternalStore:w0,useId:ag,useHostTransitionStatus:ad,useFormState:V0,useActionState:V0,useOptimistic:function(e,n){var a=Fn();return I0(a,on,e,n)},useMemoCache:Zh,useCacheRefresh:sg};rd.useEffectEvent=q0;var ug={readContext:ai,use:Fc,useCallback:J0,useContext:ai,useEffect:td,useImperativeHandle:Q0,useInsertionEffect:j0,useLayoutEffect:Z0,useMemo:$0,useReducer:Qh,useRef:W0,useState:function(){return Qh(is)},useDebugValue:ed,useDeferredValue:function(e,n){var a=Fn();return on===null?nd(a,e,n):tg(a,on.memoizedState,e,n)},useTransition:function(){var e=Qh(is)[0],n=Fn().memoizedState;return[typeof e=="boolean"?e:Ml(e),n]},useSyncExternalStore:w0,useId:ag,useHostTransitionStatus:ad,useFormState:X0,useActionState:X0,useOptimistic:function(e,n){var a=Fn();return on!==null?I0(a,on,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zh,useCacheRefresh:sg};ug.useEffectEvent=q0;function od(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ld={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Xi(),u=Ds(o);u.payload=n,a!=null&&(u.callback=a),n=Us(e,u,o),n!==null&&(Ni(n,e,o),vl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Xi(),u=Ds(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Us(e,u,o),n!==null&&(Ni(n,e,o),vl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xi(),o=Ds(a);o.tag=2,n!=null&&(o.callback=n),n=Us(e,o,a),n!==null&&(Ni(n,e,a),vl(n,e,a))}};function fg(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!ul(a,o)||!ul(u,f):!0}function hg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ld.enqueueReplaceState(n,n.state,null)}function Sr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function dg(e){xc(e)}function pg(e){console.error(e)}function mg(e){xc(e)}function Vc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function gg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cd(e,n,a){return a=Ds(a),a.tag=3,a.payload={element:null},a.callback=function(){Vc(e,n)},a}function _g(e){return e=Ds(e),e.tag=3,e}function vg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){gg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){gg(n,a,o),typeof u!="function"&&(Fs===null?Fs=new Set([this]):Fs.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function ly(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&no(n,a,u,!0),a=Hi.current,a!==null){switch(a.tag){case 31:case 13:return ia===null?tu():a.alternate===null&&Un===0&&(Un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Od(e,o,u)),!1;case 22:return a.flags|=65536,o===wc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Od(e,o,u)),!1}throw Error(s(435,a.tag))}return Od(e,o,u),tu(),!1}if(Be)return n=Hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ch&&(e=Error(s(422),{cause:o}),dl($i(e,a)))):(o!==Ch&&(n=Error(s(423),{cause:o}),dl($i(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=$i(o,a),u=cd(e.stateNode,o,u),zh(e,u),Un!==4&&(Un=2)),!1;var f=Error(s(520),{cause:o});if(f=$i(f,a),Nl===null?Nl=[f]:Nl.push(f),Un!==4&&(Un=2),n===null)return!0;o=$i(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=cd(a.stateNode,o,e),zh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fs===null||!Fs.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_g(u),vg(u,e,a,o),zh(a,u),!1}a=a.return}while(a!==null);return!1}var ud=Error(s(461)),Hn=!1;function si(e,n,a,o){n.child=e===null?M0(n,null,a,o):vr(n,e.child,a,o)}function xg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return pr(n),o=Wh(e,n,a,v,f,u),R=Yh(),e!==null&&!Hn?(qh(e,n,u),as(e,n,u)):(Be&&R&&Ah(n),n.flags|=1,si(e,n,o,u),n.child)}function Sg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Eh(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,yg(e,n,f,o,u)):(e=Ec(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!vd(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ul,a(v,o)&&e.ref===n.ref)return as(e,n,u)}return n.flags|=1,e=Ja(f,o),e.ref=n.ref,e.return=n,n.child=e}function yg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(ul(f,o)&&e.ref===n.ref)if(Hn=!1,n.pendingProps=o=f,vd(e,u))(e.flags&131072)!==0&&(Hn=!0);else return n.lanes=e.lanes,as(e,n,u)}return fd(e,n,a,o,u)}function Mg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Eg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rc(n,f!==null?f.cachePool:null),f!==null?b0(n,f):Gh(),A0(n);else return o=n.lanes=536870912,Eg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Rc(n,f.cachePool),b0(n,f),Ls(),n.memoizedState=null):(e!==null&&Rc(n,null),Gh(),Ls());return si(e,n,u,a),n.child}function bl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eg(e,n,a,o,u){var f=Ih();return f=f===null?null:{parent:Bn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Rc(n,null),Gh(),A0(n),e!==null&&no(e,n,o,!0),n.childLanes=u,null}function kc(e,n){return n=Wc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Tg(e,n,a){return vr(n,e.child,null,a),e=kc(n,n.pendingProps),e.flags|=2,Gi(n),n.memoizedState=null,e}function cy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Be){if(o.mode==="hidden")return e=kc(n,o),n.lanes=536870912,bl(null,e);if(kh(n),(e=gn)?(e=P_(e,na),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:bs!==null?{id:Pa,overflow:Fa}:null,retryLane:536870912,hydrationErrors:null},a=o0(e),a.return=n,n.child=a,ii=n,gn=null)):e=null,e===null)throw Rs(n);return n.lanes=536870912,null}return kc(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(kh(n),u)if(n.flags&256)n.flags&=-257,n=Tg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Hn||no(e,n,a,!1),u=(a&e.childLanes)!==0,Hn||u){if(o=dn,o!==null&&(v=pa(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ur(e,v),Ni(o,e,v),ud;tu(),n=Tg(e,n,a)}else e=f.treeContext,gn=aa(v.nextSibling),ii=n,Be=!0,As=null,na=!1,e!==null&&u0(n,e),n=kc(n,o),n.flags|=4096;return n}return e=Ja(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function fd(e,n,a,o,u){return pr(n),a=Wh(e,n,a,o,void 0,u),o=Yh(),e!==null&&!Hn?(qh(e,n,u),as(e,n,u)):(Be&&o&&Ah(n),n.flags|=1,si(e,n,a,u),n.child)}function bg(e,n,a,o,u,f){return pr(n),n.updateQueue=null,a=C0(n,o,a,u),R0(e),o=Yh(),e!==null&&!Hn?(qh(e,n,f),as(e,n,f)):(Be&&o&&Ah(n),n.flags|=1,si(e,n,a,f),n.child)}function Ag(e,n,a,o,u){if(pr(n),n.stateNode===null){var f=Jr,v=a.contextType;typeof v=="object"&&v!==null&&(f=ai(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ld,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Fh(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?ai(v):Jr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(od(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&ld.enqueueReplaceState(f,f.state,null),Sl(n,o,f,u),xl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=Sr(a,R);f.props=G;var ot=f.context,gt=a.contextType;v=Jr,typeof gt=="object"&&gt!==null&&(v=ai(gt));var xt=a.getDerivedStateFromProps;gt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ot!==v)&&hg(n,f,o,v),ws=!1;var lt=n.memoizedState;f.state=lt,Sl(n,o,f,u),xl(),ot=n.memoizedState,R||lt!==ot||ws?(typeof xt=="function"&&(od(n,a,xt,o),ot=n.memoizedState),(G=ws||fg(n,a,G,o,lt,ot,v))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=v,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Bh(e,n),v=n.memoizedProps,gt=Sr(a,v),f.props=gt,xt=n.pendingProps,lt=f.context,ot=a.contextType,G=Jr,typeof ot=="object"&&ot!==null&&(G=ai(ot)),R=a.getDerivedStateFromProps,(ot=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xt||lt!==G)&&hg(n,f,o,G),ws=!1,lt=n.memoizedState,f.state=lt,Sl(n,o,f,u),xl();var ft=n.memoizedState;v!==xt||lt!==ft||ws||e!==null&&e.dependencies!==null&&bc(e.dependencies)?(typeof R=="function"&&(od(n,a,R,o),ft=n.memoizedState),(gt=ws||fg(n,a,gt,o,lt,ft,G)||e!==null&&e.dependencies!==null&&bc(e.dependencies))?(ot||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ft,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ft,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),f.props=o,f.state=ft,f.context=G,o=gt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Xc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=vr(n,e.child,null,u),n.child=vr(n,null,a,u)):si(e,n,a,u),n.memoizedState=f.state,e=n.child):e=as(e,n,u),e}function Rg(e,n,a,o){return hr(),n.flags|=256,si(e,n,a,o),n.child}var hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dd(e){return{baseLanes:e,cachePool:g0()}}function pd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ki),e}function Cg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Pn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?Ns(n):Ls(),(e=gn)?(e=P_(e,na),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:bs!==null?{id:Pa,overflow:Fa}:null,retryLane:536870912,hydrationErrors:null},a=o0(e),a.return=n,n.child=a,ii=n,gn=null)):e=null,e===null)throw Rs(n);return Kd(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ls(),u=n.mode,R=Wc({mode:"hidden",children:R},u),o=fr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=dd(a),o.childLanes=pd(e,v,a),n.memoizedState=hd,bl(null,o)):(Ns(n),md(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Ns(n),n.flags&=-257,n=gd(e,n,a)):n.memoizedState!==null?(Ls(),n.child=e.child,n.flags|=128,n=null):(Ls(),R=o.fallback,u=n.mode,o=Wc({mode:"visible",children:o.children},u),R=fr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,vr(n,e.child,null,a),o=n.child,o.memoizedState=dd(a),o.childLanes=pd(e,v,a),n.memoizedState=hd,n=bl(null,o));else if(Ns(n),Kd(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var ot=v.dgst;v=ot,o=Error(s(419)),o.stack="",o.digest=v,dl({value:o,source:null,stack:null}),n=gd(e,n,a)}else if(Hn||no(e,n,a,!1),v=(a&e.childLanes)!==0,Hn||v){if(v=dn,v!==null&&(o=pa(v,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ur(e,o),Ni(v,e,o),ud;Zd(R)||tu(),n=gd(e,n,a)}else Zd(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,gn=aa(R.nextSibling),ii=n,Be=!0,As=null,na=!1,e!==null&&u0(n,e),n=md(n,o.children),n.flags|=4096);return n}return u?(Ls(),R=o.fallback,u=n.mode,G=e.child,ot=G.sibling,o=Ja(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ot!==null?R=Ja(ot,R):(R=fr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,bl(null,o),o=n.child,R=e.child.memoizedState,R===null?R=dd(a):(u=R.cachePool,u!==null?(G=Bn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=g0(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=pd(e,v,a),n.memoizedState=hd,bl(e.child,o)):(Ns(n),a=e.child,e=a.sibling,a=Ja(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function md(e,n){return n=Wc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wc(e,n){return e=zi(22,e,null,n),e.lanes=0,e}function gd(e,n,a){return vr(n,e.child,null,a),e=md(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Uh(e.return,n,a)}function _d(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Dg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=Pn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,pt(Pn,v),si(e,n,o,a),o=Be?hl:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,a,n);else if(e.tag===19)wg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Lc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_d(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Lc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}_d(n,!0,a,null,f,o);break;case"together":_d(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function as(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ps|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(no(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ja(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ja(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bc(e)))}function uy(e,n,a){switch(n.tag){case 3:yt(n,n.stateNode.containerInfo),Cs(n,Bn,e.memoizedState.cache),hr();break;case 27:case 5:Gt(n);break;case 4:yt(n,n.stateNode.containerInfo);break;case 10:Cs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,kh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ns(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cg(e,n,a):(Ns(n),e=as(e,n,a),e!==null?e.sibling:null);Ns(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(no(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Dg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(Pn,Pn.current),o)break;return null;case 22:return n.lanes=0,Mg(e,n,a,n.pendingProps);case 24:Cs(n,Bn,e.memoizedState.cache)}return as(e,n,a)}function Ug(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Hn=!0;else{if(!vd(e,a)&&(n.flags&128)===0)return Hn=!1,uy(e,n,a);Hn=(e.flags&131072)!==0}else Hn=!1,Be&&(n.flags&1048576)!==0&&c0(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=gr(n.elementType),n.type=e,typeof e=="function")Eh(e)?(o=Sr(e,o),n.tag=1,n=Ag(null,n,e,o,a)):(n.tag=0,n=fd(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=xg(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=Sg(null,n,e,o,a);break t}}throw n=nt(e)||e,Error(s(306,n,""))}}return n;case 0:return fd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Sr(o,n.pendingProps),Ag(e,n,o,u,a);case 3:t:{if(yt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Bh(e,n),Sl(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Cs(n,Bn,o),o!==f.cache&&Nh(n,[Bn],a,!0),xl(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Rg(e,n,o,a);break t}else if(o!==u){u=$i(Error(s(424)),n),dl(u),n=Rg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,gn=aa(e.firstChild),ii=n,Be=!0,As=null,na=!0,a=M0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hr(),o===u){n=as(e,n,a);break t}si(e,n,o,a)}n=n.child}return n;case 26:return Xc(e,n),e===null?(a=V_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=ou(et.current).createElement(a),o[Sn]=n,o[Nn]=e,ri(o,a,e),k(o),n.stateNode=o):n.memoizedState=V_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Gt(n),e===null&&Be&&(o=n.stateNode=z_(n.type,n.pendingProps,et.current),ii=n,na=!0,u=gn,Gs(n.type)?(Qd=u,gn=aa(o.firstChild)):gn=u),si(e,n,n.pendingProps.children,a),Xc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=gn)&&(o=Hy(o,n.type,n.pendingProps,na),o!==null?(n.stateNode=o,ii=n,gn=aa(o.firstChild),na=!1,u=!0):u=!1),u||Rs(n)),Gt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Yd(u,f)?o=null:v!==null&&Yd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Wh(e,n,ey,null,null,a),Hl._currentValue=u),Xc(e,n),si(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=gn)&&(a=Gy(a,n.pendingProps,na),a!==null?(n.stateNode=a,ii=n,gn=null,e=!0):e=!1),e||Rs(n)),null;case 13:return Cg(e,n,a);case 4:return yt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=vr(n,null,o,a):si(e,n,o,a),n.child;case 11:return xg(e,n,n.type,n.pendingProps,a);case 7:return si(e,n,n.pendingProps,a),n.child;case 8:return si(e,n,n.pendingProps.children,a),n.child;case 12:return si(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Cs(n,n.type,o.value),si(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=ai(u),o=o(u),n.flags|=1,si(e,n,o,a),n.child;case 14:return Sg(e,n,n.type,n.pendingProps,a);case 15:return yg(e,n,n.type,n.pendingProps,a);case 19:return Dg(e,n,a);case 31:return cy(e,n,a);case 22:return Mg(e,n,a,n.pendingProps);case 24:return pr(n),o=ai(Bn),e===null?(u=Ih(),u===null&&(u=dn,f=Lh(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Fh(n),Cs(n,Bn,u)):((e.lanes&a)!==0&&(Bh(e,n),Sl(n,null,null,a),xl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Cs(n,Bn,o)):(o=f.cache,Cs(n,Bn,o),o!==u.cache&&Nh(n,[Bn],a,!0))),si(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ss(e){e.flags|=4}function xd(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(a_())e.flags|=8192;else throw _r=wc,Ph}else e.flags&=-16777217}function Ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!q_(n))if(a_())e.flags|=8192;else throw _r=wc,Ph}function Yc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?de():536870912,e.lanes|=n,mo|=n)}function Al(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function _n(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function fy(e,n,a){var o=n.pendingProps;switch(Rh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(n),null;case 1:return _n(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),es(Bn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(eo(n)?ss(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wh())),_n(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ss(n),f!==null?(_n(n),Ng(n,f)):(_n(n),xd(n,u,null,o,a))):f?f!==e.memoizedState?(ss(n),_n(n),Ng(n,f)):(_n(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ss(n),_n(n),xd(n,u,e,o,a)),null;case 27:if(ne(n),a=et.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ss(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}e=Et.current,eo(n)?f0(n):(e=z_(u,o,a),n.stateNode=e,ss(n))}return _n(n),null;case 5:if(ne(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ss(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}if(f=Et.current,eo(n))f0(n);else{var v=ou(et.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[Sn]=n,f[Nn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(ri(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ss(n)}}return _n(n),xd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ss(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,eo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ii,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||C_(e.nodeValue,a)),e||Rs(n,!0)}else e=ou(e).createTextNode(o),e[Sn]=n,n.stateNode=e}return _n(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=eo(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Sn]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),e=!1}else a=wh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Gi(n),n):(Gi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return _n(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=eo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Sn]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),u=!1}else u=wh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gi(n),n):(Gi(n),null)}return Gi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yc(n,n.updateQueue),_n(n),null);case 4:return Ft(),e===null&&Gd(n.stateNode.containerInfo),_n(n),null;case 10:return es(n.type),_n(n),null;case 19:if(Y(Pn),o=n.memoizedState,o===null)return _n(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Al(o,!1);else{if(Un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Lc(e),f!==null){for(n.flags|=128,Al(o,!1),e=f.updateQueue,n.updateQueue=e,Yc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)r0(a,e),a=a.sibling;return pt(Pn,Pn.current&1|2),Be&&$a(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Qc&&(n.flags|=128,u=!0,Al(o,!1),n.lanes=4194304)}else{if(!u)if(e=Lc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yc(n,e),Al(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Be)return _n(n),null}else 2*T()-o.renderingStartTime>Qc&&a!==536870912&&(n.flags|=128,u=!0,Al(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=Pn.current,pt(Pn,u?a&1|2:a&1),Be&&$a(n,o.treeForkCount),e):(_n(n),null);case 22:case 23:return Gi(n),Vh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(_n(n),n.subtreeFlags&6&&(n.flags|=8192)):_n(n),a=n.updateQueue,a!==null&&Yc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Y(mr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),es(Bn),_n(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function hy(e,n){switch(Rh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return es(Bn),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ne(n),null;case 31:if(n.memoizedState!==null){if(Gi(n),n.alternate===null)throw Error(s(340));hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(Pn),null;case 4:return Ft(),null;case 10:return es(n.type),null;case 22:case 23:return Gi(n),Vh(),e!==null&&Y(mr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return es(Bn),null;case 25:return null;default:return null}}function Lg(e,n){switch(Rh(n),n.tag){case 3:es(Bn),Ft();break;case 26:case 27:case 5:ne(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&Gi(n);break;case 13:Gi(n);break;case 19:Y(Pn);break;case 10:es(n.type);break;case 22:case 23:Gi(n),Vh(),e!==null&&Y(mr);break;case 24:es(Bn)}}function Rl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){nn(n,n.return,R)}}function Os(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var G=a,ot=R;try{ot()}catch(gt){nn(u,G,gt)}}}o=o.next}while(o!==f)}}catch(gt){nn(n,n.return,gt)}}function Og(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{T0(n,a)}catch(o){nn(e,e.return,o)}}}function Ig(e,n,a){a.props=Sr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){nn(e,n,o)}}function Cl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){nn(e,n,u)}}function Ba(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){nn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){nn(e,n,u)}else a.current=null}function Pg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){nn(e,e.return,u)}}function Sd(e,n,a){try{var o=e.stateNode;Oy(o,e.type,a,n),o[Nn]=n}catch(u){nn(e,e.return,u)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gs(e.type)||e.tag===4}function yd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Md(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&Gs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Md(e,n,a),e=e.sibling;e!==null;)Md(e,n,a),e=e.sibling}function qc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Gs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(qc(e,n,a),e=e.sibling;e!==null;)qc(e,n,a),e=e.sibling}function Bg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ri(n,o,a),n[Sn]=e,n[Nn]=a}catch(f){nn(e,e.return,f)}}var rs=!1,Gn=!1,Ed=!1,zg=typeof WeakSet=="function"?WeakSet:Set,Kn=null;function dy(e,n){if(e=e.containerInfo,Xd=pu,e=Qm(e),gh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,R=-1,G=-1,ot=0,gt=0,xt=e,lt=null;e:for(;;){for(var ft;xt!==a||u!==0&&xt.nodeType!==3||(R=v+u),xt!==f||o!==0&&xt.nodeType!==3||(G=v+o),xt.nodeType===3&&(v+=xt.nodeValue.length),(ft=xt.firstChild)!==null;)lt=xt,xt=ft;for(;;){if(xt===e)break e;if(lt===a&&++ot===u&&(R=v),lt===f&&++gt===o&&(G=v),(ft=xt.nextSibling)!==null)break;xt=lt,lt=xt.parentNode}xt=ft}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wd={focusedElem:e,selectionRange:a},pu=!1,Kn=n;Kn!==null;)if(n=Kn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Kn=e;else for(;Kn!==null;){switch(n=Kn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Zt=Sr(a.type,u);e=o.getSnapshotBeforeUpdate(Zt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(le){nn(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)jd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Kn=e;break}Kn=n.return}}function Hg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ls(e,a),o&4&&Rl(5,a);break;case 1:if(ls(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){nn(a,a.return,v)}else{var u=Sr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){nn(a,a.return,v)}}o&64&&Og(a),o&512&&Cl(a,a.return);break;case 3:if(ls(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{T0(e,n)}catch(v){nn(a,a.return,v)}}break;case 27:n===null&&o&4&&Bg(a);case 26:case 5:ls(e,a),n===null&&o&4&&Pg(a),o&512&&Cl(a,a.return);break;case 12:ls(e,a);break;case 31:ls(e,a),o&4&&kg(e,a);break;case 13:ls(e,a),o&4&&Xg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=My.bind(null,a),Vy(e,a))));break;case 22:if(o=a.memoizedState!==null||rs,!o){n=n!==null&&n.memoizedState!==null||Gn,u=rs;var f=Gn;rs=o,(Gn=n)&&!f?cs(e,a,(a.subtreeFlags&8772)!==0):ls(e,a),rs=u,Gn=f}break;case 30:break;default:ls(e,a)}}function Gg(e){var n=e.alternate;n!==null&&(e.alternate=null,Gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vn=null,Ci=!1;function os(e,n,a){for(a=a.child;a!==null;)Vg(e,n,a),a=a.sibling}function Vg(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:Gn||Ba(a,n),os(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Gn||Ba(a,n);var o=vn,u=Ci;Gs(a.type)&&(vn=a.stateNode,Ci=!1),os(e,n,a),Fl(a.stateNode),vn=o,Ci=u;break;case 5:Gn||Ba(a,n);case 6:if(o=vn,u=Ci,vn=null,os(e,n,a),vn=o,Ci=u,vn!==null)if(Ci)try{(vn.nodeType===9?vn.body:vn.nodeName==="HTML"?vn.ownerDocument.body:vn).removeChild(a.stateNode)}catch(f){nn(a,n,f)}else try{vn.removeChild(a.stateNode)}catch(f){nn(a,n,f)}break;case 18:vn!==null&&(Ci?(e=vn,O_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Eo(e)):O_(vn,a.stateNode));break;case 4:o=vn,u=Ci,vn=a.stateNode.containerInfo,Ci=!0,os(e,n,a),vn=o,Ci=u;break;case 0:case 11:case 14:case 15:Os(2,a,n),Gn||Os(4,a,n),os(e,n,a);break;case 1:Gn||(Ba(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ig(a,n,o)),os(e,n,a);break;case 21:os(e,n,a);break;case 22:Gn=(o=Gn)||a.memoizedState!==null,os(e,n,a),Gn=o;break;default:os(e,n,a)}}function kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Eo(e)}catch(a){nn(n,n.return,a)}}}function Xg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(a){nn(n,n.return,a)}}function py(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new zg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new zg),n;default:throw Error(s(435,e.tag))}}function jc(e,n){var a=py(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ey.bind(null,e,o);o.then(u,u)}})}function wi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if(Gs(R.type)){vn=R.stateNode,Ci=!1;break t}break;case 5:vn=R.stateNode,Ci=!1;break t;case 3:case 4:vn=R.stateNode.containerInfo,Ci=!0;break t}R=R.return}if(vn===null)throw Error(s(160));Vg(f,v,u),vn=null,Ci=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wg(n,e),n=n.sibling}var Sa=null;function Wg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wi(n,e),Di(e),o&4&&(Os(3,e,e.return),Rl(3,e),Os(5,e,e.return));break;case 1:wi(n,e),Di(e),o&512&&(Gn||a===null||Ba(a,a.return)),o&64&&rs&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Sa;if(wi(n,e),Di(e),o&512&&(Gn||a===null||Ba(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Oa]||f[Sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),ri(f,o,a),f[Sn]=e,k(f),o=f;break t;case"link":var v=W_("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}f=u.createElement(o),ri(f,o,a),u.head.appendChild(f);break;case"meta":if(v=W_("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}f=u.createElement(o),ri(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Sn]=e,k(f),o=f}e.stateNode=o}else Y_(u,e.type,e.stateNode);else e.stateNode=X_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Y_(u,e.type,e.stateNode):X_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Sd(e,e.memoizedProps,a.memoizedProps)}break;case 27:wi(n,e),Di(e),o&512&&(Gn||a===null||Ba(a,a.return)),a!==null&&o&4&&Sd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(wi(n,e),Di(e),o&512&&(Gn||a===null||Ba(a,a.return)),e.flags&32){u=e.stateNode;try{wn(u,"")}catch(Zt){nn(e,e.return,Zt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Sd(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Ed=!0);break;case 6:if(wi(n,e),Di(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Zt){nn(e,e.return,Zt)}}break;case 3:if(uu=null,u=Sa,Sa=lu(n.containerInfo),wi(n,e),Sa=u,Di(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(n.containerInfo)}catch(Zt){nn(e,e.return,Zt)}Ed&&(Ed=!1,Yg(e));break;case 4:o=Sa,Sa=lu(e.stateNode.containerInfo),wi(n,e),Di(e),Sa=o;break;case 12:wi(n,e),Di(e);break;case 31:wi(n,e),Di(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jc(e,o)));break;case 13:wi(n,e),Di(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ot=rs,gt=Gn;if(rs=ot||u,Gn=gt||G,wi(n,e),Gn=gt,rs=ot,Di(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||rs||Gn||yr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=G.stateNode;var xt=G.memoizedProps.style,lt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Zt){nn(G,G.return,Zt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Zt){nn(G,G.return,Zt)}}}else if(n.tag===18){if(a===null){G=n;try{var ft=G.stateNode;u?I_(ft,!0):I_(G.stateNode,!1)}catch(Zt){nn(G,G.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jc(e,a))));break;case 19:wi(n,e),Di(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jc(e,o)));break;case 30:break;case 21:break;default:wi(n,e),Di(e)}}function Di(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Fg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=yd(e);qc(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(wn(v,""),a.flags&=-33);var R=yd(e);qc(e,R,v);break;case 3:case 4:var G=a.stateNode.containerInfo,ot=yd(e);Md(e,ot,G);break;default:throw Error(s(161))}}catch(gt){nn(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ls(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hg(e,n.alternate,n),n=n.sibling}function yr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Os(4,n,n.return),yr(n);break;case 1:Ba(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ig(n,n.return,a),yr(n);break;case 27:Fl(n.stateNode);case 26:case 5:Ba(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}e=e.sibling}}function cs(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:cs(u,f,a),Rl(4,f);break;case 1:if(cs(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){nn(o,o.return,ot)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)E0(G[u],R)}catch(ot){nn(o,o.return,ot)}}a&&v&64&&Og(f),Cl(f,f.return);break;case 27:Bg(f);case 26:case 5:cs(u,f,a),a&&o===null&&v&4&&Pg(f),Cl(f,f.return);break;case 12:cs(u,f,a);break;case 31:cs(u,f,a),a&&v&4&&kg(u,f);break;case 13:cs(u,f,a),a&&v&4&&Xg(u,f);break;case 22:f.memoizedState===null&&cs(u,f,a),Cl(f,f.return);break;case 30:break;default:cs(u,f,a)}n=n.sibling}}function Td(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&pl(a))}function bd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pl(e))}function ya(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qg(e,n,a,o),n=n.sibling}function qg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ya(e,n,a,o),u&2048&&Rl(9,n);break;case 1:ya(e,n,a,o);break;case 3:ya(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pl(e)));break;case 12:if(u&2048){ya(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){nn(n,n.return,G)}}else ya(e,n,a,o);break;case 31:ya(e,n,a,o);break;case 13:ya(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?ya(e,n,a,o):wl(e,n):f._visibility&2?ya(e,n,a,o):(f._visibility|=2,fo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Td(v,n);break;case 24:ya(e,n,a,o),u&2048&&bd(n.alternate,n);break;default:ya(e,n,a,o)}}function fo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,G=o,ot=v.flags;switch(v.tag){case 0:case 11:case 15:fo(f,v,R,G,u),Rl(8,v);break;case 23:break;case 22:var gt=v.stateNode;v.memoizedState!==null?gt._visibility&2?fo(f,v,R,G,u):wl(f,v):(gt._visibility|=2,fo(f,v,R,G,u)),u&&ot&2048&&Td(v.alternate,v);break;case 24:fo(f,v,R,G,u),u&&ot&2048&&bd(v.alternate,v);break;default:fo(f,v,R,G,u)}n=n.sibling}}function wl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:wl(a,o),u&2048&&Td(o.alternate,o);break;case 24:wl(a,o),u&2048&&bd(o.alternate,o);break;default:wl(a,o)}n=n.sibling}}var Dl=8192;function ho(e,n,a){if(e.subtreeFlags&Dl)for(e=e.child;e!==null;)jg(e,n,a),e=e.sibling}function jg(e,n,a){switch(e.tag){case 26:ho(e,n,a),e.flags&Dl&&e.memoizedState!==null&&tM(a,Sa,e.memoizedState,e.memoizedProps);break;case 5:ho(e,n,a);break;case 3:case 4:var o=Sa;Sa=lu(e.stateNode.containerInfo),ho(e,n,a),Sa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Dl,Dl=16777216,ho(e,n,a),Dl=o):ho(e,n,a));break;default:ho(e,n,a)}}function Zg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ul(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Kn=o,Qg(o,e)}Zg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kg(e),e=e.sibling}function Kg(e){switch(e.tag){case 0:case 11:case 15:Ul(e),e.flags&2048&&Os(9,e,e.return);break;case 3:Ul(e);break;case 12:Ul(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zc(e)):Ul(e);break;default:Ul(e)}}function Zc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Kn=o,Qg(o,e)}Zg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Os(8,n,n.return),Zc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zc(n));break;default:Zc(n)}e=e.sibling}}function Qg(e,n){for(;Kn!==null;){var a=Kn;switch(a.tag){case 0:case 11:case 15:Os(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:pl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Kn=o;else t:for(a=e;Kn!==null;){o=Kn;var u=o.sibling,f=o.return;if(Gg(o),o===a){Kn=null;break t}if(u!==null){u.return=f,Kn=u;break t}Kn=f}}}var my={getCacheForType:function(e){var n=ai(Bn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ai(Bn).controller.signal}},gy=typeof WeakMap=="function"?WeakMap:Map,Je=0,dn=null,Ue=null,Le=0,en=0,Vi=null,Is=!1,po=!1,Ad=!1,us=0,Un=0,Ps=0,Mr=0,Rd=0,ki=0,mo=0,Nl=null,Ui=null,Cd=!1,Kc=0,Jg=0,Qc=1/0,Jc=null,Fs=null,Yn=0,Bs=null,go=null,fs=0,wd=0,Dd=null,$g=null,Ll=0,Ud=null;function Xi(){return(Je&2)!==0&&Le!==0?Le&-Le:L.T!==null?Fd():ei()}function t_(){if(ki===0)if((Le&536870912)===0||Be){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ki=e}else ki=536870912;return e=Hi.current,e!==null&&(e.flags|=32),ki}function Ni(e,n,a){(e===dn&&(en===2||en===9)||e.cancelPendingCommit!==null)&&(_o(e,0),zs(e,Le,ki,!1)),li(e,a),((Je&2)===0||e!==dn)&&(e===dn&&((Je&2)===0&&(Mr|=a),Un===4&&zs(e,Le,ki,!1)),za(e))}function e_(e,n,a){if((Je&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||kt(e,n),u=o?xy(e,n):Ld(e,n,!0),f=o;do{if(u===0){po&&!o&&zs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!_y(a)){u=Ld(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=e;u=Nl;var G=R.current.memoizedState.isDehydrated;if(G&&(_o(R,v).flags|=256),v=Ld(R,v,!1),v!==2){if(Ad&&!G){R.errorRecoveryDisabledLanes|=f,Mr|=f,u=4;break t}f=Ui,Ui=u,f!==null&&(Ui===null?Ui=f:Ui.push.apply(Ui,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){_o(e,0),zs(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:zs(o,n,ki,!Is);break t;case 2:Ui=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kc+300-T(),10<u)){if(zs(o,n,ki,!Is),ht(o,0,!0)!==0)break t;fs=n,o.timeoutHandle=N_(n_.bind(null,o,a,Ui,Jc,Cd,n,ki,Mr,mo,Is,f,"Throttled",-0,0),u);break t}n_(o,a,Ui,Jc,Cd,n,ki,Mr,mo,Is,f,null,-0,0)}}break}while(!0);za(e)}function n_(e,n,a,o,u,f,v,R,G,ot,gt,xt,lt,ft){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},jg(n,f,xt);var Zt=(f&62914560)===f?Kc-T():(f&4194048)===f?Jg-T():0;if(Zt=eM(xt,Zt),Zt!==null){fs=f,e.cancelPendingCommit=Zt(u_.bind(null,e,n,f,a,o,u,v,R,G,gt,xt,null,lt,ft)),zs(e,f,v,!ot);return}}u_(e,n,f,a,o,u,v,R,G)}function _y(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Bi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zs(e,n,a,o){n&=~Rd,n&=~Mr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&ji(e,a,n)}function $c(){return(Je&6)===0?(Ol(0),!1):!0}function Nd(){if(Ue!==null){if(en===0)var e=Ue.return;else e=Ue,ts=dr=null,jh(e),ro=null,gl=0,e=Ue;for(;e!==null;)Lg(e.alternate,e),e=e.return;Ue=null}}function _o(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Fy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fs=0,Nd(),dn=e,Ue=a=Ja(e.current,null),Le=n,en=0,Vi=null,Is=!1,po=kt(e,n),Ad=!1,mo=ki=Rd=Mr=Ps=Un=0,Ui=Nl=null,Cd=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ot(o),f=1<<u;n|=e[u],o&=~f}return us=n,Sc(),a}function i_(e,n){Se=null,L.H=Tl,n===so||n===Cc?(n=x0(),en=3):n===Ph?(n=x0(),en=4):en=n===ud?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vi=n,Ue===null&&(Un=1,Vc(e,$i(n,e.current)))}function a_(){var e=Hi.current;return e===null?!0:(Le&4194048)===Le?ia===null:(Le&62914560)===Le||(Le&536870912)!==0?e===ia:!1}function s_(){var e=L.H;return L.H=Tl,e===null?Tl:e}function r_(){var e=L.A;return L.A=my,e}function tu(){Un=4,Is||(Le&4194048)!==Le&&Hi.current!==null||(po=!0),(Ps&134217727)===0&&(Mr&134217727)===0||dn===null||zs(dn,Le,ki,!1)}function Ld(e,n,a){var o=Je;Je|=2;var u=s_(),f=r_();(dn!==e||Le!==n)&&(Jc=null,_o(e,n)),n=!1;var v=Un;t:do try{if(en!==0&&Ue!==null){var R=Ue,G=Vi;switch(en){case 8:Nd(),v=6;break t;case 3:case 2:case 9:case 6:Hi.current===null&&(n=!0);var ot=en;if(en=0,Vi=null,vo(e,R,G,ot),a&&po){v=0;break t}break;default:ot=en,en=0,Vi=null,vo(e,R,G,ot)}}vy(),v=Un;break}catch(gt){i_(e,gt)}while(!0);return n&&e.shellSuspendCounter++,ts=dr=null,Je=o,L.H=u,L.A=f,Ue===null&&(dn=null,Le=0,Sc()),v}function vy(){for(;Ue!==null;)o_(Ue)}function xy(e,n){var a=Je;Je|=2;var o=s_(),u=r_();dn!==e||Le!==n?(Jc=null,Qc=T()+500,_o(e,n)):po=kt(e,n);t:do try{if(en!==0&&Ue!==null){n=Ue;var f=Vi;e:switch(en){case 1:en=0,Vi=null,vo(e,n,f,1);break;case 2:case 9:if(_0(f)){en=0,Vi=null,l_(n);break}n=function(){en!==2&&en!==9||dn!==e||(en=7),za(e)},f.then(n,n);break t;case 3:en=7;break t;case 4:en=5;break t;case 7:_0(f)?(en=0,Vi=null,l_(n)):(en=0,Vi=null,vo(e,n,f,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var R=Ue;if(v?q_(v):R.stateNode.complete){en=0,Vi=null;var G=R.sibling;if(G!==null)Ue=G;else{var ot=R.return;ot!==null?(Ue=ot,eu(ot)):Ue=null}break e}}en=0,Vi=null,vo(e,n,f,5);break;case 6:en=0,Vi=null,vo(e,n,f,6);break;case 8:Nd(),Un=6;break t;default:throw Error(s(462))}}Sy();break}catch(gt){i_(e,gt)}while(!0);return ts=dr=null,L.H=o,L.A=u,Je=a,Ue!==null?0:(dn=null,Le=0,Sc(),Un)}function Sy(){for(;Ue!==null&&!Kt();)o_(Ue)}function o_(e){var n=Ug(e.alternate,e,us);e.memoizedProps=e.pendingProps,n===null?eu(e):Ue=n}function l_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=bg(a,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=bg(a,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:jh(n);default:Lg(a,n),n=Ue=r0(n,us),n=Ug(a,n,us)}e.memoizedProps=e.pendingProps,n===null?eu(e):Ue=n}function vo(e,n,a,o){ts=dr=null,jh(n),ro=null,gl=0;var u=n.return;try{if(ly(e,u,n,a,Le)){Un=1,Vc(e,$i(a,e.current)),Ue=null;return}}catch(f){if(u!==null)throw Ue=u,f;Un=1,Vc(e,$i(a,e.current)),Ue=null;return}n.flags&32768?(Be||o===1?e=!0:po||(Le&536870912)!==0?e=!1:(Is=e=!0,(o===2||o===9||o===3||o===6)&&(o=Hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),c_(n,e)):eu(n)}function eu(e){var n=e;do{if((n.flags&32768)!==0){c_(n,Is);return}e=n.return;var a=fy(n.alternate,n,us);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);Un===0&&(Un=5)}function c_(e,n){do{var a=hy(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);Un=6,Ue=null}function u_(e,n,a,o,u,f,v,R,G){e.cancelPendingCommit=null;do nu();while(Yn!==0);if((Je&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=yh,bi(e,a,f,v,R,G),e===dn&&(Ue=dn=null,Le=0),go=n,Bs=e,fs=a,wd=f,Dd=u,$g=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ty(dt,function(){return m_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=D.p,D.p=2,v=Je,Je|=4;try{dy(e,n,a)}finally{Je=v,D.p=u,L.T=o}}Yn=1,f_(),h_(),d_()}}function f_(){if(Yn===1){Yn=0;var e=Bs,n=go,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=D.p;D.p=2;var u=Je;Je|=4;try{Wg(n,e);var f=Wd,v=Qm(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Km(R.ownerDocument.documentElement,R)){if(G!==null&&gh(R)){var ot=G.start,gt=G.end;if(gt===void 0&&(gt=ot),"selectionStart"in R)R.selectionStart=ot,R.selectionEnd=Math.min(gt,R.value.length);else{var xt=R.ownerDocument||document,lt=xt&&xt.defaultView||window;if(lt.getSelection){var ft=lt.getSelection(),Zt=R.textContent.length,le=Math.min(G.start,Zt),cn=G.end===void 0?le:Math.min(G.end,Zt);!ft.extend&&le>cn&&(v=cn,cn=le,le=v);var J=Zm(R,le),X=Zm(R,cn);if(J&&X&&(ft.rangeCount!==1||ft.anchorNode!==J.node||ft.anchorOffset!==J.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var rt=xt.createRange();rt.setStart(J.node,J.offset),ft.removeAllRanges(),le>cn?(ft.addRange(rt),ft.extend(X.node,X.offset)):(rt.setEnd(X.node,X.offset),ft.addRange(rt))}}}}for(xt=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&xt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var vt=xt[R];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}pu=!!Xd,Wd=Xd=null}finally{Je=u,D.p=o,L.T=a}}e.current=n,Yn=2}}function h_(){if(Yn===2){Yn=0;var e=Bs,n=go,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=D.p;D.p=2;var u=Je;Je|=4;try{Hg(e,n.alternate,n)}finally{Je=u,D.p=o,L.T=a}}Yn=3}}function d_(){if(Yn===4||Yn===3){Yn=0,I();var e=Bs,n=go,a=fs,o=$g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Yn=5:(Yn=0,go=Bs=null,p_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Fs=null),qa(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=D.p,D.p=2,L.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{L.T=n,D.p=u}}(fs&3)!==0&&nu(),za(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ud?Ll++:(Ll=0,Ud=e):Ll=0,Ol(0)}}function p_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,pl(n)))}function nu(){return f_(),h_(),d_(),m_()}function m_(){if(Yn!==5)return!1;var e=Bs,n=wd;wd=0;var a=qa(fs),o=L.T,u=D.p;try{D.p=32>a?32:a,L.T=null,a=Dd,Dd=null;var f=Bs,v=fs;if(Yn=0,go=Bs=null,fs=0,(Je&6)!==0)throw Error(s(331));var R=Je;if(Je|=4,Kg(f.current),qg(f,f.current,v,a),Je=R,Ol(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{D.p=u,L.T=o,p_(e,n)}}function g_(e,n,a){n=$i(a,n),n=cd(e.stateNode,n,2),e=Us(e,n,2),e!==null&&(li(e,2),za(e))}function nn(e,n,a){if(e.tag===3)g_(e,e,a);else for(;n!==null;){if(n.tag===3){g_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fs===null||!Fs.has(o))){e=$i(a,e),a=_g(2),o=Us(n,a,2),o!==null&&(vg(a,o,n,e),li(o,2),za(o));break}}n=n.return}}function Od(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new gy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ad=!0,u.add(a),e=yy.bind(null,e,n,a),n.then(e,e))}function yy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,dn===e&&(Le&a)===a&&(Un===4||Un===3&&(Le&62914560)===Le&&300>T()-Kc?(Je&2)===0&&_o(e,0):Rd|=a,mo===Le&&(mo=0)),za(e)}function __(e,n){n===0&&(n=de()),e=ur(e,n),e!==null&&(li(e,n),za(e))}function My(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),__(e,a)}function Ey(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),__(e,a)}function Ty(e,n){return Ae(e,n)}var iu=null,xo=null,Id=!1,au=!1,Pd=!1,Hs=0;function za(e){e!==xo&&e.next===null&&(xo===null?iu=xo=e:xo=xo.next=e),au=!0,Id||(Id=!0,Ay())}function Ol(e,n){if(!Pd&&au){Pd=!0;do for(var a=!1,o=iu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,y_(o,f))}else f=Le,f=ht(o,o===dn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||kt(o,f)||(a=!0,y_(o,f));o=o.next}while(a);Pd=!1}}function by(){v_()}function v_(){au=Id=!1;var e=0;Hs!==0&&Py()&&(e=Hs);for(var n=T(),a=null,o=iu;o!==null;){var u=o.next,f=x_(o,n);f===0?(o.next=null,a===null?iu=u:a.next=u,u===null&&(xo=a)):(a=o,(e!==0||(f&3)!==0)&&(au=!0)),o=u}Yn!==0&&Yn!==5||Ol(e),Hs!==0&&(Hs=0)}function x_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ot(f),R=1<<v,G=u[v];G===-1?((R&a)===0||(R&o)!==0)&&(u[v]=ce(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=dn,a=Le,a=ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(en===2||en===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Xe(o),qa(a)){case 2:case 8:a=St;break;case 32:a=dt;break;case 268435456:a=Dt;break;default:a=dt}return o=S_.bind(null,e),a=Ae(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Xe(o),e.callbackPriority=2,e.callbackNode=null,2}function S_(e,n){if(Yn!==0&&Yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nu()&&e.callbackNode!==a)return null;var o=Le;return o=ht(e,e===dn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(e_(e,o,n),x_(e,T()),e.callbackNode!=null&&e.callbackNode===a?S_.bind(null,e):null)}function y_(e,n){if(nu())return null;e_(e,n,!0)}function Ay(){By(function(){(Je&6)!==0?Ae(mt,by):v_()})}function Fd(){if(Hs===0){var e=io;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Hs=e}return Hs}function M_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rr(""+e)}function E_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ry(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=M_((u[Nn]||null).action),v=o.submitter;v&&(n=(n=v[Nn]||null)?M_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new He("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Hs!==0){var G=v?E_(u,v):new FormData(u);id(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=v?E_(u,v):new FormData(u),id(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Bd=0;Bd<Sh.length;Bd++){var zd=Sh[Bd],Cy=zd.toLowerCase(),wy=zd[0].toUpperCase()+zd.slice(1);xa(Cy,"on"+wy)}xa(t0,"onAnimationEnd"),xa(e0,"onAnimationIteration"),xa(n0,"onAnimationStart"),xa("dblclick","onDoubleClick"),xa("focusin","onFocus"),xa("focusout","onBlur"),xa(WS,"onTransitionRun"),xa(YS,"onTransitionStart"),xa(qS,"onTransitionCancel"),xa(i0,"onTransitionEnd"),Nt("onMouseEnter",["mouseout","mouseover"]),Nt("onMouseLeave",["mouseout","mouseover"]),Nt("onPointerEnter",["pointerout","pointerover"]),Nt("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il));function T_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],G=R.instance,ot=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=ot;try{f(u)}catch(gt){xc(gt)}u.currentTarget=null,f=G}else for(v=0;v<o.length;v++){if(R=o[v],G=R.instance,ot=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=ot;try{f(u)}catch(gt){xc(gt)}u.currentTarget=null,f=G}}}}function Ne(e,n){var a=n[La];a===void 0&&(a=n[La]=new Set);var o=e+"__bubble";a.has(o)||(b_(n,e,2,!1),a.add(o))}function Hd(e,n,a){var o=0;n&&(o|=4),b_(a,e,o,n)}var su="_reactListening"+Math.random().toString(36).slice(2);function Gd(e){if(!e[su]){e[su]=!0,ct.forEach(function(a){a!=="selectionchange"&&(Dy.has(a)||Hd(a,!1,e),Hd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[su]||(n[su]=!0,Hd("selectionchange",!1,n))}}function b_(e,n,a,o){switch(tv(n)){case 2:var u=aM;break;case 8:u=sM;break;default:u=np}a=u.bind(null,n,a,e),u=void 0,!te||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Vd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=ga(R),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){o=f=v;continue t}R=R.parentNode}}o=o.return}al(function(){var ot=f,gt=or(a),xt=[];t:{var lt=a0.get(e);if(lt!==void 0){var ft=He,Zt=e;switch(e){case"keypress":if(Ye(a)===0)break t;case"keydown":case"keyup":ft=Qa;break;case"focusin":Zt="focus",ft=we;break;case"focusout":Zt="blur",ft=we;break;case"beforeblur":case"afterblur":ft=we;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Pi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Ln;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=AS;break;case t0:case e0:case n0:ft=bn;break;case i0:ft=CS;break;case"scroll":case"scrollend":ft=En;break;case"wheel":ft=DS;break;case"copy":case"cut":case"paste":ft=vi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=qr;break;case"toggle":case"beforetoggle":ft=NS}var le=(n&4)!==0,cn=!le&&(e==="scroll"||e==="scrollend"),J=le?lt!==null?lt+"Capture":null:lt;le=[];for(var X=ot,rt;X!==null;){var vt=X;if(rt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||rt===null||J===null||(vt=Ts(X,J),vt!=null&&le.push(Pl(X,vt,rt))),cn)break;X=X.return}0<le.length&&(lt=new ft(lt,Zt,null,a,gt),xt.push({event:lt,listeners:le}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",lt&&a!==Wr&&(Zt=a.relatedTarget||a.fromElement)&&(ga(Zt)||Zt[ma]))break t;if((ft||lt)&&(lt=gt.window===gt?gt:(lt=gt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ft?(Zt=a.relatedTarget||a.toElement,ft=ot,Zt=Zt?ga(Zt):null,Zt!==null&&(cn=c(Zt),le=Zt.tag,Zt!==cn||le!==5&&le!==27&&le!==6)&&(Zt=null)):(ft=null,Zt=ot),ft!==Zt)){if(le=Pi,vt="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(le=qr,vt="onPointerLeave",J="onPointerEnter",X="pointer"),cn=ft==null?lt:mn(ft),rt=Zt==null?lt:mn(Zt),lt=new le(vt,X+"leave",ft,a,gt),lt.target=cn,lt.relatedTarget=rt,vt=null,ga(gt)===ot&&(le=new le(J,X+"enter",Zt,a,gt),le.target=rt,le.relatedTarget=cn,vt=le),cn=vt,ft&&Zt)e:{for(le=Uy,J=ft,X=Zt,rt=0,vt=J;vt;vt=le(vt))rt++;vt=0;for(var ie=X;ie;ie=le(ie))vt++;for(;0<rt-vt;)J=le(J),rt--;for(;0<vt-rt;)X=le(X),vt--;for(;rt--;){if(J===X||X!==null&&J===X.alternate){le=J;break e}J=le(J),X=le(X)}le=null}else le=null;ft!==null&&A_(xt,lt,ft,le,!1),Zt!==null&&cn!==null&&A_(xt,cn,Zt,le,!0)}}t:{if(lt=ot?mn(ot):window,ft=lt.nodeName&&lt.nodeName.toLowerCase(),ft==="select"||ft==="input"&&lt.type==="file")var je=km;else if(Gm(lt))if(Xm)je=VS;else{je=HS;var ee=zS}else ft=lt.nodeName,!ft||ft.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?ot&&ja(ot.elementType)&&(je=km):je=GS;if(je&&(je=je(e,ot))){Vm(xt,je,a,gt);break t}ee&&ee(e,lt,ot),e==="focusout"&&ot&&lt.type==="number"&&ot.memoizedProps.value!=null&&_i(lt,"number",lt.value)}switch(ee=ot?mn(ot):window,e){case"focusin":(Gm(ee)||ee.contentEditable==="true")&&(Zr=ee,_h=ot,fl=null);break;case"focusout":fl=_h=Zr=null;break;case"mousedown":vh=!0;break;case"contextmenu":case"mouseup":case"dragend":vh=!1,Jm(xt,a,gt);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":Jm(xt,a,gt)}var Ee;if(dh)t:{switch(e){case"compositionstart":var Oe="onCompositionStart";break t;case"compositionend":Oe="onCompositionEnd";break t;case"compositionupdate":Oe="onCompositionUpdate";break t}Oe=void 0}else jr?zm(e,a)&&(Oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Oe="onCompositionStart");Oe&&(Pm&&a.locale!=="ko"&&(jr||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&jr&&(Ee=Pe()):(qt=gt,Bt="value"in qt?qt.value:qt.textContent,jr=!0)),ee=ru(ot,Oe),0<ee.length&&(Oe=new In(Oe,e,null,a,gt),xt.push({event:Oe,listeners:ee}),Ee?Oe.data=Ee:(Ee=Hm(a),Ee!==null&&(Oe.data=Ee)))),(Ee=OS?IS(e,a):PS(e,a))&&(Oe=ru(ot,"onBeforeInput"),0<Oe.length&&(ee=new In("onBeforeInput","beforeinput",null,a,gt),xt.push({event:ee,listeners:Oe}),ee.data=Ee)),Ry(xt,e,ot,a,gt)}T_(xt,n)})}function Pl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ru(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ts(e,a),u!=null&&o.unshift(Pl(e,u,f)),u=Ts(e,n),u!=null&&o.push(Pl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Uy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function A_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,G=R.alternate,ot=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||ot===null||(G=ot,u?(ot=Ts(a,f),ot!=null&&v.unshift(Pl(a,ot,G))):u||(ot=Ts(a,f),ot!=null&&v.push(Pl(a,ot,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Ny=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function R_(e){return(typeof e=="string"?e:""+e).replace(Ny,`
`).replace(Ly,"")}function C_(e,n){return n=R_(n),R_(e)===n}function ln(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wn(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,a,o);break;case"style":Ki(e,o,f);break;case"data":if(n!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ln(e,n,"name",u.name,u,null),ln(e,n,"formEncType",u.formEncType,u,null),ln(e,n,"formMethod",u.formMethod,u,null),ln(e,n,"formTarget",u.formTarget,u,null)):(ln(e,n,"encType",u.encType,u,null),ln(e,n,"method",u.method,u,null),ln(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&Ne("scroll",e);break;case"onScrollEnd":o!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=rr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),se(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_c.get(a)||a,se(e,a,o))}}function kd(e,n,a,o,u,f){switch(a){case"style":Ki(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wn(e,o):(typeof o=="number"||typeof o=="bigint")&&wn(e,""+o);break;case"onScroll":o!=null&&Ne("scroll",e);break;case"onScrollEnd":o!=null&&Ne("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):se(e,a,o)}}}function ri(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,f,v,a,null)}}u&&ln(e,n,"srcSet",a.srcSet,a,null),o&&ln(e,n,"src",a.src,a,null);return;case"input":Ne("invalid",e);var R=f=v=u=null,G=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":v=gt;break;case"checked":G=gt;break;case"defaultChecked":ot=gt;break;case"value":f=gt;break;case"defaultValue":R=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:ln(e,n,o,gt,a,null)}}Wn(e,f,R,G,ot,v,u,!1);return;case"select":Ne("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:ln(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?ui(e,!!o,n,!1):a!=null&&ui(e,!!o,a,!0);return;case"textarea":Ne("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:ln(e,n,v,R,a,null)}Mn(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ln(e,n,G,o,a,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(o=0;o<Il.length;o++)Ne(Il[o],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,ot,o,a,null)}return;default:if(ja(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&kd(e,n,gt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&ln(e,n,R,o,a,null))}function Oy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,G=null,ot=null,gt=null;for(ft in a){var xt=a[ft];if(a.hasOwnProperty(ft)&&xt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=xt;default:o.hasOwnProperty(ft)||ln(e,n,ft,null,o,xt)}}for(var lt in o){var ft=o[lt];if(xt=a[lt],o.hasOwnProperty(lt)&&(ft!=null||xt!=null))switch(lt){case"type":f=ft;break;case"name":u=ft;break;case"checked":ot=ft;break;case"defaultChecked":gt=ft;break;case"value":v=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==xt&&ln(e,n,lt,ft,o,xt)}}Xn(e,v,R,G,ot,gt,f,u);return;case"select":ft=v=R=lt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ft=G;default:o.hasOwnProperty(f)||ln(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":lt=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==G&&ln(e,n,u,f,o,G)}n=R,a=v,o=ft,lt!=null?ui(e,!!a,lt,!1):!!o!=!!a&&(n!=null?ui(e,!!a,n,!0):ui(e,!!a,a?[]:"",!1));return;case"textarea":ft=lt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:ln(e,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":lt=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&ln(e,n,v,u,o,f)}ze(e,lt,ft);return;case"option":for(var Zt in a)lt=a[Zt],a.hasOwnProperty(Zt)&&lt!=null&&!o.hasOwnProperty(Zt)&&(Zt==="selected"?e.selected=!1:ln(e,n,Zt,null,o,lt));for(G in o)lt=o[G],ft=a[G],o.hasOwnProperty(G)&&lt!==ft&&(lt!=null||ft!=null)&&(G==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":ln(e,n,G,lt,o,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)lt=a[le],a.hasOwnProperty(le)&&lt!=null&&!o.hasOwnProperty(le)&&ln(e,n,le,null,o,lt);for(ot in o)if(lt=o[ot],ft=a[ot],o.hasOwnProperty(ot)&&lt!==ft&&(lt!=null||ft!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:ln(e,n,ot,lt,o,ft)}return;default:if(ja(n)){for(var cn in a)lt=a[cn],a.hasOwnProperty(cn)&&lt!==void 0&&!o.hasOwnProperty(cn)&&kd(e,n,cn,void 0,o,lt);for(gt in o)lt=o[gt],ft=a[gt],!o.hasOwnProperty(gt)||lt===ft||lt===void 0&&ft===void 0||kd(e,n,gt,lt,o,ft);return}}for(var J in a)lt=a[J],a.hasOwnProperty(J)&&lt!=null&&!o.hasOwnProperty(J)&&ln(e,n,J,null,o,lt);for(xt in o)lt=o[xt],ft=a[xt],!o.hasOwnProperty(xt)||lt===ft||lt==null&&ft==null||ln(e,n,xt,lt,o,ft)}function w_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&w_(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ot=G.startTime;if(ot>R)break;var gt=G.transferSize,xt=G.initiatorType;gt&&w_(xt)&&(G=G.responseEnd,v+=gt*(G<R?1:(R-ot)/(G-ot)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xd=null,Wd=null;function ou(e){return e.nodeType===9?e:e.ownerDocument}function D_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qd=null;function Py(){var e=window.event;return e&&e.type==="popstate"?e===qd?!1:(qd=e,!0):(qd=null,!1)}var N_=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,L_=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof L_<"u"?function(e){return L_.resolve(null).then(e).catch(zy)}:N_;function zy(e){setTimeout(function(){throw e})}function Gs(e){return e==="head"}function O_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Eo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fl(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Oa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Fl(e.ownerDocument.body);a=u}while(a);Eo(n)}function I_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function jd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jd(a),Zi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Hy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Oa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=aa(e.nextSibling),e===null)break}return null}function Gy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=aa(e.nextSibling),e===null))return null;return e}function P_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=aa(e.nextSibling),e===null))return null;return e}function Zd(e){return e.data==="$?"||e.data==="$~"}function Kd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function aa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Qd=null;function F_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return aa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function B_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function z_(e,n,a){switch(n=ou(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Fl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zi(e)}var sa=new Map,H_=new Set;function lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var hs=D.d;D.d={f:ky,r:Xy,D:Wy,C:Yy,L:qy,m:jy,X:Ky,S:Zy,M:Qy};function ky(){var e=hs.f(),n=$c();return e||n}function Xy(e){var n=_a(e);n!==null&&n.tag===5&&n.type==="form"?ig(n):hs.r(e)}var So=typeof document>"u"?null:document;function G_(e,n,a){var o=So;if(o&&typeof n=="string"&&n){var u=fe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),H_.has(u)||(H_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),ri(n,"link",e),k(n),o.head.appendChild(n)))}}function Wy(e){hs.D(e),G_("dns-prefetch",e,null)}function Yy(e,n){hs.C(e,n),G_("preconnect",e,n)}function qy(e,n,a){hs.L(e,n,a);var o=So;if(o&&e&&n){var u='link[rel="preload"][as="'+fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+fe(a.imageSizes)+'"]')):u+='[href="'+fe(e)+'"]';var f=u;switch(n){case"style":f=yo(e);break;case"script":f=Mo(e)}sa.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),sa.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bl(f))||n==="script"&&o.querySelector(zl(f))||(n=o.createElement("link"),ri(n,"link",e),k(n),o.head.appendChild(n)))}}function jy(e,n){hs.m(e,n);var a=So;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+fe(o)+'"][href="'+fe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mo(e)}if(!sa.has(f)&&(e=x({rel:"modulepreload",href:e},n),sa.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zl(f)))return}o=a.createElement("link"),ri(o,"link",e),k(o),a.head.appendChild(o)}}}function Zy(e,n,a){hs.S(e,n,a);var o=So;if(o&&e){var u=A(o).hoistableStyles,f=yo(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(Bl(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=sa.get(f))&&Jd(e,a);var G=v=o.createElement("link");k(G),ri(G,"link",e),G._p=new Promise(function(ot,gt){G.onload=ot,G.onerror=gt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,cu(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function Ky(e,n){hs.X(e,n);var a=So;if(a&&e){var o=A(a).hoistableScripts,u=Mo(e),f=o.get(u);f||(f=a.querySelector(zl(u)),f||(e=x({src:e,async:!0},n),(n=sa.get(u))&&$d(e,n),f=a.createElement("script"),k(f),ri(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Qy(e,n){hs.M(e,n);var a=So;if(a&&e){var o=A(a).hoistableScripts,u=Mo(e),f=o.get(u);f||(f=a.querySelector(zl(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=sa.get(u))&&$d(e,n),f=a.createElement("script"),k(f),ri(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function V_(e,n,a,o){var u=(u=et.current)?lu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yo(a.href),a=A(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yo(a.href);var f=A(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Bl(e)))&&!f._p&&(v.instance=f,v.state.loading=5),sa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},sa.set(e,a),f||Jy(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mo(a),a=A(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yo(e){return'href="'+fe(e)+'"'}function Bl(e){return'link[rel="stylesheet"]['+e+"]"}function k_(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Jy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ri(n,"link",a),k(n),e.head.appendChild(n))}function Mo(e){return'[src="'+fe(e)+'"]'}function zl(e){return"script[async]"+e}function X_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+fe(a.href)+'"]');if(o)return n.instance=o,k(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),k(o),ri(o,"style",u),cu(o,a.precedence,e),n.instance=o;case"stylesheet":u=yo(a.href);var f=e.querySelector(Bl(u));if(f)return n.state.loading|=4,n.instance=f,k(f),f;o=k_(a),(u=sa.get(u))&&Jd(o,u),f=(e.ownerDocument||e).createElement("link"),k(f);var v=f;return v._p=new Promise(function(R,G){v.onload=R,v.onerror=G}),ri(f,"link",o),n.state.loading|=4,cu(f,a.precedence,e),n.instance=f;case"script":return f=Mo(a.src),(u=e.querySelector(zl(f)))?(n.instance=u,k(u),u):(o=a,(u=sa.get(f))&&(o=x({},a),$d(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),k(u),ri(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cu(o,a.precedence,e));return n.instance}function cu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Jd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $d(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uu=null;function W_(e,n,a){if(uu===null){var o=new Map,u=uu=new Map;u.set(a,o)}else u=uu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Oa]||f[Sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function Y_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function $y(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yo(o.href),f=n.querySelector(Bl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,o=k_(o),(u=sa.get(u))&&Jd(o,u),f=f.createElement("link"),k(f);var v=f;v._p=new Promise(function(R,G){v.onload=R,v.onerror=G}),ri(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var tp=0;function eM(e,n){return e.stylesheets&&e.count===0&&du(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&du(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&tp===0&&(tp=62500*Iy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&du(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>tp?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hu=null;function du(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hu=new Map,n.forEach(nM,e),hu=null,fu.call(e))}function nM(e,n){if(!(n.state.loading&4)){var a=hu.get(e);if(a)var o=a.get(null);else{a=new Map,hu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=fu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Hl={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function iM(e,n,a,o,u,f,v,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function j_(e,n,a,o,u,f,v,R,G,ot,gt,xt){return e=new iM(e,n,a,v,G,ot,gt,xt,R),n=1,f===!0&&(n|=24),f=zi(3,null,null,n),e.current=f,f.stateNode=e,n=Lh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Fh(f),e}function Z_(e){return e?(e=Jr,e):Jr}function K_(e,n,a,o,u,f){u=Z_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ds(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Us(e,o,n),a!==null&&(Ni(a,e,n),vl(a,e,n))}function Q_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ep(e,n){Q_(e,n),(e=e.alternate)&&Q_(e,n)}function J_(e){if(e.tag===13||e.tag===31){var n=ur(e,67108864);n!==null&&Ni(n,e,67108864),ep(e,67108864)}}function $_(e){if(e.tag===13||e.tag===31){var n=Xi();n=Na(n);var a=ur(e,n);a!==null&&Ni(a,e,n),ep(e,n)}}var pu=!0;function aM(e,n,a,o){var u=L.T;L.T=null;var f=D.p;try{D.p=2,np(e,n,a,o)}finally{D.p=f,L.T=u}}function sM(e,n,a,o){var u=L.T;L.T=null;var f=D.p;try{D.p=8,np(e,n,a,o)}finally{D.p=f,L.T=u}}function np(e,n,a,o){if(pu){var u=ip(o);if(u===null)Vd(e,n,o,mu,a),ev(e,o);else if(oM(u,e,n,a,o))o.stopPropagation();else if(ev(e,o),n&4&&-1<rM.indexOf(e)){for(;u!==null;){var f=_a(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Mt(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var G=1<<31-Ot(v);R.entanglements[1]|=G,v&=~G}za(f),(Je&6)===0&&(Qc=T()+500,Ol(0))}}break;case 31:case 13:R=ur(f,2),R!==null&&Ni(R,f,2),$c(),ep(f,2)}if(f=ip(o),f===null&&Vd(e,n,o,mu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Vd(e,n,o,null,a)}}function ip(e){return e=or(e),ap(e)}var mu=null;function ap(e){if(mu=null,e=ga(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mu=e,null}function tv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case mt:return 2;case St:return 8;case dt:case Xt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var sp=!1,Vs=null,ks=null,Xs=null,Gl=new Map,Vl=new Map,Ws=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ev(e,n){switch(e){case"focusin":case"focusout":Vs=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Xs=null;break;case"pointerover":case"pointerout":Gl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vl.delete(n.pointerId)}}function kl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=_a(n),n!==null&&J_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function oM(e,n,a,o,u){switch(n){case"focusin":return Vs=kl(Vs,e,n,a,o,u),!0;case"dragenter":return ks=kl(ks,e,n,a,o,u),!0;case"mouseover":return Xs=kl(Xs,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Gl.set(f,kl(Gl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Vl.set(f,kl(Vl.get(f)||null,e,n,a,o,u)),!0}return!1}function nv(e){var n=ga(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Es(e.priority,function(){$_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Es(e.priority,function(){$_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ip(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Wr=o,a.target.dispatchEvent(o),Wr=null}else return n=_a(a),n!==null&&J_(n),e.blockedOn=a,!1;n.shift()}return!0}function iv(e,n,a){gu(e)&&a.delete(n)}function lM(){sp=!1,Vs!==null&&gu(Vs)&&(Vs=null),ks!==null&&gu(ks)&&(ks=null),Xs!==null&&gu(Xs)&&(Xs=null),Gl.forEach(iv),Vl.forEach(iv)}function _u(e,n){e.blockedOn===n&&(e.blockedOn=null,sp||(sp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,lM)))}var vu=null;function av(e){vu!==e&&(vu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vu===e&&(vu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ap(o||a)===null)continue;break}var f=_a(a);f!==null&&(e.splice(n,3),n-=3,id(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Eo(e){function n(G){return _u(G,e)}Vs!==null&&_u(Vs,e),ks!==null&&_u(ks,e),Xs!==null&&_u(Xs,e),Gl.forEach(n),Vl.forEach(n);for(var a=0;a<Ws.length;a++){var o=Ws[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ws.length&&(a=Ws[0],a.blockedOn===null);)nv(a),a.blockedOn===null&&Ws.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[Nn]||null;if(typeof f=="function")v||av(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Nn]||null)R=v.formAction;else if(ap(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),av(a)}}}function sv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rp(e){this._internalRoot=e}xu.prototype.render=rp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Xi();K_(a,o,e,n,null,null)},xu.prototype.unmount=rp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;K_(e.current,2,null,e,null,null),$c(),n[ma]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var n=ei();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ws.length&&n!==0&&n<Ws[a].priority;a++);Ws.splice(a,0,e),a===0&&nv(e)}};var rv=t.version;if(rv!=="19.2.4")throw Error(s(527,rv,"19.2.4"));D.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var cM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{bt=Su.inject(cM),Tt=Su}catch{}}return Wl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=dg,f=pg,v=mg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=j_(e,1,!1,null,null,a,o,null,u,f,v,sv),e[ma]=n.current,Gd(e),new rp(n)},Wl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=dg,v=pg,R=mg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=j_(e,1,!0,n,a??null,o,u,G,f,v,R,sv),n.context=Z_(null),a=n.current,o=Xi(),o=Na(o),u=Ds(o),u.callback=null,Us(a,u,o),a=o,n.current.lanes=a,li(n,a),za(n),e[ma]=n.current,Gd(e),new xu(n)},Wl.version="19.2.4",Wl}var gv;function xM(){if(gv)return cp.exports;gv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),cp.exports=vM(),cp.exports}var SM=xM();const Wf="183",mx=0,Zp=1,gx=2,Xo=1,_x=2,Go=3,Ms=0,gi=1,kn=2,Xa=0,Lr=1,Kp=2,Qp=3,Jp=4,vx=5,tr=100,xx=101,Sx=102,yx=103,Mx=104,Ex=200,Tx=201,bx=202,Ax=203,tf=204,ef=205,Rx=206,Cx=207,wx=208,Dx=209,Ux=210,Nx=211,Lx=212,Ox=213,Ix=214,nf=0,af=1,sf=2,Or=3,rf=4,of=5,lf=6,cf=7,Yf=0,Px=1,Fx=2,Ca=0,um=1,fm=2,hm=3,qf=4,dm=5,pm=6,mm=7,gm=300,ir=301,Ir=302,ju=303,Zu=304,gc=306,Yo=1e3,ka=1001,uf=1002,Jn=1003,Bx=1004,ic=1005,$n=1006,Ku=1007,Ss=1008,Li=1009,_m=1010,vm=1011,qo=1012,jf=1013,Da=1014,ca=1015,Wa=1016,Zf=1017,Kf=1018,jo=1020,xm=35902,Sm=35899,ym=1021,Mm=1022,ua=1023,Ya=1026,er=1027,Qf=1028,Jf=1029,Pr=1030,$f=1031,th=1033,sc=33776,rc=33777,oc=33778,lc=33779,ff=35840,hf=35841,df=35842,pf=35843,mf=36196,gf=37492,_f=37496,vf=37488,xf=37489,Sf=37490,yf=37491,Mf=37808,Ef=37809,Tf=37810,bf=37811,Af=37812,Rf=37813,Cf=37814,wf=37815,Df=37816,Uf=37817,Nf=37818,Lf=37819,Of=37820,If=37821,Pf=36492,Ff=36494,Bf=36495,zf=36283,Hf=36284,Gf=36285,Vf=36286,zx=3200,eh=0,Hx=1,vs="",qn="srgb",Fr="srgb-linear",hc="linear",$e="srgb",Dr=7680,$p=519,Gx=512,Vx=513,kx=514,nh=515,Xx=516,Wx=517,ih=518,Yx=519,tm=35044,em="300 es",Ra=2e3,Zo=2001;function yM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function kf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qx(){const r=kf("canvas");return r.style.display="block",r}const _v={};function nm(...r){const t="THREE."+r.shift();console.log(t,...r)}function jx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function he(...r){r=jx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ve(...r){r=jx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function dc(...r){const t=r.join(" ");t in _v||(_v[t]=!0,he(...r))}function MM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const EM={[nf]:af,[sf]:lf,[rf]:cf,[Or]:of,[af]:nf,[lf]:sf,[cf]:rf,[of]:Or};class Br{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vv=1234567;const cc=Math.PI/180,Ko=180/Math.PI;function $o(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(pi[r&255]+pi[r>>8&255]+pi[r>>16&255]+pi[r>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[i&63|128]+pi[i>>8&255]+"-"+pi[i>>16&255]+pi[i>>24&255]+pi[s&255]+pi[s>>8&255]+pi[s>>16&255]+pi[s>>24&255]).toLowerCase()}function Ce(r,t,i){return Math.max(t,Math.min(i,r))}function Em(r,t){return(r%t+t)%t}function TM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function bM(r,t,i){return r!==t?(i-r)/(t-r):0}function uc(r,t,i){return(1-i)*r+i*t}function AM(r,t,i,s){return uc(r,t,1-Math.exp(-i*s))}function RM(r,t=1){return t-Math.abs(Em(r,t*2)-t)}function CM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function wM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function DM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function UM(r,t){return r+Math.random()*(t-r)}function NM(r){return r*(.5-Math.random())}function LM(r){r!==void 0&&(vv=r);let t=vv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function OM(r){return r*cc}function IM(r){return r*Ko}function PM(r){return(r&r-1)===0&&r!==0}function FM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function BM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),_=h((t+s)/2),x=c((t-s)/2),g=h((t-s)/2),y=c((s-t)/2),E=h((s-t)/2);switch(l){case"XYX":r.set(d*_,m*x,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*x,d*p);break;case"ZXZ":r.set(m*x,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*E,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*E,d*p);break;case"ZYZ":r.set(m*E,m*y,d*_,d*p);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ho(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mi={DEG2RAD:cc,RAD2DEG:Ko,generateUUID:$o,clamp:Ce,euclideanModulo:Em,mapLinear:TM,inverseLerp:bM,lerp:uc,damp:AM,pingpong:RM,smoothstep:CM,smootherstep:wM,randInt:DM,randFloat:UM,randFloatSpread:NM,seededRandom:LM,degToRad:OM,radToDeg:IM,isPowerOfTwo:PM,ceilPowerOfTwo:FM,floorPowerOfTwo:BM,setQuaternionFromProperEuler:zM,normalize:yi,denormalize:Ho};class De{constructor(t=0,i=0){De.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],y=c[h+1],E=c[h+2],w=c[h+3];if(x!==w||m!==g||p!==y||_!==E){let M=m*g+p*y+_*E+x*w;M<0&&(g=-g,y=-y,E=-E,w=-w,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),O=Math.sin(C);S=Math.sin(S*C)/O,d=Math.sin(d*C)/O,m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,x=x*S+w*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,x=x*S+w*d;const C=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=C,p*=C,_*=C,x*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[h],g=c[h+1],y=c[h+2],E=c[h+3];return t[i]=d*E+_*x+m*y-p*g,t[i+1]=m*E+_*g+p*x-d*y,t[i+2]=p*E+_*y+d*g-m*x,t[i+3]=_*E-d*x-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),g=m(s/2),y=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=g*_*x+p*y*E,this._y=p*y*x-g*_*E,this._z=p*_*E+g*y*x,this._w=p*_*x-g*y*E;break;case"YXZ":this._x=g*_*x+p*y*E,this._y=p*y*x-g*_*E,this._z=p*_*E-g*y*x,this._w=p*_*x+g*y*E;break;case"ZXY":this._x=g*_*x-p*y*E,this._y=p*y*x+g*_*E,this._z=p*_*E+g*y*x,this._w=p*_*x-g*y*E;break;case"ZYX":this._x=g*_*x-p*y*E,this._y=p*y*x+g*_*E,this._z=p*_*E-g*y*x,this._w=p*_*x+g*y*E;break;case"YZX":this._x=g*_*x+p*y*E,this._y=p*y*x+g*_*E,this._z=p*_*E-g*y*x,this._w=p*_*x-g*y*E;break;case"XZY":this._x=g*_*x-p*y*E,this._y=p*y*x-g*_*E,this._z=p*_*E+g*y*x,this._w=p*_*x+g*y*E;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],g=s+d+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>x){const y=2*Math.sqrt(1+s-d-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-s-x);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(xv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(xv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return dp.copy(this).projectOnVector(t),this.sub(dp)}reflect(t){return this.sub(dp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dp=new $,xv=new zr;class ye{constructor(t,i,s,l,c,h,d,m,p){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],y=s[5],E=s[8],w=l[0],M=l[3],S=l[6],C=l[1],O=l[4],U=l[7],F=l[2],z=l[5],H=l[8];return c[0]=h*w+d*C+m*F,c[3]=h*M+d*O+m*z,c[6]=h*S+d*U+m*H,c[1]=p*w+_*C+x*F,c[4]=p*M+_*O+x*z,c[7]=p*S+_*U+x*H,c[2]=g*w+y*C+E*F,c[5]=g*M+y*O+E*z,c[8]=g*S+y*U+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,g=d*m-_*c,y=p*c-h*m,E=i*x+s*g+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=x*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*h)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=y*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(pp.makeScale(t,i)),this}rotate(t){return this.premultiply(pp.makeRotation(-t)),this}translate(t,i){return this.premultiply(pp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pp=new ye,Sv=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yv=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HM(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===$e&&(l.r=ys(l.r),l.g=ys(l.g),l.b=ys(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===$e&&(l.r=Wo(l.r),l.g=Wo(l.g),l.b=Wo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return dc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return dc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Fr]:{primaries:t,whitePoint:s,transfer:hc,toXYZ:Sv,fromXYZ:yv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:s,transfer:$e,toXYZ:Sv,fromXYZ:yv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),r}const ke=HM();function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let To;class Zx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{To===void 0&&(To=kf("canvas")),To.width=t.width,To.height=t.height;const l=To.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=To}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ys(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ys(i[s]/255)*255):i[s]=ys(i[s]);return{data:i,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let GM=0;class ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(mp(l[h].image)):c.push(mp(l[h]))}else c=mp(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function mp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let VM=0;const gp=new $;class oi extends Br{constructor(t=oi.DEFAULT_IMAGE,i=oi.DEFAULT_MAPPING,s=ka,l=ka,c=$n,h=Ss,d=ua,m=Li,p=oi.DEFAULT_ANISOTROPY,_=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=$o(),this.name="",this.source=new ah(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gp).x}get height(){return this.source.getSize(gp).y}get depth(){return this.source.getSize(gp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){he(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yo:t.x=t.x-Math.floor(t.x);break;case ka:t.x=t.x<0?0:1;break;case uf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yo:t.y=t.y-Math.floor(t.y);break;case ka:t.y=t.y<0?0:1;break;case uf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=gm;oi.DEFAULT_ANISOTROPY=1;class Rn{constructor(t=0,i=0,s=0,l=1){Rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],g=m[1],y=m[5],E=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(y+1)/2,F=(S+1)/2,z=(_+g)/4,H=(x+w)/4,b=(E+M)/4;return O>U&&O>F?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=z/s,c=H/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=z/l,c=b/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=H/c,l=b/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-E)*(M-E)+(x-w)*(x-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(x-w)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this.w=Ce(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this.w=Ce(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kx extends Br{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Rn(0,0,t,i),this.scissorTest=!1,this.viewport=new Rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new oi(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ah(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wa extends Kx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Tm extends oi{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qx extends oi{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(t,i,s,l,c,h,d,m,p,_,x,g,y,E,w,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,x,g,y,E,w,M)}set(t,i,s,l,c,h,d,m,p,_,x,g,y,E,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=x,S[14]=g,S[3]=y,S[7]=E,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/bo.setFromMatrixColumn(t,0).length(),c=1/bo.setFromMatrixColumn(t,1).length(),h=1/bo.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*x,E=d*_,w=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+E*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=E+y*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*x,E=p*_,w=p*x;i[0]=g+w*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=y*d-E,i[6]=w+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*x,E=p*_,w=p*x;i[0]=g-w*d,i[4]=-h*x,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*_,i[9]=w-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*x,E=d*_,w=d*x;i[0]=m*_,i[4]=E*p-y,i[8]=g*p+w,i[1]=m*x,i[5]=w*p+g,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*p,E=d*m,w=d*p;i[0]=m*_,i[4]=w-g*x,i[8]=E*x+y,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*x+E,i[10]=g-w*x}else if(t.order==="XZY"){const g=h*m,y=h*p,E=d*m,w=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=g*x+w,i[5]=h*_,i[9]=y*x-E,i[2]=E*x-y,i[6]=d*_,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kM,t,XM)}lookAt(t,i,s){const l=this.elements;return Wi.subVectors(t,i),Wi.lengthSq()===0&&(Wi.z=1),Wi.normalize(),qs.crossVectors(s,Wi),qs.lengthSq()===0&&(Math.abs(s.z)===1?Wi.x+=1e-4:Wi.z+=1e-4,Wi.normalize(),qs.crossVectors(s,Wi)),qs.normalize(),yu.crossVectors(Wi,qs),l[0]=qs.x,l[4]=yu.x,l[8]=Wi.x,l[1]=qs.y,l[5]=yu.y,l[9]=Wi.y,l[2]=qs.z,l[6]=yu.z,l[10]=Wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],y=s[13],E=s[2],w=s[6],M=s[10],S=s[14],C=s[3],O=s[7],U=s[11],F=s[15],z=l[0],H=l[4],b=l[8],N=l[12],Q=l[1],B=l[5],K=l[9],st=l[13],nt=l[2],j=l[6],L=l[10],D=l[14],q=l[3],tt=l[7],ut=l[11],P=l[15];return c[0]=h*z+d*Q+m*nt+p*q,c[4]=h*H+d*B+m*j+p*tt,c[8]=h*b+d*K+m*L+p*ut,c[12]=h*N+d*st+m*D+p*P,c[1]=_*z+x*Q+g*nt+y*q,c[5]=_*H+x*B+g*j+y*tt,c[9]=_*b+x*K+g*L+y*ut,c[13]=_*N+x*st+g*D+y*P,c[2]=E*z+w*Q+M*nt+S*q,c[6]=E*H+w*B+M*j+S*tt,c[10]=E*b+w*K+M*L+S*ut,c[14]=E*N+w*st+M*D+S*P,c[3]=C*z+O*Q+U*nt+F*q,c[7]=C*H+O*B+U*j+F*tt,c[11]=C*b+O*K+U*L+F*ut,c[15]=C*N+O*st+U*D+F*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],g=t[10],y=t[14],E=t[3],w=t[7],M=t[11],S=t[15],C=m*y-p*g,O=d*y-p*x,U=d*g-m*x,F=h*y-p*_,z=h*g-m*_,H=h*x-d*_;return i*(w*C-M*O+S*U)-s*(E*C-M*F+S*z)+l*(E*O-w*F+S*H)-c*(E*U-w*z+M*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],g=t[10],y=t[11],E=t[12],w=t[13],M=t[14],S=t[15],C=i*d-s*h,O=i*m-l*h,U=i*p-c*h,F=s*m-l*d,z=s*p-c*d,H=l*p-c*m,b=_*w-x*E,N=_*M-g*E,Q=_*S-y*E,B=x*M-g*w,K=x*S-y*w,st=g*S-y*M,nt=C*st-O*K+U*B+F*Q-z*N+H*b;if(nt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/nt;return t[0]=(d*st-m*K+p*B)*j,t[1]=(l*K-s*st-c*B)*j,t[2]=(w*H-M*z+S*F)*j,t[3]=(g*z-x*H-y*F)*j,t[4]=(m*Q-h*st-p*N)*j,t[5]=(i*st-l*Q+c*N)*j,t[6]=(M*U-E*H-S*O)*j,t[7]=(_*H-g*U+y*O)*j,t[8]=(h*K-d*Q+p*b)*j,t[9]=(s*Q-i*K-c*b)*j,t[10]=(E*z-w*U+S*C)*j,t[11]=(x*U-_*z-y*C)*j,t[12]=(d*N-h*B-m*b)*j,t[13]=(i*B-s*N+l*b)*j,t[14]=(w*O-E*F-M*C)*j,t[15]=(_*F-x*O+g*C)*j,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,g=c*p,y=c*_,E=c*x,w=h*_,M=h*x,S=d*x,C=m*p,O=m*_,U=m*x,F=s.x,z=s.y,H=s.z;return l[0]=(1-(w+S))*F,l[1]=(y+U)*F,l[2]=(E-O)*F,l[3]=0,l[4]=(y-U)*z,l[5]=(1-(g+S))*z,l[6]=(M+C)*z,l[7]=0,l[8]=(E+O)*H,l[9]=(M-C)*H,l[10]=(1-(g+w))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=bo.set(l[0],l[1],l[2]).length();const d=bo.set(l[4],l[5],l[6]).length(),m=bo.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ma.copy(this);const p=1/h,_=1/d,x=1/m;return Ma.elements[0]*=p,Ma.elements[1]*=p,Ma.elements[2]*=p,Ma.elements[4]*=_,Ma.elements[5]*=_,Ma.elements[6]*=_,Ma.elements[8]*=x,Ma.elements[9]*=x,Ma.elements[10]*=x,i.setFromRotationMatrix(Ma),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=Ra,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let E,w;if(m)E=c/(h-c),w=h*c/(h-c);else if(d===Ra)E=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Zo)E=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ra,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,w;if(m)E=1/(h-c),w=h/(h-c);else if(d===Ra)E=-2/(h-c),w=-(h+c)/(h-c);else if(d===Zo)E=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const bo=new $,Ma=new un,kM=new $(0,0,0),XM=new $(1,1,1),qs=new $,yu=new $,Wi=new $,Mv=new un,Ev=new zr;class ha{constructor(t=0,i=0,s=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ce(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Mv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ev.setFromEuler(this),this.setFromQuaternion(Ev,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let WM=0;const Tv=new $,Ao=new zr,ds=new un,Mu=new $,Yl=new $,YM=new $,qM=new zr,bv=new $(1,0,0),Av=new $(0,1,0),Rv=new $(0,0,1),Cv={type:"added"},jM={type:"removed"},Ro={type:"childadded",child:null},_p={type:"childremoved",child:null};class pn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new $,i=new ha,s=new zr,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new ye}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ao.setFromAxisAngle(t,i),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(t,i){return Ao.setFromAxisAngle(t,i),this.quaternion.premultiply(Ao),this}rotateX(t){return this.rotateOnAxis(bv,t)}rotateY(t){return this.rotateOnAxis(Av,t)}rotateZ(t){return this.rotateOnAxis(Rv,t)}translateOnAxis(t,i){return Tv.copy(t).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(bv,t)}translateY(t){return this.translateOnAxis(Av,t)}translateZ(t){return this.translateOnAxis(Rv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mu.copy(t):Mu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Yl,Mu,this.up):ds.lookAt(Mu,Yl,this.up),this.quaternion.setFromRotationMatrix(ds),l&&(ds.extractRotation(l.matrixWorld),Ao.setFromRotationMatrix(ds),this.quaternion.premultiply(Ao.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cv),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jM),_p.child=t,this.dispatchEvent(_p),_p.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cv),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yl,t,YM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yl,qM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}pn.DEFAULT_UP=new $(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vo extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Vo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function vp(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ke.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=ke.workingColorSpace){return this.r=t,this.g=i,this.b=s,ke.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=ke.workingColorSpace){if(t=Em(t,1),i=Ce(i,0,1),s=Ce(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=vp(h,c,t+1/3),this.g=vp(h,c,t),this.b=vp(h,c,t-1/3)}return ke.colorSpaceToWorking(this,l),this}setStyle(t,i=qn){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=qn){const s=Jx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Wo(t.r),this.g=Wo(t.g),this.b=Wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return ke.workingToColorSpace(mi.copy(this),t),Math.round(Ce(mi.r*255,0,255))*65536+Math.round(Ce(mi.g*255,0,255))*256+Math.round(Ce(mi.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ke.workingColorSpace){ke.workingToColorSpace(mi.copy(this),i);const s=mi.r,l=mi.g,c=mi.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=ke.workingColorSpace){return ke.workingToColorSpace(mi.copy(this),i),t.r=mi.r,t.g=mi.g,t.b=mi.b,t}getStyle(t=qn){ke.workingToColorSpace(mi.copy(this),t);const i=mi.r,s=mi.g,l=mi.b;return t!==qn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(js),this.setHSL(js.h+t,js.s+i,js.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(js),t.getHSL(Eu);const s=uc(js.h,Eu.h,i),l=uc(js.s,Eu.s,i),c=uc(js.l,Eu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mi=new re;re.NAMES=Jx;class pc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=i,this.far=s}clone(){return new pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bm extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ea=new $,ps=new $,xp=new $,ms=new $,Co=new $,wo=new $,wv=new $,Sp=new $,yp=new $,Mp=new $,Ep=new Rn,Tp=new Rn,bp=new Rn;class la{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ea.subVectors(t,i),l.cross(Ea);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ea.subVectors(l,i),ps.subVectors(s,i),xp.subVectors(t,i);const h=Ea.dot(Ea),d=Ea.dot(ps),m=Ea.dot(xp),p=ps.dot(ps),_=ps.dot(xp),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(p*m-d*_)*g,E=(h*_-d*m)*g;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ms)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ms.x),m.addScaledVector(h,ms.y),m.addScaledVector(d,ms.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Ep.setScalar(0),Tp.setScalar(0),bp.setScalar(0),Ep.fromBufferAttribute(t,i),Tp.fromBufferAttribute(t,s),bp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ep,c.x),h.addScaledVector(Tp,c.y),h.addScaledVector(bp,c.z),h}static isFrontFacing(t,i,s,l){return Ea.subVectors(s,i),ps.subVectors(t,i),Ea.cross(ps).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ea.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),Ea.cross(ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return la.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return la.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return la.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return la.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return la.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Co.subVectors(l,s),wo.subVectors(c,s),Sp.subVectors(t,s);const m=Co.dot(Sp),p=wo.dot(Sp);if(m<=0&&p<=0)return i.copy(s);yp.subVectors(t,l);const _=Co.dot(yp),x=wo.dot(yp);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Co,h);Mp.subVectors(t,c);const y=Co.dot(Mp),E=wo.dot(Mp);if(E>=0&&y<=E)return i.copy(c);const w=y*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(wo,d);const M=_*E-y*x;if(M<=0&&x-_>=0&&y-E>=0)return wv.subVectors(c,l),d=(x-_)/(x-_+(y-E)),i.copy(l).addScaledVector(wv,d);const S=1/(M+w+g);return h=w*S,d=g*S,i.copy(s).addScaledVector(Co,h).addScaledVector(wo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ar{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ta.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ta.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ta.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ta):Ta.fromBufferAttribute(c,h),Ta.applyMatrix4(t.matrixWorld),this.expandByPoint(Ta);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tu.copy(s.boundingBox)),Tu.applyMatrix4(t.matrixWorld),this.union(Tu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ta),Ta.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ql),bu.subVectors(this.max,ql),Do.subVectors(t.a,ql),Uo.subVectors(t.b,ql),No.subVectors(t.c,ql),Zs.subVectors(Uo,Do),Ks.subVectors(No,Uo),Er.subVectors(Do,No);let i=[0,-Zs.z,Zs.y,0,-Ks.z,Ks.y,0,-Er.z,Er.y,Zs.z,0,-Zs.x,Ks.z,0,-Ks.x,Er.z,0,-Er.x,-Zs.y,Zs.x,0,-Ks.y,Ks.x,0,-Er.y,Er.x,0];return!Ap(i,Do,Uo,No,bu)||(i=[1,0,0,0,1,0,0,0,1],!Ap(i,Do,Uo,No,bu))?!1:(Au.crossVectors(Zs,Ks),i=[Au.x,Au.y,Au.z],Ap(i,Do,Uo,No,bu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ta).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ta).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const gs=[new $,new $,new $,new $,new $,new $,new $,new $],Ta=new $,Tu=new ar,Do=new $,Uo=new $,No=new $,Zs=new $,Ks=new $,Er=new $,ql=new $,bu=new $,Au=new $,Tr=new $;function Ap(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Tr.fromArray(r,c);const d=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),m=t.dot(Tr),p=i.dot(Tr),_=s.dot(Tr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Vn=new $,Ru=new De;let KM=0;class fa{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=tm,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ru.fromBufferAttribute(this,i),Ru.applyMatrix3(t),this.setXY(i,Ru.x,Ru.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix3(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=yi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=yi(i,this.array),s=yi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=yi(i,this.array),s=yi(s,this.array),l=yi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=yi(i,this.array),s=yi(s,this.array),l=yi(l,this.array),c=yi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tm&&(t.usage=this.usage),t}}class Am extends fa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Rm extends fa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ti extends fa{constructor(t,i,s){super(new Float32Array(t),i,s)}}const QM=new ar,jl=new $,Rp=new $;class tl{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):QM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jl.subVectors(t,this.center);const i=jl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jl.copy(t.center).add(Rp)),this.expandByPoint(jl.copy(t.center).sub(Rp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let JM=0;const ra=new un,Cp=new pn,Lo=new $,Yi=new ar,Zl=new ar,Qn=new $;class qi extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yM(t)?Rm:Am)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ye().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ra.makeRotationFromQuaternion(t),this.applyMatrix4(ra),this}rotateX(t){return ra.makeRotationX(t),this.applyMatrix4(ra),this}rotateY(t){return ra.makeRotationY(t),this.applyMatrix4(ra),this}rotateZ(t){return ra.makeRotationZ(t),this.applyMatrix4(ra),this}translate(t,i,s){return ra.makeTranslation(t,i,s),this.applyMatrix4(ra),this}scale(t,i,s){return ra.makeScale(t,i,s),this.applyMatrix4(ra),this}lookAt(t){return Cp.lookAt(t),Cp.updateMatrix(),this.applyMatrix4(Cp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ti(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Qn.addVectors(this.boundingBox.min,Yi.min),this.boundingBox.expandByPoint(Qn),Qn.addVectors(this.boundingBox.max,Yi.max),this.boundingBox.expandByPoint(Qn)):(this.boundingBox.expandByPoint(Yi.min),this.boundingBox.expandByPoint(Yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(Yi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Zl.setFromBufferAttribute(d),this.morphTargetsRelative?(Qn.addVectors(Yi.min,Zl.min),Yi.expandByPoint(Qn),Qn.addVectors(Yi.max,Zl.max),Yi.expandByPoint(Qn)):(Yi.expandByPoint(Zl.min),Yi.expandByPoint(Zl.max))}Yi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Qn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Qn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Qn.fromBufferAttribute(d,p),m&&(Lo.fromBufferAttribute(t,p),Qn.add(Lo)),l=Math.max(l,s.distanceToSquared(Qn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fa(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let b=0;b<s.count;b++)d[b]=new $,m[b]=new $;const p=new $,_=new $,x=new $,g=new De,y=new De,E=new De,w=new $,M=new $;function S(b,N,Q){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,N),x.fromBufferAttribute(s,Q),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,N),E.fromBufferAttribute(c,Q),_.sub(p),x.sub(p),y.sub(g),E.sub(g);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(B),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(B),d[b].add(w),d[N].add(w),d[Q].add(w),m[b].add(M),m[N].add(M),m[Q].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let b=0,N=C.length;b<N;++b){const Q=C[b],B=Q.start,K=Q.count;for(let st=B,nt=B+K;st<nt;st+=3)S(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const O=new $,U=new $,F=new $,z=new $;function H(b){F.fromBufferAttribute(l,b),z.copy(F);const N=d[b];O.copy(N),O.sub(F.multiplyScalar(F.dot(N))).normalize(),U.crossVectors(z,N);const B=U.dot(m[b])<0?-1:1;h.setXYZW(b,O.x,O.y,O.z,B)}for(let b=0,N=C.length;b<N;++b){const Q=C[b],B=Q.start,K=Q.count;for(let st=B,nt=B+K;st<nt;st+=3)H(t.getX(st+0)),H(t.getX(st+1)),H(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,h=new $,d=new $,m=new $,p=new $,_=new $,x=new $;if(t)for(let g=0,y=t.count;g<y;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Qn.fromBufferAttribute(t,i),Qn.normalize(),t.setXYZ(i,Qn.x,Qn.y,Qn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,g=new p.constructor(m.length*_);let y=0,E=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*_;for(let S=0;S<_;S++)g[E++]=p[y++]}return new fa(g,_,x)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const y=p[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $M=0;class Hr extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Lr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=ef,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){he(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==Ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==tf&&(s.blendSrc=this.blendSrc),this.blendDst!==ef&&(s.blendDst=this.blendDst),this.blendEquation!==tr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const _s=new $,wp=new $,Cu=new $,Qs=new $,Dp=new $,wu=new $,Up=new $;class Cm{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_s)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=_s.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(_s.copy(this.origin).addScaledVector(this.direction,i),_s.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){wp.copy(t).add(i).multiplyScalar(.5),Cu.copy(i).sub(t).normalize(),Qs.copy(this.origin).sub(wp);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Cu),d=Qs.dot(this.direction),m=-Qs.dot(Cu),p=Qs.lengthSq(),_=Math.abs(1-h*h);let x,g,y,E;if(_>0)if(x=h*m-d,g=h*d-m,E=c*_,x>=0)if(g>=-E)if(g<=E){const w=1/_;x*=w,g*=w,y=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g<=-E?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p):g<=E?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(wp).addScaledVector(Cu,g),y}intersectSphere(t,i){_s.subVectors(t.center,this.origin);const s=_s.dot(this.direction),l=_s.dot(_s)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,_s)!==null}intersectTriangle(t,i,s,l,c){Dp.subVectors(i,t),wu.subVectors(s,t),Up.crossVectors(Dp,wu);let h=this.direction.dot(Up),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Qs.subVectors(this.origin,t);const m=d*this.direction.dot(wu.crossVectors(Qs,wu));if(m<0)return null;const p=d*this.direction.dot(Dp.cross(Qs));if(p<0||m+p>h)return null;const _=-d*Qs.dot(Up);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mc extends Hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=Yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Dv=new un,br=new Cm,Du=new tl,Uv=new $,Uu=new $,Nu=new $,Lu=new $,Np=new $,Ou=new $,Nv=new $,Iu=new $;class Ge extends pn{constructor(t=new qi,i=new mc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ou.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Np.fromBufferAttribute(x,t),h?Ou.addScaledVector(Np,_):Ou.addScaledVector(Np.sub(i),_))}i.add(Ou)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Du.copy(s.boundingSphere),Du.applyMatrix4(c),br.copy(t.ray).recast(t.near),!(Du.containsPoint(br.origin)===!1&&(br.intersectSphere(Du,Uv)===null||br.origin.distanceToSquared(Uv)>(t.far-t.near)**2))&&(Dv.copy(c).invert(),br.copy(t.ray).applyMatrix4(Dv),!(s.boundingBox!==null&&br.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,br)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=h[M.materialIndex],C=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=C,F=O;U<F;U+=3){const z=d.getX(U),H=d.getX(U+1),b=d.getX(U+2);l=Pu(this,S,t,s,p,_,x,z,H,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const C=d.getX(M),O=d.getX(M+1),U=d.getX(M+2);l=Pu(this,h,t,s,p,_,x,C,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=h[M.materialIndex],C=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=C,F=O;U<F;U+=3){const z=U,H=U+1,b=U+2;l=Pu(this,S,t,s,p,_,x,z,H,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const C=M,O=M+1,U=M+2;l=Pu(this,h,t,s,p,_,x,C,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function tE(r,t,i,s,l,c,h,d){let m;if(t.side===gi?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ms,d),m===null)return null;Iu.copy(d),Iu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Iu);return p<i.near||p>i.far?null:{distance:p,point:Iu.clone(),object:r}}function Pu(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Uu),r.getVertexPosition(m,Nu),r.getVertexPosition(p,Lu);const _=tE(r,t,i,s,Uu,Nu,Lu,Nv);if(_){const x=new $;la.getBarycoord(Nv,Uu,Nu,Lu,x),l&&(_.uv=la.getInterpolatedAttribute(l,d,m,p,x,new De)),c&&(_.uv1=la.getInterpolatedAttribute(c,d,m,p,x,new De)),h&&(_.normal=la.getInterpolatedAttribute(h,d,m,p,x,new $),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new $,materialIndex:0};la.getNormal(Uu,Nu,Lu,g.normal),_.face=g,_.barycoord=x}return _}class wm extends oi{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Jn,_=Jn,x,g){super(null,h,d,m,p,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class im extends fa{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Oo=new un,Lv=new un,Fu=[],Ov=new ar,eE=new un,Kl=new Ge,Ql=new tl;class $x extends Ge{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new im(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,eE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ar),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Oo),Ov.copy(t.boundingBox).applyMatrix4(Oo),this.boundingBox.union(Ov)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new tl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Oo),Ql.copy(t.boundingSphere).applyMatrix4(Oo),this.boundingSphere.union(Ql)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Kl.geometry=this.geometry,Kl.material=this.material,Kl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ql.copy(this.boundingSphere),Ql.applyMatrix4(s),t.ray.intersectsSphere(Ql)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Oo),Lv.multiplyMatrices(s,Oo),Kl.matrixWorld=Lv,Kl.raycast(t,Fu);for(let h=0,d=Fu.length;h<d;h++){const m=Fu[h];m.instanceId=c,m.object=this,i.push(m)}Fu.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new im(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new wm(new Float32Array(l*this.count),l,this.count,Qf,ca));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Lp=new $,nE=new $,iE=new ye;class $s{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Lp.subVectors(s,i).cross(nE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Lp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||iE.getNormalMatrix(t),l=this.coplanarPoint(Lp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new tl,aE=new De(.5,.5),Bu=new $;class rh{constructor(t=new $s,i=new $s,s=new $s,l=new $s,c=new $s,h=new $s){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ra,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],y=c[7],E=c[8],w=c[9],M=c[10],S=c[11],C=c[12],O=c[13],U=c[14],F=c[15];if(l[0].setComponents(p-h,y-_,S-E,F-C).normalize(),l[1].setComponents(p+h,y+_,S+E,F+C).normalize(),l[2].setComponents(p+d,y+x,S+w,F+O).normalize(),l[3].setComponents(p-d,y-x,S-w,F-O).normalize(),s)l[4].setComponents(m,g,M,U).normalize(),l[5].setComponents(p-m,y-g,S-M,F-U).normalize();else if(l[4].setComponents(p-m,y-g,S-M,F-U).normalize(),i===Ra)l[5].setComponents(p+m,y+g,S+M,F+U).normalize();else if(i===Zo)l[5].setComponents(m,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){Ar.center.set(0,0,0);const i=aE.distanceTo(t.center);return Ar.radius=.7071067811865476+i,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bu.x=l.normal.x>0?t.max.x:t.min.x,Bu.y=l.normal.y>0?t.max.y:t.min.y,Bu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dm extends oi{constructor(t=[],i=ir,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ko extends oi{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qo extends oi{constructor(t,i,s=Da,l,c,h,d=Jn,m=Jn,p,_=Ya,x=1){if(_!==Ya&&_!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ah(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tS extends Qo{constructor(t,i=Da,s=ir,l,c,h=Jn,d=Jn,m,p=Ya){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Um extends oi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sr extends qi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let g=0,y=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ti(p,3)),this.setAttribute("normal",new ti(_,3)),this.setAttribute("uv",new ti(x,2));function E(w,M,S,C,O,U,F,z,H,b,N){const Q=U/H,B=F/b,K=U/2,st=F/2,nt=z/2,j=H+1,L=b+1;let D=0,q=0;const tt=new $;for(let ut=0;ut<L;ut++){const P=ut*B-st;for(let Y=0;Y<j;Y++){const pt=Y*Q-K;tt[w]=pt*C,tt[M]=P*O,tt[S]=nt,p.push(tt.x,tt.y,tt.z),tt[w]=0,tt[M]=0,tt[S]=z>0?1:-1,_.push(tt.x,tt.y,tt.z),x.push(Y/H),x.push(1-ut/b),D+=1}}for(let ut=0;ut<b;ut++)for(let P=0;P<H;P++){const Y=g+P+j*ut,pt=g+P+j*(ut+1),Et=g+(P+1)+j*(ut+1),Pt=g+(P+1)+j*ut;m.push(Y,pt,Pt),m.push(pt,Et,Pt),q+=6}d.addGroup(y,q,N),y+=q,g+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class eS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(h-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new De:new $);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new $,l=[],c=[],h=[],d=new $,m=new un;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new $)}c[0]=new $,h[0]=new $;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ce(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,E))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Ce(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Nm(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,_,x){let g=(h-c)/p-(d-c)/(p+_)+(d-h)/_,y=(d-h)/_-(m-h)/(_+x)+(m-d)/x;g*=_,y*=_,l(h,d,g,y)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const zu=new $,Op=new Nm,Ip=new Nm,Pp=new Nm;class nS extends eS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new $){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(zu.subVectors(l[0],l[1]).add(l[0]),p=zu);const x=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(zu.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=zu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(x),y),w=Math.pow(x.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),Op.initNonuniformCatmullRom(p.x,x.x,g.x,_.x,E,w,M),Ip.initNonuniformCatmullRom(p.y,x.y,g.y,_.y,E,w,M),Pp.initNonuniformCatmullRom(p.z,x.z,g.z,_.z,E,w,M)}else this.curveType==="catmullrom"&&(Op.initCatmullRom(p.x,x.x,g.x,_.x,this.tension),Ip.initCatmullRom(p.y,x.y,g.y,_.y,this.tension),Pp.initCatmullRom(p.z,x.z,g.z,_.z,this.tension));return s.set(Op.calc(m),Ip.calc(m),Pp.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new $().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Va extends qi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,g=i/m,y=[],E=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-h;for(let O=0;O<p;O++){const U=O*x-c;E.push(U,-C,0),w.push(0,0,1),M.push(O/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<d;C++){const O=C+p*S,U=C+p*(S+1),F=C+1+p*(S+1),z=C+1+p*S;y.push(O,U,z),y.push(U,F,z)}this.setIndex(y),this.setAttribute("position",new ti(E,3)),this.setAttribute("normal",new ti(w,3)),this.setAttribute("uv",new ti(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.width,t.height,t.widthSegments,t.heightSegments)}}class oh extends qi{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let x=t;const g=(i-t)/l,y=new $,E=new De;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const S=c+M/s*h;y.x=x*Math.cos(S),y.y=x*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,_.push(E.x,E.y)}x+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let S=0;S<s;S++){const C=S+M,O=C,U=C+s+1,F=C+s+2,z=C+1;d.push(O,U,z),d.push(U,F,z)}}this.setIndex(d),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(p,3)),this.setAttribute("uv",new ti(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class lh extends qi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],x=new $,g=new $,y=[],E=[],w=[],M=[];for(let S=0;S<=s;S++){const C=[],O=S/s;let U=0;S===0&&h===0?U=.5/i:S===s&&m===Math.PI&&(U=-.5/i);for(let F=0;F<=i;F++){const z=F/i;x.x=-t*Math.cos(l+z*c)*Math.sin(h+O*d),x.y=t*Math.cos(h+O*d),x.z=t*Math.sin(l+z*c)*Math.sin(h+O*d),E.push(x.x,x.y,x.z),g.copy(x).normalize(),w.push(g.x,g.y,g.z),M.push(z+U,1-O),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const O=_[S][C+1],U=_[S][C],F=_[S+1][C],z=_[S+1][C+1];(S!==0||h>0)&&y.push(O,U,z),(S!==s-1||m<Math.PI)&&y.push(U,F,z)}this.setIndex(y),this.setAttribute("position",new ti(E,3)),this.setAttribute("normal",new ti(w,3)),this.setAttribute("uv",new ti(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Jo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ei(r){const t={};for(let i=0;i<r.length;i++){const s=Jo(r[i]);for(const l in s)t[l]=s[l]}return t}function sE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function iS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ke.workingColorSpace}const aS={clone:Jo,merge:Ei};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ua extends Hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=oE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jo(t.uniforms),this.uniformsGroups=sE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sS extends Ua{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xs extends Hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ur extends xs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class rS extends Hr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=Yf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oS extends Hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lS extends Hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class el extends pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class cS extends el{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Fp=new un,Iv=new $,Pv=new $;class Lm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Iv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Iv),Pv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Pv),i.updateMatrixWorld(),Fp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fp,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Zo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Fp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hu=new $,Gu=new zr,Ha=new $;class Om extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hu,Gu,Ha),Ha.x===1&&Ha.y===1&&Ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Gu,Ha.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Hu,Gu,Ha),Ha.x===1&&Ha.y===1&&Ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Gu,Ha.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Js=new $,Fv=new De,Bv=new De;class Ti extends Om{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ko*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Js.x,Js.y).multiplyScalar(-t/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Js.x,Js.y).multiplyScalar(-t/Js.z)}getViewSize(t,i){return this.getViewBounds(t,Fv,Bv),i.subVectors(Bv,Fv)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(cc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class lE extends Lm{constructor(){super(new Ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Ko*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ju extends el{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new lE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class cE extends Lm{constructor(){super(new Ti(90,1,.5,500)),this.isPointLightShadow=!0}}class fc extends el{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new cE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ch extends Om{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uE extends Lm{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class am extends el{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new uE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class uS extends el{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Io=-90,Po=1;class fS extends pn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(Io,Po,t,i);l.layers=this.layers,this.add(l);const c=new Ti(Io,Po,t,i);c.layers=this.layers,this.add(c);const h=new Ti(Io,Po,t,i);h.layers=this.layers,this.add(h);const d=new Ti(Io,Po,t,i);d.layers=this.layers,this.add(d);const m=new Ti(Io,Po,t,i);m.layers=this.layers,this.add(m);const p=new Ti(Io,Po,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Zo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class hS extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const zv=new un;class dS{constructor(t,i,s=0,l=1/0){this.ray=new Cm(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ve("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return zv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zv),this}intersectObject(t,i=!0,s=[]){return sm(t,this,s,i),s.sort(Hv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)sm(t[l],this,s,i);return s.sort(Hv),s}}function Hv(r,t){return r.distance-t.distance}function sm(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)sm(c[h],t,i,!0)}}class pS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,he("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Gv(r,t,i,s){const l=fE(s);switch(i){case ym:return r*t;case Qf:return r*t/l.components*l.byteLength;case Jf:return r*t/l.components*l.byteLength;case Pr:return r*t*2/l.components*l.byteLength;case $f:return r*t*2/l.components*l.byteLength;case Mm:return r*t*3/l.components*l.byteLength;case ua:return r*t*4/l.components*l.byteLength;case th:return r*t*4/l.components*l.byteLength;case sc:case rc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case oc:case lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hf:case pf:return Math.max(r,16)*Math.max(t,8)/4;case ff:case df:return Math.max(r,8)*Math.max(t,8)/2;case mf:case gf:case vf:case xf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _f:case Sf:case yf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ef:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Tf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case bf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Af:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Rf:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Cf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Df:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Uf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Lf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Of:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case If:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Pf:case Ff:case Bf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case zf:case Hf:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gf:case Vf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fE(r){switch(r){case Li:case _m:return{byteLength:1,components:1};case qo:case vm:case Wa:return{byteLength:2,components:1};case Zf:case Kf:return{byteLength:2,components:4};case Da:case jf:case ca:return{byteLength:4,components:1};case xm:case Sm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);function mS(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function hE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<x.length;y++){const E=x[g],w=x[y];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,x[g]=w)}x.length=g+1;for(let y=0,E=x.length;y<E;y++){const w=x[y];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var dE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pE=`#ifdef USE_ALPHAHASH
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
#endif`,mE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xE=`#ifdef USE_AOMAP
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
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yE=`#ifdef USE_BATCHING
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
#endif`,ME=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AE=`#ifdef USE_IRIDESCENCE
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
#endif`,RE=`#ifdef USE_BUMPMAP
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,PE=`#define PI 3.141592653589793
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
} // validated`,FE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BE=`vec3 transformedNormal = objectNormal;
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
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tT=`#ifdef USE_GRADIENTMAP
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
}`,eT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aT=`uniform bool receiveShadow;
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
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uT=`PhysicalMaterial material;
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
#endif`,fT=`uniform sampler2D dfgLUT;
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
}`,hT=`
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
#endif`,dT=`#if defined( RE_IndirectDiffuse )
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
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ST=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MT=`#if defined( USE_POINTS_UV )
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
#endif`,ET=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`#ifdef USE_MORPHTARGETS
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
#endif`,wT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IT=`#ifdef USE_NORMALMAP
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QT=`float getShadowMask() {
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
}`,JT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#ifdef USE_TRANSMISSION
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
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
}`,xb=`#if DEPTH_PACKING == 3200
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
}`,Sb=`#define DISTANCE
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
}`,yb=`#define DISTANCE
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`uniform float scale;
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
}`,bb=`uniform vec3 diffuse;
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
}`,Ab=`#include <common>
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
}`,Rb=`uniform vec3 diffuse;
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
}`,Cb=`#define LAMBERT
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
}`,wb=`#define LAMBERT
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
}`,Db=`#define MATCAP
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
}`,Ub=`#define MATCAP
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
}`,Nb=`#define NORMAL
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
}`,Lb=`#define NORMAL
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
}`,Ob=`#define PHONG
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
}`,Ib=`#define PHONG
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
}`,Pb=`#define STANDARD
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
}`,Fb=`#define STANDARD
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
}`,Bb=`#define TOON
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
}`,zb=`#define TOON
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
}`,Hb=`uniform float size;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#include <common>
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
}`,kb=`uniform vec3 color;
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
}`,Xb=`uniform float rotation;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:dE,alphahash_pars_fragment:pE,alphamap_fragment:mE,alphamap_pars_fragment:gE,alphatest_fragment:_E,alphatest_pars_fragment:vE,aomap_fragment:xE,aomap_pars_fragment:SE,batching_pars_vertex:yE,batching_vertex:ME,begin_vertex:EE,beginnormal_vertex:TE,bsdfs:bE,iridescence_fragment:AE,bumpmap_pars_fragment:RE,clipping_planes_fragment:CE,clipping_planes_pars_fragment:wE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:UE,color_fragment:NE,color_pars_fragment:LE,color_pars_vertex:OE,color_vertex:IE,common:PE,cube_uv_reflection_fragment:FE,defaultnormal_vertex:BE,displacementmap_pars_vertex:zE,displacementmap_vertex:HE,emissivemap_fragment:GE,emissivemap_pars_fragment:VE,colorspace_fragment:kE,colorspace_pars_fragment:XE,envmap_fragment:WE,envmap_common_pars_fragment:YE,envmap_pars_fragment:qE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:sT,envmap_vertex:ZE,fog_vertex:KE,fog_pars_vertex:QE,fog_fragment:JE,fog_pars_fragment:$E,gradientmap_pars_fragment:tT,lightmap_pars_fragment:eT,lights_lambert_fragment:nT,lights_lambert_pars_fragment:iT,lights_pars_begin:aT,lights_toon_fragment:rT,lights_toon_pars_fragment:oT,lights_phong_fragment:lT,lights_phong_pars_fragment:cT,lights_physical_fragment:uT,lights_physical_pars_fragment:fT,lights_fragment_begin:hT,lights_fragment_maps:dT,lights_fragment_end:pT,logdepthbuf_fragment:mT,logdepthbuf_pars_fragment:gT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:vT,map_fragment:xT,map_pars_fragment:ST,map_particle_fragment:yT,map_particle_pars_fragment:MT,metalnessmap_fragment:ET,metalnessmap_pars_fragment:TT,morphinstance_vertex:bT,morphcolor_vertex:AT,morphnormal_vertex:RT,morphtarget_pars_vertex:CT,morphtarget_vertex:wT,normal_fragment_begin:DT,normal_fragment_maps:UT,normal_pars_fragment:NT,normal_pars_vertex:LT,normal_vertex:OT,normalmap_pars_fragment:IT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:BT,iridescence_pars_fragment:zT,opaque_fragment:HT,packing:GT,premultiplied_alpha_fragment:VT,project_vertex:kT,dithering_fragment:XT,dithering_pars_fragment:WT,roughnessmap_fragment:YT,roughnessmap_pars_fragment:qT,shadowmap_pars_fragment:jT,shadowmap_pars_vertex:ZT,shadowmap_vertex:KT,shadowmask_pars_fragment:QT,skinbase_vertex:JT,skinning_pars_vertex:$T,skinning_vertex:tb,skinnormal_vertex:eb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:ab,tonemapping_pars_fragment:sb,transmission_fragment:rb,transmission_pars_fragment:ob,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:fb,background_vert:hb,background_frag:db,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:_b,depth_vert:vb,depth_frag:xb,distance_vert:Sb,distance_frag:yb,equirect_vert:Mb,equirect_frag:Eb,linedashed_vert:Tb,linedashed_frag:bb,meshbasic_vert:Ab,meshbasic_frag:Rb,meshlambert_vert:Cb,meshlambert_frag:wb,meshmatcap_vert:Db,meshmatcap_frag:Ub,meshnormal_vert:Nb,meshnormal_frag:Lb,meshphong_vert:Ob,meshphong_frag:Ib,meshphysical_vert:Pb,meshphysical_frag:Fb,meshtoon_vert:Bb,meshtoon_frag:zb,points_vert:Hb,points_frag:Gb,shadow_vert:Vb,shadow_frag:kb,sprite_vert:Xb,sprite_frag:Wb},It={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},Aa={basic:{uniforms:Ei([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Ei([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Ei([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Ei([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Ei([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new re(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Ei([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Ei([It.points,It.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Ei([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Ei([It.common,It.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Ei([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Ei([It.sprite,It.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:Ei([It.common,It.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:Ei([It.lights,It.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Aa.physical={uniforms:Ei([Aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Vu={r:0,b:0,g:0},Rr=new ha,Yb=new un;function qb(r,t,i,s,l,c){const h=new re(0);let d=l===!0?0:1,m,p,_=null,x=0,g=null;function y(C){let O=C.isScene===!0?C.background:null;if(O&&O.isTexture){const U=C.backgroundBlurriness>0;O=t.get(O,U)}return O}function E(C){let O=!1;const U=y(C);U===null?M(h,d):U&&U.isColor&&(M(U,1),O=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,O){const U=y(O);U&&(U.isCubeTexture||U.mapping===gc)?(p===void 0&&(p=new Ge(new sr(1,1,1),new Ua({name:"BackgroundCubeMaterial",uniforms:Jo(Aa.backgroundCube.uniforms),vertexShader:Aa.backgroundCube.vertexShader,fragmentShader:Aa.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Rr.copy(O.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(Rr)),p.material.toneMapped=ke.getTransfer(U.colorSpace)!==$e,(_!==U||x!==U.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Ge(new Va(2,2),new Ua({name:"BackgroundMaterial",uniforms:Jo(Aa.background.uniforms),vertexShader:Aa.background.vertexShader,fragmentShader:Aa.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=ke.getTransfer(U.colorSpace)!==$e,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||x!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,O){C.getRGB(Vu,iS(r)),i.buffers.color.setClear(Vu.r,Vu.g,Vu.b,O,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,O=1){h.set(C),d=O,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(h,d)},render:E,addToRenderList:w,dispose:S}}function jb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(B,K,st,nt,j){let L=!1;const D=x(B,nt,st,K);c!==D&&(c=D,p(c.object)),L=y(B,nt,st,j),L&&E(B,nt,st,j),j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,U(B,K,st,nt),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function m(){return r.createVertexArray()}function p(B){return r.bindVertexArray(B)}function _(B){return r.deleteVertexArray(B)}function x(B,K,st,nt){const j=nt.wireframe===!0;let L=s[K.id];L===void 0&&(L={},s[K.id]=L);const D=B.isInstancedMesh===!0?B.id:0;let q=L[D];q===void 0&&(q={},L[D]=q);let tt=q[st.id];tt===void 0&&(tt={},q[st.id]=tt);let ut=tt[j];return ut===void 0&&(ut=g(m()),tt[j]=ut),ut}function g(B){const K=[],st=[],nt=[];for(let j=0;j<i;j++)K[j]=0,st[j]=0,nt[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:st,attributeDivisors:nt,object:B,attributes:{},index:null}}function y(B,K,st,nt){const j=c.attributes,L=K.attributes;let D=0;const q=st.getAttributes();for(const tt in q)if(q[tt].location>=0){const P=j[tt];let Y=L[tt];if(Y===void 0&&(tt==="instanceMatrix"&&B.instanceMatrix&&(Y=B.instanceMatrix),tt==="instanceColor"&&B.instanceColor&&(Y=B.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;D++}return c.attributesNum!==D||c.index!==nt}function E(B,K,st,nt){const j={},L=K.attributes;let D=0;const q=st.getAttributes();for(const tt in q)if(q[tt].location>=0){let P=L[tt];P===void 0&&(tt==="instanceMatrix"&&B.instanceMatrix&&(P=B.instanceMatrix),tt==="instanceColor"&&B.instanceColor&&(P=B.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),j[tt]=Y,D++}c.attributes=j,c.attributesNum=D,c.index=nt}function w(){const B=c.newAttributes;for(let K=0,st=B.length;K<st;K++)B[K]=0}function M(B){S(B,0)}function S(B,K){const st=c.newAttributes,nt=c.enabledAttributes,j=c.attributeDivisors;st[B]=1,nt[B]===0&&(r.enableVertexAttribArray(B),nt[B]=1),j[B]!==K&&(r.vertexAttribDivisor(B,K),j[B]=K)}function C(){const B=c.newAttributes,K=c.enabledAttributes;for(let st=0,nt=K.length;st<nt;st++)K[st]!==B[st]&&(r.disableVertexAttribArray(st),K[st]=0)}function O(B,K,st,nt,j,L,D){D===!0?r.vertexAttribIPointer(B,K,st,j,L):r.vertexAttribPointer(B,K,st,nt,j,L)}function U(B,K,st,nt){w();const j=nt.attributes,L=st.getAttributes(),D=K.defaultAttributeValues;for(const q in L){const tt=L[q];if(tt.location>=0){let ut=j[q];if(ut===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(ut=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(ut=B.instanceColor)),ut!==void 0){const P=ut.normalized,Y=ut.itemSize,pt=t.get(ut);if(pt===void 0)continue;const Et=pt.buffer,Pt=pt.type,et=pt.bytesPerElement,_t=Pt===r.INT||Pt===r.UNSIGNED_INT||ut.gpuType===jf;if(ut.isInterleavedBufferAttribute){const yt=ut.data,Ft=yt.stride,Gt=ut.offset;if(yt.isInstancedInterleavedBuffer){for(let ne=0;ne<tt.locationSize;ne++)S(tt.location+ne,yt.meshPerAttribute);B.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ne=0;ne<tt.locationSize;ne++)M(tt.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let ne=0;ne<tt.locationSize;ne++)O(tt.location+ne,Y/tt.locationSize,Pt,P,Ft*et,(Gt+Y/tt.locationSize*ne)*et,_t)}else{if(ut.isInstancedBufferAttribute){for(let yt=0;yt<tt.locationSize;yt++)S(tt.location+yt,ut.meshPerAttribute);B.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let yt=0;yt<tt.locationSize;yt++)M(tt.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let yt=0;yt<tt.locationSize;yt++)O(tt.location+yt,Y/tt.locationSize,Pt,P,Y*et,Y/tt.locationSize*yt*et,_t)}}else if(D!==void 0){const P=D[q];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(tt.location,P);break;case 3:r.vertexAttrib3fv(tt.location,P);break;case 4:r.vertexAttrib4fv(tt.location,P);break;default:r.vertexAttrib1fv(tt.location,P)}}}}C()}function F(){N();for(const B in s){const K=s[B];for(const st in K){const nt=K[st];for(const j in nt){const L=nt[j];for(const D in L)_(L[D].object),delete L[D];delete nt[j]}}delete s[B]}}function z(B){if(s[B.id]===void 0)return;const K=s[B.id];for(const st in K){const nt=K[st];for(const j in nt){const L=nt[j];for(const D in L)_(L[D].object),delete L[D];delete nt[j]}}delete s[B.id]}function H(B){for(const K in s){const st=s[K];for(const nt in st){const j=st[nt];if(j[B.id]===void 0)continue;const L=j[B.id];for(const D in L)_(L[D].object),delete L[D];delete j[B.id]}}}function b(B){for(const K in s){const st=s[K],nt=B.isInstancedMesh===!0?B.id:0,j=st[nt];if(j!==void 0){for(const L in j){const D=j[L];for(const q in D)_(D[q].object),delete D[q];delete j[L]}delete st[nt],Object.keys(st).length===0&&delete s[K]}}}function N(){Q(),h=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:Q,dispose:F,releaseStatesOfGeometry:z,releaseStatesOfObject:b,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function Zb(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let y=0;for(let E=0;E<x;E++)y+=_[E];i.update(y,s,1)}function m(p,_,x,g){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],_[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,x);let E=0;for(let w=0;w<x;w++)E+=_[w]*g[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Kb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==ua&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const b=H===Wa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Li&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ca&&!b)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(he("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:O,maxFragmentUniforms:U,maxSamples:F,samples:z}}function Qb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new $s,d=new ye,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const E=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,S=r.get(x);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,O=C*4;let U=S.clippingState||null;m.value=U,U=_(E,g,O,y);for(let F=0;F!==O;++F)U[F]=i[F];S.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,y,E){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const S=y+w*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let O=0,U=y;O!==w;++O,U+=4)h.copy(x[O]).applyMatrix4(C,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const nr=4,Vv=[.125,.215,.35,.446,.526,.582],Nr=20,Jb=256,Jl=new ch,kv=new re;let Bp=null,zp=0,Hp=0,Gp=!1;const $b=new $;class Xf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=$b}=c;Bp=this._renderer.getRenderTarget(),zp=this._renderer.getActiveCubeFace(),Hp=this._renderer.getActiveMipmapLevel(),Gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bp,zp,Hp),this._renderer.xr.enabled=Gp,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ir||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bp=this._renderer.getRenderTarget(),zp=this._renderer.getActiveCubeFace(),Hp=this._renderer.getActiveMipmapLevel(),Gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Wa,format:ua,colorSpace:Fr,depthBuffer:!1},l=Xv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=t1(c)),this._blurMaterial=n1(c,t,i),this._ggxMaterial=e1(c,t,i)}return l}_compileMaterial(t){const i=new Ge(new qi,t);this._renderer.compile(i,Jl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(kv),x.toneMapping=Ca,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new sr,new mc({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(kv),S=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[O],c.y,c.z)):U===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[O]));const F=this._cubeSize;Fo(l,U*F,O>2?F:0,F,F),x.setRenderTarget(l),S&&x.render(w,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ir||t.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Fo(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Jl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,y=x*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-nr?s-E+nr:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,Fo(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,Jl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Fo(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,Jl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Nr-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):Nr;M>Nr&&he(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Nr}`);const S=[];let C=0;for(let H=0;H<Nr;++H){const b=H/w,N=Math.exp(-b*b/2);S.push(N),H===0?C+=N:H<M&&(C+=2*N)}for(let H=0;H<S.length;H++)S[H]=S[H]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:O}=this;g.dTheta.value=E,g.mipInt.value=O-s;const U=this._sizeLods[l],F=3*U*(l>O-nr?l-O+nr:0),z=4*(this._cubeSize-U);Fo(i,F,z,3*U,2*U),m.setRenderTarget(i),m.render(x,Jl)}}function t1(r){const t=[],i=[],s=[];let l=r;const c=r-nr+1+Vv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-nr?m=Vv[h-r+nr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,E=6,w=3,M=2,S=1,C=new Float32Array(w*E*y),O=new Float32Array(M*E*y),U=new Float32Array(S*E*y);for(let z=0;z<y;z++){const H=z%3*2/3-1,b=z>2?0:-1,N=[H,b,0,H+2/3,b,0,H+2/3,b+1,0,H,b,0,H+2/3,b+1,0,H,b+1,0];C.set(N,w*E*z),O.set(g,M*E*z);const Q=[z,z,z,z,z,z];U.set(Q,S*E*z)}const F=new qi;F.setAttribute("position",new fa(C,w)),F.setAttribute("uv",new fa(O,M)),F.setAttribute("faceIndex",new fa(U,S)),s.push(new Ge(F,null)),l>nr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Xv(r,t,i){const s=new wa(r,t,i);return s.texture.mapping=gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fo(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function e1(r,t,i){return new Ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function n1(r,t,i){const s=new Float32Array(Nr),l=new $(0,1,0);return new Ua({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Wv(){return new Ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Yv(){return new Ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function uh(){return`

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
			`},l=new sr(5,5,5),c=new Ua({name:"CubemapFromEquirect",uniforms:Jo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:gi,blending:Xa});c.uniforms.tEquirect.value=i;const h=new Ge(l,c),d=i.minFilter;return i.minFilter===Ss&&(i.minFilter=$n),new fS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function i1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===ju||y===Zu)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new Im(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,E=y===ju||y===Zu,w=y===ir||y===Ir;if(E||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Xf(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return E&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new Xf(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===ju?g.mapping=ir:y===Zu&&(g.mapping=Ir),g}function m(g){let y=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function a1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&dc("WebGLRenderer: "+s+" extension not supported."),l}}}function s1(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(x){const g=[],y=x.index,E=x.attributes.position;let w=0;if(E===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let O=0,U=C.length;O<U;O+=3){const F=C[O+0],z=C[O+1],H=C[O+2];g.push(F,z,z,H,H,F)}}else{const C=E.array;w=E.version;for(let O=0,U=C.length/3-1;O<U;O+=3){const F=O+0,z=O+1,H=O+2;g.push(F,z,z,H,H,F)}}const M=new(E.count>=65535?Rm:Am)(g,1);M.version=w;const S=c.get(x);S&&t.remove(S),c.set(x,M)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function r1(r,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*h),i.update(y,s,1)}function p(g,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,g*h,E),i.update(y,s,E))}function _(g,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,E);let M=0;for(let S=0;S<E;S++)M+=y[S];i.update(M,s,1)}function x(g,y,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/h,y[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,w,0,E);let S=0;for(let C=0;C<E;C++)S+=y[C]*w[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function o1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ve("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function l1(r,t,i){const s=new WeakMap,l=new Rn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let Q=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",Q)};var y=Q;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),w===!0&&(U=2),M===!0&&(U=3);let F=d.attributes.position.count*U,z=1;F>t.maxTextureSize&&(z=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const H=new Float32Array(F*z*4*x),b=new Tm(H,F,z,x);b.type=ca,b.needsUpdate=!0;const N=U*4;for(let B=0;B<x;B++){const K=S[B],st=C[B],nt=O[B],j=F*z*4*B;for(let L=0;L<K.count;L++){const D=L*N;E===!0&&(l.fromBufferAttribute(K,L),H[j+D+0]=l.x,H[j+D+1]=l.y,H[j+D+2]=l.z,H[j+D+3]=0),w===!0&&(l.fromBufferAttribute(st,L),H[j+D+4]=l.x,H[j+D+5]=l.y,H[j+D+6]=l.z,H[j+D+7]=0),M===!0&&(l.fromBufferAttribute(nt,L),H[j+D+8]=l.x,H[j+D+9]=l.y,H[j+D+10]=l.z,H[j+D+11]=nt.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new De(F,z)},s.set(d,g),d.addEventListener("dispose",Q)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function c1(r,t,i,s,l){let c=new WeakMap;function h(p){const _=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const u1={[um]:"LINEAR_TONE_MAPPING",[fm]:"REINHARD_TONE_MAPPING",[hm]:"CINEON_TONE_MAPPING",[qf]:"ACES_FILMIC_TONE_MAPPING",[pm]:"AGX_TONE_MAPPING",[mm]:"NEUTRAL_TONE_MAPPING",[dm]:"CUSTOM_TONE_MAPPING"};function f1(r,t,i,s,l){const c=new wa(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new wa(t,i,{type:Wa,depthBuffer:!1,stencilBuffer:!1}),d=new qi;d.setAttribute("position",new ti([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ti([0,2,0,0,2,0],2));const m=new sS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ge(d,m),_=new ch(-1,1,1,-1,0,1);let x=null,g=null,y=!1,E,w=null,M=[],S=!1;this.setSize=function(C,O){c.setSize(C,O),h.setSize(C,O);for(let U=0;U<M.length;U++){const F=M[U];F.setSize&&F.setSize(C,O)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const O=c.width,U=c.height;for(let F=0;F<M.length;F++){const z=M[F];z.setSize&&z.setSize(O,U)}},this.begin=function(C,O){if(y||C.toneMapping===Ca&&M.length===0)return!1;if(w=O,O!==null){const U=O.width,F=O.height;(c.width!==U||c.height!==F)&&this.setSize(U,F)}return S===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=Ca,!0},this.hasRenderPass=function(){return S},this.end=function(C,O){C.toneMapping=E,y=!0;let U=c,F=h;for(let z=0;z<M.length;z++){const H=M[z];if(H.enabled!==!1&&(H.render(C,F,U,O),H.needsSwap!==!1)){const b=U;U=F,F=b}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},ke.getTransfer(x)===$e&&(m.defines.SRGB_TRANSFER="");const z=u1[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(w),C.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const gS=new oi,rm=new Qo(1,1),_S=new Tm,vS=new Qx,xS=new Dm,qv=[],jv=[],Zv=new Float32Array(16),Kv=new Float32Array(9),Qv=new Float32Array(4);function nl(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=qv[l];if(c===void 0&&(c=new Float32Array(l),qv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function jn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Zn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function fh(r,t){let i=jv[t];i===void 0&&(i=new Int32Array(t),jv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function h1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function d1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(jn(i,t))return;r.uniform2fv(this.addr,t),Zn(i,t)}}function p1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(jn(i,t))return;r.uniform3fv(this.addr,t),Zn(i,t)}}function m1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(jn(i,t))return;r.uniform4fv(this.addr,t),Zn(i,t)}}function g1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(jn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Zn(i,t)}else{if(jn(i,s))return;Qv.set(s),r.uniformMatrix2fv(this.addr,!1,Qv),Zn(i,s)}}function _1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(jn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Zn(i,t)}else{if(jn(i,s))return;Kv.set(s),r.uniformMatrix3fv(this.addr,!1,Kv),Zn(i,s)}}function v1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(jn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Zn(i,t)}else{if(jn(i,s))return;Zv.set(s),r.uniformMatrix4fv(this.addr,!1,Zv),Zn(i,s)}}function x1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function S1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(jn(i,t))return;r.uniform2iv(this.addr,t),Zn(i,t)}}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(jn(i,t))return;r.uniform3iv(this.addr,t),Zn(i,t)}}function M1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(jn(i,t))return;r.uniform4iv(this.addr,t),Zn(i,t)}}function E1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function T1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(jn(i,t))return;r.uniform2uiv(this.addr,t),Zn(i,t)}}function b1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(jn(i,t))return;r.uniform3uiv(this.addr,t),Zn(i,t)}}function A1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(jn(i,t))return;r.uniform4uiv(this.addr,t),Zn(i,t)}}function R1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(rm.compareFunction=i.isReversedDepthBuffer()?ih:nh,c=rm):c=gS,i.setTexture2D(t||c,l)}function C1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||vS,l)}function w1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||xS,l)}function D1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||_S,l)}function U1(r){switch(r){case 5126:return h1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return x1;case 35667:case 35671:return S1;case 35668:case 35672:return y1;case 35669:case 35673:return M1;case 5125:return E1;case 36294:return T1;case 36295:return b1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return D1}}function N1(r,t){r.uniform1fv(this.addr,t)}function L1(r,t){const i=nl(t,this.size,2);r.uniform2fv(this.addr,i)}function O1(r,t){const i=nl(t,this.size,3);r.uniform3fv(this.addr,i)}function I1(r,t){const i=nl(t,this.size,4);r.uniform4fv(this.addr,i)}function P1(r,t){const i=nl(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function F1(r,t){const i=nl(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function B1(r,t){const i=nl(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function z1(r,t){r.uniform1iv(this.addr,t)}function H1(r,t){r.uniform2iv(this.addr,t)}function G1(r,t){r.uniform3iv(this.addr,t)}function V1(r,t){r.uniform4iv(this.addr,t)}function k1(r,t){r.uniform1uiv(this.addr,t)}function X1(r,t){r.uniform2uiv(this.addr,t)}function W1(r,t){r.uniform3uiv(this.addr,t)}function Y1(r,t){r.uniform4uiv(this.addr,t)}function q1(r,t,i){const s=this.cache,l=t.length,c=fh(i,l);jn(s,c)||(r.uniform1iv(this.addr,c),Zn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=rm:h=gS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function j1(r,t,i){const s=this.cache,l=t.length,c=fh(i,l);jn(s,c)||(r.uniform1iv(this.addr,c),Zn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||vS,c[h])}function Z1(r,t,i){const s=this.cache,l=t.length,c=fh(i,l);jn(s,c)||(r.uniform1iv(this.addr,c),Zn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||xS,c[h])}function K1(r,t,i){const s=this.cache,l=t.length,c=fh(i,l);jn(s,c)||(r.uniform1iv(this.addr,c),Zn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||_S,c[h])}function Q1(r){switch(r){case 5126:return N1;case 35664:return L1;case 35665:return O1;case 35666:return I1;case 35674:return P1;case 35675:return F1;case 35676:return B1;case 5124:case 35670:return z1;case 35667:case 35671:return H1;case 35668:case 35672:return G1;case 35669:case 35673:return V1;case 5125:return k1;case 36294:return X1;case 36295:return W1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return K1}}class J1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=U1(i.type)}}class $1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Q1(i.type)}}class tA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Vp=/(\w+)(\])?(\[|\.)?/g;function Jv(r,t){r.seq.push(t),r.map[t.id]=t}function eA(r,t,i){const s=r.name,l=s.length;for(Vp.lastIndex=0;;){const c=Vp.exec(s),h=Vp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Jv(i,p===void 0?new J1(d,r,t):new $1(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new tA(d),Jv(i,x)),i=x}}}class $u{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);eA(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function $v(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const nA=37297;let iA=0;function aA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const tx=new ye;function sA(r){ke._getMatrix(tx,ke.workingColorSpace,r);const t=`mat3( ${tx.elements.map(i=>i.toFixed(4))} )`;switch(ke.getTransfer(r)){case hc:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ex(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+aA(r.getShaderSource(t),d)}else return c}function rA(r,t){const i=sA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const oA={[um]:"Linear",[fm]:"Reinhard",[hm]:"Cineon",[qf]:"ACESFilmic",[pm]:"AgX",[mm]:"Neutral",[dm]:"Custom"};function lA(r,t){const i=oA[t];return i===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ku=new $;function cA(){ke.getLuminanceCoefficients(ku);const r=ku.x.toFixed(4),t=ku.y.toFixed(4),i=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ac).join(`
`)}function fA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function hA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function ac(r){return r!==""}function nx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ix(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dA=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(r){return r.replace(dA,mA)}const pA=new Map;function mA(r,t){let i=Te[t];if(i===void 0){const s=pA.get(t);if(s!==void 0)i=Te[s],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return om(i)}const gA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ax(r){return r.replace(gA,_A)}function _A(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function sx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const vA={[Xo]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function xA(r){return vA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SA={[ir]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function yA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":SA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const MA={[Ir]:"ENVMAP_MODE_REFRACTION"};function EA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":MA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TA={[Yf]:"ENVMAP_BLENDING_MULTIPLY",[Px]:"ENVMAP_BLENDING_MIX",[Fx]:"ENVMAP_BLENDING_ADD"};function bA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":TA[r.combine]||"ENVMAP_BLENDING_NONE"}function AA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function RA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=xA(i),p=yA(i),_=EA(i),x=bA(i),g=AA(i),y=uA(i),E=fA(c),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ac).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ac).join(`
`),S.length>0&&(S+=`
`)):(M=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ac).join(`
`),S=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ca?"#define TONE_MAPPING":"",i.toneMapping!==Ca?Te.tonemapping_pars_fragment:"",i.toneMapping!==Ca?lA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,rA("linearToOutputTexel",i.outputColorSpace),cA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ac).join(`
`)),h=om(h),h=nx(h,i),h=ix(h,i),d=om(d),d=nx(d,i),d=ix(d,i),h=ax(h),d=ax(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=C+M+h,U=C+S+d,F=$v(l,l.VERTEX_SHADER,O),z=$v(l,l.FRAGMENT_SHADER,U);l.attachShader(w,F),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function H(B){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",st=l.getShaderInfoLog(F)||"",nt=l.getShaderInfoLog(z)||"",j=K.trim(),L=st.trim(),D=nt.trim();let q=!0,tt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,F,z);else{const ut=ex(l,F,"vertex"),P=ex(l,z,"fragment");Ve("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+j+`
`+ut+`
`+P)}else j!==""?he("WebGLProgram: Program Info Log:",j):(L===""||D==="")&&(tt=!1);tt&&(B.diagnostics={runnable:q,programLog:j,vertexShader:{log:L,prefix:M},fragmentShader:{log:D,prefix:S}})}l.deleteShader(F),l.deleteShader(z),b=new $u(l,w),N=hA(l,w)}let b;this.getUniforms=function(){return b===void 0&&H(this),b};let N;this.getAttributes=function(){return N===void 0&&H(this),N};let Q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=l.getProgramParameter(w,nA)),Q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=iA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=z,this}let CA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new DA(t),i.set(t,s)),s}}class DA{constructor(t){this.id=CA++,this.code=t,this.usedTimes=0}}function UA(r,t,i,s,l,c){const h=new sh,d=new wA,m=new Set,p=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,N,Q,B,K){const st=B.fog,nt=K.geometry,j=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,L=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,D=t.get(b.envMap||j,L),q=D&&D.mapping===gc?D.image.height:null,tt=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&he("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const ut=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,P=ut!==void 0?ut.length:0;let Y=0;nt.morphAttributes.position!==void 0&&(Y=1),nt.morphAttributes.normal!==void 0&&(Y=2),nt.morphAttributes.color!==void 0&&(Y=3);let pt,Et,Pt,et;if(tt){const Re=Aa[tt];pt=Re.vertexShader,Et=Re.fragmentShader}else pt=b.vertexShader,Et=b.fragmentShader,d.update(b),Pt=d.getVertexShaderID(b),et=d.getFragmentShaderID(b);const _t=r.getRenderTarget(),yt=r.state.buffers.depth.getReversed(),Ft=K.isInstancedMesh===!0,Gt=K.isBatchedMesh===!0,ne=!!b.map,Ke=!!b.matcap,Me=!!D,ve=!!b.aoMap,pe=!!b.lightMap,me=!!b.bumpMap,an=!!b.normalMap,V=!!b.displacementMap,tn=!!b.emissiveMap,Ae=!!b.metalnessMap,Xe=!!b.roughnessMap,Kt=b.anisotropy>0,I=b.clearcoat>0,T=b.dispersion>0,Z=b.iridescence>0,mt=b.sheen>0,St=b.transmission>0,dt=Kt&&!!b.anisotropyMap,Xt=I&&!!b.clearcoatMap,Dt=I&&!!b.clearcoatNormalMap,Jt=I&&!!b.clearcoatRoughnessMap,ae=Z&&!!b.iridescenceMap,bt=Z&&!!b.iridescenceThicknessMap,Tt=mt&&!!b.sheenColorMap,zt=mt&&!!b.sheenRoughnessMap,Ot=!!b.specularMap,Ht=!!b.specularColorMap,ge=!!b.specularIntensityMap,W=St&&!!b.transmissionMap,Ct=St&&!!b.thicknessMap,At=!!b.gradientMap,Ut=!!b.alphaMap,Mt=b.alphaTest>0,ht=!!b.alphaHash,kt=!!b.extensions;let ce=Ca;b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ce=r.toneMapping);const de={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:Et,defines:b.defines,customVertexShaderID:Pt,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&K._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&K.instanceColor!==null,instancingMorph:Ft&&K.morphTexture!==null,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Fr,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:Ke,envMap:Me,envMapMode:Me&&D.mapping,envMapCubeUVHeight:q,aoMap:ve,lightMap:pe,bumpMap:me,normalMap:an,displacementMap:V,emissiveMap:tn,normalMapObjectSpace:an&&b.normalMapType===Hx,normalMapTangentSpace:an&&b.normalMapType===eh,metalnessMap:Ae,roughnessMap:Xe,anisotropy:Kt,anisotropyMap:dt,clearcoat:I,clearcoatMap:Xt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Jt,dispersion:T,iridescence:Z,iridescenceMap:ae,iridescenceThicknessMap:bt,sheen:mt,sheenColorMap:Tt,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ht,specularIntensityMap:ge,transmission:St,transmissionMap:W,thicknessMap:Ct,gradientMap:At,opaque:b.transparent===!1&&b.blending===Lr&&b.alphaToCoverage===!1,alphaMap:Ut,alphaTest:Mt,alphaHash:ht,combine:b.combine,mapUv:ne&&E(b.map.channel),aoMapUv:ve&&E(b.aoMap.channel),lightMapUv:pe&&E(b.lightMap.channel),bumpMapUv:me&&E(b.bumpMap.channel),normalMapUv:an&&E(b.normalMap.channel),displacementMapUv:V&&E(b.displacementMap.channel),emissiveMapUv:tn&&E(b.emissiveMap.channel),metalnessMapUv:Ae&&E(b.metalnessMap.channel),roughnessMapUv:Xe&&E(b.roughnessMap.channel),anisotropyMapUv:dt&&E(b.anisotropyMap.channel),clearcoatMapUv:Xt&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:zt&&E(b.sheenRoughnessMap.channel),specularMapUv:Ot&&E(b.specularMap.channel),specularColorMapUv:Ht&&E(b.specularColorMap.channel),specularIntensityMapUv:ge&&E(b.specularIntensityMap.channel),transmissionMapUv:W&&E(b.transmissionMap.channel),thicknessMapUv:Ct&&E(b.thicknessMap.channel),alphaMapUv:Ut&&E(b.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(an||Kt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!nt.attributes.uv&&(ne||Ut),fog:!!st,useFog:b.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||nt.attributes.normal===void 0&&an===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:yt,skinning:K.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&Q.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&ke.getTransfer(b.map.colorSpace)===$e,decodeVideoTextureEmissive:tn&&b.emissiveMap.isVideoTexture===!0&&ke.getTransfer(b.emissiveMap.colorSpace)===$e,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===kn,flipSided:b.side===gi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return de.vertexUv1s=m.has(1),de.vertexUv2s=m.has(2),de.vertexUv3s=m.has(3),m.clear(),de}function M(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Q in b.defines)N.push(Q),N.push(b.defines[Q]);return b.isRawShaderMaterial===!1&&(S(N,b),C(N,b),N.push(r.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function S(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function C(b,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),b.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),b.push(h.mask)}function O(b){const N=y[b.type];let Q;if(N){const B=Aa[N];Q=aS.clone(B.uniforms)}else Q=b.uniforms;return Q}function U(b,N){let Q=_.get(N);return Q!==void 0?++Q.usedTimes:(Q=new RA(r,N,b,l),p.push(Q),_.set(N,Q)),Q}function F(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function z(b){d.remove(b)}function H(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:O,acquireProgram:U,releaseProgram:F,releaseShaderCache:z,programs:p,dispose:H}}function NA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function LA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function rx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ox(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,E,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:E,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=E,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,E,w,M,S){const C=d(g,y,E,w,M,S);E.transmission>0?s.push(C):E.transparent===!0?l.push(C):i.push(C)}function p(g,y,E,w,M,S){const C=d(g,y,E,w,M,S);E.transmission>0?s.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||LA),s.length>1&&s.sort(y||rx),l.length>1&&l.sort(y||rx)}function x(){for(let g=t,y=r.length;g<y;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:_}}function OA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new ox,r.set(s,[h])):l>=c.length?(h=new ox,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function IA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new re};break;case"SpotLight":i={position:new $,direction:new $,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new re,groundColor:new re};break;case"RectAreaLight":i={color:new re,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=i,i}}}function PA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let FA=0;function BA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function zA(r){const t=new IA,i=PA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,c=new un,h=new un;function d(p){let _=0,x=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,E=0,w=0,M=0,S=0,C=0,O=0,U=0,F=0,z=0,H=0;p.sort(BA);for(let N=0,Q=p.length;N<Q;N++){const B=p[N],K=B.color,st=B.intensity,nt=B.distance;let j=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Pr?j=B.shadow.map.texture:j=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)_+=K.r*st,x+=K.g*st,g+=K.b*st;else if(B.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(B.sh.coefficients[L],st);H++}else if(B.isDirectionalLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const D=B.shadow,q=i.get(B);q.shadowIntensity=D.intensity,q.shadowBias=D.bias,q.shadowNormalBias=D.normalBias,q.shadowRadius=D.radius,q.shadowMapSize=D.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=j,s.directionalShadowMatrix[y]=B.shadow.matrix,C++}s.directional[y]=L,y++}else if(B.isSpotLight){const L=t.get(B);L.position.setFromMatrixPosition(B.matrixWorld),L.color.copy(K).multiplyScalar(st),L.distance=nt,L.coneCos=Math.cos(B.angle),L.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),L.decay=B.decay,s.spot[w]=L;const D=B.shadow;if(B.map&&(s.spotLightMap[F]=B.map,F++,D.updateMatrices(B),B.castShadow&&z++),s.spotLightMatrix[w]=D.matrix,B.castShadow){const q=i.get(B);q.shadowIntensity=D.intensity,q.shadowBias=D.bias,q.shadowNormalBias=D.normalBias,q.shadowRadius=D.radius,q.shadowMapSize=D.mapSize,s.spotShadow[w]=q,s.spotShadowMap[w]=j,U++}w++}else if(B.isRectAreaLight){const L=t.get(B);L.color.copy(K).multiplyScalar(st),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=L,M++}else if(B.isPointLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),L.distance=B.distance,L.decay=B.decay,B.castShadow){const D=B.shadow,q=i.get(B);q.shadowIntensity=D.intensity,q.shadowBias=D.bias,q.shadowNormalBias=D.normalBias,q.shadowRadius=D.radius,q.shadowMapSize=D.mapSize,q.shadowCameraNear=D.camera.near,q.shadowCameraFar=D.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=j,s.pointShadowMatrix[E]=B.shadow.matrix,O++}s.point[E]=L,E++}else if(B.isHemisphereLight){const L=t.get(B);L.skyColor.copy(B.color).multiplyScalar(st),L.groundColor.copy(B.groundColor).multiplyScalar(st),s.hemi[S]=L,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==E||b.spotLength!==w||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==C||b.numPointShadows!==O||b.numSpotShadows!==U||b.numSpotMaps!==F||b.numLightProbes!==H)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+F-z,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=H,b.directionalLength=y,b.pointLength=E,b.spotLength=w,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=C,b.numPointShadows=O,b.numSpotShadows=U,b.numSpotMaps=F,b.numLightProbes=H,s.version=FA++)}function m(p,_){let x=0,g=0,y=0,E=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const O=p[S];if(O.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),x++}else if(O.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),g++}else if(O.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function lx(r){const t=new zA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function HA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new lx(r),t.set(l,[d])):c>=h.length?(d=new lx(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
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
}`,kA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],XA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],cx=new un,$l=new $,kp=new $;function WA(r,t,i){let s=new rh;const l=new De,c=new De,h=new Rn,d=new oS,m=new lS,p={},_=i.maxTextureSize,x={[Ms]:gi,[gi]:Ms,[kn]:kn},g=new Ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:GA,fragmentShader:VA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new qi;E.setAttribute("position",new fa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ge(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let S=this.type;this.render=function(z,H,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===_x&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xo);const N=r.getRenderTarget(),Q=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Xa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const st=S!==this.type;st&&H.traverse(function(nt){nt.material&&(Array.isArray(nt.material)?nt.material.forEach(j=>j.needsUpdate=!0):nt.material.needsUpdate=!0)});for(let nt=0,j=z.length;nt<j;nt++){const L=z[nt],D=L.shadow;if(D===void 0){he("WebGLShadowMap:",L,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;l.copy(D.mapSize);const q=D.getFrameExtents();l.multiply(q),c.copy(D.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/q.x),l.x=c.x*q.x,D.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/q.y),l.y=c.y*q.y,D.mapSize.y=c.y));const tt=r.state.buffers.depth.getReversed();if(D.camera._reversedDepth=tt,D.map===null||st===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Go){if(L.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new wa(l.x,l.y,{format:Pr,type:Wa,minFilter:$n,magFilter:$n,generateMipmaps:!1}),D.map.texture.name=L.name+".shadowMap",D.map.depthTexture=new Qo(l.x,l.y,ca),D.map.depthTexture.name=L.name+".shadowMapDepth",D.map.depthTexture.format=Ya,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Jn,D.map.depthTexture.magFilter=Jn}else L.isPointLight?(D.map=new Im(l.x),D.map.depthTexture=new tS(l.x,Da)):(D.map=new wa(l.x,l.y),D.map.depthTexture=new Qo(l.x,l.y,Da)),D.map.depthTexture.name=L.name+".shadowMap",D.map.depthTexture.format=Ya,this.type===Xo?(D.map.depthTexture.compareFunction=tt?ih:nh,D.map.depthTexture.minFilter=$n,D.map.depthTexture.magFilter=$n):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Jn,D.map.depthTexture.magFilter=Jn);D.camera.updateProjectionMatrix()}const ut=D.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<ut;P++){if(D.map.isWebGLCubeRenderTarget)r.setRenderTarget(D.map,P),r.clear();else{P===0&&(r.setRenderTarget(D.map),r.clear());const Y=D.getViewport(P);h.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),K.viewport(h)}if(L.isPointLight){const Y=D.camera,pt=D.matrix,Et=L.distance||Y.far;Et!==Y.far&&(Y.far=Et,Y.updateProjectionMatrix()),$l.setFromMatrixPosition(L.matrixWorld),Y.position.copy($l),kp.copy(Y.position),kp.add(kA[P]),Y.up.copy(XA[P]),Y.lookAt(kp),Y.updateMatrixWorld(),pt.makeTranslation(-$l.x,-$l.y,-$l.z),cx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),D._frustum.setFromProjectionMatrix(cx,Y.coordinateSystem,Y.reversedDepth)}else D.updateMatrices(L);s=D.getFrustum(),U(H,b,D.camera,L,this.type)}D.isPointLightShadow!==!0&&this.type===Go&&C(D,b),D.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(N,Q,B)};function C(z,H){const b=t.update(w);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new wa(l.x,l.y,{format:Pr,type:Wa})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(H,null,b,g,w,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(H,null,b,y,w,null)}function O(z,H,b,N){let Q=null;const B=b.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(B!==void 0)Q=B;else if(Q=b.isPointLight===!0?m:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const K=Q.uuid,st=H.uuid;let nt=p[K];nt===void 0&&(nt={},p[K]=nt);let j=nt[st];j===void 0&&(j=Q.clone(),nt[st]=j,H.addEventListener("dispose",F)),Q=j}if(Q.visible=H.visible,Q.wireframe=H.wireframe,N===Go?Q.side=H.shadowSide!==null?H.shadowSide:H.side:Q.side=H.shadowSide!==null?H.shadowSide:x[H.side],Q.alphaMap=H.alphaMap,Q.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,Q.map=H.map,Q.clipShadows=H.clipShadows,Q.clippingPlanes=H.clippingPlanes,Q.clipIntersection=H.clipIntersection,Q.displacementMap=H.displacementMap,Q.displacementScale=H.displacementScale,Q.displacementBias=H.displacementBias,Q.wireframeLinewidth=H.wireframeLinewidth,Q.linewidth=H.linewidth,b.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const K=r.properties.get(Q);K.light=b}return Q}function U(z,H,b,N,Q){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&Q===Go)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,z.matrixWorld);const st=t.update(z),nt=z.material;if(Array.isArray(nt)){const j=st.groups;for(let L=0,D=j.length;L<D;L++){const q=j[L],tt=nt[q.materialIndex];if(tt&&tt.visible){const ut=O(z,tt,N,Q);z.onBeforeShadow(r,z,H,b,st,ut,q),r.renderBufferDirect(b,null,st,ut,z,q),z.onAfterShadow(r,z,H,b,st,ut,q)}}}else if(nt.visible){const j=O(z,nt,N,Q);z.onBeforeShadow(r,z,H,b,st,j,null),r.renderBufferDirect(b,null,st,j,z,null),z.onAfterShadow(r,z,H,b,st,j,null)}}const K=z.children;for(let st=0,nt=K.length;st<nt;st++)U(K[st],H,b,N,Q)}function F(z){z.target.removeEventListener("dispose",F);for(const b in p){const N=p[b],Q=z.target.uuid;Q in N&&(N[Q].dispose(),delete N[Q])}}}function YA(r,t){function i(){let W=!1;const Ct=new Rn;let At=null;const Ut=new Rn(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!W&&(r.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,ht,kt,ce,de){de===!0&&(Mt*=ce,ht*=ce,kt*=ce),Ct.set(Mt,ht,kt,ce),Ut.equals(Ct)===!1&&(r.clearColor(Mt,ht,kt,ce),Ut.copy(Ct))},reset:function(){W=!1,At=null,Ut.set(-1,0,0,0)}}}function s(){let W=!1,Ct=!1,At=null,Ut=null,Mt=null;return{setReversed:function(ht){if(Ct!==ht){const kt=t.get("EXT_clip_control");ht?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ht;const ce=Mt;Mt=null,this.setClear(ce)}},getReversed:function(){return Ct},setTest:function(ht){ht?_t(r.DEPTH_TEST):yt(r.DEPTH_TEST)},setMask:function(ht){At!==ht&&!W&&(r.depthMask(ht),At=ht)},setFunc:function(ht){if(Ct&&(ht=EM[ht]),Ut!==ht){switch(ht){case nf:r.depthFunc(r.NEVER);break;case af:r.depthFunc(r.ALWAYS);break;case sf:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case rf:r.depthFunc(r.EQUAL);break;case of:r.depthFunc(r.GEQUAL);break;case lf:r.depthFunc(r.GREATER);break;case cf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ut=ht}},setLocked:function(ht){W=ht},setClear:function(ht){Mt!==ht&&(Mt=ht,Ct&&(ht=1-ht),r.clearDepth(ht))},reset:function(){W=!1,At=null,Ut=null,Mt=null,Ct=!1}}}function l(){let W=!1,Ct=null,At=null,Ut=null,Mt=null,ht=null,kt=null,ce=null,de=null;return{setTest:function(Re){W||(Re?_t(r.STENCIL_TEST):yt(r.STENCIL_TEST))},setMask:function(Re){Ct!==Re&&!W&&(r.stencilMask(Re),Ct=Re)},setFunc:function(Re,li,bi){(At!==Re||Ut!==li||Mt!==bi)&&(r.stencilFunc(Re,li,bi),At=Re,Ut=li,Mt=bi)},setOp:function(Re,li,bi){(ht!==Re||kt!==li||ce!==bi)&&(r.stencilOp(Re,li,bi),ht=Re,kt=li,ce=bi)},setLocked:function(Re){W=Re},setClear:function(Re){de!==Re&&(r.clearStencil(Re),de=Re)},reset:function(){W=!1,Ct=null,At=null,Ut=null,Mt=null,ht=null,kt=null,ce=null,de=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},g=new WeakMap,y=[],E=null,w=!1,M=null,S=null,C=null,O=null,U=null,F=null,z=null,H=new re(0,0,0),b=0,N=!1,Q=null,B=null,K=null,st=null,nt=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,D=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(q)[1]),L=D>=1):q.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),L=D>=2);let tt=null,ut={};const P=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),pt=new Rn().fromArray(P),Et=new Rn().fromArray(Y);function Pt(W,Ct,At,Ut){const Mt=new Uint8Array(4),ht=r.createTexture();r.bindTexture(W,ht),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<At;kt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ct,0,r.RGBA,1,1,Ut,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Ct+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return ht}const et={};et[r.TEXTURE_2D]=Pt(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=Pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),_t(r.DEPTH_TEST),h.setFunc(Or),me(!1),an(Zp),_t(r.CULL_FACE),ve(Xa);function _t(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function yt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Ft(W,Ct){return x[W]!==Ct?(r.bindFramebuffer(W,Ct),x[W]=Ct,W===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ct),W===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Gt(W,Ct){let At=y,Ut=!1;if(W){At=g.get(Ct),At===void 0&&(At=[],g.set(Ct,At));const Mt=W.textures;if(At.length!==Mt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,kt=Mt.length;ht<kt;ht++)At[ht]=r.COLOR_ATTACHMENT0+ht;At.length=Mt.length,Ut=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Ut=!0);Ut&&r.drawBuffers(At)}function ne(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const Ke={[tr]:r.FUNC_ADD,[xx]:r.FUNC_SUBTRACT,[Sx]:r.FUNC_REVERSE_SUBTRACT};Ke[yx]=r.MIN,Ke[Mx]=r.MAX;const Me={[Ex]:r.ZERO,[Tx]:r.ONE,[bx]:r.SRC_COLOR,[tf]:r.SRC_ALPHA,[Ux]:r.SRC_ALPHA_SATURATE,[wx]:r.DST_COLOR,[Rx]:r.DST_ALPHA,[Ax]:r.ONE_MINUS_SRC_COLOR,[ef]:r.ONE_MINUS_SRC_ALPHA,[Dx]:r.ONE_MINUS_DST_COLOR,[Cx]:r.ONE_MINUS_DST_ALPHA,[Nx]:r.CONSTANT_COLOR,[Lx]:r.ONE_MINUS_CONSTANT_COLOR,[Ox]:r.CONSTANT_ALPHA,[Ix]:r.ONE_MINUS_CONSTANT_ALPHA};function ve(W,Ct,At,Ut,Mt,ht,kt,ce,de,Re){if(W===Xa){w===!0&&(yt(r.BLEND),w=!1);return}if(w===!1&&(_t(r.BLEND),w=!0),W!==vx){if(W!==M||Re!==N){if((S!==tr||U!==tr)&&(r.blendEquation(r.FUNC_ADD),S=tr,U=tr),Re)switch(W){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kp:r.blendFunc(r.ONE,r.ONE);break;case Qp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",W);break}else switch(W){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Qp:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jp:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",W);break}C=null,O=null,F=null,z=null,H.set(0,0,0),b=0,M=W,N=Re}return}Mt=Mt||Ct,ht=ht||At,kt=kt||Ut,(Ct!==S||Mt!==U)&&(r.blendEquationSeparate(Ke[Ct],Ke[Mt]),S=Ct,U=Mt),(At!==C||Ut!==O||ht!==F||kt!==z)&&(r.blendFuncSeparate(Me[At],Me[Ut],Me[ht],Me[kt]),C=At,O=Ut,F=ht,z=kt),(ce.equals(H)===!1||de!==b)&&(r.blendColor(ce.r,ce.g,ce.b,de),H.copy(ce),b=de),M=W,N=!1}function pe(W,Ct){W.side===kn?yt(r.CULL_FACE):_t(r.CULL_FACE);let At=W.side===gi;Ct&&(At=!At),me(At),W.blending===Lr&&W.transparent===!1?ve(Xa):ve(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ut=W.stencilWrite;d.setTest(Ut),Ut&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),tn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):yt(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(W){Q!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),Q=W)}function an(W){W!==mx?(_t(r.CULL_FACE),W!==B&&(W===Zp?r.cullFace(r.BACK):W===gx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):yt(r.CULL_FACE),B=W}function V(W){W!==K&&(L&&r.lineWidth(W),K=W)}function tn(W,Ct,At){W?(_t(r.POLYGON_OFFSET_FILL),(st!==Ct||nt!==At)&&(st=Ct,nt=At,h.getReversed()&&(Ct=-Ct),r.polygonOffset(Ct,At))):yt(r.POLYGON_OFFSET_FILL)}function Ae(W){W?_t(r.SCISSOR_TEST):yt(r.SCISSOR_TEST)}function Xe(W){W===void 0&&(W=r.TEXTURE0+j-1),tt!==W&&(r.activeTexture(W),tt=W)}function Kt(W,Ct,At){At===void 0&&(tt===null?At=r.TEXTURE0+j-1:At=tt);let Ut=ut[At];Ut===void 0&&(Ut={type:void 0,texture:void 0},ut[At]=Ut),(Ut.type!==W||Ut.texture!==Ct)&&(tt!==At&&(r.activeTexture(At),tt=At),r.bindTexture(W,Ct||et[W]),Ut.type=W,Ut.texture=Ct)}function I(){const W=ut[tt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function mt(){try{r.texSubImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function St(){try{r.texSubImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function Xt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function Dt(){try{r.texStorage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function Jt(){try{r.texStorage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function ae(){try{r.texImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function bt(){try{r.texImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function Tt(W){pt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),pt.copy(W))}function zt(W){Et.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Et.copy(W))}function Ot(W,Ct){let At=p.get(Ct);At===void 0&&(At=new WeakMap,p.set(Ct,At));let Ut=At.get(W);Ut===void 0&&(Ut=r.getUniformBlockIndex(Ct,W.name),At.set(W,Ut))}function Ht(W,Ct){const Ut=p.get(Ct).get(W);m.get(Ct)!==Ut&&(r.uniformBlockBinding(Ct,Ut,W.__bindingPointIndex),m.set(Ct,Ut))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},tt=null,ut={},x={},g=new WeakMap,y=[],E=null,w=!1,M=null,S=null,C=null,O=null,U=null,F=null,z=null,H=new re(0,0,0),b=0,N=!1,Q=null,B=null,K=null,st=null,nt=null,pt.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:_t,disable:yt,bindFramebuffer:Ft,drawBuffers:Gt,useProgram:ne,setBlending:ve,setMaterial:pe,setFlipSided:me,setCullFace:an,setLineWidth:V,setPolygonOffset:tn,setScissorTest:Ae,activeTexture:Xe,bindTexture:Kt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:Z,texImage2D:ae,texImage3D:bt,updateUBOMapping:Ot,uniformBlockBinding:Ht,texStorage2D:Dt,texStorage3D:Jt,texSubImage2D:mt,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:Xt,scissor:Tt,viewport:zt,reset:ge}}function qA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new De,_=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,T){return y?new OffscreenCanvas(I,T):kf("canvas")}function w(I,T,Z){let mt=1;const St=Kt(I);if((St.width>Z||St.height>Z)&&(mt=Z/Math.max(St.width,St.height)),mt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const dt=Math.floor(mt*St.width),Xt=Math.floor(mt*St.height);x===void 0&&(x=E(dt,Xt));const Dt=T?E(dt,Xt):x;return Dt.width=dt,Dt.height=Xt,Dt.getContext("2d").drawImage(I,0,0,dt,Xt),he("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+dt+"x"+Xt+")."),Dt}else return"data"in I&&he("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),I;return I}function M(I){return I.generateMipmaps}function S(I){r.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(I,T,Z,mt,St=!1){if(I!==null){if(r[I]!==void 0)return r[I];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let dt=T;if(T===r.RED&&(Z===r.FLOAT&&(dt=r.R32F),Z===r.HALF_FLOAT&&(dt=r.R16F),Z===r.UNSIGNED_BYTE&&(dt=r.R8)),T===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(dt=r.R8UI),Z===r.UNSIGNED_SHORT&&(dt=r.R16UI),Z===r.UNSIGNED_INT&&(dt=r.R32UI),Z===r.BYTE&&(dt=r.R8I),Z===r.SHORT&&(dt=r.R16I),Z===r.INT&&(dt=r.R32I)),T===r.RG&&(Z===r.FLOAT&&(dt=r.RG32F),Z===r.HALF_FLOAT&&(dt=r.RG16F),Z===r.UNSIGNED_BYTE&&(dt=r.RG8)),T===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(dt=r.RG8UI),Z===r.UNSIGNED_SHORT&&(dt=r.RG16UI),Z===r.UNSIGNED_INT&&(dt=r.RG32UI),Z===r.BYTE&&(dt=r.RG8I),Z===r.SHORT&&(dt=r.RG16I),Z===r.INT&&(dt=r.RG32I)),T===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),Z===r.UNSIGNED_INT&&(dt=r.RGB32UI),Z===r.BYTE&&(dt=r.RGB8I),Z===r.SHORT&&(dt=r.RGB16I),Z===r.INT&&(dt=r.RGB32I)),T===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),Z===r.UNSIGNED_INT&&(dt=r.RGBA32UI),Z===r.BYTE&&(dt=r.RGBA8I),Z===r.SHORT&&(dt=r.RGBA16I),Z===r.INT&&(dt=r.RGBA32I)),T===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),T===r.RGBA){const Xt=St?hc:ke.getTransfer(mt);Z===r.FLOAT&&(dt=r.RGBA32F),Z===r.HALF_FLOAT&&(dt=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(dt=Xt===$e?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function U(I,T){let Z;return I?T===null||T===Da||T===jo?Z=r.DEPTH24_STENCIL8:T===ca?Z=r.DEPTH32F_STENCIL8:T===qo&&(Z=r.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Da||T===jo?Z=r.DEPTH_COMPONENT24:T===ca?Z=r.DEPTH_COMPONENT32F:T===qo&&(Z=r.DEPTH_COMPONENT16),Z}function F(I,T){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==Jn&&I.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function z(I){const T=I.target;T.removeEventListener("dispose",z),b(T),T.isVideoTexture&&_.delete(T)}function H(I){const T=I.target;T.removeEventListener("dispose",H),Q(T)}function b(I){const T=s.get(I);if(T.__webglInit===void 0)return;const Z=I.source,mt=g.get(Z);if(mt){const St=mt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&N(I),Object.keys(mt).length===0&&g.delete(Z)}s.remove(I)}function N(I){const T=s.get(I);r.deleteTexture(T.__webglTexture);const Z=I.source,mt=g.get(Z);delete mt[T.__cacheKey],h.memory.textures--}function Q(I){const T=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let St=0;St<T.__webglFramebuffer[mt].length;St++)r.deleteFramebuffer(T.__webglFramebuffer[mt][St]);else r.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[mt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=I.textures;for(let mt=0,St=Z.length;mt<St;mt++){const dt=s.get(Z[mt]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(Z[mt])}s.remove(I)}let B=0;function K(){B=0}function st(){const I=B;return I>=l.maxTextures&&he("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),B+=1,I}function nt(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function j(I,T){const Z=s.get(I);if(I.isVideoTexture&&Ae(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const mt=I.image;if(mt===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{et(Z,I,T);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+T)}function L(I,T){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){et(Z,I,T);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+T)}function D(I,T){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){et(Z,I,T);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+T)}function q(I,T){const Z=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){_t(Z,I,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+T)}const tt={[Yo]:r.REPEAT,[ka]:r.CLAMP_TO_EDGE,[uf]:r.MIRRORED_REPEAT},ut={[Jn]:r.NEAREST,[Bx]:r.NEAREST_MIPMAP_NEAREST,[ic]:r.NEAREST_MIPMAP_LINEAR,[$n]:r.LINEAR,[Ku]:r.LINEAR_MIPMAP_NEAREST,[Ss]:r.LINEAR_MIPMAP_LINEAR},P={[Gx]:r.NEVER,[Yx]:r.ALWAYS,[Vx]:r.LESS,[nh]:r.LEQUAL,[kx]:r.EQUAL,[ih]:r.GEQUAL,[Xx]:r.GREATER,[Wx]:r.NOTEQUAL};function Y(I,T){if(T.type===ca&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===$n||T.magFilter===Ku||T.magFilter===ic||T.magFilter===Ss||T.minFilter===$n||T.minFilter===Ku||T.minFilter===ic||T.minFilter===Ss)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,tt[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,tt[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,tt[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ut[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ut[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Jn||T.minFilter!==ic&&T.minFilter!==Ss||T.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function pt(I,T){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",z));const mt=T.source;let St=g.get(mt);St===void 0&&(St={},g.set(mt,St));const dt=nt(T);if(dt!==I.__cacheKey){St[dt]===void 0&&(St[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),St[dt].usedTimes++;const Xt=St[I.__cacheKey];Xt!==void 0&&(St[I.__cacheKey].usedTimes--,Xt.usedTimes===0&&N(T)),I.__cacheKey=dt,I.__webglTexture=St[dt].texture}return Z}function Et(I,T,Z){return Math.floor(Math.floor(I/Z)/T)}function Pt(I,T,Z,mt){const dt=I.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Z,mt,T.data);else{dt.sort((bt,Tt)=>bt.start-Tt.start);let Xt=0;for(let bt=1;bt<dt.length;bt++){const Tt=dt[Xt],zt=dt[bt],Ot=Tt.start+Tt.count,Ht=Et(zt.start,T.width,4),ge=Et(Tt.start,T.width,4);zt.start<=Ot+1&&Ht===ge&&Et(zt.start+zt.count-1,T.width,4)===Ht?Tt.count=Math.max(Tt.count,zt.start+zt.count-Tt.start):(++Xt,dt[Xt]=zt)}dt.length=Xt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Jt=r.getParameter(r.UNPACK_SKIP_PIXELS),ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let bt=0,Tt=dt.length;bt<Tt;bt++){const zt=dt[bt],Ot=Math.floor(zt.start/4),Ht=Math.ceil(zt.count/4),ge=Ot%T.width,W=Math.floor(Ot/T.width),Ct=Ht,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ge,W,Ct,At,Z,mt,T.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function et(I,T,Z){let mt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=r.TEXTURE_3D);const St=pt(I,T),dt=T.source;i.bindTexture(mt,I.__webglTexture,r.TEXTURE0+Z);const Xt=s.get(dt);if(dt.version!==Xt.__version||St===!0){i.activeTexture(r.TEXTURE0+Z);const Dt=ke.getPrimaries(ke.workingColorSpace),Jt=T.colorSpace===vs?null:ke.getPrimaries(T.colorSpace),ae=T.colorSpace===vs||Dt===Jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let bt=w(T.image,!1,l.maxTextureSize);bt=Xe(T,bt);const Tt=c.convert(T.format,T.colorSpace),zt=c.convert(T.type);let Ot=O(T.internalFormat,Tt,zt,T.colorSpace,T.isVideoTexture);Y(mt,T);let Ht;const ge=T.mipmaps,W=T.isVideoTexture!==!0,Ct=Xt.__version===void 0||St===!0,At=dt.dataReady,Ut=F(T,bt);if(T.isDepthTexture)Ot=U(T.format===er,T.type),Ct&&(W?i.texStorage2D(r.TEXTURE_2D,1,Ot,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,Ot,bt.width,bt.height,0,Tt,zt,null));else if(T.isDataTexture)if(ge.length>0){W&&Ct&&i.texStorage2D(r.TEXTURE_2D,Ut,Ot,ge[0].width,ge[0].height);for(let Mt=0,ht=ge.length;Mt<ht;Mt++)Ht=ge[Mt],W?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ht.width,Ht.height,Tt,zt,Ht.data):i.texImage2D(r.TEXTURE_2D,Mt,Ot,Ht.width,Ht.height,0,Tt,zt,Ht.data);T.generateMipmaps=!1}else W?(Ct&&i.texStorage2D(r.TEXTURE_2D,Ut,Ot,bt.width,bt.height),At&&Pt(T,bt,Tt,zt)):i.texImage2D(r.TEXTURE_2D,0,Ot,bt.width,bt.height,0,Tt,zt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Ot,ge[0].width,ge[0].height,bt.depth);for(let Mt=0,ht=ge.length;Mt<ht;Mt++)if(Ht=ge[Mt],T.format!==ua)if(Tt!==null)if(W){if(At)if(T.layerUpdates.size>0){const kt=Gv(Ht.width,Ht.height,T.format,T.type);for(const ce of T.layerUpdates){const de=Ht.data.subarray(ce*kt/Ht.data.BYTES_PER_ELEMENT,(ce+1)*kt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ce,Ht.width,Ht.height,1,Tt,de)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ht.width,Ht.height,bt.depth,Tt,Ht.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Ot,Ht.width,Ht.height,bt.depth,0,Ht.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ht.width,Ht.height,bt.depth,Tt,zt,Ht.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Ot,Ht.width,Ht.height,bt.depth,0,Tt,zt,Ht.data)}else{W&&Ct&&i.texStorage2D(r.TEXTURE_2D,Ut,Ot,ge[0].width,ge[0].height);for(let Mt=0,ht=ge.length;Mt<ht;Mt++)Ht=ge[Mt],T.format!==ua?Tt!==null?W?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ht.width,Ht.height,Tt,Ht.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Ot,Ht.width,Ht.height,0,Ht.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ht.width,Ht.height,Tt,zt,Ht.data):i.texImage2D(r.TEXTURE_2D,Mt,Ot,Ht.width,Ht.height,0,Tt,zt,Ht.data)}else if(T.isDataArrayTexture)if(W){if(Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Ot,bt.width,bt.height,bt.depth),At)if(T.layerUpdates.size>0){const Mt=Gv(bt.width,bt.height,T.format,T.type);for(const ht of T.layerUpdates){const kt=bt.data.subarray(ht*Mt/bt.data.BYTES_PER_ELEMENT,(ht+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,bt.width,bt.height,1,Tt,zt,kt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Tt,zt,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,bt.width,bt.height,bt.depth,0,Tt,zt,bt.data);else if(T.isData3DTexture)W?(Ct&&i.texStorage3D(r.TEXTURE_3D,Ut,Ot,bt.width,bt.height,bt.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Tt,zt,bt.data)):i.texImage3D(r.TEXTURE_3D,0,Ot,bt.width,bt.height,bt.depth,0,Tt,zt,bt.data);else if(T.isFramebufferTexture){if(Ct)if(W)i.texStorage2D(r.TEXTURE_2D,Ut,Ot,bt.width,bt.height);else{let Mt=bt.width,ht=bt.height;for(let kt=0;kt<Ut;kt++)i.texImage2D(r.TEXTURE_2D,kt,Ot,Mt,ht,0,Tt,zt,null),Mt>>=1,ht>>=1}}else if(ge.length>0){if(W&&Ct){const Mt=Kt(ge[0]);i.texStorage2D(r.TEXTURE_2D,Ut,Ot,Mt.width,Mt.height)}for(let Mt=0,ht=ge.length;Mt<ht;Mt++)Ht=ge[Mt],W?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Tt,zt,Ht):i.texImage2D(r.TEXTURE_2D,Mt,Ot,Tt,zt,Ht);T.generateMipmaps=!1}else if(W){if(Ct){const Mt=Kt(bt);i.texStorage2D(r.TEXTURE_2D,Ut,Ot,Mt.width,Mt.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,zt,bt)}else i.texImage2D(r.TEXTURE_2D,0,Ot,Tt,zt,bt);M(T)&&S(mt),Xt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function _t(I,T,Z){if(T.image.length!==6)return;const mt=pt(I,T),St=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Z);const dt=s.get(St);if(St.version!==dt.__version||mt===!0){i.activeTexture(r.TEXTURE0+Z);const Xt=ke.getPrimaries(ke.workingColorSpace),Dt=T.colorSpace===vs?null:ke.getPrimaries(T.colorSpace),Jt=T.colorSpace===vs||Xt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const ae=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let ht=0;ht<6;ht++)!ae&&!bt?Tt[ht]=w(T.image[ht],!0,l.maxCubemapSize):Tt[ht]=bt?T.image[ht].image:T.image[ht],Tt[ht]=Xe(T,Tt[ht]);const zt=Tt[0],Ot=c.convert(T.format,T.colorSpace),Ht=c.convert(T.type),ge=O(T.internalFormat,Ot,Ht,T.colorSpace),W=T.isVideoTexture!==!0,Ct=dt.__version===void 0||mt===!0,At=St.dataReady;let Ut=F(T,zt);Y(r.TEXTURE_CUBE_MAP,T);let Mt;if(ae){W&&Ct&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ge,zt.width,zt.height);for(let ht=0;ht<6;ht++){Mt=Tt[ht].mipmaps;for(let kt=0;kt<Mt.length;kt++){const ce=Mt[kt];T.format!==ua?Ot!==null?W?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,0,0,ce.width,ce.height,Ot,ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,ge,ce.width,ce.height,0,ce.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,0,0,ce.width,ce.height,Ot,Ht,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,ge,ce.width,ce.height,0,Ot,Ht,ce.data)}}}else{if(Mt=T.mipmaps,W&&Ct){Mt.length>0&&Ut++;const ht=Kt(Tt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ge,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(bt){W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Tt[ht].width,Tt[ht].height,Ot,Ht,Tt[ht].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ge,Tt[ht].width,Tt[ht].height,0,Ot,Ht,Tt[ht].data);for(let kt=0;kt<Mt.length;kt++){const de=Mt[kt].image[ht].image;W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,0,0,de.width,de.height,Ot,Ht,de.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,ge,de.width,de.height,0,Ot,Ht,de.data)}}else{W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot,Ht,Tt[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ge,Ot,Ht,Tt[ht]);for(let kt=0;kt<Mt.length;kt++){const ce=Mt[kt];W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,0,0,Ot,Ht,ce.image[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,ge,Ot,Ht,ce.image[ht])}}}M(T)&&S(r.TEXTURE_CUBE_MAP),dt.__version=St.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function yt(I,T,Z,mt,St,dt){const Xt=c.convert(Z.format,Z.colorSpace),Dt=c.convert(Z.type),Jt=O(Z.internalFormat,Xt,Dt,Z.colorSpace),ae=s.get(T),bt=s.get(Z);if(bt.__renderTarget=T,!ae.__hasExternalTextures){const Tt=Math.max(1,T.width>>dt),zt=Math.max(1,T.height>>dt);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,dt,Jt,Tt,zt,T.depth,0,Xt,Dt,null):i.texImage2D(St,dt,Jt,Tt,zt,0,Xt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),tn(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,St,bt.__webglTexture,0,V(T)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,St,bt.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(I,T,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){const mt=T.depthTexture,St=mt&&mt.isDepthTexture?mt.type:null,dt=U(T.stencilBuffer,St),Xt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;tn(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(T),dt,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(T),dt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,dt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xt,r.RENDERBUFFER,I)}else{const mt=T.textures;for(let St=0;St<mt.length;St++){const dt=mt[St],Xt=c.convert(dt.format,dt.colorSpace),Dt=c.convert(dt.type),Jt=O(dt.internalFormat,Xt,Dt,dt.colorSpace);tn(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(T),Jt,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(T),Jt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Jt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(I,T,Z){const mt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(T.depthTexture);if(St.__renderTarget=T,(!St.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt){if(St.__webglInit===void 0&&(St.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),Y(r.TEXTURE_CUBE_MAP,T.depthTexture);const ae=c.convert(T.depthTexture.format),bt=c.convert(T.depthTexture.type);let Tt;T.depthTexture.format===Ya?Tt=r.DEPTH_COMPONENT24:T.depthTexture.format===er&&(Tt=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Tt,T.width,T.height,0,ae,bt,null)}}else j(T.depthTexture,0);const dt=St.__webglTexture,Xt=V(T),Dt=mt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,Jt=T.depthTexture.format===er?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ya)tn(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Dt,dt,0,Xt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Dt,dt,0);else if(T.depthTexture.format===er)tn(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Dt,dt,0,Xt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Dt,dt,0);else throw new Error("Unknown depthTexture format")}function ne(I){const T=s.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const mt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",St)};mt.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=mt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let mt=0;mt<6;mt++)Gt(T.__webglFramebuffer[mt],I,mt);else{const mt=I.texture.mipmaps;mt&&mt.length>0?Gt(T.__webglFramebuffer[0],I,0):Gt(T.__webglFramebuffer,I,0)}else if(Z){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=r.createRenderbuffer(),Ft(T.__webglDepthbuffer[mt],I,!1);else{const St=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,dt)}}else{const mt=I.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ft(T.__webglDepthbuffer,I,!1);else{const St=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(I,T,Z){const mt=s.get(I);T!==void 0&&yt(mt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&ne(I)}function Me(I){const T=I.texture,Z=s.get(I),mt=s.get(T);I.addEventListener("dispose",H);const St=I.textures,dt=I.isWebGLCubeRenderTarget===!0,Xt=St.length>1;if(Xt||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=T.version,h.memory.textures++),dt){Z.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Dt]=[];for(let Jt=0;Jt<T.mipmaps.length;Jt++)Z.__webglFramebuffer[Dt][Jt]=r.createFramebuffer()}else Z.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)Z.__webglFramebuffer[Dt]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Xt)for(let Dt=0,Jt=St.length;Dt<Jt;Dt++){const ae=s.get(St[Dt]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),h.memory.textures++)}if(I.samples>0&&tn(I)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Dt=0;Dt<St.length;Dt++){const Jt=St[Dt];Z.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Dt]);const ae=c.convert(Jt.format,Jt.colorSpace),bt=c.convert(Jt.type),Tt=O(Jt.internalFormat,ae,bt,Jt.colorSpace,I.isXRRenderTarget===!0),zt=V(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Tt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(Z.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),Y(r.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)yt(Z.__webglFramebuffer[Dt][Jt],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Jt);else yt(Z.__webglFramebuffer[Dt],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(T)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Dt=0,Jt=St.length;Dt<Jt;Dt++){const ae=St[Dt],bt=s.get(ae);let Tt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,bt.__webglTexture),Y(Tt,ae),yt(Z.__webglFramebuffer,I,ae,r.COLOR_ATTACHMENT0+Dt,Tt,0),M(ae)&&S(Tt)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Dt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,mt.__webglTexture),Y(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)yt(Z.__webglFramebuffer[Jt],I,T,r.COLOR_ATTACHMENT0,Dt,Jt);else yt(Z.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,Dt,0);M(T)&&S(Dt),i.unbindTexture()}I.depthBuffer&&ne(I)}function ve(I){const T=I.textures;for(let Z=0,mt=T.length;Z<mt;Z++){const St=T[Z];if(M(St)){const dt=C(I),Xt=s.get(St).__webglTexture;i.bindTexture(dt,Xt),S(dt),i.unbindTexture()}}}const pe=[],me=[];function an(I){if(I.samples>0){if(tn(I)===!1){const T=I.textures,Z=I.width,mt=I.height;let St=r.COLOR_BUFFER_BIT;const dt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xt=s.get(I),Dt=T.length>1;if(Dt)for(let ae=0;ae<T.length;ae++)i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Jt=I.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let ae=0;ae<T.length;ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[ae]);const bt=s.get(T[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,Z,mt,0,0,Z,mt,St,r.NEAREST),m===!0&&(pe.length=0,me.length=0,pe.push(r.COLOR_ATTACHMENT0+ae),I.depthBuffer&&I.resolveDepthBuffer===!1&&(pe.push(dt),me.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let ae=0;ae<T.length;ae++){i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[ae]);const bt=s.get(T[ae]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function V(I){return Math.min(l.maxSamples,I.samples)}function tn(I){const T=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ae(I){const T=h.render.frame;_.get(I)!==T&&(_.set(I,T),I.update())}function Xe(I,T){const Z=I.colorSpace,mt=I.format,St=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Fr&&Z!==vs&&(ke.getTransfer(Z)===$e?(mt!==ua||St!==Li)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",Z)),T}function Kt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=L,this.setTexture3D=D,this.setTextureCube=q,this.rebindTextures=Ke,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function SS(r,t){function i(s,l=vs){let c;const h=ke.getTransfer(l);if(s===Li)return r.UNSIGNED_BYTE;if(s===Zf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===xm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Sm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===_m)return r.BYTE;if(s===vm)return r.SHORT;if(s===qo)return r.UNSIGNED_SHORT;if(s===jf)return r.INT;if(s===Da)return r.UNSIGNED_INT;if(s===ca)return r.FLOAT;if(s===Wa)return r.HALF_FLOAT;if(s===ym)return r.ALPHA;if(s===Mm)return r.RGB;if(s===ua)return r.RGBA;if(s===Ya)return r.DEPTH_COMPONENT;if(s===er)return r.DEPTH_STENCIL;if(s===Qf)return r.RED;if(s===Jf)return r.RED_INTEGER;if(s===Pr)return r.RG;if(s===$f)return r.RG_INTEGER;if(s===th)return r.RGBA_INTEGER;if(s===sc||s===rc||s===oc||s===lc)if(h===$e)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===sc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===sc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ff||s===hf||s===df||s===pf)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ff)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===df)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mf||s===gf||s===_f||s===vf||s===xf||s===Sf||s===yf)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===mf||s===gf)return h===$e?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===_f)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===vf)return c.COMPRESSED_R11_EAC;if(s===xf)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Sf)return c.COMPRESSED_RG11_EAC;if(s===yf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Mf||s===Ef||s===Tf||s===bf||s===Af||s===Rf||s===Cf||s===wf||s===Df||s===Uf||s===Nf||s===Lf||s===Of||s===If)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Mf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ef)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Af)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Df)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lf)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Of)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===If)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pf||s===Ff||s===Bf)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Pf)return h===$e?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ff)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zf||s===Hf||s===Gf||s===Vf)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===zf)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Hf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
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

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Um(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ua({vertexShader:jA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ge(new Va(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends Br{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,g=null,y=null,E=null;const w=typeof XRWebGLBinding<"u",M=new KA,S={},C=i.getContextAttributes();let O=null,U=null;const F=[],z=[],H=new De;let b=null;const N=new Ti;N.viewport=new Rn;const Q=new Ti;Q.viewport=new Rn;const B=[N,Q],K=new hS;let st=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let _t=F[et];return _t===void 0&&(_t=new Qu,F[et]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(et){let _t=F[et];return _t===void 0&&(_t=new Qu,F[et]=_t),_t.getGripSpace()},this.getHand=function(et){let _t=F[et];return _t===void 0&&(_t=new Qu,F[et]=_t),_t.getHandSpace()};function j(et){const _t=z.indexOf(et.inputSource);if(_t===-1)return;const yt=F[_t];yt!==void 0&&(yt.update(et.inputSource,et.frame,p||h),yt.dispatchEvent({type:et.type,data:et.inputSource}))}function L(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",D);for(let et=0;et<F.length;et++){const _t=z[et];_t!==null&&(z[et]=null,F[et].disconnect(_t))}st=null,nt=null,M.reset();for(const et in S)delete S[et];t.setRenderTarget(O),y=null,g=null,x=null,l=null,U=null,Pt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",L),l.addEventListener("inputsourceschange",D),C.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(H),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ft=null,Gt=null;C.depth&&(Gt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=C.stencil?er:Ya,Ft=C.stencil?jo:Da);const ne={colorFormat:i.RGBA8,depthFormat:Gt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(ne),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new wa(g.textureWidth,g.textureHeight,{format:ua,type:Li,depthTexture:new Qo(g.textureWidth,g.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const yt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new wa(y.framebufferWidth,y.framebufferHeight,{format:ua,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Pt.setContext(l),Pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function D(et){for(let _t=0;_t<et.removed.length;_t++){const yt=et.removed[_t],Ft=z.indexOf(yt);Ft>=0&&(z[Ft]=null,F[Ft].disconnect(yt))}for(let _t=0;_t<et.added.length;_t++){const yt=et.added[_t];let Ft=z.indexOf(yt);if(Ft===-1){for(let ne=0;ne<F.length;ne++)if(ne>=z.length){z.push(yt),Ft=ne;break}else if(z[ne]===null){z[ne]=yt,Ft=ne;break}if(Ft===-1)break}const Gt=F[Ft];Gt&&Gt.connect(yt)}}const q=new $,tt=new $;function ut(et,_t,yt){q.setFromMatrixPosition(_t.matrixWorld),tt.setFromMatrixPosition(yt.matrixWorld);const Ft=q.distanceTo(tt),Gt=_t.projectionMatrix.elements,ne=yt.projectionMatrix.elements,Ke=Gt[14]/(Gt[10]-1),Me=Gt[14]/(Gt[10]+1),ve=(Gt[9]+1)/Gt[5],pe=(Gt[9]-1)/Gt[5],me=(Gt[8]-1)/Gt[0],an=(ne[8]+1)/ne[0],V=Ke*me,tn=Ke*an,Ae=Ft/(-me+an),Xe=Ae*-me;if(_t.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Xe),et.translateZ(Ae),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Gt[10]===-1)et.projectionMatrix.copy(_t.projectionMatrix),et.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Kt=Ke+Ae,I=Me+Ae,T=V-Xe,Z=tn+(Ft-Xe),mt=ve*Me/I*Kt,St=pe*Me/I*Kt;et.projectionMatrix.makePerspective(T,Z,mt,St,Kt,I),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function P(et,_t){_t===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(_t.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let _t=et.near,yt=et.far;M.texture!==null&&(M.depthNear>0&&(_t=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),K.near=Q.near=N.near=_t,K.far=Q.far=N.far=yt,(st!==K.near||nt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),st=K.near,nt=K.far),K.layers.mask=et.layers.mask|6,N.layers.mask=K.layers.mask&-5,Q.layers.mask=K.layers.mask&-3;const Ft=et.parent,Gt=K.cameras;P(K,Ft);for(let ne=0;ne<Gt.length;ne++)P(Gt[ne],Ft);Gt.length===2?ut(K,N,Q):K.projectionMatrix.copy(N.projectionMatrix),Y(et,K,Ft)};function Y(et,_t,yt){yt===null?et.matrix.copy(_t.matrixWorld):(et.matrix.copy(yt.matrixWorld),et.matrix.invert(),et.matrix.multiply(_t.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(_t.projectionMatrix),et.projectionMatrixInverse.copy(_t.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ko*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(et){m=et,g!==null&&(g.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(et){return S[et]};let pt=null;function Et(et,_t){if(_=_t.getViewerPose(p||h),E=_t,_!==null){const yt=_.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Ft=!1;yt.length!==K.cameras.length&&(K.cameras.length=0,Ft=!0);for(let Me=0;Me<yt.length;Me++){const ve=yt[Me];let pe=null;if(y!==null)pe=y.getViewport(ve);else{const an=x.getViewSubImage(g,ve);pe=an.viewport,Me===0&&(t.setRenderTargetTextures(U,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(U))}let me=B[Me];me===void 0&&(me=new Ti,me.layers.enable(Me),me.viewport=new Rn,B[Me]=me),me.matrix.fromArray(ve.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ve.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(pe.x,pe.y,pe.width,pe.height),Me===0&&(K.matrix.copy(me.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ft===!0&&K.cameras.push(me)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const Me=x.getDepthInformation(yt[0]);Me&&Me.isValid&&Me.texture&&M.init(Me,l.renderState)}if(Gt&&Gt.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let Me=0;Me<yt.length;Me++){const ve=yt[Me].camera;if(ve){let pe=S[ve];pe||(pe=new Um,S[ve]=pe);const me=x.getCameraImage(ve);pe.sourceTexture=me}}}}for(let yt=0;yt<F.length;yt++){const Ft=z[yt],Gt=F[yt];Ft!==null&&Gt!==void 0&&Gt.update(Ft,_t,p||h)}pt&&pt(et,_t),_t.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:_t}),E=null}const Pt=new mS;Pt.setAnimationLoop(Et),this.setAnimationLoop=function(et){pt=et},this.dispose=function(){}}}const Cr=new ha,JA=new un;function $A(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,iS(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,O,U){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,U)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,C,O):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===gi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===gi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),O=C.envMap,U=C.envMapRotation;O&&(M.envMap.value=O,Cr.copy(U),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),M.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(Cr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,O){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=O*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===gi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function t2(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const U=O.program;s.uniformBlockBinding(C,U)}function p(C,O){let U=l[C.id];U===void 0&&(E(C),U=_(C),l[C.id]=U,C.addEventListener("dispose",M));const F=O.program;s.updateUBOMapping(C,F);const z=t.render.frame;c[C.id]!==z&&(g(C),c[C.id]=z)}function _(C){const O=x();C.__bindingPointIndex=O;const U=r.createBuffer(),F=C.__size,z=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,U),U}function x(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const O=l[C.id],U=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let z=0,H=U.length;z<H;z++){const b=Array.isArray(U[z])?U[z]:[U[z]];for(let N=0,Q=b.length;N<Q;N++){const B=b[N];if(y(B,z,N,F)===!0){const K=B.__offset,st=Array.isArray(B.value)?B.value:[B.value];let nt=0;for(let j=0;j<st.length;j++){const L=st[j],D=w(L);typeof L=="number"||typeof L=="boolean"?(B.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,K+nt,B.__data)):L.isMatrix3?(B.__data[0]=L.elements[0],B.__data[1]=L.elements[1],B.__data[2]=L.elements[2],B.__data[3]=0,B.__data[4]=L.elements[3],B.__data[5]=L.elements[4],B.__data[6]=L.elements[5],B.__data[7]=0,B.__data[8]=L.elements[6],B.__data[9]=L.elements[7],B.__data[10]=L.elements[8],B.__data[11]=0):(L.toArray(B.__data,nt),nt+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,O,U,F){const z=C.value,H=O+"_"+U;if(F[H]===void 0)return typeof z=="number"||typeof z=="boolean"?F[H]=z:F[H]=z.clone(),!0;{const b=F[H];if(typeof z=="number"||typeof z=="boolean"){if(b!==z)return F[H]=z,!0}else if(b.equals(z)===!1)return b.copy(z),!0}return!1}function E(C){const O=C.uniforms;let U=0;const F=16;for(let H=0,b=O.length;H<b;H++){const N=Array.isArray(O[H])?O[H]:[O[H]];for(let Q=0,B=N.length;Q<B;Q++){const K=N[Q],st=Array.isArray(K.value)?K.value:[K.value];for(let nt=0,j=st.length;nt<j;nt++){const L=st[nt],D=w(L),q=U%F,tt=q%D.boundary,ut=q+tt;U+=tt,ut!==0&&F-ut<D.storage&&(U+=F-ut),K.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=D.storage}}}const z=U%F;return z>0&&(U+=F-z),C.__size=U,C.__cache={},this}function w(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",C),O}function M(C){const O=C.target;O.removeEventListener("dispose",M);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const e2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ga=null;function n2(){return Ga===null&&(Ga=new wm(e2,16,16,Pr,Wa),Ga.name="DFG_LUT",Ga.minFilter=$n,Ga.magFilter=$n,Ga.wrapS=ka,Ga.wrapT=ka,Ga.generateMipmaps=!1,Ga.needsUpdate=!0),Ga}class yS{constructor(t={}){const{canvas:i=qx(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Li}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const w=y,M=new Set([th,$f,Jf]),S=new Set([Li,Da,qo,jo,Zf,Kf]),C=new Uint32Array(4),O=new Int32Array(4);let U=null,F=null;const z=[],H=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let Q=!1;this._outputColorSpace=qn;let B=0,K=0,st=null,nt=-1,j=null;const L=new Rn,D=new Rn;let q=null;const tt=new re(0);let ut=0,P=i.width,Y=i.height,pt=1,Et=null,Pt=null;const et=new Rn(0,0,P,Y),_t=new Rn(0,0,P,Y);let yt=!1;const Ft=new rh;let Gt=!1,ne=!1;const Ke=new un,Me=new $,ve=new Rn,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function an(){return st===null?pt:1}let V=s;function tn(A,k){return i.getContext(A,k)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wf}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",de,!1),V===null){const k="webgl2";if(V=tn(k,A),V===null)throw tn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ve("WebGLRenderer: "+A.message),A}let Ae,Xe,Kt,I,T,Z,mt,St,dt,Xt,Dt,Jt,ae,bt,Tt,zt,Ot,Ht,ge,W,Ct,At,Ut;function Mt(){Ae=new a1(V),Ae.init(),Ct=new SS(V,Ae),Xe=new Kb(V,Ae,t,Ct),Kt=new YA(V,Ae),Xe.reversedDepthBuffer&&g&&Kt.buffers.depth.setReversed(!0),I=new o1(V),T=new NA,Z=new qA(V,Ae,Kt,T,Xe,Ct,I),mt=new i1(N),St=new hE(V),At=new jb(V,St),dt=new s1(V,St,I,At),Xt=new c1(V,dt,St,At,I),Ht=new l1(V,Xe,Z),Tt=new Qb(T),Dt=new UA(N,mt,Ae,Xe,At,Tt),Jt=new $A(N,T),ae=new OA,bt=new HA(Ae),Ot=new qb(N,mt,Kt,Xt,E,m),zt=new WA(N,Xt,Xe),Ut=new t2(V,I,Xe,Kt),ge=new Zb(V,Ae,I),W=new r1(V,Ae,I),I.programs=Dt.programs,N.capabilities=Xe,N.extensions=Ae,N.properties=T,N.renderLists=ae,N.shadowMap=zt,N.state=Kt,N.info=I}Mt(),w!==Li&&(b=new f1(w,i.width,i.height,l,c));const ht=new QA(N,V);this.xr=ht,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(A){A!==void 0&&(pt=A,this.setSize(P,Y,!1))},this.getSize=function(A){return A.set(P,Y)},this.setSize=function(A,k,ct=!0){if(ht.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Y=k,i.width=Math.floor(A*pt),i.height=Math.floor(k*pt),ct===!0&&(i.style.width=A+"px",i.style.height=k+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(P*pt,Y*pt).floor()},this.setDrawingBufferSize=function(A,k,ct){P=A,Y=k,pt=ct,i.width=Math.floor(A*ct),i.height=Math.floor(k*ct),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(w===Li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,k,ct,it){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,k,ct,it),Kt.viewport(L.copy(et).multiplyScalar(pt).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,k,ct,it){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,k,ct,it),Kt.scissor(D.copy(_t).multiplyScalar(pt).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Kt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){Et=A},this.setTransparentSort=function(A){Pt=A},this.getClearColor=function(A){return A.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,ct=!0){let it=0;if(A){let at=!1;if(st!==null){const Nt=st.texture.format;at=M.has(Nt)}if(at){const Nt=st.texture.type,Vt=S.has(Nt),Lt=Ot.getClearColor(),jt=Ot.getClearAlpha(),$t=Lt.r,se=Lt.g,oe=Lt.b;Vt?(C[0]=$t,C[1]=se,C[2]=oe,C[3]=jt,V.clearBufferuiv(V.COLOR,0,C)):(O[0]=$t,O[1]=se,O[2]=oe,O[3]=jt,V.clearBufferiv(V.COLOR,0,O))}else it|=V.COLOR_BUFFER_BIT}k&&(it|=V.DEPTH_BUFFER_BIT),ct&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",de,!1),Ot.dispose(),ae.dispose(),bt.dispose(),T.dispose(),mt.dispose(),Xt.dispose(),At.dispose(),Ut.dispose(),Dt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Na),ht.removeEventListener("sessionend",qa),ei.stop()};function kt(A){A.preventDefault(),nm("WebGLRenderer: Context Lost."),Q=!0}function ce(){nm("WebGLRenderer: Context Restored."),Q=!1;const A=I.autoReset,k=zt.enabled,ct=zt.autoUpdate,it=zt.needsUpdate,at=zt.type;Mt(),I.autoReset=A,zt.enabled=k,zt.autoUpdate=ct,zt.needsUpdate=it,zt.type=at}function de(A){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){const k=A.target;k.removeEventListener("dispose",Re),li(k)}function li(A){bi(A),T.remove(A)}function bi(A){const k=T.get(A).programs;k!==void 0&&(k.forEach(function(ct){Dt.releaseProgram(ct)}),A.isShaderMaterial&&Dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,ct,it,at,Nt){k===null&&(k=pe);const Vt=at.isMesh&&at.matrixWorld.determinant()<0,Lt=kr(A,k,ct,it,at);Kt.setMaterial(it,Vt);let jt=ct.index,$t=1;if(it.wireframe===!0){if(jt=dt.getWireframeAttribute(ct),jt===void 0)return;$t=2}const se=ct.drawRange,oe=ct.attributes.position;let Wt=se.start*$t,xe=(se.start+se.count)*$t;Nt!==null&&(Wt=Math.max(Wt,Nt.start*$t),xe=Math.min(xe,(Nt.start+Nt.count)*$t)),jt!==null?(Wt=Math.max(Wt,0),xe=Math.min(xe,jt.count)):oe!=null&&(Wt=Math.max(Wt,0),xe=Math.min(xe,oe.count));const Qe=xe-Wt;if(Qe<0||Qe===1/0)return;At.setup(at,it,Lt,ct,jt);let fn,Ie=ge;if(jt!==null&&(fn=St.get(jt),Ie=W,Ie.setIndex(fn)),at.isMesh)it.wireframe===!0?(Kt.setLineWidth(it.wireframeLinewidth*an()),Ie.setMode(V.LINES)):Ie.setMode(V.TRIANGLES);else if(at.isLine){let yn=it.linewidth;yn===void 0&&(yn=1),Kt.setLineWidth(yn*an()),at.isLineSegments?Ie.setMode(V.LINES):at.isLineLoop?Ie.setMode(V.LINE_LOOP):Ie.setMode(V.LINE_STRIP)}else at.isPoints?Ie.setMode(V.POINTS):at.isSprite&&Ie.setMode(V.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)dc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Ie.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const yn=at._multiDrawStarts,Yt=at._multiDrawCounts,Cn=at._multiDrawCount,fe=jt?St.get(jt).bytesPerElement:1,Xn=T.get(it).currentProgram.getUniforms();for(let Wn=0;Wn<Cn;Wn++)Xn.setValue(V,"_gl_DrawID",Wn),Ie.render(yn[Wn]/fe,Yt[Wn])}else if(at.isInstancedMesh)Ie.renderInstances(Wt,Qe,at.count);else if(ct.isInstancedBufferGeometry){const yn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Yt=Math.min(ct.instanceCount,yn);Ie.renderInstances(Wt,Qe,Yt)}else Ie.render(Wt,Qe)};function ji(A,k,ct){A.transparent===!0&&A.side===kn&&A.forceSinglePass===!1?(A.side=gi,A.needsUpdate=!0,La(A,k,ct),A.side=Ms,A.needsUpdate=!0,La(A,k,ct),A.side=kn):La(A,k,ct)}this.compile=function(A,k,ct=null){ct===null&&(ct=A),F=bt.get(ct),F.init(k),H.push(F),ct.traverseVisible(function(at){at.isLight&&at.layers.test(k.layers)&&(F.pushLight(at),at.castShadow&&F.pushShadow(at))}),A!==ct&&A.traverseVisible(function(at){at.isLight&&at.layers.test(k.layers)&&(F.pushLight(at),at.castShadow&&F.pushShadow(at))}),F.setupLights();const it=new Set;return A.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Nt=at.material;if(Nt)if(Array.isArray(Nt))for(let Vt=0;Vt<Nt.length;Vt++){const Lt=Nt[Vt];ji(Lt,ct,at),it.add(Lt)}else ji(Nt,ct,at),it.add(Nt)}),F=H.pop(),it},this.compileAsync=function(A,k,ct=null){const it=this.compile(A,k,ct);return new Promise(at=>{function Nt(){if(it.forEach(function(Vt){T.get(Vt).currentProgram.isReady()&&it.delete(Vt)}),it.size===0){at(A);return}setTimeout(Nt,10)}Ae.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let da=null;function pa(A){da&&da(A)}function Na(){ei.stop()}function qa(){ei.start()}const ei=new mS;ei.setAnimationLoop(pa),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(A){da=A,ht.setAnimationLoop(A),A===null?ei.stop():ei.start()},ht.addEventListener("sessionstart",Na),ht.addEventListener("sessionend",qa),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;const ct=ht.enabled===!0&&ht.isPresenting===!0,it=b!==null&&(st===null||ct)&&b.begin(N,st);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(k),k=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,k,st),F=bt.get(A,H.length),F.init(k),H.push(F),Ke.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ft.setFromProjectionMatrix(Ke,Ra,k.reversedDepth),ne=this.localClippingEnabled,Gt=Tt.init(this.clippingPlanes,ne),U=ae.get(A,z.length),U.init(),z.push(U),ht.enabled===!0&&ht.isPresenting===!0){const Vt=N.xr.getDepthSensingMesh();Vt!==null&&Es(Vt,k,-1/0,N.sortObjects)}Es(A,k,0,N.sortObjects),U.finish(),N.sortObjects===!0&&U.sort(Et,Pt),me=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,me&&Ot.addToRenderList(U,A),this.info.render.frame++,Gt===!0&&Tt.beginShadows();const at=F.state.shadowsArray;if(zt.render(at,A,k),Gt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&b.hasRenderPass())===!1){const Vt=U.opaque,Lt=U.transmissive;if(F.setupLights(),k.isArrayCamera){const jt=k.cameras;if(Lt.length>0)for(let $t=0,se=jt.length;$t<se;$t++){const oe=jt[$t];Sn(Vt,Lt,A,oe)}me&&Ot.render(A);for(let $t=0,se=jt.length;$t<se;$t++){const oe=jt[$t];ci(U,A,oe,oe.viewport)}}else Lt.length>0&&Sn(Vt,Lt,A,k),me&&Ot.render(A),ci(U,A,k)}st!==null&&K===0&&(Z.updateMultisampleRenderTarget(st),Z.updateRenderTargetMipmap(st)),it&&b.end(N),A.isScene===!0&&A.onAfterRender(N,A,k),At.resetDefaultState(),nt=-1,j=null,H.pop(),H.length>0?(F=H[H.length-1],Gt===!0&&Tt.setGlobalState(N.clippingPlanes,F.state.camera)):F=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function Es(A,k,ct,it){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)ct=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ft.intersectsSprite(A)){it&&ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ke);const Vt=Xt.update(A),Lt=A.material;Lt.visible&&U.push(A,Vt,Lt,ct,ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ft.intersectsObject(A))){const Vt=Xt.update(A),Lt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ve.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ve.copy(Vt.boundingSphere.center)),ve.applyMatrix4(A.matrixWorld).applyMatrix4(Ke)),Array.isArray(Lt)){const jt=Vt.groups;for(let $t=0,se=jt.length;$t<se;$t++){const oe=jt[$t],Wt=Lt[oe.materialIndex];Wt&&Wt.visible&&U.push(A,Vt,Wt,ct,ve.z,oe)}}else Lt.visible&&U.push(A,Vt,Lt,ct,ve.z,null)}}const Nt=A.children;for(let Vt=0,Lt=Nt.length;Vt<Lt;Vt++)Es(Nt[Vt],k,ct,it)}function ci(A,k,ct,it){const{opaque:at,transmissive:Nt,transparent:Vt}=A;F.setupLightsView(ct),Gt===!0&&Tt.setGlobalState(N.clippingPlanes,ct),it&&Kt.viewport(L.copy(it)),at.length>0&&Nn(at,k,ct),Nt.length>0&&Nn(Nt,k,ct),Vt.length>0&&Nn(Vt,k,ct),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function Sn(A,k,ct,it){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[it.id]===void 0){const Wt=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[it.id]=new wa(1,1,{generateMipmaps:!0,type:Wt?Wa:Li,minFilter:Ss,samples:Math.max(4,Xe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const Nt=F.state.transmissionRenderTarget[it.id],Vt=it.viewport||L;Nt.setSize(Vt.z*N.transmissionResolutionScale,Vt.w*N.transmissionResolutionScale);const Lt=N.getRenderTarget(),jt=N.getActiveCubeFace(),$t=N.getActiveMipmapLevel();N.setRenderTarget(Nt),N.getClearColor(tt),ut=N.getClearAlpha(),ut<1&&N.setClearColor(16777215,.5),N.clear(),me&&Ot.render(ct);const se=N.toneMapping;N.toneMapping=Ca;const oe=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),F.setupLightsView(it),Gt===!0&&Tt.setGlobalState(N.clippingPlanes,it),Nn(A,ct,it),Z.updateMultisampleRenderTarget(Nt),Z.updateRenderTargetMipmap(Nt),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let xe=0,Qe=k.length;xe<Qe;xe++){const fn=k[xe],{object:Ie,geometry:yn,material:Yt,group:Cn}=fn;if(Yt.side===kn&&Ie.layers.test(it.layers)){const fe=Yt.side;Yt.side=gi,Yt.needsUpdate=!0,ma(Ie,ct,it,yn,Yt,Cn),Yt.side=fe,Yt.needsUpdate=!0,Wt=!0}}Wt===!0&&(Z.updateMultisampleRenderTarget(Nt),Z.updateRenderTargetMipmap(Nt))}N.setRenderTarget(Lt,jt,$t),N.setClearColor(tt,ut),oe!==void 0&&(it.viewport=oe),N.toneMapping=se}function Nn(A,k,ct){const it=k.isScene===!0?k.overrideMaterial:null;for(let at=0,Nt=A.length;at<Nt;at++){const Vt=A[at],{object:Lt,geometry:jt,group:$t}=Vt;let se=Vt.material;se.allowOverride===!0&&it!==null&&(se=it),Lt.layers.test(ct.layers)&&ma(Lt,k,ct,jt,se,$t)}}function ma(A,k,ct,it,at,Nt){A.onBeforeRender(N,k,ct,it,at,Nt),A.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),at.onBeforeRender(N,k,ct,it,A,Nt),at.transparent===!0&&at.side===kn&&at.forceSinglePass===!1?(at.side=gi,at.needsUpdate=!0,N.renderBufferDirect(ct,k,it,at,A,Nt),at.side=Ms,at.needsUpdate=!0,N.renderBufferDirect(ct,k,it,at,A,Nt),at.side=kn):N.renderBufferDirect(ct,k,it,at,A,Nt),A.onAfterRender(N,k,ct,it,at,Nt)}function La(A,k,ct){k.isScene!==!0&&(k=pe);const it=T.get(A),at=F.state.lights,Nt=F.state.shadowsArray,Vt=at.state.version,Lt=Dt.getParameters(A,at.state,Nt,k,ct),jt=Dt.getProgramCacheKey(Lt);let $t=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,it.fog=k.fog;const se=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=mt.get(A.envMap||it.environment,se),it.envMapRotation=it.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Re),$t=new Map,it.programs=$t);let oe=$t.get(jt);if(oe!==void 0){if(it.currentProgram===oe&&it.lightsStateVersion===Vt)return Vr(A,Lt),oe}else Lt.uniforms=Dt.getUniforms(A),A.onBeforeCompile(Lt,N),oe=Dt.acquireProgram(Lt,jt),$t.set(jt,oe),it.uniforms=Lt.uniforms;const Wt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Tt.uniform),Vr(A,Lt),it.needsLights=Zi(A),it.lightsStateVersion=Vt,it.needsLights&&(Wt.ambientLightColor.value=at.state.ambient,Wt.lightProbe.value=at.state.probe,Wt.directionalLights.value=at.state.directional,Wt.directionalLightShadows.value=at.state.directionalShadow,Wt.spotLights.value=at.state.spot,Wt.spotLightShadows.value=at.state.spotShadow,Wt.rectAreaLights.value=at.state.rectArea,Wt.ltc_1.value=at.state.rectAreaLTC1,Wt.ltc_2.value=at.state.rectAreaLTC2,Wt.pointLights.value=at.state.point,Wt.pointLightShadows.value=at.state.pointShadow,Wt.hemisphereLights.value=at.state.hemi,Wt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Wt.spotLightMatrix.value=at.state.spotLightMatrix,Wt.spotLightMap.value=at.state.spotLightMap,Wt.pointShadowMatrix.value=at.state.pointShadowMatrix),it.currentProgram=oe,it.uniformsList=null,oe}function Gr(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=$u.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Vr(A,k){const ct=T.get(A);ct.outputColorSpace=k.outputColorSpace,ct.batching=k.batching,ct.batchingColor=k.batchingColor,ct.instancing=k.instancing,ct.instancingColor=k.instancingColor,ct.instancingMorph=k.instancingMorph,ct.skinning=k.skinning,ct.morphTargets=k.morphTargets,ct.morphNormals=k.morphNormals,ct.morphColors=k.morphColors,ct.morphTargetsCount=k.morphTargetsCount,ct.numClippingPlanes=k.numClippingPlanes,ct.numIntersection=k.numClipIntersection,ct.vertexAlphas=k.vertexAlphas,ct.vertexTangents=k.vertexTangents,ct.toneMapping=k.toneMapping}function kr(A,k,ct,it,at){k.isScene!==!0&&(k=pe),Z.resetTextureUnits();const Nt=k.fog,Vt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?k.environment:null,Lt=st===null?N.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Fr,jt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,$t=mt.get(it.envMap||Vt,jt),se=it.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,oe=!!ct.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Wt=!!ct.morphAttributes.position,xe=!!ct.morphAttributes.normal,Qe=!!ct.morphAttributes.color;let fn=Ca;it.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(fn=N.toneMapping);const Ie=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,yn=Ie!==void 0?Ie.length:0,Yt=T.get(it),Cn=F.state.lights;if(Gt===!0&&(ne===!0||A!==j)){const hn=A===j&&it.id===nt;Tt.setState(it,A,hn)}let fe=!1;it.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Cn.state.version||Yt.outputColorSpace!==Lt||at.isBatchedMesh&&Yt.batching===!1||!at.isBatchedMesh&&Yt.batching===!0||at.isBatchedMesh&&Yt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Yt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Yt.instancing===!1||!at.isInstancedMesh&&Yt.instancing===!0||at.isSkinnedMesh&&Yt.skinning===!1||!at.isSkinnedMesh&&Yt.skinning===!0||at.isInstancedMesh&&Yt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Yt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Yt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Yt.instancingMorph===!1&&at.morphTexture!==null||Yt.envMap!==$t||it.fog===!0&&Yt.fog!==Nt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Tt.numPlanes||Yt.numIntersection!==Tt.numIntersection)||Yt.vertexAlphas!==se||Yt.vertexTangents!==oe||Yt.morphTargets!==Wt||Yt.morphNormals!==xe||Yt.morphColors!==Qe||Yt.toneMapping!==fn||Yt.morphTargetsCount!==yn)&&(fe=!0):(fe=!0,Yt.__version=it.version);let Xn=Yt.currentProgram;fe===!0&&(Xn=La(it,k,at));let Wn=!1,_i=!1,ui=!1;const ze=Xn.getUniforms(),Mn=Yt.uniforms;if(Kt.useProgram(Xn.program)&&(Wn=!0,_i=!0,ui=!0),it.id!==nt&&(nt=it.id,_i=!0),Wn||j!==A){Kt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ze.setValue(V,"projectionMatrix",A.projectionMatrix),ze.setValue(V,"viewMatrix",A.matrixWorldInverse);const Ai=ze.map.cameraPosition;Ai!==void 0&&Ai.setValue(V,Me.setFromMatrixPosition(A.matrixWorld)),Xe.logarithmicDepthBuffer&&ze.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ze.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,_i=!0,ui=!0)}if(Yt.needsLights&&(Cn.state.directionalShadowMap.length>0&&ze.setValue(V,"directionalShadowMap",Cn.state.directionalShadowMap,Z),Cn.state.spotShadowMap.length>0&&ze.setValue(V,"spotShadowMap",Cn.state.spotShadowMap,Z),Cn.state.pointShadowMap.length>0&&ze.setValue(V,"pointShadowMap",Cn.state.pointShadowMap,Z)),at.isSkinnedMesh){ze.setOptional(V,at,"bindMatrix"),ze.setOptional(V,at,"bindMatrixInverse");const hn=at.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),ze.setValue(V,"boneTexture",hn.boneTexture,Z))}at.isBatchedMesh&&(ze.setOptional(V,at,"batchingTexture"),ze.setValue(V,"batchingTexture",at._matricesTexture,Z),ze.setOptional(V,at,"batchingIdTexture"),ze.setValue(V,"batchingIdTexture",at._indirectTexture,Z),ze.setOptional(V,at,"batchingColorTexture"),at._colorsTexture!==null&&ze.setValue(V,"batchingColorTexture",at._colorsTexture,Z));const wn=ct.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Ht.update(at,ct,Xn),(_i||Yt.receiveShadow!==at.receiveShadow)&&(Yt.receiveShadow=at.receiveShadow,ze.setValue(V,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&k.environment!==null&&(Mn.envMapIntensity.value=k.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=n2()),_i&&(ze.setValue(V,"toneMappingExposure",N.toneMappingExposure),Yt.needsLights&&Oa(Mn,ui),Nt&&it.fog===!0&&Jt.refreshFogUniforms(Mn,Nt),Jt.refreshMaterialUniforms(Mn,it,pt,Y,F.state.transmissionRenderTarget[A.id]),$u.upload(V,Gr(Yt),Mn,Z)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&($u.upload(V,Gr(Yt),Mn,Z),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ze.setValue(V,"center",at.center),ze.setValue(V,"modelViewMatrix",at.modelViewMatrix),ze.setValue(V,"normalMatrix",at.normalMatrix),ze.setValue(V,"modelMatrix",at.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const hn=it.uniformsGroups;for(let Ai=0,Ki=hn.length;Ai<Ki;Ai++){const ja=hn[Ai];Ut.update(ja,Xn),Ut.bind(ja,Xn)}}return Xn}function Oa(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Zi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(A,k,ct){const it=T.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),T.get(A.texture).__webglTexture=k,T.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ct,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const ct=T.get(A);ct.__webglFramebuffer=k,ct.__useDefaultFramebuffer=k===void 0};const ga=V.createFramebuffer();this.setRenderTarget=function(A,k=0,ct=0){st=A,B=k,K=ct;let it=null,at=!1,Nt=!1;if(A){const Lt=T.get(A);if(Lt.__useDefaultFramebuffer!==void 0){Kt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),L.copy(A.viewport),D.copy(A.scissor),q=A.scissorTest,Kt.viewport(L),Kt.scissor(D),Kt.setScissorTest(q),nt=-1;return}else if(Lt.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(Lt.__hasExternalTextures)Z.rebindTextures(A,T.get(A.texture).__webglTexture,T.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const se=A.depthTexture;if(Lt.__boundDepthTexture!==se){if(se!==null&&T.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}const jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Nt=!0);const $t=T.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[k])?it=$t[k][ct]:it=$t[k],at=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?it=T.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?it=$t[ct]:it=$t,L.copy(A.viewport),D.copy(A.scissor),q=A.scissorTest}else L.copy(et).multiplyScalar(pt).floor(),D.copy(_t).multiplyScalar(pt).floor(),q=yt;if(ct!==0&&(it=ga),Kt.bindFramebuffer(V.FRAMEBUFFER,it)&&Kt.drawBuffers(A,it),Kt.viewport(L),Kt.scissor(D),Kt.setScissorTest(q),at){const Lt=T.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Lt.__webglTexture,ct)}else if(Nt){const Lt=k;for(let jt=0;jt<A.textures.length;jt++){const $t=T.get(A.textures[jt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+jt,$t.__webglTexture,ct,Lt)}}else if(A!==null&&ct!==0){const Lt=T.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,ct)}nt=-1},this.readRenderTargetPixels=function(A,k,ct,it,at,Nt,Vt,Lt=0){if(!(A&&A.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(jt=jt[Vt]),jt){Kt.bindFramebuffer(V.FRAMEBUFFER,jt);try{const $t=A.textures[Lt],se=$t.format,oe=$t.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),!Xe.textureFormatReadable(se)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(oe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-it&&ct>=0&&ct<=A.height-at&&V.readPixels(k,ct,it,at,Ct.convert(se),Ct.convert(oe),Nt)}finally{const $t=st!==null?T.get(st).__webglFramebuffer:null;Kt.bindFramebuffer(V.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,k,ct,it,at,Nt,Vt,Lt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(jt=jt[Vt]),jt)if(k>=0&&k<=A.width-it&&ct>=0&&ct<=A.height-at){Kt.bindFramebuffer(V.FRAMEBUFFER,jt);const $t=A.textures[Lt],se=$t.format,oe=$t.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),!Xe.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Wt),V.bufferData(V.PIXEL_PACK_BUFFER,Nt.byteLength,V.STREAM_READ),V.readPixels(k,ct,it,at,Ct.convert(se),Ct.convert(oe),0);const xe=st!==null?T.get(st).__webglFramebuffer:null;Kt.bindFramebuffer(V.FRAMEBUFFER,xe);const Qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await MM(V,Qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Wt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Nt),V.deleteBuffer(Wt),V.deleteSync(Qe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,ct=0){const it=Math.pow(2,-ct),at=Math.floor(A.image.width*it),Nt=Math.floor(A.image.height*it),Vt=k!==null?k.x:0,Lt=k!==null?k.y:0;Z.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,Vt,Lt,at,Nt),Kt.unbindTexture()};const _a=V.createFramebuffer(),mn=V.createFramebuffer();this.copyTextureToTexture=function(A,k,ct=null,it=null,at=0,Nt=0){let Vt,Lt,jt,$t,se,oe,Wt,xe,Qe;const fn=A.isCompressedTexture?A.mipmaps[Nt]:A.image;if(ct!==null)Vt=ct.max.x-ct.min.x,Lt=ct.max.y-ct.min.y,jt=ct.isBox3?ct.max.z-ct.min.z:1,$t=ct.min.x,se=ct.min.y,oe=ct.isBox3?ct.min.z:0;else{const Mn=Math.pow(2,-at);Vt=Math.floor(fn.width*Mn),Lt=Math.floor(fn.height*Mn),A.isDataArrayTexture?jt=fn.depth:A.isData3DTexture?jt=Math.floor(fn.depth*Mn):jt=1,$t=0,se=0,oe=0}it!==null?(Wt=it.x,xe=it.y,Qe=it.z):(Wt=0,xe=0,Qe=0);const Ie=Ct.convert(k.format),yn=Ct.convert(k.type);let Yt;k.isData3DTexture?(Z.setTexture3D(k,0),Yt=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),Yt=V.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),Yt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const Cn=V.getParameter(V.UNPACK_ROW_LENGTH),fe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Xn=V.getParameter(V.UNPACK_SKIP_PIXELS),Wn=V.getParameter(V.UNPACK_SKIP_ROWS),_i=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,fn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,fn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,$t),V.pixelStorei(V.UNPACK_SKIP_ROWS,se),V.pixelStorei(V.UNPACK_SKIP_IMAGES,oe);const ui=A.isDataArrayTexture||A.isData3DTexture,ze=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Mn=T.get(A),wn=T.get(k),hn=T.get(Mn.__renderTarget),Ai=T.get(wn.__renderTarget);Kt.bindFramebuffer(V.READ_FRAMEBUFFER,hn.__webglFramebuffer),Kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ki=0;Ki<jt;Ki++)ui&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(A).__webglTexture,at,oe+Ki),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(k).__webglTexture,Nt,Qe+Ki)),V.blitFramebuffer($t,se,Vt,Lt,Wt,xe,Vt,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);Kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(at!==0||A.isRenderTargetTexture||T.has(A)){const Mn=T.get(A),wn=T.get(k);Kt.bindFramebuffer(V.READ_FRAMEBUFFER,_a),Kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,mn);for(let hn=0;hn<jt;hn++)ui?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mn.__webglTexture,at,oe+hn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mn.__webglTexture,at),ze?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,wn.__webglTexture,Nt,Qe+hn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,wn.__webglTexture,Nt),at!==0?V.blitFramebuffer($t,se,Vt,Lt,Wt,xe,Vt,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):ze?V.copyTexSubImage3D(Yt,Nt,Wt,xe,Qe+hn,$t,se,Vt,Lt):V.copyTexSubImage2D(Yt,Nt,Wt,xe,$t,se,Vt,Lt);Kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ze?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Yt,Nt,Wt,xe,Qe,Vt,Lt,jt,Ie,yn,fn.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Yt,Nt,Wt,xe,Qe,Vt,Lt,jt,Ie,fn.data):V.texSubImage3D(Yt,Nt,Wt,xe,Qe,Vt,Lt,jt,Ie,yn,fn):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Nt,Wt,xe,Vt,Lt,Ie,yn,fn.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Nt,Wt,xe,fn.width,fn.height,Ie,fn.data):V.texSubImage2D(V.TEXTURE_2D,Nt,Wt,xe,Vt,Lt,Ie,yn,fn);V.pixelStorei(V.UNPACK_ROW_LENGTH,Cn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,fe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Wn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_i),Nt===0&&k.generateMipmaps&&V.generateMipmap(Yt),Kt.unbindTexture()},this.initRenderTarget=function(A){T.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),Kt.unbindTexture()},this.resetState=function(){B=0,K=0,st=null,Kt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(t),i.unpackColorSpace=ke._getUnpackColorSpace()}}const i2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:qf,AddEquation:tr,AddOperation:Fx,AdditiveBlending:Kp,AgXToneMapping:pm,AlphaFormat:ym,AlwaysCompare:Yx,AlwaysDepth:af,AlwaysStencilFunc:$p,AmbientLight:uS,ArrayCamera:hS,BackSide:gi,BasicDepthPacking:zx,Box3:ar,BoxGeometry:sr,BufferAttribute:fa,BufferGeometry:qi,ByteType:_m,Camera:Om,CanvasTexture:ko,CatmullRomCurve3:nS,CineonToneMapping:hm,ClampToEdgeWrapping:ka,Clock:pS,Color:re,ColorManagement:ke,ConstantAlphaFactor:Ox,ConstantColorFactor:Nx,CubeCamera:fS,CubeDepthTexture:tS,CubeReflectionMapping:ir,CubeRefractionMapping:Ir,CubeTexture:Dm,CubeUVReflectionMapping:gc,CullFaceBack:Zp,CullFaceFront:gx,CullFaceNone:mx,Curve:eS,CustomBlending:vx,CustomToneMapping:dm,Data3DTexture:Qx,DataArrayTexture:Tm,DataTexture:wm,DepthFormat:Ya,DepthStencilFormat:er,DepthTexture:Qo,DirectionalLight:am,DoubleSide:kn,DstAlphaFactor:Rx,DstColorFactor:wx,EqualCompare:kx,EqualDepth:rf,EquirectangularReflectionMapping:ju,EquirectangularRefractionMapping:Zu,Euler:ha,EventDispatcher:Br,ExternalTexture:Um,Float32BufferAttribute:ti,FloatType:ca,Fog:pc,FrontSide:Ms,Frustum:rh,GLSL3:em,GreaterCompare:Xx,GreaterDepth:lf,GreaterEqualCompare:ih,GreaterEqualDepth:of,Group:Vo,HalfFloatType:Wa,HemisphereLight:cS,ImageUtils:Zx,InstancedBufferAttribute:im,InstancedMesh:$x,IntType:jf,KeepStencilOp:Dr,Layers:sh,LessCompare:Vx,LessDepth:sf,LessEqualCompare:nh,LessEqualDepth:Or,Light:el,LinearFilter:$n,LinearMipmapLinearFilter:Ss,LinearMipmapNearestFilter:Ku,LinearSRGBColorSpace:Fr,LinearToneMapping:um,LinearTransfer:hc,Material:Hr,MathUtils:Mi,Matrix3:ye,Matrix4:un,MaxEquation:Mx,Mesh:Ge,MeshBasicMaterial:mc,MeshDepthMaterial:oS,MeshDistanceMaterial:lS,MeshLambertMaterial:rS,MeshPhysicalMaterial:Ur,MeshStandardMaterial:xs,MinEquation:yx,MirroredRepeatWrapping:uf,MixOperation:Px,MultiplyBlending:Jp,MultiplyOperation:Yf,NearestFilter:Jn,NearestMipmapLinearFilter:ic,NearestMipmapNearestFilter:Bx,NeutralToneMapping:mm,NeverCompare:Gx,NeverDepth:nf,NoBlending:Xa,NoColorSpace:vs,NoToneMapping:Ca,NormalBlending:Lr,NotEqualCompare:Wx,NotEqualDepth:cf,Object3D:pn,ObjectSpaceNormalMap:Hx,OneFactor:Tx,OneMinusConstantAlphaFactor:Ix,OneMinusConstantColorFactor:Lx,OneMinusDstAlphaFactor:Cx,OneMinusDstColorFactor:Dx,OneMinusSrcAlphaFactor:ef,OneMinusSrcColorFactor:Ax,OrthographicCamera:ch,PCFShadowMap:Xo,PCFSoftShadowMap:_x,PMREMGenerator:Xf,PerspectiveCamera:Ti,Plane:$s,PlaneGeometry:Va,PointLight:fc,Quaternion:zr,R11_EAC_Format:vf,RED_GREEN_RGTC2_Format:Gf,RED_RGTC1_Format:zf,REVISION:Wf,RG11_EAC_Format:Sf,RGBAFormat:ua,RGBAIntegerFormat:th,RGBA_ASTC_10x10_Format:Lf,RGBA_ASTC_10x5_Format:Df,RGBA_ASTC_10x6_Format:Uf,RGBA_ASTC_10x8_Format:Nf,RGBA_ASTC_12x10_Format:Of,RGBA_ASTC_12x12_Format:If,RGBA_ASTC_4x4_Format:Mf,RGBA_ASTC_5x4_Format:Ef,RGBA_ASTC_5x5_Format:Tf,RGBA_ASTC_6x5_Format:bf,RGBA_ASTC_6x6_Format:Af,RGBA_ASTC_8x5_Format:Rf,RGBA_ASTC_8x6_Format:Cf,RGBA_ASTC_8x8_Format:wf,RGBA_BPTC_Format:Pf,RGBA_ETC2_EAC_Format:_f,RGBA_PVRTC_2BPPV1_Format:pf,RGBA_PVRTC_4BPPV1_Format:df,RGBA_S3TC_DXT1_Format:rc,RGBA_S3TC_DXT3_Format:oc,RGBA_S3TC_DXT5_Format:lc,RGBFormat:Mm,RGB_BPTC_SIGNED_Format:Ff,RGB_BPTC_UNSIGNED_Format:Bf,RGB_ETC1_Format:mf,RGB_ETC2_Format:gf,RGB_PVRTC_2BPPV1_Format:hf,RGB_PVRTC_4BPPV1_Format:ff,RGB_S3TC_DXT1_Format:sc,RGFormat:Pr,RGIntegerFormat:$f,RawShaderMaterial:sS,Ray:Cm,Raycaster:dS,RedFormat:Qf,RedIntegerFormat:Jf,ReinhardToneMapping:fm,RenderTarget:Kx,RepeatWrapping:Yo,ReverseSubtractEquation:Sx,RingGeometry:oh,SIGNED_R11_EAC_Format:xf,SIGNED_RED_GREEN_RGTC2_Format:Vf,SIGNED_RED_RGTC1_Format:Hf,SIGNED_RG11_EAC_Format:yf,SRGBColorSpace:qn,SRGBTransfer:$e,Scene:bm,ShaderChunk:Te,ShaderLib:Aa,ShaderMaterial:Ua,ShortType:vm,Source:ah,Sphere:tl,SphereGeometry:lh,SpotLight:Ju,SrcAlphaFactor:tf,SrcAlphaSaturateFactor:Ux,SrcColorFactor:bx,StaticDrawUsage:tm,SubtractEquation:xx,SubtractiveBlending:Qp,TangentSpaceNormalMap:eh,Texture:oi,Triangle:la,UVMapping:gm,Uint16BufferAttribute:Am,Uint32BufferAttribute:Rm,UniformsLib:It,UniformsUtils:aS,UnsignedByteType:Li,UnsignedInt101111Type:Sm,UnsignedInt248Type:jo,UnsignedInt5999Type:xm,UnsignedIntType:Da,UnsignedShort4444Type:Zf,UnsignedShort5551Type:Kf,UnsignedShortType:qo,VSMShadowMap:Go,Vector2:De,Vector3:$,Vector4:Rn,WebGLCoordinateSystem:Ra,WebGLCubeRenderTarget:Im,WebGLRenderTarget:wa,WebGLRenderer:yS,WebGLUtils:SS,WebGPUCoordinateSystem:Zo,WebXRController:Qu,ZeroFactor:Ex,createCanvasElement:qx,error:Ve,log:nm,warn:he,warnOnce:dc},Symbol.toStringTag,{value:"Module"}));class a2 extends bm{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new sr;t.deleteAttribute("uv");const i=new xs({side:gi}),s=new xs,l=new fc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Ge(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new $x(t,s,6),d=new pn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const m=new Ge(t,Bo(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Ge(t,Bo(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Ge(t,Bo(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new Ge(t,Bo(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new Ge(t,Bo(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new Ge(t,Bo(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Bo(r){return new rS({color:0,emissive:16777215,emissiveIntensity:r})}const s2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],r2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],o2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],l2=["LOW","MEDIUM","HIGH","EXTREME"],c2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],u2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],f2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},h2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},d2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},p2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},m2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function MS(r){return(r-90)*Math.PI/180}function g2(r,t,i,s){const l=MS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function zo(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function ES(r){zo("subject",r.subject,s2),zo("domain",r.domain,r2),zo("verb",r.verb,o2),zo("magnitude",r.magnitude,l2),zo("time",r.time,c2),zo("certainty",r.certainty,u2)}function _2(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const h=m2[l][c];if(!h)throw new Error(`Unknown ${l} token: ${c}`);return h}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return ES(s),s}function v2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,h=(-90+l*36)*(Math.PI/180),d=i.x+Math.cos(h)*c,m=i.y+Math.sin(h)*c;l===0&&r.beginPath(),l===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),h=i.x+Math.cos(c)*6,d=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(h,d):r.lineTo(h,d)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function tc(r,t,i,s,l){const c=i.x-t.x,h=i.y-t.y,d=Math.sqrt(c*c+h*h)||1,m=c/d,p=h/d,_=-p,x=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+x*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-x*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function ec(r,t,i,s,l,c){const h=p2[t.certainty];if(!(h<=0)){r.save(),r.fillStyle=l;for(let d=1;d<=h;d+=1){const m=d/(h+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const x=1-m;p=x*x*i.x+2*x*m*c.x+m*m*s.x,_=x*x*i.y+2*x*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function x2(r,t,i){ES(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),h=s*.5,d=l*.5,m=i?.backgroundColor,p=i?.lineColor,_=i?.gridColor;r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(h,d,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(h,d,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(h,d,c*.12,0,Math.PI*2),r.stroke();const x=f2[t.domain],g=h2[t.time]*c,y=d2[t.magnitude]*c,E=g2(h,d,g,x),w=MS(x),M=Math.cos(w),S=Math.sin(w),C=-S,O=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let U={x:E.x,y:E.y},F={x:E.x+M*y,y:E.y+S*y},z;if(t.verb==="EXISTS")U={x:E.x-C*(y*.48),y:E.y-O*(y*.48)},F={x:E.x+C*(y*.48),y:E.y+O*(y*.48)},r.beginPath(),r.moveTo(U.x,U.y),r.lineTo(F.x,F.y),r.stroke(),ec(r,t,U,F,p);else if(t.verb==="DECLINES")F={x:E.x-M*y,y:E.y-S*y},r.beginPath(),r.moveTo(U.x,U.y),r.lineTo(F.x,F.y),r.stroke(),tc(r,U,F,p,7),ec(r,t,U,F,p);else if(t.verb==="TRANSFORMS")z={x:E.x+C*(y*.34)+M*(y*.34),y:E.y+O*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(U.x,U.y),r.quadraticCurveTo(z.x,z.y,F.x,F.y),r.stroke(),tc(r,z,F,p,7),ec(r,t,U,F,p,z);else if(t.verb==="INFLUENCES"){const b={x:E.x+C*3.4,y:E.y+O*3.4},N={x:F.x+C*3.4,y:F.y+O*3.4},Q={x:E.x-C*3.4,y:E.y-O*3.4},B={x:F.x-C*3.4,y:F.y-O*3.4};r.beginPath(),r.moveTo(b.x,b.y),r.lineTo(N.x,N.y),r.moveTo(Q.x,Q.y),r.lineTo(B.x,B.y),r.stroke(),tc(r,b,N,p,6.6),tc(r,Q,B,p,6.6),ec(r,t,b,N,p)}else r.beginPath(),r.moveTo(U.x,U.y),r.lineTo(F.x,F.y),r.stroke(),tc(r,U,F,p,7),ec(r,t,U,F,p);r.fillStyle=p,r.beginPath(),r.arc(h,d,5,0,Math.PI*2),r.fill(),v2(r,t.subject,E,p)}function S2(r,t,i){const s=_2(t);x2(r,s,i)}const ux="intelligenspartiet:language",y2={nb:{siteName:"INTELLIGENSPARTIET",languageLabel:"Språk",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Videoer",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter"},en:{siteName:"INTELLIGENSPARTIET",languageLabel:"Language",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Videos",outsideSignatures:"Signatures",outsideAiNews:"AI news"}},M2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},Xp=(r,t,i,s,l)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:M2}),Xu=[Xp("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1),Xp("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42),Xp("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74)],E2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim().toUpperCase(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim()}),ba=r=>{let t=r%1;return t<0&&(t+=1),t},T2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),ba(r+l*(1-Math.exp(-i*s)))},fx=12,Wp=9,Yp=.12,hx=-1,qp=2.4,b2=.3,A2=1.2,R2=.3,dx=6741503,C2=5,w2=3.2,D2=.35,U2=.25,Wu=400,N2=2.5,px=16755251,Yu=3,L2=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),O2=(r,t,i,s,l,c)=>{TS(r,t,l).forEach((d,m)=>{r.fillText(d,i,s+m*c)})},TS=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let h=0;h<s.length;h+=1){const d=s[h];if(!d)continue;const m=`${c}${d} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${d} `):c=m}return c.trim()&&l.push(c.trim()),l},I2=/\(\s*bold\s*\)/gi,P2=/\(\s*new\s*line\s*\)/gi,F2=/\(\s*new\s*paragraph\s*\)/gi,B2=r=>{const i=r.replace(/\r\n?/g,`
`).replace(F2,`

`).replace(P2,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const d=/\(\s*bold\s*\)/i.test(c),m=c.replace(I2,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:d,paragraphBreak:s}),s=!1}),l},z2=(r,t,i,s,l,c,h,d,m=.6)=>{const p=B2(t);let _=s;p.forEach((x,g)=>{g>0&&x.paragraphBreak&&(_+=c*m),r.font=x.bold?d:h,TS(r,x.text,l).forEach(E=>{r.fillText(E,i,_),_+=c})}),r.font=h},H2=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,bS=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),G2=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),V2=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],k2=new Map(V2.map(([r,t])=>[bS(r),t])),X2=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],W2=X2.map(([r,t])=>[new RegExp(G2(r),"gi"),t]),Y2={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},q2=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),j2=r=>{let t=r;return W2.forEach(([i,s])=>{t=t.replace(i,s)}),t},Z2=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=Y2[t.toLowerCase()];return i?q2(t,i):t}),K2=r=>{const t=r.trim();return t?(k2.get(bS(t))??Z2(j2(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},Q2=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(H2,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>K2(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},lm=Math.PI*2,wr=r=>Math.min(1,Math.max(0,r)),nc=(r,t,i,s,l)=>{const c=lm*(r*i+s),h=lm*(t*i+l),d=Math.sin(c)*Math.cos(h),m=.5*Math.sin((c+h)*.65+s*6.37);return d+m},qu=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new ko(s)},oa=(r,t,i,s,l=!1)=>{r.wrapS=Yo,r.wrapT=Yo,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=Ss,r.magFilter=$n,l&&(r.colorSpace=qn),r.needsUpdate=!0},jp=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:h,microFreq:d,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:x,seamDepth:g,seamWidth:y,roughnessBase:E,roughnessRange:w,normalStrength:M,aoStrength:S}=r,C=t*i,O=new re(l),U=new Float32Array(C);let F=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY;for(let nt=0;nt<i;nt+=1)for(let j=0;j<t;j+=1){const L=nt*t+j,D=j/t,q=nt/i,tt=nc(D,q,c,s*.11,s*.23),ut=nc(D,q,h,s*.41+.18,s*.29+.07),P=nc(D,q,d,s*.71+.43,s*.53+.31),Y=Math.sin(lm*((D+q*.33)*m+s*.17));let pt=0;if(_!=="none"&&x>0){const et=(_==="x"?D:q)*x%1,_t=Math.min(et,1-et);pt=Math.exp(-Math.pow(_t/Math.max(1e-4,y),2))}const Et=tt*.6+ut*.28+P*.12+Y*p-pt*g;U[L]=Et,Et<F&&(F=Et),Et>z&&(z=Et)}const H=new Float32Array(C),b=Math.max(1e-4,z-F),N=new Uint8ClampedArray(C*4),Q=new Uint8ClampedArray(C*4),B=new Uint8ClampedArray(C*4);for(let nt=0;nt<i;nt+=1)for(let j=0;j<t;j+=1){const L=nt*t+j,D=L*4,q=j/t,tt=nt/i,ut=wr((U[L]-F)/b);H[L]=ut;const P=nc(q,tt,h*.6,s*.19+.62,s*.73+.14)*.5+.5,Y=wr(.78+(ut-.5)*.24+(P-.5)*.12),pt=nc(q,tt,c*.5,s*.37+.89,s*.13+.44),Et=1+pt*.017,Pt=1+pt*.007,et=1-pt*.013,_t=wr(E+(1-ut)*w+(P-.5)*.14),yt=wr(.94-(1-ut)*S);N[D]=Math.round(wr(O.r*Y*Et)*255),N[D+1]=Math.round(wr(O.g*Y*Pt)*255),N[D+2]=Math.round(wr(O.b*Y*et)*255),N[D+3]=255;const Ft=Math.round(_t*255);Q[D]=Ft,Q[D+1]=Ft,Q[D+2]=Ft,Q[D+3]=255;const Gt=Math.round(yt*255);B[D]=Gt,B[D+1]=Gt,B[D+2]=Gt,B[D+3]=255}const K=(nt,j)=>{const L=(nt+t)%t,D=(j+i)%i;return H[D*t+L]},st=new Uint8ClampedArray(C*4);for(let nt=0;nt<i;nt+=1)for(let j=0;j<t;j+=1){const D=(nt*t+j)*4,q=K(j+1,nt)-K(j-1,nt),tt=K(j,nt+1)-K(j,nt-1),ut=-q*M,P=-tt*M,Y=1,pt=1/Math.hypot(ut,P,Y);st[D]=Math.round((ut*pt*.5+.5)*255),st[D+1]=Math.round((P*pt*.5+.5)*255),st[D+2]=Math.round((Y*pt*.5+.5)*255),st[D+3]=255}return{albedo:qu(N,t,i),normal:qu(st,t,i),roughness:qu(Q,t,i),ao:qu(B,t,i)}},J2=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,h=0;const d=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],h+=s[p+2];l/=d*255,c/=d*255,h/=d*255;const m=l*.2126+c*.7152+h*.0722;return{color:new re(l,c,h),luminance:m}};function $2(){const r=xn.useRef(null),t=xn.useRef([]),i=xn.useRef(Yp),s=xn.useRef(Yp);xn.useEffect(()=>{const Q=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=Q,document.documentElement.style.overscrollBehavior=""}},[]);const[l,c]=xn.useState(Xu),[h,d]=xn.useState([]),[m,p]=xn.useState(Xu[0].id),[_,x]=xn.useState(!0),[g,y]=xn.useState(!1),[E,w]=xn.useState(!1),[M,S]=xn.useState(()=>{if(typeof window>"u")return"nb";try{const Q=window.localStorage.getItem(ux);if(Q==="nb"||Q==="en")return Q}catch{}return"nb"});xn.useEffect(()=>{try{window.localStorage.setItem(ux,M)}catch{}},[M]);const C=y2[M],O=xn.useMemo(()=>Q=>M==="nb"?Q2(Q):Q,[M]);xn.useEffect(()=>{let Q=!1;return(async()=>{try{const K=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),st=K.headers.get("content-type")??"";if(!K.ok)throw new Error(`HTTP ${K.status} while loading glyph language map`);if(!st.toLowerCase().includes("application/json")){const L=await K.text();throw new Error(`Expected JSON but got '${st||"unknown"}' (${L.slice(0,120)})`)}const nt=await K.json();if(!Array.isArray(nt?.items))throw new Error("Glyph language payload missing 'items' array");const j=nt.items.map((L,D)=>E2(L,D)).filter(L=>L.enabled!==!1);if(Q)return;d(j)}catch(K){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",K),Q)return;d([])}})(),()=>{Q=!0}},[]);const U=xn.useMemo(()=>h.filter(Q=>Q.enabled!==!1&&typeof Q.canonical=="string"&&Q.canonical.trim().length>0),[h]),F=xn.useMemo(()=>{const Q=new Map;if(!l.length||!U.length)return Q;const B=nt=>{const j=ba(nt);return ba(Yp-j)},K=[...l].sort((nt,j)=>{const L=typeof nt.installation?.placement_t=="number"?nt.installation.placement_t:0,D=typeof j.installation?.placement_t=="number"?j.installation.placement_t:0,q=B(L),tt=B(D);return q===tt?nt.id.localeCompare(j.id):q-tt}),st=Math.min(K.length,U.length);for(let nt=0;nt<st;nt+=1)Q.set(K[nt].id,U[nt]);return Q},[l,U]),z=xn.useMemo(()=>{const Q=new Map;return F.forEach((B,K)=>{B.canonical&&Q.set(K,B.canonical)}),Q},[F]),H=xn.useMemo(()=>{const Q=new Map;return F.forEach((B,K)=>{Q.set(K,{label:B.label||"",note:B.note||""})}),Q},[F]);xn.useEffect(()=>{let Q=!1;return(async()=>{x(!0),y(!1);try{const K=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),st=K.headers.get("content-type")??"";if(!K.ok)throw new Error(`HTTP ${K.status} while loading panel data`);if(!st.toLowerCase().includes("application/json")){const tt=await K.text();throw new Error(`Expected JSON but got '${st||"unknown"}' (${tt.slice(0,120)})`)}const nt=await K.json();if(!Array.isArray(nt?.panels))throw new Error("Panel payload missing 'panels' array");const j=typeof nt.media_root=="string"?nt.media_root.replace(/\/+$/,""):"",L=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",D=tt=>/^https?:\/\//i.test(tt)&&L?`/proxy?url=${encodeURIComponent(tt)}`:tt,q=nt.panels.map(tt=>{const ut=typeof tt?.source=="string"?tt.source.replace(/^\/+/,""):"",P=ut?j?`${j}/${ut}`:`/${ut}`:void 0,Y=P?D(P):void 0,pt=typeof tt?.poster=="string"?tt.poster.replace(/^\/+/,""):"",Et=pt?j?`${j}/${pt}`:`/${pt}`:void 0,Pt=Et?D(Et):void 0,et=tt?.type==="image"||tt?.type==="video"?tt.type:"text";return{...tt,kind:et,type:et,title:tt?.content?.title??"Uten tittel",body:tt?.content?.description??"",cta:tt?.content?.cta,poster:Pt,image:et==="image"?Y:void 0,video:et==="video"?Y:void 0}});if(q.length===0)throw new Error("Panel payload contained 0 panels");if(Q)return;c(q),p(q[0].id)}catch(K){if(console.error("Failed to load panels; using fallback data.",K),Q)return;c(Xu),p(Xu[0].id),y(!0)}finally{Q||x(!1)}})(),()=>{Q=!0}},[]);const b=xn.useMemo(()=>l.find(Q=>Q.id===m)??l[0]??{title:"",body:""},[m,l]),N=xn.useMemo(()=>{const Q=H.get(b.id)?.label;return O(Q||b.title||"")},[b.id,b.title,H,O]);return xn.useEffect(()=>{if(l.length===0)return;const Q=r.current;if(!Q)return;w(!1);let B=!1,K=()=>{};return(()=>{if(B||!Q)return;t.current=[];const nt=window.matchMedia("(prefers-reduced-motion: reduce)"),j=window.matchMedia("(max-width: 767px)"),L=nt.matches,D=j.matches,q=new bm;q.background=new re(987671),q.fog=new pc(987671,38,230);const tt=new Ti(D?72:64,Q.clientWidth/Q.clientHeight,.1,1200),ut=new yS({antialias:!D,alpha:!1,powerPreference:"high-performance"});ut.setPixelRatio(Math.min(window.devicePixelRatio,D?1:1.5)),ut.setSize(Q.clientWidth,Q.clientHeight),ut.outputColorSpace=qn,ut.toneMapping=qf,ut.toneMappingExposure=D?.76:.72,ut.shadowMap.enabled=!D,ut.shadowMap.type=Xo,Q.appendChild(ut.domElement);const P=new Xf(ut),Y=P.fromScene(new a2,.06);q.environment=Y.texture;const pt=new uS(16185599,.05);q.add(pt);const Et=new cS(14739442,1777446,.08);q.add(Et);const Pt=L2(i2),et=new nS(Pt,!0,"catmullrom",.17),_t=D?180:300,yt=Math.min(8,ut.capabilities.getMaxAnisotropy()),Ft=D?256:512,Gt=jp({width:Ft,height:Ft,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});oa(Gt.albedo,4.8,24,yt,!0),oa(Gt.normal,4.8,24,yt),oa(Gt.roughness,4.8,24,yt),oa(Gt.ao,4.8,24,yt);const ne=jp({width:Ft,height:Ft,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});oa(ne.albedo,2.2,24,yt,!0),oa(ne.normal,2.2,24,yt),oa(ne.roughness,2.2,24,yt),oa(ne.ao,2.2,24,yt);const Ke=jp({width:Ft,height:Ft,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});oa(Ke.albedo,3.4,24,yt,!0),oa(Ke.normal,3.4,24,yt),oa(Ke.roughness,3.4,24,yt),oa(Ke.ao,3.4,24,yt);const Me=new Ur({color:9607586,map:Gt.albedo,normalMap:Gt.normal,normalScale:new De(.32,.32),roughnessMap:Gt.roughness,roughness:.38,metalness:0,aoMap:Gt.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:kn}),ve=new Ur({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:kn}),pe=new Ur({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new re(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:kn}),me=()=>{const Rt=[],te=new $(0,1,0);let Qt=new $(1,0,0);for(let wt=0;wt<=_t;wt+=1){const Ln=wt/_t,Fi=et.getPointAt(Ln),we=Ln===1?Fi.clone().sub(et.getPointAt(Ln-.001)).normalize():et.getPointAt(Ln+.001).sub(Fi).normalize();let Fe=new $().crossVectors(we,te).normalize();Fe.lengthSq()<1e-4&&(Fe=Qt.clone()),Fe.dot(Qt)<0&&Fe.multiplyScalar(-1),Qt=Fe.clone();const bn=new $().crossVectors(Fe,we).normalize();Rt.push({pt:Fi,right:Fe,up:bn,t:Ln})}const qt=(wt,Ln,Fi=!1)=>{const we=[],Fe=[],bn=[];for(let be=0;be<=_t;be+=1){const In=Rt[be],hi=wt(In),ni=Ln(In);we.push(hi.x,hi.y,hi.z,ni.x,ni.y,ni.z),Fe.push(0,In.t,1,In.t)}for(let be=0;be<_t;be+=1){const In=be*2,hi=In+1,ni=In+2,xi=In+3;Fi?bn.push(In,ni,hi,ni,xi,hi):bn.push(In,hi,ni,ni,hi,xi)}const On=new qi;On.setAttribute("position",new ti(we,3));const vi=new ti(Fe,2);return On.setAttribute("uv",vi),On.setAttribute("uv2",vi.clone()),On.setIndex(bn),On.computeVertexNormals(),On},Bt=fx*.5,ue=Wp*.5,Pe=qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ue)).add(wt.right.clone().multiplyScalar(-Bt)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ue)).add(wt.right.clone().multiplyScalar(Bt))),Ye=qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue)).add(wt.right.clone().multiplyScalar(-Bt)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue)).add(wt.right.clone().multiplyScalar(Bt)),!0),qe=qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ue)).add(wt.right.clone().multiplyScalar(-Bt)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue)).add(wt.right.clone().multiplyScalar(-Bt)),!0),fi=qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ue)).add(wt.right.clone().multiplyScalar(Bt)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue)).add(wt.right.clone().multiplyScalar(Bt))),sn=.08,rn=.015,He=qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue-sn)).add(wt.right.clone().multiplyScalar(-Bt+rn)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue)).add(wt.right.clone().multiplyScalar(-Bt+rn)),!0),We=qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue-sn)).add(wt.right.clone().multiplyScalar(Bt-rn)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue)).add(wt.right.clone().multiplyScalar(Bt-rn)),!1),En=.22,Tn=.018,Ri=qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ue)).add(wt.right.clone().multiplyScalar(-Bt+Tn)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ue+En)).add(wt.right.clone().multiplyScalar(-Bt+Tn)),!0),Oi=qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ue)).add(wt.right.clone().multiplyScalar(Bt-Tn)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(-ue+En)).add(wt.right.clone().multiplyScalar(Bt-Tn)),!1),Ii=.14,Pi=qt(wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue-.05)).add(wt.right.clone().multiplyScalar(-Ii)),wt=>wt.pt.clone().add(wt.up.clone().multiplyScalar(ue-.05)).add(wt.right.clone().multiplyScalar(Ii)),!0);return{floorGeo:Pe,ceilGeo:Ye,leftGeo:qe,rightGeo:fi,leftSkirtGeo:Ri,rightSkirtGeo:Oi,trackRailGeo:Pi,leftCrownGeo:He,rightCrownGeo:We}},{floorGeo:an,ceilGeo:V,leftGeo:tn,rightGeo:Ae,leftSkirtGeo:Xe,rightSkirtGeo:Kt,trackRailGeo:I,leftCrownGeo:T,rightCrownGeo:Z}=me(),mt=new Ge(an,Me),St=new Ge(V,pe),dt=new Ge(tn,ve),Xt=new Ge(Ae,ve),Dt=new Ur({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),Jt=new xs({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:kn}),ae=new Ge(Xe,Jt),bt=new Ge(Kt,Jt);ae.receiveShadow=!0,bt.receiveShadow=!0;const Tt=new Ge(T,Jt),zt=new Ge(Z,Jt);Tt.receiveShadow=!1,zt.receiveShadow=!1;const Ot=new Ur({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:kn}),Ht=new Ge(I,Ot);Ht.receiveShadow=!1,mt.receiveShadow=!0,mt.castShadow=!0,St.receiveShadow=!0,St.castShadow=!0,dt&&(dt.receiveShadow=!0,dt.castShadow=!0),Xt&&(Xt.receiveShadow=!0,Xt.castShadow=!0),q.add(mt),q.add(St),dt&&q.add(dt),Xt&&q.add(Xt),q.add(ae),q.add(bt),q.add(Tt),q.add(zt),q.add(Ht);const ge=new $(0,1,0),W=new pn,Ct=new pn,At=new pn;q.add(W),q.add(Ct),q.add(At);const Ut=new Ju(16773598,D?16:24,34,Math.PI/8.4,.44,2);Ut.target=W,Ut.castShadow=!D,Ut.castShadow&&(Ut.shadow.mapSize.width=2048,Ut.shadow.mapSize.height=2048,Ut.shadow.bias=-35e-5,Ut.shadow.normalBias=.012,Ut.shadow.camera.near=.4,Ut.shadow.camera.far=34),q.add(Ut);const Mt=new Ju(12571903,D?6:9,34,Math.PI/6.5,.68,2);Mt.target=Ct,Mt.castShadow=!1,q.add(Mt);const ht=new Ju(14083583,D?5:7,28,Math.PI/7.8,.6,2);ht.target=At,ht.castShadow=!1,q.add(ht);const kt=new pn,ce=new pn;q.add(kt),q.add(ce);const de=new am(16774374,0);if(de.target=kt,de.castShadow=!D,de.castShadow){de.shadow.mapSize.width=4096,de.shadow.mapSize.height=4096,de.shadow.bias=-2e-4,de.shadow.normalBias=.005;const Rt=320;de.shadow.camera.left=-Rt,de.shadow.camera.right=Rt,de.shadow.camera.top=Rt,de.shadow.camera.bottom=-Rt,de.shadow.camera.near=1,de.shadow.camera.far=1200}q.add(de);const Re=new am(9090280,0);Re.target=ce,q.add(Re),an.computeBoundingBox(),an.computeBoundingSphere(),V.computeBoundingBox(),V.computeBoundingSphere(),tn.computeBoundingBox(),tn.computeBoundingSphere(),Ae.computeBoundingBox(),Ae.computeBoundingSphere();const bi=l.some(Rt=>Rt.installation?.mount_type==="continuous_led_wall"||Rt.installation?.mount_type==="jutting_half_wall")?l:D?l.filter((Rt,te)=>te%2===0):l,ji=[],da=[],pa=[],Na=[],qa=[],ei=[],Es=[],ci=Rt=>{if(!Rt.paused&&Rt.currentTime>0)return;const te=Rt.play();te&&typeof te.catch=="function"&&te.catch(()=>{})},Sn=setInterval(()=>{let Rt=!0;ei.forEach(te=>{(te.paused||te.readyState<2)&&(Rt=!1,ci(te))}),Rt&&ei.length>0&&clearInterval(Sn)},500);qa.push(()=>clearInterval(Sn));const Nn=new sr(1,1,.2),ma=new Va(.82,.82),La=new Ur({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),Gr=(Rt,te)=>{const qt=document.createElement("canvas");qt.width=512,qt.height=512;const Bt=qt.getContext("2d");Bt.clearRect(0,0,512,512);const ue=z.get(te);if(ue)try{S2(Bt,ue,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const We=new ko(qt);return We.colorSpace=qn,We}catch(We){console.warn(`Invalid glyph canonical sentence for panel '${te}': '${ue}'. Falling back to procedural glyph.`,We)}const Pe=512/2,Ye=512/2,qe=Rt*137.508;Bt.fillStyle="rgba(6,14,24,0.7)",Bt.beginPath(),Bt.arc(Pe,Ye,512*.42,0,Math.PI*2),Bt.fill(),Bt.strokeStyle="rgba(102,221,255,0.95)",Bt.lineWidth=2.5,Bt.lineCap="round",Bt.beginPath(),Bt.arc(Pe,Ye,512*.38,0,Math.PI*2),Bt.stroke();const fi=3+Rt%4;for(let We=0;We<fi;We++){const En=We/fi*Math.PI*2+qe,Tn=512*.08,Ri=512*.32;Bt.beginPath(),Bt.moveTo(Pe+Math.cos(En)*Tn,Ye+Math.sin(En)*Tn),Bt.lineTo(Pe+Math.cos(En)*Ri,Ye+Math.sin(En)*Ri),Bt.stroke()}const sn=2+Rt%3;for(let We=0;We<sn;We++){const En=512*(.15+We*.09),Tn=qe+We*1.2;Bt.beginPath(),Bt.arc(Pe,Ye,En,Tn,Tn+Math.PI*(.4+Rt%3*.2)),Bt.stroke()}Bt.fillStyle="rgba(102,221,255,0.85)";const rn=3+Rt%5;for(let We=0;We<rn;We++){const En=qe+We/rn*Math.PI*2,Tn=512*(.2+We%3*.06);Bt.beginPath(),Bt.arc(Pe+Math.cos(En)*Tn,Ye+Math.sin(En)*Tn,4,0,Math.PI*2),Bt.fill()}Bt.strokeStyle="rgba(102,221,255,0.5)",Bt.lineWidth=1.5,Bt.beginPath(),Bt.arc(Pe,Ye,512*.12,0,Math.PI*2),Bt.stroke(),Bt.fillStyle="rgba(102,221,255,0.95)",Bt.beginPath(),Bt.arc(Pe,Ye,6,0,Math.PI*2),Bt.fill();const He=new ko(qt);return He.colorSpace=qn,He},Vr=(Rt,te)=>{const Qt=document.createElement("canvas");Qt.width=1024,Qt.height=640;const qt=Qt.getContext("2d");qt.fillStyle="rgba(8,12,18,0.88)",qt.beginPath(),qt.roundRect(16,16,992,608,24),qt.fill(),qt.strokeStyle="rgba(102,221,255,0.25)",qt.lineWidth=2,qt.beginPath(),qt.roundRect(16,16,992,608,24),qt.stroke(),qt.fillStyle="rgba(102,221,255,0.95)",qt.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",O2(qt,Rt.toUpperCase(),60,100,900,58),qt.strokeStyle="rgba(102,221,255,0.3)",qt.lineWidth=2,qt.beginPath(),qt.moveTo(60,180),qt.lineTo(960,180),qt.stroke(),qt.fillStyle="rgba(220,230,240,0.9)";const Bt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",ue="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";qt.font=Bt,z2(qt,te,60,230,900,42,Bt,ue);const Pe=new ko(Qt);return Pe.colorSpace=qn,Pe},kr=()=>{const te=document.createElement("canvas");te.width=512,te.height=512;const Qt=te.getContext("2d"),qt=512/2,Bt=512/2;Qt.beginPath(),Qt.arc(qt,Bt,512*.42,0,Math.PI*2),Qt.fillStyle="rgba(6,14,24,0.7)",Qt.fill(),Qt.strokeStyle="rgba(255,170,51,0.9)",Qt.lineWidth=6,Qt.beginPath(),Qt.arc(qt,Bt,512*.38,0,Math.PI*2),Qt.stroke();const ue=8;for(let Ye=0;Ye<ue;Ye++){const qe=Ye/ue*Math.PI*2-Math.PI/2;Qt.strokeStyle=`rgba(255,${170+Math.round(Math.sin(Ye)*40)},51,0.8)`,Qt.lineWidth=4,Qt.beginPath(),Qt.moveTo(qt+Math.cos(qe)*512*.12,Bt+Math.sin(qe)*512*.12),Qt.lineTo(qt+Math.cos(qe)*512*.34,Bt+Math.sin(qe)*512*.34),Qt.stroke();const fi=qt+Math.cos(qe)*512*.34,sn=Bt+Math.sin(qe)*512*.34,rn=512*.06;Qt.beginPath(),Qt.moveTo(fi,sn),Qt.lineTo(fi-rn*Math.cos(qe-.4),sn-rn*Math.sin(qe-.4)),Qt.moveTo(fi,sn),Qt.lineTo(fi-rn*Math.cos(qe+.4),sn-rn*Math.sin(qe+.4)),Qt.stroke()}Qt.beginPath(),Qt.arc(qt,Bt,512*.06,0,Math.PI*2),Qt.fillStyle="rgba(255,200,80,0.95)",Qt.fill();const Pe=new ko(te);return Pe.colorSpace=qn,Pe},Oa=Rt=>{const te=ba(Rt),Qt=et.getPointAt(te),Bt=et.getPointAt(ba(te+.002)).clone().sub(Qt).normalize();let ue=new $().crossVectors(Bt,ge).normalize();ue.lengthSq()<1e-4&&(ue=new $(1,0,0));const Pe=new $().crossVectors(ue,Bt).normalize();return{point:Qt,tangent:Bt,right:ue,up:Pe}};et.getLength();const Zi=[],ga=new Va(qp*2,qp*2),_a=new Va(C2,w2);bi.forEach((Rt,te)=>{const Qt=Rt.installation,qt=ba(Qt?.placement_t??.05+te/bi.length),{point:Bt,right:ue,up:Pe}=Oa(qt),Ye=Qt?.side==="left",sn=(Qt?.side==="center"?0:Ye?-1:1)*fx*.12,rn=Bt.clone().add(ue.clone().multiplyScalar(sn)).add(Pe.clone().multiplyScalar(.5)),He=Gr(te,Rt.id);da.push(He);const We=new xs({color:16777215,emissive:new re(dx),emissiveIntensity:1.2,map:He,emissiveMap:He,transparent:!0,alphaTest:.05,side:kn,depthWrite:!1});pa.push(We);const En=new Ge(ga,We);En.position.copy(rn),En.userData={panel:Rt,isGlyph:!0},ji.push(En),q.add(En);const Tn=H.get(Rt.id),Ri=O(Tn?.label||Rt.title||""),Oi=O(Tn?.note||Rt.body||""),Ii=Vr(Ri,Oi);da.push(Ii);const Pi=new xs({color:16777215,emissive:new re(1122867),emissiveIntensity:.3,map:Ii,transparent:!0,opacity:0,side:kn,depthWrite:!0});pa.push(Pi);const wt=new Ge(_a,Pi),Ln=new Vo;Ln.add(wt),Ln.position.copy(rn),Ln.scale.setScalar(.01),Ln.visible=!1,q.add(Ln);const Fi=new fc(dx,D?6:12,20,1.5);Fi.position.copy(rn),q.add(Fi),Zi.push({mesh:En,card:Ln,panel:Rt,progress:qt,baseY:rn.y,expanded:!1,expandT:0}),t.current.push({meta:Rt,progress:qt})});let mn=!1,A=0;const k=new $,ct=new $,it=new $,at=32;for(let Rt=0;Rt<at;Rt++)it.add(et.getPointAt(Rt/at));it.divideScalar(at);const Nt=new Va(Yu*2,Yu*2),Vt=kr();da.push(Vt);const Lt=new xs({color:16777215,emissive:new re(px),emissiveIntensity:1.4,map:Vt,emissiveMap:Vt,transparent:!0,alphaTest:.05,side:kn,depthWrite:!1});pa.push(Lt);const{point:jt,up:$t}=Oa(U2),se=jt.clone().add($t.clone().multiplyScalar(1)),oe=new Ge(Nt,Lt);oe.position.copy(se),oe.userData={isExitGlyph:!0},q.add(oe);const Wt=new Va(Yu*5,Yu*5),xe=new mc({visible:!1,side:kn}),Qe=new Ge(Wt,xe);Qe.position.copy(se),Qe.userData={isExitGlyph:!0},ji.push(Qe),q.add(Qe);const fn=new fc(px,D?6:12,20,1.5);fn.position.copy(se),q.add(fn);const Ie=new lh(D?1.25:1.6,26,26);Na.push(Ie);const yn=new xs({color:16764788,emissive:new re(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});pa.push(yn);const Yt=jt.clone().add($t.clone().multiplyScalar(Wp*.52+.32)),Cn=new Ge(Ie,yn);Cn.position.copy(Yt),Cn.userData={isReentryDot:!0},ji.push(Cn),q.add(Cn);const fe=new oh(D?1.75:2.2,D?2.35:2.95,52);Na.push(fe);const Xn=new mc({color:16761948,transparent:!0,opacity:0,side:kn,depthWrite:!1});pa.push(Xn);const Wn=new Ge(fe,Xn);Wn.position.copy(Yt),q.add(Wn);const _i=new fc(16761948,0,D?34:44,2);_i.position.copy(Yt),q.add(_i);const ui=new dS,ze=new De,Mn=Rt=>{ei.forEach(ci);const te=ut.domElement.getBoundingClientRect();ze.x=(Rt.clientX-te.left)/te.width*2-1,ze.y=-((Rt.clientY-te.top)/te.height)*2+1,ui.setFromCamera(ze,tt);const Qt=ui.intersectObjects(ji,!1);if(Qt.length>0){const qt=Qt[0].object;if(qt.userData.isReentryDot&&mn){mn=!1,w(!1);return}if(qt.userData.isExitGlyph){if(mn=!mn,w(mn),mn){const Pe=tt.position.clone().clone().sub(it).normalize();k.copy(it).add(Pe.multiplyScalar(Wu)),k.y=it.y+Wu*.35,ct.copy(it)}Zi.forEach(ue=>{ue.expanded=!1});return}if(mn){mn=!1,w(!1);return}const Bt=qt.userData.panel;if(Bt){const ue=Zi.find(Pe=>Pe.panel.id===Bt.id);ue&&(ue.expanded?ue.expanded=!1:(Zi.forEach(Pe=>{Pe.expanded=!1}),ue.expanded=!0))}}else mn?(mn=!1,w(!1)):Zi.forEach(qt=>{qt.expanded=!1})};ut.domElement.addEventListener("pointerdown",Mn);const wn={x:0,y:0},hn={x:0,y:0},Ai=Rt=>{if(L||D)return;const te=ut.domElement.getBoundingClientRect(),Qt=(Rt.clientX-te.left)/te.width,qt=(Rt.clientY-te.top)/te.height;wn.x=(Qt-.5)*2,wn.y=(qt-.5)*2},Ki=()=>{wn.x=0,wn.y=0};ut.domElement.addEventListener("pointermove",Ai,{passive:!0}),ut.domElement.addEventListener("pointerleave",Ki,{passive:!0});const ja=Rt=>{Rt.preventDefault(),!mn&&(ei.forEach(ci),i.current=ba(i.current+hx*Rt.deltaY*75e-6))};ut.domElement.addEventListener("wheel",ja,{passive:!1});const _c=Rt=>{if((Rt.key==="o"||Rt.key==="O")&&(mn=!mn,w(mn),mn)){const Qt=tt.position.clone().clone().sub(it).normalize();k.copy(it).add(Qt.multiplyScalar(Wu)),k.y=it.y+Wu*.35,ct.copy(it)}};window.addEventListener("keydown",_c);let Xr=0;const rr=Rt=>{ei.forEach(ci),Xr=Rt.touches[0]?.clientY??0},Qi=Rt=>{if(Rt.preventDefault(),mn)return;const te=Rt.touches[0]?.clientY??Xr,Qt=Xr-te;i.current=ba(i.current+hx*Qt*11e-5),Xr=te};ut.domElement.addEventListener("touchstart",rr,{passive:!0}),ut.domElement.addEventListener("touchmove",Qi,{passive:!1});const Wr=()=>{Q&&(tt.aspect=Q.clientWidth/Q.clientHeight,tt.updateProjectionMatrix(),ut.setSize(Q.clientWidth,Q.clientHeight))};window.addEventListener("resize",Wr);const or=new pn,Za=new pS,Ia=new $,il=new $,Yr=new $;let al=l.length>0?l[0].id:"";const Ts=()=>{if(B)return;const Rt=Za.getDelta(),te=Za.getElapsedTime();s.current=T2(s.current,i.current,L?2.8:4.8,Rt),hn.x+=(wn.x-hn.x)*.07,hn.y+=(wn.y-hn.y)*.07;const Qt=s.current,qt=ba(Qt+(D?.008:.01)),Bt=et.getPointAt(Qt),ue=et.getPointAt(qt),Pe=et.getPointAt(ba(Qt+.002)).sub(et.getPointAt(ba(Qt-.002))).normalize();let Ye=new $().crossVectors(Pe,ge).normalize();Ye.lengthSq()<1e-4&&(Ye=new $(1,0,0));const qe=new $().crossVectors(Ye,Pe).normalize(),fi=Ye.clone().multiplyScalar(hn.x*(D?0:.62)).add(qe.clone().multiplyScalar(hn.y*(D?0:.42))),sn=L?new $:qe.clone().multiplyScalar(Math.sin(te*.45)*.12),rn=1/N2;mn&&A<1?A=Math.min(1,A+rn*Rt):!mn&&A>0&&(A=Math.max(0,A-rn*Rt));const He=A<.5?4*A*A*A:1-Math.pow(-2*A+2,3)/2;if(kt.position.copy(it),ce.position.copy(it),de.position.set(it.x+500,it.y+600,it.z-300),Re.position.set(it.x-400,it.y+150,it.z+350),He>.01){q.fog instanceof pc&&(q.fog.near=Mi.lerp(38,9999,He),q.fog.far=Mi.lerp(230,1e4,He));const we=new re(987671),Fe=new re(395794);q.background.copy(we).lerp(Fe,He),pt.intensity=Mi.lerp(.05,.08,He),Et.intensity=Mi.lerp(.08,.12,He),de.intensity=Mi.lerp(0,D?2.2:3.5,He),Re.intensity=Mi.lerp(0,D?.25:.4,He),ut.toneMappingExposure=Mi.lerp(D?.76:.72,D?1:1.1,He),[Me,ve].forEach(bn=>{bn.emissive.set(3359829),bn.emissiveIntensity=.12*He}),pe.color.set(0).lerp(new re(16777215),He),pe.toneMapped=He>.5,pe.fog=He>.5,pe.emissive.set(16777215),pe.emissiveIntensity=Mi.lerp(1,.15,He),pe.envMapIntensity=Mi.lerp(0,.1,He)}else pt.intensity=.05,Et.intensity=.08,de.intensity=0,Re.intensity=0,ut.toneMappingExposure=D?.76:.72,q.background.set(987671),[Me,ve].forEach(we=>{we.emissive.set(0),we.emissiveIntensity=0}),pe.color.set(0),pe.toneMapped=!1,pe.fog=!1,pe.emissive.set(16777215),pe.emissiveIntensity=1,pe.envMapIntensity=0;const We=qe.clone().multiplyScalar(-Wp*.2),En=Bt.clone().add(We).add(fi).add(sn),Tn=ue.clone().add(We).add(fi.multiplyScalar(.22));if(He>.99)tt.position.copy(k),tt.lookAt(ct);else if(He>.001){tt.position.lerpVectors(En,k,He);const we=Tn.clone().lerp(ct,He);tt.lookAt(we)}else tt.position.copy(En),or.position.copy(tt.position),or.lookAt(Tn),tt.quaternion.slerp(or.quaternion,1-Math.exp(-8.1*Rt));const Ri=.94+Math.sin(te*.23)*.06,Oi=ue.clone().add(We);Ut.position.copy(tt.position).add(qe.clone().multiplyScalar(2.9)).add(Ye.clone().multiplyScalar(2.1)).add(Pe.clone().multiplyScalar(-2.2)),W.position.copy(Oi).add(Ye.clone().multiplyScalar(2.5)).add(qe.clone().multiplyScalar(-.9)),Ut.intensity=(D?14:21)*Ri,Mt.position.copy(tt.position).add(qe.clone().multiplyScalar(2)).add(Ye.clone().multiplyScalar(-2.4)).add(Pe.clone().multiplyScalar(-1.1)),Ct.position.copy(Oi).add(Ye.clone().multiplyScalar(-2)).add(qe.clone().multiplyScalar(-1.4)),Mt.intensity=(D?5:8)*Ri,ht.position.copy(tt.position).add(qe.clone().multiplyScalar(1.4)).add(Pe.clone().multiplyScalar(2.8)).add(Ye.clone().multiplyScalar(.6)),At.position.copy(Oi).add(qe.clone().multiplyScalar(-.8)),ht.intensity=(D?4:6.2)*Ri,ji.forEach(we=>{const Fe=we.userData;if(!Fe||!Fe.shading||!Fe.material)return;const bn=Fe.shading,On=Fe.material,vi=Fe.video,be=Fe;let In=1;bn.lighting?.flicker_sync&&vi&&vi.readyState>=3&&(In=.88+Math.sin(te*22)*.1*Math.sin(te*6.7));let hi=1;if(bn.movement_reaction?.type==="viewing_angle_fade"){Ia.set(0,0,0),we.getWorldPosition(Ia),il.set(0,0,1).applyQuaternion(we.quaternion),Yr.copy(tt.position).sub(Ia).normalize();const xi=il,va=Yr,Ka=Math.max(0,xi.dot(va)),sl=bn.movement_reaction.cone_angle_degrees===60?3:1.5;hi=Math.pow(Ka,sl)}const ni=Fe.baseEmissive*In*hi;if(On.emissiveIntensity=ni,be.bounceLights&&be.bounceLights.length>0){const xi=be.bounceSampleCtx,va=be.bounceSampleCanvas;if(vi&&xi&&va&&(be.bounceNextSampleAt??0)<=te){const Qa=J2(vi,va,xi);if(Qa){be.bounceTargetColor||(be.bounceTargetColor=Qa.color.clone());const rl=Qa.color.clone().lerp(new re(1,.97,.93),.18);be.bounceTargetColor.copy(rl);const qr=Mi.clamp(.22+Qa.luminance*1.9,.22,2.25);be.bounceTargetIntensity=(be.bounceBaseIntensity??5)*qr*(.25+ni*1.25)}be.bounceNextSampleAt=te+1/(D?2:4)}else vi||(be.bounceTargetIntensity=(be.bounceBaseIntensity??5)*(.22+ni*1.1));const Ka=be.bounceTargetIntensity??0,sl=be.bounceCurrentIntensity??0;be.bounceCurrentIntensity=Mi.lerp(sl,Ka,1-Math.exp(-6.2*Rt)),be.bounceCurrentColor||(be.bounceCurrentColor=(be.bounceTargetColor??new re(1,1,1)).clone()),be.bounceTargetColor&&be.bounceCurrentColor.lerp(be.bounceTargetColor,1-Math.exp(-5.4*Rt)),be.bounceLights.forEach((Qa,rl)=>{const qr=Math.max(1,be.bounceLights.length-1),hh=1-rl/qr*.34;Qa.color.copy(be.bounceCurrentColor),Qa.intensity=(be.bounceCurrentIntensity??0)*hh})}}),Es.forEach(({mesh:we,basePosition:Fe,strength:bn})=>{const On=we.parent;if(!On)return;const vi=On.worldToLocal(tt.position.clone()),be=Mi.clamp(vi.x*.008,-.18,.18)*bn,In=Mi.clamp(vi.y*.006,-.14,.14)*bn;we.position.x=Fe.x+be,we.position.y=Fe.y+In}),Zi.forEach((we,Fe)=>{const{mesh:bn,card:On}=we;bn.lookAt(tt.position);const vi=Fe*.7,be=we.baseY+Math.sin(te*A2+vi)*b2;bn.position.y=be,bn.rotateZ(R2*Rt);const In=bn.material;In.emissiveIntensity=1+Math.sin(te*2+Fe)*.4;const hi=we.expanded?1:0,ni=1/D2;we.expandT<hi?we.expandT=Math.min(1,we.expandT+ni*Rt):we.expandT>hi&&(we.expandT=Math.max(0,we.expandT-ni*Rt));const xi=we.expandT,va=xi<.5?4*xi*xi*xi:1-Math.pow(-2*xi+2,3)/2;if(va>.001){On.visible=!0,On.position.copy(bn.position),On.position.y-=qp+.3,On.lookAt(tt.position),On.scale.setScalar(va);const Ka=On.children[0].material;Ka.opacity=va}else On.visible=!1;In.opacity=1-va*.4});const Ii=se.y+Math.sin(te*.8)*.35;oe.lookAt(tt.position),oe.position.y=Ii,oe.rotateZ(.15*Rt),Lt.emissiveIntensity=1.2+Math.sin(te*1.5)*.5,Qe.lookAt(tt.position),Qe.position.y=Ii;const Pi=.72+Math.sin(te*2.35)*.28,wt=Mi.smoothstep(He,.2,.95);Cn.visible=wt>.001,Wn.visible=wt>.001,Cn.scale.setScalar(.88+Pi*.28),yn.emissiveIntensity=wt*(.48+Pi*.45),_i.intensity=wt*(D?4.6:7.4)*Pi,Wn.lookAt(tt.position),Wn.scale.setScalar(.95+Pi*.18),Xn.opacity=wt*(.2+Pi*.32);let Ln=t.current[0]?.meta.id??(l.length>0?l[0].id:""),Fi=Number.POSITIVE_INFINITY;t.current.forEach(we=>{let Fe=Math.abs(Qt-we.progress);Fe>.5&&(Fe=1-Fe),Fe<Fi&&(Fi=Fe,Ln=we.meta.id)}),Ln!==al&&(al=Ln,p(Ln)),ut.render(q,tt),requestAnimationFrame(Ts)};Ts(),K=()=>{ut.domElement.removeEventListener("pointerdown",Mn),ut.domElement.removeEventListener("pointermove",Ai),ut.domElement.removeEventListener("pointerleave",Ki),ut.domElement.removeEventListener("wheel",ja),ut.domElement.removeEventListener("touchstart",rr),ut.domElement.removeEventListener("touchmove",Qi),window.removeEventListener("resize",Wr),window.removeEventListener("keydown",_c),Q.contains(ut.domElement)&&Q.removeChild(ut.domElement),ji.forEach(Rt=>{const te=Rt.userData?.video;te&&(te.pause(),te.src="",te.load())}),ei.forEach(Rt=>{Rt.pause(),Rt.src="",Rt.load()}),qa.forEach(Rt=>Rt()),da.forEach(Rt=>Rt.dispose?.()),Na.forEach(Rt=>Rt.dispose()),ga.dispose(),_a.dispose(),Gt.albedo.dispose(),Gt.normal.dispose(),Gt.roughness.dispose(),Gt.ao.dispose(),ne.albedo.dispose(),ne.normal.dispose(),ne.roughness.dispose(),ne.ao.dispose(),Ke.albedo.dispose(),Ke.normal.dispose(),Ke.roughness.dispose(),Ke.ao.dispose(),pa.forEach(Rt=>Rt.dispose()),Y.texture.dispose(),Y.dispose(),P.dispose(),Me.dispose(),ve.dispose(),Dt.dispose(),pe.dispose(),La.dispose(),Nn.dispose(),ma.dispose(),an.dispose(),V.dispose(),tn.dispose(),Ae.dispose(),Xe.dispose(),Kt.dispose(),T.dispose(),Z.dispose(),I.dispose(),Jt.dispose(),Ot.dispose(),ut.dispose()}})(),()=>{B=!0,K()}},[l,z,H,O]),An.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[An.jsx("div",{ref:r,className:"absolute inset-0"}),An.jsxs("div",{className:"absolute right-4 top-4 z-30 flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[An.jsx("span",{className:"px-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#5a5a5a]",children:C.languageLabel}),An.jsx("button",{type:"button",onClick:()=>S("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${M==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":M==="nb",children:"NO"}),An.jsx("button",{type:"button",onClick:()=>S("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${M==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":M==="en",children:"EN"})]}),_||g?An.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:_?C.loadingPanels:C.panelsFallback}):null,E?null:An.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[An.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:C.siteName}),An.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[C.activeInstallation,": ",N]})]}),E?An.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[An.jsx("style",{children:`
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
            `}),An.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:C.siteName}),An.jsx("a",{href:"#videos",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:An.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:C.outsideVideos})}),An.jsx("a",{href:"#signatures",className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:An.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:C.outsideSignatures})}),An.jsx("a",{href:"#news",className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:An.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:C.outsideAiNews})})]}):null]})}function tR(){return An.jsx("div",{className:"min-h-screen bg-[#080604]",children:An.jsx($2,{})})}SM.createRoot(document.getElementById("root")).render(An.jsx(xn.StrictMode,{children:An.jsx(tR,{})}));
