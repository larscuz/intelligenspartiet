(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Xp={exports:{}},Sc={};var Lv;function EM(){if(Lv)return Sc;Lv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Sc.Fragment=t,Sc.jsx=i,Sc.jsxs=i,Sc}var Uv;function bM(){return Uv||(Uv=1,Xp.exports=EM()),Xp.exports}var Ft=bM(),Wp={exports:{}},Ae={};var Ov;function TM(){if(Ov)return Ae;Ov=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(I,q,pt){this.props=I,this.context=q,this.refs=M,this.updater=pt||E}S.prototype.isReactComponent={},S.prototype.setState=function(I,q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,q,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=S.prototype;function L(I,q,pt){this.props=I,this.context=q,this.refs=M,this.updater=pt||E}var D=L.prototype=new C;D.constructor=L,w(D,S.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(I,q,pt){var Ct=pt.ref;return{$$typeof:r,type:I,key:q,ref:Ct!==void 0?Ct:null,props:pt}}function ft(I,q){return N(I.type,q,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function K(I){var q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(pt){return q[pt]})}var it=/\/+/g;function J(I,q){return typeof I=="object"&&I!==null&&I.key!=null?K(""+I.key):q.toString(36)}function j(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(q){I.status==="pending"&&(I.status="fulfilled",I.value=q)},function(q){I.status==="pending"&&(I.status="rejected",I.reason=q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,q,pt,Ct,Xt){var tt=typeof I;(tt==="undefined"||tt==="boolean")&&(I=null);var gt=!1;if(I===null)gt=!0;else switch(tt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(I.$$typeof){case r:case t:gt=!0;break;case _:return gt=I._init,O(gt(I._payload),q,pt,Ct,Xt)}}if(gt)return Xt=Xt(I),gt=Ct===""?"."+J(I,0):Ct,F(Xt)?(pt="",gt!=null&&(pt=gt.replace(it,"$&/")+"/"),O(Xt,q,pt,"",function(le){return le})):Xt!=null&&(G(Xt)&&(Xt=ft(Xt,pt+(Xt.key==null||I&&I.key===Xt.key?"":(""+Xt.key).replace(it,"$&/")+"/")+gt)),q.push(Xt)),1;gt=0;var Rt=Ct===""?".":Ct+":";if(F(I))for(var Kt=0;Kt<I.length;Kt++)Ct=I[Kt],tt=Rt+J(Ct,Kt),gt+=O(Ct,q,pt,tt,Xt);else if(Kt=y(I),typeof Kt=="function")for(I=Kt.call(I),Kt=0;!(Ct=I.next()).done;)Ct=Ct.value,tt=Rt+J(Ct,Kt++),gt+=O(Ct,q,pt,tt,Xt);else if(tt==="object"){if(typeof I.then=="function")return O(j(I),q,pt,Ct,Xt);throw q=String(I),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return gt}function P(I,q,pt){if(I==null)return I;var Ct=[],Xt=0;return O(I,Ct,"","",function(tt){return q.call(pt,tt,Xt++)}),Ct}function rt(I){if(I._status===-1){var q=I._result;q=q(),q.then(function(pt){(I._status===0||I._status===-1)&&(I._status=1,I._result=pt)},function(pt){(I._status===0||I._status===-1)&&(I._status=2,I._result=pt)}),I._status===-1&&(I._status=0,I._result=q)}if(I._status===1)return I._result.default;throw I._result}var ht=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Mt={map:P,forEach:function(I,q,pt){P(I,function(){q.apply(this,arguments)},pt)},count:function(I){var q=0;return P(I,function(){q++}),q},toArray:function(I){return P(I,function(q){return q})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Ae.Activity=v,Ae.Children=Mt,Ae.Component=S,Ae.Fragment=i,Ae.Profiler=l,Ae.PureComponent=L,Ae.StrictMode=s,Ae.Suspense=m,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},Ae.cache=function(I){return function(){return I.apply(null,arguments)}},Ae.cacheSignal=function(){return null},Ae.cloneElement=function(I,q,pt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ct=w({},I.props),Xt=I.key;if(q!=null)for(tt in q.key!==void 0&&(Xt=""+q.key),q)!T.call(q,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&q.ref===void 0||(Ct[tt]=q[tt]);var tt=arguments.length-2;if(tt===1)Ct.children=pt;else if(1<tt){for(var gt=Array(tt),Rt=0;Rt<tt;Rt++)gt[Rt]=arguments[Rt+2];Ct.children=gt}return N(I.type,Xt,Ct)},Ae.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Ae.createElement=function(I,q,pt){var Ct,Xt={},tt=null;if(q!=null)for(Ct in q.key!==void 0&&(tt=""+q.key),q)T.call(q,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Xt[Ct]=q[Ct]);var gt=arguments.length-2;if(gt===1)Xt.children=pt;else if(1<gt){for(var Rt=Array(gt),Kt=0;Kt<gt;Kt++)Rt[Kt]=arguments[Kt+2];Xt.children=Rt}if(I&&I.defaultProps)for(Ct in gt=I.defaultProps,gt)Xt[Ct]===void 0&&(Xt[Ct]=gt[Ct]);return N(I,tt,Xt)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(I){return{$$typeof:d,render:I}},Ae.isValidElement=G,Ae.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:rt}},Ae.memo=function(I,q){return{$$typeof:p,type:I,compare:q===void 0?null:q}},Ae.startTransition=function(I){var q=z.T,pt={};z.T=pt;try{var Ct=I(),Xt=z.S;Xt!==null&&Xt(pt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(B,ht)}catch(tt){ht(tt)}finally{q!==null&&pt.types!==null&&(q.types=pt.types),z.T=q}},Ae.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Ae.use=function(I){return z.H.use(I)},Ae.useActionState=function(I,q,pt){return z.H.useActionState(I,q,pt)},Ae.useCallback=function(I,q){return z.H.useCallback(I,q)},Ae.useContext=function(I){return z.H.useContext(I)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(I,q){return z.H.useDeferredValue(I,q)},Ae.useEffect=function(I,q){return z.H.useEffect(I,q)},Ae.useEffectEvent=function(I){return z.H.useEffectEvent(I)},Ae.useId=function(){return z.H.useId()},Ae.useImperativeHandle=function(I,q,pt){return z.H.useImperativeHandle(I,q,pt)},Ae.useInsertionEffect=function(I,q){return z.H.useInsertionEffect(I,q)},Ae.useLayoutEffect=function(I,q){return z.H.useLayoutEffect(I,q)},Ae.useMemo=function(I,q){return z.H.useMemo(I,q)},Ae.useOptimistic=function(I,q){return z.H.useOptimistic(I,q)},Ae.useReducer=function(I,q,pt){return z.H.useReducer(I,q,pt)},Ae.useRef=function(I){return z.H.useRef(I)},Ae.useState=function(I){return z.H.useState(I)},Ae.useSyncExternalStore=function(I,q,pt){return z.H.useSyncExternalStore(I,q,pt)},Ae.useTransition=function(){return z.H.useTransition()},Ae.version="19.2.4",Ae}var Iv;function Zm(){return Iv||(Iv=1,Wp.exports=TM()),Wp.exports}var me=Zm(),Yp={exports:{}},yc={},qp={exports:{}},jp={};var Pv;function AM(){return Pv||(Pv=1,(function(r){function t(O,P){var rt=O.length;O.push(P);t:for(;0<rt;){var ht=rt-1>>>1,Mt=O[ht];if(0<l(Mt,P))O[ht]=P,O[rt]=Mt,rt=ht;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var P=O[0],rt=O.pop();if(rt!==P){O[0]=rt;t:for(var ht=0,Mt=O.length,I=Mt>>>1;ht<I;){var q=2*(ht+1)-1,pt=O[q],Ct=q+1,Xt=O[Ct];if(0>l(pt,rt))Ct<Mt&&0>l(Xt,pt)?(O[ht]=Xt,O[Ct]=rt,ht=Ct):(O[ht]=pt,O[q]=rt,ht=q);else if(Ct<Mt&&0>l(Xt,rt))O[ht]=Xt,O[Ct]=rt,ht=Ct;else break t}}return P}function l(O,P){var rt=O.sortIndex-P.sortIndex;return rt!==0?rt:O.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,y=!1,E=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var P=i(p);P!==null;){if(P.callback===null)s(p);else if(P.startTime<=O)s(p),P.sortIndex=P.expirationTime,t(m,P);else break;P=i(p)}}function F(O){if(w=!1,D(O),!E)if(i(m)!==null)E=!0,B||(B=!0,K());else{var P=i(p);P!==null&&j(F,P.startTime-O)}}var B=!1,z=-1,T=5,N=-1;function ft(){return M?!0:!(r.unstable_now()-N<T)}function G(){if(M=!1,B){var O=r.unstable_now();N=O;var P=!0;try{t:{E=!1,w&&(w=!1,C(z),z=-1),y=!0;var rt=g;try{e:{for(D(O),v=i(m);v!==null&&!(v.expirationTime>O&&ft());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,g=v.priorityLevel;var Mt=ht(v.expirationTime<=O);if(O=r.unstable_now(),typeof Mt=="function"){v.callback=Mt,D(O),P=!0;break e}v===i(m)&&s(m),D(O)}else s(m);v=i(m)}if(v!==null)P=!0;else{var I=i(p);I!==null&&j(F,I.startTime-O),P=!1}}break t}finally{v=null,g=rt,y=!1}P=void 0}}finally{P?K():B=!1}}}var K;if(typeof L=="function")K=function(){L(G)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,J=it.port2;it.port1.onmessage=G,K=function(){J.postMessage(null)}}else K=function(){S(G,0)};function j(O,P){z=S(function(){O(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var rt=g;g=P;try{return O()}finally{g=rt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var rt=g;g=O;try{return P()}finally{g=rt}},r.unstable_scheduleCallback=function(O,P,rt){var ht=r.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?ht+rt:ht):rt=ht,O){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=rt+Mt,O={id:_++,callback:P,priorityLevel:O,startTime:rt,expirationTime:Mt,sortIndex:-1},rt>ht?(O.sortIndex=rt,t(p,O),i(m)===null&&O===i(p)&&(w?(C(z),z=-1):w=!0,j(F,rt-ht))):(O.sortIndex=Mt,t(m,O),E||y||(E=!0,B||(B=!0,K()))),O},r.unstable_shouldYield=ft,r.unstable_wrapCallback=function(O){var P=g;return function(){var rt=g;g=P;try{return O.apply(this,arguments)}finally{g=rt}}}})(jp)),jp}var Fv;function RM(){return Fv||(Fv=1,qp.exports=AM()),qp.exports}var Zp={exports:{}},mi={};var Bv;function CM(){if(Bv)return mi;Bv=1;var r=Zm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return mi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,mi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},mi.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},mi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},mi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},mi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},mi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},mi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},mi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},mi.requestFormReset=function(m){s.d.r(m)},mi.unstable_batchedUpdates=function(m,p){return m(p)},mi.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},mi.useFormStatus=function(){return f.H.useHostTransitionStatus()},mi.version="19.2.4",mi}var zv;function wM(){if(zv)return Zp.exports;zv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Zp.exports=CM(),Zp.exports}var Hv;function DM(){if(Hv)return yc;Hv=1;var r=RM(),t=Zm(),i=wM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=h;break}if(R===o){x=!0,o=u,a=h;break}R=R.sibling}if(!x){for(R=h.child;R;){if(R===a){x=!0,a=h,o=u;break}if(R===o){x=!0,o=h,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:J(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return J(e(n))}catch{}}return null}var j=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},ht=[],Mt=-1;function I(e){return{current:e}}function q(e){0>Mt||(e.current=ht[Mt],ht[Mt]=null,Mt--)}function pt(e,n){Mt++,ht[Mt]=e.current,e.current=n}var Ct=I(null),Xt=I(null),tt=I(null),gt=I(null);function Rt(e,n){switch(pt(tt,n),pt(Xt,e),pt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ev(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ev(n),e=nv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Ct),pt(Ct,e)}function Kt(){q(Ct),q(Xt),q(tt)}function le(e){e.memoizedState!==null&&pt(gt,e);var n=Ct.current,a=nv(n,e.type);n!==a&&(pt(Xt,e),pt(Ct,a))}function de(e){Xt.current===e&&(q(Ct),q(Xt)),gt.current===e&&(q(gt),gc._currentValue=rt)}var xt,Gt;function It(e){if(xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);xt=n&&n[1]||"",Gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+e+Gt}var he=!1;function Bt(e,n){if(!e||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var st=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){st=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){st=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],R=h[1];if(x&&R){var H=x.split(`
`),nt=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===nt.length)for(o=H.length-1,u=nt.length-1;1<=o&&0<=u&&H[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==nt[u]){var mt=`
`+H[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?It(a):""}function Ee(e,n){switch(e.tag){case 26:case 27:case 5:return It(e.type);case 16:return It("Lazy");case 13:return e.child!==n&&n!==null?It("Suspense Fallback"):It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return Bt(e.type,!1);case 11:return Bt(e.type.render,!1);case 1:return Bt(e.type,!0);case 31:return It("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Ee(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qt=Object.prototype.hasOwnProperty,Lt=r.unstable_scheduleCallback,Vt=r.unstable_cancelCallback,Tt=r.unstable_shouldYield,U=r.unstable_requestPaint,b=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ct=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,wt=r.unstable_IdlePriority,se=r.log,ie=r.unstable_setDisableYieldValue,bt=null,yt=null;function zt(e){if(typeof se=="function"&&ie(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(bt,e)}catch{}}var Pt=Math.clz32?Math.clz32:k,kt=Math.log,ve=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(kt(e)/ve|0)|0}var Nt=256,Dt=262144,qt=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=At(o):(x&=R,x!==0?u=At(x):a||(a=R&~e,a!==0&&(u=At(a))))):(R=o&~h,R!==0?u=At(R):x!==0?u=At(x):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function xe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=qt;return qt<<=1,(qt&62914560)===0&&(qt=4194304),e}function Fe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Zn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var mt=31-Pt(a),vt=1<<mt;R[mt]=0,H[mt]=-1;var st=nt[mt];if(st!==null)for(nt[mt]=null,mt=0;mt<st.length;mt++){var lt=st[mt];lt!==null&&(lt.lane&=-536870913)}a&=~vt}o!==0&&ns(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function ns(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ea(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function za(e,n){var a=n&-n;return a=(a&42)!==0?1:Fs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function na(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vi(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Tv(e.type))}function is(e,n){var a=P.p;try{return P.p=e,n()}finally{P.p=a}}var Li=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Li,Cn="__reactProps$"+Li,ia="__reactContainer$"+Li,ya="__reactEvents$"+Li,Bs="__reactListeners$"+Li,zs="__reactHandles$"+Li,Hs="__reactResources$"+Li,Pn="__reactMarker$"+Li;function Ma(e){delete e[Tn],delete e[Cn],delete e[ya],delete e[Bs],delete e[zs]}function Ui(e){var n=e[Tn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ia]||a[Tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=cv(e);e!==null;){if(a=e[Tn])return a;e=cv(e)}return n}e=a,a=e.parentNode}return null}function aa(e){if(e=e[Tn]||e[ia]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ea(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function A(e){var n=e[Hs];return n||(n=e[Hs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[Pn]=!0}var ot=new Set,at={};function $(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(at[e]=n,e=0;e<n.length;e++)ot.add(n[e])}var jt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},te={};function ee(e){return Qt.call(te,e)?!0:Qt.call(Ht,e)?!1:jt.test(e)?te[e]=!0:(Ht[e]=!0,!1)}function Se(e,n,a){if(ee(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ye(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function $t(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Re(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function mn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ve(e){if(!e._valueTracker){var n=pn(e)?"checked":"value";e._valueTracker=mn(e,n,""+e[n])}}function Un(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=pn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kn=/[\n"\\]/g;function pe(e){return e.replace(Kn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Qn(e,n,a,o,u,h,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Re(n)):e.value!==""+Re(n)&&(e.value=""+Re(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?wn(e,x,Re(n)):a!=null?wn(e,x,Re(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Re(R):e.removeAttribute("name")}function di(e,n,a,o,u,h,x,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ve(e);return}a=a!=null?""+Re(a):"",n=n!=null?""+Re(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ve(e)}function wn(e,n,a){n==="number"&&ne(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Re(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ce(e,n,a){if(n!=null&&(n=""+Re(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Re(a):""}function on(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(j(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Re(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ve(e)}function Dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var gn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ri(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||gn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Si(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ri(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&ri(e,h,n[h])}function Ha(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ol=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rr(e){return Ol.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _n(){}var Cr=null;function Il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,as=null;function wr(e){var n=aa(e);if(n&&(e=n.stateNode)){var a=e[Cn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Qn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Cn]||null;if(!u)throw Error(s(90));Qn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Un(o)}break t;case"textarea":Ce(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xn(e,!!a.multiple,n,!1)}}}var Pl=!1;function xo(e,n,a){if(Pl)return e(n,a);Pl=!0;try{var o=e(n);return o}finally{if(Pl=!1,(Gs!==null||as!==null)&&(Bu(),Gs&&(n=Gs,e=as,as=Gs=null,wr(n),e)))for(n=0;n<e.length;n++)wr(e[n])}}function ss(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Cn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=!1;if(sa)try{var Ga={};Object.defineProperty(Ga,"passive",{get:function(){So=!0}}),window.addEventListener("test",Ga,Ga),window.removeEventListener("test",Ga,Ga)}catch{So=!1}var yi=null,Fl=null,yo=null;function rs(){if(yo)return yo;var e,n=Fl,a=n.length,o,u="value"in yi?yi.value:yi.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return yo=u.slice(e,1<o?1-o:void 0)}function Dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function Mo(){return!1}function Jn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Nr:Mo,this.isPropagationStopped=Mo,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),n}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lr=Jn(Oi),os=v({},Oi,{view:0,detail:0}),Ur=Jn(os),Or,Eo,ls,Ir=v({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ls&&(ls&&e.type==="mousemove"?(Or=e.screenX-ls.screenX,Eo=e.screenY-ls.screenY):Eo=Or=0,ls=e),Or)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),cs=Jn(Ir),Va=v({},Ir,{dataTransfer:0}),qc=Jn(Va),jc=v({},os,{relatedTarget:0}),Vs=Jn(jc),Zc=v({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),Kc=Jn(Zc),Qc=v({},Oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pr=Jn(Qc),Jc=v({},Oi,{data:0}),Bl=Jn(Jc),$c={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tu[e])?!!n[e]:!1}function bo(){return Hl}var eu=v({},os,{key:function(e){if(e.key){var n=$c[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bo,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nu=Jn(eu),iu=v({},Ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Et=Jn(iu),oe=v({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bo}),ce=Jn(oe),re=v({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zt=Jn(re),be=v({},Ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qe=Jn(be),en=v({},Oi,{newState:0,oldState:0}),nn=Jn(en),Mi=[9,13,27,32],oi=sa&&"CompositionEvent"in window,vn=null;sa&&"documentMode"in document&&(vn=document.documentMode);var He=sa&&"TextEvent"in window&&!vn,an=sa&&(!oi||vn&&8<vn&&11>=vn),je=" ",Sn=!1;function ki(e,n){switch(e){case"keyup":return Mi.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ei=!1;function ka(e,n){switch(e){case"compositionend":return ks(n);case"keypress":return n.which!==32?null:(Sn=!0,je);case"textInput":return e=n.data,e===je&&Sn?null:e;default:return null}}function Ut(e,n){if(Ei)return e==="compositionend"||!oi&&ki(e,n)?(e=rs(),yo=Fl=yi=null,Ei=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return an&&n.locale!=="ko"?null:n.data;default:return null}}var Fn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ii(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fn[e.type]:n==="textarea"}function ba(e,n,a,o){Gs?as?as.push(o):as=[o]:Gs=o,n=Wu(n,"onChange"),0<n.length&&(a=new Lr("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Bn=null,bi=null;function Ta(e){Z_(e,0)}function Xi(e){var n=Ea(e);if(Un(n))return e}function pi(e,n){if(e==="change")return n}var $n=!1;if(sa){var Ti;if(sa){var Te="oninput"in document;if(!Te){var $e=document.createElement("div");$e.setAttribute("oninput","return;"),Te=typeof $e.oninput=="function"}Ti=Te}else Ti=!1;$n=Ti&&(!document.documentMode||9<document.documentMode)}function ti(){Bn&&(Bn.detachEvent("onpropertychange",Ai),bi=Bn=null)}function Ai(e){if(e.propertyName==="value"&&Xi(bi)){var n=[];ba(n,bi,e,Il(e)),xo(Ta,n)}}function ra(e,n,a){e==="focusin"?(ti(),Bn=n,bi=a,Bn.attachEvent("onpropertychange",Ai)):e==="focusout"&&ti()}function Ze(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xi(bi)}function us(e,n){if(e==="click")return Xi(n)}function Fr(e,n){if(e==="input"||e==="change")return Xi(n)}function Xs(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var En=typeof Object.is=="function"?Object.is:Xs;function Ri(e,n){if(En(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qt.call(n,u)||!En(e[u],n[u]))return!1}return!0}function Ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function To(e,n){var a=Ws(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ws(a)}}function Xa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ao(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ne(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ne(e.document)}return n}function Br(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $h=sa&&"documentMode"in document&&11>=document.documentMode,Ro=null,td=null,Gl=null,ed=!1;function E0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ed||Ro==null||Ro!==ne(o)||(o=Ro,"selectionStart"in o&&Br(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gl&&Ri(Gl,o)||(Gl=o,o=Wu(td,"onSelect"),0<o.length&&(n=new Lr("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ro)))}function zr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Co={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionrun:zr("Transition","TransitionRun"),transitionstart:zr("Transition","TransitionStart"),transitioncancel:zr("Transition","TransitionCancel"),transitionend:zr("Transition","TransitionEnd")},nd={},b0={};sa&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function Hr(e){if(nd[e])return nd[e];if(!Co[e])return e;var n=Co[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in b0)return nd[e]=n[a];return e}var T0=Hr("animationend"),A0=Hr("animationiteration"),R0=Hr("animationstart"),iy=Hr("transitionrun"),ay=Hr("transitionstart"),sy=Hr("transitioncancel"),C0=Hr("transitionend"),w0=new Map,id="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");id.push("scrollEnd");function Aa(e,n){w0.set(e,n),$(n,[e])}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oa=[],wo=0,ad=0;function su(){for(var e=wo,n=ad=wo=0;n<e;){var a=oa[n];oa[n++]=null;var o=oa[n];oa[n++]=null;var u=oa[n];oa[n++]=null;var h=oa[n];if(oa[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&D0(a,u,h)}}function ru(e,n,a,o){oa[wo++]=e,oa[wo++]=n,oa[wo++]=a,oa[wo++]=o,ad|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function sd(e,n,a,o){return ru(e,n,a,o),ou(e)}function Gr(e,n){return ru(e,null,null,n),ou(e)}function D0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function ou(e){if(50<cc)throw cc=0,pp=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Do={};function ry(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(e,n,a,o){return new ry(e,n,a,o)}function rd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fs(e,n){var a=e.alternate;return a===null?(a=Wi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function N0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function lu(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")rd(e)&&(x=1);else if(typeof e=="string")x=fM(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Wi(31,a,n,u),e.elementType=N,e.lanes=h,e;case w:return Vr(a.children,u,h,n);case M:x=8,u|=24;break;case S:return e=Wi(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case F:return e=Wi(13,a,n,u),e.elementType=F,e.lanes=h,e;case B:return e=Wi(19,a,n,u),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:x=10;break t;case C:x=9;break t;case D:x=11;break t;case z:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Wi(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Vr(e,n,a,o){return e=Wi(7,e,o,n),e.lanes=a,e}function od(e,n,a){return e=Wi(6,e,null,n),e.lanes=a,e}function L0(e){var n=Wi(18,null,null,0);return n.stateNode=e,n}function ld(e,n,a){return n=Wi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var U0=new WeakMap;function la(e,n){if(typeof e=="object"&&e!==null){var a=U0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},U0.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var No=[],Lo=0,cu=null,Vl=0,ca=[],ua=0,Ys=null,Wa=1,Ya="";function hs(e,n){No[Lo++]=Vl,No[Lo++]=cu,cu=e,Vl=n}function O0(e,n,a){ca[ua++]=Wa,ca[ua++]=Ya,ca[ua++]=Ys,Ys=e;var o=Wa;e=Ya;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var h=32-Pt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Wa=1<<32-Pt(n)+u|a<<u|o,Ya=h+e}else Wa=1<<h|a<<u|o,Ya=e}function cd(e){e.return!==null&&(hs(e,1),O0(e,1,0))}function ud(e){for(;e===cu;)cu=No[--Lo],No[Lo]=null,Vl=No[--Lo],No[Lo]=null;for(;e===Ys;)Ys=ca[--ua],ca[ua]=null,Ya=ca[--ua],ca[ua]=null,Wa=ca[--ua],ca[ua]=null}function I0(e,n){ca[ua++]=Wa,ca[ua++]=Ya,ca[ua++]=Ys,Wa=n.id,Ya=n.overflow,Ys=e}var li=null,yn=null,Ge=!1,qs=null,fa=!1,fd=Error(s(519));function js(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kl(la(n,e)),fd}function P0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Tn]=e,n[Cn]=o,a){case"dialog":Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":case"embed":Pe("load",n);break;case"video":case"audio":for(a=0;a<fc.length;a++)Pe(fc[a],n);break;case"source":Pe("error",n);break;case"img":case"image":case"link":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"input":Pe("invalid",n),di(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Pe("invalid",n);break;case"textarea":Pe("invalid",n),on(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$_(n.textContent,a)?(o.popover!=null&&(Pe("beforetoggle",n),Pe("toggle",n)),o.onScroll!=null&&Pe("scroll",n),o.onScrollEnd!=null&&Pe("scrollend",n),o.onClick!=null&&(n.onclick=_n),n=!0):n=!1,n||js(e,!0)}function F0(e){for(li=e.return;li;)switch(li.tag){case 5:case 31:case 13:fa=!1;return;case 27:case 3:fa=!0;return;default:li=li.return}}function Uo(e){if(e!==li)return!1;if(!Ge)return F0(e),Ge=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wp(e.type,e.memoizedProps)),a=!a),a&&yn&&js(e),F0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));yn=lv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));yn=lv(e)}else n===27?(n=yn,lr(e.type)?(e=Op,Op=null,yn=e):yn=n):yn=li?da(e.stateNode.nextSibling):null;return!0}function kr(){yn=li=null,Ge=!1}function hd(){var e=qs;return e!==null&&(zi===null?zi=e:zi.push.apply(zi,e),qs=null),e}function kl(e){qs===null?qs=[e]:qs.push(e)}var dd=I(null),Xr=null,ds=null;function Zs(e,n,a){pt(dd,n._currentValue),n._currentValue=a}function ps(e){e._currentValue=dd.current,q(dd)}function pd(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function md(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),pd(h.return,a,e),o||(x=null);break t}h=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),pd(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Oo(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;En(u.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(u===gt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(gc):e=[gc])}u=u.return}e!==null&&md(n,e,a,o),n.flags|=262144}function uu(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wr(e){Xr=e,ds=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ci(e){return B0(Xr,e)}function fu(e,n){return Xr===null&&Wr(e),B0(e,n)}function B0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ds===null){if(e===null)throw Error(s(308));ds=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ds=ds.next=n;return a}var oy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ly=r.unstable_scheduleCallback,cy=r.unstable_NormalPriority,zn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gd(){return{controller:new oy,data:new Map,refCount:0}}function Xl(e){e.refCount--,e.refCount===0&&ly(cy,function(){e.controller.abort()})}var Wl=null,_d=0,Io=0,Po=null;function uy(e,n){if(Wl===null){var a=Wl=[];_d=0,Io=Sp(),Po={status:"pending",value:void 0,then:function(o){a.push(o)}}}return _d++,n.then(z0,z0),n}function z0(){if(--_d===0&&Wl!==null){Po!==null&&(Po.status="fulfilled");var e=Wl;Wl=null,Io=0,Po=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var H0=O.S;O.S=function(e,n){E_=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(e,n),H0!==null&&H0(e,n)};var Yr=I(null);function vd(){var e=Yr.current;return e!==null?e:hn.pooledCache}function hu(e,n){n===null?pt(Yr,Yr.current):pt(Yr,n.pool)}function G0(){var e=vd();return e===null?null:{parent:zn._currentValue,pool:e}}var Fo=Error(s(460)),xd=Error(s(474)),du=Error(s(542)),pu={then:function(){}};function V0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function k0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_n,_n),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,W0(e),e;default:if(typeof n.status=="string")n.then(_n,_n);else{if(e=hn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,W0(e),e}throw jr=n,Fo}}function qr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(jr=a,Fo):a}}var jr=null;function X0(){if(jr===null)throw Error(s(459));var e=jr;return jr=null,e}function W0(e){if(e===Fo||e===du)throw Error(s(483))}var Bo=null,Yl=0;function mu(e){var n=Yl;return Yl+=1,Bo===null&&(Bo=[]),k0(Bo,e,n)}function ql(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function gu(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Y0(e){function n(Q,W){if(e){var et=Q.deletions;et===null?(Q.deletions=[W],Q.flags|=16):et.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=fs(Q,W),Q.index=0,Q.sibling=null,Q}function h(Q,W,et){return Q.index=et,e?(et=Q.alternate,et!==null?(et=et.index,et<W?(Q.flags|=67108866,W):et):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,W,et,_t){return W===null||W.tag!==6?(W=od(et,Q.mode,_t),W.return=Q,W):(W=u(W,et),W.return=Q,W)}function H(Q,W,et,_t){var fe=et.type;return fe===w?mt(Q,W,et.props.children,_t,et.key):W!==null&&(W.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===T&&qr(fe)===W.type)?(W=u(W,et.props),ql(W,et),W.return=Q,W):(W=lu(et.type,et.key,et.props,null,Q.mode,_t),ql(W,et),W.return=Q,W)}function nt(Q,W,et,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=ld(et,Q.mode,_t),W.return=Q,W):(W=u(W,et.children||[]),W.return=Q,W)}function mt(Q,W,et,_t,fe){return W===null||W.tag!==7?(W=Vr(et,Q.mode,_t,fe),W.return=Q,W):(W=u(W,et),W.return=Q,W)}function vt(Q,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=od(""+W,Q.mode,et),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return et=lu(W.type,W.key,W.props,null,Q.mode,et),ql(et,W),et.return=Q,et;case E:return W=ld(W,Q.mode,et),W.return=Q,W;case T:return W=qr(W),vt(Q,W,et)}if(j(W)||K(W))return W=Vr(W,Q.mode,et,null),W.return=Q,W;if(typeof W.then=="function")return vt(Q,mu(W),et);if(W.$$typeof===L)return vt(Q,fu(Q,W),et);gu(Q,W)}return null}function st(Q,W,et,_t){var fe=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return fe!==null?null:R(Q,W,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===fe?H(Q,W,et,_t):null;case E:return et.key===fe?nt(Q,W,et,_t):null;case T:return et=qr(et),st(Q,W,et,_t)}if(j(et)||K(et))return fe!==null?null:mt(Q,W,et,_t,null);if(typeof et.then=="function")return st(Q,W,mu(et),_t);if(et.$$typeof===L)return st(Q,W,fu(Q,et),_t);gu(Q,et)}return null}function lt(Q,W,et,_t,fe){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(et)||null,R(W,Q,""+_t,fe);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Q=Q.get(_t.key===null?et:_t.key)||null,H(W,Q,_t,fe);case E:return Q=Q.get(_t.key===null?et:_t.key)||null,nt(W,Q,_t,fe);case T:return _t=qr(_t),lt(Q,W,et,_t,fe)}if(j(_t)||K(_t))return Q=Q.get(et)||null,mt(W,Q,_t,fe,null);if(typeof _t.then=="function")return lt(Q,W,et,mu(_t),fe);if(_t.$$typeof===L)return lt(Q,W,et,fu(W,_t),fe);gu(W,_t)}return null}function ae(Q,W,et,_t){for(var fe=null,Ke=null,ue=W,Ne=W=0,ze=null;ue!==null&&Ne<et.length;Ne++){ue.index>Ne?(ze=ue,ue=null):ze=ue.sibling;var Qe=st(Q,ue,et[Ne],_t);if(Qe===null){ue===null&&(ue=ze);break}e&&ue&&Qe.alternate===null&&n(Q,ue),W=h(Qe,W,Ne),Ke===null?fe=Qe:Ke.sibling=Qe,Ke=Qe,ue=ze}if(Ne===et.length)return a(Q,ue),Ge&&hs(Q,Ne),fe;if(ue===null){for(;Ne<et.length;Ne++)ue=vt(Q,et[Ne],_t),ue!==null&&(W=h(ue,W,Ne),Ke===null?fe=ue:Ke.sibling=ue,Ke=ue);return Ge&&hs(Q,Ne),fe}for(ue=o(ue);Ne<et.length;Ne++)ze=lt(ue,Q,Ne,et[Ne],_t),ze!==null&&(e&&ze.alternate!==null&&ue.delete(ze.key===null?Ne:ze.key),W=h(ze,W,Ne),Ke===null?fe=ze:Ke.sibling=ze,Ke=ze);return e&&ue.forEach(function(dr){return n(Q,dr)}),Ge&&hs(Q,Ne),fe}function _e(Q,W,et,_t){if(et==null)throw Error(s(151));for(var fe=null,Ke=null,ue=W,Ne=W=0,ze=null,Qe=et.next();ue!==null&&!Qe.done;Ne++,Qe=et.next()){ue.index>Ne?(ze=ue,ue=null):ze=ue.sibling;var dr=st(Q,ue,Qe.value,_t);if(dr===null){ue===null&&(ue=ze);break}e&&ue&&dr.alternate===null&&n(Q,ue),W=h(dr,W,Ne),Ke===null?fe=dr:Ke.sibling=dr,Ke=dr,ue=ze}if(Qe.done)return a(Q,ue),Ge&&hs(Q,Ne),fe;if(ue===null){for(;!Qe.done;Ne++,Qe=et.next())Qe=vt(Q,Qe.value,_t),Qe!==null&&(W=h(Qe,W,Ne),Ke===null?fe=Qe:Ke.sibling=Qe,Ke=Qe);return Ge&&hs(Q,Ne),fe}for(ue=o(ue);!Qe.done;Ne++,Qe=et.next())Qe=lt(ue,Q,Ne,Qe.value,_t),Qe!==null&&(e&&Qe.alternate!==null&&ue.delete(Qe.key===null?Ne:Qe.key),W=h(Qe,W,Ne),Ke===null?fe=Qe:Ke.sibling=Qe,Ke=Qe);return e&&ue.forEach(function(MM){return n(Q,MM)}),Ge&&hs(Q,Ne),fe}function un(Q,W,et,_t){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var fe=et.key;W!==null;){if(W.key===fe){if(fe=et.type,fe===w){if(W.tag===7){a(Q,W.sibling),_t=u(W,et.props.children),_t.return=Q,Q=_t;break t}}else if(W.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===T&&qr(fe)===W.type){a(Q,W.sibling),_t=u(W,et.props),ql(_t,et),_t.return=Q,Q=_t;break t}a(Q,W);break}else n(Q,W);W=W.sibling}et.type===w?(_t=Vr(et.props.children,Q.mode,_t,et.key),_t.return=Q,Q=_t):(_t=lu(et.type,et.key,et.props,null,Q.mode,_t),ql(_t,et),_t.return=Q,Q=_t)}return x(Q);case E:t:{for(fe=et.key;W!==null;){if(W.key===fe)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){a(Q,W.sibling),_t=u(W,et.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}_t=ld(et,Q.mode,_t),_t.return=Q,Q=_t}return x(Q);case T:return et=qr(et),un(Q,W,et,_t)}if(j(et))return ae(Q,W,et,_t);if(K(et)){if(fe=K(et),typeof fe!="function")throw Error(s(150));return et=fe.call(et),_e(Q,W,et,_t)}if(typeof et.then=="function")return un(Q,W,mu(et),_t);if(et.$$typeof===L)return un(Q,W,fu(Q,et),_t);gu(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(a(Q,W.sibling),_t=u(W,et),_t.return=Q,Q=_t):(a(Q,W),_t=od(et,Q.mode,_t),_t.return=Q,Q=_t),x(Q)):a(Q,W)}return function(Q,W,et,_t){try{Yl=0;var fe=un(Q,W,et,_t);return Bo=null,fe}catch(ue){if(ue===Fo||ue===du)throw ue;var Ke=Wi(29,ue,null,Q.mode);return Ke.lanes=_t,Ke.return=Q,Ke}}}var Zr=Y0(!0),q0=Y0(!1),Ks=!1;function Sd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Js(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ou(e),D0(e,null,a),n}return ru(e,o,n,a),ou(e)}function jl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ea(e,a)}}function Md(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ed=!1;function Zl(){if(Ed){var e=Po;if(e!==null)throw e}}function Kl(e,n,a,o){Ed=!1;var u=e.updateQueue;Ks=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,nt=H.next;H.next=null,x===null?h=nt:x.next=nt,x=H;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,R=mt.lastBaseUpdate,R!==x&&(R===null?mt.firstBaseUpdate=nt:R.next=nt,mt.lastBaseUpdate=H))}if(h!==null){var vt=u.baseState;x=0,mt=nt=H=null,R=h;do{var st=R.lane&-536870913,lt=st!==R.lane;if(lt?(Be&st)===st:(o&st)===st){st!==0&&st===Io&&(Ed=!0),mt!==null&&(mt=mt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var ae=e,_e=R;st=n;var un=a;switch(_e.tag){case 1:if(ae=_e.payload,typeof ae=="function"){vt=ae.call(un,vt,st);break t}vt=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=_e.payload,st=typeof ae=="function"?ae.call(un,vt,st):ae,st==null)break t;vt=v({},vt,st);break t;case 2:Ks=!0}}st=R.callback,st!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},mt===null?(nt=mt=lt,H=vt):mt=mt.next=lt,x|=st;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);mt===null&&(H=vt),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=mt,h===null&&(u.shared.lanes=0),ir|=x,e.lanes=x,e.memoizedState=vt}}function j0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Z0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)j0(a[e],n)}var zo=I(null),_u=I(0);function K0(e,n){e=Es,pt(_u,e),pt(zo,n),Es=e|n.baseLanes}function bd(){pt(_u,Es),pt(zo,zo.current)}function Td(){Es=_u.current,q(zo),q(_u)}var Yi=I(null),ha=null;function $s(e){var n=e.alternate;pt(On,On.current&1),pt(Yi,e),ha===null&&(n===null||zo.current!==null||n.memoizedState!==null)&&(ha=e)}function Ad(e){pt(On,On.current),pt(Yi,e),ha===null&&(ha=e)}function Q0(e){e.tag===22?(pt(On,On.current),pt(Yi,e),ha===null&&(ha=e)):tr()}function tr(){pt(On,On.current),pt(Yi,Yi.current)}function qi(e){q(Yi),ha===e&&(ha=null),q(On)}var On=I(0);function vu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lp(a)||Up(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ms=0,we=null,ln=null,Hn=null,xu=!1,Ho=!1,Kr=!1,Su=0,Ql=0,Go=null,hy=0;function Nn(){throw Error(s(321))}function Rd(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!En(e[a],n[a]))return!1;return!0}function Cd(e,n,a,o,u,h){return ms=h,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Og:kd,Kr=!1,h=a(o,u),Kr=!1,Ho&&(h=$0(n,a,o,u)),J0(e),h}function J0(e){O.H=tc;var n=ln!==null&&ln.next!==null;if(ms=0,Hn=ln=we=null,xu=!1,Ql=0,Go=null,n)throw Error(s(300));e===null||Gn||(e=e.dependencies,e!==null&&uu(e)&&(Gn=!0))}function $0(e,n,a,o){we=e;var u=0;do{if(Ho&&(Go=null),Ql=0,Ho=!1,25<=u)throw Error(s(301));if(u+=1,Hn=ln=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=Ig,h=n(a,o)}while(Ho);return h}function dy(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Jl(n):n,e=e.useState()[0],(ln!==null?ln.memoizedState:null)!==e&&(we.flags|=1024),n}function wd(){var e=Su!==0;return Su=0,e}function Dd(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Nd(e){if(xu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xu=!1}ms=0,Hn=ln=we=null,Ho=!1,Ql=Su=0,Go=null}function Ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Hn===null?we.memoizedState=Hn=e:Hn=Hn.next=e,Hn}function In(){if(ln===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=ln.next;var n=Hn===null?we.memoizedState:Hn.next;if(n!==null)Hn=n,ln=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));ln=e,e={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},Hn===null?we.memoizedState=Hn=e:Hn=Hn.next=e}return Hn}function yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(e){var n=Ql;return Ql+=1,Go===null&&(Go=[]),e=k0(Go,e,n),n=we,(Hn===null?n.memoizedState:Hn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Og:kd),e}function Mu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jl(e);if(e.$$typeof===L)return ci(e)}throw Error(s(438,String(e)))}function Ld(e){var n=null,a=we.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=we.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yu(),we.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ft;return n.index++,a}function gs(e,n){return typeof n=="function"?n(e):n}function Eu(e){var n=In();return Ud(n,ln,e)}function Ud(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=x=null,H=null,nt=n,mt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(Be&vt)===vt:(ms&vt)===vt){var st=nt.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===Io&&(mt=!0);else if((ms&st)===st){nt=nt.next,st===Io&&(mt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=vt,x=h):H=H.next=vt,we.lanes|=st,ir|=st;vt=nt.action,Kr&&a(h,vt),h=nt.hasEagerState?nt.eagerState:a(h,vt)}else st={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=st,x=h):H=H.next=st,we.lanes|=vt,ir|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?x=h:H.next=R,!En(h,e.memoizedState)&&(Gn=!0,mt&&(a=Po,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Od(e){var n=In(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);En(h,n.memoizedState)||(Gn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function tg(e,n,a){var o=we,u=In(),h=Ge;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!En((ln||u).memoizedState,a);if(x&&(u.memoizedState=a,Gn=!0),u=u.queue,Fd(ig.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||Hn!==null&&Hn.memoizedState.tag&1){if(o.flags|=2048,Vo(9,{destroy:void 0},ng.bind(null,o,u,a,n),null),hn===null)throw Error(s(349));h||(ms&127)!==0||eg(o,n,a)}return a}function eg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=we.updateQueue,n===null?(n=yu(),we.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ng(e,n,a,o){n.value=a,n.getSnapshot=o,ag(n)&&sg(e)}function ig(e,n,a){return a(function(){ag(n)&&sg(e)})}function ag(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!En(e,a)}catch{return!0}}function sg(e){var n=Gr(e,2);n!==null&&Hi(n,e,2)}function Id(e){var n=Ci();if(typeof e=="function"){var a=e;if(e=a(),Kr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:e},n}function rg(e,n,a,o){return e.baseState=a,Ud(e,ln,typeof o=="function"?o:gs)}function py(e,n,a,o,u){if(Au(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,og(n,h)):(h.next=a.next,n.pending=a.next=h)}}function og(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=O.T,x={};O.T=x;try{var R=a(u,o),H=O.S;H!==null&&H(x,R),lg(e,n,R)}catch(nt){Pd(e,n,nt)}finally{h!==null&&x.types!==null&&(h.types=x.types),O.T=h}}else try{h=a(u,o),lg(e,n,h)}catch(nt){Pd(e,n,nt)}}function lg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cg(e,n,o)},function(o){return Pd(e,n,o)}):cg(e,n,a)}function cg(e,n,a){n.status="fulfilled",n.value=a,ug(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,og(e,a)))}function Pd(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,ug(n),n=n.next;while(n!==o)}e.action=null}function ug(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fg(e,n){return n}function hg(e,n){if(Ge){var a=hn.formState;if(a!==null){t:{var o=we;if(Ge){if(yn){e:{for(var u=yn,h=fa;u.nodeType!==8;){if(!h){u=null;break e}if(u=da(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){yn=da(u.nextSibling),o=u.data==="F!";break t}}js(o)}o=!1}o&&(n=a[0])}}return a=Ci(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fg,lastRenderedState:n},a.queue=o,a=Ng.bind(null,we,o),o.dispatch=a,o=Id(!1),h=Vd.bind(null,we,!1,o.queue),o=Ci(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=py.bind(null,we,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function dg(e){var n=In();return pg(n,ln,e)}function pg(e,n,a){if(n=Ud(e,n,fg)[0],e=Eu(gs)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Jl(n)}catch(x){throw x===Fo?du:x}else o=n;n=In();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(we.flags|=2048,Vo(9,{destroy:void 0},my.bind(null,u,a),null)),[o,h,e]}function my(e,n){e.action=n}function mg(e){var n=In(),a=ln;if(a!==null)return pg(n,a,e);In(),n=n.memoizedState,a=In();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Vo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=we.updateQueue,n===null&&(n=yu(),we.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function gg(){return In().memoizedState}function bu(e,n,a,o){var u=Ci();we.flags|=e,u.memoizedState=Vo(1|n,{destroy:void 0},a,o===void 0?null:o)}function Tu(e,n,a,o){var u=In();o=o===void 0?null:o;var h=u.memoizedState.inst;ln!==null&&o!==null&&Rd(o,ln.memoizedState.deps)?u.memoizedState=Vo(n,h,a,o):(we.flags|=e,u.memoizedState=Vo(1|n,h,a,o))}function _g(e,n){bu(8390656,8,e,n)}function Fd(e,n){Tu(2048,8,e,n)}function gy(e){we.flags|=4;var n=we.updateQueue;if(n===null)n=yu(),we.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function vg(e){var n=In().memoizedState;return gy({ref:n,nextImpl:e}),function(){if((Je&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function xg(e,n){return Tu(4,2,e,n)}function Sg(e,n){return Tu(4,4,e,n)}function yg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mg(e,n,a){a=a!=null?a.concat([e]):null,Tu(4,4,yg.bind(null,n,e),a)}function Bd(){}function Eg(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Rd(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function bg(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Rd(n,o[1]))return o[0];if(o=e(),Kr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o}function zd(e,n,a){return a===void 0||(ms&1073741824)!==0&&(Be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=T_(),we.lanes|=e,ir|=e,a)}function Tg(e,n,a,o){return En(a,n)?a:zo.current!==null?(e=zd(e,a,o),En(e,n)||(Gn=!0),e):(ms&42)===0||(ms&1073741824)!==0&&(Be&261930)===0?(Gn=!0,e.memoizedState=a):(e=T_(),we.lanes|=e,ir|=e,n)}function Ag(e,n,a,o,u){var h=P.p;P.p=h!==0&&8>h?h:8;var x=O.T,R={};O.T=R,Vd(e,!1,n,a);try{var H=u(),nt=O.S;if(nt!==null&&nt(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=fy(H,o);$l(e,n,mt,Ki(e))}else $l(e,n,o,Ki(e))}catch(vt){$l(e,n,{then:function(){},status:"rejected",reason:vt},Ki())}finally{P.p=h,x!==null&&R.types!==null&&(x.types=R.types),O.T=x}}function _y(){}function Hd(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Rg(e).queue;Ag(e,u,n,rt,a===null?_y:function(){return Cg(e),a(o)})}function Rg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cg(e){var n=Rg(e);n.next===null&&(n=e.alternate.memoizedState),$l(e,n.next.queue,{},Ki())}function Gd(){return ci(gc)}function wg(){return In().memoizedState}function Dg(){return In().memoizedState}function vy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ki();e=Qs(a);var o=Js(n,e,a);o!==null&&(Hi(o,n,a),jl(o,n,a)),n={cache:gd()},e.payload=n;return}n=n.return}}function xy(e,n,a){var o=Ki();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Au(e)?Lg(n,a):(a=sd(e,n,a,o),a!==null&&(Hi(a,e,o),Ug(a,n,o)))}function Ng(e,n,a){var o=Ki();$l(e,n,a,o)}function $l(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Lg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,R=h(x,a);if(u.hasEagerState=!0,u.eagerState=R,En(R,x))return ru(e,n,u,0),hn===null&&su(),!1}catch{}if(a=sd(e,n,u,o),a!==null)return Hi(a,e,o),Ug(a,n,o),!0}return!1}function Vd(e,n,a,o){if(o={lane:2,revertLane:Sp(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Au(e)){if(n)throw Error(s(479))}else n=sd(e,a,o,2),n!==null&&Hi(n,e,2)}function Au(e){var n=e.alternate;return e===we||n!==null&&n===we}function Lg(e,n){Ho=xu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ug(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ea(e,a)}}var tc={readContext:ci,use:Mu,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useLayoutEffect:Nn,useInsertionEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useSyncExternalStore:Nn,useId:Nn,useHostTransitionStatus:Nn,useFormState:Nn,useActionState:Nn,useOptimistic:Nn,useMemoCache:Nn,useCacheRefresh:Nn};tc.useEffectEvent=Nn;var Og={readContext:ci,use:Mu,useCallback:function(e,n){return Ci().memoizedState=[e,n===void 0?null:n],e},useContext:ci,useEffect:_g,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bu(4194308,4,yg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bu(4194308,4,e,n)},useInsertionEffect:function(e,n){bu(4,2,e,n)},useMemo:function(e,n){var a=Ci();n=n===void 0?null:n;var o=e();if(Kr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ci();if(a!==void 0){var u=a(n);if(Kr){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=xy.bind(null,we,e),[o.memoizedState,e]},useRef:function(e){var n=Ci();return e={current:e},n.memoizedState=e},useState:function(e){e=Id(e);var n=e.queue,a=Ng.bind(null,we,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Bd,useDeferredValue:function(e,n){var a=Ci();return zd(a,e,n)},useTransition:function(){var e=Id(!1);return e=Ag.bind(null,we,e.queue,!0,!1),Ci().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=we,u=Ci();if(Ge){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),hn===null)throw Error(s(349));(Be&127)!==0||eg(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,_g(ig.bind(null,o,h,e),[e]),o.flags|=2048,Vo(9,{destroy:void 0},ng.bind(null,o,h,a,n),null),a},useId:function(){var e=Ci(),n=hn.identifierPrefix;if(Ge){var a=Ya,o=Wa;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Su++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Gd,useFormState:hg,useActionState:hg,useOptimistic:function(e){var n=Ci();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vd.bind(null,we,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ld,useCacheRefresh:function(){return Ci().memoizedState=vy.bind(null,we)},useEffectEvent:function(e){var n=Ci(),a={impl:e};return n.memoizedState=a,function(){if((Je&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},kd={readContext:ci,use:Mu,useCallback:Eg,useContext:ci,useEffect:Fd,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:bg,useReducer:Eu,useRef:gg,useState:function(){return Eu(gs)},useDebugValue:Bd,useDeferredValue:function(e,n){var a=In();return Tg(a,ln.memoizedState,e,n)},useTransition:function(){var e=Eu(gs)[0],n=In().memoizedState;return[typeof e=="boolean"?e:Jl(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:Gd,useFormState:dg,useActionState:dg,useOptimistic:function(e,n){var a=In();return rg(a,ln,e,n)},useMemoCache:Ld,useCacheRefresh:Dg};kd.useEffectEvent=vg;var Ig={readContext:ci,use:Mu,useCallback:Eg,useContext:ci,useEffect:Fd,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:bg,useReducer:Od,useRef:gg,useState:function(){return Od(gs)},useDebugValue:Bd,useDeferredValue:function(e,n){var a=In();return ln===null?zd(a,e,n):Tg(a,ln.memoizedState,e,n)},useTransition:function(){var e=Od(gs)[0],n=In().memoizedState;return[typeof e=="boolean"?e:Jl(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:Gd,useFormState:mg,useActionState:mg,useOptimistic:function(e,n){var a=In();return ln!==null?rg(a,ln,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ld,useCacheRefresh:Dg};Ig.useEffectEvent=vg;function Xd(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wd={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Ki(),u=Qs(o);u.payload=n,a!=null&&(u.callback=a),n=Js(e,u,o),n!==null&&(Hi(n,e,o),jl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Ki(),u=Qs(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Js(e,u,o),n!==null&&(Hi(n,e,o),jl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ki(),o=Qs(a);o.tag=2,n!=null&&(o.callback=n),n=Js(e,o,a),n!==null&&(Hi(n,e,a),jl(n,e,a))}};function Pg(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!Ri(a,o)||!Ri(u,h):!0}function Fg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Wd.enqueueReplaceState(n,n.state,null)}function Qr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Bg(e){au(e)}function zg(e){console.error(e)}function Hg(e){au(e)}function Ru(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Yd(e,n,a){return a=Qs(a),a.tag=3,a.payload={element:null},a.callback=function(){Ru(e,n)},a}function Vg(e){return e=Qs(e),e.tag=3,e}function kg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Gg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Gg(n,a,o),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Sy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Oo(n,a,u,!0),a=Yi.current,a!==null){switch(a.tag){case 31:case 13:return ha===null?zu():a.alternate===null&&Ln===0&&(Ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),_p(e,o,u)),!1;case 22:return a.flags|=65536,o===pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),_p(e,o,u)),!1}throw Error(s(435,a.tag))}return _p(e,o,u),zu(),!1}if(Ge)return n=Yi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==fd&&(e=Error(s(422),{cause:o}),kl(la(e,a)))):(o!==fd&&(n=Error(s(423),{cause:o}),kl(la(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=la(o,a),u=Yd(e.stateNode,o,u),Md(e,u),Ln!==4&&(Ln=2)),!1;var h=Error(s(520),{cause:o});if(h=la(h,a),lc===null?lc=[h]:lc.push(h),Ln!==4&&(Ln=2),n===null)return!0;o=la(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Yd(a.stateNode,o,e),Md(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ar===null||!ar.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vg(u),kg(u,e,a,o),Md(a,u),!1}a=a.return}while(a!==null);return!1}var qd=Error(s(461)),Gn=!1;function ui(e,n,a,o){n.child=e===null?q0(n,null,a,o):Zr(n,e.child,a,o)}function Xg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Wr(n),o=Cd(e,n,a,x,h,u),R=wd(),e!==null&&!Gn?(Dd(e,n,u),_s(e,n,u)):(Ge&&R&&cd(n),n.flags|=1,ui(e,n,o,u),n.child)}function Wg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!rd(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Yg(e,n,h,o,u)):(e=lu(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!ep(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ri,a(x,o)&&e.ref===n.ref)return _s(e,n,u)}return n.flags|=1,e=fs(h,o),e.ref=n.ref,e.return=n,n.child=e}function Yg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Ri(h,o)&&e.ref===n.ref)if(Gn=!1,n.pendingProps=o=h,ep(e,u))(e.flags&131072)!==0&&(Gn=!0);else return n.lanes=e.lanes,_s(e,n,u)}return jd(e,n,a,o,u)}function qg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return jg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hu(n,h!==null?h.cachePool:null),h!==null?K0(n,h):bd(),Q0(n);else return o=n.lanes=536870912,jg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(hu(n,h.cachePool),K0(n,h),tr(),n.memoizedState=null):(e!==null&&hu(n,null),bd(),tr());return ui(e,n,u,a),n.child}function ec(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jg(e,n,a,o,u){var h=vd();return h=h===null?null:{parent:zn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&hu(n,null),bd(),Q0(n),e!==null&&Oo(e,n,o,!0),n.childLanes=u,null}function Cu(e,n){return n=Du({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Zg(e,n,a){return Zr(n,e.child,null,a),e=Cu(n,n.pendingProps),e.flags|=2,qi(n),n.memoizedState=null,e}function yy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ge){if(o.mode==="hidden")return e=Cu(n,o),n.lanes=536870912,ec(null,e);if(Ad(n),(e=yn)?(e=ov(e,fa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ys!==null?{id:Wa,overflow:Ya}:null,retryLane:536870912,hydrationErrors:null},a=L0(e),a.return=n,n.child=a,li=n,yn=null)):e=null,e===null)throw js(n);return n.lanes=536870912,null}return Cu(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(Ad(n),u)if(n.flags&256)n.flags&=-257,n=Zg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Gn||Oo(e,n,a,!1),u=(a&e.childLanes)!==0,Gn||u){if(o=hn,o!==null&&(x=za(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,Gr(e,x),Hi(o,e,x),qd;zu(),n=Zg(e,n,a)}else e=h.treeContext,yn=da(x.nextSibling),li=n,Ge=!0,qs=null,fa=!1,e!==null&&I0(n,e),n=Cu(n,o),n.flags|=4096;return n}return e=fs(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function jd(e,n,a,o,u){return Wr(n),a=Cd(e,n,a,o,void 0,u),o=wd(),e!==null&&!Gn?(Dd(e,n,u),_s(e,n,u)):(Ge&&o&&cd(n),n.flags|=1,ui(e,n,a,u),n.child)}function Kg(e,n,a,o,u,h){return Wr(n),n.updateQueue=null,a=$0(n,o,a,u),J0(e),o=wd(),e!==null&&!Gn?(Dd(e,n,h),_s(e,n,h)):(Ge&&o&&cd(n),n.flags|=1,ui(e,n,a,h),n.child)}function Qg(e,n,a,o,u){if(Wr(n),n.stateNode===null){var h=Do,x=a.contextType;typeof x=="object"&&x!==null&&(h=ci(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Wd,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Sd(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?ci(x):Do,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Xd(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Wd.enqueueReplaceState(h,h.state,null),Kl(n,o,h,u),Zl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,H=Qr(a,R);h.props=H;var nt=h.context,mt=a.contextType;x=Do,typeof mt=="object"&&mt!==null&&(x=ci(mt));var vt=a.getDerivedStateFromProps;mt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||nt!==x)&&Fg(n,h,o,x),Ks=!1;var st=n.memoizedState;h.state=st,Kl(n,o,h,u),Zl(),nt=n.memoizedState,R||st!==nt||Ks?(typeof vt=="function"&&(Xd(n,a,vt,o),nt=n.memoizedState),(H=Ks||Pg(n,a,H,o,st,nt,x))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=x,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,yd(e,n),x=n.memoizedProps,mt=Qr(a,x),h.props=mt,vt=n.pendingProps,st=h.context,nt=a.contextType,H=Do,typeof nt=="object"&&nt!==null&&(H=ci(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==vt||st!==H)&&Fg(n,h,o,H),Ks=!1,st=n.memoizedState,h.state=st,Kl(n,o,h,u),Zl();var lt=n.memoizedState;x!==vt||st!==lt||Ks||e!==null&&e.dependencies!==null&&uu(e.dependencies)?(typeof R=="function"&&(Xd(n,a,R,o),lt=n.memoizedState),(mt=Ks||Pg(n,a,mt,o,st,lt,H)||e!==null&&e.dependencies!==null&&uu(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=H,o=mt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,wu(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Zr(n,e.child,null,u),n.child=Zr(n,null,a,u)):ui(e,n,a,u),n.memoizedState=h.state,e=n.child):e=_s(e,n,u),e}function Jg(e,n,a,o){return kr(),n.flags|=256,ui(e,n,a,o),n.child}var Zd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kd(e){return{baseLanes:e,cachePool:G0()}}function Qd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Zi),e}function $g(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ge){if(u?$s(n):tr(),(e=yn)?(e=ov(e,fa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ys!==null?{id:Wa,overflow:Ya}:null,retryLane:536870912,hydrationErrors:null},a=L0(e),a.return=n,n.child=a,li=n,yn=null)):e=null,e===null)throw js(n);return Up(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(tr(),u=n.mode,R=Du({mode:"hidden",children:R},u),o=Vr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Kd(a),o.childLanes=Qd(e,x,a),n.memoizedState=Zd,ec(null,o)):($s(n),Jd(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(h)n.flags&256?($s(n),n.flags&=-257,n=$d(e,n,a)):n.memoizedState!==null?(tr(),n.child=e.child,n.flags|=128,n=null):(tr(),R=o.fallback,u=n.mode,o=Du({mode:"visible",children:o.children},u),R=Vr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Zr(n,e.child,null,a),o=n.child,o.memoizedState=Kd(a),o.childLanes=Qd(e,x,a),n.memoizedState=Zd,n=ec(null,o));else if($s(n),Up(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var nt=x.dgst;x=nt,o=Error(s(419)),o.stack="",o.digest=x,kl({value:o,source:null,stack:null}),n=$d(e,n,a)}else if(Gn||Oo(e,n,a,!1),x=(a&e.childLanes)!==0,Gn||x){if(x=hn,x!==null&&(o=za(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Gr(e,o),Hi(x,e,o),qd;Lp(R)||zu(),n=$d(e,n,a)}else Lp(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,yn=da(R.nextSibling),li=n,Ge=!0,qs=null,fa=!1,e!==null&&I0(n,e),n=Jd(n,o.children),n.flags|=4096);return n}return u?(tr(),R=o.fallback,u=n.mode,H=e.child,nt=H.sibling,o=fs(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,nt!==null?R=fs(nt,R):(R=Vr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,ec(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Kd(a):(u=R.cachePool,u!==null?(H=zn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=G0(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Qd(e,x,a),n.memoizedState=Zd,ec(e.child,o)):($s(n),a=e.child,e=a.sibling,a=fs(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Jd(e,n){return n=Du({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Du(e,n){return e=Wi(22,e,null,n),e.lanes=0,e}function $d(e,n,a){return Zr(n,e.child,null,a),e=Jd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function t_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),pd(e.return,n,a)}function tp(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function e_(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=On.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,pt(On,x),ui(e,n,o,a),o=Ge?Vl:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&t_(e,a,n);else if(e.tag===19)t_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&vu(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),tp(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vu(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}tp(n,!0,a,null,h,o);break;case"together":tp(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function _s(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ir|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Oo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=fs(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=fs(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ep(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&uu(e)))}function My(e,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),Zs(n,zn,e.memoizedState.cache),kr();break;case 27:case 5:le(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:Zs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ad(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?($s(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$g(e,n,a):($s(n),e=_s(e,n,a),e!==null?e.sibling:null);$s(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Oo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return e_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(On,On.current),o)break;return null;case 22:return n.lanes=0,qg(e,n,a,n.pendingProps);case 24:Zs(n,zn,e.memoizedState.cache)}return _s(e,n,a)}function n_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Gn=!0;else{if(!ep(e,a)&&(n.flags&128)===0)return Gn=!1,My(e,n,a);Gn=(e.flags&131072)!==0}else Gn=!1,Ge&&(n.flags&1048576)!==0&&O0(n,Vl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=qr(n.elementType),n.type=e,typeof e=="function")rd(e)?(o=Qr(e,o),n.tag=1,n=Qg(null,n,e,o,a)):(n.tag=0,n=jd(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=Xg(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=Wg(null,n,e,o,a);break t}}throw n=J(e)||e,Error(s(306,n,""))}}return n;case 0:return jd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Qr(o,n.pendingProps),Qg(e,n,o,u,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,yd(e,n),Kl(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Zs(n,zn,o),o!==h.cache&&md(n,[zn],a,!0),Zl(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Jg(e,n,o,a);break t}else if(o!==u){u=la(Error(s(424)),n),kl(u),n=Jg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,yn=da(e.firstChild),li=n,Ge=!0,qs=null,fa=!0,a=q0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(kr(),o===u){n=_s(e,n,a);break t}ui(e,n,o,a)}n=n.child}return n;case 26:return wu(e,n),e===null?(a=dv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ge||(a=n.type,e=n.pendingProps,o=Yu(tt.current).createElement(a),o[Tn]=n,o[Cn]=e,fi(o,a,e),X(o),n.stateNode=o):n.memoizedState=dv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return le(n),e===null&&Ge&&(o=n.stateNode=uv(n.type,n.pendingProps,tt.current),li=n,fa=!0,u=yn,lr(n.type)?(Op=u,yn=da(o.firstChild)):yn=u),ui(e,n,n.pendingProps.children,a),wu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ge&&((u=o=yn)&&(o=Jy(o,n.type,n.pendingProps,fa),o!==null?(n.stateNode=o,li=n,yn=da(o.firstChild),fa=!1,u=!0):u=!1),u||js(n)),le(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,wp(u,h)?o=null:x!==null&&wp(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Cd(e,n,dy,null,null,a),gc._currentValue=u),wu(e,n),ui(e,n,o,a),n.child;case 6:return e===null&&Ge&&((e=a=yn)&&(a=$y(a,n.pendingProps,fa),a!==null?(n.stateNode=a,li=n,yn=null,e=!0):e=!1),e||js(n)),null;case 13:return $g(e,n,a);case 4:return Rt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Zr(n,null,o,a):ui(e,n,o,a),n.child;case 11:return Xg(e,n,n.type,n.pendingProps,a);case 7:return ui(e,n,n.pendingProps,a),n.child;case 8:return ui(e,n,n.pendingProps.children,a),n.child;case 12:return ui(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Zs(n,n.type,o.value),ui(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Wr(n),u=ci(u),o=o(u),n.flags|=1,ui(e,n,o,a),n.child;case 14:return Wg(e,n,n.type,n.pendingProps,a);case 15:return Yg(e,n,n.type,n.pendingProps,a);case 19:return e_(e,n,a);case 31:return yy(e,n,a);case 22:return qg(e,n,a,n.pendingProps);case 24:return Wr(n),o=ci(zn),e===null?(u=vd(),u===null&&(u=hn,h=gd(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Sd(n),Zs(n,zn,u)):((e.lanes&a)!==0&&(yd(e,n),Kl(n,null,null,a),Zl()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Zs(n,zn,o)):(o=h.cache,Zs(n,zn,o),o!==u.cache&&md(n,[zn],a,!0))),ui(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function vs(e){e.flags|=4}function np(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(w_())e.flags|=8192;else throw jr=pu,xd}else e.flags&=-16777217}function i_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vv(n))if(w_())e.flags|=8192;else throw jr=pu,xd}function Nu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ye():536870912,e.lanes|=n,Yo|=n)}function nc(e,n){if(!Ge)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Mn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ey(e,n,a){var o=n.pendingProps;switch(ud(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(n),null;case 1:return Mn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ps(zn),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Uo(n)?vs(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hd())),Mn(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(vs(n),h!==null?(Mn(n),i_(n,h)):(Mn(n),np(n,u,null,o,a))):h?h!==e.memoizedState?(vs(n),Mn(n),i_(n,h)):(Mn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&vs(n),Mn(n),np(n,u,e,o,a)),null;case 27:if(de(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&vs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Mn(n),null}e=Ct.current,Uo(n)?P0(n):(e=uv(u,o,a),n.stateNode=e,vs(n))}return Mn(n),null;case 5:if(de(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&vs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Mn(n),null}if(h=Ct.current,Uo(n))P0(n);else{var x=Yu(tt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[Tn]=n,h[Cn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(fi(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&vs(n)}}return Mn(n),np(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&vs(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,Uo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=li,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Tn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$_(e.nodeValue,a)),e||js(n,!0)}else e=Yu(e).createTextNode(o),e[Tn]=n,n.stateNode=e}return Mn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Uo(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Tn]=n}else kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Mn(n),e=!1}else a=hd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(qi(n),n):(qi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Mn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Uo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Tn]=n}else kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Mn(n),u=!1}else u=hd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(qi(n),n):(qi(n),null)}return qi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Nu(n,n.updateQueue),Mn(n),null);case 4:return Kt(),e===null&&bp(n.stateNode.containerInfo),Mn(n),null;case 10:return ps(n.type),Mn(n),null;case 19:if(q(On),o=n.memoizedState,o===null)return Mn(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)nc(o,!1);else{if(Ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=vu(e),h!==null){for(n.flags|=128,nc(o,!1),e=h.updateQueue,n.updateQueue=e,Nu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)N0(a,e),a=a.sibling;return pt(On,On.current&1|2),Ge&&hs(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Pu&&(n.flags|=128,u=!0,nc(o,!1),n.lanes=4194304)}else{if(!u)if(e=vu(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Nu(n,e),nc(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ge)return Mn(n),null}else 2*b()-o.renderingStartTime>Pu&&a!==536870912&&(n.flags|=128,u=!0,nc(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=On.current,pt(On,u?a&1|2:a&1),Ge&&hs(n,o.treeForkCount),e):(Mn(n),null);case 22:case 23:return qi(n),Td(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Mn(n),n.subtreeFlags&6&&(n.flags|=8192)):Mn(n),a=n.updateQueue,a!==null&&Nu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(Yr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ps(zn),Mn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function by(e,n){switch(ud(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ps(zn),Kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(qi(n),n.alternate===null)throw Error(s(340));kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(On),null;case 4:return Kt(),null;case 10:return ps(n.type),null;case 22:case 23:return qi(n),Td(),e!==null&&q(Yr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ps(zn),null;case 25:return null;default:return null}}function a_(e,n){switch(ud(n),n.tag){case 3:ps(zn),Kt();break;case 26:case 27:case 5:de(n);break;case 4:Kt();break;case 31:n.memoizedState!==null&&qi(n);break;case 13:qi(n);break;case 19:q(On);break;case 10:ps(n.type);break;case 22:case 23:qi(n),Td(),e!==null&&q(Yr);break;case 24:ps(zn)}}function ic(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){rn(n,n.return,R)}}function er(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var H=a,nt=R;try{nt()}catch(mt){rn(u,H,mt)}}}o=o.next}while(o!==h)}}catch(mt){rn(n,n.return,mt)}}function s_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Z0(n,a)}catch(o){rn(e,e.return,o)}}}function r_(e,n,a){a.props=Qr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){rn(e,n,o)}}function ac(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){rn(e,n,u)}}function qa(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){rn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){rn(e,n,u)}else a.current=null}function o_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){rn(e,e.return,u)}}function ip(e,n,a){try{var o=e.stateNode;Yy(o,e.type,a,n),o[Cn]=n}catch(u){rn(e,e.return,u)}}function l_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&lr(e.type)||e.tag===4}function ap(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||l_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&lr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sp(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=_n));else if(o!==4&&(o===27&&lr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(sp(e,n,a),e=e.sibling;e!==null;)sp(e,n,a),e=e.sibling}function Lu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&lr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Lu(e,n,a),e=e.sibling;e!==null;)Lu(e,n,a),e=e.sibling}function c_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);fi(n,o,a),n[Tn]=e,n[Cn]=a}catch(h){rn(e,e.return,h)}}var xs=!1,Vn=!1,rp=!1,u_=typeof WeakSet=="function"?WeakSet:Set,ei=null;function Ty(e,n){if(e=e.containerInfo,Rp=$u,e=Ao(e),Br(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,R=-1,H=-1,nt=0,mt=0,vt=e,st=null;e:for(;;){for(var lt;vt!==a||u!==0&&vt.nodeType!==3||(R=x+u),vt!==h||o!==0&&vt.nodeType!==3||(H=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)st=vt,vt=lt;for(;;){if(vt===e)break e;if(st===a&&++nt===u&&(R=x),st===h&&++mt===o&&(H=x),(lt=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=lt}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cp={focusedElem:e,selectionRange:a},$u=!1,ei=n;ei!==null;)if(n=ei,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ei=e;else for(;ei!==null;){switch(n=ei,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ae=Qr(a.type,u);e=o.getSnapshotBeforeUpdate(ae,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(_e){rn(a,a.return,_e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Np(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Np(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,ei=e;break}ei=n.return}}function f_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ys(e,a),o&4&&ic(5,a);break;case 1:if(ys(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){rn(a,a.return,x)}else{var u=Qr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){rn(a,a.return,x)}}o&64&&s_(a),o&512&&ac(a,a.return);break;case 3:if(ys(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Z0(e,n)}catch(x){rn(a,a.return,x)}}break;case 27:n===null&&o&4&&c_(a);case 26:case 5:ys(e,a),n===null&&o&4&&o_(a),o&512&&ac(a,a.return);break;case 12:ys(e,a);break;case 31:ys(e,a),o&4&&p_(e,a);break;case 13:ys(e,a),o&4&&m_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Oy.bind(null,a),tM(e,a))));break;case 22:if(o=a.memoizedState!==null||xs,!o){n=n!==null&&n.memoizedState!==null||Vn,u=xs;var h=Vn;xs=o,(Vn=n)&&!h?Ms(e,a,(a.subtreeFlags&8772)!==0):ys(e,a),xs=u,Vn=h}break;case 30:break;default:ys(e,a)}}function h_(e){var n=e.alternate;n!==null&&(e.alternate=null,h_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ma(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bn=null,Pi=!1;function Ss(e,n,a){for(a=a.child;a!==null;)d_(e,n,a),a=a.sibling}function d_(e,n,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:Vn||qa(a,n),Ss(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Vn||qa(a,n);var o=bn,u=Pi;lr(a.type)&&(bn=a.stateNode,Pi=!1),Ss(e,n,a),dc(a.stateNode),bn=o,Pi=u;break;case 5:Vn||qa(a,n);case 6:if(o=bn,u=Pi,bn=null,Ss(e,n,a),bn=o,Pi=u,bn!==null)if(Pi)try{(bn.nodeType===9?bn.body:bn.nodeName==="HTML"?bn.ownerDocument.body:bn).removeChild(a.stateNode)}catch(h){rn(a,n,h)}else try{bn.removeChild(a.stateNode)}catch(h){rn(a,n,h)}break;case 18:bn!==null&&(Pi?(e=bn,sv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),tl(e)):sv(bn,a.stateNode));break;case 4:o=bn,u=Pi,bn=a.stateNode.containerInfo,Pi=!0,Ss(e,n,a),bn=o,Pi=u;break;case 0:case 11:case 14:case 15:er(2,a,n),Vn||er(4,a,n),Ss(e,n,a);break;case 1:Vn||(qa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&r_(a,n,o)),Ss(e,n,a);break;case 21:Ss(e,n,a);break;case 22:Vn=(o=Vn)||a.memoizedState!==null,Ss(e,n,a),Vn=o;break;default:Ss(e,n,a)}}function p_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{tl(e)}catch(a){rn(n,n.return,a)}}}function m_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tl(e)}catch(a){rn(n,n.return,a)}}function Ay(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new u_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new u_),n;default:throw Error(s(435,e.tag))}}function Uu(e,n){var a=Ay(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Iy.bind(null,e,o);o.then(u,u)}})}function Fi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(lr(R.type)){bn=R.stateNode,Pi=!1;break t}break;case 5:bn=R.stateNode,Pi=!1;break t;case 3:case 4:bn=R.stateNode.containerInfo,Pi=!0;break t}R=R.return}if(bn===null)throw Error(s(160));d_(h,x,u),bn=null,Pi=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)g_(n,e),n=n.sibling}var Ra=null;function g_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fi(n,e),Bi(e),o&4&&(er(3,e,e.return),ic(3,e),er(5,e,e.return));break;case 1:Fi(n,e),Bi(e),o&512&&(Vn||a===null||qa(a,a.return)),o&64&&xs&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ra;if(Fi(n,e),Bi(e),o&512&&(Vn||a===null||qa(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Pn]||h[Tn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),fi(h,o,a),h[Tn]=e,X(h),o=h;break t;case"link":var x=gv("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(h=x[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}h=u.createElement(o),fi(h,o,a),u.head.appendChild(h);break;case"meta":if(x=gv("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(h=x[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}h=u.createElement(o),fi(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[Tn]=e,X(h),o=h}e.stateNode=o}else _v(u,e.type,e.stateNode);else e.stateNode=mv(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?_v(u,e.type,e.stateNode):mv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ip(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fi(n,e),Bi(e),o&512&&(Vn||a===null||qa(a,a.return)),a!==null&&o&4&&ip(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fi(n,e),Bi(e),o&512&&(Vn||a===null||qa(a,a.return)),e.flags&32){u=e.stateNode;try{Dn(u,"")}catch(ae){rn(e,e.return,ae)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ip(e,u,a!==null?a.memoizedProps:u)),o&1024&&(rp=!0);break;case 6:if(Fi(n,e),Bi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ae){rn(e,e.return,ae)}}break;case 3:if(Zu=null,u=Ra,Ra=qu(n.containerInfo),Fi(n,e),Ra=u,Bi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{tl(n.containerInfo)}catch(ae){rn(e,e.return,ae)}rp&&(rp=!1,__(e));break;case 4:o=Ra,Ra=qu(e.stateNode.containerInfo),Fi(n,e),Bi(e),Ra=o;break;case 12:Fi(n,e),Bi(e);break;case 31:Fi(n,e),Bi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Uu(e,o)));break;case 13:Fi(n,e),Bi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Iu=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Uu(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=xs,mt=Vn;if(xs=nt||u,Vn=mt||H,Fi(n,e),Vn=mt,xs=nt,Bi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||xs||Vn||Jr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=H.stateNode;var vt=H.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(ae){rn(H,H.return,ae)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(ae){rn(H,H.return,ae)}}}else if(n.tag===18){if(a===null){H=n;try{var lt=H.stateNode;u?rv(lt,!0):rv(H.stateNode,!1)}catch(ae){rn(H,H.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Uu(e,a))));break;case 19:Fi(n,e),Bi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Uu(e,o)));break;case 30:break;case 21:break;default:Fi(n,e),Bi(e)}}function Bi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(l_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=ap(e);Lu(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(Dn(x,""),a.flags&=-33);var R=ap(e);Lu(e,R,x);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=ap(e);sp(e,nt,H);break;default:throw Error(s(161))}}catch(mt){rn(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function __(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;__(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ys(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f_(e,n.alternate,n),n=n.sibling}function Jr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:er(4,n,n.return),Jr(n);break;case 1:qa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&r_(n,n.return,a),Jr(n);break;case 27:dc(n.stateNode);case 26:case 5:qa(n,n.return),Jr(n);break;case 22:n.memoizedState===null&&Jr(n);break;case 30:Jr(n);break;default:Jr(n)}e=e.sibling}}function Ms(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Ms(u,h,a),ic(4,h);break;case 1:if(Ms(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){rn(o,o.return,nt)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)j0(H[u],R)}catch(nt){rn(o,o.return,nt)}}a&&x&64&&s_(h),ac(h,h.return);break;case 27:c_(h);case 26:case 5:Ms(u,h,a),a&&o===null&&x&4&&o_(h),ac(h,h.return);break;case 12:Ms(u,h,a);break;case 31:Ms(u,h,a),a&&x&4&&p_(u,h);break;case 13:Ms(u,h,a),a&&x&4&&m_(u,h);break;case 22:h.memoizedState===null&&Ms(u,h,a),ac(h,h.return);break;case 30:break;default:Ms(u,h,a)}n=n.sibling}}function op(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xl(a))}function lp(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xl(e))}function Ca(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)v_(e,n,a,o),n=n.sibling}function v_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ca(e,n,a,o),u&2048&&ic(9,n);break;case 1:Ca(e,n,a,o);break;case 3:Ca(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xl(e)));break;case 12:if(u&2048){Ca(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,R=h.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){rn(n,n.return,H)}}else Ca(e,n,a,o);break;case 31:Ca(e,n,a,o);break;case 13:Ca(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Ca(e,n,a,o):sc(e,n):h._visibility&2?Ca(e,n,a,o):(h._visibility|=2,ko(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&op(x,n);break;case 24:Ca(e,n,a,o),u&2048&&lp(n.alternate,n);break;default:Ca(e,n,a,o)}}function ko(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,R=a,H=o,nt=x.flags;switch(x.tag){case 0:case 11:case 15:ko(h,x,R,H,u),ic(8,x);break;case 23:break;case 22:var mt=x.stateNode;x.memoizedState!==null?mt._visibility&2?ko(h,x,R,H,u):sc(h,x):(mt._visibility|=2,ko(h,x,R,H,u)),u&&nt&2048&&op(x.alternate,x);break;case 24:ko(h,x,R,H,u),u&&nt&2048&&lp(x.alternate,x);break;default:ko(h,x,R,H,u)}n=n.sibling}}function sc(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:sc(a,o),u&2048&&op(o.alternate,o);break;case 24:sc(a,o),u&2048&&lp(o.alternate,o);break;default:sc(a,o)}n=n.sibling}}var rc=8192;function Xo(e,n,a){if(e.subtreeFlags&rc)for(e=e.child;e!==null;)x_(e,n,a),e=e.sibling}function x_(e,n,a){switch(e.tag){case 26:Xo(e,n,a),e.flags&rc&&e.memoizedState!==null&&hM(a,Ra,e.memoizedState,e.memoizedProps);break;case 5:Xo(e,n,a);break;case 3:case 4:var o=Ra;Ra=qu(e.stateNode.containerInfo),Xo(e,n,a),Ra=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=rc,rc=16777216,Xo(e,n,a),rc=o):Xo(e,n,a));break;default:Xo(e,n,a)}}function S_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function oc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ei=o,M_(o,e)}S_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)y_(e),e=e.sibling}function y_(e){switch(e.tag){case 0:case 11:case 15:oc(e),e.flags&2048&&er(9,e,e.return);break;case 3:oc(e);break;case 12:oc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ou(e)):oc(e);break;default:oc(e)}}function Ou(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ei=o,M_(o,e)}S_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:er(8,n,n.return),Ou(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ou(n));break;default:Ou(n)}e=e.sibling}}function M_(e,n){for(;ei!==null;){var a=ei;switch(a.tag){case 0:case 11:case 15:er(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ei=o;else t:for(a=e;ei!==null;){o=ei;var u=o.sibling,h=o.return;if(h_(o),o===a){ei=null;break t}if(u!==null){u.return=h,ei=u;break t}ei=h}}}var Ry={getCacheForType:function(e){var n=ci(zn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ci(zn).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Je=0,hn=null,Ie=null,Be=0,sn=0,ji=null,nr=!1,Wo=!1,cp=!1,Es=0,Ln=0,ir=0,$r=0,up=0,Zi=0,Yo=0,lc=null,zi=null,fp=!1,Iu=0,E_=0,Pu=1/0,Fu=null,ar=null,Wn=0,sr=null,qo=null,bs=0,hp=0,dp=null,b_=null,cc=0,pp=null;function Ki(){return(Je&2)!==0&&Be!==0?Be&-Be:O.T!==null?Sp():Vi()}function T_(){if(Zi===0)if((Be&536870912)===0||Ge){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),Zi=e}else Zi=536870912;return e=Yi.current,e!==null&&(e.flags|=32),Zi}function Hi(e,n,a){(e===hn&&(sn===2||sn===9)||e.cancelPendingCommit!==null)&&(jo(e,0),rr(e,Be,Zi,!1)),Zn(e,a),((Je&2)===0||e!==hn)&&(e===hn&&((Je&2)===0&&($r|=a),Ln===4&&rr(e,Be,Zi,!1)),ja(e))}function A_(e,n,a){if((Je&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Jt(e,n),u=o?Ny(e,n):gp(e,n,!0),h=o;do{if(u===0){Wo&&!o&&rr(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!wy(a)){u=gp(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;u=lc;var H=R.current.memoizedState.isDehydrated;if(H&&(jo(R,x).flags|=256),x=gp(R,x,!1),x!==2){if(cp&&!H){R.errorRecoveryDisabledLanes|=h,$r|=h,u=4;break t}h=zi,zi=u,h!==null&&(zi===null?zi=h:zi.push.apply(zi,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){jo(e,0),rr(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:rr(o,n,Zi,!nr);break t;case 2:zi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Iu+300-b(),10<u)){if(rr(o,n,Zi,!nr),ut(o,0,!0)!==0)break t;bs=n,o.timeoutHandle=iv(R_.bind(null,o,a,zi,Fu,fp,n,Zi,$r,Yo,nr,h,"Throttled",-0,0),u);break t}R_(o,a,zi,Fu,fp,n,Zi,$r,Yo,nr,h,null,-0,0)}}break}while(!0);ja(e)}function R_(e,n,a,o,u,h,x,R,H,nt,mt,vt,st,lt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_n},x_(n,h,vt);var ae=(h&62914560)===h?Iu-b():(h&4194048)===h?E_-b():0;if(ae=dM(vt,ae),ae!==null){bs=h,e.cancelPendingCommit=ae(I_.bind(null,e,n,h,a,o,u,x,R,H,mt,vt,null,st,lt)),rr(e,h,x,!nt);return}}I_(e,n,h,a,o,u,x,R,H)}function wy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!En(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rr(e,n,a,o){n&=~up,n&=~$r,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Pt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&ns(e,a,n)}function Bu(){return(Je&6)===0?(uc(0),!1):!0}function mp(){if(Ie!==null){if(sn===0)var e=Ie.return;else e=Ie,ds=Xr=null,Nd(e),Bo=null,Yl=0,e=Ie;for(;e!==null;)a_(e.alternate,e),e=e.return;Ie=null}}function jo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),bs=0,mp(),hn=e,Ie=a=fs(e.current,null),Be=n,sn=0,ji=null,nr=!1,Wo=Jt(e,n),cp=!1,Yo=Zi=up=$r=ir=Ln=0,zi=lc=null,fp=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),h=1<<u;n|=e[u],o&=~h}return Es=n,su(),a}function C_(e,n){we=null,O.H=tc,n===Fo||n===du?(n=X0(),sn=3):n===xd?(n=X0(),sn=4):sn=n===qd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ji=n,Ie===null&&(Ln=1,Ru(e,la(n,e.current)))}function w_(){var e=Yi.current;return e===null?!0:(Be&4194048)===Be?ha===null:(Be&62914560)===Be||(Be&536870912)!==0?e===ha:!1}function D_(){var e=O.H;return O.H=tc,e===null?tc:e}function N_(){var e=O.A;return O.A=Ry,e}function zu(){Ln=4,nr||(Be&4194048)!==Be&&Yi.current!==null||(Wo=!0),(ir&134217727)===0&&($r&134217727)===0||hn===null||rr(hn,Be,Zi,!1)}function gp(e,n,a){var o=Je;Je|=2;var u=D_(),h=N_();(hn!==e||Be!==n)&&(Fu=null,jo(e,n)),n=!1;var x=Ln;t:do try{if(sn!==0&&Ie!==null){var R=Ie,H=ji;switch(sn){case 8:mp(),x=6;break t;case 3:case 2:case 9:case 6:Yi.current===null&&(n=!0);var nt=sn;if(sn=0,ji=null,Zo(e,R,H,nt),a&&Wo){x=0;break t}break;default:nt=sn,sn=0,ji=null,Zo(e,R,H,nt)}}Dy(),x=Ln;break}catch(mt){C_(e,mt)}while(!0);return n&&e.shellSuspendCounter++,ds=Xr=null,Je=o,O.H=u,O.A=h,Ie===null&&(hn=null,Be=0,su()),x}function Dy(){for(;Ie!==null;)L_(Ie)}function Ny(e,n){var a=Je;Je|=2;var o=D_(),u=N_();hn!==e||Be!==n?(Fu=null,Pu=b()+500,jo(e,n)):Wo=Jt(e,n);t:do try{if(sn!==0&&Ie!==null){n=Ie;var h=ji;e:switch(sn){case 1:sn=0,ji=null,Zo(e,n,h,1);break;case 2:case 9:if(V0(h)){sn=0,ji=null,U_(n);break}n=function(){sn!==2&&sn!==9||hn!==e||(sn=7),ja(e)},h.then(n,n);break t;case 3:sn=7;break t;case 4:sn=5;break t;case 7:V0(h)?(sn=0,ji=null,U_(n)):(sn=0,ji=null,Zo(e,n,h,7));break;case 5:var x=null;switch(Ie.tag){case 26:x=Ie.memoizedState;case 5:case 27:var R=Ie;if(x?vv(x):R.stateNode.complete){sn=0,ji=null;var H=R.sibling;if(H!==null)Ie=H;else{var nt=R.return;nt!==null?(Ie=nt,Hu(nt)):Ie=null}break e}}sn=0,ji=null,Zo(e,n,h,5);break;case 6:sn=0,ji=null,Zo(e,n,h,6);break;case 8:mp(),Ln=6;break t;default:throw Error(s(462))}}Ly();break}catch(mt){C_(e,mt)}while(!0);return ds=Xr=null,O.H=o,O.A=u,Je=a,Ie!==null?0:(hn=null,Be=0,su(),Ln)}function Ly(){for(;Ie!==null&&!Tt();)L_(Ie)}function L_(e){var n=n_(e.alternate,e,Es);e.memoizedProps=e.pendingProps,n===null?Hu(e):Ie=n}function U_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Kg(a,n,n.pendingProps,n.type,void 0,Be);break;case 11:n=Kg(a,n,n.pendingProps,n.type.render,n.ref,Be);break;case 5:Nd(n);default:a_(a,n),n=Ie=N0(n,Es),n=n_(a,n,Es)}e.memoizedProps=e.pendingProps,n===null?Hu(e):Ie=n}function Zo(e,n,a,o){ds=Xr=null,Nd(n),Bo=null,Yl=0;var u=n.return;try{if(Sy(e,u,n,a,Be)){Ln=1,Ru(e,la(a,e.current)),Ie=null;return}}catch(h){if(u!==null)throw Ie=u,h;Ln=1,Ru(e,la(a,e.current)),Ie=null;return}n.flags&32768?(Ge||o===1?e=!0:Wo||(Be&536870912)!==0?e=!1:(nr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yi.current,o!==null&&o.tag===13&&(o.flags|=16384))),O_(n,e)):Hu(n)}function Hu(e){var n=e;do{if((n.flags&32768)!==0){O_(n,nr);return}e=n.return;var a=Ey(n.alternate,n,Es);if(a!==null){Ie=a;return}if(n=n.sibling,n!==null){Ie=n;return}Ie=n=e}while(n!==null);Ln===0&&(Ln=5)}function O_(e,n){do{var a=by(e.alternate,e);if(a!==null){a.flags&=32767,Ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ie=e;return}Ie=e=a}while(e!==null);Ln=6,Ie=null}function I_(e,n,a,o,u,h,x,R,H){e.cancelPendingCommit=null;do Gu();while(Wn!==0);if((Je&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=ad,xi(e,a,h,x,R,H),e===hn&&(Ie=hn=null,Be=0),qo=n,sr=e,bs=a,hp=h,dp=u,b_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Py(ct,function(){return H_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=P.p,P.p=2,x=Je,Je|=4;try{Ty(e,n,a)}finally{Je=x,P.p=u,O.T=o}}Wn=1,P_(),F_(),B_()}}function P_(){if(Wn===1){Wn=0;var e=sr,n=qo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Je;Je|=4;try{g_(n,e);var h=Cp,x=Ao(e.containerInfo),R=h.focusedElem,H=h.selectionRange;if(x!==R&&R&&R.ownerDocument&&Xa(R.ownerDocument.documentElement,R)){if(H!==null&&Br(R)){var nt=H.start,mt=H.end;if(mt===void 0&&(mt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(mt,R.value.length);else{var vt=R.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var lt=st.getSelection(),ae=R.textContent.length,_e=Math.min(H.start,ae),un=H.end===void 0?_e:Math.min(H.end,ae);!lt.extend&&_e>un&&(x=un,un=_e,_e=x);var Q=To(R,_e),W=To(R,un);if(Q&&W&&(lt.rangeCount!==1||lt.anchorNode!==Q.node||lt.anchorOffset!==Q.offset||lt.focusNode!==W.node||lt.focusOffset!==W.offset)){var et=vt.createRange();et.setStart(Q.node,Q.offset),lt.removeAllRanges(),_e>un?(lt.addRange(et),lt.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),lt.addRange(et))}}}}for(vt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var _t=vt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}$u=!!Rp,Cp=Rp=null}finally{Je=u,P.p=o,O.T=a}}e.current=n,Wn=2}}function F_(){if(Wn===2){Wn=0;var e=sr,n=qo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Je;Je|=4;try{f_(e,n.alternate,n)}finally{Je=u,P.p=o,O.T=a}}Wn=3}}function B_(){if(Wn===4||Wn===3){Wn=0,U();var e=sr,n=qo,a=bs,o=b_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Wn=5:(Wn=0,qo=sr=null,z_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ar=null),na(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=P.p,P.p=2,O.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];h(R.value,{componentStack:R.stack})}}finally{O.T=n,P.p=u}}(bs&3)!==0&&Gu(),ja(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===pp?cc++:(cc=0,pp=e):cc=0,uc(0)}}function z_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xl(n)))}function Gu(){return P_(),F_(),B_(),H_()}function H_(){if(Wn!==5)return!1;var e=sr,n=hp;hp=0;var a=na(bs),o=O.T,u=P.p;try{P.p=32>a?32:a,O.T=null,a=dp,dp=null;var h=sr,x=bs;if(Wn=0,qo=sr=null,bs=0,(Je&6)!==0)throw Error(s(331));var R=Je;if(Je|=4,y_(h.current),v_(h,h.current,x,a),Je=R,uc(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(bt,h)}catch{}return!0}finally{P.p=u,O.T=o,z_(e,n)}}function G_(e,n,a){n=la(a,n),n=Yd(e.stateNode,n,2),e=Js(e,n,2),e!==null&&(Zn(e,2),ja(e))}function rn(e,n,a){if(e.tag===3)G_(e,e,a);else for(;n!==null;){if(n.tag===3){G_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ar===null||!ar.has(o))){e=la(a,e),a=Vg(2),o=Js(n,a,2),o!==null&&(kg(a,o,n,e),Zn(o,2),ja(o));break}}n=n.return}}function _p(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Cy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(cp=!0,u.add(a),e=Uy.bind(null,e,n,a),n.then(e,e))}function Uy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,hn===e&&(Be&a)===a&&(Ln===4||Ln===3&&(Be&62914560)===Be&&300>b()-Iu?(Je&2)===0&&jo(e,0):up|=a,Yo===Be&&(Yo=0)),ja(e)}function V_(e,n){n===0&&(n=Ye()),e=Gr(e,n),e!==null&&(Zn(e,n),ja(e))}function Oy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),V_(e,a)}function Iy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),V_(e,a)}function Py(e,n){return Lt(e,n)}var Vu=null,Ko=null,vp=!1,ku=!1,xp=!1,or=0;function ja(e){e!==Ko&&e.next===null&&(Ko===null?Vu=Ko=e:Ko=Ko.next=e),ku=!0,vp||(vp=!0,By())}function uc(e,n){if(!xp&&ku){xp=!0;do for(var a=!1,o=Vu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Pt(42|e)+1)-1,h&=u&~(x&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Y_(o,h))}else h=Be,h=ut(o,o===hn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Jt(o,h)||(a=!0,Y_(o,h));o=o.next}while(a);xp=!1}}function Fy(){k_()}function k_(){ku=vp=!1;var e=0;or!==0&&jy()&&(e=or);for(var n=b(),a=null,o=Vu;o!==null;){var u=o.next,h=X_(o,n);h===0?(o.next=null,a===null?Vu=u:a.next=u,u===null&&(Ko=a)):(a=o,(e!==0||(h&3)!==0)&&(ku=!0)),o=u}Wn!==0&&Wn!==5||uc(e),or!==0&&(or=0)}function X_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Pt(h),R=1<<x,H=u[x];H===-1?((R&a)===0||(R&o)!==0)&&(u[x]=xe(R,n)):H<=n&&(e.expiredLanes|=R),h&=~R}if(n=hn,a=Be,a=ut(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(sn===2||sn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Vt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Vt(o),na(a)){case 2:case 8:a=St;break;case 32:a=ct;break;case 268435456:a=wt;break;default:a=ct}return o=W_.bind(null,e),a=Lt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Vt(o),e.callbackPriority=2,e.callbackNode=null,2}function W_(e,n){if(Wn!==0&&Wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gu()&&e.callbackNode!==a)return null;var o=Be;return o=ut(e,e===hn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(A_(e,o,n),X_(e,b()),e.callbackNode!=null&&e.callbackNode===a?W_.bind(null,e):null)}function Y_(e,n){if(Gu())return null;A_(e,n,!0)}function By(){Ky(function(){(Je&6)!==0?Lt(dt,Fy):k_()})}function Sp(){if(or===0){var e=Io;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),or=e}return or}function q_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rr(""+e)}function j_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function zy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=q_((u[Cn]||null).action),x=o.submitter;x&&(n=(n=x[Cn]||null)?q_(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var R=new Lr("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var H=x?j_(u,x):new FormData(u);Hd(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(R.preventDefault(),H=x?j_(u,x):new FormData(u),Hd(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var yp=0;yp<id.length;yp++){var Mp=id[yp],Hy=Mp.toLowerCase(),Gy=Mp[0].toUpperCase()+Mp.slice(1);Aa(Hy,"on"+Gy)}Aa(T0,"onAnimationEnd"),Aa(A0,"onAnimationIteration"),Aa(R0,"onAnimationStart"),Aa("dblclick","onDoubleClick"),Aa("focusin","onFocus"),Aa("focusout","onBlur"),Aa(iy,"onTransitionRun"),Aa(ay,"onTransitionStart"),Aa(sy,"onTransitionCancel"),Aa(C0,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fc));function Z_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],H=R.instance,nt=R.currentTarget;if(R=R.listener,H!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=nt;try{h(u)}catch(mt){au(mt)}u.currentTarget=null,h=H}else for(x=0;x<o.length;x++){if(R=o[x],H=R.instance,nt=R.currentTarget,R=R.listener,H!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=nt;try{h(u)}catch(mt){au(mt)}u.currentTarget=null,h=H}}}}function Pe(e,n){var a=n[ya];a===void 0&&(a=n[ya]=new Set);var o=e+"__bubble";a.has(o)||(K_(n,e,2,!1),a.add(o))}function Ep(e,n,a){var o=0;n&&(o|=4),K_(a,e,o,n)}var Xu="_reactListening"+Math.random().toString(36).slice(2);function bp(e){if(!e[Xu]){e[Xu]=!0,ot.forEach(function(a){a!=="selectionchange"&&(Vy.has(a)||Ep(a,!1,e),Ep(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xu]||(n[Xu]=!0,Ep("selectionchange",!1,n))}}function K_(e,n,a,o){switch(Tv(n)){case 2:var u=gM;break;case 8:u=_M;break;default:u=zp}a=u.bind(null,n,a,e),u=void 0,!So||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Tp(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Ui(R),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=h=x;continue t}R=R.parentNode}}o=o.return}xo(function(){var nt=h,mt=Il(a),vt=[];t:{var st=w0.get(e);if(st!==void 0){var lt=Lr,ae=e;switch(e){case"keypress":if(Dr(a)===0)break t;case"keydown":case"keyup":lt=nu;break;case"focusin":ae="focus",lt=Vs;break;case"focusout":ae="blur",lt=Vs;break;case"beforeblur":case"afterblur":lt=Vs;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=qc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=ce;break;case T0:case A0:case R0:lt=Kc;break;case C0:lt=Zt;break;case"scroll":case"scrollend":lt=Ur;break;case"wheel":lt=qe;break;case"copy":case"cut":case"paste":lt=Pr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Et;break;case"toggle":case"beforetoggle":lt=nn}var _e=(n&4)!==0,un=!_e&&(e==="scroll"||e==="scrollend"),Q=_e?st!==null?st+"Capture":null:st;_e=[];for(var W=nt,et;W!==null;){var _t=W;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||Q===null||(_t=ss(W,Q),_t!=null&&_e.push(hc(W,_t,et))),un)break;W=W.return}0<_e.length&&(st=new lt(st,ae,null,a,mt),vt.push({event:st,listeners:_e}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",st&&a!==Cr&&(ae=a.relatedTarget||a.fromElement)&&(Ui(ae)||ae[ia]))break t;if((lt||st)&&(st=mt.window===mt?mt:(st=mt.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(ae=a.relatedTarget||a.toElement,lt=nt,ae=ae?Ui(ae):null,ae!==null&&(un=c(ae),_e=ae.tag,ae!==un||_e!==5&&_e!==27&&_e!==6)&&(ae=null)):(lt=null,ae=nt),lt!==ae)){if(_e=cs,_t="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(_e=Et,_t="onPointerLeave",Q="onPointerEnter",W="pointer"),un=lt==null?st:Ea(lt),et=ae==null?st:Ea(ae),st=new _e(_t,W+"leave",lt,a,mt),st.target=un,st.relatedTarget=et,_t=null,Ui(mt)===nt&&(_e=new _e(Q,W+"enter",ae,a,mt),_e.target=et,_e.relatedTarget=un,_t=_e),un=_t,lt&&ae)e:{for(_e=ky,Q=lt,W=ae,et=0,_t=Q;_t;_t=_e(_t))et++;_t=0;for(var fe=W;fe;fe=_e(fe))_t++;for(;0<et-_t;)Q=_e(Q),et--;for(;0<_t-et;)W=_e(W),_t--;for(;et--;){if(Q===W||W!==null&&Q===W.alternate){_e=Q;break e}Q=_e(Q),W=_e(W)}_e=null}else _e=null;lt!==null&&Q_(vt,st,lt,_e,!1),ae!==null&&un!==null&&Q_(vt,un,ae,_e,!0)}}t:{if(st=nt?Ea(nt):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var Ke=pi;else if(Ii(st))if($n)Ke=Fr;else{Ke=Ze;var ue=ra}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Ha(nt.elementType)&&(Ke=pi):Ke=us;if(Ke&&(Ke=Ke(e,nt))){ba(vt,Ke,a,mt);break t}ue&&ue(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&wn(st,"number",st.value)}switch(ue=nt?Ea(nt):window,e){case"focusin":(Ii(ue)||ue.contentEditable==="true")&&(Ro=ue,td=nt,Gl=null);break;case"focusout":Gl=td=Ro=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,E0(vt,a,mt);break;case"selectionchange":if($h)break;case"keydown":case"keyup":E0(vt,a,mt)}var Ne;if(oi)t:{switch(e){case"compositionstart":var ze="onCompositionStart";break t;case"compositionend":ze="onCompositionEnd";break t;case"compositionupdate":ze="onCompositionUpdate";break t}ze=void 0}else Ei?ki(e,a)&&(ze="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ze="onCompositionStart");ze&&(an&&a.locale!=="ko"&&(Ei||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&Ei&&(Ne=rs()):(yi=mt,Fl="value"in yi?yi.value:yi.textContent,Ei=!0)),ue=Wu(nt,ze),0<ue.length&&(ze=new Bl(ze,e,null,a,mt),vt.push({event:ze,listeners:ue}),Ne?ze.data=Ne:(Ne=ks(a),Ne!==null&&(ze.data=Ne)))),(Ne=He?ka(e,a):Ut(e,a))&&(ze=Wu(nt,"onBeforeInput"),0<ze.length&&(ue=new Bl("onBeforeInput","beforeinput",null,a,mt),vt.push({event:ue,listeners:ze}),ue.data=Ne)),zy(vt,e,nt,a,mt)}Z_(vt,n)})}function hc(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=ss(e,a),u!=null&&o.unshift(hc(e,u,h)),u=ss(e,n),u!=null&&o.push(hc(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ky(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Q_(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var R=a,H=R.alternate,nt=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||nt===null||(H=nt,u?(nt=ss(a,h),nt!=null&&x.unshift(hc(a,nt,H))):u||(nt=ss(a,h),nt!=null&&x.push(hc(a,nt,H)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Xy=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function J_(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(Wy,"")}function $_(e,n){return n=J_(n),J_(e)===n}function cn(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Dn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Dn(e,""+o);break;case"className":ye(e,"class",o);break;case"tabIndex":ye(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ye(e,a,o);break;case"style":Si(e,o,h);break;case"data":if(n!=="object"){ye(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Rr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&cn(e,n,"name",u.name,u,null),cn(e,n,"formEncType",u.formEncType,u,null),cn(e,n,"formMethod",u.formMethod,u,null),cn(e,n,"formTarget",u.formTarget,u,null)):(cn(e,n,"encType",u.encType,u,null),cn(e,n,"method",u.method,u,null),cn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Rr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=_n);break;case"onScroll":o!=null&&Pe("scroll",e);break;case"onScrollEnd":o!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Rr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),Se(e,"popover",o);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ul.get(a)||a,Se(e,a,o))}}function Ap(e,n,a,o,u,h){switch(a){case"style":Si(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Dn(e,o):(typeof o=="number"||typeof o=="bigint")&&Dn(e,""+o);break;case"onScroll":o!=null&&Pe("scroll",e);break;case"onScrollEnd":o!=null&&Pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=_n);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Cn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Se(e,a,o)}}}function fi(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:cn(e,n,h,x,a,null)}}u&&cn(e,n,"srcSet",a.srcSet,a,null),o&&cn(e,n,"src",a.src,a,null);return;case"input":Pe("invalid",e);var R=h=x=u=null,H=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":x=mt;break;case"checked":H=mt;break;case"defaultChecked":nt=mt;break;case"value":h=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:cn(e,n,o,mt,a,null)}}di(e,h,R,H,nt,x,u,!1);return;case"select":Pe("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:cn(e,n,u,R,a,null)}n=h,a=x,e.multiple=!!o,n!=null?xn(e,!!o,n,!1):a!=null&&xn(e,!!o,a,!0);return;case"textarea":Pe("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:cn(e,n,x,R,a,null)}on(e,o,u,h);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":cn(e,n,H,o,a,null));return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(o=0;o<fc.length;o++)Pe(fc[o],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:cn(e,n,nt,o,a,null)}return;default:if(Ha(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Ap(e,n,mt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&cn(e,n,R,o,a,null))}function Yy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,R=null,H=null,nt=null,mt=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=vt;default:o.hasOwnProperty(lt)||cn(e,n,lt,null,o,vt)}}for(var st in o){var lt=o[st];if(vt=a[st],o.hasOwnProperty(st)&&(lt!=null||vt!=null))switch(st){case"type":h=lt;break;case"name":u=lt;break;case"checked":nt=lt;break;case"defaultChecked":mt=lt;break;case"value":x=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&cn(e,n,st,lt,o,vt)}}Qn(e,x,R,H,nt,mt,h,u);return;case"select":lt=x=R=st=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":lt=H;default:o.hasOwnProperty(h)||cn(e,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":st=h;break;case"defaultValue":R=h;break;case"multiple":x=h;default:h!==H&&cn(e,n,u,h,o,H)}n=R,a=x,o=lt,st!=null?xn(e,!!a,st,!1):!!o!=!!a&&(n!=null?xn(e,!!a,n,!0):xn(e,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:cn(e,n,R,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":st=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&cn(e,n,x,u,o,h)}Ce(e,st,lt);return;case"option":for(var ae in a)st=a[ae],a.hasOwnProperty(ae)&&st!=null&&!o.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:cn(e,n,ae,null,o,st));for(H in o)st=o[H],lt=a[H],o.hasOwnProperty(H)&&st!==lt&&(st!=null||lt!=null)&&(H==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":cn(e,n,H,st,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in a)st=a[_e],a.hasOwnProperty(_e)&&st!=null&&!o.hasOwnProperty(_e)&&cn(e,n,_e,null,o,st);for(nt in o)if(st=o[nt],lt=a[nt],o.hasOwnProperty(nt)&&st!==lt&&(st!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:cn(e,n,nt,st,o,lt)}return;default:if(Ha(n)){for(var un in a)st=a[un],a.hasOwnProperty(un)&&st!==void 0&&!o.hasOwnProperty(un)&&Ap(e,n,un,void 0,o,st);for(mt in o)st=o[mt],lt=a[mt],!o.hasOwnProperty(mt)||st===lt||st===void 0&&lt===void 0||Ap(e,n,mt,st,o,lt);return}}for(var Q in a)st=a[Q],a.hasOwnProperty(Q)&&st!=null&&!o.hasOwnProperty(Q)&&cn(e,n,Q,null,o,st);for(vt in o)st=o[vt],lt=a[vt],!o.hasOwnProperty(vt)||st===lt||st==null&&lt==null||cn(e,n,vt,st,o,lt)}function tv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,R=u.duration;if(h&&R&&tv(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],nt=H.startTime;if(nt>R)break;var mt=H.transferSize,vt=H.initiatorType;mt&&tv(vt)&&(H=H.responseEnd,x+=mt*(H<R?1:(R-nt)/(H-nt)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rp=null,Cp=null;function Yu(e){return e.nodeType===9?e:e.ownerDocument}function ev(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function wp(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Dp=null;function jy(){var e=window.event;return e&&e.type==="popstate"?e===Dp?!1:(Dp=e,!0):(Dp=null,!1)}var iv=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(e){return av.resolve(null).then(e).catch(Qy)}:iv;function Qy(e){setTimeout(function(){throw e})}function lr(e){return e==="head"}function sv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),tl(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")dc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,dc(a);for(var h=a.firstChild;h;){var x=h.nextSibling,R=h.nodeName;h[Pn]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&dc(e.ownerDocument.body);a=u}while(a);tl(n)}function rv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Np(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Np(a),Ma(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Pn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=da(e.nextSibling),e===null)break}return null}function $y(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=da(e.nextSibling),e===null))return null;return e}function ov(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=da(e.nextSibling),e===null))return null;return e}function Lp(e){return e.data==="$?"||e.data==="$~"}function Up(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function da(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Op=null;function lv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return da(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function cv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function uv(e,n,a){switch(n=Yu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function dc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ma(e)}var pa=new Map,fv=new Set;function qu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ts=P.d;P.d={f:eM,r:nM,D:iM,C:aM,L:sM,m:rM,X:lM,S:oM,M:cM};function eM(){var e=Ts.f(),n=Bu();return e||n}function nM(e){var n=aa(e);n!==null&&n.tag===5&&n.type==="form"?Cg(n):Ts.r(e)}var Qo=typeof document>"u"?null:document;function hv(e,n,a){var o=Qo;if(o&&typeof n=="string"&&n){var u=pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),fv.has(u)||(fv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),fi(n,"link",e),X(n),o.head.appendChild(n)))}}function iM(e){Ts.D(e),hv("dns-prefetch",e,null)}function aM(e,n){Ts.C(e,n),hv("preconnect",e,n)}function sM(e,n,a){Ts.L(e,n,a);var o=Qo;if(o&&e&&n){var u='link[rel="preload"][as="'+pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pe(a.imageSizes)+'"]')):u+='[href="'+pe(e)+'"]';var h=u;switch(n){case"style":h=Jo(e);break;case"script":h=$o(e)}pa.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pa.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(pc(h))||n==="script"&&o.querySelector(mc(h))||(n=o.createElement("link"),fi(n,"link",e),X(n),o.head.appendChild(n)))}}function rM(e,n){Ts.m(e,n);var a=Qo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pe(o)+'"][href="'+pe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=$o(e)}if(!pa.has(h)&&(e=v({rel:"modulepreload",href:e},n),pa.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mc(h)))return}o=a.createElement("link"),fi(o,"link",e),X(o),a.head.appendChild(o)}}}function oM(e,n,a){Ts.S(e,n,a);var o=Qo;if(o&&e){var u=A(o).hoistableStyles,h=Jo(e);n=n||"default";var x=u.get(h);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(pc(h)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pa.get(h))&&Ip(e,a);var H=x=o.createElement("link");X(H),fi(H,"link",e),H._p=new Promise(function(nt,mt){H.onload=nt,H.onerror=mt}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ju(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(h,x)}}}function lM(e,n){Ts.X(e,n);var a=Qo;if(a&&e){var o=A(a).hoistableScripts,u=$o(e),h=o.get(u);h||(h=a.querySelector(mc(u)),h||(e=v({src:e,async:!0},n),(n=pa.get(u))&&Pp(e,n),h=a.createElement("script"),X(h),fi(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function cM(e,n){Ts.M(e,n);var a=Qo;if(a&&e){var o=A(a).hoistableScripts,u=$o(e),h=o.get(u);h||(h=a.querySelector(mc(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=pa.get(u))&&Pp(e,n),h=a.createElement("script"),X(h),fi(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function dv(e,n,a,o){var u=(u=tt.current)?qu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jo(a.href),a=A(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jo(a.href);var h=A(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(pc(e)))&&!h._p&&(x.instance=h,x.state.loading=5),pa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pa.set(e,a),h||uM(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$o(a),a=A(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Jo(e){return'href="'+pe(e)+'"'}function pc(e){return'link[rel="stylesheet"]['+e+"]"}function pv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function uM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),fi(n,"link",a),X(n),e.head.appendChild(n))}function $o(e){return'[src="'+pe(e)+'"]'}function mc(e){return"script[async]"+e}function mv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(o)return n.instance=o,X(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),fi(o,"style",u),ju(o,a.precedence,e),n.instance=o;case"stylesheet":u=Jo(a.href);var h=e.querySelector(pc(u));if(h)return n.state.loading|=4,n.instance=h,X(h),h;o=pv(a),(u=pa.get(u))&&Ip(o,u),h=(e.ownerDocument||e).createElement("link"),X(h);var x=h;return x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),fi(h,"link",o),n.state.loading|=4,ju(h,a.precedence,e),n.instance=h;case"script":return h=$o(a.src),(u=e.querySelector(mc(h)))?(n.instance=u,X(u),u):(o=a,(u=pa.get(h))&&(o=v({},a),Pp(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),fi(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ju(o,a.precedence,e));return n.instance}function ju(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ip(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Pp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zu=null;function gv(e,n,a){if(Zu===null){var o=new Map,u=Zu=new Map;u.set(a,o)}else u=Zu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Pn]||h[Tn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var R=o.get(x);R?R.push(h):o.set(x,[h])}}return o}function _v(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function vv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Jo(o.href),h=n.querySelector(pc(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ku.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,X(h);return}h=n.ownerDocument||n,o=pv(o),(u=pa.get(u))&&Ip(o,u),h=h.createElement("link"),X(h);var x=h;x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),fi(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ku.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Fp=0;function dM(e,n){return e.stylesheets&&e.count===0&&Ju(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Fp===0&&(Fp=62500*qy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Fp?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Ku(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ju(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qu=null;function Ju(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qu=new Map,n.forEach(pM,e),Qu=null,Ku.call(e))}function pM(e,n){if(!(n.state.loading&4)){var a=Qu.get(e);if(a)var o=a.get(null);else{a=new Map,Qu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=Ku.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var gc={$$typeof:L,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function mM(e,n,a,o,u,h,x,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fe(0),this.hiddenUpdates=Fe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function xv(e,n,a,o,u,h,x,R,H,nt,mt,vt){return e=new mM(e,n,a,x,H,nt,mt,vt,R),n=1,h===!0&&(n|=24),h=Wi(3,null,null,n),e.current=h,h.stateNode=e,n=gd(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Sd(h),e}function Sv(e){return e?(e=Do,e):Do}function yv(e,n,a,o,u,h){u=Sv(u),o.context===null?o.context=u:o.pendingContext=u,o=Qs(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Js(e,o,n),a!==null&&(Hi(a,e,n),jl(a,e,n))}function Mv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Bp(e,n){Mv(e,n),(e=e.alternate)&&Mv(e,n)}function Ev(e){if(e.tag===13||e.tag===31){var n=Gr(e,67108864);n!==null&&Hi(n,e,67108864),Bp(e,67108864)}}function bv(e){if(e.tag===13||e.tag===31){var n=Ki();n=Fs(n);var a=Gr(e,n);a!==null&&Hi(a,e,n),Bp(e,n)}}var $u=!0;function gM(e,n,a,o){var u=O.T;O.T=null;var h=P.p;try{P.p=2,zp(e,n,a,o)}finally{P.p=h,O.T=u}}function _M(e,n,a,o){var u=O.T;O.T=null;var h=P.p;try{P.p=8,zp(e,n,a,o)}finally{P.p=h,O.T=u}}function zp(e,n,a,o){if($u){var u=Hp(o);if(u===null)Tp(e,n,o,tf,a),Av(e,o);else if(xM(u,e,n,a,o))o.stopPropagation();else if(Av(e,o),n&4&&-1<vM.indexOf(e)){for(;u!==null;){var h=aa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=At(h.pendingLanes);if(x!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var H=1<<31-Pt(x);R.entanglements[1]|=H,x&=~H}ja(h),(Je&6)===0&&(Pu=b()+500,uc(0))}}break;case 31:case 13:R=Gr(h,2),R!==null&&Hi(R,h,2),Bu(),Bp(h,2)}if(h=Hp(o),h===null&&Tp(e,n,o,tf,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Tp(e,n,o,null,a)}}function Hp(e){return e=Il(e),Gp(e)}var tf=null;function Gp(e){if(tf=null,e=Ui(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tf=e,null}function Tv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case dt:return 2;case St:return 8;case ct:case Yt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Vp=!1,cr=null,ur=null,fr=null,_c=new Map,vc=new Map,hr=[],vM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Av(e,n){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":_c.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vc.delete(n.pointerId)}}function xc(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=aa(n),n!==null&&Ev(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xM(e,n,a,o,u){switch(n){case"focusin":return cr=xc(cr,e,n,a,o,u),!0;case"dragenter":return ur=xc(ur,e,n,a,o,u),!0;case"mouseover":return fr=xc(fr,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return _c.set(h,xc(_c.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,vc.set(h,xc(vc.get(h)||null,e,n,a,o,u)),!0}return!1}function Rv(e){var n=Ui(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,is(e.priority,function(){bv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,is(e.priority,function(){bv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ef(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Hp(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Cr=o,a.target.dispatchEvent(o),Cr=null}else return n=aa(a),n!==null&&Ev(n),e.blockedOn=a,!1;n.shift()}return!0}function Cv(e,n,a){ef(e)&&a.delete(n)}function SM(){Vp=!1,cr!==null&&ef(cr)&&(cr=null),ur!==null&&ef(ur)&&(ur=null),fr!==null&&ef(fr)&&(fr=null),_c.forEach(Cv),vc.forEach(Cv)}function nf(e,n){e.blockedOn===n&&(e.blockedOn=null,Vp||(Vp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,SM)))}var af=null;function wv(e){af!==e&&(af=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){af===e&&(af=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Gp(o||a)===null)continue;break}var h=aa(a);h!==null&&(e.splice(n,3),n-=3,Hd(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function tl(e){function n(H){return nf(H,e)}cr!==null&&nf(cr,e),ur!==null&&nf(ur,e),fr!==null&&nf(fr,e),_c.forEach(n),vc.forEach(n);for(var a=0;a<hr.length;a++){var o=hr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Rv(a),a.blockedOn===null&&hr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[Cn]||null;if(typeof h=="function")x||wv(a);else if(x){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[Cn]||null)R=x.formAction;else if(Gp(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),wv(a)}}}function Dv(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function kp(e){this._internalRoot=e}sf.prototype.render=kp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Ki();yv(a,o,e,n,null,null)},sf.prototype.unmount=kp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;yv(e.current,2,null,e,null,null),Bu(),n[ia]=null}};function sf(e){this._internalRoot=e}sf.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<hr.length&&n!==0&&n<hr[a].priority;a++);hr.splice(a,0,e),a===0&&Rv(e)}};var Nv=t.version;if(Nv!=="19.2.4")throw Error(s(527,Nv,"19.2.4"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var yM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rf.isDisabled&&rf.supportsFiber)try{bt=rf.inject(yM),yt=rf}catch{}}return yc.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Bg,h=zg,x=Hg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=xv(e,1,!1,null,null,a,o,null,u,h,x,Dv),e[ia]=n.current,bp(e),new kp(n)},yc.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Bg,x=zg,R=Hg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=xv(e,1,!0,n,a??null,o,u,H,h,x,R,Dv),n.context=Sv(null),a=n.current,o=Ki(),o=Fs(o),u=Qs(o),u.callback=null,Js(a,u,o),a=o,n.current.lanes=a,Zn(n,a),ja(n),e[ia]=n.current,bp(e),new sf(n)},yc.version="19.2.4",yc}var Gv;function NM(){if(Gv)return Yp.exports;Gv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Yp.exports=DM(),Yp.exports}var LM=NM();const Lh="183",kx=0,Om=1,Xx=2,Wx=0,uo=1,Yx=2,vl=3,Is=0,vi=1,Xn=2,$a=0,fo=1,Im=2,Pm=3,Fm=4,qx=5,yr=100,jx=101,Zx=102,Kx=103,Qx=104,Jx=200,$x=201,tS=202,eS=203,Vf=204,kf=205,nS=206,iS=207,aS=208,sS=209,rS=210,oS=211,lS=212,cS=213,uS=214,Xf=0,Wf=1,Yf=2,ho=3,qf=4,jf=5,Zf=6,Kf=7,Uh=0,fS=1,hS=2,Ia=0,Km=1,Qm=2,Jm=3,Oh=4,$m=5,t0=6,e0=7,n0=300,br=301,po=302,Pf=303,Ff=304,Yc=306,Ml=1e3,Ja=1001,Qf=1002,ii=1003,dS=1004,Uc=1005,ai=1006,Bf=1007,Us=1008,Gi=1009,i0=1010,a0=1011,El=1012,Ih=1013,Fa=1014,va=1015,ts=1016,Ph=1017,Fh=1018,bl=1020,s0=35902,r0=35899,o0=1021,l0=1022,xa=1023,es=1026,Mr=1027,Bh=1028,zh=1029,mo=1030,Hh=1031,Gh=1033,Ic=33776,Pc=33777,Fc=33778,Bc=33779,Jf=35840,$f=35841,th=35842,eh=35843,nh=36196,ih=37492,ah=37496,sh=37488,rh=37489,oh=37490,lh=37491,ch=37808,uh=37809,fh=37810,hh=37811,dh=37812,ph=37813,mh=37814,gh=37815,_h=37816,vh=37817,xh=37818,Sh=37819,yh=37820,Mh=37821,Eh=36492,bh=36494,Th=36495,Ah=36283,Rh=36284,Ch=36285,wh=36286,pS=3200,Vh=0,mS=1,Ns="",Yn="srgb",go="srgb-linear",Vc="linear",tn="srgb",oo=7680,Bm=519,gS=512,_S=513,vS=514,kh=515,xS=516,SS=517,Xh=518,yS=519,zm=35044,Hm="300 es",Oa=2e3,Tl=2001;function UM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Dh(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function MS(){const r=Dh("canvas");return r.style.display="block",r}const Vv={};function Gm(...r){const t="THREE."+r.shift();console.log(t,...r)}function ES(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Me(...r){r=ES(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Xe(...r){r=ES(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function kc(...r){const t=r.join(" ");t in Vv||(Vv[t]=!0,Me(...r))}function OM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const IM={[Xf]:Wf,[Yf]:Zf,[qf]:Kf,[ho]:jf,[Wf]:Xf,[Zf]:Yf,[Kf]:qf,[jf]:ho};class _o{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const gi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kv=1234567;const zc=Math.PI/180,Al=180/Math.PI;function wl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(gi[r&255]+gi[r>>8&255]+gi[r>>16&255]+gi[r>>24&255]+"-"+gi[t&255]+gi[t>>8&255]+"-"+gi[t>>16&15|64]+gi[t>>24&255]+"-"+gi[i&63|128]+gi[i>>8&255]+"-"+gi[i>>16&255]+gi[i>>24&255]+gi[s&255]+gi[s>>8&255]+gi[s>>16&255]+gi[s>>24&255]).toLowerCase()}function Ue(r,t,i){return Math.max(t,Math.min(i,r))}function c0(r,t){return(r%t+t)%t}function PM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function FM(r,t,i){return r!==t?(i-r)/(t-r):0}function Hc(r,t,i){return(1-i)*r+i*t}function BM(r,t,i,s){return Hc(r,t,1-Math.exp(-i*s))}function zM(r,t=1){return t-Math.abs(c0(r,t*2)-t)}function HM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function GM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function VM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function kM(r,t){return r+Math.random()*(t-r)}function XM(r){return r*(.5-Math.random())}function WM(r){r!==void 0&&(kv=r);let t=kv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function YM(r){return r*zc}function qM(r){return r*Al}function jM(r){return(r&r-1)===0&&r!==0}function ZM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function KM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function QM(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*_,m*v,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*E,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*E,d*p);break;case"ZYZ":r.set(m*E,m*y,d*_,d*p);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function _l(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const An={DEG2RAD:zc,RAD2DEG:Al,generateUUID:wl,clamp:Ue,euclideanModulo:c0,mapLinear:PM,inverseLerp:FM,lerp:Hc,damp:BM,pingpong:zM,smoothstep:HM,smootherstep:GM,randInt:VM,randFloat:kM,randFloatSpread:XM,seededRandom:WM,degToRad:YM,radToDeg:qM,isPowerOfTwo:jM,ceilPowerOfTwo:ZM,floorPowerOfTwo:KM,setQuaternionFromProperEuler:QM,normalize:wi,denormalize:_l};class Oe{constructor(t=0,i=0){Oe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],y=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==y||_!==E){let M=m*g+p*y+_*E+v*w;M<0&&(g=-g,y=-y,E=-E,w=-w,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);S=Math.sin(S*C)/L,d=Math.sin(d*C)/L,m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,v=v*S+w*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,v=v*S+w*d;const C=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=C,p*=C,_*=C,v*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],y=c[f+2],E=c[f+3];return t[i]=d*E+_*v+m*y-p*g,t[i+1]=m*E+_*g+p*v-d*y,t[i+2]=p*E+_*y+d*g-m*v,t[i+3]=_*E-d*v-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"YXZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"ZXY":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"ZYX":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"YZX":this._x=g*_*v+p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v-g*y*E;break;case"XZY":this._x=g*_*v-p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v+g*y*E;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Xv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Xv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Kp.copy(this).projectOnVector(t),this.sub(Kp)}reflect(t){return this.sub(Kp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kp=new Z,Xv=new Ps;class De{constructor(t,i,s,l,c,f,d,m,p){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],y=s[5],E=s[8],w=l[0],M=l[3],S=l[6],C=l[1],L=l[4],D=l[7],F=l[2],B=l[5],z=l[8];return c[0]=f*w+d*C+m*F,c[3]=f*M+d*L+m*B,c[6]=f*S+d*D+m*z,c[1]=p*w+_*C+v*F,c[4]=p*M+_*L+v*B,c[7]=p*S+_*D+v*z,c[2]=g*w+y*C+E*F,c[5]=g*M+y*L+E*B,c[8]=g*S+y*D+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,y=p*c-f*m,E=i*v+s*g+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*f)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=y*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Qp.makeScale(t,i)),this}rotate(t){return this.premultiply(Qp.makeRotation(-t)),this}translate(t,i){return this.premultiply(Qp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qp=new De,Wv=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const r={enabled:!0,workingColorSpace:go,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===tn&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===tn&&(l.r=yl(l.r),l.g=yl(l.g),l.b=yl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ns?Vc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return kc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return kc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[go]:{primaries:t,whitePoint:s,transfer:Vc,toXYZ:Wv,fromXYZ:Yv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:s,transfer:tn,toXYZ:Wv,fromXYZ:Yv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),r}const We=JM();function Os(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let el;class bS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{el===void 0&&(el=Dh("canvas")),el.width=t.width,el.height=t.height;const l=el.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=el}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Dh("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Os(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Os(i[s]/255)*255):i[s]=Os(i[s]);return{data:i,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $M=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=wl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Jp(l[f].image)):c.push(Jp(l[f]))}else c=Jp(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Jp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let tE=0;const $p=new Z;class hi extends _o{constructor(t=hi.DEFAULT_IMAGE,i=hi.DEFAULT_MAPPING,s=Ja,l=Ja,c=ai,f=Us,d=xa,m=Gi,p=hi.DEFAULT_ANISOTROPY,_=Ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=wl(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($p).x}get height(){return this.source.getSize($p).y}get depth(){return this.source.getSize($p).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==n0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ml:t.x=t.x-Math.floor(t.x);break;case Ja:t.x=t.x<0?0:1;break;case Qf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ml:t.y=t.y-Math.floor(t.y);break;case Ja:t.y=t.y<0?0:1;break;case Qf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=n0;hi.DEFAULT_ANISOTROPY=1;class Rn{constructor(t=0,i=0,s=0,l=1){Rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],y=m[5],E=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(y+1)/2,F=(S+1)/2,B=(_+g)/4,z=(v+w)/4,T=(E+M)/4;return L>D&&L>F?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=B/s,c=z/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=T/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-E)*(M-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(v-w)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this.w=Ue(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this.w=Ue(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TS extends _o{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Rn(0,0,t,i),this.scissorTest=!1,this.viewport=new Rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new hi(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pa extends TS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class u0 extends hi{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class AS extends hi{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(t,i,s,l,c,f,d,m,p,_,v,g,y,E,w,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,v,g,y,E,w,M)}set(t,i,s,l,c,f,d,m,p,_,v,g,y,E,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=E,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/nl.setFromMatrixColumn(t,0).length(),c=1/nl.setFromMatrixColumn(t,1).length(),f=1/nl.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,y=f*v,E=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,y=m*v,E=p*_,w=p*v;i[0]=g+w*d,i[4]=E*d-y,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=y*d-E,i[6]=w+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,y=m*v,E=p*_,w=p*v;i[0]=g-w*d,i[4]=-f*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*_,i[9]=w-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,y=f*v,E=d*_,w=d*v;i[0]=m*_,i[4]=E*p-y,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=w-g*v,i[8]=E*v+y,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*v+E,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,y=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eE,t,nE)}lookAt(t,i,s){const l=this.elements;return Qi.subVectors(t,i),Qi.lengthSq()===0&&(Qi.z=1),Qi.normalize(),pr.crossVectors(s,Qi),pr.lengthSq()===0&&(Math.abs(s.z)===1?Qi.x+=1e-4:Qi.z+=1e-4,Qi.normalize(),pr.crossVectors(s,Qi)),pr.normalize(),of.crossVectors(Qi,pr),l[0]=pr.x,l[4]=of.x,l[8]=Qi.x,l[1]=pr.y,l[5]=of.y,l[9]=Qi.y,l[2]=pr.z,l[6]=of.z,l[10]=Qi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],y=s[13],E=s[2],w=s[6],M=s[10],S=s[14],C=s[3],L=s[7],D=s[11],F=s[15],B=l[0],z=l[4],T=l[8],N=l[12],ft=l[1],G=l[5],K=l[9],it=l[13],J=l[2],j=l[6],O=l[10],P=l[14],rt=l[3],ht=l[7],Mt=l[11],I=l[15];return c[0]=f*B+d*ft+m*J+p*rt,c[4]=f*z+d*G+m*j+p*ht,c[8]=f*T+d*K+m*O+p*Mt,c[12]=f*N+d*it+m*P+p*I,c[1]=_*B+v*ft+g*J+y*rt,c[5]=_*z+v*G+g*j+y*ht,c[9]=_*T+v*K+g*O+y*Mt,c[13]=_*N+v*it+g*P+y*I,c[2]=E*B+w*ft+M*J+S*rt,c[6]=E*z+w*G+M*j+S*ht,c[10]=E*T+w*K+M*O+S*Mt,c[14]=E*N+w*it+M*P+S*I,c[3]=C*B+L*ft+D*J+F*rt,c[7]=C*z+L*G+D*j+F*ht,c[11]=C*T+L*K+D*O+F*Mt,c[15]=C*N+L*it+D*P+F*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],y=t[14],E=t[3],w=t[7],M=t[11],S=t[15],C=m*y-p*g,L=d*y-p*v,D=d*g-m*v,F=f*y-p*_,B=f*g-m*_,z=f*v-d*_;return i*(w*C-M*L+S*D)-s*(E*C-M*F+S*B)+l*(E*L-w*F+S*z)-c*(E*D-w*B+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],y=t[11],E=t[12],w=t[13],M=t[14],S=t[15],C=i*d-s*f,L=i*m-l*f,D=i*p-c*f,F=s*m-l*d,B=s*p-c*d,z=l*p-c*m,T=_*w-v*E,N=_*M-g*E,ft=_*S-y*E,G=v*M-g*w,K=v*S-y*w,it=g*S-y*M,J=C*it-L*K+D*G+F*ft-B*N+z*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/J;return t[0]=(d*it-m*K+p*G)*j,t[1]=(l*K-s*it-c*G)*j,t[2]=(w*z-M*B+S*F)*j,t[3]=(g*B-v*z-y*F)*j,t[4]=(m*ft-f*it-p*N)*j,t[5]=(i*it-l*ft+c*N)*j,t[6]=(M*D-E*z-S*L)*j,t[7]=(_*z-g*D+y*L)*j,t[8]=(f*K-d*ft+p*T)*j,t[9]=(s*ft-i*K-c*T)*j,t[10]=(E*B-w*D+S*C)*j,t[11]=(v*D-_*B-y*C)*j,t[12]=(d*N-f*G-m*T)*j,t[13]=(i*G-s*N+l*T)*j,t[14]=(w*L-E*F-M*C)*j,t[15]=(_*F-v*L+g*C)*j,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,v=d+d,g=c*p,y=c*_,E=c*v,w=f*_,M=f*v,S=d*v,C=m*p,L=m*_,D=m*v,F=s.x,B=s.y,z=s.z;return l[0]=(1-(w+S))*F,l[1]=(y+D)*F,l[2]=(E-L)*F,l[3]=0,l[4]=(y-D)*B,l[5]=(1-(g+S))*B,l[6]=(M+C)*B,l[7]=0,l[8]=(E+L)*z,l[9]=(M-C)*z,l[10]=(1-(g+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=nl.set(l[0],l[1],l[2]).length();const d=nl.set(l[4],l[5],l[6]).length(),m=nl.set(l[8],l[9],l[10]).length();c<0&&(f=-f),wa.copy(this);const p=1/f,_=1/d,v=1/m;return wa.elements[0]*=p,wa.elements[1]*=p,wa.elements[2]*=p,wa.elements[4]*=_,wa.elements[5]*=_,wa.elements[6]*=_,wa.elements[8]*=v,wa.elements[9]*=v,wa.elements[10]*=v,i.setFromRotationMatrix(wa),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=Oa,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(d===Oa)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===Tl)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Oa,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(d===Oa)E=-2/(f-c),w=-(f+c)/(f-c);else if(d===Tl)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const nl=new Z,wa=new fn,eE=new Z(0,0,0),nE=new Z(1,1,1),pr=new Z,of=new Z,Qi=new Z,qv=new fn,jv=new Ps;class $i{constructor(t=0,i=0,s=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ue(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ue(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return qv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return jv.setFromEuler(this),this.setFromQuaternion(jv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iE=0;const Zv=new Z,il=new Ps,As=new fn,lf=new Z,Mc=new Z,aE=new Z,sE=new Ps,Kv=new Z(1,0,0),Qv=new Z(0,1,0),Jv=new Z(0,0,1),$v={type:"added"},rE={type:"removed"},al={type:"childadded",child:null},tm={type:"childremoved",child:null};class dn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new Z,i=new $i,s=new Ps,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new De}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return il.setFromAxisAngle(t,i),this.quaternion.multiply(il),this}rotateOnWorldAxis(t,i){return il.setFromAxisAngle(t,i),this.quaternion.premultiply(il),this}rotateX(t){return this.rotateOnAxis(Kv,t)}rotateY(t){return this.rotateOnAxis(Qv,t)}rotateZ(t){return this.rotateOnAxis(Jv,t)}translateOnAxis(t,i){return Zv.copy(t).applyQuaternion(this.quaternion),this.position.add(Zv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Kv,t)}translateY(t){return this.translateOnAxis(Qv,t)}translateZ(t){return this.translateOnAxis(Jv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?lf.copy(t):lf.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Mc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(Mc,lf,this.up):As.lookAt(lf,Mc,this.up),this.quaternion.setFromRotationMatrix(As),l&&(As.extractRotation(l.matrixWorld),il.setFromRotationMatrix(As),this.quaternion.premultiply(il.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($v),al.child=t,this.dispatchEvent(al),al.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(rE),tm.child=t,this.dispatchEvent(tm),tm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),As.multiply(t.parent.matrixWorld)),t.applyMatrix4(As),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($v),al.child=t,this.dispatchEvent(al),al.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mc,t,aE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mc,sE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}dn.DEFAULT_UP=new Z(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xl extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oE={type:"move"};class zf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(oE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new xl;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const RS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},cf={h:0,s:0,l:0};function em(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=We.workingColorSpace){return this.r=t,this.g=i,this.b=s,We.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=We.workingColorSpace){if(t=c0(t,1),i=Ue(i,0,1),s=Ue(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=em(f,c,t+1/3),this.g=em(f,c,t),this.b=em(f,c,t-1/3)}return We.colorSpaceToWorking(this,l),this}setStyle(t,i=Yn){function s(c){c!==void 0&&parseFloat(c)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Me("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yn){const s=RS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}copyLinearToSRGB(t){return this.r=yl(t.r),this.g=yl(t.g),this.b=yl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return We.workingToColorSpace(_i.copy(this),t),Math.round(Ue(_i.r*255,0,255))*65536+Math.round(Ue(_i.g*255,0,255))*256+Math.round(Ue(_i.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=We.workingColorSpace){We.workingToColorSpace(_i.copy(this),i);const s=_i.r,l=_i.g,c=_i.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=We.workingColorSpace){return We.workingToColorSpace(_i.copy(this),i),t.r=_i.r,t.g=_i.g,t.b=_i.b,t}getStyle(t=Yn){We.workingToColorSpace(_i.copy(this),t);const i=_i.r,s=_i.g,l=_i.b;return t!==Yn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(mr),this.setHSL(mr.h+t,mr.s+i,mr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(mr),t.getHSL(cf);const s=Hc(mr.h,cf.h,i),l=Hc(mr.s,cf.s,i),c=Hc(mr.l,cf.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _i=new ge;ge.NAMES=RS;class Xc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ge(t),this.near=i,this.far=s}clone(){return new Xc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class f0 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Da=new Z,Rs=new Z,nm=new Z,Cs=new Z,sl=new Z,rl=new Z,tx=new Z,im=new Z,am=new Z,sm=new Z,rm=new Rn,om=new Rn,lm=new Rn;class _a{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Da.subVectors(t,i),l.cross(Da);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Da.subVectors(l,i),Rs.subVectors(s,i),nm.subVectors(t,i);const f=Da.dot(Da),d=Da.dot(Rs),m=Da.dot(nm),p=Rs.dot(Rs),_=Rs.dot(nm),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(p*m-d*_)*g,E=(f*_-d*m)*g;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Cs)===null?!1:Cs.x>=0&&Cs.y>=0&&Cs.x+Cs.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,Cs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Cs.x),m.addScaledVector(f,Cs.y),m.addScaledVector(d,Cs.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return rm.setScalar(0),om.setScalar(0),lm.setScalar(0),rm.fromBufferAttribute(t,i),om.fromBufferAttribute(t,s),lm.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(rm,c.x),f.addScaledVector(om,c.y),f.addScaledVector(lm,c.z),f}static isFrontFacing(t,i,s,l){return Da.subVectors(s,i),Rs.subVectors(t,i),Da.cross(Rs).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Da.subVectors(this.c,this.b),Rs.subVectors(this.a,this.b),Da.cross(Rs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _a.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _a.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return _a.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return _a.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _a.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;sl.subVectors(l,s),rl.subVectors(c,s),im.subVectors(t,s);const m=sl.dot(im),p=rl.dot(im);if(m<=0&&p<=0)return i.copy(s);am.subVectors(t,l);const _=sl.dot(am),v=rl.dot(am);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(sl,f);sm.subVectors(t,c);const y=sl.dot(sm),E=rl.dot(sm);if(E>=0&&y<=E)return i.copy(c);const w=y*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(rl,d);const M=_*E-y*v;if(M<=0&&v-_>=0&&y-E>=0)return tx.subVectors(c,l),d=(v-_)/(v-_+(y-E)),i.copy(l).addScaledVector(tx,d);const S=1/(M+w+g);return f=w*S,d=g*S,i.copy(s).addScaledVector(sl,f).addScaledVector(rl,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Tr{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Na.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Na.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Na.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Na):Na.fromBufferAttribute(c,f),Na.applyMatrix4(t.matrixWorld),this.expandByPoint(Na);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uf.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),uf.copy(s.boundingBox)),uf.applyMatrix4(t.matrixWorld),this.union(uf)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Na),Na.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ec),ff.subVectors(this.max,Ec),ol.subVectors(t.a,Ec),ll.subVectors(t.b,Ec),cl.subVectors(t.c,Ec),gr.subVectors(ll,ol),_r.subVectors(cl,ll),to.subVectors(ol,cl);let i=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-to.z,to.y,gr.z,0,-gr.x,_r.z,0,-_r.x,to.z,0,-to.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-to.y,to.x,0];return!cm(i,ol,ll,cl,ff)||(i=[1,0,0,0,1,0,0,0,1],!cm(i,ol,ll,cl,ff))?!1:(hf.crossVectors(gr,_r),i=[hf.x,hf.y,hf.z],cm(i,ol,ll,cl,ff))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Na).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Na).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ws=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Na=new Z,uf=new Tr,ol=new Z,ll=new Z,cl=new Z,gr=new Z,_r=new Z,to=new Z,Ec=new Z,ff=new Z,hf=new Z,eo=new Z;function cm(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){eo.fromArray(r,c);const d=l.x*Math.abs(eo.x)+l.y*Math.abs(eo.y)+l.z*Math.abs(eo.z),m=t.dot(eo),p=i.dot(eo),_=s.dot(eo);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const kn=new Z,df=new Oe;let lE=0;class Sa{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=zm,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)df.fromBufferAttribute(this,i),df.applyMatrix3(t),this.setXY(i,df.x,df.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.applyMatrix3(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.applyMatrix4(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.applyNormalMatrix(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.transformDirection(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=_l(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=wi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=_l(i,this.array)),i}setX(t,i){return this.normalized&&(i=wi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=_l(i,this.array)),i}setY(t,i){return this.normalized&&(i=wi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=_l(i,this.array)),i}setZ(t,i){return this.normalized&&(i=wi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=_l(i,this.array)),i}setW(t,i){return this.normalized&&(i=wi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=wi(i,this.array),s=wi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=wi(i,this.array),s=wi(s,this.array),l=wi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=wi(i,this.array),s=wi(s,this.array),l=wi(l,this.array),c=wi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zm&&(t.usage=this.usage),t}}class h0 extends Sa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class d0 extends Sa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class si extends Sa{constructor(t,i,s){super(new Float32Array(t),i,s)}}const cE=new Tr,bc=new Z,um=new Z;class Dl{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):cE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bc.subVectors(t,this.center);const i=bc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(bc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(um.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bc.copy(t.center).add(um)),this.expandByPoint(bc.copy(t.center).sub(um))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let uE=0;const ma=new fn,fm=new dn,ul=new Z,Ji=new Tr,Tc=new Tr,ni=new Z;class ta extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=wl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(UM(t)?d0:h0)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new De().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ma.makeRotationFromQuaternion(t),this.applyMatrix4(ma),this}rotateX(t){return ma.makeRotationX(t),this.applyMatrix4(ma),this}rotateY(t){return ma.makeRotationY(t),this.applyMatrix4(ma),this}rotateZ(t){return ma.makeRotationZ(t),this.applyMatrix4(ma),this}translate(t,i,s){return ma.makeTranslation(t,i,s),this.applyMatrix4(ma),this}scale(t,i,s){return ma.makeScale(t,i,s),this.applyMatrix4(ma),this}lookAt(t){return fm.lookAt(t),fm.updateMatrix(),this.applyMatrix4(fm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ul).negate(),this.translate(ul.x,ul.y,ul.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new si(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ji.setFromBufferAttribute(c),this.morphTargetsRelative?(ni.addVectors(this.boundingBox.min,Ji.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,Ji.max),this.boundingBox.expandByPoint(ni)):(this.boundingBox.expandByPoint(Ji.min),this.boundingBox.expandByPoint(Ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(Ji.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Tc.setFromBufferAttribute(d),this.morphTargetsRelative?(ni.addVectors(Ji.min,Tc.min),Ji.expandByPoint(ni),ni.addVectors(Ji.max,Tc.max),Ji.expandByPoint(ni)):(Ji.expandByPoint(Tc.min),Ji.expandByPoint(Tc.max))}Ji.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)ni.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(ni));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)ni.fromBufferAttribute(d,p),m&&(ul.fromBufferAttribute(t,p),ni.add(ul)),l=Math.max(l,s.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sa(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new Z,m[T]=new Z;const p=new Z,_=new Z,v=new Z,g=new Oe,y=new Oe,E=new Oe,w=new Z,M=new Z;function S(T,N,ft){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,N),v.fromBufferAttribute(s,ft),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,N),E.fromBufferAttribute(c,ft),_.sub(p),v.sub(p),y.sub(g),E.sub(g);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(G),d[T].add(w),d[N].add(w),d[ft].add(w),m[T].add(M),m[N].add(M),m[ft].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,N=C.length;T<N;++T){const ft=C[T],G=ft.start,K=ft.count;for(let it=G,J=G+K;it<J;it+=3)S(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const L=new Z,D=new Z,F=new Z,B=new Z;function z(T){F.fromBufferAttribute(l,T),B.copy(F);const N=d[T];L.copy(N),L.sub(F.multiplyScalar(F.dot(N))).normalize(),D.crossVectors(B,N);const G=D.dot(m[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,G)}for(let T=0,N=C.length;T<N;++T){const ft=C[T],G=ft.start,K=ft.count;for(let it=G,J=G+K;it<J;it+=3)z(t.getX(it+0)),z(t.getX(it+1)),z(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Sa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new Z,c=new Z,f=new Z,d=new Z,m=new Z,p=new Z,_=new Z,v=new Z;if(t)for(let g=0,y=t.count;g<y;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)ni.fromBufferAttribute(t,i),ni.normalize(),t.setXYZ(i,ni.x,ni.y,ni.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let y=0,E=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*_;for(let S=0;S<_;S++)g[E++]=p[y++]}return new Sa(g,_,v)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ta,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fE=0;class vo extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=wl(),this.name="",this.type="Material",this.blending=fo,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=kf,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(s.blending=this.blending),this.side!==Is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vf&&(s.blendSrc=this.blendSrc),this.blendDst!==kf&&(s.blendDst=this.blendDst),this.blendEquation!==yr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ds=new Z,hm=new Z,pf=new Z,vr=new Z,dm=new Z,mf=new Z,pm=new Z;class p0{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ds)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ds.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ds.copy(this.origin).addScaledVector(this.direction,i),Ds.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){hm.copy(t).add(i).multiplyScalar(.5),pf.copy(i).sub(t).normalize(),vr.copy(this.origin).sub(hm);const c=t.distanceTo(i)*.5,f=-this.direction.dot(pf),d=vr.dot(this.direction),m=-vr.dot(pf),p=vr.lengthSq(),_=Math.abs(1-f*f);let v,g,y,E;if(_>0)if(v=f*m-d,g=f*d-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,y=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(hm).addScaledVector(pf,g),y}intersectSphere(t,i){Ds.subVectors(t.center,this.origin);const s=Ds.dot(this.direction),l=Ds.dot(Ds)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ds)!==null}intersectTriangle(t,i,s,l,c){dm.subVectors(i,t),mf.subVectors(s,t),pm.crossVectors(dm,mf);let f=this.direction.dot(pm),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;vr.subVectors(this.origin,t);const m=d*this.direction.dot(mf.crossVectors(vr,mf));if(m<0)return null;const p=d*this.direction.dot(dm.cross(vr));if(p<0||m+p>f)return null;const _=-d*vr.dot(pm);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wc extends vo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ex=new fn,no=new p0,gf=new Dl,nx=new Z,_f=new Z,vf=new Z,xf=new Z,mm=new Z,Sf=new Z,ix=new Z,yf=new Z;class ke extends dn{constructor(t=new ta,i=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Sf.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(mm.fromBufferAttribute(v,t),f?Sf.addScaledVector(mm,_):Sf.addScaledVector(mm.sub(i),_))}i.add(Sf)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gf.copy(s.boundingSphere),gf.applyMatrix4(c),no.copy(t.ray).recast(t.near),!(gf.containsPoint(no.origin)===!1&&(no.intersectSphere(gf,nx)===null||no.origin.distanceToSquared(nx)>(t.far-t.near)**2))&&(ex.copy(c).invert(),no.copy(t.ray).applyMatrix4(ex),!(s.boundingBox!==null&&no.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,no)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=f[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,F=L;D<F;D+=3){const B=d.getX(D),z=d.getX(D+1),T=d.getX(D+2);l=Mf(this,S,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const C=d.getX(M),L=d.getX(M+1),D=d.getX(M+2);l=Mf(this,f,t,s,p,_,v,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=f[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,F=L;D<F;D+=3){const B=D,z=D+1,T=D+2;l=Mf(this,S,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const C=M,L=M+1,D=M+2;l=Mf(this,f,t,s,p,_,v,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function hE(r,t,i,s,l,c,f,d){let m;if(t.side===vi?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===Is,d),m===null)return null;yf.copy(d),yf.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(yf);return p<i.near||p>i.far?null:{distance:p,point:yf.clone(),object:r}}function Mf(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,_f),r.getVertexPosition(m,vf),r.getVertexPosition(p,xf);const _=hE(r,t,i,s,_f,vf,xf,ix);if(_){const v=new Z;_a.getBarycoord(ix,_f,vf,xf,v),l&&(_.uv=_a.getInterpolatedAttribute(l,d,m,p,v,new Oe)),c&&(_.uv1=_a.getInterpolatedAttribute(c,d,m,p,v,new Oe)),f&&(_.normal=_a.getInterpolatedAttribute(f,d,m,p,v,new Z),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new Z,materialIndex:0};_a.getNormal(_f,vf,xf,g.normal),_.face=g,_.barycoord=v}return _}class m0 extends hi{constructor(t=null,i=1,s=1,l,c,f,d,m,p=ii,_=ii,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vm extends Sa{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fl=new fn,ax=new fn,Ef=[],sx=new Tr,dE=new fn,Ac=new ke,Rc=new Dl;class CS extends ke{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Vm(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,dE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Tr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,fl),sx.copy(t.boundingBox).applyMatrix4(fl),this.boundingBox.union(sx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,fl),Rc.copy(t.boundingSphere).applyMatrix4(fl),this.boundingSphere.union(Rc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Ac.geometry=this.geometry,Ac.material=this.material,Ac.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rc.copy(this.boundingSphere),Rc.applyMatrix4(s),t.ray.intersectsSphere(Rc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,fl),ax.multiplyMatrices(s,fl),Ac.matrixWorld=ax,Ac.raycast(t,Ef);for(let f=0,d=Ef.length;f<d;f++){const m=Ef[f];m.instanceId=c,m.object=this,i.push(m)}Ef.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Vm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new m0(new Float32Array(l*this.count),l,this.count,Bh,va));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gm=new Z,pE=new Z,mE=new De;class Sr{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=gm.subVectors(s,i).cross(pE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(gm),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||mE.getNormalMatrix(t),l=this.coplanarPoint(gm).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new Dl,gE=new Oe(.5,.5),bf=new Z;class qh{constructor(t=new Sr,i=new Sr,s=new Sr,l=new Sr,c=new Sr,f=new Sr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oa,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],y=c[7],E=c[8],w=c[9],M=c[10],S=c[11],C=c[12],L=c[13],D=c[14],F=c[15];if(l[0].setComponents(p-f,y-_,S-E,F-C).normalize(),l[1].setComponents(p+f,y+_,S+E,F+C).normalize(),l[2].setComponents(p+d,y+v,S+w,F+L).normalize(),l[3].setComponents(p-d,y-v,S-w,F-L).normalize(),s)l[4].setComponents(m,g,M,D).normalize(),l[5].setComponents(p-m,y-g,S-M,F-D).normalize();else if(l[4].setComponents(p-m,y-g,S-M,F-D).normalize(),i===Oa)l[5].setComponents(p+m,y+g,S+M,F+D).normalize();else if(i===Tl)l[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),io.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(io)}intersectsSprite(t){io.center.set(0,0,0);const i=gE.distanceTo(t.center);return io.radius=.7071067811865476+i,io.applyMatrix4(t.matrixWorld),this.intersectsSphere(io)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(bf.x=l.normal.x>0?t.max.x:t.min.x,bf.y=l.normal.y>0?t.max.y:t.min.y,bf.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class g0 extends hi{constructor(t=[],i=br,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sl extends hi{constructor(t,i,s,l,c,f,d,m,p){super(t,i,s,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rl extends hi{constructor(t,i,s=Fa,l,c,f,d=ii,m=ii,p,_=es,v=1){if(_!==es&&_!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wS extends Rl{constructor(t,i=Fa,s=br,l,c,f=ii,d=ii,m,p=es){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class _0 extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ar extends ta{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new si(p,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(v,2));function E(w,M,S,C,L,D,F,B,z,T,N){const ft=D/z,G=F/T,K=D/2,it=F/2,J=B/2,j=z+1,O=T+1;let P=0,rt=0;const ht=new Z;for(let Mt=0;Mt<O;Mt++){const I=Mt*G-it;for(let q=0;q<j;q++){const pt=q*ft-K;ht[w]=pt*C,ht[M]=I*L,ht[S]=J,p.push(ht.x,ht.y,ht.z),ht[w]=0,ht[M]=0,ht[S]=B>0?1:-1,_.push(ht.x,ht.y,ht.z),v.push(q/z),v.push(1-Mt/T),P+=1}}for(let Mt=0;Mt<T;Mt++)for(let I=0;I<z;I++){const q=g+I+j*Mt,pt=g+I+j*(Mt+1),Ct=g+(I+1)+j*(Mt+1),Xt=g+(I+1)+j*Mt;m.push(q,pt,Xt),m.push(pt,Ct,Xt),rt+=6}d.addGroup(y,rt,N),y+=rt,g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class DS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(f-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new Oe:new Z);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Z,l=[],c=[],f=[],d=new Z,m=new fn;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new Z)}c[0]=new Z,f[0]=new Z;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ue(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,E))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Ue(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function v0(){let r=0,t=0,i=0,s=0;function l(c,f,d,m){r=c,t=d,i=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,_,v){let g=(f-c)/p-(d-c)/(p+_)+(d-f)/_,y=(d-f)/_-(m-f)/(_+v)+(m-d)/v;g*=_,y*=_,l(f,d,g,y)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const Tf=new Z,_m=new v0,vm=new v0,xm=new v0;class NS extends DS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new Z){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(Tf.subVectors(l[0],l[1]).add(l[0]),p=Tf);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(Tf.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Tf),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),y),w=Math.pow(v.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),_m.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,w,M),vm.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,w,M),xm.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,w,M)}else this.curveType==="catmullrom"&&(_m.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),vm.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),xm.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(_m.calc(m),vm.calc(m),xm.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Z().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Qa extends ta{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=i/m,y=[],E=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-f;for(let L=0;L<p;L++){const D=L*v-c;E.push(D,-C,0),w.push(0,0,1),M.push(L/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<d;C++){const L=C+p*S,D=C+p*(S+1),F=C+1+p*(S+1),B=C+1+p*S;y.push(L,D,B),y.push(D,F,B)}this.setIndex(y),this.setAttribute("position",new si(E,3)),this.setAttribute("normal",new si(w,3)),this.setAttribute("uv",new si(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.width,t.height,t.widthSegments,t.heightSegments)}}class jh extends ta{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,y=new Z,E=new Oe;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const S=c+M/s*f;y.x=v*Math.cos(S),y.y=v*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,_.push(E.x,E.y)}v+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let S=0;S<s;S++){const C=S+M,L=C,D=C+s+1,F=C+s+2,B=C+1;d.push(L,D,B),d.push(D,F,B)}}this.setIndex(d),this.setAttribute("position",new si(m,3)),this.setAttribute("normal",new si(p,3)),this.setAttribute("uv",new si(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Zh extends ta{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const _=[],v=new Z,g=new Z,y=[],E=[],w=[],M=[];for(let S=0;S<=s;S++){const C=[],L=S/s;let D=0;S===0&&f===0?D=.5/i:S===s&&m===Math.PI&&(D=-.5/i);for(let F=0;F<=i;F++){const B=F/i;v.x=-t*Math.cos(l+B*c)*Math.sin(f+L*d),v.y=t*Math.cos(f+L*d),v.z=t*Math.sin(l+B*c)*Math.sin(f+L*d),E.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(B+D,1-L),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const L=_[S][C+1],D=_[S][C],F=_[S+1][C],B=_[S+1][C+1];(S!==0||f>0)&&y.push(L,D,B),(S!==s-1||m<Math.PI)&&y.push(D,F,B)}this.setIndex(y),this.setAttribute("position",new si(E,3)),this.setAttribute("normal",new si(w,3)),this.setAttribute("uv",new si(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Cl(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Di(r){const t={};for(let i=0;i<r.length;i++){const s=Cl(r[i]);for(const l in s)t[l]=s[l]}return t}function _E(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function LS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}const US={clone:Cl,merge:Di};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ba extends vo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cl(t.uniforms),this.uniformsGroups=_E(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class OS extends Ba{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ls extends vo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lo extends Ls{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class IS extends vo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Uh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class PS extends vo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class FS extends vo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nl extends dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class BS extends Nl{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Sm=new fn,rx=new Z,ox=new Z;class x0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;rx.setFromMatrixPosition(t.matrixWorld),i.position.copy(rx),ox.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ox),i.updateMatrixWorld(),Sm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sm,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Tl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Sm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Af=new Z,Rf=new Ps,Za=new Z;class S0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Af,Rf,Za),Za.x===1&&Za.y===1&&Za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Af,Rf,Za.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Af,Rf,Za),Za.x===1&&Za.y===1&&Za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Af,Rf,Za.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new Z,lx=new Oe,cx=new Oe;class Ni extends S0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Al*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-t/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(xr.x,xr.y).multiplyScalar(-t/xr.z)}getViewSize(t,i){return this.getViewBounds(t,lx,cx),i.subVectors(cx,lx)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(zc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class SE extends x0{constructor(){super(new Ni(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Al*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Hf extends Nl{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new SE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class yE extends x0{constructor(){super(new Ni(90,1,.5,500)),this.isPointLightShadow=!0}}class Gc extends Nl{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new yE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Kh extends S0{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ME extends x0{constructor(){super(new Kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends Nl{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new ME}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class zS extends Nl{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const hl=-90,dl=1;class HS extends dn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ni(hl,dl,t,i);l.layers=this.layers,this.add(l);const c=new Ni(hl,dl,t,i);c.layers=this.layers,this.add(c);const f=new Ni(hl,dl,t,i);f.layers=this.layers,this.add(f);const d=new Ni(hl,dl,t,i);d.layers=this.layers,this.add(d);const m=new Ni(hl,dl,t,i);m.layers=this.layers,this.add(m);const p=new Ni(hl,dl,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Tl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class GS extends Ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ux=new fn;class VS{constructor(t,i,s=0,l=1/0){this.ray=new p0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Xe("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return ux.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ux),this}intersectObject(t,i=!0,s=[]){return Xm(t,this,s,i),s.sort(fx),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Xm(t[l],this,s,i);return s.sort(fx),s}}function fx(r,t){return r.distance-t.distance}function Xm(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Xm(c[f],t,i,!0)}}class kS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Me("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function hx(r,t,i,s){const l=EE(s);switch(i){case o0:return r*t;case Bh:return r*t/l.components*l.byteLength;case zh:return r*t/l.components*l.byteLength;case mo:return r*t*2/l.components*l.byteLength;case Hh:return r*t*2/l.components*l.byteLength;case l0:return r*t*3/l.components*l.byteLength;case xa:return r*t*4/l.components*l.byteLength;case Gh:return r*t*4/l.components*l.byteLength;case Ic:case Pc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $f:case eh:return Math.max(r,16)*Math.max(t,8)/4;case Jf:case th:return Math.max(r,8)*Math.max(t,8)/2;case nh:case ih:case sh:case rh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ah:case oh:case lh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case fh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case dh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ph:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case gh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case _h:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case xh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case yh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Eh:case bh:case Th:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ah:case Rh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ch:case wh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function EE(r){switch(r){case Gi:case i0:return{byteLength:1,components:1};case El:case a0:case ts:return{byteLength:2,components:1};case Ph:case Fh:return{byteLength:2,components:4};case Fa:case Ih:case va:return{byteLength:4,components:1};case s0:case r0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);function XS(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function bE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<v.length;y++){const E=v[g],w=v[y];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let y=0,E=v.length;y<E;y++){const w=v[y];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AE=`#ifdef USE_ALPHAHASH
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
#endif`,RE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NE=`#ifdef USE_AOMAP
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
#endif`,LE=`#ifdef USE_AOMAP
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
#endif`,OE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BE=`#ifdef USE_IRIDESCENCE
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
#endif`,zE=`#ifdef USE_BUMPMAP
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jE=`#define PI 3.141592653589793
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
} // validated`,ZE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KE=`vec3 transformedNormal = objectNormal;
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
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hb=`#ifdef USE_GRADIENTMAP
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
}`,db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
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
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
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
#endif`,Eb=`uniform sampler2D dfgLUT;
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
}`,bb=`
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
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
#endif`,Ob=`#if defined( USE_POINTS_UV )
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
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
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
#endif`,Gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qb=`#ifdef USE_NORMALMAP
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
#endif`,jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c1=`float getShadowMask() {
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
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
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
}`,N1=`#if DEPTH_PACKING == 3200
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
}`,L1=`#define DISTANCE
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`uniform float scale;
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
}`,F1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,z1=`uniform vec3 diffuse;
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
}`,H1=`#define LAMBERT
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
}`,G1=`#define LAMBERT
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
}`,V1=`#define MATCAP
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
}`,k1=`#define MATCAP
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
}`,X1=`#define NORMAL
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
}`,W1=`#define NORMAL
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
}`,Y1=`#define PHONG
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
}`,q1=`#define PHONG
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
}`,j1=`#define STANDARD
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
}`,Z1=`#define STANDARD
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
}`,K1=`#define TOON
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
}`,Q1=`#define TOON
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
}`,J1=`uniform float size;
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
}`,$1=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,eT=`uniform vec3 color;
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
}`,nT=`uniform float rotation;
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
}`,iT=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:TE,alphahash_pars_fragment:AE,alphamap_fragment:RE,alphamap_pars_fragment:CE,alphatest_fragment:wE,alphatest_pars_fragment:DE,aomap_fragment:NE,aomap_pars_fragment:LE,batching_pars_vertex:UE,batching_vertex:OE,begin_vertex:IE,beginnormal_vertex:PE,bsdfs:FE,iridescence_fragment:BE,bumpmap_pars_fragment:zE,clipping_planes_fragment:HE,clipping_planes_pars_fragment:GE,clipping_planes_pars_vertex:VE,clipping_planes_vertex:kE,color_fragment:XE,color_pars_fragment:WE,color_pars_vertex:YE,color_vertex:qE,common:jE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:KE,displacementmap_pars_vertex:QE,displacementmap_vertex:JE,emissivemap_fragment:$E,emissivemap_pars_fragment:tb,colorspace_fragment:eb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:ab,envmap_pars_fragment:sb,envmap_pars_vertex:rb,envmap_physical_pars_fragment:_b,envmap_vertex:ob,fog_vertex:lb,fog_pars_vertex:cb,fog_fragment:ub,fog_pars_fragment:fb,gradientmap_pars_fragment:hb,lightmap_pars_fragment:db,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:vb,lights_toon_pars_fragment:xb,lights_phong_fragment:Sb,lights_phong_pars_fragment:yb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Eb,lights_fragment_begin:bb,lights_fragment_maps:Tb,lights_fragment_end:Ab,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Db,map_fragment:Nb,map_pars_fragment:Lb,map_particle_fragment:Ub,map_particle_pars_fragment:Ob,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Pb,morphinstance_vertex:Fb,morphcolor_vertex:Bb,morphnormal_vertex:zb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Gb,normal_fragment_begin:Vb,normal_fragment_maps:kb,normal_pars_fragment:Xb,normal_pars_vertex:Wb,normal_vertex:Yb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:jb,clearcoat_normal_fragment_maps:Zb,clearcoat_pars_fragment:Kb,iridescence_pars_fragment:Qb,opaque_fragment:Jb,packing:$b,premultiplied_alpha_fragment:t1,project_vertex:e1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:o1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:f1,skinning_vertex:h1,skinnormal_vertex:d1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:_1,transmission_fragment:v1,transmission_pars_fragment:x1,uv_pars_fragment:S1,uv_pars_vertex:y1,uv_vertex:M1,worldpos_vertex:E1,background_vert:b1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:w1,depth_vert:D1,depth_frag:N1,distance_vert:L1,distance_frag:U1,equirect_vert:O1,equirect_frag:I1,linedashed_vert:P1,linedashed_frag:F1,meshbasic_vert:B1,meshbasic_frag:z1,meshlambert_vert:H1,meshlambert_frag:G1,meshmatcap_vert:V1,meshmatcap_frag:k1,meshnormal_vert:X1,meshnormal_frag:W1,meshphong_vert:Y1,meshphong_frag:q1,meshphysical_vert:j1,meshphysical_frag:Z1,meshtoon_vert:K1,meshtoon_frag:Q1,points_vert:J1,points_frag:$1,shadow_vert:tT,shadow_frag:eT,sprite_vert:nT,sprite_frag:iT},Wt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Ua={basic:{uniforms:Di([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Di([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Di([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Di([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Di([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ge(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Di([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Di([Wt.points,Wt.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Di([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Di([Wt.common,Wt.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Di([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Di([Wt.sprite,Wt.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:Di([Wt.common,Wt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:Di([Wt.lights,Wt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Ua.physical={uniforms:Di([Ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Cf={r:0,b:0,g:0},ao=new $i,aT=new fn;function sT(r,t,i,s,l,c){const f=new ge(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function y(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const D=C.backgroundBlurriness>0;L=t.get(L,D)}return L}function E(C){let L=!1;const D=y(C);D===null?M(f,d):D&&D.isColor&&(M(D,1),L=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,L){const D=y(L);D&&(D.isCubeTexture||D.mapping===Yc)?(p===void 0&&(p=new ke(new Ar(1,1,1),new Ba({name:"BackgroundCubeMaterial",uniforms:Cl(Ua.backgroundCube.uniforms),vertexShader:Ua.backgroundCube.vertexShader,fragmentShader:Ua.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),ao.copy(L.backgroundRotation),ao.x*=-1,ao.y*=-1,ao.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(ao)),p.material.toneMapped=We.getTransfer(D.colorSpace)!==tn,(_!==D||v!==D.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=D,v=D.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new ke(new Qa(2,2),new Ba({name:"BackgroundMaterial",uniforms:Cl(Ua.background.uniforms),vertexShader:Ua.background.vertexShader,fragmentShader:Ua.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=We.getTransfer(D.colorSpace)!==tn,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,v=D.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(Cf,LS(r)),i.buffers.color.setClear(Cf.r,Cf.g,Cf.b,L,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,L=1){f.set(C),d=L,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(f,d)},render:E,addToRenderList:w,dispose:S}}function rT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(G,K,it,J,j){let O=!1;const P=v(G,J,it,K);c!==P&&(c=P,p(c.object)),O=y(G,J,it,j),O&&E(G,J,it,j),j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,D(G,K,it,J),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,K,it,J){const j=J.wireframe===!0;let O=s[K.id];O===void 0&&(O={},s[K.id]=O);const P=G.isInstancedMesh===!0?G.id:0;let rt=O[P];rt===void 0&&(rt={},O[P]=rt);let ht=rt[it.id];ht===void 0&&(ht={},rt[it.id]=ht);let Mt=ht[j];return Mt===void 0&&(Mt=g(m()),ht[j]=Mt),Mt}function g(G){const K=[],it=[],J=[];for(let j=0;j<i;j++)K[j]=0,it[j]=0,J[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:it,attributeDivisors:J,object:G,attributes:{},index:null}}function y(G,K,it,J){const j=c.attributes,O=K.attributes;let P=0;const rt=it.getAttributes();for(const ht in rt)if(rt[ht].location>=0){const I=j[ht];let q=O[ht];if(q===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),I===void 0||I.attribute!==q||q&&I.data!==q.data)return!0;P++}return c.attributesNum!==P||c.index!==J}function E(G,K,it,J){const j={},O=K.attributes;let P=0;const rt=it.getAttributes();for(const ht in rt)if(rt[ht].location>=0){let I=O[ht];I===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const q={};q.attribute=I,I&&I.data&&(q.data=I.data),j[ht]=q,P++}c.attributes=j,c.attributesNum=P,c.index=J}function w(){const G=c.newAttributes;for(let K=0,it=G.length;K<it;K++)G[K]=0}function M(G){S(G,0)}function S(G,K){const it=c.newAttributes,J=c.enabledAttributes,j=c.attributeDivisors;it[G]=1,J[G]===0&&(r.enableVertexAttribArray(G),J[G]=1),j[G]!==K&&(r.vertexAttribDivisor(G,K),j[G]=K)}function C(){const G=c.newAttributes,K=c.enabledAttributes;for(let it=0,J=K.length;it<J;it++)K[it]!==G[it]&&(r.disableVertexAttribArray(it),K[it]=0)}function L(G,K,it,J,j,O,P){P===!0?r.vertexAttribIPointer(G,K,it,j,O):r.vertexAttribPointer(G,K,it,J,j,O)}function D(G,K,it,J){w();const j=J.attributes,O=it.getAttributes(),P=K.defaultAttributeValues;for(const rt in O){const ht=O[rt];if(ht.location>=0){let Mt=j[rt];if(Mt===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(Mt=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(Mt=G.instanceColor)),Mt!==void 0){const I=Mt.normalized,q=Mt.itemSize,pt=t.get(Mt);if(pt===void 0)continue;const Ct=pt.buffer,Xt=pt.type,tt=pt.bytesPerElement,gt=Xt===r.INT||Xt===r.UNSIGNED_INT||Mt.gpuType===Ih;if(Mt.isInterleavedBufferAttribute){const Rt=Mt.data,Kt=Rt.stride,le=Mt.offset;if(Rt.isInstancedInterleavedBuffer){for(let de=0;de<ht.locationSize;de++)S(ht.location+de,Rt.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let de=0;de<ht.locationSize;de++)M(ht.location+de);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let de=0;de<ht.locationSize;de++)L(ht.location+de,q/ht.locationSize,Xt,I,Kt*tt,(le+q/ht.locationSize*de)*tt,gt)}else{if(Mt.isInstancedBufferAttribute){for(let Rt=0;Rt<ht.locationSize;Rt++)S(ht.location+Rt,Mt.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Rt=0;Rt<ht.locationSize;Rt++)M(ht.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let Rt=0;Rt<ht.locationSize;Rt++)L(ht.location+Rt,q/ht.locationSize,Xt,I,q*tt,q/ht.locationSize*Rt*tt,gt)}}else if(P!==void 0){const I=P[rt];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(ht.location,I);break;case 3:r.vertexAttrib3fv(ht.location,I);break;case 4:r.vertexAttrib4fv(ht.location,I);break;default:r.vertexAttrib1fv(ht.location,I)}}}}C()}function F(){N();for(const G in s){const K=s[G];for(const it in K){const J=K[it];for(const j in J){const O=J[j];for(const P in O)_(O[P].object),delete O[P];delete J[j]}}delete s[G]}}function B(G){if(s[G.id]===void 0)return;const K=s[G.id];for(const it in K){const J=K[it];for(const j in J){const O=J[j];for(const P in O)_(O[P].object),delete O[P];delete J[j]}}delete s[G.id]}function z(G){for(const K in s){const it=s[K];for(const J in it){const j=it[J];if(j[G.id]===void 0)continue;const O=j[G.id];for(const P in O)_(O[P].object),delete O[P];delete j[G.id]}}}function T(G){for(const K in s){const it=s[K],J=G.isInstancedMesh===!0?G.id:0,j=it[J];if(j!==void 0){for(const O in j){const P=j[O];for(const rt in P)_(P[rt].object),delete P[rt];delete j[O]}delete it[J],Object.keys(it).length===0&&delete s[K]}}}function N(){ft(),f=!0,c!==l&&(c=l,p(c.object))}function ft(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:ft,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function oT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let y=0;for(let E=0;E<v;E++)y+=_[E];i.update(y,s,1)}function m(p,_,v,g){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],_[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w]*g[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function lT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==xa&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const T=z===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Gi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==va&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(Me("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:D,maxSamples:F,samples:B}}function cT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Sr,d=new De,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,y){const E=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,L=C*4;let D=S.clippingState||null;m.value=D,D=_(E,g,L,y);for(let F=0;F!==L;++F)D[F]=i[F];S.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,E){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const S=y+w*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,D=y;L!==w;++L,D+=4)f.copy(v[L]).applyMatrix4(C,d),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const Er=4,dx=[.125,.215,.35,.446,.526,.582],co=20,uT=256,Cc=new Kh,px=new ge;let ym=null,Mm=0,Em=0,bm=!1;const fT=new Z;class Nh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=fT}=c;ym=this._renderer.getRenderTarget(),Mm=this._renderer.getActiveCubeFace(),Em=this._renderer.getActiveMipmapLevel(),bm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ym,Mm,Em),this._renderer.xr.enabled=bm,t.scissorTest=!1,pl(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===br||t.mapping===po?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ym=this._renderer.getRenderTarget(),Mm=this._renderer.getActiveCubeFace(),Em=this._renderer.getActiveMipmapLevel(),bm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:ts,format:xa,colorSpace:go,depthBuffer:!1},l=mx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hT(c)),this._blurMaterial=pT(c,t,i),this._ggxMaterial=dT(c,t,i)}return l}_compileMaterial(t){const i=new ke(new ta,t);this._renderer.compile(i,Cc)}_sceneToCubeUV(t,i,s,l,c){const m=new Ni(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(px),v.toneMapping=Ia,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new Ar,new Wc({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(px),S=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const F=this._cubeSize;pl(l,D*F,L>2?F:0,F,F),v.setRenderTarget(l),S&&v.render(w,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===br||t.mapping===po;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_x()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;pl(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Cc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,y=v*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-Er?s-E+Er:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,pl(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,Cc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,pl(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,Cc)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*co-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):co;M>co&&Me(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${co}`);const S=[];let C=0;for(let z=0;z<co;++z){const T=z/w,N=Math.exp(-T*T/2);S.push(N),z===0?C+=N:z<M&&(C+=2*N)}for(let z=0;z<S.length;z++)S[z]=S[z]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-s;const D=this._sizeLods[l],F=3*D*(l>L-Er?l-L+Er:0),B=4*(this._cubeSize-D);pl(i,F,B,3*D,2*D),m.setRenderTarget(i),m.render(v,Cc)}}function hT(r){const t=[],i=[],s=[];let l=r;const c=r-Er+1+dx.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-Er?m=dx[f-r+Er-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,E=6,w=3,M=2,S=1,C=new Float32Array(w*E*y),L=new Float32Array(M*E*y),D=new Float32Array(S*E*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,T=B>2?0:-1,N=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(N,w*E*B),L.set(g,M*E*B);const ft=[B,B,B,B,B,B];D.set(ft,S*E*B)}const F=new ta;F.setAttribute("position",new Sa(C,w)),F.setAttribute("uv",new Sa(L,M)),F.setAttribute("faceIndex",new Sa(D,S)),s.push(new ke(F,null)),l>Er&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function mx(r,t,i){const s=new Pa(r,t,i);return s.texture.mapping=Yc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function pl(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function dT(r,t,i){return new Ba({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function pT(r,t,i){const s=new Float32Array(co),l=new Z(0,1,0);return new Ba({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function gx(){return new Ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function _x(){return new Ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}class y0 extends Pa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new g0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ar(5,5,5),c=new Ba({name:"CubemapFromEquirect",uniforms:Cl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:vi,blending:$a});c.uniforms.tEquirect.value=i;const f=new ke(l,c),d=i.minFilter;return i.minFilter===Us&&(i.minFilter=ai),new HS(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function mT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Pf||y===Ff)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new y0(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,E=y===Pf||y===Ff,w=y===br||y===po;if(E||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Nh(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return E&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new Nh(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===Pf?g.mapping=br:y===Ff&&(g.mapping=po),g}function m(g){let y=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function gT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&kc("WebGLRenderer: "+s+" extension not supported."),l}}}function _T(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let L=0,D=C.length;L<D;L+=3){const F=C[L+0],B=C[L+1],z=C[L+2];g.push(F,B,B,z,z,F)}}else{const C=E.array;w=E.version;for(let L=0,D=C.length/3-1;L<D;L+=3){const F=L+0,B=L+1,z=L+2;g.push(F,B,B,z,z,F)}}const M=new(E.count>=65535?d0:h0)(g,1);M.version=w;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function vT(r,t,i){let s;function l(g){s=g}let c,f;function d(g){c=g.type,f=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*f),i.update(y,s,1)}function p(g,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,g*f,E),i.update(y,s,E))}function _(g,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,E);let M=0;for(let S=0;S<E;S++)M+=y[S];i.update(M,s,1)}function v(g,y,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/f,y[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,w,0,E);let S=0;for(let C=0;C<E;C++)S+=y[C]*w[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function xT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Xe("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ST(r,t,i){const s=new WeakMap,l=new Rn;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let ft=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",ft)};var y=ft;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let F=d.attributes.position.count*D,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*v),T=new u0(z,F,B,v);T.type=va,T.needsUpdate=!0;const N=D*4;for(let G=0;G<v;G++){const K=S[G],it=C[G],J=L[G],j=F*B*4*G;for(let O=0;O<K.count;O++){const P=O*N;E===!0&&(l.fromBufferAttribute(K,O),z[j+P+0]=l.x,z[j+P+1]=l.y,z[j+P+2]=l.z,z[j+P+3]=0),w===!0&&(l.fromBufferAttribute(it,O),z[j+P+4]=l.x,z[j+P+5]=l.y,z[j+P+6]=l.z,z[j+P+7]=0),M===!0&&(l.fromBufferAttribute(J,O),z[j+P+8]=l.x,z[j+P+9]=l.y,z[j+P+10]=l.z,z[j+P+11]=J.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Oe(F,B)},s.set(d,g),d.addEventListener("dispose",ft)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function yT(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const MT={[Km]:"LINEAR_TONE_MAPPING",[Qm]:"REINHARD_TONE_MAPPING",[Jm]:"CINEON_TONE_MAPPING",[Oh]:"ACES_FILMIC_TONE_MAPPING",[t0]:"AGX_TONE_MAPPING",[e0]:"NEUTRAL_TONE_MAPPING",[$m]:"CUSTOM_TONE_MAPPING"};function ET(r,t,i,s,l){const c=new Pa(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Pa(t,i,{type:ts,depthBuffer:!1,stencilBuffer:!1}),d=new ta;d.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new si([0,2,0,0,2,0],2));const m=new OS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ke(d,m),_=new Kh(-1,1,1,-1,0,1);let v=null,g=null,y=!1,E,w=null,M=[],S=!1;this.setSize=function(C,L){c.setSize(C,L),f.setSize(C,L);for(let D=0;D<M.length;D++){const F=M[D];F.setSize&&F.setSize(C,L)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const L=c.width,D=c.height;for(let F=0;F<M.length;F++){const B=M[F];B.setSize&&B.setSize(L,D)}},this.begin=function(C,L){if(y||C.toneMapping===Ia&&M.length===0)return!1;if(w=L,L!==null){const D=L.width,F=L.height;(c.width!==D||c.height!==F)&&this.setSize(D,F)}return S===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=Ia,!0},this.hasRenderPass=function(){return S},this.end=function(C,L){C.toneMapping=E,y=!0;let D=c,F=f;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(C,F,D,L),z.needsSwap!==!1)){const T=D;D=F,F=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},We.getTransfer(v)===tn&&(m.defines.SRGB_TRANSFER="");const B=MT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(w),C.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const WS=new hi,Wm=new Rl(1,1),YS=new u0,qS=new AS,jS=new g0,vx=[],xx=[],Sx=new Float32Array(16),yx=new Float32Array(9),Mx=new Float32Array(4);function Ll(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=vx[l];if(c===void 0&&(c=new Float32Array(l),vx[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function qn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function jn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Jh(r,t){let i=xx[t];i===void 0&&(i=new Int32Array(t),xx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function bT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function TT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;r.uniform2fv(this.addr,t),jn(i,t)}}function AT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(qn(i,t))return;r.uniform3fv(this.addr,t),jn(i,t)}}function RT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;r.uniform4fv(this.addr,t),jn(i,t)}}function CT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),jn(i,t)}else{if(qn(i,s))return;Mx.set(s),r.uniformMatrix2fv(this.addr,!1,Mx),jn(i,s)}}function wT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),jn(i,t)}else{if(qn(i,s))return;yx.set(s),r.uniformMatrix3fv(this.addr,!1,yx),jn(i,s)}}function DT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),jn(i,t)}else{if(qn(i,s))return;Sx.set(s),r.uniformMatrix4fv(this.addr,!1,Sx),jn(i,s)}}function NT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;r.uniform2iv(this.addr,t),jn(i,t)}}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(qn(i,t))return;r.uniform3iv(this.addr,t),jn(i,t)}}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;r.uniform4iv(this.addr,t),jn(i,t)}}function IT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function PT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;r.uniform2uiv(this.addr,t),jn(i,t)}}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(qn(i,t))return;r.uniform3uiv(this.addr,t),jn(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;r.uniform4uiv(this.addr,t),jn(i,t)}}function zT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Wm.compareFunction=i.isReversedDepthBuffer()?Xh:kh,c=Wm):c=WS,i.setTexture2D(t||c,l)}function HT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||qS,l)}function GT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||jS,l)}function VT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||YS,l)}function kT(r){switch(r){case 5126:return bT;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return NT;case 35667:case 35671:return LT;case 35668:case 35672:return UT;case 35669:case 35673:return OT;case 5125:return IT;case 36294:return PT;case 36295:return FT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}function XT(r,t){r.uniform1fv(this.addr,t)}function WT(r,t){const i=Ll(t,this.size,2);r.uniform2fv(this.addr,i)}function YT(r,t){const i=Ll(t,this.size,3);r.uniform3fv(this.addr,i)}function qT(r,t){const i=Ll(t,this.size,4);r.uniform4fv(this.addr,i)}function jT(r,t){const i=Ll(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ZT(r,t){const i=Ll(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function KT(r,t){const i=Ll(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function QT(r,t){r.uniform1iv(this.addr,t)}function JT(r,t){r.uniform2iv(this.addr,t)}function $T(r,t){r.uniform3iv(this.addr,t)}function tA(r,t){r.uniform4iv(this.addr,t)}function eA(r,t){r.uniform1uiv(this.addr,t)}function nA(r,t){r.uniform2uiv(this.addr,t)}function iA(r,t){r.uniform3uiv(this.addr,t)}function aA(r,t){r.uniform4uiv(this.addr,t)}function sA(r,t,i){const s=this.cache,l=t.length,c=Jh(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Wm:f=WS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function rA(r,t,i){const s=this.cache,l=t.length,c=Jh(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||qS,c[f])}function oA(r,t,i){const s=this.cache,l=t.length,c=Jh(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||jS,c[f])}function lA(r,t,i){const s=this.cache,l=t.length,c=Jh(i,l);qn(s,c)||(r.uniform1iv(this.addr,c),jn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||YS,c[f])}function cA(r){switch(r){case 5126:return XT;case 35664:return WT;case 35665:return YT;case 35666:return qT;case 35674:return jT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tA;case 5125:return eA;case 36294:return nA;case 36295:return iA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}class uA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=kT(i.type)}}class fA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cA(i.type)}}class hA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Tm=/(\w+)(\])?(\[|\.)?/g;function Ex(r,t){r.seq.push(t),r.map[t.id]=t}function dA(r,t,i){const s=r.name,l=s.length;for(Tm.lastIndex=0;;){const c=Tm.exec(s),f=Tm.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Ex(i,p===void 0?new uA(d,r,t):new fA(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new hA(d),Ex(i,v)),i=v}}}class Gf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);dA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function bx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const pA=37297;let mA=0;function gA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Tx=new De;function _A(r){We._getMatrix(Tx,We.workingColorSpace,r);const t=`mat3( ${Tx.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(r)){case Vc:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ax(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+gA(r.getShaderSource(t),d)}else return c}function vA(r,t){const i=_A(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const xA={[Km]:"Linear",[Qm]:"Reinhard",[Jm]:"Cineon",[Oh]:"ACESFilmic",[t0]:"AgX",[e0]:"Neutral",[$m]:"Custom"};function SA(r,t){const i=xA[t];return i===void 0?(Me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wf=new Z;function yA(){We.getLuminanceCoefficients(wf);const r=wf.x.toFixed(4),t=wf.y.toFixed(4),i=wf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oc).join(`
`)}function EA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function bA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Oc(r){return r!==""}function Rx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const TA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ym(r){return r.replace(TA,RA)}const AA=new Map;function RA(r,t){let i=Le[t];if(i===void 0){const s=AA.get(t);if(s!==void 0)i=Le[s],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ym(i)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wx(r){return r.replace(CA,wA)}function wA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Dx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const DA={[uo]:"SHADOWMAP_TYPE_PCF",[vl]:"SHADOWMAP_TYPE_VSM"};function NA(r){return DA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LA={[br]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function UA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":LA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const OA={[po]:"ENVMAP_MODE_REFRACTION"};function IA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":OA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PA={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[fS]:"ENVMAP_BLENDING_MIX",[hS]:"ENVMAP_BLENDING_ADD"};function FA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":PA[r.combine]||"ENVMAP_BLENDING_NONE"}function BA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function zA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=NA(i),p=UA(i),_=IA(i),v=FA(i),g=BA(i),y=MA(i),E=EA(c),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oc).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oc).join(`
`),S.length>0&&(S+=`
`)):(M=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oc).join(`
`),S=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?Le.tonemapping_pars_fragment:"",i.toneMapping!==Ia?SA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,vA("linearToOutputTexel",i.outputColorSpace),yA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oc).join(`
`)),f=Ym(f),f=Rx(f,i),f=Cx(f,i),d=Ym(d),d=Rx(d,i),d=Cx(d,i),f=wx(f),d=wx(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=C+M+f,D=C+S+d,F=bx(l,l.VERTEX_SHADER,L),B=bx(l,l.FRAGMENT_SHADER,D);l.attachShader(w,F),l.attachShader(w,B),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(G){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",it=l.getShaderInfoLog(F)||"",J=l.getShaderInfoLog(B)||"",j=K.trim(),O=it.trim(),P=J.trim();let rt=!0,ht=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,F,B);else{const Mt=Ax(l,F,"vertex"),I=Ax(l,B,"fragment");Xe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+Mt+`
`+I)}else j!==""?Me("WebGLProgram: Program Info Log:",j):(O===""||P==="")&&(ht=!1);ht&&(G.diagnostics={runnable:rt,programLog:j,vertexShader:{log:O,prefix:M},fragmentShader:{log:P,prefix:S}})}l.deleteShader(F),l.deleteShader(B),T=new Gf(l,w),N=bA(l,w)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let ft=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ft===!1&&(ft=l.getProgramParameter(w,pA)),ft},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=B,this}let HA=0;class GA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new VA(t),i.set(t,s)),s}}class VA{constructor(t){this.id=HA++,this.code=t,this.usedTimes=0}}function kA(r,t,i,s,l,c){const f=new Yh,d=new GA,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,ft,G,K){const it=G.fog,J=K.geometry,j=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,P=t.get(T.envMap||j,O),rt=P&&P.mapping===Yc?P.image.height:null,ht=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&Me("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,I=Mt!==void 0?Mt.length:0;let q=0;J.morphAttributes.position!==void 0&&(q=1),J.morphAttributes.normal!==void 0&&(q=2),J.morphAttributes.color!==void 0&&(q=3);let pt,Ct,Xt,tt;if(ht){const Fe=Ua[ht];pt=Fe.vertexShader,Ct=Fe.fragmentShader}else pt=T.vertexShader,Ct=T.fragmentShader,d.update(T),Xt=d.getVertexShaderID(T),tt=d.getFragmentShaderID(T);const gt=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),Kt=K.isInstancedMesh===!0,le=K.isBatchedMesh===!0,de=!!T.map,xt=!!T.matcap,Gt=!!P,It=!!T.aoMap,he=!!T.lightMap,Bt=!!T.bumpMap,Ee=!!T.normalMap,V=!!T.displacementMap,Qt=!!T.emissiveMap,Lt=!!T.metalnessMap,Vt=!!T.roughnessMap,Tt=T.anisotropy>0,U=T.clearcoat>0,b=T.dispersion>0,Y=T.iridescence>0,dt=T.sheen>0,St=T.transmission>0,ct=Tt&&!!T.anisotropyMap,Yt=U&&!!T.clearcoatMap,wt=U&&!!T.clearcoatNormalMap,se=U&&!!T.clearcoatRoughnessMap,ie=Y&&!!T.iridescenceMap,bt=Y&&!!T.iridescenceThicknessMap,yt=dt&&!!T.sheenColorMap,zt=dt&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,kt=!!T.specularColorMap,ve=!!T.specularIntensityMap,k=St&&!!T.transmissionMap,Nt=St&&!!T.thicknessMap,Dt=!!T.gradientMap,qt=!!T.alphaMap,At=T.alphaTest>0,ut=!!T.alphaHash,Jt=!!T.extensions;let xe=Ia;T.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(xe=r.toneMapping);const Ye={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:pt,fragmentShader:Ct,defines:T.defines,customVertexShaderID:Xt,customFragmentShaderID:tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:le,batchingColor:le&&K._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&K.instanceColor!==null,instancingMorph:Kt&&K.morphTexture!==null,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:go,alphaToCoverage:!!T.alphaToCoverage,map:de,matcap:xt,envMap:Gt,envMapMode:Gt&&P.mapping,envMapCubeUVHeight:rt,aoMap:It,lightMap:he,bumpMap:Bt,normalMap:Ee,displacementMap:V,emissiveMap:Qt,normalMapObjectSpace:Ee&&T.normalMapType===mS,normalMapTangentSpace:Ee&&T.normalMapType===Vh,metalnessMap:Lt,roughnessMap:Vt,anisotropy:Tt,anisotropyMap:ct,clearcoat:U,clearcoatMap:Yt,clearcoatNormalMap:wt,clearcoatRoughnessMap:se,dispersion:b,iridescence:Y,iridescenceMap:ie,iridescenceThicknessMap:bt,sheen:dt,sheenColorMap:yt,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:kt,specularIntensityMap:ve,transmission:St,transmissionMap:k,thicknessMap:Nt,gradientMap:Dt,opaque:T.transparent===!1&&T.blending===fo&&T.alphaToCoverage===!1,alphaMap:qt,alphaTest:At,alphaHash:ut,combine:T.combine,mapUv:de&&E(T.map.channel),aoMapUv:It&&E(T.aoMap.channel),lightMapUv:he&&E(T.lightMap.channel),bumpMapUv:Bt&&E(T.bumpMap.channel),normalMapUv:Ee&&E(T.normalMap.channel),displacementMapUv:V&&E(T.displacementMap.channel),emissiveMapUv:Qt&&E(T.emissiveMap.channel),metalnessMapUv:Lt&&E(T.metalnessMap.channel),roughnessMapUv:Vt&&E(T.roughnessMap.channel),anisotropyMapUv:ct&&E(T.anisotropyMap.channel),clearcoatMapUv:Yt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&E(T.sheenRoughnessMap.channel),specularMapUv:Pt&&E(T.specularMap.channel),specularColorMapUv:kt&&E(T.specularColorMap.channel),specularIntensityMapUv:ve&&E(T.specularIntensityMap.channel),transmissionMapUv:k&&E(T.transmissionMap.channel),thicknessMapUv:Nt&&E(T.thicknessMap.channel),alphaMapUv:qt&&E(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ee||Tt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!J.attributes.uv&&(de||qt),fog:!!it,useFog:T.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&Ee===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Rt,skinning:K.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ft.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:de&&T.map.isVideoTexture===!0&&We.getTransfer(T.map.colorSpace)===tn,decodeVideoTextureEmissive:Qt&&T.emissiveMap.isVideoTexture===!0&&We.getTransfer(T.emissiveMap.colorSpace)===tn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xn,flipSided:T.side===vi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Jt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&T.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function M(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ft in T.defines)N.push(ft),N.push(T.defines[ft]);return T.isRawShaderMaterial===!1&&(S(N,T),C(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function S(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function C(T,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),T.push(f.mask)}function L(T){const N=y[T.type];let ft;if(N){const G=Ua[N];ft=US.clone(G.uniforms)}else ft=T.uniforms;return ft}function D(T,N){let ft=_.get(N);return ft!==void 0?++ft.usedTimes:(ft=new zA(r,N,T,l),p.push(ft),_.set(N,ft)),ft}function F(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function B(T){d.remove(T)}function z(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:L,acquireProgram:D,releaseProgram:F,releaseShaderCache:B,programs:p,dispose:z}}function XA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function WA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Nx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lx(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,E,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=E,C.materialVariant=f(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,E,w,M,S){const C=d(g,y,E,w,M,S);E.transmission>0?s.push(C):E.transparent===!0?l.push(C):i.push(C)}function p(g,y,E,w,M,S){const C=d(g,y,E,w,M,S);E.transmission>0?s.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||WA),s.length>1&&s.sort(y||Nx),l.length>1&&l.sort(y||Nx)}function v(){for(let g=t,y=r.length;g<y;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function YA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Lx,r.set(s,[f])):l>=c.length?(f=new Lx,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function qA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new ge};break;case"SpotLight":i={position:new Z,direction:new Z,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function jA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let ZA=0;function KA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function QA(r){const t=new qA,i=jA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new fn,f=new fn;function d(p){let _=0,v=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,E=0,w=0,M=0,S=0,C=0,L=0,D=0,F=0,B=0,z=0;p.sort(KA);for(let N=0,ft=p.length;N<ft;N++){const G=p[N],K=G.color,it=G.intensity,J=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===mo?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=K.r*it,v+=K.g*it,g+=K.b*it;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],it);z++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const P=G.shadow,rt=i.get(G);rt.shadowIntensity=P.intensity,rt.shadowBias=P.bias,rt.shadowNormalBias=P.normalBias,rt.shadowRadius=P.radius,rt.shadowMapSize=P.mapSize,s.directionalShadow[y]=rt,s.directionalShadowMap[y]=j,s.directionalShadowMatrix[y]=G.shadow.matrix,C++}s.directional[y]=O,y++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(K).multiplyScalar(it),O.distance=J,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[w]=O;const P=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,P.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[w]=P.matrix,G.castShadow){const rt=i.get(G);rt.shadowIntensity=P.intensity,rt.shadowBias=P.bias,rt.shadowNormalBias=P.normalBias,rt.shadowRadius=P.radius,rt.shadowMapSize=P.mapSize,s.spotShadow[w]=rt,s.spotShadowMap[w]=j,D++}w++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(K).multiplyScalar(it),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=O,M++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const P=G.shadow,rt=i.get(G);rt.shadowIntensity=P.intensity,rt.shadowBias=P.bias,rt.shadowNormalBias=P.normalBias,rt.shadowRadius=P.radius,rt.shadowMapSize=P.mapSize,rt.shadowCameraNear=P.camera.near,rt.shadowCameraFar=P.camera.far,s.pointShadow[E]=rt,s.pointShadowMap[E]=j,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=O,E++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(it),O.groundColor.copy(G.groundColor).multiplyScalar(it),s.hemi[S]=O,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==L||T.numSpotShadows!==D||T.numSpotMaps!==F||T.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,T.directionalLength=y,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=L,T.numSpotShadows=D,T.numSpotMaps=F,T.numLightProbes=z,s.version=ZA++)}function m(p,_){let v=0,g=0,y=0,E=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const L=p[S];if(L.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(L.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function Ux(r){const t=new QA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function JA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Ux(r),t.set(l,[d])):c>=f.length?(d=new Ux(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t2=`uniform sampler2D shadow_pass;
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
}`,e2=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],n2=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Ox=new fn,wc=new Z,Am=new Z;function i2(r,t,i){let s=new qh;const l=new Oe,c=new Oe,f=new Rn,d=new PS,m=new FS,p={},_=i.maxTextureSize,v={[Is]:vi,[vi]:Is,[Xn]:Xn},g=new Ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:$A,fragmentShader:t2}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new ta;E.setAttribute("position",new Sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ke(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let S=this.type;this.render=function(B,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;this.type===Yx&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=uo);const N=r.getRenderTarget(),ft=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),K=r.state;K.setBlending($a),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const it=S!==this.type;it&&z.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(j=>j.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,j=B.length;J<j;J++){const O=B[J],P=O.shadow;if(P===void 0){Me("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const rt=P.getFrameExtents();l.multiply(rt),c.copy(P.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/rt.x),l.x=c.x*rt.x,P.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/rt.y),l.y=c.y*rt.y,P.mapSize.y=c.y));const ht=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=ht,P.map===null||it===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===vl){if(O.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Pa(l.x,l.y,{format:mo,type:ts,minFilter:ai,magFilter:ai,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new Rl(l.x,l.y,va),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=es,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=ii,P.map.depthTexture.magFilter=ii}else O.isPointLight?(P.map=new y0(l.x),P.map.depthTexture=new wS(l.x,Fa)):(P.map=new Pa(l.x,l.y),P.map.depthTexture=new Rl(l.x,l.y,Fa)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=es,this.type===uo?(P.map.depthTexture.compareFunction=ht?Xh:kh,P.map.depthTexture.minFilter=ai,P.map.depthTexture.magFilter=ai):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=ii,P.map.depthTexture.magFilter=ii);P.camera.updateProjectionMatrix()}const Mt=P.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Mt;I++){if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,I),r.clear();else{I===0&&(r.setRenderTarget(P.map),r.clear());const q=P.getViewport(I);f.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),K.viewport(f)}if(O.isPointLight){const q=P.camera,pt=P.matrix,Ct=O.distance||q.far;Ct!==q.far&&(q.far=Ct,q.updateProjectionMatrix()),wc.setFromMatrixPosition(O.matrixWorld),q.position.copy(wc),Am.copy(q.position),Am.add(e2[I]),q.up.copy(n2[I]),q.lookAt(Am),q.updateMatrixWorld(),pt.makeTranslation(-wc.x,-wc.y,-wc.z),Ox.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Ox,q.coordinateSystem,q.reversedDepth)}else P.updateMatrices(O);s=P.getFrustum(),D(z,T,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===vl&&C(P,T),P.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(N,ft,G)};function C(B,z){const T=t.update(w);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Pa(l.x,l.y,{format:mo,type:ts})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,w,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,T,y,w,null)}function L(B,z,T,N){let ft=null;const G=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)ft=G;else if(ft=T.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=ft.uuid,it=z.uuid;let J=p[K];J===void 0&&(J={},p[K]=J);let j=J[it];j===void 0&&(j=ft.clone(),J[it]=j,z.addEventListener("dispose",F)),ft=j}if(ft.visible=z.visible,ft.wireframe=z.wireframe,N===vl?ft.side=z.shadowSide!==null?z.shadowSide:z.side:ft.side=z.shadowSide!==null?z.shadowSide:v[z.side],ft.alphaMap=z.alphaMap,ft.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ft.map=z.map,ft.clipShadows=z.clipShadows,ft.clippingPlanes=z.clippingPlanes,ft.clipIntersection=z.clipIntersection,ft.displacementMap=z.displacementMap,ft.displacementScale=z.displacementScale,ft.displacementBias=z.displacementBias,ft.wireframeLinewidth=z.wireframeLinewidth,ft.linewidth=z.linewidth,T.isPointLight===!0&&ft.isMeshDistanceMaterial===!0){const K=r.properties.get(ft);K.light=T}return ft}function D(B,z,T,N,ft){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&ft===vl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const it=t.update(B),J=B.material;if(Array.isArray(J)){const j=it.groups;for(let O=0,P=j.length;O<P;O++){const rt=j[O],ht=J[rt.materialIndex];if(ht&&ht.visible){const Mt=L(B,ht,N,ft);B.onBeforeShadow(r,B,z,T,it,Mt,rt),r.renderBufferDirect(T,null,it,Mt,B,rt),B.onAfterShadow(r,B,z,T,it,Mt,rt)}}}else if(J.visible){const j=L(B,J,N,ft);B.onBeforeShadow(r,B,z,T,it,j,null),r.renderBufferDirect(T,null,it,j,B,null),B.onAfterShadow(r,B,z,T,it,j,null)}}const K=B.children;for(let it=0,J=K.length;it<J;it++)D(K[it],z,T,N,ft)}function F(B){B.target.removeEventListener("dispose",F);for(const T in p){const N=p[T],ft=B.target.uuid;ft in N&&(N[ft].dispose(),delete N[ft])}}}function a2(r,t){function i(){let k=!1;const Nt=new Rn;let Dt=null;const qt=new Rn(0,0,0,0);return{setMask:function(At){Dt!==At&&!k&&(r.colorMask(At,At,At,At),Dt=At)},setLocked:function(At){k=At},setClear:function(At,ut,Jt,xe,Ye){Ye===!0&&(At*=xe,ut*=xe,Jt*=xe),Nt.set(At,ut,Jt,xe),qt.equals(Nt)===!1&&(r.clearColor(At,ut,Jt,xe),qt.copy(Nt))},reset:function(){k=!1,Dt=null,qt.set(-1,0,0,0)}}}function s(){let k=!1,Nt=!1,Dt=null,qt=null,At=null;return{setReversed:function(ut){if(Nt!==ut){const Jt=t.get("EXT_clip_control");ut?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Nt=ut;const xe=At;At=null,this.setClear(xe)}},getReversed:function(){return Nt},setTest:function(ut){ut?gt(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(ut){Dt!==ut&&!k&&(r.depthMask(ut),Dt=ut)},setFunc:function(ut){if(Nt&&(ut=IM[ut]),qt!==ut){switch(ut){case Xf:r.depthFunc(r.NEVER);break;case Wf:r.depthFunc(r.ALWAYS);break;case Yf:r.depthFunc(r.LESS);break;case ho:r.depthFunc(r.LEQUAL);break;case qf:r.depthFunc(r.EQUAL);break;case jf:r.depthFunc(r.GEQUAL);break;case Zf:r.depthFunc(r.GREATER);break;case Kf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}qt=ut}},setLocked:function(ut){k=ut},setClear:function(ut){At!==ut&&(At=ut,Nt&&(ut=1-ut),r.clearDepth(ut))},reset:function(){k=!1,Dt=null,qt=null,At=null,Nt=!1}}}function l(){let k=!1,Nt=null,Dt=null,qt=null,At=null,ut=null,Jt=null,xe=null,Ye=null;return{setTest:function(Fe){k||(Fe?gt(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(Fe){Nt!==Fe&&!k&&(r.stencilMask(Fe),Nt=Fe)},setFunc:function(Fe,Zn,xi){(Dt!==Fe||qt!==Zn||At!==xi)&&(r.stencilFunc(Fe,Zn,xi),Dt=Fe,qt=Zn,At=xi)},setOp:function(Fe,Zn,xi){(ut!==Fe||Jt!==Zn||xe!==xi)&&(r.stencilOp(Fe,Zn,xi),ut=Fe,Jt=Zn,xe=xi)},setLocked:function(Fe){k=Fe},setClear:function(Fe){Ye!==Fe&&(r.clearStencil(Fe),Ye=Fe)},reset:function(){k=!1,Nt=null,Dt=null,qt=null,At=null,ut=null,Jt=null,xe=null,Ye=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,y=[],E=null,w=!1,M=null,S=null,C=null,L=null,D=null,F=null,B=null,z=new ge(0,0,0),T=0,N=!1,ft=null,G=null,K=null,it=null,J=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,P=0;const rt=r.getParameter(r.VERSION);rt.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(rt)[1]),O=P>=1):rt.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),O=P>=2);let ht=null,Mt={};const I=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),pt=new Rn().fromArray(I),Ct=new Rn().fromArray(q);function Xt(k,Nt,Dt,qt){const At=new Uint8Array(4),ut=r.createTexture();r.bindTexture(k,ut),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Jt=0;Jt<Dt;Jt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,qt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Nt+Jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return ut}const tt={};tt[r.TEXTURE_2D]=Xt(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),gt(r.DEPTH_TEST),f.setFunc(ho),Bt(!1),Ee(Om),gt(r.CULL_FACE),It($a);function gt(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function Rt(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function Kt(k,Nt){return v[k]!==Nt?(r.bindFramebuffer(k,Nt),v[k]=Nt,k===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Nt),k===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function le(k,Nt){let Dt=y,qt=!1;if(k){Dt=g.get(Nt),Dt===void 0&&(Dt=[],g.set(Nt,Dt));const At=k.textures;if(Dt.length!==At.length||Dt[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Jt=At.length;ut<Jt;ut++)Dt[ut]=r.COLOR_ATTACHMENT0+ut;Dt.length=At.length,qt=!0}}else Dt[0]!==r.BACK&&(Dt[0]=r.BACK,qt=!0);qt&&r.drawBuffers(Dt)}function de(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const xt={[yr]:r.FUNC_ADD,[jx]:r.FUNC_SUBTRACT,[Zx]:r.FUNC_REVERSE_SUBTRACT};xt[Kx]=r.MIN,xt[Qx]=r.MAX;const Gt={[Jx]:r.ZERO,[$x]:r.ONE,[tS]:r.SRC_COLOR,[Vf]:r.SRC_ALPHA,[rS]:r.SRC_ALPHA_SATURATE,[aS]:r.DST_COLOR,[nS]:r.DST_ALPHA,[eS]:r.ONE_MINUS_SRC_COLOR,[kf]:r.ONE_MINUS_SRC_ALPHA,[sS]:r.ONE_MINUS_DST_COLOR,[iS]:r.ONE_MINUS_DST_ALPHA,[oS]:r.CONSTANT_COLOR,[lS]:r.ONE_MINUS_CONSTANT_COLOR,[cS]:r.CONSTANT_ALPHA,[uS]:r.ONE_MINUS_CONSTANT_ALPHA};function It(k,Nt,Dt,qt,At,ut,Jt,xe,Ye,Fe){if(k===$a){w===!0&&(Rt(r.BLEND),w=!1);return}if(w===!1&&(gt(r.BLEND),w=!0),k!==qx){if(k!==M||Fe!==N){if((S!==yr||D!==yr)&&(r.blendEquation(r.FUNC_ADD),S=yr,D=yr),Fe)switch(k){case fo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Im:r.blendFunc(r.ONE,r.ONE);break;case Pm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",k);break}else switch(k){case fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Im:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Pm:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fm:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",k);break}C=null,L=null,F=null,B=null,z.set(0,0,0),T=0,M=k,N=Fe}return}At=At||Nt,ut=ut||Dt,Jt=Jt||qt,(Nt!==S||At!==D)&&(r.blendEquationSeparate(xt[Nt],xt[At]),S=Nt,D=At),(Dt!==C||qt!==L||ut!==F||Jt!==B)&&(r.blendFuncSeparate(Gt[Dt],Gt[qt],Gt[ut],Gt[Jt]),C=Dt,L=qt,F=ut,B=Jt),(xe.equals(z)===!1||Ye!==T)&&(r.blendColor(xe.r,xe.g,xe.b,Ye),z.copy(xe),T=Ye),M=k,N=!1}function he(k,Nt){k.side===Xn?Rt(r.CULL_FACE):gt(r.CULL_FACE);let Dt=k.side===vi;Nt&&(Dt=!Dt),Bt(Dt),k.blending===fo&&k.transparent===!1?It($a):It(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const qt=k.stencilWrite;d.setTest(qt),qt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Qt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(k){ft!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),ft=k)}function Ee(k){k!==kx?(gt(r.CULL_FACE),k!==G&&(k===Om?r.cullFace(r.BACK):k===Xx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),G=k}function V(k){k!==K&&(O&&r.lineWidth(k),K=k)}function Qt(k,Nt,Dt){k?(gt(r.POLYGON_OFFSET_FILL),(it!==Nt||J!==Dt)&&(it=Nt,J=Dt,f.getReversed()&&(Nt=-Nt),r.polygonOffset(Nt,Dt))):Rt(r.POLYGON_OFFSET_FILL)}function Lt(k){k?gt(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function Vt(k){k===void 0&&(k=r.TEXTURE0+j-1),ht!==k&&(r.activeTexture(k),ht=k)}function Tt(k,Nt,Dt){Dt===void 0&&(ht===null?Dt=r.TEXTURE0+j-1:Dt=ht);let qt=Mt[Dt];qt===void 0&&(qt={type:void 0,texture:void 0},Mt[Dt]=qt),(qt.type!==k||qt.texture!==Nt)&&(ht!==Dt&&(r.activeTexture(Dt),ht=Dt),r.bindTexture(k,Nt||tt[k]),qt.type=k,qt.texture=Nt)}function U(){const k=Mt[ht];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function dt(){try{r.texSubImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function St(){try{r.texSubImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function wt(){try{r.texStorage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function se(){try{r.texStorage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function ie(){try{r.texImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function bt(){try{r.texImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function yt(k){pt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),pt.copy(k))}function zt(k){Ct.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ct.copy(k))}function Pt(k,Nt){let Dt=p.get(Nt);Dt===void 0&&(Dt=new WeakMap,p.set(Nt,Dt));let qt=Dt.get(k);qt===void 0&&(qt=r.getUniformBlockIndex(Nt,k.name),Dt.set(k,qt))}function kt(k,Nt){const qt=p.get(Nt).get(k);m.get(Nt)!==qt&&(r.uniformBlockBinding(Nt,qt,k.__bindingPointIndex),m.set(Nt,qt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ht=null,Mt={},v={},g=new WeakMap,y=[],E=null,w=!1,M=null,S=null,C=null,L=null,D=null,F=null,B=null,z=new ge(0,0,0),T=0,N=!1,ft=null,G=null,K=null,it=null,J=null,pt.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:gt,disable:Rt,bindFramebuffer:Kt,drawBuffers:le,useProgram:de,setBlending:It,setMaterial:he,setFlipSided:Bt,setCullFace:Ee,setLineWidth:V,setPolygonOffset:Qt,setScissorTest:Lt,activeTexture:Vt,bindTexture:Tt,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:Y,texImage2D:ie,texImage3D:bt,updateUBOMapping:Pt,uniformBlockBinding:kt,texStorage2D:wt,texStorage3D:se,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:Yt,scissor:yt,viewport:zt,reset:ve}}function s2(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Oe,_=new WeakMap;let v;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return y?new OffscreenCanvas(U,b):Dh("canvas")}function w(U,b,Y){let dt=1;const St=Tt(U);if((St.width>Y||St.height>Y)&&(dt=Y/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ct=Math.floor(dt*St.width),Yt=Math.floor(dt*St.height);v===void 0&&(v=E(ct,Yt));const wt=b?E(ct,Yt):v;return wt.width=ct,wt.height=Yt,wt.getContext("2d").drawImage(U,0,0,ct,Yt),Me("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ct+"x"+Yt+")."),wt}else return"data"in U&&Me("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){r.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(U,b,Y,dt,St=!1){if(U!==null){if(r[U]!==void 0)return r[U];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ct=b;if(b===r.RED&&(Y===r.FLOAT&&(ct=r.R32F),Y===r.HALF_FLOAT&&(ct=r.R16F),Y===r.UNSIGNED_BYTE&&(ct=r.R8)),b===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.R8UI),Y===r.UNSIGNED_SHORT&&(ct=r.R16UI),Y===r.UNSIGNED_INT&&(ct=r.R32UI),Y===r.BYTE&&(ct=r.R8I),Y===r.SHORT&&(ct=r.R16I),Y===r.INT&&(ct=r.R32I)),b===r.RG&&(Y===r.FLOAT&&(ct=r.RG32F),Y===r.HALF_FLOAT&&(ct=r.RG16F),Y===r.UNSIGNED_BYTE&&(ct=r.RG8)),b===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RG16UI),Y===r.UNSIGNED_INT&&(ct=r.RG32UI),Y===r.BYTE&&(ct=r.RG8I),Y===r.SHORT&&(ct=r.RG16I),Y===r.INT&&(ct=r.RG32I)),b===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),Y===r.UNSIGNED_INT&&(ct=r.RGB32UI),Y===r.BYTE&&(ct=r.RGB8I),Y===r.SHORT&&(ct=r.RGB16I),Y===r.INT&&(ct=r.RGB32I)),b===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ct=r.RGBA32UI),Y===r.BYTE&&(ct=r.RGBA8I),Y===r.SHORT&&(ct=r.RGBA16I),Y===r.INT&&(ct=r.RGBA32I)),b===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),b===r.RGBA){const Yt=St?Vc:We.getTransfer(dt);Y===r.FLOAT&&(ct=r.RGBA32F),Y===r.HALF_FLOAT&&(ct=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ct=Yt===tn?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function D(U,b){let Y;return U?b===null||b===Fa||b===bl?Y=r.DEPTH24_STENCIL8:b===va?Y=r.DEPTH32F_STENCIL8:b===El&&(Y=r.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fa||b===bl?Y=r.DEPTH_COMPONENT24:b===va?Y=r.DEPTH_COMPONENT32F:b===El&&(Y=r.DEPTH_COMPONENT16),Y}function F(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==ii&&U.minFilter!==ai?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function B(U){const b=U.target;b.removeEventListener("dispose",B),T(b),b.isVideoTexture&&_.delete(b)}function z(U){const b=U.target;b.removeEventListener("dispose",z),ft(b)}function T(U){const b=s.get(U);if(b.__webglInit===void 0)return;const Y=U.source,dt=g.get(Y);if(dt){const St=dt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&N(U),Object.keys(dt).length===0&&g.delete(Y)}s.remove(U)}function N(U){const b=s.get(U);r.deleteTexture(b.__webglTexture);const Y=U.source,dt=g.get(Y);delete dt[b.__cacheKey],f.memory.textures--}function ft(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let St=0;St<b.__webglFramebuffer[dt].length;St++)r.deleteFramebuffer(b.__webglFramebuffer[dt][St]);else r.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[dt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=U.textures;for(let dt=0,St=Y.length;dt<St;dt++){const ct=s.get(Y[dt]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),f.memory.textures--),s.remove(Y[dt])}s.remove(U)}let G=0;function K(){G=0}function it(){const U=G;return U>=l.maxTextures&&Me("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function J(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function j(U,b){const Y=s.get(U);if(U.isVideoTexture&&Lt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Y.__version!==U.version){const dt=U.image;if(dt===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Y,U,b);return}}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+b)}function O(U,b){const Y=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){tt(Y,U,b);return}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+b)}function P(U,b){const Y=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){tt(Y,U,b);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+b)}function rt(U,b){const Y=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Y.__version!==U.version){gt(Y,U,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+b)}const ht={[Ml]:r.REPEAT,[Ja]:r.CLAMP_TO_EDGE,[Qf]:r.MIRRORED_REPEAT},Mt={[ii]:r.NEAREST,[dS]:r.NEAREST_MIPMAP_NEAREST,[Uc]:r.NEAREST_MIPMAP_LINEAR,[ai]:r.LINEAR,[Bf]:r.LINEAR_MIPMAP_NEAREST,[Us]:r.LINEAR_MIPMAP_LINEAR},I={[gS]:r.NEVER,[yS]:r.ALWAYS,[_S]:r.LESS,[kh]:r.LEQUAL,[vS]:r.EQUAL,[Xh]:r.GEQUAL,[xS]:r.GREATER,[SS]:r.NOTEQUAL};function q(U,b){if(b.type===va&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ai||b.magFilter===Bf||b.magFilter===Uc||b.magFilter===Us||b.minFilter===ai||b.minFilter===Bf||b.minFilter===Uc||b.minFilter===Us)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,ht[b.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,ht[b.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,ht[b.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Mt[b.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ii||b.minFilter!==Uc&&b.minFilter!==Us||b.type===va&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function pt(U,b){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",B));const dt=b.source;let St=g.get(dt);St===void 0&&(St={},g.set(dt,St));const ct=J(b);if(ct!==U.__cacheKey){St[ct]===void 0&&(St[ct]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),St[ct].usedTimes++;const Yt=St[U.__cacheKey];Yt!==void 0&&(St[U.__cacheKey].usedTimes--,Yt.usedTimes===0&&N(b)),U.__cacheKey=ct,U.__webglTexture=St[ct].texture}return Y}function Ct(U,b,Y){return Math.floor(Math.floor(U/Y)/b)}function Xt(U,b,Y,dt){const ct=U.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Y,dt,b.data);else{ct.sort((bt,yt)=>bt.start-yt.start);let Yt=0;for(let bt=1;bt<ct.length;bt++){const yt=ct[Yt],zt=ct[bt],Pt=yt.start+yt.count,kt=Ct(zt.start,b.width,4),ve=Ct(yt.start,b.width,4);zt.start<=Pt+1&&kt===ve&&Ct(zt.start+zt.count-1,b.width,4)===kt?yt.count=Math.max(yt.count,zt.start+zt.count-yt.start):(++Yt,ct[Yt]=zt)}ct.length=Yt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),se=r.getParameter(r.UNPACK_SKIP_PIXELS),ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let bt=0,yt=ct.length;bt<yt;bt++){const zt=ct[bt],Pt=Math.floor(zt.start/4),kt=Math.ceil(zt.count/4),ve=Pt%b.width,k=Math.floor(Pt/b.width),Nt=kt,Dt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,ve,k,Nt,Dt,Y,dt,b.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,se),r.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}function tt(U,b,Y){let dt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=r.TEXTURE_3D);const St=pt(U,b),ct=b.source;i.bindTexture(dt,U.__webglTexture,r.TEXTURE0+Y);const Yt=s.get(ct);if(ct.version!==Yt.__version||St===!0){i.activeTexture(r.TEXTURE0+Y);const wt=We.getPrimaries(We.workingColorSpace),se=b.colorSpace===Ns?null:We.getPrimaries(b.colorSpace),ie=b.colorSpace===Ns||wt===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let bt=w(b.image,!1,l.maxTextureSize);bt=Vt(b,bt);const yt=c.convert(b.format,b.colorSpace),zt=c.convert(b.type);let Pt=L(b.internalFormat,yt,zt,b.colorSpace,b.isVideoTexture);q(dt,b);let kt;const ve=b.mipmaps,k=b.isVideoTexture!==!0,Nt=Yt.__version===void 0||St===!0,Dt=ct.dataReady,qt=F(b,bt);if(b.isDepthTexture)Pt=D(b.format===Mr,b.type),Nt&&(k?i.texStorage2D(r.TEXTURE_2D,1,Pt,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,Pt,bt.width,bt.height,0,yt,zt,null));else if(b.isDataTexture)if(ve.length>0){k&&Nt&&i.texStorage2D(r.TEXTURE_2D,qt,Pt,ve[0].width,ve[0].height);for(let At=0,ut=ve.length;At<ut;At++)kt=ve[At],k?Dt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,kt.width,kt.height,yt,zt,kt.data):i.texImage2D(r.TEXTURE_2D,At,Pt,kt.width,kt.height,0,yt,zt,kt.data);b.generateMipmaps=!1}else k?(Nt&&i.texStorage2D(r.TEXTURE_2D,qt,Pt,bt.width,bt.height),Dt&&Xt(b,bt,yt,zt)):i.texImage2D(r.TEXTURE_2D,0,Pt,bt.width,bt.height,0,yt,zt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Pt,ve[0].width,ve[0].height,bt.depth);for(let At=0,ut=ve.length;At<ut;At++)if(kt=ve[At],b.format!==xa)if(yt!==null)if(k){if(Dt)if(b.layerUpdates.size>0){const Jt=hx(kt.width,kt.height,b.format,b.type);for(const xe of b.layerUpdates){const Ye=kt.data.subarray(xe*Jt/kt.data.BYTES_PER_ELEMENT,(xe+1)*Jt/kt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,xe,kt.width,kt.height,1,yt,Ye)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,kt.width,kt.height,bt.depth,yt,kt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Pt,kt.width,kt.height,bt.depth,0,kt.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Dt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,kt.width,kt.height,bt.depth,yt,zt,kt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,At,Pt,kt.width,kt.height,bt.depth,0,yt,zt,kt.data)}else{k&&Nt&&i.texStorage2D(r.TEXTURE_2D,qt,Pt,ve[0].width,ve[0].height);for(let At=0,ut=ve.length;At<ut;At++)kt=ve[At],b.format!==xa?yt!==null?k?Dt&&i.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,kt.width,kt.height,yt,kt.data):i.compressedTexImage2D(r.TEXTURE_2D,At,Pt,kt.width,kt.height,0,kt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Dt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,kt.width,kt.height,yt,zt,kt.data):i.texImage2D(r.TEXTURE_2D,At,Pt,kt.width,kt.height,0,yt,zt,kt.data)}else if(b.isDataArrayTexture)if(k){if(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Pt,bt.width,bt.height,bt.depth),Dt)if(b.layerUpdates.size>0){const At=hx(bt.width,bt.height,b.format,b.type);for(const ut of b.layerUpdates){const Jt=bt.data.subarray(ut*At/bt.data.BYTES_PER_ELEMENT,(ut+1)*At/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,bt.width,bt.height,1,yt,zt,Jt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,yt,zt,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,bt.width,bt.height,bt.depth,0,yt,zt,bt.data);else if(b.isData3DTexture)k?(Nt&&i.texStorage3D(r.TEXTURE_3D,qt,Pt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,yt,zt,bt.data)):i.texImage3D(r.TEXTURE_3D,0,Pt,bt.width,bt.height,bt.depth,0,yt,zt,bt.data);else if(b.isFramebufferTexture){if(Nt)if(k)i.texStorage2D(r.TEXTURE_2D,qt,Pt,bt.width,bt.height);else{let At=bt.width,ut=bt.height;for(let Jt=0;Jt<qt;Jt++)i.texImage2D(r.TEXTURE_2D,Jt,Pt,At,ut,0,yt,zt,null),At>>=1,ut>>=1}}else if(ve.length>0){if(k&&Nt){const At=Tt(ve[0]);i.texStorage2D(r.TEXTURE_2D,qt,Pt,At.width,At.height)}for(let At=0,ut=ve.length;At<ut;At++)kt=ve[At],k?Dt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,yt,zt,kt):i.texImage2D(r.TEXTURE_2D,At,Pt,yt,zt,kt);b.generateMipmaps=!1}else if(k){if(Nt){const At=Tt(bt);i.texStorage2D(r.TEXTURE_2D,qt,Pt,At.width,At.height)}Dt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,zt,bt)}else i.texImage2D(r.TEXTURE_2D,0,Pt,yt,zt,bt);M(b)&&S(dt),Yt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function gt(U,b,Y){if(b.image.length!==6)return;const dt=pt(U,b),St=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Y);const ct=s.get(St);if(St.version!==ct.__version||dt===!0){i.activeTexture(r.TEXTURE0+Y);const Yt=We.getPrimaries(We.workingColorSpace),wt=b.colorSpace===Ns?null:We.getPrimaries(b.colorSpace),se=b.colorSpace===Ns||Yt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ie=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let ut=0;ut<6;ut++)!ie&&!bt?yt[ut]=w(b.image[ut],!0,l.maxCubemapSize):yt[ut]=bt?b.image[ut].image:b.image[ut],yt[ut]=Vt(b,yt[ut]);const zt=yt[0],Pt=c.convert(b.format,b.colorSpace),kt=c.convert(b.type),ve=L(b.internalFormat,Pt,kt,b.colorSpace),k=b.isVideoTexture!==!0,Nt=ct.__version===void 0||dt===!0,Dt=St.dataReady;let qt=F(b,zt);q(r.TEXTURE_CUBE_MAP,b);let At;if(ie){k&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,qt,ve,zt.width,zt.height);for(let ut=0;ut<6;ut++){At=yt[ut].mipmaps;for(let Jt=0;Jt<At.length;Jt++){const xe=At[Jt];b.format!==xa?Pt!==null?k?Dt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt,0,0,xe.width,xe.height,Pt,xe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt,ve,xe.width,xe.height,0,xe.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt,0,0,xe.width,xe.height,Pt,kt,xe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt,ve,xe.width,xe.height,0,Pt,kt,xe.data)}}}else{if(At=b.mipmaps,k&&Nt){At.length>0&&qt++;const ut=Tt(yt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,qt,ve,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(bt){k?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,yt[ut].width,yt[ut].height,Pt,kt,yt[ut].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ve,yt[ut].width,yt[ut].height,0,Pt,kt,yt[ut].data);for(let Jt=0;Jt<At.length;Jt++){const Ye=At[Jt].image[ut].image;k?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt+1,0,0,Ye.width,Ye.height,Pt,kt,Ye.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt+1,ve,Ye.width,Ye.height,0,Pt,kt,Ye.data)}}else{k?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Pt,kt,yt[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ve,Pt,kt,yt[ut]);for(let Jt=0;Jt<At.length;Jt++){const xe=At[Jt];k?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt+1,0,0,Pt,kt,xe.image[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt+1,ve,Pt,kt,xe.image[ut])}}}M(b)&&S(r.TEXTURE_CUBE_MAP),ct.__version=St.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Rt(U,b,Y,dt,St,ct){const Yt=c.convert(Y.format,Y.colorSpace),wt=c.convert(Y.type),se=L(Y.internalFormat,Yt,wt,Y.colorSpace),ie=s.get(b),bt=s.get(Y);if(bt.__renderTarget=b,!ie.__hasExternalTextures){const yt=Math.max(1,b.width>>ct),zt=Math.max(1,b.height>>ct);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,ct,se,yt,zt,b.depth,0,Yt,wt,null):i.texImage2D(St,ct,se,yt,zt,0,Yt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Qt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,St,bt.__webglTexture,0,V(b)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,St,bt.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Kt(U,b,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,U),b.depthBuffer){const dt=b.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,ct=D(b.stencilBuffer,St),Yt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Qt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),ct,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),ct,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ct,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,U)}else{const dt=b.textures;for(let St=0;St<dt.length;St++){const ct=dt[St],Yt=c.convert(ct.format,ct.colorSpace),wt=c.convert(ct.type),se=L(ct.internalFormat,Yt,wt,ct.colorSpace);Qt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),se,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),se,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,se,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(U,b,Y){const dt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(b.depthTexture);if(St.__renderTarget=b,(!St.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt){if(St.__webglInit===void 0&&(St.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),q(r.TEXTURE_CUBE_MAP,b.depthTexture);const ie=c.convert(b.depthTexture.format),bt=c.convert(b.depthTexture.type);let yt;b.depthTexture.format===es?yt=r.DEPTH_COMPONENT24:b.depthTexture.format===Mr&&(yt=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,yt,b.width,b.height,0,ie,bt,null)}}else j(b.depthTexture,0);const ct=St.__webglTexture,Yt=V(b),wt=dt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,se=b.depthTexture.format===Mr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===es)Qt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,wt,ct,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,se,wt,ct,0);else if(b.depthTexture.format===Mr)Qt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,wt,ct,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,se,wt,ct,0);else throw new Error("Unknown depthTexture format")}function de(U){const b=s.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=dt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let dt=0;dt<6;dt++)le(b.__webglFramebuffer[dt],U,dt);else{const dt=U.texture.mipmaps;dt&&dt.length>0?le(b.__webglFramebuffer[0],U,0):le(b.__webglFramebuffer,U,0)}else if(Y){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=r.createRenderbuffer(),Kt(b.__webglDepthbuffer[dt],U,!1);else{const St=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ct)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Kt(b.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(U,b,Y){const dt=s.get(U);b!==void 0&&Rt(dt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&de(U)}function Gt(U){const b=U.texture,Y=s.get(U),dt=s.get(b);U.addEventListener("dispose",z);const St=U.textures,ct=U.isWebGLCubeRenderTarget===!0,Yt=St.length>1;if(Yt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=b.version,f.memory.textures++),ct){Y.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[wt]=[];for(let se=0;se<b.mipmaps.length;se++)Y.__webglFramebuffer[wt][se]=r.createFramebuffer()}else Y.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)Y.__webglFramebuffer[wt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let wt=0,se=St.length;wt<se;wt++){const ie=s.get(St[wt]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),f.memory.textures++)}if(U.samples>0&&Qt(U)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const se=St[wt];Y.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[wt]);const ie=c.convert(se.format,se.colorSpace),bt=c.convert(se.type),yt=L(se.internalFormat,ie,bt,se.colorSpace,U.isXRRenderTarget===!0),zt=V(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,yt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Kt(Y.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),q(r.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)Rt(Y.__webglFramebuffer[wt][se],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,se);else Rt(Y.__webglFramebuffer[wt],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(b)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let wt=0,se=St.length;wt<se;wt++){const ie=St[wt],bt=s.get(ie);let yt=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(yt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(yt,bt.__webglTexture),q(yt,ie),Rt(Y.__webglFramebuffer,U,ie,r.COLOR_ATTACHMENT0+wt,yt,0),M(ie)&&S(yt)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,dt.__webglTexture),q(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)Rt(Y.__webglFramebuffer[se],U,b,r.COLOR_ATTACHMENT0,wt,se);else Rt(Y.__webglFramebuffer,U,b,r.COLOR_ATTACHMENT0,wt,0);M(b)&&S(wt),i.unbindTexture()}U.depthBuffer&&de(U)}function It(U){const b=U.textures;for(let Y=0,dt=b.length;Y<dt;Y++){const St=b[Y];if(M(St)){const ct=C(U),Yt=s.get(St).__webglTexture;i.bindTexture(ct,Yt),S(ct),i.unbindTexture()}}}const he=[],Bt=[];function Ee(U){if(U.samples>0){if(Qt(U)===!1){const b=U.textures,Y=U.width,dt=U.height;let St=r.COLOR_BUFFER_BIT;const ct=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=s.get(U),wt=b.length>1;if(wt)for(let ie=0;ie<b.length;ie++)i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const se=U.texture.mipmaps;se&&se.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let ie=0;ie<b.length;ie++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[ie]);const bt=s.get(b[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,Y,dt,0,0,Y,dt,St,r.NEAREST),m===!0&&(he.length=0,Bt.length=0,he.push(r.COLOR_ATTACHMENT0+ie),U.depthBuffer&&U.resolveDepthBuffer===!1&&(he.push(ct),Bt.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let ie=0;ie<b.length;ie++){i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[ie]);const bt=s.get(b[ie]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function V(U){return Math.min(l.maxSamples,U.samples)}function Qt(U){const b=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Lt(U){const b=f.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function Vt(U,b){const Y=U.colorSpace,dt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==go&&Y!==Ns&&(We.getTransfer(Y)===tn?(dt!==xa||St!==Gi)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",Y)),b}function Tt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=O,this.setTexture3D=P,this.setTextureCube=rt,this.rebindTextures=xt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ZS(r,t){function i(s,l=Ns){let c;const f=We.getTransfer(l);if(s===Gi)return r.UNSIGNED_BYTE;if(s===Ph)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===s0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===r0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===i0)return r.BYTE;if(s===a0)return r.SHORT;if(s===El)return r.UNSIGNED_SHORT;if(s===Ih)return r.INT;if(s===Fa)return r.UNSIGNED_INT;if(s===va)return r.FLOAT;if(s===ts)return r.HALF_FLOAT;if(s===o0)return r.ALPHA;if(s===l0)return r.RGB;if(s===xa)return r.RGBA;if(s===es)return r.DEPTH_COMPONENT;if(s===Mr)return r.DEPTH_STENCIL;if(s===Bh)return r.RED;if(s===zh)return r.RED_INTEGER;if(s===mo)return r.RG;if(s===Hh)return r.RG_INTEGER;if(s===Gh)return r.RGBA_INTEGER;if(s===Ic||s===Pc||s===Fc||s===Bc)if(f===tn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jf||s===$f||s===th||s===eh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Jf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$f)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nh||s===ih||s===ah||s===sh||s===rh||s===oh||s===lh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===nh||s===ih)return f===tn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ah)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===sh)return c.COMPRESSED_R11_EAC;if(s===rh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===oh)return c.COMPRESSED_RG11_EAC;if(s===lh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ch||s===uh||s===fh||s===hh||s===dh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===yh||s===Mh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ch)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ph)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_h)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mh)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eh||s===bh||s===Th)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Eh)return f===tn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Th)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ah||s===Rh||s===Ch||s===wh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ah)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Rh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ch)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const r2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o2=`
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

}`;class l2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new _0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ba({vertexShader:r2,fragmentShader:o2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ke(new Qa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c2 extends _o{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,y=null,E=null;const w=typeof XRWebGLBinding<"u",M=new l2,S={},C=i.getContextAttributes();let L=null,D=null;const F=[],B=[],z=new Oe;let T=null;const N=new Ni;N.viewport=new Rn;const ft=new Ni;ft.viewport=new Rn;const G=[N,ft],K=new GS;let it=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let gt=F[tt];return gt===void 0&&(gt=new zf,F[tt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(tt){let gt=F[tt];return gt===void 0&&(gt=new zf,F[tt]=gt),gt.getGripSpace()},this.getHand=function(tt){let gt=F[tt];return gt===void 0&&(gt=new zf,F[tt]=gt),gt.getHandSpace()};function j(tt){const gt=B.indexOf(tt.inputSource);if(gt===-1)return;const Rt=F[gt];Rt!==void 0&&(Rt.update(tt.inputSource,tt.frame,p||f),Rt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function O(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",P);for(let tt=0;tt<F.length;tt++){const gt=B[tt];gt!==null&&(B[tt]=null,F[tt].disconnect(gt))}it=null,J=null,M.reset();for(const tt in S)delete S[tt];t.setRenderTarget(L),y=null,g=null,v=null,l=null,D=null,Xt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",O),l.addEventListener("inputsourceschange",P),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Kt=null,le=null;C.depth&&(le=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=C.stencil?Mr:es,Kt=C.stencil?bl:Fa);const de={colorFormat:i.RGBA8,depthFormat:le,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(de),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Pa(g.textureWidth,g.textureHeight,{format:xa,type:Gi,depthTexture:new Rl(g.textureWidth,g.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Rt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Pa(y.framebufferWidth,y.framebufferHeight,{format:xa,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Xt.setContext(l),Xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function P(tt){for(let gt=0;gt<tt.removed.length;gt++){const Rt=tt.removed[gt],Kt=B.indexOf(Rt);Kt>=0&&(B[Kt]=null,F[Kt].disconnect(Rt))}for(let gt=0;gt<tt.added.length;gt++){const Rt=tt.added[gt];let Kt=B.indexOf(Rt);if(Kt===-1){for(let de=0;de<F.length;de++)if(de>=B.length){B.push(Rt),Kt=de;break}else if(B[de]===null){B[de]=Rt,Kt=de;break}if(Kt===-1)break}const le=F[Kt];le&&le.connect(Rt)}}const rt=new Z,ht=new Z;function Mt(tt,gt,Rt){rt.setFromMatrixPosition(gt.matrixWorld),ht.setFromMatrixPosition(Rt.matrixWorld);const Kt=rt.distanceTo(ht),le=gt.projectionMatrix.elements,de=Rt.projectionMatrix.elements,xt=le[14]/(le[10]-1),Gt=le[14]/(le[10]+1),It=(le[9]+1)/le[5],he=(le[9]-1)/le[5],Bt=(le[8]-1)/le[0],Ee=(de[8]+1)/de[0],V=xt*Bt,Qt=xt*Ee,Lt=Kt/(-Bt+Ee),Vt=Lt*-Bt;if(gt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Vt),tt.translateZ(Lt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),le[10]===-1)tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Tt=xt+Lt,U=Gt+Lt,b=V-Vt,Y=Qt+(Kt-Vt),dt=It*Gt/U*Tt,St=he*Gt/U*Tt;tt.projectionMatrix.makePerspective(b,Y,dt,St,Tt,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function I(tt,gt){gt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(gt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let gt=tt.near,Rt=tt.far;M.texture!==null&&(M.depthNear>0&&(gt=M.depthNear),M.depthFar>0&&(Rt=M.depthFar)),K.near=ft.near=N.near=gt,K.far=ft.far=N.far=Rt,(it!==K.near||J!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),it=K.near,J=K.far),K.layers.mask=tt.layers.mask|6,N.layers.mask=K.layers.mask&-5,ft.layers.mask=K.layers.mask&-3;const Kt=tt.parent,le=K.cameras;I(K,Kt);for(let de=0;de<le.length;de++)I(le[de],Kt);le.length===2?Mt(K,N,ft):K.projectionMatrix.copy(N.projectionMatrix),q(tt,K,Kt)};function q(tt,gt,Rt){Rt===null?tt.matrix.copy(gt.matrixWorld):(tt.matrix.copy(Rt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(gt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Al*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(tt){m=tt,g!==null&&(g.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(tt){return S[tt]};let pt=null;function Ct(tt,gt){if(_=gt.getViewerPose(p||f),E=gt,_!==null){const Rt=_.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let Kt=!1;Rt.length!==K.cameras.length&&(K.cameras.length=0,Kt=!0);for(let Gt=0;Gt<Rt.length;Gt++){const It=Rt[Gt];let he=null;if(y!==null)he=y.getViewport(It);else{const Ee=v.getViewSubImage(g,It);he=Ee.viewport,Gt===0&&(t.setRenderTargetTextures(D,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(D))}let Bt=G[Gt];Bt===void 0&&(Bt=new Ni,Bt.layers.enable(Gt),Bt.viewport=new Rn,G[Gt]=Bt),Bt.matrix.fromArray(It.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(It.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(he.x,he.y,he.width,he.height),Gt===0&&(K.matrix.copy(Bt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Kt===!0&&K.cameras.push(Bt)}const le=l.enabledFeatures;if(le&&le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const Gt=v.getDepthInformation(Rt[0]);Gt&&Gt.isValid&&Gt.texture&&M.init(Gt,l.renderState)}if(le&&le.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let Gt=0;Gt<Rt.length;Gt++){const It=Rt[Gt].camera;if(It){let he=S[It];he||(he=new _0,S[It]=he);const Bt=v.getCameraImage(It);he.sourceTexture=Bt}}}}for(let Rt=0;Rt<F.length;Rt++){const Kt=B[Rt],le=F[Rt];Kt!==null&&le!==void 0&&le.update(Kt,gt,p||f)}pt&&pt(tt,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),E=null}const Xt=new XS;Xt.setAnimationLoop(Ct),this.setAnimationLoop=function(tt){pt=tt},this.dispose=function(){}}}const so=new $i,u2=new fn;function f2(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,LS(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,L,D){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,D)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,C,L):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===vi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===vi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),L=C.envMap,D=C.envMapRotation;L&&(M.envMap.value=L,so.copy(D),so.x*=-1,so.y*=-1,so.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),M.envMapRotation.value.setFromMatrix4(u2.makeRotationFromEuler(so)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===vi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function h2(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const D=L.program;s.uniformBlockBinding(C,D)}function p(C,L){let D=l[C.id];D===void 0&&(E(C),D=_(C),l[C.id]=D,C.addEventListener("dispose",M));const F=L.program;s.updateUBOMapping(C,F);const B=t.render.frame;c[C.id]!==B&&(g(C),c[C.id]=B)}function _(C){const L=v();C.__bindingPointIndex=L;const D=r.createBuffer(),F=C.__size,B=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function v(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],D=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let B=0,z=D.length;B<z;B++){const T=Array.isArray(D[B])?D[B]:[D[B]];for(let N=0,ft=T.length;N<ft;N++){const G=T[N];if(y(G,B,N,F)===!0){const K=G.__offset,it=Array.isArray(G.value)?G.value:[G.value];let J=0;for(let j=0;j<it.length;j++){const O=it[j],P=w(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,K+J,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,J),J+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,L,D,F){const B=C.value,z=L+"_"+D;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const T=F[z];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return F[z]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function E(C){const L=C.uniforms;let D=0;const F=16;for(let z=0,T=L.length;z<T;z++){const N=Array.isArray(L[z])?L[z]:[L[z]];for(let ft=0,G=N.length;ft<G;ft++){const K=N[ft],it=Array.isArray(K.value)?K.value:[K.value];for(let J=0,j=it.length;J<j;J++){const O=it[J],P=w(O),rt=D%F,ht=rt%P.boundary,Mt=rt+ht;D+=ht,Mt!==0&&F-Mt<P.storage&&(D+=F-Mt),K.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=D,D+=P.storage}}}const B=D%F;return B>0&&(D+=F-B),C.__size=D,C.__cache={},this}function w(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const d2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ka=null;function p2(){return Ka===null&&(Ka=new m0(d2,16,16,mo,ts),Ka.name="DFG_LUT",Ka.minFilter=ai,Ka.magFilter=ai,Ka.wrapS=Ja,Ka.wrapT=Ja,Ka.generateMipmaps=!1,Ka.needsUpdate=!0),Ka}class KS{constructor(t={}){const{canvas:i=MS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Gi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const w=y,M=new Set([Gh,Hh,zh]),S=new Set([Gi,Fa,El,bl,Ph,Fh]),C=new Uint32Array(4),L=new Int32Array(4);let D=null,F=null;const B=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ft=!1;this._outputColorSpace=Yn;let G=0,K=0,it=null,J=-1,j=null;const O=new Rn,P=new Rn;let rt=null;const ht=new ge(0);let Mt=0,I=i.width,q=i.height,pt=1,Ct=null,Xt=null;const tt=new Rn(0,0,I,q),gt=new Rn(0,0,I,q);let Rt=!1;const Kt=new qh;let le=!1,de=!1;const xt=new fn,Gt=new Z,It=new Rn,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Ee(){return it===null?pt:1}let V=s;function Qt(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Lh}`),i.addEventListener("webglcontextlost",Jt,!1),i.addEventListener("webglcontextrestored",xe,!1),i.addEventListener("webglcontextcreationerror",Ye,!1),V===null){const X="webgl2";if(V=Qt(X,A),V===null)throw Qt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Xe("WebGLRenderer: "+A.message),A}let Lt,Vt,Tt,U,b,Y,dt,St,ct,Yt,wt,se,ie,bt,yt,zt,Pt,kt,ve,k,Nt,Dt,qt;function At(){Lt=new gT(V),Lt.init(),Nt=new ZS(V,Lt),Vt=new lT(V,Lt,t,Nt),Tt=new a2(V,Lt),Vt.reversedDepthBuffer&&g&&Tt.buffers.depth.setReversed(!0),U=new xT(V),b=new XA,Y=new s2(V,Lt,Tt,b,Vt,Nt,U),dt=new mT(N),St=new bE(V),Dt=new rT(V,St),ct=new _T(V,St,U,Dt),Yt=new yT(V,ct,St,Dt,U),kt=new ST(V,Vt,Y),yt=new cT(b),wt=new kA(N,dt,Lt,Vt,Dt,yt),se=new f2(N,b),ie=new YA,bt=new JA(Lt),Pt=new sT(N,dt,Tt,Yt,E,m),zt=new i2(N,Yt,Vt),qt=new h2(V,U,Vt,Tt),ve=new oT(V,Lt,U),k=new vT(V,Lt,U),U.programs=wt.programs,N.capabilities=Vt,N.extensions=Lt,N.properties=b,N.renderLists=ie,N.shadowMap=zt,N.state=Tt,N.info=U}At(),w!==Gi&&(T=new ET(w,i.width,i.height,l,c));const ut=new c2(N,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(A){A!==void 0&&(pt=A,this.setSize(I,q,!1))},this.getSize=function(A){return A.set(I,q)},this.setSize=function(A,X,ot=!0){if(ut.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,q=X,i.width=Math.floor(A*pt),i.height=Math.floor(X*pt),ot===!0&&(i.style.width=A+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(I*pt,q*pt).floor()},this.setDrawingBufferSize=function(A,X,ot){I=A,q=X,pt=ot,i.width=Math.floor(A*ot),i.height=Math.floor(X*ot),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(w===Gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,X,ot,at){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,X,ot,at),Tt.viewport(O.copy(tt).multiplyScalar(pt).round())},this.getScissor=function(A){return A.copy(gt)},this.setScissor=function(A,X,ot,at){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,X,ot,at),Tt.scissor(P.copy(gt).multiplyScalar(pt).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(A){Tt.setScissorTest(Rt=A)},this.setOpaqueSort=function(A){Ct=A},this.setTransparentSort=function(A){Xt=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ot=!0){let at=0;if(A){let $=!1;if(it!==null){const Ot=it.texture.format;$=M.has(Ot)}if($){const Ot=it.texture.type,jt=S.has(Ot),Ht=Pt.getClearColor(),te=Pt.getClearAlpha(),ee=Ht.r,Se=Ht.g,ye=Ht.b;jt?(C[0]=ee,C[1]=Se,C[2]=ye,C[3]=te,V.clearBufferuiv(V.COLOR,0,C)):(L[0]=ee,L[1]=Se,L[2]=ye,L[3]=te,V.clearBufferiv(V.COLOR,0,L))}else at|=V.COLOR_BUFFER_BIT}X&&(at|=V.DEPTH_BUFFER_BIT),ot&&(at|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&V.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Jt,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",Ye,!1),Pt.dispose(),ie.dispose(),bt.dispose(),b.dispose(),dt.dispose(),Yt.dispose(),Dt.dispose(),qt.dispose(),wt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Fs),ut.removeEventListener("sessionend",na),Vi.stop()};function Jt(A){A.preventDefault(),Gm("WebGLRenderer: Context Lost."),ft=!0}function xe(){Gm("WebGLRenderer: Context Restored."),ft=!1;const A=U.autoReset,X=zt.enabled,ot=zt.autoUpdate,at=zt.needsUpdate,$=zt.type;At(),U.autoReset=A,zt.enabled=X,zt.autoUpdate=ot,zt.needsUpdate=at,zt.type=$}function Ye(A){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fe(A){const X=A.target;X.removeEventListener("dispose",Fe),Zn(X)}function Zn(A){xi(A),b.remove(A)}function xi(A){const X=b.get(A).programs;X!==void 0&&(X.forEach(function(ot){wt.releaseProgram(ot)}),A.isShaderMaterial&&wt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ot,at,$,Ot){X===null&&(X=he);const jt=$.isMesh&&$.matrixWorld.determinant()<0,Ht=Hs(A,X,ot,at,$);Tt.setMaterial(at,jt);let te=ot.index,ee=1;if(at.wireframe===!0){if(te=ct.getWireframeAttribute(ot),te===void 0)return;ee=2}const Se=ot.drawRange,ye=ot.attributes.position;let $t=Se.start*ee,Re=(Se.start+Se.count)*ee;Ot!==null&&($t=Math.max($t,Ot.start*ee),Re=Math.min(Re,(Ot.start+Ot.count)*ee)),te!==null?($t=Math.max($t,0),Re=Math.min(Re,te.count)):ye!=null&&($t=Math.max($t,0),Re=Math.min(Re,ye.count));const pn=Re-$t;if(pn<0||pn===1/0)return;Dt.setup($,at,Ht,ot,te);let mn,Ve=ve;if(te!==null&&(mn=St.get(te),Ve=k,Ve.setIndex(mn)),$.isMesh)at.wireframe===!0?(Tt.setLineWidth(at.wireframeLinewidth*Ee()),Ve.setMode(V.LINES)):Ve.setMode(V.TRIANGLES);else if($.isLine){let Un=at.linewidth;Un===void 0&&(Un=1),Tt.setLineWidth(Un*Ee()),$.isLineSegments?Ve.setMode(V.LINES):$.isLineLoop?Ve.setMode(V.LINE_LOOP):Ve.setMode(V.LINE_STRIP)}else $.isPoints?Ve.setMode(V.POINTS):$.isSprite&&Ve.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)kc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ve.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Ve.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Un=$._multiDrawStarts,ne=$._multiDrawCounts,Kn=$._multiDrawCount,pe=te?St.get(te).bytesPerElement:1,Qn=b.get(at).currentProgram.getUniforms();for(let di=0;di<Kn;di++)Qn.setValue(V,"_gl_DrawID",di),Ve.render(Un[di]/pe,ne[di])}else if($.isInstancedMesh)Ve.renderInstances($t,pn,$.count);else if(ot.isInstancedBufferGeometry){const Un=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ne=Math.min(ot.instanceCount,Un);Ve.renderInstances($t,pn,ne)}else Ve.render($t,pn)};function ns(A,X,ot){A.transparent===!0&&A.side===Xn&&A.forceSinglePass===!1?(A.side=vi,A.needsUpdate=!0,ya(A,X,ot),A.side=Is,A.needsUpdate=!0,ya(A,X,ot),A.side=Xn):ya(A,X,ot)}this.compile=function(A,X,ot=null){ot===null&&(ot=A),F=bt.get(ot),F.init(X),z.push(F),ot.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),A!==ot&&A.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),F.setupLights();const at=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ot=$.material;if(Ot)if(Array.isArray(Ot))for(let jt=0;jt<Ot.length;jt++){const Ht=Ot[jt];ns(Ht,ot,$),at.add(Ht)}else ns(Ot,ot,$),at.add(Ot)}),F=z.pop(),at},this.compileAsync=function(A,X,ot=null){const at=this.compile(A,X,ot);return new Promise($=>{function Ot(){if(at.forEach(function(jt){b.get(jt).currentProgram.isReady()&&at.delete(jt)}),at.size===0){$(A);return}setTimeout(Ot,10)}Lt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let ea=null;function za(A){ea&&ea(A)}function Fs(){Vi.stop()}function na(){Vi.start()}const Vi=new XS;Vi.setAnimationLoop(za),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){ea=A,ut.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},ut.addEventListener("sessionstart",Fs),ut.addEventListener("sessionend",na),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ft===!0)return;const ot=ut.enabled===!0&&ut.isPresenting===!0,at=T!==null&&(it===null||ot)&&T.begin(N,it);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,X,it),F=bt.get(A,z.length),F.init(X),z.push(F),xt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Kt.setFromProjectionMatrix(xt,Oa,X.reversedDepth),de=this.localClippingEnabled,le=yt.init(this.clippingPlanes,de),D=ie.get(A,B.length),D.init(),B.push(D),ut.enabled===!0&&ut.isPresenting===!0){const jt=N.xr.getDepthSensingMesh();jt!==null&&is(jt,X,-1/0,N.sortObjects)}is(A,X,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(Ct,Xt),Bt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Bt&&Pt.addToRenderList(D,A),this.info.render.frame++,le===!0&&yt.beginShadows();const $=F.state.shadowsArray;if(zt.render($,A,X),le===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&T.hasRenderPass())===!1){const jt=D.opaque,Ht=D.transmissive;if(F.setupLights(),X.isArrayCamera){const te=X.cameras;if(Ht.length>0)for(let ee=0,Se=te.length;ee<Se;ee++){const ye=te[ee];Tn(jt,Ht,A,ye)}Bt&&Pt.render(A);for(let ee=0,Se=te.length;ee<Se;ee++){const ye=te[ee];Li(D,A,ye,ye.viewport)}}else Ht.length>0&&Tn(jt,Ht,A,X),Bt&&Pt.render(A),Li(D,A,X)}it!==null&&K===0&&(Y.updateMultisampleRenderTarget(it),Y.updateRenderTargetMipmap(it)),at&&T.end(N),A.isScene===!0&&A.onAfterRender(N,A,X),Dt.resetDefaultState(),J=-1,j=null,z.pop(),z.length>0?(F=z[z.length-1],le===!0&&yt.setGlobalState(N.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function is(A,X,ot,at){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Kt.intersectsSprite(A)){at&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);const jt=Yt.update(A),Ht=A.material;Ht.visible&&D.push(A,jt,Ht,ot,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Kt.intersectsObject(A))){const jt=Yt.update(A),Ht=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),It.copy(jt.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(Ht)){const te=jt.groups;for(let ee=0,Se=te.length;ee<Se;ee++){const ye=te[ee],$t=Ht[ye.materialIndex];$t&&$t.visible&&D.push(A,jt,$t,ot,It.z,ye)}}else Ht.visible&&D.push(A,jt,Ht,ot,It.z,null)}}const Ot=A.children;for(let jt=0,Ht=Ot.length;jt<Ht;jt++)is(Ot[jt],X,ot,at)}function Li(A,X,ot,at){const{opaque:$,transmissive:Ot,transparent:jt}=A;F.setupLightsView(ot),le===!0&&yt.setGlobalState(N.clippingPlanes,ot),at&&Tt.viewport(O.copy(at)),$.length>0&&Cn($,X,ot),Ot.length>0&&Cn(Ot,X,ot),jt.length>0&&Cn(jt,X,ot),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Tn(A,X,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[at.id]===void 0){const $t=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[at.id]=new Pa(1,1,{generateMipmaps:!0,type:$t?ts:Gi,minFilter:Us,samples:Math.max(4,Vt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const Ot=F.state.transmissionRenderTarget[at.id],jt=at.viewport||O;Ot.setSize(jt.z*N.transmissionResolutionScale,jt.w*N.transmissionResolutionScale);const Ht=N.getRenderTarget(),te=N.getActiveCubeFace(),ee=N.getActiveMipmapLevel();N.setRenderTarget(Ot),N.getClearColor(ht),Mt=N.getClearAlpha(),Mt<1&&N.setClearColor(16777215,.5),N.clear(),Bt&&Pt.render(ot);const Se=N.toneMapping;N.toneMapping=Ia;const ye=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),F.setupLightsView(at),le===!0&&yt.setGlobalState(N.clippingPlanes,at),Cn(A,ot,at),Y.updateMultisampleRenderTarget(Ot),Y.updateRenderTargetMipmap(Ot),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Re=0,pn=X.length;Re<pn;Re++){const mn=X[Re],{object:Ve,geometry:Un,material:ne,group:Kn}=mn;if(ne.side===Xn&&Ve.layers.test(at.layers)){const pe=ne.side;ne.side=vi,ne.needsUpdate=!0,ia(Ve,ot,at,Un,ne,Kn),ne.side=pe,ne.needsUpdate=!0,$t=!0}}$t===!0&&(Y.updateMultisampleRenderTarget(Ot),Y.updateRenderTargetMipmap(Ot))}N.setRenderTarget(Ht,te,ee),N.setClearColor(ht,Mt),ye!==void 0&&(at.viewport=ye),N.toneMapping=Se}function Cn(A,X,ot){const at=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Ot=A.length;$<Ot;$++){const jt=A[$],{object:Ht,geometry:te,group:ee}=jt;let Se=jt.material;Se.allowOverride===!0&&at!==null&&(Se=at),Ht.layers.test(ot.layers)&&ia(Ht,X,ot,te,Se,ee)}}function ia(A,X,ot,at,$,Ot){A.onBeforeRender(N,X,ot,at,$,Ot),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(N,X,ot,at,A,Ot),$.transparent===!0&&$.side===Xn&&$.forceSinglePass===!1?($.side=vi,$.needsUpdate=!0,N.renderBufferDirect(ot,X,at,$,A,Ot),$.side=Is,$.needsUpdate=!0,N.renderBufferDirect(ot,X,at,$,A,Ot),$.side=Xn):N.renderBufferDirect(ot,X,at,$,A,Ot),A.onAfterRender(N,X,ot,at,$,Ot)}function ya(A,X,ot){X.isScene!==!0&&(X=he);const at=b.get(A),$=F.state.lights,Ot=F.state.shadowsArray,jt=$.state.version,Ht=wt.getParameters(A,$.state,Ot,X,ot),te=wt.getProgramCacheKey(Ht);let ee=at.programs;at.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,at.fog=X.fog;const Se=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;at.envMap=dt.get(A.envMap||at.environment,Se),at.envMapRotation=at.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,ee===void 0&&(A.addEventListener("dispose",Fe),ee=new Map,at.programs=ee);let ye=ee.get(te);if(ye!==void 0){if(at.currentProgram===ye&&at.lightsStateVersion===jt)return zs(A,Ht),ye}else Ht.uniforms=wt.getUniforms(A),A.onBeforeCompile(Ht,N),ye=wt.acquireProgram(Ht,te),ee.set(te,ye),at.uniforms=Ht.uniforms;const $t=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=yt.uniform),zs(A,Ht),at.needsLights=Ma(A),at.lightsStateVersion=jt,at.needsLights&&($t.ambientLightColor.value=$.state.ambient,$t.lightProbe.value=$.state.probe,$t.directionalLights.value=$.state.directional,$t.directionalLightShadows.value=$.state.directionalShadow,$t.spotLights.value=$.state.spot,$t.spotLightShadows.value=$.state.spotShadow,$t.rectAreaLights.value=$.state.rectArea,$t.ltc_1.value=$.state.rectAreaLTC1,$t.ltc_2.value=$.state.rectAreaLTC2,$t.pointLights.value=$.state.point,$t.pointLightShadows.value=$.state.pointShadow,$t.hemisphereLights.value=$.state.hemi,$t.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$t.spotLightMatrix.value=$.state.spotLightMatrix,$t.spotLightMap.value=$.state.spotLightMap,$t.pointShadowMatrix.value=$.state.pointShadowMatrix),at.currentProgram=ye,at.uniformsList=null,ye}function Bs(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Gf.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function zs(A,X){const ot=b.get(A);ot.outputColorSpace=X.outputColorSpace,ot.batching=X.batching,ot.batchingColor=X.batchingColor,ot.instancing=X.instancing,ot.instancingColor=X.instancingColor,ot.instancingMorph=X.instancingMorph,ot.skinning=X.skinning,ot.morphTargets=X.morphTargets,ot.morphNormals=X.morphNormals,ot.morphColors=X.morphColors,ot.morphTargetsCount=X.morphTargetsCount,ot.numClippingPlanes=X.numClippingPlanes,ot.numIntersection=X.numClipIntersection,ot.vertexAlphas=X.vertexAlphas,ot.vertexTangents=X.vertexTangents,ot.toneMapping=X.toneMapping}function Hs(A,X,ot,at,$){X.isScene!==!0&&(X=he),Y.resetTextureUnits();const Ot=X.fog,jt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?X.environment:null,Ht=it===null?N.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:go,te=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,ee=dt.get(at.envMap||jt,te),Se=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ye=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),$t=!!ot.morphAttributes.position,Re=!!ot.morphAttributes.normal,pn=!!ot.morphAttributes.color;let mn=Ia;at.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(mn=N.toneMapping);const Ve=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Un=Ve!==void 0?Ve.length:0,ne=b.get(at),Kn=F.state.lights;if(le===!0&&(de===!0||A!==j)){const gn=A===j&&at.id===J;yt.setState(at,A,gn)}let pe=!1;at.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Kn.state.version||ne.outputColorSpace!==Ht||$.isBatchedMesh&&ne.batching===!1||!$.isBatchedMesh&&ne.batching===!0||$.isBatchedMesh&&ne.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ne.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ne.instancing===!1||!$.isInstancedMesh&&ne.instancing===!0||$.isSkinnedMesh&&ne.skinning===!1||!$.isSkinnedMesh&&ne.skinning===!0||$.isInstancedMesh&&ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ne.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ne.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ne.instancingMorph===!1&&$.morphTexture!==null||ne.envMap!==ee||at.fog===!0&&ne.fog!==Ot||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==yt.numPlanes||ne.numIntersection!==yt.numIntersection)||ne.vertexAlphas!==Se||ne.vertexTangents!==ye||ne.morphTargets!==$t||ne.morphNormals!==Re||ne.morphColors!==pn||ne.toneMapping!==mn||ne.morphTargetsCount!==Un)&&(pe=!0):(pe=!0,ne.__version=at.version);let Qn=ne.currentProgram;pe===!0&&(Qn=ya(at,X,$));let di=!1,wn=!1,xn=!1;const Ce=Qn.getUniforms(),on=ne.uniforms;if(Tt.useProgram(Qn.program)&&(di=!0,wn=!0,xn=!0),at.id!==J&&(J=at.id,wn=!0),di||j!==A){Tt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ce.setValue(V,"projectionMatrix",A.projectionMatrix),Ce.setValue(V,"viewMatrix",A.matrixWorldInverse);const ri=Ce.map.cameraPosition;ri!==void 0&&ri.setValue(V,Gt.setFromMatrixPosition(A.matrixWorld)),Vt.logarithmicDepthBuffer&&Ce.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ce.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,wn=!0,xn=!0)}if(ne.needsLights&&(Kn.state.directionalShadowMap.length>0&&Ce.setValue(V,"directionalShadowMap",Kn.state.directionalShadowMap,Y),Kn.state.spotShadowMap.length>0&&Ce.setValue(V,"spotShadowMap",Kn.state.spotShadowMap,Y),Kn.state.pointShadowMap.length>0&&Ce.setValue(V,"pointShadowMap",Kn.state.pointShadowMap,Y)),$.isSkinnedMesh){Ce.setOptional(V,$,"bindMatrix"),Ce.setOptional(V,$,"bindMatrixInverse");const gn=$.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ce.setValue(V,"boneTexture",gn.boneTexture,Y))}$.isBatchedMesh&&(Ce.setOptional(V,$,"batchingTexture"),Ce.setValue(V,"batchingTexture",$._matricesTexture,Y),Ce.setOptional(V,$,"batchingIdTexture"),Ce.setValue(V,"batchingIdTexture",$._indirectTexture,Y),Ce.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Ce.setValue(V,"batchingColorTexture",$._colorsTexture,Y));const Dn=ot.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&kt.update($,ot,Qn),(wn||ne.receiveShadow!==$.receiveShadow)&&(ne.receiveShadow=$.receiveShadow,Ce.setValue(V,"receiveShadow",$.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&X.environment!==null&&(on.envMapIntensity.value=X.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=p2()),wn&&(Ce.setValue(V,"toneMappingExposure",N.toneMappingExposure),ne.needsLights&&Pn(on,xn),Ot&&at.fog===!0&&se.refreshFogUniforms(on,Ot),se.refreshMaterialUniforms(on,at,pt,q,F.state.transmissionRenderTarget[A.id]),Gf.upload(V,Bs(ne),on,Y)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Gf.upload(V,Bs(ne),on,Y),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ce.setValue(V,"center",$.center),Ce.setValue(V,"modelViewMatrix",$.modelViewMatrix),Ce.setValue(V,"normalMatrix",$.normalMatrix),Ce.setValue(V,"modelMatrix",$.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const gn=at.uniformsGroups;for(let ri=0,Si=gn.length;ri<Si;ri++){const Ha=gn[ri];qt.update(Ha,Qn),qt.bind(Ha,Qn)}}return Qn}function Pn(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(A,X,ot){const at=b.get(A);at.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=X,b.get(A.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ot=b.get(A);ot.__webglFramebuffer=X,ot.__useDefaultFramebuffer=X===void 0};const Ui=V.createFramebuffer();this.setRenderTarget=function(A,X=0,ot=0){it=A,G=X,K=ot;let at=null,$=!1,Ot=!1;if(A){const Ht=b.get(A);if(Ht.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(V.FRAMEBUFFER,Ht.__webglFramebuffer),O.copy(A.viewport),P.copy(A.scissor),rt=A.scissorTest,Tt.viewport(O),Tt.scissor(P),Tt.setScissorTest(rt),J=-1;return}else if(Ht.__webglFramebuffer===void 0)Y.setupRenderTarget(A);else if(Ht.__hasExternalTextures)Y.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Se=A.depthTexture;if(Ht.__boundDepthTexture!==Se){if(Se!==null&&b.has(Se)&&(A.width!==Se.image.width||A.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ot=!0);const ee=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?at=ee[X][ot]:at=ee[X],$=!0):A.samples>0&&Y.useMultisampledRTT(A)===!1?at=b.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?at=ee[ot]:at=ee,O.copy(A.viewport),P.copy(A.scissor),rt=A.scissorTest}else O.copy(tt).multiplyScalar(pt).floor(),P.copy(gt).multiplyScalar(pt).floor(),rt=Rt;if(ot!==0&&(at=Ui),Tt.bindFramebuffer(V.FRAMEBUFFER,at)&&Tt.drawBuffers(A,at),Tt.viewport(O),Tt.scissor(P),Tt.setScissorTest(rt),$){const Ht=b.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ht.__webglTexture,ot)}else if(Ot){const Ht=X;for(let te=0;te<A.textures.length;te++){const ee=b.get(A.textures[te]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+te,ee.__webglTexture,ot,Ht)}}else if(A!==null&&ot!==0){const Ht=b.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ht.__webglTexture,ot)}J=-1},this.readRenderTargetPixels=function(A,X,ot,at,$,Ot,jt,Ht=0){if(!(A&&A.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&jt!==void 0&&(te=te[jt]),te){Tt.bindFramebuffer(V.FRAMEBUFFER,te);try{const ee=A.textures[Ht],Se=ee.format,ye=ee.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ht),!Vt.textureFormatReadable(Se)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(ye)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-at&&ot>=0&&ot<=A.height-$&&V.readPixels(X,ot,at,$,Nt.convert(Se),Nt.convert(ye),Ot)}finally{const ee=it!==null?b.get(it).__webglFramebuffer:null;Tt.bindFramebuffer(V.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(A,X,ot,at,$,Ot,jt,Ht=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&jt!==void 0&&(te=te[jt]),te)if(X>=0&&X<=A.width-at&&ot>=0&&ot<=A.height-$){Tt.bindFramebuffer(V.FRAMEBUFFER,te);const ee=A.textures[Ht],Se=ee.format,ye=ee.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ht),!Vt.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,Ot.byteLength,V.STREAM_READ),V.readPixels(X,ot,at,$,Nt.convert(Se),Nt.convert(ye),0);const Re=it!==null?b.get(it).__webglFramebuffer:null;Tt.bindFramebuffer(V.FRAMEBUFFER,Re);const pn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await OM(V,pn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ot),V.deleteBuffer($t),V.deleteSync(pn),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ot=0){const at=Math.pow(2,-ot),$=Math.floor(A.image.width*at),Ot=Math.floor(A.image.height*at),jt=X!==null?X.x:0,Ht=X!==null?X.y:0;Y.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,jt,Ht,$,Ot),Tt.unbindTexture()};const aa=V.createFramebuffer(),Ea=V.createFramebuffer();this.copyTextureToTexture=function(A,X,ot=null,at=null,$=0,Ot=0){let jt,Ht,te,ee,Se,ye,$t,Re,pn;const mn=A.isCompressedTexture?A.mipmaps[Ot]:A.image;if(ot!==null)jt=ot.max.x-ot.min.x,Ht=ot.max.y-ot.min.y,te=ot.isBox3?ot.max.z-ot.min.z:1,ee=ot.min.x,Se=ot.min.y,ye=ot.isBox3?ot.min.z:0;else{const on=Math.pow(2,-$);jt=Math.floor(mn.width*on),Ht=Math.floor(mn.height*on),A.isDataArrayTexture?te=mn.depth:A.isData3DTexture?te=Math.floor(mn.depth*on):te=1,ee=0,Se=0,ye=0}at!==null?($t=at.x,Re=at.y,pn=at.z):($t=0,Re=0,pn=0);const Ve=Nt.convert(X.format),Un=Nt.convert(X.type);let ne;X.isData3DTexture?(Y.setTexture3D(X,0),ne=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Y.setTexture2DArray(X,0),ne=V.TEXTURE_2D_ARRAY):(Y.setTexture2D(X,0),ne=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Kn=V.getParameter(V.UNPACK_ROW_LENGTH),pe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Qn=V.getParameter(V.UNPACK_SKIP_PIXELS),di=V.getParameter(V.UNPACK_SKIP_ROWS),wn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,mn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ee),V.pixelStorei(V.UNPACK_SKIP_ROWS,Se),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ye);const xn=A.isDataArrayTexture||A.isData3DTexture,Ce=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const on=b.get(A),Dn=b.get(X),gn=b.get(on.__renderTarget),ri=b.get(Dn.__renderTarget);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,gn.__webglFramebuffer),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Si=0;Si<te;Si++)xn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(A).__webglTexture,$,ye+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(X).__webglTexture,Ot,pn+Si)),V.blitFramebuffer(ee,Se,jt,Ht,$t,Re,jt,Ht,V.DEPTH_BUFFER_BIT,V.NEAREST);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||b.has(A)){const on=b.get(A),Dn=b.get(X);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,aa),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ea);for(let gn=0;gn<te;gn++)xn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,on.__webglTexture,$,ye+gn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,on.__webglTexture,$),Ce?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Dn.__webglTexture,Ot,pn+gn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dn.__webglTexture,Ot),$!==0?V.blitFramebuffer(ee,Se,jt,Ht,$t,Re,jt,Ht,V.COLOR_BUFFER_BIT,V.NEAREST):Ce?V.copyTexSubImage3D(ne,Ot,$t,Re,pn+gn,ee,Se,jt,Ht):V.copyTexSubImage2D(ne,Ot,$t,Re,ee,Se,jt,Ht);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ce?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(ne,Ot,$t,Re,pn,jt,Ht,te,Ve,Un,mn.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(ne,Ot,$t,Re,pn,jt,Ht,te,Ve,mn.data):V.texSubImage3D(ne,Ot,$t,Re,pn,jt,Ht,te,Ve,Un,mn):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ot,$t,Re,jt,Ht,Ve,Un,mn.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ot,$t,Re,mn.width,mn.height,Ve,mn.data):V.texSubImage2D(V.TEXTURE_2D,Ot,$t,Re,jt,Ht,Ve,Un,mn);V.pixelStorei(V.UNPACK_ROW_LENGTH,Kn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qn),V.pixelStorei(V.UNPACK_SKIP_ROWS,di),V.pixelStorei(V.UNPACK_SKIP_IMAGES,wn),Ot===0&&X.generateMipmaps&&V.generateMipmap(ne),Tt.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&Y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Y.setTextureCube(A,0):A.isData3DTexture?Y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Y.setTexture2DArray(A,0):Y.setTexture2D(A,0),Tt.unbindTexture()},this.resetState=function(){G=0,K=0,it=null,Tt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),i.unpackColorSpace=We._getUnpackColorSpace()}}const m2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Oh,AddEquation:yr,AddOperation:hS,AdditiveBlending:Im,AgXToneMapping:t0,AlphaFormat:o0,AlwaysCompare:yS,AlwaysDepth:Wf,AlwaysStencilFunc:Bm,AmbientLight:zS,ArrayCamera:GS,BackSide:vi,BasicDepthPacking:pS,BasicShadowMap:Wx,Box3:Tr,BoxGeometry:Ar,BufferAttribute:Sa,BufferGeometry:ta,ByteType:i0,Camera:S0,CanvasTexture:Sl,CatmullRomCurve3:NS,CineonToneMapping:Jm,ClampToEdgeWrapping:Ja,Clock:kS,Color:ge,ColorManagement:We,ConstantAlphaFactor:cS,ConstantColorFactor:oS,CubeCamera:HS,CubeDepthTexture:wS,CubeReflectionMapping:br,CubeRefractionMapping:po,CubeTexture:g0,CubeUVReflectionMapping:Yc,CullFaceBack:Om,CullFaceFront:Xx,CullFaceNone:kx,Curve:DS,CustomBlending:qx,CustomToneMapping:$m,Data3DTexture:AS,DataArrayTexture:u0,DataTexture:m0,DepthFormat:es,DepthStencilFormat:Mr,DepthTexture:Rl,DirectionalLight:km,DoubleSide:Xn,DstAlphaFactor:nS,DstColorFactor:aS,EqualCompare:vS,EqualDepth:qf,EquirectangularReflectionMapping:Pf,EquirectangularRefractionMapping:Ff,Euler:$i,EventDispatcher:_o,ExternalTexture:_0,Float32BufferAttribute:si,FloatType:va,Fog:Xc,FrontSide:Is,Frustum:qh,GLSL3:Hm,GreaterCompare:xS,GreaterDepth:Zf,GreaterEqualCompare:Xh,GreaterEqualDepth:jf,Group:xl,HalfFloatType:ts,HemisphereLight:BS,ImageUtils:bS,InstancedBufferAttribute:Vm,InstancedMesh:CS,IntType:Ih,KeepStencilOp:oo,Layers:Yh,LessCompare:_S,LessDepth:Yf,LessEqualCompare:kh,LessEqualDepth:ho,Light:Nl,LinearFilter:ai,LinearMipmapLinearFilter:Us,LinearMipmapNearestFilter:Bf,LinearSRGBColorSpace:go,LinearToneMapping:Km,LinearTransfer:Vc,Material:vo,MathUtils:An,Matrix3:De,Matrix4:fn,MaxEquation:Qx,Mesh:ke,MeshBasicMaterial:Wc,MeshDepthMaterial:PS,MeshDistanceMaterial:FS,MeshLambertMaterial:IS,MeshPhysicalMaterial:lo,MeshStandardMaterial:Ls,MinEquation:Kx,MirroredRepeatWrapping:Qf,MixOperation:fS,MultiplyBlending:Fm,MultiplyOperation:Uh,NearestFilter:ii,NearestMipmapLinearFilter:Uc,NearestMipmapNearestFilter:dS,NeutralToneMapping:e0,NeverCompare:gS,NeverDepth:Xf,NoBlending:$a,NoColorSpace:Ns,NoToneMapping:Ia,NormalBlending:fo,NotEqualCompare:SS,NotEqualDepth:Kf,Object3D:dn,ObjectSpaceNormalMap:mS,OneFactor:$x,OneMinusConstantAlphaFactor:uS,OneMinusConstantColorFactor:lS,OneMinusDstAlphaFactor:iS,OneMinusDstColorFactor:sS,OneMinusSrcAlphaFactor:kf,OneMinusSrcColorFactor:eS,OrthographicCamera:Kh,PCFShadowMap:uo,PCFSoftShadowMap:Yx,PMREMGenerator:Nh,PerspectiveCamera:Ni,Plane:Sr,PlaneGeometry:Qa,PointLight:Gc,Quaternion:Ps,R11_EAC_Format:sh,RED_GREEN_RGTC2_Format:Ch,RED_RGTC1_Format:Ah,REVISION:Lh,RG11_EAC_Format:oh,RGBAFormat:xa,RGBAIntegerFormat:Gh,RGBA_ASTC_10x10_Format:Sh,RGBA_ASTC_10x5_Format:_h,RGBA_ASTC_10x6_Format:vh,RGBA_ASTC_10x8_Format:xh,RGBA_ASTC_12x10_Format:yh,RGBA_ASTC_12x12_Format:Mh,RGBA_ASTC_4x4_Format:ch,RGBA_ASTC_5x4_Format:uh,RGBA_ASTC_5x5_Format:fh,RGBA_ASTC_6x5_Format:hh,RGBA_ASTC_6x6_Format:dh,RGBA_ASTC_8x5_Format:ph,RGBA_ASTC_8x6_Format:mh,RGBA_ASTC_8x8_Format:gh,RGBA_BPTC_Format:Eh,RGBA_ETC2_EAC_Format:ah,RGBA_PVRTC_2BPPV1_Format:eh,RGBA_PVRTC_4BPPV1_Format:th,RGBA_S3TC_DXT1_Format:Pc,RGBA_S3TC_DXT3_Format:Fc,RGBA_S3TC_DXT5_Format:Bc,RGBFormat:l0,RGB_BPTC_SIGNED_Format:bh,RGB_BPTC_UNSIGNED_Format:Th,RGB_ETC1_Format:nh,RGB_ETC2_Format:ih,RGB_PVRTC_2BPPV1_Format:$f,RGB_PVRTC_4BPPV1_Format:Jf,RGB_S3TC_DXT1_Format:Ic,RGFormat:mo,RGIntegerFormat:Hh,RawShaderMaterial:OS,Ray:p0,Raycaster:VS,RedFormat:Bh,RedIntegerFormat:zh,ReinhardToneMapping:Qm,RenderTarget:TS,RepeatWrapping:Ml,ReverseSubtractEquation:Zx,RingGeometry:jh,SIGNED_R11_EAC_Format:rh,SIGNED_RED_GREEN_RGTC2_Format:wh,SIGNED_RED_RGTC1_Format:Rh,SIGNED_RG11_EAC_Format:lh,SRGBColorSpace:Yn,SRGBTransfer:tn,Scene:f0,ShaderChunk:Le,ShaderLib:Ua,ShaderMaterial:Ba,ShortType:a0,Source:Wh,Sphere:Dl,SphereGeometry:Zh,SpotLight:Hf,SrcAlphaFactor:Vf,SrcAlphaSaturateFactor:rS,SrcColorFactor:tS,StaticDrawUsage:zm,SubtractEquation:jx,SubtractiveBlending:Pm,TangentSpaceNormalMap:Vh,Texture:hi,Triangle:_a,UVMapping:n0,Uint16BufferAttribute:h0,Uint32BufferAttribute:d0,UniformsLib:Wt,UniformsUtils:US,UnsignedByteType:Gi,UnsignedInt101111Type:r0,UnsignedInt248Type:bl,UnsignedInt5999Type:s0,UnsignedIntType:Fa,UnsignedShort4444Type:Ph,UnsignedShort5551Type:Fh,UnsignedShortType:El,VSMShadowMap:vl,Vector2:Oe,Vector3:Z,Vector4:Rn,WebGLCoordinateSystem:Oa,WebGLCubeRenderTarget:y0,WebGLRenderTarget:Pa,WebGLRenderer:KS,WebGLUtils:ZS,WebGPUCoordinateSystem:Tl,WebXRController:zf,ZeroFactor:Jx,createCanvasElement:MS,error:Xe,log:Gm,warn:Me,warnOnce:kc},Symbol.toStringTag,{value:"Module"}));class g2 extends f0{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Ar;t.deleteAttribute("uv");const i=new Ls({side:vi}),s=new Ls,l=new Gc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new ke(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new CS(t,s,6),d=new dn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),f.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),f.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),f.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),f.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),f.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),f.setMatrixAt(5,d.matrix),this.add(f);const m=new ke(t,ml(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new ke(t,ml(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new ke(t,ml(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new ke(t,ml(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new ke(t,ml(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new ke(t,ml(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function ml(r){return new IS({color:0,emissive:16777215,emissiveIntensity:r})}const _2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],v2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],x2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],S2=["LOW","MEDIUM","HIGH","EXTREME"],y2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],M2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],E2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},b2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},T2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},A2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},R2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function QS(r){return(r-90)*Math.PI/180}function C2(r,t,i,s){const l=QS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function gl(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function JS(r){gl("subject",r.subject,_2),gl("domain",r.domain,v2),gl("verb",r.verb,x2),gl("magnitude",r.magnitude,S2),gl("time",r.time,y2),gl("certainty",r.certainty,M2)}function w2(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=R2[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return JS(s),s}function D2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),d=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,d=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,d):r.lineTo(f,d)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Dc(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,d=Math.sqrt(c*c+f*f)||1,m=c/d,p=f/d,_=-p,v=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+v*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-v*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function Nc(r,t,i,s,l,c){const f=A2[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let d=1;d<=f;d+=1){const m=d/(f+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const v=1-m;p=v*v*i.x+2*v*m*c.x+m*m*s.x,_=v*v*i.y+2*v*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function N2(r,t,i){JS(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,d=l*.5,m=i?.backgroundColor,p=i?.lineColor,_=i?.gridColor;r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,d,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(f,d,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,d,c*.12,0,Math.PI*2),r.stroke();const v=E2[t.domain],g=b2[t.time]*c,y=T2[t.magnitude]*c,E=C2(f,d,g,v),w=QS(v),M=Math.cos(w),S=Math.sin(w),C=-S,L=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let D={x:E.x,y:E.y},F={x:E.x+M*y,y:E.y+S*y},B;if(t.verb==="EXISTS")D={x:E.x-C*(y*.48),y:E.y-L*(y*.48)},F={x:E.x+C*(y*.48),y:E.y+L*(y*.48)},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(F.x,F.y),r.stroke(),Nc(r,t,D,F,p);else if(t.verb==="DECLINES")F={x:E.x-M*y,y:E.y-S*y},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(F.x,F.y),r.stroke(),Dc(r,D,F,p,7),Nc(r,t,D,F,p);else if(t.verb==="TRANSFORMS")B={x:E.x+C*(y*.34)+M*(y*.34),y:E.y+L*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(D.x,D.y),r.quadraticCurveTo(B.x,B.y,F.x,F.y),r.stroke(),Dc(r,B,F,p,7),Nc(r,t,D,F,p,B);else if(t.verb==="INFLUENCES"){const T={x:E.x+C*3.4,y:E.y+L*3.4},N={x:F.x+C*3.4,y:F.y+L*3.4},ft={x:E.x-C*3.4,y:E.y-L*3.4},G={x:F.x-C*3.4,y:F.y-L*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(N.x,N.y),r.moveTo(ft.x,ft.y),r.lineTo(G.x,G.y),r.stroke(),Dc(r,T,N,p,6.6),Dc(r,ft,G,p,6.6),Nc(r,t,T,N,p)}else r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(F.x,F.y),r.stroke(),Dc(r,D,F,p,7),Nc(r,t,D,F,p);r.fillStyle=p,r.beginPath(),r.arc(f,d,5,0,Math.PI*2),r.fill(),D2(r,t.subject,E,p)}function L2(r,t,i){const s=w2(t);N2(r,s,i)}const Ix="intelligenspartiet:language",U2={nb:{siteName:"INTELLIGENSPARTIET",languageLabel:"Språk",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Videoer",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideBack:"Tilbake",outsideVideosTitle:"Videoer",outsideVideosBody:"Et sekskantrom med video på hver flate.",outsideSignaturesTitle:"Signaturer",outsideSignaturesBody:"Denne funksjonen kommer. Ta kontakt hvis du vil engasjere deg.",outsideSignaturesContact:"Kontakt Lars",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",languageLabel:"Language",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Videos",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideBack:"Back",outsideVideosTitle:"Videos",outsideVideosBody:"A hexagon room with one video on each wall.",outsideSignaturesTitle:"Signatures",outsideSignaturesBody:"This feature is coming. Reach out if you want to get involved.",outsideSignaturesContact:"Contact Lars",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},O2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},Rm=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:O2}),Df=[Rm("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),Rm("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),Rm("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],I2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim().toUpperCase(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),La=r=>{let t=r%1;return t<0&&(t+=1),t},P2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),La(r+l*(1-Math.exp(-i*s)))},Px=12,Cm=9,wm=.12,Fx=-1,Dm=2.4,F2=.3,B2=1.2,z2=.3,Bx=6741503,H2=5,G2=3.2,V2=.35,k2=.25,zx=400,X2=2.5,Hx=16755251,Nf=3,W2=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],Nm=[{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1770978482749-c088b297-1ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770978437489-d0299c39-WelhavenTheater.png"},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],M0=17.6,$S=M0*(16/9),ty=$S*Math.sqrt(3)/2,Y2=.56,q2=31.2,Lf=ty*2.62,Gx=M0*.56,j2=60,Z2=40,K2=220,Q2=360,J2=105,$2=.75,Vx=96,qm=[330,250,180,120],tR=[2,3.2,4.8,6.2],eR=[.12,.17,.22,.3],Uf={tailPath:"",taperPaths:qm.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},Lm=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],d=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${d} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},nR=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),iR=(r,t,i,s,l,c)=>{ey(r,t,l).forEach((d,m)=>{r.fillText(d,i,s+m*c)})},ey=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const d=s[f];if(!d)continue;const m=`${c}${d} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${d} `):c=m}return c.trim()&&l.push(c.trim()),l},aR=/\(\s*bold\s*\)/gi,sR=/\(\s*new\s*line\s*\)/gi,rR=/\(\s*new\s*paragraph\s*\)/gi,oR=r=>{const i=r.replace(/\r\n?/g,`
`).replace(rR,`

`).replace(sR,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const d=/\(\s*bold\s*\)/i.test(c),m=c.replace(aR,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:d,paragraphBreak:s}),s=!1}),l},lR=(r,t,i,s,l,c,f,d,m=.6)=>{const p=oR(t);let _=s;p.forEach((v,g)=>{g>0&&v.paragraphBreak&&(_+=c*m),r.font=v.bold?d:f,ey(r,v.text,l).forEach(E=>{r.fillText(E,i,_),_+=c})}),r.font=f},cR=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,ny=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),uR=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),fR=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],hR=new Map(fR.map(([r,t])=>[ny(r),t])),dR=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],pR=dR.map(([r,t])=>[new RegExp(uR(r),"gi"),t]),mR={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},gR=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),_R=r=>{let t=r;return pR.forEach(([i,s])=>{t=t.replace(i,s)}),t},vR=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=mR[t.toLowerCase()];return i?gR(t,i):t}),xR=r=>{const t=r.trim();return t?(hR.get(ny(t))??vR(_R(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},SR=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(cR,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>xR(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},Of=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},jm=Math.PI*2,ro=r=>Math.min(1,Math.max(0,r)),Lc=(r,t,i,s,l)=>{const c=jm*(r*i+s),f=jm*(t*i+l),d=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return d+m},If=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Sl(s)},ga=(r,t,i,s,l=!1)=>{r.wrapS=Ml,r.wrapT=Ml,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=Us,r.magFilter=ai,l&&(r.colorSpace=Yn),r.needsUpdate=!0},Um=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:d,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:v,seamDepth:g,seamWidth:y,roughnessBase:E,roughnessRange:w,normalStrength:M,aoStrength:S}=r,C=t*i,L=new ge(l),D=new Float32Array(C);let F=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY;for(let J=0;J<i;J+=1)for(let j=0;j<t;j+=1){const O=J*t+j,P=j/t,rt=J/i,ht=Lc(P,rt,c,s*.11,s*.23),Mt=Lc(P,rt,f,s*.41+.18,s*.29+.07),I=Lc(P,rt,d,s*.71+.43,s*.53+.31),q=Math.sin(jm*((P+rt*.33)*m+s*.17));let pt=0;if(_!=="none"&&v>0){const tt=(_==="x"?P:rt)*v%1,gt=Math.min(tt,1-tt);pt=Math.exp(-Math.pow(gt/Math.max(1e-4,y),2))}const Ct=ht*.6+Mt*.28+I*.12+q*p-pt*g;D[O]=Ct,Ct<F&&(F=Ct),Ct>B&&(B=Ct)}const z=new Float32Array(C),T=Math.max(1e-4,B-F),N=new Uint8ClampedArray(C*4),ft=new Uint8ClampedArray(C*4),G=new Uint8ClampedArray(C*4);for(let J=0;J<i;J+=1)for(let j=0;j<t;j+=1){const O=J*t+j,P=O*4,rt=j/t,ht=J/i,Mt=ro((D[O]-F)/T);z[O]=Mt;const I=Lc(rt,ht,f*.6,s*.19+.62,s*.73+.14)*.5+.5,q=ro(.78+(Mt-.5)*.24+(I-.5)*.12),pt=Lc(rt,ht,c*.5,s*.37+.89,s*.13+.44),Ct=1+pt*.017,Xt=1+pt*.007,tt=1-pt*.013,gt=ro(E+(1-Mt)*w+(I-.5)*.14),Rt=ro(.94-(1-Mt)*S);N[P]=Math.round(ro(L.r*q*Ct)*255),N[P+1]=Math.round(ro(L.g*q*Xt)*255),N[P+2]=Math.round(ro(L.b*q*tt)*255),N[P+3]=255;const Kt=Math.round(gt*255);ft[P]=Kt,ft[P+1]=Kt,ft[P+2]=Kt,ft[P+3]=255;const le=Math.round(Rt*255);G[P]=le,G[P+1]=le,G[P+2]=le,G[P+3]=255}const K=(J,j)=>{const O=(J+t)%t,P=(j+i)%i;return z[P*t+O]},it=new Uint8ClampedArray(C*4);for(let J=0;J<i;J+=1)for(let j=0;j<t;j+=1){const P=(J*t+j)*4,rt=K(j+1,J)-K(j-1,J),ht=K(j,J+1)-K(j,J-1),Mt=-rt*M,I=-ht*M,q=1,pt=1/Math.hypot(Mt,I,q);it[P]=Math.round((Mt*pt*.5+.5)*255),it[P+1]=Math.round((I*pt*.5+.5)*255),it[P+2]=Math.round((q*pt*.5+.5)*255),it[P+3]=255}return{albedo:If(N,t,i),normal:If(it,t,i),roughness:If(ft,t,i),ao:If(G,t,i)}},yR=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const d=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=d*255,c/=d*255,f/=d*255;const m=l*.2126+c*.7152+f*.0722;return{color:new ge(l,c,f),luminance:m}};function MR(){const r=me.useRef([]),t=me.useRef(null),[i,s]=me.useState(!1),[l,c]=me.useState({width:1,height:1}),[f,d]=me.useState(Uf);return me.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),_=window.matchMedia("(pointer: coarse)"),v=()=>{s(!m.matches&&p.matches&&!_.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},y=()=>{v()},E=(C,L)=>typeof C.addEventListener=="function"?(C.addEventListener("change",L),()=>C.removeEventListener("change",L)):(C.addListener(L),()=>C.removeListener(L));v(),g();const w=E(m,y),M=E(p,y),S=E(_,y);return window.addEventListener("resize",g,{passive:!0}),()=>{w(),M(),S(),window.removeEventListener("resize",g)}},[]),me.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],d(Uf);return}const m=_=>{if(_.pointerType!=="mouse"&&_.pointerType!=="pen")return;const v={x:_.clientX,y:_.clientY,t:performance.now()},g=r.current,y=g[g.length-1];if(y){const E=v.x-y.x,w=v.y-y.y;if(Math.hypot(E,w)<$2)return}g.push(v),g.length>Vx&&g.splice(0,g.length-Vx)},p=()=>{const _=performance.now(),v=_-Q2,g=r.current;let y=0;for(;y<g.length&&g[y].t<v;)y+=1;if(y>0&&g.splice(0,y),g.length<2)d(E=>E.visible?Uf:E);else{const E=Lm(g),w=qm.map(F=>{const B=_-F;let z=g.length-1;for(;z>0&&g[z-1].t>=B;)z-=1;const T=g.slice(z);return Lm(T.length>=2?T:g.slice(-2))}),M=_-J2;let S=g.length-1;for(;S>0&&g[S-1].t>=M;)S-=1;let C=g.slice(S);C.length<2&&(C=g.slice(-2));const L=Lm(C),D=C[C.length-1]??g[g.length-1];d(F=>F.visible&&F.tailPath===E&&F.taperPaths.every((B,z)=>B===w[z])&&F.headPath===L&&F.headX===D.x&&F.headY===D.y?F:{tailPath:E,taperPaths:w,headPath:L,headX:D.x,headY:D.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],d(Uf)}},[i]),i?Ft.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[Ft.jsxs("defs",{children:[Ft.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Ft.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),Ft.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),Ft.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[Ft.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),Ft.jsxs("feMerge",{children:[Ft.jsx("feMergeNode",{in:"blur"}),Ft.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?Ft.jsxs(Ft.Fragment,{children:[Ft.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?Ft.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:eR[p],strokeWidth:tR[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${qm[p]}`):null),Ft.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),Ft.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function ER(){const r=me.useRef(null),t=me.useRef([]),i=me.useRef(wm),s=me.useRef(wm),l=me.useRef([]),c=me.useRef(null);me.useEffect(()=>{const xt=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=xt,document.documentElement.style.overscrollBehavior=""}},[]);const[f,d]=me.useState(Df),[m,p]=me.useState([]),[_,v]=me.useState(Df[0].id),[g,y]=me.useState(!0),[E,w]=me.useState(!1),[M,S]=me.useState(!1),[C,L]=me.useState("menu"),[D,F]=me.useState([]),[B,z]=me.useState(!1),[T,N]=me.useState(""),[ft,G]=me.useState(0),[K,it]=me.useState(()=>{if(typeof window>"u")return"nb";try{const xt=window.localStorage.getItem(Ix);if(xt==="nb"||xt==="en")return xt}catch{}return"nb"});me.useEffect(()=>{try{window.localStorage.setItem(Ix,K)}catch{}},[K]);const J=U2[K],j=me.useMemo(()=>xt=>K==="nb"?SR(xt):xt,[K]),O=me.useCallback(()=>{c.current?.()},[]),P=me.useRef(0),rt=me.useRef(0),ht=me.useRef(null),Mt=me.useCallback(xt=>{const Gt=xt>=0?1:-1;G(It=>{const he=Nm.length;return(It+Gt+he)%he})},[]),I=me.useCallback(xt=>{xt.preventDefault();const Gt=Math.abs(xt.deltaX)>Math.abs(xt.deltaY)?xt.deltaX:xt.deltaY;P.current+=Gt;const It=performance.now();It-rt.current<K2||Math.abs(P.current)<Z2||(Mt(P.current>0?1:-1),P.current=0,rt.current=It)},[Mt]),q=me.useCallback(xt=>{ht.current=xt.touches[0]?.clientX??null},[]),pt=me.useCallback(xt=>{const Gt=ht.current,It=xt.changedTouches[0]?.clientX??null;if(ht.current=null,Gt===null||It===null)return;const he=It-Gt;Math.abs(he)<28||Mt(he<0?1:-1)},[Mt]);me.useEffect(()=>{M||L("menu")},[M]),me.useEffect(()=>{C==="videos"&&(P.current=0,rt.current=0)},[C]),me.useEffect(()=>{if(!M||C!=="videos")return;let xt=!1;const Gt=()=>{xt||l.current.forEach(he=>{if(!he||!he.paused&&he.readyState>=2)return;const Bt=he.play();Bt&&typeof Bt.catch=="function"&&Bt.catch(()=>{})})};Gt();const It=window.setInterval(Gt,900);return()=>{xt=!0,window.clearInterval(It)}},[M,C]),me.useEffect(()=>{if(!M||C!=="news")return;let xt=!1;const Gt=Bt=>({title:String(Bt?.title??"").trim(),source:String(Bt?.source??"").trim(),url:String(Bt?.url??"").trim(),snippet:String(Bt?.snippet??"").trim(),published_at:String(Bt?.published_at??"").trim(),published:Bt?.published!==!1}),It=Bt=>{const Ee=Date.parse(Bt);return Number.isFinite(Ee)?Ee:0};return(async()=>{z(!0),N("");for(const Bt of W2)try{const Ee=await fetch(Bt,{cache:"no-store"});if(!Ee.ok)continue;const V=await Ee.json();if(!Array.isArray(V?.items))continue;const Qt=V.items.map(Gt).filter(Lt=>Lt.published&&Lt.title&&Lt.url).sort((Lt,Vt)=>It(Vt.published_at)-It(Lt.published_at));if(xt)return;F(Qt),z(!1);return}catch{}xt||(F([]),N(J.outsideNewsError),z(!1))})(),()=>{xt=!0}},[M,C,J.outsideNewsError]),me.useEffect(()=>{let xt=!1;return(async()=>{try{const It=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),he=It.headers.get("content-type")??"";if(!It.ok)throw new Error(`HTTP ${It.status} while loading glyph language map`);if(!he.toLowerCase().includes("application/json")){const V=await It.text();throw new Error(`Expected JSON but got '${he||"unknown"}' (${V.slice(0,120)})`)}const Bt=await It.json();if(!Array.isArray(Bt?.items))throw new Error("Glyph language payload missing 'items' array");const Ee=Bt.items.map((V,Qt)=>I2(V,Qt)).filter(V=>V.enabled!==!1);if(xt)return;p(Ee)}catch(It){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",It),xt)return;p([])}})(),()=>{xt=!0}},[]);const Ct=me.useMemo(()=>m.filter(xt=>xt.enabled!==!1&&typeof xt.canonical=="string"&&xt.canonical.trim().length>0),[m]),Xt=me.useMemo(()=>{const xt=new Map;if(!f.length||!Ct.length)return xt;const Gt=Bt=>{const Ee=La(Bt);return La(wm-Ee)},It=[...f].sort((Bt,Ee)=>{const V=typeof Bt.installation?.placement_t=="number"?Bt.installation.placement_t:0,Qt=typeof Ee.installation?.placement_t=="number"?Ee.installation.placement_t:0,Lt=Gt(V),Vt=Gt(Qt);return Lt===Vt?Bt.id.localeCompare(Ee.id):Lt-Vt}),he=Math.min(It.length,Ct.length);for(let Bt=0;Bt<he;Bt+=1)xt.set(It[Bt].id,Ct[Bt]);return xt},[f,Ct]),tt=me.useMemo(()=>{const xt=new Map;return Xt.forEach((Gt,It)=>{Gt.canonical&&xt.set(It,Gt.canonical)}),xt},[Xt]),gt=me.useMemo(()=>{const xt=new Map;return Xt.forEach((Gt,It)=>{xt.set(It,{label:Gt.label||"",note:Gt.note||"",labelNb:Gt.label_nb||"",noteNb:Gt.note_nb||""})}),xt},[Xt]);me.useEffect(()=>{let xt=!1;return(async()=>{y(!0),w(!1);try{const It=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),he=It.headers.get("content-type")??"";if(!It.ok)throw new Error(`HTTP ${It.status} while loading panel data`);if(!he.toLowerCase().includes("application/json")){const Vt=await It.text();throw new Error(`Expected JSON but got '${he||"unknown"}' (${Vt.slice(0,120)})`)}const Bt=await It.json();if(!Array.isArray(Bt?.panels))throw new Error("Panel payload missing 'panels' array");const Ee=typeof Bt.media_root=="string"?Bt.media_root.replace(/\/+$/,""):"",V=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",Qt=Vt=>/^https?:\/\//i.test(Vt)&&V?`/proxy?url=${encodeURIComponent(Vt)}`:Vt,Lt=Bt.panels.map(Vt=>{const Tt=typeof Vt?.source=="string"?Vt.source.replace(/^\/+/,""):"",U=Tt?Ee?`${Ee}/${Tt}`:`/${Tt}`:void 0,b=U?Qt(U):void 0,Y=typeof Vt?.poster=="string"?Vt.poster.replace(/^\/+/,""):"",dt=Y?Ee?`${Ee}/${Y}`:`/${Y}`:void 0,St=dt?Qt(dt):void 0,ct=Vt?.type==="image"||Vt?.type==="video"?Vt.type:"text",Yt=Vt?.content??{},wt=String(Yt?.title??"Untitled").trim()||"Untitled",se=String(Yt?.description??"").trim(),ie=String(Yt?.title_nb??Yt?.title_no??"").trim(),bt=String(Yt?.description_nb??Yt?.description_no??"").trim(),yt=String(Yt?.title_en??"").trim(),zt=String(Yt?.description_en??"").trim();return{...Vt,kind:ct,type:ct,title:wt,body:se,title_nb:ie||wt,body_nb:bt||se,title_en:yt,body_en:zt,cta:Yt?.cta,poster:St,image:ct==="image"?b:void 0,video:ct==="video"?b:void 0}});if(Lt.length===0)throw new Error("Panel payload contained 0 panels");if(xt)return;d(Lt),v(Lt[0].id)}catch(It){if(console.error("Failed to load panels; using fallback data.",It),xt)return;d(Df),v(Df[0].id),w(!0)}finally{xt||y(!1)}})(),()=>{xt=!0}},[]);const Rt=me.useMemo(()=>f.find(xt=>xt.id===_)??f[0]??{title:"",body:""},[_,f]),Kt=me.useMemo(()=>xt=>{const Gt=gt.get(xt.id);if(K==="nb"){const Bt=Of(Gt?.labelNb,xt.title_nb,j(Gt?.label||""),j(xt.title||"")),Ee=Of(Gt?.noteNb,xt.body_nb,j(Gt?.note||""),j(xt.body||""));return{title:Bt||"Mangler norsk tittel",body:Ee||"Mangler norsk tekst."}}const It=Of(Gt?.label,xt.title_en),he=Of(Gt?.note,xt.body_en);return{title:It||"Missing English title",body:he||"Missing English text."}},[gt,K,j]),le=me.useMemo(()=>Kt(Rt).title,[Rt,Kt]),de=me.useMemo(()=>new Intl.DateTimeFormat(K==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[K]);return me.useEffect(()=>{if(f.length===0)return;const xt=r.current;if(!xt)return;c.current=null,S(!1);let Gt=!1,It=()=>{};return(()=>{if(Gt||!xt)return;t.current=[];const Bt=window.matchMedia("(prefers-reduced-motion: reduce)"),Ee=window.matchMedia("(max-width: 767px)"),V=Bt.matches,Qt=Ee.matches,Lt=new f0;Lt.background=new ge(987671),Lt.fog=new Xc(987671,38,230);const Vt=new Ni(Qt?72:64,xt.clientWidth/xt.clientHeight,.1,1200),Tt=new KS({antialias:!Qt,alpha:!1,powerPreference:"high-performance"});Tt.setPixelRatio(Math.min(window.devicePixelRatio,Qt?1:1.5)),Tt.setSize(xt.clientWidth,xt.clientHeight),Tt.outputColorSpace=Yn,Tt.toneMapping=Oh,Tt.toneMappingExposure=Qt?.76:.72,Tt.shadowMap.enabled=!Qt,Tt.shadowMap.type=uo,xt.appendChild(Tt.domElement);let U=!1;const b=Et=>{U!==Et&&(U=Et,Tt.shadowMap.type=Et?Wx:uo,Tt.shadowMap.needsUpdate=!0)},Y=new Nh(Tt),dt=Y.fromScene(new g2,.06);Lt.environment=dt.texture;const St=new zS(16185599,.05);Lt.add(St);const ct=new BS(14739442,1777446,.08);Lt.add(ct);const Yt=nR(m2),wt=new NS(Yt,!0,"catmullrom",.17),se=Qt?180:300,ie=Math.min(8,Tt.capabilities.getMaxAnisotropy()),bt=Qt?256:512,yt=Um({width:bt,height:bt,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});ga(yt.albedo,4.8,24,ie,!0),ga(yt.normal,4.8,24,ie),ga(yt.roughness,4.8,24,ie),ga(yt.ao,4.8,24,ie);const zt=Um({width:bt,height:bt,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});ga(zt.albedo,2.2,24,ie,!0),ga(zt.normal,2.2,24,ie),ga(zt.roughness,2.2,24,ie),ga(zt.ao,2.2,24,ie);const Pt=Um({width:bt,height:bt,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});ga(Pt.albedo,3.4,24,ie,!0),ga(Pt.normal,3.4,24,ie),ga(Pt.roughness,3.4,24,ie),ga(Pt.ao,3.4,24,ie);const kt=new lo({color:9607586,map:yt.albedo,normalMap:yt.normal,normalScale:new Oe(.32,.32),roughnessMap:yt.roughness,roughness:.38,metalness:0,aoMap:yt.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Xn}),ve=new lo({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Xn}),k=new lo({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new ge(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Xn}),Nt=()=>{const Et=[],oe=new Z(0,1,0);let ce=new Z(1,0,0);for(let Ut=0;Ut<=se;Ut+=1){const Fn=Ut/se,Ii=wt.getPointAt(Fn),ba=Fn===1?Ii.clone().sub(wt.getPointAt(Fn-.001)).normalize():wt.getPointAt(Fn+.001).sub(Ii).normalize();let Bn=new Z().crossVectors(ba,oe).normalize();Bn.lengthSq()<1e-4&&(Bn=ce.clone()),Bn.dot(ce)<0&&Bn.multiplyScalar(-1),ce=Bn.clone();const bi=new Z().crossVectors(Bn,ba).normalize();Et.push({pt:Ii,right:Bn,up:bi,t:Fn})}const re=(Ut,Fn,Ii=!1)=>{const ba=[],Bn=[],bi=[];for(let pi=0;pi<=se;pi+=1){const $n=Et[pi],Ti=Ut($n),Te=Fn($n);ba.push(Ti.x,Ti.y,Ti.z,Te.x,Te.y,Te.z),Bn.push(0,$n.t,1,$n.t)}for(let pi=0;pi<se;pi+=1){const $n=pi*2,Ti=$n+1,Te=$n+2,$e=$n+3;Ii?bi.push($n,Te,Ti,Te,$e,Ti):bi.push($n,Ti,Te,Te,Ti,$e)}const Ta=new ta;Ta.setAttribute("position",new si(ba,3));const Xi=new si(Bn,2);return Ta.setAttribute("uv",Xi),Ta.setAttribute("uv2",Xi.clone()),Ta.setIndex(bi),Ta.computeVertexNormals(),Ta},Zt=Px*.5,be=Cm*.5,qe=re(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-be)).add(Ut.right.clone().multiplyScalar(-Zt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-be)).add(Ut.right.clone().multiplyScalar(Zt))),en=re(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be)).add(Ut.right.clone().multiplyScalar(-Zt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be)).add(Ut.right.clone().multiplyScalar(Zt)),!0),nn=re(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-be)).add(Ut.right.clone().multiplyScalar(-Zt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be)).add(Ut.right.clone().multiplyScalar(-Zt)),!0),Mi=re(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-be)).add(Ut.right.clone().multiplyScalar(Zt)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be)).add(Ut.right.clone().multiplyScalar(Zt))),oi=.08,vn=.015,He=re(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be-oi)).add(Ut.right.clone().multiplyScalar(-Zt+vn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be)).add(Ut.right.clone().multiplyScalar(-Zt+vn)),!0),an=re(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be-oi)).add(Ut.right.clone().multiplyScalar(Zt-vn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be)).add(Ut.right.clone().multiplyScalar(Zt-vn)),!1),je=.22,Sn=.018,ki=re(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-be)).add(Ut.right.clone().multiplyScalar(-Zt+Sn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-be+je)).add(Ut.right.clone().multiplyScalar(-Zt+Sn)),!0),ks=re(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-be)).add(Ut.right.clone().multiplyScalar(Zt-Sn)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(-be+je)).add(Ut.right.clone().multiplyScalar(Zt-Sn)),!1),Ei=.14,ka=re(Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be-.05)).add(Ut.right.clone().multiplyScalar(-Ei)),Ut=>Ut.pt.clone().add(Ut.up.clone().multiplyScalar(be-.05)).add(Ut.right.clone().multiplyScalar(Ei)),!0);return{floorGeo:qe,ceilGeo:en,leftGeo:nn,rightGeo:Mi,leftSkirtGeo:ki,rightSkirtGeo:ks,trackRailGeo:ka,leftCrownGeo:He,rightCrownGeo:an}},{floorGeo:Dt,ceilGeo:qt,leftGeo:At,rightGeo:ut,leftSkirtGeo:Jt,rightSkirtGeo:xe,trackRailGeo:Ye,leftCrownGeo:Fe,rightCrownGeo:Zn}=Nt(),xi=new ke(Dt,kt),ns=new ke(qt,k),ea=new ke(At,ve),za=new ke(ut,ve),Fs=new lo({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),na=new Ls({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Xn}),Vi=new ke(Jt,na),is=new ke(xe,na);Vi.receiveShadow=!0,is.receiveShadow=!0;const Li=new ke(Fe,na),Tn=new ke(Zn,na);Li.receiveShadow=!1,Tn.receiveShadow=!1;const Cn=new lo({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Xn}),ia=new ke(Ye,Cn);ia.receiveShadow=!1,xi.receiveShadow=!0,xi.castShadow=!0,ns.receiveShadow=!0,ns.castShadow=!0,ea&&(ea.receiveShadow=!0,ea.castShadow=!0),za&&(za.receiveShadow=!0,za.castShadow=!0),Lt.add(xi),Lt.add(ns),ea&&Lt.add(ea),za&&Lt.add(za),Lt.add(Vi),Lt.add(is),Lt.add(Li),Lt.add(Tn),Lt.add(ia);const ya=new Z(0,1,0),Bs=new dn,zs=new dn,Hs=new dn;Lt.add(Bs),Lt.add(zs),Lt.add(Hs);const Pn=new Hf(16773598,Qt?16:24,34,Math.PI/8.4,.44,2);Pn.target=Bs,Pn.castShadow=!Qt,Pn.castShadow&&(Pn.shadow.mapSize.width=2048,Pn.shadow.mapSize.height=2048,Pn.shadow.bias=-35e-5,Pn.shadow.normalBias=.012,Pn.shadow.camera.near=.4,Pn.shadow.camera.far=34),Lt.add(Pn);const Ma=new Hf(12571903,Qt?6:9,34,Math.PI/6.5,.68,2);Ma.target=zs,Ma.castShadow=!1,Lt.add(Ma);const Ui=new Hf(14083583,Qt?5:7,28,Math.PI/7.8,.6,2);Ui.target=Hs,Ui.castShadow=!1,Lt.add(Ui);const aa=new dn,Ea=new dn;Lt.add(aa),Lt.add(Ea);const A=new km(16774374,0);if(A.target=aa,A.castShadow=!Qt,A.castShadow){A.shadow.mapSize.width=4096,A.shadow.mapSize.height=4096,A.shadow.bias=-8e-5,A.shadow.normalBias=.0012,A.shadow.radius=0;const Et=Qt?250:220;A.shadow.camera.left=-Et,A.shadow.camera.right=Et,A.shadow.camera.top=Et,A.shadow.camera.bottom=-Et,A.shadow.camera.near=25,A.shadow.camera.far=980}Lt.add(A);const X=new km(9090280,0);X.target=Ea,Lt.add(X),Dt.computeBoundingBox(),Dt.computeBoundingSphere(),qt.computeBoundingBox(),qt.computeBoundingSphere(),At.computeBoundingBox(),At.computeBoundingSphere(),ut.computeBoundingBox(),ut.computeBoundingSphere();const at=f.some(Et=>Et.installation?.mount_type==="continuous_led_wall"||Et.installation?.mount_type==="jutting_half_wall")?f:Qt?f.filter((Et,oe)=>oe%2===0):f,$=[],Ot=[],jt=[],Ht=[],te=[],ee=[],Se=[],ye=Et=>{if(!Et.paused&&Et.currentTime>0)return;const oe=Et.play();oe&&typeof oe.catch=="function"&&oe.catch(()=>{})},$t=setInterval(()=>{let Et=!0;ee.forEach(oe=>{(oe.paused||oe.readyState<2)&&(Et=!1,ye(oe))}),Et&&ee.length>0&&clearInterval($t)},500);te.push(()=>clearInterval($t));const Re=new Ar(1,1,.2),pn=new Qa(.82,.82),mn=new lo({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),Ve=(Et,oe)=>{const re=document.createElement("canvas");re.width=512,re.height=512;const Zt=re.getContext("2d");Zt.clearRect(0,0,512,512);const be=tt.get(oe);if(be)try{L2(Zt,be,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const an=new Sl(re);return an.colorSpace=Yn,an}catch(an){console.warn(`Invalid glyph canonical sentence for panel '${oe}': '${be}'. Falling back to procedural glyph.`,an)}const qe=512/2,en=512/2,nn=Et*137.508;Zt.fillStyle="rgba(6,14,24,0.7)",Zt.beginPath(),Zt.arc(qe,en,512*.42,0,Math.PI*2),Zt.fill(),Zt.strokeStyle="rgba(102,221,255,0.95)",Zt.lineWidth=2.5,Zt.lineCap="round",Zt.beginPath(),Zt.arc(qe,en,512*.38,0,Math.PI*2),Zt.stroke();const Mi=3+Et%4;for(let an=0;an<Mi;an++){const je=an/Mi*Math.PI*2+nn,Sn=512*.08,ki=512*.32;Zt.beginPath(),Zt.moveTo(qe+Math.cos(je)*Sn,en+Math.sin(je)*Sn),Zt.lineTo(qe+Math.cos(je)*ki,en+Math.sin(je)*ki),Zt.stroke()}const oi=2+Et%3;for(let an=0;an<oi;an++){const je=512*(.15+an*.09),Sn=nn+an*1.2;Zt.beginPath(),Zt.arc(qe,en,je,Sn,Sn+Math.PI*(.4+Et%3*.2)),Zt.stroke()}Zt.fillStyle="rgba(102,221,255,0.85)";const vn=3+Et%5;for(let an=0;an<vn;an++){const je=nn+an/vn*Math.PI*2,Sn=512*(.2+an%3*.06);Zt.beginPath(),Zt.arc(qe+Math.cos(je)*Sn,en+Math.sin(je)*Sn,4,0,Math.PI*2),Zt.fill()}Zt.strokeStyle="rgba(102,221,255,0.5)",Zt.lineWidth=1.5,Zt.beginPath(),Zt.arc(qe,en,512*.12,0,Math.PI*2),Zt.stroke(),Zt.fillStyle="rgba(102,221,255,0.95)",Zt.beginPath(),Zt.arc(qe,en,6,0,Math.PI*2),Zt.fill();const He=new Sl(re);return He.colorSpace=Yn,He},Un=(Et,oe)=>{const ce=document.createElement("canvas");ce.width=1024,ce.height=640;const re=ce.getContext("2d");re.fillStyle="rgba(8,12,18,0.88)",re.beginPath(),re.roundRect(16,16,992,608,24),re.fill(),re.strokeStyle="rgba(102,221,255,0.25)",re.lineWidth=2,re.beginPath(),re.roundRect(16,16,992,608,24),re.stroke(),re.fillStyle="rgba(102,221,255,0.95)",re.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",iR(re,Et.toUpperCase(),60,100,900,58),re.strokeStyle="rgba(102,221,255,0.3)",re.lineWidth=2,re.beginPath(),re.moveTo(60,180),re.lineTo(960,180),re.stroke(),re.fillStyle="rgba(220,230,240,0.9)";const Zt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",be="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";re.font=Zt,lR(re,oe,60,230,900,42,Zt,be);const qe=new Sl(ce);return qe.colorSpace=Yn,qe},ne=()=>{const oe=document.createElement("canvas");oe.width=512,oe.height=512;const ce=oe.getContext("2d"),re=512/2,Zt=512/2;ce.beginPath(),ce.arc(re,Zt,512*.42,0,Math.PI*2),ce.fillStyle="rgba(6,14,24,0.7)",ce.fill(),ce.strokeStyle="rgba(255,170,51,0.9)",ce.lineWidth=6,ce.beginPath(),ce.arc(re,Zt,512*.38,0,Math.PI*2),ce.stroke();const be=8;for(let en=0;en<be;en++){const nn=en/be*Math.PI*2-Math.PI/2;ce.strokeStyle=`rgba(255,${170+Math.round(Math.sin(en)*40)},51,0.8)`,ce.lineWidth=4,ce.beginPath(),ce.moveTo(re+Math.cos(nn)*512*.12,Zt+Math.sin(nn)*512*.12),ce.lineTo(re+Math.cos(nn)*512*.34,Zt+Math.sin(nn)*512*.34),ce.stroke();const Mi=re+Math.cos(nn)*512*.34,oi=Zt+Math.sin(nn)*512*.34,vn=512*.06;ce.beginPath(),ce.moveTo(Mi,oi),ce.lineTo(Mi-vn*Math.cos(nn-.4),oi-vn*Math.sin(nn-.4)),ce.moveTo(Mi,oi),ce.lineTo(Mi-vn*Math.cos(nn+.4),oi-vn*Math.sin(nn+.4)),ce.stroke()}ce.beginPath(),ce.arc(re,Zt,512*.06,0,Math.PI*2),ce.fillStyle="rgba(255,200,80,0.95)",ce.fill();const qe=new Sl(oe);return qe.colorSpace=Yn,qe},Kn=Et=>{const oe=La(Et),ce=wt.getPointAt(oe),Zt=wt.getPointAt(La(oe+.002)).clone().sub(ce).normalize();let be=new Z().crossVectors(Zt,ya).normalize();be.lengthSq()<1e-4&&(be=new Z(1,0,0));const qe=new Z().crossVectors(be,Zt).normalize();return{point:ce,tangent:Zt,right:be,up:qe}};wt.getLength();const pe=[],Qn=new Qa(Dm*2,Dm*2),di=new Qa(H2,G2);at.forEach((Et,oe)=>{const ce=Et.installation,re=La(ce?.placement_t??.05+oe/at.length),{point:Zt,right:be,up:qe}=Kn(re),en=ce?.side==="left",oi=(ce?.side==="center"?0:en?-1:1)*Px*.12,vn=Zt.clone().add(be.clone().multiplyScalar(oi)).add(qe.clone().multiplyScalar(.5)),He=Ve(oe,Et.id);Ot.push(He);const an=new Ls({color:16777215,emissive:new ge(Bx),emissiveIntensity:1.2,map:He,emissiveMap:He,transparent:!0,alphaTest:.05,side:Xn,depthWrite:!1});jt.push(an);const je=new ke(Qn,an);je.position.copy(vn),je.userData={panel:Et,isGlyph:!0},$.push(je),Lt.add(je);const Sn=Kt(Et),ki=Sn.title,ks=Sn.body,Ei=Un(ki,ks);Ot.push(Ei);const ka=new Ls({color:16777215,emissive:new ge(1122867),emissiveIntensity:.3,map:Ei,transparent:!0,opacity:0,side:Xn,depthWrite:!0});jt.push(ka);const Ut=new ke(di,ka),Fn=new xl;Fn.add(Ut),Fn.position.copy(vn),Fn.scale.setScalar(.01),Fn.visible=!1,Lt.add(Fn);const Ii=new Gc(Bx,Qt?6:12,20,1.5);Ii.position.copy(vn),Lt.add(Ii),pe.push({mesh:je,card:Fn,panel:Et,progress:re,baseY:vn.y,expanded:!1,expandT:0}),t.current.push({meta:Et,progress:re})});let wn=!1,xn=0,Ce=0,on=0,Dn=0,gn=0,ri=!1,Si=!1,Ha=0,Ul=0;const Ol=new Z,Rr=new Z,_n=new Z,Cr=32;for(let Et=0;Et<Cr;Et++)_n.add(wt.getPointAt(Et/Cr));_n.divideScalar(Cr);const Il=()=>{const oe=Vt.position.clone().clone().sub(_n).normalize();Ol.copy(_n).add(oe.multiplyScalar(zx)),Ol.y=_n.y+zx*.35,Rr.copy(_n)},Gs=()=>{pe.forEach(Et=>{Et.expanded=!1})},as=Et=>{wn!==Et&&(wn=Et,ri=!1,Si=!1,S(Et),Et&&(Il(),Gs()))},wr=()=>{as(!wn)};c.current=wr;const Pl=new Qa(Nf*2,Nf*2),xo=ne();Ot.push(xo);const ss=new Ls({color:16777215,emissive:new ge(Hx),emissiveIntensity:1.4,map:xo,emissiveMap:xo,transparent:!0,alphaTest:.05,side:Xn,depthWrite:!1});jt.push(ss);const{point:sa,up:So}=Kn(k2),Ga=sa.clone().add(So.clone().multiplyScalar(1)),yi=new ke(Pl,ss);yi.position.copy(Ga),yi.userData={isExitGlyph:!0},Lt.add(yi);const Fl=new Qa(Nf*5,Nf*5),yo=new Wc({visible:!1,side:Xn}),rs=new ke(Fl,yo);rs.position.copy(Ga),rs.userData={isExitGlyph:!0},$.push(rs),Lt.add(rs);const Dr=new Gc(Hx,Qt?6:12,20,1.5);Dr.position.copy(Ga),Lt.add(Dr);const Nr=new Zh(Qt?1.25:1.6,26,26);Ht.push(Nr);const Mo=new Ls({color:16764788,emissive:new ge(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});jt.push(Mo);const Jn=sa.clone().add(So.clone().multiplyScalar(Cm*.52+.32)),Oi=new ke(Nr,Mo);Oi.position.copy(Jn),Oi.userData={isReentryDot:!0},$.push(Oi),Lt.add(Oi);const Lr=new jh(Qt?1.75:2.2,Qt?2.35:2.95,52);Ht.push(Lr);const os=new Wc({color:16761948,transparent:!0,opacity:0,side:Xn,depthWrite:!1});jt.push(os);const Ur=new ke(Lr,os);Ur.position.copy(Jn),Lt.add(Ur);const Or=new Gc(16761948,0,Qt?34:44,2);Or.position.copy(Jn),Lt.add(Or);const Eo=new VS,ls=new Oe,Ir=Et=>{ee.forEach(ye);const oe=Tt.domElement.getBoundingClientRect();ls.x=(Et.clientX-oe.left)/oe.width*2-1,ls.y=-((Et.clientY-oe.top)/oe.height)*2+1,Ha=Et.clientX,Ul=Et.clientY,Eo.setFromCamera(ls,Vt);const ce=Eo.intersectObjects($,!1);if(wn){if(ce.length>0){const re=ce[0].object;if(re.userData.isReentryDot){as(!1);return}if(re.userData.isExitGlyph){wr();return}}ri=!0,Si=Et.shiftKey||Et.altKey||Et.button===2;return}if(ce.length>0){const re=ce[0].object;if(re.userData.isExitGlyph){wr();return}const Zt=re.userData.panel;if(Zt){const be=pe.find(qe=>qe.panel.id===Zt.id);be&&(be.expanded?be.expanded=!1:(pe.forEach(qe=>{qe.expanded=!1}),be.expanded=!0))}}else pe.forEach(re=>{re.expanded=!1})};Tt.domElement.addEventListener("pointerdown",Ir);const cs={x:0,y:0},Va={x:0,y:0},qc=Et=>{const oe=Tt.domElement.getBoundingClientRect(),ce=(Et.clientX-oe.left)/oe.width,re=(Et.clientY-oe.top)/oe.height;if(cs.x=(ce-.5)*2,cs.y=(re-.5)*2,wn&&ri){const Zt=Et.clientX-Ha,be=Et.clientY-Ul;Ha=Et.clientX,Ul=Et.clientY,Si?Dn=An.clamp(Dn+Zt*.0038,-Math.PI*.48,Math.PI*.48):(Ce+=Zt*.0046,on=An.clamp(on+be*.0035,-.88,.88));return}},jc=()=>{cs.x=0,cs.y=0,ri=!1,Si=!1},Vs=()=>{ri=!1,Si=!1},Zc=Et=>{wn&&Et.preventDefault()};Tt.domElement.addEventListener("pointermove",qc,{passive:!0}),Tt.domElement.addEventListener("pointerleave",jc,{passive:!0}),Tt.domElement.addEventListener("pointerup",Vs,{passive:!0}),Tt.domElement.addEventListener("pointercancel",Vs,{passive:!0}),Tt.domElement.addEventListener("contextmenu",Zc);const Kc=Et=>{if(Et.preventDefault(),wn){Ce+=Et.deltaY*.0017,gn=An.clamp(gn+Et.deltaY*.22,-165,230);return}ee.forEach(ye),i.current=La(i.current+Fx*Et.deltaY*75e-6)};Tt.domElement.addEventListener("wheel",Kc,{passive:!1});const Qc=Et=>{(Et.key==="o"||Et.key==="O")&&wr()};window.addEventListener("keydown",Qc);let Pr=0;const Jc=Et=>{ee.forEach(ye),Pr=Et.touches[0]?.clientY??0},Bl=Et=>{Et.preventDefault();const oe=Et.touches[0]?.clientY??Pr,ce=Pr-oe;if(wn){Ce+=ce*.0021,gn=An.clamp(gn+ce*.13,-165,230),Pr=oe;return}i.current=La(i.current+Fx*ce*11e-5),Pr=oe};Tt.domElement.addEventListener("touchstart",Jc,{passive:!0}),Tt.domElement.addEventListener("touchmove",Bl,{passive:!1});const $c=()=>{xt&&(Vt.aspect=xt.clientWidth/xt.clientHeight,Vt.updateProjectionMatrix(),Tt.setSize(xt.clientWidth,xt.clientHeight))};window.addEventListener("resize",$c);const zl=new dn,tu=new kS,Hl=new Z,bo=new Z,eu=new Z;let nu=f.length>0?f[0].id:"";const iu=()=>{if(Gt)return;const Et=tu.getDelta(),oe=tu.getElapsedTime();s.current=P2(s.current,i.current,V?2.8:4.8,Et),Va.x+=(cs.x-Va.x)*.07,Va.y+=(cs.y-Va.y)*.07;const ce=s.current,re=La(ce+(Qt?.008:.01)),Zt=wt.getPointAt(ce),be=wt.getPointAt(re),qe=wt.getPointAt(La(ce+.002)).sub(wt.getPointAt(La(ce-.002))).normalize();let en=new Z().crossVectors(qe,ya).normalize();en.lengthSq()<1e-4&&(en=new Z(1,0,0));const nn=new Z().crossVectors(en,qe).normalize(),Mi=en.clone().multiplyScalar(Va.x*(Qt?0:.62)).add(nn.clone().multiplyScalar(Va.y*(Qt?0:.42))),oi=V?new Z:nn.clone().multiplyScalar(Math.sin(oe*.45)*.12),vn=1/X2;wn&&xn<1?xn=Math.min(1,xn+vn*Et):!wn&&xn>0&&(xn=Math.max(0,xn-vn*Et));const He=xn<.5?4*xn*xn*xn:1-Math.pow(-2*xn+2,3)/2,an=An.smoothstep(He,.18,1),je=Va.x*(Qt?0:15.4)*an,Sn=Va.y*(Qt?0:9.2)*an;aa.position.copy(_n).add(new Z(Math.sin(Ce)*6.8+je*.2,on*2.4+Sn*.18,Math.cos(Ce)*3.6-je*.13)),Ea.position.copy(_n).add(new Z(-Math.sin(Ce)*3.2,on*.9,Math.cos(Ce)*2.1)),A.position.set(_n.x+700+je*2.8+Math.sin(Ce)*52,_n.y+290+Sn*1.35+on*28,_n.z-130-je*1.3+Math.cos(Ce)*30),X.position.set(_n.x-470-je*.82-Math.sin(Ce)*16,_n.y+35+Sn*.22+on*10,_n.z+360+je*.6-Math.cos(Ce)*12);const ki=Ol.clone().sub(_n).applyQuaternion(new Ps().setFromEuler(new $i(on,Ce,0,"YXZ"))),ks=An.clamp(ki.length()+gn,260,860);ki.setLength(ks);const Ei=_n.clone().add(ki).add(new Z(je,Sn*.84,je*.58)),ka=Rr.clone().add(new Z(je*.11,Sn*.095,je*.085)),Ut=new Ps;if(He>.01){b(He>.26),Lt.fog instanceof Xc&&(Lt.fog.near=An.lerp(38,9999,He),Lt.fog.far=An.lerp(230,1e4,He));const Te=new ge(987671),$e=new ge(132106);Lt.background.copy(Te).lerp($e,He),St.intensity=An.lerp(.05,.002,He),ct.intensity=An.lerp(.08,.007,He),A.intensity=An.lerp(0,Qt?4.6:8.6,He),X.intensity=An.lerp(0,Qt?.02:.03,He),Tt.toneMappingExposure=An.lerp(Qt?.76:.72,Qt?.75:.76,He),[kt,ve].forEach(ti=>{ti.emissive.set(3359829),ti.emissiveIntensity=0}),kt.envMapIntensity=An.lerp(.74,.04,He),ve.envMapIntensity=An.lerp(.08,.01,He),k.color.set(0).lerp(new ge(16777215),He),k.toneMapped=He>.5,k.fog=He>.5,k.emissive.set(16777215),k.emissiveIntensity=An.lerp(1,.02,He),k.envMapIntensity=An.lerp(0,.03,He)}else b(!1),St.intensity=.05,ct.intensity=.08,A.intensity=0,X.intensity=0,Tt.toneMappingExposure=Qt?.76:.72,Lt.background.set(987671),[kt,ve].forEach(Te=>{Te.emissive.set(0),Te.emissiveIntensity=0}),kt.envMapIntensity=.74,ve.envMapIntensity=.08,k.color.set(0),k.toneMapped=!1,k.fog=!1,k.emissive.set(16777215),k.emissiveIntensity=1,k.envMapIntensity=0;const Fn=nn.clone().multiplyScalar(-Cm*.2),Ii=Zt.clone().add(Fn).add(Mi).add(oi),ba=be.clone().add(Fn).add(Mi.multiplyScalar(.22));if(He>.99){if(Vt.position.copy(Ei),Vt.lookAt(ka),Math.abs(Dn)>1e-4){const Te=ka.clone().sub(Vt.position).normalize();Ut.setFromAxisAngle(Te,Dn),Vt.quaternion.multiply(Ut)}}else if(He>.001){Vt.position.lerpVectors(Ii,Ei,He);const Te=ba.clone().lerp(ka,He);if(Vt.lookAt(Te),Math.abs(Dn)>1e-4){const $e=Te.clone().sub(Vt.position).normalize();Ut.setFromAxisAngle($e,Dn*He),Vt.quaternion.multiply(Ut)}}else Vt.position.copy(Ii),zl.position.copy(Vt.position),zl.lookAt(ba),Vt.quaternion.slerp(zl.quaternion,1-Math.exp(-8.1*Et));const Bn=.94+Math.sin(oe*.23)*.06,bi=be.clone().add(Fn);Pn.position.copy(Vt.position).add(nn.clone().multiplyScalar(2.9)).add(en.clone().multiplyScalar(2.1)).add(qe.clone().multiplyScalar(-2.2)),Bs.position.copy(bi).add(en.clone().multiplyScalar(2.5)).add(nn.clone().multiplyScalar(-.9)),Pn.intensity=(Qt?14:21)*Bn,Ma.position.copy(Vt.position).add(nn.clone().multiplyScalar(2)).add(en.clone().multiplyScalar(-2.4)).add(qe.clone().multiplyScalar(-1.1)),zs.position.copy(bi).add(en.clone().multiplyScalar(-2)).add(nn.clone().multiplyScalar(-1.4)),Ma.intensity=(Qt?5:8)*Bn,Ui.position.copy(Vt.position).add(nn.clone().multiplyScalar(1.4)).add(qe.clone().multiplyScalar(2.8)).add(en.clone().multiplyScalar(.6)),Hs.position.copy(bi).add(nn.clone().multiplyScalar(-.8)),Ui.intensity=(Qt?4:6.2)*Bn,$.forEach(Te=>{const $e=Te.userData;if(!$e||!$e.shading||!$e.material)return;const ti=$e.shading,Ai=$e.material,ra=$e.video,Ze=$e;let us=1;ti.lighting?.flicker_sync&&ra&&ra.readyState>=3&&(us=.88+Math.sin(oe*22)*.1*Math.sin(oe*6.7));let Fr=1;if(ti.movement_reaction?.type==="viewing_angle_fade"){Hl.set(0,0,0),Te.getWorldPosition(Hl),bo.set(0,0,1).applyQuaternion(Te.quaternion),eu.copy(Vt.position).sub(Hl).normalize();const En=bo,Ri=eu,Ws=Math.max(0,En.dot(Ri)),To=ti.movement_reaction.cone_angle_degrees===60?3:1.5;Fr=Math.pow(Ws,To)}const Xs=$e.baseEmissive*us*Fr;if(Ai.emissiveIntensity=Xs,Ze.bounceLights&&Ze.bounceLights.length>0){const En=Ze.bounceSampleCtx,Ri=Ze.bounceSampleCanvas;if(ra&&En&&Ri&&(Ze.bounceNextSampleAt??0)<=oe){const Xa=yR(ra,Ri,En);if(Xa){Ze.bounceTargetColor||(Ze.bounceTargetColor=Xa.color.clone());const Ao=Xa.color.clone().lerp(new ge(1,.97,.93),.18);Ze.bounceTargetColor.copy(Ao);const Br=An.clamp(.22+Xa.luminance*1.9,.22,2.25);Ze.bounceTargetIntensity=(Ze.bounceBaseIntensity??5)*Br*(.25+Xs*1.25)}Ze.bounceNextSampleAt=oe+1/(Qt?2:4)}else ra||(Ze.bounceTargetIntensity=(Ze.bounceBaseIntensity??5)*(.22+Xs*1.1));const Ws=Ze.bounceTargetIntensity??0,To=Ze.bounceCurrentIntensity??0;Ze.bounceCurrentIntensity=An.lerp(To,Ws,1-Math.exp(-6.2*Et)),Ze.bounceCurrentColor||(Ze.bounceCurrentColor=(Ze.bounceTargetColor??new ge(1,1,1)).clone()),Ze.bounceTargetColor&&Ze.bounceCurrentColor.lerp(Ze.bounceTargetColor,1-Math.exp(-5.4*Et)),Ze.bounceLights.forEach((Xa,Ao)=>{const Br=Math.max(1,Ze.bounceLights.length-1),$h=1-Ao/Br*.34;Xa.color.copy(Ze.bounceCurrentColor),Xa.intensity=(Ze.bounceCurrentIntensity??0)*$h})}}),Se.forEach(({mesh:Te,basePosition:$e,strength:ti})=>{const Ai=Te.parent;if(!Ai)return;const ra=Ai.worldToLocal(Vt.position.clone()),Ze=An.clamp(ra.x*.008,-.18,.18)*ti,us=An.clamp(ra.y*.006,-.14,.14)*ti;Te.position.x=$e.x+Ze,Te.position.y=$e.y+us}),pe.forEach((Te,$e)=>{const{mesh:ti,card:Ai}=Te;ti.lookAt(Vt.position);const ra=$e*.7,Ze=Te.baseY+Math.sin(oe*B2+ra)*F2;ti.position.y=Ze,ti.rotateZ(z2*Et);const us=ti.material;us.emissiveIntensity=1+Math.sin(oe*2+$e)*.4;const Fr=Te.expanded?1:0,Xs=1/V2;Te.expandT<Fr?Te.expandT=Math.min(1,Te.expandT+Xs*Et):Te.expandT>Fr&&(Te.expandT=Math.max(0,Te.expandT-Xs*Et));const En=Te.expandT,Ri=En<.5?4*En*En*En:1-Math.pow(-2*En+2,3)/2;if(Ri>.001){Ai.visible=!0,Ai.position.copy(ti.position),Ai.position.y-=Dm+.3,Ai.lookAt(Vt.position),Ai.scale.setScalar(Ri);const Ws=Ai.children[0].material;Ws.opacity=Ri}else Ai.visible=!1;us.opacity=1-Ri*.4});const Ta=Ga.y+Math.sin(oe*.8)*.35;yi.lookAt(Vt.position),yi.position.y=Ta,yi.rotateZ(.15*Et),ss.emissiveIntensity=1.2+Math.sin(oe*1.5)*.5,rs.lookAt(Vt.position),rs.position.y=Ta;const Xi=.72+Math.sin(oe*2.35)*.28,pi=An.smoothstep(He,.2,.95);Oi.visible=pi>.001,Ur.visible=pi>.001,Oi.scale.setScalar(.88+Xi*.28),Mo.emissiveIntensity=pi*(.48+Xi*.45),Or.intensity=pi*(Qt?4.6:7.4)*Xi,Ur.lookAt(Vt.position),Ur.scale.setScalar(.95+Xi*.18),os.opacity=pi*(.2+Xi*.32);let $n=t.current[0]?.meta.id??(f.length>0?f[0].id:""),Ti=Number.POSITIVE_INFINITY;t.current.forEach(Te=>{let $e=Math.abs(ce-Te.progress);$e>.5&&($e=1-$e),$e<Ti&&(Ti=$e,$n=Te.meta.id)}),$n!==nu&&(nu=$n,v($n)),Tt.render(Lt,Vt),requestAnimationFrame(iu)};iu(),It=()=>{c.current=null,Tt.domElement.removeEventListener("pointerdown",Ir),Tt.domElement.removeEventListener("pointermove",qc),Tt.domElement.removeEventListener("pointerleave",jc),Tt.domElement.removeEventListener("pointerup",Vs),Tt.domElement.removeEventListener("pointercancel",Vs),Tt.domElement.removeEventListener("contextmenu",Zc),Tt.domElement.removeEventListener("wheel",Kc),Tt.domElement.removeEventListener("touchstart",Jc),Tt.domElement.removeEventListener("touchmove",Bl),window.removeEventListener("resize",$c),window.removeEventListener("keydown",Qc),xt.contains(Tt.domElement)&&xt.removeChild(Tt.domElement),$.forEach(Et=>{const oe=Et.userData?.video;oe&&(oe.pause(),oe.src="",oe.load())}),ee.forEach(Et=>{Et.pause(),Et.src="",Et.load()}),te.forEach(Et=>Et()),Ot.forEach(Et=>Et.dispose?.()),Ht.forEach(Et=>Et.dispose()),Qn.dispose(),di.dispose(),yt.albedo.dispose(),yt.normal.dispose(),yt.roughness.dispose(),yt.ao.dispose(),zt.albedo.dispose(),zt.normal.dispose(),zt.roughness.dispose(),zt.ao.dispose(),Pt.albedo.dispose(),Pt.normal.dispose(),Pt.roughness.dispose(),Pt.ao.dispose(),jt.forEach(Et=>Et.dispose()),dt.texture.dispose(),dt.dispose(),Y.dispose(),kt.dispose(),ve.dispose(),Fs.dispose(),k.dispose(),mn.dispose(),Re.dispose(),pn.dispose(),Dt.dispose(),qt.dispose(),At.dispose(),ut.dispose(),Jt.dispose(),xe.dispose(),Fe.dispose(),Zn.dispose(),Ye.dispose(),na.dispose(),Cn.dispose(),Tt.dispose()}})(),()=>{Gt=!0,c.current=null,It()}},[f,tt,Kt]),Ft.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Ft.jsx("div",{ref:r,className:"absolute inset-0"}),Ft.jsx(MR,{}),Ft.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[Ft.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[Ft.jsx("span",{className:"px-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#5a5a5a]",children:J.languageLabel}),Ft.jsx("button",{type:"button",onClick:()=>it("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${K==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":K==="nb",children:"NO"}),Ft.jsx("button",{type:"button",onClick:()=>it("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${K==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":K==="en",children:"EN"})]}),Ft.jsx("button",{type:"button",onClick:O,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":M,children:M?K==="nb"?"Gå inn i tunnelen":"Enter tunnel":K==="nb"?"Gå ut av tunnelen":"Leave tunnel"})]}),g||E?Ft.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:g?J.loadingPanels:J.panelsFallback}):null,M?null:Ft.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Ft.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:J.siteName}),Ft.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[J.activeInstallation,": ",le]})]}),M?Ft.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Ft.jsx("style",{children:`
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
            `}),C==="menu"?Ft.jsxs(Ft.Fragment,{children:[Ft.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:J.siteName}),Ft.jsx("button",{type:"button",onClick:()=>L("videos"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Ft.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:J.outsideVideos})}),Ft.jsx("button",{type:"button",onClick:()=>L("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Ft.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:J.outsideSignatures})}),Ft.jsx("button",{type:"button",onClick:()=>L("news"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Ft.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:J.outsideAiNews})})]}):null,C!=="menu"?Ft.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[Ft.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[Ft.jsx("button",{type:"button",onClick:()=>L("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:J.outsideBack}),C==="videos"?Ft.jsxs(Ft.Fragment,{children:[Ft.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:J.outsideVideosTitle}),Ft.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:J.outsideVideosBody})]}):null,C==="signatures"?Ft.jsxs(Ft.Fragment,{children:[Ft.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:J.outsideSignaturesTitle}),Ft.jsx("p",{className:"mt-2 max-w-3xl text-sm text-[#b8cbe6] md:text-base",children:J.outsideSignaturesBody})]}):null,C==="news"?Ft.jsxs(Ft.Fragment,{children:[Ft.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:J.outsideNewsTitle}),Ft.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:J.outsideNewsBody})]}):null]}),C==="signatures"?Ft.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto flex w-full max-w-6xl items-start justify-start md:inset-x-8 md:top-64",children:Ft.jsxs("a",{href:"mailto:lars@larscuzner.com?subject=Engasjement%20i%20Intelligenspartiet",className:"rounded-xl border border-[#8fb5e8]/40 bg-[#0c1629]/78 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#dbe9ff] transition hover:bg-[#12233f]",children:[J.outsideSignaturesContact,": lars@larscuzner.com"]})}):null,C==="news"?Ft.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[B?Ft.jsx("p",{className:"text-sm text-[#b8cbe6]",children:J.outsideNewsLoading}):null,!B&&T?Ft.jsx("p",{className:"text-sm text-[#ffb6b6]",children:T}):null,!B&&!T&&D.length===0?Ft.jsx("p",{className:"text-sm text-[#b8cbe6]",children:J.outsideNewsEmpty}):null,!B&&!T&&D.length>0?Ft.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:D.map(xt=>{const Gt=Date.parse(xt.published_at),It=Number.isFinite(Gt)?de.format(new Date(Gt)):xt.published_at;return Ft.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[Ft.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[xt.source,It?` · ${It}`:""]}),Ft.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:xt.title}),xt.snippet?Ft.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:xt.snippet}):null,Ft.jsx("a",{href:xt.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:K==="nb"?"Åpne sak":"Open story"})]},`${xt.url}-${xt.title}`)})}):null]}):null,C==="videos"?Ft.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:I,onTouchStart:q,onTouchEnd:pt,children:Ft.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[Ft.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_44%,rgba(80,123,181,0.15),rgba(7,14,25,0.74)_56%,rgba(3,7,14,0.96)_100%)]"}),Ft.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_90px_rgba(0,0,0,0.66)]"}),Ft.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#99bae5]",children:[ft+1," / ",Nm.length]}),Ft.jsx("p",{className:"absolute left-1/2 top-7 -translate-x-1/2 text-[0.57rem] font-semibold uppercase tracking-[0.14em] text-[#88a9d5]/90",children:K==="nb"?"Scroll eller sveip sideveis":"Scroll or swipe sideways"}),Ft.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9e8ff]/95 shadow-[0_0_18px_rgba(140,185,255,0.72)]"}),Ft.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${q2.toFixed(3)}rem) rotateY(${-ft*j2}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[Ft.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/24",style:{width:`${Lf.toFixed(3)}rem`,height:`${Lf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${Gx.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(150,183,223,0.24) 0%, rgba(58,77,103,0.3) 14%, rgba(19,29,45,0.82) 100%)",boxShadow:"0 0 56px rgba(48,94,156,0.22)"}}),Ft.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/18",style:{width:`${Lf.toFixed(3)}rem`,height:`${Lf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${Gx.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(22,31,45,0.92) 0%, rgba(24,36,56,0.62) 34%, rgba(117,151,204,0.22) 100%)"}}),Nm.map((xt,Gt)=>Ft.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-[#89b0e4]/34 bg-[#050b16]/95 shadow-[0_22px_44px_rgba(0,0,0,0.6)]",style:{width:`${($S+Y2).toFixed(3)}rem`,height:`${M0}rem`,transform:`translate(-50%, -50%) rotateY(${Gt*60}deg) translateZ(-${ty.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:Ft.jsx("video",{ref:It=>{l.current[Gt]=It},src:xt.video,poster:xt.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${xt.video}-${Gt}`))]})]})}):null]}):null]}):null]})}function bR(){return Ft.jsx("div",{className:"min-h-screen bg-[#080604]",children:Ft.jsx(ER,{})})}LM.createRoot(document.getElementById("root")).render(Ft.jsx(me.StrictMode,{children:Ft.jsx(bR,{})}));
