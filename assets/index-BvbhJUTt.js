(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Cm={exports:{}},lu={};var ix;function jM(){if(ix)return lu;ix=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return lu.Fragment=t,lu.jsx=i,lu.jsxs=i,lu}var ax;function ZM(){return ax||(ax=1,Cm.exports=jM()),Cm.exports}var Rt=ZM(),wm={exports:{}},xe={};var sx;function KM(){if(sx)return xe;sx=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(P,j,St){this.props=P,this.context=j,this.refs=M,this.updater=St||E}y.prototype.isReactComponent={},y.prototype.setState=function(P,j){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,j,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=y.prototype;function L(P,j,St){this.props=P,this.context=j,this.refs=M,this.updater=St||E}var D=L.prototype=new C;D.constructor=L,w(D,y.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function z(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(P,j,St){var Ot=St.ref;return{$$typeof:r,type:P,key:j,ref:Ot!==void 0?Ot:null,props:St}}function ht(P,j){return N(P.type,j,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function J(P){var j={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(St){return j[St]})}var et=/\/+/g;function nt(P,j){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):j.toString(36)}function K(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(z,z):(P.status="pending",P.then(function(j){P.status==="pending"&&(P.status="fulfilled",P.value=j)},function(j){P.status==="pending"&&(P.status="rejected",P.reason=j)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function U(P,j,St,Ot,Yt){var at=typeof P;(at==="undefined"||at==="boolean")&&(P=null);var mt=!1;if(P===null)mt=!0;else switch(at){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(P.$$typeof){case r:case t:mt=!0;break;case v:return mt=P._init,U(mt(P._payload),j,St,Ot,Yt)}}if(mt)return Yt=Yt(P),mt=Ot===""?"."+nt(P,0):Ot,I(Yt)?(St="",mt!=null&&(St=mt.replace(et,"$&/")+"/"),U(Yt,j,St,"",function($t){return $t})):Yt!=null&&(G(Yt)&&(Yt=ht(Yt,St+(Yt.key==null||P&&P.key===Yt.key?"":(""+Yt.key).replace(et,"$&/")+"/")+mt)),j.push(Yt)),1;mt=0;var Ut=Ot===""?".":Ot+":";if(I(P))for(var Ft=0;Ft<P.length;Ft++)Ot=P[Ft],at=Ut+nt(Ot,Ft),mt+=U(Ot,j,St,at,Yt);else if(Ft=x(P),typeof Ft=="function")for(P=Ft.call(P),Ft=0;!(Ot=P.next()).done;)Ot=Ot.value,at=Ut+nt(Ot,Ft++),mt+=U(Ot,j,St,at,Yt);else if(at==="object"){if(typeof P.then=="function")return U(K(P),j,St,Ot,Yt);throw j=String(P),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return mt}function B(P,j,St){if(P==null)return P;var Ot=[],Yt=0;return U(P,Ot,"","",function(at){return j.call(St,at,Yt++)}),Ot}function ut(P){if(P._status===-1){var j=P._result;j=j(),j.then(function(St){(P._status===0||P._status===-1)&&(P._status=1,P._result=St)},function(St){(P._status===0||P._status===-1)&&(P._status=2,P._result=St)}),P._status===-1&&(P._status=0,P._result=j)}if(P._status===1)return P._result.default;throw P._result}var vt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Nt={map:B,forEach:function(P,j,St){B(P,function(){j.apply(this,arguments)},St)},count:function(P){var j=0;return B(P,function(){j++}),j},toArray:function(P){return B(P,function(j){return j})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return xe.Activity=_,xe.Children=Nt,xe.Component=y,xe.Fragment=i,xe.Profiler=l,xe.PureComponent=L,xe.StrictMode=s,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,xe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},xe.cache=function(P){return function(){return P.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(P,j,St){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ot=w({},P.props),Yt=P.key;if(j!=null)for(at in j.key!==void 0&&(Yt=""+j.key),j)!T.call(j,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&j.ref===void 0||(Ot[at]=j[at]);var at=arguments.length-2;if(at===1)Ot.children=St;else if(1<at){for(var mt=Array(at),Ut=0;Ut<at;Ut++)mt[Ut]=arguments[Ut+2];Ot.children=mt}return N(P.type,Yt,Ot)},xe.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},xe.createElement=function(P,j,St){var Ot,Yt={},at=null;if(j!=null)for(Ot in j.key!==void 0&&(at=""+j.key),j)T.call(j,Ot)&&Ot!=="key"&&Ot!=="__self"&&Ot!=="__source"&&(Yt[Ot]=j[Ot]);var mt=arguments.length-2;if(mt===1)Yt.children=St;else if(1<mt){for(var Ut=Array(mt),Ft=0;Ft<mt;Ft++)Ut[Ft]=arguments[Ft+2];Yt.children=Ut}if(P&&P.defaultProps)for(Ot in mt=P.defaultProps,mt)Yt[Ot]===void 0&&(Yt[Ot]=mt[Ot]);return N(P,at,Yt)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(P){return{$$typeof:h,render:P}},xe.isValidElement=G,xe.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:ut}},xe.memo=function(P,j){return{$$typeof:p,type:P,compare:j===void 0?null:j}},xe.startTransition=function(P){var j=F.T,St={};F.T=St;try{var Ot=P(),Yt=F.S;Yt!==null&&Yt(St,Ot),typeof Ot=="object"&&Ot!==null&&typeof Ot.then=="function"&&Ot.then(z,vt)}catch(at){vt(at)}finally{j!==null&&St.types!==null&&(j.types=St.types),F.T=j}},xe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},xe.use=function(P){return F.H.use(P)},xe.useActionState=function(P,j,St){return F.H.useActionState(P,j,St)},xe.useCallback=function(P,j){return F.H.useCallback(P,j)},xe.useContext=function(P){return F.H.useContext(P)},xe.useDebugValue=function(){},xe.useDeferredValue=function(P,j){return F.H.useDeferredValue(P,j)},xe.useEffect=function(P,j){return F.H.useEffect(P,j)},xe.useEffectEvent=function(P){return F.H.useEffectEvent(P)},xe.useId=function(){return F.H.useId()},xe.useImperativeHandle=function(P,j,St){return F.H.useImperativeHandle(P,j,St)},xe.useInsertionEffect=function(P,j){return F.H.useInsertionEffect(P,j)},xe.useLayoutEffect=function(P,j){return F.H.useLayoutEffect(P,j)},xe.useMemo=function(P,j){return F.H.useMemo(P,j)},xe.useOptimistic=function(P,j){return F.H.useOptimistic(P,j)},xe.useReducer=function(P,j,St){return F.H.useReducer(P,j,St)},xe.useRef=function(P){return F.H.useRef(P)},xe.useState=function(P){return F.H.useState(P)},xe.useSyncExternalStore=function(P,j,St){return F.H.useSyncExternalStore(P,j,St)},xe.useTransition=function(){return F.H.useTransition()},xe.version="19.2.4",xe}var rx;function O0(){return rx||(rx=1,wm.exports=KM()),wm.exports}var jt=O0(),Dm={exports:{}},cu={},Nm={exports:{}},Lm={};var ox;function QM(){return ox||(ox=1,(function(r){function t(U,B){var ut=U.length;U.push(B);t:for(;0<ut;){var vt=ut-1>>>1,Nt=U[vt];if(0<l(Nt,B))U[vt]=B,U[ut]=Nt,ut=vt;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var B=U[0],ut=U.pop();if(ut!==B){U[0]=ut;t:for(var vt=0,Nt=U.length,P=Nt>>>1;vt<P;){var j=2*(vt+1)-1,St=U[j],Ot=j+1,Yt=U[Ot];if(0>l(St,ut))Ot<Nt&&0>l(Yt,St)?(U[vt]=Yt,U[Ot]=ut,vt=Ot):(U[vt]=St,U[j]=ut,vt=j);else if(Ot<Nt&&0>l(Yt,ut))U[vt]=Yt,U[Ot]=ut,vt=Ot;else break t}}return B}function l(U,B){var ut=U.sortIndex-B.sortIndex;return ut!==0?ut:U.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,_=null,g=3,x=!1,E=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(U){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=U)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function I(U){if(w=!1,D(U),!E)if(i(m)!==null)E=!0,z||(z=!0,J());else{var B=i(p);B!==null&&K(I,B.startTime-U)}}var z=!1,F=-1,T=5,N=-1;function ht(){return M?!0:!(r.unstable_now()-N<T)}function G(){if(M=!1,z){var U=r.unstable_now();N=U;var B=!0;try{t:{E=!1,w&&(w=!1,C(F),F=-1),x=!0;var ut=g;try{e:{for(D(U),_=i(m);_!==null&&!(_.expirationTime>U&&ht());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,g=_.priorityLevel;var Nt=vt(_.expirationTime<=U);if(U=r.unstable_now(),typeof Nt=="function"){_.callback=Nt,D(U),B=!0;break e}_===i(m)&&s(m),D(U)}else s(m);_=i(m)}if(_!==null)B=!0;else{var P=i(p);P!==null&&K(I,P.startTime-U),B=!1}}break t}finally{_=null,g=ut,x=!1}B=void 0}}finally{B?J():z=!1}}}var J;if(typeof L=="function")J=function(){L(G)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,nt=et.port2;et.port1.onmessage=G,J=function(){nt.postMessage(null)}}else J=function(){y(G,0)};function K(U,B){F=y(function(){U(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(U){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var ut=g;g=B;try{return U()}finally{g=ut}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ut=g;g=U;try{return B()}finally{g=ut}},r.unstable_scheduleCallback=function(U,B,ut){var vt=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?vt+ut:vt):ut=vt,U){case 1:var Nt=-1;break;case 2:Nt=250;break;case 5:Nt=1073741823;break;case 4:Nt=1e4;break;default:Nt=5e3}return Nt=ut+Nt,U={id:v++,callback:B,priorityLevel:U,startTime:ut,expirationTime:Nt,sortIndex:-1},ut>vt?(U.sortIndex=ut,t(p,U),i(m)===null&&U===i(p)&&(w?(C(F),F=-1):w=!0,K(I,ut-vt))):(U.sortIndex=Nt,t(m,U),E||x||(E=!0,z||(z=!0,J()))),U},r.unstable_shouldYield=ht,r.unstable_wrapCallback=function(U){var B=g;return function(){var ut=g;g=B;try{return U.apply(this,arguments)}finally{g=ut}}}})(Lm)),Lm}var lx;function JM(){return lx||(lx=1,Nm.exports=QM()),Nm.exports}var Um={exports:{}},Ii={};var cx;function $M(){if(cx)return Ii;cx=1;var r=O0();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ii.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ii.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Ii.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},Ii.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ii.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ii.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:x}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ii.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ii.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ii.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ii.requestFormReset=function(m){s.d.r(m)},Ii.unstable_batchedUpdates=function(m,p){return m(p)},Ii.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Ii.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ii.version="19.2.4",Ii}var ux;function tE(){if(ux)return Um.exports;ux=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Um.exports=$M(),Um.exports}var fx;function eE(){if(fx)return cu;fx=1;var r=JM(),t=O0(),i=tE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=d;break}if(A===o){S=!0,o=u,a=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===a){S=!0,a=d,o=u;break}if(A===o){S=!0,o=d,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:nt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return nt(e(n))}catch{}}return null}var K=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},vt=[],Nt=-1;function P(e){return{current:e}}function j(e){0>Nt||(e.current=vt[Nt],vt[Nt]=null,Nt--)}function St(e,n){Nt++,vt[Nt]=e.current,e.current=n}var Ot=P(null),Yt=P(null),at=P(null),mt=P(null);function Ut(e,n){switch(St(at,n),St(Yt,e),St(Ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Av(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Av(n),e=Rv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Ot),St(Ot,e)}function Ft(){j(Ot),j(Yt),j(at)}function $t(e){e.memoizedState!==null&&St(mt,e);var n=Ot.current,a=Rv(n,e.type);n!==a&&(St(Yt,e),St(Ot,a))}function re(e){Yt.current===e&&(j(Ot),j(Yt)),mt.current===e&&(j(mt),au._currentValue=ut)}var Rn,Ue;function we(e){if(Rn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rn=n&&n[1]||"",Ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rn+e+Ue}var je=!1;function me(e,n){if(!e||je)return"";je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var At=function(){throw Error()};if(Object.defineProperty(At.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(At,[])}catch(_t){var lt=_t}Reflect.construct(e,[],At)}else{try{At.call()}catch(_t){lt=_t}e.call(At.prototype)}}else{try{throw Error()}catch(_t){lt=_t}(At=e())&&typeof At.catch=="function"&&At.catch(function(){})}}catch(_t){if(_t&&lt&&typeof _t.stack=="string")return[_t.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var V=S.split(`
`),ot=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ot.length)for(o=V.length-1,u=ot.length-1;1<=o&&0<=u&&V[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ot[u]){var Et=`
`+V[o].replace(" at new "," at ");return e.displayName&&Et.includes("<anonymous>")&&(Et=Et.replace("<anonymous>",e.displayName)),Et}while(1<=o&&0<=u);break}}}finally{je=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?we(a):""}function En(e,n){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we("Lazy");case 13:return e.child!==n&&n!==null?we("Suspense Fallback"):we("Suspense");case 19:return we("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return we("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=En(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var cn=Object.prototype.hasOwnProperty,Oe=r.unstable_scheduleCallback,ke=r.unstable_cancelCallback,ee=r.unstable_shouldYield,O=r.unstable_requestPaint,b=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,yt=r.unstable_ImmediatePriority,Ct=r.unstable_UserBlockingPriority,xt=r.unstable_NormalPriority,Jt=r.unstable_LowPriority,It=r.unstable_IdlePriority,oe=r.log,ue=r.unstable_setDisableYieldValue,H=null,st=null;function Mt(e){if(typeof oe=="function"&&ue(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(H,e)}catch{}}var wt=Math.clz32?Math.clz32:X,Tt=Math.log,Kt=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Tt(e)/Kt|0)|0}var pt=256,Dt=262144,gt=4194304;function ft(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Q(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=ft(o):(S&=A,S!==0?u=ft(S):a||(a=A&~e,a!==0&&(u=ft(a))))):(A=o&~d,A!==0?u=ft(A):S!==0?u=ft(S):a||(a=o&~e,a!==0&&(u=ft(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),e}function De(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bn(e,n,a,o,u,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,ot=e.hiddenUpdates;for(a=S&~a;0<a;){var Et=31-wt(a),At=1<<Et;A[Et]=0,V[Et]=-1;var lt=ot[Et];if(lt!==null)for(ot[Et]=null,Et=0;Et<lt.length;Et++){var _t=lt[Et];_t!==null&&(_t.lane&=-536870913)}a&=~At}o!==0&&ms(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function ms(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Vn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-wt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Qa(e,n){var a=n&-n;return a=(a&42)!==0?1:Kn(a),(a&(e.suspendedLanes|n))!==0?0:a}function Kn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tn(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Kv(e.type))}function Gi(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var ai=Math.random().toString(36).slice(2),gn="__reactFiber$"+ai,_n="__reactProps$"+ai,wn="__reactContainer$"+ai,gs="__reactEvents$"+ai,Os="__reactListeners$"+ai,Is="__reactHandles$"+ai,Ps="__reactResources$"+ai,Oa="__reactMarker$"+ai;function ur(e){delete e[gn],delete e[_n],delete e[gs],delete e[Os],delete e[Is]}function Ja(e){var n=e[gn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[wn]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ov(e);e!==null;){if(a=e[gn])return a;e=Ov(e)}return n}e=a,a=e.parentNode}return null}function $a(e){if(e=e[gn]||e[wn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function _s(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[Ps];return n||(n=e[Ps]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Oa]=!0}var dt=new Set,it={};function tt(e,n){Ht(e,n),Ht(e+"Capture",n)}function Ht(e,n){for(it[e]=n,e=0;e<n.length;e++)dt.add(n[e])}var qt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Qt={};function ne(e){return cn.call(Qt,e)?!0:cn.call(Vt,e)?!1:qt.test(e)?Qt[e]=!0:(Vt[e]=!0,!1)}function de(e,n,a){if(ne(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function _e(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ze(e){if(!e._valueTracker){var n=vn(e)?"checked":"value";e._valueTracker=un(e,n,""+e[n])}}function Pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=vn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qn=/[\n"\\]/g;function he(e){return e.replace(Qn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function fi(e,n,a,o,u,d,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ve(n)):e.value!==""+ve(n)&&(e.value=""+ve(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?nn(e,S,ve(n)):a!=null?nn(e,S,ve(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ve(A):e.removeAttribute("name")}function Mi(e,n,a,o,u,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){ze(e);return}a=a!=null?""+ve(a):"",n=n!=null?""+ve(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),ze(e)}function nn(e,n,a){n==="number"&&Xt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function di(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ve(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function tn(e,n,a){if(n!=null&&(n=""+ve(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ve(a):""}function Fn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ve(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),ze(e)}function Dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||yn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ri(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&kn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&kn(e,d,n[d])}function vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ji(e){return Zh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ia(){}var lc=null;function cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fr=null,dr=null;function zu(e){var n=$a(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));fi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Pn(o)}break t;case"textarea":tn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&di(e,!!a.multiple,n,!1)}}}var uc=!1;function fc(e,n,a){if(uc)return e(n,a);uc=!0;try{var o=e(n);return o}finally{if(uc=!1,(fr!==null||dr!==null)&&(Df(),fr&&(n=fr,e=dr,dr=fr=null,zu(n),e)))for(n=0;n<e.length;n++)zu(e[n])}}function io(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vo=!1;if(Ci)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Vo=!1}var fn=null,Vi=null,Bn=null;function ki(){if(Bn)return Bn;var e,n=Vi,a=n.length,o,u="value"in fn?fn.value:fn.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return Bn=u.slice(e,1<o?1-o:void 0)}function es(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function la(){return!0}function dc(){return!1}function Xn(e){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?la:dc,this.isPropagationStopped=dc,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),n}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pr=Xn(ns),Fs=_({},ns,{view:0,detail:0}),wi=Xn(Fs),ca,Pa,ua,is=_({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ua&&(ua&&e.type==="mousemove"?(ca=e.screenX-ua.screenX,Pa=e.screenY-ua.screenY):Pa=ca=0,ua=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:Pa}}),xs=Xn(is),ko=_({},is,{dataTransfer:0}),Xo=Xn(ko),fa=_({},Fs,{relatedTarget:0}),Fa=Xn(fa),Hu=_({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Gu=Xn(Hu),mr=_({},ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hc=Xn(mr),Ss=_({},ns,{data:0}),da=Xn(Ss),Vu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ku={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ei(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wo[e])?!!n[e]:!1}function ao(){return Ei}var Kh=_({},Fs,{key:function(e){if(e.key){var n=Vu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ku[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xu=Xn(Kh),pc=_({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),so=Xn(pc),Qh=_({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),mc=Xn(Qh),gc=_({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wu=Xn(gc),Yu=_({},is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yo=Xn(Yu),gr=_({},ns,{newState:0,oldState:0}),Jh=Xn(gr),$h=[9,13,27,32],ys=Ci&&"CompositionEvent"in window,_r=null;Ci&&"documentMode"in document&&(_r=document.documentMode);var qu=Ci&&"TextEvent"in window&&!_r,qo=Ci&&(!ys||_r&&8<_r&&11>=_r),jo=" ",Bs=!1;function _c(e,n){switch(e){case"keyup":return $h.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ba=!1;function vc(e,n){switch(e){case"compositionend":return Zo(n);case"keypress":return n.which!==32?null:(Bs=!0,jo);case"textInput":return e=n.data,e===jo&&Bs?null:e;default:return null}}function ro(e,n){if(Ba)return e==="compositionend"||!ys&&_c(e,n)?(e=ki(),Bn=Vi=fn=null,Ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qo&&n.locale!=="ko"?null:n.data;default:return null}}var hi={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ko(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hi[e.type]:n==="textarea"}function xc(e,n,a,o){fr?dr?dr.push(o):dr=[o]:fr=o,n=Ff(n,"onChange"),0<n.length&&(a=new pr("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var vr=null,xr=null;function ju(e){Sv(e,0)}function oo(e){var n=_s(e);if(Pn(n))return e}function Sc(e,n){if(e==="change")return n}var yc=!1;if(Ci){var Sr;if(Ci){var yr="oninput"in document;if(!yr){var Qo=document.createElement("div");Qo.setAttribute("oninput","return;"),yr=typeof Qo.oninput=="function"}Sr=yr}else Sr=!1;yc=Sr&&(!document.documentMode||9<document.documentMode)}function Jo(){vr&&(vr.detachEvent("onpropertychange",$o),xr=vr=null)}function $o(e){if(e.propertyName==="value"&&oo(xr)){var n=[];xc(n,xr,e,cc(e)),fc(ju,n)}}function Zu(e,n,a){e==="focusin"?(Jo(),vr=n,xr=a,vr.attachEvent("onpropertychange",$o)):e==="focusout"&&Jo()}function Ku(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(xr)}function Ms(e,n){if(e==="click")return oo(n)}function Mc(e,n){if(e==="input"||e==="change")return oo(n)}function Qu(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Di=typeof Object.is=="function"?Object.is:Qu;function ha(e,n){if(Di(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!cn.call(n,u)||!Di(e[u],n[u]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bc(e,n){var a=Ec(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ec(a)}}function tl(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tl(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function el(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xt(e.document)}return n}function nl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ju=Ci&&"documentMode"in document&&11>=document.documentMode,zs=null,Mr=null,Er=null,il=!1;function Tc(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;il||zs==null||zs!==Xt(o)||(o=zs,"selectionStart"in o&&nl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Er&&ha(Er,o)||(Er=o,o=Ff(Mr,"onSelect"),0<o.length&&(n=new pr("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=zs)))}function Zi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var pa={animationend:Zi("Animation","AnimationEnd"),animationiteration:Zi("Animation","AnimationIteration"),animationstart:Zi("Animation","AnimationStart"),transitionrun:Zi("Transition","TransitionRun"),transitionstart:Zi("Transition","TransitionStart"),transitioncancel:Zi("Transition","TransitionCancel"),transitionend:Zi("Transition","TransitionEnd")},al={},Ac={};Ci&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function Es(e){if(al[e])return al[e];if(!pa[e])return e;var n=pa[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ac)return al[e]=n[a];return e}var Rc=Es("animationend"),sl=Es("animationiteration"),Cc=Es("animationstart"),$u=Es("transitionrun"),wc=Es("transitionstart"),tf=Es("transitioncancel"),Dc=Es("transitionend"),ct=new Map,Bt="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bt.push("scrollEnd");function Gt(e,n){ct.set(e,n),tt(n,[e])}var zt=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Lt=[],se=0,ie=0;function He(){for(var e=se,n=ie=se=0;n<e;){var a=Lt[n];Lt[n++]=null;var o=Lt[n];Lt[n++]=null;var u=Lt[n];Lt[n++]=null;var d=Lt[n];if(Lt[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&an(a,u,d)}}function Pe(e,n,a,o){Lt[se++]=e,Lt[se++]=n,Lt[se++]=a,Lt[se++]=o,ie|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Wn(e,n,a,o){return Pe(e,n,a,o),ye(e)}function Nn(e,n){return Pe(e,null,null,n),ye(e)}function an(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-wt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function ye(e){if(50<Qc)throw Qc=0,Jp=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ne={};function We(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,n,a,o){return new We(e,n,a,o)}function ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ln(e,n){var a=e.alternate;return a===null?(a=Qe(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ki(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ga(e,n,a,o,u,d){var S=0;if(o=e,typeof e=="function")ma(e)&&(S=1);else if(typeof e=="string")S=PM(e,a,Ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Qe(31,a,n,u),e.elementType=N,e.lanes=d,e;case w:return Pt(a.children,u,d,n);case M:S=8,u|=24;break;case y:return e=Qe(12,a,n,u|2),e.elementType=y,e.lanes=d,e;case I:return e=Qe(13,a,n,u),e.elementType=I,e.lanes=d,e;case z:return e=Qe(19,a,n,u),e.elementType=z,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break t;case C:S=9;break t;case D:S=11;break t;case F:S=14;break t;case T:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qe(S,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Pt(e,n,a,o){return e=Qe(7,e,o,n),e.lanes=a,e}function Jn(e,n,a){return e=Qe(6,e,null,n),e.lanes=a,e}function Ni(e){var n=Qe(18,null,null,0);return n.stateNode=e,n}function Qi(e,n,a){return n=Qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var _i=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=_i.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},_i.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var Li=[],za=0,Ji=null,Un=0,On=[],zn=0,_a=null,$i=1,va="";function Ha(e,n){Li[za++]=Un,Li[za++]=Ji,Ji=e,Un=n}function rl(e,n,a){On[zn++]=$i,On[zn++]=va,On[zn++]=_a,_a=e;var o=$i;e=va;var u=32-wt(o)-1;o&=~(1<<u),a+=1;var d=32-wt(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,$i=1<<32-wt(n)+u|a<<u|o,va=d+e}else $i=1<<d|a<<u|o,va=e}function lo(e){e.return!==null&&(Ha(e,1),rl(e,1,0))}function ol(e){for(;e===Ji;)Ji=Li[--za],Li[za]=null,Un=Li[--za],Li[za]=null;for(;e===_a;)_a=On[--zn],On[zn]=null,va=On[--zn],On[zn]=null,$i=On[--zn],On[zn]=null}function br(e,n){On[zn++]=$i,On[zn++]=va,On[zn++]=_a,$i=n.id,va=n.overflow,_a=e}var Hn=null,sn=null,Ie=!1,Se=null,be=!1,ti=Error(s(519));function ei(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ui($n(n,e)),ti}function xa(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[gn]=e,n[_n]=o,a){case"dialog":Be("cancel",n),Be("close",n);break;case"iframe":case"object":case"embed":Be("load",n);break;case"video":case"audio":for(a=0;a<$c.length;a++)Be($c[a],n);break;case"source":Be("error",n);break;case"img":case"image":case"link":Be("error",n),Be("load",n);break;case"details":Be("toggle",n);break;case"input":Be("invalid",n),Mi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Be("invalid",n);break;case"textarea":Be("invalid",n),Fn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||bv(n.textContent,a)?(o.popover!=null&&(Be("beforetoggle",n),Be("toggle",n)),o.onScroll!=null&&Be("scroll",n),o.onScrollEnd!=null&&Be("scrollend",n),o.onClick!=null&&(n.onclick=Ia),n=!0):n=!1,n||ei(e,!0)}function Ze(e){for(Hn=e.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:be=!1;return;case 27:case 3:be=!0;return;default:Hn=Hn.return}}function ta(e){if(e!==Hn)return!1;if(!Ie)return Ze(e),Ie=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hm(e.type,e.memoizedProps)),a=!a),a&&sn&&ei(e),Ze(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=Uv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=Uv(e)}else n===27?(n=sn,Fr(e.type)?(e=vm,vm=null,sn=e):sn=n):sn=Hn?Va(e.stateNode.nextSibling):null;return!0}function Sa(){sn=Hn=null,Ie=!1}function bs(){var e=Se;return e!==null&&(aa===null?aa=e:aa.push.apply(aa,e),Se=null),e}function Ui(e){Se===null?Se=[e]:Se.push(e)}var ya=P(null),Ma=null,Ea=null;function Oi(e,n,a){St(ya,n._currentValue),n._currentValue=a}function ba(e){e._currentValue=ya.current,j(ya)}function co(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Nc(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),co(d.return,a,e),o||(S=null);break t}d=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),co(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function ll(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Di(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===mt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(au):e=[au])}u=u.return}e!==null&&Nc(n,e,a,o),n.flags|=262144}function ef(e){for(e=e.firstContext;e!==null;){if(!Di(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function uo(e){Ma=e,Ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bi(e){return cg(Ma,e)}function nf(e,n){return Ma===null&&uo(e),cg(e,n)}function cg(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ea===null){if(e===null)throw Error(s(308));Ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ea=Ea.next=n;return a}var Ly=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Uy=r.unstable_scheduleCallback,Oy=r.unstable_NormalPriority,si={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tp(){return{controller:new Ly,data:new Map,refCount:0}}function Lc(e){e.refCount--,e.refCount===0&&Uy(Oy,function(){e.controller.abort()})}var Uc=null,ep=0,cl=0,ul=null;function Iy(e,n){if(Uc===null){var a=Uc=[];ep=0,cl=am(),ul={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ep++,n.then(ug,ug),n}function ug(){if(--ep===0&&Uc!==null){ul!==null&&(ul.status="fulfilled");var e=Uc;Uc=null,cl=0,ul=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Py(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fg=U.S;U.S=function(e,n){j_=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Iy(e,n),fg!==null&&fg(e,n)};var fo=P(null);function np(){var e=fo.current;return e!==null?e:xn.pooledCache}function af(e,n){n===null?St(fo,fo.current):St(fo,n.pool)}function dg(){var e=np();return e===null?null:{parent:si._currentValue,pool:e}}var fl=Error(s(460)),ip=Error(s(474)),sf=Error(s(542)),rf={then:function(){}};function hg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ia,Ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gg(e),e;default:if(typeof n.status=="string")n.then(Ia,Ia);else{if(e=xn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gg(e),e}throw po=n,fl}}function ho(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(po=a,fl):a}}var po=null;function mg(){if(po===null)throw Error(s(459));var e=po;return po=null,e}function gg(e){if(e===fl||e===sf)throw Error(s(483))}var dl=null,Oc=0;function of(e){var n=Oc;return Oc+=1,dl===null&&(dl=[]),pg(dl,e,n)}function Ic(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function lf(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _g(e){function n($,W){if(e){var rt=$.deletions;rt===null?($.deletions=[W],$.flags|=16):rt.push(W)}}function a($,W){if(!e)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=Ln($,W),$.index=0,$.sibling=null,$}function d($,W,rt){return $.index=rt,e?(rt=$.alternate,rt!==null?(rt=rt.index,rt<W?($.flags|=67108866,W):rt):($.flags|=67108866,W)):($.flags|=1048576,W)}function S($){return e&&$.alternate===null&&($.flags|=67108866),$}function A($,W,rt,bt){return W===null||W.tag!==6?(W=Jn(rt,$.mode,bt),W.return=$,W):(W=u(W,rt),W.return=$,W)}function V($,W,rt,bt){var le=rt.type;return le===w?Et($,W,rt.props.children,bt,rt.key):W!==null&&(W.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===T&&ho(le)===W.type)?(W=u(W,rt.props),Ic(W,rt),W.return=$,W):(W=ga(rt.type,rt.key,rt.props,null,$.mode,bt),Ic(W,rt),W.return=$,W)}function ot($,W,rt,bt){return W===null||W.tag!==4||W.stateNode.containerInfo!==rt.containerInfo||W.stateNode.implementation!==rt.implementation?(W=Qi(rt,$.mode,bt),W.return=$,W):(W=u(W,rt.children||[]),W.return=$,W)}function Et($,W,rt,bt,le){return W===null||W.tag!==7?(W=Pt(rt,$.mode,bt,le),W.return=$,W):(W=u(W,rt),W.return=$,W)}function At($,W,rt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Jn(""+W,$.mode,rt),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return rt=ga(W.type,W.key,W.props,null,$.mode,rt),Ic(rt,W),rt.return=$,rt;case E:return W=Qi(W,$.mode,rt),W.return=$,W;case T:return W=ho(W),At($,W,rt)}if(K(W)||J(W))return W=Pt(W,$.mode,rt,null),W.return=$,W;if(typeof W.then=="function")return At($,of(W),rt);if(W.$$typeof===L)return At($,nf($,W),rt);lf($,W)}return null}function lt($,W,rt,bt){var le=W!==null?W.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return le!==null?null:A($,W,""+rt,bt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case x:return rt.key===le?V($,W,rt,bt):null;case E:return rt.key===le?ot($,W,rt,bt):null;case T:return rt=ho(rt),lt($,W,rt,bt)}if(K(rt)||J(rt))return le!==null?null:Et($,W,rt,bt,null);if(typeof rt.then=="function")return lt($,W,of(rt),bt);if(rt.$$typeof===L)return lt($,W,nf($,rt),bt);lf($,rt)}return null}function _t($,W,rt,bt,le){if(typeof bt=="string"&&bt!==""||typeof bt=="number"||typeof bt=="bigint")return $=$.get(rt)||null,A(W,$,""+bt,le);if(typeof bt=="object"&&bt!==null){switch(bt.$$typeof){case x:return $=$.get(bt.key===null?rt:bt.key)||null,V(W,$,bt,le);case E:return $=$.get(bt.key===null?rt:bt.key)||null,ot(W,$,bt,le);case T:return bt=ho(bt),_t($,W,rt,bt,le)}if(K(bt)||J(bt))return $=$.get(rt)||null,Et(W,$,bt,le,null);if(typeof bt.then=="function")return _t($,W,rt,of(bt),le);if(bt.$$typeof===L)return _t($,W,rt,nf(W,bt),le);lf(W,bt)}return null}function te($,W,rt,bt){for(var le=null,Je=null,ae=W,Te=W=0,Ve=null;ae!==null&&Te<rt.length;Te++){ae.index>Te?(Ve=ae,ae=null):Ve=ae.sibling;var $e=lt($,ae,rt[Te],bt);if($e===null){ae===null&&(ae=Ve);break}e&&ae&&$e.alternate===null&&n($,ae),W=d($e,W,Te),Je===null?le=$e:Je.sibling=$e,Je=$e,ae=Ve}if(Te===rt.length)return a($,ae),Ie&&Ha($,Te),le;if(ae===null){for(;Te<rt.length;Te++)ae=At($,rt[Te],bt),ae!==null&&(W=d(ae,W,Te),Je===null?le=ae:Je.sibling=ae,Je=ae);return Ie&&Ha($,Te),le}for(ae=o(ae);Te<rt.length;Te++)Ve=_t(ae,$,Te,rt[Te],bt),Ve!==null&&(e&&Ve.alternate!==null&&ae.delete(Ve.key===null?Te:Ve.key),W=d(Ve,W,Te),Je===null?le=Ve:Je.sibling=Ve,Je=Ve);return e&&ae.forEach(function(Vr){return n($,Vr)}),Ie&&Ha($,Te),le}function pe($,W,rt,bt){if(rt==null)throw Error(s(151));for(var le=null,Je=null,ae=W,Te=W=0,Ve=null,$e=rt.next();ae!==null&&!$e.done;Te++,$e=rt.next()){ae.index>Te?(Ve=ae,ae=null):Ve=ae.sibling;var Vr=lt($,ae,$e.value,bt);if(Vr===null){ae===null&&(ae=Ve);break}e&&ae&&Vr.alternate===null&&n($,ae),W=d(Vr,W,Te),Je===null?le=Vr:Je.sibling=Vr,Je=Vr,ae=Ve}if($e.done)return a($,ae),Ie&&Ha($,Te),le;if(ae===null){for(;!$e.done;Te++,$e=rt.next())$e=At($,$e.value,bt),$e!==null&&(W=d($e,W,Te),Je===null?le=$e:Je.sibling=$e,Je=$e);return Ie&&Ha($,Te),le}for(ae=o(ae);!$e.done;Te++,$e=rt.next())$e=_t(ae,$,Te,$e.value,bt),$e!==null&&(e&&$e.alternate!==null&&ae.delete($e.key===null?Te:$e.key),W=d($e,W,Te),Je===null?le=$e:Je.sibling=$e,Je=$e);return e&&ae.forEach(function(qM){return n($,qM)}),Ie&&Ha($,Te),le}function pn($,W,rt,bt){if(typeof rt=="object"&&rt!==null&&rt.type===w&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case x:t:{for(var le=rt.key;W!==null;){if(W.key===le){if(le=rt.type,le===w){if(W.tag===7){a($,W.sibling),bt=u(W,rt.props.children),bt.return=$,$=bt;break t}}else if(W.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===T&&ho(le)===W.type){a($,W.sibling),bt=u(W,rt.props),Ic(bt,rt),bt.return=$,$=bt;break t}a($,W);break}else n($,W);W=W.sibling}rt.type===w?(bt=Pt(rt.props.children,$.mode,bt,rt.key),bt.return=$,$=bt):(bt=ga(rt.type,rt.key,rt.props,null,$.mode,bt),Ic(bt,rt),bt.return=$,$=bt)}return S($);case E:t:{for(le=rt.key;W!==null;){if(W.key===le)if(W.tag===4&&W.stateNode.containerInfo===rt.containerInfo&&W.stateNode.implementation===rt.implementation){a($,W.sibling),bt=u(W,rt.children||[]),bt.return=$,$=bt;break t}else{a($,W);break}else n($,W);W=W.sibling}bt=Qi(rt,$.mode,bt),bt.return=$,$=bt}return S($);case T:return rt=ho(rt),pn($,W,rt,bt)}if(K(rt))return te($,W,rt,bt);if(J(rt)){if(le=J(rt),typeof le!="function")throw Error(s(150));return rt=le.call(rt),pe($,W,rt,bt)}if(typeof rt.then=="function")return pn($,W,of(rt),bt);if(rt.$$typeof===L)return pn($,W,nf($,rt),bt);lf($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,W!==null&&W.tag===6?(a($,W.sibling),bt=u(W,rt),bt.return=$,$=bt):(a($,W),bt=Jn(rt,$.mode,bt),bt.return=$,$=bt),S($)):a($,W)}return function($,W,rt,bt){try{Oc=0;var le=pn($,W,rt,bt);return dl=null,le}catch(ae){if(ae===fl||ae===sf)throw ae;var Je=Qe(29,ae,null,$.mode);return Je.lanes=bt,Je.return=$,Je}}}var mo=_g(!0),vg=_g(!1),Tr=!1;function ap(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(en&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ye(e),an(e,null,a),n}return Pe(e,o,n,a),ye(e)}function Pc(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vn(e,a)}}function rp(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var op=!1;function Fc(){if(op){var e=ul;if(e!==null)throw e}}function Bc(e,n,a,o){op=!1;var u=e.updateQueue;Tr=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,ot=V.next;V.next=null,S===null?d=ot:S.next=ot,S=V;var Et=e.alternate;Et!==null&&(Et=Et.updateQueue,A=Et.lastBaseUpdate,A!==S&&(A===null?Et.firstBaseUpdate=ot:A.next=ot,Et.lastBaseUpdate=V))}if(d!==null){var At=u.baseState;S=0,Et=ot=V=null,A=d;do{var lt=A.lane&-536870913,_t=lt!==A.lane;if(_t?(Ge&lt)===lt:(o&lt)===lt){lt!==0&&lt===cl&&(op=!0),Et!==null&&(Et=Et.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var te=e,pe=A;lt=n;var pn=a;switch(pe.tag){case 1:if(te=pe.payload,typeof te=="function"){At=te.call(pn,At,lt);break t}At=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=pe.payload,lt=typeof te=="function"?te.call(pn,At,lt):te,lt==null)break t;At=_({},At,lt);break t;case 2:Tr=!0}}lt=A.callback,lt!==null&&(e.flags|=64,_t&&(e.flags|=8192),_t=u.callbacks,_t===null?u.callbacks=[lt]:_t.push(lt))}else _t={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Et===null?(ot=Et=_t,V=At):Et=Et.next=_t,S|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;_t=A,A=_t.next,_t.next=null,u.lastBaseUpdate=_t,u.shared.pending=null}}while(!0);Et===null&&(V=At),u.baseState=V,u.firstBaseUpdate=ot,u.lastBaseUpdate=Et,d===null&&(u.shared.lanes=0),Lr|=S,e.lanes=S,e.memoizedState=At}}function xg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Sg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xg(a[e],n)}var hl=P(null),cf=P(0);function yg(e,n){e=js,St(cf,e),St(hl,n),js=e|n.baseLanes}function lp(){St(cf,js),St(hl,hl.current)}function cp(){js=cf.current,j(hl),j(cf)}var Ta=P(null),Ga=null;function Cr(e){var n=e.alternate;St(ni,ni.current&1),St(Ta,e),Ga===null&&(n===null||hl.current!==null||n.memoizedState!==null)&&(Ga=e)}function up(e){St(ni,ni.current),St(Ta,e),Ga===null&&(Ga=e)}function Mg(e){e.tag===22?(St(ni,ni.current),St(Ta,e),Ga===null&&(Ga=e)):wr()}function wr(){St(ni,ni.current),St(Ta,Ta.current)}function Aa(e){j(Ta),Ga===e&&(Ga=null),j(ni)}var ni=P(0);function uf(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||gm(a)||_m(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hs=0,Me=null,dn=null,ri=null,ff=!1,pl=!1,go=!1,df=0,zc=0,ml=null,Fy=0;function Yn(){throw Error(s(321))}function fp(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Di(e[a],n[a]))return!1;return!0}function dp(e,n,a,o,u,d){return Hs=d,Me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?s_:Rp,go=!1,d=a(o,u),go=!1,pl&&(d=bg(n,a,o,u)),Eg(e),d}function Eg(e){U.H=Vc;var n=dn!==null&&dn.next!==null;if(Hs=0,ri=dn=Me=null,ff=!1,zc=0,ml=null,n)throw Error(s(300));e===null||oi||(e=e.dependencies,e!==null&&ef(e)&&(oi=!0))}function bg(e,n,a,o){Me=e;var u=0;do{if(pl&&(ml=null),zc=0,pl=!1,25<=u)throw Error(s(301));if(u+=1,ri=dn=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=r_,d=n(a,o)}while(pl);return d}function By(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Hc(n):n,e=e.useState()[0],(dn!==null?dn.memoizedState:null)!==e&&(Me.flags|=1024),n}function hp(){var e=df!==0;return df=0,e}function pp(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function mp(e){if(ff){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ff=!1}Hs=0,ri=dn=Me=null,pl=!1,zc=df=0,ml=null}function Xi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ri===null?Me.memoizedState=ri=e:ri=ri.next=e,ri}function ii(){if(dn===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=dn.next;var n=ri===null?Me.memoizedState:ri.next;if(n!==null)ri=n,dn=e;else{if(e===null)throw Me.alternate===null?Error(s(467)):Error(s(310));dn=e,e={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},ri===null?Me.memoizedState=ri=e:ri=ri.next=e}return ri}function hf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hc(e){var n=zc;return zc+=1,ml===null&&(ml=[]),e=pg(ml,e,n),n=Me,(ri===null?n.memoizedState:ri.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?s_:Rp),e}function pf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hc(e);if(e.$$typeof===L)return bi(e)}throw Error(s(438,String(e)))}function gp(e){var n=null,a=Me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hf(),Me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ht;return n.index++,a}function Gs(e,n){return typeof n=="function"?n(e):n}function mf(e){var n=ii();return _p(n,dn,e)}function _p(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=S=null,V=null,ot=n,Et=!1;do{var At=ot.lane&-536870913;if(At!==ot.lane?(Ge&At)===At:(Hs&At)===At){var lt=ot.revertLane;if(lt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),At===cl&&(Et=!0);else if((Hs&lt)===lt){ot=ot.next,lt===cl&&(Et=!0);continue}else At={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(A=V=At,S=d):V=V.next=At,Me.lanes|=lt,Lr|=lt;At=ot.action,go&&a(d,At),d=ot.hasEagerState?ot.eagerState:a(d,At)}else lt={lane:At,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(A=V=lt,S=d):V=V.next=lt,Me.lanes|=At,Lr|=At;ot=ot.next}while(ot!==null&&ot!==n);if(V===null?S=d:V.next=A,!Di(d,e.memoizedState)&&(oi=!0,Et&&(a=ul,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function vp(e){var n=ii(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);Di(d,n.memoizedState)||(oi=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Tg(e,n,a){var o=Me,u=ii(),d=Ie;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Di((dn||u).memoizedState,a);if(S&&(u.memoizedState=a,oi=!0),u=u.queue,yp(Cg.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||ri!==null&&ri.memoizedState.tag&1){if(o.flags|=2048,gl(9,{destroy:void 0},Rg.bind(null,o,u,a,n),null),xn===null)throw Error(s(349));d||(Hs&127)!==0||Ag(o,n,a)}return a}function Ag(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Me.updateQueue,n===null?(n=hf(),Me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Rg(e,n,a,o){n.value=a,n.getSnapshot=o,wg(n)&&Dg(e)}function Cg(e,n,a){return a(function(){wg(n)&&Dg(e)})}function wg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Di(e,a)}catch{return!0}}function Dg(e){var n=Nn(e,2);n!==null&&sa(n,e,2)}function xp(e){var n=Xi();if(typeof e=="function"){var a=e;if(e=a(),go){Mt(!0);try{a()}finally{Mt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:e},n}function Ng(e,n,a,o){return e.baseState=a,_p(e,dn,typeof o=="function"?o:Gs)}function zy(e,n,a,o,u){if(vf(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};U.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Lg(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Lg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=U.T,S={};U.T=S;try{var A=a(u,o),V=U.S;V!==null&&V(S,A),Ug(e,n,A)}catch(ot){Sp(e,n,ot)}finally{d!==null&&S.types!==null&&(d.types=S.types),U.T=d}}else try{d=a(u,o),Ug(e,n,d)}catch(ot){Sp(e,n,ot)}}function Ug(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Og(e,n,o)},function(o){return Sp(e,n,o)}):Og(e,n,a)}function Og(e,n,a){n.status="fulfilled",n.value=a,Ig(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lg(e,a)))}function Sp(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ig(n),n=n.next;while(n!==o)}e.action=null}function Ig(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Pg(e,n){return n}function Fg(e,n){if(Ie){var a=xn.formState;if(a!==null){t:{var o=Me;if(Ie){if(sn){e:{for(var u=sn,d=be;u.nodeType!==8;){if(!d){u=null;break e}if(u=Va(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){sn=Va(u.nextSibling),o=u.data==="F!";break t}}ei(o)}o=!1}o&&(n=a[0])}}return a=Xi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pg,lastRenderedState:n},a.queue=o,a=n_.bind(null,Me,o),o.dispatch=a,o=xp(!1),d=Ap.bind(null,Me,!1,o.queue),o=Xi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=zy.bind(null,Me,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Bg(e){var n=ii();return zg(n,dn,e)}function zg(e,n,a){if(n=_p(e,n,Pg)[0],e=mf(Gs)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Hc(n)}catch(S){throw S===fl?sf:S}else o=n;n=ii();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Me.flags|=2048,gl(9,{destroy:void 0},Hy.bind(null,u,a),null)),[o,d,e]}function Hy(e,n){e.action=n}function Hg(e){var n=ii(),a=dn;if(a!==null)return zg(n,a,e);ii(),n=n.memoizedState,a=ii();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function gl(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Me.updateQueue,n===null&&(n=hf(),Me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Gg(){return ii().memoizedState}function gf(e,n,a,o){var u=Xi();Me.flags|=e,u.memoizedState=gl(1|n,{destroy:void 0},a,o===void 0?null:o)}function _f(e,n,a,o){var u=ii();o=o===void 0?null:o;var d=u.memoizedState.inst;dn!==null&&o!==null&&fp(o,dn.memoizedState.deps)?u.memoizedState=gl(n,d,a,o):(Me.flags|=e,u.memoizedState=gl(1|n,d,a,o))}function Vg(e,n){gf(8390656,8,e,n)}function yp(e,n){_f(2048,8,e,n)}function Gy(e){Me.flags|=4;var n=Me.updateQueue;if(n===null)n=hf(),Me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function kg(e){var n=ii().memoizedState;return Gy({ref:n,nextImpl:e}),function(){if((en&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Xg(e,n){return _f(4,2,e,n)}function Wg(e,n){return _f(4,4,e,n)}function Yg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qg(e,n,a){a=a!=null?a.concat([e]):null,_f(4,4,Yg.bind(null,n,e),a)}function Mp(){}function jg(e,n){var a=ii();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&fp(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Zg(e,n){var a=ii();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&fp(n,o[1]))return o[0];if(o=e(),go){Mt(!0);try{e()}finally{Mt(!1)}}return a.memoizedState=[o,n],o}function Ep(e,n,a){return a===void 0||(Hs&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=K_(),Me.lanes|=e,Lr|=e,a)}function Kg(e,n,a,o){return Di(a,n)?a:hl.current!==null?(e=Ep(e,a,o),Di(e,n)||(oi=!0),e):(Hs&42)===0||(Hs&1073741824)!==0&&(Ge&261930)===0?(oi=!0,e.memoizedState=a):(e=K_(),Me.lanes|=e,Lr|=e,n)}function Qg(e,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var S=U.T,A={};U.T=A,Ap(e,!1,n,a);try{var V=u(),ot=U.S;if(ot!==null&&ot(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Et=Py(V,o);Gc(e,n,Et,wa(e))}else Gc(e,n,o,wa(e))}catch(At){Gc(e,n,{then:function(){},status:"rejected",reason:At},wa())}finally{B.p=d,S!==null&&A.types!==null&&(S.types=A.types),U.T=S}}function Vy(){}function bp(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Jg(e).queue;Qg(e,u,n,ut,a===null?Vy:function(){return $g(e),a(o)})}function Jg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:ut},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $g(e){var n=Jg(e);n.next===null&&(n=e.alternate.memoizedState),Gc(e,n.next.queue,{},wa())}function Tp(){return bi(au)}function t_(){return ii().memoizedState}function e_(){return ii().memoizedState}function ky(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=wa();e=Ar(a);var o=Rr(n,e,a);o!==null&&(sa(o,n,a),Pc(o,n,a)),n={cache:tp()},e.payload=n;return}n=n.return}}function Xy(e,n,a){var o=wa();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vf(e)?i_(n,a):(a=Wn(e,n,a,o),a!==null&&(sa(a,e,o),a_(a,n,o)))}function n_(e,n,a){var o=wa();Gc(e,n,a,o)}function Gc(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vf(e))i_(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,A=d(S,a);if(u.hasEagerState=!0,u.eagerState=A,Di(A,S))return Pe(e,n,u,0),xn===null&&He(),!1}catch{}if(a=Wn(e,n,u,o),a!==null)return sa(a,e,o),a_(a,n,o),!0}return!1}function Ap(e,n,a,o){if(o={lane:2,revertLane:am(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vf(e)){if(n)throw Error(s(479))}else n=Wn(e,a,o,2),n!==null&&sa(n,e,2)}function vf(e){var n=e.alternate;return e===Me||n!==null&&n===Me}function i_(e,n){pl=ff=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function a_(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vn(e,a)}}var Vc={readContext:bi,use:pf,useCallback:Yn,useContext:Yn,useEffect:Yn,useImperativeHandle:Yn,useLayoutEffect:Yn,useInsertionEffect:Yn,useMemo:Yn,useReducer:Yn,useRef:Yn,useState:Yn,useDebugValue:Yn,useDeferredValue:Yn,useTransition:Yn,useSyncExternalStore:Yn,useId:Yn,useHostTransitionStatus:Yn,useFormState:Yn,useActionState:Yn,useOptimistic:Yn,useMemoCache:Yn,useCacheRefresh:Yn};Vc.useEffectEvent=Yn;var s_={readContext:bi,use:pf,useCallback:function(e,n){return Xi().memoizedState=[e,n===void 0?null:n],e},useContext:bi,useEffect:Vg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,gf(4194308,4,Yg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return gf(4194308,4,e,n)},useInsertionEffect:function(e,n){gf(4,2,e,n)},useMemo:function(e,n){var a=Xi();n=n===void 0?null:n;var o=e();if(go){Mt(!0);try{e()}finally{Mt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Xi();if(a!==void 0){var u=a(n);if(go){Mt(!0);try{a(n)}finally{Mt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Xy.bind(null,Me,e),[o.memoizedState,e]},useRef:function(e){var n=Xi();return e={current:e},n.memoizedState=e},useState:function(e){e=xp(e);var n=e.queue,a=n_.bind(null,Me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Mp,useDeferredValue:function(e,n){var a=Xi();return Ep(a,e,n)},useTransition:function(){var e=xp(!1);return e=Qg.bind(null,Me,e.queue,!0,!1),Xi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Me,u=Xi();if(Ie){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),xn===null)throw Error(s(349));(Ge&127)!==0||Ag(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Vg(Cg.bind(null,o,d,e),[e]),o.flags|=2048,gl(9,{destroy:void 0},Rg.bind(null,o,d,a,n),null),a},useId:function(){var e=Xi(),n=xn.identifierPrefix;if(Ie){var a=va,o=$i;a=(o&~(1<<32-wt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=df++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Fy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Tp,useFormState:Fg,useActionState:Fg,useOptimistic:function(e){var n=Xi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ap.bind(null,Me,!0,a),a.dispatch=n,[e,n]},useMemoCache:gp,useCacheRefresh:function(){return Xi().memoizedState=ky.bind(null,Me)},useEffectEvent:function(e){var n=Xi(),a={impl:e};return n.memoizedState=a,function(){if((en&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Rp={readContext:bi,use:pf,useCallback:jg,useContext:bi,useEffect:yp,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:Wg,useMemo:Zg,useReducer:mf,useRef:Gg,useState:function(){return mf(Gs)},useDebugValue:Mp,useDeferredValue:function(e,n){var a=ii();return Kg(a,dn.memoizedState,e,n)},useTransition:function(){var e=mf(Gs)[0],n=ii().memoizedState;return[typeof e=="boolean"?e:Hc(e),n]},useSyncExternalStore:Tg,useId:t_,useHostTransitionStatus:Tp,useFormState:Bg,useActionState:Bg,useOptimistic:function(e,n){var a=ii();return Ng(a,dn,e,n)},useMemoCache:gp,useCacheRefresh:e_};Rp.useEffectEvent=kg;var r_={readContext:bi,use:pf,useCallback:jg,useContext:bi,useEffect:yp,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:Wg,useMemo:Zg,useReducer:vp,useRef:Gg,useState:function(){return vp(Gs)},useDebugValue:Mp,useDeferredValue:function(e,n){var a=ii();return dn===null?Ep(a,e,n):Kg(a,dn.memoizedState,e,n)},useTransition:function(){var e=vp(Gs)[0],n=ii().memoizedState;return[typeof e=="boolean"?e:Hc(e),n]},useSyncExternalStore:Tg,useId:t_,useHostTransitionStatus:Tp,useFormState:Hg,useActionState:Hg,useOptimistic:function(e,n){var a=ii();return dn!==null?Ng(a,dn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:gp,useCacheRefresh:e_};r_.useEffectEvent=kg;function Cp(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var wp={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=wa(),u=Ar(o);u.payload=n,a!=null&&(u.callback=a),n=Rr(e,u,o),n!==null&&(sa(n,e,o),Pc(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=wa(),u=Ar(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Rr(e,u,o),n!==null&&(sa(n,e,o),Pc(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=wa(),o=Ar(a);o.tag=2,n!=null&&(o.callback=n),n=Rr(e,o,a),n!==null&&(sa(n,e,a),Pc(n,e,a))}};function o_(e,n,a,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!ha(a,o)||!ha(u,d):!0}function l_(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&wp.enqueueReplaceState(n,n.state,null)}function _o(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function c_(e){zt(e)}function u_(e){console.error(e)}function f_(e){zt(e)}function xf(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function d_(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Dp(e,n,a){return a=Ar(a),a.tag=3,a.payload={element:null},a.callback=function(){xf(e,n)},a}function h_(e){return e=Ar(e),e.tag=3,e}function p_(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){d_(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){d_(n,a,o),typeof u!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Wy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ll(n,a,u,!0),a=Ta.current,a!==null){switch(a.tag){case 31:case 13:return Ga===null?Nf():a.alternate===null&&qn===0&&(qn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===rf?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),em(e,o,u)),!1;case 22:return a.flags|=65536,o===rf?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),em(e,o,u)),!1}throw Error(s(435,a.tag))}return em(e,o,u),Nf(),!1}if(Ie)return n=Ta.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ti&&(e=Error(s(422),{cause:o}),Ui($n(e,a)))):(o!==ti&&(n=Error(s(423),{cause:o}),Ui($n(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=$n(o,a),u=Dp(e.stateNode,o,u),rp(e,u),qn!==4&&(qn=2)),!1;var d=Error(s(520),{cause:o});if(d=$n(d,a),Kc===null?Kc=[d]:Kc.push(d),qn!==4&&(qn=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Dp(a.stateNode,o,e),rp(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ur===null||!Ur.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=h_(u),p_(u,e,a,o),rp(a,u),!1}a=a.return}while(a!==null);return!1}var Np=Error(s(461)),oi=!1;function Ti(e,n,a,o){n.child=e===null?vg(n,null,a,o):mo(n,e.child,a,o)}function m_(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return uo(n),o=dp(e,n,a,S,d,u),A=hp(),e!==null&&!oi?(pp(e,n,u),Vs(e,n,u)):(Ie&&A&&lo(n),n.flags|=1,Ti(e,n,o,u),n.child)}function g_(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!ma(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,__(e,n,d,o,u)):(e=ga(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!zp(e,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(S,o)&&e.ref===n.ref)return Vs(e,n,u)}return n.flags|=1,e=Ln(d,o),e.ref=n.ref,e.return=n,n.child=e}function __(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(ha(d,o)&&e.ref===n.ref)if(oi=!1,n.pendingProps=o=d,zp(e,u))(e.flags&131072)!==0&&(oi=!0);else return n.lanes=e.lanes,Vs(e,n,u)}return Lp(e,n,a,o,u)}function v_(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return x_(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&af(n,d!==null?d.cachePool:null),d!==null?yg(n,d):lp(),Mg(n);else return o=n.lanes=536870912,x_(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(af(n,d.cachePool),yg(n,d),wr(),n.memoizedState=null):(e!==null&&af(n,null),lp(),wr());return Ti(e,n,u,a),n.child}function kc(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function x_(e,n,a,o,u){var d=np();return d=d===null?null:{parent:si._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&af(n,null),lp(),Mg(n),e!==null&&ll(e,n,o,!0),n.childLanes=u,null}function Sf(e,n){return n=Mf({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function S_(e,n,a){return mo(n,e.child,null,a),e=Sf(n,n.pendingProps),e.flags|=2,Aa(n),n.memoizedState=null,e}function Yy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ie){if(o.mode==="hidden")return e=Sf(n,o),n.lanes=536870912,kc(null,e);if(up(n),(e=sn)?(e=Lv(e,be),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:$i,overflow:va}:null,retryLane:536870912,hydrationErrors:null},a=Ni(e),a.return=n,n.child=a,Hn=n,sn=null)):e=null,e===null)throw ei(n);return n.lanes=536870912,null}return Sf(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(up(n),u)if(n.flags&256)n.flags&=-257,n=S_(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(oi||ll(e,n,a,!1),u=(a&e.childLanes)!==0,oi||u){if(o=xn,o!==null&&(S=Qa(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,Nn(e,S),sa(o,e,S),Np;Nf(),n=S_(e,n,a)}else e=d.treeContext,sn=Va(S.nextSibling),Hn=n,Ie=!0,Se=null,be=!1,e!==null&&br(n,e),n=Sf(n,o),n.flags|=4096;return n}return e=Ln(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function yf(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Lp(e,n,a,o,u){return uo(n),a=dp(e,n,a,o,void 0,u),o=hp(),e!==null&&!oi?(pp(e,n,u),Vs(e,n,u)):(Ie&&o&&lo(n),n.flags|=1,Ti(e,n,a,u),n.child)}function y_(e,n,a,o,u,d){return uo(n),n.updateQueue=null,a=bg(n,o,a,u),Eg(e),o=hp(),e!==null&&!oi?(pp(e,n,d),Vs(e,n,d)):(Ie&&o&&lo(n),n.flags|=1,Ti(e,n,a,d),n.child)}function M_(e,n,a,o,u){if(uo(n),n.stateNode===null){var d=Ne,S=a.contextType;typeof S=="object"&&S!==null&&(d=bi(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=wp,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ap(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?bi(S):Ne,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Cp(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&wp.enqueueReplaceState(d,d.state,null),Bc(n,o,d,u),Fc(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,V=_o(a,A);d.props=V;var ot=d.context,Et=a.contextType;S=Ne,typeof Et=="object"&&Et!==null&&(S=bi(Et));var At=a.getDerivedStateFromProps;Et=typeof At=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,Et||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||ot!==S)&&l_(n,d,o,S),Tr=!1;var lt=n.memoizedState;d.state=lt,Bc(n,o,d,u),Fc(),ot=n.memoizedState,A||lt!==ot||Tr?(typeof At=="function"&&(Cp(n,a,At,o),ot=n.memoizedState),(V=Tr||o_(n,a,V,o,lt,ot,S))?(Et||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),d.props=o,d.state=ot,d.context=S,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,sp(e,n),S=n.memoizedProps,Et=_o(a,S),d.props=Et,At=n.pendingProps,lt=d.context,ot=a.contextType,V=Ne,typeof ot=="object"&&ot!==null&&(V=bi(ot)),A=a.getDerivedStateFromProps,(ot=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==At||lt!==V)&&l_(n,d,o,V),Tr=!1,lt=n.memoizedState,d.state=lt,Bc(n,o,d,u),Fc();var _t=n.memoizedState;S!==At||lt!==_t||Tr||e!==null&&e.dependencies!==null&&ef(e.dependencies)?(typeof A=="function"&&(Cp(n,a,A,o),_t=n.memoizedState),(Et=Tr||o_(n,a,Et,o,lt,_t,V)||e!==null&&e.dependencies!==null&&ef(e.dependencies))?(ot||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,_t,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,_t,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_t),d.props=o,d.state=_t,d.context=V,o=Et):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,yf(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=mo(n,e.child,null,u),n.child=mo(n,null,a,u)):Ti(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Vs(e,n,u),e}function E_(e,n,a,o){return Sa(),n.flags|=256,Ti(e,n,a,o),n.child}var Up={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Op(e){return{baseLanes:e,cachePool:dg()}}function Ip(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ca),e}function b_(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(ni.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ie){if(u?Cr(n):wr(),(e=sn)?(e=Lv(e,be),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:$i,overflow:va}:null,retryLane:536870912,hydrationErrors:null},a=Ni(e),a.return=n,n.child=a,Hn=n,sn=null)):e=null,e===null)throw ei(n);return _m(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(wr(),u=n.mode,A=Mf({mode:"hidden",children:A},u),o=Pt(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Op(a),o.childLanes=Ip(e,S,a),n.memoizedState=Up,kc(null,o)):(Cr(n),Pp(n,A))}var V=e.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(d)n.flags&256?(Cr(n),n.flags&=-257,n=Fp(e,n,a)):n.memoizedState!==null?(wr(),n.child=e.child,n.flags|=128,n=null):(wr(),A=o.fallback,u=n.mode,o=Mf({mode:"visible",children:o.children},u),A=Pt(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,mo(n,e.child,null,a),o=n.child,o.memoizedState=Op(a),o.childLanes=Ip(e,S,a),n.memoizedState=Up,n=kc(null,o));else if(Cr(n),_m(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ot=S.dgst;S=ot,o=Error(s(419)),o.stack="",o.digest=S,Ui({value:o,source:null,stack:null}),n=Fp(e,n,a)}else if(oi||ll(e,n,a,!1),S=(a&e.childLanes)!==0,oi||S){if(S=xn,S!==null&&(o=Qa(S,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Nn(e,o),sa(S,e,o),Np;gm(A)||Nf(),n=Fp(e,n,a)}else gm(A)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,sn=Va(A.nextSibling),Hn=n,Ie=!0,Se=null,be=!1,e!==null&&br(n,e),n=Pp(n,o.children),n.flags|=4096);return n}return u?(wr(),A=o.fallback,u=n.mode,V=e.child,ot=V.sibling,o=Ln(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ot!==null?A=Ln(ot,A):(A=Pt(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,kc(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Op(a):(u=A.cachePool,u!==null?(V=si._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=dg(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Ip(e,S,a),n.memoizedState=Up,kc(e.child,o)):(Cr(n),a=e.child,e=a.sibling,a=Ln(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Pp(e,n){return n=Mf({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Mf(e,n){return e=Qe(22,e,null,n),e.lanes=0,e}function Fp(e,n,a){return mo(n,e.child,null,a),e=Pp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function T_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),co(e.return,n,a)}function Bp(e,n,a,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function A_(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=ni.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,St(ni,S),Ti(e,n,o,a),o=Ie?Un:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&T_(e,a,n);else if(e.tag===19)T_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&uf(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bp(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&uf(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Bp(n,!0,a,null,d,o);break;case"together":Bp(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Vs(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Lr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ll(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ln(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ln(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function zp(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ef(e)))}function qy(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),Oi(n,si,e.memoizedState.cache),Sa();break;case 27:case 5:$t(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:Oi(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,up(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Cr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?b_(e,n,a):(Cr(n),e=Vs(e,n,a),e!==null?e.sibling:null);Cr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ll(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return A_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(ni,ni.current),o)break;return null;case 22:return n.lanes=0,v_(e,n,a,n.pendingProps);case 24:Oi(n,si,e.memoizedState.cache)}return Vs(e,n,a)}function R_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)oi=!0;else{if(!zp(e,a)&&(n.flags&128)===0)return oi=!1,qy(e,n,a);oi=(e.flags&131072)!==0}else oi=!1,Ie&&(n.flags&1048576)!==0&&rl(n,Un,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ho(n.elementType),n.type=e,typeof e=="function")ma(e)?(o=_o(e,o),n.tag=1,n=M_(null,n,e,o,a)):(n.tag=0,n=Lp(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=m_(null,n,e,o,a);break t}else if(u===F){n.tag=14,n=g_(null,n,e,o,a);break t}}throw n=nt(e)||e,Error(s(306,n,""))}}return n;case 0:return Lp(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_o(o,n.pendingProps),M_(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,sp(e,n),Bc(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Oi(n,si,o),o!==d.cache&&Nc(n,[si],a,!0),Fc(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=E_(e,n,o,a);break t}else if(o!==u){u=$n(Error(s(424)),n),Ui(u),n=E_(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,sn=Va(e.firstChild),Hn=n,Ie=!0,Se=null,be=!0,a=vg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Sa(),o===u){n=Vs(e,n,a);break t}Ti(e,n,o,a)}n=n.child}return n;case 26:return yf(e,n),e===null?(a=Bv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ie||(a=n.type,e=n.pendingProps,o=Bf(at.current).createElement(a),o[gn]=n,o[_n]=e,Ai(o,a,e),Y(o),n.stateNode=o):n.memoizedState=Bv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return $t(n),e===null&&Ie&&(o=n.stateNode=Iv(n.type,n.pendingProps,at.current),Hn=n,be=!0,u=sn,Fr(n.type)?(vm=u,sn=Va(o.firstChild)):sn=u),Ti(e,n,n.pendingProps.children,a),yf(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ie&&((u=o=sn)&&(o=EM(o,n.type,n.pendingProps,be),o!==null?(n.stateNode=o,Hn=n,sn=Va(o.firstChild),be=!1,u=!0):u=!1),u||ei(n)),$t(n),u=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,hm(u,d)?o=null:S!==null&&hm(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=dp(e,n,By,null,null,a),au._currentValue=u),yf(e,n),Ti(e,n,o,a),n.child;case 6:return e===null&&Ie&&((e=a=sn)&&(a=bM(a,n.pendingProps,be),a!==null?(n.stateNode=a,Hn=n,sn=null,e=!0):e=!1),e||ei(n)),null;case 13:return b_(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=mo(n,null,o,a):Ti(e,n,o,a),n.child;case 11:return m_(e,n,n.type,n.pendingProps,a);case 7:return Ti(e,n,n.pendingProps,a),n.child;case 8:return Ti(e,n,n.pendingProps.children,a),n.child;case 12:return Ti(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oi(n,n.type,o.value),Ti(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,uo(n),u=bi(u),o=o(u),n.flags|=1,Ti(e,n,o,a),n.child;case 14:return g_(e,n,n.type,n.pendingProps,a);case 15:return __(e,n,n.type,n.pendingProps,a);case 19:return A_(e,n,a);case 31:return Yy(e,n,a);case 22:return v_(e,n,a,n.pendingProps);case 24:return uo(n),o=bi(si),e===null?(u=np(),u===null&&(u=xn,d=tp(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ap(n),Oi(n,si,u)):((e.lanes&a)!==0&&(sp(e,n),Bc(n,null,null,a),Fc()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oi(n,si,o)):(o=d.cache,Oi(n,si,o),o!==u.cache&&Nc(n,[si],a,!0))),Ti(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ks(e){e.flags|=4}function Hp(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(tv())e.flags|=8192;else throw po=rf,ip}else e.flags&=-16777217}function C_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kv(n))if(tv())e.flags|=8192;else throw po=rf,ip}function Ef(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Xe():536870912,e.lanes|=n,Sl|=n)}function Xc(e,n){if(!Ie)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function An(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function jy(e,n,a){var o=n.pendingProps;switch(ol(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(n),null;case 1:return An(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ba(si),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ta(n)?ks(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bs())),An(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(ks(n),d!==null?(An(n),C_(n,d)):(An(n),Hp(n,u,null,o,a))):d?d!==e.memoizedState?(ks(n),An(n),C_(n,d)):(An(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ks(n),An(n),Hp(n,u,e,o,a)),null;case 27:if(re(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ks(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return An(n),null}e=Ot.current,ta(n)?xa(n):(e=Iv(u,o,a),n.stateNode=e,ks(n))}return An(n),null;case 5:if(re(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ks(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return An(n),null}if(d=Ot.current,ta(n))xa(n);else{var S=Bf(at.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[gn]=n,d[_n]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(Ai(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ks(n)}}return An(n),Hp(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ks(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,ta(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Hn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[gn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||bv(e.nodeValue,a)),e||ei(n,!0)}else e=Bf(e).createTextNode(o),e[gn]=n,n.stateNode=e}return An(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ta(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[gn]=n}else Sa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;An(n),e=!1}else a=bs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Aa(n),n):(Aa(n),null);if((n.flags&128)!==0)throw Error(s(558))}return An(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ta(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else Sa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;An(n),u=!1}else u=bs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Aa(n),n):(Aa(n),null)}return Aa(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ef(n,n.updateQueue),An(n),null);case 4:return Ft(),e===null&&lm(n.stateNode.containerInfo),An(n),null;case 10:return ba(n.type),An(n),null;case 19:if(j(ni),o=n.memoizedState,o===null)return An(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Xc(o,!1);else{if(qn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=uf(e),d!==null){for(n.flags|=128,Xc(o,!1),e=d.updateQueue,n.updateQueue=e,Ef(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ki(a,e),a=a.sibling;return St(ni,ni.current&1|2),Ie&&Ha(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Cf&&(n.flags|=128,u=!0,Xc(o,!1),n.lanes=4194304)}else{if(!u)if(e=uf(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ef(n,e),Xc(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ie)return An(n),null}else 2*b()-o.renderingStartTime>Cf&&a!==536870912&&(n.flags|=128,u=!0,Xc(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=ni.current,St(ni,u?a&1|2:a&1),Ie&&Ha(n,o.treeForkCount),e):(An(n),null);case 22:case 23:return Aa(n),cp(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(An(n),n.subtreeFlags&6&&(n.flags|=8192)):An(n),a=n.updateQueue,a!==null&&Ef(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&j(fo),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ba(si),An(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Zy(e,n){switch(ol(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ba(si),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return re(n),null;case 31:if(n.memoizedState!==null){if(Aa(n),n.alternate===null)throw Error(s(340));Sa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Aa(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Sa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(ni),null;case 4:return Ft(),null;case 10:return ba(n.type),null;case 22:case 23:return Aa(n),cp(),e!==null&&j(fo),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ba(si),null;case 25:return null;default:return null}}function w_(e,n){switch(ol(n),n.tag){case 3:ba(si),Ft();break;case 26:case 27:case 5:re(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&Aa(n);break;case 13:Aa(n);break;case 19:j(ni);break;case 10:ba(n.type);break;case 22:case 23:Aa(n),cp(),e!==null&&j(fo);break;case 24:ba(si)}}function Wc(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){ln(n,n.return,A)}}function Dr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var V=a,ot=A;try{ot()}catch(Et){ln(u,V,Et)}}}o=o.next}while(o!==d)}}catch(Et){ln(n,n.return,Et)}}function D_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Sg(n,a)}catch(o){ln(e,e.return,o)}}}function N_(e,n,a){a.props=_o(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ln(e,n,o)}}function Yc(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ln(e,n,u)}}function Ts(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ln(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ln(e,n,u)}else a.current=null}function L_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ln(e,e.return,u)}}function Gp(e,n,a){try{var o=e.stateNode;_M(o,e.type,a,n),o[_n]=n}catch(u){ln(e,e.return,u)}}function U_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fr(e.type)||e.tag===4}function Vp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||U_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kp(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ia));else if(o!==4&&(o===27&&Fr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(kp(e,n,a),e=e.sibling;e!==null;)kp(e,n,a),e=e.sibling}function bf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Fr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bf(e,n,a),e=e.sibling;e!==null;)bf(e,n,a),e=e.sibling}function O_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ai(n,o,a),n[gn]=e,n[_n]=a}catch(d){ln(e,e.return,d)}}var Xs=!1,li=!1,Xp=!1,I_=typeof WeakSet=="function"?WeakSet:Set,vi=null;function Ky(e,n){if(e=e.containerInfo,fm=Wf,e=el(e),nl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,A=-1,V=-1,ot=0,Et=0,At=e,lt=null;e:for(;;){for(var _t;At!==a||u!==0&&At.nodeType!==3||(A=S+u),At!==d||o!==0&&At.nodeType!==3||(V=S+o),At.nodeType===3&&(S+=At.nodeValue.length),(_t=At.firstChild)!==null;)lt=At,At=_t;for(;;){if(At===e)break e;if(lt===a&&++ot===u&&(A=S),lt===d&&++Et===o&&(V=S),(_t=At.nextSibling)!==null)break;At=lt,lt=At.parentNode}At=_t}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(dm={focusedElem:e,selectionRange:a},Wf=!1,vi=n;vi!==null;)if(n=vi,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vi=e;else for(;vi!==null;){switch(n=vi,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var te=_o(a.type,u);e=o.getSnapshotBeforeUpdate(te,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(pe){ln(a,a.return,pe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)mm(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vi=e;break}vi=n.return}}function P_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ys(e,a),o&4&&Wc(5,a);break;case 1:if(Ys(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){ln(a,a.return,S)}else{var u=_o(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){ln(a,a.return,S)}}o&64&&D_(a),o&512&&Yc(a,a.return);break;case 3:if(Ys(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sg(e,n)}catch(S){ln(a,a.return,S)}}break;case 27:n===null&&o&4&&O_(a);case 26:case 5:Ys(e,a),n===null&&o&4&&L_(a),o&512&&Yc(a,a.return);break;case 12:Ys(e,a);break;case 31:Ys(e,a),o&4&&z_(e,a);break;case 13:Ys(e,a),o&4&&H_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sM.bind(null,a),TM(e,a))));break;case 22:if(o=a.memoizedState!==null||Xs,!o){n=n!==null&&n.memoizedState!==null||li,u=Xs;var d=li;Xs=o,(li=n)&&!d?qs(e,a,(a.subtreeFlags&8772)!==0):Ys(e,a),Xs=u,li=d}break;case 30:break;default:Ys(e,a)}}function F_(e){var n=e.alternate;n!==null&&(e.alternate=null,F_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ur(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var In=null,ea=!1;function Ws(e,n,a){for(a=a.child;a!==null;)B_(e,n,a),a=a.sibling}function B_(e,n,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(H,a)}catch{}switch(a.tag){case 26:li||Ts(a,n),Ws(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:li||Ts(a,n);var o=In,u=ea;Fr(a.type)&&(In=a.stateNode,ea=!1),Ws(e,n,a),eu(a.stateNode),In=o,ea=u;break;case 5:li||Ts(a,n);case 6:if(o=In,u=ea,In=null,Ws(e,n,a),In=o,ea=u,In!==null)if(ea)try{(In.nodeType===9?In.body:In.nodeName==="HTML"?In.ownerDocument.body:In).removeChild(a.stateNode)}catch(d){ln(a,n,d)}else try{In.removeChild(a.stateNode)}catch(d){ln(a,n,d)}break;case 18:In!==null&&(ea?(e=In,Dv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cl(e)):Dv(In,a.stateNode));break;case 4:o=In,u=ea,In=a.stateNode.containerInfo,ea=!0,Ws(e,n,a),In=o,ea=u;break;case 0:case 11:case 14:case 15:Dr(2,a,n),li||Dr(4,a,n),Ws(e,n,a);break;case 1:li||(Ts(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&N_(a,n,o)),Ws(e,n,a);break;case 21:Ws(e,n,a);break;case 22:li=(o=li)||a.memoizedState!==null,Ws(e,n,a),li=o;break;default:Ws(e,n,a)}}function z_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(a){ln(n,n.return,a)}}}function H_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(a){ln(n,n.return,a)}}function Qy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new I_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new I_),n;default:throw Error(s(435,e.tag))}}function Tf(e,n){var a=Qy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=rM.bind(null,e,o);o.then(u,u)}})}function na(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Fr(A.type)){In=A.stateNode,ea=!1;break t}break;case 5:In=A.stateNode,ea=!1;break t;case 3:case 4:In=A.stateNode.containerInfo,ea=!0;break t}A=A.return}if(In===null)throw Error(s(160));B_(d,S,u),In=null,ea=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)G_(n,e),n=n.sibling}var as=null;function G_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:na(n,e),ia(e),o&4&&(Dr(3,e,e.return),Wc(3,e),Dr(5,e,e.return));break;case 1:na(n,e),ia(e),o&512&&(li||a===null||Ts(a,a.return)),o&64&&Xs&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=as;if(na(n,e),ia(e),o&512&&(li||a===null||Ts(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Oa]||d[gn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Ai(d,o,a),d[gn]=e,Y(d),o=d;break t;case"link":var S=Gv("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}d=u.createElement(o),Ai(d,o,a),u.head.appendChild(d);break;case"meta":if(S=Gv("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}d=u.createElement(o),Ai(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[gn]=e,Y(d),o=d}e.stateNode=o}else Vv(u,e.type,e.stateNode);else e.stateNode=Hv(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Vv(u,e.type,e.stateNode):Hv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Gp(e,e.memoizedProps,a.memoizedProps)}break;case 27:na(n,e),ia(e),o&512&&(li||a===null||Ts(a,a.return)),a!==null&&o&4&&Gp(e,e.memoizedProps,a.memoizedProps);break;case 5:if(na(n,e),ia(e),o&512&&(li||a===null||Ts(a,a.return)),e.flags&32){u=e.stateNode;try{Dn(u,"")}catch(te){ln(e,e.return,te)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Gp(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Xp=!0);break;case 6:if(na(n,e),ia(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(te){ln(e,e.return,te)}}break;case 3:if(Gf=null,u=as,as=zf(n.containerInfo),na(n,e),as=u,ia(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cl(n.containerInfo)}catch(te){ln(e,e.return,te)}Xp&&(Xp=!1,V_(e));break;case 4:o=as,as=zf(e.stateNode.containerInfo),na(n,e),ia(e),as=o;break;case 12:na(n,e),ia(e);break;case 31:na(n,e),ia(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Tf(e,o)));break;case 13:na(n,e),ia(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rf=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Tf(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ot=Xs,Et=li;if(Xs=ot||u,li=Et||V,na(n,e),li=Et,Xs=ot,ia(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Xs||li||vo(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=V.stateNode;var At=V.memoizedProps.style,lt=At!=null&&At.hasOwnProperty("display")?At.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(te){ln(V,V.return,te)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(te){ln(V,V.return,te)}}}else if(n.tag===18){if(a===null){V=n;try{var _t=V.stateNode;u?Nv(_t,!0):Nv(V.stateNode,!1)}catch(te){ln(V,V.return,te)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Tf(e,a))));break;case 19:na(n,e),ia(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Tf(e,o)));break;case 30:break;case 21:break;default:na(n,e),ia(e)}}function ia(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(U_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Vp(e);bf(e,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(Dn(S,""),a.flags&=-33);var A=Vp(e);bf(e,A,S);break;case 3:case 4:var V=a.stateNode.containerInfo,ot=Vp(e);kp(e,ot,V);break;default:throw Error(s(161))}}catch(Et){ln(e,e.return,Et)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function V_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;V_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ys(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)P_(e,n.alternate,n),n=n.sibling}function vo(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Dr(4,n,n.return),vo(n);break;case 1:Ts(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&N_(n,n.return,a),vo(n);break;case 27:eu(n.stateNode);case 26:case 5:Ts(n,n.return),vo(n);break;case 22:n.memoizedState===null&&vo(n);break;case 30:vo(n);break;default:vo(n)}e=e.sibling}}function qs(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:qs(u,d,a),Wc(4,d);break;case 1:if(qs(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){ln(o,o.return,ot)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)xg(V[u],A)}catch(ot){ln(o,o.return,ot)}}a&&S&64&&D_(d),Yc(d,d.return);break;case 27:O_(d);case 26:case 5:qs(u,d,a),a&&o===null&&S&4&&L_(d),Yc(d,d.return);break;case 12:qs(u,d,a);break;case 31:qs(u,d,a),a&&S&4&&z_(u,d);break;case 13:qs(u,d,a),a&&S&4&&H_(u,d);break;case 22:d.memoizedState===null&&qs(u,d,a),Yc(d,d.return);break;case 30:break;default:qs(u,d,a)}n=n.sibling}}function Wp(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Lc(a))}function Yp(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Lc(e))}function ss(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)k_(e,n,a,o),n=n.sibling}function k_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ss(e,n,a,o),u&2048&&Wc(9,n);break;case 1:ss(e,n,a,o);break;case 3:ss(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Lc(e)));break;case 12:if(u&2048){ss(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){ln(n,n.return,V)}}else ss(e,n,a,o);break;case 31:ss(e,n,a,o);break;case 13:ss(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?ss(e,n,a,o):qc(e,n):d._visibility&2?ss(e,n,a,o):(d._visibility|=2,_l(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Wp(S,n);break;case 24:ss(e,n,a,o),u&2048&&Yp(n.alternate,n);break;default:ss(e,n,a,o)}}function _l(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,A=a,V=o,ot=S.flags;switch(S.tag){case 0:case 11:case 15:_l(d,S,A,V,u),Wc(8,S);break;case 23:break;case 22:var Et=S.stateNode;S.memoizedState!==null?Et._visibility&2?_l(d,S,A,V,u):qc(d,S):(Et._visibility|=2,_l(d,S,A,V,u)),u&&ot&2048&&Wp(S.alternate,S);break;case 24:_l(d,S,A,V,u),u&&ot&2048&&Yp(S.alternate,S);break;default:_l(d,S,A,V,u)}n=n.sibling}}function qc(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:qc(a,o),u&2048&&Wp(o.alternate,o);break;case 24:qc(a,o),u&2048&&Yp(o.alternate,o);break;default:qc(a,o)}n=n.sibling}}var jc=8192;function vl(e,n,a){if(e.subtreeFlags&jc)for(e=e.child;e!==null;)X_(e,n,a),e=e.sibling}function X_(e,n,a){switch(e.tag){case 26:vl(e,n,a),e.flags&jc&&e.memoizedState!==null&&FM(a,as,e.memoizedState,e.memoizedProps);break;case 5:vl(e,n,a);break;case 3:case 4:var o=as;as=zf(e.stateNode.containerInfo),vl(e,n,a),as=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=jc,jc=16777216,vl(e,n,a),jc=o):vl(e,n,a));break;default:vl(e,n,a)}}function W_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Zc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vi=o,q_(o,e)}W_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Y_(e),e=e.sibling}function Y_(e){switch(e.tag){case 0:case 11:case 15:Zc(e),e.flags&2048&&Dr(9,e,e.return);break;case 3:Zc(e);break;case 12:Zc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Af(e)):Zc(e);break;default:Zc(e)}}function Af(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vi=o,q_(o,e)}W_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Dr(8,n,n.return),Af(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Af(n));break;default:Af(n)}e=e.sibling}}function q_(e,n){for(;vi!==null;){var a=vi;switch(a.tag){case 0:case 11:case 15:Dr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Lc(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vi=o;else t:for(a=e;vi!==null;){o=vi;var u=o.sibling,d=o.return;if(F_(o),o===a){vi=null;break t}if(u!==null){u.return=d,vi=u;break t}vi=d}}}var Jy={getCacheForType:function(e){var n=bi(si),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bi(si).controller.signal}},$y=typeof WeakMap=="function"?WeakMap:Map,en=0,xn=null,Fe=null,Ge=0,on=0,Ra=null,Nr=!1,xl=!1,qp=!1,js=0,qn=0,Lr=0,xo=0,jp=0,Ca=0,Sl=0,Kc=null,aa=null,Zp=!1,Rf=0,j_=0,Cf=1/0,wf=null,Ur=null,pi=0,Or=null,yl=null,Zs=0,Kp=0,Qp=null,Z_=null,Qc=0,Jp=null;function wa(){return(en&2)!==0&&Ge!==0?Ge&-Ge:U.T!==null?am():Tn()}function K_(){if(Ca===0)if((Ge&536870912)===0||Ie){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),Ca=e}else Ca=536870912;return e=Ta.current,e!==null&&(e.flags|=32),Ca}function sa(e,n,a){(e===xn&&(on===2||on===9)||e.cancelPendingCommit!==null)&&(Ml(e,0),Ir(e,Ge,Ca,!1)),Cn(e,a),((en&2)===0||e!==xn)&&(e===xn&&((en&2)===0&&(xo|=a),qn===4&&Ir(e,Ge,Ca,!1)),As(e))}function Q_(e,n,a){if((en&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||kt(e,n),u=o?nM(e,n):tm(e,n,!0),d=o;do{if(u===0){xl&&!o&&Ir(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!tM(a)){u=tm(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=Kc;var V=A.current.memoizedState.isDehydrated;if(V&&(Ml(A,S).flags|=256),S=tm(A,S,!1),S!==2){if(qp&&!V){A.errorRecoveryDisabledLanes|=d,xo|=d,u=4;break t}d=aa,aa=u,d!==null&&(aa===null?aa=d:aa.push.apply(aa,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){Ml(e,0),Ir(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ir(o,n,Ca,!Nr);break t;case 2:aa=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Rf+300-b(),10<u)){if(Ir(o,n,Ca,!Nr),Q(o,0,!0)!==0)break t;Zs=n,o.timeoutHandle=Cv(J_.bind(null,o,a,aa,wf,Zp,n,Ca,xo,Sl,Nr,d,"Throttled",-0,0),u);break t}J_(o,a,aa,wf,Zp,n,Ca,xo,Sl,Nr,d,null,-0,0)}}break}while(!0);As(e)}function J_(e,n,a,o,u,d,S,A,V,ot,Et,At,lt,_t){if(e.timeoutHandle=-1,At=n.subtreeFlags,At&8192||(At&16785408)===16785408){At={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ia},X_(n,d,At);var te=(d&62914560)===d?Rf-b():(d&4194048)===d?j_-b():0;if(te=BM(At,te),te!==null){Zs=d,e.cancelPendingCommit=te(rv.bind(null,e,n,d,a,o,u,S,A,V,Et,At,null,lt,_t)),Ir(e,d,S,!ot);return}}rv(e,n,d,a,o,u,S,A,V)}function tM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Di(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ir(e,n,a,o){n&=~jp,n&=~xo,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-wt(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&ms(e,a,n)}function Df(){return(en&6)===0?(Jc(0),!1):!0}function $p(){if(Fe!==null){if(on===0)var e=Fe.return;else e=Fe,Ea=Ma=null,mp(e),dl=null,Oc=0,e=Fe;for(;e!==null;)w_(e.alternate,e),e=e.return;Fe=null}}function Ml(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,SM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zs=0,$p(),xn=e,Fe=a=Ln(e.current,null),Ge=n,on=0,Ra=null,Nr=!1,xl=kt(e,n),qp=!1,Sl=Ca=jp=xo=Lr=qn=0,aa=Kc=null,Zp=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-wt(o),d=1<<u;n|=e[u],o&=~d}return js=n,He(),a}function $_(e,n){Me=null,U.H=Vc,n===fl||n===sf?(n=mg(),on=3):n===ip?(n=mg(),on=4):on=n===Np?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ra=n,Fe===null&&(qn=1,xf(e,$n(n,e.current)))}function tv(){var e=Ta.current;return e===null?!0:(Ge&4194048)===Ge?Ga===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===Ga:!1}function ev(){var e=U.H;return U.H=Vc,e===null?Vc:e}function nv(){var e=U.A;return U.A=Jy,e}function Nf(){qn=4,Nr||(Ge&4194048)!==Ge&&Ta.current!==null||(xl=!0),(Lr&134217727)===0&&(xo&134217727)===0||xn===null||Ir(xn,Ge,Ca,!1)}function tm(e,n,a){var o=en;en|=2;var u=ev(),d=nv();(xn!==e||Ge!==n)&&(wf=null,Ml(e,n)),n=!1;var S=qn;t:do try{if(on!==0&&Fe!==null){var A=Fe,V=Ra;switch(on){case 8:$p(),S=6;break t;case 3:case 2:case 9:case 6:Ta.current===null&&(n=!0);var ot=on;if(on=0,Ra=null,El(e,A,V,ot),a&&xl){S=0;break t}break;default:ot=on,on=0,Ra=null,El(e,A,V,ot)}}eM(),S=qn;break}catch(Et){$_(e,Et)}while(!0);return n&&e.shellSuspendCounter++,Ea=Ma=null,en=o,U.H=u,U.A=d,Fe===null&&(xn=null,Ge=0,He()),S}function eM(){for(;Fe!==null;)iv(Fe)}function nM(e,n){var a=en;en|=2;var o=ev(),u=nv();xn!==e||Ge!==n?(wf=null,Cf=b()+500,Ml(e,n)):xl=kt(e,n);t:do try{if(on!==0&&Fe!==null){n=Fe;var d=Ra;e:switch(on){case 1:on=0,Ra=null,El(e,n,d,1);break;case 2:case 9:if(hg(d)){on=0,Ra=null,av(n);break}n=function(){on!==2&&on!==9||xn!==e||(on=7),As(e)},d.then(n,n);break t;case 3:on=7;break t;case 4:on=5;break t;case 7:hg(d)?(on=0,Ra=null,av(n)):(on=0,Ra=null,El(e,n,d,7));break;case 5:var S=null;switch(Fe.tag){case 26:S=Fe.memoizedState;case 5:case 27:var A=Fe;if(S?kv(S):A.stateNode.complete){on=0,Ra=null;var V=A.sibling;if(V!==null)Fe=V;else{var ot=A.return;ot!==null?(Fe=ot,Lf(ot)):Fe=null}break e}}on=0,Ra=null,El(e,n,d,5);break;case 6:on=0,Ra=null,El(e,n,d,6);break;case 8:$p(),qn=6;break t;default:throw Error(s(462))}}iM();break}catch(Et){$_(e,Et)}while(!0);return Ea=Ma=null,U.H=o,U.A=u,en=a,Fe!==null?0:(xn=null,Ge=0,He(),qn)}function iM(){for(;Fe!==null&&!ee();)iv(Fe)}function iv(e){var n=R_(e.alternate,e,js);e.memoizedProps=e.pendingProps,n===null?Lf(e):Fe=n}function av(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=y_(a,n,n.pendingProps,n.type,void 0,Ge);break;case 11:n=y_(a,n,n.pendingProps,n.type.render,n.ref,Ge);break;case 5:mp(n);default:w_(a,n),n=Fe=Ki(n,js),n=R_(a,n,js)}e.memoizedProps=e.pendingProps,n===null?Lf(e):Fe=n}function El(e,n,a,o){Ea=Ma=null,mp(n),dl=null,Oc=0;var u=n.return;try{if(Wy(e,u,n,a,Ge)){qn=1,xf(e,$n(a,e.current)),Fe=null;return}}catch(d){if(u!==null)throw Fe=u,d;qn=1,xf(e,$n(a,e.current)),Fe=null;return}n.flags&32768?(Ie||o===1?e=!0:xl||(Ge&536870912)!==0?e=!1:(Nr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ta.current,o!==null&&o.tag===13&&(o.flags|=16384))),sv(n,e)):Lf(n)}function Lf(e){var n=e;do{if((n.flags&32768)!==0){sv(n,Nr);return}e=n.return;var a=jy(n.alternate,n,js);if(a!==null){Fe=a;return}if(n=n.sibling,n!==null){Fe=n;return}Fe=n=e}while(n!==null);qn===0&&(qn=5)}function sv(e,n){do{var a=Zy(e.alternate,e);if(a!==null){a.flags&=32767,Fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Fe=e;return}Fe=e=a}while(e!==null);qn=6,Fe=null}function rv(e,n,a,o,u,d,S,A,V){e.cancelPendingCommit=null;do Uf();while(pi!==0);if((en&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=ie,bn(e,a,d,S,A,V),e===xn&&(Fe=xn=null,Ge=0),yl=n,Or=e,Zs=a,Kp=d,Qp=u,Z_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,oM(xt,function(){return fv(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=B.p,B.p=2,S=en,en|=4;try{Ky(e,n,a)}finally{en=S,B.p=u,U.T=o}}pi=1,ov(),lv(),cv()}}function ov(){if(pi===1){pi=0;var e=Or,n=yl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var u=en;en|=4;try{G_(n,e);var d=dm,S=el(e.containerInfo),A=d.focusedElem,V=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&tl(A.ownerDocument.documentElement,A)){if(V!==null&&nl(A)){var ot=V.start,Et=V.end;if(Et===void 0&&(Et=ot),"selectionStart"in A)A.selectionStart=ot,A.selectionEnd=Math.min(Et,A.value.length);else{var At=A.ownerDocument||document,lt=At&&At.defaultView||window;if(lt.getSelection){var _t=lt.getSelection(),te=A.textContent.length,pe=Math.min(V.start,te),pn=V.end===void 0?pe:Math.min(V.end,te);!_t.extend&&pe>pn&&(S=pn,pn=pe,pe=S);var $=bc(A,pe),W=bc(A,pn);if($&&W&&(_t.rangeCount!==1||_t.anchorNode!==$.node||_t.anchorOffset!==$.offset||_t.focusNode!==W.node||_t.focusOffset!==W.offset)){var rt=At.createRange();rt.setStart($.node,$.offset),_t.removeAllRanges(),pe>pn?(_t.addRange(rt),_t.extend(W.node,W.offset)):(rt.setEnd(W.node,W.offset),_t.addRange(rt))}}}}for(At=[],_t=A;_t=_t.parentNode;)_t.nodeType===1&&At.push({element:_t,left:_t.scrollLeft,top:_t.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<At.length;A++){var bt=At[A];bt.element.scrollLeft=bt.left,bt.element.scrollTop=bt.top}}Wf=!!fm,dm=fm=null}finally{en=u,B.p=o,U.T=a}}e.current=n,pi=2}}function lv(){if(pi===2){pi=0;var e=Or,n=yl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var u=en;en|=4;try{P_(e,n.alternate,n)}finally{en=u,B.p=o,U.T=a}}pi=3}}function cv(){if(pi===4||pi===3){pi=0,O();var e=Or,n=yl,a=Zs,o=Z_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pi=5:(pi=0,yl=Or=null,uv(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ur=null),Hi(a),n=n.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(H,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=B.p,B.p=2,U.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{U.T=n,B.p=u}}(Zs&3)!==0&&Uf(),As(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Jp?Qc++:(Qc=0,Jp=e):Qc=0,Jc(0)}}function uv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Lc(n)))}function Uf(){return ov(),lv(),cv(),fv()}function fv(){if(pi!==5)return!1;var e=Or,n=Kp;Kp=0;var a=Hi(Zs),o=U.T,u=B.p;try{B.p=32>a?32:a,U.T=null,a=Qp,Qp=null;var d=Or,S=Zs;if(pi=0,yl=Or=null,Zs=0,(en&6)!==0)throw Error(s(331));var A=en;if(en|=4,Y_(d.current),k_(d,d.current,S,a),en=A,Jc(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(H,d)}catch{}return!0}finally{B.p=u,U.T=o,uv(e,n)}}function dv(e,n,a){n=$n(a,n),n=Dp(e.stateNode,n,2),e=Rr(e,n,2),e!==null&&(Cn(e,2),As(e))}function ln(e,n,a){if(e.tag===3)dv(e,e,a);else for(;n!==null;){if(n.tag===3){dv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ur===null||!Ur.has(o))){e=$n(a,e),a=h_(2),o=Rr(n,a,2),o!==null&&(p_(a,o,n,e),Cn(o,2),As(o));break}}n=n.return}}function em(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new $y;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(qp=!0,u.add(a),e=aM.bind(null,e,n,a),n.then(e,e))}function aM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xn===e&&(Ge&a)===a&&(qn===4||qn===3&&(Ge&62914560)===Ge&&300>b()-Rf?(en&2)===0&&Ml(e,0):jp|=a,Sl===Ge&&(Sl=0)),As(e)}function hv(e,n){n===0&&(n=Xe()),e=Nn(e,n),e!==null&&(Cn(e,n),As(e))}function sM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),hv(e,a)}function rM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),hv(e,a)}function oM(e,n){return Oe(e,n)}var Of=null,bl=null,nm=!1,If=!1,im=!1,Pr=0;function As(e){e!==bl&&e.next===null&&(bl===null?Of=bl=e:bl=bl.next=e),If=!0,nm||(nm=!0,cM())}function Jc(e,n){if(!im&&If){im=!0;do for(var a=!1,o=Of;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-wt(42|e)+1)-1,d&=u&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,_v(o,d))}else d=Ge,d=Q(o,o===xn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||kt(o,d)||(a=!0,_v(o,d));o=o.next}while(a);im=!1}}function lM(){pv()}function pv(){If=nm=!1;var e=0;Pr!==0&&xM()&&(e=Pr);for(var n=b(),a=null,o=Of;o!==null;){var u=o.next,d=mv(o,n);d===0?(o.next=null,a===null?Of=u:a.next=u,u===null&&(bl=a)):(a=o,(e!==0||(d&3)!==0)&&(If=!0)),o=u}pi!==0&&pi!==5||Jc(e),Pr!==0&&(Pr=0)}function mv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-wt(d),A=1<<S,V=u[S];V===-1?((A&a)===0||(A&o)!==0)&&(u[S]=ce(A,n)):V<=n&&(e.expiredLanes|=A),d&=~A}if(n=xn,a=Ge,a=Q(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(on===2||on===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ke(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ke(o),Hi(a)){case 2:case 8:a=Ct;break;case 32:a=xt;break;case 268435456:a=It;break;default:a=xt}return o=gv.bind(null,e),a=Oe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ke(o),e.callbackPriority=2,e.callbackNode=null,2}function gv(e,n){if(pi!==0&&pi!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Uf()&&e.callbackNode!==a)return null;var o=Ge;return o=Q(e,e===xn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Q_(e,o,n),mv(e,b()),e.callbackNode!=null&&e.callbackNode===a?gv.bind(null,e):null)}function _v(e,n){if(Uf())return null;Q_(e,n,!0)}function cM(){yM(function(){(en&6)!==0?Oe(yt,lM):pv()})}function am(){if(Pr===0){var e=cl;e===0&&(e=pt,pt<<=1,(pt&261888)===0&&(pt=256)),Pr=e}return Pr}function vv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ji(""+e)}function xv(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function uM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=vv((u[_n]||null).action),S=o.submitter;S&&(n=(n=S[_n]||null)?vv(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var A=new pr("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pr!==0){var V=S?xv(u,S):new FormData(u);bp(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(A.preventDefault(),V=S?xv(u,S):new FormData(u),bp(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var sm=0;sm<Bt.length;sm++){var rm=Bt[sm],fM=rm.toLowerCase(),dM=rm[0].toUpperCase()+rm.slice(1);Gt(fM,"on"+dM)}Gt(Rc,"onAnimationEnd"),Gt(sl,"onAnimationIteration"),Gt(Cc,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt($u,"onTransitionRun"),Gt(wc,"onTransitionStart"),Gt(tf,"onTransitionCancel"),Gt(Dc,"onTransitionEnd"),Ht("onMouseEnter",["mouseout","mouseover"]),Ht("onMouseLeave",["mouseout","mouseover"]),Ht("onPointerEnter",["pointerout","pointerover"]),Ht("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $c="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($c));function Sv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],V=A.instance,ot=A.currentTarget;if(A=A.listener,V!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=ot;try{d(u)}catch(Et){zt(Et)}u.currentTarget=null,d=V}else for(S=0;S<o.length;S++){if(A=o[S],V=A.instance,ot=A.currentTarget,A=A.listener,V!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=ot;try{d(u)}catch(Et){zt(Et)}u.currentTarget=null,d=V}}}}function Be(e,n){var a=n[gs];a===void 0&&(a=n[gs]=new Set);var o=e+"__bubble";a.has(o)||(yv(n,e,2,!1),a.add(o))}function om(e,n,a){var o=0;n&&(o|=4),yv(a,e,o,n)}var Pf="_reactListening"+Math.random().toString(36).slice(2);function lm(e){if(!e[Pf]){e[Pf]=!0,dt.forEach(function(a){a!=="selectionchange"&&(hM.has(a)||om(a,!1,e),om(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pf]||(n[Pf]=!0,om("selectionchange",!1,n))}}function yv(e,n,a,o){switch(Kv(n)){case 2:var u=GM;break;case 8:u=VM;break;default:u=Em}a=u.bind(null,n,a,e),u=void 0,!Vo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function cm(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Ja(A),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=d=S;continue t}A=A.parentNode}}o=o.return}fc(function(){var ot=d,Et=cc(a),At=[];t:{var lt=ct.get(e);if(lt!==void 0){var _t=pr,te=e;switch(e){case"keypress":if(es(a)===0)break t;case"keydown":case"keyup":_t=Xu;break;case"focusin":te="focus",_t=Fa;break;case"focusout":te="blur",_t=Fa;break;case"beforeblur":case"afterblur":_t=Fa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_t=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_t=Xo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_t=mc;break;case Rc:case sl:case Cc:_t=Gu;break;case Dc:_t=Wu;break;case"scroll":case"scrollend":_t=wi;break;case"wheel":_t=Yo;break;case"copy":case"cut":case"paste":_t=hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_t=so;break;case"toggle":case"beforetoggle":_t=Jh}var pe=(n&4)!==0,pn=!pe&&(e==="scroll"||e==="scrollend"),$=pe?lt!==null?lt+"Capture":null:lt;pe=[];for(var W=ot,rt;W!==null;){var bt=W;if(rt=bt.stateNode,bt=bt.tag,bt!==5&&bt!==26&&bt!==27||rt===null||$===null||(bt=io(W,$),bt!=null&&pe.push(tu(W,bt,rt))),pn)break;W=W.return}0<pe.length&&(lt=new _t(lt,te,null,a,Et),At.push({event:lt,listeners:pe}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",_t=e==="mouseout"||e==="pointerout",lt&&a!==lc&&(te=a.relatedTarget||a.fromElement)&&(Ja(te)||te[wn]))break t;if((_t||lt)&&(lt=Et.window===Et?Et:(lt=Et.ownerDocument)?lt.defaultView||lt.parentWindow:window,_t?(te=a.relatedTarget||a.toElement,_t=ot,te=te?Ja(te):null,te!==null&&(pn=c(te),pe=te.tag,te!==pn||pe!==5&&pe!==27&&pe!==6)&&(te=null)):(_t=null,te=ot),_t!==te)){if(pe=xs,bt="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(pe=so,bt="onPointerLeave",$="onPointerEnter",W="pointer"),pn=_t==null?lt:_s(_t),rt=te==null?lt:_s(te),lt=new pe(bt,W+"leave",_t,a,Et),lt.target=pn,lt.relatedTarget=rt,bt=null,Ja(Et)===ot&&(pe=new pe($,W+"enter",te,a,Et),pe.target=rt,pe.relatedTarget=pn,bt=pe),pn=bt,_t&&te)e:{for(pe=pM,$=_t,W=te,rt=0,bt=$;bt;bt=pe(bt))rt++;bt=0;for(var le=W;le;le=pe(le))bt++;for(;0<rt-bt;)$=pe($),rt--;for(;0<bt-rt;)W=pe(W),bt--;for(;rt--;){if($===W||W!==null&&$===W.alternate){pe=$;break e}$=pe($),W=pe(W)}pe=null}else pe=null;_t!==null&&Mv(At,lt,_t,pe,!1),te!==null&&pn!==null&&Mv(At,pn,te,pe,!0)}}t:{if(lt=ot?_s(ot):window,_t=lt.nodeName&&lt.nodeName.toLowerCase(),_t==="select"||_t==="input"&&lt.type==="file")var Je=Sc;else if(Ko(lt))if(yc)Je=Mc;else{Je=Ku;var ae=Zu}else _t=lt.nodeName,!_t||_t.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?ot&&vs(ot.elementType)&&(Je=Sc):Je=Ms;if(Je&&(Je=Je(e,ot))){xc(At,Je,a,Et);break t}ae&&ae(e,lt,ot),e==="focusout"&&ot&&lt.type==="number"&&ot.memoizedProps.value!=null&&nn(lt,"number",lt.value)}switch(ae=ot?_s(ot):window,e){case"focusin":(Ko(ae)||ae.contentEditable==="true")&&(zs=ae,Mr=ot,Er=null);break;case"focusout":Er=Mr=zs=null;break;case"mousedown":il=!0;break;case"contextmenu":case"mouseup":case"dragend":il=!1,Tc(At,a,Et);break;case"selectionchange":if(Ju)break;case"keydown":case"keyup":Tc(At,a,Et)}var Te;if(ys)t:{switch(e){case"compositionstart":var Ve="onCompositionStart";break t;case"compositionend":Ve="onCompositionEnd";break t;case"compositionupdate":Ve="onCompositionUpdate";break t}Ve=void 0}else Ba?_c(e,a)&&(Ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ve="onCompositionStart");Ve&&(qo&&a.locale!=="ko"&&(Ba||Ve!=="onCompositionStart"?Ve==="onCompositionEnd"&&Ba&&(Te=ki()):(fn=Et,Vi="value"in fn?fn.value:fn.textContent,Ba=!0)),ae=Ff(ot,Ve),0<ae.length&&(Ve=new da(Ve,e,null,a,Et),At.push({event:Ve,listeners:ae}),Te?Ve.data=Te:(Te=Zo(a),Te!==null&&(Ve.data=Te)))),(Te=qu?vc(e,a):ro(e,a))&&(Ve=Ff(ot,"onBeforeInput"),0<Ve.length&&(ae=new da("onBeforeInput","beforeinput",null,a,Et),At.push({event:ae,listeners:Ve}),ae.data=Te)),uM(At,e,ot,a,Et)}Sv(At,n)})}function tu(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ff(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=io(e,a),u!=null&&o.unshift(tu(e,u,d)),u=io(e,n),u!=null&&o.push(tu(e,u,d))),e.tag===3)return o;e=e.return}return[]}function pM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mv(e,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var A=a,V=A.alternate,ot=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||ot===null||(V=ot,u?(ot=io(a,d),ot!=null&&S.unshift(tu(a,ot,V))):u||(ot=io(a,d),ot!=null&&S.push(tu(a,ot,V)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var mM=/\r\n?/g,gM=/\u0000|\uFFFD/g;function Ev(e){return(typeof e=="string"?e:""+e).replace(mM,`
`).replace(gM,"")}function bv(e,n){return n=Ev(n),Ev(e)===n}function hn(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Dn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Dn(e,""+o);break;case"className":_e(e,"class",o);break;case"tabIndex":_e(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":_e(e,a,o);break;case"style":Ri(e,o,d);break;case"data":if(n!=="object"){_e(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ji(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&hn(e,n,"name",u.name,u,null),hn(e,n,"formEncType",u.formEncType,u,null),hn(e,n,"formMethod",u.formMethod,u,null),hn(e,n,"formTarget",u.formTarget,u,null)):(hn(e,n,"encType",u.encType,u,null),hn(e,n,"method",u.method,u,null),hn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ji(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ia);break;case"onScroll":o!=null&&Be("scroll",e);break;case"onScrollEnd":o!=null&&Be("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ji(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Be("beforetoggle",e),Be("toggle",e),de(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":de(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ts.get(a)||a,de(e,a,o))}}function um(e,n,a,o,u,d){switch(a){case"style":Ri(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Dn(e,o):(typeof o=="number"||typeof o=="bigint")&&Dn(e,""+o);break;case"onScroll":o!=null&&Be("scroll",e);break;case"onScrollEnd":o!=null&&Be("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):de(e,a,o)}}}function Ai(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",e),Be("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:hn(e,n,d,S,a,null)}}u&&hn(e,n,"srcSet",a.srcSet,a,null),o&&hn(e,n,"src",a.src,a,null);return;case"input":Be("invalid",e);var A=d=S=u=null,V=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var Et=a[o];if(Et!=null)switch(o){case"name":u=Et;break;case"type":S=Et;break;case"checked":V=Et;break;case"defaultChecked":ot=Et;break;case"value":d=Et;break;case"defaultValue":A=Et;break;case"children":case"dangerouslySetInnerHTML":if(Et!=null)throw Error(s(137,n));break;default:hn(e,n,o,Et,a,null)}}Mi(e,d,A,V,ot,S,u,!1);return;case"select":Be("invalid",e),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:hn(e,n,u,A,a,null)}n=d,a=S,e.multiple=!!o,n!=null?di(e,!!o,n,!1):a!=null&&di(e,!!o,a,!0);return;case"textarea":Be("invalid",e),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:hn(e,n,S,A,a,null)}Fn(e,o,u,d);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":hn(e,n,V,o,a,null));return;case"dialog":Be("beforetoggle",e),Be("toggle",e),Be("cancel",e),Be("close",e);break;case"iframe":case"object":Be("load",e);break;case"video":case"audio":for(o=0;o<$c.length;o++)Be($c[o],e);break;case"image":Be("error",e),Be("load",e);break;case"details":Be("toggle",e);break;case"embed":case"source":case"link":Be("error",e),Be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:hn(e,n,ot,o,a,null)}return;default:if(vs(n)){for(Et in a)a.hasOwnProperty(Et)&&(o=a[Et],o!==void 0&&um(e,n,Et,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&hn(e,n,A,o,a,null))}function _M(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,A=null,V=null,ot=null,Et=null;for(_t in a){var At=a[_t];if(a.hasOwnProperty(_t)&&At!=null)switch(_t){case"checked":break;case"value":break;case"defaultValue":V=At;default:o.hasOwnProperty(_t)||hn(e,n,_t,null,o,At)}}for(var lt in o){var _t=o[lt];if(At=a[lt],o.hasOwnProperty(lt)&&(_t!=null||At!=null))switch(lt){case"type":d=_t;break;case"name":u=_t;break;case"checked":ot=_t;break;case"defaultChecked":Et=_t;break;case"value":S=_t;break;case"defaultValue":A=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:_t!==At&&hn(e,n,lt,_t,o,At)}}fi(e,S,A,V,ot,Et,d,u);return;case"select":_t=S=A=lt=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":_t=V;default:o.hasOwnProperty(d)||hn(e,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":lt=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==V&&hn(e,n,u,d,o,V)}n=A,a=S,o=_t,lt!=null?di(e,!!a,lt,!1):!!o!=!!a&&(n!=null?di(e,!!a,n,!0):di(e,!!a,a?[]:"",!1));return;case"textarea":_t=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:hn(e,n,A,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":lt=u;break;case"defaultValue":_t=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&hn(e,n,S,u,o,d)}tn(e,lt,_t);return;case"option":for(var te in a)lt=a[te],a.hasOwnProperty(te)&&lt!=null&&!o.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:hn(e,n,te,null,o,lt));for(V in o)lt=o[V],_t=a[V],o.hasOwnProperty(V)&&lt!==_t&&(lt!=null||_t!=null)&&(V==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":hn(e,n,V,lt,o,_t));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)lt=a[pe],a.hasOwnProperty(pe)&&lt!=null&&!o.hasOwnProperty(pe)&&hn(e,n,pe,null,o,lt);for(ot in o)if(lt=o[ot],_t=a[ot],o.hasOwnProperty(ot)&&lt!==_t&&(lt!=null||_t!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:hn(e,n,ot,lt,o,_t)}return;default:if(vs(n)){for(var pn in a)lt=a[pn],a.hasOwnProperty(pn)&&lt!==void 0&&!o.hasOwnProperty(pn)&&um(e,n,pn,void 0,o,lt);for(Et in o)lt=o[Et],_t=a[Et],!o.hasOwnProperty(Et)||lt===_t||lt===void 0&&_t===void 0||um(e,n,Et,lt,o,_t);return}}for(var $ in a)lt=a[$],a.hasOwnProperty($)&&lt!=null&&!o.hasOwnProperty($)&&hn(e,n,$,null,o,lt);for(At in o)lt=o[At],_t=a[At],!o.hasOwnProperty(At)||lt===_t||lt==null&&_t==null||hn(e,n,At,lt,o,_t)}function Tv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,A=u.duration;if(d&&A&&Tv(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ot=V.startTime;if(ot>A)break;var Et=V.transferSize,At=V.initiatorType;Et&&Tv(At)&&(V=V.responseEnd,S+=Et*(V<A?1:(A-ot)/(V-ot)))}if(--o,n+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fm=null,dm=null;function Bf(e){return e.nodeType===9?e:e.ownerDocument}function Av(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function hm(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pm=null;function xM(){var e=window.event;return e&&e.type==="popstate"?e===pm?!1:(pm=e,!0):(pm=null,!1)}var Cv=typeof setTimeout=="function"?setTimeout:void 0,SM=typeof clearTimeout=="function"?clearTimeout:void 0,wv=typeof Promise=="function"?Promise:void 0,yM=typeof queueMicrotask=="function"?queueMicrotask:typeof wv<"u"?function(e){return wv.resolve(null).then(e).catch(MM)}:Cv;function MM(e){setTimeout(function(){throw e})}function Fr(e){return e==="head"}function Dv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Cl(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")eu(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,eu(a);for(var d=a.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[Oa]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&eu(e.ownerDocument.body);a=u}while(a);Cl(n)}function Nv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function mm(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mm(a),ur(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function EM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Oa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Va(e.nextSibling),e===null)break}return null}function bM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Va(e.nextSibling),e===null))return null;return e}function Lv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Va(e.nextSibling),e===null))return null;return e}function gm(e){return e.data==="$?"||e.data==="$~"}function _m(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function TM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Va(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var vm=null;function Uv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Va(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ov(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Iv(e,n,a){switch(n=Bf(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function eu(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ur(e)}var ka=new Map,Pv=new Set;function zf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ks=B.d;B.d={f:AM,r:RM,D:CM,C:wM,L:DM,m:NM,X:UM,S:LM,M:OM};function AM(){var e=Ks.f(),n=Df();return e||n}function RM(e){var n=$a(e);n!==null&&n.tag===5&&n.type==="form"?$g(n):Ks.r(e)}var Tl=typeof document>"u"?null:document;function Fv(e,n,a){var o=Tl;if(o&&typeof n=="string"&&n){var u=he(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Pv.has(u)||(Pv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ai(n,"link",e),Y(n),o.head.appendChild(n)))}}function CM(e){Ks.D(e),Fv("dns-prefetch",e,null)}function wM(e,n){Ks.C(e,n),Fv("preconnect",e,n)}function DM(e,n,a){Ks.L(e,n,a);var o=Tl;if(o&&e&&n){var u='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+he(a.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var d=u;switch(n){case"style":d=Al(e);break;case"script":d=Rl(e)}ka.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ka.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(nu(d))||n==="script"&&o.querySelector(iu(d))||(n=o.createElement("link"),Ai(n,"link",e),Y(n),o.head.appendChild(n)))}}function NM(e,n){Ks.m(e,n);var a=Tl;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+he(o)+'"][href="'+he(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Rl(e)}if(!ka.has(d)&&(e=_({rel:"modulepreload",href:e},n),ka.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(iu(d)))return}o=a.createElement("link"),Ai(o,"link",e),Y(o),a.head.appendChild(o)}}}function LM(e,n,a){Ks.S(e,n,a);var o=Tl;if(o&&e){var u=R(o).hoistableStyles,d=Al(e);n=n||"default";var S=u.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(nu(d)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ka.get(d))&&xm(e,a);var V=S=o.createElement("link");Y(V),Ai(V,"link",e),V._p=new Promise(function(ot,Et){V.onload=ot,V.onerror=Et}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Hf(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(d,S)}}}function UM(e,n){Ks.X(e,n);var a=Tl;if(a&&e){var o=R(a).hoistableScripts,u=Rl(e),d=o.get(u);d||(d=a.querySelector(iu(u)),d||(e=_({src:e,async:!0},n),(n=ka.get(u))&&Sm(e,n),d=a.createElement("script"),Y(d),Ai(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function OM(e,n){Ks.M(e,n);var a=Tl;if(a&&e){var o=R(a).hoistableScripts,u=Rl(e),d=o.get(u);d||(d=a.querySelector(iu(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=ka.get(u))&&Sm(e,n),d=a.createElement("script"),Y(d),Ai(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Bv(e,n,a,o){var u=(u=at.current)?zf(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Al(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Al(a.href);var d=R(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(nu(e)))&&!d._p&&(S.instance=d,S.state.loading=5),ka.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ka.set(e,a),d||IM(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Rl(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Al(e){return'href="'+he(e)+'"'}function nu(e){return'link[rel="stylesheet"]['+e+"]"}function zv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function IM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ai(n,"link",a),Y(n),e.head.appendChild(n))}function Rl(e){return'[src="'+he(e)+'"]'}function iu(e){return"script[async]"+e}function Hv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+he(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),Ai(o,"style",u),Hf(o,a.precedence,e),n.instance=o;case"stylesheet":u=Al(a.href);var d=e.querySelector(nu(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=zv(a),(u=ka.get(u))&&xm(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var S=d;return S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Ai(d,"link",o),n.state.loading|=4,Hf(d,a.precedence,e),n.instance=d;case"script":return d=Rl(a.src),(u=e.querySelector(iu(d)))?(n.instance=u,Y(u),u):(o=a,(u=ka.get(d))&&(o=_({},a),Sm(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),Ai(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Hf(o,a.precedence,e));return n.instance}function Hf(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function xm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Sm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gf=null;function Gv(e,n,a){if(Gf===null){var o=new Map,u=Gf=new Map;u.set(a,o)}else u=Gf,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Oa]||d[gn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function Vv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function PM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function FM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Al(o.href),d=n.querySelector(nu(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Vf.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Y(d);return}d=n.ownerDocument||n,o=zv(o),(u=ka.get(u))&&xm(o,u),d=d.createElement("link"),Y(d);var S=d;S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Ai(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vf.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ym=0;function BM(e,n){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&ym===0&&(ym=62500*vM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>ym?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Vf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kf=null;function Xf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kf=new Map,n.forEach(zM,e),kf=null,Vf.call(e))}function zM(e,n){if(!(n.state.loading&4)){var a=kf.get(e);if(a)var o=a.get(null);else{a=new Map,kf.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=Vf.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var au={$$typeof:L,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function HM(e,n,a,o,u,d,S,A,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Xv(e,n,a,o,u,d,S,A,V,ot,Et,At){return e=new HM(e,n,a,S,V,ot,Et,At,A),n=1,d===!0&&(n|=24),d=Qe(3,null,null,n),e.current=d,d.stateNode=e,n=tp(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ap(d),e}function Wv(e){return e?(e=Ne,e):Ne}function Yv(e,n,a,o,u,d){u=Wv(u),o.context===null?o.context=u:o.pendingContext=u,o=Ar(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Rr(e,o,n),a!==null&&(sa(a,e,n),Pc(a,e,n))}function qv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Mm(e,n){qv(e,n),(e=e.alternate)&&qv(e,n)}function jv(e){if(e.tag===13||e.tag===31){var n=Nn(e,67108864);n!==null&&sa(n,e,67108864),Mm(e,67108864)}}function Zv(e){if(e.tag===13||e.tag===31){var n=wa();n=Kn(n);var a=Nn(e,n);a!==null&&sa(a,e,n),Mm(e,n)}}var Wf=!0;function GM(e,n,a,o){var u=U.T;U.T=null;var d=B.p;try{B.p=2,Em(e,n,a,o)}finally{B.p=d,U.T=u}}function VM(e,n,a,o){var u=U.T;U.T=null;var d=B.p;try{B.p=8,Em(e,n,a,o)}finally{B.p=d,U.T=u}}function Em(e,n,a,o){if(Wf){var u=bm(o);if(u===null)cm(e,n,o,Yf,a),Qv(e,o);else if(XM(u,e,n,a,o))o.stopPropagation();else if(Qv(e,o),n&4&&-1<kM.indexOf(e)){for(;u!==null;){var d=$a(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=ft(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var V=1<<31-wt(S);A.entanglements[1]|=V,S&=~V}As(d),(en&6)===0&&(Cf=b()+500,Jc(0))}}break;case 31:case 13:A=Nn(d,2),A!==null&&sa(A,d,2),Df(),Mm(d,2)}if(d=bm(o),d===null&&cm(e,n,o,Yf,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else cm(e,n,o,null,a)}}function bm(e){return e=cc(e),Tm(e)}var Yf=null;function Tm(e){if(Yf=null,e=Ja(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yf=e,null}function Kv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case yt:return 2;case Ct:return 8;case xt:case Jt:return 32;case It:return 268435456;default:return 32}default:return 32}}var Am=!1,Br=null,zr=null,Hr=null,su=new Map,ru=new Map,Gr=[],kM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qv(e,n){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":su.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ru.delete(n.pointerId)}}function ou(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=$a(n),n!==null&&jv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function XM(e,n,a,o,u){switch(n){case"focusin":return Br=ou(Br,e,n,a,o,u),!0;case"dragenter":return zr=ou(zr,e,n,a,o,u),!0;case"mouseover":return Hr=ou(Hr,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return su.set(d,ou(su.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,ru.set(d,ou(ru.get(d)||null,e,n,a,o,u)),!0}return!1}function Jv(e){var n=Ja(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Gi(e.priority,function(){Zv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Gi(e.priority,function(){Zv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qf(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=bm(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);lc=o,a.target.dispatchEvent(o),lc=null}else return n=$a(a),n!==null&&jv(n),e.blockedOn=a,!1;n.shift()}return!0}function $v(e,n,a){qf(e)&&a.delete(n)}function WM(){Am=!1,Br!==null&&qf(Br)&&(Br=null),zr!==null&&qf(zr)&&(zr=null),Hr!==null&&qf(Hr)&&(Hr=null),su.forEach($v),ru.forEach($v)}function jf(e,n){e.blockedOn===n&&(e.blockedOn=null,Am||(Am=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,WM)))}var Zf=null;function tx(e){Zf!==e&&(Zf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Zf===e&&(Zf=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Tm(o||a)===null)continue;break}var d=$a(a);d!==null&&(e.splice(n,3),n-=3,bp(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cl(e){function n(V){return jf(V,e)}Br!==null&&jf(Br,e),zr!==null&&jf(zr,e),Hr!==null&&jf(Hr,e),su.forEach(n),ru.forEach(n);for(var a=0;a<Gr.length;a++){var o=Gr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Gr.length&&(a=Gr[0],a.blockedOn===null);)Jv(a),a.blockedOn===null&&Gr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[_n]||null;if(typeof d=="function")S||tx(a);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[_n]||null)A=S.formAction;else if(Tm(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),tx(a)}}}function ex(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Rm(e){this._internalRoot=e}Kf.prototype.render=Rm.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=wa();Yv(a,o,e,n,null,null)},Kf.prototype.unmount=Rm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yv(e.current,2,null,e,null,null),Df(),n[wn]=null}};function Kf(e){this._internalRoot=e}Kf.prototype.unstable_scheduleHydration=function(e){if(e){var n=Tn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Gr.length&&n!==0&&n<Gr[a].priority;a++);Gr.splice(a,0,e),a===0&&Jv(e)}};var nx=t.version;if(nx!=="19.2.4")throw Error(s(527,nx,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var YM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qf.isDisabled&&Qf.supportsFiber)try{H=Qf.inject(YM),st=Qf}catch{}}return cu.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=c_,d=u_,S=f_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Xv(e,1,!1,null,null,a,o,null,u,d,S,ex),e[wn]=n.current,lm(e),new Rm(n)},cu.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=c_,S=u_,A=f_,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Xv(e,1,!0,n,a??null,o,u,V,d,S,A,ex),n.context=Wv(null),a=n.current,o=wa(),o=Kn(o),u=Ar(o),u.callback=null,Rr(a,u,o),a=o,n.current.lanes=a,Cn(n,a),As(n),e[wn]=n.current,lm(e),new Kf(n)},cu.version="19.2.4",cu}var dx;function nE(){if(dx)return Dm.exports;dx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Dm.exports=eE(),Dm.exports}var iE=nE();const Th="183",xS=0,v0=1,SS=2,yS=0,Oo=1,MS=2,jl=3,lr=0,Bi=1,jn=2,Ns=0,Io=1,x0=2,S0=3,y0=4,ES=5,Qr=100,bS=101,TS=102,AS=103,RS=104,CS=200,wS=201,DS=202,NS=203,Id=204,Pd=205,LS=206,US=207,OS=208,IS=209,PS=210,FS=211,BS=212,zS=213,HS=214,Fd=0,Bd=1,zd=2,Po=3,Hd=4,Gd=5,Vd=6,kd=7,Ah=0,GS=1,VS=2,fs=0,I0=1,P0=2,F0=3,Rh=4,B0=5,z0=6,H0=7,G0=300,to=301,Fo=302,wd=303,Dd=304,Bu=306,Ql=1e3,Ds=1001,Xd=1002,Si=1003,kS=1004,Eu=1005,Zn=1006,Nd=1007,rr=1008,oa=1009,V0=1010,k0=1011,Jl=1012,Ch=1013,hs=1014,ja=1015,Ls=1016,wh=1017,Dh=1018,$l=1020,X0=35902,W0=35899,Y0=1021,q0=1022,Za=1023,Us=1026,Jr=1027,Nh=1028,Lh=1029,Bo=1030,Uh=1031,Oh=1033,Ru=33776,Cu=33777,wu=33778,Du=33779,Wd=35840,Yd=35841,qd=35842,jd=35843,Zd=36196,Kd=37492,Qd=37496,Jd=37488,$d=37489,th=37490,eh=37491,nh=37808,ih=37809,ah=37810,sh=37811,rh=37812,oh=37813,lh=37814,ch=37815,uh=37816,fh=37817,dh=37818,hh=37819,ph=37820,mh=37821,gh=36492,_h=36494,vh=36495,xh=36283,Sh=36284,yh=36285,Mh=36286,XS=3200,Ih=0,WS=1,sr="",ui="srgb",zo="srgb-linear",Uu="linear",rn="srgb",wo=7680,M0=519,YS=512,qS=513,jS=514,Ph=515,ZS=516,KS=517,Fh=518,QS=519,E0=35044,b0="300 es",us=2e3,tc=2001;function aE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Eh(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function JS(){const r=Eh("canvas");return r.style.display="block",r}const hx={};function T0(...r){const t="THREE."+r.shift();console.log(t,...r)}function $S(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ge(...r){r=$S(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ye(...r){r=$S(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Ou(...r){const t=r.join(" ");t in hx||(hx[t]=!0,ge(...r))}function sE(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const rE={[Fd]:Bd,[zd]:Vd,[Hd]:kd,[Po]:Gd,[Bd]:Fd,[Vd]:zd,[kd]:Hd,[Gd]:Po};class Ho{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let px=1234567;const Nu=Math.PI/180,ec=180/Math.PI;function ac(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pi[r&255]+Pi[r>>8&255]+Pi[r>>16&255]+Pi[r>>24&255]+"-"+Pi[t&255]+Pi[t>>8&255]+"-"+Pi[t>>16&15|64]+Pi[t>>24&255]+"-"+Pi[i&63|128]+Pi[i>>8&255]+"-"+Pi[i>>16&255]+Pi[i>>24&255]+Pi[s&255]+Pi[s>>8&255]+Pi[s>>16&255]+Pi[s>>24&255]).toLowerCase()}function Le(r,t,i){return Math.max(t,Math.min(i,r))}function j0(r,t){return(r%t+t)%t}function oE(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function lE(r,t,i){return r!==t?(i-r)/(t-r):0}function Lu(r,t,i){return(1-i)*r+i*t}function cE(r,t,i,s){return Lu(r,t,1-Math.exp(-i*s))}function uE(r,t=1){return t-Math.abs(j0(r,t*2)-t)}function fE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function dE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function hE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function pE(r,t){return r+Math.random()*(t-r)}function mE(r){return r*(.5-Math.random())}function gE(r){r!==void 0&&(px=r);let t=px+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _E(r){return r*Nu}function vE(r){return r*ec}function xE(r){return(r&r-1)===0&&r!==0}function SE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ME(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((t+s)/2),v=f((t+s)/2),_=c((t-s)/2),g=f((t-s)/2),x=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(h*v,m*_,m*g,h*p);break;case"YZY":r.set(m*g,h*v,m*_,h*p);break;case"ZXZ":r.set(m*_,m*g,h*v,h*p);break;case"XZX":r.set(h*v,m*E,m*x,h*p);break;case"YXY":r.set(m*x,h*v,m*E,h*p);break;case"ZYZ":r.set(m*E,m*x,h*v,h*p);break;default:ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Yl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ke={DEG2RAD:Nu,RAD2DEG:ec,generateUUID:ac,clamp:Le,euclideanModulo:j0,mapLinear:oE,inverseLerp:lE,lerp:Lu,damp:cE,pingpong:uE,smoothstep:fE,smootherstep:dE,randInt:hE,randFloat:pE,randFloatSpread:mE,seededRandom:gE,degToRad:_E,radToDeg:vE,isPowerOfTwo:xE,ceilPowerOfTwo:SE,floorPowerOfTwo:yE,setQuaternionFromProperEuler:ME,normalize:Wi,denormalize:Yl};class Ce{constructor(t=0,i=0){Ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],g=c[f+0],x=c[f+1],E=c[f+2],w=c[f+3];if(_!==w||m!==g||p!==x||v!==E){let M=m*g+p*x+v*E+_*w;M<0&&(g=-g,x=-x,E=-E,w=-w,M=-M);let y=1-h;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);y=Math.sin(y*C)/L,h=Math.sin(h*C)/L,m=m*y+g*h,p=p*y+x*h,v=v*y+E*h,_=_*y+w*h}else{m=m*y+g*h,p=p*y+x*h,v=v*y+E*h,_=_*y+w*h;const C=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=C,p*=C,v*=C,_*=C}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=c[f],g=c[f+1],x=c[f+2],E=c[f+3];return t[i]=h*E+v*_+m*x-p*g,t[i+1]=m*E+v*g+p*_-h*x,t[i+2]=p*E+v*x+h*g-m*_,t[i+3]=v*E-h*_-m*g-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),_=h(c/2),g=m(s/2),x=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*v*_+p*x*E,this._y=p*x*_-g*v*E,this._z=p*v*E+g*x*_,this._w=p*v*_-g*x*E;break;case"YXZ":this._x=g*v*_+p*x*E,this._y=p*x*_-g*v*E,this._z=p*v*E-g*x*_,this._w=p*v*_+g*x*E;break;case"ZXY":this._x=g*v*_-p*x*E,this._y=p*x*_+g*v*E,this._z=p*v*E+g*x*_,this._w=p*v*_-g*x*E;break;case"ZYX":this._x=g*v*_-p*x*E,this._y=p*x*_+g*v*E,this._z=p*v*E-g*x*_,this._w=p*v*_+g*x*E;break;case"YZX":this._x=g*v*_+p*x*E,this._y=p*x*_+g*v*E,this._z=p*v*E-g*x*_,this._w=p*v*_-g*x*E;break;case"XZY":this._x=g*v*_-p*x*E,this._y=p*x*_-g*v*E,this._z=p*v*E+g*x*_,this._w=p*v*_+g*x*E;break;default:ge("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],g=s+h+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-m)*x,this._y=(c-p)*x,this._z=(f-l)*x}else if(s>h&&s>_){const x=2*Math.sqrt(1+s-h-_);this._w=(v-m)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+p)/x}else if(h>_){const x=2*Math.sqrt(1+h-s-_);this._w=(c-p)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(m+v)/x}else{const x=2*Math.sqrt(1+_-s-h);this._w=(f-l)/x,this._x=(c+p)/x,this._y=(m+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-s*p,this._z=c*v+f*p+s*m-l*h,this._w=f*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(mx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(mx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),v=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-h*v,this.y=s+m*v+h*p-c*_,this.z=l+m*_+c*v-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Om.copy(this).projectOnVector(t),this.sub(Om)}reflect(t){return this.sub(Om.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Om=new q,mx=new cr;class Ee{constructor(t,i,s,l,c,f,h,m,p){Ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],v=s[4],_=s[7],g=s[2],x=s[5],E=s[8],w=l[0],M=l[3],y=l[6],C=l[1],L=l[4],D=l[7],I=l[2],z=l[5],F=l[8];return c[0]=f*w+h*C+m*I,c[3]=f*M+h*L+m*z,c[6]=f*y+h*D+m*F,c[1]=p*w+v*C+_*I,c[4]=p*M+v*L+_*z,c[7]=p*y+v*D+_*F,c[2]=g*w+x*C+E*I,c[5]=g*M+x*L+E*z,c[8]=g*y+x*D+E*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*f*v-i*h*p-s*c*v+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=v*f-h*p,g=h*m-v*c,x=p*c-f*m,E=i*_+s*g+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=_*w,t[1]=(l*p-v*s)*w,t[2]=(h*s-l*f)*w,t[3]=g*w,t[4]=(v*i-l*m)*w,t[5]=(l*c-h*i)*w,t[6]=x*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Im.makeScale(t,i)),this}rotate(t){return this.premultiply(Im.makeRotation(-t)),this}translate(t,i){return this.premultiply(Im.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Im=new Ee,gx=new Ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_x=new Ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EE(){const r={enabled:!0,workingColorSpace:zo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===rn&&(l.r=or(l.r),l.g=or(l.g),l.b=or(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===rn&&(l.r=Kl(l.r),l.g=Kl(l.g),l.b=Kl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===sr?Uu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ou("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ou("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[zo]:{primaries:t,whitePoint:s,transfer:Uu,toXYZ:gx,fromXYZ:_x,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:s,transfer:rn,toXYZ:gx,fromXYZ:_x,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const qe=EE();function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wl;class ty{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{wl===void 0&&(wl=Eh("canvas")),wl.width=t.width,wl.height=t.height;const l=wl.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=wl}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Eh("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=or(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(or(i[s]/255)*255):i[s]=or(i[s]);return{data:i,width:t.width,height:t.height}}else return ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bE=0;class Bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=ac(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Pm(l[f].image)):c.push(Pm(l[f]))}else c=Pm(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Pm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ty.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ge("Texture: Unable to serialize Texture."),{})}let TE=0;const Fm=new q;class yi extends Ho{constructor(t=yi.DEFAULT_IMAGE,i=yi.DEFAULT_MAPPING,s=Ds,l=Ds,c=Zn,f=rr,h=Za,m=oa,p=yi.DEFAULT_ANISOTROPY,v=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=ac(),this.name="",this.source=new Bh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fm).x}get height(){return this.source.getSize(Fm).y}get depth(){return this.source.getSize(Fm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ge(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ge(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==G0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ql:t.x=t.x-Math.floor(t.x);break;case Ds:t.x=t.x<0?0:1;break;case Xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ql:t.y=t.y-Math.floor(t.y);break;case Ds:t.y=t.y<0?0:1;break;case Xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=G0;yi.DEFAULT_ANISOTROPY=1;class Gn{constructor(t=0,i=0,s=0,l=1){Gn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],_=m[8],g=m[1],x=m[5],E=m[9],w=m[2],M=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(_-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(x+1)/2,I=(y+1)/2,z=(v+g)/4,F=(_+w)/4,T=(E+M)/4;return L>D&&L>I?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=z/s,c=F/s):D>I?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=z/l,c=T/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=F/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-E)*(M-E)+(_-w)*(_-w)+(g-v)*(g-v));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(_-w)/C,this.z=(g-v)/C,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this.w=Le(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this.w=Le(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ey extends Ho{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Gn(0,0,t,i),this.scissorTest=!1,this.viewport=new Gn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new yi(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Bh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends ey{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Z0 extends yi{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends yi{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(t,i,s,l,c,f,h,m,p,v,_,g,x,E,w,M){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,v,_,g,x,E,w,M)}set(t,i,s,l,c,f,h,m,p,v,_,g,x,E,w,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=v,y[10]=_,y[14]=g,y[3]=x,y[7]=E,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Dl.setFromMatrixColumn(t,0).length(),c=1/Dl.setFromMatrixColumn(t,1).length(),f=1/Dl.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const g=f*v,x=f*_,E=h*v,w=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=x+E*p,i[5]=g-w*p,i[9]=-h*m,i[2]=w-g*p,i[6]=E+x*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*v,x=m*_,E=p*v,w=p*_;i[0]=g+w*h,i[4]=E*h-x,i[8]=f*p,i[1]=f*_,i[5]=f*v,i[9]=-h,i[2]=x*h-E,i[6]=w+g*h,i[10]=f*m}else if(t.order==="ZXY"){const g=m*v,x=m*_,E=p*v,w=p*_;i[0]=g-w*h,i[4]=-f*_,i[8]=E+x*h,i[1]=x+E*h,i[5]=f*v,i[9]=w-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const g=f*v,x=f*_,E=h*v,w=h*_;i[0]=m*v,i[4]=E*p-x,i[8]=g*p+w,i[1]=m*_,i[5]=w*p+g,i[9]=x*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,x=f*p,E=h*m,w=h*p;i[0]=m*v,i[4]=w-g*_,i[8]=E*_+x,i[1]=_,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=x*_+E,i[10]=g-w*_}else if(t.order==="XZY"){const g=f*m,x=f*p,E=h*m,w=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=g*_+w,i[5]=f*v,i[9]=x*_-E,i[2]=E*_-x,i[6]=h*v,i[10]=w*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AE,t,RE)}lookAt(t,i,s){const l=this.elements;return Da.subVectors(t,i),Da.lengthSq()===0&&(Da.z=1),Da.normalize(),kr.crossVectors(s,Da),kr.lengthSq()===0&&(Math.abs(s.z)===1?Da.x+=1e-4:Da.z+=1e-4,Da.normalize(),kr.crossVectors(s,Da)),kr.normalize(),Jf.crossVectors(Da,kr),l[0]=kr.x,l[4]=Jf.x,l[8]=Da.x,l[1]=kr.y,l[5]=Jf.y,l[9]=Da.y,l[2]=kr.z,l[6]=Jf.z,l[10]=Da.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],v=s[1],_=s[5],g=s[9],x=s[13],E=s[2],w=s[6],M=s[10],y=s[14],C=s[3],L=s[7],D=s[11],I=s[15],z=l[0],F=l[4],T=l[8],N=l[12],ht=l[1],G=l[5],J=l[9],et=l[13],nt=l[2],K=l[6],U=l[10],B=l[14],ut=l[3],vt=l[7],Nt=l[11],P=l[15];return c[0]=f*z+h*ht+m*nt+p*ut,c[4]=f*F+h*G+m*K+p*vt,c[8]=f*T+h*J+m*U+p*Nt,c[12]=f*N+h*et+m*B+p*P,c[1]=v*z+_*ht+g*nt+x*ut,c[5]=v*F+_*G+g*K+x*vt,c[9]=v*T+_*J+g*U+x*Nt,c[13]=v*N+_*et+g*B+x*P,c[2]=E*z+w*ht+M*nt+y*ut,c[6]=E*F+w*G+M*K+y*vt,c[10]=E*T+w*J+M*U+y*Nt,c[14]=E*N+w*et+M*B+y*P,c[3]=C*z+L*ht+D*nt+I*ut,c[7]=C*F+L*G+D*K+I*vt,c[11]=C*T+L*J+D*U+I*Nt,c[15]=C*N+L*et+D*B+I*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],v=t[2],_=t[6],g=t[10],x=t[14],E=t[3],w=t[7],M=t[11],y=t[15],C=m*x-p*g,L=h*x-p*_,D=h*g-m*_,I=f*x-p*v,z=f*g-m*v,F=f*_-h*v;return i*(w*C-M*L+y*D)-s*(E*C-M*I+y*z)+l*(E*L-w*I+y*F)-c*(E*D-w*z+M*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=t[9],g=t[10],x=t[11],E=t[12],w=t[13],M=t[14],y=t[15],C=i*h-s*f,L=i*m-l*f,D=i*p-c*f,I=s*m-l*h,z=s*p-c*h,F=l*p-c*m,T=v*w-_*E,N=v*M-g*E,ht=v*y-x*E,G=_*M-g*w,J=_*y-x*w,et=g*y-x*M,nt=C*et-L*J+D*G+I*ht-z*N+F*T;if(nt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/nt;return t[0]=(h*et-m*J+p*G)*K,t[1]=(l*J-s*et-c*G)*K,t[2]=(w*F-M*z+y*I)*K,t[3]=(g*z-_*F-x*I)*K,t[4]=(m*ht-f*et-p*N)*K,t[5]=(i*et-l*ht+c*N)*K,t[6]=(M*D-E*F-y*L)*K,t[7]=(v*F-g*D+x*L)*K,t[8]=(f*J-h*ht+p*T)*K,t[9]=(s*ht-i*J-c*T)*K,t[10]=(E*z-w*D+y*C)*K,t[11]=(_*D-v*z-x*C)*K,t[12]=(h*N-f*G-m*T)*K,t[13]=(i*G-s*N+l*T)*K,t[14]=(w*L-E*I-M*C)*K,t[15]=(v*I-_*L+g*C)*K,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,v=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,_=h+h,g=c*p,x=c*v,E=c*_,w=f*v,M=f*_,y=h*_,C=m*p,L=m*v,D=m*_,I=s.x,z=s.y,F=s.z;return l[0]=(1-(w+y))*I,l[1]=(x+D)*I,l[2]=(E-L)*I,l[3]=0,l[4]=(x-D)*z,l[5]=(1-(g+y))*z,l[6]=(M+C)*z,l[7]=0,l[8]=(E+L)*F,l[9]=(M-C)*F,l[10]=(1-(g+w))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Dl.set(l[0],l[1],l[2]).length();const h=Dl.set(l[4],l[5],l[6]).length(),m=Dl.set(l[8],l[9],l[10]).length();c<0&&(f=-f),rs.copy(this);const p=1/f,v=1/h,_=1/m;return rs.elements[0]*=p,rs.elements[1]*=p,rs.elements[2]*=p,rs.elements[4]*=v,rs.elements[5]*=v,rs.elements[6]*=v,rs.elements[8]*=_,rs.elements[9]*=_,rs.elements[10]*=_,i.setFromRotationMatrix(rs),s.x=f,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,f,h=us,m=!1){const p=this.elements,v=2*c/(i-t),_=2*c/(s-l),g=(i+t)/(i-t),x=(s+l)/(s-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(h===us)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===tc)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=us,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),g=-(i+t)/(i-t),x=-(s+l)/(s-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(h===us)E=-2/(f-c),w=-(f+c)/(f-c);else if(h===tc)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Dl=new q,rs=new mn,AE=new q(0,0,0),RE=new q(1,1,1),kr=new q,Jf=new q,Da=new q,vx=new mn,xx=new cr;class Ua{constructor(t=0,i=0,s=0,l=Ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],g=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Le(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Le(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Le(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,x),this._y=0);break;default:ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return vx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return xx.setFromEuler(this),this.setFromQuaternion(xx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ua.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let CE=0;const Sx=new q,Nl=new cr,Qs=new mn,$f=new q,uu=new q,wE=new q,DE=new cr,yx=new q(1,0,0),Mx=new q(0,1,0),Ex=new q(0,0,1),bx={type:"added"},NE={type:"removed"},Ll={type:"childadded",child:null},Bm={type:"childremoved",child:null};class Mn extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new q,i=new Ua,s=new cr,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new Ee}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nl.setFromAxisAngle(t,i),this.quaternion.multiply(Nl),this}rotateOnWorldAxis(t,i){return Nl.setFromAxisAngle(t,i),this.quaternion.premultiply(Nl),this}rotateX(t){return this.rotateOnAxis(yx,t)}rotateY(t){return this.rotateOnAxis(Mx,t)}rotateZ(t){return this.rotateOnAxis(Ex,t)}translateOnAxis(t,i){return Sx.copy(t).applyQuaternion(this.quaternion),this.position.add(Sx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(yx,t)}translateY(t){return this.translateOnAxis(Mx,t)}translateZ(t){return this.translateOnAxis(Ex,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qs.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?$f.copy(t):$f.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),uu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qs.lookAt(uu,$f,this.up):Qs.lookAt($f,uu,this.up),this.quaternion.setFromRotationMatrix(Qs),l&&(Qs.extractRotation(l.matrixWorld),Nl.setFromRotationMatrix(Qs),this.quaternion.premultiply(Nl.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bx),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(NE),Bm.child=t,this.dispatchEvent(Bm),Bm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bx),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uu,t,wE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uu,DE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),v=f(t.images),_=f(t.shapes),g=f(t.skeletons),x=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Lo extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LE={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),y=this._getHandJoint(p,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),x=.02,E=.005;p.inputState.pinching&&g>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(LE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Lo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const iy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},td={h:0,s:0,l:0};function zm(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=qe.workingColorSpace){return this.r=t,this.g=i,this.b=s,qe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=qe.workingColorSpace){if(t=j0(t,1),i=Le(i,0,1),s=Le(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=zm(f,c,t+1/3),this.g=zm(f,c,t),this.b=zm(f,c,t-1/3)}return qe.colorSpaceToWorking(this,l),this}setStyle(t,i=ui){function s(c){c!==void 0&&parseFloat(c)<1&&ge("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ge("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ge("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const s=iy[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ge("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=Kl(t.r),this.g=Kl(t.g),this.b=Kl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return qe.workingToColorSpace(Fi.copy(this),t),Math.round(Le(Fi.r*255,0,255))*65536+Math.round(Le(Fi.g*255,0,255))*256+Math.round(Le(Fi.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=qe.workingColorSpace){qe.workingToColorSpace(Fi.copy(this),i);const s=Fi.r,l=Fi.g,c=Fi.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=v<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=qe.workingColorSpace){return qe.workingToColorSpace(Fi.copy(this),i),t.r=Fi.r,t.g=Fi.g,t.b=Fi.b,t}getStyle(t=ui){qe.workingToColorSpace(Fi.copy(this),t);const i=Fi.r,s=Fi.g,l=Fi.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Xr),this.setHSL(Xr.h+t,Xr.s+i,Xr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Xr),t.getHSL(td);const s=Lu(Xr.h,td.h,i),l=Lu(Xr.s,td.s,i),c=Lu(Xr.l,td.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fi=new fe;fe.NAMES=iy;class Iu{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=i,this.far=s}clone(){return new Iu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class K0 extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ua,this.environmentIntensity=1,this.environmentRotation=new Ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const os=new q,Js=new q,Hm=new q,$s=new q,Ul=new q,Ol=new q,Tx=new q,Gm=new q,Vm=new q,km=new q,Xm=new Gn,Wm=new Gn,Ym=new Gn;class qa{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),os.subVectors(t,i),l.cross(os);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){os.subVectors(l,i),Js.subVectors(s,i),Hm.subVectors(t,i);const f=os.dot(os),h=os.dot(Js),m=os.dot(Hm),p=Js.dot(Js),v=Js.dot(Hm),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const g=1/_,x=(p*m-h*v)*g,E=(f*v-h*m)*g;return c.set(1-x-E,E,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,$s)===null?!1:$s.x>=0&&$s.y>=0&&$s.x+$s.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,$s)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,$s.x),m.addScaledVector(f,$s.y),m.addScaledVector(h,$s.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Xm.setScalar(0),Wm.setScalar(0),Ym.setScalar(0),Xm.fromBufferAttribute(t,i),Wm.fromBufferAttribute(t,s),Ym.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Xm,c.x),f.addScaledVector(Wm,c.y),f.addScaledVector(Ym,c.z),f}static isFrontFacing(t,i,s,l){return os.subVectors(s,i),Js.subVectors(t,i),os.cross(Js).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return os.subVectors(this.c,this.b),Js.subVectors(this.a,this.b),os.cross(Js).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return qa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return qa.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return qa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Ul.subVectors(l,s),Ol.subVectors(c,s),Gm.subVectors(t,s);const m=Ul.dot(Gm),p=Ol.dot(Gm);if(m<=0&&p<=0)return i.copy(s);Vm.subVectors(t,l);const v=Ul.dot(Vm),_=Ol.dot(Vm);if(v>=0&&_<=v)return i.copy(l);const g=m*_-v*p;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Ul,f);km.subVectors(t,c);const x=Ul.dot(km),E=Ol.dot(km);if(E>=0&&x<=E)return i.copy(c);const w=x*p-m*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Ol,h);const M=v*E-x*_;if(M<=0&&_-v>=0&&x-E>=0)return Tx.subVectors(c,l),h=(_-v)/(_-v+(x-E)),i.copy(l).addScaledVector(Tx,h);const y=1/(M+w+g);return f=w*y,h=g*y,i.copy(s).addScaledVector(Ul,f).addScaledVector(Ol,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class eo{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ls.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ls.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ls.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,ls):ls.fromBufferAttribute(c,f),ls.applyMatrix4(t.matrixWorld),this.expandByPoint(ls);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ed.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ed.copy(s.boundingBox)),ed.applyMatrix4(t.matrixWorld),this.union(ed)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ls),ls.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fu),nd.subVectors(this.max,fu),Il.subVectors(t.a,fu),Pl.subVectors(t.b,fu),Fl.subVectors(t.c,fu),Wr.subVectors(Pl,Il),Yr.subVectors(Fl,Pl),So.subVectors(Il,Fl);let i=[0,-Wr.z,Wr.y,0,-Yr.z,Yr.y,0,-So.z,So.y,Wr.z,0,-Wr.x,Yr.z,0,-Yr.x,So.z,0,-So.x,-Wr.y,Wr.x,0,-Yr.y,Yr.x,0,-So.y,So.x,0];return!qm(i,Il,Pl,Fl,nd)||(i=[1,0,0,0,1,0,0,0,1],!qm(i,Il,Pl,Fl,nd))?!1:(id.crossVectors(Wr,Yr),i=[id.x,id.y,id.z],qm(i,Il,Pl,Fl,nd))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ls).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ls).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const tr=[new q,new q,new q,new q,new q,new q,new q,new q],ls=new q,ed=new eo,Il=new q,Pl=new q,Fl=new q,Wr=new q,Yr=new q,So=new q,fu=new q,nd=new q,id=new q,yo=new q;function qm(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){yo.fromArray(r,c);const h=l.x*Math.abs(yo.x)+l.y*Math.abs(yo.y)+l.z*Math.abs(yo.z),m=t.dot(yo),p=i.dot(yo),v=s.dot(yo);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const ci=new q,ad=new Ce;let UE=0;class Ka{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=E0,this.updateRanges=[],this.gpuType=ja,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ad.fromBufferAttribute(this,i),ad.applyMatrix3(t),this.setXY(i,ad.x,ad.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ci.fromBufferAttribute(this,i),ci.applyMatrix3(t),this.setXYZ(i,ci.x,ci.y,ci.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)ci.fromBufferAttribute(this,i),ci.applyMatrix4(t),this.setXYZ(i,ci.x,ci.y,ci.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)ci.fromBufferAttribute(this,i),ci.applyNormalMatrix(t),this.setXYZ(i,ci.x,ci.y,ci.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)ci.fromBufferAttribute(this,i),ci.transformDirection(t),this.setXYZ(i,ci.x,ci.y,ci.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Yl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Wi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Yl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Wi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Yl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Wi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Yl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Wi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Yl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Wi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Wi(i,this.array),s=Wi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Wi(i,this.array),s=Wi(s,this.array),l=Wi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Wi(i,this.array),s=Wi(s,this.array),l=Wi(l,this.array),c=Wi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==E0&&(t.usage=this.usage),t}}class Q0 extends Ka{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class J0 extends Ka{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Sn extends Ka{constructor(t,i,s){super(new Float32Array(t),i,s)}}const OE=new eo,du=new q,jm=new q;class sc{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):OE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;du.subVectors(t,this.center);const i=du.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(du,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(du.copy(t.center).add(jm)),this.expandByPoint(du.copy(t.center).sub(jm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let IE=0;const Xa=new mn,Zm=new Mn,Bl=new q,Na=new eo,hu=new eo,xi=new q;class zi extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(aE(t)?J0:Q0)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Ee().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xa.makeRotationFromQuaternion(t),this.applyMatrix4(Xa),this}rotateX(t){return Xa.makeRotationX(t),this.applyMatrix4(Xa),this}rotateY(t){return Xa.makeRotationY(t),this.applyMatrix4(Xa),this}rotateZ(t){return Xa.makeRotationZ(t),this.applyMatrix4(Xa),this}translate(t,i,s){return Xa.makeTranslation(t,i,s),this.applyMatrix4(Xa),this}scale(t,i,s){return Xa.makeScale(t,i,s),this.applyMatrix4(Xa),this}lookAt(t){return Zm.lookAt(t),Zm.updateMatrix(),this.applyMatrix4(Zm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bl).negate(),this.translate(Bl.x,Bl.y,Bl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Sn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Na.setFromBufferAttribute(c),this.morphTargetsRelative?(xi.addVectors(this.boundingBox.min,Na.min),this.boundingBox.expandByPoint(xi),xi.addVectors(this.boundingBox.max,Na.max),this.boundingBox.expandByPoint(xi)):(this.boundingBox.expandByPoint(Na.min),this.boundingBox.expandByPoint(Na.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(Na.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];hu.setFromBufferAttribute(h),this.morphTargetsRelative?(xi.addVectors(Na.min,hu.min),Na.expandByPoint(xi),xi.addVectors(Na.max,hu.max),Na.expandByPoint(xi)):(Na.expandByPoint(hu.min),Na.expandByPoint(hu.max))}Na.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)xi.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xi));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)xi.fromBufferAttribute(h,p),m&&(Bl.fromBufferAttribute(t,p),xi.add(Bl)),l=Math.max(l,s.distanceToSquared(xi))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ka(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new q,m[T]=new q;const p=new q,v=new q,_=new q,g=new Ce,x=new Ce,E=new Ce,w=new q,M=new q;function y(T,N,ht){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,N),_.fromBufferAttribute(s,ht),g.fromBufferAttribute(c,T),x.fromBufferAttribute(c,N),E.fromBufferAttribute(c,ht),v.sub(p),_.sub(p),x.sub(g),E.sub(g);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(w.copy(v).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(G),M.copy(_).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(G),h[T].add(w),h[N].add(w),h[ht].add(w),m[T].add(M),m[N].add(M),m[ht].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,N=C.length;T<N;++T){const ht=C[T],G=ht.start,J=ht.count;for(let et=G,nt=G+J;et<nt;et+=3)y(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const L=new q,D=new q,I=new q,z=new q;function F(T){I.fromBufferAttribute(l,T),z.copy(I);const N=h[T];L.copy(N),L.sub(I.multiplyScalar(I.dot(N))).normalize(),D.crossVectors(z,N);const G=D.dot(m[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,G)}for(let T=0,N=C.length;T<N;++T){const ht=C[T],G=ht.start,J=ht.count;for(let et=G,nt=G+J;et<nt;et+=3)F(t.getX(et+0)),F(t.getX(et+1)),F(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ka(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,x=s.count;g<x;g++)s.setXYZ(g,0,0,0);const l=new q,c=new q,f=new q,h=new q,m=new q,p=new q,v=new q,_=new q;if(t)for(let g=0,x=t.count;g<x;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),h.add(v),m.add(v),p.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,x=i.count;g<x;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xi.fromBufferAttribute(t,i),xi.normalize(),t.setXYZ(i,xi.x,xi.y,xi.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,_=h.normalized,g=new p.constructor(m.length*v);let x=0,E=0;for(let w=0,M=m.length;w<M;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*v;for(let y=0;y<v;y++)g[E++]=p[x++]}return new Ka(g,v,_)}if(this.index===null)return ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,_=p.length;v<_;v++){const g=p[v],x=t(g,s);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,g=p.length;_<g;_++){const x=p[_];v.push(x.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],_=c[p];for(let g=0,x=_.length;g<x;g++)v.push(_[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,v=f.length;p<v;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let PE=0;class Go extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=ac(),this.name="",this.type="Material",this.blending=Io,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Pd,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ge(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ge(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(s.blending=this.blending),this.side!==lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Id&&(s.blendSrc=this.blendSrc),this.blendDst!==Pd&&(s.blendDst=this.blendDst),this.blendEquation!==Qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const er=new q,Km=new q,sd=new q,qr=new q,Qm=new q,rd=new q,Jm=new q;class $0{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,er)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=er.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(er.copy(this.origin).addScaledVector(this.direction,i),er.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Km.copy(t).add(i).multiplyScalar(.5),sd.copy(i).sub(t).normalize(),qr.copy(this.origin).sub(Km);const c=t.distanceTo(i)*.5,f=-this.direction.dot(sd),h=qr.dot(this.direction),m=-qr.dot(sd),p=qr.lengthSq(),v=Math.abs(1-f*f);let _,g,x,E;if(v>0)if(_=f*m-h,g=f*h-m,E=c*v,_>=0)if(g>=-E)if(g<=E){const w=1/v;_*=w,g*=w,x=_*(_+f*g+2*h)+g*(f*_+g+2*m)+p}else g=c,_=Math.max(0,-(f*g+h)),x=-_*_+g*(g+2*m)+p;else g=-c,_=Math.max(0,-(f*g+h)),x=-_*_+g*(g+2*m)+p;else g<=-E?(_=Math.max(0,-(-f*c+h)),g=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+g*(g+2*m)+p):g<=E?(_=0,g=Math.min(Math.max(-c,-m),c),x=g*(g+2*m)+p):(_=Math.max(0,-(f*c+h)),g=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+g*(g+2*m)+p);else g=f>0?-c:c,_=Math.max(0,-(f*g+h)),x=-_*_+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Km).addScaledVector(sd,g),x}intersectSphere(t,i){er.subVectors(t.center,this.origin);const s=er.dot(this.direction),l=er.dot(er)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),v>=0?(c=(t.min.y-g.y)*v,f=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,f=(t.min.y-g.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-g.z)*_,m=(t.max.z-g.z)*_):(h=(t.max.z-g.z)*_,m=(t.min.z-g.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,er)!==null}intersectTriangle(t,i,s,l,c){Qm.subVectors(i,t),rd.subVectors(s,t),Jm.crossVectors(Qm,rd);let f=this.direction.dot(Jm),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;qr.subVectors(this.origin,t);const m=h*this.direction.dot(rd.crossVectors(qr,rd));if(m<0)return null;const p=h*this.direction.dot(Qm.cross(qr));if(p<0||m+p>f)return null;const v=-h*qr.dot(Jm);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Uo extends Go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ua,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ax=new mn,Mo=new $0,od=new sc,Rx=new q,ld=new q,cd=new q,ud=new q,$m=new q,fd=new q,Cx=new q,dd=new q;class Re extends Mn{constructor(t=new zi,i=new Uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){fd.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],_=c[m];v!==0&&($m.fromBufferAttribute(_,t),f?fd.addScaledVector($m,v):fd.addScaledVector($m.sub(i),v))}i.add(fd)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),od.copy(s.boundingSphere),od.applyMatrix4(c),Mo.copy(t.ray).recast(t.near),!(od.containsPoint(Mo.origin)===!1&&(Mo.intersectSphere(od,Rx)===null||Mo.origin.distanceToSquared(Rx)>(t.far-t.near)**2))&&(Ax.copy(c).invert(),Mo.copy(t.ray).applyMatrix4(Ax),!(s.boundingBox!==null&&Mo.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Mo)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,g=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=f[M.materialIndex],C=Math.max(M.start,x.start),L=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let D=C,I=L;D<I;D+=3){const z=h.getX(D),F=h.getX(D+1),T=h.getX(D+2);l=hd(this,y,t,s,p,v,_,z,F,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let M=E,y=w;M<y;M+=3){const C=h.getX(M),L=h.getX(M+1),D=h.getX(M+2);l=hd(this,f,t,s,p,v,_,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=f[M.materialIndex],C=Math.max(M.start,x.start),L=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let D=C,I=L;D<I;D+=3){const z=D,F=D+1,T=D+2;l=hd(this,y,t,s,p,v,_,z,F,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let M=E,y=w;M<y;M+=3){const C=M,L=M+1,D=M+2;l=hd(this,f,t,s,p,v,_,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function FE(r,t,i,s,l,c,f,h){let m;if(t.side===Bi?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===lr,h),m===null)return null;dd.copy(h),dd.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(dd);return p<i.near||p>i.far?null:{distance:p,point:dd.clone(),object:r}}function hd(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,ld),r.getVertexPosition(m,cd),r.getVertexPosition(p,ud);const v=FE(r,t,i,s,ld,cd,ud,Cx);if(v){const _=new q;qa.getBarycoord(Cx,ld,cd,ud,_),l&&(v.uv=qa.getInterpolatedAttribute(l,h,m,p,_,new Ce)),c&&(v.uv1=qa.getInterpolatedAttribute(c,h,m,p,_,new Ce)),f&&(v.normal=qa.getInterpolatedAttribute(f,h,m,p,_,new q),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new q,materialIndex:0};qa.getNormal(ld,cd,ud,g.normal),v.face=g,v.barycoord=_}return v}class tg extends yi{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Si,v=Si,_,g){super(null,f,h,m,p,v,l,c,_,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class A0 extends Ka{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zl=new mn,wx=new mn,pd=[],Dx=new eo,BE=new mn,pu=new Re,mu=new sc;class ay extends Re{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new A0(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,BE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new eo),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,zl),Dx.copy(t.boundingBox).applyMatrix4(zl),this.boundingBox.union(Dx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new sc),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,zl),mu.copy(t.boundingSphere).applyMatrix4(zl),this.boundingSphere.union(mu)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(pu.geometry=this.geometry,pu.material=this.material,pu.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mu.copy(this.boundingSphere),mu.applyMatrix4(s),t.ray.intersectsSphere(mu)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,zl),wx.multiplyMatrices(s,zl),pu.matrixWorld=wx,pu.raycast(t,pd);for(let f=0,h=pd.length;f<h;f++){const m=pd[f];m.instanceId=c,m.object=this,i.push(m)}pd.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new A0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new tg(new Float32Array(l*this.count),l,this.count,Nh,ja));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=h,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const t0=new q,zE=new q,HE=new Ee;class Zr{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=t0.subVectors(s,i).cross(zE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(t0),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||HE.getNormalMatrix(t),l=this.coplanarPoint(t0).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Eo=new sc,GE=new Ce(.5,.5),md=new q;class Hh{constructor(t=new Zr,i=new Zr,s=new Zr,l=new Zr,c=new Zr,f=new Zr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=us,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],_=c[5],g=c[6],x=c[7],E=c[8],w=c[9],M=c[10],y=c[11],C=c[12],L=c[13],D=c[14],I=c[15];if(l[0].setComponents(p-f,x-v,y-E,I-C).normalize(),l[1].setComponents(p+f,x+v,y+E,I+C).normalize(),l[2].setComponents(p+h,x+_,y+w,I+L).normalize(),l[3].setComponents(p-h,x-_,y-w,I-L).normalize(),s)l[4].setComponents(m,g,M,D).normalize(),l[5].setComponents(p-m,x-g,y-M,I-D).normalize();else if(l[4].setComponents(p-m,x-g,y-M,I-D).normalize(),i===us)l[5].setComponents(p+m,x+g,y+M,I+D).normalize();else if(i===tc)l[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Eo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Eo)}intersectsSprite(t){Eo.center.set(0,0,0);const i=GE.distanceTo(t.center);return Eo.radius=.7071067811865476+i,Eo.applyMatrix4(t.matrixWorld),this.intersectsSphere(Eo)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(md.x=l.normal.x>0?t.max.x:t.min.x,md.y=l.normal.y>0?t.max.y:t.min.y,md.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(md)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sy extends yi{constructor(t,i,s,l,c=Zn,f=Zn,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const v=this;function _(){v.needsUpdate=!0,v._requestVideoFrameCallbackId=t.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class eg extends yi{constructor(t=[],i=to,s,l,c,f,h,m,p,v){super(t,i,s,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zl extends yi{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nc extends yi{constructor(t,i,s=hs,l,c,f,h=Si,m=Si,p,v=Us,_=1){if(v!==Us&&v!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:_};super(g,l,c,f,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ry extends nc{constructor(t,i=hs,s=to,l,c,f=Si,h=Si,m,p=Us){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,s,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ng extends yi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class no extends zi{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],_=[];let g=0,x=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(_,2));function E(w,M,y,C,L,D,I,z,F,T,N){const ht=D/F,G=I/T,J=D/2,et=I/2,nt=z/2,K=F+1,U=T+1;let B=0,ut=0;const vt=new q;for(let Nt=0;Nt<U;Nt++){const P=Nt*G-et;for(let j=0;j<K;j++){const St=j*ht-J;vt[w]=St*C,vt[M]=P*L,vt[y]=nt,p.push(vt.x,vt.y,vt.z),vt[w]=0,vt[M]=0,vt[y]=z>0?1:-1,v.push(vt.x,vt.y,vt.z),_.push(j/F),_.push(1-Nt/T),B+=1}}for(let Nt=0;Nt<T;Nt++)for(let P=0;P<F;P++){const j=g+P+K*Nt,St=g+P+K*(Nt+1),Ot=g+(P+1)+K*(Nt+1),Yt=g+(P+1)+K*Nt;m.push(j,St,Yt),m.push(St,Ot,Yt),ut+=6}h.addGroup(x,ut,N),x+=ut,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Pu extends zi{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],f=[],h=[],m=[],p=new q,v=new Ce;f.push(0,0,0),h.push(0,0,1),m.push(.5,.5);for(let _=0,g=3;_<=i;_++,g+=3){const x=s+_/i*l;p.x=t*Math.cos(x),p.y=t*Math.sin(x),f.push(p.x,p.y,p.z),h.push(0,0,1),v.x=(f[g]/t+1)/2,v.y=(f[g+1]/t+1)/2,m.push(v.x,v.y)}for(let _=1;_<=i;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new Sn(f,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fu extends zi{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],_=[],g=[],x=[];let E=0;const w=[],M=s/2;let y=0;C(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(x,2));function C(){const D=new q,I=new q;let z=0;const F=(i-t)/s;for(let T=0;T<=c;T++){const N=[],ht=T/c,G=ht*(i-t)+t;for(let J=0;J<=l;J++){const et=J/l,nt=et*m+h,K=Math.sin(nt),U=Math.cos(nt);I.x=G*K,I.y=-ht*s+M,I.z=G*U,_.push(I.x,I.y,I.z),D.set(K,F,U).normalize(),g.push(D.x,D.y,D.z),x.push(et,1-ht),N.push(E++)}w.push(N)}for(let T=0;T<l;T++)for(let N=0;N<c;N++){const ht=w[N][T],G=w[N+1][T],J=w[N+1][T+1],et=w[N][T+1];(t>0||N!==0)&&(v.push(ht,G,et),z+=3),(i>0||N!==c-1)&&(v.push(G,J,et),z+=3)}p.addGroup(y,z,0),y+=z}function L(D){const I=E,z=new Ce,F=new q;let T=0;const N=D===!0?t:i,ht=D===!0?1:-1;for(let J=1;J<=l;J++)_.push(0,M*ht,0),g.push(0,ht,0),x.push(.5,.5),E++;const G=E;for(let J=0;J<=l;J++){const nt=J/l*m+h,K=Math.cos(nt),U=Math.sin(nt);F.x=N*U,F.y=M*ht,F.z=N*K,_.push(F.x,F.y,F.z),g.push(0,ht,0),z.x=K*.5+.5,z.y=U*.5*ht+.5,x.push(z.x,z.y),E++}for(let J=0;J<l;J++){const et=I+J,nt=G+J;D===!0?v.push(nt,nt+1,et):v.push(nt+1,nt,et),T+=3}p.addGroup(y,T,D===!0?1:2),y+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ge("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const v=s[l],g=s[l+1]-v,x=(f-v)/g;return(l+x)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new Ce:new q);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new q,l=[],c=[],f=[],h=new q,m=new mn;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new q)}c[0]=new q,f[0]=new q;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),_=Math.abs(l[0].y),g=Math.abs(l[0].z);v<=p&&(p=v,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),g<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),f[x]=f[x-1].clone(),h.crossVectors(l[x-1],l[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Le(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,E))}f[x].crossVectors(l[x],c[x])}if(i===!0){let x=Math.acos(Le(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],x*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ig(){let r=0,t=0,i=0,s=0;function l(c,f,h,m){r=c,t=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,v,_){let g=(f-c)/p-(h-c)/(p+v)+(h-f)/v,x=(h-f)/v-(m-f)/(v+_)+(m-h)/_;g*=v,x*=v,l(f,h,g,x)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const gd=new q,e0=new ig,n0=new ig,i0=new ig;class ly extends oy{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new q){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,v;this.closed||h>0?p=l[(h-1)%c]:(gd.subVectors(l[0],l[1]).add(l[0]),p=gd);const _=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?v=l[(h+2)%c]:(gd.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=gd),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(g),x),M=Math.pow(g.distanceToSquared(v),x);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),e0.initNonuniformCatmullRom(p.x,_.x,g.x,v.x,E,w,M),n0.initNonuniformCatmullRom(p.y,_.y,g.y,v.y,E,w,M),i0.initNonuniformCatmullRom(p.z,_.z,g.z,v.z,E,w,M)}else this.curveType==="catmullrom"&&(e0.initCatmullRom(p.x,_.x,g.x,v.x,this.tension),n0.initCatmullRom(p.y,_.y,g.y,v.y,this.tension),i0.initCatmullRom(p.z,_.z,g.z,v.z,this.tension));return s.set(e0.calc(m),n0.calc(m),i0.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ya extends zi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,_=t/h,g=i/m,x=[],E=[],w=[],M=[];for(let y=0;y<v;y++){const C=y*g-f;for(let L=0;L<p;L++){const D=L*_-c;E.push(D,-C,0),w.push(0,0,1),M.push(L/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let C=0;C<h;C++){const L=C+p*y,D=C+p*(y+1),I=C+1+p*(y+1),z=C+1+p*y;x.push(L,D,z),x.push(D,I,z)}this.setIndex(x),this.setAttribute("position",new Sn(E,3)),this.setAttribute("normal",new Sn(w,3)),this.setAttribute("uv",new Sn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gh extends zi{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],v=[];let _=t;const g=(i-t)/l,x=new q,E=new Ce;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const y=c+M/s*f;x.x=_*Math.cos(y),x.y=_*Math.sin(y),m.push(x.x,x.y,x.z),p.push(0,0,1),E.x=(x.x/i+1)/2,E.y=(x.y/i+1)/2,v.push(E.x,E.y)}_+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let y=0;y<s;y++){const C=y+M,L=C,D=C+s+1,I=C+s+2,z=C+1;h.push(L,D,z),h.push(D,I,z)}}this.setIndex(h),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(p,3)),this.setAttribute("uv",new Sn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vh extends zi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const v=[],_=new q,g=new q,x=[],E=[],w=[],M=[];for(let y=0;y<=s;y++){const C=[],L=y/s;let D=0;y===0&&f===0?D=.5/i:y===s&&m===Math.PI&&(D=-.5/i);for(let I=0;I<=i;I++){const z=I/i;_.x=-t*Math.cos(l+z*c)*Math.sin(f+L*h),_.y=t*Math.cos(f+L*h),_.z=t*Math.sin(l+z*c)*Math.sin(f+L*h),E.push(_.x,_.y,_.z),g.copy(_).normalize(),w.push(g.x,g.y,g.z),M.push(z+D,1-L),C.push(p++)}v.push(C)}for(let y=0;y<s;y++)for(let C=0;C<i;C++){const L=v[y][C+1],D=v[y][C],I=v[y+1][C],z=v[y+1][C+1];(y!==0||f>0)&&x.push(L,D,z),(y!==s-1||m<Math.PI)&&x.push(D,I,z)}this.setIndex(x),this.setAttribute("position",new Sn(E,3)),this.setAttribute("normal",new Sn(w,3)),this.setAttribute("uv",new Sn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class kh extends zi{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:h},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],v=[],_=[],g=new q,x=new q,E=new q;for(let w=0;w<=s;w++){const M=f+w/s*h;for(let y=0;y<=l;y++){const C=y/l*c;x.x=(t+i*Math.cos(M))*Math.cos(C),x.y=(t+i*Math.cos(M))*Math.sin(C),x.z=i*Math.sin(M),p.push(x.x,x.y,x.z),g.x=t*Math.cos(C),g.y=t*Math.sin(C),E.subVectors(x,g).normalize(),v.push(E.x,E.y,E.z),_.push(y/l),_.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const y=(l+1)*w+M-1,C=(l+1)*(w-1)+M-1,L=(l+1)*(w-1)+M,D=(l+1)*w+M;m.push(y,C,D),m.push(C,L,D)}this.setIndex(m),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ic(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Yi(r){const t={};for(let i=0;i<r.length;i++){const s=ic(r[i]);for(const l in s)t[l]=s[l]}return t}function VE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function cy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}const uy={clone:ic,merge:Yi};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ps extends Go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ic(t.uniforms),this.uniformsGroups=VE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class fy extends ps{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class La extends Go{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ua,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Do extends La{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class dy extends Go{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ua,this.combine=Ah,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hy extends Go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class py extends Go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rc extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class my extends rc{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const a0=new mn,Nx=new q,Lx=new q;class ag{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=oa,this.map=null,this.mapPass=null,this.matrix=new mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hh,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Nx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Nx),Lx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Lx),i.updateMatrixWorld(),a0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(a0,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===tc||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(a0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _d=new q,vd=new cr,Rs=new q;class sg extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=us,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_d,vd,Rs),Rs.x===1&&Rs.y===1&&Rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_d,vd,Rs.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(_d,vd,Rs),Rs.x===1&&Rs.y===1&&Rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_d,vd,Rs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new q,Ux=new Ce,Ox=new Ce;class qi extends sg{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jr.x,jr.y).multiplyScalar(-t/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(jr.x,jr.y).multiplyScalar(-t/jr.z)}getViewSize(t,i){return this.getViewBounds(t,Ux,Ox),i.subVectors(Ox,Ux)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Nu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class WE extends ag{constructor(){super(new qi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=ec*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ud extends rc{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new WE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class YE extends ag{constructor(){super(new qi(90,1,.5,500)),this.isPointLightShadow=!0}}class Kr extends rc{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new YE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Xh extends sg{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qE extends ag{constructor(){super(new Xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R0 extends rc{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new qE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class gy extends rc{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hl=-90,Gl=1;class _y extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qi(Hl,Gl,t,i);l.layers=this.layers,this.add(l);const c=new qi(Hl,Gl,t,i);c.layers=this.layers,this.add(c);const f=new qi(Hl,Gl,t,i);f.layers=this.layers,this.add(f);const h=new qi(Hl,Gl,t,i);h.layers=this.layers,this.add(h);const m=new qi(Hl,Gl,t,i);m.layers=this.layers,this.add(m);const p=new qi(Hl,Gl,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===us)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(_,g,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class vy extends qi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ix=new mn;class xy{constructor(t,i,s=0,l=1/0){this.ray=new $0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ye("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Ix.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ix),this}intersectObject(t,i=!0,s=[]){return C0(t,this,s,i),s.sort(Px),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)C0(t[l],this,s,i);return s.sort(Px),s}}function Px(r,t){return r.distance-t.distance}function C0(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)C0(c[f],t,i,!0)}}class Sy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ge("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Fx(r,t,i,s){const l=jE(s);switch(i){case Y0:return r*t;case Nh:return r*t/l.components*l.byteLength;case Lh:return r*t/l.components*l.byteLength;case Bo:return r*t*2/l.components*l.byteLength;case Uh:return r*t*2/l.components*l.byteLength;case q0:return r*t*3/l.components*l.byteLength;case Za:return r*t*4/l.components*l.byteLength;case Oh:return r*t*4/l.components*l.byteLength;case Ru:case Cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wu:case Du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yd:case jd:return Math.max(r,16)*Math.max(t,8)/4;case Wd:case qd:return Math.max(r,8)*Math.max(t,8)/2;case Zd:case Kd:case Jd:case $d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qd:case th:case eh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ah:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case rh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case oh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case lh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ch:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case uh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case dh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case hh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ph:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case mh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case gh:case _h:case vh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case xh:case Sh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case yh:case Mh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jE(r){switch(r){case oa:case V0:return{byteLength:1,components:1};case Jl:case k0:case Ls:return{byteLength:2,components:1};case wh:case Dh:return{byteLength:2,components:4};case hs:case Ch:case ja:return{byteLength:4,components:1};case X0:case W0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);function yy(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function ZE(r){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const v=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,v);else{_.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<_.length;x++){const E=_[g],w=_[x];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,_[g]=w)}_.length=g+1;for(let x=0,E=_.length;x<E;x++){const w=_[x];r.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var KE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
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
#endif`,JE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nb=`#ifdef USE_AOMAP
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
#endif`,ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ab=`#ifdef USE_BATCHING
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
#endif`,sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cb=`#ifdef USE_IRIDESCENCE
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
#endif`,ub=`#ifdef USE_BUMPMAP
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xb=`#define PI 3.141592653589793
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
} // validated`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yb=`vec3 transformedNormal = objectNormal;
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
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fb=`#ifdef USE_GRADIENTMAP
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
}`,Bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gb=`uniform bool receiveShadow;
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
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qb=`PhysicalMaterial material;
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
#endif`,jb=`uniform sampler2D dfgLUT;
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
}`,Zb=`
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s1=`#if defined( USE_POINTS_UV )
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
#endif`,r1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`#ifdef USE_MORPHTARGETS
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
#endif`,d1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
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
#endif`,x1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O1=`float getShadowMask() {
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
}`,I1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B1=`#ifdef USE_SKINNING
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
#endif`,z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k1=`#ifdef USE_TRANSMISSION
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
#endif`,X1=`#ifdef USE_TRANSMISSION
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K1=`uniform sampler2D t2D;
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
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
}`,nT=`#if DEPTH_PACKING == 3200
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
}`,iT=`#define DISTANCE
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
}`,aT=`#define DISTANCE
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,uT=`uniform vec3 diffuse;
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
}`,fT=`#define LAMBERT
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
}`,dT=`#define LAMBERT
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
}`,hT=`#define MATCAP
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
}`,pT=`#define MATCAP
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
}`,mT=`#define NORMAL
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
}`,gT=`#define NORMAL
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
}`,_T=`#define PHONG
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
}`,vT=`#define PHONG
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
}`,xT=`#define STANDARD
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
}`,ST=`#define STANDARD
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
}`,yT=`#define TOON
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
}`,MT=`#define TOON
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
}`,ET=`uniform float size;
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
}`,bT=`uniform vec3 diffuse;
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
}`,TT=`#include <common>
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
}`,AT=`uniform vec3 color;
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
}`,RT=`uniform float rotation;
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
}`,CT=`uniform vec3 diffuse;
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
}`,Ae={alphahash_fragment:KE,alphahash_pars_fragment:QE,alphamap_fragment:JE,alphamap_pars_fragment:$E,alphatest_fragment:tb,alphatest_pars_fragment:eb,aomap_fragment:nb,aomap_pars_fragment:ib,batching_pars_vertex:ab,batching_vertex:sb,begin_vertex:rb,beginnormal_vertex:ob,bsdfs:lb,iridescence_fragment:cb,bumpmap_pars_fragment:ub,clipping_planes_fragment:fb,clipping_planes_pars_fragment:db,clipping_planes_pars_vertex:hb,clipping_planes_vertex:pb,color_fragment:mb,color_pars_fragment:gb,color_pars_vertex:_b,color_vertex:vb,common:xb,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:yb,displacementmap_pars_vertex:Mb,displacementmap_vertex:Eb,emissivemap_fragment:bb,emissivemap_pars_fragment:Tb,colorspace_fragment:Ab,colorspace_pars_fragment:Rb,envmap_fragment:Cb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Db,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:Vb,envmap_vertex:Lb,fog_vertex:Ub,fog_pars_vertex:Ob,fog_fragment:Ib,fog_pars_fragment:Pb,gradientmap_pars_fragment:Fb,lightmap_pars_fragment:Bb,lights_lambert_fragment:zb,lights_lambert_pars_fragment:Hb,lights_pars_begin:Gb,lights_toon_fragment:kb,lights_toon_pars_fragment:Xb,lights_phong_fragment:Wb,lights_phong_pars_fragment:Yb,lights_physical_fragment:qb,lights_physical_pars_fragment:jb,lights_fragment_begin:Zb,lights_fragment_maps:Kb,lights_fragment_end:Qb,logdepthbuf_fragment:Jb,logdepthbuf_pars_fragment:$b,logdepthbuf_pars_vertex:t1,logdepthbuf_vertex:e1,map_fragment:n1,map_pars_fragment:i1,map_particle_fragment:a1,map_particle_pars_fragment:s1,metalnessmap_fragment:r1,metalnessmap_pars_fragment:o1,morphinstance_vertex:l1,morphcolor_vertex:c1,morphnormal_vertex:u1,morphtarget_pars_vertex:f1,morphtarget_vertex:d1,normal_fragment_begin:h1,normal_fragment_maps:p1,normal_pars_fragment:m1,normal_pars_vertex:g1,normal_vertex:_1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:x1,clearcoat_normal_fragment_maps:S1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:M1,opaque_fragment:E1,packing:b1,premultiplied_alpha_fragment:T1,project_vertex:A1,dithering_fragment:R1,dithering_pars_fragment:C1,roughnessmap_fragment:w1,roughnessmap_pars_fragment:D1,shadowmap_pars_fragment:N1,shadowmap_pars_vertex:L1,shadowmap_vertex:U1,shadowmask_pars_fragment:O1,skinbase_vertex:I1,skinning_pars_vertex:P1,skinning_vertex:F1,skinnormal_vertex:B1,specularmap_fragment:z1,specularmap_pars_fragment:H1,tonemapping_fragment:G1,tonemapping_pars_fragment:V1,transmission_fragment:k1,transmission_pars_fragment:X1,uv_pars_fragment:W1,uv_pars_vertex:Y1,uv_vertex:q1,worldpos_vertex:j1,background_vert:Z1,background_frag:K1,backgroundCube_vert:Q1,backgroundCube_frag:J1,cube_vert:$1,cube_frag:tT,depth_vert:eT,depth_frag:nT,distance_vert:iT,distance_frag:aT,equirect_vert:sT,equirect_frag:rT,linedashed_vert:oT,linedashed_frag:lT,meshbasic_vert:cT,meshbasic_frag:uT,meshlambert_vert:fT,meshlambert_frag:dT,meshmatcap_vert:hT,meshmatcap_frag:pT,meshnormal_vert:mT,meshnormal_frag:gT,meshphong_vert:_T,meshphong_frag:vT,meshphysical_vert:xT,meshphysical_frag:ST,meshtoon_vert:yT,meshtoon_frag:MT,points_vert:ET,points_frag:bT,shadow_vert:TT,shadow_frag:AT,sprite_vert:RT,sprite_frag:CT},Wt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},envMapRotation:{value:new Ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}},cs={basic:{uniforms:Yi([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:Yi([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:Yi([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:Yi([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:Yi([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:Yi([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:Yi([Wt.points,Wt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:Yi([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:Yi([Wt.common,Wt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:Yi([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:Yi([Wt.sprite,Wt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ee}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distance:{uniforms:Yi([Wt.common,Wt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distance_vert,fragmentShader:Ae.distance_frag},shadow:{uniforms:Yi([Wt.lights,Wt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};cs.physical={uniforms:Yi([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const xd={r:0,b:0,g:0},bo=new Ua,wT=new mn;function DT(r,t,i,s,l,c){const f=new fe(0);let h=l===!0?0:1,m,p,v=null,_=0,g=null;function x(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const D=C.backgroundBlurriness>0;L=t.get(L,D)}return L}function E(C){let L=!1;const D=x(C);D===null?M(f,h):D&&D.isColor&&(M(D,1),L=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,L){const D=x(L);D&&(D.isCubeTexture||D.mapping===Bu)?(p===void 0&&(p=new Re(new no(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:ic(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),bo.copy(L.backgroundRotation),bo.x*=-1,bo.y*=-1,bo.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(bo.y*=-1,bo.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(bo)),p.material.toneMapped=qe.getTransfer(D.colorSpace)!==rn,(v!==D||_!==D.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=D,_=D.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Re(new Ya(2,2),new ps({name:"BackgroundMaterial",uniforms:ic(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=qe.getTransfer(D.colorSpace)!==rn,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||_!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=D,_=D.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(xd,cy(r)),i.buffers.color.setClear(xd.r,xd.g,xd.b,L,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,L=1){f.set(C),h=L,M(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,M(f,h)},render:E,addToRenderList:w,dispose:y}}function NT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(G,J,et,nt,K){let U=!1;const B=_(G,nt,et,J);c!==B&&(c=B,p(c.object)),U=x(G,nt,et,K),U&&E(G,nt,et,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,D(G,J,et,nt),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function v(G){return r.deleteVertexArray(G)}function _(G,J,et,nt){const K=nt.wireframe===!0;let U=s[J.id];U===void 0&&(U={},s[J.id]=U);const B=G.isInstancedMesh===!0?G.id:0;let ut=U[B];ut===void 0&&(ut={},U[B]=ut);let vt=ut[et.id];vt===void 0&&(vt={},ut[et.id]=vt);let Nt=vt[K];return Nt===void 0&&(Nt=g(m()),vt[K]=Nt),Nt}function g(G){const J=[],et=[],nt=[];for(let K=0;K<i;K++)J[K]=0,et[K]=0,nt[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:et,attributeDivisors:nt,object:G,attributes:{},index:null}}function x(G,J,et,nt){const K=c.attributes,U=J.attributes;let B=0;const ut=et.getAttributes();for(const vt in ut)if(ut[vt].location>=0){const P=K[vt];let j=U[vt];if(j===void 0&&(vt==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),vt==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;B++}return c.attributesNum!==B||c.index!==nt}function E(G,J,et,nt){const K={},U=J.attributes;let B=0;const ut=et.getAttributes();for(const vt in ut)if(ut[vt].location>=0){let P=U[vt];P===void 0&&(vt==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),vt==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const j={};j.attribute=P,P&&P.data&&(j.data=P.data),K[vt]=j,B++}c.attributes=K,c.attributesNum=B,c.index=nt}function w(){const G=c.newAttributes;for(let J=0,et=G.length;J<et;J++)G[J]=0}function M(G){y(G,0)}function y(G,J){const et=c.newAttributes,nt=c.enabledAttributes,K=c.attributeDivisors;et[G]=1,nt[G]===0&&(r.enableVertexAttribArray(G),nt[G]=1),K[G]!==J&&(r.vertexAttribDivisor(G,J),K[G]=J)}function C(){const G=c.newAttributes,J=c.enabledAttributes;for(let et=0,nt=J.length;et<nt;et++)J[et]!==G[et]&&(r.disableVertexAttribArray(et),J[et]=0)}function L(G,J,et,nt,K,U,B){B===!0?r.vertexAttribIPointer(G,J,et,K,U):r.vertexAttribPointer(G,J,et,nt,K,U)}function D(G,J,et,nt){w();const K=nt.attributes,U=et.getAttributes(),B=J.defaultAttributeValues;for(const ut in U){const vt=U[ut];if(vt.location>=0){let Nt=K[ut];if(Nt===void 0&&(ut==="instanceMatrix"&&G.instanceMatrix&&(Nt=G.instanceMatrix),ut==="instanceColor"&&G.instanceColor&&(Nt=G.instanceColor)),Nt!==void 0){const P=Nt.normalized,j=Nt.itemSize,St=t.get(Nt);if(St===void 0)continue;const Ot=St.buffer,Yt=St.type,at=St.bytesPerElement,mt=Yt===r.INT||Yt===r.UNSIGNED_INT||Nt.gpuType===Ch;if(Nt.isInterleavedBufferAttribute){const Ut=Nt.data,Ft=Ut.stride,$t=Nt.offset;if(Ut.isInstancedInterleavedBuffer){for(let re=0;re<vt.locationSize;re++)y(vt.location+re,Ut.meshPerAttribute);G.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let re=0;re<vt.locationSize;re++)M(vt.location+re);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let re=0;re<vt.locationSize;re++)L(vt.location+re,j/vt.locationSize,Yt,P,Ft*at,($t+j/vt.locationSize*re)*at,mt)}else{if(Nt.isInstancedBufferAttribute){for(let Ut=0;Ut<vt.locationSize;Ut++)y(vt.location+Ut,Nt.meshPerAttribute);G.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Ut=0;Ut<vt.locationSize;Ut++)M(vt.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let Ut=0;Ut<vt.locationSize;Ut++)L(vt.location+Ut,j/vt.locationSize,Yt,P,j*at,j/vt.locationSize*Ut*at,mt)}}else if(B!==void 0){const P=B[ut];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(vt.location,P);break;case 3:r.vertexAttrib3fv(vt.location,P);break;case 4:r.vertexAttrib4fv(vt.location,P);break;default:r.vertexAttrib1fv(vt.location,P)}}}}C()}function I(){N();for(const G in s){const J=s[G];for(const et in J){const nt=J[et];for(const K in nt){const U=nt[K];for(const B in U)v(U[B].object),delete U[B];delete nt[K]}}delete s[G]}}function z(G){if(s[G.id]===void 0)return;const J=s[G.id];for(const et in J){const nt=J[et];for(const K in nt){const U=nt[K];for(const B in U)v(U[B].object),delete U[B];delete nt[K]}}delete s[G.id]}function F(G){for(const J in s){const et=s[J];for(const nt in et){const K=et[nt];if(K[G.id]===void 0)continue;const U=K[G.id];for(const B in U)v(U[B].object),delete U[B];delete K[G.id]}}}function T(G){for(const J in s){const et=s[J],nt=G.isInstancedMesh===!0?G.id:0,K=et[nt];if(K!==void 0){for(const U in K){const B=K[U];for(const ut in B)v(B[ut].object),delete B[ut];delete K[U]}delete et[nt],Object.keys(et).length===0&&delete s[J]}}}function N(){ht(),f=!0,c!==l&&(c=l,p(c.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:ht,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function LT(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function f(p,v,_){_!==0&&(r.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function h(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let x=0;for(let E=0;E<_;E++)x+=v[E];i.update(x,s,1)}function m(p,v,_,g){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)f(p[E],v[E],g[E]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,v,0,g,0,_);let E=0;for(let w=0;w<_;w++)E+=v[w]*g[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function UT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Za&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==oa&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ja&&!T)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ge("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:D,maxSamples:I,samples:z}}function OT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Zr,h=new Ee,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||s!==0||l;return l=g,s=_.length,x},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,x){const E=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,y=r.get(_);if(!l||E===null||E.length===0||c&&!M)c?v(null):p();else{const C=c?0:s,L=C*4;let D=y.clippingState||null;m.value=D,D=v(E,g,L,x);for(let I=0;I!==L;++I)D[I]=i[I];y.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,g,x,E){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const y=x+w*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,D=x;L!==w;++L,D+=4)f.copy(_[L]).applyMatrix4(C,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const $r=4,Bx=[.125,.215,.35,.446,.526,.582],No=20,IT=256,gu=new Xh,zx=new fe;let s0=null,r0=0,o0=0,l0=!1;const PT=new q;class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=PT}=c;s0=this._renderer.getRenderTarget(),r0=this._renderer.getActiveCubeFace(),o0=this._renderer.getActiveMipmapLevel(),l0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(s0,r0,o0),this._renderer.xr.enabled=l0,t.scissorTest=!1,Vl(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===to||t.mapping===Fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),s0=this._renderer.getRenderTarget(),r0=this._renderer.getActiveCubeFace(),o0=this._renderer.getActiveMipmapLevel(),l0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ls,format:Za,colorSpace:zo,depthBuffer:!1},l=Hx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FT(c)),this._blurMaterial=zT(c,t,i),this._ggxMaterial=BT(c,t,i)}return l}_compileMaterial(t){const i=new Re(new zi,t);this._renderer.compile(i,gu)}_sceneToCubeUV(t,i,s,l,c){const m=new qi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(zx),_.toneMapping=fs,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new no,new Uo({name:"PMREM.Background",side:Bi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let y=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,y=!0):(M.color.copy(zx),y=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const I=this._cubeSize;Vl(l,D*I,L>2?I:0,I,I),_.setRenderTarget(l),y&&_.render(w,m),_.render(t,m)}_.toneMapping=x,_.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===to||t.mapping===Fo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Vl(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,gu)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=0+p*1.25,x=_*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-$r?s-E+$r:0),y=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=E-i,Vl(c,M,y,3*w,2*w),l.setRenderTarget(c),l.render(h,gu),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Vl(t,M,y,3*w,2*w),l.setRenderTarget(t),l.render(h,gu)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const g=p.uniforms,x=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*No-1),w=c/E,M=isFinite(c)?1+Math.floor(v*w):No;M>No&&ge(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${No}`);const y=[];let C=0;for(let F=0;F<No;++F){const T=F/w,N=Math.exp(-T*T/2);y.push(N),F===0?C+=N:F<M&&(C+=2*N)}for(let F=0;F<y.length;F++)y[F]=y[F]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-s;const D=this._sizeLods[l],I=3*D*(l>L-$r?l-L+$r:0),z=4*(this._cubeSize-D);Vl(i,I,z,3*D,2*D),m.setRenderTarget(i),m.render(_,gu)}}function FT(r){const t=[],i=[],s=[];let l=r;const c=r-$r+1+Bx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-$r?m=Bx[f-r+$r-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],x=6,E=6,w=3,M=2,y=1,C=new Float32Array(w*E*x),L=new Float32Array(M*E*x),D=new Float32Array(y*E*x);for(let z=0;z<x;z++){const F=z%3*2/3-1,T=z>2?0:-1,N=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];C.set(N,w*E*z),L.set(g,M*E*z);const ht=[z,z,z,z,z,z];D.set(ht,y*E*z)}const I=new zi;I.setAttribute("position",new Ka(C,w)),I.setAttribute("uv",new Ka(L,M)),I.setAttribute("faceIndex",new Ka(D,y)),s.push(new Re(I,null)),l>$r&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Hx(r,t,i){const s=new ds(r,t,i);return s.texture.mapping=Bu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Vl(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function BT(r,t,i){return new ps({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function zT(r,t,i){const s=new Float32Array(No),l=new q(0,1,0);return new ps({name:"SphericalGaussianBlur",defines:{n:No,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Gx(){return new ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Vx(){return new ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Wh(){return`

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
	`}class rg extends ds{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new eg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new no(5,5,5),c=new ps({name:"CubemapFromEquirect",uniforms:ic(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Bi,blending:Ns});c.uniforms.tEquirect.value=i;const f=new Re(l,c),h=i.minFilter;return i.minFilter===rr&&(i.minFilter=Zn),new _y(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function HT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,x=!1){return g==null?null:x?f(g):c(g)}function c(g){if(g&&g.isTexture){const x=g.mapping;if(x===wd||x===Dd)if(t.has(g)){const E=t.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new rg(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const x=g.mapping,E=x===wd||x===Dd,w=x===to||x===Fo;if(E||w){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new bh(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return E&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new bh(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function h(g,x){return x===wd?g.mapping=to:x===Dd&&(g.mapping=Fo),g}function m(g){let x=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&x++;return x===E}function p(g){const x=g.target;x.removeEventListener("dispose",p);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const E=i.get(x);E!==void 0&&(i.delete(x),E.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function GT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ou("WebGLRenderer: "+s+" extension not supported."),l}}}function VT(r,t,i,s){const l={},c=new WeakMap;function f(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const x=c.get(g);x&&(t.remove(x),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(_,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const x in g)t.update(g[x],r.ARRAY_BUFFER)}function p(_){const g=[],x=_.index,E=_.attributes.position;let w=0;if(E===void 0)return;if(x!==null){const C=x.array;w=x.version;for(let L=0,D=C.length;L<D;L+=3){const I=C[L+0],z=C[L+1],F=C[L+2];g.push(I,z,z,F,F,I)}}else{const C=E.array;w=E.version;for(let L=0,D=C.length/3-1;L<D;L+=3){const I=L+0,z=L+1,F=L+2;g.push(I,z,z,F,F,I)}}const M=new(E.count>=65535?J0:Q0)(g,1);M.version=w;const y=c.get(_);y&&t.remove(y),c.set(_,M)}function v(_){const g=c.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function kT(r,t,i){let s;function l(g){s=g}let c,f;function h(g){c=g.type,f=g.bytesPerElement}function m(g,x){r.drawElements(s,x,c,g*f),i.update(x,s,1)}function p(g,x,E){E!==0&&(r.drawElementsInstanced(s,x,c,g*f,E),i.update(x,s,E))}function v(g,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,g,0,E);let M=0;for(let y=0;y<E;y++)M+=x[y];i.update(M,s,1)}function _(g,x,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<g.length;y++)p(g[y]/f,x[y],w[y]);else{M.multiDrawElementsInstancedWEBGL(s,x,0,c,g,0,w,0,E);let y=0;for(let C=0;C<E;C++)y+=x[C]*w[C];i.update(y,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function XT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ye("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function WT(r,t,i){const s=new WeakMap,l=new Gn;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let ht=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",ht)};var x=ht;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let I=h.attributes.position.count*D,z=1;I>t.maxTextureSize&&(z=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*z*4*_),T=new Z0(F,I,z,_);T.type=ja,T.needsUpdate=!0;const N=D*4;for(let G=0;G<_;G++){const J=y[G],et=C[G],nt=L[G],K=I*z*4*G;for(let U=0;U<J.count;U++){const B=U*N;E===!0&&(l.fromBufferAttribute(J,U),F[K+B+0]=l.x,F[K+B+1]=l.y,F[K+B+2]=l.z,F[K+B+3]=0),w===!0&&(l.fromBufferAttribute(et,U),F[K+B+4]=l.x,F[K+B+5]=l.y,F[K+B+6]=l.z,F[K+B+7]=0),M===!0&&(l.fromBufferAttribute(nt,U),F[K+B+8]=l.x,F[K+B+9]=l.y,F[K+B+10]=l.z,F[K+B+11]=nt.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new Ce(I,z)},s.set(h,g),h.addEventListener("dispose",ht)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function YT(r,t,i,s,l){let c=new WeakMap;function f(p){const v=l.render.frame,_=p.geometry,g=t.get(p,_);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==v&&(x.update(),c.set(x,v))}return g}function h(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:h}}const qT={[I0]:"LINEAR_TONE_MAPPING",[P0]:"REINHARD_TONE_MAPPING",[F0]:"CINEON_TONE_MAPPING",[Rh]:"ACES_FILMIC_TONE_MAPPING",[z0]:"AGX_TONE_MAPPING",[H0]:"NEUTRAL_TONE_MAPPING",[B0]:"CUSTOM_TONE_MAPPING"};function jT(r,t,i,s,l){const c=new ds(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new ds(t,i,{type:Ls,depthBuffer:!1,stencilBuffer:!1}),h=new zi;h.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const m=new fy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Re(h,m),v=new Xh(-1,1,1,-1,0,1);let _=null,g=null,x=!1,E,w=null,M=[],y=!1;this.setSize=function(C,L){c.setSize(C,L),f.setSize(C,L);for(let D=0;D<M.length;D++){const I=M[D];I.setSize&&I.setSize(C,L)}},this.setEffects=function(C){M=C,y=M.length>0&&M[0].isRenderPass===!0;const L=c.width,D=c.height;for(let I=0;I<M.length;I++){const z=M[I];z.setSize&&z.setSize(L,D)}},this.begin=function(C,L){if(x||C.toneMapping===fs&&M.length===0)return!1;if(w=L,L!==null){const D=L.width,I=L.height;(c.width!==D||c.height!==I)&&this.setSize(D,I)}return y===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=fs,!0},this.hasRenderPass=function(){return y},this.end=function(C,L){C.toneMapping=E,x=!0;let D=c,I=f;for(let z=0;z<M.length;z++){const F=M[z];if(F.enabled!==!1&&(F.render(C,I,D,L),F.needsSwap!==!1)){const T=D;D=I,I=T}}if(_!==C.outputColorSpace||g!==C.toneMapping){_=C.outputColorSpace,g=C.toneMapping,m.defines={},qe.getTransfer(_)===rn&&(m.defines.SRGB_TRANSFER="");const z=qT[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(w),C.render(p,v),w=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const My=new yi,w0=new nc(1,1),Ey=new Z0,by=new ny,Ty=new eg,kx=[],Xx=[],Wx=new Float32Array(16),Yx=new Float32Array(9),qx=new Float32Array(4);function oc(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=kx[l];if(c===void 0&&(c=new Float32Array(l),kx[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function mi(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function gi(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Yh(r,t){let i=Xx[t];i===void 0&&(i=new Int32Array(t),Xx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function ZT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mi(i,t))return;r.uniform2fv(this.addr,t),gi(i,t)}}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mi(i,t))return;r.uniform3fv(this.addr,t),gi(i,t)}}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mi(i,t))return;r.uniform4fv(this.addr,t),gi(i,t)}}function $T(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mi(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),gi(i,t)}else{if(mi(i,s))return;qx.set(s),r.uniformMatrix2fv(this.addr,!1,qx),gi(i,s)}}function tA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mi(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),gi(i,t)}else{if(mi(i,s))return;Yx.set(s),r.uniformMatrix3fv(this.addr,!1,Yx),gi(i,s)}}function eA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mi(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),gi(i,t)}else{if(mi(i,s))return;Wx.set(s),r.uniformMatrix4fv(this.addr,!1,Wx),gi(i,s)}}function nA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function iA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mi(i,t))return;r.uniform2iv(this.addr,t),gi(i,t)}}function aA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mi(i,t))return;r.uniform3iv(this.addr,t),gi(i,t)}}function sA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mi(i,t))return;r.uniform4iv(this.addr,t),gi(i,t)}}function rA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function oA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mi(i,t))return;r.uniform2uiv(this.addr,t),gi(i,t)}}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mi(i,t))return;r.uniform3uiv(this.addr,t),gi(i,t)}}function cA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mi(i,t))return;r.uniform4uiv(this.addr,t),gi(i,t)}}function uA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(w0.compareFunction=i.isReversedDepthBuffer()?Fh:Ph,c=w0):c=My,i.setTexture2D(t||c,l)}function fA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||by,l)}function dA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ty,l)}function hA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ey,l)}function pA(r){switch(r){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return hA}}function mA(r,t){r.uniform1fv(this.addr,t)}function gA(r,t){const i=oc(t,this.size,2);r.uniform2fv(this.addr,i)}function _A(r,t){const i=oc(t,this.size,3);r.uniform3fv(this.addr,i)}function vA(r,t){const i=oc(t,this.size,4);r.uniform4fv(this.addr,i)}function xA(r,t){const i=oc(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function SA(r,t){const i=oc(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function yA(r,t){const i=oc(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function MA(r,t){r.uniform1iv(this.addr,t)}function EA(r,t){r.uniform2iv(this.addr,t)}function bA(r,t){r.uniform3iv(this.addr,t)}function TA(r,t){r.uniform4iv(this.addr,t)}function AA(r,t){r.uniform1uiv(this.addr,t)}function RA(r,t){r.uniform2uiv(this.addr,t)}function CA(r,t){r.uniform3uiv(this.addr,t)}function wA(r,t){r.uniform4uiv(this.addr,t)}function DA(r,t,i){const s=this.cache,l=t.length,c=Yh(i,l);mi(s,c)||(r.uniform1iv(this.addr,c),gi(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=w0:f=My;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function NA(r,t,i){const s=this.cache,l=t.length,c=Yh(i,l);mi(s,c)||(r.uniform1iv(this.addr,c),gi(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||by,c[f])}function LA(r,t,i){const s=this.cache,l=t.length,c=Yh(i,l);mi(s,c)||(r.uniform1iv(this.addr,c),gi(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Ty,c[f])}function UA(r,t,i){const s=this.cache,l=t.length,c=Yh(i,l);mi(s,c)||(r.uniform1iv(this.addr,c),gi(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Ey,c[f])}function OA(r){switch(r){case 5126:return mA;case 35664:return gA;case 35665:return _A;case 35666:return vA;case 35674:return xA;case 35675:return SA;case 35676:return yA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return bA;case 35669:case 35673:return TA;case 5125:return AA;case 36294:return RA;case 36295:return CA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return UA}}class IA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=pA(i.type)}}class PA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OA(i.type)}}class FA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const c0=/(\w+)(\])?(\[|\.)?/g;function jx(r,t){r.seq.push(t),r.map[t.id]=t}function BA(r,t,i){const s=r.name,l=s.length;for(c0.lastIndex=0;;){const c=c0.exec(s),f=c0.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){jx(i,p===void 0?new IA(h,r,t):new PA(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new FA(h),jx(i,_)),i=_}}}class Od{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);BA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Zx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const zA=37297;let HA=0;function GA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const Kx=new Ee;function VA(r){qe._getMatrix(Kx,qe.workingColorSpace,r);const t=`mat3( ${Kx.elements.map(i=>i.toFixed(4))} )`;switch(qe.getTransfer(r)){case Uu:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return ge("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Qx(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+GA(r.getShaderSource(t),h)}else return c}function kA(r,t){const i=VA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const XA={[I0]:"Linear",[P0]:"Reinhard",[F0]:"Cineon",[Rh]:"ACESFilmic",[z0]:"AgX",[H0]:"Neutral",[B0]:"Custom"};function WA(r,t){const i=XA[t];return i===void 0?(ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sd=new q;function YA(){qe.getLuminanceCoefficients(Sd);const r=Sd.x.toFixed(4),t=Sd.y.toFixed(4),i=Sd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bu).join(`
`)}function jA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function ZA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function bu(r){return r!==""}function Jx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $x(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KA=/^[ \t]*#include +<([\w\d./]+)>/gm;function D0(r){return r.replace(KA,JA)}const QA=new Map;function JA(r,t){let i=Ae[t];if(i===void 0){const s=QA.get(t);if(s!==void 0)i=Ae[s],ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return D0(i)}const $A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tS(r){return r.replace($A,t2)}function t2(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function eS(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const e2={[Oo]:"SHADOWMAP_TYPE_PCF",[jl]:"SHADOWMAP_TYPE_VSM"};function n2(r){return e2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const i2={[to]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function a2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":i2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const s2={[Fo]:"ENVMAP_MODE_REFRACTION"};function r2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":s2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const o2={[Ah]:"ENVMAP_BLENDING_MULTIPLY",[GS]:"ENVMAP_BLENDING_MIX",[VS]:"ENVMAP_BLENDING_ADD"};function l2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":o2[r.combine]||"ENVMAP_BLENDING_NONE"}function c2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function u2(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=n2(i),p=a2(i),v=r2(i),_=l2(i),g=c2(i),x=qA(i),E=jA(c),w=l.createProgram();let M,y,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bu).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bu).join(`
`),y.length>0&&(y+=`
`)):(M=[eS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bu).join(`
`),y=[eS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fs?"#define TONE_MAPPING":"",i.toneMapping!==fs?Ae.tonemapping_pars_fragment:"",i.toneMapping!==fs?WA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,kA("linearToOutputTexel",i.outputColorSpace),YA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bu).join(`
`)),f=D0(f),f=Jx(f,i),f=$x(f,i),h=D0(h),h=Jx(h,i),h=$x(h,i),f=tS(f),h=tS(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===b0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=C+M+f,D=C+y+h,I=Zx(l,l.VERTEX_SHADER,L),z=Zx(l,l.FRAGMENT_SHADER,D);l.attachShader(w,I),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(G){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(w)||"",et=l.getShaderInfoLog(I)||"",nt=l.getShaderInfoLog(z)||"",K=J.trim(),U=et.trim(),B=nt.trim();let ut=!0,vt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,I,z);else{const Nt=Qx(l,I,"vertex"),P=Qx(l,z,"fragment");Ye("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+K+`
`+Nt+`
`+P)}else K!==""?ge("WebGLProgram: Program Info Log:",K):(U===""||B==="")&&(vt=!1);vt&&(G.diagnostics={runnable:ut,programLog:K,vertexShader:{log:U,prefix:M},fragmentShader:{log:B,prefix:y}})}l.deleteShader(I),l.deleteShader(z),T=new Od(l,w),N=ZA(l,w)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let ht=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ht===!1&&(ht=l.getProgramParameter(w,zA)),ht},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=z,this}let f2=0;class d2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new h2(t),i.set(t,s)),s}}class h2{constructor(t){this.id=f2++,this.code=t,this.usedTimes=0}}function p2(r,t,i,s,l,c){const f=new zh,h=new d2,m=new Set,p=[],v=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,ht,G,J){const et=G.fog,nt=J.geometry,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,U=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||K,U),ut=B&&B.mapping===Bu?B.image.height:null,vt=x[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ge("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Nt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,P=Nt!==void 0?Nt.length:0;let j=0;nt.morphAttributes.position!==void 0&&(j=1),nt.morphAttributes.normal!==void 0&&(j=2),nt.morphAttributes.color!==void 0&&(j=3);let St,Ot,Yt,at;if(vt){const De=cs[vt];St=De.vertexShader,Ot=De.fragmentShader}else St=T.vertexShader,Ot=T.fragmentShader,h.update(T),Yt=h.getVertexShaderID(T),at=h.getFragmentShaderID(T);const mt=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),Ft=J.isInstancedMesh===!0,$t=J.isBatchedMesh===!0,re=!!T.map,Rn=!!T.matcap,Ue=!!B,we=!!T.aoMap,je=!!T.lightMap,me=!!T.bumpMap,En=!!T.normalMap,k=!!T.displacementMap,cn=!!T.emissiveMap,Oe=!!T.metalnessMap,ke=!!T.roughnessMap,ee=T.anisotropy>0,O=T.clearcoat>0,b=T.dispersion>0,Z=T.iridescence>0,yt=T.sheen>0,Ct=T.transmission>0,xt=ee&&!!T.anisotropyMap,Jt=O&&!!T.clearcoatMap,It=O&&!!T.clearcoatNormalMap,oe=O&&!!T.clearcoatRoughnessMap,ue=Z&&!!T.iridescenceMap,H=Z&&!!T.iridescenceThicknessMap,st=yt&&!!T.sheenColorMap,Mt=yt&&!!T.sheenRoughnessMap,wt=!!T.specularMap,Tt=!!T.specularColorMap,Kt=!!T.specularIntensityMap,X=Ct&&!!T.transmissionMap,pt=Ct&&!!T.thicknessMap,Dt=!!T.gradientMap,gt=!!T.alphaMap,ft=T.alphaTest>0,Q=!!T.alphaHash,kt=!!T.extensions;let ce=fs;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Xe={shaderID:vt,shaderType:T.type,shaderName:T.name,vertexShader:St,fragmentShader:Ot,defines:T.defines,customVertexShaderID:Yt,customFragmentShaderID:at,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:$t,batchingColor:$t&&J._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&J.instanceColor!==null,instancingMorph:Ft&&J.morphTexture!==null,outputColorSpace:mt===null?r.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:zo,alphaToCoverage:!!T.alphaToCoverage,map:re,matcap:Rn,envMap:Ue,envMapMode:Ue&&B.mapping,envMapCubeUVHeight:ut,aoMap:we,lightMap:je,bumpMap:me,normalMap:En,displacementMap:k,emissiveMap:cn,normalMapObjectSpace:En&&T.normalMapType===WS,normalMapTangentSpace:En&&T.normalMapType===Ih,metalnessMap:Oe,roughnessMap:ke,anisotropy:ee,anisotropyMap:xt,clearcoat:O,clearcoatMap:Jt,clearcoatNormalMap:It,clearcoatRoughnessMap:oe,dispersion:b,iridescence:Z,iridescenceMap:ue,iridescenceThicknessMap:H,sheen:yt,sheenColorMap:st,sheenRoughnessMap:Mt,specularMap:wt,specularColorMap:Tt,specularIntensityMap:Kt,transmission:Ct,transmissionMap:X,thicknessMap:pt,gradientMap:Dt,opaque:T.transparent===!1&&T.blending===Io&&T.alphaToCoverage===!1,alphaMap:gt,alphaTest:ft,alphaHash:Q,combine:T.combine,mapUv:re&&E(T.map.channel),aoMapUv:we&&E(T.aoMap.channel),lightMapUv:je&&E(T.lightMap.channel),bumpMapUv:me&&E(T.bumpMap.channel),normalMapUv:En&&E(T.normalMap.channel),displacementMapUv:k&&E(T.displacementMap.channel),emissiveMapUv:cn&&E(T.emissiveMap.channel),metalnessMapUv:Oe&&E(T.metalnessMap.channel),roughnessMapUv:ke&&E(T.roughnessMap.channel),anisotropyMapUv:xt&&E(T.anisotropyMap.channel),clearcoatMapUv:Jt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:It&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:H&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:st&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&E(T.sheenRoughnessMap.channel),specularMapUv:wt&&E(T.specularMap.channel),specularColorMapUv:Tt&&E(T.specularColorMap.channel),specularIntensityMapUv:Kt&&E(T.specularIntensityMap.channel),transmissionMapUv:X&&E(T.transmissionMap.channel),thicknessMapUv:pt&&E(T.thicknessMap.channel),alphaMapUv:gt&&E(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(En||ee),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!nt.attributes.uv&&(re||gt),fog:!!et,useFog:T.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||nt.attributes.normal===void 0&&En===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ut,skinning:J.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:j,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ht.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:re&&T.map.isVideoTexture===!0&&qe.getTransfer(T.map.colorSpace)===rn,decodeVideoTextureEmissive:cn&&T.emissiveMap.isVideoTexture===!0&&qe.getTransfer(T.emissiveMap.colorSpace)===rn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===jn,flipSided:T.side===Bi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||$t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function M(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ht in T.defines)N.push(ht),N.push(T.defines[ht]);return T.isRawShaderMaterial===!1&&(y(N,T),C(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function y(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function C(T,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),T.push(f.mask)}function L(T){const N=x[T.type];let ht;if(N){const G=cs[N];ht=uy.clone(G.uniforms)}else ht=T.uniforms;return ht}function D(T,N){let ht=v.get(N);return ht!==void 0?++ht.usedTimes:(ht=new u2(r,N,T,l),p.push(ht),v.set(N,ht)),ht}function I(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function z(T){h.remove(T)}function F(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:L,acquireProgram:D,releaseProgram:I,releaseShaderCache:z,programs:p,dispose:F}}function m2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function g2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function nS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function iS(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function h(g,x,E,w,M,y){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:x,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:y},r[t]=C):(C.id=g.id,C.object=g,C.geometry=x,C.material=E,C.materialVariant=f(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=y),t++,C}function m(g,x,E,w,M,y){const C=h(g,x,E,w,M,y);E.transmission>0?s.push(C):E.transparent===!0?l.push(C):i.push(C)}function p(g,x,E,w,M,y){const C=h(g,x,E,w,M,y);E.transmission>0?s.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function v(g,x){i.length>1&&i.sort(g||g2),s.length>1&&s.sort(x||nS),l.length>1&&l.sort(x||nS)}function _(){for(let g=t,x=r.length;g<x;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:_,sort:v}}function _2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new iS,r.set(s,[f])):l>=c.length?(f=new iS,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function v2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new fe};break;case"SpotLight":i={position:new q,direction:new q,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=i,i}}}function x2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let S2=0;function y2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function M2(r){const t=new v2,i=x2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new mn,f=new mn;function h(p){let v=0,_=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let x=0,E=0,w=0,M=0,y=0,C=0,L=0,D=0,I=0,z=0,F=0;p.sort(y2);for(let N=0,ht=p.length;N<ht;N++){const G=p[N],J=G.color,et=G.intensity,nt=G.distance;let K=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Bo?K=G.shadow.map.texture:K=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=J.r*et,_+=J.g*et,g+=J.b*et;else if(G.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(G.sh.coefficients[U],et);F++}else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,ut=i.get(G);ut.shadowIntensity=B.intensity,ut.shadowBias=B.bias,ut.shadowNormalBias=B.normalBias,ut.shadowRadius=B.radius,ut.shadowMapSize=B.mapSize,s.directionalShadow[x]=ut,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=G.shadow.matrix,C++}s.directional[x]=U,x++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(J).multiplyScalar(et),U.distance=nt,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,s.spot[w]=U;const B=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,B.updateMatrices(G),G.castShadow&&z++),s.spotLightMatrix[w]=B.matrix,G.castShadow){const ut=i.get(G);ut.shadowIntensity=B.intensity,ut.shadowBias=B.bias,ut.shadowNormalBias=B.normalBias,ut.shadowRadius=B.radius,ut.shadowMapSize=B.mapSize,s.spotShadow[w]=ut,s.spotShadowMap[w]=K,D++}w++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy(J).multiplyScalar(et),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=U,M++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const B=G.shadow,ut=i.get(G);ut.shadowIntensity=B.intensity,ut.shadowBias=B.bias,ut.shadowNormalBias=B.normalBias,ut.shadowRadius=B.radius,ut.shadowMapSize=B.mapSize,ut.shadowCameraNear=B.camera.near,ut.shadowCameraFar=B.camera.far,s.pointShadow[E]=ut,s.pointShadowMap[E]=K,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=U,E++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar(et),U.groundColor.copy(G.groundColor).multiplyScalar(et),s.hemi[y]=U,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==x||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==C||T.numPointShadows!==L||T.numSpotShadows!==D||T.numSpotMaps!==I||T.numLightProbes!==F)&&(s.directional.length=x,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=F,T.directionalLength=x,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=C,T.numPointShadows=L,T.numSpotShadows=D,T.numSpotMaps=I,T.numLightProbes=F,s.version=S2++)}function m(p,v){let _=0,g=0,x=0,E=0,w=0;const M=v.matrixWorldInverse;for(let y=0,C=p.length;y<C;y++){const L=p[y];if(L.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(L.isSpotLight){const D=s.spot[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:h,setupView:m,state:s}}function aS(r){const t=new M2(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function E2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new aS(r),t.set(l,[h])):c>=f.length?(h=new aS(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const b2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T2=`uniform sampler2D shadow_pass;
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
}`,A2=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],R2=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],sS=new mn,_u=new q,u0=new q;function C2(r,t,i){let s=new Hh;const l=new Ce,c=new Ce,f=new Gn,h=new hy,m=new py,p={},v=i.maxTextureSize,_={[lr]:Bi,[Bi]:lr,[jn]:jn},g=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:b2,fragmentShader:T2}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new Ka(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Re(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let y=this.type;this.render=function(z,F,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===MS&&(ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oo);const N=r.getRenderTarget(),ht=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Ns),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const et=y!==this.type;et&&F.traverse(function(nt){nt.material&&(Array.isArray(nt.material)?nt.material.forEach(K=>K.needsUpdate=!0):nt.material.needsUpdate=!0)});for(let nt=0,K=z.length;nt<K;nt++){const U=z[nt],B=U.shadow;if(B===void 0){ge("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ut=B.getFrameExtents();l.multiply(ut),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ut.x),l.x=c.x*ut.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ut.y),l.y=c.y*ut.y,B.mapSize.y=c.y));const vt=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=vt,B.map===null||et===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===jl){if(U.isPointLight){ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ds(l.x,l.y,{format:Bo,type:Ls,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new nc(l.x,l.y,ja),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Us,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Si,B.map.depthTexture.magFilter=Si}else U.isPointLight?(B.map=new rg(l.x),B.map.depthTexture=new ry(l.x,hs)):(B.map=new ds(l.x,l.y),B.map.depthTexture=new nc(l.x,l.y,hs)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Us,this.type===Oo?(B.map.depthTexture.compareFunction=vt?Fh:Ph,B.map.depthTexture.minFilter=Zn,B.map.depthTexture.magFilter=Zn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Si,B.map.depthTexture.magFilter=Si);B.camera.updateProjectionMatrix()}const Nt=B.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Nt;P++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,P),r.clear();else{P===0&&(r.setRenderTarget(B.map),r.clear());const j=B.getViewport(P);f.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),J.viewport(f)}if(U.isPointLight){const j=B.camera,St=B.matrix,Ot=U.distance||j.far;Ot!==j.far&&(j.far=Ot,j.updateProjectionMatrix()),_u.setFromMatrixPosition(U.matrixWorld),j.position.copy(_u),u0.copy(j.position),u0.add(A2[P]),j.up.copy(R2[P]),j.lookAt(u0),j.updateMatrixWorld(),St.makeTranslation(-_u.x,-_u.y,-_u.z),sS.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),B._frustum.setFromProjectionMatrix(sS,j.coordinateSystem,j.reversedDepth)}else B.updateMatrices(U);s=B.getFrustum(),D(F,T,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===jl&&C(B,T),B.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(N,ht,G)};function C(z,F){const T=t.update(w);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ds(l.x,l.y,{format:Bo,type:Ls})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(F,null,T,g,w,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(F,null,T,x,w,null)}function L(z,F,T,N){let ht=null;const G=T.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)ht=G;else if(ht=T.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=ht.uuid,et=F.uuid;let nt=p[J];nt===void 0&&(nt={},p[J]=nt);let K=nt[et];K===void 0&&(K=ht.clone(),nt[et]=K,F.addEventListener("dispose",I)),ht=K}if(ht.visible=F.visible,ht.wireframe=F.wireframe,N===jl?ht.side=F.shadowSide!==null?F.shadowSide:F.side:ht.side=F.shadowSide!==null?F.shadowSide:_[F.side],ht.alphaMap=F.alphaMap,ht.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,ht.map=F.map,ht.clipShadows=F.clipShadows,ht.clippingPlanes=F.clippingPlanes,ht.clipIntersection=F.clipIntersection,ht.displacementMap=F.displacementMap,ht.displacementScale=F.displacementScale,ht.displacementBias=F.displacementBias,ht.wireframeLinewidth=F.wireframeLinewidth,ht.linewidth=F.linewidth,T.isPointLight===!0&&ht.isMeshDistanceMaterial===!0){const J=r.properties.get(ht);J.light=T}return ht}function D(z,F,T,N,ht){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&ht===jl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,z.matrixWorld);const et=t.update(z),nt=z.material;if(Array.isArray(nt)){const K=et.groups;for(let U=0,B=K.length;U<B;U++){const ut=K[U],vt=nt[ut.materialIndex];if(vt&&vt.visible){const Nt=L(z,vt,N,ht);z.onBeforeShadow(r,z,F,T,et,Nt,ut),r.renderBufferDirect(T,null,et,Nt,z,ut),z.onAfterShadow(r,z,F,T,et,Nt,ut)}}}else if(nt.visible){const K=L(z,nt,N,ht);z.onBeforeShadow(r,z,F,T,et,K,null),r.renderBufferDirect(T,null,et,K,z,null),z.onAfterShadow(r,z,F,T,et,K,null)}}const J=z.children;for(let et=0,nt=J.length;et<nt;et++)D(J[et],F,T,N,ht)}function I(z){z.target.removeEventListener("dispose",I);for(const T in p){const N=p[T],ht=z.target.uuid;ht in N&&(N[ht].dispose(),delete N[ht])}}}function w2(r,t){function i(){let X=!1;const pt=new Gn;let Dt=null;const gt=new Gn(0,0,0,0);return{setMask:function(ft){Dt!==ft&&!X&&(r.colorMask(ft,ft,ft,ft),Dt=ft)},setLocked:function(ft){X=ft},setClear:function(ft,Q,kt,ce,Xe){Xe===!0&&(ft*=ce,Q*=ce,kt*=ce),pt.set(ft,Q,kt,ce),gt.equals(pt)===!1&&(r.clearColor(ft,Q,kt,ce),gt.copy(pt))},reset:function(){X=!1,Dt=null,gt.set(-1,0,0,0)}}}function s(){let X=!1,pt=!1,Dt=null,gt=null,ft=null;return{setReversed:function(Q){if(pt!==Q){const kt=t.get("EXT_clip_control");Q?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),pt=Q;const ce=ft;ft=null,this.setClear(ce)}},getReversed:function(){return pt},setTest:function(Q){Q?mt(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(Q){Dt!==Q&&!X&&(r.depthMask(Q),Dt=Q)},setFunc:function(Q){if(pt&&(Q=rE[Q]),gt!==Q){switch(Q){case Fd:r.depthFunc(r.NEVER);break;case Bd:r.depthFunc(r.ALWAYS);break;case zd:r.depthFunc(r.LESS);break;case Po:r.depthFunc(r.LEQUAL);break;case Hd:r.depthFunc(r.EQUAL);break;case Gd:r.depthFunc(r.GEQUAL);break;case Vd:r.depthFunc(r.GREATER);break;case kd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=Q}},setLocked:function(Q){X=Q},setClear:function(Q){ft!==Q&&(ft=Q,pt&&(Q=1-Q),r.clearDepth(Q))},reset:function(){X=!1,Dt=null,gt=null,ft=null,pt=!1}}}function l(){let X=!1,pt=null,Dt=null,gt=null,ft=null,Q=null,kt=null,ce=null,Xe=null;return{setTest:function(De){X||(De?mt(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(De){pt!==De&&!X&&(r.stencilMask(De),pt=De)},setFunc:function(De,Cn,bn){(Dt!==De||gt!==Cn||ft!==bn)&&(r.stencilFunc(De,Cn,bn),Dt=De,gt=Cn,ft=bn)},setOp:function(De,Cn,bn){(Q!==De||kt!==Cn||ce!==bn)&&(r.stencilOp(De,Cn,bn),Q=De,kt=Cn,ce=bn)},setLocked:function(De){X=De},setClear:function(De){Xe!==De&&(r.clearStencil(De),Xe=De)},reset:function(){X=!1,pt=null,Dt=null,gt=null,ft=null,Q=null,kt=null,ce=null,Xe=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},g=new WeakMap,x=[],E=null,w=!1,M=null,y=null,C=null,L=null,D=null,I=null,z=null,F=new fe(0,0,0),T=0,N=!1,ht=null,G=null,J=null,et=null,nt=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const ut=r.getParameter(r.VERSION);ut.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ut)[1]),U=B>=1):ut.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),U=B>=2);let vt=null,Nt={};const P=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),St=new Gn().fromArray(P),Ot=new Gn().fromArray(j);function Yt(X,pt,Dt,gt){const ft=new Uint8Array(4),Q=r.createTexture();r.bindTexture(X,Q),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<Dt;kt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(pt,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(pt+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return Q}const at={};at[r.TEXTURE_2D]=Yt(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=Yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=Yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=Yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),mt(r.DEPTH_TEST),f.setFunc(Po),me(!1),En(v0),mt(r.CULL_FACE),we(Ns);function mt(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function Ut(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function Ft(X,pt){return _[X]!==pt?(r.bindFramebuffer(X,pt),_[X]=pt,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=pt),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=pt),!0):!1}function $t(X,pt){let Dt=x,gt=!1;if(X){Dt=g.get(pt),Dt===void 0&&(Dt=[],g.set(pt,Dt));const ft=X.textures;if(Dt.length!==ft.length||Dt[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,kt=ft.length;Q<kt;Q++)Dt[Q]=r.COLOR_ATTACHMENT0+Q;Dt.length=ft.length,gt=!0}}else Dt[0]!==r.BACK&&(Dt[0]=r.BACK,gt=!0);gt&&r.drawBuffers(Dt)}function re(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Rn={[Qr]:r.FUNC_ADD,[bS]:r.FUNC_SUBTRACT,[TS]:r.FUNC_REVERSE_SUBTRACT};Rn[AS]=r.MIN,Rn[RS]=r.MAX;const Ue={[CS]:r.ZERO,[wS]:r.ONE,[DS]:r.SRC_COLOR,[Id]:r.SRC_ALPHA,[PS]:r.SRC_ALPHA_SATURATE,[OS]:r.DST_COLOR,[LS]:r.DST_ALPHA,[NS]:r.ONE_MINUS_SRC_COLOR,[Pd]:r.ONE_MINUS_SRC_ALPHA,[IS]:r.ONE_MINUS_DST_COLOR,[US]:r.ONE_MINUS_DST_ALPHA,[FS]:r.CONSTANT_COLOR,[BS]:r.ONE_MINUS_CONSTANT_COLOR,[zS]:r.CONSTANT_ALPHA,[HS]:r.ONE_MINUS_CONSTANT_ALPHA};function we(X,pt,Dt,gt,ft,Q,kt,ce,Xe,De){if(X===Ns){w===!0&&(Ut(r.BLEND),w=!1);return}if(w===!1&&(mt(r.BLEND),w=!0),X!==ES){if(X!==M||De!==N){if((y!==Qr||D!==Qr)&&(r.blendEquation(r.FUNC_ADD),y=Qr,D=Qr),De)switch(X){case Io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case x0:r.blendFunc(r.ONE,r.ONE);break;case S0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case y0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ye("WebGLState: Invalid blending: ",X);break}else switch(X){case Io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case x0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case S0:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y0:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",X);break}C=null,L=null,I=null,z=null,F.set(0,0,0),T=0,M=X,N=De}return}ft=ft||pt,Q=Q||Dt,kt=kt||gt,(pt!==y||ft!==D)&&(r.blendEquationSeparate(Rn[pt],Rn[ft]),y=pt,D=ft),(Dt!==C||gt!==L||Q!==I||kt!==z)&&(r.blendFuncSeparate(Ue[Dt],Ue[gt],Ue[Q],Ue[kt]),C=Dt,L=gt,I=Q,z=kt),(ce.equals(F)===!1||Xe!==T)&&(r.blendColor(ce.r,ce.g,ce.b,Xe),F.copy(ce),T=Xe),M=X,N=!1}function je(X,pt){X.side===jn?Ut(r.CULL_FACE):mt(r.CULL_FACE);let Dt=X.side===Bi;pt&&(Dt=!Dt),me(Dt),X.blending===Io&&X.transparent===!1?we(Ns):we(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const gt=X.stencilWrite;h.setTest(gt),gt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),cn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?mt(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(X){ht!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),ht=X)}function En(X){X!==xS?(mt(r.CULL_FACE),X!==G&&(X===v0?r.cullFace(r.BACK):X===SS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),G=X}function k(X){X!==J&&(U&&r.lineWidth(X),J=X)}function cn(X,pt,Dt){X?(mt(r.POLYGON_OFFSET_FILL),(et!==pt||nt!==Dt)&&(et=pt,nt=Dt,f.getReversed()&&(pt=-pt),r.polygonOffset(pt,Dt))):Ut(r.POLYGON_OFFSET_FILL)}function Oe(X){X?mt(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function ke(X){X===void 0&&(X=r.TEXTURE0+K-1),vt!==X&&(r.activeTexture(X),vt=X)}function ee(X,pt,Dt){Dt===void 0&&(vt===null?Dt=r.TEXTURE0+K-1:Dt=vt);let gt=Nt[Dt];gt===void 0&&(gt={type:void 0,texture:void 0},Nt[Dt]=gt),(gt.type!==X||gt.texture!==pt)&&(vt!==Dt&&(r.activeTexture(Dt),vt=Dt),r.bindTexture(X,pt||at[X]),gt.type=X,gt.texture=pt)}function O(){const X=Nt[vt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){Ye("WebGLState:",X)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(X){Ye("WebGLState:",X)}}function yt(){try{r.texSubImage2D(...arguments)}catch(X){Ye("WebGLState:",X)}}function Ct(){try{r.texSubImage3D(...arguments)}catch(X){Ye("WebGLState:",X)}}function xt(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ye("WebGLState:",X)}}function Jt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ye("WebGLState:",X)}}function It(){try{r.texStorage2D(...arguments)}catch(X){Ye("WebGLState:",X)}}function oe(){try{r.texStorage3D(...arguments)}catch(X){Ye("WebGLState:",X)}}function ue(){try{r.texImage2D(...arguments)}catch(X){Ye("WebGLState:",X)}}function H(){try{r.texImage3D(...arguments)}catch(X){Ye("WebGLState:",X)}}function st(X){St.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Mt(X){Ot.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ot.copy(X))}function wt(X,pt){let Dt=p.get(pt);Dt===void 0&&(Dt=new WeakMap,p.set(pt,Dt));let gt=Dt.get(X);gt===void 0&&(gt=r.getUniformBlockIndex(pt,X.name),Dt.set(X,gt))}function Tt(X,pt){const gt=p.get(pt).get(X);m.get(pt)!==gt&&(r.uniformBlockBinding(pt,gt,X.__bindingPointIndex),m.set(pt,gt))}function Kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},vt=null,Nt={},_={},g=new WeakMap,x=[],E=null,w=!1,M=null,y=null,C=null,L=null,D=null,I=null,z=null,F=new fe(0,0,0),T=0,N=!1,ht=null,G=null,J=null,et=null,nt=null,St.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:mt,disable:Ut,bindFramebuffer:Ft,drawBuffers:$t,useProgram:re,setBlending:we,setMaterial:je,setFlipSided:me,setCullFace:En,setLineWidth:k,setPolygonOffset:cn,setScissorTest:Oe,activeTexture:ke,bindTexture:ee,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:Z,texImage2D:ue,texImage3D:H,updateUBOMapping:wt,uniformBlockBinding:Tt,texStorage2D:It,texStorage3D:oe,texSubImage2D:yt,texSubImage3D:Ct,compressedTexSubImage2D:xt,compressedTexSubImage3D:Jt,scissor:st,viewport:Mt,reset:Kt}}function D2(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ce,v=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return x?new OffscreenCanvas(O,b):Eh("canvas")}function w(O,b,Z){let yt=1;const Ct=ee(O);if((Ct.width>Z||Ct.height>Z)&&(yt=Z/Math.max(Ct.width,Ct.height)),yt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xt=Math.floor(yt*Ct.width),Jt=Math.floor(yt*Ct.height);_===void 0&&(_=E(xt,Jt));const It=b?E(xt,Jt):_;return It.width=xt,It.height=Jt,It.getContext("2d").drawImage(O,0,0,xt,Jt),ge("WebGLRenderer: Texture has been resized from ("+Ct.width+"x"+Ct.height+") to ("+xt+"x"+Jt+")."),It}else return"data"in O&&ge("WebGLRenderer: Image in DataTexture is too big ("+Ct.width+"x"+Ct.height+")."),O;return O}function M(O){return O.generateMipmaps}function y(O){r.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,b,Z,yt,Ct=!1){if(O!==null){if(r[O]!==void 0)return r[O];ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xt=b;if(b===r.RED&&(Z===r.FLOAT&&(xt=r.R32F),Z===r.HALF_FLOAT&&(xt=r.R16F),Z===r.UNSIGNED_BYTE&&(xt=r.R8)),b===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(xt=r.R8UI),Z===r.UNSIGNED_SHORT&&(xt=r.R16UI),Z===r.UNSIGNED_INT&&(xt=r.R32UI),Z===r.BYTE&&(xt=r.R8I),Z===r.SHORT&&(xt=r.R16I),Z===r.INT&&(xt=r.R32I)),b===r.RG&&(Z===r.FLOAT&&(xt=r.RG32F),Z===r.HALF_FLOAT&&(xt=r.RG16F),Z===r.UNSIGNED_BYTE&&(xt=r.RG8)),b===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(xt=r.RG8UI),Z===r.UNSIGNED_SHORT&&(xt=r.RG16UI),Z===r.UNSIGNED_INT&&(xt=r.RG32UI),Z===r.BYTE&&(xt=r.RG8I),Z===r.SHORT&&(xt=r.RG16I),Z===r.INT&&(xt=r.RG32I)),b===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(xt=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(xt=r.RGB16UI),Z===r.UNSIGNED_INT&&(xt=r.RGB32UI),Z===r.BYTE&&(xt=r.RGB8I),Z===r.SHORT&&(xt=r.RGB16I),Z===r.INT&&(xt=r.RGB32I)),b===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(xt=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(xt=r.RGBA16UI),Z===r.UNSIGNED_INT&&(xt=r.RGBA32UI),Z===r.BYTE&&(xt=r.RGBA8I),Z===r.SHORT&&(xt=r.RGBA16I),Z===r.INT&&(xt=r.RGBA32I)),b===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(xt=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(xt=r.R11F_G11F_B10F)),b===r.RGBA){const Jt=Ct?Uu:qe.getTransfer(yt);Z===r.FLOAT&&(xt=r.RGBA32F),Z===r.HALF_FLOAT&&(xt=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(xt=Jt===rn?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(xt=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(xt=r.RGB5_A1)}return(xt===r.R16F||xt===r.R32F||xt===r.RG16F||xt===r.RG32F||xt===r.RGBA16F||xt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function D(O,b){let Z;return O?b===null||b===hs||b===$l?Z=r.DEPTH24_STENCIL8:b===ja?Z=r.DEPTH32F_STENCIL8:b===Jl&&(Z=r.DEPTH24_STENCIL8,ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hs||b===$l?Z=r.DEPTH_COMPONENT24:b===ja?Z=r.DEPTH_COMPONENT32F:b===Jl&&(Z=r.DEPTH_COMPONENT16),Z}function I(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Si&&O.minFilter!==Zn?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function z(O){const b=O.target;b.removeEventListener("dispose",z),T(b),b.isVideoTexture&&v.delete(b)}function F(O){const b=O.target;b.removeEventListener("dispose",F),ht(b)}function T(O){const b=s.get(O);if(b.__webglInit===void 0)return;const Z=O.source,yt=g.get(Z);if(yt){const Ct=yt[b.__cacheKey];Ct.usedTimes--,Ct.usedTimes===0&&N(O),Object.keys(yt).length===0&&g.delete(Z)}s.remove(O)}function N(O){const b=s.get(O);r.deleteTexture(b.__webglTexture);const Z=O.source,yt=g.get(Z);delete yt[b.__cacheKey],f.memory.textures--}function ht(O){const b=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(b.__webglFramebuffer[yt]))for(let Ct=0;Ct<b.__webglFramebuffer[yt].length;Ct++)r.deleteFramebuffer(b.__webglFramebuffer[yt][Ct]);else r.deleteFramebuffer(b.__webglFramebuffer[yt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[yt])}else{if(Array.isArray(b.__webglFramebuffer))for(let yt=0;yt<b.__webglFramebuffer.length;yt++)r.deleteFramebuffer(b.__webglFramebuffer[yt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let yt=0;yt<b.__webglColorRenderbuffer.length;yt++)b.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[yt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=O.textures;for(let yt=0,Ct=Z.length;yt<Ct;yt++){const xt=s.get(Z[yt]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),f.memory.textures--),s.remove(Z[yt])}s.remove(O)}let G=0;function J(){G=0}function et(){const O=G;return O>=l.maxTextures&&ge("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function nt(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function K(O,b){const Z=s.get(O);if(O.isVideoTexture&&Oe(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){const yt=O.image;if(yt===null)ge("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)ge("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Z,O,b);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+b)}function U(O,b){const Z=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){at(Z,O,b);return}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+b)}function B(O,b){const Z=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){at(Z,O,b);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+b)}function ut(O,b){const Z=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Z.__version!==O.version){mt(Z,O,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+b)}const vt={[Ql]:r.REPEAT,[Ds]:r.CLAMP_TO_EDGE,[Xd]:r.MIRRORED_REPEAT},Nt={[Si]:r.NEAREST,[kS]:r.NEAREST_MIPMAP_NEAREST,[Eu]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[Nd]:r.LINEAR_MIPMAP_NEAREST,[rr]:r.LINEAR_MIPMAP_LINEAR},P={[YS]:r.NEVER,[QS]:r.ALWAYS,[qS]:r.LESS,[Ph]:r.LEQUAL,[jS]:r.EQUAL,[Fh]:r.GEQUAL,[ZS]:r.GREATER,[KS]:r.NOTEQUAL};function j(O,b){if(b.type===ja&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Zn||b.magFilter===Nd||b.magFilter===Eu||b.magFilter===rr||b.minFilter===Zn||b.minFilter===Nd||b.minFilter===Eu||b.minFilter===rr)&&ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,vt[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,vt[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,vt[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Nt[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Nt[b.minFilter]),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,P[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Si||b.minFilter!==Eu&&b.minFilter!==rr||b.type===ja&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function St(O,b){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",z));const yt=b.source;let Ct=g.get(yt);Ct===void 0&&(Ct={},g.set(yt,Ct));const xt=nt(b);if(xt!==O.__cacheKey){Ct[xt]===void 0&&(Ct[xt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),Ct[xt].usedTimes++;const Jt=Ct[O.__cacheKey];Jt!==void 0&&(Ct[O.__cacheKey].usedTimes--,Jt.usedTimes===0&&N(b)),O.__cacheKey=xt,O.__webglTexture=Ct[xt].texture}return Z}function Ot(O,b,Z){return Math.floor(Math.floor(O/Z)/b)}function Yt(O,b,Z,yt){const xt=O.updateRanges;if(xt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Z,yt,b.data);else{xt.sort((H,st)=>H.start-st.start);let Jt=0;for(let H=1;H<xt.length;H++){const st=xt[Jt],Mt=xt[H],wt=st.start+st.count,Tt=Ot(Mt.start,b.width,4),Kt=Ot(st.start,b.width,4);Mt.start<=wt+1&&Tt===Kt&&Ot(Mt.start+Mt.count-1,b.width,4)===Tt?st.count=Math.max(st.count,Mt.start+Mt.count-st.start):(++Jt,xt[Jt]=Mt)}xt.length=Jt+1;const It=r.getParameter(r.UNPACK_ROW_LENGTH),oe=r.getParameter(r.UNPACK_SKIP_PIXELS),ue=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let H=0,st=xt.length;H<st;H++){const Mt=xt[H],wt=Math.floor(Mt.start/4),Tt=Math.ceil(Mt.count/4),Kt=wt%b.width,X=Math.floor(wt/b.width),pt=Tt,Dt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,Kt,X,pt,Dt,Z,yt,b.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,It),r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,ue)}}function at(O,b,Z){let yt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(yt=r.TEXTURE_3D);const Ct=St(O,b),xt=b.source;i.bindTexture(yt,O.__webglTexture,r.TEXTURE0+Z);const Jt=s.get(xt);if(xt.version!==Jt.__version||Ct===!0){i.activeTexture(r.TEXTURE0+Z);const It=qe.getPrimaries(qe.workingColorSpace),oe=b.colorSpace===sr?null:qe.getPrimaries(b.colorSpace),ue=b.colorSpace===sr||It===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let H=w(b.image,!1,l.maxTextureSize);H=ke(b,H);const st=c.convert(b.format,b.colorSpace),Mt=c.convert(b.type);let wt=L(b.internalFormat,st,Mt,b.colorSpace,b.isVideoTexture);j(yt,b);let Tt;const Kt=b.mipmaps,X=b.isVideoTexture!==!0,pt=Jt.__version===void 0||Ct===!0,Dt=xt.dataReady,gt=I(b,H);if(b.isDepthTexture)wt=D(b.format===Jr,b.type),pt&&(X?i.texStorage2D(r.TEXTURE_2D,1,wt,H.width,H.height):i.texImage2D(r.TEXTURE_2D,0,wt,H.width,H.height,0,st,Mt,null));else if(b.isDataTexture)if(Kt.length>0){X&&pt&&i.texStorage2D(r.TEXTURE_2D,gt,wt,Kt[0].width,Kt[0].height);for(let ft=0,Q=Kt.length;ft<Q;ft++)Tt=Kt[ft],X?Dt&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,st,Mt,Tt.data):i.texImage2D(r.TEXTURE_2D,ft,wt,Tt.width,Tt.height,0,st,Mt,Tt.data);b.generateMipmaps=!1}else X?(pt&&i.texStorage2D(r.TEXTURE_2D,gt,wt,H.width,H.height),Dt&&Yt(b,H,st,Mt)):i.texImage2D(r.TEXTURE_2D,0,wt,H.width,H.height,0,st,Mt,H.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,gt,wt,Kt[0].width,Kt[0].height,H.depth);for(let ft=0,Q=Kt.length;ft<Q;ft++)if(Tt=Kt[ft],b.format!==Za)if(st!==null)if(X){if(Dt)if(b.layerUpdates.size>0){const kt=Fx(Tt.width,Tt.height,b.format,b.type);for(const ce of b.layerUpdates){const Xe=Tt.data.subarray(ce*kt/Tt.data.BYTES_PER_ELEMENT,(ce+1)*kt/Tt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,ce,Tt.width,Tt.height,1,st,Xe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,H.depth,st,Tt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ft,wt,Tt.width,Tt.height,H.depth,0,Tt.data,0,0);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Dt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,H.depth,st,Mt,Tt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ft,wt,Tt.width,Tt.height,H.depth,0,st,Mt,Tt.data)}else{X&&pt&&i.texStorage2D(r.TEXTURE_2D,gt,wt,Kt[0].width,Kt[0].height);for(let ft=0,Q=Kt.length;ft<Q;ft++)Tt=Kt[ft],b.format!==Za?st!==null?X?Dt&&i.compressedTexSubImage2D(r.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,st,Tt.data):i.compressedTexImage2D(r.TEXTURE_2D,ft,wt,Tt.width,Tt.height,0,Tt.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Dt&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,st,Mt,Tt.data):i.texImage2D(r.TEXTURE_2D,ft,wt,Tt.width,Tt.height,0,st,Mt,Tt.data)}else if(b.isDataArrayTexture)if(X){if(pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,gt,wt,H.width,H.height,H.depth),Dt)if(b.layerUpdates.size>0){const ft=Fx(H.width,H.height,b.format,b.type);for(const Q of b.layerUpdates){const kt=H.data.subarray(Q*ft/H.data.BYTES_PER_ELEMENT,(Q+1)*ft/H.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,H.width,H.height,1,st,Mt,kt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,st,Mt,H.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,wt,H.width,H.height,H.depth,0,st,Mt,H.data);else if(b.isData3DTexture)X?(pt&&i.texStorage3D(r.TEXTURE_3D,gt,wt,H.width,H.height,H.depth),Dt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,st,Mt,H.data)):i.texImage3D(r.TEXTURE_3D,0,wt,H.width,H.height,H.depth,0,st,Mt,H.data);else if(b.isFramebufferTexture){if(pt)if(X)i.texStorage2D(r.TEXTURE_2D,gt,wt,H.width,H.height);else{let ft=H.width,Q=H.height;for(let kt=0;kt<gt;kt++)i.texImage2D(r.TEXTURE_2D,kt,wt,ft,Q,0,st,Mt,null),ft>>=1,Q>>=1}}else if(Kt.length>0){if(X&&pt){const ft=ee(Kt[0]);i.texStorage2D(r.TEXTURE_2D,gt,wt,ft.width,ft.height)}for(let ft=0,Q=Kt.length;ft<Q;ft++)Tt=Kt[ft],X?Dt&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,st,Mt,Tt):i.texImage2D(r.TEXTURE_2D,ft,wt,st,Mt,Tt);b.generateMipmaps=!1}else if(X){if(pt){const ft=ee(H);i.texStorage2D(r.TEXTURE_2D,gt,wt,ft.width,ft.height)}Dt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,st,Mt,H)}else i.texImage2D(r.TEXTURE_2D,0,wt,st,Mt,H);M(b)&&y(yt),Jt.__version=xt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function mt(O,b,Z){if(b.image.length!==6)return;const yt=St(O,b),Ct=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+Z);const xt=s.get(Ct);if(Ct.version!==xt.__version||yt===!0){i.activeTexture(r.TEXTURE0+Z);const Jt=qe.getPrimaries(qe.workingColorSpace),It=b.colorSpace===sr?null:qe.getPrimaries(b.colorSpace),oe=b.colorSpace===sr||Jt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ue=b.isCompressedTexture||b.image[0].isCompressedTexture,H=b.image[0]&&b.image[0].isDataTexture,st=[];for(let Q=0;Q<6;Q++)!ue&&!H?st[Q]=w(b.image[Q],!0,l.maxCubemapSize):st[Q]=H?b.image[Q].image:b.image[Q],st[Q]=ke(b,st[Q]);const Mt=st[0],wt=c.convert(b.format,b.colorSpace),Tt=c.convert(b.type),Kt=L(b.internalFormat,wt,Tt,b.colorSpace),X=b.isVideoTexture!==!0,pt=xt.__version===void 0||yt===!0,Dt=Ct.dataReady;let gt=I(b,Mt);j(r.TEXTURE_CUBE_MAP,b);let ft;if(ue){X&&pt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Kt,Mt.width,Mt.height);for(let Q=0;Q<6;Q++){ft=st[Q].mipmaps;for(let kt=0;kt<ft.length;kt++){const ce=ft[kt];b.format!==Za?wt!==null?X?Dt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,kt,0,0,ce.width,ce.height,wt,ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,kt,Kt,ce.width,ce.height,0,ce.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,kt,0,0,ce.width,ce.height,wt,Tt,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,kt,Kt,ce.width,ce.height,0,wt,Tt,ce.data)}}}else{if(ft=b.mipmaps,X&&pt){ft.length>0&&gt++;const Q=ee(st[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(H){X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,st[Q].width,st[Q].height,wt,Tt,st[Q].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,st[Q].width,st[Q].height,0,wt,Tt,st[Q].data);for(let kt=0;kt<ft.length;kt++){const Xe=ft[kt].image[Q].image;X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,kt+1,0,0,Xe.width,Xe.height,wt,Tt,Xe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,kt+1,Kt,Xe.width,Xe.height,0,wt,Tt,Xe.data)}}else{X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt,Tt,st[Q]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,wt,Tt,st[Q]);for(let kt=0;kt<ft.length;kt++){const ce=ft[kt];X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,kt+1,0,0,wt,Tt,ce.image[Q]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,kt+1,Kt,wt,Tt,ce.image[Q])}}}M(b)&&y(r.TEXTURE_CUBE_MAP),xt.__version=Ct.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ut(O,b,Z,yt,Ct,xt){const Jt=c.convert(Z.format,Z.colorSpace),It=c.convert(Z.type),oe=L(Z.internalFormat,Jt,It,Z.colorSpace),ue=s.get(b),H=s.get(Z);if(H.__renderTarget=b,!ue.__hasExternalTextures){const st=Math.max(1,b.width>>xt),Mt=Math.max(1,b.height>>xt);Ct===r.TEXTURE_3D||Ct===r.TEXTURE_2D_ARRAY?i.texImage3D(Ct,xt,oe,st,Mt,b.depth,0,Jt,It,null):i.texImage2D(Ct,xt,oe,st,Mt,0,Jt,It,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),cn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,Ct,H.__webglTexture,0,k(b)):(Ct===r.TEXTURE_2D||Ct>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ct<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,Ct,H.__webglTexture,xt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(O,b,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer){const yt=b.depthTexture,Ct=yt&&yt.isDepthTexture?yt.type:null,xt=D(b.stencilBuffer,Ct),Jt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;cn(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),xt,b.width,b.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),xt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,xt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Jt,r.RENDERBUFFER,O)}else{const yt=b.textures;for(let Ct=0;Ct<yt.length;Ct++){const xt=yt[Ct],Jt=c.convert(xt.format,xt.colorSpace),It=c.convert(xt.type),oe=L(xt.internalFormat,Jt,It,xt.colorSpace);cn(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),oe,b.width,b.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),oe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,oe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $t(O,b,Z){const yt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ct=s.get(b.depthTexture);if(Ct.__renderTarget=b,(!Ct.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),yt){if(Ct.__webglInit===void 0&&(Ct.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),Ct.__webglTexture===void 0){Ct.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Ct.__webglTexture),j(r.TEXTURE_CUBE_MAP,b.depthTexture);const ue=c.convert(b.depthTexture.format),H=c.convert(b.depthTexture.type);let st;b.depthTexture.format===Us?st=r.DEPTH_COMPONENT24:b.depthTexture.format===Jr&&(st=r.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,st,b.width,b.height,0,ue,H,null)}}else K(b.depthTexture,0);const xt=Ct.__webglTexture,Jt=k(b),It=yt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,oe=b.depthTexture.format===Jr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Us)cn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,It,xt,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,oe,It,xt,0);else if(b.depthTexture.format===Jr)cn(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,It,xt,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,oe,It,xt,0);else throw new Error("Unknown depthTexture format")}function re(O){const b=s.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const yt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),yt){const Ct=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,yt.removeEventListener("dispose",Ct)};yt.addEventListener("dispose",Ct),b.__depthDisposeCallback=Ct}b.__boundDepthTexture=yt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let yt=0;yt<6;yt++)$t(b.__webglFramebuffer[yt],O,yt);else{const yt=O.texture.mipmaps;yt&&yt.length>0?$t(b.__webglFramebuffer[0],O,0):$t(b.__webglFramebuffer,O,0)}else if(Z){b.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[yt]),b.__webglDepthbuffer[yt]===void 0)b.__webglDepthbuffer[yt]=r.createRenderbuffer(),Ft(b.__webglDepthbuffer[yt],O,!1);else{const Ct=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=b.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,xt)}}else{const yt=O.texture.mipmaps;if(yt&&yt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ft(b.__webglDepthbuffer,O,!1);else{const Ct=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,xt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Rn(O,b,Z){const yt=s.get(O);b!==void 0&&Ut(yt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&re(O)}function Ue(O){const b=O.texture,Z=s.get(O),yt=s.get(b);O.addEventListener("dispose",F);const Ct=O.textures,xt=O.isWebGLCubeRenderTarget===!0,Jt=Ct.length>1;if(Jt||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=b.version,f.memory.textures++),xt){Z.__webglFramebuffer=[];for(let It=0;It<6;It++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[It]=[];for(let oe=0;oe<b.mipmaps.length;oe++)Z.__webglFramebuffer[It][oe]=r.createFramebuffer()}else Z.__webglFramebuffer[It]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let It=0;It<b.mipmaps.length;It++)Z.__webglFramebuffer[It]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Jt)for(let It=0,oe=Ct.length;It<oe;It++){const ue=s.get(Ct[It]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&cn(O)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let It=0;It<Ct.length;It++){const oe=Ct[It];Z.__webglColorRenderbuffer[It]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[It]);const ue=c.convert(oe.format,oe.colorSpace),H=c.convert(oe.type),st=L(oe.internalFormat,ue,H,oe.colorSpace,O.isXRRenderTarget===!0),Mt=k(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,st,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,Z.__webglColorRenderbuffer[It])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(Z.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xt){i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),j(r.TEXTURE_CUBE_MAP,b);for(let It=0;It<6;It++)if(b.mipmaps&&b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)Ut(Z.__webglFramebuffer[It][oe],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+It,oe);else Ut(Z.__webglFramebuffer[It],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);M(b)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Jt){for(let It=0,oe=Ct.length;It<oe;It++){const ue=Ct[It],H=s.get(ue);let st=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(st=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(st,H.__webglTexture),j(st,ue),Ut(Z.__webglFramebuffer,O,ue,r.COLOR_ATTACHMENT0+It,st,0),M(ue)&&y(st)}i.unbindTexture()}else{let It=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(It=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(It,yt.__webglTexture),j(It,b),b.mipmaps&&b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)Ut(Z.__webglFramebuffer[oe],O,b,r.COLOR_ATTACHMENT0,It,oe);else Ut(Z.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,It,0);M(b)&&y(It),i.unbindTexture()}O.depthBuffer&&re(O)}function we(O){const b=O.textures;for(let Z=0,yt=b.length;Z<yt;Z++){const Ct=b[Z];if(M(Ct)){const xt=C(O),Jt=s.get(Ct).__webglTexture;i.bindTexture(xt,Jt),y(xt),i.unbindTexture()}}}const je=[],me=[];function En(O){if(O.samples>0){if(cn(O)===!1){const b=O.textures,Z=O.width,yt=O.height;let Ct=r.COLOR_BUFFER_BIT;const xt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Jt=s.get(O),It=b.length>1;if(It)for(let ue=0;ue<b.length;ue++)i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const oe=O.texture.mipmaps;oe&&oe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ct|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ct|=r.STENCIL_BUFFER_BIT)),It){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[ue]);const H=s.get(b[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,H,0)}r.blitFramebuffer(0,0,Z,yt,0,0,Z,yt,Ct,r.NEAREST),m===!0&&(je.length=0,me.length=0,je.push(r.COLOR_ATTACHMENT0+ue),O.depthBuffer&&O.resolveDepthBuffer===!1&&(je.push(xt),me.push(xt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,je))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),It)for(let ue=0;ue<b.length;ue++){i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[ue]);const H=s.get(b[ue]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,H,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function k(O){return Math.min(l.maxSamples,O.samples)}function cn(O){const b=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Oe(O){const b=f.render.frame;v.get(O)!==b&&(v.set(O,b),O.update())}function ke(O,b){const Z=O.colorSpace,yt=O.format,Ct=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==zo&&Z!==sr&&(qe.getTransfer(Z)===rn?(yt!==Za||Ct!==oa)&&ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",Z)),b}function ee(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=J,this.setTexture2D=K,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=ut,this.rebindTextures=Rn,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=cn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Ay(r,t){function i(s,l=sr){let c;const f=qe.getTransfer(l);if(s===oa)return r.UNSIGNED_BYTE;if(s===wh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Dh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===X0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===W0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===V0)return r.BYTE;if(s===k0)return r.SHORT;if(s===Jl)return r.UNSIGNED_SHORT;if(s===Ch)return r.INT;if(s===hs)return r.UNSIGNED_INT;if(s===ja)return r.FLOAT;if(s===Ls)return r.HALF_FLOAT;if(s===Y0)return r.ALPHA;if(s===q0)return r.RGB;if(s===Za)return r.RGBA;if(s===Us)return r.DEPTH_COMPONENT;if(s===Jr)return r.DEPTH_STENCIL;if(s===Nh)return r.RED;if(s===Lh)return r.RED_INTEGER;if(s===Bo)return r.RG;if(s===Uh)return r.RG_INTEGER;if(s===Oh)return r.RGBA_INTEGER;if(s===Ru||s===Cu||s===wu||s===Du)if(f===rn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Du)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wd||s===Yd||s===qd||s===jd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===th||s===eh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Zd||s===Kd)return f===rn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Qd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Jd)return c.COMPRESSED_R11_EAC;if(s===$d)return c.COMPRESSED_SIGNED_R11_EAC;if(s===th)return c.COMPRESSED_RG11_EAC;if(s===eh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===nh||s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===nh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ih)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ah)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ch)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ph)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gh||s===_h||s===vh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===gh)return f===rn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_h)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xh||s===Sh||s===yh||s===Mh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===xh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Sh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$l?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const N2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L2=`
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

}`;class U2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ng(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ps({vertexShader:N2,fragmentShader:L2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Re(new Ya(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O2 extends Ho{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,_=null,g=null,x=null,E=null;const w=typeof XRWebGLBinding<"u",M=new U2,y={},C=i.getContextAttributes();let L=null,D=null;const I=[],z=[],F=new Ce;let T=null;const N=new qi;N.viewport=new Gn;const ht=new qi;ht.viewport=new Gn;const G=[N,ht],J=new vy;let et=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let mt=I[at];return mt===void 0&&(mt=new Ld,I[at]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(at){let mt=I[at];return mt===void 0&&(mt=new Ld,I[at]=mt),mt.getGripSpace()},this.getHand=function(at){let mt=I[at];return mt===void 0&&(mt=new Ld,I[at]=mt),mt.getHandSpace()};function K(at){const mt=z.indexOf(at.inputSource);if(mt===-1)return;const Ut=I[mt];Ut!==void 0&&(Ut.update(at.inputSource,at.frame,p||f),Ut.dispatchEvent({type:at.type,data:at.inputSource}))}function U(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",B);for(let at=0;at<I.length;at++){const mt=z[at];mt!==null&&(z[at]=null,I[at].disconnect(mt))}et=null,nt=null,M.reset();for(const at in y)delete y[at];t.setRenderTarget(L),x=null,g=null,_=null,l=null,D=null,Yt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,s.isPresenting===!0&&ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",U),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Ft=null,$t=null;C.depth&&($t=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=C.stencil?Jr:Us,Ft=C.stencil?$l:hs);const re={colorFormat:i.RGBA8,depthFormat:$t,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(re),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new ds(g.textureWidth,g.textureHeight,{format:Za,type:oa,depthTexture:new nc(g.textureWidth,g.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ut={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ds(x.framebufferWidth,x.framebufferHeight,{format:Za,type:oa,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Yt.setContext(l),Yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(at){for(let mt=0;mt<at.removed.length;mt++){const Ut=at.removed[mt],Ft=z.indexOf(Ut);Ft>=0&&(z[Ft]=null,I[Ft].disconnect(Ut))}for(let mt=0;mt<at.added.length;mt++){const Ut=at.added[mt];let Ft=z.indexOf(Ut);if(Ft===-1){for(let re=0;re<I.length;re++)if(re>=z.length){z.push(Ut),Ft=re;break}else if(z[re]===null){z[re]=Ut,Ft=re;break}if(Ft===-1)break}const $t=I[Ft];$t&&$t.connect(Ut)}}const ut=new q,vt=new q;function Nt(at,mt,Ut){ut.setFromMatrixPosition(mt.matrixWorld),vt.setFromMatrixPosition(Ut.matrixWorld);const Ft=ut.distanceTo(vt),$t=mt.projectionMatrix.elements,re=Ut.projectionMatrix.elements,Rn=$t[14]/($t[10]-1),Ue=$t[14]/($t[10]+1),we=($t[9]+1)/$t[5],je=($t[9]-1)/$t[5],me=($t[8]-1)/$t[0],En=(re[8]+1)/re[0],k=Rn*me,cn=Rn*En,Oe=Ft/(-me+En),ke=Oe*-me;if(mt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(ke),at.translateZ(Oe),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),$t[10]===-1)at.projectionMatrix.copy(mt.projectionMatrix),at.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const ee=Rn+Oe,O=Ue+Oe,b=k-ke,Z=cn+(Ft-ke),yt=we*Ue/O*ee,Ct=je*Ue/O*ee;at.projectionMatrix.makePerspective(b,Z,yt,Ct,ee,O),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function P(at,mt){mt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(mt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let mt=at.near,Ut=at.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(Ut=M.depthFar)),J.near=ht.near=N.near=mt,J.far=ht.far=N.far=Ut,(et!==J.near||nt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),et=J.near,nt=J.far),J.layers.mask=at.layers.mask|6,N.layers.mask=J.layers.mask&-5,ht.layers.mask=J.layers.mask&-3;const Ft=at.parent,$t=J.cameras;P(J,Ft);for(let re=0;re<$t.length;re++)P($t[re],Ft);$t.length===2?Nt(J,N,ht):J.projectionMatrix.copy(N.projectionMatrix),j(at,J,Ft)};function j(at,mt,Ut){Ut===null?at.matrix.copy(mt.matrixWorld):(at.matrix.copy(Ut.matrixWorld),at.matrix.invert(),at.matrix.multiply(mt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(mt.projectionMatrix),at.projectionMatrixInverse.copy(mt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=ec*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&x===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(at){return y[at]};let St=null;function Ot(at,mt){if(v=mt.getViewerPose(p||f),E=mt,v!==null){const Ut=v.views;x!==null&&(t.setRenderTargetFramebuffer(D,x.framebuffer),t.setRenderTarget(D));let Ft=!1;Ut.length!==J.cameras.length&&(J.cameras.length=0,Ft=!0);for(let Ue=0;Ue<Ut.length;Ue++){const we=Ut[Ue];let je=null;if(x!==null)je=x.getViewport(we);else{const En=_.getViewSubImage(g,we);je=En.viewport,Ue===0&&(t.setRenderTargetTextures(D,En.colorTexture,En.depthStencilTexture),t.setRenderTarget(D))}let me=G[Ue];me===void 0&&(me=new qi,me.layers.enable(Ue),me.viewport=new Gn,G[Ue]=me),me.matrix.fromArray(we.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(we.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(je.x,je.y,je.width,je.height),Ue===0&&(J.matrix.copy(me.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ft===!0&&J.cameras.push(me)}const $t=l.enabledFeatures;if($t&&$t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){_=s.getBinding();const Ue=_.getDepthInformation(Ut[0]);Ue&&Ue.isValid&&Ue.texture&&M.init(Ue,l.renderState)}if($t&&$t.includes("camera-access")&&w){t.state.unbindTexture(),_=s.getBinding();for(let Ue=0;Ue<Ut.length;Ue++){const we=Ut[Ue].camera;if(we){let je=y[we];je||(je=new ng,y[we]=je);const me=_.getCameraImage(we);je.sourceTexture=me}}}}for(let Ut=0;Ut<I.length;Ut++){const Ft=z[Ut],$t=I[Ut];Ft!==null&&$t!==void 0&&$t.update(Ft,mt,p||f)}St&&St(at,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),E=null}const Yt=new yy;Yt.setAnimationLoop(Ot),this.setAnimationLoop=function(at){St=at},this.dispose=function(){}}}const To=new Ua,I2=new mn;function P2(r,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,cy(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,C,L,D){y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),_(M,y)):y.isMeshPhongMaterial?(c(M,y),v(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&x(M,y,D)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),w(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,C,L):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Bi&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Bi&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const C=t.get(y),L=C.envMap,D=C.envMapRotation;L&&(M.envMap.value=L,To.copy(D),To.x*=-1,To.y*=-1,To.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(To.y*=-1,To.z*=-1),M.envMapRotation.value.setFromMatrix4(I2.makeRotationFromEuler(To)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,C,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*C,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,C){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Bi&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const C=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function F2(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const D=L.program;s.uniformBlockBinding(C,D)}function p(C,L){let D=l[C.id];D===void 0&&(E(C),D=v(C),l[C.id]=D,C.addEventListener("dispose",M));const I=L.program;s.updateUBOMapping(C,I);const z=t.render.frame;c[C.id]!==z&&(g(C),c[C.id]=z)}function v(C){const L=_();C.__bindingPointIndex=L;const D=r.createBuffer(),I=C.__size,z=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,I,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function _(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],D=C.uniforms,I=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,F=D.length;z<F;z++){const T=Array.isArray(D[z])?D[z]:[D[z]];for(let N=0,ht=T.length;N<ht;N++){const G=T[N];if(x(G,z,N,I)===!0){const J=G.__offset,et=Array.isArray(G.value)?G.value:[G.value];let nt=0;for(let K=0;K<et.length;K++){const U=et[K],B=w(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,J+nt,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):(U.toArray(G.__data,nt),nt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(C,L,D,I){const z=C.value,F=L+"_"+D;if(I[F]===void 0)return typeof z=="number"||typeof z=="boolean"?I[F]=z:I[F]=z.clone(),!0;{const T=I[F];if(typeof z=="number"||typeof z=="boolean"){if(T!==z)return I[F]=z,!0}else if(T.equals(z)===!1)return T.copy(z),!0}return!1}function E(C){const L=C.uniforms;let D=0;const I=16;for(let F=0,T=L.length;F<T;F++){const N=Array.isArray(L[F])?L[F]:[L[F]];for(let ht=0,G=N.length;ht<G;ht++){const J=N[ht],et=Array.isArray(J.value)?J.value:[J.value];for(let nt=0,K=et.length;nt<K;nt++){const U=et[nt],B=w(U),ut=D%I,vt=ut%B.boundary,Nt=ut+vt;D+=vt,Nt!==0&&I-Nt<B.storage&&(D+=I-Nt),J.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=B.storage}}}const z=D%I;return z>0&&(D+=I-z),C.__size=D,C.__cache={},this}function w(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ge("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}const B2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cs=null;function z2(){return Cs===null&&(Cs=new tg(B2,16,16,Bo,Ls),Cs.name="DFG_LUT",Cs.minFilter=Zn,Cs.magFilter=Zn,Cs.wrapS=Ds,Cs.wrapT=Ds,Cs.generateMipmaps=!1,Cs.needsUpdate=!0),Cs}class Ry{constructor(t={}){const{canvas:i=JS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:x=oa}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const w=x,M=new Set([Oh,Uh,Lh]),y=new Set([oa,hs,Jl,$l,wh,Dh]),C=new Uint32Array(4),L=new Int32Array(4);let D=null,I=null;const z=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ht=!1;this._outputColorSpace=ui;let G=0,J=0,et=null,nt=-1,K=null;const U=new Gn,B=new Gn;let ut=null;const vt=new fe(0);let Nt=0,P=i.width,j=i.height,St=1,Ot=null,Yt=null;const at=new Gn(0,0,P,j),mt=new Gn(0,0,P,j);let Ut=!1;const Ft=new Hh;let $t=!1,re=!1;const Rn=new mn,Ue=new q,we=new Gn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function En(){return et===null?St:1}let k=s;function cn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Th}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",Xe,!1),k===null){const Y="webgl2";if(k=cn(Y,R),k===null)throw cn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ye("WebGLRenderer: "+R.message),R}let Oe,ke,ee,O,b,Z,yt,Ct,xt,Jt,It,oe,ue,H,st,Mt,wt,Tt,Kt,X,pt,Dt,gt;function ft(){Oe=new GT(k),Oe.init(),pt=new Ay(k,Oe),ke=new UT(k,Oe,t,pt),ee=new w2(k,Oe),ke.reversedDepthBuffer&&g&&ee.buffers.depth.setReversed(!0),O=new XT(k),b=new m2,Z=new D2(k,Oe,ee,b,ke,pt,O),yt=new HT(N),Ct=new ZE(k),Dt=new NT(k,Ct),xt=new VT(k,Ct,O,Dt),Jt=new YT(k,xt,Ct,Dt,O),Tt=new WT(k,ke,Z),st=new OT(b),It=new p2(N,yt,Oe,ke,Dt,st),oe=new P2(N,b),ue=new _2,H=new E2(Oe),wt=new DT(N,yt,ee,Jt,E,m),Mt=new C2(N,Jt,ke),gt=new F2(k,O,ke,ee),Kt=new LT(k,Oe,O),X=new kT(k,Oe,O),O.programs=It.programs,N.capabilities=ke,N.extensions=Oe,N.properties=b,N.renderLists=ue,N.shadowMap=Mt,N.state=ee,N.info=O}ft(),w!==oa&&(T=new jT(w,i.width,i.height,l,c));const Q=new O2(N,k);this.xr=Q,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(R){R!==void 0&&(St=R,this.setSize(P,j,!1))},this.getSize=function(R){return R.set(P,j)},this.setSize=function(R,Y,dt=!0){if(Q.isPresenting){ge("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,j=Y,i.width=Math.floor(R*St),i.height=Math.floor(Y*St),dt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(P*St,j*St).floor()},this.setDrawingBufferSize=function(R,Y,dt){P=R,j=Y,St=dt,i.width=Math.floor(R*dt),i.height=Math.floor(Y*dt),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(w===oa){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,Y,dt,it){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,Y,dt,it),ee.viewport(U.copy(at).multiplyScalar(St).round())},this.getScissor=function(R){return R.copy(mt)},this.setScissor=function(R,Y,dt,it){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,Y,dt,it),ee.scissor(B.copy(mt).multiplyScalar(St).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(R){ee.setScissorTest(Ut=R)},this.setOpaqueSort=function(R){Ot=R},this.setTransparentSort=function(R){Yt=R},this.getClearColor=function(R){return R.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,dt=!0){let it=0;if(R){let tt=!1;if(et!==null){const Ht=et.texture.format;tt=M.has(Ht)}if(tt){const Ht=et.texture.type,qt=y.has(Ht),Vt=wt.getClearColor(),Qt=wt.getClearAlpha(),ne=Vt.r,de=Vt.g,_e=Vt.b;qt?(C[0]=ne,C[1]=de,C[2]=_e,C[3]=Qt,k.clearBufferuiv(k.COLOR,0,C)):(L[0]=ne,L[1]=de,L[2]=_e,L[3]=Qt,k.clearBufferiv(k.COLOR,0,L))}else it|=k.COLOR_BUFFER_BIT}Y&&(it|=k.DEPTH_BUFFER_BIT),dt&&(it|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&k.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",Xe,!1),wt.dispose(),ue.dispose(),H.dispose(),b.dispose(),yt.dispose(),Jt.dispose(),Dt.dispose(),gt.dispose(),It.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Kn),Q.removeEventListener("sessionend",Hi),Tn.stop()};function kt(R){R.preventDefault(),T0("WebGLRenderer: Context Lost."),ht=!0}function ce(){T0("WebGLRenderer: Context Restored."),ht=!1;const R=O.autoReset,Y=Mt.enabled,dt=Mt.autoUpdate,it=Mt.needsUpdate,tt=Mt.type;ft(),O.autoReset=R,Mt.enabled=Y,Mt.autoUpdate=dt,Mt.needsUpdate=it,Mt.type=tt}function Xe(R){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function De(R){const Y=R.target;Y.removeEventListener("dispose",De),Cn(Y)}function Cn(R){bn(R),b.remove(R)}function bn(R){const Y=b.get(R).programs;Y!==void 0&&(Y.forEach(function(dt){It.releaseProgram(dt)}),R.isShaderMaterial&&It.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,dt,it,tt,Ht){Y===null&&(Y=je);const qt=tt.isMesh&&tt.matrixWorld.determinant()<0,Vt=Ps(R,Y,dt,it,tt);ee.setMaterial(it,qt);let Qt=dt.index,ne=1;if(it.wireframe===!0){if(Qt=xt.getWireframeAttribute(dt),Qt===void 0)return;ne=2}const de=dt.drawRange,_e=dt.attributes.position;let Zt=de.start*ne,ve=(de.start+de.count)*ne;Ht!==null&&(Zt=Math.max(Zt,Ht.start*ne),ve=Math.min(ve,(Ht.start+Ht.count)*ne)),Qt!==null?(Zt=Math.max(Zt,0),ve=Math.min(ve,Qt.count)):_e!=null&&(Zt=Math.max(Zt,0),ve=Math.min(ve,_e.count));const vn=ve-Zt;if(vn<0||vn===1/0)return;Dt.setup(tt,it,Vt,dt,Qt);let un,ze=Kt;if(Qt!==null&&(un=Ct.get(Qt),ze=X,ze.setIndex(un)),tt.isMesh)it.wireframe===!0?(ee.setLineWidth(it.wireframeLinewidth*En()),ze.setMode(k.LINES)):ze.setMode(k.TRIANGLES);else if(tt.isLine){let Pn=it.linewidth;Pn===void 0&&(Pn=1),ee.setLineWidth(Pn*En()),tt.isLineSegments?ze.setMode(k.LINES):tt.isLineLoop?ze.setMode(k.LINE_LOOP):ze.setMode(k.LINE_STRIP)}else tt.isPoints?ze.setMode(k.POINTS):tt.isSprite&&ze.setMode(k.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Ou("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))ze.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Pn=tt._multiDrawStarts,Xt=tt._multiDrawCounts,Qn=tt._multiDrawCount,he=Qt?Ct.get(Qt).bytesPerElement:1,fi=b.get(it).currentProgram.getUniforms();for(let Mi=0;Mi<Qn;Mi++)fi.setValue(k,"_gl_DrawID",Mi),ze.render(Pn[Mi]/he,Xt[Mi])}else if(tt.isInstancedMesh)ze.renderInstances(Zt,vn,tt.count);else if(dt.isInstancedBufferGeometry){const Pn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Xt=Math.min(dt.instanceCount,Pn);ze.renderInstances(Zt,vn,Xt)}else ze.render(Zt,vn)};function ms(R,Y,dt){R.transparent===!0&&R.side===jn&&R.forceSinglePass===!1?(R.side=Bi,R.needsUpdate=!0,gs(R,Y,dt),R.side=lr,R.needsUpdate=!0,gs(R,Y,dt),R.side=jn):gs(R,Y,dt)}this.compile=function(R,Y,dt=null){dt===null&&(dt=R),I=H.get(dt),I.init(Y),F.push(I),dt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(I.pushLight(tt),tt.castShadow&&I.pushShadow(tt))}),R!==dt&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(I.pushLight(tt),tt.castShadow&&I.pushShadow(tt))}),I.setupLights();const it=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Ht=tt.material;if(Ht)if(Array.isArray(Ht))for(let qt=0;qt<Ht.length;qt++){const Vt=Ht[qt];ms(Vt,dt,tt),it.add(Vt)}else ms(Ht,dt,tt),it.add(Ht)}),I=F.pop(),it},this.compileAsync=function(R,Y,dt=null){const it=this.compile(R,Y,dt);return new Promise(tt=>{function Ht(){if(it.forEach(function(qt){b.get(qt).currentProgram.isReady()&&it.delete(qt)}),it.size===0){tt(R);return}setTimeout(Ht,10)}Oe.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let Vn=null;function Qa(R){Vn&&Vn(R)}function Kn(){Tn.stop()}function Hi(){Tn.start()}const Tn=new yy;Tn.setAnimationLoop(Qa),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(R){Vn=R,Q.setAnimationLoop(R),R===null?Tn.stop():Tn.start()},Q.addEventListener("sessionstart",Kn),Q.addEventListener("sessionend",Hi),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ht===!0)return;const dt=Q.enabled===!0&&Q.isPresenting===!0,it=T!==null&&(et===null||dt)&&T.begin(N,et);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(Y),Y=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,Y,et),I=H.get(R,F.length),I.init(Y),F.push(I),Rn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ft.setFromProjectionMatrix(Rn,us,Y.reversedDepth),re=this.localClippingEnabled,$t=st.init(this.clippingPlanes,re),D=ue.get(R,z.length),D.init(),z.push(D),Q.enabled===!0&&Q.isPresenting===!0){const qt=N.xr.getDepthSensingMesh();qt!==null&&Gi(qt,Y,-1/0,N.sortObjects)}Gi(R,Y,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(Ot,Yt),me=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,me&&wt.addToRenderList(D,R),this.info.render.frame++,$t===!0&&st.beginShadows();const tt=I.state.shadowsArray;if(Mt.render(tt,R,Y),$t===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&T.hasRenderPass())===!1){const qt=D.opaque,Vt=D.transmissive;if(I.setupLights(),Y.isArrayCamera){const Qt=Y.cameras;if(Vt.length>0)for(let ne=0,de=Qt.length;ne<de;ne++){const _e=Qt[ne];gn(qt,Vt,R,_e)}me&&wt.render(R);for(let ne=0,de=Qt.length;ne<de;ne++){const _e=Qt[ne];ai(D,R,_e,_e.viewport)}}else Vt.length>0&&gn(qt,Vt,R,Y),me&&wt.render(R),ai(D,R,Y)}et!==null&&J===0&&(Z.updateMultisampleRenderTarget(et),Z.updateRenderTargetMipmap(et)),it&&T.end(N),R.isScene===!0&&R.onAfterRender(N,R,Y),Dt.resetDefaultState(),nt=-1,K=null,F.pop(),F.length>0?(I=F[F.length-1],$t===!0&&st.setGlobalState(N.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?D=z[z.length-1]:D=null};function Gi(R,Y,dt,it){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)dt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ft.intersectsSprite(R)){it&&we.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Rn);const qt=Jt.update(R),Vt=R.material;Vt.visible&&D.push(R,qt,Vt,dt,we.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ft.intersectsObject(R))){const qt=Jt.update(R),Vt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),we.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),we.copy(qt.boundingSphere.center)),we.applyMatrix4(R.matrixWorld).applyMatrix4(Rn)),Array.isArray(Vt)){const Qt=qt.groups;for(let ne=0,de=Qt.length;ne<de;ne++){const _e=Qt[ne],Zt=Vt[_e.materialIndex];Zt&&Zt.visible&&D.push(R,qt,Zt,dt,we.z,_e)}}else Vt.visible&&D.push(R,qt,Vt,dt,we.z,null)}}const Ht=R.children;for(let qt=0,Vt=Ht.length;qt<Vt;qt++)Gi(Ht[qt],Y,dt,it)}function ai(R,Y,dt,it){const{opaque:tt,transmissive:Ht,transparent:qt}=R;I.setupLightsView(dt),$t===!0&&st.setGlobalState(N.clippingPlanes,dt),it&&ee.viewport(U.copy(it)),tt.length>0&&_n(tt,Y,dt),Ht.length>0&&_n(Ht,Y,dt),qt.length>0&&_n(qt,Y,dt),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function gn(R,Y,dt,it){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[it.id]===void 0){const Zt=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[it.id]=new ds(1,1,{generateMipmaps:!0,type:Zt?Ls:oa,minFilter:rr,samples:Math.max(4,ke.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const Ht=I.state.transmissionRenderTarget[it.id],qt=it.viewport||U;Ht.setSize(qt.z*N.transmissionResolutionScale,qt.w*N.transmissionResolutionScale);const Vt=N.getRenderTarget(),Qt=N.getActiveCubeFace(),ne=N.getActiveMipmapLevel();N.setRenderTarget(Ht),N.getClearColor(vt),Nt=N.getClearAlpha(),Nt<1&&N.setClearColor(16777215,.5),N.clear(),me&&wt.render(dt);const de=N.toneMapping;N.toneMapping=fs;const _e=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),I.setupLightsView(it),$t===!0&&st.setGlobalState(N.clippingPlanes,it),_n(R,dt,it),Z.updateMultisampleRenderTarget(Ht),Z.updateRenderTargetMipmap(Ht),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ve=0,vn=Y.length;ve<vn;ve++){const un=Y[ve],{object:ze,geometry:Pn,material:Xt,group:Qn}=un;if(Xt.side===jn&&ze.layers.test(it.layers)){const he=Xt.side;Xt.side=Bi,Xt.needsUpdate=!0,wn(ze,dt,it,Pn,Xt,Qn),Xt.side=he,Xt.needsUpdate=!0,Zt=!0}}Zt===!0&&(Z.updateMultisampleRenderTarget(Ht),Z.updateRenderTargetMipmap(Ht))}N.setRenderTarget(Vt,Qt,ne),N.setClearColor(vt,Nt),_e!==void 0&&(it.viewport=_e),N.toneMapping=de}function _n(R,Y,dt){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let tt=0,Ht=R.length;tt<Ht;tt++){const qt=R[tt],{object:Vt,geometry:Qt,group:ne}=qt;let de=qt.material;de.allowOverride===!0&&it!==null&&(de=it),Vt.layers.test(dt.layers)&&wn(Vt,Y,dt,Qt,de,ne)}}function wn(R,Y,dt,it,tt,Ht){R.onBeforeRender(N,Y,dt,it,tt,Ht),R.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(N,Y,dt,it,R,Ht),tt.transparent===!0&&tt.side===jn&&tt.forceSinglePass===!1?(tt.side=Bi,tt.needsUpdate=!0,N.renderBufferDirect(dt,Y,it,tt,R,Ht),tt.side=lr,tt.needsUpdate=!0,N.renderBufferDirect(dt,Y,it,tt,R,Ht),tt.side=jn):N.renderBufferDirect(dt,Y,it,tt,R,Ht),R.onAfterRender(N,Y,dt,it,tt,Ht)}function gs(R,Y,dt){Y.isScene!==!0&&(Y=je);const it=b.get(R),tt=I.state.lights,Ht=I.state.shadowsArray,qt=tt.state.version,Vt=It.getParameters(R,tt.state,Ht,Y,dt),Qt=It.getProgramCacheKey(Vt);let ne=it.programs;it.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,it.fog=Y.fog;const de=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;it.envMap=yt.get(R.envMap||it.environment,de),it.envMapRotation=it.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",De),ne=new Map,it.programs=ne);let _e=ne.get(Qt);if(_e!==void 0){if(it.currentProgram===_e&&it.lightsStateVersion===qt)return Is(R,Vt),_e}else Vt.uniforms=It.getUniforms(R),R.onBeforeCompile(Vt,N),_e=It.acquireProgram(Vt,Qt),ne.set(Qt,_e),it.uniforms=Vt.uniforms;const Zt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=st.uniform),Is(R,Vt),it.needsLights=ur(R),it.lightsStateVersion=qt,it.needsLights&&(Zt.ambientLightColor.value=tt.state.ambient,Zt.lightProbe.value=tt.state.probe,Zt.directionalLights.value=tt.state.directional,Zt.directionalLightShadows.value=tt.state.directionalShadow,Zt.spotLights.value=tt.state.spot,Zt.spotLightShadows.value=tt.state.spotShadow,Zt.rectAreaLights.value=tt.state.rectArea,Zt.ltc_1.value=tt.state.rectAreaLTC1,Zt.ltc_2.value=tt.state.rectAreaLTC2,Zt.pointLights.value=tt.state.point,Zt.pointLightShadows.value=tt.state.pointShadow,Zt.hemisphereLights.value=tt.state.hemi,Zt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Zt.spotLightMatrix.value=tt.state.spotLightMatrix,Zt.spotLightMap.value=tt.state.spotLightMap,Zt.pointShadowMatrix.value=tt.state.pointShadowMatrix),it.currentProgram=_e,it.uniformsList=null,_e}function Os(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Od.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Is(R,Y){const dt=b.get(R);dt.outputColorSpace=Y.outputColorSpace,dt.batching=Y.batching,dt.batchingColor=Y.batchingColor,dt.instancing=Y.instancing,dt.instancingColor=Y.instancingColor,dt.instancingMorph=Y.instancingMorph,dt.skinning=Y.skinning,dt.morphTargets=Y.morphTargets,dt.morphNormals=Y.morphNormals,dt.morphColors=Y.morphColors,dt.morphTargetsCount=Y.morphTargetsCount,dt.numClippingPlanes=Y.numClippingPlanes,dt.numIntersection=Y.numClipIntersection,dt.vertexAlphas=Y.vertexAlphas,dt.vertexTangents=Y.vertexTangents,dt.toneMapping=Y.toneMapping}function Ps(R,Y,dt,it,tt){Y.isScene!==!0&&(Y=je),Z.resetTextureUnits();const Ht=Y.fog,qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Y.environment:null,Vt=et===null?N.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:zo,Qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,ne=yt.get(it.envMap||qt,Qt),de=it.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,_e=!!dt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Zt=!!dt.morphAttributes.position,ve=!!dt.morphAttributes.normal,vn=!!dt.morphAttributes.color;let un=fs;it.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(un=N.toneMapping);const ze=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Pn=ze!==void 0?ze.length:0,Xt=b.get(it),Qn=I.state.lights;if($t===!0&&(re===!0||R!==K)){const yn=R===K&&it.id===nt;st.setState(it,R,yn)}let he=!1;it.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Qn.state.version||Xt.outputColorSpace!==Vt||tt.isBatchedMesh&&Xt.batching===!1||!tt.isBatchedMesh&&Xt.batching===!0||tt.isBatchedMesh&&Xt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Xt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Xt.instancing===!1||!tt.isInstancedMesh&&Xt.instancing===!0||tt.isSkinnedMesh&&Xt.skinning===!1||!tt.isSkinnedMesh&&Xt.skinning===!0||tt.isInstancedMesh&&Xt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Xt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Xt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Xt.instancingMorph===!1&&tt.morphTexture!==null||Xt.envMap!==ne||it.fog===!0&&Xt.fog!==Ht||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==st.numPlanes||Xt.numIntersection!==st.numIntersection)||Xt.vertexAlphas!==de||Xt.vertexTangents!==_e||Xt.morphTargets!==Zt||Xt.morphNormals!==ve||Xt.morphColors!==vn||Xt.toneMapping!==un||Xt.morphTargetsCount!==Pn)&&(he=!0):(he=!0,Xt.__version=it.version);let fi=Xt.currentProgram;he===!0&&(fi=gs(it,Y,tt));let Mi=!1,nn=!1,di=!1;const tn=fi.getUniforms(),Fn=Xt.uniforms;if(ee.useProgram(fi.program)&&(Mi=!0,nn=!0,di=!0),it.id!==nt&&(nt=it.id,nn=!0),Mi||K!==R){ee.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),tn.setValue(k,"projectionMatrix",R.projectionMatrix),tn.setValue(k,"viewMatrix",R.matrixWorldInverse);const kn=tn.map.cameraPosition;kn!==void 0&&kn.setValue(k,Ue.setFromMatrixPosition(R.matrixWorld)),ke.logarithmicDepthBuffer&&tn.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&tn.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,nn=!0,di=!0)}if(Xt.needsLights&&(Qn.state.directionalShadowMap.length>0&&tn.setValue(k,"directionalShadowMap",Qn.state.directionalShadowMap,Z),Qn.state.spotShadowMap.length>0&&tn.setValue(k,"spotShadowMap",Qn.state.spotShadowMap,Z),Qn.state.pointShadowMap.length>0&&tn.setValue(k,"pointShadowMap",Qn.state.pointShadowMap,Z)),tt.isSkinnedMesh){tn.setOptional(k,tt,"bindMatrix"),tn.setOptional(k,tt,"bindMatrixInverse");const yn=tt.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),tn.setValue(k,"boneTexture",yn.boneTexture,Z))}tt.isBatchedMesh&&(tn.setOptional(k,tt,"batchingTexture"),tn.setValue(k,"batchingTexture",tt._matricesTexture,Z),tn.setOptional(k,tt,"batchingIdTexture"),tn.setValue(k,"batchingIdTexture",tt._indirectTexture,Z),tn.setOptional(k,tt,"batchingColorTexture"),tt._colorsTexture!==null&&tn.setValue(k,"batchingColorTexture",tt._colorsTexture,Z));const Dn=dt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Tt.update(tt,dt,fi),(nn||Xt.receiveShadow!==tt.receiveShadow)&&(Xt.receiveShadow=tt.receiveShadow,tn.setValue(k,"receiveShadow",tt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Y.environment!==null&&(Fn.envMapIntensity.value=Y.environmentIntensity),Fn.dfgLUT!==void 0&&(Fn.dfgLUT.value=z2()),nn&&(tn.setValue(k,"toneMappingExposure",N.toneMappingExposure),Xt.needsLights&&Oa(Fn,di),Ht&&it.fog===!0&&oe.refreshFogUniforms(Fn,Ht),oe.refreshMaterialUniforms(Fn,it,St,j,I.state.transmissionRenderTarget[R.id]),Od.upload(k,Os(Xt),Fn,Z)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Od.upload(k,Os(Xt),Fn,Z),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&tn.setValue(k,"center",tt.center),tn.setValue(k,"modelViewMatrix",tt.modelViewMatrix),tn.setValue(k,"normalMatrix",tt.normalMatrix),tn.setValue(k,"modelMatrix",tt.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const yn=it.uniformsGroups;for(let kn=0,Ri=yn.length;kn<Ri;kn++){const vs=yn[kn];gt.update(vs,fi),gt.bind(vs,fi)}}return fi}function Oa(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ur(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(R,Y,dt){const it=b.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Y,b.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:dt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const dt=b.get(R);dt.__webglFramebuffer=Y,dt.__useDefaultFramebuffer=Y===void 0};const Ja=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,dt=0){et=R,G=Y,J=dt;let it=null,tt=!1,Ht=!1;if(R){const Vt=b.get(R);if(Vt.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(k.FRAMEBUFFER,Vt.__webglFramebuffer),U.copy(R.viewport),B.copy(R.scissor),ut=R.scissorTest,ee.viewport(U),ee.scissor(B),ee.setScissorTest(ut),nt=-1;return}else if(Vt.__webglFramebuffer===void 0)Z.setupRenderTarget(R);else if(Vt.__hasExternalTextures)Z.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const de=R.depthTexture;if(Vt.__boundDepthTexture!==de){if(de!==null&&b.has(de)&&(R.width!==de.image.width||R.height!==de.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ht=!0);const ne=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?it=ne[Y][dt]:it=ne[Y],tt=!0):R.samples>0&&Z.useMultisampledRTT(R)===!1?it=b.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?it=ne[dt]:it=ne,U.copy(R.viewport),B.copy(R.scissor),ut=R.scissorTest}else U.copy(at).multiplyScalar(St).floor(),B.copy(mt).multiplyScalar(St).floor(),ut=Ut;if(dt!==0&&(it=Ja),ee.bindFramebuffer(k.FRAMEBUFFER,it)&&ee.drawBuffers(R,it),ee.viewport(U),ee.scissor(B),ee.setScissorTest(ut),tt){const Vt=b.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Vt.__webglTexture,dt)}else if(Ht){const Vt=Y;for(let Qt=0;Qt<R.textures.length;Qt++){const ne=b.get(R.textures[Qt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,dt,Vt)}}else if(R!==null&&dt!==0){const Vt=b.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Vt.__webglTexture,dt)}nt=-1},this.readRenderTargetPixels=function(R,Y,dt,it,tt,Ht,qt,Vt=0){if(!(R&&R.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Qt=Qt[qt]),Qt){ee.bindFramebuffer(k.FRAMEBUFFER,Qt);try{const ne=R.textures[Vt],de=ne.format,_e=ne.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Vt),!ke.textureFormatReadable(de)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(_e)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-it&&dt>=0&&dt<=R.height-tt&&k.readPixels(Y,dt,it,tt,pt.convert(de),pt.convert(_e),Ht)}finally{const ne=et!==null?b.get(et).__webglFramebuffer:null;ee.bindFramebuffer(k.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,Y,dt,it,tt,Ht,qt,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Qt=Qt[qt]),Qt)if(Y>=0&&Y<=R.width-it&&dt>=0&&dt<=R.height-tt){ee.bindFramebuffer(k.FRAMEBUFFER,Qt);const ne=R.textures[Vt],de=ne.format,_e=ne.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Vt),!ke.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.bufferData(k.PIXEL_PACK_BUFFER,Ht.byteLength,k.STREAM_READ),k.readPixels(Y,dt,it,tt,pt.convert(de),pt.convert(_e),0);const ve=et!==null?b.get(et).__webglFramebuffer:null;ee.bindFramebuffer(k.FRAMEBUFFER,ve);const vn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await sE(k,vn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ht),k.deleteBuffer(Zt),k.deleteSync(vn),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,dt=0){const it=Math.pow(2,-dt),tt=Math.floor(R.image.width*it),Ht=Math.floor(R.image.height*it),qt=Y!==null?Y.x:0,Vt=Y!==null?Y.y:0;Z.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,dt,0,0,qt,Vt,tt,Ht),ee.unbindTexture()};const $a=k.createFramebuffer(),_s=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,dt=null,it=null,tt=0,Ht=0){let qt,Vt,Qt,ne,de,_e,Zt,ve,vn;const un=R.isCompressedTexture?R.mipmaps[Ht]:R.image;if(dt!==null)qt=dt.max.x-dt.min.x,Vt=dt.max.y-dt.min.y,Qt=dt.isBox3?dt.max.z-dt.min.z:1,ne=dt.min.x,de=dt.min.y,_e=dt.isBox3?dt.min.z:0;else{const Fn=Math.pow(2,-tt);qt=Math.floor(un.width*Fn),Vt=Math.floor(un.height*Fn),R.isDataArrayTexture?Qt=un.depth:R.isData3DTexture?Qt=Math.floor(un.depth*Fn):Qt=1,ne=0,de=0,_e=0}it!==null?(Zt=it.x,ve=it.y,vn=it.z):(Zt=0,ve=0,vn=0);const ze=pt.convert(Y.format),Pn=pt.convert(Y.type);let Xt;Y.isData3DTexture?(Z.setTexture3D(Y,0),Xt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Z.setTexture2DArray(Y,0),Xt=k.TEXTURE_2D_ARRAY):(Z.setTexture2D(Y,0),Xt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Qn=k.getParameter(k.UNPACK_ROW_LENGTH),he=k.getParameter(k.UNPACK_IMAGE_HEIGHT),fi=k.getParameter(k.UNPACK_SKIP_PIXELS),Mi=k.getParameter(k.UNPACK_SKIP_ROWS),nn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,un.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,un.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,de),k.pixelStorei(k.UNPACK_SKIP_IMAGES,_e);const di=R.isDataArrayTexture||R.isData3DTexture,tn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Fn=b.get(R),Dn=b.get(Y),yn=b.get(Fn.__renderTarget),kn=b.get(Dn.__renderTarget);ee.bindFramebuffer(k.READ_FRAMEBUFFER,yn.__webglFramebuffer),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Ri=0;Ri<Qt;Ri++)di&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(R).__webglTexture,tt,_e+Ri),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Ht,vn+Ri)),k.blitFramebuffer(ne,de,qt,Vt,Zt,ve,qt,Vt,k.DEPTH_BUFFER_BIT,k.NEAREST);ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||b.has(R)){const Fn=b.get(R),Dn=b.get(Y);ee.bindFramebuffer(k.READ_FRAMEBUFFER,$a),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,_s);for(let yn=0;yn<Qt;yn++)di?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fn.__webglTexture,tt,_e+yn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Fn.__webglTexture,tt),tn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dn.__webglTexture,Ht,vn+yn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dn.__webglTexture,Ht),tt!==0?k.blitFramebuffer(ne,de,qt,Vt,Zt,ve,qt,Vt,k.COLOR_BUFFER_BIT,k.NEAREST):tn?k.copyTexSubImage3D(Xt,Ht,Zt,ve,vn+yn,ne,de,qt,Vt):k.copyTexSubImage2D(Xt,Ht,Zt,ve,ne,de,qt,Vt);ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else tn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Xt,Ht,Zt,ve,vn,qt,Vt,Qt,ze,Pn,un.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Xt,Ht,Zt,ve,vn,qt,Vt,Qt,ze,un.data):k.texSubImage3D(Xt,Ht,Zt,ve,vn,qt,Vt,Qt,ze,Pn,un):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ht,Zt,ve,qt,Vt,ze,Pn,un.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ht,Zt,ve,un.width,un.height,ze,un.data):k.texSubImage2D(k.TEXTURE_2D,Ht,Zt,ve,qt,Vt,ze,Pn,un);k.pixelStorei(k.UNPACK_ROW_LENGTH,Qn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,he),k.pixelStorei(k.UNPACK_SKIP_PIXELS,fi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Mi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,nn),Ht===0&&Y.generateMipmaps&&k.generateMipmap(Xt),ee.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&Z.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Z.setTextureCube(R,0):R.isData3DTexture?Z.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Z.setTexture2DArray(R,0):Z.setTexture2D(R,0),ee.unbindTexture()},this.resetState=function(){G=0,J=0,et=null,ee.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(t),i.unpackColorSpace=qe._getUnpackColorSpace()}}const H2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Rh,AddEquation:Qr,AddOperation:VS,AdditiveBlending:x0,AgXToneMapping:z0,AlphaFormat:Y0,AlwaysCompare:QS,AlwaysDepth:Bd,AlwaysStencilFunc:M0,AmbientLight:gy,ArrayCamera:vy,BackSide:Bi,BasicDepthPacking:XS,BasicShadowMap:yS,Box3:eo,BoxGeometry:no,BufferAttribute:Ka,BufferGeometry:zi,ByteType:V0,Camera:sg,CanvasTexture:Zl,CatmullRomCurve3:ly,CineonToneMapping:F0,CircleGeometry:Pu,ClampToEdgeWrapping:Ds,Clock:Sy,Color:fe,ColorManagement:qe,ConstantAlphaFactor:zS,ConstantColorFactor:FS,CubeCamera:_y,CubeDepthTexture:ry,CubeReflectionMapping:to,CubeRefractionMapping:Fo,CubeTexture:eg,CubeUVReflectionMapping:Bu,CullFaceBack:v0,CullFaceFront:SS,CullFaceNone:xS,Curve:oy,CustomBlending:ES,CustomToneMapping:B0,CylinderGeometry:Fu,Data3DTexture:ny,DataArrayTexture:Z0,DataTexture:tg,DepthFormat:Us,DepthStencilFormat:Jr,DepthTexture:nc,DirectionalLight:R0,DoubleSide:jn,DstAlphaFactor:LS,DstColorFactor:OS,EqualCompare:jS,EqualDepth:Hd,EquirectangularReflectionMapping:wd,EquirectangularRefractionMapping:Dd,Euler:Ua,EventDispatcher:Ho,ExternalTexture:ng,Float32BufferAttribute:Sn,FloatType:ja,Fog:Iu,FrontSide:lr,Frustum:Hh,GLSL3:b0,GreaterCompare:ZS,GreaterDepth:Vd,GreaterEqualCompare:Fh,GreaterEqualDepth:Gd,Group:Lo,HalfFloatType:Ls,HemisphereLight:my,ImageUtils:ty,InstancedBufferAttribute:A0,InstancedMesh:ay,IntType:Ch,KeepStencilOp:wo,Layers:zh,LessCompare:qS,LessDepth:zd,LessEqualCompare:Ph,LessEqualDepth:Po,Light:rc,LinearFilter:Zn,LinearMipmapLinearFilter:rr,LinearMipmapNearestFilter:Nd,LinearSRGBColorSpace:zo,LinearToneMapping:I0,LinearTransfer:Uu,Material:Go,MathUtils:Ke,Matrix3:Ee,Matrix4:mn,MaxEquation:RS,Mesh:Re,MeshBasicMaterial:Uo,MeshDepthMaterial:hy,MeshDistanceMaterial:py,MeshLambertMaterial:dy,MeshPhysicalMaterial:Do,MeshStandardMaterial:La,MinEquation:AS,MirroredRepeatWrapping:Xd,MixOperation:GS,MultiplyBlending:y0,MultiplyOperation:Ah,NearestFilter:Si,NearestMipmapLinearFilter:Eu,NearestMipmapNearestFilter:kS,NeutralToneMapping:H0,NeverCompare:YS,NeverDepth:Fd,NoBlending:Ns,NoColorSpace:sr,NoToneMapping:fs,NormalBlending:Io,NotEqualCompare:KS,NotEqualDepth:kd,Object3D:Mn,ObjectSpaceNormalMap:WS,OneFactor:wS,OneMinusConstantAlphaFactor:HS,OneMinusConstantColorFactor:BS,OneMinusDstAlphaFactor:US,OneMinusDstColorFactor:IS,OneMinusSrcAlphaFactor:Pd,OneMinusSrcColorFactor:NS,OrthographicCamera:Xh,PCFShadowMap:Oo,PCFSoftShadowMap:MS,PMREMGenerator:bh,PerspectiveCamera:qi,Plane:Zr,PlaneGeometry:Ya,PointLight:Kr,Quaternion:cr,R11_EAC_Format:Jd,RED_GREEN_RGTC2_Format:yh,RED_RGTC1_Format:xh,REVISION:Th,RG11_EAC_Format:th,RGBAFormat:Za,RGBAIntegerFormat:Oh,RGBA_ASTC_10x10_Format:hh,RGBA_ASTC_10x5_Format:uh,RGBA_ASTC_10x6_Format:fh,RGBA_ASTC_10x8_Format:dh,RGBA_ASTC_12x10_Format:ph,RGBA_ASTC_12x12_Format:mh,RGBA_ASTC_4x4_Format:nh,RGBA_ASTC_5x4_Format:ih,RGBA_ASTC_5x5_Format:ah,RGBA_ASTC_6x5_Format:sh,RGBA_ASTC_6x6_Format:rh,RGBA_ASTC_8x5_Format:oh,RGBA_ASTC_8x6_Format:lh,RGBA_ASTC_8x8_Format:ch,RGBA_BPTC_Format:gh,RGBA_ETC2_EAC_Format:Qd,RGBA_PVRTC_2BPPV1_Format:jd,RGBA_PVRTC_4BPPV1_Format:qd,RGBA_S3TC_DXT1_Format:Cu,RGBA_S3TC_DXT3_Format:wu,RGBA_S3TC_DXT5_Format:Du,RGBFormat:q0,RGB_BPTC_SIGNED_Format:_h,RGB_BPTC_UNSIGNED_Format:vh,RGB_ETC1_Format:Zd,RGB_ETC2_Format:Kd,RGB_PVRTC_2BPPV1_Format:Yd,RGB_PVRTC_4BPPV1_Format:Wd,RGB_S3TC_DXT1_Format:Ru,RGFormat:Bo,RGIntegerFormat:Uh,RawShaderMaterial:fy,Ray:$0,Raycaster:xy,RedFormat:Nh,RedIntegerFormat:Lh,ReinhardToneMapping:P0,RenderTarget:ey,RepeatWrapping:Ql,ReverseSubtractEquation:TS,RingGeometry:Gh,SIGNED_R11_EAC_Format:$d,SIGNED_RED_GREEN_RGTC2_Format:Mh,SIGNED_RED_RGTC1_Format:Sh,SIGNED_RG11_EAC_Format:eh,SRGBColorSpace:ui,SRGBTransfer:rn,Scene:K0,ShaderChunk:Ae,ShaderLib:cs,ShaderMaterial:ps,ShortType:k0,Source:Bh,Sphere:sc,SphereGeometry:Vh,SpotLight:Ud,SrcAlphaFactor:Id,SrcAlphaSaturateFactor:PS,SrcColorFactor:DS,StaticDrawUsage:E0,SubtractEquation:bS,SubtractiveBlending:S0,TangentSpaceNormalMap:Ih,Texture:yi,TorusGeometry:kh,Triangle:qa,UVMapping:G0,Uint16BufferAttribute:Q0,Uint32BufferAttribute:J0,UniformsLib:Wt,UniformsUtils:uy,UnsignedByteType:oa,UnsignedInt101111Type:W0,UnsignedInt248Type:$l,UnsignedInt5999Type:X0,UnsignedIntType:hs,UnsignedShort4444Type:wh,UnsignedShort5551Type:Dh,UnsignedShortType:Jl,VSMShadowMap:jl,Vector2:Ce,Vector3:q,Vector4:Gn,VideoTexture:sy,WebGLCoordinateSystem:us,WebGLCubeRenderTarget:rg,WebGLRenderTarget:ds,WebGLRenderer:Ry,WebGLUtils:Ay,WebGPUCoordinateSystem:tc,WebXRController:Ld,ZeroFactor:CS,createCanvasElement:JS,error:Ye,log:T0,warn:ge,warnOnce:Ou},Symbol.toStringTag,{value:"Module"}));class G2 extends K0{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new no;t.deleteAttribute("uv");const i=new La({side:Bi}),s=new La,l=new Kr(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Re(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new ay(t,s,6),h=new Mn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),f.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),f.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),f.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),f.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),f.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),f.setMatrixAt(5,h.matrix),this.add(f);const m=new Re(t,kl(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Re(t,kl(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const v=new Re(t,kl(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const _=new Re(t,kl(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new Re(t,kl(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const x=new Re(t,kl(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function kl(r){return new dy({color:0,emissive:16777215,emissiveIntensity:r})}const V2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],k2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],X2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],W2=["LOW","MEDIUM","HIGH","EXTREME"],Y2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],q2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],j2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},Z2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},K2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},Q2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},J2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function Cy(r){return(r-90)*Math.PI/180}function $2(r,t,i,s){const l=Cy(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function Xl(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function og(r){Xl("subject",r.subject,V2),Xl("domain",r.domain,k2),Xl("verb",r.verb,X2),Xl("magnitude",r.magnitude,W2),Xl("time",r.time,Y2),Xl("certainty",r.certainty,q2)}function wy(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=J2[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return og(s),s}function Tu(r){return og(r),[r.subject,r.domain,r.verb,r.magnitude,r.time,r.certainty].join(".")}function Au(r){return Tu(wy(r))}function tR(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),h=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(h,m):r.lineTo(h,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,h=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,h):r.lineTo(f,h)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function vu(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,h=Math.sqrt(c*c+f*f)||1,m=c/h,p=f/h,v=-p,_=m,g={x:i.x-m*l+v*(l*.58),y:i.y-p*l+_*(l*.58)},x={x:i.x-m*l-v*(l*.58),y:i.y-p*l-_*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(x.x,x.y),r.closePath(),r.fill(),r.restore()}function xu(r,t,i,s,l,c){const f=Q2[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let h=1;h<=f;h+=1){const m=h/(f+1);let p=i.x+(s.x-i.x)*m,v=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const _=1-m;p=_*_*i.x+2*_*m*c.x+m*m*s.x,v=_*_*i.y+2*_*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,v,2.2,0,Math.PI*2),r.fill()}r.restore()}}function eR(r,t,i){og(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,h=l*.5,m=i?.backgroundColor??"rgba(6,14,24,0.74)",p=i?.lineColor??"rgba(102,221,255,0.96)",v=i?.gridColor??"rgba(102,221,255,0.58)";r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,h,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=v,r.lineWidth=2.1,r.beginPath(),r.arc(f,h,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,h,c*.12,0,Math.PI*2),r.stroke();const _=j2[t.domain],g=Z2[t.time]*c,x=K2[t.magnitude]*c,E=$2(f,h,g,_),w=Cy(_),M=Math.cos(w),y=Math.sin(w),C=-y,L=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let D={x:E.x,y:E.y},I={x:E.x+M*x,y:E.y+y*x},z;if(t.verb==="EXISTS")D={x:E.x-C*(x*.48),y:E.y-L*(x*.48)},I={x:E.x+C*(x*.48),y:E.y+L*(x*.48)},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(I.x,I.y),r.stroke(),xu(r,t,D,I,p);else if(t.verb==="DECLINES")I={x:E.x-M*x,y:E.y-y*x},r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(I.x,I.y),r.stroke(),vu(r,D,I,p,7),xu(r,t,D,I,p);else if(t.verb==="TRANSFORMS")z={x:E.x+C*(x*.34)+M*(x*.34),y:E.y+L*(x*.34)+y*(x*.34)},r.beginPath(),r.moveTo(D.x,D.y),r.quadraticCurveTo(z.x,z.y,I.x,I.y),r.stroke(),vu(r,z,I,p,7),xu(r,t,D,I,p,z);else if(t.verb==="INFLUENCES"){const T={x:E.x+C*3.4,y:E.y+L*3.4},N={x:I.x+C*3.4,y:I.y+L*3.4},ht={x:E.x-C*3.4,y:E.y-L*3.4},G={x:I.x-C*3.4,y:I.y-L*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(N.x,N.y),r.moveTo(ht.x,ht.y),r.lineTo(G.x,G.y),r.stroke(),vu(r,T,N,p,6.6),vu(r,ht,G,p,6.6),xu(r,t,T,N,p)}else r.beginPath(),r.moveTo(D.x,D.y),r.lineTo(I.x,I.y),r.stroke(),vu(r,D,I,p,7),xu(r,t,D,I,p);r.fillStyle=p,r.beginPath(),r.arc(f,h,5,0,Math.PI*2),r.fill(),tR(r,t.subject,E,p)}function rS(r,t,i){const s=wy(t);eR(r,s,i)}const oS="intelligenspartiet:language",nR={nb:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Film",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideGlyphWall:"Glyff",outsideBack:"Tilbake",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signaturer",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Film",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideGlyphWall:"Glyff",outsideBack:"Back",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signatures",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},iR=100,nr=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],ir=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],Ao=["LOW","MEDIUM","HIGH","EXTREME"],Ro=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],Su=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],f0=[{phase:"signal-whisper",subjects:["IDEA","TECHNOLOGY","INSTITUTION"],domains:["MEDIA","CULTURE","TECHNOLOGY","EDUCATION","INDIVIDUALS"],verbs:["EXISTS","INFLUENCES","GROWS"],magnitudes:["LOW","MEDIUM"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"attention-displacement",subjects:["INDIVIDUAL","IDEA","SYSTEM"],domains:["INDIVIDUALS","MEDIA","ORGANIZATIONS","TECHNOLOGY"],verbs:["INFLUENCES","GROWS","DECLINES"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["PROBABLE","CONFIRMED"]},{phase:"output-surge",subjects:["SYSTEM","TECHNOLOGY","INSTITUTION"],domains:["TECHNOLOGY","ORGANIZATIONS","ECONOMY","INFRASTRUCTURE"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["HIGH","EXTREME"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"cognitive-strain",subjects:["INDIVIDUAL","SYSTEM","TECHNOLOGY"],domains:["INDIVIDUALS","ORGANIZATIONS","EDUCATION","SCIENCE"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["HIGH","EXTREME"],times:["NOW","LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"blame-cycle",subjects:["INSTITUTION","EVENT","SYSTEM"],domains:["POLITICS","SOCIETY","MEDIA","ECONOMY"],verbs:["INFLUENCES","TRANSFORMS","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"resistance-ritual",subjects:["INSTITUTION","INDIVIDUAL","EVENT"],domains:["CULTURE","POLITICS","ORGANIZATIONS","SOCIETY"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["MEDIUM","HIGH"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"reskilling-wave",subjects:["IDEA","INSTITUTION","SYSTEM"],domains:["EDUCATION","SCIENCE","ORGANIZATIONS","TECHNOLOGY"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["PROBABLE","CONFIRMED"]},{phase:"institutional-memory",subjects:["INSTITUTION","SYSTEM","BREAKTHROUGH"],domains:["INFRASTRUCTURE","ORGANIZATIONS","ECONOMY","SCIENCE"],verbs:["EXISTS","TRANSFORMS","GROWS"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["INDICATION","PROBABLE","CONFIRMED"]},{phase:"myth-afterimage",subjects:["EVENT","IDEA","INDIVIDUAL"],domains:["CULTURE","MEDIA","SOCIETY","EDUCATION"],verbs:["EXISTS","INFLUENCES","DECLINES"],magnitudes:["LOW","MEDIUM","HIGH"],times:["Y3_10","GT10Y"],certainties:["INDICATION","PROBABLE"]},{phase:"recurrence",subjects:["SYSTEM","INSTITUTION","INDIVIDUAL"],domains:["SOCIETY","POLITICS","ORGANIZATIONS","INDIVIDUALS"],verbs:["TRANSFORMS","INFLUENCES","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["GT10Y","NOW"],certainties:["PROBABLE","CONFIRMED"]}],Wl=(r,t,i=0)=>r[(t+i)%r.length],yu=(r,t,i)=>{const s=r.indexOf(t),l=s>=0?s:0;return r[(l+i+r.length*32)%r.length]},aR=r=>{const t=[],i=new Set,s=Math.ceil(r/f0.length);for(let l=0;l<f0.length;l+=1){const c=f0[l];for(let f=0;f<s&&t.length<r;f+=1){let h={subject:Wl(c.subjects,f,l),domain:Wl(c.domains,f,l*2),verb:Wl(c.verbs,f,l+f%3),magnitude:Wl(c.magnitudes,f,Math.floor(f/2)),time:Wl(c.times,f,Math.floor(f/3)),certainty:Wl(c.certainties,f,f%2)},m=Au(Tu(h));if(i.has(m)){let p=!1;for(let v=1;v<=ir.length*Ro.length;v+=1){const _={...h,subject:yu(nr,h.subject,Math.floor(v/7)),domain:yu(ir,h.domain,v),magnitude:yu(Ao,h.magnitude,Math.floor(v/4)),time:yu(Ro,h.time,Math.floor(v/2)),certainty:yu(Su,h.certainty,Math.floor(v/3))},g=Au(Tu(_));if(!i.has(g)){h=_,m=g,p=!0;break}}if(!p)for(const v of nr){for(const _ of ir){for(const g of Ao){for(const x of Ro){for(const E of Su){const w=Au(Tu({subject:v,domain:_,verb:h.verb,magnitude:g,time:x,certainty:E}));if(!i.has(w)){h={subject:v,domain:_,verb:h.verb,magnitude:g,time:x,certainty:E},m=w,p=!0;break}}if(p)break}if(p)break}if(p)break}if(p)break}}if(i.has(m)){const p=nr.length*ir.length*Ao.length*Ro.length*Su.length;for(let v=0;v<p;v+=1){const _=t.length+v,g=_%nr.length,x=Math.floor(_/nr.length)%ir.length,E=Math.floor(_/(nr.length*ir.length))%Ao.length,w=Math.floor(_/(nr.length*ir.length*Ao.length))%Ro.length,M=Math.floor(_/(nr.length*ir.length*Ao.length*Ro.length))%Su.length,y={subject:nr[g],domain:ir[x],verb:h.verb,magnitude:Ao[E],time:Ro[w],certainty:Su[M]},C=Au(Tu(y));if(!i.has(C)){m=C;break}}}i.add(m),t.push({id:`ra-${String(t.length+1).padStart(3,"0")}`,canonical:m,phase:c.phase})}}return t},sR=aR(iR),rR={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},d0=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:rR}),yd=[d0("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),d0("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),d0("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],oR=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),ra=r=>{let t=r%1;return t<0&&(t+=1),t},lR=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),ra(r+l*(1-Math.exp(-i*s)))},lS=12,h0=9,Md=.12,cS=-1,p0=2.4,cR=.3,uR=1.2,fR=.3,uS=6741503,dR=5,hR=3.2,pR=.35,mR=.25,m0=400,gR=2.5,fS=16755251,Ed=3,_R=new q(m0*-.04,m0*-.42,m0*1.02),dS=-.14,hS=.2,pS=0,mS=-22,vR=7,xR=["v1-cognitive-overproduction"],SR=["halfwall-06"],yR=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],ar=[{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1770978482749-c088b297-1ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770978437489-d0299c39-WelhavenTheater.png"},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],MR="https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",ER=Math.max(0,ar.findIndex(r=>r.video===MR)),qh=17.6,lg=qh*(16/9),jh=lg*Math.sqrt(3)/2,bR=.56,TR=31.2,bd=jh*2.62,gS=qh*.56,AR=lg+5.4,_S=qh+4.4,RR=jh+.22,CR=0,wR=jh+.72,DR=.72,NR=1.35,ws=18,N0=ws*(16/9),ql=N0*Math.sqrt(3)/2,Td=ql*1.06,LR=17,UR=2.8,OR=.00185,IR=.0062,PR=.0036,FR=60,BR=40,zR=220,HR=360,GR=105,VR=.75,vS=96,L0=[330,250,180,120],kR=[2,3.2,4.8,6.2],XR=[.12,.17,.22,.3],Ad={tailPath:"",taperPaths:L0.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},g0=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],h=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${h} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},WR=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),YR=(r,t,i,s,l,c)=>{Dy(r,t,l).forEach((h,m)=>{r.fillText(h,i,s+m*c)})},Dy=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const h=s[f];if(!h)continue;const m=`${c}${h} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${h} `):c=m}return c.trim()&&l.push(c.trim()),l},qR=/\(\s*bold\s*\)/gi,jR=/\(\s*new\s*line\s*\)/gi,ZR=/\(\s*new\s*paragraph\s*\)/gi,KR=r=>{const i=r.replace(/\r\n?/g,`
`).replace(ZR,`

`).replace(jR,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const h=/\(\s*bold\s*\)/i.test(c),m=c.replace(qR,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:h,paragraphBreak:s}),s=!1}),l},QR=(r,t,i,s,l,c,f,h,m=.6)=>{const p=KR(t);let v=s;p.forEach((_,g)=>{g>0&&_.paragraphBreak&&(v+=c*m),r.font=_.bold?h:f,Dy(r,_.text,l).forEach(E=>{r.fillText(E,i,v),v+=c})}),r.font=f},JR=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,Ny=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),$R=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),t3=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],e3=new Map(t3.map(([r,t])=>[Ny(r),t])),n3=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],i3=n3.map(([r,t])=>[new RegExp($R(r),"gi"),t]),a3={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},s3=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),r3=r=>{let t=r;return i3.forEach(([i,s])=>{t=t.replace(i,s)}),t},o3=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=a3[t.toLowerCase()];return i?s3(t,i):t}),l3=r=>{const t=r.trim();return t?(e3.get(Ny(t))??o3(r3(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},c3=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(JR,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>l3(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},Rd=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},U0=Math.PI*2,Co=r=>Math.min(1,Math.max(0,r)),Mu=(r,t,i,s,l)=>{const c=U0*(r*i+s),f=U0*(t*i+l),h=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return h+m},Cd=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Zl(s)},Wa=(r,t,i,s,l=!1)=>{r.wrapS=Ql,r.wrapT=Ql,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=rr,r.magFilter=Zn,l&&(r.colorSpace=ui),r.needsUpdate=!0},_0=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:h,bandFreq:m,bandInfluence:p,seamAxis:v,seamFreq:_,seamDepth:g,seamWidth:x,roughnessBase:E,roughnessRange:w,normalStrength:M,aoStrength:y}=r,C=t*i,L=new fe(l),D=new Float32Array(C);let I=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY;for(let nt=0;nt<i;nt+=1)for(let K=0;K<t;K+=1){const U=nt*t+K,B=K/t,ut=nt/i,vt=Mu(B,ut,c,s*.11,s*.23),Nt=Mu(B,ut,f,s*.41+.18,s*.29+.07),P=Mu(B,ut,h,s*.71+.43,s*.53+.31),j=Math.sin(U0*((B+ut*.33)*m+s*.17));let St=0;if(v!=="none"&&_>0){const at=(v==="x"?B:ut)*_%1,mt=Math.min(at,1-at);St=Math.exp(-Math.pow(mt/Math.max(1e-4,x),2))}const Ot=vt*.6+Nt*.28+P*.12+j*p-St*g;D[U]=Ot,Ot<I&&(I=Ot),Ot>z&&(z=Ot)}const F=new Float32Array(C),T=Math.max(1e-4,z-I),N=new Uint8ClampedArray(C*4),ht=new Uint8ClampedArray(C*4),G=new Uint8ClampedArray(C*4);for(let nt=0;nt<i;nt+=1)for(let K=0;K<t;K+=1){const U=nt*t+K,B=U*4,ut=K/t,vt=nt/i,Nt=Co((D[U]-I)/T);F[U]=Nt;const P=Mu(ut,vt,f*.6,s*.19+.62,s*.73+.14)*.5+.5,j=Co(.78+(Nt-.5)*.24+(P-.5)*.12),St=Mu(ut,vt,c*.5,s*.37+.89,s*.13+.44),Ot=1+St*.017,Yt=1+St*.007,at=1-St*.013,mt=Co(E+(1-Nt)*w+(P-.5)*.14),Ut=Co(.94-(1-Nt)*y);N[B]=Math.round(Co(L.r*j*Ot)*255),N[B+1]=Math.round(Co(L.g*j*Yt)*255),N[B+2]=Math.round(Co(L.b*j*at)*255),N[B+3]=255;const Ft=Math.round(mt*255);ht[B]=Ft,ht[B+1]=Ft,ht[B+2]=Ft,ht[B+3]=255;const $t=Math.round(Ut*255);G[B]=$t,G[B+1]=$t,G[B+2]=$t,G[B+3]=255}const J=(nt,K)=>{const U=(nt+t)%t,B=(K+i)%i;return F[B*t+U]},et=new Uint8ClampedArray(C*4);for(let nt=0;nt<i;nt+=1)for(let K=0;K<t;K+=1){const B=(nt*t+K)*4,ut=J(K+1,nt)-J(K-1,nt),vt=J(K,nt+1)-J(K,nt-1),Nt=-ut*M,P=-vt*M,j=1,St=1/Math.hypot(Nt,P,j);et[B]=Math.round((Nt*St*.5+.5)*255),et[B+1]=Math.round((P*St*.5+.5)*255),et[B+2]=Math.round((j*St*.5+.5)*255),et[B+3]=255}return{albedo:Cd(N,t,i),normal:Cd(et,t,i),roughness:Cd(ht,t,i),ao:Cd(G,t,i)}},u3=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const h=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=h*255,c/=h*255,f/=h*255;const m=l*.2126+c*.7152+f*.0722;return{color:new fe(l,c,f),luminance:m}};function f3(){const r=jt.useRef([]),t=jt.useRef(null),[i,s]=jt.useState(!1),[l,c]=jt.useState({width:1,height:1}),[f,h]=jt.useState(Ad);return jt.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),v=window.matchMedia("(pointer: coarse)"),_=()=>{s(!m.matches&&p.matches&&!v.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},x=()=>{_()},E=(C,L)=>typeof C.addEventListener=="function"?(C.addEventListener("change",L),()=>C.removeEventListener("change",L)):(C.addListener(L),()=>C.removeListener(L));_(),g();const w=E(m,x),M=E(p,x),y=E(v,x);return window.addEventListener("resize",g,{passive:!0}),()=>{w(),M(),y(),window.removeEventListener("resize",g)}},[]),jt.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],h(Ad);return}const m=v=>{if(v.pointerType!=="mouse"&&v.pointerType!=="pen")return;const _={x:v.clientX,y:v.clientY,t:performance.now()},g=r.current,x=g[g.length-1];if(x){const E=_.x-x.x,w=_.y-x.y;if(Math.hypot(E,w)<VR)return}g.push(_),g.length>vS&&g.splice(0,g.length-vS)},p=()=>{const v=performance.now(),_=v-HR,g=r.current;let x=0;for(;x<g.length&&g[x].t<_;)x+=1;if(x>0&&g.splice(0,x),g.length<2)h(E=>E.visible?Ad:E);else{const E=g0(g),w=L0.map(I=>{const z=v-I;let F=g.length-1;for(;F>0&&g[F-1].t>=z;)F-=1;const T=g.slice(F);return g0(T.length>=2?T:g.slice(-2))}),M=v-GR;let y=g.length-1;for(;y>0&&g[y-1].t>=M;)y-=1;let C=g.slice(y);C.length<2&&(C=g.slice(-2));const L=g0(C),D=C[C.length-1]??g[g.length-1];h(I=>I.visible&&I.tailPath===E&&I.taperPaths.every((z,F)=>z===w[F])&&I.headPath===L&&I.headX===D.x&&I.headY===D.y?I:{tailPath:E,taperPaths:w,headPath:L,headX:D.x,headY:D.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],h(Ad)}},[i]),i?Rt.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[Rt.jsxs("defs",{children:[Rt.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Rt.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),Rt.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),Rt.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[Rt.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),Rt.jsxs("feMerge",{children:[Rt.jsx("feMergeNode",{in:"blur"}),Rt.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?Rt.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:XR[p],strokeWidth:kR[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${L0[p]}`):null),Rt.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),Rt.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function d3(){const r=jt.useRef(null),t=jt.useRef([]),i=jt.useRef(Md),s=jt.useRef(Md),l=jt.useRef(!1),c=jt.useRef([]),f=jt.useRef(null),h=jt.useRef(null),m=jt.useRef(null),p=jt.useRef(null),v=jt.useRef(null);jt.useEffect(()=>{const H=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=H,document.documentElement.style.overscrollBehavior=""}},[]);const[_,g]=jt.useState(yd),[x,E]=jt.useState([]),[w,M]=jt.useState(yd[0].id),[y,C]=jt.useState(!0),[L,D]=jt.useState(!1),[I,z]=jt.useState(!1),[F,T]=jt.useState("menu"),[N,ht]=jt.useState(!1),[G,J]=jt.useState([]),[et,nt]=jt.useState(!1),[K,U]=jt.useState(""),[B,ut]=jt.useState(()=>ER),[vt,Nt]=jt.useState(""),[P,j]=jt.useState(""),[St,Ot]=jt.useState(""),[Yt,at]=jt.useState(null),[mt,Ut]=jt.useState(()=>{if(typeof window>"u")return"nb";try{const H=window.localStorage.getItem(oS);if(H==="nb"||H==="en")return H}catch{}return"nb"});jt.useEffect(()=>{try{window.localStorage.setItem(oS,mt)}catch{}},[mt]);const Ft=nR[mt],$t=jt.useMemo(()=>H=>mt==="nb"?c3(H):H,[mt]),re=jt.useMemo(()=>sR.map((H,st)=>{let Mt="";if(typeof document<"u"){const wt=document.createElement("canvas");wt.width=420,wt.height=420;const Tt=wt.getContext("2d");if(Tt)try{rS(Tt,H.canonical,{backgroundColor:"rgba(0,0,0,0)",lineColor:"rgba(46,39,33,0.94)",gridColor:"rgba(69,60,53,0.48)"}),Mt=wt.toDataURL("image/png")}catch{Mt=""}}return{...H,index:st,previewDataUrl:Mt}}),[]);jt.useEffect(()=>{const H=new Set(re.map(st=>st.canonical));H.size!==re.length&&console.warn(`Glyff wall uniqueness violation: ${re.length-H.size} duplicates detected.`)},[re]);const Rn=jt.useMemo(()=>JSON.stringify({version:"rl-story-v1",name:"replacement-anxiety-pattern",protocol:"ra-sequence-v1",read_order:"left_to_right_top_to_bottom",count:re.length,items:re.map(H=>({order:H.index+1,id:H.id,phase:H.phase,canonical:H.canonical}))},null,2),[re]),Ue=jt.useCallback(()=>{f.current?.()},[]),we=jt.useCallback(()=>{h.current?.()},[]),je=jt.useCallback(()=>{m.current?.()},[]),me=jt.useCallback(()=>{v.current=null,at(null)},[]),En=jt.useCallback(H=>{H.preventDefault();const st=vt.trim(),Mt=P.trim(),wt=St.trim();if(!st||!Mt||!wt)return;const Tt=mt==="nb"?"Kontakt fra Signaturer":"Contact from Signatures",Kt=[`${mt==="nb"?"Navn":"Name"}: ${st}`,`${mt==="nb"?"E-post":"Email"}: ${Mt}`,"",`${mt==="nb"?"Melding":"Message"}:`,wt].join(`
`),X=`mailto:lars@larscuzner.com?subject=${encodeURIComponent(Tt)}&body=${encodeURIComponent(Kt)}`;window.location.href=X},[mt,P,St,vt]),k=jt.useRef(0),cn=jt.useRef(0),Oe=jt.useRef(null),ke=jt.useCallback(H=>{const st=H>=0?1:-1;ut(Mt=>{const wt=ar.length;return(Mt+st+wt)%wt})},[]),ee=jt.useCallback(H=>{H.preventDefault();const st=Math.abs(H.deltaX)>Math.abs(H.deltaY)?H.deltaX:H.deltaY;k.current+=st;const Mt=performance.now();Mt-cn.current<zR||Math.abs(k.current)<BR||(ke(k.current>0?1:-1),k.current=0,cn.current=Mt)},[ke]),O=jt.useCallback(H=>{Oe.current=H.touches[0]?.clientX??null},[]),b=jt.useCallback(H=>{const st=Oe.current,Mt=H.changedTouches[0]?.clientX??null;if(Oe.current=null,st===null||Mt===null)return;const wt=Mt-st;Math.abs(wt)<28||ke(wt<0?1:-1)},[ke]);jt.useEffect(()=>{I||T("menu")},[I]),jt.useEffect(()=>{I||ht(!1)},[I]),jt.useEffect(()=>{F==="videos"&&(k.current=0,cn.current=0)},[F]),jt.useEffect(()=>{if(!I||F!=="videos")return;let H=!1;const st=()=>{H||c.current.forEach(wt=>{if(!wt||!wt.paused&&wt.readyState>=2)return;const Tt=wt.play();Tt&&typeof Tt.catch=="function"&&Tt.catch(()=>{})})};st();const Mt=window.setInterval(st,900);return()=>{H=!0,window.clearInterval(Mt)}},[I,F]),jt.useEffect(()=>{if(!I||F!=="news")return;let H=!1;const st=Tt=>({title:String(Tt?.title??"").trim(),source:String(Tt?.source??"").trim(),url:String(Tt?.url??"").trim(),snippet:String(Tt?.snippet??"").trim(),published_at:String(Tt?.published_at??"").trim(),published:Tt?.published!==!1}),Mt=Tt=>{const Kt=Date.parse(Tt);return Number.isFinite(Kt)?Kt:0};return(async()=>{nt(!0),U("");for(const Tt of yR)try{const Kt=await fetch(Tt,{cache:"no-store"});if(!Kt.ok)continue;const X=await Kt.json();if(!Array.isArray(X?.items))continue;const pt=X.items.map(st).filter(Dt=>Dt.published&&Dt.title&&Dt.url).sort((Dt,gt)=>Mt(gt.published_at)-Mt(Dt.published_at));if(H)return;J(pt),nt(!1);return}catch{}H||(J([]),U(Ft.outsideNewsError),nt(!1))})(),()=>{H=!0}},[I,F,Ft.outsideNewsError]),jt.useEffect(()=>{let H=!1;return(async()=>{try{const Mt=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),wt=Mt.headers.get("content-type")??"";if(!Mt.ok)throw new Error(`HTTP ${Mt.status} while loading glyph language map`);if(!wt.toLowerCase().includes("application/json")){const ft=await Mt.text();throw new Error(`Expected JSON but got '${wt||"unknown"}' (${ft.slice(0,120)})`)}const Tt=await Mt.json();if(!Array.isArray(Tt?.items))throw new Error("Glyph language payload missing 'items' array");const Kt=Tt.items.map((ft,Q)=>oR(ft,Q)).filter(ft=>ft.enabled!==!1),X=new Map,pt=[],Dt=[],gt=[];if(Kt.forEach(ft=>{if(!ft.canonical){Dt.push(`${ft.id} (empty canonical)`);return}let Q="";try{Q=Au(ft.canonical)}catch{Dt.push(`${ft.id} (${ft.canonical})`);return}const kt=X.get(Q);if(kt&&kt!==ft.id){gt.push(`${ft.id} duplicates ${kt} (${Q})`);return}X.set(Q,ft.id),pt.push({...ft,canonical:Q})}),Dt.length>0&&console.warn("Glyph language map dropped invalid canonical rows:",Dt.join("; ")),gt.length>0&&console.warn("Glyph language map dropped duplicate canonical rows:",gt.join("; ")),H)return;E(pt)}catch(Mt){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",Mt),H)return;E([])}})(),()=>{H=!0}},[]),jt.useEffect(()=>{if(l.current||_.length===0)return;let H=null;for(const wt of xR){const Tt=x.find(Kt=>Kt.id===wt&&Kt.panel_id);if(Tt?.panel_id){H=Tt.panel_id;break}}H||(H=SR.find(wt=>_.some(Tt=>Tt.id===wt))??null);const st=(H?_.find(wt=>wt.id===H):void 0)??_[0],Mt=typeof st?.installation?.placement_t=="number"?ra(st.installation.placement_t):Md;i.current=Mt,s.current=Mt,st?.id&&M(st.id),l.current=!0},[x,_]);const Z=jt.useMemo(()=>x.filter(H=>H.enabled!==!1&&typeof H.canonical=="string"&&H.canonical.trim().length>0),[x]),yt=jt.useMemo(()=>{const H=new Map;if(!_.length||!Z.length)return H;const st=Tt=>{const Kt=ra(Tt);return ra(Md-Kt)},Mt=[..._].sort((Tt,Kt)=>{const X=typeof Tt.installation?.placement_t=="number"?Tt.installation.placement_t:0,pt=typeof Kt.installation?.placement_t=="number"?Kt.installation.placement_t:0,Dt=st(X),gt=st(pt);return Dt===gt?Tt.id.localeCompare(Kt.id):Dt-gt}),wt=Math.min(Mt.length,Z.length);for(let Tt=0;Tt<wt;Tt+=1)H.set(Mt[Tt].id,Z[Tt]);return H},[_,Z]),Ct=jt.useMemo(()=>{const H=new Map;return yt.forEach((st,Mt)=>{st.canonical&&H.set(Mt,st.canonical)}),H},[yt]),xt=jt.useMemo(()=>{const H=new Map;return yt.forEach((st,Mt)=>{H.set(Mt,{label:st.label||"",note:st.note||"",labelNb:st.label_nb||"",noteNb:st.note_nb||""})}),H},[yt]);jt.useEffect(()=>{let H=!1;return(async()=>{C(!0),D(!1);try{const Mt=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),wt=Mt.headers.get("content-type")??"";if(!Mt.ok)throw new Error(`HTTP ${Mt.status} while loading panel data`);if(!wt.toLowerCase().includes("application/json")){const gt=await Mt.text();throw new Error(`Expected JSON but got '${wt||"unknown"}' (${gt.slice(0,120)})`)}const Tt=await Mt.json();if(!Array.isArray(Tt?.panels))throw new Error("Panel payload missing 'panels' array");const Kt=typeof Tt.media_root=="string"?Tt.media_root.replace(/\/+$/,""):"",X=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",pt=gt=>/^https?:\/\//i.test(gt)&&X?`/proxy?url=${encodeURIComponent(gt)}`:gt,Dt=Tt.panels.map(gt=>{const ft=typeof gt?.source=="string"?gt.source.replace(/^\/+/,""):"",Q=ft?Kt?`${Kt}/${ft}`:`/${ft}`:void 0,kt=Q?pt(Q):void 0,ce=typeof gt?.poster=="string"?gt.poster.replace(/^\/+/,""):"",Xe=ce?Kt?`${Kt}/${ce}`:`/${ce}`:void 0,De=Xe?pt(Xe):void 0,Cn=gt?.type==="image"||gt?.type==="video"?gt.type:"text",bn=gt?.content??{},ms=String(bn?.title??"Untitled").trim()||"Untitled",Vn=String(bn?.description??"").trim(),Qa=String(bn?.title_nb??bn?.title_no??"").trim(),Kn=String(bn?.description_nb??bn?.description_no??"").trim(),Hi=String(bn?.title_en??"").trim(),Tn=String(bn?.description_en??"").trim();return{...gt,kind:Cn,type:Cn,title:ms,body:Vn,title_nb:Qa||ms,body_nb:Kn||Vn,title_en:Hi,body_en:Tn,cta:bn?.cta,poster:De,image:Cn==="image"?kt:void 0,video:Cn==="video"?kt:void 0}});if(Dt.length===0)throw new Error("Panel payload contained 0 panels");if(H)return;g(Dt),M(Dt[0].id)}catch(Mt){if(console.error("Failed to load panels; using fallback data.",Mt),H)return;g(yd),M(yd[0].id),D(!0)}finally{H||C(!1)}})(),()=>{H=!0}},[]);const Jt=jt.useMemo(()=>_.find(H=>H.id===w)??_[0]??{title:"",body:""},[w,_]),It=jt.useMemo(()=>H=>{const st=xt.get(H.id);if(mt==="nb"){const Tt=Rd(st?.labelNb,H.title_nb,$t(st?.label||""),$t(H.title||"")),Kt=Rd(st?.noteNb,H.body_nb,$t(st?.note||""),$t(H.body||""));return{title:Tt||"Mangler norsk tittel",body:Kt||"Mangler norsk tekst."}}const Mt=Rd(st?.label,H.title_en),wt=Rd(st?.note,H.body_en);return{title:Mt||"Missing English title",body:wt||"Missing English text."}},[xt,mt,$t]),oe=jt.useMemo(()=>It(Jt).title,[Jt,It]),ue=jt.useMemo(()=>new Intl.DateTimeFormat(mt==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[mt]);return jt.useEffect(()=>{if(_.length===0)return;const H=r.current;if(!H)return;f.current=null,h.current=null,m.current=null,z(!1),ht(!1),me();let st=!1,Mt=()=>{};return(()=>{if(st||!H)return;t.current=[];const Tt=window.matchMedia("(prefers-reduced-motion: reduce)"),Kt=window.matchMedia("(max-width: 767px)"),X=Tt.matches,pt=Kt.matches,Dt=ct=>{const Bt=It(ct);v.current=ct.id,at({panelId:ct.id,title:Bt.title,body:Bt.body})},gt=new K0;gt.background=new fe(987671),gt.fog=new Iu(987671,38,230);const ft=new qi(pt?72:64,H.clientWidth/H.clientHeight,.1,1200),Q=new Ry({antialias:!pt,alpha:!1,powerPreference:"high-performance"});Q.setPixelRatio(Math.min(window.devicePixelRatio,pt?1:1.5)),Q.setSize(H.clientWidth,H.clientHeight),Q.outputColorSpace=ui,Q.toneMapping=Rh,Q.toneMappingExposure=pt?.76:.72,Q.shadowMap.enabled=!pt,Q.shadowMap.type=Oo,H.appendChild(Q.domElement);let kt=!1;const ce=ct=>{kt!==ct&&(kt=ct,Q.shadowMap.type=ct?yS:Oo,Q.shadowMap.needsUpdate=!0)},Xe=new bh(Q),De=Xe.fromScene(new G2,.06);gt.environment=De.texture;const Cn=new gy(16185599,.05);gt.add(Cn);const bn=new my(14739442,1777446,.08);gt.add(bn);const ms=WR(H2),Vn=new ly(ms,!0,"catmullrom",.17),Qa=pt?180:300,Kn=Math.min(8,Q.capabilities.getMaxAnisotropy()),Hi=pt?256:512,Tn=_0({width:Hi,height:Hi,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});Wa(Tn.albedo,4.8,24,Kn,!0),Wa(Tn.normal,4.8,24,Kn),Wa(Tn.roughness,4.8,24,Kn),Wa(Tn.ao,4.8,24,Kn);const Gi=_0({width:Hi,height:Hi,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});Wa(Gi.albedo,2.2,24,Kn,!0),Wa(Gi.normal,2.2,24,Kn),Wa(Gi.roughness,2.2,24,Kn),Wa(Gi.ao,2.2,24,Kn);const ai=_0({width:Hi,height:Hi,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});Wa(ai.albedo,3.4,24,Kn,!0),Wa(ai.normal,3.4,24,Kn),Wa(ai.roughness,3.4,24,Kn),Wa(ai.ao,3.4,24,Kn);const gn=new Do({color:9607586,map:Tn.albedo,normalMap:Tn.normal,normalScale:new Ce(.32,.32),roughnessMap:Tn.roughness,roughness:.38,metalness:0,aoMap:Tn.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:jn}),_n=new Do({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:jn}),wn=new Do({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new fe(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:jn}),gs=()=>{const ct=[],Bt=new q(0,1,0);let Gt=new q(1,0,0);for(let Pt=0;Pt<=Qa;Pt+=1){const Jn=Pt/Qa,Ni=Vn.getPointAt(Jn),Qi=Jn===1?Ni.clone().sub(Vn.getPointAt(Jn-.001)).normalize():Vn.getPointAt(Jn+.001).sub(Ni).normalize();let _i=new q().crossVectors(Qi,Bt).normalize();_i.lengthSq()<1e-4&&(_i=Gt.clone()),_i.dot(Gt)<0&&_i.multiplyScalar(-1),Gt=_i.clone();const $n=new q().crossVectors(_i,Qi).normalize();ct.push({pt:Ni,right:_i,up:$n,t:Jn})}const zt=(Pt,Jn,Ni=!1)=>{const Qi=[],_i=[],$n=[];for(let Ji=0;Ji<=Qa;Ji+=1){const Un=ct[Ji],On=Pt(Un),zn=Jn(Un);Qi.push(On.x,On.y,On.z,zn.x,zn.y,zn.z),_i.push(0,Un.t,1,Un.t)}for(let Ji=0;Ji<Qa;Ji+=1){const Un=Ji*2,On=Un+1,zn=Un+2,_a=Un+3;Ni?$n.push(Un,zn,On,zn,_a,On):$n.push(Un,On,zn,zn,On,_a)}const Li=new zi;Li.setAttribute("position",new Sn(Qi,3));const za=new Sn(_i,2);return Li.setAttribute("uv",za),Li.setAttribute("uv2",za.clone()),Li.setIndex($n),Li.computeVertexNormals(),Li},Lt=lS*.5,se=h0*.5,ie=zt(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-se)).add(Pt.right.clone().multiplyScalar(-Lt)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-se)).add(Pt.right.clone().multiplyScalar(Lt))),He=zt(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se)).add(Pt.right.clone().multiplyScalar(-Lt)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se)).add(Pt.right.clone().multiplyScalar(Lt)),!0),Pe=zt(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-se)).add(Pt.right.clone().multiplyScalar(-Lt)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se)).add(Pt.right.clone().multiplyScalar(-Lt)),!0),Wn=zt(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-se)).add(Pt.right.clone().multiplyScalar(Lt)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se)).add(Pt.right.clone().multiplyScalar(Lt))),Nn=.08,an=.015,ye=zt(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se-Nn)).add(Pt.right.clone().multiplyScalar(-Lt+an)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se)).add(Pt.right.clone().multiplyScalar(-Lt+an)),!0),Ne=zt(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se-Nn)).add(Pt.right.clone().multiplyScalar(Lt-an)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se)).add(Pt.right.clone().multiplyScalar(Lt-an)),!1),We=.22,Qe=.018,ma=zt(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-se)).add(Pt.right.clone().multiplyScalar(-Lt+Qe)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-se+We)).add(Pt.right.clone().multiplyScalar(-Lt+Qe)),!0),Ln=zt(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-se)).add(Pt.right.clone().multiplyScalar(Lt-Qe)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(-se+We)).add(Pt.right.clone().multiplyScalar(Lt-Qe)),!1),Ki=.14,ga=zt(Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se-.05)).add(Pt.right.clone().multiplyScalar(-Ki)),Pt=>Pt.pt.clone().add(Pt.up.clone().multiplyScalar(se-.05)).add(Pt.right.clone().multiplyScalar(Ki)),!0);return{floorGeo:ie,ceilGeo:He,leftGeo:Pe,rightGeo:Wn,leftSkirtGeo:ma,rightSkirtGeo:Ln,trackRailGeo:ga,leftCrownGeo:ye,rightCrownGeo:Ne}},{floorGeo:Os,ceilGeo:Is,leftGeo:Ps,rightGeo:Oa,leftSkirtGeo:ur,rightSkirtGeo:Ja,trackRailGeo:$a,leftCrownGeo:_s,rightCrownGeo:R}=gs(),Y=new Re(Os,gn),dt=new Re(Is,wn),it=new Re(Ps,_n),tt=new Re(Oa,_n),Ht=new Do({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),qt=new La({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:jn}),Vt=new Re(ur,qt),Qt=new Re(Ja,qt);Vt.receiveShadow=!0,Qt.receiveShadow=!0;const ne=new Re(_s,qt),de=new Re(R,qt);ne.receiveShadow=!1,de.receiveShadow=!1;const _e=new Do({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:jn}),Zt=new Re($a,_e);Zt.receiveShadow=!1,Y.receiveShadow=!0,Y.castShadow=!0,dt.receiveShadow=!0,dt.castShadow=!0,it&&(it.receiveShadow=!0,it.castShadow=!0),tt&&(tt.receiveShadow=!0,tt.castShadow=!0),gt.add(Y),gt.add(dt),it&&gt.add(it),tt&&gt.add(tt),gt.add(Vt),gt.add(Qt),gt.add(ne),gt.add(de),gt.add(Zt);const ve=[Y,dt,Vt,Qt,ne,de,Zt];it&&ve.push(it),tt&&ve.push(tt);const vn=new q(0,1,0),un=new Mn,ze=new Mn,Pn=new Mn;gt.add(un),gt.add(ze),gt.add(Pn);const Xt=new Ud(16773598,pt?16:24,34,Math.PI/8.4,.44,2);Xt.target=un,Xt.castShadow=!pt,Xt.castShadow&&(Xt.shadow.mapSize.width=2048,Xt.shadow.mapSize.height=2048,Xt.shadow.bias=-35e-5,Xt.shadow.normalBias=.012,Xt.shadow.camera.near=.4,Xt.shadow.camera.far=34),gt.add(Xt);const Qn=new Ud(12571903,pt?6:9,34,Math.PI/6.5,.68,2);Qn.target=ze,Qn.castShadow=!1,gt.add(Qn);const he=new Ud(14083583,pt?5:7,28,Math.PI/7.8,.6,2);he.target=Pn,he.castShadow=!1,gt.add(he);const fi=new Mn,Mi=new Mn;gt.add(fi),gt.add(Mi);const nn=new R0(16774374,0);if(nn.target=fi,nn.castShadow=!pt,nn.castShadow){nn.shadow.mapSize.width=4096,nn.shadow.mapSize.height=4096,nn.shadow.bias=-8e-5,nn.shadow.normalBias=.0012,nn.shadow.radius=0;const ct=pt?250:220;nn.shadow.camera.left=-ct,nn.shadow.camera.right=ct,nn.shadow.camera.top=ct,nn.shadow.camera.bottom=-ct,nn.shadow.camera.near=25,nn.shadow.camera.far=980}gt.add(nn);const di=new R0(9090280,0);di.target=Mi,gt.add(di),Os.computeBoundingBox(),Os.computeBoundingSphere(),Is.computeBoundingBox(),Is.computeBoundingSphere(),Ps.computeBoundingBox(),Ps.computeBoundingSphere(),Oa.computeBoundingBox(),Oa.computeBoundingSphere();const Fn=_.some(ct=>ct.installation?.mount_type==="continuous_led_wall"||ct.installation?.mount_type==="jutting_half_wall")?_:pt?_.filter((ct,Bt)=>Bt%2===0):_,Dn=[],yn=[],kn=[],Ri=[],vs=[],ts=[],Zh=[],ji=ct=>{if(!ct.paused&&ct.currentTime>0)return;const Bt=ct.play();Bt&&typeof Bt.catch=="function"&&Bt.catch(()=>{})},Ia=setInterval(()=>{let ct=!0;ts.forEach(Bt=>{(Bt.paused||Bt.readyState<2)&&(ct=!1,ji(Bt))}),ct&&ts.length>0&&clearInterval(Ia)},500);vs.push(()=>clearInterval(Ia));const lc=new no(1,1,.2),cc=new Ya(.82,.82),fr=new Do({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),dr=(ct,Bt)=>{const zt=document.createElement("canvas");zt.width=512,zt.height=512;const Lt=zt.getContext("2d");Lt.clearRect(0,0,512,512);const se=Ct.get(Bt);if(se)try{rS(Lt,se,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const Ne=new Zl(zt);return Ne.colorSpace=ui,Ne}catch(Ne){console.warn(`Invalid glyph canonical sentence for panel '${Bt}': '${se}'. Falling back to procedural glyph.`,Ne)}const ie=512/2,He=512/2,Pe=ct*137.508;Lt.fillStyle="rgba(6,14,24,0.7)",Lt.beginPath(),Lt.arc(ie,He,512*.42,0,Math.PI*2),Lt.fill(),Lt.strokeStyle="rgba(102,221,255,0.95)",Lt.lineWidth=2.5,Lt.lineCap="round",Lt.beginPath(),Lt.arc(ie,He,512*.38,0,Math.PI*2),Lt.stroke();const Wn=3+ct%4;for(let Ne=0;Ne<Wn;Ne++){const We=Ne/Wn*Math.PI*2+Pe,Qe=512*.08,ma=512*.32;Lt.beginPath(),Lt.moveTo(ie+Math.cos(We)*Qe,He+Math.sin(We)*Qe),Lt.lineTo(ie+Math.cos(We)*ma,He+Math.sin(We)*ma),Lt.stroke()}const Nn=2+ct%3;for(let Ne=0;Ne<Nn;Ne++){const We=512*(.15+Ne*.09),Qe=Pe+Ne*1.2;Lt.beginPath(),Lt.arc(ie,He,We,Qe,Qe+Math.PI*(.4+ct%3*.2)),Lt.stroke()}Lt.fillStyle="rgba(102,221,255,0.85)";const an=3+ct%5;for(let Ne=0;Ne<an;Ne++){const We=Pe+Ne/an*Math.PI*2,Qe=512*(.2+Ne%3*.06);Lt.beginPath(),Lt.arc(ie+Math.cos(We)*Qe,He+Math.sin(We)*Qe,4,0,Math.PI*2),Lt.fill()}Lt.strokeStyle="rgba(102,221,255,0.5)",Lt.lineWidth=1.5,Lt.beginPath(),Lt.arc(ie,He,512*.12,0,Math.PI*2),Lt.stroke(),Lt.fillStyle="rgba(102,221,255,0.95)",Lt.beginPath(),Lt.arc(ie,He,6,0,Math.PI*2),Lt.fill();const ye=new Zl(zt);return ye.colorSpace=ui,ye},zu=(ct,Bt)=>{const Gt=document.createElement("canvas");Gt.width=1024,Gt.height=640;const zt=Gt.getContext("2d");zt.fillStyle="rgba(8,12,18,0.88)",zt.beginPath(),zt.roundRect(16,16,992,608,24),zt.fill(),zt.strokeStyle="rgba(102,221,255,0.25)",zt.lineWidth=2,zt.beginPath(),zt.roundRect(16,16,992,608,24),zt.stroke(),zt.fillStyle="rgba(102,221,255,0.95)",zt.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",YR(zt,ct.toUpperCase(),60,100,900,58),zt.strokeStyle="rgba(102,221,255,0.3)",zt.lineWidth=2,zt.beginPath(),zt.moveTo(60,180),zt.lineTo(960,180),zt.stroke(),zt.fillStyle="rgba(220,230,240,0.9)";const Lt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",se="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";zt.font=Lt,QR(zt,Bt,60,230,900,42,Lt,se);const ie=new Zl(Gt);return ie.colorSpace=ui,ie},uc=()=>{const Bt=document.createElement("canvas");Bt.width=512,Bt.height=512;const Gt=Bt.getContext("2d"),zt=512/2,Lt=512/2;Gt.beginPath(),Gt.arc(zt,Lt,512*.42,0,Math.PI*2),Gt.fillStyle="rgba(6,14,24,0.7)",Gt.fill(),Gt.strokeStyle="rgba(255,170,51,0.9)",Gt.lineWidth=6,Gt.beginPath(),Gt.arc(zt,Lt,512*.38,0,Math.PI*2),Gt.stroke();const se=8;for(let He=0;He<se;He++){const Pe=He/se*Math.PI*2-Math.PI/2;Gt.strokeStyle=`rgba(255,${170+Math.round(Math.sin(He)*40)},51,0.8)`,Gt.lineWidth=4,Gt.beginPath(),Gt.moveTo(zt+Math.cos(Pe)*512*.12,Lt+Math.sin(Pe)*512*.12),Gt.lineTo(zt+Math.cos(Pe)*512*.34,Lt+Math.sin(Pe)*512*.34),Gt.stroke();const Wn=zt+Math.cos(Pe)*512*.34,Nn=Lt+Math.sin(Pe)*512*.34,an=512*.06;Gt.beginPath(),Gt.moveTo(Wn,Nn),Gt.lineTo(Wn-an*Math.cos(Pe-.4),Nn-an*Math.sin(Pe-.4)),Gt.moveTo(Wn,Nn),Gt.lineTo(Wn-an*Math.cos(Pe+.4),Nn-an*Math.sin(Pe+.4)),Gt.stroke()}Gt.beginPath(),Gt.arc(zt,Lt,512*.06,0,Math.PI*2),Gt.fillStyle="rgba(255,200,80,0.95)",Gt.fill();const ie=new Zl(Bt);return ie.colorSpace=ui,ie},fc=ct=>{const Bt=ra(ct),Gt=Vn.getPointAt(Bt),Lt=Vn.getPointAt(ra(Bt+.002)).clone().sub(Gt).normalize();let se=new q().crossVectors(Lt,vn).normalize();se.lengthSq()<1e-4&&(se=new q(1,0,0));const ie=new q().crossVectors(se,Lt).normalize();return{point:Gt,tangent:Lt,right:se,up:ie}},io=ct=>{const Bt=ct.uv?.y;if(typeof Bt=="number"&&Number.isFinite(Bt))return ra(Bt);const Gt=pt?180:320;let zt=0,Lt=Number.POSITIVE_INFINITY;for(let se=0;se<=Gt;se+=1){const ie=se/Gt,Pe=Vn.getPointAt(ie).distanceToSquared(ct.point);Pe<Lt&&(Lt=Pe,zt=ie)}return ra(zt)};Vn.getLength();const Ci=[],Vo=new Ya(p0*2,p0*2),hr=new Ya(dR,hR);Fn.forEach((ct,Bt)=>{const Gt=ct.installation,zt=ra(Gt?.placement_t??.05+Bt/Fn.length),{point:Lt,right:se,up:ie}=fc(zt),He=Gt?.side==="left",Nn=(Gt?.side==="center"?0:He?-1:1)*lS*.12,an=Lt.clone().add(se.clone().multiplyScalar(Nn)).add(ie.clone().multiplyScalar(.5)),ye=dr(Bt,ct.id);yn.push(ye);const Ne=new La({color:16777215,emissive:new fe(uS),emissiveIntensity:1.2,map:ye,emissiveMap:ye,transparent:!0,alphaTest:.05,side:jn,depthWrite:!1});kn.push(Ne);const We=new Re(Vo,Ne);We.position.copy(an),We.userData={panel:ct,isGlyph:!0},Dn.push(We),gt.add(We);const Qe=It(ct),ma=Qe.title,Ln=Qe.body,Ki=zu(ma,Ln);yn.push(Ki);const ga=new La({color:16777215,emissive:new fe(1122867),emissiveIntensity:.3,map:Ki,transparent:!0,opacity:0,side:jn,depthWrite:!0});kn.push(ga);const Pt=new Re(hr,ga),Jn=new Lo;Jn.add(Pt),Jn.position.copy(an),Jn.scale.setScalar(.01),Jn.visible=!1,gt.add(Jn);const Ni=new Kr(uS,pt?6:12,20,1.5);Ni.position.copy(an),gt.add(Ni),Ci.push({mesh:We,card:Jn,panel:ct,progress:zt,baseY:an.y,expanded:!1,expandT:0}),t.current.push({meta:ct,progress:zt})});let fn=!1,Vi=0,Bn=0,ki=0,es=0,la=.08,dc=0,Xn=!1,ns=0,pr=0,Fs=!1,wi=0,ca=0,Pa=0,ua=0,is=!1,xs=!1,ko=0,Xo=0,fa=null,Fa=!1,Hu=0,Gu=0,mr=!1,hc=!1;const Ss={x:0,y:0},da={x:0,y:0},Vu=new q,ku=new q,Wo=ct=>{Fs!==ct&&(Fs=ct,ht(ct))},Ei=new q,ao=32;for(let ct=0;ct<ao;ct++)Ei.add(Vn.getPointAt(ct/ao));Ei.divideScalar(ao);const Kh=()=>{Vu.copy(Ei).add(_R),ku.copy(Ei)},Xu=()=>{Ci.forEach(ct=>{ct.expanded=!1})},pc=ct=>{fn!==ct&&(fn=ct,is=!1,xs=!1,Xn=!1,fa=null,Fa=!1,z(ct),ct?(Bn=0,ki=0,es=0,la=.08,dc=0,Wo(!1),mr=!1,hc=!0,wi=dS,ca=hS,Pa=pS,ua=mS,Kh(),Xu(),me()):Wo(!1))},so=()=>{pc(!fn)};f.current=so;const Qh=new Ya(Ed*2,Ed*2),mc=uc();yn.push(mc);const gc=new La({color:16777215,emissive:new fe(fS),emissiveIntensity:1.4,map:mc,emissiveMap:mc,transparent:!0,alphaTest:.05,side:jn,depthWrite:!1});kn.push(gc);const{point:Wu,up:Yu}=fc(mR),Yo=Wu.clone().add(Yu.clone().multiplyScalar(1)),gr=new Re(Qh,gc);gr.position.copy(Yo),gr.userData={isExitGlyph:!0},gt.add(gr);const Jh=new Ya(Ed*5,Ed*5),$h=new Uo({visible:!1,side:jn}),ys=new Re(Jh,$h);ys.position.copy(Yo),ys.userData={isExitGlyph:!0},Dn.push(ys),gt.add(ys);const _r=new Kr(fS,pt?6:12,20,1.5);_r.position.copy(Yo),gt.add(_r);const qu=new Vh(pt?1.25:1.6,26,26);Ri.push(qu);const qo=new La({color:16764788,emissive:new fe(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});kn.push(qo);const jo=Wu.clone().add(Yu.clone().multiplyScalar(h0*.52+.32)),Bs=new Re(qu,qo);Bs.position.copy(jo),Bs.userData={isReentryDot:!0},Dn.push(Bs),gt.add(Bs);const _c=new Gh(pt?1.75:2.2,pt?2.35:2.95,52);Ri.push(_c);const Zo=new Uo({color:16761948,transparent:!0,opacity:0,side:jn,depthWrite:!1});kn.push(Zo);const Ba=new Re(_c,Zo);Ba.position.copy(jo),gt.add(Ba);const vc=new Kr(16761948,0,pt?34:44,2);vc.position.copy(jo),gt.add(vc);const ro=Ei.clone().add(new q(-178,42,118)),hi=new Lo;hi.position.copy(ro),hi.visible=!1,gt.add(hi);const Ko=new La({color:3093563,roughness:.88,metalness:.06}),xc=new La({color:5923435,roughness:.54,metalness:.14}),vr=new La({color:2040617,roughness:.92,metalness:.04});kn.push(Ko,xc,vr);const xr=new Ya(N0+2.6,ws+2.4),ju=new Ya(N0,ws),oo=new Pu(Td,6),Sc=new Pu(Td,6),yc=new Fu(.2,.2,ws+2.8,10);Ri.push(xr,ju,oo,Sc,yc);const Sr=new Re(oo,vr);Sr.rotation.x=-Math.PI*.5,Sr.position.y=-ws*.52,Sr.receiveShadow=!0,hi.add(Sr);const yr=new Re(Sc,Ko);yr.rotation.x=Math.PI*.5,yr.position.y=ws*.52,yr.receiveShadow=!0,hi.add(yr);const Qo=new Kr(15985630,0,96,2);Qo.position.set(0,ws*.34,0),hi.add(Qo);const Jo=new Kr(11123666,0,74,2);Jo.position.set(0,-ws*.1,ql*.3),hi.add(Jo);const $o=ar[0]?.video??"";for(let ct=0;ct<6;ct+=1){const Bt=ct*Math.PI/3,Gt=ql+1,zt=ql-.18,Lt=new Re(xr,Ko);Lt.position.set(-Math.sin(Bt)*Gt,0,-Math.cos(Bt)*Gt),Lt.rotation.y=Bt,Lt.castShadow=!0,Lt.receiveShadow=!0,hi.add(Lt);const se=ar[ct%ar.length],ie=document.createElement("video");ie.src=se.video,ie.poster=se.poster,ie.autoplay=!0,ie.loop=!0,ie.muted=!0,ie.playsInline=!0,ie.preload="metadata",ie.crossOrigin="anonymous",ie.setAttribute("playsinline","true"),ie.setAttribute("webkit-playsinline","true"),ts.push(ie);let He=!1;const Pe=()=>{He||!$o||ie.src===$o||(He=!0,ie.src=$o,ie.load(),ji(ie))},Wn=()=>{ji(ie)},Nn=()=>{Pe()};ie.addEventListener("loadeddata",Wn),ie.addEventListener("canplay",Wn),ie.addEventListener("error",Nn),vs.push(()=>{ie.removeEventListener("loadeddata",Wn),ie.removeEventListener("canplay",Wn),ie.removeEventListener("error",Nn)});const an=new sy(ie);an.colorSpace=ui,an.minFilter=Zn,an.magFilter=Zn,an.generateMipmaps=!1,yn.push(an),ji(ie);const ye=new Uo({color:16777215,map:an,side:jn,toneMapped:!1});kn.push(ye);const Ne=new Re(ju,ye);Ne.position.set(-Math.sin(Bt)*zt,0,-Math.cos(Bt)*zt),Ne.rotation.y=Bt,Ne.castShadow=!1,Ne.receiveShadow=!0,hi.add(Ne)}for(let ct=0;ct<6;ct+=1){const Bt=ct*Math.PI/3+Math.PI/6,Gt=ql+1.56,zt=new Re(yc,xc);zt.position.set(-Math.sin(Bt)*Gt,0,-Math.cos(Bt)*Gt),zt.castShadow=!0,zt.receiveShadow=!0,hi.add(zt)}const Zu=new kh(2.15,.2,12,48);Ri.push(Zu);const Ku=new La({color:15129027,roughness:.46,metalness:.24});kn.push(Ku);const Ms=new Re(Zu,Ku);Ms.position.copy(ro.clone().add(new q(0,-ws*.22,ql-4.4))),Ms.rotation.x=Math.PI*.5,Ms.userData={isFilmRoomExit:!0},Dn.push(Ms),gt.add(Ms);const Mc=new Kr(15914669,0,26,2);Mc.position.copy(Ms.position).add(new q(0,1.2,0)),gt.add(Mc);const Qu=new Fu(Td*1.08,Td*1.08,ws*1.2,6);Ri.push(Qu);const Di=new Uo({visible:!1,side:jn});kn.push(Di);const ha=new Re(Qu,Di);ha.userData={isFilmRoomPortal:!0},Dn.push(ha),gt.add(ha);const Ec=()=>{fn&&(is=!1,xs=!1,fa=null,Fa=!1,Xn=!1,ki=1,T("menu"),Wo(!0),ts.forEach(ji))},bc=()=>{fn&&(ki=0,Xn=!1)};h.current=Ec,m.current=bc;const tl=new xy,el=new Ce,nl=ct=>{ts.forEach(ji);const Bt=Q.domElement.getBoundingClientRect();el.x=(ct.clientX-Bt.left)/Bt.width*2-1,el.y=-((ct.clientY-Bt.top)/Bt.height)*2+1,ko=ct.clientX,Xo=ct.clientY,tl.setFromCamera(el,ft);const Gt=tl.intersectObjects(Dn,!1);if(fn){if(Gt.length>0){const zt=Gt[0].object;if(zt.userData.isFilmRoomPortal){Ec();return}if(zt.userData.isFilmRoomExit){bc();return}if(zt.userData.isReentryDot){pc(!1);return}if(zt.userData.isExitGlyph){so();return}}if(Bn>.12){Xn=ct.button===0,ns=ct.clientX,pr=ct.clientY;return}if(is=!0,xs=ct.shiftKey||ct.altKey||ct.button===2,fa=null,Fa=!1,Hu=ct.clientX,Gu=ct.clientY,!xs&&ct.button===0&&Bn<.08){const zt=tl.intersectObjects(ve,!1);zt.length>0&&(fa=io(zt[0]))}return}if(Gt.length>0){const zt=Gt[0].object;if(zt.userData.isExitGlyph){so();return}const Lt=zt.userData.panel;if(Lt){if(pt){v.current===Lt.id?me():Dt(Lt),Xu();return}const se=Ci.find(ie=>ie.panel.id===Lt.id);se&&(se.expanded?se.expanded=!1:(Ci.forEach(ie=>{ie.expanded=!1}),se.expanded=!0))}}else pt||Ci.forEach(zt=>{zt.expanded=!1})};Q.domElement.addEventListener("pointerdown",nl);const Ju=ct=>{const Bt=Q.domElement.getBoundingClientRect(),Gt=(ct.clientX-Bt.left)/Bt.width,zt=(ct.clientY-Bt.top)/Bt.height;if(Ss.x=(Gt-.5)*2,Ss.y=(zt-.5)*2,fn&&Xn){const Lt=ct.clientX-ns,se=ct.clientY-pr;ns=ct.clientX,pr=ct.clientY,es+=Lt*.0042,la=Ke.clamp(la+se*.0032,-.46,.42);return}if(fn&&is){if(fa!==null&&!Fa){if(Math.hypot(ct.clientX-Hu,ct.clientY-Gu)<=vR){ko=ct.clientX,Xo=ct.clientY;return}Fa=!0,fa=null}const Lt=ct.clientX-ko,se=ct.clientY-Xo;ko=ct.clientX,Xo=ct.clientY,mr=!0,xs?Pa=Ke.clamp(Pa+Lt*.0038,-Math.PI*.48,Math.PI*.48):(wi+=Lt*.0046,ca=Ke.clamp(ca+se*.0035,-.88,.88));return}},zs=()=>{Ss.x=0,Ss.y=0,Xn=!1,is=!1,xs=!1,fa=null,Fa=!1},Mr=()=>{fn&&fa!==null&&!Fa&&(i.current=fa,s.current=fa,pc(!1)),Xn=!1,is=!1,xs=!1,fa=null,Fa=!1},Er=ct=>{fn&&ct.preventDefault()};Q.domElement.addEventListener("pointermove",Ju,{passive:!0}),Q.domElement.addEventListener("pointerleave",zs,{passive:!0}),Q.domElement.addEventListener("pointerup",Mr,{passive:!0}),Q.domElement.addEventListener("pointercancel",Mr,{passive:!0}),Q.domElement.addEventListener("contextmenu",Er);const il=ct=>{if(ct.preventDefault(),fn){if(Bn>.12){const Bt=Math.abs(ct.deltaX)>Math.abs(ct.deltaY)?ct.deltaX:ct.deltaY;es+=Bt*OR,la=Ke.clamp(la+ct.deltaY*65e-5,-.46,.42);return}mr=!0,wi+=ct.deltaY*.0017,ua=Ke.clamp(ua+ct.deltaY*.22,-165,230);return}ts.forEach(ji),i.current=ra(i.current+cS*ct.deltaY*75e-6)};Q.domElement.addEventListener("wheel",il,{passive:!1});const Tc=ct=>{(ct.key==="o"||ct.key==="O")&&so()};window.addEventListener("keydown",Tc);let Zi=0,pa=0;const al=ct=>{ts.forEach(ji),Zi=ct.touches[0]?.clientX??0,pa=ct.touches[0]?.clientY??0},Ac=ct=>{ct.preventDefault();const Bt=ct.touches[0]?.clientX??Zi,Gt=ct.touches[0]?.clientY??pa,zt=Zi-Bt,Lt=pa-Gt;if(fn){if(Bn>.12){es+=zt*IR,la=Ke.clamp(la+Lt*PR,-.46,.42),Zi=Bt,pa=Gt;return}mr=!0,wi+=Lt*.0021,ua=Ke.clamp(ua+Lt*.13,-165,230),Zi=Bt,pa=Gt;return}i.current=ra(i.current+cS*Lt*11e-5),Zi=Bt,pa=Gt};Q.domElement.addEventListener("touchstart",al,{passive:!0}),Q.domElement.addEventListener("touchmove",Ac,{passive:!1});const Es=()=>{H&&(ft.aspect=H.clientWidth/H.clientHeight,ft.updateProjectionMatrix(),Q.setSize(H.clientWidth,H.clientHeight))};window.addEventListener("resize",Es);const Rc=new Sy,sl=new q,Cc=new q,$u=new q,wc=new q;let tf=_.length>0?_[0].id:"";const Dc=()=>{if(st)return;const ct=Rc.getDelta(),Bt=Rc.getElapsedTime();s.current=lR(s.current,i.current,X?2.8:4.8,ct),da.x+=(Ss.x-da.x)*.07,da.y+=(Ss.y-da.y)*.07,hc&&(Ss.x=0,Ss.y=0,da.x=0,da.y=0,hc=!1);const Gt=s.current,zt=ra(Gt+(pt?.008:.01)),Lt=Vn.getPointAt(Gt),se=Vn.getPointAt(zt),ie=Vn.getPointAt(ra(Gt+.002)).sub(Vn.getPointAt(ra(Gt-.002))).normalize();let He=new q().crossVectors(ie,vn).normalize();He.lengthSq()<1e-4&&(He=new q(1,0,0));const Pe=new q().crossVectors(He,ie).normalize(),Wn=He.clone().multiplyScalar(da.x*(pt?0:.62)).add(Pe.clone().multiplyScalar(da.y*(pt?0:.42))),Nn=X?new q:Pe.clone().multiplyScalar(Math.sin(Bt*.45)*.12),an=1/gR;fn&&Vi<1?Vi=Math.min(1,Vi+an*ct):!fn&&Vi>0&&(Vi=Math.max(0,Vi-an*ct));const ye=Vi<.5?4*Vi*Vi*Vi:1-Math.pow(-2*Vi+2,3)/2,Ne=1/NR;ki>Bn?Bn=Math.min(ki,Bn+Ne*ct):ki<Bn&&(Bn=Math.max(ki,Bn-Ne*ct));const We=Bn<.5?4*Bn*Bn*Bn:1-Math.pow(-2*Bn+2,3)/2;ki===0&&Bn<=.001&&Fs&&Wo(!1),ki>.01&&Bn>.08&&ts.forEach(ji),fn&&!mr&&(wi=dS,ca=hS,Pa=pS,ua=mS);const Qe=Ke.smoothstep(ye,.18,1),ma=mr?Qe:0,Ln=da.x*(pt?0:15.4)*ma,Ki=da.y*(pt?0:9.2)*ma;fi.position.copy(Ei).add(new q(Math.sin(wi)*6.8+Ln*.2,ca*2.4+Ki*.18,Math.cos(wi)*3.6-Ln*.13)),Mi.position.copy(Ei).add(new q(-Math.sin(wi)*3.2,ca*.9,Math.cos(wi)*2.1)),nn.position.set(Ei.x+700+Ln*2.8+Math.sin(wi)*52,Ei.y+290+Ki*1.35+ca*28,Ei.z-130-Ln*1.3+Math.cos(wi)*30),di.position.set(Ei.x-470-Ln*.82-Math.sin(wi)*16,Ei.y+35+Ki*.22+ca*10,Ei.z+360+Ln*.6-Math.cos(wi)*12);const ga=Vu.clone().sub(Ei).applyQuaternion(new cr().setFromEuler(new Ua(ca,wi,0,"YXZ"))),Pt=Ke.clamp(ga.length()+ua,260,860);ga.setLength(Pt);const Jn=Ei.clone().add(ga).add(new q(Ln,Ki*.84,Ln*.58)),Ni=ku.clone().add(new q(Ln*.11,Ki*.095,Ln*.085)),Qi=new cr,_i=Ke.smoothstep(ye,.24,.96)*(1-We),$n=fn&&(_i>.001||We>.001||ki>.001),Li=Ke.lerp(.22,1,We);hi.visible=$n,hi.scale.setScalar(Li),hi.position.copy(ro).add(new q(0,Math.sin(Bt*.72)*.9*(1-We),0)),hi.rotation.y=Bt*.18*(1-We),Ms.visible=We>.08,Mc.intensity=Ke.lerp(0,pt?1.8:2.9,We);const za=$n?1:0;Qo.intensity=Ke.lerp(pt?.34:.58,pt?2.6:4.8,We)*za,Jo.intensity=Ke.lerp(pt?.14:.24,pt?1.2:2.1,We)*za,Ms.rotation.z=Bt*.18;const Ji=fn&&ki<.01&&_i>.08;ha.visible=Ji,ha.position.copy(hi.position),ha.rotation.copy(hi.rotation),ha.scale.setScalar(Li);const Un=p.current;if(Un)if(fn&&ki<.01&&_i>.06){wc.copy(hi.position).project(ft);const be=(wc.x*.5+.5)*H.clientWidth,ti=(-wc.y*.5+.5)*H.clientHeight;Un.style.left=`${be-(pt?86:132)}px`,Un.style.top=`${ti-(pt?6:12)}px`,Un.style.opacity=`${Ke.clamp(_i*1.25,0,1)}`,Un.style.visibility="visible"}else Un.style.opacity="0",Un.style.visibility="hidden";const On=Ke.clamp(LR+dc,11.5,29),zn=ro.clone().add(new q(0,-.8,0)),_a=ro.clone().add(new q(Math.sin(es)*On,UR+la*9.5,Math.cos(es)*On));if(ye>.01){ce(ye>.26),gt.fog instanceof Iu&&(gt.fog.near=Ke.lerp(38,9999,ye),gt.fog.far=Ke.lerp(230,1e4,ye));const Se=new fe(987671),be=new fe(132106);gt.background.copy(Se).lerp(be,ye),Cn.intensity=Ke.lerp(.05,.002,ye),bn.intensity=Ke.lerp(.08,.007,ye),nn.intensity=Ke.lerp(0,pt?4.6:8.6,ye),di.intensity=Ke.lerp(0,pt?.02:.03,ye),Q.toneMappingExposure=Ke.lerp(pt?.76:.72,pt?.75:.76,ye),[gn,_n].forEach(ti=>{ti.emissive.set(3359829),ti.emissiveIntensity=0}),gn.envMapIntensity=Ke.lerp(.74,.04,ye),_n.envMapIntensity=Ke.lerp(.08,.01,ye),wn.color.set(0).lerp(new fe(16777215),ye),wn.toneMapped=ye>.5,wn.fog=ye>.5,wn.emissive.set(16777215),wn.emissiveIntensity=Ke.lerp(1,.02,ye),wn.envMapIntensity=Ke.lerp(0,.03,ye)}else ce(!1),Cn.intensity=.05,bn.intensity=.08,nn.intensity=0,di.intensity=0,Q.toneMappingExposure=pt?.76:.72,gt.background.set(987671),[gn,_n].forEach(Se=>{Se.emissive.set(0),Se.emissiveIntensity=0}),gn.envMapIntensity=.74,_n.envMapIntensity=.08,wn.color.set(0),wn.toneMapped=!1,wn.fog=!1,wn.emissive.set(16777215),wn.emissiveIntensity=1,wn.envMapIntensity=0;const $i=Pe.clone().multiplyScalar(-h0*.2),va=Lt.clone().add($i).add(Wn).add(Nn),Ha=se.clone().add($i).add(Wn.multiplyScalar(.22));if(ye>.99){if(ft.position.copy(Jn),ft.lookAt(Ni),Math.abs(Pa)>1e-4){const Se=Ni.clone().sub(ft.position).normalize();Qi.setFromAxisAngle(Se,Pa),ft.quaternion.multiply(Qi)}}else if(ye>.001){ft.position.lerpVectors(va,Jn,ye);const Se=Ha.clone().lerp(Ni,ye);if(ft.lookAt(Se),Math.abs(Pa)>1e-4){const be=Se.clone().sub(ft.position).normalize();Qi.setFromAxisAngle(be,Pa*ye),ft.quaternion.multiply(Qi)}}else ft.position.copy(va),ft.lookAt(Ha);if(fn&&We>.001){const Se=ft.position.clone().lerp(_a,We),be=Ni.clone().lerp(zn,We);ft.position.copy(Se),ft.lookAt(be)}const rl=.94+Math.sin(Bt*.23)*.06,lo=se.clone().add($i);Xt.position.copy(ft.position).add(Pe.clone().multiplyScalar(2.9)).add(He.clone().multiplyScalar(2.1)).add(ie.clone().multiplyScalar(-2.2)),un.position.copy(lo).add(He.clone().multiplyScalar(2.5)).add(Pe.clone().multiplyScalar(-.9)),Xt.intensity=(pt?14:21)*rl,Qn.position.copy(ft.position).add(Pe.clone().multiplyScalar(2)).add(He.clone().multiplyScalar(-2.4)).add(ie.clone().multiplyScalar(-1.1)),ze.position.copy(lo).add(He.clone().multiplyScalar(-2)).add(Pe.clone().multiplyScalar(-1.4)),Qn.intensity=(pt?5:8)*rl,he.position.copy(ft.position).add(Pe.clone().multiplyScalar(1.4)).add(ie.clone().multiplyScalar(2.8)).add(He.clone().multiplyScalar(.6)),Pn.position.copy(lo).add(Pe.clone().multiplyScalar(-.8)),he.intensity=(pt?4:6.2)*rl,Dn.forEach(Se=>{const be=Se.userData;if(!be||!be.shading||!be.material)return;const ti=be.shading,ei=be.material,xa=be.video,Ze=be;let ta=1;ti.lighting?.flicker_sync&&xa&&xa.readyState>=3&&(ta=.88+Math.sin(Bt*22)*.1*Math.sin(Bt*6.7));let Sa=1;if(ti.movement_reaction?.type==="viewing_angle_fade"){sl.set(0,0,0),Se.getWorldPosition(sl),Cc.set(0,0,1).applyQuaternion(Se.quaternion),$u.copy(ft.position).sub(sl).normalize();const Ui=Cc,ya=$u,Ma=Math.max(0,Ui.dot(ya)),Ea=ti.movement_reaction.cone_angle_degrees===60?3:1.5;Sa=Math.pow(Ma,Ea)}const bs=be.baseEmissive*ta*Sa;if(ei.emissiveIntensity=bs,Ze.bounceLights&&Ze.bounceLights.length>0){const Ui=Ze.bounceSampleCtx,ya=Ze.bounceSampleCanvas;if(xa&&Ui&&ya&&(Ze.bounceNextSampleAt??0)<=Bt){const Oi=u3(xa,ya,Ui);if(Oi){Ze.bounceTargetColor||(Ze.bounceTargetColor=Oi.color.clone());const ba=Oi.color.clone().lerp(new fe(1,.97,.93),.18);Ze.bounceTargetColor.copy(ba);const co=Ke.clamp(.22+Oi.luminance*1.9,.22,2.25);Ze.bounceTargetIntensity=(Ze.bounceBaseIntensity??5)*co*(.25+bs*1.25)}Ze.bounceNextSampleAt=Bt+1/(pt?2:4)}else xa||(Ze.bounceTargetIntensity=(Ze.bounceBaseIntensity??5)*(.22+bs*1.1));const Ma=Ze.bounceTargetIntensity??0,Ea=Ze.bounceCurrentIntensity??0;Ze.bounceCurrentIntensity=Ke.lerp(Ea,Ma,1-Math.exp(-6.2*ct)),Ze.bounceCurrentColor||(Ze.bounceCurrentColor=(Ze.bounceTargetColor??new fe(1,1,1)).clone()),Ze.bounceTargetColor&&Ze.bounceCurrentColor.lerp(Ze.bounceTargetColor,1-Math.exp(-5.4*ct)),Ze.bounceLights.forEach((Oi,ba)=>{const co=Math.max(1,Ze.bounceLights.length-1),Nc=1-ba/co*.34;Oi.color.copy(Ze.bounceCurrentColor),Oi.intensity=(Ze.bounceCurrentIntensity??0)*Nc})}}),Zh.forEach(({mesh:Se,basePosition:be,strength:ti})=>{const ei=Se.parent;if(!ei)return;const xa=ei.worldToLocal(ft.position.clone()),Ze=Ke.clamp(xa.x*.008,-.18,.18)*ti,ta=Ke.clamp(xa.y*.006,-.14,.14)*ti;Se.position.x=be.x+Ze,Se.position.y=be.y+ta}),Ci.forEach((Se,be)=>{const{mesh:ti,card:ei}=Se;ti.lookAt(ft.position);const xa=be*.7,Ze=Se.baseY+Math.sin(Bt*uR+xa)*cR;ti.position.y=Ze,ti.rotateZ(fR*ct);const ta=ti.material;ta.emissiveIntensity=1+Math.sin(Bt*2+be)*.4;const Sa=!pt&&Se.expanded?1:0,bs=1/pR;Se.expandT<Sa?Se.expandT=Math.min(1,Se.expandT+bs*ct):Se.expandT>Sa&&(Se.expandT=Math.max(0,Se.expandT-bs*ct));const Ui=Se.expandT,ya=Ui<.5?4*Ui*Ui*Ui:1-Math.pow(-2*Ui+2,3)/2;if(!pt&&ya>.001){ei.visible=!0,ei.position.copy(ti.position),ei.position.y-=p0+.3,ei.lookAt(ft.position),ei.scale.setScalar(ya);const Ma=ei.children[0].material;Ma.opacity=ya}else ei.visible=!1;ta.opacity=pt?1:1-ya*.4});const ol=Yo.y+Math.sin(Bt*.8)*.35;gr.lookAt(ft.position),gr.position.y=ol,gr.rotateZ(.15*ct),gc.emissiveIntensity=1.2+Math.sin(Bt*1.5)*.5,ys.lookAt(ft.position),ys.position.y=ol;const br=.72+Math.sin(Bt*2.35)*.28,Hn=Ke.smoothstep(ye,.2,.95)*(1-We);Bs.visible=Hn>.001,Ba.visible=Hn>.001,Bs.scale.setScalar(.88+br*.28),qo.emissiveIntensity=Hn*(.48+br*.45),vc.intensity=Hn*(pt?4.6:7.4)*br,Ba.lookAt(ft.position),Ba.scale.setScalar(.95+br*.18),Zo.opacity=Hn*(.2+br*.32);let sn=t.current[0]?.meta.id??(_.length>0?_[0].id:""),Ie=Number.POSITIVE_INFINITY;t.current.forEach(Se=>{let be=Math.abs(Gt-Se.progress);be>.5&&(be=1-be),be<Ie&&(Ie=be,sn=Se.meta.id)}),sn!==tf&&(tf=sn,M(sn)),Q.render(gt,ft),requestAnimationFrame(Dc)};Dc(),Mt=()=>{f.current=null,h.current=null,m.current=null,me(),Q.domElement.removeEventListener("pointerdown",nl),Q.domElement.removeEventListener("pointermove",Ju),Q.domElement.removeEventListener("pointerleave",zs),Q.domElement.removeEventListener("pointerup",Mr),Q.domElement.removeEventListener("pointercancel",Mr),Q.domElement.removeEventListener("contextmenu",Er),Q.domElement.removeEventListener("wheel",il),Q.domElement.removeEventListener("touchstart",al),Q.domElement.removeEventListener("touchmove",Ac),window.removeEventListener("resize",Es),window.removeEventListener("keydown",Tc),H.contains(Q.domElement)&&H.removeChild(Q.domElement),Dn.forEach(ct=>{const Bt=ct.userData?.video;Bt&&(Bt.pause(),Bt.src="",Bt.load())}),ts.forEach(ct=>{ct.pause(),ct.src="",ct.load()}),vs.forEach(ct=>ct()),yn.forEach(ct=>ct.dispose?.()),Ri.forEach(ct=>ct.dispose()),Vo.dispose(),hr.dispose(),Tn.albedo.dispose(),Tn.normal.dispose(),Tn.roughness.dispose(),Tn.ao.dispose(),Gi.albedo.dispose(),Gi.normal.dispose(),Gi.roughness.dispose(),Gi.ao.dispose(),ai.albedo.dispose(),ai.normal.dispose(),ai.roughness.dispose(),ai.ao.dispose(),kn.forEach(ct=>ct.dispose()),De.texture.dispose(),De.dispose(),Xe.dispose(),gn.dispose(),_n.dispose(),Ht.dispose(),wn.dispose(),fr.dispose(),lc.dispose(),cc.dispose(),Os.dispose(),Is.dispose(),Ps.dispose(),Oa.dispose(),ur.dispose(),Ja.dispose(),_s.dispose(),R.dispose(),$a.dispose(),qt.dispose(),_e.dispose(),Q.dispose()}})(),()=>{st=!0,f.current=null,h.current=null,m.current=null,Mt()}},[_,Ct,It,me]),Rt.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Rt.jsx("div",{ref:r,className:"absolute inset-0"}),Rt.jsx(f3,{}),Rt.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[Rt.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[Rt.jsx("button",{type:"button",onClick:()=>Ut("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${mt==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":mt==="nb",children:"NO"}),Rt.jsx("button",{type:"button",onClick:()=>Ut("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${mt==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":mt==="en",children:"EN"})]}),Rt.jsx("button",{type:"button",onClick:N?je:Ue,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":I,children:N?"get out":I?"get in":"get out"})]}),y||L?Rt.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:y?Ft.loadingPanels:Ft.panelsFallback}):null,I?null:Rt.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Rt.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:Ft.siteName}),Rt.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[Ft.activeInstallation,": ",oe]})]}),Yt&&!I?Rt.jsx("div",{className:"pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 md:hidden",children:Rt.jsxs("section",{className:"pointer-events-auto w-full max-w-[30rem] rounded-2xl border border-[#7fd9ff]/28 bg-[#061324]/94 px-4 py-3 text-[#e6f4ff] shadow-[0_22px_56px_rgba(0,0,0,0.62)] backdrop-blur",children:[Rt.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Rt.jsx("h2",{className:"text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#9edfff]",children:Yt.title}),Rt.jsx("button",{type:"button",onClick:me,className:"pointer-events-auto rounded-full border border-[#7fd9ff]/35 px-3 py-[0.28rem] text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#d7f0ff] transition active:translate-y-[1px]",children:mt==="nb"?"Lukk":"Close"})]}),Rt.jsx("p",{className:"mt-2 max-h-[52svh] overflow-y-auto whitespace-pre-line text-[0.83rem] leading-relaxed text-[#d9e7f4]",children:Yt.body})]})}):null,I&&!N?Rt.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Rt.jsx("style",{children:`
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
              @keyframes glyffHoloPulse {
                0%, 100% {
                  border-color: rgba(134, 181, 235, 0.34);
                  box-shadow:
                    0 0 16px rgba(88, 170, 255, 0.24),
                    0 0 34px rgba(79, 224, 255, 0.2),
                    inset 0 0 18px rgba(0, 0, 0, 0.36),
                    inset 0 1px 0 rgba(208, 232, 255, 0.24);
                }
                50% {
                  border-color: rgba(162, 235, 255, 0.62);
                  box-shadow:
                    0 0 26px rgba(88, 170, 255, 0.44),
                    0 0 52px rgba(79, 224, 255, 0.34),
                    inset 0 0 20px rgba(0, 0, 0, 0.34),
                    inset 0 1px 0 rgba(208, 232, 255, 0.34);
                }
              }
              @keyframes glyffHoloTwinkle {
                0%, 100% { filter: saturate(1.12) contrast(1.02) brightness(0.98); }
                40% { filter: saturate(1.42) contrast(1.16) brightness(1.1); }
                72% { filter: saturate(1.22) contrast(1.08) brightness(1.03); }
              }
              @keyframes glyffHoloSweep {
                0% { transform: translate3d(-42%, -18%, 0) rotate(0deg); opacity: 0.1; }
                45% { opacity: 0.4; }
                100% { transform: translate3d(42%, 18%, 0) rotate(180deg); opacity: 0.12; }
              }
              @keyframes glyffHoloScan {
                0% { background-position: 0 0, 0 0; }
                100% { background-position: 0 66px, 160px 0; }
              }
            `}),F==="menu"?Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:Ft.siteName}),Rt.jsx("button",{ref:p,type:"button",onClick:we,className:"pointer-events-auto absolute text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)",transform:"translate(-50%, -50%)",left:"-9999px",top:"-9999px",opacity:0,visibility:"hidden"},children:Rt.jsx("span",{className:"relative inline-block",children:Ft.outsideVideos})}),Rt.jsx("button",{type:"button",onClick:()=>T("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Rt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:Ft.outsideSignatures})})]}):null,F!=="menu"?Rt.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[Rt.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[Rt.jsx("button",{type:"button",onClick:()=>T("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:Ft.outsideBack}),F==="videos"?Rt.jsx(Rt.Fragment,{children:Rt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Ft.outsideVideosTitle})}):null,F==="signatures"?Rt.jsx(Rt.Fragment,{children:Rt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Ft.outsideSignaturesTitle})}):null,F==="news"?Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Ft.outsideNewsTitle}),Rt.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:Ft.outsideNewsBody})]}):null,F==="glyphwall"?Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:Ft.outsideGlyphWallTitle}),Ft.outsideGlyphWallBody?Rt.jsx("p",{className:"mt-2 max-w-4xl text-sm leading-relaxed text-[#b8cbe6] md:text-base",children:Ft.outsideGlyphWallBody}):null]}):null]}),F==="signatures"?Rt.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:Rt.jsxs("form",{onSubmit:En,className:"max-w-2xl rounded-2xl border border-[#8fb5e8]/38 bg-[#0b1629]/82 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-6",children:[Rt.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[Rt.jsxs("label",{className:"block",children:[Rt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:mt==="nb"?"Navn":"Name"}),Rt.jsx("input",{type:"text",required:!0,autoComplete:"name",value:vt,onChange:H=>Nt(H.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Rt.jsxs("label",{className:"block",children:[Rt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:mt==="nb"?"E-post":"Email"}),Rt.jsx("input",{type:"email",required:!0,autoComplete:"email",value:P,onChange:H=>j(H.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]})]}),Rt.jsxs("label",{className:"mt-3 block",children:[Rt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:mt==="nb"?"Melding":"Message"}),Rt.jsx("textarea",{required:!0,rows:5,value:St,onChange:H=>Ot(H.target.value),className:"mt-1 w-full resize-y rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Rt.jsx("button",{type:"submit",className:"mt-4 rounded-full border border-[#8fb5e8]/55 bg-[#122742]/85 px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e4efff] transition hover:bg-[#17365a]",children:mt==="nb"?"Send melding":"Send message"})]})}):null,F==="news"?Rt.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[et?Rt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:Ft.outsideNewsLoading}):null,!et&&K?Rt.jsx("p",{className:"text-sm text-[#ffb6b6]",children:K}):null,!et&&!K&&G.length===0?Rt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:Ft.outsideNewsEmpty}):null,!et&&!K&&G.length>0?Rt.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:G.map(H=>{const st=Date.parse(H.published_at),Mt=Number.isFinite(st)?ue.format(new Date(st)):H.published_at;return Rt.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[Rt.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[H.source,Mt?` · ${Mt}`:""]}),Rt.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:H.title}),H.snippet?Rt.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:H.snippet}):null,Rt.jsx("a",{href:H.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:mt==="nb"?"Åpne sak":"Open story"})]},`${H.url}-${H.title}`)})}):null]}):null,F==="glyphwall"?Rt.jsx("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:Rt.jsxs("section",{className:"relative h-full","data-rl-story-version":"rl-story-v1","data-rl-story-name":"replacement-anxiety-pattern",children:[Rt.jsx("div",{className:"relative h-full overflow-auto",children:Rt.jsx("div",{className:"grid grid-cols-3 gap-y-6 pb-6 sm:grid-cols-4 md:grid-cols-6 md:gap-y-7 lg:grid-cols-8 xl:grid-cols-10",children:re.map(H=>Rt.jsxs("article",{className:"relative flex items-center justify-center","data-rl-story-index":H.index+1,"data-rl-canonical":H.canonical,"data-rl-id":H.id,"data-rl-phase":H.phase,children:[Rt.jsx("div",{className:"relative h-[7rem] w-[7rem] overflow-hidden rounded-full border border-[#86b5eb]/34",style:{background:"radial-gradient(circle_at_42%_38%,rgba(122,213,255,0.26),rgba(13,27,52,0.94)_66%), radial-gradient(circle_at_75%_82%,rgba(43,163,255,0.16),rgba(0,0,0,0)_58%)",animation:H.index%3===0?"glyffFloatA 7.8s ease-in-out infinite, glyffHoloPulse 6.6s ease-in-out infinite, glyffHoloTwinkle 4.9s ease-in-out infinite":H.index%3===1?"glyffFloatB 9.2s ease-in-out infinite, glyffHoloPulse 7.4s ease-in-out infinite, glyffHoloTwinkle 5.3s ease-in-out infinite":"glyffFloatC 8.4s ease-in-out infinite, glyffHoloPulse 6.9s ease-in-out infinite, glyffHoloTwinkle 5.1s ease-in-out infinite",animationDelay:`${H.index%11*.16}s, ${H.index%7*.21}s, ${H.index%5*.27}s`},children:H.previewDataUrl?Rt.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-full bg-[#11213c]",children:[Rt.jsx("img",{src:H.previewDataUrl,alt:`Glyff ${H.index+1}`,className:"absolute inset-0 h-full w-full object-cover mix-blend-screen",style:{opacity:.88,filter:"saturate(1.48) hue-rotate(8deg) contrast(1.12)"},loading:"lazy"}),Rt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full",style:{background:"radial-gradient(circle_at_20%_18%,rgba(204,240,255,0.26),rgba(204,240,255,0)_42%), radial-gradient(circle_at_82%_79%,rgba(0,0,0,0.28),rgba(0,0,0,0)_56%)"}}),Rt.jsx("div",{className:"pointer-events-none absolute rounded-full",style:{inset:"-34%",background:"conic-gradient(from 0deg, rgba(128,250,255,0) 0deg, rgba(128,250,255,0.36) 72deg, rgba(123,170,255,0.06) 148deg, rgba(128,250,255,0) 260deg)",mixBlendMode:"screen",animation:"glyffHoloSweep 7.1s linear infinite",animationDelay:`${H.index%9*.31}s`}}),Rt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full",style:{background:"repeating-linear-gradient(180deg, rgba(151,228,255,0.16) 0px, rgba(151,228,255,0.16) 1px, rgba(10,18,34,0) 1px, rgba(10,18,34,0) 4px), linear-gradient(135deg, rgba(77,236,255,0.18) 0%, rgba(77,236,255,0) 54%)",mixBlendMode:"screen",opacity:.38,animation:"glyffHoloScan 2.7s linear infinite"}}),Rt.jsx("div",{className:"pointer-events-none absolute rounded-full",style:{inset:"1px",border:"1px solid rgba(164,238,255,0.52)",boxShadow:"0 0 18px rgba(131,237,255,0.28), inset 0 0 12px rgba(110,221,255,0.22)"}})]}):Rt.jsx("div",{className:"h-full w-full rounded-full bg-[#11213c]"})}),Rt.jsx("span",{className:"sr-only",children:H.canonical})]},H.id))})}),Rt.jsx("pre",{className:"sr-only","data-rl-story-payload":!0,children:Rn})]})}):null,F==="videos"?Rt.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:ee,onTouchStart:O,onTouchEnd:b,children:Rt.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[Rt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-black"}),Rt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_120px_rgba(0,0,0,0.92)]"}),Rt.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#e5e7eb]",children:[B+1," / ",ar.length]}),Rt.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.35)]"}),Rt.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${TR.toFixed(3)}rem) rotateY(${-B*FR}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[Rt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/10",style:{width:`${bd.toFixed(3)}rem`,height:`${bd.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${gS.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,1) 100%)",boxShadow:"none"}}),Rt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/8",style:{width:`${bd.toFixed(3)}rem`,height:`${bd.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${gS.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 100%)"}}),ar.map((H,st)=>Rt.jsx("div",{className:"pointer-events-none absolute left-1/2 top-1/2 border border-[#c4e1ff]/80 bg-[#0d223f]/76",style:{width:`${AR.toFixed(3)}rem`,height:`${_S.toFixed(3)}rem`,transform:`translate(-50%, -50%) rotateY(${st*60+CR}deg) translateZ(-${RR.toFixed(3)}rem)`,backfaceVisibility:"hidden",boxShadow:"0 0 0 1px rgba(211,235,255,0.75), 0 0 26px rgba(120,193,255,0.56), inset 0 0 44px rgba(110,186,255,0.32), 0 24px 46px rgba(0,0,0,0.62)",background:"linear-gradient(132deg, rgba(194,228,255,0.28) 0%, rgba(38,85,143,0.72) 36%, rgba(7,14,28,0.92) 100%)",opacity:.96}},`outer-wall-${H.video}-${st}`)),ar.map((H,st)=>Rt.jsx("div",{className:"pointer-events-none absolute left-1/2 top-1/2 bg-[#d7ecff]/86",style:{width:`${DR.toFixed(3)}rem`,height:`${(_S+1.6).toFixed(3)}rem`,transform:`translate(-50%, -50%) rotateY(${st*60+30}deg) translateZ(-${wR.toFixed(3)}rem)`,boxShadow:"0 0 30px rgba(172,220,255,0.98), 0 0 62px rgba(107,187,255,0.68)",opacity:.94}},`outer-corner-${H.video}-${st}`)),ar.map((H,st)=>Rt.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-white/10 bg-black shadow-[0_22px_44px_rgba(0,0,0,0.86)]",style:{width:`${(lg+bR).toFixed(3)}rem`,height:`${qh}rem`,transform:`translate(-50%, -50%) rotateY(${st*60}deg) translateZ(-${jh.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:Rt.jsx("video",{ref:Mt=>{c.current[st]=Mt},src:H.video,poster:H.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${H.video}-${st}`))]})]})}):null]}):null]}):null]})}function h3(){return Rt.jsx("div",{className:"min-h-screen bg-[#080604]",children:Rt.jsx(d3,{})})}iE.createRoot(document.getElementById("root")).render(Rt.jsx(jt.StrictMode,{children:Rt.jsx(h3,{})}));
