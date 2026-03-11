(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ap={exports:{}},rc={};var Ev;function vM(){if(Ev)return rc;Ev=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return rc.Fragment=t,rc.jsx=i,rc.jsxs=i,rc}var bv;function xM(){return bv||(bv=1,Ap.exports=vM()),Ap.exports}var ie=xM(),Rp={exports:{}},Ee={};var Tv;function SM(){if(Tv)return Ee;Tv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(I,Y,mt){this.props=I,this.context=Y,this.refs=M,this.updater=mt||b}S.prototype.isReactComponent={},S.prototype.setState=function(I,Y){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Y,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=S.prototype;function O(I,Y,mt){this.props=I,this.context=Y,this.refs=M,this.updater=mt||b}var D=O.prototype=new C;D.constructor=O,w(D,S.prototype),D.isPureReactComponent=!0;var B=Array.isArray;function H(){}var G={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(I,Y,mt){var Rt=mt.ref;return{$$typeof:r,type:I,key:Y,ref:Rt!==void 0?Rt:null,props:mt}}function dt(I,Y){return N(I.type,Y,I.props)}function z(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function $(I){var Y={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(mt){return Y[mt]})}var Q=/\/+/g;function nt(I,Y){return typeof I=="object"&&I!==null&&I.key!=null?$(""+I.key):Y.toString(36)}function j(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(H,H):(I.status="pending",I.then(function(Y){I.status==="pending"&&(I.status="fulfilled",I.value=Y)},function(Y){I.status==="pending"&&(I.status="rejected",I.reason=Y)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function L(I,Y,mt,Rt,Ht){var tt=typeof I;(tt==="undefined"||tt==="boolean")&&(I=null);var vt=!1;if(I===null)vt=!0;else switch(tt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(I.$$typeof){case r:case t:vt=!0;break;case _:return vt=I._init,L(vt(I._payload),Y,mt,Rt,Ht)}}if(vt)return Ht=Ht(I),vt=Rt===""?"."+nt(I,0):Rt,B(Ht)?(mt="",vt!=null&&(mt=vt.replace(Q,"$&/")+"/"),L(Ht,Y,mt,"",function(ot){return ot})):Ht!=null&&(z(Ht)&&(Ht=dt(Ht,mt+(Ht.key==null||I&&I.key===Ht.key?"":(""+Ht.key).replace(Q,"$&/")+"/")+vt)),Y.push(Ht)),1;vt=0;var Tt=Rt===""?".":Rt+":";if(B(I))for(var jt=0;jt<I.length;jt++)Rt=I[jt],tt=Tt+nt(Rt,jt),vt+=L(Rt,Y,mt,tt,Ht);else if(jt=y(I),typeof jt=="function")for(I=jt.call(I),jt=0;!(Rt=I.next()).done;)Rt=Rt.value,tt=Tt+nt(Rt,jt++),vt+=L(Rt,Y,mt,tt,Ht);else if(tt==="object"){if(typeof I.then=="function")return L(j(I),Y,mt,Rt,Ht);throw Y=String(I),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function P(I,Y,mt){if(I==null)return I;var Rt=[],Ht=0;return L(I,Rt,"","",function(tt){return Y.call(mt,tt,Ht++)}),Rt}function st(I){if(I._status===-1){var Y=I._result;Y=Y(),Y.then(function(mt){(I._status===0||I._status===-1)&&(I._status=1,I._result=mt)},function(mt){(I._status===0||I._status===-1)&&(I._status=2,I._result=mt)}),I._status===-1&&(I._status=0,I._result=Y)}if(I._status===1)return I._result.default;throw I._result}var pt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},yt={map:P,forEach:function(I,Y,mt){P(I,function(){Y.apply(this,arguments)},mt)},count:function(I){var Y=0;return P(I,function(){Y++}),Y},toArray:function(I){return P(I,function(Y){return Y})||[]},only:function(I){if(!z(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Ee.Activity=x,Ee.Children=yt,Ee.Component=S,Ee.Fragment=i,Ee.Profiler=l,Ee.PureComponent=O,Ee.StrictMode=s,Ee.Suspense=m,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(I){return G.H.useMemoCache(I)}},Ee.cache=function(I){return function(){return I.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(I,Y,mt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Rt=w({},I.props),Ht=I.key;if(Y!=null)for(tt in Y.key!==void 0&&(Ht=""+Y.key),Y)!T.call(Y,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&Y.ref===void 0||(Rt[tt]=Y[tt]);var tt=arguments.length-2;if(tt===1)Rt.children=mt;else if(1<tt){for(var vt=Array(tt),Tt=0;Tt<tt;Tt++)vt[Tt]=arguments[Tt+2];Rt.children=vt}return N(I.type,Ht,Rt)},Ee.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Ee.createElement=function(I,Y,mt){var Rt,Ht={},tt=null;if(Y!=null)for(Rt in Y.key!==void 0&&(tt=""+Y.key),Y)T.call(Y,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Ht[Rt]=Y[Rt]);var vt=arguments.length-2;if(vt===1)Ht.children=mt;else if(1<vt){for(var Tt=Array(vt),jt=0;jt<vt;jt++)Tt[jt]=arguments[jt+2];Ht.children=Tt}if(I&&I.defaultProps)for(Rt in vt=I.defaultProps,vt)Ht[Rt]===void 0&&(Ht[Rt]=vt[Rt]);return N(I,tt,Ht)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(I){return{$$typeof:d,render:I}},Ee.isValidElement=z,Ee.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:st}},Ee.memo=function(I,Y){return{$$typeof:p,type:I,compare:Y===void 0?null:Y}},Ee.startTransition=function(I){var Y=G.T,mt={};G.T=mt;try{var Rt=I(),Ht=G.S;Ht!==null&&Ht(mt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(H,pt)}catch(tt){pt(tt)}finally{Y!==null&&mt.types!==null&&(Y.types=mt.types),G.T=Y}},Ee.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},Ee.use=function(I){return G.H.use(I)},Ee.useActionState=function(I,Y,mt){return G.H.useActionState(I,Y,mt)},Ee.useCallback=function(I,Y){return G.H.useCallback(I,Y)},Ee.useContext=function(I){return G.H.useContext(I)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(I,Y){return G.H.useDeferredValue(I,Y)},Ee.useEffect=function(I,Y){return G.H.useEffect(I,Y)},Ee.useEffectEvent=function(I){return G.H.useEffectEvent(I)},Ee.useId=function(){return G.H.useId()},Ee.useImperativeHandle=function(I,Y,mt){return G.H.useImperativeHandle(I,Y,mt)},Ee.useInsertionEffect=function(I,Y){return G.H.useInsertionEffect(I,Y)},Ee.useLayoutEffect=function(I,Y){return G.H.useLayoutEffect(I,Y)},Ee.useMemo=function(I,Y){return G.H.useMemo(I,Y)},Ee.useOptimistic=function(I,Y){return G.H.useOptimistic(I,Y)},Ee.useReducer=function(I,Y,mt){return G.H.useReducer(I,Y,mt)},Ee.useRef=function(I){return G.H.useRef(I)},Ee.useState=function(I){return G.H.useState(I)},Ee.useSyncExternalStore=function(I,Y,mt){return G.H.useSyncExternalStore(I,Y,mt)},Ee.useTransition=function(){return G.H.useTransition()},Ee.version="19.2.4",Ee}var Av;function wm(){return Av||(Av=1,Rp.exports=SM()),Rp.exports}var Te=wm(),Cp={exports:{}},oc={},wp={exports:{}},Dp={};var Rv;function yM(){return Rv||(Rv=1,(function(r){function t(L,P){var st=L.length;L.push(P);t:for(;0<st;){var pt=st-1>>>1,yt=L[pt];if(0<l(yt,P))L[pt]=P,L[st]=yt,st=pt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var P=L[0],st=L.pop();if(st!==P){L[0]=st;t:for(var pt=0,yt=L.length,I=yt>>>1;pt<I;){var Y=2*(pt+1)-1,mt=L[Y],Rt=Y+1,Ht=L[Rt];if(0>l(mt,st))Rt<yt&&0>l(Ht,mt)?(L[pt]=Ht,L[Rt]=st,pt=Rt):(L[pt]=mt,L[Y]=st,pt=Y);else if(Rt<yt&&0>l(Ht,st))L[pt]=Ht,L[Rt]=st,pt=Rt;else break t}}return P}function l(L,P){var st=L.sortIndex-P.sortIndex;return st!==0?st:L.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,g=3,y=!1,b=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var P=i(p);P!==null;){if(P.callback===null)s(p);else if(P.startTime<=L)s(p),P.sortIndex=P.expirationTime,t(m,P);else break;P=i(p)}}function B(L){if(w=!1,D(L),!b)if(i(m)!==null)b=!0,H||(H=!0,$());else{var P=i(p);P!==null&&j(B,P.startTime-L)}}var H=!1,G=-1,T=5,N=-1;function dt(){return M?!0:!(r.unstable_now()-N<T)}function z(){if(M=!1,H){var L=r.unstable_now();N=L;var P=!0;try{t:{b=!1,w&&(w=!1,C(G),G=-1),y=!0;var st=g;try{e:{for(D(L),x=i(m);x!==null&&!(x.expirationTime>L&&dt());){var pt=x.callback;if(typeof pt=="function"){x.callback=null,g=x.priorityLevel;var yt=pt(x.expirationTime<=L);if(L=r.unstable_now(),typeof yt=="function"){x.callback=yt,D(L),P=!0;break e}x===i(m)&&s(m),D(L)}else s(m);x=i(m)}if(x!==null)P=!0;else{var I=i(p);I!==null&&j(B,I.startTime-L),P=!1}}break t}finally{x=null,g=st,y=!1}P=void 0}}finally{P?$():H=!1}}}var $;if(typeof O=="function")$=function(){O(z)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,nt=Q.port2;Q.port1.onmessage=z,$=function(){nt.postMessage(null)}}else $=function(){S(z,0)};function j(L,P){G=S(function(){L(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var st=g;g=P;try{return L()}finally{g=st}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var st=g;g=L;try{return P()}finally{g=st}},r.unstable_scheduleCallback=function(L,P,st){var pt=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?pt+st:pt):st=pt,L){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=st+yt,L={id:_++,callback:P,priorityLevel:L,startTime:st,expirationTime:yt,sortIndex:-1},st>pt?(L.sortIndex=st,t(p,L),i(m)===null&&L===i(p)&&(w?(C(G),G=-1):w=!0,j(B,st-pt))):(L.sortIndex=yt,t(m,L),b||y||(b=!0,H||(H=!0,$()))),L},r.unstable_shouldYield=dt,r.unstable_wrapCallback=function(L){var P=g;return function(){var st=g;g=P;try{return L.apply(this,arguments)}finally{g=st}}}})(Dp)),Dp}var Cv;function MM(){return Cv||(Cv=1,wp.exports=yM()),wp.exports}var Np={exports:{}},pi={};var wv;function EM(){if(wv)return pi;wv=1;var r=wm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return pi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,pi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},pi.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},pi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},pi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},pi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},pi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},pi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},pi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},pi.requestFormReset=function(m){s.d.r(m)},pi.unstable_batchedUpdates=function(m,p){return m(p)},pi.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},pi.useFormStatus=function(){return h.H.useHostTransitionStatus()},pi.version="19.2.4",pi}var Dv;function bM(){if(Dv)return Np.exports;Dv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Np.exports=EM(),Np.exports}var Nv;function TM(){if(Nv)return oc;Nv=1;var r=MM(),t=wm(),i=bM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case O:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:nt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return nt(e(n))}catch{}}return null}var j=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},pt=[],yt=-1;function I(e){return{current:e}}function Y(e){0>yt||(e.current=pt[yt],pt[yt]=null,yt--)}function mt(e,n){yt++,pt[yt]=e.current,e.current=n}var Rt=I(null),Ht=I(null),tt=I(null),vt=I(null);function Tt(e,n){switch(mt(tt,n),mt(Ht,e),mt(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Y_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Y_(n),e=q_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(Rt),mt(Rt,e)}function jt(){Y(Rt),Y(Ht),Y(tt)}function ot(e){e.memoizedState!==null&&mt(vt,e);var n=Rt.current,a=q_(n,e.type);n!==a&&(mt(Ht,e),mt(Rt,a))}function Ct(e){Ht.current===e&&(Y(Rt),Y(Ht)),vt.current===e&&(Y(vt),nc._currentValue=st)}var Zt,ue;function Bt(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+ue}var pe=!1;function le(e,n){if(!e||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ut){var rt=ut}Reflect.construct(e,[],St)}else{try{St.call()}catch(ut){rt=ut}e.call(St.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var V=v.split(`
`),at=R.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===at.length)for(o=V.length-1,u=at.length-1;1<=o&&0<=u&&V[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==at[u]){var gt=`
`+V[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Bt(a):""}function te(e,n){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==n&&n!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Bt("Activity");default:return""}}function F(e){try{var n="",a=null;do n+=te(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xt=Object.prototype.hasOwnProperty,Wt=r.unstable_scheduleCallback,Fe=r.unstable_cancelCallback,Kt=r.unstable_shouldYield,U=r.unstable_requestPaint,E=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,ft=r.unstable_ImmediatePriority,_t=r.unstable_UserBlockingPriority,ct=r.unstable_NormalPriority,Gt=r.unstable_LowPriority,At=r.unstable_IdlePriority,Jt=r.log,se=r.unstable_setDisableYieldValue,Mt=null,Et=null;function Lt(e){if(typeof Jt=="function"&&se(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Pt=Math.clz32?Math.clz32:W,zt=Math.log,ye=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(zt(e)/ye|0)|0}var Dt=256,wt=262144,Vt=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=bt(o):(v&=R,v!==0?u=bt(v):a||(a=R&~e,a!==0&&(u=bt(a))))):(R=o&~f,R!==0?u=bt(R):v!==0?u=bt(v):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Yt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function _e(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function je(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function Ne(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fi(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,at=e.hiddenUpdates;for(a=v&~a;0<a;){var gt=31-Pt(a),St=1<<gt;R[gt]=0,V[gt]=-1;var rt=at[gt];if(rt!==null)for(at[gt]=null,gt=0;gt<rt.length;gt++){var ut=rt[gt];ut!==null&&(ut.lane&=-536870913)}a&=~St}o!==0&&xa(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function xa(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function $a(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function vr(e,n){var a=n&-n;return a=(a&42)!==0?1:ts(a),(a&(e.suspendedLanes|n))!==0?0:a}function ts(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bi(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:gv(e.type))}function ns(e,n){var a=P.p;try{return P.p=e,n()}finally{P.p=a}}var Ai=Math.random().toString(36).slice(2),xn="__reactFiber$"+Ai,En="__reactProps$"+Ai,zi="__reactContainer$"+Ai,On="__reactEvents$"+Ai,Pa="__reactListeners$"+Ai,Fa="__reactHandles$"+Ai,Us="__reactResources$"+Ai,Sa="__reactMarker$"+Ai;function bn(e){delete e[xn],delete e[En],delete e[On],delete e[Pa],delete e[Fa]}function Ri(e){var n=e[xn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[xn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=tv(e);e!==null;){if(a=e[xn])return a;e=tv(e)}return n}e=a,a=e.parentNode}return null}function is(e){if(e=e[xn]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ba(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function A(e){var n=e[Us];return n||(n=e[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[Sa]=!0}var lt=new Set,it={};function J(e,n){Nt(e,n),Nt(e+"Capture",n)}function Nt(e,n){for(it[e]=n,e=0;e<n.length;e++)lt.add(n[e])}var qt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},ee={};function re(e){return Xt.call(ee,e)?!0:Xt.call(It,e)?!1:qt.test(e)?ee[e]=!0:(It[e]=!0,!1)}function ve(e,n,a){if(re(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Me(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function be(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ue(e){if(!e._valueTracker){var n=mn(e)?"checked":"value";e._valueTracker=hn(e,n,""+e[n])}}function Cn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=mn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function $t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ke=/[\n"\\]/g;function he(e){return e.replace(ke,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wn(e,n,a,o,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+be(n)):e.value!==""+be(n)&&(e.value=""+be(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?tn(e,v,be(n)):a!=null?tn(e,v,be(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+be(R):e.removeAttribute("name")}function Qn(e,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ue(e);return}a=a!=null?""+be(a):"",n=n!=null?""+be(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ue(e)}function tn(e,n,a){n==="number"&&$t(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ai(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+be(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ze(e,n,a){if(n!=null&&(n=""+be(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+be(a):""}function Sn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(j(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=be(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ue(e)}function Yn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ci(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function wi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ci(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ci(e,f,n[f])}function Hi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ya(e){return Nh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var lo=null;function xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,Gi=null;function xl(e){var n=is(e);if(n&&(e=n.stateNode)){var a=e[En]||null;t:switch(e=n.stateNode,n.type){case"input":if(wn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[En]||null;if(!u)throw Error(s(90));wn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Cn(o)}break t;case"textarea":Ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ai(e,!!a.multiple,n,!1)}}}var Sr=!1;function Ls(e,n,a){if(Sr)return e(n,a);Sr=!0;try{var o=e(n);return o}finally{if(Sr=!1,(za!==null||Gi!==null)&&(mu(),za&&(n=za,e=Gi,Gi=za=null,xl(n),e)))for(n=0;n<e.length;n++)xl(e[n])}}function as(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yr=!1;if(ta)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){yr=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{yr=!1}var vi=null,Ha=null,Mr=null;function Sl(){if(Mr)return Mr;var e,n=Ha,a=n.length,o,u="value"in vi?vi.value:vi.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return Mr=u.slice(e,1<o?1-o:void 0)}function Er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Tr(){return!1}function si(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?br:Tr,this.isPropagationStopped=Tr,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ar=si(Ga),ss=x({},Ga,{view:0,detail:0}),Lc=si(ss),Rr,co,Is,Cr=x({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(Rr=e.screenX-Is.screenX,co=e.screenY-Is.screenY):co=Rr=0,Is=e),Rr)},movementY:function(e){return"movementY"in e?e.movementY:co}}),yl=si(Cr),Ot=x({},Cr,{dataTransfer:0}),ce=si(Ot),fe=x({},ss,{relatedTarget:0}),ae=si(fe),kt=x({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Se=si(kt),Xe=x({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nn=si(Xe),an=x({},Ga,{data:0}),fi=si(an),xi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Je={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sn(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Je[e])?!!n[e]:!1}function gn(){return sn}var In=x({},ss,{key:function(e){if(e.key){var n=xi[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gn,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ea=si(In),rs=x({},Cr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ma=si(rs),na=x({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gn}),Ut=si(na),Pn=x({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vi=si(Pn),Be=x({},Cr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ge=si(Be),An=x({},Ga,{newState:0,oldState:0}),Fn=si(An),Si=[9,13,27,32],Ae=ta&&"CompositionEvent"in window,yn=null;ta&&"documentMode"in document&&(yn=document.documentMode);var hi=ta&&"TextEvent"in window&&!yn,Jn=ta&&(!Ae||yn&&8<yn&&11>=yn),di=" ",ia=!1;function Ps(e,n){switch(e){case"keyup":return Si.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Di=!1;function Ml(e,n){switch(e){case"compositionend":return uo(n);case"keypress":return n.which!==32?null:(ia=!0,di);case"textInput":return e=n.data,e===di&&ia?null:e;default:return null}}function El(e,n){if(Di)return e==="compositionend"||!Ae&&Ps(e,n)?(e=Sl(),Mr=Ha=vi=null,Di=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jn&&n.locale!=="ko"?null:n.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Uh[e.type]:n==="textarea"}function a0(e,n,a,o){za?Gi?Gi.push(o):Gi=[o]:za=o,n=Mu(n,"onChange"),0<n.length&&(a=new Ar("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var bl=null,Tl=null;function WS(e){H_(e,0)}function Oc(e){var n=Ba(e);if(Cn(n))return e}function s0(e,n){if(e==="change")return n}var r0=!1;if(ta){var Lh;if(ta){var Oh="oninput"in document;if(!Oh){var o0=document.createElement("div");o0.setAttribute("oninput","return;"),Oh=typeof o0.oninput=="function"}Lh=Oh}else Lh=!1;r0=Lh&&(!document.documentMode||9<document.documentMode)}function l0(){bl&&(bl.detachEvent("onpropertychange",c0),Tl=bl=null)}function c0(e){if(e.propertyName==="value"&&Oc(Tl)){var n=[];a0(n,Tl,e,xr(e)),Ls(WS,n)}}function YS(e,n,a){e==="focusin"?(l0(),bl=n,Tl=a,bl.attachEvent("onpropertychange",c0)):e==="focusout"&&l0()}function qS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oc(Tl)}function jS(e,n){if(e==="click")return Oc(n)}function ZS(e,n){if(e==="input"||e==="change")return Oc(n)}function KS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ki=typeof Object.is=="function"?Object.is:KS;function Al(e,n){if(ki(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Xt.call(n,u)||!ki(e[u],n[u]))return!1}return!0}function u0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function f0(e,n){var a=u0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=u0(a)}}function h0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?h0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function d0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$t(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$t(e.document)}return n}function Ih(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var QS=ta&&"documentMode"in document&&11>=document.documentMode,fo=null,Ph=null,Rl=null,Fh=!1;function p0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fh||fo==null||fo!==$t(o)||(o=fo,"selectionStart"in o&&Ih(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Rl&&Al(Rl,o)||(Rl=o,o=Mu(Ph,"onSelect"),0<o.length&&(n=new Ar("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=fo)))}function wr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ho={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionrun:wr("Transition","TransitionRun"),transitionstart:wr("Transition","TransitionStart"),transitioncancel:wr("Transition","TransitionCancel"),transitionend:wr("Transition","TransitionEnd")},Bh={},m0={};ta&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Dr(e){if(Bh[e])return Bh[e];if(!ho[e])return e;var n=ho[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in m0)return Bh[e]=n[a];return e}var g0=Dr("animationend"),_0=Dr("animationiteration"),v0=Dr("animationstart"),JS=Dr("transitionrun"),$S=Dr("transitionstart"),ty=Dr("transitioncancel"),x0=Dr("transitionend"),S0=new Map,zh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zh.push("scrollEnd");function Ea(e,n){S0.set(e,n),J(n,[e])}var Ic=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},aa=[],po=0,Hh=0;function Pc(){for(var e=po,n=Hh=po=0;n<e;){var a=aa[n];aa[n++]=null;var o=aa[n];aa[n++]=null;var u=aa[n];aa[n++]=null;var f=aa[n];if(aa[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&y0(a,u,f)}}function Fc(e,n,a,o){aa[po++]=e,aa[po++]=n,aa[po++]=a,aa[po++]=o,Hh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gh(e,n,a,o){return Fc(e,n,a,o),Bc(e)}function Nr(e,n){return Fc(e,null,null,n),Bc(e)}function y0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Bc(e){if(50<Zl)throw Zl=0,Kd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var mo={};function ey(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(e,n,a,o){return new ey(e,n,a,o)}function Vh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function os(e,n){var a=e.alternate;return a===null?(a=Xi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function M0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function zc(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Vh(e)&&(v=1);else if(typeof e=="string")v=rM(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Xi(31,a,n,u),e.elementType=N,e.lanes=f,e;case w:return Ur(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=Xi(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case B:return e=Xi(13,a,n,u),e.elementType=B,e.lanes=f,e;case H:return e=Xi(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:v=10;break t;case C:v=9;break t;case D:v=11;break t;case G:v=14;break t;case T:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Xi(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ur(e,n,a,o){return e=Xi(7,e,o,n),e.lanes=a,e}function kh(e,n,a){return e=Xi(6,e,null,n),e.lanes=a,e}function E0(e){var n=Xi(18,null,null,0);return n.stateNode=e,n}function Xh(e,n,a){return n=Xi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var b0=new WeakMap;function sa(e,n){if(typeof e=="object"&&e!==null){var a=b0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:F(n)},b0.set(e,n),n)}return{value:e,source:n,stack:F(n)}}var go=[],_o=0,Hc=null,Cl=0,ra=[],oa=0,Fs=null,Va=1,ka="";function ls(e,n){go[_o++]=Cl,go[_o++]=Hc,Hc=e,Cl=n}function T0(e,n,a){ra[oa++]=Va,ra[oa++]=ka,ra[oa++]=Fs,Fs=e;var o=Va;e=ka;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Va=1<<32-Pt(n)+u|a<<u|o,ka=f+e}else Va=1<<f|a<<u|o,ka=e}function Wh(e){e.return!==null&&(ls(e,1),T0(e,1,0))}function Yh(e){for(;e===Hc;)Hc=go[--_o],go[_o]=null,Cl=go[--_o],go[_o]=null;for(;e===Fs;)Fs=ra[--oa],ra[oa]=null,ka=ra[--oa],ra[oa]=null,Va=ra[--oa],ra[oa]=null}function A0(e,n){ra[oa++]=Va,ra[oa++]=ka,ra[oa++]=Fs,Va=n.id,ka=n.overflow,Fs=e}var ri=null,_n=null,Ve=!1,Bs=null,la=!1,qh=Error(s(519));function zs(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wl(sa(n,e)),qh}function R0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[xn]=e,n[En]=o,a){case"dialog":Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":case"embed":Pe("load",n);break;case"video":case"audio":for(a=0;a<Ql.length;a++)Pe(Ql[a],n);break;case"source":Pe("error",n);break;case"img":case"image":case"link":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"input":Pe("invalid",n),Qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Pe("invalid",n);break;case"textarea":Pe("invalid",n),Sn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||X_(n.textContent,a)?(o.popover!=null&&(Pe("beforetoggle",n),Pe("toggle",n)),o.onScroll!=null&&Pe("scroll",n),o.onScrollEnd!=null&&Pe("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||zs(e,!0)}function C0(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 31:case 13:la=!1;return;case 27:case 3:la=!0;return;default:ri=ri.return}}function vo(e){if(e!==ri)return!1;if(!Ve)return C0(e),Ve=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fp(e.type,e.memoizedProps)),a=!a),a&&_n&&zs(e),C0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_n=$_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_n=$_(e)}else n===27?(n=_n,$s(e.type)?(e=gp,gp=null,_n=e):_n=n):_n=ri?ua(e.stateNode.nextSibling):null;return!0}function Lr(){_n=ri=null,Ve=!1}function jh(){var e=Bs;return e!==null&&(Oi===null?Oi=e:Oi.push.apply(Oi,e),Bs=null),e}function wl(e){Bs===null?Bs=[e]:Bs.push(e)}var Zh=I(null),Or=null,cs=null;function Hs(e,n,a){mt(Zh,n._currentValue),n._currentValue=a}function us(e){e._currentValue=Zh.current,Y(Zh)}function Kh(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Qh(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Kh(f.return,a,e),o||(v=null);break t}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Kh(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function xo(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;ki(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===vt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(nc):e=[nc])}u=u.return}e!==null&&Qh(n,e,a,o),n.flags|=262144}function Gc(e){for(e=e.firstContext;e!==null;){if(!ki(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ir(e){Or=e,cs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oi(e){return w0(Or,e)}function Vc(e,n){return Or===null&&Ir(e),w0(e,n)}function w0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},cs===null){if(e===null)throw Error(s(308));cs=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else cs=cs.next=n;return a}var ny=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},iy=r.unstable_scheduleCallback,ay=r.unstable_NormalPriority,Hn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jh(){return{controller:new ny,data:new Map,refCount:0}}function Dl(e){e.refCount--,e.refCount===0&&iy(ay,function(){e.controller.abort()})}var Nl=null,$h=0,So=0,yo=null;function sy(e,n){if(Nl===null){var a=Nl=[];$h=0,So=np(),yo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $h++,n.then(D0,D0),n}function D0(){if(--$h===0&&Nl!==null){yo!==null&&(yo.status="fulfilled");var e=Nl;Nl=null,So=0,yo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ry(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var N0=L.S;L.S=function(e,n){p_=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&sy(e,n),N0!==null&&N0(e,n)};var Pr=I(null);function td(){var e=Pr.current;return e!==null?e:dn.pooledCache}function kc(e,n){n===null?mt(Pr,Pr.current):mt(Pr,n.pool)}function U0(){var e=td();return e===null?null:{parent:Hn._currentValue,pool:e}}var Mo=Error(s(460)),ed=Error(s(474)),Xc=Error(s(542)),Wc={then:function(){}};function L0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function O0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,P0(e),e;default:if(typeof n.status=="string")n.then($i,$i);else{if(e=dn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,P0(e),e}throw Br=n,Mo}}function Fr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Br=a,Mo):a}}var Br=null;function I0(){if(Br===null)throw Error(s(459));var e=Br;return Br=null,e}function P0(e){if(e===Mo||e===Xc)throw Error(s(483))}var Eo=null,Ul=0;function Yc(e){var n=Ul;return Ul+=1,Eo===null&&(Eo=[]),O0(Eo,e,n)}function Ll(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function qc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function F0(e){function n(Z,k){if(e){var et=Z.deletions;et===null?(Z.deletions=[k],Z.flags|=16):et.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=os(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<k?(Z.flags|=67108866,k):et):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,k,et,xt){return k===null||k.tag!==6?(k=kh(et,Z.mode,xt),k.return=Z,k):(k=u(k,et),k.return=Z,k)}function V(Z,k,et,xt){var de=et.type;return de===w?gt(Z,k,et.props.children,xt,et.key):k!==null&&(k.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===T&&Fr(de)===k.type)?(k=u(k,et.props),Ll(k,et),k.return=Z,k):(k=zc(et.type,et.key,et.props,null,Z.mode,xt),Ll(k,et),k.return=Z,k)}function at(Z,k,et,xt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Xh(et,Z.mode,xt),k.return=Z,k):(k=u(k,et.children||[]),k.return=Z,k)}function gt(Z,k,et,xt,de){return k===null||k.tag!==7?(k=Ur(et,Z.mode,xt,de),k.return=Z,k):(k=u(k,et),k.return=Z,k)}function St(Z,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=kh(""+k,Z.mode,et),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return et=zc(k.type,k.key,k.props,null,Z.mode,et),Ll(et,k),et.return=Z,et;case b:return k=Xh(k,Z.mode,et),k.return=Z,k;case T:return k=Fr(k),St(Z,k,et)}if(j(k)||$(k))return k=Ur(k,Z.mode,et,null),k.return=Z,k;if(typeof k.then=="function")return St(Z,Yc(k),et);if(k.$$typeof===O)return St(Z,Vc(Z,k),et);qc(Z,k)}return null}function rt(Z,k,et,xt){var de=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return de!==null?null:R(Z,k,""+et,xt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===de?V(Z,k,et,xt):null;case b:return et.key===de?at(Z,k,et,xt):null;case T:return et=Fr(et),rt(Z,k,et,xt)}if(j(et)||$(et))return de!==null?null:gt(Z,k,et,xt,null);if(typeof et.then=="function")return rt(Z,k,Yc(et),xt);if(et.$$typeof===O)return rt(Z,k,Vc(Z,et),xt);qc(Z,et)}return null}function ut(Z,k,et,xt,de){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Z=Z.get(et)||null,R(k,Z,""+xt,de);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return Z=Z.get(xt.key===null?et:xt.key)||null,V(k,Z,xt,de);case b:return Z=Z.get(xt.key===null?et:xt.key)||null,at(k,Z,xt,de);case T:return xt=Fr(xt),ut(Z,k,et,xt,de)}if(j(xt)||$(xt))return Z=Z.get(et)||null,gt(k,Z,xt,de,null);if(typeof xt.then=="function")return ut(Z,k,et,Yc(xt),de);if(xt.$$typeof===O)return ut(Z,k,et,Vc(k,xt),de);qc(k,xt)}return null}function ne(Z,k,et,xt){for(var de=null,Ke=null,oe=k,we=k=0,He=null;oe!==null&&we<et.length;we++){oe.index>we?(He=oe,oe=null):He=oe.sibling;var Qe=rt(Z,oe,et[we],xt);if(Qe===null){oe===null&&(oe=He);break}e&&oe&&Qe.alternate===null&&n(Z,oe),k=f(Qe,k,we),Ke===null?de=Qe:Ke.sibling=Qe,Ke=Qe,oe=He}if(we===et.length)return a(Z,oe),Ve&&ls(Z,we),de;if(oe===null){for(;we<et.length;we++)oe=St(Z,et[we],xt),oe!==null&&(k=f(oe,k,we),Ke===null?de=oe:Ke.sibling=oe,Ke=oe);return Ve&&ls(Z,we),de}for(oe=o(oe);we<et.length;we++)He=ut(oe,Z,we,et[we],xt),He!==null&&(e&&He.alternate!==null&&oe.delete(He.key===null?we:He.key),k=f(He,k,we),Ke===null?de=He:Ke.sibling=He,Ke=He);return e&&oe.forEach(function(ar){return n(Z,ar)}),Ve&&ls(Z,we),de}function ge(Z,k,et,xt){if(et==null)throw Error(s(151));for(var de=null,Ke=null,oe=k,we=k=0,He=null,Qe=et.next();oe!==null&&!Qe.done;we++,Qe=et.next()){oe.index>we?(He=oe,oe=null):He=oe.sibling;var ar=rt(Z,oe,Qe.value,xt);if(ar===null){oe===null&&(oe=He);break}e&&oe&&ar.alternate===null&&n(Z,oe),k=f(ar,k,we),Ke===null?de=ar:Ke.sibling=ar,Ke=ar,oe=He}if(Qe.done)return a(Z,oe),Ve&&ls(Z,we),de;if(oe===null){for(;!Qe.done;we++,Qe=et.next())Qe=St(Z,Qe.value,xt),Qe!==null&&(k=f(Qe,k,we),Ke===null?de=Qe:Ke.sibling=Qe,Ke=Qe);return Ve&&ls(Z,we),de}for(oe=o(oe);!Qe.done;we++,Qe=et.next())Qe=ut(oe,Z,we,Qe.value,xt),Qe!==null&&(e&&Qe.alternate!==null&&oe.delete(Qe.key===null?we:Qe.key),k=f(Qe,k,we),Ke===null?de=Qe:Ke.sibling=Qe,Ke=Qe);return e&&oe.forEach(function(_M){return n(Z,_M)}),Ve&&ls(Z,we),de}function un(Z,k,et,xt){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var de=et.key;k!==null;){if(k.key===de){if(de=et.type,de===w){if(k.tag===7){a(Z,k.sibling),xt=u(k,et.props.children),xt.return=Z,Z=xt;break t}}else if(k.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===T&&Fr(de)===k.type){a(Z,k.sibling),xt=u(k,et.props),Ll(xt,et),xt.return=Z,Z=xt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}et.type===w?(xt=Ur(et.props.children,Z.mode,xt,et.key),xt.return=Z,Z=xt):(xt=zc(et.type,et.key,et.props,null,Z.mode,xt),Ll(xt,et),xt.return=Z,Z=xt)}return v(Z);case b:t:{for(de=et.key;k!==null;){if(k.key===de)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(Z,k.sibling),xt=u(k,et.children||[]),xt.return=Z,Z=xt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}xt=Xh(et,Z.mode,xt),xt.return=Z,Z=xt}return v(Z);case T:return et=Fr(et),un(Z,k,et,xt)}if(j(et))return ne(Z,k,et,xt);if($(et)){if(de=$(et),typeof de!="function")throw Error(s(150));return et=de.call(et),ge(Z,k,et,xt)}if(typeof et.then=="function")return un(Z,k,Yc(et),xt);if(et.$$typeof===O)return un(Z,k,Vc(Z,et),xt);qc(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(Z,k.sibling),xt=u(k,et),xt.return=Z,Z=xt):(a(Z,k),xt=kh(et,Z.mode,xt),xt.return=Z,Z=xt),v(Z)):a(Z,k)}return function(Z,k,et,xt){try{Ul=0;var de=un(Z,k,et,xt);return Eo=null,de}catch(oe){if(oe===Mo||oe===Xc)throw oe;var Ke=Xi(29,oe,null,Z.mode);return Ke.lanes=xt,Ke.return=Z,Ke}}}var zr=F0(!0),B0=F0(!1),Gs=!1;function nd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function id(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ks(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,($e&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Bc(e),y0(e,null,a),n}return Fc(e,o,n,a),Bc(e)}function Ol(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$a(e,a)}}function ad(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var sd=!1;function Il(){if(sd){var e=yo;if(e!==null)throw e}}function Pl(e,n,a,o){sd=!1;var u=e.updateQueue;Gs=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,at=V.next;V.next=null,v===null?f=at:v.next=at,v=V;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,R=gt.lastBaseUpdate,R!==v&&(R===null?gt.firstBaseUpdate=at:R.next=at,gt.lastBaseUpdate=V))}if(f!==null){var St=u.baseState;v=0,gt=at=V=null,R=f;do{var rt=R.lane&-536870913,ut=rt!==R.lane;if(ut?(ze&rt)===rt:(o&rt)===rt){rt!==0&&rt===So&&(sd=!0),gt!==null&&(gt=gt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var ne=e,ge=R;rt=n;var un=a;switch(ge.tag){case 1:if(ne=ge.payload,typeof ne=="function"){St=ne.call(un,St,rt);break t}St=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ge.payload,rt=typeof ne=="function"?ne.call(un,St,rt):ne,rt==null)break t;St=x({},St,rt);break t;case 2:Gs=!0}}rt=R.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},gt===null?(at=gt=ut,V=St):gt=gt.next=ut,v|=rt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);gt===null&&(V=St),u.baseState=V,u.firstBaseUpdate=at,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),js|=v,e.lanes=v,e.memoizedState=St}}function z0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function H0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)z0(a[e],n)}var bo=I(null),jc=I(0);function G0(e,n){e=xs,mt(jc,e),mt(bo,n),xs=e|n.baseLanes}function rd(){mt(jc,xs),mt(bo,bo.current)}function od(){xs=jc.current,Y(bo),Y(jc)}var Wi=I(null),ca=null;function Xs(e){var n=e.alternate;mt(Bn,Bn.current&1),mt(Wi,e),ca===null&&(n===null||bo.current!==null||n.memoizedState!==null)&&(ca=e)}function ld(e){mt(Bn,Bn.current),mt(Wi,e),ca===null&&(ca=e)}function V0(e){e.tag===22?(mt(Bn,Bn.current),mt(Wi,e),ca===null&&(ca=e)):Ws()}function Ws(){mt(Bn,Bn.current),mt(Wi,Wi.current)}function Yi(e){Y(Wi),ca===e&&(ca=null),Y(Bn)}var Bn=I(0);function Zc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pp(a)||mp(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fs=0,Re=null,ln=null,Gn=null,Kc=!1,To=!1,Hr=!1,Qc=0,Fl=0,Ao=null,oy=0;function Nn(){throw Error(s(321))}function cd(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ki(e[a],n[a]))return!1;return!0}function ud(e,n,a,o,u,f){return fs=f,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?Tg:Td,Hr=!1,f=a(o,u),Hr=!1,To&&(f=X0(n,a,o,u)),k0(e),f}function k0(e){L.H=Hl;var n=ln!==null&&ln.next!==null;if(fs=0,Gn=ln=Re=null,Kc=!1,Fl=0,Ao=null,n)throw Error(s(300));e===null||Vn||(e=e.dependencies,e!==null&&Gc(e)&&(Vn=!0))}function X0(e,n,a,o){Re=e;var u=0;do{if(To&&(Ao=null),Fl=0,To=!1,25<=u)throw Error(s(301));if(u+=1,Gn=ln=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Ag,f=n(a,o)}while(To);return f}function ly(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?Bl(n):n,e=e.useState()[0],(ln!==null?ln.memoizedState:null)!==e&&(Re.flags|=1024),n}function fd(){var e=Qc!==0;return Qc=0,e}function hd(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function dd(e){if(Kc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Kc=!1}fs=0,Gn=ln=Re=null,To=!1,Fl=Qc=0,Ao=null}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gn===null?Re.memoizedState=Gn=e:Gn=Gn.next=e,Gn}function zn(){if(ln===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=ln.next;var n=Gn===null?Re.memoizedState:Gn.next;if(n!==null)Gn=n,ln=e;else{if(e===null)throw Re.alternate===null?Error(s(467)):Error(s(310));ln=e,e={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},Gn===null?Re.memoizedState=Gn=e:Gn=Gn.next=e}return Gn}function Jc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(e){var n=Fl;return Fl+=1,Ao===null&&(Ao=[]),e=O0(Ao,e,n),n=Re,(Gn===null?n.memoizedState:Gn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Tg:Td),e}function $c(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bl(e);if(e.$$typeof===O)return oi(e)}throw Error(s(438,String(e)))}function pd(e){var n=null,a=Re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Jc(),Re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=dt;return n.index++,a}function hs(e,n){return typeof n=="function"?n(e):n}function tu(e){var n=zn();return md(n,ln,e)}function md(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,V=null,at=n,gt=!1;do{var St=at.lane&-536870913;if(St!==at.lane?(ze&St)===St:(fs&St)===St){var rt=at.revertLane;if(rt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),St===So&&(gt=!0);else if((fs&rt)===rt){at=at.next,rt===So&&(gt=!0);continue}else St={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},V===null?(R=V=St,v=f):V=V.next=St,Re.lanes|=rt,js|=rt;St=at.action,Hr&&a(f,St),f=at.hasEagerState?at.eagerState:a(f,St)}else rt={lane:St,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},V===null?(R=V=rt,v=f):V=V.next=rt,Re.lanes|=St,js|=St;at=at.next}while(at!==null&&at!==n);if(V===null?v=f:V.next=R,!ki(f,e.memoizedState)&&(Vn=!0,gt&&(a=yo,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function gd(e){var n=zn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);ki(f,n.memoizedState)||(Vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function W0(e,n,a){var o=Re,u=zn(),f=Ve;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ki((ln||u).memoizedState,a);if(v&&(u.memoizedState=a,Vn=!0),u=u.queue,xd(j0.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||Gn!==null&&Gn.memoizedState.tag&1){if(o.flags|=2048,Ro(9,{destroy:void 0},q0.bind(null,o,u,a,n),null),dn===null)throw Error(s(349));f||(fs&127)!==0||Y0(o,n,a)}return a}function Y0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Re.updateQueue,n===null?(n=Jc(),Re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function q0(e,n,a,o){n.value=a,n.getSnapshot=o,Z0(n)&&K0(e)}function j0(e,n,a){return a(function(){Z0(n)&&K0(e)})}function Z0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ki(e,a)}catch{return!0}}function K0(e){var n=Nr(e,2);n!==null&&Ii(n,e,2)}function _d(e){var n=yi();if(typeof e=="function"){var a=e;if(e=a(),Hr){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},n}function Q0(e,n,a,o){return e.baseState=a,md(e,ln,typeof o=="function"?o:hs)}function cy(e,n,a,o,u){if(iu(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,J0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function J0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var R=a(u,o),V=L.S;V!==null&&V(v,R),$0(e,n,R)}catch(at){vd(e,n,at)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(u,o),$0(e,n,f)}catch(at){vd(e,n,at)}}function $0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){tg(e,n,o)},function(o){return vd(e,n,o)}):tg(e,n,a)}function tg(e,n,a){n.status="fulfilled",n.value=a,eg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,J0(e,a)))}function vd(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,eg(n),n=n.next;while(n!==o)}e.action=null}function eg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ng(e,n){return n}function ig(e,n){if(Ve){var a=dn.formState;if(a!==null){t:{var o=Re;if(Ve){if(_n){e:{for(var u=_n,f=la;u.nodeType!==8;){if(!f){u=null;break e}if(u=ua(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){_n=ua(u.nextSibling),o=u.data==="F!";break t}}zs(o)}o=!1}o&&(n=a[0])}}return a=yi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ng,lastRenderedState:n},a.queue=o,a=Mg.bind(null,Re,o),o.dispatch=a,o=_d(!1),f=bd.bind(null,Re,!1,o.queue),o=yi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=cy.bind(null,Re,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function ag(e){var n=zn();return sg(n,ln,e)}function sg(e,n,a){if(n=md(e,n,ng)[0],e=tu(hs)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Bl(n)}catch(v){throw v===Mo?Xc:v}else o=n;n=zn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Re.flags|=2048,Ro(9,{destroy:void 0},uy.bind(null,u,a),null)),[o,f,e]}function uy(e,n){e.action=n}function rg(e){var n=zn(),a=ln;if(a!==null)return sg(n,a,e);zn(),n=n.memoizedState,a=zn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ro(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Re.updateQueue,n===null&&(n=Jc(),Re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function og(){return zn().memoizedState}function eu(e,n,a,o){var u=yi();Re.flags|=e,u.memoizedState=Ro(1|n,{destroy:void 0},a,o===void 0?null:o)}function nu(e,n,a,o){var u=zn();o=o===void 0?null:o;var f=u.memoizedState.inst;ln!==null&&o!==null&&cd(o,ln.memoizedState.deps)?u.memoizedState=Ro(n,f,a,o):(Re.flags|=e,u.memoizedState=Ro(1|n,f,a,o))}function lg(e,n){eu(8390656,8,e,n)}function xd(e,n){nu(2048,8,e,n)}function fy(e){Re.flags|=4;var n=Re.updateQueue;if(n===null)n=Jc(),Re.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function cg(e){var n=zn().memoizedState;return fy({ref:n,nextImpl:e}),function(){if(($e&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ug(e,n){return nu(4,2,e,n)}function fg(e,n){return nu(4,4,e,n)}function hg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dg(e,n,a){a=a!=null?a.concat([e]):null,nu(4,4,hg.bind(null,n,e),a)}function Sd(){}function pg(e,n){var a=zn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&cd(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function mg(e,n){var a=zn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&cd(n,o[1]))return o[0];if(o=e(),Hr){Lt(!0);try{e()}finally{Lt(!1)}}return a.memoizedState=[o,n],o}function yd(e,n,a){return a===void 0||(fs&1073741824)!==0&&(ze&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=g_(),Re.lanes|=e,js|=e,a)}function gg(e,n,a,o){return ki(a,n)?a:bo.current!==null?(e=yd(e,a,o),ki(e,n)||(Vn=!0),e):(fs&42)===0||(fs&1073741824)!==0&&(ze&261930)===0?(Vn=!0,e.memoizedState=a):(e=g_(),Re.lanes|=e,js|=e,n)}function _g(e,n,a,o,u){var f=P.p;P.p=f!==0&&8>f?f:8;var v=L.T,R={};L.T=R,bd(e,!1,n,a);try{var V=u(),at=L.S;if(at!==null&&at(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var gt=ry(V,o);zl(e,n,gt,Zi(e))}else zl(e,n,o,Zi(e))}catch(St){zl(e,n,{then:function(){},status:"rejected",reason:St},Zi())}finally{P.p=f,v!==null&&R.types!==null&&(v.types=R.types),L.T=v}}function hy(){}function Md(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=vg(e).queue;_g(e,u,n,st,a===null?hy:function(){return xg(e),a(o)})}function vg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function xg(e){var n=vg(e);n.next===null&&(n=e.alternate.memoizedState),zl(e,n.next.queue,{},Zi())}function Ed(){return oi(nc)}function Sg(){return zn().memoizedState}function yg(){return zn().memoizedState}function dy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zi();e=Vs(a);var o=ks(n,e,a);o!==null&&(Ii(o,n,a),Ol(o,n,a)),n={cache:Jh()},e.payload=n;return}n=n.return}}function py(e,n,a){var o=Zi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},iu(e)?Eg(n,a):(a=Gh(e,n,a,o),a!==null&&(Ii(a,e,o),bg(a,n,o)))}function Mg(e,n,a){var o=Zi();zl(e,n,a,o)}function zl(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(iu(e))Eg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,ki(R,v))return Fc(e,n,u,0),dn===null&&Pc(),!1}catch{}if(a=Gh(e,n,u,o),a!==null)return Ii(a,e,o),bg(a,n,o),!0}return!1}function bd(e,n,a,o){if(o={lane:2,revertLane:np(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},iu(e)){if(n)throw Error(s(479))}else n=Gh(e,a,o,2),n!==null&&Ii(n,e,2)}function iu(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function Eg(e,n){To=Kc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function bg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$a(e,a)}}var Hl={readContext:oi,use:$c,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useLayoutEffect:Nn,useInsertionEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useSyncExternalStore:Nn,useId:Nn,useHostTransitionStatus:Nn,useFormState:Nn,useActionState:Nn,useOptimistic:Nn,useMemoCache:Nn,useCacheRefresh:Nn};Hl.useEffectEvent=Nn;var Tg={readContext:oi,use:$c,useCallback:function(e,n){return yi().memoizedState=[e,n===void 0?null:n],e},useContext:oi,useEffect:lg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,eu(4194308,4,hg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return eu(4194308,4,e,n)},useInsertionEffect:function(e,n){eu(4,2,e,n)},useMemo:function(e,n){var a=yi();n=n===void 0?null:n;var o=e();if(Hr){Lt(!0);try{e()}finally{Lt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=yi();if(a!==void 0){var u=a(n);if(Hr){Lt(!0);try{a(n)}finally{Lt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=py.bind(null,Re,e),[o.memoizedState,e]},useRef:function(e){var n=yi();return e={current:e},n.memoizedState=e},useState:function(e){e=_d(e);var n=e.queue,a=Mg.bind(null,Re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Sd,useDeferredValue:function(e,n){var a=yi();return yd(a,e,n)},useTransition:function(){var e=_d(!1);return e=_g.bind(null,Re,e.queue,!0,!1),yi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Re,u=yi();if(Ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),dn===null)throw Error(s(349));(ze&127)!==0||Y0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,lg(j0.bind(null,o,f,e),[e]),o.flags|=2048,Ro(9,{destroy:void 0},q0.bind(null,o,f,a,n),null),a},useId:function(){var e=yi(),n=dn.identifierPrefix;if(Ve){var a=ka,o=Va;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Qc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=oy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ed,useFormState:ig,useActionState:ig,useOptimistic:function(e){var n=yi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bd.bind(null,Re,!0,a),a.dispatch=n,[e,n]},useMemoCache:pd,useCacheRefresh:function(){return yi().memoizedState=dy.bind(null,Re)},useEffectEvent:function(e){var n=yi(),a={impl:e};return n.memoizedState=a,function(){if(($e&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Td={readContext:oi,use:$c,useCallback:pg,useContext:oi,useEffect:xd,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:tu,useRef:og,useState:function(){return tu(hs)},useDebugValue:Sd,useDeferredValue:function(e,n){var a=zn();return gg(a,ln.memoizedState,e,n)},useTransition:function(){var e=tu(hs)[0],n=zn().memoizedState;return[typeof e=="boolean"?e:Bl(e),n]},useSyncExternalStore:W0,useId:Sg,useHostTransitionStatus:Ed,useFormState:ag,useActionState:ag,useOptimistic:function(e,n){var a=zn();return Q0(a,ln,e,n)},useMemoCache:pd,useCacheRefresh:yg};Td.useEffectEvent=cg;var Ag={readContext:oi,use:$c,useCallback:pg,useContext:oi,useEffect:xd,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:gd,useRef:og,useState:function(){return gd(hs)},useDebugValue:Sd,useDeferredValue:function(e,n){var a=zn();return ln===null?yd(a,e,n):gg(a,ln.memoizedState,e,n)},useTransition:function(){var e=gd(hs)[0],n=zn().memoizedState;return[typeof e=="boolean"?e:Bl(e),n]},useSyncExternalStore:W0,useId:Sg,useHostTransitionStatus:Ed,useFormState:rg,useActionState:rg,useOptimistic:function(e,n){var a=zn();return ln!==null?Q0(a,ln,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:pd,useCacheRefresh:yg};Ag.useEffectEvent=cg;function Ad(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rd={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Zi(),u=Vs(o);u.payload=n,a!=null&&(u.callback=a),n=ks(e,u,o),n!==null&&(Ii(n,e,o),Ol(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Zi(),u=Vs(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ks(e,u,o),n!==null&&(Ii(n,e,o),Ol(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zi(),o=Vs(a);o.tag=2,n!=null&&(o.callback=n),n=ks(e,o,a),n!==null&&(Ii(n,e,a),Ol(n,e,a))}};function Rg(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Al(a,o)||!Al(u,f):!0}function Cg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Rd.enqueueReplaceState(n,n.state,null)}function Gr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function wg(e){Ic(e)}function Dg(e){console.error(e)}function Ng(e){Ic(e)}function au(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ug(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cd(e,n,a){return a=Vs(a),a.tag=3,a.payload={element:null},a.callback=function(){au(e,n)},a}function Lg(e){return e=Vs(e),e.tag=3,e}function Og(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Ug(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Ug(n,a,o),typeof u!="function"&&(Zs===null?Zs=new Set([this]):Zs.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function my(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&xo(n,a,u,!0),a=Wi.current,a!==null){switch(a.tag){case 31:case 13:return ca===null?gu():a.alternate===null&&Un===0&&(Un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Wc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),$d(e,o,u)),!1;case 22:return a.flags|=65536,o===Wc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),$d(e,o,u)),!1}throw Error(s(435,a.tag))}return $d(e,o,u),gu(),!1}if(Ve)return n=Wi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==qh&&(e=Error(s(422),{cause:o}),wl(sa(e,a)))):(o!==qh&&(n=Error(s(423),{cause:o}),wl(sa(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=sa(o,a),u=Cd(e.stateNode,o,u),ad(e,u),Un!==4&&(Un=2)),!1;var f=Error(s(520),{cause:o});if(f=sa(f,a),jl===null?jl=[f]:jl.push(f),Un!==4&&(Un=2),n===null)return!0;o=sa(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Cd(a.stateNode,o,e),ad(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Zs===null||!Zs.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Lg(u),Og(u,e,a,o),ad(a,u),!1}a=a.return}while(a!==null);return!1}var wd=Error(s(461)),Vn=!1;function li(e,n,a,o){n.child=e===null?B0(n,null,a,o):zr(n,e.child,a,o)}function Ig(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Ir(n),o=ud(e,n,a,v,f,u),R=fd(),e!==null&&!Vn?(hd(e,n,u),ds(e,n,u)):(Ve&&R&&Wh(n),n.flags|=1,li(e,n,o,u),n.child)}function Pg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Vh(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Fg(e,n,f,o,u)):(e=zc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Fd(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Al,a(v,o)&&e.ref===n.ref)return ds(e,n,u)}return n.flags|=1,e=os(f,o),e.ref=n.ref,e.return=n,n.child=e}function Fg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Al(f,o)&&e.ref===n.ref)if(Vn=!1,n.pendingProps=o=f,Fd(e,u))(e.flags&131072)!==0&&(Vn=!0);else return n.lanes=e.lanes,ds(e,n,u)}return Dd(e,n,a,o,u)}function Bg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return zg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&kc(n,f!==null?f.cachePool:null),f!==null?G0(n,f):rd(),V0(n);else return o=n.lanes=536870912,zg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(kc(n,f.cachePool),G0(n,f),Ws(),n.memoizedState=null):(e!==null&&kc(n,null),rd(),Ws());return li(e,n,u,a),n.child}function Gl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zg(e,n,a,o,u){var f=td();return f=f===null?null:{parent:Hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&kc(n,null),rd(),V0(n),e!==null&&xo(e,n,o,!0),n.childLanes=u,null}function su(e,n){return n=ou({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Hg(e,n,a){return zr(n,e.child,null,a),e=su(n,n.pendingProps),e.flags|=2,Yi(n),n.memoizedState=null,e}function gy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ve){if(o.mode==="hidden")return e=su(n,o),n.lanes=536870912,Gl(null,e);if(ld(n),(e=_n)?(e=J_(e,la),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fs!==null?{id:Va,overflow:ka}:null,retryLane:536870912,hydrationErrors:null},a=E0(e),a.return=n,n.child=a,ri=n,_n=null)):e=null,e===null)throw zs(n);return n.lanes=536870912,null}return su(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(ld(n),u)if(n.flags&256)n.flags&=-257,n=Hg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Vn||xo(e,n,a,!1),u=(a&e.childLanes)!==0,Vn||u){if(o=dn,o!==null&&(v=vr(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Nr(e,v),Ii(o,e,v),wd;gu(),n=Hg(e,n,a)}else e=f.treeContext,_n=ua(v.nextSibling),ri=n,Ve=!0,Bs=null,la=!1,e!==null&&A0(n,e),n=su(n,o),n.flags|=4096;return n}return e=os(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ru(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Dd(e,n,a,o,u){return Ir(n),a=ud(e,n,a,o,void 0,u),o=fd(),e!==null&&!Vn?(hd(e,n,u),ds(e,n,u)):(Ve&&o&&Wh(n),n.flags|=1,li(e,n,a,u),n.child)}function Gg(e,n,a,o,u,f){return Ir(n),n.updateQueue=null,a=X0(n,o,a,u),k0(e),o=fd(),e!==null&&!Vn?(hd(e,n,f),ds(e,n,f)):(Ve&&o&&Wh(n),n.flags|=1,li(e,n,a,f),n.child)}function Vg(e,n,a,o,u){if(Ir(n),n.stateNode===null){var f=mo,v=a.contextType;typeof v=="object"&&v!==null&&(f=oi(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Rd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},nd(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?oi(v):mo,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ad(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Rd.enqueueReplaceState(f,f.state,null),Pl(n,o,f,u),Il(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,V=Gr(a,R);f.props=V;var at=f.context,gt=a.contextType;v=mo,typeof gt=="object"&&gt!==null&&(v=oi(gt));var St=a.getDerivedStateFromProps;gt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||at!==v)&&Cg(n,f,o,v),Gs=!1;var rt=n.memoizedState;f.state=rt,Pl(n,o,f,u),Il(),at=n.memoizedState,R||rt!==at||Gs?(typeof St=="function"&&(Ad(n,a,St,o),at=n.memoizedState),(V=Gs||Rg(n,a,V,o,rt,at,v))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=v,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,id(e,n),v=n.memoizedProps,gt=Gr(a,v),f.props=gt,St=n.pendingProps,rt=f.context,at=a.contextType,V=mo,typeof at=="object"&&at!==null&&(V=oi(at)),R=a.getDerivedStateFromProps,(at=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==St||rt!==V)&&Cg(n,f,o,V),Gs=!1,rt=n.memoizedState,f.state=rt,Pl(n,o,f,u),Il();var ut=n.memoizedState;v!==St||rt!==ut||Gs||e!==null&&e.dependencies!==null&&Gc(e.dependencies)?(typeof R=="function"&&(Ad(n,a,R,o),ut=n.memoizedState),(gt=Gs||Rg(n,a,gt,o,rt,ut,V)||e!==null&&e.dependencies!==null&&Gc(e.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=V,o=gt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,ru(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=zr(n,e.child,null,u),n.child=zr(n,null,a,u)):li(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ds(e,n,u),e}function kg(e,n,a,o){return Lr(),n.flags|=256,li(e,n,a,o),n.child}var Nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ud(e){return{baseLanes:e,cachePool:U0()}}function Ld(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ji),e}function Xg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Bn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ve){if(u?Xs(n):Ws(),(e=_n)?(e=J_(e,la),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fs!==null?{id:Va,overflow:ka}:null,retryLane:536870912,hydrationErrors:null},a=E0(e),a.return=n,n.child=a,ri=n,_n=null)):e=null,e===null)throw zs(n);return mp(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ws(),u=n.mode,R=ou({mode:"hidden",children:R},u),o=Ur(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Ud(a),o.childLanes=Ld(e,v,a),n.memoizedState=Nd,Gl(null,o)):(Xs(n),Od(n,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(f)n.flags&256?(Xs(n),n.flags&=-257,n=Id(e,n,a)):n.memoizedState!==null?(Ws(),n.child=e.child,n.flags|=128,n=null):(Ws(),R=o.fallback,u=n.mode,o=ou({mode:"visible",children:o.children},u),R=Ur(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,zr(n,e.child,null,a),o=n.child,o.memoizedState=Ud(a),o.childLanes=Ld(e,v,a),n.memoizedState=Nd,n=Gl(null,o));else if(Xs(n),mp(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var at=v.dgst;v=at,o=Error(s(419)),o.stack="",o.digest=v,wl({value:o,source:null,stack:null}),n=Id(e,n,a)}else if(Vn||xo(e,n,a,!1),v=(a&e.childLanes)!==0,Vn||v){if(v=dn,v!==null&&(o=vr(v,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Nr(e,o),Ii(v,e,o),wd;pp(R)||gu(),n=Id(e,n,a)}else pp(R)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,_n=ua(R.nextSibling),ri=n,Ve=!0,Bs=null,la=!1,e!==null&&A0(n,e),n=Od(n,o.children),n.flags|=4096);return n}return u?(Ws(),R=o.fallback,u=n.mode,V=e.child,at=V.sibling,o=os(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,at!==null?R=os(at,R):(R=Ur(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Gl(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Ud(a):(u=R.cachePool,u!==null?(V=Hn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=U0(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Ld(e,v,a),n.memoizedState=Nd,Gl(e.child,o)):(Xs(n),a=e.child,e=a.sibling,a=os(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Od(e,n){return n=ou({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ou(e,n){return e=Xi(22,e,null,n),e.lanes=0,e}function Id(e,n,a){return zr(n,e.child,null,a),e=Od(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Kh(e.return,n,a)}function Pd(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Yg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=Bn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,mt(Bn,v),li(e,n,o,a),o=Ve?Cl:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wg(e,a,n);else if(e.tag===19)Wg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Zc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pd(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Zc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Pd(n,!0,a,null,f,o);break;case"together":Pd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ds(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),js|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(xo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=os(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=os(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Fd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Gc(e)))}function _y(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Hs(n,Hn,e.memoizedState.cache),Lr();break;case 27:case 5:ot(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Hs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ld(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Xs(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xg(e,n,a):(Xs(n),e=ds(e,n,a),e!==null?e.sibling:null);Xs(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(xo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Yg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(Bn,Bn.current),o)break;return null;case 22:return n.lanes=0,Bg(e,n,a,n.pendingProps);case 24:Hs(n,Hn,e.memoizedState.cache)}return ds(e,n,a)}function qg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Vn=!0;else{if(!Fd(e,a)&&(n.flags&128)===0)return Vn=!1,_y(e,n,a);Vn=(e.flags&131072)!==0}else Vn=!1,Ve&&(n.flags&1048576)!==0&&T0(n,Cl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Fr(n.elementType),n.type=e,typeof e=="function")Vh(e)?(o=Gr(e,o),n.tag=1,n=Vg(null,n,e,o,a)):(n.tag=0,n=Dd(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=Ig(null,n,e,o,a);break t}else if(u===G){n.tag=14,n=Pg(null,n,e,o,a);break t}}throw n=nt(e)||e,Error(s(306,n,""))}}return n;case 0:return Dd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Gr(o,n.pendingProps),Vg(e,n,o,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,id(e,n),Pl(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Hs(n,Hn,o),o!==f.cache&&Qh(n,[Hn],a,!0),Il(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=kg(e,n,o,a);break t}else if(o!==u){u=sa(Error(s(424)),n),wl(u),n=kg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_n=ua(e.firstChild),ri=n,Ve=!0,Bs=null,la=!0,a=B0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Lr(),o===u){n=ds(e,n,a);break t}li(e,n,o,a)}n=n.child}return n;case 26:return ru(e,n),e===null?(a=av(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ve||(a=n.type,e=n.pendingProps,o=Eu(tt.current).createElement(a),o[xn]=n,o[En]=e,ci(o,a,e),X(o),n.stateNode=o):n.memoizedState=av(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ot(n),e===null&&Ve&&(o=n.stateNode=ev(n.type,n.pendingProps,tt.current),ri=n,la=!0,u=_n,$s(n.type)?(gp=u,_n=ua(o.firstChild)):_n=u),li(e,n,n.pendingProps.children,a),ru(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ve&&((u=o=_n)&&(o=qy(o,n.type,n.pendingProps,la),o!==null?(n.stateNode=o,ri=n,_n=ua(o.firstChild),la=!1,u=!0):u=!1),u||zs(n)),ot(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,fp(u,f)?o=null:v!==null&&fp(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=ud(e,n,ly,null,null,a),nc._currentValue=u),ru(e,n),li(e,n,o,a),n.child;case 6:return e===null&&Ve&&((e=a=_n)&&(a=jy(a,n.pendingProps,la),a!==null?(n.stateNode=a,ri=n,_n=null,e=!0):e=!1),e||zs(n)),null;case 13:return Xg(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=zr(n,null,o,a):li(e,n,o,a),n.child;case 11:return Ig(e,n,n.type,n.pendingProps,a);case 7:return li(e,n,n.pendingProps,a),n.child;case 8:return li(e,n,n.pendingProps.children,a),n.child;case 12:return li(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Hs(n,n.type,o.value),li(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ir(n),u=oi(u),o=o(u),n.flags|=1,li(e,n,o,a),n.child;case 14:return Pg(e,n,n.type,n.pendingProps,a);case 15:return Fg(e,n,n.type,n.pendingProps,a);case 19:return Yg(e,n,a);case 31:return gy(e,n,a);case 22:return Bg(e,n,a,n.pendingProps);case 24:return Ir(n),o=oi(Hn),e===null?(u=td(),u===null&&(u=dn,f=Jh(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},nd(n),Hs(n,Hn,u)):((e.lanes&a)!==0&&(id(e,n),Pl(n,null,null,a),Il()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Hs(n,Hn,o)):(o=f.cache,Hs(n,Hn,o),o!==u.cache&&Qh(n,[Hn],a,!0))),li(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ps(e){e.flags|=4}function Bd(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(S_())e.flags|=8192;else throw Br=Wc,ed}else e.flags&=-16777217}function jg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cv(n))if(S_())e.flags|=8192;else throw Br=Wc,ed}function lu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?je():536870912,e.lanes|=n,No|=n)}function Vl(e,n){if(!Ve)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function vn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function vy(e,n,a){var o=n.pendingProps;switch(Yh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),us(Hn),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(vo(n)?ps(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jh())),vn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ps(n),f!==null?(vn(n),jg(n,f)):(vn(n),Bd(n,u,null,o,a))):f?f!==e.memoizedState?(ps(n),vn(n),jg(n,f)):(vn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ps(n),vn(n),Bd(n,u,e,o,a)),null;case 27:if(Ct(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ps(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}e=Rt.current,vo(n)?R0(n):(e=ev(u,o,a),n.stateNode=e,ps(n))}return vn(n),null;case 5:if(Ct(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ps(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}if(f=Rt.current,vo(n))R0(n);else{var v=Eu(tt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[xn]=n,f[En]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(ci(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ps(n)}}return vn(n),Bd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ps(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,vo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ri,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[xn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||X_(e.nodeValue,a)),e||zs(n,!0)}else e=Eu(e).createTextNode(o),e[xn]=n,n.stateNode=e}return vn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=vo(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[xn]=n}else Lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),e=!1}else a=jh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Yi(n),n):(Yi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return vn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=vo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[xn]=n}else Lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=jh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yi(n),n):(Yi(n),null)}return Yi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),lu(n,n.updateQueue),vn(n),null);case 4:return jt(),e===null&&rp(n.stateNode.containerInfo),vn(n),null;case 10:return us(n.type),vn(n),null;case 19:if(Y(Bn),o=n.memoizedState,o===null)return vn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Vl(o,!1);else{if(Un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Zc(e),f!==null){for(n.flags|=128,Vl(o,!1),e=f.updateQueue,n.updateQueue=e,lu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)M0(a,e),a=a.sibling;return mt(Bn,Bn.current&1|2),Ve&&ls(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>du&&(n.flags|=128,u=!0,Vl(o,!1),n.lanes=4194304)}else{if(!u)if(e=Zc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,lu(n,e),Vl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ve)return vn(n),null}else 2*E()-o.renderingStartTime>du&&a!==536870912&&(n.flags|=128,u=!0,Vl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=Bn.current,mt(Bn,u?a&1|2:a&1),Ve&&ls(n,o.treeForkCount),e):(vn(n),null);case 22:case 23:return Yi(n),od(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&lu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Y(Pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),us(Hn),vn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function xy(e,n){switch(Yh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return us(Hn),jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ct(n),null;case 31:if(n.memoizedState!==null){if(Yi(n),n.alternate===null)throw Error(s(340));Lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Yi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(Bn),null;case 4:return jt(),null;case 10:return us(n.type),null;case 22:case 23:return Yi(n),od(),e!==null&&Y(Pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return us(Hn),null;case 25:return null;default:return null}}function Zg(e,n){switch(Yh(n),n.tag){case 3:us(Hn),jt();break;case 26:case 27:case 5:Ct(n);break;case 4:jt();break;case 31:n.memoizedState!==null&&Yi(n);break;case 13:Yi(n);break;case 19:Y(Bn);break;case 10:us(n.type);break;case 22:case 23:Yi(n),od(),e!==null&&Y(Pr);break;case 24:us(Hn)}}function kl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){on(n,n.return,R)}}function Ys(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var V=a,at=R;try{at()}catch(gt){on(u,V,gt)}}}o=o.next}while(o!==f)}}catch(gt){on(n,n.return,gt)}}function Kg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{H0(n,a)}catch(o){on(e,e.return,o)}}}function Qg(e,n,a){a.props=Gr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){on(e,n,o)}}function Xl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){on(e,n,u)}}function Xa(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){on(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){on(e,n,u)}else a.current=null}function Jg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){on(e,e.return,u)}}function zd(e,n,a){try{var o=e.stateNode;Gy(o,e.type,a,n),o[En]=n}catch(u){on(e,e.return,u)}}function $g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$s(e.type)||e.tag===4}function Hd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$s(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gd(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&$s(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Gd(e,n,a),e=e.sibling;e!==null;)Gd(e,n,a),e=e.sibling}function cu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&$s(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(cu(e,n,a),e=e.sibling;e!==null;)cu(e,n,a),e=e.sibling}function t_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ci(n,o,a),n[xn]=e,n[En]=a}catch(f){on(e,e.return,f)}}var ms=!1,kn=!1,Vd=!1,e_=typeof WeakSet=="function"?WeakSet:Set,$n=null;function Sy(e,n){if(e=e.containerInfo,cp=Du,e=d0(e),Ih(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,R=-1,V=-1,at=0,gt=0,St=e,rt=null;e:for(;;){for(var ut;St!==a||u!==0&&St.nodeType!==3||(R=v+u),St!==f||o!==0&&St.nodeType!==3||(V=v+o),St.nodeType===3&&(v+=St.nodeValue.length),(ut=St.firstChild)!==null;)rt=St,St=ut;for(;;){if(St===e)break e;if(rt===a&&++at===u&&(R=v),rt===f&&++gt===o&&(V=v),(ut=St.nextSibling)!==null)break;St=rt,rt=St.parentNode}St=ut}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(up={focusedElem:e,selectionRange:a},Du=!1,$n=n;$n!==null;)if(n=$n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$n=e;else for(;$n!==null;){switch(n=$n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=Gr(a.type,u);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ge){on(a,a.return,ge)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)dp(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,$n=e;break}$n=n.return}}function n_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_s(e,a),o&4&&kl(5,a);break;case 1:if(_s(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){on(a,a.return,v)}else{var u=Gr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){on(a,a.return,v)}}o&64&&Kg(a),o&512&&Xl(a,a.return);break;case 3:if(_s(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{H0(e,n)}catch(v){on(a,a.return,v)}}break;case 27:n===null&&o&4&&t_(a);case 26:case 5:_s(e,a),n===null&&o&4&&Jg(a),o&512&&Xl(a,a.return);break;case 12:_s(e,a);break;case 31:_s(e,a),o&4&&s_(e,a);break;case 13:_s(e,a),o&4&&r_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wy.bind(null,a),Zy(e,a))));break;case 22:if(o=a.memoizedState!==null||ms,!o){n=n!==null&&n.memoizedState!==null||kn,u=ms;var f=kn;ms=o,(kn=n)&&!f?vs(e,a,(a.subtreeFlags&8772)!==0):_s(e,a),ms=u,kn=f}break;case 30:break;default:_s(e,a)}}function i_(e){var n=e.alternate;n!==null&&(e.alternate=null,i_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&bn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Mn=null,Ni=!1;function gs(e,n,a){for(a=a.child;a!==null;)a_(e,n,a),a=a.sibling}function a_(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:kn||Xa(a,n),gs(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:kn||Xa(a,n);var o=Mn,u=Ni;$s(a.type)&&(Mn=a.stateNode,Ni=!1),gs(e,n,a),$l(a.stateNode),Mn=o,Ni=u;break;case 5:kn||Xa(a,n);case 6:if(o=Mn,u=Ni,Mn=null,gs(e,n,a),Mn=o,Ni=u,Mn!==null)if(Ni)try{(Mn.nodeType===9?Mn.body:Mn.nodeName==="HTML"?Mn.ownerDocument.body:Mn).removeChild(a.stateNode)}catch(f){on(a,n,f)}else try{Mn.removeChild(a.stateNode)}catch(f){on(a,n,f)}break;case 18:Mn!==null&&(Ni?(e=Mn,K_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zo(e)):K_(Mn,a.stateNode));break;case 4:o=Mn,u=Ni,Mn=a.stateNode.containerInfo,Ni=!0,gs(e,n,a),Mn=o,Ni=u;break;case 0:case 11:case 14:case 15:Ys(2,a,n),kn||Ys(4,a,n),gs(e,n,a);break;case 1:kn||(Xa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Qg(a,n,o)),gs(e,n,a);break;case 21:gs(e,n,a);break;case 22:kn=(o=kn)||a.memoizedState!==null,gs(e,n,a),kn=o;break;default:gs(e,n,a)}}function s_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zo(e)}catch(a){on(n,n.return,a)}}}function r_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zo(e)}catch(a){on(n,n.return,a)}}function yy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new e_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new e_),n;default:throw Error(s(435,e.tag))}}function uu(e,n){var a=yy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Dy.bind(null,e,o);o.then(u,u)}})}function Ui(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if($s(R.type)){Mn=R.stateNode,Ni=!1;break t}break;case 5:Mn=R.stateNode,Ni=!1;break t;case 3:case 4:Mn=R.stateNode.containerInfo,Ni=!0;break t}R=R.return}if(Mn===null)throw Error(s(160));a_(f,v,u),Mn=null,Ni=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)o_(n,e),n=n.sibling}var ba=null;function o_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ui(n,e),Li(e),o&4&&(Ys(3,e,e.return),kl(3,e),Ys(5,e,e.return));break;case 1:Ui(n,e),Li(e),o&512&&(kn||a===null||Xa(a,a.return)),o&64&&ms&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ba;if(Ui(n,e),Li(e),o&512&&(kn||a===null||Xa(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Sa]||f[xn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),ci(f,o,a),f[xn]=e,X(f),o=f;break t;case"link":var v=ov("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}f=u.createElement(o),ci(f,o,a),u.head.appendChild(f);break;case"meta":if(v=ov("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}f=u.createElement(o),ci(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[xn]=e,X(f),o=f}e.stateNode=o}else lv(u,e.type,e.stateNode);else e.stateNode=rv(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?lv(u,e.type,e.stateNode):rv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&zd(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ui(n,e),Li(e),o&512&&(kn||a===null||Xa(a,a.return)),a!==null&&o&4&&zd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ui(n,e),Li(e),o&512&&(kn||a===null||Xa(a,a.return)),e.flags&32){u=e.stateNode;try{Yn(u,"")}catch(ne){on(e,e.return,ne)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,zd(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Vd=!0);break;case 6:if(Ui(n,e),Li(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ne){on(e,e.return,ne)}}break;case 3:if(Au=null,u=ba,ba=bu(n.containerInfo),Ui(n,e),ba=u,Li(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{zo(n.containerInfo)}catch(ne){on(e,e.return,ne)}Vd&&(Vd=!1,l_(e));break;case 4:o=ba,ba=bu(e.stateNode.containerInfo),Ui(n,e),Li(e),ba=o;break;case 12:Ui(n,e),Li(e);break;case 31:Ui(n,e),Li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uu(e,o)));break;case 13:Ui(n,e),Li(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hu=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uu(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,at=ms,gt=kn;if(ms=at||u,kn=gt||V,Ui(n,e),kn=gt,ms=at,Li(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||ms||kn||Vr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=V.stateNode;var St=V.memoizedProps.style,rt=St!=null&&St.hasOwnProperty("display")?St.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(ne){on(V,V.return,ne)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(ne){on(V,V.return,ne)}}}else if(n.tag===18){if(a===null){V=n;try{var ut=V.stateNode;u?Q_(ut,!0):Q_(V.stateNode,!1)}catch(ne){on(V,V.return,ne)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,uu(e,a))));break;case 19:Ui(n,e),Li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uu(e,o)));break;case 30:break;case 21:break;default:Ui(n,e),Li(e)}}function Li(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if($g(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Hd(e);cu(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Yn(v,""),a.flags&=-33);var R=Hd(e);cu(e,R,v);break;case 3:case 4:var V=a.stateNode.containerInfo,at=Hd(e);Gd(e,at,V);break;default:throw Error(s(161))}}catch(gt){on(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function l_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;l_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _s(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)n_(e,n.alternate,n),n=n.sibling}function Vr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ys(4,n,n.return),Vr(n);break;case 1:Xa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qg(n,n.return,a),Vr(n);break;case 27:$l(n.stateNode);case 26:case 5:Xa(n,n.return),Vr(n);break;case 22:n.memoizedState===null&&Vr(n);break;case 30:Vr(n);break;default:Vr(n)}e=e.sibling}}function vs(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:vs(u,f,a),kl(4,f);break;case 1:if(vs(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){on(o,o.return,at)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)z0(V[u],R)}catch(at){on(o,o.return,at)}}a&&v&64&&Kg(f),Xl(f,f.return);break;case 27:t_(f);case 26:case 5:vs(u,f,a),a&&o===null&&v&4&&Jg(f),Xl(f,f.return);break;case 12:vs(u,f,a);break;case 31:vs(u,f,a),a&&v&4&&s_(u,f);break;case 13:vs(u,f,a),a&&v&4&&r_(u,f);break;case 22:f.memoizedState===null&&vs(u,f,a),Xl(f,f.return);break;case 30:break;default:vs(u,f,a)}n=n.sibling}}function kd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Dl(a))}function Xd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Dl(e))}function Ta(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)c_(e,n,a,o),n=n.sibling}function c_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ta(e,n,a,o),u&2048&&kl(9,n);break;case 1:Ta(e,n,a,o);break;case 3:Ta(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Dl(e)));break;case 12:if(u&2048){Ta(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){on(n,n.return,V)}}else Ta(e,n,a,o);break;case 31:Ta(e,n,a,o);break;case 13:Ta(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ta(e,n,a,o):Wl(e,n):f._visibility&2?Ta(e,n,a,o):(f._visibility|=2,Co(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&kd(v,n);break;case 24:Ta(e,n,a,o),u&2048&&Xd(n.alternate,n);break;default:Ta(e,n,a,o)}}function Co(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,V=o,at=v.flags;switch(v.tag){case 0:case 11:case 15:Co(f,v,R,V,u),kl(8,v);break;case 23:break;case 22:var gt=v.stateNode;v.memoizedState!==null?gt._visibility&2?Co(f,v,R,V,u):Wl(f,v):(gt._visibility|=2,Co(f,v,R,V,u)),u&&at&2048&&kd(v.alternate,v);break;case 24:Co(f,v,R,V,u),u&&at&2048&&Xd(v.alternate,v);break;default:Co(f,v,R,V,u)}n=n.sibling}}function Wl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Wl(a,o),u&2048&&kd(o.alternate,o);break;case 24:Wl(a,o),u&2048&&Xd(o.alternate,o);break;default:Wl(a,o)}n=n.sibling}}var Yl=8192;function wo(e,n,a){if(e.subtreeFlags&Yl)for(e=e.child;e!==null;)u_(e,n,a),e=e.sibling}function u_(e,n,a){switch(e.tag){case 26:wo(e,n,a),e.flags&Yl&&e.memoizedState!==null&&oM(a,ba,e.memoizedState,e.memoizedProps);break;case 5:wo(e,n,a);break;case 3:case 4:var o=ba;ba=bu(e.stateNode.containerInfo),wo(e,n,a),ba=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Yl,Yl=16777216,wo(e,n,a),Yl=o):wo(e,n,a));break;default:wo(e,n,a)}}function f_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];$n=o,d_(o,e)}f_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)h_(e),e=e.sibling}function h_(e){switch(e.tag){case 0:case 11:case 15:ql(e),e.flags&2048&&Ys(9,e,e.return);break;case 3:ql(e);break;case 12:ql(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,fu(e)):ql(e);break;default:ql(e)}}function fu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];$n=o,d_(o,e)}f_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ys(8,n,n.return),fu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,fu(n));break;default:fu(n)}e=e.sibling}}function d_(e,n){for(;$n!==null;){var a=$n;switch(a.tag){case 0:case 11:case 15:Ys(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Dl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,$n=o;else t:for(a=e;$n!==null;){o=$n;var u=o.sibling,f=o.return;if(i_(o),o===a){$n=null;break t}if(u!==null){u.return=f,$n=u;break t}$n=f}}}var My={getCacheForType:function(e){var n=oi(Hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return oi(Hn).controller.signal}},Ey=typeof WeakMap=="function"?WeakMap:Map,$e=0,dn=null,Ie=null,ze=0,rn=0,qi=null,qs=!1,Do=!1,Wd=!1,xs=0,Un=0,js=0,kr=0,Yd=0,ji=0,No=0,jl=null,Oi=null,qd=!1,hu=0,p_=0,du=1/0,pu=null,Zs=null,qn=0,Ks=null,Uo=null,Ss=0,jd=0,Zd=null,m_=null,Zl=0,Kd=null;function Zi(){return($e&2)!==0&&ze!==0?ze&-ze:L.T!==null?np():Bi()}function g_(){if(ji===0)if((ze&536870912)===0||Ve){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ji=e}else ji=536870912;return e=Wi.current,e!==null&&(e.flags|=32),ji}function Ii(e,n,a){(e===dn&&(rn===2||rn===9)||e.cancelPendingCommit!==null)&&(Lo(e,0),Qs(e,ze,ji,!1)),Ln(e,a),(($e&2)===0||e!==dn)&&(e===dn&&(($e&2)===0&&(kr|=a),Un===4&&Qs(e,ze,ji,!1)),Wa(e))}function __(e,n,a){if(($e&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Yt(e,n),u=o?Ay(e,n):Jd(e,n,!0),f=o;do{if(u===0){Do&&!o&&Qs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!by(a)){u=Jd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=e;u=jl;var V=R.current.memoizedState.isDehydrated;if(V&&(Lo(R,v).flags|=256),v=Jd(R,v,!1),v!==2){if(Wd&&!V){R.errorRecoveryDisabledLanes|=f,kr|=f,u=4;break t}f=Oi,Oi=u,f!==null&&(Oi===null?Oi=f:Oi.push.apply(Oi,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Lo(e,0),Qs(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qs(o,n,ji,!qs);break t;case 2:Oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=hu+300-E(),10<u)){if(Qs(o,n,ji,!qs),ht(o,0,!0)!==0)break t;Ss=n,o.timeoutHandle=j_(v_.bind(null,o,a,Oi,pu,qd,n,ji,kr,No,qs,f,"Throttled",-0,0),u);break t}v_(o,a,Oi,pu,qd,n,ji,kr,No,qs,f,null,-0,0)}}break}while(!0);Wa(e)}function v_(e,n,a,o,u,f,v,R,V,at,gt,St,rt,ut){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},u_(n,f,St);var ne=(f&62914560)===f?hu-E():(f&4194048)===f?p_-E():0;if(ne=lM(St,ne),ne!==null){Ss=f,e.cancelPendingCommit=ne(A_.bind(null,e,n,f,a,o,u,v,R,V,gt,St,null,rt,ut)),Qs(e,f,v,!at);return}}A_(e,n,f,a,o,u,v,R,V)}function by(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ki(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qs(e,n,a,o){n&=~Yd,n&=~kr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&xa(e,a,n)}function mu(){return($e&6)===0?(Kl(0),!1):!0}function Qd(){if(Ie!==null){if(rn===0)var e=Ie.return;else e=Ie,cs=Or=null,dd(e),Eo=null,Ul=0,e=Ie;for(;e!==null;)Zg(e.alternate,e),e=e.return;Ie=null}}function Lo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Xy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ss=0,Qd(),dn=e,Ie=a=os(e.current,null),ze=n,rn=0,qi=null,qs=!1,Do=Yt(e,n),Wd=!1,No=ji=Yd=kr=js=Un=0,Oi=jl=null,qd=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return xs=n,Pc(),a}function x_(e,n){Re=null,L.H=Hl,n===Mo||n===Xc?(n=I0(),rn=3):n===ed?(n=I0(),rn=4):rn=n===wd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qi=n,Ie===null&&(Un=1,au(e,sa(n,e.current)))}function S_(){var e=Wi.current;return e===null?!0:(ze&4194048)===ze?ca===null:(ze&62914560)===ze||(ze&536870912)!==0?e===ca:!1}function y_(){var e=L.H;return L.H=Hl,e===null?Hl:e}function M_(){var e=L.A;return L.A=My,e}function gu(){Un=4,qs||(ze&4194048)!==ze&&Wi.current!==null||(Do=!0),(js&134217727)===0&&(kr&134217727)===0||dn===null||Qs(dn,ze,ji,!1)}function Jd(e,n,a){var o=$e;$e|=2;var u=y_(),f=M_();(dn!==e||ze!==n)&&(pu=null,Lo(e,n)),n=!1;var v=Un;t:do try{if(rn!==0&&Ie!==null){var R=Ie,V=qi;switch(rn){case 8:Qd(),v=6;break t;case 3:case 2:case 9:case 6:Wi.current===null&&(n=!0);var at=rn;if(rn=0,qi=null,Oo(e,R,V,at),a&&Do){v=0;break t}break;default:at=rn,rn=0,qi=null,Oo(e,R,V,at)}}Ty(),v=Un;break}catch(gt){x_(e,gt)}while(!0);return n&&e.shellSuspendCounter++,cs=Or=null,$e=o,L.H=u,L.A=f,Ie===null&&(dn=null,ze=0,Pc()),v}function Ty(){for(;Ie!==null;)E_(Ie)}function Ay(e,n){var a=$e;$e|=2;var o=y_(),u=M_();dn!==e||ze!==n?(pu=null,du=E()+500,Lo(e,n)):Do=Yt(e,n);t:do try{if(rn!==0&&Ie!==null){n=Ie;var f=qi;e:switch(rn){case 1:rn=0,qi=null,Oo(e,n,f,1);break;case 2:case 9:if(L0(f)){rn=0,qi=null,b_(n);break}n=function(){rn!==2&&rn!==9||dn!==e||(rn=7),Wa(e)},f.then(n,n);break t;case 3:rn=7;break t;case 4:rn=5;break t;case 7:L0(f)?(rn=0,qi=null,b_(n)):(rn=0,qi=null,Oo(e,n,f,7));break;case 5:var v=null;switch(Ie.tag){case 26:v=Ie.memoizedState;case 5:case 27:var R=Ie;if(v?cv(v):R.stateNode.complete){rn=0,qi=null;var V=R.sibling;if(V!==null)Ie=V;else{var at=R.return;at!==null?(Ie=at,_u(at)):Ie=null}break e}}rn=0,qi=null,Oo(e,n,f,5);break;case 6:rn=0,qi=null,Oo(e,n,f,6);break;case 8:Qd(),Un=6;break t;default:throw Error(s(462))}}Ry();break}catch(gt){x_(e,gt)}while(!0);return cs=Or=null,L.H=o,L.A=u,$e=a,Ie!==null?0:(dn=null,ze=0,Pc(),Un)}function Ry(){for(;Ie!==null&&!Kt();)E_(Ie)}function E_(e){var n=qg(e.alternate,e,xs);e.memoizedProps=e.pendingProps,n===null?_u(e):Ie=n}function b_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Gg(a,n,n.pendingProps,n.type,void 0,ze);break;case 11:n=Gg(a,n,n.pendingProps,n.type.render,n.ref,ze);break;case 5:dd(n);default:Zg(a,n),n=Ie=M0(n,xs),n=qg(a,n,xs)}e.memoizedProps=e.pendingProps,n===null?_u(e):Ie=n}function Oo(e,n,a,o){cs=Or=null,dd(n),Eo=null,Ul=0;var u=n.return;try{if(my(e,u,n,a,ze)){Un=1,au(e,sa(a,e.current)),Ie=null;return}}catch(f){if(u!==null)throw Ie=u,f;Un=1,au(e,sa(a,e.current)),Ie=null;return}n.flags&32768?(Ve||o===1?e=!0:Do||(ze&536870912)!==0?e=!1:(qs=e=!0,(o===2||o===9||o===3||o===6)&&(o=Wi.current,o!==null&&o.tag===13&&(o.flags|=16384))),T_(n,e)):_u(n)}function _u(e){var n=e;do{if((n.flags&32768)!==0){T_(n,qs);return}e=n.return;var a=vy(n.alternate,n,xs);if(a!==null){Ie=a;return}if(n=n.sibling,n!==null){Ie=n;return}Ie=n=e}while(n!==null);Un===0&&(Un=5)}function T_(e,n){do{var a=xy(e.alternate,e);if(a!==null){a.flags&=32767,Ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ie=e;return}Ie=e=a}while(e!==null);Un=6,Ie=null}function A_(e,n,a,o,u,f,v,R,V){e.cancelPendingCommit=null;do vu();while(qn!==0);if(($e&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Hh,Fi(e,a,f,v,R,V),e===dn&&(Ie=dn=null,ze=0),Uo=n,Ks=e,Ss=a,jd=f,Zd=u,m_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ny(ct,function(){return N_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=P.p,P.p=2,v=$e,$e|=4;try{Sy(e,n,a)}finally{$e=v,P.p=u,L.T=o}}qn=1,R_(),C_(),w_()}}function R_(){if(qn===1){qn=0;var e=Ks,n=Uo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=P.p;P.p=2;var u=$e;$e|=4;try{o_(n,e);var f=up,v=d0(e.containerInfo),R=f.focusedElem,V=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&h0(R.ownerDocument.documentElement,R)){if(V!==null&&Ih(R)){var at=V.start,gt=V.end;if(gt===void 0&&(gt=at),"selectionStart"in R)R.selectionStart=at,R.selectionEnd=Math.min(gt,R.value.length);else{var St=R.ownerDocument||document,rt=St&&St.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),ne=R.textContent.length,ge=Math.min(V.start,ne),un=V.end===void 0?ge:Math.min(V.end,ne);!ut.extend&&ge>un&&(v=un,un=ge,ge=v);var Z=f0(R,ge),k=f0(R,un);if(Z&&k&&(ut.rangeCount!==1||ut.anchorNode!==Z.node||ut.anchorOffset!==Z.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var et=St.createRange();et.setStart(Z.node,Z.offset),ut.removeAllRanges(),ge>un?(ut.addRange(et),ut.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),ut.addRange(et))}}}}for(St=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&St.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var xt=St[R];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Du=!!cp,up=cp=null}finally{$e=u,P.p=o,L.T=a}}e.current=n,qn=2}}function C_(){if(qn===2){qn=0;var e=Ks,n=Uo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=P.p;P.p=2;var u=$e;$e|=4;try{n_(e,n.alternate,n)}finally{$e=u,P.p=o,L.T=a}}qn=3}}function w_(){if(qn===4||qn===3){qn=0,U();var e=Ks,n=Uo,a=Ss,o=m_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?qn=5:(qn=0,Uo=Ks=null,D_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Zs=null),es(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=P.p,P.p=2,L.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{L.T=n,P.p=u}}(Ss&3)!==0&&vu(),Wa(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Kd?Zl++:(Zl=0,Kd=e):Zl=0,Kl(0)}}function D_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Dl(n)))}function vu(){return R_(),C_(),w_(),N_()}function N_(){if(qn!==5)return!1;var e=Ks,n=jd;jd=0;var a=es(Ss),o=L.T,u=P.p;try{P.p=32>a?32:a,L.T=null,a=Zd,Zd=null;var f=Ks,v=Ss;if(qn=0,Uo=Ks=null,Ss=0,($e&6)!==0)throw Error(s(331));var R=$e;if($e|=4,h_(f.current),c_(f,f.current,v,a),$e=R,Kl(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{P.p=u,L.T=o,D_(e,n)}}function U_(e,n,a){n=sa(a,n),n=Cd(e.stateNode,n,2),e=ks(e,n,2),e!==null&&(Ln(e,2),Wa(e))}function on(e,n,a){if(e.tag===3)U_(e,e,a);else for(;n!==null;){if(n.tag===3){U_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Zs===null||!Zs.has(o))){e=sa(a,e),a=Lg(2),o=ks(n,a,2),o!==null&&(Og(a,o,n,e),Ln(o,2),Wa(o));break}}n=n.return}}function $d(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ey;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Wd=!0,u.add(a),e=Cy.bind(null,e,n,a),n.then(e,e))}function Cy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,dn===e&&(ze&a)===a&&(Un===4||Un===3&&(ze&62914560)===ze&&300>E()-hu?($e&2)===0&&Lo(e,0):Yd|=a,No===ze&&(No=0)),Wa(e)}function L_(e,n){n===0&&(n=je()),e=Nr(e,n),e!==null&&(Ln(e,n),Wa(e))}function wy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),L_(e,a)}function Dy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),L_(e,a)}function Ny(e,n){return Wt(e,n)}var xu=null,Io=null,tp=!1,Su=!1,ep=!1,Js=0;function Wa(e){e!==Io&&e.next===null&&(Io===null?xu=Io=e:Io=Io.next=e),Su=!0,tp||(tp=!0,Ly())}function Kl(e,n){if(!ep&&Su){ep=!0;do for(var a=!1,o=xu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,F_(o,f))}else f=ze,f=ht(o,o===dn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Yt(o,f)||(a=!0,F_(o,f));o=o.next}while(a);ep=!1}}function Uy(){O_()}function O_(){Su=tp=!1;var e=0;Js!==0&&ky()&&(e=Js);for(var n=E(),a=null,o=xu;o!==null;){var u=o.next,f=I_(o,n);f===0?(o.next=null,a===null?xu=u:a.next=u,u===null&&(Io=a)):(a=o,(e!==0||(f&3)!==0)&&(Su=!0)),o=u}qn!==0&&qn!==5||Kl(e),Js!==0&&(Js=0)}function I_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Pt(f),R=1<<v,V=u[v];V===-1?((R&a)===0||(R&o)!==0)&&(u[v]=_e(R,n)):V<=n&&(e.expiredLanes|=R),f&=~R}if(n=dn,a=ze,a=ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(rn===2||rn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Fe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Fe(o),es(a)){case 2:case 8:a=_t;break;case 32:a=ct;break;case 268435456:a=At;break;default:a=ct}return o=P_.bind(null,e),a=Wt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Fe(o),e.callbackPriority=2,e.callbackNode=null,2}function P_(e,n){if(qn!==0&&qn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(vu()&&e.callbackNode!==a)return null;var o=ze;return o=ht(e,e===dn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(__(e,o,n),I_(e,E()),e.callbackNode!=null&&e.callbackNode===a?P_.bind(null,e):null)}function F_(e,n){if(vu())return null;__(e,n,!0)}function Ly(){Wy(function(){($e&6)!==0?Wt(ft,Uy):O_()})}function np(){if(Js===0){var e=So;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Js=e}return Js}function B_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ya(""+e)}function z_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Oy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=B_((u[En]||null).action),v=o.submitter;v&&(n=(n=v[En]||null)?B_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new Ar("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Js!==0){var V=v?z_(u,v):new FormData(u);Md(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(R.preventDefault(),V=v?z_(u,v):new FormData(u),Md(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var ip=0;ip<zh.length;ip++){var ap=zh[ip],Iy=ap.toLowerCase(),Py=ap[0].toUpperCase()+ap.slice(1);Ea(Iy,"on"+Py)}Ea(g0,"onAnimationEnd"),Ea(_0,"onAnimationIteration"),Ea(v0,"onAnimationStart"),Ea("dblclick","onDoubleClick"),Ea("focusin","onFocus"),Ea("focusout","onBlur"),Ea(JS,"onTransitionRun"),Ea($S,"onTransitionStart"),Ea(ty,"onTransitionCancel"),Ea(x0,"onTransitionEnd"),Nt("onMouseEnter",["mouseout","mouseover"]),Nt("onMouseLeave",["mouseout","mouseover"]),Nt("onPointerEnter",["pointerout","pointerover"]),Nt("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));function H_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],V=R.instance,at=R.currentTarget;if(R=R.listener,V!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=at;try{f(u)}catch(gt){Ic(gt)}u.currentTarget=null,f=V}else for(v=0;v<o.length;v++){if(R=o[v],V=R.instance,at=R.currentTarget,R=R.listener,V!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=at;try{f(u)}catch(gt){Ic(gt)}u.currentTarget=null,f=V}}}}function Pe(e,n){var a=n[On];a===void 0&&(a=n[On]=new Set);var o=e+"__bubble";a.has(o)||(G_(n,e,2,!1),a.add(o))}function sp(e,n,a){var o=0;n&&(o|=4),G_(a,e,o,n)}var yu="_reactListening"+Math.random().toString(36).slice(2);function rp(e){if(!e[yu]){e[yu]=!0,lt.forEach(function(a){a!=="selectionchange"&&(Fy.has(a)||sp(a,!1,e),sp(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[yu]||(n[yu]=!0,sp("selectionchange",!1,n))}}function G_(e,n,a,o){switch(gv(n)){case 2:var u=fM;break;case 8:u=hM;break;default:u=yp}a=u.bind(null,n,a,e),u=void 0,!yr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function op(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var V=v.tag;if((V===3||V===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Ri(R),v===null)return;if(V=v.tag,V===5||V===6||V===26||V===27){o=f=v;continue t}R=R.parentNode}}o=o.return}Ls(function(){var at=f,gt=xr(a),St=[];t:{var rt=S0.get(e);if(rt!==void 0){var ut=Ar,ne=e;switch(e){case"keypress":if(Er(a)===0)break t;case"keydown":case"keyup":ut=ea;break;case"focusin":ne="focus",ut=ae;break;case"focusout":ne="blur",ut=ae;break;case"beforeblur":case"afterblur":ut=ae;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=yl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=ce;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Ut;break;case g0:case _0:case v0:ut=Se;break;case x0:ut=Vi;break;case"scroll":case"scrollend":ut=Lc;break;case"wheel":ut=Ge;break;case"copy":case"cut":case"paste":ut=nn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Ma;break;case"toggle":case"beforetoggle":ut=Fn}var ge=(n&4)!==0,un=!ge&&(e==="scroll"||e==="scrollend"),Z=ge?rt!==null?rt+"Capture":null:rt;ge=[];for(var k=at,et;k!==null;){var xt=k;if(et=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||et===null||Z===null||(xt=as(k,Z),xt!=null&&ge.push(Jl(k,xt,et))),un)break;k=k.return}0<ge.length&&(rt=new ut(rt,ne,null,a,gt),St.push({event:rt,listeners:ge}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&a!==lo&&(ne=a.relatedTarget||a.fromElement)&&(Ri(ne)||ne[zi]))break t;if((ut||rt)&&(rt=gt.window===gt?gt:(rt=gt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(ne=a.relatedTarget||a.toElement,ut=at,ne=ne?Ri(ne):null,ne!==null&&(un=c(ne),ge=ne.tag,ne!==un||ge!==5&&ge!==27&&ge!==6)&&(ne=null)):(ut=null,ne=at),ut!==ne)){if(ge=yl,xt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ge=Ma,xt="onPointerLeave",Z="onPointerEnter",k="pointer"),un=ut==null?rt:Ba(ut),et=ne==null?rt:Ba(ne),rt=new ge(xt,k+"leave",ut,a,gt),rt.target=un,rt.relatedTarget=et,xt=null,Ri(gt)===at&&(ge=new ge(Z,k+"enter",ne,a,gt),ge.target=et,ge.relatedTarget=un,xt=ge),un=xt,ut&&ne)e:{for(ge=By,Z=ut,k=ne,et=0,xt=Z;xt;xt=ge(xt))et++;xt=0;for(var de=k;de;de=ge(de))xt++;for(;0<et-xt;)Z=ge(Z),et--;for(;0<xt-et;)k=ge(k),xt--;for(;et--;){if(Z===k||k!==null&&Z===k.alternate){ge=Z;break e}Z=ge(Z),k=ge(k)}ge=null}else ge=null;ut!==null&&V_(St,rt,ut,ge,!1),ne!==null&&un!==null&&V_(St,un,ne,ge,!0)}}t:{if(rt=at?Ba(at):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var Ke=s0;else if(i0(rt))if(r0)Ke=ZS;else{Ke=qS;var oe=YS}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?at&&Hi(at.elementType)&&(Ke=s0):Ke=jS;if(Ke&&(Ke=Ke(e,at))){a0(St,Ke,a,gt);break t}oe&&oe(e,rt,at),e==="focusout"&&at&&rt.type==="number"&&at.memoizedProps.value!=null&&tn(rt,"number",rt.value)}switch(oe=at?Ba(at):window,e){case"focusin":(i0(oe)||oe.contentEditable==="true")&&(fo=oe,Ph=at,Rl=null);break;case"focusout":Rl=Ph=fo=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,p0(St,a,gt);break;case"selectionchange":if(QS)break;case"keydown":case"keyup":p0(St,a,gt)}var we;if(Ae)t:{switch(e){case"compositionstart":var He="onCompositionStart";break t;case"compositionend":He="onCompositionEnd";break t;case"compositionupdate":He="onCompositionUpdate";break t}He=void 0}else Di?Ps(e,a)&&(He="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(He="onCompositionStart");He&&(Jn&&a.locale!=="ko"&&(Di||He!=="onCompositionStart"?He==="onCompositionEnd"&&Di&&(we=Sl()):(vi=gt,Ha="value"in vi?vi.value:vi.textContent,Di=!0)),oe=Mu(at,He),0<oe.length&&(He=new fi(He,e,null,a,gt),St.push({event:He,listeners:oe}),we?He.data=we:(we=uo(a),we!==null&&(He.data=we)))),(we=hi?Ml(e,a):El(e,a))&&(He=Mu(at,"onBeforeInput"),0<He.length&&(oe=new fi("onBeforeInput","beforeinput",null,a,gt),St.push({event:oe,listeners:He}),oe.data=we)),Oy(St,e,at,a,gt)}H_(St,n)})}function Jl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Mu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=as(e,a),u!=null&&o.unshift(Jl(e,u,f)),u=as(e,n),u!=null&&o.push(Jl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function By(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function V_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,V=R.alternate,at=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||at===null||(V=at,u?(at=as(a,f),at!=null&&v.unshift(Jl(a,at,V))):u||(at=as(a,f),at!=null&&v.push(Jl(a,at,V)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var zy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function k_(e){return(typeof e=="string"?e:""+e).replace(zy,`
`).replace(Hy,"")}function X_(e,n){return n=k_(n),k_(e)===n}function cn(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Yn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Yn(e,""+o);break;case"className":Me(e,"class",o);break;case"tabIndex":Me(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Me(e,a,o);break;case"style":wi(e,o,f);break;case"data":if(n!=="object"){Me(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ya(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&cn(e,n,"name",u.name,u,null),cn(e,n,"formEncType",u.formEncType,u,null),cn(e,n,"formMethod",u.formMethod,u,null),cn(e,n,"formTarget",u.formTarget,u,null)):(cn(e,n,"encType",u.encType,u,null),cn(e,n,"method",u.method,u,null),cn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ya(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$i);break;case"onScroll":o!=null&&Pe("scroll",e);break;case"onScrollEnd":o!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ya(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),ve(e,"popover",o);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dh.get(a)||a,ve(e,a,o))}}function lp(e,n,a,o,u,f){switch(a){case"style":wi(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Yn(e,o):(typeof o=="number"||typeof o=="bigint")&&Yn(e,""+o);break;case"onScroll":o!=null&&Pe("scroll",e);break;case"onScrollEnd":o!=null&&Pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ve(e,a,o)}}}function ci(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:cn(e,n,f,v,a,null)}}u&&cn(e,n,"srcSet",a.srcSet,a,null),o&&cn(e,n,"src",a.src,a,null);return;case"input":Pe("invalid",e);var R=f=v=u=null,V=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":v=gt;break;case"checked":V=gt;break;case"defaultChecked":at=gt;break;case"value":f=gt;break;case"defaultValue":R=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:cn(e,n,o,gt,a,null)}}Qn(e,f,R,V,at,v,u,!1);return;case"select":Pe("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:cn(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?ai(e,!!o,n,!1):a!=null&&ai(e,!!o,a,!0);return;case"textarea":Pe("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:cn(e,n,v,R,a,null)}Sn(e,o,u,f);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":cn(e,n,V,o,a,null));return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(o=0;o<Ql.length;o++)Pe(Ql[o],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:cn(e,n,at,o,a,null)}return;default:if(Hi(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&lp(e,n,gt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&cn(e,n,R,o,a,null))}function Gy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,V=null,at=null,gt=null;for(ut in a){var St=a[ut];if(a.hasOwnProperty(ut)&&St!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":V=St;default:o.hasOwnProperty(ut)||cn(e,n,ut,null,o,St)}}for(var rt in o){var ut=o[rt];if(St=a[rt],o.hasOwnProperty(rt)&&(ut!=null||St!=null))switch(rt){case"type":f=ut;break;case"name":u=ut;break;case"checked":at=ut;break;case"defaultChecked":gt=ut;break;case"value":v=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==St&&cn(e,n,rt,ut,o,St)}}wn(e,v,R,V,at,gt,f,u);return;case"select":ut=v=R=rt=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ut=V;default:o.hasOwnProperty(f)||cn(e,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":rt=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==V&&cn(e,n,u,f,o,V)}n=R,a=v,o=ut,rt!=null?ai(e,!!a,rt,!1):!!o!=!!a&&(n!=null?ai(e,!!a,n,!0):ai(e,!!a,a?[]:"",!1));return;case"textarea":ut=rt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:cn(e,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":rt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&cn(e,n,v,u,o,f)}Ze(e,rt,ut);return;case"option":for(var ne in a)rt=a[ne],a.hasOwnProperty(ne)&&rt!=null&&!o.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:cn(e,n,ne,null,o,rt));for(V in o)rt=o[V],ut=a[V],o.hasOwnProperty(V)&&rt!==ut&&(rt!=null||ut!=null)&&(V==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":cn(e,n,V,rt,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)rt=a[ge],a.hasOwnProperty(ge)&&rt!=null&&!o.hasOwnProperty(ge)&&cn(e,n,ge,null,o,rt);for(at in o)if(rt=o[at],ut=a[at],o.hasOwnProperty(at)&&rt!==ut&&(rt!=null||ut!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:cn(e,n,at,rt,o,ut)}return;default:if(Hi(n)){for(var un in a)rt=a[un],a.hasOwnProperty(un)&&rt!==void 0&&!o.hasOwnProperty(un)&&lp(e,n,un,void 0,o,rt);for(gt in o)rt=o[gt],ut=a[gt],!o.hasOwnProperty(gt)||rt===ut||rt===void 0&&ut===void 0||lp(e,n,gt,rt,o,ut);return}}for(var Z in a)rt=a[Z],a.hasOwnProperty(Z)&&rt!=null&&!o.hasOwnProperty(Z)&&cn(e,n,Z,null,o,rt);for(St in o)rt=o[St],ut=a[St],!o.hasOwnProperty(St)||rt===ut||rt==null&&ut==null||cn(e,n,St,rt,o,ut)}function W_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&W_(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],at=V.startTime;if(at>R)break;var gt=V.transferSize,St=V.initiatorType;gt&&W_(St)&&(V=V.responseEnd,v+=gt*(V<R?1:(R-at)/(V-at)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cp=null,up=null;function Eu(e){return e.nodeType===9?e:e.ownerDocument}function Y_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function fp(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hp=null;function ky(){var e=window.event;return e&&e.type==="popstate"?e===hp?!1:(hp=e,!0):(hp=null,!1)}var j_=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(e){return Z_.resolve(null).then(e).catch(Yy)}:j_;function Yy(e){setTimeout(function(){throw e})}function $s(e){return e==="head"}function K_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),zo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")$l(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,$l(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Sa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&$l(e.ownerDocument.body);a=u}while(a);zo(n)}function Q_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function dp(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dp(a),bn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Sa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ua(e.nextSibling),e===null)break}return null}function jy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ua(e.nextSibling),e===null))return null;return e}function J_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ua(e.nextSibling),e===null))return null;return e}function pp(e){return e.data==="$?"||e.data==="$~"}function mp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Zy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ua(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var gp=null;function $_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ua(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function tv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ev(e,n,a){switch(n=Eu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function $l(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);bn(e)}var fa=new Map,nv=new Set;function bu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ys=P.d;P.d={f:Ky,r:Qy,D:Jy,C:$y,L:tM,m:eM,X:iM,S:nM,M:aM};function Ky(){var e=ys.f(),n=mu();return e||n}function Qy(e){var n=is(e);n!==null&&n.tag===5&&n.type==="form"?xg(n):ys.r(e)}var Po=typeof document>"u"?null:document;function iv(e,n,a){var o=Po;if(o&&typeof n=="string"&&n){var u=he(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),nv.has(u)||(nv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),ci(n,"link",e),X(n),o.head.appendChild(n)))}}function Jy(e){ys.D(e),iv("dns-prefetch",e,null)}function $y(e,n){ys.C(e,n),iv("preconnect",e,n)}function tM(e,n,a){ys.L(e,n,a);var o=Po;if(o&&e&&n){var u='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+he(a.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var f=u;switch(n){case"style":f=Fo(e);break;case"script":f=Bo(e)}fa.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fa.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(tc(f))||n==="script"&&o.querySelector(ec(f))||(n=o.createElement("link"),ci(n,"link",e),X(n),o.head.appendChild(n)))}}function eM(e,n){ys.m(e,n);var a=Po;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+he(o)+'"][href="'+he(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Bo(e)}if(!fa.has(f)&&(e=x({rel:"modulepreload",href:e},n),fa.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ec(f)))return}o=a.createElement("link"),ci(o,"link",e),X(o),a.head.appendChild(o)}}}function nM(e,n,a){ys.S(e,n,a);var o=Po;if(o&&e){var u=A(o).hoistableStyles,f=Fo(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(tc(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fa.get(f))&&_p(e,a);var V=v=o.createElement("link");X(V),ci(V,"link",e),V._p=new Promise(function(at,gt){V.onload=at,V.onerror=gt}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Tu(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function iM(e,n){ys.X(e,n);var a=Po;if(a&&e){var o=A(a).hoistableScripts,u=Bo(e),f=o.get(u);f||(f=a.querySelector(ec(u)),f||(e=x({src:e,async:!0},n),(n=fa.get(u))&&vp(e,n),f=a.createElement("script"),X(f),ci(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function aM(e,n){ys.M(e,n);var a=Po;if(a&&e){var o=A(a).hoistableScripts,u=Bo(e),f=o.get(u);f||(f=a.querySelector(ec(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=fa.get(u))&&vp(e,n),f=a.createElement("script"),X(f),ci(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function av(e,n,a,o){var u=(u=tt.current)?bu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Fo(a.href),a=A(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fo(a.href);var f=A(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(tc(e)))&&!f._p&&(v.instance=f,v.state.loading=5),fa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fa.set(e,a),f||sM(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Bo(a),a=A(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Fo(e){return'href="'+he(e)+'"'}function tc(e){return'link[rel="stylesheet"]['+e+"]"}function sv(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function sM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ci(n,"link",a),X(n),e.head.appendChild(n))}function Bo(e){return'[src="'+he(e)+'"]'}function ec(e){return"script[async]"+e}function rv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+he(a.href)+'"]');if(o)return n.instance=o,X(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),ci(o,"style",u),Tu(o,a.precedence,e),n.instance=o;case"stylesheet":u=Fo(a.href);var f=e.querySelector(tc(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;o=sv(a),(u=fa.get(u))&&_p(o,u),f=(e.ownerDocument||e).createElement("link"),X(f);var v=f;return v._p=new Promise(function(R,V){v.onload=R,v.onerror=V}),ci(f,"link",o),n.state.loading|=4,Tu(f,a.precedence,e),n.instance=f;case"script":return f=Bo(a.src),(u=e.querySelector(ec(f)))?(n.instance=u,X(u),u):(o=a,(u=fa.get(f))&&(o=x({},a),vp(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),ci(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Tu(o,a.precedence,e));return n.instance}function Tu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function _p(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function vp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Au=null;function ov(e,n,a){if(Au===null){var o=new Map,u=Au=new Map;u.set(a,o)}else u=Au,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Sa]||f[xn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function lv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function rM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function cv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Fo(o.href),f=n.querySelector(tc(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ru.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,o=sv(o),(u=fa.get(u))&&_p(o,u),f=f.createElement("link"),X(f);var v=f;v._p=new Promise(function(R,V){v.onload=R,v.onerror=V}),ci(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ru.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var xp=0;function lM(e,n){return e.stylesheets&&e.count===0&&wu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&wu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&xp===0&&(xp=62500*Vy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>xp?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cu=null;function wu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cu=new Map,n.forEach(cM,e),Cu=null,Ru.call(e))}function cM(e,n){if(!(n.state.loading&4)){var a=Cu.get(e);if(a)var o=a.get(null);else{a=new Map,Cu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=Ru.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var nc={$$typeof:O,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function uM(e,n,a,o,u,f,v,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function uv(e,n,a,o,u,f,v,R,V,at,gt,St){return e=new uM(e,n,a,v,V,at,gt,St,R),n=1,f===!0&&(n|=24),f=Xi(3,null,null,n),e.current=f,f.stateNode=e,n=Jh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},nd(f),e}function fv(e){return e?(e=mo,e):mo}function hv(e,n,a,o,u,f){u=fv(u),o.context===null?o.context=u:o.pendingContext=u,o=Vs(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ks(e,o,n),a!==null&&(Ii(a,e,n),Ol(a,e,n))}function dv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Sp(e,n){dv(e,n),(e=e.alternate)&&dv(e,n)}function pv(e){if(e.tag===13||e.tag===31){var n=Nr(e,67108864);n!==null&&Ii(n,e,67108864),Sp(e,67108864)}}function mv(e){if(e.tag===13||e.tag===31){var n=Zi();n=ts(n);var a=Nr(e,n);a!==null&&Ii(a,e,n),Sp(e,n)}}var Du=!0;function fM(e,n,a,o){var u=L.T;L.T=null;var f=P.p;try{P.p=2,yp(e,n,a,o)}finally{P.p=f,L.T=u}}function hM(e,n,a,o){var u=L.T;L.T=null;var f=P.p;try{P.p=8,yp(e,n,a,o)}finally{P.p=f,L.T=u}}function yp(e,n,a,o){if(Du){var u=Mp(o);if(u===null)op(e,n,o,Nu,a),_v(e,o);else if(pM(u,e,n,a,o))o.stopPropagation();else if(_v(e,o),n&4&&-1<dM.indexOf(e)){for(;u!==null;){var f=is(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=bt(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var V=1<<31-Pt(v);R.entanglements[1]|=V,v&=~V}Wa(f),($e&6)===0&&(du=E()+500,Kl(0))}}break;case 31:case 13:R=Nr(f,2),R!==null&&Ii(R,f,2),mu(),Sp(f,2)}if(f=Mp(o),f===null&&op(e,n,o,Nu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else op(e,n,o,null,a)}}function Mp(e){return e=xr(e),Ep(e)}var Nu=null;function Ep(e){if(Nu=null,e=Ri(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Nu=e,null}function gv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ft:return 2;case _t:return 8;case ct:case Gt:return 32;case At:return 268435456;default:return 32}default:return 32}}var bp=!1,tr=null,er=null,nr=null,ic=new Map,ac=new Map,ir=[],dM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _v(e,n){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ic.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ac.delete(n.pointerId)}}function sc(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=is(n),n!==null&&pv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function pM(e,n,a,o,u){switch(n){case"focusin":return tr=sc(tr,e,n,a,o,u),!0;case"dragenter":return er=sc(er,e,n,a,o,u),!0;case"mouseover":return nr=sc(nr,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ic.set(f,sc(ic.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ac.set(f,sc(ac.get(f)||null,e,n,a,o,u)),!0}return!1}function vv(e){var n=Ri(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ns(e.priority,function(){mv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,ns(e.priority,function(){mv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Mp(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);lo=o,a.target.dispatchEvent(o),lo=null}else return n=is(a),n!==null&&pv(n),e.blockedOn=a,!1;n.shift()}return!0}function xv(e,n,a){Uu(e)&&a.delete(n)}function mM(){bp=!1,tr!==null&&Uu(tr)&&(tr=null),er!==null&&Uu(er)&&(er=null),nr!==null&&Uu(nr)&&(nr=null),ic.forEach(xv),ac.forEach(xv)}function Lu(e,n){e.blockedOn===n&&(e.blockedOn=null,bp||(bp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,mM)))}var Ou=null;function Sv(e){Ou!==e&&(Ou=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ou===e&&(Ou=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ep(o||a)===null)continue;break}var f=is(a);f!==null&&(e.splice(n,3),n-=3,Md(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function zo(e){function n(V){return Lu(V,e)}tr!==null&&Lu(tr,e),er!==null&&Lu(er,e),nr!==null&&Lu(nr,e),ic.forEach(n),ac.forEach(n);for(var a=0;a<ir.length;a++){var o=ir[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)vv(a),a.blockedOn===null&&ir.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[En]||null;if(typeof f=="function")v||Sv(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[En]||null)R=v.formAction;else if(Ep(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Sv(a)}}}function yv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Tp(e){this._internalRoot=e}Iu.prototype.render=Tp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Zi();hv(a,o,e,n,null,null)},Iu.prototype.unmount=Tp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;hv(e.current,2,null,e,null,null),mu(),n[zi]=null}};function Iu(e){this._internalRoot=e}Iu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ir.length&&n!==0&&n<ir[a].priority;a++);ir.splice(a,0,e),a===0&&vv(e)}};var Mv=t.version;if(Mv!=="19.2.4")throw Error(s(527,Mv,"19.2.4"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var gM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Mt=Pu.inject(gM),Et=Pu}catch{}}return oc.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=wg,f=Dg,v=Ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=uv(e,1,!1,null,null,a,o,null,u,f,v,yv),e[zi]=n.current,rp(e),new Tp(n)},oc.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=wg,v=Dg,R=Ng,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=uv(e,1,!0,n,a??null,o,u,V,f,v,R,yv),n.context=fv(null),a=n.current,o=Zi(),o=ts(o),u=Vs(o),u.callback=null,ks(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Wa(n),e[zi]=n.current,rp(e),new Iu(n)},oc.version="19.2.4",oc}var Uv;function AM(){if(Uv)return Cp.exports;Uv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Cp.exports=TM(),Cp.exports}var RM=AM();const ch="183",Ux=0,mm=1,Lx=2,rl=1,Ox=2,il=3,Ns=0,_i=1,Wn=2,Ka=0,to=1,gm=2,_m=3,vm=4,Ix=5,hr=100,Px=101,Fx=102,Bx=103,zx=104,Hx=200,Gx=201,Vx=202,kx=203,xf=204,Sf=205,Xx=206,Wx=207,Yx=208,qx=209,jx=210,Zx=211,Kx=212,Qx=213,Jx=214,yf=0,Mf=1,Ef=2,eo=3,bf=4,Tf=5,Af=6,Rf=7,uh=0,$x=1,tS=2,Ua=0,Dm=1,Nm=2,Um=3,fh=4,Lm=5,Om=6,Im=7,Pm=300,mr=301,no=302,df=303,pf=304,Uc=306,ll=1e3,Za=1001,Cf=1002,ei=1003,eS=1004,xc=1005,ni=1006,mf=1007,ws=1008,Pi=1009,Fm=1010,Bm=1011,cl=1012,hh=1013,Oa=1014,ma=1015,Qa=1016,dh=1017,ph=1018,ul=1020,zm=35902,Hm=35899,Gm=1021,Vm=1022,ga=1023,Ja=1026,dr=1027,mh=1028,gh=1029,io=1030,_h=1031,vh=1033,yc=33776,Mc=33777,Ec=33778,bc=33779,wf=35840,Df=35841,Nf=35842,Uf=35843,Lf=36196,Of=37492,If=37496,Pf=37488,Ff=37489,Bf=37490,zf=37491,Hf=37808,Gf=37809,Vf=37810,kf=37811,Xf=37812,Wf=37813,Yf=37814,qf=37815,jf=37816,Zf=37817,Kf=37818,Qf=37819,Jf=37820,$f=37821,th=36492,eh=36494,nh=36495,ih=36283,ah=36284,sh=36285,rh=36286,nS=3200,xh=0,iS=1,Rs="",jn="srgb",ao="srgb-linear",Cc="linear",en="srgb",Qr=7680,xm=519,aS=512,sS=513,rS=514,Sh=515,oS=516,lS=517,yh=518,cS=519,Sm=35044,ym="300 es",Na=2e3,fl=2001;function CM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function oh(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uS(){const r=oh("canvas");return r.style.display="block",r}const Lv={};function Mm(...r){const t="THREE."+r.shift();console.log(t,...r)}function fS(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function xe(...r){r=fS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ye(...r){r=fS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function wc(...r){const t=r.join(" ");t in Lv||(Lv[t]=!0,xe(...r))}function wM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const DM={[yf]:Mf,[Ef]:Af,[bf]:Rf,[eo]:Tf,[Mf]:yf,[Af]:Ef,[Rf]:bf,[Tf]:eo};class so{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ov=1234567;const Tc=Math.PI/180,hl=180/Math.PI;function ml(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(mi[r&255]+mi[r>>8&255]+mi[r>>16&255]+mi[r>>24&255]+"-"+mi[t&255]+mi[t>>8&255]+"-"+mi[t>>16&15|64]+mi[t>>24&255]+"-"+mi[i&63|128]+mi[i>>8&255]+"-"+mi[i>>16&255]+mi[i>>24&255]+mi[s&255]+mi[s>>8&255]+mi[s>>16&255]+mi[s>>24&255]).toLowerCase()}function Le(r,t,i){return Math.max(t,Math.min(i,r))}function km(r,t){return(r%t+t)%t}function NM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function UM(r,t,i){return r!==t?(i-r)/(t-r):0}function Ac(r,t,i){return(1-i)*r+i*t}function LM(r,t,i,s){return Ac(r,t,1-Math.exp(-i*s))}function OM(r,t=1){return t-Math.abs(km(r,t*2)-t)}function IM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function PM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function FM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function BM(r,t){return r+Math.random()*(t-r)}function zM(r){return r*(.5-Math.random())}function HM(r){r!==void 0&&(Ov=r);let t=Ov+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function GM(r){return r*Tc}function VM(r){return r*hl}function kM(r){return(r&r-1)===0&&r!==0}function XM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function WM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function YM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),_=h((t+s)/2),x=c((t-s)/2),g=h((t-s)/2),y=c((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":r.set(d*_,m*x,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*x,d*p);break;case"ZXZ":r.set(m*x,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*b,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*b,d*p);break;case"ZYZ":r.set(m*b,m*y,d*_,d*p);break;default:xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function nl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ei={DEG2RAD:Tc,RAD2DEG:hl,generateUUID:ml,clamp:Le,euclideanModulo:km,mapLinear:NM,inverseLerp:UM,lerp:Ac,damp:LM,pingpong:OM,smoothstep:IM,smootherstep:PM,randInt:FM,randFloat:BM,randFloatSpread:zM,seededRandom:HM,degToRad:GM,radToDeg:VM,isPowerOfTwo:kM,ceilPowerOfTwo:XM,floorPowerOfTwo:WM,setQuaternionFromProperEuler:YM,normalize:Mi,denormalize:nl};class Oe{constructor(t=0,i=0){Oe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ro{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],y=c[h+1],b=c[h+2],w=c[h+3];if(x!==w||m!==g||p!==y||_!==b){let M=m*g+p*y+_*b+x*w;M<0&&(g=-g,y=-y,b=-b,w=-w,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),O=Math.sin(C);S=Math.sin(S*C)/O,d=Math.sin(d*C)/O,m=m*S+g*d,p=p*S+y*d,_=_*S+b*d,x=x*S+w*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+b*d,x=x*S+w*d;const C=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=C,p*=C,_*=C,x*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[h],g=c[h+1],y=c[h+2],b=c[h+3];return t[i]=d*b+_*x+m*y-p*g,t[i+1]=m*b+_*g+p*x-d*y,t[i+2]=p*b+_*y+d*g-m*x,t[i+3]=_*b-d*x-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),g=m(s/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*_*x+p*y*b,this._y=p*y*x-g*_*b,this._z=p*_*b+g*y*x,this._w=p*_*x-g*y*b;break;case"YXZ":this._x=g*_*x+p*y*b,this._y=p*y*x-g*_*b,this._z=p*_*b-g*y*x,this._w=p*_*x+g*y*b;break;case"ZXY":this._x=g*_*x-p*y*b,this._y=p*y*x+g*_*b,this._z=p*_*b+g*y*x,this._w=p*_*x-g*y*b;break;case"ZYX":this._x=g*_*x-p*y*b,this._y=p*y*x+g*_*b,this._z=p*_*b-g*y*x,this._w=p*_*x+g*y*b;break;case"YZX":this._x=g*_*x+p*y*b,this._y=p*y*x+g*_*b,this._z=p*_*b-g*y*x,this._w=p*_*x-g*y*b;break;case"XZY":this._x=g*_*x-p*y*b,this._y=p*y*x-g*_*b,this._z=p*_*b+g*y*x,this._w=p*_*x+g*y*b;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],g=s+d+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>x){const y=2*Math.sqrt(1+s-d-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-s-x);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Iv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Iv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Up.copy(this).projectOnVector(t),this.sub(Up)}reflect(t){return this.sub(Up.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Up=new K,Iv=new ro;class Ce{constructor(t,i,s,l,c,h,d,m,p){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],y=s[5],b=s[8],w=l[0],M=l[3],S=l[6],C=l[1],O=l[4],D=l[7],B=l[2],H=l[5],G=l[8];return c[0]=h*w+d*C+m*B,c[3]=h*M+d*O+m*H,c[6]=h*S+d*D+m*G,c[1]=p*w+_*C+x*B,c[4]=p*M+_*O+x*H,c[7]=p*S+_*D+x*G,c[2]=g*w+y*C+b*B,c[5]=g*M+y*O+b*H,c[8]=g*S+y*D+b*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,g=d*m-_*c,y=p*c-h*m,b=i*x+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=x*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*h)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=y*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Lp.makeScale(t,i)),this}rotate(t){return this.premultiply(Lp.makeRotation(-t)),this}translate(t,i){return this.premultiply(Lp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lp=new Ce,Pv=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fv=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qM(){const r={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===en&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===en&&(l.r=ol(l.r),l.g=ol(l.g),l.b=ol(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Rs?Cc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return wc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return wc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ao]:{primaries:t,whitePoint:s,transfer:Cc,toXYZ:Pv,fromXYZ:Fv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:s,transfer:en,toXYZ:Pv,fromXYZ:Fv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),r}const qe=qM();function Ds(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ol(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ho;class hS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ho===void 0&&(Ho=oh("canvas")),Ho.width=t.width,Ho.height=t.height;const l=Ho.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ho}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=oh("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ds(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ds(i[s]/255)*255):i[s]=Ds(i[s]);return{data:i,width:t.width,height:t.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jM=0;class Mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=ml(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Op(l[h].image)):c.push(Op(l[h]))}else c=Op(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Op(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}let ZM=0;const Ip=new K;class ui extends so{constructor(t=ui.DEFAULT_IMAGE,i=ui.DEFAULT_MAPPING,s=Za,l=Za,c=ni,h=ws,d=ga,m=Pi,p=ui.DEFAULT_ANISOTROPY,_=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=ml(),this.name="",this.source=new Mh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ip).x}get height(){return this.source.getSize(Ip).y}get depth(){return this.source.getSize(Ip).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){xe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){xe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ll:t.x=t.x-Math.floor(t.x);break;case Za:t.x=t.x<0?0:1;break;case Cf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ll:t.y=t.y-Math.floor(t.y);break;case Za:t.y=t.y<0?0:1;break;case Cf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=Pm;ui.DEFAULT_ANISOTROPY=1;class Rn{constructor(t=0,i=0,s=0,l=1){Rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],g=m[1],y=m[5],b=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+w)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(y+1)/2,B=(S+1)/2,H=(_+g)/4,G=(x+w)/4,T=(b+M)/4;return O>D&&O>B?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=H/s,c=G/s):D>B?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=H/l,c=T/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=G/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-b)*(M-b)+(x-w)*(x-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(x-w)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this.w=Le(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this.w=Le(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dS extends so{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Rn(0,0,t,i),this.scissorTest=!1,this.viewport=new Rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ui(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Mh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class La extends dS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Xm extends ui{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pS extends ui{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(t,i,s,l,c,h,d,m,p,_,x,g,y,b,w,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,x,g,y,b,w,M)}set(t,i,s,l,c,h,d,m,p,_,x,g,y,b,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=x,S[14]=g,S[3]=y,S[7]=b,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Go.setFromMatrixColumn(t,0).length(),c=1/Go.setFromMatrixColumn(t,1).length(),h=1/Go.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*x,b=d*_,w=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+b*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=b+y*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*x,b=p*_,w=p*x;i[0]=g+w*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=w+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*x,b=p*_,w=p*x;i[0]=g-w*d,i[4]=-h*x,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=w-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*x,b=d*_,w=d*x;i[0]=m*_,i[4]=b*p-y,i[8]=g*p+w,i[1]=m*x,i[5]=w*p+g,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*p,b=d*m,w=d*p;i[0]=m*_,i[4]=w-g*x,i[8]=b*x+y,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*x+b,i[10]=g-w*x}else if(t.order==="XZY"){const g=h*m,y=h*p,b=d*m,w=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=g*x+w,i[5]=h*_,i[9]=y*x-b,i[2]=b*x-y,i[6]=d*_,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KM,t,QM)}lookAt(t,i,s){const l=this.elements;return Ki.subVectors(t,i),Ki.lengthSq()===0&&(Ki.z=1),Ki.normalize(),sr.crossVectors(s,Ki),sr.lengthSq()===0&&(Math.abs(s.z)===1?Ki.x+=1e-4:Ki.z+=1e-4,Ki.normalize(),sr.crossVectors(s,Ki)),sr.normalize(),Fu.crossVectors(Ki,sr),l[0]=sr.x,l[4]=Fu.x,l[8]=Ki.x,l[1]=sr.y,l[5]=Fu.y,l[9]=Ki.y,l[2]=sr.z,l[6]=Fu.z,l[10]=Ki.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],y=s[13],b=s[2],w=s[6],M=s[10],S=s[14],C=s[3],O=s[7],D=s[11],B=s[15],H=l[0],G=l[4],T=l[8],N=l[12],dt=l[1],z=l[5],$=l[9],Q=l[13],nt=l[2],j=l[6],L=l[10],P=l[14],st=l[3],pt=l[7],yt=l[11],I=l[15];return c[0]=h*H+d*dt+m*nt+p*st,c[4]=h*G+d*z+m*j+p*pt,c[8]=h*T+d*$+m*L+p*yt,c[12]=h*N+d*Q+m*P+p*I,c[1]=_*H+x*dt+g*nt+y*st,c[5]=_*G+x*z+g*j+y*pt,c[9]=_*T+x*$+g*L+y*yt,c[13]=_*N+x*Q+g*P+y*I,c[2]=b*H+w*dt+M*nt+S*st,c[6]=b*G+w*z+M*j+S*pt,c[10]=b*T+w*$+M*L+S*yt,c[14]=b*N+w*Q+M*P+S*I,c[3]=C*H+O*dt+D*nt+B*st,c[7]=C*G+O*z+D*j+B*pt,c[11]=C*T+O*$+D*L+B*yt,c[15]=C*N+O*Q+D*P+B*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],g=t[10],y=t[14],b=t[3],w=t[7],M=t[11],S=t[15],C=m*y-p*g,O=d*y-p*x,D=d*g-m*x,B=h*y-p*_,H=h*g-m*_,G=h*x-d*_;return i*(w*C-M*O+S*D)-s*(b*C-M*B+S*H)+l*(b*O-w*B+S*G)-c*(b*D-w*H+M*G)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],g=t[10],y=t[11],b=t[12],w=t[13],M=t[14],S=t[15],C=i*d-s*h,O=i*m-l*h,D=i*p-c*h,B=s*m-l*d,H=s*p-c*d,G=l*p-c*m,T=_*w-x*b,N=_*M-g*b,dt=_*S-y*b,z=x*M-g*w,$=x*S-y*w,Q=g*S-y*M,nt=C*Q-O*$+D*z+B*dt-H*N+G*T;if(nt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/nt;return t[0]=(d*Q-m*$+p*z)*j,t[1]=(l*$-s*Q-c*z)*j,t[2]=(w*G-M*H+S*B)*j,t[3]=(g*H-x*G-y*B)*j,t[4]=(m*dt-h*Q-p*N)*j,t[5]=(i*Q-l*dt+c*N)*j,t[6]=(M*D-b*G-S*O)*j,t[7]=(_*G-g*D+y*O)*j,t[8]=(h*$-d*dt+p*T)*j,t[9]=(s*dt-i*$-c*T)*j,t[10]=(b*H-w*D+S*C)*j,t[11]=(x*D-_*H-y*C)*j,t[12]=(d*N-h*z-m*T)*j,t[13]=(i*z-s*N+l*T)*j,t[14]=(w*O-b*B-M*C)*j,t[15]=(_*B-x*O+g*C)*j,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,g=c*p,y=c*_,b=c*x,w=h*_,M=h*x,S=d*x,C=m*p,O=m*_,D=m*x,B=s.x,H=s.y,G=s.z;return l[0]=(1-(w+S))*B,l[1]=(y+D)*B,l[2]=(b-O)*B,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(g+S))*H,l[6]=(M+C)*H,l[7]=0,l[8]=(b+O)*G,l[9]=(M-C)*G,l[10]=(1-(g+w))*G,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Go.set(l[0],l[1],l[2]).length();const d=Go.set(l[4],l[5],l[6]).length(),m=Go.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Aa.copy(this);const p=1/h,_=1/d,x=1/m;return Aa.elements[0]*=p,Aa.elements[1]*=p,Aa.elements[2]*=p,Aa.elements[4]*=_,Aa.elements[5]*=_,Aa.elements[6]*=_,Aa.elements[8]*=x,Aa.elements[9]*=x,Aa.elements[10]*=x,i.setFromRotationMatrix(Aa),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=Na,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let b,w;if(m)b=c/(h-c),w=h*c/(h-c);else if(d===Na)b=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===fl)b=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Na,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,w;if(m)b=1/(h-c),w=h/(h-c);else if(d===Na)b=-2/(h-c),w=-(h+c)/(h-c);else if(d===fl)b=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Go=new K,Aa=new fn,KM=new K(0,0,0),QM=new K(1,1,1),sr=new K,Fu=new K,Ki=new K,Bv=new fn,zv=new ro;class va{constructor(t=0,i=0,s=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Le(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Le(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Le(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Bv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return zv.setFromEuler(this),this.setFromQuaternion(zv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let JM=0;const Hv=new K,Vo=new ro,Ms=new fn,Bu=new K,lc=new K,$M=new K,tE=new ro,Gv=new K(1,0,0),Vv=new K(0,1,0),kv=new K(0,0,1),Xv={type:"added"},eE={type:"removed"},ko={type:"childadded",child:null},Pp={type:"childremoved",child:null};class pn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new K,i=new va,s=new ro,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new Ce}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Vo.setFromAxisAngle(t,i),this.quaternion.multiply(Vo),this}rotateOnWorldAxis(t,i){return Vo.setFromAxisAngle(t,i),this.quaternion.premultiply(Vo),this}rotateX(t){return this.rotateOnAxis(Gv,t)}rotateY(t){return this.rotateOnAxis(Vv,t)}rotateZ(t){return this.rotateOnAxis(kv,t)}translateOnAxis(t,i){return Hv.copy(t).applyQuaternion(this.quaternion),this.position.add(Hv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Gv,t)}translateY(t){return this.translateOnAxis(Vv,t)}translateZ(t){return this.translateOnAxis(kv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Bu.copy(t):Bu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),lc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(lc,Bu,this.up):Ms.lookAt(Bu,lc,this.up),this.quaternion.setFromRotationMatrix(Ms),l&&(Ms.extractRotation(l.matrixWorld),Vo.setFromRotationMatrix(Ms),this.quaternion.premultiply(Vo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xv),ko.child=t,this.dispatchEvent(ko),ko.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(eE),Pp.child=t,this.dispatchEvent(Pp),Pp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xv),ko.child=t,this.dispatchEvent(ko),ko.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,t,$M),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,tE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),y=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}pn.DEFAULT_UP=new K(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class al extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nE={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,b=.005;p.inputState.pinching&&g>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new al;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const mS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},zu={h:0,s:0,l:0};function Fp(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=qe.workingColorSpace){return this.r=t,this.g=i,this.b=s,qe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=qe.workingColorSpace){if(t=km(t,1),i=Le(i,0,1),s=Le(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Fp(h,c,t+1/3),this.g=Fp(h,c,t),this.b=Fp(h,c,t-1/3)}return qe.colorSpaceToWorking(this,l),this}setStyle(t,i=jn){function s(c){c!==void 0&&parseFloat(c)<1&&xe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:xe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);xe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=jn){const s=mS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):xe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}copyLinearToSRGB(t){return this.r=ol(t.r),this.g=ol(t.g),this.b=ol(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return qe.workingToColorSpace(gi.copy(this),t),Math.round(Le(gi.r*255,0,255))*65536+Math.round(Le(gi.g*255,0,255))*256+Math.round(Le(gi.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=qe.workingColorSpace){qe.workingToColorSpace(gi.copy(this),i);const s=gi.r,l=gi.g,c=gi.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=qe.workingColorSpace){return qe.workingToColorSpace(gi.copy(this),i),t.r=gi.r,t.g=gi.g,t.b=gi.b,t}getStyle(t=jn){qe.workingToColorSpace(gi.copy(this),t);const i=gi.r,s=gi.g,l=gi.b;return t!==jn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+i,rr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(rr),t.getHSL(zu);const s=Ac(rr.h,zu.h,i),l=Ac(rr.s,zu.s,i),c=Ac(rr.l,zu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gi=new me;me.NAMES=mS;class Dc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new me(t),this.near=i,this.far=s}clone(){return new Dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wm extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ra=new K,Es=new K,Bp=new K,bs=new K,Xo=new K,Wo=new K,Wv=new K,zp=new K,Hp=new K,Gp=new K,Vp=new Rn,kp=new Rn,Xp=new Rn;class pa{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ra.subVectors(t,i),l.cross(Ra);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ra.subVectors(l,i),Es.subVectors(s,i),Bp.subVectors(t,i);const h=Ra.dot(Ra),d=Ra.dot(Es),m=Ra.dot(Bp),p=Es.dot(Es),_=Es.dot(Bp),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(p*m-d*_)*g,b=(h*_-d*m)*g;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,bs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,bs.x),m.addScaledVector(h,bs.y),m.addScaledVector(d,bs.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Vp.setScalar(0),kp.setScalar(0),Xp.setScalar(0),Vp.fromBufferAttribute(t,i),kp.fromBufferAttribute(t,s),Xp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Vp,c.x),h.addScaledVector(kp,c.y),h.addScaledVector(Xp,c.z),h}static isFrontFacing(t,i,s,l){return Ra.subVectors(s,i),Es.subVectors(t,i),Ra.cross(Es).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ra.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),Ra.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return pa.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return pa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Xo.subVectors(l,s),Wo.subVectors(c,s),zp.subVectors(t,s);const m=Xo.dot(zp),p=Wo.dot(zp);if(m<=0&&p<=0)return i.copy(s);Hp.subVectors(t,l);const _=Xo.dot(Hp),x=Wo.dot(Hp);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Xo,h);Gp.subVectors(t,c);const y=Xo.dot(Gp),b=Wo.dot(Gp);if(b>=0&&y<=b)return i.copy(c);const w=y*p-m*b;if(w<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Wo,d);const M=_*b-y*x;if(M<=0&&x-_>=0&&y-b>=0)return Wv.subVectors(c,l),d=(x-_)/(x-_+(y-b)),i.copy(l).addScaledVector(Wv,d);const S=1/(M+w+g);return h=w*S,d=g*S,i.copy(s).addScaledVector(Xo,h).addScaledVector(Wo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gr{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ca.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ca.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ca.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ca):Ca.fromBufferAttribute(c,h),Ca.applyMatrix4(t.matrixWorld),this.expandByPoint(Ca);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Hu.copy(s.boundingBox)),Hu.applyMatrix4(t.matrixWorld),this.union(Hu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ca),Ca.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cc),Gu.subVectors(this.max,cc),Yo.subVectors(t.a,cc),qo.subVectors(t.b,cc),jo.subVectors(t.c,cc),or.subVectors(qo,Yo),lr.subVectors(jo,qo),Xr.subVectors(Yo,jo);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Xr.z,Xr.y,or.z,0,-or.x,lr.z,0,-lr.x,Xr.z,0,-Xr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Xr.y,Xr.x,0];return!Wp(i,Yo,qo,jo,Gu)||(i=[1,0,0,0,1,0,0,0,1],!Wp(i,Yo,qo,jo,Gu))?!1:(Vu.crossVectors(or,lr),i=[Vu.x,Vu.y,Vu.z],Wp(i,Yo,qo,jo,Gu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ca).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ca).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ts=[new K,new K,new K,new K,new K,new K,new K,new K],Ca=new K,Hu=new gr,Yo=new K,qo=new K,jo=new K,or=new K,lr=new K,Xr=new K,cc=new K,Gu=new K,Vu=new K,Wr=new K;function Wp(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Wr.fromArray(r,c);const d=l.x*Math.abs(Wr.x)+l.y*Math.abs(Wr.y)+l.z*Math.abs(Wr.z),m=t.dot(Wr),p=i.dot(Wr),_=s.dot(Wr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Xn=new K,ku=new Oe;let iE=0;class _a{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Sm,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ku.fromBufferAttribute(this,i),ku.applyMatrix3(t),this.setXY(i,ku.x,ku.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix3(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix4(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyNormalMatrix(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.transformDirection(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=nl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Mi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=nl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Mi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=nl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Mi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=nl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Mi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=nl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Mi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Mi(i,this.array),s=Mi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Mi(i,this.array),s=Mi(s,this.array),l=Mi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Mi(i,this.array),s=Mi(s,this.array),l=Mi(l,this.array),c=Mi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sm&&(t.usage=this.usage),t}}class Ym extends _a{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class qm extends _a{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ii extends _a{constructor(t,i,s){super(new Float32Array(t),i,s)}}const aE=new gr,uc=new K,Yp=new K;class gl{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):aE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uc.subVectors(t,this.center);const i=uc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(uc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uc.copy(t.center).add(Yp)),this.expandByPoint(uc.copy(t.center).sub(Yp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let sE=0;const ha=new fn,qp=new pn,Zo=new K,Qi=new gr,fc=new gr,ti=new K;class Ji extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(CM(t)?qm:Ym)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Ce().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ha.makeRotationFromQuaternion(t),this.applyMatrix4(ha),this}rotateX(t){return ha.makeRotationX(t),this.applyMatrix4(ha),this}rotateY(t){return ha.makeRotationY(t),this.applyMatrix4(ha),this}rotateZ(t){return ha.makeRotationZ(t),this.applyMatrix4(ha),this}translate(t,i,s){return ha.makeTranslation(t,i,s),this.applyMatrix4(ha),this}scale(t,i,s){return ha.makeScale(t,i,s),this.applyMatrix4(ha),this}lookAt(t){return qp.lookAt(t),qp.updateMatrix(),this.applyMatrix4(qp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zo).negate(),this.translate(Zo.x,Zo.y,Zo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ii(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Qi.setFromBufferAttribute(c),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(Qi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];fc.setFromBufferAttribute(d),this.morphTargetsRelative?(ti.addVectors(Qi.min,fc.min),Qi.expandByPoint(ti),ti.addVectors(Qi.max,fc.max),Qi.expandByPoint(ti)):(Qi.expandByPoint(fc.min),Qi.expandByPoint(fc.max))}Qi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)ti.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(ti));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)ti.fromBufferAttribute(d,p),m&&(Zo.fromBufferAttribute(t,p),ti.add(Zo)),l=Math.max(l,s.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _a(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new K,m[T]=new K;const p=new K,_=new K,x=new K,g=new Oe,y=new Oe,b=new Oe,w=new K,M=new K;function S(T,N,dt){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,N),x.fromBufferAttribute(s,dt),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,N),b.fromBufferAttribute(c,dt),_.sub(p),x.sub(p),y.sub(g),b.sub(g);const z=1/(y.x*b.y-b.x*y.y);isFinite(z)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(z),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(z),d[T].add(w),d[N].add(w),d[dt].add(w),m[T].add(M),m[N].add(M),m[dt].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,N=C.length;T<N;++T){const dt=C[T],z=dt.start,$=dt.count;for(let Q=z,nt=z+$;Q<nt;Q+=3)S(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const O=new K,D=new K,B=new K,H=new K;function G(T){B.fromBufferAttribute(l,T),H.copy(B);const N=d[T];O.copy(N),O.sub(B.multiplyScalar(B.dot(N))).normalize(),D.crossVectors(H,N);const z=D.dot(m[T])<0?-1:1;h.setXYZW(T,O.x,O.y,O.z,z)}for(let T=0,N=C.length;T<N;++T){const dt=C[T],z=dt.start,$=dt.count;for(let Q=z,nt=z+$;Q<nt;Q+=3)G(t.getX(Q+0)),G(t.getX(Q+1)),G(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new _a(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,_=new K,x=new K;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)ti.fromBufferAttribute(t,i),ti.normalize(),t.setXYZ(i,ti.x,ti.y,ti.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,g=new p.constructor(m.length*_);let y=0,b=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*_;for(let S=0;S<_;S++)g[b++]=p[y++]}return new _a(g,_,x)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ji,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const y=p[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let rE=0;class oo extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=to,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xf,this.blendDst=Sf,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){xe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){xe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(s.blending=this.blending),this.side!==Ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xf&&(s.blendSrc=this.blendSrc),this.blendDst!==Sf&&(s.blendDst=this.blendDst),this.blendEquation!==hr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const As=new K,jp=new K,Xu=new K,cr=new K,Zp=new K,Wu=new K,Kp=new K;class jm{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,As)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=As.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(As.copy(this.origin).addScaledVector(this.direction,i),As.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){jp.copy(t).add(i).multiplyScalar(.5),Xu.copy(i).sub(t).normalize(),cr.copy(this.origin).sub(jp);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Xu),d=cr.dot(this.direction),m=-cr.dot(Xu),p=cr.lengthSq(),_=Math.abs(1-h*h);let x,g,y,b;if(_>0)if(x=h*m-d,g=h*d-m,b=c*_,x>=0)if(g>=-b)if(g<=b){const w=1/_;x*=w,g*=w,y=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g<=-b?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(jp).addScaledVector(Xu,g),y}intersectSphere(t,i){As.subVectors(t.center,this.origin);const s=As.dot(this.direction),l=As.dot(As)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,As)!==null}intersectTriangle(t,i,s,l,c){Zp.subVectors(i,t),Wu.subVectors(s,t),Kp.crossVectors(Zp,Wu);let h=this.direction.dot(Kp),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;cr.subVectors(this.origin,t);const m=d*this.direction.dot(Wu.crossVectors(cr,Wu));if(m<0)return null;const p=d*this.direction.dot(Zp.cross(cr));if(p<0||m+p>h)return null;const _=-d*cr.dot(Kp);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nc extends oo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yv=new fn,Yr=new jm,Yu=new gl,qv=new K,qu=new K,ju=new K,Zu=new K,Qp=new K,Ku=new K,jv=new K,Qu=new K;class We extends pn{constructor(t=new Ji,i=new Nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ku.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Qp.fromBufferAttribute(x,t),h?Ku.addScaledVector(Qp,_):Ku.addScaledVector(Qp.sub(i),_))}i.add(Ku)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Yu.copy(s.boundingSphere),Yu.applyMatrix4(c),Yr.copy(t.ray).recast(t.near),!(Yu.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Yu,qv)===null||Yr.origin.distanceToSquared(qv)>(t.far-t.near)**2))&&(Yv.copy(c).invert(),Yr.copy(t.ray).applyMatrix4(Yv),!(s.boundingBox!==null&&Yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Yr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const M=g[b],S=h[M.materialIndex],C=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,B=O;D<B;D+=3){const H=d.getX(D),G=d.getX(D+1),T=d.getX(D+2);l=Ju(this,S,t,s,p,_,x,H,G,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=b,S=w;M<S;M+=3){const C=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=Ju(this,h,t,s,p,_,x,C,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const M=g[b],S=h[M.materialIndex],C=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,B=O;D<B;D+=3){const H=D,G=D+1,T=D+2;l=Ju(this,S,t,s,p,_,x,H,G,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=b,S=w;M<S;M+=3){const C=M,O=M+1,D=M+2;l=Ju(this,h,t,s,p,_,x,C,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function oE(r,t,i,s,l,c,h,d){let m;if(t.side===_i?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ns,d),m===null)return null;Qu.copy(d),Qu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Qu);return p<i.near||p>i.far?null:{distance:p,point:Qu.clone(),object:r}}function Ju(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,qu),r.getVertexPosition(m,ju),r.getVertexPosition(p,Zu);const _=oE(r,t,i,s,qu,ju,Zu,jv);if(_){const x=new K;pa.getBarycoord(jv,qu,ju,Zu,x),l&&(_.uv=pa.getInterpolatedAttribute(l,d,m,p,x,new Oe)),c&&(_.uv1=pa.getInterpolatedAttribute(c,d,m,p,x,new Oe)),h&&(_.normal=pa.getInterpolatedAttribute(h,d,m,p,x,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new K,materialIndex:0};pa.getNormal(qu,ju,Zu,g.normal),_.face=g,_.barycoord=x}return _}class Zm extends ui{constructor(t=null,i=1,s=1,l,c,h,d,m,p=ei,_=ei,x,g){super(null,h,d,m,p,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Em extends _a{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ko=new fn,Zv=new fn,$u=[],Kv=new gr,lE=new fn,hc=new We,dc=new gl;class gS extends We{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Em(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,lE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new gr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ko),Kv.copy(t.boundingBox).applyMatrix4(Ko),this.boundingBox.union(Kv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new gl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ko),dc.copy(t.boundingSphere).applyMatrix4(Ko),this.boundingSphere.union(dc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(hc.geometry=this.geometry,hc.material=this.material,hc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dc.copy(this.boundingSphere),dc.applyMatrix4(s),t.ray.intersectsSphere(dc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ko),Zv.multiplyMatrices(s,Ko),hc.matrixWorld=Zv,hc.raycast(t,$u);for(let h=0,d=$u.length;h<d;h++){const m=$u[h];m.instanceId=c,m.object=this,i.push(m)}$u.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Em(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Zm(new Float32Array(l*this.count),l,this.count,mh,ma));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jp=new K,cE=new K,uE=new Ce;class fr{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Jp.subVectors(s,i).cross(cE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Jp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||uE.getNormalMatrix(t),l=this.coplanarPoint(Jp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new gl,fE=new Oe(.5,.5),tf=new K;class bh{constructor(t=new fr,i=new fr,s=new fr,l=new fr,c=new fr,h=new fr){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Na,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],y=c[7],b=c[8],w=c[9],M=c[10],S=c[11],C=c[12],O=c[13],D=c[14],B=c[15];if(l[0].setComponents(p-h,y-_,S-b,B-C).normalize(),l[1].setComponents(p+h,y+_,S+b,B+C).normalize(),l[2].setComponents(p+d,y+x,S+w,B+O).normalize(),l[3].setComponents(p-d,y-x,S-w,B-O).normalize(),s)l[4].setComponents(m,g,M,D).normalize(),l[5].setComponents(p-m,y-g,S-M,B-D).normalize();else if(l[4].setComponents(p-m,y-g,S-M,B-D).normalize(),i===Na)l[5].setComponents(p+m,y+g,S+M,B+D).normalize();else if(i===fl)l[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(t){qr.center.set(0,0,0);const i=fE.distanceTo(t.center);return qr.radius=.7071067811865476+i,qr.applyMatrix4(t.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(tf.x=l.normal.x>0?t.max.x:t.min.x,tf.y=l.normal.y>0?t.max.y:t.min.y,tf.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(tf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Km extends ui{constructor(t=[],i=mr,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sl extends ui{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dl extends ui{constructor(t,i,s=Oa,l,c,h,d=ei,m=ei,p,_=Ja,x=1){if(_!==Ja&&_!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _S extends dl{constructor(t,i=Oa,s=mr,l,c,h=ei,d=ei,m,p=Ja){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qm extends ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _r extends Ji{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ii(p,3)),this.setAttribute("normal",new ii(_,3)),this.setAttribute("uv",new ii(x,2));function b(w,M,S,C,O,D,B,H,G,T,N){const dt=D/G,z=B/T,$=D/2,Q=B/2,nt=H/2,j=G+1,L=T+1;let P=0,st=0;const pt=new K;for(let yt=0;yt<L;yt++){const I=yt*z-Q;for(let Y=0;Y<j;Y++){const mt=Y*dt-$;pt[w]=mt*C,pt[M]=I*O,pt[S]=nt,p.push(pt.x,pt.y,pt.z),pt[w]=0,pt[M]=0,pt[S]=H>0?1:-1,_.push(pt.x,pt.y,pt.z),x.push(Y/G),x.push(1-yt/T),P+=1}}for(let yt=0;yt<T;yt++)for(let I=0;I<G;I++){const Y=g+I+j*yt,mt=g+I+j*(yt+1),Rt=g+(I+1)+j*(yt+1),Ht=g+(I+1)+j*yt;m.push(Y,mt,Ht),m.push(mt,Rt,Ht),st+=6}d.addGroup(y,st,N),y+=st,g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class vS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xe("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(h-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new Oe:new K);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new K,l=[],c=[],h=[],d=new K,m=new fn;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new K)}c[0]=new K,h[0]=new K;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(Le(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,b))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Le(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),h[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Jm(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,_,x){let g=(h-c)/p-(d-c)/(p+_)+(d-h)/_,y=(d-h)/_-(m-h)/(_+x)+(m-d)/x;g*=_,y*=_,l(h,d,g,y)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const ef=new K,$p=new Jm,tm=new Jm,em=new Jm;class xS extends vS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new K){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(ef.subVectors(l[0],l[1]).add(l[0]),p=ef);const x=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(ef.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=ef),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(x),y),w=Math.pow(x.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);w<1e-4&&(w=1),b<1e-4&&(b=w),M<1e-4&&(M=w),$p.initNonuniformCatmullRom(p.x,x.x,g.x,_.x,b,w,M),tm.initNonuniformCatmullRom(p.y,x.y,g.y,_.y,b,w,M),em.initNonuniformCatmullRom(p.z,x.z,g.z,_.z,b,w,M)}else this.curveType==="catmullrom"&&($p.initCatmullRom(p.x,x.x,g.x,_.x,this.tension),tm.initCatmullRom(p.y,x.y,g.y,_.y,this.tension),em.initCatmullRom(p.z,x.z,g.z,_.z,this.tension));return s.set($p.calc(m),tm.calc(m),em.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new K().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class ja extends Ji{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,g=i/m,y=[],b=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-h;for(let O=0;O<p;O++){const D=O*x-c;b.push(D,-C,0),w.push(0,0,1),M.push(O/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<d;C++){const O=C+p*S,D=C+p*(S+1),B=C+1+p*(S+1),H=C+1+p*S;y.push(O,D,H),y.push(D,B,H)}this.setIndex(y),this.setAttribute("position",new ii(b,3)),this.setAttribute("normal",new ii(w,3)),this.setAttribute("uv",new ii(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.width,t.height,t.widthSegments,t.heightSegments)}}class Th extends Ji{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let x=t;const g=(i-t)/l,y=new K,b=new Oe;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const S=c+M/s*h;y.x=x*Math.cos(S),y.y=x*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),b.x=(y.x/i+1)/2,b.y=(y.y/i+1)/2,_.push(b.x,b.y)}x+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let S=0;S<s;S++){const C=S+M,O=C,D=C+s+1,B=C+s+2,H=C+1;d.push(O,D,H),d.push(D,B,H)}}this.setIndex(d),this.setAttribute("position",new ii(m,3)),this.setAttribute("normal",new ii(p,3)),this.setAttribute("uv",new ii(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Th(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ah extends Ji{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],x=new K,g=new K,y=[],b=[],w=[],M=[];for(let S=0;S<=s;S++){const C=[],O=S/s;let D=0;S===0&&h===0?D=.5/i:S===s&&m===Math.PI&&(D=-.5/i);for(let B=0;B<=i;B++){const H=B/i;x.x=-t*Math.cos(l+H*c)*Math.sin(h+O*d),x.y=t*Math.cos(h+O*d),x.z=t*Math.sin(l+H*c)*Math.sin(h+O*d),b.push(x.x,x.y,x.z),g.copy(x).normalize(),w.push(g.x,g.y,g.z),M.push(H+D,1-O),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const O=_[S][C+1],D=_[S][C],B=_[S+1][C],H=_[S+1][C+1];(S!==0||h>0)&&y.push(O,D,H),(S!==s-1||m<Math.PI)&&y.push(D,B,H)}this.setIndex(y),this.setAttribute("position",new ii(b,3)),this.setAttribute("normal",new ii(w,3)),this.setAttribute("uv",new ii(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ah(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function pl(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function bi(r){const t={};for(let i=0;i<r.length;i++){const s=pl(r[i]);for(const l in s)t[l]=s[l]}return t}function hE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function SS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}const yS={clone:pl,merge:bi};var dE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends oo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dE,this.fragmentShader=pE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pl(t.uniforms),this.uniformsGroups=hE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class MS extends Ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cs extends oo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jr extends Cs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ES extends oo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=uh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bS extends oo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class TS extends oo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _l extends pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class AS extends _l{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const nm=new fn,Qv=new K,Jv=new K;class $m{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Qv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Qv),Jv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Jv),i.updateMatrixWorld(),nm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nm,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===fl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(nm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nf=new K,af=new ro,Ya=new K;class t0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nf,af,Ya),Ya.x===1&&Ya.y===1&&Ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nf,af,Ya.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(nf,af,Ya),Ya.x===1&&Ya.y===1&&Ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nf,af,Ya.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new K,$v=new Oe,tx=new Oe;class Ti extends t0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,i){return this.getViewBounds(t,$v,tx),i.subVectors(tx,$v)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Tc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class mE extends $m{constructor(){super(new Ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=hl*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class _f extends _l{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new mE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class gE extends $m{constructor(){super(new Ti(90,1,.5,500)),this.isPointLightShadow=!0}}class Rc extends _l{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new gE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Rh extends t0{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _E extends $m{constructor(){super(new Rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bm extends _l{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new _E}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class RS extends _l{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qo=-90,Jo=1;class CS extends pn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(Qo,Jo,t,i);l.layers=this.layers,this.add(l);const c=new Ti(Qo,Jo,t,i);c.layers=this.layers,this.add(c);const h=new Ti(Qo,Jo,t,i);h.layers=this.layers,this.add(h);const d=new Ti(Qo,Jo,t,i);d.layers=this.layers,this.add(d);const m=new Ti(Qo,Jo,t,i);m.layers=this.layers,this.add(m);const p=new Ti(Qo,Jo,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===fl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class wS extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ex=new fn;class DS{constructor(t,i,s=0,l=1/0){this.ray=new jm(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ye("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return ex.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ex),this}intersectObject(t,i=!0,s=[]){return Tm(t,this,s,i),s.sort(nx),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Tm(t[l],this,s,i);return s.sort(nx),s}}function nx(r,t){return r.distance-t.distance}function Tm(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Tm(c[h],t,i,!0)}}class NS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,xe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function ix(r,t,i,s){const l=vE(s);switch(i){case Gm:return r*t;case mh:return r*t/l.components*l.byteLength;case gh:return r*t/l.components*l.byteLength;case io:return r*t*2/l.components*l.byteLength;case _h:return r*t*2/l.components*l.byteLength;case Vm:return r*t*3/l.components*l.byteLength;case ga:return r*t*4/l.components*l.byteLength;case vh:return r*t*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ec:case bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Df:case Uf:return Math.max(r,16)*Math.max(t,8)/4;case wf:case Nf:return Math.max(r,8)*Math.max(t,8)/2;case Lf:case Of:case Pf:case Ff:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case If:case Bf:case zf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gf:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Vf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case kf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Xf:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Wf:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case qf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case jf:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Kf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Qf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Jf:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case $f:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case th:case eh:case nh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ih:case ah:return Math.ceil(r/4)*Math.ceil(t/4)*8;case sh:case rh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vE(r){switch(r){case Pi:case Fm:return{byteLength:1,components:1};case cl:case Bm:case Qa:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case Oa:case hh:case ma:return{byteLength:4,components:1};case zm:case Hm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);function US(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function xE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<x.length;y++){const b=x[g],w=x[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,x[g]=w)}x.length=g+1;for(let y=0,b=x.length;y<b;y++){const w=x[y];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var SE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
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
#endif`,ME=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AE=`#ifdef USE_AOMAP
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
#endif`,RE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CE=`#ifdef USE_BATCHING
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
#endif`,wE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LE=`#ifdef USE_IRIDESCENCE
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
#endif`,OE=`#ifdef USE_BUMPMAP
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kE=`#define PI 3.141592653589793
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
} // validated`,XE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WE=`vec3 transformedNormal = objectNormal;
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
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",QE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
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
}`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
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
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_b=`PhysicalMaterial material;
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
#endif`,vb=`uniform sampler2D dfgLUT;
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
}`,xb=`
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
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
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
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wb=`#if defined( USE_POINTS_UV )
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
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
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
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vb=`#ifdef USE_NORMALMAP
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
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a1=`float getShadowMask() {
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
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,o1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S1=`uniform sampler2D t2D;
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
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
}`,A1=`#if DEPTH_PACKING == 3200
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
}`,R1=`#define DISTANCE
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
}`,C1=`#define DISTANCE
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
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
}`,U1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,O1=`uniform vec3 diffuse;
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
}`,I1=`#define LAMBERT
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
}`,P1=`#define LAMBERT
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
}`,F1=`#define MATCAP
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
}`,B1=`#define MATCAP
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
}`,z1=`#define NORMAL
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
}`,H1=`#define NORMAL
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
}`,G1=`#define PHONG
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
}`,V1=`#define PHONG
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
}`,k1=`#define STANDARD
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
}`,X1=`#define STANDARD
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
}`,W1=`#define TOON
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
}`,Y1=`#define TOON
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
}`,q1=`uniform float size;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,K1=`uniform vec3 color;
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
}`,Q1=`uniform float rotation;
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
}`,J1=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:SE,alphahash_pars_fragment:yE,alphamap_fragment:ME,alphamap_pars_fragment:EE,alphatest_fragment:bE,alphatest_pars_fragment:TE,aomap_fragment:AE,aomap_pars_fragment:RE,batching_pars_vertex:CE,batching_vertex:wE,begin_vertex:DE,beginnormal_vertex:NE,bsdfs:UE,iridescence_fragment:LE,bumpmap_pars_fragment:OE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:PE,clipping_planes_pars_vertex:FE,clipping_planes_vertex:BE,color_fragment:zE,color_pars_fragment:HE,color_pars_vertex:GE,color_vertex:VE,common:kE,cube_uv_reflection_fragment:XE,defaultnormal_vertex:WE,displacementmap_pars_vertex:YE,displacementmap_vertex:qE,emissivemap_fragment:jE,emissivemap_pars_fragment:ZE,colorspace_fragment:KE,colorspace_pars_fragment:QE,envmap_fragment:JE,envmap_common_pars_fragment:$E,envmap_pars_fragment:tb,envmap_pars_vertex:eb,envmap_physical_pars_fragment:hb,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:ab,fog_fragment:sb,fog_pars_fragment:rb,gradientmap_pars_fragment:ob,lightmap_pars_fragment:lb,lights_lambert_fragment:cb,lights_lambert_pars_fragment:ub,lights_pars_begin:fb,lights_toon_fragment:db,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:gb,lights_physical_fragment:_b,lights_physical_pars_fragment:vb,lights_fragment_begin:xb,lights_fragment_maps:Sb,lights_fragment_end:yb,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:bb,logdepthbuf_vertex:Tb,map_fragment:Ab,map_pars_fragment:Rb,map_particle_fragment:Cb,map_particle_pars_fragment:wb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Nb,morphinstance_vertex:Ub,morphcolor_vertex:Lb,morphnormal_vertex:Ob,morphtarget_pars_vertex:Ib,morphtarget_vertex:Pb,normal_fragment_begin:Fb,normal_fragment_maps:Bb,normal_pars_fragment:zb,normal_pars_vertex:Hb,normal_vertex:Gb,normalmap_pars_fragment:Vb,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:Xb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:Yb,opaque_fragment:qb,packing:jb,premultiplied_alpha_fragment:Zb,project_vertex:Kb,dithering_fragment:Qb,dithering_pars_fragment:Jb,roughnessmap_fragment:$b,roughnessmap_pars_fragment:t1,shadowmap_pars_fragment:e1,shadowmap_pars_vertex:n1,shadowmap_vertex:i1,shadowmask_pars_fragment:a1,skinbase_vertex:s1,skinning_pars_vertex:r1,skinning_vertex:o1,skinnormal_vertex:l1,specularmap_fragment:c1,specularmap_pars_fragment:u1,tonemapping_fragment:f1,tonemapping_pars_fragment:h1,transmission_fragment:d1,transmission_pars_fragment:p1,uv_pars_fragment:m1,uv_pars_vertex:g1,uv_vertex:_1,worldpos_vertex:v1,background_vert:x1,background_frag:S1,backgroundCube_vert:y1,backgroundCube_frag:M1,cube_vert:E1,cube_frag:b1,depth_vert:T1,depth_frag:A1,distance_vert:R1,distance_frag:C1,equirect_vert:w1,equirect_frag:D1,linedashed_vert:N1,linedashed_frag:U1,meshbasic_vert:L1,meshbasic_frag:O1,meshlambert_vert:I1,meshlambert_frag:P1,meshmatcap_vert:F1,meshmatcap_frag:B1,meshnormal_vert:z1,meshnormal_frag:H1,meshphong_vert:G1,meshphong_frag:V1,meshphysical_vert:k1,meshphysical_frag:X1,meshtoon_vert:W1,meshtoon_frag:Y1,points_vert:q1,points_frag:j1,shadow_vert:Z1,shadow_frag:K1,sprite_vert:Q1,sprite_frag:J1},Ft={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Da={basic:{uniforms:bi([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:bi([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:bi([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:bi([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:bi([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new me(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:bi([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:bi([Ft.points,Ft.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:bi([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:bi([Ft.common,Ft.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:bi([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:bi([Ft.sprite,Ft.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:bi([Ft.common,Ft.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:bi([Ft.lights,Ft.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Da.physical={uniforms:bi([Da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const sf={r:0,b:0,g:0},jr=new va,$1=new fn;function tT(r,t,i,s,l,c){const h=new me(0);let d=l===!0?0:1,m,p,_=null,x=0,g=null;function y(C){let O=C.isScene===!0?C.background:null;if(O&&O.isTexture){const D=C.backgroundBlurriness>0;O=t.get(O,D)}return O}function b(C){let O=!1;const D=y(C);D===null?M(h,d):D&&D.isColor&&(M(D,1),O=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,O){const D=y(O);D&&(D.isCubeTexture||D.mapping===Uc)?(p===void 0&&(p=new We(new _r(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:pl(Da.backgroundCube.uniforms),vertexShader:Da.backgroundCube.vertexShader,fragmentShader:Da.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,H,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),jr.copy(O.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4($1.makeRotationFromEuler(jr)),p.material.toneMapped=qe.getTransfer(D.colorSpace)!==en,(_!==D||x!==D.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=D,x=D.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new We(new ja(2,2),new Ia({name:"BackgroundMaterial",uniforms:pl(Da.background.uniforms),vertexShader:Da.background.vertexShader,fragmentShader:Da.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=qe.getTransfer(D.colorSpace)!==en,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||x!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,x=D.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,O){C.getRGB(sf,SS(r)),i.buffers.color.setClear(sf.r,sf.g,sf.b,O,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,O=1){h.set(C),d=O,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(h,d)},render:b,addToRenderList:w,dispose:S}}function eT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(z,$,Q,nt,j){let L=!1;const P=x(z,nt,Q,$);c!==P&&(c=P,p(c.object)),L=y(z,nt,Q,j),L&&b(z,nt,Q,j),j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,D(z,$,Q,nt),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function m(){return r.createVertexArray()}function p(z){return r.bindVertexArray(z)}function _(z){return r.deleteVertexArray(z)}function x(z,$,Q,nt){const j=nt.wireframe===!0;let L=s[$.id];L===void 0&&(L={},s[$.id]=L);const P=z.isInstancedMesh===!0?z.id:0;let st=L[P];st===void 0&&(st={},L[P]=st);let pt=st[Q.id];pt===void 0&&(pt={},st[Q.id]=pt);let yt=pt[j];return yt===void 0&&(yt=g(m()),pt[j]=yt),yt}function g(z){const $=[],Q=[],nt=[];for(let j=0;j<i;j++)$[j]=0,Q[j]=0,nt[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Q,attributeDivisors:nt,object:z,attributes:{},index:null}}function y(z,$,Q,nt){const j=c.attributes,L=$.attributes;let P=0;const st=Q.getAttributes();for(const pt in st)if(st[pt].location>=0){const I=j[pt];let Y=L[pt];if(Y===void 0&&(pt==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),pt==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor)),I===void 0||I.attribute!==Y||Y&&I.data!==Y.data)return!0;P++}return c.attributesNum!==P||c.index!==nt}function b(z,$,Q,nt){const j={},L=$.attributes;let P=0;const st=Q.getAttributes();for(const pt in st)if(st[pt].location>=0){let I=L[pt];I===void 0&&(pt==="instanceMatrix"&&z.instanceMatrix&&(I=z.instanceMatrix),pt==="instanceColor"&&z.instanceColor&&(I=z.instanceColor));const Y={};Y.attribute=I,I&&I.data&&(Y.data=I.data),j[pt]=Y,P++}c.attributes=j,c.attributesNum=P,c.index=nt}function w(){const z=c.newAttributes;for(let $=0,Q=z.length;$<Q;$++)z[$]=0}function M(z){S(z,0)}function S(z,$){const Q=c.newAttributes,nt=c.enabledAttributes,j=c.attributeDivisors;Q[z]=1,nt[z]===0&&(r.enableVertexAttribArray(z),nt[z]=1),j[z]!==$&&(r.vertexAttribDivisor(z,$),j[z]=$)}function C(){const z=c.newAttributes,$=c.enabledAttributes;for(let Q=0,nt=$.length;Q<nt;Q++)$[Q]!==z[Q]&&(r.disableVertexAttribArray(Q),$[Q]=0)}function O(z,$,Q,nt,j,L,P){P===!0?r.vertexAttribIPointer(z,$,Q,j,L):r.vertexAttribPointer(z,$,Q,nt,j,L)}function D(z,$,Q,nt){w();const j=nt.attributes,L=Q.getAttributes(),P=$.defaultAttributeValues;for(const st in L){const pt=L[st];if(pt.location>=0){let yt=j[st];if(yt===void 0&&(st==="instanceMatrix"&&z.instanceMatrix&&(yt=z.instanceMatrix),st==="instanceColor"&&z.instanceColor&&(yt=z.instanceColor)),yt!==void 0){const I=yt.normalized,Y=yt.itemSize,mt=t.get(yt);if(mt===void 0)continue;const Rt=mt.buffer,Ht=mt.type,tt=mt.bytesPerElement,vt=Ht===r.INT||Ht===r.UNSIGNED_INT||yt.gpuType===hh;if(yt.isInterleavedBufferAttribute){const Tt=yt.data,jt=Tt.stride,ot=yt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<pt.locationSize;Ct++)S(pt.location+Ct,Tt.meshPerAttribute);z.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Ct=0;Ct<pt.locationSize;Ct++)M(pt.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Ct=0;Ct<pt.locationSize;Ct++)O(pt.location+Ct,Y/pt.locationSize,Ht,I,jt*tt,(ot+Y/pt.locationSize*Ct)*tt,vt)}else{if(yt.isInstancedBufferAttribute){for(let Tt=0;Tt<pt.locationSize;Tt++)S(pt.location+Tt,yt.meshPerAttribute);z.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Tt=0;Tt<pt.locationSize;Tt++)M(pt.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<pt.locationSize;Tt++)O(pt.location+Tt,Y/pt.locationSize,Ht,I,Y*tt,Y/pt.locationSize*Tt*tt,vt)}}else if(P!==void 0){const I=P[st];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(pt.location,I);break;case 3:r.vertexAttrib3fv(pt.location,I);break;case 4:r.vertexAttrib4fv(pt.location,I);break;default:r.vertexAttrib1fv(pt.location,I)}}}}C()}function B(){N();for(const z in s){const $=s[z];for(const Q in $){const nt=$[Q];for(const j in nt){const L=nt[j];for(const P in L)_(L[P].object),delete L[P];delete nt[j]}}delete s[z]}}function H(z){if(s[z.id]===void 0)return;const $=s[z.id];for(const Q in $){const nt=$[Q];for(const j in nt){const L=nt[j];for(const P in L)_(L[P].object),delete L[P];delete nt[j]}}delete s[z.id]}function G(z){for(const $ in s){const Q=s[$];for(const nt in Q){const j=Q[nt];if(j[z.id]===void 0)continue;const L=j[z.id];for(const P in L)_(L[P].object),delete L[P];delete j[z.id]}}}function T(z){for(const $ in s){const Q=s[$],nt=z.isInstancedMesh===!0?z.id:0,j=Q[nt];if(j!==void 0){for(const L in j){const P=j[L];for(const st in P)_(P[st].object),delete P[st];delete j[L]}delete Q[nt],Object.keys(Q).length===0&&delete s[$]}}}function N(){dt(),h=!0,c!==l&&(c=l,p(c.object))}function dt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:dt,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfObject:T,releaseStatesOfProgram:G,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function nT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let y=0;for(let b=0;b<x;b++)y+=_[b];i.update(y,s,1)}function m(p,_,x,g){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],_[b],g[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,x);let b=0;for(let w=0;w<x;w++)b+=_[w]*g[w];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function iT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(G){return!(G!==ga&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const T=G===Qa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==Pi&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==ma&&!T)}function m(G){if(G==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(xe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:O,maxFragmentUniforms:D,maxSamples:B,samples:H}}function aT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new fr,d=new Ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const b=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,S=r.get(x);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,O=C*4;let D=S.clippingState||null;m.value=D,D=_(b,g,O,y);for(let B=0;B!==O;++B)D[B]=i[B];S.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,y,b){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const S=y+w*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let O=0,D=y;O!==w;++O,D+=4)h.copy(x[O]).applyMatrix4(C,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const pr=4,ax=[.125,.215,.35,.446,.526,.582],$r=20,sT=256,pc=new Rh,sx=new me;let im=null,am=0,sm=0,rm=!1;const rT=new K;class lh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=rT}=c;im=this._renderer.getRenderTarget(),am=this._renderer.getActiveCubeFace(),sm=this._renderer.getActiveMipmapLevel(),rm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(im,am,sm),this._renderer.xr.enabled=rm,t.scissorTest=!1,$o(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===mr||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),im=this._renderer.getRenderTarget(),am=this._renderer.getActiveCubeFace(),sm=this._renderer.getActiveMipmapLevel(),rm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Qa,format:ga,colorSpace:ao,depthBuffer:!1},l=rx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oT(c)),this._blurMaterial=cT(c,t,i),this._ggxMaterial=lT(c,t,i)}return l}_compileMaterial(t){const i=new We(new Ji,t);this._renderer.compile(i,pc)}_sceneToCubeUV(t,i,s,l,c){const m=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(sx),x.toneMapping=Ua,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new _r,new Nc({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(sx),S=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[O],c.y,c.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[O]));const B=this._cubeSize;$o(l,D*B,O>2?B:0,B,B),x.setRenderTarget(l),S&&x.render(w,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===mr||t.mapping===no;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=lx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ox());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;$o(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,pc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,y=x*g,{_lodMax:b}=this,w=this._sizeLods[s],M=3*w*(s>b-pr?s-b+pr:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,$o(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,pc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,$o(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,pc)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*$r-1),w=c/b,M=isFinite(c)?1+Math.floor(_*w):$r;M>$r&&xe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${$r}`);const S=[];let C=0;for(let G=0;G<$r;++G){const T=G/w,N=Math.exp(-T*T/2);S.push(N),G===0?C+=N:G<M&&(C+=2*N)}for(let G=0;G<S.length;G++)S[G]=S[G]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:O}=this;g.dTheta.value=b,g.mipInt.value=O-s;const D=this._sizeLods[l],B=3*D*(l>O-pr?l-O+pr:0),H=4*(this._cubeSize-D);$o(i,B,H,3*D,2*D),m.setRenderTarget(i),m.render(x,pc)}}function oT(r){const t=[],i=[],s=[];let l=r;const c=r-pr+1+ax.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-pr?m=ax[h-r+pr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,b=6,w=3,M=2,S=1,C=new Float32Array(w*b*y),O=new Float32Array(M*b*y),D=new Float32Array(S*b*y);for(let H=0;H<y;H++){const G=H%3*2/3-1,T=H>2?0:-1,N=[G,T,0,G+2/3,T,0,G+2/3,T+1,0,G,T,0,G+2/3,T+1,0,G,T+1,0];C.set(N,w*b*H),O.set(g,M*b*H);const dt=[H,H,H,H,H,H];D.set(dt,S*b*H)}const B=new Ji;B.setAttribute("position",new _a(C,w)),B.setAttribute("uv",new _a(O,M)),B.setAttribute("faceIndex",new _a(D,S)),s.push(new We(B,null)),l>pr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function rx(r,t,i){const s=new La(r,t,i);return s.texture.mapping=Uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function $o(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function lT(r,t,i){return new Ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function cT(r,t,i){const s=new Float32Array($r),l=new K(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function ox(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function lx(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}class e0 extends La{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Km(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new _r(5,5,5),c=new Ia({name:"CubemapFromEquirect",uniforms:pl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:_i,blending:Ka});c.uniforms.tEquirect.value=i;const h=new We(l,c),d=i.minFilter;return i.minFilter===ws&&(i.minFilter=ni),new CS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function uT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===df||y===pf)if(t.has(g)){const b=t.get(g).texture;return d(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new e0(b.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,b=y===df||y===pf,w=y===mr||y===no;if(b||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new lh(r)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return b&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new lh(r)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===df?g.mapping=mr:y===pf&&(g.mapping=no),g}function m(g){let y=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&y++;return y===b}function p(g){const y=g.target;y.removeEventListener("dispose",p);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function fT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&wc("WebGLRenderer: "+s+" extension not supported."),l}}}function hT(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(x){const g=[],y=x.index,b=x.attributes.position;let w=0;if(b===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let O=0,D=C.length;O<D;O+=3){const B=C[O+0],H=C[O+1],G=C[O+2];g.push(B,H,H,G,G,B)}}else{const C=b.array;w=b.version;for(let O=0,D=C.length/3-1;O<D;O+=3){const B=O+0,H=O+1,G=O+2;g.push(B,H,H,G,G,B)}}const M=new(b.count>=65535?qm:Ym)(g,1);M.version=w;const S=c.get(x);S&&t.remove(S),c.set(x,M)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function dT(r,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*h),i.update(y,s,1)}function p(g,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,g*h,b),i.update(y,s,b))}function _(g,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,b);let M=0;for(let S=0;S<b;S++)M+=y[S];i.update(M,s,1)}function x(g,y,b,w){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/h,y[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,w,0,b);let S=0;for(let C=0;C<b;C++)S+=y[C]*w[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function pT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ye("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function mT(r,t,i){const s=new WeakMap,l=new Rn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let dt=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",dt)};var y=dt;g!==void 0&&g.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let B=d.attributes.position.count*D,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const G=new Float32Array(B*H*4*x),T=new Xm(G,B,H,x);T.type=ma,T.needsUpdate=!0;const N=D*4;for(let z=0;z<x;z++){const $=S[z],Q=C[z],nt=O[z],j=B*H*4*z;for(let L=0;L<$.count;L++){const P=L*N;b===!0&&(l.fromBufferAttribute($,L),G[j+P+0]=l.x,G[j+P+1]=l.y,G[j+P+2]=l.z,G[j+P+3]=0),w===!0&&(l.fromBufferAttribute(Q,L),G[j+P+4]=l.x,G[j+P+5]=l.y,G[j+P+6]=l.z,G[j+P+7]=0),M===!0&&(l.fromBufferAttribute(nt,L),G[j+P+8]=l.x,G[j+P+9]=l.y,G[j+P+10]=l.z,G[j+P+11]=nt.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new Oe(B,H)},s.set(d,g),d.addEventListener("dispose",dt)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const w=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function gT(r,t,i,s,l){let c=new WeakMap;function h(p){const _=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const _T={[Dm]:"LINEAR_TONE_MAPPING",[Nm]:"REINHARD_TONE_MAPPING",[Um]:"CINEON_TONE_MAPPING",[fh]:"ACES_FILMIC_TONE_MAPPING",[Om]:"AGX_TONE_MAPPING",[Im]:"NEUTRAL_TONE_MAPPING",[Lm]:"CUSTOM_TONE_MAPPING"};function vT(r,t,i,s,l){const c=new La(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new La(t,i,{type:Qa,depthBuffer:!1,stencilBuffer:!1}),d=new Ji;d.setAttribute("position",new ii([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ii([0,2,0,0,2,0],2));const m=new MS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new We(d,m),_=new Rh(-1,1,1,-1,0,1);let x=null,g=null,y=!1,b,w=null,M=[],S=!1;this.setSize=function(C,O){c.setSize(C,O),h.setSize(C,O);for(let D=0;D<M.length;D++){const B=M[D];B.setSize&&B.setSize(C,O)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const O=c.width,D=c.height;for(let B=0;B<M.length;B++){const H=M[B];H.setSize&&H.setSize(O,D)}},this.begin=function(C,O){if(y||C.toneMapping===Ua&&M.length===0)return!1;if(w=O,O!==null){const D=O.width,B=O.height;(c.width!==D||c.height!==B)&&this.setSize(D,B)}return S===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=Ua,!0},this.hasRenderPass=function(){return S},this.end=function(C,O){C.toneMapping=b,y=!0;let D=c,B=h;for(let H=0;H<M.length;H++){const G=M[H];if(G.enabled!==!1&&(G.render(C,B,D,O),G.needsSwap!==!1)){const T=D;D=B,B=T}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},qe.getTransfer(x)===en&&(m.defines.SRGB_TRANSFER="");const H=_T[g];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(w),C.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const LS=new ui,Am=new dl(1,1),OS=new Xm,IS=new pS,PS=new Km,cx=[],ux=[],fx=new Float32Array(16),hx=new Float32Array(9),dx=new Float32Array(4);function vl(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=cx[l];if(c===void 0&&(c=new Float32Array(l),cx[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function Zn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Kn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function wh(r,t){let i=ux[t];i===void 0&&(i=new Int32Array(t),ux[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function xT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function ST(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Zn(i,t))return;r.uniform2fv(this.addr,t),Kn(i,t)}}function yT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Zn(i,t))return;r.uniform3fv(this.addr,t),Kn(i,t)}}function MT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Zn(i,t))return;r.uniform4fv(this.addr,t),Kn(i,t)}}function ET(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Zn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Kn(i,t)}else{if(Zn(i,s))return;dx.set(s),r.uniformMatrix2fv(this.addr,!1,dx),Kn(i,s)}}function bT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Zn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Kn(i,t)}else{if(Zn(i,s))return;hx.set(s),r.uniformMatrix3fv(this.addr,!1,hx),Kn(i,s)}}function TT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Zn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Kn(i,t)}else{if(Zn(i,s))return;fx.set(s),r.uniformMatrix4fv(this.addr,!1,fx),Kn(i,s)}}function AT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function RT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Zn(i,t))return;r.uniform2iv(this.addr,t),Kn(i,t)}}function CT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Zn(i,t))return;r.uniform3iv(this.addr,t),Kn(i,t)}}function wT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Zn(i,t))return;r.uniform4iv(this.addr,t),Kn(i,t)}}function DT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function NT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Zn(i,t))return;r.uniform2uiv(this.addr,t),Kn(i,t)}}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Zn(i,t))return;r.uniform3uiv(this.addr,t),Kn(i,t)}}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Zn(i,t))return;r.uniform4uiv(this.addr,t),Kn(i,t)}}function OT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Am.compareFunction=i.isReversedDepthBuffer()?yh:Sh,c=Am):c=LS,i.setTexture2D(t||c,l)}function IT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||IS,l)}function PT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||PS,l)}function FT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||OS,l)}function BT(r){switch(r){case 5126:return xT;case 35664:return ST;case 35665:return yT;case 35666:return MT;case 35674:return ET;case 35675:return bT;case 35676:return TT;case 5124:case 35670:return AT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return wT;case 5125:return DT;case 36294:return NT;case 36295:return UT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return FT}}function zT(r,t){r.uniform1fv(this.addr,t)}function HT(r,t){const i=vl(t,this.size,2);r.uniform2fv(this.addr,i)}function GT(r,t){const i=vl(t,this.size,3);r.uniform3fv(this.addr,i)}function VT(r,t){const i=vl(t,this.size,4);r.uniform4fv(this.addr,i)}function kT(r,t){const i=vl(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function XT(r,t){const i=vl(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function WT(r,t){const i=vl(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function YT(r,t){r.uniform1iv(this.addr,t)}function qT(r,t){r.uniform2iv(this.addr,t)}function jT(r,t){r.uniform3iv(this.addr,t)}function ZT(r,t){r.uniform4iv(this.addr,t)}function KT(r,t){r.uniform1uiv(this.addr,t)}function QT(r,t){r.uniform2uiv(this.addr,t)}function JT(r,t){r.uniform3uiv(this.addr,t)}function $T(r,t){r.uniform4uiv(this.addr,t)}function tA(r,t,i){const s=this.cache,l=t.length,c=wh(i,l);Zn(s,c)||(r.uniform1iv(this.addr,c),Kn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Am:h=LS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function eA(r,t,i){const s=this.cache,l=t.length,c=wh(i,l);Zn(s,c)||(r.uniform1iv(this.addr,c),Kn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||IS,c[h])}function nA(r,t,i){const s=this.cache,l=t.length,c=wh(i,l);Zn(s,c)||(r.uniform1iv(this.addr,c),Kn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||PS,c[h])}function iA(r,t,i){const s=this.cache,l=t.length,c=wh(i,l);Zn(s,c)||(r.uniform1iv(this.addr,c),Kn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||OS,c[h])}function aA(r){switch(r){case 5126:return zT;case 35664:return HT;case 35665:return GT;case 35666:return VT;case 35674:return kT;case 35675:return XT;case 35676:return WT;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return jT;case 35669:case 35673:return ZT;case 5125:return KT;case 36294:return QT;case 36295:return JT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class sA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=BT(i.type)}}class rA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=aA(i.type)}}class oA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const om=/(\w+)(\])?(\[|\.)?/g;function px(r,t){r.seq.push(t),r.map[t.id]=t}function lA(r,t,i){const s=r.name,l=s.length;for(om.lastIndex=0;;){const c=om.exec(s),h=om.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){px(i,p===void 0?new sA(d,r,t):new rA(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new oA(d),px(i,x)),i=x}}}class vf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);lA(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function mx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const cA=37297;let uA=0;function fA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const gx=new Ce;function hA(r){qe._getMatrix(gx,qe.workingColorSpace,r);const t=`mat3( ${gx.elements.map(i=>i.toFixed(4))} )`;switch(qe.getTransfer(r)){case Cc:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function _x(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+fA(r.getShaderSource(t),d)}else return c}function dA(r,t){const i=hA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const pA={[Dm]:"Linear",[Nm]:"Reinhard",[Um]:"Cineon",[fh]:"ACESFilmic",[Om]:"AgX",[Im]:"Neutral",[Lm]:"Custom"};function mA(r,t){const i=pA[t];return i===void 0?(xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const rf=new K;function gA(){qe.getLuminanceCoefficients(rf);const r=rf.x.toFixed(4),t=rf.y.toFixed(4),i=rf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sc).join(`
`)}function vA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function xA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Sc(r){return r!==""}function vx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rm(r){return r.replace(SA,MA)}const yA=new Map;function MA(r,t){let i=De[t];if(i===void 0){const s=yA.get(t);if(s!==void 0)i=De[s],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Rm(i)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sx(r){return r.replace(EA,bA)}function bA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function yx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const TA={[rl]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function AA(r){return TA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RA={[mr]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Uc]:"ENVMAP_TYPE_CUBE_UV"};function CA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":RA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const wA={[no]:"ENVMAP_MODE_REFRACTION"};function DA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":wA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NA={[uh]:"ENVMAP_BLENDING_MULTIPLY",[$x]:"ENVMAP_BLENDING_MIX",[tS]:"ENVMAP_BLENDING_ADD"};function UA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":NA[r.combine]||"ENVMAP_BLENDING_NONE"}function LA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function OA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=AA(i),p=CA(i),_=DA(i),x=UA(i),g=LA(i),y=_A(i),b=vA(c),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Sc).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Sc).join(`
`),S.length>0&&(S+=`
`)):(M=[yx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sc).join(`
`),S=[yx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ua?"#define TONE_MAPPING":"",i.toneMapping!==Ua?De.tonemapping_pars_fragment:"",i.toneMapping!==Ua?mA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,dA("linearToOutputTexel",i.outputColorSpace),gA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Sc).join(`
`)),h=Rm(h),h=vx(h,i),h=xx(h,i),d=Rm(d),d=vx(d,i),d=xx(d,i),h=Sx(h),d=Sx(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=C+M+h,D=C+S+d,B=mx(l,l.VERTEX_SHADER,O),H=mx(l,l.FRAGMENT_SHADER,D);l.attachShader(w,B),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function G(z){if(r.debug.checkShaderErrors){const $=l.getProgramInfoLog(w)||"",Q=l.getShaderInfoLog(B)||"",nt=l.getShaderInfoLog(H)||"",j=$.trim(),L=Q.trim(),P=nt.trim();let st=!0,pt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(st=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,B,H);else{const yt=_x(l,B,"vertex"),I=_x(l,H,"fragment");Ye("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+yt+`
`+I)}else j!==""?xe("WebGLProgram: Program Info Log:",j):(L===""||P==="")&&(pt=!1);pt&&(z.diagnostics={runnable:st,programLog:j,vertexShader:{log:L,prefix:M},fragmentShader:{log:P,prefix:S}})}l.deleteShader(B),l.deleteShader(H),T=new vf(l,w),N=xA(l,w)}let T;this.getUniforms=function(){return T===void 0&&G(this),T};let N;this.getAttributes=function(){return N===void 0&&G(this),N};let dt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return dt===!1&&(dt=l.getProgramParameter(w,cA)),dt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=uA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=H,this}let IA=0;class PA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new FA(t),i.set(t,s)),s}}class FA{constructor(t){this.id=IA++,this.code=t,this.usedTimes=0}}function BA(r,t,i,s,l,c){const h=new Eh,d=new PA,m=new Set,p=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,dt,z,$){const Q=z.fog,nt=$.geometry,j=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,P=t.get(T.envMap||j,L),st=P&&P.mapping===Uc?P.image.height:null,pt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&xe("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const yt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,I=yt!==void 0?yt.length:0;let Y=0;nt.morphAttributes.position!==void 0&&(Y=1),nt.morphAttributes.normal!==void 0&&(Y=2),nt.morphAttributes.color!==void 0&&(Y=3);let mt,Rt,Ht,tt;if(pt){const Ne=Da[pt];mt=Ne.vertexShader,Rt=Ne.fragmentShader}else mt=T.vertexShader,Rt=T.fragmentShader,d.update(T),Ht=d.getVertexShaderID(T),tt=d.getFragmentShaderID(T);const vt=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),jt=$.isInstancedMesh===!0,ot=$.isBatchedMesh===!0,Ct=!!T.map,Zt=!!T.matcap,ue=!!P,Bt=!!T.aoMap,pe=!!T.lightMap,le=!!T.bumpMap,te=!!T.normalMap,F=!!T.displacementMap,Xt=!!T.emissiveMap,Wt=!!T.metalnessMap,Fe=!!T.roughnessMap,Kt=T.anisotropy>0,U=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,ft=T.sheen>0,_t=T.transmission>0,ct=Kt&&!!T.anisotropyMap,Gt=U&&!!T.clearcoatMap,At=U&&!!T.clearcoatNormalMap,Jt=U&&!!T.clearcoatRoughnessMap,se=q&&!!T.iridescenceMap,Mt=q&&!!T.iridescenceThicknessMap,Et=ft&&!!T.sheenColorMap,Lt=ft&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,zt=!!T.specularColorMap,ye=!!T.specularIntensityMap,W=_t&&!!T.transmissionMap,Dt=_t&&!!T.thicknessMap,wt=!!T.gradientMap,Vt=!!T.alphaMap,bt=T.alphaTest>0,ht=!!T.alphaHash,Yt=!!T.extensions;let _e=Ua;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(_e=r.toneMapping);const je={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:mt,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Ht,customFragmentShaderID:tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ot,batchingColor:ot&&$._colorsTexture!==null,instancing:jt,instancingColor:jt&&$.instanceColor!==null,instancingMorph:jt&&$.morphTexture!==null,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:ao,alphaToCoverage:!!T.alphaToCoverage,map:Ct,matcap:Zt,envMap:ue,envMapMode:ue&&P.mapping,envMapCubeUVHeight:st,aoMap:Bt,lightMap:pe,bumpMap:le,normalMap:te,displacementMap:F,emissiveMap:Xt,normalMapObjectSpace:te&&T.normalMapType===iS,normalMapTangentSpace:te&&T.normalMapType===xh,metalnessMap:Wt,roughnessMap:Fe,anisotropy:Kt,anisotropyMap:ct,clearcoat:U,clearcoatMap:Gt,clearcoatNormalMap:At,clearcoatRoughnessMap:Jt,dispersion:E,iridescence:q,iridescenceMap:se,iridescenceThicknessMap:Mt,sheen:ft,sheenColorMap:Et,sheenRoughnessMap:Lt,specularMap:Pt,specularColorMap:zt,specularIntensityMap:ye,transmission:_t,transmissionMap:W,thicknessMap:Dt,gradientMap:wt,opaque:T.transparent===!1&&T.blending===to&&T.alphaToCoverage===!1,alphaMap:Vt,alphaTest:bt,alphaHash:ht,combine:T.combine,mapUv:Ct&&b(T.map.channel),aoMapUv:Bt&&b(T.aoMap.channel),lightMapUv:pe&&b(T.lightMap.channel),bumpMapUv:le&&b(T.bumpMap.channel),normalMapUv:te&&b(T.normalMap.channel),displacementMapUv:F&&b(T.displacementMap.channel),emissiveMapUv:Xt&&b(T.emissiveMap.channel),metalnessMapUv:Wt&&b(T.metalnessMap.channel),roughnessMapUv:Fe&&b(T.roughnessMap.channel),anisotropyMapUv:ct&&b(T.anisotropyMap.channel),clearcoatMapUv:Gt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:At&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&b(T.sheenRoughnessMap.channel),specularMapUv:Pt&&b(T.specularMap.channel),specularColorMapUv:zt&&b(T.specularColorMap.channel),specularIntensityMapUv:ye&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Dt&&b(T.thicknessMap.channel),alphaMapUv:Vt&&b(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(te||Kt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!nt.attributes.uv&&(Ct||Vt),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||nt.attributes.normal===void 0&&te===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Tt,skinning:$.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:Y,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&dt.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ct&&T.map.isVideoTexture===!0&&qe.getTransfer(T.map.colorSpace)===en,decodeVideoTextureEmissive:Xt&&T.emissiveMap.isVideoTexture===!0&&qe.getTransfer(T.emissiveMap.colorSpace)===en,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Wn,flipSided:T.side===_i,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function M(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const dt in T.defines)N.push(dt),N.push(T.defines[dt]);return T.isRawShaderMaterial===!1&&(S(N,T),C(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function S(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function C(T,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),T.push(h.mask)}function O(T){const N=y[T.type];let dt;if(N){const z=Da[N];dt=yS.clone(z.uniforms)}else dt=T.uniforms;return dt}function D(T,N){let dt=_.get(N);return dt!==void 0?++dt.usedTimes:(dt=new OA(r,N,T,l),p.push(dt),_.set(N,dt)),dt}function B(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function H(T){d.remove(T)}function G(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:O,acquireProgram:D,releaseProgram:B,releaseShaderCache:H,programs:p,dispose:G}}function zA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function HA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Mx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ex(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,b,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:b,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=b,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,b,w,M,S){const C=d(g,y,b,w,M,S);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function p(g,y,b,w,M,S){const C=d(g,y,b,w,M,S);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||HA),s.length>1&&s.sort(y||Mx),l.length>1&&l.sort(y||Mx)}function x(){for(let g=t,y=r.length;g<y;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:_}}function GA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Ex,r.set(s,[h])):l>=c.length?(h=new Ex,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function VA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new me};break;case"SpotLight":i={position:new K,direction:new K,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function kA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let XA=0;function WA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function YA(r){const t=new VA,i=kA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new fn,h=new fn;function d(p){let _=0,x=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,b=0,w=0,M=0,S=0,C=0,O=0,D=0,B=0,H=0,G=0;p.sort(WA);for(let N=0,dt=p.length;N<dt;N++){const z=p[N],$=z.color,Q=z.intensity,nt=z.distance;let j=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===io?j=z.shadow.map.texture:j=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=$.r*Q,x+=$.g*Q,g+=$.b*Q;else if(z.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(z.sh.coefficients[L],Q);G++}else if(z.isDirectionalLight){const L=t.get(z);if(L.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const P=z.shadow,st=i.get(z);st.shadowIntensity=P.intensity,st.shadowBias=P.bias,st.shadowNormalBias=P.normalBias,st.shadowRadius=P.radius,st.shadowMapSize=P.mapSize,s.directionalShadow[y]=st,s.directionalShadowMap[y]=j,s.directionalShadowMatrix[y]=z.shadow.matrix,C++}s.directional[y]=L,y++}else if(z.isSpotLight){const L=t.get(z);L.position.setFromMatrixPosition(z.matrixWorld),L.color.copy($).multiplyScalar(Q),L.distance=nt,L.coneCos=Math.cos(z.angle),L.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),L.decay=z.decay,s.spot[w]=L;const P=z.shadow;if(z.map&&(s.spotLightMap[B]=z.map,B++,P.updateMatrices(z),z.castShadow&&H++),s.spotLightMatrix[w]=P.matrix,z.castShadow){const st=i.get(z);st.shadowIntensity=P.intensity,st.shadowBias=P.bias,st.shadowNormalBias=P.normalBias,st.shadowRadius=P.radius,st.shadowMapSize=P.mapSize,s.spotShadow[w]=st,s.spotShadowMap[w]=j,D++}w++}else if(z.isRectAreaLight){const L=t.get(z);L.color.copy($).multiplyScalar(Q),L.halfWidth.set(z.width*.5,0,0),L.halfHeight.set(0,z.height*.5,0),s.rectArea[M]=L,M++}else if(z.isPointLight){const L=t.get(z);if(L.color.copy(z.color).multiplyScalar(z.intensity),L.distance=z.distance,L.decay=z.decay,z.castShadow){const P=z.shadow,st=i.get(z);st.shadowIntensity=P.intensity,st.shadowBias=P.bias,st.shadowNormalBias=P.normalBias,st.shadowRadius=P.radius,st.shadowMapSize=P.mapSize,st.shadowCameraNear=P.camera.near,st.shadowCameraFar=P.camera.far,s.pointShadow[b]=st,s.pointShadowMap[b]=j,s.pointShadowMatrix[b]=z.shadow.matrix,O++}s.point[b]=L,b++}else if(z.isHemisphereLight){const L=t.get(z);L.skyColor.copy(z.color).multiplyScalar(Q),L.groundColor.copy(z.groundColor).multiplyScalar(Q),s.hemi[S]=L,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==O||T.numSpotShadows!==D||T.numSpotMaps!==B||T.numLightProbes!==G)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+B-H,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=G,T.directionalLength=y,T.pointLength=b,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=O,T.numSpotShadows=D,T.numSpotMaps=B,T.numLightProbes=G,s.version=XA++)}function m(p,_){let x=0,g=0,y=0,b=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const O=p[S];if(O.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(O.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),g++}else if(O.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function bx(r){const t=new YA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function qA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new bx(r),t.set(l,[d])):c>=h.length?(d=new bx(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const jA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
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
}`,KA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],QA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Tx=new fn,mc=new K,lm=new K;function JA(r,t,i){let s=new bh;const l=new Oe,c=new Oe,h=new Rn,d=new bS,m=new TS,p={},_=i.maxTextureSize,x={[Ns]:_i,[_i]:Ns,[Wn]:Wn},g=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:jA,fragmentShader:ZA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ji;b.setAttribute("position",new _a(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new We(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let S=this.type;this.render=function(H,G,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;this.type===Ox&&(xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=rl);const N=r.getRenderTarget(),dt=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),$=r.state;$.setBlending(Ka),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Q=S!==this.type;Q&&G.traverse(function(nt){nt.material&&(Array.isArray(nt.material)?nt.material.forEach(j=>j.needsUpdate=!0):nt.material.needsUpdate=!0)});for(let nt=0,j=H.length;nt<j;nt++){const L=H[nt],P=L.shadow;if(P===void 0){xe("WebGLShadowMap:",L,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const st=P.getFrameExtents();l.multiply(st),c.copy(P.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/st.x),l.x=c.x*st.x,P.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/st.y),l.y=c.y*st.y,P.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=pt,P.map===null||Q===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===il){if(L.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new La(l.x,l.y,{format:io,type:Qa,minFilter:ni,magFilter:ni,generateMipmaps:!1}),P.map.texture.name=L.name+".shadowMap",P.map.depthTexture=new dl(l.x,l.y,ma),P.map.depthTexture.name=L.name+".shadowMapDepth",P.map.depthTexture.format=Ja,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=ei,P.map.depthTexture.magFilter=ei}else L.isPointLight?(P.map=new e0(l.x),P.map.depthTexture=new _S(l.x,Oa)):(P.map=new La(l.x,l.y),P.map.depthTexture=new dl(l.x,l.y,Oa)),P.map.depthTexture.name=L.name+".shadowMap",P.map.depthTexture.format=Ja,this.type===rl?(P.map.depthTexture.compareFunction=pt?yh:Sh,P.map.depthTexture.minFilter=ni,P.map.depthTexture.magFilter=ni):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=ei,P.map.depthTexture.magFilter=ei);P.camera.updateProjectionMatrix()}const yt=P.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<yt;I++){if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,I),r.clear();else{I===0&&(r.setRenderTarget(P.map),r.clear());const Y=P.getViewport(I);h.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),$.viewport(h)}if(L.isPointLight){const Y=P.camera,mt=P.matrix,Rt=L.distance||Y.far;Rt!==Y.far&&(Y.far=Rt,Y.updateProjectionMatrix()),mc.setFromMatrixPosition(L.matrixWorld),Y.position.copy(mc),lm.copy(Y.position),lm.add(KA[I]),Y.up.copy(QA[I]),Y.lookAt(lm),Y.updateMatrixWorld(),mt.makeTranslation(-mc.x,-mc.y,-mc.z),Tx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Tx,Y.coordinateSystem,Y.reversedDepth)}else P.updateMatrices(L);s=P.getFrustum(),D(G,T,P.camera,L,this.type)}P.isPointLightShadow!==!0&&this.type===il&&C(P,T),P.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(N,dt,z)};function C(H,G){const T=t.update(w);g.defines.VSM_SAMPLES!==H.blurSamples&&(g.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new La(l.x,l.y,{format:io,type:Qa})),g.uniforms.shadow_pass.value=H.map.depthTexture,g.uniforms.resolution.value=H.mapSize,g.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(G,null,T,g,w,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(G,null,T,y,w,null)}function O(H,G,T,N){let dt=null;const z=T.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(z!==void 0)dt=z;else if(dt=T.isPointLight===!0?m:d,r.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const $=dt.uuid,Q=G.uuid;let nt=p[$];nt===void 0&&(nt={},p[$]=nt);let j=nt[Q];j===void 0&&(j=dt.clone(),nt[Q]=j,G.addEventListener("dispose",B)),dt=j}if(dt.visible=G.visible,dt.wireframe=G.wireframe,N===il?dt.side=G.shadowSide!==null?G.shadowSide:G.side:dt.side=G.shadowSide!==null?G.shadowSide:x[G.side],dt.alphaMap=G.alphaMap,dt.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,dt.map=G.map,dt.clipShadows=G.clipShadows,dt.clippingPlanes=G.clippingPlanes,dt.clipIntersection=G.clipIntersection,dt.displacementMap=G.displacementMap,dt.displacementScale=G.displacementScale,dt.displacementBias=G.displacementBias,dt.wireframeLinewidth=G.wireframeLinewidth,dt.linewidth=G.linewidth,T.isPointLight===!0&&dt.isMeshDistanceMaterial===!0){const $=r.properties.get(dt);$.light=T}return dt}function D(H,G,T,N,dt){if(H.visible===!1)return;if(H.layers.test(G.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&dt===il)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,H.matrixWorld);const Q=t.update(H),nt=H.material;if(Array.isArray(nt)){const j=Q.groups;for(let L=0,P=j.length;L<P;L++){const st=j[L],pt=nt[st.materialIndex];if(pt&&pt.visible){const yt=O(H,pt,N,dt);H.onBeforeShadow(r,H,G,T,Q,yt,st),r.renderBufferDirect(T,null,Q,yt,H,st),H.onAfterShadow(r,H,G,T,Q,yt,st)}}}else if(nt.visible){const j=O(H,nt,N,dt);H.onBeforeShadow(r,H,G,T,Q,j,null),r.renderBufferDirect(T,null,Q,j,H,null),H.onAfterShadow(r,H,G,T,Q,j,null)}}const $=H.children;for(let Q=0,nt=$.length;Q<nt;Q++)D($[Q],G,T,N,dt)}function B(H){H.target.removeEventListener("dispose",B);for(const T in p){const N=p[T],dt=H.target.uuid;dt in N&&(N[dt].dispose(),delete N[dt])}}}function $A(r,t){function i(){let W=!1;const Dt=new Rn;let wt=null;const Vt=new Rn(0,0,0,0);return{setMask:function(bt){wt!==bt&&!W&&(r.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){W=bt},setClear:function(bt,ht,Yt,_e,je){je===!0&&(bt*=_e,ht*=_e,Yt*=_e),Dt.set(bt,ht,Yt,_e),Vt.equals(Dt)===!1&&(r.clearColor(bt,ht,Yt,_e),Vt.copy(Dt))},reset:function(){W=!1,wt=null,Vt.set(-1,0,0,0)}}}function s(){let W=!1,Dt=!1,wt=null,Vt=null,bt=null;return{setReversed:function(ht){if(Dt!==ht){const Yt=t.get("EXT_clip_control");ht?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Dt=ht;const _e=bt;bt=null,this.setClear(_e)}},getReversed:function(){return Dt},setTest:function(ht){ht?vt(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(ht){wt!==ht&&!W&&(r.depthMask(ht),wt=ht)},setFunc:function(ht){if(Dt&&(ht=DM[ht]),Vt!==ht){switch(ht){case yf:r.depthFunc(r.NEVER);break;case Mf:r.depthFunc(r.ALWAYS);break;case Ef:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case bf:r.depthFunc(r.EQUAL);break;case Tf:r.depthFunc(r.GEQUAL);break;case Af:r.depthFunc(r.GREATER);break;case Rf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Vt=ht}},setLocked:function(ht){W=ht},setClear:function(ht){bt!==ht&&(bt=ht,Dt&&(ht=1-ht),r.clearDepth(ht))},reset:function(){W=!1,wt=null,Vt=null,bt=null,Dt=!1}}}function l(){let W=!1,Dt=null,wt=null,Vt=null,bt=null,ht=null,Yt=null,_e=null,je=null;return{setTest:function(Ne){W||(Ne?vt(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Ne){Dt!==Ne&&!W&&(r.stencilMask(Ne),Dt=Ne)},setFunc:function(Ne,Ln,Fi){(wt!==Ne||Vt!==Ln||bt!==Fi)&&(r.stencilFunc(Ne,Ln,Fi),wt=Ne,Vt=Ln,bt=Fi)},setOp:function(Ne,Ln,Fi){(ht!==Ne||Yt!==Ln||_e!==Fi)&&(r.stencilOp(Ne,Ln,Fi),ht=Ne,Yt=Ln,_e=Fi)},setLocked:function(Ne){W=Ne},setClear:function(Ne){je!==Ne&&(r.clearStencil(Ne),je=Ne)},reset:function(){W=!1,Dt=null,wt=null,Vt=null,bt=null,ht=null,Yt=null,_e=null,je=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},g=new WeakMap,y=[],b=null,w=!1,M=null,S=null,C=null,O=null,D=null,B=null,H=null,G=new me(0,0,0),T=0,N=!1,dt=null,z=null,$=null,Q=null,nt=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,P=0;const st=r.getParameter(r.VERSION);st.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(st)[1]),L=P>=1):st.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),L=P>=2);let pt=null,yt={};const I=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),mt=new Rn().fromArray(I),Rt=new Rn().fromArray(Y);function Ht(W,Dt,wt,Vt){const bt=new Uint8Array(4),ht=r.createTexture();r.bindTexture(W,ht),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<wt;Yt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Dt,0,r.RGBA,1,1,Vt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Dt+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return ht}const tt={};tt[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(r.DEPTH_TEST),h.setFunc(eo),le(!1),te(mm),vt(r.CULL_FACE),Bt(Ka);function vt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Tt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function jt(W,Dt){return x[W]!==Dt?(r.bindFramebuffer(W,Dt),x[W]=Dt,W===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Dt),W===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Dt),!0):!1}function ot(W,Dt){let wt=y,Vt=!1;if(W){wt=g.get(Dt),wt===void 0&&(wt=[],g.set(Dt,wt));const bt=W.textures;if(wt.length!==bt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Yt=bt.length;ht<Yt;ht++)wt[ht]=r.COLOR_ATTACHMENT0+ht;wt.length=bt.length,Vt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Vt=!0);Vt&&r.drawBuffers(wt)}function Ct(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const Zt={[hr]:r.FUNC_ADD,[Px]:r.FUNC_SUBTRACT,[Fx]:r.FUNC_REVERSE_SUBTRACT};Zt[Bx]=r.MIN,Zt[zx]=r.MAX;const ue={[Hx]:r.ZERO,[Gx]:r.ONE,[Vx]:r.SRC_COLOR,[xf]:r.SRC_ALPHA,[jx]:r.SRC_ALPHA_SATURATE,[Yx]:r.DST_COLOR,[Xx]:r.DST_ALPHA,[kx]:r.ONE_MINUS_SRC_COLOR,[Sf]:r.ONE_MINUS_SRC_ALPHA,[qx]:r.ONE_MINUS_DST_COLOR,[Wx]:r.ONE_MINUS_DST_ALPHA,[Zx]:r.CONSTANT_COLOR,[Kx]:r.ONE_MINUS_CONSTANT_COLOR,[Qx]:r.CONSTANT_ALPHA,[Jx]:r.ONE_MINUS_CONSTANT_ALPHA};function Bt(W,Dt,wt,Vt,bt,ht,Yt,_e,je,Ne){if(W===Ka){w===!0&&(Tt(r.BLEND),w=!1);return}if(w===!1&&(vt(r.BLEND),w=!0),W!==Ix){if(W!==M||Ne!==N){if((S!==hr||D!==hr)&&(r.blendEquation(r.FUNC_ADD),S=hr,D=hr),Ne)switch(W){case to:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gm:r.blendFunc(r.ONE,r.ONE);break;case _m:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ye("WebGLState: Invalid blending: ",W);break}else switch(W){case to:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _m:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vm:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",W);break}C=null,O=null,B=null,H=null,G.set(0,0,0),T=0,M=W,N=Ne}return}bt=bt||Dt,ht=ht||wt,Yt=Yt||Vt,(Dt!==S||bt!==D)&&(r.blendEquationSeparate(Zt[Dt],Zt[bt]),S=Dt,D=bt),(wt!==C||Vt!==O||ht!==B||Yt!==H)&&(r.blendFuncSeparate(ue[wt],ue[Vt],ue[ht],ue[Yt]),C=wt,O=Vt,B=ht,H=Yt),(_e.equals(G)===!1||je!==T)&&(r.blendColor(_e.r,_e.g,_e.b,je),G.copy(_e),T=je),M=W,N=!1}function pe(W,Dt){W.side===Wn?Tt(r.CULL_FACE):vt(r.CULL_FACE);let wt=W.side===_i;Dt&&(wt=!wt),le(wt),W.blending===to&&W.transparent===!1?Bt(Ka):Bt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Vt=W.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Xt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(W){dt!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),dt=W)}function te(W){W!==Ux?(vt(r.CULL_FACE),W!==z&&(W===mm?r.cullFace(r.BACK):W===Lx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),z=W}function F(W){W!==$&&(L&&r.lineWidth(W),$=W)}function Xt(W,Dt,wt){W?(vt(r.POLYGON_OFFSET_FILL),(Q!==Dt||nt!==wt)&&(Q=Dt,nt=wt,h.getReversed()&&(Dt=-Dt),r.polygonOffset(Dt,wt))):Tt(r.POLYGON_OFFSET_FILL)}function Wt(W){W?vt(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function Fe(W){W===void 0&&(W=r.TEXTURE0+j-1),pt!==W&&(r.activeTexture(W),pt=W)}function Kt(W,Dt,wt){wt===void 0&&(pt===null?wt=r.TEXTURE0+j-1:wt=pt);let Vt=yt[wt];Vt===void 0&&(Vt={type:void 0,texture:void 0},yt[wt]=Vt),(Vt.type!==W||Vt.texture!==Dt)&&(pt!==wt&&(r.activeTexture(wt),pt=wt),r.bindTexture(W,Dt||tt[W]),Vt.type=W,Vt.texture=Dt)}function U(){const W=yt[pt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function ft(){try{r.texSubImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function _t(){try{r.texSubImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Gt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function At(){try{r.texStorage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Jt(){try{r.texStorage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function se(){try{r.texImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Mt(){try{r.texImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Et(W){mt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),mt.copy(W))}function Lt(W){Rt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Pt(W,Dt){let wt=p.get(Dt);wt===void 0&&(wt=new WeakMap,p.set(Dt,wt));let Vt=wt.get(W);Vt===void 0&&(Vt=r.getUniformBlockIndex(Dt,W.name),wt.set(W,Vt))}function zt(W,Dt){const Vt=p.get(Dt).get(W);m.get(Dt)!==Vt&&(r.uniformBlockBinding(Dt,Vt,W.__bindingPointIndex),m.set(Dt,Vt))}function ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},pt=null,yt={},x={},g=new WeakMap,y=[],b=null,w=!1,M=null,S=null,C=null,O=null,D=null,B=null,H=null,G=new me(0,0,0),T=0,N=!1,dt=null,z=null,$=null,Q=null,nt=null,mt.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:vt,disable:Tt,bindFramebuffer:jt,drawBuffers:ot,useProgram:Ct,setBlending:Bt,setMaterial:pe,setFlipSided:le,setCullFace:te,setLineWidth:F,setPolygonOffset:Xt,setScissorTest:Wt,activeTexture:Fe,bindTexture:Kt,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:se,texImage3D:Mt,updateUBOMapping:Pt,uniformBlockBinding:zt,texStorage2D:At,texStorage3D:Jt,texSubImage2D:ft,texSubImage3D:_t,compressedTexSubImage2D:ct,compressedTexSubImage3D:Gt,scissor:Et,viewport:Lt,reset:ye}}function t2(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Oe,_=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return y?new OffscreenCanvas(U,E):oh("canvas")}function w(U,E,q){let ft=1;const _t=Kt(U);if((_t.width>q||_t.height>q)&&(ft=q/Math.max(_t.width,_t.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ct=Math.floor(ft*_t.width),Gt=Math.floor(ft*_t.height);x===void 0&&(x=b(ct,Gt));const At=E?b(ct,Gt):x;return At.width=ct,At.height=Gt,At.getContext("2d").drawImage(U,0,0,ct,Gt),xe("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ct+"x"+Gt+")."),At}else return"data"in U&&xe("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){r.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(U,E,q,ft,_t=!1){if(U!==null){if(r[U]!==void 0)return r[U];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ct=E;if(E===r.RED&&(q===r.FLOAT&&(ct=r.R32F),q===r.HALF_FLOAT&&(ct=r.R16F),q===r.UNSIGNED_BYTE&&(ct=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.R8UI),q===r.UNSIGNED_SHORT&&(ct=r.R16UI),q===r.UNSIGNED_INT&&(ct=r.R32UI),q===r.BYTE&&(ct=r.R8I),q===r.SHORT&&(ct=r.R16I),q===r.INT&&(ct=r.R32I)),E===r.RG&&(q===r.FLOAT&&(ct=r.RG32F),q===r.HALF_FLOAT&&(ct=r.RG16F),q===r.UNSIGNED_BYTE&&(ct=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.RG8UI),q===r.UNSIGNED_SHORT&&(ct=r.RG16UI),q===r.UNSIGNED_INT&&(ct=r.RG32UI),q===r.BYTE&&(ct=r.RG8I),q===r.SHORT&&(ct=r.RG16I),q===r.INT&&(ct=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),q===r.UNSIGNED_INT&&(ct=r.RGB32UI),q===r.BYTE&&(ct=r.RGB8I),q===r.SHORT&&(ct=r.RGB16I),q===r.INT&&(ct=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),q===r.UNSIGNED_INT&&(ct=r.RGBA32UI),q===r.BYTE&&(ct=r.RGBA8I),q===r.SHORT&&(ct=r.RGBA16I),q===r.INT&&(ct=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),E===r.RGBA){const Gt=_t?Cc:qe.getTransfer(ft);q===r.FLOAT&&(ct=r.RGBA32F),q===r.HALF_FLOAT&&(ct=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ct=Gt===en?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function D(U,E){let q;return U?E===null||E===Oa||E===ul?q=r.DEPTH24_STENCIL8:E===ma?q=r.DEPTH32F_STENCIL8:E===cl&&(q=r.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oa||E===ul?q=r.DEPTH_COMPONENT24:E===ma?q=r.DEPTH_COMPONENT32F:E===cl&&(q=r.DEPTH_COMPONENT16),q}function B(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==ei&&U.minFilter!==ni?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function H(U){const E=U.target;E.removeEventListener("dispose",H),T(E),E.isVideoTexture&&_.delete(E)}function G(U){const E=U.target;E.removeEventListener("dispose",G),dt(E)}function T(U){const E=s.get(U);if(E.__webglInit===void 0)return;const q=U.source,ft=g.get(q);if(ft){const _t=ft[E.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&N(U),Object.keys(ft).length===0&&g.delete(q)}s.remove(U)}function N(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const q=U.source,ft=g.get(q);delete ft[E.__cacheKey],h.memory.textures--}function dt(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let _t=0;_t<E.__webglFramebuffer[ft].length;_t++)r.deleteFramebuffer(E.__webglFramebuffer[ft][_t]);else r.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)r.deleteFramebuffer(E.__webglFramebuffer[ft]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=U.textures;for(let ft=0,_t=q.length;ft<_t;ft++){const ct=s.get(q[ft]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(q[ft])}s.remove(U)}let z=0;function $(){z=0}function Q(){const U=z;return U>=l.maxTextures&&xe("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),z+=1,U}function nt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function j(U,E){const q=s.get(U);if(U.isVideoTexture&&Wt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const ft=U.image;if(ft===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(q,U,E);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function L(U,E){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){tt(q,U,E);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function P(U,E){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){tt(q,U,E);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function st(U,E){const q=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){vt(q,U,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const pt={[ll]:r.REPEAT,[Za]:r.CLAMP_TO_EDGE,[Cf]:r.MIRRORED_REPEAT},yt={[ei]:r.NEAREST,[eS]:r.NEAREST_MIPMAP_NEAREST,[xc]:r.NEAREST_MIPMAP_LINEAR,[ni]:r.LINEAR,[mf]:r.LINEAR_MIPMAP_NEAREST,[ws]:r.LINEAR_MIPMAP_LINEAR},I={[aS]:r.NEVER,[cS]:r.ALWAYS,[sS]:r.LESS,[Sh]:r.LEQUAL,[rS]:r.EQUAL,[yh]:r.GEQUAL,[oS]:r.GREATER,[lS]:r.NOTEQUAL};function Y(U,E){if(E.type===ma&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ni||E.magFilter===mf||E.magFilter===xc||E.magFilter===ws||E.minFilter===ni||E.minFilter===mf||E.minFilter===xc||E.minFilter===ws)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,pt[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,pt[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,pt[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,yt[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ei||E.minFilter!==xc&&E.minFilter!==ws||E.type===ma&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function mt(U,E){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",H));const ft=E.source;let _t=g.get(ft);_t===void 0&&(_t={},g.set(ft,_t));const ct=nt(E);if(ct!==U.__cacheKey){_t[ct]===void 0&&(_t[ct]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,q=!0),_t[ct].usedTimes++;const Gt=_t[U.__cacheKey];Gt!==void 0&&(_t[U.__cacheKey].usedTimes--,Gt.usedTimes===0&&N(E)),U.__cacheKey=ct,U.__webglTexture=_t[ct].texture}return q}function Rt(U,E,q){return Math.floor(Math.floor(U/q)/E)}function Ht(U,E,q,ft){const ct=U.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,ft,E.data);else{ct.sort((Mt,Et)=>Mt.start-Et.start);let Gt=0;for(let Mt=1;Mt<ct.length;Mt++){const Et=ct[Gt],Lt=ct[Mt],Pt=Et.start+Et.count,zt=Rt(Lt.start,E.width,4),ye=Rt(Et.start,E.width,4);Lt.start<=Pt+1&&zt===ye&&Rt(Lt.start+Lt.count-1,E.width,4)===zt?Et.count=Math.max(Et.count,Lt.start+Lt.count-Et.start):(++Gt,ct[Gt]=Lt)}ct.length=Gt+1;const At=r.getParameter(r.UNPACK_ROW_LENGTH),Jt=r.getParameter(r.UNPACK_SKIP_PIXELS),se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Et=ct.length;Mt<Et;Mt++){const Lt=ct[Mt],Pt=Math.floor(Lt.start/4),zt=Math.ceil(Lt.count/4),ye=Pt%E.width,W=Math.floor(Pt/E.width),Dt=zt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ye,W,Dt,wt,q,ft,E.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,At),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function tt(U,E,q){let ft=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=r.TEXTURE_3D);const _t=mt(U,E),ct=E.source;i.bindTexture(ft,U.__webglTexture,r.TEXTURE0+q);const Gt=s.get(ct);if(ct.version!==Gt.__version||_t===!0){i.activeTexture(r.TEXTURE0+q);const At=qe.getPrimaries(qe.workingColorSpace),Jt=E.colorSpace===Rs?null:qe.getPrimaries(E.colorSpace),se=E.colorSpace===Rs||At===Jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Mt=w(E.image,!1,l.maxTextureSize);Mt=Fe(E,Mt);const Et=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type);let Pt=O(E.internalFormat,Et,Lt,E.colorSpace,E.isVideoTexture);Y(ft,E);let zt;const ye=E.mipmaps,W=E.isVideoTexture!==!0,Dt=Gt.__version===void 0||_t===!0,wt=ct.dataReady,Vt=B(E,Mt);if(E.isDepthTexture)Pt=D(E.format===dr,E.type),Dt&&(W?i.texStorage2D(r.TEXTURE_2D,1,Pt,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,Et,Lt,null));else if(E.isDataTexture)if(ye.length>0){W&&Dt&&i.texStorage2D(r.TEXTURE_2D,Vt,Pt,ye[0].width,ye[0].height);for(let bt=0,ht=ye.length;bt<ht;bt++)zt=ye[bt],W?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,zt.width,zt.height,Et,Lt,zt.data):i.texImage2D(r.TEXTURE_2D,bt,Pt,zt.width,zt.height,0,Et,Lt,zt.data);E.generateMipmaps=!1}else W?(Dt&&i.texStorage2D(r.TEXTURE_2D,Vt,Pt,Mt.width,Mt.height),wt&&Ht(E,Mt,Et,Lt)):i.texImage2D(r.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,Et,Lt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,Pt,ye[0].width,ye[0].height,Mt.depth);for(let bt=0,ht=ye.length;bt<ht;bt++)if(zt=ye[bt],E.format!==ga)if(Et!==null)if(W){if(wt)if(E.layerUpdates.size>0){const Yt=ix(zt.width,zt.height,E.format,E.type);for(const _e of E.layerUpdates){const je=zt.data.subarray(_e*Yt/zt.data.BYTES_PER_ELEMENT,(_e+1)*Yt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,_e,zt.width,zt.height,1,Et,je)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,Mt.depth,Et,zt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Pt,zt.width,zt.height,Mt.depth,0,zt.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,Mt.depth,Et,Lt,zt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,Pt,zt.width,zt.height,Mt.depth,0,Et,Lt,zt.data)}else{W&&Dt&&i.texStorage2D(r.TEXTURE_2D,Vt,Pt,ye[0].width,ye[0].height);for(let bt=0,ht=ye.length;bt<ht;bt++)zt=ye[bt],E.format!==ga?Et!==null?W?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,zt.width,zt.height,Et,zt.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,Pt,zt.width,zt.height,0,zt.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,zt.width,zt.height,Et,Lt,zt.data):i.texImage2D(r.TEXTURE_2D,bt,Pt,zt.width,zt.height,0,Et,Lt,zt.data)}else if(E.isDataArrayTexture)if(W){if(Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,Pt,Mt.width,Mt.height,Mt.depth),wt)if(E.layerUpdates.size>0){const bt=ix(Mt.width,Mt.height,E.format,E.type);for(const ht of E.layerUpdates){const Yt=Mt.data.subarray(ht*bt/Mt.data.BYTES_PER_ELEMENT,(ht+1)*bt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,Mt.width,Mt.height,1,Et,Lt,Yt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Lt,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,Mt.width,Mt.height,Mt.depth,0,Et,Lt,Mt.data);else if(E.isData3DTexture)W?(Dt&&i.texStorage3D(r.TEXTURE_3D,Vt,Pt,Mt.width,Mt.height,Mt.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Lt,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,Pt,Mt.width,Mt.height,Mt.depth,0,Et,Lt,Mt.data);else if(E.isFramebufferTexture){if(Dt)if(W)i.texStorage2D(r.TEXTURE_2D,Vt,Pt,Mt.width,Mt.height);else{let bt=Mt.width,ht=Mt.height;for(let Yt=0;Yt<Vt;Yt++)i.texImage2D(r.TEXTURE_2D,Yt,Pt,bt,ht,0,Et,Lt,null),bt>>=1,ht>>=1}}else if(ye.length>0){if(W&&Dt){const bt=Kt(ye[0]);i.texStorage2D(r.TEXTURE_2D,Vt,Pt,bt.width,bt.height)}for(let bt=0,ht=ye.length;bt<ht;bt++)zt=ye[bt],W?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Et,Lt,zt):i.texImage2D(r.TEXTURE_2D,bt,Pt,Et,Lt,zt);E.generateMipmaps=!1}else if(W){if(Dt){const bt=Kt(Mt);i.texStorage2D(r.TEXTURE_2D,Vt,Pt,bt.width,bt.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,Lt,Mt)}else i.texImage2D(r.TEXTURE_2D,0,Pt,Et,Lt,Mt);M(E)&&S(ft),Gt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function vt(U,E,q){if(E.image.length!==6)return;const ft=mt(U,E),_t=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+q);const ct=s.get(_t);if(_t.version!==ct.__version||ft===!0){i.activeTexture(r.TEXTURE0+q);const Gt=qe.getPrimaries(qe.workingColorSpace),At=E.colorSpace===Rs?null:qe.getPrimaries(E.colorSpace),Jt=E.colorSpace===Rs||Gt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const se=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let ht=0;ht<6;ht++)!se&&!Mt?Et[ht]=w(E.image[ht],!0,l.maxCubemapSize):Et[ht]=Mt?E.image[ht].image:E.image[ht],Et[ht]=Fe(E,Et[ht]);const Lt=Et[0],Pt=c.convert(E.format,E.colorSpace),zt=c.convert(E.type),ye=O(E.internalFormat,Pt,zt,E.colorSpace),W=E.isVideoTexture!==!0,Dt=ct.__version===void 0||ft===!0,wt=_t.dataReady;let Vt=B(E,Lt);Y(r.TEXTURE_CUBE_MAP,E);let bt;if(se){W&&Dt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,ye,Lt.width,Lt.height);for(let ht=0;ht<6;ht++){bt=Et[ht].mipmaps;for(let Yt=0;Yt<bt.length;Yt++){const _e=bt[Yt];E.format!==ga?Pt!==null?W?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,0,0,_e.width,_e.height,Pt,_e.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,ye,_e.width,_e.height,0,_e.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,0,0,_e.width,_e.height,Pt,zt,_e.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,ye,_e.width,_e.height,0,Pt,zt,_e.data)}}}else{if(bt=E.mipmaps,W&&Dt){bt.length>0&&Vt++;const ht=Kt(Et[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,ye,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Mt){W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Et[ht].width,Et[ht].height,Pt,zt,Et[ht].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ye,Et[ht].width,Et[ht].height,0,Pt,zt,Et[ht].data);for(let Yt=0;Yt<bt.length;Yt++){const je=bt[Yt].image[ht].image;W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,0,0,je.width,je.height,Pt,zt,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,ye,je.width,je.height,0,Pt,zt,je.data)}}else{W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Pt,zt,Et[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ye,Pt,zt,Et[ht]);for(let Yt=0;Yt<bt.length;Yt++){const _e=bt[Yt];W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,0,0,Pt,zt,_e.image[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,ye,Pt,zt,_e.image[ht])}}}M(E)&&S(r.TEXTURE_CUBE_MAP),ct.__version=_t.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Tt(U,E,q,ft,_t,ct){const Gt=c.convert(q.format,q.colorSpace),At=c.convert(q.type),Jt=O(q.internalFormat,Gt,At,q.colorSpace),se=s.get(E),Mt=s.get(q);if(Mt.__renderTarget=E,!se.__hasExternalTextures){const Et=Math.max(1,E.width>>ct),Lt=Math.max(1,E.height>>ct);_t===r.TEXTURE_3D||_t===r.TEXTURE_2D_ARRAY?i.texImage3D(_t,ct,Jt,Et,Lt,E.depth,0,Gt,At,null):i.texImage2D(_t,ct,Jt,Et,Lt,0,Gt,At,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Xt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,_t,Mt.__webglTexture,0,F(E)):(_t===r.TEXTURE_2D||_t>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,_t,Mt.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(U,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const ft=E.depthTexture,_t=ft&&ft.isDepthTexture?ft.type:null,ct=D(E.stencilBuffer,_t),Gt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Xt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(E),ct,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(E),ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ct,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Gt,r.RENDERBUFFER,U)}else{const ft=E.textures;for(let _t=0;_t<ft.length;_t++){const ct=ft[_t],Gt=c.convert(ct.format,ct.colorSpace),At=c.convert(ct.type),Jt=O(ct.internalFormat,Gt,At,ct.colorSpace);Xt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(E),Jt,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(E),Jt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Jt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(U,E,q){const ft=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=s.get(E.depthTexture);if(_t.__renderTarget=E,(!_t.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,E.depthTexture.addEventListener("dispose",H)),_t.__webglTexture===void 0){_t.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),Y(r.TEXTURE_CUBE_MAP,E.depthTexture);const se=c.convert(E.depthTexture.format),Mt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===Ja?Et=r.DEPTH_COMPONENT24:E.depthTexture.format===dr&&(Et=r.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,Et,E.width,E.height,0,se,Mt,null)}}else j(E.depthTexture,0);const ct=_t.__webglTexture,Gt=F(E),At=ft?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Jt=E.depthTexture.format===dr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ja)Xt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,At,ct,0,Gt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,At,ct,0);else if(E.depthTexture.format===dr)Xt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,At,ct,0,Gt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,At,ct,0);else throw new Error("Unknown depthTexture format")}function Ct(U){const E=s.get(U),q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const _t=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",_t)};ft.addEventListener("dispose",_t),E.__depthDisposeCallback=_t}E.__boundDepthTexture=ft}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ft=0;ft<6;ft++)ot(E.__webglFramebuffer[ft],U,ft);else{const ft=U.texture.mipmaps;ft&&ft.length>0?ot(E.__webglFramebuffer[0],U,0):ot(E.__webglFramebuffer,U,0)}else if(q){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=r.createRenderbuffer(),jt(E.__webglDepthbuffer[ft],U,!1);else{const _t=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ct)}}else{const ft=U.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),jt(E.__webglDepthbuffer,U,!1);else{const _t=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(U,E,q){const ft=s.get(U);E!==void 0&&Tt(ft.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ct(U)}function ue(U){const E=U.texture,q=s.get(U),ft=s.get(E);U.addEventListener("dispose",G);const _t=U.textures,ct=U.isWebGLCubeRenderTarget===!0,Gt=_t.length>1;if(Gt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=E.version,h.memory.textures++),ct){q.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[At]=[];for(let Jt=0;Jt<E.mipmaps.length;Jt++)q.__webglFramebuffer[At][Jt]=r.createFramebuffer()}else q.__webglFramebuffer[At]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)q.__webglFramebuffer[At]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Gt)for(let At=0,Jt=_t.length;At<Jt;At++){const se=s.get(_t[At]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&Xt(U)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let At=0;At<_t.length;At++){const Jt=_t[At];q.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[At]);const se=c.convert(Jt.format,Jt.colorSpace),Mt=c.convert(Jt.type),Et=O(Jt.internalFormat,se,Mt,Jt.colorSpace,U.isXRRenderTarget===!0),Lt=F(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,Et,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,q.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),jt(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),Y(r.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Tt(q.__webglFramebuffer[At][Jt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Jt);else Tt(q.__webglFramebuffer[At],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(E)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let At=0,Jt=_t.length;At<Jt;At++){const se=_t[At],Mt=s.get(se);let Et=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Et=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),Y(Et,se),Tt(q.__webglFramebuffer,U,se,r.COLOR_ATTACHMENT0+At,Et,0),M(se)&&S(Et)}i.unbindTexture()}else{let At=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(At=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,ft.__webglTexture),Y(At,E),E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Tt(q.__webglFramebuffer[Jt],U,E,r.COLOR_ATTACHMENT0,At,Jt);else Tt(q.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,At,0);M(E)&&S(At),i.unbindTexture()}U.depthBuffer&&Ct(U)}function Bt(U){const E=U.textures;for(let q=0,ft=E.length;q<ft;q++){const _t=E[q];if(M(_t)){const ct=C(U),Gt=s.get(_t).__webglTexture;i.bindTexture(ct,Gt),S(ct),i.unbindTexture()}}}const pe=[],le=[];function te(U){if(U.samples>0){if(Xt(U)===!1){const E=U.textures,q=U.width,ft=U.height;let _t=r.COLOR_BUFFER_BIT;const ct=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=s.get(U),At=E.length>1;if(At)for(let se=0;se<E.length;se++)i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer);const Jt=U.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let se=0;se<E.length;se++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_t|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_t|=r.STENCIL_BUFFER_BIT)),At){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[se]);const Mt=s.get(E[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,q,ft,0,0,q,ft,_t,r.NEAREST),m===!0&&(pe.length=0,le.length=0,pe.push(r.COLOR_ATTACHMENT0+se),U.depthBuffer&&U.resolveDepthBuffer===!1&&(pe.push(ct),le.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let se=0;se<E.length;se++){i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[se]);const Mt=s.get(E[se]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,Mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function F(U){return Math.min(l.maxSamples,U.samples)}function Xt(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Wt(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Fe(U,E){const q=U.colorSpace,ft=U.format,_t=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==ao&&q!==Rs&&(qe.getTransfer(q)===en?(ft!==ga||_t!==Pi)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",q)),E}function Kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=$,this.setTexture2D=j,this.setTexture2DArray=L,this.setTexture3D=P,this.setTextureCube=st,this.rebindTextures=Zt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function FS(r,t){function i(s,l=Rs){let c;const h=qe.getTransfer(l);if(s===Pi)return r.UNSIGNED_BYTE;if(s===dh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ph)return r.UNSIGNED_SHORT_5_5_5_1;if(s===zm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Hm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fm)return r.BYTE;if(s===Bm)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===hh)return r.INT;if(s===Oa)return r.UNSIGNED_INT;if(s===ma)return r.FLOAT;if(s===Qa)return r.HALF_FLOAT;if(s===Gm)return r.ALPHA;if(s===Vm)return r.RGB;if(s===ga)return r.RGBA;if(s===Ja)return r.DEPTH_COMPONENT;if(s===dr)return r.DEPTH_STENCIL;if(s===mh)return r.RED;if(s===gh)return r.RED_INTEGER;if(s===io)return r.RG;if(s===_h)return r.RG_INTEGER;if(s===vh)return r.RGBA_INTEGER;if(s===yc||s===Mc||s===Ec||s===bc)if(h===en)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wf||s===Df||s===Nf||s===Uf)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===wf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Df)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lf||s===Of||s===If||s===Pf||s===Ff||s===Bf||s===zf)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Lf||s===Of)return h===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===If)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Pf)return c.COMPRESSED_R11_EAC;if(s===Ff)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Bf)return c.COMPRESSED_RG11_EAC;if(s===zf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Hf||s===Gf||s===Vf||s===kf||s===Xf||s===Wf||s===Yf||s===qf||s===jf||s===Zf||s===Kf||s===Qf||s===Jf||s===$f)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Hf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jf)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$f)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===th||s===eh||s===nh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===th)return h===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===eh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ih||s===ah||s===sh||s===rh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ih)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ah)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const e2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n2=`
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

}`;class i2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Qm(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ia({vertexShader:e2,fragmentShader:n2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new We(new ja(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a2 extends so{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,g=null,y=null,b=null;const w=typeof XRWebGLBinding<"u",M=new i2,S={},C=i.getContextAttributes();let O=null,D=null;const B=[],H=[],G=new Oe;let T=null;const N=new Ti;N.viewport=new Rn;const dt=new Ti;dt.viewport=new Rn;const z=[N,dt],$=new wS;let Q=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let vt=B[tt];return vt===void 0&&(vt=new gf,B[tt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(tt){let vt=B[tt];return vt===void 0&&(vt=new gf,B[tt]=vt),vt.getGripSpace()},this.getHand=function(tt){let vt=B[tt];return vt===void 0&&(vt=new gf,B[tt]=vt),vt.getHandSpace()};function j(tt){const vt=H.indexOf(tt.inputSource);if(vt===-1)return;const Tt=B[vt];Tt!==void 0&&(Tt.update(tt.inputSource,tt.frame,p||h),Tt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function L(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",P);for(let tt=0;tt<B.length;tt++){const vt=H[tt];vt!==null&&(H[tt]=null,B[tt].disconnect(vt))}Q=null,nt=null,M.reset();for(const tt in S)delete S[tt];t.setRenderTarget(O),y=null,g=null,x=null,l=null,D=null,Ht.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",L),l.addEventListener("inputsourceschange",P),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(G),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,jt=null,ot=null;C.depth&&(ot=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=C.stencil?dr:Ja,jt=C.stencil?ul:Oa);const Ct={colorFormat:i.RGBA8,depthFormat:ot,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Ct),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new La(g.textureWidth,g.textureHeight,{format:ga,type:Pi,depthTexture:new dl(g.textureWidth,g.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new La(y.framebufferWidth,y.framebufferHeight,{format:ga,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ht.setContext(l),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function P(tt){for(let vt=0;vt<tt.removed.length;vt++){const Tt=tt.removed[vt],jt=H.indexOf(Tt);jt>=0&&(H[jt]=null,B[jt].disconnect(Tt))}for(let vt=0;vt<tt.added.length;vt++){const Tt=tt.added[vt];let jt=H.indexOf(Tt);if(jt===-1){for(let Ct=0;Ct<B.length;Ct++)if(Ct>=H.length){H.push(Tt),jt=Ct;break}else if(H[Ct]===null){H[Ct]=Tt,jt=Ct;break}if(jt===-1)break}const ot=B[jt];ot&&ot.connect(Tt)}}const st=new K,pt=new K;function yt(tt,vt,Tt){st.setFromMatrixPosition(vt.matrixWorld),pt.setFromMatrixPosition(Tt.matrixWorld);const jt=st.distanceTo(pt),ot=vt.projectionMatrix.elements,Ct=Tt.projectionMatrix.elements,Zt=ot[14]/(ot[10]-1),ue=ot[14]/(ot[10]+1),Bt=(ot[9]+1)/ot[5],pe=(ot[9]-1)/ot[5],le=(ot[8]-1)/ot[0],te=(Ct[8]+1)/Ct[0],F=Zt*le,Xt=Zt*te,Wt=jt/(-le+te),Fe=Wt*-le;if(vt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Fe),tt.translateZ(Wt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),ot[10]===-1)tt.projectionMatrix.copy(vt.projectionMatrix),tt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Kt=Zt+Wt,U=ue+Wt,E=F-Fe,q=Xt+(jt-Fe),ft=Bt*ue/U*Kt,_t=pe*ue/U*Kt;tt.projectionMatrix.makePerspective(E,q,ft,_t,Kt,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function I(tt,vt){vt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(vt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let vt=tt.near,Tt=tt.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),$.near=dt.near=N.near=vt,$.far=dt.far=N.far=Tt,(Q!==$.near||nt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),Q=$.near,nt=$.far),$.layers.mask=tt.layers.mask|6,N.layers.mask=$.layers.mask&-5,dt.layers.mask=$.layers.mask&-3;const jt=tt.parent,ot=$.cameras;I($,jt);for(let Ct=0;Ct<ot.length;Ct++)I(ot[Ct],jt);ot.length===2?yt($,N,dt):$.projectionMatrix.copy(N.projectionMatrix),Y(tt,$,jt)};function Y(tt,vt,Tt){Tt===null?tt.matrix.copy(vt.matrixWorld):(tt.matrix.copy(Tt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(vt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(vt.projectionMatrix),tt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=hl*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(tt){m=tt,g!==null&&(g.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(tt){return S[tt]};let mt=null;function Rt(tt,vt){if(_=vt.getViewerPose(p||h),b=vt,_!==null){const Tt=_.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let jt=!1;Tt.length!==$.cameras.length&&($.cameras.length=0,jt=!0);for(let ue=0;ue<Tt.length;ue++){const Bt=Tt[ue];let pe=null;if(y!==null)pe=y.getViewport(Bt);else{const te=x.getViewSubImage(g,Bt);pe=te.viewport,ue===0&&(t.setRenderTargetTextures(D,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(D))}let le=z[ue];le===void 0&&(le=new Ti,le.layers.enable(ue),le.viewport=new Rn,z[ue]=le),le.matrix.fromArray(Bt.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Bt.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(pe.x,pe.y,pe.width,pe.height),ue===0&&($.matrix.copy(le.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),jt===!0&&$.cameras.push(le)}const ot=l.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const ue=x.getDepthInformation(Tt[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,l.renderState)}if(ot&&ot.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let ue=0;ue<Tt.length;ue++){const Bt=Tt[ue].camera;if(Bt){let pe=S[Bt];pe||(pe=new Qm,S[Bt]=pe);const le=x.getCameraImage(Bt);pe.sourceTexture=le}}}}for(let Tt=0;Tt<B.length;Tt++){const jt=H[Tt],ot=B[Tt];jt!==null&&ot!==void 0&&ot.update(jt,vt,p||h)}mt&&mt(tt,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),b=null}const Ht=new US;Ht.setAnimationLoop(Rt),this.setAnimationLoop=function(tt){mt=tt},this.dispose=function(){}}}const Zr=new va,s2=new fn;function r2(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,SS(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,O,D){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,D)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,C,O):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===_i&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===_i&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),O=C.envMap,D=C.envMapRotation;O&&(M.envMap.value=O,Zr.copy(D),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),M.envMapRotation.value.setFromMatrix4(s2.makeRotationFromEuler(Zr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,O){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=O*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===_i&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function o2(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const D=O.program;s.uniformBlockBinding(C,D)}function p(C,O){let D=l[C.id];D===void 0&&(b(C),D=_(C),l[C.id]=D,C.addEventListener("dispose",M));const B=O.program;s.updateUBOMapping(C,B);const H=t.render.frame;c[C.id]!==H&&(g(C),c[C.id]=H)}function _(C){const O=x();C.__bindingPointIndex=O;const D=r.createBuffer(),B=C.__size,H=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function x(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const O=l[C.id],D=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let H=0,G=D.length;H<G;H++){const T=Array.isArray(D[H])?D[H]:[D[H]];for(let N=0,dt=T.length;N<dt;N++){const z=T[N];if(y(z,H,N,B)===!0){const $=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let nt=0;for(let j=0;j<Q.length;j++){const L=Q[j],P=w(L);typeof L=="number"||typeof L=="boolean"?(z.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,$+nt,z.__data)):L.isMatrix3?(z.__data[0]=L.elements[0],z.__data[1]=L.elements[1],z.__data[2]=L.elements[2],z.__data[3]=0,z.__data[4]=L.elements[3],z.__data[5]=L.elements[4],z.__data[6]=L.elements[5],z.__data[7]=0,z.__data[8]=L.elements[6],z.__data[9]=L.elements[7],z.__data[10]=L.elements[8],z.__data[11]=0):(L.toArray(z.__data,nt),nt+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,O,D,B){const H=C.value,G=O+"_"+D;if(B[G]===void 0)return typeof H=="number"||typeof H=="boolean"?B[G]=H:B[G]=H.clone(),!0;{const T=B[G];if(typeof H=="number"||typeof H=="boolean"){if(T!==H)return B[G]=H,!0}else if(T.equals(H)===!1)return T.copy(H),!0}return!1}function b(C){const O=C.uniforms;let D=0;const B=16;for(let G=0,T=O.length;G<T;G++){const N=Array.isArray(O[G])?O[G]:[O[G]];for(let dt=0,z=N.length;dt<z;dt++){const $=N[dt],Q=Array.isArray($.value)?$.value:[$.value];for(let nt=0,j=Q.length;nt<j;nt++){const L=Q[nt],P=w(L),st=D%B,pt=st%P.boundary,yt=st+pt;D+=pt,yt!==0&&B-yt<P.storage&&(D+=B-yt),$.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=D,D+=P.storage}}}const H=D%B;return H>0&&(D+=B-H),C.__size=D,C.__cache={},this}function w(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xe("WebGLRenderer: Unsupported uniform value type.",C),O}function M(C){const O=C.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const l2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qa=null;function c2(){return qa===null&&(qa=new Zm(l2,16,16,io,Qa),qa.name="DFG_LUT",qa.minFilter=ni,qa.magFilter=ni,qa.wrapS=Za,qa.wrapT=Za,qa.generateMipmaps=!1,qa.needsUpdate=!0),qa}class BS{constructor(t={}){const{canvas:i=uS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Pi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const w=y,M=new Set([vh,_h,gh]),S=new Set([Pi,Oa,cl,ul,dh,ph]),C=new Uint32Array(4),O=new Int32Array(4);let D=null,B=null;const H=[],G=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let dt=!1;this._outputColorSpace=jn;let z=0,$=0,Q=null,nt=-1,j=null;const L=new Rn,P=new Rn;let st=null;const pt=new me(0);let yt=0,I=i.width,Y=i.height,mt=1,Rt=null,Ht=null;const tt=new Rn(0,0,I,Y),vt=new Rn(0,0,I,Y);let Tt=!1;const jt=new bh;let ot=!1,Ct=!1;const Zt=new fn,ue=new K,Bt=new Rn,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function te(){return Q===null?mt:1}let F=s;function Xt(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ch}`),i.addEventListener("webglcontextlost",Yt,!1),i.addEventListener("webglcontextrestored",_e,!1),i.addEventListener("webglcontextcreationerror",je,!1),F===null){const X="webgl2";if(F=Xt(X,A),F===null)throw Xt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ye("WebGLRenderer: "+A.message),A}let Wt,Fe,Kt,U,E,q,ft,_t,ct,Gt,At,Jt,se,Mt,Et,Lt,Pt,zt,ye,W,Dt,wt,Vt;function bt(){Wt=new fT(F),Wt.init(),Dt=new FS(F,Wt),Fe=new iT(F,Wt,t,Dt),Kt=new $A(F,Wt),Fe.reversedDepthBuffer&&g&&Kt.buffers.depth.setReversed(!0),U=new pT(F),E=new zA,q=new t2(F,Wt,Kt,E,Fe,Dt,U),ft=new uT(N),_t=new xE(F),wt=new eT(F,_t),ct=new hT(F,_t,U,wt),Gt=new gT(F,ct,_t,wt,U),zt=new mT(F,Fe,q),Et=new aT(E),At=new BA(N,ft,Wt,Fe,wt,Et),Jt=new r2(N,E),se=new GA,Mt=new qA(Wt),Pt=new tT(N,ft,Kt,Gt,b,m),Lt=new JA(N,Gt,Fe),Vt=new o2(F,U,Fe,Kt),ye=new nT(F,Wt,U),W=new dT(F,Wt,U),U.programs=At.programs,N.capabilities=Fe,N.extensions=Wt,N.properties=E,N.renderLists=se,N.shadowMap=Lt,N.state=Kt,N.info=U}bt(),w!==Pi&&(T=new vT(w,i.width,i.height,l,c));const ht=new a2(N,F);this.xr=ht,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(A){A!==void 0&&(mt=A,this.setSize(I,Y,!1))},this.getSize=function(A){return A.set(I,Y)},this.setSize=function(A,X,lt=!0){if(ht.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,Y=X,i.width=Math.floor(A*mt),i.height=Math.floor(X*mt),lt===!0&&(i.style.width=A+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(I*mt,Y*mt).floor()},this.setDrawingBufferSize=function(A,X,lt){I=A,Y=X,mt=lt,i.width=Math.floor(A*lt),i.height=Math.floor(X*lt),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(w===Pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,X,lt,it){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,X,lt,it),Kt.viewport(L.copy(tt).multiplyScalar(mt).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,X,lt,it){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,X,lt,it),Kt.scissor(P.copy(vt).multiplyScalar(mt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(A){Kt.setScissorTest(Tt=A)},this.setOpaqueSort=function(A){Rt=A},this.setTransparentSort=function(A){Ht=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,lt=!0){let it=0;if(A){let J=!1;if(Q!==null){const Nt=Q.texture.format;J=M.has(Nt)}if(J){const Nt=Q.texture.type,qt=S.has(Nt),It=Pt.getClearColor(),ee=Pt.getClearAlpha(),re=It.r,ve=It.g,Me=It.b;qt?(C[0]=re,C[1]=ve,C[2]=Me,C[3]=ee,F.clearBufferuiv(F.COLOR,0,C)):(O[0]=re,O[1]=ve,O[2]=Me,O[3]=ee,F.clearBufferiv(F.COLOR,0,O))}else it|=F.COLOR_BUFFER_BIT}X&&(it|=F.DEPTH_BUFFER_BIT),lt&&(it|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&F.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Yt,!1),i.removeEventListener("webglcontextrestored",_e,!1),i.removeEventListener("webglcontextcreationerror",je,!1),Pt.dispose(),se.dispose(),Mt.dispose(),E.dispose(),ft.dispose(),Gt.dispose(),wt.dispose(),Vt.dispose(),At.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ts),ht.removeEventListener("sessionend",es),Bi.stop()};function Yt(A){A.preventDefault(),Mm("WebGLRenderer: Context Lost."),dt=!0}function _e(){Mm("WebGLRenderer: Context Restored."),dt=!1;const A=U.autoReset,X=Lt.enabled,lt=Lt.autoUpdate,it=Lt.needsUpdate,J=Lt.type;bt(),U.autoReset=A,Lt.enabled=X,Lt.autoUpdate=lt,Lt.needsUpdate=it,Lt.type=J}function je(A){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ne(A){const X=A.target;X.removeEventListener("dispose",Ne),Ln(X)}function Ln(A){Fi(A),E.remove(A)}function Fi(A){const X=E.get(A).programs;X!==void 0&&(X.forEach(function(lt){At.releaseProgram(lt)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,lt,it,J,Nt){X===null&&(X=pe);const qt=J.isMesh&&J.matrixWorld.determinant()<0,It=Us(A,X,lt,it,J);Kt.setMaterial(it,qt);let ee=lt.index,re=1;if(it.wireframe===!0){if(ee=ct.getWireframeAttribute(lt),ee===void 0)return;re=2}const ve=lt.drawRange,Me=lt.attributes.position;let Qt=ve.start*re,be=(ve.start+ve.count)*re;Nt!==null&&(Qt=Math.max(Qt,Nt.start*re),be=Math.min(be,(Nt.start+Nt.count)*re)),ee!==null?(Qt=Math.max(Qt,0),be=Math.min(be,ee.count)):Me!=null&&(Qt=Math.max(Qt,0),be=Math.min(be,Me.count));const mn=be-Qt;if(mn<0||mn===1/0)return;wt.setup(J,it,It,lt,ee);let hn,Ue=ye;if(ee!==null&&(hn=_t.get(ee),Ue=W,Ue.setIndex(hn)),J.isMesh)it.wireframe===!0?(Kt.setLineWidth(it.wireframeLinewidth*te()),Ue.setMode(F.LINES)):Ue.setMode(F.TRIANGLES);else if(J.isLine){let Cn=it.linewidth;Cn===void 0&&(Cn=1),Kt.setLineWidth(Cn*te()),J.isLineSegments?Ue.setMode(F.LINES):J.isLineLoop?Ue.setMode(F.LINE_LOOP):Ue.setMode(F.LINE_STRIP)}else J.isPoints?Ue.setMode(F.POINTS):J.isSprite&&Ue.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)wc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Ue.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Cn=J._multiDrawStarts,$t=J._multiDrawCounts,ke=J._multiDrawCount,he=ee?_t.get(ee).bytesPerElement:1,wn=E.get(it).currentProgram.getUniforms();for(let Qn=0;Qn<ke;Qn++)wn.setValue(F,"_gl_DrawID",Qn),Ue.render(Cn[Qn]/he,$t[Qn])}else if(J.isInstancedMesh)Ue.renderInstances(Qt,mn,J.count);else if(lt.isInstancedBufferGeometry){const Cn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,$t=Math.min(lt.instanceCount,Cn);Ue.renderInstances(Qt,mn,$t)}else Ue.render(Qt,mn)};function xa(A,X,lt){A.transparent===!0&&A.side===Wn&&A.forceSinglePass===!1?(A.side=_i,A.needsUpdate=!0,On(A,X,lt),A.side=Ns,A.needsUpdate=!0,On(A,X,lt),A.side=Wn):On(A,X,lt)}this.compile=function(A,X,lt=null){lt===null&&(lt=A),B=Mt.get(lt),B.init(X),G.push(B),lt.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),A!==lt&&A.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),B.setupLights();const it=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Nt=J.material;if(Nt)if(Array.isArray(Nt))for(let qt=0;qt<Nt.length;qt++){const It=Nt[qt];xa(It,lt,J),it.add(It)}else xa(Nt,lt,J),it.add(Nt)}),B=G.pop(),it},this.compileAsync=function(A,X,lt=null){const it=this.compile(A,X,lt);return new Promise(J=>{function Nt(){if(it.forEach(function(qt){E.get(qt).currentProgram.isReady()&&it.delete(qt)}),it.size===0){J(A);return}setTimeout(Nt,10)}Wt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let $a=null;function vr(A){$a&&$a(A)}function ts(){Bi.stop()}function es(){Bi.start()}const Bi=new US;Bi.setAnimationLoop(vr),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(A){$a=A,ht.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},ht.addEventListener("sessionstart",ts),ht.addEventListener("sessionend",es),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(dt===!0)return;const lt=ht.enabled===!0&&ht.isPresenting===!0,it=T!==null&&(Q===null||lt)&&T.begin(N,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(X),X=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,X,Q),B=Mt.get(A,G.length),B.init(X),G.push(B),Zt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),jt.setFromProjectionMatrix(Zt,Na,X.reversedDepth),Ct=this.localClippingEnabled,ot=Et.init(this.clippingPlanes,Ct),D=se.get(A,H.length),D.init(),H.push(D),ht.enabled===!0&&ht.isPresenting===!0){const qt=N.xr.getDepthSensingMesh();qt!==null&&ns(qt,X,-1/0,N.sortObjects)}ns(A,X,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(Rt,Ht),le=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,le&&Pt.addToRenderList(D,A),this.info.render.frame++,ot===!0&&Et.beginShadows();const J=B.state.shadowsArray;if(Lt.render(J,A,X),ot===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&T.hasRenderPass())===!1){const qt=D.opaque,It=D.transmissive;if(B.setupLights(),X.isArrayCamera){const ee=X.cameras;if(It.length>0)for(let re=0,ve=ee.length;re<ve;re++){const Me=ee[re];xn(qt,It,A,Me)}le&&Pt.render(A);for(let re=0,ve=ee.length;re<ve;re++){const Me=ee[re];Ai(D,A,Me,Me.viewport)}}else It.length>0&&xn(qt,It,A,X),le&&Pt.render(A),Ai(D,A,X)}Q!==null&&$===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),it&&T.end(N),A.isScene===!0&&A.onAfterRender(N,A,X),wt.resetDefaultState(),nt=-1,j=null,G.pop(),G.length>0?(B=G[G.length-1],ot===!0&&Et.setGlobalState(N.clippingPlanes,B.state.camera)):B=null,H.pop(),H.length>0?D=H[H.length-1]:D=null};function ns(A,X,lt,it){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)lt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)B.pushLight(A),A.castShadow&&B.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||jt.intersectsSprite(A)){it&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Zt);const qt=Gt.update(A),It=A.material;It.visible&&D.push(A,qt,It,lt,Bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||jt.intersectsObject(A))){const qt=Gt.update(A),It=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Bt.copy(qt.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(Zt)),Array.isArray(It)){const ee=qt.groups;for(let re=0,ve=ee.length;re<ve;re++){const Me=ee[re],Qt=It[Me.materialIndex];Qt&&Qt.visible&&D.push(A,qt,Qt,lt,Bt.z,Me)}}else It.visible&&D.push(A,qt,It,lt,Bt.z,null)}}const Nt=A.children;for(let qt=0,It=Nt.length;qt<It;qt++)ns(Nt[qt],X,lt,it)}function Ai(A,X,lt,it){const{opaque:J,transmissive:Nt,transparent:qt}=A;B.setupLightsView(lt),ot===!0&&Et.setGlobalState(N.clippingPlanes,lt),it&&Kt.viewport(L.copy(it)),J.length>0&&En(J,X,lt),Nt.length>0&&En(Nt,X,lt),qt.length>0&&En(qt,X,lt),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function xn(A,X,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[it.id]===void 0){const Qt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[it.id]=new La(1,1,{generateMipmaps:!0,type:Qt?Qa:Pi,minFilter:ws,samples:Math.max(4,Fe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const Nt=B.state.transmissionRenderTarget[it.id],qt=it.viewport||L;Nt.setSize(qt.z*N.transmissionResolutionScale,qt.w*N.transmissionResolutionScale);const It=N.getRenderTarget(),ee=N.getActiveCubeFace(),re=N.getActiveMipmapLevel();N.setRenderTarget(Nt),N.getClearColor(pt),yt=N.getClearAlpha(),yt<1&&N.setClearColor(16777215,.5),N.clear(),le&&Pt.render(lt);const ve=N.toneMapping;N.toneMapping=Ua;const Me=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),B.setupLightsView(it),ot===!0&&Et.setGlobalState(N.clippingPlanes,it),En(A,lt,it),q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let be=0,mn=X.length;be<mn;be++){const hn=X[be],{object:Ue,geometry:Cn,material:$t,group:ke}=hn;if($t.side===Wn&&Ue.layers.test(it.layers)){const he=$t.side;$t.side=_i,$t.needsUpdate=!0,zi(Ue,lt,it,Cn,$t,ke),$t.side=he,$t.needsUpdate=!0,Qt=!0}}Qt===!0&&(q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt))}N.setRenderTarget(It,ee,re),N.setClearColor(pt,yt),Me!==void 0&&(it.viewport=Me),N.toneMapping=ve}function En(A,X,lt){const it=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Nt=A.length;J<Nt;J++){const qt=A[J],{object:It,geometry:ee,group:re}=qt;let ve=qt.material;ve.allowOverride===!0&&it!==null&&(ve=it),It.layers.test(lt.layers)&&zi(It,X,lt,ee,ve,re)}}function zi(A,X,lt,it,J,Nt){A.onBeforeRender(N,X,lt,it,J,Nt),A.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(N,X,lt,it,A,Nt),J.transparent===!0&&J.side===Wn&&J.forceSinglePass===!1?(J.side=_i,J.needsUpdate=!0,N.renderBufferDirect(lt,X,it,J,A,Nt),J.side=Ns,J.needsUpdate=!0,N.renderBufferDirect(lt,X,it,J,A,Nt),J.side=Wn):N.renderBufferDirect(lt,X,it,J,A,Nt),A.onAfterRender(N,X,lt,it,J,Nt)}function On(A,X,lt){X.isScene!==!0&&(X=pe);const it=E.get(A),J=B.state.lights,Nt=B.state.shadowsArray,qt=J.state.version,It=At.getParameters(A,J.state,Nt,X,lt),ee=At.getProgramCacheKey(It);let re=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,it.fog=X.fog;const ve=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=ft.get(A.envMap||it.environment,ve),it.envMapRotation=it.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,re===void 0&&(A.addEventListener("dispose",Ne),re=new Map,it.programs=re);let Me=re.get(ee);if(Me!==void 0){if(it.currentProgram===Me&&it.lightsStateVersion===qt)return Fa(A,It),Me}else It.uniforms=At.getUniforms(A),A.onBeforeCompile(It,N),Me=At.acquireProgram(It,ee),re.set(ee,Me),it.uniforms=It.uniforms;const Qt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qt.clippingPlanes=Et.uniform),Fa(A,It),it.needsLights=bn(A),it.lightsStateVersion=qt,it.needsLights&&(Qt.ambientLightColor.value=J.state.ambient,Qt.lightProbe.value=J.state.probe,Qt.directionalLights.value=J.state.directional,Qt.directionalLightShadows.value=J.state.directionalShadow,Qt.spotLights.value=J.state.spot,Qt.spotLightShadows.value=J.state.spotShadow,Qt.rectAreaLights.value=J.state.rectArea,Qt.ltc_1.value=J.state.rectAreaLTC1,Qt.ltc_2.value=J.state.rectAreaLTC2,Qt.pointLights.value=J.state.point,Qt.pointLightShadows.value=J.state.pointShadow,Qt.hemisphereLights.value=J.state.hemi,Qt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Qt.spotLightMatrix.value=J.state.spotLightMatrix,Qt.spotLightMap.value=J.state.spotLightMap,Qt.pointShadowMatrix.value=J.state.pointShadowMatrix),it.currentProgram=Me,it.uniformsList=null,Me}function Pa(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=vf.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Fa(A,X){const lt=E.get(A);lt.outputColorSpace=X.outputColorSpace,lt.batching=X.batching,lt.batchingColor=X.batchingColor,lt.instancing=X.instancing,lt.instancingColor=X.instancingColor,lt.instancingMorph=X.instancingMorph,lt.skinning=X.skinning,lt.morphTargets=X.morphTargets,lt.morphNormals=X.morphNormals,lt.morphColors=X.morphColors,lt.morphTargetsCount=X.morphTargetsCount,lt.numClippingPlanes=X.numClippingPlanes,lt.numIntersection=X.numClipIntersection,lt.vertexAlphas=X.vertexAlphas,lt.vertexTangents=X.vertexTangents,lt.toneMapping=X.toneMapping}function Us(A,X,lt,it,J){X.isScene!==!0&&(X=pe),q.resetTextureUnits();const Nt=X.fog,qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?X.environment:null,It=Q===null?N.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ao,ee=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,re=ft.get(it.envMap||qt,ee),ve=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Me=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Qt=!!lt.morphAttributes.position,be=!!lt.morphAttributes.normal,mn=!!lt.morphAttributes.color;let hn=Ua;it.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(hn=N.toneMapping);const Ue=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Cn=Ue!==void 0?Ue.length:0,$t=E.get(it),ke=B.state.lights;if(ot===!0&&(Ct===!0||A!==j)){const Tn=A===j&&it.id===nt;Et.setState(it,A,Tn)}let he=!1;it.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==ke.state.version||$t.outputColorSpace!==It||J.isBatchedMesh&&$t.batching===!1||!J.isBatchedMesh&&$t.batching===!0||J.isBatchedMesh&&$t.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&$t.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&$t.instancing===!1||!J.isInstancedMesh&&$t.instancing===!0||J.isSkinnedMesh&&$t.skinning===!1||!J.isSkinnedMesh&&$t.skinning===!0||J.isInstancedMesh&&$t.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&$t.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&$t.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&$t.instancingMorph===!1&&J.morphTexture!==null||$t.envMap!==re||it.fog===!0&&$t.fog!==Nt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Et.numPlanes||$t.numIntersection!==Et.numIntersection)||$t.vertexAlphas!==ve||$t.vertexTangents!==Me||$t.morphTargets!==Qt||$t.morphNormals!==be||$t.morphColors!==mn||$t.toneMapping!==hn||$t.morphTargetsCount!==Cn)&&(he=!0):(he=!0,$t.__version=it.version);let wn=$t.currentProgram;he===!0&&(wn=On(it,X,J));let Qn=!1,tn=!1,ai=!1;const Ze=wn.getUniforms(),Sn=$t.uniforms;if(Kt.useProgram(wn.program)&&(Qn=!0,tn=!0,ai=!0),it.id!==nt&&(nt=it.id,tn=!0),Qn||j!==A){Kt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ze.setValue(F,"projectionMatrix",A.projectionMatrix),Ze.setValue(F,"viewMatrix",A.matrixWorldInverse);const Ci=Ze.map.cameraPosition;Ci!==void 0&&Ci.setValue(F,ue.setFromMatrixPosition(A.matrixWorld)),Fe.logarithmicDepthBuffer&&Ze.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ze.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,tn=!0,ai=!0)}if($t.needsLights&&(ke.state.directionalShadowMap.length>0&&Ze.setValue(F,"directionalShadowMap",ke.state.directionalShadowMap,q),ke.state.spotShadowMap.length>0&&Ze.setValue(F,"spotShadowMap",ke.state.spotShadowMap,q),ke.state.pointShadowMap.length>0&&Ze.setValue(F,"pointShadowMap",ke.state.pointShadowMap,q)),J.isSkinnedMesh){Ze.setOptional(F,J,"bindMatrix"),Ze.setOptional(F,J,"bindMatrixInverse");const Tn=J.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ze.setValue(F,"boneTexture",Tn.boneTexture,q))}J.isBatchedMesh&&(Ze.setOptional(F,J,"batchingTexture"),Ze.setValue(F,"batchingTexture",J._matricesTexture,q),Ze.setOptional(F,J,"batchingIdTexture"),Ze.setValue(F,"batchingIdTexture",J._indirectTexture,q),Ze.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&Ze.setValue(F,"batchingColorTexture",J._colorsTexture,q));const Yn=lt.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&zt.update(J,lt,wn),(tn||$t.receiveShadow!==J.receiveShadow)&&($t.receiveShadow=J.receiveShadow,Ze.setValue(F,"receiveShadow",J.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&X.environment!==null&&(Sn.envMapIntensity.value=X.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=c2()),tn&&(Ze.setValue(F,"toneMappingExposure",N.toneMappingExposure),$t.needsLights&&Sa(Sn,ai),Nt&&it.fog===!0&&Jt.refreshFogUniforms(Sn,Nt),Jt.refreshMaterialUniforms(Sn,it,mt,Y,B.state.transmissionRenderTarget[A.id]),vf.upload(F,Pa($t),Sn,q)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(vf.upload(F,Pa($t),Sn,q),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ze.setValue(F,"center",J.center),Ze.setValue(F,"modelViewMatrix",J.modelViewMatrix),Ze.setValue(F,"normalMatrix",J.normalMatrix),Ze.setValue(F,"modelMatrix",J.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Tn=it.uniformsGroups;for(let Ci=0,wi=Tn.length;Ci<wi;Ci++){const Hi=Tn[Ci];Vt.update(Hi,wn),Vt.bind(Hi,wn)}}return wn}function Sa(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function bn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,X,lt){const it=E.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=X,E.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const lt=E.get(A);lt.__webglFramebuffer=X,lt.__useDefaultFramebuffer=X===void 0};const Ri=F.createFramebuffer();this.setRenderTarget=function(A,X=0,lt=0){Q=A,z=X,$=lt;let it=null,J=!1,Nt=!1;if(A){const It=E.get(A);if(It.__useDefaultFramebuffer!==void 0){Kt.bindFramebuffer(F.FRAMEBUFFER,It.__webglFramebuffer),L.copy(A.viewport),P.copy(A.scissor),st=A.scissorTest,Kt.viewport(L),Kt.scissor(P),Kt.setScissorTest(st),nt=-1;return}else if(It.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(It.__hasExternalTextures)q.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ve=A.depthTexture;if(It.__boundDepthTexture!==ve){if(ve!==null&&E.has(ve)&&(A.width!==ve.image.width||A.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}const ee=A.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Nt=!0);const re=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(re[X])?it=re[X][lt]:it=re[X],J=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?it=E.get(A).__webglMultisampledFramebuffer:Array.isArray(re)?it=re[lt]:it=re,L.copy(A.viewport),P.copy(A.scissor),st=A.scissorTest}else L.copy(tt).multiplyScalar(mt).floor(),P.copy(vt).multiplyScalar(mt).floor(),st=Tt;if(lt!==0&&(it=Ri),Kt.bindFramebuffer(F.FRAMEBUFFER,it)&&Kt.drawBuffers(A,it),Kt.viewport(L),Kt.scissor(P),Kt.setScissorTest(st),J){const It=E.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,It.__webglTexture,lt)}else if(Nt){const It=X;for(let ee=0;ee<A.textures.length;ee++){const re=E.get(A.textures[ee]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ee,re.__webglTexture,lt,It)}}else if(A!==null&&lt!==0){const It=E.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,lt)}nt=-1},this.readRenderTargetPixels=function(A,X,lt,it,J,Nt,qt,It=0){if(!(A&&A.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(ee=ee[qt]),ee){Kt.bindFramebuffer(F.FRAMEBUFFER,ee);try{const re=A.textures[It],ve=re.format,Me=re.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+It),!Fe.textureFormatReadable(ve)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Me)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-it&&lt>=0&&lt<=A.height-J&&F.readPixels(X,lt,it,J,Dt.convert(ve),Dt.convert(Me),Nt)}finally{const re=Q!==null?E.get(Q).__webglFramebuffer:null;Kt.bindFramebuffer(F.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(A,X,lt,it,J,Nt,qt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(ee=ee[qt]),ee)if(X>=0&&X<=A.width-it&&lt>=0&&lt<=A.height-J){Kt.bindFramebuffer(F.FRAMEBUFFER,ee);const re=A.textures[It],ve=re.format,Me=re.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+It),!Fe.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Qt),F.bufferData(F.PIXEL_PACK_BUFFER,Nt.byteLength,F.STREAM_READ),F.readPixels(X,lt,it,J,Dt.convert(ve),Dt.convert(Me),0);const be=Q!==null?E.get(Q).__webglFramebuffer:null;Kt.bindFramebuffer(F.FRAMEBUFFER,be);const mn=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await wM(F,mn,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Nt),F.deleteBuffer(Qt),F.deleteSync(mn),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,lt=0){const it=Math.pow(2,-lt),J=Math.floor(A.image.width*it),Nt=Math.floor(A.image.height*it),qt=X!==null?X.x:0,It=X!==null?X.y:0;q.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,lt,0,0,qt,It,J,Nt),Kt.unbindTexture()};const is=F.createFramebuffer(),Ba=F.createFramebuffer();this.copyTextureToTexture=function(A,X,lt=null,it=null,J=0,Nt=0){let qt,It,ee,re,ve,Me,Qt,be,mn;const hn=A.isCompressedTexture?A.mipmaps[Nt]:A.image;if(lt!==null)qt=lt.max.x-lt.min.x,It=lt.max.y-lt.min.y,ee=lt.isBox3?lt.max.z-lt.min.z:1,re=lt.min.x,ve=lt.min.y,Me=lt.isBox3?lt.min.z:0;else{const Sn=Math.pow(2,-J);qt=Math.floor(hn.width*Sn),It=Math.floor(hn.height*Sn),A.isDataArrayTexture?ee=hn.depth:A.isData3DTexture?ee=Math.floor(hn.depth*Sn):ee=1,re=0,ve=0,Me=0}it!==null?(Qt=it.x,be=it.y,mn=it.z):(Qt=0,be=0,mn=0);const Ue=Dt.convert(X.format),Cn=Dt.convert(X.type);let $t;X.isData3DTexture?(q.setTexture3D(X,0),$t=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),$t=F.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),$t=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const ke=F.getParameter(F.UNPACK_ROW_LENGTH),he=F.getParameter(F.UNPACK_IMAGE_HEIGHT),wn=F.getParameter(F.UNPACK_SKIP_PIXELS),Qn=F.getParameter(F.UNPACK_SKIP_ROWS),tn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,hn.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,hn.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,re),F.pixelStorei(F.UNPACK_SKIP_ROWS,ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Me);const ai=A.isDataArrayTexture||A.isData3DTexture,Ze=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Sn=E.get(A),Yn=E.get(X),Tn=E.get(Sn.__renderTarget),Ci=E.get(Yn.__renderTarget);Kt.bindFramebuffer(F.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let wi=0;wi<ee;wi++)ai&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,E.get(A).__webglTexture,J,Me+wi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Nt,mn+wi)),F.blitFramebuffer(re,ve,qt,It,Qt,be,qt,It,F.DEPTH_BUFFER_BIT,F.NEAREST);Kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||E.has(A)){const Sn=E.get(A),Yn=E.get(X);Kt.bindFramebuffer(F.READ_FRAMEBUFFER,is),Kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ba);for(let Tn=0;Tn<ee;Tn++)ai?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Sn.__webglTexture,J,Me+Tn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Sn.__webglTexture,J),Ze?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yn.__webglTexture,Nt,mn+Tn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yn.__webglTexture,Nt),J!==0?F.blitFramebuffer(re,ve,qt,It,Qt,be,qt,It,F.COLOR_BUFFER_BIT,F.NEAREST):Ze?F.copyTexSubImage3D($t,Nt,Qt,be,mn+Tn,re,ve,qt,It):F.copyTexSubImage2D($t,Nt,Qt,be,re,ve,qt,It);Kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ze?A.isDataTexture||A.isData3DTexture?F.texSubImage3D($t,Nt,Qt,be,mn,qt,It,ee,Ue,Cn,hn.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D($t,Nt,Qt,be,mn,qt,It,ee,Ue,hn.data):F.texSubImage3D($t,Nt,Qt,be,mn,qt,It,ee,Ue,Cn,hn):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Nt,Qt,be,qt,It,Ue,Cn,hn.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Nt,Qt,be,hn.width,hn.height,Ue,hn.data):F.texSubImage2D(F.TEXTURE_2D,Nt,Qt,be,qt,It,Ue,Cn,hn);F.pixelStorei(F.UNPACK_ROW_LENGTH,ke),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,tn),Nt===0&&X.generateMipmaps&&F.generateMipmap($t),Kt.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),Kt.unbindTexture()},this.resetState=function(){z=0,$=0,Q=null,Kt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(t),i.unpackColorSpace=qe._getUnpackColorSpace()}}const u2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:fh,AddEquation:hr,AddOperation:tS,AdditiveBlending:gm,AgXToneMapping:Om,AlphaFormat:Gm,AlwaysCompare:cS,AlwaysDepth:Mf,AlwaysStencilFunc:xm,AmbientLight:RS,ArrayCamera:wS,BackSide:_i,BasicDepthPacking:nS,Box3:gr,BoxGeometry:_r,BufferAttribute:_a,BufferGeometry:Ji,ByteType:Fm,Camera:t0,CanvasTexture:sl,CatmullRomCurve3:xS,CineonToneMapping:Um,ClampToEdgeWrapping:Za,Clock:NS,Color:me,ColorManagement:qe,ConstantAlphaFactor:Qx,ConstantColorFactor:Zx,CubeCamera:CS,CubeDepthTexture:_S,CubeReflectionMapping:mr,CubeRefractionMapping:no,CubeTexture:Km,CubeUVReflectionMapping:Uc,CullFaceBack:mm,CullFaceFront:Lx,CullFaceNone:Ux,Curve:vS,CustomBlending:Ix,CustomToneMapping:Lm,Data3DTexture:pS,DataArrayTexture:Xm,DataTexture:Zm,DepthFormat:Ja,DepthStencilFormat:dr,DepthTexture:dl,DirectionalLight:bm,DoubleSide:Wn,DstAlphaFactor:Xx,DstColorFactor:Yx,EqualCompare:rS,EqualDepth:bf,EquirectangularReflectionMapping:df,EquirectangularRefractionMapping:pf,Euler:va,EventDispatcher:so,ExternalTexture:Qm,Float32BufferAttribute:ii,FloatType:ma,Fog:Dc,FrontSide:Ns,Frustum:bh,GLSL3:ym,GreaterCompare:oS,GreaterDepth:Af,GreaterEqualCompare:yh,GreaterEqualDepth:Tf,Group:al,HalfFloatType:Qa,HemisphereLight:AS,ImageUtils:hS,InstancedBufferAttribute:Em,InstancedMesh:gS,IntType:hh,KeepStencilOp:Qr,Layers:Eh,LessCompare:sS,LessDepth:Ef,LessEqualCompare:Sh,LessEqualDepth:eo,Light:_l,LinearFilter:ni,LinearMipmapLinearFilter:ws,LinearMipmapNearestFilter:mf,LinearSRGBColorSpace:ao,LinearToneMapping:Dm,LinearTransfer:Cc,Material:oo,MathUtils:Ei,Matrix3:Ce,Matrix4:fn,MaxEquation:zx,Mesh:We,MeshBasicMaterial:Nc,MeshDepthMaterial:bS,MeshDistanceMaterial:TS,MeshLambertMaterial:ES,MeshPhysicalMaterial:Jr,MeshStandardMaterial:Cs,MinEquation:Bx,MirroredRepeatWrapping:Cf,MixOperation:$x,MultiplyBlending:vm,MultiplyOperation:uh,NearestFilter:ei,NearestMipmapLinearFilter:xc,NearestMipmapNearestFilter:eS,NeutralToneMapping:Im,NeverCompare:aS,NeverDepth:yf,NoBlending:Ka,NoColorSpace:Rs,NoToneMapping:Ua,NormalBlending:to,NotEqualCompare:lS,NotEqualDepth:Rf,Object3D:pn,ObjectSpaceNormalMap:iS,OneFactor:Gx,OneMinusConstantAlphaFactor:Jx,OneMinusConstantColorFactor:Kx,OneMinusDstAlphaFactor:Wx,OneMinusDstColorFactor:qx,OneMinusSrcAlphaFactor:Sf,OneMinusSrcColorFactor:kx,OrthographicCamera:Rh,PCFShadowMap:rl,PCFSoftShadowMap:Ox,PMREMGenerator:lh,PerspectiveCamera:Ti,Plane:fr,PlaneGeometry:ja,PointLight:Rc,Quaternion:ro,R11_EAC_Format:Pf,RED_GREEN_RGTC2_Format:sh,RED_RGTC1_Format:ih,REVISION:ch,RG11_EAC_Format:Bf,RGBAFormat:ga,RGBAIntegerFormat:vh,RGBA_ASTC_10x10_Format:Qf,RGBA_ASTC_10x5_Format:jf,RGBA_ASTC_10x6_Format:Zf,RGBA_ASTC_10x8_Format:Kf,RGBA_ASTC_12x10_Format:Jf,RGBA_ASTC_12x12_Format:$f,RGBA_ASTC_4x4_Format:Hf,RGBA_ASTC_5x4_Format:Gf,RGBA_ASTC_5x5_Format:Vf,RGBA_ASTC_6x5_Format:kf,RGBA_ASTC_6x6_Format:Xf,RGBA_ASTC_8x5_Format:Wf,RGBA_ASTC_8x6_Format:Yf,RGBA_ASTC_8x8_Format:qf,RGBA_BPTC_Format:th,RGBA_ETC2_EAC_Format:If,RGBA_PVRTC_2BPPV1_Format:Uf,RGBA_PVRTC_4BPPV1_Format:Nf,RGBA_S3TC_DXT1_Format:Mc,RGBA_S3TC_DXT3_Format:Ec,RGBA_S3TC_DXT5_Format:bc,RGBFormat:Vm,RGB_BPTC_SIGNED_Format:eh,RGB_BPTC_UNSIGNED_Format:nh,RGB_ETC1_Format:Lf,RGB_ETC2_Format:Of,RGB_PVRTC_2BPPV1_Format:Df,RGB_PVRTC_4BPPV1_Format:wf,RGB_S3TC_DXT1_Format:yc,RGFormat:io,RGIntegerFormat:_h,RawShaderMaterial:MS,Ray:jm,Raycaster:DS,RedFormat:mh,RedIntegerFormat:gh,ReinhardToneMapping:Nm,RenderTarget:dS,RepeatWrapping:ll,ReverseSubtractEquation:Fx,RingGeometry:Th,SIGNED_R11_EAC_Format:Ff,SIGNED_RED_GREEN_RGTC2_Format:rh,SIGNED_RED_RGTC1_Format:ah,SIGNED_RG11_EAC_Format:zf,SRGBColorSpace:jn,SRGBTransfer:en,Scene:Wm,ShaderChunk:De,ShaderLib:Da,ShaderMaterial:Ia,ShortType:Bm,Source:Mh,Sphere:gl,SphereGeometry:Ah,SpotLight:_f,SrcAlphaFactor:xf,SrcAlphaSaturateFactor:jx,SrcColorFactor:Vx,StaticDrawUsage:Sm,SubtractEquation:Px,SubtractiveBlending:_m,TangentSpaceNormalMap:xh,Texture:ui,Triangle:pa,UVMapping:Pm,Uint16BufferAttribute:Ym,Uint32BufferAttribute:qm,UniformsLib:Ft,UniformsUtils:yS,UnsignedByteType:Pi,UnsignedInt101111Type:Hm,UnsignedInt248Type:ul,UnsignedInt5999Type:zm,UnsignedIntType:Oa,UnsignedShort4444Type:dh,UnsignedShort5551Type:ph,UnsignedShortType:cl,VSMShadowMap:il,Vector2:Oe,Vector3:K,Vector4:Rn,WebGLCoordinateSystem:Na,WebGLCubeRenderTarget:e0,WebGLRenderTarget:La,WebGLRenderer:BS,WebGLUtils:FS,WebGPUCoordinateSystem:fl,WebXRController:gf,ZeroFactor:Hx,createCanvasElement:uS,error:Ye,log:Mm,warn:xe,warnOnce:wc},Symbol.toStringTag,{value:"Module"}));class f2 extends Wm{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new _r;t.deleteAttribute("uv");const i=new Cs({side:_i}),s=new Cs,l=new Rc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new We(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new gS(t,s,6),d=new pn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const m=new We(t,tl(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new We(t,tl(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new We(t,tl(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new We(t,tl(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new We(t,tl(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new We(t,tl(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function tl(r){return new ES({color:0,emissive:16777215,emissiveIntensity:r})}const h2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],d2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],p2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],m2=["LOW","MEDIUM","HIGH","EXTREME"],g2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],_2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],v2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},x2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},S2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},y2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},M2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function zS(r){return(r-90)*Math.PI/180}function E2(r,t,i,s){const l=zS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function el(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function HS(r){el("subject",r.subject,h2),el("domain",r.domain,d2),el("verb",r.verb,p2),el("magnitude",r.magnitude,m2),el("time",r.time,g2),el("certainty",r.certainty,_2)}function b2(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const h=M2[l][c];if(!h)throw new Error(`Unknown ${l} token: ${c}`);return h}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return HS(s),s}function T2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,h=(-90+l*36)*(Math.PI/180),d=i.x+Math.cos(h)*c,m=i.y+Math.sin(h)*c;l===0&&r.beginPath(),l===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),h=i.x+Math.cos(c)*6,d=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(h,d):r.lineTo(h,d)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function gc(r,t,i,s,l){const c=i.x-t.x,h=i.y-t.y,d=Math.sqrt(c*c+h*h)||1,m=c/d,p=h/d,_=-p,x=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+x*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-x*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function _c(r,t,i,s,l,c){const h=y2[t.certainty];if(!(h<=0)){r.save(),r.fillStyle=l;for(let d=1;d<=h;d+=1){const m=d/(h+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const x=1-m;p=x*x*i.x+2*x*m*c.x+m*m*s.x,_=x*x*i.y+2*x*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function A2(r,t,i){HS(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),h=s*.5,d=l*.5,m=i?.backgroundColor,p=i?.lineColor,_=i?.gridColor;r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(h,d,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(h,d,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(h,d,c*.12,0,Math.PI*2),r.stroke();const x=v2[t.domain],g=x2[t.time]*c,y=S2[t.magnitude]*c,b=E2(h,d,g,x),w=zS(x),M=Math.cos(w),S=Math.sin(w),C=-S,O=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let D={x:b.x,y:b.y},B={x:b.x+M*y,y:b.y+S*y},H;if(t.verb==="EXISTS")D={x:b.x-C*(y*.48),y:b.y-O*(y*.48)},B={x:b.x+C*(y*.48),y:b.y+O*(y*.48)},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),_c(r,t,D,B,p);else if(t.verb==="DECLINES")B={x:b.x-M*y,y:b.y-S*y},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),gc(r,D,B,p,7),_c(r,t,D,B,p);else if(t.verb==="TRANSFORMS")H={x:b.x+C*(y*.34)+M*(y*.34),y:b.y+O*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(D.x,D.y),r.quadraticCurveTo(H.x,H.y,B.x,B.y),r.stroke(),gc(r,H,B,p,7),_c(r,t,D,B,p,H);else if(t.verb==="INFLUENCES"){const T={x:b.x+C*3.4,y:b.y+O*3.4},N={x:B.x+C*3.4,y:B.y+O*3.4},dt={x:b.x-C*3.4,y:b.y-O*3.4},z={x:B.x-C*3.4,y:B.y-O*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(N.x,N.y),r.moveTo(dt.x,dt.y),r.lineTo(z.x,z.y),r.stroke(),gc(r,T,N,p,6.6),gc(r,dt,z,p,6.6),_c(r,t,T,N,p)}else r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(B.x,B.y),r.stroke(),gc(r,D,B,p,7),_c(r,t,D,B,p);r.fillStyle=p,r.beginPath(),r.arc(h,d,5,0,Math.PI*2),r.fill(),T2(r,t.subject,b,p)}function R2(r,t,i){const s=b2(t);A2(r,s,i)}const Ax="intelligenspartiet:language",C2={nb:{siteName:"INTELLIGENSPARTIET",languageLabel:"Språk",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Videoer",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideBack:"Tilbake",outsideVideosTitle:"Videoer",outsideVideosBody:"Et sekskantrom med video på hver flate.",outsideSignaturesTitle:"Signaturer",outsideSignaturesBody:"Denne funksjonen kommer. Ta kontakt hvis du vil engasjere deg.",outsideSignaturesContact:"Kontakt Lars",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",languageLabel:"Language",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Videos",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideBack:"Back",outsideVideosTitle:"Videos",outsideVideosBody:"A hexagon room with one video on each wall.",outsideSignaturesTitle:"Signatures",outsideSignaturesBody:"This feature is coming. Reach out if you want to get involved.",outsideSignaturesContact:"Contact Lars",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},w2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},cm=(r,t,i,s,l,c,h)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:h,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:w2}),of=[cm("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),cm("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),cm("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],D2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim().toUpperCase(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),wa=r=>{let t=r%1;return t<0&&(t+=1),t},N2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),wa(r+l*(1-Math.exp(-i*s)))},Rx=12,um=9,fm=.12,Cx=-1,hm=2.4,U2=.3,L2=1.2,O2=.3,wx=6741503,I2=5,P2=3.2,F2=.35,B2=.25,lf=400,z2=2.5,Dx=16755251,cf=3,H2=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],dm=[{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1770978482749-c088b297-1ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770978437489-d0299c39-WelhavenTheater.png"},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],n0=17.6,GS=n0*(16/9),VS=GS*Math.sqrt(3)/2,G2=.56,V2=31.2,uf=VS*2.62,Nx=n0*.56,k2=60,X2=40,W2=220,Y2=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),q2=(r,t,i,s,l,c)=>{kS(r,t,l).forEach((d,m)=>{r.fillText(d,i,s+m*c)})},kS=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let h=0;h<s.length;h+=1){const d=s[h];if(!d)continue;const m=`${c}${d} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${d} `):c=m}return c.trim()&&l.push(c.trim()),l},j2=/\(\s*bold\s*\)/gi,Z2=/\(\s*new\s*line\s*\)/gi,K2=/\(\s*new\s*paragraph\s*\)/gi,Q2=r=>{const i=r.replace(/\r\n?/g,`
`).replace(K2,`

`).replace(Z2,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const d=/\(\s*bold\s*\)/i.test(c),m=c.replace(j2,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:d,paragraphBreak:s}),s=!1}),l},J2=(r,t,i,s,l,c,h,d,m=.6)=>{const p=Q2(t);let _=s;p.forEach((x,g)=>{g>0&&x.paragraphBreak&&(_+=c*m),r.font=x.bold?d:h,kS(r,x.text,l).forEach(b=>{r.fillText(b,i,_),_+=c})}),r.font=h},$2=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,XS=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),tR=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),eR=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],nR=new Map(eR.map(([r,t])=>[XS(r),t])),iR=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],aR=iR.map(([r,t])=>[new RegExp(tR(r),"gi"),t]),sR={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},rR=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),oR=r=>{let t=r;return aR.forEach(([i,s])=>{t=t.replace(i,s)}),t},lR=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=sR[t.toLowerCase()];return i?rR(t,i):t}),cR=r=>{const t=r.trim();return t?(nR.get(XS(t))??lR(oR(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},uR=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace($2,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>cR(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},ff=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},Cm=Math.PI*2,Kr=r=>Math.min(1,Math.max(0,r)),vc=(r,t,i,s,l)=>{const c=Cm*(r*i+s),h=Cm*(t*i+l),d=Math.sin(c)*Math.cos(h),m=.5*Math.sin((c+h)*.65+s*6.37);return d+m},hf=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new sl(s)},da=(r,t,i,s,l=!1)=>{r.wrapS=ll,r.wrapT=ll,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=ws,r.magFilter=ni,l&&(r.colorSpace=jn),r.needsUpdate=!0},pm=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:h,microFreq:d,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:x,seamDepth:g,seamWidth:y,roughnessBase:b,roughnessRange:w,normalStrength:M,aoStrength:S}=r,C=t*i,O=new me(l),D=new Float32Array(C);let B=Number.POSITIVE_INFINITY,H=Number.NEGATIVE_INFINITY;for(let nt=0;nt<i;nt+=1)for(let j=0;j<t;j+=1){const L=nt*t+j,P=j/t,st=nt/i,pt=vc(P,st,c,s*.11,s*.23),yt=vc(P,st,h,s*.41+.18,s*.29+.07),I=vc(P,st,d,s*.71+.43,s*.53+.31),Y=Math.sin(Cm*((P+st*.33)*m+s*.17));let mt=0;if(_!=="none"&&x>0){const tt=(_==="x"?P:st)*x%1,vt=Math.min(tt,1-tt);mt=Math.exp(-Math.pow(vt/Math.max(1e-4,y),2))}const Rt=pt*.6+yt*.28+I*.12+Y*p-mt*g;D[L]=Rt,Rt<B&&(B=Rt),Rt>H&&(H=Rt)}const G=new Float32Array(C),T=Math.max(1e-4,H-B),N=new Uint8ClampedArray(C*4),dt=new Uint8ClampedArray(C*4),z=new Uint8ClampedArray(C*4);for(let nt=0;nt<i;nt+=1)for(let j=0;j<t;j+=1){const L=nt*t+j,P=L*4,st=j/t,pt=nt/i,yt=Kr((D[L]-B)/T);G[L]=yt;const I=vc(st,pt,h*.6,s*.19+.62,s*.73+.14)*.5+.5,Y=Kr(.78+(yt-.5)*.24+(I-.5)*.12),mt=vc(st,pt,c*.5,s*.37+.89,s*.13+.44),Rt=1+mt*.017,Ht=1+mt*.007,tt=1-mt*.013,vt=Kr(b+(1-yt)*w+(I-.5)*.14),Tt=Kr(.94-(1-yt)*S);N[P]=Math.round(Kr(O.r*Y*Rt)*255),N[P+1]=Math.round(Kr(O.g*Y*Ht)*255),N[P+2]=Math.round(Kr(O.b*Y*tt)*255),N[P+3]=255;const jt=Math.round(vt*255);dt[P]=jt,dt[P+1]=jt,dt[P+2]=jt,dt[P+3]=255;const ot=Math.round(Tt*255);z[P]=ot,z[P+1]=ot,z[P+2]=ot,z[P+3]=255}const $=(nt,j)=>{const L=(nt+t)%t,P=(j+i)%i;return G[P*t+L]},Q=new Uint8ClampedArray(C*4);for(let nt=0;nt<i;nt+=1)for(let j=0;j<t;j+=1){const P=(nt*t+j)*4,st=$(j+1,nt)-$(j-1,nt),pt=$(j,nt+1)-$(j,nt-1),yt=-st*M,I=-pt*M,Y=1,mt=1/Math.hypot(yt,I,Y);Q[P]=Math.round((yt*mt*.5+.5)*255),Q[P+1]=Math.round((I*mt*.5+.5)*255),Q[P+2]=Math.round((Y*mt*.5+.5)*255),Q[P+3]=255}return{albedo:hf(N,t,i),normal:hf(Q,t,i),roughness:hf(dt,t,i),ao:hf(z,t,i)}},fR=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,h=0;const d=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],h+=s[p+2];l/=d*255,c/=d*255,h/=d*255;const m=l*.2126+c*.7152+h*.0722;return{color:new me(l,c,h),luminance:m}};function hR(){const r=Te.useRef(null),t=Te.useRef([]),i=Te.useRef(fm),s=Te.useRef(fm),l=Te.useRef([]);Te.useEffect(()=>{const ot=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=ot,document.documentElement.style.overscrollBehavior=""}},[]);const[c,h]=Te.useState(of),[d,m]=Te.useState([]),[p,_]=Te.useState(of[0].id),[x,g]=Te.useState(!0),[y,b]=Te.useState(!1),[w,M]=Te.useState(!1),[S,C]=Te.useState("menu"),[O,D]=Te.useState([]),[B,H]=Te.useState(!1),[G,T]=Te.useState(""),[N,dt]=Te.useState(0),[z,$]=Te.useState(()=>{if(typeof window>"u")return"nb";try{const ot=window.localStorage.getItem(Ax);if(ot==="nb"||ot==="en")return ot}catch{}return"nb"});Te.useEffect(()=>{try{window.localStorage.setItem(Ax,z)}catch{}},[z]);const Q=C2[z],nt=Te.useMemo(()=>ot=>z==="nb"?uR(ot):ot,[z]),j=Te.useRef(0),L=Te.useRef(0),P=Te.useRef(null),st=Te.useCallback(ot=>{const Ct=ot>=0?1:-1;dt(Zt=>{const ue=dm.length;return(Zt+Ct+ue)%ue})},[]),pt=Te.useCallback(ot=>{ot.preventDefault();const Ct=Math.abs(ot.deltaX)>Math.abs(ot.deltaY)?ot.deltaX:ot.deltaY;j.current+=Ct;const Zt=performance.now();Zt-L.current<W2||Math.abs(j.current)<X2||(st(j.current>0?1:-1),j.current=0,L.current=Zt)},[st]),yt=Te.useCallback(ot=>{P.current=ot.touches[0]?.clientX??null},[]),I=Te.useCallback(ot=>{const Ct=P.current,Zt=ot.changedTouches[0]?.clientX??null;if(P.current=null,Ct===null||Zt===null)return;const ue=Zt-Ct;Math.abs(ue)<28||st(ue<0?1:-1)},[st]);Te.useEffect(()=>{w||C("menu")},[w]),Te.useEffect(()=>{S==="videos"&&(j.current=0,L.current=0)},[S]),Te.useEffect(()=>{if(!w||S!=="videos")return;let ot=!1;const Ct=()=>{ot||l.current.forEach(ue=>{if(!ue||!ue.paused&&ue.readyState>=2)return;const Bt=ue.play();Bt&&typeof Bt.catch=="function"&&Bt.catch(()=>{})})};Ct();const Zt=window.setInterval(Ct,900);return()=>{ot=!0,window.clearInterval(Zt)}},[w,S]),Te.useEffect(()=>{if(!w||S!=="news")return;let ot=!1;const Ct=Bt=>({title:String(Bt?.title??"").trim(),source:String(Bt?.source??"").trim(),url:String(Bt?.url??"").trim(),snippet:String(Bt?.snippet??"").trim(),published_at:String(Bt?.published_at??"").trim(),published:Bt?.published!==!1}),Zt=Bt=>{const pe=Date.parse(Bt);return Number.isFinite(pe)?pe:0};return(async()=>{H(!0),T("");for(const Bt of H2)try{const pe=await fetch(Bt,{cache:"no-store"});if(!pe.ok)continue;const le=await pe.json();if(!Array.isArray(le?.items))continue;const te=le.items.map(Ct).filter(F=>F.published&&F.title&&F.url).sort((F,Xt)=>Zt(Xt.published_at)-Zt(F.published_at));if(ot)return;D(te),H(!1);return}catch{}ot||(D([]),T(Q.outsideNewsError),H(!1))})(),()=>{ot=!0}},[w,S,Q.outsideNewsError]),Te.useEffect(()=>{let ot=!1;return(async()=>{try{const Zt=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),ue=Zt.headers.get("content-type")??"";if(!Zt.ok)throw new Error(`HTTP ${Zt.status} while loading glyph language map`);if(!ue.toLowerCase().includes("application/json")){const le=await Zt.text();throw new Error(`Expected JSON but got '${ue||"unknown"}' (${le.slice(0,120)})`)}const Bt=await Zt.json();if(!Array.isArray(Bt?.items))throw new Error("Glyph language payload missing 'items' array");const pe=Bt.items.map((le,te)=>D2(le,te)).filter(le=>le.enabled!==!1);if(ot)return;m(pe)}catch(Zt){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",Zt),ot)return;m([])}})(),()=>{ot=!0}},[]);const Y=Te.useMemo(()=>d.filter(ot=>ot.enabled!==!1&&typeof ot.canonical=="string"&&ot.canonical.trim().length>0),[d]),mt=Te.useMemo(()=>{const ot=new Map;if(!c.length||!Y.length)return ot;const Ct=Bt=>{const pe=wa(Bt);return wa(fm-pe)},Zt=[...c].sort((Bt,pe)=>{const le=typeof Bt.installation?.placement_t=="number"?Bt.installation.placement_t:0,te=typeof pe.installation?.placement_t=="number"?pe.installation.placement_t:0,F=Ct(le),Xt=Ct(te);return F===Xt?Bt.id.localeCompare(pe.id):F-Xt}),ue=Math.min(Zt.length,Y.length);for(let Bt=0;Bt<ue;Bt+=1)ot.set(Zt[Bt].id,Y[Bt]);return ot},[c,Y]),Rt=Te.useMemo(()=>{const ot=new Map;return mt.forEach((Ct,Zt)=>{Ct.canonical&&ot.set(Zt,Ct.canonical)}),ot},[mt]),Ht=Te.useMemo(()=>{const ot=new Map;return mt.forEach((Ct,Zt)=>{ot.set(Zt,{label:Ct.label||"",note:Ct.note||"",labelNb:Ct.label_nb||"",noteNb:Ct.note_nb||""})}),ot},[mt]);Te.useEffect(()=>{let ot=!1;return(async()=>{g(!0),b(!1);try{const Zt=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),ue=Zt.headers.get("content-type")??"";if(!Zt.ok)throw new Error(`HTTP ${Zt.status} while loading panel data`);if(!ue.toLowerCase().includes("application/json")){const Xt=await Zt.text();throw new Error(`Expected JSON but got '${ue||"unknown"}' (${Xt.slice(0,120)})`)}const Bt=await Zt.json();if(!Array.isArray(Bt?.panels))throw new Error("Panel payload missing 'panels' array");const pe=typeof Bt.media_root=="string"?Bt.media_root.replace(/\/+$/,""):"",le=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",te=Xt=>/^https?:\/\//i.test(Xt)&&le?`/proxy?url=${encodeURIComponent(Xt)}`:Xt,F=Bt.panels.map(Xt=>{const Wt=typeof Xt?.source=="string"?Xt.source.replace(/^\/+/,""):"",Fe=Wt?pe?`${pe}/${Wt}`:`/${Wt}`:void 0,Kt=Fe?te(Fe):void 0,U=typeof Xt?.poster=="string"?Xt.poster.replace(/^\/+/,""):"",E=U?pe?`${pe}/${U}`:`/${U}`:void 0,q=E?te(E):void 0,ft=Xt?.type==="image"||Xt?.type==="video"?Xt.type:"text",_t=Xt?.content??{},ct=String(_t?.title??"Untitled").trim()||"Untitled",Gt=String(_t?.description??"").trim(),At=String(_t?.title_nb??_t?.title_no??"").trim(),Jt=String(_t?.description_nb??_t?.description_no??"").trim(),se=String(_t?.title_en??"").trim(),Mt=String(_t?.description_en??"").trim();return{...Xt,kind:ft,type:ft,title:ct,body:Gt,title_nb:At||ct,body_nb:Jt||Gt,title_en:se,body_en:Mt,cta:_t?.cta,poster:q,image:ft==="image"?Kt:void 0,video:ft==="video"?Kt:void 0}});if(F.length===0)throw new Error("Panel payload contained 0 panels");if(ot)return;h(F),_(F[0].id)}catch(Zt){if(console.error("Failed to load panels; using fallback data.",Zt),ot)return;h(of),_(of[0].id),b(!0)}finally{ot||g(!1)}})(),()=>{ot=!0}},[]);const tt=Te.useMemo(()=>c.find(ot=>ot.id===p)??c[0]??{title:"",body:""},[p,c]),vt=Te.useMemo(()=>ot=>{const Ct=Ht.get(ot.id);if(z==="nb"){const Bt=ff(Ct?.labelNb,ot.title_nb,nt(Ct?.label||""),nt(ot.title||"")),pe=ff(Ct?.noteNb,ot.body_nb,nt(Ct?.note||""),nt(ot.body||""));return{title:Bt||"Mangler norsk tittel",body:pe||"Mangler norsk tekst."}}const Zt=ff(Ct?.label,ot.title_en),ue=ff(Ct?.note,ot.body_en);return{title:Zt||"Missing English title",body:ue||"Missing English text."}},[Ht,z,nt]),Tt=Te.useMemo(()=>vt(tt).title,[tt,vt]),jt=Te.useMemo(()=>new Intl.DateTimeFormat(z==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[z]);return Te.useEffect(()=>{if(c.length===0)return;const ot=r.current;if(!ot)return;M(!1);let Ct=!1,Zt=()=>{};return(()=>{if(Ct||!ot)return;t.current=[];const Bt=window.matchMedia("(prefers-reduced-motion: reduce)"),pe=window.matchMedia("(max-width: 767px)"),le=Bt.matches,te=pe.matches,F=new Wm;F.background=new me(987671),F.fog=new Dc(987671,38,230);const Xt=new Ti(te?72:64,ot.clientWidth/ot.clientHeight,.1,1200),Wt=new BS({antialias:!te,alpha:!1,powerPreference:"high-performance"});Wt.setPixelRatio(Math.min(window.devicePixelRatio,te?1:1.5)),Wt.setSize(ot.clientWidth,ot.clientHeight),Wt.outputColorSpace=jn,Wt.toneMapping=fh,Wt.toneMappingExposure=te?.76:.72,Wt.shadowMap.enabled=!te,Wt.shadowMap.type=rl,ot.appendChild(Wt.domElement);const Fe=new lh(Wt),Kt=Fe.fromScene(new f2,.06);F.environment=Kt.texture;const U=new RS(16185599,.05);F.add(U);const E=new AS(14739442,1777446,.08);F.add(E);const q=Y2(u2),ft=new xS(q,!0,"catmullrom",.17),_t=te?180:300,ct=Math.min(8,Wt.capabilities.getMaxAnisotropy()),Gt=te?256:512,At=pm({width:Gt,height:Gt,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});da(At.albedo,4.8,24,ct,!0),da(At.normal,4.8,24,ct),da(At.roughness,4.8,24,ct),da(At.ao,4.8,24,ct);const Jt=pm({width:Gt,height:Gt,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});da(Jt.albedo,2.2,24,ct,!0),da(Jt.normal,2.2,24,ct),da(Jt.roughness,2.2,24,ct),da(Jt.ao,2.2,24,ct);const se=pm({width:Gt,height:Gt,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});da(se.albedo,3.4,24,ct,!0),da(se.normal,3.4,24,ct),da(se.roughness,3.4,24,ct),da(se.ao,3.4,24,ct);const Mt=new Jr({color:9607586,map:At.albedo,normalMap:At.normal,normalScale:new Oe(.32,.32),roughnessMap:At.roughness,roughness:.38,metalness:0,aoMap:At.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Wn}),Et=new Jr({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Wn}),Lt=new Jr({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new me(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Wn}),Pt=()=>{const Ot=[],ce=new K(0,1,0);let fe=new K(1,0,0);for(let Ut=0;Ut<=_t;Ut+=1){const Pn=Ut/_t,Vi=ft.getPointAt(Pn),Be=Pn===1?Vi.clone().sub(ft.getPointAt(Pn-.001)).normalize():ft.getPointAt(Pn+.001).sub(Vi).normalize();let Ge=new K().crossVectors(Be,ce).normalize();Ge.lengthSq()<1e-4&&(Ge=fe.clone()),Ge.dot(fe)<0&&Ge.multiplyScalar(-1),fe=Ge.clone();const An=new K().crossVectors(Ge,Be).normalize();Ot.push({pt:Vi,right:Ge,up:An,t:Pn})}const ae=(Ut,Pn,Vi=!1)=>{const Be=[],Ge=[],An=[];for(let Ae=0;Ae<=_t;Ae+=1){const yn=Ot[Ae],hi=Ut(yn),Jn=Pn(yn);Be.push(hi.x,hi.y,hi.z,Jn.x,Jn.y,Jn.z),Ge.push(0,yn.t,1,yn.t)}for(let Ae=0;Ae<_t;Ae+=1){const yn=Ae*2,hi=yn+1,Jn=yn+2,di=yn+3;Vi?An.push(yn,Jn,hi,Jn,di,hi):An.push(yn,hi,Jn,Jn,hi,di)}const Fn=new Ji;Fn.setAttribute("position",new ii(Be,3));const Si=new ii(Ge,2);return Fn.setAttribute("uv",Si),Fn.setAttribute("uv2",Si.clone()),Fn.setIndex(An),Fn.computeVertexNormals(),Fn},kt=Rx*.5,Se=um*.5,Xe=ae(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-Se)).add(Ut.right.clone().multiplyScalar(-kt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-Se)).add(Ut.right.clone().multiplyScalar(kt))),nn=ae(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se)).add(Ut.right.clone().multiplyScalar(-kt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se)).add(Ut.right.clone().multiplyScalar(kt)),!0),an=ae(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-Se)).add(Ut.right.clone().multiplyScalar(-kt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se)).add(Ut.right.clone().multiplyScalar(-kt)),!0),fi=ae(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-Se)).add(Ut.right.clone().multiplyScalar(kt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se)).add(Ut.right.clone().multiplyScalar(kt))),xi=.08,Dn=.015,Je=ae(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se-xi)).add(Ut.right.clone().multiplyScalar(-kt+Dn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se)).add(Ut.right.clone().multiplyScalar(-kt+Dn)),!0),sn=ae(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se-xi)).add(Ut.right.clone().multiplyScalar(kt-Dn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se)).add(Ut.right.clone().multiplyScalar(kt-Dn)),!1),gn=.22,In=.018,ea=ae(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-Se)).add(Ut.right.clone().multiplyScalar(-kt+In)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-Se+gn)).add(Ut.right.clone().multiplyScalar(-kt+In)),!0),rs=ae(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-Se)).add(Ut.right.clone().multiplyScalar(kt-In)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-Se+gn)).add(Ut.right.clone().multiplyScalar(kt-In)),!1),Ma=.14,na=ae(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se-.05)).add(Ut.right.clone().multiplyScalar(-Ma)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(Se-.05)).add(Ut.right.clone().multiplyScalar(Ma)),!0);return{floorGeo:Xe,ceilGeo:nn,leftGeo:an,rightGeo:fi,leftSkirtGeo:ea,rightSkirtGeo:rs,trackRailGeo:na,leftCrownGeo:Je,rightCrownGeo:sn}},{floorGeo:zt,ceilGeo:ye,leftGeo:W,rightGeo:Dt,leftSkirtGeo:wt,rightSkirtGeo:Vt,trackRailGeo:bt,leftCrownGeo:ht,rightCrownGeo:Yt}=Pt(),_e=new We(zt,Mt),je=new We(ye,Lt),Ne=new We(W,Et),Ln=new We(Dt,Et),Fi=new Jr({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),xa=new Cs({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Wn}),$a=new We(wt,xa),vr=new We(Vt,xa);$a.receiveShadow=!0,vr.receiveShadow=!0;const ts=new We(ht,xa),es=new We(Yt,xa);ts.receiveShadow=!1,es.receiveShadow=!1;const Bi=new Jr({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Wn}),ns=new We(bt,Bi);ns.receiveShadow=!1,_e.receiveShadow=!0,_e.castShadow=!0,je.receiveShadow=!0,je.castShadow=!0,Ne&&(Ne.receiveShadow=!0,Ne.castShadow=!0),Ln&&(Ln.receiveShadow=!0,Ln.castShadow=!0),F.add(_e),F.add(je),Ne&&F.add(Ne),Ln&&F.add(Ln),F.add($a),F.add(vr),F.add(ts),F.add(es),F.add(ns);const Ai=new K(0,1,0),xn=new pn,En=new pn,zi=new pn;F.add(xn),F.add(En),F.add(zi);const On=new _f(16773598,te?16:24,34,Math.PI/8.4,.44,2);On.target=xn,On.castShadow=!te,On.castShadow&&(On.shadow.mapSize.width=2048,On.shadow.mapSize.height=2048,On.shadow.bias=-35e-5,On.shadow.normalBias=.012,On.shadow.camera.near=.4,On.shadow.camera.far=34),F.add(On);const Pa=new _f(12571903,te?6:9,34,Math.PI/6.5,.68,2);Pa.target=En,Pa.castShadow=!1,F.add(Pa);const Fa=new _f(14083583,te?5:7,28,Math.PI/7.8,.6,2);Fa.target=zi,Fa.castShadow=!1,F.add(Fa);const Us=new pn,Sa=new pn;F.add(Us),F.add(Sa);const bn=new bm(16774374,0);if(bn.target=Us,bn.castShadow=!te,bn.castShadow){bn.shadow.mapSize.width=4096,bn.shadow.mapSize.height=4096,bn.shadow.bias=-2e-4,bn.shadow.normalBias=.005;const Ot=320;bn.shadow.camera.left=-Ot,bn.shadow.camera.right=Ot,bn.shadow.camera.top=Ot,bn.shadow.camera.bottom=-Ot,bn.shadow.camera.near=1,bn.shadow.camera.far=1200}F.add(bn);const Ri=new bm(9090280,0);Ri.target=Sa,F.add(Ri),zt.computeBoundingBox(),zt.computeBoundingSphere(),ye.computeBoundingBox(),ye.computeBoundingSphere(),W.computeBoundingBox(),W.computeBoundingSphere(),Dt.computeBoundingBox(),Dt.computeBoundingSphere();const Ba=c.some(Ot=>Ot.installation?.mount_type==="continuous_led_wall"||Ot.installation?.mount_type==="jutting_half_wall")?c:te?c.filter((Ot,ce)=>ce%2===0):c,A=[],X=[],lt=[],it=[],J=[],Nt=[],qt=[],It=Ot=>{if(!Ot.paused&&Ot.currentTime>0)return;const ce=Ot.play();ce&&typeof ce.catch=="function"&&ce.catch(()=>{})},ee=setInterval(()=>{let Ot=!0;Nt.forEach(ce=>{(ce.paused||ce.readyState<2)&&(Ot=!1,It(ce))}),Ot&&Nt.length>0&&clearInterval(ee)},500);J.push(()=>clearInterval(ee));const re=new _r(1,1,.2),ve=new ja(.82,.82),Me=new Jr({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),Qt=(Ot,ce)=>{const ae=document.createElement("canvas");ae.width=512,ae.height=512;const kt=ae.getContext("2d");kt.clearRect(0,0,512,512);const Se=Rt.get(ce);if(Se)try{R2(kt,Se,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const sn=new sl(ae);return sn.colorSpace=jn,sn}catch(sn){console.warn(`Invalid glyph canonical sentence for panel '${ce}': '${Se}'. Falling back to procedural glyph.`,sn)}const Xe=512/2,nn=512/2,an=Ot*137.508;kt.fillStyle="rgba(6,14,24,0.7)",kt.beginPath(),kt.arc(Xe,nn,512*.42,0,Math.PI*2),kt.fill(),kt.strokeStyle="rgba(102,221,255,0.95)",kt.lineWidth=2.5,kt.lineCap="round",kt.beginPath(),kt.arc(Xe,nn,512*.38,0,Math.PI*2),kt.stroke();const fi=3+Ot%4;for(let sn=0;sn<fi;sn++){const gn=sn/fi*Math.PI*2+an,In=512*.08,ea=512*.32;kt.beginPath(),kt.moveTo(Xe+Math.cos(gn)*In,nn+Math.sin(gn)*In),kt.lineTo(Xe+Math.cos(gn)*ea,nn+Math.sin(gn)*ea),kt.stroke()}const xi=2+Ot%3;for(let sn=0;sn<xi;sn++){const gn=512*(.15+sn*.09),In=an+sn*1.2;kt.beginPath(),kt.arc(Xe,nn,gn,In,In+Math.PI*(.4+Ot%3*.2)),kt.stroke()}kt.fillStyle="rgba(102,221,255,0.85)";const Dn=3+Ot%5;for(let sn=0;sn<Dn;sn++){const gn=an+sn/Dn*Math.PI*2,In=512*(.2+sn%3*.06);kt.beginPath(),kt.arc(Xe+Math.cos(gn)*In,nn+Math.sin(gn)*In,4,0,Math.PI*2),kt.fill()}kt.strokeStyle="rgba(102,221,255,0.5)",kt.lineWidth=1.5,kt.beginPath(),kt.arc(Xe,nn,512*.12,0,Math.PI*2),kt.stroke(),kt.fillStyle="rgba(102,221,255,0.95)",kt.beginPath(),kt.arc(Xe,nn,6,0,Math.PI*2),kt.fill();const Je=new sl(ae);return Je.colorSpace=jn,Je},be=(Ot,ce)=>{const fe=document.createElement("canvas");fe.width=1024,fe.height=640;const ae=fe.getContext("2d");ae.fillStyle="rgba(8,12,18,0.88)",ae.beginPath(),ae.roundRect(16,16,992,608,24),ae.fill(),ae.strokeStyle="rgba(102,221,255,0.25)",ae.lineWidth=2,ae.beginPath(),ae.roundRect(16,16,992,608,24),ae.stroke(),ae.fillStyle="rgba(102,221,255,0.95)",ae.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",q2(ae,Ot.toUpperCase(),60,100,900,58),ae.strokeStyle="rgba(102,221,255,0.3)",ae.lineWidth=2,ae.beginPath(),ae.moveTo(60,180),ae.lineTo(960,180),ae.stroke(),ae.fillStyle="rgba(220,230,240,0.9)";const kt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",Se="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";ae.font=kt,J2(ae,ce,60,230,900,42,kt,Se);const Xe=new sl(fe);return Xe.colorSpace=jn,Xe},mn=()=>{const ce=document.createElement("canvas");ce.width=512,ce.height=512;const fe=ce.getContext("2d"),ae=512/2,kt=512/2;fe.beginPath(),fe.arc(ae,kt,512*.42,0,Math.PI*2),fe.fillStyle="rgba(6,14,24,0.7)",fe.fill(),fe.strokeStyle="rgba(255,170,51,0.9)",fe.lineWidth=6,fe.beginPath(),fe.arc(ae,kt,512*.38,0,Math.PI*2),fe.stroke();const Se=8;for(let nn=0;nn<Se;nn++){const an=nn/Se*Math.PI*2-Math.PI/2;fe.strokeStyle=`rgba(255,${170+Math.round(Math.sin(nn)*40)},51,0.8)`,fe.lineWidth=4,fe.beginPath(),fe.moveTo(ae+Math.cos(an)*512*.12,kt+Math.sin(an)*512*.12),fe.lineTo(ae+Math.cos(an)*512*.34,kt+Math.sin(an)*512*.34),fe.stroke();const fi=ae+Math.cos(an)*512*.34,xi=kt+Math.sin(an)*512*.34,Dn=512*.06;fe.beginPath(),fe.moveTo(fi,xi),fe.lineTo(fi-Dn*Math.cos(an-.4),xi-Dn*Math.sin(an-.4)),fe.moveTo(fi,xi),fe.lineTo(fi-Dn*Math.cos(an+.4),xi-Dn*Math.sin(an+.4)),fe.stroke()}fe.beginPath(),fe.arc(ae,kt,512*.06,0,Math.PI*2),fe.fillStyle="rgba(255,200,80,0.95)",fe.fill();const Xe=new sl(ce);return Xe.colorSpace=jn,Xe},hn=Ot=>{const ce=wa(Ot),fe=ft.getPointAt(ce),kt=ft.getPointAt(wa(ce+.002)).clone().sub(fe).normalize();let Se=new K().crossVectors(kt,Ai).normalize();Se.lengthSq()<1e-4&&(Se=new K(1,0,0));const Xe=new K().crossVectors(Se,kt).normalize();return{point:fe,tangent:kt,right:Se,up:Xe}};ft.getLength();const Ue=[],Cn=new ja(hm*2,hm*2),$t=new ja(I2,P2);Ba.forEach((Ot,ce)=>{const fe=Ot.installation,ae=wa(fe?.placement_t??.05+ce/Ba.length),{point:kt,right:Se,up:Xe}=hn(ae),nn=fe?.side==="left",xi=(fe?.side==="center"?0:nn?-1:1)*Rx*.12,Dn=kt.clone().add(Se.clone().multiplyScalar(xi)).add(Xe.clone().multiplyScalar(.5)),Je=Qt(ce,Ot.id);X.push(Je);const sn=new Cs({color:16777215,emissive:new me(wx),emissiveIntensity:1.2,map:Je,emissiveMap:Je,transparent:!0,alphaTest:.05,side:Wn,depthWrite:!1});lt.push(sn);const gn=new We(Cn,sn);gn.position.copy(Dn),gn.userData={panel:Ot,isGlyph:!0},A.push(gn),F.add(gn);const In=vt(Ot),ea=In.title,rs=In.body,Ma=be(ea,rs);X.push(Ma);const na=new Cs({color:16777215,emissive:new me(1122867),emissiveIntensity:.3,map:Ma,transparent:!0,opacity:0,side:Wn,depthWrite:!0});lt.push(na);const Ut=new We($t,na),Pn=new al;Pn.add(Ut),Pn.position.copy(Dn),Pn.scale.setScalar(.01),Pn.visible=!1,F.add(Pn);const Vi=new Rc(wx,te?6:12,20,1.5);Vi.position.copy(Dn),F.add(Vi),Ue.push({mesh:gn,card:Pn,panel:Ot,progress:ae,baseY:Dn.y,expanded:!1,expandT:0}),t.current.push({meta:Ot,progress:ae})});let ke=!1,he=0;const wn=new K,Qn=new K,tn=new K,ai=32;for(let Ot=0;Ot<ai;Ot++)tn.add(ft.getPointAt(Ot/ai));tn.divideScalar(ai);const Ze=new ja(cf*2,cf*2),Sn=mn();X.push(Sn);const Yn=new Cs({color:16777215,emissive:new me(Dx),emissiveIntensity:1.4,map:Sn,emissiveMap:Sn,transparent:!0,alphaTest:.05,side:Wn,depthWrite:!1});lt.push(Yn);const{point:Tn,up:Ci}=hn(B2),wi=Tn.clone().add(Ci.clone().multiplyScalar(1)),Hi=new We(Ze,Yn);Hi.position.copy(wi),Hi.userData={isExitGlyph:!0},F.add(Hi);const Dh=new ja(cf*5,cf*5),Nh=new Nc({visible:!1,side:Wn}),ya=new We(Dh,Nh);ya.position.copy(wi),ya.userData={isExitGlyph:!0},A.push(ya),F.add(ya);const $i=new Rc(Dx,te?6:12,20,1.5);$i.position.copy(wi),F.add($i);const lo=new Ah(te?1.25:1.6,26,26);it.push(lo);const xr=new Cs({color:16764788,emissive:new me(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});lt.push(xr);const za=Tn.clone().add(Ci.clone().multiplyScalar(um*.52+.32)),Gi=new We(lo,xr);Gi.position.copy(za),Gi.userData={isReentryDot:!0},A.push(Gi),F.add(Gi);const xl=new Th(te?1.75:2.2,te?2.35:2.95,52);it.push(xl);const Sr=new Nc({color:16761948,transparent:!0,opacity:0,side:Wn,depthWrite:!1});lt.push(Sr);const Ls=new We(xl,Sr);Ls.position.copy(za),F.add(Ls);const as=new Rc(16761948,0,te?34:44,2);as.position.copy(za),F.add(as);const ta=new DS,yr=new Oe,Os=Ot=>{Nt.forEach(It);const ce=Wt.domElement.getBoundingClientRect();yr.x=(Ot.clientX-ce.left)/ce.width*2-1,yr.y=-((Ot.clientY-ce.top)/ce.height)*2+1,ta.setFromCamera(yr,Xt);const fe=ta.intersectObjects(A,!1);if(fe.length>0){const ae=fe[0].object;if(ae.userData.isReentryDot&&ke){ke=!1,M(!1);return}if(ae.userData.isExitGlyph){if(ke=!ke,M(ke),ke){const Xe=Xt.position.clone().clone().sub(tn).normalize();wn.copy(tn).add(Xe.multiplyScalar(lf)),wn.y=tn.y+lf*.35,Qn.copy(tn)}Ue.forEach(Se=>{Se.expanded=!1});return}if(ke){ke=!1,M(!1);return}const kt=ae.userData.panel;if(kt){const Se=Ue.find(Xe=>Xe.panel.id===kt.id);Se&&(Se.expanded?Se.expanded=!1:(Ue.forEach(Xe=>{Xe.expanded=!1}),Se.expanded=!0))}}else ke?(ke=!1,M(!1)):Ue.forEach(ae=>{ae.expanded=!1})};Wt.domElement.addEventListener("pointerdown",Os);const vi={x:0,y:0},Ha={x:0,y:0},Mr=Ot=>{if(le||te)return;const ce=Wt.domElement.getBoundingClientRect(),fe=(Ot.clientX-ce.left)/ce.width,ae=(Ot.clientY-ce.top)/ce.height;vi.x=(fe-.5)*2,vi.y=(ae-.5)*2},Sl=()=>{vi.x=0,vi.y=0};Wt.domElement.addEventListener("pointermove",Mr,{passive:!0}),Wt.domElement.addEventListener("pointerleave",Sl,{passive:!0});const Er=Ot=>{Ot.preventDefault(),!ke&&(Nt.forEach(It),i.current=wa(i.current+Cx*Ot.deltaY*75e-6))};Wt.domElement.addEventListener("wheel",Er,{passive:!1});const br=Ot=>{if((Ot.key==="o"||Ot.key==="O")&&(ke=!ke,M(ke),ke)){const fe=Xt.position.clone().clone().sub(tn).normalize();wn.copy(tn).add(fe.multiplyScalar(lf)),wn.y=tn.y+lf*.35,Qn.copy(tn)}};window.addEventListener("keydown",br);let Tr=0;const si=Ot=>{Nt.forEach(It),Tr=Ot.touches[0]?.clientY??0},Ga=Ot=>{if(Ot.preventDefault(),ke)return;const ce=Ot.touches[0]?.clientY??Tr,fe=Tr-ce;i.current=wa(i.current+Cx*fe*11e-5),Tr=ce};Wt.domElement.addEventListener("touchstart",si,{passive:!0}),Wt.domElement.addEventListener("touchmove",Ga,{passive:!1});const Ar=()=>{ot&&(Xt.aspect=ot.clientWidth/ot.clientHeight,Xt.updateProjectionMatrix(),Wt.setSize(ot.clientWidth,ot.clientHeight))};window.addEventListener("resize",Ar);const ss=new pn,Lc=new NS,Rr=new K,co=new K,Is=new K;let Cr=c.length>0?c[0].id:"";const yl=()=>{if(Ct)return;const Ot=Lc.getDelta(),ce=Lc.getElapsedTime();s.current=N2(s.current,i.current,le?2.8:4.8,Ot),Ha.x+=(vi.x-Ha.x)*.07,Ha.y+=(vi.y-Ha.y)*.07;const fe=s.current,ae=wa(fe+(te?.008:.01)),kt=ft.getPointAt(fe),Se=ft.getPointAt(ae),Xe=ft.getPointAt(wa(fe+.002)).sub(ft.getPointAt(wa(fe-.002))).normalize();let nn=new K().crossVectors(Xe,Ai).normalize();nn.lengthSq()<1e-4&&(nn=new K(1,0,0));const an=new K().crossVectors(nn,Xe).normalize(),fi=nn.clone().multiplyScalar(Ha.x*(te?0:.62)).add(an.clone().multiplyScalar(Ha.y*(te?0:.42))),xi=le?new K:an.clone().multiplyScalar(Math.sin(ce*.45)*.12),Dn=1/z2;ke&&he<1?he=Math.min(1,he+Dn*Ot):!ke&&he>0&&(he=Math.max(0,he-Dn*Ot));const Je=he<.5?4*he*he*he:1-Math.pow(-2*he+2,3)/2;if(Us.position.copy(tn),Sa.position.copy(tn),bn.position.set(tn.x+500,tn.y+600,tn.z-300),Ri.position.set(tn.x-400,tn.y+150,tn.z+350),Je>.01){F.fog instanceof Dc&&(F.fog.near=Ei.lerp(38,9999,Je),F.fog.far=Ei.lerp(230,1e4,Je));const Be=new me(987671),Ge=new me(395794);F.background.copy(Be).lerp(Ge,Je),U.intensity=Ei.lerp(.05,.08,Je),E.intensity=Ei.lerp(.08,.12,Je),bn.intensity=Ei.lerp(0,te?2.2:3.5,Je),Ri.intensity=Ei.lerp(0,te?.25:.4,Je),Wt.toneMappingExposure=Ei.lerp(te?.76:.72,te?1:1.1,Je),[Mt,Et].forEach(An=>{An.emissive.set(3359829),An.emissiveIntensity=.12*Je}),Lt.color.set(0).lerp(new me(16777215),Je),Lt.toneMapped=Je>.5,Lt.fog=Je>.5,Lt.emissive.set(16777215),Lt.emissiveIntensity=Ei.lerp(1,.15,Je),Lt.envMapIntensity=Ei.lerp(0,.1,Je)}else U.intensity=.05,E.intensity=.08,bn.intensity=0,Ri.intensity=0,Wt.toneMappingExposure=te?.76:.72,F.background.set(987671),[Mt,Et].forEach(Be=>{Be.emissive.set(0),Be.emissiveIntensity=0}),Lt.color.set(0),Lt.toneMapped=!1,Lt.fog=!1,Lt.emissive.set(16777215),Lt.emissiveIntensity=1,Lt.envMapIntensity=0;const sn=an.clone().multiplyScalar(-um*.2),gn=kt.clone().add(sn).add(fi).add(xi),In=Se.clone().add(sn).add(fi.multiplyScalar(.22));if(Je>.99)Xt.position.copy(wn),Xt.lookAt(Qn);else if(Je>.001){Xt.position.lerpVectors(gn,wn,Je);const Be=In.clone().lerp(Qn,Je);Xt.lookAt(Be)}else Xt.position.copy(gn),ss.position.copy(Xt.position),ss.lookAt(In),Xt.quaternion.slerp(ss.quaternion,1-Math.exp(-8.1*Ot));const ea=.94+Math.sin(ce*.23)*.06,rs=Se.clone().add(sn);On.position.copy(Xt.position).add(an.clone().multiplyScalar(2.9)).add(nn.clone().multiplyScalar(2.1)).add(Xe.clone().multiplyScalar(-2.2)),xn.position.copy(rs).add(nn.clone().multiplyScalar(2.5)).add(an.clone().multiplyScalar(-.9)),On.intensity=(te?14:21)*ea,Pa.position.copy(Xt.position).add(an.clone().multiplyScalar(2)).add(nn.clone().multiplyScalar(-2.4)).add(Xe.clone().multiplyScalar(-1.1)),En.position.copy(rs).add(nn.clone().multiplyScalar(-2)).add(an.clone().multiplyScalar(-1.4)),Pa.intensity=(te?5:8)*ea,Fa.position.copy(Xt.position).add(an.clone().multiplyScalar(1.4)).add(Xe.clone().multiplyScalar(2.8)).add(nn.clone().multiplyScalar(.6)),zi.position.copy(rs).add(an.clone().multiplyScalar(-.8)),Fa.intensity=(te?4:6.2)*ea,A.forEach(Be=>{const Ge=Be.userData;if(!Ge||!Ge.shading||!Ge.material)return;const An=Ge.shading,Fn=Ge.material,Si=Ge.video,Ae=Ge;let yn=1;An.lighting?.flicker_sync&&Si&&Si.readyState>=3&&(yn=.88+Math.sin(ce*22)*.1*Math.sin(ce*6.7));let hi=1;if(An.movement_reaction?.type==="viewing_angle_fade"){Rr.set(0,0,0),Be.getWorldPosition(Rr),co.set(0,0,1).applyQuaternion(Be.quaternion),Is.copy(Xt.position).sub(Rr).normalize();const di=co,ia=Is,Ps=Math.max(0,di.dot(ia)),uo=An.movement_reaction.cone_angle_degrees===60?3:1.5;hi=Math.pow(Ps,uo)}const Jn=Ge.baseEmissive*yn*hi;if(Fn.emissiveIntensity=Jn,Ae.bounceLights&&Ae.bounceLights.length>0){const di=Ae.bounceSampleCtx,ia=Ae.bounceSampleCanvas;if(Si&&di&&ia&&(Ae.bounceNextSampleAt??0)<=ce){const Di=fR(Si,ia,di);if(Di){Ae.bounceTargetColor||(Ae.bounceTargetColor=Di.color.clone());const Ml=Di.color.clone().lerp(new me(1,.97,.93),.18);Ae.bounceTargetColor.copy(Ml);const El=Ei.clamp(.22+Di.luminance*1.9,.22,2.25);Ae.bounceTargetIntensity=(Ae.bounceBaseIntensity??5)*El*(.25+Jn*1.25)}Ae.bounceNextSampleAt=ce+1/(te?2:4)}else Si||(Ae.bounceTargetIntensity=(Ae.bounceBaseIntensity??5)*(.22+Jn*1.1));const Ps=Ae.bounceTargetIntensity??0,uo=Ae.bounceCurrentIntensity??0;Ae.bounceCurrentIntensity=Ei.lerp(uo,Ps,1-Math.exp(-6.2*Ot)),Ae.bounceCurrentColor||(Ae.bounceCurrentColor=(Ae.bounceTargetColor??new me(1,1,1)).clone()),Ae.bounceTargetColor&&Ae.bounceCurrentColor.lerp(Ae.bounceTargetColor,1-Math.exp(-5.4*Ot)),Ae.bounceLights.forEach((Di,Ml)=>{const El=Math.max(1,Ae.bounceLights.length-1),Uh=1-Ml/El*.34;Di.color.copy(Ae.bounceCurrentColor),Di.intensity=(Ae.bounceCurrentIntensity??0)*Uh})}}),qt.forEach(({mesh:Be,basePosition:Ge,strength:An})=>{const Fn=Be.parent;if(!Fn)return;const Si=Fn.worldToLocal(Xt.position.clone()),Ae=Ei.clamp(Si.x*.008,-.18,.18)*An,yn=Ei.clamp(Si.y*.006,-.14,.14)*An;Be.position.x=Ge.x+Ae,Be.position.y=Ge.y+yn}),Ue.forEach((Be,Ge)=>{const{mesh:An,card:Fn}=Be;An.lookAt(Xt.position);const Si=Ge*.7,Ae=Be.baseY+Math.sin(ce*L2+Si)*U2;An.position.y=Ae,An.rotateZ(O2*Ot);const yn=An.material;yn.emissiveIntensity=1+Math.sin(ce*2+Ge)*.4;const hi=Be.expanded?1:0,Jn=1/F2;Be.expandT<hi?Be.expandT=Math.min(1,Be.expandT+Jn*Ot):Be.expandT>hi&&(Be.expandT=Math.max(0,Be.expandT-Jn*Ot));const di=Be.expandT,ia=di<.5?4*di*di*di:1-Math.pow(-2*di+2,3)/2;if(ia>.001){Fn.visible=!0,Fn.position.copy(An.position),Fn.position.y-=hm+.3,Fn.lookAt(Xt.position),Fn.scale.setScalar(ia);const Ps=Fn.children[0].material;Ps.opacity=ia}else Fn.visible=!1;yn.opacity=1-ia*.4});const Ma=wi.y+Math.sin(ce*.8)*.35;Hi.lookAt(Xt.position),Hi.position.y=Ma,Hi.rotateZ(.15*Ot),Yn.emissiveIntensity=1.2+Math.sin(ce*1.5)*.5,ya.lookAt(Xt.position),ya.position.y=Ma;const na=.72+Math.sin(ce*2.35)*.28,Ut=Ei.smoothstep(Je,.2,.95);Gi.visible=Ut>.001,Ls.visible=Ut>.001,Gi.scale.setScalar(.88+na*.28),xr.emissiveIntensity=Ut*(.48+na*.45),as.intensity=Ut*(te?4.6:7.4)*na,Ls.lookAt(Xt.position),Ls.scale.setScalar(.95+na*.18),Sr.opacity=Ut*(.2+na*.32);let Pn=t.current[0]?.meta.id??(c.length>0?c[0].id:""),Vi=Number.POSITIVE_INFINITY;t.current.forEach(Be=>{let Ge=Math.abs(fe-Be.progress);Ge>.5&&(Ge=1-Ge),Ge<Vi&&(Vi=Ge,Pn=Be.meta.id)}),Pn!==Cr&&(Cr=Pn,_(Pn)),Wt.render(F,Xt),requestAnimationFrame(yl)};yl(),Zt=()=>{Wt.domElement.removeEventListener("pointerdown",Os),Wt.domElement.removeEventListener("pointermove",Mr),Wt.domElement.removeEventListener("pointerleave",Sl),Wt.domElement.removeEventListener("wheel",Er),Wt.domElement.removeEventListener("touchstart",si),Wt.domElement.removeEventListener("touchmove",Ga),window.removeEventListener("resize",Ar),window.removeEventListener("keydown",br),ot.contains(Wt.domElement)&&ot.removeChild(Wt.domElement),A.forEach(Ot=>{const ce=Ot.userData?.video;ce&&(ce.pause(),ce.src="",ce.load())}),Nt.forEach(Ot=>{Ot.pause(),Ot.src="",Ot.load()}),J.forEach(Ot=>Ot()),X.forEach(Ot=>Ot.dispose?.()),it.forEach(Ot=>Ot.dispose()),Cn.dispose(),$t.dispose(),At.albedo.dispose(),At.normal.dispose(),At.roughness.dispose(),At.ao.dispose(),Jt.albedo.dispose(),Jt.normal.dispose(),Jt.roughness.dispose(),Jt.ao.dispose(),se.albedo.dispose(),se.normal.dispose(),se.roughness.dispose(),se.ao.dispose(),lt.forEach(Ot=>Ot.dispose()),Kt.texture.dispose(),Kt.dispose(),Fe.dispose(),Mt.dispose(),Et.dispose(),Fi.dispose(),Lt.dispose(),Me.dispose(),re.dispose(),ve.dispose(),zt.dispose(),ye.dispose(),W.dispose(),Dt.dispose(),wt.dispose(),Vt.dispose(),ht.dispose(),Yt.dispose(),bt.dispose(),xa.dispose(),Bi.dispose(),Wt.dispose()}})(),()=>{Ct=!0,Zt()}},[c,Rt,vt]),ie.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[ie.jsx("div",{ref:r,className:"absolute inset-0"}),ie.jsxs("div",{className:"absolute right-4 top-4 z-30 flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[ie.jsx("span",{className:"px-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#5a5a5a]",children:Q.languageLabel}),ie.jsx("button",{type:"button",onClick:()=>$("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${z==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":z==="nb",children:"NO"}),ie.jsx("button",{type:"button",onClick:()=>$("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${z==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":z==="en",children:"EN"})]}),x||y?ie.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:x?Q.loadingPanels:Q.panelsFallback}):null,w?null:ie.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[ie.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:Q.siteName}),ie.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[Q.activeInstallation,": ",Tt]})]}),w?ie.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[ie.jsx("style",{children:`
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
              @keyframes outsideHexRoomSpin {
                0% { transform: translate(-50%, -50%) rotateY(0deg); }
                100% { transform: translate(-50%, -50%) rotateY(0deg); }
              }
            `}),S==="menu"?ie.jsxs(ie.Fragment,{children:[ie.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:Q.siteName}),ie.jsx("button",{type:"button",onClick:()=>C("videos"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:ie.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:Q.outsideVideos})}),ie.jsx("button",{type:"button",onClick:()=>C("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:ie.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:Q.outsideSignatures})}),ie.jsx("button",{type:"button",onClick:()=>C("news"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:ie.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:Q.outsideAiNews})})]}):null,S!=="menu"?ie.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[ie.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[ie.jsx("button",{type:"button",onClick:()=>C("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:Q.outsideBack}),S==="videos"?ie.jsxs(ie.Fragment,{children:[ie.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Q.outsideVideosTitle}),ie.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:Q.outsideVideosBody})]}):null,S==="signatures"?ie.jsxs(ie.Fragment,{children:[ie.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Q.outsideSignaturesTitle}),ie.jsx("p",{className:"mt-2 max-w-3xl text-sm text-[#b8cbe6] md:text-base",children:Q.outsideSignaturesBody})]}):null,S==="news"?ie.jsxs(ie.Fragment,{children:[ie.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Q.outsideNewsTitle}),ie.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:Q.outsideNewsBody})]}):null]}),S==="signatures"?ie.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto flex w-full max-w-6xl items-start justify-start md:inset-x-8 md:top-64",children:ie.jsxs("a",{href:"mailto:lars@larscuzner.com?subject=Engasjement%20i%20Intelligenspartiet",className:"rounded-xl border border-[#8fb5e8]/40 bg-[#0c1629]/78 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#dbe9ff] transition hover:bg-[#12233f]",children:[Q.outsideSignaturesContact,": lars@larscuzner.com"]})}):null,S==="news"?ie.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[B?ie.jsx("p",{className:"text-sm text-[#b8cbe6]",children:Q.outsideNewsLoading}):null,!B&&G?ie.jsx("p",{className:"text-sm text-[#ffb6b6]",children:G}):null,!B&&!G&&O.length===0?ie.jsx("p",{className:"text-sm text-[#b8cbe6]",children:Q.outsideNewsEmpty}):null,!B&&!G&&O.length>0?ie.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:O.map(ot=>{const Ct=Date.parse(ot.published_at),Zt=Number.isFinite(Ct)?jt.format(new Date(Ct)):ot.published_at;return ie.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[ie.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[ot.source,Zt?` · ${Zt}`:""]}),ie.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:ot.title}),ot.snippet?ie.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:ot.snippet}):null,ie.jsx("a",{href:ot.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:z==="nb"?"Åpne sak":"Open story"})]},`${ot.url}-${ot.title}`)})}):null]}):null,S==="videos"?ie.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:pt,onTouchStart:yt,onTouchEnd:I,children:ie.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[ie.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_44%,rgba(80,123,181,0.15),rgba(7,14,25,0.74)_56%,rgba(3,7,14,0.96)_100%)]"}),ie.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_90px_rgba(0,0,0,0.66)]"}),ie.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#99bae5]",children:[N+1," / ",dm.length]}),ie.jsx("p",{className:"absolute left-1/2 top-7 -translate-x-1/2 text-[0.57rem] font-semibold uppercase tracking-[0.14em] text-[#88a9d5]/90",children:z==="nb"?"Scroll eller sveip sideveis":"Scroll or swipe sideways"}),ie.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9e8ff]/95 shadow-[0_0_18px_rgba(140,185,255,0.72)]"}),ie.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${V2.toFixed(3)}rem) rotateY(${-N*k2}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[ie.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/24",style:{width:`${uf.toFixed(3)}rem`,height:`${uf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${Nx.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(150,183,223,0.24) 0%, rgba(58,77,103,0.3) 14%, rgba(19,29,45,0.82) 100%)",boxShadow:"0 0 56px rgba(48,94,156,0.22)"}}),ie.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/18",style:{width:`${uf.toFixed(3)}rem`,height:`${uf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${Nx.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(22,31,45,0.92) 0%, rgba(24,36,56,0.62) 34%, rgba(117,151,204,0.22) 100%)"}}),dm.map((ot,Ct)=>ie.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-[#89b0e4]/34 bg-[#050b16]/95 shadow-[0_22px_44px_rgba(0,0,0,0.6)]",style:{width:`${(GS+G2).toFixed(3)}rem`,height:`${n0}rem`,transform:`translate(-50%, -50%) rotateY(${Ct*60}deg) translateZ(-${VS.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:ie.jsx("video",{ref:Zt=>{l.current[Ct]=Zt},src:ot.video,poster:ot.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${ot.video}-${Ct}`))]})]})}):null]}):null]}):null]})}function dR(){return ie.jsx("div",{className:"min-h-screen bg-[#080604]",children:ie.jsx(hR,{})})}RM.createRoot(document.getElementById("root")).render(ie.jsx(Te.StrictMode,{children:ie.jsx(dR,{})}));
