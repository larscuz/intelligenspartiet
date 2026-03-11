(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Yp={exports:{}},Mc={};var Iv;function CM(){if(Iv)return Mc;Iv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Mc.Fragment=t,Mc.jsx=i,Mc.jsxs=i,Mc}var Pv;function wM(){return Pv||(Pv=1,Yp.exports=CM()),Yp.exports}var wt=wM(),qp={exports:{}},xe={};var Fv;function DM(){if(Fv)return xe;Fv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,E={};function y(I,q,_t){this.props=I,this.context=q,this.refs=E,this.updater=_t||b}y.prototype.isReactComponent={},y.prototype.setState=function(I,q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,q,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=y.prototype;function U(I,q,_t){this.props=I,this.context=q,this.refs=E,this.updater=_t||b}var N=U.prototype=new C;N.constructor=U,D(N,y.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(I,q,_t){var Ot=_t.ref;return{$$typeof:r,type:I,key:q,ref:Ot!==void 0?Ot:null,props:_t}}function mt(I,q){return L(I.type,q,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function et(I){var q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_t){return q[_t]})}var rt=/\/+/g;function ot(I,q){return typeof I=="object"&&I!==null&&I.key!=null?et(""+I.key):q.toString(36)}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(q){I.status==="pending"&&(I.status="fulfilled",I.value=q)},function(q){I.status==="pending"&&(I.status="rejected",I.reason=q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,q,_t,Ot,Yt){var nt=typeof I;(nt==="undefined"||nt==="boolean")&&(I=null);var yt=!1;if(I===null)yt=!0;else switch(nt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(I.$$typeof){case r:case t:yt=!0;break;case _:return yt=I._init,O(yt(I._payload),q,_t,Ot,Yt)}}if(yt)return Yt=Yt(I),yt=Ot===""?"."+ot(I,0):Ot,F(Yt)?(_t="",yt!=null&&(_t=yt.replace(rt,"$&/")+"/"),O(Yt,q,_t,"",function(te){return te})):Yt!=null&&(G(Yt)&&(Yt=mt(Yt,_t+(Yt.key==null||I&&I.key===Yt.key?"":(""+Yt.key).replace(rt,"$&/")+"/")+yt)),q.push(Yt)),1;yt=0;var Lt=Ot===""?".":Ot+":";if(F(I))for(var qt=0;qt<I.length;qt++)Ot=I[qt],nt=Lt+ot(Ot,qt),yt+=O(Ot,q,_t,nt,Yt);else if(qt=S(I),typeof qt=="function")for(I=qt.call(I),qt=0;!(Ot=I.next()).done;)Ot=Ot.value,nt=Lt+ot(Ot,qt++),yt+=O(Ot,q,_t,nt,Yt);else if(nt==="object"){if(typeof I.then=="function")return O(Z(I),q,_t,Ot,Yt);throw q=String(I),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return yt}function P(I,q,_t){if(I==null)return I;var Ot=[],Yt=0;return O(I,Ot,"","",function(nt){return q.call(_t,nt,Yt++)}),Ot}function J(I){if(I._status===-1){var q=I._result;q=q(),q.then(function(_t){(I._status===0||I._status===-1)&&(I._status=1,I._result=_t)},function(_t){(I._status===0||I._status===-1)&&(I._status=2,I._result=_t)}),I._status===-1&&(I._status=0,I._result=q)}if(I._status===1)return I._result.default;throw I._result}var gt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},vt={map:P,forEach:function(I,q,_t){P(I,function(){q.apply(this,arguments)},_t)},count:function(I){var q=0;return P(I,function(){q++}),q},toArray:function(I){return P(I,function(q){return q})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return xe.Activity=v,xe.Children=vt,xe.Component=y,xe.Fragment=i,xe.Profiler=l,xe.PureComponent=U,xe.StrictMode=s,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,xe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},xe.cache=function(I){return function(){return I.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(I,q,_t){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ot=D({},I.props),Yt=I.key;if(q!=null)for(nt in q.key!==void 0&&(Yt=""+q.key),q)!T.call(q,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&q.ref===void 0||(Ot[nt]=q[nt]);var nt=arguments.length-2;if(nt===1)Ot.children=_t;else if(1<nt){for(var yt=Array(nt),Lt=0;Lt<nt;Lt++)yt[Lt]=arguments[Lt+2];Ot.children=yt}return L(I.type,Yt,Ot)},xe.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},xe.createElement=function(I,q,_t){var Ot,Yt={},nt=null;if(q!=null)for(Ot in q.key!==void 0&&(nt=""+q.key),q)T.call(q,Ot)&&Ot!=="key"&&Ot!=="__self"&&Ot!=="__source"&&(Yt[Ot]=q[Ot]);var yt=arguments.length-2;if(yt===1)Yt.children=_t;else if(1<yt){for(var Lt=Array(yt),qt=0;qt<yt;qt++)Lt[qt]=arguments[qt+2];Yt.children=Lt}if(I&&I.defaultProps)for(Ot in yt=I.defaultProps,yt)Yt[Ot]===void 0&&(Yt[Ot]=yt[Ot]);return L(I,nt,Yt)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(I){return{$$typeof:h,render:I}},xe.isValidElement=G,xe.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:J}},xe.memo=function(I,q){return{$$typeof:p,type:I,compare:q===void 0?null:q}},xe.startTransition=function(I){var q=z.T,_t={};z.T=_t;try{var Ot=I(),Yt=z.S;Yt!==null&&Yt(_t,Ot),typeof Ot=="object"&&Ot!==null&&typeof Ot.then=="function"&&Ot.then(B,gt)}catch(nt){gt(nt)}finally{q!==null&&_t.types!==null&&(q.types=_t.types),z.T=q}},xe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},xe.use=function(I){return z.H.use(I)},xe.useActionState=function(I,q,_t){return z.H.useActionState(I,q,_t)},xe.useCallback=function(I,q){return z.H.useCallback(I,q)},xe.useContext=function(I){return z.H.useContext(I)},xe.useDebugValue=function(){},xe.useDeferredValue=function(I,q){return z.H.useDeferredValue(I,q)},xe.useEffect=function(I,q){return z.H.useEffect(I,q)},xe.useEffectEvent=function(I){return z.H.useEffectEvent(I)},xe.useId=function(){return z.H.useId()},xe.useImperativeHandle=function(I,q,_t){return z.H.useImperativeHandle(I,q,_t)},xe.useInsertionEffect=function(I,q){return z.H.useInsertionEffect(I,q)},xe.useLayoutEffect=function(I,q){return z.H.useLayoutEffect(I,q)},xe.useMemo=function(I,q){return z.H.useMemo(I,q)},xe.useOptimistic=function(I,q){return z.H.useOptimistic(I,q)},xe.useReducer=function(I,q,_t){return z.H.useReducer(I,q,_t)},xe.useRef=function(I){return z.H.useRef(I)},xe.useState=function(I){return z.H.useState(I)},xe.useSyncExternalStore=function(I,q,_t){return z.H.useSyncExternalStore(I,q,_t)},xe.useTransition=function(){return z.H.useTransition()},xe.version="19.2.4",xe}var Bv;function Jm(){return Bv||(Bv=1,qp.exports=DM()),qp.exports}var se=Jm(),jp={exports:{}},Ec={},Zp={exports:{}},Kp={};var zv;function NM(){return zv||(zv=1,(function(r){function t(O,P){var J=O.length;O.push(P);t:for(;0<J;){var gt=J-1>>>1,vt=O[gt];if(0<l(vt,P))O[gt]=P,O[J]=vt,J=gt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var P=O[0],J=O.pop();if(J!==P){O[0]=J;t:for(var gt=0,vt=O.length,I=vt>>>1;gt<I;){var q=2*(gt+1)-1,_t=O[q],Ot=q+1,Yt=O[Ot];if(0>l(_t,J))Ot<vt&&0>l(Yt,_t)?(O[gt]=Yt,O[Ot]=J,gt=Ot):(O[gt]=_t,O[q]=J,gt=q);else if(Ot<vt&&0>l(Yt,J))O[gt]=Yt,O[Ot]=J,gt=Ot;else break t}}return P}function l(O,P){var J=O.sortIndex-P.sortIndex;return J!==0?J:O.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,b=!1,D=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var P=i(p);P!==null;){if(P.callback===null)s(p);else if(P.startTime<=O)s(p),P.sortIndex=P.expirationTime,t(m,P);else break;P=i(p)}}function F(O){if(D=!1,N(O),!b)if(i(m)!==null)b=!0,B||(B=!0,et());else{var P=i(p);P!==null&&Z(F,P.startTime-O)}}var B=!1,z=-1,T=5,L=-1;function mt(){return E?!0:!(r.unstable_now()-L<T)}function G(){if(E=!1,B){var O=r.unstable_now();L=O;var P=!0;try{t:{b=!1,D&&(D=!1,C(z),z=-1),S=!0;var J=g;try{e:{for(N(O),v=i(m);v!==null&&!(v.expirationTime>O&&mt());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,g=v.priorityLevel;var vt=gt(v.expirationTime<=O);if(O=r.unstable_now(),typeof vt=="function"){v.callback=vt,N(O),P=!0;break e}v===i(m)&&s(m),N(O)}else s(m);v=i(m)}if(v!==null)P=!0;else{var I=i(p);I!==null&&Z(F,I.startTime-O),P=!1}}break t}finally{v=null,g=J,S=!1}P=void 0}}finally{P?et():B=!1}}}var et;if(typeof U=="function")et=function(){U(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ot=rt.port2;rt.port1.onmessage=G,et=function(){ot.postMessage(null)}}else et=function(){y(G,0)};function Z(O,P){z=y(function(){O(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var J=g;g=P;try{return O()}finally{g=J}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var J=g;g=O;try{return P()}finally{g=J}},r.unstable_scheduleCallback=function(O,P,J){var gt=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?gt+J:gt):J=gt,O){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=J+vt,O={id:_++,callback:P,priorityLevel:O,startTime:J,expirationTime:vt,sortIndex:-1},J>gt?(O.sortIndex=J,t(p,O),i(m)===null&&O===i(p)&&(D?(C(z),z=-1):D=!0,Z(F,J-gt))):(O.sortIndex=vt,t(m,O),b||S||(b=!0,B||(B=!0,et()))),O},r.unstable_shouldYield=mt,r.unstable_wrapCallback=function(O){var P=g;return function(){var J=g;g=P;try{return O.apply(this,arguments)}finally{g=J}}}})(Kp)),Kp}var Hv;function LM(){return Hv||(Hv=1,Zp.exports=NM()),Zp.exports}var Qp={exports:{}},hi={};var Gv;function UM(){if(Gv)return hi;Gv=1;var r=Jm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return hi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,hi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},hi.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},hi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},hi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},hi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},hi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},hi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},hi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},hi.requestFormReset=function(m){s.d.r(m)},hi.unstable_batchedUpdates=function(m,p){return m(p)},hi.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},hi.useFormStatus=function(){return f.H.useHostTransitionStatus()},hi.version="19.2.4",hi}var Vv;function OM(){if(Vv)return Qp.exports;Vv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Qp.exports=UM(),Qp.exports}var kv;function IM(){if(kv)return Ec;kv=1;var r=LM(),t=Jm(),i=OM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=d;break}if(A===o){x=!0,o=u,a=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===a){x=!0,a=d,o=u;break}if(A===o){x=!0,o=d,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case y:return"Profiler";case E:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var Z=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},gt=[],vt=-1;function I(e){return{current:e}}function q(e){0>vt||(e.current=gt[vt],gt[vt]=null,vt--)}function _t(e,n){vt++,gt[vt]=e.current,e.current=n}var Ot=I(null),Yt=I(null),nt=I(null),yt=I(null);function Lt(e,n){switch(_t(nt,n),_t(Yt,e),_t(Ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?av(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=av(n),e=sv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Ot),_t(Ot,e)}function qt(){q(Ot),q(Yt),q(nt)}function te(e){e.memoizedState!==null&&_t(yt,e);var n=Ot.current,a=sv(n,e.type);n!==a&&(_t(Yt,e),_t(Ot,a))}function ce(e){Yt.current===e&&(q(Ot),q(Yt)),yt.current===e&&(q(yt),vc._currentValue=J)}var xn,Ce;function ye(e){if(xn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);xn=n&&n[1]||"",Ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xn+e+Ce}var Le=!1;function ge(e,n){if(!e||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ht){var lt=ht}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ht){lt=ht}e.call(Mt.prototype)}}else{try{throw Error()}catch(ht){lt=ht}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ht){if(ht&&lt&&typeof ht.stack=="string")return[ht.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var H=x.split(`
`),st=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===st.length)for(o=H.length-1,u=st.length-1;1<=o&&0<=u&&H[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==st[u]){var xt=`
`+H[o].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=o&&0<=u);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ye(a):""}function mn(e,n){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye("Lazy");case 13:return e.child!==n&&n!==null?ye("Suspense Fallback"):ye("Suspense");case 19:return ye("SuspenseList");case 0:case 15:return ge(e.type,!1);case 11:return ge(e.type.render,!1);case 1:return ge(e.type,!0);case 31:return ye("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=mn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var nn=Object.prototype.hasOwnProperty,Ue=r.unstable_scheduleCallback,Ye=r.unstable_cancelCallback,K=r.unstable_shouldYield,w=r.unstable_requestPaint,M=r.unstable_now,V=r.unstable_getCurrentPriorityLevel,$=r.unstable_ImmediatePriority,pt=r.unstable_UserBlockingPriority,ct=r.unstable_NormalPriority,At=r.unstable_LowPriority,dt=r.unstable_IdlePriority,Tt=r.log,Et=r.unstable_setDisableYieldValue,bt=null,Rt=null;function Ht(e){if(typeof Tt=="function"&&Et(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(bt,e)}catch{}}var Bt=Math.clz32?Math.clz32:X,Gt=Math.log,le=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Gt(e)/le|0)|0}var Nt=256,Ut=262144,Ft=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Dt(o):(x&=A,x!==0?u=Dt(x):a||(a=A&~e,a!==0&&(u=Dt(a))))):(A=o&~d,A!==0?u=Dt(A):x!==0?u=Dt(x):a||(a=o&~e,a!==0&&(u=Dt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Vt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Je(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fi(e,n,a,o,u,d){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,st=e.hiddenUpdates;for(a=x&~a;0<a;){var xt=31-Bt(a),Mt=1<<xt;A[xt]=0,H[xt]=-1;var lt=st[xt];if(lt!==null)for(st[xt]=null,xt=0;xt<lt.length;xt++){var ht=lt[xt];ht!==null&&(ht.lane&=-536870913)}a&=~Mt}o!==0&&Wa(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~n))}function Wa(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ya(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ms(e,n){var a=n&-n;return a=(a&42)!==0?1:Sa(a),(a&(e.suspendedLanes|n))!==0?0:a}function Sa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bi(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Cv(e.type))}function _s(e,n){var a=P.p;try{return P.p=e,n()}finally{P.p=a}}var Ai=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Ai,Mn="__reactProps$"+Ai,zi="__reactContainer$"+Ai,Ri="__reactEvents$"+Ai,Ya="__reactListeners$"+Ai,bo="__reactHandles$"+Ai,qa="__reactResources$"+Ai,ja="__reactMarker$"+Ai;function Qs(e){delete e[Sn],delete e[Mn],delete e[Ri],delete e[Ya],delete e[bo]}function Ma(e){var n=e[Sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[Sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=dv(e);e!==null;){if(a=e[Sn])return a;e=dv(e)}return n}e=a,a=e.parentNode}return null}function Ea(e){if(e=e[Sn]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[qa];return n||(n=e[qa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[ja]=!0}var ut=new Set,at={};function tt(e,n){It(e,n),It(e+"Capture",n)}function It(e,n){for(at[e]=n,e=0;e<n.length;e++)ut.add(n[e])}var Wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zt={},jt={};function ne(e){return nn.call(jt,e)?!0:nn.call(zt,e)?!1:Wt.test(e)?jt[e]=!0:(zt[e]=!0,!1)}function Qt(e,n,a){if(ne(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function de(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ae(e){if(!e._valueTracker){var n=Ke(e)?"checked":"value";e._valueTracker=an(e,n,""+e[n])}}function En(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var An=/[\n"\\]/g;function pe(e){return e.replace(An,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pn(e,n,a,o,u,d,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ve(n)):e.value!==""+ve(n)&&(e.value=""+ve(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Hi(e,x,ve(n)):a!=null?Hi(e,x,ve(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ve(A):e.removeAttribute("name")}function ci(e,n,a,o,u,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ae(e);return}a=a!=null?""+ve(a):"",n=n!=null?""+ve(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ae(e)}function Hi(e,n,a){n==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _i(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ve(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function qe(e,n,a){if(n!=null&&(n=""+ve(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ve(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Z(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ve(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ae(e)}function ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ci(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ui(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ci(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ci(e,d,n[d])}function vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$i=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fi(e){return $i.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function wn(){}var ba=null;function Ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ta=null,ea=null;function Js(e){var n=Ea(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Pn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));Pn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&En(o)}break t;case"textarea":qe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&_i(e,!!a.multiple,n,!1)}}}var Br=!1;function To(e,n,a){if(Br)return e(n,a);Br=!0;try{var o=e(n);return o}finally{if(Br=!1,(ta!==null||ea!==null)&&(Xu(),ta&&(n=ta,e=ea,ea=ta=null,Js(n),e)))for(n=0;n<e.length;n++)Js(e[n])}}function xs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fn=!1;if(na)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Fn=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Fn=!1}var Qa=null,Pl=null,zr=null;function Hr(){if(zr)return zr;var e,n=Pl,a=n.length,o,u="value"in Qa?Qa.value:Qa.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return zr=u.slice(e,1<o?1-o:void 0)}function Ao(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $s(){return!0}function Ro(){return!1}function ei(e){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?$s:Ro,this.isPropagationStopped=Ro,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=ei(Ja),ia=v({},Ja,{view:0,detail:0}),ah=ei(ia),Fl,$a,tr,Gr=v({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Do,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Fl=e.screenX-tr.screenX,$a=e.screenY-tr.screenY):$a=Fl=0,tr=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:$a}}),Co=ei(Gr),Bl=v({},Gr,{dataTransfer:0}),er=ei(Bl),Kc=v({},ia,{relatedTarget:0}),Vr=ei(Kc),kr=v({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),zl=ei(kr),Qc=v({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hl=ei(Qc),Jc=v({},Ja,{data:0}),Ms=ei(Jc),ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$c={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tu[e])?!!n[e]:!1}function Do(){return wo}var eu=v({},ia,{key:function(e){if(e.key){var n=ts[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$c[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Do,charCode:function(e){return e.type==="keypress"?Ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nu=ei(eu),Xr=v({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gl=ei(Xr),iu=v({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Do}),au=ei(iu),Vl=v({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),su=ei(Vl),kl=v({},Gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ru=ei(kl),ou=v({},Ja,{newState:0,oldState:0}),lu=ei(ou),cu=[9,13,27,32],Ct=na&&"CompositionEvent"in window,Jt=null;na&&"documentMode"in document&&(Jt=document.documentMode);var ie=na&&"TextEvent"in window&&!Jt,ee=na&&(!Ct||Jt&&8<Jt&&11>=Jt),kt=" ",me=!1;function We(e,n){switch(e){case"keyup":return cu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $e(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var He=!1;function vi(e,n){switch(e){case"compositionend":return $e(n);case"keypress":return n.which!==32?null:(me=!0,kt);case"textInput":return e=n.data,e===kt&&me?null:e;default:return null}}function xi(e,n){if(He)return e==="compositionend"||!Ct&&We(e,n)?(e=Hr(),zr=Pl=Qa=null,He=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ee&&n.locale!=="ko"?null:n.data;default:return null}}var Dn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ie(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Dn[e.type]:n==="textarea"}function sn(e,n,a,o){ta?ea?ea.push(o):ea=[o]:ta=o,n=Qu(n,"onChange"),0<n.length&&(a=new Ss("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Be=null,ln=null;function aa(e){J_(e,0)}function es(e){var n=Za(e);if(En(n))return e}function Ta(e,n){if(e==="change")return n}var Aa=!1;if(na){var Pt;if(na){var Nn="oninput"in document;if(!Nn){var wi=document.createElement("div");wi.setAttribute("oninput","return;"),Nn=typeof wi.oninput=="function"}Pt=Nn}else Pt=!1;Aa=Pt&&(!document.documentMode||9<document.documentMode)}function Ra(){Be&&(Be.detachEvent("onpropertychange",ni),ln=Be=null)}function ni(e){if(e.propertyName==="value"&&es(ln)){var n=[];sn(n,ln,e,Ka(e)),To(aa,n)}}function Ca(e,n,a){e==="focusin"?(Ra(),Be=n,ln=a,Be.attachEvent("onpropertychange",ni)):e==="focusout"&&Ra()}function wa(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return es(ln)}function ns(e,n){if(e==="click")return es(n)}function yi(e,n){if(e==="input"||e==="change")return es(n)}function ii(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var gn=typeof Object.is=="function"?Object.is:ii;function _e(e,n){if(gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!nn.call(n,u)||!gn(e[u],n[u]))return!1}return!0}function tn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jn(e,n){var a=tn(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tn(a)}}function Si(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Si(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gi(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function Ge(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Es=na&&"documentMode"in document&&11>=document.documentMode,sa=null,is=null,di=null,Vi=!1;function nr(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vi||sa==null||sa!==Kt(o)||(o=sa,"selectionStart"in o&&Ge(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),di&&_e(di,o)||(di=o,o=Qu(is,"onSelect"),0<o.length&&(n=new Ss("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=sa)))}function Da(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Di={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Wr={},No={};na&&(No=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function bs(e){if(Wr[e])return Wr[e];if(!Di[e])return e;var n=Di[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in No)return Wr[e]=n[a];return e}var C0=bs("animationend"),w0=bs("animationiteration"),D0=bs("animationstart"),lS=bs("transitionrun"),cS=bs("transitionstart"),uS=bs("transitioncancel"),N0=bs("transitionend"),L0=new Map,sh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sh.push("scrollEnd");function Na(e,n){L0.set(e,n),tt(n,[e])}var uu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ra=[],Lo=0,rh=0;function fu(){for(var e=Lo,n=rh=Lo=0;n<e;){var a=ra[n];ra[n++]=null;var o=ra[n];ra[n++]=null;var u=ra[n];ra[n++]=null;var d=ra[n];if(ra[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&U0(a,u,d)}}function du(e,n,a,o){ra[Lo++]=e,ra[Lo++]=n,ra[Lo++]=a,ra[Lo++]=o,rh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function oh(e,n,a,o){return du(e,n,a,o),hu(e)}function Yr(e,n){return du(e,null,null,n),hu(e)}function U0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function hu(e){if(50<fc)throw fc=0,gp=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Uo={};function fS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(e,n,a,o){return new fS(e,n,a,o)}function lh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ts(e,n){var a=e.alternate;return a===null?(a=ki(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function O0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function pu(e,n,a,o,u,d){var x=0;if(o=e,typeof e=="function")lh(e)&&(x=1);else if(typeof e=="string")x=gM(e,a,Ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ki(31,a,n,u),e.elementType=L,e.lanes=d,e;case D:return qr(a.children,u,d,n);case E:x=8,u|=24;break;case y:return e=ki(12,a,n,u|2),e.elementType=y,e.lanes=d,e;case F:return e=ki(13,a,n,u),e.elementType=F,e.lanes=d,e;case B:return e=ki(19,a,n,u),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case C:x=9;break t;case N:x=11;break t;case z:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ki(x,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function qr(e,n,a,o){return e=ki(7,e,o,n),e.lanes=a,e}function ch(e,n,a){return e=ki(6,e,null,n),e.lanes=a,e}function I0(e){var n=ki(18,null,null,0);return n.stateNode=e,n}function uh(e,n,a){return n=ki(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var P0=new WeakMap;function oa(e,n){if(typeof e=="object"&&e!==null){var a=P0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},P0.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var Oo=[],Io=0,mu=null,Xl=0,la=[],ca=0,ir=null,as=1,ss="";function As(e,n){Oo[Io++]=Xl,Oo[Io++]=mu,mu=e,Xl=n}function F0(e,n,a){la[ca++]=as,la[ca++]=ss,la[ca++]=ir,ir=e;var o=as;e=ss;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var d=32-Bt(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,as=1<<32-Bt(n)+u|a<<u|o,ss=d+e}else as=1<<d|a<<u|o,ss=e}function fh(e){e.return!==null&&(As(e,1),F0(e,1,0))}function dh(e){for(;e===mu;)mu=Oo[--Io],Oo[Io]=null,Xl=Oo[--Io],Oo[Io]=null;for(;e===ir;)ir=la[--ca],la[ca]=null,ss=la[--ca],la[ca]=null,as=la[--ca],la[ca]=null}function B0(e,n){la[ca++]=as,la[ca++]=ss,la[ca++]=ir,as=n.id,ss=n.overflow,ir=e}var ai=null,_n=null,ze=!1,ar=null,ua=!1,hh=Error(s(519));function sr(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wl(oa(n,e)),hh}function z0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Sn]=e,n[Mn]=o,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<hc.length;a++)Ne(hc[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),ci(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||nv(n.textContent,a)?(o.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),o.onScroll!=null&&Ne("scroll",n),o.onScrollEnd!=null&&Ne("scrollend",n),o.onClick!=null&&(n.onclick=wn),n=!0):n=!1,n||sr(e,!0)}function H0(e){for(ai=e.return;ai;)switch(ai.tag){case 5:case 31:case 13:ua=!1;return;case 27:case 3:ua=!0;return;default:ai=ai.return}}function Po(e){if(e!==ai)return!1;if(!ze)return H0(e),ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Np(e.type,e.memoizedProps)),a=!a),a&&_n&&sr(e),H0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_n=fv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_n=fv(e)}else n===27?(n=_n,xr(e.type)?(e=Pp,Pp=null,_n=e):_n=n):_n=ai?da(e.stateNode.nextSibling):null;return!0}function jr(){_n=ai=null,ze=!1}function ph(){var e=ar;return e!==null&&(Oi===null?Oi=e:Oi.push.apply(Oi,e),ar=null),e}function Wl(e){ar===null?ar=[e]:ar.push(e)}var mh=I(null),Zr=null,Rs=null;function rr(e,n,a){_t(mh,n._currentValue),n._currentValue=a}function Cs(e){e._currentValue=mh.current,q(mh)}function gh(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function _h(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),gh(d.return,a,e),o||(x=null);break t}d=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),gh(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Fo(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;gn(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===yt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(vc):e=[vc])}u=u.return}e!==null&&_h(n,e,a,o),n.flags|=262144}function gu(e){for(e=e.firstContext;e!==null;){if(!gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Kr(e){Zr=e,Rs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function si(e){return G0(Zr,e)}function _u(e,n){return Zr===null&&Kr(e),G0(e,n)}function G0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Rs===null){if(e===null)throw Error(s(308));Rs=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Rs=Rs.next=n;return a}var dS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},hS=r.unstable_scheduleCallback,pS=r.unstable_NormalPriority,Bn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vh(){return{controller:new dS,data:new Map,refCount:0}}function Yl(e){e.refCount--,e.refCount===0&&hS(pS,function(){e.controller.abort()})}var ql=null,xh=0,Bo=0,zo=null;function mS(e,n){if(ql===null){var a=ql=[];xh=0,Bo=Mp(),zo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return xh++,n.then(V0,V0),n}function V0(){if(--xh===0&&ql!==null){zo!==null&&(zo.status="fulfilled");var e=ql;ql=null,Bo=0,zo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function gS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var k0=O.S;O.S=function(e,n){A_=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&mS(e,n),k0!==null&&k0(e,n)};var Qr=I(null);function yh(){var e=Qr.current;return e!==null?e:hn.pooledCache}function vu(e,n){n===null?_t(Qr,Qr.current):_t(Qr,n.pool)}function X0(){var e=yh();return e===null?null:{parent:Bn._currentValue,pool:e}}var Ho=Error(s(460)),Sh=Error(s(474)),xu=Error(s(542)),yu={then:function(){}};function W0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Y0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(wn,wn),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,j0(e),e;default:if(typeof n.status=="string")n.then(wn,wn);else{if(e=hn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,j0(e),e}throw $r=n,Ho}}function Jr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($r=a,Ho):a}}var $r=null;function q0(){if($r===null)throw Error(s(459));var e=$r;return $r=null,e}function j0(e){if(e===Ho||e===xu)throw Error(s(483))}var Go=null,jl=0;function Su(e){var n=jl;return jl+=1,Go===null&&(Go=[]),Y0(Go,e,n)}function Zl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Mu(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Z0(e){function n(Q,W){if(e){var it=Q.deletions;it===null?(Q.deletions=[W],Q.flags|=16):it.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=Ts(Q,W),Q.index=0,Q.sibling=null,Q}function d(Q,W,it){return Q.index=it,e?(it=Q.alternate,it!==null?(it=it.index,it<W?(Q.flags|=67108866,W):it):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,W,it,St){return W===null||W.tag!==6?(W=ch(it,Q.mode,St),W.return=Q,W):(W=u(W,it),W.return=Q,W)}function H(Q,W,it,St){var oe=it.type;return oe===D?xt(Q,W,it.props.children,St,it.key):W!==null&&(W.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===T&&Jr(oe)===W.type)?(W=u(W,it.props),Zl(W,it),W.return=Q,W):(W=pu(it.type,it.key,it.props,null,Q.mode,St),Zl(W,it),W.return=Q,W)}function st(Q,W,it,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=uh(it,Q.mode,St),W.return=Q,W):(W=u(W,it.children||[]),W.return=Q,W)}function xt(Q,W,it,St,oe){return W===null||W.tag!==7?(W=qr(it,Q.mode,St,oe),W.return=Q,W):(W=u(W,it),W.return=Q,W)}function Mt(Q,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=ch(""+W,Q.mode,it),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return it=pu(W.type,W.key,W.props,null,Q.mode,it),Zl(it,W),it.return=Q,it;case b:return W=uh(W,Q.mode,it),W.return=Q,W;case T:return W=Jr(W),Mt(Q,W,it)}if(Z(W)||et(W))return W=qr(W,Q.mode,it,null),W.return=Q,W;if(typeof W.then=="function")return Mt(Q,Su(W),it);if(W.$$typeof===U)return Mt(Q,_u(Q,W),it);Mu(Q,W)}return null}function lt(Q,W,it,St){var oe=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return oe!==null?null:A(Q,W,""+it,St);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case S:return it.key===oe?H(Q,W,it,St):null;case b:return it.key===oe?st(Q,W,it,St):null;case T:return it=Jr(it),lt(Q,W,it,St)}if(Z(it)||et(it))return oe!==null?null:xt(Q,W,it,St,null);if(typeof it.then=="function")return lt(Q,W,Su(it),St);if(it.$$typeof===U)return lt(Q,W,_u(Q,it),St);Mu(Q,it)}return null}function ht(Q,W,it,St,oe){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return Q=Q.get(it)||null,A(W,Q,""+St,oe);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case S:return Q=Q.get(St.key===null?it:St.key)||null,H(W,Q,St,oe);case b:return Q=Q.get(St.key===null?it:St.key)||null,st(W,Q,St,oe);case T:return St=Jr(St),ht(Q,W,it,St,oe)}if(Z(St)||et(St))return Q=Q.get(it)||null,xt(W,Q,St,oe,null);if(typeof St.then=="function")return ht(Q,W,it,Su(St),oe);if(St.$$typeof===U)return ht(Q,W,it,_u(W,St),oe);Mu(W,St)}return null}function $t(Q,W,it,St){for(var oe=null,je=null,ae=W,be=W=0,Fe=null;ae!==null&&be<it.length;be++){ae.index>be?(Fe=ae,ae=null):Fe=ae.sibling;var Ze=lt(Q,ae,it[be],St);if(Ze===null){ae===null&&(ae=Fe);break}e&&ae&&Ze.alternate===null&&n(Q,ae),W=d(Ze,W,be),je===null?oe=Ze:je.sibling=Ze,je=Ze,ae=Fe}if(be===it.length)return a(Q,ae),ze&&As(Q,be),oe;if(ae===null){for(;be<it.length;be++)ae=Mt(Q,it[be],St),ae!==null&&(W=d(ae,W,be),je===null?oe=ae:je.sibling=ae,je=ae);return ze&&As(Q,be),oe}for(ae=o(ae);be<it.length;be++)Fe=ht(ae,Q,be,it[be],St),Fe!==null&&(e&&Fe.alternate!==null&&ae.delete(Fe.key===null?be:Fe.key),W=d(Fe,W,be),je===null?oe=Fe:je.sibling=Fe,je=Fe);return e&&ae.forEach(function(br){return n(Q,br)}),ze&&As(Q,be),oe}function fe(Q,W,it,St){if(it==null)throw Error(s(151));for(var oe=null,je=null,ae=W,be=W=0,Fe=null,Ze=it.next();ae!==null&&!Ze.done;be++,Ze=it.next()){ae.index>be?(Fe=ae,ae=null):Fe=ae.sibling;var br=lt(Q,ae,Ze.value,St);if(br===null){ae===null&&(ae=Fe);break}e&&ae&&br.alternate===null&&n(Q,ae),W=d(br,W,be),je===null?oe=br:je.sibling=br,je=br,ae=Fe}if(Ze.done)return a(Q,ae),ze&&As(Q,be),oe;if(ae===null){for(;!Ze.done;be++,Ze=it.next())Ze=Mt(Q,Ze.value,St),Ze!==null&&(W=d(Ze,W,be),je===null?oe=Ze:je.sibling=Ze,je=Ze);return ze&&As(Q,be),oe}for(ae=o(ae);!Ze.done;be++,Ze=it.next())Ze=ht(ae,Q,be,Ze.value,St),Ze!==null&&(e&&Ze.alternate!==null&&ae.delete(Ze.key===null?be:Ze.key),W=d(Ze,W,be),je===null?oe=Ze:je.sibling=Ze,je=Ze);return e&&ae.forEach(function(RM){return n(Q,RM)}),ze&&As(Q,be),oe}function fn(Q,W,it,St){if(typeof it=="object"&&it!==null&&it.type===D&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case S:t:{for(var oe=it.key;W!==null;){if(W.key===oe){if(oe=it.type,oe===D){if(W.tag===7){a(Q,W.sibling),St=u(W,it.props.children),St.return=Q,Q=St;break t}}else if(W.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===T&&Jr(oe)===W.type){a(Q,W.sibling),St=u(W,it.props),Zl(St,it),St.return=Q,Q=St;break t}a(Q,W);break}else n(Q,W);W=W.sibling}it.type===D?(St=qr(it.props.children,Q.mode,St,it.key),St.return=Q,Q=St):(St=pu(it.type,it.key,it.props,null,Q.mode,St),Zl(St,it),St.return=Q,Q=St)}return x(Q);case b:t:{for(oe=it.key;W!==null;){if(W.key===oe)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){a(Q,W.sibling),St=u(W,it.children||[]),St.return=Q,Q=St;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}St=uh(it,Q.mode,St),St.return=Q,Q=St}return x(Q);case T:return it=Jr(it),fn(Q,W,it,St)}if(Z(it))return $t(Q,W,it,St);if(et(it)){if(oe=et(it),typeof oe!="function")throw Error(s(150));return it=oe.call(it),fe(Q,W,it,St)}if(typeof it.then=="function")return fn(Q,W,Su(it),St);if(it.$$typeof===U)return fn(Q,W,_u(Q,it),St);Mu(Q,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(a(Q,W.sibling),St=u(W,it),St.return=Q,Q=St):(a(Q,W),St=ch(it,Q.mode,St),St.return=Q,Q=St),x(Q)):a(Q,W)}return function(Q,W,it,St){try{jl=0;var oe=fn(Q,W,it,St);return Go=null,oe}catch(ae){if(ae===Ho||ae===xu)throw ae;var je=ki(29,ae,null,Q.mode);return je.lanes=St,je.return=Q,je}}}var to=Z0(!0),K0=Z0(!1),or=!1;function Mh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function lr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Qe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hu(e),U0(e,null,a),n}return du(e,o,n,a),hu(e)}function Kl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ya(e,a)}}function bh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Th=!1;function Ql(){if(Th){var e=zo;if(e!==null)throw e}}function Jl(e,n,a,o){Th=!1;var u=e.updateQueue;or=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,st=H.next;H.next=null,x===null?d=st:x.next=st,x=H;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,A=xt.lastBaseUpdate,A!==x&&(A===null?xt.firstBaseUpdate=st:A.next=st,xt.lastBaseUpdate=H))}if(d!==null){var Mt=u.baseState;x=0,xt=st=H=null,A=d;do{var lt=A.lane&-536870913,ht=lt!==A.lane;if(ht?(Pe&lt)===lt:(o&lt)===lt){lt!==0&&lt===Bo&&(Th=!0),xt!==null&&(xt=xt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var $t=e,fe=A;lt=n;var fn=a;switch(fe.tag){case 1:if($t=fe.payload,typeof $t=="function"){Mt=$t.call(fn,Mt,lt);break t}Mt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=fe.payload,lt=typeof $t=="function"?$t.call(fn,Mt,lt):$t,lt==null)break t;Mt=v({},Mt,lt);break t;case 2:or=!0}}lt=A.callback,lt!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[lt]:ht.push(lt))}else ht={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},xt===null?(st=xt=ht,H=Mt):xt=xt.next=ht,x|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ht=A,A=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);xt===null&&(H=Mt),u.baseState=H,u.firstBaseUpdate=st,u.lastBaseUpdate=xt,d===null&&(u.shared.lanes=0),pr|=x,e.lanes=x,e.memoizedState=Mt}}function Q0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function J0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Q0(a[e],n)}var Vo=I(null),Eu=I(0);function $0(e,n){e=Fs,_t(Eu,e),_t(Vo,n),Fs=e|n.baseLanes}function Ah(){_t(Eu,Fs),_t(Vo,Vo.current)}function Rh(){Fs=Eu.current,q(Vo),q(Eu)}var Xi=I(null),fa=null;function ur(e){var n=e.alternate;_t(On,On.current&1),_t(Xi,e),fa===null&&(n===null||Vo.current!==null||n.memoizedState!==null)&&(fa=e)}function Ch(e){_t(On,On.current),_t(Xi,e),fa===null&&(fa=e)}function tg(e){e.tag===22?(_t(On,On.current),_t(Xi,e),fa===null&&(fa=e)):fr()}function fr(){_t(On,On.current),_t(Xi,Xi.current)}function Wi(e){q(Xi),fa===e&&(fa=null),q(On)}var On=I(0);function bu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Op(a)||Ip(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ws=0,Se=null,cn=null,zn=null,Tu=!1,ko=!1,eo=!1,Au=0,$l=0,Xo=null,_S=0;function Ln(){throw Error(s(321))}function wh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!gn(e[a],n[a]))return!1;return!0}function Dh(e,n,a,o,u,d){return ws=d,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Fg:Wh,eo=!1,d=a(o,u),eo=!1,ko&&(d=ng(n,a,o,u)),eg(e),d}function eg(e){O.H=nc;var n=cn!==null&&cn.next!==null;if(ws=0,zn=cn=Se=null,Tu=!1,$l=0,Xo=null,n)throw Error(s(300));e===null||Hn||(e=e.dependencies,e!==null&&gu(e)&&(Hn=!0))}function ng(e,n,a,o){Se=e;var u=0;do{if(ko&&(Xo=null),$l=0,ko=!1,25<=u)throw Error(s(301));if(u+=1,zn=cn=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=Bg,d=n(a,o)}while(ko);return d}function vS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?tc(n):n,e=e.useState()[0],(cn!==null?cn.memoizedState:null)!==e&&(Se.flags|=1024),n}function Nh(){var e=Au!==0;return Au=0,e}function Lh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Uh(e){if(Tu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Tu=!1}ws=0,zn=cn=Se=null,ko=!1,$l=Au=0,Xo=null}function Mi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zn===null?Se.memoizedState=zn=e:zn=zn.next=e,zn}function In(){if(cn===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=cn.next;var n=zn===null?Se.memoizedState:zn.next;if(n!==null)zn=n,cn=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));cn=e,e={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},zn===null?Se.memoizedState=zn=e:zn=zn.next=e}return zn}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tc(e){var n=$l;return $l+=1,Xo===null&&(Xo=[]),e=Y0(Xo,e,n),n=Se,(zn===null?n.memoizedState:zn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Fg:Wh),e}function Cu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tc(e);if(e.$$typeof===U)return si(e)}throw Error(s(438,String(e)))}function Oh(e){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ru(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=mt;return n.index++,a}function Ds(e,n){return typeof n=="function"?n(e):n}function wu(e){var n=In();return Ih(n,cn,e)}function Ih(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=x=null,H=null,st=n,xt=!1;do{var Mt=st.lane&-536870913;if(Mt!==st.lane?(Pe&Mt)===Mt:(ws&Mt)===Mt){var lt=st.revertLane;if(lt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Mt===Bo&&(xt=!0);else if((ws&lt)===lt){st=st.next,lt===Bo&&(xt=!0);continue}else Mt={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},H===null?(A=H=Mt,x=d):H=H.next=Mt,Se.lanes|=lt,pr|=lt;Mt=st.action,eo&&a(d,Mt),d=st.hasEagerState?st.eagerState:a(d,Mt)}else lt={lane:Mt,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},H===null?(A=H=lt,x=d):H=H.next=lt,Se.lanes|=Mt,pr|=Mt;st=st.next}while(st!==null&&st!==n);if(H===null?x=d:H.next=A,!gn(d,e.memoizedState)&&(Hn=!0,xt&&(a=zo,a!==null)))throw a;e.memoizedState=d,e.baseState=x,e.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ph(e){var n=In(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);gn(d,n.memoizedState)||(Hn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function ig(e,n,a){var o=Se,u=In(),d=ze;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!gn((cn||u).memoizedState,a);if(x&&(u.memoizedState=a,Hn=!0),u=u.queue,zh(rg.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||zn!==null&&zn.memoizedState.tag&1){if(o.flags|=2048,Wo(9,{destroy:void 0},sg.bind(null,o,u,a,n),null),hn===null)throw Error(s(349));d||(ws&127)!==0||ag(o,n,a)}return a}function ag(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=Ru(),Se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function sg(e,n,a,o){n.value=a,n.getSnapshot=o,og(n)&&lg(e)}function rg(e,n,a){return a(function(){og(n)&&lg(e)})}function og(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!gn(e,a)}catch{return!0}}function lg(e){var n=Yr(e,2);n!==null&&Ii(n,e,2)}function Fh(e){var n=Mi();if(typeof e=="function"){var a=e;if(e=a(),eo){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:e},n}function cg(e,n,a,o){return e.baseState=a,Ih(e,cn,typeof o=="function"?o:Ds)}function xS(e,n,a,o,u){if(Lu(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,ug(n,d)):(d.next=a.next,n.pending=a.next=d)}}function ug(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=O.T,x={};O.T=x;try{var A=a(u,o),H=O.S;H!==null&&H(x,A),fg(e,n,A)}catch(st){Bh(e,n,st)}finally{d!==null&&x.types!==null&&(d.types=x.types),O.T=d}}else try{d=a(u,o),fg(e,n,d)}catch(st){Bh(e,n,st)}}function fg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){dg(e,n,o)},function(o){return Bh(e,n,o)}):dg(e,n,a)}function dg(e,n,a){n.status="fulfilled",n.value=a,hg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,ug(e,a)))}function Bh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,hg(n),n=n.next;while(n!==o)}e.action=null}function hg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function pg(e,n){return n}function mg(e,n){if(ze){var a=hn.formState;if(a!==null){t:{var o=Se;if(ze){if(_n){e:{for(var u=_n,d=ua;u.nodeType!==8;){if(!d){u=null;break e}if(u=da(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){_n=da(u.nextSibling),o=u.data==="F!";break t}}sr(o)}o=!1}o&&(n=a[0])}}return a=Mi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pg,lastRenderedState:n},a.queue=o,a=Og.bind(null,Se,o),o.dispatch=a,o=Fh(!1),d=Xh.bind(null,Se,!1,o.queue),o=Mi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=xS.bind(null,Se,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function gg(e){var n=In();return _g(n,cn,e)}function _g(e,n,a){if(n=Ih(e,n,pg)[0],e=wu(Ds)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=tc(n)}catch(x){throw x===Ho?xu:x}else o=n;n=In();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,Wo(9,{destroy:void 0},yS.bind(null,u,a),null)),[o,d,e]}function yS(e,n){e.action=n}function vg(e){var n=In(),a=cn;if(a!==null)return _g(n,a,e);In(),n=n.memoizedState,a=In();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Wo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Ru(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function xg(){return In().memoizedState}function Du(e,n,a,o){var u=Mi();Se.flags|=e,u.memoizedState=Wo(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nu(e,n,a,o){var u=In();o=o===void 0?null:o;var d=u.memoizedState.inst;cn!==null&&o!==null&&wh(o,cn.memoizedState.deps)?u.memoizedState=Wo(n,d,a,o):(Se.flags|=e,u.memoizedState=Wo(1|n,d,a,o))}function yg(e,n){Du(8390656,8,e,n)}function zh(e,n){Nu(2048,8,e,n)}function SS(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Ru(),Se.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Sg(e){var n=In().memoizedState;return SS({ref:n,nextImpl:e}),function(){if((Qe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Mg(e,n){return Nu(4,2,e,n)}function Eg(e,n){return Nu(4,4,e,n)}function bg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tg(e,n,a){a=a!=null?a.concat([e]):null,Nu(4,4,bg.bind(null,n,e),a)}function Hh(){}function Ag(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&wh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Rg(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&wh(n,o[1]))return o[0];if(o=e(),eo){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o}function Gh(e,n,a){return a===void 0||(ws&1073741824)!==0&&(Pe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=C_(),Se.lanes|=e,pr|=e,a)}function Cg(e,n,a,o){return gn(a,n)?a:Vo.current!==null?(e=Gh(e,a,o),gn(e,n)||(Hn=!0),e):(ws&42)===0||(ws&1073741824)!==0&&(Pe&261930)===0?(Hn=!0,e.memoizedState=a):(e=C_(),Se.lanes|=e,pr|=e,n)}function wg(e,n,a,o,u){var d=P.p;P.p=d!==0&&8>d?d:8;var x=O.T,A={};O.T=A,Xh(e,!1,n,a);try{var H=u(),st=O.S;if(st!==null&&st(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xt=gS(H,o);ec(e,n,xt,ji(e))}else ec(e,n,o,ji(e))}catch(Mt){ec(e,n,{then:function(){},status:"rejected",reason:Mt},ji())}finally{P.p=d,x!==null&&A.types!==null&&(x.types=A.types),O.T=x}}function MS(){}function Vh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Dg(e).queue;wg(e,u,n,J,a===null?MS:function(){return Ng(e),a(o)})}function Dg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ng(e){var n=Dg(e);n.next===null&&(n=e.alternate.memoizedState),ec(e,n.next.queue,{},ji())}function kh(){return si(vc)}function Lg(){return In().memoizedState}function Ug(){return In().memoizedState}function ES(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ji();e=lr(a);var o=cr(n,e,a);o!==null&&(Ii(o,n,a),Kl(o,n,a)),n={cache:vh()},e.payload=n;return}n=n.return}}function bS(e,n,a){var o=ji();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Lu(e)?Ig(n,a):(a=oh(e,n,a,o),a!==null&&(Ii(a,e,o),Pg(a,n,o)))}function Og(e,n,a){var o=ji();ec(e,n,a,o)}function ec(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Ig(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,A=d(x,a);if(u.hasEagerState=!0,u.eagerState=A,gn(A,x))return du(e,n,u,0),hn===null&&fu(),!1}catch{}if(a=oh(e,n,u,o),a!==null)return Ii(a,e,o),Pg(a,n,o),!0}return!1}function Xh(e,n,a,o){if(o={lane:2,revertLane:Mp(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Lu(e)){if(n)throw Error(s(479))}else n=oh(e,a,o,2),n!==null&&Ii(n,e,2)}function Lu(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Ig(e,n){ko=Tu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Pg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ya(e,a)}}var nc={readContext:si,use:Cu,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useLayoutEffect:Ln,useInsertionEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useSyncExternalStore:Ln,useId:Ln,useHostTransitionStatus:Ln,useFormState:Ln,useActionState:Ln,useOptimistic:Ln,useMemoCache:Ln,useCacheRefresh:Ln};nc.useEffectEvent=Ln;var Fg={readContext:si,use:Cu,useCallback:function(e,n){return Mi().memoizedState=[e,n===void 0?null:n],e},useContext:si,useEffect:yg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Du(4194308,4,bg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Du(4194308,4,e,n)},useInsertionEffect:function(e,n){Du(4,2,e,n)},useMemo:function(e,n){var a=Mi();n=n===void 0?null:n;var o=e();if(eo){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Mi();if(a!==void 0){var u=a(n);if(eo){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=bS.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var n=Mi();return e={current:e},n.memoizedState=e},useState:function(e){e=Fh(e);var n=e.queue,a=Og.bind(null,Se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Hh,useDeferredValue:function(e,n){var a=Mi();return Gh(a,e,n)},useTransition:function(){var e=Fh(!1);return e=wg.bind(null,Se,e.queue,!0,!1),Mi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Se,u=Mi();if(ze){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),hn===null)throw Error(s(349));(Pe&127)!==0||ag(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,yg(rg.bind(null,o,d,e),[e]),o.flags|=2048,Wo(9,{destroy:void 0},sg.bind(null,o,d,a,n),null),a},useId:function(){var e=Mi(),n=hn.identifierPrefix;if(ze){var a=ss,o=as;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Au++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_S++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:kh,useFormState:mg,useActionState:mg,useOptimistic:function(e){var n=Mi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Xh.bind(null,Se,!0,a),a.dispatch=n,[e,n]},useMemoCache:Oh,useCacheRefresh:function(){return Mi().memoizedState=ES.bind(null,Se)},useEffectEvent:function(e){var n=Mi(),a={impl:e};return n.memoizedState=a,function(){if((Qe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Wh={readContext:si,use:Cu,useCallback:Ag,useContext:si,useEffect:zh,useImperativeHandle:Tg,useInsertionEffect:Mg,useLayoutEffect:Eg,useMemo:Rg,useReducer:wu,useRef:xg,useState:function(){return wu(Ds)},useDebugValue:Hh,useDeferredValue:function(e,n){var a=In();return Cg(a,cn.memoizedState,e,n)},useTransition:function(){var e=wu(Ds)[0],n=In().memoizedState;return[typeof e=="boolean"?e:tc(e),n]},useSyncExternalStore:ig,useId:Lg,useHostTransitionStatus:kh,useFormState:gg,useActionState:gg,useOptimistic:function(e,n){var a=In();return cg(a,cn,e,n)},useMemoCache:Oh,useCacheRefresh:Ug};Wh.useEffectEvent=Sg;var Bg={readContext:si,use:Cu,useCallback:Ag,useContext:si,useEffect:zh,useImperativeHandle:Tg,useInsertionEffect:Mg,useLayoutEffect:Eg,useMemo:Rg,useReducer:Ph,useRef:xg,useState:function(){return Ph(Ds)},useDebugValue:Hh,useDeferredValue:function(e,n){var a=In();return cn===null?Gh(a,e,n):Cg(a,cn.memoizedState,e,n)},useTransition:function(){var e=Ph(Ds)[0],n=In().memoizedState;return[typeof e=="boolean"?e:tc(e),n]},useSyncExternalStore:ig,useId:Lg,useHostTransitionStatus:kh,useFormState:vg,useActionState:vg,useOptimistic:function(e,n){var a=In();return cn!==null?cg(a,cn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Oh,useCacheRefresh:Ug};Bg.useEffectEvent=Sg;function Yh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var qh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ji(),u=lr(o);u.payload=n,a!=null&&(u.callback=a),n=cr(e,u,o),n!==null&&(Ii(n,e,o),Kl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ji(),u=lr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=cr(e,u,o),n!==null&&(Ii(n,e,o),Kl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ji(),o=lr(a);o.tag=2,n!=null&&(o.callback=n),n=cr(e,o,a),n!==null&&(Ii(n,e,a),Kl(n,e,a))}};function zg(e,n,a,o,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!_e(a,o)||!_e(u,d):!0}function Hg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&qh.enqueueReplaceState(n,n.state,null)}function no(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Gg(e){uu(e)}function Vg(e){console.error(e)}function kg(e){uu(e)}function Uu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Xg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function jh(e,n,a){return a=lr(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(e,n)},a}function Wg(e){return e=lr(e),e.tag=3,e}function Yg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Xg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Xg(n,a,o),typeof u!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function TS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Fo(n,a,u,!0),a=Xi.current,a!==null){switch(a.tag){case 31:case 13:return fa===null?Wu():a.alternate===null&&Un===0&&(Un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===yu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),xp(e,o,u)),!1;case 22:return a.flags|=65536,o===yu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),xp(e,o,u)),!1}throw Error(s(435,a.tag))}return xp(e,o,u),Wu(),!1}if(ze)return n=Xi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==hh&&(e=Error(s(422),{cause:o}),Wl(oa(e,a)))):(o!==hh&&(n=Error(s(423),{cause:o}),Wl(oa(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=oa(o,a),u=jh(e.stateNode,o,u),bh(e,u),Un!==4&&(Un=2)),!1;var d=Error(s(520),{cause:o});if(d=oa(d,a),uc===null?uc=[d]:uc.push(d),Un!==4&&(Un=2),n===null)return!0;o=oa(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=jh(a.stateNode,o,e),bh(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(mr===null||!mr.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Wg(u),Yg(u,e,a,o),bh(a,u),!1}a=a.return}while(a!==null);return!1}var Zh=Error(s(461)),Hn=!1;function ri(e,n,a,o){n.child=e===null?K0(n,null,a,o):to(n,e.child,a,o)}function qg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Kr(n),o=Dh(e,n,a,x,d,u),A=Nh(),e!==null&&!Hn?(Lh(e,n,u),Ns(e,n,u)):(ze&&A&&fh(n),n.flags|=1,ri(e,n,o,u),n.child)}function jg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!lh(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Zg(e,n,d,o,u)):(e=pu(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!ip(e,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:_e,a(x,o)&&e.ref===n.ref)return Ns(e,n,u)}return n.flags|=1,e=Ts(d,o),e.ref=n.ref,e.return=n,n.child=e}function Zg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(_e(d,o)&&e.ref===n.ref)if(Hn=!1,n.pendingProps=o=d,ip(e,u))(e.flags&131072)!==0&&(Hn=!0);else return n.lanes=e.lanes,Ns(e,n,u)}return Kh(e,n,a,o,u)}function Kg(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Qg(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vu(n,d!==null?d.cachePool:null),d!==null?$0(n,d):Ah(),tg(n);else return o=n.lanes=536870912,Qg(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(vu(n,d.cachePool),$0(n,d),fr(),n.memoizedState=null):(e!==null&&vu(n,null),Ah(),fr());return ri(e,n,u,a),n.child}function ic(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Qg(e,n,a,o,u){var d=yh();return d=d===null?null:{parent:Bn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&vu(n,null),Ah(),tg(n),e!==null&&Fo(e,n,o,!0),n.childLanes=u,null}function Ou(e,n){return n=Pu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Jg(e,n,a){return to(n,e.child,null,a),e=Ou(n,n.pendingProps),e.flags|=2,Wi(n),n.memoizedState=null,e}function AS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ze){if(o.mode==="hidden")return e=Ou(n,o),n.lanes=536870912,ic(null,e);if(Ch(n),(e=_n)?(e=uv(e,ua),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ir!==null?{id:as,overflow:ss}:null,retryLane:536870912,hydrationErrors:null},a=I0(e),a.return=n,n.child=a,ai=n,_n=null)):e=null,e===null)throw sr(n);return n.lanes=536870912,null}return Ou(n,o)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(Ch(n),u)if(n.flags&256)n.flags&=-257,n=Jg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Hn||Fo(e,n,a,!1),u=(a&e.childLanes)!==0,Hn||u){if(o=hn,o!==null&&(x=ms(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,Yr(e,x),Ii(o,e,x),Zh;Wu(),n=Jg(e,n,a)}else e=d.treeContext,_n=da(x.nextSibling),ai=n,ze=!0,ar=null,ua=!1,e!==null&&B0(n,e),n=Ou(n,o),n.flags|=4096;return n}return e=Ts(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Iu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Kh(e,n,a,o,u){return Kr(n),a=Dh(e,n,a,o,void 0,u),o=Nh(),e!==null&&!Hn?(Lh(e,n,u),Ns(e,n,u)):(ze&&o&&fh(n),n.flags|=1,ri(e,n,a,u),n.child)}function $g(e,n,a,o,u,d){return Kr(n),n.updateQueue=null,a=ng(n,o,a,u),eg(e),o=Nh(),e!==null&&!Hn?(Lh(e,n,d),Ns(e,n,d)):(ze&&o&&fh(n),n.flags|=1,ri(e,n,a,d),n.child)}function t_(e,n,a,o,u){if(Kr(n),n.stateNode===null){var d=Uo,x=a.contextType;typeof x=="object"&&x!==null&&(d=si(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=qh,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Mh(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?si(x):Uo,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Yh(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&qh.enqueueReplaceState(d,d.state,null),Jl(n,o,d,u),Ql(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,H=no(a,A);d.props=H;var st=d.context,xt=a.contextType;x=Uo,typeof xt=="object"&&xt!==null&&(x=si(xt));var Mt=a.getDerivedStateFromProps;xt=typeof Mt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,xt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||st!==x)&&Hg(n,d,o,x),or=!1;var lt=n.memoizedState;d.state=lt,Jl(n,o,d,u),Ql(),st=n.memoizedState,A||lt!==st||or?(typeof Mt=="function"&&(Yh(n,a,Mt,o),st=n.memoizedState),(H=or||zg(n,a,H,o,lt,st,x))?(xt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),d.props=o,d.state=st,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Eh(e,n),x=n.memoizedProps,xt=no(a,x),d.props=xt,Mt=n.pendingProps,lt=d.context,st=a.contextType,H=Uo,typeof st=="object"&&st!==null&&(H=si(st)),A=a.getDerivedStateFromProps,(st=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Mt||lt!==H)&&Hg(n,d,o,H),or=!1,lt=n.memoizedState,d.state=lt,Jl(n,o,d,u),Ql();var ht=n.memoizedState;x!==Mt||lt!==ht||or||e!==null&&e.dependencies!==null&&gu(e.dependencies)?(typeof A=="function"&&(Yh(n,a,A,o),ht=n.memoizedState),(xt=or||zg(n,a,xt,o,lt,ht,H)||e!==null&&e.dependencies!==null&&gu(e.dependencies))?(st||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ht,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ht,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),d.props=o,d.state=ht,d.context=H,o=xt):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Iu(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=to(n,e.child,null,u),n.child=to(n,null,a,u)):ri(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Ns(e,n,u),e}function e_(e,n,a,o){return jr(),n.flags|=256,ri(e,n,a,o),n.child}var Qh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jh(e){return{baseLanes:e,cachePool:X0()}}function $h(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=qi),e}function n_(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(u?ur(n):fr(),(e=_n)?(e=uv(e,ua),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ir!==null?{id:as,overflow:ss}:null,retryLane:536870912,hydrationErrors:null},a=I0(e),a.return=n,n.child=a,ai=n,_n=null)):e=null,e===null)throw sr(n);return Ip(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(fr(),u=n.mode,A=Pu({mode:"hidden",children:A},u),o=qr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Jh(a),o.childLanes=$h(e,x,a),n.memoizedState=Qh,ic(null,o)):(ur(n),tp(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(d)n.flags&256?(ur(n),n.flags&=-257,n=ep(e,n,a)):n.memoizedState!==null?(fr(),n.child=e.child,n.flags|=128,n=null):(fr(),A=o.fallback,u=n.mode,o=Pu({mode:"visible",children:o.children},u),A=qr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,to(n,e.child,null,a),o=n.child,o.memoizedState=Jh(a),o.childLanes=$h(e,x,a),n.memoizedState=Qh,n=ic(null,o));else if(ur(n),Ip(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var st=x.dgst;x=st,o=Error(s(419)),o.stack="",o.digest=x,Wl({value:o,source:null,stack:null}),n=ep(e,n,a)}else if(Hn||Fo(e,n,a,!1),x=(a&e.childLanes)!==0,Hn||x){if(x=hn,x!==null&&(o=ms(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Yr(e,o),Ii(x,e,o),Zh;Op(A)||Wu(),n=ep(e,n,a)}else Op(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,_n=da(A.nextSibling),ai=n,ze=!0,ar=null,ua=!1,e!==null&&B0(n,e),n=tp(n,o.children),n.flags|=4096);return n}return u?(fr(),A=o.fallback,u=n.mode,H=e.child,st=H.sibling,o=Ts(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,st!==null?A=Ts(st,A):(A=qr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,ic(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Jh(a):(u=A.cachePool,u!==null?(H=Bn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=X0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=$h(e,x,a),n.memoizedState=Qh,ic(e.child,o)):(ur(n),a=e.child,e=a.sibling,a=Ts(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function tp(e,n){return n=Pu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pu(e,n){return e=ki(22,e,null,n),e.lanes=0,e}function ep(e,n,a){return to(n,e.child,null,a),e=tp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function i_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),gh(e.return,n,a)}function np(e,n,a,o,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function a_(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=On.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,_t(On,x),ri(e,n,o,a),o=ze?Xl:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i_(e,a,n);else if(e.tag===19)i_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bu(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),np(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bu(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}np(n,!0,a,null,d,o);break;case"together":np(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ns(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),pr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ts(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ts(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ip(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gu(e)))}function RS(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),rr(n,Bn,e.memoizedState.cache),jr();break;case 27:case 5:te(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:rr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ch(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ur(n),n.flags|=128,null):(a&n.child.childLanes)!==0?n_(e,n,a):(ur(n),e=Ns(e,n,a),e!==null?e.sibling:null);ur(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Fo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return a_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(On,On.current),o)break;return null;case 22:return n.lanes=0,Kg(e,n,a,n.pendingProps);case 24:rr(n,Bn,e.memoizedState.cache)}return Ns(e,n,a)}function s_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Hn=!0;else{if(!ip(e,a)&&(n.flags&128)===0)return Hn=!1,RS(e,n,a);Hn=(e.flags&131072)!==0}else Hn=!1,ze&&(n.flags&1048576)!==0&&F0(n,Xl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Jr(n.elementType),n.type=e,typeof e=="function")lh(e)?(o=no(e,o),n.tag=1,n=t_(null,n,e,o,a)):(n.tag=0,n=Kh(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=qg(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=jg(null,n,e,o,a);break t}}throw n=ot(e)||e,Error(s(306,n,""))}}return n;case 0:return Kh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=no(o,n.pendingProps),t_(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Eh(e,n),Jl(n,o,null,a);var x=n.memoizedState;if(o=x.cache,rr(n,Bn,o),o!==d.cache&&_h(n,[Bn],a,!0),Ql(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=e_(e,n,o,a);break t}else if(o!==u){u=oa(Error(s(424)),n),Wl(u),n=e_(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_n=da(e.firstChild),ai=n,ze=!0,ar=null,ua=!0,a=K0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(jr(),o===u){n=Ns(e,n,a);break t}ri(e,n,o,a)}n=n.child}return n;case 26:return Iu(e,n),e===null?(a=gv(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,e=n.pendingProps,o=Ju(nt.current).createElement(a),o[Sn]=n,o[Mn]=e,oi(o,a,e),Y(o),n.stateNode=o):n.memoizedState=gv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&ze&&(o=n.stateNode=hv(n.type,n.pendingProps,nt.current),ai=n,ua=!0,u=_n,xr(n.type)?(Pp=u,_n=da(o.firstChild)):_n=u),ri(e,n,n.pendingProps.children,a),Iu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((u=o=_n)&&(o=iM(o,n.type,n.pendingProps,ua),o!==null?(n.stateNode=o,ai=n,_n=da(o.firstChild),ua=!1,u=!0):u=!1),u||sr(n)),te(n),u=n.type,d=n.pendingProps,x=e!==null?e.memoizedProps:null,o=d.children,Np(u,d)?o=null:x!==null&&Np(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Dh(e,n,vS,null,null,a),vc._currentValue=u),Iu(e,n),ri(e,n,o,a),n.child;case 6:return e===null&&ze&&((e=a=_n)&&(a=aM(a,n.pendingProps,ua),a!==null?(n.stateNode=a,ai=n,_n=null,e=!0):e=!1),e||sr(n)),null;case 13:return n_(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=to(n,null,o,a):ri(e,n,o,a),n.child;case 11:return qg(e,n,n.type,n.pendingProps,a);case 7:return ri(e,n,n.pendingProps,a),n.child;case 8:return ri(e,n,n.pendingProps.children,a),n.child;case 12:return ri(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,rr(n,n.type,o.value),ri(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Kr(n),u=si(u),o=o(u),n.flags|=1,ri(e,n,o,a),n.child;case 14:return jg(e,n,n.type,n.pendingProps,a);case 15:return Zg(e,n,n.type,n.pendingProps,a);case 19:return a_(e,n,a);case 31:return AS(e,n,a);case 22:return Kg(e,n,a,n.pendingProps);case 24:return Kr(n),o=si(Bn),e===null?(u=yh(),u===null&&(u=hn,d=vh(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Mh(n),rr(n,Bn,u)):((e.lanes&a)!==0&&(Eh(e,n),Jl(n,null,null,a),Ql()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),rr(n,Bn,o)):(o=d.cache,rr(n,Bn,o),o!==u.cache&&_h(n,[Bn],a,!0))),ri(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ls(e){e.flags|=4}function ap(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(L_())e.flags|=8192;else throw $r=yu,Sh}else e.flags&=-16777217}function r_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sv(n))if(L_())e.flags|=8192;else throw $r=yu,Sh}function Fu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,Zo|=n)}function ac(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function vn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function CS(e,n,a){var o=n.pendingProps;switch(dh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Cs(Bn),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Po(n)?Ls(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ph())),vn(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(Ls(n),d!==null?(vn(n),r_(n,d)):(vn(n),ap(n,u,null,o,a))):d?d!==e.memoizedState?(Ls(n),vn(n),r_(n,d)):(vn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ls(n),vn(n),ap(n,u,e,o,a)),null;case 27:if(ce(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ls(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}e=Ot.current,Po(n)?z0(n):(e=hv(u,o,a),n.stateNode=e,Ls(n))}return vn(n),null;case 5:if(ce(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ls(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}if(d=Ot.current,Po(n))z0(n);else{var x=Ju(nt.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[Sn]=n,d[Mn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;t:switch(oi(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ls(n)}}return vn(n),ap(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ls(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,Po(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ai,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||nv(e.nodeValue,a)),e||sr(n,!0)}else e=Ju(e).createTextNode(o),e[Sn]=n,n.stateNode=e}return vn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Po(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Sn]=n}else jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),e=!1}else a=ph(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Wi(n),n):(Wi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return vn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Po(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Sn]=n}else jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=ph(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wi(n),n):(Wi(n),null)}return Wi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fu(n,n.updateQueue),vn(n),null);case 4:return qt(),e===null&&Ap(n.stateNode.containerInfo),vn(n),null;case 10:return Cs(n.type),vn(n),null;case 19:if(q(On),o=n.memoizedState,o===null)return vn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)ac(o,!1);else{if(Un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=bu(e),d!==null){for(n.flags|=128,ac(o,!1),e=d.updateQueue,n.updateQueue=e,Fu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)O0(a,e),a=a.sibling;return _t(On,On.current&1|2),ze&&As(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&M()>Vu&&(n.flags|=128,u=!0,ac(o,!1),n.lanes=4194304)}else{if(!u)if(e=bu(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Fu(n,e),ac(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!ze)return vn(n),null}else 2*M()-o.renderingStartTime>Vu&&a!==536870912&&(n.flags|=128,u=!0,ac(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,a=On.current,_t(On,u?a&1|2:a&1),ze&&As(n,o.treeForkCount),e):(vn(n),null);case 22:case 23:return Wi(n),Rh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&Fu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(Qr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Cs(Bn),vn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function wS(e,n){switch(dh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Cs(Bn),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(Wi(n),n.alternate===null)throw Error(s(340));jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(On),null;case 4:return qt(),null;case 10:return Cs(n.type),null;case 22:case 23:return Wi(n),Rh(),e!==null&&q(Qr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Cs(Bn),null;case 25:return null;default:return null}}function o_(e,n){switch(dh(n),n.tag){case 3:Cs(Bn),qt();break;case 26:case 27:case 5:ce(n);break;case 4:qt();break;case 31:n.memoizedState!==null&&Wi(n);break;case 13:Wi(n);break;case 19:q(On);break;case 10:Cs(n.type);break;case 22:case 23:Wi(n),Rh(),e!==null&&q(Qr);break;case 24:Cs(Bn)}}function sc(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){on(n,n.return,A)}}function dr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var H=a,st=A;try{st()}catch(xt){on(u,H,xt)}}}o=o.next}while(o!==d)}}catch(xt){on(n,n.return,xt)}}function l_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{J0(n,a)}catch(o){on(e,e.return,o)}}}function c_(e,n,a){a.props=no(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){on(e,n,o)}}function rc(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){on(e,n,u)}}function rs(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){on(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){on(e,n,u)}else a.current=null}function u_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){on(e,e.return,u)}}function sp(e,n,a){try{var o=e.stateNode;QS(o,e.type,a,n),o[Mn]=n}catch(u){on(e,e.return,u)}}function f_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xr(e.type)||e.tag===4}function rp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||f_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function op(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=wn));else if(o!==4&&(o===27&&xr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(op(e,n,a),e=e.sibling;e!==null;)op(e,n,a),e=e.sibling}function Bu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&xr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bu(e,n,a),e=e.sibling;e!==null;)Bu(e,n,a),e=e.sibling}function d_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);oi(n,o,a),n[Sn]=e,n[Mn]=a}catch(d){on(e,e.return,d)}}var Us=!1,Gn=!1,lp=!1,h_=typeof WeakSet=="function"?WeakSet:Set,Zn=null;function DS(e,n){if(e=e.containerInfo,wp=rf,e=Gi(e),Ge(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var x=0,A=-1,H=-1,st=0,xt=0,Mt=e,lt=null;e:for(;;){for(var ht;Mt!==a||u!==0&&Mt.nodeType!==3||(A=x+u),Mt!==d||o!==0&&Mt.nodeType!==3||(H=x+o),Mt.nodeType===3&&(x+=Mt.nodeValue.length),(ht=Mt.firstChild)!==null;)lt=Mt,Mt=ht;for(;;){if(Mt===e)break e;if(lt===a&&++st===u&&(A=x),lt===d&&++xt===o&&(H=x),(ht=Mt.nextSibling)!==null)break;Mt=lt,lt=Mt.parentNode}Mt=ht}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dp={focusedElem:e,selectionRange:a},rf=!1,Zn=n;Zn!==null;)if(n=Zn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Zn=e;else for(;Zn!==null;){switch(n=Zn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var $t=no(a.type,u);e=o.getSnapshotBeforeUpdate($t,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(fe){on(a,a.return,fe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Up(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Up(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Zn=e;break}Zn=n.return}}function p_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Is(e,a),o&4&&sc(5,a);break;case 1:if(Is(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){on(a,a.return,x)}else{var u=no(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){on(a,a.return,x)}}o&64&&l_(a),o&512&&rc(a,a.return);break;case 3:if(Is(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{J0(e,n)}catch(x){on(a,a.return,x)}}break;case 27:n===null&&o&4&&d_(a);case 26:case 5:Is(e,a),n===null&&o&4&&u_(a),o&512&&rc(a,a.return);break;case 12:Is(e,a);break;case 31:Is(e,a),o&4&&__(e,a);break;case 13:Is(e,a),o&4&&v_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zS.bind(null,a),sM(e,a))));break;case 22:if(o=a.memoizedState!==null||Us,!o){n=n!==null&&n.memoizedState!==null||Gn,u=Us;var d=Gn;Us=o,(Gn=n)&&!d?Ps(e,a,(a.subtreeFlags&8772)!==0):Is(e,a),Us=u,Gn=d}break;case 30:break;default:Is(e,a)}}function m_(e){var n=e.alternate;n!==null&&(e.alternate=null,m_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yn=null,Ni=!1;function Os(e,n,a){for(a=a.child;a!==null;)g_(e,n,a),a=a.sibling}function g_(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:Gn||rs(a,n),Os(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Gn||rs(a,n);var o=yn,u=Ni;xr(a.type)&&(yn=a.stateNode,Ni=!1),Os(e,n,a),mc(a.stateNode),yn=o,Ni=u;break;case 5:Gn||rs(a,n);case 6:if(o=yn,u=Ni,yn=null,Os(e,n,a),yn=o,Ni=u,yn!==null)if(Ni)try{(yn.nodeType===9?yn.body:yn.nodeName==="HTML"?yn.ownerDocument.body:yn).removeChild(a.stateNode)}catch(d){on(a,n,d)}else try{yn.removeChild(a.stateNode)}catch(d){on(a,n,d)}break;case 18:yn!==null&&(Ni?(e=yn,lv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),il(e)):lv(yn,a.stateNode));break;case 4:o=yn,u=Ni,yn=a.stateNode.containerInfo,Ni=!0,Os(e,n,a),yn=o,Ni=u;break;case 0:case 11:case 14:case 15:dr(2,a,n),Gn||dr(4,a,n),Os(e,n,a);break;case 1:Gn||(rs(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&c_(a,n,o)),Os(e,n,a);break;case 21:Os(e,n,a);break;case 22:Gn=(o=Gn)||a.memoizedState!==null,Os(e,n,a),Gn=o;break;default:Os(e,n,a)}}function __(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(a){on(n,n.return,a)}}}function v_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(a){on(n,n.return,a)}}function NS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new h_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new h_),n;default:throw Error(s(435,e.tag))}}function zu(e,n){var a=NS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=HS.bind(null,e,o);o.then(u,u)}})}function Li(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(xr(A.type)){yn=A.stateNode,Ni=!1;break t}break;case 5:yn=A.stateNode,Ni=!1;break t;case 3:case 4:yn=A.stateNode.containerInfo,Ni=!0;break t}A=A.return}if(yn===null)throw Error(s(160));g_(d,x,u),yn=null,Ni=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)x_(n,e),n=n.sibling}var La=null;function x_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Li(n,e),Ui(e),o&4&&(dr(3,e,e.return),sc(3,e),dr(5,e,e.return));break;case 1:Li(n,e),Ui(e),o&512&&(Gn||a===null||rs(a,a.return)),o&64&&Us&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=La;if(Li(n,e),Ui(e),o&512&&(Gn||a===null||rs(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ja]||d[Sn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),oi(d,o,a),d[Sn]=e,Y(d),o=d;break t;case"link":var x=xv("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}d=u.createElement(o),oi(d,o,a),u.head.appendChild(d);break;case"meta":if(x=xv("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}d=u.createElement(o),oi(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[Sn]=e,Y(d),o=d}e.stateNode=o}else yv(u,e.type,e.stateNode);else e.stateNode=vv(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?yv(u,e.type,e.stateNode):vv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&sp(e,e.memoizedProps,a.memoizedProps)}break;case 27:Li(n,e),Ui(e),o&512&&(Gn||a===null||rs(a,a.return)),a!==null&&o&4&&sp(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Li(n,e),Ui(e),o&512&&(Gn||a===null||rs(a,a.return)),e.flags&32){u=e.stateNode;try{ti(u,"")}catch($t){on(e,e.return,$t)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,sp(e,u,a!==null?a.memoizedProps:u)),o&1024&&(lp=!0);break;case 6:if(Li(n,e),Ui(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($t){on(e,e.return,$t)}}break;case 3:if(ef=null,u=La,La=$u(n.containerInfo),Li(n,e),La=u,Ui(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{il(n.containerInfo)}catch($t){on(e,e.return,$t)}lp&&(lp=!1,y_(e));break;case 4:o=La,La=$u(e.stateNode.containerInfo),Li(n,e),Ui(e),La=o;break;case 12:Li(n,e),Ui(e);break;case 31:Li(n,e),Ui(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zu(e,o)));break;case 13:Li(n,e),Ui(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gu=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zu(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,st=Us,xt=Gn;if(Us=st||u,Gn=xt||H,Li(n,e),Gn=xt,Us=st,Ui(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||Us||Gn||io(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=H.stateNode;var Mt=H.memoizedProps.style,lt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch($t){on(H,H.return,$t)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch($t){on(H,H.return,$t)}}}else if(n.tag===18){if(a===null){H=n;try{var ht=H.stateNode;u?cv(ht,!0):cv(H.stateNode,!1)}catch($t){on(H,H.return,$t)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,zu(e,a))));break;case 19:Li(n,e),Ui(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zu(e,o)));break;case 30:break;case 21:break;default:Li(n,e),Ui(e)}}function Ui(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(f_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=rp(e);Bu(e,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(ti(x,""),a.flags&=-33);var A=rp(e);Bu(e,A,x);break;case 3:case 4:var H=a.stateNode.containerInfo,st=rp(e);op(e,st,H);break;default:throw Error(s(161))}}catch(xt){on(e,e.return,xt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function y_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;y_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Is(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)p_(e,n.alternate,n),n=n.sibling}function io(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:dr(4,n,n.return),io(n);break;case 1:rs(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&c_(n,n.return,a),io(n);break;case 27:mc(n.stateNode);case 26:case 5:rs(n,n.return),io(n);break;case 22:n.memoizedState===null&&io(n);break;case 30:io(n);break;default:io(n)}e=e.sibling}}function Ps(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ps(u,d,a),sc(4,d);break;case 1:if(Ps(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){on(o,o.return,st)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Q0(H[u],A)}catch(st){on(o,o.return,st)}}a&&x&64&&l_(d),rc(d,d.return);break;case 27:d_(d);case 26:case 5:Ps(u,d,a),a&&o===null&&x&4&&u_(d),rc(d,d.return);break;case 12:Ps(u,d,a);break;case 31:Ps(u,d,a),a&&x&4&&__(u,d);break;case 13:Ps(u,d,a),a&&x&4&&v_(u,d);break;case 22:d.memoizedState===null&&Ps(u,d,a),rc(d,d.return);break;case 30:break;default:Ps(u,d,a)}n=n.sibling}}function cp(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yl(a))}function up(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yl(e))}function Ua(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)S_(e,n,a,o),n=n.sibling}function S_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ua(e,n,a,o),u&2048&&sc(9,n);break;case 1:Ua(e,n,a,o);break;case 3:Ua(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yl(e)));break;case 12:if(u&2048){Ua(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){on(n,n.return,H)}}else Ua(e,n,a,o);break;case 31:Ua(e,n,a,o);break;case 13:Ua(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Ua(e,n,a,o):oc(e,n):d._visibility&2?Ua(e,n,a,o):(d._visibility|=2,Yo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&cp(x,n);break;case 24:Ua(e,n,a,o),u&2048&&up(n.alternate,n);break;default:Ua(e,n,a,o)}}function Yo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,x=n,A=a,H=o,st=x.flags;switch(x.tag){case 0:case 11:case 15:Yo(d,x,A,H,u),sc(8,x);break;case 23:break;case 22:var xt=x.stateNode;x.memoizedState!==null?xt._visibility&2?Yo(d,x,A,H,u):oc(d,x):(xt._visibility|=2,Yo(d,x,A,H,u)),u&&st&2048&&cp(x.alternate,x);break;case 24:Yo(d,x,A,H,u),u&&st&2048&&up(x.alternate,x);break;default:Yo(d,x,A,H,u)}n=n.sibling}}function oc(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:oc(a,o),u&2048&&cp(o.alternate,o);break;case 24:oc(a,o),u&2048&&up(o.alternate,o);break;default:oc(a,o)}n=n.sibling}}var lc=8192;function qo(e,n,a){if(e.subtreeFlags&lc)for(e=e.child;e!==null;)M_(e,n,a),e=e.sibling}function M_(e,n,a){switch(e.tag){case 26:qo(e,n,a),e.flags&lc&&e.memoizedState!==null&&_M(a,La,e.memoizedState,e.memoizedProps);break;case 5:qo(e,n,a);break;case 3:case 4:var o=La;La=$u(e.stateNode.containerInfo),qo(e,n,a),La=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=lc,lc=16777216,qo(e,n,a),lc=o):qo(e,n,a));break;default:qo(e,n,a)}}function E_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function cc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Zn=o,T_(o,e)}E_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)b_(e),e=e.sibling}function b_(e){switch(e.tag){case 0:case 11:case 15:cc(e),e.flags&2048&&dr(9,e,e.return);break;case 3:cc(e);break;case 12:cc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Hu(e)):cc(e);break;default:cc(e)}}function Hu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Zn=o,T_(o,e)}E_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:dr(8,n,n.return),Hu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hu(n));break;default:Hu(n)}e=e.sibling}}function T_(e,n){for(;Zn!==null;){var a=Zn;switch(a.tag){case 0:case 11:case 15:dr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Yl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Zn=o;else t:for(a=e;Zn!==null;){o=Zn;var u=o.sibling,d=o.return;if(m_(o),o===a){Zn=null;break t}if(u!==null){u.return=d,Zn=u;break t}Zn=d}}}var LS={getCacheForType:function(e){var n=si(Bn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return si(Bn).controller.signal}},US=typeof WeakMap=="function"?WeakMap:Map,Qe=0,hn=null,De=null,Pe=0,rn=0,Yi=null,hr=!1,jo=!1,fp=!1,Fs=0,Un=0,pr=0,ao=0,dp=0,qi=0,Zo=0,uc=null,Oi=null,hp=!1,Gu=0,A_=0,Vu=1/0,ku=null,mr=null,Xn=0,gr=null,Ko=null,Bs=0,pp=0,mp=null,R_=null,fc=0,gp=null;function ji(){return(Qe&2)!==0&&Pe!==0?Pe&-Pe:O.T!==null?Mp():Bi()}function C_(){if(qi===0)if((Pe&536870912)===0||ze){var e=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),qi=e}else qi=536870912;return e=Xi.current,e!==null&&(e.flags|=32),qi}function Ii(e,n,a){(e===hn&&(rn===2||rn===9)||e.cancelPendingCommit!==null)&&(Qo(e,0),_r(e,Pe,qi,!1)),Je(e,a),((Qe&2)===0||e!==hn)&&(e===hn&&((Qe&2)===0&&(ao|=a),Un===4&&_r(e,Pe,qi,!1)),os(e))}function w_(e,n,a){if((Qe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Vt(e,n),u=o?PS(e,n):vp(e,n,!0),d=o;do{if(u===0){jo&&!o&&_r(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!OS(a)){u=vp(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=uc;var H=A.current.memoizedState.isDehydrated;if(H&&(Qo(A,x).flags|=256),x=vp(A,x,!1),x!==2){if(fp&&!H){A.errorRecoveryDisabledLanes|=d,ao|=d,u=4;break t}d=Oi,Oi=u,d!==null&&(Oi===null?Oi=d:Oi.push.apply(Oi,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Qo(e,0),_r(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:_r(o,n,qi,!hr);break t;case 2:Oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Gu+300-M(),10<u)){if(_r(o,n,qi,!hr),ft(o,0,!0)!==0)break t;Bs=n,o.timeoutHandle=rv(D_.bind(null,o,a,Oi,ku,hp,n,qi,ao,Zo,hr,d,"Throttled",-0,0),u);break t}D_(o,a,Oi,ku,hp,n,qi,ao,Zo,hr,d,null,-0,0)}}break}while(!0);os(e)}function D_(e,n,a,o,u,d,x,A,H,st,xt,Mt,lt,ht){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wn},M_(n,d,Mt);var $t=(d&62914560)===d?Gu-M():(d&4194048)===d?A_-M():0;if($t=vM(Mt,$t),$t!==null){Bs=d,e.cancelPendingCommit=$t(B_.bind(null,e,n,d,a,o,u,x,A,H,xt,Mt,null,lt,ht)),_r(e,d,x,!st);return}}B_(e,n,d,a,o,u,x,A,H)}function OS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!gn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _r(e,n,a,o){n&=~dp,n&=~ao,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Bt(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&Wa(e,a,n)}function Xu(){return(Qe&6)===0?(dc(0),!1):!0}function _p(){if(De!==null){if(rn===0)var e=De.return;else e=De,Rs=Zr=null,Uh(e),Go=null,jl=0,e=De;for(;e!==null;)o_(e.alternate,e),e=e.return;De=null}}function Qo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,tM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Bs=0,_p(),hn=e,De=a=Ts(e.current,null),Pe=n,rn=0,Yi=null,hr=!1,jo=Vt(e,n),fp=!1,Zo=qi=dp=ao=pr=Un=0,Oi=uc=null,hp=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),d=1<<u;n|=e[u],o&=~d}return Fs=n,fu(),a}function N_(e,n){Se=null,O.H=nc,n===Ho||n===xu?(n=q0(),rn=3):n===Sh?(n=q0(),rn=4):rn=n===Zh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yi=n,De===null&&(Un=1,Uu(e,oa(n,e.current)))}function L_(){var e=Xi.current;return e===null?!0:(Pe&4194048)===Pe?fa===null:(Pe&62914560)===Pe||(Pe&536870912)!==0?e===fa:!1}function U_(){var e=O.H;return O.H=nc,e===null?nc:e}function O_(){var e=O.A;return O.A=LS,e}function Wu(){Un=4,hr||(Pe&4194048)!==Pe&&Xi.current!==null||(jo=!0),(pr&134217727)===0&&(ao&134217727)===0||hn===null||_r(hn,Pe,qi,!1)}function vp(e,n,a){var o=Qe;Qe|=2;var u=U_(),d=O_();(hn!==e||Pe!==n)&&(ku=null,Qo(e,n)),n=!1;var x=Un;t:do try{if(rn!==0&&De!==null){var A=De,H=Yi;switch(rn){case 8:_p(),x=6;break t;case 3:case 2:case 9:case 6:Xi.current===null&&(n=!0);var st=rn;if(rn=0,Yi=null,Jo(e,A,H,st),a&&jo){x=0;break t}break;default:st=rn,rn=0,Yi=null,Jo(e,A,H,st)}}IS(),x=Un;break}catch(xt){N_(e,xt)}while(!0);return n&&e.shellSuspendCounter++,Rs=Zr=null,Qe=o,O.H=u,O.A=d,De===null&&(hn=null,Pe=0,fu()),x}function IS(){for(;De!==null;)I_(De)}function PS(e,n){var a=Qe;Qe|=2;var o=U_(),u=O_();hn!==e||Pe!==n?(ku=null,Vu=M()+500,Qo(e,n)):jo=Vt(e,n);t:do try{if(rn!==0&&De!==null){n=De;var d=Yi;e:switch(rn){case 1:rn=0,Yi=null,Jo(e,n,d,1);break;case 2:case 9:if(W0(d)){rn=0,Yi=null,P_(n);break}n=function(){rn!==2&&rn!==9||hn!==e||(rn=7),os(e)},d.then(n,n);break t;case 3:rn=7;break t;case 4:rn=5;break t;case 7:W0(d)?(rn=0,Yi=null,P_(n)):(rn=0,Yi=null,Jo(e,n,d,7));break;case 5:var x=null;switch(De.tag){case 26:x=De.memoizedState;case 5:case 27:var A=De;if(x?Sv(x):A.stateNode.complete){rn=0,Yi=null;var H=A.sibling;if(H!==null)De=H;else{var st=A.return;st!==null?(De=st,Yu(st)):De=null}break e}}rn=0,Yi=null,Jo(e,n,d,5);break;case 6:rn=0,Yi=null,Jo(e,n,d,6);break;case 8:_p(),Un=6;break t;default:throw Error(s(462))}}FS();break}catch(xt){N_(e,xt)}while(!0);return Rs=Zr=null,O.H=o,O.A=u,Qe=a,De!==null?0:(hn=null,Pe=0,fu(),Un)}function FS(){for(;De!==null&&!K();)I_(De)}function I_(e){var n=s_(e.alternate,e,Fs);e.memoizedProps=e.pendingProps,n===null?Yu(e):De=n}function P_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=$g(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=$g(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:Uh(n);default:o_(a,n),n=De=O0(n,Fs),n=s_(a,n,Fs)}e.memoizedProps=e.pendingProps,n===null?Yu(e):De=n}function Jo(e,n,a,o){Rs=Zr=null,Uh(n),Go=null,jl=0;var u=n.return;try{if(TS(e,u,n,a,Pe)){Un=1,Uu(e,oa(a,e.current)),De=null;return}}catch(d){if(u!==null)throw De=u,d;Un=1,Uu(e,oa(a,e.current)),De=null;return}n.flags&32768?(ze||o===1?e=!0:jo||(Pe&536870912)!==0?e=!1:(hr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Xi.current,o!==null&&o.tag===13&&(o.flags|=16384))),F_(n,e)):Yu(n)}function Yu(e){var n=e;do{if((n.flags&32768)!==0){F_(n,hr);return}e=n.return;var a=CS(n.alternate,n,Fs);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=e}while(n!==null);Un===0&&(Un=5)}function F_(e,n){do{var a=wS(e.alternate,e);if(a!==null){a.flags&=32767,De=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){De=e;return}De=e=a}while(e!==null);Un=6,De=null}function B_(e,n,a,o,u,d,x,A,H){e.cancelPendingCommit=null;do qu();while(Xn!==0);if((Qe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=rh,Fi(e,a,d,x,A,H),e===hn&&(De=hn=null,Pe=0),Ko=n,gr=e,Bs=a,pp=d,mp=u,R_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,GS(ct,function(){return k_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=P.p,P.p=2,x=Qe,Qe|=4;try{DS(e,n,a)}finally{Qe=x,P.p=u,O.T=o}}Xn=1,z_(),H_(),G_()}}function z_(){if(Xn===1){Xn=0;var e=gr,n=Ko,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Qe;Qe|=4;try{x_(n,e);var d=Dp,x=Gi(e.containerInfo),A=d.focusedElem,H=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&Si(A.ownerDocument.documentElement,A)){if(H!==null&&Ge(A)){var st=H.start,xt=H.end;if(xt===void 0&&(xt=st),"selectionStart"in A)A.selectionStart=st,A.selectionEnd=Math.min(xt,A.value.length);else{var Mt=A.ownerDocument||document,lt=Mt&&Mt.defaultView||window;if(lt.getSelection){var ht=lt.getSelection(),$t=A.textContent.length,fe=Math.min(H.start,$t),fn=H.end===void 0?fe:Math.min(H.end,$t);!ht.extend&&fe>fn&&(x=fn,fn=fe,fe=x);var Q=jn(A,fe),W=jn(A,fn);if(Q&&W&&(ht.rangeCount!==1||ht.anchorNode!==Q.node||ht.anchorOffset!==Q.offset||ht.focusNode!==W.node||ht.focusOffset!==W.offset)){var it=Mt.createRange();it.setStart(Q.node,Q.offset),ht.removeAllRanges(),fe>fn?(ht.addRange(it),ht.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),ht.addRange(it))}}}}for(Mt=[],ht=A;ht=ht.parentNode;)ht.nodeType===1&&Mt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Mt.length;A++){var St=Mt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}rf=!!wp,Dp=wp=null}finally{Qe=u,P.p=o,O.T=a}}e.current=n,Xn=2}}function H_(){if(Xn===2){Xn=0;var e=gr,n=Ko,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Qe;Qe|=4;try{p_(e,n.alternate,n)}finally{Qe=u,P.p=o,O.T=a}}Xn=3}}function G_(){if(Xn===4||Xn===3){Xn=0,w();var e=gr,n=Ko,a=Bs,o=R_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xn=5:(Xn=0,Ko=gr=null,V_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(mr=null),gs(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=P.p,P.p=2,O.T=null;try{for(var d=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];d(A.value,{componentStack:A.stack})}}finally{O.T=n,P.p=u}}(Bs&3)!==0&&qu(),os(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===gp?fc++:(fc=0,gp=e):fc=0,dc(0)}}function V_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yl(n)))}function qu(){return z_(),H_(),G_(),k_()}function k_(){if(Xn!==5)return!1;var e=gr,n=pp;pp=0;var a=gs(Bs),o=O.T,u=P.p;try{P.p=32>a?32:a,O.T=null,a=mp,mp=null;var d=gr,x=Bs;if(Xn=0,Ko=gr=null,Bs=0,(Qe&6)!==0)throw Error(s(331));var A=Qe;if(Qe|=4,b_(d.current),S_(d,d.current,x,a),Qe=A,dc(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(bt,d)}catch{}return!0}finally{P.p=u,O.T=o,V_(e,n)}}function X_(e,n,a){n=oa(a,n),n=jh(e.stateNode,n,2),e=cr(e,n,2),e!==null&&(Je(e,2),os(e))}function on(e,n,a){if(e.tag===3)X_(e,e,a);else for(;n!==null;){if(n.tag===3){X_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(mr===null||!mr.has(o))){e=oa(a,e),a=Wg(2),o=cr(n,a,2),o!==null&&(Yg(a,o,n,e),Je(o,2),os(o));break}}n=n.return}}function xp(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new US;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(fp=!0,u.add(a),e=BS.bind(null,e,n,a),n.then(e,e))}function BS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,hn===e&&(Pe&a)===a&&(Un===4||Un===3&&(Pe&62914560)===Pe&&300>M()-Gu?(Qe&2)===0&&Qo(e,0):dp|=a,Zo===Pe&&(Zo=0)),os(e)}function W_(e,n){n===0&&(n=Oe()),e=Yr(e,n),e!==null&&(Je(e,n),os(e))}function zS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),W_(e,a)}function HS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),W_(e,a)}function GS(e,n){return Ue(e,n)}var ju=null,$o=null,yp=!1,Zu=!1,Sp=!1,vr=0;function os(e){e!==$o&&e.next===null&&($o===null?ju=$o=e:$o=$o.next=e),Zu=!0,yp||(yp=!0,kS())}function dc(e,n){if(!Sp&&Zu){Sp=!0;do for(var a=!1,o=ju;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Bt(42|e)+1)-1,d&=u&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Z_(o,d))}else d=Pe,d=ft(o,o===hn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Vt(o,d)||(a=!0,Z_(o,d));o=o.next}while(a);Sp=!1}}function VS(){Y_()}function Y_(){Zu=yp=!1;var e=0;vr!==0&&$S()&&(e=vr);for(var n=M(),a=null,o=ju;o!==null;){var u=o.next,d=q_(o,n);d===0?(o.next=null,a===null?ju=u:a.next=u,u===null&&($o=a)):(a=o,(e!==0||(d&3)!==0)&&(Zu=!0)),o=u}Xn!==0&&Xn!==5||dc(e),vr!==0&&(vr=0)}function q_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-Bt(d),A=1<<x,H=u[x];H===-1?((A&a)===0||(A&o)!==0)&&(u[x]=re(A,n)):H<=n&&(e.expiredLanes|=A),d&=~A}if(n=hn,a=Pe,a=ft(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(rn===2||rn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ye(o),gs(a)){case 2:case 8:a=pt;break;case 32:a=ct;break;case 268435456:a=dt;break;default:a=ct}return o=j_.bind(null,e),a=Ue(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ye(o),e.callbackPriority=2,e.callbackNode=null,2}function j_(e,n){if(Xn!==0&&Xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(qu()&&e.callbackNode!==a)return null;var o=Pe;return o=ft(e,e===hn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(w_(e,o,n),q_(e,M()),e.callbackNode!=null&&e.callbackNode===a?j_.bind(null,e):null)}function Z_(e,n){if(qu())return null;w_(e,n,!0)}function kS(){eM(function(){(Qe&6)!==0?Ue($,VS):Y_()})}function Mp(){if(vr===0){var e=Bo;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),vr=e}return vr}function K_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fi(""+e)}function Q_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function XS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=K_((u[Mn]||null).action),x=o.submitter;x&&(n=(n=x[Mn]||null)?K_(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var A=new Ss("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(vr!==0){var H=x?Q_(u,x):new FormData(u);Vh(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(A.preventDefault(),H=x?Q_(u,x):new FormData(u),Vh(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var Ep=0;Ep<sh.length;Ep++){var bp=sh[Ep],WS=bp.toLowerCase(),YS=bp[0].toUpperCase()+bp.slice(1);Na(WS,"on"+YS)}Na(C0,"onAnimationEnd"),Na(w0,"onAnimationIteration"),Na(D0,"onAnimationStart"),Na("dblclick","onDoubleClick"),Na("focusin","onFocus"),Na("focusout","onBlur"),Na(lS,"onTransitionRun"),Na(cS,"onTransitionStart"),Na(uS,"onTransitionCancel"),Na(N0,"onTransitionEnd"),It("onMouseEnter",["mouseout","mouseover"]),It("onMouseLeave",["mouseout","mouseover"]),It("onPointerEnter",["pointerout","pointerover"]),It("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hc));function J_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],H=A.instance,st=A.currentTarget;if(A=A.listener,H!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=st;try{d(u)}catch(xt){uu(xt)}u.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(A=o[x],H=A.instance,st=A.currentTarget,A=A.listener,H!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=st;try{d(u)}catch(xt){uu(xt)}u.currentTarget=null,d=H}}}}function Ne(e,n){var a=n[Ri];a===void 0&&(a=n[Ri]=new Set);var o=e+"__bubble";a.has(o)||($_(n,e,2,!1),a.add(o))}function Tp(e,n,a){var o=0;n&&(o|=4),$_(a,e,o,n)}var Ku="_reactListening"+Math.random().toString(36).slice(2);function Ap(e){if(!e[Ku]){e[Ku]=!0,ut.forEach(function(a){a!=="selectionchange"&&(qS.has(a)||Tp(a,!1,e),Tp(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ku]||(n[Ku]=!0,Tp("selectionchange",!1,n))}}function $_(e,n,a,o){switch(Cv(n)){case 2:var u=SM;break;case 8:u=MM;break;default:u=Gp}a=u.bind(null,n,a,e),u=void 0,!Fn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Rp(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Ma(A),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue t}A=A.parentNode}}o=o.return}To(function(){var st=d,xt=Ka(a),Mt=[];t:{var lt=L0.get(e);if(lt!==void 0){var ht=Ss,$t=e;switch(e){case"keypress":if(Ao(a)===0)break t;case"keydown":case"keyup":ht=nu;break;case"focusin":$t="focus",ht=Vr;break;case"focusout":$t="blur",ht=Vr;break;case"beforeblur":case"afterblur":ht=Vr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Co;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=er;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=au;break;case C0:case w0:case D0:ht=zl;break;case N0:ht=su;break;case"scroll":case"scrollend":ht=ah;break;case"wheel":ht=ru;break;case"copy":case"cut":case"paste":ht=Hl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=Gl;break;case"toggle":case"beforetoggle":ht=lu}var fe=(n&4)!==0,fn=!fe&&(e==="scroll"||e==="scrollend"),Q=fe?lt!==null?lt+"Capture":null:lt;fe=[];for(var W=st,it;W!==null;){var St=W;if(it=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||it===null||Q===null||(St=xs(W,Q),St!=null&&fe.push(pc(W,St,it))),fn)break;W=W.return}0<fe.length&&(lt=new ht(lt,$t,null,a,xt),Mt.push({event:lt,listeners:fe}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",lt&&a!==ba&&($t=a.relatedTarget||a.fromElement)&&(Ma($t)||$t[zi]))break t;if((ht||lt)&&(lt=xt.window===xt?xt:(lt=xt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ht?($t=a.relatedTarget||a.toElement,ht=st,$t=$t?Ma($t):null,$t!==null&&(fn=c($t),fe=$t.tag,$t!==fn||fe!==5&&fe!==27&&fe!==6)&&($t=null)):(ht=null,$t=st),ht!==$t)){if(fe=Co,St="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Gl,St="onPointerLeave",Q="onPointerEnter",W="pointer"),fn=ht==null?lt:Za(ht),it=$t==null?lt:Za($t),lt=new fe(St,W+"leave",ht,a,xt),lt.target=fn,lt.relatedTarget=it,St=null,Ma(xt)===st&&(fe=new fe(Q,W+"enter",$t,a,xt),fe.target=it,fe.relatedTarget=fn,St=fe),fn=St,ht&&$t)e:{for(fe=jS,Q=ht,W=$t,it=0,St=Q;St;St=fe(St))it++;St=0;for(var oe=W;oe;oe=fe(oe))St++;for(;0<it-St;)Q=fe(Q),it--;for(;0<St-it;)W=fe(W),St--;for(;it--;){if(Q===W||W!==null&&Q===W.alternate){fe=Q;break e}Q=fe(Q),W=fe(W)}fe=null}else fe=null;ht!==null&&tv(Mt,lt,ht,fe,!1),$t!==null&&fn!==null&&tv(Mt,fn,$t,fe,!0)}}t:{if(lt=st?Za(st):window,ht=lt.nodeName&&lt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&lt.type==="file")var je=Ta;else if(Ie(lt))if(Aa)je=yi;else{je=wa;var ae=Ca}else ht=lt.nodeName,!ht||ht.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&vs(st.elementType)&&(je=Ta):je=ns;if(je&&(je=je(e,st))){sn(Mt,je,a,xt);break t}ae&&ae(e,lt,st),e==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&Hi(lt,"number",lt.value)}switch(ae=st?Za(st):window,e){case"focusin":(Ie(ae)||ae.contentEditable==="true")&&(sa=ae,is=st,di=null);break;case"focusout":di=is=sa=null;break;case"mousedown":Vi=!0;break;case"contextmenu":case"mouseup":case"dragend":Vi=!1,nr(Mt,a,xt);break;case"selectionchange":if(Es)break;case"keydown":case"keyup":nr(Mt,a,xt)}var be;if(Ct)t:{switch(e){case"compositionstart":var Fe="onCompositionStart";break t;case"compositionend":Fe="onCompositionEnd";break t;case"compositionupdate":Fe="onCompositionUpdate";break t}Fe=void 0}else He?We(e,a)&&(Fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Fe="onCompositionStart");Fe&&(ee&&a.locale!=="ko"&&(He||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&He&&(be=Hr()):(Qa=xt,Pl="value"in Qa?Qa.value:Qa.textContent,He=!0)),ae=Qu(st,Fe),0<ae.length&&(Fe=new Ms(Fe,e,null,a,xt),Mt.push({event:Fe,listeners:ae}),be?Fe.data=be:(be=$e(a),be!==null&&(Fe.data=be)))),(be=ie?vi(e,a):xi(e,a))&&(Fe=Qu(st,"onBeforeInput"),0<Fe.length&&(ae=new Ms("onBeforeInput","beforeinput",null,a,xt),Mt.push({event:ae,listeners:Fe}),ae.data=be)),XS(Mt,e,st,a,xt)}J_(Mt,n)})}function pc(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Qu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=xs(e,a),u!=null&&o.unshift(pc(e,u,d)),u=xs(e,n),u!=null&&o.push(pc(e,u,d))),e.tag===3)return o;e=e.return}return[]}function jS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tv(e,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var A=a,H=A.alternate,st=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||st===null||(H=st,u?(st=xs(a,d),st!=null&&x.unshift(pc(a,st,H))):u||(st=xs(a,d),st!=null&&x.push(pc(a,st,H)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var ZS=/\r\n?/g,KS=/\u0000|\uFFFD/g;function ev(e){return(typeof e=="string"?e:""+e).replace(ZS,`
`).replace(KS,"")}function nv(e,n){return n=ev(n),ev(e)===n}function un(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(e,""+o);break;case"className":de(e,"class",o);break;case"tabIndex":de(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":de(e,a,o);break;case"style":ui(e,o,d);break;case"data":if(n!=="object"){de(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fi(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&un(e,n,"name",u.name,u,null),un(e,n,"formEncType",u.formEncType,u,null),un(e,n,"formMethod",u.formMethod,u,null),un(e,n,"formTarget",u.formTarget,u,null)):(un(e,n,"encType",u.encType,u,null),un(e,n,"method",u.method,u,null),un(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fi(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=wn);break;case"onScroll":o!=null&&Ne("scroll",e);break;case"onScrollEnd":o!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=fi(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),Qt(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Qt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zc.get(a)||a,Qt(e,a,o))}}function Cp(e,n,a,o,u,d){switch(a){case"style":ui(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ti(e,o):(typeof o=="number"||typeof o=="bigint")&&ti(e,""+o);break;case"onScroll":o!=null&&Ne("scroll",e);break;case"onScrollEnd":o!=null&&Ne("scrollend",e);break;case"onClick":o!=null&&(e.onclick=wn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[Mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Qt(e,a,o)}}}function oi(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:un(e,n,d,x,a,null)}}u&&un(e,n,"srcSet",a.srcSet,a,null),o&&un(e,n,"src",a.src,a,null);return;case"input":Ne("invalid",e);var A=d=x=u=null,H=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var xt=a[o];if(xt!=null)switch(o){case"name":u=xt;break;case"type":x=xt;break;case"checked":H=xt;break;case"defaultChecked":st=xt;break;case"value":d=xt;break;case"defaultValue":A=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(s(137,n));break;default:un(e,n,o,xt,a,null)}}ci(e,d,A,H,st,x,u,!1);return;case"select":Ne("invalid",e),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:un(e,n,u,A,a,null)}n=d,a=x,e.multiple=!!o,n!=null?_i(e,!!o,n,!1):a!=null&&_i(e,!!o,a,!0);return;case"textarea":Ne("invalid",e),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:un(e,n,x,A,a,null)}Rn(e,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":un(e,n,H,o,a,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(o=0;o<hc.length;o++)Ne(hc[o],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:un(e,n,st,o,a,null)}return;default:if(vs(n)){for(xt in a)a.hasOwnProperty(xt)&&(o=a[xt],o!==void 0&&Cp(e,n,xt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&un(e,n,A,o,a,null))}function QS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,A=null,H=null,st=null,xt=null;for(ht in a){var Mt=a[ht];if(a.hasOwnProperty(ht)&&Mt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":H=Mt;default:o.hasOwnProperty(ht)||un(e,n,ht,null,o,Mt)}}for(var lt in o){var ht=o[lt];if(Mt=a[lt],o.hasOwnProperty(lt)&&(ht!=null||Mt!=null))switch(lt){case"type":d=ht;break;case"name":u=ht;break;case"checked":st=ht;break;case"defaultChecked":xt=ht;break;case"value":x=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==Mt&&un(e,n,lt,ht,o,Mt)}}Pn(e,x,A,H,st,xt,d,u);return;case"select":ht=x=A=lt=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ht=H;default:o.hasOwnProperty(d)||un(e,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":lt=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==H&&un(e,n,u,d,o,H)}n=A,a=x,o=ht,lt!=null?_i(e,!!a,lt,!1):!!o!=!!a&&(n!=null?_i(e,!!a,n,!0):_i(e,!!a,a?[]:"",!1));return;case"textarea":ht=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:un(e,n,A,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":lt=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&un(e,n,x,u,o,d)}qe(e,lt,ht);return;case"option":for(var $t in a)lt=a[$t],a.hasOwnProperty($t)&&lt!=null&&!o.hasOwnProperty($t)&&($t==="selected"?e.selected=!1:un(e,n,$t,null,o,lt));for(H in o)lt=o[H],ht=a[H],o.hasOwnProperty(H)&&lt!==ht&&(lt!=null||ht!=null)&&(H==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":un(e,n,H,lt,o,ht));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)lt=a[fe],a.hasOwnProperty(fe)&&lt!=null&&!o.hasOwnProperty(fe)&&un(e,n,fe,null,o,lt);for(st in o)if(lt=o[st],ht=a[st],o.hasOwnProperty(st)&&lt!==ht&&(lt!=null||ht!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:un(e,n,st,lt,o,ht)}return;default:if(vs(n)){for(var fn in a)lt=a[fn],a.hasOwnProperty(fn)&&lt!==void 0&&!o.hasOwnProperty(fn)&&Cp(e,n,fn,void 0,o,lt);for(xt in o)lt=o[xt],ht=a[xt],!o.hasOwnProperty(xt)||lt===ht||lt===void 0&&ht===void 0||Cp(e,n,xt,lt,o,ht);return}}for(var Q in a)lt=a[Q],a.hasOwnProperty(Q)&&lt!=null&&!o.hasOwnProperty(Q)&&un(e,n,Q,null,o,lt);for(Mt in o)lt=o[Mt],ht=a[Mt],!o.hasOwnProperty(Mt)||lt===ht||lt==null&&ht==null||un(e,n,Mt,lt,o,ht)}function iv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,A=u.duration;if(d&&A&&iv(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],st=H.startTime;if(st>A)break;var xt=H.transferSize,Mt=H.initiatorType;xt&&iv(Mt)&&(H=H.responseEnd,x+=xt*(H<A?1:(A-st)/(H-st)))}if(--o,n+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wp=null,Dp=null;function Ju(e){return e.nodeType===9?e:e.ownerDocument}function av(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Np(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lp=null;function $S(){var e=window.event;return e&&e.type==="popstate"?e===Lp?!1:(Lp=e,!0):(Lp=null,!1)}var rv=typeof setTimeout=="function"?setTimeout:void 0,tM=typeof clearTimeout=="function"?clearTimeout:void 0,ov=typeof Promise=="function"?Promise:void 0,eM=typeof queueMicrotask=="function"?queueMicrotask:typeof ov<"u"?function(e){return ov.resolve(null).then(e).catch(nM)}:rv;function nM(e){setTimeout(function(){throw e})}function xr(e){return e==="head"}function lv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),il(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")mc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mc(a);for(var d=a.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[ja]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&mc(e.ownerDocument.body);a=u}while(a);il(n)}function cv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Up(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Up(a),Qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function iM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=da(e.nextSibling),e===null)break}return null}function aM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=da(e.nextSibling),e===null))return null;return e}function uv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=da(e.nextSibling),e===null))return null;return e}function Op(e){return e.data==="$?"||e.data==="$~"}function Ip(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function da(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Pp=null;function fv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return da(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function dv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function hv(e,n,a){switch(n=Ju(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function mc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qs(e)}var ha=new Map,pv=new Set;function $u(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zs=P.d;P.d={f:rM,r:oM,D:lM,C:cM,L:uM,m:fM,X:hM,S:dM,M:pM};function rM(){var e=zs.f(),n=Xu();return e||n}function oM(e){var n=Ea(e);n!==null&&n.tag===5&&n.type==="form"?Ng(n):zs.r(e)}var tl=typeof document>"u"?null:document;function mv(e,n,a){var o=tl;if(o&&typeof n=="string"&&n){var u=pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),pv.has(u)||(pv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),oi(n,"link",e),Y(n),o.head.appendChild(n)))}}function lM(e){zs.D(e),mv("dns-prefetch",e,null)}function cM(e,n){zs.C(e,n),mv("preconnect",e,n)}function uM(e,n,a){zs.L(e,n,a);var o=tl;if(o&&e&&n){var u='link[rel="preload"][as="'+pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pe(a.imageSizes)+'"]')):u+='[href="'+pe(e)+'"]';var d=u;switch(n){case"style":d=el(e);break;case"script":d=nl(e)}ha.has(d)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ha.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(gc(d))||n==="script"&&o.querySelector(_c(d))||(n=o.createElement("link"),oi(n,"link",e),Y(n),o.head.appendChild(n)))}}function fM(e,n){zs.m(e,n);var a=tl;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pe(o)+'"][href="'+pe(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=nl(e)}if(!ha.has(d)&&(e=v({rel:"modulepreload",href:e},n),ha.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_c(d)))return}o=a.createElement("link"),oi(o,"link",e),Y(o),a.head.appendChild(o)}}}function dM(e,n,a){zs.S(e,n,a);var o=tl;if(o&&e){var u=R(o).hoistableStyles,d=el(e);n=n||"default";var x=u.get(d);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(gc(d)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ha.get(d))&&Fp(e,a);var H=x=o.createElement("link");Y(H),oi(H,"link",e),H._p=new Promise(function(st,xt){H.onload=st,H.onerror=xt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,tf(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(d,x)}}}function hM(e,n){zs.X(e,n);var a=tl;if(a&&e){var o=R(a).hoistableScripts,u=nl(e),d=o.get(u);d||(d=a.querySelector(_c(u)),d||(e=v({src:e,async:!0},n),(n=ha.get(u))&&Bp(e,n),d=a.createElement("script"),Y(d),oi(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function pM(e,n){zs.M(e,n);var a=tl;if(a&&e){var o=R(a).hoistableScripts,u=nl(e),d=o.get(u);d||(d=a.querySelector(_c(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=ha.get(u))&&Bp(e,n),d=a.createElement("script"),Y(d),oi(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function gv(e,n,a,o){var u=(u=nt.current)?$u(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=el(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=el(a.href);var d=R(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(gc(e)))&&!d._p&&(x.instance=d,x.state.loading=5),ha.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ha.set(e,a),d||mM(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nl(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function el(e){return'href="'+pe(e)+'"'}function gc(e){return'link[rel="stylesheet"]['+e+"]"}function _v(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function mM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),oi(n,"link",a),Y(n),e.head.appendChild(n))}function nl(e){return'[src="'+pe(e)+'"]'}function _c(e){return"script[async]"+e}function vv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),oi(o,"style",u),tf(o,a.precedence,e),n.instance=o;case"stylesheet":u=el(a.href);var d=e.querySelector(gc(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=_v(a),(u=ha.get(u))&&Fp(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var x=d;return x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),oi(d,"link",o),n.state.loading|=4,tf(d,a.precedence,e),n.instance=d;case"script":return d=nl(a.src),(u=e.querySelector(_c(d)))?(n.instance=u,Y(u),u):(o=a,(u=ha.get(d))&&(o=v({},a),Bp(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),oi(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tf(o,a.precedence,e));return n.instance}function tf(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Fp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ef=null;function xv(e,n,a){if(ef===null){var o=new Map,u=ef=new Map;u.set(a,o)}else u=ef,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[ja]||d[Sn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(d):o.set(x,[d])}}return o}function yv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function gM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Sv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _M(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=el(o.href),d=n.querySelector(gc(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=nf.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Y(d);return}d=n.ownerDocument||n,o=_v(o),(u=ha.get(u))&&Fp(o,u),d=d.createElement("link"),Y(d);var x=d;x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),oi(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nf.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var zp=0;function vM(e,n){return e.stylesheets&&e.count===0&&sf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&sf(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&zp===0&&(zp=62500*JS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sf(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>zp?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function nf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var af=null;function sf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,af=new Map,n.forEach(xM,e),af=null,nf.call(e))}function xM(e,n){if(!(n.state.loading&4)){var a=af.get(e);if(a)var o=a.get(null);else{a=new Map,af.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=nf.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var vc={$$typeof:U,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function yM(e,n,a,o,u,d,x,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Mv(e,n,a,o,u,d,x,A,H,st,xt,Mt){return e=new yM(e,n,a,x,H,st,xt,Mt,A),n=1,d===!0&&(n|=24),d=ki(3,null,null,n),e.current=d,d.stateNode=e,n=vh(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Mh(d),e}function Ev(e){return e?(e=Uo,e):Uo}function bv(e,n,a,o,u,d){u=Ev(u),o.context===null?o.context=u:o.pendingContext=u,o=lr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=cr(e,o,n),a!==null&&(Ii(a,e,n),Kl(a,e,n))}function Tv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hp(e,n){Tv(e,n),(e=e.alternate)&&Tv(e,n)}function Av(e){if(e.tag===13||e.tag===31){var n=Yr(e,67108864);n!==null&&Ii(n,e,67108864),Hp(e,67108864)}}function Rv(e){if(e.tag===13||e.tag===31){var n=ji();n=Sa(n);var a=Yr(e,n);a!==null&&Ii(a,e,n),Hp(e,n)}}var rf=!0;function SM(e,n,a,o){var u=O.T;O.T=null;var d=P.p;try{P.p=2,Gp(e,n,a,o)}finally{P.p=d,O.T=u}}function MM(e,n,a,o){var u=O.T;O.T=null;var d=P.p;try{P.p=8,Gp(e,n,a,o)}finally{P.p=d,O.T=u}}function Gp(e,n,a,o){if(rf){var u=Vp(o);if(u===null)Rp(e,n,o,of,a),wv(e,o);else if(bM(u,e,n,a,o))o.stopPropagation();else if(wv(e,o),n&4&&-1<EM.indexOf(e)){for(;u!==null;){var d=Ea(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Dt(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var H=1<<31-Bt(x);A.entanglements[1]|=H,x&=~H}os(d),(Qe&6)===0&&(Vu=M()+500,dc(0))}}break;case 31:case 13:A=Yr(d,2),A!==null&&Ii(A,d,2),Xu(),Hp(d,2)}if(d=Vp(o),d===null&&Rp(e,n,o,of,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Rp(e,n,o,null,a)}}function Vp(e){return e=Ka(e),kp(e)}var of=null;function kp(e){if(of=null,e=Ma(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return of=e,null}function Cv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(V()){case $:return 2;case pt:return 8;case ct:case At:return 32;case dt:return 268435456;default:return 32}default:return 32}}var Xp=!1,yr=null,Sr=null,Mr=null,xc=new Map,yc=new Map,Er=[],EM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wv(e,n){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":xc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yc.delete(n.pointerId)}}function Sc(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ea(n),n!==null&&Av(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function bM(e,n,a,o,u){switch(n){case"focusin":return yr=Sc(yr,e,n,a,o,u),!0;case"dragenter":return Sr=Sc(Sr,e,n,a,o,u),!0;case"mouseover":return Mr=Sc(Mr,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return xc.set(d,Sc(xc.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,yc.set(d,Sc(yc.get(d)||null,e,n,a,o,u)),!0}return!1}function Dv(e){var n=Ma(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,_s(e.priority,function(){Rv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,_s(e.priority,function(){Rv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lf(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Vp(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ba=o,a.target.dispatchEvent(o),ba=null}else return n=Ea(a),n!==null&&Av(n),e.blockedOn=a,!1;n.shift()}return!0}function Nv(e,n,a){lf(e)&&a.delete(n)}function TM(){Xp=!1,yr!==null&&lf(yr)&&(yr=null),Sr!==null&&lf(Sr)&&(Sr=null),Mr!==null&&lf(Mr)&&(Mr=null),xc.forEach(Nv),yc.forEach(Nv)}function cf(e,n){e.blockedOn===n&&(e.blockedOn=null,Xp||(Xp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,TM)))}var uf=null;function Lv(e){uf!==e&&(uf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){uf===e&&(uf=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(kp(o||a)===null)continue;break}var d=Ea(a);d!==null&&(e.splice(n,3),n-=3,Vh(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function il(e){function n(H){return cf(H,e)}yr!==null&&cf(yr,e),Sr!==null&&cf(Sr,e),Mr!==null&&cf(Mr,e),xc.forEach(n),yc.forEach(n);for(var a=0;a<Er.length;a++){var o=Er[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Er.length&&(a=Er[0],a.blockedOn===null);)Dv(a),a.blockedOn===null&&Er.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[Mn]||null;if(typeof d=="function")x||Lv(a);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Mn]||null)A=x.formAction;else if(kp(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Lv(a)}}}function Uv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Wp(e){this._internalRoot=e}ff.prototype.render=Wp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ji();bv(a,o,e,n,null,null)},ff.prototype.unmount=Wp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;bv(e.current,2,null,e,null,null),Xu(),n[zi]=null}};function ff(e){this._internalRoot=e}ff.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Er.length&&n!==0&&n<Er[a].priority;a++);Er.splice(a,0,e),a===0&&Dv(e)}};var Ov=t.version;if(Ov!=="19.2.4")throw Error(s(527,Ov,"19.2.4"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var AM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var df=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!df.isDisabled&&df.supportsFiber)try{bt=df.inject(AM),Rt=df}catch{}}return Ec.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Gg,d=Vg,x=kg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Mv(e,1,!1,null,null,a,o,null,u,d,x,Uv),e[zi]=n.current,Ap(e),new Wp(n)},Ec.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=Gg,x=Vg,A=kg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Mv(e,1,!0,n,a??null,o,u,H,d,x,A,Uv),n.context=Ev(null),a=n.current,o=ji(),o=Sa(o),u=lr(o),u.callback=null,cr(a,u,o),a=o,n.current.lanes=a,Je(n,a),os(n),e[zi]=n.current,Ap(e),new ff(n)},Ec.version="19.2.4",Ec}var Xv;function PM(){if(Xv)return jp.exports;Xv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),jp.exports=IM(),jp.exports}var FM=PM();const Fd="183",jx=0,Fm=1,Zx=2,Kx=0,go=1,Qx=2,Sl=3,Zs=0,gi=1,kn=2,ds=0,_o=1,Bm=2,zm=3,Hm=4,Jx=5,Lr=100,$x=101,ty=102,ey=103,ny=104,iy=200,ay=201,sy=202,ry=203,qf=204,jf=205,oy=206,ly=207,cy=208,uy=209,fy=210,dy=211,hy=212,py=213,my=214,Zf=0,Kf=1,Qf=2,vo=3,Jf=4,$f=5,td=6,ed=7,Bd=0,gy=1,_y=2,Ga=0,$m=1,t0=2,e0=3,zd=4,n0=5,i0=6,a0=7,s0=300,Ir=301,xo=302,Gf=303,Vf=304,jc=306,Tl=1e3,fs=1001,nd=1002,Qn=1003,vy=1004,Ic=1005,Jn=1006,kf=1007,qs=1008,Pi=1009,r0=1010,o0=1011,Al=1012,Hd=1013,ka=1014,_a=1015,hs=1016,Gd=1017,Vd=1018,Rl=1020,l0=35902,c0=35899,u0=1021,f0=1022,va=1023,ps=1026,Ur=1027,kd=1028,Xd=1029,yo=1030,Wd=1031,Yd=1033,Fc=33776,Bc=33777,zc=33778,Hc=33779,id=35840,ad=35841,sd=35842,rd=35843,od=36196,ld=37492,cd=37496,ud=37488,fd=37489,dd=37490,hd=37491,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,xd=37813,yd=37814,Sd=37815,Md=37816,Ed=37817,bd=37818,Td=37819,Ad=37820,Rd=37821,Cd=36492,wd=36494,Dd=36495,Nd=36283,Ld=36284,Ud=36285,Od=36286,xy=3200,qd=0,yy=1,Ws="",Wn="srgb",So="srgb-linear",Xc="linear",en="srgb",ho=7680,Gm=519,Sy=512,My=513,Ey=514,jd=515,by=516,Ty=517,Zd=518,Ay=519,Vm=35044,km="300 es",Ha=2e3,Cl=2001;function BM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Id(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ry(){const r=Id("canvas");return r.style.display="block",r}const Wv={};function Xm(...r){const t="THREE."+r.shift();console.log(t,...r)}function Cy(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function he(...r){r=Cy(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function ke(...r){r=Cy(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Wc(...r){const t=r.join(" ");t in Wv||(Wv[t]=!0,he(...r))}function zM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const HM={[Zf]:Kf,[Qf]:td,[Jf]:ed,[vo]:$f,[Kf]:Zf,[td]:Qf,[ed]:Jf,[$f]:vo};class Mo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yv=1234567;const Gc=Math.PI/180,wl=180/Math.PI;function Ll(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(pi[r&255]+pi[r>>8&255]+pi[r>>16&255]+pi[r>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[i&63|128]+pi[i>>8&255]+"-"+pi[i>>16&255]+pi[i>>24&255]+pi[s&255]+pi[s>>8&255]+pi[s>>16&255]+pi[s>>24&255]).toLowerCase()}function Re(r,t,i){return Math.max(t,Math.min(i,r))}function d0(r,t){return(r%t+t)%t}function GM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function VM(r,t,i){return r!==t?(i-r)/(t-r):0}function Vc(r,t,i){return(1-i)*r+i*t}function kM(r,t,i,s){return Vc(r,t,1-Math.exp(-i*s))}function XM(r,t=1){return t-Math.abs(d0(r,t*2)-t)}function WM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function YM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function qM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function jM(r,t){return r+Math.random()*(t-r)}function ZM(r){return r*(.5-Math.random())}function KM(r){r!==void 0&&(Yv=r);let t=Yv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function QM(r){return r*Gc}function JM(r){return r*wl}function $M(r){return(r&r-1)===0&&r!==0}function tE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function eE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nE(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),S=c((s-t)/2),b=f((s-t)/2);switch(l){case"XYX":r.set(h*_,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*b,m*S,h*p);break;case"YXY":r.set(m*S,h*_,m*b,h*p);break;case"ZYZ":r.set(m*b,m*S,h*_,h*p);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function yl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ei(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bn={DEG2RAD:Gc,RAD2DEG:wl,generateUUID:Ll,clamp:Re,euclideanModulo:d0,mapLinear:GM,inverseLerp:VM,lerp:Vc,damp:kM,pingpong:XM,smoothstep:WM,smootherstep:YM,randInt:qM,randFloat:jM,randFloatSpread:ZM,seededRandom:KM,degToRad:QM,radToDeg:JM,isPowerOfTwo:$M,ceilPowerOfTwo:tE,floorPowerOfTwo:eE,setQuaternionFromProperEuler:nE,normalize:Ei,denormalize:yl};class we{constructor(t=0,i=0){we.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],S=c[f+1],b=c[f+2],D=c[f+3];if(v!==D||m!==g||p!==S||_!==b){let E=m*g+p*S+_*b+v*D;E<0&&(g=-g,S=-S,b=-b,D=-D,E=-E);let y=1-h;if(E<.9995){const C=Math.acos(E),U=Math.sin(C);y=Math.sin(y*C)/U,h=Math.sin(h*C)/U,m=m*y+g*h,p=p*y+S*h,_=_*y+b*h,v=v*y+D*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+b*h,v=v*y+D*h;const C=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=C,p*=C,_*=C,v*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],S=c[f+2],b=c[f+3];return t[i]=h*b+_*v+m*S-p*g,t[i+1]=m*b+_*g+p*v-h*S,t[i+2]=p*b+_*S+h*g-m*v,t[i+3]=_*b-h*v-m*g-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(c/2),g=m(s/2),S=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*b,this._y=p*S*v-g*_*b,this._z=p*_*b+g*S*v,this._w=p*_*v-g*S*b;break;case"YXZ":this._x=g*_*v+p*S*b,this._y=p*S*v-g*_*b,this._z=p*_*b-g*S*v,this._w=p*_*v+g*S*b;break;case"ZXY":this._x=g*_*v-p*S*b,this._y=p*S*v+g*_*b,this._z=p*_*b+g*S*v,this._w=p*_*v-g*S*b;break;case"ZYX":this._x=g*_*v-p*S*b,this._y=p*S*v+g*_*b,this._z=p*_*b-g*S*v,this._w=p*_*v+g*S*b;break;case"YZX":this._x=g*_*v+p*S*b,this._y=p*S*v+g*_*b,this._z=p*_*b-g*S*v,this._w=p*_*v-g*S*b;break;case"XZY":this._x=g*_*v-p*S*b,this._y=p*S*v-g*_*b,this._z=p*_*b+g*S*v,this._w=p*_*v+g*S*b;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>h&&s>v){const S=2*Math.sqrt(1+s-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-s-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(qv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(qv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),_=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-h*_,this.y=s+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Jp.copy(this).projectOnVector(t),this.sub(Jp)}reflect(t){return this.sub(Jp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jp=new j,qv=new Ks;class Me{constructor(t,i,s,l,c,f,h,m,p){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],S=s[5],b=s[8],D=l[0],E=l[3],y=l[6],C=l[1],U=l[4],N=l[7],F=l[2],B=l[5],z=l[8];return c[0]=f*D+h*C+m*F,c[3]=f*E+h*U+m*B,c[6]=f*y+h*N+m*z,c[1]=p*D+_*C+v*F,c[4]=p*E+_*U+v*B,c[7]=p*y+_*N+v*z,c[2]=g*D+S*C+b*F,c[5]=g*E+S*U+b*B,c[8]=g*y+S*N+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=_*f-h*p,g=h*m-_*c,S=p*c-f*m,b=i*v+s*g+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return t[0]=v*D,t[1]=(l*p-_*s)*D,t[2]=(h*s-l*f)*D,t[3]=g*D,t[4]=(_*i-l*m)*D,t[5]=(l*c-h*i)*D,t[6]=S*D,t[7]=(s*m-p*i)*D,t[8]=(f*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply($p.makeScale(t,i)),this}rotate(t){return this.premultiply($p.makeRotation(-t)),this}translate(t,i){return this.premultiply($p.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $p=new Me,jv=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zv=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iE(){const r={enabled:!0,workingColorSpace:So,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===en&&(l.r=js(l.r),l.g=js(l.g),l.b=js(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===en&&(l.r=bl(l.r),l.g=bl(l.g),l.b=bl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ws?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[So]:{primaries:t,whitePoint:s,transfer:Xc,toXYZ:jv,fromXYZ:Zv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:s,transfer:en,toXYZ:jv,fromXYZ:Zv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const Xe=iE();function js(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let al;class wy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{al===void 0&&(al=Id("canvas")),al.width=t.width,al.height=t.height;const l=al.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=al}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Id("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=js(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(js(i[s]/255)*255):i[s]=js(i[s]);return{data:i,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let aE=0;class Kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Ll(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(tm(l[f].image)):c.push(tm(l[f]))}else c=tm(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function tm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let sE=0;const em=new j;class li extends Mo{constructor(t=li.DEFAULT_IMAGE,i=li.DEFAULT_MAPPING,s=fs,l=fs,c=Jn,f=qs,h=va,m=Pi,p=li.DEFAULT_ANISOTROPY,_=Ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Ll(),this.name="",this.source=new Kd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(em).x}get height(){return this.source.getSize(em).y}get depth(){return this.source.getSize(em).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){he(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==s0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tl:t.x=t.x-Math.floor(t.x);break;case fs:t.x=t.x<0?0:1;break;case nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tl:t.y=t.y-Math.floor(t.y);break;case fs:t.y=t.y<0?0:1;break;case nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=s0;li.DEFAULT_ANISOTROPY=1;class Tn{constructor(t=0,i=0,s=0,l=1){Tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],b=m[9],D=m[2],E=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(b-E)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(b+E)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,N=(S+1)/2,F=(y+1)/2,B=(_+g)/4,z=(v+D)/4,T=(b+E)/4;return U>N&&U>F?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=B/s,c=z/s):N>F?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=B/l,c=T/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((E-b)*(E-b)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(E-b)/C,this.y=(v-D)/C,this.z=(g-_)/C,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this.w=Re(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this.w=Re(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dy extends Mo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Tn(0,0,t,i),this.scissorTest=!1,this.viewport=new Tn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new li(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Kd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Va extends Dy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class h0 extends li{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ny extends li{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(t,i,s,l,c,f,h,m,p,_,v,g,S,b,D,E){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,_,v,g,S,b,D,E)}set(t,i,s,l,c,f,h,m,p,_,v,g,S,b,D,E){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=b,y[11]=D,y[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/sl.setFromMatrixColumn(t,0).length(),c=1/sl.setFromMatrixColumn(t,1).length(),f=1/sl.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,S=f*v,b=h*_,D=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+b*p,i[5]=g-D*p,i[9]=-h*m,i[2]=D-g*p,i[6]=b+S*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,S=m*v,b=p*_,D=p*v;i[0]=g+D*h,i[4]=b*h-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=S*h-b,i[6]=D+g*h,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,S=m*v,b=p*_,D=p*v;i[0]=g-D*h,i[4]=-f*v,i[8]=b+S*h,i[1]=S+b*h,i[5]=f*_,i[9]=D-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,S=f*v,b=h*_,D=h*v;i[0]=m*_,i[4]=b*p-S,i[8]=g*p+D,i[1]=m*v,i[5]=D*p+g,i[9]=S*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,S=f*p,b=h*m,D=h*p;i[0]=m*_,i[4]=D-g*v,i[8]=b*v+S,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+b,i[10]=g-D*v}else if(t.order==="XZY"){const g=f*m,S=f*p,b=h*m,D=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+D,i[5]=f*_,i[9]=S*v-b,i[2]=b*v-S,i[6]=h*_,i[10]=D*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rE,t,oE)}lookAt(t,i,s){const l=this.elements;return Zi.subVectors(t,i),Zi.lengthSq()===0&&(Zi.z=1),Zi.normalize(),Tr.crossVectors(s,Zi),Tr.lengthSq()===0&&(Math.abs(s.z)===1?Zi.x+=1e-4:Zi.z+=1e-4,Zi.normalize(),Tr.crossVectors(s,Zi)),Tr.normalize(),hf.crossVectors(Zi,Tr),l[0]=Tr.x,l[4]=hf.x,l[8]=Zi.x,l[1]=Tr.y,l[5]=hf.y,l[9]=Zi.y,l[2]=Tr.z,l[6]=hf.z,l[10]=Zi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],S=s[13],b=s[2],D=s[6],E=s[10],y=s[14],C=s[3],U=s[7],N=s[11],F=s[15],B=l[0],z=l[4],T=l[8],L=l[12],mt=l[1],G=l[5],et=l[9],rt=l[13],ot=l[2],Z=l[6],O=l[10],P=l[14],J=l[3],gt=l[7],vt=l[11],I=l[15];return c[0]=f*B+h*mt+m*ot+p*J,c[4]=f*z+h*G+m*Z+p*gt,c[8]=f*T+h*et+m*O+p*vt,c[12]=f*L+h*rt+m*P+p*I,c[1]=_*B+v*mt+g*ot+S*J,c[5]=_*z+v*G+g*Z+S*gt,c[9]=_*T+v*et+g*O+S*vt,c[13]=_*L+v*rt+g*P+S*I,c[2]=b*B+D*mt+E*ot+y*J,c[6]=b*z+D*G+E*Z+y*gt,c[10]=b*T+D*et+E*O+y*vt,c[14]=b*L+D*rt+E*P+y*I,c[3]=C*B+U*mt+N*ot+F*J,c[7]=C*z+U*G+N*Z+F*gt,c[11]=C*T+U*et+N*O+F*vt,c[15]=C*L+U*rt+N*P+F*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],S=t[14],b=t[3],D=t[7],E=t[11],y=t[15],C=m*S-p*g,U=h*S-p*v,N=h*g-m*v,F=f*S-p*_,B=f*g-m*_,z=f*v-h*_;return i*(D*C-E*U+y*N)-s*(b*C-E*F+y*B)+l*(b*U-D*F+y*z)-c*(b*N-D*B+E*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],S=t[11],b=t[12],D=t[13],E=t[14],y=t[15],C=i*h-s*f,U=i*m-l*f,N=i*p-c*f,F=s*m-l*h,B=s*p-c*h,z=l*p-c*m,T=_*D-v*b,L=_*E-g*b,mt=_*y-S*b,G=v*E-g*D,et=v*y-S*D,rt=g*y-S*E,ot=C*rt-U*et+N*G+F*mt-B*L+z*T;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ot;return t[0]=(h*rt-m*et+p*G)*Z,t[1]=(l*et-s*rt-c*G)*Z,t[2]=(D*z-E*B+y*F)*Z,t[3]=(g*B-v*z-S*F)*Z,t[4]=(m*mt-f*rt-p*L)*Z,t[5]=(i*rt-l*mt+c*L)*Z,t[6]=(E*N-b*z-y*U)*Z,t[7]=(_*z-g*N+S*U)*Z,t[8]=(f*et-h*mt+p*T)*Z,t[9]=(s*mt-i*et-c*T)*Z,t[10]=(b*B-D*N+y*C)*Z,t[11]=(v*N-_*B-S*C)*Z,t[12]=(h*L-f*G-m*T)*Z,t[13]=(i*G-s*L+l*T)*Z,t[14]=(D*U-b*F-E*C)*Z,t[15]=(_*F-v*U+g*C)*Z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,S=c*_,b=c*v,D=f*_,E=f*v,y=h*v,C=m*p,U=m*_,N=m*v,F=s.x,B=s.y,z=s.z;return l[0]=(1-(D+y))*F,l[1]=(S+N)*F,l[2]=(b-U)*F,l[3]=0,l[4]=(S-N)*B,l[5]=(1-(g+y))*B,l[6]=(E+C)*B,l[7]=0,l[8]=(b+U)*z,l[9]=(E-C)*z,l[10]=(1-(g+D))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=sl.set(l[0],l[1],l[2]).length();const h=sl.set(l[4],l[5],l[6]).length(),m=sl.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Oa.copy(this);const p=1/f,_=1/h,v=1/m;return Oa.elements[0]*=p,Oa.elements[1]*=p,Oa.elements[2]*=p,Oa.elements[4]*=_,Oa.elements[5]*=_,Oa.elements[6]*=_,Oa.elements[8]*=v,Oa.elements[9]*=v,Oa.elements[10]*=v,i.setFromRotationMatrix(Oa),s.x=f,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,f,h=Ha,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),S=(s+l)/(s-l);let b,D;if(m)b=c/(f-c),D=f*c/(f-c);else if(h===Ha)b=-(f+c)/(f-c),D=-2*f*c/(f-c);else if(h===Cl)b=-f/(f-c),D=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Ha,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),S=-(s+l)/(s-l);let b,D;if(m)b=1/(f-c),D=f/(f-c);else if(h===Ha)b=-2/(f-c),D=-(f+c)/(f-c);else if(h===Cl)b=-1/(f-c),D=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const sl=new j,Oa=new dn,rE=new j(0,0,0),oE=new j(1,1,1),Tr=new j,hf=new j,Zi=new j,Kv=new dn,Qv=new Ks;class Qi{constructor(t=0,i=0,s=0,l=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Kv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Qv.setFromEuler(this),this.setFromQuaternion(Qv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class Qd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lE=0;const Jv=new j,rl=new Ks,Hs=new dn,pf=new j,bc=new j,cE=new j,uE=new Ks,$v=new j(1,0,0),tx=new j(0,1,0),ex=new j(0,0,1),nx={type:"added"},fE={type:"removed"},ol={type:"childadded",child:null},nm={type:"childremoved",child:null};class pn extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new j,i=new Qi,s=new Ks,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new Me}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return rl.setFromAxisAngle(t,i),this.quaternion.multiply(rl),this}rotateOnWorldAxis(t,i){return rl.setFromAxisAngle(t,i),this.quaternion.premultiply(rl),this}rotateX(t){return this.rotateOnAxis($v,t)}rotateY(t){return this.rotateOnAxis(tx,t)}rotateZ(t){return this.rotateOnAxis(ex,t)}translateOnAxis(t,i){return Jv.copy(t).applyQuaternion(this.quaternion),this.position.add(Jv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis($v,t)}translateY(t){return this.translateOnAxis(tx,t)}translateZ(t){return this.translateOnAxis(ex,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hs.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?pf.copy(t):pf.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),bc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hs.lookAt(bc,pf,this.up):Hs.lookAt(pf,bc,this.up),this.quaternion.setFromRotationMatrix(Hs),l&&(Hs.extractRotation(l.matrixWorld),rl.setFromRotationMatrix(Hs),this.quaternion.premultiply(rl.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ke("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nx),ol.child=t,this.dispatchEvent(ol),ol.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fE),nm.child=t,this.dispatchEvent(nm),nm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nx),ol.child=t,this.dispatchEvent(ol),ol.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bc,t,cE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bc,uE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),S=f(t.animations),b=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}pn.DEFAULT_UP=new j(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ml extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class Xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const D of t.hand.values()){const E=i.getJointPose(D,s),y=this._getHandJoint(p,D);E!==null&&(y.matrix.fromArray(E.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=E.radius),y.visible=E!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,b=.005;p.inputState.pinching&&g>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ml;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Ly={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},mf={h:0,s:0,l:0};function im(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ue{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Xe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Xe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Xe.workingColorSpace){if(t=d0(t,1),i=Re(i,0,1),s=Re(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=im(f,c,t+1/3),this.g=im(f,c,t),this.b=im(f,c,t-1/3)}return Xe.colorSpaceToWorking(this,l),this}setStyle(t,i=Wn){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Wn){const s=Ly[t.toLowerCase()];return s!==void 0?this.setHex(s,i):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}copyLinearToSRGB(t){return this.r=bl(t.r),this.g=bl(t.g),this.b=bl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Xe.workingToColorSpace(mi.copy(this),t),Math.round(Re(mi.r*255,0,255))*65536+Math.round(Re(mi.g*255,0,255))*256+Math.round(Re(mi.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Xe.workingColorSpace){Xe.workingToColorSpace(mi.copy(this),i);const s=mi.r,l=mi.g,c=mi.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Xe.workingColorSpace){return Xe.workingToColorSpace(mi.copy(this),i),t.r=mi.r,t.g=mi.g,t.b=mi.b,t}getStyle(t=Wn){Xe.workingToColorSpace(mi.copy(this),t);const i=mi.r,s=mi.g,l=mi.b;return t!==Wn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ar),this.setHSL(Ar.h+t,Ar.s+i,Ar.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ar),t.getHSL(mf);const s=Vc(Ar.h,mf.h,i),l=Vc(Ar.s,mf.s,i),c=Vc(Ar.l,mf.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mi=new ue;ue.NAMES=Ly;class Yc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ue(t),this.near=i,this.far=s}clone(){return new Yc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class p0 extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ia=new j,Gs=new j,am=new j,Vs=new j,ll=new j,cl=new j,ix=new j,sm=new j,rm=new j,om=new j,lm=new Tn,cm=new Tn,um=new Tn;class ga{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ia.subVectors(t,i),l.cross(Ia);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ia.subVectors(l,i),Gs.subVectors(s,i),am.subVectors(t,i);const f=Ia.dot(Ia),h=Ia.dot(Gs),m=Ia.dot(am),p=Gs.dot(Gs),_=Gs.dot(am),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,b=(f*_-h*m)*g;return c.set(1-S-b,b,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Vs)===null?!1:Vs.x>=0&&Vs.y>=0&&Vs.x+Vs.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,Vs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Vs.x),m.addScaledVector(f,Vs.y),m.addScaledVector(h,Vs.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return lm.setScalar(0),cm.setScalar(0),um.setScalar(0),lm.fromBufferAttribute(t,i),cm.fromBufferAttribute(t,s),um.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(lm,c.x),f.addScaledVector(cm,c.y),f.addScaledVector(um,c.z),f}static isFrontFacing(t,i,s,l){return Ia.subVectors(s,i),Gs.subVectors(t,i),Ia.cross(Gs).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ia.subVectors(this.c,this.b),Gs.subVectors(this.a,this.b),Ia.cross(Gs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ga.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ga.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ga.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ga.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ga.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;ll.subVectors(l,s),cl.subVectors(c,s),sm.subVectors(t,s);const m=ll.dot(sm),p=cl.dot(sm);if(m<=0&&p<=0)return i.copy(s);rm.subVectors(t,l);const _=ll.dot(rm),v=cl.dot(rm);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(ll,f);om.subVectors(t,c);const S=ll.dot(om),b=cl.dot(om);if(b>=0&&S<=b)return i.copy(c);const D=S*p-m*b;if(D<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(cl,h);const E=_*b-S*v;if(E<=0&&v-_>=0&&S-b>=0)return ix.subVectors(c,l),h=(v-_)/(v-_+(S-b)),i.copy(l).addScaledVector(ix,h);const y=1/(E+D+g);return f=D*y,h=g*y,i.copy(s).addScaledVector(ll,f).addScaledVector(cl,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Pr{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Pa.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Pa.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Pa.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Pa):Pa.fromBufferAttribute(c,f),Pa.applyMatrix4(t.matrixWorld),this.expandByPoint(Pa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gf.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gf.copy(s.boundingBox)),gf.applyMatrix4(t.matrixWorld),this.union(gf)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pa),Pa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tc),_f.subVectors(this.max,Tc),ul.subVectors(t.a,Tc),fl.subVectors(t.b,Tc),dl.subVectors(t.c,Tc),Rr.subVectors(fl,ul),Cr.subVectors(dl,fl),so.subVectors(ul,dl);let i=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-so.z,so.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,so.z,0,-so.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-so.y,so.x,0];return!fm(i,ul,fl,dl,_f)||(i=[1,0,0,0,1,0,0,0,1],!fm(i,ul,fl,dl,_f))?!1:(vf.crossVectors(Rr,Cr),i=[vf.x,vf.y,vf.z],fm(i,ul,fl,dl,_f))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ks[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ks[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ks[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ks[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ks[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ks[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ks[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ks[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ks),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ks=[new j,new j,new j,new j,new j,new j,new j,new j],Pa=new j,gf=new Pr,ul=new j,fl=new j,dl=new j,Rr=new j,Cr=new j,so=new j,Tc=new j,_f=new j,vf=new j,ro=new j;function fm(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ro.fromArray(r,c);const h=l.x*Math.abs(ro.x)+l.y*Math.abs(ro.y)+l.z*Math.abs(ro.z),m=t.dot(ro),p=i.dot(ro),_=s.dot(ro);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Vn=new j,xf=new we;let hE=0;class xa{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Vm,this.updateRanges=[],this.gpuType=_a,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xf.fromBufferAttribute(this,i),xf.applyMatrix3(t),this.setXY(i,xf.x,xf.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix3(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=yl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ei(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=yl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ei(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=yl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ei(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=yl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ei(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=yl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ei(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ei(i,this.array),s=Ei(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ei(i,this.array),s=Ei(s,this.array),l=Ei(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ei(i,this.array),s=Ei(s,this.array),l=Ei(l,this.array),c=Ei(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vm&&(t.usage=this.usage),t}}class m0 extends xa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class g0 extends xa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class $n extends xa{constructor(t,i,s){super(new Float32Array(t),i,s)}}const pE=new Pr,Ac=new j,dm=new j;class Ul{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):pE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ac.subVectors(t,this.center);const i=Ac.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ac,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ac.copy(t.center).add(dm)),this.expandByPoint(Ac.copy(t.center).sub(dm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let mE=0;const pa=new dn,hm=new pn,hl=new j,Ki=new Pr,Rc=new Pr,Kn=new j;class Ji extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(BM(t)?g0:m0)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Me().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pa.makeRotationFromQuaternion(t),this.applyMatrix4(pa),this}rotateX(t){return pa.makeRotationX(t),this.applyMatrix4(pa),this}rotateY(t){return pa.makeRotationY(t),this.applyMatrix4(pa),this}rotateZ(t){return pa.makeRotationZ(t),this.applyMatrix4(pa),this}translate(t,i,s){return pa.makeTranslation(t,i,s),this.applyMatrix4(pa),this}scale(t,i,s){return pa.makeScale(t,i,s),this.applyMatrix4(pa),this}lookAt(t){return hm.lookAt(t),hm.updateMatrix(),this.applyMatrix4(hm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hl).negate(),this.translate(hl.x,hl.y,hl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new $n(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ki.setFromBufferAttribute(c),this.morphTargetsRelative?(Kn.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(Kn),Kn.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(Kn)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(Ki.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Rc.setFromBufferAttribute(h),this.morphTargetsRelative?(Kn.addVectors(Ki.min,Rc.min),Ki.expandByPoint(Kn),Kn.addVectors(Ki.max,Rc.max),Ki.expandByPoint(Kn)):(Ki.expandByPoint(Rc.min),Ki.expandByPoint(Rc.max))}Ki.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Kn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Kn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Kn.fromBufferAttribute(h,p),m&&(hl.fromBufferAttribute(t,p),Kn.add(hl)),l=Math.max(l,s.distanceToSquared(Kn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xa(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new j,m[T]=new j;const p=new j,_=new j,v=new j,g=new we,S=new we,b=new we,D=new j,E=new j;function y(T,L,mt){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,L),v.fromBufferAttribute(s,mt),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,L),b.fromBufferAttribute(c,mt),_.sub(p),v.sub(p),S.sub(g),b.sub(g);const G=1/(S.x*b.y-b.x*S.y);isFinite(G)&&(D.copy(_).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(G),E.copy(v).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(G),h[T].add(D),h[L].add(D),h[mt].add(D),m[T].add(E),m[L].add(E),m[mt].add(E))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,L=C.length;T<L;++T){const mt=C[T],G=mt.start,et=mt.count;for(let rt=G,ot=G+et;rt<ot;rt+=3)y(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const U=new j,N=new j,F=new j,B=new j;function z(T){F.fromBufferAttribute(l,T),B.copy(F);const L=h[T];U.copy(L),U.sub(F.multiplyScalar(F.dot(L))).normalize(),N.crossVectors(B,L);const G=N.dot(m[T])<0?-1:1;f.setXYZW(T,U.x,U.y,U.z,G)}for(let T=0,L=C.length;T<L;++T){const mt=C[T],G=mt.start,et=mt.count;for(let rt=G,ot=G+et;rt<ot;rt+=3)z(t.getX(rt+0)),z(t.getX(rt+1)),z(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,f=new j,h=new j,m=new j,p=new j,_=new j,v=new j;if(t)for(let g=0,S=t.count;g<S;g+=3){const b=t.getX(g+0),D=t.getX(g+1),E=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,E),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,E),h.add(_),m.add(_),p.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(E,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Kn.fromBufferAttribute(t,i),Kn.normalize(),t.setXYZ(i,Kn.x,Kn.y,Kn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,b=0;for(let D=0,E=m.length;D<E;D++){h.isInterleavedBufferAttribute?S=m[D]*h.data.stride+h.offset:S=m[D]*_;for(let y=0;y<_;y++)g[b++]=p[S++]}return new xa(g,_,v)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ji,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=t(g,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let gE=0;class Eo extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Ll(),this.name="",this.type="Material",this.blending=_o,this.side=Zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=jf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){he(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(s.blending=this.blending),this.side!==Zs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==qf&&(s.blendSrc=this.blendSrc),this.blendDst!==jf&&(s.blendDst=this.blendDst),this.blendEquation!==Lr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Xs=new j,pm=new j,yf=new j,wr=new j,mm=new j,Sf=new j,gm=new j;class _0{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xs)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Xs.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Xs.copy(this.origin).addScaledVector(this.direction,i),Xs.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){pm.copy(t).add(i).multiplyScalar(.5),yf.copy(i).sub(t).normalize(),wr.copy(this.origin).sub(pm);const c=t.distanceTo(i)*.5,f=-this.direction.dot(yf),h=wr.dot(this.direction),m=-wr.dot(yf),p=wr.lengthSq(),_=Math.abs(1-f*f);let v,g,S,b;if(_>0)if(v=f*m-h,g=f*h-m,b=c*_,v>=0)if(g>=-b)if(g<=b){const D=1/_;v*=D,g*=D,S=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-b?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(pm).addScaledVector(yf,g),S}intersectSphere(t,i){Xs.subVectors(t.center,this.origin);const s=Xs.dot(this.direction),l=Xs.dot(Xs)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Xs)!==null}intersectTriangle(t,i,s,l,c){mm.subVectors(i,t),Sf.subVectors(s,t),gm.crossVectors(mm,Sf);let f=this.direction.dot(gm),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;wr.subVectors(this.origin,t);const m=h*this.direction.dot(Sf.crossVectors(wr,Sf));if(m<0)return null;const p=h*this.direction.dot(mm.cross(wr));if(p<0||m+p>f)return null;const _=-h*wr.dot(gm);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qc extends Eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ax=new dn,oo=new _0,Mf=new Ul,sx=new j,Ef=new j,bf=new j,Tf=new j,_m=new j,Af=new j,rx=new j,Rf=new j;class Ve extends pn{constructor(t=new Ji,i=new qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Af.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(_m.fromBufferAttribute(v,t),f?Af.addScaledVector(_m,_):Af.addScaledVector(_m.sub(i),_))}i.add(Af)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Mf.copy(s.boundingSphere),Mf.applyMatrix4(c),oo.copy(t.ray).recast(t.near),!(Mf.containsPoint(oo.origin)===!1&&(oo.intersectSphere(Mf,sx)===null||oo.origin.distanceToSquared(sx)>(t.far-t.near)**2))&&(ax.copy(c).invert(),oo.copy(t.ray).applyMatrix4(ax),!(s.boundingBox!==null&&oo.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,oo)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,D=g.length;b<D;b++){const E=g[b],y=f[E.materialIndex],C=Math.max(E.start,S.start),U=Math.min(h.count,Math.min(E.start+E.count,S.start+S.count));for(let N=C,F=U;N<F;N+=3){const B=h.getX(N),z=h.getX(N+1),T=h.getX(N+2);l=Cf(this,y,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),D=Math.min(h.count,S.start+S.count);for(let E=b,y=D;E<y;E+=3){const C=h.getX(E),U=h.getX(E+1),N=h.getX(E+2);l=Cf(this,f,t,s,p,_,v,C,U,N),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,D=g.length;b<D;b++){const E=g[b],y=f[E.materialIndex],C=Math.max(E.start,S.start),U=Math.min(m.count,Math.min(E.start+E.count,S.start+S.count));for(let N=C,F=U;N<F;N+=3){const B=N,z=N+1,T=N+2;l=Cf(this,y,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),D=Math.min(m.count,S.start+S.count);for(let E=b,y=D;E<y;E+=3){const C=E,U=E+1,N=E+2;l=Cf(this,f,t,s,p,_,v,C,U,N),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function _E(r,t,i,s,l,c,f,h){let m;if(t.side===gi?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===Zs,h),m===null)return null;Rf.copy(h),Rf.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Rf);return p<i.near||p>i.far?null:{distance:p,point:Rf.clone(),object:r}}function Cf(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Ef),r.getVertexPosition(m,bf),r.getVertexPosition(p,Tf);const _=_E(r,t,i,s,Ef,bf,Tf,rx);if(_){const v=new j;ga.getBarycoord(rx,Ef,bf,Tf,v),l&&(_.uv=ga.getInterpolatedAttribute(l,h,m,p,v,new we)),c&&(_.uv1=ga.getInterpolatedAttribute(c,h,m,p,v,new we)),f&&(_.normal=ga.getInterpolatedAttribute(f,h,m,p,v,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new j,materialIndex:0};ga.getNormal(Ef,bf,Tf,g.normal),_.face=g,_.barycoord=v}return _}class v0 extends li{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Qn,_=Qn,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wm extends xa{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pl=new dn,ox=new dn,wf=[],lx=new Pr,vE=new dn,Cc=new Ve,wc=new Ul;class Uy extends Ve{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Wm(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,vE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Pr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,pl),lx.copy(t.boundingBox).applyMatrix4(pl),this.boundingBox.union(lx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ul),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,pl),wc.copy(t.boundingSphere).applyMatrix4(pl),this.boundingSphere.union(wc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Cc.geometry=this.geometry,Cc.material=this.material,Cc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wc.copy(this.boundingSphere),wc.applyMatrix4(s),t.ray.intersectsSphere(wc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,pl),ox.multiplyMatrices(s,pl),Cc.matrixWorld=ox,Cc.raycast(t,wf);for(let f=0,h=wf.length;f<h;f++){const m=wf[f];m.instanceId=c,m.object=this,i.push(m)}wf.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Wm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new v0(new Float32Array(l*this.count),l,this.count,kd,_a));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=h,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vm=new j,xE=new j,yE=new Me;class Nr{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=vm.subVectors(s,i).cross(xE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(vm),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||yE.getNormalMatrix(t),l=this.coplanarPoint(vm).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lo=new Ul,SE=new we(.5,.5),Df=new j;class Jd{constructor(t=new Nr,i=new Nr,s=new Nr,l=new Nr,c=new Nr,f=new Nr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ha,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],b=c[8],D=c[9],E=c[10],y=c[11],C=c[12],U=c[13],N=c[14],F=c[15];if(l[0].setComponents(p-f,S-_,y-b,F-C).normalize(),l[1].setComponents(p+f,S+_,y+b,F+C).normalize(),l[2].setComponents(p+h,S+v,y+D,F+U).normalize(),l[3].setComponents(p-h,S-v,y-D,F-U).normalize(),s)l[4].setComponents(m,g,E,N).normalize(),l[5].setComponents(p-m,S-g,y-E,F-N).normalize();else if(l[4].setComponents(p-m,S-g,y-E,F-N).normalize(),i===Ha)l[5].setComponents(p+m,S+g,y+E,F+N).normalize();else if(i===Cl)l[5].setComponents(m,g,E,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lo)}intersectsSprite(t){lo.center.set(0,0,0);const i=SE.distanceTo(t.center);return lo.radius=.7071067811865476+i,lo.applyMatrix4(t.matrixWorld),this.intersectsSphere(lo)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Df.x=l.normal.x>0?t.max.x:t.min.x,Df.y=l.normal.y>0?t.max.y:t.min.y,Df.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Df)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class x0 extends li{constructor(t=[],i=Ir,s,l,c,f,h,m,p,_){super(t,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class El extends li{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dl extends li{constructor(t,i,s=ka,l,c,f,h=Qn,m=Qn,p,_=ps,v=1){if(_!==ps&&_!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Oy extends Dl{constructor(t,i=ka,s=Ir,l,c,f=Qn,h=Qn,m,p=ps){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class y0 extends li{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fr extends Ji{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new $n(p,3)),this.setAttribute("normal",new $n(_,3)),this.setAttribute("uv",new $n(v,2));function b(D,E,y,C,U,N,F,B,z,T,L){const mt=N/z,G=F/T,et=N/2,rt=F/2,ot=B/2,Z=z+1,O=T+1;let P=0,J=0;const gt=new j;for(let vt=0;vt<O;vt++){const I=vt*G-rt;for(let q=0;q<Z;q++){const _t=q*mt-et;gt[D]=_t*C,gt[E]=I*U,gt[y]=ot,p.push(gt.x,gt.y,gt.z),gt[D]=0,gt[E]=0,gt[y]=B>0?1:-1,_.push(gt.x,gt.y,gt.z),v.push(q/z),v.push(1-vt/T),P+=1}}for(let vt=0;vt<T;vt++)for(let I=0;I<z;I++){const q=g+I+Z*vt,_t=g+I+Z*(vt+1),Ot=g+(I+1)+Z*(vt+1),Yt=g+(I+1)+Z*vt;m.push(q,_t,Yt),m.push(_t,Ot,Yt),J+=6}h.addGroup(S,J,L),S+=J,g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Iy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,S=(f-_)/g;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new we:new j);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new j,l=[],c=[],f=[],h=new j,m=new dn;for(let S=0;S<=t;S++){const b=S/t;l[S]=this.getTangentAt(b,new j)}c[0]=new j,f[0]=new j;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Re(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,b))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(Re(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],S*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function S0(){let r=0,t=0,i=0,s=0;function l(c,f,h,m){r=c,t=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,_,v){let g=(f-c)/p-(h-c)/(p+_)+(h-f)/_,S=(h-f)/_-(m-f)/(_+v)+(m-h)/v;g*=_,S*=_,l(f,h,g,S)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const Nf=new j,xm=new S0,ym=new S0,Sm=new S0;class Py extends Iy{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new j){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=l[(h-1)%c]:(Nf.subVectors(l[0],l[1]).add(l[0]),p=Nf);const v=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(Nf.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Nf),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(v),S),D=Math.pow(v.distanceToSquared(g),S),E=Math.pow(g.distanceToSquared(_),S);D<1e-4&&(D=1),b<1e-4&&(b=D),E<1e-4&&(E=D),xm.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,b,D,E),ym.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,b,D,E),Sm.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,b,D,E)}else this.curveType==="catmullrom"&&(xm.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),ym.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),Sm.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(xm.calc(m),ym.calc(m),Sm.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new j().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class us extends Ji{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=t/h,g=i/m,S=[],b=[],D=[],E=[];for(let y=0;y<_;y++){const C=y*g-f;for(let U=0;U<p;U++){const N=U*v-c;b.push(N,-C,0),D.push(0,0,1),E.push(U/h),E.push(1-y/m)}}for(let y=0;y<m;y++)for(let C=0;C<h;C++){const U=C+p*y,N=C+p*(y+1),F=C+1+p*(y+1),B=C+1+p*y;S.push(U,N,B),S.push(N,F,B)}this.setIndex(S),this.setAttribute("position",new $n(b,3)),this.setAttribute("normal",new $n(D,3)),this.setAttribute("uv",new $n(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}class $d extends Ji{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,S=new j,b=new we;for(let D=0;D<=l;D++){for(let E=0;E<=s;E++){const y=c+E/s*f;S.x=v*Math.cos(y),S.y=v*Math.sin(y),m.push(S.x,S.y,S.z),p.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,_.push(b.x,b.y)}v+=g}for(let D=0;D<l;D++){const E=D*(s+1);for(let y=0;y<s;y++){const C=y+E,U=C,N=C+s+1,F=C+s+2,B=C+1;h.push(U,N,B),h.push(N,F,B)}}this.setIndex(h),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(p,3)),this.setAttribute("uv",new $n(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $d(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class th extends Ji{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const _=[],v=new j,g=new j,S=[],b=[],D=[],E=[];for(let y=0;y<=s;y++){const C=[],U=y/s;let N=0;y===0&&f===0?N=.5/i:y===s&&m===Math.PI&&(N=-.5/i);for(let F=0;F<=i;F++){const B=F/i;v.x=-t*Math.cos(l+B*c)*Math.sin(f+U*h),v.y=t*Math.cos(f+U*h),v.z=t*Math.sin(l+B*c)*Math.sin(f+U*h),b.push(v.x,v.y,v.z),g.copy(v).normalize(),D.push(g.x,g.y,g.z),E.push(B+N,1-U),C.push(p++)}_.push(C)}for(let y=0;y<s;y++)for(let C=0;C<i;C++){const U=_[y][C+1],N=_[y][C],F=_[y+1][C],B=_[y+1][C+1];(y!==0||f>0)&&S.push(U,N,B),(y!==s-1||m<Math.PI)&&S.push(N,F,B)}this.setIndex(S),this.setAttribute("position",new $n(b,3)),this.setAttribute("normal",new $n(D,3)),this.setAttribute("uv",new $n(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new th(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Nl(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function bi(r){const t={};for(let i=0;i<r.length;i++){const s=Nl(r[i]);for(const l in s)t[l]=s[l]}return t}function ME(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Fy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xe.workingColorSpace}const By={clone:Nl,merge:bi};var EE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nl(t.uniforms),this.uniformsGroups=ME(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class zy extends Xa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ys extends Eo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class po extends Ys{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Hy extends Eo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Bd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gy extends Eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vy extends Eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ol extends pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class ky extends Ol{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Mm=new dn,cx=new j,ux=new j;class M0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jd,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;cx.setFromMatrixPosition(t.matrixWorld),i.position.copy(cx),ux.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ux),i.updateMatrixWorld(),Mm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mm,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Cl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Mm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lf=new j,Uf=new Ks,ls=new j;class E0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ha,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lf,Uf,ls),ls.x===1&&ls.y===1&&ls.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lf,Uf,ls.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Lf,Uf,ls),ls.x===1&&ls.y===1&&ls.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lf,Uf,ls.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new j,fx=new we,dx=new we;class Ti extends E0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=wl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-t/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Dr.x,Dr.y).multiplyScalar(-t/Dr.z)}getViewSize(t,i){return this.getViewBounds(t,fx,dx),i.subVectors(dx,fx)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Gc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class TE extends M0{constructor(){super(new Ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=wl*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Wf extends Ol{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new TE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class AE extends M0{constructor(){super(new Ti(90,1,.5,500)),this.isPointLightShadow=!0}}class kc extends Ol{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new AE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class eh extends E0{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class RE extends M0{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ym extends Ol{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new RE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class Xy extends Ol{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const ml=-90,gl=1;class Wy extends pn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(ml,gl,t,i);l.layers=this.layers,this.add(l);const c=new Ti(ml,gl,t,i);c.layers=this.layers,this.add(c);const f=new Ti(ml,gl,t,i);f.layers=this.layers,this.add(f);const h=new Ti(ml,gl,t,i);h.layers=this.layers,this.add(h);const m=new Ti(ml,gl,t,i);m.layers=this.layers,this.add(m);const p=new Ti(ml,gl,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Ha)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Cl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let E=!1;t.isWebGLRenderer===!0?E=t.state.buffers.depth.getReversed():E=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,S),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Yy extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const hx=new dn;class qy{constructor(t,i,s=0,l=1/0){this.ray=new _0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Qd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):ke("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return hx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hx),this}intersectObject(t,i=!0,s=[]){return qm(t,this,s,i),s.sort(px),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)qm(t[l],this,s,i);return s.sort(px),s}}function px(r,t){return r.distance-t.distance}function qm(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)qm(c[f],t,i,!0)}}class jy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,he("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function mx(r,t,i,s){const l=CE(s);switch(i){case u0:return r*t;case kd:return r*t/l.components*l.byteLength;case Xd:return r*t/l.components*l.byteLength;case yo:return r*t*2/l.components*l.byteLength;case Wd:return r*t*2/l.components*l.byteLength;case f0:return r*t*3/l.components*l.byteLength;case va:return r*t*4/l.components*l.byteLength;case Yd:return r*t*4/l.components*l.byteLength;case Fc:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zc:case Hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ad:case rd:return Math.max(r,16)*Math.max(t,8)/4;case id:case sd:return Math.max(r,8)*Math.max(t,8)/2;case od:case ld:case ud:case fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cd:case dd:case hd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case _d:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case vd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case xd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case yd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Md:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Td:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ad:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cd:case wd:case Dd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Nd:case Ld:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ud:case Od:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CE(r){switch(r){case Pi:case r0:return{byteLength:1,components:1};case Al:case o0:case hs:return{byteLength:2,components:1};case Gd:case Vd:return{byteLength:2,components:4};case ka:case Hd:case _a:return{byteLength:4,components:1};case l0:case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);function Zy(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function wE(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,b)=>S.start-b.start);let g=0;for(let S=1;S<v.length;S++){const b=v[g],D=v[S];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++g,v[g]=D)}v.length=g+1;for(let S=0,b=v.length;S<b;S++){const D=v[S];r.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var DE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NE=`#ifdef USE_ALPHAHASH
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
#endif`,LE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PE=`#ifdef USE_AOMAP
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
#endif`,FE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BE=`#ifdef USE_BATCHING
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
#endif`,zE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kE=`#ifdef USE_IRIDESCENCE
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
#endif`,XE=`#ifdef USE_BUMPMAP
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
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,KE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$E=`#define PI 3.141592653589793
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
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eb=`vec3 transformedNormal = objectNormal;
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
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lb=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_b=`#ifdef USE_GRADIENTMAP
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
}`,vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
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
#endif`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rb=`PhysicalMaterial material;
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
#endif`,Cb=`uniform sampler2D dfgLUT;
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
}`,wb=`
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zb=`#if defined( USE_POINTS_UV )
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
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
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
#endif`,Yb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
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
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p1=`float getShadowMask() {
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
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,_1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v1=`#ifdef USE_SKINNING
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
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D1=`uniform sampler2D t2D;
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
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
}`,P1=`#if DEPTH_PACKING == 3200
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
}`,F1=`#define DISTANCE
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
}`,B1=`#define DISTANCE
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`uniform float scale;
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
}`,V1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,X1=`uniform vec3 diffuse;
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
}`,W1=`#define LAMBERT
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
}`,Y1=`#define LAMBERT
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
}`,q1=`#define MATCAP
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
}`,j1=`#define MATCAP
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
}`,Z1=`#define NORMAL
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
}`,K1=`#define NORMAL
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
}`,Q1=`#define PHONG
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
}`,J1=`#define PHONG
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
}`,$1=`#define STANDARD
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
}`,tT=`#define STANDARD
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
}`,eT=`#define TOON
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
}`,nT=`#define TOON
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
}`,iT=`uniform float size;
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
}`,aT=`uniform vec3 diffuse;
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
}`,sT=`#include <common>
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
}`,rT=`uniform vec3 color;
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
}`,oT=`uniform float rotation;
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
}`,lT=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:DE,alphahash_pars_fragment:NE,alphamap_fragment:LE,alphamap_pars_fragment:UE,alphatest_fragment:OE,alphatest_pars_fragment:IE,aomap_fragment:PE,aomap_pars_fragment:FE,batching_pars_vertex:BE,batching_vertex:zE,begin_vertex:HE,beginnormal_vertex:GE,bsdfs:VE,iridescence_fragment:kE,bumpmap_pars_fragment:XE,clipping_planes_fragment:WE,clipping_planes_pars_fragment:YE,clipping_planes_pars_vertex:qE,clipping_planes_vertex:jE,color_fragment:ZE,color_pars_fragment:KE,color_pars_vertex:QE,color_vertex:JE,common:$E,cube_uv_reflection_fragment:tb,defaultnormal_vertex:eb,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:ab,emissivemap_pars_fragment:sb,colorspace_fragment:rb,colorspace_pars_fragment:ob,envmap_fragment:lb,envmap_common_pars_fragment:cb,envmap_pars_fragment:ub,envmap_pars_vertex:fb,envmap_physical_pars_fragment:Mb,envmap_vertex:db,fog_vertex:hb,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:_b,lightmap_pars_fragment:vb,lights_lambert_fragment:xb,lights_lambert_pars_fragment:yb,lights_pars_begin:Sb,lights_toon_fragment:Eb,lights_toon_pars_fragment:bb,lights_phong_fragment:Tb,lights_phong_pars_fragment:Ab,lights_physical_fragment:Rb,lights_physical_pars_fragment:Cb,lights_fragment_begin:wb,lights_fragment_maps:Db,lights_fragment_end:Nb,logdepthbuf_fragment:Lb,logdepthbuf_pars_fragment:Ub,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Ib,map_fragment:Pb,map_pars_fragment:Fb,map_particle_fragment:Bb,map_particle_pars_fragment:zb,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Vb,morphcolor_vertex:kb,morphnormal_vertex:Xb,morphtarget_pars_vertex:Wb,morphtarget_vertex:Yb,normal_fragment_begin:qb,normal_fragment_maps:jb,normal_pars_fragment:Zb,normal_pars_vertex:Kb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:e1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:a1,premultiplied_alpha_fragment:s1,project_vertex:r1,dithering_fragment:o1,dithering_pars_fragment:l1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:f1,shadowmap_pars_vertex:d1,shadowmap_vertex:h1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:_1,skinnormal_vertex:v1,specularmap_fragment:x1,specularmap_pars_fragment:y1,tonemapping_fragment:S1,tonemapping_pars_fragment:M1,transmission_fragment:E1,transmission_pars_fragment:b1,uv_pars_fragment:T1,uv_pars_vertex:A1,uv_vertex:R1,worldpos_vertex:C1,background_vert:w1,background_frag:D1,backgroundCube_vert:N1,backgroundCube_frag:L1,cube_vert:U1,cube_frag:O1,depth_vert:I1,depth_frag:P1,distance_vert:F1,distance_frag:B1,equirect_vert:z1,equirect_frag:H1,linedashed_vert:G1,linedashed_frag:V1,meshbasic_vert:k1,meshbasic_frag:X1,meshlambert_vert:W1,meshlambert_frag:Y1,meshmatcap_vert:q1,meshmatcap_frag:j1,meshnormal_vert:Z1,meshnormal_frag:K1,meshphong_vert:Q1,meshphong_frag:J1,meshphysical_vert:$1,meshphysical_frag:tT,meshtoon_vert:eT,meshtoon_frag:nT,points_vert:iT,points_frag:aT,shadow_vert:sT,shadow_frag:rT,sprite_vert:oT,sprite_frag:lT},Xt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},za={basic:{uniforms:bi([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:bi([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:bi([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:bi([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:bi([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:bi([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:bi([Xt.points,Xt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:bi([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:bi([Xt.common,Xt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:bi([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:bi([Xt.sprite,Xt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:bi([Xt.common,Xt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:bi([Xt.lights,Xt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};za.physical={uniforms:bi([za.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Of={r:0,b:0,g:0},co=new Qi,cT=new dn;function uT(r,t,i,s,l,c){const f=new ue(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(C){let U=C.isScene===!0?C.background:null;if(U&&U.isTexture){const N=C.backgroundBlurriness>0;U=t.get(U,N)}return U}function b(C){let U=!1;const N=S(C);N===null?E(f,h):N&&N.isColor&&(E(N,1),U=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(C,U){const N=S(U);N&&(N.isCubeTexture||N.mapping===jc)?(p===void 0&&(p=new Ve(new Fr(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Nl(za.backgroundCube.uniforms),vertexShader:za.backgroundCube.vertexShader,fragmentShader:za.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),co.copy(U.backgroundRotation),co.x*=-1,co.y*=-1,co.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(cT.makeRotationFromEuler(co)),p.material.toneMapped=Xe.getTransfer(N.colorSpace)!==en,(_!==N||v!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Ve(new us(2,2),new Xa({name:"BackgroundMaterial",uniforms:Nl(za.background.uniforms),vertexShader:za.background.vertexShader,fragmentShader:za.background.fragmentShader,side:Zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Xe.getTransfer(N.colorSpace)!==en,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function E(C,U){C.getRGB(Of,Fy(r)),i.buffers.color.setClear(Of.r,Of.g,Of.b,U,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,U=1){f.set(C),h=U,E(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,E(f,h)},render:b,addToRenderList:D,dispose:y}}function fT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(G,et,rt,ot,Z){let O=!1;const P=v(G,ot,rt,et);c!==P&&(c=P,p(c.object)),O=S(G,ot,rt,Z),O&&b(G,ot,rt,Z),Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,N(G,et,rt,ot),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,et,rt,ot){const Z=ot.wireframe===!0;let O=s[et.id];O===void 0&&(O={},s[et.id]=O);const P=G.isInstancedMesh===!0?G.id:0;let J=O[P];J===void 0&&(J={},O[P]=J);let gt=J[rt.id];gt===void 0&&(gt={},J[rt.id]=gt);let vt=gt[Z];return vt===void 0&&(vt=g(m()),gt[Z]=vt),vt}function g(G){const et=[],rt=[],ot=[];for(let Z=0;Z<i;Z++)et[Z]=0,rt[Z]=0,ot[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:rt,attributeDivisors:ot,object:G,attributes:{},index:null}}function S(G,et,rt,ot){const Z=c.attributes,O=et.attributes;let P=0;const J=rt.getAttributes();for(const gt in J)if(J[gt].location>=0){const I=Z[gt];let q=O[gt];if(q===void 0&&(gt==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),gt==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),I===void 0||I.attribute!==q||q&&I.data!==q.data)return!0;P++}return c.attributesNum!==P||c.index!==ot}function b(G,et,rt,ot){const Z={},O=et.attributes;let P=0;const J=rt.getAttributes();for(const gt in J)if(J[gt].location>=0){let I=O[gt];I===void 0&&(gt==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),gt==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const q={};q.attribute=I,I&&I.data&&(q.data=I.data),Z[gt]=q,P++}c.attributes=Z,c.attributesNum=P,c.index=ot}function D(){const G=c.newAttributes;for(let et=0,rt=G.length;et<rt;et++)G[et]=0}function E(G){y(G,0)}function y(G,et){const rt=c.newAttributes,ot=c.enabledAttributes,Z=c.attributeDivisors;rt[G]=1,ot[G]===0&&(r.enableVertexAttribArray(G),ot[G]=1),Z[G]!==et&&(r.vertexAttribDivisor(G,et),Z[G]=et)}function C(){const G=c.newAttributes,et=c.enabledAttributes;for(let rt=0,ot=et.length;rt<ot;rt++)et[rt]!==G[rt]&&(r.disableVertexAttribArray(rt),et[rt]=0)}function U(G,et,rt,ot,Z,O,P){P===!0?r.vertexAttribIPointer(G,et,rt,Z,O):r.vertexAttribPointer(G,et,rt,ot,Z,O)}function N(G,et,rt,ot){D();const Z=ot.attributes,O=rt.getAttributes(),P=et.defaultAttributeValues;for(const J in O){const gt=O[J];if(gt.location>=0){let vt=Z[J];if(vt===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(vt=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(vt=G.instanceColor)),vt!==void 0){const I=vt.normalized,q=vt.itemSize,_t=t.get(vt);if(_t===void 0)continue;const Ot=_t.buffer,Yt=_t.type,nt=_t.bytesPerElement,yt=Yt===r.INT||Yt===r.UNSIGNED_INT||vt.gpuType===Hd;if(vt.isInterleavedBufferAttribute){const Lt=vt.data,qt=Lt.stride,te=vt.offset;if(Lt.isInstancedInterleavedBuffer){for(let ce=0;ce<gt.locationSize;ce++)y(gt.location+ce,Lt.meshPerAttribute);G.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let ce=0;ce<gt.locationSize;ce++)E(gt.location+ce);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let ce=0;ce<gt.locationSize;ce++)U(gt.location+ce,q/gt.locationSize,Yt,I,qt*nt,(te+q/gt.locationSize*ce)*nt,yt)}else{if(vt.isInstancedBufferAttribute){for(let Lt=0;Lt<gt.locationSize;Lt++)y(gt.location+Lt,vt.meshPerAttribute);G.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Lt=0;Lt<gt.locationSize;Lt++)E(gt.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let Lt=0;Lt<gt.locationSize;Lt++)U(gt.location+Lt,q/gt.locationSize,Yt,I,q*nt,q/gt.locationSize*Lt*nt,yt)}}else if(P!==void 0){const I=P[J];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(gt.location,I);break;case 3:r.vertexAttrib3fv(gt.location,I);break;case 4:r.vertexAttrib4fv(gt.location,I);break;default:r.vertexAttrib1fv(gt.location,I)}}}}C()}function F(){L();for(const G in s){const et=s[G];for(const rt in et){const ot=et[rt];for(const Z in ot){const O=ot[Z];for(const P in O)_(O[P].object),delete O[P];delete ot[Z]}}delete s[G]}}function B(G){if(s[G.id]===void 0)return;const et=s[G.id];for(const rt in et){const ot=et[rt];for(const Z in ot){const O=ot[Z];for(const P in O)_(O[P].object),delete O[P];delete ot[Z]}}delete s[G.id]}function z(G){for(const et in s){const rt=s[et];for(const ot in rt){const Z=rt[ot];if(Z[G.id]===void 0)continue;const O=Z[G.id];for(const P in O)_(O[P].object),delete O[P];delete Z[G.id]}}}function T(G){for(const et in s){const rt=s[et],ot=G.isInstancedMesh===!0?G.id:0,Z=rt[ot];if(Z!==void 0){for(const O in Z){const P=Z[O];for(const J in P)_(P[J].object),delete P[J];delete Z[O]}delete rt[ot],Object.keys(rt).length===0&&delete s[et]}}}function L(){mt(),f=!0,c!==l&&(c=l,p(c.object))}function mt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:mt,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:E,disableUnusedAttributes:C}}function dT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let S=0;for(let b=0;b<v;b++)S+=_[b];i.update(S,s,1)}function m(p,_,v,g){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)f(p[b],_[b],g[b]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let b=0;for(let D=0;D<v;D++)b+=_[D]*g[D];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function hT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==va&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const T=z===hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Pi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==_a&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(he("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:C,maxVaryings:U,maxFragmentUniforms:N,maxSamples:F,samples:B}}function pT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Nr,h=new Me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const b=v.clippingPlanes,D=v.clipIntersection,E=v.clipShadows,y=r.get(v);if(!l||b===null||b.length===0||c&&!E)c?_(null):p();else{const C=c?0:s,U=C*4;let N=y.clippingState||null;m.value=N,N=_(b,g,U,S);for(let F=0;F!==U;++F)N[F]=i[F];y.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,S,b){const D=v!==null?v.length:0;let E=null;if(D!==0){if(E=m.value,b!==!0||E===null){const y=S+D*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(E===null||E.length<y)&&(E=new Float32Array(y));for(let U=0,N=S;U!==D;++U,N+=4)f.copy(v[U]).applyMatrix4(C,h),f.normal.toArray(E,N),E[N+3]=f.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,E}}const Or=4,gx=[.125,.215,.35,.446,.526,.582],mo=20,mT=256,Dc=new eh,_x=new ue;let Em=null,bm=0,Tm=0,Am=!1;const gT=new j;class Pd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=gT}=c;Em=this._renderer.getRenderTarget(),bm=this._renderer.getActiveCubeFace(),Tm=this._renderer.getActiveMipmapLevel(),Am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Em,bm,Tm),this._renderer.xr.enabled=Am,t.scissorTest=!1,_l(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ir||t.mapping===xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Em=this._renderer.getRenderTarget(),bm=this._renderer.getActiveCubeFace(),Tm=this._renderer.getActiveMipmapLevel(),Am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:hs,format:va,colorSpace:So,depthBuffer:!1},l=vx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_T(c)),this._blurMaterial=xT(c,t,i),this._ggxMaterial=vT(c,t,i)}return l}_compileMaterial(t){const i=new Ve(new Ji,t);this._renderer.compile(i,Dc)}_sceneToCubeUV(t,i,s,l,c){const m=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(_x),v.toneMapping=Ga,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new Fr,new qc({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,E=D.material;let y=!1;const C=t.background;C?C.isColor&&(E.color.copy(C),t.background=null,y=!0):(E.color.copy(_x),y=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):N===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const F=this._cubeSize;_l(l,N*F,U>2?F:0,F,F),v.setRenderTarget(l),y&&v.render(D,m),v.render(t,m)}v.toneMapping=S,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ir||t.mapping===xo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;_l(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Dc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:b}=this,D=this._sizeLods[s],E=3*D*(s>b-Or?s-b+Or:0),y=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=b-i,_l(c,E,y,3*D,2*D),l.setRenderTarget(c),l.render(h,Dc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,_l(t,E,y,3*D,2*D),l.setRenderTarget(t),l.render(h,Dc)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&ke("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*mo-1),D=c/b,E=isFinite(c)?1+Math.floor(_*D):mo;E>mo&&he(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${mo}`);const y=[];let C=0;for(let z=0;z<mo;++z){const T=z/D,L=Math.exp(-T*T/2);y.push(L),z===0?C+=L:z<E&&(C+=2*L)}for(let z=0;z<y.length;z++)y[z]=y[z]/C;g.envMap.value=t.texture,g.samples.value=E,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:U}=this;g.dTheta.value=b,g.mipInt.value=U-s;const N=this._sizeLods[l],F=3*N*(l>U-Or?l-U+Or:0),B=4*(this._cubeSize-N);_l(i,F,B,3*N,2*N),m.setRenderTarget(i),m.render(v,Dc)}}function _T(r){const t=[],i=[],s=[];let l=r;const c=r-Or+1+gx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-Or?m=gx[f-r+Or-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,b=6,D=3,E=2,y=1,C=new Float32Array(D*b*S),U=new Float32Array(E*b*S),N=new Float32Array(y*b*S);for(let B=0;B<S;B++){const z=B%3*2/3-1,T=B>2?0:-1,L=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(L,D*b*B),U.set(g,E*b*B);const mt=[B,B,B,B,B,B];N.set(mt,y*b*B)}const F=new Ji;F.setAttribute("position",new xa(C,D)),F.setAttribute("uv",new xa(U,E)),F.setAttribute("faceIndex",new xa(N,y)),s.push(new Ve(F,null)),l>Or&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function vx(r,t,i){const s=new Va(r,t,i);return s.texture.mapping=jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function _l(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function vT(r,t,i){return new Xa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function xT(r,t,i){const s=new Float32Array(mo),l=new j(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function xx(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function yx(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}class b0 extends Va{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new x0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Fr(5,5,5),c=new Xa({name:"CubemapFromEquirect",uniforms:Nl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:gi,blending:ds});c.uniforms.tEquirect.value=i;const f=new Ve(l,c),h=i.minFilter;return i.minFilter===qs&&(i.minFilter=Jn),new Wy(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function yT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Gf||S===Vf)if(t.has(g)){const b=t.get(g).texture;return h(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const D=new b0(b.height);return D.fromEquirectangularTexture(r,g),t.set(g,D),g.addEventListener("dispose",p),h(D.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,b=S===Gf||S===Vf,D=S===Ir||S===xo;if(b||D){let E=i.get(g);const y=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new Pd(r)),E=b?s.fromEquirectangular(g,E):s.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),E.texture;if(E!==void 0)return E.texture;{const C=g.image;return b&&C&&C.height>0||D&&C&&m(C)?(s===null&&(s=new Pd(r)),E=b?s.fromEquirectangular(g):s.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),g.addEventListener("dispose",_),E.texture):null}}}return g}function h(g,S){return S===Gf?g.mapping=Ir:S===Vf&&(g.mapping=xo),g}function m(g){let S=0;const b=6;for(let D=0;D<b;D++)g[D]!==void 0&&S++;return S===b}function p(g){const S=g.target;S.removeEventListener("dispose",p);const b=t.get(S);b!==void 0&&(t.delete(S),b.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const b=i.get(S);b!==void 0&&(i.delete(S),b.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function ST(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wc("WebGLRenderer: "+s+" extension not supported."),l}}}function MT(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)t.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,b=v.attributes.position;let D=0;if(b===void 0)return;if(S!==null){const C=S.array;D=S.version;for(let U=0,N=C.length;U<N;U+=3){const F=C[U+0],B=C[U+1],z=C[U+2];g.push(F,B,B,z,z,F)}}else{const C=b.array;D=b.version;for(let U=0,N=C.length/3-1;U<N;U+=3){const F=U+0,B=U+1,z=U+2;g.push(F,B,B,z,z,F)}}const E=new(b.count>=65535?g0:m0)(g,1);E.version=D;const y=c.get(v);y&&t.remove(y),c.set(v,E)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function ET(r,t,i){let s;function l(g){s=g}let c,f;function h(g){c=g.type,f=g.bytesPerElement}function m(g,S){r.drawElements(s,S,c,g*f),i.update(S,s,1)}function p(g,S,b){b!==0&&(r.drawElementsInstanced(s,S,c,g*f,b),i.update(S,s,b))}function _(g,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,g,0,b);let E=0;for(let y=0;y<b;y++)E+=S[y];i.update(E,s,1)}function v(g,S,b,D){if(b===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<g.length;y++)p(g[y]/f,S[y],D[y]);else{E.multiDrawElementsInstancedWEBGL(s,S,0,c,g,0,D,0,b);let y=0;for(let C=0;C<b;C++)y+=S[C]*D[C];i.update(y,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function bT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:ke("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function TT(r,t,i){const s=new WeakMap,l=new Tn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let mt=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",mt)};var S=mt;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),D===!0&&(N=2),E===!0&&(N=3);let F=h.attributes.position.count*N,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*v),T=new h0(z,F,B,v);T.type=_a,T.needsUpdate=!0;const L=N*4;for(let G=0;G<v;G++){const et=y[G],rt=C[G],ot=U[G],Z=F*B*4*G;for(let O=0;O<et.count;O++){const P=O*L;b===!0&&(l.fromBufferAttribute(et,O),z[Z+P+0]=l.x,z[Z+P+1]=l.y,z[Z+P+2]=l.z,z[Z+P+3]=0),D===!0&&(l.fromBufferAttribute(rt,O),z[Z+P+4]=l.x,z[Z+P+5]=l.y,z[Z+P+6]=l.z,z[Z+P+7]=0),E===!0&&(l.fromBufferAttribute(ot,O),z[Z+P+8]=l.x,z[Z+P+9]=l.y,z[Z+P+10]=l.z,z[Z+P+11]=ot.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new we(F,B)},s.set(h,g),h.addEventListener("dispose",mt)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let E=0;E<p.length;E++)b+=p[E];const D=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function AT(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const RT={[$m]:"LINEAR_TONE_MAPPING",[t0]:"REINHARD_TONE_MAPPING",[e0]:"CINEON_TONE_MAPPING",[zd]:"ACES_FILMIC_TONE_MAPPING",[i0]:"AGX_TONE_MAPPING",[a0]:"NEUTRAL_TONE_MAPPING",[n0]:"CUSTOM_TONE_MAPPING"};function CT(r,t,i,s,l){const c=new Va(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Va(t,i,{type:hs,depthBuffer:!1,stencilBuffer:!1}),h=new Ji;h.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $n([0,2,0,0,2,0],2));const m=new zy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ve(h,m),_=new eh(-1,1,1,-1,0,1);let v=null,g=null,S=!1,b,D=null,E=[],y=!1;this.setSize=function(C,U){c.setSize(C,U),f.setSize(C,U);for(let N=0;N<E.length;N++){const F=E[N];F.setSize&&F.setSize(C,U)}},this.setEffects=function(C){E=C,y=E.length>0&&E[0].isRenderPass===!0;const U=c.width,N=c.height;for(let F=0;F<E.length;F++){const B=E[F];B.setSize&&B.setSize(U,N)}},this.begin=function(C,U){if(S||C.toneMapping===Ga&&E.length===0)return!1;if(D=U,U!==null){const N=U.width,F=U.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return y===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=Ga,!0},this.hasRenderPass=function(){return y},this.end=function(C,U){C.toneMapping=b,S=!0;let N=c,F=f;for(let B=0;B<E.length;B++){const z=E[B];if(z.enabled!==!1&&(z.render(C,F,N,U),z.needsSwap!==!1)){const T=N;N=F,F=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},Xe.getTransfer(v)===en&&(m.defines.SRGB_TRANSFER="");const B=RT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(D),C.render(p,_),D=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const Ky=new li,jm=new Dl(1,1),Qy=new h0,Jy=new Ny,$y=new x0,Sx=[],Mx=[],Ex=new Float32Array(16),bx=new Float32Array(9),Tx=new Float32Array(4);function Il(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Sx[l];if(c===void 0&&(c=new Float32Array(l),Sx[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function Yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function qn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function ih(r,t){let i=Mx[t];i===void 0&&(i=new Int32Array(t),Mx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function wT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function DT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2fv(this.addr,t),qn(i,t)}}function NT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Yn(i,t))return;r.uniform3fv(this.addr,t),qn(i,t)}}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4fv(this.addr,t),qn(i,t)}}function UT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;Tx.set(s),r.uniformMatrix2fv(this.addr,!1,Tx),qn(i,s)}}function OT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;bx.set(s),r.uniformMatrix3fv(this.addr,!1,bx),qn(i,s)}}function IT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),qn(i,t)}else{if(Yn(i,s))return;Ex.set(s),r.uniformMatrix4fv(this.addr,!1,Ex),qn(i,s)}}function PT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2iv(this.addr,t),qn(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yn(i,t))return;r.uniform3iv(this.addr,t),qn(i,t)}}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4iv(this.addr,t),qn(i,t)}}function HT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function GT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yn(i,t))return;r.uniform2uiv(this.addr,t),qn(i,t)}}function VT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yn(i,t))return;r.uniform3uiv(this.addr,t),qn(i,t)}}function kT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yn(i,t))return;r.uniform4uiv(this.addr,t),qn(i,t)}}function XT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(jm.compareFunction=i.isReversedDepthBuffer()?Zd:jd,c=jm):c=Ky,i.setTexture2D(t||c,l)}function WT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Jy,l)}function YT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||$y,l)}function qT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Qy,l)}function jT(r){switch(r){case 5126:return wT;case 35664:return DT;case 35665:return NT;case 35666:return LT;case 35674:return UT;case 35675:return OT;case 35676:return IT;case 5124:case 35670:return PT;case 35667:case 35671:return FT;case 35668:case 35672:return BT;case 35669:case 35673:return zT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return qT}}function ZT(r,t){r.uniform1fv(this.addr,t)}function KT(r,t){const i=Il(t,this.size,2);r.uniform2fv(this.addr,i)}function QT(r,t){const i=Il(t,this.size,3);r.uniform3fv(this.addr,i)}function JT(r,t){const i=Il(t,this.size,4);r.uniform4fv(this.addr,i)}function $T(r,t){const i=Il(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function tA(r,t){const i=Il(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function eA(r,t){const i=Il(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function nA(r,t){r.uniform1iv(this.addr,t)}function iA(r,t){r.uniform2iv(this.addr,t)}function aA(r,t){r.uniform3iv(this.addr,t)}function sA(r,t){r.uniform4iv(this.addr,t)}function rA(r,t){r.uniform1uiv(this.addr,t)}function oA(r,t){r.uniform2uiv(this.addr,t)}function lA(r,t){r.uniform3uiv(this.addr,t)}function cA(r,t){r.uniform4uiv(this.addr,t)}function uA(r,t,i){const s=this.cache,l=t.length,c=ih(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=jm:f=Ky;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function fA(r,t,i){const s=this.cache,l=t.length,c=ih(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Jy,c[f])}function dA(r,t,i){const s=this.cache,l=t.length,c=ih(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||$y,c[f])}function hA(r,t,i){const s=this.cache,l=t.length,c=ih(i,l);Yn(s,c)||(r.uniform1iv(this.addr,c),qn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Qy,c[f])}function pA(r){switch(r){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return hA}}class mA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=jT(i.type)}}class gA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pA(i.type)}}class _A{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Rm=/(\w+)(\])?(\[|\.)?/g;function Ax(r,t){r.seq.push(t),r.map[t.id]=t}function vA(r,t,i){const s=r.name,l=s.length;for(Rm.lastIndex=0;;){const c=Rm.exec(s),f=Rm.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Ax(i,p===void 0?new mA(h,r,t):new gA(h,r,t));break}else{let v=i.map[h];v===void 0&&(v=new _A(h),Ax(i,v)),i=v}}}class Yf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);vA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Rx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const xA=37297;let yA=0;function SA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const Cx=new Me;function MA(r){Xe._getMatrix(Cx,Xe.workingColorSpace,r);const t=`mat3( ${Cx.elements.map(i=>i.toFixed(4))} )`;switch(Xe.getTransfer(r)){case Xc:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function wx(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+SA(r.getShaderSource(t),h)}else return c}function EA(r,t){const i=MA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const bA={[$m]:"Linear",[t0]:"Reinhard",[e0]:"Cineon",[zd]:"ACESFilmic",[i0]:"AgX",[a0]:"Neutral",[n0]:"Custom"};function TA(r,t){const i=bA[t];return i===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const If=new j;function AA(){Xe.getLuminanceCoefficients(If);const r=If.x.toFixed(4),t=If.y.toFixed(4),i=If.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pc).join(`
`)}function CA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function wA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Pc(r){return r!==""}function Dx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zm(r){return r.replace(DA,LA)}const NA=new Map;function LA(r,t){let i=Te[t];if(i===void 0){const s=NA.get(t);if(s!==void 0)i=Te[s],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Zm(i)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lx(r){return r.replace(UA,OA)}function OA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ux(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const IA={[go]:"SHADOWMAP_TYPE_PCF",[Sl]:"SHADOWMAP_TYPE_VSM"};function PA(r){return IA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FA={[Ir]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function BA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":FA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const zA={[xo]:"ENVMAP_MODE_REFRACTION"};function HA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":zA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GA={[Bd]:"ENVMAP_BLENDING_MULTIPLY",[gy]:"ENVMAP_BLENDING_MIX",[_y]:"ENVMAP_BLENDING_ADD"};function VA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":GA[r.combine]||"ENVMAP_BLENDING_NONE"}function kA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function XA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=PA(i),p=BA(i),_=HA(i),v=VA(i),g=kA(i),S=RA(i),b=CA(c),D=l.createProgram();let E,y,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Pc).join(`
`),E.length>0&&(E+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Pc).join(`
`),y.length>0&&(y+=`
`)):(E=[Ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pc).join(`
`),y=[Ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?Te.tonemapping_pars_fragment:"",i.toneMapping!==Ga?TA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,EA("linearToOutputTexel",i.outputColorSpace),AA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Pc).join(`
`)),f=Zm(f),f=Dx(f,i),f=Nx(f,i),h=Zm(h),h=Dx(h,i),h=Nx(h,i),f=Lx(f),h=Lx(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,E=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,y=["#define varying in",i.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=C+E+f,N=C+y+h,F=Rx(l,l.VERTEX_SHADER,U),B=Rx(l,l.FRAGMENT_SHADER,N);l.attachShader(D,F),l.attachShader(D,B),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function z(G){if(r.debug.checkShaderErrors){const et=l.getProgramInfoLog(D)||"",rt=l.getShaderInfoLog(F)||"",ot=l.getShaderInfoLog(B)||"",Z=et.trim(),O=rt.trim(),P=ot.trim();let J=!0,gt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,F,B);else{const vt=wx(l,F,"vertex"),I=wx(l,B,"fragment");ke("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+vt+`
`+I)}else Z!==""?he("WebGLProgram: Program Info Log:",Z):(O===""||P==="")&&(gt=!1);gt&&(G.diagnostics={runnable:J,programLog:Z,vertexShader:{log:O,prefix:E},fragmentShader:{log:P,prefix:y}})}l.deleteShader(F),l.deleteShader(B),T=new Yf(l,D),L=wA(l,D)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let mt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return mt===!1&&(mt=l.getProgramParameter(D,xA)),mt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yA++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=F,this.fragmentShader=B,this}let WA=0;class YA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new qA(t),i.set(t,s)),s}}class qA{constructor(t){this.id=WA++,this.code=t,this.usedTimes=0}}function jA(r,t,i,s,l,c){const f=new Qd,h=new YA,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,L,mt,G,et){const rt=G.fog,ot=et.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,P=t.get(T.envMap||Z,O),J=P&&P.mapping===jc?P.image.height:null,gt=S[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&he("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const vt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,I=vt!==void 0?vt.length:0;let q=0;ot.morphAttributes.position!==void 0&&(q=1),ot.morphAttributes.normal!==void 0&&(q=2),ot.morphAttributes.color!==void 0&&(q=3);let _t,Ot,Yt,nt;if(gt){const Ee=za[gt];_t=Ee.vertexShader,Ot=Ee.fragmentShader}else _t=T.vertexShader,Ot=T.fragmentShader,h.update(T),Yt=h.getVertexShaderID(T),nt=h.getFragmentShaderID(T);const yt=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),qt=et.isInstancedMesh===!0,te=et.isBatchedMesh===!0,ce=!!T.map,xn=!!T.matcap,Ce=!!P,ye=!!T.aoMap,Le=!!T.lightMap,ge=!!T.bumpMap,mn=!!T.normalMap,k=!!T.displacementMap,nn=!!T.emissiveMap,Ue=!!T.metalnessMap,Ye=!!T.roughnessMap,K=T.anisotropy>0,w=T.clearcoat>0,M=T.dispersion>0,V=T.iridescence>0,$=T.sheen>0,pt=T.transmission>0,ct=K&&!!T.anisotropyMap,At=w&&!!T.clearcoatMap,dt=w&&!!T.clearcoatNormalMap,Tt=w&&!!T.clearcoatRoughnessMap,Et=V&&!!T.iridescenceMap,bt=V&&!!T.iridescenceThicknessMap,Rt=$&&!!T.sheenColorMap,Ht=$&&!!T.sheenRoughnessMap,Bt=!!T.specularMap,Gt=!!T.specularColorMap,le=!!T.specularIntensityMap,X=pt&&!!T.transmissionMap,Nt=pt&&!!T.thicknessMap,Ut=!!T.gradientMap,Ft=!!T.alphaMap,Dt=T.alphaTest>0,ft=!!T.alphaHash,Vt=!!T.extensions;let re=Ga;T.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(re=r.toneMapping);const Oe={shaderID:gt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:Ot,defines:T.defines,customVertexShaderID:Yt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:te,batchingColor:te&&et._colorsTexture!==null,instancing:qt,instancingColor:qt&&et.instanceColor!==null,instancingMorph:qt&&et.morphTexture!==null,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:So,alphaToCoverage:!!T.alphaToCoverage,map:ce,matcap:xn,envMap:Ce,envMapMode:Ce&&P.mapping,envMapCubeUVHeight:J,aoMap:ye,lightMap:Le,bumpMap:ge,normalMap:mn,displacementMap:k,emissiveMap:nn,normalMapObjectSpace:mn&&T.normalMapType===yy,normalMapTangentSpace:mn&&T.normalMapType===qd,metalnessMap:Ue,roughnessMap:Ye,anisotropy:K,anisotropyMap:ct,clearcoat:w,clearcoatMap:At,clearcoatNormalMap:dt,clearcoatRoughnessMap:Tt,dispersion:M,iridescence:V,iridescenceMap:Et,iridescenceThicknessMap:bt,sheen:$,sheenColorMap:Rt,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:Gt,specularIntensityMap:le,transmission:pt,transmissionMap:X,thicknessMap:Nt,gradientMap:Ut,opaque:T.transparent===!1&&T.blending===_o&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Dt,alphaHash:ft,combine:T.combine,mapUv:ce&&b(T.map.channel),aoMapUv:ye&&b(T.aoMap.channel),lightMapUv:Le&&b(T.lightMap.channel),bumpMapUv:ge&&b(T.bumpMap.channel),normalMapUv:mn&&b(T.normalMap.channel),displacementMapUv:k&&b(T.displacementMap.channel),emissiveMapUv:nn&&b(T.emissiveMap.channel),metalnessMapUv:Ue&&b(T.metalnessMap.channel),roughnessMapUv:Ye&&b(T.roughnessMap.channel),anisotropyMapUv:ct&&b(T.anisotropyMap.channel),clearcoatMapUv:At&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:dt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(T.sheenRoughnessMap.channel),specularMapUv:Bt&&b(T.specularMap.channel),specularColorMapUv:Gt&&b(T.specularColorMap.channel),specularIntensityMapUv:le&&b(T.specularIntensityMap.channel),transmissionMapUv:X&&b(T.transmissionMap.channel),thicknessMapUv:Nt&&b(T.thicknessMap.channel),alphaMapUv:Ft&&b(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(mn||K),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ot.attributes.uv&&(ce||Ft),fog:!!rt,useFog:T.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ot.attributes.normal===void 0&&mn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Lt,skinning:et.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&mt.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:ce&&T.map.isVideoTexture===!0&&Xe.getTransfer(T.map.colorSpace)===en,decodeVideoTextureEmissive:nn&&T.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(T.emissiveMap.colorSpace)===en,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===kn,flipSided:T.side===gi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Vt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&T.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Oe.vertexUv1s=m.has(1),Oe.vertexUv2s=m.has(2),Oe.vertexUv3s=m.has(3),m.clear(),Oe}function E(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const mt in T.defines)L.push(mt),L.push(T.defines[mt]);return T.isRawShaderMaterial===!1&&(y(L,T),C(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function y(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function U(T){const L=S[T.type];let mt;if(L){const G=za[L];mt=By.clone(G.uniforms)}else mt=T.uniforms;return mt}function N(T,L){let mt=_.get(L);return mt!==void 0?++mt.usedTimes:(mt=new XA(r,L,T,l),p.push(mt),_.set(L,mt)),mt}function F(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function B(T){h.remove(T)}function z(){h.dispose()}return{getParameters:D,getProgramCacheKey:E,getUniforms:U,acquireProgram:N,releaseProgram:F,releaseShaderCache:B,programs:p,dispose:z}}function ZA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function KA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Ox(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ix(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,b,D,E,y){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:S,material:b,materialVariant:f(g),groupOrder:D,renderOrder:g.renderOrder,z:E,group:y},r[t]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=b,C.materialVariant=f(g),C.groupOrder=D,C.renderOrder=g.renderOrder,C.z=E,C.group=y),t++,C}function m(g,S,b,D,E,y){const C=h(g,S,b,D,E,y);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function p(g,S,b,D,E,y){const C=h(g,S,b,D,E,y);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,S){i.length>1&&i.sort(g||KA),s.length>1&&s.sort(S||Ox),l.length>1&&l.sort(S||Ox)}function v(){for(let g=t,S=r.length;g<S;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function QA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Ix,r.set(s,[f])):l>=c.length?(f=new Ix,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function JA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new ue};break;case"SpotLight":i={position:new j,direction:new j,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function $A(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let t2=0;function e2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function n2(r){const t=new JA,i=$A(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new dn,f=new dn;function h(p){let _=0,v=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let S=0,b=0,D=0,E=0,y=0,C=0,U=0,N=0,F=0,B=0,z=0;p.sort(e2);for(let L=0,mt=p.length;L<mt;L++){const G=p[L],et=G.color,rt=G.intensity,ot=G.distance;let Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===yo?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=et.r*rt,v+=et.g*rt,g+=et.b*rt;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],rt);z++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const P=G.shadow,J=i.get(G);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,s.directionalShadow[S]=J,s.directionalShadowMap[S]=Z,s.directionalShadowMatrix[S]=G.shadow.matrix,C++}s.directional[S]=O,S++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(et).multiplyScalar(rt),O.distance=ot,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[D]=O;const P=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,P.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[D]=P.matrix,G.castShadow){const J=i.get(G);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,s.spotShadow[D]=J,s.spotShadowMap[D]=Z,N++}D++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(et).multiplyScalar(rt),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[E]=O,E++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const P=G.shadow,J=i.get(G);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,J.shadowCameraNear=P.camera.near,J.shadowCameraFar=P.camera.far,s.pointShadow[b]=J,s.pointShadowMap[b]=Z,s.pointShadowMatrix[b]=G.shadow.matrix,U++}s.point[b]=O,b++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(rt),O.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[y]=O,y++}}E>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xt.LTC_FLOAT_1,s.rectAreaLTC2=Xt.LTC_FLOAT_2):(s.rectAreaLTC1=Xt.LTC_HALF_1,s.rectAreaLTC2=Xt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==S||T.pointLength!==b||T.spotLength!==D||T.rectAreaLength!==E||T.hemiLength!==y||T.numDirectionalShadows!==C||T.numPointShadows!==U||T.numSpotShadows!==N||T.numSpotMaps!==F||T.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=D,s.rectArea.length=E,s.point.length=b,s.hemi.length=y,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=N+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,T.directionalLength=S,T.pointLength=b,T.spotLength=D,T.rectAreaLength=E,T.hemiLength=y,T.numDirectionalShadows=C,T.numPointShadows=U,T.numSpotShadows=N,T.numSpotMaps=F,T.numLightProbes=z,s.version=t2++)}function m(p,_){let v=0,g=0,S=0,b=0,D=0;const E=_.matrixWorldInverse;for(let y=0,C=p.length;y<C;y++){const U=p[y];if(U.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(E),v++}else if(U.isSpotLight){const N=s.spot[S];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(E),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(E),S++}else if(U.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(E),f.identity(),c.copy(U.matrixWorld),c.premultiply(E),f.extractRotation(c),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(E),g++}else if(U.isHemisphereLight){const N=s.hemi[D];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(E),D++}}}return{setup:h,setupView:m,state:s}}function Px(r){const t=new n2(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function i2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Px(r),t.set(l,[h])):c>=f.length?(h=new Px(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const a2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
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
}`,r2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],o2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Fx=new dn,Nc=new j,Cm=new j;function l2(r,t,i){let s=new Jd;const l=new we,c=new we,f=new Tn,h=new Gy,m=new Vy,p={},_=i.maxTextureSize,v={[Zs]:gi,[gi]:Zs,[kn]:kn},g=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:a2,fragmentShader:s2}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const b=new Ji;b.setAttribute("position",new xa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ve(b,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let y=this.type;this.render=function(B,z,T){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||B.length===0)return;this.type===Qx&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=go);const L=r.getRenderTarget(),mt=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),et=r.state;et.setBlending(ds),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const rt=y!==this.type;rt&&z.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(Z=>Z.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,Z=B.length;ot<Z;ot++){const O=B[ot],P=O.shadow;if(P===void 0){he("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const J=P.getFrameExtents();l.multiply(J),c.copy(P.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/J.x),l.x=c.x*J.x,P.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/J.y),l.y=c.y*J.y,P.mapSize.y=c.y));const gt=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=gt,P.map===null||rt===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Sl){if(O.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Va(l.x,l.y,{format:yo,type:hs,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new Dl(l.x,l.y,_a),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=ps,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Qn,P.map.depthTexture.magFilter=Qn}else O.isPointLight?(P.map=new b0(l.x),P.map.depthTexture=new Oy(l.x,ka)):(P.map=new Va(l.x,l.y),P.map.depthTexture=new Dl(l.x,l.y,ka)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=ps,this.type===go?(P.map.depthTexture.compareFunction=gt?Zd:jd,P.map.depthTexture.minFilter=Jn,P.map.depthTexture.magFilter=Jn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Qn,P.map.depthTexture.magFilter=Qn);P.camera.updateProjectionMatrix()}const vt=P.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<vt;I++){if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,I),r.clear();else{I===0&&(r.setRenderTarget(P.map),r.clear());const q=P.getViewport(I);f.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),et.viewport(f)}if(O.isPointLight){const q=P.camera,_t=P.matrix,Ot=O.distance||q.far;Ot!==q.far&&(q.far=Ot,q.updateProjectionMatrix()),Nc.setFromMatrixPosition(O.matrixWorld),q.position.copy(Nc),Cm.copy(q.position),Cm.add(r2[I]),q.up.copy(o2[I]),q.lookAt(Cm),q.updateMatrixWorld(),_t.makeTranslation(-Nc.x,-Nc.y,-Nc.z),Fx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Fx,q.coordinateSystem,q.reversedDepth)}else P.updateMatrices(O);s=P.getFrustum(),N(z,T,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===Sl&&C(P,T),P.needsUpdate=!1}y=this.type,E.needsUpdate=!1,r.setRenderTarget(L,mt,G)};function C(B,z){const T=t.update(D);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Va(l.x,l.y,{format:yo,type:hs})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,D,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,T,S,D,null)}function U(B,z,T,L){let mt=null;const G=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)mt=G;else if(mt=T.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const et=mt.uuid,rt=z.uuid;let ot=p[et];ot===void 0&&(ot={},p[et]=ot);let Z=ot[rt];Z===void 0&&(Z=mt.clone(),ot[rt]=Z,z.addEventListener("dispose",F)),mt=Z}if(mt.visible=z.visible,mt.wireframe=z.wireframe,L===Sl?mt.side=z.shadowSide!==null?z.shadowSide:z.side:mt.side=z.shadowSide!==null?z.shadowSide:v[z.side],mt.alphaMap=z.alphaMap,mt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,mt.map=z.map,mt.clipShadows=z.clipShadows,mt.clippingPlanes=z.clippingPlanes,mt.clipIntersection=z.clipIntersection,mt.displacementMap=z.displacementMap,mt.displacementScale=z.displacementScale,mt.displacementBias=z.displacementBias,mt.wireframeLinewidth=z.wireframeLinewidth,mt.linewidth=z.linewidth,T.isPointLight===!0&&mt.isMeshDistanceMaterial===!0){const et=r.properties.get(mt);et.light=T}return mt}function N(B,z,T,L,mt){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&mt===Sl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const rt=t.update(B),ot=B.material;if(Array.isArray(ot)){const Z=rt.groups;for(let O=0,P=Z.length;O<P;O++){const J=Z[O],gt=ot[J.materialIndex];if(gt&&gt.visible){const vt=U(B,gt,L,mt);B.onBeforeShadow(r,B,z,T,rt,vt,J),r.renderBufferDirect(T,null,rt,vt,B,J),B.onAfterShadow(r,B,z,T,rt,vt,J)}}}else if(ot.visible){const Z=U(B,ot,L,mt);B.onBeforeShadow(r,B,z,T,rt,Z,null),r.renderBufferDirect(T,null,rt,Z,B,null),B.onAfterShadow(r,B,z,T,rt,Z,null)}}const et=B.children;for(let rt=0,ot=et.length;rt<ot;rt++)N(et[rt],z,T,L,mt)}function F(B){B.target.removeEventListener("dispose",F);for(const T in p){const L=p[T],mt=B.target.uuid;mt in L&&(L[mt].dispose(),delete L[mt])}}}function c2(r,t){function i(){let X=!1;const Nt=new Tn;let Ut=null;const Ft=new Tn(0,0,0,0);return{setMask:function(Dt){Ut!==Dt&&!X&&(r.colorMask(Dt,Dt,Dt,Dt),Ut=Dt)},setLocked:function(Dt){X=Dt},setClear:function(Dt,ft,Vt,re,Oe){Oe===!0&&(Dt*=re,ft*=re,Vt*=re),Nt.set(Dt,ft,Vt,re),Ft.equals(Nt)===!1&&(r.clearColor(Dt,ft,Vt,re),Ft.copy(Nt))},reset:function(){X=!1,Ut=null,Ft.set(-1,0,0,0)}}}function s(){let X=!1,Nt=!1,Ut=null,Ft=null,Dt=null;return{setReversed:function(ft){if(Nt!==ft){const Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Nt=ft;const re=Dt;Dt=null,this.setClear(re)}},getReversed:function(){return Nt},setTest:function(ft){ft?yt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(ft){Ut!==ft&&!X&&(r.depthMask(ft),Ut=ft)},setFunc:function(ft){if(Nt&&(ft=HM[ft]),Ft!==ft){switch(ft){case Zf:r.depthFunc(r.NEVER);break;case Kf:r.depthFunc(r.ALWAYS);break;case Qf:r.depthFunc(r.LESS);break;case vo:r.depthFunc(r.LEQUAL);break;case Jf:r.depthFunc(r.EQUAL);break;case $f:r.depthFunc(r.GEQUAL);break;case td:r.depthFunc(r.GREATER);break;case ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=ft}},setLocked:function(ft){X=ft},setClear:function(ft){Dt!==ft&&(Dt=ft,Nt&&(ft=1-ft),r.clearDepth(ft))},reset:function(){X=!1,Ut=null,Ft=null,Dt=null,Nt=!1}}}function l(){let X=!1,Nt=null,Ut=null,Ft=null,Dt=null,ft=null,Vt=null,re=null,Oe=null;return{setTest:function(Ee){X||(Ee?yt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!X&&(r.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,Je,Fi){(Ut!==Ee||Ft!==Je||Dt!==Fi)&&(r.stencilFunc(Ee,Je,Fi),Ut=Ee,Ft=Je,Dt=Fi)},setOp:function(Ee,Je,Fi){(ft!==Ee||Vt!==Je||re!==Fi)&&(r.stencilOp(Ee,Je,Fi),ft=Ee,Vt=Je,re=Fi)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Oe!==Ee&&(r.clearStencil(Ee),Oe=Ee)},reset:function(){X=!1,Nt=null,Ut=null,Ft=null,Dt=null,ft=null,Vt=null,re=null,Oe=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,S=[],b=null,D=!1,E=null,y=null,C=null,U=null,N=null,F=null,B=null,z=new ue(0,0,0),T=0,L=!1,mt=null,G=null,et=null,rt=null,ot=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,P=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(J)[1]),O=P>=1):J.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),O=P>=2);let gt=null,vt={};const I=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),_t=new Tn().fromArray(I),Ot=new Tn().fromArray(q);function Yt(X,Nt,Ut,Ft){const Dt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(X,ft),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Ut;Vt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(Nt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return ft}const nt={};nt[r.TEXTURE_2D]=Yt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),yt(r.DEPTH_TEST),f.setFunc(vo),ge(!1),mn(Fm),yt(r.CULL_FACE),ye(ds);function yt(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Lt(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function qt(X,Nt){return v[X]!==Nt?(r.bindFramebuffer(X,Nt),v[X]=Nt,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Nt),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function te(X,Nt){let Ut=S,Ft=!1;if(X){Ut=g.get(Nt),Ut===void 0&&(Ut=[],g.set(Nt,Ut));const Dt=X.textures;if(Ut.length!==Dt.length||Ut[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Vt=Dt.length;ft<Vt;ft++)Ut[ft]=r.COLOR_ATTACHMENT0+ft;Ut.length=Dt.length,Ft=!0}}else Ut[0]!==r.BACK&&(Ut[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(Ut)}function ce(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const xn={[Lr]:r.FUNC_ADD,[$x]:r.FUNC_SUBTRACT,[ty]:r.FUNC_REVERSE_SUBTRACT};xn[ey]=r.MIN,xn[ny]=r.MAX;const Ce={[iy]:r.ZERO,[ay]:r.ONE,[sy]:r.SRC_COLOR,[qf]:r.SRC_ALPHA,[fy]:r.SRC_ALPHA_SATURATE,[cy]:r.DST_COLOR,[oy]:r.DST_ALPHA,[ry]:r.ONE_MINUS_SRC_COLOR,[jf]:r.ONE_MINUS_SRC_ALPHA,[uy]:r.ONE_MINUS_DST_COLOR,[ly]:r.ONE_MINUS_DST_ALPHA,[dy]:r.CONSTANT_COLOR,[hy]:r.ONE_MINUS_CONSTANT_COLOR,[py]:r.CONSTANT_ALPHA,[my]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(X,Nt,Ut,Ft,Dt,ft,Vt,re,Oe,Ee){if(X===ds){D===!0&&(Lt(r.BLEND),D=!1);return}if(D===!1&&(yt(r.BLEND),D=!0),X!==Jx){if(X!==E||Ee!==L){if((y!==Lr||N!==Lr)&&(r.blendEquation(r.FUNC_ADD),y=Lr,N=Lr),Ee)switch(X){case _o:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bm:r.blendFunc(r.ONE,r.ONE);break;case zm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ke("WebGLState: Invalid blending: ",X);break}else switch(X){case _o:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case zm:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hm:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",X);break}C=null,U=null,F=null,B=null,z.set(0,0,0),T=0,E=X,L=Ee}return}Dt=Dt||Nt,ft=ft||Ut,Vt=Vt||Ft,(Nt!==y||Dt!==N)&&(r.blendEquationSeparate(xn[Nt],xn[Dt]),y=Nt,N=Dt),(Ut!==C||Ft!==U||ft!==F||Vt!==B)&&(r.blendFuncSeparate(Ce[Ut],Ce[Ft],Ce[ft],Ce[Vt]),C=Ut,U=Ft,F=ft,B=Vt),(re.equals(z)===!1||Oe!==T)&&(r.blendColor(re.r,re.g,re.b,Oe),z.copy(re),T=Oe),E=X,L=!1}function Le(X,Nt){X.side===kn?Lt(r.CULL_FACE):yt(r.CULL_FACE);let Ut=X.side===gi;Nt&&(Ut=!Ut),ge(Ut),X.blending===_o&&X.transparent===!1?ye(ds):ye(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ft=X.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),nn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ge(X){mt!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),mt=X)}function mn(X){X!==jx?(yt(r.CULL_FACE),X!==G&&(X===Fm?r.cullFace(r.BACK):X===Zx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),G=X}function k(X){X!==et&&(O&&r.lineWidth(X),et=X)}function nn(X,Nt,Ut){X?(yt(r.POLYGON_OFFSET_FILL),(rt!==Nt||ot!==Ut)&&(rt=Nt,ot=Ut,f.getReversed()&&(Nt=-Nt),r.polygonOffset(Nt,Ut))):Lt(r.POLYGON_OFFSET_FILL)}function Ue(X){X?yt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=r.TEXTURE0+Z-1),gt!==X&&(r.activeTexture(X),gt=X)}function K(X,Nt,Ut){Ut===void 0&&(gt===null?Ut=r.TEXTURE0+Z-1:Ut=gt);let Ft=vt[Ut];Ft===void 0&&(Ft={type:void 0,texture:void 0},vt[Ut]=Ft),(Ft.type!==X||Ft.texture!==Nt)&&(gt!==Ut&&(r.activeTexture(Ut),gt=Ut),r.bindTexture(X,Nt||nt[X]),Ft.type=X,Ft.texture=Nt)}function w(){const X=vt[gt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(X){ke("WebGLState:",X)}}function V(){try{r.compressedTexImage3D(...arguments)}catch(X){ke("WebGLState:",X)}}function $(){try{r.texSubImage2D(...arguments)}catch(X){ke("WebGLState:",X)}}function pt(){try{r.texSubImage3D(...arguments)}catch(X){ke("WebGLState:",X)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(X){ke("WebGLState:",X)}}function At(){try{r.compressedTexSubImage3D(...arguments)}catch(X){ke("WebGLState:",X)}}function dt(){try{r.texStorage2D(...arguments)}catch(X){ke("WebGLState:",X)}}function Tt(){try{r.texStorage3D(...arguments)}catch(X){ke("WebGLState:",X)}}function Et(){try{r.texImage2D(...arguments)}catch(X){ke("WebGLState:",X)}}function bt(){try{r.texImage3D(...arguments)}catch(X){ke("WebGLState:",X)}}function Rt(X){_t.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),_t.copy(X))}function Ht(X){Ot.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ot.copy(X))}function Bt(X,Nt){let Ut=p.get(Nt);Ut===void 0&&(Ut=new WeakMap,p.set(Nt,Ut));let Ft=Ut.get(X);Ft===void 0&&(Ft=r.getUniformBlockIndex(Nt,X.name),Ut.set(X,Ft))}function Gt(X,Nt){const Ft=p.get(Nt).get(X);m.get(Nt)!==Ft&&(r.uniformBlockBinding(Nt,Ft,X.__bindingPointIndex),m.set(Nt,Ft))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},gt=null,vt={},v={},g=new WeakMap,S=[],b=null,D=!1,E=null,y=null,C=null,U=null,N=null,F=null,B=null,z=new ue(0,0,0),T=0,L=!1,mt=null,G=null,et=null,rt=null,ot=null,_t.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:yt,disable:Lt,bindFramebuffer:qt,drawBuffers:te,useProgram:ce,setBlending:ye,setMaterial:Le,setFlipSided:ge,setCullFace:mn,setLineWidth:k,setPolygonOffset:nn,setScissorTest:Ue,activeTexture:Ye,bindTexture:K,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:Et,texImage3D:bt,updateUBOMapping:Bt,uniformBlockBinding:Gt,texStorage2D:dt,texStorage3D:Tt,texSubImage2D:$,texSubImage3D:pt,compressedTexSubImage2D:ct,compressedTexSubImage3D:At,scissor:Rt,viewport:Ht,reset:le}}function u2(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,_=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,M){return S?new OffscreenCanvas(w,M):Id("canvas")}function D(w,M,V){let $=1;const pt=K(w);if((pt.width>V||pt.height>V)&&($=V/Math.max(pt.width,pt.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ct=Math.floor($*pt.width),At=Math.floor($*pt.height);v===void 0&&(v=b(ct,At));const dt=M?b(ct,At):v;return dt.width=ct,dt.height=At,dt.getContext("2d").drawImage(w,0,0,ct,At),he("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ct+"x"+At+")."),dt}else return"data"in w&&he("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),w;return w}function E(w){return w.generateMipmaps}function y(w){r.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(w,M,V,$,pt=!1){if(w!==null){if(r[w]!==void 0)return r[w];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ct=M;if(M===r.RED&&(V===r.FLOAT&&(ct=r.R32F),V===r.HALF_FLOAT&&(ct=r.R16F),V===r.UNSIGNED_BYTE&&(ct=r.R8)),M===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ct=r.R8UI),V===r.UNSIGNED_SHORT&&(ct=r.R16UI),V===r.UNSIGNED_INT&&(ct=r.R32UI),V===r.BYTE&&(ct=r.R8I),V===r.SHORT&&(ct=r.R16I),V===r.INT&&(ct=r.R32I)),M===r.RG&&(V===r.FLOAT&&(ct=r.RG32F),V===r.HALF_FLOAT&&(ct=r.RG16F),V===r.UNSIGNED_BYTE&&(ct=r.RG8)),M===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(ct=r.RG8UI),V===r.UNSIGNED_SHORT&&(ct=r.RG16UI),V===r.UNSIGNED_INT&&(ct=r.RG32UI),V===r.BYTE&&(ct=r.RG8I),V===r.SHORT&&(ct=r.RG16I),V===r.INT&&(ct=r.RG32I)),M===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),V===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),V===r.UNSIGNED_INT&&(ct=r.RGB32UI),V===r.BYTE&&(ct=r.RGB8I),V===r.SHORT&&(ct=r.RGB16I),V===r.INT&&(ct=r.RGB32I)),M===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),V===r.UNSIGNED_INT&&(ct=r.RGBA32UI),V===r.BYTE&&(ct=r.RGBA8I),V===r.SHORT&&(ct=r.RGBA16I),V===r.INT&&(ct=r.RGBA32I)),M===r.RGB&&(V===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),M===r.RGBA){const At=pt?Xc:Xe.getTransfer($);V===r.FLOAT&&(ct=r.RGBA32F),V===r.HALF_FLOAT&&(ct=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ct=At===en?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function N(w,M){let V;return w?M===null||M===ka||M===Rl?V=r.DEPTH24_STENCIL8:M===_a?V=r.DEPTH32F_STENCIL8:M===Al&&(V=r.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ka||M===Rl?V=r.DEPTH_COMPONENT24:M===_a?V=r.DEPTH_COMPONENT32F:M===Al&&(V=r.DEPTH_COMPONENT16),V}function F(w,M){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qn&&w.minFilter!==Jn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function B(w){const M=w.target;M.removeEventListener("dispose",B),T(M),M.isVideoTexture&&_.delete(M)}function z(w){const M=w.target;M.removeEventListener("dispose",z),mt(M)}function T(w){const M=s.get(w);if(M.__webglInit===void 0)return;const V=w.source,$=g.get(V);if($){const pt=$[M.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&L(w),Object.keys($).length===0&&g.delete(V)}s.remove(w)}function L(w){const M=s.get(w);r.deleteTexture(M.__webglTexture);const V=w.source,$=g.get(V);delete $[M.__cacheKey],f.memory.textures--}function mt(w){const M=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let pt=0;pt<M.__webglFramebuffer[$].length;pt++)r.deleteFramebuffer(M.__webglFramebuffer[$][pt]);else r.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)r.deleteFramebuffer(M.__webglFramebuffer[$]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=w.textures;for(let $=0,pt=V.length;$<pt;$++){const ct=s.get(V[$]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),f.memory.textures--),s.remove(V[$])}s.remove(w)}let G=0;function et(){G=0}function rt(){const w=G;return w>=l.maxTextures&&he("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),G+=1,w}function ot(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function Z(w,M){const V=s.get(w);if(w.isVideoTexture&&Ue(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){const $=w.image;if($===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(V,w,M);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+M)}function O(w,M){const V=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){nt(V,w,M);return}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+M)}function P(w,M){const V=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){nt(V,w,M);return}i.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+M)}function J(w,M){const V=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&V.__version!==w.version){yt(V,w,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+M)}const gt={[Tl]:r.REPEAT,[fs]:r.CLAMP_TO_EDGE,[nd]:r.MIRRORED_REPEAT},vt={[Qn]:r.NEAREST,[vy]:r.NEAREST_MIPMAP_NEAREST,[Ic]:r.NEAREST_MIPMAP_LINEAR,[Jn]:r.LINEAR,[kf]:r.LINEAR_MIPMAP_NEAREST,[qs]:r.LINEAR_MIPMAP_LINEAR},I={[Sy]:r.NEVER,[Ay]:r.ALWAYS,[My]:r.LESS,[jd]:r.LEQUAL,[Ey]:r.EQUAL,[Zd]:r.GEQUAL,[by]:r.GREATER,[Ty]:r.NOTEQUAL};function q(w,M){if(M.type===_a&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Jn||M.magFilter===kf||M.magFilter===Ic||M.magFilter===qs||M.minFilter===Jn||M.minFilter===kf||M.minFilter===Ic||M.minFilter===qs)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,gt[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,gt[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,gt[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,vt[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,vt[M.minFilter]),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,I[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qn||M.minFilter!==Ic&&M.minFilter!==qs||M.type===_a&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function _t(w,M){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",B));const $=M.source;let pt=g.get($);pt===void 0&&(pt={},g.set($,pt));const ct=ot(M);if(ct!==w.__cacheKey){pt[ct]===void 0&&(pt[ct]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,V=!0),pt[ct].usedTimes++;const At=pt[w.__cacheKey];At!==void 0&&(pt[w.__cacheKey].usedTimes--,At.usedTimes===0&&L(M)),w.__cacheKey=ct,w.__webglTexture=pt[ct].texture}return V}function Ot(w,M,V){return Math.floor(Math.floor(w/V)/M)}function Yt(w,M,V,$){const ct=w.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,V,$,M.data);else{ct.sort((bt,Rt)=>bt.start-Rt.start);let At=0;for(let bt=1;bt<ct.length;bt++){const Rt=ct[At],Ht=ct[bt],Bt=Rt.start+Rt.count,Gt=Ot(Ht.start,M.width,4),le=Ot(Rt.start,M.width,4);Ht.start<=Bt+1&&Gt===le&&Ot(Ht.start+Ht.count-1,M.width,4)===Gt?Rt.count=Math.max(Rt.count,Ht.start+Ht.count-Rt.start):(++At,ct[At]=Ht)}ct.length=At+1;const dt=r.getParameter(r.UNPACK_ROW_LENGTH),Tt=r.getParameter(r.UNPACK_SKIP_PIXELS),Et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let bt=0,Rt=ct.length;bt<Rt;bt++){const Ht=ct[bt],Bt=Math.floor(Ht.start/4),Gt=Math.ceil(Ht.count/4),le=Bt%M.width,X=Math.floor(Bt/M.width),Nt=Gt,Ut=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,le),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,le,X,Nt,Ut,V,$,M.data)}w.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Tt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Et)}}function nt(w,M,V){let $=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=r.TEXTURE_3D);const pt=_t(w,M),ct=M.source;i.bindTexture($,w.__webglTexture,r.TEXTURE0+V);const At=s.get(ct);if(ct.version!==At.__version||pt===!0){i.activeTexture(r.TEXTURE0+V);const dt=Xe.getPrimaries(Xe.workingColorSpace),Tt=M.colorSpace===Ws?null:Xe.getPrimaries(M.colorSpace),Et=M.colorSpace===Ws||dt===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let bt=D(M.image,!1,l.maxTextureSize);bt=Ye(M,bt);const Rt=c.convert(M.format,M.colorSpace),Ht=c.convert(M.type);let Bt=U(M.internalFormat,Rt,Ht,M.colorSpace,M.isVideoTexture);q($,M);let Gt;const le=M.mipmaps,X=M.isVideoTexture!==!0,Nt=At.__version===void 0||pt===!0,Ut=ct.dataReady,Ft=F(M,bt);if(M.isDepthTexture)Bt=N(M.format===Ur,M.type),Nt&&(X?i.texStorage2D(r.TEXTURE_2D,1,Bt,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,Bt,bt.width,bt.height,0,Rt,Ht,null));else if(M.isDataTexture)if(le.length>0){X&&Nt&&i.texStorage2D(r.TEXTURE_2D,Ft,Bt,le[0].width,le[0].height);for(let Dt=0,ft=le.length;Dt<ft;Dt++)Gt=le[Dt],X?Ut&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Gt.width,Gt.height,Rt,Ht,Gt.data):i.texImage2D(r.TEXTURE_2D,Dt,Bt,Gt.width,Gt.height,0,Rt,Ht,Gt.data);M.generateMipmaps=!1}else X?(Nt&&i.texStorage2D(r.TEXTURE_2D,Ft,Bt,bt.width,bt.height),Ut&&Yt(M,bt,Rt,Ht)):i.texImage2D(r.TEXTURE_2D,0,Bt,bt.width,bt.height,0,Rt,Ht,bt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Bt,le[0].width,le[0].height,bt.depth);for(let Dt=0,ft=le.length;Dt<ft;Dt++)if(Gt=le[Dt],M.format!==va)if(Rt!==null)if(X){if(Ut)if(M.layerUpdates.size>0){const Vt=mx(Gt.width,Gt.height,M.format,M.type);for(const re of M.layerUpdates){const Oe=Gt.data.subarray(re*Vt/Gt.data.BYTES_PER_ELEMENT,(re+1)*Vt/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,re,Gt.width,Gt.height,1,Rt,Oe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,0,Gt.width,Gt.height,bt.depth,Rt,Gt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Dt,Bt,Gt.width,Gt.height,bt.depth,0,Gt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ut&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,0,Gt.width,Gt.height,bt.depth,Rt,Ht,Gt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Dt,Bt,Gt.width,Gt.height,bt.depth,0,Rt,Ht,Gt.data)}else{X&&Nt&&i.texStorage2D(r.TEXTURE_2D,Ft,Bt,le[0].width,le[0].height);for(let Dt=0,ft=le.length;Dt<ft;Dt++)Gt=le[Dt],M.format!==va?Rt!==null?X?Ut&&i.compressedTexSubImage2D(r.TEXTURE_2D,Dt,0,0,Gt.width,Gt.height,Rt,Gt.data):i.compressedTexImage2D(r.TEXTURE_2D,Dt,Bt,Gt.width,Gt.height,0,Gt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ut&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Gt.width,Gt.height,Rt,Ht,Gt.data):i.texImage2D(r.TEXTURE_2D,Dt,Bt,Gt.width,Gt.height,0,Rt,Ht,Gt.data)}else if(M.isDataArrayTexture)if(X){if(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Bt,bt.width,bt.height,bt.depth),Ut)if(M.layerUpdates.size>0){const Dt=mx(bt.width,bt.height,M.format,M.type);for(const ft of M.layerUpdates){const Vt=bt.data.subarray(ft*Dt/bt.data.BYTES_PER_ELEMENT,(ft+1)*Dt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ft,bt.width,bt.height,1,Rt,Ht,Vt)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Rt,Ht,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,bt.width,bt.height,bt.depth,0,Rt,Ht,bt.data);else if(M.isData3DTexture)X?(Nt&&i.texStorage3D(r.TEXTURE_3D,Ft,Bt,bt.width,bt.height,bt.depth),Ut&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Rt,Ht,bt.data)):i.texImage3D(r.TEXTURE_3D,0,Bt,bt.width,bt.height,bt.depth,0,Rt,Ht,bt.data);else if(M.isFramebufferTexture){if(Nt)if(X)i.texStorage2D(r.TEXTURE_2D,Ft,Bt,bt.width,bt.height);else{let Dt=bt.width,ft=bt.height;for(let Vt=0;Vt<Ft;Vt++)i.texImage2D(r.TEXTURE_2D,Vt,Bt,Dt,ft,0,Rt,Ht,null),Dt>>=1,ft>>=1}}else if(le.length>0){if(X&&Nt){const Dt=K(le[0]);i.texStorage2D(r.TEXTURE_2D,Ft,Bt,Dt.width,Dt.height)}for(let Dt=0,ft=le.length;Dt<ft;Dt++)Gt=le[Dt],X?Ut&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Rt,Ht,Gt):i.texImage2D(r.TEXTURE_2D,Dt,Bt,Rt,Ht,Gt);M.generateMipmaps=!1}else if(X){if(Nt){const Dt=K(bt);i.texStorage2D(r.TEXTURE_2D,Ft,Bt,Dt.width,Dt.height)}Ut&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Ht,bt)}else i.texImage2D(r.TEXTURE_2D,0,Bt,Rt,Ht,bt);E(M)&&y($),At.__version=ct.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function yt(w,M,V){if(M.image.length!==6)return;const $=_t(w,M),pt=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+V);const ct=s.get(pt);if(pt.version!==ct.__version||$===!0){i.activeTexture(r.TEXTURE0+V);const At=Xe.getPrimaries(Xe.workingColorSpace),dt=M.colorSpace===Ws?null:Xe.getPrimaries(M.colorSpace),Tt=M.colorSpace===Ws||At===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Et=M.isCompressedTexture||M.image[0].isCompressedTexture,bt=M.image[0]&&M.image[0].isDataTexture,Rt=[];for(let ft=0;ft<6;ft++)!Et&&!bt?Rt[ft]=D(M.image[ft],!0,l.maxCubemapSize):Rt[ft]=bt?M.image[ft].image:M.image[ft],Rt[ft]=Ye(M,Rt[ft]);const Ht=Rt[0],Bt=c.convert(M.format,M.colorSpace),Gt=c.convert(M.type),le=U(M.internalFormat,Bt,Gt,M.colorSpace),X=M.isVideoTexture!==!0,Nt=ct.__version===void 0||$===!0,Ut=pt.dataReady;let Ft=F(M,Ht);q(r.TEXTURE_CUBE_MAP,M);let Dt;if(Et){X&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,le,Ht.width,Ht.height);for(let ft=0;ft<6;ft++){Dt=Rt[ft].mipmaps;for(let Vt=0;Vt<Dt.length;Vt++){const re=Dt[Vt];M.format!==va?Bt!==null?X?Ut&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,re.width,re.height,Bt,re.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,le,re.width,re.height,0,re.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,re.width,re.height,Bt,Gt,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,le,re.width,re.height,0,Bt,Gt,re.data)}}}else{if(Dt=M.mipmaps,X&&Nt){Dt.length>0&&Ft++;const ft=K(Rt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,le,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(bt){X?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Rt[ft].width,Rt[ft].height,Bt,Gt,Rt[ft].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,le,Rt[ft].width,Rt[ft].height,0,Bt,Gt,Rt[ft].data);for(let Vt=0;Vt<Dt.length;Vt++){const Oe=Dt[Vt].image[ft].image;X?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,Oe.width,Oe.height,Bt,Gt,Oe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,le,Oe.width,Oe.height,0,Bt,Gt,Oe.data)}}else{X?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Bt,Gt,Rt[ft]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,le,Bt,Gt,Rt[ft]);for(let Vt=0;Vt<Dt.length;Vt++){const re=Dt[Vt];X?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,Bt,Gt,re.image[ft]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,le,Bt,Gt,re.image[ft])}}}E(M)&&y(r.TEXTURE_CUBE_MAP),ct.__version=pt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Lt(w,M,V,$,pt,ct){const At=c.convert(V.format,V.colorSpace),dt=c.convert(V.type),Tt=U(V.internalFormat,At,dt,V.colorSpace),Et=s.get(M),bt=s.get(V);if(bt.__renderTarget=M,!Et.__hasExternalTextures){const Rt=Math.max(1,M.width>>ct),Ht=Math.max(1,M.height>>ct);pt===r.TEXTURE_3D||pt===r.TEXTURE_2D_ARRAY?i.texImage3D(pt,ct,Tt,Rt,Ht,M.depth,0,At,dt,null):i.texImage2D(pt,ct,Tt,Rt,Ht,0,At,dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),nn(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,pt,bt.__webglTexture,0,k(M)):(pt===r.TEXTURE_2D||pt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,pt,bt.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(w,M,V){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer){const $=M.depthTexture,pt=$&&$.isDepthTexture?$.type:null,ct=N(M.stencilBuffer,pt),At=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;nn(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(M),ct,M.width,M.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(M),ct,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ct,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,w)}else{const $=M.textures;for(let pt=0;pt<$.length;pt++){const ct=$[pt],At=c.convert(ct.format,ct.colorSpace),dt=c.convert(ct.type),Tt=U(ct.internalFormat,At,dt,ct.colorSpace);nn(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(M),Tt,M.width,M.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(M),Tt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function te(w,M,V){const $=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(M.depthTexture);if(pt.__renderTarget=M,(!pt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),pt.__webglTexture===void 0){pt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),q(r.TEXTURE_CUBE_MAP,M.depthTexture);const Et=c.convert(M.depthTexture.format),bt=c.convert(M.depthTexture.type);let Rt;M.depthTexture.format===ps?Rt=r.DEPTH_COMPONENT24:M.depthTexture.format===Ur&&(Rt=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Rt,M.width,M.height,0,Et,bt,null)}}else Z(M.depthTexture,0);const ct=pt.__webglTexture,At=k(M),dt=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,Tt=M.depthTexture.format===Ur?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ps)nn(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Tt,dt,ct,0,At):r.framebufferTexture2D(r.FRAMEBUFFER,Tt,dt,ct,0);else if(M.depthTexture.format===Ur)nn(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Tt,dt,ct,0,At):r.framebufferTexture2D(r.FRAMEBUFFER,Tt,dt,ct,0);else throw new Error("Unknown depthTexture format")}function ce(w){const M=s.get(w),V=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const pt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",pt)};$.addEventListener("dispose",pt),M.__depthDisposeCallback=pt}M.__boundDepthTexture=$}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let $=0;$<6;$++)te(M.__webglFramebuffer[$],w,$);else{const $=w.texture.mipmaps;$&&$.length>0?te(M.__webglFramebuffer[0],w,0):te(M.__webglFramebuffer,w,0)}else if(V){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=r.createRenderbuffer(),qt(M.__webglDepthbuffer[$],w,!1);else{const pt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,ct)}}else{const $=w.texture.mipmaps;if($&&$.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),qt(M.__webglDepthbuffer,w,!1);else{const pt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function xn(w,M,V){const $=s.get(w);M!==void 0&&Lt($.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&ce(w)}function Ce(w){const M=w.texture,V=s.get(w),$=s.get(M);w.addEventListener("dispose",z);const pt=w.textures,ct=w.isWebGLCubeRenderTarget===!0,At=pt.length>1;if(At||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=M.version,f.memory.textures++),ct){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let Tt=0;Tt<M.mipmaps.length;Tt++)V.__webglFramebuffer[dt][Tt]=r.createFramebuffer()}else V.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)V.__webglFramebuffer[dt]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(At)for(let dt=0,Tt=pt.length;dt<Tt;dt++){const Et=s.get(pt[dt]);Et.__webglTexture===void 0&&(Et.__webglTexture=r.createTexture(),f.memory.textures++)}if(w.samples>0&&nn(w)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let dt=0;dt<pt.length;dt++){const Tt=pt[dt];V.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[dt]);const Et=c.convert(Tt.format,Tt.colorSpace),bt=c.convert(Tt.type),Rt=U(Tt.internalFormat,Et,bt,Tt.colorSpace,w.isXRRenderTarget===!0),Ht=k(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Rt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,V.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),qt(V.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),q(r.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Tt=0;Tt<M.mipmaps.length;Tt++)Lt(V.__webglFramebuffer[dt][Tt],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt);else Lt(V.__webglFramebuffer[dt],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);E(M)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(At){for(let dt=0,Tt=pt.length;dt<Tt;dt++){const Et=pt[dt],bt=s.get(Et);let Rt=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Rt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,bt.__webglTexture),q(Rt,Et),Lt(V.__webglFramebuffer,w,Et,r.COLOR_ATTACHMENT0+dt,Rt,0),E(Et)&&y(Rt)}i.unbindTexture()}else{let dt=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(dt,$.__webglTexture),q(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let Tt=0;Tt<M.mipmaps.length;Tt++)Lt(V.__webglFramebuffer[Tt],w,M,r.COLOR_ATTACHMENT0,dt,Tt);else Lt(V.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,dt,0);E(M)&&y(dt),i.unbindTexture()}w.depthBuffer&&ce(w)}function ye(w){const M=w.textures;for(let V=0,$=M.length;V<$;V++){const pt=M[V];if(E(pt)){const ct=C(w),At=s.get(pt).__webglTexture;i.bindTexture(ct,At),y(ct),i.unbindTexture()}}}const Le=[],ge=[];function mn(w){if(w.samples>0){if(nn(w)===!1){const M=w.textures,V=w.width,$=w.height;let pt=r.COLOR_BUFFER_BIT;const ct=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=s.get(w),dt=M.length>1;if(dt)for(let Et=0;Et<M.length;Et++)i.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Tt=w.texture.mipmaps;Tt&&Tt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(pt|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(pt|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);const bt=s.get(M[Et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,V,$,0,0,V,$,pt,r.NEAREST),m===!0&&(Le.length=0,ge.length=0,Le.push(r.COLOR_ATTACHMENT0+Et),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Le.push(ct),ge.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Le))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<M.length;Et++){i.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);const bt=s.get(M[Et]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function k(w){return Math.min(l.maxSamples,w.samples)}function nn(w){const M=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ue(w){const M=f.render.frame;_.get(w)!==M&&(_.set(w,M),w.update())}function Ye(w,M){const V=w.colorSpace,$=w.format,pt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==So&&V!==Ws&&(Xe.getTransfer(V)===en?($!==va||pt!==Pi)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",V)),M}function K(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=et,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=P,this.setTextureCube=J,this.rebindTextures=xn,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function tS(r,t){function i(s,l=Ws){let c;const f=Xe.getTransfer(l);if(s===Pi)return r.UNSIGNED_BYTE;if(s===Gd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===l0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===c0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===r0)return r.BYTE;if(s===o0)return r.SHORT;if(s===Al)return r.UNSIGNED_SHORT;if(s===Hd)return r.INT;if(s===ka)return r.UNSIGNED_INT;if(s===_a)return r.FLOAT;if(s===hs)return r.HALF_FLOAT;if(s===u0)return r.ALPHA;if(s===f0)return r.RGB;if(s===va)return r.RGBA;if(s===ps)return r.DEPTH_COMPONENT;if(s===Ur)return r.DEPTH_STENCIL;if(s===kd)return r.RED;if(s===Xd)return r.RED_INTEGER;if(s===yo)return r.RG;if(s===Wd)return r.RG_INTEGER;if(s===Yd)return r.RGBA_INTEGER;if(s===Fc||s===Bc||s===zc||s===Hc)if(f===en)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===id||s===ad||s===sd||s===rd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===od||s===ld||s===cd||s===ud||s===fd||s===dd||s===hd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===od||s===ld)return f===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===cd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ud)return c.COMPRESSED_R11_EAC;if(s===fd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===dd)return c.COMPRESSED_RG11_EAC;if(s===hd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===pd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===md)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_d)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Md)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ed)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Td)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ad)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rd)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cd||s===wd||s===Dd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Cd)return f===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nd||s===Ld||s===Ud||s===Od)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Nd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Od)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const f2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d2=`
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

}`;class h2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new y0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Xa({vertexShader:f2,fragmentShader:d2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ve(new us(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p2 extends Mo{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,b=null;const D=typeof XRWebGLBinding<"u",E=new h2,y={},C=i.getContextAttributes();let U=null,N=null;const F=[],B=[],z=new we;let T=null;const L=new Ti;L.viewport=new Tn;const mt=new Ti;mt.viewport=new Tn;const G=[L,mt],et=new Yy;let rt=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let yt=F[nt];return yt===void 0&&(yt=new Xf,F[nt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(nt){let yt=F[nt];return yt===void 0&&(yt=new Xf,F[nt]=yt),yt.getGripSpace()},this.getHand=function(nt){let yt=F[nt];return yt===void 0&&(yt=new Xf,F[nt]=yt),yt.getHandSpace()};function Z(nt){const yt=B.indexOf(nt.inputSource);if(yt===-1)return;const Lt=F[yt];Lt!==void 0&&(Lt.update(nt.inputSource,nt.frame,p||f),Lt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",P);for(let nt=0;nt<F.length;nt++){const yt=B[nt];yt!==null&&(B[nt]=null,F[nt].disconnect(yt))}rt=null,ot=null,E.reset();for(const nt in y)delete y[nt];t.setRenderTarget(U),S=null,g=null,v=null,l=null,N=null,Yt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",O),l.addEventListener("inputsourceschange",P),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,qt=null,te=null;C.depth&&(te=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=C.stencil?Ur:ps,qt=C.stencil?Rl:ka);const ce={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(ce),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Va(g.textureWidth,g.textureHeight,{format:va,type:Pi,depthTexture:new Dl(g.textureWidth,g.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Lt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Va(S.framebufferWidth,S.framebufferHeight,{format:va,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Yt.setContext(l),Yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function P(nt){for(let yt=0;yt<nt.removed.length;yt++){const Lt=nt.removed[yt],qt=B.indexOf(Lt);qt>=0&&(B[qt]=null,F[qt].disconnect(Lt))}for(let yt=0;yt<nt.added.length;yt++){const Lt=nt.added[yt];let qt=B.indexOf(Lt);if(qt===-1){for(let ce=0;ce<F.length;ce++)if(ce>=B.length){B.push(Lt),qt=ce;break}else if(B[ce]===null){B[ce]=Lt,qt=ce;break}if(qt===-1)break}const te=F[qt];te&&te.connect(Lt)}}const J=new j,gt=new j;function vt(nt,yt,Lt){J.setFromMatrixPosition(yt.matrixWorld),gt.setFromMatrixPosition(Lt.matrixWorld);const qt=J.distanceTo(gt),te=yt.projectionMatrix.elements,ce=Lt.projectionMatrix.elements,xn=te[14]/(te[10]-1),Ce=te[14]/(te[10]+1),ye=(te[9]+1)/te[5],Le=(te[9]-1)/te[5],ge=(te[8]-1)/te[0],mn=(ce[8]+1)/ce[0],k=xn*ge,nn=xn*mn,Ue=qt/(-ge+mn),Ye=Ue*-ge;if(yt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ye),nt.translateZ(Ue),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),te[10]===-1)nt.projectionMatrix.copy(yt.projectionMatrix),nt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const K=xn+Ue,w=Ce+Ue,M=k-Ye,V=nn+(qt-Ye),$=ye*Ce/w*K,pt=Le*Ce/w*K;nt.projectionMatrix.makePerspective(M,V,$,pt,K,w),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function I(nt,yt){yt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(yt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let yt=nt.near,Lt=nt.far;E.texture!==null&&(E.depthNear>0&&(yt=E.depthNear),E.depthFar>0&&(Lt=E.depthFar)),et.near=mt.near=L.near=yt,et.far=mt.far=L.far=Lt,(rt!==et.near||ot!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),rt=et.near,ot=et.far),et.layers.mask=nt.layers.mask|6,L.layers.mask=et.layers.mask&-5,mt.layers.mask=et.layers.mask&-3;const qt=nt.parent,te=et.cameras;I(et,qt);for(let ce=0;ce<te.length;ce++)I(te[ce],qt);te.length===2?vt(et,L,mt):et.projectionMatrix.copy(L.projectionMatrix),q(nt,et,qt)};function q(nt,yt,Lt){Lt===null?nt.matrix.copy(yt.matrixWorld):(nt.matrix.copy(Lt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(yt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(yt.projectionMatrix),nt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=wl*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(nt){m=nt,g!==null&&(g.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(et)},this.getCameraTexture=function(nt){return y[nt]};let _t=null;function Ot(nt,yt){if(_=yt.getViewerPose(p||f),b=yt,_!==null){const Lt=_.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let qt=!1;Lt.length!==et.cameras.length&&(et.cameras.length=0,qt=!0);for(let Ce=0;Ce<Lt.length;Ce++){const ye=Lt[Ce];let Le=null;if(S!==null)Le=S.getViewport(ye);else{const mn=v.getViewSubImage(g,ye);Le=mn.viewport,Ce===0&&(t.setRenderTargetTextures(N,mn.colorTexture,mn.depthStencilTexture),t.setRenderTarget(N))}let ge=G[Ce];ge===void 0&&(ge=new Ti,ge.layers.enable(Ce),ge.viewport=new Tn,G[Ce]=ge),ge.matrix.fromArray(ye.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ye.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Le.x,Le.y,Le.width,Le.height),Ce===0&&(et.matrix.copy(ge.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),qt===!0&&et.cameras.push(ge)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=s.getBinding();const Ce=v.getDepthInformation(Lt[0]);Ce&&Ce.isValid&&Ce.texture&&E.init(Ce,l.renderState)}if(te&&te.includes("camera-access")&&D){t.state.unbindTexture(),v=s.getBinding();for(let Ce=0;Ce<Lt.length;Ce++){const ye=Lt[Ce].camera;if(ye){let Le=y[ye];Le||(Le=new y0,y[ye]=Le);const ge=v.getCameraImage(ye);Le.sourceTexture=ge}}}}for(let Lt=0;Lt<F.length;Lt++){const qt=B[Lt],te=F[Lt];qt!==null&&te!==void 0&&te.update(qt,yt,p||f)}_t&&_t(nt,yt),yt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:yt}),b=null}const Yt=new Zy;Yt.setAnimationLoop(Ot),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const uo=new Qi,m2=new dn;function g2(r,t){function i(E,y){E.matrixAutoUpdate===!0&&E.updateMatrix(),y.value.copy(E.matrix)}function s(E,y){y.color.getRGB(E.fogColor.value,Fy(r)),y.isFog?(E.fogNear.value=y.near,E.fogFar.value=y.far):y.isFogExp2&&(E.fogDensity.value=y.density)}function l(E,y,C,U,N){y.isMeshBasicMaterial?c(E,y):y.isMeshLambertMaterial?(c(E,y),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(E,y),v(E,y)):y.isMeshPhongMaterial?(c(E,y),_(E,y),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(E,y),g(E,y),y.isMeshPhysicalMaterial&&S(E,y,N)):y.isMeshMatcapMaterial?(c(E,y),b(E,y)):y.isMeshDepthMaterial?c(E,y):y.isMeshDistanceMaterial?(c(E,y),D(E,y)):y.isMeshNormalMaterial?c(E,y):y.isLineBasicMaterial?(f(E,y),y.isLineDashedMaterial&&h(E,y)):y.isPointsMaterial?m(E,y,C,U):y.isSpriteMaterial?p(E,y):y.isShadowMaterial?(E.color.value.copy(y.color),E.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(E,y){E.opacity.value=y.opacity,y.color&&E.diffuse.value.copy(y.color),y.emissive&&E.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.bumpMap&&(E.bumpMap.value=y.bumpMap,i(y.bumpMap,E.bumpMapTransform),E.bumpScale.value=y.bumpScale,y.side===gi&&(E.bumpScale.value*=-1)),y.normalMap&&(E.normalMap.value=y.normalMap,i(y.normalMap,E.normalMapTransform),E.normalScale.value.copy(y.normalScale),y.side===gi&&E.normalScale.value.negate()),y.displacementMap&&(E.displacementMap.value=y.displacementMap,i(y.displacementMap,E.displacementMapTransform),E.displacementScale.value=y.displacementScale,E.displacementBias.value=y.displacementBias),y.emissiveMap&&(E.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,E.emissiveMapTransform)),y.specularMap&&(E.specularMap.value=y.specularMap,i(y.specularMap,E.specularMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest);const C=t.get(y),U=C.envMap,N=C.envMapRotation;U&&(E.envMap.value=U,uo.copy(N),uo.x*=-1,uo.y*=-1,uo.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(uo.y*=-1,uo.z*=-1),E.envMapRotation.value.setFromMatrix4(m2.makeRotationFromEuler(uo)),E.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=y.reflectivity,E.ior.value=y.ior,E.refractionRatio.value=y.refractionRatio),y.lightMap&&(E.lightMap.value=y.lightMap,E.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,E.lightMapTransform)),y.aoMap&&(E.aoMap.value=y.aoMap,E.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,E.aoMapTransform))}function f(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform))}function h(E,y){E.dashSize.value=y.dashSize,E.totalSize.value=y.dashSize+y.gapSize,E.scale.value=y.scale}function m(E,y,C,U){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.size.value=y.size*C,E.scale.value=U*.5,y.map&&(E.map.value=y.map,i(y.map,E.uvTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function p(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.rotation.value=y.rotation,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function _(E,y){E.specular.value.copy(y.specular),E.shininess.value=Math.max(y.shininess,1e-4)}function v(E,y){y.gradientMap&&(E.gradientMap.value=y.gradientMap)}function g(E,y){E.metalness.value=y.metalness,y.metalnessMap&&(E.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,E.metalnessMapTransform)),E.roughness.value=y.roughness,y.roughnessMap&&(E.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,E.roughnessMapTransform)),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)}function S(E,y,C){E.ior.value=y.ior,y.sheen>0&&(E.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),E.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(E.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,E.sheenColorMapTransform)),y.sheenRoughnessMap&&(E.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,E.sheenRoughnessMapTransform))),y.clearcoat>0&&(E.clearcoat.value=y.clearcoat,E.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(E.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,E.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(E.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===gi&&E.clearcoatNormalScale.value.negate())),y.dispersion>0&&(E.dispersion.value=y.dispersion),y.iridescence>0&&(E.iridescence.value=y.iridescence,E.iridescenceIOR.value=y.iridescenceIOR,E.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(E.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,E.iridescenceMapTransform)),y.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),y.transmission>0&&(E.transmission.value=y.transmission,E.transmissionSamplerMap.value=C.texture,E.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(E.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,E.transmissionMapTransform)),E.thickness.value=y.thickness,y.thicknessMap&&(E.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=y.attenuationDistance,E.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(E.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(E.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=y.specularIntensity,E.specularColor.value.copy(y.specularColor),y.specularColorMap&&(E.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,E.specularColorMapTransform)),y.specularIntensityMap&&(E.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,E.specularIntensityMapTransform))}function b(E,y){y.matcap&&(E.matcap.value=y.matcap)}function D(E,y){const C=t.get(y).light;E.referencePosition.value.setFromMatrixPosition(C.matrixWorld),E.nearDistance.value=C.shadow.camera.near,E.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function _2(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const N=U.program;s.uniformBlockBinding(C,N)}function p(C,U){let N=l[C.id];N===void 0&&(b(C),N=_(C),l[C.id]=N,C.addEventListener("dispose",E));const F=U.program;s.updateUBOMapping(C,F);const B=t.render.frame;c[C.id]!==B&&(g(C),c[C.id]=B)}function _(C){const U=v();C.__bindingPointIndex=U;const N=r.createBuffer(),F=C.__size,B=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,N),N}function v(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const U=l[C.id],N=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,z=N.length;B<z;B++){const T=Array.isArray(N[B])?N[B]:[N[B]];for(let L=0,mt=T.length;L<mt;L++){const G=T[L];if(S(G,B,L,F)===!0){const et=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let ot=0;for(let Z=0;Z<rt.length;Z++){const O=rt[Z],P=D(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,et+ot,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,ot),ot+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,et,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,U,N,F){const B=C.value,z=U+"_"+N;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const T=F[z];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return F[z]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function b(C){const U=C.uniforms;let N=0;const F=16;for(let z=0,T=U.length;z<T;z++){const L=Array.isArray(U[z])?U[z]:[U[z]];for(let mt=0,G=L.length;mt<G;mt++){const et=L[mt],rt=Array.isArray(et.value)?et.value:[et.value];for(let ot=0,Z=rt.length;ot<Z;ot++){const O=rt[ot],P=D(O),J=N%F,gt=J%P.boundary,vt=J+gt;N+=gt,vt!==0&&F-vt<P.storage&&(N+=F-vt),et.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=N,N+=P.storage}}}const B=N%F;return B>0&&(N+=F-B),C.__size=N,C.__cache={},this}function D(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",C),U}function E(C){const U=C.target;U.removeEventListener("dispose",E);const N=f.indexOf(U.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function y(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}const v2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cs=null;function x2(){return cs===null&&(cs=new v0(v2,16,16,yo,hs),cs.name="DFG_LUT",cs.minFilter=Jn,cs.magFilter=Jn,cs.wrapS=fs,cs.wrapT=fs,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}class eS{constructor(t={}){const{canvas:i=Ry(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Pi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const D=S,E=new Set([Yd,Wd,Xd]),y=new Set([Pi,ka,Al,Rl,Gd,Vd]),C=new Uint32Array(4),U=new Int32Array(4);let N=null,F=null;const B=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let mt=!1;this._outputColorSpace=Wn;let G=0,et=0,rt=null,ot=-1,Z=null;const O=new Tn,P=new Tn;let J=null;const gt=new ue(0);let vt=0,I=i.width,q=i.height,_t=1,Ot=null,Yt=null;const nt=new Tn(0,0,I,q),yt=new Tn(0,0,I,q);let Lt=!1;const qt=new Jd;let te=!1,ce=!1;const xn=new dn,Ce=new j,ye=new Tn,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function mn(){return rt===null?_t:1}let k=s;function nn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fd}`),i.addEventListener("webglcontextlost",Vt,!1),i.addEventListener("webglcontextrestored",re,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),k===null){const Y="webgl2";if(k=nn(Y,R),k===null)throw nn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw ke("WebGLRenderer: "+R.message),R}let Ue,Ye,K,w,M,V,$,pt,ct,At,dt,Tt,Et,bt,Rt,Ht,Bt,Gt,le,X,Nt,Ut,Ft;function Dt(){Ue=new ST(k),Ue.init(),Nt=new tS(k,Ue),Ye=new hT(k,Ue,t,Nt),K=new c2(k,Ue),Ye.reversedDepthBuffer&&g&&K.buffers.depth.setReversed(!0),w=new bT(k),M=new ZA,V=new u2(k,Ue,K,M,Ye,Nt,w),$=new yT(L),pt=new wE(k),Ut=new fT(k,pt),ct=new MT(k,pt,w,Ut),At=new AT(k,ct,pt,Ut,w),Gt=new TT(k,Ye,V),Rt=new pT(M),dt=new jA(L,$,Ue,Ye,Ut,Rt),Tt=new g2(L,M),Et=new QA,bt=new i2(Ue),Bt=new uT(L,$,K,At,b,m),Ht=new l2(L,At,Ye),Ft=new _2(k,w,Ye,K),le=new dT(k,Ue,w),X=new ET(k,Ue,w),w.programs=dt.programs,L.capabilities=Ye,L.extensions=Ue,L.properties=M,L.renderLists=Et,L.shadowMap=Ht,L.state=K,L.info=w}Dt(),D!==Pi&&(T=new CT(D,i.width,i.height,l,c));const ft=new p2(L,k);this.xr=ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(I,q,!1))},this.getSize=function(R){return R.set(I,q)},this.setSize=function(R,Y,ut=!0){if(ft.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,q=Y,i.width=Math.floor(R*_t),i.height=Math.floor(Y*_t),ut===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(I*_t,q*_t).floor()},this.setDrawingBufferSize=function(R,Y,ut){I=R,q=Y,_t=ut,i.width=Math.floor(R*ut),i.height=Math.floor(Y*ut),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(D===Pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,Y,ut,at){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,Y,ut,at),K.viewport(O.copy(nt).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,Y,ut,at){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,ut,at),K.scissor(P.copy(yt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(R){K.setScissorTest(Lt=R)},this.setOpaqueSort=function(R){Ot=R},this.setTransparentSort=function(R){Yt=R},this.getClearColor=function(R){return R.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ut=!0){let at=0;if(R){let tt=!1;if(rt!==null){const It=rt.texture.format;tt=E.has(It)}if(tt){const It=rt.texture.type,Wt=y.has(It),zt=Bt.getClearColor(),jt=Bt.getClearAlpha(),ne=zt.r,Qt=zt.g,de=zt.b;Wt?(C[0]=ne,C[1]=Qt,C[2]=de,C[3]=jt,k.clearBufferuiv(k.COLOR,0,C)):(U[0]=ne,U[1]=Qt,U[2]=de,U[3]=jt,k.clearBufferiv(k.COLOR,0,U))}else at|=k.COLOR_BUFFER_BIT}Y&&(at|=k.DEPTH_BUFFER_BIT),ut&&(at|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&k.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Vt,!1),i.removeEventListener("webglcontextrestored",re,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Bt.dispose(),Et.dispose(),bt.dispose(),M.dispose(),$.dispose(),At.dispose(),Ut.dispose(),Ft.dispose(),dt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Sa),ft.removeEventListener("sessionend",gs),Bi.stop()};function Vt(R){R.preventDefault(),Xm("WebGLRenderer: Context Lost."),mt=!0}function re(){Xm("WebGLRenderer: Context Restored."),mt=!1;const R=w.autoReset,Y=Ht.enabled,ut=Ht.autoUpdate,at=Ht.needsUpdate,tt=Ht.type;Dt(),w.autoReset=R,Ht.enabled=Y,Ht.autoUpdate=ut,Ht.needsUpdate=at,Ht.type=tt}function Oe(R){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const Y=R.target;Y.removeEventListener("dispose",Ee),Je(Y)}function Je(R){Fi(R),M.remove(R)}function Fi(R){const Y=M.get(R).programs;Y!==void 0&&(Y.forEach(function(ut){dt.releaseProgram(ut)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ut,at,tt,It){Y===null&&(Y=Le);const Wt=tt.isMesh&&tt.matrixWorld.determinant()<0,zt=qa(R,Y,ut,at,tt);K.setMaterial(at,Wt);let jt=ut.index,ne=1;if(at.wireframe===!0){if(jt=ct.getWireframeAttribute(ut),jt===void 0)return;ne=2}const Qt=ut.drawRange,de=ut.attributes.position;let Zt=Qt.start*ne,ve=(Qt.start+Qt.count)*ne;It!==null&&(Zt=Math.max(Zt,It.start*ne),ve=Math.min(ve,(It.start+It.count)*ne)),jt!==null?(Zt=Math.max(Zt,0),ve=Math.min(ve,jt.count)):de!=null&&(Zt=Math.max(Zt,0),ve=Math.min(ve,de.count));const Ke=ve-Zt;if(Ke<0||Ke===1/0)return;Ut.setup(tt,at,zt,ut,jt);let an,Ae=le;if(jt!==null&&(an=pt.get(jt),Ae=X,Ae.setIndex(an)),tt.isMesh)at.wireframe===!0?(K.setLineWidth(at.wireframeLinewidth*mn()),Ae.setMode(k.LINES)):Ae.setMode(k.TRIANGLES);else if(tt.isLine){let En=at.linewidth;En===void 0&&(En=1),K.setLineWidth(En*mn()),tt.isLineSegments?Ae.setMode(k.LINES):tt.isLineLoop?Ae.setMode(k.LINE_LOOP):Ae.setMode(k.LINE_STRIP)}else tt.isPoints?Ae.setMode(k.POINTS):tt.isSprite&&Ae.setMode(k.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Wc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Ae.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const En=tt._multiDrawStarts,Kt=tt._multiDrawCounts,An=tt._multiDrawCount,pe=jt?pt.get(jt).bytesPerElement:1,Pn=M.get(at).currentProgram.getUniforms();for(let ci=0;ci<An;ci++)Pn.setValue(k,"_gl_DrawID",ci),Ae.render(En[ci]/pe,Kt[ci])}else if(tt.isInstancedMesh)Ae.renderInstances(Zt,Ke,tt.count);else if(ut.isInstancedBufferGeometry){const En=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Kt=Math.min(ut.instanceCount,En);Ae.renderInstances(Zt,Ke,Kt)}else Ae.render(Zt,Ke)};function Wa(R,Y,ut){R.transparent===!0&&R.side===kn&&R.forceSinglePass===!1?(R.side=gi,R.needsUpdate=!0,Ri(R,Y,ut),R.side=Zs,R.needsUpdate=!0,Ri(R,Y,ut),R.side=kn):Ri(R,Y,ut)}this.compile=function(R,Y,ut=null){ut===null&&(ut=R),F=bt.get(ut),F.init(Y),z.push(F),ut.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(F.pushLight(tt),tt.castShadow&&F.pushShadow(tt))}),R!==ut&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(F.pushLight(tt),tt.castShadow&&F.pushShadow(tt))}),F.setupLights();const at=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const It=tt.material;if(It)if(Array.isArray(It))for(let Wt=0;Wt<It.length;Wt++){const zt=It[Wt];Wa(zt,ut,tt),at.add(zt)}else Wa(It,ut,tt),at.add(It)}),F=z.pop(),at},this.compileAsync=function(R,Y,ut=null){const at=this.compile(R,Y,ut);return new Promise(tt=>{function It(){if(at.forEach(function(Wt){M.get(Wt).currentProgram.isReady()&&at.delete(Wt)}),at.size===0){tt(R);return}setTimeout(It,10)}Ue.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let ya=null;function ms(R){ya&&ya(R)}function Sa(){Bi.stop()}function gs(){Bi.start()}const Bi=new Zy;Bi.setAnimationLoop(ms),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(R){ya=R,ft.setAnimationLoop(R),R===null?Bi.stop():Bi.start()},ft.addEventListener("sessionstart",Sa),ft.addEventListener("sessionend",gs),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(mt===!0)return;const ut=ft.enabled===!0&&ft.isPresenting===!0,at=T!==null&&(rt===null||ut)&&T.begin(L,rt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Y),Y=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,Y,rt),F=bt.get(R,z.length),F.init(Y),z.push(F),xn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),qt.setFromProjectionMatrix(xn,Ha,Y.reversedDepth),ce=this.localClippingEnabled,te=Rt.init(this.clippingPlanes,ce),N=Et.get(R,B.length),N.init(),B.push(N),ft.enabled===!0&&ft.isPresenting===!0){const Wt=L.xr.getDepthSensingMesh();Wt!==null&&_s(Wt,Y,-1/0,L.sortObjects)}_s(R,Y,0,L.sortObjects),N.finish(),L.sortObjects===!0&&N.sort(Ot,Yt),ge=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ge&&Bt.addToRenderList(N,R),this.info.render.frame++,te===!0&&Rt.beginShadows();const tt=F.state.shadowsArray;if(Ht.render(tt,R,Y),te===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&T.hasRenderPass())===!1){const Wt=N.opaque,zt=N.transmissive;if(F.setupLights(),Y.isArrayCamera){const jt=Y.cameras;if(zt.length>0)for(let ne=0,Qt=jt.length;ne<Qt;ne++){const de=jt[ne];Sn(Wt,zt,R,de)}ge&&Bt.render(R);for(let ne=0,Qt=jt.length;ne<Qt;ne++){const de=jt[ne];Ai(N,R,de,de.viewport)}}else zt.length>0&&Sn(Wt,zt,R,Y),ge&&Bt.render(R),Ai(N,R,Y)}rt!==null&&et===0&&(V.updateMultisampleRenderTarget(rt),V.updateRenderTargetMipmap(rt)),at&&T.end(L),R.isScene===!0&&R.onAfterRender(L,R,Y),Ut.resetDefaultState(),ot=-1,Z=null,z.pop(),z.length>0?(F=z[z.length-1],te===!0&&Rt.setGlobalState(L.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function _s(R,Y,ut,at){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ut=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||qt.intersectsSprite(R)){at&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xn);const Wt=At.update(R),zt=R.material;zt.visible&&N.push(R,Wt,zt,ut,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||qt.intersectsObject(R))){const Wt=At.update(R),zt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),ye.copy(Wt.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(xn)),Array.isArray(zt)){const jt=Wt.groups;for(let ne=0,Qt=jt.length;ne<Qt;ne++){const de=jt[ne],Zt=zt[de.materialIndex];Zt&&Zt.visible&&N.push(R,Wt,Zt,ut,ye.z,de)}}else zt.visible&&N.push(R,Wt,zt,ut,ye.z,null)}}const It=R.children;for(let Wt=0,zt=It.length;Wt<zt;Wt++)_s(It[Wt],Y,ut,at)}function Ai(R,Y,ut,at){const{opaque:tt,transmissive:It,transparent:Wt}=R;F.setupLightsView(ut),te===!0&&Rt.setGlobalState(L.clippingPlanes,ut),at&&K.viewport(O.copy(at)),tt.length>0&&Mn(tt,Y,ut),It.length>0&&Mn(It,Y,ut),Wt.length>0&&Mn(Wt,Y,ut),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Sn(R,Y,ut,at){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[at.id]===void 0){const Zt=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[at.id]=new Va(1,1,{generateMipmaps:!0,type:Zt?hs:Pi,minFilter:qs,samples:Math.max(4,Ye.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const It=F.state.transmissionRenderTarget[at.id],Wt=at.viewport||O;It.setSize(Wt.z*L.transmissionResolutionScale,Wt.w*L.transmissionResolutionScale);const zt=L.getRenderTarget(),jt=L.getActiveCubeFace(),ne=L.getActiveMipmapLevel();L.setRenderTarget(It),L.getClearColor(gt),vt=L.getClearAlpha(),vt<1&&L.setClearColor(16777215,.5),L.clear(),ge&&Bt.render(ut);const Qt=L.toneMapping;L.toneMapping=Ga;const de=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),F.setupLightsView(at),te===!0&&Rt.setGlobalState(L.clippingPlanes,at),Mn(R,ut,at),V.updateMultisampleRenderTarget(It),V.updateRenderTargetMipmap(It),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ve=0,Ke=Y.length;ve<Ke;ve++){const an=Y[ve],{object:Ae,geometry:En,material:Kt,group:An}=an;if(Kt.side===kn&&Ae.layers.test(at.layers)){const pe=Kt.side;Kt.side=gi,Kt.needsUpdate=!0,zi(Ae,ut,at,En,Kt,An),Kt.side=pe,Kt.needsUpdate=!0,Zt=!0}}Zt===!0&&(V.updateMultisampleRenderTarget(It),V.updateRenderTargetMipmap(It))}L.setRenderTarget(zt,jt,ne),L.setClearColor(gt,vt),de!==void 0&&(at.viewport=de),L.toneMapping=Qt}function Mn(R,Y,ut){const at=Y.isScene===!0?Y.overrideMaterial:null;for(let tt=0,It=R.length;tt<It;tt++){const Wt=R[tt],{object:zt,geometry:jt,group:ne}=Wt;let Qt=Wt.material;Qt.allowOverride===!0&&at!==null&&(Qt=at),zt.layers.test(ut.layers)&&zi(zt,Y,ut,jt,Qt,ne)}}function zi(R,Y,ut,at,tt,It){R.onBeforeRender(L,Y,ut,at,tt,It),R.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(L,Y,ut,at,R,It),tt.transparent===!0&&tt.side===kn&&tt.forceSinglePass===!1?(tt.side=gi,tt.needsUpdate=!0,L.renderBufferDirect(ut,Y,at,tt,R,It),tt.side=Zs,tt.needsUpdate=!0,L.renderBufferDirect(ut,Y,at,tt,R,It),tt.side=kn):L.renderBufferDirect(ut,Y,at,tt,R,It),R.onAfterRender(L,Y,ut,at,tt,It)}function Ri(R,Y,ut){Y.isScene!==!0&&(Y=Le);const at=M.get(R),tt=F.state.lights,It=F.state.shadowsArray,Wt=tt.state.version,zt=dt.getParameters(R,tt.state,It,Y,ut),jt=dt.getProgramCacheKey(zt);let ne=at.programs;at.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,at.fog=Y.fog;const Qt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;at.envMap=$.get(R.envMap||at.environment,Qt),at.envMapRotation=at.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",Ee),ne=new Map,at.programs=ne);let de=ne.get(jt);if(de!==void 0){if(at.currentProgram===de&&at.lightsStateVersion===Wt)return bo(R,zt),de}else zt.uniforms=dt.getUniforms(R),R.onBeforeCompile(zt,L),de=dt.acquireProgram(zt,jt),ne.set(jt,de),at.uniforms=zt.uniforms;const Zt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Rt.uniform),bo(R,zt),at.needsLights=Qs(R),at.lightsStateVersion=Wt,at.needsLights&&(Zt.ambientLightColor.value=tt.state.ambient,Zt.lightProbe.value=tt.state.probe,Zt.directionalLights.value=tt.state.directional,Zt.directionalLightShadows.value=tt.state.directionalShadow,Zt.spotLights.value=tt.state.spot,Zt.spotLightShadows.value=tt.state.spotShadow,Zt.rectAreaLights.value=tt.state.rectArea,Zt.ltc_1.value=tt.state.rectAreaLTC1,Zt.ltc_2.value=tt.state.rectAreaLTC2,Zt.pointLights.value=tt.state.point,Zt.pointLightShadows.value=tt.state.pointShadow,Zt.hemisphereLights.value=tt.state.hemi,Zt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Zt.spotLightMatrix.value=tt.state.spotLightMatrix,Zt.spotLightMap.value=tt.state.spotLightMap,Zt.pointShadowMatrix.value=tt.state.pointShadowMatrix),at.currentProgram=de,at.uniformsList=null,de}function Ya(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Yf.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function bo(R,Y){const ut=M.get(R);ut.outputColorSpace=Y.outputColorSpace,ut.batching=Y.batching,ut.batchingColor=Y.batchingColor,ut.instancing=Y.instancing,ut.instancingColor=Y.instancingColor,ut.instancingMorph=Y.instancingMorph,ut.skinning=Y.skinning,ut.morphTargets=Y.morphTargets,ut.morphNormals=Y.morphNormals,ut.morphColors=Y.morphColors,ut.morphTargetsCount=Y.morphTargetsCount,ut.numClippingPlanes=Y.numClippingPlanes,ut.numIntersection=Y.numClipIntersection,ut.vertexAlphas=Y.vertexAlphas,ut.vertexTangents=Y.vertexTangents,ut.toneMapping=Y.toneMapping}function qa(R,Y,ut,at,tt){Y.isScene!==!0&&(Y=Le),V.resetTextureUnits();const It=Y.fog,Wt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Y.environment:null,zt=rt===null?L.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:So,jt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,ne=$.get(at.envMap||Wt,jt),Qt=at.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,de=!!ut.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Zt=!!ut.morphAttributes.position,ve=!!ut.morphAttributes.normal,Ke=!!ut.morphAttributes.color;let an=Ga;at.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(an=L.toneMapping);const Ae=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,En=Ae!==void 0?Ae.length:0,Kt=M.get(at),An=F.state.lights;if(te===!0&&(ce===!0||R!==Z)){const Cn=R===Z&&at.id===ot;Rt.setState(at,R,Cn)}let pe=!1;at.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==An.state.version||Kt.outputColorSpace!==zt||tt.isBatchedMesh&&Kt.batching===!1||!tt.isBatchedMesh&&Kt.batching===!0||tt.isBatchedMesh&&Kt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Kt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Kt.instancing===!1||!tt.isInstancedMesh&&Kt.instancing===!0||tt.isSkinnedMesh&&Kt.skinning===!1||!tt.isSkinnedMesh&&Kt.skinning===!0||tt.isInstancedMesh&&Kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Kt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Kt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Kt.instancingMorph===!1&&tt.morphTexture!==null||Kt.envMap!==ne||at.fog===!0&&Kt.fog!==It||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Rt.numPlanes||Kt.numIntersection!==Rt.numIntersection)||Kt.vertexAlphas!==Qt||Kt.vertexTangents!==de||Kt.morphTargets!==Zt||Kt.morphNormals!==ve||Kt.morphColors!==Ke||Kt.toneMapping!==an||Kt.morphTargetsCount!==En)&&(pe=!0):(pe=!0,Kt.__version=at.version);let Pn=Kt.currentProgram;pe===!0&&(Pn=Ri(at,Y,tt));let ci=!1,Hi=!1,_i=!1;const qe=Pn.getUniforms(),Rn=Kt.uniforms;if(K.useProgram(Pn.program)&&(ci=!0,Hi=!0,_i=!0),at.id!==ot&&(ot=at.id,Hi=!0),ci||Z!==R){K.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),qe.setValue(k,"projectionMatrix",R.projectionMatrix),qe.setValue(k,"viewMatrix",R.matrixWorldInverse);const Ci=qe.map.cameraPosition;Ci!==void 0&&Ci.setValue(k,Ce.setFromMatrixPosition(R.matrixWorld)),Ye.logarithmicDepthBuffer&&qe.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&qe.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,Hi=!0,_i=!0)}if(Kt.needsLights&&(An.state.directionalShadowMap.length>0&&qe.setValue(k,"directionalShadowMap",An.state.directionalShadowMap,V),An.state.spotShadowMap.length>0&&qe.setValue(k,"spotShadowMap",An.state.spotShadowMap,V),An.state.pointShadowMap.length>0&&qe.setValue(k,"pointShadowMap",An.state.pointShadowMap,V)),tt.isSkinnedMesh){qe.setOptional(k,tt,"bindMatrix"),qe.setOptional(k,tt,"bindMatrixInverse");const Cn=tt.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),qe.setValue(k,"boneTexture",Cn.boneTexture,V))}tt.isBatchedMesh&&(qe.setOptional(k,tt,"batchingTexture"),qe.setValue(k,"batchingTexture",tt._matricesTexture,V),qe.setOptional(k,tt,"batchingIdTexture"),qe.setValue(k,"batchingIdTexture",tt._indirectTexture,V),qe.setOptional(k,tt,"batchingColorTexture"),tt._colorsTexture!==null&&qe.setValue(k,"batchingColorTexture",tt._colorsTexture,V));const ti=ut.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Gt.update(tt,ut,Pn),(Hi||Kt.receiveShadow!==tt.receiveShadow)&&(Kt.receiveShadow=tt.receiveShadow,qe.setValue(k,"receiveShadow",tt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Y.environment!==null&&(Rn.envMapIntensity.value=Y.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=x2()),Hi&&(qe.setValue(k,"toneMappingExposure",L.toneMappingExposure),Kt.needsLights&&ja(Rn,_i),It&&at.fog===!0&&Tt.refreshFogUniforms(Rn,It),Tt.refreshMaterialUniforms(Rn,at,_t,q,F.state.transmissionRenderTarget[R.id]),Yf.upload(k,Ya(Kt),Rn,V)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Yf.upload(k,Ya(Kt),Rn,V),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&qe.setValue(k,"center",tt.center),qe.setValue(k,"modelViewMatrix",tt.modelViewMatrix),qe.setValue(k,"normalMatrix",tt.normalMatrix),qe.setValue(k,"modelMatrix",tt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Cn=at.uniformsGroups;for(let Ci=0,ui=Cn.length;Ci<ui;Ci++){const vs=Cn[Ci];Ft.update(vs,Pn),Ft.bind(vs,Pn)}}return Pn}function ja(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Qs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(R,Y,ut){const at=M.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=Y,M.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ut,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ut=M.get(R);ut.__webglFramebuffer=Y,ut.__useDefaultFramebuffer=Y===void 0};const Ma=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,ut=0){rt=R,G=Y,et=ut;let at=null,tt=!1,It=!1;if(R){const zt=M.get(R);if(zt.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(k.FRAMEBUFFER,zt.__webglFramebuffer),O.copy(R.viewport),P.copy(R.scissor),J=R.scissorTest,K.viewport(O),K.scissor(P),K.setScissorTest(J),ot=-1;return}else if(zt.__webglFramebuffer===void 0)V.setupRenderTarget(R);else if(zt.__hasExternalTextures)V.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(zt.__boundDepthTexture!==Qt){if(Qt!==null&&M.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(R)}}const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(It=!0);const ne=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?at=ne[Y][ut]:at=ne[Y],tt=!0):R.samples>0&&V.useMultisampledRTT(R)===!1?at=M.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?at=ne[ut]:at=ne,O.copy(R.viewport),P.copy(R.scissor),J=R.scissorTest}else O.copy(nt).multiplyScalar(_t).floor(),P.copy(yt).multiplyScalar(_t).floor(),J=Lt;if(ut!==0&&(at=Ma),K.bindFramebuffer(k.FRAMEBUFFER,at)&&K.drawBuffers(R,at),K.viewport(O),K.scissor(P),K.setScissorTest(J),tt){const zt=M.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,ut)}else if(It){const zt=Y;for(let jt=0;jt<R.textures.length;jt++){const ne=M.get(R.textures[jt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+jt,ne.__webglTexture,ut,zt)}}else if(R!==null&&ut!==0){const zt=M.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zt.__webglTexture,ut)}ot=-1},this.readRenderTargetPixels=function(R,Y,ut,at,tt,It,Wt,zt=0){if(!(R&&R.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Wt!==void 0&&(jt=jt[Wt]),jt){K.bindFramebuffer(k.FRAMEBUFFER,jt);try{const ne=R.textures[zt],Qt=ne.format,de=ne.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+zt),!Ye.textureFormatReadable(Qt)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(de)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-at&&ut>=0&&ut<=R.height-tt&&k.readPixels(Y,ut,at,tt,Nt.convert(Qt),Nt.convert(de),It)}finally{const ne=rt!==null?M.get(rt).__webglFramebuffer:null;K.bindFramebuffer(k.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ut,at,tt,It,Wt,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Wt!==void 0&&(jt=jt[Wt]),jt)if(Y>=0&&Y<=R.width-at&&ut>=0&&ut<=R.height-tt){K.bindFramebuffer(k.FRAMEBUFFER,jt);const ne=R.textures[zt],Qt=ne.format,de=ne.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+zt),!Ye.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.bufferData(k.PIXEL_PACK_BUFFER,It.byteLength,k.STREAM_READ),k.readPixels(Y,ut,at,tt,Nt.convert(Qt),Nt.convert(de),0);const ve=rt!==null?M.get(rt).__webglFramebuffer:null;K.bindFramebuffer(k.FRAMEBUFFER,ve);const Ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await zM(k,Ke,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,It),k.deleteBuffer(Zt),k.deleteSync(Ke),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ut=0){const at=Math.pow(2,-ut),tt=Math.floor(R.image.width*at),It=Math.floor(R.image.height*at),Wt=Y!==null?Y.x:0,zt=Y!==null?Y.y:0;V.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,ut,0,0,Wt,zt,tt,It),K.unbindTexture()};const Ea=k.createFramebuffer(),Za=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,ut=null,at=null,tt=0,It=0){let Wt,zt,jt,ne,Qt,de,Zt,ve,Ke;const an=R.isCompressedTexture?R.mipmaps[It]:R.image;if(ut!==null)Wt=ut.max.x-ut.min.x,zt=ut.max.y-ut.min.y,jt=ut.isBox3?ut.max.z-ut.min.z:1,ne=ut.min.x,Qt=ut.min.y,de=ut.isBox3?ut.min.z:0;else{const Rn=Math.pow(2,-tt);Wt=Math.floor(an.width*Rn),zt=Math.floor(an.height*Rn),R.isDataArrayTexture?jt=an.depth:R.isData3DTexture?jt=Math.floor(an.depth*Rn):jt=1,ne=0,Qt=0,de=0}at!==null?(Zt=at.x,ve=at.y,Ke=at.z):(Zt=0,ve=0,Ke=0);const Ae=Nt.convert(Y.format),En=Nt.convert(Y.type);let Kt;Y.isData3DTexture?(V.setTexture3D(Y,0),Kt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(V.setTexture2DArray(Y,0),Kt=k.TEXTURE_2D_ARRAY):(V.setTexture2D(Y,0),Kt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const An=k.getParameter(k.UNPACK_ROW_LENGTH),pe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=k.getParameter(k.UNPACK_SKIP_PIXELS),ci=k.getParameter(k.UNPACK_SKIP_ROWS),Hi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,an.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,an.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,de);const _i=R.isDataArrayTexture||R.isData3DTexture,qe=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Rn=M.get(R),ti=M.get(Y),Cn=M.get(Rn.__renderTarget),Ci=M.get(ti.__renderTarget);K.bindFramebuffer(k.READ_FRAMEBUFFER,Cn.__webglFramebuffer),K.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let ui=0;ui<jt;ui++)_i&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(R).__webglTexture,tt,de+ui),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(Y).__webglTexture,It,Ke+ui)),k.blitFramebuffer(ne,Qt,Wt,zt,Zt,ve,Wt,zt,k.DEPTH_BUFFER_BIT,k.NEAREST);K.bindFramebuffer(k.READ_FRAMEBUFFER,null),K.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||M.has(R)){const Rn=M.get(R),ti=M.get(Y);K.bindFramebuffer(k.READ_FRAMEBUFFER,Ea),K.bindFramebuffer(k.DRAW_FRAMEBUFFER,Za);for(let Cn=0;Cn<jt;Cn++)_i?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rn.__webglTexture,tt,de+Cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rn.__webglTexture,tt),qe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ti.__webglTexture,It,Ke+Cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ti.__webglTexture,It),tt!==0?k.blitFramebuffer(ne,Qt,Wt,zt,Zt,ve,Wt,zt,k.COLOR_BUFFER_BIT,k.NEAREST):qe?k.copyTexSubImage3D(Kt,It,Zt,ve,Ke+Cn,ne,Qt,Wt,zt):k.copyTexSubImage2D(Kt,It,Zt,ve,ne,Qt,Wt,zt);K.bindFramebuffer(k.READ_FRAMEBUFFER,null),K.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else qe?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Kt,It,Zt,ve,Ke,Wt,zt,jt,Ae,En,an.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Kt,It,Zt,ve,Ke,Wt,zt,jt,Ae,an.data):k.texSubImage3D(Kt,It,Zt,ve,Ke,Wt,zt,jt,Ae,En,an):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,It,Zt,ve,Wt,zt,Ae,En,an.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,It,Zt,ve,an.width,an.height,Ae,an.data):k.texSubImage2D(k.TEXTURE_2D,It,Zt,ve,Wt,zt,Ae,En,an);k.pixelStorei(k.UNPACK_ROW_LENGTH,An),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ci),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Hi),It===0&&Y.generateMipmaps&&k.generateMipmap(Kt),K.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&V.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?V.setTextureCube(R,0):R.isData3DTexture?V.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?V.setTexture2DArray(R,0):V.setTexture2D(R,0),K.unbindTexture()},this.resetState=function(){G=0,et=0,rt=null,K.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Xe._getUnpackColorSpace()}}const y2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:zd,AddEquation:Lr,AddOperation:_y,AdditiveBlending:Bm,AgXToneMapping:i0,AlphaFormat:u0,AlwaysCompare:Ay,AlwaysDepth:Kf,AlwaysStencilFunc:Gm,AmbientLight:Xy,ArrayCamera:Yy,BackSide:gi,BasicDepthPacking:xy,BasicShadowMap:Kx,Box3:Pr,BoxGeometry:Fr,BufferAttribute:xa,BufferGeometry:Ji,ByteType:r0,Camera:E0,CanvasTexture:El,CatmullRomCurve3:Py,CineonToneMapping:e0,ClampToEdgeWrapping:fs,Clock:jy,Color:ue,ColorManagement:Xe,ConstantAlphaFactor:py,ConstantColorFactor:dy,CubeCamera:Wy,CubeDepthTexture:Oy,CubeReflectionMapping:Ir,CubeRefractionMapping:xo,CubeTexture:x0,CubeUVReflectionMapping:jc,CullFaceBack:Fm,CullFaceFront:Zx,CullFaceNone:jx,Curve:Iy,CustomBlending:Jx,CustomToneMapping:n0,Data3DTexture:Ny,DataArrayTexture:h0,DataTexture:v0,DepthFormat:ps,DepthStencilFormat:Ur,DepthTexture:Dl,DirectionalLight:Ym,DoubleSide:kn,DstAlphaFactor:oy,DstColorFactor:cy,EqualCompare:Ey,EqualDepth:Jf,EquirectangularReflectionMapping:Gf,EquirectangularRefractionMapping:Vf,Euler:Qi,EventDispatcher:Mo,ExternalTexture:y0,Float32BufferAttribute:$n,FloatType:_a,Fog:Yc,FrontSide:Zs,Frustum:Jd,GLSL3:km,GreaterCompare:by,GreaterDepth:td,GreaterEqualCompare:Zd,GreaterEqualDepth:$f,Group:Ml,HalfFloatType:hs,HemisphereLight:ky,ImageUtils:wy,InstancedBufferAttribute:Wm,InstancedMesh:Uy,IntType:Hd,KeepStencilOp:ho,Layers:Qd,LessCompare:My,LessDepth:Qf,LessEqualCompare:jd,LessEqualDepth:vo,Light:Ol,LinearFilter:Jn,LinearMipmapLinearFilter:qs,LinearMipmapNearestFilter:kf,LinearSRGBColorSpace:So,LinearToneMapping:$m,LinearTransfer:Xc,Material:Eo,MathUtils:bn,Matrix3:Me,Matrix4:dn,MaxEquation:ny,Mesh:Ve,MeshBasicMaterial:qc,MeshDepthMaterial:Gy,MeshDistanceMaterial:Vy,MeshLambertMaterial:Hy,MeshPhysicalMaterial:po,MeshStandardMaterial:Ys,MinEquation:ey,MirroredRepeatWrapping:nd,MixOperation:gy,MultiplyBlending:Hm,MultiplyOperation:Bd,NearestFilter:Qn,NearestMipmapLinearFilter:Ic,NearestMipmapNearestFilter:vy,NeutralToneMapping:a0,NeverCompare:Sy,NeverDepth:Zf,NoBlending:ds,NoColorSpace:Ws,NoToneMapping:Ga,NormalBlending:_o,NotEqualCompare:Ty,NotEqualDepth:ed,Object3D:pn,ObjectSpaceNormalMap:yy,OneFactor:ay,OneMinusConstantAlphaFactor:my,OneMinusConstantColorFactor:hy,OneMinusDstAlphaFactor:ly,OneMinusDstColorFactor:uy,OneMinusSrcAlphaFactor:jf,OneMinusSrcColorFactor:ry,OrthographicCamera:eh,PCFShadowMap:go,PCFSoftShadowMap:Qx,PMREMGenerator:Pd,PerspectiveCamera:Ti,Plane:Nr,PlaneGeometry:us,PointLight:kc,Quaternion:Ks,R11_EAC_Format:ud,RED_GREEN_RGTC2_Format:Ud,RED_RGTC1_Format:Nd,REVISION:Fd,RG11_EAC_Format:dd,RGBAFormat:va,RGBAIntegerFormat:Yd,RGBA_ASTC_10x10_Format:Td,RGBA_ASTC_10x5_Format:Md,RGBA_ASTC_10x6_Format:Ed,RGBA_ASTC_10x8_Format:bd,RGBA_ASTC_12x10_Format:Ad,RGBA_ASTC_12x12_Format:Rd,RGBA_ASTC_4x4_Format:pd,RGBA_ASTC_5x4_Format:md,RGBA_ASTC_5x5_Format:gd,RGBA_ASTC_6x5_Format:_d,RGBA_ASTC_6x6_Format:vd,RGBA_ASTC_8x5_Format:xd,RGBA_ASTC_8x6_Format:yd,RGBA_ASTC_8x8_Format:Sd,RGBA_BPTC_Format:Cd,RGBA_ETC2_EAC_Format:cd,RGBA_PVRTC_2BPPV1_Format:rd,RGBA_PVRTC_4BPPV1_Format:sd,RGBA_S3TC_DXT1_Format:Bc,RGBA_S3TC_DXT3_Format:zc,RGBA_S3TC_DXT5_Format:Hc,RGBFormat:f0,RGB_BPTC_SIGNED_Format:wd,RGB_BPTC_UNSIGNED_Format:Dd,RGB_ETC1_Format:od,RGB_ETC2_Format:ld,RGB_PVRTC_2BPPV1_Format:ad,RGB_PVRTC_4BPPV1_Format:id,RGB_S3TC_DXT1_Format:Fc,RGFormat:yo,RGIntegerFormat:Wd,RawShaderMaterial:zy,Ray:_0,Raycaster:qy,RedFormat:kd,RedIntegerFormat:Xd,ReinhardToneMapping:t0,RenderTarget:Dy,RepeatWrapping:Tl,ReverseSubtractEquation:ty,RingGeometry:$d,SIGNED_R11_EAC_Format:fd,SIGNED_RED_GREEN_RGTC2_Format:Od,SIGNED_RED_RGTC1_Format:Ld,SIGNED_RG11_EAC_Format:hd,SRGBColorSpace:Wn,SRGBTransfer:en,Scene:p0,ShaderChunk:Te,ShaderLib:za,ShaderMaterial:Xa,ShortType:o0,Source:Kd,Sphere:Ul,SphereGeometry:th,SpotLight:Wf,SrcAlphaFactor:qf,SrcAlphaSaturateFactor:fy,SrcColorFactor:sy,StaticDrawUsage:Vm,SubtractEquation:$x,SubtractiveBlending:zm,TangentSpaceNormalMap:qd,Texture:li,Triangle:ga,UVMapping:s0,Uint16BufferAttribute:m0,Uint32BufferAttribute:g0,UniformsLib:Xt,UniformsUtils:By,UnsignedByteType:Pi,UnsignedInt101111Type:c0,UnsignedInt248Type:Rl,UnsignedInt5999Type:l0,UnsignedIntType:ka,UnsignedShort4444Type:Gd,UnsignedShort5551Type:Vd,UnsignedShortType:Al,VSMShadowMap:Sl,Vector2:we,Vector3:j,Vector4:Tn,WebGLCoordinateSystem:Ha,WebGLCubeRenderTarget:b0,WebGLRenderTarget:Va,WebGLRenderer:eS,WebGLUtils:tS,WebGPUCoordinateSystem:Cl,WebXRController:Xf,ZeroFactor:iy,createCanvasElement:Ry,error:ke,log:Xm,warn:he,warnOnce:Wc},Symbol.toStringTag,{value:"Module"}));class S2 extends p0{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Fr;t.deleteAttribute("uv");const i=new Ys({side:gi}),s=new Ys,l=new kc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Ve(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new Uy(t,s,6),h=new pn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),f.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),f.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),f.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),f.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),f.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),f.setMatrixAt(5,h.matrix),this.add(f);const m=new Ve(t,vl(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Ve(t,vl(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Ve(t,vl(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Ve(t,vl(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Ve(t,vl(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const S=new Ve(t,vl(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function vl(r){return new Hy({color:0,emissive:16777215,emissiveIntensity:r})}const M2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],E2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],b2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],T2=["LOW","MEDIUM","HIGH","EXTREME"],A2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],R2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],C2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},w2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},D2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},N2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},L2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function nS(r){return(r-90)*Math.PI/180}function U2(r,t,i,s){const l=nS(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function xl(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function T0(r){xl("subject",r.subject,M2),xl("domain",r.domain,E2),xl("verb",r.verb,b2),xl("magnitude",r.magnitude,T2),xl("time",r.time,A2),xl("certainty",r.certainty,R2)}function iS(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=L2[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return T0(s),s}function O2(r){return T0(r),[r.subject,r.domain,r.verb,r.magnitude,r.time,r.certainty].join(".")}function I2(r){return O2(iS(r))}function P2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),h=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(h,m):r.lineTo(h,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,h=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,h):r.lineTo(f,h)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Lc(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,h=Math.sqrt(c*c+f*f)||1,m=c/h,p=f/h,_=-p,v=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+v*(l*.58)},S={x:i.x-m*l-_*(l*.58),y:i.y-p*l-v*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(S.x,S.y),r.closePath(),r.fill(),r.restore()}function Uc(r,t,i,s,l,c){const f=N2[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let h=1;h<=f;h+=1){const m=h/(f+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const v=1-m;p=v*v*i.x+2*v*m*c.x+m*m*s.x,_=v*v*i.y+2*v*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function F2(r,t,i){T0(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,h=l*.5,m=i?.backgroundColor??"rgba(6,14,24,0.74)",p=i?.lineColor??"rgba(102,221,255,0.96)",_=i?.gridColor??"rgba(102,221,255,0.58)";r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,h,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(f,h,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,h,c*.12,0,Math.PI*2),r.stroke();const v=C2[t.domain],g=w2[t.time]*c,S=D2[t.magnitude]*c,b=U2(f,h,g,v),D=nS(v),E=Math.cos(D),y=Math.sin(D),C=-y,U=E;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let N={x:b.x,y:b.y},F={x:b.x+E*S,y:b.y+y*S},B;if(t.verb==="EXISTS")N={x:b.x-C*(S*.48),y:b.y-U*(S*.48)},F={x:b.x+C*(S*.48),y:b.y+U*(S*.48)},r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(F.x,F.y),r.stroke(),Uc(r,t,N,F,p);else if(t.verb==="DECLINES")F={x:b.x-E*S,y:b.y-y*S},r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(F.x,F.y),r.stroke(),Lc(r,N,F,p,7),Uc(r,t,N,F,p);else if(t.verb==="TRANSFORMS")B={x:b.x+C*(S*.34)+E*(S*.34),y:b.y+U*(S*.34)+y*(S*.34)},r.beginPath(),r.moveTo(N.x,N.y),r.quadraticCurveTo(B.x,B.y,F.x,F.y),r.stroke(),Lc(r,B,F,p,7),Uc(r,t,N,F,p,B);else if(t.verb==="INFLUENCES"){const T={x:b.x+C*3.4,y:b.y+U*3.4},L={x:F.x+C*3.4,y:F.y+U*3.4},mt={x:b.x-C*3.4,y:b.y-U*3.4},G={x:F.x-C*3.4,y:F.y-U*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(L.x,L.y),r.moveTo(mt.x,mt.y),r.lineTo(G.x,G.y),r.stroke(),Lc(r,T,L,p,6.6),Lc(r,mt,G,p,6.6),Uc(r,t,T,L,p)}else r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(F.x,F.y),r.stroke(),Lc(r,N,F,p,7),Uc(r,t,N,F,p);r.fillStyle=p,r.beginPath(),r.arc(f,h,5,0,Math.PI*2),r.fill(),P2(r,t.subject,b,p)}function Bx(r,t,i){const s=iS(t);F2(r,s,i)}const zx="intelligenspartiet:language",B2={nb:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Videoer",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideGlyphWall:"Glyff",outsideBack:"Tilbake",outsideVideosTitle:"Videoer",outsideSignaturesTitle:"Signaturer",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"Dette er historien om erstatningsangst, som alltid har sett lik ut og alltid vil gjøre det. Gjenkjenn symptomet, ikke hat den som er redd.",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Videos",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideGlyphWall:"Glyff",outsideBack:"Back",outsideVideosTitle:"Videos",outsideSignaturesTitle:"Signatures",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"This is the story of replacement anxiety, which always looked the same and always will. Recognize the symptom, do not hate the fearful.",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},wm=[{id:"output-inflation",sourceId:"v1-output-inflation",fallbackCanonical:"SYSTEM.ORGANIZATIONS.GROWS.EXTREME.NOW.CONFIRMED",titleNb:"Outputinflasjon",titleEn:"Output Inflation",bodyNb:"Mengden utdata eksploderer, og evalueringsarbeidet flyttes til mennesker.",bodyEn:"Output volume explodes, and evaluation workload shifts to humans."},{id:"prompt-looping",sourceId:"v1-prompt-looping",fallbackCanonical:"SYSTEM.TECHNOLOGY.INFLUENCES.HIGH.NOW.PROBABLE",titleNb:"Prompt-løkker",titleEn:"Prompt Looping",bodyNb:"Arbeid går i raske mikroløkker av prompting, korreksjon og ny prompting.",bodyEn:"Work shifts into rapid micro-loops of prompting, correction, and re-prompting."},{id:"decision-density",sourceId:"v1-decision-density",fallbackCanonical:"INDIVIDUAL.INDIVIDUALS.GROWS.HIGH.NOW.CONFIRMED",titleNb:"Beslutningstetthet",titleEn:"Decision Density",bodyNb:"Antallet små beslutninger per time øker og tærer på konsentrasjonen.",bodyEn:"Micro-decisions per hour increase and erode concentration."},{id:"cognitive-overproduction",sourceId:"v1-cognitive-overproduction",fallbackCanonical:"SYSTEM.TECHNOLOGY.GROWS.EXTREME.LT1Y.PROBABLE",titleNb:"Kognitiv overproduksjon",titleEn:"Cognitive Overproduction",bodyNb:"Informasjonsmengden skalerer raskere enn menneskelig bearbeidingskapasitet.",bodyEn:"Information volume scales faster than human processing capacity."},{id:"continuous-partial-attention",sourceId:"v1-continuous-partial-attention",fallbackCanonical:"INDIVIDUAL.INDIVIDUALS.DECLINES.MEDIUM.NOW.PROBABLE",titleNb:"Kontinuerlig delt oppmerksomhet",titleEn:"Continuous Partial Attention",bodyNb:"Oppmerksomheten fragmenteres på tvers av verktøy, faner og arbeidsflyter.",bodyEn:"Attention fragments across tools, tabs, and workflows."},{id:"brain-fry",sourceId:"v1-brain-fry",fallbackCanonical:"INDIVIDUAL.INDIVIDUALS.DECLINES.HIGH.LT1Y.PROBABLE",titleNb:"Hjernekok",titleEn:"Brain Fry",bodyNb:"Kognitiv overbelastning svekker evnen til å vurdere kvalitet.",bodyEn:"Cognitive overload weakens quality judgment."},{id:"ai-fatigue",sourceId:"v1-ai-fatigue",fallbackCanonical:"SYSTEM.ORGANIZATIONS.GROWS.HIGH.LT1Y.PROBABLE",titleNb:"KI-tretthet",titleEn:"AI Fatigue",bodyNb:"Vedvarende tilsynsarbeid gir mental utmattelse over tid.",bodyEn:"Continuous supervision work creates sustained mental exhaustion."},{id:"threaded-work",sourceId:"v1-threaded-work",fallbackCanonical:"SYSTEM.ORGANIZATIONS.TRANSFORMS.HIGH.NOW.CONFIRMED",titleNb:"Trådet arbeid",titleEn:"Threaded Work",bodyNb:"Rollen skifter fra utfører til orkestrator av parallelle maskinprosesser.",bodyEn:"Roles shift from maker to orchestrator of parallel machine processes."},{id:"cognitive-orchestration",sourceId:"v1-cognitive-orchestration",fallbackCanonical:"IDEA.EDUCATION.GROWS.MEDIUM.Y1_3.PROBABLE",titleNb:"Kognitiv orkestrering",titleEn:"Cognitive Orchestration",bodyNb:"Mennesker dirigerer maskinell tenkning i stedet for å produsere alt direkte.",bodyEn:"Humans conduct machine reasoning instead of producing every output directly."},{id:"ai-work-rhythm",sourceId:"v1-ai-work-rhythm",fallbackCanonical:"SYSTEM.ORGANIZATIONS.TRANSFORMS.EXTREME.Y1_3.CONFIRMED",titleNb:"KI-arbeidsrytmen",titleEn:"AI Work Rhythm",bodyNb:"Arbeid flyttes fra sekvensiell utførelse til kontinuerlig prosessovervåking.",bodyEn:"Work shifts from sequential execution to continuous process supervision."}],z2=100,H2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},Dm=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:H2}),Pf=[Dm("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),Dm("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),Dm("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],G2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),Ba=r=>{let t=r%1;return t<0&&(t+=1),t},V2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),Ba(r+l*(1-Math.exp(-i*s)))},Hx=12,Nm=9,Lm=.12,Gx=-1,Um=2.4,k2=.3,X2=1.2,W2=.3,Vx=6741503,Y2=5,q2=3.2,j2=.35,Z2=.25,kx=400,K2=2.5,Xx=16755251,Ff=3,Q2=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],Om=[{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1770978482749-c088b297-1ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770978437489-d0299c39-WelhavenTheater.png"},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],A0=17.6,aS=A0*(16/9),sS=aS*Math.sqrt(3)/2,J2=.56,$2=31.2,Bf=sS*2.62,Wx=A0*.56,tR=60,eR=40,nR=220,iR=360,aR=105,sR=.75,Yx=96,Km=[330,250,180,120],rR=[2,3.2,4.8,6.2],oR=[.12,.17,.22,.3],zf={tailPath:"",taperPaths:Km.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},Im=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],h=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${h} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},lR=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),cR=(r,t,i,s,l,c)=>{rS(r,t,l).forEach((h,m)=>{r.fillText(h,i,s+m*c)})},rS=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const h=s[f];if(!h)continue;const m=`${c}${h} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${h} `):c=m}return c.trim()&&l.push(c.trim()),l},uR=/\(\s*bold\s*\)/gi,fR=/\(\s*new\s*line\s*\)/gi,dR=/\(\s*new\s*paragraph\s*\)/gi,R0=r=>{const i=r.replace(/\r\n?/g,`
`).replace(dR,`

`).replace(fR,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const h=/\(\s*bold\s*\)/i.test(c),m=c.replace(uR,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:h,paragraphBreak:s}),s=!1}),l},hR=(r,t,i,s,l,c,f,h,m=.6)=>{const p=R0(t);let _=s;p.forEach((v,g)=>{g>0&&v.paragraphBreak&&(_+=c*m),r.font=v.bold?h:f,rS(r,v.text,l).forEach(b=>{r.fillText(b,i,_),_+=c})}),r.font=f},qx=r=>R0(r).map(t=>t.text).join(" ").replace(/\s{2,}/g," ").trim(),pR=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,oS=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),mR=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),gR=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],_R=new Map(gR.map(([r,t])=>[oS(r),t])),vR=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],xR=vR.map(([r,t])=>[new RegExp(mR(r),"gi"),t]),yR={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},SR=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),MR=r=>{let t=r;return xR.forEach(([i,s])=>{t=t.replace(i,s)}),t},ER=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=yR[t.toLowerCase()];return i?SR(t,i):t}),bR=r=>{const t=r.trim();return t?(_R.get(oS(t))??ER(MR(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},TR=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(pR,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>bR(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},Fa=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},Qm=Math.PI*2,fo=r=>Math.min(1,Math.max(0,r)),Oc=(r,t,i,s,l)=>{const c=Qm*(r*i+s),f=Qm*(t*i+l),h=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return h+m},Hf=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new El(s)},ma=(r,t,i,s,l=!1)=>{r.wrapS=Tl,r.wrapT=Tl,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=qs,r.magFilter=Jn,l&&(r.colorSpace=Wn),r.needsUpdate=!0},Pm=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:h,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:v,seamDepth:g,seamWidth:S,roughnessBase:b,roughnessRange:D,normalStrength:E,aoStrength:y}=r,C=t*i,U=new ue(l),N=new Float32Array(C);let F=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY;for(let ot=0;ot<i;ot+=1)for(let Z=0;Z<t;Z+=1){const O=ot*t+Z,P=Z/t,J=ot/i,gt=Oc(P,J,c,s*.11,s*.23),vt=Oc(P,J,f,s*.41+.18,s*.29+.07),I=Oc(P,J,h,s*.71+.43,s*.53+.31),q=Math.sin(Qm*((P+J*.33)*m+s*.17));let _t=0;if(_!=="none"&&v>0){const nt=(_==="x"?P:J)*v%1,yt=Math.min(nt,1-nt);_t=Math.exp(-Math.pow(yt/Math.max(1e-4,S),2))}const Ot=gt*.6+vt*.28+I*.12+q*p-_t*g;N[O]=Ot,Ot<F&&(F=Ot),Ot>B&&(B=Ot)}const z=new Float32Array(C),T=Math.max(1e-4,B-F),L=new Uint8ClampedArray(C*4),mt=new Uint8ClampedArray(C*4),G=new Uint8ClampedArray(C*4);for(let ot=0;ot<i;ot+=1)for(let Z=0;Z<t;Z+=1){const O=ot*t+Z,P=O*4,J=Z/t,gt=ot/i,vt=fo((N[O]-F)/T);z[O]=vt;const I=Oc(J,gt,f*.6,s*.19+.62,s*.73+.14)*.5+.5,q=fo(.78+(vt-.5)*.24+(I-.5)*.12),_t=Oc(J,gt,c*.5,s*.37+.89,s*.13+.44),Ot=1+_t*.017,Yt=1+_t*.007,nt=1-_t*.013,yt=fo(b+(1-vt)*D+(I-.5)*.14),Lt=fo(.94-(1-vt)*y);L[P]=Math.round(fo(U.r*q*Ot)*255),L[P+1]=Math.round(fo(U.g*q*Yt)*255),L[P+2]=Math.round(fo(U.b*q*nt)*255),L[P+3]=255;const qt=Math.round(yt*255);mt[P]=qt,mt[P+1]=qt,mt[P+2]=qt,mt[P+3]=255;const te=Math.round(Lt*255);G[P]=te,G[P+1]=te,G[P+2]=te,G[P+3]=255}const et=(ot,Z)=>{const O=(ot+t)%t,P=(Z+i)%i;return z[P*t+O]},rt=new Uint8ClampedArray(C*4);for(let ot=0;ot<i;ot+=1)for(let Z=0;Z<t;Z+=1){const P=(ot*t+Z)*4,J=et(Z+1,ot)-et(Z-1,ot),gt=et(Z,ot+1)-et(Z,ot-1),vt=-J*E,I=-gt*E,q=1,_t=1/Math.hypot(vt,I,q);rt[P]=Math.round((vt*_t*.5+.5)*255),rt[P+1]=Math.round((I*_t*.5+.5)*255),rt[P+2]=Math.round((q*_t*.5+.5)*255),rt[P+3]=255}return{albedo:Hf(L,t,i),normal:Hf(rt,t,i),roughness:Hf(mt,t,i),ao:Hf(G,t,i)}},AR=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const h=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=h*255,c/=h*255,f/=h*255;const m=l*.2126+c*.7152+f*.0722;return{color:new ue(l,c,f),luminance:m}};function RR(){const r=se.useRef([]),t=se.useRef(null),[i,s]=se.useState(!1),[l,c]=se.useState({width:1,height:1}),[f,h]=se.useState(zf);return se.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),_=window.matchMedia("(pointer: coarse)"),v=()=>{s(!m.matches&&p.matches&&!_.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},S=()=>{v()},b=(C,U)=>typeof C.addEventListener=="function"?(C.addEventListener("change",U),()=>C.removeEventListener("change",U)):(C.addListener(U),()=>C.removeListener(U));v(),g();const D=b(m,S),E=b(p,S),y=b(_,S);return window.addEventListener("resize",g,{passive:!0}),()=>{D(),E(),y(),window.removeEventListener("resize",g)}},[]),se.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],h(zf);return}const m=_=>{if(_.pointerType!=="mouse"&&_.pointerType!=="pen")return;const v={x:_.clientX,y:_.clientY,t:performance.now()},g=r.current,S=g[g.length-1];if(S){const b=v.x-S.x,D=v.y-S.y;if(Math.hypot(b,D)<sR)return}g.push(v),g.length>Yx&&g.splice(0,g.length-Yx)},p=()=>{const _=performance.now(),v=_-iR,g=r.current;let S=0;for(;S<g.length&&g[S].t<v;)S+=1;if(S>0&&g.splice(0,S),g.length<2)h(b=>b.visible?zf:b);else{const b=Im(g),D=Km.map(F=>{const B=_-F;let z=g.length-1;for(;z>0&&g[z-1].t>=B;)z-=1;const T=g.slice(z);return Im(T.length>=2?T:g.slice(-2))}),E=_-aR;let y=g.length-1;for(;y>0&&g[y-1].t>=E;)y-=1;let C=g.slice(y);C.length<2&&(C=g.slice(-2));const U=Im(C),N=C[C.length-1]??g[g.length-1];h(F=>F.visible&&F.tailPath===b&&F.taperPaths.every((B,z)=>B===D[z])&&F.headPath===U&&F.headX===N.x&&F.headY===N.y?F:{tailPath:b,taperPaths:D,headPath:U,headX:N.x,headY:N.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],h(zf)}},[i]),i?wt.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[wt.jsxs("defs",{children:[wt.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[wt.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),wt.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),wt.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[wt.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),wt.jsxs("feMerge",{children:[wt.jsx("feMergeNode",{in:"blur"}),wt.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?wt.jsxs(wt.Fragment,{children:[wt.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?wt.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:oR[p],strokeWidth:rR[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${Km[p]}`):null),wt.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),wt.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function CR(){const r=se.useRef(null),t=se.useRef([]),i=se.useRef(Lm),s=se.useRef(Lm),l=se.useRef([]),c=se.useRef(null);se.useEffect(()=>{const K=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=K,document.documentElement.style.overscrollBehavior=""}},[]);const[f,h]=se.useState(Pf),[m,p]=se.useState([]),[_,v]=se.useState(Pf[0].id),[g,S]=se.useState(!0),[b,D]=se.useState(!1),[E,y]=se.useState(!1),[C,U]=se.useState("menu"),[N,F]=se.useState([]),[B,z]=se.useState(!1),[T,L]=se.useState(""),[mt,G]=se.useState(0),[et,rt]=se.useState(""),[ot,Z]=se.useState(""),[O,P]=se.useState(""),[J,gt]=se.useState(()=>{if(typeof window>"u")return"nb";try{const K=window.localStorage.getItem(zx);if(K==="nb"||K==="en")return K}catch{}return"nb"});se.useEffect(()=>{try{window.localStorage.setItem(zx,J)}catch{}},[J]);const vt=B2[J],I=se.useMemo(()=>K=>J==="nb"?TR(K):K,[J]),q=se.useMemo(()=>{const K=new Map;return m.forEach(w=>{w?.id&&K.set(w.id,w)}),K},[m]),_t=se.useMemo(()=>Array.from({length:z2},(w,M)=>{const V=M%wm.length,$=Math.floor(M/wm.length)+1,pt=wm[V];return{...pt,id:`${pt.id}-${String($).padStart(2,"0")}-${String(V+1).padStart(2,"0")}`}}).map((w,M)=>{const V=q.get(w.sourceId),$=Fa(V?.canonical,w.fallbackCanonical).toUpperCase(),pt=Fa(V?.label_nb,V?.label,w.titleNb),ct=Fa(V?.label,w.titleEn,w.titleNb),At=Fa(V?.note_nb),dt=Fa(V?.note),Tt=Fa(At,w.bodyNb),Et=Fa(dt,w.bodyEn),bt=qx(Tt),Rt=qx(Et),Ht=J==="nb"?Tt:Et,Bt=J==="nb"?bt:Rt,Gt=R0(Ht);let le="";if(typeof document<"u"){const X=document.createElement("canvas");X.width=420,X.height=420;const Nt=X.getContext("2d");if(Nt)try{Bx(Nt,$,{backgroundColor:"rgba(0,0,0,0)",lineColor:"rgba(46,39,33,0.94)",gridColor:"rgba(69,60,53,0.48)"}),le=X.toDataURL("image/png")}catch{le=""}}return{...w,index:M,canonical:$,titleNbResolved:pt,titleEnResolved:ct,bodyNbResolved:Tt,bodyEnResolved:Et,title:J==="nb"?pt:ct,body:Bt,bodyRich:Ht,bodySegments:Gt,previewDataUrl:le}}),[q,J]),Ot=se.useMemo(()=>JSON.stringify({version:"rl-story-v1",name:"replacement-anxiety-pattern",items:_t.map(K=>({order:K.index+1,id:K.id,source_id:K.sourceId,canonical:K.canonical}))},null,2),[_t]),Yt=se.useCallback(()=>{c.current?.()},[]),nt=se.useCallback(K=>{K.preventDefault();const w=et.trim(),M=ot.trim(),V=O.trim();if(!w||!M||!V)return;const $=J==="nb"?"Kontakt fra Signaturer":"Contact from Signatures",pt=[`${J==="nb"?"Navn":"Name"}: ${w}`,`${J==="nb"?"E-post":"Email"}: ${M}`,"",`${J==="nb"?"Melding":"Message"}:`,V].join(`
`),ct=`mailto:lars@larscuzner.com?subject=${encodeURIComponent($)}&body=${encodeURIComponent(pt)}`;window.location.href=ct},[J,ot,O,et]),yt=se.useRef(0),Lt=se.useRef(0),qt=se.useRef(null),te=se.useCallback(K=>{const w=K>=0?1:-1;G(M=>{const V=Om.length;return(M+w+V)%V})},[]),ce=se.useCallback(K=>{K.preventDefault();const w=Math.abs(K.deltaX)>Math.abs(K.deltaY)?K.deltaX:K.deltaY;yt.current+=w;const M=performance.now();M-Lt.current<nR||Math.abs(yt.current)<eR||(te(yt.current>0?1:-1),yt.current=0,Lt.current=M)},[te]),xn=se.useCallback(K=>{qt.current=K.touches[0]?.clientX??null},[]),Ce=se.useCallback(K=>{const w=qt.current,M=K.changedTouches[0]?.clientX??null;if(qt.current=null,w===null||M===null)return;const V=M-w;Math.abs(V)<28||te(V<0?1:-1)},[te]);se.useEffect(()=>{E||U("menu")},[E]),se.useEffect(()=>{C==="videos"&&(yt.current=0,Lt.current=0)},[C]),se.useEffect(()=>{if(!E||C!=="videos")return;let K=!1;const w=()=>{K||l.current.forEach(V=>{if(!V||!V.paused&&V.readyState>=2)return;const $=V.play();$&&typeof $.catch=="function"&&$.catch(()=>{})})};w();const M=window.setInterval(w,900);return()=>{K=!0,window.clearInterval(M)}},[E,C]),se.useEffect(()=>{if(!E||C!=="news")return;let K=!1;const w=$=>({title:String($?.title??"").trim(),source:String($?.source??"").trim(),url:String($?.url??"").trim(),snippet:String($?.snippet??"").trim(),published_at:String($?.published_at??"").trim(),published:$?.published!==!1}),M=$=>{const pt=Date.parse($);return Number.isFinite(pt)?pt:0};return(async()=>{z(!0),L("");for(const $ of Q2)try{const pt=await fetch($,{cache:"no-store"});if(!pt.ok)continue;const ct=await pt.json();if(!Array.isArray(ct?.items))continue;const At=ct.items.map(w).filter(dt=>dt.published&&dt.title&&dt.url).sort((dt,Tt)=>M(Tt.published_at)-M(dt.published_at));if(K)return;F(At),z(!1);return}catch{}K||(F([]),L(vt.outsideNewsError),z(!1))})(),()=>{K=!0}},[E,C,vt.outsideNewsError]),se.useEffect(()=>{let K=!1;return(async()=>{try{const M=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),V=M.headers.get("content-type")??"";if(!M.ok)throw new Error(`HTTP ${M.status} while loading glyph language map`);if(!V.toLowerCase().includes("application/json")){const Et=await M.text();throw new Error(`Expected JSON but got '${V||"unknown"}' (${Et.slice(0,120)})`)}const $=await M.json();if(!Array.isArray($?.items))throw new Error("Glyph language payload missing 'items' array");const pt=$.items.map((Et,bt)=>G2(Et,bt)).filter(Et=>Et.enabled!==!1),ct=new Map,At=[],dt=[],Tt=[];if(pt.forEach(Et=>{if(!Et.canonical){dt.push(`${Et.id} (empty canonical)`);return}let bt="";try{bt=I2(Et.canonical)}catch{dt.push(`${Et.id} (${Et.canonical})`);return}const Rt=ct.get(bt);if(Rt&&Rt!==Et.id){Tt.push(`${Et.id} duplicates ${Rt} (${bt})`);return}ct.set(bt,Et.id),At.push({...Et,canonical:bt})}),dt.length>0&&console.warn("Glyph language map dropped invalid canonical rows:",dt.join("; ")),Tt.length>0&&console.warn("Glyph language map dropped duplicate canonical rows:",Tt.join("; ")),K)return;p(At)}catch(M){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",M),K)return;p([])}})(),()=>{K=!0}},[]);const ye=se.useMemo(()=>m.filter(K=>K.enabled!==!1&&typeof K.canonical=="string"&&K.canonical.trim().length>0),[m]),Le=se.useMemo(()=>{const K=new Map;if(!f.length||!ye.length)return K;const w=$=>{const pt=Ba($);return Ba(Lm-pt)},M=[...f].sort(($,pt)=>{const ct=typeof $.installation?.placement_t=="number"?$.installation.placement_t:0,At=typeof pt.installation?.placement_t=="number"?pt.installation.placement_t:0,dt=w(ct),Tt=w(At);return dt===Tt?$.id.localeCompare(pt.id):dt-Tt}),V=Math.min(M.length,ye.length);for(let $=0;$<V;$+=1)K.set(M[$].id,ye[$]);return K},[f,ye]),ge=se.useMemo(()=>{const K=new Map;return Le.forEach((w,M)=>{w.canonical&&K.set(M,w.canonical)}),K},[Le]),mn=se.useMemo(()=>{const K=new Map;return Le.forEach((w,M)=>{K.set(M,{label:w.label||"",note:w.note||"",labelNb:w.label_nb||"",noteNb:w.note_nb||""})}),K},[Le]);se.useEffect(()=>{let K=!1;return(async()=>{S(!0),D(!1);try{const M=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),V=M.headers.get("content-type")??"";if(!M.ok)throw new Error(`HTTP ${M.status} while loading panel data`);if(!V.toLowerCase().includes("application/json")){const Tt=await M.text();throw new Error(`Expected JSON but got '${V||"unknown"}' (${Tt.slice(0,120)})`)}const $=await M.json();if(!Array.isArray($?.panels))throw new Error("Panel payload missing 'panels' array");const pt=typeof $.media_root=="string"?$.media_root.replace(/\/+$/,""):"",ct=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",At=Tt=>/^https?:\/\//i.test(Tt)&&ct?`/proxy?url=${encodeURIComponent(Tt)}`:Tt,dt=$.panels.map(Tt=>{const Et=typeof Tt?.source=="string"?Tt.source.replace(/^\/+/,""):"",bt=Et?pt?`${pt}/${Et}`:`/${Et}`:void 0,Rt=bt?At(bt):void 0,Ht=typeof Tt?.poster=="string"?Tt.poster.replace(/^\/+/,""):"",Bt=Ht?pt?`${pt}/${Ht}`:`/${Ht}`:void 0,Gt=Bt?At(Bt):void 0,le=Tt?.type==="image"||Tt?.type==="video"?Tt.type:"text",X=Tt?.content??{},Nt=String(X?.title??"Untitled").trim()||"Untitled",Ut=String(X?.description??"").trim(),Ft=String(X?.title_nb??X?.title_no??"").trim(),Dt=String(X?.description_nb??X?.description_no??"").trim(),ft=String(X?.title_en??"").trim(),Vt=String(X?.description_en??"").trim();return{...Tt,kind:le,type:le,title:Nt,body:Ut,title_nb:Ft||Nt,body_nb:Dt||Ut,title_en:ft,body_en:Vt,cta:X?.cta,poster:Gt,image:le==="image"?Rt:void 0,video:le==="video"?Rt:void 0}});if(dt.length===0)throw new Error("Panel payload contained 0 panels");if(K)return;h(dt),v(dt[0].id)}catch(M){if(console.error("Failed to load panels; using fallback data.",M),K)return;h(Pf),v(Pf[0].id),D(!0)}finally{K||S(!1)}})(),()=>{K=!0}},[]);const k=se.useMemo(()=>f.find(K=>K.id===_)??f[0]??{title:"",body:""},[_,f]),nn=se.useMemo(()=>K=>{const w=mn.get(K.id);if(J==="nb"){const $=Fa(w?.labelNb,K.title_nb,I(w?.label||""),I(K.title||"")),pt=Fa(w?.noteNb,K.body_nb,I(w?.note||""),I(K.body||""));return{title:$||"Mangler norsk tittel",body:pt||"Mangler norsk tekst."}}const M=Fa(w?.label,K.title_en),V=Fa(w?.note,K.body_en);return{title:M||"Missing English title",body:V||"Missing English text."}},[mn,J,I]),Ue=se.useMemo(()=>nn(k).title,[k,nn]),Ye=se.useMemo(()=>new Intl.DateTimeFormat(J==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[J]);return se.useEffect(()=>{if(f.length===0)return;const K=r.current;if(!K)return;c.current=null,y(!1);let w=!1,M=()=>{};return(()=>{if(w||!K)return;t.current=[];const $=window.matchMedia("(prefers-reduced-motion: reduce)"),pt=window.matchMedia("(max-width: 767px)"),ct=$.matches,At=pt.matches,dt=new p0;dt.background=new ue(987671),dt.fog=new Yc(987671,38,230);const Tt=new Ti(At?72:64,K.clientWidth/K.clientHeight,.1,1200),Et=new eS({antialias:!At,alpha:!1,powerPreference:"high-performance"});Et.setPixelRatio(Math.min(window.devicePixelRatio,At?1:1.5)),Et.setSize(K.clientWidth,K.clientHeight),Et.outputColorSpace=Wn,Et.toneMapping=zd,Et.toneMappingExposure=At?.76:.72,Et.shadowMap.enabled=!At,Et.shadowMap.type=go,K.appendChild(Et.domElement);let bt=!1;const Rt=Ct=>{bt!==Ct&&(bt=Ct,Et.shadowMap.type=Ct?Kx:go,Et.shadowMap.needsUpdate=!0)},Ht=new Pd(Et),Bt=Ht.fromScene(new S2,.06);dt.environment=Bt.texture;const Gt=new Xy(16185599,.05);dt.add(Gt);const le=new ky(14739442,1777446,.08);dt.add(le);const X=lR(y2),Nt=new Py(X,!0,"catmullrom",.17),Ut=At?180:300,Ft=Math.min(8,Et.capabilities.getMaxAnisotropy()),Dt=At?256:512,ft=Pm({width:Dt,height:Dt,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});ma(ft.albedo,4.8,24,Ft,!0),ma(ft.normal,4.8,24,Ft),ma(ft.roughness,4.8,24,Ft),ma(ft.ao,4.8,24,Ft);const Vt=Pm({width:Dt,height:Dt,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});ma(Vt.albedo,2.2,24,Ft,!0),ma(Vt.normal,2.2,24,Ft),ma(Vt.roughness,2.2,24,Ft),ma(Vt.ao,2.2,24,Ft);const re=Pm({width:Dt,height:Dt,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});ma(re.albedo,3.4,24,Ft,!0),ma(re.normal,3.4,24,Ft),ma(re.roughness,3.4,24,Ft),ma(re.ao,3.4,24,Ft);const Oe=new po({color:9607586,map:ft.albedo,normalMap:ft.normal,normalScale:new we(.32,.32),roughnessMap:ft.roughness,roughness:.38,metalness:0,aoMap:ft.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:kn}),Ee=new po({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:kn}),Je=new po({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new ue(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:kn}),Fi=()=>{const Ct=[],Jt=new j(0,1,0);let ie=new j(1,0,0);for(let Pt=0;Pt<=Ut;Pt+=1){const Nn=Pt/Ut,wi=Nt.getPointAt(Nn),Ra=Nn===1?wi.clone().sub(Nt.getPointAt(Nn-.001)).normalize():Nt.getPointAt(Nn+.001).sub(wi).normalize();let ni=new j().crossVectors(Ra,Jt).normalize();ni.lengthSq()<1e-4&&(ni=ie.clone()),ni.dot(ie)<0&&ni.multiplyScalar(-1),ie=ni.clone();const Ca=new j().crossVectors(ni,Ra).normalize();Ct.push({pt:wi,right:ni,up:Ca,t:Nn})}const ee=(Pt,Nn,wi=!1)=>{const Ra=[],ni=[],Ca=[];for(let yi=0;yi<=Ut;yi+=1){const ii=Ct[yi],gn=Pt(ii),_e=Nn(ii);Ra.push(gn.x,gn.y,gn.z,_e.x,_e.y,_e.z),ni.push(0,ii.t,1,ii.t)}for(let yi=0;yi<Ut;yi+=1){const ii=yi*2,gn=ii+1,_e=ii+2,tn=ii+3;wi?Ca.push(ii,_e,gn,_e,tn,gn):Ca.push(ii,gn,_e,_e,gn,tn)}const wa=new Ji;wa.setAttribute("position",new $n(Ra,3));const ns=new $n(ni,2);return wa.setAttribute("uv",ns),wa.setAttribute("uv2",ns.clone()),wa.setIndex(Ca),wa.computeVertexNormals(),wa},kt=Hx*.5,me=Nm*.5,We=ee(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-me)).add(Pt.right.clone().multiplyScalar(-kt)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-me)).add(Pt.right.clone().multiplyScalar(kt))),$e=ee(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me)).add(Pt.right.clone().multiplyScalar(-kt)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me)).add(Pt.right.clone().multiplyScalar(kt)),!0),He=ee(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-me)).add(Pt.right.clone().multiplyScalar(-kt)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me)).add(Pt.right.clone().multiplyScalar(-kt)),!0),vi=ee(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-me)).add(Pt.right.clone().multiplyScalar(kt)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me)).add(Pt.right.clone().multiplyScalar(kt))),xi=.08,Dn=.015,Ie=ee(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me-xi)).add(Pt.right.clone().multiplyScalar(-kt+Dn)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me)).add(Pt.right.clone().multiplyScalar(-kt+Dn)),!0),sn=ee(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me-xi)).add(Pt.right.clone().multiplyScalar(kt-Dn)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me)).add(Pt.right.clone().multiplyScalar(kt-Dn)),!1),Be=.22,ln=.018,aa=ee(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-me)).add(Pt.right.clone().multiplyScalar(-kt+ln)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-me+Be)).add(Pt.right.clone().multiplyScalar(-kt+ln)),!0),es=ee(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-me)).add(Pt.right.clone().multiplyScalar(kt-ln)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-me+Be)).add(Pt.right.clone().multiplyScalar(kt-ln)),!1),Ta=.14,Aa=ee(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me-.05)).add(Pt.right.clone().multiplyScalar(-Ta)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(me-.05)).add(Pt.right.clone().multiplyScalar(Ta)),!0);return{floorGeo:We,ceilGeo:$e,leftGeo:He,rightGeo:vi,leftSkirtGeo:aa,rightSkirtGeo:es,trackRailGeo:Aa,leftCrownGeo:Ie,rightCrownGeo:sn}},{floorGeo:Wa,ceilGeo:ya,leftGeo:ms,rightGeo:Sa,leftSkirtGeo:gs,rightSkirtGeo:Bi,trackRailGeo:_s,leftCrownGeo:Ai,rightCrownGeo:Sn}=Fi(),Mn=new Ve(Wa,Oe),zi=new Ve(ya,Je),Ri=new Ve(ms,Ee),Ya=new Ve(Sa,Ee),bo=new po({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),qa=new Ys({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:kn}),ja=new Ve(gs,qa),Qs=new Ve(Bi,qa);ja.receiveShadow=!0,Qs.receiveShadow=!0;const Ma=new Ve(Ai,qa),Ea=new Ve(Sn,qa);Ma.receiveShadow=!1,Ea.receiveShadow=!1;const Za=new po({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:kn}),R=new Ve(_s,Za);R.receiveShadow=!1,Mn.receiveShadow=!0,Mn.castShadow=!0,zi.receiveShadow=!0,zi.castShadow=!0,Ri&&(Ri.receiveShadow=!0,Ri.castShadow=!0),Ya&&(Ya.receiveShadow=!0,Ya.castShadow=!0),dt.add(Mn),dt.add(zi),Ri&&dt.add(Ri),Ya&&dt.add(Ya),dt.add(ja),dt.add(Qs),dt.add(Ma),dt.add(Ea),dt.add(R);const Y=new j(0,1,0),ut=new pn,at=new pn,tt=new pn;dt.add(ut),dt.add(at),dt.add(tt);const It=new Wf(16773598,At?16:24,34,Math.PI/8.4,.44,2);It.target=ut,It.castShadow=!At,It.castShadow&&(It.shadow.mapSize.width=2048,It.shadow.mapSize.height=2048,It.shadow.bias=-35e-5,It.shadow.normalBias=.012,It.shadow.camera.near=.4,It.shadow.camera.far=34),dt.add(It);const Wt=new Wf(12571903,At?6:9,34,Math.PI/6.5,.68,2);Wt.target=at,Wt.castShadow=!1,dt.add(Wt);const zt=new Wf(14083583,At?5:7,28,Math.PI/7.8,.6,2);zt.target=tt,zt.castShadow=!1,dt.add(zt);const jt=new pn,ne=new pn;dt.add(jt),dt.add(ne);const Qt=new Ym(16774374,0);if(Qt.target=jt,Qt.castShadow=!At,Qt.castShadow){Qt.shadow.mapSize.width=4096,Qt.shadow.mapSize.height=4096,Qt.shadow.bias=-8e-5,Qt.shadow.normalBias=.0012,Qt.shadow.radius=0;const Ct=At?250:220;Qt.shadow.camera.left=-Ct,Qt.shadow.camera.right=Ct,Qt.shadow.camera.top=Ct,Qt.shadow.camera.bottom=-Ct,Qt.shadow.camera.near=25,Qt.shadow.camera.far=980}dt.add(Qt);const de=new Ym(9090280,0);de.target=ne,dt.add(de),Wa.computeBoundingBox(),Wa.computeBoundingSphere(),ya.computeBoundingBox(),ya.computeBoundingSphere(),ms.computeBoundingBox(),ms.computeBoundingSphere(),Sa.computeBoundingBox(),Sa.computeBoundingSphere();const ve=f.some(Ct=>Ct.installation?.mount_type==="continuous_led_wall"||Ct.installation?.mount_type==="jutting_half_wall")?f:At?f.filter((Ct,Jt)=>Jt%2===0):f,Ke=[],an=[],Ae=[],En=[],Kt=[],An=[],pe=[],Pn=Ct=>{if(!Ct.paused&&Ct.currentTime>0)return;const Jt=Ct.play();Jt&&typeof Jt.catch=="function"&&Jt.catch(()=>{})},ci=setInterval(()=>{let Ct=!0;An.forEach(Jt=>{(Jt.paused||Jt.readyState<2)&&(Ct=!1,Pn(Jt))}),Ct&&An.length>0&&clearInterval(ci)},500);Kt.push(()=>clearInterval(ci));const Hi=new Fr(1,1,.2),_i=new us(.82,.82),qe=new po({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),Rn=(Ct,Jt)=>{const ee=document.createElement("canvas");ee.width=512,ee.height=512;const kt=ee.getContext("2d");kt.clearRect(0,0,512,512);const me=ge.get(Jt);if(me)try{Bx(kt,me,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const sn=new El(ee);return sn.colorSpace=Wn,sn}catch(sn){console.warn(`Invalid glyph canonical sentence for panel '${Jt}': '${me}'. Falling back to procedural glyph.`,sn)}const We=512/2,$e=512/2,He=Ct*137.508;kt.fillStyle="rgba(6,14,24,0.7)",kt.beginPath(),kt.arc(We,$e,512*.42,0,Math.PI*2),kt.fill(),kt.strokeStyle="rgba(102,221,255,0.95)",kt.lineWidth=2.5,kt.lineCap="round",kt.beginPath(),kt.arc(We,$e,512*.38,0,Math.PI*2),kt.stroke();const vi=3+Ct%4;for(let sn=0;sn<vi;sn++){const Be=sn/vi*Math.PI*2+He,ln=512*.08,aa=512*.32;kt.beginPath(),kt.moveTo(We+Math.cos(Be)*ln,$e+Math.sin(Be)*ln),kt.lineTo(We+Math.cos(Be)*aa,$e+Math.sin(Be)*aa),kt.stroke()}const xi=2+Ct%3;for(let sn=0;sn<xi;sn++){const Be=512*(.15+sn*.09),ln=He+sn*1.2;kt.beginPath(),kt.arc(We,$e,Be,ln,ln+Math.PI*(.4+Ct%3*.2)),kt.stroke()}kt.fillStyle="rgba(102,221,255,0.85)";const Dn=3+Ct%5;for(let sn=0;sn<Dn;sn++){const Be=He+sn/Dn*Math.PI*2,ln=512*(.2+sn%3*.06);kt.beginPath(),kt.arc(We+Math.cos(Be)*ln,$e+Math.sin(Be)*ln,4,0,Math.PI*2),kt.fill()}kt.strokeStyle="rgba(102,221,255,0.5)",kt.lineWidth=1.5,kt.beginPath(),kt.arc(We,$e,512*.12,0,Math.PI*2),kt.stroke(),kt.fillStyle="rgba(102,221,255,0.95)",kt.beginPath(),kt.arc(We,$e,6,0,Math.PI*2),kt.fill();const Ie=new El(ee);return Ie.colorSpace=Wn,Ie},ti=(Ct,Jt)=>{const ie=document.createElement("canvas");ie.width=1024,ie.height=640;const ee=ie.getContext("2d");ee.fillStyle="rgba(8,12,18,0.88)",ee.beginPath(),ee.roundRect(16,16,992,608,24),ee.fill(),ee.strokeStyle="rgba(102,221,255,0.25)",ee.lineWidth=2,ee.beginPath(),ee.roundRect(16,16,992,608,24),ee.stroke(),ee.fillStyle="rgba(102,221,255,0.95)",ee.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",cR(ee,Ct.toUpperCase(),60,100,900,58),ee.strokeStyle="rgba(102,221,255,0.3)",ee.lineWidth=2,ee.beginPath(),ee.moveTo(60,180),ee.lineTo(960,180),ee.stroke(),ee.fillStyle="rgba(220,230,240,0.9)";const kt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",me="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";ee.font=kt,hR(ee,Jt,60,230,900,42,kt,me);const We=new El(ie);return We.colorSpace=Wn,We},Cn=()=>{const Jt=document.createElement("canvas");Jt.width=512,Jt.height=512;const ie=Jt.getContext("2d"),ee=512/2,kt=512/2;ie.beginPath(),ie.arc(ee,kt,512*.42,0,Math.PI*2),ie.fillStyle="rgba(6,14,24,0.7)",ie.fill(),ie.strokeStyle="rgba(255,170,51,0.9)",ie.lineWidth=6,ie.beginPath(),ie.arc(ee,kt,512*.38,0,Math.PI*2),ie.stroke();const me=8;for(let $e=0;$e<me;$e++){const He=$e/me*Math.PI*2-Math.PI/2;ie.strokeStyle=`rgba(255,${170+Math.round(Math.sin($e)*40)},51,0.8)`,ie.lineWidth=4,ie.beginPath(),ie.moveTo(ee+Math.cos(He)*512*.12,kt+Math.sin(He)*512*.12),ie.lineTo(ee+Math.cos(He)*512*.34,kt+Math.sin(He)*512*.34),ie.stroke();const vi=ee+Math.cos(He)*512*.34,xi=kt+Math.sin(He)*512*.34,Dn=512*.06;ie.beginPath(),ie.moveTo(vi,xi),ie.lineTo(vi-Dn*Math.cos(He-.4),xi-Dn*Math.sin(He-.4)),ie.moveTo(vi,xi),ie.lineTo(vi-Dn*Math.cos(He+.4),xi-Dn*Math.sin(He+.4)),ie.stroke()}ie.beginPath(),ie.arc(ee,kt,512*.06,0,Math.PI*2),ie.fillStyle="rgba(255,200,80,0.95)",ie.fill();const We=new El(Jt);return We.colorSpace=Wn,We},Ci=Ct=>{const Jt=Ba(Ct),ie=Nt.getPointAt(Jt),kt=Nt.getPointAt(Ba(Jt+.002)).clone().sub(ie).normalize();let me=new j().crossVectors(kt,Y).normalize();me.lengthSq()<1e-4&&(me=new j(1,0,0));const We=new j().crossVectors(me,kt).normalize();return{point:ie,tangent:kt,right:me,up:We}};Nt.getLength();const ui=[],vs=new us(Um*2,Um*2),Zc=new us(Y2,q2);ve.forEach((Ct,Jt)=>{const ie=Ct.installation,ee=Ba(ie?.placement_t??.05+Jt/ve.length),{point:kt,right:me,up:We}=Ci(ee),$e=ie?.side==="left",xi=(ie?.side==="center"?0:$e?-1:1)*Hx*.12,Dn=kt.clone().add(me.clone().multiplyScalar(xi)).add(We.clone().multiplyScalar(.5)),Ie=Rn(Jt,Ct.id);an.push(Ie);const sn=new Ys({color:16777215,emissive:new ue(Vx),emissiveIntensity:1.2,map:Ie,emissiveMap:Ie,transparent:!0,alphaTest:.05,side:kn,depthWrite:!1});Ae.push(sn);const Be=new Ve(vs,sn);Be.position.copy(Dn),Be.userData={panel:Ct,isGlyph:!0},Ke.push(Be),dt.add(Be);const ln=nn(Ct),aa=ln.title,es=ln.body,Ta=ti(aa,es);an.push(Ta);const Aa=new Ys({color:16777215,emissive:new ue(1122867),emissiveIntensity:.3,map:Ta,transparent:!0,opacity:0,side:kn,depthWrite:!0});Ae.push(Aa);const Pt=new Ve(Zc,Aa),Nn=new Ml;Nn.add(Pt),Nn.position.copy(Dn),Nn.scale.setScalar(.01),Nn.visible=!1,dt.add(Nn);const wi=new kc(Vx,At?6:12,20,1.5);wi.position.copy(Dn),dt.add(wi),ui.push({mesh:Be,card:Nn,panel:Ct,progress:ee,baseY:Dn.y,expanded:!1,expandT:0}),t.current.push({meta:Ct,progress:ee})});let $i=!1,fi=0,wn=0,ba=0,Ka=0,ta=0,ea=!1,Js=!1,Br=0,To=0;const xs=new j,na=new j,Fn=new j,ys=32;for(let Ct=0;Ct<ys;Ct++)Fn.add(Nt.getPointAt(Ct/ys));Fn.divideScalar(ys);const Qa=()=>{const Jt=Tt.position.clone().clone().sub(Fn).normalize();xs.copy(Fn).add(Jt.multiplyScalar(kx)),xs.y=Fn.y+kx*.35,na.copy(Fn)},Pl=()=>{ui.forEach(Ct=>{Ct.expanded=!1})},zr=Ct=>{$i!==Ct&&($i=Ct,ea=!1,Js=!1,y(Ct),Ct&&(Qa(),Pl()))},Hr=()=>{zr(!$i)};c.current=Hr;const Ao=new us(Ff*2,Ff*2),$s=Cn();an.push($s);const Ro=new Ys({color:16777215,emissive:new ue(Xx),emissiveIntensity:1.4,map:$s,emissiveMap:$s,transparent:!0,alphaTest:.05,side:kn,depthWrite:!1});Ae.push(Ro);const{point:ei,up:Ja}=Ci(Z2),Ss=ei.clone().add(Ja.clone().multiplyScalar(1)),ia=new Ve(Ao,Ro);ia.position.copy(Ss),ia.userData={isExitGlyph:!0},dt.add(ia);const ah=new us(Ff*5,Ff*5),Fl=new qc({visible:!1,side:kn}),$a=new Ve(ah,Fl);$a.position.copy(Ss),$a.userData={isExitGlyph:!0},Ke.push($a),dt.add($a);const tr=new kc(Xx,At?6:12,20,1.5);tr.position.copy(Ss),dt.add(tr);const Gr=new th(At?1.25:1.6,26,26);En.push(Gr);const Co=new Ys({color:16764788,emissive:new ue(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});Ae.push(Co);const Bl=ei.clone().add(Ja.clone().multiplyScalar(Nm*.52+.32)),er=new Ve(Gr,Co);er.position.copy(Bl),er.userData={isReentryDot:!0},Ke.push(er),dt.add(er);const Kc=new $d(At?1.75:2.2,At?2.35:2.95,52);En.push(Kc);const Vr=new qc({color:16761948,transparent:!0,opacity:0,side:kn,depthWrite:!1});Ae.push(Vr);const kr=new Ve(Kc,Vr);kr.position.copy(Bl),dt.add(kr);const zl=new kc(16761948,0,At?34:44,2);zl.position.copy(Bl),dt.add(zl);const Qc=new qy,Hl=new we,Jc=Ct=>{An.forEach(Pn);const Jt=Et.domElement.getBoundingClientRect();Hl.x=(Ct.clientX-Jt.left)/Jt.width*2-1,Hl.y=-((Ct.clientY-Jt.top)/Jt.height)*2+1,Br=Ct.clientX,To=Ct.clientY,Qc.setFromCamera(Hl,Tt);const ie=Qc.intersectObjects(Ke,!1);if($i){if(ie.length>0){const ee=ie[0].object;if(ee.userData.isReentryDot){zr(!1);return}if(ee.userData.isExitGlyph){Hr();return}}ea=!0,Js=Ct.shiftKey||Ct.altKey||Ct.button===2;return}if(ie.length>0){const ee=ie[0].object;if(ee.userData.isExitGlyph){Hr();return}const kt=ee.userData.panel;if(kt){const me=ui.find(We=>We.panel.id===kt.id);me&&(me.expanded?me.expanded=!1:(ui.forEach(We=>{We.expanded=!1}),me.expanded=!0))}}else ui.forEach(ee=>{ee.expanded=!1})};Et.domElement.addEventListener("pointerdown",Jc);const Ms={x:0,y:0},ts={x:0,y:0},$c=Ct=>{const Jt=Et.domElement.getBoundingClientRect(),ie=(Ct.clientX-Jt.left)/Jt.width,ee=(Ct.clientY-Jt.top)/Jt.height;if(Ms.x=(ie-.5)*2,Ms.y=(ee-.5)*2,$i&&ea){const kt=Ct.clientX-Br,me=Ct.clientY-To;Br=Ct.clientX,To=Ct.clientY,Js?Ka=bn.clamp(Ka+kt*.0038,-Math.PI*.48,Math.PI*.48):(wn+=kt*.0046,ba=bn.clamp(ba+me*.0035,-.88,.88));return}},tu=()=>{Ms.x=0,Ms.y=0,ea=!1,Js=!1},wo=()=>{ea=!1,Js=!1},Do=Ct=>{$i&&Ct.preventDefault()};Et.domElement.addEventListener("pointermove",$c,{passive:!0}),Et.domElement.addEventListener("pointerleave",tu,{passive:!0}),Et.domElement.addEventListener("pointerup",wo,{passive:!0}),Et.domElement.addEventListener("pointercancel",wo,{passive:!0}),Et.domElement.addEventListener("contextmenu",Do);const eu=Ct=>{if(Ct.preventDefault(),$i){wn+=Ct.deltaY*.0017,ta=bn.clamp(ta+Ct.deltaY*.22,-165,230);return}An.forEach(Pn),i.current=Ba(i.current+Gx*Ct.deltaY*75e-6)};Et.domElement.addEventListener("wheel",eu,{passive:!1});const nu=Ct=>{(Ct.key==="o"||Ct.key==="O")&&Hr()};window.addEventListener("keydown",nu);let Xr=0;const Gl=Ct=>{An.forEach(Pn),Xr=Ct.touches[0]?.clientY??0},iu=Ct=>{Ct.preventDefault();const Jt=Ct.touches[0]?.clientY??Xr,ie=Xr-Jt;if($i){wn+=ie*.0021,ta=bn.clamp(ta+ie*.13,-165,230),Xr=Jt;return}i.current=Ba(i.current+Gx*ie*11e-5),Xr=Jt};Et.domElement.addEventListener("touchstart",Gl,{passive:!0}),Et.domElement.addEventListener("touchmove",iu,{passive:!1});const au=()=>{K&&(Tt.aspect=K.clientWidth/K.clientHeight,Tt.updateProjectionMatrix(),Et.setSize(K.clientWidth,K.clientHeight))};window.addEventListener("resize",au);const Vl=new pn,su=new jy,kl=new j,ru=new j,ou=new j;let lu=f.length>0?f[0].id:"";const cu=()=>{if(w)return;const Ct=su.getDelta(),Jt=su.getElapsedTime();s.current=V2(s.current,i.current,ct?2.8:4.8,Ct),ts.x+=(Ms.x-ts.x)*.07,ts.y+=(Ms.y-ts.y)*.07;const ie=s.current,ee=Ba(ie+(At?.008:.01)),kt=Nt.getPointAt(ie),me=Nt.getPointAt(ee),We=Nt.getPointAt(Ba(ie+.002)).sub(Nt.getPointAt(Ba(ie-.002))).normalize();let $e=new j().crossVectors(We,Y).normalize();$e.lengthSq()<1e-4&&($e=new j(1,0,0));const He=new j().crossVectors($e,We).normalize(),vi=$e.clone().multiplyScalar(ts.x*(At?0:.62)).add(He.clone().multiplyScalar(ts.y*(At?0:.42))),xi=ct?new j:He.clone().multiplyScalar(Math.sin(Jt*.45)*.12),Dn=1/K2;$i&&fi<1?fi=Math.min(1,fi+Dn*Ct):!$i&&fi>0&&(fi=Math.max(0,fi-Dn*Ct));const Ie=fi<.5?4*fi*fi*fi:1-Math.pow(-2*fi+2,3)/2,sn=bn.smoothstep(Ie,.18,1),Be=ts.x*(At?0:15.4)*sn,ln=ts.y*(At?0:9.2)*sn;jt.position.copy(Fn).add(new j(Math.sin(wn)*6.8+Be*.2,ba*2.4+ln*.18,Math.cos(wn)*3.6-Be*.13)),ne.position.copy(Fn).add(new j(-Math.sin(wn)*3.2,ba*.9,Math.cos(wn)*2.1)),Qt.position.set(Fn.x+700+Be*2.8+Math.sin(wn)*52,Fn.y+290+ln*1.35+ba*28,Fn.z-130-Be*1.3+Math.cos(wn)*30),de.position.set(Fn.x-470-Be*.82-Math.sin(wn)*16,Fn.y+35+ln*.22+ba*10,Fn.z+360+Be*.6-Math.cos(wn)*12);const aa=xs.clone().sub(Fn).applyQuaternion(new Ks().setFromEuler(new Qi(ba,wn,0,"YXZ"))),es=bn.clamp(aa.length()+ta,260,860);aa.setLength(es);const Ta=Fn.clone().add(aa).add(new j(Be,ln*.84,Be*.58)),Aa=na.clone().add(new j(Be*.11,ln*.095,Be*.085)),Pt=new Ks;if(Ie>.01){Rt(Ie>.26),dt.fog instanceof Yc&&(dt.fog.near=bn.lerp(38,9999,Ie),dt.fog.far=bn.lerp(230,1e4,Ie));const _e=new ue(987671),tn=new ue(132106);dt.background.copy(_e).lerp(tn,Ie),Gt.intensity=bn.lerp(.05,.002,Ie),le.intensity=bn.lerp(.08,.007,Ie),Qt.intensity=bn.lerp(0,At?4.6:8.6,Ie),de.intensity=bn.lerp(0,At?.02:.03,Ie),Et.toneMappingExposure=bn.lerp(At?.76:.72,At?.75:.76,Ie),[Oe,Ee].forEach(jn=>{jn.emissive.set(3359829),jn.emissiveIntensity=0}),Oe.envMapIntensity=bn.lerp(.74,.04,Ie),Ee.envMapIntensity=bn.lerp(.08,.01,Ie),Je.color.set(0).lerp(new ue(16777215),Ie),Je.toneMapped=Ie>.5,Je.fog=Ie>.5,Je.emissive.set(16777215),Je.emissiveIntensity=bn.lerp(1,.02,Ie),Je.envMapIntensity=bn.lerp(0,.03,Ie)}else Rt(!1),Gt.intensity=.05,le.intensity=.08,Qt.intensity=0,de.intensity=0,Et.toneMappingExposure=At?.76:.72,dt.background.set(987671),[Oe,Ee].forEach(_e=>{_e.emissive.set(0),_e.emissiveIntensity=0}),Oe.envMapIntensity=.74,Ee.envMapIntensity=.08,Je.color.set(0),Je.toneMapped=!1,Je.fog=!1,Je.emissive.set(16777215),Je.emissiveIntensity=1,Je.envMapIntensity=0;const Nn=He.clone().multiplyScalar(-Nm*.2),wi=kt.clone().add(Nn).add(vi).add(xi),Ra=me.clone().add(Nn).add(vi.multiplyScalar(.22));if(Ie>.99){if(Tt.position.copy(Ta),Tt.lookAt(Aa),Math.abs(Ka)>1e-4){const _e=Aa.clone().sub(Tt.position).normalize();Pt.setFromAxisAngle(_e,Ka),Tt.quaternion.multiply(Pt)}}else if(Ie>.001){Tt.position.lerpVectors(wi,Ta,Ie);const _e=Ra.clone().lerp(Aa,Ie);if(Tt.lookAt(_e),Math.abs(Ka)>1e-4){const tn=_e.clone().sub(Tt.position).normalize();Pt.setFromAxisAngle(tn,Ka*Ie),Tt.quaternion.multiply(Pt)}}else Tt.position.copy(wi),Vl.position.copy(Tt.position),Vl.lookAt(Ra),Tt.quaternion.slerp(Vl.quaternion,1-Math.exp(-8.1*Ct));const ni=.94+Math.sin(Jt*.23)*.06,Ca=me.clone().add(Nn);It.position.copy(Tt.position).add(He.clone().multiplyScalar(2.9)).add($e.clone().multiplyScalar(2.1)).add(We.clone().multiplyScalar(-2.2)),ut.position.copy(Ca).add($e.clone().multiplyScalar(2.5)).add(He.clone().multiplyScalar(-.9)),It.intensity=(At?14:21)*ni,Wt.position.copy(Tt.position).add(He.clone().multiplyScalar(2)).add($e.clone().multiplyScalar(-2.4)).add(We.clone().multiplyScalar(-1.1)),at.position.copy(Ca).add($e.clone().multiplyScalar(-2)).add(He.clone().multiplyScalar(-1.4)),Wt.intensity=(At?5:8)*ni,zt.position.copy(Tt.position).add(He.clone().multiplyScalar(1.4)).add(We.clone().multiplyScalar(2.8)).add($e.clone().multiplyScalar(.6)),tt.position.copy(Ca).add(He.clone().multiplyScalar(-.8)),zt.intensity=(At?4:6.2)*ni,Ke.forEach(_e=>{const tn=_e.userData;if(!tn||!tn.shading||!tn.material)return;const jn=tn.shading,Si=tn.material,Gi=tn.video,Ge=tn;let Es=1;jn.lighting?.flicker_sync&&Gi&&Gi.readyState>=3&&(Es=.88+Math.sin(Jt*22)*.1*Math.sin(Jt*6.7));let sa=1;if(jn.movement_reaction?.type==="viewing_angle_fade"){kl.set(0,0,0),_e.getWorldPosition(kl),ru.set(0,0,1).applyQuaternion(_e.quaternion),ou.copy(Tt.position).sub(kl).normalize();const di=ru,Vi=ou,nr=Math.max(0,di.dot(Vi)),Da=jn.movement_reaction.cone_angle_degrees===60?3:1.5;sa=Math.pow(nr,Da)}const is=tn.baseEmissive*Es*sa;if(Si.emissiveIntensity=is,Ge.bounceLights&&Ge.bounceLights.length>0){const di=Ge.bounceSampleCtx,Vi=Ge.bounceSampleCanvas;if(Gi&&di&&Vi&&(Ge.bounceNextSampleAt??0)<=Jt){const Di=AR(Gi,Vi,di);if(Di){Ge.bounceTargetColor||(Ge.bounceTargetColor=Di.color.clone());const Wr=Di.color.clone().lerp(new ue(1,.97,.93),.18);Ge.bounceTargetColor.copy(Wr);const No=bn.clamp(.22+Di.luminance*1.9,.22,2.25);Ge.bounceTargetIntensity=(Ge.bounceBaseIntensity??5)*No*(.25+is*1.25)}Ge.bounceNextSampleAt=Jt+1/(At?2:4)}else Gi||(Ge.bounceTargetIntensity=(Ge.bounceBaseIntensity??5)*(.22+is*1.1));const nr=Ge.bounceTargetIntensity??0,Da=Ge.bounceCurrentIntensity??0;Ge.bounceCurrentIntensity=bn.lerp(Da,nr,1-Math.exp(-6.2*Ct)),Ge.bounceCurrentColor||(Ge.bounceCurrentColor=(Ge.bounceTargetColor??new ue(1,1,1)).clone()),Ge.bounceTargetColor&&Ge.bounceCurrentColor.lerp(Ge.bounceTargetColor,1-Math.exp(-5.4*Ct)),Ge.bounceLights.forEach((Di,Wr)=>{const No=Math.max(1,Ge.bounceLights.length-1),bs=1-Wr/No*.34;Di.color.copy(Ge.bounceCurrentColor),Di.intensity=(Ge.bounceCurrentIntensity??0)*bs})}}),pe.forEach(({mesh:_e,basePosition:tn,strength:jn})=>{const Si=_e.parent;if(!Si)return;const Gi=Si.worldToLocal(Tt.position.clone()),Ge=bn.clamp(Gi.x*.008,-.18,.18)*jn,Es=bn.clamp(Gi.y*.006,-.14,.14)*jn;_e.position.x=tn.x+Ge,_e.position.y=tn.y+Es}),ui.forEach((_e,tn)=>{const{mesh:jn,card:Si}=_e;jn.lookAt(Tt.position);const Gi=tn*.7,Ge=_e.baseY+Math.sin(Jt*X2+Gi)*k2;jn.position.y=Ge,jn.rotateZ(W2*Ct);const Es=jn.material;Es.emissiveIntensity=1+Math.sin(Jt*2+tn)*.4;const sa=_e.expanded?1:0,is=1/j2;_e.expandT<sa?_e.expandT=Math.min(1,_e.expandT+is*Ct):_e.expandT>sa&&(_e.expandT=Math.max(0,_e.expandT-is*Ct));const di=_e.expandT,Vi=di<.5?4*di*di*di:1-Math.pow(-2*di+2,3)/2;if(Vi>.001){Si.visible=!0,Si.position.copy(jn.position),Si.position.y-=Um+.3,Si.lookAt(Tt.position),Si.scale.setScalar(Vi);const nr=Si.children[0].material;nr.opacity=Vi}else Si.visible=!1;Es.opacity=1-Vi*.4});const wa=Ss.y+Math.sin(Jt*.8)*.35;ia.lookAt(Tt.position),ia.position.y=wa,ia.rotateZ(.15*Ct),Ro.emissiveIntensity=1.2+Math.sin(Jt*1.5)*.5,$a.lookAt(Tt.position),$a.position.y=wa;const ns=.72+Math.sin(Jt*2.35)*.28,yi=bn.smoothstep(Ie,.2,.95);er.visible=yi>.001,kr.visible=yi>.001,er.scale.setScalar(.88+ns*.28),Co.emissiveIntensity=yi*(.48+ns*.45),zl.intensity=yi*(At?4.6:7.4)*ns,kr.lookAt(Tt.position),kr.scale.setScalar(.95+ns*.18),Vr.opacity=yi*(.2+ns*.32);let ii=t.current[0]?.meta.id??(f.length>0?f[0].id:""),gn=Number.POSITIVE_INFINITY;t.current.forEach(_e=>{let tn=Math.abs(ie-_e.progress);tn>.5&&(tn=1-tn),tn<gn&&(gn=tn,ii=_e.meta.id)}),ii!==lu&&(lu=ii,v(ii)),Et.render(dt,Tt),requestAnimationFrame(cu)};cu(),M=()=>{c.current=null,Et.domElement.removeEventListener("pointerdown",Jc),Et.domElement.removeEventListener("pointermove",$c),Et.domElement.removeEventListener("pointerleave",tu),Et.domElement.removeEventListener("pointerup",wo),Et.domElement.removeEventListener("pointercancel",wo),Et.domElement.removeEventListener("contextmenu",Do),Et.domElement.removeEventListener("wheel",eu),Et.domElement.removeEventListener("touchstart",Gl),Et.domElement.removeEventListener("touchmove",iu),window.removeEventListener("resize",au),window.removeEventListener("keydown",nu),K.contains(Et.domElement)&&K.removeChild(Et.domElement),Ke.forEach(Ct=>{const Jt=Ct.userData?.video;Jt&&(Jt.pause(),Jt.src="",Jt.load())}),An.forEach(Ct=>{Ct.pause(),Ct.src="",Ct.load()}),Kt.forEach(Ct=>Ct()),an.forEach(Ct=>Ct.dispose?.()),En.forEach(Ct=>Ct.dispose()),vs.dispose(),Zc.dispose(),ft.albedo.dispose(),ft.normal.dispose(),ft.roughness.dispose(),ft.ao.dispose(),Vt.albedo.dispose(),Vt.normal.dispose(),Vt.roughness.dispose(),Vt.ao.dispose(),re.albedo.dispose(),re.normal.dispose(),re.roughness.dispose(),re.ao.dispose(),Ae.forEach(Ct=>Ct.dispose()),Bt.texture.dispose(),Bt.dispose(),Ht.dispose(),Oe.dispose(),Ee.dispose(),bo.dispose(),Je.dispose(),qe.dispose(),Hi.dispose(),_i.dispose(),Wa.dispose(),ya.dispose(),ms.dispose(),Sa.dispose(),gs.dispose(),Bi.dispose(),Ai.dispose(),Sn.dispose(),_s.dispose(),qa.dispose(),Za.dispose(),Et.dispose()}})(),()=>{w=!0,c.current=null,M()}},[f,ge,nn]),wt.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[wt.jsx("div",{ref:r,className:"absolute inset-0"}),wt.jsx(RR,{}),wt.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[wt.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[wt.jsx("button",{type:"button",onClick:()=>gt("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${J==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":J==="nb",children:"NO"}),wt.jsx("button",{type:"button",onClick:()=>gt("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${J==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":J==="en",children:"EN"})]}),wt.jsx("button",{type:"button",onClick:Yt,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":E,children:E?"get in":"get out"})]}),g||b?wt.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:g?vt.loadingPanels:vt.panelsFallback}):null,E?null:wt.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[wt.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:vt.siteName}),wt.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[vt.activeInstallation,": ",Ue]})]}),E?wt.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[wt.jsx("style",{children:`
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
            `}),C==="menu"?wt.jsxs(wt.Fragment,{children:[wt.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:vt.siteName}),wt.jsx("button",{type:"button",onClick:()=>U("videos"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:wt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:vt.outsideVideos})}),wt.jsx("button",{type:"button",onClick:()=>U("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:wt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:vt.outsideSignatures})}),wt.jsx("button",{type:"button",onClick:()=>U("news"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[3.2rem] translate-y-[5.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[4.4rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:wt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatC 6.9s ease-in-out infinite"},children:vt.outsideAiNews})}),wt.jsx("button",{type:"button",onClick:()=>U("glyphwall"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[1.5rem] -translate-y-[7.9rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[4.8rem] md:-translate-y-[10.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:wt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatD 8.1s ease-in-out infinite"},children:vt.outsideGlyphWall})})]}):null,C!=="menu"?wt.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[wt.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[wt.jsx("button",{type:"button",onClick:()=>U("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:vt.outsideBack}),C==="videos"?wt.jsx(wt.Fragment,{children:wt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:vt.outsideVideosTitle})}):null,C==="signatures"?wt.jsx(wt.Fragment,{children:wt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:vt.outsideSignaturesTitle})}):null,C==="news"?wt.jsxs(wt.Fragment,{children:[wt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:vt.outsideNewsTitle}),wt.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:vt.outsideNewsBody})]}):null,C==="glyphwall"?wt.jsxs(wt.Fragment,{children:[wt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:vt.outsideGlyphWallTitle}),vt.outsideGlyphWallBody?wt.jsx("p",{className:"mt-2 max-w-4xl text-sm leading-relaxed text-[#b8cbe6] md:text-base",children:vt.outsideGlyphWallBody}):null]}):null]}),C==="signatures"?wt.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:wt.jsxs("form",{onSubmit:nt,className:"max-w-2xl rounded-2xl border border-[#8fb5e8]/38 bg-[#0b1629]/82 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-6",children:[wt.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[wt.jsxs("label",{className:"block",children:[wt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:J==="nb"?"Navn":"Name"}),wt.jsx("input",{type:"text",required:!0,autoComplete:"name",value:et,onChange:K=>rt(K.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),wt.jsxs("label",{className:"block",children:[wt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:J==="nb"?"E-post":"Email"}),wt.jsx("input",{type:"email",required:!0,autoComplete:"email",value:ot,onChange:K=>Z(K.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]})]}),wt.jsxs("label",{className:"mt-3 block",children:[wt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:J==="nb"?"Melding":"Message"}),wt.jsx("textarea",{required:!0,rows:5,value:O,onChange:K=>P(K.target.value),className:"mt-1 w-full resize-y rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),wt.jsx("button",{type:"submit",className:"mt-4 rounded-full border border-[#8fb5e8]/55 bg-[#122742]/85 px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e4efff] transition hover:bg-[#17365a]",children:J==="nb"?"Send melding":"Send message"})]})}):null,C==="news"?wt.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[B?wt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:vt.outsideNewsLoading}):null,!B&&T?wt.jsx("p",{className:"text-sm text-[#ffb6b6]",children:T}):null,!B&&!T&&N.length===0?wt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:vt.outsideNewsEmpty}):null,!B&&!T&&N.length>0?wt.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:N.map(K=>{const w=Date.parse(K.published_at),M=Number.isFinite(w)?Ye.format(new Date(w)):K.published_at;return wt.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[wt.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[K.source,M?` · ${M}`:""]}),wt.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:K.title}),K.snippet?wt.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:K.snippet}):null,wt.jsx("a",{href:K.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:J==="nb"?"Åpne sak":"Open story"})]},`${K.url}-${K.title}`)})}):null]}):null,C==="glyphwall"?wt.jsx("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:wt.jsxs("section",{className:"relative h-full overflow-hidden rounded-[1.35rem] border border-[#5d5650]/90 p-3 md:p-4",style:{background:"linear-gradient(160deg,#958d85 0%,#847d76 38%,#756f68 64%,#68625c 100%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.26), inset 0 -26px 48px rgba(25,20,16,0.34), 0 24px 44px rgba(0,0,0,0.4)"},"data-rl-story-version":"rl-story-v1","data-rl-story-name":"replacement-anxiety-pattern",children:[wt.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-55",style:{background:"repeating-linear-gradient(0deg,rgba(0,0,0,0) 0,rgba(0,0,0,0) 48%,rgba(42,35,31,0.28) 48%,rgba(42,35,31,0.28) 49%),repeating-linear-gradient(90deg,rgba(0,0,0,0) 0,rgba(0,0,0,0) 19.6%,rgba(36,31,27,0.24) 19.6%,rgba(36,31,27,0.24) 20.1%),radial-gradient(circle at 18% 22%,rgba(255,255,255,0.08),rgba(255,255,255,0) 44%),radial-gradient(circle at 78% 72%,rgba(0,0,0,0.16),rgba(0,0,0,0) 52%)"}}),wt.jsx("div",{className:"relative h-full overflow-auto pr-1",children:wt.jsx("div",{className:"grid grid-cols-3 gap-2 pb-2 sm:grid-cols-4 md:grid-cols-6 md:gap-3 lg:grid-cols-8 xl:grid-cols-10",children:_t.map(K=>wt.jsxs("article",{className:"relative rounded-[0.8rem] border border-[#696058]/85 p-2 md:p-2.5",style:{background:"linear-gradient(162deg,#a19890 0%,#90877f 47%,#847b74 100%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -12px 20px rgba(43,37,32,0.26), 0 8px 18px rgba(0,0,0,0.22)"},"data-rl-story-index":K.index+1,"data-rl-canonical":K.canonical,"data-rl-id":K.sourceId,children:[wt.jsx("div",{className:"relative overflow-hidden rounded-md border border-[#665d56]/75 p-1.5",style:{background:"linear-gradient(168deg,#8d857e 0%,#7f7770 54%,#746c65 100%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -8px 14px rgba(33,28,24,0.3)"},children:K.previewDataUrl?wt.jsxs("div",{className:"relative h-[7.8rem] w-full overflow-hidden rounded-[0.45rem] bg-[#8a8179]",children:[wt.jsx("img",{src:K.previewDataUrl,alt:K.title,className:"absolute inset-0 h-full w-full object-cover opacity-78 mix-blend-multiply",loading:"lazy"}),wt.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_19%,rgba(255,255,255,0.14),rgba(255,255,255,0)_58%),radial-gradient(circle_at_81%_78%,rgba(0,0,0,0.22),rgba(0,0,0,0)_62%)]"})]}):wt.jsx("div",{className:"h-[7.8rem] w-full rounded-[0.45rem] bg-[#7f766e]"})}),wt.jsx("span",{className:"sr-only",children:K.canonical})]},K.id))})}),wt.jsx("pre",{className:"sr-only","data-rl-story-payload":!0,children:Ot})]})}):null,C==="videos"?wt.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:ce,onTouchStart:xn,onTouchEnd:Ce,children:wt.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[wt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_44%,rgba(80,123,181,0.15),rgba(7,14,25,0.74)_56%,rgba(3,7,14,0.96)_100%)]"}),wt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_90px_rgba(0,0,0,0.66)]"}),wt.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#99bae5]",children:[mt+1," / ",Om.length]}),wt.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9e8ff]/95 shadow-[0_0_18px_rgba(140,185,255,0.72)]"}),wt.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${$2.toFixed(3)}rem) rotateY(${-mt*tR}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[wt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/24",style:{width:`${Bf.toFixed(3)}rem`,height:`${Bf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${Wx.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(150,183,223,0.24) 0%, rgba(58,77,103,0.3) 14%, rgba(19,29,45,0.82) 100%)",boxShadow:"0 0 56px rgba(48,94,156,0.22)"}}),wt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-[#83a9dd]/18",style:{width:`${Bf.toFixed(3)}rem`,height:`${Bf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${Wx.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(22,31,45,0.92) 0%, rgba(24,36,56,0.62) 34%, rgba(117,151,204,0.22) 100%)"}}),Om.map((K,w)=>wt.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-[#89b0e4]/34 bg-[#050b16]/95 shadow-[0_22px_44px_rgba(0,0,0,0.6)]",style:{width:`${(aS+J2).toFixed(3)}rem`,height:`${A0}rem`,transform:`translate(-50%, -50%) rotateY(${w*60}deg) translateZ(-${sS.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:wt.jsx("video",{ref:M=>{l.current[w]=M},src:K.video,poster:K.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${K.video}-${w}`))]})]})}):null]}):null]}):null]})}function wR(){return wt.jsx("div",{className:"min-h-screen bg-[#080604]",children:wt.jsx(CR,{})})}FM.createRoot(document.getElementById("root")).render(wt.jsx(se.StrictMode,{children:wt.jsx(wR,{})}));
