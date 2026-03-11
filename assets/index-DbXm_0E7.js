(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var nm={exports:{}},Tc={};var kv;function IM(){if(kv)return Tc;kv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Tc.Fragment=t,Tc.jsx=i,Tc.jsxs=i,Tc}var Xv;function PM(){return Xv||(Xv=1,nm.exports=IM()),nm.exports}var Dt=PM(),im={exports:{}},ye={};var Wv;function FM(){if(Wv)return ye;Wv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function y(I,q,_t){this.props=I,this.context=q,this.refs=M,this.updater=_t||b}y.prototype.isReactComponent={},y.prototype.setState=function(I,q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,q,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=y.prototype;function U(I,q,_t){this.props=I,this.context=q,this.refs=M,this.updater=_t||b}var N=U.prototype=new C;N.constructor=U,D(N,y.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(I,q,_t){var Ut=_t.ref;return{$$typeof:r,type:I,key:q,ref:Ut!==void 0?Ut:null,props:_t}}function pt(I,q){return L(I.type,q,I.props)}function V(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function tt(I){var q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_t){return q[_t]})}var st=/\/+/g;function rt(I,q){return typeof I=="object"&&I!==null&&I.key!=null?tt(""+I.key):q.toString(36)}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(q){I.status==="pending"&&(I.status="fulfilled",I.value=q)},function(q){I.status==="pending"&&(I.status="rejected",I.reason=q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,q,_t,Ut,qt){var et=typeof I;(et==="undefined"||et==="boolean")&&(I=null);var St=!1;if(I===null)St=!0;else switch(et){case"bigint":case"string":case"number":St=!0;break;case"object":switch(I.$$typeof){case r:case t:St=!0;break;case _:return St=I._init,O(St(I._payload),q,_t,Ut,qt)}}if(St)return qt=qt(I),St=Ut===""?"."+rt(I,0):Ut,F(qt)?(_t="",St!=null&&(_t=St.replace(st,"$&/")+"/"),O(qt,q,_t,"",function(ie){return ie})):qt!=null&&(V(qt)&&(qt=pt(qt,_t+(qt.key==null||I&&I.key===qt.key?"":(""+qt.key).replace(st,"$&/")+"/")+St)),q.push(qt)),1;St=0;var Lt=Ut===""?".":Ut+":";if(F(I))for(var jt=0;jt<I.length;jt++)Ut=I[jt],et=Lt+rt(Ut,jt),St+=O(Ut,q,_t,et,qt);else if(jt=S(I),typeof jt=="function")for(I=jt.call(I),jt=0;!(Ut=I.next()).done;)Ut=Ut.value,et=Lt+rt(Ut,jt++),St+=O(Ut,q,_t,et,qt);else if(et==="object"){if(typeof I.then=="function")return O(Z(I),q,_t,Ut,qt);throw q=String(I),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return St}function P(I,q,_t){if(I==null)return I;var Ut=[],qt=0;return O(I,Ut,"","",function(et){return q.call(_t,et,qt++)}),Ut}function $(I){if(I._status===-1){var q=I._result;q=q(),q.then(function(_t){(I._status===0||I._status===-1)&&(I._status=1,I._result=_t)},function(_t){(I._status===0||I._status===-1)&&(I._status=2,I._result=_t)}),I._status===-1&&(I._status=0,I._result=q)}if(I._status===1)return I._result.default;throw I._result}var mt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},gt={map:P,forEach:function(I,q,_t){P(I,function(){q.apply(this,arguments)},_t)},count:function(I){var q=0;return P(I,function(){q++}),q},toArray:function(I){return P(I,function(q){return q})||[]},only:function(I){if(!V(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ye.Activity=v,ye.Children=gt,ye.Component=y,ye.Fragment=i,ye.Profiler=l,ye.PureComponent=U,ye.StrictMode=s,ye.Suspense=m,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ye.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},ye.cache=function(I){return function(){return I.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(I,q,_t){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ut=D({},I.props),qt=I.key;if(q!=null)for(et in q.key!==void 0&&(qt=""+q.key),q)!T.call(q,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&q.ref===void 0||(Ut[et]=q[et]);var et=arguments.length-2;if(et===1)Ut.children=_t;else if(1<et){for(var St=Array(et),Lt=0;Lt<et;Lt++)St[Lt]=arguments[Lt+2];Ut.children=St}return L(I.type,qt,Ut)},ye.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ye.createElement=function(I,q,_t){var Ut,qt={},et=null;if(q!=null)for(Ut in q.key!==void 0&&(et=""+q.key),q)T.call(q,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(qt[Ut]=q[Ut]);var St=arguments.length-2;if(St===1)qt.children=_t;else if(1<St){for(var Lt=Array(St),jt=0;jt<St;jt++)Lt[jt]=arguments[jt+2];qt.children=Lt}if(I&&I.defaultProps)for(Ut in St=I.defaultProps,St)qt[Ut]===void 0&&(qt[Ut]=St[Ut]);return L(I,et,qt)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(I){return{$$typeof:h,render:I}},ye.isValidElement=V,ye.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:$}},ye.memo=function(I,q){return{$$typeof:p,type:I,compare:q===void 0?null:q}},ye.startTransition=function(I){var q=z.T,_t={};z.T=_t;try{var Ut=I(),qt=z.S;qt!==null&&qt(_t,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(B,mt)}catch(et){mt(et)}finally{q!==null&&_t.types!==null&&(q.types=_t.types),z.T=q}},ye.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ye.use=function(I){return z.H.use(I)},ye.useActionState=function(I,q,_t){return z.H.useActionState(I,q,_t)},ye.useCallback=function(I,q){return z.H.useCallback(I,q)},ye.useContext=function(I){return z.H.useContext(I)},ye.useDebugValue=function(){},ye.useDeferredValue=function(I,q){return z.H.useDeferredValue(I,q)},ye.useEffect=function(I,q){return z.H.useEffect(I,q)},ye.useEffectEvent=function(I){return z.H.useEffectEvent(I)},ye.useId=function(){return z.H.useId()},ye.useImperativeHandle=function(I,q,_t){return z.H.useImperativeHandle(I,q,_t)},ye.useInsertionEffect=function(I,q){return z.H.useInsertionEffect(I,q)},ye.useLayoutEffect=function(I,q){return z.H.useLayoutEffect(I,q)},ye.useMemo=function(I,q){return z.H.useMemo(I,q)},ye.useOptimistic=function(I,q){return z.H.useOptimistic(I,q)},ye.useReducer=function(I,q,_t){return z.H.useReducer(I,q,_t)},ye.useRef=function(I){return z.H.useRef(I)},ye.useState=function(I){return z.H.useState(I)},ye.useSyncExternalStore=function(I,q,_t){return z.H.useSyncExternalStore(I,q,_t)},ye.useTransition=function(){return z.H.useTransition()},ye.version="19.2.4",ye}var Yv;function o0(){return Yv||(Yv=1,im.exports=FM()),im.exports}var se=o0(),am={exports:{}},Ac={},sm={exports:{}},rm={};var qv;function BM(){return qv||(qv=1,(function(r){function t(O,P){var $=O.length;O.push(P);t:for(;0<$;){var mt=$-1>>>1,gt=O[mt];if(0<l(gt,P))O[mt]=P,O[$]=gt,$=mt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var P=O[0],$=O.pop();if($!==P){O[0]=$;t:for(var mt=0,gt=O.length,I=gt>>>1;mt<I;){var q=2*(mt+1)-1,_t=O[q],Ut=q+1,qt=O[Ut];if(0>l(_t,$))Ut<gt&&0>l(qt,_t)?(O[mt]=qt,O[Ut]=$,mt=Ut):(O[mt]=_t,O[q]=$,mt=q);else if(Ut<gt&&0>l(qt,$))O[mt]=qt,O[Ut]=$,mt=Ut;else break t}}return P}function l(O,P){var $=O.sortIndex-P.sortIndex;return $!==0?$:O.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,b=!1,D=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var P=i(p);P!==null;){if(P.callback===null)s(p);else if(P.startTime<=O)s(p),P.sortIndex=P.expirationTime,t(m,P);else break;P=i(p)}}function F(O){if(D=!1,N(O),!b)if(i(m)!==null)b=!0,B||(B=!0,tt());else{var P=i(p);P!==null&&Z(F,P.startTime-O)}}var B=!1,z=-1,T=5,L=-1;function pt(){return M?!0:!(r.unstable_now()-L<T)}function V(){if(M=!1,B){var O=r.unstable_now();L=O;var P=!0;try{t:{b=!1,D&&(D=!1,C(z),z=-1),S=!0;var $=g;try{e:{for(N(O),v=i(m);v!==null&&!(v.expirationTime>O&&pt());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,g=v.priorityLevel;var gt=mt(v.expirationTime<=O);if(O=r.unstable_now(),typeof gt=="function"){v.callback=gt,N(O),P=!0;break e}v===i(m)&&s(m),N(O)}else s(m);v=i(m)}if(v!==null)P=!0;else{var I=i(p);I!==null&&Z(F,I.startTime-O),P=!1}}break t}finally{v=null,g=$,S=!1}P=void 0}}finally{P?tt():B=!1}}}var tt;if(typeof U=="function")tt=function(){U(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,rt=st.port2;st.port1.onmessage=V,tt=function(){rt.postMessage(null)}}else tt=function(){y(V,0)};function Z(O,P){z=y(function(){O(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var $=g;g=P;try{return O()}finally{g=$}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=g;g=O;try{return P()}finally{g=$}},r.unstable_scheduleCallback=function(O,P,$){var mt=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?mt+$:mt):$=mt,O){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=$+gt,O={id:_++,callback:P,priorityLevel:O,startTime:$,expirationTime:gt,sortIndex:-1},$>mt?(O.sortIndex=$,t(p,O),i(m)===null&&O===i(p)&&(D?(C(z),z=-1):D=!0,Z(F,$-mt))):(O.sortIndex=gt,t(m,O),b||S||(b=!0,B||(B=!0,tt()))),O},r.unstable_shouldYield=pt,r.unstable_wrapCallback=function(O){var P=g;return function(){var $=g;g=P;try{return O.apply(this,arguments)}finally{g=$}}}})(rm)),rm}var jv;function zM(){return jv||(jv=1,sm.exports=BM()),sm.exports}var om={exports:{}},hi={};var Zv;function HM(){if(Zv)return hi;Zv=1;var r=o0();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return hi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,hi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},hi.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},hi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},hi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},hi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},hi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},hi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},hi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},hi.requestFormReset=function(m){s.d.r(m)},hi.unstable_batchedUpdates=function(m,p){return m(p)},hi.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},hi.useFormStatus=function(){return f.H.useHostTransitionStatus()},hi.version="19.2.4",hi}var Kv;function GM(){if(Kv)return om.exports;Kv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),om.exports=HM(),om.exports}var Qv;function VM(){if(Qv)return Ac;Qv=1;var r=zM(),t=o0(),i=GM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=d;break}if(A===o){x=!0,o=u,a=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===a){x=!0,a=d,o=u;break}if(A===o){x=!0,o=d,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:rt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return rt(e(n))}catch{}}return null}var Z=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},mt=[],gt=-1;function I(e){return{current:e}}function q(e){0>gt||(e.current=mt[gt],mt[gt]=null,gt--)}function _t(e,n){gt++,mt[gt]=e.current,e.current=n}var Ut=I(null),qt=I(null),et=I(null),St=I(null);function Lt(e,n){switch(_t(et,n),_t(qt,e),_t(Ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?dv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=dv(n),e=hv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Ut),_t(Ut,e)}function jt(){q(Ut),q(qt),q(et)}function ie(e){e.memoizedState!==null&&_t(St,e);var n=Ut.current,a=hv(n,e.type);n!==a&&(_t(qt,e),_t(Ut,a))}function fe(e){qt.current===e&&(q(Ut),q(qt)),St.current===e&&(q(St),yc._currentValue=$)}var vn,Te;function Me(e){if(vn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vn=n&&n[1]||"",Te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vn+e+Te}var ze=!1;function xe(e,n){if(!e||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(dt){var lt=dt}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(dt){lt=dt}e.call(bt.prototype)}}else{try{throw Error()}catch(dt){lt=dt}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(dt){if(dt&&lt&&typeof dt.stack=="string")return[dt.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var G=x.split(`
`),at=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===at.length)for(o=G.length-1,u=at.length-1;1<=o&&0<=u&&G[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==at[u]){var vt=`
`+G[o].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=o&&0<=u);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Me(a):""}function hn(e,n){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return e.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return Me("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=hn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var pn=Object.prototype.hasOwnProperty,Ue=r.unstable_scheduleCallback,ot=r.unstable_cancelCallback,At=r.unstable_shouldYield,w=r.unstable_requestPaint,E=r.unstable_now,H=r.unstable_getCurrentPriorityLevel,ct=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,yt=r.unstable_LowPriority,ht=r.unstable_IdlePriority,Et=r.log,te=r.unstable_setDisableYieldValue,Ct=null,wt=null;function Vt(e){if(typeof Et=="function"&&te(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Ct,e)}catch{}}var Ft=Math.clz32?Math.clz32:X,zt=Math.log,le=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(zt(e)/le|0)|0}var Ot=256,Nt=262144,Ht=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Tt(o):(x&=A,x!==0?u=Tt(x):a||(a=A&~e,a!==0&&(u=Tt(a))))):(A=o&~d,A!==0?u=Tt(A):x!==0?u=Tt(x):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function me(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Jn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fi(e,n,a,o,u,d){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(a=x&~a;0<a;){var vt=31-Ft(a),bt=1<<vt;A[vt]=0,G[vt]=-1;var lt=at[vt];if(lt!==null)for(at[vt]=null,vt=0;vt<lt.length;vt++){var dt=lt[vt];dt!==null&&(dt.lane&=-536870913)}a&=~bt}o!==0&&Xa(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~n))}function Xa(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ma(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function us(e,n){var a=n&-n;return a=(a&42)!==0?1:fs(a),(a&(e.suspendedLanes|n))!==0?0:a}function fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ds(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zi(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Pv(e.type))}function hs(e,n){var a=P.p;try{return P.p=e,n()}finally{P.p=a}}var Di=Math.random().toString(36).slice(2),xn="__reactFiber$"+Di,yn="__reactProps$"+Di,_i="__reactContainer$"+Di,Ni="__reactEvents$"+Di,Ao="__reactListeners$"+Di,Wa="__reactHandles$"+Di,Pr="__reactResources$"+Di,Ya="__reactMarker$"+Di;function qs(e){delete e[xn],delete e[yn],delete e[Ni],delete e[Ao],delete e[Wa]}function Ea(e){var n=e[xn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[xn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Sv(e);e!==null;){if(a=e[xn])return a;e=Sv(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[xn]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[Pr];return n||(n=e[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Ya]=!0}var ut=new Set,it={};function J(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(it[e]=n,e=0;e<n.length;e++)ut.add(n[e])}var Yt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Qt={};function Gt(e){return pn.call(Qt,e)?!0:pn.call(Bt,e)?!1:Yt.test(e)?Qt[e]=!0:(Bt[e]=!0,!1)}function ue(e,n,a){if(Gt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Se(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function en(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=en(e)?"checked":"value";e._valueTracker=Ke(e,n,""+e[n])}}function Tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=en(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $n=/[\n"\\]/g;function pe(e){return e.replace($n,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xn(e,n,a,o,u,d,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ge(n)):e.value!==""+ge(n)&&(e.value=""+ge(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Hi(e,x,ge(n)):a!=null?Hi(e,x,ge(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ge(A):e.removeAttribute("name")}function vi(e,n,a,o,u,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Oe(e)}function Hi(e,n,a){n==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ye(e,n,a){if(n!=null&&(n=""+ge(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ge(a):""}function An(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Z(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ge(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function na(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Wn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Wn(e,d,n[d])}function ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ei(e){return Gi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ni(){}var ja=null;function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var aa=null,sa=null;function Ro(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Xn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(s(90));Xn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Tn(o)}break t;case"textarea":Ye(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xi(e,!!a.multiple,n,!1)}}}var Fr=!1;function Co(e,n,a){if(Fr)return e(n,a);Fr=!0;try{var o=e(n);return o}finally{if(Fr=!1,(aa!==null||sa!==null)&&(Ju(),aa&&(n=aa,e=sa,sa=aa=null,Ro(n),e)))for(n=0;n<e.length;n++)Ro(e[n])}}function js(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Br=!1;if(mn)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Br=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Br=!1}var Za=null,wo=null,gs=null;function nu(){if(gs)return gs;var e,n=wo,a=n.length,o,u="value"in Za?Za.value:Za.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return gs=u.slice(e,1<o?1-o:void 0)}function Zs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ks(){return!0}function Hl(){return!1}function ii(e){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ks:Hl,this.isPropagationStopped=Hl,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),n}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=ii(ra),Hr=v({},ra,{view:0,detail:0}),ph=ii(Hr),Ka,Do,Qs,Js=v({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(Ka=e.screenX-Qs.screenX,Do=e.screenY-Qs.screenY):Do=Ka=0,Qs=e),Ka)},movementY:function(e){return"movementY"in e?e.movementY:Do}}),No=ii(Js),$s=v({},Js,{dataTransfer:0}),iu=ii($s),Gl=v({},Hr,{relatedTarget:0}),_s=ii(Gl),Vl=v({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),au=ii(Vl),kl=v({},ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),su=ii(kl),tr=v({},ra,{data:0}),Aa=ii(tr),ru={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ou={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lo[e])?!!n[e]:!1}function Uo(){return lu}var cu=v({},Hr,{key:function(e){if(e.key){var n=ru[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ou[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uo,charCode:function(e){return e.type==="keypress"?Zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gr=ii(cu),uu=v({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xl=ii(uu),fu=v({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uo}),Wl=ii(fu),du=v({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yl=ii(du),hu=v({},Js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pu=ii(hu),mu=v({},ra,{newState:0,oldState:0}),gu=ii(mu),Rt=[9,13,27,32],ee=mn&&"CompositionEvent"in window,Jt=null;mn&&"documentMode"in document&&(Jt=document.documentMode);var ne=mn&&"TextEvent"in window&&!Jt,Xt=mn&&(!ee||Jt&&8<Jt&&11>=Jt),ve=" ",ke=!1;function Je(e,n){switch(e){case"keyup":return Rt.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $e(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Si(e,n){switch(e){case"compositionend":return $e(n);case"keypress":return n.which!==32?null:(ke=!0,ve);case"textInput":return e=n.data,e===ve&&ke?null:e;default:return null}}function Rn(e,n){if(Un)return e==="compositionend"||!ee&&Je(e,n)?(e=nu(),gs=wo=Za=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xt&&n.locale!=="ko"?null:n.data;default:return null}}var Fe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nn(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fe[e.type]:n==="textarea"}function qe(e,n,a,o){aa?sa?sa.push(o):sa=[o]:aa=o,n=rf(n,"onChange"),0<n.length&&(a=new Ta("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var rn=null,di=null;function Vr(e){rv(e,0)}function Vi(e){var n=qa(e);if(Tn(n))return e}function Ra(e,n){if(e==="change")return n}var It=!1;if(mn){var Cn;if(mn){var yi="oninput"in document;if(!yi){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),yi=typeof Ca.oninput=="function"}Cn=yi}else Cn=!1;It=Cn&&(!document.documentMode||9<document.documentMode)}function ai(){rn&&(rn.detachEvent("onpropertychange",oa),di=rn=null)}function oa(e){if(e.propertyName==="value"&&Vi(di)){var n=[];qe(n,di,e,ms(e)),Co(Vr,n)}}function wa(e,n,a){e==="focusin"?(ai(),rn=n,di=a,rn.attachEvent("onpropertychange",oa)):e==="focusout"&&ai()}function Qa(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(di)}function Mi(e,n){if(e==="click")return Vi(n)}function si(e,n){if(e==="input"||e==="change")return Vi(n)}function ki(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var oe=typeof Object.is=="function"?Object.is:ki;function Xe(e,n){if(oe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!pn.call(n,u)||!oe(e[u],n[u]))return!1}return!0}function Yn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ei(e,n){var a=Yn(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yn(a)}}function Xi(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xi(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function We(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zt(e.document)}return n}function Da(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var kr=mn&&"documentMode"in document&&11>=document.documentMode,Wi=null,Li=null,bi=null,vs=!1;function Oo(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vs||Wi==null||Wi!==Zt(o)||(o=Wi,"selectionStart"in o&&Da(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),bi&&Xe(bi,o)||(bi=o,o=rf(Li,"onSelect"),0<o.length&&(n=new Ta("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Wi)))}function Ti(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ja={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionrun:Ti("Transition","TransitionRun"),transitionstart:Ti("Transition","TransitionStart"),transitioncancel:Ti("Transition","TransitionCancel"),transitionend:Ti("Transition","TransitionEnd")},Xr={},_u={};mn&&(_u=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Wr(e){if(Xr[e])return Xr[e];if(!Ja[e])return e;var n=Ja[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _u)return Xr[e]=n[a];return e}var P0=Wr("animationend"),F0=Wr("animationiteration"),B0=Wr("animationstart"),my=Wr("transitionrun"),gy=Wr("transitionstart"),_y=Wr("transitioncancel"),z0=Wr("transitionend"),H0=new Map,mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mh.push("scrollEnd");function Na(e,n){H0.set(e,n),J(n,[e])}var vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},la=[],Io=0,gh=0;function xu(){for(var e=Io,n=gh=Io=0;n<e;){var a=la[n];la[n++]=null;var o=la[n];la[n++]=null;var u=la[n];la[n++]=null;var d=la[n];if(la[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&G0(a,u,d)}}function Su(e,n,a,o){la[Io++]=e,la[Io++]=n,la[Io++]=a,la[Io++]=o,gh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function _h(e,n,a,o){return Su(e,n,a,o),yu(e)}function Yr(e,n){return Su(e,null,null,n),yu(e)}function G0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function yu(e){if(50<pc)throw pc=0,Ap=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Po={};function vy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yi(e,n,a,o){return new vy(e,n,a,o)}function vh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xs(e,n){var a=e.alternate;return a===null?(a=Yi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function V0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Mu(e,n,a,o,u,d){var x=0;if(o=e,typeof e=="function")vh(e)&&(x=1);else if(typeof e=="string")x=EM(e,a,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=Yi(31,a,n,u),e.elementType=L,e.lanes=d,e;case D:return qr(a.children,u,d,n);case M:x=8,u|=24;break;case y:return e=Yi(12,a,n,u|2),e.elementType=y,e.lanes=d,e;case F:return e=Yi(13,a,n,u),e.elementType=F,e.lanes=d,e;case B:return e=Yi(19,a,n,u),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case C:x=9;break t;case N:x=11;break t;case z:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Yi(x,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function qr(e,n,a,o){return e=Yi(7,e,o,n),e.lanes=a,e}function xh(e,n,a){return e=Yi(6,e,null,n),e.lanes=a,e}function k0(e){var n=Yi(18,null,null,0);return n.stateNode=e,n}function Sh(e,n,a){return n=Yi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var X0=new WeakMap;function ca(e,n){if(typeof e=="object"&&e!==null){var a=X0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},X0.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var Fo=[],Bo=0,Eu=null,ql=0,ua=[],fa=0,er=null,$a=1,ts="";function Ss(e,n){Fo[Bo++]=ql,Fo[Bo++]=Eu,Eu=e,ql=n}function W0(e,n,a){ua[fa++]=$a,ua[fa++]=ts,ua[fa++]=er,er=e;var o=$a;e=ts;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var d=32-Ft(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,$a=1<<32-Ft(n)+u|a<<u|o,ts=d+e}else $a=1<<d|a<<u|o,ts=e}function yh(e){e.return!==null&&(Ss(e,1),W0(e,1,0))}function Mh(e){for(;e===Eu;)Eu=Fo[--Bo],Fo[Bo]=null,ql=Fo[--Bo],Fo[Bo]=null;for(;e===er;)er=ua[--fa],ua[fa]=null,ts=ua[--fa],ua[fa]=null,$a=ua[--fa],ua[fa]=null}function Y0(e,n){ua[fa++]=$a,ua[fa++]=ts,ua[fa++]=er,$a=n.id,ts=n.overflow,er=e}var ri=null,gn=null,Be=!1,nr=null,da=!1,Eh=Error(s(519));function ir(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jl(ca(n,e)),Eh}function q0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[xn]=e,n[yn]=o,a){case"dialog":Le("cancel",n),Le("close",n);break;case"iframe":case"object":case"embed":Le("load",n);break;case"video":case"audio":for(a=0;a<gc.length;a++)Le(gc[a],n);break;case"source":Le("error",n);break;case"img":case"image":case"link":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"input":Le("invalid",n),vi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Le("invalid",n);break;case"textarea":Le("invalid",n),An(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||uv(n.textContent,a)?(o.popover!=null&&(Le("beforetoggle",n),Le("toggle",n)),o.onScroll!=null&&Le("scroll",n),o.onScrollEnd!=null&&Le("scrollend",n),o.onClick!=null&&(n.onclick=ni),n=!0):n=!1,n||ir(e,!0)}function j0(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 31:case 13:da=!1;return;case 27:case 3:da=!0;return;default:ri=ri.return}}function zo(e){if(e!==ri)return!1;if(!Be)return j0(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gp(e.type,e.memoizedProps)),a=!a),a&&gn&&ir(e),j0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=xv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gn=xv(e)}else n===27?(n=gn,_r(e.type)?(e=Yp,Yp=null,gn=e):gn=n):gn=ri?pa(e.stateNode.nextSibling):null;return!0}function jr(){gn=ri=null,Be=!1}function bh(){var e=nr;return e!==null&&(Pi===null?Pi=e:Pi.push.apply(Pi,e),nr=null),e}function jl(e){nr===null?nr=[e]:nr.push(e)}var Th=I(null),Zr=null,ys=null;function ar(e,n,a){_t(Th,n._currentValue),n._currentValue=a}function Ms(e){e._currentValue=Th.current,q(Th)}function Ah(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Rh(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Ah(d.return,a,e),o||(x=null);break t}d=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Ah(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Ho(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;oe(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===St.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(yc):e=[yc])}u=u.return}e!==null&&Rh(n,e,a,o),n.flags|=262144}function bu(e){for(e=e.firstContext;e!==null;){if(!oe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Kr(e){Zr=e,ys=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oi(e){return Z0(Zr,e)}function Tu(e,n){return Zr===null&&Kr(e),Z0(e,n)}function Z0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ys===null){if(e===null)throw Error(s(308));ys=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ys=ys.next=n;return a}var xy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Sy=r.unstable_scheduleCallback,yy=r.unstable_NormalPriority,On={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ch(){return{controller:new xy,data:new Map,refCount:0}}function Zl(e){e.refCount--,e.refCount===0&&Sy(yy,function(){e.controller.abort()})}var Kl=null,wh=0,Go=0,Vo=null;function My(e,n){if(Kl===null){var a=Kl=[];wh=0,Go=Lp(),Vo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wh++,n.then(K0,K0),n}function K0(){if(--wh===0&&Kl!==null){Vo!==null&&(Vo.status="fulfilled");var e=Kl;Kl=null,Go=0,Vo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ey(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Q0=O.S;O.S=function(e,n){O_=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&My(e,n),Q0!==null&&Q0(e,n)};var Qr=I(null);function Dh(){var e=Qr.current;return e!==null?e:fn.pooledCache}function Au(e,n){n===null?_t(Qr,Qr.current):_t(Qr,n.pool)}function J0(){var e=Dh();return e===null?null:{parent:On._currentValue,pool:e}}var ko=Error(s(460)),Nh=Error(s(474)),Ru=Error(s(542)),Cu={then:function(){}};function $0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ni,ni),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ng(e),e;default:if(typeof n.status=="string")n.then(ni,ni);else{if(e=fn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ng(e),e}throw $r=n,ko}}function Jr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($r=a,ko):a}}var $r=null;function eg(){if($r===null)throw Error(s(459));var e=$r;return $r=null,e}function ng(e){if(e===ko||e===Ru)throw Error(s(483))}var Xo=null,Ql=0;function wu(e){var n=Ql;return Ql+=1,Xo===null&&(Xo=[]),tg(Xo,e,n)}function Jl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Du(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ig(e){function n(K,W){if(e){var nt=K.deletions;nt===null?(K.deletions=[W],K.flags|=16):nt.push(W)}}function a(K,W){if(!e)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function o(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=xs(K,W),K.index=0,K.sibling=null,K}function d(K,W,nt){return K.index=nt,e?(nt=K.alternate,nt!==null?(nt=nt.index,nt<W?(K.flags|=67108866,W):nt):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,W,nt,Mt){return W===null||W.tag!==6?(W=xh(nt,K.mode,Mt),W.return=K,W):(W=u(W,nt),W.return=K,W)}function G(K,W,nt,Mt){var re=nt.type;return re===D?vt(K,W,nt.props.children,Mt,nt.key):W!==null&&(W.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===T&&Jr(re)===W.type)?(W=u(W,nt.props),Jl(W,nt),W.return=K,W):(W=Mu(nt.type,nt.key,nt.props,null,K.mode,Mt),Jl(W,nt),W.return=K,W)}function at(K,W,nt,Mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==nt.containerInfo||W.stateNode.implementation!==nt.implementation?(W=Sh(nt,K.mode,Mt),W.return=K,W):(W=u(W,nt.children||[]),W.return=K,W)}function vt(K,W,nt,Mt,re){return W===null||W.tag!==7?(W=qr(nt,K.mode,Mt,re),W.return=K,W):(W=u(W,nt),W.return=K,W)}function bt(K,W,nt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=xh(""+W,K.mode,nt),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return nt=Mu(W.type,W.key,W.props,null,K.mode,nt),Jl(nt,W),nt.return=K,nt;case b:return W=Sh(W,K.mode,nt),W.return=K,W;case T:return W=Jr(W),bt(K,W,nt)}if(Z(W)||tt(W))return W=qr(W,K.mode,nt,null),W.return=K,W;if(typeof W.then=="function")return bt(K,wu(W),nt);if(W.$$typeof===U)return bt(K,Tu(K,W),nt);Du(K,W)}return null}function lt(K,W,nt,Mt){var re=W!==null?W.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return re!==null?null:A(K,W,""+nt,Mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return nt.key===re?G(K,W,nt,Mt):null;case b:return nt.key===re?at(K,W,nt,Mt):null;case T:return nt=Jr(nt),lt(K,W,nt,Mt)}if(Z(nt)||tt(nt))return re!==null?null:vt(K,W,nt,Mt,null);if(typeof nt.then=="function")return lt(K,W,wu(nt),Mt);if(nt.$$typeof===U)return lt(K,W,Tu(K,nt),Mt);Du(K,nt)}return null}function dt(K,W,nt,Mt,re){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return K=K.get(nt)||null,A(W,K,""+Mt,re);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case S:return K=K.get(Mt.key===null?nt:Mt.key)||null,G(W,K,Mt,re);case b:return K=K.get(Mt.key===null?nt:Mt.key)||null,at(W,K,Mt,re);case T:return Mt=Jr(Mt),dt(K,W,nt,Mt,re)}if(Z(Mt)||tt(Mt))return K=K.get(nt)||null,vt(W,K,Mt,re,null);if(typeof Mt.then=="function")return dt(K,W,nt,wu(Mt),re);if(Mt.$$typeof===U)return dt(K,W,nt,Tu(W,Mt),re);Du(W,Mt)}return null}function $t(K,W,nt,Mt){for(var re=null,je=null,ae=W,Ae=W=0,Pe=null;ae!==null&&Ae<nt.length;Ae++){ae.index>Ae?(Pe=ae,ae=null):Pe=ae.sibling;var Ze=lt(K,ae,nt[Ae],Mt);if(Ze===null){ae===null&&(ae=Pe);break}e&&ae&&Ze.alternate===null&&n(K,ae),W=d(Ze,W,Ae),je===null?re=Ze:je.sibling=Ze,je=Ze,ae=Pe}if(Ae===nt.length)return a(K,ae),Be&&Ss(K,Ae),re;if(ae===null){for(;Ae<nt.length;Ae++)ae=bt(K,nt[Ae],Mt),ae!==null&&(W=d(ae,W,Ae),je===null?re=ae:je.sibling=ae,je=ae);return Be&&Ss(K,Ae),re}for(ae=o(ae);Ae<nt.length;Ae++)Pe=dt(ae,K,Ae,nt[Ae],Mt),Pe!==null&&(e&&Pe.alternate!==null&&ae.delete(Pe.key===null?Ae:Pe.key),W=d(Pe,W,Ae),je===null?re=Pe:je.sibling=Pe,je=Pe);return e&&ae.forEach(function(Mr){return n(K,Mr)}),Be&&Ss(K,Ae),re}function he(K,W,nt,Mt){if(nt==null)throw Error(s(151));for(var re=null,je=null,ae=W,Ae=W=0,Pe=null,Ze=nt.next();ae!==null&&!Ze.done;Ae++,Ze=nt.next()){ae.index>Ae?(Pe=ae,ae=null):Pe=ae.sibling;var Mr=lt(K,ae,Ze.value,Mt);if(Mr===null){ae===null&&(ae=Pe);break}e&&ae&&Mr.alternate===null&&n(K,ae),W=d(Mr,W,Ae),je===null?re=Mr:je.sibling=Mr,je=Mr,ae=Pe}if(Ze.done)return a(K,ae),Be&&Ss(K,Ae),re;if(ae===null){for(;!Ze.done;Ae++,Ze=nt.next())Ze=bt(K,Ze.value,Mt),Ze!==null&&(W=d(Ze,W,Ae),je===null?re=Ze:je.sibling=Ze,je=Ze);return Be&&Ss(K,Ae),re}for(ae=o(ae);!Ze.done;Ae++,Ze=nt.next())Ze=dt(ae,K,Ae,Ze.value,Mt),Ze!==null&&(e&&Ze.alternate!==null&&ae.delete(Ze.key===null?Ae:Ze.key),W=d(Ze,W,Ae),je===null?re=Ze:je.sibling=Ze,je=Ze);return e&&ae.forEach(function(OM){return n(K,OM)}),Be&&Ss(K,Ae),re}function cn(K,W,nt,Mt){if(typeof nt=="object"&&nt!==null&&nt.type===D&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:t:{for(var re=nt.key;W!==null;){if(W.key===re){if(re=nt.type,re===D){if(W.tag===7){a(K,W.sibling),Mt=u(W,nt.props.children),Mt.return=K,K=Mt;break t}}else if(W.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===T&&Jr(re)===W.type){a(K,W.sibling),Mt=u(W,nt.props),Jl(Mt,nt),Mt.return=K,K=Mt;break t}a(K,W);break}else n(K,W);W=W.sibling}nt.type===D?(Mt=qr(nt.props.children,K.mode,Mt,nt.key),Mt.return=K,K=Mt):(Mt=Mu(nt.type,nt.key,nt.props,null,K.mode,Mt),Jl(Mt,nt),Mt.return=K,K=Mt)}return x(K);case b:t:{for(re=nt.key;W!==null;){if(W.key===re)if(W.tag===4&&W.stateNode.containerInfo===nt.containerInfo&&W.stateNode.implementation===nt.implementation){a(K,W.sibling),Mt=u(W,nt.children||[]),Mt.return=K,K=Mt;break t}else{a(K,W);break}else n(K,W);W=W.sibling}Mt=Sh(nt,K.mode,Mt),Mt.return=K,K=Mt}return x(K);case T:return nt=Jr(nt),cn(K,W,nt,Mt)}if(Z(nt))return $t(K,W,nt,Mt);if(tt(nt)){if(re=tt(nt),typeof re!="function")throw Error(s(150));return nt=re.call(nt),he(K,W,nt,Mt)}if(typeof nt.then=="function")return cn(K,W,wu(nt),Mt);if(nt.$$typeof===U)return cn(K,W,Tu(K,nt),Mt);Du(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,W!==null&&W.tag===6?(a(K,W.sibling),Mt=u(W,nt),Mt.return=K,K=Mt):(a(K,W),Mt=xh(nt,K.mode,Mt),Mt.return=K,K=Mt),x(K)):a(K,W)}return function(K,W,nt,Mt){try{Ql=0;var re=cn(K,W,nt,Mt);return Xo=null,re}catch(ae){if(ae===ko||ae===Ru)throw ae;var je=Yi(29,ae,null,K.mode);return je.lanes=Mt,je.return=K,je}}}var to=ig(!0),ag=ig(!1),sr=!1;function Lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function or(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Qe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yu(e),G0(e,null,a),n}return Su(e,o,n,a),yu(e)}function $l(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ma(e,a)}}function Oh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ih=!1;function tc(){if(Ih){var e=Vo;if(e!==null)throw e}}function ec(e,n,a,o){Ih=!1;var u=e.updateQueue;sr=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,at=G.next;G.next=null,x===null?d=at:x.next=at,x=G;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,A=vt.lastBaseUpdate,A!==x&&(A===null?vt.firstBaseUpdate=at:A.next=at,vt.lastBaseUpdate=G))}if(d!==null){var bt=u.baseState;x=0,vt=at=G=null,A=d;do{var lt=A.lane&-536870913,dt=lt!==A.lane;if(dt?(Ie&lt)===lt:(o&lt)===lt){lt!==0&&lt===Go&&(Ih=!0),vt!==null&&(vt=vt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var $t=e,he=A;lt=n;var cn=a;switch(he.tag){case 1:if($t=he.payload,typeof $t=="function"){bt=$t.call(cn,bt,lt);break t}bt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=he.payload,lt=typeof $t=="function"?$t.call(cn,bt,lt):$t,lt==null)break t;bt=v({},bt,lt);break t;case 2:sr=!0}}lt=A.callback,lt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[lt]:dt.push(lt))}else dt={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},vt===null?(at=vt=dt,G=bt):vt=vt.next=dt,x|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;dt=A,A=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);vt===null&&(G=bt),u.baseState=G,u.firstBaseUpdate=at,u.lastBaseUpdate=vt,d===null&&(u.shared.lanes=0),dr|=x,e.lanes=x,e.memoizedState=bt}}function sg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function rg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)sg(a[e],n)}var Wo=I(null),Nu=I(0);function og(e,n){e=Ns,_t(Nu,e),_t(Wo,n),Ns=e|n.baseLanes}function Ph(){_t(Nu,Ns),_t(Wo,Wo.current)}function Fh(){Ns=Nu.current,q(Wo),q(Nu)}var qi=I(null),ha=null;function lr(e){var n=e.alternate;_t(Nn,Nn.current&1),_t(qi,e),ha===null&&(n===null||Wo.current!==null||n.memoizedState!==null)&&(ha=e)}function Bh(e){_t(Nn,Nn.current),_t(qi,e),ha===null&&(ha=e)}function lg(e){e.tag===22?(_t(Nn,Nn.current),_t(qi,e),ha===null&&(ha=e)):cr()}function cr(){_t(Nn,Nn.current),_t(qi,qi.current)}function ji(e){q(qi),ha===e&&(ha=null),q(Nn)}var Nn=I(0);function Lu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xp(a)||Wp(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Es=0,Ee=null,on=null,In=null,Uu=!1,Yo=!1,eo=!1,Ou=0,nc=0,qo=null,by=0;function wn(){throw Error(s(321))}function zh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!oe(e[a],n[a]))return!1;return!0}function Hh(e,n,a,o,u,d){return Es=d,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Wg:ep,eo=!1,d=a(o,u),eo=!1,Yo&&(d=ug(n,a,o,u)),cg(e),d}function cg(e){O.H=sc;var n=on!==null&&on.next!==null;if(Es=0,In=on=Ee=null,Uu=!1,nc=0,qo=null,n)throw Error(s(300));e===null||Pn||(e=e.dependencies,e!==null&&bu(e)&&(Pn=!0))}function ug(e,n,a,o){Ee=e;var u=0;do{if(Yo&&(qo=null),nc=0,Yo=!1,25<=u)throw Error(s(301));if(u+=1,In=on=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=Yg,d=n(a,o)}while(Yo);return d}function Ty(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?ic(n):n,e=e.useState()[0],(on!==null?on.memoizedState:null)!==e&&(Ee.flags|=1024),n}function Gh(){var e=Ou!==0;return Ou=0,e}function Vh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function kh(e){if(Uu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Uu=!1}Es=0,In=on=Ee=null,Yo=!1,nc=Ou=0,qo=null}function Ai(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?Ee.memoizedState=In=e:In=In.next=e,In}function Ln(){if(on===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=on.next;var n=In===null?Ee.memoizedState:In.next;if(n!==null)In=n,on=e;else{if(e===null)throw Ee.alternate===null?Error(s(467)):Error(s(310));on=e,e={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},In===null?Ee.memoizedState=In=e:In=In.next=e}return In}function Iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ic(e){var n=nc;return nc+=1,qo===null&&(qo=[]),e=tg(qo,e,n),n=Ee,(In===null?n.memoizedState:In.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Wg:ep),e}function Pu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ic(e);if(e.$$typeof===U)return oi(e)}throw Error(s(438,String(e)))}function Xh(e){var n=null,a=Ee.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ee.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Iu(),Ee.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=pt;return n.index++,a}function bs(e,n){return typeof n=="function"?n(e):n}function Fu(e){var n=Ln();return Wh(n,on,e)}function Wh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=x=null,G=null,at=n,vt=!1;do{var bt=at.lane&-536870913;if(bt!==at.lane?(Ie&bt)===bt:(Es&bt)===bt){var lt=at.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),bt===Go&&(vt=!0);else if((Es&lt)===lt){at=at.next,lt===Go&&(vt=!0);continue}else bt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=bt,x=d):G=G.next=bt,Ee.lanes|=lt,dr|=lt;bt=at.action,eo&&a(d,bt),d=at.hasEagerState?at.eagerState:a(d,bt)}else lt={lane:bt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=lt,x=d):G=G.next=lt,Ee.lanes|=bt,dr|=bt;at=at.next}while(at!==null&&at!==n);if(G===null?x=d:G.next=A,!oe(d,e.memoizedState)&&(Pn=!0,vt&&(a=Vo,a!==null)))throw a;e.memoizedState=d,e.baseState=x,e.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Yh(e){var n=Ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);oe(d,n.memoizedState)||(Pn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function fg(e,n,a){var o=Ee,u=Ln(),d=Be;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!oe((on||u).memoizedState,a);if(x&&(u.memoizedState=a,Pn=!0),u=u.queue,Zh(pg.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||In!==null&&In.memoizedState.tag&1){if(o.flags|=2048,jo(9,{destroy:void 0},hg.bind(null,o,u,a,n),null),fn===null)throw Error(s(349));d||(Es&127)!==0||dg(o,n,a)}return a}function dg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ee.updateQueue,n===null?(n=Iu(),Ee.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function hg(e,n,a,o){n.value=a,n.getSnapshot=o,mg(n)&&gg(e)}function pg(e,n,a){return a(function(){mg(n)&&gg(e)})}function mg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!oe(e,a)}catch{return!0}}function gg(e){var n=Yr(e,2);n!==null&&Fi(n,e,2)}function qh(e){var n=Ai();if(typeof e=="function"){var a=e;if(e=a(),eo){Vt(!0);try{a()}finally{Vt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:e},n}function _g(e,n,a,o){return e.baseState=a,Wh(e,on,typeof o=="function"?o:bs)}function Ay(e,n,a,o,u){if(Hu(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,vg(n,d)):(d.next=a.next,n.pending=a.next=d)}}function vg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=O.T,x={};O.T=x;try{var A=a(u,o),G=O.S;G!==null&&G(x,A),xg(e,n,A)}catch(at){jh(e,n,at)}finally{d!==null&&x.types!==null&&(d.types=x.types),O.T=d}}else try{d=a(u,o),xg(e,n,d)}catch(at){jh(e,n,at)}}function xg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Sg(e,n,o)},function(o){return jh(e,n,o)}):Sg(e,n,a)}function Sg(e,n,a){n.status="fulfilled",n.value=a,yg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,vg(e,a)))}function jh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,yg(n),n=n.next;while(n!==o)}e.action=null}function yg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Mg(e,n){return n}function Eg(e,n){if(Be){var a=fn.formState;if(a!==null){t:{var o=Ee;if(Be){if(gn){e:{for(var u=gn,d=da;u.nodeType!==8;){if(!d){u=null;break e}if(u=pa(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){gn=pa(u.nextSibling),o=u.data==="F!";break t}}ir(o)}o=!1}o&&(n=a[0])}}return a=Ai(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mg,lastRenderedState:n},a.queue=o,a=Vg.bind(null,Ee,o),o.dispatch=a,o=qh(!1),d=tp.bind(null,Ee,!1,o.queue),o=Ai(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ay.bind(null,Ee,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function bg(e){var n=Ln();return Tg(n,on,e)}function Tg(e,n,a){if(n=Wh(e,n,Mg)[0],e=Fu(bs)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ic(n)}catch(x){throw x===ko?Ru:x}else o=n;n=Ln();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Ee.flags|=2048,jo(9,{destroy:void 0},Ry.bind(null,u,a),null)),[o,d,e]}function Ry(e,n){e.action=n}function Ag(e){var n=Ln(),a=on;if(a!==null)return Tg(n,a,e);Ln(),n=n.memoizedState,a=Ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function jo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=Iu(),Ee.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Rg(){return Ln().memoizedState}function Bu(e,n,a,o){var u=Ai();Ee.flags|=e,u.memoizedState=jo(1|n,{destroy:void 0},a,o===void 0?null:o)}function zu(e,n,a,o){var u=Ln();o=o===void 0?null:o;var d=u.memoizedState.inst;on!==null&&o!==null&&zh(o,on.memoizedState.deps)?u.memoizedState=jo(n,d,a,o):(Ee.flags|=e,u.memoizedState=jo(1|n,d,a,o))}function Cg(e,n){Bu(8390656,8,e,n)}function Zh(e,n){zu(2048,8,e,n)}function Cy(e){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=Iu(),Ee.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function wg(e){var n=Ln().memoizedState;return Cy({ref:n,nextImpl:e}),function(){if((Qe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Dg(e,n){return zu(4,2,e,n)}function Ng(e,n){return zu(4,4,e,n)}function Lg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ug(e,n,a){a=a!=null?a.concat([e]):null,zu(4,4,Lg.bind(null,n,e),a)}function Kh(){}function Og(e,n){var a=Ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&zh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Ig(e,n){var a=Ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&zh(n,o[1]))return o[0];if(o=e(),eo){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[o,n],o}function Qh(e,n,a){return a===void 0||(Es&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=P_(),Ee.lanes|=e,dr|=e,a)}function Pg(e,n,a,o){return oe(a,n)?a:Wo.current!==null?(e=Qh(e,a,o),oe(e,n)||(Pn=!0),e):(Es&42)===0||(Es&1073741824)!==0&&(Ie&261930)===0?(Pn=!0,e.memoizedState=a):(e=P_(),Ee.lanes|=e,dr|=e,n)}function Fg(e,n,a,o,u){var d=P.p;P.p=d!==0&&8>d?d:8;var x=O.T,A={};O.T=A,tp(e,!1,n,a);try{var G=u(),at=O.S;if(at!==null&&at(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var vt=Ey(G,o);ac(e,n,vt,Qi(e))}else ac(e,n,o,Qi(e))}catch(bt){ac(e,n,{then:function(){},status:"rejected",reason:bt},Qi())}finally{P.p=d,x!==null&&A.types!==null&&(x.types=A.types),O.T=x}}function wy(){}function Jh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Bg(e).queue;Fg(e,u,n,$,a===null?wy:function(){return zg(e),a(o)})}function Bg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function zg(e){var n=Bg(e);n.next===null&&(n=e.alternate.memoizedState),ac(e,n.next.queue,{},Qi())}function $h(){return oi(yc)}function Hg(){return Ln().memoizedState}function Gg(){return Ln().memoizedState}function Dy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qi();e=rr(a);var o=or(n,e,a);o!==null&&(Fi(o,n,a),$l(o,n,a)),n={cache:Ch()},e.payload=n;return}n=n.return}}function Ny(e,n,a){var o=Qi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hu(e)?kg(n,a):(a=_h(e,n,a,o),a!==null&&(Fi(a,e,o),Xg(a,n,o)))}function Vg(e,n,a){var o=Qi();ac(e,n,a,o)}function ac(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))kg(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,A=d(x,a);if(u.hasEagerState=!0,u.eagerState=A,oe(A,x))return Su(e,n,u,0),fn===null&&xu(),!1}catch{}if(a=_h(e,n,u,o),a!==null)return Fi(a,e,o),Xg(a,n,o),!0}return!1}function tp(e,n,a,o){if(o={lane:2,revertLane:Lp(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hu(e)){if(n)throw Error(s(479))}else n=_h(e,a,o,2),n!==null&&Fi(n,e,2)}function Hu(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function kg(e,n){Yo=Uu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Xg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ma(e,a)}}var sc={readContext:oi,use:Pu,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn};sc.useEffectEvent=wn;var Wg={readContext:oi,use:Pu,useCallback:function(e,n){return Ai().memoizedState=[e,n===void 0?null:n],e},useContext:oi,useEffect:Cg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bu(4194308,4,Lg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bu(4194308,4,e,n)},useInsertionEffect:function(e,n){Bu(4,2,e,n)},useMemo:function(e,n){var a=Ai();n=n===void 0?null:n;var o=e();if(eo){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ai();if(a!==void 0){var u=a(n);if(eo){Vt(!0);try{a(n)}finally{Vt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ny.bind(null,Ee,e),[o.memoizedState,e]},useRef:function(e){var n=Ai();return e={current:e},n.memoizedState=e},useState:function(e){e=qh(e);var n=e.queue,a=Vg.bind(null,Ee,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Kh,useDeferredValue:function(e,n){var a=Ai();return Qh(a,e,n)},useTransition:function(){var e=qh(!1);return e=Fg.bind(null,Ee,e.queue,!0,!1),Ai().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ee,u=Ai();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),fn===null)throw Error(s(349));(Ie&127)!==0||dg(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Cg(pg.bind(null,o,d,e),[e]),o.flags|=2048,jo(9,{destroy:void 0},hg.bind(null,o,d,a,n),null),a},useId:function(){var e=Ai(),n=fn.identifierPrefix;if(Be){var a=ts,o=$a;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ou++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=by++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$h,useFormState:Eg,useActionState:Eg,useOptimistic:function(e){var n=Ai();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tp.bind(null,Ee,!0,a),a.dispatch=n,[e,n]},useMemoCache:Xh,useCacheRefresh:function(){return Ai().memoizedState=Dy.bind(null,Ee)},useEffectEvent:function(e){var n=Ai(),a={impl:e};return n.memoizedState=a,function(){if((Qe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ep={readContext:oi,use:Pu,useCallback:Og,useContext:oi,useEffect:Zh,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:Ig,useReducer:Fu,useRef:Rg,useState:function(){return Fu(bs)},useDebugValue:Kh,useDeferredValue:function(e,n){var a=Ln();return Pg(a,on.memoizedState,e,n)},useTransition:function(){var e=Fu(bs)[0],n=Ln().memoizedState;return[typeof e=="boolean"?e:ic(e),n]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:$h,useFormState:bg,useActionState:bg,useOptimistic:function(e,n){var a=Ln();return _g(a,on,e,n)},useMemoCache:Xh,useCacheRefresh:Gg};ep.useEffectEvent=wg;var Yg={readContext:oi,use:Pu,useCallback:Og,useContext:oi,useEffect:Zh,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:Ig,useReducer:Yh,useRef:Rg,useState:function(){return Yh(bs)},useDebugValue:Kh,useDeferredValue:function(e,n){var a=Ln();return on===null?Qh(a,e,n):Pg(a,on.memoizedState,e,n)},useTransition:function(){var e=Yh(bs)[0],n=Ln().memoizedState;return[typeof e=="boolean"?e:ic(e),n]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:$h,useFormState:Ag,useActionState:Ag,useOptimistic:function(e,n){var a=Ln();return on!==null?_g(a,on,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xh,useCacheRefresh:Gg};Yg.useEffectEvent=wg;function np(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ip={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qi(),u=rr(o);u.payload=n,a!=null&&(u.callback=a),n=or(e,u,o),n!==null&&(Fi(n,e,o),$l(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qi(),u=rr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=or(e,u,o),n!==null&&(Fi(n,e,o),$l(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qi(),o=rr(a);o.tag=2,n!=null&&(o.callback=n),n=or(e,o,a),n!==null&&(Fi(n,e,a),$l(n,e,a))}};function qg(e,n,a,o,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!Xe(a,o)||!Xe(u,d):!0}function jg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ip.enqueueReplaceState(n,n.state,null)}function no(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Zg(e){vu(e)}function Kg(e){console.error(e)}function Qg(e){vu(e)}function Gu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Jg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ap(e,n,a){return a=rr(a),a.tag=3,a.payload={element:null},a.callback=function(){Gu(e,n)},a}function $g(e){return e=rr(e),e.tag=3,e}function t_(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Jg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Jg(n,a,o),typeof u!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Ly(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ho(n,a,u,!0),a=qi.current,a!==null){switch(a.tag){case 31:case 13:return ha===null?$u():a.alternate===null&&Dn===0&&(Dn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wp(e,o,u)),!1;case 22:return a.flags|=65536,o===Cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wp(e,o,u)),!1}throw Error(s(435,a.tag))}return wp(e,o,u),$u(),!1}if(Be)return n=qi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Eh&&(e=Error(s(422),{cause:o}),jl(ca(e,a)))):(o!==Eh&&(n=Error(s(423),{cause:o}),jl(ca(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ca(o,a),u=ap(e.stateNode,o,u),Oh(e,u),Dn!==4&&(Dn=2)),!1;var d=Error(s(520),{cause:o});if(d=ca(d,a),hc===null?hc=[d]:hc.push(d),Dn!==4&&(Dn=2),n===null)return!0;o=ca(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ap(a.stateNode,o,e),Oh(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(hr===null||!hr.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$g(u),t_(u,e,a,o),Oh(a,u),!1}a=a.return}while(a!==null);return!1}var sp=Error(s(461)),Pn=!1;function li(e,n,a,o){n.child=e===null?ag(n,null,a,o):to(n,e.child,a,o)}function e_(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Kr(n),o=Hh(e,n,a,x,d,u),A=Gh(),e!==null&&!Pn?(Vh(e,n,u),Ts(e,n,u)):(Be&&A&&yh(n),n.flags|=1,li(e,n,o,u),n.child)}function n_(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!vh(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,i_(e,n,d,o,u)):(e=Mu(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!hp(e,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:Xe,a(x,o)&&e.ref===n.ref)return Ts(e,n,u)}return n.flags|=1,e=xs(d,o),e.ref=n.ref,e.return=n,n.child=e}function i_(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(Xe(d,o)&&e.ref===n.ref)if(Pn=!1,n.pendingProps=o=d,hp(e,u))(e.flags&131072)!==0&&(Pn=!0);else return n.lanes=e.lanes,Ts(e,n,u)}return rp(e,n,a,o,u)}function a_(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return s_(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Au(n,d!==null?d.cachePool:null),d!==null?og(n,d):Ph(),lg(n);else return o=n.lanes=536870912,s_(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Au(n,d.cachePool),og(n,d),cr(),n.memoizedState=null):(e!==null&&Au(n,null),Ph(),cr());return li(e,n,u,a),n.child}function rc(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function s_(e,n,a,o,u){var d=Dh();return d=d===null?null:{parent:On._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Au(n,null),Ph(),lg(n),e!==null&&Ho(e,n,o,!0),n.childLanes=u,null}function Vu(e,n){return n=Xu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function r_(e,n,a){return to(n,e.child,null,a),e=Vu(n,n.pendingProps),e.flags|=2,ji(n),n.memoizedState=null,e}function Uy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Be){if(o.mode==="hidden")return e=Vu(n,o),n.lanes=536870912,rc(null,e);if(Bh(n),(e=gn)?(e=vv(e,da),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:er!==null?{id:$a,overflow:ts}:null,retryLane:536870912,hydrationErrors:null},a=k0(e),a.return=n,n.child=a,ri=n,gn=null)):e=null,e===null)throw ir(n);return n.lanes=536870912,null}return Vu(n,o)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(Bh(n),u)if(n.flags&256)n.flags&=-257,n=r_(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Pn||Ho(e,n,a,!1),u=(a&e.childLanes)!==0,Pn||u){if(o=fn,o!==null&&(x=us(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,Yr(e,x),Fi(o,e,x),sp;$u(),n=r_(e,n,a)}else e=d.treeContext,gn=pa(x.nextSibling),ri=n,Be=!0,nr=null,da=!1,e!==null&&Y0(n,e),n=Vu(n,o),n.flags|=4096;return n}return e=xs(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ku(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rp(e,n,a,o,u){return Kr(n),a=Hh(e,n,a,o,void 0,u),o=Gh(),e!==null&&!Pn?(Vh(e,n,u),Ts(e,n,u)):(Be&&o&&yh(n),n.flags|=1,li(e,n,a,u),n.child)}function o_(e,n,a,o,u,d){return Kr(n),n.updateQueue=null,a=ug(n,o,a,u),cg(e),o=Gh(),e!==null&&!Pn?(Vh(e,n,d),Ts(e,n,d)):(Be&&o&&yh(n),n.flags|=1,li(e,n,a,d),n.child)}function l_(e,n,a,o,u){if(Kr(n),n.stateNode===null){var d=Po,x=a.contextType;typeof x=="object"&&x!==null&&(d=oi(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ip,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Lh(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?oi(x):Po,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(np(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&ip.enqueueReplaceState(d,d.state,null),ec(n,o,d,u),tc(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,G=no(a,A);d.props=G;var at=d.context,vt=a.contextType;x=Po,typeof vt=="object"&&vt!==null&&(x=oi(vt));var bt=a.getDerivedStateFromProps;vt=typeof bt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,vt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||at!==x)&&jg(n,d,o,x),sr=!1;var lt=n.memoizedState;d.state=lt,ec(n,o,d,u),tc(),at=n.memoizedState,A||lt!==at||sr?(typeof bt=="function"&&(np(n,a,bt,o),at=n.memoizedState),(G=sr||qg(n,a,G,o,lt,at,x))?(vt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),d.props=o,d.state=at,d.context=x,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Uh(e,n),x=n.memoizedProps,vt=no(a,x),d.props=vt,bt=n.pendingProps,lt=d.context,at=a.contextType,G=Po,typeof at=="object"&&at!==null&&(G=oi(at)),A=a.getDerivedStateFromProps,(at=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==bt||lt!==G)&&jg(n,d,o,G),sr=!1,lt=n.memoizedState,d.state=lt,ec(n,o,d,u),tc();var dt=n.memoizedState;x!==bt||lt!==dt||sr||e!==null&&e.dependencies!==null&&bu(e.dependencies)?(typeof A=="function"&&(np(n,a,A,o),dt=n.memoizedState),(vt=sr||qg(n,a,vt,o,lt,dt,G)||e!==null&&e.dependencies!==null&&bu(e.dependencies))?(at||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,dt,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,dt,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=dt),d.props=o,d.state=dt,d.context=G,o=vt):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,ku(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=to(n,e.child,null,u),n.child=to(n,null,a,u)):li(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Ts(e,n,u),e}function c_(e,n,a,o){return jr(),n.flags|=256,li(e,n,a,o),n.child}var op={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lp(e){return{baseLanes:e,cachePool:J0()}}function cp(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ki),e}function u_(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?lr(n):cr(),(e=gn)?(e=vv(e,da),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:er!==null?{id:$a,overflow:ts}:null,retryLane:536870912,hydrationErrors:null},a=k0(e),a.return=n,n.child=a,ri=n,gn=null)):e=null,e===null)throw ir(n);return Wp(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(cr(),u=n.mode,A=Xu({mode:"hidden",children:A},u),o=qr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=lp(a),o.childLanes=cp(e,x,a),n.memoizedState=op,rc(null,o)):(lr(n),up(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(d)n.flags&256?(lr(n),n.flags&=-257,n=fp(e,n,a)):n.memoizedState!==null?(cr(),n.child=e.child,n.flags|=128,n=null):(cr(),A=o.fallback,u=n.mode,o=Xu({mode:"visible",children:o.children},u),A=qr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,to(n,e.child,null,a),o=n.child,o.memoizedState=lp(a),o.childLanes=cp(e,x,a),n.memoizedState=op,n=rc(null,o));else if(lr(n),Wp(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var at=x.dgst;x=at,o=Error(s(419)),o.stack="",o.digest=x,jl({value:o,source:null,stack:null}),n=fp(e,n,a)}else if(Pn||Ho(e,n,a,!1),x=(a&e.childLanes)!==0,Pn||x){if(x=fn,x!==null&&(o=us(x,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Yr(e,o),Fi(x,e,o),sp;Xp(A)||$u(),n=fp(e,n,a)}else Xp(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,gn=pa(A.nextSibling),ri=n,Be=!0,nr=null,da=!1,e!==null&&Y0(n,e),n=up(n,o.children),n.flags|=4096);return n}return u?(cr(),A=o.fallback,u=n.mode,G=e.child,at=G.sibling,o=xs(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,at!==null?A=xs(at,A):(A=qr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,rc(null,o),o=n.child,A=e.child.memoizedState,A===null?A=lp(a):(u=A.cachePool,u!==null?(G=On._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=J0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=cp(e,x,a),n.memoizedState=op,rc(e.child,o)):(lr(n),a=e.child,e=a.sibling,a=xs(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function up(e,n){return n=Xu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Xu(e,n){return e=Yi(22,e,null,n),e.lanes=0,e}function fp(e,n,a){return to(n,e.child,null,a),e=up(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function f_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ah(e.return,n,a)}function dp(e,n,a,o,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function d_(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=Nn.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,_t(Nn,x),li(e,n,o,a),o=Be?ql:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&f_(e,a,n);else if(e.tag===19)f_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Lu(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),dp(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Lu(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}dp(n,!0,a,null,d,o);break;case"together":dp(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ts(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),dr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ho(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=xs(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=xs(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hp(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bu(e)))}function Oy(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),ar(n,On,e.memoizedState.cache),jr();break;case 27:case 5:ie(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:ar(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(lr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?u_(e,n,a):(lr(n),e=Ts(e,n,a),e!==null?e.sibling:null);lr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ho(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return d_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(Nn,Nn.current),o)break;return null;case 22:return n.lanes=0,a_(e,n,a,n.pendingProps);case 24:ar(n,On,e.memoizedState.cache)}return Ts(e,n,a)}function h_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Pn=!0;else{if(!hp(e,a)&&(n.flags&128)===0)return Pn=!1,Oy(e,n,a);Pn=(e.flags&131072)!==0}else Pn=!1,Be&&(n.flags&1048576)!==0&&W0(n,ql,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Jr(n.elementType),n.type=e,typeof e=="function")vh(e)?(o=no(e,o),n.tag=1,n=l_(null,n,e,o,a)):(n.tag=0,n=rp(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=e_(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=n_(null,n,e,o,a);break t}}throw n=rt(e)||e,Error(s(306,n,""))}}return n;case 0:return rp(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=no(o,n.pendingProps),l_(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Uh(e,n),ec(n,o,null,a);var x=n.memoizedState;if(o=x.cache,ar(n,On,o),o!==d.cache&&Rh(n,[On],a,!0),tc(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=c_(e,n,o,a);break t}else if(o!==u){u=ca(Error(s(424)),n),jl(u),n=c_(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,gn=pa(e.firstChild),ri=n,Be=!0,nr=null,da=!0,a=ag(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(jr(),o===u){n=Ts(e,n,a);break t}li(e,n,o,a)}n=n.child}return n;case 26:return ku(e,n),e===null?(a=bv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=of(et.current).createElement(a),o[xn]=n,o[yn]=e,ci(o,a,e),Y(o),n.stateNode=o):n.memoizedState=bv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Be&&(o=n.stateNode=yv(n.type,n.pendingProps,et.current),ri=n,da=!0,u=gn,_r(n.type)?(Yp=u,gn=pa(o.firstChild)):gn=u),li(e,n,n.pendingProps.children,a),ku(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=gn)&&(o=uM(o,n.type,n.pendingProps,da),o!==null?(n.stateNode=o,ri=n,gn=pa(o.firstChild),da=!1,u=!0):u=!1),u||ir(n)),ie(n),u=n.type,d=n.pendingProps,x=e!==null?e.memoizedProps:null,o=d.children,Gp(u,d)?o=null:x!==null&&Gp(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Hh(e,n,Ty,null,null,a),yc._currentValue=u),ku(e,n),li(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=gn)&&(a=fM(a,n.pendingProps,da),a!==null?(n.stateNode=a,ri=n,gn=null,e=!0):e=!1),e||ir(n)),null;case 13:return u_(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=to(n,null,o,a):li(e,n,o,a),n.child;case 11:return e_(e,n,n.type,n.pendingProps,a);case 7:return li(e,n,n.pendingProps,a),n.child;case 8:return li(e,n,n.pendingProps.children,a),n.child;case 12:return li(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ar(n,n.type,o.value),li(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Kr(n),u=oi(u),o=o(u),n.flags|=1,li(e,n,o,a),n.child;case 14:return n_(e,n,n.type,n.pendingProps,a);case 15:return i_(e,n,n.type,n.pendingProps,a);case 19:return d_(e,n,a);case 31:return Uy(e,n,a);case 22:return a_(e,n,a,n.pendingProps);case 24:return Kr(n),o=oi(On),e===null?(u=Dh(),u===null&&(u=fn,d=Ch(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Lh(n),ar(n,On,u)):((e.lanes&a)!==0&&(Uh(e,n),ec(n,null,null,a),tc()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ar(n,On,o)):(o=d.cache,ar(n,On,o),o!==u.cache&&Rh(n,[On],a,!0))),li(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function As(e){e.flags|=4}function pp(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(H_())e.flags|=8192;else throw $r=Cu,Nh}else e.flags&=-16777217}function p_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wv(n))if(H_())e.flags|=8192;else throw $r=Cu,Nh}function Wu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?De():536870912,e.lanes|=n,Jo|=n)}function oc(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function _n(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Iy(e,n,a){var o=n.pendingProps;switch(Mh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(n),null;case 1:return _n(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ms(On),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zo(n)?As(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bh())),_n(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(As(n),d!==null?(_n(n),p_(n,d)):(_n(n),pp(n,u,null,o,a))):d?d!==e.memoizedState?(As(n),_n(n),p_(n,d)):(_n(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&As(n),_n(n),pp(n,u,e,o,a)),null;case 27:if(fe(n),a=et.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&As(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}e=Ut.current,zo(n)?q0(n):(e=yv(u,o,a),n.stateNode=e,As(n))}return _n(n),null;case 5:if(fe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&As(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}if(d=Ut.current,zo(n))q0(n);else{var x=of(et.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[xn]=n,d[yn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;t:switch(ci(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&As(n)}}return _n(n),pp(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&As(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,zo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ri,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[xn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||uv(e.nodeValue,a)),e||ir(n,!0)}else e=of(e).createTextNode(o),e[xn]=n,n.stateNode=e}return _n(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=zo(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[xn]=n}else jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),e=!1}else a=bh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ji(n),n):(ji(n),null);if((n.flags&128)!==0)throw Error(s(558))}return _n(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=zo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[xn]=n}else jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),u=!1}else u=bh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}return ji(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Wu(n,n.updateQueue),_n(n),null);case 4:return jt(),e===null&&Pp(n.stateNode.containerInfo),_n(n),null;case 10:return Ms(n.type),_n(n),null;case 19:if(q(Nn),o=n.memoizedState,o===null)return _n(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)oc(o,!1);else{if(Dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Lu(e),d!==null){for(n.flags|=128,oc(o,!1),e=d.updateQueue,n.updateQueue=e,Wu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)V0(a,e),a=a.sibling;return _t(Nn,Nn.current&1|2),Be&&Ss(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Ku&&(n.flags|=128,u=!0,oc(o,!1),n.lanes=4194304)}else{if(!u)if(e=Lu(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Wu(n,e),oc(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Be)return _n(n),null}else 2*E()-o.renderingStartTime>Ku&&a!==536870912&&(n.flags|=128,u=!0,oc(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=Nn.current,_t(Nn,u?a&1|2:a&1),Be&&Ss(n,o.treeForkCount),e):(_n(n),null);case 22:case 23:return ji(n),Fh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(_n(n),n.subtreeFlags&6&&(n.flags|=8192)):_n(n),a=n.updateQueue,a!==null&&Wu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(Qr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ms(On),_n(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Py(e,n){switch(Mh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ms(On),jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return fe(n),null;case 31:if(n.memoizedState!==null){if(ji(n),n.alternate===null)throw Error(s(340));jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(Nn),null;case 4:return jt(),null;case 10:return Ms(n.type),null;case 22:case 23:return ji(n),Fh(),e!==null&&q(Qr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ms(On),null;case 25:return null;default:return null}}function m_(e,n){switch(Mh(n),n.tag){case 3:Ms(On),jt();break;case 26:case 27:case 5:fe(n);break;case 4:jt();break;case 31:n.memoizedState!==null&&ji(n);break;case 13:ji(n);break;case 19:q(Nn);break;case 10:Ms(n.type);break;case 22:case 23:ji(n),Fh(),e!==null&&q(Qr);break;case 24:Ms(On)}}function lc(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){sn(n,n.return,A)}}function ur(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var G=a,at=A;try{at()}catch(vt){sn(u,G,vt)}}}o=o.next}while(o!==d)}}catch(vt){sn(n,n.return,vt)}}function g_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{rg(n,a)}catch(o){sn(e,e.return,o)}}}function __(e,n,a){a.props=no(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){sn(e,n,o)}}function cc(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){sn(e,n,u)}}function es(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){sn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){sn(e,n,u)}else a.current=null}function v_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){sn(e,e.return,u)}}function mp(e,n,a){try{var o=e.stateNode;aM(o,e.type,a,n),o[yn]=n}catch(u){sn(e,e.return,u)}}function x_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_r(e.type)||e.tag===4}function gp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||x_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_r(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _p(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ni));else if(o!==4&&(o===27&&_r(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(_p(e,n,a),e=e.sibling;e!==null;)_p(e,n,a),e=e.sibling}function Yu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&_r(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yu(e,n,a),e=e.sibling;e!==null;)Yu(e,n,a),e=e.sibling}function S_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ci(n,o,a),n[xn]=e,n[yn]=a}catch(d){sn(e,e.return,d)}}var Rs=!1,Fn=!1,vp=!1,y_=typeof WeakSet=="function"?WeakSet:Set,qn=null;function Fy(e,n){if(e=e.containerInfo,zp=pf,e=We(e),Da(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var x=0,A=-1,G=-1,at=0,vt=0,bt=e,lt=null;e:for(;;){for(var dt;bt!==a||u!==0&&bt.nodeType!==3||(A=x+u),bt!==d||o!==0&&bt.nodeType!==3||(G=x+o),bt.nodeType===3&&(x+=bt.nodeValue.length),(dt=bt.firstChild)!==null;)lt=bt,bt=dt;for(;;){if(bt===e)break e;if(lt===a&&++at===u&&(A=x),lt===d&&++vt===o&&(G=x),(dt=bt.nextSibling)!==null)break;bt=lt,lt=bt.parentNode}bt=dt}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hp={focusedElem:e,selectionRange:a},pf=!1,qn=n;qn!==null;)if(n=qn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,qn=e;else for(;qn!==null;){switch(n=qn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var $t=no(a.type,u);e=o.getSnapshotBeforeUpdate($t,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(he){sn(a,a.return,he)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)kp(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,qn=e;break}qn=n.return}}function M_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ws(e,a),o&4&&lc(5,a);break;case 1:if(ws(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){sn(a,a.return,x)}else{var u=no(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){sn(a,a.return,x)}}o&64&&g_(a),o&512&&cc(a,a.return);break;case 3:if(ws(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rg(e,n)}catch(x){sn(a,a.return,x)}}break;case 27:n===null&&o&4&&S_(a);case 26:case 5:ws(e,a),n===null&&o&4&&v_(a),o&512&&cc(a,a.return);break;case 12:ws(e,a);break;case 31:ws(e,a),o&4&&T_(e,a);break;case 13:ws(e,a),o&4&&A_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Yy.bind(null,a),dM(e,a))));break;case 22:if(o=a.memoizedState!==null||Rs,!o){n=n!==null&&n.memoizedState!==null||Fn,u=Rs;var d=Fn;Rs=o,(Fn=n)&&!d?Ds(e,a,(a.subtreeFlags&8772)!==0):ws(e,a),Rs=u,Fn=d}break;case 30:break;default:ws(e,a)}}function E_(e){var n=e.alternate;n!==null&&(e.alternate=null,E_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Sn=null,Ui=!1;function Cs(e,n,a){for(a=a.child;a!==null;)b_(e,n,a),a=a.sibling}function b_(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:Fn||es(a,n),Cs(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fn||es(a,n);var o=Sn,u=Ui;_r(a.type)&&(Sn=a.stateNode,Ui=!1),Cs(e,n,a),vc(a.stateNode),Sn=o,Ui=u;break;case 5:Fn||es(a,n);case 6:if(o=Sn,u=Ui,Sn=null,Cs(e,n,a),Sn=o,Ui=u,Sn!==null)if(Ui)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(a.stateNode)}catch(d){sn(a,n,d)}else try{Sn.removeChild(a.stateNode)}catch(d){sn(a,n,d)}break;case 18:Sn!==null&&(Ui?(e=Sn,gv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rl(e)):gv(Sn,a.stateNode));break;case 4:o=Sn,u=Ui,Sn=a.stateNode.containerInfo,Ui=!0,Cs(e,n,a),Sn=o,Ui=u;break;case 0:case 11:case 14:case 15:ur(2,a,n),Fn||ur(4,a,n),Cs(e,n,a);break;case 1:Fn||(es(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&__(a,n,o)),Cs(e,n,a);break;case 21:Cs(e,n,a);break;case 22:Fn=(o=Fn)||a.memoizedState!==null,Cs(e,n,a),Fn=o;break;default:Cs(e,n,a)}}function T_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rl(e)}catch(a){sn(n,n.return,a)}}}function A_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rl(e)}catch(a){sn(n,n.return,a)}}function By(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new y_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new y_),n;default:throw Error(s(435,e.tag))}}function qu(e,n){var a=By(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=qy.bind(null,e,o);o.then(u,u)}})}function Oi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(_r(A.type)){Sn=A.stateNode,Ui=!1;break t}break;case 5:Sn=A.stateNode,Ui=!1;break t;case 3:case 4:Sn=A.stateNode.containerInfo,Ui=!0;break t}A=A.return}if(Sn===null)throw Error(s(160));b_(d,x,u),Sn=null,Ui=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)R_(n,e),n=n.sibling}var La=null;function R_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Oi(n,e),Ii(e),o&4&&(ur(3,e,e.return),lc(3,e),ur(5,e,e.return));break;case 1:Oi(n,e),Ii(e),o&512&&(Fn||a===null||es(a,a.return)),o&64&&Rs&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=La;if(Oi(n,e),Ii(e),o&512&&(Fn||a===null||es(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ya]||d[xn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),ci(d,o,a),d[xn]=e,Y(d),o=d;break t;case"link":var x=Rv("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}d=u.createElement(o),ci(d,o,a),u.head.appendChild(d);break;case"meta":if(x=Rv("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}d=u.createElement(o),ci(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[xn]=e,Y(d),o=d}e.stateNode=o}else Cv(u,e.type,e.stateNode);else e.stateNode=Av(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Cv(u,e.type,e.stateNode):Av(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&mp(e,e.memoizedProps,a.memoizedProps)}break;case 27:Oi(n,e),Ii(e),o&512&&(Fn||a===null||es(a,a.return)),a!==null&&o&4&&mp(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Oi(n,e),Ii(e),o&512&&(Fn||a===null||es(a,a.return)),e.flags&32){u=e.stateNode;try{ti(u,"")}catch($t){sn(e,e.return,$t)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,mp(e,u,a!==null?a.memoizedProps:u)),o&1024&&(vp=!0);break;case 6:if(Oi(n,e),Ii(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($t){sn(e,e.return,$t)}}break;case 3:if(uf=null,u=La,La=lf(n.containerInfo),Oi(n,e),La=u,Ii(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{rl(n.containerInfo)}catch($t){sn(e,e.return,$t)}vp&&(vp=!1,C_(e));break;case 4:o=La,La=lf(e.stateNode.containerInfo),Oi(n,e),Ii(e),La=o;break;case 12:Oi(n,e),Ii(e);break;case 31:Oi(n,e),Ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qu(e,o)));break;case 13:Oi(n,e),Ii(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zu=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qu(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,at=Rs,vt=Fn;if(Rs=at||u,Fn=vt||G,Oi(n,e),Fn=vt,Rs=at,Ii(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Rs||Fn||io(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=G.stateNode;var bt=G.memoizedProps.style,lt=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch($t){sn(G,G.return,$t)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch($t){sn(G,G.return,$t)}}}else if(n.tag===18){if(a===null){G=n;try{var dt=G.stateNode;u?_v(dt,!0):_v(G.stateNode,!1)}catch($t){sn(G,G.return,$t)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,qu(e,a))));break;case 19:Oi(n,e),Ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qu(e,o)));break;case 30:break;case 21:break;default:Oi(n,e),Ii(e)}}function Ii(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(x_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=gp(e);Yu(e,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(ti(x,""),a.flags&=-33);var A=gp(e);Yu(e,A,x);break;case 3:case 4:var G=a.stateNode.containerInfo,at=gp(e);_p(e,at,G);break;default:throw Error(s(161))}}catch(vt){sn(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function C_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;C_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ws(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M_(e,n.alternate,n),n=n.sibling}function io(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ur(4,n,n.return),io(n);break;case 1:es(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&__(n,n.return,a),io(n);break;case 27:vc(n.stateNode);case 26:case 5:es(n,n.return),io(n);break;case 22:n.memoizedState===null&&io(n);break;case 30:io(n);break;default:io(n)}e=e.sibling}}function Ds(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ds(u,d,a),lc(4,d);break;case 1:if(Ds(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){sn(o,o.return,at)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)sg(G[u],A)}catch(at){sn(o,o.return,at)}}a&&x&64&&g_(d),cc(d,d.return);break;case 27:S_(d);case 26:case 5:Ds(u,d,a),a&&o===null&&x&4&&v_(d),cc(d,d.return);break;case 12:Ds(u,d,a);break;case 31:Ds(u,d,a),a&&x&4&&T_(u,d);break;case 13:Ds(u,d,a),a&&x&4&&A_(u,d);break;case 22:d.memoizedState===null&&Ds(u,d,a),cc(d,d.return);break;case 30:break;default:Ds(u,d,a)}n=n.sibling}}function xp(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zl(a))}function Sp(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zl(e))}function Ua(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w_(e,n,a,o),n=n.sibling}function w_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ua(e,n,a,o),u&2048&&lc(9,n);break;case 1:Ua(e,n,a,o);break;case 3:Ua(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zl(e)));break;case 12:if(u&2048){Ua(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){sn(n,n.return,G)}}else Ua(e,n,a,o);break;case 31:Ua(e,n,a,o);break;case 13:Ua(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Ua(e,n,a,o):uc(e,n):d._visibility&2?Ua(e,n,a,o):(d._visibility|=2,Zo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xp(x,n);break;case 24:Ua(e,n,a,o),u&2048&&Sp(n.alternate,n);break;default:Ua(e,n,a,o)}}function Zo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,x=n,A=a,G=o,at=x.flags;switch(x.tag){case 0:case 11:case 15:Zo(d,x,A,G,u),lc(8,x);break;case 23:break;case 22:var vt=x.stateNode;x.memoizedState!==null?vt._visibility&2?Zo(d,x,A,G,u):uc(d,x):(vt._visibility|=2,Zo(d,x,A,G,u)),u&&at&2048&&xp(x.alternate,x);break;case 24:Zo(d,x,A,G,u),u&&at&2048&&Sp(x.alternate,x);break;default:Zo(d,x,A,G,u)}n=n.sibling}}function uc(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:uc(a,o),u&2048&&xp(o.alternate,o);break;case 24:uc(a,o),u&2048&&Sp(o.alternate,o);break;default:uc(a,o)}n=n.sibling}}var fc=8192;function Ko(e,n,a){if(e.subtreeFlags&fc)for(e=e.child;e!==null;)D_(e,n,a),e=e.sibling}function D_(e,n,a){switch(e.tag){case 26:Ko(e,n,a),e.flags&fc&&e.memoizedState!==null&&bM(a,La,e.memoizedState,e.memoizedProps);break;case 5:Ko(e,n,a);break;case 3:case 4:var o=La;La=lf(e.stateNode.containerInfo),Ko(e,n,a),La=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=fc,fc=16777216,Ko(e,n,a),fc=o):Ko(e,n,a));break;default:Ko(e,n,a)}}function N_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function dc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];qn=o,U_(o,e)}N_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)L_(e),e=e.sibling}function L_(e){switch(e.tag){case 0:case 11:case 15:dc(e),e.flags&2048&&ur(9,e,e.return);break;case 3:dc(e);break;case 12:dc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ju(e)):dc(e);break;default:dc(e)}}function ju(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];qn=o,U_(o,e)}N_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ur(8,n,n.return),ju(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ju(n));break;default:ju(n)}e=e.sibling}}function U_(e,n){for(;qn!==null;){var a=qn;switch(a.tag){case 0:case 11:case 15:ur(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,qn=o;else t:for(a=e;qn!==null;){o=qn;var u=o.sibling,d=o.return;if(E_(o),o===a){qn=null;break t}if(u!==null){u.return=d,qn=u;break t}qn=d}}}var zy={getCacheForType:function(e){var n=oi(On),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return oi(On).controller.signal}},Hy=typeof WeakMap=="function"?WeakMap:Map,Qe=0,fn=null,Ne=null,Ie=0,an=0,Zi=null,fr=!1,Qo=!1,yp=!1,Ns=0,Dn=0,dr=0,ao=0,Mp=0,Ki=0,Jo=0,hc=null,Pi=null,Ep=!1,Zu=0,O_=0,Ku=1/0,Qu=null,hr=null,Hn=0,pr=null,$o=null,Ls=0,bp=0,Tp=null,I_=null,pc=0,Ap=null;function Qi(){return(Qe&2)!==0&&Ie!==0?Ie&-Ie:O.T!==null?Lp():zi()}function P_(){if(Ki===0)if((Ie&536870912)===0||Be){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),Ki=e}else Ki=536870912;return e=qi.current,e!==null&&(e.flags|=32),Ki}function Fi(e,n,a){(e===fn&&(an===2||an===9)||e.cancelPendingCommit!==null)&&(tl(e,0),mr(e,Ie,Ki,!1)),Jn(e,a),((Qe&2)===0||e!==fn)&&(e===fn&&((Qe&2)===0&&(ao|=a),Dn===4&&mr(e,Ie,Ki,!1)),ns(e))}function F_(e,n,a){if((Qe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||kt(e,n),u=o?ky(e,n):Cp(e,n,!0),d=o;do{if(u===0){Qo&&!o&&mr(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Gy(a)){u=Cp(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=hc;var G=A.current.memoizedState.isDehydrated;if(G&&(tl(A,x).flags|=256),x=Cp(A,x,!1),x!==2){if(yp&&!G){A.errorRecoveryDisabledLanes|=d,ao|=d,u=4;break t}d=Pi,Pi=u,d!==null&&(Pi===null?Pi=d:Pi.push.apply(Pi,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){tl(e,0),mr(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:mr(o,n,Ki,!fr);break t;case 2:Pi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Zu+300-E(),10<u)){if(mr(o,n,Ki,!fr),ft(o,0,!0)!==0)break t;Ls=n,o.timeoutHandle=pv(B_.bind(null,o,a,Pi,Qu,Ep,n,Ki,ao,Jo,fr,d,"Throttled",-0,0),u);break t}B_(o,a,Pi,Qu,Ep,n,Ki,ao,Jo,fr,d,null,-0,0)}}break}while(!0);ns(e)}function B_(e,n,a,o,u,d,x,A,G,at,vt,bt,lt,dt){if(e.timeoutHandle=-1,bt=n.subtreeFlags,bt&8192||(bt&16785408)===16785408){bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ni},D_(n,d,bt);var $t=(d&62914560)===d?Zu-E():(d&4194048)===d?O_-E():0;if($t=TM(bt,$t),$t!==null){Ls=d,e.cancelPendingCommit=$t(Y_.bind(null,e,n,d,a,o,u,x,A,G,vt,bt,null,lt,dt)),mr(e,d,x,!at);return}}Y_(e,n,d,a,o,u,x,A,G)}function Gy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!oe(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mr(e,n,a,o){n&=~Mp,n&=~ao,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Ft(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&Xa(e,a,n)}function Ju(){return(Qe&6)===0?(mc(0),!1):!0}function Rp(){if(Ne!==null){if(an===0)var e=Ne.return;else e=Ne,ys=Zr=null,kh(e),Xo=null,Ql=0,e=Ne;for(;e!==null;)m_(e.alternate,e),e=e.return;Ne=null}}function tl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,oM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ls=0,Rp(),fn=e,Ne=a=xs(e.current,null),Ie=n,an=0,Zi=null,fr=!1,Qo=kt(e,n),yp=!1,Jo=Ki=Mp=ao=dr=Dn=0,Pi=hc=null,Ep=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),d=1<<u;n|=e[u],o&=~d}return Ns=n,xu(),a}function z_(e,n){Ee=null,O.H=sc,n===ko||n===Ru?(n=eg(),an=3):n===Nh?(n=eg(),an=4):an=n===sp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zi=n,Ne===null&&(Dn=1,Gu(e,ca(n,e.current)))}function H_(){var e=qi.current;return e===null?!0:(Ie&4194048)===Ie?ha===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===ha:!1}function G_(){var e=O.H;return O.H=sc,e===null?sc:e}function V_(){var e=O.A;return O.A=zy,e}function $u(){Dn=4,fr||(Ie&4194048)!==Ie&&qi.current!==null||(Qo=!0),(dr&134217727)===0&&(ao&134217727)===0||fn===null||mr(fn,Ie,Ki,!1)}function Cp(e,n,a){var o=Qe;Qe|=2;var u=G_(),d=V_();(fn!==e||Ie!==n)&&(Qu=null,tl(e,n)),n=!1;var x=Dn;t:do try{if(an!==0&&Ne!==null){var A=Ne,G=Zi;switch(an){case 8:Rp(),x=6;break t;case 3:case 2:case 9:case 6:qi.current===null&&(n=!0);var at=an;if(an=0,Zi=null,el(e,A,G,at),a&&Qo){x=0;break t}break;default:at=an,an=0,Zi=null,el(e,A,G,at)}}Vy(),x=Dn;break}catch(vt){z_(e,vt)}while(!0);return n&&e.shellSuspendCounter++,ys=Zr=null,Qe=o,O.H=u,O.A=d,Ne===null&&(fn=null,Ie=0,xu()),x}function Vy(){for(;Ne!==null;)k_(Ne)}function ky(e,n){var a=Qe;Qe|=2;var o=G_(),u=V_();fn!==e||Ie!==n?(Qu=null,Ku=E()+500,tl(e,n)):Qo=kt(e,n);t:do try{if(an!==0&&Ne!==null){n=Ne;var d=Zi;e:switch(an){case 1:an=0,Zi=null,el(e,n,d,1);break;case 2:case 9:if($0(d)){an=0,Zi=null,X_(n);break}n=function(){an!==2&&an!==9||fn!==e||(an=7),ns(e)},d.then(n,n);break t;case 3:an=7;break t;case 4:an=5;break t;case 7:$0(d)?(an=0,Zi=null,X_(n)):(an=0,Zi=null,el(e,n,d,7));break;case 5:var x=null;switch(Ne.tag){case 26:x=Ne.memoizedState;case 5:case 27:var A=Ne;if(x?wv(x):A.stateNode.complete){an=0,Zi=null;var G=A.sibling;if(G!==null)Ne=G;else{var at=A.return;at!==null?(Ne=at,tf(at)):Ne=null}break e}}an=0,Zi=null,el(e,n,d,5);break;case 6:an=0,Zi=null,el(e,n,d,6);break;case 8:Rp(),Dn=6;break t;default:throw Error(s(462))}}Xy();break}catch(vt){z_(e,vt)}while(!0);return ys=Zr=null,O.H=o,O.A=u,Qe=a,Ne!==null?0:(fn=null,Ie=0,xu(),Dn)}function Xy(){for(;Ne!==null&&!At();)k_(Ne)}function k_(e){var n=h_(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,n===null?tf(e):Ne=n}function X_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=o_(a,n,n.pendingProps,n.type,void 0,Ie);break;case 11:n=o_(a,n,n.pendingProps,n.type.render,n.ref,Ie);break;case 5:kh(n);default:m_(a,n),n=Ne=V0(n,Ns),n=h_(a,n,Ns)}e.memoizedProps=e.pendingProps,n===null?tf(e):Ne=n}function el(e,n,a,o){ys=Zr=null,kh(n),Xo=null,Ql=0;var u=n.return;try{if(Ly(e,u,n,a,Ie)){Dn=1,Gu(e,ca(a,e.current)),Ne=null;return}}catch(d){if(u!==null)throw Ne=u,d;Dn=1,Gu(e,ca(a,e.current)),Ne=null;return}n.flags&32768?(Be||o===1?e=!0:Qo||(Ie&536870912)!==0?e=!1:(fr=e=!0,(o===2||o===9||o===3||o===6)&&(o=qi.current,o!==null&&o.tag===13&&(o.flags|=16384))),W_(n,e)):tf(n)}function tf(e){var n=e;do{if((n.flags&32768)!==0){W_(n,fr);return}e=n.return;var a=Iy(n.alternate,n,Ns);if(a!==null){Ne=a;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=e}while(n!==null);Dn===0&&(Dn=5)}function W_(e,n){do{var a=Py(e.alternate,e);if(a!==null){a.flags&=32767,Ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=a}while(e!==null);Dn=6,Ne=null}function Y_(e,n,a,o,u,d,x,A,G){e.cancelPendingCommit=null;do ef();while(Hn!==0);if((Qe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=gh,fi(e,a,d,x,A,G),e===fn&&(Ne=fn=null,Ie=0),$o=n,pr=e,Ls=a,bp=d,Tp=u,I_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jy(Q,function(){return Q_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=P.p,P.p=2,x=Qe,Qe|=4;try{Fy(e,n,a)}finally{Qe=x,P.p=u,O.T=o}}Hn=1,q_(),j_(),Z_()}}function q_(){if(Hn===1){Hn=0;var e=pr,n=$o,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Qe;Qe|=4;try{R_(n,e);var d=Hp,x=We(e.containerInfo),A=d.focusedElem,G=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&Xi(A.ownerDocument.documentElement,A)){if(G!==null&&Da(A)){var at=G.start,vt=G.end;if(vt===void 0&&(vt=at),"selectionStart"in A)A.selectionStart=at,A.selectionEnd=Math.min(vt,A.value.length);else{var bt=A.ownerDocument||document,lt=bt&&bt.defaultView||window;if(lt.getSelection){var dt=lt.getSelection(),$t=A.textContent.length,he=Math.min(G.start,$t),cn=G.end===void 0?he:Math.min(G.end,$t);!dt.extend&&he>cn&&(x=cn,cn=he,he=x);var K=Ei(A,he),W=Ei(A,cn);if(K&&W&&(dt.rangeCount!==1||dt.anchorNode!==K.node||dt.anchorOffset!==K.offset||dt.focusNode!==W.node||dt.focusOffset!==W.offset)){var nt=bt.createRange();nt.setStart(K.node,K.offset),dt.removeAllRanges(),he>cn?(dt.addRange(nt),dt.extend(W.node,W.offset)):(nt.setEnd(W.node,W.offset),dt.addRange(nt))}}}}for(bt=[],dt=A;dt=dt.parentNode;)dt.nodeType===1&&bt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<bt.length;A++){var Mt=bt[A];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}pf=!!zp,Hp=zp=null}finally{Qe=u,P.p=o,O.T=a}}e.current=n,Hn=2}}function j_(){if(Hn===2){Hn=0;var e=pr,n=$o,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=P.p;P.p=2;var u=Qe;Qe|=4;try{M_(e,n.alternate,n)}finally{Qe=u,P.p=o,O.T=a}}Hn=3}}function Z_(){if(Hn===4||Hn===3){Hn=0,w();var e=pr,n=$o,a=Ls,o=I_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Hn=5:(Hn=0,$o=pr=null,K_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(hr=null),ds(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=P.p,P.p=2,O.T=null;try{for(var d=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];d(A.value,{componentStack:A.stack})}}finally{O.T=n,P.p=u}}(Ls&3)!==0&&ef(),ns(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ap?pc++:(pc=0,Ap=e):pc=0,mc(0)}}function K_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zl(n)))}function ef(){return q_(),j_(),Z_(),Q_()}function Q_(){if(Hn!==5)return!1;var e=pr,n=bp;bp=0;var a=ds(Ls),o=O.T,u=P.p;try{P.p=32>a?32:a,O.T=null,a=Tp,Tp=null;var d=pr,x=Ls;if(Hn=0,$o=pr=null,Ls=0,(Qe&6)!==0)throw Error(s(331));var A=Qe;if(Qe|=4,L_(d.current),w_(d,d.current,x,a),Qe=A,mc(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Ct,d)}catch{}return!0}finally{P.p=u,O.T=o,K_(e,n)}}function J_(e,n,a){n=ca(a,n),n=ap(e.stateNode,n,2),e=or(e,n,2),e!==null&&(Jn(e,2),ns(e))}function sn(e,n,a){if(e.tag===3)J_(e,e,a);else for(;n!==null;){if(n.tag===3){J_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(hr===null||!hr.has(o))){e=ca(a,e),a=$g(2),o=or(n,a,2),o!==null&&(t_(a,o,n,e),Jn(o,2),ns(o));break}}n=n.return}}function wp(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Hy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(yp=!0,u.add(a),e=Wy.bind(null,e,n,a),n.then(e,e))}function Wy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,fn===e&&(Ie&a)===a&&(Dn===4||Dn===3&&(Ie&62914560)===Ie&&300>E()-Zu?(Qe&2)===0&&tl(e,0):Mp|=a,Jo===Ie&&(Jo=0)),ns(e)}function $_(e,n){n===0&&(n=De()),e=Yr(e,n),e!==null&&(Jn(e,n),ns(e))}function Yy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),$_(e,a)}function qy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),$_(e,a)}function jy(e,n){return Ue(e,n)}var nf=null,nl=null,Dp=!1,af=!1,Np=!1,gr=0;function ns(e){e!==nl&&e.next===null&&(nl===null?nf=nl=e:nl=nl.next=e),af=!0,Dp||(Dp=!0,Ky())}function mc(e,n){if(!Np&&af){Np=!0;do for(var a=!1,o=nf;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Ft(42|e)+1)-1,d&=u&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,iv(o,d))}else d=Ie,d=ft(o,o===fn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||kt(o,d)||(a=!0,iv(o,d));o=o.next}while(a);Np=!1}}function Zy(){tv()}function tv(){af=Dp=!1;var e=0;gr!==0&&rM()&&(e=gr);for(var n=E(),a=null,o=nf;o!==null;){var u=o.next,d=ev(o,n);d===0?(o.next=null,a===null?nf=u:a.next=u,u===null&&(nl=a)):(a=o,(e!==0||(d&3)!==0)&&(af=!0)),o=u}Hn!==0&&Hn!==5||mc(e),gr!==0&&(gr=0)}function ev(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-Ft(d),A=1<<x,G=u[x];G===-1?((A&a)===0||(A&o)!==0)&&(u[x]=ce(A,n)):G<=n&&(e.expiredLanes|=A),d&=~A}if(n=fn,a=Ie,a=ft(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(an===2||an===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ot(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ot(o),ds(a)){case 2:case 8:a=xt;break;case 32:a=Q;break;case 268435456:a=ht;break;default:a=Q}return o=nv.bind(null,e),a=Ue(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ot(o),e.callbackPriority=2,e.callbackNode=null,2}function nv(e,n){if(Hn!==0&&Hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ef()&&e.callbackNode!==a)return null;var o=Ie;return o=ft(e,e===fn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(F_(e,o,n),ev(e,E()),e.callbackNode!=null&&e.callbackNode===a?nv.bind(null,e):null)}function iv(e,n){if(ef())return null;F_(e,n,!0)}function Ky(){lM(function(){(Qe&6)!==0?Ue(ct,Zy):tv()})}function Lp(){if(gr===0){var e=Go;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),gr=e}return gr}function av(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ei(""+e)}function sv(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Qy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=av((u[yn]||null).action),x=o.submitter;x&&(n=(n=x[yn]||null)?av(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var A=new Ta("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var G=x?sv(u,x):new FormData(u);Jh(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(A.preventDefault(),G=x?sv(u,x):new FormData(u),Jh(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Up=0;Up<mh.length;Up++){var Op=mh[Up],Jy=Op.toLowerCase(),$y=Op[0].toUpperCase()+Op.slice(1);Na(Jy,"on"+$y)}Na(P0,"onAnimationEnd"),Na(F0,"onAnimationIteration"),Na(B0,"onAnimationStart"),Na("dblclick","onDoubleClick"),Na("focusin","onFocus"),Na("focusout","onBlur"),Na(my,"onTransitionRun"),Na(gy,"onTransitionStart"),Na(_y,"onTransitionCancel"),Na(z0,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gc));function rv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],G=A.instance,at=A.currentTarget;if(A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=at;try{d(u)}catch(vt){vu(vt)}u.currentTarget=null,d=G}else for(x=0;x<o.length;x++){if(A=o[x],G=A.instance,at=A.currentTarget,A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=at;try{d(u)}catch(vt){vu(vt)}u.currentTarget=null,d=G}}}}function Le(e,n){var a=n[Ni];a===void 0&&(a=n[Ni]=new Set);var o=e+"__bubble";a.has(o)||(ov(n,e,2,!1),a.add(o))}function Ip(e,n,a){var o=0;n&&(o|=4),ov(a,e,o,n)}var sf="_reactListening"+Math.random().toString(36).slice(2);function Pp(e){if(!e[sf]){e[sf]=!0,ut.forEach(function(a){a!=="selectionchange"&&(tM.has(a)||Ip(a,!1,e),Ip(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sf]||(n[sf]=!0,Ip("selectionchange",!1,n))}}function ov(e,n,a,o){switch(Pv(n)){case 2:var u=CM;break;case 8:u=wM;break;default:u=Qp}a=u.bind(null,n,a,e),u=void 0,!Br||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Fp(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Ea(A),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=d=x;continue t}A=A.parentNode}}o=o.return}Co(function(){var at=d,vt=ms(a),bt=[];t:{var lt=H0.get(e);if(lt!==void 0){var dt=Ta,$t=e;switch(e){case"keypress":if(Zs(a)===0)break t;case"keydown":case"keyup":dt=Gr;break;case"focusin":$t="focus",dt=_s;break;case"focusout":$t="blur",dt=_s;break;case"beforeblur":case"afterblur":dt=_s;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=No;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=iu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Wl;break;case P0:case F0:case B0:dt=au;break;case z0:dt=Yl;break;case"scroll":case"scrollend":dt=ph;break;case"wheel":dt=pu;break;case"copy":case"cut":case"paste":dt=su;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Xl;break;case"toggle":case"beforetoggle":dt=gu}var he=(n&4)!==0,cn=!he&&(e==="scroll"||e==="scrollend"),K=he?lt!==null?lt+"Capture":null:lt;he=[];for(var W=at,nt;W!==null;){var Mt=W;if(nt=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||nt===null||K===null||(Mt=js(W,K),Mt!=null&&he.push(_c(W,Mt,nt))),cn)break;W=W.return}0<he.length&&(lt=new dt(lt,$t,null,a,vt),bt.push({event:lt,listeners:he}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",lt&&a!==ja&&($t=a.relatedTarget||a.fromElement)&&(Ea($t)||$t[_i]))break t;if((dt||lt)&&(lt=vt.window===vt?vt:(lt=vt.ownerDocument)?lt.defaultView||lt.parentWindow:window,dt?($t=a.relatedTarget||a.toElement,dt=at,$t=$t?Ea($t):null,$t!==null&&(cn=c($t),he=$t.tag,$t!==cn||he!==5&&he!==27&&he!==6)&&($t=null)):(dt=null,$t=at),dt!==$t)){if(he=No,Mt="onMouseLeave",K="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(he=Xl,Mt="onPointerLeave",K="onPointerEnter",W="pointer"),cn=dt==null?lt:qa(dt),nt=$t==null?lt:qa($t),lt=new he(Mt,W+"leave",dt,a,vt),lt.target=cn,lt.relatedTarget=nt,Mt=null,Ea(vt)===at&&(he=new he(K,W+"enter",$t,a,vt),he.target=nt,he.relatedTarget=cn,Mt=he),cn=Mt,dt&&$t)e:{for(he=eM,K=dt,W=$t,nt=0,Mt=K;Mt;Mt=he(Mt))nt++;Mt=0;for(var re=W;re;re=he(re))Mt++;for(;0<nt-Mt;)K=he(K),nt--;for(;0<Mt-nt;)W=he(W),Mt--;for(;nt--;){if(K===W||W!==null&&K===W.alternate){he=K;break e}K=he(K),W=he(W)}he=null}else he=null;dt!==null&&lv(bt,lt,dt,he,!1),$t!==null&&cn!==null&&lv(bt,cn,$t,he,!0)}}t:{if(lt=at?qa(at):window,dt=lt.nodeName&&lt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&lt.type==="file")var je=Ra;else if(nn(lt))if(It)je=si;else{je=Qa;var ae=wa}else dt=lt.nodeName,!dt||dt.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?at&&ps(at.elementType)&&(je=Ra):je=Mi;if(je&&(je=je(e,at))){qe(bt,je,a,vt);break t}ae&&ae(e,lt,at),e==="focusout"&&at&&lt.type==="number"&&at.memoizedProps.value!=null&&Hi(lt,"number",lt.value)}switch(ae=at?qa(at):window,e){case"focusin":(nn(ae)||ae.contentEditable==="true")&&(Wi=ae,Li=at,bi=null);break;case"focusout":bi=Li=Wi=null;break;case"mousedown":vs=!0;break;case"contextmenu":case"mouseup":case"dragend":vs=!1,Oo(bt,a,vt);break;case"selectionchange":if(kr)break;case"keydown":case"keyup":Oo(bt,a,vt)}var Ae;if(ee)t:{switch(e){case"compositionstart":var Pe="onCompositionStart";break t;case"compositionend":Pe="onCompositionEnd";break t;case"compositionupdate":Pe="onCompositionUpdate";break t}Pe=void 0}else Un?Je(e,a)&&(Pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(Xt&&a.locale!=="ko"&&(Un||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&Un&&(Ae=nu()):(Za=vt,wo="value"in Za?Za.value:Za.textContent,Un=!0)),ae=rf(at,Pe),0<ae.length&&(Pe=new Aa(Pe,e,null,a,vt),bt.push({event:Pe,listeners:ae}),Ae?Pe.data=Ae:(Ae=$e(a),Ae!==null&&(Pe.data=Ae)))),(Ae=ne?Si(e,a):Rn(e,a))&&(Pe=rf(at,"onBeforeInput"),0<Pe.length&&(ae=new Aa("onBeforeInput","beforeinput",null,a,vt),bt.push({event:ae,listeners:Pe}),ae.data=Ae)),Qy(bt,e,at,a,vt)}rv(bt,n)})}function _c(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rf(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=js(e,a),u!=null&&o.unshift(_c(e,u,d)),u=js(e,n),u!=null&&o.push(_c(e,u,d))),e.tag===3)return o;e=e.return}return[]}function eM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lv(e,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var A=a,G=A.alternate,at=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||at===null||(G=at,u?(at=js(a,d),at!=null&&x.unshift(_c(a,at,G))):u||(at=js(a,d),at!=null&&x.push(_c(a,at,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var nM=/\r\n?/g,iM=/\u0000|\uFFFD/g;function cv(e){return(typeof e=="string"?e:""+e).replace(nM,`
`).replace(iM,"")}function uv(e,n){return n=cv(n),cv(e)===n}function ln(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(e,""+o);break;case"className":Se(e,"class",o);break;case"tabIndex":Se(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Se(e,a,o);break;case"style":na(e,o,d);break;case"data":if(n!=="object"){Se(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ei(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&ln(e,n,"name",u.name,u,null),ln(e,n,"formEncType",u.formEncType,u,null),ln(e,n,"formMethod",u.formMethod,u,null),ln(e,n,"formTarget",u.formTarget,u,null)):(ln(e,n,"encType",u.encType,u,null),ln(e,n,"method",u.method,u,null),ln(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ei(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ni);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ei(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Le("beforetoggle",e),Le("toggle",e),ue(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ue(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ia.get(a)||a,ue(e,a,o))}}function Bp(e,n,a,o,u,d){switch(a){case"style":na(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ti(e,o):(typeof o=="number"||typeof o=="bigint")&&ti(e,""+o);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[yn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ue(e,a,o)}}}function ci(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,d,x,a,null)}}u&&ln(e,n,"srcSet",a.srcSet,a,null),o&&ln(e,n,"src",a.src,a,null);return;case"input":Le("invalid",e);var A=d=x=u=null,G=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var vt=a[o];if(vt!=null)switch(o){case"name":u=vt;break;case"type":x=vt;break;case"checked":G=vt;break;case"defaultChecked":at=vt;break;case"value":d=vt;break;case"defaultValue":A=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(s(137,n));break;default:ln(e,n,o,vt,a,null)}}vi(e,d,A,G,at,x,u,!1);return;case"select":Le("invalid",e),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:ln(e,n,u,A,a,null)}n=d,a=x,e.multiple=!!o,n!=null?xi(e,!!o,n,!1):a!=null&&xi(e,!!o,a,!0);return;case"textarea":Le("invalid",e),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ln(e,n,x,A,a,null)}An(e,o,u,d);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ln(e,n,G,o,a,null));return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(o=0;o<gc.length;o++)Le(gc[o],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,at,o,a,null)}return;default:if(ps(n)){for(vt in a)a.hasOwnProperty(vt)&&(o=a[vt],o!==void 0&&Bp(e,n,vt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&ln(e,n,A,o,a,null))}function aM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,A=null,G=null,at=null,vt=null;for(dt in a){var bt=a[dt];if(a.hasOwnProperty(dt)&&bt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":G=bt;default:o.hasOwnProperty(dt)||ln(e,n,dt,null,o,bt)}}for(var lt in o){var dt=o[lt];if(bt=a[lt],o.hasOwnProperty(lt)&&(dt!=null||bt!=null))switch(lt){case"type":d=dt;break;case"name":u=dt;break;case"checked":at=dt;break;case"defaultChecked":vt=dt;break;case"value":x=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==bt&&ln(e,n,lt,dt,o,bt)}}Xn(e,x,A,G,at,vt,d,u);return;case"select":dt=x=A=lt=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":dt=G;default:o.hasOwnProperty(d)||ln(e,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":lt=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==G&&ln(e,n,u,d,o,G)}n=A,a=x,o=dt,lt!=null?xi(e,!!a,lt,!1):!!o!=!!a&&(n!=null?xi(e,!!a,n,!0):xi(e,!!a,a?[]:"",!1));return;case"textarea":dt=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ln(e,n,A,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":lt=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&ln(e,n,x,u,o,d)}Ye(e,lt,dt);return;case"option":for(var $t in a)lt=a[$t],a.hasOwnProperty($t)&&lt!=null&&!o.hasOwnProperty($t)&&($t==="selected"?e.selected=!1:ln(e,n,$t,null,o,lt));for(G in o)lt=o[G],dt=a[G],o.hasOwnProperty(G)&&lt!==dt&&(lt!=null||dt!=null)&&(G==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":ln(e,n,G,lt,o,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in a)lt=a[he],a.hasOwnProperty(he)&&lt!=null&&!o.hasOwnProperty(he)&&ln(e,n,he,null,o,lt);for(at in o)if(lt=o[at],dt=a[at],o.hasOwnProperty(at)&&lt!==dt&&(lt!=null||dt!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:ln(e,n,at,lt,o,dt)}return;default:if(ps(n)){for(var cn in a)lt=a[cn],a.hasOwnProperty(cn)&&lt!==void 0&&!o.hasOwnProperty(cn)&&Bp(e,n,cn,void 0,o,lt);for(vt in o)lt=o[vt],dt=a[vt],!o.hasOwnProperty(vt)||lt===dt||lt===void 0&&dt===void 0||Bp(e,n,vt,lt,o,dt);return}}for(var K in a)lt=a[K],a.hasOwnProperty(K)&&lt!=null&&!o.hasOwnProperty(K)&&ln(e,n,K,null,o,lt);for(bt in o)lt=o[bt],dt=a[bt],!o.hasOwnProperty(bt)||lt===dt||lt==null&&dt==null||ln(e,n,bt,lt,o,dt)}function fv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,A=u.duration;if(d&&A&&fv(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],at=G.startTime;if(at>A)break;var vt=G.transferSize,bt=G.initiatorType;vt&&fv(bt)&&(G=G.responseEnd,x+=vt*(G<A?1:(A-at)/(G-at)))}if(--o,n+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zp=null,Hp=null;function of(e){return e.nodeType===9?e:e.ownerDocument}function dv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gp(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vp=null;function rM(){var e=window.event;return e&&e.type==="popstate"?e===Vp?!1:(Vp=e,!0):(Vp=null,!1)}var pv=typeof setTimeout=="function"?setTimeout:void 0,oM=typeof clearTimeout=="function"?clearTimeout:void 0,mv=typeof Promise=="function"?Promise:void 0,lM=typeof queueMicrotask=="function"?queueMicrotask:typeof mv<"u"?function(e){return mv.resolve(null).then(e).catch(cM)}:pv;function cM(e){setTimeout(function(){throw e})}function _r(e){return e==="head"}function gv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),rl(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")vc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vc(a);for(var d=a.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[Ya]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&vc(e.ownerDocument.body);a=u}while(a);rl(n)}function _v(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function kp(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kp(a),qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function uM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ya])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=pa(e.nextSibling),e===null)break}return null}function fM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pa(e.nextSibling),e===null))return null;return e}function vv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pa(e.nextSibling),e===null))return null;return e}function Xp(e){return e.data==="$?"||e.data==="$~"}function Wp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Yp=null;function xv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Sv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function yv(e,n,a){switch(n=of(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function vc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qs(e)}var ma=new Map,Mv=new Set;function lf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Us=P.d;P.d={f:hM,r:pM,D:mM,C:gM,L:_M,m:vM,X:SM,S:xM,M:yM};function hM(){var e=Us.f(),n=Ju();return e||n}function pM(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?zg(n):Us.r(e)}var il=typeof document>"u"?null:document;function Ev(e,n,a){var o=il;if(o&&typeof n=="string"&&n){var u=pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Mv.has(u)||(Mv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),ci(n,"link",e),Y(n),o.head.appendChild(n)))}}function mM(e){Us.D(e),Ev("dns-prefetch",e,null)}function gM(e,n){Us.C(e,n),Ev("preconnect",e,n)}function _M(e,n,a){Us.L(e,n,a);var o=il;if(o&&e&&n){var u='link[rel="preload"][as="'+pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pe(a.imageSizes)+'"]')):u+='[href="'+pe(e)+'"]';var d=u;switch(n){case"style":d=al(e);break;case"script":d=sl(e)}ma.has(d)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ma.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(xc(d))||n==="script"&&o.querySelector(Sc(d))||(n=o.createElement("link"),ci(n,"link",e),Y(n),o.head.appendChild(n)))}}function vM(e,n){Us.m(e,n);var a=il;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pe(o)+'"][href="'+pe(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=sl(e)}if(!ma.has(d)&&(e=v({rel:"modulepreload",href:e},n),ma.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sc(d)))return}o=a.createElement("link"),ci(o,"link",e),Y(o),a.head.appendChild(o)}}}function xM(e,n,a){Us.S(e,n,a);var o=il;if(o&&e){var u=R(o).hoistableStyles,d=al(e);n=n||"default";var x=u.get(d);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(xc(d)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ma.get(d))&&qp(e,a);var G=x=o.createElement("link");Y(G),ci(G,"link",e),G._p=new Promise(function(at,vt){G.onload=at,G.onerror=vt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,cf(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(d,x)}}}function SM(e,n){Us.X(e,n);var a=il;if(a&&e){var o=R(a).hoistableScripts,u=sl(e),d=o.get(u);d||(d=a.querySelector(Sc(u)),d||(e=v({src:e,async:!0},n),(n=ma.get(u))&&jp(e,n),d=a.createElement("script"),Y(d),ci(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function yM(e,n){Us.M(e,n);var a=il;if(a&&e){var o=R(a).hoistableScripts,u=sl(e),d=o.get(u);d||(d=a.querySelector(Sc(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=ma.get(u))&&jp(e,n),d=a.createElement("script"),Y(d),ci(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function bv(e,n,a,o){var u=(u=et.current)?lf(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=al(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=al(a.href);var d=R(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(xc(e)))&&!d._p&&(x.instance=d,x.state.loading=5),ma.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ma.set(e,a),d||MM(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sl(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function al(e){return'href="'+pe(e)+'"'}function xc(e){return'link[rel="stylesheet"]['+e+"]"}function Tv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function MM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ci(n,"link",a),Y(n),e.head.appendChild(n))}function sl(e){return'[src="'+pe(e)+'"]'}function Sc(e){return"script[async]"+e}function Av(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),ci(o,"style",u),cf(o,a.precedence,e),n.instance=o;case"stylesheet":u=al(a.href);var d=e.querySelector(xc(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=Tv(a),(u=ma.get(u))&&qp(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var x=d;return x._p=new Promise(function(A,G){x.onload=A,x.onerror=G}),ci(d,"link",o),n.state.loading|=4,cf(d,a.precedence,e),n.instance=d;case"script":return d=sl(a.src),(u=e.querySelector(Sc(d)))?(n.instance=u,Y(u),u):(o=a,(u=ma.get(d))&&(o=v({},a),jp(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),ci(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cf(o,a.precedence,e));return n.instance}function cf(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uf=null;function Rv(e,n,a){if(uf===null){var o=new Map,u=uf=new Map;u.set(a,o)}else u=uf,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Ya]||d[xn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(d):o.set(x,[d])}}return o}function Cv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function EM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function bM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=al(o.href),d=n.querySelector(xc(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ff.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Y(d);return}d=n.ownerDocument||n,o=Tv(o),(u=ma.get(u))&&qp(o,u),d=d.createElement("link"),Y(d);var x=d;x._p=new Promise(function(A,G){x.onload=A,x.onerror=G}),ci(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ff.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zp=0;function TM(e,n){return e.stylesheets&&e.count===0&&hf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hf(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Zp===0&&(Zp=62500*sM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hf(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Zp?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ff(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var df=null;function hf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,df=new Map,n.forEach(AM,e),df=null,ff.call(e))}function AM(e,n){if(!(n.state.loading&4)){var a=df.get(e);if(a)var o=a.get(null);else{a=new Map,df.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=ff.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var yc={$$typeof:U,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function RM(e,n,a,o,u,d,x,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=me(0),this.hiddenUpdates=me(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Dv(e,n,a,o,u,d,x,A,G,at,vt,bt){return e=new RM(e,n,a,x,G,at,vt,bt,A),n=1,d===!0&&(n|=24),d=Yi(3,null,null,n),e.current=d,d.stateNode=e,n=Ch(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Lh(d),e}function Nv(e){return e?(e=Po,e):Po}function Lv(e,n,a,o,u,d){u=Nv(u),o.context===null?o.context=u:o.pendingContext=u,o=rr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=or(e,o,n),a!==null&&(Fi(a,e,n),$l(a,e,n))}function Uv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Kp(e,n){Uv(e,n),(e=e.alternate)&&Uv(e,n)}function Ov(e){if(e.tag===13||e.tag===31){var n=Yr(e,67108864);n!==null&&Fi(n,e,67108864),Kp(e,67108864)}}function Iv(e){if(e.tag===13||e.tag===31){var n=Qi();n=fs(n);var a=Yr(e,n);a!==null&&Fi(a,e,n),Kp(e,n)}}var pf=!0;function CM(e,n,a,o){var u=O.T;O.T=null;var d=P.p;try{P.p=2,Qp(e,n,a,o)}finally{P.p=d,O.T=u}}function wM(e,n,a,o){var u=O.T;O.T=null;var d=P.p;try{P.p=8,Qp(e,n,a,o)}finally{P.p=d,O.T=u}}function Qp(e,n,a,o){if(pf){var u=Jp(o);if(u===null)Fp(e,n,o,mf,a),Fv(e,o);else if(NM(u,e,n,a,o))o.stopPropagation();else if(Fv(e,o),n&4&&-1<DM.indexOf(e)){for(;u!==null;){var d=ba(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Tt(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var G=1<<31-Ft(x);A.entanglements[1]|=G,x&=~G}ns(d),(Qe&6)===0&&(Ku=E()+500,mc(0))}}break;case 31:case 13:A=Yr(d,2),A!==null&&Fi(A,d,2),Ju(),Kp(d,2)}if(d=Jp(o),d===null&&Fp(e,n,o,mf,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Fp(e,n,o,null,a)}}function Jp(e){return e=ms(e),$p(e)}var mf=null;function $p(e){if(mf=null,e=Ea(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mf=e,null}function Pv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(H()){case ct:return 2;case xt:return 8;case Q:case yt:return 32;case ht:return 268435456;default:return 32}default:return 32}}var tm=!1,vr=null,xr=null,Sr=null,Mc=new Map,Ec=new Map,yr=[],DM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(e,n){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Mc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ec.delete(n.pointerId)}}function bc(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&Ov(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function NM(e,n,a,o,u){switch(n){case"focusin":return vr=bc(vr,e,n,a,o,u),!0;case"dragenter":return xr=bc(xr,e,n,a,o,u),!0;case"mouseover":return Sr=bc(Sr,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Mc.set(d,bc(Mc.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ec.set(d,bc(Ec.get(d)||null,e,n,a,o,u)),!0}return!1}function Bv(e){var n=Ea(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,hs(e.priority,function(){Iv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,hs(e.priority,function(){Iv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gf(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Jp(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ja=o,a.target.dispatchEvent(o),ja=null}else return n=ba(a),n!==null&&Ov(n),e.blockedOn=a,!1;n.shift()}return!0}function zv(e,n,a){gf(e)&&a.delete(n)}function LM(){tm=!1,vr!==null&&gf(vr)&&(vr=null),xr!==null&&gf(xr)&&(xr=null),Sr!==null&&gf(Sr)&&(Sr=null),Mc.forEach(zv),Ec.forEach(zv)}function _f(e,n){e.blockedOn===n&&(e.blockedOn=null,tm||(tm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,LM)))}var vf=null;function Hv(e){vf!==e&&(vf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vf===e&&(vf=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if($p(o||a)===null)continue;break}var d=ba(a);d!==null&&(e.splice(n,3),n-=3,Jh(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function rl(e){function n(G){return _f(G,e)}vr!==null&&_f(vr,e),xr!==null&&_f(xr,e),Sr!==null&&_f(Sr,e),Mc.forEach(n),Ec.forEach(n);for(var a=0;a<yr.length;a++){var o=yr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<yr.length&&(a=yr[0],a.blockedOn===null);)Bv(a),a.blockedOn===null&&yr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[yn]||null;if(typeof d=="function")x||Hv(a);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[yn]||null)A=x.formAction;else if($p(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Hv(a)}}}function Gv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function em(e){this._internalRoot=e}xf.prototype.render=em.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qi();Lv(a,o,e,n,null,null)},xf.prototype.unmount=em.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Lv(e.current,2,null,e,null,null),Ju(),n[_i]=null}};function xf(e){this._internalRoot=e}xf.prototype.unstable_scheduleHydration=function(e){if(e){var n=zi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<yr.length&&n!==0&&n<yr[a].priority;a++);yr.splice(a,0,e),a===0&&Bv(e)}};var Vv=t.version;if(Vv!=="19.2.4")throw Error(s(527,Vv,"19.2.4"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var UM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sf.isDisabled&&Sf.supportsFiber)try{Ct=Sf.inject(UM),wt=Sf}catch{}}return Ac.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Zg,d=Kg,x=Qg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Dv(e,1,!1,null,null,a,o,null,u,d,x,Gv),e[_i]=n.current,Pp(e),new em(n)},Ac.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=Zg,x=Kg,A=Qg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Dv(e,1,!0,n,a??null,o,u,G,d,x,A,Gv),n.context=Nv(null),a=n.current,o=Qi(),o=fs(o),u=rr(o),u.callback=null,or(a,u,o),a=o,n.current.lanes=a,Jn(n,a),ns(n),e[_i]=n.current,Pp(e),new xf(n)},Ac.version="19.2.4",Ac}var Jv;function kM(){if(Jv)return am.exports;Jv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),am.exports=VM(),am.exports}var XM=kM();const qd="183",eS=0,Ym=1,nS=2,iS=0,vo=1,aS=2,Tl=3,Ws=0,gi=1,zn=2,os=0,xo=1,qm=2,jm=3,Zm=4,sS=5,Dr=100,rS=101,oS=102,lS=103,cS=104,uS=200,fS=201,dS=202,hS=203,id=204,ad=205,pS=206,mS=207,gS=208,_S=209,vS=210,xS=211,SS=212,yS=213,MS=214,sd=0,rd=1,od=2,So=3,ld=4,cd=5,ud=6,fd=7,jd=0,ES=1,bS=2,Ha=0,l0=1,c0=2,u0=3,Zd=4,f0=5,d0=6,h0=7,p0=300,Ur=301,yo=302,Kf=303,Qf=304,eu=306,wl=1e3,rs=1001,dd=1002,Zn=1003,TS=1004,Hc=1005,Kn=1006,Jf=1007,ks=1008,Bi=1009,m0=1010,g0=1011,Dl=1012,Kd=1013,Va=1014,xa=1015,ls=1016,Qd=1017,Jd=1018,Nl=1020,_0=35902,v0=35899,x0=1021,S0=1022,Sa=1023,cs=1026,Nr=1027,$d=1028,th=1029,Mo=1030,eh=1031,nh=1033,Xc=33776,Wc=33777,Yc=33778,qc=33779,hd=35840,pd=35841,md=35842,gd=35843,_d=36196,vd=37492,xd=37496,Sd=37488,yd=37489,Md=37490,Ed=37491,bd=37808,Td=37809,Ad=37810,Rd=37811,Cd=37812,wd=37813,Dd=37814,Nd=37815,Ld=37816,Ud=37817,Od=37818,Id=37819,Pd=37820,Fd=37821,Bd=36492,zd=36494,Hd=36495,Gd=36283,Vd=36284,kd=36285,Xd=36286,AS=3200,ih=0,RS=1,Gs="",Gn="srgb",Eo="srgb-linear",Qc="linear",tn="srgb",mo=7680,Km=519,CS=512,wS=513,DS=514,ah=515,NS=516,LS=517,sh=518,US=519,Qm=35044,Jm="300 es",za=2e3,Ll=2001;function WM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Wd(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function OS(){const r=Wd("canvas");return r.style.display="block",r}const $v={};function $m(...r){const t="THREE."+r.shift();console.log(t,...r)}function IS(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function _e(...r){r=IS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ge(...r){r=IS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Jc(...r){const t=r.join(" ");t in $v||($v[t]=!0,_e(...r))}function YM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const qM={[sd]:rd,[od]:ud,[ld]:fd,[So]:cd,[rd]:sd,[ud]:od,[fd]:ld,[cd]:So};class bo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tx=1234567;const jc=Math.PI/180,Ul=180/Math.PI;function Pl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(pi[r&255]+pi[r>>8&255]+pi[r>>16&255]+pi[r>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[i&63|128]+pi[i>>8&255]+"-"+pi[i>>16&255]+pi[i>>24&255]+pi[s&255]+pi[s>>8&255]+pi[s>>16&255]+pi[s>>24&255]).toLowerCase()}function Ce(r,t,i){return Math.max(t,Math.min(i,r))}function y0(r,t){return(r%t+t)%t}function jM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function ZM(r,t,i){return r!==t?(i-r)/(t-r):0}function Zc(r,t,i){return(1-i)*r+i*t}function KM(r,t,i,s){return Zc(r,t,1-Math.exp(-i*s))}function QM(r,t=1){return t-Math.abs(y0(r,t*2)-t)}function JM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function $M(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function tE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function eE(r,t){return r+Math.random()*(t-r)}function nE(r){return r*(.5-Math.random())}function iE(r){r!==void 0&&(tx=r);let t=tx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function aE(r){return r*jc}function sE(r){return r*Ul}function rE(r){return(r&r-1)===0&&r!==0}function oE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cE(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),S=c((s-t)/2),b=f((s-t)/2);switch(l){case"XYX":r.set(h*_,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*b,m*S,h*p);break;case"YXY":r.set(m*S,h*_,m*b,h*p);break;case"ZYZ":r.set(m*b,m*S,h*_,h*p);break;default:_e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function bl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ri(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const En={DEG2RAD:jc,RAD2DEG:Ul,generateUUID:Pl,clamp:Ce,euclideanModulo:y0,mapLinear:jM,inverseLerp:ZM,lerp:Zc,damp:KM,pingpong:QM,smoothstep:JM,smootherstep:$M,randInt:tE,randFloat:eE,randFloatSpread:nE,seededRandom:iE,degToRad:aE,radToDeg:sE,isPowerOfTwo:rE,ceilPowerOfTwo:oE,floorPowerOfTwo:lE,setQuaternionFromProperEuler:cE,normalize:Ri,denormalize:bl};class we{constructor(t=0,i=0){we.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ys{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],S=c[f+1],b=c[f+2],D=c[f+3];if(v!==D||m!==g||p!==S||_!==b){let M=m*g+p*S+_*b+v*D;M<0&&(g=-g,S=-S,b=-b,D=-D,M=-M);let y=1-h;if(M<.9995){const C=Math.acos(M),U=Math.sin(C);y=Math.sin(y*C)/U,h=Math.sin(h*C)/U,m=m*y+g*h,p=p*y+S*h,_=_*y+b*h,v=v*y+D*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+b*h,v=v*y+D*h;const C=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=C,p*=C,_*=C,v*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],S=c[f+2],b=c[f+3];return t[i]=h*b+_*v+m*S-p*g,t[i+1]=m*b+_*g+p*v-h*S,t[i+2]=p*b+_*S+h*g-m*v,t[i+3]=_*b-h*v-m*g-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(c/2),g=m(s/2),S=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*b,this._y=p*S*v-g*_*b,this._z=p*_*b+g*S*v,this._w=p*_*v-g*S*b;break;case"YXZ":this._x=g*_*v+p*S*b,this._y=p*S*v-g*_*b,this._z=p*_*b-g*S*v,this._w=p*_*v+g*S*b;break;case"ZXY":this._x=g*_*v-p*S*b,this._y=p*S*v+g*_*b,this._z=p*_*b+g*S*v,this._w=p*_*v-g*S*b;break;case"ZYX":this._x=g*_*v-p*S*b,this._y=p*S*v+g*_*b,this._z=p*_*b-g*S*v,this._w=p*_*v+g*S*b;break;case"YZX":this._x=g*_*v+p*S*b,this._y=p*S*v+g*_*b,this._z=p*_*b-g*S*v,this._w=p*_*v-g*S*b;break;case"XZY":this._x=g*_*v-p*S*b,this._y=p*S*v-g*_*b,this._z=p*_*b+g*S*v,this._w=p*_*v+g*S*b;break;default:_e("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>h&&s>v){const S=2*Math.sqrt(1+s-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-s-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ex.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ex.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),_=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-h*_,this.y=s+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return lm.copy(this).projectOnVector(t),this.sub(lm)}reflect(t){return this.sub(lm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lm=new j,ex=new Ys;class be{constructor(t,i,s,l,c,f,h,m,p){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],S=s[5],b=s[8],D=l[0],M=l[3],y=l[6],C=l[1],U=l[4],N=l[7],F=l[2],B=l[5],z=l[8];return c[0]=f*D+h*C+m*F,c[3]=f*M+h*U+m*B,c[6]=f*y+h*N+m*z,c[1]=p*D+_*C+v*F,c[4]=p*M+_*U+v*B,c[7]=p*y+_*N+v*z,c[2]=g*D+S*C+b*F,c[5]=g*M+S*U+b*B,c[8]=g*y+S*N+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=_*f-h*p,g=h*m-_*c,S=p*c-f*m,b=i*v+s*g+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return t[0]=v*D,t[1]=(l*p-_*s)*D,t[2]=(h*s-l*f)*D,t[3]=g*D,t[4]=(_*i-l*m)*D,t[5]=(l*c-h*i)*D,t[6]=S*D,t[7]=(s*m-p*i)*D,t[8]=(f*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(cm.makeScale(t,i)),this}rotate(t){return this.premultiply(cm.makeRotation(-t)),this}translate(t,i){return this.premultiply(cm.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cm=new be,nx=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ix=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uE(){const r={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===tn&&(l.r=Xs(l.r),l.g=Xs(l.g),l.b=Xs(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===tn&&(l.r=Cl(l.r),l.g=Cl(l.g),l.b=Cl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Gs?Qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Eo]:{primaries:t,whitePoint:s,transfer:Qc,toXYZ:nx,fromXYZ:ix,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:s,transfer:tn,toXYZ:nx,fromXYZ:ix,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const Ve=uE();function Xs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ol;class PS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ol===void 0&&(ol=Wd("canvas")),ol.width=t.width,ol.height=t.height;const l=ol.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ol}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Wd("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Xs(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Xs(i[s]/255)*255):i[s]=Xs(i[s]);return{data:i,width:t.width,height:t.height}}else return _e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fE=0;class rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Pl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(um(l[f].image)):c.push(um(l[f]))}else c=um(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function um(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?PS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(_e("Texture: Unable to serialize Texture."),{})}let dE=0;const fm=new j;class ui extends bo{constructor(t=ui.DEFAULT_IMAGE,i=ui.DEFAULT_MAPPING,s=rs,l=rs,c=Kn,f=ks,h=Sa,m=Bi,p=ui.DEFAULT_ANISOTROPY,_=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Pl(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fm).x}get height(){return this.source.getSize(fm).y}get depth(){return this.source.getSize(fm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){_e(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){_e(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==p0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wl:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case dd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wl:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case dd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=p0;ui.DEFAULT_ANISOTROPY=1;class bn{constructor(t=0,i=0,s=0,l=1){bn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],b=m[9],D=m[2],M=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,N=(S+1)/2,F=(y+1)/2,B=(_+g)/4,z=(v+D)/4,T=(b+M)/4;return U>N&&U>F?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=B/s,c=z/s):N>F?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=B/l,c=T/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-b)*(M-b)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(v-D)/C,this.z=(g-_)/C,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this.w=Ce(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this.w=Ce(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FS extends bo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new bn(0,0,t,i),this.scissorTest=!1,this.viewport=new bn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ui(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new rh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ga extends FS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class M0 extends ui{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class BS extends ui{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(t,i,s,l,c,f,h,m,p,_,v,g,S,b,D,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,_,v,g,S,b,D,M)}set(t,i,s,l,c,f,h,m,p,_,v,g,S,b,D,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=b,y[11]=D,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/ll.setFromMatrixColumn(t,0).length(),c=1/ll.setFromMatrixColumn(t,1).length(),f=1/ll.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,S=f*v,b=h*_,D=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+b*p,i[5]=g-D*p,i[9]=-h*m,i[2]=D-g*p,i[6]=b+S*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,S=m*v,b=p*_,D=p*v;i[0]=g+D*h,i[4]=b*h-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=S*h-b,i[6]=D+g*h,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,S=m*v,b=p*_,D=p*v;i[0]=g-D*h,i[4]=-f*v,i[8]=b+S*h,i[1]=S+b*h,i[5]=f*_,i[9]=D-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,S=f*v,b=h*_,D=h*v;i[0]=m*_,i[4]=b*p-S,i[8]=g*p+D,i[1]=m*v,i[5]=D*p+g,i[9]=S*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,S=f*p,b=h*m,D=h*p;i[0]=m*_,i[4]=D-g*v,i[8]=b*v+S,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+b,i[10]=g-D*v}else if(t.order==="XZY"){const g=f*m,S=f*p,b=h*m,D=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+D,i[5]=f*_,i[9]=S*v-b,i[2]=b*v-S,i[6]=h*_,i[10]=D*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hE,t,pE)}lookAt(t,i,s){const l=this.elements;return Ji.subVectors(t,i),Ji.lengthSq()===0&&(Ji.z=1),Ji.normalize(),Er.crossVectors(s,Ji),Er.lengthSq()===0&&(Math.abs(s.z)===1?Ji.x+=1e-4:Ji.z+=1e-4,Ji.normalize(),Er.crossVectors(s,Ji)),Er.normalize(),yf.crossVectors(Ji,Er),l[0]=Er.x,l[4]=yf.x,l[8]=Ji.x,l[1]=Er.y,l[5]=yf.y,l[9]=Ji.y,l[2]=Er.z,l[6]=yf.z,l[10]=Ji.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],S=s[13],b=s[2],D=s[6],M=s[10],y=s[14],C=s[3],U=s[7],N=s[11],F=s[15],B=l[0],z=l[4],T=l[8],L=l[12],pt=l[1],V=l[5],tt=l[9],st=l[13],rt=l[2],Z=l[6],O=l[10],P=l[14],$=l[3],mt=l[7],gt=l[11],I=l[15];return c[0]=f*B+h*pt+m*rt+p*$,c[4]=f*z+h*V+m*Z+p*mt,c[8]=f*T+h*tt+m*O+p*gt,c[12]=f*L+h*st+m*P+p*I,c[1]=_*B+v*pt+g*rt+S*$,c[5]=_*z+v*V+g*Z+S*mt,c[9]=_*T+v*tt+g*O+S*gt,c[13]=_*L+v*st+g*P+S*I,c[2]=b*B+D*pt+M*rt+y*$,c[6]=b*z+D*V+M*Z+y*mt,c[10]=b*T+D*tt+M*O+y*gt,c[14]=b*L+D*st+M*P+y*I,c[3]=C*B+U*pt+N*rt+F*$,c[7]=C*z+U*V+N*Z+F*mt,c[11]=C*T+U*tt+N*O+F*gt,c[15]=C*L+U*st+N*P+F*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],S=t[14],b=t[3],D=t[7],M=t[11],y=t[15],C=m*S-p*g,U=h*S-p*v,N=h*g-m*v,F=f*S-p*_,B=f*g-m*_,z=f*v-h*_;return i*(D*C-M*U+y*N)-s*(b*C-M*F+y*B)+l*(b*U-D*F+y*z)-c*(b*N-D*B+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],S=t[11],b=t[12],D=t[13],M=t[14],y=t[15],C=i*h-s*f,U=i*m-l*f,N=i*p-c*f,F=s*m-l*h,B=s*p-c*h,z=l*p-c*m,T=_*D-v*b,L=_*M-g*b,pt=_*y-S*b,V=v*M-g*D,tt=v*y-S*D,st=g*y-S*M,rt=C*st-U*tt+N*V+F*pt-B*L+z*T;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/rt;return t[0]=(h*st-m*tt+p*V)*Z,t[1]=(l*tt-s*st-c*V)*Z,t[2]=(D*z-M*B+y*F)*Z,t[3]=(g*B-v*z-S*F)*Z,t[4]=(m*pt-f*st-p*L)*Z,t[5]=(i*st-l*pt+c*L)*Z,t[6]=(M*N-b*z-y*U)*Z,t[7]=(_*z-g*N+S*U)*Z,t[8]=(f*tt-h*pt+p*T)*Z,t[9]=(s*pt-i*tt-c*T)*Z,t[10]=(b*B-D*N+y*C)*Z,t[11]=(v*N-_*B-S*C)*Z,t[12]=(h*L-f*V-m*T)*Z,t[13]=(i*V-s*L+l*T)*Z,t[14]=(D*U-b*F-M*C)*Z,t[15]=(_*F-v*U+g*C)*Z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,S=c*_,b=c*v,D=f*_,M=f*v,y=h*v,C=m*p,U=m*_,N=m*v,F=s.x,B=s.y,z=s.z;return l[0]=(1-(D+y))*F,l[1]=(S+N)*F,l[2]=(b-U)*F,l[3]=0,l[4]=(S-N)*B,l[5]=(1-(g+y))*B,l[6]=(M+C)*B,l[7]=0,l[8]=(b+U)*z,l[9]=(M-C)*z,l[10]=(1-(g+D))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=ll.set(l[0],l[1],l[2]).length();const h=ll.set(l[4],l[5],l[6]).length(),m=ll.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Oa.copy(this);const p=1/f,_=1/h,v=1/m;return Oa.elements[0]*=p,Oa.elements[1]*=p,Oa.elements[2]*=p,Oa.elements[4]*=_,Oa.elements[5]*=_,Oa.elements[6]*=_,Oa.elements[8]*=v,Oa.elements[9]*=v,Oa.elements[10]*=v,i.setFromRotationMatrix(Oa),s.x=f,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,f,h=za,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),S=(s+l)/(s-l);let b,D;if(m)b=c/(f-c),D=f*c/(f-c);else if(h===za)b=-(f+c)/(f-c),D=-2*f*c/(f-c);else if(h===Ll)b=-f/(f-c),D=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=za,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),S=-(s+l)/(s-l);let b,D;if(m)b=1/(f-c),D=f/(f-c);else if(h===za)b=-2/(f-c),D=-(f+c)/(f-c);else if(h===Ll)b=-1/(f-c),D=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const ll=new j,Oa=new un,hE=new j(0,0,0),pE=new j(1,1,1),Er=new j,yf=new j,Ji=new j,ax=new un,sx=new Ys;class ta{constructor(t=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ce(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:_e("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return ax.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ax,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return sx.setFromEuler(this),this.setFromQuaternion(sx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mE=0;const rx=new j,cl=new Ys,Os=new un,Mf=new j,Rc=new j,gE=new j,_E=new Ys,ox=new j(1,0,0),lx=new j(0,1,0),cx=new j(0,0,1),ux={type:"added"},vE={type:"removed"},ul={type:"childadded",child:null},dm={type:"childremoved",child:null};class dn extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new j,i=new ta,s=new Ys,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new be}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cl.setFromAxisAngle(t,i),this.quaternion.multiply(cl),this}rotateOnWorldAxis(t,i){return cl.setFromAxisAngle(t,i),this.quaternion.premultiply(cl),this}rotateX(t){return this.rotateOnAxis(ox,t)}rotateY(t){return this.rotateOnAxis(lx,t)}rotateZ(t){return this.rotateOnAxis(cx,t)}translateOnAxis(t,i){return rx.copy(t).applyQuaternion(this.quaternion),this.position.add(rx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ox,t)}translateY(t){return this.translateOnAxis(lx,t)}translateZ(t){return this.translateOnAxis(cx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Os.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mf.copy(t):Mf.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Rc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Os.lookAt(Rc,Mf,this.up):Os.lookAt(Mf,Rc,this.up),this.quaternion.setFromRotationMatrix(Os),l&&(Os.extractRotation(l.matrixWorld),cl.setFromRotationMatrix(Os),this.quaternion.premultiply(cl.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ux),ul.child=t,this.dispatchEvent(ul),ul.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vE),dm.child=t,this.dispatchEvent(dm),dm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Os.multiply(t.parent.matrixWorld)),t.applyMatrix4(Os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ux),ul.child=t,this.dispatchEvent(ul),ul.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rc,t,gE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rc,_E,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),S=f(t.animations),b=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}dn.DEFAULT_UP=new j(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Al extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xE={type:"move"};class $f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,s),y=this._getHandJoint(p,D);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,b=.005;p.inputState.pinching&&g>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Al;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const zS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Ef={h:0,s:0,l:0};function hm(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class de{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ve.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ve.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ve.workingColorSpace){if(t=y0(t,1),i=Ce(i,0,1),s=Ce(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=hm(f,c,t+1/3),this.g=hm(f,c,t),this.b=hm(f,c,t-1/3)}return Ve.colorSpaceToWorking(this,l),this}setStyle(t,i=Gn){function s(c){c!==void 0&&parseFloat(c)<1&&_e("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:_e("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);_e("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Gn){const s=zS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):_e("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}copyLinearToSRGB(t){return this.r=Cl(t.r),this.g=Cl(t.g),this.b=Cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return Ve.workingToColorSpace(mi.copy(this),t),Math.round(Ce(mi.r*255,0,255))*65536+Math.round(Ce(mi.g*255,0,255))*256+Math.round(Ce(mi.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ve.workingColorSpace){Ve.workingToColorSpace(mi.copy(this),i);const s=mi.r,l=mi.g,c=mi.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ve.workingColorSpace){return Ve.workingToColorSpace(mi.copy(this),i),t.r=mi.r,t.g=mi.g,t.b=mi.b,t}getStyle(t=Gn){Ve.workingToColorSpace(mi.copy(this),t);const i=mi.r,s=mi.g,l=mi.b;return t!==Gn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(br),this.setHSL(br.h+t,br.s+i,br.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(br),t.getHSL(Ef);const s=Zc(br.h,Ef.h,i),l=Zc(br.s,Ef.s,i),c=Zc(br.l,Ef.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mi=new de;de.NAMES=zS;class $c{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new de(t),this.near=i,this.far=s}clone(){return new $c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class E0 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ia=new j,Is=new j,pm=new j,Ps=new j,fl=new j,dl=new j,fx=new j,mm=new j,gm=new j,_m=new j,vm=new bn,xm=new bn,Sm=new bn;class va{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ia.subVectors(t,i),l.cross(Ia);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ia.subVectors(l,i),Is.subVectors(s,i),pm.subVectors(t,i);const f=Ia.dot(Ia),h=Ia.dot(Is),m=Ia.dot(pm),p=Is.dot(Is),_=Is.dot(pm),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,b=(f*_-h*m)*g;return c.set(1-S-b,b,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ps)===null?!1:Ps.x>=0&&Ps.y>=0&&Ps.x+Ps.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,Ps)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ps.x),m.addScaledVector(f,Ps.y),m.addScaledVector(h,Ps.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return vm.setScalar(0),xm.setScalar(0),Sm.setScalar(0),vm.fromBufferAttribute(t,i),xm.fromBufferAttribute(t,s),Sm.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(vm,c.x),f.addScaledVector(xm,c.y),f.addScaledVector(Sm,c.z),f}static isFrontFacing(t,i,s,l){return Ia.subVectors(s,i),Is.subVectors(t,i),Ia.cross(Is).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ia.subVectors(this.c,this.b),Is.subVectors(this.a,this.b),Ia.cross(Is).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return va.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return va.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return va.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return va.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return va.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;fl.subVectors(l,s),dl.subVectors(c,s),mm.subVectors(t,s);const m=fl.dot(mm),p=dl.dot(mm);if(m<=0&&p<=0)return i.copy(s);gm.subVectors(t,l);const _=fl.dot(gm),v=dl.dot(gm);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(fl,f);_m.subVectors(t,c);const S=fl.dot(_m),b=dl.dot(_m);if(b>=0&&S<=b)return i.copy(c);const D=S*p-m*b;if(D<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(dl,h);const M=_*b-S*v;if(M<=0&&v-_>=0&&S-b>=0)return fx.subVectors(c,l),h=(v-_)/(v-_+(S-b)),i.copy(l).addScaledVector(fx,h);const y=1/(M+D+g);return f=D*y,h=g*y,i.copy(s).addScaledVector(fl,f).addScaledVector(dl,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Or{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Pa.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Pa.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Pa.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Pa):Pa.fromBufferAttribute(c,f),Pa.applyMatrix4(t.matrixWorld),this.expandByPoint(Pa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bf.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bf.copy(s.boundingBox)),bf.applyMatrix4(t.matrixWorld),this.union(bf)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pa),Pa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cc),Tf.subVectors(this.max,Cc),hl.subVectors(t.a,Cc),pl.subVectors(t.b,Cc),ml.subVectors(t.c,Cc),Tr.subVectors(pl,hl),Ar.subVectors(ml,pl),so.subVectors(hl,ml);let i=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-so.z,so.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,so.z,0,-so.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-so.y,so.x,0];return!ym(i,hl,pl,ml,Tf)||(i=[1,0,0,0,1,0,0,0,1],!ym(i,hl,pl,ml,Tf))?!1:(Af.crossVectors(Tr,Ar),i=[Af.x,Af.y,Af.z],ym(i,hl,pl,ml,Tf))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fs=[new j,new j,new j,new j,new j,new j,new j,new j],Pa=new j,bf=new Or,hl=new j,pl=new j,ml=new j,Tr=new j,Ar=new j,so=new j,Cc=new j,Tf=new j,Af=new j,ro=new j;function ym(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ro.fromArray(r,c);const h=l.x*Math.abs(ro.x)+l.y*Math.abs(ro.y)+l.z*Math.abs(ro.z),m=t.dot(ro),p=i.dot(ro),_=s.dot(ro);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Bn=new j,Rf=new we;let SE=0;class ya{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Qm,this.updateRanges=[],this.gpuType=xa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rf.fromBufferAttribute(this,i),Rf.applyMatrix3(t),this.setXY(i,Rf.x,Rf.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix3(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=bl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ri(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=bl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ri(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=bl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ri(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=bl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ri(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=bl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ri(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ri(i,this.array),s=Ri(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ri(i,this.array),s=Ri(s,this.array),l=Ri(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ri(i,this.array),s=Ri(s,this.array),l=Ri(l,this.array),c=Ri(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qm&&(t.usage=this.usage),t}}class b0 extends ya{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class T0 extends ya{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Qn extends ya{constructor(t,i,s){super(new Float32Array(t),i,s)}}const yE=new Or,wc=new j,Mm=new j;class Fl{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):yE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wc.subVectors(t,this.center);const i=wc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wc.copy(t.center).add(Mm)),this.expandByPoint(wc.copy(t.center).sub(Mm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ME=0;const ga=new un,Em=new dn,gl=new j,$i=new Or,Dc=new Or,jn=new j;class ea extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(WM(t)?T0:b0)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new be().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ga.makeRotationFromQuaternion(t),this.applyMatrix4(ga),this}rotateX(t){return ga.makeRotationX(t),this.applyMatrix4(ga),this}rotateY(t){return ga.makeRotationY(t),this.applyMatrix4(ga),this}rotateZ(t){return ga.makeRotationZ(t),this.applyMatrix4(ga),this}translate(t,i,s){return ga.makeTranslation(t,i,s),this.applyMatrix4(ga),this}scale(t,i,s){return ga.makeScale(t,i,s),this.applyMatrix4(ga),this}lookAt(t){return Em.lookAt(t),Em.updateMatrix(),this.applyMatrix4(Em.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gl).negate(),this.translate(gl.x,gl.y,gl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Qn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&_e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$i.setFromBufferAttribute(c),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,$i.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,$i.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint($i.min),this.boundingBox.expandByPoint($i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if($i.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Dc.setFromBufferAttribute(h),this.morphTargetsRelative?(jn.addVectors($i.min,Dc.min),$i.expandByPoint(jn),jn.addVectors($i.max,Dc.max),$i.expandByPoint(jn)):($i.expandByPoint(Dc.min),$i.expandByPoint(Dc.max))}$i.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)jn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(jn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)jn.fromBufferAttribute(h,p),m&&(gl.fromBufferAttribute(t,p),jn.add(gl)),l=Math.max(l,s.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ya(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new j,m[T]=new j;const p=new j,_=new j,v=new j,g=new we,S=new we,b=new we,D=new j,M=new j;function y(T,L,pt){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,L),v.fromBufferAttribute(s,pt),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,L),b.fromBufferAttribute(c,pt),_.sub(p),v.sub(p),S.sub(g),b.sub(g);const V=1/(S.x*b.y-b.x*S.y);isFinite(V)&&(D.copy(_).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(V),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(V),h[T].add(D),h[L].add(D),h[pt].add(D),m[T].add(M),m[L].add(M),m[pt].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,L=C.length;T<L;++T){const pt=C[T],V=pt.start,tt=pt.count;for(let st=V,rt=V+tt;st<rt;st+=3)y(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const U=new j,N=new j,F=new j,B=new j;function z(T){F.fromBufferAttribute(l,T),B.copy(F);const L=h[T];U.copy(L),U.sub(F.multiplyScalar(F.dot(L))).normalize(),N.crossVectors(B,L);const V=N.dot(m[T])<0?-1:1;f.setXYZW(T,U.x,U.y,U.z,V)}for(let T=0,L=C.length;T<L;++T){const pt=C[T],V=pt.start,tt=pt.count;for(let st=V,rt=V+tt;st<rt;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ya(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,f=new j,h=new j,m=new j,p=new j,_=new j,v=new j;if(t)for(let g=0,S=t.count;g<S;g+=3){const b=t.getX(g+0),D=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)jn.fromBufferAttribute(t,i),jn.normalize(),t.setXYZ(i,jn.x,jn.y,jn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,b=0;for(let D=0,M=m.length;D<M;D++){h.isInterleavedBufferAttribute?S=m[D]*h.data.stride+h.offset:S=m[D]*_;for(let y=0;y<_;y++)g[b++]=p[S++]}return new ya(g,_,v)}if(this.index===null)return _e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ea,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=t(g,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let EE=0;class To extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Pl(),this.name="",this.type="Material",this.blending=xo,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=ad,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){_e(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){_e(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(s.blending=this.blending),this.side!==Ws&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==id&&(s.blendSrc=this.blendSrc),this.blendDst!==ad&&(s.blendDst=this.blendDst),this.blendEquation!==Dr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Km&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Bs=new j,bm=new j,Cf=new j,Rr=new j,Tm=new j,wf=new j,Am=new j;class A0{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bs)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Bs.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Bs.copy(this.origin).addScaledVector(this.direction,i),Bs.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){bm.copy(t).add(i).multiplyScalar(.5),Cf.copy(i).sub(t).normalize(),Rr.copy(this.origin).sub(bm);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Cf),h=Rr.dot(this.direction),m=-Rr.dot(Cf),p=Rr.lengthSq(),_=Math.abs(1-f*f);let v,g,S,b;if(_>0)if(v=f*m-h,g=f*h-m,b=c*_,v>=0)if(g>=-b)if(g<=b){const D=1/_;v*=D,g*=D,S=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-b?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(bm).addScaledVector(Cf,g),S}intersectSphere(t,i){Bs.subVectors(t.center,this.origin);const s=Bs.dot(this.direction),l=Bs.dot(Bs)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Bs)!==null}intersectTriangle(t,i,s,l,c){Tm.subVectors(i,t),wf.subVectors(s,t),Am.crossVectors(Tm,wf);let f=this.direction.dot(Am),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Rr.subVectors(this.origin,t);const m=h*this.direction.dot(wf.crossVectors(Rr,wf));if(m<0)return null;const p=h*this.direction.dot(Tm.cross(Rr));if(p<0||m+p>f)return null;const _=-h*Rr.dot(Am);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tu extends To{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dx=new un,oo=new A0,Df=new Fl,hx=new j,Nf=new j,Lf=new j,Uf=new j,Rm=new j,Of=new j,px=new j,If=new j;class He extends dn{constructor(t=new ea,i=new tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Of.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Rm.fromBufferAttribute(v,t),f?Of.addScaledVector(Rm,_):Of.addScaledVector(Rm.sub(i),_))}i.add(Of)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Df.copy(s.boundingSphere),Df.applyMatrix4(c),oo.copy(t.ray).recast(t.near),!(Df.containsPoint(oo.origin)===!1&&(oo.intersectSphere(Df,hx)===null||oo.origin.distanceToSquared(hx)>(t.far-t.near)**2))&&(dx.copy(c).invert(),oo.copy(t.ray).applyMatrix4(dx),!(s.boundingBox!==null&&oo.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,oo)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,D=g.length;b<D;b++){const M=g[b],y=f[M.materialIndex],C=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let N=C,F=U;N<F;N+=3){const B=h.getX(N),z=h.getX(N+1),T=h.getX(N+2);l=Pf(this,y,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),D=Math.min(h.count,S.start+S.count);for(let M=b,y=D;M<y;M+=3){const C=h.getX(M),U=h.getX(M+1),N=h.getX(M+2);l=Pf(this,f,t,s,p,_,v,C,U,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,D=g.length;b<D;b++){const M=g[b],y=f[M.materialIndex],C=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let N=C,F=U;N<F;N+=3){const B=N,z=N+1,T=N+2;l=Pf(this,y,t,s,p,_,v,B,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),D=Math.min(m.count,S.start+S.count);for(let M=b,y=D;M<y;M+=3){const C=M,U=M+1,N=M+2;l=Pf(this,f,t,s,p,_,v,C,U,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function bE(r,t,i,s,l,c,f,h){let m;if(t.side===gi?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===Ws,h),m===null)return null;If.copy(h),If.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(If);return p<i.near||p>i.far?null:{distance:p,point:If.clone(),object:r}}function Pf(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Nf),r.getVertexPosition(m,Lf),r.getVertexPosition(p,Uf);const _=bE(r,t,i,s,Nf,Lf,Uf,px);if(_){const v=new j;va.getBarycoord(px,Nf,Lf,Uf,v),l&&(_.uv=va.getInterpolatedAttribute(l,h,m,p,v,new we)),c&&(_.uv1=va.getInterpolatedAttribute(c,h,m,p,v,new we)),f&&(_.normal=va.getInterpolatedAttribute(f,h,m,p,v,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new j,materialIndex:0};va.getNormal(Nf,Lf,Uf,g.normal),_.face=g,_.barycoord=v}return _}class R0 extends ui{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Zn,_=Zn,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class t0 extends ya{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _l=new un,mx=new un,Ff=[],gx=new Or,TE=new un,Nc=new He,Lc=new Fl;class HS extends He{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new t0(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,TE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Or),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,_l),gx.copy(t.boundingBox).applyMatrix4(_l),this.boundingBox.union(gx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,_l),Lc.copy(t.boundingSphere).applyMatrix4(_l),this.boundingSphere.union(Lc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Nc.geometry=this.geometry,Nc.material=this.material,Nc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(s),t.ray.intersectsSphere(Lc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,_l),mx.multiplyMatrices(s,_l),Nc.matrixWorld=mx,Nc.raycast(t,Ff);for(let f=0,h=Ff.length;f<h;f++){const m=Ff[f];m.instanceId=c,m.object=this,i.push(m)}Ff.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new t0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new R0(new Float32Array(l*this.count),l,this.count,$d,xa));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=h,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cm=new j,AE=new j,RE=new be;class wr{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Cm.subVectors(s,i).cross(AE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Cm),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||RE.getNormalMatrix(t),l=this.coplanarPoint(Cm).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lo=new Fl,CE=new we(.5,.5),Bf=new j;class lh{constructor(t=new wr,i=new wr,s=new wr,l=new wr,c=new wr,f=new wr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=za,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],b=c[8],D=c[9],M=c[10],y=c[11],C=c[12],U=c[13],N=c[14],F=c[15];if(l[0].setComponents(p-f,S-_,y-b,F-C).normalize(),l[1].setComponents(p+f,S+_,y+b,F+C).normalize(),l[2].setComponents(p+h,S+v,y+D,F+U).normalize(),l[3].setComponents(p-h,S-v,y-D,F-U).normalize(),s)l[4].setComponents(m,g,M,N).normalize(),l[5].setComponents(p-m,S-g,y-M,F-N).normalize();else if(l[4].setComponents(p-m,S-g,y-M,F-N).normalize(),i===za)l[5].setComponents(p+m,S+g,y+M,F+N).normalize();else if(i===Ll)l[5].setComponents(m,g,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lo)}intersectsSprite(t){lo.center.set(0,0,0);const i=CE.distanceTo(t.center);return lo.radius=.7071067811865476+i,lo.applyMatrix4(t.matrixWorld),this.intersectsSphere(lo)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bf.x=l.normal.x>0?t.max.x:t.min.x,Bf.y=l.normal.y>0?t.max.y:t.min.y,Bf.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C0 extends ui{constructor(t=[],i=Ur,s,l,c,f,h,m,p,_){super(t,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rl extends ui{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ol extends ui{constructor(t,i,s=Va,l,c,f,h=Zn,m=Zn,p,_=cs,v=1){if(_!==cs&&_!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class GS extends Ol{constructor(t,i=Va,s=Ur,l,c,f=Zn,h=Zn,m,p=cs){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class w0 extends ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ir extends ea{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Qn(p,3)),this.setAttribute("normal",new Qn(_,3)),this.setAttribute("uv",new Qn(v,2));function b(D,M,y,C,U,N,F,B,z,T,L){const pt=N/z,V=F/T,tt=N/2,st=F/2,rt=B/2,Z=z+1,O=T+1;let P=0,$=0;const mt=new j;for(let gt=0;gt<O;gt++){const I=gt*V-st;for(let q=0;q<Z;q++){const _t=q*pt-tt;mt[D]=_t*C,mt[M]=I*U,mt[y]=rt,p.push(mt.x,mt.y,mt.z),mt[D]=0,mt[M]=0,mt[y]=B>0?1:-1,_.push(mt.x,mt.y,mt.z),v.push(q/z),v.push(1-gt/T),P+=1}}for(let gt=0;gt<T;gt++)for(let I=0;I<z;I++){const q=g+I+Z*gt,_t=g+I+Z*(gt+1),Ut=g+(I+1)+Z*(gt+1),qt=g+(I+1)+Z*gt;m.push(q,_t,qt),m.push(_t,Ut,qt),$+=6}h.addGroup(S,$,L),S+=$,g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class VS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){_e("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,S=(f-_)/g;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new we:new j);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new j,l=[],c=[],f=[],h=new j,m=new un;for(let S=0;S<=t;S++){const b=S/t;l[S]=this.getTangentAt(b,new j)}c[0]=new j,f[0]=new j;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Ce(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,b))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(Ce(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],S*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function D0(){let r=0,t=0,i=0,s=0;function l(c,f,h,m){r=c,t=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,_,v){let g=(f-c)/p-(h-c)/(p+_)+(h-f)/_,S=(h-f)/_-(m-f)/(_+v)+(m-h)/v;g*=_,S*=_,l(f,h,g,S)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const zf=new j,wm=new D0,Dm=new D0,Nm=new D0;class kS extends VS{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new j){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=l[(h-1)%c]:(zf.subVectors(l[0],l[1]).add(l[0]),p=zf);const v=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(zf.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=zf),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(v),S),D=Math.pow(v.distanceToSquared(g),S),M=Math.pow(g.distanceToSquared(_),S);D<1e-4&&(D=1),b<1e-4&&(b=D),M<1e-4&&(M=D),wm.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,b,D,M),Dm.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,b,D,M),Nm.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,b,D,M)}else this.curveType==="catmullrom"&&(wm.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),Dm.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),Nm.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(wm.calc(m),Dm.calc(m),Nm.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new j().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class ss extends ea{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=t/h,g=i/m,S=[],b=[],D=[],M=[];for(let y=0;y<_;y++){const C=y*g-f;for(let U=0;U<p;U++){const N=U*v-c;b.push(N,-C,0),D.push(0,0,1),M.push(U/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let C=0;C<h;C++){const U=C+p*y,N=C+p*(y+1),F=C+1+p*(y+1),B=C+1+p*y;S.push(U,N,B),S.push(N,F,B)}this.setIndex(S),this.setAttribute("position",new Qn(b,3)),this.setAttribute("normal",new Qn(D,3)),this.setAttribute("uv",new Qn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.width,t.height,t.widthSegments,t.heightSegments)}}class ch extends ea{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,S=new j,b=new we;for(let D=0;D<=l;D++){for(let M=0;M<=s;M++){const y=c+M/s*f;S.x=v*Math.cos(y),S.y=v*Math.sin(y),m.push(S.x,S.y,S.z),p.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,_.push(b.x,b.y)}v+=g}for(let D=0;D<l;D++){const M=D*(s+1);for(let y=0;y<s;y++){const C=y+M,U=C,N=C+s+1,F=C+s+2,B=C+1;h.push(U,N,B),h.push(N,F,B)}}this.setIndex(h),this.setAttribute("position",new Qn(m,3)),this.setAttribute("normal",new Qn(p,3)),this.setAttribute("uv",new Qn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ch(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class uh extends ea{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const _=[],v=new j,g=new j,S=[],b=[],D=[],M=[];for(let y=0;y<=s;y++){const C=[],U=y/s;let N=0;y===0&&f===0?N=.5/i:y===s&&m===Math.PI&&(N=-.5/i);for(let F=0;F<=i;F++){const B=F/i;v.x=-t*Math.cos(l+B*c)*Math.sin(f+U*h),v.y=t*Math.cos(f+U*h),v.z=t*Math.sin(l+B*c)*Math.sin(f+U*h),b.push(v.x,v.y,v.z),g.copy(v).normalize(),D.push(g.x,g.y,g.z),M.push(B+N,1-U),C.push(p++)}_.push(C)}for(let y=0;y<s;y++)for(let C=0;C<i;C++){const U=_[y][C+1],N=_[y][C],F=_[y+1][C],B=_[y+1][C+1];(y!==0||f>0)&&S.push(U,N,B),(y!==s-1||m<Math.PI)&&S.push(N,F,B)}this.setIndex(S),this.setAttribute("position",new Qn(b,3)),this.setAttribute("normal",new Qn(D,3)),this.setAttribute("uv",new Qn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Il(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(_e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ci(r){const t={};for(let i=0;i<r.length;i++){const s=Il(r[i]);for(const l in s)t[l]=s[l]}return t}function wE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function XS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}const WS={clone:Il,merge:Ci};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends To{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=NE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Il(t.uniforms),this.uniformsGroups=wE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class YS extends ka{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vs extends To{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class go extends Vs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qS extends To{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=jd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jS extends To{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZS extends To{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bl extends dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class KS extends Bl{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Lm=new un,_x=new j,vx=new j;class N0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;_x.setFromMatrixPosition(t.matrixWorld),i.position.copy(_x),vx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(vx),i.updateMatrixWorld(),Lm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lm,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Ll||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Lm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hf=new j,Gf=new Ys,is=new j;class L0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=za,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hf,Gf,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hf,Gf,is.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Hf,Gf,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hf,Gf,is.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new j,xx=new we,Sx=new we;class wi extends L0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ul*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cr.x,Cr.y).multiplyScalar(-t/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Cr.x,Cr.y).multiplyScalar(-t/Cr.z)}getViewSize(t,i){return this.getViewBounds(t,xx,Sx),i.subVectors(Sx,xx)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(jc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class LE extends N0{constructor(){super(new wi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Ul*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class td extends Bl{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new LE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class UE extends N0{constructor(){super(new wi(90,1,.5,500)),this.isPointLightShadow=!0}}class Kc extends Bl{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new UE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class fh extends L0{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class OE extends N0{constructor(){super(new fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e0 extends Bl{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new OE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class QS extends Bl{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const vl=-90,xl=1;class JS extends dn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(vl,xl,t,i);l.layers=this.layers,this.add(l);const c=new wi(vl,xl,t,i);c.layers=this.layers,this.add(c);const f=new wi(vl,xl,t,i);f.layers=this.layers,this.add(f);const h=new wi(vl,xl,t,i);h.layers=this.layers,this.add(h);const m=new wi(vl,xl,t,i);m.layers=this.layers,this.add(m);const p=new wi(vl,xl,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===za)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ll)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,S),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class $S extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const yx=new un;class ty{constructor(t,i,s=0,l=1/0){this.ray=new A0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ge("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return yx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yx),this}intersectObject(t,i=!0,s=[]){return n0(t,this,s,i),s.sort(Mx),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)n0(t[l],this,s,i);return s.sort(Mx),s}}function Mx(r,t){return r.distance-t.distance}function n0(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)n0(c[f],t,i,!0)}}class ey{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,_e("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Ex(r,t,i,s){const l=IE(s);switch(i){case x0:return r*t;case $d:return r*t/l.components*l.byteLength;case th:return r*t/l.components*l.byteLength;case Mo:return r*t*2/l.components*l.byteLength;case eh:return r*t*2/l.components*l.byteLength;case S0:return r*t*3/l.components*l.byteLength;case Sa:return r*t*4/l.components*l.byteLength;case nh:return r*t*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yc:case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pd:case gd:return Math.max(r,16)*Math.max(t,8)/4;case hd:case md:return Math.max(r,8)*Math.max(t,8)/2;case _d:case vd:case Sd:case yd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xd:case Md:case Ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Td:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case wd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Bd:case zd:case Hd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Gd:case Vd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IE(r){switch(r){case Bi:case m0:return{byteLength:1,components:1};case Dl:case g0:case ls:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case Va:case Kd:case xa:return{byteLength:4,components:1};case _0:case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?_e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);function ny(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function PE(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,b)=>S.start-b.start);let g=0;for(let S=1;S<v.length;S++){const b=v[g],D=v[S];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++g,v[g]=D)}v.length=g+1;for(let S=0,b=v.length;S<b;S++){const D=v[S];r.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var FE=`#ifdef USE_ALPHAHASH
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
}`,Re={alphahash_fragment:FE,alphahash_pars_fragment:BE,alphamap_fragment:zE,alphamap_pars_fragment:HE,alphatest_fragment:GE,alphatest_pars_fragment:VE,aomap_fragment:kE,aomap_pars_fragment:XE,batching_pars_vertex:WE,batching_vertex:YE,begin_vertex:qE,beginnormal_vertex:jE,bsdfs:ZE,iridescence_fragment:KE,bumpmap_pars_fragment:QE,clipping_planes_fragment:JE,clipping_planes_pars_fragment:$E,clipping_planes_pars_vertex:tb,clipping_planes_vertex:eb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:ab,color_vertex:sb,common:rb,cube_uv_reflection_fragment:ob,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:fb,emissivemap_pars_fragment:db,colorspace_fragment:hb,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:_b,envmap_pars_vertex:vb,envmap_physical_pars_fragment:wb,envmap_vertex:xb,fog_vertex:Sb,fog_pars_vertex:yb,fog_fragment:Mb,fog_pars_fragment:Eb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Tb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Db,lights_toon_pars_fragment:Nb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Ub,lights_physical_fragment:Ob,lights_physical_pars_fragment:Ib,lights_fragment_begin:Pb,lights_fragment_maps:Fb,lights_fragment_end:Bb,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Hb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Vb,map_fragment:kb,map_pars_fragment:Xb,map_particle_fragment:Wb,map_particle_pars_fragment:Yb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:jb,morphinstance_vertex:Zb,morphcolor_vertex:Kb,morphnormal_vertex:Qb,morphtarget_pars_vertex:Jb,morphtarget_vertex:$b,normal_fragment_begin:t1,normal_fragment_maps:e1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:a1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:c1,opaque_fragment:u1,packing:f1,premultiplied_alpha_fragment:d1,project_vertex:h1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:_1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:x1,shadowmap_vertex:S1,shadowmask_pars_fragment:y1,skinbase_vertex:M1,skinning_pars_vertex:E1,skinning_vertex:b1,skinnormal_vertex:T1,specularmap_fragment:A1,specularmap_pars_fragment:R1,tonemapping_fragment:C1,tonemapping_pars_fragment:w1,transmission_fragment:D1,transmission_pars_fragment:N1,uv_pars_fragment:L1,uv_pars_vertex:U1,uv_vertex:O1,worldpos_vertex:I1,background_vert:P1,background_frag:F1,backgroundCube_vert:B1,backgroundCube_frag:z1,cube_vert:H1,cube_frag:G1,depth_vert:V1,depth_frag:k1,distance_vert:X1,distance_frag:W1,equirect_vert:Y1,equirect_frag:q1,linedashed_vert:j1,linedashed_frag:Z1,meshbasic_vert:K1,meshbasic_frag:Q1,meshlambert_vert:J1,meshlambert_frag:$1,meshmatcap_vert:tT,meshmatcap_frag:eT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:aT,meshphong_frag:sT,meshphysical_vert:rT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:fT,shadow_vert:dT,shadow_frag:hT,sprite_vert:pT,sprite_frag:mT},Wt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Ba={basic:{uniforms:Ci([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Ci([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Ci([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Ci([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Ci([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new de(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Ci([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Ci([Wt.points,Wt.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Ci([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Ci([Wt.common,Wt.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Ci([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Ci([Wt.sprite,Wt.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distance:{uniforms:Ci([Wt.common,Wt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distance_vert,fragmentShader:Re.distance_frag},shadow:{uniforms:Ci([Wt.lights,Wt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ba.physical={uniforms:Ci([Ba.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Vf={r:0,b:0,g:0},co=new ta,gT=new un;function _T(r,t,i,s,l,c){const f=new de(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(C){let U=C.isScene===!0?C.background:null;if(U&&U.isTexture){const N=C.backgroundBlurriness>0;U=t.get(U,N)}return U}function b(C){let U=!1;const N=S(C);N===null?M(f,h):N&&N.isColor&&(M(N,1),U=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(C,U){const N=S(U);N&&(N.isCubeTexture||N.mapping===eu)?(p===void 0&&(p=new He(new Ir(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Il(Ba.backgroundCube.uniforms),vertexShader:Ba.backgroundCube.vertexShader,fragmentShader:Ba.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),co.copy(U.backgroundRotation),co.x*=-1,co.y*=-1,co.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(co)),p.material.toneMapped=Ve.getTransfer(N.colorSpace)!==tn,(_!==N||v!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new He(new ss(2,2),new ka({name:"BackgroundMaterial",uniforms:Il(Ba.background.uniforms),vertexShader:Ba.background.vertexShader,fragmentShader:Ba.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Ve.getTransfer(N.colorSpace)!==tn,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,U){C.getRGB(Vf,XS(r)),i.buffers.color.setClear(Vf.r,Vf.g,Vf.b,U,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,U=1){f.set(C),h=U,M(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,M(f,h)},render:b,addToRenderList:D,dispose:y}}function vT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(V,tt,st,rt,Z){let O=!1;const P=v(V,rt,st,tt);c!==P&&(c=P,p(c.object)),O=S(V,rt,st,Z),O&&b(V,rt,st,Z),Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,N(V,tt,st,rt),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function _(V){return r.deleteVertexArray(V)}function v(V,tt,st,rt){const Z=rt.wireframe===!0;let O=s[tt.id];O===void 0&&(O={},s[tt.id]=O);const P=V.isInstancedMesh===!0?V.id:0;let $=O[P];$===void 0&&($={},O[P]=$);let mt=$[st.id];mt===void 0&&(mt={},$[st.id]=mt);let gt=mt[Z];return gt===void 0&&(gt=g(m()),mt[Z]=gt),gt}function g(V){const tt=[],st=[],rt=[];for(let Z=0;Z<i;Z++)tt[Z]=0,st[Z]=0,rt[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:st,attributeDivisors:rt,object:V,attributes:{},index:null}}function S(V,tt,st,rt){const Z=c.attributes,O=tt.attributes;let P=0;const $=st.getAttributes();for(const mt in $)if($[mt].location>=0){const I=Z[mt];let q=O[mt];if(q===void 0&&(mt==="instanceMatrix"&&V.instanceMatrix&&(q=V.instanceMatrix),mt==="instanceColor"&&V.instanceColor&&(q=V.instanceColor)),I===void 0||I.attribute!==q||q&&I.data!==q.data)return!0;P++}return c.attributesNum!==P||c.index!==rt}function b(V,tt,st,rt){const Z={},O=tt.attributes;let P=0;const $=st.getAttributes();for(const mt in $)if($[mt].location>=0){let I=O[mt];I===void 0&&(mt==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),mt==="instanceColor"&&V.instanceColor&&(I=V.instanceColor));const q={};q.attribute=I,I&&I.data&&(q.data=I.data),Z[mt]=q,P++}c.attributes=Z,c.attributesNum=P,c.index=rt}function D(){const V=c.newAttributes;for(let tt=0,st=V.length;tt<st;tt++)V[tt]=0}function M(V){y(V,0)}function y(V,tt){const st=c.newAttributes,rt=c.enabledAttributes,Z=c.attributeDivisors;st[V]=1,rt[V]===0&&(r.enableVertexAttribArray(V),rt[V]=1),Z[V]!==tt&&(r.vertexAttribDivisor(V,tt),Z[V]=tt)}function C(){const V=c.newAttributes,tt=c.enabledAttributes;for(let st=0,rt=tt.length;st<rt;st++)tt[st]!==V[st]&&(r.disableVertexAttribArray(st),tt[st]=0)}function U(V,tt,st,rt,Z,O,P){P===!0?r.vertexAttribIPointer(V,tt,st,Z,O):r.vertexAttribPointer(V,tt,st,rt,Z,O)}function N(V,tt,st,rt){D();const Z=rt.attributes,O=st.getAttributes(),P=tt.defaultAttributeValues;for(const $ in O){const mt=O[$];if(mt.location>=0){let gt=Z[$];if(gt===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(gt=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(gt=V.instanceColor)),gt!==void 0){const I=gt.normalized,q=gt.itemSize,_t=t.get(gt);if(_t===void 0)continue;const Ut=_t.buffer,qt=_t.type,et=_t.bytesPerElement,St=qt===r.INT||qt===r.UNSIGNED_INT||gt.gpuType===Kd;if(gt.isInterleavedBufferAttribute){const Lt=gt.data,jt=Lt.stride,ie=gt.offset;if(Lt.isInstancedInterleavedBuffer){for(let fe=0;fe<mt.locationSize;fe++)y(mt.location+fe,Lt.meshPerAttribute);V.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let fe=0;fe<mt.locationSize;fe++)M(mt.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let fe=0;fe<mt.locationSize;fe++)U(mt.location+fe,q/mt.locationSize,qt,I,jt*et,(ie+q/mt.locationSize*fe)*et,St)}else{if(gt.isInstancedBufferAttribute){for(let Lt=0;Lt<mt.locationSize;Lt++)y(mt.location+Lt,gt.meshPerAttribute);V.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Lt=0;Lt<mt.locationSize;Lt++)M(mt.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let Lt=0;Lt<mt.locationSize;Lt++)U(mt.location+Lt,q/mt.locationSize,qt,I,q*et,q/mt.locationSize*Lt*et,St)}}else if(P!==void 0){const I=P[$];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(mt.location,I);break;case 3:r.vertexAttrib3fv(mt.location,I);break;case 4:r.vertexAttrib4fv(mt.location,I);break;default:r.vertexAttrib1fv(mt.location,I)}}}}C()}function F(){L();for(const V in s){const tt=s[V];for(const st in tt){const rt=tt[st];for(const Z in rt){const O=rt[Z];for(const P in O)_(O[P].object),delete O[P];delete rt[Z]}}delete s[V]}}function B(V){if(s[V.id]===void 0)return;const tt=s[V.id];for(const st in tt){const rt=tt[st];for(const Z in rt){const O=rt[Z];for(const P in O)_(O[P].object),delete O[P];delete rt[Z]}}delete s[V.id]}function z(V){for(const tt in s){const st=s[tt];for(const rt in st){const Z=st[rt];if(Z[V.id]===void 0)continue;const O=Z[V.id];for(const P in O)_(O[P].object),delete O[P];delete Z[V.id]}}}function T(V){for(const tt in s){const st=s[tt],rt=V.isInstancedMesh===!0?V.id:0,Z=st[rt];if(Z!==void 0){for(const O in Z){const P=Z[O];for(const $ in P)_(P[$].object),delete P[$];delete Z[O]}delete st[rt],Object.keys(st).length===0&&delete s[tt]}}}function L(){pt(),f=!0,c!==l&&(c=l,p(c.object))}function pt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:pt,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:M,disableUnusedAttributes:C}}function xT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let S=0;for(let b=0;b<v;b++)S+=_[b];i.update(S,s,1)}function m(p,_,v,g){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)f(p[b],_[b],g[b]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let b=0;for(let D=0;D<v;D++)b+=_[D]*g[D];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ST(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Sa&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const T=z===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Bi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==xa&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(_e("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:C,maxVaryings:U,maxFragmentUniforms:N,maxSamples:F,samples:B}}function yT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new wr,h=new be,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const b=v.clippingPlanes,D=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,U=C*4;let N=y.clippingState||null;m.value=N,N=_(b,g,U,S);for(let F=0;F!==U;++F)N[F]=i[F];y.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,S,b){const D=v!==null?v.length:0;let M=null;if(D!==0){if(M=m.value,b!==!0||M===null){const y=S+D*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<y)&&(M=new Float32Array(y));for(let U=0,N=S;U!==D;++U,N+=4)f.copy(v[U]).applyMatrix4(C,h),f.normal.toArray(M,N),M[N+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}const Lr=4,bx=[.125,.215,.35,.446,.526,.582],_o=20,MT=256,Uc=new fh,Tx=new de;let Um=null,Om=0,Im=0,Pm=!1;const ET=new j;class Yd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=ET}=c;Um=this._renderer.getRenderTarget(),Om=this._renderer.getActiveCubeFace(),Im=this._renderer.getActiveMipmapLevel(),Pm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Um,Om,Im),this._renderer.xr.enabled=Pm,t.scissorTest=!1,Sl(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ur||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Um=this._renderer.getRenderTarget(),Om=this._renderer.getActiveCubeFace(),Im=this._renderer.getActiveMipmapLevel(),Pm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:ls,format:Sa,colorSpace:Eo,depthBuffer:!1},l=Ax(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ax(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bT(c)),this._blurMaterial=AT(c,t,i),this._ggxMaterial=TT(c,t,i)}return l}_compileMaterial(t){const i=new He(new ea,t);this._renderer.compile(i,Uc)}_sceneToCubeUV(t,i,s,l,c){const m=new wi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(Tx),v.toneMapping=Ha,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new Ir,new tu({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let y=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,y=!0):(M.color.copy(Tx),y=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):N===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const F=this._cubeSize;Sl(l,N*F,U>2?F:0,F,F),v.setRenderTarget(l),y&&v.render(D,m),v.render(t,m)}v.toneMapping=S,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ur||t.mapping===yo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Sl(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Uc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:b}=this,D=this._sizeLods[s],M=3*D*(s>b-Lr?s-b+Lr:0),y=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=b-i,Sl(c,M,y,3*D,2*D),l.setRenderTarget(c),l.render(h,Uc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Sl(t,M,y,3*D,2*D),l.setRenderTarget(t),l.render(h,Uc)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*_o-1),D=c/b,M=isFinite(c)?1+Math.floor(_*D):_o;M>_o&&_e(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${_o}`);const y=[];let C=0;for(let z=0;z<_o;++z){const T=z/D,L=Math.exp(-T*T/2);y.push(L),z===0?C+=L:z<M&&(C+=2*L)}for(let z=0;z<y.length;z++)y[z]=y[z]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:U}=this;g.dTheta.value=b,g.mipInt.value=U-s;const N=this._sizeLods[l],F=3*N*(l>U-Lr?l-U+Lr:0),B=4*(this._cubeSize-N);Sl(i,F,B,3*N,2*N),m.setRenderTarget(i),m.render(v,Uc)}}function bT(r){const t=[],i=[],s=[];let l=r;const c=r-Lr+1+bx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-Lr?m=bx[f-r+Lr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,b=6,D=3,M=2,y=1,C=new Float32Array(D*b*S),U=new Float32Array(M*b*S),N=new Float32Array(y*b*S);for(let B=0;B<S;B++){const z=B%3*2/3-1,T=B>2?0:-1,L=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(L,D*b*B),U.set(g,M*b*B);const pt=[B,B,B,B,B,B];N.set(pt,y*b*B)}const F=new ea;F.setAttribute("position",new ya(C,D)),F.setAttribute("uv",new ya(U,M)),F.setAttribute("faceIndex",new ya(N,y)),s.push(new He(F,null)),l>Lr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Ax(r,t,i){const s=new Ga(r,t,i);return s.texture.mapping=eu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Sl(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function TT(r,t,i){return new ka({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dh(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function AT(r,t,i){const s=new Float32Array(_o),l=new j(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:_o,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:dh(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function Rx(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function Cx(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}class U0 extends Ga{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new C0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ir(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:Il(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:gi,blending:os});c.uniforms.tEquirect.value=i;const f=new He(l,c),h=i.minFilter;return i.minFilter===ks&&(i.minFilter=Kn),new JS(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function RT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Kf||S===Qf)if(t.has(g)){const b=t.get(g).texture;return h(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const D=new U0(b.height);return D.fromEquirectangularTexture(r,g),t.set(g,D),g.addEventListener("dispose",p),h(D.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,b=S===Kf||S===Qf,D=S===Ur||S===yo;if(b||D){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new Yd(r)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return b&&C&&C.height>0||D&&C&&m(C)?(s===null&&(s=new Yd(r)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function h(g,S){return S===Kf?g.mapping=Ur:S===Qf&&(g.mapping=yo),g}function m(g){let S=0;const b=6;for(let D=0;D<b;D++)g[D]!==void 0&&S++;return S===b}function p(g){const S=g.target;S.removeEventListener("dispose",p);const b=t.get(S);b!==void 0&&(t.delete(S),b.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const b=i.get(S);b!==void 0&&(i.delete(S),b.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function CT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Jc("WebGLRenderer: "+s+" extension not supported."),l}}}function wT(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)t.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,b=v.attributes.position;let D=0;if(b===void 0)return;if(S!==null){const C=S.array;D=S.version;for(let U=0,N=C.length;U<N;U+=3){const F=C[U+0],B=C[U+1],z=C[U+2];g.push(F,B,B,z,z,F)}}else{const C=b.array;D=b.version;for(let U=0,N=C.length/3-1;U<N;U+=3){const F=U+0,B=U+1,z=U+2;g.push(F,B,B,z,z,F)}}const M=new(b.count>=65535?T0:b0)(g,1);M.version=D;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function DT(r,t,i){let s;function l(g){s=g}let c,f;function h(g){c=g.type,f=g.bytesPerElement}function m(g,S){r.drawElements(s,S,c,g*f),i.update(S,s,1)}function p(g,S,b){b!==0&&(r.drawElementsInstanced(s,S,c,g*f,b),i.update(S,s,b))}function _(g,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,g,0,b);let M=0;for(let y=0;y<b;y++)M+=S[y];i.update(M,s,1)}function v(g,S,b,D){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<g.length;y++)p(g[y]/f,S[y],D[y]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,g,0,D,0,b);let y=0;for(let C=0;C<b;C++)y+=S[C]*D[C];i.update(y,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function NT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ge("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function LT(r,t,i){const s=new WeakMap,l=new bn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let pt=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",pt)};var S=pt;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),D===!0&&(N=2),M===!0&&(N=3);let F=h.attributes.position.count*N,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*v),T=new M0(z,F,B,v);T.type=xa,T.needsUpdate=!0;const L=N*4;for(let V=0;V<v;V++){const tt=y[V],st=C[V],rt=U[V],Z=F*B*4*V;for(let O=0;O<tt.count;O++){const P=O*L;b===!0&&(l.fromBufferAttribute(tt,O),z[Z+P+0]=l.x,z[Z+P+1]=l.y,z[Z+P+2]=l.z,z[Z+P+3]=0),D===!0&&(l.fromBufferAttribute(st,O),z[Z+P+4]=l.x,z[Z+P+5]=l.y,z[Z+P+6]=l.z,z[Z+P+7]=0),M===!0&&(l.fromBufferAttribute(rt,O),z[Z+P+8]=l.x,z[Z+P+9]=l.y,z[Z+P+10]=l.z,z[Z+P+11]=rt.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new we(F,B)},s.set(h,g),h.addEventListener("dispose",pt)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const D=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function UT(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const OT={[l0]:"LINEAR_TONE_MAPPING",[c0]:"REINHARD_TONE_MAPPING",[u0]:"CINEON_TONE_MAPPING",[Zd]:"ACES_FILMIC_TONE_MAPPING",[d0]:"AGX_TONE_MAPPING",[h0]:"NEUTRAL_TONE_MAPPING",[f0]:"CUSTOM_TONE_MAPPING"};function IT(r,t,i,s,l){const c=new Ga(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ga(t,i,{type:ls,depthBuffer:!1,stencilBuffer:!1}),h=new ea;h.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qn([0,2,0,0,2,0],2));const m=new YS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new He(h,m),_=new fh(-1,1,1,-1,0,1);let v=null,g=null,S=!1,b,D=null,M=[],y=!1;this.setSize=function(C,U){c.setSize(C,U),f.setSize(C,U);for(let N=0;N<M.length;N++){const F=M[N];F.setSize&&F.setSize(C,U)}},this.setEffects=function(C){M=C,y=M.length>0&&M[0].isRenderPass===!0;const U=c.width,N=c.height;for(let F=0;F<M.length;F++){const B=M[F];B.setSize&&B.setSize(U,N)}},this.begin=function(C,U){if(S||C.toneMapping===Ha&&M.length===0)return!1;if(D=U,U!==null){const N=U.width,F=U.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return y===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=Ha,!0},this.hasRenderPass=function(){return y},this.end=function(C,U){C.toneMapping=b,S=!0;let N=c,F=f;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(C,F,N,U),z.needsSwap!==!1)){const T=N;N=F,F=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},Ve.getTransfer(v)===tn&&(m.defines.SRGB_TRANSFER="");const B=OT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(D),C.render(p,_),D=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const iy=new ui,i0=new Ol(1,1),ay=new M0,sy=new BS,ry=new C0,wx=[],Dx=[],Nx=new Float32Array(16),Lx=new Float32Array(9),Ux=new Float32Array(4);function zl(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=wx[l];if(c===void 0&&(c=new Float32Array(l),wx[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function Vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function kn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function hh(r,t){let i=Dx[t];i===void 0&&(i=new Int32Array(t),Dx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function PT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Vn(i,t))return;r.uniform2fv(this.addr,t),kn(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Vn(i,t))return;r.uniform3fv(this.addr,t),kn(i,t)}}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Vn(i,t))return;r.uniform4fv(this.addr,t),kn(i,t)}}function HT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),kn(i,t)}else{if(Vn(i,s))return;Ux.set(s),r.uniformMatrix2fv(this.addr,!1,Ux),kn(i,s)}}function GT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),kn(i,t)}else{if(Vn(i,s))return;Lx.set(s),r.uniformMatrix3fv(this.addr,!1,Lx),kn(i,s)}}function VT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),kn(i,t)}else{if(Vn(i,s))return;Nx.set(s),r.uniformMatrix4fv(this.addr,!1,Nx),kn(i,s)}}function kT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function XT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Vn(i,t))return;r.uniform2iv(this.addr,t),kn(i,t)}}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Vn(i,t))return;r.uniform3iv(this.addr,t),kn(i,t)}}function YT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Vn(i,t))return;r.uniform4iv(this.addr,t),kn(i,t)}}function qT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Vn(i,t))return;r.uniform2uiv(this.addr,t),kn(i,t)}}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Vn(i,t))return;r.uniform3uiv(this.addr,t),kn(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Vn(i,t))return;r.uniform4uiv(this.addr,t),kn(i,t)}}function QT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(i0.compareFunction=i.isReversedDepthBuffer()?sh:ah,c=i0):c=iy,i.setTexture2D(t||c,l)}function JT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||sy,l)}function $T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ry,l)}function tA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ay,l)}function eA(r){switch(r){case 5126:return PT;case 35664:return FT;case 35665:return BT;case 35666:return zT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return kT;case 35667:case 35671:return XT;case 35668:case 35672:return WT;case 35669:case 35673:return YT;case 5125:return qT;case 36294:return jT;case 36295:return ZT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return tA}}function nA(r,t){r.uniform1fv(this.addr,t)}function iA(r,t){const i=zl(t,this.size,2);r.uniform2fv(this.addr,i)}function aA(r,t){const i=zl(t,this.size,3);r.uniform3fv(this.addr,i)}function sA(r,t){const i=zl(t,this.size,4);r.uniform4fv(this.addr,i)}function rA(r,t){const i=zl(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function oA(r,t){const i=zl(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function lA(r,t){const i=zl(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function cA(r,t){r.uniform1iv(this.addr,t)}function uA(r,t){r.uniform2iv(this.addr,t)}function fA(r,t){r.uniform3iv(this.addr,t)}function dA(r,t){r.uniform4iv(this.addr,t)}function hA(r,t){r.uniform1uiv(this.addr,t)}function pA(r,t){r.uniform2uiv(this.addr,t)}function mA(r,t){r.uniform3uiv(this.addr,t)}function gA(r,t){r.uniform4uiv(this.addr,t)}function _A(r,t,i){const s=this.cache,l=t.length,c=hh(i,l);Vn(s,c)||(r.uniform1iv(this.addr,c),kn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=i0:f=iy;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function vA(r,t,i){const s=this.cache,l=t.length,c=hh(i,l);Vn(s,c)||(r.uniform1iv(this.addr,c),kn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||sy,c[f])}function xA(r,t,i){const s=this.cache,l=t.length,c=hh(i,l);Vn(s,c)||(r.uniform1iv(this.addr,c),kn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||ry,c[f])}function SA(r,t,i){const s=this.cache,l=t.length,c=hh(i,l);Vn(s,c)||(r.uniform1iv(this.addr,c),kn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||ay,c[f])}function yA(r){switch(r){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return sA;case 35674:return rA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}class MA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=eA(i.type)}}class EA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yA(i.type)}}class bA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Fm=/(\w+)(\])?(\[|\.)?/g;function Ox(r,t){r.seq.push(t),r.map[t.id]=t}function TA(r,t,i){const s=r.name,l=s.length;for(Fm.lastIndex=0;;){const c=Fm.exec(s),f=Fm.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Ox(i,p===void 0?new MA(h,r,t):new EA(h,r,t));break}else{let v=i.map[h];v===void 0&&(v=new bA(h),Ox(i,v)),i=v}}}class ed{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);TA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Ix(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const AA=37297;let RA=0;function CA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const Px=new be;function wA(r){Ve._getMatrix(Px,Ve.workingColorSpace,r);const t=`mat3( ${Px.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(r)){case Qc:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return _e("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Fx(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+CA(r.getShaderSource(t),h)}else return c}function DA(r,t){const i=wA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const NA={[l0]:"Linear",[c0]:"Reinhard",[u0]:"Cineon",[Zd]:"ACESFilmic",[d0]:"AgX",[h0]:"Neutral",[f0]:"Custom"};function LA(r,t){const i=NA[t];return i===void 0?(_e("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const kf=new j;function UA(){Ve.getLuminanceCoefficients(kf);const r=kf.x.toFixed(4),t=kf.y.toFixed(4),i=kf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gc).join(`
`)}function IA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function PA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Gc(r){return r!==""}function Bx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FA=/^[ \t]*#include +<([\w\d./]+)>/gm;function a0(r){return r.replace(FA,zA)}const BA=new Map;function zA(r,t){let i=Re[t];if(i===void 0){const s=BA.get(t);if(s!==void 0)i=Re[s],_e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return a0(i)}const HA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hx(r){return r.replace(HA,GA)}function GA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Gx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const VA={[vo]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function kA(r){return VA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XA={[Ur]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function WA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":XA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const YA={[yo]:"ENVMAP_MODE_REFRACTION"};function qA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":YA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jA={[jd]:"ENVMAP_BLENDING_MULTIPLY",[ES]:"ENVMAP_BLENDING_MIX",[bS]:"ENVMAP_BLENDING_ADD"};function ZA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":jA[r.combine]||"ENVMAP_BLENDING_NONE"}function KA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function QA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=kA(i),p=WA(i),_=qA(i),v=ZA(i),g=KA(i),S=OA(i),b=IA(c),D=l.createProgram();let M,y,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Gc).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Gc).join(`
`),y.length>0&&(y+=`
`)):(M=[Gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gc).join(`
`),y=[Gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?Re.tonemapping_pars_fragment:"",i.toneMapping!==Ha?LA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,DA("linearToOutputTexel",i.outputColorSpace),UA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Gc).join(`
`)),f=a0(f),f=Bx(f,i),f=zx(f,i),h=a0(h),h=Bx(h,i),h=zx(h,i),f=Hx(f),h=Hx(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=C+M+f,N=C+y+h,F=Ix(l,l.VERTEX_SHADER,U),B=Ix(l,l.FRAGMENT_SHADER,N);l.attachShader(D,F),l.attachShader(D,B),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function z(V){if(r.debug.checkShaderErrors){const tt=l.getProgramInfoLog(D)||"",st=l.getShaderInfoLog(F)||"",rt=l.getShaderInfoLog(B)||"",Z=tt.trim(),O=st.trim(),P=rt.trim();let $=!0,mt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,F,B);else{const gt=Fx(l,F,"vertex"),I=Fx(l,B,"fragment");Ge("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+gt+`
`+I)}else Z!==""?_e("WebGLProgram: Program Info Log:",Z):(O===""||P==="")&&(mt=!1);mt&&(V.diagnostics={runnable:$,programLog:Z,vertexShader:{log:O,prefix:M},fragmentShader:{log:P,prefix:y}})}l.deleteShader(F),l.deleteShader(B),T=new ed(l,D),L=PA(l,D)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let pt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pt===!1&&(pt=l.getProgramParameter(D,AA)),pt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=RA++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=F,this.fragmentShader=B,this}let JA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new t2(t),i.set(t,s)),s}}class t2{constructor(t){this.id=JA++,this.code=t,this.usedTimes=0}}function e2(r,t,i,s,l,c){const f=new oh,h=new $A,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,L,pt,V,tt){const st=V.fog,rt=tt.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,P=t.get(T.envMap||Z,O),$=P&&P.mapping===eu?P.image.height:null,mt=S[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&_e("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const gt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,I=gt!==void 0?gt.length:0;let q=0;rt.morphAttributes.position!==void 0&&(q=1),rt.morphAttributes.normal!==void 0&&(q=2),rt.morphAttributes.color!==void 0&&(q=3);let _t,Ut,qt,et;if(mt){const me=Ba[mt];_t=me.vertexShader,Ut=me.fragmentShader}else _t=T.vertexShader,Ut=T.fragmentShader,h.update(T),qt=h.getVertexShaderID(T),et=h.getFragmentShaderID(T);const St=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),jt=tt.isInstancedMesh===!0,ie=tt.isBatchedMesh===!0,fe=!!T.map,vn=!!T.matcap,Te=!!P,Me=!!T.aoMap,ze=!!T.lightMap,xe=!!T.bumpMap,hn=!!T.normalMap,k=!!T.displacementMap,pn=!!T.emissiveMap,Ue=!!T.metalnessMap,ot=!!T.roughnessMap,At=T.anisotropy>0,w=T.clearcoat>0,E=T.dispersion>0,H=T.iridescence>0,ct=T.sheen>0,xt=T.transmission>0,Q=At&&!!T.anisotropyMap,yt=w&&!!T.clearcoatMap,ht=w&&!!T.clearcoatNormalMap,Et=w&&!!T.clearcoatRoughnessMap,te=H&&!!T.iridescenceMap,Ct=H&&!!T.iridescenceThicknessMap,wt=ct&&!!T.sheenColorMap,Vt=ct&&!!T.sheenRoughnessMap,Ft=!!T.specularMap,zt=!!T.specularColorMap,le=!!T.specularIntensityMap,X=xt&&!!T.transmissionMap,Ot=xt&&!!T.thicknessMap,Nt=!!T.gradientMap,Ht=!!T.alphaMap,Tt=T.alphaTest>0,ft=!!T.alphaHash,kt=!!T.extensions;let ce=Ha;T.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(ce=r.toneMapping);const De={shaderID:mt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:Ut,defines:T.defines,customVertexShaderID:qt,customFragmentShaderID:et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ie,batchingColor:ie&&tt._colorsTexture!==null,instancing:jt,instancingColor:jt&&tt.instanceColor!==null,instancingMorph:jt&&tt.morphTexture!==null,outputColorSpace:St===null?r.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Eo,alphaToCoverage:!!T.alphaToCoverage,map:fe,matcap:vn,envMap:Te,envMapMode:Te&&P.mapping,envMapCubeUVHeight:$,aoMap:Me,lightMap:ze,bumpMap:xe,normalMap:hn,displacementMap:k,emissiveMap:pn,normalMapObjectSpace:hn&&T.normalMapType===RS,normalMapTangentSpace:hn&&T.normalMapType===ih,metalnessMap:Ue,roughnessMap:ot,anisotropy:At,anisotropyMap:Q,clearcoat:w,clearcoatMap:yt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Et,dispersion:E,iridescence:H,iridescenceMap:te,iridescenceThicknessMap:Ct,sheen:ct,sheenColorMap:wt,sheenRoughnessMap:Vt,specularMap:Ft,specularColorMap:zt,specularIntensityMap:le,transmission:xt,transmissionMap:X,thicknessMap:Ot,gradientMap:Nt,opaque:T.transparent===!1&&T.blending===xo&&T.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Tt,alphaHash:ft,combine:T.combine,mapUv:fe&&b(T.map.channel),aoMapUv:Me&&b(T.aoMap.channel),lightMapUv:ze&&b(T.lightMap.channel),bumpMapUv:xe&&b(T.bumpMap.channel),normalMapUv:hn&&b(T.normalMap.channel),displacementMapUv:k&&b(T.displacementMap.channel),emissiveMapUv:pn&&b(T.emissiveMap.channel),metalnessMapUv:Ue&&b(T.metalnessMap.channel),roughnessMapUv:ot&&b(T.roughnessMap.channel),anisotropyMapUv:Q&&b(T.anisotropyMap.channel),clearcoatMapUv:yt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:ht&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&b(T.sheenRoughnessMap.channel),specularMapUv:Ft&&b(T.specularMap.channel),specularColorMapUv:zt&&b(T.specularColorMap.channel),specularIntensityMapUv:le&&b(T.specularIntensityMap.channel),transmissionMapUv:X&&b(T.transmissionMap.channel),thicknessMapUv:Ot&&b(T.thicknessMap.channel),alphaMapUv:Ht&&b(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(hn||At),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!rt.attributes.uv&&(fe||Ht),fog:!!st,useFog:T.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||rt.attributes.normal===void 0&&hn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Lt,skinning:tt.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&pt.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:fe&&T.map.isVideoTexture===!0&&Ve.getTransfer(T.map.colorSpace)===tn,decodeVideoTextureEmissive:pn&&T.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(T.emissiveMap.colorSpace)===tn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zn,flipSided:T.side===gi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return De.vertexUv1s=m.has(1),De.vertexUv2s=m.has(2),De.vertexUv3s=m.has(3),m.clear(),De}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const pt in T.defines)L.push(pt),L.push(T.defines[pt]);return T.isRawShaderMaterial===!1&&(y(L,T),C(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function y(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function U(T){const L=S[T.type];let pt;if(L){const V=Ba[L];pt=WS.clone(V.uniforms)}else pt=T.uniforms;return pt}function N(T,L){let pt=_.get(L);return pt!==void 0?++pt.usedTimes:(pt=new QA(r,L,T,l),p.push(pt),_.set(L,pt)),pt}function F(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function B(T){h.remove(T)}function z(){h.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:U,acquireProgram:N,releaseProgram:F,releaseShaderCache:B,programs:p,dispose:z}}function n2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function i2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Vx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function kx(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,b,D,M,y){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:S,material:b,materialVariant:f(g),groupOrder:D,renderOrder:g.renderOrder,z:M,group:y},r[t]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=b,C.materialVariant=f(g),C.groupOrder=D,C.renderOrder=g.renderOrder,C.z=M,C.group=y),t++,C}function m(g,S,b,D,M,y){const C=h(g,S,b,D,M,y);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function p(g,S,b,D,M,y){const C=h(g,S,b,D,M,y);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,S){i.length>1&&i.sort(g||i2),s.length>1&&s.sort(S||Vx),l.length>1&&l.sort(S||Vx)}function v(){for(let g=t,S=r.length;g<S;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function a2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new kx,r.set(s,[f])):l>=c.length?(f=new kx,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function s2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new de};break;case"SpotLight":i={position:new j,direction:new j,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function r2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let o2=0;function l2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function c2(r){const t=new s2,i=r2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new un,f=new un;function h(p){let _=0,v=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let S=0,b=0,D=0,M=0,y=0,C=0,U=0,N=0,F=0,B=0,z=0;p.sort(l2);for(let L=0,pt=p.length;L<pt;L++){const V=p[L],tt=V.color,st=V.intensity,rt=V.distance;let Z=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Mo?Z=V.shadow.map.texture:Z=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=tt.r*st,v+=tt.g*st,g+=tt.b*st;else if(V.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(V.sh.coefficients[O],st);z++}else if(V.isDirectionalLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const P=V.shadow,$=i.get(V);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,s.directionalShadow[S]=$,s.directionalShadowMap[S]=Z,s.directionalShadowMatrix[S]=V.shadow.matrix,C++}s.directional[S]=O,S++}else if(V.isSpotLight){const O=t.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(tt).multiplyScalar(st),O.distance=rt,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,s.spot[D]=O;const P=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,P.updateMatrices(V),V.castShadow&&B++),s.spotLightMatrix[D]=P.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,s.spotShadow[D]=$,s.spotShadowMap[D]=Z,N++}D++}else if(V.isRectAreaLight){const O=t.get(V);O.color.copy(tt).multiplyScalar(st),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=O,M++}else if(V.isPointLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const P=V.shadow,$=i.get(V);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,$.shadowCameraNear=P.camera.near,$.shadowCameraFar=P.camera.far,s.pointShadow[b]=$,s.pointShadowMap[b]=Z,s.pointShadowMatrix[b]=V.shadow.matrix,U++}s.point[b]=O,b++}else if(V.isHemisphereLight){const O=t.get(V);O.skyColor.copy(V.color).multiplyScalar(st),O.groundColor.copy(V.groundColor).multiplyScalar(st),s.hemi[y]=O,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==S||T.pointLength!==b||T.spotLength!==D||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==C||T.numPointShadows!==U||T.numSpotShadows!==N||T.numSpotMaps!==F||T.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=D,s.rectArea.length=M,s.point.length=b,s.hemi.length=y,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=N+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,T.directionalLength=S,T.pointLength=b,T.spotLength=D,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=C,T.numPointShadows=U,T.numSpotShadows=N,T.numSpotMaps=F,T.numLightProbes=z,s.version=o2++)}function m(p,_){let v=0,g=0,S=0,b=0,D=0;const M=_.matrixWorldInverse;for(let y=0,C=p.length;y<C;y++){const U=p[y];if(U.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),v++}else if(U.isSpotLight){const N=s.spot[S];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(M),g++}else if(U.isHemisphereLight){const N=s.hemi[D];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(M),D++}}}return{setup:h,setupView:m,state:s}}function Xx(r){const t=new c2(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function u2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Xx(r),t.set(l,[h])):c>=f.length?(h=new Xx(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const f2=`void main() {
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
}`,h2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],p2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Wx=new un,Oc=new j,Bm=new j;function m2(r,t,i){let s=new lh;const l=new we,c=new we,f=new bn,h=new jS,m=new ZS,p={},_=i.maxTextureSize,v={[Ws]:gi,[gi]:Ws,[zn]:zn},g=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:f2,fragmentShader:d2}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const b=new ea;b.setAttribute("position",new ya(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new He(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let y=this.type;this.render=function(B,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;this.type===aS&&(_e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vo);const L=r.getRenderTarget(),pt=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),tt=r.state;tt.setBlending(os),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const st=y!==this.type;st&&z.traverse(function(rt){rt.material&&(Array.isArray(rt.material)?rt.material.forEach(Z=>Z.needsUpdate=!0):rt.material.needsUpdate=!0)});for(let rt=0,Z=B.length;rt<Z;rt++){const O=B[rt],P=O.shadow;if(P===void 0){_e("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const $=P.getFrameExtents();l.multiply($),c.copy(P.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/$.x),l.x=c.x*$.x,P.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/$.y),l.y=c.y*$.y,P.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=mt,P.map===null||st===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Tl){if(O.isPointLight){_e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ga(l.x,l.y,{format:Mo,type:ls,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new Ol(l.x,l.y,xa),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=cs,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Zn,P.map.depthTexture.magFilter=Zn}else O.isPointLight?(P.map=new U0(l.x),P.map.depthTexture=new GS(l.x,Va)):(P.map=new Ga(l.x,l.y),P.map.depthTexture=new Ol(l.x,l.y,Va)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=cs,this.type===vo?(P.map.depthTexture.compareFunction=mt?sh:ah,P.map.depthTexture.minFilter=Kn,P.map.depthTexture.magFilter=Kn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Zn,P.map.depthTexture.magFilter=Zn);P.camera.updateProjectionMatrix()}const gt=P.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<gt;I++){if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,I),r.clear();else{I===0&&(r.setRenderTarget(P.map),r.clear());const q=P.getViewport(I);f.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),tt.viewport(f)}if(O.isPointLight){const q=P.camera,_t=P.matrix,Ut=O.distance||q.far;Ut!==q.far&&(q.far=Ut,q.updateProjectionMatrix()),Oc.setFromMatrixPosition(O.matrixWorld),q.position.copy(Oc),Bm.copy(q.position),Bm.add(h2[I]),q.up.copy(p2[I]),q.lookAt(Bm),q.updateMatrixWorld(),_t.makeTranslation(-Oc.x,-Oc.y,-Oc.z),Wx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Wx,q.coordinateSystem,q.reversedDepth)}else P.updateMatrices(O);s=P.getFrustum(),N(z,T,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===Tl&&C(P,T),P.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(L,pt,V)};function C(B,z){const T=t.update(D);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ga(l.x,l.y,{format:Mo,type:ls})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,D,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,T,S,D,null)}function U(B,z,T,L){let pt=null;const V=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)pt=V;else if(pt=T.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const tt=pt.uuid,st=z.uuid;let rt=p[tt];rt===void 0&&(rt={},p[tt]=rt);let Z=rt[st];Z===void 0&&(Z=pt.clone(),rt[st]=Z,z.addEventListener("dispose",F)),pt=Z}if(pt.visible=z.visible,pt.wireframe=z.wireframe,L===Tl?pt.side=z.shadowSide!==null?z.shadowSide:z.side:pt.side=z.shadowSide!==null?z.shadowSide:v[z.side],pt.alphaMap=z.alphaMap,pt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,pt.map=z.map,pt.clipShadows=z.clipShadows,pt.clippingPlanes=z.clippingPlanes,pt.clipIntersection=z.clipIntersection,pt.displacementMap=z.displacementMap,pt.displacementScale=z.displacementScale,pt.displacementBias=z.displacementBias,pt.wireframeLinewidth=z.wireframeLinewidth,pt.linewidth=z.linewidth,T.isPointLight===!0&&pt.isMeshDistanceMaterial===!0){const tt=r.properties.get(pt);tt.light=T}return pt}function N(B,z,T,L,pt){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&pt===Tl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const st=t.update(B),rt=B.material;if(Array.isArray(rt)){const Z=st.groups;for(let O=0,P=Z.length;O<P;O++){const $=Z[O],mt=rt[$.materialIndex];if(mt&&mt.visible){const gt=U(B,mt,L,pt);B.onBeforeShadow(r,B,z,T,st,gt,$),r.renderBufferDirect(T,null,st,gt,B,$),B.onAfterShadow(r,B,z,T,st,gt,$)}}}else if(rt.visible){const Z=U(B,rt,L,pt);B.onBeforeShadow(r,B,z,T,st,Z,null),r.renderBufferDirect(T,null,st,Z,B,null),B.onAfterShadow(r,B,z,T,st,Z,null)}}const tt=B.children;for(let st=0,rt=tt.length;st<rt;st++)N(tt[st],z,T,L,pt)}function F(B){B.target.removeEventListener("dispose",F);for(const T in p){const L=p[T],pt=B.target.uuid;pt in L&&(L[pt].dispose(),delete L[pt])}}}function g2(r,t){function i(){let X=!1;const Ot=new bn;let Nt=null;const Ht=new bn(0,0,0,0);return{setMask:function(Tt){Nt!==Tt&&!X&&(r.colorMask(Tt,Tt,Tt,Tt),Nt=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,ft,kt,ce,De){De===!0&&(Tt*=ce,ft*=ce,kt*=ce),Ot.set(Tt,ft,kt,ce),Ht.equals(Ot)===!1&&(r.clearColor(Tt,ft,kt,ce),Ht.copy(Ot))},reset:function(){X=!1,Nt=null,Ht.set(-1,0,0,0)}}}function s(){let X=!1,Ot=!1,Nt=null,Ht=null,Tt=null;return{setReversed:function(ft){if(Ot!==ft){const kt=t.get("EXT_clip_control");ft?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Ot=ft;const ce=Tt;Tt=null,this.setClear(ce)}},getReversed:function(){return Ot},setTest:function(ft){ft?St(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(ft){Nt!==ft&&!X&&(r.depthMask(ft),Nt=ft)},setFunc:function(ft){if(Ot&&(ft=qM[ft]),Ht!==ft){switch(ft){case sd:r.depthFunc(r.NEVER);break;case rd:r.depthFunc(r.ALWAYS);break;case od:r.depthFunc(r.LESS);break;case So:r.depthFunc(r.LEQUAL);break;case ld:r.depthFunc(r.EQUAL);break;case cd:r.depthFunc(r.GEQUAL);break;case ud:r.depthFunc(r.GREATER);break;case fd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=ft}},setLocked:function(ft){X=ft},setClear:function(ft){Tt!==ft&&(Tt=ft,Ot&&(ft=1-ft),r.clearDepth(ft))},reset:function(){X=!1,Nt=null,Ht=null,Tt=null,Ot=!1}}}function l(){let X=!1,Ot=null,Nt=null,Ht=null,Tt=null,ft=null,kt=null,ce=null,De=null;return{setTest:function(me){X||(me?St(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(me){Ot!==me&&!X&&(r.stencilMask(me),Ot=me)},setFunc:function(me,Jn,fi){(Nt!==me||Ht!==Jn||Tt!==fi)&&(r.stencilFunc(me,Jn,fi),Nt=me,Ht=Jn,Tt=fi)},setOp:function(me,Jn,fi){(ft!==me||kt!==Jn||ce!==fi)&&(r.stencilOp(me,Jn,fi),ft=me,kt=Jn,ce=fi)},setLocked:function(me){X=me},setClear:function(me){De!==me&&(r.clearStencil(me),De=me)},reset:function(){X=!1,Ot=null,Nt=null,Ht=null,Tt=null,ft=null,kt=null,ce=null,De=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,S=[],b=null,D=!1,M=null,y=null,C=null,U=null,N=null,F=null,B=null,z=new de(0,0,0),T=0,L=!1,pt=null,V=null,tt=null,st=null,rt=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,P=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec($)[1]),O=P>=1):$.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=P>=2);let mt=null,gt={};const I=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),_t=new bn().fromArray(I),Ut=new bn().fromArray(q);function qt(X,Ot,Nt,Ht){const Tt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(X,ft),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<Nt;kt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Ot+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return ft}const et={};et[r.TEXTURE_2D]=qt(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),St(r.DEPTH_TEST),f.setFunc(So),xe(!1),hn(Ym),St(r.CULL_FACE),Me(os);function St(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Lt(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function jt(X,Ot){return v[X]!==Ot?(r.bindFramebuffer(X,Ot),v[X]=Ot,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ot),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function ie(X,Ot){let Nt=S,Ht=!1;if(X){Nt=g.get(Ot),Nt===void 0&&(Nt=[],g.set(Ot,Nt));const Tt=X.textures;if(Nt.length!==Tt.length||Nt[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,kt=Tt.length;ft<kt;ft++)Nt[ft]=r.COLOR_ATTACHMENT0+ft;Nt.length=Tt.length,Ht=!0}}else Nt[0]!==r.BACK&&(Nt[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(Nt)}function fe(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const vn={[Dr]:r.FUNC_ADD,[rS]:r.FUNC_SUBTRACT,[oS]:r.FUNC_REVERSE_SUBTRACT};vn[lS]=r.MIN,vn[cS]=r.MAX;const Te={[uS]:r.ZERO,[fS]:r.ONE,[dS]:r.SRC_COLOR,[id]:r.SRC_ALPHA,[vS]:r.SRC_ALPHA_SATURATE,[gS]:r.DST_COLOR,[pS]:r.DST_ALPHA,[hS]:r.ONE_MINUS_SRC_COLOR,[ad]:r.ONE_MINUS_SRC_ALPHA,[_S]:r.ONE_MINUS_DST_COLOR,[mS]:r.ONE_MINUS_DST_ALPHA,[xS]:r.CONSTANT_COLOR,[SS]:r.ONE_MINUS_CONSTANT_COLOR,[yS]:r.CONSTANT_ALPHA,[MS]:r.ONE_MINUS_CONSTANT_ALPHA};function Me(X,Ot,Nt,Ht,Tt,ft,kt,ce,De,me){if(X===os){D===!0&&(Lt(r.BLEND),D=!1);return}if(D===!1&&(St(r.BLEND),D=!0),X!==sS){if(X!==M||me!==L){if((y!==Dr||N!==Dr)&&(r.blendEquation(r.FUNC_ADD),y=Dr,N=Dr),me)switch(X){case xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qm:r.blendFunc(r.ONE,r.ONE);break;case jm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",X);break}else switch(X){case xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case jm:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zm:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",X);break}C=null,U=null,F=null,B=null,z.set(0,0,0),T=0,M=X,L=me}return}Tt=Tt||Ot,ft=ft||Nt,kt=kt||Ht,(Ot!==y||Tt!==N)&&(r.blendEquationSeparate(vn[Ot],vn[Tt]),y=Ot,N=Tt),(Nt!==C||Ht!==U||ft!==F||kt!==B)&&(r.blendFuncSeparate(Te[Nt],Te[Ht],Te[ft],Te[kt]),C=Nt,U=Ht,F=ft,B=kt),(ce.equals(z)===!1||De!==T)&&(r.blendColor(ce.r,ce.g,ce.b,De),z.copy(ce),T=De),M=X,L=!1}function ze(X,Ot){X.side===zn?Lt(r.CULL_FACE):St(r.CULL_FACE);let Nt=X.side===gi;Ot&&(Nt=!Nt),xe(Nt),X.blending===xo&&X.transparent===!1?Me(os):Me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ht=X.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),pn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function xe(X){pt!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),pt=X)}function hn(X){X!==eS?(St(r.CULL_FACE),X!==V&&(X===Ym?r.cullFace(r.BACK):X===nS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),V=X}function k(X){X!==tt&&(O&&r.lineWidth(X),tt=X)}function pn(X,Ot,Nt){X?(St(r.POLYGON_OFFSET_FILL),(st!==Ot||rt!==Nt)&&(st=Ot,rt=Nt,f.getReversed()&&(Ot=-Ot),r.polygonOffset(Ot,Nt))):Lt(r.POLYGON_OFFSET_FILL)}function Ue(X){X?St(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function ot(X){X===void 0&&(X=r.TEXTURE0+Z-1),mt!==X&&(r.activeTexture(X),mt=X)}function At(X,Ot,Nt){Nt===void 0&&(mt===null?Nt=r.TEXTURE0+Z-1:Nt=mt);let Ht=gt[Nt];Ht===void 0&&(Ht={type:void 0,texture:void 0},gt[Nt]=Ht),(Ht.type!==X||Ht.texture!==Ot)&&(mt!==Nt&&(r.activeTexture(Nt),mt=Nt),r.bindTexture(X,Ot||et[X]),Ht.type=X,Ht.texture=Ot)}function w(){const X=gt[mt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function ct(){try{r.texSubImage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function xt(){try{r.texSubImage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function yt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function ht(){try{r.texStorage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function Et(){try{r.texStorage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function te(){try{r.texImage2D(...arguments)}catch(X){Ge("WebGLState:",X)}}function Ct(){try{r.texImage3D(...arguments)}catch(X){Ge("WebGLState:",X)}}function wt(X){_t.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),_t.copy(X))}function Vt(X){Ut.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ut.copy(X))}function Ft(X,Ot){let Nt=p.get(Ot);Nt===void 0&&(Nt=new WeakMap,p.set(Ot,Nt));let Ht=Nt.get(X);Ht===void 0&&(Ht=r.getUniformBlockIndex(Ot,X.name),Nt.set(X,Ht))}function zt(X,Ot){const Ht=p.get(Ot).get(X);m.get(Ot)!==Ht&&(r.uniformBlockBinding(Ot,Ht,X.__bindingPointIndex),m.set(Ot,Ht))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},mt=null,gt={},v={},g=new WeakMap,S=[],b=null,D=!1,M=null,y=null,C=null,U=null,N=null,F=null,B=null,z=new de(0,0,0),T=0,L=!1,pt=null,V=null,tt=null,st=null,rt=null,_t.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:St,disable:Lt,bindFramebuffer:jt,drawBuffers:ie,useProgram:fe,setBlending:Me,setMaterial:ze,setFlipSided:xe,setCullFace:hn,setLineWidth:k,setPolygonOffset:pn,setScissorTest:Ue,activeTexture:ot,bindTexture:At,unbindTexture:w,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:te,texImage3D:Ct,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:ht,texStorage3D:Et,texSubImage2D:ct,texSubImage3D:xt,compressedTexSubImage2D:Q,compressedTexSubImage3D:yt,scissor:wt,viewport:Vt,reset:le}}function _2(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,_=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,E){return S?new OffscreenCanvas(w,E):Wd("canvas")}function D(w,E,H){let ct=1;const xt=At(w);if((xt.width>H||xt.height>H)&&(ct=H/Math.max(xt.width,xt.height)),ct<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Q=Math.floor(ct*xt.width),yt=Math.floor(ct*xt.height);v===void 0&&(v=b(Q,yt));const ht=E?b(Q,yt):v;return ht.width=Q,ht.height=yt,ht.getContext("2d").drawImage(w,0,0,Q,yt),_e("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+Q+"x"+yt+")."),ht}else return"data"in w&&_e("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),w;return w}function M(w){return w.generateMipmaps}function y(w){r.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(w,E,H,ct,xt=!1){if(w!==null){if(r[w]!==void 0)return r[w];_e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=E;if(E===r.RED&&(H===r.FLOAT&&(Q=r.R32F),H===r.HALF_FLOAT&&(Q=r.R16F),H===r.UNSIGNED_BYTE&&(Q=r.R8)),E===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Q=r.R8UI),H===r.UNSIGNED_SHORT&&(Q=r.R16UI),H===r.UNSIGNED_INT&&(Q=r.R32UI),H===r.BYTE&&(Q=r.R8I),H===r.SHORT&&(Q=r.R16I),H===r.INT&&(Q=r.R32I)),E===r.RG&&(H===r.FLOAT&&(Q=r.RG32F),H===r.HALF_FLOAT&&(Q=r.RG16F),H===r.UNSIGNED_BYTE&&(Q=r.RG8)),E===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Q=r.RG8UI),H===r.UNSIGNED_SHORT&&(Q=r.RG16UI),H===r.UNSIGNED_INT&&(Q=r.RG32UI),H===r.BYTE&&(Q=r.RG8I),H===r.SHORT&&(Q=r.RG16I),H===r.INT&&(Q=r.RG32I)),E===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),H===r.UNSIGNED_INT&&(Q=r.RGB32UI),H===r.BYTE&&(Q=r.RGB8I),H===r.SHORT&&(Q=r.RGB16I),H===r.INT&&(Q=r.RGB32I)),E===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),H===r.UNSIGNED_INT&&(Q=r.RGBA32UI),H===r.BYTE&&(Q=r.RGBA8I),H===r.SHORT&&(Q=r.RGBA16I),H===r.INT&&(Q=r.RGBA32I)),E===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),E===r.RGBA){const yt=xt?Qc:Ve.getTransfer(ct);H===r.FLOAT&&(Q=r.RGBA32F),H===r.HALF_FLOAT&&(Q=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Q=yt===tn?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function N(w,E){let H;return w?E===null||E===Va||E===Nl?H=r.DEPTH24_STENCIL8:E===xa?H=r.DEPTH32F_STENCIL8:E===Dl&&(H=r.DEPTH24_STENCIL8,_e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Va||E===Nl?H=r.DEPTH_COMPONENT24:E===xa?H=r.DEPTH_COMPONENT32F:E===Dl&&(H=r.DEPTH_COMPONENT16),H}function F(w,E){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==Zn&&w.minFilter!==Kn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function B(w){const E=w.target;E.removeEventListener("dispose",B),T(E),E.isVideoTexture&&_.delete(E)}function z(w){const E=w.target;E.removeEventListener("dispose",z),pt(E)}function T(w){const E=s.get(w);if(E.__webglInit===void 0)return;const H=w.source,ct=g.get(H);if(ct){const xt=ct[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&L(w),Object.keys(ct).length===0&&g.delete(H)}s.remove(w)}function L(w){const E=s.get(w);r.deleteTexture(E.__webglTexture);const H=w.source,ct=g.get(H);delete ct[E.__cacheKey],f.memory.textures--}function pt(w){const E=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let xt=0;xt<E.__webglFramebuffer[ct].length;xt++)r.deleteFramebuffer(E.__webglFramebuffer[ct][xt]);else r.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)r.deleteFramebuffer(E.__webglFramebuffer[ct]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=w.textures;for(let ct=0,xt=H.length;ct<xt;ct++){const Q=s.get(H[ct]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),f.memory.textures--),s.remove(H[ct])}s.remove(w)}let V=0;function tt(){V=0}function st(){const w=V;return w>=l.maxTextures&&_e("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),V+=1,w}function rt(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function Z(w,E){const H=s.get(w);if(w.isVideoTexture&&Ue(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const ct=w.image;if(ct===null)_e("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)_e("WebGLRenderer: Texture marked for update but image is incomplete");else{et(H,w,E);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+E)}function O(w,E){const H=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){et(H,w,E);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+E)}function P(w,E){const H=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){et(H,w,E);return}i.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+E)}function $(w,E){const H=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&H.__version!==w.version){St(H,w,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+E)}const mt={[wl]:r.REPEAT,[rs]:r.CLAMP_TO_EDGE,[dd]:r.MIRRORED_REPEAT},gt={[Zn]:r.NEAREST,[TS]:r.NEAREST_MIPMAP_NEAREST,[Hc]:r.NEAREST_MIPMAP_LINEAR,[Kn]:r.LINEAR,[Jf]:r.LINEAR_MIPMAP_NEAREST,[ks]:r.LINEAR_MIPMAP_LINEAR},I={[CS]:r.NEVER,[US]:r.ALWAYS,[wS]:r.LESS,[ah]:r.LEQUAL,[DS]:r.EQUAL,[sh]:r.GEQUAL,[NS]:r.GREATER,[LS]:r.NOTEQUAL};function q(w,E){if(E.type===xa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Kn||E.magFilter===Jf||E.magFilter===Hc||E.magFilter===ks||E.minFilter===Kn||E.minFilter===Jf||E.minFilter===Hc||E.minFilter===ks)&&_e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,mt[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,mt[E.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,mt[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,gt[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zn||E.minFilter!==Hc&&E.minFilter!==ks||E.type===xa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _t(w,E){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",B));const ct=E.source;let xt=g.get(ct);xt===void 0&&(xt={},g.set(ct,xt));const Q=rt(E);if(Q!==w.__cacheKey){xt[Q]===void 0&&(xt[Q]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,H=!0),xt[Q].usedTimes++;const yt=xt[w.__cacheKey];yt!==void 0&&(xt[w.__cacheKey].usedTimes--,yt.usedTimes===0&&L(E)),w.__cacheKey=Q,w.__webglTexture=xt[Q].texture}return H}function Ut(w,E,H){return Math.floor(Math.floor(w/H)/E)}function qt(w,E,H,ct){const Q=w.updateRanges;if(Q.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,H,ct,E.data);else{Q.sort((Ct,wt)=>Ct.start-wt.start);let yt=0;for(let Ct=1;Ct<Q.length;Ct++){const wt=Q[yt],Vt=Q[Ct],Ft=wt.start+wt.count,zt=Ut(Vt.start,E.width,4),le=Ut(wt.start,E.width,4);Vt.start<=Ft+1&&zt===le&&Ut(Vt.start+Vt.count-1,E.width,4)===zt?wt.count=Math.max(wt.count,Vt.start+Vt.count-wt.start):(++yt,Q[yt]=Vt)}Q.length=yt+1;const ht=r.getParameter(r.UNPACK_ROW_LENGTH),Et=r.getParameter(r.UNPACK_SKIP_PIXELS),te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ct=0,wt=Q.length;Ct<wt;Ct++){const Vt=Q[Ct],Ft=Math.floor(Vt.start/4),zt=Math.ceil(Vt.count/4),le=Ft%E.width,X=Math.floor(Ft/E.width),Ot=zt,Nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,le),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,le,X,Ot,Nt,H,ct,E.data)}w.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ht),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Et),r.pixelStorei(r.UNPACK_SKIP_ROWS,te)}}function et(w,E,H){let ct=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=r.TEXTURE_3D);const xt=_t(w,E),Q=E.source;i.bindTexture(ct,w.__webglTexture,r.TEXTURE0+H);const yt=s.get(Q);if(Q.version!==yt.__version||xt===!0){i.activeTexture(r.TEXTURE0+H);const ht=Ve.getPrimaries(Ve.workingColorSpace),Et=E.colorSpace===Gs?null:Ve.getPrimaries(E.colorSpace),te=E.colorSpace===Gs||ht===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Ct=D(E.image,!1,l.maxTextureSize);Ct=ot(E,Ct);const wt=c.convert(E.format,E.colorSpace),Vt=c.convert(E.type);let Ft=U(E.internalFormat,wt,Vt,E.colorSpace,E.isVideoTexture);q(ct,E);let zt;const le=E.mipmaps,X=E.isVideoTexture!==!0,Ot=yt.__version===void 0||xt===!0,Nt=Q.dataReady,Ht=F(E,Ct);if(E.isDepthTexture)Ft=N(E.format===Nr,E.type),Ot&&(X?i.texStorage2D(r.TEXTURE_2D,1,Ft,Ct.width,Ct.height):i.texImage2D(r.TEXTURE_2D,0,Ft,Ct.width,Ct.height,0,wt,Vt,null));else if(E.isDataTexture)if(le.length>0){X&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ht,Ft,le[0].width,le[0].height);for(let Tt=0,ft=le.length;Tt<ft;Tt++)zt=le[Tt],X?Nt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,zt.width,zt.height,wt,Vt,zt.data):i.texImage2D(r.TEXTURE_2D,Tt,Ft,zt.width,zt.height,0,wt,Vt,zt.data);E.generateMipmaps=!1}else X?(Ot&&i.texStorage2D(r.TEXTURE_2D,Ht,Ft,Ct.width,Ct.height),Nt&&qt(E,Ct,wt,Vt)):i.texImage2D(r.TEXTURE_2D,0,Ft,Ct.width,Ct.height,0,wt,Vt,Ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Ft,le[0].width,le[0].height,Ct.depth);for(let Tt=0,ft=le.length;Tt<ft;Tt++)if(zt=le[Tt],E.format!==Sa)if(wt!==null)if(X){if(Nt)if(E.layerUpdates.size>0){const kt=Ex(zt.width,zt.height,E.format,E.type);for(const ce of E.layerUpdates){const De=zt.data.subarray(ce*kt/zt.data.BYTES_PER_ELEMENT,(ce+1)*kt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,ce,zt.width,zt.height,1,wt,De)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,Ct.depth,wt,zt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Ft,zt.width,zt.height,Ct.depth,0,zt.data,0,0);else _e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Nt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,Ct.depth,wt,Vt,zt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Ft,zt.width,zt.height,Ct.depth,0,wt,Vt,zt.data)}else{X&&Ot&&i.texStorage2D(r.TEXTURE_2D,Ht,Ft,le[0].width,le[0].height);for(let Tt=0,ft=le.length;Tt<ft;Tt++)zt=le[Tt],E.format!==Sa?wt!==null?X?Nt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,zt.width,zt.height,wt,zt.data):i.compressedTexImage2D(r.TEXTURE_2D,Tt,Ft,zt.width,zt.height,0,zt.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Nt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,zt.width,zt.height,wt,Vt,zt.data):i.texImage2D(r.TEXTURE_2D,Tt,Ft,zt.width,zt.height,0,wt,Vt,zt.data)}else if(E.isDataArrayTexture)if(X){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Ft,Ct.width,Ct.height,Ct.depth),Nt)if(E.layerUpdates.size>0){const Tt=Ex(Ct.width,Ct.height,E.format,E.type);for(const ft of E.layerUpdates){const kt=Ct.data.subarray(ft*Tt/Ct.data.BYTES_PER_ELEMENT,(ft+1)*Tt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ft,Ct.width,Ct.height,1,wt,Vt,kt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,wt,Vt,Ct.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,Ct.width,Ct.height,Ct.depth,0,wt,Vt,Ct.data);else if(E.isData3DTexture)X?(Ot&&i.texStorage3D(r.TEXTURE_3D,Ht,Ft,Ct.width,Ct.height,Ct.depth),Nt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,wt,Vt,Ct.data)):i.texImage3D(r.TEXTURE_3D,0,Ft,Ct.width,Ct.height,Ct.depth,0,wt,Vt,Ct.data);else if(E.isFramebufferTexture){if(Ot)if(X)i.texStorage2D(r.TEXTURE_2D,Ht,Ft,Ct.width,Ct.height);else{let Tt=Ct.width,ft=Ct.height;for(let kt=0;kt<Ht;kt++)i.texImage2D(r.TEXTURE_2D,kt,Ft,Tt,ft,0,wt,Vt,null),Tt>>=1,ft>>=1}}else if(le.length>0){if(X&&Ot){const Tt=At(le[0]);i.texStorage2D(r.TEXTURE_2D,Ht,Ft,Tt.width,Tt.height)}for(let Tt=0,ft=le.length;Tt<ft;Tt++)zt=le[Tt],X?Nt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,wt,Vt,zt):i.texImage2D(r.TEXTURE_2D,Tt,Ft,wt,Vt,zt);E.generateMipmaps=!1}else if(X){if(Ot){const Tt=At(Ct);i.texStorage2D(r.TEXTURE_2D,Ht,Ft,Tt.width,Tt.height)}Nt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Vt,Ct)}else i.texImage2D(r.TEXTURE_2D,0,Ft,wt,Vt,Ct);M(E)&&y(ct),yt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function St(w,E,H){if(E.image.length!==6)return;const ct=_t(w,E),xt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+H);const Q=s.get(xt);if(xt.version!==Q.__version||ct===!0){i.activeTexture(r.TEXTURE0+H);const yt=Ve.getPrimaries(Ve.workingColorSpace),ht=E.colorSpace===Gs?null:Ve.getPrimaries(E.colorSpace),Et=E.colorSpace===Gs||yt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,Ct=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let ft=0;ft<6;ft++)!te&&!Ct?wt[ft]=D(E.image[ft],!0,l.maxCubemapSize):wt[ft]=Ct?E.image[ft].image:E.image[ft],wt[ft]=ot(E,wt[ft]);const Vt=wt[0],Ft=c.convert(E.format,E.colorSpace),zt=c.convert(E.type),le=U(E.internalFormat,Ft,zt,E.colorSpace),X=E.isVideoTexture!==!0,Ot=Q.__version===void 0||ct===!0,Nt=xt.dataReady;let Ht=F(E,Vt);q(r.TEXTURE_CUBE_MAP,E);let Tt;if(te){X&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,le,Vt.width,Vt.height);for(let ft=0;ft<6;ft++){Tt=wt[ft].mipmaps;for(let kt=0;kt<Tt.length;kt++){const ce=Tt[kt];E.format!==Sa?Ft!==null?X?Nt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt,0,0,ce.width,ce.height,Ft,ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt,le,ce.width,ce.height,0,ce.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt,0,0,ce.width,ce.height,Ft,zt,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt,le,ce.width,ce.height,0,Ft,zt,ce.data)}}}else{if(Tt=E.mipmaps,X&&Ot){Tt.length>0&&Ht++;const ft=At(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,le,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Ct){X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,wt[ft].width,wt[ft].height,Ft,zt,wt[ft].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,le,wt[ft].width,wt[ft].height,0,Ft,zt,wt[ft].data);for(let kt=0;kt<Tt.length;kt++){const De=Tt[kt].image[ft].image;X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt+1,0,0,De.width,De.height,Ft,zt,De.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt+1,le,De.width,De.height,0,Ft,zt,De.data)}}else{X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Ft,zt,wt[ft]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,le,Ft,zt,wt[ft]);for(let kt=0;kt<Tt.length;kt++){const ce=Tt[kt];X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt+1,0,0,Ft,zt,ce.image[ft]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt+1,le,Ft,zt,ce.image[ft])}}}M(E)&&y(r.TEXTURE_CUBE_MAP),Q.__version=xt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Lt(w,E,H,ct,xt,Q){const yt=c.convert(H.format,H.colorSpace),ht=c.convert(H.type),Et=U(H.internalFormat,yt,ht,H.colorSpace),te=s.get(E),Ct=s.get(H);if(Ct.__renderTarget=E,!te.__hasExternalTextures){const wt=Math.max(1,E.width>>Q),Vt=Math.max(1,E.height>>Q);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?i.texImage3D(xt,Q,Et,wt,Vt,E.depth,0,yt,ht,null):i.texImage2D(xt,Q,Et,wt,Vt,0,yt,ht,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),pn(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,xt,Ct.__webglTexture,0,k(E)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,xt,Ct.__webglTexture,Q),i.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(w,E,H){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer){const ct=E.depthTexture,xt=ct&&ct.isDepthTexture?ct.type:null,Q=N(E.stencilBuffer,xt),yt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pn(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),Q,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),Q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Q,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,w)}else{const ct=E.textures;for(let xt=0;xt<ct.length;xt++){const Q=ct[xt],yt=c.convert(Q.format,Q.colorSpace),ht=c.convert(Q.type),Et=U(Q.internalFormat,yt,ht,Q.colorSpace);pn(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),Et,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),Et,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Et,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ie(w,E,H){const ct=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),q(r.TEXTURE_CUBE_MAP,E.depthTexture);const te=c.convert(E.depthTexture.format),Ct=c.convert(E.depthTexture.type);let wt;E.depthTexture.format===cs?wt=r.DEPTH_COMPONENT24:E.depthTexture.format===Nr&&(wt=r.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,wt,E.width,E.height,0,te,Ct,null)}}else Z(E.depthTexture,0);const Q=xt.__webglTexture,yt=k(E),ht=ct?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,Et=E.depthTexture.format===Nr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===cs)pn(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Et,ht,Q,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,Et,ht,Q,0);else if(E.depthTexture.format===Nr)pn(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Et,ht,Q,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,Et,ht,Q,0);else throw new Error("Unknown depthTexture format")}function fe(w){const E=s.get(w),H=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const ct=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",xt)};ct.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ct}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let ct=0;ct<6;ct++)ie(E.__webglFramebuffer[ct],w,ct);else{const ct=w.texture.mipmaps;ct&&ct.length>0?ie(E.__webglFramebuffer[0],w,0):ie(E.__webglFramebuffer,w,0)}else if(H){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=r.createRenderbuffer(),jt(E.__webglDepthbuffer[ct],w,!1);else{const xt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,Q)}}else{const ct=w.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),jt(E.__webglDepthbuffer,w,!1);else{const xt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,Q)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function vn(w,E,H){const ct=s.get(w);E!==void 0&&Lt(ct.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&fe(w)}function Te(w){const E=w.texture,H=s.get(w),ct=s.get(E);w.addEventListener("dispose",z);const xt=w.textures,Q=w.isWebGLCubeRenderTarget===!0,yt=xt.length>1;if(yt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=E.version,f.memory.textures++),Q){H.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ht]=[];for(let Et=0;Et<E.mipmaps.length;Et++)H.__webglFramebuffer[ht][Et]=r.createFramebuffer()}else H.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)H.__webglFramebuffer[ht]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(yt)for(let ht=0,Et=xt.length;ht<Et;ht++){const te=s.get(xt[ht]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),f.memory.textures++)}if(w.samples>0&&pn(w)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ht=0;ht<xt.length;ht++){const Et=xt[ht];H.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ht]);const te=c.convert(Et.format,Et.colorSpace),Ct=c.convert(Et.type),wt=U(Et.internalFormat,te,Ct,Et.colorSpace,w.isXRRenderTarget===!0),Vt=k(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,wt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,H.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),jt(H.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){i.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),q(r.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)Lt(H.__webglFramebuffer[ht][Et],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et);else Lt(H.__webglFramebuffer[ht],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);M(E)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(yt){for(let ht=0,Et=xt.length;ht<Et;ht++){const te=xt[ht],Ct=s.get(te);let wt=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(wt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,Ct.__webglTexture),q(wt,te),Lt(H.__webglFramebuffer,w,te,r.COLOR_ATTACHMENT0+ht,wt,0),M(te)&&y(wt)}i.unbindTexture()}else{let ht=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ht,ct.__webglTexture),q(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)Lt(H.__webglFramebuffer[Et],w,E,r.COLOR_ATTACHMENT0,ht,Et);else Lt(H.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,ht,0);M(E)&&y(ht),i.unbindTexture()}w.depthBuffer&&fe(w)}function Me(w){const E=w.textures;for(let H=0,ct=E.length;H<ct;H++){const xt=E[H];if(M(xt)){const Q=C(w),yt=s.get(xt).__webglTexture;i.bindTexture(Q,yt),y(Q),i.unbindTexture()}}}const ze=[],xe=[];function hn(w){if(w.samples>0){if(pn(w)===!1){const E=w.textures,H=w.width,ct=w.height;let xt=r.COLOR_BUFFER_BIT;const Q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=s.get(w),ht=E.length>1;if(ht)for(let te=0;te<E.length;te++)i.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const Et=w.texture.mipmaps;Et&&Et.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[te]);const Ct=s.get(E[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ct,0)}r.blitFramebuffer(0,0,H,ct,0,0,H,ct,xt,r.NEAREST),m===!0&&(ze.length=0,xe.length=0,ze.push(r.COLOR_ATTACHMENT0+te),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ze.push(Q),xe.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let te=0;te<E.length;te++){i.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,yt.__webglColorRenderbuffer[te]);const Ct=s.get(E[te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,Ct,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const E=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function k(w){return Math.min(l.maxSamples,w.samples)}function pn(w){const E=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(w){const E=f.render.frame;_.get(w)!==E&&(_.set(w,E),w.update())}function ot(w,E){const H=w.colorSpace,ct=w.format,xt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Eo&&H!==Gs&&(Ve.getTransfer(H)===tn?(ct!==Sa||xt!==Bi)&&_e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",H)),E}function At(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=tt,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=P,this.setTextureCube=$,this.rebindTextures=vn,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=pn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function oy(r,t){function i(s,l=Gs){let c;const f=Ve.getTransfer(l);if(s===Bi)return r.UNSIGNED_BYTE;if(s===Qd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Jd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===v0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===m0)return r.BYTE;if(s===g0)return r.SHORT;if(s===Dl)return r.UNSIGNED_SHORT;if(s===Kd)return r.INT;if(s===Va)return r.UNSIGNED_INT;if(s===xa)return r.FLOAT;if(s===ls)return r.HALF_FLOAT;if(s===x0)return r.ALPHA;if(s===S0)return r.RGB;if(s===Sa)return r.RGBA;if(s===cs)return r.DEPTH_COMPONENT;if(s===Nr)return r.DEPTH_STENCIL;if(s===$d)return r.RED;if(s===th)return r.RED_INTEGER;if(s===Mo)return r.RG;if(s===eh)return r.RG_INTEGER;if(s===nh)return r.RGBA_INTEGER;if(s===Xc||s===Wc||s===Yc||s===qc)if(f===tn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hd||s===pd||s===md||s===gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d||s===vd||s===xd||s===Sd||s===yd||s===Md||s===Ed)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===_d||s===vd)return f===tn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===xd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Sd)return c.COMPRESSED_R11_EAC;if(s===yd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Md)return c.COMPRESSED_RG11_EAC;if(s===Ed)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Nd||s===Ld||s===Ud||s===Od||s===Id||s===Pd||s===Fd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===bd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Td)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ad)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ld)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ud)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Od)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Id)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fd)return f===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bd||s===zd||s===Hd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Bd)return f===tn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Gd||s===Vd||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Gd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const v2=`
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

}`;class S2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new w0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ka({vertexShader:v2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new He(new ss(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y2 extends bo{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,b=null;const D=typeof XRWebGLBinding<"u",M=new S2,y={},C=i.getContextAttributes();let U=null,N=null;const F=[],B=[],z=new we;let T=null;const L=new wi;L.viewport=new bn;const pt=new wi;pt.viewport=new bn;const V=[L,pt],tt=new $S;let st=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let St=F[et];return St===void 0&&(St=new $f,F[et]=St),St.getTargetRaySpace()},this.getControllerGrip=function(et){let St=F[et];return St===void 0&&(St=new $f,F[et]=St),St.getGripSpace()},this.getHand=function(et){let St=F[et];return St===void 0&&(St=new $f,F[et]=St),St.getHandSpace()};function Z(et){const St=B.indexOf(et.inputSource);if(St===-1)return;const Lt=F[St];Lt!==void 0&&(Lt.update(et.inputSource,et.frame,p||f),Lt.dispatchEvent({type:et.type,data:et.inputSource}))}function O(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",P);for(let et=0;et<F.length;et++){const St=B[et];St!==null&&(B[et]=null,F[et].disconnect(St))}st=null,rt=null,M.reset();for(const et in y)delete y[et];t.setRenderTarget(U),S=null,g=null,v=null,l=null,N=null,qt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&_e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,s.isPresenting===!0&&_e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",O),l.addEventListener("inputsourceschange",P),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,jt=null,ie=null;C.depth&&(ie=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=C.stencil?Nr:cs,jt=C.stencil?Nl:Va);const fe={colorFormat:i.RGBA8,depthFormat:ie,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(fe),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Ga(g.textureWidth,g.textureHeight,{format:Sa,type:Bi,depthTexture:new Ol(g.textureWidth,g.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Lt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Ga(S.framebufferWidth,S.framebufferHeight,{format:Sa,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),qt.setContext(l),qt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function P(et){for(let St=0;St<et.removed.length;St++){const Lt=et.removed[St],jt=B.indexOf(Lt);jt>=0&&(B[jt]=null,F[jt].disconnect(Lt))}for(let St=0;St<et.added.length;St++){const Lt=et.added[St];let jt=B.indexOf(Lt);if(jt===-1){for(let fe=0;fe<F.length;fe++)if(fe>=B.length){B.push(Lt),jt=fe;break}else if(B[fe]===null){B[fe]=Lt,jt=fe;break}if(jt===-1)break}const ie=F[jt];ie&&ie.connect(Lt)}}const $=new j,mt=new j;function gt(et,St,Lt){$.setFromMatrixPosition(St.matrixWorld),mt.setFromMatrixPosition(Lt.matrixWorld);const jt=$.distanceTo(mt),ie=St.projectionMatrix.elements,fe=Lt.projectionMatrix.elements,vn=ie[14]/(ie[10]-1),Te=ie[14]/(ie[10]+1),Me=(ie[9]+1)/ie[5],ze=(ie[9]-1)/ie[5],xe=(ie[8]-1)/ie[0],hn=(fe[8]+1)/fe[0],k=vn*xe,pn=vn*hn,Ue=jt/(-xe+hn),ot=Ue*-xe;if(St.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ot),et.translateZ(Ue),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),ie[10]===-1)et.projectionMatrix.copy(St.projectionMatrix),et.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const At=vn+Ue,w=Te+Ue,E=k-ot,H=pn+(jt-ot),ct=Me*Te/w*At,xt=ze*Te/w*At;et.projectionMatrix.makePerspective(E,H,ct,xt,At,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function I(et,St){St===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(St.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let St=et.near,Lt=et.far;M.texture!==null&&(M.depthNear>0&&(St=M.depthNear),M.depthFar>0&&(Lt=M.depthFar)),tt.near=pt.near=L.near=St,tt.far=pt.far=L.far=Lt,(st!==tt.near||rt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),st=tt.near,rt=tt.far),tt.layers.mask=et.layers.mask|6,L.layers.mask=tt.layers.mask&-5,pt.layers.mask=tt.layers.mask&-3;const jt=et.parent,ie=tt.cameras;I(tt,jt);for(let fe=0;fe<ie.length;fe++)I(ie[fe],jt);ie.length===2?gt(tt,L,pt):tt.projectionMatrix.copy(L.projectionMatrix),q(et,tt,jt)};function q(et,St,Lt){Lt===null?et.matrix.copy(St.matrixWorld):(et.matrix.copy(Lt.matrixWorld),et.matrix.invert(),et.matrix.multiply(St.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(St.projectionMatrix),et.projectionMatrixInverse.copy(St.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ul*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(et){m=et,g!==null&&(g.fixedFoveation=et),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(tt)},this.getCameraTexture=function(et){return y[et]};let _t=null;function Ut(et,St){if(_=St.getViewerPose(p||f),b=St,_!==null){const Lt=_.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let jt=!1;Lt.length!==tt.cameras.length&&(tt.cameras.length=0,jt=!0);for(let Te=0;Te<Lt.length;Te++){const Me=Lt[Te];let ze=null;if(S!==null)ze=S.getViewport(Me);else{const hn=v.getViewSubImage(g,Me);ze=hn.viewport,Te===0&&(t.setRenderTargetTextures(N,hn.colorTexture,hn.depthStencilTexture),t.setRenderTarget(N))}let xe=V[Te];xe===void 0&&(xe=new wi,xe.layers.enable(Te),xe.viewport=new bn,V[Te]=xe),xe.matrix.fromArray(Me.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Me.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ze.x,ze.y,ze.width,ze.height),Te===0&&(tt.matrix.copy(xe.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),jt===!0&&tt.cameras.push(xe)}const ie=l.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=s.getBinding();const Te=v.getDepthInformation(Lt[0]);Te&&Te.isValid&&Te.texture&&M.init(Te,l.renderState)}if(ie&&ie.includes("camera-access")&&D){t.state.unbindTexture(),v=s.getBinding();for(let Te=0;Te<Lt.length;Te++){const Me=Lt[Te].camera;if(Me){let ze=y[Me];ze||(ze=new w0,y[Me]=ze);const xe=v.getCameraImage(Me);ze.sourceTexture=xe}}}}for(let Lt=0;Lt<F.length;Lt++){const jt=B[Lt],ie=F[Lt];jt!==null&&ie!==void 0&&ie.update(jt,St,p||f)}_t&&_t(et,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),b=null}const qt=new ny;qt.setAnimationLoop(Ut),this.setAnimationLoop=function(et){_t=et},this.dispose=function(){}}}const uo=new ta,M2=new un;function E2(r,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,XS(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,C,U,N){y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,N)):y.isMeshMatcapMaterial?(c(M,y),b(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),D(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,C,U):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===gi&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===gi&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const C=t.get(y),U=C.envMap,N=C.envMapRotation;U&&(M.envMap.value=U,uo.copy(N),uo.x*=-1,uo.y*=-1,uo.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(uo.y*=-1,uo.z*=-1),M.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(uo)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,C,U){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*C,M.scale.value=U*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,C){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===gi&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function D(M,y){const C=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function b2(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const N=U.program;s.uniformBlockBinding(C,N)}function p(C,U){let N=l[C.id];N===void 0&&(b(C),N=_(C),l[C.id]=N,C.addEventListener("dispose",M));const F=U.program;s.updateUBOMapping(C,F);const B=t.render.frame;c[C.id]!==B&&(g(C),c[C.id]=B)}function _(C){const U=v();C.__bindingPointIndex=U;const N=r.createBuffer(),F=C.__size,B=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,N),N}function v(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const U=l[C.id],N=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,z=N.length;B<z;B++){const T=Array.isArray(N[B])?N[B]:[N[B]];for(let L=0,pt=T.length;L<pt;L++){const V=T[L];if(S(V,B,L,F)===!0){const tt=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let rt=0;for(let Z=0;Z<st.length;Z++){const O=st[Z],P=D(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,tt+rt,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,rt),rt+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,tt,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,U,N,F){const B=C.value,z=U+"_"+N;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const T=F[z];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return F[z]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function b(C){const U=C.uniforms;let N=0;const F=16;for(let z=0,T=U.length;z<T;z++){const L=Array.isArray(U[z])?U[z]:[U[z]];for(let pt=0,V=L.length;pt<V;pt++){const tt=L[pt],st=Array.isArray(tt.value)?tt.value:[tt.value];for(let rt=0,Z=st.length;rt<Z;rt++){const O=st[rt],P=D(O),$=N%F,mt=$%P.boundary,gt=$+mt;N+=mt,gt!==0&&F-gt<P.storage&&(N+=F-gt),tt.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=N,N+=P.storage}}}const B=N%F;return B>0&&(N+=F-B),C.__size=N,C.__cache={},this}function D(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?_e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):_e("WebGLRenderer: Unsupported uniform value type.",C),U}function M(C){const U=C.target;U.removeEventListener("dispose",M);const N=f.indexOf(U.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function y(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}const T2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let as=null;function A2(){return as===null&&(as=new R0(T2,16,16,Mo,ls),as.name="DFG_LUT",as.minFilter=Kn,as.magFilter=Kn,as.wrapS=rs,as.wrapT=rs,as.generateMipmaps=!1,as.needsUpdate=!0),as}class ly{constructor(t={}){const{canvas:i=OS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Bi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const D=S,M=new Set([nh,eh,th]),y=new Set([Bi,Va,Dl,Nl,Qd,Jd]),C=new Uint32Array(4),U=new Int32Array(4);let N=null,F=null;const B=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let pt=!1;this._outputColorSpace=Gn;let V=0,tt=0,st=null,rt=-1,Z=null;const O=new bn,P=new bn;let $=null;const mt=new de(0);let gt=0,I=i.width,q=i.height,_t=1,Ut=null,qt=null;const et=new bn(0,0,I,q),St=new bn(0,0,I,q);let Lt=!1;const jt=new lh;let ie=!1,fe=!1;const vn=new un,Te=new j,Me=new bn,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function hn(){return st===null?_t:1}let k=s;function pn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qd}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",De,!1),k===null){const Y="webgl2";if(k=pn(Y,R),k===null)throw pn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ge("WebGLRenderer: "+R.message),R}let Ue,ot,At,w,E,H,ct,xt,Q,yt,ht,Et,te,Ct,wt,Vt,Ft,zt,le,X,Ot,Nt,Ht;function Tt(){Ue=new CT(k),Ue.init(),Ot=new oy(k,Ue),ot=new ST(k,Ue,t,Ot),At=new g2(k,Ue),ot.reversedDepthBuffer&&g&&At.buffers.depth.setReversed(!0),w=new NT(k),E=new n2,H=new _2(k,Ue,At,E,ot,Ot,w),ct=new RT(L),xt=new PE(k),Nt=new vT(k,xt),Q=new wT(k,xt,w,Nt),yt=new UT(k,Q,xt,Nt,w),zt=new LT(k,ot,H),wt=new yT(E),ht=new e2(L,ct,Ue,ot,Nt,wt),Et=new E2(L,E),te=new a2,Ct=new u2(Ue),Ft=new _T(L,ct,At,yt,b,m),Vt=new m2(L,yt,ot),Ht=new b2(k,w,ot,At),le=new xT(k,Ue,w),X=new DT(k,Ue,w),w.programs=ht.programs,L.capabilities=ot,L.extensions=Ue,L.properties=E,L.renderLists=te,L.shadowMap=Vt,L.state=At,L.info=w}Tt(),D!==Bi&&(T=new IT(D,i.width,i.height,l,c));const ft=new y2(L,k);this.xr=ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(I,q,!1))},this.getSize=function(R){return R.set(I,q)},this.setSize=function(R,Y,ut=!0){if(ft.isPresenting){_e("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,q=Y,i.width=Math.floor(R*_t),i.height=Math.floor(Y*_t),ut===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(I*_t,q*_t).floor()},this.setDrawingBufferSize=function(R,Y,ut){I=R,q=Y,_t=ut,i.width=Math.floor(R*ut),i.height=Math.floor(Y*ut),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(D===Bi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,Y,ut,it){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,Y,ut,it),At.viewport(O.copy(et).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(St)},this.setScissor=function(R,Y,ut,it){R.isVector4?St.set(R.x,R.y,R.z,R.w):St.set(R,Y,ut,it),At.scissor(P.copy(St).multiplyScalar(_t).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(R){At.setScissorTest(Lt=R)},this.setOpaqueSort=function(R){Ut=R},this.setTransparentSort=function(R){qt=R},this.getClearColor=function(R){return R.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ut=!0){let it=0;if(R){let J=!1;if(st!==null){const Pt=st.texture.format;J=M.has(Pt)}if(J){const Pt=st.texture.type,Yt=y.has(Pt),Bt=Ft.getClearColor(),Qt=Ft.getClearAlpha(),Gt=Bt.r,ue=Bt.g,Se=Bt.b;Yt?(C[0]=Gt,C[1]=ue,C[2]=Se,C[3]=Qt,k.clearBufferuiv(k.COLOR,0,C)):(U[0]=Gt,U[1]=ue,U[2]=Se,U[3]=Qt,k.clearBufferiv(k.COLOR,0,U))}else it|=k.COLOR_BUFFER_BIT}Y&&(it|=k.DEPTH_BUFFER_BIT),ut&&(it|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&k.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",De,!1),Ft.dispose(),te.dispose(),Ct.dispose(),E.dispose(),ct.dispose(),yt.dispose(),Nt.dispose(),Ht.dispose(),ht.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",fs),ft.removeEventListener("sessionend",ds),zi.stop()};function kt(R){R.preventDefault(),$m("WebGLRenderer: Context Lost."),pt=!0}function ce(){$m("WebGLRenderer: Context Restored."),pt=!1;const R=w.autoReset,Y=Vt.enabled,ut=Vt.autoUpdate,it=Vt.needsUpdate,J=Vt.type;Tt(),w.autoReset=R,Vt.enabled=Y,Vt.autoUpdate=ut,Vt.needsUpdate=it,Vt.type=J}function De(R){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function me(R){const Y=R.target;Y.removeEventListener("dispose",me),Jn(Y)}function Jn(R){fi(R),E.remove(R)}function fi(R){const Y=E.get(R).programs;Y!==void 0&&(Y.forEach(function(ut){ht.releaseProgram(ut)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ut,it,J,Pt){Y===null&&(Y=ze);const Yt=J.isMesh&&J.matrixWorld.determinant()<0,Bt=Pr(R,Y,ut,it,J);At.setMaterial(it,Yt);let Qt=ut.index,Gt=1;if(it.wireframe===!0){if(Qt=Q.getWireframeAttribute(ut),Qt===void 0)return;Gt=2}const ue=ut.drawRange,Se=ut.attributes.position;let Kt=ue.start*Gt,ge=(ue.start+ue.count)*Gt;Pt!==null&&(Kt=Math.max(Kt,Pt.start*Gt),ge=Math.min(ge,(Pt.start+Pt.count)*Gt)),Qt!==null?(Kt=Math.max(Kt,0),ge=Math.min(ge,Qt.count)):Se!=null&&(Kt=Math.max(Kt,0),ge=Math.min(ge,Se.count));const en=ge-Kt;if(en<0||en===1/0)return;Nt.setup(J,it,Bt,ut,Qt);let Ke,Oe=le;if(Qt!==null&&(Ke=xt.get(Qt),Oe=X,Oe.setIndex(Ke)),J.isMesh)it.wireframe===!0?(At.setLineWidth(it.wireframeLinewidth*hn()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if(J.isLine){let Tn=it.linewidth;Tn===void 0&&(Tn=1),At.setLineWidth(Tn*hn()),J.isLineSegments?Oe.setMode(k.LINES):J.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else J.isPoints?Oe.setMode(k.POINTS):J.isSprite&&Oe.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Jc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Oe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Tn=J._multiDrawStarts,Zt=J._multiDrawCounts,$n=J._multiDrawCount,pe=Qt?xt.get(Qt).bytesPerElement:1,Xn=E.get(it).currentProgram.getUniforms();for(let vi=0;vi<$n;vi++)Xn.setValue(k,"_gl_DrawID",vi),Oe.render(Tn[vi]/pe,Zt[vi])}else if(J.isInstancedMesh)Oe.renderInstances(Kt,en,J.count);else if(ut.isInstancedBufferGeometry){const Tn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Zt=Math.min(ut.instanceCount,Tn);Oe.renderInstances(Kt,en,Zt)}else Oe.render(Kt,en)};function Xa(R,Y,ut){R.transparent===!0&&R.side===zn&&R.forceSinglePass===!1?(R.side=gi,R.needsUpdate=!0,Ni(R,Y,ut),R.side=Ws,R.needsUpdate=!0,Ni(R,Y,ut),R.side=zn):Ni(R,Y,ut)}this.compile=function(R,Y,ut=null){ut===null&&(ut=R),F=Ct.get(ut),F.init(Y),z.push(F),ut.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(F.pushLight(J),J.castShadow&&F.pushShadow(J))}),R!==ut&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(F.pushLight(J),J.castShadow&&F.pushShadow(J))}),F.setupLights();const it=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Pt=J.material;if(Pt)if(Array.isArray(Pt))for(let Yt=0;Yt<Pt.length;Yt++){const Bt=Pt[Yt];Xa(Bt,ut,J),it.add(Bt)}else Xa(Pt,ut,J),it.add(Pt)}),F=z.pop(),it},this.compileAsync=function(R,Y,ut=null){const it=this.compile(R,Y,ut);return new Promise(J=>{function Pt(){if(it.forEach(function(Yt){E.get(Yt).currentProgram.isReady()&&it.delete(Yt)}),it.size===0){J(R);return}setTimeout(Pt,10)}Ue.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Ma=null;function us(R){Ma&&Ma(R)}function fs(){zi.stop()}function ds(){zi.start()}const zi=new ny;zi.setAnimationLoop(us),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(R){Ma=R,ft.setAnimationLoop(R),R===null?zi.stop():zi.start()},ft.addEventListener("sessionstart",fs),ft.addEventListener("sessionend",ds),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(pt===!0)return;const ut=ft.enabled===!0&&ft.isPresenting===!0,it=T!==null&&(st===null||ut)&&T.begin(L,st);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Y),Y=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,Y,st),F=Ct.get(R,z.length),F.init(Y),z.push(F),vn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),jt.setFromProjectionMatrix(vn,za,Y.reversedDepth),fe=this.localClippingEnabled,ie=wt.init(this.clippingPlanes,fe),N=te.get(R,B.length),N.init(),B.push(N),ft.enabled===!0&&ft.isPresenting===!0){const Yt=L.xr.getDepthSensingMesh();Yt!==null&&hs(Yt,Y,-1/0,L.sortObjects)}hs(R,Y,0,L.sortObjects),N.finish(),L.sortObjects===!0&&N.sort(Ut,qt),xe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,xe&&Ft.addToRenderList(N,R),this.info.render.frame++,ie===!0&&wt.beginShadows();const J=F.state.shadowsArray;if(Vt.render(J,R,Y),ie===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&T.hasRenderPass())===!1){const Yt=N.opaque,Bt=N.transmissive;if(F.setupLights(),Y.isArrayCamera){const Qt=Y.cameras;if(Bt.length>0)for(let Gt=0,ue=Qt.length;Gt<ue;Gt++){const Se=Qt[Gt];xn(Yt,Bt,R,Se)}xe&&Ft.render(R);for(let Gt=0,ue=Qt.length;Gt<ue;Gt++){const Se=Qt[Gt];Di(N,R,Se,Se.viewport)}}else Bt.length>0&&xn(Yt,Bt,R,Y),xe&&Ft.render(R),Di(N,R,Y)}st!==null&&tt===0&&(H.updateMultisampleRenderTarget(st),H.updateRenderTargetMipmap(st)),it&&T.end(L),R.isScene===!0&&R.onAfterRender(L,R,Y),Nt.resetDefaultState(),rt=-1,Z=null,z.pop(),z.length>0?(F=z[z.length-1],ie===!0&&wt.setGlobalState(L.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function hs(R,Y,ut,it){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ut=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||jt.intersectsSprite(R)){it&&Me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vn);const Yt=yt.update(R),Bt=R.material;Bt.visible&&N.push(R,Yt,Bt,ut,Me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||jt.intersectsObject(R))){const Yt=yt.update(R),Bt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Me.copy(R.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),Me.copy(Yt.boundingSphere.center)),Me.applyMatrix4(R.matrixWorld).applyMatrix4(vn)),Array.isArray(Bt)){const Qt=Yt.groups;for(let Gt=0,ue=Qt.length;Gt<ue;Gt++){const Se=Qt[Gt],Kt=Bt[Se.materialIndex];Kt&&Kt.visible&&N.push(R,Yt,Kt,ut,Me.z,Se)}}else Bt.visible&&N.push(R,Yt,Bt,ut,Me.z,null)}}const Pt=R.children;for(let Yt=0,Bt=Pt.length;Yt<Bt;Yt++)hs(Pt[Yt],Y,ut,it)}function Di(R,Y,ut,it){const{opaque:J,transmissive:Pt,transparent:Yt}=R;F.setupLightsView(ut),ie===!0&&wt.setGlobalState(L.clippingPlanes,ut),it&&At.viewport(O.copy(it)),J.length>0&&yn(J,Y,ut),Pt.length>0&&yn(Pt,Y,ut),Yt.length>0&&yn(Yt,Y,ut),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function xn(R,Y,ut,it){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[it.id]===void 0){const Kt=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[it.id]=new Ga(1,1,{generateMipmaps:!0,type:Kt?ls:Bi,minFilter:ks,samples:Math.max(4,ot.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const Pt=F.state.transmissionRenderTarget[it.id],Yt=it.viewport||O;Pt.setSize(Yt.z*L.transmissionResolutionScale,Yt.w*L.transmissionResolutionScale);const Bt=L.getRenderTarget(),Qt=L.getActiveCubeFace(),Gt=L.getActiveMipmapLevel();L.setRenderTarget(Pt),L.getClearColor(mt),gt=L.getClearAlpha(),gt<1&&L.setClearColor(16777215,.5),L.clear(),xe&&Ft.render(ut);const ue=L.toneMapping;L.toneMapping=Ha;const Se=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),F.setupLightsView(it),ie===!0&&wt.setGlobalState(L.clippingPlanes,it),yn(R,ut,it),H.updateMultisampleRenderTarget(Pt),H.updateRenderTargetMipmap(Pt),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let ge=0,en=Y.length;ge<en;ge++){const Ke=Y[ge],{object:Oe,geometry:Tn,material:Zt,group:$n}=Ke;if(Zt.side===zn&&Oe.layers.test(it.layers)){const pe=Zt.side;Zt.side=gi,Zt.needsUpdate=!0,_i(Oe,ut,it,Tn,Zt,$n),Zt.side=pe,Zt.needsUpdate=!0,Kt=!0}}Kt===!0&&(H.updateMultisampleRenderTarget(Pt),H.updateRenderTargetMipmap(Pt))}L.setRenderTarget(Bt,Qt,Gt),L.setClearColor(mt,gt),Se!==void 0&&(it.viewport=Se),L.toneMapping=ue}function yn(R,Y,ut){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Pt=R.length;J<Pt;J++){const Yt=R[J],{object:Bt,geometry:Qt,group:Gt}=Yt;let ue=Yt.material;ue.allowOverride===!0&&it!==null&&(ue=it),Bt.layers.test(ut.layers)&&_i(Bt,Y,ut,Qt,ue,Gt)}}function _i(R,Y,ut,it,J,Pt){R.onBeforeRender(L,Y,ut,it,J,Pt),R.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(L,Y,ut,it,R,Pt),J.transparent===!0&&J.side===zn&&J.forceSinglePass===!1?(J.side=gi,J.needsUpdate=!0,L.renderBufferDirect(ut,Y,it,J,R,Pt),J.side=Ws,J.needsUpdate=!0,L.renderBufferDirect(ut,Y,it,J,R,Pt),J.side=zn):L.renderBufferDirect(ut,Y,it,J,R,Pt),R.onAfterRender(L,Y,ut,it,J,Pt)}function Ni(R,Y,ut){Y.isScene!==!0&&(Y=ze);const it=E.get(R),J=F.state.lights,Pt=F.state.shadowsArray,Yt=J.state.version,Bt=ht.getParameters(R,J.state,Pt,Y,ut),Qt=ht.getProgramCacheKey(Bt);let Gt=it.programs;it.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,it.fog=Y.fog;const ue=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;it.envMap=ct.get(R.envMap||it.environment,ue),it.envMapRotation=it.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Gt===void 0&&(R.addEventListener("dispose",me),Gt=new Map,it.programs=Gt);let Se=Gt.get(Qt);if(Se!==void 0){if(it.currentProgram===Se&&it.lightsStateVersion===Yt)return Wa(R,Bt),Se}else Bt.uniforms=ht.getUniforms(R),R.onBeforeCompile(Bt,L),Se=ht.acquireProgram(Bt,Qt),Gt.set(Qt,Se),it.uniforms=Bt.uniforms;const Kt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=wt.uniform),Wa(R,Bt),it.needsLights=qs(R),it.lightsStateVersion=Yt,it.needsLights&&(Kt.ambientLightColor.value=J.state.ambient,Kt.lightProbe.value=J.state.probe,Kt.directionalLights.value=J.state.directional,Kt.directionalLightShadows.value=J.state.directionalShadow,Kt.spotLights.value=J.state.spot,Kt.spotLightShadows.value=J.state.spotShadow,Kt.rectAreaLights.value=J.state.rectArea,Kt.ltc_1.value=J.state.rectAreaLTC1,Kt.ltc_2.value=J.state.rectAreaLTC2,Kt.pointLights.value=J.state.point,Kt.pointLightShadows.value=J.state.pointShadow,Kt.hemisphereLights.value=J.state.hemi,Kt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Kt.spotLightMatrix.value=J.state.spotLightMatrix,Kt.spotLightMap.value=J.state.spotLightMap,Kt.pointShadowMatrix.value=J.state.pointShadowMatrix),it.currentProgram=Se,it.uniformsList=null,Se}function Ao(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ed.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Wa(R,Y){const ut=E.get(R);ut.outputColorSpace=Y.outputColorSpace,ut.batching=Y.batching,ut.batchingColor=Y.batchingColor,ut.instancing=Y.instancing,ut.instancingColor=Y.instancingColor,ut.instancingMorph=Y.instancingMorph,ut.skinning=Y.skinning,ut.morphTargets=Y.morphTargets,ut.morphNormals=Y.morphNormals,ut.morphColors=Y.morphColors,ut.morphTargetsCount=Y.morphTargetsCount,ut.numClippingPlanes=Y.numClippingPlanes,ut.numIntersection=Y.numClipIntersection,ut.vertexAlphas=Y.vertexAlphas,ut.vertexTangents=Y.vertexTangents,ut.toneMapping=Y.toneMapping}function Pr(R,Y,ut,it,J){Y.isScene!==!0&&(Y=ze),H.resetTextureUnits();const Pt=Y.fog,Yt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Y.environment:null,Bt=st===null?L.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Eo,Qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Gt=ct.get(it.envMap||Yt,Qt),ue=it.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Se=!!ut.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Kt=!!ut.morphAttributes.position,ge=!!ut.morphAttributes.normal,en=!!ut.morphAttributes.color;let Ke=Ha;it.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ke=L.toneMapping);const Oe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Tn=Oe!==void 0?Oe.length:0,Zt=E.get(it),$n=F.state.lights;if(ie===!0&&(fe===!0||R!==Z)){const Mn=R===Z&&it.id===rt;wt.setState(it,R,Mn)}let pe=!1;it.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==$n.state.version||Zt.outputColorSpace!==Bt||J.isBatchedMesh&&Zt.batching===!1||!J.isBatchedMesh&&Zt.batching===!0||J.isBatchedMesh&&Zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Zt.instancing===!1||!J.isInstancedMesh&&Zt.instancing===!0||J.isSkinnedMesh&&Zt.skinning===!1||!J.isSkinnedMesh&&Zt.skinning===!0||J.isInstancedMesh&&Zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Zt.instancingMorph===!1&&J.morphTexture!==null||Zt.envMap!==Gt||it.fog===!0&&Zt.fog!==Pt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==wt.numPlanes||Zt.numIntersection!==wt.numIntersection)||Zt.vertexAlphas!==ue||Zt.vertexTangents!==Se||Zt.morphTargets!==Kt||Zt.morphNormals!==ge||Zt.morphColors!==en||Zt.toneMapping!==Ke||Zt.morphTargetsCount!==Tn)&&(pe=!0):(pe=!0,Zt.__version=it.version);let Xn=Zt.currentProgram;pe===!0&&(Xn=Ni(it,Y,J));let vi=!1,Hi=!1,xi=!1;const Ye=Xn.getUniforms(),An=Zt.uniforms;if(At.useProgram(Xn.program)&&(vi=!0,Hi=!0,xi=!0),it.id!==rt&&(rt=it.id,Hi=!0),vi||Z!==R){At.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ye.setValue(k,"projectionMatrix",R.projectionMatrix),Ye.setValue(k,"viewMatrix",R.matrixWorldInverse);const Wn=Ye.map.cameraPosition;Wn!==void 0&&Wn.setValue(k,Te.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&Ye.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ye.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,Hi=!0,xi=!0)}if(Zt.needsLights&&($n.state.directionalShadowMap.length>0&&Ye.setValue(k,"directionalShadowMap",$n.state.directionalShadowMap,H),$n.state.spotShadowMap.length>0&&Ye.setValue(k,"spotShadowMap",$n.state.spotShadowMap,H),$n.state.pointShadowMap.length>0&&Ye.setValue(k,"pointShadowMap",$n.state.pointShadowMap,H)),J.isSkinnedMesh){Ye.setOptional(k,J,"bindMatrix"),Ye.setOptional(k,J,"bindMatrixInverse");const Mn=J.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ye.setValue(k,"boneTexture",Mn.boneTexture,H))}J.isBatchedMesh&&(Ye.setOptional(k,J,"batchingTexture"),Ye.setValue(k,"batchingTexture",J._matricesTexture,H),Ye.setOptional(k,J,"batchingIdTexture"),Ye.setValue(k,"batchingIdTexture",J._indirectTexture,H),Ye.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&Ye.setValue(k,"batchingColorTexture",J._colorsTexture,H));const ti=ut.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&zt.update(J,ut,Xn),(Hi||Zt.receiveShadow!==J.receiveShadow)&&(Zt.receiveShadow=J.receiveShadow,Ye.setValue(k,"receiveShadow",J.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=A2()),Hi&&(Ye.setValue(k,"toneMappingExposure",L.toneMappingExposure),Zt.needsLights&&Ya(An,xi),Pt&&it.fog===!0&&Et.refreshFogUniforms(An,Pt),Et.refreshMaterialUniforms(An,it,_t,q,F.state.transmissionRenderTarget[R.id]),ed.upload(k,Ao(Zt),An,H)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ed.upload(k,Ao(Zt),An,H),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ye.setValue(k,"center",J.center),Ye.setValue(k,"modelViewMatrix",J.modelViewMatrix),Ye.setValue(k,"normalMatrix",J.normalMatrix),Ye.setValue(k,"modelMatrix",J.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Mn=it.uniformsGroups;for(let Wn=0,na=Mn.length;Wn<na;Wn++){const ps=Mn[Wn];Ht.update(ps,Xn),Ht.bind(ps,Xn)}}return Xn}function Ya(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function qs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(R,Y,ut){const it=E.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Y,E.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ut,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ut=E.get(R);ut.__webglFramebuffer=Y,ut.__useDefaultFramebuffer=Y===void 0};const Ea=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,ut=0){st=R,V=Y,tt=ut;let it=null,J=!1,Pt=!1;if(R){const Bt=E.get(R);if(Bt.__useDefaultFramebuffer!==void 0){At.bindFramebuffer(k.FRAMEBUFFER,Bt.__webglFramebuffer),O.copy(R.viewport),P.copy(R.scissor),$=R.scissorTest,At.viewport(O),At.scissor(P),At.setScissorTest($),rt=-1;return}else if(Bt.__webglFramebuffer===void 0)H.setupRenderTarget(R);else if(Bt.__hasExternalTextures)H.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ue=R.depthTexture;if(Bt.__boundDepthTexture!==ue){if(ue!==null&&E.has(ue)&&(R.width!==ue.image.width||R.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Pt=!0);const Gt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Gt[Y])?it=Gt[Y][ut]:it=Gt[Y],J=!0):R.samples>0&&H.useMultisampledRTT(R)===!1?it=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Gt)?it=Gt[ut]:it=Gt,O.copy(R.viewport),P.copy(R.scissor),$=R.scissorTest}else O.copy(et).multiplyScalar(_t).floor(),P.copy(St).multiplyScalar(_t).floor(),$=Lt;if(ut!==0&&(it=Ea),At.bindFramebuffer(k.FRAMEBUFFER,it)&&At.drawBuffers(R,it),At.viewport(O),At.scissor(P),At.setScissorTest($),J){const Bt=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,ut)}else if(Pt){const Bt=Y;for(let Qt=0;Qt<R.textures.length;Qt++){const Gt=E.get(R.textures[Qt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Qt,Gt.__webglTexture,ut,Bt)}}else if(R!==null&&ut!==0){const Bt=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Bt.__webglTexture,ut)}rt=-1},this.readRenderTargetPixels=function(R,Y,ut,it,J,Pt,Yt,Bt=0){if(!(R&&R.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Yt!==void 0&&(Qt=Qt[Yt]),Qt){At.bindFramebuffer(k.FRAMEBUFFER,Qt);try{const Gt=R.textures[Bt],ue=Gt.format,Se=Gt.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Bt),!ot.textureFormatReadable(ue)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Se)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-it&&ut>=0&&ut<=R.height-J&&k.readPixels(Y,ut,it,J,Ot.convert(ue),Ot.convert(Se),Pt)}finally{const Gt=st!==null?E.get(st).__webglFramebuffer:null;At.bindFramebuffer(k.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ut,it,J,Pt,Yt,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Yt!==void 0&&(Qt=Qt[Yt]),Qt)if(Y>=0&&Y<=R.width-it&&ut>=0&&ut<=R.height-J){At.bindFramebuffer(k.FRAMEBUFFER,Qt);const Gt=R.textures[Bt],ue=Gt.format,Se=Gt.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Bt),!ot.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Kt),k.bufferData(k.PIXEL_PACK_BUFFER,Pt.byteLength,k.STREAM_READ),k.readPixels(Y,ut,it,J,Ot.convert(ue),Ot.convert(Se),0);const ge=st!==null?E.get(st).__webglFramebuffer:null;At.bindFramebuffer(k.FRAMEBUFFER,ge);const en=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await YM(k,en,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Kt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Pt),k.deleteBuffer(Kt),k.deleteSync(en),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ut=0){const it=Math.pow(2,-ut),J=Math.floor(R.image.width*it),Pt=Math.floor(R.image.height*it),Yt=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;H.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,ut,0,0,Yt,Bt,J,Pt),At.unbindTexture()};const ba=k.createFramebuffer(),qa=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,ut=null,it=null,J=0,Pt=0){let Yt,Bt,Qt,Gt,ue,Se,Kt,ge,en;const Ke=R.isCompressedTexture?R.mipmaps[Pt]:R.image;if(ut!==null)Yt=ut.max.x-ut.min.x,Bt=ut.max.y-ut.min.y,Qt=ut.isBox3?ut.max.z-ut.min.z:1,Gt=ut.min.x,ue=ut.min.y,Se=ut.isBox3?ut.min.z:0;else{const An=Math.pow(2,-J);Yt=Math.floor(Ke.width*An),Bt=Math.floor(Ke.height*An),R.isDataArrayTexture?Qt=Ke.depth:R.isData3DTexture?Qt=Math.floor(Ke.depth*An):Qt=1,Gt=0,ue=0,Se=0}it!==null?(Kt=it.x,ge=it.y,en=it.z):(Kt=0,ge=0,en=0);const Oe=Ot.convert(Y.format),Tn=Ot.convert(Y.type);let Zt;Y.isData3DTexture?(H.setTexture3D(Y,0),Zt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(H.setTexture2DArray(Y,0),Zt=k.TEXTURE_2D_ARRAY):(H.setTexture2D(Y,0),Zt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const $n=k.getParameter(k.UNPACK_ROW_LENGTH),pe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Xn=k.getParameter(k.UNPACK_SKIP_PIXELS),vi=k.getParameter(k.UNPACK_SKIP_ROWS),Hi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ke.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ke.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Gt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ue),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Se);const xi=R.isDataArrayTexture||R.isData3DTexture,Ye=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const An=E.get(R),ti=E.get(Y),Mn=E.get(An.__renderTarget),Wn=E.get(ti.__renderTarget);At.bindFramebuffer(k.READ_FRAMEBUFFER,Mn.__webglFramebuffer),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let na=0;na<Qt;na++)xi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,Se+na),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Pt,en+na)),k.blitFramebuffer(Gt,ue,Yt,Bt,Kt,ge,Yt,Bt,k.DEPTH_BUFFER_BIT,k.NEAREST);At.bindFramebuffer(k.READ_FRAMEBUFFER,null),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const An=E.get(R),ti=E.get(Y);At.bindFramebuffer(k.READ_FRAMEBUFFER,ba),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,qa);for(let Mn=0;Mn<Qt;Mn++)xi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,An.__webglTexture,J,Se+Mn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,An.__webglTexture,J),Ye?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ti.__webglTexture,Pt,en+Mn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ti.__webglTexture,Pt),J!==0?k.blitFramebuffer(Gt,ue,Yt,Bt,Kt,ge,Yt,Bt,k.COLOR_BUFFER_BIT,k.NEAREST):Ye?k.copyTexSubImage3D(Zt,Pt,Kt,ge,en+Mn,Gt,ue,Yt,Bt):k.copyTexSubImage2D(Zt,Pt,Kt,ge,Gt,ue,Yt,Bt);At.bindFramebuffer(k.READ_FRAMEBUFFER,null),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ye?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Zt,Pt,Kt,ge,en,Yt,Bt,Qt,Oe,Tn,Ke.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Zt,Pt,Kt,ge,en,Yt,Bt,Qt,Oe,Ke.data):k.texSubImage3D(Zt,Pt,Kt,ge,en,Yt,Bt,Qt,Oe,Tn,Ke):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Pt,Kt,ge,Yt,Bt,Oe,Tn,Ke.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Pt,Kt,ge,Ke.width,Ke.height,Oe,Ke.data):k.texSubImage2D(k.TEXTURE_2D,Pt,Kt,ge,Yt,Bt,Oe,Tn,Ke);k.pixelStorei(k.UNPACK_ROW_LENGTH,$n),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xn),k.pixelStorei(k.UNPACK_SKIP_ROWS,vi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Hi),Pt===0&&Y.generateMipmaps&&k.generateMipmap(Zt),At.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&H.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?H.setTextureCube(R,0):R.isData3DTexture?H.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?H.setTexture2DArray(R,0):H.setTexture2D(R,0),At.unbindTexture()},this.resetState=function(){V=0,tt=0,st=null,At.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ve._getUnpackColorSpace()}}const R2=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Zd,AddEquation:Dr,AddOperation:bS,AdditiveBlending:qm,AgXToneMapping:d0,AlphaFormat:x0,AlwaysCompare:US,AlwaysDepth:rd,AlwaysStencilFunc:Km,AmbientLight:QS,ArrayCamera:$S,BackSide:gi,BasicDepthPacking:AS,BasicShadowMap:iS,Box3:Or,BoxGeometry:Ir,BufferAttribute:ya,BufferGeometry:ea,ByteType:m0,Camera:L0,CanvasTexture:Rl,CatmullRomCurve3:kS,CineonToneMapping:u0,ClampToEdgeWrapping:rs,Clock:ey,Color:de,ColorManagement:Ve,ConstantAlphaFactor:yS,ConstantColorFactor:xS,CubeCamera:JS,CubeDepthTexture:GS,CubeReflectionMapping:Ur,CubeRefractionMapping:yo,CubeTexture:C0,CubeUVReflectionMapping:eu,CullFaceBack:Ym,CullFaceFront:nS,CullFaceNone:eS,Curve:VS,CustomBlending:sS,CustomToneMapping:f0,Data3DTexture:BS,DataArrayTexture:M0,DataTexture:R0,DepthFormat:cs,DepthStencilFormat:Nr,DepthTexture:Ol,DirectionalLight:e0,DoubleSide:zn,DstAlphaFactor:pS,DstColorFactor:gS,EqualCompare:DS,EqualDepth:ld,EquirectangularReflectionMapping:Kf,EquirectangularRefractionMapping:Qf,Euler:ta,EventDispatcher:bo,ExternalTexture:w0,Float32BufferAttribute:Qn,FloatType:xa,Fog:$c,FrontSide:Ws,Frustum:lh,GLSL3:Jm,GreaterCompare:NS,GreaterDepth:ud,GreaterEqualCompare:sh,GreaterEqualDepth:cd,Group:Al,HalfFloatType:ls,HemisphereLight:KS,ImageUtils:PS,InstancedBufferAttribute:t0,InstancedMesh:HS,IntType:Kd,KeepStencilOp:mo,Layers:oh,LessCompare:wS,LessDepth:od,LessEqualCompare:ah,LessEqualDepth:So,Light:Bl,LinearFilter:Kn,LinearMipmapLinearFilter:ks,LinearMipmapNearestFilter:Jf,LinearSRGBColorSpace:Eo,LinearToneMapping:l0,LinearTransfer:Qc,Material:To,MathUtils:En,Matrix3:be,Matrix4:un,MaxEquation:cS,Mesh:He,MeshBasicMaterial:tu,MeshDepthMaterial:jS,MeshDistanceMaterial:ZS,MeshLambertMaterial:qS,MeshPhysicalMaterial:go,MeshStandardMaterial:Vs,MinEquation:lS,MirroredRepeatWrapping:dd,MixOperation:ES,MultiplyBlending:Zm,MultiplyOperation:jd,NearestFilter:Zn,NearestMipmapLinearFilter:Hc,NearestMipmapNearestFilter:TS,NeutralToneMapping:h0,NeverCompare:CS,NeverDepth:sd,NoBlending:os,NoColorSpace:Gs,NoToneMapping:Ha,NormalBlending:xo,NotEqualCompare:LS,NotEqualDepth:fd,Object3D:dn,ObjectSpaceNormalMap:RS,OneFactor:fS,OneMinusConstantAlphaFactor:MS,OneMinusConstantColorFactor:SS,OneMinusDstAlphaFactor:mS,OneMinusDstColorFactor:_S,OneMinusSrcAlphaFactor:ad,OneMinusSrcColorFactor:hS,OrthographicCamera:fh,PCFShadowMap:vo,PCFSoftShadowMap:aS,PMREMGenerator:Yd,PerspectiveCamera:wi,Plane:wr,PlaneGeometry:ss,PointLight:Kc,Quaternion:Ys,R11_EAC_Format:Sd,RED_GREEN_RGTC2_Format:kd,RED_RGTC1_Format:Gd,REVISION:qd,RG11_EAC_Format:Md,RGBAFormat:Sa,RGBAIntegerFormat:nh,RGBA_ASTC_10x10_Format:Id,RGBA_ASTC_10x5_Format:Ld,RGBA_ASTC_10x6_Format:Ud,RGBA_ASTC_10x8_Format:Od,RGBA_ASTC_12x10_Format:Pd,RGBA_ASTC_12x12_Format:Fd,RGBA_ASTC_4x4_Format:bd,RGBA_ASTC_5x4_Format:Td,RGBA_ASTC_5x5_Format:Ad,RGBA_ASTC_6x5_Format:Rd,RGBA_ASTC_6x6_Format:Cd,RGBA_ASTC_8x5_Format:wd,RGBA_ASTC_8x6_Format:Dd,RGBA_ASTC_8x8_Format:Nd,RGBA_BPTC_Format:Bd,RGBA_ETC2_EAC_Format:xd,RGBA_PVRTC_2BPPV1_Format:gd,RGBA_PVRTC_4BPPV1_Format:md,RGBA_S3TC_DXT1_Format:Wc,RGBA_S3TC_DXT3_Format:Yc,RGBA_S3TC_DXT5_Format:qc,RGBFormat:S0,RGB_BPTC_SIGNED_Format:zd,RGB_BPTC_UNSIGNED_Format:Hd,RGB_ETC1_Format:_d,RGB_ETC2_Format:vd,RGB_PVRTC_2BPPV1_Format:pd,RGB_PVRTC_4BPPV1_Format:hd,RGB_S3TC_DXT1_Format:Xc,RGFormat:Mo,RGIntegerFormat:eh,RawShaderMaterial:YS,Ray:A0,Raycaster:ty,RedFormat:$d,RedIntegerFormat:th,ReinhardToneMapping:c0,RenderTarget:FS,RepeatWrapping:wl,ReverseSubtractEquation:oS,RingGeometry:ch,SIGNED_R11_EAC_Format:yd,SIGNED_RED_GREEN_RGTC2_Format:Xd,SIGNED_RED_RGTC1_Format:Vd,SIGNED_RG11_EAC_Format:Ed,SRGBColorSpace:Gn,SRGBTransfer:tn,Scene:E0,ShaderChunk:Re,ShaderLib:Ba,ShaderMaterial:ka,ShortType:g0,Source:rh,Sphere:Fl,SphereGeometry:uh,SpotLight:td,SrcAlphaFactor:id,SrcAlphaSaturateFactor:vS,SrcColorFactor:dS,StaticDrawUsage:Qm,SubtractEquation:rS,SubtractiveBlending:jm,TangentSpaceNormalMap:ih,Texture:ui,Triangle:va,UVMapping:p0,Uint16BufferAttribute:b0,Uint32BufferAttribute:T0,UniformsLib:Wt,UniformsUtils:WS,UnsignedByteType:Bi,UnsignedInt101111Type:v0,UnsignedInt248Type:Nl,UnsignedInt5999Type:_0,UnsignedIntType:Va,UnsignedShort4444Type:Qd,UnsignedShort5551Type:Jd,UnsignedShortType:Dl,VSMShadowMap:Tl,Vector2:we,Vector3:j,Vector4:bn,WebGLCoordinateSystem:za,WebGLCubeRenderTarget:U0,WebGLRenderTarget:Ga,WebGLRenderer:ly,WebGLUtils:oy,WebGPUCoordinateSystem:Ll,WebXRController:$f,ZeroFactor:uS,createCanvasElement:OS,error:Ge,log:$m,warn:_e,warnOnce:Jc},Symbol.toStringTag,{value:"Module"}));class C2 extends E0{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Ir;t.deleteAttribute("uv");const i=new Vs({side:gi}),s=new Vs,l=new Kc(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new He(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new HS(t,s,6),h=new dn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),f.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),f.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),f.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),f.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),f.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),f.setMatrixAt(5,h.matrix),this.add(f);const m=new He(t,yl(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new He(t,yl(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new He(t,yl(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new He(t,yl(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new He(t,yl(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const S=new He(t,yl(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function yl(r){return new qS({color:0,emissive:16777215,emissiveIntensity:r})}const w2=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],D2=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],N2=["EXISTS","GROWS","DECLINES","TRANSFORMS","INFLUENCES"],L2=["LOW","MEDIUM","HIGH","EXTREME"],U2=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],O2=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],I2={SOCIETY:0,POLITICS:30,ECONOMY:60,TECHNOLOGY:90,MEDIA:120,CULTURE:150,SCIENCE:180,EDUCATION:210,ENVIRONMENT:240,INFRASTRUCTURE:270,ORGANIZATIONS:300,INDIVIDUALS:330},P2={NOW:.12,LT1Y:.18,Y1_3:.24,Y3_10:.3,GT10Y:.34},F2={LOW:.08,MEDIUM:.12,HIGH:.16,EXTREME:.2},B2={HYPOTHESIS:0,INDICATION:1,PROBABLE:2,CONFIRMED:3},z2={subject:{TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",IDE:"IDEA",IDEA:"IDEA",INSTITUTION:"INSTITUTION",INST:"INSTITUTION",EVENT:"EVENT",EVT:"EVENT",BREAKTHROUGH:"BREAKTHROUGH",BRK:"BREAKTHROUGH",SYSTEM:"SYSTEM",SYS:"SYSTEM",INDIVIDUAL:"INDIVIDUAL",IND:"INDIVIDUAL"},domain:{SOC:"SOCIETY",SOCIETY:"SOCIETY",POL:"POLITICS",POLITICS:"POLITICS",ECO:"ECONOMY",ECONOMY:"ECONOMY",TECH:"TECHNOLOGY",TECHNOLOGY:"TECHNOLOGY",MEDIA:"MEDIA",CULTURE:"CULTURE",CUL:"CULTURE",SCI:"SCIENCE",SCIENCE:"SCIENCE",EDU:"EDUCATION",EDUCATION:"EDUCATION",ENV:"ENVIRONMENT",ENVIRONMENT:"ENVIRONMENT",INF:"INFRASTRUCTURE",INFRASTRUCTURE:"INFRASTRUCTURE",ORG:"ORGANIZATIONS",ORGANIZATIONS:"ORGANIZATIONS",INDS:"INDIVIDUALS",INDIVIDUALS:"INDIVIDUALS"},verb:{EXISTS:"EXISTS",IS:"EXISTS",GROWS:"GROWS",GROW:"GROWS",DECLINES:"DECLINES",DECLINE:"DECLINES",TRANSFORMS:"TRANSFORMS",TRANSFORM:"TRANSFORMS",INFLUENCES:"INFLUENCES",INFLUENCE:"INFLUENCES"},magnitude:{LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",EXTREME:"EXTREME"},time:{NOW:"NOW",LT1Y:"LT1Y",Y1_3:"Y1_3",Y3_10:"Y3_10",GT10Y:"GT10Y"},certainty:{HYPOTHESIS:"HYPOTHESIS",INDICATION:"INDICATION",PROBABLE:"PROBABLE",CONFIRMED:"CONFIRMED"}};function cy(r){return(r-90)*Math.PI/180}function H2(r,t,i,s){const l=cy(s);return{x:r+i*Math.cos(l),y:t+i*Math.sin(l)}}function Ml(r,t,i){if(!i.includes(t))throw new Error(`Invalid ${r}: ${t}. Expected one of: ${i.join(", ")}`)}function O0(r){Ml("subject",r.subject,w2),Ml("domain",r.domain,D2),Ml("verb",r.verb,N2),Ml("magnitude",r.magnitude,L2),Ml("time",r.time,U2),Ml("certainty",r.certainty,O2)}function uy(r){const t=r.split(".").map(l=>l.trim().toUpperCase()).filter(Boolean);if(t.length!==6)throw new Error(`Canonical sentence must have 6 tokens, got ${t.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`);function i(l,c){const f=z2[l][c];if(!f)throw new Error(`Unknown ${l} token: ${c}`);return f}const s={subject:i("subject",t[0]),domain:i("domain",t[1]),verb:i("verb",t[2]),magnitude:i("magnitude",t[3]),time:i("time",t[4]),certainty:i("certainty",t[5])};return O0(s),s}function Vc(r){return O0(r),[r.subject,r.domain,r.verb,r.magnitude,r.time,r.certainty].join(".")}function kc(r){return Vc(uy(r))}function G2(r,t,i,s){if(r.save(),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=2,t==="TECHNOLOGY")r.beginPath(),r.arc(i.x,i.y,5,0,Math.PI*2),r.stroke();else if(t==="IDEA")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y+5),r.lineTo(i.x-6,i.y+5),r.closePath(),r.stroke();else if(t==="INSTITUTION")r.strokeRect(i.x-5,i.y-5,10,10);else if(t==="EVENT")r.beginPath(),r.moveTo(i.x,i.y-6),r.lineTo(i.x+6,i.y),r.lineTo(i.x,i.y+6),r.lineTo(i.x-6,i.y),r.closePath(),r.stroke();else if(t==="BREAKTHROUGH"){for(let l=0;l<10;l+=1){const c=l%2===0?6:2.6,f=(-90+l*36)*(Math.PI/180),h=i.x+Math.cos(f)*c,m=i.y+Math.sin(f)*c;l===0&&r.beginPath(),l===0?r.moveTo(h,m):r.lineTo(h,m)}r.closePath(),r.stroke()}else if(t==="SYSTEM"){for(let l=0;l<6;l+=1){const c=(-90+l*60)*(Math.PI/180),f=i.x+Math.cos(c)*6,h=i.y+Math.sin(c)*6;l===0&&r.beginPath(),l===0?r.moveTo(f,h):r.lineTo(f,h)}r.closePath(),r.stroke()}else r.beginPath(),r.arc(i.x,i.y,2.6,0,Math.PI*2),r.fill();r.restore()}function Ic(r,t,i,s,l){const c=i.x-t.x,f=i.y-t.y,h=Math.sqrt(c*c+f*f)||1,m=c/h,p=f/h,_=-p,v=m,g={x:i.x-m*l+_*(l*.58),y:i.y-p*l+v*(l*.58)},S={x:i.x-m*l-_*(l*.58),y:i.y-p*l-v*(l*.58)};r.save(),r.fillStyle=s,r.beginPath(),r.moveTo(i.x,i.y),r.lineTo(g.x,g.y),r.lineTo(S.x,S.y),r.closePath(),r.fill(),r.restore()}function Pc(r,t,i,s,l,c){const f=B2[t.certainty];if(!(f<=0)){r.save(),r.fillStyle=l;for(let h=1;h<=f;h+=1){const m=h/(f+1);let p=i.x+(s.x-i.x)*m,_=i.y+(s.y-i.y)*m;if(t.verb==="TRANSFORMS"&&c){const v=1-m;p=v*v*i.x+2*v*m*c.x+m*m*s.x,_=v*v*i.y+2*v*m*c.y+m*m*s.y}r.beginPath(),r.arc(p,_,2.2,0,Math.PI*2),r.fill()}r.restore()}}function V2(r,t,i){O0(t);const s=r.canvas.width,l=r.canvas.height,c=Math.min(s,l),f=s*.5,h=l*.5,m=i?.backgroundColor??"rgba(6,14,24,0.74)",p=i?.lineColor??"rgba(102,221,255,0.96)",_=i?.gridColor??"rgba(102,221,255,0.58)";r.clearRect(0,0,s,l),r.fillStyle=m,r.beginPath(),r.arc(f,h,c*.42,0,Math.PI*2),r.fill(),r.strokeStyle=_,r.lineWidth=2.1,r.beginPath(),r.arc(f,h,c*.38,0,Math.PI*2),r.stroke(),r.lineWidth=1.6,r.beginPath(),r.arc(f,h,c*.12,0,Math.PI*2),r.stroke();const v=I2[t.domain],g=P2[t.time]*c,S=F2[t.magnitude]*c,b=H2(f,h,g,v),D=cy(v),M=Math.cos(D),y=Math.sin(D),C=-y,U=M;r.strokeStyle=p,r.lineWidth=2.4,r.lineCap="round";let N={x:b.x,y:b.y},F={x:b.x+M*S,y:b.y+y*S},B;if(t.verb==="EXISTS")N={x:b.x-C*(S*.48),y:b.y-U*(S*.48)},F={x:b.x+C*(S*.48),y:b.y+U*(S*.48)},r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(F.x,F.y),r.stroke(),Pc(r,t,N,F,p);else if(t.verb==="DECLINES")F={x:b.x-M*S,y:b.y-y*S},r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(F.x,F.y),r.stroke(),Ic(r,N,F,p,7),Pc(r,t,N,F,p);else if(t.verb==="TRANSFORMS")B={x:b.x+C*(S*.34)+M*(S*.34),y:b.y+U*(S*.34)+y*(S*.34)},r.beginPath(),r.moveTo(N.x,N.y),r.quadraticCurveTo(B.x,B.y,F.x,F.y),r.stroke(),Ic(r,B,F,p,7),Pc(r,t,N,F,p,B);else if(t.verb==="INFLUENCES"){const T={x:b.x+C*3.4,y:b.y+U*3.4},L={x:F.x+C*3.4,y:F.y+U*3.4},pt={x:b.x-C*3.4,y:b.y-U*3.4},V={x:F.x-C*3.4,y:F.y-U*3.4};r.beginPath(),r.moveTo(T.x,T.y),r.lineTo(L.x,L.y),r.moveTo(pt.x,pt.y),r.lineTo(V.x,V.y),r.stroke(),Ic(r,T,L,p,6.6),Ic(r,pt,V,p,6.6),Pc(r,t,T,L,p)}else r.beginPath(),r.moveTo(N.x,N.y),r.lineTo(F.x,F.y),r.stroke(),Ic(r,N,F,p,7),Pc(r,t,N,F,p);r.fillStyle=p,r.beginPath(),r.arc(f,h,5,0,Math.PI*2),r.fill(),G2(r,t.subject,b,p)}function Yx(r,t,i){const s=uy(t);V2(r,s,i)}const qx="intelligenspartiet:language",k2={nb:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Laster mediepaneler ...",panelsFallback:"Kunne ikke laste media-paneler. Viser lokal fallback.",activeInstallation:"Aktiv installasjon",outsideVideos:"Film",outsideSignatures:"Signaturer",outsideAiNews:"KI-nyheter",outsideGlyphWall:"Glyff",outsideBack:"Tilbake",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signaturer",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"KI-nyheter",outsideNewsBody:"Direkte feed fra eksisterende nyhetsgrunnlag.",outsideNewsLoading:"Laster KI-nyheter ...",outsideNewsEmpty:"Ingen publiserte nyheter tilgjengelig ennå.",outsideNewsError:"Kunne ikke laste KI-nyheter."},en:{siteName:"INTELLIGENSPARTIET",loadingPanels:"Loading media panels ...",panelsFallback:"Could not load media panels. Showing local fallback.",activeInstallation:"Active installation",outsideVideos:"Film",outsideSignatures:"Signatures",outsideAiNews:"AI news",outsideGlyphWall:"Glyff",outsideBack:"Back",outsideVideosTitle:"Film",outsideSignaturesTitle:"Signatures",outsideGlyphWallTitle:"Glyff",outsideGlyphWallBody:"",outsideNewsTitle:"AI news",outsideNewsBody:"Live feed from the existing news dataset.",outsideNewsLoading:"Loading AI news ...",outsideNewsEmpty:"No published news items available yet.",outsideNewsError:"Could not load AI news."}},X2=100,zs=["TECHNOLOGY","IDEA","INSTITUTION","EVENT","BREAKTHROUGH","SYSTEM","INDIVIDUAL"],Hs=["SOCIETY","POLITICS","ECONOMY","TECHNOLOGY","MEDIA","CULTURE","SCIENCE","EDUCATION","ENVIRONMENT","INFRASTRUCTURE","ORGANIZATIONS","INDIVIDUALS"],fo=["LOW","MEDIUM","HIGH","EXTREME"],ho=["NOW","LT1Y","Y1_3","Y3_10","GT10Y"],Fc=["HYPOTHESIS","INDICATION","PROBABLE","CONFIRMED"],zm=[{phase:"signal-whisper",subjects:["IDEA","TECHNOLOGY","INSTITUTION"],domains:["MEDIA","CULTURE","TECHNOLOGY","EDUCATION","INDIVIDUALS"],verbs:["EXISTS","INFLUENCES","GROWS"],magnitudes:["LOW","MEDIUM"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"attention-displacement",subjects:["INDIVIDUAL","IDEA","SYSTEM"],domains:["INDIVIDUALS","MEDIA","ORGANIZATIONS","TECHNOLOGY"],verbs:["INFLUENCES","GROWS","DECLINES"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["PROBABLE","CONFIRMED"]},{phase:"output-surge",subjects:["SYSTEM","TECHNOLOGY","INSTITUTION"],domains:["TECHNOLOGY","ORGANIZATIONS","ECONOMY","INFRASTRUCTURE"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["HIGH","EXTREME"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"cognitive-strain",subjects:["INDIVIDUAL","SYSTEM","TECHNOLOGY"],domains:["INDIVIDUALS","ORGANIZATIONS","EDUCATION","SCIENCE"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["HIGH","EXTREME"],times:["NOW","LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"blame-cycle",subjects:["INSTITUTION","EVENT","SYSTEM"],domains:["POLITICS","SOCIETY","MEDIA","ECONOMY"],verbs:["INFLUENCES","TRANSFORMS","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["NOW","LT1Y"],certainties:["INDICATION","PROBABLE"]},{phase:"resistance-ritual",subjects:["INSTITUTION","INDIVIDUAL","EVENT"],domains:["CULTURE","POLITICS","ORGANIZATIONS","SOCIETY"],verbs:["DECLINES","INFLUENCES","TRANSFORMS"],magnitudes:["MEDIUM","HIGH"],times:["LT1Y","Y1_3"],certainties:["PROBABLE","CONFIRMED"]},{phase:"reskilling-wave",subjects:["IDEA","INSTITUTION","SYSTEM"],domains:["EDUCATION","SCIENCE","ORGANIZATIONS","TECHNOLOGY"],verbs:["GROWS","TRANSFORMS","INFLUENCES"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["PROBABLE","CONFIRMED"]},{phase:"institutional-memory",subjects:["INSTITUTION","SYSTEM","BREAKTHROUGH"],domains:["INFRASTRUCTURE","ORGANIZATIONS","ECONOMY","SCIENCE"],verbs:["EXISTS","TRANSFORMS","GROWS"],magnitudes:["MEDIUM","HIGH"],times:["Y1_3","Y3_10"],certainties:["INDICATION","PROBABLE","CONFIRMED"]},{phase:"myth-afterimage",subjects:["EVENT","IDEA","INDIVIDUAL"],domains:["CULTURE","MEDIA","SOCIETY","EDUCATION"],verbs:["EXISTS","INFLUENCES","DECLINES"],magnitudes:["LOW","MEDIUM","HIGH"],times:["Y3_10","GT10Y"],certainties:["INDICATION","PROBABLE"]},{phase:"recurrence",subjects:["SYSTEM","INSTITUTION","INDIVIDUAL"],domains:["SOCIETY","POLITICS","ORGANIZATIONS","INDIVIDUALS"],verbs:["TRANSFORMS","INFLUENCES","EXISTS"],magnitudes:["MEDIUM","HIGH"],times:["GT10Y","NOW"],certainties:["PROBABLE","CONFIRMED"]}],El=(r,t,i=0)=>r[(t+i)%r.length],Bc=(r,t,i)=>{const s=r.indexOf(t),l=s>=0?s:0;return r[(l+i+r.length*32)%r.length]},W2=r=>{const t=[],i=new Set,s=Math.ceil(r/zm.length);for(let l=0;l<zm.length;l+=1){const c=zm[l];for(let f=0;f<s&&t.length<r;f+=1){let h={subject:El(c.subjects,f,l),domain:El(c.domains,f,l*2),verb:El(c.verbs,f,l+f%3),magnitude:El(c.magnitudes,f,Math.floor(f/2)),time:El(c.times,f,Math.floor(f/3)),certainty:El(c.certainties,f,f%2)},m=kc(Vc(h));if(i.has(m)){let p=!1;for(let _=1;_<=Hs.length*ho.length;_+=1){const v={...h,subject:Bc(zs,h.subject,Math.floor(_/7)),domain:Bc(Hs,h.domain,_),magnitude:Bc(fo,h.magnitude,Math.floor(_/4)),time:Bc(ho,h.time,Math.floor(_/2)),certainty:Bc(Fc,h.certainty,Math.floor(_/3))},g=kc(Vc(v));if(!i.has(g)){h=v,m=g,p=!0;break}}if(!p)for(const _ of zs){for(const v of Hs){for(const g of fo){for(const S of ho){for(const b of Fc){const D=kc(Vc({subject:_,domain:v,verb:h.verb,magnitude:g,time:S,certainty:b}));if(!i.has(D)){h={subject:_,domain:v,verb:h.verb,magnitude:g,time:S,certainty:b},m=D,p=!0;break}}if(p)break}if(p)break}if(p)break}if(p)break}}if(i.has(m)){const p=zs.length*Hs.length*fo.length*ho.length*Fc.length;for(let _=0;_<p;_+=1){const v=t.length+_,g=v%zs.length,S=Math.floor(v/zs.length)%Hs.length,b=Math.floor(v/(zs.length*Hs.length))%fo.length,D=Math.floor(v/(zs.length*Hs.length*fo.length))%ho.length,M=Math.floor(v/(zs.length*Hs.length*fo.length*ho.length))%Fc.length,y={subject:zs[g],domain:Hs[S],verb:h.verb,magnitude:fo[b],time:ho[D],certainty:Fc[M]},C=kc(Vc(y));if(!i.has(C)){m=C;break}}}i.add(m),t.push({id:`ra-${String(t.length+1).padStart(3,"0")}`,canonical:m,phase:c.phase})}}return t},Y2=W2(X2),q2={material:{emissive_base:0,roughness:.62,metalness:.02},lighting:{cast_environment_light:!1},movement_reaction:{type:"none"}},Hm=(r,t,i,s,l,c,f)=>({id:r,type:"text",kind:"text",content:{title:t,description:i},title:t,body:i,title_nb:t,body_nb:i,title_en:c,body_en:f,installation:{mount_type:"vinyl_flush",placement_t:l,side:s,physical_size:[8.4,4.9],wall_offset:.15,vertical_offset:-.3},shading_and_reaction:q2}),Xf=[Hm("fallback-01","INTELLIGENSPARTIET","Politisk KI-kapasitet for et samfunn i rask omforming.","right",.1,"INTELLIGENSPARTIET","Political AI capacity for a society in rapid transformation."),Hm("fallback-02","FORSTÅ SKIFTET","Kartlegg effekt, risiko og styringsbehov før beslutninger låses.","left",.42,"UNDERSTAND THE SHIFT","Map impact, risk, and governance needs before decisions are locked in."),Hm("fallback-03","BYGG INSTITUSJONER","Tilsyn, standarder og ansvar som faktisk kan håndheves.","right",.74,"BUILD INSTITUTIONS","Oversight, standards, and accountability that can actually be enforced.")],j2=(r,t)=>({id:String(r?.id??`glyph-${t+1}`).trim()||`glyph-${t+1}`,label:String(r?.label??"").trim(),label_nb:String(r?.label_nb??r?.label_no??"").trim(),panel_id:String(r?.panel_id??"").trim(),canonical:String(r?.canonical??"").trim(),enabled:r?.enabled!==!1,note:String(r?.note??"").trim(),note_nb:String(r?.note_nb??r?.note_no??"").trim()}),Fa=r=>{let t=r%1;return t<0&&(t+=1),t},Z2=(r,t,i,s)=>{let l=t-r;return l>.5&&(l-=1),l<-.5&&(l+=1),Fa(r+l*(1-Math.exp(-i*s)))},jx=12,Gm=9,Vm=.12,Zx=-1,km=2.4,K2=.3,Q2=1.2,J2=.3,Kx=6741503,$2=5,tR=3.2,eR=.35,nR=.25,Qx=400,iR=2.5,Jx=16755251,Wf=3,aR=["/assets/data/ai-jobs-news.local.json","/assets/data/ai-jobs-news.json"],nd=[{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1770978482749-c088b297-1ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770978437489-d0299c39-WelhavenTheater.png"},{video:"https://larscuzner.com/static/_upload/2ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979065067-ff4bab61-WergelandTheater.jpg"},{video:"https://larscuzner.com/static/_upload/3ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979092555-8d0fe8b9-DameTheater.jpg"},{video:"https://larscuzner.com/static/_upload/4ChristTheater.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1770979109765-9708239d-TomatTheater.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771415406784-886154de-CamillaStone.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771415863642-3227a9d0-camillaStill.jpg"},{video:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",poster:"https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/posters/1771442255228-9181695a-freepik__keep-everything-in-img1-the-same-only-change-the-p__35543.png"}],sR="https://pub-b53c56f5af3e471cb8b3610afdc49a36.r2.dev/scrollytelling/videos/1771442235013-9c01df3d-FremtidensIntelligenssedler.mp4",rR=Math.max(0,nd.findIndex(r=>r.video===sR)),I0=17.6,fy=I0*(16/9),dy=fy*Math.sqrt(3)/2,oR=.56,lR=31.2,Yf=dy*2.62,$x=I0*.56,cR=60,uR=40,fR=220,dR=360,hR=105,pR=.75,tS=96,s0=[330,250,180,120],mR=[2,3.2,4.8,6.2],gR=[.12,.17,.22,.3],qf={tailPath:"",taperPaths:s0.map(()=>""),headPath:"",headX:0,headY:0,visible:!1},Xm=r=>{if(r.length<2)return"";if(r.length===2)return`M ${r[0].x} ${r[0].y} L ${r[1].x} ${r[1].y}`;let t=`M ${r[0].x} ${r[0].y}`;for(let l=1;l<r.length-1;l+=1){const c=r[l],f=r[l+1],h=(c.x+f.x)/2,m=(c.y+f.y)/2;t+=` Q ${c.x} ${c.y} ${h} ${m}`}const i=r[r.length-2],s=r[r.length-1];return`${t} Q ${i.x} ${i.y} ${s.x} ${s.y}`},_R=r=>[[-220,-1.2,-60],[-160,-.2,-180],[-40,.6,-230],[110,.2,-190],[220,.8,-90],[250,-.2,30],[190,.6,145],[70,-.3,205],[-75,.5,185],[-190,.2,95],[-235,-1,-30]].map(([i,s,l])=>new r.Vector3(i,s,l)),vR=(r,t,i,s,l,c)=>{hy(r,t,l).forEach((h,m)=>{r.fillText(h,i,s+m*c)})},hy=(r,t,i)=>{const s=t.split(" "),l=[];let c="";for(let f=0;f<s.length;f+=1){const h=s[f];if(!h)continue;const m=`${c}${h} `;r.measureText(m).width>i&&c.length>0?(l.push(c.trim()),c=`${h} `):c=m}return c.trim()&&l.push(c.trim()),l},xR=/\(\s*bold\s*\)/gi,SR=/\(\s*new\s*line\s*\)/gi,yR=/\(\s*new\s*paragraph\s*\)/gi,MR=r=>{const i=r.replace(/\r\n?/g,`
`).replace(yR,`

`).replace(SR,`
`).split(`
`);let s=!1;const l=[];return i.forEach(c=>{if(!(c.trim().length>0)){s=!0;return}const h=/\(\s*bold\s*\)/i.test(c),m=c.replace(xR,"").replace(/\s{2,}/g," ").trim();if(!m){s=!0;return}l.push({text:m,bold:h,paragraphBreak:s}),s=!1}),l},ER=(r,t,i,s,l,c,f,h,m=.6)=>{const p=MR(t);let _=s;p.forEach((v,g)=>{g>0&&v.paragraphBreak&&(_+=c*m),r.font=v.bold?h:f,hy(r,v.text,l).forEach(b=>{r.fillText(b,i,_),_+=c})}),r.font=f},bR=/\(\s*(?:bold|new\s*line|new\s*paragraph)\s*\)/gi,py=r=>r.toLowerCase().replace(/[—–]/g,"-").replace(/[.!?]+$/g,"").replace(/\s+/g," ").trim(),TR=r=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),AR=[["ai fatigue","KI-tretthet"],["brain fry","Hjernekok"],["threaded work","Trådet arbeid"],["cognitive orchestration","Kognitiv orkestrering"],["output inflation","Output-inflasjon"],["prompt looping","Prompt-løkker"],["decision density","Beslutningstetthet"],["cognitive overproduction","Kognitiv overproduksjon"],["continuous partial attention","Kontinuerlig delvis oppmerksomhet"],["ai work rhythm","KI-arbeidsrytme"],["cognitive checkpoints increase in short horizon.","Kognitive kontrollpunkter øker på kort sikt."],["overload reduces evaluative sharpness.","Overbelastning reduserer vurderingsskarphet."],["linear workflows shift to parallel supervision.","Lineære arbeidsflyter går over til parallell oppfølging."],["new skill: coordinating ai outputs.","Ny ferdighet: koordinering av KI-utdata."],["output volume spikes immediately.","Volumet av utdata øker umiddelbart."],["prompt-output loops shape behavior now.","Prompt-utdata-løkker former adferd nå."],["micro-decisions per hour increase.","Antall mikrobeslutninger per time øker."],["input load scales faster than cognition.","Informasjonsmengden skalerer raskere enn kognisjonen."],["prepared concept, not assigned to a tunnel slot yet.","Klargjort konsept, ikke tildelt tunnelplass ennå."],["mental exhaustion caused by continuous interaction with ai systems: prompting, reviewing, correcting, switching context, and supervising outputs.","Mental utmattelse forårsaket av kontinuerlig samhandling med KI-systemer: prompting, vurdering, korrigering, kontekstbytte og oppfølging av utdata."],["ai does not remove work - it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["ai does not remove work — it multiplies cognitive checkpoints.","KI fjerner ikke arbeid - den multipliserer kognitive kontrollpunkter."],["the broad umbrella term.","Det brede paraplybegrepet."],["ai accelerates production but slows mental recovery.","KI akselererer produksjon, men senker mental restitusjon."]],RR=new Map(AR.map(([r,t])=>[py(r),t])),CR=[["meaning","Betydning"],["why it happens","Hvorfor det skjer"],["key insight","Nøkkelinnsikt"],["symptoms","Symptomer"],["mental exhaustion","mental utmattelse"],["continuous interaction","kontinuerlig samhandling"],["cognitive checkpoints","kognitive kontrollpunkter"],["decision paralysis","beslutningsparalyse"],["difficulty judging quality","vansker med å vurdere kvalitet"],["rereading the same content","gjenlesing av det samme innholdet"],["loss of critical thinking sharpness","tap av kritisk vurderingsskarphet"],["parallel cognitive threads","parallelle kognitive tråder"],["parallel supervision","parallell oppfølging"],["new skill","ny ferdighet"],["coordinating outputs","koordinering av utdata"],["output volume","volumet av utdata"],["micro-decisions","mikrobeslutninger"],["input load","informasjonsmengde"],["short horizon","kort sikt"],["workers operate in parallel cognitive threads","arbeidere opererer i parallelle kognitive tråder"],["instead of finishing one thing, people supervise many processes simultaneously","i stedet for å fullføre én ting, overvåker folk mange prosesser samtidig"],["ai accelerates production but slows mental recovery","KI akselererer produksjon, men senker mental restitusjon"],["ai does not remove work","KI fjerner ikke arbeid"],["it multiplies cognitive checkpoints","den multipliserer kognitive kontrollpunkter"],["prepared concept","klargjort konsept"],["not assigned to a tunnel slot yet","ikke tildelt tunnelplass ennå"],["new paragraph","new paragraph"]],wR=CR.map(([r,t])=>[new RegExp(TR(r),"gi"),t]),DR={meaning:"betydning",the:"den",a:"en",an:"en",of:"av",in:"i",on:"på",at:"ved",for:"for",from:"fra",across:"på tvers av",into:"inn i",is:"er",are:"er",be:"være",can:"kan",will:"vil",this:"denne",that:"det",these:"disse",those:"de",and:"og",or:"eller",if:"hvis",then:"da",also:"også",people:"folk",person:"person",workers:"arbeidere",operate:"opererer",many:"mange",processes:"prosesser",process:"prosess",simultaneously:"samtidig",instead:"i stedet",finishing:"fullfører",finish:"fullføre",one:"én",thing:"ting",same:"samme",content:"innhold",critical:"kritisk",thinking:"tenkning",quality:"kvalitet",judging:"vurdere",difficulty:"vansker",loss:"tap",term:"begrep",broad:"bredt",umbrella:"paraply",threads:"tråder",why:"hvorfor",happens:"skjer",key:"nøkkel",insight:"innsikt",symptoms:"symptomer",mental:"mental",exhaustion:"utmattelse",caused:"forårsaket",by:"av",continuous:"kontinuerlig",interaction:"samhandling",with:"med",systems:"systemer",prompting:"prompting",reviewing:"vurdering",correcting:"korrigering",switching:"bytte",context:"kontekst",supervising:"oppfølging",outputs:"utdata",does:"gjør",not:"ikke",remove:"fjerner",work:"arbeid",it:"den",multiplies:"multipliserer",cognitive:"kognitive",checkpoints:"kontrollpunkter",accelerates:"akselererer",production:"produksjon",but:"men",slows:"senker",recovery:"restitusjon",overload:"overbelastning",reduces:"reduserer",evaluative:"vurderings",sharpness:"skarphet",linear:"lineære",workflows:"arbeidsflyter",shift:"skifter",to:"til",parallel:"parallell",supervision:"oppfølging",new:"ny",skill:"ferdighet",coordinating:"koordinering",output:"utdata",volume:"volum",spikes:"øker",immediately:"umiddelbart",prompt:"prompt",loops:"løkker",shape:"former",behavior:"adferd",now:"nå","micro-decisions":"mikrobeslutninger",per:"per",hour:"time",increase:"øker",input:"input",load:"belastning",scales:"skalerer",faster:"raskere",than:"enn",cognition:"kognisjon",prepared:"klargjort",concept:"konsept",assigned:"tildelt",tunnel:"tunnel",slot:"plass",yet:"ennå",fatigue:"tretthet",brain:"hjerne",fry:"kok",threaded:"trådet",orchestration:"orkestrering",inflation:"inflasjon",looping:"løkker",density:"tetthet",overproduction:"overproduksjon",partial:"delvis",attention:"oppmerksomhet",rhythm:"rytme"},NR=(r,t)=>t&&(r===r.toUpperCase()?t.toUpperCase():r[0]===r[0].toUpperCase()?t[0].toUpperCase()+t.slice(1):t),LR=r=>{let t=r;return wR.forEach(([i,s])=>{t=t.replace(i,s)}),t},UR=r=>r.replace(/\b[A-Za-z][A-Za-z'-]*\b/g,t=>{const i=DR[t.toLowerCase()];return i?NR(t,i):t}),OR=r=>{const t=r.trim();return t?(RR.get(py(t))??UR(LR(t))).replace(/\bai(?=\b|-)/gi,"KI").replace(/\s+([,.;:!?])/g,"$1").replace(/\s{2,}/g," ").trim():r},IR=r=>{if(!r||!r.trim())return r;const t=[];let i=r.replace(bR,s=>{const l=`__FMT_${t.length}__`;return t.push(s),l});return i=i.split(`
`).map(s=>OR(s)).join(`
`),t.forEach((s,l)=>{i=i.replace(`__FMT_${l}__`,s)}),i},jf=(...r)=>{for(const t of r){if(typeof t!="string")continue;const i=t.trim();if(i)return i}return""},r0=Math.PI*2,po=r=>Math.min(1,Math.max(0,r)),zc=(r,t,i,s,l)=>{const c=r0*(r*i+s),f=r0*(t*i+l),h=Math.sin(c)*Math.cos(f),m=.5*Math.sin((c+f)*.65+s*6.37);return h+m},Zf=(r,t,i)=>{const s=document.createElement("canvas");s.width=t,s.height=i;const l=s.getContext("2d");return l&&l.putImageData(new ImageData(new Uint8ClampedArray(r),t,i),0,0),new Rl(s)},_a=(r,t,i,s,l=!1)=>{r.wrapS=wl,r.wrapT=wl,r.repeat.set(t,i),r.anisotropy=s,r.minFilter=ks,r.magFilter=Kn,l&&(r.colorSpace=Gn),r.needsUpdate=!0},Wm=r=>{const{width:t,height:i,seed:s,baseColor:l,macroFreq:c,midFreq:f,microFreq:h,bandFreq:m,bandInfluence:p,seamAxis:_,seamFreq:v,seamDepth:g,seamWidth:S,roughnessBase:b,roughnessRange:D,normalStrength:M,aoStrength:y}=r,C=t*i,U=new de(l),N=new Float32Array(C);let F=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY;for(let rt=0;rt<i;rt+=1)for(let Z=0;Z<t;Z+=1){const O=rt*t+Z,P=Z/t,$=rt/i,mt=zc(P,$,c,s*.11,s*.23),gt=zc(P,$,f,s*.41+.18,s*.29+.07),I=zc(P,$,h,s*.71+.43,s*.53+.31),q=Math.sin(r0*((P+$*.33)*m+s*.17));let _t=0;if(_!=="none"&&v>0){const et=(_==="x"?P:$)*v%1,St=Math.min(et,1-et);_t=Math.exp(-Math.pow(St/Math.max(1e-4,S),2))}const Ut=mt*.6+gt*.28+I*.12+q*p-_t*g;N[O]=Ut,Ut<F&&(F=Ut),Ut>B&&(B=Ut)}const z=new Float32Array(C),T=Math.max(1e-4,B-F),L=new Uint8ClampedArray(C*4),pt=new Uint8ClampedArray(C*4),V=new Uint8ClampedArray(C*4);for(let rt=0;rt<i;rt+=1)for(let Z=0;Z<t;Z+=1){const O=rt*t+Z,P=O*4,$=Z/t,mt=rt/i,gt=po((N[O]-F)/T);z[O]=gt;const I=zc($,mt,f*.6,s*.19+.62,s*.73+.14)*.5+.5,q=po(.78+(gt-.5)*.24+(I-.5)*.12),_t=zc($,mt,c*.5,s*.37+.89,s*.13+.44),Ut=1+_t*.017,qt=1+_t*.007,et=1-_t*.013,St=po(b+(1-gt)*D+(I-.5)*.14),Lt=po(.94-(1-gt)*y);L[P]=Math.round(po(U.r*q*Ut)*255),L[P+1]=Math.round(po(U.g*q*qt)*255),L[P+2]=Math.round(po(U.b*q*et)*255),L[P+3]=255;const jt=Math.round(St*255);pt[P]=jt,pt[P+1]=jt,pt[P+2]=jt,pt[P+3]=255;const ie=Math.round(Lt*255);V[P]=ie,V[P+1]=ie,V[P+2]=ie,V[P+3]=255}const tt=(rt,Z)=>{const O=(rt+t)%t,P=(Z+i)%i;return z[P*t+O]},st=new Uint8ClampedArray(C*4);for(let rt=0;rt<i;rt+=1)for(let Z=0;Z<t;Z+=1){const P=(rt*t+Z)*4,$=tt(Z+1,rt)-tt(Z-1,rt),mt=tt(Z,rt+1)-tt(Z,rt-1),gt=-$*M,I=-mt*M,q=1,_t=1/Math.hypot(gt,I,q);st[P]=Math.round((gt*_t*.5+.5)*255),st[P+1]=Math.round((I*_t*.5+.5)*255),st[P+2]=Math.round((q*_t*.5+.5)*255),st[P+3]=255}return{albedo:Zf(L,t,i),normal:Zf(st,t,i),roughness:Zf(pt,t,i),ao:Zf(V,t,i)}},PR=(r,t,i)=>{if(r.readyState<2||r.videoWidth<2||r.videoHeight<2)return null;let s;try{i.drawImage(r,0,0,t.width,t.height),s=i.getImageData(0,0,t.width,t.height).data}catch{return null}let l=0,c=0,f=0;const h=s.length/4;for(let p=0;p<s.length;p+=4)l+=s[p],c+=s[p+1],f+=s[p+2];l/=h*255,c/=h*255,f/=h*255;const m=l*.2126+c*.7152+f*.0722;return{color:new de(l,c,f),luminance:m}};function FR(){const r=se.useRef([]),t=se.useRef(null),[i,s]=se.useState(!1),[l,c]=se.useState({width:1,height:1}),[f,h]=se.useState(qf);return se.useEffect(()=>{if(typeof window>"u")return;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(pointer: fine)"),_=window.matchMedia("(pointer: coarse)"),v=()=>{s(!m.matches&&p.matches&&!_.matches)},g=()=>{c({width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight)})},S=()=>{v()},b=(C,U)=>typeof C.addEventListener=="function"?(C.addEventListener("change",U),()=>C.removeEventListener("change",U)):(C.addListener(U),()=>C.removeListener(U));v(),g();const D=b(m,S),M=b(p,S),y=b(_,S);return window.addEventListener("resize",g,{passive:!0}),()=>{D(),M(),y(),window.removeEventListener("resize",g)}},[]),se.useEffect(()=>{if(!i||typeof window>"u"){r.current=[],h(qf);return}const m=_=>{if(_.pointerType!=="mouse"&&_.pointerType!=="pen")return;const v={x:_.clientX,y:_.clientY,t:performance.now()},g=r.current,S=g[g.length-1];if(S){const b=v.x-S.x,D=v.y-S.y;if(Math.hypot(b,D)<pR)return}g.push(v),g.length>tS&&g.splice(0,g.length-tS)},p=()=>{const _=performance.now(),v=_-dR,g=r.current;let S=0;for(;S<g.length&&g[S].t<v;)S+=1;if(S>0&&g.splice(0,S),g.length<2)h(b=>b.visible?qf:b);else{const b=Xm(g),D=s0.map(F=>{const B=_-F;let z=g.length-1;for(;z>0&&g[z-1].t>=B;)z-=1;const T=g.slice(z);return Xm(T.length>=2?T:g.slice(-2))}),M=_-hR;let y=g.length-1;for(;y>0&&g[y-1].t>=M;)y-=1;let C=g.slice(y);C.length<2&&(C=g.slice(-2));const U=Xm(C),N=C[C.length-1]??g[g.length-1];h(F=>F.visible&&F.tailPath===b&&F.taperPaths.every((B,z)=>B===D[z])&&F.headPath===U&&F.headX===N.x&&F.headY===N.y?F:{tailPath:b,taperPaths:D,headPath:U,headX:N.x,headY:N.y,visible:!0})}t.current=window.requestAnimationFrame(p)};return window.addEventListener("pointermove",m,{passive:!0}),t.current=window.requestAnimationFrame(p),()=>{window.removeEventListener("pointermove",m),t.current!==null&&(window.cancelAnimationFrame(t.current),t.current=null),r.current=[],h(qf)}},[i]),i?Dt.jsxs("svg",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-50 h-full w-full",viewBox:`0 0 ${l.width} ${l.height}`,preserveAspectRatio:"none",children:[Dt.jsxs("defs",{children:[Dt.jsxs("linearGradient",{id:"cursor-head-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Dt.jsx("stop",{offset:"0%",stopColor:"#7ad7ff",stopOpacity:"0.2"}),Dt.jsx("stop",{offset:"100%",stopColor:"#dff6ff",stopOpacity:"0.95"})]}),Dt.jsxs("filter",{id:"cursor-trail-glow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:[Dt.jsx("feGaussianBlur",{stdDeviation:"1.6",result:"blur"}),Dt.jsxs("feMerge",{children:[Dt.jsx("feMergeNode",{in:"blur"}),Dt.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),f.visible?Dt.jsxs(Dt.Fragment,{children:[Dt.jsx("path",{d:f.tailPath,fill:"none",stroke:"#7ad7ff",strokeOpacity:"0.1",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),f.taperPaths.map((m,p)=>m?Dt.jsx("path",{d:m,fill:"none",stroke:"#7ad7ff",strokeOpacity:gR[p],strokeWidth:mR[p],strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"},`cursor-taper-${s0[p]}`):null),Dt.jsx("path",{d:f.headPath,fill:"none",stroke:"url(#cursor-head-gradient)",strokeOpacity:"0.98",strokeWidth:"3.1",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#cursor-trail-glow)"}),Dt.jsx("circle",{cx:f.headX,cy:f.headY,r:"2.4",fill:"#e8f9ff",fillOpacity:"0.9",filter:"url(#cursor-trail-glow)"})]}):null]}):null}function BR(){const r=se.useRef(null),t=se.useRef([]),i=se.useRef(Vm),s=se.useRef(Vm),l=se.useRef([]),c=se.useRef(null);se.useEffect(()=>{const ot=document.body.style.cssText;return document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.style.cssText=ot,document.documentElement.style.overscrollBehavior=""}},[]);const[f,h]=se.useState(Xf),[m,p]=se.useState([]),[_,v]=se.useState(Xf[0].id),[g,S]=se.useState(!0),[b,D]=se.useState(!1),[M,y]=se.useState(!1),[C,U]=se.useState("menu"),[N,F]=se.useState([]),[B,z]=se.useState(!1),[T,L]=se.useState(""),[pt,V]=se.useState(()=>rR),[tt,st]=se.useState(""),[rt,Z]=se.useState(""),[O,P]=se.useState(""),[$,mt]=se.useState(()=>{if(typeof window>"u")return"nb";try{const ot=window.localStorage.getItem(qx);if(ot==="nb"||ot==="en")return ot}catch{}return"nb"});se.useEffect(()=>{try{window.localStorage.setItem(qx,$)}catch{}},[$]);const gt=k2[$],I=se.useMemo(()=>ot=>$==="nb"?IR(ot):ot,[$]),q=se.useMemo(()=>Y2.map((ot,At)=>{let w="";if(typeof document<"u"){const E=document.createElement("canvas");E.width=420,E.height=420;const H=E.getContext("2d");if(H)try{Yx(H,ot.canonical,{backgroundColor:"rgba(0,0,0,0)",lineColor:"rgba(46,39,33,0.94)",gridColor:"rgba(69,60,53,0.48)"}),w=E.toDataURL("image/png")}catch{w=""}}return{...ot,index:At,previewDataUrl:w}}),[]);se.useEffect(()=>{const ot=new Set(q.map(At=>At.canonical));ot.size!==q.length&&console.warn(`Glyff wall uniqueness violation: ${q.length-ot.size} duplicates detected.`)},[q]);const _t=se.useMemo(()=>JSON.stringify({version:"rl-story-v1",name:"replacement-anxiety-pattern",protocol:"ra-sequence-v1",read_order:"left_to_right_top_to_bottom",count:q.length,items:q.map(ot=>({order:ot.index+1,id:ot.id,phase:ot.phase,canonical:ot.canonical}))},null,2),[q]),Ut=se.useCallback(()=>{c.current?.()},[]),qt=se.useCallback(ot=>{ot.preventDefault();const At=tt.trim(),w=rt.trim(),E=O.trim();if(!At||!w||!E)return;const H=$==="nb"?"Kontakt fra Signaturer":"Contact from Signatures",ct=[`${$==="nb"?"Navn":"Name"}: ${At}`,`${$==="nb"?"E-post":"Email"}: ${w}`,"",`${$==="nb"?"Melding":"Message"}:`,E].join(`
`),xt=`mailto:lars@larscuzner.com?subject=${encodeURIComponent(H)}&body=${encodeURIComponent(ct)}`;window.location.href=xt},[$,rt,O,tt]),et=se.useRef(0),St=se.useRef(0),Lt=se.useRef(null),jt=se.useCallback(ot=>{const At=ot>=0?1:-1;V(w=>{const E=nd.length;return(w+At+E)%E})},[]),ie=se.useCallback(ot=>{ot.preventDefault();const At=Math.abs(ot.deltaX)>Math.abs(ot.deltaY)?ot.deltaX:ot.deltaY;et.current+=At;const w=performance.now();w-St.current<fR||Math.abs(et.current)<uR||(jt(et.current>0?1:-1),et.current=0,St.current=w)},[jt]),fe=se.useCallback(ot=>{Lt.current=ot.touches[0]?.clientX??null},[]),vn=se.useCallback(ot=>{const At=Lt.current,w=ot.changedTouches[0]?.clientX??null;if(Lt.current=null,At===null||w===null)return;const E=w-At;Math.abs(E)<28||jt(E<0?1:-1)},[jt]);se.useEffect(()=>{M||U("menu")},[M]),se.useEffect(()=>{C==="videos"&&(et.current=0,St.current=0)},[C]),se.useEffect(()=>{if(!M||C!=="videos")return;let ot=!1;const At=()=>{ot||l.current.forEach(E=>{if(!E||!E.paused&&E.readyState>=2)return;const H=E.play();H&&typeof H.catch=="function"&&H.catch(()=>{})})};At();const w=window.setInterval(At,900);return()=>{ot=!0,window.clearInterval(w)}},[M,C]),se.useEffect(()=>{if(!M||C!=="news")return;let ot=!1;const At=H=>({title:String(H?.title??"").trim(),source:String(H?.source??"").trim(),url:String(H?.url??"").trim(),snippet:String(H?.snippet??"").trim(),published_at:String(H?.published_at??"").trim(),published:H?.published!==!1}),w=H=>{const ct=Date.parse(H);return Number.isFinite(ct)?ct:0};return(async()=>{z(!0),L("");for(const H of aR)try{const ct=await fetch(H,{cache:"no-store"});if(!ct.ok)continue;const xt=await ct.json();if(!Array.isArray(xt?.items))continue;const Q=xt.items.map(At).filter(yt=>yt.published&&yt.title&&yt.url).sort((yt,ht)=>w(ht.published_at)-w(yt.published_at));if(ot)return;F(Q),z(!1);return}catch{}ot||(F([]),L(gt.outsideNewsError),z(!1))})(),()=>{ot=!0}},[M,C,gt.outsideNewsError]),se.useEffect(()=>{let ot=!1;return(async()=>{try{const w=await fetch("/assets/data/glyph-language-map.json",{cache:"no-store"}),E=w.headers.get("content-type")??"";if(!w.ok)throw new Error(`HTTP ${w.status} while loading glyph language map`);if(!E.toLowerCase().includes("application/json")){const Et=await w.text();throw new Error(`Expected JSON but got '${E||"unknown"}' (${Et.slice(0,120)})`)}const H=await w.json();if(!Array.isArray(H?.items))throw new Error("Glyph language payload missing 'items' array");const ct=H.items.map((Et,te)=>j2(Et,te)).filter(Et=>Et.enabled!==!1),xt=new Map,Q=[],yt=[],ht=[];if(ct.forEach(Et=>{if(!Et.canonical){yt.push(`${Et.id} (empty canonical)`);return}let te="";try{te=kc(Et.canonical)}catch{yt.push(`${Et.id} (${Et.canonical})`);return}const Ct=xt.get(te);if(Ct&&Ct!==Et.id){ht.push(`${Et.id} duplicates ${Ct} (${te})`);return}xt.set(te,Et.id),Q.push({...Et,canonical:te})}),yt.length>0&&console.warn("Glyph language map dropped invalid canonical rows:",yt.join("; ")),ht.length>0&&console.warn("Glyph language map dropped duplicate canonical rows:",ht.join("; ")),ot)return;p(Q)}catch(w){if(console.warn("Failed to load glyph language map; using procedural glyph fallback.",w),ot)return;p([])}})(),()=>{ot=!0}},[]);const Te=se.useMemo(()=>m.filter(ot=>ot.enabled!==!1&&typeof ot.canonical=="string"&&ot.canonical.trim().length>0),[m]),Me=se.useMemo(()=>{const ot=new Map;if(!f.length||!Te.length)return ot;const At=H=>{const ct=Fa(H);return Fa(Vm-ct)},w=[...f].sort((H,ct)=>{const xt=typeof H.installation?.placement_t=="number"?H.installation.placement_t:0,Q=typeof ct.installation?.placement_t=="number"?ct.installation.placement_t:0,yt=At(xt),ht=At(Q);return yt===ht?H.id.localeCompare(ct.id):yt-ht}),E=Math.min(w.length,Te.length);for(let H=0;H<E;H+=1)ot.set(w[H].id,Te[H]);return ot},[f,Te]),ze=se.useMemo(()=>{const ot=new Map;return Me.forEach((At,w)=>{At.canonical&&ot.set(w,At.canonical)}),ot},[Me]),xe=se.useMemo(()=>{const ot=new Map;return Me.forEach((At,w)=>{ot.set(w,{label:At.label||"",note:At.note||"",labelNb:At.label_nb||"",noteNb:At.note_nb||""})}),ot},[Me]);se.useEffect(()=>{let ot=!1;return(async()=>{S(!0),D(!1);try{const w=await fetch("/assets/data/media-panels.json",{cache:"no-store"}),E=w.headers.get("content-type")??"";if(!w.ok)throw new Error(`HTTP ${w.status} while loading panel data`);if(!E.toLowerCase().includes("application/json")){const ht=await w.text();throw new Error(`Expected JSON but got '${E||"unknown"}' (${ht.slice(0,120)})`)}const H=await w.json();if(!Array.isArray(H?.panels))throw new Error("Panel payload missing 'panels' array");const ct=typeof H.media_root=="string"?H.media_root.replace(/\/+$/,""):"",xt=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",Q=ht=>/^https?:\/\//i.test(ht)&&xt?`/proxy?url=${encodeURIComponent(ht)}`:ht,yt=H.panels.map(ht=>{const Et=typeof ht?.source=="string"?ht.source.replace(/^\/+/,""):"",te=Et?ct?`${ct}/${Et}`:`/${Et}`:void 0,Ct=te?Q(te):void 0,wt=typeof ht?.poster=="string"?ht.poster.replace(/^\/+/,""):"",Vt=wt?ct?`${ct}/${wt}`:`/${wt}`:void 0,Ft=Vt?Q(Vt):void 0,zt=ht?.type==="image"||ht?.type==="video"?ht.type:"text",le=ht?.content??{},X=String(le?.title??"Untitled").trim()||"Untitled",Ot=String(le?.description??"").trim(),Nt=String(le?.title_nb??le?.title_no??"").trim(),Ht=String(le?.description_nb??le?.description_no??"").trim(),Tt=String(le?.title_en??"").trim(),ft=String(le?.description_en??"").trim();return{...ht,kind:zt,type:zt,title:X,body:Ot,title_nb:Nt||X,body_nb:Ht||Ot,title_en:Tt,body_en:ft,cta:le?.cta,poster:Ft,image:zt==="image"?Ct:void 0,video:zt==="video"?Ct:void 0}});if(yt.length===0)throw new Error("Panel payload contained 0 panels");if(ot)return;h(yt),v(yt[0].id)}catch(w){if(console.error("Failed to load panels; using fallback data.",w),ot)return;h(Xf),v(Xf[0].id),D(!0)}finally{ot||S(!1)}})(),()=>{ot=!0}},[]);const hn=se.useMemo(()=>f.find(ot=>ot.id===_)??f[0]??{title:"",body:""},[_,f]),k=se.useMemo(()=>ot=>{const At=xe.get(ot.id);if($==="nb"){const H=jf(At?.labelNb,ot.title_nb,I(At?.label||""),I(ot.title||"")),ct=jf(At?.noteNb,ot.body_nb,I(At?.note||""),I(ot.body||""));return{title:H||"Mangler norsk tittel",body:ct||"Mangler norsk tekst."}}const w=jf(At?.label,ot.title_en),E=jf(At?.note,ot.body_en);return{title:w||"Missing English title",body:E||"Missing English text."}},[xe,$,I]),pn=se.useMemo(()=>k(hn).title,[hn,k]),Ue=se.useMemo(()=>new Intl.DateTimeFormat($==="nb"?"nb-NO":"en-US",{dateStyle:"medium"}),[$]);return se.useEffect(()=>{if(f.length===0)return;const ot=r.current;if(!ot)return;c.current=null,y(!1);let At=!1,w=()=>{};return(()=>{if(At||!ot)return;t.current=[];const H=window.matchMedia("(prefers-reduced-motion: reduce)"),ct=window.matchMedia("(max-width: 767px)"),xt=H.matches,Q=ct.matches,yt=new E0;yt.background=new de(987671),yt.fog=new $c(987671,38,230);const ht=new wi(Q?72:64,ot.clientWidth/ot.clientHeight,.1,1200),Et=new ly({antialias:!Q,alpha:!1,powerPreference:"high-performance"});Et.setPixelRatio(Math.min(window.devicePixelRatio,Q?1:1.5)),Et.setSize(ot.clientWidth,ot.clientHeight),Et.outputColorSpace=Gn,Et.toneMapping=Zd,Et.toneMappingExposure=Q?.76:.72,Et.shadowMap.enabled=!Q,Et.shadowMap.type=vo,ot.appendChild(Et.domElement);let te=!1;const Ct=Rt=>{te!==Rt&&(te=Rt,Et.shadowMap.type=Rt?iS:vo,Et.shadowMap.needsUpdate=!0)},wt=new Yd(Et),Vt=wt.fromScene(new C2,.06);yt.environment=Vt.texture;const Ft=new QS(16185599,.05);yt.add(Ft);const zt=new KS(14739442,1777446,.08);yt.add(zt);const le=_R(R2),X=new kS(le,!0,"catmullrom",.17),Ot=Q?180:300,Nt=Math.min(8,Et.capabilities.getMaxAnisotropy()),Ht=Q?256:512,Tt=Wm({width:Ht,height:Ht,seed:7.31,baseColor:9409690,macroFreq:2.7,midFreq:8,microFreq:25,bandFreq:13,bandInfluence:.015,seamAxis:"y",seamFreq:24,seamDepth:.09,seamWidth:.012,roughnessBase:.36,roughnessRange:.14,normalStrength:2.8,aoStrength:.12});_a(Tt.albedo,4.8,24,Nt,!0),_a(Tt.normal,4.8,24,Nt),_a(Tt.roughness,4.8,24,Nt),_a(Tt.ao,4.8,24,Nt);const ft=Wm({width:Ht,height:Ht,seed:11.27,baseColor:15066850,macroFreq:1.9,midFreq:6.4,microFreq:20,bandFreq:9.5,bandInfluence:.012,seamAxis:"y",seamFreq:18,seamDepth:.04,seamWidth:.02,roughnessBase:.7,roughnessRange:.18,normalStrength:1.15,aoStrength:.18});_a(ft.albedo,2.2,24,Nt,!0),_a(ft.normal,2.2,24,Nt),_a(ft.roughness,2.2,24,Nt),_a(ft.ao,2.2,24,Nt);const kt=Wm({width:Ht,height:Ht,seed:19.04,baseColor:14146528,macroFreq:2.3,midFreq:7.2,microFreq:23,bandFreq:14,bandInfluence:.02,seamAxis:"x",seamFreq:12,seamDepth:.07,seamWidth:.018,roughnessBase:.62,roughnessRange:.2,normalStrength:1.5,aoStrength:.2});_a(kt.albedo,3.4,24,Nt,!0),_a(kt.normal,3.4,24,Nt),_a(kt.roughness,3.4,24,Nt),_a(kt.ao,3.4,24,Nt);const ce=new go({color:9607586,map:Tt.albedo,normalMap:Tt.normal,normalScale:new we(.32,.32),roughnessMap:Tt.roughness,roughness:.38,metalness:0,aoMap:Tt.ao,aoMapIntensity:.34,clearcoat:.23,clearcoatRoughness:.2,envMapIntensity:.74,side:zn}),De=new go({color:15921903,roughness:.9,metalness:0,envMapIntensity:.08,side:zn}),me=new go({color:0,roughness:1,metalness:0,envMapIntensity:0,emissive:new de(16777215),emissiveIntensity:1,toneMapped:!1,fog:!1,side:zn}),Jn=()=>{const Rt=[],ee=new j(0,1,0);let Jt=new j(1,0,0);for(let It=0;It<=Ot;It+=1){const Cn=It/Ot,yi=X.getPointAt(Cn),Ca=Cn===1?yi.clone().sub(X.getPointAt(Cn-.001)).normalize():X.getPointAt(Cn+.001).sub(yi).normalize();let ai=new j().crossVectors(Ca,ee).normalize();ai.lengthSq()<1e-4&&(ai=Jt.clone()),ai.dot(Jt)<0&&ai.multiplyScalar(-1),Jt=ai.clone();const oa=new j().crossVectors(ai,Ca).normalize();Rt.push({pt:yi,right:ai,up:oa,t:Cn})}const ne=(It,Cn,yi=!1)=>{const Ca=[],ai=[],oa=[];for(let Mi=0;Mi<=Ot;Mi+=1){const si=Rt[Mi],ki=It(si),oe=Cn(si);Ca.push(ki.x,ki.y,ki.z,oe.x,oe.y,oe.z),ai.push(0,si.t,1,si.t)}for(let Mi=0;Mi<Ot;Mi+=1){const si=Mi*2,ki=si+1,oe=si+2,Xe=si+3;yi?oa.push(si,oe,ki,oe,Xe,ki):oa.push(si,ki,oe,oe,ki,Xe)}const wa=new ea;wa.setAttribute("position",new Qn(Ca,3));const Qa=new Qn(ai,2);return wa.setAttribute("uv",Qa),wa.setAttribute("uv2",Qa.clone()),wa.setIndex(oa),wa.computeVertexNormals(),wa},Xt=jx*.5,ve=Gm*.5,ke=ne(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ve)).add(It.right.clone().multiplyScalar(-Xt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ve)).add(It.right.clone().multiplyScalar(Xt))),Je=ne(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve)).add(It.right.clone().multiplyScalar(-Xt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve)).add(It.right.clone().multiplyScalar(Xt)),!0),$e=ne(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ve)).add(It.right.clone().multiplyScalar(-Xt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve)).add(It.right.clone().multiplyScalar(-Xt)),!0),Un=ne(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ve)).add(It.right.clone().multiplyScalar(Xt)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve)).add(It.right.clone().multiplyScalar(Xt))),Si=.08,Rn=.015,Fe=ne(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve-Si)).add(It.right.clone().multiplyScalar(-Xt+Rn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve)).add(It.right.clone().multiplyScalar(-Xt+Rn)),!0),nn=ne(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve-Si)).add(It.right.clone().multiplyScalar(Xt-Rn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve)).add(It.right.clone().multiplyScalar(Xt-Rn)),!1),qe=.22,rn=.018,di=ne(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ve)).add(It.right.clone().multiplyScalar(-Xt+rn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ve+qe)).add(It.right.clone().multiplyScalar(-Xt+rn)),!0),Vr=ne(It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ve)).add(It.right.clone().multiplyScalar(Xt-rn)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(-ve+qe)).add(It.right.clone().multiplyScalar(Xt-rn)),!1),Vi=.14,Ra=ne(It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve-.05)).add(It.right.clone().multiplyScalar(-Vi)),It=>It.pt.clone().add(It.up.clone().multiplyScalar(ve-.05)).add(It.right.clone().multiplyScalar(Vi)),!0);return{floorGeo:ke,ceilGeo:Je,leftGeo:$e,rightGeo:Un,leftSkirtGeo:di,rightSkirtGeo:Vr,trackRailGeo:Ra,leftCrownGeo:Fe,rightCrownGeo:nn}},{floorGeo:fi,ceilGeo:Xa,leftGeo:Ma,rightGeo:us,leftSkirtGeo:fs,rightSkirtGeo:ds,trackRailGeo:zi,leftCrownGeo:hs,rightCrownGeo:Di}=Jn(),xn=new He(fi,ce),yn=new He(Xa,me),_i=new He(Ma,De),Ni=new He(us,De),Ao=new go({color:197638,roughness:.62,metalness:.18,envMapIntensity:.65}),Wa=new Vs({color:1973274,roughness:.78,metalness:0,envMapIntensity:.04,side:zn}),Pr=new He(fs,Wa),Ya=new He(ds,Wa);Pr.receiveShadow=!0,Ya.receiveShadow=!0;const qs=new He(hs,Wa),Ea=new He(Di,Wa);qs.receiveShadow=!1,Ea.receiveShadow=!1;const ba=new go({color:10132634,roughness:.24,metalness:.78,envMapIntensity:.9,side:zn}),qa=new He(zi,ba);qa.receiveShadow=!1,xn.receiveShadow=!0,xn.castShadow=!0,yn.receiveShadow=!0,yn.castShadow=!0,_i&&(_i.receiveShadow=!0,_i.castShadow=!0),Ni&&(Ni.receiveShadow=!0,Ni.castShadow=!0),yt.add(xn),yt.add(yn),_i&&yt.add(_i),Ni&&yt.add(Ni),yt.add(Pr),yt.add(Ya),yt.add(qs),yt.add(Ea),yt.add(qa);const R=new j(0,1,0),Y=new dn,ut=new dn,it=new dn;yt.add(Y),yt.add(ut),yt.add(it);const J=new td(16773598,Q?16:24,34,Math.PI/8.4,.44,2);J.target=Y,J.castShadow=!Q,J.castShadow&&(J.shadow.mapSize.width=2048,J.shadow.mapSize.height=2048,J.shadow.bias=-35e-5,J.shadow.normalBias=.012,J.shadow.camera.near=.4,J.shadow.camera.far=34),yt.add(J);const Pt=new td(12571903,Q?6:9,34,Math.PI/6.5,.68,2);Pt.target=ut,Pt.castShadow=!1,yt.add(Pt);const Yt=new td(14083583,Q?5:7,28,Math.PI/7.8,.6,2);Yt.target=it,Yt.castShadow=!1,yt.add(Yt);const Bt=new dn,Qt=new dn;yt.add(Bt),yt.add(Qt);const Gt=new e0(16774374,0);if(Gt.target=Bt,Gt.castShadow=!Q,Gt.castShadow){Gt.shadow.mapSize.width=4096,Gt.shadow.mapSize.height=4096,Gt.shadow.bias=-8e-5,Gt.shadow.normalBias=.0012,Gt.shadow.radius=0;const Rt=Q?250:220;Gt.shadow.camera.left=-Rt,Gt.shadow.camera.right=Rt,Gt.shadow.camera.top=Rt,Gt.shadow.camera.bottom=-Rt,Gt.shadow.camera.near=25,Gt.shadow.camera.far=980}yt.add(Gt);const ue=new e0(9090280,0);ue.target=Qt,yt.add(ue),fi.computeBoundingBox(),fi.computeBoundingSphere(),Xa.computeBoundingBox(),Xa.computeBoundingSphere(),Ma.computeBoundingBox(),Ma.computeBoundingSphere(),us.computeBoundingBox(),us.computeBoundingSphere();const Kt=f.some(Rt=>Rt.installation?.mount_type==="continuous_led_wall"||Rt.installation?.mount_type==="jutting_half_wall")?f:Q?f.filter((Rt,ee)=>ee%2===0):f,ge=[],en=[],Ke=[],Oe=[],Tn=[],Zt=[],$n=[],pe=Rt=>{if(!Rt.paused&&Rt.currentTime>0)return;const ee=Rt.play();ee&&typeof ee.catch=="function"&&ee.catch(()=>{})},Xn=setInterval(()=>{let Rt=!0;Zt.forEach(ee=>{(ee.paused||ee.readyState<2)&&(Rt=!1,pe(ee))}),Rt&&Zt.length>0&&clearInterval(Xn)},500);Tn.push(()=>clearInterval(Xn));const vi=new Ir(1,1,.2),Hi=new ss(.82,.82),xi=new go({color:15330028,roughness:.38,metalness:.14,clearcoat:.32,clearcoatRoughness:.22}),Ye=(Rt,ee)=>{const ne=document.createElement("canvas");ne.width=512,ne.height=512;const Xt=ne.getContext("2d");Xt.clearRect(0,0,512,512);const ve=ze.get(ee);if(ve)try{Yx(Xt,ve,{backgroundColor:"rgba(6,14,24,0.7)",lineColor:"rgba(102,221,255,0.95)",gridColor:"rgba(102,221,255,0.58)"});const nn=new Rl(ne);return nn.colorSpace=Gn,nn}catch(nn){console.warn(`Invalid glyph canonical sentence for panel '${ee}': '${ve}'. Falling back to procedural glyph.`,nn)}const ke=512/2,Je=512/2,$e=Rt*137.508;Xt.fillStyle="rgba(6,14,24,0.7)",Xt.beginPath(),Xt.arc(ke,Je,512*.42,0,Math.PI*2),Xt.fill(),Xt.strokeStyle="rgba(102,221,255,0.95)",Xt.lineWidth=2.5,Xt.lineCap="round",Xt.beginPath(),Xt.arc(ke,Je,512*.38,0,Math.PI*2),Xt.stroke();const Un=3+Rt%4;for(let nn=0;nn<Un;nn++){const qe=nn/Un*Math.PI*2+$e,rn=512*.08,di=512*.32;Xt.beginPath(),Xt.moveTo(ke+Math.cos(qe)*rn,Je+Math.sin(qe)*rn),Xt.lineTo(ke+Math.cos(qe)*di,Je+Math.sin(qe)*di),Xt.stroke()}const Si=2+Rt%3;for(let nn=0;nn<Si;nn++){const qe=512*(.15+nn*.09),rn=$e+nn*1.2;Xt.beginPath(),Xt.arc(ke,Je,qe,rn,rn+Math.PI*(.4+Rt%3*.2)),Xt.stroke()}Xt.fillStyle="rgba(102,221,255,0.85)";const Rn=3+Rt%5;for(let nn=0;nn<Rn;nn++){const qe=$e+nn/Rn*Math.PI*2,rn=512*(.2+nn%3*.06);Xt.beginPath(),Xt.arc(ke+Math.cos(qe)*rn,Je+Math.sin(qe)*rn,4,0,Math.PI*2),Xt.fill()}Xt.strokeStyle="rgba(102,221,255,0.5)",Xt.lineWidth=1.5,Xt.beginPath(),Xt.arc(ke,Je,512*.12,0,Math.PI*2),Xt.stroke(),Xt.fillStyle="rgba(102,221,255,0.95)",Xt.beginPath(),Xt.arc(ke,Je,6,0,Math.PI*2),Xt.fill();const Fe=new Rl(ne);return Fe.colorSpace=Gn,Fe},An=(Rt,ee)=>{const Jt=document.createElement("canvas");Jt.width=1024,Jt.height=640;const ne=Jt.getContext("2d");ne.fillStyle="rgba(8,12,18,0.88)",ne.beginPath(),ne.roundRect(16,16,992,608,24),ne.fill(),ne.strokeStyle="rgba(102,221,255,0.25)",ne.lineWidth=2,ne.beginPath(),ne.roundRect(16,16,992,608,24),ne.stroke(),ne.fillStyle="rgba(102,221,255,0.95)",ne.font="700 48px 'Helvetica Neue', Helvetica, Arial, sans-serif",vR(ne,Rt.toUpperCase(),60,100,900,58),ne.strokeStyle="rgba(102,221,255,0.3)",ne.lineWidth=2,ne.beginPath(),ne.moveTo(60,180),ne.lineTo(960,180),ne.stroke(),ne.fillStyle="rgba(220,230,240,0.9)";const Xt="400 32px 'Helvetica Neue', Helvetica, Arial, sans-serif",ve="700 32px 'Helvetica Neue', Helvetica, Arial, sans-serif";ne.font=Xt,ER(ne,ee,60,230,900,42,Xt,ve);const ke=new Rl(Jt);return ke.colorSpace=Gn,ke},ti=()=>{const ee=document.createElement("canvas");ee.width=512,ee.height=512;const Jt=ee.getContext("2d"),ne=512/2,Xt=512/2;Jt.beginPath(),Jt.arc(ne,Xt,512*.42,0,Math.PI*2),Jt.fillStyle="rgba(6,14,24,0.7)",Jt.fill(),Jt.strokeStyle="rgba(255,170,51,0.9)",Jt.lineWidth=6,Jt.beginPath(),Jt.arc(ne,Xt,512*.38,0,Math.PI*2),Jt.stroke();const ve=8;for(let Je=0;Je<ve;Je++){const $e=Je/ve*Math.PI*2-Math.PI/2;Jt.strokeStyle=`rgba(255,${170+Math.round(Math.sin(Je)*40)},51,0.8)`,Jt.lineWidth=4,Jt.beginPath(),Jt.moveTo(ne+Math.cos($e)*512*.12,Xt+Math.sin($e)*512*.12),Jt.lineTo(ne+Math.cos($e)*512*.34,Xt+Math.sin($e)*512*.34),Jt.stroke();const Un=ne+Math.cos($e)*512*.34,Si=Xt+Math.sin($e)*512*.34,Rn=512*.06;Jt.beginPath(),Jt.moveTo(Un,Si),Jt.lineTo(Un-Rn*Math.cos($e-.4),Si-Rn*Math.sin($e-.4)),Jt.moveTo(Un,Si),Jt.lineTo(Un-Rn*Math.cos($e+.4),Si-Rn*Math.sin($e+.4)),Jt.stroke()}Jt.beginPath(),Jt.arc(ne,Xt,512*.06,0,Math.PI*2),Jt.fillStyle="rgba(255,200,80,0.95)",Jt.fill();const ke=new Rl(ee);return ke.colorSpace=Gn,ke},Mn=Rt=>{const ee=Fa(Rt),Jt=X.getPointAt(ee),Xt=X.getPointAt(Fa(ee+.002)).clone().sub(Jt).normalize();let ve=new j().crossVectors(Xt,R).normalize();ve.lengthSq()<1e-4&&(ve=new j(1,0,0));const ke=new j().crossVectors(ve,Xt).normalize();return{point:Jt,tangent:Xt,right:ve,up:ke}};X.getLength();const Wn=[],na=new ss(km*2,km*2),ps=new ss($2,tR);Kt.forEach((Rt,ee)=>{const Jt=Rt.installation,ne=Fa(Jt?.placement_t??.05+ee/Kt.length),{point:Xt,right:ve,up:ke}=Mn(ne),Je=Jt?.side==="left",Si=(Jt?.side==="center"?0:Je?-1:1)*jx*.12,Rn=Xt.clone().add(ve.clone().multiplyScalar(Si)).add(ke.clone().multiplyScalar(.5)),Fe=Ye(ee,Rt.id);en.push(Fe);const nn=new Vs({color:16777215,emissive:new de(Kx),emissiveIntensity:1.2,map:Fe,emissiveMap:Fe,transparent:!0,alphaTest:.05,side:zn,depthWrite:!1});Ke.push(nn);const qe=new He(na,nn);qe.position.copy(Rn),qe.userData={panel:Rt,isGlyph:!0},ge.push(qe),yt.add(qe);const rn=k(Rt),di=rn.title,Vr=rn.body,Vi=An(di,Vr);en.push(Vi);const Ra=new Vs({color:16777215,emissive:new de(1122867),emissiveIntensity:.3,map:Vi,transparent:!0,opacity:0,side:zn,depthWrite:!0});Ke.push(Ra);const It=new He(ps,Ra),Cn=new Al;Cn.add(It),Cn.position.copy(Rn),Cn.scale.setScalar(.01),Cn.visible=!1,yt.add(Cn);const yi=new Kc(Kx,Q?6:12,20,1.5);yi.position.copy(Rn),yt.add(yi),Wn.push({mesh:qe,card:Cn,panel:Rt,progress:ne,baseY:Rn.y,expanded:!1,expandT:0}),t.current.push({meta:Rt,progress:ne})});let ia=!1,Gi=0,ei=0,ni=0,ja=0,ms=0,aa=!1,sa=!1,Ro=0,Fr=0;const Co=new j,js=new j,mn=new j,Br=32;for(let Rt=0;Rt<Br;Rt++)mn.add(X.getPointAt(Rt/Br));mn.divideScalar(Br);const zr=()=>{const ee=ht.position.clone().clone().sub(mn).normalize();Co.copy(mn).add(ee.multiplyScalar(Qx)),Co.y=mn.y+Qx*.35,js.copy(mn)},Za=()=>{Wn.forEach(Rt=>{Rt.expanded=!1})},wo=Rt=>{ia!==Rt&&(ia=Rt,aa=!1,sa=!1,y(Rt),Rt&&(zr(),Za()))},gs=()=>{wo(!ia)};c.current=gs;const nu=new ss(Wf*2,Wf*2),Zs=ti();en.push(Zs);const Ks=new Vs({color:16777215,emissive:new de(Jx),emissiveIntensity:1.4,map:Zs,emissiveMap:Zs,transparent:!0,alphaTest:.05,side:zn,depthWrite:!1});Ke.push(Ks);const{point:Hl,up:ii}=Mn(nR),ra=Hl.clone().add(ii.clone().multiplyScalar(1)),Ta=new He(nu,Ks);Ta.position.copy(ra),Ta.userData={isExitGlyph:!0},yt.add(Ta);const Hr=new ss(Wf*5,Wf*5),ph=new tu({visible:!1,side:zn}),Ka=new He(Hr,ph);Ka.position.copy(ra),Ka.userData={isExitGlyph:!0},ge.push(Ka),yt.add(Ka);const Do=new Kc(Jx,Q?6:12,20,1.5);Do.position.copy(ra),yt.add(Do);const Qs=new uh(Q?1.25:1.6,26,26);Oe.push(Qs);const Js=new Vs({color:16764788,emissive:new de(16757575),emissiveIntensity:0,roughness:.26,metalness:.34});Ke.push(Js);const No=Hl.clone().add(ii.clone().multiplyScalar(Gm*.52+.32)),$s=new He(Qs,Js);$s.position.copy(No),$s.userData={isReentryDot:!0},ge.push($s),yt.add($s);const iu=new ch(Q?1.75:2.2,Q?2.35:2.95,52);Oe.push(iu);const Gl=new tu({color:16761948,transparent:!0,opacity:0,side:zn,depthWrite:!1});Ke.push(Gl);const _s=new He(iu,Gl);_s.position.copy(No),yt.add(_s);const Vl=new Kc(16761948,0,Q?34:44,2);Vl.position.copy(No),yt.add(Vl);const au=new ty,kl=new we,su=Rt=>{Zt.forEach(pe);const ee=Et.domElement.getBoundingClientRect();kl.x=(Rt.clientX-ee.left)/ee.width*2-1,kl.y=-((Rt.clientY-ee.top)/ee.height)*2+1,Ro=Rt.clientX,Fr=Rt.clientY,au.setFromCamera(kl,ht);const Jt=au.intersectObjects(ge,!1);if(ia){if(Jt.length>0){const ne=Jt[0].object;if(ne.userData.isReentryDot){wo(!1);return}if(ne.userData.isExitGlyph){gs();return}}aa=!0,sa=Rt.shiftKey||Rt.altKey||Rt.button===2;return}if(Jt.length>0){const ne=Jt[0].object;if(ne.userData.isExitGlyph){gs();return}const Xt=ne.userData.panel;if(Xt){const ve=Wn.find(ke=>ke.panel.id===Xt.id);ve&&(ve.expanded?ve.expanded=!1:(Wn.forEach(ke=>{ke.expanded=!1}),ve.expanded=!0))}}else Wn.forEach(ne=>{ne.expanded=!1})};Et.domElement.addEventListener("pointerdown",su);const tr={x:0,y:0},Aa={x:0,y:0},ru=Rt=>{const ee=Et.domElement.getBoundingClientRect(),Jt=(Rt.clientX-ee.left)/ee.width,ne=(Rt.clientY-ee.top)/ee.height;if(tr.x=(Jt-.5)*2,tr.y=(ne-.5)*2,ia&&aa){const Xt=Rt.clientX-Ro,ve=Rt.clientY-Fr;Ro=Rt.clientX,Fr=Rt.clientY,sa?ja=En.clamp(ja+Xt*.0038,-Math.PI*.48,Math.PI*.48):(ei+=Xt*.0046,ni=En.clamp(ni+ve*.0035,-.88,.88));return}},ou=()=>{tr.x=0,tr.y=0,aa=!1,sa=!1},Lo=()=>{aa=!1,sa=!1},lu=Rt=>{ia&&Rt.preventDefault()};Et.domElement.addEventListener("pointermove",ru,{passive:!0}),Et.domElement.addEventListener("pointerleave",ou,{passive:!0}),Et.domElement.addEventListener("pointerup",Lo,{passive:!0}),Et.domElement.addEventListener("pointercancel",Lo,{passive:!0}),Et.domElement.addEventListener("contextmenu",lu);const Uo=Rt=>{if(Rt.preventDefault(),ia){ei+=Rt.deltaY*.0017,ms=En.clamp(ms+Rt.deltaY*.22,-165,230);return}Zt.forEach(pe),i.current=Fa(i.current+Zx*Rt.deltaY*75e-6)};Et.domElement.addEventListener("wheel",Uo,{passive:!1});const cu=Rt=>{(Rt.key==="o"||Rt.key==="O")&&gs()};window.addEventListener("keydown",cu);let Gr=0;const uu=Rt=>{Zt.forEach(pe),Gr=Rt.touches[0]?.clientY??0},Xl=Rt=>{Rt.preventDefault();const ee=Rt.touches[0]?.clientY??Gr,Jt=Gr-ee;if(ia){ei+=Jt*.0021,ms=En.clamp(ms+Jt*.13,-165,230),Gr=ee;return}i.current=Fa(i.current+Zx*Jt*11e-5),Gr=ee};Et.domElement.addEventListener("touchstart",uu,{passive:!0}),Et.domElement.addEventListener("touchmove",Xl,{passive:!1});const fu=()=>{ot&&(ht.aspect=ot.clientWidth/ot.clientHeight,ht.updateProjectionMatrix(),Et.setSize(ot.clientWidth,ot.clientHeight))};window.addEventListener("resize",fu);const Wl=new dn,du=new ey,Yl=new j,hu=new j,pu=new j;let mu=f.length>0?f[0].id:"";const gu=()=>{if(At)return;const Rt=du.getDelta(),ee=du.getElapsedTime();s.current=Z2(s.current,i.current,xt?2.8:4.8,Rt),Aa.x+=(tr.x-Aa.x)*.07,Aa.y+=(tr.y-Aa.y)*.07;const Jt=s.current,ne=Fa(Jt+(Q?.008:.01)),Xt=X.getPointAt(Jt),ve=X.getPointAt(ne),ke=X.getPointAt(Fa(Jt+.002)).sub(X.getPointAt(Fa(Jt-.002))).normalize();let Je=new j().crossVectors(ke,R).normalize();Je.lengthSq()<1e-4&&(Je=new j(1,0,0));const $e=new j().crossVectors(Je,ke).normalize(),Un=Je.clone().multiplyScalar(Aa.x*(Q?0:.62)).add($e.clone().multiplyScalar(Aa.y*(Q?0:.42))),Si=xt?new j:$e.clone().multiplyScalar(Math.sin(ee*.45)*.12),Rn=1/iR;ia&&Gi<1?Gi=Math.min(1,Gi+Rn*Rt):!ia&&Gi>0&&(Gi=Math.max(0,Gi-Rn*Rt));const Fe=Gi<.5?4*Gi*Gi*Gi:1-Math.pow(-2*Gi+2,3)/2,nn=En.smoothstep(Fe,.18,1),qe=Aa.x*(Q?0:15.4)*nn,rn=Aa.y*(Q?0:9.2)*nn;Bt.position.copy(mn).add(new j(Math.sin(ei)*6.8+qe*.2,ni*2.4+rn*.18,Math.cos(ei)*3.6-qe*.13)),Qt.position.copy(mn).add(new j(-Math.sin(ei)*3.2,ni*.9,Math.cos(ei)*2.1)),Gt.position.set(mn.x+700+qe*2.8+Math.sin(ei)*52,mn.y+290+rn*1.35+ni*28,mn.z-130-qe*1.3+Math.cos(ei)*30),ue.position.set(mn.x-470-qe*.82-Math.sin(ei)*16,mn.y+35+rn*.22+ni*10,mn.z+360+qe*.6-Math.cos(ei)*12);const di=Co.clone().sub(mn).applyQuaternion(new Ys().setFromEuler(new ta(ni,ei,0,"YXZ"))),Vr=En.clamp(di.length()+ms,260,860);di.setLength(Vr);const Vi=mn.clone().add(di).add(new j(qe,rn*.84,qe*.58)),Ra=js.clone().add(new j(qe*.11,rn*.095,qe*.085)),It=new Ys;if(Fe>.01){Ct(Fe>.26),yt.fog instanceof $c&&(yt.fog.near=En.lerp(38,9999,Fe),yt.fog.far=En.lerp(230,1e4,Fe));const oe=new de(987671),Xe=new de(132106);yt.background.copy(oe).lerp(Xe,Fe),Ft.intensity=En.lerp(.05,.002,Fe),zt.intensity=En.lerp(.08,.007,Fe),Gt.intensity=En.lerp(0,Q?4.6:8.6,Fe),ue.intensity=En.lerp(0,Q?.02:.03,Fe),Et.toneMappingExposure=En.lerp(Q?.76:.72,Q?.75:.76,Fe),[ce,De].forEach(Yn=>{Yn.emissive.set(3359829),Yn.emissiveIntensity=0}),ce.envMapIntensity=En.lerp(.74,.04,Fe),De.envMapIntensity=En.lerp(.08,.01,Fe),me.color.set(0).lerp(new de(16777215),Fe),me.toneMapped=Fe>.5,me.fog=Fe>.5,me.emissive.set(16777215),me.emissiveIntensity=En.lerp(1,.02,Fe),me.envMapIntensity=En.lerp(0,.03,Fe)}else Ct(!1),Ft.intensity=.05,zt.intensity=.08,Gt.intensity=0,ue.intensity=0,Et.toneMappingExposure=Q?.76:.72,yt.background.set(987671),[ce,De].forEach(oe=>{oe.emissive.set(0),oe.emissiveIntensity=0}),ce.envMapIntensity=.74,De.envMapIntensity=.08,me.color.set(0),me.toneMapped=!1,me.fog=!1,me.emissive.set(16777215),me.emissiveIntensity=1,me.envMapIntensity=0;const Cn=$e.clone().multiplyScalar(-Gm*.2),yi=Xt.clone().add(Cn).add(Un).add(Si),Ca=ve.clone().add(Cn).add(Un.multiplyScalar(.22));if(Fe>.99){if(ht.position.copy(Vi),ht.lookAt(Ra),Math.abs(ja)>1e-4){const oe=Ra.clone().sub(ht.position).normalize();It.setFromAxisAngle(oe,ja),ht.quaternion.multiply(It)}}else if(Fe>.001){ht.position.lerpVectors(yi,Vi,Fe);const oe=Ca.clone().lerp(Ra,Fe);if(ht.lookAt(oe),Math.abs(ja)>1e-4){const Xe=oe.clone().sub(ht.position).normalize();It.setFromAxisAngle(Xe,ja*Fe),ht.quaternion.multiply(It)}}else ht.position.copy(yi),Wl.position.copy(ht.position),Wl.lookAt(Ca),ht.quaternion.slerp(Wl.quaternion,1-Math.exp(-8.1*Rt));const ai=.94+Math.sin(ee*.23)*.06,oa=ve.clone().add(Cn);J.position.copy(ht.position).add($e.clone().multiplyScalar(2.9)).add(Je.clone().multiplyScalar(2.1)).add(ke.clone().multiplyScalar(-2.2)),Y.position.copy(oa).add(Je.clone().multiplyScalar(2.5)).add($e.clone().multiplyScalar(-.9)),J.intensity=(Q?14:21)*ai,Pt.position.copy(ht.position).add($e.clone().multiplyScalar(2)).add(Je.clone().multiplyScalar(-2.4)).add(ke.clone().multiplyScalar(-1.1)),ut.position.copy(oa).add(Je.clone().multiplyScalar(-2)).add($e.clone().multiplyScalar(-1.4)),Pt.intensity=(Q?5:8)*ai,Yt.position.copy(ht.position).add($e.clone().multiplyScalar(1.4)).add(ke.clone().multiplyScalar(2.8)).add(Je.clone().multiplyScalar(.6)),it.position.copy(oa).add($e.clone().multiplyScalar(-.8)),Yt.intensity=(Q?4:6.2)*ai,ge.forEach(oe=>{const Xe=oe.userData;if(!Xe||!Xe.shading||!Xe.material)return;const Yn=Xe.shading,Ei=Xe.material,Xi=Xe.video,We=Xe;let Da=1;Yn.lighting?.flicker_sync&&Xi&&Xi.readyState>=3&&(Da=.88+Math.sin(ee*22)*.1*Math.sin(ee*6.7));let kr=1;if(Yn.movement_reaction?.type==="viewing_angle_fade"){Yl.set(0,0,0),oe.getWorldPosition(Yl),hu.set(0,0,1).applyQuaternion(oe.quaternion),pu.copy(ht.position).sub(Yl).normalize();const Li=hu,bi=pu,vs=Math.max(0,Li.dot(bi)),Oo=Yn.movement_reaction.cone_angle_degrees===60?3:1.5;kr=Math.pow(vs,Oo)}const Wi=Xe.baseEmissive*Da*kr;if(Ei.emissiveIntensity=Wi,We.bounceLights&&We.bounceLights.length>0){const Li=We.bounceSampleCtx,bi=We.bounceSampleCanvas;if(Xi&&Li&&bi&&(We.bounceNextSampleAt??0)<=ee){const Ti=PR(Xi,bi,Li);if(Ti){We.bounceTargetColor||(We.bounceTargetColor=Ti.color.clone());const Ja=Ti.color.clone().lerp(new de(1,.97,.93),.18);We.bounceTargetColor.copy(Ja);const Xr=En.clamp(.22+Ti.luminance*1.9,.22,2.25);We.bounceTargetIntensity=(We.bounceBaseIntensity??5)*Xr*(.25+Wi*1.25)}We.bounceNextSampleAt=ee+1/(Q?2:4)}else Xi||(We.bounceTargetIntensity=(We.bounceBaseIntensity??5)*(.22+Wi*1.1));const vs=We.bounceTargetIntensity??0,Oo=We.bounceCurrentIntensity??0;We.bounceCurrentIntensity=En.lerp(Oo,vs,1-Math.exp(-6.2*Rt)),We.bounceCurrentColor||(We.bounceCurrentColor=(We.bounceTargetColor??new de(1,1,1)).clone()),We.bounceTargetColor&&We.bounceCurrentColor.lerp(We.bounceTargetColor,1-Math.exp(-5.4*Rt)),We.bounceLights.forEach((Ti,Ja)=>{const Xr=Math.max(1,We.bounceLights.length-1),_u=1-Ja/Xr*.34;Ti.color.copy(We.bounceCurrentColor),Ti.intensity=(We.bounceCurrentIntensity??0)*_u})}}),$n.forEach(({mesh:oe,basePosition:Xe,strength:Yn})=>{const Ei=oe.parent;if(!Ei)return;const Xi=Ei.worldToLocal(ht.position.clone()),We=En.clamp(Xi.x*.008,-.18,.18)*Yn,Da=En.clamp(Xi.y*.006,-.14,.14)*Yn;oe.position.x=Xe.x+We,oe.position.y=Xe.y+Da}),Wn.forEach((oe,Xe)=>{const{mesh:Yn,card:Ei}=oe;Yn.lookAt(ht.position);const Xi=Xe*.7,We=oe.baseY+Math.sin(ee*Q2+Xi)*K2;Yn.position.y=We,Yn.rotateZ(J2*Rt);const Da=Yn.material;Da.emissiveIntensity=1+Math.sin(ee*2+Xe)*.4;const kr=oe.expanded?1:0,Wi=1/eR;oe.expandT<kr?oe.expandT=Math.min(1,oe.expandT+Wi*Rt):oe.expandT>kr&&(oe.expandT=Math.max(0,oe.expandT-Wi*Rt));const Li=oe.expandT,bi=Li<.5?4*Li*Li*Li:1-Math.pow(-2*Li+2,3)/2;if(bi>.001){Ei.visible=!0,Ei.position.copy(Yn.position),Ei.position.y-=km+.3,Ei.lookAt(ht.position),Ei.scale.setScalar(bi);const vs=Ei.children[0].material;vs.opacity=bi}else Ei.visible=!1;Da.opacity=1-bi*.4});const wa=ra.y+Math.sin(ee*.8)*.35;Ta.lookAt(ht.position),Ta.position.y=wa,Ta.rotateZ(.15*Rt),Ks.emissiveIntensity=1.2+Math.sin(ee*1.5)*.5,Ka.lookAt(ht.position),Ka.position.y=wa;const Qa=.72+Math.sin(ee*2.35)*.28,Mi=En.smoothstep(Fe,.2,.95);$s.visible=Mi>.001,_s.visible=Mi>.001,$s.scale.setScalar(.88+Qa*.28),Js.emissiveIntensity=Mi*(.48+Qa*.45),Vl.intensity=Mi*(Q?4.6:7.4)*Qa,_s.lookAt(ht.position),_s.scale.setScalar(.95+Qa*.18),Gl.opacity=Mi*(.2+Qa*.32);let si=t.current[0]?.meta.id??(f.length>0?f[0].id:""),ki=Number.POSITIVE_INFINITY;t.current.forEach(oe=>{let Xe=Math.abs(Jt-oe.progress);Xe>.5&&(Xe=1-Xe),Xe<ki&&(ki=Xe,si=oe.meta.id)}),si!==mu&&(mu=si,v(si)),Et.render(yt,ht),requestAnimationFrame(gu)};gu(),w=()=>{c.current=null,Et.domElement.removeEventListener("pointerdown",su),Et.domElement.removeEventListener("pointermove",ru),Et.domElement.removeEventListener("pointerleave",ou),Et.domElement.removeEventListener("pointerup",Lo),Et.domElement.removeEventListener("pointercancel",Lo),Et.domElement.removeEventListener("contextmenu",lu),Et.domElement.removeEventListener("wheel",Uo),Et.domElement.removeEventListener("touchstart",uu),Et.domElement.removeEventListener("touchmove",Xl),window.removeEventListener("resize",fu),window.removeEventListener("keydown",cu),ot.contains(Et.domElement)&&ot.removeChild(Et.domElement),ge.forEach(Rt=>{const ee=Rt.userData?.video;ee&&(ee.pause(),ee.src="",ee.load())}),Zt.forEach(Rt=>{Rt.pause(),Rt.src="",Rt.load()}),Tn.forEach(Rt=>Rt()),en.forEach(Rt=>Rt.dispose?.()),Oe.forEach(Rt=>Rt.dispose()),na.dispose(),ps.dispose(),Tt.albedo.dispose(),Tt.normal.dispose(),Tt.roughness.dispose(),Tt.ao.dispose(),ft.albedo.dispose(),ft.normal.dispose(),ft.roughness.dispose(),ft.ao.dispose(),kt.albedo.dispose(),kt.normal.dispose(),kt.roughness.dispose(),kt.ao.dispose(),Ke.forEach(Rt=>Rt.dispose()),Vt.texture.dispose(),Vt.dispose(),wt.dispose(),ce.dispose(),De.dispose(),Ao.dispose(),me.dispose(),xi.dispose(),vi.dispose(),Hi.dispose(),fi.dispose(),Xa.dispose(),Ma.dispose(),us.dispose(),fs.dispose(),ds.dispose(),hs.dispose(),Di.dispose(),zi.dispose(),Wa.dispose(),ba.dispose(),Et.dispose()}})(),()=>{At=!0,c.current=null,w()}},[f,ze,k]),Dt.jsxs("div",{className:"relative h-[100svh] w-full overflow-hidden overscroll-none touch-none bg-[#f7f7f4] text-[#141414]",children:[Dt.jsx("div",{ref:r,className:"absolute inset-0"}),Dt.jsx(FR,{}),Dt.jsxs("div",{className:"absolute right-4 top-4 z-[60] flex flex-col items-end gap-2",children:[Dt.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-black/20 bg-white/90 px-2 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur",children:[Dt.jsx("button",{type:"button",onClick:()=>mt("nb"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${$==="nb"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":$==="nb",children:"NO"}),Dt.jsx("button",{type:"button",onClick:()=>mt("en"),className:`pointer-events-auto rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${$==="en"?"bg-[#11161f] text-white":"bg-transparent text-[#4f4f4f] hover:bg-black/5"}`,"aria-pressed":$==="en",children:"EN"})]}),Dt.jsx("button",{type:"button",onClick:Ut,className:"pointer-events-auto rounded-full border border-[#f7d58b]/90 bg-[linear-gradient(180deg,#f9db8d_0%,#d79a3a_52%,#bc7d1f_100%)] px-4 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#241606] shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,245,207,0.82)] transition hover:brightness-105 active:translate-y-[1px]","aria-pressed":M,children:M?"get in":"get out"})]}),g||b?Dt.jsx("div",{className:"pointer-events-none absolute left-1/2 top-[5.35rem] z-30 -translate-x-1/2 rounded-full border border-black/15 bg-white/85 px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-[#3f3f3f] shadow-[0_6px_18px_rgba(0,0,0,0.1)] backdrop-blur",children:g?gt.loadingPanels:gt.panelsFallback}):null,M?null:Dt.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-5 md:px-8",children:[Dt.jsx("h1",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[#525252]",children:gt.siteName}),Dt.jsxs("p",{className:"mt-1 text-[0.64rem] uppercase tracking-[0.15em] text-[#6a6a6a]",children:[gt.activeInstallation,": ",pn]})]}),M?Dt.jsxs("div",{className:"pointer-events-none absolute inset-0 z-40",children:[Dt.jsx("style",{children:`
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
            `}),C==="menu"?Dt.jsxs(Dt.Fragment,{children:[Dt.jsx("p",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7ff] md:text-[0.95rem]",style:{animation:"outsideCorePulse 6.8s ease-in-out infinite"},children:gt.siteName}),Dt.jsx("button",{type:"button",onClick:()=>U("videos"),className:"pointer-events-auto absolute left-1/2 top-1/2 -translate-x-[10.7rem] -translate-y-[6.8rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:-translate-x-[15.6rem] md:-translate-y-[8.8rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Dt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatA 7.5s ease-in-out infinite"},children:gt.outsideVideos})}),Dt.jsx("button",{type:"button",onClick:()=>U("signatures"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[6.8rem] -translate-y-[1.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[14.2rem] md:-translate-y-[2.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Dt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatB 8.8s ease-in-out infinite"},children:gt.outsideSignatures})}),Dt.jsx("button",{type:"button",onClick:()=>U("glyphwall"),className:"pointer-events-auto absolute left-1/2 top-1/2 translate-x-[1.5rem] translate-y-[5.4rem] text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#dbe7ff] transition hover:text-white md:translate-x-[4.8rem] md:translate-y-[8.2rem] md:text-base",style:{textShadow:"0 0 16px rgba(160,190,255,0.55)"},children:Dt.jsx("span",{className:"inline-block",style:{animation:"outsideLinkFloatD 8.1s ease-in-out infinite"},children:gt.outsideGlyphWall})})]}):null,C!=="menu"?Dt.jsxs("div",{className:"pointer-events-auto absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,36,58,0.75),rgba(4,8,18,0.96)_70%)]",children:[Dt.jsxs("div",{className:"absolute left-4 right-4 top-20 z-20 mx-auto w-full max-w-6xl md:left-8 md:right-8 md:top-24",children:[Dt.jsx("button",{type:"button",onClick:()=>U("menu"),className:"mb-4 rounded-full border border-[#8eaed7]/40 bg-[#0b1324]/70 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:bg-[#101d35]",children:gt.outsideBack}),C==="videos"?Dt.jsx(Dt.Fragment,{children:Dt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:gt.outsideVideosTitle})}):null,C==="signatures"?Dt.jsx(Dt.Fragment,{children:Dt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:gt.outsideSignaturesTitle})}):null,C==="news"?Dt.jsxs(Dt.Fragment,{children:[Dt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:gt.outsideNewsTitle}),Dt.jsx("p",{className:"mt-2 text-sm text-[#b8cbe6] md:text-base",children:gt.outsideNewsBody})]}):null,C==="glyphwall"?Dt.jsxs(Dt.Fragment,{children:[Dt.jsx("h2",{className:"text-xl font-semibold uppercase tracking-[0.2em] text-[#e7f1ff] md:text-2xl",children:gt.outsideGlyphWallTitle}),gt.outsideGlyphWallBody?Dt.jsx("p",{className:"mt-2 max-w-4xl text-sm leading-relaxed text-[#b8cbe6] md:text-base",children:gt.outsideGlyphWallBody}):null]}):null]}),C==="signatures"?Dt.jsx("div",{className:"absolute inset-x-4 bottom-14 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:Dt.jsxs("form",{onSubmit:qt,className:"max-w-2xl rounded-2xl border border-[#8fb5e8]/38 bg-[#0b1629]/82 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.42)] md:p-6",children:[Dt.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[Dt.jsxs("label",{className:"block",children:[Dt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:$==="nb"?"Navn":"Name"}),Dt.jsx("input",{type:"text",required:!0,autoComplete:"name",value:tt,onChange:ot=>st(ot.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Dt.jsxs("label",{className:"block",children:[Dt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:$==="nb"?"E-post":"Email"}),Dt.jsx("input",{type:"email",required:!0,autoComplete:"email",value:rt,onChange:ot=>Z(ot.target.value),className:"mt-1 w-full rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]})]}),Dt.jsxs("label",{className:"mt-3 block",children:[Dt.jsx("span",{className:"text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#98b7e5]",children:$==="nb"?"Melding":"Message"}),Dt.jsx("textarea",{required:!0,rows:5,value:O,onChange:ot=>P(ot.target.value),className:"mt-1 w-full resize-y rounded-lg border border-[#86a8d8]/30 bg-[#071022]/85 px-3 py-2 text-sm text-[#e9f1ff] outline-none ring-[#95bbf3]/60 transition focus:ring-2"})]}),Dt.jsx("button",{type:"submit",className:"mt-4 rounded-full border border-[#8fb5e8]/55 bg-[#122742]/85 px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e4efff] transition hover:bg-[#17365a]",children:$==="nb"?"Send melding":"Send message"})]})}):null,C==="news"?Dt.jsxs("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl overflow-auto rounded-2xl border border-[#93b4df]/25 bg-[#071226]/68 p-4 md:inset-x-8 md:top-64 md:p-6",children:[B?Dt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:gt.outsideNewsLoading}):null,!B&&T?Dt.jsx("p",{className:"text-sm text-[#ffb6b6]",children:T}):null,!B&&!T&&N.length===0?Dt.jsx("p",{className:"text-sm text-[#b8cbe6]",children:gt.outsideNewsEmpty}):null,!B&&!T&&N.length>0?Dt.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:N.map(ot=>{const At=Date.parse(ot.published_at),w=Number.isFinite(At)?Ue.format(new Date(At)):ot.published_at;return Dt.jsxs("article",{className:"rounded-xl border border-[#8aa9d3]/20 bg-[#0b162c]/80 p-4",children:[Dt.jsxs("p",{className:"text-[0.62rem] uppercase tracking-[0.15em] text-[#8fb4e8]",children:[ot.source,w?` · ${w}`:""]}),Dt.jsx("h3",{className:"mt-1 text-base font-semibold leading-tight text-[#e4efff]",children:ot.title}),ot.snippet?Dt.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[#bbcee9]",children:ot.snippet}):null,Dt.jsx("a",{href:ot.url,target:"_blank",rel:"noreferrer",className:"mt-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#9fc6ff] transition hover:text-white",children:$==="nb"?"Åpne sak":"Open story"})]},`${ot.url}-${ot.title}`)})}):null]}):null,C==="glyphwall"?Dt.jsx("div",{className:"absolute inset-x-4 bottom-8 top-[15.5rem] mx-auto w-full max-w-6xl md:inset-x-8 md:top-64",children:Dt.jsxs("section",{className:"relative h-full","data-rl-story-version":"rl-story-v1","data-rl-story-name":"replacement-anxiety-pattern",children:[Dt.jsx("div",{className:"relative h-full overflow-auto",children:Dt.jsx("div",{className:"grid grid-cols-3 gap-y-6 pb-6 sm:grid-cols-4 md:grid-cols-6 md:gap-y-7 lg:grid-cols-8 xl:grid-cols-10",children:q.map(ot=>Dt.jsxs("article",{className:"relative flex items-center justify-center","data-rl-story-index":ot.index+1,"data-rl-canonical":ot.canonical,"data-rl-id":ot.id,"data-rl-phase":ot.phase,children:[Dt.jsx("div",{className:"relative h-[7rem] w-[7rem] overflow-hidden rounded-full border border-[#86b5eb]/34",style:{background:"radial-gradient(circle_at_45%_42%,rgba(132,174,233,0.2),rgba(12,22,40,0.92)_72%)",boxShadow:"0 0 20px rgba(98,163,236,0.24), inset 0 0 18px rgba(0,0,0,0.36), inset 0 1px 0 rgba(208,232,255,0.24)",animation:ot.index%3===0?"glyffFloatA 7.8s ease-in-out infinite":ot.index%3===1?"glyffFloatB 9.2s ease-in-out infinite":"glyffFloatC 8.4s ease-in-out infinite",animationDelay:`${ot.index%11*.16}s`},children:ot.previewDataUrl?Dt.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-full bg-[#11213c]",children:[Dt.jsx("img",{src:ot.previewDataUrl,alt:`Glyff ${ot.index+1}`,className:"absolute inset-0 h-full w-full object-cover opacity-88 mix-blend-screen",loading:"lazy"}),Dt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_19%_18%,rgba(198,228,255,0.22),rgba(198,228,255,0)_42%),radial-gradient(circle_at_82%_79%,rgba(0,0,0,0.26),rgba(0,0,0,0)_56%)]"})]}):Dt.jsx("div",{className:"h-full w-full rounded-full bg-[#11213c]"})}),Dt.jsx("span",{className:"sr-only",children:ot.canonical})]},ot.id))})}),Dt.jsx("pre",{className:"sr-only","data-rl-story-payload":!0,children:_t})]})}):null,C==="videos"?Dt.jsx("div",{className:"absolute inset-x-4 bottom-10 top-[15.5rem] mx-auto flex w-full max-w-6xl items-center justify-center md:inset-x-8 md:top-52",onWheel:ie,onTouchStart:fe,onTouchEnd:vn,children:Dt.jsxs("div",{className:"relative h-[min(92vw,47rem)] w-[min(98vw,76rem)] [perspective:760px] [perspective-origin:50%_56%]",children:[Dt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] bg-black"}),Dt.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_120px_rgba(0,0,0,0.92)]"}),Dt.jsxs("p",{className:"absolute left-1/2 top-1 -translate-x-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#e5e7eb]",children:[pt+1," / ",nd.length]}),Dt.jsx("div",{className:"absolute left-1/2 top-1/2 h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.35)]"}),Dt.jsxs("div",{className:"absolute left-1/2 top-1/2 h-full w-full [transform-style:preserve-3d]",style:{transform:`translate(-50%, -50%) translateZ(${lR.toFixed(3)}rem) rotateY(${-pt*cR}deg)`,transition:"transform 420ms cubic-bezier(0.22,0.61,0.36,1)"},children:[Dt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/10",style:{width:`${Yf.toFixed(3)}rem`,height:`${Yf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(${$x.toFixed(3)}rem) rotateX(90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,1) 100%)",boxShadow:"none"}}),Dt.jsx("div",{className:"absolute left-1/2 top-1/2 border border-white/8",style:{width:`${Yf.toFixed(3)}rem`,height:`${Yf.toFixed(3)}rem`,transform:`translate(-50%, -50%) translateY(-${$x.toFixed(3)}rem) rotateX(-90deg)`,background:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 100%)"}}),nd.map((ot,At)=>Dt.jsx("div",{className:"absolute left-1/2 top-1/2 overflow-hidden border border-white/10 bg-black shadow-[0_22px_44px_rgba(0,0,0,0.86)]",style:{width:`${(fy+oR).toFixed(3)}rem`,height:`${I0}rem`,transform:`translate(-50%, -50%) rotateY(${At*60}deg) translateZ(-${dy.toFixed(3)}rem)`,backfaceVisibility:"hidden"},children:Dt.jsx("video",{ref:w=>{l.current[At]=w},src:ot.video,poster:ot.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",className:"h-full w-full object-cover",style:{pointerEvents:"none"}})},`${ot.video}-${At}`))]})]})}):null]}):null]}):null]})}function zR(){return Dt.jsx("div",{className:"min-h-screen bg-[#080604]",children:Dt.jsx(BR,{})})}XM.createRoot(document.getElementById("root")).render(Dt.jsx(se.StrictMode,{children:Dt.jsx(zR,{})}));
