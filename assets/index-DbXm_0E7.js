(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rm={exports:{}},Rc={};var Xv;function IM(){if(Xv)return Rc;Xv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Rc.Fragment=t,Rc.jsx=i,Rc.jsxs=i,Rc}var Wv;function PM(){return Wv||(Wv=1,rm.exports=IM()),rm.exports}var Tt=PM(),om={exports:{}},xe={};var Yv;function FM(){if(Yv)return xe;Yv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(U,q,ft){this.props=U,this.context=q,this.refs=M,this.updater=ft||E}S.prototype.isReactComponent={},S.prototype.setState=function(U,q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,q,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function C(){}C.prototype=S.prototype;function L(U,q,ft){this.props=U,this.context=q,this.refs=M,this.updater=ft||E}var N=L.prototype=new C;N.constructor=L,w(N,S.prototype),N.isPureReactComponent=!0;var B=Array.isArray;function H(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(U,q,ft){var Lt=ft.ref;return{$$typeof:r,type:U,key:q,ref:Lt!==void 0?Lt:null,props:ft}}function mt(U,q){return O(U.type,q,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function tt(U){var q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ft){return q[ft]})}var st=/\/+/g;function lt(U,q){return typeof U=="object"&&U!==null&&U.key!=null?tt(""+U.key):q.toString(36)}function Z(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(q){U.status==="pending"&&(U.status="fulfilled",U.value=q)},function(q){U.status==="pending"&&(U.status="rejected",U.reason=q)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function I(U,q,ft,Lt,zt){var nt=typeof U;(nt==="undefined"||nt==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(nt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case r:case t:xt=!0;break;case _:return xt=U._init,I(xt(U._payload),q,ft,Lt,zt)}}if(xt)return zt=zt(U),xt=Lt===""?"."+lt(U,0):Lt,B(zt)?(ft="",xt!=null&&(ft=xt.replace(st,"$&/")+"/"),I(zt,q,ft,"",function($t){return $t})):zt!=null&&(V(zt)&&(zt=mt(zt,ft+(zt.key==null||U&&U.key===zt.key?"":(""+zt.key).replace(st,"$&/")+"/")+xt)),q.push(zt)),1;xt=0;var wt=Lt===""?".":Lt+":";if(B(U))for(var Zt=0;Zt<U.length;Zt++)Lt=U[Zt],nt=wt+lt(Lt,Zt),xt+=I(Lt,q,ft,nt,zt);else if(Zt=y(U),typeof Zt=="function")for(U=Zt.call(U),Zt=0;!(Lt=U.next()).done;)Lt=Lt.value,nt=wt+lt(Lt,Zt++),xt+=I(Lt,q,ft,nt,zt);else if(nt==="object"){if(typeof U.then=="function")return I(Z(U),q,ft,Lt,zt);throw q=String(U),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return xt}function F(U,q,ft){if(U==null)return U;var Lt=[],zt=0;return I(U,Lt,"","",function(nt){return q.call(ft,nt,zt++)}),Lt}function ut(U){if(U._status===-1){var q=U._result;q=q(),q.then(function(ft){(U._status===0||U._status===-1)&&(U._status=1,U._result=ft)},function(ft){(U._status===0||U._status===-1)&&(U._status=2,U._result=ft)}),U._status===-1&&(U._status=0,U._result=q)}if(U._status===1)return U._result.default;throw U._result}var gt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},At={map:F,forEach:function(U,q,ft){F(U,function(){q.apply(this,arguments)},ft)},count:function(U){var q=0;return F(U,function(){q++}),q},toArray:function(U){return F(U,function(q){return q})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return xe.Activity=v,xe.Children=At,xe.Component=S,xe.Fragment=i,xe.Profiler=l,xe.PureComponent=L,xe.StrictMode=s,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,xe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},xe.cache=function(U){return function(){return U.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(U,q,ft){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Lt=w({},U.props),zt=U.key;if(q!=null)for(nt in q.key!==void 0&&(zt=""+q.key),q)!T.call(q,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&q.ref===void 0||(Lt[nt]=q[nt]);var nt=arguments.length-2;if(nt===1)Lt.children=ft;else if(1<nt){for(var xt=Array(nt),wt=0;wt<nt;wt++)xt[wt]=arguments[wt+2];Lt.children=xt}return O(U.type,zt,Lt)},xe.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},xe.createElement=function(U,q,ft){var Lt,zt={},nt=null;if(q!=null)for(Lt in q.key!==void 0&&(nt=""+q.key),q)T.call(q,Lt)&&Lt!=="key"&&Lt!=="__self"&&Lt!=="__source"&&(zt[Lt]=q[Lt]);var xt=arguments.length-2;if(xt===1)zt.children=ft;else if(1<xt){for(var wt=Array(xt),Zt=0;Zt<xt;Zt++)wt[Zt]=arguments[Zt+2];zt.children=wt}if(U&&U.defaultProps)for(Lt in xt=U.defaultProps,xt)zt[Lt]===void 0&&(zt[Lt]=xt[Lt]);return O(U,nt,zt)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(U){return{$$typeof:h,render:U}},xe.isValidElement=V,xe.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ut}},xe.memo=function(U,q){return{$$typeof:p,type:U,compare:q===void 0?null:q}},xe.startTransition=function(U){var q=z.T,ft={};z.T=ft;try{var Lt=U(),zt=z.S;zt!==null&&zt(ft,Lt),typeof Lt=="object"&&Lt!==null&&typeof Lt.then=="function"&&Lt.then(H,gt)}catch(nt){gt(nt)}finally{q!==null&&ft.types!==null&&(q.types=ft.types),z.T=q}},xe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},xe.use=function(U){return z.H.use(U)},xe.useActionState=function(U,q,ft){return z.H.useActionState(U,q,ft)},xe.useCallback=function(U,q){return z.H.useCallback(U,q)},xe.useContext=function(U){return z.H.useContext(U)},xe.useDebugValue=function(){},xe.useDeferredValue=function(U,q){return z.H.useDeferredValue(U,q)},xe.useEffect=function(U,q){return z.H.useEffect(U,q)},xe.useEffectEvent=function(U){return z.H.useEffectEvent(U)},xe.useId=function(){return z.H.useId()},xe.useImperativeHandle=function(U,q,ft){return z.H.useImperativeHandle(U,q,ft)},xe.useInsertionEffect=function(U,q){return z.H.useInsertionEffect(U,q)},xe.useLayoutEffect=function(U,q){return z.H.useLayoutEffect(U,q)},xe.useMemo=function(U,q){return z.H.useMemo(U,q)},xe.useOptimistic=function(U,q){return z.H.useOptimistic(U,q)},xe.useReducer=function(U,q,ft){return z.H.useReducer(U,q,ft)},xe.useRef=function(U){return z.H.useRef(U)},xe.useState=function(U){return z.H.useState(U)},xe.useSyncExternalStore=function(U,q,ft){return z.H.useSyncExternalStore(U,q,ft)},xe.useTransition=function(){return z.H.useTransition()},xe.version="19.2.4",xe}var qv;function f0(){return qv||(qv=1,om.exports=FM()),om.exports}var ie=f0(),lm={exports:{}},Cc={},cm={exports:{}},um={};var jv;function BM(){return jv||(jv=1,(function(r){function t(I,F){var ut=I.length;I.push(F);t:for(;0<ut;){var gt=ut-1>>>1,At=I[gt];if(0<l(At,F))I[gt]=F,I[ut]=At,ut=gt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var F=I[0],ut=I.pop();if(ut!==F){I[0]=ut;t:for(var gt=0,At=I.length,U=At>>>1;gt<U;){var q=2*(gt+1)-1,ft=I[q],Lt=q+1,zt=I[Lt];if(0>l(ft,ut))Lt<At&&0>l(zt,ft)?(I[gt]=zt,I[Lt]=ut,gt=Lt):(I[gt]=ft,I[q]=ut,gt=q);else if(Lt<At&&0>l(zt,ut))I[gt]=zt,I[Lt]=ut,gt=Lt;else break t}}return F}function l(I,F){var ut=I.sortIndex-F.sortIndex;return ut!==0?ut:I.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,y=!1,E=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(I){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=I)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function B(I){if(w=!1,N(I),!E)if(i(m)!==null)E=!0,H||(H=!0,tt());else{var F=i(p);F!==null&&Z(B,F.startTime-I)}}var H=!1,z=-1,T=5,O=-1;function mt(){return M?!0:!(r.unstable_now()-O<T)}function V(){if(M=!1,H){var I=r.unstable_now();O=I;var F=!0;try{t:{E=!1,w&&(w=!1,C(z),z=-1),y=!0;var ut=g;try{e:{for(N(I),v=i(m);v!==null&&!(v.expirationTime>I&&mt());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,g=v.priorityLevel;var At=gt(v.expirationTime<=I);if(I=r.unstable_now(),typeof At=="function"){v.callback=At,N(I),F=!0;break e}v===i(m)&&s(m),N(I)}else s(m);v=i(m)}if(v!==null)F=!0;else{var U=i(p);U!==null&&Z(B,U.startTime-I),F=!1}}break t}finally{v=null,g=ut,y=!1}F=void 0}}finally{F?tt():H=!1}}}var tt;if(typeof L=="function")tt=function(){L(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,lt=st.port2;st.port1.onmessage=V,tt=function(){lt.postMessage(null)}}else tt=function(){S(V,0)};function Z(I,F){z=S(function(){I(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var ut=g;g=F;try{return I()}finally{g=ut}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ut=g;g=I;try{return F()}finally{g=ut}},r.unstable_scheduleCallback=function(I,F,ut){var gt=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?gt+ut:gt):ut=gt,I){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=ut+At,I={id:_++,callback:F,priorityLevel:I,startTime:ut,expirationTime:At,sortIndex:-1},ut>gt?(I.sortIndex=ut,t(p,I),i(m)===null&&I===i(p)&&(w?(C(z),z=-1):w=!0,Z(B,ut-gt))):(I.sortIndex=At,t(m,I),E||y||(E=!0,H||(H=!0,tt()))),I},r.unstable_shouldYield=mt,r.unstable_wrapCallback=function(I){var F=g;return function(){var ut=g;g=F;try{return I.apply(this,arguments)}finally{g=ut}}}})(um)),um}var Zv;function zM(){return Zv||(Zv=1,cm.exports=BM()),cm.exports}var fm={exports:{}},Si={};var Kv;function HM(){if(Kv)return Si;Kv=1;var r=f0();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Si.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Si.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Si.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Si.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Si.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Si.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Si.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Si.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Si.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Si.requestFormReset=function(m){s.d.r(m)},Si.unstable_batchedUpdates=function(m,p){return m(p)},Si.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Si.useFormStatus=function(){return f.H.useHostTransitionStatus()},Si.version="19.2.4",Si}var Qv;function GM(){if(Qv)return fm.exports;Qv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fm.exports=HM(),fm.exports}var Jv;function VM(){if(Jv)return Cc;Jv=1;var r=zM(),t=f0(),i=GM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=d;break}if(A===o){x=!0,o=u,a=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===a){x=!0,a=d,o=u;break}if(A===o){x=!0,o=d,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var Z=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},gt=[],At=-1;function U(e){return{current:e}}function q(e){0>At||(e.current=gt[At],gt[At]=null,At--)}function ft(e,n){At++,gt[At]=e.current,e.current=n}var Lt=U(null),zt=U(null),nt=U(null),xt=U(null);function wt(e,n){switch(ft(nt,n),ft(zt,e),ft(Lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?hv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=hv(n),e=pv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Lt),ft(Lt,e)}function Zt(){q(Lt),q(zt),q(nt)}function $t(e){e.memoizedState!==null&&ft(xt,e);var n=Lt.current,a=pv(n,e.type);n!==a&&(ft(zt,e),ft(Lt,a))}function oe(e){zt.current===e&&(q(Lt),q(zt)),xt.current===e&&(q(xt),Ec._currentValue=ut)}var pn,be;function Re(e){if(pn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);pn=n&&n[1]||"",be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pn+e+be}var ke=!1;function _e(e,n){if(!e||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(pt){var ct=pt}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(pt){ct=pt}e.call(Et.prototype)}}else{try{throw Error()}catch(pt){ct=pt}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(pt){if(pt&&ct&&typeof pt.stack=="string")return[pt.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var G=x.split(`
`),rt=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===rt.length)for(o=G.length-1,u=rt.length-1;1<=o&&0<=u&&G[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==rt[u]){var _t=`
`+G[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Re(a):""}function rn(e,n){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re("Lazy");case 13:return e.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return Re("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=rn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var fn=Object.prototype.hasOwnProperty,Ne=r.unstable_scheduleCallback,Xe=r.unstable_cancelCallback,Kt=r.unstable_shouldYield,P=r.unstable_requestPaint,b=r.unstable_now,D=r.unstable_getCurrentPriorityLevel,Q=r.unstable_ImmediatePriority,et=r.unstable_UserBlockingPriority,it=r.unstable_NormalPriority,Ct=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,Xt=r.log,Nt=r.unstable_setDisableYieldValue,yt=null,J=null;function Mt(e){if(typeof Xt=="function"&&Nt(e),J&&typeof J.setStrictMode=="function")try{J.setStrictMode(yt,e)}catch{}}var vt=Math.clz32?Math.clz32:W,Ht=Math.log,he=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ht(e)/he|0)|0}var Ot=256,Ut=262144,Pt=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Dt(o):(x&=A,x!==0?u=Dt(x):a||(a=A&~e,a!==0&&(u=Dt(a))))):(A=o&~d,A!==0?u=Dt(A):x!==0?u=Dt(x):a||(a=o&~e,a!==0&&(u=Dt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function we(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function pe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function On(e,n,a,o,u,d){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,rt=e.hiddenUpdates;for(a=x&~a;0<a;){var _t=31-vt(a),Et=1<<_t;A[_t]=0,G[_t]=-1;var ct=rt[_t];if(ct!==null)for(rt[_t]=null,_t=0;_t<ct.length;_t++){var pt=ct[_t];pt!==null&&(pt.lane&=-536870913)}a&=~Et}o!==0&&sa(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~n))}function sa(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-vt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ni(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-vt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function kn(e,n){var a=n&-n;return a=(a&42)!==0?1:Ws(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ta(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bi(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Fv(e.type))}function Aa(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var mi=Math.random().toString(36).slice(2),yn="__reactFiber$"+mi,An="__reactProps$"+mi,ra="__reactContainer$"+mi,Ra="__reactEvents$"+mi,zr="__reactListeners$"+mi,Ys="__reactHandles$"+mi,qs="__reactResources$"+mi,Wi="__reactMarker$"+mi;function Ca(e){delete e[yn],delete e[An],delete e[Ra],delete e[zr],delete e[Ys]}function Ka(e){var n=e[yn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ra]||a[yn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=yv(e);e!==null;){if(a=e[yn])return a;e=yv(e)}return n}e=a,a=e.parentNode}return null}function Li(e){if(e=e[yn]||e[ra]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[qs];return n||(n=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Wi]=!0}var ht=new Set,ot={};function $(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(ot[e]=n,e=0;e<n.length;e++)ht.add(n[e])}var Wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Qt={};function Yt(e){return fn.call(Qt,e)?!0:fn.call(Gt,e)?!1:Wt.test(e)?Qt[e]=!0:(Gt[e]=!0,!1)}function le(e,n,a){if(Yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function de(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function jt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function We(e){if(!e._valueTracker){var n=Se(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Se(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function ce(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xn(e,n,a,o,u,d,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ve(n)):e.value!==""+ve(n)&&(e.value=""+ve(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?$n(e,x,ve(n)):a!=null?$n(e,x,ve(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ve(A):e.removeAttribute("name")}function gi(e,n,a,o,u,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){We(e);return}a=a!=null?""+ve(a):"",n=n!=null?""+ve(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),We(e)}function $n(e,n,a){n==="number"&&qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ti(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ve(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+ve(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ve(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Z(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ve(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),We(e)}function oi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function wa(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Yi(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Yi(e,d,n[d])}function js(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),au=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Da(e){return au.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var To=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ti=null,Wn=null;function Ja(e){var n=Li(e);if(n&&(e=n.stateNode)){var a=e[An]||null;t:switch(e=n.stateNode,n.type){case"input":if(Xn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[An]||null;if(!u)throw Error(s(90));Xn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Rn(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ti(e,!!a.multiple,n,!1)}}}var $a=!1;function Zs(e,n,a){if($a)return e(n,a);$a=!0;try{var o=e(n);return o}finally{if($a=!1,(ti!==null||Wn!==null)&&(ef(),ti&&(n=ti,e=Wn,Wn=ti=null,Ja(n),e)))for(n=0;n<e.length;n++)Ja(e[n])}}function Na(e,n){var a=e.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=!1;if(Ai)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Hr=!1}var la=null,Ao=null,Nn=null;function Ro(){if(Nn)return Nn;var e,n=Ao,a=n.length,o,u="value"in la?la.value:la.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return Nn=u.slice(e,1<o?1-o:void 0)}function Co(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function Gl(){return!1}function Yn(e){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Gr:Gl,this.isPropagationStopped=Gl,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),n}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Yn(ps),ms=v({},ps,{view:0,detail:0}),su=Yn(ms),wo,Qs,ca,Do=v({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ca&&(ca&&e.type==="mousemove"?(wo=e.screenX-ca.screenX,Qs=e.screenY-ca.screenY):Qs=wo=0,ca=e),wo)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),ru=Yn(Do),Js=v({},Do,{dataTransfer:0}),ou=Yn(Js),lu=v({},ms,{relatedTarget:0}),Vr=Yn(lu),Vl=v({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),$s=Yn(Vl),cu=v({},ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kl=Yn(cu),kr=v({},ps,{data:0}),No=Yn(kr),uu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tr(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=fu[e])?!!n[e]:!1}function ua(){return tr}var du=v({},ms,{key:function(e){if(e.key){var n=uu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ua,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hu=Yn(du),Lo=v({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wl=Yn(Lo),pu=v({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ua}),mu=Yn(pu),Xr=v({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),gu=Yn(Xr),_u=v({},Do,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vu=Yn(_u),Yl=v({},ps,{newState:0,oldState:0}),xu=Yn(Yl),ql=[9,13,27,32],Uo=Ai&&"CompositionEvent"in window,er=null;Ai&&"documentMode"in document&&(er=document.documentMode);var Su=Ai&&"TextEvent"in window&&!er,jl=Ai&&(!Uo||er&&8<er&&11>=er),bt=" ",Jt=!1;function ne(e,n){switch(e){case"keyup":return ql.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ee(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bt=!1;function ge(e,n){switch(e){case"compositionend":return ee(n);case"keypress":return n.which!==32?null:(Jt=!0,bt);case"textInput":return e=n.data,e===bt&&Jt?null:e;default:return null}}function Ye(e,n){if(Bt)return e==="compositionend"||!Uo&&ne(e,n)?(e=Ro(),Nn=Ao=la=null,Bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jl&&n.locale!=="ko"?null:n.data;default:return null}}var nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tn(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!nn[e.type]:n==="textarea"}function _i(e,n,a,o){ti?Wn?Wn.push(o):Wn=[o]:ti=o,n=cf(n,"onChange"),0<n.length&&(a=new Ks("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var qn=null,mn=null;function Be(e){ov(e,0)}function Ke(e){var n=Qa(e);if(Rn(n))return e}function qe(e,n){if(e==="change")return n}var gn=!1;if(Ai){var Oi;if(Ai){var gs="oninput"in document;if(!gs){var La=document.createElement("div");La.setAttribute("oninput","return;"),gs=typeof La.oninput=="function"}Oi=gs}else Oi=!1;gn=Oi&&(!document.documentMode||9<document.documentMode)}function Ua(){qn&&(qn.detachEvent("onpropertychange",It),mn=qn=null)}function It(e){if(e.propertyName==="value"&&Ke(mn)){var n=[];_i(n,mn,e,Ui(e)),Zs(Be,n)}}function Pn(e,n,a){e==="focusin"?(Ua(),qn=n,mn=a,qn.attachEvent("onpropertychange",It)):e==="focusout"&&Ua()}function qi(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ke(mn)}function ts(e,n){if(e==="click")return Ke(n)}function vi(e,n){if(e==="input"||e==="change")return Ke(n)}function Oa(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var En=typeof Object.is=="function"?Object.is:Oa;function Ii(e,n){if(En(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!fn.call(n,u)||!En(e[u],n[u]))return!1}return!0}function xi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ei(e,n){var a=xi(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xi(a)}}function Pi(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Pi(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ye(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=qt(e.document)}return n}function Qe(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var li=Ai&&"documentMode"in document&&11>=document.documentMode,jn=null,Fi=null,Oe=null,Ia=!1;function nr(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ia||jn==null||jn!==qt(o)||(o=jn,"selectionStart"in o&&Qe(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Oe&&Ii(Oe,o)||(Oe=o,o=cf(Fi,"onSelect"),0<o.length&&(n=new Ks("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=jn)))}function Bi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ci={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionrun:Bi("Transition","TransitionRun"),transitionstart:Bi("Transition","TransitionStart"),transitioncancel:Bi("Transition","TransitionCancel"),transitionend:Bi("Transition","TransitionEnd")},ji={},ir={};Ai&&(ir=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function Pa(e){if(ji[e])return ji[e];if(!ci[e])return e;var n=ci[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ir)return ji[e]=n[a];return e}var es=Pa("animationend"),Oo=Pa("animationiteration"),Io=Pa("animationstart"),vh=Pa("transitionrun"),gy=Pa("transitionstart"),_y=Pa("transitioncancel"),H0=Pa("transitionend"),G0=new Map,xh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xh.push("scrollEnd");function Fa(e,n){G0.set(e,n),$(n,[e])}var yu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fa=[],Po=0,Sh=0;function Mu(){for(var e=Po,n=Sh=Po=0;n<e;){var a=fa[n];fa[n++]=null;var o=fa[n];fa[n++]=null;var u=fa[n];fa[n++]=null;var d=fa[n];if(fa[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&V0(a,u,d)}}function Eu(e,n,a,o){fa[Po++]=e,fa[Po++]=n,fa[Po++]=a,fa[Po++]=o,Sh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yh(e,n,a,o){return Eu(e,n,a,o),bu(e)}function Wr(e,n){return Eu(e,null,null,n),bu(e)}function V0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-vt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function bu(e){if(50<gc)throw gc=0,Dp=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fo={};function vy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zi(e,n,a,o){return new vy(e,n,a,o)}function Mh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _s(e,n){var a=e.alternate;return a===null?(a=Zi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function k0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Tu(e,n,a,o,u,d){var x=0;if(o=e,typeof e=="function")Mh(e)&&(x=1);else if(typeof e=="string")x=EM(e,a,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=Zi(31,a,n,u),e.elementType=O,e.lanes=d,e;case w:return Yr(a.children,u,d,n);case M:x=8,u|=24;break;case S:return e=Zi(12,a,n,u|2),e.elementType=S,e.lanes=d,e;case B:return e=Zi(13,a,n,u),e.elementType=B,e.lanes=d,e;case H:return e=Zi(19,a,n,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:x=10;break t;case C:x=9;break t;case N:x=11;break t;case z:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Zi(x,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Yr(e,n,a,o){return e=Zi(7,e,o,n),e.lanes=a,e}function Eh(e,n,a){return e=Zi(6,e,null,n),e.lanes=a,e}function X0(e){var n=Zi(18,null,null,0);return n.stateNode=e,n}function bh(e,n,a){return n=Zi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var W0=new WeakMap;function da(e,n){if(typeof e=="object"&&e!==null){var a=W0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},W0.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var Bo=[],zo=0,Au=null,Zl=0,ha=[],pa=0,ar=null,ns=1,is="";function vs(e,n){Bo[zo++]=Zl,Bo[zo++]=Au,Au=e,Zl=n}function Y0(e,n,a){ha[pa++]=ns,ha[pa++]=is,ha[pa++]=ar,ar=e;var o=ns;e=is;var u=32-vt(o)-1;o&=~(1<<u),a+=1;var d=32-vt(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ns=1<<32-vt(n)+u|a<<u|o,is=d+e}else ns=1<<d|a<<u|o,is=e}function Th(e){e.return!==null&&(vs(e,1),Y0(e,1,0))}function Ah(e){for(;e===Au;)Au=Bo[--zo],Bo[zo]=null,Zl=Bo[--zo],Bo[zo]=null;for(;e===ar;)ar=ha[--pa],ha[pa]=null,is=ha[--pa],ha[pa]=null,ns=ha[--pa],ha[pa]=null}function q0(e,n){ha[pa++]=ns,ha[pa++]=is,ha[pa++]=ar,ns=n.id,is=n.overflow,ar=e}var ui=null,_n=null,ze=!1,sr=null,ma=!1,Rh=Error(s(519));function rr(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kl(da(n,e)),Rh}function j0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[yn]=e,n[An]=o,a){case"dialog":Ue("cancel",n),Ue("close",n);break;case"iframe":case"object":case"embed":Ue("load",n);break;case"video":case"audio":for(a=0;a<vc.length;a++)Ue(vc[a],n);break;case"source":Ue("error",n);break;case"img":case"image":case"link":Ue("error",n),Ue("load",n);break;case"details":Ue("toggle",n);break;case"input":Ue("invalid",n),gi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ue("invalid",n);break;case"textarea":Ue("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||fv(n.textContent,a)?(o.popover!=null&&(Ue("beforetoggle",n),Ue("toggle",n)),o.onScroll!=null&&Ue("scroll",n),o.onScrollEnd!=null&&Ue("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||rr(e,!0)}function Z0(e){for(ui=e.return;ui;)switch(ui.tag){case 5:case 31:case 13:ma=!1;return;case 27:case 3:ma=!0;return;default:ui=ui.return}}function Ho(e){if(e!==ui)return!1;if(!ze)return Z0(e),ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wp(e.type,e.memoizedProps)),a=!a),a&&_n&&rr(e),Z0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_n=Sv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_n=Sv(e)}else n===27?(n=_n,Sr(e.type)?(e=Kp,Kp=null,_n=e):_n=n):_n=ui?_a(e.stateNode.nextSibling):null;return!0}function qr(){_n=ui=null,ze=!1}function Ch(){var e=sr;return e!==null&&(Vi===null?Vi=e:Vi.push.apply(Vi,e),sr=null),e}function Kl(e){sr===null?sr=[e]:sr.push(e)}var wh=U(null),jr=null,xs=null;function or(e,n,a){ft(wh,n._currentValue),n._currentValue=a}function Ss(e){e._currentValue=wh.current,q(wh)}function Dh(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Nh(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Dh(d.return,a,e),o||(x=null);break t}d=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Dh(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Go(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;En(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===xt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ec):e=[Ec])}u=u.return}e!==null&&Nh(n,e,a,o),n.flags|=262144}function Ru(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zr(e){jr=e,xs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fi(e){return K0(jr,e)}function Cu(e,n){return jr===null&&Zr(e),K0(e,n)}function K0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xs===null){if(e===null)throw Error(s(308));xs=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xs=xs.next=n;return a}var xy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Sy=r.unstable_scheduleCallback,yy=r.unstable_NormalPriority,Fn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lh(){return{controller:new xy,data:new Map,refCount:0}}function Ql(e){e.refCount--,e.refCount===0&&Sy(yy,function(){e.controller.abort()})}var Jl=null,Uh=0,Vo=0,ko=null;function My(e,n){if(Jl===null){var a=Jl=[];Uh=0,Vo=Pp(),ko={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uh++,n.then(Q0,Q0),n}function Q0(){if(--Uh===0&&Jl!==null){ko!==null&&(ko.status="fulfilled");var e=Jl;Jl=null,Vo=0,ko=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ey(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var J0=I.S;I.S=function(e,n){I_=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&My(e,n),J0!==null&&J0(e,n)};var Kr=U(null);function Oh(){var e=Kr.current;return e!==null?e:dn.pooledCache}function wu(e,n){n===null?ft(Kr,Kr.current):ft(Kr,n.pool)}function $0(){var e=Oh();return e===null?null:{parent:Fn._currentValue,pool:e}}var Xo=Error(s(460)),Ih=Error(s(474)),Du=Error(s(542)),Nu={then:function(){}};function tg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function eg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ig(e),e;default:if(typeof n.status=="string")n.then(oa,oa);else{if(e=dn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ig(e),e}throw Jr=n,Xo}}function Qr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Jr=a,Xo):a}}var Jr=null;function ng(){if(Jr===null)throw Error(s(459));var e=Jr;return Jr=null,e}function ig(e){if(e===Xo||e===Du)throw Error(s(483))}var Wo=null,$l=0;function Lu(e){var n=$l;return $l+=1,Wo===null&&(Wo=[]),eg(Wo,e,n)}function tc(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Uu(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ag(e){function n(K,X){if(e){var at=K.deletions;at===null?(K.deletions=[X],K.flags|=16):at.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=_s(K,X),K.index=0,K.sibling=null,K}function d(K,X,at){return K.index=at,e?(at=K.alternate,at!==null?(at=at.index,at<X?(K.flags|=67108866,X):at):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,X,at,St){return X===null||X.tag!==6?(X=Eh(at,K.mode,St),X.return=K,X):(X=u(X,at),X.return=K,X)}function G(K,X,at,St){var re=at.type;return re===w?_t(K,X,at.props.children,St,at.key):X!==null&&(X.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===T&&Qr(re)===X.type)?(X=u(X,at.props),tc(X,at),X.return=K,X):(X=Tu(at.type,at.key,at.props,null,K.mode,St),tc(X,at),X.return=K,X)}function rt(K,X,at,St){return X===null||X.tag!==4||X.stateNode.containerInfo!==at.containerInfo||X.stateNode.implementation!==at.implementation?(X=bh(at,K.mode,St),X.return=K,X):(X=u(X,at.children||[]),X.return=K,X)}function _t(K,X,at,St,re){return X===null||X.tag!==7?(X=Yr(at,K.mode,St,re),X.return=K,X):(X=u(X,at),X.return=K,X)}function Et(K,X,at){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Eh(""+X,K.mode,at),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return at=Tu(X.type,X.key,X.props,null,K.mode,at),tc(at,X),at.return=K,at;case E:return X=bh(X,K.mode,at),X.return=K,X;case T:return X=Qr(X),Et(K,X,at)}if(Z(X)||tt(X))return X=Yr(X,K.mode,at,null),X.return=K,X;if(typeof X.then=="function")return Et(K,Lu(X),at);if(X.$$typeof===L)return Et(K,Cu(K,X),at);Uu(K,X)}return null}function ct(K,X,at,St){var re=X!==null?X.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return re!==null?null:A(K,X,""+at,St);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case y:return at.key===re?G(K,X,at,St):null;case E:return at.key===re?rt(K,X,at,St):null;case T:return at=Qr(at),ct(K,X,at,St)}if(Z(at)||tt(at))return re!==null?null:_t(K,X,at,St,null);if(typeof at.then=="function")return ct(K,X,Lu(at),St);if(at.$$typeof===L)return ct(K,X,Cu(K,at),St);Uu(K,at)}return null}function pt(K,X,at,St,re){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return K=K.get(at)||null,A(X,K,""+St,re);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case y:return K=K.get(St.key===null?at:St.key)||null,G(X,K,St,re);case E:return K=K.get(St.key===null?at:St.key)||null,rt(X,K,St,re);case T:return St=Qr(St),pt(K,X,at,St,re)}if(Z(St)||tt(St))return K=K.get(at)||null,_t(X,K,St,re,null);if(typeof St.then=="function")return pt(K,X,at,Lu(St),re);if(St.$$typeof===L)return pt(K,X,at,Cu(X,St),re);Uu(X,St)}return null}function te(K,X,at,St){for(var re=null,je=null,se=X,Te=X=0,Pe=null;se!==null&&Te<at.length;Te++){se.index>Te?(Pe=se,se=null):Pe=se.sibling;var Ze=ct(K,se,at[Te],St);if(Ze===null){se===null&&(se=Pe);break}e&&se&&Ze.alternate===null&&n(K,se),X=d(Ze,X,Te),je===null?re=Ze:je.sibling=Ze,je=Ze,se=Pe}if(Te===at.length)return a(K,se),ze&&vs(K,Te),re;if(se===null){for(;Te<at.length;Te++)se=Et(K,at[Te],St),se!==null&&(X=d(se,X,Te),je===null?re=se:je.sibling=se,je=se);return ze&&vs(K,Te),re}for(se=o(se);Te<at.length;Te++)Pe=pt(se,K,Te,at[Te],St),Pe!==null&&(e&&Pe.alternate!==null&&se.delete(Pe.key===null?Te:Pe.key),X=d(Pe,X,Te),je===null?re=Pe:je.sibling=Pe,je=Pe);return e&&se.forEach(function(Tr){return n(K,Tr)}),ze&&vs(K,Te),re}function fe(K,X,at,St){if(at==null)throw Error(s(151));for(var re=null,je=null,se=X,Te=X=0,Pe=null,Ze=at.next();se!==null&&!Ze.done;Te++,Ze=at.next()){se.index>Te?(Pe=se,se=null):Pe=se.sibling;var Tr=ct(K,se,Ze.value,St);if(Tr===null){se===null&&(se=Pe);break}e&&se&&Tr.alternate===null&&n(K,se),X=d(Tr,X,Te),je===null?re=Tr:je.sibling=Tr,je=Tr,se=Pe}if(Ze.done)return a(K,se),ze&&vs(K,Te),re;if(se===null){for(;!Ze.done;Te++,Ze=at.next())Ze=Et(K,Ze.value,St),Ze!==null&&(X=d(Ze,X,Te),je===null?re=Ze:je.sibling=Ze,je=Ze);return ze&&vs(K,Te),re}for(se=o(se);!Ze.done;Te++,Ze=at.next())Ze=pt(se,K,Te,Ze.value,St),Ze!==null&&(e&&Ze.alternate!==null&&se.delete(Ze.key===null?Te:Ze.key),X=d(Ze,X,Te),je===null?re=Ze:je.sibling=Ze,je=Ze);return e&&se.forEach(function(OM){return n(K,OM)}),ze&&vs(K,Te),re}function cn(K,X,at,St){if(typeof at=="object"&&at!==null&&at.type===w&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case y:t:{for(var re=at.key;X!==null;){if(X.key===re){if(re=at.type,re===w){if(X.tag===7){a(K,X.sibling),St=u(X,at.props.children),St.return=K,K=St;break t}}else if(X.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===T&&Qr(re)===X.type){a(K,X.sibling),St=u(X,at.props),tc(St,at),St.return=K,K=St;break t}a(K,X);break}else n(K,X);X=X.sibling}at.type===w?(St=Yr(at.props.children,K.mode,St,at.key),St.return=K,K=St):(St=Tu(at.type,at.key,at.props,null,K.mode,St),tc(St,at),St.return=K,K=St)}return x(K);case E:t:{for(re=at.key;X!==null;){if(X.key===re)if(X.tag===4&&X.stateNode.containerInfo===at.containerInfo&&X.stateNode.implementation===at.implementation){a(K,X.sibling),St=u(X,at.children||[]),St.return=K,K=St;break t}else{a(K,X);break}else n(K,X);X=X.sibling}St=bh(at,K.mode,St),St.return=K,K=St}return x(K);case T:return at=Qr(at),cn(K,X,at,St)}if(Z(at))return te(K,X,at,St);if(tt(at)){if(re=tt(at),typeof re!="function")throw Error(s(150));return at=re.call(at),fe(K,X,at,St)}if(typeof at.then=="function")return cn(K,X,Lu(at),St);if(at.$$typeof===L)return cn(K,X,Cu(K,at),St);Uu(K,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,X!==null&&X.tag===6?(a(K,X.sibling),St=u(X,at),St.return=K,K=St):(a(K,X),St=Eh(at,K.mode,St),St.return=K,K=St),x(K)):a(K,X)}return function(K,X,at,St){try{$l=0;var re=cn(K,X,at,St);return Wo=null,re}catch(se){if(se===Xo||se===Du)throw se;var je=Zi(29,se,null,K.mode);return je.lanes=St,je.return=K,je}}}var $r=ag(!0),sg=ag(!1),lr=!1;function Ph(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ur(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bu(e),V0(e,null,a),n}return Eu(e,o,n,a),bu(e)}function ec(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ni(e,a)}}function Bh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var zh=!1;function nc(){if(zh){var e=ko;if(e!==null)throw e}}function ic(e,n,a,o){zh=!1;var u=e.updateQueue;lr=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,rt=G.next;G.next=null,x===null?d=rt:x.next=rt,x=G;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,A=_t.lastBaseUpdate,A!==x&&(A===null?_t.firstBaseUpdate=rt:A.next=rt,_t.lastBaseUpdate=G))}if(d!==null){var Et=u.baseState;x=0,_t=rt=G=null,A=d;do{var ct=A.lane&-536870913,pt=ct!==A.lane;if(pt?(Ie&ct)===ct:(o&ct)===ct){ct!==0&&ct===Vo&&(zh=!0),_t!==null&&(_t=_t.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var te=e,fe=A;ct=n;var cn=a;switch(fe.tag){case 1:if(te=fe.payload,typeof te=="function"){Et=te.call(cn,Et,ct);break t}Et=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=fe.payload,ct=typeof te=="function"?te.call(cn,Et,ct):te,ct==null)break t;Et=v({},Et,ct);break t;case 2:lr=!0}}ct=A.callback,ct!==null&&(e.flags|=64,pt&&(e.flags|=8192),pt=u.callbacks,pt===null?u.callbacks=[ct]:pt.push(ct))}else pt={lane:ct,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_t===null?(rt=_t=pt,G=Et):_t=_t.next=pt,x|=ct;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;pt=A,A=pt.next,pt.next=null,u.lastBaseUpdate=pt,u.shared.pending=null}}while(!0);_t===null&&(G=Et),u.baseState=G,u.firstBaseUpdate=rt,u.lastBaseUpdate=_t,d===null&&(u.shared.lanes=0),mr|=x,e.lanes=x,e.memoizedState=Et}}function rg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function og(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)rg(a[e],n)}var Yo=U(null),Ou=U(0);function lg(e,n){e=ws,ft(Ou,e),ft(Yo,n),ws=e|n.baseLanes}function Hh(){ft(Ou,ws),ft(Yo,Yo.current)}function Gh(){ws=Ou.current,q(Yo),q(Ou)}var Ki=U(null),ga=null;function fr(e){var n=e.alternate;ft(Ln,Ln.current&1),ft(Ki,e),ga===null&&(n===null||Yo.current!==null||n.memoizedState!==null)&&(ga=e)}function Vh(e){ft(Ln,Ln.current),ft(Ki,e),ga===null&&(ga=e)}function cg(e){e.tag===22?(ft(Ln,Ln.current),ft(Ki,e),ga===null&&(ga=e)):dr()}function dr(){ft(Ln,Ln.current),ft(Ki,Ki.current)}function Qi(e){q(Ki),ga===e&&(ga=null),q(Ln)}var Ln=U(0);function Iu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jp(a)||Zp(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ys=0,Me=null,on=null,Bn=null,Pu=!1,qo=!1,to=!1,Fu=0,ac=0,jo=null,by=0;function wn(){throw Error(s(321))}function kh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!En(e[a],n[a]))return!1;return!0}function Xh(e,n,a,o,u,d){return ys=d,Me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Yg:sp,to=!1,d=a(o,u),to=!1,qo&&(d=fg(n,a,o,u)),ug(e),d}function ug(e){I.H=oc;var n=on!==null&&on.next!==null;if(ys=0,Bn=on=Me=null,Pu=!1,ac=0,jo=null,n)throw Error(s(300));e===null||zn||(e=e.dependencies,e!==null&&Ru(e)&&(zn=!0))}function fg(e,n,a,o){Me=e;var u=0;do{if(qo&&(jo=null),ac=0,qo=!1,25<=u)throw Error(s(301));if(u+=1,Bn=on=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=qg,d=n(a,o)}while(qo);return d}function Ty(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?sc(n):n,e=e.useState()[0],(on!==null?on.memoizedState:null)!==e&&(Me.flags|=1024),n}function Wh(){var e=Fu!==0;return Fu=0,e}function Yh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qh(e){if(Pu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pu=!1}ys=0,Bn=on=Me=null,qo=!1,ac=Fu=0,jo=null}function Ri(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?Me.memoizedState=Bn=e:Bn=Bn.next=e,Bn}function Un(){if(on===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=on.next;var n=Bn===null?Me.memoizedState:Bn.next;if(n!==null)Bn=n,on=e;else{if(e===null)throw Me.alternate===null?Error(s(467)):Error(s(310));on=e,e={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},Bn===null?Me.memoizedState=Bn=e:Bn=Bn.next=e}return Bn}function Bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sc(e){var n=ac;return ac+=1,jo===null&&(jo=[]),e=eg(jo,e,n),n=Me,(Bn===null?n.memoizedState:Bn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Yg:sp),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sc(e);if(e.$$typeof===L)return fi(e)}throw Error(s(438,String(e)))}function jh(e){var n=null,a=Me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bu(),Me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=mt;return n.index++,a}function Ms(e,n){return typeof n=="function"?n(e):n}function Hu(e){var n=Un();return Zh(n,on,e)}function Zh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=x=null,G=null,rt=n,_t=!1;do{var Et=rt.lane&-536870913;if(Et!==rt.lane?(Ie&Et)===Et:(ys&Et)===Et){var ct=rt.revertLane;if(ct===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),Et===Vo&&(_t=!0);else if((ys&ct)===ct){rt=rt.next,ct===Vo&&(_t=!0);continue}else Et={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(A=G=Et,x=d):G=G.next=Et,Me.lanes|=ct,mr|=ct;Et=rt.action,to&&a(d,Et),d=rt.hasEagerState?rt.eagerState:a(d,Et)}else ct={lane:Et,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(A=G=ct,x=d):G=G.next=ct,Me.lanes|=Et,mr|=Et;rt=rt.next}while(rt!==null&&rt!==n);if(G===null?x=d:G.next=A,!En(d,e.memoizedState)&&(zn=!0,_t&&(a=ko,a!==null)))throw a;e.memoizedState=d,e.baseState=x,e.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Kh(e){var n=Un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);En(d,n.memoizedState)||(zn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function dg(e,n,a){var o=Me,u=Un(),d=ze;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!En((on||u).memoizedState,a);if(x&&(u.memoizedState=a,zn=!0),u=u.queue,$h(mg.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||Bn!==null&&Bn.memoizedState.tag&1){if(o.flags|=2048,Zo(9,{destroy:void 0},pg.bind(null,o,u,a,n),null),dn===null)throw Error(s(349));d||(ys&127)!==0||hg(o,n,a)}return a}function hg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Me.updateQueue,n===null?(n=Bu(),Me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function pg(e,n,a,o){n.value=a,n.getSnapshot=o,gg(n)&&_g(e)}function mg(e,n,a){return a(function(){gg(n)&&_g(e)})}function gg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!En(e,a)}catch{return!0}}function _g(e){var n=Wr(e,2);n!==null&&ki(n,e,2)}function Qh(e){var n=Ri();if(typeof e=="function"){var a=e;if(e=a(),to){Mt(!0);try{a()}finally{Mt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:e},n}function vg(e,n,a,o){return e.baseState=a,Zh(e,on,typeof o=="function"?o:Ms)}function Ay(e,n,a,o,u){if(ku(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,xg(n,d)):(d.next=a.next,n.pending=a.next=d)}}function xg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=I.T,x={};I.T=x;try{var A=a(u,o),G=I.S;G!==null&&G(x,A),Sg(e,n,A)}catch(rt){Jh(e,n,rt)}finally{d!==null&&x.types!==null&&(d.types=x.types),I.T=d}}else try{d=a(u,o),Sg(e,n,d)}catch(rt){Jh(e,n,rt)}}function Sg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){yg(e,n,o)},function(o){return Jh(e,n,o)}):yg(e,n,a)}function yg(e,n,a){n.status="fulfilled",n.value=a,Mg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,xg(e,a)))}function Jh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Mg(n),n=n.next;while(n!==o)}e.action=null}function Mg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Eg(e,n){return n}function bg(e,n){if(ze){var a=dn.formState;if(a!==null){t:{var o=Me;if(ze){if(_n){e:{for(var u=_n,d=ma;u.nodeType!==8;){if(!d){u=null;break e}if(u=_a(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){_n=_a(u.nextSibling),o=u.data==="F!";break t}}rr(o)}o=!1}o&&(n=a[0])}}return a=Ri(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eg,lastRenderedState:n},a.queue=o,a=kg.bind(null,Me,o),o.dispatch=a,o=Qh(!1),d=ap.bind(null,Me,!1,o.queue),o=Ri(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ay.bind(null,Me,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Tg(e){var n=Un();return Ag(n,on,e)}function Ag(e,n,a){if(n=Zh(e,n,Eg)[0],e=Hu(Ms)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=sc(n)}catch(x){throw x===Xo?Du:x}else o=n;n=Un();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Me.flags|=2048,Zo(9,{destroy:void 0},Ry.bind(null,u,a),null)),[o,d,e]}function Ry(e,n){e.action=n}function Rg(e){var n=Un(),a=on;if(a!==null)return Ag(n,a,e);Un(),n=n.memoizedState,a=Un();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Zo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Me.updateQueue,n===null&&(n=Bu(),Me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Cg(){return Un().memoizedState}function Gu(e,n,a,o){var u=Ri();Me.flags|=e,u.memoizedState=Zo(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vu(e,n,a,o){var u=Un();o=o===void 0?null:o;var d=u.memoizedState.inst;on!==null&&o!==null&&kh(o,on.memoizedState.deps)?u.memoizedState=Zo(n,d,a,o):(Me.flags|=e,u.memoizedState=Zo(1|n,d,a,o))}function wg(e,n){Gu(8390656,8,e,n)}function $h(e,n){Vu(2048,8,e,n)}function Cy(e){Me.flags|=4;var n=Me.updateQueue;if(n===null)n=Bu(),Me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Dg(e){var n=Un().memoizedState;return Cy({ref:n,nextImpl:e}),function(){if((Je&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ng(e,n){return Vu(4,2,e,n)}function Lg(e,n){return Vu(4,4,e,n)}function Ug(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Og(e,n,a){a=a!=null?a.concat([e]):null,Vu(4,4,Ug.bind(null,n,e),a)}function tp(){}function Ig(e,n){var a=Un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&kh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Pg(e,n){var a=Un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&kh(n,o[1]))return o[0];if(o=e(),to){Mt(!0);try{e()}finally{Mt(!1)}}return a.memoizedState=[o,n],o}function ep(e,n,a){return a===void 0||(ys&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=F_(),Me.lanes|=e,mr|=e,a)}function Fg(e,n,a,o){return En(a,n)?a:Yo.current!==null?(e=ep(e,a,o),En(e,n)||(zn=!0),e):(ys&42)===0||(ys&1073741824)!==0&&(Ie&261930)===0?(zn=!0,e.memoizedState=a):(e=F_(),Me.lanes|=e,mr|=e,n)}function Bg(e,n,a,o,u){var d=F.p;F.p=d!==0&&8>d?d:8;var x=I.T,A={};I.T=A,ap(e,!1,n,a);try{var G=u(),rt=I.S;if(rt!==null&&rt(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _t=Ey(G,o);rc(e,n,_t,ta(e))}else rc(e,n,o,ta(e))}catch(Et){rc(e,n,{then:function(){},status:"rejected",reason:Et},ta())}finally{F.p=d,x!==null&&A.types!==null&&(x.types=A.types),I.T=x}}function wy(){}function np(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=zg(e).queue;Bg(e,u,n,ut,a===null?wy:function(){return Hg(e),a(o)})}function zg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:ut},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Hg(e){var n=zg(e);n.next===null&&(n=e.alternate.memoizedState),rc(e,n.next.queue,{},ta())}function ip(){return fi(Ec)}function Gg(){return Un().memoizedState}function Vg(){return Un().memoizedState}function Dy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ta();e=cr(a);var o=ur(n,e,a);o!==null&&(ki(o,n,a),ec(o,n,a)),n={cache:Lh()},e.payload=n;return}n=n.return}}function Ny(e,n,a){var o=ta();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ku(e)?Xg(n,a):(a=yh(e,n,a,o),a!==null&&(ki(a,e,o),Wg(a,n,o)))}function kg(e,n,a){var o=ta();rc(e,n,a,o)}function rc(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ku(e))Xg(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,A=d(x,a);if(u.hasEagerState=!0,u.eagerState=A,En(A,x))return Eu(e,n,u,0),dn===null&&Mu(),!1}catch{}if(a=yh(e,n,u,o),a!==null)return ki(a,e,o),Wg(a,n,o),!0}return!1}function ap(e,n,a,o){if(o={lane:2,revertLane:Pp(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ku(e)){if(n)throw Error(s(479))}else n=yh(e,a,o,2),n!==null&&ki(n,e,2)}function ku(e){var n=e.alternate;return e===Me||n!==null&&n===Me}function Xg(e,n){qo=Pu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Wg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ni(e,a)}}var oc={readContext:fi,use:zu,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn};oc.useEffectEvent=wn;var Yg={readContext:fi,use:zu,useCallback:function(e,n){return Ri().memoizedState=[e,n===void 0?null:n],e},useContext:fi,useEffect:wg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Gu(4194308,4,Ug.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Gu(4194308,4,e,n)},useInsertionEffect:function(e,n){Gu(4,2,e,n)},useMemo:function(e,n){var a=Ri();n=n===void 0?null:n;var o=e();if(to){Mt(!0);try{e()}finally{Mt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ri();if(a!==void 0){var u=a(n);if(to){Mt(!0);try{a(n)}finally{Mt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ny.bind(null,Me,e),[o.memoizedState,e]},useRef:function(e){var n=Ri();return e={current:e},n.memoizedState=e},useState:function(e){e=Qh(e);var n=e.queue,a=kg.bind(null,Me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:tp,useDeferredValue:function(e,n){var a=Ri();return ep(a,e,n)},useTransition:function(){var e=Qh(!1);return e=Bg.bind(null,Me,e.queue,!0,!1),Ri().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Me,u=Ri();if(ze){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),dn===null)throw Error(s(349));(Ie&127)!==0||hg(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,wg(mg.bind(null,o,d,e),[e]),o.flags|=2048,Zo(9,{destroy:void 0},pg.bind(null,o,d,a,n),null),a},useId:function(){var e=Ri(),n=dn.identifierPrefix;if(ze){var a=is,o=ns;a=(o&~(1<<32-vt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=by++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ip,useFormState:bg,useActionState:bg,useOptimistic:function(e){var n=Ri();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ap.bind(null,Me,!0,a),a.dispatch=n,[e,n]},useMemoCache:jh,useCacheRefresh:function(){return Ri().memoizedState=Dy.bind(null,Me)},useEffectEvent:function(e){var n=Ri(),a={impl:e};return n.memoizedState=a,function(){if((Je&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},sp={readContext:fi,use:zu,useCallback:Ig,useContext:fi,useEffect:$h,useImperativeHandle:Og,useInsertionEffect:Ng,useLayoutEffect:Lg,useMemo:Pg,useReducer:Hu,useRef:Cg,useState:function(){return Hu(Ms)},useDebugValue:tp,useDeferredValue:function(e,n){var a=Un();return Fg(a,on.memoizedState,e,n)},useTransition:function(){var e=Hu(Ms)[0],n=Un().memoizedState;return[typeof e=="boolean"?e:sc(e),n]},useSyncExternalStore:dg,useId:Gg,useHostTransitionStatus:ip,useFormState:Tg,useActionState:Tg,useOptimistic:function(e,n){var a=Un();return vg(a,on,e,n)},useMemoCache:jh,useCacheRefresh:Vg};sp.useEffectEvent=Dg;var qg={readContext:fi,use:zu,useCallback:Ig,useContext:fi,useEffect:$h,useImperativeHandle:Og,useInsertionEffect:Ng,useLayoutEffect:Lg,useMemo:Pg,useReducer:Kh,useRef:Cg,useState:function(){return Kh(Ms)},useDebugValue:tp,useDeferredValue:function(e,n){var a=Un();return on===null?ep(a,e,n):Fg(a,on.memoizedState,e,n)},useTransition:function(){var e=Kh(Ms)[0],n=Un().memoizedState;return[typeof e=="boolean"?e:sc(e),n]},useSyncExternalStore:dg,useId:Gg,useHostTransitionStatus:ip,useFormState:Rg,useActionState:Rg,useOptimistic:function(e,n){var a=Un();return on!==null?vg(a,on,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jh,useCacheRefresh:Vg};qg.useEffectEvent=Dg;function rp(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var op={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ta(),u=cr(o);u.payload=n,a!=null&&(u.callback=a),n=ur(e,u,o),n!==null&&(ki(n,e,o),ec(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ta(),u=cr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ur(e,u,o),n!==null&&(ki(n,e,o),ec(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ta(),o=cr(a);o.tag=2,n!=null&&(o.callback=n),n=ur(e,o,a),n!==null&&(ki(n,e,a),ec(n,e,a))}};function jg(e,n,a,o,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!Ii(a,o)||!Ii(u,d):!0}function Zg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&op.enqueueReplaceState(n,n.state,null)}function eo(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Kg(e){yu(e)}function Qg(e){console.error(e)}function Jg(e){yu(e)}function Xu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function $g(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lp(e,n,a){return a=cr(a),a.tag=3,a.payload={element:null},a.callback=function(){Xu(e,n)},a}function t_(e){return e=cr(e),e.tag=3,e}function e_(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){$g(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){$g(n,a,o),typeof u!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Ly(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Go(n,a,u,!0),a=Ki.current,a!==null){switch(a.tag){case 31:case 13:return ga===null?nf():a.alternate===null&&Dn===0&&(Dn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Nu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Up(e,o,u)),!1;case 22:return a.flags|=65536,o===Nu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Up(e,o,u)),!1}throw Error(s(435,a.tag))}return Up(e,o,u),nf(),!1}if(ze)return n=Ki.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Rh&&(e=Error(s(422),{cause:o}),Kl(da(e,a)))):(o!==Rh&&(n=Error(s(423),{cause:o}),Kl(da(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=da(o,a),u=lp(e.stateNode,o,u),Bh(e,u),Dn!==4&&(Dn=2)),!1;var d=Error(s(520),{cause:o});if(d=da(d,a),mc===null?mc=[d]:mc.push(d),Dn!==4&&(Dn=2),n===null)return!0;o=da(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=lp(a.stateNode,o,e),Bh(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gr===null||!gr.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=t_(u),e_(u,e,a,o),Bh(a,u),!1}a=a.return}while(a!==null);return!1}var cp=Error(s(461)),zn=!1;function di(e,n,a,o){n.child=e===null?sg(n,null,a,o):$r(n,e.child,a,o)}function n_(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Zr(n),o=Xh(e,n,a,x,d,u),A=Wh(),e!==null&&!zn?(Yh(e,n,u),Es(e,n,u)):(ze&&A&&Th(n),n.flags|=1,di(e,n,o,u),n.child)}function i_(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Mh(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,a_(e,n,d,o,u)):(e=Tu(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!_p(e,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ii,a(x,o)&&e.ref===n.ref)return Es(e,n,u)}return n.flags|=1,e=_s(d,o),e.ref=n.ref,e.return=n,n.child=e}function a_(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(Ii(d,o)&&e.ref===n.ref)if(zn=!1,n.pendingProps=o=d,_p(e,u))(e.flags&131072)!==0&&(zn=!0);else return n.lanes=e.lanes,Es(e,n,u)}return up(e,n,a,o,u)}function s_(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return r_(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&wu(n,d!==null?d.cachePool:null),d!==null?lg(n,d):Hh(),cg(n);else return o=n.lanes=536870912,r_(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(wu(n,d.cachePool),lg(n,d),dr(),n.memoizedState=null):(e!==null&&wu(n,null),Hh(),dr());return di(e,n,u,a),n.child}function lc(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function r_(e,n,a,o,u){var d=Oh();return d=d===null?null:{parent:Fn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&wu(n,null),Hh(),cg(n),e!==null&&Go(e,n,o,!0),n.childLanes=u,null}function Wu(e,n){return n=qu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function o_(e,n,a){return $r(n,e.child,null,a),e=Wu(n,n.pendingProps),e.flags|=2,Qi(n),n.memoizedState=null,e}function Uy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ze){if(o.mode==="hidden")return e=Wu(n,o),n.lanes=536870912,lc(null,e);if(Vh(n),(e=_n)?(e=xv(e,ma),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ar!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},a=X0(e),a.return=n,n.child=a,ui=n,_n=null)):e=null,e===null)throw rr(n);return n.lanes=536870912,null}return Wu(n,o)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(Vh(n),u)if(n.flags&256)n.flags&=-257,n=o_(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(zn||Go(e,n,a,!1),u=(a&e.childLanes)!==0,zn||u){if(o=dn,o!==null&&(x=kn(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,Wr(e,x),ki(o,e,x),cp;nf(),n=o_(e,n,a)}else e=d.treeContext,_n=_a(x.nextSibling),ui=n,ze=!0,sr=null,ma=!1,e!==null&&q0(n,e),n=Wu(n,o),n.flags|=4096;return n}return e=_s(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Yu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function up(e,n,a,o,u){return Zr(n),a=Xh(e,n,a,o,void 0,u),o=Wh(),e!==null&&!zn?(Yh(e,n,u),Es(e,n,u)):(ze&&o&&Th(n),n.flags|=1,di(e,n,a,u),n.child)}function l_(e,n,a,o,u,d){return Zr(n),n.updateQueue=null,a=fg(n,o,a,u),ug(e),o=Wh(),e!==null&&!zn?(Yh(e,n,d),Es(e,n,d)):(ze&&o&&Th(n),n.flags|=1,di(e,n,a,d),n.child)}function c_(e,n,a,o,u){if(Zr(n),n.stateNode===null){var d=Fo,x=a.contextType;typeof x=="object"&&x!==null&&(d=fi(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=op,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ph(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?fi(x):Fo,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(rp(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&op.enqueueReplaceState(d,d.state,null),ic(n,o,d,u),nc(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,G=eo(a,A);d.props=G;var rt=d.context,_t=a.contextType;x=Fo,typeof _t=="object"&&_t!==null&&(x=fi(_t));var Et=a.getDerivedStateFromProps;_t=typeof Et=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,_t||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||rt!==x)&&Zg(n,d,o,x),lr=!1;var ct=n.memoizedState;d.state=ct,ic(n,o,d,u),nc(),rt=n.memoizedState,A||ct!==rt||lr?(typeof Et=="function"&&(rp(n,a,Et,o),rt=n.memoizedState),(G=lr||jg(n,a,G,o,ct,rt,x))?(_t||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=rt),d.props=o,d.state=rt,d.context=x,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Fh(e,n),x=n.memoizedProps,_t=eo(a,x),d.props=_t,Et=n.pendingProps,ct=d.context,rt=a.contextType,G=Fo,typeof rt=="object"&&rt!==null&&(G=fi(rt)),A=a.getDerivedStateFromProps,(rt=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Et||ct!==G)&&Zg(n,d,o,G),lr=!1,ct=n.memoizedState,d.state=ct,ic(n,o,d,u),nc();var pt=n.memoizedState;x!==Et||ct!==pt||lr||e!==null&&e.dependencies!==null&&Ru(e.dependencies)?(typeof A=="function"&&(rp(n,a,A,o),pt=n.memoizedState),(_t=lr||jg(n,a,_t,o,ct,pt,G)||e!==null&&e.dependencies!==null&&Ru(e.dependencies))?(rt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,pt,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,pt,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=pt),d.props=o,d.state=pt,d.context=G,o=_t):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Yu(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=$r(n,e.child,null,u),n.child=$r(n,null,a,u)):di(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Es(e,n,u),e}function u_(e,n,a,o){return qr(),n.flags|=256,di(e,n,a,o),n.child}var fp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dp(e){return{baseLanes:e,cachePool:$0()}}function hp(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$i),e}function f_(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(Ln.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(u?fr(n):dr(),(e=_n)?(e=xv(e,ma),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ar!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},a=X0(e),a.return=n,n.child=a,ui=n,_n=null)):e=null,e===null)throw rr(n);return Zp(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(dr(),u=n.mode,A=qu({mode:"hidden",children:A},u),o=Yr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=dp(a),o.childLanes=hp(e,x,a),n.memoizedState=fp,lc(null,o)):(fr(n),pp(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(d)n.flags&256?(fr(n),n.flags&=-257,n=mp(e,n,a)):n.memoizedState!==null?(dr(),n.child=e.child,n.flags|=128,n=null):(dr(),A=o.fallback,u=n.mode,o=qu({mode:"visible",children:o.children},u),A=Yr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,$r(n,e.child,null,a),o=n.child,o.memoizedState=dp(a),o.childLanes=hp(e,x,a),n.memoizedState=fp,n=lc(null,o));else if(fr(n),Zp(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var rt=x.dgst;x=rt,o=Error(s(419)),o.stack="",o.digest=x,Kl({value:o,source:null,stack:null}),n=mp(e,n,a)}else if(zn||Go(e,n,a,!1),x=(a&e.childLanes)!==0,zn||x){if(x=dn,x!==null&&(o=kn(x,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Wr(e,o),ki(x,e,o),cp;jp(A)||nf(),n=mp(e,n,a)}else jp(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,_n=_a(A.nextSibling),ui=n,ze=!0,sr=null,ma=!1,e!==null&&q0(n,e),n=pp(n,o.children),n.flags|=4096);return n}return u?(dr(),A=o.fallback,u=n.mode,G=e.child,rt=G.sibling,o=_s(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,rt!==null?A=_s(rt,A):(A=Yr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,lc(null,o),o=n.child,A=e.child.memoizedState,A===null?A=dp(a):(u=A.cachePool,u!==null?(G=Fn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=$0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=hp(e,x,a),n.memoizedState=fp,lc(e.child,o)):(fr(n),a=e.child,e=a.sibling,a=_s(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function pp(e,n){return n=qu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function qu(e,n){return e=Zi(22,e,null,n),e.lanes=0,e}function mp(e,n,a){return $r(n,e.child,null,a),e=pp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function d_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Dh(e.return,n,a)}function gp(e,n,a,o,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function h_(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=Ln.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,ft(Ln,x),di(e,n,o,a),o=ze?Zl:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d_(e,a,n);else if(e.tag===19)d_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Iu(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gp(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Iu(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gp(n,!0,a,null,d,o);break;case"together":gp(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Es(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),mr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Go(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=_s(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=_s(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _p(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ru(e)))}function Oy(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),or(n,Fn,e.memoizedState.cache),qr();break;case 27:case 5:$t(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:or(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(fr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?f_(e,n,a):(fr(n),e=Es(e,n,a),e!==null?e.sibling:null);fr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Go(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return h_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ft(Ln,Ln.current),o)break;return null;case 22:return n.lanes=0,s_(e,n,a,n.pendingProps);case 24:or(n,Fn,e.memoizedState.cache)}return Es(e,n,a)}function p_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)zn=!0;else{if(!_p(e,a)&&(n.flags&128)===0)return zn=!1,Oy(e,n,a);zn=(e.flags&131072)!==0}else zn=!1,ze&&(n.flags&1048576)!==0&&Y0(n,Zl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Qr(n.elementType),n.type=e,typeof e=="function")Mh(e)?(o=eo(e,o),n.tag=1,n=c_(null,n,e,o,a)):(n.tag=0,n=up(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=n_(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=i_(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return up(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=eo(o,n.pendingProps),c_(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Fh(e,n),ic(n,o,null,a);var x=n.memoizedState;if(o=x.cache,or(n,Fn,o),o!==d.cache&&Nh(n,[Fn],a,!0),nc(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=u_(e,n,o,a);break t}else if(o!==u){u=da(Error(s(424)),n),Kl(u),n=u_(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_n=_a(e.firstChild),ui=n,ze=!0,sr=null,ma=!0,a=sg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qr(),o===u){n=Es(e,n,a);break t}di(e,n,o,a)}n=n.child}return n;case 26:return Yu(e,n),e===null?(a=Tv(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,e=n.pendingProps,o=uf(nt.current).createElement(a),o[yn]=n,o[An]=e,hi(o,a,e),Y(o),n.stateNode=o):n.memoizedState=Tv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return $t(n),e===null&&ze&&(o=n.stateNode=Mv(n.type,n.pendingProps,nt.current),ui=n,ma=!0,u=_n,Sr(n.type)?(Kp=u,_n=_a(o.firstChild)):_n=u),di(e,n,n.pendingProps.children,a),Yu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((u=o=_n)&&(o=uM(o,n.type,n.pendingProps,ma),o!==null?(n.stateNode=o,ui=n,_n=_a(o.firstChild),ma=!1,u=!0):u=!1),u||rr(n)),$t(n),u=n.type,d=n.pendingProps,x=e!==null?e.memoizedProps:null,o=d.children,Wp(u,d)?o=null:x!==null&&Wp(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Xh(e,n,Ty,null,null,a),Ec._currentValue=u),Yu(e,n),di(e,n,o,a),n.child;case 6:return e===null&&ze&&((e=a=_n)&&(a=fM(a,n.pendingProps,ma),a!==null?(n.stateNode=a,ui=n,_n=null,e=!0):e=!1),e||rr(n)),null;case 13:return f_(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=$r(n,null,o,a):di(e,n,o,a),n.child;case 11:return n_(e,n,n.type,n.pendingProps,a);case 7:return di(e,n,n.pendingProps,a),n.child;case 8:return di(e,n,n.pendingProps.children,a),n.child;case 12:return di(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,or(n,n.type,o.value),di(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Zr(n),u=fi(u),o=o(u),n.flags|=1,di(e,n,o,a),n.child;case 14:return i_(e,n,n.type,n.pendingProps,a);case 15:return a_(e,n,n.type,n.pendingProps,a);case 19:return h_(e,n,a);case 31:return Uy(e,n,a);case 22:return s_(e,n,a,n.pendingProps);case 24:return Zr(n),o=fi(Fn),e===null?(u=Oh(),u===null&&(u=dn,d=Lh(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ph(n),or(n,Fn,u)):((e.lanes&a)!==0&&(Fh(e,n),ic(n,null,null,a),nc()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),or(n,Fn,o)):(o=d.cache,or(n,Fn,o),o!==u.cache&&Nh(n,[Fn],a,!0))),di(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function bs(e){e.flags|=4}function vp(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(G_())e.flags|=8192;else throw Jr=Nu,Ih}else e.flags&=-16777217}function m_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dv(n))if(G_())e.flags|=8192;else throw Jr=Nu,Ih}function ju(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?we():536870912,e.lanes|=n,$o|=n)}function cc(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function vn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Iy(e,n,a){var o=n.pendingProps;switch(Ah(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ss(Fn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ho(n)?bs(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ch())),vn(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(bs(n),d!==null?(vn(n),m_(n,d)):(vn(n),vp(n,u,null,o,a))):d?d!==e.memoizedState?(bs(n),vn(n),m_(n,d)):(vn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&bs(n),vn(n),vp(n,u,e,o,a)),null;case 27:if(oe(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&bs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}e=Lt.current,Ho(n)?j0(n):(e=Mv(u,o,a),n.stateNode=e,bs(n))}return vn(n),null;case 5:if(oe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&bs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}if(d=Lt.current,Ho(n))j0(n);else{var x=uf(nt.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[yn]=n,d[An]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;t:switch(hi(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&bs(n)}}return vn(n),vp(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&bs(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,Ho(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ui,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[yn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||fv(e.nodeValue,a)),e||rr(n,!0)}else e=uf(e).createTextNode(o),e[yn]=n,n.stateNode=e}return vn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ho(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[yn]=n}else qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),e=!1}else a=Ch(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qi(n),n):(Qi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return vn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ho(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[yn]=n}else qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=Ch(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qi(n),n):(Qi(n),null)}return Qi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ju(n,n.updateQueue),vn(n),null);case 4:return Zt(),e===null&&Hp(n.stateNode.containerInfo),vn(n),null;case 10:return Ss(n.type),vn(n),null;case 19:if(q(Ln),o=n.memoizedState,o===null)return vn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)cc(o,!1);else{if(Dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Iu(e),d!==null){for(n.flags|=128,cc(o,!1),e=d.updateQueue,n.updateQueue=e,ju(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)k0(a,e),a=a.sibling;return ft(Ln,Ln.current&1|2),ze&&vs(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>$u&&(n.flags|=128,u=!0,cc(o,!1),n.lanes=4194304)}else{if(!u)if(e=Iu(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ju(n,e),cc(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!ze)return vn(n),null}else 2*b()-o.renderingStartTime>$u&&a!==536870912&&(n.flags|=128,u=!0,cc(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=Ln.current,ft(Ln,u?a&1|2:a&1),ze&&vs(n,o.treeForkCount),e):(vn(n),null);case 22:case 23:return Qi(n),Gh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&ju(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(Kr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ss(Fn),vn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Py(e,n){switch(Ah(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ss(Fn),Zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 31:if(n.memoizedState!==null){if(Qi(n),n.alternate===null)throw Error(s(340));qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(Ln),null;case 4:return Zt(),null;case 10:return Ss(n.type),null;case 22:case 23:return Qi(n),Gh(),e!==null&&q(Kr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ss(Fn),null;case 25:return null;default:return null}}function g_(e,n){switch(Ah(n),n.tag){case 3:Ss(Fn),Zt();break;case 26:case 27:case 5:oe(n);break;case 4:Zt();break;case 31:n.memoizedState!==null&&Qi(n);break;case 13:Qi(n);break;case 19:q(Ln);break;case 10:Ss(n.type);break;case 22:case 23:Qi(n),Gh(),e!==null&&q(Kr);break;case 24:Ss(Fn)}}function uc(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){sn(n,n.return,A)}}function hr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var G=a,rt=A;try{rt()}catch(_t){sn(u,G,_t)}}}o=o.next}while(o!==d)}}catch(_t){sn(n,n.return,_t)}}function __(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{og(n,a)}catch(o){sn(e,e.return,o)}}}function v_(e,n,a){a.props=eo(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){sn(e,n,o)}}function fc(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){sn(e,n,u)}}function as(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){sn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){sn(e,n,u)}else a.current=null}function x_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){sn(e,e.return,u)}}function xp(e,n,a){try{var o=e.stateNode;aM(o,e.type,a,n),o[An]=n}catch(u){sn(e,e.return,u)}}function S_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sr(e.type)||e.tag===4}function Sp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||S_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yp(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&Sr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(yp(e,n,a),e=e.sibling;e!==null;)yp(e,n,a),e=e.sibling}function Zu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Sr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zu(e,n,a),e=e.sibling;e!==null;)Zu(e,n,a),e=e.sibling}function y_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);hi(n,o,a),n[yn]=e,n[An]=a}catch(d){sn(e,e.return,d)}}var Ts=!1,Hn=!1,Mp=!1,M_=typeof WeakSet=="function"?WeakSet:Set,ni=null;function Fy(e,n){if(e=e.containerInfo,kp=_f,e=ye(e),Qe(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var x=0,A=-1,G=-1,rt=0,_t=0,Et=e,ct=null;e:for(;;){for(var pt;Et!==a||u!==0&&Et.nodeType!==3||(A=x+u),Et!==d||o!==0&&Et.nodeType!==3||(G=x+o),Et.nodeType===3&&(x+=Et.nodeValue.length),(pt=Et.firstChild)!==null;)ct=Et,Et=pt;for(;;){if(Et===e)break e;if(ct===a&&++rt===u&&(A=x),ct===d&&++_t===o&&(G=x),(pt=Et.nextSibling)!==null)break;Et=ct,ct=Et.parentNode}Et=pt}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xp={focusedElem:e,selectionRange:a},_f=!1,ni=n;ni!==null;)if(n=ni,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ni=e;else for(;ni!==null;){switch(n=ni,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var te=eo(a.type,u);e=o.getSnapshotBeforeUpdate(te,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(fe){sn(a,a.return,fe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qp(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,ni=e;break}ni=n.return}}function E_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Rs(e,a),o&4&&uc(5,a);break;case 1:if(Rs(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){sn(a,a.return,x)}else{var u=eo(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){sn(a,a.return,x)}}o&64&&__(a),o&512&&fc(a,a.return);break;case 3:if(Rs(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{og(e,n)}catch(x){sn(a,a.return,x)}}break;case 27:n===null&&o&4&&y_(a);case 26:case 5:Rs(e,a),n===null&&o&4&&x_(a),o&512&&fc(a,a.return);break;case 12:Rs(e,a);break;case 31:Rs(e,a),o&4&&A_(e,a);break;case 13:Rs(e,a),o&4&&R_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Yy.bind(null,a),dM(e,a))));break;case 22:if(o=a.memoizedState!==null||Ts,!o){n=n!==null&&n.memoizedState!==null||Hn,u=Ts;var d=Hn;Ts=o,(Hn=n)&&!d?Cs(e,a,(a.subtreeFlags&8772)!==0):Rs(e,a),Ts=u,Hn=d}break;case 30:break;default:Rs(e,a)}}function b_(e){var n=e.alternate;n!==null&&(e.alternate=null,b_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ca(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Sn=null,zi=!1;function As(e,n,a){for(a=a.child;a!==null;)T_(e,n,a),a=a.sibling}function T_(e,n,a){if(J&&typeof J.onCommitFiberUnmount=="function")try{J.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:Hn||as(a,n),As(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hn||as(a,n);var o=Sn,u=zi;Sr(a.type)&&(Sn=a.stateNode,zi=!1),As(e,n,a),Sc(a.stateNode),Sn=o,zi=u;break;case 5:Hn||as(a,n);case 6:if(o=Sn,u=zi,Sn=null,As(e,n,a),Sn=o,zi=u,Sn!==null)if(zi)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(a.stateNode)}catch(d){sn(a,n,d)}else try{Sn.removeChild(a.stateNode)}catch(d){sn(a,n,d)}break;case 18:Sn!==null&&(zi?(e=Sn,_v(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ol(e)):_v(Sn,a.stateNode));break;case 4:o=Sn,u=zi,Sn=a.stateNode.containerInfo,zi=!0,As(e,n,a),Sn=o,zi=u;break;case 0:case 11:case 14:case 15:hr(2,a,n),Hn||hr(4,a,n),As(e,n,a);break;case 1:Hn||(as(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&v_(a,n,o)),As(e,n,a);break;case 21:As(e,n,a);break;case 22:Hn=(o=Hn)||a.memoizedState!==null,As(e,n,a),Hn=o;break;default:As(e,n,a)}}function A_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ol(e)}catch(a){sn(n,n.return,a)}}}function R_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ol(e)}catch(a){sn(n,n.return,a)}}function By(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new M_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new M_),n;default:throw Error(s(435,e.tag))}}function Ku(e,n){var a=By(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=qy.bind(null,e,o);o.then(u,u)}})}function Hi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(Sr(A.type)){Sn=A.stateNode,zi=!1;break t}break;case 5:Sn=A.stateNode,zi=!1;break t;case 3:case 4:Sn=A.stateNode.containerInfo,zi=!0;break t}A=A.return}if(Sn===null)throw Error(s(160));T_(d,x,u),Sn=null,zi=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)C_(n,e),n=n.sibling}var Ba=null;function C_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hi(n,e),Gi(e),o&4&&(hr(3,e,e.return),uc(3,e),hr(5,e,e.return));break;case 1:Hi(n,e),Gi(e),o&512&&(Hn||a===null||as(a,a.return)),o&64&&Ts&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ba;if(Hi(n,e),Gi(e),o&512&&(Hn||a===null||as(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Wi]||d[yn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),hi(d,o,a),d[yn]=e,Y(d),o=d;break t;case"link":var x=Cv("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}d=u.createElement(o),hi(d,o,a),u.head.appendChild(d);break;case"meta":if(x=Cv("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}d=u.createElement(o),hi(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[yn]=e,Y(d),o=d}e.stateNode=o}else wv(u,e.type,e.stateNode);else e.stateNode=Rv(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?wv(u,e.type,e.stateNode):Rv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xp(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hi(n,e),Gi(e),o&512&&(Hn||a===null||as(a,a.return)),a!==null&&o&4&&xp(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hi(n,e),Gi(e),o&512&&(Hn||a===null||as(a,a.return)),e.flags&32){u=e.stateNode;try{oi(u,"")}catch(te){sn(e,e.return,te)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xp(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mp=!0);break;case 6:if(Hi(n,e),Gi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(te){sn(e,e.return,te)}}break;case 3:if(hf=null,u=Ba,Ba=ff(n.containerInfo),Hi(n,e),Ba=u,Gi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ol(n.containerInfo)}catch(te){sn(e,e.return,te)}Mp&&(Mp=!1,w_(e));break;case 4:o=Ba,Ba=ff(e.stateNode.containerInfo),Hi(n,e),Gi(e),Ba=o;break;case 12:Hi(n,e),Gi(e);break;case 31:Hi(n,e),Gi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ku(e,o)));break;case 13:Hi(n,e),Gi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ju=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ku(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,rt=Ts,_t=Hn;if(Ts=rt||u,Hn=_t||G,Hi(n,e),Hn=_t,Ts=rt,Gi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Ts||Hn||no(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=G.stateNode;var Et=G.memoizedProps.style,ct=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;A.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(te){sn(G,G.return,te)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(te){sn(G,G.return,te)}}}else if(n.tag===18){if(a===null){G=n;try{var pt=G.stateNode;u?vv(pt,!0):vv(G.stateNode,!1)}catch(te){sn(G,G.return,te)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ku(e,a))));break;case 19:Hi(n,e),Gi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ku(e,o)));break;case 30:break;case 21:break;default:Hi(n,e),Gi(e)}}function Gi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(S_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Sp(e);Zu(e,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(oi(x,""),a.flags&=-33);var A=Sp(e);Zu(e,A,x);break;case 3:case 4:var G=a.stateNode.containerInfo,rt=Sp(e);yp(e,rt,G);break;default:throw Error(s(161))}}catch(_t){sn(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function w_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;w_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Rs(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)E_(e,n.alternate,n),n=n.sibling}function no(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:hr(4,n,n.return),no(n);break;case 1:as(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&v_(n,n.return,a),no(n);break;case 27:Sc(n.stateNode);case 26:case 5:as(n,n.return),no(n);break;case 22:n.memoizedState===null&&no(n);break;case 30:no(n);break;default:no(n)}e=e.sibling}}function Cs(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:Cs(u,d,a),uc(4,d);break;case 1:if(Cs(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){sn(o,o.return,rt)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)rg(G[u],A)}catch(rt){sn(o,o.return,rt)}}a&&x&64&&__(d),fc(d,d.return);break;case 27:y_(d);case 26:case 5:Cs(u,d,a),a&&o===null&&x&4&&x_(d),fc(d,d.return);break;case 12:Cs(u,d,a);break;case 31:Cs(u,d,a),a&&x&4&&A_(u,d);break;case 13:Cs(u,d,a),a&&x&4&&R_(u,d);break;case 22:d.memoizedState===null&&Cs(u,d,a),fc(d,d.return);break;case 30:break;default:Cs(u,d,a)}n=n.sibling}}function Ep(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ql(a))}function bp(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ql(e))}function za(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)D_(e,n,a,o),n=n.sibling}function D_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:za(e,n,a,o),u&2048&&uc(9,n);break;case 1:za(e,n,a,o);break;case 3:za(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ql(e)));break;case 12:if(u&2048){za(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){sn(n,n.return,G)}}else za(e,n,a,o);break;case 31:za(e,n,a,o);break;case 13:za(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?za(e,n,a,o):dc(e,n):d._visibility&2?za(e,n,a,o):(d._visibility|=2,Ko(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ep(x,n);break;case 24:za(e,n,a,o),u&2048&&bp(n.alternate,n);break;default:za(e,n,a,o)}}function Ko(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,x=n,A=a,G=o,rt=x.flags;switch(x.tag){case 0:case 11:case 15:Ko(d,x,A,G,u),uc(8,x);break;case 23:break;case 22:var _t=x.stateNode;x.memoizedState!==null?_t._visibility&2?Ko(d,x,A,G,u):dc(d,x):(_t._visibility|=2,Ko(d,x,A,G,u)),u&&rt&2048&&Ep(x.alternate,x);break;case 24:Ko(d,x,A,G,u),u&&rt&2048&&bp(x.alternate,x);break;default:Ko(d,x,A,G,u)}n=n.sibling}}function dc(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:dc(a,o),u&2048&&Ep(o.alternate,o);break;case 24:dc(a,o),u&2048&&bp(o.alternate,o);break;default:dc(a,o)}n=n.sibling}}var hc=8192;function Qo(e,n,a){if(e.subtreeFlags&hc)for(e=e.child;e!==null;)N_(e,n,a),e=e.sibling}function N_(e,n,a){switch(e.tag){case 26:Qo(e,n,a),e.flags&hc&&e.memoizedState!==null&&bM(a,Ba,e.memoizedState,e.memoizedProps);break;case 5:Qo(e,n,a);break;case 3:case 4:var o=Ba;Ba=ff(e.stateNode.containerInfo),Qo(e,n,a),Ba=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=hc,hc=16777216,Qo(e,n,a),hc=o):Qo(e,n,a));break;default:Qo(e,n,a)}}function L_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function pc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ni=o,O_(o,e)}L_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)U_(e),e=e.sibling}function U_(e){switch(e.tag){case 0:case 11:case 15:pc(e),e.flags&2048&&hr(9,e,e.return);break;case 3:pc(e);break;case 12:pc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Qu(e)):pc(e);break;default:pc(e)}}function Qu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ni=o,O_(o,e)}L_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:hr(8,n,n.return),Qu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Qu(n));break;default:Qu(n)}e=e.sibling}}function O_(e,n){for(;ni!==null;){var a=ni;switch(a.tag){case 0:case 11:case 15:hr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ql(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ni=o;else t:for(a=e;ni!==null;){o=ni;var u=o.sibling,d=o.return;if(b_(o),o===a){ni=null;break t}if(u!==null){u.return=d,ni=u;break t}ni=d}}}var zy={getCacheForType:function(e){var n=fi(Fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return fi(Fn).controller.signal}},Hy=typeof WeakMap=="function"?WeakMap:Map,Je=0,dn=null,Le=null,Ie=0,an=0,Ji=null,pr=!1,Jo=!1,Tp=!1,ws=0,Dn=0,mr=0,io=0,Ap=0,$i=0,$o=0,mc=null,Vi=null,Rp=!1,Ju=0,I_=0,$u=1/0,tf=null,gr=null,Zn=0,_r=null,tl=null,Ds=0,Cp=0,wp=null,P_=null,gc=0,Dp=null;function ta(){return(Je&2)!==0&&Ie!==0?Ie&-Ie:I.T!==null?Pp():bi()}function F_(){if($i===0)if((Ie&536870912)===0||ze){var e=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),$i=e}else $i=536870912;return e=Ki.current,e!==null&&(e.flags|=32),$i}function ki(e,n,a){(e===dn&&(an===2||an===9)||e.cancelPendingCommit!==null)&&(el(e,0),vr(e,Ie,$i,!1)),xn(e,a),((Je&2)===0||e!==dn)&&(e===dn&&((Je&2)===0&&(io|=a),Dn===4&&vr(e,Ie,$i,!1)),ss(e))}function B_(e,n,a){if((Je&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||kt(e,n),u=o?ky(e,n):Lp(e,n,!0),d=o;do{if(u===0){Jo&&!o&&vr(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Gy(a)){u=Lp(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=mc;var G=A.current.memoizedState.isDehydrated;if(G&&(el(A,x).flags|=256),x=Lp(A,x,!1),x!==2){if(Tp&&!G){A.errorRecoveryDisabledLanes|=d,io|=d,u=4;break t}d=Vi,Vi=u,d!==null&&(Vi===null?Vi=d:Vi.push.apply(Vi,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){el(e,0),vr(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:vr(o,n,$i,!pr);break t;case 2:Vi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ju+300-b(),10<u)){if(vr(o,n,$i,!pr),dt(o,0,!0)!==0)break t;Ds=n,o.timeoutHandle=mv(z_.bind(null,o,a,Vi,tf,Rp,n,$i,io,$o,pr,d,"Throttled",-0,0),u);break t}z_(o,a,Vi,tf,Rp,n,$i,io,$o,pr,d,null,-0,0)}}break}while(!0);ss(e)}function z_(e,n,a,o,u,d,x,A,G,rt,_t,Et,ct,pt){if(e.timeoutHandle=-1,Et=n.subtreeFlags,Et&8192||(Et&16785408)===16785408){Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},N_(n,d,Et);var te=(d&62914560)===d?Ju-b():(d&4194048)===d?I_-b():0;if(te=TM(Et,te),te!==null){Ds=d,e.cancelPendingCommit=te(q_.bind(null,e,n,d,a,o,u,x,A,G,_t,Et,null,ct,pt)),vr(e,d,x,!rt);return}}q_(e,n,d,a,o,u,x,A,G)}function Gy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!En(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vr(e,n,a,o){n&=~Ap,n&=~io,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-vt(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&sa(e,a,n)}function ef(){return(Je&6)===0?(_c(0),!1):!0}function Np(){if(Le!==null){if(an===0)var e=Le.return;else e=Le,xs=jr=null,qh(e),Wo=null,$l=0,e=Le;for(;e!==null;)g_(e.alternate,e),e=e.return;Le=null}}function el(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,oM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ds=0,Np(),dn=e,Le=a=_s(e.current,null),Ie=n,an=0,Ji=null,pr=!1,Jo=kt(e,n),Tp=!1,$o=$i=Ap=io=mr=Dn=0,Vi=mc=null,Rp=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-vt(o),d=1<<u;n|=e[u],o&=~d}return ws=n,Mu(),a}function H_(e,n){Me=null,I.H=oc,n===Xo||n===Du?(n=ng(),an=3):n===Ih?(n=ng(),an=4):an=n===cp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ji=n,Le===null&&(Dn=1,Xu(e,da(n,e.current)))}function G_(){var e=Ki.current;return e===null?!0:(Ie&4194048)===Ie?ga===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===ga:!1}function V_(){var e=I.H;return I.H=oc,e===null?oc:e}function k_(){var e=I.A;return I.A=zy,e}function nf(){Dn=4,pr||(Ie&4194048)!==Ie&&Ki.current!==null||(Jo=!0),(mr&134217727)===0&&(io&134217727)===0||dn===null||vr(dn,Ie,$i,!1)}function Lp(e,n,a){var o=Je;Je|=2;var u=V_(),d=k_();(dn!==e||Ie!==n)&&(tf=null,el(e,n)),n=!1;var x=Dn;t:do try{if(an!==0&&Le!==null){var A=Le,G=Ji;switch(an){case 8:Np(),x=6;break t;case 3:case 2:case 9:case 6:Ki.current===null&&(n=!0);var rt=an;if(an=0,Ji=null,nl(e,A,G,rt),a&&Jo){x=0;break t}break;default:rt=an,an=0,Ji=null,nl(e,A,G,rt)}}Vy(),x=Dn;break}catch(_t){H_(e,_t)}while(!0);return n&&e.shellSuspendCounter++,xs=jr=null,Je=o,I.H=u,I.A=d,Le===null&&(dn=null,Ie=0,Mu()),x}function Vy(){for(;Le!==null;)X_(Le)}function ky(e,n){var a=Je;Je|=2;var o=V_(),u=k_();dn!==e||Ie!==n?(tf=null,$u=b()+500,el(e,n)):Jo=kt(e,n);t:do try{if(an!==0&&Le!==null){n=Le;var d=Ji;e:switch(an){case 1:an=0,Ji=null,nl(e,n,d,1);break;case 2:case 9:if(tg(d)){an=0,Ji=null,W_(n);break}n=function(){an!==2&&an!==9||dn!==e||(an=7),ss(e)},d.then(n,n);break t;case 3:an=7;break t;case 4:an=5;break t;case 7:tg(d)?(an=0,Ji=null,W_(n)):(an=0,Ji=null,nl(e,n,d,7));break;case 5:var x=null;switch(Le.tag){case 26:x=Le.memoizedState;case 5:case 27:var A=Le;if(x?Dv(x):A.stateNode.complete){an=0,Ji=null;var G=A.sibling;if(G!==null)Le=G;else{var rt=A.return;rt!==null?(Le=rt,af(rt)):Le=null}break e}}an=0,Ji=null,nl(e,n,d,5);break;case 6:an=0,Ji=null,nl(e,n,d,6);break;case 8:Np(),Dn=6;break t;default:throw Error(s(462))}}Xy();break}catch(_t){H_(e,_t)}while(!0);return xs=jr=null,I.H=o,I.A=u,Je=a,Le!==null?0:(dn=null,Ie=0,Mu(),Dn)}function Xy(){for(;Le!==null&&!Kt();)X_(Le)}function X_(e){var n=p_(e.alternate,e,ws);e.memoizedProps=e.pendingProps,n===null?af(e):Le=n}function W_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=l_(a,n,n.pendingProps,n.type,void 0,Ie);break;case 11:n=l_(a,n,n.pendingProps,n.type.render,n.ref,Ie);break;case 5:qh(n);default:g_(a,n),n=Le=k0(n,ws),n=p_(a,n,ws)}e.memoizedProps=e.pendingProps,n===null?af(e):Le=n}function nl(e,n,a,o){xs=jr=null,qh(n),Wo=null,$l=0;var u=n.return;try{if(Ly(e,u,n,a,Ie)){Dn=1,Xu(e,da(a,e.current)),Le=null;return}}catch(d){if(u!==null)throw Le=u,d;Dn=1,Xu(e,da(a,e.current)),Le=null;return}n.flags&32768?(ze||o===1?e=!0:Jo||(Ie&536870912)!==0?e=!1:(pr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ki.current,o!==null&&o.tag===13&&(o.flags|=16384))),Y_(n,e)):af(n)}function af(e){var n=e;do{if((n.flags&32768)!==0){Y_(n,pr);return}e=n.return;var a=Iy(n.alternate,n,ws);if(a!==null){Le=a;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=e}while(n!==null);Dn===0&&(Dn=5)}function Y_(e,n){do{var a=Py(e.alternate,e);if(a!==null){a.flags&=32767,Le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Le=e;return}Le=e=a}while(e!==null);Dn=6,Le=null}function q_(e,n,a,o,u,d,x,A,G){e.cancelPendingCommit=null;do sf();while(Zn!==0);if((Je&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Sh,On(e,a,d,x,A,G),e===dn&&(Le=dn=null,Ie=0),tl=n,_r=e,Ds=a,Cp=d,wp=u,P_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jy(it,function(){return J_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=F.p,F.p=2,x=Je,Je|=4;try{Fy(e,n,a)}finally{Je=x,F.p=u,I.T=o}}Zn=1,j_(),Z_(),K_()}}function j_(){if(Zn===1){Zn=0;var e=_r,n=tl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=F.p;F.p=2;var u=Je;Je|=4;try{C_(n,e);var d=Xp,x=ye(e.containerInfo),A=d.focusedElem,G=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&Pi(A.ownerDocument.documentElement,A)){if(G!==null&&Qe(A)){var rt=G.start,_t=G.end;if(_t===void 0&&(_t=rt),"selectionStart"in A)A.selectionStart=rt,A.selectionEnd=Math.min(_t,A.value.length);else{var Et=A.ownerDocument||document,ct=Et&&Et.defaultView||window;if(ct.getSelection){var pt=ct.getSelection(),te=A.textContent.length,fe=Math.min(G.start,te),cn=G.end===void 0?fe:Math.min(G.end,te);!pt.extend&&fe>cn&&(x=cn,cn=fe,fe=x);var K=ei(A,fe),X=ei(A,cn);if(K&&X&&(pt.rangeCount!==1||pt.anchorNode!==K.node||pt.anchorOffset!==K.offset||pt.focusNode!==X.node||pt.focusOffset!==X.offset)){var at=Et.createRange();at.setStart(K.node,K.offset),pt.removeAllRanges(),fe>cn?(pt.addRange(at),pt.extend(X.node,X.offset)):(at.setEnd(X.node,X.offset),pt.addRange(at))}}}}for(Et=[],pt=A;pt=pt.parentNode;)pt.nodeType===1&&Et.push({element:pt,left:pt.scrollLeft,top:pt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Et.length;A++){var St=Et[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}_f=!!kp,Xp=kp=null}finally{Je=u,F.p=o,I.T=a}}e.current=n,Zn=2}}function Z_(){if(Zn===2){Zn=0;var e=_r,n=tl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=F.p;F.p=2;var u=Je;Je|=4;try{E_(e,n.alternate,n)}finally{Je=u,F.p=o,I.T=a}}Zn=3}}function K_(){if(Zn===4||Zn===3){Zn=0,P();var e=_r,n=tl,a=Ds,o=P_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Zn=5:(Zn=0,tl=_r=null,Q_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(gr=null),Ta(a),n=n.stateNode,J&&typeof J.onCommitFiberRoot=="function")try{J.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=F.p,F.p=2,I.T=null;try{for(var d=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];d(A.value,{componentStack:A.stack})}}finally{I.T=n,F.p=u}}(Ds&3)!==0&&sf(),ss(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Dp?gc++:(gc=0,Dp=e):gc=0,_c(0)}}function Q_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ql(n)))}function sf(){return j_(),Z_(),K_(),J_()}function J_(){if(Zn!==5)return!1;var e=_r,n=Cp;Cp=0;var a=Ta(Ds),o=I.T,u=F.p;try{F.p=32>a?32:a,I.T=null,a=wp,wp=null;var d=_r,x=Ds;if(Zn=0,tl=_r=null,Ds=0,(Je&6)!==0)throw Error(s(331));var A=Je;if(Je|=4,U_(d.current),D_(d,d.current,x,a),Je=A,_c(0,!1),J&&typeof J.onPostCommitFiberRoot=="function")try{J.onPostCommitFiberRoot(yt,d)}catch{}return!0}finally{F.p=u,I.T=o,Q_(e,n)}}function $_(e,n,a){n=da(a,n),n=lp(e.stateNode,n,2),e=ur(e,n,2),e!==null&&(xn(e,2),ss(e))}function sn(e,n,a){if(e.tag===3)$_(e,e,a);else for(;n!==null;){if(n.tag===3){$_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(gr===null||!gr.has(o))){e=da(a,e),a=t_(2),o=ur(n,a,2),o!==null&&(e_(a,o,n,e),xn(o,2),ss(o));break}}n=n.return}}function Up(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Hy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Tp=!0,u.add(a),e=Wy.bind(null,e,n,a),n.then(e,e))}function Wy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,dn===e&&(Ie&a)===a&&(Dn===4||Dn===3&&(Ie&62914560)===Ie&&300>b()-Ju?(Je&2)===0&&el(e,0):Ap|=a,$o===Ie&&($o=0)),ss(e)}function tv(e,n){n===0&&(n=we()),e=Wr(e,n),e!==null&&(xn(e,n),ss(e))}function Yy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),tv(e,a)}function qy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),tv(e,a)}function jy(e,n){return Ne(e,n)}var rf=null,il=null,Op=!1,of=!1,Ip=!1,xr=0;function ss(e){e!==il&&e.next===null&&(il===null?rf=il=e:il=il.next=e),of=!0,Op||(Op=!0,Ky())}function _c(e,n){if(!Ip&&of){Ip=!0;do for(var a=!1,o=rf;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-vt(42|e)+1)-1,d&=u&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,av(o,d))}else d=Ie,d=dt(o,o===dn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||kt(o,d)||(a=!0,av(o,d));o=o.next}while(a);Ip=!1}}function Zy(){ev()}function ev(){of=Op=!1;var e=0;xr!==0&&rM()&&(e=xr);for(var n=b(),a=null,o=rf;o!==null;){var u=o.next,d=nv(o,n);d===0?(o.next=null,a===null?rf=u:a.next=u,u===null&&(il=a)):(a=o,(e!==0||(d&3)!==0)&&(of=!0)),o=u}Zn!==0&&Zn!==5||_c(e),xr!==0&&(xr=0)}function nv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-vt(d),A=1<<x,G=u[x];G===-1?((A&a)===0||(A&o)!==0)&&(u[x]=ae(A,n)):G<=n&&(e.expiredLanes|=A),d&=~A}if(n=dn,a=Ie,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(an===2||an===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Xe(o),Ta(a)){case 2:case 8:a=et;break;case 32:a=it;break;case 268435456:a=Rt;break;default:a=it}return o=iv.bind(null,e),a=Ne(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Xe(o),e.callbackPriority=2,e.callbackNode=null,2}function iv(e,n){if(Zn!==0&&Zn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(sf()&&e.callbackNode!==a)return null;var o=Ie;return o=dt(e,e===dn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(B_(e,o,n),nv(e,b()),e.callbackNode!=null&&e.callbackNode===a?iv.bind(null,e):null)}function av(e,n){if(sf())return null;B_(e,n,!0)}function Ky(){lM(function(){(Je&6)!==0?Ne(Q,Zy):ev()})}function Pp(){if(xr===0){var e=Vo;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),xr=e}return xr}function sv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Da(""+e)}function rv(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Qy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=sv((u[An]||null).action),x=o.submitter;x&&(n=(n=x[An]||null)?sv(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var A=new Ks("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(xr!==0){var G=x?rv(u,x):new FormData(u);np(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(A.preventDefault(),G=x?rv(u,x):new FormData(u),np(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Fp=0;Fp<xh.length;Fp++){var Bp=xh[Fp],Jy=Bp.toLowerCase(),$y=Bp[0].toUpperCase()+Bp.slice(1);Fa(Jy,"on"+$y)}Fa(es,"onAnimationEnd"),Fa(Oo,"onAnimationIteration"),Fa(Io,"onAnimationStart"),Fa("dblclick","onDoubleClick"),Fa("focusin","onFocus"),Fa("focusout","onBlur"),Fa(vh,"onTransitionRun"),Fa(gy,"onTransitionStart"),Fa(_y,"onTransitionCancel"),Fa(H0,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vc));function ov(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],G=A.instance,rt=A.currentTarget;if(A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=rt;try{d(u)}catch(_t){yu(_t)}u.currentTarget=null,d=G}else for(x=0;x<o.length;x++){if(A=o[x],G=A.instance,rt=A.currentTarget,A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=rt;try{d(u)}catch(_t){yu(_t)}u.currentTarget=null,d=G}}}}function Ue(e,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var o=e+"__bubble";a.has(o)||(lv(n,e,2,!1),a.add(o))}function zp(e,n,a){var o=0;n&&(o|=4),lv(a,e,o,n)}var lf="_reactListening"+Math.random().toString(36).slice(2);function Hp(e){if(!e[lf]){e[lf]=!0,ht.forEach(function(a){a!=="selectionchange"&&(tM.has(a)||zp(a,!1,e),zp(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lf]||(n[lf]=!0,zp("selectionchange",!1,n))}}function lv(e,n,a,o){switch(Fv(n)){case 2:var u=CM;break;case 8:u=wM;break;default:u=em}a=u.bind(null,n,a,e),u=void 0,!Hr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Gp(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Ka(A),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=d=x;continue t}A=A.parentNode}}o=o.return}Zs(function(){var rt=d,_t=Ui(a),Et=[];t:{var ct=G0.get(e);if(ct!==void 0){var pt=Ks,te=e;switch(e){case"keypress":if(Co(a)===0)break t;case"keydown":case"keyup":pt=hu;break;case"focusin":te="focus",pt=Vr;break;case"focusout":te="blur",pt=Vr;break;case"beforeblur":case"afterblur":pt=Vr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pt=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pt=ou;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pt=mu;break;case es:case Oo:case Io:pt=$s;break;case H0:pt=gu;break;case"scroll":case"scrollend":pt=su;break;case"wheel":pt=vu;break;case"copy":case"cut":case"paste":pt=kl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pt=Wl;break;case"toggle":case"beforetoggle":pt=xu}var fe=(n&4)!==0,cn=!fe&&(e==="scroll"||e==="scrollend"),K=fe?ct!==null?ct+"Capture":null:ct;fe=[];for(var X=rt,at;X!==null;){var St=X;if(at=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||at===null||K===null||(St=Na(X,K),St!=null&&fe.push(xc(X,St,at))),cn)break;X=X.return}0<fe.length&&(ct=new pt(ct,te,null,a,_t),Et.push({event:ct,listeners:fe}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",pt=e==="mouseout"||e==="pointerout",ct&&a!==To&&(te=a.relatedTarget||a.fromElement)&&(Ka(te)||te[ra]))break t;if((pt||ct)&&(ct=_t.window===_t?_t:(ct=_t.ownerDocument)?ct.defaultView||ct.parentWindow:window,pt?(te=a.relatedTarget||a.toElement,pt=rt,te=te?Ka(te):null,te!==null&&(cn=c(te),fe=te.tag,te!==cn||fe!==5&&fe!==27&&fe!==6)&&(te=null)):(pt=null,te=rt),pt!==te)){if(fe=ru,St="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Wl,St="onPointerLeave",K="onPointerEnter",X="pointer"),cn=pt==null?ct:Qa(pt),at=te==null?ct:Qa(te),ct=new fe(St,X+"leave",pt,a,_t),ct.target=cn,ct.relatedTarget=at,St=null,Ka(_t)===rt&&(fe=new fe(K,X+"enter",te,a,_t),fe.target=at,fe.relatedTarget=cn,St=fe),cn=St,pt&&te)e:{for(fe=eM,K=pt,X=te,at=0,St=K;St;St=fe(St))at++;St=0;for(var re=X;re;re=fe(re))St++;for(;0<at-St;)K=fe(K),at--;for(;0<St-at;)X=fe(X),St--;for(;at--;){if(K===X||X!==null&&K===X.alternate){fe=K;break e}K=fe(K),X=fe(X)}fe=null}else fe=null;pt!==null&&cv(Et,ct,pt,fe,!1),te!==null&&cn!==null&&cv(Et,cn,te,fe,!0)}}t:{if(ct=rt?Qa(rt):window,pt=ct.nodeName&&ct.nodeName.toLowerCase(),pt==="select"||pt==="input"&&ct.type==="file")var je=qe;else if(tn(ct))if(gn)je=vi;else{je=qi;var se=Pn}else pt=ct.nodeName,!pt||pt.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?rt&&js(rt.elementType)&&(je=qe):je=ts;if(je&&(je=je(e,rt))){_i(Et,je,a,_t);break t}se&&se(e,ct,rt),e==="focusout"&&rt&&ct.type==="number"&&rt.memoizedProps.value!=null&&$n(ct,"number",ct.value)}switch(se=rt?Qa(rt):window,e){case"focusin":(tn(se)||se.contentEditable==="true")&&(jn=se,Fi=rt,Oe=null);break;case"focusout":Oe=Fi=jn=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,nr(Et,a,_t);break;case"selectionchange":if(li)break;case"keydown":case"keyup":nr(Et,a,_t)}var Te;if(Uo)t:{switch(e){case"compositionstart":var Pe="onCompositionStart";break t;case"compositionend":Pe="onCompositionEnd";break t;case"compositionupdate":Pe="onCompositionUpdate";break t}Pe=void 0}else Bt?ne(e,a)&&(Pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(jl&&a.locale!=="ko"&&(Bt||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&Bt&&(Te=Ro()):(la=_t,Ao="value"in la?la.value:la.textContent,Bt=!0)),se=cf(rt,Pe),0<se.length&&(Pe=new No(Pe,e,null,a,_t),Et.push({event:Pe,listeners:se}),Te?Pe.data=Te:(Te=ee(a),Te!==null&&(Pe.data=Te)))),(Te=Su?ge(e,a):Ye(e,a))&&(Pe=cf(rt,"onBeforeInput"),0<Pe.length&&(se=new No("onBeforeInput","beforeinput",null,a,_t),Et.push({event:se,listeners:Pe}),se.data=Te)),Qy(Et,e,rt,a,_t)}ov(Et,n)})}function xc(e,n,a){return{instance:e,listener:n,currentTarget:a}}function cf(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Na(e,a),u!=null&&o.unshift(xc(e,u,d)),u=Na(e,n),u!=null&&o.push(xc(e,u,d))),e.tag===3)return o;e=e.return}return[]}function eM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cv(e,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var A=a,G=A.alternate,rt=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||rt===null||(G=rt,u?(rt=Na(a,d),rt!=null&&x.unshift(xc(a,rt,G))):u||(rt=Na(a,d),rt!=null&&x.push(xc(a,rt,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var nM=/\r\n?/g,iM=/\u0000|\uFFFD/g;function uv(e){return(typeof e=="string"?e:""+e).replace(nM,`
`).replace(iM,"")}function fv(e,n){return n=uv(n),uv(e)===n}function ln(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||oi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&oi(e,""+o);break;case"className":de(e,"class",o);break;case"tabIndex":de(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":de(e,a,o);break;case"style":wa(e,o,d);break;case"data":if(n!=="object"){de(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Da(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&ln(e,n,"name",u.name,u,null),ln(e,n,"formEncType",u.formEncType,u,null),ln(e,n,"formMethod",u.formMethod,u,null),ln(e,n,"formTarget",u.formTarget,u,null)):(ln(e,n,"encType",u.encType,u,null),ln(e,n,"method",u.method,u,null),ln(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Da(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oa);break;case"onScroll":o!=null&&Ue("scroll",e);break;case"onScrollEnd":o!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Da(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),le(e,"popover",o);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":le(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_h.get(a)||a,le(e,a,o))}}function Vp(e,n,a,o,u,d){switch(a){case"style":wa(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?oi(e,o):(typeof o=="number"||typeof o=="bigint")&&oi(e,""+o);break;case"onScroll":o!=null&&Ue("scroll",e);break;case"onScrollEnd":o!=null&&Ue("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):le(e,a,o)}}}function hi(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,d,x,a,null)}}u&&ln(e,n,"srcSet",a.srcSet,a,null),o&&ln(e,n,"src",a.src,a,null);return;case"input":Ue("invalid",e);var A=d=x=u=null,G=null,rt=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":x=_t;break;case"checked":G=_t;break;case"defaultChecked":rt=_t;break;case"value":d=_t;break;case"defaultValue":A=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:ln(e,n,o,_t,a,null)}}gi(e,d,A,G,rt,x,u,!1);return;case"select":Ue("invalid",e),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:ln(e,n,u,A,a,null)}n=d,a=x,e.multiple=!!o,n!=null?Ti(e,!!o,n,!1):a!=null&&Ti(e,!!o,a,!0);return;case"textarea":Ue("invalid",e),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ln(e,n,x,A,a,null)}Mn(e,o,u,d);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ln(e,n,G,o,a,null));return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(o=0;o<vc.length;o++)Ue(vc[o],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(o=a[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,rt,o,a,null)}return;default:if(js(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&Vp(e,n,_t,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&ln(e,n,A,o,a,null))}function aM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,A=null,G=null,rt=null,_t=null;for(pt in a){var Et=a[pt];if(a.hasOwnProperty(pt)&&Et!=null)switch(pt){case"checked":break;case"value":break;case"defaultValue":G=Et;default:o.hasOwnProperty(pt)||ln(e,n,pt,null,o,Et)}}for(var ct in o){var pt=o[ct];if(Et=a[ct],o.hasOwnProperty(ct)&&(pt!=null||Et!=null))switch(ct){case"type":d=pt;break;case"name":u=pt;break;case"checked":rt=pt;break;case"defaultChecked":_t=pt;break;case"value":x=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:pt!==Et&&ln(e,n,ct,pt,o,Et)}}Xn(e,x,A,G,rt,_t,d,u);return;case"select":pt=x=A=ct=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":pt=G;default:o.hasOwnProperty(d)||ln(e,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":ct=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==G&&ln(e,n,u,d,o,G)}n=A,a=x,o=pt,ct!=null?Ti(e,!!a,ct,!1):!!o!=!!a&&(n!=null?Ti(e,!!a,n,!0):Ti(e,!!a,a?[]:"",!1));return;case"textarea":pt=ct=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ln(e,n,A,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ct=u;break;case"defaultValue":pt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&ln(e,n,x,u,o,d)}Fe(e,ct,pt);return;case"option":for(var te in a)ct=a[te],a.hasOwnProperty(te)&&ct!=null&&!o.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:ln(e,n,te,null,o,ct));for(G in o)ct=o[G],pt=a[G],o.hasOwnProperty(G)&&ct!==pt&&(ct!=null||pt!=null)&&(G==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":ln(e,n,G,ct,o,pt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)ct=a[fe],a.hasOwnProperty(fe)&&ct!=null&&!o.hasOwnProperty(fe)&&ln(e,n,fe,null,o,ct);for(rt in o)if(ct=o[rt],pt=a[rt],o.hasOwnProperty(rt)&&ct!==pt&&(ct!=null||pt!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ln(e,n,rt,ct,o,pt)}return;default:if(js(n)){for(var cn in a)ct=a[cn],a.hasOwnProperty(cn)&&ct!==void 0&&!o.hasOwnProperty(cn)&&Vp(e,n,cn,void 0,o,ct);for(_t in o)ct=o[_t],pt=a[_t],!o.hasOwnProperty(_t)||ct===pt||ct===void 0&&pt===void 0||Vp(e,n,_t,ct,o,pt);return}}for(var K in a)ct=a[K],a.hasOwnProperty(K)&&ct!=null&&!o.hasOwnProperty(K)&&ln(e,n,K,null,o,ct);for(Et in o)ct=o[Et],pt=a[Et],!o.hasOwnProperty(Et)||ct===pt||ct==null&&pt==null||ln(e,n,Et,ct,o,pt)}function dv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,A=u.duration;if(d&&A&&dv(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],rt=G.startTime;if(rt>A)break;var _t=G.transferSize,Et=G.initiatorType;_t&&dv(Et)&&(G=G.responseEnd,x+=_t*(G<A?1:(A-rt)/(G-rt)))}if(--o,n+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kp=null,Xp=null;function uf(e){return e.nodeType===9?e:e.ownerDocument}function hv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wp(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yp=null;function rM(){var e=window.event;return e&&e.type==="popstate"?e===Yp?!1:(Yp=e,!0):(Yp=null,!1)}var mv=typeof setTimeout=="function"?setTimeout:void 0,oM=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,lM=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(e){return gv.resolve(null).then(e).catch(cM)}:mv;function cM(e){setTimeout(function(){throw e})}function Sr(e){return e==="head"}function _v(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ol(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Sc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sc(a);for(var d=a.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[Wi]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&Sc(e.ownerDocument.body);a=u}while(a);ol(n)}function vv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function qp(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qp(a),Ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function uM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Wi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=_a(e.nextSibling),e===null)break}return null}function fM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_a(e.nextSibling),e===null))return null;return e}function xv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_a(e.nextSibling),e===null))return null;return e}function jp(e){return e.data==="$?"||e.data==="$~"}function Zp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _a(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kp=null;function Sv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _a(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function yv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Mv(e,n,a){switch(n=uf(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Sc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ca(e)}var va=new Map,Ev=new Set;function ff(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ns=F.d;F.d={f:hM,r:pM,D:mM,C:gM,L:_M,m:vM,X:SM,S:xM,M:yM};function hM(){var e=Ns.f(),n=ef();return e||n}function pM(e){var n=Li(e);n!==null&&n.tag===5&&n.type==="form"?Hg(n):Ns.r(e)}var al=typeof document>"u"?null:document;function bv(e,n,a){var o=al;if(o&&typeof n=="string"&&n){var u=ce(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ev.has(u)||(Ev.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),hi(n,"link",e),Y(n),o.head.appendChild(n)))}}function mM(e){Ns.D(e),bv("dns-prefetch",e,null)}function gM(e,n){Ns.C(e,n),bv("preconnect",e,n)}function _M(e,n,a){Ns.L(e,n,a);var o=al;if(o&&e&&n){var u='link[rel="preload"][as="'+ce(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ce(a.imageSizes)+'"]')):u+='[href="'+ce(e)+'"]';var d=u;switch(n){case"style":d=sl(e);break;case"script":d=rl(e)}va.has(d)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),va.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(yc(d))||n==="script"&&o.querySelector(Mc(d))||(n=o.createElement("link"),hi(n,"link",e),Y(n),o.head.appendChild(n)))}}function vM(e,n){Ns.m(e,n);var a=al;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ce(o)+'"][href="'+ce(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=rl(e)}if(!va.has(d)&&(e=v({rel:"modulepreload",href:e},n),va.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mc(d)))return}o=a.createElement("link"),hi(o,"link",e),Y(o),a.head.appendChild(o)}}}function xM(e,n,a){Ns.S(e,n,a);var o=al;if(o&&e){var u=R(o).hoistableStyles,d=sl(e);n=n||"default";var x=u.get(d);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(yc(d)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=va.get(d))&&Qp(e,a);var G=x=o.createElement("link");Y(G),hi(G,"link",e),G._p=new Promise(function(rt,_t){G.onload=rt,G.onerror=_t}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,df(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(d,x)}}}function SM(e,n){Ns.X(e,n);var a=al;if(a&&e){var o=R(a).hoistableScripts,u=rl(e),d=o.get(u);d||(d=a.querySelector(Mc(u)),d||(e=v({src:e,async:!0},n),(n=va.get(u))&&Jp(e,n),d=a.createElement("script"),Y(d),hi(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function yM(e,n){Ns.M(e,n);var a=al;if(a&&e){var o=R(a).hoistableScripts,u=rl(e),d=o.get(u);d||(d=a.querySelector(Mc(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=va.get(u))&&Jp(e,n),d=a.createElement("script"),Y(d),hi(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Tv(e,n,a,o){var u=(u=nt.current)?ff(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=sl(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sl(a.href);var d=R(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(yc(e)))&&!d._p&&(x.instance=d,x.state.loading=5),va.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},va.set(e,a),d||MM(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rl(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function sl(e){return'href="'+ce(e)+'"'}function yc(e){return'link[rel="stylesheet"]['+e+"]"}function Av(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function MM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),hi(n,"link",a),Y(n),e.head.appendChild(n))}function rl(e){return'[src="'+ce(e)+'"]'}function Mc(e){return"script[async]"+e}function Rv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ce(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),hi(o,"style",u),df(o,a.precedence,e),n.instance=o;case"stylesheet":u=sl(a.href);var d=e.querySelector(yc(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=Av(a),(u=va.get(u))&&Qp(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var x=d;return x._p=new Promise(function(A,G){x.onload=A,x.onerror=G}),hi(d,"link",o),n.state.loading|=4,df(d,a.precedence,e),n.instance=d;case"script":return d=rl(a.src),(u=e.querySelector(Mc(d)))?(n.instance=u,Y(u),u):(o=a,(u=va.get(d))&&(o=v({},a),Jp(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),hi(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,df(o,a.precedence,e));return n.instance}function df(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var hf=null;function Cv(e,n,a){if(hf===null){var o=new Map,u=hf=new Map;u.set(a,o)}else u=hf,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Wi]||d[yn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(d):o.set(x,[d])}}return o}function wv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function EM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function bM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=sl(o.href),d=n.querySelector(yc(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=pf.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Y(d);return}d=n.ownerDocument||n,o=Av(o),(u=va.get(u))&&Qp(o,u),d=d.createElement("link"),Y(d);var x=d;x._p=new Promise(function(A,G){x.onload=A,x.onerror=G}),hi(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=pf.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $p=0;function TM(e,n){return e.stylesheets&&e.count===0&&gf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&gf(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&$p===0&&($p=62500*sM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gf(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>$p?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mf=null;function gf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mf=new Map,n.forEach(AM,e),mf=null,pf.call(e))}function AM(e,n){if(!(n.state.loading&4)){var a=mf.get(e);if(a)var o=a.get(null);else{a=new Map,mf.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=pf.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ec={$$typeof:L,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function RM(e,n,a,o,u,d,x,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pe(0),this.hiddenUpdates=pe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Nv(e,n,a,o,u,d,x,A,G,rt,_t,Et){return e=new RM(e,n,a,x,G,rt,_t,Et,A),n=1,d===!0&&(n|=24),d=Zi(3,null,null,n),e.current=d,d.stateNode=e,n=Lh(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ph(d),e}function Lv(e){return e?(e=Fo,e):Fo}function Uv(e,n,a,o,u,d){u=Lv(u),o.context===null?o.context=u:o.pendingContext=u,o=cr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ur(e,o,n),a!==null&&(ki(a,e,n),ec(a,e,n))}function Ov(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function tm(e,n){Ov(e,n),(e=e.alternate)&&Ov(e,n)}function Iv(e){if(e.tag===13||e.tag===31){var n=Wr(e,67108864);n!==null&&ki(n,e,67108864),tm(e,67108864)}}function Pv(e){if(e.tag===13||e.tag===31){var n=ta();n=Ws(n);var a=Wr(e,n);a!==null&&ki(a,e,n),tm(e,n)}}var _f=!0;function CM(e,n,a,o){var u=I.T;I.T=null;var d=F.p;try{F.p=2,em(e,n,a,o)}finally{F.p=d,I.T=u}}function wM(e,n,a,o){var u=I.T;I.T=null;var d=F.p;try{F.p=8,em(e,n,a,o)}finally{F.p=d,I.T=u}}function em(e,n,a,o){if(_f){var u=nm(o);if(u===null)Gp(e,n,o,vf,a),Bv(e,o);else if(NM(u,e,n,a,o))o.stopPropagation();else if(Bv(e,o),n&4&&-1<DM.indexOf(e)){for(;u!==null;){var d=Li(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Dt(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var G=1<<31-vt(x);A.entanglements[1]|=G,x&=~G}ss(d),(Je&6)===0&&($u=b()+500,_c(0))}}break;case 31:case 13:A=Wr(d,2),A!==null&&ki(A,d,2),ef(),tm(d,2)}if(d=nm(o),d===null&&Gp(e,n,o,vf,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Gp(e,n,o,null,a)}}function nm(e){return e=Ui(e),im(e)}var vf=null;function im(e){if(vf=null,e=Ka(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vf=e,null}function Fv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(D()){case Q:return 2;case et:return 8;case it:case Ct:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var am=!1,yr=null,Mr=null,Er=null,bc=new Map,Tc=new Map,br=[],DM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bv(e,n){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":bc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tc.delete(n.pointerId)}}function Ac(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Li(n),n!==null&&Iv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function NM(e,n,a,o,u){switch(n){case"focusin":return yr=Ac(yr,e,n,a,o,u),!0;case"dragenter":return Mr=Ac(Mr,e,n,a,o,u),!0;case"mouseover":return Er=Ac(Er,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return bc.set(d,Ac(bc.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Tc.set(d,Ac(Tc.get(d)||null,e,n,a,o,u)),!0}return!1}function zv(e){var n=Ka(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Aa(e.priority,function(){Pv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Aa(e.priority,function(){Pv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xf(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nm(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);To=o,a.target.dispatchEvent(o),To=null}else return n=Li(a),n!==null&&Iv(n),e.blockedOn=a,!1;n.shift()}return!0}function Hv(e,n,a){xf(e)&&a.delete(n)}function LM(){am=!1,yr!==null&&xf(yr)&&(yr=null),Mr!==null&&xf(Mr)&&(Mr=null),Er!==null&&xf(Er)&&(Er=null),bc.forEach(Hv),Tc.forEach(Hv)}function Sf(e,n){e.blockedOn===n&&(e.blockedOn=null,am||(am=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,LM)))}var yf=null;function Gv(e){yf!==e&&(yf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yf===e&&(yf=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(im(o||a)===null)continue;break}var d=Li(a);d!==null&&(e.splice(n,3),n-=3,np(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ol(e){function n(G){return Sf(G,e)}yr!==null&&Sf(yr,e),Mr!==null&&Sf(Mr,e),Er!==null&&Sf(Er,e),bc.forEach(n),Tc.forEach(n);for(var a=0;a<br.length;a++){var o=br[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<br.length&&(a=br[0],a.blockedOn===null);)zv(a),a.blockedOn===null&&br.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[An]||null;if(typeof d=="function")x||Gv(a);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[An]||null)A=x.formAction;else if(im(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Gv(a)}}}function Vv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sm(e){this._internalRoot=e}Mf.prototype.render=sm.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ta();Uv(a,o,e,n,null,null)},Mf.prototype.unmount=sm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Uv(e.current,2,null,e,null,null),ef(),n[ra]=null}};function Mf(e){this._internalRoot=e}Mf.prototype.unstable_scheduleHydration=function(e){if(e){var n=bi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<br.length&&n!==0&&n<br[a].priority;a++);br.splice(a,0,e),a===0&&zv(e)}};var kv=t.version;if(kv!=="19.2.4")throw Error(s(527,kv,"19.2.4"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var UM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ef=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ef.isDisabled&&Ef.supportsFiber)try{yt=Ef.inject(UM),J=Ef}catch{}}return Cc.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Kg,d=Qg,x=Jg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Nv(e,1,!1,null,null,a,o,null,u,d,x,Vv),e[ra]=n.current,Hp(e),new sm(n)},Cc.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=Kg,x=Qg,A=Jg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Nv(e,1,!0,n,a??null,o,u,G,d,x,A,Vv),n.context=Lv(null),a=n.current,o=ta(),o=Ws(o),u=cr(o),u.callback=null,ur(a,u,o),a=o,n.current.lanes=a,xn(n,a),ss(n),e[ra]=n.current,Hp(e),new Mf(n)},Cc.version="19.2.4",Cc}var $v;function kM(){if($v)return lm.exports;$v=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),lm.exports=VM(),lm.exports}var XM=kM();const Kd="183",nS=0,Km=1,iS=2,aS=0,_o=1,sS=2,Al=3,ks=0,Ei=1,Vn=2,us=0,vo=1,Qm=2,Jm=3,$m=4,rS=5,Ur=100,oS=101,lS=102,cS=103,uS=104,fS=200,dS=201,hS=202,pS=203,rd=204,od=205,mS=206,gS=207,_S=208,vS=209,xS=210,SS=211,yS=212,MS=213,ES=214,ld=0,cd=1,ud=2,xo=3,fd=4,dd=5,hd=6,pd=7,Qd=0,bS=1,TS=2,Ya=0,d0=1,h0=2,p0=3,Jd=4,m0=5,g0=6,_0=7,v0=300,Pr=301,So=302,$f=303,td=304,iu=306,Dl=1e3,cs=1001,md=1002,ai=1003,AS=1004,Vc=1005,si=1006,ed=1007,Gs=1008,Xi=1009,x0=1010,S0=1011,Nl=1012,$d=1013,ja=1014,Ma=1015,fs=1016,th=1017,eh=1018,Ll=1020,y0=35902,M0=35899,E0=1021,b0=1022,Ea=1023,ds=1026,Or=1027,nh=1028,ih=1029,yo=1030,ah=1031,sh=1033,Yc=33776,qc=33777,jc=33778,Zc=33779,gd=35840,_d=35841,vd=35842,xd=35843,Sd=36196,yd=37492,Md=37496,Ed=37488,bd=37489,Td=37490,Ad=37491,Rd=37808,Cd=37809,wd=37810,Dd=37811,Nd=37812,Ld=37813,Ud=37814,Od=37815,Id=37816,Pd=37817,Fd=37818,Bd=37819,zd=37820,Hd=37821,Gd=36492,Vd=36494,kd=36495,Xd=36283,Wd=36284,Yd=36285,qd=36286,RS=3200,rh=0,CS=1,zs="",Kn="srgb",Mo="srgb-linear",$c="linear",en="srgb",po=7680,t0=519,wS=512,DS=513,NS=514,oh=515,LS=516,US=517,lh=518,OS=519,e0=35044,n0="300 es",Wa=2e3,Ul=2001;function WM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function jd(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function IS(){const r=jd("canvas");return r.style.display="block",r}const tx={};function i0(...r){const t="THREE."+r.shift();console.log(t,...r)}function PS(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function me(...r){r=PS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ge(...r){r=PS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function tu(...r){const t=r.join(" ");t in tx||(tx[t]=!0,me(...r))}function YM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const qM={[ld]:cd,[ud]:hd,[fd]:pd,[xo]:dd,[cd]:ld,[hd]:ud,[pd]:fd,[dd]:xo};class Eo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const yi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ex=1234567;const Kc=Math.PI/180,Ol=180/Math.PI;function Fl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(yi[r&255]+yi[r>>8&255]+yi[r>>16&255]+yi[r>>24&255]+"-"+yi[t&255]+yi[t>>8&255]+"-"+yi[t>>16&15|64]+yi[t>>24&255]+"-"+yi[i&63|128]+yi[i>>8&255]+"-"+yi[i>>16&255]+yi[i>>24&255]+yi[s&255]+yi[s>>8&255]+yi[s>>16&255]+yi[s>>24&255]).toLowerCase()}function Ce(r,t,i){return Math.max(t,Math.min(i,r))}function T0(r,t){return(r%t+t)%t}function jM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function ZM(r,t,i){return r!==t?(i-r)/(t-r):0}function Qc(r,t,i){return(1-i)*r+i*t}function KM(r,t,i,s){return Qc(r,t,1-Math.exp(-i*s))}function QM(r,t=1){return t-Math.abs(T0(r,t*2)-t)}function JM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function $M(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function tE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function eE(r,t){return r+Math.random()*(t-r)}function nE(r){return r*(.5-Math.random())}function iE(r){r!==void 0&&(ex=r);let t=ex+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function aE(r){return r*Kc}function sE(r){return r*Ol}function rE(r){return(r&r-1)===0&&r!==0}function oE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cE(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(h*_,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*E,m*y,h*p);break;case"YXY":r.set(m*y,h*_,m*E,h*p);break;case"ZYZ":r.set(m*E,m*y,h*_,h*p);break;default:me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Tl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ci(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bn={DEG2RAD:Kc,RAD2DEG:Ol,generateUUID:Fl,clamp:Ce,euclideanModulo:T0,mapLinear:jM,inverseLerp:ZM,lerp:Qc,damp:KM,pingpong:QM,smoothstep:JM,smootherstep:$M,randInt:tE,randFloat:eE,randFloatSpread:nE,seededRandom:iE,degToRad:aE,radToDeg:sE,isPowerOfTwo:rE,ceilPowerOfTwo:oE,floorPowerOfTwo:lE,setQuaternionFromProperEuler:cE,normalize:Ci,denormalize:Tl};class De{constructor(t=0,i=0){De.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],y=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==y||_!==E){let M=m*g+p*y+_*E+v*w;M<0&&(g=-g,y=-y,E=-E,w=-w,M=-M);let S=1-h;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);S=Math.sin(S*C)/L,h=Math.sin(h*C)/L,m=m*S+g*h,p=p*S+y*h,_=_*S+E*h,v=v*S+w*h}else{m=m*S+g*h,p=p*S+y*h,_=_*S+E*h,v=v*S+w*h;const C=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=C,p*=C,_*=C,v*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],y=c[f+2],E=c[f+3];return t[i]=h*E+_*v+m*y-p*g,t[i+1]=m*E+_*g+p*v-h*y,t[i+2]=p*E+_*y+h*g-m*v,t[i+3]=_*E-h*v-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(c/2),g=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"YXZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"ZXY":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"ZYX":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"YZX":this._x=g*_*v+p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v-g*y*E;break;case"XZY":this._x=g*_*v-p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v+g*y*E;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>v){const y=2*Math.sqrt(1+s-h-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(nx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(nx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),_=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-h*_,this.y=s+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return dm.copy(this).projectOnVector(t),this.sub(dm)}reflect(t){return this.sub(dm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dm=new j,nx=new Xs;class Ee{constructor(t,i,s,l,c,f,h,m,p){Ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],y=s[5],E=s[8],w=l[0],M=l[3],S=l[6],C=l[1],L=l[4],N=l[7],B=l[2],H=l[5],z=l[8];return c[0]=f*w+h*C+m*B,c[3]=f*M+h*L+m*H,c[6]=f*S+h*N+m*z,c[1]=p*w+_*C+v*B,c[4]=p*M+_*L+v*H,c[7]=p*S+_*N+v*z,c[2]=g*w+y*C+E*B,c[5]=g*M+y*L+E*H,c[8]=g*S+y*N+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=_*f-h*p,g=h*m-_*c,y=p*c-f*m,E=i*v+s*g+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(h*s-l*f)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-h*i)*w,t[6]=y*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(hm.makeScale(t,i)),this}rotate(t){return this.premultiply(hm.makeRotation(-t)),this}translate(t,i){return this.premultiply(hm.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hm=new Ee,ix=new Ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ax=new Ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uE(){const r={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===en&&(l.r=Vs(l.r),l.g=Vs(l.g),l.b=Vs(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===en&&(l.r=wl(l.r),l.g=wl(l.g),l.b=wl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===zs?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Mo]:{primaries:t,whitePoint:s,transfer:$c,toXYZ:ix,fromXYZ:ax,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:t,whitePoint:s,transfer:en,toXYZ:ix,fromXYZ:ax,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),r}const Ve=uE();function Vs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ll;class FS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ll===void 0&&(ll=jd("canvas")),ll.width=t.width,ll.height=t.height;const l=ll.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ll}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=jd("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Vs(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Vs(i[s]/255)*255):i[s]=Vs(i[s]);return{data:i,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fE=0;class ch{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Fl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(pm(l[f].image)):c.push(pm(l[f]))}else c=pm(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function pm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?FS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}let dE=0;const mm=new j;class pi extends Eo{constructor(t=pi.DEFAULT_IMAGE,i=pi.DEFAULT_MAPPING,s=cs,l=cs,c=si,f=Gs,h=Ea,m=Xi,p=pi.DEFAULT_ANISOTROPY,_=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Fl(),this.name="",this.source=new ch(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mm).x}get height(){return this.source.getSize(mm).y}get depth(){return this.source.getSize(mm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==v0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dl:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dl:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=v0;pi.DEFAULT_ANISOTROPY=1;class Tn{constructor(t=0,i=0,s=0,l=1){Tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],y=m[5],E=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(y+1)/2,B=(S+1)/2,H=(_+g)/4,z=(v+w)/4,T=(E+M)/4;return L>N&&L>B?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=H/s,c=z/s):N>B?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=H/l,c=T/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=z/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-E)*(M-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(v-w)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this.w=Ce(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this.w=Ce(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends Eo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Tn(0,0,t,i),this.scissorTest=!1,this.viewport=new Tn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new pi(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ch(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qa extends BS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class A0 extends pi{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends pi{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(t,i,s,l,c,f,h,m,p,_,v,g,y,E,w,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,_,v,g,y,E,w,M)}set(t,i,s,l,c,f,h,m,p,_,v,g,y,E,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=E,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/cl.setFromMatrixColumn(t,0).length(),c=1/cl.setFromMatrixColumn(t,1).length(),f=1/cl.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,y=f*v,E=h*_,w=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=g-w*p,i[9]=-h*m,i[2]=w-g*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,y=m*v,E=p*_,w=p*v;i[0]=g+w*h,i[4]=E*h-y,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=y*h-E,i[6]=w+g*h,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,y=m*v,E=p*_,w=p*v;i[0]=g-w*h,i[4]=-f*v,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*_,i[9]=w-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,y=f*v,E=h*_,w=h*v;i[0]=m*_,i[4]=E*p-y,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=w-g*v,i[8]=E*v+y,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*v+E,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,y=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=y*v-E,i[2]=E*v-y,i[6]=h*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hE,t,pE)}lookAt(t,i,s){const l=this.elements;return ea.subVectors(t,i),ea.lengthSq()===0&&(ea.z=1),ea.normalize(),Ar.crossVectors(s,ea),Ar.lengthSq()===0&&(Math.abs(s.z)===1?ea.x+=1e-4:ea.z+=1e-4,ea.normalize(),Ar.crossVectors(s,ea)),Ar.normalize(),bf.crossVectors(ea,Ar),l[0]=Ar.x,l[4]=bf.x,l[8]=ea.x,l[1]=Ar.y,l[5]=bf.y,l[9]=ea.y,l[2]=Ar.z,l[6]=bf.z,l[10]=ea.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],y=s[13],E=s[2],w=s[6],M=s[10],S=s[14],C=s[3],L=s[7],N=s[11],B=s[15],H=l[0],z=l[4],T=l[8],O=l[12],mt=l[1],V=l[5],tt=l[9],st=l[13],lt=l[2],Z=l[6],I=l[10],F=l[14],ut=l[3],gt=l[7],At=l[11],U=l[15];return c[0]=f*H+h*mt+m*lt+p*ut,c[4]=f*z+h*V+m*Z+p*gt,c[8]=f*T+h*tt+m*I+p*At,c[12]=f*O+h*st+m*F+p*U,c[1]=_*H+v*mt+g*lt+y*ut,c[5]=_*z+v*V+g*Z+y*gt,c[9]=_*T+v*tt+g*I+y*At,c[13]=_*O+v*st+g*F+y*U,c[2]=E*H+w*mt+M*lt+S*ut,c[6]=E*z+w*V+M*Z+S*gt,c[10]=E*T+w*tt+M*I+S*At,c[14]=E*O+w*st+M*F+S*U,c[3]=C*H+L*mt+N*lt+B*ut,c[7]=C*z+L*V+N*Z+B*gt,c[11]=C*T+L*tt+N*I+B*At,c[15]=C*O+L*st+N*F+B*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],y=t[14],E=t[3],w=t[7],M=t[11],S=t[15],C=m*y-p*g,L=h*y-p*v,N=h*g-m*v,B=f*y-p*_,H=f*g-m*_,z=f*v-h*_;return i*(w*C-M*L+S*N)-s*(E*C-M*B+S*H)+l*(E*L-w*B+S*z)-c*(E*N-w*H+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],y=t[11],E=t[12],w=t[13],M=t[14],S=t[15],C=i*h-s*f,L=i*m-l*f,N=i*p-c*f,B=s*m-l*h,H=s*p-c*h,z=l*p-c*m,T=_*w-v*E,O=_*M-g*E,mt=_*S-y*E,V=v*M-g*w,tt=v*S-y*w,st=g*S-y*M,lt=C*st-L*tt+N*V+B*mt-H*O+z*T;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/lt;return t[0]=(h*st-m*tt+p*V)*Z,t[1]=(l*tt-s*st-c*V)*Z,t[2]=(w*z-M*H+S*B)*Z,t[3]=(g*H-v*z-y*B)*Z,t[4]=(m*mt-f*st-p*O)*Z,t[5]=(i*st-l*mt+c*O)*Z,t[6]=(M*N-E*z-S*L)*Z,t[7]=(_*z-g*N+y*L)*Z,t[8]=(f*tt-h*mt+p*T)*Z,t[9]=(s*mt-i*tt-c*T)*Z,t[10]=(E*H-w*N+S*C)*Z,t[11]=(v*N-_*H-y*C)*Z,t[12]=(h*O-f*V-m*T)*Z,t[13]=(i*V-s*O+l*T)*Z,t[14]=(w*L-E*B-M*C)*Z,t[15]=(_*B-v*L+g*C)*Z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,y=c*_,E=c*v,w=f*_,M=f*v,S=h*v,C=m*p,L=m*_,N=m*v,B=s.x,H=s.y,z=s.z;return l[0]=(1-(w+S))*B,l[1]=(y+N)*B,l[2]=(E-L)*B,l[3]=0,l[4]=(y-N)*H,l[5]=(1-(g+S))*H,l[6]=(M+C)*H,l[7]=0,l[8]=(E+L)*z,l[9]=(M-C)*z,l[10]=(1-(g+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=cl.set(l[0],l[1],l[2]).length();const h=cl.set(l[4],l[5],l[6]).length(),m=cl.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ha.copy(this);const p=1/f,_=1/h,v=1/m;return Ha.elements[0]*=p,Ha.elements[1]*=p,Ha.elements[2]*=p,Ha.elements[4]*=_,Ha.elements[5]*=_,Ha.elements[6]*=_,Ha.elements[8]*=v,Ha.elements[9]*=v,Ha.elements[10]*=v,i.setFromRotationMatrix(Ha),s.x=f,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,f,h=Wa,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(h===Wa)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===Ul)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Wa,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(h===Wa)E=-2/(f-c),w=-(f+c)/(f-c);else if(h===Ul)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const cl=new j,Ha=new un,hE=new j(0,0,0),pE=new j(1,1,1),Ar=new j,bf=new j,ea=new j,sx=new un,rx=new Xs;class ia{constructor(t=0,i=0,s=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ce(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return sx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return rx.setFromEuler(this),this.setFromQuaternion(rx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mE=0;const ox=new j,ul=new Xs,Ls=new un,Tf=new j,wc=new j,gE=new j,_E=new Xs,lx=new j(1,0,0),cx=new j(0,1,0),ux=new j(0,0,1),fx={type:"added"},vE={type:"removed"},fl={type:"childadded",child:null},gm={type:"childremoved",child:null};class hn extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const t=new j,i=new ia,s=new Xs,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new Ee}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ul.setFromAxisAngle(t,i),this.quaternion.multiply(ul),this}rotateOnWorldAxis(t,i){return ul.setFromAxisAngle(t,i),this.quaternion.premultiply(ul),this}rotateX(t){return this.rotateOnAxis(lx,t)}rotateY(t){return this.rotateOnAxis(cx,t)}rotateZ(t){return this.rotateOnAxis(ux,t)}translateOnAxis(t,i){return ox.copy(t).applyQuaternion(this.quaternion),this.position.add(ox.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(lx,t)}translateY(t){return this.translateOnAxis(cx,t)}translateZ(t){return this.translateOnAxis(ux,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ls.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Tf.copy(t):Tf.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),wc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ls.lookAt(wc,Tf,this.up):Ls.lookAt(Tf,wc,this.up),this.quaternion.setFromRotationMatrix(Ls),l&&(Ls.extractRotation(l.matrixWorld),ul.setFromRotationMatrix(Ls),this.quaternion.premultiply(ul.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fx),fl.child=t,this.dispatchEvent(fl),fl.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vE),gm.child=t,this.dispatchEvent(gm),gm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fx),fl.child=t,this.dispatchEvent(fl),fl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wc,t,gE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wc,_E,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}hn.DEFAULT_UP=new j(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rl extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xE={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Rl;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const HS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Af={h:0,s:0,l:0};function _m(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ue{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ve.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ve.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ve.workingColorSpace){if(t=T0(t,1),i=Ce(i,0,1),s=Ce(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=_m(f,c,t+1/3),this.g=_m(f,c,t),this.b=_m(f,c,t-1/3)}return Ve.colorSpaceToWorking(this,l),this}setStyle(t,i=Kn){function s(c){c!==void 0&&parseFloat(c)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:me("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Kn){const s=HS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}copyLinearToSRGB(t){return this.r=wl(t.r),this.g=wl(t.g),this.b=wl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return Ve.workingToColorSpace(Mi.copy(this),t),Math.round(Ce(Mi.r*255,0,255))*65536+Math.round(Ce(Mi.g*255,0,255))*256+Math.round(Ce(Mi.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ve.workingColorSpace){Ve.workingToColorSpace(Mi.copy(this),i);const s=Mi.r,l=Mi.g,c=Mi.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ve.workingColorSpace){return Ve.workingToColorSpace(Mi.copy(this),i),t.r=Mi.r,t.g=Mi.g,t.b=Mi.b,t}getStyle(t=Kn){Ve.workingToColorSpace(Mi.copy(this),t);const i=Mi.r,s=Mi.g,l=Mi.b;return t!==Kn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Rr),this.setHSL(Rr.h+t,Rr.s+i,Rr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Rr),t.getHSL(Af);const s=Qc(Rr.h,Af.h,i),l=Qc(Rr.s,Af.s,i),c=Qc(Rr.l,Af.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mi=new ue;ue.NAMES=HS;class eu{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ue(t),this.near=i,this.far=s}clone(){return new eu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class R0 extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ga=new j,Us=new j,vm=new j,Os=new j,dl=new j,hl=new j,dx=new j,xm=new j,Sm=new j,ym=new j,Mm=new Tn,Em=new Tn,bm=new Tn;class ya{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ga.subVectors(t,i),l.cross(Ga);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ga.subVectors(l,i),Us.subVectors(s,i),vm.subVectors(t,i);const f=Ga.dot(Ga),h=Ga.dot(Us),m=Ga.dot(vm),p=Us.dot(Us),_=Us.dot(vm),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Os)===null?!1:Os.x>=0&&Os.y>=0&&Os.x+Os.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,Os)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Os.x),m.addScaledVector(f,Os.y),m.addScaledVector(h,Os.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Mm.setScalar(0),Em.setScalar(0),bm.setScalar(0),Mm.fromBufferAttribute(t,i),Em.fromBufferAttribute(t,s),bm.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Mm,c.x),f.addScaledVector(Em,c.y),f.addScaledVector(bm,c.z),f}static isFrontFacing(t,i,s,l){return Ga.subVectors(s,i),Us.subVectors(t,i),Ga.cross(Us).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ga.subVectors(this.c,this.b),Us.subVectors(this.a,this.b),Ga.cross(Us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ya.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ya.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ya.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ya.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ya.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;dl.subVectors(l,s),hl.subVectors(c,s),xm.subVectors(t,s);const m=dl.dot(xm),p=hl.dot(xm);if(m<=0&&p<=0)return i.copy(s);Sm.subVectors(t,l);const _=dl.dot(Sm),v=hl.dot(Sm);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(dl,f);ym.subVectors(t,c);const y=dl.dot(ym),E=hl.dot(ym);if(E>=0&&y<=E)return i.copy(c);const w=y*p-m*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(hl,h);const M=_*E-y*v;if(M<=0&&v-_>=0&&y-E>=0)return dx.subVectors(c,l),h=(v-_)/(v-_+(y-E)),i.copy(l).addScaledVector(dx,h);const S=1/(M+w+g);return f=w*S,h=g*S,i.copy(s).addScaledVector(dl,f).addScaledVector(hl,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Fr{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Va.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Va.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Va.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Va):Va.fromBufferAttribute(c,f),Va.applyMatrix4(t.matrixWorld),this.expandByPoint(Va);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rf.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rf.copy(s.boundingBox)),Rf.applyMatrix4(t.matrixWorld),this.union(Rf)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Va),Va.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dc),Cf.subVectors(this.max,Dc),pl.subVectors(t.a,Dc),ml.subVectors(t.b,Dc),gl.subVectors(t.c,Dc),Cr.subVectors(ml,pl),wr.subVectors(gl,ml),ao.subVectors(pl,gl);let i=[0,-Cr.z,Cr.y,0,-wr.z,wr.y,0,-ao.z,ao.y,Cr.z,0,-Cr.x,wr.z,0,-wr.x,ao.z,0,-ao.x,-Cr.y,Cr.x,0,-wr.y,wr.x,0,-ao.y,ao.x,0];return!Tm(i,pl,ml,gl,Cf)||(i=[1,0,0,0,1,0,0,0,1],!Tm(i,pl,ml,gl,Cf))?!1:(wf.crossVectors(Cr,wr),i=[wf.x,wf.y,wf.z],Tm(i,pl,ml,gl,Cf))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Va).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Va).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Is),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Is=[new j,new j,new j,new j,new j,new j,new j,new j],Va=new j,Rf=new Fr,pl=new j,ml=new j,gl=new j,Cr=new j,wr=new j,ao=new j,Dc=new j,Cf=new j,wf=new j,so=new j;function Tm(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){so.fromArray(r,c);const h=l.x*Math.abs(so.x)+l.y*Math.abs(so.y)+l.z*Math.abs(so.z),m=t.dot(so),p=i.dot(so),_=s.dot(so);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Gn=new j,Df=new De;let SE=0;class ba{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=e0,this.updateRanges=[],this.gpuType=Ma,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Df.fromBufferAttribute(this,i),Df.applyMatrix3(t),this.setXY(i,Df.x,Df.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix3(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Tl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ci(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Tl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ci(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Tl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ci(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Tl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ci(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Tl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ci(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ci(i,this.array),s=Ci(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ci(i,this.array),s=Ci(s,this.array),l=Ci(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ci(i,this.array),s=Ci(s,this.array),l=Ci(l,this.array),c=Ci(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==e0&&(t.usage=this.usage),t}}class C0 extends ba{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class w0 extends ba{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ri extends ba{constructor(t,i,s){super(new Float32Array(t),i,s)}}const yE=new Fr,Nc=new j,Am=new j;class Bl{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):yE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nc.subVectors(t,this.center);const i=Nc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Nc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Am.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nc.copy(t.center).add(Am)),this.expandByPoint(Nc.copy(t.center).sub(Am))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ME=0;const xa=new un,Rm=new hn,_l=new j,na=new Fr,Lc=new Fr,ii=new j;class aa extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(WM(t)?w0:C0)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Ee().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xa.makeRotationFromQuaternion(t),this.applyMatrix4(xa),this}rotateX(t){return xa.makeRotationX(t),this.applyMatrix4(xa),this}rotateY(t){return xa.makeRotationY(t),this.applyMatrix4(xa),this}rotateZ(t){return xa.makeRotationZ(t),this.applyMatrix4(xa),this}translate(t,i,s){return xa.makeTranslation(t,i,s),this.applyMatrix4(xa),this}scale(t,i,s){return xa.makeScale(t,i,s),this.applyMatrix4(xa),this}lookAt(t){return Rm.lookAt(t),Rm.updateMatrix(),this.applyMatrix4(Rm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_l).negate(),this.translate(_l.x,_l.y,_l.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ri(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];na.setFromBufferAttribute(c),this.morphTargetsRelative?(ii.addVectors(this.boundingBox.min,na.min),this.boundingBox.expandByPoint(ii),ii.addVectors(this.boundingBox.max,na.max),this.boundingBox.expandByPoint(ii)):(this.boundingBox.expandByPoint(na.min),this.boundingBox.expandByPoint(na.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(na.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Lc.setFromBufferAttribute(h),this.morphTargetsRelative?(ii.addVectors(na.min,Lc.min),na.expandByPoint(ii),ii.addVectors(na.max,Lc.max),na.expandByPoint(ii)):(na.expandByPoint(Lc.min),na.expandByPoint(Lc.max))}na.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)ii.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(ii));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)ii.fromBufferAttribute(h,p),m&&(_l.fromBufferAttribute(t,p),ii.add(_l)),l=Math.max(l,s.distanceToSquared(ii))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ba(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new j,m[T]=new j;const p=new j,_=new j,v=new j,g=new De,y=new De,E=new De,w=new j,M=new j;function S(T,O,mt){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,O),v.fromBufferAttribute(s,mt),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,O),E.fromBufferAttribute(c,mt),_.sub(p),v.sub(p),y.sub(g),E.sub(g);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(V),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(V),h[T].add(w),h[O].add(w),h[mt].add(w),m[T].add(M),m[O].add(M),m[mt].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,O=C.length;T<O;++T){const mt=C[T],V=mt.start,tt=mt.count;for(let st=V,lt=V+tt;st<lt;st+=3)S(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const L=new j,N=new j,B=new j,H=new j;function z(T){B.fromBufferAttribute(l,T),H.copy(B);const O=h[T];L.copy(O),L.sub(B.multiplyScalar(B.dot(O))).normalize(),N.crossVectors(H,O);const V=N.dot(m[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,V)}for(let T=0,O=C.length;T<O;++T){const mt=C[T],V=mt.start,tt=mt.count;for(let st=V,lt=V+tt;st<lt;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ba(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,f=new j,h=new j,m=new j,p=new j,_=new j,v=new j;if(t)for(let g=0,y=t.count;g<y;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)ii.fromBufferAttribute(t,i),ii.normalize(),t.setXYZ(i,ii.x,ii.y,ii.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let y=0,E=0;for(let w=0,M=m.length;w<M;w++){h.isInterleavedBufferAttribute?y=m[w]*h.data.stride+h.offset:y=m[w]*_;for(let S=0;S<_;S++)g[E++]=p[y++]}return new ba(g,_,v)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new aa,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let EE=0;class bo extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Fl(),this.name="",this.type="Material",this.blending=vo,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(s.blending=this.blending),this.side!==ks&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==Ur&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(s.stencilFail=this.stencilFail),this.stencilZFail!==po&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ps=new j,Cm=new j,Nf=new j,Dr=new j,wm=new j,Lf=new j,Dm=new j;class D0{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ps)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ps.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ps.copy(this.origin).addScaledVector(this.direction,i),Ps.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Cm.copy(t).add(i).multiplyScalar(.5),Nf.copy(i).sub(t).normalize(),Dr.copy(this.origin).sub(Cm);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Nf),h=Dr.dot(this.direction),m=-Dr.dot(Nf),p=Dr.lengthSq(),_=Math.abs(1-f*f);let v,g,y,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,y=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),y=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),y=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),y=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Cm).addScaledVector(Nf,g),y}intersectSphere(t,i){Ps.subVectors(t.center,this.origin);const s=Ps.dot(this.direction),l=Ps.dot(Ps)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ps)!==null}intersectTriangle(t,i,s,l,c){wm.subVectors(i,t),Lf.subVectors(s,t),Dm.crossVectors(wm,Lf);let f=this.direction.dot(Dm),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Dr.subVectors(this.origin,t);const m=h*this.direction.dot(Lf.crossVectors(Dr,Lf));if(m<0)return null;const p=h*this.direction.dot(wm.cross(Dr));if(p<0||m+p>f)return null;const _=-h*Dr.dot(Dm);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nu extends bo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hx=new un,ro=new D0,Uf=new Bl,px=new j,Of=new j,If=new j,Pf=new j,Nm=new j,Ff=new j,mx=new j,Bf=new j;class He extends hn{constructor(t=new aa,i=new nu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Ff.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Nm.fromBufferAttribute(v,t),f?Ff.addScaledVector(Nm,_):Ff.addScaledVector(Nm.sub(i),_))}i.add(Ff)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uf.copy(s.boundingSphere),Uf.applyMatrix4(c),ro.copy(t.ray).recast(t.near),!(Uf.containsPoint(ro.origin)===!1&&(ro.intersectSphere(Uf,px)===null||ro.origin.distanceToSquared(px)>(t.far-t.near)**2))&&(hx.copy(c).invert(),ro.copy(t.ray).applyMatrix4(hx),!(s.boundingBox!==null&&ro.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ro)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=f[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let N=C,B=L;N<B;N+=3){const H=h.getX(N),z=h.getX(N+1),T=h.getX(N+2);l=zf(this,S,t,s,p,_,v,H,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const C=h.getX(M),L=h.getX(M+1),N=h.getX(M+2);l=zf(this,f,t,s,p,_,v,C,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],S=f[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=C,B=L;N<B;N+=3){const H=N,z=N+1,T=N+2;l=zf(this,S,t,s,p,_,v,H,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const C=M,L=M+1,N=M+2;l=zf(this,f,t,s,p,_,v,C,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function bE(r,t,i,s,l,c,f,h){let m;if(t.side===Ei?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===ks,h),m===null)return null;Bf.copy(h),Bf.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Bf);return p<i.near||p>i.far?null:{distance:p,point:Bf.clone(),object:r}}function zf(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Of),r.getVertexPosition(m,If),r.getVertexPosition(p,Pf);const _=bE(r,t,i,s,Of,If,Pf,mx);if(_){const v=new j;ya.getBarycoord(mx,Of,If,Pf,v),l&&(_.uv=ya.getInterpolatedAttribute(l,h,m,p,v,new De)),c&&(_.uv1=ya.getInterpolatedAttribute(c,h,m,p,v,new De)),f&&(_.normal=ya.getInterpolatedAttribute(f,h,m,p,v,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new j,materialIndex:0};ya.getNormal(Of,If,Pf,g.normal),_.face=g,_.barycoord=v}return _}class N0 extends pi{constructor(t=null,i=1,s=1,l,c,f,h,m,p=ai,_=ai,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class a0 extends ba{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vl=new un,gx=new un,Hf=[],_x=new Fr,TE=new un,Uc=new He,Oc=new Bl;class GS extends He{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new a0(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,TE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Fr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,vl),_x.copy(t.boundingBox).applyMatrix4(vl),this.boundingBox.union(_x)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,vl),Oc.copy(t.boundingSphere).applyMatrix4(vl),this.boundingSphere.union(Oc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Uc.geometry=this.geometry,Uc.material=this.material,Uc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(s),t.ray.intersectsSphere(Oc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,vl),gx.multiplyMatrices(s,vl),Uc.matrixWorld=gx,Uc.raycast(t,Hf);for(let f=0,h=Hf.length;f<h;f++){const m=Hf[f];m.instanceId=c,m.object=this,i.push(m)}Hf.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new a0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new N0(new Float32Array(l*this.count),l,this.count,nh,Ma));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=h,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Lm=new j,AE=new j,RE=new Ee;class Lr{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Lm.subVectors(s,i).cross(AE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Lm),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||RE.getNormalMatrix(t),l=this.coplanarPoint(Lm).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oo=new Bl,CE=new De(.5,.5),Gf=new j;class fh{constructor(t=new Lr,i=new Lr,s=new Lr,l=new Lr,c=new Lr,f=new Lr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Wa,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],y=c[7],E=c[8],w=c[9],M=c[10],S=c[11],C=c[12],L=c[13],N=c[14],B=c[15];if(l[0].setComponents(p-f,y-_,S-E,B-C).normalize(),l[1].setComponents(p+f,y+_,S+E,B+C).normalize(),l[2].setComponents(p+h,y+v,S+w,B+L).normalize(),l[3].setComponents(p-h,y-v,S-w,B-L).normalize(),s)l[4].setComponents(m,g,M,N).normalize(),l[5].setComponents(p-m,y-g,S-M,B-N).normalize();else if(l[4].setComponents(p-m,y-g,S-M,B-N).normalize(),i===Wa)l[5].setComponents(p+m,y+g,S+M,B+N).normalize();else if(i===Ul)l[5].setComponents(m,g,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(t){oo.center.set(0,0,0);const i=CE.distanceTo(t.center);return oo.radius=.7071067811865476+i,oo.applyMatrix4(t.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gf.x=l.normal.x>0?t.max.x:t.min.x,Gf.y=l.normal.y>0?t.max.y:t.min.y,Gf.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class L0 extends pi{constructor(t=[],i=Pr,s,l,c,f,h,m,p,_){super(t,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cl extends pi{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Il extends pi{constructor(t,i,s=ja,l,c,f,h=ai,m=ai,p,_=ds,v=1){if(_!==ds&&_!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ch(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class VS extends Il{constructor(t,i=ja,s=Pr,l,c,f=ai,h=ai,m,p=ds){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class U0 extends pi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Br extends aa{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ri(p,3)),this.setAttribute("normal",new ri(_,3)),this.setAttribute("uv",new ri(v,2));function E(w,M,S,C,L,N,B,H,z,T,O){const mt=N/z,V=B/T,tt=N/2,st=B/2,lt=H/2,Z=z+1,I=T+1;let F=0,ut=0;const gt=new j;for(let At=0;At<I;At++){const U=At*V-st;for(let q=0;q<Z;q++){const ft=q*mt-tt;gt[w]=ft*C,gt[M]=U*L,gt[S]=lt,p.push(gt.x,gt.y,gt.z),gt[w]=0,gt[M]=0,gt[S]=H>0?1:-1,_.push(gt.x,gt.y,gt.z),v.push(q/z),v.push(1-At/T),F+=1}}for(let At=0;At<T;At++)for(let U=0;U<z;U++){const q=g+U+Z*At,ft=g+U+Z*(At+1),Lt=g+(U+1)+Z*(At+1),zt=g+(U+1)+Z*At;m.push(q,ft,zt),m.push(ft,Lt,zt),ut+=6}h.addGroup(y,ut,O),y+=ut,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class kS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){me("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(f-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new De:new j);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new j,l=[],c=[],f=[],h=new j,m=new un;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new j)}c[0]=new j,f[0]=new j;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Ce(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,E))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Ce(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function O0(){let r=0,t=0,i=0,s=0;function l(c,f,h,m){r=c,t=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,_,v){let g=(f-c)/p-(h-c)/(p+_)+(h-f)/_,y=(h-f)/_-(m-f)/(_+v)+(m-h)/v;g*=_,y*=_,l(f,h,g,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const Vf=new j,Um=new O0,Om=new O0,Im=new O0;class XS extends kS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new j){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=l[(h-1)%c]:(Vf.subVectors(l[0],l[1]).add(l[0]),p=Vf);const v=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(Vf.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Vf),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),y),w=Math.pow(v.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),Um.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,w,M),Om.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,w,M),Im.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,w,M)}else this.curveType==="catmullrom"&&(Um.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),Om.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),Im.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(Um.calc(m),Om.calc(m),Im.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new j().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class ls extends aa{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=t/h,g=i/m,y=[],E=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-f;for(let L=0;L<p;L++){const N=L*v-c;E.push(N,-C,0),w.push(0,0,1),M.push(L/h),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<h;C++){const L=C+p*S,N=C+p*(S+1),B=C+1+p*(S+1),H=C+1+p*S;y.push(L,N,H),y.push(N,B,H)}this.setIndex(y),this.setAttribute("position",new ri(E,3)),this.setAttribute("normal",new ri(w,3)),this.setAttribute("uv",new ri(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.width,t.height,t.widthSegments,t.heightSegments)}}class dh extends aa{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,y=new j,E=new De;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const S=c+M/s*f;y.x=v*Math.cos(S),y.y=v*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,_.push(E.x,E.y)}v+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let S=0;S<s;S++){const C=S+M,L=C,N=C+s+1,B=C+s+2,H=C+1;h.push(L,N,H),h.push(N,B,H)}}this.setIndex(h),this.setAttribute("position",new ri(m,3)),this.setAttribute("normal",new ri(p,3)),this.setAttribute("uv",new ri(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class hh extends aa{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const _=[],v=new j,g=new j,y=[],E=[],w=[],M=[];for(let S=0;S<=s;S++){const C=[],L=S/s;let N=0;S===0&&f===0?N=.5/i:S===s&&m===Math.PI&&(N=-.5/i);for(let B=0;B<=i;B++){const H=B/i;v.x=-t*Math.cos(l+H*c)*Math.sin(f+L*h),v.y=t*Math.cos(f+L*h),v.z=t*Math.sin(l+H*c)*Math.sin(f+L*h),E.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(H+N,1-L),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const L=_[S][C+1],N=_[S][C],B=_[S+1][C],H=_[S+1][C+1];(S!==0||f>0)&&y.push(L,N,H),(S!==s-1||m<Math.PI)&&y.push(N,B,H)}this.setIndex(y),this.setAttribute("position",new ri(E,3)),this.setAttribute("normal",new ri(w,3)),this.setAttribute("uv",new ri(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Pl(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function wi(r){const t={};for(let i=0;i<r.length;i++){const s=Pl(r[i]);for(const l in s)t[l]=s[l]}return t}function wE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function WS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}const YS={clone:Pl,merge:wi};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Za extends bo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=NE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pl(t.uniforms),this.uniformsGroups=wE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class qS extends Za{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hs extends bo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mo extends Hs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class jS extends bo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=Qd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ZS extends bo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class KS extends bo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zl extends hn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class QS extends zl{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Pm=new un,vx=new j,xx=new j;class I0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;vx.setFromMatrixPosition(t.matrixWorld),i.position.copy(vx),xx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(xx),i.updateMatrixWorld(),Pm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pm,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Ul||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Pm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kf=new j,Xf=new Xs,rs=new j;class P0 extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Wa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kf,Xf,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kf,Xf,rs.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(kf,Xf,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kf,Xf,rs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new j,Sx=new De,yx=new De;class Di extends P0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nr.x,Nr.y).multiplyScalar(-t/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Nr.x,Nr.y).multiplyScalar(-t/Nr.z)}getViewSize(t,i){return this.getViewBounds(t,Sx,yx),i.subVectors(yx,Sx)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Kc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class LE extends I0{constructor(){super(new Di(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Ol*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class id extends zl{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new LE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class UE extends I0{constructor(){super(new Di(90,1,.5,500)),this.isPointLightShadow=!0}}class Jc extends zl{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new UE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ph extends P0{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class OE extends I0{constructor(){super(new ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s0 extends zl{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new OE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class JS extends zl{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const xl=-90,Sl=1;class $S extends hn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(xl,Sl,t,i);l.layers=this.layers,this.add(l);const c=new Di(xl,Sl,t,i);c.layers=this.layers,this.add(c);const f=new Di(xl,Sl,t,i);f.layers=this.layers,this.add(f);const h=new Di(xl,Sl,t,i);h.layers=this.layers,this.add(h);const m=new Di(xl,Sl,t,i);m.layers=this.layers,this.add(m);const p=new Di(xl,Sl,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Wa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ul)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ty extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Mx=new un;class ey{constructor(t,i,s=0,l=1/0){this.ray=new D0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new uh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ge("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Mx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mx),this}intersectObject(t,i=!0,s=[]){return r0(t,this,s,i),s.sort(Ex),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)r0(t[l],this,s,i);return s.sort(Ex),s}}function Ex(r,t){return r.distance-t.distance}function r0(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)r0(c[f],t,i,!0)}}class ny{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,me("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function bx(r,t,i,s){const l=IE(s);switch(i){case E0:return r*t;case nh:return r*t/l.components*l.byteLength;case ih:return r*t/l.components*l.byteLength;case yo:return r*t*2/l.components*l.byteLength;case ah:return r*t*2/l.components*l.byteLength;case b0:return r*t*3/l.components*l.byteLength;case Ea:return r*t*4/l.components*l.byteLength;case sh:return r*t*4/l.components*l.byteLength;case Yc:case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case jc:case Zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _d:case xd:return Math.max(r,16)*Math.max(t,8)/4;case gd:case vd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case yd:case Ed:case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Md:case Td:case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IE(r){switch(r){case Xi:case x0:return{byteLength:1,components:1};case Nl:case S0:case fs:return{byteLength:2,components:1};case th:case eh:return{byteLength:2,components:4};case ja:case $d:case Ma:return{byteLength:4,components:1};case y0:case M0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);function iy(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function PE(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<v.length;y++){const E=v[g],w=v[y];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let y=0,E=v.length;y<E;y++){const w=v[y];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BE=`#ifdef USE_ALPHAHASH
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
#endif`,zE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kE=`#ifdef USE_AOMAP
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
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WE=`#ifdef USE_BATCHING
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
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KE=`#ifdef USE_IRIDESCENCE
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
#endif`,QE=`#ifdef USE_BUMPMAP
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
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rb=`#define PI 3.141592653589793
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
} // validated`,ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lb=`vec3 transformedNormal = objectNormal;
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
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
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
}`,Tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
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
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
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
#endif`,Ib=`uniform sampler2D dfgLUT;
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
}`,Pb=`
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
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
#endif`,$b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
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
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
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
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,B1=`varying vec3 vWorldDirection;
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`#include <common>
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
}`,k1=`#if DEPTH_PACKING == 3200
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
}`,X1=`#define DISTANCE
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
}`,W1=`#define DISTANCE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,Q1=`uniform vec3 diffuse;
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
}`,J1=`#define LAMBERT
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
}`,$1=`#define LAMBERT
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
}`,tT=`#define MATCAP
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
}`,eT=`#define MATCAP
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
}`,nT=`#define NORMAL
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
}`,iT=`#define NORMAL
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
}`,aT=`#define PHONG
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
}`,sT=`#define PHONG
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
}`,rT=`#define STANDARD
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
}`,oT=`#define STANDARD
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
}`,lT=`#define TOON
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
}`,cT=`#define TOON
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
}`,uT=`uniform float size;
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
}`,fT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,hT=`uniform vec3 color;
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
}`,pT=`uniform float rotation;
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
}`,mT=`uniform vec3 diffuse;
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
}`,Ae={alphahash_fragment:FE,alphahash_pars_fragment:BE,alphamap_fragment:zE,alphamap_pars_fragment:HE,alphatest_fragment:GE,alphatest_pars_fragment:VE,aomap_fragment:kE,aomap_pars_fragment:XE,batching_pars_vertex:WE,batching_vertex:YE,begin_vertex:qE,beginnormal_vertex:jE,bsdfs:ZE,iridescence_fragment:KE,bumpmap_pars_fragment:QE,clipping_planes_fragment:JE,clipping_planes_pars_fragment:$E,clipping_planes_pars_vertex:tb,clipping_planes_vertex:eb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:ab,color_vertex:sb,common:rb,cube_uv_reflection_fragment:ob,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:fb,emissivemap_pars_fragment:db,colorspace_fragment:hb,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:_b,envmap_pars_vertex:vb,envmap_physical_pars_fragment:wb,envmap_vertex:xb,fog_vertex:Sb,fog_pars_vertex:yb,fog_fragment:Mb,fog_pars_fragment:Eb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Tb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Db,lights_toon_pars_fragment:Nb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Ub,lights_physical_fragment:Ob,lights_physical_pars_fragment:Ib,lights_fragment_begin:Pb,lights_fragment_maps:Fb,lights_fragment_end:Bb,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Hb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Vb,map_fragment:kb,map_pars_fragment:Xb,map_particle_fragment:Wb,map_particle_pars_fragment:Yb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:jb,morphinstance_vertex:Zb,morphcolor_vertex:Kb,morphnormal_vertex:Qb,morphtarget_pars_vertex:Jb,morphtarget_vertex:$b,normal_fragment_begin:t1,normal_fragment_maps:e1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:a1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:c1,opaque_fragment:u1,packing:f1,premultiplied_alpha_fragment:d1,project_vertex:h1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:_1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:x1,shadowmap_vertex:S1,shadowmask_pars_fragment:y1,skinbase_vertex:M1,skinning_pars_vertex:E1,skinning_vertex:b1,skinnormal_vertex:T1,specularmap_fragment:A1,specularmap_pars_fragment:R1,tonemapping_fragment:C1,tonemapping_pars_fragment:w1,transmission_fragment:D1,transmission_pars_fragment:N1,uv_pars_fragment:L1,uv_pars_vertex:U1,uv_vertex:O1,worldpos_vertex:I1,background_vert:P1,background_frag:F1,backgroundCube_vert:B1,backgroundCube_frag:z1,cube_vert:H1,cube_frag:G1,depth_vert:V1,depth_frag:k1,distance_vert:X1,distance_frag:W1,equirect_vert:Y1,equirect_frag:q1,linedashed_vert:j1,linedashed_frag:Z1,meshbasic_vert:K1,meshbasic_frag:Q1,meshlambert_vert:J1,meshlambert_frag:$1,meshmatcap_vert:tT,meshmatcap_frag:eT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:aT,meshphong_frag:sT,meshphysical_vert:rT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:fT,shadow_vert:dT,shadow_frag:hT,sprite_vert:pT,sprite_frag:mT},Vt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},envMapRotation:{value:new Ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}},Xa={basic:{uniforms:wi([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:wi([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:wi([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:wi([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:wi([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:wi([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:wi([Vt.points,Vt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:wi([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:wi([Vt.common,Vt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:wi([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:wi([Vt.sprite,Vt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ee}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distance:{uniforms:wi([Vt.common,Vt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distance_vert,fragmentShader:Ae.distance_frag},shadow:{uniforms:wi([Vt.lights,Vt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Xa.physical={uniforms:wi([Xa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Wf={r:0,b:0,g:0},lo=new ia,gT=new un;function _T(r,t,i,s,l,c){const f=new ue(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function y(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const N=C.backgroundBlurriness>0;L=t.get(L,N)}return L}function E(C){let L=!1;const N=y(C);N===null?M(f,h):N&&N.isColor&&(M(N,1),L=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,L){const N=y(L);N&&(N.isCubeTexture||N.mapping===iu)?(p===void 0&&(p=new He(new Br(1,1,1),new Za({name:"BackgroundCubeMaterial",uniforms:Pl(Xa.backgroundCube.uniforms),vertexShader:Xa.backgroundCube.vertexShader,fragmentShader:Xa.backgroundCube.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,H,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),lo.copy(L.backgroundRotation),lo.x*=-1,lo.y*=-1,lo.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(lo.y*=-1,lo.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(lo)),p.material.toneMapped=Ve.getTransfer(N.colorSpace)!==en,(_!==N||v!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new He(new ls(2,2),new Za({name:"BackgroundMaterial",uniforms:Pl(Xa.background.uniforms),vertexShader:Xa.background.vertexShader,fragmentShader:Xa.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Ve.getTransfer(N.colorSpace)!==en,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(Wf,WS(r)),i.buffers.color.setClear(Wf.r,Wf.g,Wf.b,L,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,L=1){f.set(C),h=L,M(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,M(f,h)},render:E,addToRenderList:w,dispose:S}}function vT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(V,tt,st,lt,Z){let I=!1;const F=v(V,lt,st,tt);c!==F&&(c=F,p(c.object)),I=y(V,lt,st,Z),I&&E(V,lt,st,Z),Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,N(V,tt,st,lt),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function _(V){return r.deleteVertexArray(V)}function v(V,tt,st,lt){const Z=lt.wireframe===!0;let I=s[tt.id];I===void 0&&(I={},s[tt.id]=I);const F=V.isInstancedMesh===!0?V.id:0;let ut=I[F];ut===void 0&&(ut={},I[F]=ut);let gt=ut[st.id];gt===void 0&&(gt={},ut[st.id]=gt);let At=gt[Z];return At===void 0&&(At=g(m()),gt[Z]=At),At}function g(V){const tt=[],st=[],lt=[];for(let Z=0;Z<i;Z++)tt[Z]=0,st[Z]=0,lt[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:st,attributeDivisors:lt,object:V,attributes:{},index:null}}function y(V,tt,st,lt){const Z=c.attributes,I=tt.attributes;let F=0;const ut=st.getAttributes();for(const gt in ut)if(ut[gt].location>=0){const U=Z[gt];let q=I[gt];if(q===void 0&&(gt==="instanceMatrix"&&V.instanceMatrix&&(q=V.instanceMatrix),gt==="instanceColor"&&V.instanceColor&&(q=V.instanceColor)),U===void 0||U.attribute!==q||q&&U.data!==q.data)return!0;F++}return c.attributesNum!==F||c.index!==lt}function E(V,tt,st,lt){const Z={},I=tt.attributes;let F=0;const ut=st.getAttributes();for(const gt in ut)if(ut[gt].location>=0){let U=I[gt];U===void 0&&(gt==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),gt==="instanceColor"&&V.instanceColor&&(U=V.instanceColor));const q={};q.attribute=U,U&&U.data&&(q.data=U.data),Z[gt]=q,F++}c.attributes=Z,c.attributesNum=F,c.index=lt}function w(){const V=c.newAttributes;for(let tt=0,st=V.length;tt<st;tt++)V[tt]=0}function M(V){S(V,0)}function S(V,tt){const st=c.newAttributes,lt=c.enabledAttributes,Z=c.attributeDivisors;st[V]=1,lt[V]===0&&(r.enableVertexAttribArray(V),lt[V]=1),Z[V]!==tt&&(r.vertexAttribDivisor(V,tt),Z[V]=tt)}function C(){const V=c.newAttributes,tt=c.enabledAttributes;for(let st=0,lt=tt.length;st<lt;st++)tt[st]!==V[st]&&(r.disableVertexAttribArray(st),tt[st]=0)}function L(V,tt,st,lt,Z,I,F){F===!0?r.vertexAttribIPointer(V,tt,st,Z,I):r.vertexAttribPointer(V,tt,st,lt,Z,I)}function N(V,tt,st,lt){w();const Z=lt.attributes,I=st.getAttributes(),F=tt.defaultAttributeValues;for(const ut in I){const gt=I[ut];if(gt.location>=0){let At=Z[ut];if(At===void 0&&(ut==="instanceMatrix"&&V.instanceMatrix&&(At=V.instanceMatrix),ut==="instanceColor"&&V.instanceColor&&(At=V.instanceColor)),At!==void 0){const U=At.normalized,q=At.itemSize,ft=t.get(At);if(ft===void 0)continue;const Lt=ft.buffer,zt=ft.type,nt=ft.bytesPerElement,xt=zt===r.INT||zt===r.UNSIGNED_INT||At.gpuType===$d;if(At.isInterleavedBufferAttribute){const wt=At.data,Zt=wt.stride,$t=At.offset;if(wt.isInstancedInterleavedBuffer){for(let oe=0;oe<gt.locationSize;oe++)S(gt.location+oe,wt.meshPerAttribute);V.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let oe=0;oe<gt.locationSize;oe++)M(gt.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let oe=0;oe<gt.locationSize;oe++)L(gt.location+oe,q/gt.locationSize,zt,U,Zt*nt,($t+q/gt.locationSize*oe)*nt,xt)}else{if(At.isInstancedBufferAttribute){for(let wt=0;wt<gt.locationSize;wt++)S(gt.location+wt,At.meshPerAttribute);V.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let wt=0;wt<gt.locationSize;wt++)M(gt.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let wt=0;wt<gt.locationSize;wt++)L(gt.location+wt,q/gt.locationSize,zt,U,q*nt,q/gt.locationSize*wt*nt,xt)}}else if(F!==void 0){const U=F[ut];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(gt.location,U);break;case 3:r.vertexAttrib3fv(gt.location,U);break;case 4:r.vertexAttrib4fv(gt.location,U);break;default:r.vertexAttrib1fv(gt.location,U)}}}}C()}function B(){O();for(const V in s){const tt=s[V];for(const st in tt){const lt=tt[st];for(const Z in lt){const I=lt[Z];for(const F in I)_(I[F].object),delete I[F];delete lt[Z]}}delete s[V]}}function H(V){if(s[V.id]===void 0)return;const tt=s[V.id];for(const st in tt){const lt=tt[st];for(const Z in lt){const I=lt[Z];for(const F in I)_(I[F].object),delete I[F];delete lt[Z]}}delete s[V.id]}function z(V){for(const tt in s){const st=s[tt];for(const lt in st){const Z=st[lt];if(Z[V.id]===void 0)continue;const I=Z[V.id];for(const F in I)_(I[F].object),delete I[F];delete Z[V.id]}}}function T(V){for(const tt in s){const st=s[tt],lt=V.isInstancedMesh===!0?V.id:0,Z=st[lt];if(Z!==void 0){for(const I in Z){const F=Z[I];for(const ut in F)_(F[ut].object),delete F[ut];delete Z[I]}delete st[lt],Object.keys(st).length===0&&delete s[tt]}}}function O(){mt(),f=!0,c!==l&&(c=l,p(c.object))}function mt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:mt,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function xT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let y=0;for(let E=0;E<v;E++)y+=_[E];i.update(y,s,1)}function m(p,_,v,g){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],_[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w]*g[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ST(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ea&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const T=z===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Xi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ma&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(me("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:N,maxSamples:B,samples:H}}function yT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Lr,h=new Ee,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,y){const E=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,L=C*4;let N=S.clippingState||null;m.value=N,N=_(E,g,L,y);for(let B=0;B!==L;++B)N[B]=i[B];S.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,E){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const S=y+w*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,N=y;L!==w;++L,N+=4)f.copy(v[L]).applyMatrix4(C,h),f.normal.toArray(M,N),M[N+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const Ir=4,Tx=[.125,.215,.35,.446,.526,.582],go=20,MT=256,Ic=new ph,Ax=new ue;let Fm=null,Bm=0,zm=0,Hm=!1;const ET=new j;class Zd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=ET}=c;Fm=this._renderer.getRenderTarget(),Bm=this._renderer.getActiveCubeFace(),zm=this._renderer.getActiveMipmapLevel(),Hm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fm,Bm,zm),this._renderer.xr.enabled=Hm,t.scissorTest=!1,yl(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Pr||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fm=this._renderer.getRenderTarget(),Bm=this._renderer.getActiveCubeFace(),zm=this._renderer.getActiveMipmapLevel(),Hm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:si,minFilter:si,generateMipmaps:!1,type:fs,format:Ea,colorSpace:Mo,depthBuffer:!1},l=Rx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bT(c)),this._blurMaterial=AT(c,t,i),this._ggxMaterial=TT(c,t,i)}return l}_compileMaterial(t){const i=new He(new aa,t);this._renderer.compile(i,Ic)}_sceneToCubeUV(t,i,s,l,c){const m=new Di(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(Ax),v.toneMapping=Ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new Br,new nu({name:"PMREM.Background",side:Ei,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(Ax),S=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const B=this._cubeSize;yl(l,N*B,L>2?B:0,B,B),v.setRenderTarget(l),S&&v.render(w,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Pr||t.mapping===So;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;yl(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Ic)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,y=v*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-Ir?s-E+Ir:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,yl(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(h,Ic),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,yl(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(h,Ic)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*go-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):go;M>go&&me(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${go}`);const S=[];let C=0;for(let z=0;z<go;++z){const T=z/w,O=Math.exp(-T*T/2);S.push(O),z===0?C+=O:z<M&&(C+=2*O)}for(let z=0;z<S.length;z++)S[z]=S[z]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-s;const N=this._sizeLods[l],B=3*N*(l>L-Ir?l-L+Ir:0),H=4*(this._cubeSize-N);yl(i,B,H,3*N,2*N),m.setRenderTarget(i),m.render(v,Ic)}}function bT(r){const t=[],i=[],s=[];let l=r;const c=r-Ir+1+Tx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-Ir?m=Tx[f-r+Ir-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,E=6,w=3,M=2,S=1,C=new Float32Array(w*E*y),L=new Float32Array(M*E*y),N=new Float32Array(S*E*y);for(let H=0;H<y;H++){const z=H%3*2/3-1,T=H>2?0:-1,O=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(O,w*E*H),L.set(g,M*E*H);const mt=[H,H,H,H,H,H];N.set(mt,S*E*H)}const B=new aa;B.setAttribute("position",new ba(C,w)),B.setAttribute("uv",new ba(L,M)),B.setAttribute("faceIndex",new ba(N,S)),s.push(new He(B,null)),l>Ir&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Rx(r,t,i){const s=new qa(r,t,i);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yl(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function TT(r,t,i){return new Za({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mh(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function AT(r,t,i){const s=new Float32Array(go),l=new j(0,1,0);return new Za({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mh(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Cx(){return new Za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function wx(){return new Za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}class F0 extends qa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new L0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Br(5,5,5),c=new Za({name:"CubemapFromEquirect",uniforms:Pl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Ei,blending:us});c.uniforms.tEquirect.value=i;const f=new He(l,c),h=i.minFilter;return i.minFilter===Gs&&(i.minFilter=si),new $S(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function RT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===$f||y===td)if(t.has(g)){const E=t.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new F0(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,E=y===$f||y===td,w=y===Pr||y===So;if(E||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Zd(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return E&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new Zd(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function h(g,y){return y===$f?g.mapping=Pr:y===td&&(g.mapping=So),g}function m(g){let y=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function CT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tu("WebGLRenderer: "+s+" extension not supported."),l}}}function wT(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let L=0,N=C.length;L<N;L+=3){const B=C[L+0],H=C[L+1],z=C[L+2];g.push(B,H,H,z,z,B)}}else{const C=E.array;w=E.version;for(let L=0,N=C.length/3-1;L<N;L+=3){const B=L+0,H=L+1,z=L+2;g.push(B,H,H,z,z,B)}}const M=new(E.count>=65535?w0:C0)(g,1);M.version=w;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function DT(r,t,i){let s;function l(g){s=g}let c,f;function h(g){c=g.type,f=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*f),i.update(y,s,1)}function p(g,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,g*f,E),i.update(y,s,E))}function _(g,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,E);let M=0;for(let S=0;S<E;S++)M+=y[S];i.update(M,s,1)}function v(g,y,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/f,y[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,w,0,E);let S=0;for(let C=0;C<E;C++)S+=y[C]*w[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function NT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ge("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function LT(r,t,i){const s=new WeakMap,l=new Tn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let mt=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",mt)};var y=mt;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),w===!0&&(N=2),M===!0&&(N=3);let B=h.attributes.position.count*N,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const z=new Float32Array(B*H*4*v),T=new A0(z,B,H,v);T.type=Ma,T.needsUpdate=!0;const O=N*4;for(let V=0;V<v;V++){const tt=S[V],st=C[V],lt=L[V],Z=B*H*4*V;for(let I=0;I<tt.count;I++){const F=I*O;E===!0&&(l.fromBufferAttribute(tt,I),z[Z+F+0]=l.x,z[Z+F+1]=l.y,z[Z+F+2]=l.z,z[Z+F+3]=0),w===!0&&(l.fromBufferAttribute(st,I),z[Z+F+4]=l.x,z[Z+F+5]=l.y,z[Z+F+6]=l.z,z[Z+F+7]=0),M===!0&&(l.fromBufferAttribute(lt,I),z[Z+F+8]=l.x,z[Z+F+9]=l.y,z[Z+F+10]=l.z,z[Z+F+11]=lt.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new De(B,H)},s.set(h,g),h.addEventListener("dispose",mt)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function UT(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const OT={[d0]:"LINEAR_TONE_MAPPING",[h0]:"REINHARD_TONE_MAPPING",[p0]:"CINEON_TONE_MAPPING",[Jd]:"ACES_FILMIC_TONE_MAPPING",[g0]:"AGX_TONE_MAPPING",[_0]:"NEUTRAL_TONE_MAPPING",[m0]:"CUSTOM_TONE_MAPPING"};function IT(r,t,i,s,l){const c=new qa(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new qa(t,i,{type:fs,depthBuffer:!1,stencilBuffer:!1}),h=new aa;h.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ri([0,2,0,0,2,0],2));const m=new qS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new He(h,m),_=new ph(-1,1,1,-1,0,1);let v=null,g=null,y=!1,E,w=null,M=[],S=!1;this.setSize=function(C,L){c.setSize(C,L),f.setSize(C,L);for(let N=0;N<M.length;N++){const B=M[N];B.setSize&&B.setSize(C,L)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const L=c.width,N=c.height;for(let B=0;B<M.length;B++){const H=M[B];H.setSize&&H.setSize(L,N)}},this.begin=function(C,L){if(y||C.toneMapping===Ya&&M.length===0)return!1;if(w=L,L!==null){const N=L.width,B=L.height;(c.width!==N||c.height!==B)&&this.setSize(N,B)}return S===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=Ya,!0},this.hasRenderPass=function(){return S},this.end=function(C,L){C.toneMapping=E,y=!0;let N=c,B=f;for(let H=0;H<M.length;H++){const z=M[H];if(z.enabled!==!1&&(z.render(C,B,N,L),z.needsSwap!==!1)){const T=N;N=B,B=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},Ve.getTransfer(v)===en&&(m.defines.SRGB_TRANSFER="");const H=OT[g];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(w),C.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const ay=new pi,o0=new Il(1,1),sy=new A0,ry=new zS,oy=new L0,Dx=[],Nx=[],Lx=new Float32Array(16),Ux=new Float32Array(9),Ox=new Float32Array(4);function Hl(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Dx[l];if(c===void 0&&(c=new Float32Array(l),Dx[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function Qn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Jn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function gh(r,t){let i=Nx[t];i===void 0&&(i=new Int32Array(t),Nx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function PT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Qn(i,t))return;r.uniform2fv(this.addr,t),Jn(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Qn(i,t))return;r.uniform3fv(this.addr,t),Jn(i,t)}}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Qn(i,t))return;r.uniform4fv(this.addr,t),Jn(i,t)}}function HT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Qn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Jn(i,t)}else{if(Qn(i,s))return;Ox.set(s),r.uniformMatrix2fv(this.addr,!1,Ox),Jn(i,s)}}function GT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Qn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Jn(i,t)}else{if(Qn(i,s))return;Ux.set(s),r.uniformMatrix3fv(this.addr,!1,Ux),Jn(i,s)}}function VT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Qn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Jn(i,t)}else{if(Qn(i,s))return;Lx.set(s),r.uniformMatrix4fv(this.addr,!1,Lx),Jn(i,s)}}function kT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function XT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Qn(i,t))return;r.uniform2iv(this.addr,t),Jn(i,t)}}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Qn(i,t))return;r.uniform3iv(this.addr,t),Jn(i,t)}}function YT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Qn(i,t))return;r.uniform4iv(this.addr,t),Jn(i,t)}}function qT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Qn(i,t))return;r.uniform2uiv(this.addr,t),Jn(i,t)}}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Qn(i,t))return;r.uniform3uiv(this.addr,t),Jn(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Qn(i,t))return;r.uniform4uiv(this.addr,t),Jn(i,t)}}function QT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(o0.compareFunction=i.isReversedDepthBuffer()?lh:oh,c=o0):c=ay,i.setTexture2D(t||c,l)}function JT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ry,l)}function $T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||oy,l)}function tA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||sy,l)}function eA(r){switch(r){case 5126:return PT;case 35664:return FT;case 35665:return BT;case 35666:return zT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return kT;case 35667:case 35671:return XT;case 35668:case 35672:return WT;case 35669:case 35673:return YT;case 5125:return qT;case 36294:return jT;case 36295:return ZT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return tA}}function nA(r,t){r.uniform1fv(this.addr,t)}function iA(r,t){const i=Hl(t,this.size,2);r.uniform2fv(this.addr,i)}function aA(r,t){const i=Hl(t,this.size,3);r.uniform3fv(this.addr,i)}function sA(r,t){const i=Hl(t,this.size,4);r.uniform4fv(this.addr,i)}function rA(r,t){const i=Hl(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function oA(r,t){const i=Hl(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function lA(r,t){const i=Hl(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function cA(r,t){r.uniform1iv(this.addr,t)}function uA(r,t){r.uniform2iv(this.addr,t)}function fA(r,t){r.uniform3iv(this.addr,t)}function dA(r,t){r.uniform4iv(this.addr,t)}function hA(r,t){r.uniform1uiv(this.addr,t)}function pA(r,t){r.uniform2uiv(this.addr,t)}function mA(r,t){r.uniform3uiv(this.addr,t)}function gA(r,t){r.uniform4uiv(this.addr,t)}function _A(r,t,i){const s=this.cache,l=t.length,c=gh(i,l);Qn(s,c)||(r.uniform1iv(this.addr,c),Jn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=o0:f=ay;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function vA(r,t,i){const s=this.cache,l=t.length,c=gh(i,l);Qn(s,c)||(r.uniform1iv(this.addr,c),Jn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||ry,c[f])}function xA(r,t,i){const s=this.cache,l=t.length,c=gh(i,l);Qn(s,c)||(r.uniform1iv(this.addr,c),Jn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||oy,c[f])}function SA(r,t,i){const s=this.cache,l=t.length,c=gh(i,l);Qn(s,c)||(r.uniform1iv(this.addr,c),Jn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||sy,c[f])}function yA(r){switch(r){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return sA;case 35674:return rA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}class MA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=eA(i.type)}}class EA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yA(i.type)}}class bA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Gm=/(\w+)(\])?(\[|\.)?/g;function Ix(r,t){r.seq.push(t),r.map[t.id]=t}function TA(r,t,i){const s=r.name,l=s.length;for(Gm.lastIndex=0;;){const c=Gm.exec(s),f=Gm.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Ix(i,p===void 0?new MA(h,r,t):new EA(h,r,t));break}else{let v=i.map[h];v===void 0&&(v=new bA(h),Ix(i,v)),i=v}}}class ad{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);TA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Px(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const AA=37297;let RA=0;function CA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const Fx=new Ee;function wA(r){Ve._getMatrix(Fx,Ve.workingColorSpace,r);const t=`mat3( ${Fx.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(r)){case $c:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Bx(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+CA(r.getShaderSource(t),h)}else return c}function DA(r,t){const i=wA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const NA={[d0]:"Linear",[h0]:"Reinhard",[p0]:"Cineon",[Jd]:"ACESFilmic",[g0]:"AgX",[_0]:"Neutral",[m0]:"Custom"};function LA(r,t){const i=NA[t];return i===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yf=new j;function UA(){Ve.getLuminanceCoefficients(Yf);const r=Yf.x.toFixed(4),t=Yf.y.toFixed(4),i=Yf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kc).join(`
`)}function IA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function PA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function kc(r){return r!==""}function zx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FA=/^[ \t]*#include +<([\w\d./]+)>/gm;function l0(r){return r.replace(FA,zA)}const BA=new Map;function zA(r,t){let i=Ae[t];if(i===void 0){const s=BA.get(t);if(s!==void 0)i=Ae[s],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return l0(i)}const HA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gx(r){return r.replace(HA,GA)}function GA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Vx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const VA={[_o]:"SHADOWMAP_TYPE_PCF",[Al]:"SHADOWMAP_TYPE_VSM"};function kA(r){return VA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XA={[Pr]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function WA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":XA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const YA={[So]:"ENVMAP_MODE_REFRACTION"};function qA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":YA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jA={[Qd]:"ENVMAP_BLENDING_MULTIPLY",[bS]:"ENVMAP_BLENDING_MIX",[TS]:"ENVMAP_BLENDING_ADD"};function ZA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":jA[r.combine]||"ENVMAP_BLENDING_NONE"}function KA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function QA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=kA(i),p=WA(i),_=qA(i),v=ZA(i),g=KA(i),y=OA(i),E=IA(c),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(kc).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(kc).join(`
`),S.length>0&&(S+=`
`)):(M=[Vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kc).join(`
`),S=[Vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?Ae.tonemapping_pars_fragment:"",i.toneMapping!==Ya?LA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,DA("linearToOutputTexel",i.outputColorSpace),UA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(kc).join(`
`)),f=l0(f),f=zx(f,i),f=Hx(f,i),h=l0(h),h=zx(h,i),h=Hx(h,i),f=Gx(f),h=Gx(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=C+M+f,N=C+S+h,B=Px(l,l.VERTEX_SHADER,L),H=Px(l,l.FRAGMENT_SHADER,N);l.attachShader(w,B),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(V){if(r.debug.checkShaderErrors){const tt=l.getProgramInfoLog(w)||"",st=l.getShaderInfoLog(B)||"",lt=l.getShaderInfoLog(H)||"",Z=tt.trim(),I=st.trim(),F=lt.trim();let ut=!0,gt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,B,H);else{const At=Bx(l,B,"vertex"),U=Bx(l,H,"fragment");Ge("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+At+`
`+U)}else Z!==""?me("WebGLProgram: Program Info Log:",Z):(I===""||F==="")&&(gt=!1);gt&&(V.diagnostics={runnable:ut,programLog:Z,vertexShader:{log:I,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(B),l.deleteShader(H),T=new ad(l,w),O=PA(l,w)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let mt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return mt===!1&&(mt=l.getProgramParameter(w,AA)),mt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=RA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=H,this}let JA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new t2(t),i.set(t,s)),s}}class t2{constructor(t){this.id=JA++,this.code=t,this.usedTimes=0}}function e2(r,t,i,s,l,c){const f=new uh,h=new $A,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,O,mt,V,tt){const st=V.fog,lt=tt.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,F=t.get(T.envMap||Z,I),ut=F&&F.mapping===iu?F.image.height:null,gt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&me("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const At=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,U=At!==void 0?At.length:0;let q=0;lt.morphAttributes.position!==void 0&&(q=1),lt.morphAttributes.normal!==void 0&&(q=2),lt.morphAttributes.color!==void 0&&(q=3);let ft,Lt,zt,nt;if(gt){const pe=Xa[gt];ft=pe.vertexShader,Lt=pe.fragmentShader}else ft=T.vertexShader,Lt=T.fragmentShader,h.update(T),zt=h.getVertexShaderID(T),nt=h.getFragmentShaderID(T);const xt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Zt=tt.isInstancedMesh===!0,$t=tt.isBatchedMesh===!0,oe=!!T.map,pn=!!T.matcap,be=!!F,Re=!!T.aoMap,ke=!!T.lightMap,_e=!!T.bumpMap,rn=!!T.normalMap,k=!!T.displacementMap,fn=!!T.emissiveMap,Ne=!!T.metalnessMap,Xe=!!T.roughnessMap,Kt=T.anisotropy>0,P=T.clearcoat>0,b=T.dispersion>0,D=T.iridescence>0,Q=T.sheen>0,et=T.transmission>0,it=Kt&&!!T.anisotropyMap,Ct=P&&!!T.clearcoatMap,Rt=P&&!!T.clearcoatNormalMap,Xt=P&&!!T.clearcoatRoughnessMap,Nt=D&&!!T.iridescenceMap,yt=D&&!!T.iridescenceThicknessMap,J=Q&&!!T.sheenColorMap,Mt=Q&&!!T.sheenRoughnessMap,vt=!!T.specularMap,Ht=!!T.specularColorMap,he=!!T.specularIntensityMap,W=et&&!!T.transmissionMap,Ot=et&&!!T.thicknessMap,Ut=!!T.gradientMap,Pt=!!T.alphaMap,Dt=T.alphaTest>0,dt=!!T.alphaHash,kt=!!T.extensions;let ae=Ya;T.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ae=r.toneMapping);const we={shaderID:gt,shaderType:T.type,shaderName:T.name,vertexShader:ft,fragmentShader:Lt,defines:T.defines,customVertexShaderID:zt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:$t,batchingColor:$t&&tt._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&tt.instanceColor!==null,instancingMorph:Zt&&tt.morphTexture!==null,outputColorSpace:xt===null?r.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Mo,alphaToCoverage:!!T.alphaToCoverage,map:oe,matcap:pn,envMap:be,envMapMode:be&&F.mapping,envMapCubeUVHeight:ut,aoMap:Re,lightMap:ke,bumpMap:_e,normalMap:rn,displacementMap:k,emissiveMap:fn,normalMapObjectSpace:rn&&T.normalMapType===CS,normalMapTangentSpace:rn&&T.normalMapType===rh,metalnessMap:Ne,roughnessMap:Xe,anisotropy:Kt,anisotropyMap:it,clearcoat:P,clearcoatMap:Ct,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:D,iridescenceMap:Nt,iridescenceThicknessMap:yt,sheen:Q,sheenColorMap:J,sheenRoughnessMap:Mt,specularMap:vt,specularColorMap:Ht,specularIntensityMap:he,transmission:et,transmissionMap:W,thicknessMap:Ot,gradientMap:Ut,opaque:T.transparent===!1&&T.blending===vo&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Dt,alphaHash:dt,combine:T.combine,mapUv:oe&&E(T.map.channel),aoMapUv:Re&&E(T.aoMap.channel),lightMapUv:ke&&E(T.lightMap.channel),bumpMapUv:_e&&E(T.bumpMap.channel),normalMapUv:rn&&E(T.normalMap.channel),displacementMapUv:k&&E(T.displacementMap.channel),emissiveMapUv:fn&&E(T.emissiveMap.channel),metalnessMapUv:Ne&&E(T.metalnessMap.channel),roughnessMapUv:Xe&&E(T.roughnessMap.channel),anisotropyMapUv:it&&E(T.anisotropyMap.channel),clearcoatMapUv:Ct&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:J&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&E(T.sheenRoughnessMap.channel),specularMapUv:vt&&E(T.specularMap.channel),specularColorMapUv:Ht&&E(T.specularColorMap.channel),specularIntensityMapUv:he&&E(T.specularIntensityMap.channel),transmissionMapUv:W&&E(T.transmissionMap.channel),thicknessMapUv:Ot&&E(T.thicknessMap.channel),alphaMapUv:Pt&&E(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(rn||Kt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!lt.attributes.uv&&(oe||Pt),fog:!!st,useFog:T.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||lt.attributes.normal===void 0&&rn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:tt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:q,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&mt.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:oe&&T.map.isVideoTexture===!0&&Ve.getTransfer(T.map.colorSpace)===en,decodeVideoTextureEmissive:fn&&T.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(T.emissiveMap.colorSpace)===en,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vn,flipSided:T.side===Ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||$t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return we.vertexUv1s=m.has(1),we.vertexUv2s=m.has(2),we.vertexUv3s=m.has(3),m.clear(),we}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const mt in T.defines)O.push(mt),O.push(T.defines[mt]);return T.isRawShaderMaterial===!1&&(S(O,T),C(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function S(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function C(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),T.push(f.mask)}function L(T){const O=y[T.type];let mt;if(O){const V=Xa[O];mt=YS.clone(V.uniforms)}else mt=T.uniforms;return mt}function N(T,O){let mt=_.get(O);return mt!==void 0?++mt.usedTimes:(mt=new QA(r,O,T,l),p.push(mt),_.set(O,mt)),mt}function B(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function H(T){h.remove(T)}function z(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:L,acquireProgram:N,releaseProgram:B,releaseShaderCache:H,programs:p,dispose:z}}function n2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function i2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function kx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Xx(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function h(g,y,E,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=E,C.materialVariant=f(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,E,w,M,S){const C=h(g,y,E,w,M,S);E.transmission>0?s.push(C):E.transparent===!0?l.push(C):i.push(C)}function p(g,y,E,w,M,S){const C=h(g,y,E,w,M,S);E.transmission>0?s.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||i2),s.length>1&&s.sort(y||kx),l.length>1&&l.sort(y||kx)}function v(){for(let g=t,y=r.length;g<y;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function a2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Xx,r.set(s,[f])):l>=c.length?(f=new Xx,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function s2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new ue};break;case"SpotLight":i={position:new j,direction:new j,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function r2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let o2=0;function l2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function c2(r){const t=new s2,i=r2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new un,f=new un;function h(p){let _=0,v=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,E=0,w=0,M=0,S=0,C=0,L=0,N=0,B=0,H=0,z=0;p.sort(l2);for(let O=0,mt=p.length;O<mt;O++){const V=p[O],tt=V.color,st=V.intensity,lt=V.distance;let Z=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===yo?Z=V.shadow.map.texture:Z=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=tt.r*st,v+=tt.g*st,g+=tt.b*st;else if(V.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(V.sh.coefficients[I],st);z++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const F=V.shadow,ut=i.get(V);ut.shadowIntensity=F.intensity,ut.shadowBias=F.bias,ut.shadowNormalBias=F.normalBias,ut.shadowRadius=F.radius,ut.shadowMapSize=F.mapSize,s.directionalShadow[y]=ut,s.directionalShadowMap[y]=Z,s.directionalShadowMatrix[y]=V.shadow.matrix,C++}s.directional[y]=I,y++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(tt).multiplyScalar(st),I.distance=lt,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,s.spot[w]=I;const F=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,F.updateMatrices(V),V.castShadow&&H++),s.spotLightMatrix[w]=F.matrix,V.castShadow){const ut=i.get(V);ut.shadowIntensity=F.intensity,ut.shadowBias=F.bias,ut.shadowNormalBias=F.normalBias,ut.shadowRadius=F.radius,ut.shadowMapSize=F.mapSize,s.spotShadow[w]=ut,s.spotShadowMap[w]=Z,N++}w++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(tt).multiplyScalar(st),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=I,M++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const F=V.shadow,ut=i.get(V);ut.shadowIntensity=F.intensity,ut.shadowBias=F.bias,ut.shadowNormalBias=F.normalBias,ut.shadowRadius=F.radius,ut.shadowMapSize=F.mapSize,ut.shadowCameraNear=F.camera.near,ut.shadowCameraFar=F.camera.far,s.pointShadow[E]=ut,s.pointShadowMap[E]=Z,s.pointShadowMatrix[E]=V.shadow.matrix,L++}s.point[E]=I,E++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(st),I.groundColor.copy(V.groundColor).multiplyScalar(st),s.hemi[S]=I,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==L||T.numSpotShadows!==N||T.numSpotMaps!==B||T.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+B-H,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=z,T.directionalLength=y,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=L,T.numSpotShadows=N,T.numSpotMaps=B,T.numLightProbes=z,s.version=o2++)}function m(p,_){let v=0,g=0,y=0,E=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const L=p[S];if(L.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),v++}else if(L.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const N=s.rectArea[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const N=s.hemi[w];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(M),w++}}}return{setup:h,setupView:m,state:s}}function Wx(r){const t=new c2(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function u2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Wx(r),t.set(l,[h])):c>=f.length?(h=new Wx(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
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
}`,h2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],p2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Yx=new un,Pc=new j,Vm=new j;function m2(r,t,i){let s=new fh;const l=new De,c=new De,f=new Tn,h=new ZS,m=new KS,p={},_=i.maxTextureSize,v={[ks]:Ei,[Ei]:ks,[Vn]:Vn},g=new Za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:f2,fragmentShader:d2}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new aa;E.setAttribute("position",new ba(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new He(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let S=this.type;this.render=function(H,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;this.type===sS&&(me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_o);const O=r.getRenderTarget(),mt=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),tt=r.state;tt.setBlending(us),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const st=S!==this.type;st&&z.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(Z=>Z.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,Z=H.length;lt<Z;lt++){const I=H[lt],F=I.shadow;if(F===void 0){me("WebGLShadowMap:",I,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const ut=F.getFrameExtents();l.multiply(ut),c.copy(F.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ut.x),l.x=c.x*ut.x,F.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ut.y),l.y=c.y*ut.y,F.mapSize.y=c.y));const gt=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=gt,F.map===null||st===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Al){if(I.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new qa(l.x,l.y,{format:yo,type:fs,minFilter:si,magFilter:si,generateMipmaps:!1}),F.map.texture.name=I.name+".shadowMap",F.map.depthTexture=new Il(l.x,l.y,Ma),F.map.depthTexture.name=I.name+".shadowMapDepth",F.map.depthTexture.format=ds,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ai,F.map.depthTexture.magFilter=ai}else I.isPointLight?(F.map=new F0(l.x),F.map.depthTexture=new VS(l.x,ja)):(F.map=new qa(l.x,l.y),F.map.depthTexture=new Il(l.x,l.y,ja)),F.map.depthTexture.name=I.name+".shadowMap",F.map.depthTexture.format=ds,this.type===_o?(F.map.depthTexture.compareFunction=gt?lh:oh,F.map.depthTexture.minFilter=si,F.map.depthTexture.magFilter=si):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ai,F.map.depthTexture.magFilter=ai);F.camera.updateProjectionMatrix()}const At=F.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<At;U++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,U),r.clear();else{U===0&&(r.setRenderTarget(F.map),r.clear());const q=F.getViewport(U);f.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),tt.viewport(f)}if(I.isPointLight){const q=F.camera,ft=F.matrix,Lt=I.distance||q.far;Lt!==q.far&&(q.far=Lt,q.updateProjectionMatrix()),Pc.setFromMatrixPosition(I.matrixWorld),q.position.copy(Pc),Vm.copy(q.position),Vm.add(h2[U]),q.up.copy(p2[U]),q.lookAt(Vm),q.updateMatrixWorld(),ft.makeTranslation(-Pc.x,-Pc.y,-Pc.z),Yx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Yx,q.coordinateSystem,q.reversedDepth)}else F.updateMatrices(I);s=F.getFrustum(),N(z,T,F.camera,I,this.type)}F.isPointLightShadow!==!0&&this.type===Al&&C(F,T),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(O,mt,V)};function C(H,z){const T=t.update(w);g.defines.VSM_SAMPLES!==H.blurSamples&&(g.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new qa(l.x,l.y,{format:yo,type:fs})),g.uniforms.shadow_pass.value=H.map.depthTexture,g.uniforms.resolution.value=H.mapSize,g.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,w,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(z,null,T,y,w,null)}function L(H,z,T,O){let mt=null;const V=T.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)mt=V;else if(mt=T.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const tt=mt.uuid,st=z.uuid;let lt=p[tt];lt===void 0&&(lt={},p[tt]=lt);let Z=lt[st];Z===void 0&&(Z=mt.clone(),lt[st]=Z,z.addEventListener("dispose",B)),mt=Z}if(mt.visible=z.visible,mt.wireframe=z.wireframe,O===Al?mt.side=z.shadowSide!==null?z.shadowSide:z.side:mt.side=z.shadowSide!==null?z.shadowSide:v[z.side],mt.alphaMap=z.alphaMap,mt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,mt.map=z.map,mt.clipShadows=z.clipShadows,mt.clippingPlanes=z.clippingPlanes,mt.clipIntersection=z.clipIntersection,mt.displacementMap=z.displacementMap,mt.displacementScale=z.displacementScale,mt.displacementBias=z.displacementBias,mt.wireframeLinewidth=z.wireframeLinewidth,mt.linewidth=z.linewidth,T.isPointLight===!0&&mt.isMeshDistanceMaterial===!0){const tt=r.properties.get(mt);tt.light=T}return mt}function N(H,z,T,O,mt){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&mt===Al)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,H.matrixWorld);const st=t.update(H),lt=H.material;if(Array.isArray(lt)){const Z=st.groups;for(let I=0,F=Z.length;I<F;I++){const ut=Z[I],gt=lt[ut.materialIndex];if(gt&&gt.visible){const At=L(H,gt,O,mt);H.onBeforeShadow(r,H,z,T,st,At,ut),r.renderBufferDirect(T,null,st,At,H,ut),H.onAfterShadow(r,H,z,T,st,At,ut)}}}else if(lt.visible){const Z=L(H,lt,O,mt);H.onBeforeShadow(r,H,z,T,st,Z,null),r.renderBufferDirect(T,null,st,Z,H,null),H.onAfterShadow(r,H,z,T,st,Z,null)}}const tt=H.children;for(let st=0,lt=tt.length;st<lt;st++)N(tt[st],z,T,O,mt)}function B(H){H.target.removeEventListener("dispose",B);for(const T in p){const O=p[T],mt=H.target.uuid;mt in O&&(O[mt].dispose(),delete O[mt])}}}function g2(r,t){function i(){let W=!1;const Ot=new Tn;let Ut=null;const Pt=new Tn(0,0,0,0);return{setMask:function(Dt){Ut!==Dt&&!W&&(r.colorMask(Dt,Dt,Dt,Dt),Ut=Dt)},setLocked:function(Dt){W=Dt},setClear:function(Dt,dt,kt,ae,we){we===!0&&(Dt*=ae,dt*=ae,kt*=ae),Ot.set(Dt,dt,kt,ae),Pt.equals(Ot)===!1&&(r.clearColor(Dt,dt,kt,ae),Pt.copy(Ot))},reset:function(){W=!1,Ut=null,Pt.set(-1,0,0,0)}}}function s(){let W=!1,Ot=!1,Ut=null,Pt=null,Dt=null;return{setReversed:function(dt){if(Ot!==dt){const kt=t.get("EXT_clip_control");dt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Ot=dt;const ae=Dt;Dt=null,this.setClear(ae)}},getReversed:function(){return Ot},setTest:function(dt){dt?xt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(dt){Ut!==dt&&!W&&(r.depthMask(dt),Ut=dt)},setFunc:function(dt){if(Ot&&(dt=qM[dt]),Pt!==dt){switch(dt){case ld:r.depthFunc(r.NEVER);break;case cd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case xo:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case dd:r.depthFunc(r.GEQUAL);break;case hd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pt=dt}},setLocked:function(dt){W=dt},setClear:function(dt){Dt!==dt&&(Dt=dt,Ot&&(dt=1-dt),r.clearDepth(dt))},reset:function(){W=!1,Ut=null,Pt=null,Dt=null,Ot=!1}}}function l(){let W=!1,Ot=null,Ut=null,Pt=null,Dt=null,dt=null,kt=null,ae=null,we=null;return{setTest:function(pe){W||(pe?xt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(pe){Ot!==pe&&!W&&(r.stencilMask(pe),Ot=pe)},setFunc:function(pe,xn,On){(Ut!==pe||Pt!==xn||Dt!==On)&&(r.stencilFunc(pe,xn,On),Ut=pe,Pt=xn,Dt=On)},setOp:function(pe,xn,On){(dt!==pe||kt!==xn||ae!==On)&&(r.stencilOp(pe,xn,On),dt=pe,kt=xn,ae=On)},setLocked:function(pe){W=pe},setClear:function(pe){we!==pe&&(r.clearStencil(pe),we=pe)},reset:function(){W=!1,Ot=null,Ut=null,Pt=null,Dt=null,dt=null,kt=null,ae=null,we=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,y=[],E=null,w=!1,M=null,S=null,C=null,L=null,N=null,B=null,H=null,z=new ue(0,0,0),T=0,O=!1,mt=null,V=null,tt=null,st=null,lt=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const ut=r.getParameter(r.VERSION);ut.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ut)[1]),I=F>=1):ut.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),I=F>=2);let gt=null,At={};const U=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),ft=new Tn().fromArray(U),Lt=new Tn().fromArray(q);function zt(W,Ot,Ut,Pt){const Dt=new Uint8Array(4),dt=r.createTexture();r.bindTexture(W,dt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<Ut;kt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,Pt,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(Ot+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return dt}const nt={};nt[r.TEXTURE_2D]=zt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=zt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=zt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=zt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),xt(r.DEPTH_TEST),f.setFunc(xo),_e(!1),rn(Km),xt(r.CULL_FACE),Re(us);function xt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function wt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Zt(W,Ot){return v[W]!==Ot?(r.bindFramebuffer(W,Ot),v[W]=Ot,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ot),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function $t(W,Ot){let Ut=y,Pt=!1;if(W){Ut=g.get(Ot),Ut===void 0&&(Ut=[],g.set(Ot,Ut));const Dt=W.textures;if(Ut.length!==Dt.length||Ut[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,kt=Dt.length;dt<kt;dt++)Ut[dt]=r.COLOR_ATTACHMENT0+dt;Ut.length=Dt.length,Pt=!0}}else Ut[0]!==r.BACK&&(Ut[0]=r.BACK,Pt=!0);Pt&&r.drawBuffers(Ut)}function oe(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const pn={[Ur]:r.FUNC_ADD,[oS]:r.FUNC_SUBTRACT,[lS]:r.FUNC_REVERSE_SUBTRACT};pn[cS]=r.MIN,pn[uS]=r.MAX;const be={[fS]:r.ZERO,[dS]:r.ONE,[hS]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[xS]:r.SRC_ALPHA_SATURATE,[_S]:r.DST_COLOR,[mS]:r.DST_ALPHA,[pS]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[vS]:r.ONE_MINUS_DST_COLOR,[gS]:r.ONE_MINUS_DST_ALPHA,[SS]:r.CONSTANT_COLOR,[yS]:r.ONE_MINUS_CONSTANT_COLOR,[MS]:r.CONSTANT_ALPHA,[ES]:r.ONE_MINUS_CONSTANT_ALPHA};function Re(W,Ot,Ut,Pt,Dt,dt,kt,ae,we,pe){if(W===us){w===!0&&(wt(r.BLEND),w=!1);return}if(w===!1&&(xt(r.BLEND),w=!0),W!==rS){if(W!==M||pe!==O){if((S!==Ur||N!==Ur)&&(r.blendEquation(r.FUNC_ADD),S=Ur,N=Ur),pe)switch(W){case vo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qm:r.blendFunc(r.ONE,r.ONE);break;case Jm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $m:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",W);break}else switch(W){case vo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Jm:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $m:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",W);break}C=null,L=null,B=null,H=null,z.set(0,0,0),T=0,M=W,O=pe}return}Dt=Dt||Ot,dt=dt||Ut,kt=kt||Pt,(Ot!==S||Dt!==N)&&(r.blendEquationSeparate(pn[Ot],pn[Dt]),S=Ot,N=Dt),(Ut!==C||Pt!==L||dt!==B||kt!==H)&&(r.blendFuncSeparate(be[Ut],be[Pt],be[dt],be[kt]),C=Ut,L=Pt,B=dt,H=kt),(ae.equals(z)===!1||we!==T)&&(r.blendColor(ae.r,ae.g,ae.b,we),z.copy(ae),T=we),M=W,O=!1}function ke(W,Ot){W.side===Vn?wt(r.CULL_FACE):xt(r.CULL_FACE);let Ut=W.side===Ei;Ot&&(Ut=!Ut),_e(Ut),W.blending===vo&&W.transparent===!1?Re(us):Re(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pt=W.stencilWrite;h.setTest(Pt),Pt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),fn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function _e(W){mt!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),mt=W)}function rn(W){W!==nS?(xt(r.CULL_FACE),W!==V&&(W===Km?r.cullFace(r.BACK):W===iS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),V=W}function k(W){W!==tt&&(I&&r.lineWidth(W),tt=W)}function fn(W,Ot,Ut){W?(xt(r.POLYGON_OFFSET_FILL),(st!==Ot||lt!==Ut)&&(st=Ot,lt=Ut,f.getReversed()&&(Ot=-Ot),r.polygonOffset(Ot,Ut))):wt(r.POLYGON_OFFSET_FILL)}function Ne(W){W?xt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Xe(W){W===void 0&&(W=r.TEXTURE0+Z-1),gt!==W&&(r.activeTexture(W),gt=W)}function Kt(W,Ot,Ut){Ut===void 0&&(gt===null?Ut=r.TEXTURE0+Z-1:Ut=gt);let Pt=At[Ut];Pt===void 0&&(Pt={type:void 0,texture:void 0},At[Ut]=Pt),(Pt.type!==W||Pt.texture!==Ot)&&(gt!==Ut&&(r.activeTexture(Ut),gt=Ut),r.bindTexture(W,Ot||nt[W]),Pt.type=W,Pt.texture=Ot)}function P(){const W=At[gt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function Q(){try{r.texSubImage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function et(){try{r.texSubImage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function it(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function Ct(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function Rt(){try{r.texStorage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function Xt(){try{r.texStorage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function Nt(){try{r.texImage2D(...arguments)}catch(W){Ge("WebGLState:",W)}}function yt(){try{r.texImage3D(...arguments)}catch(W){Ge("WebGLState:",W)}}function J(W){ft.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ft.copy(W))}function Mt(W){Lt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Lt.copy(W))}function vt(W,Ot){let Ut=p.get(Ot);Ut===void 0&&(Ut=new WeakMap,p.set(Ot,Ut));let Pt=Ut.get(W);Pt===void 0&&(Pt=r.getUniformBlockIndex(Ot,W.name),Ut.set(W,Pt))}function Ht(W,Ot){const Pt=p.get(Ot).get(W);m.get(Ot)!==Pt&&(r.uniformBlockBinding(Ot,Pt,W.__bindingPointIndex),m.set(Ot,Pt))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},gt=null,At={},v={},g=new WeakMap,y=[],E=null,w=!1,M=null,S=null,C=null,L=null,N=null,B=null,H=null,z=new ue(0,0,0),T=0,O=!1,mt=null,V=null,tt=null,st=null,lt=null,ft.set(0,0,r.canvas.width,r.canvas.height),Lt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:xt,disable:wt,bindFramebuffer:Zt,drawBuffers:$t,useProgram:oe,setBlending:Re,setMaterial:ke,setFlipSided:_e,setCullFace:rn,setLineWidth:k,setPolygonOffset:fn,setScissorTest:Ne,activeTexture:Xe,bindTexture:Kt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:D,texImage2D:Nt,texImage3D:yt,updateUBOMapping:vt,uniformBlockBinding:Ht,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:Q,texSubImage3D:et,compressedTexSubImage2D:it,compressedTexSubImage3D:Ct,scissor:J,viewport:Mt,reset:he}}function _2(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new De,_=new WeakMap;let v;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return y?new OffscreenCanvas(P,b):jd("canvas")}function w(P,b,D){let Q=1;const et=Kt(P);if((et.width>D||et.height>D)&&(Q=D/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const it=Math.floor(Q*et.width),Ct=Math.floor(Q*et.height);v===void 0&&(v=E(it,Ct));const Rt=b?E(it,Ct):v;return Rt.width=it,Rt.height=Ct,Rt.getContext("2d").drawImage(P,0,0,it,Ct),me("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+it+"x"+Ct+")."),Rt}else return"data"in P&&me("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function M(P){return P.generateMipmaps}function S(P){r.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,b,D,Q,et=!1){if(P!==null){if(r[P]!==void 0)return r[P];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let it=b;if(b===r.RED&&(D===r.FLOAT&&(it=r.R32F),D===r.HALF_FLOAT&&(it=r.R16F),D===r.UNSIGNED_BYTE&&(it=r.R8)),b===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(it=r.R8UI),D===r.UNSIGNED_SHORT&&(it=r.R16UI),D===r.UNSIGNED_INT&&(it=r.R32UI),D===r.BYTE&&(it=r.R8I),D===r.SHORT&&(it=r.R16I),D===r.INT&&(it=r.R32I)),b===r.RG&&(D===r.FLOAT&&(it=r.RG32F),D===r.HALF_FLOAT&&(it=r.RG16F),D===r.UNSIGNED_BYTE&&(it=r.RG8)),b===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(it=r.RG8UI),D===r.UNSIGNED_SHORT&&(it=r.RG16UI),D===r.UNSIGNED_INT&&(it=r.RG32UI),D===r.BYTE&&(it=r.RG8I),D===r.SHORT&&(it=r.RG16I),D===r.INT&&(it=r.RG32I)),b===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&(it=r.RGB8UI),D===r.UNSIGNED_SHORT&&(it=r.RGB16UI),D===r.UNSIGNED_INT&&(it=r.RGB32UI),D===r.BYTE&&(it=r.RGB8I),D===r.SHORT&&(it=r.RGB16I),D===r.INT&&(it=r.RGB32I)),b===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&(it=r.RGBA8UI),D===r.UNSIGNED_SHORT&&(it=r.RGBA16UI),D===r.UNSIGNED_INT&&(it=r.RGBA32UI),D===r.BYTE&&(it=r.RGBA8I),D===r.SHORT&&(it=r.RGBA16I),D===r.INT&&(it=r.RGBA32I)),b===r.RGB&&(D===r.UNSIGNED_INT_5_9_9_9_REV&&(it=r.RGB9_E5),D===r.UNSIGNED_INT_10F_11F_11F_REV&&(it=r.R11F_G11F_B10F)),b===r.RGBA){const Ct=et?$c:Ve.getTransfer(Q);D===r.FLOAT&&(it=r.RGBA32F),D===r.HALF_FLOAT&&(it=r.RGBA16F),D===r.UNSIGNED_BYTE&&(it=Ct===en?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(it=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(it=r.RGB5_A1)}return(it===r.R16F||it===r.R32F||it===r.RG16F||it===r.RG32F||it===r.RGBA16F||it===r.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function N(P,b){let D;return P?b===null||b===ja||b===Ll?D=r.DEPTH24_STENCIL8:b===Ma?D=r.DEPTH32F_STENCIL8:b===Nl&&(D=r.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ja||b===Ll?D=r.DEPTH_COMPONENT24:b===Ma?D=r.DEPTH_COMPONENT32F:b===Nl&&(D=r.DEPTH_COMPONENT16),D}function B(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==ai&&P.minFilter!==si?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function H(P){const b=P.target;b.removeEventListener("dispose",H),T(b),b.isVideoTexture&&_.delete(b)}function z(P){const b=P.target;b.removeEventListener("dispose",z),mt(b)}function T(P){const b=s.get(P);if(b.__webglInit===void 0)return;const D=P.source,Q=g.get(D);if(Q){const et=Q[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&O(P),Object.keys(Q).length===0&&g.delete(D)}s.remove(P)}function O(P){const b=s.get(P);r.deleteTexture(b.__webglTexture);const D=P.source,Q=g.get(D);delete Q[b.__cacheKey],f.memory.textures--}function mt(P){const b=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let et=0;et<b.__webglFramebuffer[Q].length;et++)r.deleteFramebuffer(b.__webglFramebuffer[Q][et]);else r.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[Q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const D=P.textures;for(let Q=0,et=D.length;Q<et;Q++){const it=s.get(D[Q]);it.__webglTexture&&(r.deleteTexture(it.__webglTexture),f.memory.textures--),s.remove(D[Q])}s.remove(P)}let V=0;function tt(){V=0}function st(){const P=V;return P>=l.maxTextures&&me("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),V+=1,P}function lt(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Z(P,b){const D=s.get(P);if(P.isVideoTexture&&Ne(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&D.__version!==P.version){const Q=P.image;if(Q===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(D,P,b);return}}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+b)}function I(P,b){const D=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){nt(D,P,b);return}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+b)}function F(P,b){const D=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){nt(D,P,b);return}i.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+b)}function ut(P,b){const D=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&D.__version!==P.version){xt(D,P,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+b)}const gt={[Dl]:r.REPEAT,[cs]:r.CLAMP_TO_EDGE,[md]:r.MIRRORED_REPEAT},At={[ai]:r.NEAREST,[AS]:r.NEAREST_MIPMAP_NEAREST,[Vc]:r.NEAREST_MIPMAP_LINEAR,[si]:r.LINEAR,[ed]:r.LINEAR_MIPMAP_NEAREST,[Gs]:r.LINEAR_MIPMAP_LINEAR},U={[wS]:r.NEVER,[OS]:r.ALWAYS,[DS]:r.LESS,[oh]:r.LEQUAL,[NS]:r.EQUAL,[lh]:r.GEQUAL,[LS]:r.GREATER,[US]:r.NOTEQUAL};function q(P,b){if(b.type===Ma&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===si||b.magFilter===ed||b.magFilter===Vc||b.magFilter===Gs||b.minFilter===si||b.minFilter===ed||b.minFilter===Vc||b.minFilter===Gs)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,gt[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,gt[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,gt[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,At[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,At[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ai||b.minFilter!==Vc&&b.minFilter!==Gs||b.type===Ma&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ft(P,b){let D=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",H));const Q=b.source;let et=g.get(Q);et===void 0&&(et={},g.set(Q,et));const it=lt(b);if(it!==P.__cacheKey){et[it]===void 0&&(et[it]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,D=!0),et[it].usedTimes++;const Ct=et[P.__cacheKey];Ct!==void 0&&(et[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&O(b)),P.__cacheKey=it,P.__webglTexture=et[it].texture}return D}function Lt(P,b,D){return Math.floor(Math.floor(P/D)/b)}function zt(P,b,D,Q){const it=P.updateRanges;if(it.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,D,Q,b.data);else{it.sort((yt,J)=>yt.start-J.start);let Ct=0;for(let yt=1;yt<it.length;yt++){const J=it[Ct],Mt=it[yt],vt=J.start+J.count,Ht=Lt(Mt.start,b.width,4),he=Lt(J.start,b.width,4);Mt.start<=vt+1&&Ht===he&&Lt(Mt.start+Mt.count-1,b.width,4)===Ht?J.count=Math.max(J.count,Mt.start+Mt.count-J.start):(++Ct,it[Ct]=Mt)}it.length=Ct+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),Nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let yt=0,J=it.length;yt<J;yt++){const Mt=it[yt],vt=Math.floor(Mt.start/4),Ht=Math.ceil(Mt.count/4),he=vt%b.width,W=Math.floor(vt/b.width),Ot=Ht,Ut=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,he,W,Ot,Ut,D,Q,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Nt)}}function nt(P,b,D){let Q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=r.TEXTURE_3D);const et=ft(P,b),it=b.source;i.bindTexture(Q,P.__webglTexture,r.TEXTURE0+D);const Ct=s.get(it);if(it.version!==Ct.__version||et===!0){i.activeTexture(r.TEXTURE0+D);const Rt=Ve.getPrimaries(Ve.workingColorSpace),Xt=b.colorSpace===zs?null:Ve.getPrimaries(b.colorSpace),Nt=b.colorSpace===zs||Rt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let yt=w(b.image,!1,l.maxTextureSize);yt=Xe(b,yt);const J=c.convert(b.format,b.colorSpace),Mt=c.convert(b.type);let vt=L(b.internalFormat,J,Mt,b.colorSpace,b.isVideoTexture);q(Q,b);let Ht;const he=b.mipmaps,W=b.isVideoTexture!==!0,Ot=Ct.__version===void 0||et===!0,Ut=it.dataReady,Pt=B(b,yt);if(b.isDepthTexture)vt=N(b.format===Or,b.type),Ot&&(W?i.texStorage2D(r.TEXTURE_2D,1,vt,yt.width,yt.height):i.texImage2D(r.TEXTURE_2D,0,vt,yt.width,yt.height,0,J,Mt,null));else if(b.isDataTexture)if(he.length>0){W&&Ot&&i.texStorage2D(r.TEXTURE_2D,Pt,vt,he[0].width,he[0].height);for(let Dt=0,dt=he.length;Dt<dt;Dt++)Ht=he[Dt],W?Ut&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Ht.width,Ht.height,J,Mt,Ht.data):i.texImage2D(r.TEXTURE_2D,Dt,vt,Ht.width,Ht.height,0,J,Mt,Ht.data);b.generateMipmaps=!1}else W?(Ot&&i.texStorage2D(r.TEXTURE_2D,Pt,vt,yt.width,yt.height),Ut&&zt(b,yt,J,Mt)):i.texImage2D(r.TEXTURE_2D,0,vt,yt.width,yt.height,0,J,Mt,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,vt,he[0].width,he[0].height,yt.depth);for(let Dt=0,dt=he.length;Dt<dt;Dt++)if(Ht=he[Dt],b.format!==Ea)if(J!==null)if(W){if(Ut)if(b.layerUpdates.size>0){const kt=bx(Ht.width,Ht.height,b.format,b.type);for(const ae of b.layerUpdates){const we=Ht.data.subarray(ae*kt/Ht.data.BYTES_PER_ELEMENT,(ae+1)*kt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,ae,Ht.width,Ht.height,1,J,we)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,0,Ht.width,Ht.height,yt.depth,J,Ht.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Dt,vt,Ht.width,Ht.height,yt.depth,0,Ht.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ut&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,0,Ht.width,Ht.height,yt.depth,J,Mt,Ht.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Dt,vt,Ht.width,Ht.height,yt.depth,0,J,Mt,Ht.data)}else{W&&Ot&&i.texStorage2D(r.TEXTURE_2D,Pt,vt,he[0].width,he[0].height);for(let Dt=0,dt=he.length;Dt<dt;Dt++)Ht=he[Dt],b.format!==Ea?J!==null?W?Ut&&i.compressedTexSubImage2D(r.TEXTURE_2D,Dt,0,0,Ht.width,Ht.height,J,Ht.data):i.compressedTexImage2D(r.TEXTURE_2D,Dt,vt,Ht.width,Ht.height,0,Ht.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ut&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Ht.width,Ht.height,J,Mt,Ht.data):i.texImage2D(r.TEXTURE_2D,Dt,vt,Ht.width,Ht.height,0,J,Mt,Ht.data)}else if(b.isDataArrayTexture)if(W){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,vt,yt.width,yt.height,yt.depth),Ut)if(b.layerUpdates.size>0){const Dt=bx(yt.width,yt.height,b.format,b.type);for(const dt of b.layerUpdates){const kt=yt.data.subarray(dt*Dt/yt.data.BYTES_PER_ELEMENT,(dt+1)*Dt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,dt,yt.width,yt.height,1,J,Mt,kt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,J,Mt,yt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,vt,yt.width,yt.height,yt.depth,0,J,Mt,yt.data);else if(b.isData3DTexture)W?(Ot&&i.texStorage3D(r.TEXTURE_3D,Pt,vt,yt.width,yt.height,yt.depth),Ut&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,J,Mt,yt.data)):i.texImage3D(r.TEXTURE_3D,0,vt,yt.width,yt.height,yt.depth,0,J,Mt,yt.data);else if(b.isFramebufferTexture){if(Ot)if(W)i.texStorage2D(r.TEXTURE_2D,Pt,vt,yt.width,yt.height);else{let Dt=yt.width,dt=yt.height;for(let kt=0;kt<Pt;kt++)i.texImage2D(r.TEXTURE_2D,kt,vt,Dt,dt,0,J,Mt,null),Dt>>=1,dt>>=1}}else if(he.length>0){if(W&&Ot){const Dt=Kt(he[0]);i.texStorage2D(r.TEXTURE_2D,Pt,vt,Dt.width,Dt.height)}for(let Dt=0,dt=he.length;Dt<dt;Dt++)Ht=he[Dt],W?Ut&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,J,Mt,Ht):i.texImage2D(r.TEXTURE_2D,Dt,vt,J,Mt,Ht);b.generateMipmaps=!1}else if(W){if(Ot){const Dt=Kt(yt);i.texStorage2D(r.TEXTURE_2D,Pt,vt,Dt.width,Dt.height)}Ut&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,J,Mt,yt)}else i.texImage2D(r.TEXTURE_2D,0,vt,J,Mt,yt);M(b)&&S(Q),Ct.__version=it.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function xt(P,b,D){if(b.image.length!==6)return;const Q=ft(P,b),et=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+D);const it=s.get(et);if(et.version!==it.__version||Q===!0){i.activeTexture(r.TEXTURE0+D);const Ct=Ve.getPrimaries(Ve.workingColorSpace),Rt=b.colorSpace===zs?null:Ve.getPrimaries(b.colorSpace),Xt=b.colorSpace===zs||Ct===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Nt=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,J=[];for(let dt=0;dt<6;dt++)!Nt&&!yt?J[dt]=w(b.image[dt],!0,l.maxCubemapSize):J[dt]=yt?b.image[dt].image:b.image[dt],J[dt]=Xe(b,J[dt]);const Mt=J[0],vt=c.convert(b.format,b.colorSpace),Ht=c.convert(b.type),he=L(b.internalFormat,vt,Ht,b.colorSpace),W=b.isVideoTexture!==!0,Ot=it.__version===void 0||Q===!0,Ut=et.dataReady;let Pt=B(b,Mt);q(r.TEXTURE_CUBE_MAP,b);let Dt;if(Nt){W&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,he,Mt.width,Mt.height);for(let dt=0;dt<6;dt++){Dt=J[dt].mipmaps;for(let kt=0;kt<Dt.length;kt++){const ae=Dt[kt];b.format!==Ea?vt!==null?W?Ut&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,0,0,ae.width,ae.height,vt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,he,ae.width,ae.height,0,ae.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,0,0,ae.width,ae.height,vt,Ht,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,he,ae.width,ae.height,0,vt,Ht,ae.data)}}}else{if(Dt=b.mipmaps,W&&Ot){Dt.length>0&&Pt++;const dt=Kt(J[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,he,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(yt){W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,J[dt].width,J[dt].height,vt,Ht,J[dt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,J[dt].width,J[dt].height,0,vt,Ht,J[dt].data);for(let kt=0;kt<Dt.length;kt++){const we=Dt[kt].image[dt].image;W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,0,0,we.width,we.height,vt,Ht,we.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,he,we.width,we.height,0,vt,Ht,we.data)}}else{W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,vt,Ht,J[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,vt,Ht,J[dt]);for(let kt=0;kt<Dt.length;kt++){const ae=Dt[kt];W?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,0,0,vt,Ht,ae.image[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,he,vt,Ht,ae.image[dt])}}}M(b)&&S(r.TEXTURE_CUBE_MAP),it.__version=et.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function wt(P,b,D,Q,et,it){const Ct=c.convert(D.format,D.colorSpace),Rt=c.convert(D.type),Xt=L(D.internalFormat,Ct,Rt,D.colorSpace),Nt=s.get(b),yt=s.get(D);if(yt.__renderTarget=b,!Nt.__hasExternalTextures){const J=Math.max(1,b.width>>it),Mt=Math.max(1,b.height>>it);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?i.texImage3D(et,it,Xt,J,Mt,b.depth,0,Ct,Rt,null):i.texImage2D(et,it,Xt,J,Mt,0,Ct,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),fn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,et,yt.__webglTexture,0,k(b)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,et,yt.__webglTexture,it),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(P,b,D){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const Q=b.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,it=N(b.stencilBuffer,et),Ct=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;fn(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),it,b.width,b.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),it,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,it,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,P)}else{const Q=b.textures;for(let et=0;et<Q.length;et++){const it=Q[et],Ct=c.convert(it.format,it.colorSpace),Rt=c.convert(it.type),Xt=L(it.internalFormat,Ct,Rt,it.colorSpace);fn(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),Xt,b.width,b.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),Xt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $t(P,b,D){const Q=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=s.get(b.depthTexture);if(et.__renderTarget=b,(!et.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q){if(et.__webglInit===void 0&&(et.__webglInit=!0,b.depthTexture.addEventListener("dispose",H)),et.__webglTexture===void 0){et.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),q(r.TEXTURE_CUBE_MAP,b.depthTexture);const Nt=c.convert(b.depthTexture.format),yt=c.convert(b.depthTexture.type);let J;b.depthTexture.format===ds?J=r.DEPTH_COMPONENT24:b.depthTexture.format===Or&&(J=r.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,J,b.width,b.height,0,Nt,yt,null)}}else Z(b.depthTexture,0);const it=et.__webglTexture,Ct=k(b),Rt=Q?r.TEXTURE_CUBE_MAP_POSITIVE_X+D:r.TEXTURE_2D,Xt=b.depthTexture.format===Or?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ds)fn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Rt,it,0,Ct):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Rt,it,0);else if(b.depthTexture.format===Or)fn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Rt,it,0,Ct):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Rt,it,0);else throw new Error("Unknown depthTexture format")}function oe(P){const b=s.get(P),D=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=Q}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(D)for(let Q=0;Q<6;Q++)$t(b.__webglFramebuffer[Q],P,Q);else{const Q=P.texture.mipmaps;Q&&Q.length>0?$t(b.__webglFramebuffer[0],P,0):$t(b.__webglFramebuffer,P,0)}else if(D){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=r.createRenderbuffer(),Zt(b.__webglDepthbuffer[Q],P,!1);else{const et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,it)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Zt(b.__webglDepthbuffer,P,!1);else{const et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,it)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function pn(P,b,D){const Q=s.get(P);b!==void 0&&wt(Q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&oe(P)}function be(P){const b=P.texture,D=s.get(P),Q=s.get(b);P.addEventListener("dispose",z);const et=P.textures,it=P.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=b.version,f.memory.textures++),it){D.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)D.__webglFramebuffer[Rt][Xt]=r.createFramebuffer()}else D.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)D.__webglFramebuffer[Rt]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(Ct)for(let Rt=0,Xt=et.length;Rt<Xt;Rt++){const Nt=s.get(et[Rt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&fn(P)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Rt=0;Rt<et.length;Rt++){const Xt=et[Rt];D.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[Rt]);const Nt=c.convert(Xt.format,Xt.colorSpace),yt=c.convert(Xt.type),J=L(Xt.internalFormat,Nt,yt,Xt.colorSpace,P.isXRRenderTarget===!0),Mt=k(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,J,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,D.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),Zt(D.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(it){i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),q(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)wt(D.__webglFramebuffer[Rt][Xt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else wt(D.__webglFramebuffer[Rt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ct){for(let Rt=0,Xt=et.length;Rt<Xt;Rt++){const Nt=et[Rt],yt=s.get(Nt);let J=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(J,yt.__webglTexture),q(J,Nt),wt(D.__webglFramebuffer,P,Nt,r.COLOR_ATTACHMENT0+Rt,J,0),M(Nt)&&S(J)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,Q.__webglTexture),q(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)wt(D.__webglFramebuffer[Xt],P,b,r.COLOR_ATTACHMENT0,Rt,Xt);else wt(D.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,Rt,0);M(b)&&S(Rt),i.unbindTexture()}P.depthBuffer&&oe(P)}function Re(P){const b=P.textures;for(let D=0,Q=b.length;D<Q;D++){const et=b[D];if(M(et)){const it=C(P),Ct=s.get(et).__webglTexture;i.bindTexture(it,Ct),S(it),i.unbindTexture()}}}const ke=[],_e=[];function rn(P){if(P.samples>0){if(fn(P)===!1){const b=P.textures,D=P.width,Q=P.height;let et=r.COLOR_BUFFER_BIT;const it=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=s.get(P),Rt=b.length>1;if(Rt)for(let Nt=0;Nt<b.length;Nt++)i.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Xt=P.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Nt=0;Nt<b.length;Nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[Nt]);const yt=s.get(b[Nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,yt,0)}r.blitFramebuffer(0,0,D,Q,0,0,D,Q,et,r.NEAREST),m===!0&&(ke.length=0,_e.length=0,ke.push(r.COLOR_ATTACHMENT0+Nt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ke.push(it),_e.push(it),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_e)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let Nt=0;Nt<b.length;Nt++){i.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[Nt]);const yt=s.get(b[Nt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,yt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function k(P){return Math.min(l.maxSamples,P.samples)}function fn(P){const b=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ne(P){const b=f.render.frame;_.get(P)!==b&&(_.set(P,b),P.update())}function Xe(P,b){const D=P.colorSpace,Q=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||D!==Mo&&D!==zs&&(Ve.getTransfer(D)===en?(Q!==Ea||et!==Xi)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",D)),b}function Kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=tt,this.setTexture2D=Z,this.setTexture2DArray=I,this.setTexture3D=F,this.setTextureCube=ut,this.rebindTextures=pn,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=fn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ly(r,t){function i(s,l=zs){let c;const f=Ve.getTransfer(l);if(s===Xi)return r.UNSIGNED_BYTE;if(s===th)return r.UNSIGNED_SHORT_4_4_4_4;if(s===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===y0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===M0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===x0)return r.BYTE;if(s===S0)return r.SHORT;if(s===Nl)return r.UNSIGNED_SHORT;if(s===$d)return r.INT;if(s===ja)return r.UNSIGNED_INT;if(s===Ma)return r.FLOAT;if(s===fs)return r.HALF_FLOAT;if(s===E0)return r.ALPHA;if(s===b0)return r.RGB;if(s===Ea)return r.RGBA;if(s===ds)return r.DEPTH_COMPONENT;if(s===Or)return r.DEPTH_STENCIL;if(s===nh)return r.RED;if(s===ih)return r.RED_INTEGER;if(s===yo)return r.RG;if(s===ah)return r.RG_INTEGER;if(s===sh)return r.RGBA_INTEGER;if(s===Yc||s===qc||s===jc||s===Zc)if(f===en)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gd||s===_d||s===vd||s===xd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===yd||s===Md||s===Ed||s===bd||s===Td||s===Ad)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Sd||s===yd)return f===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Md)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ed)return c.COMPRESSED_R11_EAC;if(s===bd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Td)return c.COMPRESSED_RG11_EAC;if(s===Ad)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rd||s===Cd||s===wd||s===Dd||s===Nd||s===Ld||s===Ud||s===Od||s===Id||s===Pd||s===Fd||s===Bd||s===zd||s===Hd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Rd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ld)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ud)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Od)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gd||s===Vd||s===kd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Gd)return f===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xd||s===Wd||s===Yd||s===qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const v2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x2=`
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

}`;class S2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new U0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Za({vertexShader:v2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new He(new ls(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y2 extends Eo{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,y=null,E=null;const w=typeof XRWebGLBinding<"u",M=new S2,S={},C=i.getContextAttributes();let L=null,N=null;const B=[],H=[],z=new De;let T=null;const O=new Di;O.viewport=new Tn;const mt=new Di;mt.viewport=new Tn;const V=[O,mt],tt=new ty;let st=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let xt=B[nt];return xt===void 0&&(xt=new nd,B[nt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(nt){let xt=B[nt];return xt===void 0&&(xt=new nd,B[nt]=xt),xt.getGripSpace()},this.getHand=function(nt){let xt=B[nt];return xt===void 0&&(xt=new nd,B[nt]=xt),xt.getHandSpace()};function Z(nt){const xt=H.indexOf(nt.inputSource);if(xt===-1)return;const wt=B[xt];wt!==void 0&&(wt.update(nt.inputSource,nt.frame,p||f),wt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function I(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",F);for(let nt=0;nt<B.length;nt++){const xt=H[nt];xt!==null&&(H[nt]=null,B[nt].disconnect(xt))}st=null,lt=null,M.reset();for(const nt in S)delete S[nt];t.setRenderTarget(L),y=null,g=null,v=null,l=null,N=null,zt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,s.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",I),l.addEventListener("inputsourceschange",F),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Zt=null,$t=null;C.depth&&($t=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=C.stencil?Or:ds,Zt=C.stencil?Ll:ja);const oe={colorFormat:i.RGBA8,depthFormat:$t,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(oe),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new qa(g.textureWidth,g.textureHeight,{format:Ea,type:Xi,depthTexture:new Il(g.textureWidth,g.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const wt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new qa(y.framebufferWidth,y.framebufferHeight,{format:Ea,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(nt){for(let xt=0;xt<nt.removed.length;xt++){const wt=nt.removed[xt],Zt=H.indexOf(wt);Zt>=0&&(H[Zt]=null,B[Zt].disconnect(wt))}for(let xt=0;xt<nt.added.length;xt++){const wt=nt.added[xt];let Zt=H.indexOf(wt);if(Zt===-1){for(let oe=0;oe<B.length;oe++)if(oe>=H.length){H.push(wt),Zt=oe;break}else if(H[oe]===null){H[oe]=wt,Zt=oe;break}if(Zt===-1)break}const $t=B[Zt];$t&&$t.connect(wt)}}const ut=new j,gt=new j;function At(nt,xt,wt){ut.setFromMatrixPosition(xt.matrixWorld),gt.setFromMatrixPosition(wt.matrixWorld);const Zt=ut.distanceTo(gt),$t=xt.projectionMatrix.elements,oe=wt.projectionMatrix.elements,pn=$t[14]/($t[10]-1),be=$t[14]/($t[10]+1),Re=($t[9]+1)/$t[5],ke=($t[9]-1)/$t[5],_e=($t[8]-1)/$t[0],rn=(oe[8]+1)/oe[0],k=pn*_e,fn=pn*rn,Ne=Zt/(-_e+rn),Xe=Ne*-_e;if(xt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Xe),nt.translateZ(Ne),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),$t[10]===-1)nt.projectionMatrix.copy(xt.projectionMatrix),nt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const Kt=pn+Ne,P=be+Ne,b=k-Xe,D=fn+(Zt-Xe),Q=Re*be/P*Kt,et=ke*be/P*Kt;nt.projectionMatrix.makePerspective(b,D,Q,et,Kt,P),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function U(nt,xt){xt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(xt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let xt=nt.near,wt=nt.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),tt.near=mt.near=O.near=xt,tt.far=mt.far=O.far=wt,(st!==tt.near||lt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),st=tt.near,lt=tt.far),tt.layers.mask=nt.layers.mask|6,O.layers.mask=tt.layers.mask&-5,mt.layers.mask=tt.layers.mask&-3;const Zt=nt.parent,$t=tt.cameras;U(tt,Zt);for(let oe=0;oe<$t.length;oe++)U($t[oe],Zt);$t.length===2?At(tt,O,mt):tt.projectionMatrix.copy(O.projectionMatrix),q(nt,tt,Zt)};function q(nt,xt,wt){wt===null?nt.matrix.copy(xt.matrixWorld):(nt.matrix.copy(wt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(xt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(xt.projectionMatrix),nt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ol*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(nt){m=nt,g!==null&&(g.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(tt)},this.getCameraTexture=function(nt){return S[nt]};let ft=null;function Lt(nt,xt){if(_=xt.getViewerPose(p||f),E=xt,_!==null){const wt=_.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Zt=!1;wt.length!==tt.cameras.length&&(tt.cameras.length=0,Zt=!0);for(let be=0;be<wt.length;be++){const Re=wt[be];let ke=null;if(y!==null)ke=y.getViewport(Re);else{const rn=v.getViewSubImage(g,Re);ke=rn.viewport,be===0&&(t.setRenderTargetTextures(N,rn.colorTexture,rn.depthStencilTexture),t.setRenderTarget(N))}let _e=V[be];_e===void 0&&(_e=new Di,_e.layers.enable(be),_e.viewport=new Tn,V[be]=_e),_e.matrix.fromArray(Re.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Re.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(ke.x,ke.y,ke.width,ke.height),be===0&&(tt.matrix.copy(_e.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Zt===!0&&tt.cameras.push(_e)}const $t=l.enabledFeatures;if($t&&$t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const be=v.getDepthInformation(wt[0]);be&&be.isValid&&be.texture&&M.init(be,l.renderState)}if($t&&$t.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let be=0;be<wt.length;be++){const Re=wt[be].camera;if(Re){let ke=S[Re];ke||(ke=new U0,S[Re]=ke);const _e=v.getCameraImage(Re);ke.sourceTexture=_e}}}}for(let wt=0;wt<B.length;wt++){const Zt=H[wt],$t=B[wt];Zt!==null&&$t!==void 0&&$t.update(Zt,xt,p||f)}ft&&ft(nt,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),E=null}const zt=new iy;zt.setAnimationLoop(Lt),this.setAnimationLoop=function(nt){ft=nt},this.dispose=function(){}}}const co=new ia,M2=new un;function E2(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,WS(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,L,N){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,N)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?m(M,S,C,L):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Ei&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Ei&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),L=C.envMap,N=C.envMapRotation;L&&(M.envMap.value=L,co.copy(N),co.x*=-1,co.y*=-1,co.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),M.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(co)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Ei&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function b2(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const N=L.program;s.uniformBlockBinding(C,N)}function p(C,L){let N=l[C.id];N===void 0&&(E(C),N=_(C),l[C.id]=N,C.addEventListener("dispose",M));const B=L.program;s.updateUBOMapping(C,B);const H=t.render.frame;c[C.id]!==H&&(g(C),c[C.id]=H)}function _(C){const L=v();C.__bindingPointIndex=L;const N=r.createBuffer(),B=C.__size,H=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,B,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function v(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],N=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,z=N.length;H<z;H++){const T=Array.isArray(N[H])?N[H]:[N[H]];for(let O=0,mt=T.length;O<mt;O++){const V=T[O];if(y(V,H,O,B)===!0){const tt=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let lt=0;for(let Z=0;Z<st.length;Z++){const I=st[Z],F=w(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,tt+lt,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,lt),lt+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,tt,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,L,N,B){const H=C.value,z=L+"_"+N;if(B[z]===void 0)return typeof H=="number"||typeof H=="boolean"?B[z]=H:B[z]=H.clone(),!0;{const T=B[z];if(typeof H=="number"||typeof H=="boolean"){if(T!==H)return B[z]=H,!0}else if(T.equals(H)===!1)return T.copy(H),!0}return!1}function E(C){const L=C.uniforms;let N=0;const B=16;for(let z=0,T=L.length;z<T;z++){const O=Array.isArray(L[z])?L[z]:[L[z]];for(let mt=0,V=O.length;mt<V;mt++){const tt=O[mt],st=Array.isArray(tt.value)?tt.value:[tt.value];for(let lt=0,Z=st.length;lt<Z;lt++){const I=st[lt],F=w(I),ut=N%B,gt=ut%F.boundary,At=ut+gt;N+=gt,At!==0&&B-At<F.storage&&(N+=B-At),tt.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=N,N+=F.storage}}}const H=N%B;return H>0&&(N+=B-H),C.__size=N,C.__cache={},this}function w(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):me("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const N=f.indexOf(L.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const T2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let os=null;function A2(){return os===null&&(os=new N0(T2,16,16,yo,fs),os.name="DFG_LUT",os.minFilter=si,os.magFilter=si,os.wrapS=cs,os.wrapT=cs,os.generateMipmaps=!1,os.needsUpdate=!0),os}class cy{constructor(t={}){const{canvas:i=IS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Xi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const w=y,M=new Set([sh,ah,ih]),S=new Set([Xi,ja,Nl,Ll,th,eh]),C=new Uint32Array(4),L=new Int32Array(4);let N=null,B=null;const H=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let mt=!1;this._outputColorSpace=Kn;let V=0,tt=0,st=null,lt=-1,Z=null;const I=new Tn,F=new Tn;let ut=null;const gt=new ue(0);let At=0,U=i.width,q=i.height,ft=1,Lt=null,zt=null;const nt=new Tn(0,0,U,q),xt=new Tn(0,0,U,q);let wt=!1;const Zt=new fh;let $t=!1,oe=!1;const pn=new un,be=new j,Re=new Tn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function rn(){return st===null?ft:1}let k=s;function fn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kd}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",ae,!1),i.addEventListener("webglcontextcreationerror",we,!1),k===null){const Y="webgl2";if(k=fn(Y,R),k===null)throw fn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ge("WebGLRenderer: "+R.message),R}let Ne,Xe,Kt,P,b,D,Q,et,it,Ct,Rt,Xt,Nt,yt,J,Mt,vt,Ht,he,W,Ot,Ut,Pt;function Dt(){Ne=new CT(k),Ne.init(),Ot=new ly(k,Ne),Xe=new ST(k,Ne,t,Ot),Kt=new g2(k,Ne),Xe.reversedDepthBuffer&&g&&Kt.buffers.depth.setReversed(!0),P=new NT(k),b=new n2,D=new _2(k,Ne,Kt,b,Xe,Ot,P),Q=new RT(O),et=new PE(k),Ut=new vT(k,et),it=new wT(k,et,P,Ut),Ct=new UT(k,it,et,Ut,P),Ht=new LT(k,Xe,D),J=new yT(b),Rt=new e2(O,Q,Ne,Xe,Ut,J),Xt=new E2(O,b),Nt=new a2,yt=new u2(Ne),vt=new _T(O,Q,Kt,Ct,E,m),Mt=new m2(O,Ct,Xe),Pt=new b2(k,P,Xe,Kt),he=new xT(k,Ne,P),W=new DT(k,Ne,P),P.programs=Rt.programs,O.capabilities=Xe,O.extensions=Ne,O.properties=b,O.renderLists=Nt,O.shadowMap=Mt,O.state=Kt,O.info=P}Dt(),w!==Xi&&(T=new IT(w,i.width,i.height,l,c));const dt=new y2(O,k);this.xr=dt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(R){R!==void 0&&(ft=R,this.setSize(U,q,!1))},this.getSize=function(R){return R.set(U,q)},this.setSize=function(R,Y,ht=!0){if(dt.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,q=Y,i.width=Math.floor(R*ft),i.height=Math.floor(Y*ft),ht===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(U*ft,q*ft).floor()},this.setDrawingBufferSize=function(R,Y,ht){U=R,q=Y,ft=ht,i.width=Math.floor(R*ht),i.height=Math.floor(Y*ht),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(w===Xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,Y,ht,ot){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,Y,ht,ot),Kt.viewport(I.copy(nt).multiplyScalar(ft).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,Y,ht,ot){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,Y,ht,ot),Kt.scissor(F.copy(xt).multiplyScalar(ft).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){Kt.setScissorTest(wt=R)},this.setOpaqueSort=function(R){Lt=R},this.setTransparentSort=function(R){zt=R},this.getClearColor=function(R){return R.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ht=!0){let ot=0;if(R){let $=!1;if(st!==null){const Ft=st.texture.format;$=M.has(Ft)}if($){const Ft=st.texture.type,Wt=S.has(Ft),Gt=vt.getClearColor(),Qt=vt.getClearAlpha(),Yt=Gt.r,le=Gt.g,de=Gt.b;Wt?(C[0]=Yt,C[1]=le,C[2]=de,C[3]=Qt,k.clearBufferuiv(k.COLOR,0,C)):(L[0]=Yt,L[1]=le,L[2]=de,L[3]=Qt,k.clearBufferiv(k.COLOR,0,L))}else ot|=k.COLOR_BUFFER_BIT}Y&&(ot|=k.DEPTH_BUFFER_BIT),ht&&(ot|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&k.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",ae,!1),i.removeEventListener("webglcontextcreationerror",we,!1),vt.dispose(),Nt.dispose(),yt.dispose(),b.dispose(),Q.dispose(),Ct.dispose(),Ut.dispose(),Pt.dispose(),Rt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Ws),dt.removeEventListener("sessionend",Ta),bi.stop()};function kt(R){R.preventDefault(),i0("WebGLRenderer: Context Lost."),mt=!0}function ae(){i0("WebGLRenderer: Context Restored."),mt=!1;const R=P.autoReset,Y=Mt.enabled,ht=Mt.autoUpdate,ot=Mt.needsUpdate,$=Mt.type;Dt(),P.autoReset=R,Mt.enabled=Y,Mt.autoUpdate=ht,Mt.needsUpdate=ot,Mt.type=$}function we(R){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const Y=R.target;Y.removeEventListener("dispose",pe),xn(Y)}function xn(R){On(R),b.remove(R)}function On(R){const Y=b.get(R).programs;Y!==void 0&&(Y.forEach(function(ht){Rt.releaseProgram(ht)}),R.isShaderMaterial&&Rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ht,ot,$,Ft){Y===null&&(Y=ke);const Wt=$.isMesh&&$.matrixWorld.determinant()<0,Gt=qs(R,Y,ht,ot,$);Kt.setMaterial(ot,Wt);let Qt=ht.index,Yt=1;if(ot.wireframe===!0){if(Qt=it.getWireframeAttribute(ht),Qt===void 0)return;Yt=2}const le=ht.drawRange,de=ht.attributes.position;let jt=le.start*Yt,ve=(le.start+le.count)*Yt;Ft!==null&&(jt=Math.max(jt,Ft.start*Yt),ve=Math.min(ve,(Ft.start+Ft.count)*Yt)),Qt!==null?(jt=Math.max(jt,0),ve=Math.min(ve,Qt.count)):de!=null&&(jt=Math.max(jt,0),ve=Math.min(ve,de.count));const Se=ve-jt;if(Se<0||Se===1/0)return;Ut.setup($,ot,Gt,ht,Qt);let $e,We=he;if(Qt!==null&&($e=et.get(Qt),We=W,We.setIndex($e)),$.isMesh)ot.wireframe===!0?(Kt.setLineWidth(ot.wireframeLinewidth*rn()),We.setMode(k.LINES)):We.setMode(k.TRIANGLES);else if($.isLine){let Rn=ot.linewidth;Rn===void 0&&(Rn=1),Kt.setLineWidth(Rn*rn()),$.isLineSegments?We.setMode(k.LINES):$.isLineLoop?We.setMode(k.LINE_LOOP):We.setMode(k.LINE_STRIP)}else $.isPoints?We.setMode(k.POINTS):$.isSprite&&We.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)tu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),We.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))We.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Rn=$._multiDrawStarts,qt=$._multiDrawCounts,In=$._multiDrawCount,ce=Qt?et.get(Qt).bytesPerElement:1,Xn=b.get(ot).currentProgram.getUniforms();for(let gi=0;gi<In;gi++)Xn.setValue(k,"_gl_DrawID",gi),We.render(Rn[gi]/ce,qt[gi])}else if($.isInstancedMesh)We.renderInstances(jt,Se,$.count);else if(ht.isInstancedBufferGeometry){const Rn=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,qt=Math.min(ht.instanceCount,Rn);We.renderInstances(jt,Se,qt)}else We.render(jt,Se)};function sa(R,Y,ht){R.transparent===!0&&R.side===Vn&&R.forceSinglePass===!1?(R.side=Ei,R.needsUpdate=!0,Ra(R,Y,ht),R.side=ks,R.needsUpdate=!0,Ra(R,Y,ht),R.side=Vn):Ra(R,Y,ht)}this.compile=function(R,Y,ht=null){ht===null&&(ht=R),B=yt.get(ht),B.init(Y),z.push(B),ht.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(B.pushLight($),$.castShadow&&B.pushShadow($))}),R!==ht&&R.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(B.pushLight($),$.castShadow&&B.pushShadow($))}),B.setupLights();const ot=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ft=$.material;if(Ft)if(Array.isArray(Ft))for(let Wt=0;Wt<Ft.length;Wt++){const Gt=Ft[Wt];sa(Gt,ht,$),ot.add(Gt)}else sa(Ft,ht,$),ot.add(Ft)}),B=z.pop(),ot},this.compileAsync=function(R,Y,ht=null){const ot=this.compile(R,Y,ht);return new Promise($=>{function Ft(){if(ot.forEach(function(Wt){b.get(Wt).currentProgram.isReady()&&ot.delete(Wt)}),ot.size===0){$(R);return}setTimeout(Ft,10)}Ne.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Ni=null;function kn(R){Ni&&Ni(R)}function Ws(){bi.stop()}function Ta(){bi.start()}const bi=new iy;bi.setAnimationLoop(kn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(R){Ni=R,dt.setAnimationLoop(R),R===null?bi.stop():bi.start()},dt.addEventListener("sessionstart",Ws),dt.addEventListener("sessionend",Ta),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(mt===!0)return;const ht=dt.enabled===!0&&dt.isPresenting===!0,ot=T!==null&&(st===null||ht)&&T.begin(O,st);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(Y),Y=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,Y,st),B=yt.get(R,z.length),B.init(Y),z.push(B),pn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Zt.setFromProjectionMatrix(pn,Wa,Y.reversedDepth),oe=this.localClippingEnabled,$t=J.init(this.clippingPlanes,oe),N=Nt.get(R,H.length),N.init(),H.push(N),dt.enabled===!0&&dt.isPresenting===!0){const Wt=O.xr.getDepthSensingMesh();Wt!==null&&Aa(Wt,Y,-1/0,O.sortObjects)}Aa(R,Y,0,O.sortObjects),N.finish(),O.sortObjects===!0&&N.sort(Lt,zt),_e=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,_e&&vt.addToRenderList(N,R),this.info.render.frame++,$t===!0&&J.beginShadows();const $=B.state.shadowsArray;if(Mt.render($,R,Y),$t===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&T.hasRenderPass())===!1){const Wt=N.opaque,Gt=N.transmissive;if(B.setupLights(),Y.isArrayCamera){const Qt=Y.cameras;if(Gt.length>0)for(let Yt=0,le=Qt.length;Yt<le;Yt++){const de=Qt[Yt];yn(Wt,Gt,R,de)}_e&&vt.render(R);for(let Yt=0,le=Qt.length;Yt<le;Yt++){const de=Qt[Yt];mi(N,R,de,de.viewport)}}else Gt.length>0&&yn(Wt,Gt,R,Y),_e&&vt.render(R),mi(N,R,Y)}st!==null&&tt===0&&(D.updateMultisampleRenderTarget(st),D.updateRenderTargetMipmap(st)),ot&&T.end(O),R.isScene===!0&&R.onAfterRender(O,R,Y),Ut.resetDefaultState(),lt=-1,Z=null,z.pop(),z.length>0?(B=z[z.length-1],$t===!0&&J.setGlobalState(O.clippingPlanes,B.state.camera)):B=null,H.pop(),H.length>0?N=H[H.length-1]:N=null};function Aa(R,Y,ht,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ht=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Zt.intersectsSprite(R)){ot&&Re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pn);const Wt=Ct.update(R),Gt=R.material;Gt.visible&&N.push(R,Wt,Gt,ht,Re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Zt.intersectsObject(R))){const Wt=Ct.update(R),Gt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Re.copy(R.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Re.copy(Wt.boundingSphere.center)),Re.applyMatrix4(R.matrixWorld).applyMatrix4(pn)),Array.isArray(Gt)){const Qt=Wt.groups;for(let Yt=0,le=Qt.length;Yt<le;Yt++){const de=Qt[Yt],jt=Gt[de.materialIndex];jt&&jt.visible&&N.push(R,Wt,jt,ht,Re.z,de)}}else Gt.visible&&N.push(R,Wt,Gt,ht,Re.z,null)}}const Ft=R.children;for(let Wt=0,Gt=Ft.length;Wt<Gt;Wt++)Aa(Ft[Wt],Y,ht,ot)}function mi(R,Y,ht,ot){const{opaque:$,transmissive:Ft,transparent:Wt}=R;B.setupLightsView(ht),$t===!0&&J.setGlobalState(O.clippingPlanes,ht),ot&&Kt.viewport(I.copy(ot)),$.length>0&&An($,Y,ht),Ft.length>0&&An(Ft,Y,ht),Wt.length>0&&An(Wt,Y,ht),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function yn(R,Y,ht,ot){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ot.id]===void 0){const jt=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ot.id]=new qa(1,1,{generateMipmaps:!0,type:jt?fs:Xi,minFilter:Gs,samples:Math.max(4,Xe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const Ft=B.state.transmissionRenderTarget[ot.id],Wt=ot.viewport||I;Ft.setSize(Wt.z*O.transmissionResolutionScale,Wt.w*O.transmissionResolutionScale);const Gt=O.getRenderTarget(),Qt=O.getActiveCubeFace(),Yt=O.getActiveMipmapLevel();O.setRenderTarget(Ft),O.getClearColor(gt),At=O.getClearAlpha(),At<1&&O.setClearColor(16777215,.5),O.clear(),_e&&vt.render(ht);const le=O.toneMapping;O.toneMapping=Ya;const de=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),B.setupLightsView(ot),$t===!0&&J.setGlobalState(O.clippingPlanes,ot),An(R,ht,ot),D.updateMultisampleRenderTarget(Ft),D.updateRenderTargetMipmap(Ft),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ve=0,Se=Y.length;ve<Se;ve++){const $e=Y[ve],{object:We,geometry:Rn,material:qt,group:In}=$e;if(qt.side===Vn&&We.layers.test(ot.layers)){const ce=qt.side;qt.side=Ei,qt.needsUpdate=!0,ra(We,ht,ot,Rn,qt,In),qt.side=ce,qt.needsUpdate=!0,jt=!0}}jt===!0&&(D.updateMultisampleRenderTarget(Ft),D.updateRenderTargetMipmap(Ft))}O.setRenderTarget(Gt,Qt,Yt),O.setClearColor(gt,At),de!==void 0&&(ot.viewport=de),O.toneMapping=le}function An(R,Y,ht){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ft=R.length;$<Ft;$++){const Wt=R[$],{object:Gt,geometry:Qt,group:Yt}=Wt;let le=Wt.material;le.allowOverride===!0&&ot!==null&&(le=ot),Gt.layers.test(ht.layers)&&ra(Gt,Y,ht,Qt,le,Yt)}}function ra(R,Y,ht,ot,$,Ft){R.onBeforeRender(O,Y,ht,ot,$,Ft),R.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(O,Y,ht,ot,R,Ft),$.transparent===!0&&$.side===Vn&&$.forceSinglePass===!1?($.side=Ei,$.needsUpdate=!0,O.renderBufferDirect(ht,Y,ot,$,R,Ft),$.side=ks,$.needsUpdate=!0,O.renderBufferDirect(ht,Y,ot,$,R,Ft),$.side=Vn):O.renderBufferDirect(ht,Y,ot,$,R,Ft),R.onAfterRender(O,Y,ht,ot,$,Ft)}function Ra(R,Y,ht){Y.isScene!==!0&&(Y=ke);const ot=b.get(R),$=B.state.lights,Ft=B.state.shadowsArray,Wt=$.state.version,Gt=Rt.getParameters(R,$.state,Ft,Y,ht),Qt=Rt.getProgramCacheKey(Gt);let Yt=ot.programs;ot.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ot.fog=Y.fog;const le=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ot.envMap=Q.get(R.envMap||ot.environment,le),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",pe),Yt=new Map,ot.programs=Yt);let de=Yt.get(Qt);if(de!==void 0){if(ot.currentProgram===de&&ot.lightsStateVersion===Wt)return Ys(R,Gt),de}else Gt.uniforms=Rt.getUniforms(R),R.onBeforeCompile(Gt,O),de=Rt.acquireProgram(Gt,Qt),Yt.set(Qt,de),ot.uniforms=Gt.uniforms;const jt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=J.uniform),Ys(R,Gt),ot.needsLights=Ca(R),ot.lightsStateVersion=Wt,ot.needsLights&&(jt.ambientLightColor.value=$.state.ambient,jt.lightProbe.value=$.state.probe,jt.directionalLights.value=$.state.directional,jt.directionalLightShadows.value=$.state.directionalShadow,jt.spotLights.value=$.state.spot,jt.spotLightShadows.value=$.state.spotShadow,jt.rectAreaLights.value=$.state.rectArea,jt.ltc_1.value=$.state.rectAreaLTC1,jt.ltc_2.value=$.state.rectAreaLTC2,jt.pointLights.value=$.state.point,jt.pointLightShadows.value=$.state.pointShadow,jt.hemisphereLights.value=$.state.hemi,jt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,jt.spotLightMatrix.value=$.state.spotLightMatrix,jt.spotLightMap.value=$.state.spotLightMap,jt.pointShadowMatrix.value=$.state.pointShadowMatrix),ot.currentProgram=de,ot.uniformsList=null,de}function zr(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ad.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ys(R,Y){const ht=b.get(R);ht.outputColorSpace=Y.outputColorSpace,ht.batching=Y.batching,ht.batchingColor=Y.batchingColor,ht.instancing=Y.instancing,ht.instancingColor=Y.instancingColor,ht.instancingMorph=Y.instancingMorph,ht.skinning=Y.skinning,ht.morphTargets=Y.morphTargets,ht.morphNormals=Y.morphNormals,ht.morphColors=Y.morphColors,ht.morphTargetsCount=Y.morphTargetsCount,ht.numClippingPlanes=Y.numClippingPlanes,ht.numIntersection=Y.numClipIntersection,ht.vertexAlphas=Y.vertexAlphas,ht.vertexTangents=Y.vertexTangents,ht.toneMapping=Y.toneMapping}function qs(R,Y,ht,ot,$){Y.isScene!==!0&&(Y=ke),D.resetTextureUnits();const Ft=Y.fog,Wt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?Y.environment:null,Gt=st===null?O.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Mo,Qt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Yt=Q.get(ot.envMap||Wt,Qt),le=ot.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,de=!!ht.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),jt=!!ht.morphAttributes.position,ve=!!ht.morphAttributes.normal,Se=!!ht.morphAttributes.color;let $e=Ya;ot.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&($e=O.toneMapping);const We=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Rn=We!==void 0?We.length:0,qt=b.get(ot),In=B.state.lights;if($t===!0&&(oe===!0||R!==Z)){const Cn=R===Z&&ot.id===lt;J.setState(ot,R,Cn)}let ce=!1;ot.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==In.state.version||qt.outputColorSpace!==Gt||$.isBatchedMesh&&qt.batching===!1||!$.isBatchedMesh&&qt.batching===!0||$.isBatchedMesh&&qt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&qt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&qt.instancing===!1||!$.isInstancedMesh&&qt.instancing===!0||$.isSkinnedMesh&&qt.skinning===!1||!$.isSkinnedMesh&&qt.skinning===!0||$.isInstancedMesh&&qt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&qt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&qt.instancingMorph===!1&&$.morphTexture!==null||qt.envMap!==Yt||ot.fog===!0&&qt.fog!==Ft||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==J.numPlanes||qt.numIntersection!==J.numIntersection)||qt.vertexAlphas!==le||qt.vertexTangents!==de||qt.morphTargets!==jt||qt.morphNormals!==ve||qt.morphColors!==Se||qt.toneMapping!==$e||qt.morphTargetsCount!==Rn)&&(ce=!0):(ce=!0,qt.__version=ot.version);let Xn=qt.currentProgram;ce===!0&&(Xn=Ra(ot,Y,$));let gi=!1,$n=!1,Ti=!1;const Fe=Xn.getUniforms(),Mn=qt.uniforms;if(Kt.useProgram(Xn.program)&&(gi=!0,$n=!0,Ti=!0),ot.id!==lt&&(lt=ot.id,$n=!0),gi||Z!==R){Kt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(k,"projectionMatrix",R.projectionMatrix),Fe.setValue(k,"viewMatrix",R.matrixWorldInverse);const Yi=Fe.map.cameraPosition;Yi!==void 0&&Yi.setValue(k,be.setFromMatrixPosition(R.matrixWorld)),Xe.logarithmicDepthBuffer&&Fe.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Fe.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,$n=!0,Ti=!0)}if(qt.needsLights&&(In.state.directionalShadowMap.length>0&&Fe.setValue(k,"directionalShadowMap",In.state.directionalShadowMap,D),In.state.spotShadowMap.length>0&&Fe.setValue(k,"spotShadowMap",In.state.spotShadowMap,D),In.state.pointShadowMap.length>0&&Fe.setValue(k,"pointShadowMap",In.state.pointShadowMap,D)),$.isSkinnedMesh){Fe.setOptional(k,$,"bindMatrix"),Fe.setOptional(k,$,"bindMatrixInverse");const Cn=$.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Fe.setValue(k,"boneTexture",Cn.boneTexture,D))}$.isBatchedMesh&&(Fe.setOptional(k,$,"batchingTexture"),Fe.setValue(k,"batchingTexture",$._matricesTexture,D),Fe.setOptional(k,$,"batchingIdTexture"),Fe.setValue(k,"batchingIdTexture",$._indirectTexture,D),Fe.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Fe.setValue(k,"batchingColorTexture",$._colorsTexture,D));const oi=ht.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&Ht.update($,ht,Xn),($n||qt.receiveShadow!==$.receiveShadow)&&(qt.receiveShadow=$.receiveShadow,Fe.setValue(k,"receiveShadow",$.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&Y.environment!==null&&(Mn.envMapIntensity.value=Y.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=A2()),$n&&(Fe.setValue(k,"toneMappingExposure",O.toneMappingExposure),qt.needsLights&&Wi(Mn,Ti),Ft&&ot.fog===!0&&Xt.refreshFogUniforms(Mn,Ft),Xt.refreshMaterialUniforms(Mn,ot,ft,q,B.state.transmissionRenderTarget[R.id]),ad.upload(k,zr(qt),Mn,D)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ad.upload(k,zr(qt),Mn,D),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Fe.setValue(k,"center",$.center),Fe.setValue(k,"modelViewMatrix",$.modelViewMatrix),Fe.setValue(k,"normalMatrix",$.normalMatrix),Fe.setValue(k,"modelMatrix",$.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Cn=ot.uniformsGroups;for(let Yi=0,wa=Cn.length;Yi<wa;Yi++){const js=Cn[Yi];Pt.update(js,Xn),Pt.bind(js,Xn)}}return Xn}function Wi(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Ca(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(R,Y,ht){const ot=b.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Y,b.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ht,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ht=b.get(R);ht.__webglFramebuffer=Y,ht.__useDefaultFramebuffer=Y===void 0};const Ka=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,ht=0){st=R,V=Y,tt=ht;let ot=null,$=!1,Ft=!1;if(R){const Gt=b.get(R);if(Gt.__useDefaultFramebuffer!==void 0){Kt.bindFramebuffer(k.FRAMEBUFFER,Gt.__webglFramebuffer),I.copy(R.viewport),F.copy(R.scissor),ut=R.scissorTest,Kt.viewport(I),Kt.scissor(F),Kt.setScissorTest(ut),lt=-1;return}else if(Gt.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Gt.__hasExternalTextures)D.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const le=R.depthTexture;if(Gt.__boundDepthTexture!==le){if(le!==null&&b.has(le)&&(R.width!==le.image.width||R.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ft=!0);const Yt=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[Y])?ot=Yt[Y][ht]:ot=Yt[Y],$=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?ot=b.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?ot=Yt[ht]:ot=Yt,I.copy(R.viewport),F.copy(R.scissor),ut=R.scissorTest}else I.copy(nt).multiplyScalar(ft).floor(),F.copy(xt).multiplyScalar(ft).floor(),ut=wt;if(ht!==0&&(ot=Ka),Kt.bindFramebuffer(k.FRAMEBUFFER,ot)&&Kt.drawBuffers(R,ot),Kt.viewport(I),Kt.scissor(F),Kt.setScissorTest(ut),$){const Gt=b.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Gt.__webglTexture,ht)}else if(Ft){const Gt=Y;for(let Qt=0;Qt<R.textures.length;Qt++){const Yt=b.get(R.textures[Qt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Qt,Yt.__webglTexture,ht,Gt)}}else if(R!==null&&ht!==0){const Gt=b.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Gt.__webglTexture,ht)}lt=-1},this.readRenderTargetPixels=function(R,Y,ht,ot,$,Ft,Wt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Wt!==void 0&&(Qt=Qt[Wt]),Qt){Kt.bindFramebuffer(k.FRAMEBUFFER,Qt);try{const Yt=R.textures[Gt],le=Yt.format,de=Yt.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Gt),!Xe.textureFormatReadable(le)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(de)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&ht>=0&&ht<=R.height-$&&k.readPixels(Y,ht,ot,$,Ot.convert(le),Ot.convert(de),Ft)}finally{const Yt=st!==null?b.get(st).__webglFramebuffer:null;Kt.bindFramebuffer(k.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ht,ot,$,Ft,Wt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Wt!==void 0&&(Qt=Qt[Wt]),Qt)if(Y>=0&&Y<=R.width-ot&&ht>=0&&ht<=R.height-$){Kt.bindFramebuffer(k.FRAMEBUFFER,Qt);const Yt=R.textures[Gt],le=Yt.format,de=Yt.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Gt),!Xe.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,jt),k.bufferData(k.PIXEL_PACK_BUFFER,Ft.byteLength,k.STREAM_READ),k.readPixels(Y,ht,ot,$,Ot.convert(le),Ot.convert(de),0);const ve=st!==null?b.get(st).__webglFramebuffer:null;Kt.bindFramebuffer(k.FRAMEBUFFER,ve);const Se=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await YM(k,Se,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,jt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ft),k.deleteBuffer(jt),k.deleteSync(Se),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ht=0){const ot=Math.pow(2,-ht),$=Math.floor(R.image.width*ot),Ft=Math.floor(R.image.height*ot),Wt=Y!==null?Y.x:0,Gt=Y!==null?Y.y:0;D.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,ht,0,0,Wt,Gt,$,Ft),Kt.unbindTexture()};const Li=k.createFramebuffer(),Qa=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,ht=null,ot=null,$=0,Ft=0){let Wt,Gt,Qt,Yt,le,de,jt,ve,Se;const $e=R.isCompressedTexture?R.mipmaps[Ft]:R.image;if(ht!==null)Wt=ht.max.x-ht.min.x,Gt=ht.max.y-ht.min.y,Qt=ht.isBox3?ht.max.z-ht.min.z:1,Yt=ht.min.x,le=ht.min.y,de=ht.isBox3?ht.min.z:0;else{const Mn=Math.pow(2,-$);Wt=Math.floor($e.width*Mn),Gt=Math.floor($e.height*Mn),R.isDataArrayTexture?Qt=$e.depth:R.isData3DTexture?Qt=Math.floor($e.depth*Mn):Qt=1,Yt=0,le=0,de=0}ot!==null?(jt=ot.x,ve=ot.y,Se=ot.z):(jt=0,ve=0,Se=0);const We=Ot.convert(Y.format),Rn=Ot.convert(Y.type);let qt;Y.isData3DTexture?(D.setTexture3D(Y,0),qt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(D.setTexture2DArray(Y,0),qt=k.TEXTURE_2D_ARRAY):(D.setTexture2D(Y,0),qt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const In=k.getParameter(k.UNPACK_ROW_LENGTH),ce=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Xn=k.getParameter(k.UNPACK_SKIP_PIXELS),gi=k.getParameter(k.UNPACK_SKIP_ROWS),$n=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,$e.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$e.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Yt),k.pixelStorei(k.UNPACK_SKIP_ROWS,le),k.pixelStorei(k.UNPACK_SKIP_IMAGES,de);const Ti=R.isDataArrayTexture||R.isData3DTexture,Fe=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Mn=b.get(R),oi=b.get(Y),Cn=b.get(Mn.__renderTarget),Yi=b.get(oi.__renderTarget);Kt.bindFramebuffer(k.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let wa=0;wa<Qt;wa++)Ti&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(R).__webglTexture,$,de+wa),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Ft,Se+wa)),k.blitFramebuffer(Yt,le,Wt,Gt,jt,ve,Wt,Gt,k.DEPTH_BUFFER_BIT,k.NEAREST);Kt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||b.has(R)){const Mn=b.get(R),oi=b.get(Y);Kt.bindFramebuffer(k.READ_FRAMEBUFFER,Li),Kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Qa);for(let Cn=0;Cn<Qt;Cn++)Ti?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Mn.__webglTexture,$,de+Cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Mn.__webglTexture,$),Fe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,oi.__webglTexture,Ft,Se+Cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,oi.__webglTexture,Ft),$!==0?k.blitFramebuffer(Yt,le,Wt,Gt,jt,ve,Wt,Gt,k.COLOR_BUFFER_BIT,k.NEAREST):Fe?k.copyTexSubImage3D(qt,Ft,jt,ve,Se+Cn,Yt,le,Wt,Gt):k.copyTexSubImage2D(qt,Ft,jt,ve,Yt,le,Wt,Gt);Kt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Fe?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(qt,Ft,jt,ve,Se,Wt,Gt,Qt,We,Rn,$e.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(qt,Ft,jt,ve,Se,Wt,Gt,Qt,We,$e.data):k.texSubImage3D(qt,Ft,jt,ve,Se,Wt,Gt,Qt,We,Rn,$e):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ft,jt,ve,Wt,Gt,We,Rn,$e.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ft,jt,ve,$e.width,$e.height,We,$e.data):k.texSubImage2D(k.TEXTURE_2D,Ft,jt,ve,Wt,Gt,We,Rn,$e);k.pixelStorei(k.UNPACK_ROW_LENGTH,In),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ce),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xn),k.pixelStorei(k.UNPACK_SKIP_ROWS,gi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$n),Ft===0&&Y.generateMipmaps&&k.generateMipmap(qt),Kt.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Kt.unbindTexture()},this.resetState=function(){V=0,tt=0,st=null,Kt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ve._getUnpackColorSpace()}}const R2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Jd,AddEquation:Ur,AddOperation:TS,AdditiveBlending:Qm,AgXToneMapping:g0,AlphaFormat:E0,AlwaysCompare:OS,AlwaysDepth:cd,AlwaysStencilFunc:t0,AmbientLight:JS,ArrayCamera:ty,BackSide:Ei,BasicDepthPacking:RS,BasicShadowMap:aS,Box3:Fr,BoxGeometry:Br,BufferAttribute:ba,BufferGeometry:aa,ByteType:x0,Camera:P0,CanvasTexture:Cl,CatmullRomCurve3:XS,CineonToneMapping:p0,ClampToEdgeWrapping:cs,Clock:ny,Color:ue,ColorManagement:Ve,ConstantAlphaFactor:MS,ConstantColorFactor:SS,CubeCamera:$S,CubeDepthTexture:VS,CubeReflectionMapping:Pr,CubeRefractionMapping:So,CubeTexture:L0,CubeUVReflectionMapping:iu,CullFaceBack:Km,CullFaceFront:iS,CullFaceNone:nS,Curve:kS,CustomBlending:rS,CustomToneMapping:m0,Data3DTexture:zS,DataArrayTexture:A0,DataTexture:N0,DepthFormat:ds,DepthStencilFormat:Or,DepthTexture:Il,DirectionalLight:s0,DoubleSide:Vn,DstAlphaFactor:mS,DstColorFactor:_S,EqualCompare:NS,EqualDepth:fd,EquirectangularReflectionMapping:$f,EquirectangularRefractionMapping:td,Euler:ia,EventDispatcher:Eo,ExternalTexture:U0,Float32BufferAttribute:ri,FloatType:Ma,Fog:eu,FrontSide:ks,Frustum:fh,GLSL3:n0,GreaterCompare:LS,GreaterDepth:hd,GreaterEqualCompare:lh,GreaterEqualDepth:dd,Group:Rl,HalfFloatType:fs,HemisphereLight:QS,ImageUtils:FS,InstancedBufferAttribute:a0,InstancedMesh:GS,IntType:$d,KeepStencilOp:po,Layers:uh,LessCompare:DS,LessDepth:ud,LessEqualCompare:oh,LessEqualDepth:xo,Light:zl,LinearFilter:si,LinearMipmapLinearFilter:Gs,LinearMipmapNearestFilter:ed,LinearSRGBColorSpace:Mo,LinearToneMapping:d0,LinearTransfer:$c,Material:bo,MathUtils:bn,Matrix3:Ee,Matrix4:un,MaxEquation:uS,Mesh:He,MeshBasicMaterial:nu,MeshDepthMaterial:ZS,MeshDistanceMaterial:KS,MeshLambertMaterial:jS,MeshPhysicalMaterial:mo,MeshStandardMaterial:Hs,MinEquation:cS,MirroredRepeatWrapping:md,MixOperation:bS,MultiplyBlending:$m,MultiplyOperation:Qd,NearestFilter:ai,NearestMipmapLinearFilter:Vc,NearestMipmapNearestFilter:AS,NeutralToneMapping:_0,NeverCompare:wS,NeverDepth:ld,NoBlending:us,NoColorSpace:zs,NoToneMapping:Ya,NormalBlending:vo,NotEqualCompare:US,NotEqualDepth:pd,Object3D:hn,ObjectSpaceNormalMap:CS,OneFactor:dS,OneMinusConstantAlphaFactor:ES,OneMinusConstantColorFactor:yS,OneMinusDstAlphaFactor:gS,OneMinusDstColorFactor:vS,OneMinusSrcAlphaFactor:od,OneMinusSrcColorFactor:pS,OrthographicCamera:ph,PCFShadowMap:_o,PCFSoftShadowMap:sS,PMREMGenerator:Zd,PerspectiveCamera:Di,Plane:Lr,PlaneGeometry:ls,PointLight:Jc,Quaternion:Xs,R11_EAC_Format:Ed,RED_GREEN_RGTC2_Format:Yd,RED_RGTC1_Format:Xd,REVISION:Kd,RG11_EAC_Format:Td,RGBAFormat:Ea,RGBAIntegerFormat:sh,RGBA_ASTC_10x10_Format:Bd,RGBA_ASTC_10x5_Format:Id,RGBA_ASTC_10x6_Format:Pd,RGBA_ASTC_10x8_Format:Fd,RGBA_ASTC_12x10_Format:zd,RGBA_ASTC_12x12_Format:Hd,RGBA_ASTC_4x4_Format:Rd,RGBA_ASTC_5x4_Format:Cd,RGBA_ASTC_5x5_Format:wd,RGBA_ASTC_6x5_Format:Dd,RGBA_ASTC_6x6_Format:Nd,RGBA_ASTC_8x5_Format:Ld,RGBA_ASTC_8x6_Format:Ud,RGBA_ASTC_8x8_Format:Od,RGBA_BPTC_Format:Gd,RGBA_ETC2_EAC_Format:Md,RGBA_PVRTC_2BPPV1_Format:xd,RGBA_PVRTC_4BPPV1_Format:vd,RGBA_S3TC_DXT1_Format:qc,RGBA_S3TC_DXT3_Format:jc,RGBA_S3TC_DXT5_Format:Zc,RGBFormat:b0,RGB_BPTC_SIGNED_Format:Vd,RGB_BPTC_UNSIGNED_Format:kd,RGB_ETC1_Format:Sd,RGB_ETC2_Format:yd,RGB_PVRTC_2BPPV1_Format:_d,RGB_PVRTC_4BPPV1_Format:gd,RGB_S3TC_DXT1_Format:Yc,RGFormat:yo,RGIntegerFormat:ah,RawShaderMaterial:qS,Ray:D0,Raycaster:ey,RedFormat:nh,RedIntegerFormat:ih,ReinhardToneMapping:h0,RenderTarget:BS,RepeatWrapping:Dl,ReverseSubtractEquation:lS,RingGeometry:dh,SIGNED_R11_EAC_Format:bd,SIGNED_RED_GREEN_RGTC2_Format:qd,SIGNED_RED_RGTC1_Format:Wd,SIGNED_RG11_EAC_Format:Ad,SRGBColorSpace:Kn,SRGBTransfer:en,Scene:R0,ShaderChunk:Ae,ShaderLib:Xa,ShaderMaterial:Za,ShortType:S0,Source:ch,Sphere:Bl,SphereGeometry:hh,SpotLight:id,SrcAlphaFactor:rd,SrcAlphaSaturateFactor:xS,SrcColorFactor:hS,StaticDrawUsage:e0,SubtractEquation:oS,SubtractiveBlending:Jm,TangentSpaceNormalMap:rh,Texture:pi,Triangle:ya,UVMapping:v0,Uint16BufferAttribute:C0,Uint32BufferAttribute:w0,UniformsLib:Vt,UniformsUtils:YS,UnsignedByteType:Xi,UnsignedInt101111Type:M0,UnsignedInt248Type:Ll,UnsignedInt5999Type:y0,UnsignedIntType:ja,UnsignedShort4444Type:th,UnsignedShort5551Type:eh,UnsignedShortType:Nl,VSMShadowMap:Al,Vector2:De,Vector3:j,Vector4:Tn,WebGLCoordinateSystem:Wa,WebGLCubeRenderTarget:F0,WebGLRenderTarget:qa,WebGLRenderer:cy,WebGLUtils:ly,WebGPUCoordinateSystem:Ul,WebXRController:nd,ZeroFactor:fS,createCanvasElement:IS,error:Ge,log:i0,warn:me,warnOnce:tu},Symbol.toStringTag,{value:"Module"}));class C2 extends R0{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Br;t.deleteAttribute("uv");const i=new Hs({side:Ei}),s=new Hs,l=new Jc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new He(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new GS(t,s,6),h=new hn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),f.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),f.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),f.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),f.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),f.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),f.setMatrixAt(5,h.matrix),this.add(f);const m=new He(t,Ml(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new He(t,Ml(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new He(t,Ml(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new He(t,Ml(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new He(t,Ml(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new He(t,Ml(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Ml(r){return new jS({color:0,emissive:16777215,emissiveIntensity:r})}const w2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],D2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],N2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],L2=["LOW","MEDIUM","HIGH","EXTREME"],U2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],O2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],I2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},P2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},F2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},B2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},z2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function uy(r){return(r-90)*Math.PI/180}function H2(r,t,i,s){const l=uy(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function El(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function B0(r){El("subject",r.subject,w2),El("domain",r.domain,D2),El("verb",r.verb,N2),El("magnitude",r.magnitude,L2),El("time",r.time,U2),El("certainty",r.certainty,O2)}function fy(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=z2[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return B0(s),s}function Xc(r){return B0(r),[r.subject,r.domain,r.verb,r.magnitude,r.time,r.certainty].join(".")}function Wc(r){return Xc(fy(r))}function G2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),h=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(h,m):r.lineTo(h,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,h=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,h):r.lineTo(f,h)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Fc(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,h=Math.sqrt(c*c+f*f)||1,m=c/h,p=f/h,_=-p,v=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+v*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-v*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function Bc(r,t,i,s,l,c){const f=B2[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let h=1;h<=f;h+=1){const m=h/(f+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const v=1-m;p=v*v*i.x+2*v*m*c.x+m*m*s.x,_=v*v*i.y+2*v*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function V2(r,t,i){B0(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,h=l*.5,m=i?.backgroundColor??"rgba(6,14,24,0.74)",p=i?.lineColor??"rgba(102,221,255,0.96)",_=i?.gridColor??"rgba(102,221,255,0.58)";r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,h,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(f,h,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,h,c*.12,0,Math.PI*2),r.stroke();const v=I2[t.domain],g=P2[t.time]*c,y=F2[t.magnitude]*c,E=H2(f,h,g,v),w=uy(v),M=Math.cos(w),S=Math.sin(w),C=-S,L=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let N={x:E.x,y:E.y},B={x:E.x+M*y,y:E.y+S*y},H;if(t.verb==="EXISTS")N={x:E.x-C*(y*.48),y:E.y-L*(y*.48)},B={x:E.x+C*(y*.48),y:E.y+L*(y*.48)},r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(B.x,B.y),r.stroke(),Bc(r,t,N,B,p);else if(t.verb==="DECLINES")B={x:E.x-M*y,y:E.y-S*y},r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(B.x,B.y),r.stroke(),Fc(r,N,B,p,7),Bc(r,t,N,B,p);else if(t.verb==="TRANSFORMS")H={x:E.x+C*(y*.34)+M*(y*.34),y:E.y+L*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(N.x,N.y),r.quadraticCurveTo(H.x,H.y,B.x,B.y),r.stroke(),Fc(r,H,B,p,7),Bc(r,t,N,B,p,H);else if(t.verb==="INFLUENCES"){const T={x:E.x+C*3.4,y:E.y+L*3.4},O={x:B.x+C*3.4,y:B.y+L*3.4},mt={x:E.x-C*3.4,y:E.y-L*3.4},V={x:B.x-C*3.4,y:B.y-L*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(O.x,O.y),r.moveTo(mt.x,mt.y),r.lineTo(V.x,V.y),r.stroke(),Fc(r,T,O,p,6.6),Fc(r,mt,V,p,6.6),Bc(r,t,T,O,p)}else r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(B.x,B.y),r.stroke(),Fc(r,N,B,p,7),Bc(r,t,N,B,p);r.fillStyle=p,r.beginPath(),r.arc(f,h,5,0,Math.PI*2),r.fill(),G2(r,t.subject,E,p)}function qx(r,t,i){const s=fy(t);V2(r,s,i)}const jx="intelligenspartiet:language",k2={nb:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Film",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideGlyphWall:"Glyff",outsideBack:"Tilbake",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signaturer",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Film",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideGlyphWall:"Glyff",outsideBack:"Back",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signatures",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},X2=100,Fs=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],Bs=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],uo=["LOW","MEDIUM","HIGH","EXTREME"],fo=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],zc=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],km=[{phase:"signal-whisper",subjects:["IDEA","TECHNOLOGY","INSTITUTION"],domains:["MEDIA","CULTURE","TECHNOLOGY","EDUCATION","INDIVIDUALS"],verbs:["EXISTS","INFLUENCES","GROWS"],magnitudes:["LOW","MEDIUM"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"attention-displacement",subjects:["INDIVIDUAL","IDEA","SYSTEM"],domains:["INDIVIDUALS","MEDIA","ORGANIZATIONS","TECHNOLOGY"],verbs:["INFLUENCES","GROWS","DECLINES"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["PROBABLE","CONFIRMED"]},{phase:"output-surge",subjects:["SYSTEM","TECHNOLOGY","INSTITUTION"],domains:["TECHNOLOGY","ORGANIZATIONS","ECONOMY","INFRASTRUCTURE"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["HIGH","EXTREME"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"cognitive-strain",subjects:["INDIVIDUAL","SYSTEM","TECHNOLOGY"],domains:["INDIVIDUALS","ORGANIZATIONS","EDUCATION","SCIENCE"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["HIGH","EXTREME"],times:["NOW","LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"blame-cycle",subjects:["INSTITUTION","EVENT","SYSTEM"],domains:["POLITICS","SOCIETY","MEDIA","ECONOMY"],verbs:["INFLUENCES","TRANSFORMS","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"resistance-ritual",subjects:["INSTITUTION","INDIVIDUAL","EVENT"],domains:["CULTURE","POLITICS","ORGANIZATIONS","SOCIETY"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["MEDIUM","HIGH"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"reskilling-wave",subjects:["IDEA","INSTITUTION","SYSTEM"],domains:["EDUCATION","SCIENCE","ORGANIZATIONS","TECHNOLOGY"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["PROBABLE","CONFIRMED"]},{phase:"institutional-memory",subjects:["INSTITUTION","SYSTEM","BREAKTHROUGH"],domains:["INFRASTRUCTURE","ORGANIZATIONS","ECONOMY","SCIENCE"],verbs:["EXISTS","TRANSFORMS","GROWS"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["INDICATION","PROBABLE","CONFIRMED"]},{phase:"myth-afterimage",subjects:["EVENT","IDEA","INDIVIDUAL"],domains:["CULTURE","MEDIA","SOCIETY","EDUCATION"],verbs:["EXISTS","INFLUENCES","DECLINES"],magnitudes:["LOW","MEDIUM","HIGH"],times:["Y3_10","GT10Y"],certainties:["INDICATION","PROBABLE"]},{phase:"recurrence",subjects:["SYSTEM","INSTITUTION","INDIVIDUAL"],domains:["SOCIETY","POLITICS","ORGANIZATIONS","INDIVIDUALS"],verbs:["TRANSFORMS","INFLUENCES","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["GT10Y","NOW"],certainties:["PROBABLE","CONFIRMED"]}],bl=(r,t,i=0)=>r[(t+i)%r.length],Hc=(r,t,i)=>{const s=r.indexOf(t),l=s>=0?s:0;return r[(l+i+r.length*32)%r.length]},W2=r=>{const t=[],i=new Set,s=Math.ceil(r/km.length);for(let l=0;l<km.length;l+=1){const c=km[l];for(let f=0;f<s&&t.length<r;f+=1){let h={subject:bl(c.subjects,f,l),domain:bl(c.domains,f,l*2),verb:bl(c.verbs,f,l+f%3),magnitude:bl(c.magnitudes,f,Math.floor(f/2)),time:bl(c.times,f,Math.floor(f/3)),certainty:bl(c.certainties,f,f%2)},m=Wc(Xc(h));if(i.has(m)){let p=!1;for(let _=1;_<=Bs.length*fo.length;_+=1){const v={...h,subject:Hc(Fs,h.subject,Math.floor(_/7)),domain:Hc(Bs,h.domain,_),magnitude:Hc(uo,h.magnitude,Math.floor(_/4)),time:Hc(fo,h.time,Math.floor(_/2)),certainty:Hc(zc,h.certainty,Math.floor(_/3))},g=Wc(Xc(v));if(!i.has(g)){h=v,m=g,p=!0;break}}if(!p)for(const _ of Fs){for(const v of Bs){for(const g of uo){for(const y of fo){for(const E of zc){const w=Wc(Xc({subject:_,domain:v,verb:h.verb,magnitude:g,time:y,certainty:E}));if(!i.has(w)){h={subject:_,domain:v,verb:h.verb,magnitude:g,time:y,certainty:E},m=w,p=!0;break}}if(p)break}if(p)break}if(p)break}if(p)break}}if(i.has(m)){const p=Fs.length*Bs.length*uo.length*fo.length*zc.length;for(let _=0;_<p;_+=1){const v=t.length+_,g=v%Fs.length,y=Math.floor(v/Fs.length)%Bs.length,E=Math.floor(v/(Fs.length*Bs.length))%uo.length,w=Math.floor(v/(Fs.length*Bs.length*uo.length))%fo.length,M=Math.floor(v/(Fs.length*Bs.length*uo.length*fo.length))%zc.length,S={subject:Fs[g],domain:Bs[y],verb:h.verb,magnitude:uo[E],time:fo[w],certainty:zc[M]},C=Wc(Xc(S));if(!i.has(C)){m=C;break}}}i.add(m),t.push({id:`ra-${String(t.length+1).padStart(3,"0")}`,canonical:m,phase:c.phase})}}return t},Y2=W2(X2),q2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},Xm=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:q2}),qf=[Xm("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),Xm("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),Xm("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],j2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),ka=r=>{let t=r%1;return t<0&&(t+=1),t},Z2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),ka(r+l*(1-Math.exp(-i*s)))},Zx=12,Wm=9,Ym=.12,Kx=-1,qm=2.4,K2=.3,Q2=1.2,J2=.3,Qx=6741503,$2=5,tR=3.2,eR=.35,nR=.25,Jx=400,iR=2.5,$x=16755251,jf=3,aR=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],sd=[{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1770978482749-c088b297-1ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770978437489-d0299c39-WelhavenTheater.png"},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],sR="https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",rR=Math.max(0,sd.findIndex(r=>r.video===sR)),z0=17.6,dy=z0*(16/9),hy=dy*Math.sqrt(3)/2,oR=.56,lR=31.2,Zf=hy*2.62,tS=z0*.56,cR=60,uR=40,fR=220,dR=360,hR=105,pR=.75,eS=96,c0=[330,250,180,120],mR=[2,3.2,4.8,6.2],gR=[.12,.17,.22,.3],Kf={tailPath:"",taperPaths:c0.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},jm=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],h=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${h} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},_R=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),vR=(r,t,i,s,l,c)=>{py(r,t,l).forEach((h,m)=>{r.fillText(h,i,s+m*c)})},py=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const h=s[f];if(!h)continue;const m=`${c}${h} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${h} `):c=m}return c.trim()&&l.push(c.trim()),l},xR=/\(\s*bold\s*\)/gi,SR=/\(\s*new\s*line\s*\)/gi,yR=/\(\s*new\s*paragraph\s*\)/gi,MR=r=>{const i=r.replace(/\r\n?/g,`
`).replace(yR,`

`).replace(SR,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const h=/\(\s*bold\s*\)/i.test(c),m=c.replace(xR,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:h,paragraphBreak:s}),s=!1}),l},ER=(r,t,i,s,l,c,f,h,m=.6)=>{const p=MR(t);let _=s;p.forEach((v,g)=>{g>0&&v.paragraphBreak&&(_+=c*m),r.font=v.bold?h:f,py(r,v.text,l).forEach(E=>{r.fillText(E,i,_),_+=c})}),r.font=f},bR=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,my=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),TR=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),AR=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],RR=new Map(AR.map(([r,t])=>[my(r),t])),CR=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],wR=CR.map(([r,t])=>[new RegExp(TR(r),"gi"),t]),DR={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},NR=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),LR=r=>{let t=r;return wR.forEach(([i,s])=>{t=t.replace(i,s)}),t},UR=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=DR[t.toLowerCase()];return i?NR(t,i):t}),OR=r=>{const t=r.trim();return t?(RR.get(my(t))??UR(LR(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},IR=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(bR,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>OR(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},Qf=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},u0=Math.PI*2,ho=r=>Math.min(1,Math.max(0,r)),Gc=(r,t,i,s,l)=>{const c=u0*(r*i+s),f=u0*(t*i+l),h=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return h+m},Jf=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Cl(s)},Sa=(r,t,i,s,l=!1)=>{r.wrapS=Dl,r.wrapT=Dl,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=Gs,r.magFilter=si,l&&(r.colorSpace=Kn),r.needsUpdate=!0},Zm=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:h,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:v,seamDepth:g,seamWidth:y,roughnessBase:E,roughnessRange:w,normalStrength:M,aoStrength:S}=r,C=t*i,L=new ue(l),N=new Float32Array(C);let B=Number.POSITIVE_INFINITY,H=Number.NEGATIVE_INFINITY;for(let lt=0;lt<i;lt+=1)for(let Z=0;Z<t;Z+=1){const I=lt*t+Z,F=Z/t,ut=lt/i,gt=Gc(F,ut,c,s*.11,s*.23),At=Gc(F,ut,f,s*.41+.18,s*.29+.07),U=Gc(F,ut,h,s*.71+.43,s*.53+.31),q=Math.sin(u0*((F+ut*.33)*m+s*.17));let ft=0;if(_!=="none"&&v>0){const nt=(_==="x"?F:ut)*v%1,xt=Math.min(nt,1-nt);ft=Math.exp(-Math.pow(xt/Math.max(1e-4,y),2))}const Lt=gt*.6+At*.28+U*.12+q*p-ft*g;N[I]=Lt,Lt<B&&(B=Lt),Lt>H&&(H=Lt)}const z=new Float32Array(C),T=Math.max(1e-4,H-B),O=new Uint8ClampedArray(C*4),mt=new Uint8ClampedArray(C*4),V=new Uint8ClampedArray(C*4);for(let lt=0;lt<i;lt+=1)for(let Z=0;Z<t;Z+=1){const I=lt*t+Z,F=I*4,ut=Z/t,gt=lt/i,At=ho((N[I]-B)/T);z[I]=At;const U=Gc(ut,gt,f*.6,s*.19+.62,s*.73+.14)*.5+.5,q=ho(.78+(At-.5)*.24+(U-.5)*.12),ft=Gc(ut,gt,c*.5,s*.37+.89,s*.13+.44),Lt=1+ft*.017,zt=1+ft*.007,nt=1-ft*.013,xt=ho(E+(1-At)*w+(U-.5)*.14),wt=ho(.94-(1-At)*S);O[F]=Math.round(ho(L.r*q*Lt)*255),O[F+1]=Math.round(ho(L.g*q*zt)*255),O[F+2]=Math.round(ho(L.b*q*nt)*255),O[F+3]=255;const Zt=Math.round(xt*255);mt[F]=Zt,mt[F+1]=Zt,mt[F+2]=Zt,mt[F+3]=255;const $t=Math.round(wt*255);V[F]=$t,V[F+1]=$t,V[F+2]=$t,V[F+3]=255}const tt=(lt,Z)=>{const I=(lt+t)%t,F=(Z+i)%i;return z[F*t+I]},st=new Uint8ClampedArray(C*4);for(let lt=0;lt<i;lt+=1)for(let Z=0;Z<t;Z+=1){const F=(lt*t+Z)*4,ut=tt(Z+1,lt)-tt(Z-1,lt),gt=tt(Z,lt+1)-tt(Z,lt-1),At=-ut*M,U=-gt*M,q=1,ft=1/Math.hypot(At,U,q);st[F]=Math.round((At*ft*.5+.5)*255),st[F+1]=Math.round((U*ft*.5+.5)*255),st[F+2]=Math.round((q*ft*.5+.5)*255),st[F+3]=255}return{albedo:Jf(O,t,i),normal:Jf(st,t,i),roughness:Jf(mt,t,i),ao:Jf(V,t,i)}},PR=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const h=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=h*255,c/=h*255,f/=h*255;const m=l*.2126+c*.7152+f*.0722;return{color:new ue(l,c,f),luminance:m}};function FR(){const r=ie.useRef([]),t=ie.useRef(null),[i,s]=ie.useState(!1),[l,c]=ie.useState({width:1,height:1}),[f,h]=ie.useState(Kf);return ie.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),_=window.matchMedia("(pointer: coarse)"),v=()=>{s(!m.matches&&p.matches&&!_.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},y=()=>{v()},E=(C,L)=>typeof C.addEventListener=="function"?(C.addEventListener("change",L),()=>C.removeEventListener("change",L)):(C.addListener(L),()=>C.removeListener(L));v(),g();const w=E(m,y),M=E(p,y),S=E(_,y);return window.addEventListener("resize",g,{passive:!0}),()=>{w(),M(),S(),window.removeEventListener("resize",g)}},[]),ie.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],h(Kf);return}const m=_=>{if(_.pointerType!=="mouse"&&_.pointerType!=="pen")return;const v={x:_.clientX,y:_.clientY,t:performance.now()},g=r.current,y=g[g.length-1];if(y){const E=v.x-y.x,w=v.y-y.y;if(Math.hypot(E,w)<pR)return}g.push(v),g.length>eS&&g.splice(0,g.length-eS)},p=()=>{const _=performance.now(),v=_-dR,g=r.current;let y=0;for(;y<g.length&&g[y].t<v;)y+=1;if(y>0&&g.splice(0,y),g.length<2)h(E=>E.visible?Kf:E);else{const E=jm(g),w=c0.map(B=>{const H=_-B;let z=g.length-1;for(;z>0&&g[z-1].t>=H;)z-=1;const T=g.slice(z);return jm(T.length>=2?T:g.slice(-2))}),M=_-hR;let S=g.length-1;for(;S>0&&g[S-1].t>=M;)S-=1;let C=g.slice(S);C.length<2&&(C=g.slice(-2));const L=jm(C),N=C[C.length-1]??g[g.length-1];h(B=>B.visible&&B.tailPath===E&&B.taperPaths.every((H,z)=>H===w[z])&&B.headPath===L&&B.headX===N.x&&B.headY===N.y?B:{tailPath:E,taperPaths:w,headPath:L,headX:N.x,headY:N.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],h(Kf)}},[i]),i?Tt.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[Tt.jsxs("defs",{children:[Tt.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Tt.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),Tt.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),Tt.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[Tt.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),Tt.jsxs("feMerge",{children:[Tt.jsx("feMergeNode",{in:"blur"}),Tt.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?Tt.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:gR[p],strokeWidth:mR[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${c0[p]}`):null),Tt.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),Tt.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function BR(){const r=ie.useRef(null),t=ie.useRef([]),i=ie.useRef(Ym),s=ie.useRef(Ym),l=ie.useRef([]),c=ie.useRef(null),f=ie.useRef(null);ie.useEffect(()=>{const D=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=D,document.documentElement.style.overscrollBehavior=""}},[]);const[h,m]=ie.useState(qf),[p,_]=ie.useState([]),[v,g]=ie.useState(qf[0].id),[y,E]=ie.useState(!0),[w,M]=ie.useState(!1),[S,C]=ie.useState(!1),[L,N]=ie.useState("menu"),[B,H]=ie.useState([]),[z,T]=ie.useState(!1),[O,mt]=ie.useState(""),[V,tt]=ie.useState(()=>rR),[st,lt]=ie.useState(""),[Z,I]=ie.useState(""),[F,ut]=ie.useState(""),[gt,At]=ie.useState(null),[U,q]=ie.useState(()=>{if(typeof window>"u")return"nb";try{const D=window.localStorage.getItem(jx);if(D==="nb"||D==="en")return D}catch{}return"nb"});ie.useEffect(()=>{try{window.localStorage.setItem(jx,U)}catch{}},[U]);const ft=k2[U],Lt=ie.useMemo(()=>D=>U==="nb"?IR(D):D,[U]),zt=ie.useMemo(()=>Y2.map((D,Q)=>{let et="";if(typeof document<"u"){const it=document.createElement("canvas");it.width=420,it.height=420;const Ct=it.getContext("2d");if(Ct)try{qx(Ct,D.canonical,{backgroundColor:"rgba(0,0,0,0)",lineColor:"rgba(46,39,33,0.94)",gridColor:"rgba(69,60,53,0.48)"}),et=it.toDataURL("image/png")}catch{et=""}}return{...D,index:Q,previewDataUrl:et}}),[]);ie.useEffect(()=>{const D=new Set(zt.map(Q=>Q.canonical));D.size!==zt.length&&console.warn(`Glyff wall uniqueness violation: ${zt.length-D.size} duplicates detected.`)},[zt]);const nt=ie.useMemo(()=>JSON.stringify({version:"rl-story-v1",name:"replacement-anxiety-pattern",protocol:"ra-sequence-v1",read_order:"left_to_right_top_to_bottom",count:zt.length,items:zt.map(D=>({order:D.index+1,id:D.id,phase:D.phase,canonical:D.canonical}))},null,2),[zt]),xt=ie.useCallback(()=>{c.current?.()},[]),wt=ie.useCallback(()=>{f.current=null,At(null)},[]),Zt=ie.useCallback(D=>{D.preventDefault();const Q=st.trim(),et=Z.trim(),it=F.trim();if(!Q||!et||!it)return;const Ct=U==="nb"?"Kontakt fra Signaturer":"Contact from Signatures",Rt=[`${U==="nb"?"Navn":"Name"}: ${Q}`,`${U==="nb"?"E-post":"Email"}: ${et}`,"",`${U==="nb"?"Melding":"Message"}:`,it].join(`
`),Xt=`mailto:lars@larscuzner.com?subject=${encodeURIComponent(Ct)}&body=${encodeURIComponent(Rt)}`;window.location.href=Xt},[U,Z,F,st]),$t=ie.useRef(0),oe=ie.useRef(0),pn=ie.useRef(null),be=ie.useCallback(D=>{const Q=D>=0?1:-1;tt(et=>{const it=sd.length;return(et+Q+it)%it})},[]),Re=ie.useCallback(D=>{D.preventDefault();const Q=Math.abs(D.deltaX)>Math.abs(D.deltaY)?D.deltaX:D.deltaY;$t.current+=Q;const et=performance.now();et-oe.current<fR||Math.abs($t.current)<uR||(be($t.current>0?1:-1),$t.current=0,oe.current=et)},[be]),ke=ie.useCallback(D=>{pn.current=D.touches[0]?.clientX??null},[]),_e=ie.useCallback(D=>{const Q=pn.current,et=D.changedTouches[0]?.clientX??null;if(pn.current=null,Q===null||et===null)return;const it=et-Q;Math.abs(it)<28||be(it<0?1:-1)},[be]);ie.useEffect(()=>{S||N("menu")},[S]),ie.useEffect(()=>{L==="videos"&&($t.current=0,oe.current=0)},[L]),ie.useEffect(()=>{if(!S||L!=="videos")return;let D=!1;const Q=()=>{D||l.current.forEach(it=>{if(!it||!it.paused&&it.readyState>=2)return;const Ct=it.play();Ct&&typeof Ct.catch=="function"&&Ct.catch(()=>{})})};Q();const et=window.setInterval(Q,900);return()=>{D=!0,window.clearInterval(et)}},[S,L]),ie.useEffect(()=>{if(!S||L!=="news")return;let D=!1;const Q=Ct=>({title:String(Ct?.title??"").trim(),source:String(Ct?.source??"").trim(),url:String(Ct?.url??"").trim(),snippet:String(Ct?.snippet??"").trim(),published_at:String(Ct?.published_at??"").trim(),published:Ct?.published!==!1}),et=Ct=>{const Rt=Date.parse(Ct);return Number.isFinite(Rt)?Rt:0};return(async()=>{T(!0),mt("");for(const Ct of aR)try{const Rt=await fetch(Ct,{cache:"no-store"});if(!Rt.ok)continue;const Xt=await Rt.json();if(!Array.isArray(Xt?.items))continue;const Nt=Xt.items.map(Q).filter(yt=>yt.published&&yt.title&&yt.url).sort((yt,J)=>et(J.published_at)-et(yt.published_at));if(D)return;H(Nt),T(!1);return}catch{}D||(H([]),mt(ft.outsideNewsError),T(!1))})(),()=>{D=!0}},[S,L,ft.outsideNewsError]),ie.useEffect(()=>{let D=!1;return(async()=>{try{const et=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),it=et.headers.get("content-type")??"";if(!et.ok)throw new Error(`HTTP ${et.status} while loading glyph language map`);if(!it.toLowerCase().includes("application/json")){const Mt=await et.text();throw new Error(`Expected JSON but got '${it||"unknown"}' (${Mt.slice(0,120)})`)}const Ct=await et.json();if(!Array.isArray(Ct?.items))throw new Error("Glyph language payload missing 'items' array");const Rt=Ct.items.map((Mt,vt)=>j2(Mt,vt)).filter(Mt=>Mt.enabled!==!1),Xt=new Map,Nt=[],yt=[],J=[];if(Rt.forEach(Mt=>{if(!Mt.canonical){yt.push(`${Mt.id} (empty canonical)`);return}let vt="";try{vt=Wc(Mt.canonical)}catch{yt.push(`${Mt.id} (${Mt.canonical})`);return}const Ht=Xt.get(vt);if(Ht&&Ht!==Mt.id){J.push(`${Mt.id} duplicates ${Ht} (${vt})`);return}Xt.set(vt,Mt.id),Nt.push({...Mt,canonical:vt})}),yt.length>0&&console.warn("Glyph language map dropped invalid canonical rows:",yt.join("; ")),J.length>0&&console.warn("Glyph language map dropped duplicate canonical rows:",J.join("; ")),D)return;_(Nt)}catch(et){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",et),D)return;_([])}})(),()=>{D=!0}},[]);const rn=ie.useMemo(()=>p.filter(D=>D.enabled!==!1&&typeof D.canonical=="string"&&D.canonical.trim().length>0),[p]),k=ie.useMemo(()=>{const D=new Map;if(!h.length||!rn.length)return D;const Q=Ct=>{const Rt=ka(Ct);return ka(Ym-Rt)},et=[...h].sort((Ct,Rt)=>{const Xt=typeof Ct.installation?.placement_t=="number"?Ct.installation.placement_t:0,Nt=typeof Rt.installation?.placement_t=="number"?Rt.installation.placement_t:0,yt=Q(Xt),J=Q(Nt);return yt===J?Ct.id.localeCompare(Rt.id):yt-J}),it=Math.min(et.length,rn.length);for(let Ct=0;Ct<it;Ct+=1)D.set(et[Ct].id,rn[Ct]);return D},[h,rn]),fn=ie.useMemo(()=>{const D=new Map;return k.forEach((Q,et)=>{Q.canonical&&D.set(et,Q.canonical)}),D},[k]),Ne=ie.useMemo(()=>{const D=new Map;return k.forEach((Q,et)=>{D.set(et,{label:Q.label||"",note:Q.note||"",labelNb:Q.label_nb||"",noteNb:Q.note_nb||""})}),D},[k]);ie.useEffect(()=>{let D=!1;return(async()=>{E(!0),M(!1);try{const et=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),it=et.headers.get("content-type")??"";if(!et.ok)throw new Error(`HTTP ${et.status} while loading panel data`);if(!it.toLowerCase().includes("application/json")){const J=await et.text();throw new Error(`Expected JSON but got '${it||"unknown"}' (${J.slice(0,120)})`)}const Ct=await et.json();if(!Array.isArray(Ct?.panels))throw new Error("Panel payload missing 'panels' array");const Rt=typeof Ct.media_root=="string"?Ct.media_root.replace(/\/+$/,""):"",Xt=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",Nt=J=>/^https?:\/\//i.test(J)&&Xt?`/proxy?url=${encodeURIComponent(J)}`:J,yt=Ct.panels.map(J=>{const Mt=typeof J?.source=="string"?J.source.replace(/^\/+/,""):"",vt=Mt?Rt?`${Rt}/${Mt}`:`/${Mt}`:void 0,Ht=vt?Nt(vt):void 0,he=typeof J?.poster=="string"?J.poster.replace(/^\/+/,""):"",W=he?Rt?`${Rt}/${he}`:`/${he}`:void 0,Ot=W?Nt(W):void 0,Ut=J?.type==="image"||J?.type==="video"?J.type:"text",Pt=J?.content??{},Dt=String(Pt?.title??"Untitled").trim()||"Untitled",dt=String(Pt?.description??"").trim(),kt=String(Pt?.title_nb??Pt?.title_no??"").trim(),ae=String(Pt?.description_nb??Pt?.description_no??"").trim(),we=String(Pt?.title_en??"").trim(),pe=String(Pt?.description_en??"").trim();return{...J,kind:Ut,type:Ut,title:Dt,body:dt,title_nb:kt||Dt,body_nb:ae||dt,title_en:we,body_en:pe,cta:Pt?.cta,poster:Ot,image:Ut==="image"?Ht:void 0,video:Ut==="video"?Ht:void 0}});if(yt.length===0)throw new Error("Panel payload contained 0 panels");if(D)return;m(yt),g(yt[0].id)}catch(et){if(console.error("Failed to load panels; using fallback data.",et),D)return;m(qf),g(qf[0].id),M(!0)}finally{D||E(!1)}})(),()=>{D=!0}},[]);const Xe=ie.useMemo(()=>h.find(D=>D.id===v)??h[0]??{title:"",body:""},[v,h]),Kt=ie.useMemo(()=>D=>{const Q=Ne.get(D.id);if(U==="nb"){const Ct=Qf(Q?.labelNb,D.title_nb,Lt(Q?.label||""),Lt(D.title||"")),Rt=Qf(Q?.noteNb,D.body_nb,Lt(Q?.note||""),Lt(D.body||""));return{title:Ct||"Mangler norsk tittel",body:Rt||"Mangler norsk tekst."}}const et=Qf(Q?.label,D.title_en),it=Qf(Q?.note,D.body_en);return{title:et||"Missing English title",body:it||"Missing English text."}},[Ne,U,Lt]),P=ie.useMemo(()=>Kt(Xe).title,[Xe,Kt]),b=ie.useMemo(()=>new Intl.DateTimeFormat(U==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[U]);return ie.useEffect(()=>{if(h.length===0)return;const D=r.current;if(!D)return;c.current=null,C(!1),wt();let Q=!1,et=()=>{};return(()=>{if(Q||!D)return;t.current=[];const Ct=window.matchMedia("(prefers-reduced-motion: reduce)"),Rt=window.matchMedia("(max-width: 767px)"),Xt=Ct.matches,Nt=Rt.matches,yt=bt=>{const Jt=Kt(bt);f.current=bt.id,At({panelId:bt.id,title:Jt.title,body:Jt.body})},J=new R0;J.background=new ue(987671),J.fog=new eu(987671,38,230);const Mt=new Di(Nt?72:64,D.clientWidth/D.clientHeight,.1,1200),vt=new cy({antialias:!Nt,alpha:!1,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(window.devicePixelRatio,Nt?1:1.5)),vt.setSize(D.clientWidth,D.clientHeight),vt.outputColorSpace=Kn,vt.toneMapping=Jd,vt.toneMappingExposure=Nt?.76:.72,vt.shadowMap.enabled=!Nt,vt.shadowMap.type=_o,D.appendChild(vt.domElement);let Ht=!1;const he=bt=>{Ht!==bt&&(Ht=bt,vt.shadowMap.type=bt?aS:_o,vt.shadowMap.needsUpdate=!0)},W=new Zd(vt),Ot=W.fromScene(new C2,.06);J.environment=Ot.texture;const Ut=new JS(16185599,.05);J.add(Ut);const Pt=new QS(14739442,1777446,.08);J.add(Pt);const Dt=_R(R2),dt=new XS(Dt,!0,"catmullrom",.17),kt=Nt?180:300,ae=Math.min(8,vt.capabilities.getMaxAnisotropy()),we=Nt?256:512,pe=Zm({width:we,height:we,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});Sa(pe.albedo,4.8,24,ae,!0),Sa(pe.normal,4.8,24,ae),Sa(pe.roughness,4.8,24,ae),Sa(pe.ao,4.8,24,ae);const xn=Zm({width:we,height:we,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});Sa(xn.albedo,2.2,24,ae,!0),Sa(xn.normal,2.2,24,ae),Sa(xn.roughness,2.2,24,ae),Sa(xn.ao,2.2,24,ae);const On=Zm({width:we,height:we,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});Sa(On.albedo,3.4,24,ae,!0),Sa(On.normal,3.4,24,ae),Sa(On.roughness,3.4,24,ae),Sa(On.ao,3.4,24,ae);const sa=new mo({color:9607586,map:pe.albedo,normalMap:pe.normal,normalScale:new De(.32,.32),roughnessMap:pe.roughness,roughness:.38,metalness:0,aoMap:pe.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Vn}),Ni=new mo({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Vn}),kn=new mo({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new ue(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Vn}),Ws=()=>{const bt=[],Jt=new j(0,1,0);let ne=new j(1,0,0);for(let It=0;It<=kt;It+=1){const Pn=It/kt,qi=dt.getPointAt(Pn),ts=Pn===1?qi.clone().sub(dt.getPointAt(Pn-.001)).normalize():dt.getPointAt(Pn+.001).sub(qi).normalize();let vi=new j().crossVectors(ts,Jt).normalize();vi.lengthSq()<1e-4&&(vi=ne.clone()),vi.dot(ne)<0&&vi.multiplyScalar(-1),ne=vi.clone();const Oa=new j().crossVectors(vi,ts).normalize();bt.push({pt:qi,right:vi,up:Oa,t:Pn})}const ee=(It,Pn,qi=!1)=>{const ts=[],vi=[],Oa=[];for(let xi=0;xi<=kt;xi+=1){const ei=bt[xi],Pi=It(ei),ye=Pn(ei);ts.push(Pi.x,Pi.y,Pi.z,ye.x,ye.y,ye.z),vi.push(0,ei.t,1,ei.t)}for(let xi=0;xi<kt;xi+=1){const ei=xi*2,Pi=ei+1,ye=ei+2,Qe=ei+3;qi?Oa.push(ei,ye,Pi,ye,Qe,Pi):Oa.push(ei,Pi,ye,ye,Pi,Qe)}const En=new aa;En.setAttribute("position",new ri(ts,3));const Ii=new ri(vi,2);return En.setAttribute("uv",Ii),En.setAttribute("uv2",Ii.clone()),En.setIndex(Oa),En.computeVertexNormals(),En},Bt=Zx*.5,ge=Wm*.5,Ye=ee(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ge)).add(It.right.clone().multiplyScalar(-Bt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ge)).add(It.right.clone().multiplyScalar(Bt))),nn=ee(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge)).add(It.right.clone().multiplyScalar(-Bt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge)).add(It.right.clone().multiplyScalar(Bt)),!0),tn=ee(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ge)).add(It.right.clone().multiplyScalar(-Bt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge)).add(It.right.clone().multiplyScalar(-Bt)),!0),_i=ee(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ge)).add(It.right.clone().multiplyScalar(Bt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge)).add(It.right.clone().multiplyScalar(Bt))),qn=.08,mn=.015,Be=ee(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge-qn)).add(It.right.clone().multiplyScalar(-Bt+mn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge)).add(It.right.clone().multiplyScalar(-Bt+mn)),!0),Ke=ee(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge-qn)).add(It.right.clone().multiplyScalar(Bt-mn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge)).add(It.right.clone().multiplyScalar(Bt-mn)),!1),qe=.22,gn=.018,Oi=ee(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ge)).add(It.right.clone().multiplyScalar(-Bt+gn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ge+qe)).add(It.right.clone().multiplyScalar(-Bt+gn)),!0),gs=ee(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ge)).add(It.right.clone().multiplyScalar(Bt-gn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ge+qe)).add(It.right.clone().multiplyScalar(Bt-gn)),!1),La=.14,Ua=ee(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge-.05)).add(It.right.clone().multiplyScalar(-La)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ge-.05)).add(It.right.clone().multiplyScalar(La)),!0);return{floorGeo:Ye,ceilGeo:nn,leftGeo:tn,rightGeo:_i,leftSkirtGeo:Oi,rightSkirtGeo:gs,trackRailGeo:Ua,leftCrownGeo:Be,rightCrownGeo:Ke}},{floorGeo:Ta,ceilGeo:bi,leftGeo:Aa,rightGeo:mi,leftSkirtGeo:yn,rightSkirtGeo:An,trackRailGeo:ra,leftCrownGeo:Ra,rightCrownGeo:zr}=Ws(),Ys=new He(Ta,sa),qs=new He(bi,kn),Wi=new He(Aa,Ni),Ca=new He(mi,Ni),Ka=new mo({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),Li=new Hs({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Vn}),Qa=new He(yn,Li),R=new He(An,Li);Qa.receiveShadow=!0,R.receiveShadow=!0;const Y=new He(Ra,Li),ht=new He(zr,Li);Y.receiveShadow=!1,ht.receiveShadow=!1;const ot=new mo({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Vn}),$=new He(ra,ot);$.receiveShadow=!1,Ys.receiveShadow=!0,Ys.castShadow=!0,qs.receiveShadow=!0,qs.castShadow=!0,Wi&&(Wi.receiveShadow=!0,Wi.castShadow=!0),Ca&&(Ca.receiveShadow=!0,Ca.castShadow=!0),J.add(Ys),J.add(qs),Wi&&J.add(Wi),Ca&&J.add(Ca),J.add(Qa),J.add(R),J.add(Y),J.add(ht),J.add($);const Ft=new j(0,1,0),Wt=new hn,Gt=new hn,Qt=new hn;J.add(Wt),J.add(Gt),J.add(Qt);const Yt=new id(16773598,Nt?16:24,34,Math.PI/8.4,.44,2);Yt.target=Wt,Yt.castShadow=!Nt,Yt.castShadow&&(Yt.shadow.mapSize.width=2048,Yt.shadow.mapSize.height=2048,Yt.shadow.bias=-35e-5,Yt.shadow.normalBias=.012,Yt.shadow.camera.near=.4,Yt.shadow.camera.far=34),J.add(Yt);const le=new id(12571903,Nt?6:9,34,Math.PI/6.5,.68,2);le.target=Gt,le.castShadow=!1,J.add(le);const de=new id(14083583,Nt?5:7,28,Math.PI/7.8,.6,2);de.target=Qt,de.castShadow=!1,J.add(de);const jt=new hn,ve=new hn;J.add(jt),J.add(ve);const Se=new s0(16774374,0);if(Se.target=jt,Se.castShadow=!Nt,Se.castShadow){Se.shadow.mapSize.width=4096,Se.shadow.mapSize.height=4096,Se.shadow.bias=-8e-5,Se.shadow.normalBias=.0012,Se.shadow.radius=0;const bt=Nt?250:220;Se.shadow.camera.left=-bt,Se.shadow.camera.right=bt,Se.shadow.camera.top=bt,Se.shadow.camera.bottom=-bt,Se.shadow.camera.near=25,Se.shadow.camera.far=980}J.add(Se);const $e=new s0(9090280,0);$e.target=ve,J.add($e),Ta.computeBoundingBox(),Ta.computeBoundingSphere(),bi.computeBoundingBox(),bi.computeBoundingSphere(),Aa.computeBoundingBox(),Aa.computeBoundingSphere(),mi.computeBoundingBox(),mi.computeBoundingSphere();const Rn=h.some(bt=>bt.installation?.mount_type==="continuous_led_wall"||bt.installation?.mount_type==="jutting_half_wall")?h:Nt?h.filter((bt,Jt)=>Jt%2===0):h,qt=[],In=[],ce=[],Xn=[],gi=[],$n=[],Ti=[],Fe=bt=>{if(!bt.paused&&bt.currentTime>0)return;const Jt=bt.play();Jt&&typeof Jt.catch=="function"&&Jt.catch(()=>{})},Mn=setInterval(()=>{let bt=!0;$n.forEach(Jt=>{(Jt.paused||Jt.readyState<2)&&(bt=!1,Fe(Jt))}),bt&&$n.length>0&&clearInterval(Mn)},500);gi.push(()=>clearInterval(Mn));const oi=new Br(1,1,.2),Cn=new ls(.82,.82),Yi=new mo({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),wa=(bt,Jt)=>{const ee=document.createElement("canvas");ee.width=512,ee.height=512;const Bt=ee.getContext("2d");Bt.clearRect(0,0,512,512);const ge=fn.get(Jt);if(ge)try{qx(Bt,ge,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const Ke=new Cl(ee);return Ke.colorSpace=Kn,Ke}catch(Ke){console.warn(`Invalid glyph canonical sentence for panel '${Jt}': '${ge}'. Falling back to procedural glyph.`,Ke)}const Ye=512/2,nn=512/2,tn=bt*137.508;Bt.fillStyle="rgba(6,14,24,0.7)",Bt.beginPath(),Bt.arc(Ye,nn,512*.42,0,Math.PI*2),Bt.fill(),Bt.strokeStyle="rgba(102,221,255,0.95)",Bt.lineWidth=2.5,Bt.lineCap="round",Bt.beginPath(),Bt.arc(Ye,nn,512*.38,0,Math.PI*2),Bt.stroke();const _i=3+bt%4;for(let Ke=0;Ke<_i;Ke++){const qe=Ke/_i*Math.PI*2+tn,gn=512*.08,Oi=512*.32;Bt.beginPath(),Bt.moveTo(Ye+Math.cos(qe)*gn,nn+Math.sin(qe)*gn),Bt.lineTo(Ye+Math.cos(qe)*Oi,nn+Math.sin(qe)*Oi),Bt.stroke()}const qn=2+bt%3;for(let Ke=0;Ke<qn;Ke++){const qe=512*(.15+Ke*.09),gn=tn+Ke*1.2;Bt.beginPath(),Bt.arc(Ye,nn,qe,gn,gn+Math.PI*(.4+bt%3*.2)),Bt.stroke()}Bt.fillStyle="rgba(102,221,255,0.85)";const mn=3+bt%5;for(let Ke=0;Ke<mn;Ke++){const qe=tn+Ke/mn*Math.PI*2,gn=512*(.2+Ke%3*.06);Bt.beginPath(),Bt.arc(Ye+Math.cos(qe)*gn,nn+Math.sin(qe)*gn,4,0,Math.PI*2),Bt.fill()}Bt.strokeStyle="rgba(102,221,255,0.5)",Bt.lineWidth=1.5,Bt.beginPath(),Bt.arc(Ye,nn,512*.12,0,Math.PI*2),Bt.stroke(),Bt.fillStyle="rgba(102,221,255,0.95)",Bt.beginPath(),Bt.arc(Ye,nn,6,0,Math.PI*2),Bt.fill();const Be=new Cl(ee);return Be.colorSpace=Kn,Be},js=(bt,Jt)=>{const ne=document.createElement("canvas");ne.width=1024,ne.height=640;const ee=ne.getContext("2d");ee.fillStyle="rgba(8,12,18,0.88)",ee.beginPath(),ee.roundRect(16,16,992,608,24),ee.fill(),ee.strokeStyle="rgba(102,221,255,0.25)",ee.lineWidth=2,ee.beginPath(),ee.roundRect(16,16,992,608,24),ee.stroke(),ee.fillStyle="rgba(102,221,255,0.95)",ee.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",vR(ee,bt.toUpperCase(),60,100,900,58),ee.strokeStyle="rgba(102,221,255,0.3)",ee.lineWidth=2,ee.beginPath(),ee.moveTo(60,180),ee.lineTo(960,180),ee.stroke(),ee.fillStyle="rgba(220,230,240,0.9)";const Bt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",ge="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";ee.font=Bt,ER(ee,Jt,60,230,900,42,Bt,ge);const Ye=new Cl(ne);return Ye.colorSpace=Kn,Ye},_h=()=>{const Jt=document.createElement("canvas");Jt.width=512,Jt.height=512;const ne=Jt.getContext("2d"),ee=512/2,Bt=512/2;ne.beginPath(),ne.arc(ee,Bt,512*.42,0,Math.PI*2),ne.fillStyle="rgba(6,14,24,0.7)",ne.fill(),ne.strokeStyle="rgba(255,170,51,0.9)",ne.lineWidth=6,ne.beginPath(),ne.arc(ee,Bt,512*.38,0,Math.PI*2),ne.stroke();const ge=8;for(let nn=0;nn<ge;nn++){const tn=nn/ge*Math.PI*2-Math.PI/2;ne.strokeStyle=`rgba(255,${170+Math.round(Math.sin(nn)*40)},51,0.8)`,ne.lineWidth=4,ne.beginPath(),ne.moveTo(ee+Math.cos(tn)*512*.12,Bt+Math.sin(tn)*512*.12),ne.lineTo(ee+Math.cos(tn)*512*.34,Bt+Math.sin(tn)*512*.34),ne.stroke();const _i=ee+Math.cos(tn)*512*.34,qn=Bt+Math.sin(tn)*512*.34,mn=512*.06;ne.beginPath(),ne.moveTo(_i,qn),ne.lineTo(_i-mn*Math.cos(tn-.4),qn-mn*Math.sin(tn-.4)),ne.moveTo(_i,qn),ne.lineTo(_i-mn*Math.cos(tn+.4),qn-mn*Math.sin(tn+.4)),ne.stroke()}ne.beginPath(),ne.arc(ee,Bt,512*.06,0,Math.PI*2),ne.fillStyle="rgba(255,200,80,0.95)",ne.fill();const Ye=new Cl(Jt);return Ye.colorSpace=Kn,Ye},au=bt=>{const Jt=ka(bt),ne=dt.getPointAt(Jt),Bt=dt.getPointAt(ka(Jt+.002)).clone().sub(ne).normalize();let ge=new j().crossVectors(Bt,Ft).normalize();ge.lengthSq()<1e-4&&(ge=new j(1,0,0));const Ye=new j().crossVectors(ge,Bt).normalize();return{point:ne,tangent:Bt,right:ge,up:Ye}};dt.getLength();const Da=[],oa=new ls(qm*2,qm*2),To=new ls($2,tR);Rn.forEach((bt,Jt)=>{const ne=bt.installation,ee=ka(ne?.placement_t??.05+Jt/Rn.length),{point:Bt,right:ge,up:Ye}=au(ee),nn=ne?.side==="left",qn=(ne?.side==="center"?0:nn?-1:1)*Zx*.12,mn=Bt.clone().add(ge.clone().multiplyScalar(qn)).add(Ye.clone().multiplyScalar(.5)),Be=wa(Jt,bt.id);In.push(Be);const Ke=new Hs({color:16777215,emissive:new ue(Qx),emissiveIntensity:1.2,map:Be,emissiveMap:Be,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});ce.push(Ke);const qe=new He(oa,Ke);qe.position.copy(mn),qe.userData={panel:bt,isGlyph:!0},qt.push(qe),J.add(qe);const gn=Kt(bt),Oi=gn.title,gs=gn.body,La=js(Oi,gs);In.push(La);const Ua=new Hs({color:16777215,emissive:new ue(1122867),emissiveIntensity:.3,map:La,transparent:!0,opacity:0,side:Vn,depthWrite:!0});ce.push(Ua);const It=new He(To,Ua),Pn=new Rl;Pn.add(It),Pn.position.copy(mn),Pn.scale.setScalar(.01),Pn.visible=!1,J.add(Pn);const qi=new Jc(Qx,Nt?6:12,20,1.5);qi.position.copy(mn),J.add(qi),Da.push({mesh:qe,card:Pn,panel:bt,progress:ee,baseY:mn.y,expanded:!1,expandT:0}),t.current.push({meta:bt,progress:ee})});let Ui=!1,ti=0,Wn=0,Ja=0,$a=0,Zs=0,Na=!1,Ai=!1,Hr=0,hs=0;const la=new j,Ao=new j,Nn=new j,Ro=32;for(let bt=0;bt<Ro;bt++)Nn.add(dt.getPointAt(bt/Ro));Nn.divideScalar(Ro);const Co=()=>{const Jt=Mt.position.clone().clone().sub(Nn).normalize();la.copy(Nn).add(Jt.multiplyScalar(Jx)),la.y=Nn.y+Jx*.35,Ao.copy(Nn)},Gr=()=>{Da.forEach(bt=>{bt.expanded=!1})},Gl=bt=>{Ui!==bt&&(Ui=bt,Na=!1,Ai=!1,C(bt),bt&&(Co(),Gr(),wt()))},Yn=()=>{Gl(!Ui)};c.current=Yn;const ps=new ls(jf*2,jf*2),Ks=_h();In.push(Ks);const ms=new Hs({color:16777215,emissive:new ue($x),emissiveIntensity:1.4,map:Ks,emissiveMap:Ks,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});ce.push(ms);const{point:su,up:wo}=au(nR),Qs=su.clone().add(wo.clone().multiplyScalar(1)),ca=new He(ps,ms);ca.position.copy(Qs),ca.userData={isExitGlyph:!0},J.add(ca);const Do=new ls(jf*5,jf*5),ru=new nu({visible:!1,side:Vn}),Js=new He(Do,ru);Js.position.copy(Qs),Js.userData={isExitGlyph:!0},qt.push(Js),J.add(Js);const ou=new Jc($x,Nt?6:12,20,1.5);ou.position.copy(Qs),J.add(ou);const lu=new hh(Nt?1.25:1.6,26,26);Xn.push(lu);const Vr=new Hs({color:16764788,emissive:new ue(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});ce.push(Vr);const Vl=su.clone().add(wo.clone().multiplyScalar(Wm*.52+.32)),$s=new He(lu,Vr);$s.position.copy(Vl),$s.userData={isReentryDot:!0},qt.push($s),J.add($s);const cu=new dh(Nt?1.75:2.2,Nt?2.35:2.95,52);Xn.push(cu);const kl=new nu({color:16761948,transparent:!0,opacity:0,side:Vn,depthWrite:!1});ce.push(kl);const kr=new He(cu,kl);kr.position.copy(Vl),J.add(kr);const No=new Jc(16761948,0,Nt?34:44,2);No.position.copy(Vl),J.add(No);const uu=new ey,Xl=new De,fu=bt=>{$n.forEach(Fe);const Jt=vt.domElement.getBoundingClientRect();Xl.x=(bt.clientX-Jt.left)/Jt.width*2-1,Xl.y=-((bt.clientY-Jt.top)/Jt.height)*2+1,Hr=bt.clientX,hs=bt.clientY,uu.setFromCamera(Xl,Mt);const ne=uu.intersectObjects(qt,!1);if(Ui){if(ne.length>0){const ee=ne[0].object;if(ee.userData.isReentryDot){Gl(!1);return}if(ee.userData.isExitGlyph){Yn();return}}Na=!0,Ai=bt.shiftKey||bt.altKey||bt.button===2;return}if(ne.length>0){const ee=ne[0].object;if(ee.userData.isExitGlyph){Yn();return}const Bt=ee.userData.panel;if(Bt){if(Nt){f.current===Bt.id?wt():yt(Bt),Gr();return}const ge=Da.find(Ye=>Ye.panel.id===Bt.id);ge&&(ge.expanded?ge.expanded=!1:(Da.forEach(Ye=>{Ye.expanded=!1}),ge.expanded=!0))}}else Nt||Da.forEach(ee=>{ee.expanded=!1})};vt.domElement.addEventListener("pointerdown",fu);const tr={x:0,y:0},ua={x:0,y:0},du=bt=>{const Jt=vt.domElement.getBoundingClientRect(),ne=(bt.clientX-Jt.left)/Jt.width,ee=(bt.clientY-Jt.top)/Jt.height;if(tr.x=(ne-.5)*2,tr.y=(ee-.5)*2,Ui&&Na){const Bt=bt.clientX-Hr,ge=bt.clientY-hs;Hr=bt.clientX,hs=bt.clientY,Ai?$a=bn.clamp($a+Bt*.0038,-Math.PI*.48,Math.PI*.48):(Wn+=Bt*.0046,Ja=bn.clamp(Ja+ge*.0035,-.88,.88));return}},hu=()=>{tr.x=0,tr.y=0,Na=!1,Ai=!1},Lo=()=>{Na=!1,Ai=!1},Wl=bt=>{Ui&&bt.preventDefault()};vt.domElement.addEventListener("pointermove",du,{passive:!0}),vt.domElement.addEventListener("pointerleave",hu,{passive:!0}),vt.domElement.addEventListener("pointerup",Lo,{passive:!0}),vt.domElement.addEventListener("pointercancel",Lo,{passive:!0}),vt.domElement.addEventListener("contextmenu",Wl);const pu=bt=>{if(bt.preventDefault(),Ui){Wn+=bt.deltaY*.0017,Zs=bn.clamp(Zs+bt.deltaY*.22,-165,230);return}$n.forEach(Fe),i.current=ka(i.current+Kx*bt.deltaY*75e-6)};vt.domElement.addEventListener("wheel",pu,{passive:!1});const mu=bt=>{(bt.key==="o"||bt.key==="O")&&Yn()};window.addEventListener("keydown",mu);let Xr=0;const gu=bt=>{$n.forEach(Fe),Xr=bt.touches[0]?.clientY??0},_u=bt=>{bt.preventDefault();const Jt=bt.touches[0]?.clientY??Xr,ne=Xr-Jt;if(Ui){Wn+=ne*.0021,Zs=bn.clamp(Zs+ne*.13,-165,230),Xr=Jt;return}i.current=ka(i.current+Kx*ne*11e-5),Xr=Jt};vt.domElement.addEventListener("touchstart",gu,{passive:!0}),vt.domElement.addEventListener("touchmove",_u,{passive:!1});const vu=()=>{D&&(Mt.aspect=D.clientWidth/D.clientHeight,Mt.updateProjectionMatrix(),vt.setSize(D.clientWidth,D.clientHeight))};window.addEventListener("resize",vu);const Yl=new hn,xu=new ny,ql=new j,Uo=new j,er=new j;let Su=h.length>0?h[0].id:"";const jl=()=>{if(Q)return;const bt=xu.getDelta(),Jt=xu.getElapsedTime();s.current=Z2(s.current,i.current,Xt?2.8:4.8,bt),ua.x+=(tr.x-ua.x)*.07,ua.y+=(tr.y-ua.y)*.07;const ne=s.current,ee=ka(ne+(Nt?.008:.01)),Bt=dt.getPointAt(ne),ge=dt.getPointAt(ee),Ye=dt.getPointAt(ka(ne+.002)).sub(dt.getPointAt(ka(ne-.002))).normalize();let nn=new j().crossVectors(Ye,Ft).normalize();nn.lengthSq()<1e-4&&(nn=new j(1,0,0));const tn=new j().crossVectors(nn,Ye).normalize(),_i=nn.clone().multiplyScalar(ua.x*(Nt?0:.62)).add(tn.clone().multiplyScalar(ua.y*(Nt?0:.42))),qn=Xt?new j:tn.clone().multiplyScalar(Math.sin(Jt*.45)*.12),mn=1/iR;Ui&&ti<1?ti=Math.min(1,ti+mn*bt):!Ui&&ti>0&&(ti=Math.max(0,ti-mn*bt));const Be=ti<.5?4*ti*ti*ti:1-Math.pow(-2*ti+2,3)/2,Ke=bn.smoothstep(Be,.18,1),qe=ua.x*(Nt?0:15.4)*Ke,gn=ua.y*(Nt?0:9.2)*Ke;jt.position.copy(Nn).add(new j(Math.sin(Wn)*6.8+qe*.2,Ja*2.4+gn*.18,Math.cos(Wn)*3.6-qe*.13)),ve.position.copy(Nn).add(new j(-Math.sin(Wn)*3.2,Ja*.9,Math.cos(Wn)*2.1)),Se.position.set(Nn.x+700+qe*2.8+Math.sin(Wn)*52,Nn.y+290+gn*1.35+Ja*28,Nn.z-130-qe*1.3+Math.cos(Wn)*30),$e.position.set(Nn.x-470-qe*.82-Math.sin(Wn)*16,Nn.y+35+gn*.22+Ja*10,Nn.z+360+qe*.6-Math.cos(Wn)*12);const Oi=la.clone().sub(Nn).applyQuaternion(new Xs().setFromEuler(new ia(Ja,Wn,0,"YXZ"))),gs=bn.clamp(Oi.length()+Zs,260,860);Oi.setLength(gs);const La=Nn.clone().add(Oi).add(new j(qe,gn*.84,qe*.58)),Ua=Ao.clone().add(new j(qe*.11,gn*.095,qe*.085)),It=new Xs;if(Be>.01){he(Be>.26),J.fog instanceof eu&&(J.fog.near=bn.lerp(38,9999,Be),J.fog.far=bn.lerp(230,1e4,Be));const ye=new ue(987671),Qe=new ue(132106);J.background.copy(ye).lerp(Qe,Be),Ut.intensity=bn.lerp(.05,.002,Be),Pt.intensity=bn.lerp(.08,.007,Be),Se.intensity=bn.lerp(0,Nt?4.6:8.6,Be),$e.intensity=bn.lerp(0,Nt?.02:.03,Be),vt.toneMappingExposure=bn.lerp(Nt?.76:.72,Nt?.75:.76,Be),[sa,Ni].forEach(li=>{li.emissive.set(3359829),li.emissiveIntensity=0}),sa.envMapIntensity=bn.lerp(.74,.04,Be),Ni.envMapIntensity=bn.lerp(.08,.01,Be),kn.color.set(0).lerp(new ue(16777215),Be),kn.toneMapped=Be>.5,kn.fog=Be>.5,kn.emissive.set(16777215),kn.emissiveIntensity=bn.lerp(1,.02,Be),kn.envMapIntensity=bn.lerp(0,.03,Be)}else he(!1),Ut.intensity=.05,Pt.intensity=.08,Se.intensity=0,$e.intensity=0,vt.toneMappingExposure=Nt?.76:.72,J.background.set(987671),[sa,Ni].forEach(ye=>{ye.emissive.set(0),ye.emissiveIntensity=0}),sa.envMapIntensity=.74,Ni.envMapIntensity=.08,kn.color.set(0),kn.toneMapped=!1,kn.fog=!1,kn.emissive.set(16777215),kn.emissiveIntensity=1,kn.envMapIntensity=0;const Pn=tn.clone().multiplyScalar(-Wm*.2),qi=Bt.clone().add(Pn).add(_i).add(qn),ts=ge.clone().add(Pn).add(_i.multiplyScalar(.22));if(Be>.99){if(Mt.position.copy(La),Mt.lookAt(Ua),Math.abs($a)>1e-4){const ye=Ua.clone().sub(Mt.position).normalize();It.setFromAxisAngle(ye,$a),Mt.quaternion.multiply(It)}}else if(Be>.001){Mt.position.lerpVectors(qi,La,Be);const ye=ts.clone().lerp(Ua,Be);if(Mt.lookAt(ye),Math.abs($a)>1e-4){const Qe=ye.clone().sub(Mt.position).normalize();It.setFromAxisAngle(Qe,$a*Be),Mt.quaternion.multiply(It)}}else Mt.position.copy(qi),Yl.position.copy(Mt.position),Yl.lookAt(ts),Mt.quaternion.slerp(Yl.quaternion,1-Math.exp(-8.1*bt));const vi=.94+Math.sin(Jt*.23)*.06,Oa=ge.clone().add(Pn);Yt.position.copy(Mt.position).add(tn.clone().multiplyScalar(2.9)).add(nn.clone().multiplyScalar(2.1)).add(Ye.clone().multiplyScalar(-2.2)),Wt.position.copy(Oa).add(nn.clone().multiplyScalar(2.5)).add(tn.clone().multiplyScalar(-.9)),Yt.intensity=(Nt?14:21)*vi,le.position.copy(Mt.position).add(tn.clone().multiplyScalar(2)).add(nn.clone().multiplyScalar(-2.4)).add(Ye.clone().multiplyScalar(-1.1)),Gt.position.copy(Oa).add(nn.clone().multiplyScalar(-2)).add(tn.clone().multiplyScalar(-1.4)),le.intensity=(Nt?5:8)*vi,de.position.copy(Mt.position).add(tn.clone().multiplyScalar(1.4)).add(Ye.clone().multiplyScalar(2.8)).add(nn.clone().multiplyScalar(.6)),Qt.position.copy(Oa).add(tn.clone().multiplyScalar(-.8)),de.intensity=(Nt?4:6.2)*vi,qt.forEach(ye=>{const Qe=ye.userData;if(!Qe||!Qe.shading||!Qe.material)return;const li=Qe.shading,jn=Qe.material,Fi=Qe.video,Oe=Qe;let Ia=1;li.lighting?.flicker_sync&&Fi&&Fi.readyState>=3&&(Ia=.88+Math.sin(Jt*22)*.1*Math.sin(Jt*6.7));let nr=1;if(li.movement_reaction?.type==="viewing_angle_fade"){ql.set(0,0,0),ye.getWorldPosition(ql),Uo.set(0,0,1).applyQuaternion(ye.quaternion),er.copy(Mt.position).sub(ql).normalize();const ci=Uo,ji=er,ir=Math.max(0,ci.dot(ji)),Pa=li.movement_reaction.cone_angle_degrees===60?3:1.5;nr=Math.pow(ir,Pa)}const Bi=Qe.baseEmissive*Ia*nr;if(jn.emissiveIntensity=Bi,Oe.bounceLights&&Oe.bounceLights.length>0){const ci=Oe.bounceSampleCtx,ji=Oe.bounceSampleCanvas;if(Fi&&ci&&ji&&(Oe.bounceNextSampleAt??0)<=Jt){const es=PR(Fi,ji,ci);if(es){Oe.bounceTargetColor||(Oe.bounceTargetColor=es.color.clone());const Oo=es.color.clone().lerp(new ue(1,.97,.93),.18);Oe.bounceTargetColor.copy(Oo);const Io=bn.clamp(.22+es.luminance*1.9,.22,2.25);Oe.bounceTargetIntensity=(Oe.bounceBaseIntensity??5)*Io*(.25+Bi*1.25)}Oe.bounceNextSampleAt=Jt+1/(Nt?2:4)}else Fi||(Oe.bounceTargetIntensity=(Oe.bounceBaseIntensity??5)*(.22+Bi*1.1));const ir=Oe.bounceTargetIntensity??0,Pa=Oe.bounceCurrentIntensity??0;Oe.bounceCurrentIntensity=bn.lerp(Pa,ir,1-Math.exp(-6.2*bt)),Oe.bounceCurrentColor||(Oe.bounceCurrentColor=(Oe.bounceTargetColor??new ue(1,1,1)).clone()),Oe.bounceTargetColor&&Oe.bounceCurrentColor.lerp(Oe.bounceTargetColor,1-Math.exp(-5.4*bt)),Oe.bounceLights.forEach((es,Oo)=>{const Io=Math.max(1,Oe.bounceLights.length-1),vh=1-Oo/Io*.34;es.color.copy(Oe.bounceCurrentColor),es.intensity=(Oe.bounceCurrentIntensity??0)*vh})}}),Ti.forEach(({mesh:ye,basePosition:Qe,strength:li})=>{const jn=ye.parent;if(!jn)return;const Fi=jn.worldToLocal(Mt.position.clone()),Oe=bn.clamp(Fi.x*.008,-.18,.18)*li,Ia=bn.clamp(Fi.y*.006,-.14,.14)*li;ye.position.x=Qe.x+Oe,ye.position.y=Qe.y+Ia}),Da.forEach((ye,Qe)=>{const{mesh:li,card:jn}=ye;li.lookAt(Mt.position);const Fi=Qe*.7,Oe=ye.baseY+Math.sin(Jt*Q2+Fi)*K2;li.position.y=Oe,li.rotateZ(J2*bt);const Ia=li.material;Ia.emissiveIntensity=1+Math.sin(Jt*2+Qe)*.4;const nr=!Nt&&ye.expanded?1:0,Bi=1/eR;ye.expandT<nr?ye.expandT=Math.min(1,ye.expandT+Bi*bt):ye.expandT>nr&&(ye.expandT=Math.max(0,ye.expandT-Bi*bt));const ci=ye.expandT,ji=ci<.5?4*ci*ci*ci:1-Math.pow(-2*ci+2,3)/2;if(!Nt&&ji>.001){jn.visible=!0,jn.position.copy(li.position),jn.position.y-=qm+.3,jn.lookAt(Mt.position),jn.scale.setScalar(ji);const ir=jn.children[0].material;ir.opacity=ji}else jn.visible=!1;Ia.opacity=Nt?1:1-ji*.4});const En=Qs.y+Math.sin(Jt*.8)*.35;ca.lookAt(Mt.position),ca.position.y=En,ca.rotateZ(.15*bt),ms.emissiveIntensity=1.2+Math.sin(Jt*1.5)*.5,Js.lookAt(Mt.position),Js.position.y=En;const Ii=.72+Math.sin(Jt*2.35)*.28,xi=bn.smoothstep(Be,.2,.95);$s.visible=xi>.001,kr.visible=xi>.001,$s.scale.setScalar(.88+Ii*.28),Vr.emissiveIntensity=xi*(.48+Ii*.45),No.intensity=xi*(Nt?4.6:7.4)*Ii,kr.lookAt(Mt.position),kr.scale.setScalar(.95+Ii*.18),kl.opacity=xi*(.2+Ii*.32);let ei=t.current[0]?.meta.id??(h.length>0?h[0].id:""),Pi=Number.POSITIVE_INFINITY;t.current.forEach(ye=>{let Qe=Math.abs(ne-ye.progress);Qe>.5&&(Qe=1-Qe),Qe<Pi&&(Pi=Qe,ei=ye.meta.id)}),ei!==Su&&(Su=ei,g(ei)),vt.render(J,Mt),requestAnimationFrame(jl)};jl(),et=()=>{c.current=null,wt(),vt.domElement.removeEventListener("pointerdown",fu),vt.domElement.removeEventListener("pointermove",du),vt.domElement.removeEventListener("pointerleave",hu),vt.domElement.removeEventListener("pointerup",Lo),vt.domElement.removeEventListener("pointercancel",Lo),vt.domElement.removeEventListener("contextmenu",Wl),vt.domElement.removeEventListener("wheel",pu),vt.domElement.removeEventListener("touchstart",gu),vt.domElement.removeEventListener("touchmove",_u),window.removeEventListener("resize",vu),window.removeEventListener("keydown",mu),D.contains(vt.domElement)&&D.removeChild(vt.domElement),qt.forEach(bt=>{const Jt=bt.userData?.video;Jt&&(Jt.pause(),Jt.src="",Jt.load())}),$n.forEach(bt=>{bt.pause(),bt.src="",bt.load()}),gi.forEach(bt=>bt()),In.forEach(bt=>bt.dispose?.()),Xn.forEach(bt=>bt.dispose()),oa.dispose(),To.dispose(),pe.albedo.dispose(),pe.normal.dispose(),pe.roughness.dispose(),pe.ao.dispose(),xn.albedo.dispose(),xn.normal.dispose(),xn.roughness.dispose(),xn.ao.dispose(),On.albedo.dispose(),On.normal.dispose(),On.roughness.dispose(),On.ao.dispose(),ce.forEach(bt=>bt.dispose()),Ot.texture.dispose(),Ot.dispose(),W.dispose(),sa.dispose(),Ni.dispose(),Ka.dispose(),kn.dispose(),Yi.dispose(),oi.dispose(),Cn.dispose(),Ta.dispose(),bi.dispose(),Aa.dispose(),mi.dispose(),yn.dispose(),An.dispose(),Ra.dispose(),zr.dispose(),ra.dispose(),Li.dispose(),ot.dispose(),vt.dispose()}})(),()=>{Q=!0,c.current=null,et()}},[h,fn,Kt,wt]),Tt.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Tt.jsx("div",{ref:r,className:"absolute inset-0"}),Tt.jsx(FR,{}),Tt.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[Tt.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[Tt.jsx("button",{type:"button",onClick:()=>q("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${U==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":U==="nb",children:"NO"}),Tt.jsx("button",{type:"button",onClick:()=>q("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${U==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":U==="en",children:"EN"})]}),Tt.jsx("button",{type:"button",onClick:xt,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":S,children:S?"get in":"get out"})]}),y||w?Tt.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:y?ft.loadingPanels:ft.panelsFallback}):null,S?null:Tt.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Tt.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:ft.siteName}),Tt.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[ft.activeInstallation,": ",P]})]}),gt&&!S?Tt.jsx("div",{className:"pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 md:hidden",children:Tt.jsxs("section",{className:"pointer-events-auto w-full max-w-[30rem] rounded-2xl border border-[#7fd9ff]/28 bg-[#061324]/94 px-4 py-3 text-[#e6f4ff] shadow-[0_22px_56px_rgba(0,0,0,0.62)] backdrop-blur",children:[Tt.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Tt.jsx("h2",{className:"text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#9edfff]",children:gt.title}),Tt.jsx("button",{type:"button",onClick:wt,className:"pointer-events-auto rounded-full border border-[#7fd9ff]/35 px-3 py-[0.28rem] text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#d7f0ff] transition active:translate-y-[1px]",children:U==="nb"?"Lukk":"Close"})]}),Tt.jsx("p",{className:"mt-2 max-h-[52svh] overflow-y-auto whitespace-pre-line text-[0.83rem] leading-relaxed text-[#d9e7f4]",children:gt.body})]})}):null,S?Tt.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Tt.jsx("style",{children:`
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
              @keyframes outsideLinkFloatD {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -16px, 0px); }
              }
              @keyframes outsideCorePulse {
                0%, 100% { opacity: 0.88; text-shadow: 0 0 20px rgba(171, 194, 232, 0.34); }
                50% { opacity: 1; text-shadow: 0 0 28px rgba(171, 194, 232, 0.58); }
              }
              @keyframes outsideHexRoomSpin {
                0% { transform: translate(-50%, -50%) rotateY(0deg); }
                100% { transform: translate(-50%, -50%) rotateY(0deg); }
              }
              @keyframes glyffFloatA {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -8px, 0px); }
              }
              @keyframes glyffFloatB {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -11px, 0px); }
              }
              @keyframes glyffFloatC {
                0%, 100% { transform: translate3d(0px, 0px, 0px); }
                50% { transform: translate3d(0px, -6px, 0px); }
              }
            `}),L==="menu"?Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:ft.siteName}),Tt.jsx("button",{type:"button",onClick:()=>N("videos"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Tt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:ft.outsideVideos})}),Tt.jsx("button",{type:"button",onClick:()=>N("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Tt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:ft.outsideSignatures})}),Tt.jsx("button",{type:"button",onClick:()=>N("glyphwall"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[1.5rem] translate-y-[5.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[4.8rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Tt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatD 8.1s ease-in-out infinite"},children:ft.outsideGlyphWall})})]}):null,L!=="menu"?Tt.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[Tt.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[Tt.jsx("button",{type:"button",onClick:()=>N("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:ft.outsideBack}),L==="videos"?Tt.jsx(Tt.Fragment,{children:Tt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:ft.outsideVideosTitle})}):null,L==="signatures"?Tt.jsx(Tt.Fragment,{children:Tt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:ft.outsideSignaturesTitle})}):null,L==="news"?Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:ft.outsideNewsTitle}),Tt.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:ft.outsideNewsBody})]}):null,L==="glyphwall"?Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:ft.outsideGlyphWallTitle}),ft.outsideGlyphWallBody?Tt.jsx("p",{className:"mt-2 max-w-4xl text-sm leading-relaxed text-[#b8cbe6] md:text-base",children:ft.outsideGlyphWallBody}):null]}):null]}),L==="signatures"?Tt.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:Tt.jsxs("form",{onSubmit:Zt,className:"max-w-2xl rounded-2xl border border-[#8fb5e8]/38 bg-[#0b1629]/82 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-6",children:[Tt.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[Tt.jsxs("label",{className:"block",children:[Tt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:U==="nb"?"Navn":"Name"}),Tt.jsx("input",{type:"text",required:!0,autoComplete:"name",value:st,onChange:D=>lt(D.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Tt.jsxs("label",{className:"block",children:[Tt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:U==="nb"?"E-post":"Email"}),Tt.jsx("input",{type:"email",required:!0,autoComplete:"email",value:Z,onChange:D=>I(D.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]})]}),Tt.jsxs("label",{className:"mt-3 block",children:[Tt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:U==="nb"?"Melding":"Message"}),Tt.jsx("textarea",{required:!0,rows:5,value:F,onChange:D=>ut(D.target.value),className:"mt-1 w-full resize-y rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Tt.jsx("button",{type:"submit",className:"mt-4 rounded-full border border-[#8fb5e8]/55 bg-[#122742]/85 px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e4efff] transition hover:bg-[#17365a]",children:U==="nb"?"Send melding":"Send message"})]})}):null,L==="news"?Tt.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[z?Tt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:ft.outsideNewsLoading}):null,!z&&O?Tt.jsx("p",{className:"text-sm text-[#ffb6b6]",children:O}):null,!z&&!O&&B.length===0?Tt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:ft.outsideNewsEmpty}):null,!z&&!O&&B.length>0?Tt.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:B.map(D=>{const Q=Date.parse(D.published_at),et=Number.isFinite(Q)?b.format(new Date(Q)):D.published_at;return Tt.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[Tt.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[D.source,et?` · ${et}`:""]}),Tt.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:D.title}),D.snippet?Tt.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:D.snippet}):null,Tt.jsx("a",{href:D.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:U==="nb"?"Åpne sak":"Open story"})]},`${D.url}-${D.title}`)})}):null]}):null,L==="glyphwall"?Tt.jsx("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:Tt.jsxs("section",{className:"relative h-full","data-rl-story-version":"rl-story-v1","data-rl-story-name":"replacement-anxiety-pattern",children:[Tt.jsx("div",{className:"relative h-full overflow-auto",children:Tt.jsx("div",{className:"grid grid-cols-3 gap-y-6 pb-6 sm:grid-cols-4 md:grid-cols-6 md:gap-y-7 lg:grid-cols-8 xl:grid-cols-10",children:zt.map(D=>Tt.jsxs("article",{className:"relative flex items-center justify-center","data-rl-story-index":D.index+1,"data-rl-canonical":D.canonical,"data-rl-id":D.id,"data-rl-phase":D.phase,children:[Tt.jsx("div",{className:"relative h-[7rem] w-[7rem] overflow-hidden rounded-full border border-[#86b5eb]/34",style:{background:"radial-gradient(circle_at_45%_42%,rgba(132,174,233,0.2),rgba(12,22,40,0.92)_72%)",boxShadow:"0 0 20px rgba(98,163,236,0.24), inset 0 0 18px rgba(0,0,0,0.36), inset 0 1px 0 rgba(208,232,255,0.24)",animation:D.index%3===0?"glyffFloatA 7.8s ease-in-out infinite":D.index%3===1?"glyffFloatB 9.2s ease-in-out infinite":"glyffFloatC 8.4s ease-in-out infinite",animationDelay:`${D.index%11*.16}s`},children:D.previewDataUrl?Tt.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-full bg-[#11213c]",children:[Tt.jsx("img",{src:D.previewDataUrl,alt:`Glyff ${D.index+1}`,className:"absolute inset-0 h-full w-full object-cover opacity-88 mix-blend-screen",loading:"lazy"}),Tt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_19%_18%,rgba(198,228,255,0.22),rgba(198,228,255,0)_42%),radial-gradient(circle_at_82%_79%,rgba(0,0,0,0.26),rgba(0,0,0,0)_56%)]"})]}):Tt.jsx("div",{className:"h-full w-full rounded-full bg-[#11213c]"})}),Tt.jsx("span",{className:"sr-only",children:D.canonical})]},D.id))})}),Tt.jsx("pre",{className:"sr-only","data-rl-story-payload":!0,children:nt})]})}):null,L==="videos"?Tt.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:Re,onTouchStart:ke,onTouchEnd:_e,children:Tt.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[Tt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-black"}),Tt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_120px_rgba(0,0,0,0.92)]"}),Tt.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#e5e7eb]",children:[V+1," / ",sd.length]}),Tt.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.35)]"}),Tt.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${lR.toFixed(3)}rem) rotateY(${-V*cR}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[Tt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/10",style:{width:`${Zf.toFixed(3)}rem`,height:`${Zf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${tS.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,1) 100%)",boxShadow:"none"}}),Tt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/8",style:{width:`${Zf.toFixed(3)}rem`,height:`${Zf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${tS.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 100%)"}}),sd.map((D,Q)=>Tt.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-white/10 bg-black shadow-[0_22px_44px_rgba(0,0,0,0.86)]",style:{width:`${(dy+oR).toFixed(3)}rem`,height:`${z0}rem`,transform:`translate(-50%, -50%) rotateY(${Q*60}deg) translateZ(-${hy.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:Tt.jsx("video",{ref:et=>{l.current[Q]=et},src:D.video,poster:D.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${D.video}-${Q}`))]})]})}):null]}):null]}):null]})}function zR(){return Tt.jsx("div",{className:"min-h-screen bg-[#080604]",children:Tt.jsx(BR,{})})}XM.createRoot(document.getElementById("root")).render(Tt.jsx(ie.StrictMode,{children:Tt.jsx(zR,{})}));
