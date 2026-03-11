(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Wp={exports:{}},yc={};var Uv;function EM(){if(Uv)return yc;Uv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return yc.Fragment=t,yc.jsx=i,yc.jsxs=i,yc}var Lv;function bM(){return Lv||(Lv=1,Wp.exports=EM()),Wp.exports}var Lt=bM(),Yp={exports:{}},ye={};var Ov;function TM(){if(Ov)return ye;Ov=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function S(I,q,mt){this.props=I,this.context=q,this.refs=M,this.updater=mt||b}S.prototype.isReactComponent={},S.prototype.setState=function(I,q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,q,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=S.prototype;function L(I,q,mt){this.props=I,this.context=q,this.refs=M,this.updater=mt||b}var N=L.prototype=new C;N.constructor=L,D(N,S.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(I,q,mt){var Ct=mt.ref;return{$$typeof:r,type:I,key:q,ref:Ct!==void 0?Ct:null,props:mt}}function dt(I,q){return U(I.type,q,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function et(I){var q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(mt){return q[mt]})}var ot=/\/+/g;function lt(I,q){return typeof I=="object"&&I!==null&&I.key!=null?et(""+I.key):q.toString(36)}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(q){I.status==="pending"&&(I.status="fulfilled",I.value=q)},function(q){I.status==="pending"&&(I.status="rejected",I.reason=q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,q,mt,Ct,Wt){var nt=typeof I;(nt==="undefined"||nt==="boolean")&&(I=null);var xt=!1;if(I===null)xt=!0;else switch(nt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(I.$$typeof){case r:case t:xt=!0;break;case _:return xt=I._init,O(xt(I._payload),q,mt,Ct,Wt)}}if(xt)return Wt=Wt(I),xt=Ct===""?"."+lt(I,0):Ct,F(Wt)?(mt="",xt!=null&&(mt=xt.replace(ot,"$&/")+"/"),O(Wt,q,mt,"",function(ne){return ne})):Wt!=null&&(G(Wt)&&(Wt=dt(Wt,mt+(Wt.key==null||I&&I.key===Wt.key?"":(""+Wt.key).replace(ot,"$&/")+"/")+xt)),q.push(Wt)),1;xt=0;var wt=Ct===""?".":Ct+":";if(F(I))for(var Zt=0;Zt<I.length;Zt++)Ct=I[Zt],nt=wt+lt(Ct,Zt),xt+=O(Ct,q,mt,nt,Wt);else if(Zt=y(I),typeof Zt=="function")for(I=Zt.call(I),Zt=0;!(Ct=I.next()).done;)Ct=Ct.value,nt=wt+lt(Ct,Zt++),xt+=O(Ct,q,mt,nt,Wt);else if(nt==="object"){if(typeof I.then=="function")return O(Z(I),q,mt,Ct,Wt);throw q=String(I),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return xt}function P(I,q,mt){if(I==null)return I;var Ct=[],Wt=0;return O(I,Ct,"","",function(nt){return q.call(mt,nt,Wt++)}),Ct}function J(I){if(I._status===-1){var q=I._result;q=q(),q.then(function(mt){(I._status===0||I._status===-1)&&(I._status=1,I._result=mt)},function(mt){(I._status===0||I._status===-1)&&(I._status=2,I._result=mt)}),I._status===-1&&(I._status=0,I._result=q)}if(I._status===1)return I._result.default;throw I._result}var pt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},_t={map:P,forEach:function(I,q,mt){P(I,function(){q.apply(this,arguments)},mt)},count:function(I){var q=0;return P(I,function(){q++}),q},toArray:function(I){return P(I,function(q){return q})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ye.Activity=v,ye.Children=_t,ye.Component=S,ye.Fragment=i,ye.Profiler=l,ye.PureComponent=L,ye.StrictMode=s,ye.Suspense=m,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ye.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},ye.cache=function(I){return function(){return I.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(I,q,mt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ct=D({},I.props),Wt=I.key;if(q!=null)for(nt in q.key!==void 0&&(Wt=""+q.key),q)!T.call(q,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&q.ref===void 0||(Ct[nt]=q[nt]);var nt=arguments.length-2;if(nt===1)Ct.children=mt;else if(1<nt){for(var xt=Array(nt),wt=0;wt<nt;wt++)xt[wt]=arguments[wt+2];Ct.children=xt}return U(I.type,Wt,Ct)},ye.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ye.createElement=function(I,q,mt){var Ct,Wt={},nt=null;if(q!=null)for(Ct in q.key!==void 0&&(nt=""+q.key),q)T.call(q,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Wt[Ct]=q[Ct]);var xt=arguments.length-2;if(xt===1)Wt.children=mt;else if(1<xt){for(var wt=Array(xt),Zt=0;Zt<xt;Zt++)wt[Zt]=arguments[Zt+2];Wt.children=wt}if(I&&I.defaultProps)for(Ct in xt=I.defaultProps,xt)Wt[Ct]===void 0&&(Wt[Ct]=xt[Ct]);return U(I,nt,Wt)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(I){return{$$typeof:d,render:I}},ye.isValidElement=G,ye.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:J}},ye.memo=function(I,q){return{$$typeof:p,type:I,compare:q===void 0?null:q}},ye.startTransition=function(I){var q=z.T,mt={};z.T=mt;try{var Ct=I(),Wt=z.S;Wt!==null&&Wt(mt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(B,pt)}catch(nt){pt(nt)}finally{q!==null&&mt.types!==null&&(q.types=mt.types),z.T=q}},ye.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ye.use=function(I){return z.H.use(I)},ye.useActionState=function(I,q,mt){return z.H.useActionState(I,q,mt)},ye.useCallback=function(I,q){return z.H.useCallback(I,q)},ye.useContext=function(I){return z.H.useContext(I)},ye.useDebugValue=function(){},ye.useDeferredValue=function(I,q){return z.H.useDeferredValue(I,q)},ye.useEffect=function(I,q){return z.H.useEffect(I,q)},ye.useEffectEvent=function(I){return z.H.useEffectEvent(I)},ye.useId=function(){return z.H.useId()},ye.useImperativeHandle=function(I,q,mt){return z.H.useImperativeHandle(I,q,mt)},ye.useInsertionEffect=function(I,q){return z.H.useInsertionEffect(I,q)},ye.useLayoutEffect=function(I,q){return z.H.useLayoutEffect(I,q)},ye.useMemo=function(I,q){return z.H.useMemo(I,q)},ye.useOptimistic=function(I,q){return z.H.useOptimistic(I,q)},ye.useReducer=function(I,q,mt){return z.H.useReducer(I,q,mt)},ye.useRef=function(I){return z.H.useRef(I)},ye.useState=function(I){return z.H.useState(I)},ye.useSyncExternalStore=function(I,q,mt){return z.H.useSyncExternalStore(I,q,mt)},ye.useTransition=function(){return z.H.useTransition()},ye.version="19.2.4",ye}var Iv;function Km(){return Iv||(Iv=1,Yp.exports=TM()),Yp.exports}var le=Km(),qp={exports:{}},Mc={},jp={exports:{}},Zp={};var Pv;function AM(){return Pv||(Pv=1,(function(r){function t(O,P){var J=O.length;O.push(P);t:for(;0<J;){var pt=J-1>>>1,_t=O[pt];if(0<l(_t,P))O[pt]=P,O[J]=_t,J=pt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var P=O[0],J=O.pop();if(J!==P){O[0]=J;t:for(var pt=0,_t=O.length,I=_t>>>1;pt<I;){var q=2*(pt+1)-1,mt=O[q],Ct=q+1,Wt=O[Ct];if(0>l(mt,J))Ct<_t&&0>l(Wt,mt)?(O[pt]=Wt,O[Ct]=J,pt=Ct):(O[pt]=mt,O[q]=J,pt=q);else if(Ct<_t&&0>l(Wt,J))O[pt]=Wt,O[Ct]=J,pt=Ct;else break t}}return P}function l(O,P){var J=O.sortIndex-P.sortIndex;return J!==0?J:O.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,y=!1,b=!1,D=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var P=i(p);P!==null;){if(P.callback===null)s(p);else if(P.startTime<=O)s(p),P.sortIndex=P.expirationTime,t(m,P);else break;P=i(p)}}function F(O){if(D=!1,N(O),!b)if(i(m)!==null)b=!0,B||(B=!0,et());else{var P=i(p);P!==null&&Z(F,P.startTime-O)}}var B=!1,z=-1,T=5,U=-1;function dt(){return M?!0:!(r.unstable_now()-U<T)}function G(){if(M=!1,B){var O=r.unstable_now();U=O;var P=!0;try{t:{b=!1,D&&(D=!1,C(z),z=-1),y=!0;var J=g;try{e:{for(N(O),v=i(m);v!==null&&!(v.expirationTime>O&&dt());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,g=v.priorityLevel;var _t=pt(v.expirationTime<=O);if(O=r.unstable_now(),typeof _t=="function"){v.callback=_t,N(O),P=!0;break e}v===i(m)&&s(m),N(O)}else s(m);v=i(m)}if(v!==null)P=!0;else{var I=i(p);I!==null&&Z(F,I.startTime-O),P=!1}}break t}finally{v=null,g=J,y=!1}P=void 0}}finally{P?et():B=!1}}}var et;if(typeof L=="function")et=function(){L(G)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,lt=ot.port2;ot.port1.onmessage=G,et=function(){lt.postMessage(null)}}else et=function(){S(G,0)};function Z(O,P){z=S(function(){O(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var J=g;g=P;try{return O()}finally{g=J}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var J=g;g=O;try{return P()}finally{g=J}},r.unstable_scheduleCallback=function(O,P,J){var pt=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pt+J:pt):J=pt,O){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=J+_t,O={id:_++,callback:P,priorityLevel:O,startTime:J,expirationTime:_t,sortIndex:-1},J>pt?(O.sortIndex=J,t(p,O),i(m)===null&&O===i(p)&&(D?(C(z),z=-1):D=!0,Z(F,J-pt))):(O.sortIndex=_t,t(m,O),b||y||(b=!0,B||(B=!0,et()))),O},r.unstable_shouldYield=dt,r.unstable_wrapCallback=function(O){var P=g;return function(){var J=g;g=P;try{return O.apply(this,arguments)}finally{g=J}}}})(Zp)),Zp}var Fv;function RM(){return Fv||(Fv=1,jp.exports=AM()),jp.exports}var Kp={exports:{}},pi={};var Bv;function CM(){if(Bv)return pi;Bv=1;var r=Km();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return pi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,pi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},pi.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},pi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},pi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},pi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},pi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},pi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},pi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},pi.requestFormReset=function(m){s.d.r(m)},pi.unstable_batchedUpdates=function(m,p){return m(p)},pi.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},pi.useFormStatus=function(){return f.H.useHostTransitionStatus()},pi.version="19.2.4",pi}var zv;function wM(){if(zv)return Kp.exports;zv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Kp.exports=CM(),Kp.exports}var Hv;function DM(){if(Hv)return Mc;Hv=1;var r=RM(),t=Km(),i=wM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=h;break}if(A===o){x=!0,o=u,a=h;break}A=A.sibling}if(!x){for(A=h.child;A;){if(A===a){x=!0,a=h,o=u;break}if(A===o){x=!0,o=h,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var Z=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pt=[],_t=-1;function I(e){return{current:e}}function q(e){0>_t||(e.current=pt[_t],pt[_t]=null,_t--)}function mt(e,n){_t++,pt[_t]=e.current,e.current=n}var Ct=I(null),Wt=I(null),nt=I(null),xt=I(null);function wt(e,n){switch(mt(nt,n),mt(Wt,e),mt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ev(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ev(n),e=nv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Ct),mt(Ct,e)}function Zt(){q(Ct),q(Wt),q(nt)}function ne(e){e.memoizedState!==null&&mt(xt,e);var n=Ct.current,a=nv(n,e.type);n!==a&&(mt(Wt,e),mt(Ct,a))}function ce(e){Wt.current===e&&(q(Ct),q(Wt)),xt.current===e&&(q(xt),_c._currentValue=J)}var fn,Ce;function Re(e){if(fn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);fn=n&&n[1]||"",Ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fn+e+Ce}var ze=!1;function ge(e,n){if(!e||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ft){var ut=ft}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ft){ut=ft}e.call(yt.prototype)}}else{try{throw Error()}catch(ft){ut=ft}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ft){if(ft&&ut&&typeof ft.stack=="string")return[ft.stack,ut.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],A=h[1];if(x&&A){var H=x.split(`
`),rt=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===rt.length)for(o=H.length-1,u=rt.length-1;1<=o&&0<=u&&H[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==rt[u]){var gt=`
`+H[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Re(a):""}function _n(e,n){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re("Lazy");case 13:return e.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return ge(e.type,!1);case 11:return ge(e.type.render,!1);case 1:return ge(e.type,!0);case 31:return Re("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=_n(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var vt=Object.prototype.hasOwnProperty,Ht=r.unstable_scheduleCallback,Gt=r.unstable_cancelCallback,It=r.unstable_shouldYield,w=r.unstable_requestPaint,E=r.unstable_now,X=r.unstable_getCurrentPriorityLevel,$=r.unstable_ImmediatePriority,it=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,bt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,te=r.log,oe=r.unstable_setDisableYieldValue,Tt=null,At=null;function Vt(e){if(typeof te=="function"&&oe(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Tt,e)}catch{}}var Pt=Math.clz32?Math.clz32:k,Ft=Math.log,me=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Ft(e)/me|0)|0}var Dt=256,Rt=262144,zt=4194304;function Et(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Et(o):(x&=A,x!==0?u=Et(x):a||(a=A&~e,a!==0&&(u=Et(a))))):(A=o&~h,A!==0?u=Et(A):x!==0?u=Et(x):a||(a=o&~e,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Yt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function je(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Ne(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ui(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,rt=e.hiddenUpdates;for(a=x&~a;0<a;){var gt=31-Pt(a),yt=1<<gt;A[gt]=0,H[gt]=-1;var ut=rt[gt];if(ut!==null)for(rt[gt]=null,gt=0;gt<ut.length;gt++){var ft=ut[gt];ft!==null&&(ft.lane&=-536870913)}a&=~yt}o!==0&&ka(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function ka(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function cs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Or(e,n){var a=n&-n;return a=(a&42)!==0?1:us(a),(a&(e.suspendedLanes|n))!==0?0:a}function us(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bi(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Tv(e.type))}function Xa(e,n){var a=P.p;try{return P.p=e,n()}finally{P.p=a}}var vi=Math.random().toString(36).slice(2),gn="__reactFiber$"+vi,vn="__reactProps$"+vi,xa="__reactContainer$"+vi,Ri="__reactEvents$"+vi,Ir="__reactListeners$"+vi,Pr="__reactHandles$"+vi,Fr="__reactResources$"+vi,Wa="__reactMarker$"+vi;function qs(e){delete e[gn],delete e[vn],delete e[Ri],delete e[Ir],delete e[Pr]}function Sa(e){var n=e[gn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xa]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=cv(e);e!==null;){if(a=e[gn])return a;e=cv(e)}return n}e=a,a=e.parentNode}return null}function ya(e){if(e=e[gn]||e[xa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ma(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[Fr];return n||(n=e[Fr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Wa]=!0}var ct=new Set,at={};function tt(e,n){Bt(e,n),Bt(e+"Capture",n)}function Bt(e,n){for(at[e]=n,e=0;e<n.length;e++)ct.add(n[e])}var qt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nt={},Kt={};function re(e){return vt.call(Kt,e)?!0:vt.call(Nt,e)?!1:qt.test(e)?Kt[e]=!0:(Nt[e]=!0,!1)}function pe(e,n,a){if(re(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function he(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function jt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function we(e){if(!e._valueTracker){var n=sn(e)?"checked":"value";e._valueTracker=hn(e,n,""+e[n])}}function Dn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=sn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jn=/[\n"\\]/g;function xe(e){return e.replace(jn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ii(e,n,a,o,u,h,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?zi(e,x,_e(n)):a!=null?zi(e,x,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_e(A):e.removeAttribute("name")}function xi(e,n,a,o,u,h,x,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){we(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),we(e)}function zi(e,n,a){n==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Si(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function We(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Z(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),we(e)}function Rn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ci(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pn(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ci(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Ci(e,h,n[h])}function Zn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ea(e){return hs.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yi(){}var ds=null;function ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,qa=null;function Mo(e){var n=ya(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(ii(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[vn]||null;if(!u)throw Error(s(90));ii(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Dn(o)}break t;case"textarea":We(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Si(e,!!a.multiple,n,!1)}}}var Eo=!1;function kn(e,n,a){if(Eo)return e(n,a);Eo=!0;try{var o=e(n);return o}finally{if(Eo=!1,(Ya!==null||qa!==null)&&(Vu(),Ya&&(n=Ya,e=qa,qa=Ya=null,Mo(n),e)))for(n=0;n<e.length;n++)Mo(e[n])}}function ms(e,n){var a=e.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=!1;if(ba)try{var js={};Object.defineProperty(js,"passive",{get:function(){Il=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Il=!1}var Hi=null,Pl=null,Zs=null;function bo(){if(Zs)return Zs;var e,n=Pl,a=n.length,o,u="value"in Hi?Hi.value:Hi.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return Zs=u.slice(e,1<o?1-o:void 0)}function Br(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function Hr(){return!1}function Nn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?zr:Hr,this.isPropagationStopped=Hr,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),n}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=Nn(gs),ta=v({},gs,{view:0,detail:0}),jc=Nn(ta),Ao,Gr,_s,Ta=v({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_s&&(_s&&e.type==="mousemove"?(Ao=e.screenX-_s.screenX,Gr=e.screenY-_s.screenY):Gr=Ao=0,_s=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Gr}}),Fl=Nn(Ta),Bl=v({},Ta,{dataTransfer:0}),Vr=Nn(Bl),zl=v({},ta,{relatedTarget:0}),Ro=Nn(zl),Hl=v({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Zc=Nn(Hl),Ks=v({},gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ja=Nn(Ks),Kc=v({},gs,{data:0}),Gl=Nn(Kc),Co={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $c(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jc[e])?!!n[e]:!1}function vs(){return $c}var tu=v({},ta,{key:function(e){if(e.key){var n=Co[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eu=Nn(tu),nu=v({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wo=Nn(nu),iu=v({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),Vl=Nn(iu),au=v({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),su=Nn(au),ru=v({},Ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ou=Nn(ru),Mt=v({},gs,{newState:0,oldState:0}),ee=Nn(Mt),ae=[9,13,27,32],Jt=ba&&"CompositionEvent"in window,kt=null;ba&&"documentMode"in document&&(kt=document.documentMode);var Se=ba&&"TextEvent"in window&&!kt,ke=ba&&(!Jt||kt&&8<kt&&11>=kt),Qe=" ",Je=!1;function fi(e,n){switch(e){case"keyup":return ae.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Fe(e,n){switch(e){case"compositionend":return hi(n);case"keypress":return n.which!==32?null:(Je=!0,Qe);case"textInput":return e=n.data,e===Qe&&Je?null:e;default:return null}}function rn(e,n){if(dn)return e==="compositionend"||!Jt&&fi(e,n)?(e=bo(),Zs=Pl=Hi=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ke&&n.locale!=="ko"?null:n.data;default:return null}}var Ze={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xn(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ze[e.type]:n==="textarea"}function Gi(e,n,a,o){Ya?qa?qa.push(o):qa=[o]:Ya=o,n=Zu(n,"onChange"),0<n.length&&(a=new To("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Aa=null,Di=null;function Za(e){Z_(e,0)}function Ot(e){var n=Ma(e);if(Dn(n))return e}function Un(e,n){if(e==="change")return n}var Ni=!1;if(ba){var ea;if(ba){var Kn="oninput"in document;if(!Kn){var na=document.createElement("div");na.setAttribute("oninput","return;"),Kn=typeof na.oninput=="function"}ea=Kn}else ea=!1;Ni=ea&&(!document.documentMode||9<document.documentMode)}function ia(){Aa&&(Aa.detachEvent("onpropertychange",Ra),Di=Aa=null)}function Ra(e){if(e.propertyName==="value"&&Ot(Di)){var n=[];Gi(n,Di,e,ps(e)),kn(Za,n)}}function Mi(e,n,a){e==="focusin"?(ia(),Aa=n,Di=a,Aa.attachEvent("onpropertychange",Ra)):e==="focusout"&&ia()}function ai(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ot(Di)}function Vi(e,n){if(e==="click")return Ot(n)}function Me(e,n){if(e==="input"||e==="change")return Ot(n)}function tn(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var en=typeof Object.is=="function"?Object.is:tn;function Qn(e,n){if(en(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!vt.call(n,u)||!en(e[u],n[u]))return!1}return!0}function ki(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xe(e,n){var a=ki(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ki(a)}}function Ka(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ka(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qt(e.document)}return n}function Qa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var aa=ba&&"documentMode"in document&&11>=document.documentMode,di=null,xs=null,Ss=null,Ca=!1;function Do(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ca||di==null||di!==Qt(o)||(o=di,"selectionStart"in o&&Qa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ss&&Qn(Ss,o)||(Ss=o,o=Zu(xs,"onSelect"),0<o.length&&(n=new To("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=di)))}function wa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},id={},b0={};ba&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function kr(e){if(id[e])return id[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in b0)return id[e]=n[a];return e}var T0=kr("animationend"),A0=kr("animationiteration"),R0=kr("animationstart"),iy=kr("transitionrun"),ay=kr("transitionstart"),sy=kr("transitioncancel"),C0=kr("transitionend"),w0=new Map,ad="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ad.push("scrollEnd");function Da(e,n){w0.set(e,n),tt(n,[e])}var lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},sa=[],No=0,sd=0;function cu(){for(var e=No,n=sd=No=0;n<e;){var a=sa[n];sa[n++]=null;var o=sa[n];sa[n++]=null;var u=sa[n];sa[n++]=null;var h=sa[n];if(sa[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&D0(a,u,h)}}function uu(e,n,a,o){sa[No++]=e,sa[No++]=n,sa[No++]=a,sa[No++]=o,sd|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function rd(e,n,a,o){return uu(e,n,a,o),fu(e)}function Xr(e,n){return uu(e,null,null,n),fu(e)}function D0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function fu(e){if(50<uc)throw uc=0,mp=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Uo={};function ry(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(e,n,a,o){return new ry(e,n,a,o)}function od(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ys(e,n){var a=e.alternate;return a===null?(a=Xi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function N0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hu(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")od(e)&&(x=1);else if(typeof e=="string")x=fM(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Xi(31,a,n,u),e.elementType=U,e.lanes=h,e;case D:return Wr(a.children,u,h,n);case M:x=8,u|=24;break;case S:return e=Xi(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case F:return e=Xi(13,a,n,u),e.elementType=F,e.lanes=h,e;case B:return e=Xi(19,a,n,u),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:x=10;break t;case C:x=9;break t;case N:x=11;break t;case z:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Xi(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Wr(e,n,a,o){return e=Xi(7,e,o,n),e.lanes=a,e}function ld(e,n,a){return e=Xi(6,e,null,n),e.lanes=a,e}function U0(e){var n=Xi(18,null,null,0);return n.stateNode=e,n}function cd(e,n,a){return n=Xi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var L0=new WeakMap;function ra(e,n){if(typeof e=="object"&&e!==null){var a=L0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},L0.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Lo=[],Oo=0,du=null,kl=0,oa=[],la=0,$s=null,Ja=1,$a="";function Ms(e,n){Lo[Oo++]=kl,Lo[Oo++]=du,du=e,kl=n}function O0(e,n,a){oa[la++]=Ja,oa[la++]=$a,oa[la++]=$s,$s=e;var o=Ja;e=$a;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var h=32-Pt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ja=1<<32-Pt(n)+u|a<<u|o,$a=h+e}else Ja=1<<h|a<<u|o,$a=e}function ud(e){e.return!==null&&(Ms(e,1),O0(e,1,0))}function fd(e){for(;e===du;)du=Lo[--Oo],Lo[Oo]=null,kl=Lo[--Oo],Lo[Oo]=null;for(;e===$s;)$s=oa[--la],oa[la]=null,$a=oa[--la],oa[la]=null,Ja=oa[--la],oa[la]=null}function I0(e,n){oa[la++]=Ja,oa[la++]=$a,oa[la++]=$s,Ja=n.id,$a=n.overflow,$s=e}var si=null,Sn=null,Be=!1,tr=null,ca=!1,hd=Error(s(519));function er(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(ra(n,e)),hd}function P0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[gn]=e,n[vn]=o,a){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(a=0;a<hc.length;a++)Oe(hc[a],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),xi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$_(n.textContent,a)?(o.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),o.onScroll!=null&&Oe("scroll",n),o.onScrollEnd!=null&&Oe("scrollend",n),o.onClick!=null&&(n.onclick=yi),n=!0):n=!1,n||er(e,!0)}function F0(e){for(si=e.return;si;)switch(si.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:si=si.return}}function Io(e){if(e!==si)return!1;if(!Be)return F0(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Dp(e.type,e.memoizedProps)),a=!a),a&&Sn&&er(e),F0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Sn=lv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Sn=lv(e)}else n===27?(n=Sn,mr(e.type)?(e=Ip,Ip=null,Sn=e):Sn=n):Sn=si?fa(e.stateNode.nextSibling):null;return!0}function Yr(){Sn=si=null,Be=!1}function dd(){var e=tr;return e!==null&&(Ii===null?Ii=e:Ii.push.apply(Ii,e),tr=null),e}function Xl(e){tr===null?tr=[e]:tr.push(e)}var pd=I(null),qr=null,Es=null;function nr(e,n,a){mt(pd,n._currentValue),n._currentValue=a}function bs(e){e._currentValue=pd.current,q(pd)}function md(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function gd(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),md(h.return,a,e),o||(x=null);break t}h=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),md(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Po(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;en(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===xt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(_c):e=[_c])}u=u.return}e!==null&&gd(n,e,a,o),n.flags|=262144}function pu(e){for(e=e.firstContext;e!==null;){if(!en(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jr(e){qr=e,Es=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ri(e){return B0(qr,e)}function mu(e,n){return qr===null&&jr(e),B0(e,n)}function B0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Es===null){if(e===null)throw Error(s(308));Es=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Es=Es.next=n;return a}var oy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ly=r.unstable_scheduleCallback,cy=r.unstable_NormalPriority,Fn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _d(){return{controller:new oy,data:new Map,refCount:0}}function Wl(e){e.refCount--,e.refCount===0&&ly(cy,function(){e.controller.abort()})}var Yl=null,vd=0,Fo=0,Bo=null;function uy(e,n){if(Yl===null){var a=Yl=[];vd=0,Fo=yp(),Bo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return vd++,n.then(z0,z0),n}function z0(){if(--vd===0&&Yl!==null){Bo!==null&&(Bo.status="fulfilled");var e=Yl;Yl=null,Fo=0,Bo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var H0=O.S;O.S=function(e,n){E_=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(e,n),H0!==null&&H0(e,n)};var Zr=I(null);function xd(){var e=Zr.current;return e!==null?e:pn.pooledCache}function gu(e,n){n===null?mt(Zr,Zr.current):mt(Zr,n.pool)}function G0(){var e=xd();return e===null?null:{parent:Fn._currentValue,pool:e}}var zo=Error(s(460)),Sd=Error(s(474)),_u=Error(s(542)),vu={then:function(){}};function V0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function k0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(yi,yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,W0(e),e;default:if(typeof n.status=="string")n.then(yi,yi);else{if(e=pn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,W0(e),e}throw Qr=n,zo}}function Kr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qr=a,zo):a}}var Qr=null;function X0(){if(Qr===null)throw Error(s(459));var e=Qr;return Qr=null,e}function W0(e){if(e===zo||e===_u)throw Error(s(483))}var Ho=null,ql=0;function xu(e){var n=ql;return ql+=1,Ho===null&&(Ho=[]),k0(Ho,e,n)}function jl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Su(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Y0(e){function n(Q,W){if(e){var st=Q.deletions;st===null?(Q.deletions=[W],Q.flags|=16):st.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=ys(Q,W),Q.index=0,Q.sibling=null,Q}function h(Q,W,st){return Q.index=st,e?(st=Q.alternate,st!==null?(st=st.index,st<W?(Q.flags|=67108866,W):st):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,W,st,St){return W===null||W.tag!==6?(W=ld(st,Q.mode,St),W.return=Q,W):(W=u(W,st),W.return=Q,W)}function H(Q,W,st,St){var ue=st.type;return ue===D?gt(Q,W,st.props.children,St,st.key):W!==null&&(W.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&Kr(ue)===W.type)?(W=u(W,st.props),jl(W,st),W.return=Q,W):(W=hu(st.type,st.key,st.props,null,Q.mode,St),jl(W,st),W.return=Q,W)}function rt(Q,W,st,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==st.containerInfo||W.stateNode.implementation!==st.implementation?(W=cd(st,Q.mode,St),W.return=Q,W):(W=u(W,st.children||[]),W.return=Q,W)}function gt(Q,W,st,St,ue){return W===null||W.tag!==7?(W=Wr(st,Q.mode,St,ue),W.return=Q,W):(W=u(W,st),W.return=Q,W)}function yt(Q,W,st){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=ld(""+W,Q.mode,st),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return st=hu(W.type,W.key,W.props,null,Q.mode,st),jl(st,W),st.return=Q,st;case b:return W=cd(W,Q.mode,st),W.return=Q,W;case T:return W=Kr(W),yt(Q,W,st)}if(Z(W)||et(W))return W=Wr(W,Q.mode,st,null),W.return=Q,W;if(typeof W.then=="function")return yt(Q,xu(W),st);if(W.$$typeof===L)return yt(Q,mu(Q,W),st);Su(Q,W)}return null}function ut(Q,W,st,St){var ue=W!==null?W.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return ue!==null?null:A(Q,W,""+st,St);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case y:return st.key===ue?H(Q,W,st,St):null;case b:return st.key===ue?rt(Q,W,st,St):null;case T:return st=Kr(st),ut(Q,W,st,St)}if(Z(st)||et(st))return ue!==null?null:gt(Q,W,st,St,null);if(typeof st.then=="function")return ut(Q,W,xu(st),St);if(st.$$typeof===L)return ut(Q,W,mu(Q,st),St);Su(Q,st)}return null}function ft(Q,W,st,St,ue){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return Q=Q.get(st)||null,A(W,Q,""+St,ue);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case y:return Q=Q.get(St.key===null?st:St.key)||null,H(W,Q,St,ue);case b:return Q=Q.get(St.key===null?st:St.key)||null,rt(W,Q,St,ue);case T:return St=Kr(St),ft(Q,W,st,St,ue)}if(Z(St)||et(St))return Q=Q.get(st)||null,gt(W,Q,St,ue,null);if(typeof St.then=="function")return ft(Q,W,st,xu(St),ue);if(St.$$typeof===L)return ft(Q,W,st,mu(W,St),ue);Su(W,St)}return null}function $t(Q,W,st,St){for(var ue=null,Ye=null,se=W,Te=W=0,Pe=null;se!==null&&Te<st.length;Te++){se.index>Te?(Pe=se,se=null):Pe=se.sibling;var qe=ut(Q,se,st[Te],St);if(qe===null){se===null&&(se=Pe);break}e&&se&&qe.alternate===null&&n(Q,se),W=h(qe,W,Te),Ye===null?ue=qe:Ye.sibling=qe,Ye=qe,se=Pe}if(Te===st.length)return a(Q,se),Be&&Ms(Q,Te),ue;if(se===null){for(;Te<st.length;Te++)se=yt(Q,st[Te],St),se!==null&&(W=h(se,W,Te),Ye===null?ue=se:Ye.sibling=se,Ye=se);return Be&&Ms(Q,Te),ue}for(se=o(se);Te<st.length;Te++)Pe=ft(se,Q,Te,st[Te],St),Pe!==null&&(e&&Pe.alternate!==null&&se.delete(Pe.key===null?Te:Pe.key),W=h(Pe,W,Te),Ye===null?ue=Pe:Ye.sibling=Pe,Ye=Pe);return e&&se.forEach(function(Sr){return n(Q,Sr)}),Be&&Ms(Q,Te),ue}function de(Q,W,st,St){if(st==null)throw Error(s(151));for(var ue=null,Ye=null,se=W,Te=W=0,Pe=null,qe=st.next();se!==null&&!qe.done;Te++,qe=st.next()){se.index>Te?(Pe=se,se=null):Pe=se.sibling;var Sr=ut(Q,se,qe.value,St);if(Sr===null){se===null&&(se=Pe);break}e&&se&&Sr.alternate===null&&n(Q,se),W=h(Sr,W,Te),Ye===null?ue=Sr:Ye.sibling=Sr,Ye=Sr,se=Pe}if(qe.done)return a(Q,se),Be&&Ms(Q,Te),ue;if(se===null){for(;!qe.done;Te++,qe=st.next())qe=yt(Q,qe.value,St),qe!==null&&(W=h(qe,W,Te),Ye===null?ue=qe:Ye.sibling=qe,Ye=qe);return Be&&Ms(Q,Te),ue}for(se=o(se);!qe.done;Te++,qe=st.next())qe=ft(se,Q,Te,qe.value,St),qe!==null&&(e&&qe.alternate!==null&&se.delete(qe.key===null?Te:qe.key),W=h(qe,W,Te),Ye===null?ue=qe:Ye.sibling=qe,Ye=qe);return e&&se.forEach(function(MM){return n(Q,MM)}),Be&&Ms(Q,Te),ue}function cn(Q,W,st,St){if(typeof st=="object"&&st!==null&&st.type===D&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case y:t:{for(var ue=st.key;W!==null;){if(W.key===ue){if(ue=st.type,ue===D){if(W.tag===7){a(Q,W.sibling),St=u(W,st.props.children),St.return=Q,Q=St;break t}}else if(W.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&Kr(ue)===W.type){a(Q,W.sibling),St=u(W,st.props),jl(St,st),St.return=Q,Q=St;break t}a(Q,W);break}else n(Q,W);W=W.sibling}st.type===D?(St=Wr(st.props.children,Q.mode,St,st.key),St.return=Q,Q=St):(St=hu(st.type,st.key,st.props,null,Q.mode,St),jl(St,st),St.return=Q,Q=St)}return x(Q);case b:t:{for(ue=st.key;W!==null;){if(W.key===ue)if(W.tag===4&&W.stateNode.containerInfo===st.containerInfo&&W.stateNode.implementation===st.implementation){a(Q,W.sibling),St=u(W,st.children||[]),St.return=Q,Q=St;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}St=cd(st,Q.mode,St),St.return=Q,Q=St}return x(Q);case T:return st=Kr(st),cn(Q,W,st,St)}if(Z(st))return $t(Q,W,st,St);if(et(st)){if(ue=et(st),typeof ue!="function")throw Error(s(150));return st=ue.call(st),de(Q,W,st,St)}if(typeof st.then=="function")return cn(Q,W,xu(st),St);if(st.$$typeof===L)return cn(Q,W,mu(Q,st),St);Su(Q,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,W!==null&&W.tag===6?(a(Q,W.sibling),St=u(W,st),St.return=Q,Q=St):(a(Q,W),St=ld(st,Q.mode,St),St.return=Q,Q=St),x(Q)):a(Q,W)}return function(Q,W,st,St){try{ql=0;var ue=cn(Q,W,st,St);return Ho=null,ue}catch(se){if(se===zo||se===_u)throw se;var Ye=Xi(29,se,null,Q.mode);return Ye.lanes=St,Ye.return=Q,Ye}}}var Jr=Y0(!0),q0=Y0(!1),ir=!1;function yd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Md(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ke&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=fu(e),D0(e,null,a),n}return uu(e,o,n,a),fu(e)}function Zl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,cs(e,a)}}function Ed(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var bd=!1;function Kl(){if(bd){var e=Bo;if(e!==null)throw e}}function Ql(e,n,a,o){bd=!1;var u=e.updateQueue;ir=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,rt=H.next;H.next=null,x===null?h=rt:x.next=rt,x=H;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,A=gt.lastBaseUpdate,A!==x&&(A===null?gt.firstBaseUpdate=rt:A.next=rt,gt.lastBaseUpdate=H))}if(h!==null){var yt=u.baseState;x=0,gt=rt=H=null,A=h;do{var ut=A.lane&-536870913,ft=ut!==A.lane;if(ft?(Ie&ut)===ut:(o&ut)===ut){ut!==0&&ut===Fo&&(bd=!0),gt!==null&&(gt=gt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var $t=e,de=A;ut=n;var cn=a;switch(de.tag){case 1:if($t=de.payload,typeof $t=="function"){yt=$t.call(cn,yt,ut);break t}yt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=de.payload,ut=typeof $t=="function"?$t.call(cn,yt,ut):$t,ut==null)break t;yt=v({},yt,ut);break t;case 2:ir=!0}}ut=A.callback,ut!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ut]:ft.push(ut))}else ft={lane:ut,tag:A.tag,payload:A.payload,callback:A.callback,next:null},gt===null?(rt=gt=ft,H=yt):gt=gt.next=ft,x|=ut;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ft=A,A=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);gt===null&&(H=yt),u.baseState=H,u.firstBaseUpdate=rt,u.lastBaseUpdate=gt,h===null&&(u.shared.lanes=0),ur|=x,e.lanes=x,e.memoizedState=yt}}function j0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Z0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)j0(a[e],n)}var Go=I(null),yu=I(0);function K0(e,n){e=Ls,mt(yu,e),mt(Go,n),Ls=e|n.baseLanes}function Td(){mt(yu,Ls),mt(Go,Go.current)}function Ad(){Ls=yu.current,q(Go),q(yu)}var Wi=I(null),ua=null;function rr(e){var n=e.alternate;mt(Ln,Ln.current&1),mt(Wi,e),ua===null&&(n===null||Go.current!==null||n.memoizedState!==null)&&(ua=e)}function Rd(e){mt(Ln,Ln.current),mt(Wi,e),ua===null&&(ua=e)}function Q0(e){e.tag===22?(mt(Ln,Ln.current),mt(Wi,e),ua===null&&(ua=e)):or()}function or(){mt(Ln,Ln.current),mt(Wi,Wi.current)}function Yi(e){q(Wi),ua===e&&(ua=null),q(Ln)}var Ln=I(0);function Mu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lp(a)||Op(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ts=0,Ee=null,on=null,Bn=null,Eu=!1,Vo=!1,$r=!1,bu=0,Jl=0,ko=null,hy=0;function Cn(){throw Error(s(321))}function Cd(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!en(e[a],n[a]))return!1;return!0}function wd(e,n,a,o,u,h){return Ts=h,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Og:Xd,$r=!1,h=a(o,u),$r=!1,Vo&&(h=$0(n,a,o,u)),J0(e),h}function J0(e){O.H=ec;var n=on!==null&&on.next!==null;if(Ts=0,Bn=on=Ee=null,Eu=!1,Jl=0,ko=null,n)throw Error(s(300));e===null||zn||(e=e.dependencies,e!==null&&pu(e)&&(zn=!0))}function $0(e,n,a,o){Ee=e;var u=0;do{if(Vo&&(ko=null),Jl=0,Vo=!1,25<=u)throw Error(s(301));if(u+=1,Bn=on=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=Ig,h=n(a,o)}while(Vo);return h}function dy(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?$l(n):n,e=e.useState()[0],(on!==null?on.memoizedState:null)!==e&&(Ee.flags|=1024),n}function Dd(){var e=bu!==0;return bu=0,e}function Nd(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ud(e){if(Eu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Eu=!1}Ts=0,Bn=on=Ee=null,Vo=!1,Jl=bu=0,ko=null}function Ei(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?Ee.memoizedState=Bn=e:Bn=Bn.next=e,Bn}function On(){if(on===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=on.next;var n=Bn===null?Ee.memoizedState:Bn.next;if(n!==null)Bn=n,on=e;else{if(e===null)throw Ee.alternate===null?Error(s(467)):Error(s(310));on=e,e={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},Bn===null?Ee.memoizedState=Bn=e:Bn=Bn.next=e}return Bn}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $l(e){var n=Jl;return Jl+=1,ko===null&&(ko=[]),e=k0(ko,e,n),n=Ee,(Bn===null?n.memoizedState:Bn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Og:Xd),e}function Au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $l(e);if(e.$$typeof===L)return ri(e)}throw Error(s(438,String(e)))}function Ld(e){var n=null,a=Ee.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ee.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),Ee.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=dt;return n.index++,a}function As(e,n){return typeof n=="function"?n(e):n}function Ru(e){var n=On();return Od(n,on,e)}function Od(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=x=null,H=null,rt=n,gt=!1;do{var yt=rt.lane&-536870913;if(yt!==rt.lane?(Ie&yt)===yt:(Ts&yt)===yt){var ut=rt.revertLane;if(ut===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),yt===Fo&&(gt=!0);else if((Ts&ut)===ut){rt=rt.next,ut===Fo&&(gt=!0);continue}else yt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},H===null?(A=H=yt,x=h):H=H.next=yt,Ee.lanes|=ut,ur|=ut;yt=rt.action,$r&&a(h,yt),h=rt.hasEagerState?rt.eagerState:a(h,yt)}else ut={lane:yt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},H===null?(A=H=ut,x=h):H=H.next=ut,Ee.lanes|=yt,ur|=yt;rt=rt.next}while(rt!==null&&rt!==n);if(H===null?x=h:H.next=A,!en(h,e.memoizedState)&&(zn=!0,gt&&(a=Bo,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Id(e){var n=On(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);en(h,n.memoizedState)||(zn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function tg(e,n,a){var o=Ee,u=On(),h=Be;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!en((on||u).memoizedState,a);if(x&&(u.memoizedState=a,zn=!0),u=u.queue,Bd(ig.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||Bn!==null&&Bn.memoizedState.tag&1){if(o.flags|=2048,Xo(9,{destroy:void 0},ng.bind(null,o,u,a,n),null),pn===null)throw Error(s(349));h||(Ts&127)!==0||eg(o,n,a)}return a}function eg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ee.updateQueue,n===null?(n=Tu(),Ee.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ng(e,n,a,o){n.value=a,n.getSnapshot=o,ag(n)&&sg(e)}function ig(e,n,a){return a(function(){ag(n)&&sg(e)})}function ag(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!en(e,a)}catch{return!0}}function sg(e){var n=Xr(e,2);n!==null&&Pi(n,e,2)}function Pd(e){var n=Ei();if(typeof e=="function"){var a=e;if(e=a(),$r){Vt(!0);try{a()}finally{Vt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:e},n}function rg(e,n,a,o){return e.baseState=a,Od(e,on,typeof o=="function"?o:As)}function py(e,n,a,o,u){if(Du(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,og(n,h)):(h.next=a.next,n.pending=a.next=h)}}function og(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=O.T,x={};O.T=x;try{var A=a(u,o),H=O.S;H!==null&&H(x,A),lg(e,n,A)}catch(rt){Fd(e,n,rt)}finally{h!==null&&x.types!==null&&(h.types=x.types),O.T=h}}else try{h=a(u,o),lg(e,n,h)}catch(rt){Fd(e,n,rt)}}function lg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cg(e,n,o)},function(o){return Fd(e,n,o)}):cg(e,n,a)}function cg(e,n,a){n.status="fulfilled",n.value=a,ug(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,og(e,a)))}function Fd(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,ug(n),n=n.next;while(n!==o)}e.action=null}function ug(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fg(e,n){return n}function hg(e,n){if(Be){var a=pn.formState;if(a!==null){t:{var o=Ee;if(Be){if(Sn){e:{for(var u=Sn,h=ca;u.nodeType!==8;){if(!h){u=null;break e}if(u=fa(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Sn=fa(u.nextSibling),o=u.data==="F!";break t}}er(o)}o=!1}o&&(n=a[0])}}return a=Ei(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fg,lastRenderedState:n},a.queue=o,a=Ng.bind(null,Ee,o),o.dispatch=a,o=Pd(!1),h=kd.bind(null,Ee,!1,o.queue),o=Ei(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=py.bind(null,Ee,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function dg(e){var n=On();return pg(n,on,e)}function pg(e,n,a){if(n=Od(e,n,fg)[0],e=Ru(As)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=$l(n)}catch(x){throw x===zo?_u:x}else o=n;n=On();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Ee.flags|=2048,Xo(9,{destroy:void 0},my.bind(null,u,a),null)),[o,h,e]}function my(e,n){e.action=n}function mg(e){var n=On(),a=on;if(a!==null)return pg(n,a,e);On(),n=n.memoizedState,a=On();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=Tu(),Ee.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function gg(){return On().memoizedState}function Cu(e,n,a,o){var u=Ei();Ee.flags|=e,u.memoizedState=Xo(1|n,{destroy:void 0},a,o===void 0?null:o)}function wu(e,n,a,o){var u=On();o=o===void 0?null:o;var h=u.memoizedState.inst;on!==null&&o!==null&&Cd(o,on.memoizedState.deps)?u.memoizedState=Xo(n,h,a,o):(Ee.flags|=e,u.memoizedState=Xo(1|n,h,a,o))}function _g(e,n){Cu(8390656,8,e,n)}function Bd(e,n){wu(2048,8,e,n)}function gy(e){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=Tu(),Ee.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function vg(e){var n=On().memoizedState;return gy({ref:n,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function xg(e,n){return wu(4,2,e,n)}function Sg(e,n){return wu(4,4,e,n)}function yg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mg(e,n,a){a=a!=null?a.concat([e]):null,wu(4,4,yg.bind(null,n,e),a)}function zd(){}function Eg(e,n){var a=On();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Cd(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function bg(e,n){var a=On();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Cd(n,o[1]))return o[0];if(o=e(),$r){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[o,n],o}function Hd(e,n,a){return a===void 0||(Ts&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=T_(),Ee.lanes|=e,ur|=e,a)}function Tg(e,n,a,o){return en(a,n)?a:Go.current!==null?(e=Hd(e,a,o),en(e,n)||(zn=!0),e):(Ts&42)===0||(Ts&1073741824)!==0&&(Ie&261930)===0?(zn=!0,e.memoizedState=a):(e=T_(),Ee.lanes|=e,ur|=e,n)}function Ag(e,n,a,o,u){var h=P.p;P.p=h!==0&&8>h?h:8;var x=O.T,A={};O.T=A,kd(e,!1,n,a);try{var H=u(),rt=O.S;if(rt!==null&&rt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var gt=fy(H,o);tc(e,n,gt,Zi(e))}else tc(e,n,o,Zi(e))}catch(yt){tc(e,n,{then:function(){},status:"rejected",reason:yt},Zi())}finally{P.p=h,x!==null&&A.types!==null&&(x.types=A.types),O.T=x}}function _y(){}function Gd(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Rg(e).queue;Ag(e,u,n,J,a===null?_y:function(){return Cg(e),a(o)})}function Rg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cg(e){var n=Rg(e);n.next===null&&(n=e.alternate.memoizedState),tc(e,n.next.queue,{},Zi())}function Vd(){return ri(_c)}function wg(){return On().memoizedState}function Dg(){return On().memoizedState}function vy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zi();e=ar(a);var o=sr(n,e,a);o!==null&&(Pi(o,n,a),Zl(o,n,a)),n={cache:_d()},e.payload=n;return}n=n.return}}function xy(e,n,a){var o=Zi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Du(e)?Ug(n,a):(a=rd(e,n,a,o),a!==null&&(Pi(a,e,o),Lg(a,n,o)))}function Ng(e,n,a){var o=Zi();tc(e,n,a,o)}function tc(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Ug(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,A=h(x,a);if(u.hasEagerState=!0,u.eagerState=A,en(A,x))return uu(e,n,u,0),pn===null&&cu(),!1}catch{}if(a=rd(e,n,u,o),a!==null)return Pi(a,e,o),Lg(a,n,o),!0}return!1}function kd(e,n,a,o){if(o={lane:2,revertLane:yp(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Du(e)){if(n)throw Error(s(479))}else n=rd(e,a,o,2),n!==null&&Pi(n,e,2)}function Du(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function Ug(e,n){Vo=Eu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Lg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,cs(e,a)}}var ec={readContext:ri,use:Au,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useLayoutEffect:Cn,useInsertionEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useSyncExternalStore:Cn,useId:Cn,useHostTransitionStatus:Cn,useFormState:Cn,useActionState:Cn,useOptimistic:Cn,useMemoCache:Cn,useCacheRefresh:Cn};ec.useEffectEvent=Cn;var Og={readContext:ri,use:Au,useCallback:function(e,n){return Ei().memoizedState=[e,n===void 0?null:n],e},useContext:ri,useEffect:_g,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cu(4194308,4,yg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cu(4194308,4,e,n)},useInsertionEffect:function(e,n){Cu(4,2,e,n)},useMemo:function(e,n){var a=Ei();n=n===void 0?null:n;var o=e();if($r){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ei();if(a!==void 0){var u=a(n);if($r){Vt(!0);try{a(n)}finally{Vt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=xy.bind(null,Ee,e),[o.memoizedState,e]},useRef:function(e){var n=Ei();return e={current:e},n.memoizedState=e},useState:function(e){e=Pd(e);var n=e.queue,a=Ng.bind(null,Ee,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zd,useDeferredValue:function(e,n){var a=Ei();return Hd(a,e,n)},useTransition:function(){var e=Pd(!1);return e=Ag.bind(null,Ee,e.queue,!0,!1),Ei().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ee,u=Ei();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),pn===null)throw Error(s(349));(Ie&127)!==0||eg(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,_g(ig.bind(null,o,h,e),[e]),o.flags|=2048,Xo(9,{destroy:void 0},ng.bind(null,o,h,a,n),null),a},useId:function(){var e=Ei(),n=pn.identifierPrefix;if(Be){var a=$a,o=Ja;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Vd,useFormState:hg,useActionState:hg,useOptimistic:function(e){var n=Ei();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=kd.bind(null,Ee,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ld,useCacheRefresh:function(){return Ei().memoizedState=vy.bind(null,Ee)},useEffectEvent:function(e){var n=Ei(),a={impl:e};return n.memoizedState=a,function(){if((Ke&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xd={readContext:ri,use:Au,useCallback:Eg,useContext:ri,useEffect:Bd,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:bg,useReducer:Ru,useRef:gg,useState:function(){return Ru(As)},useDebugValue:zd,useDeferredValue:function(e,n){var a=On();return Tg(a,on.memoizedState,e,n)},useTransition:function(){var e=Ru(As)[0],n=On().memoizedState;return[typeof e=="boolean"?e:$l(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:Vd,useFormState:dg,useActionState:dg,useOptimistic:function(e,n){var a=On();return rg(a,on,e,n)},useMemoCache:Ld,useCacheRefresh:Dg};Xd.useEffectEvent=vg;var Ig={readContext:ri,use:Au,useCallback:Eg,useContext:ri,useEffect:Bd,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:bg,useReducer:Id,useRef:gg,useState:function(){return Id(As)},useDebugValue:zd,useDeferredValue:function(e,n){var a=On();return on===null?Hd(a,e,n):Tg(a,on.memoizedState,e,n)},useTransition:function(){var e=Id(As)[0],n=On().memoizedState;return[typeof e=="boolean"?e:$l(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:Vd,useFormState:mg,useActionState:mg,useOptimistic:function(e,n){var a=On();return on!==null?rg(a,on,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ld,useCacheRefresh:Dg};Ig.useEffectEvent=vg;function Wd(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yd={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Zi(),u=ar(o);u.payload=n,a!=null&&(u.callback=a),n=sr(e,u,o),n!==null&&(Pi(n,e,o),Zl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Zi(),u=ar(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=sr(e,u,o),n!==null&&(Pi(n,e,o),Zl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zi(),o=ar(a);o.tag=2,n!=null&&(o.callback=n),n=sr(e,o,a),n!==null&&(Pi(n,e,a),Zl(n,e,a))}};function Pg(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!Qn(a,o)||!Qn(u,h):!0}function Fg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Yd.enqueueReplaceState(n,n.state,null)}function to(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Bg(e){lu(e)}function zg(e){console.error(e)}function Hg(e){lu(e)}function Nu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function qd(e,n,a){return a=ar(a),a.tag=3,a.payload={element:null},a.callback=function(){Nu(e,n)},a}function Vg(e){return e=ar(e),e.tag=3,e}function kg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Gg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Gg(n,a,o),typeof u!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Sy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Po(n,a,u,!0),a=Wi.current,a!==null){switch(a.tag){case 31:case 13:return ua===null?ku():a.alternate===null&&wn===0&&(wn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===vu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),vp(e,o,u)),!1;case 22:return a.flags|=65536,o===vu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),vp(e,o,u)),!1}throw Error(s(435,a.tag))}return vp(e,o,u),ku(),!1}if(Be)return n=Wi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==hd&&(e=Error(s(422),{cause:o}),Xl(ra(e,a)))):(o!==hd&&(n=Error(s(423),{cause:o}),Xl(ra(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ra(o,a),u=qd(e.stateNode,o,u),Ed(e,u),wn!==4&&(wn=2)),!1;var h=Error(s(520),{cause:o});if(h=ra(h,a),cc===null?cc=[h]:cc.push(h),wn!==4&&(wn=2),n===null)return!0;o=ra(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=qd(a.stateNode,o,e),Ed(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(fr===null||!fr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vg(u),kg(u,e,a,o),Ed(a,u),!1}a=a.return}while(a!==null);return!1}var jd=Error(s(461)),zn=!1;function oi(e,n,a,o){n.child=e===null?q0(n,null,a,o):Jr(n,e.child,a,o)}function Xg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return jr(n),o=wd(e,n,a,x,h,u),A=Dd(),e!==null&&!zn?(Nd(e,n,u),Rs(e,n,u)):(Be&&A&&ud(n),n.flags|=1,oi(e,n,o,u),n.child)}function Wg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!od(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Yg(e,n,h,o,u)):(e=hu(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!np(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:Qn,a(x,o)&&e.ref===n.ref)return Rs(e,n,u)}return n.flags|=1,e=ys(h,o),e.ref=n.ref,e.return=n,n.child=e}function Yg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Qn(h,o)&&e.ref===n.ref)if(zn=!1,n.pendingProps=o=h,np(e,u))(e.flags&131072)!==0&&(zn=!0);else return n.lanes=e.lanes,Rs(e,n,u)}return Zd(e,n,a,o,u)}function qg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return jg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gu(n,h!==null?h.cachePool:null),h!==null?K0(n,h):Td(),Q0(n);else return o=n.lanes=536870912,jg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(gu(n,h.cachePool),K0(n,h),or(),n.memoizedState=null):(e!==null&&gu(n,null),Td(),or());return oi(e,n,u,a),n.child}function nc(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jg(e,n,a,o,u){var h=xd();return h=h===null?null:{parent:Fn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&gu(n,null),Td(),Q0(n),e!==null&&Po(e,n,o,!0),n.childLanes=u,null}function Uu(e,n){return n=Ou({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Zg(e,n,a){return Jr(n,e.child,null,a),e=Uu(n,n.pendingProps),e.flags|=2,Yi(n),n.memoizedState=null,e}function yy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Be){if(o.mode==="hidden")return e=Uu(n,o),n.lanes=536870912,nc(null,e);if(Rd(n),(e=Sn)?(e=ov(e,ca),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:$s!==null?{id:Ja,overflow:$a}:null,retryLane:536870912,hydrationErrors:null},a=U0(e),a.return=n,n.child=a,si=n,Sn=null)):e=null,e===null)throw er(n);return n.lanes=536870912,null}return Uu(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(Rd(n),u)if(n.flags&256)n.flags&=-257,n=Zg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(zn||Po(e,n,a,!1),u=(a&e.childLanes)!==0,zn||u){if(o=pn,o!==null&&(x=Or(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,Xr(e,x),Pi(o,e,x),jd;ku(),n=Zg(e,n,a)}else e=h.treeContext,Sn=fa(x.nextSibling),si=n,Be=!0,tr=null,ca=!1,e!==null&&I0(n,e),n=Uu(n,o),n.flags|=4096;return n}return e=ys(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Lu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Zd(e,n,a,o,u){return jr(n),a=wd(e,n,a,o,void 0,u),o=Dd(),e!==null&&!zn?(Nd(e,n,u),Rs(e,n,u)):(Be&&o&&ud(n),n.flags|=1,oi(e,n,a,u),n.child)}function Kg(e,n,a,o,u,h){return jr(n),n.updateQueue=null,a=$0(n,o,a,u),J0(e),o=Dd(),e!==null&&!zn?(Nd(e,n,h),Rs(e,n,h)):(Be&&o&&ud(n),n.flags|=1,oi(e,n,a,h),n.child)}function Qg(e,n,a,o,u){if(jr(n),n.stateNode===null){var h=Uo,x=a.contextType;typeof x=="object"&&x!==null&&(h=ri(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Yd,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},yd(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?ri(x):Uo,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Wd(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Yd.enqueueReplaceState(h,h.state,null),Ql(n,o,h,u),Kl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,H=to(a,A);h.props=H;var rt=h.context,gt=a.contextType;x=Uo,typeof gt=="object"&&gt!==null&&(x=ri(gt));var yt=a.getDerivedStateFromProps;gt=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,gt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||rt!==x)&&Fg(n,h,o,x),ir=!1;var ut=n.memoizedState;h.state=ut,Ql(n,o,h,u),Kl(),rt=n.memoizedState,A||ut!==rt||ir?(typeof yt=="function"&&(Wd(n,a,yt,o),rt=n.memoizedState),(H=ir||Pg(n,a,H,o,ut,rt,x))?(gt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=rt),h.props=o,h.state=rt,h.context=x,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Md(e,n),x=n.memoizedProps,gt=to(a,x),h.props=gt,yt=n.pendingProps,ut=h.context,rt=a.contextType,H=Uo,typeof rt=="object"&&rt!==null&&(H=ri(rt)),A=a.getDerivedStateFromProps,(rt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==yt||ut!==H)&&Fg(n,h,o,H),ir=!1,ut=n.memoizedState,h.state=ut,Ql(n,o,h,u),Kl();var ft=n.memoizedState;x!==yt||ut!==ft||ir||e!==null&&e.dependencies!==null&&pu(e.dependencies)?(typeof A=="function"&&(Wd(n,a,A,o),ft=n.memoizedState),(gt=ir||Pg(n,a,gt,o,ut,ft,H)||e!==null&&e.dependencies!==null&&pu(e.dependencies))?(rt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ft,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ft,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),h.props=o,h.state=ft,h.context=H,o=gt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Lu(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Jr(n,e.child,null,u),n.child=Jr(n,null,a,u)):oi(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Rs(e,n,u),e}function Jg(e,n,a,o){return Yr(),n.flags|=256,oi(e,n,a,o),n.child}var Kd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qd(e){return{baseLanes:e,cachePool:G0()}}function Jd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ji),e}function $g(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(Ln.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?rr(n):or(),(e=Sn)?(e=ov(e,ca),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:$s!==null?{id:Ja,overflow:$a}:null,retryLane:536870912,hydrationErrors:null},a=U0(e),a.return=n,n.child=a,si=n,Sn=null)):e=null,e===null)throw er(n);return Op(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(or(),u=n.mode,A=Ou({mode:"hidden",children:A},u),o=Wr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Qd(a),o.childLanes=Jd(e,x,a),n.memoizedState=Kd,nc(null,o)):(rr(n),$d(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(h)n.flags&256?(rr(n),n.flags&=-257,n=tp(e,n,a)):n.memoizedState!==null?(or(),n.child=e.child,n.flags|=128,n=null):(or(),A=o.fallback,u=n.mode,o=Ou({mode:"visible",children:o.children},u),A=Wr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Jr(n,e.child,null,a),o=n.child,o.memoizedState=Qd(a),o.childLanes=Jd(e,x,a),n.memoizedState=Kd,n=nc(null,o));else if(rr(n),Op(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var rt=x.dgst;x=rt,o=Error(s(419)),o.stack="",o.digest=x,Xl({value:o,source:null,stack:null}),n=tp(e,n,a)}else if(zn||Po(e,n,a,!1),x=(a&e.childLanes)!==0,zn||x){if(x=pn,x!==null&&(o=Or(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Xr(e,o),Pi(x,e,o),jd;Lp(A)||ku(),n=tp(e,n,a)}else Lp(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Sn=fa(A.nextSibling),si=n,Be=!0,tr=null,ca=!1,e!==null&&I0(n,e),n=$d(n,o.children),n.flags|=4096);return n}return u?(or(),A=o.fallback,u=n.mode,H=e.child,rt=H.sibling,o=ys(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,rt!==null?A=ys(rt,A):(A=Wr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,nc(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Qd(a):(u=A.cachePool,u!==null?(H=Fn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=G0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Jd(e,x,a),n.memoizedState=Kd,nc(e.child,o)):(rr(n),a=e.child,e=a.sibling,a=ys(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function $d(e,n){return n=Ou({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ou(e,n){return e=Xi(22,e,null,n),e.lanes=0,e}function tp(e,n,a){return Jr(n,e.child,null,a),e=$d(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function t_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),md(e.return,n,a)}function ep(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function e_(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=Ln.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,mt(Ln,x),oi(e,n,o,a),o=Be?kl:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&t_(e,a,n);else if(e.tag===19)t_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Mu(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ep(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Mu(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ep(n,!0,a,null,h,o);break;case"together":ep(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Rs(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ur|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Po(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ys(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ys(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function np(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pu(e)))}function My(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),nr(n,Fn,e.memoizedState.cache),Yr();break;case 27:case 5:ne(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:nr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Rd(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(rr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$g(e,n,a):(rr(n),e=Rs(e,n,a),e!==null?e.sibling:null);rr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Po(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return e_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(Ln,Ln.current),o)break;return null;case 22:return n.lanes=0,qg(e,n,a,n.pendingProps);case 24:nr(n,Fn,e.memoizedState.cache)}return Rs(e,n,a)}function n_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)zn=!0;else{if(!np(e,a)&&(n.flags&128)===0)return zn=!1,My(e,n,a);zn=(e.flags&131072)!==0}else zn=!1,Be&&(n.flags&1048576)!==0&&O0(n,kl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Kr(n.elementType),n.type=e,typeof e=="function")od(e)?(o=to(e,o),n.tag=1,n=Qg(null,n,e,o,a)):(n.tag=0,n=Zd(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=Xg(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=Wg(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return Zd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=to(o,n.pendingProps),Qg(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Md(e,n),Ql(n,o,null,a);var x=n.memoizedState;if(o=x.cache,nr(n,Fn,o),o!==h.cache&&gd(n,[Fn],a,!0),Kl(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Jg(e,n,o,a);break t}else if(o!==u){u=ra(Error(s(424)),n),Xl(u),n=Jg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Sn=fa(e.firstChild),si=n,Be=!0,tr=null,ca=!0,a=q0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Yr(),o===u){n=Rs(e,n,a);break t}oi(e,n,o,a)}n=n.child}return n;case 26:return Lu(e,n),e===null?(a=dv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=Ku(nt.current).createElement(a),o[gn]=n,o[vn]=e,li(o,a,e),Y(o),n.stateNode=o):n.memoizedState=dv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ne(n),e===null&&Be&&(o=n.stateNode=uv(n.type,n.pendingProps,nt.current),si=n,ca=!0,u=Sn,mr(n.type)?(Ip=u,Sn=fa(o.firstChild)):Sn=u),oi(e,n,n.pendingProps.children,a),Lu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=Sn)&&(o=Jy(o,n.type,n.pendingProps,ca),o!==null?(n.stateNode=o,si=n,Sn=fa(o.firstChild),ca=!1,u=!0):u=!1),u||er(n)),ne(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,Dp(u,h)?o=null:x!==null&&Dp(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=wd(e,n,dy,null,null,a),_c._currentValue=u),Lu(e,n),oi(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=Sn)&&(a=$y(a,n.pendingProps,ca),a!==null?(n.stateNode=a,si=n,Sn=null,e=!0):e=!1),e||er(n)),null;case 13:return $g(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Jr(n,null,o,a):oi(e,n,o,a),n.child;case 11:return Xg(e,n,n.type,n.pendingProps,a);case 7:return oi(e,n,n.pendingProps,a),n.child;case 8:return oi(e,n,n.pendingProps.children,a),n.child;case 12:return oi(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,nr(n,n.type,o.value),oi(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,jr(n),u=ri(u),o=o(u),n.flags|=1,oi(e,n,o,a),n.child;case 14:return Wg(e,n,n.type,n.pendingProps,a);case 15:return Yg(e,n,n.type,n.pendingProps,a);case 19:return e_(e,n,a);case 31:return yy(e,n,a);case 22:return qg(e,n,a,n.pendingProps);case 24:return jr(n),o=ri(Fn),e===null?(u=xd(),u===null&&(u=pn,h=_d(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},yd(n),nr(n,Fn,u)):((e.lanes&a)!==0&&(Md(e,n),Ql(n,null,null,a),Kl()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),nr(n,Fn,o)):(o=h.cache,nr(n,Fn,o),o!==u.cache&&gd(n,[Fn],a,!0))),oi(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Cs(e){e.flags|=4}function ip(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(w_())e.flags|=8192;else throw Qr=vu,Sd}else e.flags&=-16777217}function i_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vv(n))if(w_())e.flags|=8192;else throw Qr=vu,Sd}function Iu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?je():536870912,e.lanes|=n,jo|=n)}function ic(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function yn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ey(e,n,a){var o=n.pendingProps;switch(fd(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(n),null;case 1:return yn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),bs(Fn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Io(n)?Cs(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dd())),yn(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Cs(n),h!==null?(yn(n),i_(n,h)):(yn(n),ip(n,u,null,o,a))):h?h!==e.memoizedState?(Cs(n),yn(n),i_(n,h)):(yn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Cs(n),yn(n),ip(n,u,e,o,a)),null;case 27:if(ce(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Cs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return yn(n),null}e=Ct.current,Io(n)?P0(n):(e=uv(u,o,a),n.stateNode=e,Cs(n))}return yn(n),null;case 5:if(ce(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Cs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return yn(n),null}if(h=Ct.current,Io(n))P0(n);else{var x=Ku(nt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[gn]=n,h[vn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(li(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Cs(n)}}return yn(n),ip(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Cs(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,Io(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=si,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[gn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$_(e.nodeValue,a)),e||er(n,!0)}else e=Ku(e).createTextNode(o),e[gn]=n,n.stateNode=e}return yn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Io(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[gn]=n}else Yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;yn(n),e=!1}else a=dd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Yi(n),n):(Yi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return yn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Io(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else Yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;yn(n),u=!1}else u=dd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yi(n),n):(Yi(n),null)}return Yi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Iu(n,n.updateQueue),yn(n),null);case 4:return Zt(),e===null&&Tp(n.stateNode.containerInfo),yn(n),null;case 10:return bs(n.type),yn(n),null;case 19:if(q(Ln),o=n.memoizedState,o===null)return yn(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)ic(o,!1);else{if(wn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Mu(e),h!==null){for(n.flags|=128,ic(o,!1),e=h.updateQueue,n.updateQueue=e,Iu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)N0(a,e),a=a.sibling;return mt(Ln,Ln.current&1|2),Be&&Ms(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Hu&&(n.flags|=128,u=!0,ic(o,!1),n.lanes=4194304)}else{if(!u)if(e=Mu(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Iu(n,e),ic(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Be)return yn(n),null}else 2*E()-o.renderingStartTime>Hu&&a!==536870912&&(n.flags|=128,u=!0,ic(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=Ln.current,mt(Ln,u?a&1|2:a&1),Be&&Ms(n,o.treeForkCount),e):(yn(n),null);case 22:case 23:return Yi(n),Ad(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(yn(n),n.subtreeFlags&6&&(n.flags|=8192)):yn(n),a=n.updateQueue,a!==null&&Iu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(Zr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),bs(Fn),yn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function by(e,n){switch(fd(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bs(Fn),Zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(Yi(n),n.alternate===null)throw Error(s(340));Yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Yi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(Ln),null;case 4:return Zt(),null;case 10:return bs(n.type),null;case 22:case 23:return Yi(n),Ad(),e!==null&&q(Zr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return bs(Fn),null;case 25:return null;default:return null}}function a_(e,n){switch(fd(n),n.tag){case 3:bs(Fn),Zt();break;case 26:case 27:case 5:ce(n);break;case 4:Zt();break;case 31:n.memoizedState!==null&&Yi(n);break;case 13:Yi(n);break;case 19:q(Ln);break;case 10:bs(n.type);break;case 22:case 23:Yi(n),Ad(),e!==null&&q(Zr);break;case 24:bs(Fn)}}function ac(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){an(n,n.return,A)}}function lr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var H=a,rt=A;try{rt()}catch(gt){an(u,H,gt)}}}o=o.next}while(o!==h)}}catch(gt){an(n,n.return,gt)}}function s_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Z0(n,a)}catch(o){an(e,e.return,o)}}}function r_(e,n,a){a.props=to(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){an(e,n,o)}}function sc(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){an(e,n,u)}}function ts(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){an(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){an(e,n,u)}else a.current=null}function o_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){an(e,e.return,u)}}function ap(e,n,a){try{var o=e.stateNode;Yy(o,e.type,a,n),o[vn]=n}catch(u){an(e,e.return,u)}}function l_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mr(e.type)||e.tag===4}function sp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||l_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rp(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=yi));else if(o!==4&&(o===27&&mr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(rp(e,n,a),e=e.sibling;e!==null;)rp(e,n,a),e=e.sibling}function Pu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&mr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pu(e,n,a),e=e.sibling;e!==null;)Pu(e,n,a),e=e.sibling}function c_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);li(n,o,a),n[gn]=e,n[vn]=a}catch(h){an(e,e.return,h)}}var ws=!1,Hn=!1,op=!1,u_=typeof WeakSet=="function"?WeakSet:Set,Jn=null;function Ty(e,n){if(e=e.containerInfo,Cp=af,e=Qs(e),Qa(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,A=-1,H=-1,rt=0,gt=0,yt=e,ut=null;e:for(;;){for(var ft;yt!==a||u!==0&&yt.nodeType!==3||(A=x+u),yt!==h||o!==0&&yt.nodeType!==3||(H=x+o),yt.nodeType===3&&(x+=yt.nodeValue.length),(ft=yt.firstChild)!==null;)ut=yt,yt=ft;for(;;){if(yt===e)break e;if(ut===a&&++rt===u&&(A=x),ut===h&&++gt===o&&(H=x),(ft=yt.nextSibling)!==null)break;yt=ut,ut=yt.parentNode}yt=ft}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(wp={focusedElem:e,selectionRange:a},af=!1,Jn=n;Jn!==null;)if(n=Jn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Jn=e;else for(;Jn!==null;){switch(n=Jn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var $t=to(a.type,u);e=o.getSnapshotBeforeUpdate($t,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(de){an(a,a.return,de)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Up(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Up(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Jn=e;break}Jn=n.return}}function f_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ns(e,a),o&4&&ac(5,a);break;case 1:if(Ns(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){an(a,a.return,x)}else{var u=to(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){an(a,a.return,x)}}o&64&&s_(a),o&512&&sc(a,a.return);break;case 3:if(Ns(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Z0(e,n)}catch(x){an(a,a.return,x)}}break;case 27:n===null&&o&4&&c_(a);case 26:case 5:Ns(e,a),n===null&&o&4&&o_(a),o&512&&sc(a,a.return);break;case 12:Ns(e,a);break;case 31:Ns(e,a),o&4&&p_(e,a);break;case 13:Ns(e,a),o&4&&m_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Oy.bind(null,a),tM(e,a))));break;case 22:if(o=a.memoizedState!==null||ws,!o){n=n!==null&&n.memoizedState!==null||Hn,u=ws;var h=Hn;ws=o,(Hn=n)&&!h?Us(e,a,(a.subtreeFlags&8772)!==0):Ns(e,a),ws=u,Hn=h}break;case 30:break;default:Ns(e,a)}}function h_(e){var n=e.alternate;n!==null&&(e.alternate=null,h_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Mn=null,Ui=!1;function Ds(e,n,a){for(a=a.child;a!==null;)d_(e,n,a),a=a.sibling}function d_(e,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:Hn||ts(a,n),Ds(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hn||ts(a,n);var o=Mn,u=Ui;mr(a.type)&&(Mn=a.stateNode,Ui=!1),Ds(e,n,a),pc(a.stateNode),Mn=o,Ui=u;break;case 5:Hn||ts(a,n);case 6:if(o=Mn,u=Ui,Mn=null,Ds(e,n,a),Mn=o,Ui=u,Mn!==null)if(Ui)try{(Mn.nodeType===9?Mn.body:Mn.nodeName==="HTML"?Mn.ownerDocument.body:Mn).removeChild(a.stateNode)}catch(h){an(a,n,h)}else try{Mn.removeChild(a.stateNode)}catch(h){an(a,n,h)}break;case 18:Mn!==null&&(Ui?(e=Mn,sv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),nl(e)):sv(Mn,a.stateNode));break;case 4:o=Mn,u=Ui,Mn=a.stateNode.containerInfo,Ui=!0,Ds(e,n,a),Mn=o,Ui=u;break;case 0:case 11:case 14:case 15:lr(2,a,n),Hn||lr(4,a,n),Ds(e,n,a);break;case 1:Hn||(ts(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&r_(a,n,o)),Ds(e,n,a);break;case 21:Ds(e,n,a);break;case 22:Hn=(o=Hn)||a.memoizedState!==null,Ds(e,n,a),Hn=o;break;default:Ds(e,n,a)}}function p_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{nl(e)}catch(a){an(n,n.return,a)}}}function m_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nl(e)}catch(a){an(n,n.return,a)}}function Ay(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new u_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new u_),n;default:throw Error(s(435,e.tag))}}function Fu(e,n){var a=Ay(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Iy.bind(null,e,o);o.then(u,u)}})}function Li(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(mr(A.type)){Mn=A.stateNode,Ui=!1;break t}break;case 5:Mn=A.stateNode,Ui=!1;break t;case 3:case 4:Mn=A.stateNode.containerInfo,Ui=!0;break t}A=A.return}if(Mn===null)throw Error(s(160));d_(h,x,u),Mn=null,Ui=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)g_(n,e),n=n.sibling}var Na=null;function g_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Li(n,e),Oi(e),o&4&&(lr(3,e,e.return),ac(3,e),lr(5,e,e.return));break;case 1:Li(n,e),Oi(e),o&512&&(Hn||a===null||ts(a,a.return)),o&64&&ws&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Na;if(Li(n,e),Oi(e),o&512&&(Hn||a===null||ts(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Wa]||h[gn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),li(h,o,a),h[gn]=e,Y(h),o=h;break t;case"link":var x=gv("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(h=x[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}h=u.createElement(o),li(h,o,a),u.head.appendChild(h);break;case"meta":if(x=gv("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(h=x[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}h=u.createElement(o),li(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[gn]=e,Y(h),o=h}e.stateNode=o}else _v(u,e.type,e.stateNode);else e.stateNode=mv(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?_v(u,e.type,e.stateNode):mv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ap(e,e.memoizedProps,a.memoizedProps)}break;case 27:Li(n,e),Oi(e),o&512&&(Hn||a===null||ts(a,a.return)),a!==null&&o&4&&ap(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Li(n,e),Oi(e),o&512&&(Hn||a===null||ts(a,a.return)),e.flags&32){u=e.stateNode;try{Rn(u,"")}catch($t){an(e,e.return,$t)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ap(e,u,a!==null?a.memoizedProps:u)),o&1024&&(op=!0);break;case 6:if(Li(n,e),Oi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($t){an(e,e.return,$t)}}break;case 3:if($u=null,u=Na,Na=Qu(n.containerInfo),Li(n,e),Na=u,Oi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{nl(n.containerInfo)}catch($t){an(e,e.return,$t)}op&&(op=!1,__(e));break;case 4:o=Na,Na=Qu(e.stateNode.containerInfo),Li(n,e),Oi(e),Na=o;break;case 12:Li(n,e),Oi(e);break;case 31:Li(n,e),Oi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fu(e,o)));break;case 13:Li(n,e),Oi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zu=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fu(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,rt=ws,gt=Hn;if(ws=rt||u,Hn=gt||H,Li(n,e),Hn=gt,ws=rt,Oi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ws||Hn||eo(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=H.stateNode;var yt=H.memoizedProps.style,ut=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;A.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch($t){an(H,H.return,$t)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch($t){an(H,H.return,$t)}}}else if(n.tag===18){if(a===null){H=n;try{var ft=H.stateNode;u?rv(ft,!0):rv(H.stateNode,!1)}catch($t){an(H,H.return,$t)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Fu(e,a))));break;case 19:Li(n,e),Oi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fu(e,o)));break;case 30:break;case 21:break;default:Li(n,e),Oi(e)}}function Oi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(l_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=sp(e);Pu(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(Rn(x,""),a.flags&=-33);var A=sp(e);Pu(e,A,x);break;case 3:case 4:var H=a.stateNode.containerInfo,rt=sp(e);rp(e,rt,H);break;default:throw Error(s(161))}}catch(gt){an(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function __(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;__(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ns(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f_(e,n.alternate,n),n=n.sibling}function eo(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:lr(4,n,n.return),eo(n);break;case 1:ts(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&r_(n,n.return,a),eo(n);break;case 27:pc(n.stateNode);case 26:case 5:ts(n,n.return),eo(n);break;case 22:n.memoizedState===null&&eo(n);break;case 30:eo(n);break;default:eo(n)}e=e.sibling}}function Us(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Us(u,h,a),ac(4,h);break;case 1:if(Us(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){an(o,o.return,rt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)j0(H[u],A)}catch(rt){an(o,o.return,rt)}}a&&x&64&&s_(h),sc(h,h.return);break;case 27:c_(h);case 26:case 5:Us(u,h,a),a&&o===null&&x&4&&o_(h),sc(h,h.return);break;case 12:Us(u,h,a);break;case 31:Us(u,h,a),a&&x&4&&p_(u,h);break;case 13:Us(u,h,a),a&&x&4&&m_(u,h);break;case 22:h.memoizedState===null&&Us(u,h,a),sc(h,h.return);break;case 30:break;default:Us(u,h,a)}n=n.sibling}}function lp(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wl(a))}function cp(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wl(e))}function Ua(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)v_(e,n,a,o),n=n.sibling}function v_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ua(e,n,a,o),u&2048&&ac(9,n);break;case 1:Ua(e,n,a,o);break;case 3:Ua(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wl(e)));break;case 12:if(u&2048){Ua(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,A=h.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){an(n,n.return,H)}}else Ua(e,n,a,o);break;case 31:Ua(e,n,a,o);break;case 13:Ua(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Ua(e,n,a,o):rc(e,n):h._visibility&2?Ua(e,n,a,o):(h._visibility|=2,Wo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&lp(x,n);break;case 24:Ua(e,n,a,o),u&2048&&cp(n.alternate,n);break;default:Ua(e,n,a,o)}}function Wo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,A=a,H=o,rt=x.flags;switch(x.tag){case 0:case 11:case 15:Wo(h,x,A,H,u),ac(8,x);break;case 23:break;case 22:var gt=x.stateNode;x.memoizedState!==null?gt._visibility&2?Wo(h,x,A,H,u):rc(h,x):(gt._visibility|=2,Wo(h,x,A,H,u)),u&&rt&2048&&lp(x.alternate,x);break;case 24:Wo(h,x,A,H,u),u&&rt&2048&&cp(x.alternate,x);break;default:Wo(h,x,A,H,u)}n=n.sibling}}function rc(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:rc(a,o),u&2048&&lp(o.alternate,o);break;case 24:rc(a,o),u&2048&&cp(o.alternate,o);break;default:rc(a,o)}n=n.sibling}}var oc=8192;function Yo(e,n,a){if(e.subtreeFlags&oc)for(e=e.child;e!==null;)x_(e,n,a),e=e.sibling}function x_(e,n,a){switch(e.tag){case 26:Yo(e,n,a),e.flags&oc&&e.memoizedState!==null&&hM(a,Na,e.memoizedState,e.memoizedProps);break;case 5:Yo(e,n,a);break;case 3:case 4:var o=Na;Na=Qu(e.stateNode.containerInfo),Yo(e,n,a),Na=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=oc,oc=16777216,Yo(e,n,a),oc=o):Yo(e,n,a));break;default:Yo(e,n,a)}}function S_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,M_(o,e)}S_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)y_(e),e=e.sibling}function y_(e){switch(e.tag){case 0:case 11:case 15:lc(e),e.flags&2048&&lr(9,e,e.return);break;case 3:lc(e);break;case 12:lc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bu(e)):lc(e);break;default:lc(e)}}function Bu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,M_(o,e)}S_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:lr(8,n,n.return),Bu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bu(n));break;default:Bu(n)}e=e.sibling}}function M_(e,n){for(;Jn!==null;){var a=Jn;switch(a.tag){case 0:case 11:case 15:lr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Wl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Jn=o;else t:for(a=e;Jn!==null;){o=Jn;var u=o.sibling,h=o.return;if(h_(o),o===a){Jn=null;break t}if(u!==null){u.return=h,Jn=u;break t}Jn=h}}}var Ry={getCacheForType:function(e){var n=ri(Fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ri(Fn).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Ke=0,pn=null,Le=null,Ie=0,nn=0,qi=null,cr=!1,qo=!1,up=!1,Ls=0,wn=0,ur=0,no=0,fp=0,ji=0,jo=0,cc=null,Ii=null,hp=!1,zu=0,E_=0,Hu=1/0,Gu=null,fr=null,Xn=0,hr=null,Zo=null,Os=0,dp=0,pp=null,b_=null,uc=0,mp=null;function Zi(){return(Ke&2)!==0&&Ie!==0?Ie&-Ie:O.T!==null?yp():Bi()}function T_(){if(ji===0)if((Ie&536870912)===0||Be){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ji=e}else ji=536870912;return e=Wi.current,e!==null&&(e.flags|=32),ji}function Pi(e,n,a){(e===pn&&(nn===2||nn===9)||e.cancelPendingCommit!==null)&&(Ko(e,0),dr(e,Ie,ji,!1)),In(e,a),((Ke&2)===0||e!==pn)&&(e===pn&&((Ke&2)===0&&(no|=a),wn===4&&dr(e,Ie,ji,!1)),es(e))}function A_(e,n,a){if((Ke&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Yt(e,n),u=o?Ny(e,n):_p(e,n,!0),h=o;do{if(u===0){qo&&!o&&dr(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!wy(a)){u=_p(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=cc;var H=A.current.memoizedState.isDehydrated;if(H&&(Ko(A,x).flags|=256),x=_p(A,x,!1),x!==2){if(up&&!H){A.errorRecoveryDisabledLanes|=h,no|=h,u=4;break t}h=Ii,Ii=u,h!==null&&(Ii===null?Ii=h:Ii.push.apply(Ii,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){Ko(e,0),dr(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:dr(o,n,ji,!cr);break t;case 2:Ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=zu+300-E(),10<u)){if(dr(o,n,ji,!cr),ht(o,0,!0)!==0)break t;Os=n,o.timeoutHandle=iv(R_.bind(null,o,a,Ii,Gu,hp,n,ji,no,jo,cr,h,"Throttled",-0,0),u);break t}R_(o,a,Ii,Gu,hp,n,ji,no,jo,cr,h,null,-0,0)}}break}while(!0);es(e)}function R_(e,n,a,o,u,h,x,A,H,rt,gt,yt,ut,ft){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yi},x_(n,h,yt);var $t=(h&62914560)===h?zu-E():(h&4194048)===h?E_-E():0;if($t=dM(yt,$t),$t!==null){Os=h,e.cancelPendingCommit=$t(I_.bind(null,e,n,h,a,o,u,x,A,H,gt,yt,null,ut,ft)),dr(e,h,x,!rt);return}}I_(e,n,h,a,o,u,x,A,H)}function wy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!en(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dr(e,n,a,o){n&=~fp,n&=~no,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Pt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&ka(e,a,n)}function Vu(){return(Ke&6)===0?(fc(0),!1):!0}function gp(){if(Le!==null){if(nn===0)var e=Le.return;else e=Le,Es=qr=null,Ud(e),Ho=null,ql=0,e=Le;for(;e!==null;)a_(e.alternate,e),e=e.return;Le=null}}function Ko(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Os=0,gp(),pn=e,Le=a=ys(e.current,null),Ie=n,nn=0,qi=null,cr=!1,qo=Yt(e,n),up=!1,jo=ji=fp=no=ur=wn=0,Ii=cc=null,hp=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),h=1<<u;n|=e[u],o&=~h}return Ls=n,cu(),a}function C_(e,n){Ee=null,O.H=ec,n===zo||n===_u?(n=X0(),nn=3):n===Sd?(n=X0(),nn=4):nn=n===jd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qi=n,Le===null&&(wn=1,Nu(e,ra(n,e.current)))}function w_(){var e=Wi.current;return e===null?!0:(Ie&4194048)===Ie?ua===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===ua:!1}function D_(){var e=O.H;return O.H=ec,e===null?ec:e}function N_(){var e=O.A;return O.A=Ry,e}function ku(){wn=4,cr||(Ie&4194048)!==Ie&&Wi.current!==null||(qo=!0),(ur&134217727)===0&&(no&134217727)===0||pn===null||dr(pn,Ie,ji,!1)}function _p(e,n,a){var o=Ke;Ke|=2;var u=D_(),h=N_();(pn!==e||Ie!==n)&&(Gu=null,Ko(e,n)),n=!1;var x=wn;t:do try{if(nn!==0&&Le!==null){var A=Le,H=qi;switch(nn){case 8:gp(),x=6;break t;case 3:case 2:case 9:case 6:Wi.current===null&&(n=!0);var rt=nn;if(nn=0,qi=null,Qo(e,A,H,rt),a&&qo){x=0;break t}break;default:rt=nn,nn=0,qi=null,Qo(e,A,H,rt)}}Dy(),x=wn;break}catch(gt){C_(e,gt)}while(!0);return n&&e.shellSuspendCounter++,Es=qr=null,Ke=o,O.H=u,O.A=h,Le===null&&(pn=null,Ie=0,cu()),x}function Dy(){for(;Le!==null;)U_(Le)}function Ny(e,n){var a=Ke;Ke|=2;var o=D_(),u=N_();pn!==e||Ie!==n?(Gu=null,Hu=E()+500,Ko(e,n)):qo=Yt(e,n);t:do try{if(nn!==0&&Le!==null){n=Le;var h=qi;e:switch(nn){case 1:nn=0,qi=null,Qo(e,n,h,1);break;case 2:case 9:if(V0(h)){nn=0,qi=null,L_(n);break}n=function(){nn!==2&&nn!==9||pn!==e||(nn=7),es(e)},h.then(n,n);break t;case 3:nn=7;break t;case 4:nn=5;break t;case 7:V0(h)?(nn=0,qi=null,L_(n)):(nn=0,qi=null,Qo(e,n,h,7));break;case 5:var x=null;switch(Le.tag){case 26:x=Le.memoizedState;case 5:case 27:var A=Le;if(x?vv(x):A.stateNode.complete){nn=0,qi=null;var H=A.sibling;if(H!==null)Le=H;else{var rt=A.return;rt!==null?(Le=rt,Xu(rt)):Le=null}break e}}nn=0,qi=null,Qo(e,n,h,5);break;case 6:nn=0,qi=null,Qo(e,n,h,6);break;case 8:gp(),wn=6;break t;default:throw Error(s(462))}}Uy();break}catch(gt){C_(e,gt)}while(!0);return Es=qr=null,O.H=o,O.A=u,Ke=a,Le!==null?0:(pn=null,Ie=0,cu(),wn)}function Uy(){for(;Le!==null&&!It();)U_(Le)}function U_(e){var n=n_(e.alternate,e,Ls);e.memoizedProps=e.pendingProps,n===null?Xu(e):Le=n}function L_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Kg(a,n,n.pendingProps,n.type,void 0,Ie);break;case 11:n=Kg(a,n,n.pendingProps,n.type.render,n.ref,Ie);break;case 5:Ud(n);default:a_(a,n),n=Le=N0(n,Ls),n=n_(a,n,Ls)}e.memoizedProps=e.pendingProps,n===null?Xu(e):Le=n}function Qo(e,n,a,o){Es=qr=null,Ud(n),Ho=null,ql=0;var u=n.return;try{if(Sy(e,u,n,a,Ie)){wn=1,Nu(e,ra(a,e.current)),Le=null;return}}catch(h){if(u!==null)throw Le=u,h;wn=1,Nu(e,ra(a,e.current)),Le=null;return}n.flags&32768?(Be||o===1?e=!0:qo||(Ie&536870912)!==0?e=!1:(cr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Wi.current,o!==null&&o.tag===13&&(o.flags|=16384))),O_(n,e)):Xu(n)}function Xu(e){var n=e;do{if((n.flags&32768)!==0){O_(n,cr);return}e=n.return;var a=Ey(n.alternate,n,Ls);if(a!==null){Le=a;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=e}while(n!==null);wn===0&&(wn=5)}function O_(e,n){do{var a=by(e.alternate,e);if(a!==null){a.flags&=32767,Le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Le=e;return}Le=e=a}while(e!==null);wn=6,Le=null}function I_(e,n,a,o,u,h,x,A,H){e.cancelPendingCommit=null;do Wu();while(Xn!==0);if((Ke&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=sd,ui(e,a,h,x,A,H),e===pn&&(Le=pn=null,Ie=0),Zo=n,hr=e,Os=a,dp=h,pp=u,b_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Py(K,function(){return H_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=P.p,P.p=2,x=Ke,Ke|=4;try{Ty(e,n,a)}finally{Ke=x,P.p=u,O.T=o}}Xn=1,P_(),F_(),B_()}}function P_(){if(Xn===1){Xn=0;var e=hr,n=Zo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Ke;Ke|=4;try{g_(n,e);var h=wp,x=Qs(e.containerInfo),A=h.focusedElem,H=h.selectionRange;if(x!==A&&A&&A.ownerDocument&&Ka(A.ownerDocument.documentElement,A)){if(H!==null&&Qa(A)){var rt=H.start,gt=H.end;if(gt===void 0&&(gt=rt),"selectionStart"in A)A.selectionStart=rt,A.selectionEnd=Math.min(gt,A.value.length);else{var yt=A.ownerDocument||document,ut=yt&&yt.defaultView||window;if(ut.getSelection){var ft=ut.getSelection(),$t=A.textContent.length,de=Math.min(H.start,$t),cn=H.end===void 0?de:Math.min(H.end,$t);!ft.extend&&de>cn&&(x=cn,cn=de,de=x);var Q=Xe(A,de),W=Xe(A,cn);if(Q&&W&&(ft.rangeCount!==1||ft.anchorNode!==Q.node||ft.anchorOffset!==Q.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var st=yt.createRange();st.setStart(Q.node,Q.offset),ft.removeAllRanges(),de>cn?(ft.addRange(st),ft.extend(W.node,W.offset)):(st.setEnd(W.node,W.offset),ft.addRange(st))}}}}for(yt=[],ft=A;ft=ft.parentNode;)ft.nodeType===1&&yt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<yt.length;A++){var St=yt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}af=!!Cp,wp=Cp=null}finally{Ke=u,P.p=o,O.T=a}}e.current=n,Xn=2}}function F_(){if(Xn===2){Xn=0;var e=hr,n=Zo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Ke;Ke|=4;try{f_(e,n.alternate,n)}finally{Ke=u,P.p=o,O.T=a}}Xn=3}}function B_(){if(Xn===4||Xn===3){Xn=0,w();var e=hr,n=Zo,a=Os,o=b_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xn=5:(Xn=0,Zo=hr=null,z_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(fr=null),fs(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=P.p,P.p=2,O.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];h(A.value,{componentStack:A.stack})}}finally{O.T=n,P.p=u}}(Os&3)!==0&&Wu(),es(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===mp?uc++:(uc=0,mp=e):uc=0,fc(0)}}function z_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wl(n)))}function Wu(){return P_(),F_(),B_(),H_()}function H_(){if(Xn!==5)return!1;var e=hr,n=dp;dp=0;var a=fs(Os),o=O.T,u=P.p;try{P.p=32>a?32:a,O.T=null,a=pp,pp=null;var h=hr,x=Os;if(Xn=0,Zo=hr=null,Os=0,(Ke&6)!==0)throw Error(s(331));var A=Ke;if(Ke|=4,y_(h.current),v_(h,h.current,x,a),Ke=A,fc(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Tt,h)}catch{}return!0}finally{P.p=u,O.T=o,z_(e,n)}}function G_(e,n,a){n=ra(a,n),n=qd(e.stateNode,n,2),e=sr(e,n,2),e!==null&&(In(e,2),es(e))}function an(e,n,a){if(e.tag===3)G_(e,e,a);else for(;n!==null;){if(n.tag===3){G_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(fr===null||!fr.has(o))){e=ra(a,e),a=Vg(2),o=sr(n,a,2),o!==null&&(kg(a,o,n,e),In(o,2),es(o));break}}n=n.return}}function vp(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Cy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(up=!0,u.add(a),e=Ly.bind(null,e,n,a),n.then(e,e))}function Ly(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,pn===e&&(Ie&a)===a&&(wn===4||wn===3&&(Ie&62914560)===Ie&&300>E()-zu?(Ke&2)===0&&Ko(e,0):fp|=a,jo===Ie&&(jo=0)),es(e)}function V_(e,n){n===0&&(n=je()),e=Xr(e,n),e!==null&&(In(e,n),es(e))}function Oy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),V_(e,a)}function Iy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),V_(e,a)}function Py(e,n){return Ht(e,n)}var Yu=null,Jo=null,xp=!1,qu=!1,Sp=!1,pr=0;function es(e){e!==Jo&&e.next===null&&(Jo===null?Yu=Jo=e:Jo=Jo.next=e),qu=!0,xp||(xp=!0,By())}function fc(e,n){if(!Sp&&qu){Sp=!0;do for(var a=!1,o=Yu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Pt(42|e)+1)-1,h&=u&~(x&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Y_(o,h))}else h=Ie,h=ht(o,o===pn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Yt(o,h)||(a=!0,Y_(o,h));o=o.next}while(a);Sp=!1}}function Fy(){k_()}function k_(){qu=xp=!1;var e=0;pr!==0&&jy()&&(e=pr);for(var n=E(),a=null,o=Yu;o!==null;){var u=o.next,h=X_(o,n);h===0?(o.next=null,a===null?Yu=u:a.next=u,u===null&&(Jo=a)):(a=o,(e!==0||(h&3)!==0)&&(qu=!0)),o=u}Xn!==0&&Xn!==5||fc(e),pr!==0&&(pr=0)}function X_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Pt(h),A=1<<x,H=u[x];H===-1?((A&a)===0||(A&o)!==0)&&(u[x]=ie(A,n)):H<=n&&(e.expiredLanes|=A),h&=~A}if(n=pn,a=Ie,a=ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(nn===2||nn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Gt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Gt(o),fs(a)){case 2:case 8:a=it;break;case 32:a=K;break;case 268435456:a=Ut;break;default:a=K}return o=W_.bind(null,e),a=Ht(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Gt(o),e.callbackPriority=2,e.callbackNode=null,2}function W_(e,n){if(Xn!==0&&Xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wu()&&e.callbackNode!==a)return null;var o=Ie;return o=ht(e,e===pn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(A_(e,o,n),X_(e,E()),e.callbackNode!=null&&e.callbackNode===a?W_.bind(null,e):null)}function Y_(e,n){if(Wu())return null;A_(e,n,!0)}function By(){Ky(function(){(Ke&6)!==0?Ht($,Fy):k_()})}function yp(){if(pr===0){var e=Fo;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),pr=e}return pr}function q_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ea(""+e)}function j_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function zy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=q_((u[vn]||null).action),x=o.submitter;x&&(n=(n=x[vn]||null)?q_(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var A=new To("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var H=x?j_(u,x):new FormData(u);Gd(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(A.preventDefault(),H=x?j_(u,x):new FormData(u),Gd(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var Mp=0;Mp<ad.length;Mp++){var Ep=ad[Mp],Hy=Ep.toLowerCase(),Gy=Ep[0].toUpperCase()+Ep.slice(1);Da(Hy,"on"+Gy)}Da(T0,"onAnimationEnd"),Da(A0,"onAnimationIteration"),Da(R0,"onAnimationStart"),Da("dblclick","onDoubleClick"),Da("focusin","onFocus"),Da("focusout","onBlur"),Da(iy,"onTransitionRun"),Da(ay,"onTransitionStart"),Da(sy,"onTransitionCancel"),Da(C0,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hc));function Z_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],H=A.instance,rt=A.currentTarget;if(A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=rt;try{h(u)}catch(gt){lu(gt)}u.currentTarget=null,h=H}else for(x=0;x<o.length;x++){if(A=o[x],H=A.instance,rt=A.currentTarget,A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=rt;try{h(u)}catch(gt){lu(gt)}u.currentTarget=null,h=H}}}}function Oe(e,n){var a=n[Ri];a===void 0&&(a=n[Ri]=new Set);var o=e+"__bubble";a.has(o)||(K_(n,e,2,!1),a.add(o))}function bp(e,n,a){var o=0;n&&(o|=4),K_(a,e,o,n)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Tp(e){if(!e[ju]){e[ju]=!0,ct.forEach(function(a){a!=="selectionchange"&&(Vy.has(a)||bp(a,!1,e),bp(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ju]||(n[ju]=!0,bp("selectionchange",!1,n))}}function K_(e,n,a,o){switch(Tv(n)){case 2:var u=gM;break;case 8:u=_M;break;default:u=Hp}a=u.bind(null,n,a,e),u=void 0,!Il||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Ap(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Sa(A),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=h=x;continue t}A=A.parentNode}}o=o.return}kn(function(){var rt=h,gt=ps(a),yt=[];t:{var ut=w0.get(e);if(ut!==void 0){var ft=To,$t=e;switch(e){case"keypress":if(Br(a)===0)break t;case"keydown":case"keyup":ft=eu;break;case"focusin":$t="focus",ft=Ro;break;case"focusout":$t="blur",ft=Ro;break;case"beforeblur":case"afterblur":ft=Ro;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Fl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Vr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Vl;break;case T0:case A0:case R0:ft=Zc;break;case C0:ft=su;break;case"scroll":case"scrollend":ft=jc;break;case"wheel":ft=ou;break;case"copy":case"cut":case"paste":ft=ja;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=wo;break;case"toggle":case"beforetoggle":ft=ee}var de=(n&4)!==0,cn=!de&&(e==="scroll"||e==="scrollend"),Q=de?ut!==null?ut+"Capture":null:ut;de=[];for(var W=rt,st;W!==null;){var St=W;if(st=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||st===null||Q===null||(St=ms(W,Q),St!=null&&de.push(dc(W,St,st))),cn)break;W=W.return}0<de.length&&(ut=new ft(ut,$t,null,a,gt),yt.push({event:ut,listeners:de}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ut&&a!==ds&&($t=a.relatedTarget||a.fromElement)&&(Sa($t)||$t[xa]))break t;if((ft||ut)&&(ut=gt.window===gt?gt:(ut=gt.ownerDocument)?ut.defaultView||ut.parentWindow:window,ft?($t=a.relatedTarget||a.toElement,ft=rt,$t=$t?Sa($t):null,$t!==null&&(cn=c($t),de=$t.tag,$t!==cn||de!==5&&de!==27&&de!==6)&&($t=null)):(ft=null,$t=rt),ft!==$t)){if(de=Fl,St="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(de=wo,St="onPointerLeave",Q="onPointerEnter",W="pointer"),cn=ft==null?ut:Ma(ft),st=$t==null?ut:Ma($t),ut=new de(St,W+"leave",ft,a,gt),ut.target=cn,ut.relatedTarget=st,St=null,Sa(gt)===rt&&(de=new de(Q,W+"enter",$t,a,gt),de.target=st,de.relatedTarget=cn,St=de),cn=St,ft&&$t)e:{for(de=ky,Q=ft,W=$t,st=0,St=Q;St;St=de(St))st++;St=0;for(var ue=W;ue;ue=de(ue))St++;for(;0<st-St;)Q=de(Q),st--;for(;0<St-st;)W=de(W),St--;for(;st--;){if(Q===W||W!==null&&Q===W.alternate){de=Q;break e}Q=de(Q),W=de(W)}de=null}else de=null;ft!==null&&Q_(yt,ut,ft,de,!1),$t!==null&&cn!==null&&Q_(yt,cn,$t,de,!0)}}t:{if(ut=rt?Ma(rt):window,ft=ut.nodeName&&ut.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ut.type==="file")var Ye=Un;else if(xn(ut))if(Ni)Ye=Me;else{Ye=ai;var se=Mi}else ft=ut.nodeName,!ft||ft.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?rt&&Zn(rt.elementType)&&(Ye=Un):Ye=Vi;if(Ye&&(Ye=Ye(e,rt))){Gi(yt,Ye,a,gt);break t}se&&se(e,ut,rt),e==="focusout"&&rt&&ut.type==="number"&&rt.memoizedProps.value!=null&&zi(ut,"number",ut.value)}switch(se=rt?Ma(rt):window,e){case"focusin":(xn(se)||se.contentEditable==="true")&&(di=se,xs=rt,Ss=null);break;case"focusout":Ss=xs=di=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,Do(yt,a,gt);break;case"selectionchange":if(aa)break;case"keydown":case"keyup":Do(yt,a,gt)}var Te;if(Jt)t:{switch(e){case"compositionstart":var Pe="onCompositionStart";break t;case"compositionend":Pe="onCompositionEnd";break t;case"compositionupdate":Pe="onCompositionUpdate";break t}Pe=void 0}else dn?fi(e,a)&&(Pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(ke&&a.locale!=="ko"&&(dn||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&dn&&(Te=bo()):(Hi=gt,Pl="value"in Hi?Hi.value:Hi.textContent,dn=!0)),se=Zu(rt,Pe),0<se.length&&(Pe=new Gl(Pe,e,null,a,gt),yt.push({event:Pe,listeners:se}),Te?Pe.data=Te:(Te=hi(a),Te!==null&&(Pe.data=Te)))),(Te=Se?Fe(e,a):rn(e,a))&&(Pe=Zu(rt,"onBeforeInput"),0<Pe.length&&(se=new Gl("onBeforeInput","beforeinput",null,a,gt),yt.push({event:se,listeners:Pe}),se.data=Te)),zy(yt,e,rt,a,gt)}Z_(yt,n)})}function dc(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Zu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=ms(e,a),u!=null&&o.unshift(dc(e,u,h)),u=ms(e,n),u!=null&&o.push(dc(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ky(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Q_(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var A=a,H=A.alternate,rt=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||rt===null||(H=rt,u?(rt=ms(a,h),rt!=null&&x.unshift(dc(a,rt,H))):u||(rt=ms(a,h),rt!=null&&x.push(dc(a,rt,H)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Xy=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function J_(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(Wy,"")}function $_(e,n){return n=J_(n),J_(e)===n}function ln(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Rn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Rn(e,""+o);break;case"className":he(e,"class",o);break;case"tabIndex":he(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":he(e,a,o);break;case"style":Pn(e,o,h);break;case"data":if(n!=="object"){he(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ea(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&ln(e,n,"name",u.name,u,null),ln(e,n,"formEncType",u.formEncType,u,null),ln(e,n,"formMethod",u.formMethod,u,null),ln(e,n,"formTarget",u.formTarget,u,null)):(ln(e,n,"encType",u.encType,u,null),ln(e,n,"method",u.method,u,null),ln(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ea(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=yi);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ea(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),pe(e,"popover",o);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":pe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wi.get(a)||a,pe(e,a,o))}}function Rp(e,n,a,o,u,h){switch(a){case"style":Pn(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Rn(e,o):(typeof o=="number"||typeof o=="bigint")&&Rn(e,""+o);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[vn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):pe(e,a,o)}}}function li(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,h,x,a,null)}}u&&ln(e,n,"srcSet",a.srcSet,a,null),o&&ln(e,n,"src",a.src,a,null);return;case"input":Oe("invalid",e);var A=h=x=u=null,H=null,rt=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":x=gt;break;case"checked":H=gt;break;case"defaultChecked":rt=gt;break;case"value":h=gt;break;case"defaultValue":A=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:ln(e,n,o,gt,a,null)}}xi(e,h,A,H,rt,x,u,!1);return;case"select":Oe("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:ln(e,n,u,A,a,null)}n=h,a=x,e.multiple=!!o,n!=null?Si(e,!!o,n,!1):a!=null&&Si(e,!!o,a,!0);return;case"textarea":Oe("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ln(e,n,x,A,a,null)}En(e,o,u,h);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ln(e,n,H,o,a,null));return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(o=0;o<hc.length;o++)Oe(hc[o],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(o=a[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,rt,o,a,null)}return;default:if(Zn(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&Rp(e,n,gt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&ln(e,n,A,o,a,null))}function Yy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,A=null,H=null,rt=null,gt=null;for(ft in a){var yt=a[ft];if(a.hasOwnProperty(ft)&&yt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":H=yt;default:o.hasOwnProperty(ft)||ln(e,n,ft,null,o,yt)}}for(var ut in o){var ft=o[ut];if(yt=a[ut],o.hasOwnProperty(ut)&&(ft!=null||yt!=null))switch(ut){case"type":h=ft;break;case"name":u=ft;break;case"checked":rt=ft;break;case"defaultChecked":gt=ft;break;case"value":x=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==yt&&ln(e,n,ut,ft,o,yt)}}ii(e,x,A,H,rt,gt,h,u);return;case"select":ft=x=A=ut=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ft=H;default:o.hasOwnProperty(h)||ln(e,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":ut=h;break;case"defaultValue":A=h;break;case"multiple":x=h;default:h!==H&&ln(e,n,u,h,o,H)}n=A,a=x,o=ft,ut!=null?Si(e,!!a,ut,!1):!!o!=!!a&&(n!=null?Si(e,!!a,n,!0):Si(e,!!a,a?[]:"",!1));return;case"textarea":ft=ut=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ln(e,n,A,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":ut=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&ln(e,n,x,u,o,h)}We(e,ut,ft);return;case"option":for(var $t in a)ut=a[$t],a.hasOwnProperty($t)&&ut!=null&&!o.hasOwnProperty($t)&&($t==="selected"?e.selected=!1:ln(e,n,$t,null,o,ut));for(H in o)ut=o[H],ft=a[H],o.hasOwnProperty(H)&&ut!==ft&&(ut!=null||ft!=null)&&(H==="selected"?e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol":ln(e,n,H,ut,o,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)ut=a[de],a.hasOwnProperty(de)&&ut!=null&&!o.hasOwnProperty(de)&&ln(e,n,de,null,o,ut);for(rt in o)if(ut=o[rt],ft=a[rt],o.hasOwnProperty(rt)&&ut!==ft&&(ut!=null||ft!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ln(e,n,rt,ut,o,ft)}return;default:if(Zn(n)){for(var cn in a)ut=a[cn],a.hasOwnProperty(cn)&&ut!==void 0&&!o.hasOwnProperty(cn)&&Rp(e,n,cn,void 0,o,ut);for(gt in o)ut=o[gt],ft=a[gt],!o.hasOwnProperty(gt)||ut===ft||ut===void 0&&ft===void 0||Rp(e,n,gt,ut,o,ft);return}}for(var Q in a)ut=a[Q],a.hasOwnProperty(Q)&&ut!=null&&!o.hasOwnProperty(Q)&&ln(e,n,Q,null,o,ut);for(yt in o)ut=o[yt],ft=a[yt],!o.hasOwnProperty(yt)||ut===ft||ut==null&&ft==null||ln(e,n,yt,ut,o,ft)}function tv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,A=u.duration;if(h&&A&&tv(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],rt=H.startTime;if(rt>A)break;var gt=H.transferSize,yt=H.initiatorType;gt&&tv(yt)&&(H=H.responseEnd,x+=gt*(H<A?1:(A-rt)/(H-rt)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cp=null,wp=null;function Ku(e){return e.nodeType===9?e:e.ownerDocument}function ev(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Dp(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Np=null;function jy(){var e=window.event;return e&&e.type==="popstate"?e===Np?!1:(Np=e,!0):(Np=null,!1)}var iv=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(e){return av.resolve(null).then(e).catch(Qy)}:iv;function Qy(e){setTimeout(function(){throw e})}function mr(e){return e==="head"}function sv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),nl(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")pc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pc(a);for(var h=a.firstChild;h;){var x=h.nextSibling,A=h.nodeName;h[Wa]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&pc(e.ownerDocument.body);a=u}while(a);nl(n)}function rv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Up(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Up(a),qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Wa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=fa(e.nextSibling),e===null)break}return null}function $y(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fa(e.nextSibling),e===null))return null;return e}function ov(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fa(e.nextSibling),e===null))return null;return e}function Lp(e){return e.data==="$?"||e.data==="$~"}function Op(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ip=null;function lv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function cv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function uv(e,n,a){switch(n=Ku(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qs(e)}var ha=new Map,fv=new Set;function Qu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Is=P.d;P.d={f:eM,r:nM,D:iM,C:aM,L:sM,m:rM,X:lM,S:oM,M:cM};function eM(){var e=Is.f(),n=Vu();return e||n}function nM(e){var n=ya(e);n!==null&&n.tag===5&&n.type==="form"?Cg(n):Is.r(e)}var $o=typeof document>"u"?null:document;function hv(e,n,a){var o=$o;if(o&&typeof n=="string"&&n){var u=xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),fv.has(u)||(fv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),li(n,"link",e),Y(n),o.head.appendChild(n)))}}function iM(e){Is.D(e),hv("dns-prefetch",e,null)}function aM(e,n){Is.C(e,n),hv("preconnect",e,n)}function sM(e,n,a){Is.L(e,n,a);var o=$o;if(o&&e&&n){var u='link[rel="preload"][as="'+xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xe(a.imageSizes)+'"]')):u+='[href="'+xe(e)+'"]';var h=u;switch(n){case"style":h=tl(e);break;case"script":h=el(e)}ha.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ha.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(mc(h))||n==="script"&&o.querySelector(gc(h))||(n=o.createElement("link"),li(n,"link",e),Y(n),o.head.appendChild(n)))}}function rM(e,n){Is.m(e,n);var a=$o;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xe(o)+'"][href="'+xe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=el(e)}if(!ha.has(h)&&(e=v({rel:"modulepreload",href:e},n),ha.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gc(h)))return}o=a.createElement("link"),li(o,"link",e),Y(o),a.head.appendChild(o)}}}function oM(e,n,a){Is.S(e,n,a);var o=$o;if(o&&e){var u=R(o).hoistableStyles,h=tl(e);n=n||"default";var x=u.get(h);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(mc(h)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ha.get(h))&&Pp(e,a);var H=x=o.createElement("link");Y(H),li(H,"link",e),H._p=new Promise(function(rt,gt){H.onload=rt,H.onerror=gt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ju(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(h,x)}}}function lM(e,n){Is.X(e,n);var a=$o;if(a&&e){var o=R(a).hoistableScripts,u=el(e),h=o.get(u);h||(h=a.querySelector(gc(u)),h||(e=v({src:e,async:!0},n),(n=ha.get(u))&&Fp(e,n),h=a.createElement("script"),Y(h),li(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function cM(e,n){Is.M(e,n);var a=$o;if(a&&e){var o=R(a).hoistableScripts,u=el(e),h=o.get(u);h||(h=a.querySelector(gc(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=ha.get(u))&&Fp(e,n),h=a.createElement("script"),Y(h),li(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function dv(e,n,a,o){var u=(u=nt.current)?Qu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tl(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=tl(a.href);var h=R(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(mc(e)))&&!h._p&&(x.instance=h,x.state.loading=5),ha.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ha.set(e,a),h||uM(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=el(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function tl(e){return'href="'+xe(e)+'"'}function mc(e){return'link[rel="stylesheet"]['+e+"]"}function pv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function uM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),li(n,"link",a),Y(n),e.head.appendChild(n))}function el(e){return'[src="'+xe(e)+'"]'}function gc(e){return"script[async]"+e}function mv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xe(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),li(o,"style",u),Ju(o,a.precedence,e),n.instance=o;case"stylesheet":u=tl(a.href);var h=e.querySelector(mc(u));if(h)return n.state.loading|=4,n.instance=h,Y(h),h;o=pv(a),(u=ha.get(u))&&Pp(o,u),h=(e.ownerDocument||e).createElement("link"),Y(h);var x=h;return x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),li(h,"link",o),n.state.loading|=4,Ju(h,a.precedence,e),n.instance=h;case"script":return h=el(a.src),(u=e.querySelector(gc(h)))?(n.instance=u,Y(u),u):(o=a,(u=ha.get(h))&&(o=v({},a),Fp(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),li(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ju(o,a.precedence,e));return n.instance}function Ju(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Pp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Fp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $u=null;function gv(e,n,a){if($u===null){var o=new Map,u=$u=new Map;u.set(a,o)}else u=$u,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Wa]||h[gn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(h):o.set(x,[h])}}return o}function _v(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function vv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=tl(o.href),h=n.querySelector(mc(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=tf.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Y(h);return}h=n.ownerDocument||n,o=pv(o),(u=ha.get(u))&&Pp(o,u),h=h.createElement("link"),Y(h);var x=h;x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),li(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tf.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bp=0;function dM(e,n){return e.stylesheets&&e.count===0&&nf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&nf(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Bp===0&&(Bp=62500*qy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nf(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Bp?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function tf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ef=null;function nf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ef=new Map,n.forEach(pM,e),ef=null,tf.call(e))}function pM(e,n){if(!(n.state.loading&4)){var a=ef.get(e);if(a)var o=a.get(null);else{a=new Map,ef.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=tf.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var _c={$$typeof:L,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function mM(e,n,a,o,u,h,x,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function xv(e,n,a,o,u,h,x,A,H,rt,gt,yt){return e=new mM(e,n,a,x,H,rt,gt,yt,A),n=1,h===!0&&(n|=24),h=Xi(3,null,null,n),e.current=h,h.stateNode=e,n=_d(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},yd(h),e}function Sv(e){return e?(e=Uo,e):Uo}function yv(e,n,a,o,u,h){u=Sv(u),o.context===null?o.context=u:o.pendingContext=u,o=ar(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=sr(e,o,n),a!==null&&(Pi(a,e,n),Zl(a,e,n))}function Mv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function zp(e,n){Mv(e,n),(e=e.alternate)&&Mv(e,n)}function Ev(e){if(e.tag===13||e.tag===31){var n=Xr(e,67108864);n!==null&&Pi(n,e,67108864),zp(e,67108864)}}function bv(e){if(e.tag===13||e.tag===31){var n=Zi();n=us(n);var a=Xr(e,n);a!==null&&Pi(a,e,n),zp(e,n)}}var af=!0;function gM(e,n,a,o){var u=O.T;O.T=null;var h=P.p;try{P.p=2,Hp(e,n,a,o)}finally{P.p=h,O.T=u}}function _M(e,n,a,o){var u=O.T;O.T=null;var h=P.p;try{P.p=8,Hp(e,n,a,o)}finally{P.p=h,O.T=u}}function Hp(e,n,a,o){if(af){var u=Gp(o);if(u===null)Ap(e,n,o,sf,a),Av(e,o);else if(xM(u,e,n,a,o))o.stopPropagation();else if(Av(e,o),n&4&&-1<vM.indexOf(e)){for(;u!==null;){var h=ya(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Et(h.pendingLanes);if(x!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var H=1<<31-Pt(x);A.entanglements[1]|=H,x&=~H}es(h),(Ke&6)===0&&(Hu=E()+500,fc(0))}}break;case 31:case 13:A=Xr(h,2),A!==null&&Pi(A,h,2),Vu(),zp(h,2)}if(h=Gp(o),h===null&&Ap(e,n,o,sf,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Ap(e,n,o,null,a)}}function Gp(e){return e=ps(e),Vp(e)}var sf=null;function Vp(e){if(sf=null,e=Sa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return sf=e,null}function Tv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case $:return 2;case it:return 8;case K:case bt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var kp=!1,gr=null,_r=null,vr=null,vc=new Map,xc=new Map,xr=[],vM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Av(e,n){switch(e){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":vc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xc.delete(n.pointerId)}}function Sc(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ya(n),n!==null&&Ev(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xM(e,n,a,o,u){switch(n){case"focusin":return gr=Sc(gr,e,n,a,o,u),!0;case"dragenter":return _r=Sc(_r,e,n,a,o,u),!0;case"mouseover":return vr=Sc(vr,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return vc.set(h,Sc(vc.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,xc.set(h,Sc(xc.get(h)||null,e,n,a,o,u)),!0}return!1}function Rv(e){var n=Sa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Xa(e.priority,function(){bv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Xa(e.priority,function(){bv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rf(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Gp(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ds=o,a.target.dispatchEvent(o),ds=null}else return n=ya(a),n!==null&&Ev(n),e.blockedOn=a,!1;n.shift()}return!0}function Cv(e,n,a){rf(e)&&a.delete(n)}function SM(){kp=!1,gr!==null&&rf(gr)&&(gr=null),_r!==null&&rf(_r)&&(_r=null),vr!==null&&rf(vr)&&(vr=null),vc.forEach(Cv),xc.forEach(Cv)}function of(e,n){e.blockedOn===n&&(e.blockedOn=null,kp||(kp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,SM)))}var lf=null;function wv(e){lf!==e&&(lf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lf===e&&(lf=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Vp(o||a)===null)continue;break}var h=ya(a);h!==null&&(e.splice(n,3),n-=3,Gd(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function nl(e){function n(H){return of(H,e)}gr!==null&&of(gr,e),_r!==null&&of(_r,e),vr!==null&&of(vr,e),vc.forEach(n),xc.forEach(n);for(var a=0;a<xr.length;a++){var o=xr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<xr.length&&(a=xr[0],a.blockedOn===null);)Rv(a),a.blockedOn===null&&xr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[vn]||null;if(typeof h=="function")x||wv(a);else if(x){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[vn]||null)A=x.formAction;else if(Vp(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),wv(a)}}}function Dv(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Xp(e){this._internalRoot=e}cf.prototype.render=Xp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Zi();yv(a,o,e,n,null,null)},cf.prototype.unmount=Xp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;yv(e.current,2,null,e,null,null),Vu(),n[xa]=null}};function cf(e){this._internalRoot=e}cf.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<xr.length&&n!==0&&n<xr[a].priority;a++);xr.splice(a,0,e),a===0&&Rv(e)}};var Nv=t.version;if(Nv!=="19.2.4")throw Error(s(527,Nv,"19.2.4"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var yM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uf.isDisabled&&uf.supportsFiber)try{Tt=uf.inject(yM),At=uf}catch{}}return Mc.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Bg,h=zg,x=Hg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=xv(e,1,!1,null,null,a,o,null,u,h,x,Dv),e[xa]=n.current,Tp(e),new Xp(n)},Mc.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Bg,x=zg,A=Hg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=xv(e,1,!0,n,a??null,o,u,H,h,x,A,Dv),n.context=Sv(null),a=n.current,o=Zi(),o=us(o),u=ar(o),u.callback=null,sr(a,u,o),a=o,n.current.lanes=a,In(n,a),es(n),e[xa]=n.current,Tp(e),new cf(n)},Mc.version="19.2.4",Mc}var Gv;function NM(){if(Gv)return qp.exports;Gv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),qp.exports=DM(),qp.exports}var UM=NM();const Ph="183",kx=0,Im=1,Xx=2,Wx=0,po=1,Yx=2,Sl=3,Ws=0,_i=1,Vn=2,rs=0,mo=1,Pm=2,Fm=3,Bm=4,qx=5,Cr=100,jx=101,Zx=102,Kx=103,Qx=104,Jx=200,$x=201,tS=202,eS=203,Yf=204,qf=205,nS=206,iS=207,aS=208,sS=209,rS=210,oS=211,lS=212,cS=213,uS=214,jf=0,Zf=1,Kf=2,go=3,Qf=4,Jf=5,$f=6,th=7,Fh=0,fS=1,hS=2,za=0,Qm=1,Jm=2,$m=3,Bh=4,t0=5,e0=6,n0=7,i0=300,Nr=301,_o=302,Hf=303,Gf=304,qc=306,bl=1e3,ss=1001,eh=1002,ti=1003,dS=1004,Oc=1005,ei=1006,Vf=1007,ks=1008,Fi=1009,a0=1010,s0=1011,Tl=1012,zh=1013,Ga=1014,ga=1015,os=1016,Hh=1017,Gh=1018,Al=1020,r0=35902,o0=35899,l0=1021,c0=1022,_a=1023,ls=1026,wr=1027,Vh=1028,kh=1029,vo=1030,Xh=1031,Wh=1033,Pc=33776,Fc=33777,Bc=33778,zc=33779,nh=35840,ih=35841,ah=35842,sh=35843,rh=36196,oh=37492,lh=37496,ch=37488,uh=37489,fh=37490,hh=37491,dh=37808,ph=37809,mh=37810,gh=37811,_h=37812,vh=37813,xh=37814,Sh=37815,yh=37816,Mh=37817,Eh=37818,bh=37819,Th=37820,Ah=37821,Rh=36492,Ch=36494,wh=36495,Dh=36283,Nh=36284,Uh=36285,Lh=36286,pS=3200,Yh=0,mS=1,Gs="",Wn="srgb",xo="srgb-linear",kc="linear",$e="srgb",uo=7680,zm=519,gS=512,_S=513,vS=514,qh=515,xS=516,SS=517,jh=518,yS=519,Hm=35044,Gm="300 es",Ba=2e3,Rl=2001;function LM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Oh(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function MS(){const r=Oh("canvas");return r.style.display="block",r}const Vv={};function Vm(...r){const t="THREE."+r.shift();console.log(t,...r)}function ES(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ve(...r){r=ES(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ge(...r){r=ES(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Xc(...r){const t=r.join(" ");t in Vv||(Vv[t]=!0,ve(...r))}function OM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const IM={[jf]:Zf,[Kf]:$f,[Qf]:th,[go]:Jf,[Zf]:jf,[$f]:Kf,[th]:Qf,[Jf]:go};class So{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kv=1234567;const Hc=Math.PI/180,Cl=180/Math.PI;function Nl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(mi[r&255]+mi[r>>8&255]+mi[r>>16&255]+mi[r>>24&255]+"-"+mi[t&255]+mi[t>>8&255]+"-"+mi[t>>16&15|64]+mi[t>>24&255]+"-"+mi[i&63|128]+mi[i>>8&255]+"-"+mi[i>>16&255]+mi[i>>24&255]+mi[s&255]+mi[s>>8&255]+mi[s>>16&255]+mi[s>>24&255]).toLowerCase()}function De(r,t,i){return Math.max(t,Math.min(i,r))}function u0(r,t){return(r%t+t)%t}function PM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function FM(r,t,i){return r!==t?(i-r)/(t-r):0}function Gc(r,t,i){return(1-i)*r+i*t}function BM(r,t,i,s){return Gc(r,t,1-Math.exp(-i*s))}function zM(r,t=1){return t-Math.abs(u0(r,t*2)-t)}function HM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function GM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function VM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function kM(r,t){return r+Math.random()*(t-r)}function XM(r){return r*(.5-Math.random())}function WM(r){r!==void 0&&(kv=r);let t=kv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function YM(r){return r*Hc}function qM(r){return r*Cl}function jM(r){return(r&r-1)===0&&r!==0}function ZM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function KM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function QM(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),y=c((s-t)/2),b=f((s-t)/2);switch(l){case"XYX":r.set(d*_,m*v,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*b,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*b,d*p);break;case"ZYZ":r.set(m*b,m*y,d*_,d*p);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function xl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Tn={DEG2RAD:Hc,RAD2DEG:Cl,generateUUID:Nl,clamp:De,euclideanModulo:u0,mapLinear:PM,inverseLerp:FM,lerp:Gc,damp:BM,pingpong:zM,smoothstep:HM,smootherstep:GM,randInt:VM,randFloat:kM,randFloatSpread:XM,seededRandom:WM,degToRad:YM,radToDeg:qM,isPowerOfTwo:jM,ceilPowerOfTwo:ZM,floorPowerOfTwo:KM,setQuaternionFromProperEuler:QM,normalize:bi,denormalize:xl};class Ue{constructor(t=0,i=0){Ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ys{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],y=c[f+1],b=c[f+2],D=c[f+3];if(v!==D||m!==g||p!==y||_!==b){let M=m*g+p*y+_*b+v*D;M<0&&(g=-g,y=-y,b=-b,D=-D,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);S=Math.sin(S*C)/L,d=Math.sin(d*C)/L,m=m*S+g*d,p=p*S+y*d,_=_*S+b*d,v=v*S+D*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+b*d,v=v*S+D*d;const C=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=C,p*=C,_*=C,v*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],y=c[f+2],b=c[f+3];return t[i]=d*b+_*v+m*y-p*g,t[i+1]=m*b+_*g+p*v-d*y,t[i+2]=p*b+_*y+d*g-m*v,t[i+3]=_*b-d*v-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*y*b,this._y=p*y*v-g*_*b,this._z=p*_*b+g*y*v,this._w=p*_*v-g*y*b;break;case"YXZ":this._x=g*_*v+p*y*b,this._y=p*y*v-g*_*b,this._z=p*_*b-g*y*v,this._w=p*_*v+g*y*b;break;case"ZXY":this._x=g*_*v-p*y*b,this._y=p*y*v+g*_*b,this._z=p*_*b+g*y*v,this._w=p*_*v-g*y*b;break;case"ZYX":this._x=g*_*v-p*y*b,this._y=p*y*v+g*_*b,this._z=p*_*b-g*y*v,this._w=p*_*v+g*y*b;break;case"YZX":this._x=g*_*v+p*y*b,this._y=p*y*v+g*_*b,this._z=p*_*b-g*y*v,this._w=p*_*v-g*y*b;break;case"XZY":this._x=g*_*v-p*y*b,this._y=p*y*v-g*_*b,this._z=p*_*b+g*y*v,this._w=p*_*v+g*y*b;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Xv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Xv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qp.copy(this).projectOnVector(t),this.sub(Qp)}reflect(t){return this.sub(Qp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qp=new j,Xv=new Ys;class be{constructor(t,i,s,l,c,f,d,m,p){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],y=s[5],b=s[8],D=l[0],M=l[3],S=l[6],C=l[1],L=l[4],N=l[7],F=l[2],B=l[5],z=l[8];return c[0]=f*D+d*C+m*F,c[3]=f*M+d*L+m*B,c[6]=f*S+d*N+m*z,c[1]=p*D+_*C+v*F,c[4]=p*M+_*L+v*B,c[7]=p*S+_*N+v*z,c[2]=g*D+y*C+b*F,c[5]=g*M+y*L+b*B,c[8]=g*S+y*N+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,y=p*c-f*m,b=i*v+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return t[0]=v*D,t[1]=(l*p-_*s)*D,t[2]=(d*s-l*f)*D,t[3]=g*D,t[4]=(_*i-l*m)*D,t[5]=(l*c-d*i)*D,t[6]=y*D,t[7]=(s*m-p*i)*D,t[8]=(f*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Jp.makeScale(t,i)),this}rotate(t){return this.premultiply(Jp.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jp=new be,Wv=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const r={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===$e&&(l.r=Xs(l.r),l.g=Xs(l.g),l.b=Xs(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===$e&&(l.r=El(l.r),l.g=El(l.g),l.b=El(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Gs?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[xo]:{primaries:t,whitePoint:s,transfer:kc,toXYZ:Wv,fromXYZ:Yv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:s,transfer:$e,toXYZ:Wv,fromXYZ:Yv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const Ve=JM();function Xs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function El(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let il;class bS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{il===void 0&&(il=Oh("canvas")),il.width=t.width,il.height=t.height;const l=il.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=il}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Oh("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Xs(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Xs(i[s]/255)*255):i[s]=Xs(i[s]);return{data:i,width:t.width,height:t.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $M=0;class Zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Nl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push($p(l[f].image)):c.push($p(l[f]))}else c=$p(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function $p(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}let tE=0;const tm=new j;class ci extends So{constructor(t=ci.DEFAULT_IMAGE,i=ci.DEFAULT_MAPPING,s=ss,l=ss,c=ei,f=ks,d=_a,m=Fi,p=ci.DEFAULT_ANISOTROPY,_=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Nl(),this.name="",this.source=new Zh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tm).x}get height(){return this.source.getSize(tm).y}get depth(){return this.source.getSize(tm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ve(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ve(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bl:t.x=t.x-Math.floor(t.x);break;case ss:t.x=t.x<0?0:1;break;case eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bl:t.y=t.y-Math.floor(t.y);break;case ss:t.y=t.y<0?0:1;break;case eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=i0;ci.DEFAULT_ANISOTROPY=1;class An{constructor(t=0,i=0,s=0,l=1){An.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],y=m[5],b=m[9],D=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(y+1)/2,F=(S+1)/2,B=(_+g)/4,z=(v+D)/4,T=(b+M)/4;return L>N&&L>F?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=B/s,c=z/s):N>F?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=B/l,c=T/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-b)*(M-b)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(v-D)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TS extends So{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new An(0,0,t,i),this.scissorTest=!1,this.viewport=new An(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ci(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Zh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ha extends TS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class f0 extends ci{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class AS extends ci{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(t,i,s,l,c,f,d,m,p,_,v,g,y,b,D,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,v,g,y,b,D,M)}set(t,i,s,l,c,f,d,m,p,_,v,g,y,b,D,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=b,S[11]=D,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/al.setFromMatrixColumn(t,0).length(),c=1/al.setFromMatrixColumn(t,1).length(),f=1/al.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,y=f*v,b=d*_,D=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=g-D*p,i[9]=-d*m,i[2]=D-g*p,i[6]=b+y*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,y=m*v,b=p*_,D=p*v;i[0]=g+D*d,i[4]=b*d-y,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=y*d-b,i[6]=D+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,y=m*v,b=p*_,D=p*v;i[0]=g-D*d,i[4]=-f*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=f*_,i[9]=D-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,y=f*v,b=d*_,D=d*v;i[0]=m*_,i[4]=b*p-y,i[8]=g*p+D,i[1]=m*v,i[5]=D*p+g,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*p,b=d*m,D=d*p;i[0]=m*_,i[4]=D-g*v,i[8]=b*v+y,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*v+b,i[10]=g-D*v}else if(t.order==="XZY"){const g=f*m,y=f*p,b=d*m,D=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+D,i[5]=f*_,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*_,i[10]=D*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eE,t,nE)}lookAt(t,i,s){const l=this.elements;return Ki.subVectors(t,i),Ki.lengthSq()===0&&(Ki.z=1),Ki.normalize(),yr.crossVectors(s,Ki),yr.lengthSq()===0&&(Math.abs(s.z)===1?Ki.x+=1e-4:Ki.z+=1e-4,Ki.normalize(),yr.crossVectors(s,Ki)),yr.normalize(),ff.crossVectors(Ki,yr),l[0]=yr.x,l[4]=ff.x,l[8]=Ki.x,l[1]=yr.y,l[5]=ff.y,l[9]=Ki.y,l[2]=yr.z,l[6]=ff.z,l[10]=Ki.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],y=s[13],b=s[2],D=s[6],M=s[10],S=s[14],C=s[3],L=s[7],N=s[11],F=s[15],B=l[0],z=l[4],T=l[8],U=l[12],dt=l[1],G=l[5],et=l[9],ot=l[13],lt=l[2],Z=l[6],O=l[10],P=l[14],J=l[3],pt=l[7],_t=l[11],I=l[15];return c[0]=f*B+d*dt+m*lt+p*J,c[4]=f*z+d*G+m*Z+p*pt,c[8]=f*T+d*et+m*O+p*_t,c[12]=f*U+d*ot+m*P+p*I,c[1]=_*B+v*dt+g*lt+y*J,c[5]=_*z+v*G+g*Z+y*pt,c[9]=_*T+v*et+g*O+y*_t,c[13]=_*U+v*ot+g*P+y*I,c[2]=b*B+D*dt+M*lt+S*J,c[6]=b*z+D*G+M*Z+S*pt,c[10]=b*T+D*et+M*O+S*_t,c[14]=b*U+D*ot+M*P+S*I,c[3]=C*B+L*dt+N*lt+F*J,c[7]=C*z+L*G+N*Z+F*pt,c[11]=C*T+L*et+N*O+F*_t,c[15]=C*U+L*ot+N*P+F*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],y=t[14],b=t[3],D=t[7],M=t[11],S=t[15],C=m*y-p*g,L=d*y-p*v,N=d*g-m*v,F=f*y-p*_,B=f*g-m*_,z=f*v-d*_;return i*(D*C-M*L+S*N)-s*(b*C-M*F+S*B)+l*(b*L-D*F+S*z)-c*(b*N-D*B+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],y=t[11],b=t[12],D=t[13],M=t[14],S=t[15],C=i*d-s*f,L=i*m-l*f,N=i*p-c*f,F=s*m-l*d,B=s*p-c*d,z=l*p-c*m,T=_*D-v*b,U=_*M-g*b,dt=_*S-y*b,G=v*M-g*D,et=v*S-y*D,ot=g*S-y*M,lt=C*ot-L*et+N*G+F*dt-B*U+z*T;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/lt;return t[0]=(d*ot-m*et+p*G)*Z,t[1]=(l*et-s*ot-c*G)*Z,t[2]=(D*z-M*B+S*F)*Z,t[3]=(g*B-v*z-y*F)*Z,t[4]=(m*dt-f*ot-p*U)*Z,t[5]=(i*ot-l*dt+c*U)*Z,t[6]=(M*N-b*z-S*L)*Z,t[7]=(_*z-g*N+y*L)*Z,t[8]=(f*et-d*dt+p*T)*Z,t[9]=(s*dt-i*et-c*T)*Z,t[10]=(b*B-D*N+S*C)*Z,t[11]=(v*N-_*B-y*C)*Z,t[12]=(d*U-f*G-m*T)*Z,t[13]=(i*G-s*U+l*T)*Z,t[14]=(D*L-b*F-M*C)*Z,t[15]=(_*F-v*L+g*C)*Z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,v=d+d,g=c*p,y=c*_,b=c*v,D=f*_,M=f*v,S=d*v,C=m*p,L=m*_,N=m*v,F=s.x,B=s.y,z=s.z;return l[0]=(1-(D+S))*F,l[1]=(y+N)*F,l[2]=(b-L)*F,l[3]=0,l[4]=(y-N)*B,l[5]=(1-(g+S))*B,l[6]=(M+C)*B,l[7]=0,l[8]=(b+L)*z,l[9]=(M-C)*z,l[10]=(1-(g+D))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=al.set(l[0],l[1],l[2]).length();const d=al.set(l[4],l[5],l[6]).length(),m=al.set(l[8],l[9],l[10]).length();c<0&&(f=-f),La.copy(this);const p=1/f,_=1/d,v=1/m;return La.elements[0]*=p,La.elements[1]*=p,La.elements[2]*=p,La.elements[4]*=_,La.elements[5]*=_,La.elements[6]*=_,La.elements[8]*=v,La.elements[9]*=v,La.elements[10]*=v,i.setFromRotationMatrix(La),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=Ba,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let b,D;if(m)b=c/(f-c),D=f*c/(f-c);else if(d===Ba)b=-(f+c)/(f-c),D=-2*f*c/(f-c);else if(d===Rl)b=-f/(f-c),D=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Ba,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,D;if(m)b=1/(f-c),D=f/(f-c);else if(d===Ba)b=-2/(f-c),D=-(f+c)/(f-c);else if(d===Rl)b=-1/(f-c),D=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const al=new j,La=new un,eE=new j(0,0,0),nE=new j(1,1,1),yr=new j,ff=new j,Ki=new j,qv=new un,jv=new Ys;class Ji{constructor(t=0,i=0,s=0,l=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-De(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return qv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return jv.setFromEuler(this),this.setFromQuaternion(jv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Kh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iE=0;const Zv=new j,sl=new Ys,Ps=new un,hf=new j,Ec=new j,aE=new j,sE=new Ys,Kv=new j(1,0,0),Qv=new j(0,1,0),Jv=new j(0,0,1),$v={type:"added"},rE={type:"removed"},rl={type:"childadded",child:null},em={type:"childremoved",child:null};class mn extends So{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new j,i=new Ji,s=new Ys,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new be}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return sl.setFromAxisAngle(t,i),this.quaternion.multiply(sl),this}rotateOnWorldAxis(t,i){return sl.setFromAxisAngle(t,i),this.quaternion.premultiply(sl),this}rotateX(t){return this.rotateOnAxis(Kv,t)}rotateY(t){return this.rotateOnAxis(Qv,t)}rotateZ(t){return this.rotateOnAxis(Jv,t)}translateOnAxis(t,i){return Zv.copy(t).applyQuaternion(this.quaternion),this.position.add(Zv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Kv,t)}translateY(t){return this.translateOnAxis(Qv,t)}translateZ(t){return this.translateOnAxis(Jv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ps.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?hf.copy(t):hf.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ec.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ps.lookAt(Ec,hf,this.up):Ps.lookAt(hf,Ec,this.up),this.quaternion.setFromRotationMatrix(Ps),l&&(Ps.extractRotation(l.matrixWorld),sl.setFromRotationMatrix(Ps),this.quaternion.premultiply(sl.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($v),rl.child=t,this.dispatchEvent(rl),rl.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(rE),em.child=t,this.dispatchEvent(em),em.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($v),rl.child=t,this.dispatchEvent(rl),rl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ec,t,aE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ec,sE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),y=f(t.animations),b=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}mn.DEFAULT_UP=new j(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yl extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oE={type:"move"};class kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,s),S=this._getHandJoint(p,D);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&g>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(oE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new yl;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const RS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},df={h:0,s:0,l:0};function nm(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ve.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ve.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ve.workingColorSpace){if(t=u0(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=nm(f,c,t+1/3),this.g=nm(f,c,t),this.b=nm(f,c,t-1/3)}return Ve.colorSpaceToWorking(this,l),this}setStyle(t,i=Wn){function s(c){c!==void 0&&parseFloat(c)<1&&ve("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ve("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ve("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Wn){const s=RS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ve("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}copyLinearToSRGB(t){return this.r=El(t.r),this.g=El(t.g),this.b=El(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Ve.workingToColorSpace(gi.copy(this),t),Math.round(De(gi.r*255,0,255))*65536+Math.round(De(gi.g*255,0,255))*256+Math.round(De(gi.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ve.workingColorSpace){Ve.workingToColorSpace(gi.copy(this),i);const s=gi.r,l=gi.g,c=gi.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ve.workingColorSpace){return Ve.workingToColorSpace(gi.copy(this),i),t.r=gi.r,t.g=gi.g,t.b=gi.b,t}getStyle(t=Wn){Ve.workingToColorSpace(gi.copy(this),t);const i=gi.r,s=gi.g,l=gi.b;return t!==Wn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Mr),this.setHSL(Mr.h+t,Mr.s+i,Mr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Mr),t.getHSL(df);const s=Gc(Mr.h,df.h,i),l=Gc(Mr.s,df.s,i),c=Gc(Mr.l,df.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gi=new fe;fe.NAMES=RS;class Wc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=i,this.far=s}clone(){return new Wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class h0 extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oa=new j,Fs=new j,im=new j,Bs=new j,ol=new j,ll=new j,tx=new j,am=new j,sm=new j,rm=new j,om=new An,lm=new An,cm=new An;class ma{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Oa.subVectors(t,i),l.cross(Oa);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Oa.subVectors(l,i),Fs.subVectors(s,i),im.subVectors(t,i);const f=Oa.dot(Oa),d=Oa.dot(Fs),m=Oa.dot(im),p=Fs.dot(Fs),_=Fs.dot(im),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(p*m-d*_)*g,b=(f*_-d*m)*g;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,Bs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Bs.x),m.addScaledVector(f,Bs.y),m.addScaledVector(d,Bs.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return om.setScalar(0),lm.setScalar(0),cm.setScalar(0),om.fromBufferAttribute(t,i),lm.fromBufferAttribute(t,s),cm.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(om,c.x),f.addScaledVector(lm,c.y),f.addScaledVector(cm,c.z),f}static isFrontFacing(t,i,s,l){return Oa.subVectors(s,i),Fs.subVectors(t,i),Oa.cross(Fs).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oa.subVectors(this.c,this.b),Fs.subVectors(this.a,this.b),Oa.cross(Fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ma.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ma.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ma.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ma.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ma.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;ol.subVectors(l,s),ll.subVectors(c,s),am.subVectors(t,s);const m=ol.dot(am),p=ll.dot(am);if(m<=0&&p<=0)return i.copy(s);sm.subVectors(t,l);const _=ol.dot(sm),v=ll.dot(sm);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(ol,f);rm.subVectors(t,c);const y=ol.dot(rm),b=ll.dot(rm);if(b>=0&&y<=b)return i.copy(c);const D=y*p-m*b;if(D<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(ll,d);const M=_*b-y*v;if(M<=0&&v-_>=0&&y-b>=0)return tx.subVectors(c,l),d=(v-_)/(v-_+(y-b)),i.copy(l).addScaledVector(tx,d);const S=1/(M+D+g);return f=D*S,d=g*S,i.copy(s).addScaledVector(ol,f).addScaledVector(ll,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ur{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ia.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ia.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ia.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ia):Ia.fromBufferAttribute(c,f),Ia.applyMatrix4(t.matrixWorld),this.expandByPoint(Ia);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pf.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pf.copy(s.boundingBox)),pf.applyMatrix4(t.matrixWorld),this.union(pf)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ia),Ia.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bc),mf.subVectors(this.max,bc),cl.subVectors(t.a,bc),ul.subVectors(t.b,bc),fl.subVectors(t.c,bc),Er.subVectors(ul,cl),br.subVectors(fl,ul),io.subVectors(cl,fl);let i=[0,-Er.z,Er.y,0,-br.z,br.y,0,-io.z,io.y,Er.z,0,-Er.x,br.z,0,-br.x,io.z,0,-io.x,-Er.y,Er.x,0,-br.y,br.x,0,-io.y,io.x,0];return!um(i,cl,ul,fl,mf)||(i=[1,0,0,0,1,0,0,0,1],!um(i,cl,ul,fl,mf))?!1:(gf.crossVectors(Er,br),i=[gf.x,gf.y,gf.z],um(i,cl,ul,fl,mf))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ia).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ia).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zs=[new j,new j,new j,new j,new j,new j,new j,new j],Ia=new j,pf=new Ur,cl=new j,ul=new j,fl=new j,Er=new j,br=new j,io=new j,bc=new j,mf=new j,gf=new j,ao=new j;function um(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ao.fromArray(r,c);const d=l.x*Math.abs(ao.x)+l.y*Math.abs(ao.y)+l.z*Math.abs(ao.z),m=t.dot(ao),p=i.dot(ao),_=s.dot(ao);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Gn=new j,_f=new Ue;let lE=0;class va{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Hm,this.updateRanges=[],this.gpuType=ga,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_f.fromBufferAttribute(this,i),_f.applyMatrix3(t),this.setXY(i,_f.x,_f.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix3(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=xl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=bi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xl(i,this.array)),i}setX(t,i){return this.normalized&&(i=bi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xl(i,this.array)),i}setY(t,i){return this.normalized&&(i=bi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=bi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xl(i,this.array)),i}setW(t,i){return this.normalized&&(i=bi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=bi(i,this.array),s=bi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=bi(i,this.array),s=bi(s,this.array),l=bi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=bi(i,this.array),s=bi(s,this.array),l=bi(l,this.array),c=bi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hm&&(t.usage=this.usage),t}}class d0 extends va{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class p0 extends va{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ni extends va{constructor(t,i,s){super(new Float32Array(t),i,s)}}const cE=new Ur,Tc=new j,fm=new j;class Ul{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):cE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tc.subVectors(t,this.center);const i=Tc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Tc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tc.copy(t.center).add(fm)),this.expandByPoint(Tc.copy(t.center).sub(fm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let uE=0;const da=new un,hm=new mn,hl=new j,Qi=new Ur,Ac=new Ur,$n=new j;class $i extends So{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(LM(t)?p0:d0)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new be().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return da.makeRotationFromQuaternion(t),this.applyMatrix4(da),this}rotateX(t){return da.makeRotationX(t),this.applyMatrix4(da),this}rotateY(t){return da.makeRotationY(t),this.applyMatrix4(da),this}rotateZ(t){return da.makeRotationZ(t),this.applyMatrix4(da),this}translate(t,i,s){return da.makeTranslation(t,i,s),this.applyMatrix4(da),this}scale(t,i,s){return da.makeScale(t,i,s),this.applyMatrix4(da),this}lookAt(t){return hm.lookAt(t),hm.updateMatrix(),this.applyMatrix4(hm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hl).negate(),this.translate(hl.x,hl.y,hl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ni(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Qi.setFromBufferAttribute(c),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(Qi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ac.setFromBufferAttribute(d),this.morphTargetsRelative?($n.addVectors(Qi.min,Ac.min),Qi.expandByPoint($n),$n.addVectors(Qi.max,Ac.max),Qi.expandByPoint($n)):(Qi.expandByPoint(Ac.min),Qi.expandByPoint(Ac.max))}Qi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)$n.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared($n));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)$n.fromBufferAttribute(d,p),m&&(hl.fromBufferAttribute(t,p),$n.add(hl)),l=Math.max(l,s.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new va(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new j,m[T]=new j;const p=new j,_=new j,v=new j,g=new Ue,y=new Ue,b=new Ue,D=new j,M=new j;function S(T,U,dt){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,U),v.fromBufferAttribute(s,dt),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,U),b.fromBufferAttribute(c,dt),_.sub(p),v.sub(p),y.sub(g),b.sub(g);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(D.copy(_).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(G),d[T].add(D),d[U].add(D),d[dt].add(D),m[T].add(M),m[U].add(M),m[dt].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,U=C.length;T<U;++T){const dt=C[T],G=dt.start,et=dt.count;for(let ot=G,lt=G+et;ot<lt;ot+=3)S(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const L=new j,N=new j,F=new j,B=new j;function z(T){F.fromBufferAttribute(l,T),B.copy(F);const U=d[T];L.copy(U),L.sub(F.multiplyScalar(F.dot(U))).normalize(),N.crossVectors(B,U);const G=N.dot(m[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,G)}for(let T=0,U=C.length;T<U;++T){const dt=C[T],G=dt.start,et=dt.count;for(let ot=G,lt=G+et;ot<lt;ot+=3)z(t.getX(ot+0)),z(t.getX(ot+1)),z(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new va(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,f=new j,d=new j,m=new j,p=new j,_=new j,v=new j;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),D=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)$n.fromBufferAttribute(t,i),$n.normalize(),t.setXYZ(i,$n.x,$n.y,$n.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let y=0,b=0;for(let D=0,M=m.length;D<M;D++){d.isInterleavedBufferAttribute?y=m[D]*d.data.stride+d.offset:y=m[D]*_;for(let S=0;S<_;S++)g[b++]=p[y++]}return new va(g,_,v)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fE=0;class yo extends So{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Nl(),this.name="",this.type="Material",this.blending=mo,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=qf,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ve(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ve(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(s.blending=this.blending),this.side!==Ws&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Yf&&(s.blendSrc=this.blendSrc),this.blendDst!==qf&&(s.blendDst=this.blendDst),this.blendEquation!==Cr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Hs=new j,dm=new j,vf=new j,Tr=new j,pm=new j,xf=new j,mm=new j;class m0{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hs)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Hs.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Hs.copy(this.origin).addScaledVector(this.direction,i),Hs.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){dm.copy(t).add(i).multiplyScalar(.5),vf.copy(i).sub(t).normalize(),Tr.copy(this.origin).sub(dm);const c=t.distanceTo(i)*.5,f=-this.direction.dot(vf),d=Tr.dot(this.direction),m=-Tr.dot(vf),p=Tr.lengthSq(),_=Math.abs(1-f*f);let v,g,y,b;if(_>0)if(v=f*m-d,g=f*d-m,b=c*_,v>=0)if(g>=-b)if(g<=b){const D=1/_;v*=D,g*=D,y=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g<=-b?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(dm).addScaledVector(vf,g),y}intersectSphere(t,i){Hs.subVectors(t.center,this.origin);const s=Hs.dot(this.direction),l=Hs.dot(Hs)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Hs)!==null}intersectTriangle(t,i,s,l,c){pm.subVectors(i,t),xf.subVectors(s,t),mm.crossVectors(pm,xf);let f=this.direction.dot(mm),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Tr.subVectors(this.origin,t);const m=d*this.direction.dot(xf.crossVectors(Tr,xf));if(m<0)return null;const p=d*this.direction.dot(pm.cross(Tr));if(p<0||m+p>f)return null;const _=-d*Tr.dot(mm);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yc extends yo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ex=new un,so=new m0,Sf=new Ul,nx=new j,yf=new j,Mf=new j,Ef=new j,gm=new j,bf=new j,ix=new j,Tf=new j;class He extends mn{constructor(t=new $i,i=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){bf.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(gm.fromBufferAttribute(v,t),f?bf.addScaledVector(gm,_):bf.addScaledVector(gm.sub(i),_))}i.add(bf)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sf.copy(s.boundingSphere),Sf.applyMatrix4(c),so.copy(t.ray).recast(t.near),!(Sf.containsPoint(so.origin)===!1&&(so.intersectSphere(Sf,nx)===null||so.origin.distanceToSquared(nx)>(t.far-t.near)**2))&&(ex.copy(c).invert(),so.copy(t.ray).applyMatrix4(ex),!(s.boundingBox!==null&&so.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,so)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,D=g.length;b<D;b++){const M=g[b],S=f[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let N=C,F=L;N<F;N+=3){const B=d.getX(N),z=d.getX(N+1),T=d.getX(N+2);l=Af(this,S,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),D=Math.min(d.count,y.start+y.count);for(let M=b,S=D;M<S;M+=3){const C=d.getX(M),L=d.getX(M+1),N=d.getX(M+2);l=Af(this,f,t,s,p,_,v,C,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,D=g.length;b<D;b++){const M=g[b],S=f[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=C,F=L;N<F;N+=3){const B=N,z=N+1,T=N+2;l=Af(this,S,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let M=b,S=D;M<S;M+=3){const C=M,L=M+1,N=M+2;l=Af(this,f,t,s,p,_,v,C,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function hE(r,t,i,s,l,c,f,d){let m;if(t.side===_i?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===Ws,d),m===null)return null;Tf.copy(d),Tf.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Tf);return p<i.near||p>i.far?null:{distance:p,point:Tf.clone(),object:r}}function Af(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,yf),r.getVertexPosition(m,Mf),r.getVertexPosition(p,Ef);const _=hE(r,t,i,s,yf,Mf,Ef,ix);if(_){const v=new j;ma.getBarycoord(ix,yf,Mf,Ef,v),l&&(_.uv=ma.getInterpolatedAttribute(l,d,m,p,v,new Ue)),c&&(_.uv1=ma.getInterpolatedAttribute(c,d,m,p,v,new Ue)),f&&(_.normal=ma.getInterpolatedAttribute(f,d,m,p,v,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new j,materialIndex:0};ma.getNormal(yf,Mf,Ef,g.normal),_.face=g,_.barycoord=v}return _}class g0 extends ci{constructor(t=null,i=1,s=1,l,c,f,d,m,p=ti,_=ti,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class km extends va{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const dl=new un,ax=new un,Rf=[],sx=new Ur,dE=new un,Rc=new He,Cc=new Ul;class CS extends He{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new km(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,dE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Ur),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,dl),sx.copy(t.boundingBox).applyMatrix4(dl),this.boundingBox.union(sx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ul),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,dl),Cc.copy(t.boundingSphere).applyMatrix4(dl),this.boundingSphere.union(Cc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Rc.geometry=this.geometry,Rc.material=this.material,Rc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(s),t.ray.intersectsSphere(Cc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,dl),ax.multiplyMatrices(s,dl),Rc.matrixWorld=ax,Rc.raycast(t,Rf);for(let f=0,d=Rf.length;f<d;f++){const m=Rf[f];m.instanceId=c,m.object=this,i.push(m)}Rf.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new km(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new g0(new Float32Array(l*this.count),l,this.count,Vh,ga));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _m=new j,pE=new j,mE=new be;class Rr{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=_m.subVectors(s,i).cross(pE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(_m),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||mE.getNormalMatrix(t),l=this.coplanarPoint(_m).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new Ul,gE=new Ue(.5,.5),Cf=new j;class Qh{constructor(t=new Rr,i=new Rr,s=new Rr,l=new Rr,c=new Rr,f=new Rr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ba,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],y=c[7],b=c[8],D=c[9],M=c[10],S=c[11],C=c[12],L=c[13],N=c[14],F=c[15];if(l[0].setComponents(p-f,y-_,S-b,F-C).normalize(),l[1].setComponents(p+f,y+_,S+b,F+C).normalize(),l[2].setComponents(p+d,y+v,S+D,F+L).normalize(),l[3].setComponents(p-d,y-v,S-D,F-L).normalize(),s)l[4].setComponents(m,g,M,N).normalize(),l[5].setComponents(p-m,y-g,S-M,F-N).normalize();else if(l[4].setComponents(p-m,y-g,S-M,F-N).normalize(),i===Ba)l[5].setComponents(p+m,y+g,S+M,F+N).normalize();else if(i===Rl)l[5].setComponents(m,g,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(t){ro.center.set(0,0,0);const i=gE.distanceTo(t.center);return ro.radius=.7071067811865476+i,ro.applyMatrix4(t.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cf.x=l.normal.x>0?t.max.x:t.min.x,Cf.y=l.normal.y>0?t.max.y:t.min.y,Cf.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Cf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _0 extends ci{constructor(t=[],i=Nr,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ml extends ci{constructor(t,i,s,l,c,f,d,m,p){super(t,i,s,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wl extends ci{constructor(t,i,s=Ga,l,c,f,d=ti,m=ti,p,_=ls,v=1){if(_!==ls&&_!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wS extends wl{constructor(t,i=Ga,s=Nr,l,c,f=ti,d=ti,m,p=ls){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class v0 extends ci{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Lr extends $i{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ni(p,3)),this.setAttribute("normal",new ni(_,3)),this.setAttribute("uv",new ni(v,2));function b(D,M,S,C,L,N,F,B,z,T,U){const dt=N/z,G=F/T,et=N/2,ot=F/2,lt=B/2,Z=z+1,O=T+1;let P=0,J=0;const pt=new j;for(let _t=0;_t<O;_t++){const I=_t*G-ot;for(let q=0;q<Z;q++){const mt=q*dt-et;pt[D]=mt*C,pt[M]=I*L,pt[S]=lt,p.push(pt.x,pt.y,pt.z),pt[D]=0,pt[M]=0,pt[S]=B>0?1:-1,_.push(pt.x,pt.y,pt.z),v.push(q/z),v.push(1-_t/T),P+=1}}for(let _t=0;_t<T;_t++)for(let I=0;I<z;I++){const q=g+I+Z*_t,mt=g+I+Z*(_t+1),Ct=g+(I+1)+Z*(_t+1),Wt=g+(I+1)+Z*_t;m.push(q,mt,Wt),m.push(mt,Ct,Wt),J+=6}d.addGroup(y,J,U),y+=J,g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class DS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(f-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new Ue:new j);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new j,l=[],c=[],f=[],d=new j,m=new un;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new j)}c[0]=new j,f[0]=new j;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(De(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,b))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(De(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function x0(){let r=0,t=0,i=0,s=0;function l(c,f,d,m){r=c,t=d,i=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,_,v){let g=(f-c)/p-(d-c)/(p+_)+(d-f)/_,y=(d-f)/_-(m-f)/(_+v)+(m-d)/v;g*=_,y*=_,l(f,d,g,y)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const wf=new j,vm=new x0,xm=new x0,Sm=new x0;class NS extends DS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new j){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(wf.subVectors(l[0],l[1]).add(l[0]),p=wf);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(wf.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=wf),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(v),y),D=Math.pow(v.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);D<1e-4&&(D=1),b<1e-4&&(b=D),M<1e-4&&(M=D),vm.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,b,D,M),xm.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,b,D,M),Sm.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,b,D,M)}else this.curveType==="catmullrom"&&(vm.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),xm.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),Sm.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(vm.calc(m),xm.calc(m),Sm.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new j().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class as extends $i{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=i/m,y=[],b=[],D=[],M=[];for(let S=0;S<_;S++){const C=S*g-f;for(let L=0;L<p;L++){const N=L*v-c;b.push(N,-C,0),D.push(0,0,1),M.push(L/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<d;C++){const L=C+p*S,N=C+p*(S+1),F=C+1+p*(S+1),B=C+1+p*S;y.push(L,N,B),y.push(N,F,B)}this.setIndex(y),this.setAttribute("position",new ni(b,3)),this.setAttribute("normal",new ni(D,3)),this.setAttribute("uv",new ni(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jh extends $i{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,y=new j,b=new Ue;for(let D=0;D<=l;D++){for(let M=0;M<=s;M++){const S=c+M/s*f;y.x=v*Math.cos(S),y.y=v*Math.sin(S),m.push(y.x,y.y,y.z),p.push(0,0,1),b.x=(y.x/i+1)/2,b.y=(y.y/i+1)/2,_.push(b.x,b.y)}v+=g}for(let D=0;D<l;D++){const M=D*(s+1);for(let S=0;S<s;S++){const C=S+M,L=C,N=C+s+1,F=C+s+2,B=C+1;d.push(L,N,B),d.push(N,F,B)}}this.setIndex(d),this.setAttribute("position",new ni(m,3)),this.setAttribute("normal",new ni(p,3)),this.setAttribute("uv",new ni(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class $h extends $i{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const _=[],v=new j,g=new j,y=[],b=[],D=[],M=[];for(let S=0;S<=s;S++){const C=[],L=S/s;let N=0;S===0&&f===0?N=.5/i:S===s&&m===Math.PI&&(N=-.5/i);for(let F=0;F<=i;F++){const B=F/i;v.x=-t*Math.cos(l+B*c)*Math.sin(f+L*d),v.y=t*Math.cos(f+L*d),v.z=t*Math.sin(l+B*c)*Math.sin(f+L*d),b.push(v.x,v.y,v.z),g.copy(v).normalize(),D.push(g.x,g.y,g.z),M.push(B+N,1-L),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const L=_[S][C+1],N=_[S][C],F=_[S+1][C],B=_[S+1][C+1];(S!==0||f>0)&&y.push(L,N,B),(S!==s-1||m<Math.PI)&&y.push(N,F,B)}this.setIndex(y),this.setAttribute("position",new ni(b,3)),this.setAttribute("normal",new ni(D,3)),this.setAttribute("uv",new ni(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $h(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Dl(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ti(r){const t={};for(let i=0;i<r.length;i++){const s=Dl(r[i]);for(const l in s)t[l]=s[l]}return t}function _E(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function US(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}const LS={clone:Dl,merge:Ti};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends yo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dl(t.uniforms),this.uniformsGroups=_E(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class OS extends Va{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vs extends yo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fo extends Vs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class IS extends yo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Fh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class PS extends yo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class FS extends yo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ll extends mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class BS extends Ll{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const ym=new un,rx=new j,ox=new j;class S0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new An(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;rx.setFromMatrixPosition(t.matrixWorld),i.position.copy(rx),ox.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ox),i.updateMatrixWorld(),ym.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ym,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Rl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ym)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Df=new j,Nf=new Ys,ns=new j;class y0 extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Ba,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Df,Nf,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Df,Nf,ns.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Df,Nf,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Df,Nf,ns.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new j,lx=new Ue,cx=new Ue;class Ai extends y0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Cl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z)}getViewSize(t,i){return this.getViewBounds(t,lx,cx),i.subVectors(cx,lx)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Hc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class SE extends S0{constructor(){super(new Ai(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Cl*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Xf extends Ll{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new SE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class yE extends S0{constructor(){super(new Ai(90,1,.5,500)),this.isPointLightShadow=!0}}class Vc extends Ll{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new yE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class td extends y0{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ME extends S0{constructor(){super(new td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xm extends Ll{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new ME}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class zS extends Ll{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const pl=-90,ml=1;class HS extends mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(pl,ml,t,i);l.layers=this.layers,this.add(l);const c=new Ai(pl,ml,t,i);c.layers=this.layers,this.add(c);const f=new Ai(pl,ml,t,i);f.layers=this.layers,this.add(f);const d=new Ai(pl,ml,t,i);d.layers=this.layers,this.add(d);const m=new Ai(pl,ml,t,i);m.layers=this.layers,this.add(m);const p=new Ai(pl,ml,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Ba)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Rl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class GS extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ux=new un;class VS{constructor(t,i,s=0,l=1/0){this.ray=new m0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Kh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ge("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return ux.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ux),this}intersectObject(t,i=!0,s=[]){return Wm(t,this,s,i),s.sort(fx),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Wm(t[l],this,s,i);return s.sort(fx),s}}function fx(r,t){return r.distance-t.distance}function Wm(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Wm(c[f],t,i,!0)}}class kS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ve("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function hx(r,t,i,s){const l=EE(s);switch(i){case l0:return r*t;case Vh:return r*t/l.components*l.byteLength;case kh:return r*t/l.components*l.byteLength;case vo:return r*t*2/l.components*l.byteLength;case Xh:return r*t*2/l.components*l.byteLength;case c0:return r*t*3/l.components*l.byteLength;case _a:return r*t*4/l.components*l.byteLength;case Wh:return r*t*4/l.components*l.byteLength;case Pc:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bc:case zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ih:case sh:return Math.max(r,16)*Math.max(t,8)/4;case nh:case ah:return Math.max(r,8)*Math.max(t,8)/2;case rh:case oh:case ch:case uh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lh:case fh:case hh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ph:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case mh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case vh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case xh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case yh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case bh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Th:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Rh:case Ch:case wh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Dh:case Nh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Uh:case Lh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function EE(r){switch(r){case Fi:case a0:return{byteLength:1,components:1};case Tl:case s0:case os:return{byteLength:2,components:1};case Hh:case Gh:return{byteLength:2,components:4};case Ga:case zh:case ga:return{byteLength:4,components:1};case r0:case o0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);function XS(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function bE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<v.length;y++){const b=v[g],D=v[y];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++g,v[g]=D)}v.length=g+1;for(let y=0,b=v.length;y<b;y++){const D=v[y];r.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var TE=`#ifdef USE_ALPHAHASH
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
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LE=`#ifdef USE_BATCHING
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
#endif`,Ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
}`,U1=`#define DISTANCE
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
}`,L1=`#define DISTANCE
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
}`,Ae={alphahash_fragment:TE,alphahash_pars_fragment:AE,alphamap_fragment:RE,alphamap_pars_fragment:CE,alphatest_fragment:wE,alphatest_pars_fragment:DE,aomap_fragment:NE,aomap_pars_fragment:UE,batching_pars_vertex:LE,batching_vertex:OE,begin_vertex:IE,beginnormal_vertex:PE,bsdfs:FE,iridescence_fragment:BE,bumpmap_pars_fragment:zE,clipping_planes_fragment:HE,clipping_planes_pars_fragment:GE,clipping_planes_pars_vertex:VE,clipping_planes_vertex:kE,color_fragment:XE,color_pars_fragment:WE,color_pars_vertex:YE,color_vertex:qE,common:jE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:KE,displacementmap_pars_vertex:QE,displacementmap_vertex:JE,emissivemap_fragment:$E,emissivemap_pars_fragment:tb,colorspace_fragment:eb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:ab,envmap_pars_fragment:sb,envmap_pars_vertex:rb,envmap_physical_pars_fragment:_b,envmap_vertex:ob,fog_vertex:lb,fog_pars_vertex:cb,fog_fragment:ub,fog_pars_fragment:fb,gradientmap_pars_fragment:hb,lightmap_pars_fragment:db,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:vb,lights_toon_pars_fragment:xb,lights_phong_fragment:Sb,lights_phong_pars_fragment:yb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Eb,lights_fragment_begin:bb,lights_fragment_maps:Tb,lights_fragment_end:Ab,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Db,map_fragment:Nb,map_pars_fragment:Ub,map_particle_fragment:Lb,map_particle_pars_fragment:Ob,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Pb,morphinstance_vertex:Fb,morphcolor_vertex:Bb,morphnormal_vertex:zb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Gb,normal_fragment_begin:Vb,normal_fragment_maps:kb,normal_pars_fragment:Xb,normal_pars_vertex:Wb,normal_vertex:Yb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:jb,clearcoat_normal_fragment_maps:Zb,clearcoat_pars_fragment:Kb,iridescence_pars_fragment:Qb,opaque_fragment:Jb,packing:$b,premultiplied_alpha_fragment:t1,project_vertex:e1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:o1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:f1,skinning_vertex:h1,skinnormal_vertex:d1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:_1,transmission_fragment:v1,transmission_pars_fragment:x1,uv_pars_fragment:S1,uv_pars_vertex:y1,uv_vertex:M1,worldpos_vertex:E1,background_vert:b1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:w1,depth_vert:D1,depth_frag:N1,distance_vert:U1,distance_frag:L1,equirect_vert:O1,equirect_frag:I1,linedashed_vert:P1,linedashed_frag:F1,meshbasic_vert:B1,meshbasic_frag:z1,meshlambert_vert:H1,meshlambert_frag:G1,meshmatcap_vert:V1,meshmatcap_frag:k1,meshnormal_vert:X1,meshnormal_frag:W1,meshphong_vert:Y1,meshphong_frag:q1,meshphysical_vert:j1,meshphysical_frag:Z1,meshtoon_vert:K1,meshtoon_frag:Q1,points_vert:J1,points_frag:$1,shadow_vert:tT,shadow_frag:eT,sprite_vert:nT,sprite_frag:iT},Xt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Fa={basic:{uniforms:Ti([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:Ti([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:Ti([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:Ti([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:Ti([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:Ti([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:Ti([Xt.points,Xt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:Ti([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:Ti([Xt.common,Xt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:Ti([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:Ti([Xt.sprite,Xt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distance:{uniforms:Ti([Xt.common,Xt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distance_vert,fragmentShader:Ae.distance_frag},shadow:{uniforms:Ti([Xt.lights,Xt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Fa.physical={uniforms:Ti([Fa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Uf={r:0,b:0,g:0},oo=new Ji,aT=new un;function sT(r,t,i,s,l,c){const f=new fe(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function y(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const N=C.backgroundBlurriness>0;L=t.get(L,N)}return L}function b(C){let L=!1;const N=y(C);N===null?M(f,d):N&&N.isColor&&(M(N,1),L=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(C,L){const N=y(L);N&&(N.isCubeTexture||N.mapping===qc)?(p===void 0&&(p=new He(new Lr(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:Dl(Fa.backgroundCube.uniforms),vertexShader:Fa.backgroundCube.vertexShader,fragmentShader:Fa.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),oo.copy(L.backgroundRotation),oo.x*=-1,oo.y*=-1,oo.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(oo)),p.material.toneMapped=Ve.getTransfer(N.colorSpace)!==$e,(_!==N||v!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new He(new as(2,2),new Va({name:"BackgroundMaterial",uniforms:Dl(Fa.background.uniforms),vertexShader:Fa.background.vertexShader,fragmentShader:Fa.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Ve.getTransfer(N.colorSpace)!==$e,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(Uf,US(r)),i.buffers.color.setClear(Uf.r,Uf.g,Uf.b,L,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,L=1){f.set(C),d=L,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(f,d)},render:b,addToRenderList:D,dispose:S}}function rT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(G,et,ot,lt,Z){let O=!1;const P=v(G,lt,ot,et);c!==P&&(c=P,p(c.object)),O=y(G,lt,ot,Z),O&&b(G,lt,ot,Z),Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,N(G,et,ot,lt),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,et,ot,lt){const Z=lt.wireframe===!0;let O=s[et.id];O===void 0&&(O={},s[et.id]=O);const P=G.isInstancedMesh===!0?G.id:0;let J=O[P];J===void 0&&(J={},O[P]=J);let pt=J[ot.id];pt===void 0&&(pt={},J[ot.id]=pt);let _t=pt[Z];return _t===void 0&&(_t=g(m()),pt[Z]=_t),_t}function g(G){const et=[],ot=[],lt=[];for(let Z=0;Z<i;Z++)et[Z]=0,ot[Z]=0,lt[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:ot,attributeDivisors:lt,object:G,attributes:{},index:null}}function y(G,et,ot,lt){const Z=c.attributes,O=et.attributes;let P=0;const J=ot.getAttributes();for(const pt in J)if(J[pt].location>=0){const I=Z[pt];let q=O[pt];if(q===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),I===void 0||I.attribute!==q||q&&I.data!==q.data)return!0;P++}return c.attributesNum!==P||c.index!==lt}function b(G,et,ot,lt){const Z={},O=et.attributes;let P=0;const J=ot.getAttributes();for(const pt in J)if(J[pt].location>=0){let I=O[pt];I===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const q={};q.attribute=I,I&&I.data&&(q.data=I.data),Z[pt]=q,P++}c.attributes=Z,c.attributesNum=P,c.index=lt}function D(){const G=c.newAttributes;for(let et=0,ot=G.length;et<ot;et++)G[et]=0}function M(G){S(G,0)}function S(G,et){const ot=c.newAttributes,lt=c.enabledAttributes,Z=c.attributeDivisors;ot[G]=1,lt[G]===0&&(r.enableVertexAttribArray(G),lt[G]=1),Z[G]!==et&&(r.vertexAttribDivisor(G,et),Z[G]=et)}function C(){const G=c.newAttributes,et=c.enabledAttributes;for(let ot=0,lt=et.length;ot<lt;ot++)et[ot]!==G[ot]&&(r.disableVertexAttribArray(ot),et[ot]=0)}function L(G,et,ot,lt,Z,O,P){P===!0?r.vertexAttribIPointer(G,et,ot,Z,O):r.vertexAttribPointer(G,et,ot,lt,Z,O)}function N(G,et,ot,lt){D();const Z=lt.attributes,O=ot.getAttributes(),P=et.defaultAttributeValues;for(const J in O){const pt=O[J];if(pt.location>=0){let _t=Z[J];if(_t===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(_t=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(_t=G.instanceColor)),_t!==void 0){const I=_t.normalized,q=_t.itemSize,mt=t.get(_t);if(mt===void 0)continue;const Ct=mt.buffer,Wt=mt.type,nt=mt.bytesPerElement,xt=Wt===r.INT||Wt===r.UNSIGNED_INT||_t.gpuType===zh;if(_t.isInterleavedBufferAttribute){const wt=_t.data,Zt=wt.stride,ne=_t.offset;if(wt.isInstancedInterleavedBuffer){for(let ce=0;ce<pt.locationSize;ce++)S(pt.location+ce,wt.meshPerAttribute);G.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let ce=0;ce<pt.locationSize;ce++)M(pt.location+ce);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let ce=0;ce<pt.locationSize;ce++)L(pt.location+ce,q/pt.locationSize,Wt,I,Zt*nt,(ne+q/pt.locationSize*ce)*nt,xt)}else{if(_t.isInstancedBufferAttribute){for(let wt=0;wt<pt.locationSize;wt++)S(pt.location+wt,_t.meshPerAttribute);G.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let wt=0;wt<pt.locationSize;wt++)M(pt.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let wt=0;wt<pt.locationSize;wt++)L(pt.location+wt,q/pt.locationSize,Wt,I,q*nt,q/pt.locationSize*wt*nt,xt)}}else if(P!==void 0){const I=P[J];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(pt.location,I);break;case 3:r.vertexAttrib3fv(pt.location,I);break;case 4:r.vertexAttrib4fv(pt.location,I);break;default:r.vertexAttrib1fv(pt.location,I)}}}}C()}function F(){U();for(const G in s){const et=s[G];for(const ot in et){const lt=et[ot];for(const Z in lt){const O=lt[Z];for(const P in O)_(O[P].object),delete O[P];delete lt[Z]}}delete s[G]}}function B(G){if(s[G.id]===void 0)return;const et=s[G.id];for(const ot in et){const lt=et[ot];for(const Z in lt){const O=lt[Z];for(const P in O)_(O[P].object),delete O[P];delete lt[Z]}}delete s[G.id]}function z(G){for(const et in s){const ot=s[et];for(const lt in ot){const Z=ot[lt];if(Z[G.id]===void 0)continue;const O=Z[G.id];for(const P in O)_(O[P].object),delete O[P];delete Z[G.id]}}}function T(G){for(const et in s){const ot=s[et],lt=G.isInstancedMesh===!0?G.id:0,Z=ot[lt];if(Z!==void 0){for(const O in Z){const P=Z[O];for(const J in P)_(P[J].object),delete P[J];delete Z[O]}delete ot[lt],Object.keys(ot).length===0&&delete s[et]}}}function U(){dt(),f=!0,c!==l&&(c=l,p(c.object))}function dt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:dt,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:M,disableUnusedAttributes:C}}function oT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let y=0;for(let b=0;b<v;b++)y+=_[b];i.update(y,s,1)}function m(p,_,v,g){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],_[b],g[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let b=0;for(let D=0;D<v;D++)b+=_[D]*g[D];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function lT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==_a&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const T=z===os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Fi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ga&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ve("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:N,maxSamples:F,samples:B}}function cT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Rr,d=new be,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,y){const b=v.clippingPlanes,D=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,L=C*4;let N=S.clippingState||null;m.value=N,N=_(b,g,L,y);for(let F=0;F!==L;++F)N[F]=i[F];S.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,b){const D=v!==null?v.length:0;let M=null;if(D!==0){if(M=m.value,b!==!0||M===null){const S=y+D*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,N=y;L!==D;++L,N+=4)f.copy(v[L]).applyMatrix4(C,d),f.normal.toArray(M,N),M[N+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}const Dr=4,dx=[.125,.215,.35,.446,.526,.582],ho=20,uT=256,wc=new td,px=new fe;let Mm=null,Em=0,bm=0,Tm=!1;const fT=new j;class Ih{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=fT}=c;Mm=this._renderer.getRenderTarget(),Em=this._renderer.getActiveCubeFace(),bm=this._renderer.getActiveMipmapLevel(),Tm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Mm,Em,bm),this._renderer.xr.enabled=Tm,t.scissorTest=!1,gl(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Nr||t.mapping===_o?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mm=this._renderer.getRenderTarget(),Em=this._renderer.getActiveCubeFace(),bm=this._renderer.getActiveMipmapLevel(),Tm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:os,format:_a,colorSpace:xo,depthBuffer:!1},l=mx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hT(c)),this._blurMaterial=pT(c,t,i),this._ggxMaterial=dT(c,t,i)}return l}_compileMaterial(t){const i=new He(new $i,t);this._renderer.compile(i,wc)}_sceneToCubeUV(t,i,s,l,c){const m=new Ai(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(px),v.toneMapping=za,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new Lr,new Yc({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(px),S=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const F=this._cubeSize;gl(l,N*F,L>2?F:0,F,F),v.setRenderTarget(l),S&&v.render(D,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Nr||t.mapping===_o;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_x()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;gl(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,wc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,y=v*g,{_lodMax:b}=this,D=this._sizeLods[s],M=3*D*(s>b-Dr?s-b+Dr:0),S=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,gl(c,M,S,3*D,2*D),l.setRenderTarget(c),l.render(d,wc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,gl(t,M,S,3*D,2*D),l.setRenderTarget(t),l.render(d,wc)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ho-1),D=c/b,M=isFinite(c)?1+Math.floor(_*D):ho;M>ho&&ve(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ho}`);const S=[];let C=0;for(let z=0;z<ho;++z){const T=z/D,U=Math.exp(-T*T/2);S.push(U),z===0?C+=U:z<M&&(C+=2*U)}for(let z=0;z<S.length;z++)S[z]=S[z]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=b,g.mipInt.value=L-s;const N=this._sizeLods[l],F=3*N*(l>L-Dr?l-L+Dr:0),B=4*(this._cubeSize-N);gl(i,F,B,3*N,2*N),m.setRenderTarget(i),m.render(v,wc)}}function hT(r){const t=[],i=[],s=[];let l=r;const c=r-Dr+1+dx.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-Dr?m=dx[f-r+Dr-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,b=6,D=3,M=2,S=1,C=new Float32Array(D*b*y),L=new Float32Array(M*b*y),N=new Float32Array(S*b*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,T=B>2?0:-1,U=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(U,D*b*B),L.set(g,M*b*B);const dt=[B,B,B,B,B,B];N.set(dt,S*b*B)}const F=new $i;F.setAttribute("position",new va(C,D)),F.setAttribute("uv",new va(L,M)),F.setAttribute("faceIndex",new va(N,S)),s.push(new He(F,null)),l>Dr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function mx(r,t,i){const s=new Ha(r,t,i);return s.texture.mapping=qc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gl(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function dT(r,t,i){return new Va({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ed(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function pT(r,t,i){const s=new Float32Array(ho),l=new j(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ed(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function gx(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function _x(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function ed(){return`

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
	`}class M0 extends Ha{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new _0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Lr(5,5,5),c=new Va({name:"CubemapFromEquirect",uniforms:Dl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:_i,blending:rs});c.uniforms.tEquirect.value=i;const f=new He(l,c),d=i.minFilter;return i.minFilter===ks&&(i.minFilter=ei),new HS(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function mT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Hf||y===Gf)if(t.has(g)){const b=t.get(g).texture;return d(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const D=new M0(b.height);return D.fromEquirectangularTexture(r,g),t.set(g,D),g.addEventListener("dispose",p),d(D.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,b=y===Hf||y===Gf,D=y===Nr||y===_o;if(b||D){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Ih(r)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return b&&C&&C.height>0||D&&C&&m(C)?(s===null&&(s=new Ih(r)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===Hf?g.mapping=Nr:y===Gf&&(g.mapping=_o),g}function m(g){let y=0;const b=6;for(let D=0;D<b;D++)g[D]!==void 0&&y++;return y===b}function p(g){const y=g.target;y.removeEventListener("dispose",p);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function gT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xc("WebGLRenderer: "+s+" extension not supported."),l}}}function _T(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,b=v.attributes.position;let D=0;if(b===void 0)return;if(y!==null){const C=y.array;D=y.version;for(let L=0,N=C.length;L<N;L+=3){const F=C[L+0],B=C[L+1],z=C[L+2];g.push(F,B,B,z,z,F)}}else{const C=b.array;D=b.version;for(let L=0,N=C.length/3-1;L<N;L+=3){const F=L+0,B=L+1,z=L+2;g.push(F,B,B,z,z,F)}}const M=new(b.count>=65535?p0:d0)(g,1);M.version=D;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function vT(r,t,i){let s;function l(g){s=g}let c,f;function d(g){c=g.type,f=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*f),i.update(y,s,1)}function p(g,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,g*f,b),i.update(y,s,b))}function _(g,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,b);let M=0;for(let S=0;S<b;S++)M+=y[S];i.update(M,s,1)}function v(g,y,b,D){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)p(g[S]/f,y[S],D[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,D,0,b);let S=0;for(let C=0;C<b;C++)S+=y[C]*D[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function xT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ge("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ST(r,t,i){const s=new WeakMap,l=new An;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let dt=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",dt)};var y=dt;g!==void 0&&g.texture.dispose();const b=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),D===!0&&(N=2),M===!0&&(N=3);let F=d.attributes.position.count*N,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*v),T=new f0(z,F,B,v);T.type=ga,T.needsUpdate=!0;const U=N*4;for(let G=0;G<v;G++){const et=S[G],ot=C[G],lt=L[G],Z=F*B*4*G;for(let O=0;O<et.count;O++){const P=O*U;b===!0&&(l.fromBufferAttribute(et,O),z[Z+P+0]=l.x,z[Z+P+1]=l.y,z[Z+P+2]=l.z,z[Z+P+3]=0),D===!0&&(l.fromBufferAttribute(ot,O),z[Z+P+4]=l.x,z[Z+P+5]=l.y,z[Z+P+6]=l.z,z[Z+P+7]=0),M===!0&&(l.fromBufferAttribute(lt,O),z[Z+P+8]=l.x,z[Z+P+9]=l.y,z[Z+P+10]=l.z,z[Z+P+11]=lt.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Ue(F,B)},s.set(d,g),d.addEventListener("dispose",dt)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const D=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function yT(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const MT={[Qm]:"LINEAR_TONE_MAPPING",[Jm]:"REINHARD_TONE_MAPPING",[$m]:"CINEON_TONE_MAPPING",[Bh]:"ACES_FILMIC_TONE_MAPPING",[e0]:"AGX_TONE_MAPPING",[n0]:"NEUTRAL_TONE_MAPPING",[t0]:"CUSTOM_TONE_MAPPING"};function ET(r,t,i,s,l){const c=new Ha(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ha(t,i,{type:os,depthBuffer:!1,stencilBuffer:!1}),d=new $i;d.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ni([0,2,0,0,2,0],2));const m=new OS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new He(d,m),_=new td(-1,1,1,-1,0,1);let v=null,g=null,y=!1,b,D=null,M=[],S=!1;this.setSize=function(C,L){c.setSize(C,L),f.setSize(C,L);for(let N=0;N<M.length;N++){const F=M[N];F.setSize&&F.setSize(C,L)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const L=c.width,N=c.height;for(let F=0;F<M.length;F++){const B=M[F];B.setSize&&B.setSize(L,N)}},this.begin=function(C,L){if(y||C.toneMapping===za&&M.length===0)return!1;if(D=L,L!==null){const N=L.width,F=L.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return S===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=za,!0},this.hasRenderPass=function(){return S},this.end=function(C,L){C.toneMapping=b,y=!0;let N=c,F=f;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(C,F,N,L),z.needsSwap!==!1)){const T=N;N=F,F=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},Ve.getTransfer(v)===$e&&(m.defines.SRGB_TRANSFER="");const B=MT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(D),C.render(p,_),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const WS=new ci,Ym=new wl(1,1),YS=new f0,qS=new AS,jS=new _0,vx=[],xx=[],Sx=new Float32Array(16),yx=new Float32Array(9),Mx=new Float32Array(4);function Ol(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=vx[l];if(c===void 0&&(c=new Float32Array(l),vx[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function Yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function qn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function nd(r,t){let i=xx[t];i===void 0&&(i=new Int32Array(t),xx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function bT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function TT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2fv(this.addr,t),qn(i,t)}}function AT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Yn(i,t))return;r.uniform3fv(this.addr,t),qn(i,t)}}function RT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4fv(this.addr,t),qn(i,t)}}function CT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;Mx.set(s),r.uniformMatrix2fv(this.addr,!1,Mx),qn(i,s)}}function wT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;yx.set(s),r.uniformMatrix3fv(this.addr,!1,yx),qn(i,s)}}function DT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;Sx.set(s),r.uniformMatrix4fv(this.addr,!1,Sx),qn(i,s)}}function NT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2iv(this.addr,t),qn(i,t)}}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yn(i,t))return;r.uniform3iv(this.addr,t),qn(i,t)}}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4iv(this.addr,t),qn(i,t)}}function IT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function PT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2uiv(this.addr,t),qn(i,t)}}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yn(i,t))return;r.uniform3uiv(this.addr,t),qn(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4uiv(this.addr,t),qn(i,t)}}function zT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Ym.compareFunction=i.isReversedDepthBuffer()?jh:qh,c=Ym):c=WS,i.setTexture2D(t||c,l)}function HT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||qS,l)}function GT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||jS,l)}function VT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||YS,l)}function kT(r){switch(r){case 5126:return bT;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return NT;case 35667:case 35671:return UT;case 35668:case 35672:return LT;case 35669:case 35673:return OT;case 5125:return IT;case 36294:return PT;case 36295:return FT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}function XT(r,t){r.uniform1fv(this.addr,t)}function WT(r,t){const i=Ol(t,this.size,2);r.uniform2fv(this.addr,i)}function YT(r,t){const i=Ol(t,this.size,3);r.uniform3fv(this.addr,i)}function qT(r,t){const i=Ol(t,this.size,4);r.uniform4fv(this.addr,i)}function jT(r,t){const i=Ol(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ZT(r,t){const i=Ol(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function KT(r,t){const i=Ol(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function QT(r,t){r.uniform1iv(this.addr,t)}function JT(r,t){r.uniform2iv(this.addr,t)}function $T(r,t){r.uniform3iv(this.addr,t)}function tA(r,t){r.uniform4iv(this.addr,t)}function eA(r,t){r.uniform1uiv(this.addr,t)}function nA(r,t){r.uniform2uiv(this.addr,t)}function iA(r,t){r.uniform3uiv(this.addr,t)}function aA(r,t){r.uniform4uiv(this.addr,t)}function sA(r,t,i){const s=this.cache,l=t.length,c=nd(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Ym:f=WS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function rA(r,t,i){const s=this.cache,l=t.length,c=nd(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||qS,c[f])}function oA(r,t,i){const s=this.cache,l=t.length,c=nd(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||jS,c[f])}function lA(r,t,i){const s=this.cache,l=t.length,c=nd(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||YS,c[f])}function cA(r){switch(r){case 5126:return XT;case 35664:return WT;case 35665:return YT;case 35666:return qT;case 35674:return jT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tA;case 5125:return eA;case 36294:return nA;case 36295:return iA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}class uA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=kT(i.type)}}class fA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cA(i.type)}}class hA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Am=/(\w+)(\])?(\[|\.)?/g;function Ex(r,t){r.seq.push(t),r.map[t.id]=t}function dA(r,t,i){const s=r.name,l=s.length;for(Am.lastIndex=0;;){const c=Am.exec(s),f=Am.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Ex(i,p===void 0?new uA(d,r,t):new fA(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new hA(d),Ex(i,v)),i=v}}}class Wf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);dA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function bx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const pA=37297;let mA=0;function gA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Tx=new be;function _A(r){Ve._getMatrix(Tx,Ve.workingColorSpace,r);const t=`mat3( ${Tx.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(r)){case kc:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ax(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+gA(r.getShaderSource(t),d)}else return c}function vA(r,t){const i=_A(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const xA={[Qm]:"Linear",[Jm]:"Reinhard",[$m]:"Cineon",[Bh]:"ACESFilmic",[e0]:"AgX",[n0]:"Neutral",[t0]:"Custom"};function SA(r,t){const i=xA[t];return i===void 0?(ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lf=new j;function yA(){Ve.getLuminanceCoefficients(Lf);const r=Lf.x.toFixed(4),t=Lf.y.toFixed(4),i=Lf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ic).join(`
`)}function EA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function bA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Ic(r){return r!==""}function Rx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const TA=/^[ \t]*#include +<([\w\d./]+)>/gm;function qm(r){return r.replace(TA,RA)}const AA=new Map;function RA(r,t){let i=Ae[t];if(i===void 0){const s=AA.get(t);if(s!==void 0)i=Ae[s],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return qm(i)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wx(r){return r.replace(CA,wA)}function wA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Dx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const DA={[po]:"SHADOWMAP_TYPE_PCF",[Sl]:"SHADOWMAP_TYPE_VSM"};function NA(r){return DA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UA={[Nr]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function LA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":UA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const OA={[_o]:"ENVMAP_MODE_REFRACTION"};function IA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":OA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PA={[Fh]:"ENVMAP_BLENDING_MULTIPLY",[fS]:"ENVMAP_BLENDING_MIX",[hS]:"ENVMAP_BLENDING_ADD"};function FA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":PA[r.combine]||"ENVMAP_BLENDING_NONE"}function BA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function zA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=NA(i),p=LA(i),_=IA(i),v=FA(i),g=BA(i),y=MA(i),b=EA(c),D=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ic).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ic).join(`
`),S.length>0&&(S+=`
`)):(M=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ic).join(`
`),S=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?Ae.tonemapping_pars_fragment:"",i.toneMapping!==za?SA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,vA("linearToOutputTexel",i.outputColorSpace),yA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ic).join(`
`)),f=qm(f),f=Rx(f,i),f=Cx(f,i),d=qm(d),d=Rx(d,i),d=Cx(d,i),f=wx(f),d=wx(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=C+M+f,N=C+S+d,F=bx(l,l.VERTEX_SHADER,L),B=bx(l,l.FRAGMENT_SHADER,N);l.attachShader(D,F),l.attachShader(D,B),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function z(G){if(r.debug.checkShaderErrors){const et=l.getProgramInfoLog(D)||"",ot=l.getShaderInfoLog(F)||"",lt=l.getShaderInfoLog(B)||"",Z=et.trim(),O=ot.trim(),P=lt.trim();let J=!0,pt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,F,B);else{const _t=Ax(l,F,"vertex"),I=Ax(l,B,"fragment");Ge("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+_t+`
`+I)}else Z!==""?ve("WebGLProgram: Program Info Log:",Z):(O===""||P==="")&&(pt=!1);pt&&(G.diagnostics={runnable:J,programLog:Z,vertexShader:{log:O,prefix:M},fragmentShader:{log:P,prefix:S}})}l.deleteShader(F),l.deleteShader(B),T=new Wf(l,D),U=bA(l,D)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let dt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return dt===!1&&(dt=l.getProgramParameter(D,pA)),dt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mA++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=F,this.fragmentShader=B,this}let HA=0;class GA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new VA(t),i.set(t,s)),s}}class VA{constructor(t){this.id=HA++,this.code=t,this.usedTimes=0}}function kA(r,t,i,s,l,c){const f=new Kh,d=new GA,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,U,dt,G,et){const ot=G.fog,lt=et.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,P=t.get(T.envMap||Z,O),J=P&&P.mapping===qc?P.image.height:null,pt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ve("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const _t=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,I=_t!==void 0?_t.length:0;let q=0;lt.morphAttributes.position!==void 0&&(q=1),lt.morphAttributes.normal!==void 0&&(q=2),lt.morphAttributes.color!==void 0&&(q=3);let mt,Ct,Wt,nt;if(pt){const Ne=Fa[pt];mt=Ne.vertexShader,Ct=Ne.fragmentShader}else mt=T.vertexShader,Ct=T.fragmentShader,d.update(T),Wt=d.getVertexShaderID(T),nt=d.getFragmentShaderID(T);const xt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Zt=et.isInstancedMesh===!0,ne=et.isBatchedMesh===!0,ce=!!T.map,fn=!!T.matcap,Ce=!!P,Re=!!T.aoMap,ze=!!T.lightMap,ge=!!T.bumpMap,_n=!!T.normalMap,V=!!T.displacementMap,vt=!!T.emissiveMap,Ht=!!T.metalnessMap,Gt=!!T.roughnessMap,It=T.anisotropy>0,w=T.clearcoat>0,E=T.dispersion>0,X=T.iridescence>0,$=T.sheen>0,it=T.transmission>0,K=It&&!!T.anisotropyMap,bt=w&&!!T.clearcoatMap,Ut=w&&!!T.clearcoatNormalMap,te=w&&!!T.clearcoatRoughnessMap,oe=X&&!!T.iridescenceMap,Tt=X&&!!T.iridescenceThicknessMap,At=$&&!!T.sheenColorMap,Vt=$&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,Ft=!!T.specularColorMap,me=!!T.specularIntensityMap,k=it&&!!T.transmissionMap,Dt=it&&!!T.thicknessMap,Rt=!!T.gradientMap,zt=!!T.alphaMap,Et=T.alphaTest>0,ht=!!T.alphaHash,Yt=!!T.extensions;let ie=za;T.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ie=r.toneMapping);const je={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:mt,fragmentShader:Ct,defines:T.defines,customVertexShaderID:Wt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ne,batchingColor:ne&&et._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&et.instanceColor!==null,instancingMorph:Zt&&et.morphTexture!==null,outputColorSpace:xt===null?r.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:xo,alphaToCoverage:!!T.alphaToCoverage,map:ce,matcap:fn,envMap:Ce,envMapMode:Ce&&P.mapping,envMapCubeUVHeight:J,aoMap:Re,lightMap:ze,bumpMap:ge,normalMap:_n,displacementMap:V,emissiveMap:vt,normalMapObjectSpace:_n&&T.normalMapType===mS,normalMapTangentSpace:_n&&T.normalMapType===Yh,metalnessMap:Ht,roughnessMap:Gt,anisotropy:It,anisotropyMap:K,clearcoat:w,clearcoatMap:bt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:te,dispersion:E,iridescence:X,iridescenceMap:oe,iridescenceThicknessMap:Tt,sheen:$,sheenColorMap:At,sheenRoughnessMap:Vt,specularMap:Pt,specularColorMap:Ft,specularIntensityMap:me,transmission:it,transmissionMap:k,thicknessMap:Dt,gradientMap:Rt,opaque:T.transparent===!1&&T.blending===mo&&T.alphaToCoverage===!1,alphaMap:zt,alphaTest:Et,alphaHash:ht,combine:T.combine,mapUv:ce&&b(T.map.channel),aoMapUv:Re&&b(T.aoMap.channel),lightMapUv:ze&&b(T.lightMap.channel),bumpMapUv:ge&&b(T.bumpMap.channel),normalMapUv:_n&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:vt&&b(T.emissiveMap.channel),metalnessMapUv:Ht&&b(T.metalnessMap.channel),roughnessMapUv:Gt&&b(T.roughnessMap.channel),anisotropyMapUv:K&&b(T.anisotropyMap.channel),clearcoatMapUv:bt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:At&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&b(T.sheenRoughnessMap.channel),specularMapUv:Pt&&b(T.specularMap.channel),specularColorMapUv:Ft&&b(T.specularColorMap.channel),specularIntensityMapUv:me&&b(T.specularIntensityMap.channel),transmissionMapUv:k&&b(T.transmissionMap.channel),thicknessMapUv:Dt&&b(T.thicknessMap.channel),alphaMapUv:zt&&b(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(_n||It),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!lt.attributes.uv&&(ce||zt),fog:!!ot,useFog:T.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||lt.attributes.normal===void 0&&_n===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:et.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&dt.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:ce&&T.map.isVideoTexture===!0&&Ve.getTransfer(T.map.colorSpace)===$e,decodeVideoTextureEmissive:vt&&T.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(T.emissiveMap.colorSpace)===$e,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vn,flipSided:T.side===_i,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const dt in T.defines)U.push(dt),U.push(T.defines[dt]);return T.isRawShaderMaterial===!1&&(S(U,T),C(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function C(T,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),T.push(f.mask)}function L(T){const U=y[T.type];let dt;if(U){const G=Fa[U];dt=LS.clone(G.uniforms)}else dt=T.uniforms;return dt}function N(T,U){let dt=_.get(U);return dt!==void 0?++dt.usedTimes:(dt=new zA(r,U,T,l),p.push(dt),_.set(U,dt)),dt}function F(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function B(T){d.remove(T)}function z(){d.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:L,acquireProgram:N,releaseProgram:F,releaseShaderCache:B,programs:p,dispose:z}}function XA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function WA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Nx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ux(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,b,D,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:b,materialVariant:f(g),groupOrder:D,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=b,C.materialVariant=f(g),C.groupOrder=D,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,b,D,M,S){const C=d(g,y,b,D,M,S);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function p(g,y,b,D,M,S){const C=d(g,y,b,D,M,S);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||WA),s.length>1&&s.sort(y||Nx),l.length>1&&l.sort(y||Nx)}function v(){for(let g=t,y=r.length;g<y;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function YA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Ux,r.set(s,[f])):l>=c.length?(f=new Ux,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function qA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new fe};break;case"SpotLight":i={position:new j,direction:new j,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function jA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let ZA=0;function KA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function QA(r){const t=new qA,i=jA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new un,f=new un;function d(p){let _=0,v=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,b=0,D=0,M=0,S=0,C=0,L=0,N=0,F=0,B=0,z=0;p.sort(KA);for(let U=0,dt=p.length;U<dt;U++){const G=p[U],et=G.color,ot=G.intensity,lt=G.distance;let Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===vo?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=et.r*ot,v+=et.g*ot,g+=et.b*ot;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],ot);z++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const P=G.shadow,J=i.get(G);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=Z,s.directionalShadowMatrix[y]=G.shadow.matrix,C++}s.directional[y]=O,y++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(et).multiplyScalar(ot),O.distance=lt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[D]=O;const P=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,P.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[D]=P.matrix,G.castShadow){const J=i.get(G);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,s.spotShadow[D]=J,s.spotShadowMap[D]=Z,N++}D++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(et).multiplyScalar(ot),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=O,M++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const P=G.shadow,J=i.get(G);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,J.shadowCameraNear=P.camera.near,J.shadowCameraFar=P.camera.far,s.pointShadow[b]=J,s.pointShadowMap[b]=Z,s.pointShadowMatrix[b]=G.shadow.matrix,L++}s.point[b]=O,b++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(ot),O.groundColor.copy(G.groundColor).multiplyScalar(ot),s.hemi[S]=O,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xt.LTC_FLOAT_1,s.rectAreaLTC2=Xt.LTC_FLOAT_2):(s.rectAreaLTC1=Xt.LTC_HALF_1,s.rectAreaLTC2=Xt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==D||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==L||T.numSpotShadows!==N||T.numSpotMaps!==F||T.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=D,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,T.directionalLength=y,T.pointLength=b,T.spotLength=D,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=L,T.numSpotShadows=N,T.numSpotMaps=F,T.numLightProbes=z,s.version=ZA++)}function m(p,_){let v=0,g=0,y=0,b=0,D=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const L=p[S];if(L.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),v++}else if(L.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),b++}else if(L.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const N=s.hemi[D];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(M),D++}}}return{setup:d,setupView:m,state:s}}function Lx(r){const t=new QA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function JA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Lx(r),t.set(l,[d])):c>=f.length?(d=new Lx(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const $A=`void main() {
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
}`,e2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],n2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Ox=new un,Dc=new j,Rm=new j;function i2(r,t,i){let s=new Qh;const l=new Ue,c=new Ue,f=new An,d=new PS,m=new FS,p={},_=i.maxTextureSize,v={[Ws]:_i,[_i]:Ws,[Vn]:Vn},g=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:$A,fragmentShader:t2}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new $i;b.setAttribute("position",new va(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new He(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let S=this.type;this.render=function(B,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;this.type===Yx&&(ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=po);const U=r.getRenderTarget(),dt=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),et=r.state;et.setBlending(rs),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const ot=S!==this.type;ot&&z.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(Z=>Z.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,Z=B.length;lt<Z;lt++){const O=B[lt],P=O.shadow;if(P===void 0){ve("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const J=P.getFrameExtents();l.multiply(J),c.copy(P.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/J.x),l.x=c.x*J.x,P.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/J.y),l.y=c.y*J.y,P.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=pt,P.map===null||ot===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Sl){if(O.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ha(l.x,l.y,{format:vo,type:os,minFilter:ei,magFilter:ei,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new wl(l.x,l.y,ga),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=ls,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=ti,P.map.depthTexture.magFilter=ti}else O.isPointLight?(P.map=new M0(l.x),P.map.depthTexture=new wS(l.x,Ga)):(P.map=new Ha(l.x,l.y),P.map.depthTexture=new wl(l.x,l.y,Ga)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=ls,this.type===po?(P.map.depthTexture.compareFunction=pt?jh:qh,P.map.depthTexture.minFilter=ei,P.map.depthTexture.magFilter=ei):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=ti,P.map.depthTexture.magFilter=ti);P.camera.updateProjectionMatrix()}const _t=P.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<_t;I++){if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,I),r.clear();else{I===0&&(r.setRenderTarget(P.map),r.clear());const q=P.getViewport(I);f.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),et.viewport(f)}if(O.isPointLight){const q=P.camera,mt=P.matrix,Ct=O.distance||q.far;Ct!==q.far&&(q.far=Ct,q.updateProjectionMatrix()),Dc.setFromMatrixPosition(O.matrixWorld),q.position.copy(Dc),Rm.copy(q.position),Rm.add(e2[I]),q.up.copy(n2[I]),q.lookAt(Rm),q.updateMatrixWorld(),mt.makeTranslation(-Dc.x,-Dc.y,-Dc.z),Ox.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Ox,q.coordinateSystem,q.reversedDepth)}else P.updateMatrices(O);s=P.getFrustum(),N(z,T,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===Sl&&C(P,T),P.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(U,dt,G)};function C(B,z){const T=t.update(D);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ha(l.x,l.y,{format:vo,type:os})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,D,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,T,y,D,null)}function L(B,z,T,U){let dt=null;const G=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)dt=G;else if(dt=T.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const et=dt.uuid,ot=z.uuid;let lt=p[et];lt===void 0&&(lt={},p[et]=lt);let Z=lt[ot];Z===void 0&&(Z=dt.clone(),lt[ot]=Z,z.addEventListener("dispose",F)),dt=Z}if(dt.visible=z.visible,dt.wireframe=z.wireframe,U===Sl?dt.side=z.shadowSide!==null?z.shadowSide:z.side:dt.side=z.shadowSide!==null?z.shadowSide:v[z.side],dt.alphaMap=z.alphaMap,dt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,dt.map=z.map,dt.clipShadows=z.clipShadows,dt.clippingPlanes=z.clippingPlanes,dt.clipIntersection=z.clipIntersection,dt.displacementMap=z.displacementMap,dt.displacementScale=z.displacementScale,dt.displacementBias=z.displacementBias,dt.wireframeLinewidth=z.wireframeLinewidth,dt.linewidth=z.linewidth,T.isPointLight===!0&&dt.isMeshDistanceMaterial===!0){const et=r.properties.get(dt);et.light=T}return dt}function N(B,z,T,U,dt){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&dt===Sl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const ot=t.update(B),lt=B.material;if(Array.isArray(lt)){const Z=ot.groups;for(let O=0,P=Z.length;O<P;O++){const J=Z[O],pt=lt[J.materialIndex];if(pt&&pt.visible){const _t=L(B,pt,U,dt);B.onBeforeShadow(r,B,z,T,ot,_t,J),r.renderBufferDirect(T,null,ot,_t,B,J),B.onAfterShadow(r,B,z,T,ot,_t,J)}}}else if(lt.visible){const Z=L(B,lt,U,dt);B.onBeforeShadow(r,B,z,T,ot,Z,null),r.renderBufferDirect(T,null,ot,Z,B,null),B.onAfterShadow(r,B,z,T,ot,Z,null)}}const et=B.children;for(let ot=0,lt=et.length;ot<lt;ot++)N(et[ot],z,T,U,dt)}function F(B){B.target.removeEventListener("dispose",F);for(const T in p){const U=p[T],dt=B.target.uuid;dt in U&&(U[dt].dispose(),delete U[dt])}}}function a2(r,t){function i(){let k=!1;const Dt=new An;let Rt=null;const zt=new An(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!k&&(r.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){k=Et},setClear:function(Et,ht,Yt,ie,je){je===!0&&(Et*=ie,ht*=ie,Yt*=ie),Dt.set(Et,ht,Yt,ie),zt.equals(Dt)===!1&&(r.clearColor(Et,ht,Yt,ie),zt.copy(Dt))},reset:function(){k=!1,Rt=null,zt.set(-1,0,0,0)}}}function s(){let k=!1,Dt=!1,Rt=null,zt=null,Et=null;return{setReversed:function(ht){if(Dt!==ht){const Yt=t.get("EXT_clip_control");ht?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Dt=ht;const ie=Et;Et=null,this.setClear(ie)}},getReversed:function(){return Dt},setTest:function(ht){ht?xt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(ht){Rt!==ht&&!k&&(r.depthMask(ht),Rt=ht)},setFunc:function(ht){if(Dt&&(ht=IM[ht]),zt!==ht){switch(ht){case jf:r.depthFunc(r.NEVER);break;case Zf:r.depthFunc(r.ALWAYS);break;case Kf:r.depthFunc(r.LESS);break;case go:r.depthFunc(r.LEQUAL);break;case Qf:r.depthFunc(r.EQUAL);break;case Jf:r.depthFunc(r.GEQUAL);break;case $f:r.depthFunc(r.GREATER);break;case th:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}zt=ht}},setLocked:function(ht){k=ht},setClear:function(ht){Et!==ht&&(Et=ht,Dt&&(ht=1-ht),r.clearDepth(ht))},reset:function(){k=!1,Rt=null,zt=null,Et=null,Dt=!1}}}function l(){let k=!1,Dt=null,Rt=null,zt=null,Et=null,ht=null,Yt=null,ie=null,je=null;return{setTest:function(Ne){k||(Ne?xt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(Ne){Dt!==Ne&&!k&&(r.stencilMask(Ne),Dt=Ne)},setFunc:function(Ne,In,ui){(Rt!==Ne||zt!==In||Et!==ui)&&(r.stencilFunc(Ne,In,ui),Rt=Ne,zt=In,Et=ui)},setOp:function(Ne,In,ui){(ht!==Ne||Yt!==In||ie!==ui)&&(r.stencilOp(Ne,In,ui),ht=Ne,Yt=In,ie=ui)},setLocked:function(Ne){k=Ne},setClear:function(Ne){je!==Ne&&(r.clearStencil(Ne),je=Ne)},reset:function(){k=!1,Dt=null,Rt=null,zt=null,Et=null,ht=null,Yt=null,ie=null,je=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,y=[],b=null,D=!1,M=null,S=null,C=null,L=null,N=null,F=null,B=null,z=new fe(0,0,0),T=0,U=!1,dt=null,G=null,et=null,ot=null,lt=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,P=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(J)[1]),O=P>=1):J.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),O=P>=2);let pt=null,_t={};const I=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),mt=new An().fromArray(I),Ct=new An().fromArray(q);function Wt(k,Dt,Rt,zt){const Et=new Uint8Array(4),ht=r.createTexture();r.bindTexture(k,ht),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<Rt;Yt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Dt,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(Dt+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return ht}const nt={};nt[r.TEXTURE_2D]=Wt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),xt(r.DEPTH_TEST),f.setFunc(go),ge(!1),_n(Im),xt(r.CULL_FACE),Re(rs);function xt(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function wt(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function Zt(k,Dt){return v[k]!==Dt?(r.bindFramebuffer(k,Dt),v[k]=Dt,k===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Dt),k===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Dt),!0):!1}function ne(k,Dt){let Rt=y,zt=!1;if(k){Rt=g.get(Dt),Rt===void 0&&(Rt=[],g.set(Dt,Rt));const Et=k.textures;if(Rt.length!==Et.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Yt=Et.length;ht<Yt;ht++)Rt[ht]=r.COLOR_ATTACHMENT0+ht;Rt.length=Et.length,zt=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,zt=!0);zt&&r.drawBuffers(Rt)}function ce(k){return b!==k?(r.useProgram(k),b=k,!0):!1}const fn={[Cr]:r.FUNC_ADD,[jx]:r.FUNC_SUBTRACT,[Zx]:r.FUNC_REVERSE_SUBTRACT};fn[Kx]=r.MIN,fn[Qx]=r.MAX;const Ce={[Jx]:r.ZERO,[$x]:r.ONE,[tS]:r.SRC_COLOR,[Yf]:r.SRC_ALPHA,[rS]:r.SRC_ALPHA_SATURATE,[aS]:r.DST_COLOR,[nS]:r.DST_ALPHA,[eS]:r.ONE_MINUS_SRC_COLOR,[qf]:r.ONE_MINUS_SRC_ALPHA,[sS]:r.ONE_MINUS_DST_COLOR,[iS]:r.ONE_MINUS_DST_ALPHA,[oS]:r.CONSTANT_COLOR,[lS]:r.ONE_MINUS_CONSTANT_COLOR,[cS]:r.CONSTANT_ALPHA,[uS]:r.ONE_MINUS_CONSTANT_ALPHA};function Re(k,Dt,Rt,zt,Et,ht,Yt,ie,je,Ne){if(k===rs){D===!0&&(wt(r.BLEND),D=!1);return}if(D===!1&&(xt(r.BLEND),D=!0),k!==qx){if(k!==M||Ne!==U){if((S!==Cr||N!==Cr)&&(r.blendEquation(r.FUNC_ADD),S=Cr,N=Cr),Ne)switch(k){case mo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pm:r.blendFunc(r.ONE,r.ONE);break;case Fm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",k);break}else switch(k){case mo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Fm:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bm:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",k);break}C=null,L=null,F=null,B=null,z.set(0,0,0),T=0,M=k,U=Ne}return}Et=Et||Dt,ht=ht||Rt,Yt=Yt||zt,(Dt!==S||Et!==N)&&(r.blendEquationSeparate(fn[Dt],fn[Et]),S=Dt,N=Et),(Rt!==C||zt!==L||ht!==F||Yt!==B)&&(r.blendFuncSeparate(Ce[Rt],Ce[zt],Ce[ht],Ce[Yt]),C=Rt,L=zt,F=ht,B=Yt),(ie.equals(z)===!1||je!==T)&&(r.blendColor(ie.r,ie.g,ie.b,je),z.copy(ie),T=je),M=k,U=!1}function ze(k,Dt){k.side===Vn?wt(r.CULL_FACE):xt(r.CULL_FACE);let Rt=k.side===_i;Dt&&(Rt=!Rt),ge(Rt),k.blending===mo&&k.transparent===!1?Re(rs):Re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),vt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?xt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ge(k){dt!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),dt=k)}function _n(k){k!==kx?(xt(r.CULL_FACE),k!==G&&(k===Im?r.cullFace(r.BACK):k===Xx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),G=k}function V(k){k!==et&&(O&&r.lineWidth(k),et=k)}function vt(k,Dt,Rt){k?(xt(r.POLYGON_OFFSET_FILL),(ot!==Dt||lt!==Rt)&&(ot=Dt,lt=Rt,f.getReversed()&&(Dt=-Dt),r.polygonOffset(Dt,Rt))):wt(r.POLYGON_OFFSET_FILL)}function Ht(k){k?xt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Gt(k){k===void 0&&(k=r.TEXTURE0+Z-1),pt!==k&&(r.activeTexture(k),pt=k)}function It(k,Dt,Rt){Rt===void 0&&(pt===null?Rt=r.TEXTURE0+Z-1:Rt=pt);let zt=_t[Rt];zt===void 0&&(zt={type:void 0,texture:void 0},_t[Rt]=zt),(zt.type!==k||zt.texture!==Dt)&&(pt!==Rt&&(r.activeTexture(Rt),pt=Rt),r.bindTexture(k,Dt||nt[k]),zt.type=k,zt.texture=Dt)}function w(){const k=_t[pt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function X(){try{r.compressedTexImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function $(){try{r.texSubImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function it(){try{r.texSubImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function bt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function Ut(){try{r.texStorage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function te(){try{r.texStorage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function oe(){try{r.texImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function Tt(){try{r.texImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function At(k){mt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),mt.copy(k))}function Vt(k){Ct.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ct.copy(k))}function Pt(k,Dt){let Rt=p.get(Dt);Rt===void 0&&(Rt=new WeakMap,p.set(Dt,Rt));let zt=Rt.get(k);zt===void 0&&(zt=r.getUniformBlockIndex(Dt,k.name),Rt.set(k,zt))}function Ft(k,Dt){const zt=p.get(Dt).get(k);m.get(Dt)!==zt&&(r.uniformBlockBinding(Dt,zt,k.__bindingPointIndex),m.set(Dt,zt))}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},pt=null,_t={},v={},g=new WeakMap,y=[],b=null,D=!1,M=null,S=null,C=null,L=null,N=null,F=null,B=null,z=new fe(0,0,0),T=0,U=!1,dt=null,G=null,et=null,ot=null,lt=null,mt.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:xt,disable:wt,bindFramebuffer:Zt,drawBuffers:ne,useProgram:ce,setBlending:Re,setMaterial:ze,setFlipSided:ge,setCullFace:_n,setLineWidth:V,setPolygonOffset:vt,setScissorTest:Ht,activeTexture:Gt,bindTexture:It,unbindTexture:w,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:oe,texImage3D:Tt,updateUBOMapping:Pt,uniformBlockBinding:Ft,texStorage2D:Ut,texStorage3D:te,texSubImage2D:$,texSubImage3D:it,compressedTexSubImage2D:K,compressedTexSubImage3D:bt,scissor:At,viewport:Vt,reset:me}}function s2(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ue,_=new WeakMap;let v;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,E){return y?new OffscreenCanvas(w,E):Oh("canvas")}function D(w,E,X){let $=1;const it=It(w);if((it.width>X||it.height>X)&&($=X/Math.max(it.width,it.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor($*it.width),bt=Math.floor($*it.height);v===void 0&&(v=b(K,bt));const Ut=E?b(K,bt):v;return Ut.width=K,Ut.height=bt,Ut.getContext("2d").drawImage(w,0,0,K,bt),ve("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+K+"x"+bt+")."),Ut}else return"data"in w&&ve("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function M(w){return w.generateMipmaps}function S(w){r.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(w,E,X,$,it=!1){if(w!==null){if(r[w]!==void 0)return r[w];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=E;if(E===r.RED&&(X===r.FLOAT&&(K=r.R32F),X===r.HALF_FLOAT&&(K=r.R16F),X===r.UNSIGNED_BYTE&&(K=r.R8)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(K=r.R8UI),X===r.UNSIGNED_SHORT&&(K=r.R16UI),X===r.UNSIGNED_INT&&(K=r.R32UI),X===r.BYTE&&(K=r.R8I),X===r.SHORT&&(K=r.R16I),X===r.INT&&(K=r.R32I)),E===r.RG&&(X===r.FLOAT&&(K=r.RG32F),X===r.HALF_FLOAT&&(K=r.RG16F),X===r.UNSIGNED_BYTE&&(K=r.RG8)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(K=r.RG8UI),X===r.UNSIGNED_SHORT&&(K=r.RG16UI),X===r.UNSIGNED_INT&&(K=r.RG32UI),X===r.BYTE&&(K=r.RG8I),X===r.SHORT&&(K=r.RG16I),X===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(K=r.RGB8UI),X===r.UNSIGNED_SHORT&&(K=r.RGB16UI),X===r.UNSIGNED_INT&&(K=r.RGB32UI),X===r.BYTE&&(K=r.RGB8I),X===r.SHORT&&(K=r.RGB16I),X===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),X===r.UNSIGNED_INT&&(K=r.RGBA32UI),X===r.BYTE&&(K=r.RGBA8I),X===r.SHORT&&(K=r.RGBA16I),X===r.INT&&(K=r.RGBA32I)),E===r.RGB&&(X===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),E===r.RGBA){const bt=it?kc:Ve.getTransfer($);X===r.FLOAT&&(K=r.RGBA32F),X===r.HALF_FLOAT&&(K=r.RGBA16F),X===r.UNSIGNED_BYTE&&(K=bt===$e?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function N(w,E){let X;return w?E===null||E===Ga||E===Al?X=r.DEPTH24_STENCIL8:E===ga?X=r.DEPTH32F_STENCIL8:E===Tl&&(X=r.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ga||E===Al?X=r.DEPTH_COMPONENT24:E===ga?X=r.DEPTH_COMPONENT32F:E===Tl&&(X=r.DEPTH_COMPONENT16),X}function F(w,E){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==ti&&w.minFilter!==ei?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function B(w){const E=w.target;E.removeEventListener("dispose",B),T(E),E.isVideoTexture&&_.delete(E)}function z(w){const E=w.target;E.removeEventListener("dispose",z),dt(E)}function T(w){const E=s.get(w);if(E.__webglInit===void 0)return;const X=w.source,$=g.get(X);if($){const it=$[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&U(w),Object.keys($).length===0&&g.delete(X)}s.remove(w)}function U(w){const E=s.get(w);r.deleteTexture(E.__webglTexture);const X=w.source,$=g.get(X);delete $[E.__cacheKey],f.memory.textures--}function dt(w){const E=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let it=0;it<E.__webglFramebuffer[$].length;it++)r.deleteFramebuffer(E.__webglFramebuffer[$][it]);else r.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)r.deleteFramebuffer(E.__webglFramebuffer[$]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=w.textures;for(let $=0,it=X.length;$<it;$++){const K=s.get(X[$]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),f.memory.textures--),s.remove(X[$])}s.remove(w)}let G=0;function et(){G=0}function ot(){const w=G;return w>=l.maxTextures&&ve("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),G+=1,w}function lt(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function Z(w,E){const X=s.get(w);if(w.isVideoTexture&&Ht(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&X.__version!==w.version){const $=w.image;if($===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(X,w,E);return}}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function O(w,E){const X=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){nt(X,w,E);return}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function P(w,E){const X=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){nt(X,w,E);return}i.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function J(w,E){const X=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&X.__version!==w.version){xt(X,w,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const pt={[bl]:r.REPEAT,[ss]:r.CLAMP_TO_EDGE,[eh]:r.MIRRORED_REPEAT},_t={[ti]:r.NEAREST,[dS]:r.NEAREST_MIPMAP_NEAREST,[Oc]:r.NEAREST_MIPMAP_LINEAR,[ei]:r.LINEAR,[Vf]:r.LINEAR_MIPMAP_NEAREST,[ks]:r.LINEAR_MIPMAP_LINEAR},I={[gS]:r.NEVER,[yS]:r.ALWAYS,[_S]:r.LESS,[qh]:r.LEQUAL,[vS]:r.EQUAL,[jh]:r.GEQUAL,[xS]:r.GREATER,[SS]:r.NOTEQUAL};function q(w,E){if(E.type===ga&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ei||E.magFilter===Vf||E.magFilter===Oc||E.magFilter===ks||E.minFilter===ei||E.minFilter===Vf||E.minFilter===Oc||E.minFilter===ks)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,pt[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,pt[E.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,pt[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,_t[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ti||E.minFilter!==Oc&&E.minFilter!==ks||E.type===ga&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function mt(w,E){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",B));const $=E.source;let it=g.get($);it===void 0&&(it={},g.set($,it));const K=lt(E);if(K!==w.__cacheKey){it[K]===void 0&&(it[K]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,X=!0),it[K].usedTimes++;const bt=it[w.__cacheKey];bt!==void 0&&(it[w.__cacheKey].usedTimes--,bt.usedTimes===0&&U(E)),w.__cacheKey=K,w.__webglTexture=it[K].texture}return X}function Ct(w,E,X){return Math.floor(Math.floor(w/X)/E)}function Wt(w,E,X,$){const K=w.updateRanges;if(K.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,X,$,E.data);else{K.sort((Tt,At)=>Tt.start-At.start);let bt=0;for(let Tt=1;Tt<K.length;Tt++){const At=K[bt],Vt=K[Tt],Pt=At.start+At.count,Ft=Ct(Vt.start,E.width,4),me=Ct(At.start,E.width,4);Vt.start<=Pt+1&&Ft===me&&Ct(Vt.start+Vt.count-1,E.width,4)===Ft?At.count=Math.max(At.count,Vt.start+Vt.count-At.start):(++bt,K[bt]=Vt)}K.length=bt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),te=r.getParameter(r.UNPACK_SKIP_PIXELS),oe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,At=K.length;Tt<At;Tt++){const Vt=K[Tt],Pt=Math.floor(Vt.start/4),Ft=Math.ceil(Vt.count/4),me=Pt%E.width,k=Math.floor(Pt/E.width),Dt=Ft,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,me),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,me,k,Dt,Rt,X,$,E.data)}w.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,te),r.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function nt(w,E,X){let $=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=r.TEXTURE_3D);const it=mt(w,E),K=E.source;i.bindTexture($,w.__webglTexture,r.TEXTURE0+X);const bt=s.get(K);if(K.version!==bt.__version||it===!0){i.activeTexture(r.TEXTURE0+X);const Ut=Ve.getPrimaries(Ve.workingColorSpace),te=E.colorSpace===Gs?null:Ve.getPrimaries(E.colorSpace),oe=E.colorSpace===Gs||Ut===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Tt=D(E.image,!1,l.maxTextureSize);Tt=Gt(E,Tt);const At=c.convert(E.format,E.colorSpace),Vt=c.convert(E.type);let Pt=L(E.internalFormat,At,Vt,E.colorSpace,E.isVideoTexture);q($,E);let Ft;const me=E.mipmaps,k=E.isVideoTexture!==!0,Dt=bt.__version===void 0||it===!0,Rt=K.dataReady,zt=F(E,Tt);if(E.isDepthTexture)Pt=N(E.format===wr,E.type),Dt&&(k?i.texStorage2D(r.TEXTURE_2D,1,Pt,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,At,Vt,null));else if(E.isDataTexture)if(me.length>0){k&&Dt&&i.texStorage2D(r.TEXTURE_2D,zt,Pt,me[0].width,me[0].height);for(let Et=0,ht=me.length;Et<ht;Et++)Ft=me[Et],k?Rt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,At,Vt,Ft.data):i.texImage2D(r.TEXTURE_2D,Et,Pt,Ft.width,Ft.height,0,At,Vt,Ft.data);E.generateMipmaps=!1}else k?(Dt&&i.texStorage2D(r.TEXTURE_2D,zt,Pt,Tt.width,Tt.height),Rt&&Wt(E,Tt,At,Vt)):i.texImage2D(r.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,At,Vt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Pt,me[0].width,me[0].height,Tt.depth);for(let Et=0,ht=me.length;Et<ht;Et++)if(Ft=me[Et],E.format!==_a)if(At!==null)if(k){if(Rt)if(E.layerUpdates.size>0){const Yt=hx(Ft.width,Ft.height,E.format,E.type);for(const ie of E.layerUpdates){const je=Ft.data.subarray(ie*Yt/Ft.data.BYTES_PER_ELEMENT,(ie+1)*Yt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,ie,Ft.width,Ft.height,1,At,je)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,Tt.depth,At,Ft.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,Pt,Ft.width,Ft.height,Tt.depth,0,Ft.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Rt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,Tt.depth,At,Vt,Ft.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Et,Pt,Ft.width,Ft.height,Tt.depth,0,At,Vt,Ft.data)}else{k&&Dt&&i.texStorage2D(r.TEXTURE_2D,zt,Pt,me[0].width,me[0].height);for(let Et=0,ht=me.length;Et<ht;Et++)Ft=me[Et],E.format!==_a?At!==null?k?Rt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,At,Ft.data):i.compressedTexImage2D(r.TEXTURE_2D,Et,Pt,Ft.width,Ft.height,0,Ft.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Rt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,At,Vt,Ft.data):i.texImage2D(r.TEXTURE_2D,Et,Pt,Ft.width,Ft.height,0,At,Vt,Ft.data)}else if(E.isDataArrayTexture)if(k){if(Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Pt,Tt.width,Tt.height,Tt.depth),Rt)if(E.layerUpdates.size>0){const Et=hx(Tt.width,Tt.height,E.format,E.type);for(const ht of E.layerUpdates){const Yt=Tt.data.subarray(ht*Et/Tt.data.BYTES_PER_ELEMENT,(ht+1)*Et/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,Tt.width,Tt.height,1,At,Vt,Yt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,At,Vt,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,Tt.width,Tt.height,Tt.depth,0,At,Vt,Tt.data);else if(E.isData3DTexture)k?(Dt&&i.texStorage3D(r.TEXTURE_3D,zt,Pt,Tt.width,Tt.height,Tt.depth),Rt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,At,Vt,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,Pt,Tt.width,Tt.height,Tt.depth,0,At,Vt,Tt.data);else if(E.isFramebufferTexture){if(Dt)if(k)i.texStorage2D(r.TEXTURE_2D,zt,Pt,Tt.width,Tt.height);else{let Et=Tt.width,ht=Tt.height;for(let Yt=0;Yt<zt;Yt++)i.texImage2D(r.TEXTURE_2D,Yt,Pt,Et,ht,0,At,Vt,null),Et>>=1,ht>>=1}}else if(me.length>0){if(k&&Dt){const Et=It(me[0]);i.texStorage2D(r.TEXTURE_2D,zt,Pt,Et.width,Et.height)}for(let Et=0,ht=me.length;Et<ht;Et++)Ft=me[Et],k?Rt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,At,Vt,Ft):i.texImage2D(r.TEXTURE_2D,Et,Pt,At,Vt,Ft);E.generateMipmaps=!1}else if(k){if(Dt){const Et=It(Tt);i.texStorage2D(r.TEXTURE_2D,zt,Pt,Et.width,Et.height)}Rt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Vt,Tt)}else i.texImage2D(r.TEXTURE_2D,0,Pt,At,Vt,Tt);M(E)&&S($),bt.__version=K.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function xt(w,E,X){if(E.image.length!==6)return;const $=mt(w,E),it=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+X);const K=s.get(it);if(it.version!==K.__version||$===!0){i.activeTexture(r.TEXTURE0+X);const bt=Ve.getPrimaries(Ve.workingColorSpace),Ut=E.colorSpace===Gs?null:Ve.getPrimaries(E.colorSpace),te=E.colorSpace===Gs||bt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,At=[];for(let ht=0;ht<6;ht++)!oe&&!Tt?At[ht]=D(E.image[ht],!0,l.maxCubemapSize):At[ht]=Tt?E.image[ht].image:E.image[ht],At[ht]=Gt(E,At[ht]);const Vt=At[0],Pt=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type),me=L(E.internalFormat,Pt,Ft,E.colorSpace),k=E.isVideoTexture!==!0,Dt=K.__version===void 0||$===!0,Rt=it.dataReady;let zt=F(E,Vt);q(r.TEXTURE_CUBE_MAP,E);let Et;if(oe){k&&Dt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,me,Vt.width,Vt.height);for(let ht=0;ht<6;ht++){Et=At[ht].mipmaps;for(let Yt=0;Yt<Et.length;Yt++){const ie=Et[Yt];E.format!==_a?Pt!==null?k?Rt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,0,0,ie.width,ie.height,Pt,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,me,ie.width,ie.height,0,ie.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,0,0,ie.width,ie.height,Pt,Ft,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt,me,ie.width,ie.height,0,Pt,Ft,ie.data)}}}else{if(Et=E.mipmaps,k&&Dt){Et.length>0&&zt++;const ht=It(At[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,me,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Tt){k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,At[ht].width,At[ht].height,Pt,Ft,At[ht].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,me,At[ht].width,At[ht].height,0,Pt,Ft,At[ht].data);for(let Yt=0;Yt<Et.length;Yt++){const je=Et[Yt].image[ht].image;k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,0,0,je.width,je.height,Pt,Ft,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,me,je.width,je.height,0,Pt,Ft,je.data)}}else{k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Pt,Ft,At[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,me,Pt,Ft,At[ht]);for(let Yt=0;Yt<Et.length;Yt++){const ie=Et[Yt];k?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,0,0,Pt,Ft,ie.image[ht]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Yt+1,me,Pt,Ft,ie.image[ht])}}}M(E)&&S(r.TEXTURE_CUBE_MAP),K.__version=it.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function wt(w,E,X,$,it,K){const bt=c.convert(X.format,X.colorSpace),Ut=c.convert(X.type),te=L(X.internalFormat,bt,Ut,X.colorSpace),oe=s.get(E),Tt=s.get(X);if(Tt.__renderTarget=E,!oe.__hasExternalTextures){const At=Math.max(1,E.width>>K),Vt=Math.max(1,E.height>>K);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?i.texImage3D(it,K,te,At,Vt,E.depth,0,bt,Ut,null):i.texImage2D(it,K,te,At,Vt,0,bt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),vt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,it,Tt.__webglTexture,0,V(E)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,it,Tt.__webglTexture,K),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(w,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer){const $=E.depthTexture,it=$&&$.isDepthTexture?$.type:null,K=N(E.stencilBuffer,it),bt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;vt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),K,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),K,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,K,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,w)}else{const $=E.textures;for(let it=0;it<$.length;it++){const K=$[it],bt=c.convert(K.format,K.colorSpace),Ut=c.convert(K.type),te=L(K.internalFormat,bt,Ut,K.colorSpace);vt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),te,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,te,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ne(w,E,X){const $=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=s.get(E.depthTexture);if(it.__renderTarget=E,(!it.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$){if(it.__webglInit===void 0&&(it.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),it.__webglTexture===void 0){it.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),q(r.TEXTURE_CUBE_MAP,E.depthTexture);const oe=c.convert(E.depthTexture.format),Tt=c.convert(E.depthTexture.type);let At;E.depthTexture.format===ls?At=r.DEPTH_COMPONENT24:E.depthTexture.format===wr&&(At=r.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,At,E.width,E.height,0,oe,Tt,null)}}else Z(E.depthTexture,0);const K=it.__webglTexture,bt=V(E),Ut=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,te=E.depthTexture.format===wr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ls)vt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Ut,K,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,te,Ut,K,0);else if(E.depthTexture.format===wr)vt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Ut,K,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,te,Ut,K,0);else throw new Error("Unknown depthTexture format")}function ce(w){const E=s.get(w),X=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",it)};$.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=$}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let $=0;$<6;$++)ne(E.__webglFramebuffer[$],w,$);else{const $=w.texture.mipmaps;$&&$.length>0?ne(E.__webglFramebuffer[0],w,0):ne(E.__webglFramebuffer,w,0)}else if(X){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=r.createRenderbuffer(),Zt(E.__webglDepthbuffer[$],w,!1);else{const it=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,K)}}else{const $=w.texture.mipmaps;if($&&$.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Zt(E.__webglDepthbuffer,w,!1);else{const it=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,K)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function fn(w,E,X){const $=s.get(w);E!==void 0&&wt($.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&ce(w)}function Ce(w){const E=w.texture,X=s.get(w),$=s.get(E);w.addEventListener("dispose",z);const it=w.textures,K=w.isWebGLCubeRenderTarget===!0,bt=it.length>1;if(bt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=E.version,f.memory.textures++),K){X.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[Ut]=[];for(let te=0;te<E.mipmaps.length;te++)X.__webglFramebuffer[Ut][te]=r.createFramebuffer()}else X.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)X.__webglFramebuffer[Ut]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(bt)for(let Ut=0,te=it.length;Ut<te;Ut++){const oe=s.get(it[Ut]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),f.memory.textures++)}if(w.samples>0&&vt(w)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ut=0;Ut<it.length;Ut++){const te=it[Ut];X.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Ut]);const oe=c.convert(te.format,te.colorSpace),Tt=c.convert(te.type),At=L(te.internalFormat,oe,Tt,te.colorSpace,w.isXRRenderTarget===!0),Vt=V(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,At,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,X.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Zt(X.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),q(r.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)wt(X.__webglFramebuffer[Ut][te],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,te);else wt(X.__webglFramebuffer[Ut],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(E)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(bt){for(let Ut=0,te=it.length;Ut<te;Ut++){const oe=it[Ut],Tt=s.get(oe);let At=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(At=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,Tt.__webglTexture),q(At,oe),wt(X.__webglFramebuffer,w,oe,r.COLOR_ATTACHMENT0+Ut,At,0),M(oe)&&S(At)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ut=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,$.__webglTexture),q(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)wt(X.__webglFramebuffer[te],w,E,r.COLOR_ATTACHMENT0,Ut,te);else wt(X.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,Ut,0);M(E)&&S(Ut),i.unbindTexture()}w.depthBuffer&&ce(w)}function Re(w){const E=w.textures;for(let X=0,$=E.length;X<$;X++){const it=E[X];if(M(it)){const K=C(w),bt=s.get(it).__webglTexture;i.bindTexture(K,bt),S(K),i.unbindTexture()}}}const ze=[],ge=[];function _n(w){if(w.samples>0){if(vt(w)===!1){const E=w.textures,X=w.width,$=w.height;let it=r.COLOR_BUFFER_BIT;const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=s.get(w),Ut=E.length>1;if(Ut)for(let oe=0;oe<E.length;oe++)i.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const te=w.texture.mipmaps;te&&te.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let oe=0;oe<E.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[oe]);const Tt=s.get(E[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,X,$,0,0,X,$,it,r.NEAREST),m===!0&&(ze.length=0,ge.length=0,ze.push(r.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ze.push(K),ge.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let oe=0;oe<E.length;oe++){i.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,bt.__webglColorRenderbuffer[oe]);const Tt=s.get(E[oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,Tt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const E=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(w){return Math.min(l.maxSamples,w.samples)}function vt(w){const E=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(w){const E=f.render.frame;_.get(w)!==E&&(_.set(w,E),w.update())}function Gt(w,E){const X=w.colorSpace,$=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==xo&&X!==Gs&&(Ve.getTransfer(X)===$e?($!==_a||it!==Fi)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",X)),E}function It(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=et,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=P,this.setTextureCube=J,this.rebindTextures=fn,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ZS(r,t){function i(s,l=Gs){let c;const f=Ve.getTransfer(l);if(s===Fi)return r.UNSIGNED_BYTE;if(s===Hh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Gh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===r0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===o0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===a0)return r.BYTE;if(s===s0)return r.SHORT;if(s===Tl)return r.UNSIGNED_SHORT;if(s===zh)return r.INT;if(s===Ga)return r.UNSIGNED_INT;if(s===ga)return r.FLOAT;if(s===os)return r.HALF_FLOAT;if(s===l0)return r.ALPHA;if(s===c0)return r.RGB;if(s===_a)return r.RGBA;if(s===ls)return r.DEPTH_COMPONENT;if(s===wr)return r.DEPTH_STENCIL;if(s===Vh)return r.RED;if(s===kh)return r.RED_INTEGER;if(s===vo)return r.RG;if(s===Xh)return r.RG_INTEGER;if(s===Wh)return r.RGBA_INTEGER;if(s===Pc||s===Fc||s===Bc||s===zc)if(f===$e)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nh||s===ih||s===ah||s===sh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===nh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ih)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===hh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===rh||s===oh)return f===$e?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===lh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ch)return c.COMPRESSED_R11_EAC;if(s===uh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===fh)return c.COMPRESSED_RG11_EAC;if(s===hh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===dh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===yh||s===Mh||s===Eh||s===bh||s===Th||s===Ah)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===dh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ph)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_h)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Eh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bh)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Th)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ah)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rh||s===Ch||s===wh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Rh)return f===$e?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ch)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dh||s===Nh||s===Uh||s===Lh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Dh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Nh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Uh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const r2=`
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

}`;class l2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new v0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Va({vertexShader:r2,fragmentShader:o2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new He(new as(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c2 extends So{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,y=null,b=null;const D=typeof XRWebGLBinding<"u",M=new l2,S={},C=i.getContextAttributes();let L=null,N=null;const F=[],B=[],z=new Ue;let T=null;const U=new Ai;U.viewport=new An;const dt=new Ai;dt.viewport=new An;const G=[U,dt],et=new GS;let ot=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let xt=F[nt];return xt===void 0&&(xt=new kf,F[nt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(nt){let xt=F[nt];return xt===void 0&&(xt=new kf,F[nt]=xt),xt.getGripSpace()},this.getHand=function(nt){let xt=F[nt];return xt===void 0&&(xt=new kf,F[nt]=xt),xt.getHandSpace()};function Z(nt){const xt=B.indexOf(nt.inputSource);if(xt===-1)return;const wt=F[xt];wt!==void 0&&(wt.update(nt.inputSource,nt.frame,p||f),wt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",P);for(let nt=0;nt<F.length;nt++){const xt=B[nt];xt!==null&&(B[nt]=null,F[nt].disconnect(xt))}ot=null,lt=null,M.reset();for(const nt in S)delete S[nt];t.setRenderTarget(L),y=null,g=null,v=null,l=null,N=null,Wt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",O),l.addEventListener("inputsourceschange",P),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Zt=null,ne=null;C.depth&&(ne=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=C.stencil?wr:ls,Zt=C.stencil?Al:Ga);const ce={colorFormat:i.RGBA8,depthFormat:ne,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(ce),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Ha(g.textureWidth,g.textureHeight,{format:_a,type:Fi,depthTexture:new wl(g.textureWidth,g.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const wt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Ha(y.framebufferWidth,y.framebufferHeight,{format:_a,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Wt.setContext(l),Wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function P(nt){for(let xt=0;xt<nt.removed.length;xt++){const wt=nt.removed[xt],Zt=B.indexOf(wt);Zt>=0&&(B[Zt]=null,F[Zt].disconnect(wt))}for(let xt=0;xt<nt.added.length;xt++){const wt=nt.added[xt];let Zt=B.indexOf(wt);if(Zt===-1){for(let ce=0;ce<F.length;ce++)if(ce>=B.length){B.push(wt),Zt=ce;break}else if(B[ce]===null){B[ce]=wt,Zt=ce;break}if(Zt===-1)break}const ne=F[Zt];ne&&ne.connect(wt)}}const J=new j,pt=new j;function _t(nt,xt,wt){J.setFromMatrixPosition(xt.matrixWorld),pt.setFromMatrixPosition(wt.matrixWorld);const Zt=J.distanceTo(pt),ne=xt.projectionMatrix.elements,ce=wt.projectionMatrix.elements,fn=ne[14]/(ne[10]-1),Ce=ne[14]/(ne[10]+1),Re=(ne[9]+1)/ne[5],ze=(ne[9]-1)/ne[5],ge=(ne[8]-1)/ne[0],_n=(ce[8]+1)/ce[0],V=fn*ge,vt=fn*_n,Ht=Zt/(-ge+_n),Gt=Ht*-ge;if(xt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Gt),nt.translateZ(Ht),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),ne[10]===-1)nt.projectionMatrix.copy(xt.projectionMatrix),nt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const It=fn+Ht,w=Ce+Ht,E=V-Gt,X=vt+(Zt-Gt),$=Re*Ce/w*It,it=ze*Ce/w*It;nt.projectionMatrix.makePerspective(E,X,$,it,It,w),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function I(nt,xt){xt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(xt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let xt=nt.near,wt=nt.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),et.near=dt.near=U.near=xt,et.far=dt.far=U.far=wt,(ot!==et.near||lt!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),ot=et.near,lt=et.far),et.layers.mask=nt.layers.mask|6,U.layers.mask=et.layers.mask&-5,dt.layers.mask=et.layers.mask&-3;const Zt=nt.parent,ne=et.cameras;I(et,Zt);for(let ce=0;ce<ne.length;ce++)I(ne[ce],Zt);ne.length===2?_t(et,U,dt):et.projectionMatrix.copy(U.projectionMatrix),q(nt,et,Zt)};function q(nt,xt,wt){wt===null?nt.matrix.copy(xt.matrixWorld):(nt.matrix.copy(wt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(xt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(xt.projectionMatrix),nt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Cl*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(nt){m=nt,g!==null&&(g.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(et)},this.getCameraTexture=function(nt){return S[nt]};let mt=null;function Ct(nt,xt){if(_=xt.getViewerPose(p||f),b=xt,_!==null){const wt=_.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Zt=!1;wt.length!==et.cameras.length&&(et.cameras.length=0,Zt=!0);for(let Ce=0;Ce<wt.length;Ce++){const Re=wt[Ce];let ze=null;if(y!==null)ze=y.getViewport(Re);else{const _n=v.getViewSubImage(g,Re);ze=_n.viewport,Ce===0&&(t.setRenderTargetTextures(N,_n.colorTexture,_n.depthStencilTexture),t.setRenderTarget(N))}let ge=G[Ce];ge===void 0&&(ge=new Ai,ge.layers.enable(Ce),ge.viewport=new An,G[Ce]=ge),ge.matrix.fromArray(Re.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Re.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ze.x,ze.y,ze.width,ze.height),Ce===0&&(et.matrix.copy(ge.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Zt===!0&&et.cameras.push(ge)}const ne=l.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=s.getBinding();const Ce=v.getDepthInformation(wt[0]);Ce&&Ce.isValid&&Ce.texture&&M.init(Ce,l.renderState)}if(ne&&ne.includes("camera-access")&&D){t.state.unbindTexture(),v=s.getBinding();for(let Ce=0;Ce<wt.length;Ce++){const Re=wt[Ce].camera;if(Re){let ze=S[Re];ze||(ze=new v0,S[Re]=ze);const ge=v.getCameraImage(Re);ze.sourceTexture=ge}}}}for(let wt=0;wt<F.length;wt++){const Zt=B[wt],ne=F[wt];Zt!==null&&ne!==void 0&&ne.update(Zt,xt,p||f)}mt&&mt(nt,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),b=null}const Wt=new XS;Wt.setAnimationLoop(Ct),this.setAnimationLoop=function(nt){mt=nt},this.dispose=function(){}}}const lo=new Ji,u2=new un;function f2(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,US(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,L,N){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,N)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),D(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,C,L):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===_i&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===_i&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),L=C.envMap,N=C.envMapRotation;L&&(M.envMap.value=L,lo.copy(N),lo.x*=-1,lo.y*=-1,lo.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(lo.y*=-1,lo.z*=-1),M.envMapRotation.value.setFromMatrix4(u2.makeRotationFromEuler(lo)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===_i&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function D(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function h2(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const N=L.program;s.uniformBlockBinding(C,N)}function p(C,L){let N=l[C.id];N===void 0&&(b(C),N=_(C),l[C.id]=N,C.addEventListener("dispose",M));const F=L.program;s.updateUBOMapping(C,F);const B=t.render.frame;c[C.id]!==B&&(g(C),c[C.id]=B)}function _(C){const L=v();C.__bindingPointIndex=L;const N=r.createBuffer(),F=C.__size,B=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function v(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],N=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let B=0,z=N.length;B<z;B++){const T=Array.isArray(N[B])?N[B]:[N[B]];for(let U=0,dt=T.length;U<dt;U++){const G=T[U];if(y(G,B,U,F)===!0){const et=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let lt=0;for(let Z=0;Z<ot.length;Z++){const O=ot[Z],P=D(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,et+lt,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,lt),lt+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,et,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,L,N,F){const B=C.value,z=L+"_"+N;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const T=F[z];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return F[z]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function b(C){const L=C.uniforms;let N=0;const F=16;for(let z=0,T=L.length;z<T;z++){const U=Array.isArray(L[z])?L[z]:[L[z]];for(let dt=0,G=U.length;dt<G;dt++){const et=U[dt],ot=Array.isArray(et.value)?et.value:[et.value];for(let lt=0,Z=ot.length;lt<Z;lt++){const O=ot[lt],P=D(O),J=N%F,pt=J%P.boundary,_t=J+pt;N+=pt,_t!==0&&F-_t<P.storage&&(N+=F-_t),et.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=N,N+=P.storage}}}const B=N%F;return B>0&&(N+=F-B),C.__size=N,C.__cache={},this}function D(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ve("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const N=f.indexOf(L.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const d2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let is=null;function p2(){return is===null&&(is=new g0(d2,16,16,vo,os),is.name="DFG_LUT",is.minFilter=ei,is.magFilter=ei,is.wrapS=ss,is.wrapT=ss,is.generateMipmaps=!1,is.needsUpdate=!0),is}class KS{constructor(t={}){const{canvas:i=MS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Fi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const D=y,M=new Set([Wh,Xh,kh]),S=new Set([Fi,Ga,Tl,Al,Hh,Gh]),C=new Uint32Array(4),L=new Int32Array(4);let N=null,F=null;const B=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let dt=!1;this._outputColorSpace=Wn;let G=0,et=0,ot=null,lt=-1,Z=null;const O=new An,P=new An;let J=null;const pt=new fe(0);let _t=0,I=i.width,q=i.height,mt=1,Ct=null,Wt=null;const nt=new An(0,0,I,q),xt=new An(0,0,I,q);let wt=!1;const Zt=new Qh;let ne=!1,ce=!1;const fn=new un,Ce=new j,Re=new An,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function _n(){return ot===null?mt:1}let V=s;function vt(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ph}`),i.addEventListener("webglcontextlost",Yt,!1),i.addEventListener("webglcontextrestored",ie,!1),i.addEventListener("webglcontextcreationerror",je,!1),V===null){const Y="webgl2";if(V=vt(Y,R),V===null)throw vt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ge("WebGLRenderer: "+R.message),R}let Ht,Gt,It,w,E,X,$,it,K,bt,Ut,te,oe,Tt,At,Vt,Pt,Ft,me,k,Dt,Rt,zt;function Et(){Ht=new gT(V),Ht.init(),Dt=new ZS(V,Ht),Gt=new lT(V,Ht,t,Dt),It=new a2(V,Ht),Gt.reversedDepthBuffer&&g&&It.buffers.depth.setReversed(!0),w=new xT(V),E=new XA,X=new s2(V,Ht,It,E,Gt,Dt,w),$=new mT(U),it=new bE(V),Rt=new rT(V,it),K=new _T(V,it,w,Rt),bt=new yT(V,K,it,Rt,w),Ft=new ST(V,Gt,X),At=new cT(E),Ut=new kA(U,$,Ht,Gt,Rt,At),te=new f2(U,E),oe=new YA,Tt=new JA(Ht),Pt=new sT(U,$,It,bt,b,m),Vt=new i2(U,bt,Gt),zt=new h2(V,w,Gt,It),me=new oT(V,Ht,w),k=new vT(V,Ht,w),w.programs=Ut.programs,U.capabilities=Gt,U.extensions=Ht,U.properties=E,U.renderLists=oe,U.shadowMap=Vt,U.state=It,U.info=w}Et(),D!==Fi&&(T=new ET(D,i.width,i.height,l,c));const ht=new c2(U,V);this.xr=ht,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(R){R!==void 0&&(mt=R,this.setSize(I,q,!1))},this.getSize=function(R){return R.set(I,q)},this.setSize=function(R,Y,ct=!0){if(ht.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,q=Y,i.width=Math.floor(R*mt),i.height=Math.floor(Y*mt),ct===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(I*mt,q*mt).floor()},this.setDrawingBufferSize=function(R,Y,ct){I=R,q=Y,mt=ct,i.width=Math.floor(R*ct),i.height=Math.floor(Y*ct),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(D===Fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,Y,ct,at){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,Y,ct,at),It.viewport(O.copy(nt).multiplyScalar(mt).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,Y,ct,at){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,Y,ct,at),It.scissor(P.copy(xt).multiplyScalar(mt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){It.setScissorTest(wt=R)},this.setOpaqueSort=function(R){Ct=R},this.setTransparentSort=function(R){Wt=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ct=!0){let at=0;if(R){let tt=!1;if(ot!==null){const Bt=ot.texture.format;tt=M.has(Bt)}if(tt){const Bt=ot.texture.type,qt=S.has(Bt),Nt=Pt.getClearColor(),Kt=Pt.getClearAlpha(),re=Nt.r,pe=Nt.g,he=Nt.b;qt?(C[0]=re,C[1]=pe,C[2]=he,C[3]=Kt,V.clearBufferuiv(V.COLOR,0,C)):(L[0]=re,L[1]=pe,L[2]=he,L[3]=Kt,V.clearBufferiv(V.COLOR,0,L))}else at|=V.COLOR_BUFFER_BIT}Y&&(at|=V.DEPTH_BUFFER_BIT),ct&&(at|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&V.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Yt,!1),i.removeEventListener("webglcontextrestored",ie,!1),i.removeEventListener("webglcontextcreationerror",je,!1),Pt.dispose(),oe.dispose(),Tt.dispose(),E.dispose(),$.dispose(),bt.dispose(),Rt.dispose(),zt.dispose(),Ut.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",us),ht.removeEventListener("sessionend",fs),Bi.stop()};function Yt(R){R.preventDefault(),Vm("WebGLRenderer: Context Lost."),dt=!0}function ie(){Vm("WebGLRenderer: Context Restored."),dt=!1;const R=w.autoReset,Y=Vt.enabled,ct=Vt.autoUpdate,at=Vt.needsUpdate,tt=Vt.type;Et(),w.autoReset=R,Vt.enabled=Y,Vt.autoUpdate=ct,Vt.needsUpdate=at,Vt.type=tt}function je(R){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ne(R){const Y=R.target;Y.removeEventListener("dispose",Ne),In(Y)}function In(R){ui(R),E.remove(R)}function ui(R){const Y=E.get(R).programs;Y!==void 0&&(Y.forEach(function(ct){Ut.releaseProgram(ct)}),R.isShaderMaterial&&Ut.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ct,at,tt,Bt){Y===null&&(Y=ze);const qt=tt.isMesh&&tt.matrixWorld.determinant()<0,Nt=Fr(R,Y,ct,at,tt);It.setMaterial(at,qt);let Kt=ct.index,re=1;if(at.wireframe===!0){if(Kt=K.getWireframeAttribute(ct),Kt===void 0)return;re=2}const pe=ct.drawRange,he=ct.attributes.position;let jt=pe.start*re,_e=(pe.start+pe.count)*re;Bt!==null&&(jt=Math.max(jt,Bt.start*re),_e=Math.min(_e,(Bt.start+Bt.count)*re)),Kt!==null?(jt=Math.max(jt,0),_e=Math.min(_e,Kt.count)):he!=null&&(jt=Math.max(jt,0),_e=Math.min(_e,he.count));const sn=_e-jt;if(sn<0||sn===1/0)return;Rt.setup(tt,at,Nt,ct,Kt);let hn,we=me;if(Kt!==null&&(hn=it.get(Kt),we=k,we.setIndex(hn)),tt.isMesh)at.wireframe===!0?(It.setLineWidth(at.wireframeLinewidth*_n()),we.setMode(V.LINES)):we.setMode(V.TRIANGLES);else if(tt.isLine){let Dn=at.linewidth;Dn===void 0&&(Dn=1),It.setLineWidth(Dn*_n()),tt.isLineSegments?we.setMode(V.LINES):tt.isLineLoop?we.setMode(V.LINE_LOOP):we.setMode(V.LINE_STRIP)}else tt.isPoints?we.setMode(V.POINTS):tt.isSprite&&we.setMode(V.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Xc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))we.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Dn=tt._multiDrawStarts,Qt=tt._multiDrawCounts,jn=tt._multiDrawCount,xe=Kt?it.get(Kt).bytesPerElement:1,ii=E.get(at).currentProgram.getUniforms();for(let xi=0;xi<jn;xi++)ii.setValue(V,"_gl_DrawID",xi),we.render(Dn[xi]/xe,Qt[xi])}else if(tt.isInstancedMesh)we.renderInstances(jt,sn,tt.count);else if(ct.isInstancedBufferGeometry){const Dn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Qt=Math.min(ct.instanceCount,Dn);we.renderInstances(jt,sn,Qt)}else we.render(jt,sn)};function ka(R,Y,ct){R.transparent===!0&&R.side===Vn&&R.forceSinglePass===!1?(R.side=_i,R.needsUpdate=!0,Ri(R,Y,ct),R.side=Ws,R.needsUpdate=!0,Ri(R,Y,ct),R.side=Vn):Ri(R,Y,ct)}this.compile=function(R,Y,ct=null){ct===null&&(ct=R),F=Tt.get(ct),F.init(Y),z.push(F),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(F.pushLight(tt),tt.castShadow&&F.pushShadow(tt))}),R!==ct&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(F.pushLight(tt),tt.castShadow&&F.pushShadow(tt))}),F.setupLights();const at=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Bt=tt.material;if(Bt)if(Array.isArray(Bt))for(let qt=0;qt<Bt.length;qt++){const Nt=Bt[qt];ka(Nt,ct,tt),at.add(Nt)}else ka(Bt,ct,tt),at.add(Bt)}),F=z.pop(),at},this.compileAsync=function(R,Y,ct=null){const at=this.compile(R,Y,ct);return new Promise(tt=>{function Bt(){if(at.forEach(function(qt){E.get(qt).currentProgram.isReady()&&at.delete(qt)}),at.size===0){tt(R);return}setTimeout(Bt,10)}Ht.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let cs=null;function Or(R){cs&&cs(R)}function us(){Bi.stop()}function fs(){Bi.start()}const Bi=new XS;Bi.setAnimationLoop(Or),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(R){cs=R,ht.setAnimationLoop(R),R===null?Bi.stop():Bi.start()},ht.addEventListener("sessionstart",us),ht.addEventListener("sessionend",fs),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(dt===!0)return;const ct=ht.enabled===!0&&ht.isPresenting===!0,at=T!==null&&(ot===null||ct)&&T.begin(U,ot);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(Y),Y=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,Y,ot),F=Tt.get(R,z.length),F.init(Y),z.push(F),fn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Zt.setFromProjectionMatrix(fn,Ba,Y.reversedDepth),ce=this.localClippingEnabled,ne=At.init(this.clippingPlanes,ce),N=oe.get(R,B.length),N.init(),B.push(N),ht.enabled===!0&&ht.isPresenting===!0){const qt=U.xr.getDepthSensingMesh();qt!==null&&Xa(qt,Y,-1/0,U.sortObjects)}Xa(R,Y,0,U.sortObjects),N.finish(),U.sortObjects===!0&&N.sort(Ct,Wt),ge=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ge&&Pt.addToRenderList(N,R),this.info.render.frame++,ne===!0&&At.beginShadows();const tt=F.state.shadowsArray;if(Vt.render(tt,R,Y),ne===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&T.hasRenderPass())===!1){const qt=N.opaque,Nt=N.transmissive;if(F.setupLights(),Y.isArrayCamera){const Kt=Y.cameras;if(Nt.length>0)for(let re=0,pe=Kt.length;re<pe;re++){const he=Kt[re];gn(qt,Nt,R,he)}ge&&Pt.render(R);for(let re=0,pe=Kt.length;re<pe;re++){const he=Kt[re];vi(N,R,he,he.viewport)}}else Nt.length>0&&gn(qt,Nt,R,Y),ge&&Pt.render(R),vi(N,R,Y)}ot!==null&&et===0&&(X.updateMultisampleRenderTarget(ot),X.updateRenderTargetMipmap(ot)),at&&T.end(U),R.isScene===!0&&R.onAfterRender(U,R,Y),Rt.resetDefaultState(),lt=-1,Z=null,z.pop(),z.length>0?(F=z[z.length-1],ne===!0&&At.setGlobalState(U.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function Xa(R,Y,ct,at){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Zt.intersectsSprite(R)){at&&Re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fn);const qt=bt.update(R),Nt=R.material;Nt.visible&&N.push(R,qt,Nt,ct,Re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Zt.intersectsObject(R))){const qt=bt.update(R),Nt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Re.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Re.copy(qt.boundingSphere.center)),Re.applyMatrix4(R.matrixWorld).applyMatrix4(fn)),Array.isArray(Nt)){const Kt=qt.groups;for(let re=0,pe=Kt.length;re<pe;re++){const he=Kt[re],jt=Nt[he.materialIndex];jt&&jt.visible&&N.push(R,qt,jt,ct,Re.z,he)}}else Nt.visible&&N.push(R,qt,Nt,ct,Re.z,null)}}const Bt=R.children;for(let qt=0,Nt=Bt.length;qt<Nt;qt++)Xa(Bt[qt],Y,ct,at)}function vi(R,Y,ct,at){const{opaque:tt,transmissive:Bt,transparent:qt}=R;F.setupLightsView(ct),ne===!0&&At.setGlobalState(U.clippingPlanes,ct),at&&It.viewport(O.copy(at)),tt.length>0&&vn(tt,Y,ct),Bt.length>0&&vn(Bt,Y,ct),qt.length>0&&vn(qt,Y,ct),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function gn(R,Y,ct,at){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[at.id]===void 0){const jt=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[at.id]=new Ha(1,1,{generateMipmaps:!0,type:jt?os:Fi,minFilter:ks,samples:Math.max(4,Gt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const Bt=F.state.transmissionRenderTarget[at.id],qt=at.viewport||O;Bt.setSize(qt.z*U.transmissionResolutionScale,qt.w*U.transmissionResolutionScale);const Nt=U.getRenderTarget(),Kt=U.getActiveCubeFace(),re=U.getActiveMipmapLevel();U.setRenderTarget(Bt),U.getClearColor(pt),_t=U.getClearAlpha(),_t<1&&U.setClearColor(16777215,.5),U.clear(),ge&&Pt.render(ct);const pe=U.toneMapping;U.toneMapping=za;const he=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),F.setupLightsView(at),ne===!0&&At.setGlobalState(U.clippingPlanes,at),vn(R,ct,at),X.updateMultisampleRenderTarget(Bt),X.updateRenderTargetMipmap(Bt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let _e=0,sn=Y.length;_e<sn;_e++){const hn=Y[_e],{object:we,geometry:Dn,material:Qt,group:jn}=hn;if(Qt.side===Vn&&we.layers.test(at.layers)){const xe=Qt.side;Qt.side=_i,Qt.needsUpdate=!0,xa(we,ct,at,Dn,Qt,jn),Qt.side=xe,Qt.needsUpdate=!0,jt=!0}}jt===!0&&(X.updateMultisampleRenderTarget(Bt),X.updateRenderTargetMipmap(Bt))}U.setRenderTarget(Nt,Kt,re),U.setClearColor(pt,_t),he!==void 0&&(at.viewport=he),U.toneMapping=pe}function vn(R,Y,ct){const at=Y.isScene===!0?Y.overrideMaterial:null;for(let tt=0,Bt=R.length;tt<Bt;tt++){const qt=R[tt],{object:Nt,geometry:Kt,group:re}=qt;let pe=qt.material;pe.allowOverride===!0&&at!==null&&(pe=at),Nt.layers.test(ct.layers)&&xa(Nt,Y,ct,Kt,pe,re)}}function xa(R,Y,ct,at,tt,Bt){R.onBeforeRender(U,Y,ct,at,tt,Bt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(U,Y,ct,at,R,Bt),tt.transparent===!0&&tt.side===Vn&&tt.forceSinglePass===!1?(tt.side=_i,tt.needsUpdate=!0,U.renderBufferDirect(ct,Y,at,tt,R,Bt),tt.side=Ws,tt.needsUpdate=!0,U.renderBufferDirect(ct,Y,at,tt,R,Bt),tt.side=Vn):U.renderBufferDirect(ct,Y,at,tt,R,Bt),R.onAfterRender(U,Y,ct,at,tt,Bt)}function Ri(R,Y,ct){Y.isScene!==!0&&(Y=ze);const at=E.get(R),tt=F.state.lights,Bt=F.state.shadowsArray,qt=tt.state.version,Nt=Ut.getParameters(R,tt.state,Bt,Y,ct),Kt=Ut.getProgramCacheKey(Nt);let re=at.programs;at.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,at.fog=Y.fog;const pe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;at.envMap=$.get(R.envMap||at.environment,pe),at.envMapRotation=at.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",Ne),re=new Map,at.programs=re);let he=re.get(Kt);if(he!==void 0){if(at.currentProgram===he&&at.lightsStateVersion===qt)return Pr(R,Nt),he}else Nt.uniforms=Ut.getUniforms(R),R.onBeforeCompile(Nt,U),he=Ut.acquireProgram(Nt,Kt),re.set(Kt,he),at.uniforms=Nt.uniforms;const jt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=At.uniform),Pr(R,Nt),at.needsLights=qs(R),at.lightsStateVersion=qt,at.needsLights&&(jt.ambientLightColor.value=tt.state.ambient,jt.lightProbe.value=tt.state.probe,jt.directionalLights.value=tt.state.directional,jt.directionalLightShadows.value=tt.state.directionalShadow,jt.spotLights.value=tt.state.spot,jt.spotLightShadows.value=tt.state.spotShadow,jt.rectAreaLights.value=tt.state.rectArea,jt.ltc_1.value=tt.state.rectAreaLTC1,jt.ltc_2.value=tt.state.rectAreaLTC2,jt.pointLights.value=tt.state.point,jt.pointLightShadows.value=tt.state.pointShadow,jt.hemisphereLights.value=tt.state.hemi,jt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,jt.spotLightMatrix.value=tt.state.spotLightMatrix,jt.spotLightMap.value=tt.state.spotLightMap,jt.pointShadowMatrix.value=tt.state.pointShadowMatrix),at.currentProgram=he,at.uniformsList=null,he}function Ir(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Wf.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Pr(R,Y){const ct=E.get(R);ct.outputColorSpace=Y.outputColorSpace,ct.batching=Y.batching,ct.batchingColor=Y.batchingColor,ct.instancing=Y.instancing,ct.instancingColor=Y.instancingColor,ct.instancingMorph=Y.instancingMorph,ct.skinning=Y.skinning,ct.morphTargets=Y.morphTargets,ct.morphNormals=Y.morphNormals,ct.morphColors=Y.morphColors,ct.morphTargetsCount=Y.morphTargetsCount,ct.numClippingPlanes=Y.numClippingPlanes,ct.numIntersection=Y.numClipIntersection,ct.vertexAlphas=Y.vertexAlphas,ct.vertexTangents=Y.vertexTangents,ct.toneMapping=Y.toneMapping}function Fr(R,Y,ct,at,tt){Y.isScene!==!0&&(Y=ze),X.resetTextureUnits();const Bt=Y.fog,qt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Y.environment:null,Nt=ot===null?U.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:xo,Kt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,re=$.get(at.envMap||qt,Kt),pe=at.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,he=!!ct.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),jt=!!ct.morphAttributes.position,_e=!!ct.morphAttributes.normal,sn=!!ct.morphAttributes.color;let hn=za;at.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(hn=U.toneMapping);const we=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Dn=we!==void 0?we.length:0,Qt=E.get(at),jn=F.state.lights;if(ne===!0&&(ce===!0||R!==Z)){const bn=R===Z&&at.id===lt;At.setState(at,R,bn)}let xe=!1;at.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==jn.state.version||Qt.outputColorSpace!==Nt||tt.isBatchedMesh&&Qt.batching===!1||!tt.isBatchedMesh&&Qt.batching===!0||tt.isBatchedMesh&&Qt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Qt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Qt.instancing===!1||!tt.isInstancedMesh&&Qt.instancing===!0||tt.isSkinnedMesh&&Qt.skinning===!1||!tt.isSkinnedMesh&&Qt.skinning===!0||tt.isInstancedMesh&&Qt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Qt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Qt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Qt.instancingMorph===!1&&tt.morphTexture!==null||Qt.envMap!==re||at.fog===!0&&Qt.fog!==Bt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==At.numPlanes||Qt.numIntersection!==At.numIntersection)||Qt.vertexAlphas!==pe||Qt.vertexTangents!==he||Qt.morphTargets!==jt||Qt.morphNormals!==_e||Qt.morphColors!==sn||Qt.toneMapping!==hn||Qt.morphTargetsCount!==Dn)&&(xe=!0):(xe=!0,Qt.__version=at.version);let ii=Qt.currentProgram;xe===!0&&(ii=Ri(at,Y,tt));let xi=!1,zi=!1,Si=!1;const We=ii.getUniforms(),En=Qt.uniforms;if(It.useProgram(ii.program)&&(xi=!0,zi=!0,Si=!0),at.id!==lt&&(lt=at.id,zi=!0),xi||Z!==R){It.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),We.setValue(V,"projectionMatrix",R.projectionMatrix),We.setValue(V,"viewMatrix",R.matrixWorldInverse);const Ci=We.map.cameraPosition;Ci!==void 0&&Ci.setValue(V,Ce.setFromMatrixPosition(R.matrixWorld)),Gt.logarithmicDepthBuffer&&We.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&We.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,zi=!0,Si=!0)}if(Qt.needsLights&&(jn.state.directionalShadowMap.length>0&&We.setValue(V,"directionalShadowMap",jn.state.directionalShadowMap,X),jn.state.spotShadowMap.length>0&&We.setValue(V,"spotShadowMap",jn.state.spotShadowMap,X),jn.state.pointShadowMap.length>0&&We.setValue(V,"pointShadowMap",jn.state.pointShadowMap,X)),tt.isSkinnedMesh){We.setOptional(V,tt,"bindMatrix"),We.setOptional(V,tt,"bindMatrixInverse");const bn=tt.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),We.setValue(V,"boneTexture",bn.boneTexture,X))}tt.isBatchedMesh&&(We.setOptional(V,tt,"batchingTexture"),We.setValue(V,"batchingTexture",tt._matricesTexture,X),We.setOptional(V,tt,"batchingIdTexture"),We.setValue(V,"batchingIdTexture",tt._indirectTexture,X),We.setOptional(V,tt,"batchingColorTexture"),tt._colorsTexture!==null&&We.setValue(V,"batchingColorTexture",tt._colorsTexture,X));const Rn=ct.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Ft.update(tt,ct,ii),(zi||Qt.receiveShadow!==tt.receiveShadow)&&(Qt.receiveShadow=tt.receiveShadow,We.setValue(V,"receiveShadow",tt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Y.environment!==null&&(En.envMapIntensity.value=Y.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=p2()),zi&&(We.setValue(V,"toneMappingExposure",U.toneMappingExposure),Qt.needsLights&&Wa(En,Si),Bt&&at.fog===!0&&te.refreshFogUniforms(En,Bt),te.refreshMaterialUniforms(En,at,mt,q,F.state.transmissionRenderTarget[R.id]),Wf.upload(V,Ir(Qt),En,X)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Wf.upload(V,Ir(Qt),En,X),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&We.setValue(V,"center",tt.center),We.setValue(V,"modelViewMatrix",tt.modelViewMatrix),We.setValue(V,"normalMatrix",tt.normalMatrix),We.setValue(V,"modelMatrix",tt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const bn=at.uniformsGroups;for(let Ci=0,Pn=bn.length;Ci<Pn;Ci++){const Zn=bn[Ci];zt.update(Zn,ii),zt.bind(Zn,ii)}}return ii}function Wa(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function qs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(R,Y,ct){const at=E.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Y,E.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ct,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ct=E.get(R);ct.__webglFramebuffer=Y,ct.__useDefaultFramebuffer=Y===void 0};const Sa=V.createFramebuffer();this.setRenderTarget=function(R,Y=0,ct=0){ot=R,G=Y,et=ct;let at=null,tt=!1,Bt=!1;if(R){const Nt=E.get(R);if(Nt.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(V.FRAMEBUFFER,Nt.__webglFramebuffer),O.copy(R.viewport),P.copy(R.scissor),J=R.scissorTest,It.viewport(O),It.scissor(P),It.setScissorTest(J),lt=-1;return}else if(Nt.__webglFramebuffer===void 0)X.setupRenderTarget(R);else if(Nt.__hasExternalTextures)X.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const pe=R.depthTexture;if(Nt.__boundDepthTexture!==pe){if(pe!==null&&E.has(pe)&&(R.width!==pe.image.width||R.height!==pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Bt=!0);const re=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[Y])?at=re[Y][ct]:at=re[Y],tt=!0):R.samples>0&&X.useMultisampledRTT(R)===!1?at=E.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?at=re[ct]:at=re,O.copy(R.viewport),P.copy(R.scissor),J=R.scissorTest}else O.copy(nt).multiplyScalar(mt).floor(),P.copy(xt).multiplyScalar(mt).floor(),J=wt;if(ct!==0&&(at=Sa),It.bindFramebuffer(V.FRAMEBUFFER,at)&&It.drawBuffers(R,at),It.viewport(O),It.scissor(P),It.setScissorTest(J),tt){const Nt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,ct)}else if(Bt){const Nt=Y;for(let Kt=0;Kt<R.textures.length;Kt++){const re=E.get(R.textures[Kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Kt,re.__webglTexture,ct,Nt)}}else if(R!==null&&ct!==0){const Nt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,ct)}lt=-1},this.readRenderTargetPixels=function(R,Y,ct,at,tt,Bt,qt,Nt=0){if(!(R&&R.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){It.bindFramebuffer(V.FRAMEBUFFER,Kt);try{const re=R.textures[Nt],pe=re.format,he=re.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Nt),!Gt.textureFormatReadable(pe)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(he)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-at&&ct>=0&&ct<=R.height-tt&&V.readPixels(Y,ct,at,tt,Dt.convert(pe),Dt.convert(he),Bt)}finally{const re=ot!==null?E.get(ot).__webglFramebuffer:null;It.bindFramebuffer(V.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ct,at,tt,Bt,qt,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt)if(Y>=0&&Y<=R.width-at&&ct>=0&&ct<=R.height-tt){It.bindFramebuffer(V.FRAMEBUFFER,Kt);const re=R.textures[Nt],pe=re.format,he=re.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Nt),!Gt.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,jt),V.bufferData(V.PIXEL_PACK_BUFFER,Bt.byteLength,V.STREAM_READ),V.readPixels(Y,ct,at,tt,Dt.convert(pe),Dt.convert(he),0);const _e=ot!==null?E.get(ot).__webglFramebuffer:null;It.bindFramebuffer(V.FRAMEBUFFER,_e);const sn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await OM(V,sn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,jt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Bt),V.deleteBuffer(jt),V.deleteSync(sn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ct=0){const at=Math.pow(2,-ct),tt=Math.floor(R.image.width*at),Bt=Math.floor(R.image.height*at),qt=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;X.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,qt,Nt,tt,Bt),It.unbindTexture()};const ya=V.createFramebuffer(),Ma=V.createFramebuffer();this.copyTextureToTexture=function(R,Y,ct=null,at=null,tt=0,Bt=0){let qt,Nt,Kt,re,pe,he,jt,_e,sn;const hn=R.isCompressedTexture?R.mipmaps[Bt]:R.image;if(ct!==null)qt=ct.max.x-ct.min.x,Nt=ct.max.y-ct.min.y,Kt=ct.isBox3?ct.max.z-ct.min.z:1,re=ct.min.x,pe=ct.min.y,he=ct.isBox3?ct.min.z:0;else{const En=Math.pow(2,-tt);qt=Math.floor(hn.width*En),Nt=Math.floor(hn.height*En),R.isDataArrayTexture?Kt=hn.depth:R.isData3DTexture?Kt=Math.floor(hn.depth*En):Kt=1,re=0,pe=0,he=0}at!==null?(jt=at.x,_e=at.y,sn=at.z):(jt=0,_e=0,sn=0);const we=Dt.convert(Y.format),Dn=Dt.convert(Y.type);let Qt;Y.isData3DTexture?(X.setTexture3D(Y,0),Qt=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(X.setTexture2DArray(Y,0),Qt=V.TEXTURE_2D_ARRAY):(X.setTexture2D(Y,0),Qt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const jn=V.getParameter(V.UNPACK_ROW_LENGTH),xe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ii=V.getParameter(V.UNPACK_SKIP_PIXELS),xi=V.getParameter(V.UNPACK_SKIP_ROWS),zi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,hn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,hn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,re),V.pixelStorei(V.UNPACK_SKIP_ROWS,pe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,he);const Si=R.isDataArrayTexture||R.isData3DTexture,We=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const En=E.get(R),Rn=E.get(Y),bn=E.get(En.__renderTarget),Ci=E.get(Rn.__renderTarget);It.bindFramebuffer(V.READ_FRAMEBUFFER,bn.__webglFramebuffer),It.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Pn=0;Pn<Kt;Pn++)Si&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,tt,he+Pn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Bt,sn+Pn)),V.blitFramebuffer(re,pe,qt,Nt,jt,_e,qt,Nt,V.DEPTH_BUFFER_BIT,V.NEAREST);It.bindFramebuffer(V.READ_FRAMEBUFFER,null),It.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||E.has(R)){const En=E.get(R),Rn=E.get(Y);It.bindFramebuffer(V.READ_FRAMEBUFFER,ya),It.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ma);for(let bn=0;bn<Kt;bn++)Si?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,En.__webglTexture,tt,he+bn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,En.__webglTexture,tt),We?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rn.__webglTexture,Bt,sn+bn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rn.__webglTexture,Bt),tt!==0?V.blitFramebuffer(re,pe,qt,Nt,jt,_e,qt,Nt,V.COLOR_BUFFER_BIT,V.NEAREST):We?V.copyTexSubImage3D(Qt,Bt,jt,_e,sn+bn,re,pe,qt,Nt):V.copyTexSubImage2D(Qt,Bt,jt,_e,re,pe,qt,Nt);It.bindFramebuffer(V.READ_FRAMEBUFFER,null),It.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else We?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Qt,Bt,jt,_e,sn,qt,Nt,Kt,we,Dn,hn.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Qt,Bt,jt,_e,sn,qt,Nt,Kt,we,hn.data):V.texSubImage3D(Qt,Bt,jt,_e,sn,qt,Nt,Kt,we,Dn,hn):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Bt,jt,_e,qt,Nt,we,Dn,hn.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Bt,jt,_e,hn.width,hn.height,we,hn.data):V.texSubImage2D(V.TEXTURE_2D,Bt,jt,_e,qt,Nt,we,Dn,hn);V.pixelStorei(V.UNPACK_ROW_LENGTH,jn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ii),V.pixelStorei(V.UNPACK_SKIP_ROWS,xi),V.pixelStorei(V.UNPACK_SKIP_IMAGES,zi),Bt===0&&Y.generateMipmaps&&V.generateMipmap(Qt),It.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&X.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?X.setTextureCube(R,0):R.isData3DTexture?X.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?X.setTexture2DArray(R,0):X.setTexture2D(R,0),It.unbindTexture()},this.resetState=function(){G=0,et=0,ot=null,It.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ve._getUnpackColorSpace()}}const m2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Bh,AddEquation:Cr,AddOperation:hS,AdditiveBlending:Pm,AgXToneMapping:e0,AlphaFormat:l0,AlwaysCompare:yS,AlwaysDepth:Zf,AlwaysStencilFunc:zm,AmbientLight:zS,ArrayCamera:GS,BackSide:_i,BasicDepthPacking:pS,BasicShadowMap:Wx,Box3:Ur,BoxGeometry:Lr,BufferAttribute:va,BufferGeometry:$i,ByteType:a0,Camera:y0,CanvasTexture:Ml,CatmullRomCurve3:NS,CineonToneMapping:$m,ClampToEdgeWrapping:ss,Clock:kS,Color:fe,ColorManagement:Ve,ConstantAlphaFactor:cS,ConstantColorFactor:oS,CubeCamera:HS,CubeDepthTexture:wS,CubeReflectionMapping:Nr,CubeRefractionMapping:_o,CubeTexture:_0,CubeUVReflectionMapping:qc,CullFaceBack:Im,CullFaceFront:Xx,CullFaceNone:kx,Curve:DS,CustomBlending:qx,CustomToneMapping:t0,Data3DTexture:AS,DataArrayTexture:f0,DataTexture:g0,DepthFormat:ls,DepthStencilFormat:wr,DepthTexture:wl,DirectionalLight:Xm,DoubleSide:Vn,DstAlphaFactor:nS,DstColorFactor:aS,EqualCompare:vS,EqualDepth:Qf,EquirectangularReflectionMapping:Hf,EquirectangularRefractionMapping:Gf,Euler:Ji,EventDispatcher:So,ExternalTexture:v0,Float32BufferAttribute:ni,FloatType:ga,Fog:Wc,FrontSide:Ws,Frustum:Qh,GLSL3:Gm,GreaterCompare:xS,GreaterDepth:$f,GreaterEqualCompare:jh,GreaterEqualDepth:Jf,Group:yl,HalfFloatType:os,HemisphereLight:BS,ImageUtils:bS,InstancedBufferAttribute:km,InstancedMesh:CS,IntType:zh,KeepStencilOp:uo,Layers:Kh,LessCompare:_S,LessDepth:Kf,LessEqualCompare:qh,LessEqualDepth:go,Light:Ll,LinearFilter:ei,LinearMipmapLinearFilter:ks,LinearMipmapNearestFilter:Vf,LinearSRGBColorSpace:xo,LinearToneMapping:Qm,LinearTransfer:kc,Material:yo,MathUtils:Tn,Matrix3:be,Matrix4:un,MaxEquation:Qx,Mesh:He,MeshBasicMaterial:Yc,MeshDepthMaterial:PS,MeshDistanceMaterial:FS,MeshLambertMaterial:IS,MeshPhysicalMaterial:fo,MeshStandardMaterial:Vs,MinEquation:Kx,MirroredRepeatWrapping:eh,MixOperation:fS,MultiplyBlending:Bm,MultiplyOperation:Fh,NearestFilter:ti,NearestMipmapLinearFilter:Oc,NearestMipmapNearestFilter:dS,NeutralToneMapping:n0,NeverCompare:gS,NeverDepth:jf,NoBlending:rs,NoColorSpace:Gs,NoToneMapping:za,NormalBlending:mo,NotEqualCompare:SS,NotEqualDepth:th,Object3D:mn,ObjectSpaceNormalMap:mS,OneFactor:$x,OneMinusConstantAlphaFactor:uS,OneMinusConstantColorFactor:lS,OneMinusDstAlphaFactor:iS,OneMinusDstColorFactor:sS,OneMinusSrcAlphaFactor:qf,OneMinusSrcColorFactor:eS,OrthographicCamera:td,PCFShadowMap:po,PCFSoftShadowMap:Yx,PMREMGenerator:Ih,PerspectiveCamera:Ai,Plane:Rr,PlaneGeometry:as,PointLight:Vc,Quaternion:Ys,R11_EAC_Format:ch,RED_GREEN_RGTC2_Format:Uh,RED_RGTC1_Format:Dh,REVISION:Ph,RG11_EAC_Format:fh,RGBAFormat:_a,RGBAIntegerFormat:Wh,RGBA_ASTC_10x10_Format:bh,RGBA_ASTC_10x5_Format:yh,RGBA_ASTC_10x6_Format:Mh,RGBA_ASTC_10x8_Format:Eh,RGBA_ASTC_12x10_Format:Th,RGBA_ASTC_12x12_Format:Ah,RGBA_ASTC_4x4_Format:dh,RGBA_ASTC_5x4_Format:ph,RGBA_ASTC_5x5_Format:mh,RGBA_ASTC_6x5_Format:gh,RGBA_ASTC_6x6_Format:_h,RGBA_ASTC_8x5_Format:vh,RGBA_ASTC_8x6_Format:xh,RGBA_ASTC_8x8_Format:Sh,RGBA_BPTC_Format:Rh,RGBA_ETC2_EAC_Format:lh,RGBA_PVRTC_2BPPV1_Format:sh,RGBA_PVRTC_4BPPV1_Format:ah,RGBA_S3TC_DXT1_Format:Fc,RGBA_S3TC_DXT3_Format:Bc,RGBA_S3TC_DXT5_Format:zc,RGBFormat:c0,RGB_BPTC_SIGNED_Format:Ch,RGB_BPTC_UNSIGNED_Format:wh,RGB_ETC1_Format:rh,RGB_ETC2_Format:oh,RGB_PVRTC_2BPPV1_Format:ih,RGB_PVRTC_4BPPV1_Format:nh,RGB_S3TC_DXT1_Format:Pc,RGFormat:vo,RGIntegerFormat:Xh,RawShaderMaterial:OS,Ray:m0,Raycaster:VS,RedFormat:Vh,RedIntegerFormat:kh,ReinhardToneMapping:Jm,RenderTarget:TS,RepeatWrapping:bl,ReverseSubtractEquation:Zx,RingGeometry:Jh,SIGNED_R11_EAC_Format:uh,SIGNED_RED_GREEN_RGTC2_Format:Lh,SIGNED_RED_RGTC1_Format:Nh,SIGNED_RG11_EAC_Format:hh,SRGBColorSpace:Wn,SRGBTransfer:$e,Scene:h0,ShaderChunk:Ae,ShaderLib:Fa,ShaderMaterial:Va,ShortType:s0,Source:Zh,Sphere:Ul,SphereGeometry:$h,SpotLight:Xf,SrcAlphaFactor:Yf,SrcAlphaSaturateFactor:rS,SrcColorFactor:tS,StaticDrawUsage:Hm,SubtractEquation:jx,SubtractiveBlending:Fm,TangentSpaceNormalMap:Yh,Texture:ci,Triangle:ma,UVMapping:i0,Uint16BufferAttribute:d0,Uint32BufferAttribute:p0,UniformsLib:Xt,UniformsUtils:LS,UnsignedByteType:Fi,UnsignedInt101111Type:o0,UnsignedInt248Type:Al,UnsignedInt5999Type:r0,UnsignedIntType:Ga,UnsignedShort4444Type:Hh,UnsignedShort5551Type:Gh,UnsignedShortType:Tl,VSMShadowMap:Sl,Vector2:Ue,Vector3:j,Vector4:An,WebGLCoordinateSystem:Ba,WebGLCubeRenderTarget:M0,WebGLRenderTarget:Ha,WebGLRenderer:KS,WebGLUtils:ZS,WebGPUCoordinateSystem:Rl,WebXRController:kf,ZeroFactor:Jx,createCanvasElement:MS,error:Ge,log:Vm,warn:ve,warnOnce:Xc},Symbol.toStringTag,{value:"Module"}));class g2 extends h0{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Lr;t.deleteAttribute("uv");const i=new Vs({side:_i}),s=new Vs,l=new Vc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new He(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new CS(t,s,6),d=new mn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),f.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),f.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),f.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),f.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),f.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),f.setMatrixAt(5,d.matrix),this.add(f);const m=new He(t,_l(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new He(t,_l(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new He(t,_l(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new He(t,_l(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new He(t,_l(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new He(t,_l(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function _l(r){return new IS({color:0,emissive:16777215,emissiveIntensity:r})}const _2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],v2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],x2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],S2=["LOW","MEDIUM","HIGH","EXTREME"],y2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],M2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],E2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},b2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},T2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},A2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},R2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function QS(r){return(r-90)*Math.PI/180}function C2(r,t,i,s){const l=QS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function vl(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function JS(r){vl("subject",r.subject,_2),vl("domain",r.domain,v2),vl("verb",r.verb,x2),vl("magnitude",r.magnitude,S2),vl("time",r.time,y2),vl("certainty",r.certainty,M2)}function w2(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=R2[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return JS(s),s}function D2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),d=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(d,m):r.lineTo(d,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,d=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,d):r.lineTo(f,d)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Nc(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,d=Math.sqrt(c*c+f*f)||1,m=c/d,p=f/d,_=-p,v=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+v*(l*.58)},y={x:i.x-m*l-_*(l*.58),y:i.y-p*l-v*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(y.x,y.y),r.closePath(),r.fill(),r.restore()}function Uc(r,t,i,s,l,c){const f=A2[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let d=1;d<=f;d+=1){const m=d/(f+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const v=1-m;p=v*v*i.x+2*v*m*c.x+m*m*s.x,_=v*v*i.y+2*v*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function N2(r,t,i){JS(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,d=l*.5,m=i?.backgroundColor,p=i?.lineColor,_=i?.gridColor;r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,d,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(f,d,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,d,c*.12,0,Math.PI*2),r.stroke();const v=E2[t.domain],g=b2[t.time]*c,y=T2[t.magnitude]*c,b=C2(f,d,g,v),D=QS(v),M=Math.cos(D),S=Math.sin(D),C=-S,L=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let N={x:b.x,y:b.y},F={x:b.x+M*y,y:b.y+S*y},B;if(t.verb==="EXISTS")N={x:b.x-C*(y*.48),y:b.y-L*(y*.48)},F={x:b.x+C*(y*.48),y:b.y+L*(y*.48)},r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(F.x,F.y),r.stroke(),Uc(r,t,N,F,p);else if(t.verb==="DECLINES")F={x:b.x-M*y,y:b.y-S*y},r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(F.x,F.y),r.stroke(),Nc(r,N,F,p,7),Uc(r,t,N,F,p);else if(t.verb==="TRANSFORMS")B={x:b.x+C*(y*.34)+M*(y*.34),y:b.y+L*(y*.34)+S*(y*.34)},r.beginPath(),r.moveTo(N.x,N.y),r.quadraticCurveTo(B.x,B.y,F.x,F.y),r.stroke(),Nc(r,B,F,p,7),Uc(r,t,N,F,p,B);else if(t.verb==="INFLUENCES"){const T={x:b.x+C*3.4,y:b.y+L*3.4},U={x:F.x+C*3.4,y:F.y+L*3.4},dt={x:b.x-C*3.4,y:b.y-L*3.4},G={x:F.x-C*3.4,y:F.y-L*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(U.x,U.y),r.moveTo(dt.x,dt.y),r.lineTo(G.x,G.y),r.stroke(),Nc(r,T,U,p,6.6),Nc(r,dt,G,p,6.6),Uc(r,t,T,U,p)}else r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(F.x,F.y),r.stroke(),Nc(r,N,F,p,7),Uc(r,t,N,F,p);r.fillStyle=p,r.beginPath(),r.arc(f,d,5,0,Math.PI*2),r.fill(),D2(r,t.subject,b,p)}function U2(r,t,i){const s=w2(t);N2(r,s,i)}const Ix="intelligenspartiet:language",L2={nb:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Videoer",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideBack:"Tilbake",outsideVideosTitle:"Videoer",outsideSignaturesTitle:"Signaturer",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Videos",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideBack:"Back",outsideVideosTitle:"Videos",outsideSignaturesTitle:"Signatures",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},O2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},Cm=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:O2}),Of=[Cm("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),Cm("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),Cm("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],I2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim().toUpperCase(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),Pa=r=>{let t=r%1;return t<0&&(t+=1),t},P2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),Pa(r+l*(1-Math.exp(-i*s)))},Px=12,wm=9,Dm=.12,Fx=-1,Nm=2.4,F2=.3,B2=1.2,z2=.3,Bx=6741503,H2=5,G2=3.2,V2=.35,k2=.25,zx=400,X2=2.5,Hx=16755251,If=3,W2=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],Um=[{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1770978482749-c088b297-1ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770978437489-d0299c39-WelhavenTheater.png"},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],E0=17.6,$S=E0*(16/9),ty=$S*Math.sqrt(3)/2,Y2=.56,q2=31.2,Pf=ty*2.62,Gx=E0*.56,j2=60,Z2=40,K2=220,Q2=360,J2=105,$2=.75,Vx=96,jm=[330,250,180,120],tR=[2,3.2,4.8,6.2],eR=[.12,.17,.22,.3],Ff={tailPath:"",taperPaths:jm.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},Lm=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],d=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${d} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},nR=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),iR=(r,t,i,s,l,c)=>{ey(r,t,l).forEach((d,m)=>{r.fillText(d,i,s+m*c)})},ey=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const d=s[f];if(!d)continue;const m=`${c}${d} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${d} `):c=m}return c.trim()&&l.push(c.trim()),l},aR=/\(\s*bold\s*\)/gi,sR=/\(\s*new\s*line\s*\)/gi,rR=/\(\s*new\s*paragraph\s*\)/gi,oR=r=>{const i=r.replace(/\r\n?/g,`
`).replace(rR,`

`).replace(sR,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const d=/\(\s*bold\s*\)/i.test(c),m=c.replace(aR,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:d,paragraphBreak:s}),s=!1}),l},lR=(r,t,i,s,l,c,f,d,m=.6)=>{const p=oR(t);let _=s;p.forEach((v,g)=>{g>0&&v.paragraphBreak&&(_+=c*m),r.font=v.bold?d:f,ey(r,v.text,l).forEach(b=>{r.fillText(b,i,_),_+=c})}),r.font=f},cR=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,ny=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),uR=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),fR=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],hR=new Map(fR.map(([r,t])=>[ny(r),t])),dR=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],pR=dR.map(([r,t])=>[new RegExp(uR(r),"gi"),t]),mR={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},gR=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),_R=r=>{let t=r;return pR.forEach(([i,s])=>{t=t.replace(i,s)}),t},vR=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=mR[t.toLowerCase()];return i?gR(t,i):t}),xR=r=>{const t=r.trim();return t?(hR.get(ny(t))??vR(_R(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},SR=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(cR,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>xR(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},Bf=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},Zm=Math.PI*2,co=r=>Math.min(1,Math.max(0,r)),Lc=(r,t,i,s,l)=>{const c=Zm*(r*i+s),f=Zm*(t*i+l),d=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return d+m},zf=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Ml(s)},pa=(r,t,i,s,l=!1)=>{r.wrapS=bl,r.wrapT=bl,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=ks,r.magFilter=ei,l&&(r.colorSpace=Wn),r.needsUpdate=!0},Om=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:d,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:v,seamDepth:g,seamWidth:y,roughnessBase:b,roughnessRange:D,normalStrength:M,aoStrength:S}=r,C=t*i,L=new fe(l),N=new Float32Array(C);let F=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY;for(let lt=0;lt<i;lt+=1)for(let Z=0;Z<t;Z+=1){const O=lt*t+Z,P=Z/t,J=lt/i,pt=Lc(P,J,c,s*.11,s*.23),_t=Lc(P,J,f,s*.41+.18,s*.29+.07),I=Lc(P,J,d,s*.71+.43,s*.53+.31),q=Math.sin(Zm*((P+J*.33)*m+s*.17));let mt=0;if(_!=="none"&&v>0){const nt=(_==="x"?P:J)*v%1,xt=Math.min(nt,1-nt);mt=Math.exp(-Math.pow(xt/Math.max(1e-4,y),2))}const Ct=pt*.6+_t*.28+I*.12+q*p-mt*g;N[O]=Ct,Ct<F&&(F=Ct),Ct>B&&(B=Ct)}const z=new Float32Array(C),T=Math.max(1e-4,B-F),U=new Uint8ClampedArray(C*4),dt=new Uint8ClampedArray(C*4),G=new Uint8ClampedArray(C*4);for(let lt=0;lt<i;lt+=1)for(let Z=0;Z<t;Z+=1){const O=lt*t+Z,P=O*4,J=Z/t,pt=lt/i,_t=co((N[O]-F)/T);z[O]=_t;const I=Lc(J,pt,f*.6,s*.19+.62,s*.73+.14)*.5+.5,q=co(.78+(_t-.5)*.24+(I-.5)*.12),mt=Lc(J,pt,c*.5,s*.37+.89,s*.13+.44),Ct=1+mt*.017,Wt=1+mt*.007,nt=1-mt*.013,xt=co(b+(1-_t)*D+(I-.5)*.14),wt=co(.94-(1-_t)*S);U[P]=Math.round(co(L.r*q*Ct)*255),U[P+1]=Math.round(co(L.g*q*Wt)*255),U[P+2]=Math.round(co(L.b*q*nt)*255),U[P+3]=255;const Zt=Math.round(xt*255);dt[P]=Zt,dt[P+1]=Zt,dt[P+2]=Zt,dt[P+3]=255;const ne=Math.round(wt*255);G[P]=ne,G[P+1]=ne,G[P+2]=ne,G[P+3]=255}const et=(lt,Z)=>{const O=(lt+t)%t,P=(Z+i)%i;return z[P*t+O]},ot=new Uint8ClampedArray(C*4);for(let lt=0;lt<i;lt+=1)for(let Z=0;Z<t;Z+=1){const P=(lt*t+Z)*4,J=et(Z+1,lt)-et(Z-1,lt),pt=et(Z,lt+1)-et(Z,lt-1),_t=-J*M,I=-pt*M,q=1,mt=1/Math.hypot(_t,I,q);ot[P]=Math.round((_t*mt*.5+.5)*255),ot[P+1]=Math.round((I*mt*.5+.5)*255),ot[P+2]=Math.round((q*mt*.5+.5)*255),ot[P+3]=255}return{albedo:zf(U,t,i),normal:zf(ot,t,i),roughness:zf(dt,t,i),ao:zf(G,t,i)}},yR=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const d=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=d*255,c/=d*255,f/=d*255;const m=l*.2126+c*.7152+f*.0722;return{color:new fe(l,c,f),luminance:m}};function MR(){const r=le.useRef([]),t=le.useRef(null),[i,s]=le.useState(!1),[l,c]=le.useState({width:1,height:1}),[f,d]=le.useState(Ff);return le.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),_=window.matchMedia("(pointer: coarse)"),v=()=>{s(!m.matches&&p.matches&&!_.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},y=()=>{v()},b=(C,L)=>typeof C.addEventListener=="function"?(C.addEventListener("change",L),()=>C.removeEventListener("change",L)):(C.addListener(L),()=>C.removeListener(L));v(),g();const D=b(m,y),M=b(p,y),S=b(_,y);return window.addEventListener("resize",g,{passive:!0}),()=>{D(),M(),S(),window.removeEventListener("resize",g)}},[]),le.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],d(Ff);return}const m=_=>{if(_.pointerType!=="mouse"&&_.pointerType!=="pen")return;const v={x:_.clientX,y:_.clientY,t:performance.now()},g=r.current,y=g[g.length-1];if(y){const b=v.x-y.x,D=v.y-y.y;if(Math.hypot(b,D)<$2)return}g.push(v),g.length>Vx&&g.splice(0,g.length-Vx)},p=()=>{const _=performance.now(),v=_-Q2,g=r.current;let y=0;for(;y<g.length&&g[y].t<v;)y+=1;if(y>0&&g.splice(0,y),g.length<2)d(b=>b.visible?Ff:b);else{const b=Lm(g),D=jm.map(F=>{const B=_-F;let z=g.length-1;for(;z>0&&g[z-1].t>=B;)z-=1;const T=g.slice(z);return Lm(T.length>=2?T:g.slice(-2))}),M=_-J2;let S=g.length-1;for(;S>0&&g[S-1].t>=M;)S-=1;let C=g.slice(S);C.length<2&&(C=g.slice(-2));const L=Lm(C),N=C[C.length-1]??g[g.length-1];d(F=>F.visible&&F.tailPath===b&&F.taperPaths.every((B,z)=>B===D[z])&&F.headPath===L&&F.headX===N.x&&F.headY===N.y?F:{tailPath:b,taperPaths:D,headPath:L,headX:N.x,headY:N.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],d(Ff)}},[i]),i?Lt.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[Lt.jsxs("defs",{children:[Lt.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Lt.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),Lt.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),Lt.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[Lt.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),Lt.jsxs("feMerge",{children:[Lt.jsx("feMergeNode",{in:"blur"}),Lt.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?Lt.jsxs(Lt.Fragment,{children:[Lt.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?Lt.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:eR[p],strokeWidth:tR[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${jm[p]}`):null),Lt.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),Lt.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function ER(){const r=le.useRef(null),t=le.useRef([]),i=le.useRef(Dm),s=le.useRef(Dm),l=le.useRef([]),c=le.useRef(null);le.useEffect(()=>{const vt=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=vt,document.documentElement.style.overscrollBehavior=""}},[]);const[f,d]=le.useState(Of),[m,p]=le.useState([]),[_,v]=le.useState(Of[0].id),[g,y]=le.useState(!0),[b,D]=le.useState(!1),[M,S]=le.useState(!1),[C,L]=le.useState("menu"),[N,F]=le.useState([]),[B,z]=le.useState(!1),[T,U]=le.useState(""),[dt,G]=le.useState(0),[et,ot]=le.useState(""),[lt,Z]=le.useState(""),[O,P]=le.useState(""),[J,pt]=le.useState(()=>{if(typeof window>"u")return"nb";try{const vt=window.localStorage.getItem(Ix);if(vt==="nb"||vt==="en")return vt}catch{}return"nb"});le.useEffect(()=>{try{window.localStorage.setItem(Ix,J)}catch{}},[J]);const _t=L2[J],I=le.useMemo(()=>vt=>J==="nb"?SR(vt):vt,[J]),q=le.useCallback(()=>{c.current?.()},[]),mt=le.useCallback(vt=>{vt.preventDefault();const Ht=et.trim(),Gt=lt.trim(),It=O.trim();if(!Ht||!Gt||!It)return;const w=J==="nb"?"Kontakt fra Signaturer":"Contact from Signatures",E=[`${J==="nb"?"Navn":"Name"}: ${Ht}`,`${J==="nb"?"E-post":"Email"}: ${Gt}`,"",`${J==="nb"?"Melding":"Message"}:`,It].join(`
`),X=`mailto:lars@larscuzner.com?subject=${encodeURIComponent(w)}&body=${encodeURIComponent(E)}`;window.location.href=X},[J,lt,O,et]),Ct=le.useRef(0),Wt=le.useRef(0),nt=le.useRef(null),xt=le.useCallback(vt=>{const Ht=vt>=0?1:-1;G(Gt=>{const It=Um.length;return(Gt+Ht+It)%It})},[]),wt=le.useCallback(vt=>{vt.preventDefault();const Ht=Math.abs(vt.deltaX)>Math.abs(vt.deltaY)?vt.deltaX:vt.deltaY;Ct.current+=Ht;const Gt=performance.now();Gt-Wt.current<K2||Math.abs(Ct.current)<Z2||(xt(Ct.current>0?1:-1),Ct.current=0,Wt.current=Gt)},[xt]),Zt=le.useCallback(vt=>{nt.current=vt.touches[0]?.clientX??null},[]),ne=le.useCallback(vt=>{const Ht=nt.current,Gt=vt.changedTouches[0]?.clientX??null;if(nt.current=null,Ht===null||Gt===null)return;const It=Gt-Ht;Math.abs(It)<28||xt(It<0?1:-1)},[xt]);le.useEffect(()=>{M||L("menu")},[M]),le.useEffect(()=>{C==="videos"&&(Ct.current=0,Wt.current=0)},[C]),le.useEffect(()=>{if(!M||C!=="videos")return;let vt=!1;const Ht=()=>{vt||l.current.forEach(It=>{if(!It||!It.paused&&It.readyState>=2)return;const w=It.play();w&&typeof w.catch=="function"&&w.catch(()=>{})})};Ht();const Gt=window.setInterval(Ht,900);return()=>{vt=!0,window.clearInterval(Gt)}},[M,C]),le.useEffect(()=>{if(!M||C!=="news")return;let vt=!1;const Ht=w=>({title:String(w?.title??"").trim(),source:String(w?.source??"").trim(),url:String(w?.url??"").trim(),snippet:String(w?.snippet??"").trim(),published_at:String(w?.published_at??"").trim(),published:w?.published!==!1}),Gt=w=>{const E=Date.parse(w);return Number.isFinite(E)?E:0};return(async()=>{z(!0),U("");for(const w of W2)try{const E=await fetch(w,{cache:"no-store"});if(!E.ok)continue;const X=await E.json();if(!Array.isArray(X?.items))continue;const $=X.items.map(Ht).filter(it=>it.published&&it.title&&it.url).sort((it,K)=>Gt(K.published_at)-Gt(it.published_at));if(vt)return;F($),z(!1);return}catch{}vt||(F([]),U(_t.outsideNewsError),z(!1))})(),()=>{vt=!0}},[M,C,_t.outsideNewsError]),le.useEffect(()=>{let vt=!1;return(async()=>{try{const Gt=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),It=Gt.headers.get("content-type")??"";if(!Gt.ok)throw new Error(`HTTP ${Gt.status} while loading glyph language map`);if(!It.toLowerCase().includes("application/json")){const X=await Gt.text();throw new Error(`Expected JSON but got '${It||"unknown"}' (${X.slice(0,120)})`)}const w=await Gt.json();if(!Array.isArray(w?.items))throw new Error("Glyph language payload missing 'items' array");const E=w.items.map((X,$)=>I2(X,$)).filter(X=>X.enabled!==!1);if(vt)return;p(E)}catch(Gt){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",Gt),vt)return;p([])}})(),()=>{vt=!0}},[]);const ce=le.useMemo(()=>m.filter(vt=>vt.enabled!==!1&&typeof vt.canonical=="string"&&vt.canonical.trim().length>0),[m]),fn=le.useMemo(()=>{const vt=new Map;if(!f.length||!ce.length)return vt;const Ht=w=>{const E=Pa(w);return Pa(Dm-E)},Gt=[...f].sort((w,E)=>{const X=typeof w.installation?.placement_t=="number"?w.installation.placement_t:0,$=typeof E.installation?.placement_t=="number"?E.installation.placement_t:0,it=Ht(X),K=Ht($);return it===K?w.id.localeCompare(E.id):it-K}),It=Math.min(Gt.length,ce.length);for(let w=0;w<It;w+=1)vt.set(Gt[w].id,ce[w]);return vt},[f,ce]),Ce=le.useMemo(()=>{const vt=new Map;return fn.forEach((Ht,Gt)=>{Ht.canonical&&vt.set(Gt,Ht.canonical)}),vt},[fn]),Re=le.useMemo(()=>{const vt=new Map;return fn.forEach((Ht,Gt)=>{vt.set(Gt,{label:Ht.label||"",note:Ht.note||"",labelNb:Ht.label_nb||"",noteNb:Ht.note_nb||""})}),vt},[fn]);le.useEffect(()=>{let vt=!1;return(async()=>{y(!0),D(!1);try{const Gt=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),It=Gt.headers.get("content-type")??"";if(!Gt.ok)throw new Error(`HTTP ${Gt.status} while loading panel data`);if(!It.toLowerCase().includes("application/json")){const K=await Gt.text();throw new Error(`Expected JSON but got '${It||"unknown"}' (${K.slice(0,120)})`)}const w=await Gt.json();if(!Array.isArray(w?.panels))throw new Error("Panel payload missing 'panels' array");const E=typeof w.media_root=="string"?w.media_root.replace(/\/+$/,""):"",X=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",$=K=>/^https?:\/\//i.test(K)&&X?`/proxy?url=${encodeURIComponent(K)}`:K,it=w.panels.map(K=>{const bt=typeof K?.source=="string"?K.source.replace(/^\/+/,""):"",Ut=bt?E?`${E}/${bt}`:`/${bt}`:void 0,te=Ut?$(Ut):void 0,oe=typeof K?.poster=="string"?K.poster.replace(/^\/+/,""):"",Tt=oe?E?`${E}/${oe}`:`/${oe}`:void 0,At=Tt?$(Tt):void 0,Vt=K?.type==="image"||K?.type==="video"?K.type:"text",Pt=K?.content??{},Ft=String(Pt?.title??"Untitled").trim()||"Untitled",me=String(Pt?.description??"").trim(),k=String(Pt?.title_nb??Pt?.title_no??"").trim(),Dt=String(Pt?.description_nb??Pt?.description_no??"").trim(),Rt=String(Pt?.title_en??"").trim(),zt=String(Pt?.description_en??"").trim();return{...K,kind:Vt,type:Vt,title:Ft,body:me,title_nb:k||Ft,body_nb:Dt||me,title_en:Rt,body_en:zt,cta:Pt?.cta,poster:At,image:Vt==="image"?te:void 0,video:Vt==="video"?te:void 0}});if(it.length===0)throw new Error("Panel payload contained 0 panels");if(vt)return;d(it),v(it[0].id)}catch(Gt){if(console.error("Failed to load panels; using fallback data.",Gt),vt)return;d(Of),v(Of[0].id),D(!0)}finally{vt||y(!1)}})(),()=>{vt=!0}},[]);const ze=le.useMemo(()=>f.find(vt=>vt.id===_)??f[0]??{title:"",body:""},[_,f]),ge=le.useMemo(()=>vt=>{const Ht=Re.get(vt.id);if(J==="nb"){const w=Bf(Ht?.labelNb,vt.title_nb,I(Ht?.label||""),I(vt.title||"")),E=Bf(Ht?.noteNb,vt.body_nb,I(Ht?.note||""),I(vt.body||""));return{title:w||"Mangler norsk tittel",body:E||"Mangler norsk tekst."}}const Gt=Bf(Ht?.label,vt.title_en),It=Bf(Ht?.note,vt.body_en);return{title:Gt||"Missing English title",body:It||"Missing English text."}},[Re,J,I]),_n=le.useMemo(()=>ge(ze).title,[ze,ge]),V=le.useMemo(()=>new Intl.DateTimeFormat(J==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[J]);return le.useEffect(()=>{if(f.length===0)return;const vt=r.current;if(!vt)return;c.current=null,S(!1);let Ht=!1,Gt=()=>{};return(()=>{if(Ht||!vt)return;t.current=[];const w=window.matchMedia("(prefers-reduced-motion: reduce)"),E=window.matchMedia("(max-width: 767px)"),X=w.matches,$=E.matches,it=new h0;it.background=new fe(987671),it.fog=new Wc(987671,38,230);const K=new Ai($?72:64,vt.clientWidth/vt.clientHeight,.1,1200),bt=new KS({antialias:!$,alpha:!1,powerPreference:"high-performance"});bt.setPixelRatio(Math.min(window.devicePixelRatio,$?1:1.5)),bt.setSize(vt.clientWidth,vt.clientHeight),bt.outputColorSpace=Wn,bt.toneMapping=Bh,bt.toneMappingExposure=$?.76:.72,bt.shadowMap.enabled=!$,bt.shadowMap.type=po,vt.appendChild(bt.domElement);let Ut=!1;const te=Mt=>{Ut!==Mt&&(Ut=Mt,bt.shadowMap.type=Mt?Wx:po,bt.shadowMap.needsUpdate=!0)},oe=new Ih(bt),Tt=oe.fromScene(new g2,.06);it.environment=Tt.texture;const At=new zS(16185599,.05);it.add(At);const Vt=new BS(14739442,1777446,.08);it.add(Vt);const Pt=nR(m2),Ft=new NS(Pt,!0,"catmullrom",.17),me=$?180:300,k=Math.min(8,bt.capabilities.getMaxAnisotropy()),Dt=$?256:512,Rt=Om({width:Dt,height:Dt,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});pa(Rt.albedo,4.8,24,k,!0),pa(Rt.normal,4.8,24,k),pa(Rt.roughness,4.8,24,k),pa(Rt.ao,4.8,24,k);const zt=Om({width:Dt,height:Dt,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});pa(zt.albedo,2.2,24,k,!0),pa(zt.normal,2.2,24,k),pa(zt.roughness,2.2,24,k),pa(zt.ao,2.2,24,k);const Et=Om({width:Dt,height:Dt,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});pa(Et.albedo,3.4,24,k,!0),pa(Et.normal,3.4,24,k),pa(Et.roughness,3.4,24,k),pa(Et.ao,3.4,24,k);const ht=new fo({color:9607586,map:Rt.albedo,normalMap:Rt.normal,normalScale:new Ue(.32,.32),roughnessMap:Rt.roughness,roughness:.38,metalness:0,aoMap:Rt.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:Vn}),Yt=new fo({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:Vn}),ie=new fo({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new fe(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:Vn}),je=()=>{const Mt=[],ee=new j(0,1,0);let ae=new j(1,0,0);for(let Ot=0;Ot<=me;Ot+=1){const Un=Ot/me,Ni=Ft.getPointAt(Un),ea=Un===1?Ni.clone().sub(Ft.getPointAt(Un-.001)).normalize():Ft.getPointAt(Un+.001).sub(Ni).normalize();let Kn=new j().crossVectors(ea,ee).normalize();Kn.lengthSq()<1e-4&&(Kn=ae.clone()),Kn.dot(ae)<0&&Kn.multiplyScalar(-1),ae=Kn.clone();const na=new j().crossVectors(Kn,ea).normalize();Mt.push({pt:Ni,right:Kn,up:na,t:Un})}const Jt=(Ot,Un,Ni=!1)=>{const ea=[],Kn=[],na=[];for(let Mi=0;Mi<=me;Mi+=1){const ai=Mt[Mi],Vi=Ot(ai),Me=Un(ai);ea.push(Vi.x,Vi.y,Vi.z,Me.x,Me.y,Me.z),Kn.push(0,ai.t,1,ai.t)}for(let Mi=0;Mi<me;Mi+=1){const ai=Mi*2,Vi=ai+1,Me=ai+2,tn=ai+3;Ni?na.push(ai,Me,Vi,Me,tn,Vi):na.push(ai,Vi,Me,Me,Vi,tn)}const ia=new $i;ia.setAttribute("position",new ni(ea,3));const Ra=new ni(Kn,2);return ia.setAttribute("uv",Ra),ia.setAttribute("uv2",Ra.clone()),ia.setIndex(na),ia.computeVertexNormals(),ia},kt=Px*.5,Se=wm*.5,ke=Jt(Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(-Se)).add(Ot.right.clone().multiplyScalar(-kt)),Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(-Se)).add(Ot.right.clone().multiplyScalar(kt))),Qe=Jt(Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se)).add(Ot.right.clone().multiplyScalar(-kt)),Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se)).add(Ot.right.clone().multiplyScalar(kt)),!0),Je=Jt(Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(-Se)).add(Ot.right.clone().multiplyScalar(-kt)),Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se)).add(Ot.right.clone().multiplyScalar(-kt)),!0),fi=Jt(Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(-Se)).add(Ot.right.clone().multiplyScalar(kt)),Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se)).add(Ot.right.clone().multiplyScalar(kt))),hi=.08,dn=.015,Fe=Jt(Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se-hi)).add(Ot.right.clone().multiplyScalar(-kt+dn)),Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se)).add(Ot.right.clone().multiplyScalar(-kt+dn)),!0),rn=Jt(Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se-hi)).add(Ot.right.clone().multiplyScalar(kt-dn)),Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se)).add(Ot.right.clone().multiplyScalar(kt-dn)),!1),Ze=.22,xn=.018,Gi=Jt(Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(-Se)).add(Ot.right.clone().multiplyScalar(-kt+xn)),Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(-Se+Ze)).add(Ot.right.clone().multiplyScalar(-kt+xn)),!0),Aa=Jt(Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(-Se)).add(Ot.right.clone().multiplyScalar(kt-xn)),Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(-Se+Ze)).add(Ot.right.clone().multiplyScalar(kt-xn)),!1),Di=.14,Za=Jt(Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se-.05)).add(Ot.right.clone().multiplyScalar(-Di)),Ot=>Ot.pt.clone().add(Ot.up.clone().multiplyScalar(Se-.05)).add(Ot.right.clone().multiplyScalar(Di)),!0);return{floorGeo:ke,ceilGeo:Qe,leftGeo:Je,rightGeo:fi,leftSkirtGeo:Gi,rightSkirtGeo:Aa,trackRailGeo:Za,leftCrownGeo:Fe,rightCrownGeo:rn}},{floorGeo:Ne,ceilGeo:In,leftGeo:ui,rightGeo:ka,leftSkirtGeo:cs,rightSkirtGeo:Or,trackRailGeo:us,leftCrownGeo:fs,rightCrownGeo:Bi}=je(),Xa=new He(Ne,ht),vi=new He(In,ie),gn=new He(ui,Yt),vn=new He(ka,Yt),xa=new fo({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),Ri=new Vs({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:Vn}),Ir=new He(cs,Ri),Pr=new He(Or,Ri);Ir.receiveShadow=!0,Pr.receiveShadow=!0;const Fr=new He(fs,Ri),Wa=new He(Bi,Ri);Fr.receiveShadow=!1,Wa.receiveShadow=!1;const qs=new fo({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:Vn}),Sa=new He(us,qs);Sa.receiveShadow=!1,Xa.receiveShadow=!0,Xa.castShadow=!0,vi.receiveShadow=!0,vi.castShadow=!0,gn&&(gn.receiveShadow=!0,gn.castShadow=!0),vn&&(vn.receiveShadow=!0,vn.castShadow=!0),it.add(Xa),it.add(vi),gn&&it.add(gn),vn&&it.add(vn),it.add(Ir),it.add(Pr),it.add(Fr),it.add(Wa),it.add(Sa);const ya=new j(0,1,0),Ma=new mn,R=new mn,Y=new mn;it.add(Ma),it.add(R),it.add(Y);const ct=new Xf(16773598,$?16:24,34,Math.PI/8.4,.44,2);ct.target=Ma,ct.castShadow=!$,ct.castShadow&&(ct.shadow.mapSize.width=2048,ct.shadow.mapSize.height=2048,ct.shadow.bias=-35e-5,ct.shadow.normalBias=.012,ct.shadow.camera.near=.4,ct.shadow.camera.far=34),it.add(ct);const at=new Xf(12571903,$?6:9,34,Math.PI/6.5,.68,2);at.target=R,at.castShadow=!1,it.add(at);const tt=new Xf(14083583,$?5:7,28,Math.PI/7.8,.6,2);tt.target=Y,tt.castShadow=!1,it.add(tt);const Bt=new mn,qt=new mn;it.add(Bt),it.add(qt);const Nt=new Xm(16774374,0);if(Nt.target=Bt,Nt.castShadow=!$,Nt.castShadow){Nt.shadow.mapSize.width=4096,Nt.shadow.mapSize.height=4096,Nt.shadow.bias=-8e-5,Nt.shadow.normalBias=.0012,Nt.shadow.radius=0;const Mt=$?250:220;Nt.shadow.camera.left=-Mt,Nt.shadow.camera.right=Mt,Nt.shadow.camera.top=Mt,Nt.shadow.camera.bottom=-Mt,Nt.shadow.camera.near=25,Nt.shadow.camera.far=980}it.add(Nt);const Kt=new Xm(9090280,0);Kt.target=qt,it.add(Kt),Ne.computeBoundingBox(),Ne.computeBoundingSphere(),In.computeBoundingBox(),In.computeBoundingSphere(),ui.computeBoundingBox(),ui.computeBoundingSphere(),ka.computeBoundingBox(),ka.computeBoundingSphere();const pe=f.some(Mt=>Mt.installation?.mount_type==="continuous_led_wall"||Mt.installation?.mount_type==="jutting_half_wall")?f:$?f.filter((Mt,ee)=>ee%2===0):f,he=[],jt=[],_e=[],sn=[],hn=[],we=[],Dn=[],Qt=Mt=>{if(!Mt.paused&&Mt.currentTime>0)return;const ee=Mt.play();ee&&typeof ee.catch=="function"&&ee.catch(()=>{})},jn=setInterval(()=>{let Mt=!0;we.forEach(ee=>{(ee.paused||ee.readyState<2)&&(Mt=!1,Qt(ee))}),Mt&&we.length>0&&clearInterval(jn)},500);hn.push(()=>clearInterval(jn));const xe=new Lr(1,1,.2),ii=new as(.82,.82),xi=new fo({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),zi=(Mt,ee)=>{const Jt=document.createElement("canvas");Jt.width=512,Jt.height=512;const kt=Jt.getContext("2d");kt.clearRect(0,0,512,512);const Se=Ce.get(ee);if(Se)try{U2(kt,Se,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const rn=new Ml(Jt);return rn.colorSpace=Wn,rn}catch(rn){console.warn(`Invalid glyph canonical sentence for panel '${ee}': '${Se}'. Falling back to procedural glyph.`,rn)}const ke=512/2,Qe=512/2,Je=Mt*137.508;kt.fillStyle="rgba(6,14,24,0.7)",kt.beginPath(),kt.arc(ke,Qe,512*.42,0,Math.PI*2),kt.fill(),kt.strokeStyle="rgba(102,221,255,0.95)",kt.lineWidth=2.5,kt.lineCap="round",kt.beginPath(),kt.arc(ke,Qe,512*.38,0,Math.PI*2),kt.stroke();const fi=3+Mt%4;for(let rn=0;rn<fi;rn++){const Ze=rn/fi*Math.PI*2+Je,xn=512*.08,Gi=512*.32;kt.beginPath(),kt.moveTo(ke+Math.cos(Ze)*xn,Qe+Math.sin(Ze)*xn),kt.lineTo(ke+Math.cos(Ze)*Gi,Qe+Math.sin(Ze)*Gi),kt.stroke()}const hi=2+Mt%3;for(let rn=0;rn<hi;rn++){const Ze=512*(.15+rn*.09),xn=Je+rn*1.2;kt.beginPath(),kt.arc(ke,Qe,Ze,xn,xn+Math.PI*(.4+Mt%3*.2)),kt.stroke()}kt.fillStyle="rgba(102,221,255,0.85)";const dn=3+Mt%5;for(let rn=0;rn<dn;rn++){const Ze=Je+rn/dn*Math.PI*2,xn=512*(.2+rn%3*.06);kt.beginPath(),kt.arc(ke+Math.cos(Ze)*xn,Qe+Math.sin(Ze)*xn,4,0,Math.PI*2),kt.fill()}kt.strokeStyle="rgba(102,221,255,0.5)",kt.lineWidth=1.5,kt.beginPath(),kt.arc(ke,Qe,512*.12,0,Math.PI*2),kt.stroke(),kt.fillStyle="rgba(102,221,255,0.95)",kt.beginPath(),kt.arc(ke,Qe,6,0,Math.PI*2),kt.fill();const Fe=new Ml(Jt);return Fe.colorSpace=Wn,Fe},Si=(Mt,ee)=>{const ae=document.createElement("canvas");ae.width=1024,ae.height=640;const Jt=ae.getContext("2d");Jt.fillStyle="rgba(8,12,18,0.88)",Jt.beginPath(),Jt.roundRect(16,16,992,608,24),Jt.fill(),Jt.strokeStyle="rgba(102,221,255,0.25)",Jt.lineWidth=2,Jt.beginPath(),Jt.roundRect(16,16,992,608,24),Jt.stroke(),Jt.fillStyle="rgba(102,221,255,0.95)",Jt.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",iR(Jt,Mt.toUpperCase(),60,100,900,58),Jt.strokeStyle="rgba(102,221,255,0.3)",Jt.lineWidth=2,Jt.beginPath(),Jt.moveTo(60,180),Jt.lineTo(960,180),Jt.stroke(),Jt.fillStyle="rgba(220,230,240,0.9)";const kt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",Se="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";Jt.font=kt,lR(Jt,ee,60,230,900,42,kt,Se);const ke=new Ml(ae);return ke.colorSpace=Wn,ke},We=()=>{const ee=document.createElement("canvas");ee.width=512,ee.height=512;const ae=ee.getContext("2d"),Jt=512/2,kt=512/2;ae.beginPath(),ae.arc(Jt,kt,512*.42,0,Math.PI*2),ae.fillStyle="rgba(6,14,24,0.7)",ae.fill(),ae.strokeStyle="rgba(255,170,51,0.9)",ae.lineWidth=6,ae.beginPath(),ae.arc(Jt,kt,512*.38,0,Math.PI*2),ae.stroke();const Se=8;for(let Qe=0;Qe<Se;Qe++){const Je=Qe/Se*Math.PI*2-Math.PI/2;ae.strokeStyle=`rgba(255,${170+Math.round(Math.sin(Qe)*40)},51,0.8)`,ae.lineWidth=4,ae.beginPath(),ae.moveTo(Jt+Math.cos(Je)*512*.12,kt+Math.sin(Je)*512*.12),ae.lineTo(Jt+Math.cos(Je)*512*.34,kt+Math.sin(Je)*512*.34),ae.stroke();const fi=Jt+Math.cos(Je)*512*.34,hi=kt+Math.sin(Je)*512*.34,dn=512*.06;ae.beginPath(),ae.moveTo(fi,hi),ae.lineTo(fi-dn*Math.cos(Je-.4),hi-dn*Math.sin(Je-.4)),ae.moveTo(fi,hi),ae.lineTo(fi-dn*Math.cos(Je+.4),hi-dn*Math.sin(Je+.4)),ae.stroke()}ae.beginPath(),ae.arc(Jt,kt,512*.06,0,Math.PI*2),ae.fillStyle="rgba(255,200,80,0.95)",ae.fill();const ke=new Ml(ee);return ke.colorSpace=Wn,ke},En=Mt=>{const ee=Pa(Mt),ae=Ft.getPointAt(ee),kt=Ft.getPointAt(Pa(ee+.002)).clone().sub(ae).normalize();let Se=new j().crossVectors(kt,ya).normalize();Se.lengthSq()<1e-4&&(Se=new j(1,0,0));const ke=new j().crossVectors(Se,kt).normalize();return{point:ae,tangent:kt,right:Se,up:ke}};Ft.getLength();const Rn=[],bn=new as(Nm*2,Nm*2),Ci=new as(H2,G2);pe.forEach((Mt,ee)=>{const ae=Mt.installation,Jt=Pa(ae?.placement_t??.05+ee/pe.length),{point:kt,right:Se,up:ke}=En(Jt),Qe=ae?.side==="left",hi=(ae?.side==="center"?0:Qe?-1:1)*Px*.12,dn=kt.clone().add(Se.clone().multiplyScalar(hi)).add(ke.clone().multiplyScalar(.5)),Fe=zi(ee,Mt.id);jt.push(Fe);const rn=new Vs({color:16777215,emissive:new fe(Bx),emissiveIntensity:1.2,map:Fe,emissiveMap:Fe,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});_e.push(rn);const Ze=new He(bn,rn);Ze.position.copy(dn),Ze.userData={panel:Mt,isGlyph:!0},he.push(Ze),it.add(Ze);const xn=ge(Mt),Gi=xn.title,Aa=xn.body,Di=Si(Gi,Aa);jt.push(Di);const Za=new Vs({color:16777215,emissive:new fe(1122867),emissiveIntensity:.3,map:Di,transparent:!0,opacity:0,side:Vn,depthWrite:!0});_e.push(Za);const Ot=new He(Ci,Za),Un=new yl;Un.add(Ot),Un.position.copy(dn),Un.scale.setScalar(.01),Un.visible=!1,it.add(Un);const Ni=new Vc(Bx,$?6:12,20,1.5);Ni.position.copy(dn),it.add(Ni),Rn.push({mesh:Ze,card:Un,panel:Mt,progress:Jt,baseY:dn.y,expanded:!1,expandT:0}),t.current.push({meta:Mt,progress:Jt})});let Pn=!1,Zn=0,wi=0,hs=0,Ea=0,yi=0,ds=!1,ps=!1,Ya=0,qa=0;const Mo=new j,Eo=new j,kn=new j,ms=32;for(let Mt=0;Mt<ms;Mt++)kn.add(Ft.getPointAt(Mt/ms));kn.divideScalar(ms);const ba=()=>{const ee=K.position.clone().clone().sub(kn).normalize();Mo.copy(kn).add(ee.multiplyScalar(zx)),Mo.y=kn.y+zx*.35,Eo.copy(kn)},Il=()=>{Rn.forEach(Mt=>{Mt.expanded=!1})},js=Mt=>{Pn!==Mt&&(Pn=Mt,ds=!1,ps=!1,S(Mt),Mt&&(ba(),Il()))},Hi=()=>{js(!Pn)};c.current=Hi;const Pl=new as(If*2,If*2),Zs=We();jt.push(Zs);const bo=new Vs({color:16777215,emissive:new fe(Hx),emissiveIntensity:1.4,map:Zs,emissiveMap:Zs,transparent:!0,alphaTest:.05,side:Vn,depthWrite:!1});_e.push(bo);const{point:Br,up:zr}=En(k2),Hr=Br.clone().add(zr.clone().multiplyScalar(1)),Nn=new He(Pl,bo);Nn.position.copy(Hr),Nn.userData={isExitGlyph:!0},it.add(Nn);const gs=new as(If*5,If*5),To=new Yc({visible:!1,side:Vn}),ta=new He(gs,To);ta.position.copy(Hr),ta.userData={isExitGlyph:!0},he.push(ta),it.add(ta);const jc=new Vc(Hx,$?6:12,20,1.5);jc.position.copy(Hr),it.add(jc);const Ao=new $h($?1.25:1.6,26,26);sn.push(Ao);const Gr=new Vs({color:16764788,emissive:new fe(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});_e.push(Gr);const _s=Br.clone().add(zr.clone().multiplyScalar(wm*.52+.32)),Ta=new He(Ao,Gr);Ta.position.copy(_s),Ta.userData={isReentryDot:!0},he.push(Ta),it.add(Ta);const Fl=new Jh($?1.75:2.2,$?2.35:2.95,52);sn.push(Fl);const Bl=new Yc({color:16761948,transparent:!0,opacity:0,side:Vn,depthWrite:!1});_e.push(Bl);const Vr=new He(Fl,Bl);Vr.position.copy(_s),it.add(Vr);const zl=new Vc(16761948,0,$?34:44,2);zl.position.copy(_s),it.add(zl);const Ro=new VS,Hl=new Ue,Zc=Mt=>{we.forEach(Qt);const ee=bt.domElement.getBoundingClientRect();Hl.x=(Mt.clientX-ee.left)/ee.width*2-1,Hl.y=-((Mt.clientY-ee.top)/ee.height)*2+1,Ya=Mt.clientX,qa=Mt.clientY,Ro.setFromCamera(Hl,K);const ae=Ro.intersectObjects(he,!1);if(Pn){if(ae.length>0){const Jt=ae[0].object;if(Jt.userData.isReentryDot){js(!1);return}if(Jt.userData.isExitGlyph){Hi();return}}ds=!0,ps=Mt.shiftKey||Mt.altKey||Mt.button===2;return}if(ae.length>0){const Jt=ae[0].object;if(Jt.userData.isExitGlyph){Hi();return}const kt=Jt.userData.panel;if(kt){const Se=Rn.find(ke=>ke.panel.id===kt.id);Se&&(Se.expanded?Se.expanded=!1:(Rn.forEach(ke=>{ke.expanded=!1}),Se.expanded=!0))}}else Rn.forEach(Jt=>{Jt.expanded=!1})};bt.domElement.addEventListener("pointerdown",Zc);const Ks={x:0,y:0},ja={x:0,y:0},Kc=Mt=>{const ee=bt.domElement.getBoundingClientRect(),ae=(Mt.clientX-ee.left)/ee.width,Jt=(Mt.clientY-ee.top)/ee.height;if(Ks.x=(ae-.5)*2,Ks.y=(Jt-.5)*2,Pn&&ds){const kt=Mt.clientX-Ya,Se=Mt.clientY-qa;Ya=Mt.clientX,qa=Mt.clientY,ps?Ea=Tn.clamp(Ea+kt*.0038,-Math.PI*.48,Math.PI*.48):(wi+=kt*.0046,hs=Tn.clamp(hs+Se*.0035,-.88,.88));return}},Gl=()=>{Ks.x=0,Ks.y=0,ds=!1,ps=!1},Co=()=>{ds=!1,ps=!1},Qc=Mt=>{Pn&&Mt.preventDefault()};bt.domElement.addEventListener("pointermove",Kc,{passive:!0}),bt.domElement.addEventListener("pointerleave",Gl,{passive:!0}),bt.domElement.addEventListener("pointerup",Co,{passive:!0}),bt.domElement.addEventListener("pointercancel",Co,{passive:!0}),bt.domElement.addEventListener("contextmenu",Qc);const Jc=Mt=>{if(Mt.preventDefault(),Pn){wi+=Mt.deltaY*.0017,yi=Tn.clamp(yi+Mt.deltaY*.22,-165,230);return}we.forEach(Qt),i.current=Pa(i.current+Fx*Mt.deltaY*75e-6)};bt.domElement.addEventListener("wheel",Jc,{passive:!1});const $c=Mt=>{(Mt.key==="o"||Mt.key==="O")&&Hi()};window.addEventListener("keydown",$c);let vs=0;const tu=Mt=>{we.forEach(Qt),vs=Mt.touches[0]?.clientY??0},eu=Mt=>{Mt.preventDefault();const ee=Mt.touches[0]?.clientY??vs,ae=vs-ee;if(Pn){wi+=ae*.0021,yi=Tn.clamp(yi+ae*.13,-165,230),vs=ee;return}i.current=Pa(i.current+Fx*ae*11e-5),vs=ee};bt.domElement.addEventListener("touchstart",tu,{passive:!0}),bt.domElement.addEventListener("touchmove",eu,{passive:!1});const nu=()=>{vt&&(K.aspect=vt.clientWidth/vt.clientHeight,K.updateProjectionMatrix(),bt.setSize(vt.clientWidth,vt.clientHeight))};window.addEventListener("resize",nu);const wo=new mn,iu=new kS,Vl=new j,au=new j,su=new j;let ru=f.length>0?f[0].id:"";const ou=()=>{if(Ht)return;const Mt=iu.getDelta(),ee=iu.getElapsedTime();s.current=P2(s.current,i.current,X?2.8:4.8,Mt),ja.x+=(Ks.x-ja.x)*.07,ja.y+=(Ks.y-ja.y)*.07;const ae=s.current,Jt=Pa(ae+($?.008:.01)),kt=Ft.getPointAt(ae),Se=Ft.getPointAt(Jt),ke=Ft.getPointAt(Pa(ae+.002)).sub(Ft.getPointAt(Pa(ae-.002))).normalize();let Qe=new j().crossVectors(ke,ya).normalize();Qe.lengthSq()<1e-4&&(Qe=new j(1,0,0));const Je=new j().crossVectors(Qe,ke).normalize(),fi=Qe.clone().multiplyScalar(ja.x*($?0:.62)).add(Je.clone().multiplyScalar(ja.y*($?0:.42))),hi=X?new j:Je.clone().multiplyScalar(Math.sin(ee*.45)*.12),dn=1/X2;Pn&&Zn<1?Zn=Math.min(1,Zn+dn*Mt):!Pn&&Zn>0&&(Zn=Math.max(0,Zn-dn*Mt));const Fe=Zn<.5?4*Zn*Zn*Zn:1-Math.pow(-2*Zn+2,3)/2,rn=Tn.smoothstep(Fe,.18,1),Ze=ja.x*($?0:15.4)*rn,xn=ja.y*($?0:9.2)*rn;Bt.position.copy(kn).add(new j(Math.sin(wi)*6.8+Ze*.2,hs*2.4+xn*.18,Math.cos(wi)*3.6-Ze*.13)),qt.position.copy(kn).add(new j(-Math.sin(wi)*3.2,hs*.9,Math.cos(wi)*2.1)),Nt.position.set(kn.x+700+Ze*2.8+Math.sin(wi)*52,kn.y+290+xn*1.35+hs*28,kn.z-130-Ze*1.3+Math.cos(wi)*30),Kt.position.set(kn.x-470-Ze*.82-Math.sin(wi)*16,kn.y+35+xn*.22+hs*10,kn.z+360+Ze*.6-Math.cos(wi)*12);const Gi=Mo.clone().sub(kn).applyQuaternion(new Ys().setFromEuler(new Ji(hs,wi,0,"YXZ"))),Aa=Tn.clamp(Gi.length()+yi,260,860);Gi.setLength(Aa);const Di=kn.clone().add(Gi).add(new j(Ze,xn*.84,Ze*.58)),Za=Eo.clone().add(new j(Ze*.11,xn*.095,Ze*.085)),Ot=new Ys;if(Fe>.01){te(Fe>.26),it.fog instanceof Wc&&(it.fog.near=Tn.lerp(38,9999,Fe),it.fog.far=Tn.lerp(230,1e4,Fe));const Me=new fe(987671),tn=new fe(132106);it.background.copy(Me).lerp(tn,Fe),At.intensity=Tn.lerp(.05,.002,Fe),Vt.intensity=Tn.lerp(.08,.007,Fe),Nt.intensity=Tn.lerp(0,$?4.6:8.6,Fe),Kt.intensity=Tn.lerp(0,$?.02:.03,Fe),bt.toneMappingExposure=Tn.lerp($?.76:.72,$?.75:.76,Fe),[ht,Yt].forEach(en=>{en.emissive.set(3359829),en.emissiveIntensity=0}),ht.envMapIntensity=Tn.lerp(.74,.04,Fe),Yt.envMapIntensity=Tn.lerp(.08,.01,Fe),ie.color.set(0).lerp(new fe(16777215),Fe),ie.toneMapped=Fe>.5,ie.fog=Fe>.5,ie.emissive.set(16777215),ie.emissiveIntensity=Tn.lerp(1,.02,Fe),ie.envMapIntensity=Tn.lerp(0,.03,Fe)}else te(!1),At.intensity=.05,Vt.intensity=.08,Nt.intensity=0,Kt.intensity=0,bt.toneMappingExposure=$?.76:.72,it.background.set(987671),[ht,Yt].forEach(Me=>{Me.emissive.set(0),Me.emissiveIntensity=0}),ht.envMapIntensity=.74,Yt.envMapIntensity=.08,ie.color.set(0),ie.toneMapped=!1,ie.fog=!1,ie.emissive.set(16777215),ie.emissiveIntensity=1,ie.envMapIntensity=0;const Un=Je.clone().multiplyScalar(-wm*.2),Ni=kt.clone().add(Un).add(fi).add(hi),ea=Se.clone().add(Un).add(fi.multiplyScalar(.22));if(Fe>.99){if(K.position.copy(Di),K.lookAt(Za),Math.abs(Ea)>1e-4){const Me=Za.clone().sub(K.position).normalize();Ot.setFromAxisAngle(Me,Ea),K.quaternion.multiply(Ot)}}else if(Fe>.001){K.position.lerpVectors(Ni,Di,Fe);const Me=ea.clone().lerp(Za,Fe);if(K.lookAt(Me),Math.abs(Ea)>1e-4){const tn=Me.clone().sub(K.position).normalize();Ot.setFromAxisAngle(tn,Ea*Fe),K.quaternion.multiply(Ot)}}else K.position.copy(Ni),wo.position.copy(K.position),wo.lookAt(ea),K.quaternion.slerp(wo.quaternion,1-Math.exp(-8.1*Mt));const Kn=.94+Math.sin(ee*.23)*.06,na=Se.clone().add(Un);ct.position.copy(K.position).add(Je.clone().multiplyScalar(2.9)).add(Qe.clone().multiplyScalar(2.1)).add(ke.clone().multiplyScalar(-2.2)),Ma.position.copy(na).add(Qe.clone().multiplyScalar(2.5)).add(Je.clone().multiplyScalar(-.9)),ct.intensity=($?14:21)*Kn,at.position.copy(K.position).add(Je.clone().multiplyScalar(2)).add(Qe.clone().multiplyScalar(-2.4)).add(ke.clone().multiplyScalar(-1.1)),R.position.copy(na).add(Qe.clone().multiplyScalar(-2)).add(Je.clone().multiplyScalar(-1.4)),at.intensity=($?5:8)*Kn,tt.position.copy(K.position).add(Je.clone().multiplyScalar(1.4)).add(ke.clone().multiplyScalar(2.8)).add(Qe.clone().multiplyScalar(.6)),Y.position.copy(na).add(Je.clone().multiplyScalar(-.8)),tt.intensity=($?4:6.2)*Kn,he.forEach(Me=>{const tn=Me.userData;if(!tn||!tn.shading||!tn.material)return;const en=tn.shading,Qn=tn.material,ki=tn.video,Xe=tn;let Ka=1;en.lighting?.flicker_sync&&ki&&ki.readyState>=3&&(Ka=.88+Math.sin(ee*22)*.1*Math.sin(ee*6.7));let Qs=1;if(en.movement_reaction?.type==="viewing_angle_fade"){Vl.set(0,0,0),Me.getWorldPosition(Vl),au.set(0,0,1).applyQuaternion(Me.quaternion),su.copy(K.position).sub(Vl).normalize();const aa=au,di=su,xs=Math.max(0,aa.dot(di)),Ss=en.movement_reaction.cone_angle_degrees===60?3:1.5;Qs=Math.pow(xs,Ss)}const Qa=tn.baseEmissive*Ka*Qs;if(Qn.emissiveIntensity=Qa,Xe.bounceLights&&Xe.bounceLights.length>0){const aa=Xe.bounceSampleCtx,di=Xe.bounceSampleCanvas;if(ki&&aa&&di&&(Xe.bounceNextSampleAt??0)<=ee){const Ca=yR(ki,di,aa);if(Ca){Xe.bounceTargetColor||(Xe.bounceTargetColor=Ca.color.clone());const Do=Ca.color.clone().lerp(new fe(1,.97,.93),.18);Xe.bounceTargetColor.copy(Do);const wa=Tn.clamp(.22+Ca.luminance*1.9,.22,2.25);Xe.bounceTargetIntensity=(Xe.bounceBaseIntensity??5)*wa*(.25+Qa*1.25)}Xe.bounceNextSampleAt=ee+1/($?2:4)}else ki||(Xe.bounceTargetIntensity=(Xe.bounceBaseIntensity??5)*(.22+Qa*1.1));const xs=Xe.bounceTargetIntensity??0,Ss=Xe.bounceCurrentIntensity??0;Xe.bounceCurrentIntensity=Tn.lerp(Ss,xs,1-Math.exp(-6.2*Mt)),Xe.bounceCurrentColor||(Xe.bounceCurrentColor=(Xe.bounceTargetColor??new fe(1,1,1)).clone()),Xe.bounceTargetColor&&Xe.bounceCurrentColor.lerp(Xe.bounceTargetColor,1-Math.exp(-5.4*Mt)),Xe.bounceLights.forEach((Ca,Do)=>{const wa=Math.max(1,Xe.bounceLights.length-1),Js=1-Do/wa*.34;Ca.color.copy(Xe.bounceCurrentColor),Ca.intensity=(Xe.bounceCurrentIntensity??0)*Js})}}),Dn.forEach(({mesh:Me,basePosition:tn,strength:en})=>{const Qn=Me.parent;if(!Qn)return;const ki=Qn.worldToLocal(K.position.clone()),Xe=Tn.clamp(ki.x*.008,-.18,.18)*en,Ka=Tn.clamp(ki.y*.006,-.14,.14)*en;Me.position.x=tn.x+Xe,Me.position.y=tn.y+Ka}),Rn.forEach((Me,tn)=>{const{mesh:en,card:Qn}=Me;en.lookAt(K.position);const ki=tn*.7,Xe=Me.baseY+Math.sin(ee*B2+ki)*F2;en.position.y=Xe,en.rotateZ(z2*Mt);const Ka=en.material;Ka.emissiveIntensity=1+Math.sin(ee*2+tn)*.4;const Qs=Me.expanded?1:0,Qa=1/V2;Me.expandT<Qs?Me.expandT=Math.min(1,Me.expandT+Qa*Mt):Me.expandT>Qs&&(Me.expandT=Math.max(0,Me.expandT-Qa*Mt));const aa=Me.expandT,di=aa<.5?4*aa*aa*aa:1-Math.pow(-2*aa+2,3)/2;if(di>.001){Qn.visible=!0,Qn.position.copy(en.position),Qn.position.y-=Nm+.3,Qn.lookAt(K.position),Qn.scale.setScalar(di);const xs=Qn.children[0].material;xs.opacity=di}else Qn.visible=!1;Ka.opacity=1-di*.4});const ia=Hr.y+Math.sin(ee*.8)*.35;Nn.lookAt(K.position),Nn.position.y=ia,Nn.rotateZ(.15*Mt),bo.emissiveIntensity=1.2+Math.sin(ee*1.5)*.5,ta.lookAt(K.position),ta.position.y=ia;const Ra=.72+Math.sin(ee*2.35)*.28,Mi=Tn.smoothstep(Fe,.2,.95);Ta.visible=Mi>.001,Vr.visible=Mi>.001,Ta.scale.setScalar(.88+Ra*.28),Gr.emissiveIntensity=Mi*(.48+Ra*.45),zl.intensity=Mi*($?4.6:7.4)*Ra,Vr.lookAt(K.position),Vr.scale.setScalar(.95+Ra*.18),Bl.opacity=Mi*(.2+Ra*.32);let ai=t.current[0]?.meta.id??(f.length>0?f[0].id:""),Vi=Number.POSITIVE_INFINITY;t.current.forEach(Me=>{let tn=Math.abs(ae-Me.progress);tn>.5&&(tn=1-tn),tn<Vi&&(Vi=tn,ai=Me.meta.id)}),ai!==ru&&(ru=ai,v(ai)),bt.render(it,K),requestAnimationFrame(ou)};ou(),Gt=()=>{c.current=null,bt.domElement.removeEventListener("pointerdown",Zc),bt.domElement.removeEventListener("pointermove",Kc),bt.domElement.removeEventListener("pointerleave",Gl),bt.domElement.removeEventListener("pointerup",Co),bt.domElement.removeEventListener("pointercancel",Co),bt.domElement.removeEventListener("contextmenu",Qc),bt.domElement.removeEventListener("wheel",Jc),bt.domElement.removeEventListener("touchstart",tu),bt.domElement.removeEventListener("touchmove",eu),window.removeEventListener("resize",nu),window.removeEventListener("keydown",$c),vt.contains(bt.domElement)&&vt.removeChild(bt.domElement),he.forEach(Mt=>{const ee=Mt.userData?.video;ee&&(ee.pause(),ee.src="",ee.load())}),we.forEach(Mt=>{Mt.pause(),Mt.src="",Mt.load()}),hn.forEach(Mt=>Mt()),jt.forEach(Mt=>Mt.dispose?.()),sn.forEach(Mt=>Mt.dispose()),bn.dispose(),Ci.dispose(),Rt.albedo.dispose(),Rt.normal.dispose(),Rt.roughness.dispose(),Rt.ao.dispose(),zt.albedo.dispose(),zt.normal.dispose(),zt.roughness.dispose(),zt.ao.dispose(),Et.albedo.dispose(),Et.normal.dispose(),Et.roughness.dispose(),Et.ao.dispose(),_e.forEach(Mt=>Mt.dispose()),Tt.texture.dispose(),Tt.dispose(),oe.dispose(),ht.dispose(),Yt.dispose(),xa.dispose(),ie.dispose(),xi.dispose(),xe.dispose(),ii.dispose(),Ne.dispose(),In.dispose(),ui.dispose(),ka.dispose(),cs.dispose(),Or.dispose(),fs.dispose(),Bi.dispose(),us.dispose(),Ri.dispose(),qs.dispose(),bt.dispose()}})(),()=>{Ht=!0,c.current=null,Gt()}},[f,Ce,ge]),Lt.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Lt.jsx("div",{ref:r,className:"absolute inset-0"}),Lt.jsx(MR,{}),Lt.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[Lt.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[Lt.jsx("button",{type:"button",onClick:()=>pt("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${J==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":J==="nb",children:"NO"}),Lt.jsx("button",{type:"button",onClick:()=>pt("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${J==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":J==="en",children:"EN"})]}),Lt.jsx("button",{type:"button",onClick:q,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":M,children:M?"get in":"get out"})]}),g||b?Lt.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:g?_t.loadingPanels:_t.panelsFallback}):null,M?null:Lt.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Lt.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:_t.siteName}),Lt.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[_t.activeInstallation,": ",_n]})]}),M?Lt.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Lt.jsx("style",{children:`
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
            `}),C==="menu"?Lt.jsxs(Lt.Fragment,{children:[Lt.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:_t.siteName}),Lt.jsx("button",{type:"button",onClick:()=>L("videos"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Lt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:_t.outsideVideos})}),Lt.jsx("button",{type:"button",onClick:()=>L("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Lt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:_t.outsideSignatures})}),Lt.jsx("button",{type:"button",onClick:()=>L("news"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Lt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:_t.outsideAiNews})})]}):null,C!=="menu"?Lt.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[Lt.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[Lt.jsx("button",{type:"button",onClick:()=>L("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:_t.outsideBack}),C==="videos"?Lt.jsx(Lt.Fragment,{children:Lt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:_t.outsideVideosTitle})}):null,C==="signatures"?Lt.jsx(Lt.Fragment,{children:Lt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:_t.outsideSignaturesTitle})}):null,C==="news"?Lt.jsxs(Lt.Fragment,{children:[Lt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:_t.outsideNewsTitle}),Lt.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:_t.outsideNewsBody})]}):null]}),C==="signatures"?Lt.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:Lt.jsxs("form",{onSubmit:mt,className:"max-w-2xl rounded-2xl border border-[#8fb5e8]/38 bg-[#0b1629]/82 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-6",children:[Lt.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[Lt.jsxs("label",{className:"block",children:[Lt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:J==="nb"?"Navn":"Name"}),Lt.jsx("input",{type:"text",required:!0,autoComplete:"name",value:et,onChange:vt=>ot(vt.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Lt.jsxs("label",{className:"block",children:[Lt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:J==="nb"?"E-post":"Email"}),Lt.jsx("input",{type:"email",required:!0,autoComplete:"email",value:lt,onChange:vt=>Z(vt.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]})]}),Lt.jsxs("label",{className:"mt-3 block",children:[Lt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:J==="nb"?"Melding":"Message"}),Lt.jsx("textarea",{required:!0,rows:5,value:O,onChange:vt=>P(vt.target.value),className:"mt-1 w-full resize-y rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Lt.jsx("button",{type:"submit",className:"mt-4 rounded-full border border-[#8fb5e8]/55 bg-[#122742]/85 px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e4efff] transition hover:bg-[#17365a]",children:J==="nb"?"Send melding":"Send message"})]})}):null,C==="news"?Lt.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[B?Lt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:_t.outsideNewsLoading}):null,!B&&T?Lt.jsx("p",{className:"text-sm text-[#ffb6b6]",children:T}):null,!B&&!T&&N.length===0?Lt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:_t.outsideNewsEmpty}):null,!B&&!T&&N.length>0?Lt.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:N.map(vt=>{const Ht=Date.parse(vt.published_at),Gt=Number.isFinite(Ht)?V.format(new Date(Ht)):vt.published_at;return Lt.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[Lt.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[vt.source,Gt?` · ${Gt}`:""]}),Lt.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:vt.title}),vt.snippet?Lt.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:vt.snippet}):null,Lt.jsx("a",{href:vt.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:J==="nb"?"Åpne sak":"Open story"})]},`${vt.url}-${vt.title}`)})}):null]}):null,C==="videos"?Lt.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:wt,onTouchStart:Zt,onTouchEnd:ne,children:Lt.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[Lt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_44%,rgba(80,123,181,0.15),rgba(7,14,25,0.74)_56%,rgba(3,7,14,0.96)_100%)]"}),Lt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_90px_rgba(0,0,0,0.66)]"}),Lt.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#99bae5]",children:[dt+1," / ",Um.length]}),Lt.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9e8ff]/95 shadow-[0_0_18px_rgba(140,185,255,0.72)]"}),Lt.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${q2.toFixed(3)}rem) rotateY(${-dt*j2}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[Lt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/24",style:{width:`${Pf.toFixed(3)}rem`,height:`${Pf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${Gx.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(150,183,223,0.24) 0%, rgba(58,77,103,0.3) 14%, rgba(19,29,45,0.82) 100%)",boxShadow:"0 0 56px rgba(48,94,156,0.22)"}}),Lt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/18",style:{width:`${Pf.toFixed(3)}rem`,height:`${Pf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${Gx.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(22,31,45,0.92) 0%, rgba(24,36,56,0.62) 34%, rgba(117,151,204,0.22) 100%)"}}),Um.map((vt,Ht)=>Lt.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-[#89b0e4]/34 bg-[#050b16]/95 shadow-[0_22px_44px_rgba(0,0,0,0.6)]",style:{width:`${($S+Y2).toFixed(3)}rem`,height:`${E0}rem`,transform:`translate(-50%, -50%) rotateY(${Ht*60}deg) translateZ(-${ty.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:Lt.jsx("video",{ref:Gt=>{l.current[Ht]=Gt},src:vt.video,poster:vt.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${vt.video}-${Ht}`))]})]})}):null]}):null]}):null]})}function bR(){return Lt.jsx("div",{className:"min-h-screen bg-[#080604]",children:Lt.jsx(ER,{})})}UM.createRoot(document.getElementById("root")).render(Lt.jsx(le.StrictMode,{children:Lt.jsx(bR,{})}));
