(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Up={exports:{}},dc={};var Av;function MM(){if(Av)return dc;Av=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return dc.Fragment=t,dc.jsx=i,dc.jsxs=i,dc}var Rv;function EM(){return Rv||(Rv=1,Up.exports=MM()),Up.exports}var Bt=EM(),Lp={exports:{}},Te={};var Cv;function bM(){if(Cv)return Te;Cv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(I,q,pt){this.props=I,this.context=q,this.refs=M,this.updater=pt||E}S.prototype.isReactComponent={},S.prototype.setState=function(I,q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,q,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=S.prototype;function U(I,q,pt){this.props=I,this.context=q,this.refs=M,this.updater=pt||E}var D=U.prototype=new C;D.constructor=U,w(D,S.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(I,q,pt){var At=pt.ref;return{$$typeof:r,type:I,key:q,ref:At!==void 0?At:null,props:pt}}function ft(I,q){return N(I.type,q,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function K(I){var q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(pt){return q[pt]})}var at=/\/+/g;function J(I,q){return typeof I=="object"&&I!==null&&I.key!=null?K(""+I.key):q.toString(36)}function j(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(q){I.status==="pending"&&(I.status="fulfilled",I.value=q)},function(q){I.status==="pending"&&(I.status="rejected",I.reason=q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,q,pt,At,Xt){var tt=typeof I;(tt==="undefined"||tt==="boolean")&&(I=null);var gt=!1;if(I===null)gt=!0;else switch(tt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(I.$$typeof){case r:case t:gt=!0;break;case _:return gt=I._init,O(gt(I._payload),q,pt,At,Xt)}}if(gt)return Xt=Xt(I),gt=At===""?"."+J(I,0):At,F(Xt)?(pt="",gt!=null&&(pt=gt.replace(at,"$&/")+"/"),O(Xt,q,pt,"",function(oe){return oe})):Xt!=null&&(G(Xt)&&(Xt=ft(Xt,pt+(Xt.key==null||I&&I.key===Xt.key?"":(""+Xt.key).replace(at,"$&/")+"/")+gt)),q.push(Xt)),1;gt=0;var Tt=At===""?".":At+":";if(F(I))for(var jt=0;jt<I.length;jt++)At=I[jt],tt=Tt+J(At,jt),gt+=O(At,q,pt,tt,Xt);else if(jt=y(I),typeof jt=="function")for(I=jt.call(I),jt=0;!(At=I.next()).done;)At=At.value,tt=Tt+J(At,jt++),gt+=O(At,q,pt,tt,Xt);else if(tt==="object"){if(typeof I.then=="function")return O(j(I),q,pt,At,Xt);throw q=String(I),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return gt}function P(I,q,pt){if(I==null)return I;var At=[],Xt=0;return O(I,At,"","",function(tt){return q.call(pt,tt,Xt++)}),At}function rt(I){if(I._status===-1){var q=I._result;q=q(),q.then(function(pt){(I._status===0||I._status===-1)&&(I._status=1,I._result=pt)},function(pt){(I._status===0||I._status===-1)&&(I._status=2,I._result=pt)}),I._status===-1&&(I._status=0,I._result=q)}if(I._status===1)return I._result.default;throw I._result}var ht=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},yt={map:P,forEach:function(I,q,pt){P(I,function(){q.apply(this,arguments)},pt)},count:function(I){var q=0;return P(I,function(){q++}),q},toArray:function(I){return P(I,function(q){return q})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Te.Activity=v,Te.Children=yt,Te.Component=S,Te.Fragment=i,Te.Profiler=l,Te.PureComponent=U,Te.StrictMode=s,Te.Suspense=m,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Te.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},Te.cache=function(I){return function(){return I.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(I,q,pt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var At=w({},I.props),Xt=I.key;if(q!=null)for(tt in q.key!==void 0&&(Xt=""+q.key),q)!T.call(q,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&q.ref===void 0||(At[tt]=q[tt]);var tt=arguments.length-2;if(tt===1)At.children=pt;else if(1<tt){for(var gt=Array(tt),Tt=0;Tt<tt;Tt++)gt[Tt]=arguments[Tt+2];At.children=gt}return N(I.type,Xt,At)},Te.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Te.createElement=function(I,q,pt){var At,Xt={},tt=null;if(q!=null)for(At in q.key!==void 0&&(tt=""+q.key),q)T.call(q,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Xt[At]=q[At]);var gt=arguments.length-2;if(gt===1)Xt.children=pt;else if(1<gt){for(var Tt=Array(gt),jt=0;jt<gt;jt++)Tt[jt]=arguments[jt+2];Xt.children=Tt}if(I&&I.defaultProps)for(At in gt=I.defaultProps,gt)Xt[At]===void 0&&(Xt[At]=gt[At]);return N(I,tt,Xt)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(I){return{$$typeof:d,render:I}},Te.isValidElement=G,Te.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:rt}},Te.memo=function(I,q){return{$$typeof:p,type:I,compare:q===void 0?null:q}},Te.startTransition=function(I){var q=z.T,pt={};z.T=pt;try{var At=I(),Xt=z.S;Xt!==null&&Xt(pt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,ht)}catch(tt){ht(tt)}finally{q!==null&&pt.types!==null&&(q.types=pt.types),z.T=q}},Te.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Te.use=function(I){return z.H.use(I)},Te.useActionState=function(I,q,pt){return z.H.useActionState(I,q,pt)},Te.useCallback=function(I,q){return z.H.useCallback(I,q)},Te.useContext=function(I){return z.H.useContext(I)},Te.useDebugValue=function(){},Te.useDeferredValue=function(I,q){return z.H.useDeferredValue(I,q)},Te.useEffect=function(I,q){return z.H.useEffect(I,q)},Te.useEffectEvent=function(I){return z.H.useEffectEvent(I)},Te.useId=function(){return z.H.useId()},Te.useImperativeHandle=function(I,q,pt){return z.H.useImperativeHandle(I,q,pt)},Te.useInsertionEffect=function(I,q){return z.H.useInsertionEffect(I,q)},Te.useLayoutEffect=function(I,q){return z.H.useLayoutEffect(I,q)},Te.useMemo=function(I,q){return z.H.useMemo(I,q)},Te.useOptimistic=function(I,q){return z.H.useOptimistic(I,q)},Te.useReducer=function(I,q,pt){return z.H.useReducer(I,q,pt)},Te.useRef=function(I){return z.H.useRef(I)},Te.useState=function(I){return z.H.useState(I)},Te.useSyncExternalStore=function(I,q,pt){return z.H.useSyncExternalStore(I,q,pt)},Te.useTransition=function(){return z.H.useTransition()},Te.version="19.2.4",Te}var wv;function Fm(){return wv||(wv=1,Lp.exports=bM()),Lp.exports}var pe=Fm(),Op={exports:{}},pc={},Ip={exports:{}},Pp={};var Dv;function TM(){return Dv||(Dv=1,(function(r){function t(O,P){var rt=O.length;O.push(P);t:for(;0<rt;){var ht=rt-1>>>1,yt=O[ht];if(0<l(yt,P))O[ht]=P,O[rt]=yt,rt=ht;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var P=O[0],rt=O.pop();if(rt!==P){O[0]=rt;t:for(var ht=0,yt=O.length,I=yt>>>1;ht<I;){var q=2*(ht+1)-1,pt=O[q],At=q+1,Xt=O[At];if(0>l(pt,rt))At<yt&&0>l(Xt,pt)?(O[ht]=Xt,O[At]=rt,ht=At):(O[ht]=pt,O[q]=rt,ht=q);else if(At<yt&&0>l(Xt,rt))O[ht]=Xt,O[At]=rt,ht=At;else break t}}return P}function l(O,P){var rt=O.sortIndex-P.sortIndex;return rt!==0?rt:O.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,y=!1,E=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var P=i(p);P!==null;){if(P.callback===null)s(p);else if(P.startTime<=O)s(p),P.sortIndex=P.expirationTime,t(m,P);else break;P=i(p)}}function F(O){if(w=!1,D(O),!E)if(i(m)!==null)E=!0,B||(B=!0,K());else{var P=i(p);P!==null&&j(F,P.startTime-O)}}var B=!1,z=-1,T=5,N=-1;function ft(){return M?!0:!(r.unstable_now()-N<T)}function G(){if(M=!1,B){var O=r.unstable_now();N=O;var P=!0;try{t:{E=!1,w&&(w=!1,C(z),z=-1),y=!0;var rt=g;try{e:{for(D(O),v=i(m);v!==null&&!(v.expirationTime>O&&ft());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,g=v.priorityLevel;var yt=ht(v.expirationTime<=O);if(O=r.unstable_now(),typeof yt=="function"){v.callback=yt,D(O),P=!0;break e}v===i(m)&&s(m),D(O)}else s(m);v=i(m)}if(v!==null)P=!0;else{var I=i(p);I!==null&&j(F,I.startTime-O),P=!1}}break t}finally{v=null,g=rt,y=!1}P=void 0}}finally{P?K():B=!1}}}var K;if(typeof U=="function")K=function(){U(G)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,J=at.port2;at.port1.onmessage=G,K=function(){J.postMessage(null)}}else K=function(){S(G,0)};function j(O,P){z=S(function(){O(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var rt=g;g=P;try{return O()}finally{g=rt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var rt=g;g=O;try{return P()}finally{g=rt}},r.unstable_scheduleCallback=function(O,P,rt){var ht=r.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?ht+rt:ht):rt=ht,O){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=rt+yt,O={id:_++,callback:P,priorityLevel:O,startTime:rt,expirationTime:yt,sortIndex:-1},rt>ht?(O.sortIndex=rt,t(p,O),i(m)===null&&O===i(p)&&(w?(C(z),z=-1):w=!0,j(F,rt-ht))):(O.sortIndex=yt,t(m,O),E||y||(E=!0,B||(B=!0,K()))),O},r.unstable_shouldYield=ft,r.unstable_wrapCallback=function(O){var P=g;return function(){var rt=g;g=P;try{return O.apply(this,arguments)}finally{g=rt}}}})(Pp)),Pp}var Nv;function AM(){return Nv||(Nv=1,Ip.exports=TM()),Ip.exports}var Fp={exports:{}},di={};var Uv;function RM(){if(Uv)return di;Uv=1;var r=Fm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return di.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,di.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},di.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},di.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},di.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},di.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},di.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},di.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},di.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},di.requestFormReset=function(m){s.d.r(m)},di.unstable_batchedUpdates=function(m,p){return m(p)},di.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},di.useFormStatus=function(){return f.H.useHostTransitionStatus()},di.version="19.2.4",di}var Lv;function CM(){if(Lv)return Fp.exports;Lv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Fp.exports=RM(),Fp.exports}var Ov;function wM(){if(Ov)return pc;Ov=1;var r=AM(),t=Fm(),i=CM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=h;break}if(A===o){x=!0,o=u,a=h;break}A=A.sibling}if(!x){for(A=h.child;A;){if(A===a){x=!0,a=h,o=u;break}if(A===o){x=!0,o=h,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:J(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return J(e(n))}catch{}}return null}var j=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},ht=[],yt=-1;function I(e){return{current:e}}function q(e){0>yt||(e.current=ht[yt],ht[yt]=null,yt--)}function pt(e,n){yt++,ht[yt]=e.current,e.current=n}var At=I(null),Xt=I(null),tt=I(null),gt=I(null);function Tt(e,n){switch(pt(tt,n),pt(Xt,e),pt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Z_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Z_(n),e=K_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(At),pt(At,e)}function jt(){q(At),q(Xt),q(tt)}function oe(e){e.memoizedState!==null&&pt(gt,e);var n=At.current,a=K_(n,e.type);n!==a&&(pt(Xt,e),pt(At,a))}function de(e){Xt.current===e&&(q(At),q(Xt)),gt.current===e&&(q(gt),cc._currentValue=rt)}var xt,Gt;function Pt(e){if(xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);xt=n&&n[1]||"",Gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+e+Gt}var he=!1;function zt(e,n){if(!e||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var st=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){st=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],A=h[1];if(x&&A){var H=x.split(`
`),it=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===it.length)for(o=H.length-1,u=it.length-1;1<=o&&0<=u&&H[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==it[u]){var mt=`
`+H[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Pt(a):""}function ye(e,n){switch(e.tag){case 26:case 27:case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return e.child!==n&&n!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return zt(e.type,!1);case 11:return zt(e.type.render,!1);case 1:return zt(e.type,!0);case 31:return Pt("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=ye(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Jt=Object.prototype.hasOwnProperty,Ut=r.unstable_scheduleCallback,Yt=r.unstable_cancelCallback,Ct=r.unstable_shouldYield,L=r.unstable_requestPaint,b=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,lt=r.unstable_NormalPriority,Vt=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,ee=r.log,ne=r.unstable_setDisableYieldValue,Et=null,Mt=null;function kt(e){if(typeof ee=="function"&&ne(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Et,e)}catch{}}var Ht=Math.clz32?Math.clz32:W,Lt=Math.log,Ae=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Lt(e)/Ae|0)|0}var Nt=256,wt=262144,qt=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=bt(o):(x&=A,x!==0?u=bt(x):a||(a=A&~e,a!==0&&(u=bt(a))))):(A=o&~h,A!==0?u=bt(A):x!==0?u=bt(x):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ve(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qe(){var e=qt;return qt<<=1,(qt&62914560)===0&&(qt=4194304),e}function Ie(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function kn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ei(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,it=e.hiddenUpdates;for(a=x&~a;0<a;){var mt=31-Ht(a),vt=1<<mt;A[mt]=0,H[mt]=-1;var st=it[mt];if(st!==null)for(it[mt]=null,mt=0;mt<st.length;mt++){var ct=st[mt];ct!==null&&(ct.lane&=-536870913)}a&=~vt}o!==0&&va(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function va(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ht(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Os(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ht(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ia(e,n){var a=n&-n;return a=(a&42)!==0?1:ts(a),(a&(e.suspendedLanes|n))!==0?0:a}function ts(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pi(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:xv(e.type))}function ns(e,n){var a=P.p;try{return P.p=e,n()}finally{P.p=a}}var Ai=Math.random().toString(36).slice(2),En="__reactFiber$"+Ai,Cn="__reactProps$"+Ai,Fi="__reactContainer$"+Ai,Ji="__reactEvents$"+Ai,Is="__reactListeners$"+Ai,ni="__reactHandles$"+Ai,Pa="__reactResources$"+Ai,Bi="__reactMarker$"+Ai;function is(e){delete e[En],delete e[Cn],delete e[Ji],delete e[Is],delete e[ni]}function $i(e){var n=e[En];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fi]||a[En]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=iv(e);e!==null;){if(a=e[En])return a;e=iv(e)}return n}e=a,a=e.parentNode}return null}function hn(e){if(e=e[En]||e[Fi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function zi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[Pa];return n||(n=e[Pa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[Bi]=!0}var ot=new Set,et={};function $(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(et[e]=n,e=0;e<n.length;e++)ot.add(n[e])}var Kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},ie={};function se(e){return Jt.call(ie,e)?!0:Jt.call(Ft,e)?!1:Kt.test(e)?ie[e]=!0:(Ft[e]=!0,!1)}function _e(e,n,a){if(se(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Me(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function te(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Re(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ve(e){if(!e._valueTracker){var n=mn(e)?"checked":"value";e._valueTracker=gn(e,n,""+e[n])}}function wn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=mn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jn=/[\n"\\]/g;function xe(e){return e.replace(jn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _n(e,n,a,o,u,h,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Re(n)):e.value!==""+Re(n)&&(e.value=""+Re(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?vi(e,x,Re(n)):a!=null?vi(e,x,Re(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Re(A):e.removeAttribute("name")}function vn(e,n,a,o,u,h,x,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ve(e);return}a=a!=null?""+Re(a):"",n=n!=null?""+Re(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ve(e)}function vi(e,n,a){n==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ci(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Re(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ee(e,n,a){if(n!=null&&(n=""+Re(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Re(a):""}function yn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(j(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Re(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ve(e)}function ii(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Dn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ui(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Dn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ui(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&ui(e,h,n[h])}function Ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dr(e){return wl.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Fs=null;function Fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,zs=null;function as(e){var n=hn(e);if(n&&(e=n.stateNode)){var a=e[Cn]||null;t:switch(e=n.stateNode,n.type){case"input":if(_n(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Cn]||null;if(!u)throw Error(s(90));_n(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&wn(o)}break t;case"textarea":Ee(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ci(e,!!a.multiple,n,!1)}}}var go=!1;function Dl(e,n,a){if(go)return e(n,a);go=!0;try{var o=e(n);return o}finally{if(go=!1,(Bs!==null||zs!==null)&&(Au(),Bs&&(n=Bs,e=zs,zs=Bs=null,as(n),e)))for(n=0;n<e.length;n++)as(e[n])}}function ss(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Cn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ba=!1;if(Gi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Ba=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Ba=!1}var ea=null,rs=null,Gs=null;function Nl(){if(Gs)return Gs;var e,n=rs,a=n.length,o,u="value"in ea?ea.value:ea.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return Gs=u.slice(e,1<o?1-o:void 0)}function Vs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function os(){return!1}function bn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Nr:os,this.isPropagationStopped=os,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ur=bn(za),ks=v({},za,{view:0,detail:0}),Hc=bn(ks),Xs,_o,Ws,Lr=v({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Je,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(Xs=e.screenX-Ws.screenX,_o=e.screenY-Ws.screenY):_o=Xs=0,Ws=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),vo=bn(Lr),Gc=v({},Lr,{dataTransfer:0}),Ul=bn(Gc),Vc=v({},ks,{relatedTarget:0}),xo=bn(Vc),kc=v({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),Xc=bn(kc),Dt=v({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),le=bn(Dt),ue=v({},za,{data:0}),re=bn(ue),Zt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},be={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},je={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nn(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=je[e])?!!n[e]:!1}function Je(){return nn}var xi=v({},ks,{key:function(e){if(e.key){var n=Zt[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?be[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Je,charCode:function(e){return e.type==="keypress"?Vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Si=bn(xi),Nn=v({},Lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ye=bn(Nn),on=v({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Je}),an=bn(on),Tn=v({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),xa=bn(Tn),Ys=v({},Lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sa=bn(Ys),ls=v({},za,{newState:0,oldState:0}),It=bn(ls),Pn=[9,13,27,32],fi=Gi&&"CompositionEvent"in window,Ri=null;Gi&&"documentMode"in document&&(Ri=document.documentMode);var Zn=Gi&&"TextEvent"in window&&!Ri,Ci=Gi&&(!fi||Ri&&8<Ri&&11>=Ri),wi=" ",qs=!1;function Ue(e,n){switch(e){case"keyup":return Pn.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Be(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $e=!1;function An(e,n){switch(e){case"compositionend":return Be(n);case"keypress":return n.which!==32?null:(qs=!0,wi);case"textInput":return e=n.data,e===wi&&qs?null:e;default:return null}}function yi(e,n){if($e)return e==="compositionend"||!fi&&Ue(e,n)?(e=Nl(),Gs=rs=ea=null,$e=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ci&&n.locale!=="ko"?null:n.data;default:return null}}var Ze={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ha(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ze[e.type]:n==="textarea"}function js(e,n,a,o){Bs?zs?zs.push(o):zs=[o]:Bs=o,n=Lu(n,"onChange"),0<n.length&&(a=new Ur("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var na=null,hi=null;function ya(e){k_(e,0)}function Ga(e){var n=zi(e);if(wn(n))return e}function So(e,n){if(e==="change")return n}var Va=!1;if(Gi){var Or;if(Gi){var Ir="oninput"in document;if(!Ir){var Wc=document.createElement("div");Wc.setAttribute("oninput","return;"),Ir=typeof Wc.oninput=="function"}Or=Ir}else Or=!1;Va=Or&&(!document.documentMode||9<document.documentMode)}function f0(){na&&(na.detachEvent("onpropertychange",h0),hi=na=null)}function h0(e){if(e.propertyName==="value"&&Ga(hi)){var n=[];js(n,hi,e,Fa(e)),Dl(ya,n)}}function KS(e,n,a){e==="focusin"?(f0(),na=n,hi=a,na.attachEvent("onpropertychange",h0)):e==="focusout"&&f0()}function QS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ga(hi)}function JS(e,n){if(e==="click")return Ga(n)}function $S(e,n){if(e==="input"||e==="change")return Ga(n)}function ty(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vi=typeof Object.is=="function"?Object.is:ty;function Ll(e,n){if(Vi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Jt.call(n,u)||!Vi(e[u],n[u]))return!1}return!0}function d0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function p0(e,n){var a=d0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=d0(a)}}function m0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?m0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function g0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qt(e.document)}return n}function Gh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ey=Gi&&"documentMode"in document&&11>=document.documentMode,yo=null,Vh=null,Ol=null,kh=!1;function _0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kh||yo==null||yo!==Qt(o)||(o=yo,"selectionStart"in o&&Gh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ol&&Ll(Ol,o)||(Ol=o,o=Lu(Vh,"onSelect"),0<o.length&&(n=new Ur("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=yo)))}function Pr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Mo={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionrun:Pr("Transition","TransitionRun"),transitionstart:Pr("Transition","TransitionStart"),transitioncancel:Pr("Transition","TransitionCancel"),transitionend:Pr("Transition","TransitionEnd")},Xh={},v0={};Gi&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete Mo.animationend.animation,delete Mo.animationiteration.animation,delete Mo.animationstart.animation),"TransitionEvent"in window||delete Mo.transitionend.transition);function Fr(e){if(Xh[e])return Xh[e];if(!Mo[e])return e;var n=Mo[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in v0)return Xh[e]=n[a];return e}var x0=Fr("animationend"),S0=Fr("animationiteration"),y0=Fr("animationstart"),ny=Fr("transitionrun"),iy=Fr("transitionstart"),ay=Fr("transitioncancel"),M0=Fr("transitionend"),E0=new Map,Wh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wh.push("scrollEnd");function Ma(e,n){E0.set(e,n),$(n,[e])}var Yc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ia=[],Eo=0,Yh=0;function qc(){for(var e=Eo,n=Yh=Eo=0;n<e;){var a=ia[n];ia[n++]=null;var o=ia[n];ia[n++]=null;var u=ia[n];ia[n++]=null;var h=ia[n];if(ia[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&b0(a,u,h)}}function jc(e,n,a,o){ia[Eo++]=e,ia[Eo++]=n,ia[Eo++]=a,ia[Eo++]=o,Yh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function qh(e,n,a,o){return jc(e,n,a,o),Zc(e)}function Br(e,n){return jc(e,null,null,n),Zc(e)}function b0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ht(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Zc(e){if(50<nc)throw nc=0,np=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var bo={};function sy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(e,n,a,o){return new sy(e,n,a,o)}function jh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cs(e,n){var a=e.alternate;return a===null?(a=ki(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function T0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Kc(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")jh(e)&&(x=1);else if(typeof e=="string")x=uM(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=ki(31,a,n,u),e.elementType=N,e.lanes=h,e;case w:return zr(a.children,u,h,n);case M:x=8,u|=24;break;case S:return e=ki(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case F:return e=ki(13,a,n,u),e.elementType=F,e.lanes=h,e;case B:return e=ki(19,a,n,u),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case C:x=9;break t;case D:x=11;break t;case z:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ki(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function zr(e,n,a,o){return e=ki(7,e,o,n),e.lanes=a,e}function Zh(e,n,a){return e=ki(6,e,null,n),e.lanes=a,e}function A0(e){var n=ki(18,null,null,0);return n.stateNode=e,n}function Kh(e,n,a){return n=ki(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var R0=new WeakMap;function aa(e,n){if(typeof e=="object"&&e!==null){var a=R0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},R0.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var To=[],Ao=0,Qc=null,Il=0,sa=[],ra=0,Zs=null,ka=1,Xa="";function us(e,n){To[Ao++]=Il,To[Ao++]=Qc,Qc=e,Il=n}function C0(e,n,a){sa[ra++]=ka,sa[ra++]=Xa,sa[ra++]=Zs,Zs=e;var o=ka;e=Xa;var u=32-Ht(o)-1;o&=~(1<<u),a+=1;var h=32-Ht(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ka=1<<32-Ht(n)+u|a<<u|o,Xa=h+e}else ka=1<<h|a<<u|o,Xa=e}function Qh(e){e.return!==null&&(us(e,1),C0(e,1,0))}function Jh(e){for(;e===Qc;)Qc=To[--Ao],To[Ao]=null,Il=To[--Ao],To[Ao]=null;for(;e===Zs;)Zs=sa[--ra],sa[ra]=null,Xa=sa[--ra],sa[ra]=null,ka=sa[--ra],sa[ra]=null}function w0(e,n){sa[ra++]=ka,sa[ra++]=Xa,sa[ra++]=Zs,ka=n.id,Xa=n.overflow,Zs=e}var ai=null,xn=null,Ge=!1,Ks=null,oa=!1,$h=Error(s(519));function Qs(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(aa(n,e)),$h}function D0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[En]=e,n[Cn]=o,a){case"dialog":Fe("cancel",n),Fe("close",n);break;case"iframe":case"object":case"embed":Fe("load",n);break;case"video":case"audio":for(a=0;a<ac.length;a++)Fe(ac[a],n);break;case"source":Fe("error",n);break;case"img":case"image":case"link":Fe("error",n),Fe("load",n);break;case"details":Fe("toggle",n);break;case"input":Fe("invalid",n),vn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Fe("invalid",n);break;case"textarea":Fe("invalid",n),yn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||q_(n.textContent,a)?(o.popover!=null&&(Fe("beforetoggle",n),Fe("toggle",n)),o.onScroll!=null&&Fe("scroll",n),o.onScrollEnd!=null&&Fe("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Qs(e,!0)}function N0(e){for(ai=e.return;ai;)switch(ai.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:ai=ai.return}}function Ro(e){if(e!==ai)return!1;if(!Ge)return N0(e),Ge=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_p(e.type,e.memoizedProps)),a=!a),a&&xn&&Qs(e),N0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));xn=nv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));xn=nv(e)}else n===27?(n=xn,fr(e.type)?(e=Mp,Mp=null,xn=e):xn=n):xn=ai?ca(e.stateNode.nextSibling):null;return!0}function Hr(){xn=ai=null,Ge=!1}function td(){var e=Ks;return e!==null&&(Li===null?Li=e:Li.push.apply(Li,e),Ks=null),e}function Pl(e){Ks===null?Ks=[e]:Ks.push(e)}var ed=I(null),Gr=null,fs=null;function Js(e,n,a){pt(ed,n._currentValue),n._currentValue=a}function hs(e){e._currentValue=ed.current,q(ed)}function nd(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function id(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),nd(h.return,a,e),o||(x=null);break t}h=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),nd(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Co(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;Vi(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===gt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(cc):e=[cc])}u=u.return}e!==null&&id(n,e,a,o),n.flags|=262144}function Jc(e){for(e=e.firstContext;e!==null;){if(!Vi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vr(e){Gr=e,fs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function si(e){return U0(Gr,e)}function $c(e,n){return Gr===null&&Vr(e),U0(e,n)}function U0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fs===null){if(e===null)throw Error(s(308));fs=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fs=fs.next=n;return a}var ry=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},oy=r.unstable_scheduleCallback,ly=r.unstable_NormalPriority,Fn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ad(){return{controller:new ry,data:new Map,refCount:0}}function Fl(e){e.refCount--,e.refCount===0&&oy(ly,function(){e.controller.abort()})}var Bl=null,sd=0,wo=0,Do=null;function cy(e,n){if(Bl===null){var a=Bl=[];sd=0,wo=lp(),Do={status:"pending",value:void 0,then:function(o){a.push(o)}}}return sd++,n.then(L0,L0),n}function L0(){if(--sd===0&&Bl!==null){Do!==null&&(Do.status="fulfilled");var e=Bl;Bl=null,wo=0,Do=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function uy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var O0=O.S;O.S=function(e,n){__=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cy(e,n),O0!==null&&O0(e,n)};var kr=I(null);function rd(){var e=kr.current;return e!==null?e:dn.pooledCache}function tu(e,n){n===null?pt(kr,kr.current):pt(kr,n.pool)}function I0(){var e=rd();return e===null?null:{parent:Fn._currentValue,pool:e}}var No=Error(s(460)),od=Error(s(474)),eu=Error(s(542)),nu={then:function(){}};function P0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function F0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,z0(e),e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=dn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,z0(e),e}throw Wr=n,No}}function Xr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wr=a,No):a}}var Wr=null;function B0(){if(Wr===null)throw Error(s(459));var e=Wr;return Wr=null,e}function z0(e){if(e===No||e===eu)throw Error(s(483))}var Uo=null,zl=0;function iu(e){var n=zl;return zl+=1,Uo===null&&(Uo=[]),F0(Uo,e,n)}function Hl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function au(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function H0(e){function n(Q,k){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[k],Q.flags|=16):nt.push(k)}}function a(Q,k){if(!e)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function o(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function u(Q,k){return Q=cs(Q,k),Q.index=0,Q.sibling=null,Q}function h(Q,k,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<k?(Q.flags|=67108866,k):nt):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,k,nt,_t){return k===null||k.tag!==6?(k=Zh(nt,Q.mode,_t),k.return=Q,k):(k=u(k,nt),k.return=Q,k)}function H(Q,k,nt,_t){var fe=nt.type;return fe===w?mt(Q,k,nt.props.children,_t,nt.key):k!==null&&(k.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===T&&Xr(fe)===k.type)?(k=u(k,nt.props),Hl(k,nt),k.return=Q,k):(k=Kc(nt.type,nt.key,nt.props,null,Q.mode,_t),Hl(k,nt),k.return=Q,k)}function it(Q,k,nt,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=Kh(nt,Q.mode,_t),k.return=Q,k):(k=u(k,nt.children||[]),k.return=Q,k)}function mt(Q,k,nt,_t,fe){return k===null||k.tag!==7?(k=zr(nt,Q.mode,_t,fe),k.return=Q,k):(k=u(k,nt),k.return=Q,k)}function vt(Q,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Zh(""+k,Q.mode,nt),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return nt=Kc(k.type,k.key,k.props,null,Q.mode,nt),Hl(nt,k),nt.return=Q,nt;case E:return k=Kh(k,Q.mode,nt),k.return=Q,k;case T:return k=Xr(k),vt(Q,k,nt)}if(j(k)||K(k))return k=zr(k,Q.mode,nt,null),k.return=Q,k;if(typeof k.then=="function")return vt(Q,iu(k),nt);if(k.$$typeof===U)return vt(Q,$c(Q,k),nt);au(Q,k)}return null}function st(Q,k,nt,_t){var fe=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return fe!==null?null:A(Q,k,""+nt,_t);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return nt.key===fe?H(Q,k,nt,_t):null;case E:return nt.key===fe?it(Q,k,nt,_t):null;case T:return nt=Xr(nt),st(Q,k,nt,_t)}if(j(nt)||K(nt))return fe!==null?null:mt(Q,k,nt,_t,null);if(typeof nt.then=="function")return st(Q,k,iu(nt),_t);if(nt.$$typeof===U)return st(Q,k,$c(Q,nt),_t);au(Q,nt)}return null}function ct(Q,k,nt,_t,fe){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(nt)||null,A(k,Q,""+_t,fe);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Q=Q.get(_t.key===null?nt:_t.key)||null,H(k,Q,_t,fe);case E:return Q=Q.get(_t.key===null?nt:_t.key)||null,it(k,Q,_t,fe);case T:return _t=Xr(_t),ct(Q,k,nt,_t,fe)}if(j(_t)||K(_t))return Q=Q.get(nt)||null,mt(k,Q,_t,fe,null);if(typeof _t.then=="function")return ct(Q,k,nt,iu(_t),fe);if(_t.$$typeof===U)return ct(Q,k,nt,$c(k,_t),fe);au(k,_t)}return null}function ae(Q,k,nt,_t){for(var fe=null,Ke=null,ce=k,De=k=0,He=null;ce!==null&&De<nt.length;De++){ce.index>De?(He=ce,ce=null):He=ce.sibling;var Qe=st(Q,ce,nt[De],_t);if(Qe===null){ce===null&&(ce=He);break}e&&ce&&Qe.alternate===null&&n(Q,ce),k=h(Qe,k,De),Ke===null?fe=Qe:Ke.sibling=Qe,Ke=Qe,ce=He}if(De===nt.length)return a(Q,ce),Ge&&us(Q,De),fe;if(ce===null){for(;De<nt.length;De++)ce=vt(Q,nt[De],_t),ce!==null&&(k=h(ce,k,De),Ke===null?fe=ce:Ke.sibling=ce,Ke=ce);return Ge&&us(Q,De),fe}for(ce=o(ce);De<nt.length;De++)He=ct(ce,Q,De,nt[De],_t),He!==null&&(e&&He.alternate!==null&&ce.delete(He.key===null?De:He.key),k=h(He,k,De),Ke===null?fe=He:Ke.sibling=He,Ke=He);return e&&ce.forEach(function(gr){return n(Q,gr)}),Ge&&us(Q,De),fe}function ge(Q,k,nt,_t){if(nt==null)throw Error(s(151));for(var fe=null,Ke=null,ce=k,De=k=0,He=null,Qe=nt.next();ce!==null&&!Qe.done;De++,Qe=nt.next()){ce.index>De?(He=ce,ce=null):He=ce.sibling;var gr=st(Q,ce,Qe.value,_t);if(gr===null){ce===null&&(ce=He);break}e&&ce&&gr.alternate===null&&n(Q,ce),k=h(gr,k,De),Ke===null?fe=gr:Ke.sibling=gr,Ke=gr,ce=He}if(Qe.done)return a(Q,ce),Ge&&us(Q,De),fe;if(ce===null){for(;!Qe.done;De++,Qe=nt.next())Qe=vt(Q,Qe.value,_t),Qe!==null&&(k=h(Qe,k,De),Ke===null?fe=Qe:Ke.sibling=Qe,Ke=Qe);return Ge&&us(Q,De),fe}for(ce=o(ce);!Qe.done;De++,Qe=nt.next())Qe=ct(ce,Q,De,Qe.value,_t),Qe!==null&&(e&&Qe.alternate!==null&&ce.delete(Qe.key===null?De:Qe.key),k=h(Qe,k,De),Ke===null?fe=Qe:Ke.sibling=Qe,Ke=Qe);return e&&ce.forEach(function(yM){return n(Q,yM)}),Ge&&us(Q,De),fe}function un(Q,k,nt,_t){if(typeof nt=="object"&&nt!==null&&nt.type===w&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:t:{for(var fe=nt.key;k!==null;){if(k.key===fe){if(fe=nt.type,fe===w){if(k.tag===7){a(Q,k.sibling),_t=u(k,nt.props.children),_t.return=Q,Q=_t;break t}}else if(k.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===T&&Xr(fe)===k.type){a(Q,k.sibling),_t=u(k,nt.props),Hl(_t,nt),_t.return=Q,Q=_t;break t}a(Q,k);break}else n(Q,k);k=k.sibling}nt.type===w?(_t=zr(nt.props.children,Q.mode,_t,nt.key),_t.return=Q,Q=_t):(_t=Kc(nt.type,nt.key,nt.props,null,Q.mode,_t),Hl(_t,nt),_t.return=Q,Q=_t)}return x(Q);case E:t:{for(fe=nt.key;k!==null;){if(k.key===fe)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){a(Q,k.sibling),_t=u(k,nt.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,k);break}else n(Q,k);k=k.sibling}_t=Kh(nt,Q.mode,_t),_t.return=Q,Q=_t}return x(Q);case T:return nt=Xr(nt),un(Q,k,nt,_t)}if(j(nt))return ae(Q,k,nt,_t);if(K(nt)){if(fe=K(nt),typeof fe!="function")throw Error(s(150));return nt=fe.call(nt),ge(Q,k,nt,_t)}if(typeof nt.then=="function")return un(Q,k,iu(nt),_t);if(nt.$$typeof===U)return un(Q,k,$c(Q,nt),_t);au(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(a(Q,k.sibling),_t=u(k,nt),_t.return=Q,Q=_t):(a(Q,k),_t=Zh(nt,Q.mode,_t),_t.return=Q,Q=_t),x(Q)):a(Q,k)}return function(Q,k,nt,_t){try{zl=0;var fe=un(Q,k,nt,_t);return Uo=null,fe}catch(ce){if(ce===No||ce===eu)throw ce;var Ke=ki(29,ce,null,Q.mode);return Ke.lanes=_t,Ke.return=Q,Ke}}}var Yr=H0(!0),G0=H0(!1),$s=!1;function ld(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function er(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(tn&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Zc(e),b0(e,null,a),n}return jc(e,o,n,a),Zc(e)}function Gl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Os(e,a)}}function ud(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var fd=!1;function Vl(){if(fd){var e=Do;if(e!==null)throw e}}function kl(e,n,a,o){fd=!1;var u=e.updateQueue;$s=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,it=H.next;H.next=null,x===null?h=it:x.next=it,x=H;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==x&&(A===null?mt.firstBaseUpdate=it:A.next=it,mt.lastBaseUpdate=H))}if(h!==null){var vt=u.baseState;x=0,mt=it=H=null,A=h;do{var st=A.lane&-536870913,ct=st!==A.lane;if(ct?(ze&st)===st:(o&st)===st){st!==0&&st===wo&&(fd=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ae=e,ge=A;st=n;var un=a;switch(ge.tag){case 1:if(ae=ge.payload,typeof ae=="function"){vt=ae.call(un,vt,st);break t}vt=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ge.payload,st=typeof ae=="function"?ae.call(un,vt,st):ae,st==null)break t;vt=v({},vt,st);break t;case 2:$s=!0}}st=A.callback,st!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(it=mt=ct,H=vt):mt=mt.next=ct,x|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);mt===null&&(H=vt),u.baseState=H,u.firstBaseUpdate=it,u.lastBaseUpdate=mt,h===null&&(u.shared.lanes=0),rr|=x,e.lanes=x,e.memoizedState=vt}}function V0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function k0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)V0(a[e],n)}var Lo=I(null),su=I(0);function X0(e,n){e=ys,pt(su,e),pt(Lo,n),ys=e|n.baseLanes}function hd(){pt(su,ys),pt(Lo,Lo.current)}function dd(){ys=su.current,q(Lo),q(su)}var Xi=I(null),la=null;function nr(e){var n=e.alternate;pt(On,On.current&1),pt(Xi,e),la===null&&(n===null||Lo.current!==null||n.memoizedState!==null)&&(la=e)}function pd(e){pt(On,On.current),pt(Xi,e),la===null&&(la=e)}function W0(e){e.tag===22?(pt(On,On.current),pt(Xi,e),la===null&&(la=e)):ir()}function ir(){pt(On,On.current),pt(Xi,Xi.current)}function Wi(e){q(Xi),la===e&&(la=null),q(On)}var On=I(0);function ru(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sp(a)||yp(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ds=0,Ce=null,ln=null,Bn=null,ou=!1,Oo=!1,qr=!1,lu=0,Xl=0,Io=null,fy=0;function Un(){throw Error(s(321))}function md(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vi(e[a],n[a]))return!1;return!0}function gd(e,n,a,o,u,h){return ds=h,Ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Cg:Nd,qr=!1,h=a(o,u),qr=!1,Oo&&(h=q0(n,a,o,u)),Y0(e),h}function Y0(e){O.H=ql;var n=ln!==null&&ln.next!==null;if(ds=0,Bn=ln=Ce=null,ou=!1,Xl=0,Io=null,n)throw Error(s(300));e===null||zn||(e=e.dependencies,e!==null&&Jc(e)&&(zn=!0))}function q0(e,n,a,o){Ce=e;var u=0;do{if(Oo&&(Io=null),Xl=0,Oo=!1,25<=u)throw Error(s(301));if(u+=1,Bn=ln=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=wg,h=n(a,o)}while(Oo);return h}function hy(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Wl(n):n,e=e.useState()[0],(ln!==null?ln.memoizedState:null)!==e&&(Ce.flags|=1024),n}function _d(){var e=lu!==0;return lu=0,e}function vd(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function xd(e){if(ou){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ou=!1}ds=0,Bn=ln=Ce=null,Oo=!1,Xl=lu=0,Io=null}function Mi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?Ce.memoizedState=Bn=e:Bn=Bn.next=e,Bn}function In(){if(ln===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=ln.next;var n=Bn===null?Ce.memoizedState:Bn.next;if(n!==null)Bn=n,ln=e;else{if(e===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));ln=e,e={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},Bn===null?Ce.memoizedState=Bn=e:Bn=Bn.next=e}return Bn}function cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(e){var n=Xl;return Xl+=1,Io===null&&(Io=[]),e=F0(Io,e,n),n=Ce,(Bn===null?n.memoizedState:Bn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Cg:Nd),e}function uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===U)return si(e)}throw Error(s(438,String(e)))}function Sd(e){var n=null,a=Ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=cu(),Ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ft;return n.index++,a}function ps(e,n){return typeof n=="function"?n(e):n}function fu(e){var n=In();return yd(n,ln,e)}function yd(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=x=null,H=null,it=n,mt=!1;do{var vt=it.lane&-536870913;if(vt!==it.lane?(ze&vt)===vt:(ds&vt)===vt){var st=it.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),vt===wo&&(mt=!0);else if((ds&st)===st){it=it.next,st===wo&&(mt=!0);continue}else vt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(A=H=vt,x=h):H=H.next=vt,Ce.lanes|=st,rr|=st;vt=it.action,qr&&a(h,vt),h=it.hasEagerState?it.eagerState:a(h,vt)}else st={lane:vt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(A=H=st,x=h):H=H.next=st,Ce.lanes|=vt,rr|=vt;it=it.next}while(it!==null&&it!==n);if(H===null?x=h:H.next=A,!Vi(h,e.memoizedState)&&(zn=!0,mt&&(a=Do,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Md(e){var n=In(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);Vi(h,n.memoizedState)||(zn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function j0(e,n,a){var o=Ce,u=In(),h=Ge;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Vi((ln||u).memoizedState,a);if(x&&(u.memoizedState=a,zn=!0),u=u.queue,Td(Q0.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||Bn!==null&&Bn.memoizedState.tag&1){if(o.flags|=2048,Po(9,{destroy:void 0},K0.bind(null,o,u,a,n),null),dn===null)throw Error(s(349));h||(ds&127)!==0||Z0(o,n,a)}return a}function Z0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ce.updateQueue,n===null?(n=cu(),Ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function K0(e,n,a,o){n.value=a,n.getSnapshot=o,J0(n)&&$0(e)}function Q0(e,n,a){return a(function(){J0(n)&&$0(e)})}function J0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vi(e,a)}catch{return!0}}function $0(e){var n=Br(e,2);n!==null&&Oi(n,e,2)}function Ed(e){var n=Mi();if(typeof e=="function"){var a=e;if(e=a(),qr){kt(!0);try{a()}finally{kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:e},n}function tg(e,n,a,o){return e.baseState=a,yd(e,ln,typeof o=="function"?o:ps)}function dy(e,n,a,o,u){if(pu(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,eg(n,h)):(h.next=a.next,n.pending=a.next=h)}}function eg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=O.T,x={};O.T=x;try{var A=a(u,o),H=O.S;H!==null&&H(x,A),ng(e,n,A)}catch(it){bd(e,n,it)}finally{h!==null&&x.types!==null&&(h.types=x.types),O.T=h}}else try{h=a(u,o),ng(e,n,h)}catch(it){bd(e,n,it)}}function ng(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ig(e,n,o)},function(o){return bd(e,n,o)}):ig(e,n,a)}function ig(e,n,a){n.status="fulfilled",n.value=a,ag(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,eg(e,a)))}function bd(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,ag(n),n=n.next;while(n!==o)}e.action=null}function ag(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function sg(e,n){return n}function rg(e,n){if(Ge){var a=dn.formState;if(a!==null){t:{var o=Ce;if(Ge){if(xn){e:{for(var u=xn,h=oa;u.nodeType!==8;){if(!h){u=null;break e}if(u=ca(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){xn=ca(u.nextSibling),o=u.data==="F!";break t}}Qs(o)}o=!1}o&&(n=a[0])}}return a=Mi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sg,lastRenderedState:n},a.queue=o,a=Tg.bind(null,Ce,o),o.dispatch=a,o=Ed(!1),h=Dd.bind(null,Ce,!1,o.queue),o=Mi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=dy.bind(null,Ce,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function og(e){var n=In();return lg(n,ln,e)}function lg(e,n,a){if(n=yd(e,n,sg)[0],e=fu(ps)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Wl(n)}catch(x){throw x===No?eu:x}else o=n;n=In();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Ce.flags|=2048,Po(9,{destroy:void 0},py.bind(null,u,a),null)),[o,h,e]}function py(e,n){e.action=n}function cg(e){var n=In(),a=ln;if(a!==null)return lg(n,a,e);In(),n=n.memoizedState,a=In();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Po(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ce.updateQueue,n===null&&(n=cu(),Ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function ug(){return In().memoizedState}function hu(e,n,a,o){var u=Mi();Ce.flags|=e,u.memoizedState=Po(1|n,{destroy:void 0},a,o===void 0?null:o)}function du(e,n,a,o){var u=In();o=o===void 0?null:o;var h=u.memoizedState.inst;ln!==null&&o!==null&&md(o,ln.memoizedState.deps)?u.memoizedState=Po(n,h,a,o):(Ce.flags|=e,u.memoizedState=Po(1|n,h,a,o))}function fg(e,n){hu(8390656,8,e,n)}function Td(e,n){du(2048,8,e,n)}function my(e){Ce.flags|=4;var n=Ce.updateQueue;if(n===null)n=cu(),Ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function hg(e){var n=In().memoizedState;return my({ref:n,nextImpl:e}),function(){if((tn&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function dg(e,n){return du(4,2,e,n)}function pg(e,n){return du(4,4,e,n)}function mg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gg(e,n,a){a=a!=null?a.concat([e]):null,du(4,4,mg.bind(null,n,e),a)}function Ad(){}function _g(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&md(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function vg(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&md(n,o[1]))return o[0];if(o=e(),qr){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o}function Rd(e,n,a){return a===void 0||(ds&1073741824)!==0&&(ze&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=x_(),Ce.lanes|=e,rr|=e,a)}function xg(e,n,a,o){return Vi(a,n)?a:Lo.current!==null?(e=Rd(e,a,o),Vi(e,n)||(zn=!0),e):(ds&42)===0||(ds&1073741824)!==0&&(ze&261930)===0?(zn=!0,e.memoizedState=a):(e=x_(),Ce.lanes|=e,rr|=e,n)}function Sg(e,n,a,o,u){var h=P.p;P.p=h!==0&&8>h?h:8;var x=O.T,A={};O.T=A,Dd(e,!1,n,a);try{var H=u(),it=O.S;if(it!==null&&it(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=uy(H,o);Yl(e,n,mt,ji(e))}else Yl(e,n,o,ji(e))}catch(vt){Yl(e,n,{then:function(){},status:"rejected",reason:vt},ji())}finally{P.p=h,x!==null&&A.types!==null&&(x.types=A.types),O.T=x}}function gy(){}function Cd(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=yg(e).queue;Sg(e,u,n,rt,a===null?gy:function(){return Mg(e),a(o)})}function yg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mg(e){var n=yg(e);n.next===null&&(n=e.alternate.memoizedState),Yl(e,n.next.queue,{},ji())}function wd(){return si(cc)}function Eg(){return In().memoizedState}function bg(){return In().memoizedState}function _y(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ji();e=tr(a);var o=er(n,e,a);o!==null&&(Oi(o,n,a),Gl(o,n,a)),n={cache:ad()},e.payload=n;return}n=n.return}}function vy(e,n,a){var o=ji();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pu(e)?Ag(n,a):(a=qh(e,n,a,o),a!==null&&(Oi(a,e,o),Rg(a,n,o)))}function Tg(e,n,a){var o=ji();Yl(e,n,a,o)}function Yl(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pu(e))Ag(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,A=h(x,a);if(u.hasEagerState=!0,u.eagerState=A,Vi(A,x))return jc(e,n,u,0),dn===null&&qc(),!1}catch{}if(a=qh(e,n,u,o),a!==null)return Oi(a,e,o),Rg(a,n,o),!0}return!1}function Dd(e,n,a,o){if(o={lane:2,revertLane:lp(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},pu(e)){if(n)throw Error(s(479))}else n=qh(e,a,o,2),n!==null&&Oi(n,e,2)}function pu(e){var n=e.alternate;return e===Ce||n!==null&&n===Ce}function Ag(e,n){Oo=ou=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Rg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Os(e,a)}}var ql={readContext:si,use:uu,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useLayoutEffect:Un,useInsertionEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useSyncExternalStore:Un,useId:Un,useHostTransitionStatus:Un,useFormState:Un,useActionState:Un,useOptimistic:Un,useMemoCache:Un,useCacheRefresh:Un};ql.useEffectEvent=Un;var Cg={readContext:si,use:uu,useCallback:function(e,n){return Mi().memoizedState=[e,n===void 0?null:n],e},useContext:si,useEffect:fg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,hu(4194308,4,mg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return hu(4194308,4,e,n)},useInsertionEffect:function(e,n){hu(4,2,e,n)},useMemo:function(e,n){var a=Mi();n=n===void 0?null:n;var o=e();if(qr){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Mi();if(a!==void 0){var u=a(n);if(qr){kt(!0);try{a(n)}finally{kt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=vy.bind(null,Ce,e),[o.memoizedState,e]},useRef:function(e){var n=Mi();return e={current:e},n.memoizedState=e},useState:function(e){e=Ed(e);var n=e.queue,a=Tg.bind(null,Ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ad,useDeferredValue:function(e,n){var a=Mi();return Rd(a,e,n)},useTransition:function(){var e=Ed(!1);return e=Sg.bind(null,Ce,e.queue,!0,!1),Mi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ce,u=Mi();if(Ge){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),dn===null)throw Error(s(349));(ze&127)!==0||Z0(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,fg(Q0.bind(null,o,h,e),[e]),o.flags|=2048,Po(9,{destroy:void 0},K0.bind(null,o,h,a,n),null),a},useId:function(){var e=Mi(),n=dn.identifierPrefix;if(Ge){var a=Xa,o=ka;a=(o&~(1<<32-Ht(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=lu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:wd,useFormState:rg,useActionState:rg,useOptimistic:function(e){var n=Mi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Dd.bind(null,Ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Sd,useCacheRefresh:function(){return Mi().memoizedState=_y.bind(null,Ce)},useEffectEvent:function(e){var n=Mi(),a={impl:e};return n.memoizedState=a,function(){if((tn&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Nd={readContext:si,use:uu,useCallback:_g,useContext:si,useEffect:Td,useImperativeHandle:gg,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:fu,useRef:ug,useState:function(){return fu(ps)},useDebugValue:Ad,useDeferredValue:function(e,n){var a=In();return xg(a,ln.memoizedState,e,n)},useTransition:function(){var e=fu(ps)[0],n=In().memoizedState;return[typeof e=="boolean"?e:Wl(e),n]},useSyncExternalStore:j0,useId:Eg,useHostTransitionStatus:wd,useFormState:og,useActionState:og,useOptimistic:function(e,n){var a=In();return tg(a,ln,e,n)},useMemoCache:Sd,useCacheRefresh:bg};Nd.useEffectEvent=hg;var wg={readContext:si,use:uu,useCallback:_g,useContext:si,useEffect:Td,useImperativeHandle:gg,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:Md,useRef:ug,useState:function(){return Md(ps)},useDebugValue:Ad,useDeferredValue:function(e,n){var a=In();return ln===null?Rd(a,e,n):xg(a,ln.memoizedState,e,n)},useTransition:function(){var e=Md(ps)[0],n=In().memoizedState;return[typeof e=="boolean"?e:Wl(e),n]},useSyncExternalStore:j0,useId:Eg,useHostTransitionStatus:wd,useFormState:cg,useActionState:cg,useOptimistic:function(e,n){var a=In();return ln!==null?tg(a,ln,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Sd,useCacheRefresh:bg};wg.useEffectEvent=hg;function Ud(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ld={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ji(),u=tr(o);u.payload=n,a!=null&&(u.callback=a),n=er(e,u,o),n!==null&&(Oi(n,e,o),Gl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ji(),u=tr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=er(e,u,o),n!==null&&(Oi(n,e,o),Gl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ji(),o=tr(a);o.tag=2,n!=null&&(o.callback=n),n=er(e,o,a),n!==null&&(Oi(n,e,a),Gl(n,e,a))}};function Dg(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!Ll(a,o)||!Ll(u,h):!0}function Ng(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ld.enqueueReplaceState(n,n.state,null)}function jr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Ug(e){Yc(e)}function Lg(e){console.error(e)}function Og(e){Yc(e)}function mu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ig(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Od(e,n,a){return a=tr(a),a.tag=3,a.payload={element:null},a.callback=function(){mu(e,n)},a}function Pg(e){return e=tr(e),e.tag=3,e}function Fg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Ig(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Ig(n,a,o),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function xy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Co(n,a,u,!0),a=Xi.current,a!==null){switch(a.tag){case 31:case 13:return la===null?Ru():a.alternate===null&&Ln===0&&(Ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===nu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),sp(e,o,u)),!1;case 22:return a.flags|=65536,o===nu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),sp(e,o,u)),!1}throw Error(s(435,a.tag))}return sp(e,o,u),Ru(),!1}if(Ge)return n=Xi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==$h&&(e=Error(s(422),{cause:o}),Pl(aa(e,a)))):(o!==$h&&(n=Error(s(423),{cause:o}),Pl(aa(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=aa(o,a),u=Od(e.stateNode,o,u),ud(e,u),Ln!==4&&(Ln=2)),!1;var h=Error(s(520),{cause:o});if(h=aa(h,a),ec===null?ec=[h]:ec.push(h),Ln!==4&&(Ln=2),n===null)return!0;o=aa(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Od(a.stateNode,o,e),ud(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(or===null||!or.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Pg(u),Fg(u,e,a,o),ud(a,u),!1}a=a.return}while(a!==null);return!1}var Id=Error(s(461)),zn=!1;function ri(e,n,a,o){n.child=e===null?G0(n,null,a,o):Yr(n,e.child,a,o)}function Bg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Vr(n),o=gd(e,n,a,x,h,u),A=_d(),e!==null&&!zn?(vd(e,n,u),ms(e,n,u)):(Ge&&A&&Qh(n),n.flags|=1,ri(e,n,o,u),n.child)}function zg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!jh(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Hg(e,n,h,o,u)):(e=Kc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!kd(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ll,a(x,o)&&e.ref===n.ref)return ms(e,n,u)}return n.flags|=1,e=cs(h,o),e.ref=n.ref,e.return=n,n.child=e}function Hg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Ll(h,o)&&e.ref===n.ref)if(zn=!1,n.pendingProps=o=h,kd(e,u))(e.flags&131072)!==0&&(zn=!0);else return n.lanes=e.lanes,ms(e,n,u)}return Pd(e,n,a,o,u)}function Gg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Vg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&tu(n,h!==null?h.cachePool:null),h!==null?X0(n,h):hd(),W0(n);else return o=n.lanes=536870912,Vg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(tu(n,h.cachePool),X0(n,h),ir(),n.memoizedState=null):(e!==null&&tu(n,null),hd(),ir());return ri(e,n,u,a),n.child}function jl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vg(e,n,a,o,u){var h=rd();return h=h===null?null:{parent:Fn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&tu(n,null),hd(),W0(n),e!==null&&Co(e,n,o,!0),n.childLanes=u,null}function gu(e,n){return n=vu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function kg(e,n,a){return Yr(n,e.child,null,a),e=gu(n,n.pendingProps),e.flags|=2,Wi(n),n.memoizedState=null,e}function Sy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ge){if(o.mode==="hidden")return e=gu(n,o),n.lanes=536870912,jl(null,e);if(pd(n),(e=xn)?(e=ev(e,oa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Zs!==null?{id:ka,overflow:Xa}:null,retryLane:536870912,hydrationErrors:null},a=A0(e),a.return=n,n.child=a,ai=n,xn=null)):e=null,e===null)throw Qs(n);return n.lanes=536870912,null}return gu(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(pd(n),u)if(n.flags&256)n.flags&=-257,n=kg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(zn||Co(e,n,a,!1),u=(a&e.childLanes)!==0,zn||u){if(o=dn,o!==null&&(x=Ia(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,Br(e,x),Oi(o,e,x),Id;Ru(),n=kg(e,n,a)}else e=h.treeContext,xn=ca(x.nextSibling),ai=n,Ge=!0,Ks=null,oa=!1,e!==null&&w0(n,e),n=gu(n,o),n.flags|=4096;return n}return e=cs(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function _u(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Pd(e,n,a,o,u){return Vr(n),a=gd(e,n,a,o,void 0,u),o=_d(),e!==null&&!zn?(vd(e,n,u),ms(e,n,u)):(Ge&&o&&Qh(n),n.flags|=1,ri(e,n,a,u),n.child)}function Xg(e,n,a,o,u,h){return Vr(n),n.updateQueue=null,a=q0(n,o,a,u),Y0(e),o=_d(),e!==null&&!zn?(vd(e,n,h),ms(e,n,h)):(Ge&&o&&Qh(n),n.flags|=1,ri(e,n,a,h),n.child)}function Wg(e,n,a,o,u){if(Vr(n),n.stateNode===null){var h=bo,x=a.contextType;typeof x=="object"&&x!==null&&(h=si(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Ld,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},ld(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?si(x):bo,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Ud(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Ld.enqueueReplaceState(h,h.state,null),kl(n,o,h,u),Vl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,H=jr(a,A);h.props=H;var it=h.context,mt=a.contextType;x=bo,typeof mt=="object"&&mt!==null&&(x=si(mt));var vt=a.getDerivedStateFromProps;mt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||it!==x)&&Ng(n,h,o,x),$s=!1;var st=n.memoizedState;h.state=st,kl(n,o,h,u),Vl(),it=n.memoizedState,A||st!==it||$s?(typeof vt=="function"&&(Ud(n,a,vt,o),it=n.memoizedState),(H=$s||Dg(n,a,H,o,st,it,x))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),h.props=o,h.state=it,h.context=x,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,cd(e,n),x=n.memoizedProps,mt=jr(a,x),h.props=mt,vt=n.pendingProps,st=h.context,it=a.contextType,H=bo,typeof it=="object"&&it!==null&&(H=si(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==vt||st!==H)&&Ng(n,h,o,H),$s=!1,st=n.memoizedState,h.state=st,kl(n,o,h,u),Vl();var ct=n.memoizedState;x!==vt||st!==ct||$s||e!==null&&e.dependencies!==null&&Jc(e.dependencies)?(typeof A=="function"&&(Ud(n,a,A,o),ct=n.memoizedState),(mt=$s||Dg(n,a,mt,o,st,ct,H)||e!==null&&e.dependencies!==null&&Jc(e.dependencies))?(it||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),h.props=o,h.state=ct,h.context=H,o=mt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,_u(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Yr(n,e.child,null,u),n.child=Yr(n,null,a,u)):ri(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ms(e,n,u),e}function Yg(e,n,a,o){return Hr(),n.flags|=256,ri(e,n,a,o),n.child}var Fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bd(e){return{baseLanes:e,cachePool:I0()}}function zd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=qi),e}function qg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ge){if(u?nr(n):ir(),(e=xn)?(e=ev(e,oa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Zs!==null?{id:ka,overflow:Xa}:null,retryLane:536870912,hydrationErrors:null},a=A0(e),a.return=n,n.child=a,ai=n,xn=null)):e=null,e===null)throw Qs(n);return yp(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(ir(),u=n.mode,A=vu({mode:"hidden",children:A},u),o=zr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Bd(a),o.childLanes=zd(e,x,a),n.memoizedState=Fd,jl(null,o)):(nr(n),Hd(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(h)n.flags&256?(nr(n),n.flags&=-257,n=Gd(e,n,a)):n.memoizedState!==null?(ir(),n.child=e.child,n.flags|=128,n=null):(ir(),A=o.fallback,u=n.mode,o=vu({mode:"visible",children:o.children},u),A=zr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Yr(n,e.child,null,a),o=n.child,o.memoizedState=Bd(a),o.childLanes=zd(e,x,a),n.memoizedState=Fd,n=jl(null,o));else if(nr(n),yp(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var it=x.dgst;x=it,o=Error(s(419)),o.stack="",o.digest=x,Pl({value:o,source:null,stack:null}),n=Gd(e,n,a)}else if(zn||Co(e,n,a,!1),x=(a&e.childLanes)!==0,zn||x){if(x=dn,x!==null&&(o=Ia(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Br(e,o),Oi(x,e,o),Id;Sp(A)||Ru(),n=Gd(e,n,a)}else Sp(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,xn=ca(A.nextSibling),ai=n,Ge=!0,Ks=null,oa=!1,e!==null&&w0(n,e),n=Hd(n,o.children),n.flags|=4096);return n}return u?(ir(),A=o.fallback,u=n.mode,H=e.child,it=H.sibling,o=cs(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,it!==null?A=cs(it,A):(A=zr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,jl(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Bd(a):(u=A.cachePool,u!==null?(H=Fn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=I0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=zd(e,x,a),n.memoizedState=Fd,jl(e.child,o)):(nr(n),a=e.child,e=a.sibling,a=cs(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Hd(e,n){return n=vu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function vu(e,n){return e=ki(22,e,null,n),e.lanes=0,e}function Gd(e,n,a){return Yr(n,e.child,null,a),e=Hd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),nd(e.return,n,a)}function Vd(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Zg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=On.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,pt(On,x),ri(e,n,o,a),o=Ge?Il:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jg(e,a,n);else if(e.tag===19)jg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ru(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Vd(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ru(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Vd(n,!0,a,null,h,o);break;case"together":Vd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ms(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),rr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Co(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=cs(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=cs(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function kd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Jc(e)))}function yy(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Js(n,Fn,e.memoizedState.cache),Hr();break;case 27:case 5:oe(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Js(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,pd(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(nr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qg(e,n,a):(nr(n),e=ms(e,n,a),e!==null?e.sibling:null);nr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Co(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Zg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(On,On.current),o)break;return null;case 22:return n.lanes=0,Gg(e,n,a,n.pendingProps);case 24:Js(n,Fn,e.memoizedState.cache)}return ms(e,n,a)}function Kg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)zn=!0;else{if(!kd(e,a)&&(n.flags&128)===0)return zn=!1,yy(e,n,a);zn=(e.flags&131072)!==0}else zn=!1,Ge&&(n.flags&1048576)!==0&&C0(n,Il,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Xr(n.elementType),n.type=e,typeof e=="function")jh(e)?(o=jr(e,o),n.tag=1,n=Wg(null,n,e,o,a)):(n.tag=0,n=Pd(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=Bg(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=zg(null,n,e,o,a);break t}}throw n=J(e)||e,Error(s(306,n,""))}}return n;case 0:return Pd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=jr(o,n.pendingProps),Wg(e,n,o,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,cd(e,n),kl(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Js(n,Fn,o),o!==h.cache&&id(n,[Fn],a,!0),Vl(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Yg(e,n,o,a);break t}else if(o!==u){u=aa(Error(s(424)),n),Pl(u),n=Yg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,xn=ca(e.firstChild),ai=n,Ge=!0,Ks=null,oa=!0,a=G0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hr(),o===u){n=ms(e,n,a);break t}ri(e,n,o,a)}n=n.child}return n;case 26:return _u(e,n),e===null?(a=ov(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ge||(a=n.type,e=n.pendingProps,o=Ou(tt.current).createElement(a),o[En]=n,o[Cn]=e,oi(o,a,e),X(o),n.stateNode=o):n.memoizedState=ov(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return oe(n),e===null&&Ge&&(o=n.stateNode=av(n.type,n.pendingProps,tt.current),ai=n,oa=!0,u=xn,fr(n.type)?(Mp=u,xn=ca(o.firstChild)):xn=u),ri(e,n,n.pendingProps.children,a),_u(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ge&&((u=o=xn)&&(o=Qy(o,n.type,n.pendingProps,oa),o!==null?(n.stateNode=o,ai=n,xn=ca(o.firstChild),oa=!1,u=!0):u=!1),u||Qs(n)),oe(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,_p(u,h)?o=null:x!==null&&_p(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=gd(e,n,hy,null,null,a),cc._currentValue=u),_u(e,n),ri(e,n,o,a),n.child;case 6:return e===null&&Ge&&((e=a=xn)&&(a=Jy(a,n.pendingProps,oa),a!==null?(n.stateNode=a,ai=n,xn=null,e=!0):e=!1),e||Qs(n)),null;case 13:return qg(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Yr(n,null,o,a):ri(e,n,o,a),n.child;case 11:return Bg(e,n,n.type,n.pendingProps,a);case 7:return ri(e,n,n.pendingProps,a),n.child;case 8:return ri(e,n,n.pendingProps.children,a),n.child;case 12:return ri(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Js(n,n.type,o.value),ri(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Vr(n),u=si(u),o=o(u),n.flags|=1,ri(e,n,o,a),n.child;case 14:return zg(e,n,n.type,n.pendingProps,a);case 15:return Hg(e,n,n.type,n.pendingProps,a);case 19:return Zg(e,n,a);case 31:return Sy(e,n,a);case 22:return Gg(e,n,a,n.pendingProps);case 24:return Vr(n),o=si(Fn),e===null?(u=rd(),u===null&&(u=dn,h=ad(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},ld(n),Js(n,Fn,u)):((e.lanes&a)!==0&&(cd(e,n),kl(n,null,null,a),Vl()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Js(n,Fn,o)):(o=h.cache,Js(n,Fn,o),o!==u.cache&&id(n,[Fn],a,!0))),ri(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function gs(e){e.flags|=4}function Xd(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(E_())e.flags|=8192;else throw Wr=nu,od}else e.flags&=-16777217}function Qg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hv(n))if(E_())e.flags|=8192;else throw Wr=nu,od}function xu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?qe():536870912,e.lanes|=n,Ho|=n)}function Zl(e,n){if(!Ge)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Sn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function My(e,n,a){var o=n.pendingProps;switch(Jh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(n),null;case 1:return Sn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),hs(Fn),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ro(n)?gs(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,td())),Sn(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(gs(n),h!==null?(Sn(n),Qg(n,h)):(Sn(n),Xd(n,u,null,o,a))):h?h!==e.memoizedState?(gs(n),Sn(n),Qg(n,h)):(Sn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&gs(n),Sn(n),Xd(n,u,e,o,a)),null;case 27:if(de(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&gs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Sn(n),null}e=At.current,Ro(n)?D0(n):(e=av(u,o,a),n.stateNode=e,gs(n))}return Sn(n),null;case 5:if(de(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&gs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Sn(n),null}if(h=At.current,Ro(n))D0(n);else{var x=Ou(tt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[En]=n,h[Cn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(oi(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&gs(n)}}return Sn(n),Xd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&gs(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,Ro(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ai,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[En]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||q_(e.nodeValue,a)),e||Qs(n,!0)}else e=Ou(e).createTextNode(o),e[En]=n,n.stateNode=e}return Sn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ro(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[En]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Sn(n),e=!1}else a=td(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Wi(n),n):(Wi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Sn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ro(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[En]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Sn(n),u=!1}else u=td(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wi(n),n):(Wi(n),null)}return Wi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),xu(n,n.updateQueue),Sn(n),null);case 4:return jt(),e===null&&hp(n.stateNode.containerInfo),Sn(n),null;case 10:return hs(n.type),Sn(n),null;case 19:if(q(On),o=n.memoizedState,o===null)return Sn(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Zl(o,!1);else{if(Ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=ru(e),h!==null){for(n.flags|=128,Zl(o,!1),e=h.updateQueue,n.updateQueue=e,xu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)T0(a,e),a=a.sibling;return pt(On,On.current&1|2),Ge&&us(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>bu&&(n.flags|=128,u=!0,Zl(o,!1),n.lanes=4194304)}else{if(!u)if(e=ru(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,xu(n,e),Zl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ge)return Sn(n),null}else 2*b()-o.renderingStartTime>bu&&a!==536870912&&(n.flags|=128,u=!0,Zl(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=On.current,pt(On,u?a&1|2:a&1),Ge&&us(n,o.treeForkCount),e):(Sn(n),null);case 22:case 23:return Wi(n),dd(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Sn(n),n.subtreeFlags&6&&(n.flags|=8192)):Sn(n),a=n.updateQueue,a!==null&&xu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(kr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),hs(Fn),Sn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ey(e,n){switch(Jh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return hs(Fn),jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Wi(n),n.alternate===null)throw Error(s(340));Hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(On),null;case 4:return jt(),null;case 10:return hs(n.type),null;case 22:case 23:return Wi(n),dd(),e!==null&&q(kr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return hs(Fn),null;case 25:return null;default:return null}}function Jg(e,n){switch(Jh(n),n.tag){case 3:hs(Fn),jt();break;case 26:case 27:case 5:de(n);break;case 4:jt();break;case 31:n.memoizedState!==null&&Wi(n);break;case 13:Wi(n);break;case 19:q(On);break;case 10:hs(n.type);break;case 22:case 23:Wi(n),dd(),e!==null&&q(kr);break;case 24:hs(Fn)}}function Kl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){rn(n,n.return,A)}}function ar(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var H=a,it=A;try{it()}catch(mt){rn(u,H,mt)}}}o=o.next}while(o!==h)}}catch(mt){rn(n,n.return,mt)}}function $g(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{k0(n,a)}catch(o){rn(e,e.return,o)}}}function t_(e,n,a){a.props=jr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){rn(e,n,o)}}function Ql(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){rn(e,n,u)}}function Wa(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){rn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){rn(e,n,u)}else a.current=null}function e_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){rn(e,e.return,u)}}function Wd(e,n,a){try{var o=e.stateNode;Wy(o,e.type,a,n),o[Cn]=n}catch(u){rn(e,e.return,u)}}function n_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fr(e.type)||e.tag===4}function Yd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||n_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qd(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&fr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(qd(e,n,a),e=e.sibling;e!==null;)qd(e,n,a),e=e.sibling}function Su(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&fr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Su(e,n,a),e=e.sibling;e!==null;)Su(e,n,a),e=e.sibling}function i_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);oi(n,o,a),n[En]=e,n[Cn]=a}catch(h){rn(e,e.return,h)}}var _s=!1,Hn=!1,jd=!1,a_=typeof WeakSet=="function"?WeakSet:Set,Kn=null;function by(e,n){if(e=e.containerInfo,mp=Gu,e=g0(e),Gh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,A=-1,H=-1,it=0,mt=0,vt=e,st=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(A=x+u),vt!==h||o!==0&&vt.nodeType!==3||(H=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)st=vt,vt=ct;for(;;){if(vt===e)break e;if(st===a&&++it===u&&(A=x),st===h&&++mt===o&&(H=x),(ct=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=ct}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(gp={focusedElem:e,selectionRange:a},Gu=!1,Kn=n;Kn!==null;)if(n=Kn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Kn=e;else for(;Kn!==null;){switch(n=Kn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ae=jr(a.type,u);e=o.getSnapshotBeforeUpdate(ae,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ge){rn(a,a.return,ge)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)xp(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Kn=e;break}Kn=n.return}}function s_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:xs(e,a),o&4&&Kl(5,a);break;case 1:if(xs(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){rn(a,a.return,x)}else{var u=jr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){rn(a,a.return,x)}}o&64&&$g(a),o&512&&Ql(a,a.return);break;case 3:if(xs(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{k0(e,n)}catch(x){rn(a,a.return,x)}}break;case 27:n===null&&o&4&&i_(a);case 26:case 5:xs(e,a),n===null&&o&4&&e_(a),o&512&&Ql(a,a.return);break;case 12:xs(e,a);break;case 31:xs(e,a),o&4&&l_(e,a);break;case 13:xs(e,a),o&4&&c_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ly.bind(null,a),$y(e,a))));break;case 22:if(o=a.memoizedState!==null||_s,!o){n=n!==null&&n.memoizedState!==null||Hn,u=_s;var h=Hn;_s=o,(Hn=n)&&!h?Ss(e,a,(a.subtreeFlags&8772)!==0):xs(e,a),_s=u,Hn=h}break;case 30:break;default:xs(e,a)}}function r_(e){var n=e.alternate;n!==null&&(e.alternate=null,r_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&is(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Mn=null,Di=!1;function vs(e,n,a){for(a=a.child;a!==null;)o_(e,n,a),a=a.sibling}function o_(e,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:Hn||Wa(a,n),vs(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hn||Wa(a,n);var o=Mn,u=Di;fr(a.type)&&(Mn=a.stateNode,Di=!1),vs(e,n,a),rc(a.stateNode),Mn=o,Di=u;break;case 5:Hn||Wa(a,n);case 6:if(o=Mn,u=Di,Mn=null,vs(e,n,a),Mn=o,Di=u,Mn!==null)if(Di)try{(Mn.nodeType===9?Mn.body:Mn.nodeName==="HTML"?Mn.ownerDocument.body:Mn).removeChild(a.stateNode)}catch(h){rn(a,n,h)}else try{Mn.removeChild(a.stateNode)}catch(h){rn(a,n,h)}break;case 18:Mn!==null&&(Di?(e=Mn,$_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),jo(e)):$_(Mn,a.stateNode));break;case 4:o=Mn,u=Di,Mn=a.stateNode.containerInfo,Di=!0,vs(e,n,a),Mn=o,Di=u;break;case 0:case 11:case 14:case 15:ar(2,a,n),Hn||ar(4,a,n),vs(e,n,a);break;case 1:Hn||(Wa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&t_(a,n,o)),vs(e,n,a);break;case 21:vs(e,n,a);break;case 22:Hn=(o=Hn)||a.memoizedState!==null,vs(e,n,a),Hn=o;break;default:vs(e,n,a)}}function l_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jo(e)}catch(a){rn(n,n.return,a)}}}function c_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jo(e)}catch(a){rn(n,n.return,a)}}function Ty(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new a_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new a_),n;default:throw Error(s(435,e.tag))}}function yu(e,n){var a=Ty(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Oy.bind(null,e,o);o.then(u,u)}})}function Ni(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(fr(A.type)){Mn=A.stateNode,Di=!1;break t}break;case 5:Mn=A.stateNode,Di=!1;break t;case 3:case 4:Mn=A.stateNode.containerInfo,Di=!0;break t}A=A.return}if(Mn===null)throw Error(s(160));o_(h,x,u),Mn=null,Di=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)u_(n,e),n=n.sibling}var Ea=null;function u_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ni(n,e),Ui(e),o&4&&(ar(3,e,e.return),Kl(3,e),ar(5,e,e.return));break;case 1:Ni(n,e),Ui(e),o&512&&(Hn||a===null||Wa(a,a.return)),o&64&&_s&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ea;if(Ni(n,e),Ui(e),o&512&&(Hn||a===null||Wa(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Bi]||h[En]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),oi(h,o,a),h[En]=e,X(h),o=h;break t;case"link":var x=uv("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(h=x[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}h=u.createElement(o),oi(h,o,a),u.head.appendChild(h);break;case"meta":if(x=uv("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(h=x[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}h=u.createElement(o),oi(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[En]=e,X(h),o=h}e.stateNode=o}else fv(u,e.type,e.stateNode);else e.stateNode=cv(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?fv(u,e.type,e.stateNode):cv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Wd(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ni(n,e),Ui(e),o&512&&(Hn||a===null||Wa(a,a.return)),a!==null&&o&4&&Wd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ni(n,e),Ui(e),o&512&&(Hn||a===null||Wa(a,a.return)),e.flags&32){u=e.stateNode;try{ii(u,"")}catch(ae){rn(e,e.return,ae)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Wd(e,u,a!==null?a.memoizedProps:u)),o&1024&&(jd=!0);break;case 6:if(Ni(n,e),Ui(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ae){rn(e,e.return,ae)}}break;case 3:if(Fu=null,u=Ea,Ea=Iu(n.containerInfo),Ni(n,e),Ea=u,Ui(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{jo(n.containerInfo)}catch(ae){rn(e,e.return,ae)}jd&&(jd=!1,f_(e));break;case 4:o=Ea,Ea=Iu(e.stateNode.containerInfo),Ni(n,e),Ui(e),Ea=o;break;case 12:Ni(n,e),Ui(e);break;case 31:Ni(n,e),Ui(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yu(e,o)));break;case 13:Ni(n,e),Ui(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Eu=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yu(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,it=_s,mt=Hn;if(_s=it||u,Hn=mt||H,Ni(n,e),Hn=mt,_s=it,Ui(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||_s||Hn||Zr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=H.stateNode;var vt=H.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(ae){rn(H,H.return,ae)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(ae){rn(H,H.return,ae)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;u?tv(ct,!0):tv(H.stateNode,!1)}catch(ae){rn(H,H.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,yu(e,a))));break;case 19:Ni(n,e),Ui(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yu(e,o)));break;case 30:break;case 21:break;default:Ni(n,e),Ui(e)}}function Ui(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(n_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Yd(e);Su(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(ii(x,""),a.flags&=-33);var A=Yd(e);Su(e,A,x);break;case 3:case 4:var H=a.stateNode.containerInfo,it=Yd(e);qd(e,it,H);break;default:throw Error(s(161))}}catch(mt){rn(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function f_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;f_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xs(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)s_(e,n.alternate,n),n=n.sibling}function Zr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ar(4,n,n.return),Zr(n);break;case 1:Wa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&t_(n,n.return,a),Zr(n);break;case 27:rc(n.stateNode);case 26:case 5:Wa(n,n.return),Zr(n);break;case 22:n.memoizedState===null&&Zr(n);break;case 30:Zr(n);break;default:Zr(n)}e=e.sibling}}function Ss(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Ss(u,h,a),Kl(4,h);break;case 1:if(Ss(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){rn(o,o.return,it)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)V0(H[u],A)}catch(it){rn(o,o.return,it)}}a&&x&64&&$g(h),Ql(h,h.return);break;case 27:i_(h);case 26:case 5:Ss(u,h,a),a&&o===null&&x&4&&e_(h),Ql(h,h.return);break;case 12:Ss(u,h,a);break;case 31:Ss(u,h,a),a&&x&4&&l_(u,h);break;case 13:Ss(u,h,a),a&&x&4&&c_(u,h);break;case 22:h.memoizedState===null&&Ss(u,h,a),Ql(h,h.return);break;case 30:break;default:Ss(u,h,a)}n=n.sibling}}function Zd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fl(a))}function Kd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fl(e))}function ba(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)h_(e,n,a,o),n=n.sibling}function h_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ba(e,n,a,o),u&2048&&Kl(9,n);break;case 1:ba(e,n,a,o);break;case 3:ba(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fl(e)));break;case 12:if(u&2048){ba(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,A=h.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){rn(n,n.return,H)}}else ba(e,n,a,o);break;case 31:ba(e,n,a,o);break;case 13:ba(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?ba(e,n,a,o):Jl(e,n):h._visibility&2?ba(e,n,a,o):(h._visibility|=2,Fo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Zd(x,n);break;case 24:ba(e,n,a,o),u&2048&&Kd(n.alternate,n);break;default:ba(e,n,a,o)}}function Fo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,A=a,H=o,it=x.flags;switch(x.tag){case 0:case 11:case 15:Fo(h,x,A,H,u),Kl(8,x);break;case 23:break;case 22:var mt=x.stateNode;x.memoizedState!==null?mt._visibility&2?Fo(h,x,A,H,u):Jl(h,x):(mt._visibility|=2,Fo(h,x,A,H,u)),u&&it&2048&&Zd(x.alternate,x);break;case 24:Fo(h,x,A,H,u),u&&it&2048&&Kd(x.alternate,x);break;default:Fo(h,x,A,H,u)}n=n.sibling}}function Jl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Jl(a,o),u&2048&&Zd(o.alternate,o);break;case 24:Jl(a,o),u&2048&&Kd(o.alternate,o);break;default:Jl(a,o)}n=n.sibling}}var $l=8192;function Bo(e,n,a){if(e.subtreeFlags&$l)for(e=e.child;e!==null;)d_(e,n,a),e=e.sibling}function d_(e,n,a){switch(e.tag){case 26:Bo(e,n,a),e.flags&$l&&e.memoizedState!==null&&fM(a,Ea,e.memoizedState,e.memoizedProps);break;case 5:Bo(e,n,a);break;case 3:case 4:var o=Ea;Ea=Iu(e.stateNode.containerInfo),Bo(e,n,a),Ea=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=$l,$l=16777216,Bo(e,n,a),$l=o):Bo(e,n,a));break;default:Bo(e,n,a)}}function p_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function tc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Kn=o,g_(o,e)}p_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)m_(e),e=e.sibling}function m_(e){switch(e.tag){case 0:case 11:case 15:tc(e),e.flags&2048&&ar(9,e,e.return);break;case 3:tc(e);break;case 12:tc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Mu(e)):tc(e);break;default:tc(e)}}function Mu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Kn=o,g_(o,e)}p_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ar(8,n,n.return),Mu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Mu(n));break;default:Mu(n)}e=e.sibling}}function g_(e,n){for(;Kn!==null;){var a=Kn;switch(a.tag){case 0:case 11:case 15:ar(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Fl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Kn=o;else t:for(a=e;Kn!==null;){o=Kn;var u=o.sibling,h=o.return;if(r_(o),o===a){Kn=null;break t}if(u!==null){u.return=h,Kn=u;break t}Kn=h}}}var Ay={getCacheForType:function(e){var n=si(Fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return si(Fn).controller.signal}},Ry=typeof WeakMap=="function"?WeakMap:Map,tn=0,dn=null,Pe=null,ze=0,sn=0,Yi=null,sr=!1,zo=!1,Qd=!1,ys=0,Ln=0,rr=0,Kr=0,Jd=0,qi=0,Ho=0,ec=null,Li=null,$d=!1,Eu=0,__=0,bu=1/0,Tu=null,or=null,Xn=0,lr=null,Go=null,Ms=0,tp=0,ep=null,v_=null,nc=0,np=null;function ji(){return(tn&2)!==0&&ze!==0?ze&-ze:O.T!==null?lp():Pi()}function x_(){if(qi===0)if((ze&536870912)===0||Ge){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),qi=e}else qi=536870912;return e=Xi.current,e!==null&&(e.flags|=32),qi}function Oi(e,n,a){(e===dn&&(sn===2||sn===9)||e.cancelPendingCommit!==null)&&(Vo(e,0),cr(e,ze,qi,!1)),kn(e,a),((tn&2)===0||e!==dn)&&(e===dn&&((tn&2)===0&&(Kr|=a),Ln===4&&cr(e,ze,qi,!1)),Ya(e))}function S_(e,n,a){if((tn&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||$t(e,n),u=o?Dy(e,n):ap(e,n,!0),h=o;do{if(u===0){zo&&!o&&cr(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Cy(a)){u=ap(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=ec;var H=A.current.memoizedState.isDehydrated;if(H&&(Vo(A,x).flags|=256),x=ap(A,x,!1),x!==2){if(Qd&&!H){A.errorRecoveryDisabledLanes|=h,Kr|=h,u=4;break t}h=Li,Li=u,h!==null&&(Li===null?Li=h:Li.push.apply(Li,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){Vo(e,0),cr(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:cr(o,n,qi,!sr);break t;case 2:Li=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Eu+300-b(),10<u)){if(cr(o,n,qi,!sr),ut(o,0,!0)!==0)break t;Ms=n,o.timeoutHandle=Q_(y_.bind(null,o,a,Li,Tu,$d,n,qi,Kr,Ho,sr,h,"Throttled",-0,0),u);break t}y_(o,a,Li,Tu,$d,n,qi,Kr,Ho,sr,h,null,-0,0)}}break}while(!0);Ya(e)}function y_(e,n,a,o,u,h,x,A,H,it,mt,vt,st,ct){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},d_(n,h,vt);var ae=(h&62914560)===h?Eu-b():(h&4194048)===h?__-b():0;if(ae=hM(vt,ae),ae!==null){Ms=h,e.cancelPendingCommit=ae(w_.bind(null,e,n,h,a,o,u,x,A,H,mt,vt,null,st,ct)),cr(e,h,x,!it);return}}w_(e,n,h,a,o,u,x,A,H)}function Cy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Vi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cr(e,n,a,o){n&=~Jd,n&=~Kr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Ht(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&va(e,a,n)}function Au(){return(tn&6)===0?(ic(0),!1):!0}function ip(){if(Pe!==null){if(sn===0)var e=Pe.return;else e=Pe,fs=Gr=null,xd(e),Uo=null,zl=0,e=Pe;for(;e!==null;)Jg(e.alternate,e),e=e.return;Pe=null}}function Vo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ms=0,ip(),dn=e,Pe=a=cs(e.current,null),ze=n,sn=0,Yi=null,sr=!1,zo=$t(e,n),Qd=!1,Ho=qi=Jd=Kr=rr=Ln=0,Li=ec=null,$d=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ht(o),h=1<<u;n|=e[u],o&=~h}return ys=n,qc(),a}function M_(e,n){Ce=null,O.H=ql,n===No||n===eu?(n=B0(),sn=3):n===od?(n=B0(),sn=4):sn=n===Id?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yi=n,Pe===null&&(Ln=1,mu(e,aa(n,e.current)))}function E_(){var e=Xi.current;return e===null?!0:(ze&4194048)===ze?la===null:(ze&62914560)===ze||(ze&536870912)!==0?e===la:!1}function b_(){var e=O.H;return O.H=ql,e===null?ql:e}function T_(){var e=O.A;return O.A=Ay,e}function Ru(){Ln=4,sr||(ze&4194048)!==ze&&Xi.current!==null||(zo=!0),(rr&134217727)===0&&(Kr&134217727)===0||dn===null||cr(dn,ze,qi,!1)}function ap(e,n,a){var o=tn;tn|=2;var u=b_(),h=T_();(dn!==e||ze!==n)&&(Tu=null,Vo(e,n)),n=!1;var x=Ln;t:do try{if(sn!==0&&Pe!==null){var A=Pe,H=Yi;switch(sn){case 8:ip(),x=6;break t;case 3:case 2:case 9:case 6:Xi.current===null&&(n=!0);var it=sn;if(sn=0,Yi=null,ko(e,A,H,it),a&&zo){x=0;break t}break;default:it=sn,sn=0,Yi=null,ko(e,A,H,it)}}wy(),x=Ln;break}catch(mt){M_(e,mt)}while(!0);return n&&e.shellSuspendCounter++,fs=Gr=null,tn=o,O.H=u,O.A=h,Pe===null&&(dn=null,ze=0,qc()),x}function wy(){for(;Pe!==null;)A_(Pe)}function Dy(e,n){var a=tn;tn|=2;var o=b_(),u=T_();dn!==e||ze!==n?(Tu=null,bu=b()+500,Vo(e,n)):zo=$t(e,n);t:do try{if(sn!==0&&Pe!==null){n=Pe;var h=Yi;e:switch(sn){case 1:sn=0,Yi=null,ko(e,n,h,1);break;case 2:case 9:if(P0(h)){sn=0,Yi=null,R_(n);break}n=function(){sn!==2&&sn!==9||dn!==e||(sn=7),Ya(e)},h.then(n,n);break t;case 3:sn=7;break t;case 4:sn=5;break t;case 7:P0(h)?(sn=0,Yi=null,R_(n)):(sn=0,Yi=null,ko(e,n,h,7));break;case 5:var x=null;switch(Pe.tag){case 26:x=Pe.memoizedState;case 5:case 27:var A=Pe;if(x?hv(x):A.stateNode.complete){sn=0,Yi=null;var H=A.sibling;if(H!==null)Pe=H;else{var it=A.return;it!==null?(Pe=it,Cu(it)):Pe=null}break e}}sn=0,Yi=null,ko(e,n,h,5);break;case 6:sn=0,Yi=null,ko(e,n,h,6);break;case 8:ip(),Ln=6;break t;default:throw Error(s(462))}}Ny();break}catch(mt){M_(e,mt)}while(!0);return fs=Gr=null,O.H=o,O.A=u,tn=a,Pe!==null?0:(dn=null,ze=0,qc(),Ln)}function Ny(){for(;Pe!==null&&!Ct();)A_(Pe)}function A_(e){var n=Kg(e.alternate,e,ys);e.memoizedProps=e.pendingProps,n===null?Cu(e):Pe=n}function R_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Xg(a,n,n.pendingProps,n.type,void 0,ze);break;case 11:n=Xg(a,n,n.pendingProps,n.type.render,n.ref,ze);break;case 5:xd(n);default:Jg(a,n),n=Pe=T0(n,ys),n=Kg(a,n,ys)}e.memoizedProps=e.pendingProps,n===null?Cu(e):Pe=n}function ko(e,n,a,o){fs=Gr=null,xd(n),Uo=null,zl=0;var u=n.return;try{if(xy(e,u,n,a,ze)){Ln=1,mu(e,aa(a,e.current)),Pe=null;return}}catch(h){if(u!==null)throw Pe=u,h;Ln=1,mu(e,aa(a,e.current)),Pe=null;return}n.flags&32768?(Ge||o===1?e=!0:zo||(ze&536870912)!==0?e=!1:(sr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Xi.current,o!==null&&o.tag===13&&(o.flags|=16384))),C_(n,e)):Cu(n)}function Cu(e){var n=e;do{if((n.flags&32768)!==0){C_(n,sr);return}e=n.return;var a=My(n.alternate,n,ys);if(a!==null){Pe=a;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);Ln===0&&(Ln=5)}function C_(e,n){do{var a=Ey(e.alternate,e);if(a!==null){a.flags&=32767,Pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=a}while(e!==null);Ln=6,Pe=null}function w_(e,n,a,o,u,h,x,A,H){e.cancelPendingCommit=null;do wu();while(Xn!==0);if((tn&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Yh,ei(e,a,h,x,A,H),e===dn&&(Pe=dn=null,ze=0),Go=n,lr=e,Ms=a,tp=h,ep=u,v_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Iy(lt,function(){return O_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=P.p,P.p=2,x=tn,tn|=4;try{by(e,n,a)}finally{tn=x,P.p=u,O.T=o}}Xn=1,D_(),N_(),U_()}}function D_(){if(Xn===1){Xn=0;var e=lr,n=Go,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=tn;tn|=4;try{u_(n,e);var h=gp,x=g0(e.containerInfo),A=h.focusedElem,H=h.selectionRange;if(x!==A&&A&&A.ownerDocument&&m0(A.ownerDocument.documentElement,A)){if(H!==null&&Gh(A)){var it=H.start,mt=H.end;if(mt===void 0&&(mt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(mt,A.value.length);else{var vt=A.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var ct=st.getSelection(),ae=A.textContent.length,ge=Math.min(H.start,ae),un=H.end===void 0?ge:Math.min(H.end,ae);!ct.extend&&ge>un&&(x=un,un=ge,ge=x);var Q=p0(A,ge),k=p0(A,un);if(Q&&k&&(ct.rangeCount!==1||ct.anchorNode!==Q.node||ct.anchorOffset!==Q.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var nt=vt.createRange();nt.setStart(Q.node,Q.offset),ct.removeAllRanges(),ge>un?(ct.addRange(nt),ct.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),ct.addRange(nt))}}}}for(vt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var _t=vt[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Gu=!!mp,gp=mp=null}finally{tn=u,P.p=o,O.T=a}}e.current=n,Xn=2}}function N_(){if(Xn===2){Xn=0;var e=lr,n=Go,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=tn;tn|=4;try{s_(e,n.alternate,n)}finally{tn=u,P.p=o,O.T=a}}Xn=3}}function U_(){if(Xn===4||Xn===3){Xn=0,L();var e=lr,n=Go,a=Ms,o=v_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xn=5:(Xn=0,Go=lr=null,L_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(or=null),es(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=P.p,P.p=2,O.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];h(A.value,{componentStack:A.stack})}}finally{O.T=n,P.p=u}}(Ms&3)!==0&&wu(),Ya(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===np?nc++:(nc=0,np=e):nc=0,ic(0)}}function L_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Fl(n)))}function wu(){return D_(),N_(),U_(),O_()}function O_(){if(Xn!==5)return!1;var e=lr,n=tp;tp=0;var a=es(Ms),o=O.T,u=P.p;try{P.p=32>a?32:a,O.T=null,a=ep,ep=null;var h=lr,x=Ms;if(Xn=0,Go=lr=null,Ms=0,(tn&6)!==0)throw Error(s(331));var A=tn;if(tn|=4,m_(h.current),h_(h,h.current,x,a),tn=A,ic(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Et,h)}catch{}return!0}finally{P.p=u,O.T=o,L_(e,n)}}function I_(e,n,a){n=aa(a,n),n=Od(e.stateNode,n,2),e=er(e,n,2),e!==null&&(kn(e,2),Ya(e))}function rn(e,n,a){if(e.tag===3)I_(e,e,a);else for(;n!==null;){if(n.tag===3){I_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(or===null||!or.has(o))){e=aa(a,e),a=Pg(2),o=er(n,a,2),o!==null&&(Fg(a,o,n,e),kn(o,2),Ya(o));break}}n=n.return}}function sp(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ry;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Qd=!0,u.add(a),e=Uy.bind(null,e,n,a),n.then(e,e))}function Uy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,dn===e&&(ze&a)===a&&(Ln===4||Ln===3&&(ze&62914560)===ze&&300>b()-Eu?(tn&2)===0&&Vo(e,0):Jd|=a,Ho===ze&&(Ho=0)),Ya(e)}function P_(e,n){n===0&&(n=qe()),e=Br(e,n),e!==null&&(kn(e,n),Ya(e))}function Ly(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),P_(e,a)}function Oy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),P_(e,a)}function Iy(e,n){return Ut(e,n)}var Du=null,Xo=null,rp=!1,Nu=!1,op=!1,ur=0;function Ya(e){e!==Xo&&e.next===null&&(Xo===null?Du=Xo=e:Xo=Xo.next=e),Nu=!0,rp||(rp=!0,Fy())}function ic(e,n){if(!op&&Nu){op=!0;do for(var a=!1,o=Du;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Ht(42|e)+1)-1,h&=u&~(x&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,H_(o,h))}else h=ze,h=ut(o,o===dn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||$t(o,h)||(a=!0,H_(o,h));o=o.next}while(a);op=!1}}function Py(){F_()}function F_(){Nu=rp=!1;var e=0;ur!==0&&qy()&&(e=ur);for(var n=b(),a=null,o=Du;o!==null;){var u=o.next,h=B_(o,n);h===0?(o.next=null,a===null?Du=u:a.next=u,u===null&&(Xo=a)):(a=o,(e!==0||(h&3)!==0)&&(Nu=!0)),o=u}Xn!==0&&Xn!==5||ic(e),ur!==0&&(ur=0)}function B_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Ht(h),A=1<<x,H=u[x];H===-1?((A&a)===0||(A&o)!==0)&&(u[x]=ve(A,n)):H<=n&&(e.expiredLanes|=A),h&=~A}if(n=dn,a=ze,a=ut(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(sn===2||sn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Yt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Yt(o),es(a)){case 2:case 8:a=St;break;case 32:a=lt;break;case 268435456:a=Rt;break;default:a=lt}return o=z_.bind(null,e),a=Ut(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Yt(o),e.callbackPriority=2,e.callbackNode=null,2}function z_(e,n){if(Xn!==0&&Xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(wu()&&e.callbackNode!==a)return null;var o=ze;return o=ut(e,e===dn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(S_(e,o,n),B_(e,b()),e.callbackNode!=null&&e.callbackNode===a?z_.bind(null,e):null)}function H_(e,n){if(wu())return null;S_(e,n,!0)}function Fy(){Zy(function(){(tn&6)!==0?Ut(dt,Py):F_()})}function lp(){if(ur===0){var e=wo;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),ur=e}return ur}function G_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dr(""+e)}function V_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function By(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=G_((u[Cn]||null).action),x=o.submitter;x&&(n=(n=x[Cn]||null)?G_(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var A=new Ur("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ur!==0){var H=x?V_(u,x):new FormData(u);Cd(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(A.preventDefault(),H=x?V_(u,x):new FormData(u),Cd(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var cp=0;cp<Wh.length;cp++){var up=Wh[cp],zy=up.toLowerCase(),Hy=up[0].toUpperCase()+up.slice(1);Ma(zy,"on"+Hy)}Ma(x0,"onAnimationEnd"),Ma(S0,"onAnimationIteration"),Ma(y0,"onAnimationStart"),Ma("dblclick","onDoubleClick"),Ma("focusin","onFocus"),Ma("focusout","onBlur"),Ma(ny,"onTransitionRun"),Ma(iy,"onTransitionStart"),Ma(ay,"onTransitionCancel"),Ma(M0,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ac));function k_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],H=A.instance,it=A.currentTarget;if(A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=it;try{h(u)}catch(mt){Yc(mt)}u.currentTarget=null,h=H}else for(x=0;x<o.length;x++){if(A=o[x],H=A.instance,it=A.currentTarget,A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=it;try{h(u)}catch(mt){Yc(mt)}u.currentTarget=null,h=H}}}}function Fe(e,n){var a=n[Ji];a===void 0&&(a=n[Ji]=new Set);var o=e+"__bubble";a.has(o)||(X_(n,e,2,!1),a.add(o))}function fp(e,n,a){var o=0;n&&(o|=4),X_(a,e,o,n)}var Uu="_reactListening"+Math.random().toString(36).slice(2);function hp(e){if(!e[Uu]){e[Uu]=!0,ot.forEach(function(a){a!=="selectionchange"&&(Gy.has(a)||fp(a,!1,e),fp(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Uu]||(n[Uu]=!0,fp("selectionchange",!1,n))}}function X_(e,n,a,o){switch(xv(n)){case 2:var u=mM;break;case 8:u=gM;break;default:u=Rp}a=u.bind(null,n,a,e),u=void 0,!Ba||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function dp(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=$i(A),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=h=x;continue t}A=A.parentNode}}o=o.return}Dl(function(){var it=h,mt=Fa(a),vt=[];t:{var st=E0.get(e);if(st!==void 0){var ct=Ur,ae=e;switch(e){case"keypress":if(Vs(a)===0)break t;case"keydown":case"keyup":ct=Si;break;case"focusin":ae="focus",ct=xo;break;case"focusout":ae="blur",ct=xo;break;case"beforeblur":case"afterblur":ct=xo;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Ul;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=an;break;case x0:case S0:case y0:ct=Xc;break;case M0:ct=xa;break;case"scroll":case"scrollend":ct=Hc;break;case"wheel":ct=Sa;break;case"copy":case"cut":case"paste":ct=le;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Ye;break;case"toggle":case"beforetoggle":ct=It}var ge=(n&4)!==0,un=!ge&&(e==="scroll"||e==="scrollend"),Q=ge?st!==null?st+"Capture":null:st;ge=[];for(var k=it,nt;k!==null;){var _t=k;if(nt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||nt===null||Q===null||(_t=ss(k,Q),_t!=null&&ge.push(sc(k,_t,nt))),un)break;k=k.return}0<ge.length&&(st=new ct(st,ae,null,a,mt),vt.push({event:st,listeners:ge}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",st&&a!==Fs&&(ae=a.relatedTarget||a.fromElement)&&($i(ae)||ae[Fi]))break t;if((ct||st)&&(st=mt.window===mt?mt:(st=mt.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(ae=a.relatedTarget||a.toElement,ct=it,ae=ae?$i(ae):null,ae!==null&&(un=c(ae),ge=ae.tag,ae!==un||ge!==5&&ge!==27&&ge!==6)&&(ae=null)):(ct=null,ae=it),ct!==ae)){if(ge=vo,_t="onMouseLeave",Q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ge=Ye,_t="onPointerLeave",Q="onPointerEnter",k="pointer"),un=ct==null?st:zi(ct),nt=ae==null?st:zi(ae),st=new ge(_t,k+"leave",ct,a,mt),st.target=un,st.relatedTarget=nt,_t=null,$i(mt)===it&&(ge=new ge(Q,k+"enter",ae,a,mt),ge.target=nt,ge.relatedTarget=un,_t=ge),un=_t,ct&&ae)e:{for(ge=Vy,Q=ct,k=ae,nt=0,_t=Q;_t;_t=ge(_t))nt++;_t=0;for(var fe=k;fe;fe=ge(fe))_t++;for(;0<nt-_t;)Q=ge(Q),nt--;for(;0<_t-nt;)k=ge(k),_t--;for(;nt--;){if(Q===k||k!==null&&Q===k.alternate){ge=Q;break e}Q=ge(Q),k=ge(k)}ge=null}else ge=null;ct!==null&&W_(vt,st,ct,ge,!1),ae!==null&&un!==null&&W_(vt,un,ae,ge,!0)}}t:{if(st=it?zi(it):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var Ke=So;else if(Ha(st))if(Va)Ke=$S;else{Ke=QS;var ce=KS}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?it&&Ps(it.elementType)&&(Ke=So):Ke=JS;if(Ke&&(Ke=Ke(e,it))){js(vt,Ke,a,mt);break t}ce&&ce(e,st,it),e==="focusout"&&it&&st.type==="number"&&it.memoizedProps.value!=null&&vi(st,"number",st.value)}switch(ce=it?zi(it):window,e){case"focusin":(Ha(ce)||ce.contentEditable==="true")&&(yo=ce,Vh=it,Ol=null);break;case"focusout":Ol=Vh=yo=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,_0(vt,a,mt);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":_0(vt,a,mt)}var De;if(fi)t:{switch(e){case"compositionstart":var He="onCompositionStart";break t;case"compositionend":He="onCompositionEnd";break t;case"compositionupdate":He="onCompositionUpdate";break t}He=void 0}else $e?Ue(e,a)&&(He="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(He="onCompositionStart");He&&(Ci&&a.locale!=="ko"&&($e||He!=="onCompositionStart"?He==="onCompositionEnd"&&$e&&(De=Nl()):(ea=mt,rs="value"in ea?ea.value:ea.textContent,$e=!0)),ce=Lu(it,He),0<ce.length&&(He=new re(He,e,null,a,mt),vt.push({event:He,listeners:ce}),De?He.data=De:(De=Be(a),De!==null&&(He.data=De)))),(De=Zn?An(e,a):yi(e,a))&&(He=Lu(it,"onBeforeInput"),0<He.length&&(ce=new re("onBeforeInput","beforeinput",null,a,mt),vt.push({event:ce,listeners:He}),ce.data=De)),By(vt,e,it,a,mt)}k_(vt,n)})}function sc(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Lu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=ss(e,a),u!=null&&o.unshift(sc(e,u,h)),u=ss(e,n),u!=null&&o.push(sc(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Vy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function W_(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var A=a,H=A.alternate,it=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||it===null||(H=it,u?(it=ss(a,h),it!=null&&x.unshift(sc(a,it,H))):u||(it=ss(a,h),it!=null&&x.push(sc(a,it,H)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var ky=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function Y_(e){return(typeof e=="string"?e:""+e).replace(ky,`
`).replace(Xy,"")}function q_(e,n){return n=Y_(n),Y_(e)===n}function cn(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ii(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ii(e,""+o);break;case"className":Me(e,"class",o);break;case"tabIndex":Me(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Me(e,a,o);break;case"style":Hi(e,o,h);break;case"data":if(n!=="object"){Me(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&cn(e,n,"name",u.name,u,null),cn(e,n,"formEncType",u.formEncType,u,null),cn(e,n,"formMethod",u.formMethod,u,null),cn(e,n,"formTarget",u.formTarget,u,null)):(cn(e,n,"encType",u.encType,u,null),cn(e,n,"method",u.method,u,null),cn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ta);break;case"onScroll":o!=null&&Fe("scroll",e);break;case"onScrollEnd":o!=null&&Fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Dr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Fe("beforetoggle",e),Fe("toggle",e),_e(e,"popover",o);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":_e(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cl.get(a)||a,_e(e,a,o))}}function pp(e,n,a,o,u,h){switch(a){case"style":Hi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ii(e,o):(typeof o=="number"||typeof o=="bigint")&&ii(e,""+o);break;case"onScroll":o!=null&&Fe("scroll",e);break;case"onScrollEnd":o!=null&&Fe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Cn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):_e(e,a,o)}}}function oi(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",e),Fe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:cn(e,n,h,x,a,null)}}u&&cn(e,n,"srcSet",a.srcSet,a,null),o&&cn(e,n,"src",a.src,a,null);return;case"input":Fe("invalid",e);var A=h=x=u=null,H=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":x=mt;break;case"checked":H=mt;break;case"defaultChecked":it=mt;break;case"value":h=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:cn(e,n,o,mt,a,null)}}vn(e,h,A,H,it,x,u,!1);return;case"select":Fe("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:cn(e,n,u,A,a,null)}n=h,a=x,e.multiple=!!o,n!=null?ci(e,!!o,n,!1):a!=null&&ci(e,!!o,a,!0);return;case"textarea":Fe("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:cn(e,n,x,A,a,null)}yn(e,o,u,h);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":cn(e,n,H,o,a,null));return;case"dialog":Fe("beforetoggle",e),Fe("toggle",e),Fe("cancel",e),Fe("close",e);break;case"iframe":case"object":Fe("load",e);break;case"video":case"audio":for(o=0;o<ac.length;o++)Fe(ac[o],e);break;case"image":Fe("error",e),Fe("load",e);break;case"details":Fe("toggle",e);break;case"embed":case"source":case"link":Fe("error",e),Fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:cn(e,n,it,o,a,null)}return;default:if(Ps(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&pp(e,n,mt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&cn(e,n,A,o,a,null))}function Wy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,A=null,H=null,it=null,mt=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=vt;default:o.hasOwnProperty(ct)||cn(e,n,ct,null,o,vt)}}for(var st in o){var ct=o[st];if(vt=a[st],o.hasOwnProperty(st)&&(ct!=null||vt!=null))switch(st){case"type":h=ct;break;case"name":u=ct;break;case"checked":it=ct;break;case"defaultChecked":mt=ct;break;case"value":x=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==vt&&cn(e,n,st,ct,o,vt)}}_n(e,x,A,H,it,mt,h,u);return;case"select":ct=x=A=st=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ct=H;default:o.hasOwnProperty(h)||cn(e,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":st=h;break;case"defaultValue":A=h;break;case"multiple":x=h;default:h!==H&&cn(e,n,u,h,o,H)}n=A,a=x,o=ct,st!=null?ci(e,!!a,st,!1):!!o!=!!a&&(n!=null?ci(e,!!a,n,!0):ci(e,!!a,a?[]:"",!1));return;case"textarea":ct=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:cn(e,n,A,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":st=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&cn(e,n,x,u,o,h)}Ee(e,st,ct);return;case"option":for(var ae in a)st=a[ae],a.hasOwnProperty(ae)&&st!=null&&!o.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:cn(e,n,ae,null,o,st));for(H in o)st=o[H],ct=a[H],o.hasOwnProperty(H)&&st!==ct&&(st!=null||ct!=null)&&(H==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":cn(e,n,H,st,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)st=a[ge],a.hasOwnProperty(ge)&&st!=null&&!o.hasOwnProperty(ge)&&cn(e,n,ge,null,o,st);for(it in o)if(st=o[it],ct=a[it],o.hasOwnProperty(it)&&st!==ct&&(st!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:cn(e,n,it,st,o,ct)}return;default:if(Ps(n)){for(var un in a)st=a[un],a.hasOwnProperty(un)&&st!==void 0&&!o.hasOwnProperty(un)&&pp(e,n,un,void 0,o,st);for(mt in o)st=o[mt],ct=a[mt],!o.hasOwnProperty(mt)||st===ct||st===void 0&&ct===void 0||pp(e,n,mt,st,o,ct);return}}for(var Q in a)st=a[Q],a.hasOwnProperty(Q)&&st!=null&&!o.hasOwnProperty(Q)&&cn(e,n,Q,null,o,st);for(vt in o)st=o[vt],ct=a[vt],!o.hasOwnProperty(vt)||st===ct||st==null&&ct==null||cn(e,n,vt,st,o,ct)}function j_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,A=u.duration;if(h&&A&&j_(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],it=H.startTime;if(it>A)break;var mt=H.transferSize,vt=H.initiatorType;mt&&j_(vt)&&(H=H.responseEnd,x+=mt*(H<A?1:(A-it)/(H-it)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mp=null,gp=null;function Ou(e){return e.nodeType===9?e:e.ownerDocument}function Z_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function _p(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vp=null;function qy(){var e=window.event;return e&&e.type==="popstate"?e===vp?!1:(vp=e,!0):(vp=null,!1)}var Q_=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,J_=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof J_<"u"?function(e){return J_.resolve(null).then(e).catch(Ky)}:Q_;function Ky(e){setTimeout(function(){throw e})}function fr(e){return e==="head"}function $_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),jo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")rc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,rc(a);for(var h=a.firstChild;h;){var x=h.nextSibling,A=h.nodeName;h[Bi]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&rc(e.ownerDocument.body);a=u}while(a);jo(n)}function tv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function xp(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xp(a),is(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Qy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Bi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=ca(e.nextSibling),e===null)break}return null}function Jy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ca(e.nextSibling),e===null))return null;return e}function ev(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ca(e.nextSibling),e===null))return null;return e}function Sp(e){return e.data==="$?"||e.data==="$~"}function yp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $y(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ca(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Mp=null;function nv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ca(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function iv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function av(e,n,a){switch(n=Ou(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function rc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);is(e)}var ua=new Map,sv=new Set;function Iu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Es=P.d;P.d={f:tM,r:eM,D:nM,C:iM,L:aM,m:sM,X:oM,S:rM,M:lM};function tM(){var e=Es.f(),n=Au();return e||n}function eM(e){var n=hn(e);n!==null&&n.tag===5&&n.type==="form"?Mg(n):Es.r(e)}var Wo=typeof document>"u"?null:document;function rv(e,n,a){var o=Wo;if(o&&typeof n=="string"&&n){var u=xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),sv.has(u)||(sv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),oi(n,"link",e),X(n),o.head.appendChild(n)))}}function nM(e){Es.D(e),rv("dns-prefetch",e,null)}function iM(e,n){Es.C(e,n),rv("preconnect",e,n)}function aM(e,n,a){Es.L(e,n,a);var o=Wo;if(o&&e&&n){var u='link[rel="preload"][as="'+xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xe(a.imageSizes)+'"]')):u+='[href="'+xe(e)+'"]';var h=u;switch(n){case"style":h=Yo(e);break;case"script":h=qo(e)}ua.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ua.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(oc(h))||n==="script"&&o.querySelector(lc(h))||(n=o.createElement("link"),oi(n,"link",e),X(n),o.head.appendChild(n)))}}function sM(e,n){Es.m(e,n);var a=Wo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xe(o)+'"][href="'+xe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=qo(e)}if(!ua.has(h)&&(e=v({rel:"modulepreload",href:e},n),ua.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(lc(h)))return}o=a.createElement("link"),oi(o,"link",e),X(o),a.head.appendChild(o)}}}function rM(e,n,a){Es.S(e,n,a);var o=Wo;if(o&&e){var u=R(o).hoistableStyles,h=Yo(e);n=n||"default";var x=u.get(h);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(oc(h)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ua.get(h))&&Ep(e,a);var H=x=o.createElement("link");X(H),oi(H,"link",e),H._p=new Promise(function(it,mt){H.onload=it,H.onerror=mt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Pu(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(h,x)}}}function oM(e,n){Es.X(e,n);var a=Wo;if(a&&e){var o=R(a).hoistableScripts,u=qo(e),h=o.get(u);h||(h=a.querySelector(lc(u)),h||(e=v({src:e,async:!0},n),(n=ua.get(u))&&bp(e,n),h=a.createElement("script"),X(h),oi(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function lM(e,n){Es.M(e,n);var a=Wo;if(a&&e){var o=R(a).hoistableScripts,u=qo(e),h=o.get(u);h||(h=a.querySelector(lc(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=ua.get(u))&&bp(e,n),h=a.createElement("script"),X(h),oi(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function ov(e,n,a,o){var u=(u=tt.current)?Iu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Yo(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Yo(a.href);var h=R(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(oc(e)))&&!h._p&&(x.instance=h,x.state.loading=5),ua.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ua.set(e,a),h||cM(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qo(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Yo(e){return'href="'+xe(e)+'"'}function oc(e){return'link[rel="stylesheet"]['+e+"]"}function lv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function cM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),oi(n,"link",a),X(n),e.head.appendChild(n))}function qo(e){return'[src="'+xe(e)+'"]'}function lc(e){return"script[async]"+e}function cv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xe(a.href)+'"]');if(o)return n.instance=o,X(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),oi(o,"style",u),Pu(o,a.precedence,e),n.instance=o;case"stylesheet":u=Yo(a.href);var h=e.querySelector(oc(u));if(h)return n.state.loading|=4,n.instance=h,X(h),h;o=lv(a),(u=ua.get(u))&&Ep(o,u),h=(e.ownerDocument||e).createElement("link"),X(h);var x=h;return x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),oi(h,"link",o),n.state.loading|=4,Pu(h,a.precedence,e),n.instance=h;case"script":return h=qo(a.src),(u=e.querySelector(lc(h)))?(n.instance=u,X(u),u):(o=a,(u=ua.get(h))&&(o=v({},a),bp(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),oi(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Pu(o,a.precedence,e));return n.instance}function Pu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ep(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fu=null;function uv(e,n,a){if(Fu===null){var o=new Map,u=Fu=new Map;u.set(a,o)}else u=Fu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Bi]||h[En]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(h):o.set(x,[h])}}return o}function fv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Yo(o.href),h=n.querySelector(oc(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Bu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,X(h);return}h=n.ownerDocument||n,o=lv(o),(u=ua.get(u))&&Ep(o,u),h=h.createElement("link"),X(h);var x=h;x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),oi(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Bu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Tp=0;function hM(e,n){return e.stylesheets&&e.count===0&&Hu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Hu(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Tp===0&&(Tp=62500*Yy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hu(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Tp?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Bu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zu=null;function Hu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zu=new Map,n.forEach(dM,e),zu=null,Bu.call(e))}function dM(e,n){if(!(n.state.loading&4)){var a=zu.get(e);if(a)var o=a.get(null);else{a=new Map,zu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=Bu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var cc={$$typeof:U,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function pM(e,n,a,o,u,h,x,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ie(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ie(0),this.hiddenUpdates=Ie(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function dv(e,n,a,o,u,h,x,A,H,it,mt,vt){return e=new pM(e,n,a,x,H,it,mt,vt,A),n=1,h===!0&&(n|=24),h=ki(3,null,null,n),e.current=h,h.stateNode=e,n=ad(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},ld(h),e}function pv(e){return e?(e=bo,e):bo}function mv(e,n,a,o,u,h){u=pv(u),o.context===null?o.context=u:o.pendingContext=u,o=tr(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=er(e,o,n),a!==null&&(Oi(a,e,n),Gl(a,e,n))}function gv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ap(e,n){gv(e,n),(e=e.alternate)&&gv(e,n)}function _v(e){if(e.tag===13||e.tag===31){var n=Br(e,67108864);n!==null&&Oi(n,e,67108864),Ap(e,67108864)}}function vv(e){if(e.tag===13||e.tag===31){var n=ji();n=ts(n);var a=Br(e,n);a!==null&&Oi(a,e,n),Ap(e,n)}}var Gu=!0;function mM(e,n,a,o){var u=O.T;O.T=null;var h=P.p;try{P.p=2,Rp(e,n,a,o)}finally{P.p=h,O.T=u}}function gM(e,n,a,o){var u=O.T;O.T=null;var h=P.p;try{P.p=8,Rp(e,n,a,o)}finally{P.p=h,O.T=u}}function Rp(e,n,a,o){if(Gu){var u=Cp(o);if(u===null)dp(e,n,o,Vu,a),Sv(e,o);else if(vM(u,e,n,a,o))o.stopPropagation();else if(Sv(e,o),n&4&&-1<_M.indexOf(e)){for(;u!==null;){var h=hn(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=bt(h.pendingLanes);if(x!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var H=1<<31-Ht(x);A.entanglements[1]|=H,x&=~H}Ya(h),(tn&6)===0&&(bu=b()+500,ic(0))}}break;case 31:case 13:A=Br(h,2),A!==null&&Oi(A,h,2),Au(),Ap(h,2)}if(h=Cp(o),h===null&&dp(e,n,o,Vu,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else dp(e,n,o,null,a)}}function Cp(e){return e=Fa(e),wp(e)}var Vu=null;function wp(e){if(Vu=null,e=$i(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Vu=e,null}function xv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case dt:return 2;case St:return 8;case lt:case Vt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Dp=!1,hr=null,dr=null,pr=null,uc=new Map,fc=new Map,mr=[],_M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(e,n){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":uc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fc.delete(n.pointerId)}}function hc(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=hn(n),n!==null&&_v(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function vM(e,n,a,o,u){switch(n){case"focusin":return hr=hc(hr,e,n,a,o,u),!0;case"dragenter":return dr=hc(dr,e,n,a,o,u),!0;case"mouseover":return pr=hc(pr,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return uc.set(h,hc(uc.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,fc.set(h,hc(fc.get(h)||null,e,n,a,o,u)),!0}return!1}function yv(e){var n=$i(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,ns(e.priority,function(){vv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,ns(e.priority,function(){vv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ku(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Cp(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Fs=o,a.target.dispatchEvent(o),Fs=null}else return n=hn(a),n!==null&&_v(n),e.blockedOn=a,!1;n.shift()}return!0}function Mv(e,n,a){ku(e)&&a.delete(n)}function xM(){Dp=!1,hr!==null&&ku(hr)&&(hr=null),dr!==null&&ku(dr)&&(dr=null),pr!==null&&ku(pr)&&(pr=null),uc.forEach(Mv),fc.forEach(Mv)}function Xu(e,n){e.blockedOn===n&&(e.blockedOn=null,Dp||(Dp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xM)))}var Wu=null;function Ev(e){Wu!==e&&(Wu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wu===e&&(Wu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(wp(o||a)===null)continue;break}var h=hn(a);h!==null&&(e.splice(n,3),n-=3,Cd(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function jo(e){function n(H){return Xu(H,e)}hr!==null&&Xu(hr,e),dr!==null&&Xu(dr,e),pr!==null&&Xu(pr,e),uc.forEach(n),fc.forEach(n);for(var a=0;a<mr.length;a++){var o=mr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<mr.length&&(a=mr[0],a.blockedOn===null);)yv(a),a.blockedOn===null&&mr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[Cn]||null;if(typeof h=="function")x||Ev(a);else if(x){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[Cn]||null)A=x.formAction;else if(wp(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Ev(a)}}}function bv(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Np(e){this._internalRoot=e}Yu.prototype.render=Np.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ji();mv(a,o,e,n,null,null)},Yu.prototype.unmount=Np.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mv(e.current,2,null,e,null,null),Au(),n[Fi]=null}};function Yu(e){this._internalRoot=e}Yu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<mr.length&&n!==0&&n<mr[a].priority;a++);mr.splice(a,0,e),a===0&&yv(e)}};var Tv=t.version;if(Tv!=="19.2.4")throw Error(s(527,Tv,"19.2.4"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var SM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Et=qu.inject(SM),Mt=qu}catch{}}return pc.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Ug,h=Lg,x=Og;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=dv(e,1,!1,null,null,a,o,null,u,h,x,bv),e[Fi]=n.current,hp(e),new Np(n)},pc.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Ug,x=Lg,A=Og,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=dv(e,1,!0,n,a??null,o,u,H,h,x,A,bv),n.context=pv(null),a=n.current,o=ji(),o=ts(o),u=tr(o),u.callback=null,er(a,u,o),a=o,n.current.lanes=a,kn(n,a),Ya(n),e[Fi]=n.current,hp(e),new Yu(n)},pc.version="19.2.4",pc}var Iv;function DM(){if(Iv)return Op.exports;Iv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Op.exports=wM(),Op.exports}var NM=DM();const Sh="183",Fx=0,Mm=1,Bx=2,ml=1,zx=2,hl=3,Ls=0,_i=1,Vn=2,Qa=0,oo=1,Em=2,bm=3,Tm=4,Hx=5,br=100,Gx=101,Vx=102,kx=103,Xx=104,Wx=200,Yx=201,qx=202,jx=203,Df=204,Nf=205,Zx=206,Kx=207,Qx=208,Jx=209,$x=210,tS=211,eS=212,nS=213,iS=214,Uf=0,Lf=1,Of=2,lo=3,If=4,Pf=5,Ff=6,Bf=7,yh=0,aS=1,sS=2,Na=0,Bm=1,zm=2,Hm=3,Mh=4,Gm=5,Vm=6,km=7,Xm=300,Rr=301,co=302,bf=303,Tf=304,zc=306,_l=1e3,Ka=1001,zf=1002,Jn=1003,rS=1004,Ac=1005,$n=1006,Af=1007,Ns=1008,Ii=1009,Wm=1010,Ym=1011,vl=1012,Eh=1013,La=1014,pa=1015,Ja=1016,bh=1017,Th=1018,xl=1020,qm=35902,jm=35899,Zm=1021,Km=1022,ma=1023,$a=1026,Tr=1027,Ah=1028,Rh=1029,uo=1030,Ch=1031,wh=1033,Cc=33776,wc=33777,Dc=33778,Nc=33779,Hf=35840,Gf=35841,Vf=35842,kf=35843,Xf=36196,Wf=37492,Yf=37496,qf=37488,jf=37489,Zf=37490,Kf=37491,Qf=37808,Jf=37809,$f=37810,th=37811,eh=37812,nh=37813,ih=37814,ah=37815,sh=37816,rh=37817,oh=37818,lh=37819,ch=37820,uh=37821,fh=36492,hh=36494,dh=36495,ph=36283,mh=36284,gh=36285,_h=36286,oS=3200,Dh=0,lS=1,ws="",Wn="srgb",fo="srgb-linear",Ic="linear",en="srgb",ao=7680,Am=519,cS=512,uS=513,fS=514,Nh=515,hS=516,dS=517,Uh=518,pS=519,Rm=35044,Cm="300 es",Da=2e3,Sl=2001;function UM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function vh(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mS(){const r=vh("canvas");return r.style.display="block",r}const Pv={};function wm(...r){const t="THREE."+r.shift();console.log(t,...r)}function gS(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Se(...r){r=gS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Xe(...r){r=gS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Pc(...r){const t=r.join(" ");t in Pv||(Pv[t]=!0,Se(...r))}function LM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const OM={[Uf]:Lf,[Of]:Ff,[If]:Bf,[lo]:Pf,[Lf]:Uf,[Ff]:Of,[Bf]:If,[Pf]:lo};class ho{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fv=1234567;const Uc=Math.PI/180,yl=180/Math.PI;function bl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(pi[r&255]+pi[r>>8&255]+pi[r>>16&255]+pi[r>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[i&63|128]+pi[i>>8&255]+"-"+pi[i>>16&255]+pi[i>>24&255]+pi[s&255]+pi[s>>8&255]+pi[s>>16&255]+pi[s>>24&255]).toLowerCase()}function Le(r,t,i){return Math.max(t,Math.min(i,r))}function Qm(r,t){return(r%t+t)%t}function IM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function PM(r,t,i){return r!==t?(i-r)/(t-r):0}function Lc(r,t,i){return(1-i)*r+i*t}function FM(r,t,i,s){return Lc(r,t,1-Math.exp(-i*s))}function BM(r,t=1){return t-Math.abs(Qm(r,t*2)-t)}function zM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function HM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function GM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function VM(r,t){return r+Math.random()*(t-r)}function kM(r){return r*(.5-Math.random())}function XM(r){r!==void 0&&(Fv=r);let t=Fv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function WM(r){return r*Uc}function YM(r){return r*yl}function qM(r){return(r&r-1)===0&&r!==0}function jM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ZM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function KM(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*_,m*v,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*E,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*E,d*p);break;case"ZYZ":r.set(m*E,m*y,d*_,d*p);break;default:Se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function fl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ei(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gi={DEG2RAD:Uc,RAD2DEG:yl,generateUUID:bl,clamp:Le,euclideanModulo:Qm,mapLinear:IM,inverseLerp:PM,lerp:Lc,damp:FM,pingpong:BM,smoothstep:zM,smootherstep:HM,randInt:GM,randFloat:VM,randFloatSpread:kM,seededRandom:XM,degToRad:WM,radToDeg:YM,isPowerOfTwo:qM,ceilPowerOfTwo:jM,floorPowerOfTwo:ZM,setQuaternionFromProperEuler:KM,normalize:Ei,denormalize:fl};class Oe{constructor(t=0,i=0){Oe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class po{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],y=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==y||_!==E){let M=m*g+p*y+_*E+v*w;M<0&&(g=-g,y=-y,E=-E,w=-w,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),U=Math.sin(C);S=Math.sin(S*C)/U,d=Math.sin(d*C)/U,m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,v=v*S+w*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,v=v*S+w*d;const C=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=C,p*=C,_*=C,v*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],y=c[f+2],E=c[f+3];return t[i]=d*E+_*v+m*y-p*g,t[i+1]=m*E+_*g+p*v-d*y,t[i+2]=p*E+_*y+d*g-m*v,t[i+3]=_*E-d*v-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"YXZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"ZXY":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"ZYX":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"YZX":this._x=g*_*v+p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v-g*y*E;break;case"XZY":this._x=g*_*v-p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v+g*y*E;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Bv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Bv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Bp.copy(this).projectOnVector(t),this.sub(Bp)}reflect(t){return this.sub(Bp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bp=new Z,Bv=new po;class we{constructor(t,i,s,l,c,f,d,m,p){we.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],y=s[5],E=s[8],w=l[0],M=l[3],S=l[6],C=l[1],U=l[4],D=l[7],F=l[2],B=l[5],z=l[8];return c[0]=f*w+d*C+m*F,c[3]=f*M+d*U+m*B,c[6]=f*S+d*D+m*z,c[1]=p*w+_*C+v*F,c[4]=p*M+_*U+v*B,c[7]=p*S+_*D+v*z,c[2]=g*w+y*C+E*F,c[5]=g*M+y*U+E*B,c[8]=g*S+y*D+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,y=p*c-f*m,E=i*v+s*g+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*f)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=y*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(zp.makeScale(t,i)),this}rotate(t){return this.premultiply(zp.makeRotation(-t)),this}translate(t,i){return this.premultiply(zp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zp=new we,zv=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hv=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QM(){const r={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===en&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===en&&(l.r=gl(l.r),l.g=gl(l.g),l.b=gl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ws?Ic:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Pc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Pc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[fo]:{primaries:t,whitePoint:s,transfer:Ic,toXYZ:zv,fromXYZ:Hv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:s,transfer:en,toXYZ:zv,fromXYZ:Hv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const We=QM();function Us(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zo;class _S{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Zo===void 0&&(Zo=vh("canvas")),Zo.width=t.width,Zo.height=t.height;const l=Zo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Zo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=vh("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Us(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Us(i[s]/255)*255):i[s]=Us(i[s]);return{data:i,width:t.width,height:t.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let JM=0;class Lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=bl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Hp(l[f].image)):c.push(Hp(l[f]))}else c=Hp(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Hp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_S.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}let $M=0;const Gp=new Z;class li extends ho{constructor(t=li.DEFAULT_IMAGE,i=li.DEFAULT_MAPPING,s=Ka,l=Ka,c=$n,f=Ns,d=ma,m=Ii,p=li.DEFAULT_ANISOTROPY,_=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=bl(),this.name="",this.source=new Lh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gp).x}get height(){return this.source.getSize(Gp).y}get depth(){return this.source.getSize(Gp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _l:t.x=t.x-Math.floor(t.x);break;case Ka:t.x=t.x<0?0:1;break;case zf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _l:t.y=t.y-Math.floor(t.y);break;case Ka:t.y=t.y<0?0:1;break;case zf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=Xm;li.DEFAULT_ANISOTROPY=1;class Rn{constructor(t=0,i=0,s=0,l=1){Rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],y=m[5],E=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(y+1)/2,F=(S+1)/2,B=(_+g)/4,z=(v+w)/4,T=(E+M)/4;return U>D&&U>F?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=B/s,c=z/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=T/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-E)*(M-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(v-w)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this.w=Le(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this.w=Le(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vS extends ho{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Rn(0,0,t,i),this.scissorTest=!1,this.viewport=new Rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new li(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Lh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ua extends vS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Jm extends li{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xS extends li{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(t,i,s,l,c,f,d,m,p,_,v,g,y,E,w,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,v,g,y,E,w,M)}set(t,i,s,l,c,f,d,m,p,_,v,g,y,E,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=E,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ko.setFromMatrixColumn(t,0).length(),c=1/Ko.setFromMatrixColumn(t,1).length(),f=1/Ko.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,y=f*v,E=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,y=m*v,E=p*_,w=p*v;i[0]=g+w*d,i[4]=E*d-y,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=y*d-E,i[6]=w+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,y=m*v,E=p*_,w=p*v;i[0]=g-w*d,i[4]=-f*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*_,i[9]=w-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,y=f*v,E=d*_,w=d*v;i[0]=m*_,i[4]=E*p-y,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=w-g*v,i[8]=E*v+y,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*v+E,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,y=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tE,t,eE)}lookAt(t,i,s){const l=this.elements;return Zi.subVectors(t,i),Zi.lengthSq()===0&&(Zi.z=1),Zi.normalize(),_r.crossVectors(s,Zi),_r.lengthSq()===0&&(Math.abs(s.z)===1?Zi.x+=1e-4:Zi.z+=1e-4,Zi.normalize(),_r.crossVectors(s,Zi)),_r.normalize(),ju.crossVectors(Zi,_r),l[0]=_r.x,l[4]=ju.x,l[8]=Zi.x,l[1]=_r.y,l[5]=ju.y,l[9]=Zi.y,l[2]=_r.z,l[6]=ju.z,l[10]=Zi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],y=s[13],E=s[2],w=s[6],M=s[10],S=s[14],C=s[3],U=s[7],D=s[11],F=s[15],B=l[0],z=l[4],T=l[8],N=l[12],ft=l[1],G=l[5],K=l[9],at=l[13],J=l[2],j=l[6],O=l[10],P=l[14],rt=l[3],ht=l[7],yt=l[11],I=l[15];return c[0]=f*B+d*ft+m*J+p*rt,c[4]=f*z+d*G+m*j+p*ht,c[8]=f*T+d*K+m*O+p*yt,c[12]=f*N+d*at+m*P+p*I,c[1]=_*B+v*ft+g*J+y*rt,c[5]=_*z+v*G+g*j+y*ht,c[9]=_*T+v*K+g*O+y*yt,c[13]=_*N+v*at+g*P+y*I,c[2]=E*B+w*ft+M*J+S*rt,c[6]=E*z+w*G+M*j+S*ht,c[10]=E*T+w*K+M*O+S*yt,c[14]=E*N+w*at+M*P+S*I,c[3]=C*B+U*ft+D*J+F*rt,c[7]=C*z+U*G+D*j+F*ht,c[11]=C*T+U*K+D*O+F*yt,c[15]=C*N+U*at+D*P+F*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],y=t[14],E=t[3],w=t[7],M=t[11],S=t[15],C=m*y-p*g,U=d*y-p*v,D=d*g-m*v,F=f*y-p*_,B=f*g-m*_,z=f*v-d*_;return i*(w*C-M*U+S*D)-s*(E*C-M*F+S*B)+l*(E*U-w*F+S*z)-c*(E*D-w*B+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],y=t[11],E=t[12],w=t[13],M=t[14],S=t[15],C=i*d-s*f,U=i*m-l*f,D=i*p-c*f,F=s*m-l*d,B=s*p-c*d,z=l*p-c*m,T=_*w-v*E,N=_*M-g*E,ft=_*S-y*E,G=v*M-g*w,K=v*S-y*w,at=g*S-y*M,J=C*at-U*K+D*G+F*ft-B*N+z*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/J;return t[0]=(d*at-m*K+p*G)*j,t[1]=(l*K-s*at-c*G)*j,t[2]=(w*z-M*B+S*F)*j,t[3]=(g*B-v*z-y*F)*j,t[4]=(m*ft-f*at-p*N)*j,t[5]=(i*at-l*ft+c*N)*j,t[6]=(M*D-E*z-S*U)*j,t[7]=(_*z-g*D+y*U)*j,t[8]=(f*K-d*ft+p*T)*j,t[9]=(s*ft-i*K-c*T)*j,t[10]=(E*B-w*D+S*C)*j,t[11]=(v*D-_*B-y*C)*j,t[12]=(d*N-f*G-m*T)*j,t[13]=(i*G-s*N+l*T)*j,t[14]=(w*U-E*F-M*C)*j,t[15]=(_*F-v*U+g*C)*j,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,v=d+d,g=c*p,y=c*_,E=c*v,w=f*_,M=f*v,S=d*v,C=m*p,U=m*_,D=m*v,F=s.x,B=s.y,z=s.z;return l[0]=(1-(w+S))*F,l[1]=(y+D)*F,l[2]=(E-U)*F,l[3]=0,l[4]=(y-D)*B,l[5]=(1-(g+S))*B,l[6]=(M+C)*B,l[7]=0,l[8]=(E+U)*z,l[9]=(M-C)*z,l[10]=(1-(g+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ko.set(l[0],l[1],l[2]).length();const d=Ko.set(l[4],l[5],l[6]).length(),m=Ko.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ta.copy(this);const p=1/f,_=1/d,v=1/m;return Ta.elements[0]*=p,Ta.elements[1]*=p,Ta.elements[2]*=p,Ta.elements[4]*=_,Ta.elements[5]*=_,Ta.elements[6]*=_,Ta.elements[8]*=v,Ta.elements[9]*=v,Ta.elements[10]*=v,i.setFromRotationMatrix(Ta),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=Da,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(d===Da)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===Sl)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Da,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(d===Da)E=-2/(f-c),w=-(f+c)/(f-c);else if(d===Sl)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ko=new Z,Ta=new fn,tE=new Z(0,0,0),eE=new Z(1,1,1),_r=new Z,ju=new Z,Zi=new Z,Gv=new fn,Vv=new po;class _a{constructor(t=0,i=0,s=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Le(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Le(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Le(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Gv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Vv.setFromEuler(this),this.setFromQuaternion(Vv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nE=0;const kv=new Z,Qo=new po,bs=new fn,Zu=new Z,mc=new Z,iE=new Z,aE=new po,Xv=new Z(1,0,0),Wv=new Z(0,1,0),Yv=new Z(0,0,1),qv={type:"added"},sE={type:"removed"},Jo={type:"childadded",child:null},Vp={type:"childremoved",child:null};class pn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=bl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new Z,i=new _a,s=new po,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new we}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Qo.setFromAxisAngle(t,i),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(t,i){return Qo.setFromAxisAngle(t,i),this.quaternion.premultiply(Qo),this}rotateX(t){return this.rotateOnAxis(Xv,t)}rotateY(t){return this.rotateOnAxis(Wv,t)}rotateZ(t){return this.rotateOnAxis(Yv,t)}translateOnAxis(t,i){return kv.copy(t).applyQuaternion(this.quaternion),this.position.add(kv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Xv,t)}translateY(t){return this.translateOnAxis(Wv,t)}translateZ(t){return this.translateOnAxis(Yv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Zu.copy(t):Zu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),mc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(mc,Zu,this.up):bs.lookAt(Zu,mc,this.up),this.quaternion.setFromRotationMatrix(bs),l&&(bs.extractRotation(l.matrixWorld),Qo.setFromRotationMatrix(bs),this.quaternion.premultiply(Qo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qv),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(sE),Vp.child=t,this.dispatchEvent(Vp),Vp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bs.multiply(t.parent.matrixWorld)),t.applyMatrix4(bs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qv),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,t,iE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,aE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}pn.DEFAULT_UP=new Z(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dl extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rE={type:"move"};class Rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(rE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new dl;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const SS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function kp(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=We.workingColorSpace){return this.r=t,this.g=i,this.b=s,We.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=We.workingColorSpace){if(t=Qm(t,1),i=Le(i,0,1),s=Le(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=kp(f,c,t+1/3),this.g=kp(f,c,t),this.b=kp(f,c,t-1/3)}return We.colorSpaceToWorking(this,l),this}setStyle(t,i=Wn){function s(c){c!==void 0&&parseFloat(c)<1&&Se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);Se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Wn){const s=SS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=gl(t.r),this.g=gl(t.g),this.b=gl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return We.workingToColorSpace(mi.copy(this),t),Math.round(Le(mi.r*255,0,255))*65536+Math.round(Le(mi.g*255,0,255))*256+Math.round(Le(mi.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=We.workingColorSpace){We.workingToColorSpace(mi.copy(this),i);const s=mi.r,l=mi.g,c=mi.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=We.workingColorSpace){return We.workingToColorSpace(mi.copy(this),i),t.r=mi.r,t.g=mi.g,t.b=mi.b,t}getStyle(t=Wn){We.workingToColorSpace(mi.copy(this),t);const i=mi.r,s=mi.g,l=mi.b;return t!==Wn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(vr),this.setHSL(vr.h+t,vr.s+i,vr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(vr),t.getHSL(Ku);const s=Lc(vr.h,Ku.h,i),l=Lc(vr.s,Ku.s,i),c=Lc(vr.l,Ku.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mi=new me;me.NAMES=SS;class Fc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new me(t),this.near=i,this.far=s}clone(){return new Fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $m extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Aa=new Z,Ts=new Z,Xp=new Z,As=new Z,$o=new Z,tl=new Z,jv=new Z,Wp=new Z,Yp=new Z,qp=new Z,jp=new Rn,Zp=new Rn,Kp=new Rn;class da{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Aa.subVectors(t,i),l.cross(Aa);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Aa.subVectors(l,i),Ts.subVectors(s,i),Xp.subVectors(t,i);const f=Aa.dot(Aa),d=Aa.dot(Ts),m=Aa.dot(Xp),p=Ts.dot(Ts),_=Ts.dot(Xp),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(p*m-d*_)*g,E=(f*_-d*m)*g;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,As)===null?!1:As.x>=0&&As.y>=0&&As.x+As.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,As)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,As.x),m.addScaledVector(f,As.y),m.addScaledVector(d,As.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return jp.setScalar(0),Zp.setScalar(0),Kp.setScalar(0),jp.fromBufferAttribute(t,i),Zp.fromBufferAttribute(t,s),Kp.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(jp,c.x),f.addScaledVector(Zp,c.y),f.addScaledVector(Kp,c.z),f}static isFrontFacing(t,i,s,l){return Aa.subVectors(s,i),Ts.subVectors(t,i),Aa.cross(Ts).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Aa.subVectors(this.c,this.b),Ts.subVectors(this.a,this.b),Aa.cross(Ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return da.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return da.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return da.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return da.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return da.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;$o.subVectors(l,s),tl.subVectors(c,s),Wp.subVectors(t,s);const m=$o.dot(Wp),p=tl.dot(Wp);if(m<=0&&p<=0)return i.copy(s);Yp.subVectors(t,l);const _=$o.dot(Yp),v=tl.dot(Yp);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector($o,f);qp.subVectors(t,c);const y=$o.dot(qp),E=tl.dot(qp);if(E>=0&&y<=E)return i.copy(c);const w=y*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(tl,d);const M=_*E-y*v;if(M<=0&&v-_>=0&&y-E>=0)return jv.subVectors(c,l),d=(v-_)/(v-_+(y-E)),i.copy(l).addScaledVector(jv,d);const S=1/(M+w+g);return f=w*S,d=g*S,i.copy(s).addScaledVector($o,f).addScaledVector(tl,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Cr{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ra.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ra.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ra.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ra):Ra.fromBufferAttribute(c,f),Ra.applyMatrix4(t.matrixWorld),this.expandByPoint(Ra);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Qu.copy(s.boundingBox)),Qu.applyMatrix4(t.matrixWorld),this.union(Qu)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ra),Ra.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gc),Ju.subVectors(this.max,gc),el.subVectors(t.a,gc),nl.subVectors(t.b,gc),il.subVectors(t.c,gc),xr.subVectors(nl,el),Sr.subVectors(il,nl),Qr.subVectors(el,il);let i=[0,-xr.z,xr.y,0,-Sr.z,Sr.y,0,-Qr.z,Qr.y,xr.z,0,-xr.x,Sr.z,0,-Sr.x,Qr.z,0,-Qr.x,-xr.y,xr.x,0,-Sr.y,Sr.x,0,-Qr.y,Qr.x,0];return!Qp(i,el,nl,il,Ju)||(i=[1,0,0,0,1,0,0,0,1],!Qp(i,el,nl,il,Ju))?!1:($u.crossVectors(xr,Sr),i=[$u.x,$u.y,$u.z],Qp(i,el,nl,il,Ju))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ra).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ra).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rs=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ra=new Z,Qu=new Cr,el=new Z,nl=new Z,il=new Z,xr=new Z,Sr=new Z,Qr=new Z,gc=new Z,Ju=new Z,$u=new Z,Jr=new Z;function Qp(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Jr.fromArray(r,c);const d=l.x*Math.abs(Jr.x)+l.y*Math.abs(Jr.y)+l.z*Math.abs(Jr.z),m=t.dot(Jr),p=i.dot(Jr),_=s.dot(Jr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Gn=new Z,tf=new Oe;let oE=0;class ga{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Rm,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)tf.fromBufferAttribute(this,i),tf.applyMatrix3(t),this.setXY(i,tf.x,tf.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix3(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=fl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ei(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=fl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ei(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=fl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ei(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=fl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ei(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=fl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ei(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ei(i,this.array),s=Ei(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ei(i,this.array),s=Ei(s,this.array),l=Ei(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ei(i,this.array),s=Ei(s,this.array),l=Ei(l,this.array),c=Ei(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rm&&(t.usage=this.usage),t}}class t0 extends ga{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class e0 extends ga{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ti extends ga{constructor(t,i,s){super(new Float32Array(t),i,s)}}const lE=new Cr,_c=new Z,Jp=new Z;class Tl{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):lE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_c.subVectors(t,this.center);const i=_c.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(_c,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_c.copy(t.center).add(Jp)),this.expandByPoint(_c.copy(t.center).sub(Jp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cE=0;const fa=new fn,$p=new pn,al=new Z,Ki=new Cr,vc=new Cr,Qn=new Z;class Qi extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=bl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(UM(t)?e0:t0)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new we().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fa.makeRotationFromQuaternion(t),this.applyMatrix4(fa),this}rotateX(t){return fa.makeRotationX(t),this.applyMatrix4(fa),this}rotateY(t){return fa.makeRotationY(t),this.applyMatrix4(fa),this}rotateZ(t){return fa.makeRotationZ(t),this.applyMatrix4(fa),this}translate(t,i,s){return fa.makeTranslation(t,i,s),this.applyMatrix4(fa),this}scale(t,i,s){return fa.makeScale(t,i,s),this.applyMatrix4(fa),this}lookAt(t){return $p.lookAt(t),$p.updateMatrix(),this.applyMatrix4($p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(al).negate(),this.translate(al.x,al.y,al.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ti(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ki.setFromBufferAttribute(c),this.morphTargetsRelative?(Qn.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(Qn),Qn.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(Qn)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(Ki.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];vc.setFromBufferAttribute(d),this.morphTargetsRelative?(Qn.addVectors(Ki.min,vc.min),Ki.expandByPoint(Qn),Qn.addVectors(Ki.max,vc.max),Ki.expandByPoint(Qn)):(Ki.expandByPoint(vc.min),Ki.expandByPoint(vc.max))}Ki.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Qn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Qn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Qn.fromBufferAttribute(d,p),m&&(al.fromBufferAttribute(t,p),Qn.add(al)),l=Math.max(l,s.distanceToSquared(Qn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ga(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new Z,m[T]=new Z;const p=new Z,_=new Z,v=new Z,g=new Oe,y=new Oe,E=new Oe,w=new Z,M=new Z;function S(T,N,ft){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,N),v.fromBufferAttribute(s,ft),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,N),E.fromBufferAttribute(c,ft),_.sub(p),v.sub(p),y.sub(g),E.sub(g);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(G),d[T].add(w),d[N].add(w),d[ft].add(w),m[T].add(M),m[N].add(M),m[ft].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,N=C.length;T<N;++T){const ft=C[T],G=ft.start,K=ft.count;for(let at=G,J=G+K;at<J;at+=3)S(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const U=new Z,D=new Z,F=new Z,B=new Z;function z(T){F.fromBufferAttribute(l,T),B.copy(F);const N=d[T];U.copy(N),U.sub(F.multiplyScalar(F.dot(N))).normalize(),D.crossVectors(B,N);const G=D.dot(m[T])<0?-1:1;f.setXYZW(T,U.x,U.y,U.z,G)}for(let T=0,N=C.length;T<N;++T){const ft=C[T],G=ft.start,K=ft.count;for(let at=G,J=G+K;at<J;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ga(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new Z,c=new Z,f=new Z,d=new Z,m=new Z,p=new Z,_=new Z,v=new Z;if(t)for(let g=0,y=t.count;g<y;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Qn.fromBufferAttribute(t,i),Qn.normalize(),t.setXYZ(i,Qn.x,Qn.y,Qn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let y=0,E=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*_;for(let S=0;S<_;S++)g[E++]=p[y++]}return new ga(g,_,v)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let uE=0;class mo extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=bl(),this.name="",this.type="Material",this.blending=oo,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=Nf,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(s.blending=this.blending),this.side!==Ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Df&&(s.blendSrc=this.blendSrc),this.blendDst!==Nf&&(s.blendDst=this.blendDst),this.blendEquation!==br&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Cs=new Z,tm=new Z,ef=new Z,yr=new Z,em=new Z,nf=new Z,nm=new Z;class n0{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cs)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Cs.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Cs.copy(this.origin).addScaledVector(this.direction,i),Cs.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){tm.copy(t).add(i).multiplyScalar(.5),ef.copy(i).sub(t).normalize(),yr.copy(this.origin).sub(tm);const c=t.distanceTo(i)*.5,f=-this.direction.dot(ef),d=yr.dot(this.direction),m=-yr.dot(ef),p=yr.lengthSq(),_=Math.abs(1-f*f);let v,g,y,E;if(_>0)if(v=f*m-d,g=f*d-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,y=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(tm).addScaledVector(ef,g),y}intersectSphere(t,i){Cs.subVectors(t.center,this.origin);const s=Cs.dot(this.direction),l=Cs.dot(Cs)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Cs)!==null}intersectTriangle(t,i,s,l,c){em.subVectors(i,t),nf.subVectors(s,t),nm.crossVectors(em,nf);let f=this.direction.dot(nm),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;yr.subVectors(this.origin,t);const m=d*this.direction.dot(nf.crossVectors(yr,nf));if(m<0)return null;const p=d*this.direction.dot(em.cross(yr));if(p<0||m+p>f)return null;const _=-d*yr.dot(nm);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bc extends mo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zv=new fn,$r=new n0,af=new Tl,Kv=new Z,sf=new Z,rf=new Z,of=new Z,im=new Z,lf=new Z,Qv=new Z,cf=new Z;class ke extends pn{constructor(t=new Qi,i=new Bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){lf.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(im.fromBufferAttribute(v,t),f?lf.addScaledVector(im,_):lf.addScaledVector(im.sub(i),_))}i.add(lf)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),af.copy(s.boundingSphere),af.applyMatrix4(c),$r.copy(t.ray).recast(t.near),!(af.containsPoint($r.origin)===!1&&($r.intersectSphere(af,Kv)===null||$r.origin.distanceToSquared(Kv)>(t.far-t.near)**2))&&(Zv.copy(c).invert(),$r.copy(t.ray).applyMatrix4(Zv),!(s.boundingBox!==null&&$r.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,$r)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=f[M.materialIndex],C=Math.max(M.start,y.start),U=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,F=U;D<F;D+=3){const B=d.getX(D),z=d.getX(D+1),T=d.getX(D+2);l=uf(this,S,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const C=d.getX(M),U=d.getX(M+1),D=d.getX(M+2);l=uf(this,f,t,s,p,_,v,C,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=f[M.materialIndex],C=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,F=U;D<F;D+=3){const B=D,z=D+1,T=D+2;l=uf(this,S,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const C=M,U=M+1,D=M+2;l=uf(this,f,t,s,p,_,v,C,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function fE(r,t,i,s,l,c,f,d){let m;if(t.side===_i?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===Ls,d),m===null)return null;cf.copy(d),cf.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(cf);return p<i.near||p>i.far?null:{distance:p,point:cf.clone(),object:r}}function uf(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,sf),r.getVertexPosition(m,rf),r.getVertexPosition(p,of);const _=fE(r,t,i,s,sf,rf,of,Qv);if(_){const v=new Z;da.getBarycoord(Qv,sf,rf,of,v),l&&(_.uv=da.getInterpolatedAttribute(l,d,m,p,v,new Oe)),c&&(_.uv1=da.getInterpolatedAttribute(c,d,m,p,v,new Oe)),f&&(_.normal=da.getInterpolatedAttribute(f,d,m,p,v,new Z),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new Z,materialIndex:0};da.getNormal(sf,rf,of,g.normal),_.face=g,_.barycoord=v}return _}class i0 extends li{constructor(t=null,i=1,s=1,l,c,f,d,m,p=Jn,_=Jn,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dm extends ga{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const sl=new fn,Jv=new fn,ff=[],$v=new Cr,hE=new fn,xc=new ke,Sc=new Tl;class yS extends ke{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Dm(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,hE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Cr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,sl),$v.copy(t.boundingBox).applyMatrix4(sl),this.boundingBox.union($v)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,sl),Sc.copy(t.boundingSphere).applyMatrix4(sl),this.boundingSphere.union(Sc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(xc.geometry=this.geometry,xc.material=this.material,xc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(s),t.ray.intersectsSphere(Sc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,sl),Jv.multiplyMatrices(s,sl),xc.matrixWorld=Jv,xc.raycast(t,ff);for(let f=0,d=ff.length;f<d;f++){const m=ff[f];m.instanceId=c,m.object=this,i.push(m)}ff.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Dm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new i0(new Float32Array(l*this.count),l,this.count,Ah,pa));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const am=new Z,dE=new Z,pE=new we;class Er{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=am.subVectors(s,i).cross(dE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(am),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||pE.getNormalMatrix(t),l=this.coplanarPoint(am).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const to=new Tl,mE=new Oe(.5,.5),hf=new Z;class Ih{constructor(t=new Er,i=new Er,s=new Er,l=new Er,c=new Er,f=new Er){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Da,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],y=c[7],E=c[8],w=c[9],M=c[10],S=c[11],C=c[12],U=c[13],D=c[14],F=c[15];if(l[0].setComponents(p-f,y-_,S-E,F-C).normalize(),l[1].setComponents(p+f,y+_,S+E,F+C).normalize(),l[2].setComponents(p+d,y+v,S+w,F+U).normalize(),l[3].setComponents(p-d,y-v,S-w,F-U).normalize(),s)l[4].setComponents(m,g,M,D).normalize(),l[5].setComponents(p-m,y-g,S-M,F-D).normalize();else if(l[4].setComponents(p-m,y-g,S-M,F-D).normalize(),i===Da)l[5].setComponents(p+m,y+g,S+M,F+D).normalize();else if(i===Sl)l[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),to.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(to)}intersectsSprite(t){to.center.set(0,0,0);const i=mE.distanceTo(t.center);return to.radius=.7071067811865476+i,to.applyMatrix4(t.matrixWorld),this.intersectsSphere(to)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(hf.x=l.normal.x>0?t.max.x:t.min.x,hf.y=l.normal.y>0?t.max.y:t.min.y,hf.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(hf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class a0 extends li{constructor(t=[],i=Rr,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pl extends li{constructor(t,i,s,l,c,f,d,m,p){super(t,i,s,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ml extends li{constructor(t,i,s=La,l,c,f,d=Jn,m=Jn,p,_=$a,v=1){if(_!==$a&&_!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class MS extends Ml{constructor(t,i=La,s=Rr,l,c,f=Jn,d=Jn,m,p=$a){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class s0 extends li{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wr extends Qi{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ti(p,3)),this.setAttribute("normal",new ti(_,3)),this.setAttribute("uv",new ti(v,2));function E(w,M,S,C,U,D,F,B,z,T,N){const ft=D/z,G=F/T,K=D/2,at=F/2,J=B/2,j=z+1,O=T+1;let P=0,rt=0;const ht=new Z;for(let yt=0;yt<O;yt++){const I=yt*G-at;for(let q=0;q<j;q++){const pt=q*ft-K;ht[w]=pt*C,ht[M]=I*U,ht[S]=J,p.push(ht.x,ht.y,ht.z),ht[w]=0,ht[M]=0,ht[S]=B>0?1:-1,_.push(ht.x,ht.y,ht.z),v.push(q/z),v.push(1-yt/T),P+=1}}for(let yt=0;yt<T;yt++)for(let I=0;I<z;I++){const q=g+I+j*yt,pt=g+I+j*(yt+1),At=g+(I+1)+j*(yt+1),Xt=g+(I+1)+j*yt;m.push(q,pt,Xt),m.push(pt,At,Xt),rt+=6}d.addGroup(y,rt,N),y+=rt,g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ES{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Se("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(f-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new Oe:new Z);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Z,l=[],c=[],f=[],d=new Z,m=new fn;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new Z)}c[0]=new Z,f[0]=new Z;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Le(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,E))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Le(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function r0(){let r=0,t=0,i=0,s=0;function l(c,f,d,m){r=c,t=d,i=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,_,v){let g=(f-c)/p-(d-c)/(p+_)+(d-f)/_,y=(d-f)/_-(m-f)/(_+v)+(m-d)/v;g*=_,y*=_,l(f,d,g,y)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const df=new Z,sm=new r0,rm=new r0,om=new r0;class bS extends ES{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new Z){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(df.subVectors(l[0],l[1]).add(l[0]),p=df);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(df.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=df),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),y),w=Math.pow(v.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),sm.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,w,M),rm.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,w,M),om.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,w,M)}else this.curveType==="catmullrom"&&(sm.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),rm.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),om.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(sm.calc(m),rm.calc(m),om.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Z().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Za extends Qi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=i/m,y=[],E=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-f;for(let U=0;U<p;U++){const D=U*v-c;E.push(D,-C,0),w.push(0,0,1),M.push(U/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<d;C++){const U=C+p*S,D=C+p*(S+1),F=C+1+p*(S+1),B=C+1+p*S;y.push(U,D,B),y.push(D,F,B)}this.setIndex(y),this.setAttribute("position",new ti(E,3)),this.setAttribute("normal",new ti(w,3)),this.setAttribute("uv",new ti(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ph extends Qi{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,y=new Z,E=new Oe;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const S=c+M/s*f;y.x=v*Math.cos(S),y.y=v*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,_.push(E.x,E.y)}v+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let S=0;S<s;S++){const C=S+M,U=C,D=C+s+1,F=C+s+2,B=C+1;d.push(U,D,B),d.push(D,F,B)}}this.setIndex(d),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(p,3)),this.setAttribute("uv",new ti(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ph(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fh extends Qi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const _=[],v=new Z,g=new Z,y=[],E=[],w=[],M=[];for(let S=0;S<=s;S++){const C=[],U=S/s;let D=0;S===0&&f===0?D=.5/i:S===s&&m===Math.PI&&(D=-.5/i);for(let F=0;F<=i;F++){const B=F/i;v.x=-t*Math.cos(l+B*c)*Math.sin(f+U*d),v.y=t*Math.cos(f+U*d),v.z=t*Math.sin(l+B*c)*Math.sin(f+U*d),E.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(B+D,1-U),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const U=_[S][C+1],D=_[S][C],F=_[S+1][C],B=_[S+1][C+1];(S!==0||f>0)&&y.push(U,D,B),(S!==s-1||m<Math.PI)&&y.push(D,F,B)}this.setIndex(y),this.setAttribute("position",new ti(E,3)),this.setAttribute("normal",new ti(w,3)),this.setAttribute("uv",new ti(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function El(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function bi(r){const t={};for(let i=0;i<r.length;i++){const s=El(r[i]);for(const l in s)t[l]=s[l]}return t}function gE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function TS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}const AS={clone:El,merge:bi};var _E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oa extends mo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_E,this.fragmentShader=vE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=El(t.uniforms),this.uniformsGroups=gE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class RS extends Oa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ds extends mo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class so extends Ds{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class CS extends mo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=yh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wS extends mo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DS extends mo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Al extends pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class NS extends Al{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const lm=new fn,tx=new Z,ex=new Z;class o0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ih,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;tx.setFromMatrixPosition(t.matrixWorld),i.position.copy(tx),ex.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ex),i.updateMatrixWorld(),lm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lm,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Sl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(lm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pf=new Z,mf=new po,qa=new Z;class l0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pf,mf,qa),qa.x===1&&qa.y===1&&qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pf,mf,qa.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(pf,mf,qa),qa.x===1&&qa.y===1&&qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pf,mf,qa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new Z,nx=new Oe,ix=new Oe;class Ti extends l0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=yl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z)}getViewSize(t,i){return this.getViewBounds(t,nx,ix),i.subVectors(ix,nx)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Uc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class xE extends o0{constructor(){super(new Ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=yl*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Cf extends Al{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new xE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class SE extends o0{constructor(){super(new Ti(90,1,.5,500)),this.isPointLightShadow=!0}}class Oc extends Al{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new SE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Bh extends l0{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yE extends o0{constructor(){super(new Bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nm extends Al{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new yE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class US extends Al{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const rl=-90,ol=1;class LS extends pn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(rl,ol,t,i);l.layers=this.layers,this.add(l);const c=new Ti(rl,ol,t,i);c.layers=this.layers,this.add(c);const f=new Ti(rl,ol,t,i);f.layers=this.layers,this.add(f);const d=new Ti(rl,ol,t,i);d.layers=this.layers,this.add(d);const m=new Ti(rl,ol,t,i);m.layers=this.layers,this.add(m);const p=new Ti(rl,ol,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Da)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class OS extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ax=new fn;class IS{constructor(t,i,s=0,l=1/0){this.ray=new n0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Xe("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return ax.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ax),this}intersectObject(t,i=!0,s=[]){return Um(t,this,s,i),s.sort(sx),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Um(t[l],this,s,i);return s.sort(sx),s}}function sx(r,t){return r.distance-t.distance}function Um(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Um(c[f],t,i,!0)}}class PS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Se("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function rx(r,t,i,s){const l=ME(s);switch(i){case Zm:return r*t;case Ah:return r*t/l.components*l.byteLength;case Rh:return r*t/l.components*l.byteLength;case uo:return r*t*2/l.components*l.byteLength;case Ch:return r*t*2/l.components*l.byteLength;case Km:return r*t*3/l.components*l.byteLength;case ma:return r*t*4/l.components*l.byteLength;case wh:return r*t*4/l.components*l.byteLength;case Cc:case wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Dc:case Nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gf:case kf:return Math.max(r,16)*Math.max(t,8)/4;case Hf:case Vf:return Math.max(r,8)*Math.max(t,8)/2;case Xf:case Wf:case qf:case jf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yf:case Zf:case Kf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jf:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case $f:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case th:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case eh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case nh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ih:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ah:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case sh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case rh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case oh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case lh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ch:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case uh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case fh:case hh:case dh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ph:case mh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case gh:case _h:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ME(r){switch(r){case Ii:case Wm:return{byteLength:1,components:1};case vl:case Ym:case Ja:return{byteLength:2,components:1};case bh:case Th:return{byteLength:2,components:4};case La:case Eh:case pa:return{byteLength:4,components:1};case qm:case jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);function FS(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function EE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<v.length;y++){const E=v[g],w=v[y];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let y=0,E=v.length;y<E;y++){const w=v[y];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var bE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TE=`#ifdef USE_ALPHAHASH
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
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
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
#endif`,NE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UE=`#ifdef USE_BATCHING
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
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FE=`#ifdef USE_IRIDESCENCE
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
#endif`,BE=`#ifdef USE_BUMPMAP
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
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qE=`#define PI 3.141592653589793
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
} // validated`,jE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZE=`vec3 transformedNormal = objectNormal;
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
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",eb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fb=`#ifdef USE_GRADIENTMAP
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
}`,hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mb=`uniform bool receiveShadow;
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
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yb=`PhysicalMaterial material;
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
#endif`,Mb=`uniform sampler2D dfgLUT;
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
}`,Eb=`
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
#endif`,bb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lb=`#if defined( USE_POINTS_UV )
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
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
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
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yb=`#ifdef USE_NORMALMAP
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
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l1=`float getShadowMask() {
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
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,f1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`#include <common>
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
}`,D1=`#if DEPTH_PACKING == 3200
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
}`,N1=`#define DISTANCE
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
}`,U1=`#define DISTANCE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
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
}`,P1=`uniform vec3 diffuse;
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
}`,F1=`#include <common>
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
}`,B1=`uniform vec3 diffuse;
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
}`,z1=`#define LAMBERT
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
}`,H1=`#define LAMBERT
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
}`,G1=`#define MATCAP
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
}`,V1=`#define MATCAP
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
}`,k1=`#define NORMAL
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
}`,X1=`#define NORMAL
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
}`,W1=`#define PHONG
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
}`,Y1=`#define PHONG
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
}`,q1=`#define STANDARD
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
}`,j1=`#define STANDARD
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
}`,Z1=`#define TOON
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
}`,K1=`#define TOON
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
}`,Q1=`uniform float size;
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
}`,J1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,tT=`uniform vec3 color;
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
}`,eT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:bE,alphahash_pars_fragment:TE,alphamap_fragment:AE,alphamap_pars_fragment:RE,alphatest_fragment:CE,alphatest_pars_fragment:wE,aomap_fragment:DE,aomap_pars_fragment:NE,batching_pars_vertex:UE,batching_vertex:LE,begin_vertex:OE,beginnormal_vertex:IE,bsdfs:PE,iridescence_fragment:FE,bumpmap_pars_fragment:BE,clipping_planes_fragment:zE,clipping_planes_pars_fragment:HE,clipping_planes_pars_vertex:GE,clipping_planes_vertex:VE,color_fragment:kE,color_pars_fragment:XE,color_pars_vertex:WE,color_vertex:YE,common:qE,cube_uv_reflection_fragment:jE,defaultnormal_vertex:ZE,displacementmap_pars_vertex:KE,displacementmap_vertex:QE,emissivemap_fragment:JE,emissivemap_pars_fragment:$E,colorspace_fragment:tb,colorspace_pars_fragment:eb,envmap_fragment:nb,envmap_common_pars_fragment:ib,envmap_pars_fragment:ab,envmap_pars_vertex:sb,envmap_physical_pars_fragment:gb,envmap_vertex:rb,fog_vertex:ob,fog_pars_vertex:lb,fog_fragment:cb,fog_pars_fragment:ub,gradientmap_pars_fragment:fb,lightmap_pars_fragment:hb,lights_lambert_fragment:db,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:_b,lights_toon_pars_fragment:vb,lights_phong_fragment:xb,lights_phong_pars_fragment:Sb,lights_physical_fragment:yb,lights_physical_pars_fragment:Mb,lights_fragment_begin:Eb,lights_fragment_maps:bb,lights_fragment_end:Tb,logdepthbuf_fragment:Ab,logdepthbuf_pars_fragment:Rb,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:wb,map_fragment:Db,map_pars_fragment:Nb,map_particle_fragment:Ub,map_particle_pars_fragment:Lb,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Pb,morphcolor_vertex:Fb,morphnormal_vertex:Bb,morphtarget_pars_vertex:zb,morphtarget_vertex:Hb,normal_fragment_begin:Gb,normal_fragment_maps:Vb,normal_pars_fragment:kb,normal_pars_vertex:Xb,normal_vertex:Wb,normalmap_pars_fragment:Yb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:jb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:Kb,opaque_fragment:Qb,packing:Jb,premultiplied_alpha_fragment:$b,project_vertex:t1,dithering_fragment:e1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:a1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:r1,shadowmap_vertex:o1,shadowmask_pars_fragment:l1,skinbase_vertex:c1,skinning_pars_vertex:u1,skinning_vertex:f1,skinnormal_vertex:h1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:_1,transmission_pars_fragment:v1,uv_pars_fragment:x1,uv_pars_vertex:S1,uv_vertex:y1,worldpos_vertex:M1,background_vert:E1,background_frag:b1,backgroundCube_vert:T1,backgroundCube_frag:A1,cube_vert:R1,cube_frag:C1,depth_vert:w1,depth_frag:D1,distance_vert:N1,distance_frag:U1,equirect_vert:L1,equirect_frag:O1,linedashed_vert:I1,linedashed_frag:P1,meshbasic_vert:F1,meshbasic_frag:B1,meshlambert_vert:z1,meshlambert_frag:H1,meshmatcap_vert:G1,meshmatcap_frag:V1,meshnormal_vert:k1,meshnormal_frag:X1,meshphong_vert:W1,meshphong_frag:Y1,meshphysical_vert:q1,meshphysical_frag:j1,meshtoon_vert:Z1,meshtoon_frag:K1,points_vert:Q1,points_frag:J1,shadow_vert:$1,shadow_frag:tT,sprite_vert:eT,sprite_frag:nT},Wt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},wa={basic:{uniforms:bi([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:bi([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:bi([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:bi([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:bi([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:bi([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:bi([Wt.points,Wt.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:bi([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:bi([Wt.common,Wt.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:bi([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:bi([Wt.sprite,Wt.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:bi([Wt.common,Wt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:bi([Wt.lights,Wt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};wa.physical={uniforms:bi([wa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const gf={r:0,b:0,g:0},eo=new _a,iT=new fn;function aT(r,t,i,s,l,c){const f=new me(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function y(C){let U=C.isScene===!0?C.background:null;if(U&&U.isTexture){const D=C.backgroundBlurriness>0;U=t.get(U,D)}return U}function E(C){let U=!1;const D=y(C);D===null?M(f,d):D&&D.isColor&&(M(D,1),U=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,U){const D=y(U);D&&(D.isCubeTexture||D.mapping===zc)?(p===void 0&&(p=new ke(new wr(1,1,1),new Oa({name:"BackgroundCubeMaterial",uniforms:El(wa.backgroundCube.uniforms),vertexShader:wa.backgroundCube.vertexShader,fragmentShader:wa.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),eo.copy(U.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(eo)),p.material.toneMapped=We.getTransfer(D.colorSpace)!==en,(_!==D||v!==D.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=D,v=D.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new ke(new Za(2,2),new Oa({name:"BackgroundMaterial",uniforms:El(wa.background.uniforms),vertexShader:wa.background.vertexShader,fragmentShader:wa.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=We.getTransfer(D.colorSpace)!==en,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,v=D.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,U){C.getRGB(gf,TS(r)),i.buffers.color.setClear(gf.r,gf.g,gf.b,U,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,U=1){f.set(C),d=U,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(f,d)},render:E,addToRenderList:w,dispose:S}}function sT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(G,K,at,J,j){let O=!1;const P=v(G,J,at,K);c!==P&&(c=P,p(c.object)),O=y(G,J,at,j),O&&E(G,J,at,j),j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,D(G,K,at,J),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,K,at,J){const j=J.wireframe===!0;let O=s[K.id];O===void 0&&(O={},s[K.id]=O);const P=G.isInstancedMesh===!0?G.id:0;let rt=O[P];rt===void 0&&(rt={},O[P]=rt);let ht=rt[at.id];ht===void 0&&(ht={},rt[at.id]=ht);let yt=ht[j];return yt===void 0&&(yt=g(m()),ht[j]=yt),yt}function g(G){const K=[],at=[],J=[];for(let j=0;j<i;j++)K[j]=0,at[j]=0,J[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:at,attributeDivisors:J,object:G,attributes:{},index:null}}function y(G,K,at,J){const j=c.attributes,O=K.attributes;let P=0;const rt=at.getAttributes();for(const ht in rt)if(rt[ht].location>=0){const I=j[ht];let q=O[ht];if(q===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),I===void 0||I.attribute!==q||q&&I.data!==q.data)return!0;P++}return c.attributesNum!==P||c.index!==J}function E(G,K,at,J){const j={},O=K.attributes;let P=0;const rt=at.getAttributes();for(const ht in rt)if(rt[ht].location>=0){let I=O[ht];I===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const q={};q.attribute=I,I&&I.data&&(q.data=I.data),j[ht]=q,P++}c.attributes=j,c.attributesNum=P,c.index=J}function w(){const G=c.newAttributes;for(let K=0,at=G.length;K<at;K++)G[K]=0}function M(G){S(G,0)}function S(G,K){const at=c.newAttributes,J=c.enabledAttributes,j=c.attributeDivisors;at[G]=1,J[G]===0&&(r.enableVertexAttribArray(G),J[G]=1),j[G]!==K&&(r.vertexAttribDivisor(G,K),j[G]=K)}function C(){const G=c.newAttributes,K=c.enabledAttributes;for(let at=0,J=K.length;at<J;at++)K[at]!==G[at]&&(r.disableVertexAttribArray(at),K[at]=0)}function U(G,K,at,J,j,O,P){P===!0?r.vertexAttribIPointer(G,K,at,j,O):r.vertexAttribPointer(G,K,at,J,j,O)}function D(G,K,at,J){w();const j=J.attributes,O=at.getAttributes(),P=K.defaultAttributeValues;for(const rt in O){const ht=O[rt];if(ht.location>=0){let yt=j[rt];if(yt===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(yt=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(yt=G.instanceColor)),yt!==void 0){const I=yt.normalized,q=yt.itemSize,pt=t.get(yt);if(pt===void 0)continue;const At=pt.buffer,Xt=pt.type,tt=pt.bytesPerElement,gt=Xt===r.INT||Xt===r.UNSIGNED_INT||yt.gpuType===Eh;if(yt.isInterleavedBufferAttribute){const Tt=yt.data,jt=Tt.stride,oe=yt.offset;if(Tt.isInstancedInterleavedBuffer){for(let de=0;de<ht.locationSize;de++)S(ht.location+de,Tt.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let de=0;de<ht.locationSize;de++)M(ht.location+de);r.bindBuffer(r.ARRAY_BUFFER,At);for(let de=0;de<ht.locationSize;de++)U(ht.location+de,q/ht.locationSize,Xt,I,jt*tt,(oe+q/ht.locationSize*de)*tt,gt)}else{if(yt.isInstancedBufferAttribute){for(let Tt=0;Tt<ht.locationSize;Tt++)S(ht.location+Tt,yt.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Tt=0;Tt<ht.locationSize;Tt++)M(ht.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Tt=0;Tt<ht.locationSize;Tt++)U(ht.location+Tt,q/ht.locationSize,Xt,I,q*tt,q/ht.locationSize*Tt*tt,gt)}}else if(P!==void 0){const I=P[rt];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(ht.location,I);break;case 3:r.vertexAttrib3fv(ht.location,I);break;case 4:r.vertexAttrib4fv(ht.location,I);break;default:r.vertexAttrib1fv(ht.location,I)}}}}C()}function F(){N();for(const G in s){const K=s[G];for(const at in K){const J=K[at];for(const j in J){const O=J[j];for(const P in O)_(O[P].object),delete O[P];delete J[j]}}delete s[G]}}function B(G){if(s[G.id]===void 0)return;const K=s[G.id];for(const at in K){const J=K[at];for(const j in J){const O=J[j];for(const P in O)_(O[P].object),delete O[P];delete J[j]}}delete s[G.id]}function z(G){for(const K in s){const at=s[K];for(const J in at){const j=at[J];if(j[G.id]===void 0)continue;const O=j[G.id];for(const P in O)_(O[P].object),delete O[P];delete j[G.id]}}}function T(G){for(const K in s){const at=s[K],J=G.isInstancedMesh===!0?G.id:0,j=at[J];if(j!==void 0){for(const O in j){const P=j[O];for(const rt in P)_(P[rt].object),delete P[rt];delete j[O]}delete at[J],Object.keys(at).length===0&&delete s[K]}}}function N(){ft(),f=!0,c!==l&&(c=l,p(c.object))}function ft(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:ft,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function rT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let y=0;for(let E=0;E<v;E++)y+=_[E];i.update(y,s,1)}function m(p,_,v,g){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],_[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w]*g[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function oT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==ma&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const T=z===Ja&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ii&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==pa&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(Se("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:U,maxFragmentUniforms:D,maxSamples:F,samples:B}}function lT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Er,d=new we,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,y){const E=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,U=C*4;let D=S.clippingState||null;m.value=D,D=_(E,g,U,y);for(let F=0;F!==U;++F)D[F]=i[F];S.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,E){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const S=y+w*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let U=0,D=y;U!==w;++U,D+=4)f.copy(v[U]).applyMatrix4(C,d),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const Ar=4,ox=[.125,.215,.35,.446,.526,.582],ro=20,cT=256,yc=new Bh,lx=new me;let cm=null,um=0,fm=0,hm=!1;const uT=new Z;class xh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=uT}=c;cm=this._renderer.getRenderTarget(),um=this._renderer.getActiveCubeFace(),fm=this._renderer.getActiveMipmapLevel(),hm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ux(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cm,um,fm),this._renderer.xr.enabled=hm,t.scissorTest=!1,ll(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rr||t.mapping===co?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cm=this._renderer.getRenderTarget(),um=this._renderer.getActiveCubeFace(),fm=this._renderer.getActiveMipmapLevel(),hm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Ja,format:ma,colorSpace:fo,depthBuffer:!1},l=cx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fT(c)),this._blurMaterial=dT(c,t,i),this._ggxMaterial=hT(c,t,i)}return l}_compileMaterial(t){const i=new ke(new Qi,t);this._renderer.compile(i,yc)}_sceneToCubeUV(t,i,s,l,c){const m=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(lx),v.toneMapping=Na,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new wr,new Bc({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(lx),S=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const F=this._cubeSize;ll(l,D*F,U>2?F:0,F,F),v.setRenderTarget(l),S&&v.render(w,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Rr||t.mapping===co;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ux());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;ll(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,yc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,y=v*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-Ar?s-E+Ar:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,ll(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,yc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,ll(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,yc)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ro-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):ro;M>ro&&Se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ro}`);const S=[];let C=0;for(let z=0;z<ro;++z){const T=z/w,N=Math.exp(-T*T/2);S.push(N),z===0?C+=N:z<M&&(C+=2*N)}for(let z=0;z<S.length;z++)S[z]=S[z]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:U}=this;g.dTheta.value=E,g.mipInt.value=U-s;const D=this._sizeLods[l],F=3*D*(l>U-Ar?l-U+Ar:0),B=4*(this._cubeSize-D);ll(i,F,B,3*D,2*D),m.setRenderTarget(i),m.render(v,yc)}}function fT(r){const t=[],i=[],s=[];let l=r;const c=r-Ar+1+ox.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-Ar?m=ox[f-r+Ar-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,E=6,w=3,M=2,S=1,C=new Float32Array(w*E*y),U=new Float32Array(M*E*y),D=new Float32Array(S*E*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,T=B>2?0:-1,N=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(N,w*E*B),U.set(g,M*E*B);const ft=[B,B,B,B,B,B];D.set(ft,S*E*B)}const F=new Qi;F.setAttribute("position",new ga(C,w)),F.setAttribute("uv",new ga(U,M)),F.setAttribute("faceIndex",new ga(D,S)),s.push(new ke(F,null)),l>Ar&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function cx(r,t,i){const s=new Ua(r,t,i);return s.texture.mapping=zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ll(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function hT(r,t,i){return new Oa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function dT(r,t,i){const s=new Float32Array(ro),l=new Z(0,1,0);return new Oa({name:"SphericalGaussianBlur",defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function ux(){return new Oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function fx(){return new Oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function zh(){return`

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
	`}class c0 extends Ua{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new a0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new wr(5,5,5),c=new Oa({name:"CubemapFromEquirect",uniforms:El(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:_i,blending:Qa});c.uniforms.tEquirect.value=i;const f=new ke(l,c),d=i.minFilter;return i.minFilter===Ns&&(i.minFilter=$n),new LS(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function pT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===bf||y===Tf)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new c0(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,E=y===bf||y===Tf,w=y===Rr||y===co;if(E||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new xh(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return E&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new xh(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===bf?g.mapping=Rr:y===Tf&&(g.mapping=co),g}function m(g){let y=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function mT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Pc("WebGLRenderer: "+s+" extension not supported."),l}}}function gT(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let U=0,D=C.length;U<D;U+=3){const F=C[U+0],B=C[U+1],z=C[U+2];g.push(F,B,B,z,z,F)}}else{const C=E.array;w=E.version;for(let U=0,D=C.length/3-1;U<D;U+=3){const F=U+0,B=U+1,z=U+2;g.push(F,B,B,z,z,F)}}const M=new(E.count>=65535?e0:t0)(g,1);M.version=w;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function _T(r,t,i){let s;function l(g){s=g}let c,f;function d(g){c=g.type,f=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*f),i.update(y,s,1)}function p(g,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,g*f,E),i.update(y,s,E))}function _(g,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,E);let M=0;for(let S=0;S<E;S++)M+=y[S];i.update(M,s,1)}function v(g,y,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/f,y[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,w,0,E);let S=0;for(let C=0;C<E;C++)S+=y[C]*w[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function vT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Xe("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function xT(r,t,i){const s=new WeakMap,l=new Rn;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let ft=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",ft)};var y=ft;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let F=d.attributes.position.count*D,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*v),T=new Jm(z,F,B,v);T.type=pa,T.needsUpdate=!0;const N=D*4;for(let G=0;G<v;G++){const K=S[G],at=C[G],J=U[G],j=F*B*4*G;for(let O=0;O<K.count;O++){const P=O*N;E===!0&&(l.fromBufferAttribute(K,O),z[j+P+0]=l.x,z[j+P+1]=l.y,z[j+P+2]=l.z,z[j+P+3]=0),w===!0&&(l.fromBufferAttribute(at,O),z[j+P+4]=l.x,z[j+P+5]=l.y,z[j+P+6]=l.z,z[j+P+7]=0),M===!0&&(l.fromBufferAttribute(J,O),z[j+P+8]=l.x,z[j+P+9]=l.y,z[j+P+10]=l.z,z[j+P+11]=J.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Oe(F,B)},s.set(d,g),d.addEventListener("dispose",ft)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function ST(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const yT={[Bm]:"LINEAR_TONE_MAPPING",[zm]:"REINHARD_TONE_MAPPING",[Hm]:"CINEON_TONE_MAPPING",[Mh]:"ACES_FILMIC_TONE_MAPPING",[Vm]:"AGX_TONE_MAPPING",[km]:"NEUTRAL_TONE_MAPPING",[Gm]:"CUSTOM_TONE_MAPPING"};function MT(r,t,i,s,l){const c=new Ua(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ua(t,i,{type:Ja,depthBuffer:!1,stencilBuffer:!1}),d=new Qi;d.setAttribute("position",new ti([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ti([0,2,0,0,2,0],2));const m=new RS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ke(d,m),_=new Bh(-1,1,1,-1,0,1);let v=null,g=null,y=!1,E,w=null,M=[],S=!1;this.setSize=function(C,U){c.setSize(C,U),f.setSize(C,U);for(let D=0;D<M.length;D++){const F=M[D];F.setSize&&F.setSize(C,U)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const U=c.width,D=c.height;for(let F=0;F<M.length;F++){const B=M[F];B.setSize&&B.setSize(U,D)}},this.begin=function(C,U){if(y||C.toneMapping===Na&&M.length===0)return!1;if(w=U,U!==null){const D=U.width,F=U.height;(c.width!==D||c.height!==F)&&this.setSize(D,F)}return S===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=Na,!0},this.hasRenderPass=function(){return S},this.end=function(C,U){C.toneMapping=E,y=!0;let D=c,F=f;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(C,F,D,U),z.needsSwap!==!1)){const T=D;D=F,F=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},We.getTransfer(v)===en&&(m.defines.SRGB_TRANSFER="");const B=yT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(w),C.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const BS=new li,Lm=new Ml(1,1),zS=new Jm,HS=new xS,GS=new a0,hx=[],dx=[],px=new Float32Array(16),mx=new Float32Array(9),gx=new Float32Array(4);function Rl(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=hx[l];if(c===void 0&&(c=new Float32Array(l),hx[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function Yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function qn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Hh(r,t){let i=dx[t];i===void 0&&(i=new Int32Array(t),dx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function ET(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function bT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2fv(this.addr,t),qn(i,t)}}function TT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Yn(i,t))return;r.uniform3fv(this.addr,t),qn(i,t)}}function AT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4fv(this.addr,t),qn(i,t)}}function RT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;gx.set(s),r.uniformMatrix2fv(this.addr,!1,gx),qn(i,s)}}function CT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;mx.set(s),r.uniformMatrix3fv(this.addr,!1,mx),qn(i,s)}}function wT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;px.set(s),r.uniformMatrix4fv(this.addr,!1,px),qn(i,s)}}function DT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function NT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2iv(this.addr,t),qn(i,t)}}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yn(i,t))return;r.uniform3iv(this.addr,t),qn(i,t)}}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4iv(this.addr,t),qn(i,t)}}function OT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function IT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2uiv(this.addr,t),qn(i,t)}}function PT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yn(i,t))return;r.uniform3uiv(this.addr,t),qn(i,t)}}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4uiv(this.addr,t),qn(i,t)}}function BT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Lm.compareFunction=i.isReversedDepthBuffer()?Uh:Nh,c=Lm):c=BS,i.setTexture2D(t||c,l)}function zT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||HS,l)}function HT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||GS,l)}function GT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||zS,l)}function VT(r){switch(r){case 5126:return ET;case 35664:return bT;case 35665:return TT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return wT;case 5124:case 35670:return DT;case 35667:case 35671:return NT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return OT;case 36294:return IT;case 36295:return PT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}function kT(r,t){r.uniform1fv(this.addr,t)}function XT(r,t){const i=Rl(t,this.size,2);r.uniform2fv(this.addr,i)}function WT(r,t){const i=Rl(t,this.size,3);r.uniform3fv(this.addr,i)}function YT(r,t){const i=Rl(t,this.size,4);r.uniform4fv(this.addr,i)}function qT(r,t){const i=Rl(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function jT(r,t){const i=Rl(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function ZT(r,t){const i=Rl(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function KT(r,t){r.uniform1iv(this.addr,t)}function QT(r,t){r.uniform2iv(this.addr,t)}function JT(r,t){r.uniform3iv(this.addr,t)}function $T(r,t){r.uniform4iv(this.addr,t)}function tA(r,t){r.uniform1uiv(this.addr,t)}function eA(r,t){r.uniform2uiv(this.addr,t)}function nA(r,t){r.uniform3uiv(this.addr,t)}function iA(r,t){r.uniform4uiv(this.addr,t)}function aA(r,t,i){const s=this.cache,l=t.length,c=Hh(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Lm:f=BS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function sA(r,t,i){const s=this.cache,l=t.length,c=Hh(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||HS,c[f])}function rA(r,t,i){const s=this.cache,l=t.length,c=Hh(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||GS,c[f])}function oA(r,t,i){const s=this.cache,l=t.length,c=Hh(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||zS,c[f])}function lA(r){switch(r){case 5126:return kT;case 35664:return XT;case 35665:return WT;case 35666:return YT;case 35674:return qT;case 35675:return jT;case 35676:return ZT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return $T;case 5125:return tA;case 36294:return eA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return oA}}class cA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=VT(i.type)}}class uA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lA(i.type)}}class fA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const dm=/(\w+)(\])?(\[|\.)?/g;function _x(r,t){r.seq.push(t),r.map[t.id]=t}function hA(r,t,i){const s=r.name,l=s.length;for(dm.lastIndex=0;;){const c=dm.exec(s),f=dm.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){_x(i,p===void 0?new cA(d,r,t):new uA(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new fA(d),_x(i,v)),i=v}}}class wf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);hA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function vx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const dA=37297;let pA=0;function mA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const xx=new we;function gA(r){We._getMatrix(xx,We.workingColorSpace,r);const t=`mat3( ${xx.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(r)){case Ic:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Sx(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+mA(r.getShaderSource(t),d)}else return c}function _A(r,t){const i=gA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const vA={[Bm]:"Linear",[zm]:"Reinhard",[Hm]:"Cineon",[Mh]:"ACESFilmic",[Vm]:"AgX",[km]:"Neutral",[Gm]:"Custom"};function xA(r,t){const i=vA[t];return i===void 0?(Se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _f=new Z;function SA(){We.getLuminanceCoefficients(_f);const r=_f.x.toFixed(4),t=_f.y.toFixed(4),i=_f.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rc).join(`
`)}function MA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function EA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Rc(r){return r!==""}function yx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Om(r){return r.replace(bA,AA)}const TA=new Map;function AA(r,t){let i=Ne[t];if(i===void 0){const s=TA.get(t);if(s!==void 0)i=Ne[s],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Om(i)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ex(r){return r.replace(RA,CA)}function CA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function bx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const wA={[ml]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function DA(r){return wA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NA={[Rr]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[zc]:"ENVMAP_TYPE_CUBE_UV"};function UA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":NA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const LA={[co]:"ENVMAP_MODE_REFRACTION"};function OA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":LA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IA={[yh]:"ENVMAP_BLENDING_MULTIPLY",[aS]:"ENVMAP_BLENDING_MIX",[sS]:"ENVMAP_BLENDING_ADD"};function PA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":IA[r.combine]||"ENVMAP_BLENDING_NONE"}function FA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function BA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=DA(i),p=UA(i),_=OA(i),v=PA(i),g=FA(i),y=yA(i),E=MA(c),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Rc).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Rc).join(`
`),S.length>0&&(S+=`
`)):(M=[bx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rc).join(`
`),S=[bx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Na?"#define TONE_MAPPING":"",i.toneMapping!==Na?Ne.tonemapping_pars_fragment:"",i.toneMapping!==Na?xA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,_A("linearToOutputTexel",i.outputColorSpace),SA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Rc).join(`
`)),f=Om(f),f=yx(f,i),f=Mx(f,i),d=Om(d),d=yx(d,i),d=Mx(d,i),f=Ex(f),d=Ex(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=C+M+f,D=C+S+d,F=vx(l,l.VERTEX_SHADER,U),B=vx(l,l.FRAGMENT_SHADER,D);l.attachShader(w,F),l.attachShader(w,B),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(G){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",at=l.getShaderInfoLog(F)||"",J=l.getShaderInfoLog(B)||"",j=K.trim(),O=at.trim(),P=J.trim();let rt=!0,ht=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,F,B);else{const yt=Sx(l,F,"vertex"),I=Sx(l,B,"fragment");Xe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+yt+`
`+I)}else j!==""?Se("WebGLProgram: Program Info Log:",j):(O===""||P==="")&&(ht=!1);ht&&(G.diagnostics={runnable:rt,programLog:j,vertexShader:{log:O,prefix:M},fragmentShader:{log:P,prefix:S}})}l.deleteShader(F),l.deleteShader(B),T=new wf(l,w),N=EA(l,w)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let ft=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ft===!1&&(ft=l.getProgramParameter(w,dA)),ft},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=B,this}let zA=0;class HA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new GA(t),i.set(t,s)),s}}class GA{constructor(t){this.id=zA++,this.code=t,this.usedTimes=0}}function VA(r,t,i,s,l,c){const f=new Oh,d=new HA,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,ft,G,K){const at=G.fog,J=K.geometry,j=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,P=t.get(T.envMap||j,O),rt=P&&P.mapping===zc?P.image.height:null,ht=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&Se("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,I=yt!==void 0?yt.length:0;let q=0;J.morphAttributes.position!==void 0&&(q=1),J.morphAttributes.normal!==void 0&&(q=2),J.morphAttributes.color!==void 0&&(q=3);let pt,At,Xt,tt;if(ht){const Ie=wa[ht];pt=Ie.vertexShader,At=Ie.fragmentShader}else pt=T.vertexShader,At=T.fragmentShader,d.update(T),Xt=d.getVertexShaderID(T),tt=d.getFragmentShaderID(T);const gt=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),jt=K.isInstancedMesh===!0,oe=K.isBatchedMesh===!0,de=!!T.map,xt=!!T.matcap,Gt=!!P,Pt=!!T.aoMap,he=!!T.lightMap,zt=!!T.bumpMap,ye=!!T.normalMap,V=!!T.displacementMap,Jt=!!T.emissiveMap,Ut=!!T.metalnessMap,Yt=!!T.roughnessMap,Ct=T.anisotropy>0,L=T.clearcoat>0,b=T.dispersion>0,Y=T.iridescence>0,dt=T.sheen>0,St=T.transmission>0,lt=Ct&&!!T.anisotropyMap,Vt=L&&!!T.clearcoatMap,Rt=L&&!!T.clearcoatNormalMap,ee=L&&!!T.clearcoatRoughnessMap,ne=Y&&!!T.iridescenceMap,Et=Y&&!!T.iridescenceThicknessMap,Mt=dt&&!!T.sheenColorMap,kt=dt&&!!T.sheenRoughnessMap,Ht=!!T.specularMap,Lt=!!T.specularColorMap,Ae=!!T.specularIntensityMap,W=St&&!!T.transmissionMap,Nt=St&&!!T.thicknessMap,wt=!!T.gradientMap,qt=!!T.alphaMap,bt=T.alphaTest>0,ut=!!T.alphaHash,$t=!!T.extensions;let ve=Na;T.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ve=r.toneMapping);const qe={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:pt,fragmentShader:At,defines:T.defines,customVertexShaderID:Xt,customFragmentShaderID:tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:oe,batchingColor:oe&&K._colorsTexture!==null,instancing:jt,instancingColor:jt&&K.instanceColor!==null,instancingMorph:jt&&K.morphTexture!==null,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:fo,alphaToCoverage:!!T.alphaToCoverage,map:de,matcap:xt,envMap:Gt,envMapMode:Gt&&P.mapping,envMapCubeUVHeight:rt,aoMap:Pt,lightMap:he,bumpMap:zt,normalMap:ye,displacementMap:V,emissiveMap:Jt,normalMapObjectSpace:ye&&T.normalMapType===lS,normalMapTangentSpace:ye&&T.normalMapType===Dh,metalnessMap:Ut,roughnessMap:Yt,anisotropy:Ct,anisotropyMap:lt,clearcoat:L,clearcoatMap:Vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ee,dispersion:b,iridescence:Y,iridescenceMap:ne,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:Mt,sheenRoughnessMap:kt,specularMap:Ht,specularColorMap:Lt,specularIntensityMap:Ae,transmission:St,transmissionMap:W,thicknessMap:Nt,gradientMap:wt,opaque:T.transparent===!1&&T.blending===oo&&T.alphaToCoverage===!1,alphaMap:qt,alphaTest:bt,alphaHash:ut,combine:T.combine,mapUv:de&&E(T.map.channel),aoMapUv:Pt&&E(T.aoMap.channel),lightMapUv:he&&E(T.lightMap.channel),bumpMapUv:zt&&E(T.bumpMap.channel),normalMapUv:ye&&E(T.normalMap.channel),displacementMapUv:V&&E(T.displacementMap.channel),emissiveMapUv:Jt&&E(T.emissiveMap.channel),metalnessMapUv:Ut&&E(T.metalnessMap.channel),roughnessMapUv:Yt&&E(T.roughnessMap.channel),anisotropyMapUv:lt&&E(T.anisotropyMap.channel),clearcoatMapUv:Vt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:kt&&E(T.sheenRoughnessMap.channel),specularMapUv:Ht&&E(T.specularMap.channel),specularColorMapUv:Lt&&E(T.specularColorMap.channel),specularIntensityMapUv:Ae&&E(T.specularIntensityMap.channel),transmissionMapUv:W&&E(T.transmissionMap.channel),thicknessMapUv:Nt&&E(T.thicknessMap.channel),alphaMapUv:qt&&E(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ye||Ct),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!J.attributes.uv&&(de||qt),fog:!!at,useFog:T.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&ye===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:K.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ft.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:de&&T.map.isVideoTexture===!0&&We.getTransfer(T.map.colorSpace)===en,decodeVideoTextureEmissive:Jt&&T.emissiveMap.isVideoTexture===!0&&We.getTransfer(T.emissiveMap.colorSpace)===en,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vn,flipSided:T.side===_i,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$t&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&T.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function M(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ft in T.defines)N.push(ft),N.push(T.defines[ft]);return T.isRawShaderMaterial===!1&&(S(N,T),C(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function S(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function C(T,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),T.push(f.mask)}function U(T){const N=y[T.type];let ft;if(N){const G=wa[N];ft=AS.clone(G.uniforms)}else ft=T.uniforms;return ft}function D(T,N){let ft=_.get(N);return ft!==void 0?++ft.usedTimes:(ft=new BA(r,N,T,l),p.push(ft),_.set(N,ft)),ft}function F(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function B(T){d.remove(T)}function z(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:U,acquireProgram:D,releaseProgram:F,releaseShaderCache:B,programs:p,dispose:z}}function kA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function XA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Tx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ax(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,E,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=E,C.materialVariant=f(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,E,w,M,S){const C=d(g,y,E,w,M,S);E.transmission>0?s.push(C):E.transparent===!0?l.push(C):i.push(C)}function p(g,y,E,w,M,S){const C=d(g,y,E,w,M,S);E.transmission>0?s.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||XA),s.length>1&&s.sort(y||Tx),l.length>1&&l.sort(y||Tx)}function v(){for(let g=t,y=r.length;g<y;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function WA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Ax,r.set(s,[f])):l>=c.length?(f=new Ax,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function YA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new me};break;case"SpotLight":i={position:new Z,direction:new Z,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function qA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let jA=0;function ZA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function KA(r){const t=new YA,i=qA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new fn,f=new fn;function d(p){let _=0,v=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,E=0,w=0,M=0,S=0,C=0,U=0,D=0,F=0,B=0,z=0;p.sort(ZA);for(let N=0,ft=p.length;N<ft;N++){const G=p[N],K=G.color,at=G.intensity,J=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===uo?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=K.r*at,v+=K.g*at,g+=K.b*at;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],at);z++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const P=G.shadow,rt=i.get(G);rt.shadowIntensity=P.intensity,rt.shadowBias=P.bias,rt.shadowNormalBias=P.normalBias,rt.shadowRadius=P.radius,rt.shadowMapSize=P.mapSize,s.directionalShadow[y]=rt,s.directionalShadowMap[y]=j,s.directionalShadowMatrix[y]=G.shadow.matrix,C++}s.directional[y]=O,y++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(K).multiplyScalar(at),O.distance=J,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[w]=O;const P=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,P.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[w]=P.matrix,G.castShadow){const rt=i.get(G);rt.shadowIntensity=P.intensity,rt.shadowBias=P.bias,rt.shadowNormalBias=P.normalBias,rt.shadowRadius=P.radius,rt.shadowMapSize=P.mapSize,s.spotShadow[w]=rt,s.spotShadowMap[w]=j,D++}w++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(K).multiplyScalar(at),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=O,M++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const P=G.shadow,rt=i.get(G);rt.shadowIntensity=P.intensity,rt.shadowBias=P.bias,rt.shadowNormalBias=P.normalBias,rt.shadowRadius=P.radius,rt.shadowMapSize=P.mapSize,rt.shadowCameraNear=P.camera.near,rt.shadowCameraFar=P.camera.far,s.pointShadow[E]=rt,s.pointShadowMap[E]=j,s.pointShadowMatrix[E]=G.shadow.matrix,U++}s.point[E]=O,E++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(at),O.groundColor.copy(G.groundColor).multiplyScalar(at),s.hemi[S]=O,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==U||T.numSpotShadows!==D||T.numSpotMaps!==F||T.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,T.directionalLength=y,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=U,T.numSpotShadows=D,T.numSpotMaps=F,T.numLightProbes=z,s.version=jA++)}function m(p,_){let v=0,g=0,y=0,E=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const U=p[S];if(U.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(U.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),g++}else if(U.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function Rx(r){const t=new KA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function QA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Rx(r),t.set(l,[d])):c>=f.length?(d=new Rx(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
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
}`,t2=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],e2=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Cx=new fn,Mc=new Z,pm=new Z;function n2(r,t,i){let s=new Ih;const l=new Oe,c=new Oe,f=new Rn,d=new wS,m=new DS,p={},_=i.maxTextureSize,v={[Ls]:_i,[_i]:Ls,[Vn]:Vn},g=new Oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:JA,fragmentShader:$A}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new Qi;E.setAttribute("position",new ga(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ke(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let S=this.type;this.render=function(B,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;this.type===zx&&(Se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ml);const N=r.getRenderTarget(),ft=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Qa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const at=S!==this.type;at&&z.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(j=>j.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,j=B.length;J<j;J++){const O=B[J],P=O.shadow;if(P===void 0){Se("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const rt=P.getFrameExtents();l.multiply(rt),c.copy(P.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/rt.x),l.x=c.x*rt.x,P.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/rt.y),l.y=c.y*rt.y,P.mapSize.y=c.y));const ht=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=ht,P.map===null||at===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===hl){if(O.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ua(l.x,l.y,{format:uo,type:Ja,minFilter:$n,magFilter:$n,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new Ml(l.x,l.y,pa),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=$a,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Jn,P.map.depthTexture.magFilter=Jn}else O.isPointLight?(P.map=new c0(l.x),P.map.depthTexture=new MS(l.x,La)):(P.map=new Ua(l.x,l.y),P.map.depthTexture=new Ml(l.x,l.y,La)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=$a,this.type===ml?(P.map.depthTexture.compareFunction=ht?Uh:Nh,P.map.depthTexture.minFilter=$n,P.map.depthTexture.magFilter=$n):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Jn,P.map.depthTexture.magFilter=Jn);P.camera.updateProjectionMatrix()}const yt=P.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<yt;I++){if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,I),r.clear();else{I===0&&(r.setRenderTarget(P.map),r.clear());const q=P.getViewport(I);f.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),K.viewport(f)}if(O.isPointLight){const q=P.camera,pt=P.matrix,At=O.distance||q.far;At!==q.far&&(q.far=At,q.updateProjectionMatrix()),Mc.setFromMatrixPosition(O.matrixWorld),q.position.copy(Mc),pm.copy(q.position),pm.add(t2[I]),q.up.copy(e2[I]),q.lookAt(pm),q.updateMatrixWorld(),pt.makeTranslation(-Mc.x,-Mc.y,-Mc.z),Cx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Cx,q.coordinateSystem,q.reversedDepth)}else P.updateMatrices(O);s=P.getFrustum(),D(z,T,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===hl&&C(P,T),P.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(N,ft,G)};function C(B,z){const T=t.update(w);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ua(l.x,l.y,{format:uo,type:Ja})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,w,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,T,y,w,null)}function U(B,z,T,N){let ft=null;const G=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)ft=G;else if(ft=T.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=ft.uuid,at=z.uuid;let J=p[K];J===void 0&&(J={},p[K]=J);let j=J[at];j===void 0&&(j=ft.clone(),J[at]=j,z.addEventListener("dispose",F)),ft=j}if(ft.visible=z.visible,ft.wireframe=z.wireframe,N===hl?ft.side=z.shadowSide!==null?z.shadowSide:z.side:ft.side=z.shadowSide!==null?z.shadowSide:v[z.side],ft.alphaMap=z.alphaMap,ft.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ft.map=z.map,ft.clipShadows=z.clipShadows,ft.clippingPlanes=z.clippingPlanes,ft.clipIntersection=z.clipIntersection,ft.displacementMap=z.displacementMap,ft.displacementScale=z.displacementScale,ft.displacementBias=z.displacementBias,ft.wireframeLinewidth=z.wireframeLinewidth,ft.linewidth=z.linewidth,T.isPointLight===!0&&ft.isMeshDistanceMaterial===!0){const K=r.properties.get(ft);K.light=T}return ft}function D(B,z,T,N,ft){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&ft===hl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const at=t.update(B),J=B.material;if(Array.isArray(J)){const j=at.groups;for(let O=0,P=j.length;O<P;O++){const rt=j[O],ht=J[rt.materialIndex];if(ht&&ht.visible){const yt=U(B,ht,N,ft);B.onBeforeShadow(r,B,z,T,at,yt,rt),r.renderBufferDirect(T,null,at,yt,B,rt),B.onAfterShadow(r,B,z,T,at,yt,rt)}}}else if(J.visible){const j=U(B,J,N,ft);B.onBeforeShadow(r,B,z,T,at,j,null),r.renderBufferDirect(T,null,at,j,B,null),B.onAfterShadow(r,B,z,T,at,j,null)}}const K=B.children;for(let at=0,J=K.length;at<J;at++)D(K[at],z,T,N,ft)}function F(B){B.target.removeEventListener("dispose",F);for(const T in p){const N=p[T],ft=B.target.uuid;ft in N&&(N[ft].dispose(),delete N[ft])}}}function i2(r,t){function i(){let W=!1;const Nt=new Rn;let wt=null;const qt=new Rn(0,0,0,0);return{setMask:function(bt){wt!==bt&&!W&&(r.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){W=bt},setClear:function(bt,ut,$t,ve,qe){qe===!0&&(bt*=ve,ut*=ve,$t*=ve),Nt.set(bt,ut,$t,ve),qt.equals(Nt)===!1&&(r.clearColor(bt,ut,$t,ve),qt.copy(Nt))},reset:function(){W=!1,wt=null,qt.set(-1,0,0,0)}}}function s(){let W=!1,Nt=!1,wt=null,qt=null,bt=null;return{setReversed:function(ut){if(Nt!==ut){const $t=t.get("EXT_clip_control");ut?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Nt=ut;const ve=bt;bt=null,this.setClear(ve)}},getReversed:function(){return Nt},setTest:function(ut){ut?gt(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(ut){wt!==ut&&!W&&(r.depthMask(ut),wt=ut)},setFunc:function(ut){if(Nt&&(ut=OM[ut]),qt!==ut){switch(ut){case Uf:r.depthFunc(r.NEVER);break;case Lf:r.depthFunc(r.ALWAYS);break;case Of:r.depthFunc(r.LESS);break;case lo:r.depthFunc(r.LEQUAL);break;case If:r.depthFunc(r.EQUAL);break;case Pf:r.depthFunc(r.GEQUAL);break;case Ff:r.depthFunc(r.GREATER);break;case Bf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}qt=ut}},setLocked:function(ut){W=ut},setClear:function(ut){bt!==ut&&(bt=ut,Nt&&(ut=1-ut),r.clearDepth(ut))},reset:function(){W=!1,wt=null,qt=null,bt=null,Nt=!1}}}function l(){let W=!1,Nt=null,wt=null,qt=null,bt=null,ut=null,$t=null,ve=null,qe=null;return{setTest:function(Ie){W||(Ie?gt(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Ie){Nt!==Ie&&!W&&(r.stencilMask(Ie),Nt=Ie)},setFunc:function(Ie,kn,ei){(wt!==Ie||qt!==kn||bt!==ei)&&(r.stencilFunc(Ie,kn,ei),wt=Ie,qt=kn,bt=ei)},setOp:function(Ie,kn,ei){(ut!==Ie||$t!==kn||ve!==ei)&&(r.stencilOp(Ie,kn,ei),ut=Ie,$t=kn,ve=ei)},setLocked:function(Ie){W=Ie},setClear:function(Ie){qe!==Ie&&(r.clearStencil(Ie),qe=Ie)},reset:function(){W=!1,Nt=null,wt=null,qt=null,bt=null,ut=null,$t=null,ve=null,qe=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,y=[],E=null,w=!1,M=null,S=null,C=null,U=null,D=null,F=null,B=null,z=new me(0,0,0),T=0,N=!1,ft=null,G=null,K=null,at=null,J=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,P=0;const rt=r.getParameter(r.VERSION);rt.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(rt)[1]),O=P>=1):rt.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),O=P>=2);let ht=null,yt={};const I=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),pt=new Rn().fromArray(I),At=new Rn().fromArray(q);function Xt(W,Nt,wt,qt){const bt=new Uint8Array(4),ut=r.createTexture();r.bindTexture(W,ut),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<wt;$t++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,qt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Nt+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return ut}const tt={};tt[r.TEXTURE_2D]=Xt(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),gt(r.DEPTH_TEST),f.setFunc(lo),zt(!1),ye(Mm),gt(r.CULL_FACE),Pt(Qa);function gt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Tt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function jt(W,Nt){return v[W]!==Nt?(r.bindFramebuffer(W,Nt),v[W]=Nt,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Nt),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function oe(W,Nt){let wt=y,qt=!1;if(W){wt=g.get(Nt),wt===void 0&&(wt=[],g.set(Nt,wt));const bt=W.textures;if(wt.length!==bt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,$t=bt.length;ut<$t;ut++)wt[ut]=r.COLOR_ATTACHMENT0+ut;wt.length=bt.length,qt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,qt=!0);qt&&r.drawBuffers(wt)}function de(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const xt={[br]:r.FUNC_ADD,[Gx]:r.FUNC_SUBTRACT,[Vx]:r.FUNC_REVERSE_SUBTRACT};xt[kx]=r.MIN,xt[Xx]=r.MAX;const Gt={[Wx]:r.ZERO,[Yx]:r.ONE,[qx]:r.SRC_COLOR,[Df]:r.SRC_ALPHA,[$x]:r.SRC_ALPHA_SATURATE,[Qx]:r.DST_COLOR,[Zx]:r.DST_ALPHA,[jx]:r.ONE_MINUS_SRC_COLOR,[Nf]:r.ONE_MINUS_SRC_ALPHA,[Jx]:r.ONE_MINUS_DST_COLOR,[Kx]:r.ONE_MINUS_DST_ALPHA,[tS]:r.CONSTANT_COLOR,[eS]:r.ONE_MINUS_CONSTANT_COLOR,[nS]:r.CONSTANT_ALPHA,[iS]:r.ONE_MINUS_CONSTANT_ALPHA};function Pt(W,Nt,wt,qt,bt,ut,$t,ve,qe,Ie){if(W===Qa){w===!0&&(Tt(r.BLEND),w=!1);return}if(w===!1&&(gt(r.BLEND),w=!0),W!==Hx){if(W!==M||Ie!==N){if((S!==br||D!==br)&&(r.blendEquation(r.FUNC_ADD),S=br,D=br),Ie)switch(W){case oo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Em:r.blendFunc(r.ONE,r.ONE);break;case bm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",W);break}else switch(W){case oo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Em:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case bm:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tm:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",W);break}C=null,U=null,F=null,B=null,z.set(0,0,0),T=0,M=W,N=Ie}return}bt=bt||Nt,ut=ut||wt,$t=$t||qt,(Nt!==S||bt!==D)&&(r.blendEquationSeparate(xt[Nt],xt[bt]),S=Nt,D=bt),(wt!==C||qt!==U||ut!==F||$t!==B)&&(r.blendFuncSeparate(Gt[wt],Gt[qt],Gt[ut],Gt[$t]),C=wt,U=qt,F=ut,B=$t),(ve.equals(z)===!1||qe!==T)&&(r.blendColor(ve.r,ve.g,ve.b,qe),z.copy(ve),T=qe),M=W,N=!1}function he(W,Nt){W.side===Vn?Tt(r.CULL_FACE):gt(r.CULL_FACE);let wt=W.side===_i;Nt&&(wt=!wt),zt(wt),W.blending===oo&&W.transparent===!1?Pt(Qa):Pt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const qt=W.stencilWrite;d.setTest(qt),qt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(W){ft!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),ft=W)}function ye(W){W!==Fx?(gt(r.CULL_FACE),W!==G&&(W===Mm?r.cullFace(r.BACK):W===Bx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),G=W}function V(W){W!==K&&(O&&r.lineWidth(W),K=W)}function Jt(W,Nt,wt){W?(gt(r.POLYGON_OFFSET_FILL),(at!==Nt||J!==wt)&&(at=Nt,J=wt,f.getReversed()&&(Nt=-Nt),r.polygonOffset(Nt,wt))):Tt(r.POLYGON_OFFSET_FILL)}function Ut(W){W?gt(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function Yt(W){W===void 0&&(W=r.TEXTURE0+j-1),ht!==W&&(r.activeTexture(W),ht=W)}function Ct(W,Nt,wt){wt===void 0&&(ht===null?wt=r.TEXTURE0+j-1:wt=ht);let qt=yt[wt];qt===void 0&&(qt={type:void 0,texture:void 0},yt[wt]=qt),(qt.type!==W||qt.texture!==Nt)&&(ht!==wt&&(r.activeTexture(wt),ht=wt),r.bindTexture(W,Nt||tt[W]),qt.type=W,qt.texture=Nt)}function L(){const W=yt[ht];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){Xe("WebGLState:",W)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(W){Xe("WebGLState:",W)}}function dt(){try{r.texSubImage2D(...arguments)}catch(W){Xe("WebGLState:",W)}}function St(){try{r.texSubImage3D(...arguments)}catch(W){Xe("WebGLState:",W)}}function lt(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Xe("WebGLState:",W)}}function Vt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Xe("WebGLState:",W)}}function Rt(){try{r.texStorage2D(...arguments)}catch(W){Xe("WebGLState:",W)}}function ee(){try{r.texStorage3D(...arguments)}catch(W){Xe("WebGLState:",W)}}function ne(){try{r.texImage2D(...arguments)}catch(W){Xe("WebGLState:",W)}}function Et(){try{r.texImage3D(...arguments)}catch(W){Xe("WebGLState:",W)}}function Mt(W){pt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),pt.copy(W))}function kt(W){At.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Ht(W,Nt){let wt=p.get(Nt);wt===void 0&&(wt=new WeakMap,p.set(Nt,wt));let qt=wt.get(W);qt===void 0&&(qt=r.getUniformBlockIndex(Nt,W.name),wt.set(W,qt))}function Lt(W,Nt){const qt=p.get(Nt).get(W);m.get(Nt)!==qt&&(r.uniformBlockBinding(Nt,qt,W.__bindingPointIndex),m.set(Nt,qt))}function Ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ht=null,yt={},v={},g=new WeakMap,y=[],E=null,w=!1,M=null,S=null,C=null,U=null,D=null,F=null,B=null,z=new me(0,0,0),T=0,N=!1,ft=null,G=null,K=null,at=null,J=null,pt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:gt,disable:Tt,bindFramebuffer:jt,drawBuffers:oe,useProgram:de,setBlending:Pt,setMaterial:he,setFlipSided:zt,setCullFace:ye,setLineWidth:V,setPolygonOffset:Jt,setScissorTest:Ut,activeTexture:Yt,bindTexture:Ct,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:Y,texImage2D:ne,texImage3D:Et,updateUBOMapping:Ht,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:ee,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:Vt,scissor:Mt,viewport:kt,reset:Ae}}function a2(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Oe,_=new WeakMap;let v;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return y?new OffscreenCanvas(L,b):vh("canvas")}function w(L,b,Y){let dt=1;const St=Ct(L);if((St.width>Y||St.height>Y)&&(dt=Y/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const lt=Math.floor(dt*St.width),Vt=Math.floor(dt*St.height);v===void 0&&(v=E(lt,Vt));const Rt=b?E(lt,Vt):v;return Rt.width=lt,Rt.height=Vt,Rt.getContext("2d").drawImage(L,0,0,lt,Vt),Se("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+lt+"x"+Vt+")."),Rt}else return"data"in L&&Se("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function M(L){return L.generateMipmaps}function S(L){r.generateMipmap(L)}function C(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(L,b,Y,dt,St=!1){if(L!==null){if(r[L]!==void 0)return r[L];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=b;if(b===r.RED&&(Y===r.FLOAT&&(lt=r.R32F),Y===r.HALF_FLOAT&&(lt=r.R16F),Y===r.UNSIGNED_BYTE&&(lt=r.R8)),b===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(lt=r.R8UI),Y===r.UNSIGNED_SHORT&&(lt=r.R16UI),Y===r.UNSIGNED_INT&&(lt=r.R32UI),Y===r.BYTE&&(lt=r.R8I),Y===r.SHORT&&(lt=r.R16I),Y===r.INT&&(lt=r.R32I)),b===r.RG&&(Y===r.FLOAT&&(lt=r.RG32F),Y===r.HALF_FLOAT&&(lt=r.RG16F),Y===r.UNSIGNED_BYTE&&(lt=r.RG8)),b===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(lt=r.RG8UI),Y===r.UNSIGNED_SHORT&&(lt=r.RG16UI),Y===r.UNSIGNED_INT&&(lt=r.RG32UI),Y===r.BYTE&&(lt=r.RG8I),Y===r.SHORT&&(lt=r.RG16I),Y===r.INT&&(lt=r.RG32I)),b===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(lt=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(lt=r.RGB16UI),Y===r.UNSIGNED_INT&&(lt=r.RGB32UI),Y===r.BYTE&&(lt=r.RGB8I),Y===r.SHORT&&(lt=r.RGB16I),Y===r.INT&&(lt=r.RGB32I)),b===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(lt=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(lt=r.RGBA16UI),Y===r.UNSIGNED_INT&&(lt=r.RGBA32UI),Y===r.BYTE&&(lt=r.RGBA8I),Y===r.SHORT&&(lt=r.RGBA16I),Y===r.INT&&(lt=r.RGBA32I)),b===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(lt=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(lt=r.R11F_G11F_B10F)),b===r.RGBA){const Vt=St?Ic:We.getTransfer(dt);Y===r.FLOAT&&(lt=r.RGBA32F),Y===r.HALF_FLOAT&&(lt=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(lt=Vt===en?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(lt=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(lt=r.RGB5_A1)}return(lt===r.R16F||lt===r.R32F||lt===r.RG16F||lt===r.RG32F||lt===r.RGBA16F||lt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function D(L,b){let Y;return L?b===null||b===La||b===xl?Y=r.DEPTH24_STENCIL8:b===pa?Y=r.DEPTH32F_STENCIL8:b===vl&&(Y=r.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===La||b===xl?Y=r.DEPTH_COMPONENT24:b===pa?Y=r.DEPTH_COMPONENT32F:b===vl&&(Y=r.DEPTH_COMPONENT16),Y}function F(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Jn&&L.minFilter!==$n?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function B(L){const b=L.target;b.removeEventListener("dispose",B),T(b),b.isVideoTexture&&_.delete(b)}function z(L){const b=L.target;b.removeEventListener("dispose",z),ft(b)}function T(L){const b=s.get(L);if(b.__webglInit===void 0)return;const Y=L.source,dt=g.get(Y);if(dt){const St=dt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&N(L),Object.keys(dt).length===0&&g.delete(Y)}s.remove(L)}function N(L){const b=s.get(L);r.deleteTexture(b.__webglTexture);const Y=L.source,dt=g.get(Y);delete dt[b.__cacheKey],f.memory.textures--}function ft(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let St=0;St<b.__webglFramebuffer[dt].length;St++)r.deleteFramebuffer(b.__webglFramebuffer[dt][St]);else r.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[dt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=L.textures;for(let dt=0,St=Y.length;dt<St;dt++){const lt=s.get(Y[dt]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),f.memory.textures--),s.remove(Y[dt])}s.remove(L)}let G=0;function K(){G=0}function at(){const L=G;return L>=l.maxTextures&&Se("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function J(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function j(L,b){const Y=s.get(L);if(L.isVideoTexture&&Ut(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const dt=L.image;if(dt===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Y,L,b);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+b)}function O(L,b){const Y=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){tt(Y,L,b);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+b)}function P(L,b){const Y=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){tt(Y,L,b);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+b)}function rt(L,b){const Y=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Y.__version!==L.version){gt(Y,L,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+b)}const ht={[_l]:r.REPEAT,[Ka]:r.CLAMP_TO_EDGE,[zf]:r.MIRRORED_REPEAT},yt={[Jn]:r.NEAREST,[rS]:r.NEAREST_MIPMAP_NEAREST,[Ac]:r.NEAREST_MIPMAP_LINEAR,[$n]:r.LINEAR,[Af]:r.LINEAR_MIPMAP_NEAREST,[Ns]:r.LINEAR_MIPMAP_LINEAR},I={[cS]:r.NEVER,[pS]:r.ALWAYS,[uS]:r.LESS,[Nh]:r.LEQUAL,[fS]:r.EQUAL,[Uh]:r.GEQUAL,[hS]:r.GREATER,[dS]:r.NOTEQUAL};function q(L,b){if(b.type===pa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===$n||b.magFilter===Af||b.magFilter===Ac||b.magFilter===Ns||b.minFilter===$n||b.minFilter===Af||b.minFilter===Ac||b.minFilter===Ns)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,ht[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,ht[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,ht[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,yt[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Jn||b.minFilter!==Ac&&b.minFilter!==Ns||b.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function pt(L,b){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",B));const dt=b.source;let St=g.get(dt);St===void 0&&(St={},g.set(dt,St));const lt=J(b);if(lt!==L.__cacheKey){St[lt]===void 0&&(St[lt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),St[lt].usedTimes++;const Vt=St[L.__cacheKey];Vt!==void 0&&(St[L.__cacheKey].usedTimes--,Vt.usedTimes===0&&N(b)),L.__cacheKey=lt,L.__webglTexture=St[lt].texture}return Y}function At(L,b,Y){return Math.floor(Math.floor(L/Y)/b)}function Xt(L,b,Y,dt){const lt=L.updateRanges;if(lt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Y,dt,b.data);else{lt.sort((Et,Mt)=>Et.start-Mt.start);let Vt=0;for(let Et=1;Et<lt.length;Et++){const Mt=lt[Vt],kt=lt[Et],Ht=Mt.start+Mt.count,Lt=At(kt.start,b.width,4),Ae=At(Mt.start,b.width,4);kt.start<=Ht+1&&Lt===Ae&&At(kt.start+kt.count-1,b.width,4)===Lt?Mt.count=Math.max(Mt.count,kt.start+kt.count-Mt.start):(++Vt,lt[Vt]=kt)}lt.length=Vt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),ee=r.getParameter(r.UNPACK_SKIP_PIXELS),ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Et=0,Mt=lt.length;Et<Mt;Et++){const kt=lt[Et],Ht=Math.floor(kt.start/4),Lt=Math.ceil(kt.count/4),Ae=Ht%b.width,W=Math.floor(Ht/b.width),Nt=Lt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,Ae,W,Nt,wt,Y,dt,b.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function tt(L,b,Y){let dt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=r.TEXTURE_3D);const St=pt(L,b),lt=b.source;i.bindTexture(dt,L.__webglTexture,r.TEXTURE0+Y);const Vt=s.get(lt);if(lt.version!==Vt.__version||St===!0){i.activeTexture(r.TEXTURE0+Y);const Rt=We.getPrimaries(We.workingColorSpace),ee=b.colorSpace===ws?null:We.getPrimaries(b.colorSpace),ne=b.colorSpace===ws||Rt===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Et=w(b.image,!1,l.maxTextureSize);Et=Yt(b,Et);const Mt=c.convert(b.format,b.colorSpace),kt=c.convert(b.type);let Ht=U(b.internalFormat,Mt,kt,b.colorSpace,b.isVideoTexture);q(dt,b);let Lt;const Ae=b.mipmaps,W=b.isVideoTexture!==!0,Nt=Vt.__version===void 0||St===!0,wt=lt.dataReady,qt=F(b,Et);if(b.isDepthTexture)Ht=D(b.format===Tr,b.type),Nt&&(W?i.texStorage2D(r.TEXTURE_2D,1,Ht,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,Ht,Et.width,Et.height,0,Mt,kt,null));else if(b.isDataTexture)if(Ae.length>0){W&&Nt&&i.texStorage2D(r.TEXTURE_2D,qt,Ht,Ae[0].width,Ae[0].height);for(let bt=0,ut=Ae.length;bt<ut;bt++)Lt=Ae[bt],W?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Mt,kt,Lt.data):i.texImage2D(r.TEXTURE_2D,bt,Ht,Lt.width,Lt.height,0,Mt,kt,Lt.data);b.generateMipmaps=!1}else W?(Nt&&i.texStorage2D(r.TEXTURE_2D,qt,Ht,Et.width,Et.height),wt&&Xt(b,Et,Mt,kt)):i.texImage2D(r.TEXTURE_2D,0,Ht,Et.width,Et.height,0,Mt,kt,Et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Ht,Ae[0].width,Ae[0].height,Et.depth);for(let bt=0,ut=Ae.length;bt<ut;bt++)if(Lt=Ae[bt],b.format!==ma)if(Mt!==null)if(W){if(wt)if(b.layerUpdates.size>0){const $t=rx(Lt.width,Lt.height,b.format,b.type);for(const ve of b.layerUpdates){const qe=Lt.data.subarray(ve*$t/Lt.data.BYTES_PER_ELEMENT,(ve+1)*$t/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,ve,Lt.width,Lt.height,1,Mt,qe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,Et.depth,Mt,Lt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Ht,Lt.width,Lt.height,Et.depth,0,Lt.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,Et.depth,Mt,kt,Lt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,Ht,Lt.width,Lt.height,Et.depth,0,Mt,kt,Lt.data)}else{W&&Nt&&i.texStorage2D(r.TEXTURE_2D,qt,Ht,Ae[0].width,Ae[0].height);for(let bt=0,ut=Ae.length;bt<ut;bt++)Lt=Ae[bt],b.format!==ma?Mt!==null?W?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Mt,Lt.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,Ht,Lt.width,Lt.height,0,Lt.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Mt,kt,Lt.data):i.texImage2D(r.TEXTURE_2D,bt,Ht,Lt.width,Lt.height,0,Mt,kt,Lt.data)}else if(b.isDataArrayTexture)if(W){if(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Ht,Et.width,Et.height,Et.depth),wt)if(b.layerUpdates.size>0){const bt=rx(Et.width,Et.height,b.format,b.type);for(const ut of b.layerUpdates){const $t=Et.data.subarray(ut*bt/Et.data.BYTES_PER_ELEMENT,(ut+1)*bt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,Et.width,Et.height,1,Mt,kt,$t)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Mt,kt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,Et.width,Et.height,Et.depth,0,Mt,kt,Et.data);else if(b.isData3DTexture)W?(Nt&&i.texStorage3D(r.TEXTURE_3D,qt,Ht,Et.width,Et.height,Et.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Mt,kt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,Ht,Et.width,Et.height,Et.depth,0,Mt,kt,Et.data);else if(b.isFramebufferTexture){if(Nt)if(W)i.texStorage2D(r.TEXTURE_2D,qt,Ht,Et.width,Et.height);else{let bt=Et.width,ut=Et.height;for(let $t=0;$t<qt;$t++)i.texImage2D(r.TEXTURE_2D,$t,Ht,bt,ut,0,Mt,kt,null),bt>>=1,ut>>=1}}else if(Ae.length>0){if(W&&Nt){const bt=Ct(Ae[0]);i.texStorage2D(r.TEXTURE_2D,qt,Ht,bt.width,bt.height)}for(let bt=0,ut=Ae.length;bt<ut;bt++)Lt=Ae[bt],W?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Mt,kt,Lt):i.texImage2D(r.TEXTURE_2D,bt,Ht,Mt,kt,Lt);b.generateMipmaps=!1}else if(W){if(Nt){const bt=Ct(Et);i.texStorage2D(r.TEXTURE_2D,qt,Ht,bt.width,bt.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,kt,Et)}else i.texImage2D(r.TEXTURE_2D,0,Ht,Mt,kt,Et);M(b)&&S(dt),Vt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function gt(L,b,Y){if(b.image.length!==6)return;const dt=pt(L,b),St=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Y);const lt=s.get(St);if(St.version!==lt.__version||dt===!0){i.activeTexture(r.TEXTURE0+Y);const Vt=We.getPrimaries(We.workingColorSpace),Rt=b.colorSpace===ws?null:We.getPrimaries(b.colorSpace),ee=b.colorSpace===ws||Vt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,Et=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let ut=0;ut<6;ut++)!ne&&!Et?Mt[ut]=w(b.image[ut],!0,l.maxCubemapSize):Mt[ut]=Et?b.image[ut].image:b.image[ut],Mt[ut]=Yt(b,Mt[ut]);const kt=Mt[0],Ht=c.convert(b.format,b.colorSpace),Lt=c.convert(b.type),Ae=U(b.internalFormat,Ht,Lt,b.colorSpace),W=b.isVideoTexture!==!0,Nt=lt.__version===void 0||dt===!0,wt=St.dataReady;let qt=F(b,kt);q(r.TEXTURE_CUBE_MAP,b);let bt;if(ne){W&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,qt,Ae,kt.width,kt.height);for(let ut=0;ut<6;ut++){bt=Mt[ut].mipmaps;for(let $t=0;$t<bt.length;$t++){const ve=bt[$t];b.format!==ma?Ht!==null?W?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,$t,0,0,ve.width,ve.height,Ht,ve.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,$t,Ae,ve.width,ve.height,0,ve.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,$t,0,0,ve.width,ve.height,Ht,Lt,ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,$t,Ae,ve.width,ve.height,0,Ht,Lt,ve.data)}}}else{if(bt=b.mipmaps,W&&Nt){bt.length>0&&qt++;const ut=Ct(Mt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,qt,Ae,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Et){W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Mt[ut].width,Mt[ut].height,Ht,Lt,Mt[ut].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ae,Mt[ut].width,Mt[ut].height,0,Ht,Lt,Mt[ut].data);for(let $t=0;$t<bt.length;$t++){const qe=bt[$t].image[ut].image;W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,$t+1,0,0,qe.width,qe.height,Ht,Lt,qe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,$t+1,Ae,qe.width,qe.height,0,Ht,Lt,qe.data)}}else{W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ht,Lt,Mt[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ae,Ht,Lt,Mt[ut]);for(let $t=0;$t<bt.length;$t++){const ve=bt[$t];W?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,$t+1,0,0,Ht,Lt,ve.image[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,$t+1,Ae,Ht,Lt,ve.image[ut])}}}M(b)&&S(r.TEXTURE_CUBE_MAP),lt.__version=St.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Tt(L,b,Y,dt,St,lt){const Vt=c.convert(Y.format,Y.colorSpace),Rt=c.convert(Y.type),ee=U(Y.internalFormat,Vt,Rt,Y.colorSpace),ne=s.get(b),Et=s.get(Y);if(Et.__renderTarget=b,!ne.__hasExternalTextures){const Mt=Math.max(1,b.width>>lt),kt=Math.max(1,b.height>>lt);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,lt,ee,Mt,kt,b.depth,0,Vt,Rt,null):i.texImage2D(St,lt,ee,Mt,kt,0,Vt,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),Jt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,St,Et.__webglTexture,0,V(b)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,St,Et.__webglTexture,lt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(L,b,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const dt=b.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,lt=D(b.stencilBuffer,St),Vt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Jt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),lt,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),lt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,lt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Vt,r.RENDERBUFFER,L)}else{const dt=b.textures;for(let St=0;St<dt.length;St++){const lt=dt[St],Vt=c.convert(lt.format,lt.colorSpace),Rt=c.convert(lt.type),ee=U(lt.internalFormat,Vt,Rt,lt.colorSpace);Jt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),ee,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),ee,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ee,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(L,b,Y){const dt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(b.depthTexture);if(St.__renderTarget=b,(!St.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt){if(St.__webglInit===void 0&&(St.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),q(r.TEXTURE_CUBE_MAP,b.depthTexture);const ne=c.convert(b.depthTexture.format),Et=c.convert(b.depthTexture.type);let Mt;b.depthTexture.format===$a?Mt=r.DEPTH_COMPONENT24:b.depthTexture.format===Tr&&(Mt=r.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Mt,b.width,b.height,0,ne,Et,null)}}else j(b.depthTexture,0);const lt=St.__webglTexture,Vt=V(b),Rt=dt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,ee=b.depthTexture.format===Tr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===$a)Jt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Rt,lt,0,Vt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Rt,lt,0);else if(b.depthTexture.format===Tr)Jt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Rt,lt,0,Vt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Rt,lt,0);else throw new Error("Unknown depthTexture format")}function de(L){const b=s.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const dt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=dt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let dt=0;dt<6;dt++)oe(b.__webglFramebuffer[dt],L,dt);else{const dt=L.texture.mipmaps;dt&&dt.length>0?oe(b.__webglFramebuffer[0],L,0):oe(b.__webglFramebuffer,L,0)}else if(Y){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=r.createRenderbuffer(),jt(b.__webglDepthbuffer[dt],L,!1);else{const St=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,lt)}}else{const dt=L.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),jt(b.__webglDepthbuffer,L,!1);else{const St=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,lt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(L,b,Y){const dt=s.get(L);b!==void 0&&Tt(dt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&de(L)}function Gt(L){const b=L.texture,Y=s.get(L),dt=s.get(b);L.addEventListener("dispose",z);const St=L.textures,lt=L.isWebGLCubeRenderTarget===!0,Vt=St.length>1;if(Vt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=b.version,f.memory.textures++),lt){Y.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[Rt]=[];for(let ee=0;ee<b.mipmaps.length;ee++)Y.__webglFramebuffer[Rt][ee]=r.createFramebuffer()}else Y.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)Y.__webglFramebuffer[Rt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Vt)for(let Rt=0,ee=St.length;Rt<ee;Rt++){const ne=s.get(St[Rt]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&Jt(L)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const ee=St[Rt];Y.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Rt]);const ne=c.convert(ee.format,ee.colorSpace),Et=c.convert(ee.type),Mt=U(ee.internalFormat,ne,Et,ee.colorSpace,L.isXRRenderTarget===!0),kt=V(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,Mt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),jt(Y.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),q(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)Tt(Y.__webglFramebuffer[Rt][ee],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ee);else Tt(Y.__webglFramebuffer[Rt],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Rt=0,ee=St.length;Rt<ee;Rt++){const ne=St[Rt],Et=s.get(ne);let Mt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Mt,Et.__webglTexture),q(Mt,ne),Tt(Y.__webglFramebuffer,L,ne,r.COLOR_ATTACHMENT0+Rt,Mt,0),M(ne)&&S(Mt)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),q(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)Tt(Y.__webglFramebuffer[ee],L,b,r.COLOR_ATTACHMENT0,Rt,ee);else Tt(Y.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,Rt,0);M(b)&&S(Rt),i.unbindTexture()}L.depthBuffer&&de(L)}function Pt(L){const b=L.textures;for(let Y=0,dt=b.length;Y<dt;Y++){const St=b[Y];if(M(St)){const lt=C(L),Vt=s.get(St).__webglTexture;i.bindTexture(lt,Vt),S(lt),i.unbindTexture()}}}const he=[],zt=[];function ye(L){if(L.samples>0){if(Jt(L)===!1){const b=L.textures,Y=L.width,dt=L.height;let St=r.COLOR_BUFFER_BIT;const lt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Vt=s.get(L),Rt=b.length>1;if(Rt)for(let ne=0;ne<b.length;ne++)i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const ee=L.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ne=0;ne<b.length;ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[ne]);const Et=s.get(b[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,Y,dt,0,0,Y,dt,St,r.NEAREST),m===!0&&(he.length=0,zt.length=0,he.push(r.COLOR_ATTACHMENT0+ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(he.push(lt),zt.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let ne=0;ne<b.length;ne++){i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[ne]);const Et=s.get(b[ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function Jt(L){const b=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ut(L){const b=f.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function Yt(L,b){const Y=L.colorSpace,dt=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==fo&&Y!==ws&&(We.getTransfer(Y)===en?(dt!==ma||St!==Ii)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",Y)),b}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=O,this.setTexture3D=P,this.setTextureCube=rt,this.rebindTextures=xt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function VS(r,t){function i(s,l=ws){let c;const f=We.getTransfer(l);if(s===Ii)return r.UNSIGNED_BYTE;if(s===bh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Th)return r.UNSIGNED_SHORT_5_5_5_1;if(s===qm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===jm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Wm)return r.BYTE;if(s===Ym)return r.SHORT;if(s===vl)return r.UNSIGNED_SHORT;if(s===Eh)return r.INT;if(s===La)return r.UNSIGNED_INT;if(s===pa)return r.FLOAT;if(s===Ja)return r.HALF_FLOAT;if(s===Zm)return r.ALPHA;if(s===Km)return r.RGB;if(s===ma)return r.RGBA;if(s===$a)return r.DEPTH_COMPONENT;if(s===Tr)return r.DEPTH_STENCIL;if(s===Ah)return r.RED;if(s===Rh)return r.RED_INTEGER;if(s===uo)return r.RG;if(s===Ch)return r.RG_INTEGER;if(s===wh)return r.RGBA_INTEGER;if(s===Cc||s===wc||s===Dc||s===Nc)if(f===en)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Cc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Cc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hf||s===Gf||s===Vf||s===kf)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Hf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xf||s===Wf||s===Yf||s===qf||s===jf||s===Zf||s===Kf)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Xf||s===Wf)return f===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Yf)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===qf)return c.COMPRESSED_R11_EAC;if(s===jf)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Zf)return c.COMPRESSED_RG11_EAC;if(s===Kf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Qf||s===Jf||s===$f||s===th||s===eh||s===nh||s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Qf)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jf)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$f)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===th)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===eh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ih)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ah)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===oh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ch)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===uh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fh||s===hh||s===dh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===fh)return f===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ph||s===mh||s===gh||s===_h)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ph)return c.COMPRESSED_RED_RGTC1_EXT;if(s===mh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_h)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const s2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r2=`
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

}`;class o2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new s0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Oa({vertexShader:s2,fragmentShader:r2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ke(new Za(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l2 extends ho{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,y=null,E=null;const w=typeof XRWebGLBinding<"u",M=new o2,S={},C=i.getContextAttributes();let U=null,D=null;const F=[],B=[],z=new Oe;let T=null;const N=new Ti;N.viewport=new Rn;const ft=new Ti;ft.viewport=new Rn;const G=[N,ft],K=new OS;let at=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let gt=F[tt];return gt===void 0&&(gt=new Rf,F[tt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(tt){let gt=F[tt];return gt===void 0&&(gt=new Rf,F[tt]=gt),gt.getGripSpace()},this.getHand=function(tt){let gt=F[tt];return gt===void 0&&(gt=new Rf,F[tt]=gt),gt.getHandSpace()};function j(tt){const gt=B.indexOf(tt.inputSource);if(gt===-1)return;const Tt=F[gt];Tt!==void 0&&(Tt.update(tt.inputSource,tt.frame,p||f),Tt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function O(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",P);for(let tt=0;tt<F.length;tt++){const gt=B[tt];gt!==null&&(B[tt]=null,F[tt].disconnect(gt))}at=null,J=null,M.reset();for(const tt in S)delete S[tt];t.setRenderTarget(U),y=null,g=null,v=null,l=null,D=null,Xt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",O),l.addEventListener("inputsourceschange",P),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,jt=null,oe=null;C.depth&&(oe=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=C.stencil?Tr:$a,jt=C.stencil?xl:La);const de={colorFormat:i.RGBA8,depthFormat:oe,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(de),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Ua(g.textureWidth,g.textureHeight,{format:ma,type:Ii,depthTexture:new Ml(g.textureWidth,g.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Ua(y.framebufferWidth,y.framebufferHeight,{format:ma,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Xt.setContext(l),Xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function P(tt){for(let gt=0;gt<tt.removed.length;gt++){const Tt=tt.removed[gt],jt=B.indexOf(Tt);jt>=0&&(B[jt]=null,F[jt].disconnect(Tt))}for(let gt=0;gt<tt.added.length;gt++){const Tt=tt.added[gt];let jt=B.indexOf(Tt);if(jt===-1){for(let de=0;de<F.length;de++)if(de>=B.length){B.push(Tt),jt=de;break}else if(B[de]===null){B[de]=Tt,jt=de;break}if(jt===-1)break}const oe=F[jt];oe&&oe.connect(Tt)}}const rt=new Z,ht=new Z;function yt(tt,gt,Tt){rt.setFromMatrixPosition(gt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);const jt=rt.distanceTo(ht),oe=gt.projectionMatrix.elements,de=Tt.projectionMatrix.elements,xt=oe[14]/(oe[10]-1),Gt=oe[14]/(oe[10]+1),Pt=(oe[9]+1)/oe[5],he=(oe[9]-1)/oe[5],zt=(oe[8]-1)/oe[0],ye=(de[8]+1)/de[0],V=xt*zt,Jt=xt*ye,Ut=jt/(-zt+ye),Yt=Ut*-zt;if(gt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Yt),tt.translateZ(Ut),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),oe[10]===-1)tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Ct=xt+Ut,L=Gt+Ut,b=V-Yt,Y=Jt+(jt-Yt),dt=Pt*Gt/L*Ct,St=he*Gt/L*Ct;tt.projectionMatrix.makePerspective(b,Y,dt,St,Ct,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function I(tt,gt){gt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(gt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let gt=tt.near,Tt=tt.far;M.texture!==null&&(M.depthNear>0&&(gt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),K.near=ft.near=N.near=gt,K.far=ft.far=N.far=Tt,(at!==K.near||J!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),at=K.near,J=K.far),K.layers.mask=tt.layers.mask|6,N.layers.mask=K.layers.mask&-5,ft.layers.mask=K.layers.mask&-3;const jt=tt.parent,oe=K.cameras;I(K,jt);for(let de=0;de<oe.length;de++)I(oe[de],jt);oe.length===2?yt(K,N,ft):K.projectionMatrix.copy(N.projectionMatrix),q(tt,K,jt)};function q(tt,gt,Tt){Tt===null?tt.matrix.copy(gt.matrixWorld):(tt.matrix.copy(Tt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(gt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=yl*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(tt){m=tt,g!==null&&(g.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(tt){return S[tt]};let pt=null;function At(tt,gt){if(_=gt.getViewerPose(p||f),E=gt,_!==null){const Tt=_.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let jt=!1;Tt.length!==K.cameras.length&&(K.cameras.length=0,jt=!0);for(let Gt=0;Gt<Tt.length;Gt++){const Pt=Tt[Gt];let he=null;if(y!==null)he=y.getViewport(Pt);else{const ye=v.getViewSubImage(g,Pt);he=ye.viewport,Gt===0&&(t.setRenderTargetTextures(D,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(D))}let zt=G[Gt];zt===void 0&&(zt=new Ti,zt.layers.enable(Gt),zt.viewport=new Rn,G[Gt]=zt),zt.matrix.fromArray(Pt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Pt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(he.x,he.y,he.width,he.height),Gt===0&&(K.matrix.copy(zt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),jt===!0&&K.cameras.push(zt)}const oe=l.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const Gt=v.getDepthInformation(Tt[0]);Gt&&Gt.isValid&&Gt.texture&&M.init(Gt,l.renderState)}if(oe&&oe.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let Gt=0;Gt<Tt.length;Gt++){const Pt=Tt[Gt].camera;if(Pt){let he=S[Pt];he||(he=new s0,S[Pt]=he);const zt=v.getCameraImage(Pt);he.sourceTexture=zt}}}}for(let Tt=0;Tt<F.length;Tt++){const jt=B[Tt],oe=F[Tt];jt!==null&&oe!==void 0&&oe.update(jt,gt,p||f)}pt&&pt(tt,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),E=null}const Xt=new FS;Xt.setAnimationLoop(At),this.setAnimationLoop=function(tt){pt=tt},this.dispose=function(){}}}const no=new _a,c2=new fn;function u2(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,TS(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,U,D){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,D)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,C,U):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===_i&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===_i&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),U=C.envMap,D=C.envMapRotation;U&&(M.envMap.value=U,no.copy(D),no.x*=-1,no.y*=-1,no.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(no.y*=-1,no.z*=-1),M.envMapRotation.value.setFromMatrix4(c2.makeRotationFromEuler(no)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,U){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=U*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===_i&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function f2(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const D=U.program;s.uniformBlockBinding(C,D)}function p(C,U){let D=l[C.id];D===void 0&&(E(C),D=_(C),l[C.id]=D,C.addEventListener("dispose",M));const F=U.program;s.updateUBOMapping(C,F);const B=t.render.frame;c[C.id]!==B&&(g(C),c[C.id]=B)}function _(C){const U=v();C.__bindingPointIndex=U;const D=r.createBuffer(),F=C.__size,B=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function v(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const U=l[C.id],D=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,z=D.length;B<z;B++){const T=Array.isArray(D[B])?D[B]:[D[B]];for(let N=0,ft=T.length;N<ft;N++){const G=T[N];if(y(G,B,N,F)===!0){const K=G.__offset,at=Array.isArray(G.value)?G.value:[G.value];let J=0;for(let j=0;j<at.length;j++){const O=at[j],P=w(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,K+J,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,J),J+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,U,D,F){const B=C.value,z=U+"_"+D;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const T=F[z];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return F[z]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function E(C){const U=C.uniforms;let D=0;const F=16;for(let z=0,T=U.length;z<T;z++){const N=Array.isArray(U[z])?U[z]:[U[z]];for(let ft=0,G=N.length;ft<G;ft++){const K=N[ft],at=Array.isArray(K.value)?K.value:[K.value];for(let J=0,j=at.length;J<j;J++){const O=at[J],P=w(O),rt=D%F,ht=rt%P.boundary,yt=rt+ht;D+=ht,yt!==0&&F-yt<P.storage&&(D+=F-yt),K.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=D,D+=P.storage}}}const B=D%F;return B>0&&(D+=F-B),C.__size=D,C.__cache={},this}function w(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Se("WebGLRenderer: Unsupported uniform value type.",C),U}function M(C){const U=C.target;U.removeEventListener("dispose",M);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const h2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ja=null;function d2(){return ja===null&&(ja=new i0(h2,16,16,uo,Ja),ja.name="DFG_LUT",ja.minFilter=$n,ja.magFilter=$n,ja.wrapS=Ka,ja.wrapT=Ka,ja.generateMipmaps=!1,ja.needsUpdate=!0),ja}class kS{constructor(t={}){const{canvas:i=mS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Ii}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const w=y,M=new Set([wh,Ch,Rh]),S=new Set([Ii,La,vl,xl,bh,Th]),C=new Uint32Array(4),U=new Int32Array(4);let D=null,F=null;const B=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ft=!1;this._outputColorSpace=Wn;let G=0,K=0,at=null,J=-1,j=null;const O=new Rn,P=new Rn;let rt=null;const ht=new me(0);let yt=0,I=i.width,q=i.height,pt=1,At=null,Xt=null;const tt=new Rn(0,0,I,q),gt=new Rn(0,0,I,q);let Tt=!1;const jt=new Ih;let oe=!1,de=!1;const xt=new fn,Gt=new Z,Pt=new Rn,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ye(){return at===null?pt:1}let V=s;function Jt(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Sh}`),i.addEventListener("webglcontextlost",$t,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",qe,!1),V===null){const X="webgl2";if(V=Jt(X,R),V===null)throw Jt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Xe("WebGLRenderer: "+R.message),R}let Ut,Yt,Ct,L,b,Y,dt,St,lt,Vt,Rt,ee,ne,Et,Mt,kt,Ht,Lt,Ae,W,Nt,wt,qt;function bt(){Ut=new mT(V),Ut.init(),Nt=new VS(V,Ut),Yt=new oT(V,Ut,t,Nt),Ct=new i2(V,Ut),Yt.reversedDepthBuffer&&g&&Ct.buffers.depth.setReversed(!0),L=new vT(V),b=new kA,Y=new a2(V,Ut,Ct,b,Yt,Nt,L),dt=new pT(N),St=new EE(V),wt=new sT(V,St),lt=new gT(V,St,L,wt),Vt=new ST(V,lt,St,wt,L),Lt=new xT(V,Yt,Y),Mt=new lT(b),Rt=new VA(N,dt,Ut,Yt,wt,Mt),ee=new u2(N,b),ne=new WA,Et=new QA(Ut),Ht=new aT(N,dt,Ct,Vt,E,m),kt=new n2(N,Vt,Yt),qt=new f2(V,L,Yt,Ct),Ae=new rT(V,Ut,L),W=new _T(V,Ut,L),L.programs=Rt.programs,N.capabilities=Yt,N.extensions=Ut,N.properties=b,N.renderLists=ne,N.shadowMap=kt,N.state=Ct,N.info=L}bt(),w!==Ii&&(T=new MT(w,i.width,i.height,l,c));const ut=new l2(N,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(R){R!==void 0&&(pt=R,this.setSize(I,q,!1))},this.getSize=function(R){return R.set(I,q)},this.setSize=function(R,X,ot=!0){if(ut.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,q=X,i.width=Math.floor(R*pt),i.height=Math.floor(X*pt),ot===!0&&(i.style.width=R+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(I*pt,q*pt).floor()},this.setDrawingBufferSize=function(R,X,ot){I=R,q=X,pt=ot,i.width=Math.floor(R*ot),i.height=Math.floor(X*ot),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(w===Ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,X,ot,et){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,X,ot,et),Ct.viewport(O.copy(tt).multiplyScalar(pt).round())},this.getScissor=function(R){return R.copy(gt)},this.setScissor=function(R,X,ot,et){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,X,ot,et),Ct.scissor(P.copy(gt).multiplyScalar(pt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){Ct.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Xt=R},this.getClearColor=function(R){return R.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ot=!0){let et=0;if(R){let $=!1;if(at!==null){const Ot=at.texture.format;$=M.has(Ot)}if($){const Ot=at.texture.type,Kt=S.has(Ot),Ft=Ht.getClearColor(),ie=Ht.getClearAlpha(),se=Ft.r,_e=Ft.g,Me=Ft.b;Kt?(C[0]=se,C[1]=_e,C[2]=Me,C[3]=ie,V.clearBufferuiv(V.COLOR,0,C)):(U[0]=se,U[1]=_e,U[2]=Me,U[3]=ie,V.clearBufferiv(V.COLOR,0,U))}else et|=V.COLOR_BUFFER_BIT}X&&(et|=V.DEPTH_BUFFER_BIT),ot&&(et|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&V.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",$t,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",qe,!1),Ht.dispose(),ne.dispose(),Et.dispose(),b.dispose(),dt.dispose(),Vt.dispose(),wt.dispose(),qt.dispose(),Rt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ts),ut.removeEventListener("sessionend",es),Pi.stop()};function $t(R){R.preventDefault(),wm("WebGLRenderer: Context Lost."),ft=!0}function ve(){wm("WebGLRenderer: Context Restored."),ft=!1;const R=L.autoReset,X=kt.enabled,ot=kt.autoUpdate,et=kt.needsUpdate,$=kt.type;bt(),L.autoReset=R,kt.enabled=X,kt.autoUpdate=ot,kt.needsUpdate=et,kt.type=$}function qe(R){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ie(R){const X=R.target;X.removeEventListener("dispose",Ie),kn(X)}function kn(R){ei(R),b.remove(R)}function ei(R){const X=b.get(R).programs;X!==void 0&&(X.forEach(function(ot){Rt.releaseProgram(ot)}),R.isShaderMaterial&&Rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ot,et,$,Ot){X===null&&(X=he);const Kt=$.isMesh&&$.matrixWorld.determinant()<0,Ft=Pa(R,X,ot,et,$);Ct.setMaterial(et,Kt);let ie=ot.index,se=1;if(et.wireframe===!0){if(ie=lt.getWireframeAttribute(ot),ie===void 0)return;se=2}const _e=ot.drawRange,Me=ot.attributes.position;let te=_e.start*se,Re=(_e.start+_e.count)*se;Ot!==null&&(te=Math.max(te,Ot.start*se),Re=Math.min(Re,(Ot.start+Ot.count)*se)),ie!==null?(te=Math.max(te,0),Re=Math.min(Re,ie.count)):Me!=null&&(te=Math.max(te,0),Re=Math.min(Re,Me.count));const mn=Re-te;if(mn<0||mn===1/0)return;wt.setup($,et,Ft,ot,ie);let gn,Ve=Ae;if(ie!==null&&(gn=St.get(ie),Ve=W,Ve.setIndex(gn)),$.isMesh)et.wireframe===!0?(Ct.setLineWidth(et.wireframeLinewidth*ye()),Ve.setMode(V.LINES)):Ve.setMode(V.TRIANGLES);else if($.isLine){let wn=et.linewidth;wn===void 0&&(wn=1),Ct.setLineWidth(wn*ye()),$.isLineSegments?Ve.setMode(V.LINES):$.isLineLoop?Ve.setMode(V.LINE_LOOP):Ve.setMode(V.LINE_STRIP)}else $.isPoints?Ve.setMode(V.POINTS):$.isSprite&&Ve.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Pc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ve.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))Ve.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const wn=$._multiDrawStarts,Qt=$._multiDrawCounts,jn=$._multiDrawCount,xe=ie?St.get(ie).bytesPerElement:1,_n=b.get(et).currentProgram.getUniforms();for(let vn=0;vn<jn;vn++)_n.setValue(V,"_gl_DrawID",vn),Ve.render(wn[vn]/xe,Qt[vn])}else if($.isInstancedMesh)Ve.renderInstances(te,mn,$.count);else if(ot.isInstancedBufferGeometry){const wn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Qt=Math.min(ot.instanceCount,wn);Ve.renderInstances(te,mn,Qt)}else Ve.render(te,mn)};function va(R,X,ot){R.transparent===!0&&R.side===Vn&&R.forceSinglePass===!1?(R.side=_i,R.needsUpdate=!0,Ji(R,X,ot),R.side=Ls,R.needsUpdate=!0,Ji(R,X,ot),R.side=Vn):Ji(R,X,ot)}this.compile=function(R,X,ot=null){ot===null&&(ot=R),F=Et.get(ot),F.init(X),z.push(F),ot.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),R!==ot&&R.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),F.setupLights();const et=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ot=$.material;if(Ot)if(Array.isArray(Ot))for(let Kt=0;Kt<Ot.length;Kt++){const Ft=Ot[Kt];va(Ft,ot,$),et.add(Ft)}else va(Ot,ot,$),et.add(Ot)}),F=z.pop(),et},this.compileAsync=function(R,X,ot=null){const et=this.compile(R,X,ot);return new Promise($=>{function Ot(){if(et.forEach(function(Kt){b.get(Kt).currentProgram.isReady()&&et.delete(Kt)}),et.size===0){$(R);return}setTimeout(Ot,10)}Ut.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Os=null;function Ia(R){Os&&Os(R)}function ts(){Pi.stop()}function es(){Pi.start()}const Pi=new FS;Pi.setAnimationLoop(Ia),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){Os=R,ut.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},ut.addEventListener("sessionstart",ts),ut.addEventListener("sessionend",es),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ft===!0)return;const ot=ut.enabled===!0&&ut.isPresenting===!0,et=T!==null&&(at===null||ot)&&T.begin(N,at);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,X,at),F=Et.get(R,z.length),F.init(X),z.push(F),xt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),jt.setFromProjectionMatrix(xt,Da,X.reversedDepth),de=this.localClippingEnabled,oe=Mt.init(this.clippingPlanes,de),D=ne.get(R,B.length),D.init(),B.push(D),ut.enabled===!0&&ut.isPresenting===!0){const Kt=N.xr.getDepthSensingMesh();Kt!==null&&ns(Kt,X,-1/0,N.sortObjects)}ns(R,X,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(At,Xt),zt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,zt&&Ht.addToRenderList(D,R),this.info.render.frame++,oe===!0&&Mt.beginShadows();const $=F.state.shadowsArray;if(kt.render($,R,X),oe===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&T.hasRenderPass())===!1){const Kt=D.opaque,Ft=D.transmissive;if(F.setupLights(),X.isArrayCamera){const ie=X.cameras;if(Ft.length>0)for(let se=0,_e=ie.length;se<_e;se++){const Me=ie[se];En(Kt,Ft,R,Me)}zt&&Ht.render(R);for(let se=0,_e=ie.length;se<_e;se++){const Me=ie[se];Ai(D,R,Me,Me.viewport)}}else Ft.length>0&&En(Kt,Ft,R,X),zt&&Ht.render(R),Ai(D,R,X)}at!==null&&K===0&&(Y.updateMultisampleRenderTarget(at),Y.updateRenderTargetMipmap(at)),et&&T.end(N),R.isScene===!0&&R.onAfterRender(N,R,X),wt.resetDefaultState(),J=-1,j=null,z.pop(),z.length>0?(F=z[z.length-1],oe===!0&&Mt.setGlobalState(N.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function ns(R,X,ot,et){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||jt.intersectsSprite(R)){et&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xt);const Kt=Vt.update(R),Ft=R.material;Ft.visible&&D.push(R,Kt,Ft,ot,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||jt.intersectsObject(R))){const Kt=Vt.update(R),Ft=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),Pt.copy(Kt.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(xt)),Array.isArray(Ft)){const ie=Kt.groups;for(let se=0,_e=ie.length;se<_e;se++){const Me=ie[se],te=Ft[Me.materialIndex];te&&te.visible&&D.push(R,Kt,te,ot,Pt.z,Me)}}else Ft.visible&&D.push(R,Kt,Ft,ot,Pt.z,null)}}const Ot=R.children;for(let Kt=0,Ft=Ot.length;Kt<Ft;Kt++)ns(Ot[Kt],X,ot,et)}function Ai(R,X,ot,et){const{opaque:$,transmissive:Ot,transparent:Kt}=R;F.setupLightsView(ot),oe===!0&&Mt.setGlobalState(N.clippingPlanes,ot),et&&Ct.viewport(O.copy(et)),$.length>0&&Cn($,X,ot),Ot.length>0&&Cn(Ot,X,ot),Kt.length>0&&Cn(Kt,X,ot),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function En(R,X,ot,et){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[et.id]===void 0){const te=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[et.id]=new Ua(1,1,{generateMipmaps:!0,type:te?Ja:Ii,minFilter:Ns,samples:Math.max(4,Yt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const Ot=F.state.transmissionRenderTarget[et.id],Kt=et.viewport||O;Ot.setSize(Kt.z*N.transmissionResolutionScale,Kt.w*N.transmissionResolutionScale);const Ft=N.getRenderTarget(),ie=N.getActiveCubeFace(),se=N.getActiveMipmapLevel();N.setRenderTarget(Ot),N.getClearColor(ht),yt=N.getClearAlpha(),yt<1&&N.setClearColor(16777215,.5),N.clear(),zt&&Ht.render(ot);const _e=N.toneMapping;N.toneMapping=Na;const Me=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),F.setupLightsView(et),oe===!0&&Mt.setGlobalState(N.clippingPlanes,et),Cn(R,ot,et),Y.updateMultisampleRenderTarget(Ot),Y.updateRenderTargetMipmap(Ot),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Re=0,mn=X.length;Re<mn;Re++){const gn=X[Re],{object:Ve,geometry:wn,material:Qt,group:jn}=gn;if(Qt.side===Vn&&Ve.layers.test(et.layers)){const xe=Qt.side;Qt.side=_i,Qt.needsUpdate=!0,Fi(Ve,ot,et,wn,Qt,jn),Qt.side=xe,Qt.needsUpdate=!0,te=!0}}te===!0&&(Y.updateMultisampleRenderTarget(Ot),Y.updateRenderTargetMipmap(Ot))}N.setRenderTarget(Ft,ie,se),N.setClearColor(ht,yt),Me!==void 0&&(et.viewport=Me),N.toneMapping=_e}function Cn(R,X,ot){const et=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Ot=R.length;$<Ot;$++){const Kt=R[$],{object:Ft,geometry:ie,group:se}=Kt;let _e=Kt.material;_e.allowOverride===!0&&et!==null&&(_e=et),Ft.layers.test(ot.layers)&&Fi(Ft,X,ot,ie,_e,se)}}function Fi(R,X,ot,et,$,Ot){R.onBeforeRender(N,X,ot,et,$,Ot),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(N,X,ot,et,R,Ot),$.transparent===!0&&$.side===Vn&&$.forceSinglePass===!1?($.side=_i,$.needsUpdate=!0,N.renderBufferDirect(ot,X,et,$,R,Ot),$.side=Ls,$.needsUpdate=!0,N.renderBufferDirect(ot,X,et,$,R,Ot),$.side=Vn):N.renderBufferDirect(ot,X,et,$,R,Ot),R.onAfterRender(N,X,ot,et,$,Ot)}function Ji(R,X,ot){X.isScene!==!0&&(X=he);const et=b.get(R),$=F.state.lights,Ot=F.state.shadowsArray,Kt=$.state.version,Ft=Rt.getParameters(R,$.state,Ot,X,ot),ie=Rt.getProgramCacheKey(Ft);let se=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,et.fog=X.fog;const _e=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=dt.get(R.envMap||et.environment,_e),et.envMapRotation=et.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,se===void 0&&(R.addEventListener("dispose",Ie),se=new Map,et.programs=se);let Me=se.get(ie);if(Me!==void 0){if(et.currentProgram===Me&&et.lightsStateVersion===Kt)return ni(R,Ft),Me}else Ft.uniforms=Rt.getUniforms(R),R.onBeforeCompile(Ft,N),Me=Rt.acquireProgram(Ft,ie),se.set(ie,Me),et.uniforms=Ft.uniforms;const te=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Mt.uniform),ni(R,Ft),et.needsLights=is(R),et.lightsStateVersion=Kt,et.needsLights&&(te.ambientLightColor.value=$.state.ambient,te.lightProbe.value=$.state.probe,te.directionalLights.value=$.state.directional,te.directionalLightShadows.value=$.state.directionalShadow,te.spotLights.value=$.state.spot,te.spotLightShadows.value=$.state.spotShadow,te.rectAreaLights.value=$.state.rectArea,te.ltc_1.value=$.state.rectAreaLTC1,te.ltc_2.value=$.state.rectAreaLTC2,te.pointLights.value=$.state.point,te.pointLightShadows.value=$.state.pointShadow,te.hemisphereLights.value=$.state.hemi,te.directionalShadowMatrix.value=$.state.directionalShadowMatrix,te.spotLightMatrix.value=$.state.spotLightMatrix,te.spotLightMap.value=$.state.spotLightMap,te.pointShadowMatrix.value=$.state.pointShadowMatrix),et.currentProgram=Me,et.uniformsList=null,Me}function Is(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=wf.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function ni(R,X){const ot=b.get(R);ot.outputColorSpace=X.outputColorSpace,ot.batching=X.batching,ot.batchingColor=X.batchingColor,ot.instancing=X.instancing,ot.instancingColor=X.instancingColor,ot.instancingMorph=X.instancingMorph,ot.skinning=X.skinning,ot.morphTargets=X.morphTargets,ot.morphNormals=X.morphNormals,ot.morphColors=X.morphColors,ot.morphTargetsCount=X.morphTargetsCount,ot.numClippingPlanes=X.numClippingPlanes,ot.numIntersection=X.numClipIntersection,ot.vertexAlphas=X.vertexAlphas,ot.vertexTangents=X.vertexTangents,ot.toneMapping=X.toneMapping}function Pa(R,X,ot,et,$){X.isScene!==!0&&(X=he),Y.resetTextureUnits();const Ot=X.fog,Kt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?X.environment:null,Ft=at===null?N.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:fo,ie=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,se=dt.get(et.envMap||Kt,ie),_e=et.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Me=!!ot.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),te=!!ot.morphAttributes.position,Re=!!ot.morphAttributes.normal,mn=!!ot.morphAttributes.color;let gn=Na;et.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(gn=N.toneMapping);const Ve=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,wn=Ve!==void 0?Ve.length:0,Qt=b.get(et),jn=F.state.lights;if(oe===!0&&(de===!0||R!==j)){const Dn=R===j&&et.id===J;Mt.setState(et,R,Dn)}let xe=!1;et.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==jn.state.version||Qt.outputColorSpace!==Ft||$.isBatchedMesh&&Qt.batching===!1||!$.isBatchedMesh&&Qt.batching===!0||$.isBatchedMesh&&Qt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qt.instancing===!1||!$.isInstancedMesh&&Qt.instancing===!0||$.isSkinnedMesh&&Qt.skinning===!1||!$.isSkinnedMesh&&Qt.skinning===!0||$.isInstancedMesh&&Qt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qt.instancingMorph===!1&&$.morphTexture!==null||Qt.envMap!==se||et.fog===!0&&Qt.fog!==Ot||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Mt.numPlanes||Qt.numIntersection!==Mt.numIntersection)||Qt.vertexAlphas!==_e||Qt.vertexTangents!==Me||Qt.morphTargets!==te||Qt.morphNormals!==Re||Qt.morphColors!==mn||Qt.toneMapping!==gn||Qt.morphTargetsCount!==wn)&&(xe=!0):(xe=!0,Qt.__version=et.version);let _n=Qt.currentProgram;xe===!0&&(_n=Ji(et,X,$));let vn=!1,vi=!1,ci=!1;const Ee=_n.getUniforms(),yn=Qt.uniforms;if(Ct.useProgram(_n.program)&&(vn=!0,vi=!0,ci=!0),et.id!==J&&(J=et.id,vi=!0),vn||j!==R){Ct.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ee.setValue(V,"projectionMatrix",R.projectionMatrix),Ee.setValue(V,"viewMatrix",R.matrixWorldInverse);const ui=Ee.map.cameraPosition;ui!==void 0&&ui.setValue(V,Gt.setFromMatrixPosition(R.matrixWorld)),Yt.logarithmicDepthBuffer&&Ee.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ee.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),j!==R&&(j=R,vi=!0,ci=!0)}if(Qt.needsLights&&(jn.state.directionalShadowMap.length>0&&Ee.setValue(V,"directionalShadowMap",jn.state.directionalShadowMap,Y),jn.state.spotShadowMap.length>0&&Ee.setValue(V,"spotShadowMap",jn.state.spotShadowMap,Y),jn.state.pointShadowMap.length>0&&Ee.setValue(V,"pointShadowMap",jn.state.pointShadowMap,Y)),$.isSkinnedMesh){Ee.setOptional(V,$,"bindMatrix"),Ee.setOptional(V,$,"bindMatrixInverse");const Dn=$.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Ee.setValue(V,"boneTexture",Dn.boneTexture,Y))}$.isBatchedMesh&&(Ee.setOptional(V,$,"batchingTexture"),Ee.setValue(V,"batchingTexture",$._matricesTexture,Y),Ee.setOptional(V,$,"batchingIdTexture"),Ee.setValue(V,"batchingIdTexture",$._indirectTexture,Y),Ee.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Ee.setValue(V,"batchingColorTexture",$._colorsTexture,Y));const ii=ot.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Lt.update($,ot,_n),(vi||Qt.receiveShadow!==$.receiveShadow)&&(Qt.receiveShadow=$.receiveShadow,Ee.setValue(V,"receiveShadow",$.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&X.environment!==null&&(yn.envMapIntensity.value=X.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=d2()),vi&&(Ee.setValue(V,"toneMappingExposure",N.toneMappingExposure),Qt.needsLights&&Bi(yn,ci),Ot&&et.fog===!0&&ee.refreshFogUniforms(yn,Ot),ee.refreshMaterialUniforms(yn,et,pt,q,F.state.transmissionRenderTarget[R.id]),wf.upload(V,Is(Qt),yn,Y)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(wf.upload(V,Is(Qt),yn,Y),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ee.setValue(V,"center",$.center),Ee.setValue(V,"modelViewMatrix",$.modelViewMatrix),Ee.setValue(V,"normalMatrix",$.normalMatrix),Ee.setValue(V,"modelMatrix",$.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Dn=et.uniformsGroups;for(let ui=0,Hi=Dn.length;ui<Hi;ui++){const Ps=Dn[ui];qt.update(Ps,_n),qt.bind(Ps,_n)}}return _n}function Bi(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function is(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(R,X,ot){const et=b.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=X,b.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:ot,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const ot=b.get(R);ot.__webglFramebuffer=X,ot.__useDefaultFramebuffer=X===void 0};const $i=V.createFramebuffer();this.setRenderTarget=function(R,X=0,ot=0){at=R,G=X,K=ot;let et=null,$=!1,Ot=!1;if(R){const Ft=b.get(R);if(Ft.__useDefaultFramebuffer!==void 0){Ct.bindFramebuffer(V.FRAMEBUFFER,Ft.__webglFramebuffer),O.copy(R.viewport),P.copy(R.scissor),rt=R.scissorTest,Ct.viewport(O),Ct.scissor(P),Ct.setScissorTest(rt),J=-1;return}else if(Ft.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Ft.__hasExternalTextures)Y.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const _e=R.depthTexture;if(Ft.__boundDepthTexture!==_e){if(_e!==null&&b.has(_e)&&(R.width!==_e.image.width||R.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const ie=R.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ot=!0);const se=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(se[X])?et=se[X][ot]:et=se[X],$=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?et=b.get(R).__webglMultisampledFramebuffer:Array.isArray(se)?et=se[ot]:et=se,O.copy(R.viewport),P.copy(R.scissor),rt=R.scissorTest}else O.copy(tt).multiplyScalar(pt).floor(),P.copy(gt).multiplyScalar(pt).floor(),rt=Tt;if(ot!==0&&(et=$i),Ct.bindFramebuffer(V.FRAMEBUFFER,et)&&Ct.drawBuffers(R,et),Ct.viewport(O),Ct.scissor(P),Ct.setScissorTest(rt),$){const Ft=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ft.__webglTexture,ot)}else if(Ot){const Ft=X;for(let ie=0;ie<R.textures.length;ie++){const se=b.get(R.textures[ie]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ie,se.__webglTexture,ot,Ft)}}else if(R!==null&&ot!==0){const Ft=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ft.__webglTexture,ot)}J=-1},this.readRenderTargetPixels=function(R,X,ot,et,$,Ot,Kt,Ft=0){if(!(R&&R.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Kt!==void 0&&(ie=ie[Kt]),ie){Ct.bindFramebuffer(V.FRAMEBUFFER,ie);try{const se=R.textures[Ft],_e=se.format,Me=se.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ft),!Yt.textureFormatReadable(_e)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Me)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-et&&ot>=0&&ot<=R.height-$&&V.readPixels(X,ot,et,$,Nt.convert(_e),Nt.convert(Me),Ot)}finally{const se=at!==null?b.get(at).__webglFramebuffer:null;Ct.bindFramebuffer(V.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(R,X,ot,et,$,Ot,Kt,Ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Kt!==void 0&&(ie=ie[Kt]),ie)if(X>=0&&X<=R.width-et&&ot>=0&&ot<=R.height-$){Ct.bindFramebuffer(V.FRAMEBUFFER,ie);const se=R.textures[Ft],_e=se.format,Me=se.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ft),!Yt.textureFormatReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.bufferData(V.PIXEL_PACK_BUFFER,Ot.byteLength,V.STREAM_READ),V.readPixels(X,ot,et,$,Nt.convert(_e),Nt.convert(Me),0);const Re=at!==null?b.get(at).__webglFramebuffer:null;Ct.bindFramebuffer(V.FRAMEBUFFER,Re);const mn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await LM(V,mn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ot),V.deleteBuffer(te),V.deleteSync(mn),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ot=0){const et=Math.pow(2,-ot),$=Math.floor(R.image.width*et),Ot=Math.floor(R.image.height*et),Kt=X!==null?X.x:0,Ft=X!==null?X.y:0;Y.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,Kt,Ft,$,Ot),Ct.unbindTexture()};const hn=V.createFramebuffer(),zi=V.createFramebuffer();this.copyTextureToTexture=function(R,X,ot=null,et=null,$=0,Ot=0){let Kt,Ft,ie,se,_e,Me,te,Re,mn;const gn=R.isCompressedTexture?R.mipmaps[Ot]:R.image;if(ot!==null)Kt=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,ie=ot.isBox3?ot.max.z-ot.min.z:1,se=ot.min.x,_e=ot.min.y,Me=ot.isBox3?ot.min.z:0;else{const yn=Math.pow(2,-$);Kt=Math.floor(gn.width*yn),Ft=Math.floor(gn.height*yn),R.isDataArrayTexture?ie=gn.depth:R.isData3DTexture?ie=Math.floor(gn.depth*yn):ie=1,se=0,_e=0,Me=0}et!==null?(te=et.x,Re=et.y,mn=et.z):(te=0,Re=0,mn=0);const Ve=Nt.convert(X.format),wn=Nt.convert(X.type);let Qt;X.isData3DTexture?(Y.setTexture3D(X,0),Qt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Y.setTexture2DArray(X,0),Qt=V.TEXTURE_2D_ARRAY):(Y.setTexture2D(X,0),Qt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const jn=V.getParameter(V.UNPACK_ROW_LENGTH),xe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),_n=V.getParameter(V.UNPACK_SKIP_PIXELS),vn=V.getParameter(V.UNPACK_SKIP_ROWS),vi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,gn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,gn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,se),V.pixelStorei(V.UNPACK_SKIP_ROWS,_e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Me);const ci=R.isDataArrayTexture||R.isData3DTexture,Ee=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const yn=b.get(R),ii=b.get(X),Dn=b.get(yn.__renderTarget),ui=b.get(ii.__renderTarget);Ct.bindFramebuffer(V.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Ct.bindFramebuffer(V.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Hi=0;Hi<ie;Hi++)ci&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(R).__webglTexture,$,Me+Hi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(X).__webglTexture,Ot,mn+Hi)),V.blitFramebuffer(se,_e,Kt,Ft,te,Re,Kt,Ft,V.DEPTH_BUFFER_BIT,V.NEAREST);Ct.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||b.has(R)){const yn=b.get(R),ii=b.get(X);Ct.bindFramebuffer(V.READ_FRAMEBUFFER,hn),Ct.bindFramebuffer(V.DRAW_FRAMEBUFFER,zi);for(let Dn=0;Dn<ie;Dn++)ci?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,yn.__webglTexture,$,Me+Dn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yn.__webglTexture,$),Ee?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ii.__webglTexture,Ot,mn+Dn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ii.__webglTexture,Ot),$!==0?V.blitFramebuffer(se,_e,Kt,Ft,te,Re,Kt,Ft,V.COLOR_BUFFER_BIT,V.NEAREST):Ee?V.copyTexSubImage3D(Qt,Ot,te,Re,mn+Dn,se,_e,Kt,Ft):V.copyTexSubImage2D(Qt,Ot,te,Re,se,_e,Kt,Ft);Ct.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ee?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Qt,Ot,te,Re,mn,Kt,Ft,ie,Ve,wn,gn.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Qt,Ot,te,Re,mn,Kt,Ft,ie,Ve,gn.data):V.texSubImage3D(Qt,Ot,te,Re,mn,Kt,Ft,ie,Ve,wn,gn):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ot,te,Re,Kt,Ft,Ve,wn,gn.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ot,te,Re,gn.width,gn.height,Ve,gn.data):V.texSubImage2D(V.TEXTURE_2D,Ot,te,Re,Kt,Ft,Ve,wn,gn);V.pixelStorei(V.UNPACK_ROW_LENGTH,jn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,_n),V.pixelStorei(V.UNPACK_SKIP_ROWS,vn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,vi),Ot===0&&X.generateMipmaps&&V.generateMipmap(Qt),Ct.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Ct.unbindTexture()},this.resetState=function(){G=0,K=0,at=null,Ct.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),i.unpackColorSpace=We._getUnpackColorSpace()}}const p2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Mh,AddEquation:br,AddOperation:sS,AdditiveBlending:Em,AgXToneMapping:Vm,AlphaFormat:Zm,AlwaysCompare:pS,AlwaysDepth:Lf,AlwaysStencilFunc:Am,AmbientLight:US,ArrayCamera:OS,BackSide:_i,BasicDepthPacking:oS,Box3:Cr,BoxGeometry:wr,BufferAttribute:ga,BufferGeometry:Qi,ByteType:Wm,Camera:l0,CanvasTexture:pl,CatmullRomCurve3:bS,CineonToneMapping:Hm,ClampToEdgeWrapping:Ka,Clock:PS,Color:me,ColorManagement:We,ConstantAlphaFactor:nS,ConstantColorFactor:tS,CubeCamera:LS,CubeDepthTexture:MS,CubeReflectionMapping:Rr,CubeRefractionMapping:co,CubeTexture:a0,CubeUVReflectionMapping:zc,CullFaceBack:Mm,CullFaceFront:Bx,CullFaceNone:Fx,Curve:ES,CustomBlending:Hx,CustomToneMapping:Gm,Data3DTexture:xS,DataArrayTexture:Jm,DataTexture:i0,DepthFormat:$a,DepthStencilFormat:Tr,DepthTexture:Ml,DirectionalLight:Nm,DoubleSide:Vn,DstAlphaFactor:Zx,DstColorFactor:Qx,EqualCompare:fS,EqualDepth:If,EquirectangularReflectionMapping:bf,EquirectangularRefractionMapping:Tf,Euler:_a,EventDispatcher:ho,ExternalTexture:s0,Float32BufferAttribute:ti,FloatType:pa,Fog:Fc,FrontSide:Ls,Frustum:Ih,GLSL3:Cm,GreaterCompare:hS,GreaterDepth:Ff,GreaterEqualCompare:Uh,GreaterEqualDepth:Pf,Group:dl,HalfFloatType:Ja,HemisphereLight:NS,ImageUtils:_S,InstancedBufferAttribute:Dm,InstancedMesh:yS,IntType:Eh,KeepStencilOp:ao,Layers:Oh,LessCompare:uS,LessDepth:Of,LessEqualCompare:Nh,LessEqualDepth:lo,Light:Al,LinearFilter:$n,LinearMipmapLinearFilter:Ns,LinearMipmapNearestFilter:Af,LinearSRGBColorSpace:fo,LinearToneMapping:Bm,LinearTransfer:Ic,Material:mo,MathUtils:gi,Matrix3:we,Matrix4:fn,MaxEquation:Xx,Mesh:ke,MeshBasicMaterial:Bc,MeshDepthMaterial:wS,MeshDistanceMaterial:DS,MeshLambertMaterial:CS,MeshPhysicalMaterial:so,MeshStandardMaterial:Ds,MinEquation:kx,MirroredRepeatWrapping:zf,MixOperation:aS,MultiplyBlending:Tm,MultiplyOperation:yh,NearestFilter:Jn,NearestMipmapLinearFilter:Ac,NearestMipmapNearestFilter:rS,NeutralToneMapping:km,NeverCompare:cS,NeverDepth:Uf,NoBlending:Qa,NoColorSpace:ws,NoToneMapping:Na,NormalBlending:oo,NotEqualCompare:dS,NotEqualDepth:Bf,Object3D:pn,ObjectSpaceNormalMap:lS,OneFactor:Yx,OneMinusConstantAlphaFactor:iS,OneMinusConstantColorFactor:eS,OneMinusDstAlphaFactor:Kx,OneMinusDstColorFactor:Jx,OneMinusSrcAlphaFactor:Nf,OneMinusSrcColorFactor:jx,OrthographicCamera:Bh,PCFShadowMap:ml,PCFSoftShadowMap:zx,PMREMGenerator:xh,PerspectiveCamera:Ti,Plane:Er,PlaneGeometry:Za,PointLight:Oc,Quaternion:po,R11_EAC_Format:qf,RED_GREEN_RGTC2_Format:gh,RED_RGTC1_Format:ph,REVISION:Sh,RG11_EAC_Format:Zf,RGBAFormat:ma,RGBAIntegerFormat:wh,RGBA_ASTC_10x10_Format:lh,RGBA_ASTC_10x5_Format:sh,RGBA_ASTC_10x6_Format:rh,RGBA_ASTC_10x8_Format:oh,RGBA_ASTC_12x10_Format:ch,RGBA_ASTC_12x12_Format:uh,RGBA_ASTC_4x4_Format:Qf,RGBA_ASTC_5x4_Format:Jf,RGBA_ASTC_5x5_Format:$f,RGBA_ASTC_6x5_Format:th,RGBA_ASTC_6x6_Format:eh,RGBA_ASTC_8x5_Format:nh,RGBA_ASTC_8x6_Format:ih,RGBA_ASTC_8x8_Format:ah,RGBA_BPTC_Format:fh,RGBA_ETC2_EAC_Format:Yf,RGBA_PVRTC_2BPPV1_Format:kf,RGBA_PVRTC_4BPPV1_Format:Vf,RGBA_S3TC_DXT1_Format:wc,RGBA_S3TC_DXT3_Format:Dc,RGBA_S3TC_DXT5_Format:Nc,RGBFormat:Km,RGB_BPTC_SIGNED_Format:hh,RGB_BPTC_UNSIGNED_Format:dh,RGB_ETC1_Format:Xf,RGB_ETC2_Format:Wf,RGB_PVRTC_2BPPV1_Format:Gf,RGB_PVRTC_4BPPV1_Format:Hf,RGB_S3TC_DXT1_Format:Cc,RGFormat:uo,RGIntegerFormat:Ch,RawShaderMaterial:RS,Ray:n0,Raycaster:IS,RedFormat:Ah,RedIntegerFormat:Rh,ReinhardToneMapping:zm,RenderTarget:vS,RepeatWrapping:_l,ReverseSubtractEquation:Vx,RingGeometry:Ph,SIGNED_R11_EAC_Format:jf,SIGNED_RED_GREEN_RGTC2_Format:_h,SIGNED_RED_RGTC1_Format:mh,SIGNED_RG11_EAC_Format:Kf,SRGBColorSpace:Wn,SRGBTransfer:en,Scene:$m,ShaderChunk:Ne,ShaderLib:wa,ShaderMaterial:Oa,ShortType:Ym,Source:Lh,Sphere:Tl,SphereGeometry:Fh,SpotLight:Cf,SrcAlphaFactor:Df,SrcAlphaSaturateFactor:$x,SrcColorFactor:qx,StaticDrawUsage:Rm,SubtractEquation:Gx,SubtractiveBlending:bm,TangentSpaceNormalMap:Dh,Texture:li,Triangle:da,UVMapping:Xm,Uint16BufferAttribute:t0,Uint32BufferAttribute:e0,UniformsLib:Wt,UniformsUtils:AS,UnsignedByteType:Ii,UnsignedInt101111Type:jm,UnsignedInt248Type:xl,UnsignedInt5999Type:qm,UnsignedIntType:La,UnsignedShort4444Type:bh,UnsignedShort5551Type:Th,UnsignedShortType:vl,VSMShadowMap:hl,Vector2:Oe,Vector3:Z,Vector4:Rn,WebGLCoordinateSystem:Da,WebGLCubeRenderTarget:c0,WebGLRenderTarget:Ua,WebGLRenderer:kS,WebGLUtils:VS,WebGPUCoordinateSystem:Sl,WebXRController:Rf,ZeroFactor:Wx,createCanvasElement:mS,error:Xe,log:wm,warn:Se,warnOnce:Pc},Symbol.toStringTag,{value:"Module"}));class m2 extends $m{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new wr;t.deleteAttribute("uv");const i=new Ds({side:_i}),s=new Ds,l=new Oc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new ke(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new yS(t,s,6),d=new pn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),f.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),f.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),f.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),f.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),f.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),f.setMatrixAt(5,d.matrix),this.add(f);const m=new ke(t,cl(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new ke(t,cl(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new ke(t,cl(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new ke(t,cl(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new ke(t,cl(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new ke(t,cl(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function cl(r){return new CS({color:0,emissive:16777215,emissiveIntensity:r})}const g2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],_2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],v2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],x2=["LOW","MEDIUM","HIGH","EXTREME"],S2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],y2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],M2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},E2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},b2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},T2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},A2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function XS(r){return(r-90)*Math.PI/180}function R2(r,t,i,s){const l=XS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function ul(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function WS(r){ul("subject",r.subject,g2),ul("domain",r.domain,_2),ul("verb",r.verb,v2),ul("magnitude",r.magnitude,x2),ul("time",r.time,S2),ul("certainty",r.certainty,y2)}function C2(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=A2[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return WS(s),s}function w2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),d=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,d=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,d):r.lineTo(f,d)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Ec(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,d=Math.sqrt(c*c+f*f)||1,m=c/d,p=f/d,_=-p,v=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+v*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-v*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function bc(r,t,i,s,l,c){const f=T2[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let d=1;d<=f;d+=1){const m=d/(f+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const v=1-m;p=v*v*i.x+2*v*m*c.x+m*m*s.x,_=v*v*i.y+2*v*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function D2(r,t,i){WS(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,d=l*.5,m=i?.backgroundColor,p=i?.lineColor,_=i?.gridColor;r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,d,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(f,d,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,d,c*.12,0,Math.PI*2),r.stroke();const v=M2[t.domain],g=E2[t.time]*c,y=b2[t.magnitude]*c,E=R2(f,d,g,v),w=XS(v),M=Math.cos(w),S=Math.sin(w),C=-S,U=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let D={x:E.x,y:E.y},F={x:E.x+M*y,y:E.y+S*y},B;if(t.verb==="EXISTS")D={x:E.x-C*(y*.48),y:E.y-U*(y*.48)},F={x:E.x+C*(y*.48),y:E.y+U*(y*.48)},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(F.x,F.y),r.stroke(),bc(r,t,D,F,p);else if(t.verb==="DECLINES")F={x:E.x-M*y,y:E.y-S*y},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(F.x,F.y),r.stroke(),Ec(r,D,F,p,7),bc(r,t,D,F,p);else if(t.verb==="TRANSFORMS")B={x:E.x+C*(y*.34)+M*(y*.34),y:E.y+U*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(D.x,D.y),r.quadraticCurveTo(B.x,B.y,F.x,F.y),r.stroke(),Ec(r,B,F,p,7),bc(r,t,D,F,p,B);else if(t.verb==="INFLUENCES"){const T={x:E.x+C*3.4,y:E.y+U*3.4},N={x:F.x+C*3.4,y:F.y+U*3.4},ft={x:E.x-C*3.4,y:E.y-U*3.4},G={x:F.x-C*3.4,y:F.y-U*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(N.x,N.y),r.moveTo(ft.x,ft.y),r.lineTo(G.x,G.y),r.stroke(),Ec(r,T,N,p,6.6),Ec(r,ft,G,p,6.6),bc(r,t,T,N,p)}else r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(F.x,F.y),r.stroke(),Ec(r,D,F,p,7),bc(r,t,D,F,p);r.fillStyle=p,r.beginPath(),r.arc(f,d,5,0,Math.PI*2),r.fill(),w2(r,t.subject,E,p)}function N2(r,t,i){const s=C2(t);D2(r,s,i)}const wx="intelligenspartiet:language",U2={nb:{siteName:"INTELLIGENSPARTIET",languageLabel:"Språk",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Videoer",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideBack:"Tilbake",outsideVideosTitle:"Videoer",outsideVideosBody:"Et sekskantrom med video på hver flate.",outsideSignaturesTitle:"Signaturer",outsideSignaturesBody:"Denne funksjonen kommer. Ta kontakt hvis du vil engasjere deg.",outsideSignaturesContact:"Kontakt Lars",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",languageLabel:"Language",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Videos",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideBack:"Back",outsideVideosTitle:"Videos",outsideVideosBody:"A hexagon room with one video on each wall.",outsideSignaturesTitle:"Signatures",outsideSignaturesBody:"This feature is coming. Reach out if you want to get involved.",outsideSignaturesContact:"Contact Lars",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},L2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},mm=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:L2}),vf=[mm("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),mm("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),mm("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],O2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim().toUpperCase(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),Ca=r=>{let t=r%1;return t<0&&(t+=1),t},I2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),Ca(r+l*(1-Math.exp(-i*s)))},Dx=12,gm=9,_m=.12,Nx=-1,vm=2.4,P2=.3,F2=1.2,B2=.3,Ux=6741503,z2=5,H2=3.2,G2=.35,V2=.25,Lx=400,k2=2.5,Ox=16755251,xf=3,X2=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],xm=[{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1770978482749-c088b297-1ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770978437489-d0299c39-WelhavenTheater.png"},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],u0=17.6,YS=u0*(16/9),qS=YS*Math.sqrt(3)/2,W2=.56,Y2=31.2,Sf=qS*2.62,Ix=u0*.56,q2=60,j2=40,Z2=220,K2=360,Q2=105,J2=.75,Px=96,Im=[330,250,180,120],$2=[2,3.2,4.8,6.2],tR=[.12,.17,.22,.3],yf={tailPath:"",taperPaths:Im.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},Sm=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],d=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${d} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},eR=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),nR=(r,t,i,s,l,c)=>{jS(r,t,l).forEach((d,m)=>{r.fillText(d,i,s+m*c)})},jS=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const d=s[f];if(!d)continue;const m=`${c}${d} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${d} `):c=m}return c.trim()&&l.push(c.trim()),l},iR=/\(\s*bold\s*\)/gi,aR=/\(\s*new\s*line\s*\)/gi,sR=/\(\s*new\s*paragraph\s*\)/gi,rR=r=>{const i=r.replace(/\r\n?/g,`
`).replace(sR,`

`).replace(aR,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const d=/\(\s*bold\s*\)/i.test(c),m=c.replace(iR,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:d,paragraphBreak:s}),s=!1}),l},oR=(r,t,i,s,l,c,f,d,m=.6)=>{const p=rR(t);let _=s;p.forEach((v,g)=>{g>0&&v.paragraphBreak&&(_+=c*m),r.font=v.bold?d:f,jS(r,v.text,l).forEach(E=>{r.fillText(E,i,_),_+=c})}),r.font=f},lR=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,ZS=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),cR=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),uR=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],fR=new Map(uR.map(([r,t])=>[ZS(r),t])),hR=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],dR=hR.map(([r,t])=>[new RegExp(cR(r),"gi"),t]),pR={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},mR=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),gR=r=>{let t=r;return dR.forEach(([i,s])=>{t=t.replace(i,s)}),t},_R=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=pR[t.toLowerCase()];return i?mR(t,i):t}),vR=r=>{const t=r.trim();return t?(fR.get(ZS(t))??_R(gR(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},xR=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(lR,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>vR(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},Mf=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},Pm=Math.PI*2,io=r=>Math.min(1,Math.max(0,r)),Tc=(r,t,i,s,l)=>{const c=Pm*(r*i+s),f=Pm*(t*i+l),d=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return d+m},Ef=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new pl(s)},ha=(r,t,i,s,l=!1)=>{r.wrapS=_l,r.wrapT=_l,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=Ns,r.magFilter=$n,l&&(r.colorSpace=Wn),r.needsUpdate=!0},ym=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:d,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:v,seamDepth:g,seamWidth:y,roughnessBase:E,roughnessRange:w,normalStrength:M,aoStrength:S}=r,C=t*i,U=new me(l),D=new Float32Array(C);let F=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY;for(let J=0;J<i;J+=1)for(let j=0;j<t;j+=1){const O=J*t+j,P=j/t,rt=J/i,ht=Tc(P,rt,c,s*.11,s*.23),yt=Tc(P,rt,f,s*.41+.18,s*.29+.07),I=Tc(P,rt,d,s*.71+.43,s*.53+.31),q=Math.sin(Pm*((P+rt*.33)*m+s*.17));let pt=0;if(_!=="none"&&v>0){const tt=(_==="x"?P:rt)*v%1,gt=Math.min(tt,1-tt);pt=Math.exp(-Math.pow(gt/Math.max(1e-4,y),2))}const At=ht*.6+yt*.28+I*.12+q*p-pt*g;D[O]=At,At<F&&(F=At),At>B&&(B=At)}const z=new Float32Array(C),T=Math.max(1e-4,B-F),N=new Uint8ClampedArray(C*4),ft=new Uint8ClampedArray(C*4),G=new Uint8ClampedArray(C*4);for(let J=0;J<i;J+=1)for(let j=0;j<t;j+=1){const O=J*t+j,P=O*4,rt=j/t,ht=J/i,yt=io((D[O]-F)/T);z[O]=yt;const I=Tc(rt,ht,f*.6,s*.19+.62,s*.73+.14)*.5+.5,q=io(.78+(yt-.5)*.24+(I-.5)*.12),pt=Tc(rt,ht,c*.5,s*.37+.89,s*.13+.44),At=1+pt*.017,Xt=1+pt*.007,tt=1-pt*.013,gt=io(E+(1-yt)*w+(I-.5)*.14),Tt=io(.94-(1-yt)*S);N[P]=Math.round(io(U.r*q*At)*255),N[P+1]=Math.round(io(U.g*q*Xt)*255),N[P+2]=Math.round(io(U.b*q*tt)*255),N[P+3]=255;const jt=Math.round(gt*255);ft[P]=jt,ft[P+1]=jt,ft[P+2]=jt,ft[P+3]=255;const oe=Math.round(Tt*255);G[P]=oe,G[P+1]=oe,G[P+2]=oe,G[P+3]=255}const K=(J,j)=>{const O=(J+t)%t,P=(j+i)%i;return z[P*t+O]},at=new Uint8ClampedArray(C*4);for(let J=0;J<i;J+=1)for(let j=0;j<t;j+=1){const P=(J*t+j)*4,rt=K(j+1,J)-K(j-1,J),ht=K(j,J+1)-K(j,J-1),yt=-rt*M,I=-ht*M,q=1,pt=1/Math.hypot(yt,I,q);at[P]=Math.round((yt*pt*.5+.5)*255),at[P+1]=Math.round((I*pt*.5+.5)*255),at[P+2]=Math.round((q*pt*.5+.5)*255),at[P+3]=255}return{albedo:Ef(N,t,i),normal:Ef(at,t,i),roughness:Ef(ft,t,i),ao:Ef(G,t,i)}},SR=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const d=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=d*255,c/=d*255,f/=d*255;const m=l*.2126+c*.7152+f*.0722;return{color:new me(l,c,f),luminance:m}};function yR(){const r=pe.useRef([]),t=pe.useRef(null),[i,s]=pe.useState(!1),[l,c]=pe.useState({width:1,height:1}),[f,d]=pe.useState(yf);return pe.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),_=window.matchMedia("(pointer: coarse)"),v=()=>{s(!m.matches&&p.matches&&!_.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},y=()=>{v()},E=(C,U)=>typeof C.addEventListener=="function"?(C.addEventListener("change",U),()=>C.removeEventListener("change",U)):(C.addListener(U),()=>C.removeListener(U));v(),g();const w=E(m,y),M=E(p,y),S=E(_,y);return window.addEventListener("resize",g,{passive:!0}),()=>{w(),M(),S(),window.removeEventListener("resize",g)}},[]),pe.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],d(yf);return}const m=_=>{if(_.pointerType!=="mouse"&&_.pointerType!=="pen")return;const v={x:_.clientX,y:_.clientY,t:performance.now()},g=r.current,y=g[g.length-1];if(y){const E=v.x-y.x,w=v.y-y.y;if(Math.hypot(E,w)<J2)return}g.push(v),g.length>Px&&g.splice(0,g.length-Px)},p=()=>{const _=performance.now(),v=_-K2,g=r.current;let y=0;for(;y<g.length&&g[y].t<v;)y+=1;if(y>0&&g.splice(0,y),g.length<2)d(E=>E.visible?yf:E);else{const E=Sm(g),w=Im.map(F=>{const B=_-F;let z=g.length-1;for(;z>0&&g[z-1].t>=B;)z-=1;const T=g.slice(z);return Sm(T.length>=2?T:g.slice(-2))}),M=_-Q2;let S=g.length-1;for(;S>0&&g[S-1].t>=M;)S-=1;let C=g.slice(S);C.length<2&&(C=g.slice(-2));const U=Sm(C),D=C[C.length-1]??g[g.length-1];d(F=>F.visible&&F.tailPath===E&&F.taperPaths.every((B,z)=>B===w[z])&&F.headPath===U&&F.headX===D.x&&F.headY===D.y?F:{tailPath:E,taperPaths:w,headPath:U,headX:D.x,headY:D.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],d(yf)}},[i]),i?Bt.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[Bt.jsxs("defs",{children:[Bt.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Bt.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),Bt.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),Bt.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[Bt.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),Bt.jsxs("feMerge",{children:[Bt.jsx("feMergeNode",{in:"blur"}),Bt.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?Bt.jsxs(Bt.Fragment,{children:[Bt.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?Bt.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:tR[p],strokeWidth:$2[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${Im[p]}`):null),Bt.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),Bt.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function MR(){const r=pe.useRef(null),t=pe.useRef([]),i=pe.useRef(_m),s=pe.useRef(_m),l=pe.useRef([]),c=pe.useRef(null);pe.useEffect(()=>{const xt=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=xt,document.documentElement.style.overscrollBehavior=""}},[]);const[f,d]=pe.useState(vf),[m,p]=pe.useState([]),[_,v]=pe.useState(vf[0].id),[g,y]=pe.useState(!0),[E,w]=pe.useState(!1),[M,S]=pe.useState(!1),[C,U]=pe.useState("menu"),[D,F]=pe.useState([]),[B,z]=pe.useState(!1),[T,N]=pe.useState(""),[ft,G]=pe.useState(0),[K,at]=pe.useState(()=>{if(typeof window>"u")return"nb";try{const xt=window.localStorage.getItem(wx);if(xt==="nb"||xt==="en")return xt}catch{}return"nb"});pe.useEffect(()=>{try{window.localStorage.setItem(wx,K)}catch{}},[K]);const J=U2[K],j=pe.useMemo(()=>xt=>K==="nb"?xR(xt):xt,[K]),O=pe.useCallback(()=>{c.current?.()},[]),P=pe.useRef(0),rt=pe.useRef(0),ht=pe.useRef(null),yt=pe.useCallback(xt=>{const Gt=xt>=0?1:-1;G(Pt=>{const he=xm.length;return(Pt+Gt+he)%he})},[]),I=pe.useCallback(xt=>{xt.preventDefault();const Gt=Math.abs(xt.deltaX)>Math.abs(xt.deltaY)?xt.deltaX:xt.deltaY;P.current+=Gt;const Pt=performance.now();Pt-rt.current<Z2||Math.abs(P.current)<j2||(yt(P.current>0?1:-1),P.current=0,rt.current=Pt)},[yt]),q=pe.useCallback(xt=>{ht.current=xt.touches[0]?.clientX??null},[]),pt=pe.useCallback(xt=>{const Gt=ht.current,Pt=xt.changedTouches[0]?.clientX??null;if(ht.current=null,Gt===null||Pt===null)return;const he=Pt-Gt;Math.abs(he)<28||yt(he<0?1:-1)},[yt]);pe.useEffect(()=>{M||U("menu")},[M]),pe.useEffect(()=>{C==="videos"&&(P.current=0,rt.current=0)},[C]),pe.useEffect(()=>{if(!M||C!=="videos")return;let xt=!1;const Gt=()=>{xt||l.current.forEach(he=>{if(!he||!he.paused&&he.readyState>=2)return;const zt=he.play();zt&&typeof zt.catch=="function"&&zt.catch(()=>{})})};Gt();const Pt=window.setInterval(Gt,900);return()=>{xt=!0,window.clearInterval(Pt)}},[M,C]),pe.useEffect(()=>{if(!M||C!=="news")return;let xt=!1;const Gt=zt=>({title:String(zt?.title??"").trim(),source:String(zt?.source??"").trim(),url:String(zt?.url??"").trim(),snippet:String(zt?.snippet??"").trim(),published_at:String(zt?.published_at??"").trim(),published:zt?.published!==!1}),Pt=zt=>{const ye=Date.parse(zt);return Number.isFinite(ye)?ye:0};return(async()=>{z(!0),N("");for(const zt of X2)try{const ye=await fetch(zt,{cache:"no-store"});if(!ye.ok)continue;const V=await ye.json();if(!Array.isArray(V?.items))continue;const Jt=V.items.map(Gt).filter(Ut=>Ut.published&&Ut.title&&Ut.url).sort((Ut,Yt)=>Pt(Yt.published_at)-Pt(Ut.published_at));if(xt)return;F(Jt),z(!1);return}catch{}xt||(F([]),N(J.outsideNewsError),z(!1))})(),()=>{xt=!0}},[M,C,J.outsideNewsError]),pe.useEffect(()=>{let xt=!1;return(async()=>{try{const Pt=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),he=Pt.headers.get("content-type")??"";if(!Pt.ok)throw new Error(`HTTP ${Pt.status} while loading glyph language map`);if(!he.toLowerCase().includes("application/json")){const V=await Pt.text();throw new Error(`Expected JSON but got '${he||"unknown"}' (${V.slice(0,120)})`)}const zt=await Pt.json();if(!Array.isArray(zt?.items))throw new Error("Glyph language payload missing 'items' array");const ye=zt.items.map((V,Jt)=>O2(V,Jt)).filter(V=>V.enabled!==!1);if(xt)return;p(ye)}catch(Pt){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",Pt),xt)return;p([])}})(),()=>{xt=!0}},[]);const At=pe.useMemo(()=>m.filter(xt=>xt.enabled!==!1&&typeof xt.canonical=="string"&&xt.canonical.trim().length>0),[m]),Xt=pe.useMemo(()=>{const xt=new Map;if(!f.length||!At.length)return xt;const Gt=zt=>{const ye=Ca(zt);return Ca(_m-ye)},Pt=[...f].sort((zt,ye)=>{const V=typeof zt.installation?.placement_t=="number"?zt.installation.placement_t:0,Jt=typeof ye.installation?.placement_t=="number"?ye.installation.placement_t:0,Ut=Gt(V),Yt=Gt(Jt);return Ut===Yt?zt.id.localeCompare(ye.id):Ut-Yt}),he=Math.min(Pt.length,At.length);for(let zt=0;zt<he;zt+=1)xt.set(Pt[zt].id,At[zt]);return xt},[f,At]),tt=pe.useMemo(()=>{const xt=new Map;return Xt.forEach((Gt,Pt)=>{Gt.canonical&&xt.set(Pt,Gt.canonical)}),xt},[Xt]),gt=pe.useMemo(()=>{const xt=new Map;return Xt.forEach((Gt,Pt)=>{xt.set(Pt,{label:Gt.label||"",note:Gt.note||"",labelNb:Gt.label_nb||"",noteNb:Gt.note_nb||""})}),xt},[Xt]);pe.useEffect(()=>{let xt=!1;return(async()=>{y(!0),w(!1);try{const Pt=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),he=Pt.headers.get("content-type")??"";if(!Pt.ok)throw new Error(`HTTP ${Pt.status} while loading panel data`);if(!he.toLowerCase().includes("application/json")){const Yt=await Pt.text();throw new Error(`Expected JSON but got '${he||"unknown"}' (${Yt.slice(0,120)})`)}const zt=await Pt.json();if(!Array.isArray(zt?.panels))throw new Error("Panel payload missing 'panels' array");const ye=typeof zt.media_root=="string"?zt.media_root.replace(/\/+$/,""):"",V=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",Jt=Yt=>/^https?:\/\//i.test(Yt)&&V?`/proxy?url=${encodeURIComponent(Yt)}`:Yt,Ut=zt.panels.map(Yt=>{const Ct=typeof Yt?.source=="string"?Yt.source.replace(/^\/+/,""):"",L=Ct?ye?`${ye}/${Ct}`:`/${Ct}`:void 0,b=L?Jt(L):void 0,Y=typeof Yt?.poster=="string"?Yt.poster.replace(/^\/+/,""):"",dt=Y?ye?`${ye}/${Y}`:`/${Y}`:void 0,St=dt?Jt(dt):void 0,lt=Yt?.type==="image"||Yt?.type==="video"?Yt.type:"text",Vt=Yt?.content??{},Rt=String(Vt?.title??"Untitled").trim()||"Untitled",ee=String(Vt?.description??"").trim(),ne=String(Vt?.title_nb??Vt?.title_no??"").trim(),Et=String(Vt?.description_nb??Vt?.description_no??"").trim(),Mt=String(Vt?.title_en??"").trim(),kt=String(Vt?.description_en??"").trim();return{...Yt,kind:lt,type:lt,title:Rt,body:ee,title_nb:ne||Rt,body_nb:Et||ee,title_en:Mt,body_en:kt,cta:Vt?.cta,poster:St,image:lt==="image"?b:void 0,video:lt==="video"?b:void 0}});if(Ut.length===0)throw new Error("Panel payload contained 0 panels");if(xt)return;d(Ut),v(Ut[0].id)}catch(Pt){if(console.error("Failed to load panels; using fallback data.",Pt),xt)return;d(vf),v(vf[0].id),w(!0)}finally{xt||y(!1)}})(),()=>{xt=!0}},[]);const Tt=pe.useMemo(()=>f.find(xt=>xt.id===_)??f[0]??{title:"",body:""},[_,f]),jt=pe.useMemo(()=>xt=>{const Gt=gt.get(xt.id);if(K==="nb"){const zt=Mf(Gt?.labelNb,xt.title_nb,j(Gt?.label||""),j(xt.title||"")),ye=Mf(Gt?.noteNb,xt.body_nb,j(Gt?.note||""),j(xt.body||""));return{title:zt||"Mangler norsk tittel",body:ye||"Mangler norsk tekst."}}const Pt=Mf(Gt?.label,xt.title_en),he=Mf(Gt?.note,xt.body_en);return{title:Pt||"Missing English title",body:he||"Missing English text."}},[gt,K,j]),oe=pe.useMemo(()=>jt(Tt).title,[Tt,jt]),de=pe.useMemo(()=>new Intl.DateTimeFormat(K==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[K]);return pe.useEffect(()=>{if(f.length===0)return;const xt=r.current;if(!xt)return;c.current=null,S(!1);let Gt=!1,Pt=()=>{};return(()=>{if(Gt||!xt)return;t.current=[];const zt=window.matchMedia("(prefers-reduced-motion: reduce)"),ye=window.matchMedia("(max-width: 767px)"),V=zt.matches,Jt=ye.matches,Ut=new $m;Ut.background=new me(987671),Ut.fog=new Fc(987671,38,230);const Yt=new Ti(Jt?72:64,xt.clientWidth/xt.clientHeight,.1,1200),Ct=new kS({antialias:!Jt,alpha:!1,powerPreference:"high-performance"});Ct.setPixelRatio(Math.min(window.devicePixelRatio,Jt?1:1.5)),Ct.setSize(xt.clientWidth,xt.clientHeight),Ct.outputColorSpace=Wn,Ct.toneMapping=Mh,Ct.toneMappingExposure=Jt?.76:.72,Ct.shadowMap.enabled=!Jt,Ct.shadowMap.type=ml,xt.appendChild(Ct.domElement);const L=new xh(Ct),b=L.fromScene(new m2,.06);Ut.environment=b.texture;const Y=new US(16185599,.05);Ut.add(Y);const dt=new NS(14739442,1777446,.08);Ut.add(dt);const St=eR(p2),lt=new bS(St,!0,"catmullrom",.17),Vt=Jt?180:300,Rt=Math.min(8,Ct.capabilities.getMaxAnisotropy()),ee=Jt?256:512,ne=ym({width:ee,height:ee,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});ha(ne.albedo,4.8,24,Rt,!0),ha(ne.normal,4.8,24,Rt),ha(ne.roughness,4.8,24,Rt),ha(ne.ao,4.8,24,Rt);const Et=ym({width:ee,height:ee,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});ha(Et.albedo,2.2,24,Rt,!0),ha(Et.normal,2.2,24,Rt),ha(Et.roughness,2.2,24,Rt),ha(Et.ao,2.2,24,Rt);const Mt=ym({width:ee,height:ee,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});ha(Mt.albedo,3.4,24,Rt,!0),ha(Mt.normal,3.4,24,Rt),ha(Mt.roughness,3.4,24,Rt),ha(Mt.ao,3.4,24,Rt);const kt=new so({color:9607586,map:ne.albedo,normalMap:ne.normal,normalScale:new Oe(.32,.32),roughnessMap:ne.roughness,roughness:.38,metalness:0,aoMap:ne.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Vn}),Ht=new so({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Vn}),Lt=new so({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new me(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Vn}),Ae=()=>{const Dt=[],le=new Z(0,1,0);let ue=new Z(1,0,0);for(let It=0;It<=Vt;It+=1){const Pn=It/Vt,fi=lt.getPointAt(Pn),Ri=Pn===1?fi.clone().sub(lt.getPointAt(Pn-.001)).normalize():lt.getPointAt(Pn+.001).sub(fi).normalize();let Zn=new Z().crossVectors(Ri,le).normalize();Zn.lengthSq()<1e-4&&(Zn=ue.clone()),Zn.dot(ue)<0&&Zn.multiplyScalar(-1),ue=Zn.clone();const Ci=new Z().crossVectors(Zn,Ri).normalize();Dt.push({pt:fi,right:Zn,up:Ci,t:Pn})}const re=(It,Pn,fi=!1)=>{const Ri=[],Zn=[],Ci=[];for(let Ue=0;Ue<=Vt;Ue+=1){const Be=Dt[Ue],$e=It(Be),An=Pn(Be);Ri.push($e.x,$e.y,$e.z,An.x,An.y,An.z),Zn.push(0,Be.t,1,Be.t)}for(let Ue=0;Ue<Vt;Ue+=1){const Be=Ue*2,$e=Be+1,An=Be+2,yi=Be+3;fi?Ci.push(Be,An,$e,An,yi,$e):Ci.push(Be,$e,An,An,$e,yi)}const wi=new Qi;wi.setAttribute("position",new ti(Ri,3));const qs=new ti(Zn,2);return wi.setAttribute("uv",qs),wi.setAttribute("uv2",qs.clone()),wi.setIndex(Ci),wi.computeVertexNormals(),wi},Zt=Dx*.5,be=gm*.5,je=re(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-be)).add(It.right.clone().multiplyScalar(-Zt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-be)).add(It.right.clone().multiplyScalar(Zt))),nn=re(It=>It.pt.clone().add(It.up.clone().multiplyScalar(be)).add(It.right.clone().multiplyScalar(-Zt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(be)).add(It.right.clone().multiplyScalar(Zt)),!0),Je=re(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-be)).add(It.right.clone().multiplyScalar(-Zt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(be)).add(It.right.clone().multiplyScalar(-Zt)),!0),xi=re(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-be)).add(It.right.clone().multiplyScalar(Zt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(be)).add(It.right.clone().multiplyScalar(Zt))),Si=.08,Nn=.015,Ye=re(It=>It.pt.clone().add(It.up.clone().multiplyScalar(be-Si)).add(It.right.clone().multiplyScalar(-Zt+Nn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(be)).add(It.right.clone().multiplyScalar(-Zt+Nn)),!0),on=re(It=>It.pt.clone().add(It.up.clone().multiplyScalar(be-Si)).add(It.right.clone().multiplyScalar(Zt-Nn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(be)).add(It.right.clone().multiplyScalar(Zt-Nn)),!1),an=.22,Tn=.018,xa=re(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-be)).add(It.right.clone().multiplyScalar(-Zt+Tn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-be+an)).add(It.right.clone().multiplyScalar(-Zt+Tn)),!0),Ys=re(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-be)).add(It.right.clone().multiplyScalar(Zt-Tn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-be+an)).add(It.right.clone().multiplyScalar(Zt-Tn)),!1),Sa=.14,ls=re(It=>It.pt.clone().add(It.up.clone().multiplyScalar(be-.05)).add(It.right.clone().multiplyScalar(-Sa)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(be-.05)).add(It.right.clone().multiplyScalar(Sa)),!0);return{floorGeo:je,ceilGeo:nn,leftGeo:Je,rightGeo:xi,leftSkirtGeo:xa,rightSkirtGeo:Ys,trackRailGeo:ls,leftCrownGeo:Ye,rightCrownGeo:on}},{floorGeo:W,ceilGeo:Nt,leftGeo:wt,rightGeo:qt,leftSkirtGeo:bt,rightSkirtGeo:ut,trackRailGeo:$t,leftCrownGeo:ve,rightCrownGeo:qe}=Ae(),Ie=new ke(W,kt),kn=new ke(Nt,Lt),ei=new ke(wt,Ht),va=new ke(qt,Ht),Os=new so({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),Ia=new Ds({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Vn}),ts=new ke(bt,Ia),es=new ke(ut,Ia);ts.receiveShadow=!0,es.receiveShadow=!0;const Pi=new ke(ve,Ia),ns=new ke(qe,Ia);Pi.receiveShadow=!1,ns.receiveShadow=!1;const Ai=new so({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Vn}),En=new ke($t,Ai);En.receiveShadow=!1,Ie.receiveShadow=!0,Ie.castShadow=!0,kn.receiveShadow=!0,kn.castShadow=!0,ei&&(ei.receiveShadow=!0,ei.castShadow=!0),va&&(va.receiveShadow=!0,va.castShadow=!0),Ut.add(Ie),Ut.add(kn),ei&&Ut.add(ei),va&&Ut.add(va),Ut.add(ts),Ut.add(es),Ut.add(Pi),Ut.add(ns),Ut.add(En);const Cn=new Z(0,1,0),Fi=new pn,Ji=new pn,Is=new pn;Ut.add(Fi),Ut.add(Ji),Ut.add(Is);const ni=new Cf(16773598,Jt?16:24,34,Math.PI/8.4,.44,2);ni.target=Fi,ni.castShadow=!Jt,ni.castShadow&&(ni.shadow.mapSize.width=2048,ni.shadow.mapSize.height=2048,ni.shadow.bias=-35e-5,ni.shadow.normalBias=.012,ni.shadow.camera.near=.4,ni.shadow.camera.far=34),Ut.add(ni);const Pa=new Cf(12571903,Jt?6:9,34,Math.PI/6.5,.68,2);Pa.target=Ji,Pa.castShadow=!1,Ut.add(Pa);const Bi=new Cf(14083583,Jt?5:7,28,Math.PI/7.8,.6,2);Bi.target=Is,Bi.castShadow=!1,Ut.add(Bi);const is=new pn,$i=new pn;Ut.add(is),Ut.add($i);const hn=new Nm(16774374,0);if(hn.target=is,hn.castShadow=!Jt,hn.castShadow){hn.shadow.mapSize.width=4096,hn.shadow.mapSize.height=4096,hn.shadow.bias=-8e-5,hn.shadow.normalBias=.0012,hn.shadow.radius=0;const Dt=Jt?250:220;hn.shadow.camera.left=-Dt,hn.shadow.camera.right=Dt,hn.shadow.camera.top=Dt,hn.shadow.camera.bottom=-Dt,hn.shadow.camera.near=25,hn.shadow.camera.far=980}Ut.add(hn);const zi=new Nm(9090280,0);zi.target=$i,Ut.add(zi),W.computeBoundingBox(),W.computeBoundingSphere(),Nt.computeBoundingBox(),Nt.computeBoundingSphere(),wt.computeBoundingBox(),wt.computeBoundingSphere(),qt.computeBoundingBox(),qt.computeBoundingSphere();const X=f.some(Dt=>Dt.installation?.mount_type==="continuous_led_wall"||Dt.installation?.mount_type==="jutting_half_wall")?f:Jt?f.filter((Dt,le)=>le%2===0):f,ot=[],et=[],$=[],Ot=[],Kt=[],Ft=[],ie=[],se=Dt=>{if(!Dt.paused&&Dt.currentTime>0)return;const le=Dt.play();le&&typeof le.catch=="function"&&le.catch(()=>{})},_e=setInterval(()=>{let Dt=!0;Ft.forEach(le=>{(le.paused||le.readyState<2)&&(Dt=!1,se(le))}),Dt&&Ft.length>0&&clearInterval(_e)},500);Kt.push(()=>clearInterval(_e));const Me=new wr(1,1,.2),te=new Za(.82,.82),Re=new so({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),mn=(Dt,le)=>{const re=document.createElement("canvas");re.width=512,re.height=512;const Zt=re.getContext("2d");Zt.clearRect(0,0,512,512);const be=tt.get(le);if(be)try{N2(Zt,be,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const on=new pl(re);return on.colorSpace=Wn,on}catch(on){console.warn(`Invalid glyph canonical sentence for panel '${le}': '${be}'. Falling back to procedural glyph.`,on)}const je=512/2,nn=512/2,Je=Dt*137.508;Zt.fillStyle="rgba(6,14,24,0.7)",Zt.beginPath(),Zt.arc(je,nn,512*.42,0,Math.PI*2),Zt.fill(),Zt.strokeStyle="rgba(102,221,255,0.95)",Zt.lineWidth=2.5,Zt.lineCap="round",Zt.beginPath(),Zt.arc(je,nn,512*.38,0,Math.PI*2),Zt.stroke();const xi=3+Dt%4;for(let on=0;on<xi;on++){const an=on/xi*Math.PI*2+Je,Tn=512*.08,xa=512*.32;Zt.beginPath(),Zt.moveTo(je+Math.cos(an)*Tn,nn+Math.sin(an)*Tn),Zt.lineTo(je+Math.cos(an)*xa,nn+Math.sin(an)*xa),Zt.stroke()}const Si=2+Dt%3;for(let on=0;on<Si;on++){const an=512*(.15+on*.09),Tn=Je+on*1.2;Zt.beginPath(),Zt.arc(je,nn,an,Tn,Tn+Math.PI*(.4+Dt%3*.2)),Zt.stroke()}Zt.fillStyle="rgba(102,221,255,0.85)";const Nn=3+Dt%5;for(let on=0;on<Nn;on++){const an=Je+on/Nn*Math.PI*2,Tn=512*(.2+on%3*.06);Zt.beginPath(),Zt.arc(je+Math.cos(an)*Tn,nn+Math.sin(an)*Tn,4,0,Math.PI*2),Zt.fill()}Zt.strokeStyle="rgba(102,221,255,0.5)",Zt.lineWidth=1.5,Zt.beginPath(),Zt.arc(je,nn,512*.12,0,Math.PI*2),Zt.stroke(),Zt.fillStyle="rgba(102,221,255,0.95)",Zt.beginPath(),Zt.arc(je,nn,6,0,Math.PI*2),Zt.fill();const Ye=new pl(re);return Ye.colorSpace=Wn,Ye},gn=(Dt,le)=>{const ue=document.createElement("canvas");ue.width=1024,ue.height=640;const re=ue.getContext("2d");re.fillStyle="rgba(8,12,18,0.88)",re.beginPath(),re.roundRect(16,16,992,608,24),re.fill(),re.strokeStyle="rgba(102,221,255,0.25)",re.lineWidth=2,re.beginPath(),re.roundRect(16,16,992,608,24),re.stroke(),re.fillStyle="rgba(102,221,255,0.95)",re.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",nR(re,Dt.toUpperCase(),60,100,900,58),re.strokeStyle="rgba(102,221,255,0.3)",re.lineWidth=2,re.beginPath(),re.moveTo(60,180),re.lineTo(960,180),re.stroke(),re.fillStyle="rgba(220,230,240,0.9)";const Zt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",be="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";re.font=Zt,oR(re,le,60,230,900,42,Zt,be);const je=new pl(ue);return je.colorSpace=Wn,je},Ve=()=>{const le=document.createElement("canvas");le.width=512,le.height=512;const ue=le.getContext("2d"),re=512/2,Zt=512/2;ue.beginPath(),ue.arc(re,Zt,512*.42,0,Math.PI*2),ue.fillStyle="rgba(6,14,24,0.7)",ue.fill(),ue.strokeStyle="rgba(255,170,51,0.9)",ue.lineWidth=6,ue.beginPath(),ue.arc(re,Zt,512*.38,0,Math.PI*2),ue.stroke();const be=8;for(let nn=0;nn<be;nn++){const Je=nn/be*Math.PI*2-Math.PI/2;ue.strokeStyle=`rgba(255,${170+Math.round(Math.sin(nn)*40)},51,0.8)`,ue.lineWidth=4,ue.beginPath(),ue.moveTo(re+Math.cos(Je)*512*.12,Zt+Math.sin(Je)*512*.12),ue.lineTo(re+Math.cos(Je)*512*.34,Zt+Math.sin(Je)*512*.34),ue.stroke();const xi=re+Math.cos(Je)*512*.34,Si=Zt+Math.sin(Je)*512*.34,Nn=512*.06;ue.beginPath(),ue.moveTo(xi,Si),ue.lineTo(xi-Nn*Math.cos(Je-.4),Si-Nn*Math.sin(Je-.4)),ue.moveTo(xi,Si),ue.lineTo(xi-Nn*Math.cos(Je+.4),Si-Nn*Math.sin(Je+.4)),ue.stroke()}ue.beginPath(),ue.arc(re,Zt,512*.06,0,Math.PI*2),ue.fillStyle="rgba(255,200,80,0.95)",ue.fill();const je=new pl(le);return je.colorSpace=Wn,je},wn=Dt=>{const le=Ca(Dt),ue=lt.getPointAt(le),Zt=lt.getPointAt(Ca(le+.002)).clone().sub(ue).normalize();let be=new Z().crossVectors(Zt,Cn).normalize();be.lengthSq()<1e-4&&(be=new Z(1,0,0));const je=new Z().crossVectors(be,Zt).normalize();return{point:ue,tangent:Zt,right:be,up:je}};lt.getLength();const Qt=[],jn=new Za(vm*2,vm*2),xe=new Za(z2,H2);X.forEach((Dt,le)=>{const ue=Dt.installation,re=Ca(ue?.placement_t??.05+le/X.length),{point:Zt,right:be,up:je}=wn(re),nn=ue?.side==="left",Si=(ue?.side==="center"?0:nn?-1:1)*Dx*.12,Nn=Zt.clone().add(be.clone().multiplyScalar(Si)).add(je.clone().multiplyScalar(.5)),Ye=mn(le,Dt.id);et.push(Ye);const on=new Ds({color:16777215,emissive:new me(Ux),emissiveIntensity:1.2,map:Ye,emissiveMap:Ye,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});$.push(on);const an=new ke(jn,on);an.position.copy(Nn),an.userData={panel:Dt,isGlyph:!0},ot.push(an),Ut.add(an);const Tn=jt(Dt),xa=Tn.title,Ys=Tn.body,Sa=gn(xa,Ys);et.push(Sa);const ls=new Ds({color:16777215,emissive:new me(1122867),emissiveIntensity:.3,map:Sa,transparent:!0,opacity:0,side:Vn,depthWrite:!0});$.push(ls);const It=new ke(xe,ls),Pn=new dl;Pn.add(It),Pn.position.copy(Nn),Pn.scale.setScalar(.01),Pn.visible=!1,Ut.add(Pn);const fi=new Oc(Ux,Jt?6:12,20,1.5);fi.position.copy(Nn),Ut.add(fi),Qt.push({mesh:an,card:Pn,panel:Dt,progress:re,baseY:Nn.y,expanded:!1,expandT:0}),t.current.push({meta:Dt,progress:re})});let _n=!1,vn=0;const vi=new Z,ci=new Z,Ee=new Z,yn=32;for(let Dt=0;Dt<yn;Dt++)Ee.add(lt.getPointAt(Dt/yn));Ee.divideScalar(yn);const ii=()=>{const le=Yt.position.clone().clone().sub(Ee).normalize();vi.copy(Ee).add(le.multiplyScalar(Lx)),vi.y=Ee.y+Lx*.35,ci.copy(Ee)},Dn=()=>{Qt.forEach(Dt=>{Dt.expanded=!1})},ui=Dt=>{_n!==Dt&&(_n=Dt,S(Dt),Dt&&(ii(),Dn()))},Hi=()=>{ui(!_n)};c.current=Hi;const Ps=new Za(xf*2,xf*2),Cl=Ve();et.push(Cl);const wl=new Ds({color:16777215,emissive:new me(Ox),emissiveIntensity:1.4,map:Cl,emissiveMap:Cl,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});$.push(wl);const{point:Dr,up:ta}=wn(V2),Fs=Dr.clone().add(ta.clone().multiplyScalar(1)),Fa=new ke(Ps,wl);Fa.position.copy(Fs),Fa.userData={isExitGlyph:!0},Ut.add(Fa);const Bs=new Za(xf*5,xf*5),zs=new Bc({visible:!1,side:Vn}),as=new ke(Bs,zs);as.position.copy(Fs),as.userData={isExitGlyph:!0},ot.push(as),Ut.add(as);const go=new Oc(Ox,Jt?6:12,20,1.5);go.position.copy(Fs),Ut.add(go);const Dl=new Fh(Jt?1.25:1.6,26,26);Ot.push(Dl);const ss=new Ds({color:16764788,emissive:new me(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});$.push(ss);const Gi=Dr.clone().add(ta.clone().multiplyScalar(gm*.52+.32)),Ba=new ke(Dl,ss);Ba.position.copy(Gi),Ba.userData={isReentryDot:!0},ot.push(Ba),Ut.add(Ba);const Hs=new Ph(Jt?1.75:2.2,Jt?2.35:2.95,52);Ot.push(Hs);const ea=new Bc({color:16761948,transparent:!0,opacity:0,side:Vn,depthWrite:!1});$.push(ea);const rs=new ke(Hs,ea);rs.position.copy(Gi),Ut.add(rs);const Gs=new Oc(16761948,0,Jt?34:44,2);Gs.position.copy(Gi),Ut.add(Gs);const Nl=new IS,Vs=new Oe,Nr=Dt=>{Ft.forEach(se);const le=Ct.domElement.getBoundingClientRect();Vs.x=(Dt.clientX-le.left)/le.width*2-1,Vs.y=-((Dt.clientY-le.top)/le.height)*2+1,Nl.setFromCamera(Vs,Yt);const ue=Nl.intersectObjects(ot,!1);if(ue.length>0){const re=ue[0].object;if(re.userData.isReentryDot&&_n){ui(!1);return}if(re.userData.isExitGlyph){Hi();return}if(_n){ui(!1);return}const Zt=re.userData.panel;if(Zt){const be=Qt.find(je=>je.panel.id===Zt.id);be&&(be.expanded?be.expanded=!1:(Qt.forEach(je=>{je.expanded=!1}),be.expanded=!0))}}else _n?ui(!1):Qt.forEach(re=>{re.expanded=!1})};Ct.domElement.addEventListener("pointerdown",Nr);const os={x:0,y:0},bn={x:0,y:0},za=Dt=>{if(V||Jt)return;const le=Ct.domElement.getBoundingClientRect(),ue=(Dt.clientX-le.left)/le.width,re=(Dt.clientY-le.top)/le.height;os.x=(ue-.5)*2,os.y=(re-.5)*2},Ur=()=>{os.x=0,os.y=0};Ct.domElement.addEventListener("pointermove",za,{passive:!0}),Ct.domElement.addEventListener("pointerleave",Ur,{passive:!0});const ks=Dt=>{Dt.preventDefault(),!_n&&(Ft.forEach(se),i.current=Ca(i.current+Nx*Dt.deltaY*75e-6))};Ct.domElement.addEventListener("wheel",ks,{passive:!1});const Hc=Dt=>{(Dt.key==="o"||Dt.key==="O")&&Hi()};window.addEventListener("keydown",Hc);let Xs=0;const _o=Dt=>{Ft.forEach(se),Xs=Dt.touches[0]?.clientY??0},Ws=Dt=>{if(Dt.preventDefault(),_n)return;const le=Dt.touches[0]?.clientY??Xs,ue=Xs-le;i.current=Ca(i.current+Nx*ue*11e-5),Xs=le};Ct.domElement.addEventListener("touchstart",_o,{passive:!0}),Ct.domElement.addEventListener("touchmove",Ws,{passive:!1});const Lr=()=>{xt&&(Yt.aspect=xt.clientWidth/xt.clientHeight,Yt.updateProjectionMatrix(),Ct.setSize(xt.clientWidth,xt.clientHeight))};window.addEventListener("resize",Lr);const vo=new pn,Gc=new PS,Ul=new Z,Vc=new Z,xo=new Z;let kc=f.length>0?f[0].id:"";const Xc=()=>{if(Gt)return;const Dt=Gc.getDelta(),le=Gc.getElapsedTime();s.current=I2(s.current,i.current,V?2.8:4.8,Dt),bn.x+=(os.x-bn.x)*.07,bn.y+=(os.y-bn.y)*.07;const ue=s.current,re=Ca(ue+(Jt?.008:.01)),Zt=lt.getPointAt(ue),be=lt.getPointAt(re),je=lt.getPointAt(Ca(ue+.002)).sub(lt.getPointAt(Ca(ue-.002))).normalize();let nn=new Z().crossVectors(je,Cn).normalize();nn.lengthSq()<1e-4&&(nn=new Z(1,0,0));const Je=new Z().crossVectors(nn,je).normalize(),xi=nn.clone().multiplyScalar(bn.x*(Jt?0:.62)).add(Je.clone().multiplyScalar(bn.y*(Jt?0:.42))),Si=V?new Z:Je.clone().multiplyScalar(Math.sin(le*.45)*.12),Nn=1/k2;_n&&vn<1?vn=Math.min(1,vn+Nn*Dt):!_n&&vn>0&&(vn=Math.max(0,vn-Nn*Dt));const Ye=vn<.5?4*vn*vn*vn:1-Math.pow(-2*vn+2,3)/2,on=gi.smoothstep(Ye,.18,1),an=bn.x*(Jt?0:9.5)*on,Tn=bn.y*(Jt?0:5.2)*on;is.position.copy(Ee),$i.position.copy(Ee),hn.position.set(Ee.x+560+an*1.9,Ee.y+430+Tn*1.2,Ee.z-260-an*.95),zi.position.set(Ee.x-420-an*.7,Ee.y+90+Tn*.35,Ee.z+330+an*.55);const xa=vi.clone().add(new Z(an,Tn*.82,an*.52)),Ys=ci.clone().add(new Z(an*.12,Tn*.1,an*.08));if(Ye>.01){Ut.fog instanceof Fc&&(Ut.fog.near=gi.lerp(38,9999,Ye),Ut.fog.far=gi.lerp(230,1e4,Ye));const Ue=new me(987671),Be=new me(263950);Ut.background.copy(Ue).lerp(Be,Ye),Y.intensity=gi.lerp(.05,.028,Ye),dt.intensity=gi.lerp(.08,.05,Ye),hn.intensity=gi.lerp(0,Jt?2.9:4.9,Ye),zi.intensity=gi.lerp(0,Jt?.14:.22,Ye),Ct.toneMappingExposure=gi.lerp(Jt?.76:.72,Jt?.9:.95,Ye),[kt,Ht].forEach($e=>{$e.emissive.set(3359829),$e.emissiveIntensity=.045*Ye}),Lt.color.set(0).lerp(new me(16777215),Ye),Lt.toneMapped=Ye>.5,Lt.fog=Ye>.5,Lt.emissive.set(16777215),Lt.emissiveIntensity=gi.lerp(1,.08,Ye),Lt.envMapIntensity=gi.lerp(0,.1,Ye)}else Y.intensity=.05,dt.intensity=.08,hn.intensity=0,zi.intensity=0,Ct.toneMappingExposure=Jt?.76:.72,Ut.background.set(987671),[kt,Ht].forEach(Ue=>{Ue.emissive.set(0),Ue.emissiveIntensity=0}),Lt.color.set(0),Lt.toneMapped=!1,Lt.fog=!1,Lt.emissive.set(16777215),Lt.emissiveIntensity=1,Lt.envMapIntensity=0;const Sa=Je.clone().multiplyScalar(-gm*.2),ls=Zt.clone().add(Sa).add(xi).add(Si),It=be.clone().add(Sa).add(xi.multiplyScalar(.22));if(Ye>.99)Yt.position.copy(xa),Yt.lookAt(Ys);else if(Ye>.001){Yt.position.lerpVectors(ls,xa,Ye);const Ue=It.clone().lerp(Ys,Ye);Yt.lookAt(Ue)}else Yt.position.copy(ls),vo.position.copy(Yt.position),vo.lookAt(It),Yt.quaternion.slerp(vo.quaternion,1-Math.exp(-8.1*Dt));const Pn=.94+Math.sin(le*.23)*.06,fi=be.clone().add(Sa);ni.position.copy(Yt.position).add(Je.clone().multiplyScalar(2.9)).add(nn.clone().multiplyScalar(2.1)).add(je.clone().multiplyScalar(-2.2)),Fi.position.copy(fi).add(nn.clone().multiplyScalar(2.5)).add(Je.clone().multiplyScalar(-.9)),ni.intensity=(Jt?14:21)*Pn,Pa.position.copy(Yt.position).add(Je.clone().multiplyScalar(2)).add(nn.clone().multiplyScalar(-2.4)).add(je.clone().multiplyScalar(-1.1)),Ji.position.copy(fi).add(nn.clone().multiplyScalar(-2)).add(Je.clone().multiplyScalar(-1.4)),Pa.intensity=(Jt?5:8)*Pn,Bi.position.copy(Yt.position).add(Je.clone().multiplyScalar(1.4)).add(je.clone().multiplyScalar(2.8)).add(nn.clone().multiplyScalar(.6)),Is.position.copy(fi).add(Je.clone().multiplyScalar(-.8)),Bi.intensity=(Jt?4:6.2)*Pn,ot.forEach(Ue=>{const Be=Ue.userData;if(!Be||!Be.shading||!Be.material)return;const $e=Be.shading,An=Be.material,yi=Be.video,Ze=Be;let Ha=1;$e.lighting?.flicker_sync&&yi&&yi.readyState>=3&&(Ha=.88+Math.sin(le*22)*.1*Math.sin(le*6.7));let js=1;if($e.movement_reaction?.type==="viewing_angle_fade"){Ul.set(0,0,0),Ue.getWorldPosition(Ul),Vc.set(0,0,1).applyQuaternion(Ue.quaternion),xo.copy(Yt.position).sub(Ul).normalize();const hi=Vc,ya=xo,Ga=Math.max(0,hi.dot(ya)),So=$e.movement_reaction.cone_angle_degrees===60?3:1.5;js=Math.pow(Ga,So)}const na=Be.baseEmissive*Ha*js;if(An.emissiveIntensity=na,Ze.bounceLights&&Ze.bounceLights.length>0){const hi=Ze.bounceSampleCtx,ya=Ze.bounceSampleCanvas;if(yi&&hi&&ya&&(Ze.bounceNextSampleAt??0)<=le){const Va=SR(yi,ya,hi);if(Va){Ze.bounceTargetColor||(Ze.bounceTargetColor=Va.color.clone());const Or=Va.color.clone().lerp(new me(1,.97,.93),.18);Ze.bounceTargetColor.copy(Or);const Ir=gi.clamp(.22+Va.luminance*1.9,.22,2.25);Ze.bounceTargetIntensity=(Ze.bounceBaseIntensity??5)*Ir*(.25+na*1.25)}Ze.bounceNextSampleAt=le+1/(Jt?2:4)}else yi||(Ze.bounceTargetIntensity=(Ze.bounceBaseIntensity??5)*(.22+na*1.1));const Ga=Ze.bounceTargetIntensity??0,So=Ze.bounceCurrentIntensity??0;Ze.bounceCurrentIntensity=gi.lerp(So,Ga,1-Math.exp(-6.2*Dt)),Ze.bounceCurrentColor||(Ze.bounceCurrentColor=(Ze.bounceTargetColor??new me(1,1,1)).clone()),Ze.bounceTargetColor&&Ze.bounceCurrentColor.lerp(Ze.bounceTargetColor,1-Math.exp(-5.4*Dt)),Ze.bounceLights.forEach((Va,Or)=>{const Ir=Math.max(1,Ze.bounceLights.length-1),Wc=1-Or/Ir*.34;Va.color.copy(Ze.bounceCurrentColor),Va.intensity=(Ze.bounceCurrentIntensity??0)*Wc})}}),ie.forEach(({mesh:Ue,basePosition:Be,strength:$e})=>{const An=Ue.parent;if(!An)return;const yi=An.worldToLocal(Yt.position.clone()),Ze=gi.clamp(yi.x*.008,-.18,.18)*$e,Ha=gi.clamp(yi.y*.006,-.14,.14)*$e;Ue.position.x=Be.x+Ze,Ue.position.y=Be.y+Ha}),Qt.forEach((Ue,Be)=>{const{mesh:$e,card:An}=Ue;$e.lookAt(Yt.position);const yi=Be*.7,Ze=Ue.baseY+Math.sin(le*F2+yi)*P2;$e.position.y=Ze,$e.rotateZ(B2*Dt);const Ha=$e.material;Ha.emissiveIntensity=1+Math.sin(le*2+Be)*.4;const js=Ue.expanded?1:0,na=1/G2;Ue.expandT<js?Ue.expandT=Math.min(1,Ue.expandT+na*Dt):Ue.expandT>js&&(Ue.expandT=Math.max(0,Ue.expandT-na*Dt));const hi=Ue.expandT,ya=hi<.5?4*hi*hi*hi:1-Math.pow(-2*hi+2,3)/2;if(ya>.001){An.visible=!0,An.position.copy($e.position),An.position.y-=vm+.3,An.lookAt(Yt.position),An.scale.setScalar(ya);const Ga=An.children[0].material;Ga.opacity=ya}else An.visible=!1;Ha.opacity=1-ya*.4});const Ri=Fs.y+Math.sin(le*.8)*.35;Fa.lookAt(Yt.position),Fa.position.y=Ri,Fa.rotateZ(.15*Dt),wl.emissiveIntensity=1.2+Math.sin(le*1.5)*.5,as.lookAt(Yt.position),as.position.y=Ri;const Zn=.72+Math.sin(le*2.35)*.28,Ci=gi.smoothstep(Ye,.2,.95);Ba.visible=Ci>.001,rs.visible=Ci>.001,Ba.scale.setScalar(.88+Zn*.28),ss.emissiveIntensity=Ci*(.48+Zn*.45),Gs.intensity=Ci*(Jt?4.6:7.4)*Zn,rs.lookAt(Yt.position),rs.scale.setScalar(.95+Zn*.18),ea.opacity=Ci*(.2+Zn*.32);let wi=t.current[0]?.meta.id??(f.length>0?f[0].id:""),qs=Number.POSITIVE_INFINITY;t.current.forEach(Ue=>{let Be=Math.abs(ue-Ue.progress);Be>.5&&(Be=1-Be),Be<qs&&(qs=Be,wi=Ue.meta.id)}),wi!==kc&&(kc=wi,v(wi)),Ct.render(Ut,Yt),requestAnimationFrame(Xc)};Xc(),Pt=()=>{c.current=null,Ct.domElement.removeEventListener("pointerdown",Nr),Ct.domElement.removeEventListener("pointermove",za),Ct.domElement.removeEventListener("pointerleave",Ur),Ct.domElement.removeEventListener("wheel",ks),Ct.domElement.removeEventListener("touchstart",_o),Ct.domElement.removeEventListener("touchmove",Ws),window.removeEventListener("resize",Lr),window.removeEventListener("keydown",Hc),xt.contains(Ct.domElement)&&xt.removeChild(Ct.domElement),ot.forEach(Dt=>{const le=Dt.userData?.video;le&&(le.pause(),le.src="",le.load())}),Ft.forEach(Dt=>{Dt.pause(),Dt.src="",Dt.load()}),Kt.forEach(Dt=>Dt()),et.forEach(Dt=>Dt.dispose?.()),Ot.forEach(Dt=>Dt.dispose()),jn.dispose(),xe.dispose(),ne.albedo.dispose(),ne.normal.dispose(),ne.roughness.dispose(),ne.ao.dispose(),Et.albedo.dispose(),Et.normal.dispose(),Et.roughness.dispose(),Et.ao.dispose(),Mt.albedo.dispose(),Mt.normal.dispose(),Mt.roughness.dispose(),Mt.ao.dispose(),$.forEach(Dt=>Dt.dispose()),b.texture.dispose(),b.dispose(),L.dispose(),kt.dispose(),Ht.dispose(),Os.dispose(),Lt.dispose(),Re.dispose(),Me.dispose(),te.dispose(),W.dispose(),Nt.dispose(),wt.dispose(),qt.dispose(),bt.dispose(),ut.dispose(),ve.dispose(),qe.dispose(),$t.dispose(),Ia.dispose(),Ai.dispose(),Ct.dispose()}})(),()=>{Gt=!0,c.current=null,Pt()}},[f,tt,jt]),Bt.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Bt.jsx("div",{ref:r,className:"absolute inset-0"}),Bt.jsx(yR,{}),Bt.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[Bt.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[Bt.jsx("span",{className:"px-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#5a5a5a]",children:J.languageLabel}),Bt.jsx("button",{type:"button",onClick:()=>at("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${K==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":K==="nb",children:"NO"}),Bt.jsx("button",{type:"button",onClick:()=>at("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${K==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":K==="en",children:"EN"})]}),Bt.jsx("button",{type:"button",onClick:O,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":M,children:M?K==="nb"?"Gå inn i tunnelen":"Enter tunnel":K==="nb"?"Gå ut av tunnelen":"Leave tunnel"})]}),g||E?Bt.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:g?J.loadingPanels:J.panelsFallback}):null,M?null:Bt.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Bt.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:J.siteName}),Bt.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[J.activeInstallation,": ",oe]})]}),M?Bt.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Bt.jsx("style",{children:`
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
            `}),C==="menu"?Bt.jsxs(Bt.Fragment,{children:[Bt.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:J.siteName}),Bt.jsx("button",{type:"button",onClick:()=>U("videos"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Bt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:J.outsideVideos})}),Bt.jsx("button",{type:"button",onClick:()=>U("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Bt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:J.outsideSignatures})}),Bt.jsx("button",{type:"button",onClick:()=>U("news"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Bt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:J.outsideAiNews})})]}):null,C!=="menu"?Bt.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[Bt.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[Bt.jsx("button",{type:"button",onClick:()=>U("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:J.outsideBack}),C==="videos"?Bt.jsxs(Bt.Fragment,{children:[Bt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:J.outsideVideosTitle}),Bt.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:J.outsideVideosBody})]}):null,C==="signatures"?Bt.jsxs(Bt.Fragment,{children:[Bt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:J.outsideSignaturesTitle}),Bt.jsx("p",{className:"mt-2 max-w-3xl text-sm text-[#b8cbe6] md:text-base",children:J.outsideSignaturesBody})]}):null,C==="news"?Bt.jsxs(Bt.Fragment,{children:[Bt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:J.outsideNewsTitle}),Bt.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:J.outsideNewsBody})]}):null]}),C==="signatures"?Bt.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto flex w-full max-w-6xl items-start justify-start md:inset-x-8 md:top-64",children:Bt.jsxs("a",{href:"mailto:lars@larscuzner.com?subject=Engasjement%20i%20Intelligenspartiet",className:"rounded-xl border border-[#8fb5e8]/40 bg-[#0c1629]/78 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#dbe9ff] transition hover:bg-[#12233f]",children:[J.outsideSignaturesContact,": lars@larscuzner.com"]})}):null,C==="news"?Bt.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[B?Bt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:J.outsideNewsLoading}):null,!B&&T?Bt.jsx("p",{className:"text-sm text-[#ffb6b6]",children:T}):null,!B&&!T&&D.length===0?Bt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:J.outsideNewsEmpty}):null,!B&&!T&&D.length>0?Bt.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:D.map(xt=>{const Gt=Date.parse(xt.published_at),Pt=Number.isFinite(Gt)?de.format(new Date(Gt)):xt.published_at;return Bt.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[Bt.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[xt.source,Pt?` · ${Pt}`:""]}),Bt.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:xt.title}),xt.snippet?Bt.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:xt.snippet}):null,Bt.jsx("a",{href:xt.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:K==="nb"?"Åpne sak":"Open story"})]},`${xt.url}-${xt.title}`)})}):null]}):null,C==="videos"?Bt.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:I,onTouchStart:q,onTouchEnd:pt,children:Bt.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[Bt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_44%,rgba(80,123,181,0.15),rgba(7,14,25,0.74)_56%,rgba(3,7,14,0.96)_100%)]"}),Bt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_90px_rgba(0,0,0,0.66)]"}),Bt.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#99bae5]",children:[ft+1," / ",xm.length]}),Bt.jsx("p",{className:"absolute left-1/2 top-7 -translate-x-1/2 text-[0.57rem] font-semibold uppercase tracking-[0.14em] text-[#88a9d5]/90",children:K==="nb"?"Scroll eller sveip sideveis":"Scroll or swipe sideways"}),Bt.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9e8ff]/95 shadow-[0_0_18px_rgba(140,185,255,0.72)]"}),Bt.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${Y2.toFixed(3)}rem) rotateY(${-ft*q2}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[Bt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/24",style:{width:`${Sf.toFixed(3)}rem`,height:`${Sf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${Ix.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(150,183,223,0.24) 0%, rgba(58,77,103,0.3) 14%, rgba(19,29,45,0.82) 100%)",boxShadow:"0 0 56px rgba(48,94,156,0.22)"}}),Bt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/18",style:{width:`${Sf.toFixed(3)}rem`,height:`${Sf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${Ix.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(22,31,45,0.92) 0%, rgba(24,36,56,0.62) 34%, rgba(117,151,204,0.22) 100%)"}}),xm.map((xt,Gt)=>Bt.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-[#89b0e4]/34 bg-[#050b16]/95 shadow-[0_22px_44px_rgba(0,0,0,0.6)]",style:{width:`${(YS+W2).toFixed(3)}rem`,height:`${u0}rem`,transform:`translate(-50%, -50%) rotateY(${Gt*60}deg) translateZ(-${qS.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:Bt.jsx("video",{ref:Pt=>{l.current[Gt]=Pt},src:xt.video,poster:xt.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${xt.video}-${Gt}`))]})]})}):null]}):null]}):null]})}function ER(){return Bt.jsx("div",{className:"min-h-screen bg-[#080604]",children:Bt.jsx(MR,{})})}NM.createRoot(document.getElementById("root")).render(Bt.jsx(pe.StrictMode,{children:Bt.jsx(ER,{})}));
